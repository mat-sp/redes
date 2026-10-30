const assert=require('node:assert/strict');
global.RedLab=require('../docs/laboratorio/engine.js');
const {Session,effective,communication,settings}=require('../docs/classroom.js');
global.localStorage={setItem(){}};
const copy=x=>x==null?x:JSON.parse(JSON.stringify(x));
class Memory {
 constructor(shared,uid){this.shared=shared;this.uid=uid;this.mode='test';}
 async get(path){return copy(path.split('/').reduce((x,k)=>x?.[k],this.shared.tree)||null);}
 async set(path,val){let obj=this.shared.tree,keys=path.split('/'),last=keys.pop();for(let k of keys)obj=obj[k]||(obj[k]={});obj[last]=copy(val);this.shared.emit();}
 async transact(p,fn){let old=await this.get(p),v=fn(old);if(v===undefined)return {committed:false,value:old};await this.set(p,v);return {committed:true,value:v};}
 on(p,fn){let cb=async()=>fn(await this.get(p));this.shared.listeners.push(cb);cb();return()=>{this.shared.listeners=this.shared.listeners.filter(x=>x!==cb);};}
}
const shared={tree:{},listeners:[],emit(){this.listeners.forEach(f=>f());}};
let tests=0;async function test(name,fn){await fn();tests++;console.log('✓ '+name);}
(async()=>{
let a=new Session(new Memory(shared,'uid-a'),'Ana Prueba',()=>{}),b=new Session(new Memory(shared,'uid-b'),'Bruno Prueba',()=>{}),room;
await test('Crear sala y unir dos identidades con puestos diferentes',async()=>{room=await a.create();await b.join(room);assert.match(room,/^[A-HJ-NP-Z2-9]{5}$/);assert.equal(a.seat,1);assert.equal(b.seat,2);assert.equal(a.peers().length,2);});
await test('Un código existente se reserva de forma atómica sin sobrescribirlo',async()=>{let probe={uid:'uid-probe',mode:'test',calls:0,async transact(p,fn){this.calls++;if(this.calls===1){assert.equal(fn({owner:'otro'}),undefined);return {committed:false};}assert.equal(fn(null).owner,this.uid);return {committed:true};}};let s=new Session(probe,'Prueba',()=>{});s.join=async code=>{s.room=code;};let code=await s.create();assert.equal(probe.calls,2);assert.match(code,/^[A-HJ-NP-Z2-9]{5}$/);});
await test('El código se acepta en minúsculas y con espacios al copiar',async()=>{await b.join(' '+room.toLowerCase()+' ');assert.equal(b.room,room);assert.equal(b.seat,2);});
await test('Sin wifi no se recibe inicialmente DHCP ni SLAAC',async()=>{assert(!effective(a.me()).connected);assert.equal(effective(a.me()).ip4,'');assert.equal(effective(a.me()).ip6,'');});
await test('Conexión por wifi y asignación automática distintas',async()=>{for(let s of [a,b])await s.configure({ssid:'X49',key:'AulaX49!'});assert(effective(a.me()).connected);assert.notEqual(effective(a.me()).ip4,effective(b.me()).ip4);assert(communication(a.me(),b.me(),a.peers()).ok);});
await test('Contraseña incorrecta aísla el portátil',async()=>{await b.configure({key:'mala'});assert(!communication(a.me(),b.me(),a.peers()).ok);await b.configure({key:'AulaX49!'});});
let fid,file;
await test('Carpeta privada: el compañero no puede abrirla',async()=>{fid=await a.createFolder('Equipo');file=await a.saveFile(fid,null,'Equipo.txt','Texto de Ana',0);await assert.rejects(()=>b.readFiles(fid),/no está compartida/);});
await test('Lectura permite abrir y bloquea guardar',async()=>{await a.share(fid,true,'read');let f=await b.readFiles(fid);assert.equal(f[file.id].text,'Texto de Ana');await assert.rejects(()=>b.saveFile(fid,file.id,file.name,'Intento',1),/solo permite lectura/);});
await test('Escritura remota y vuelta del cambio al propietario',async()=>{await a.share(fid,true,'write');let r=await b.saveFile(fid,file.id,file.name,'Texto de Ana\nAporta Bruno',1);assert.equal(r.revision,2);assert.match((await a.readFiles(fid))[file.id].text,/Bruno/);await a.saveFile(fid,file.id,file.name,'Texto de Ana\nAporta Bruno\nResponde Ana',2);assert.match((await b.readFiles(fid))[file.id].text,/Responde Ana/);});
await test('Una edición antigua no sobrescribe la nueva',async()=>{await assert.rejects(()=>b.saveFile(fid,file.id,file.name,'Versión obsoleta',1),/versión más reciente/);assert.match((await a.readFiles(fid))[file.id].text,/Responde Ana/);});
await test('No permite crear un segundo archivo con el mismo nombre',async()=>{await a.readFiles(fid);await assert.rejects(()=>a.saveFile(fid,null,'Equipo.txt','Otro',0),/Ya existe/);});
await test('Portátil servidor apagado hace inaccesible el recurso',async()=>{await a.configure({power:false});await assert.rejects(()=>b.readFiles(fid),/apagado|desconectado/);assert.equal((await a.readFiles(fid))[file.id].revision,3);await a.configure({power:true});assert((await b.readFiles(fid))[file.id]);});
await test('Bloquear SMB no equivale a perder wifi',async()=>{await a.configure({firewall:false});assert(communication(a.me(),b.me(),a.peers()).ok);await assert.rejects(()=>b.readFiles(fid),/cortafuegos/);await a.configure({firewall:true});});
await test('Carpetas siguen funcionando por IPv6 si IPv4 está apagado',async()=>{await a.configure({mode4:'off'});await b.configure({mode4:'off'});assert.equal(communication(a.me(),b.me(),a.peers()).family,6);assert((await b.readFiles(fid))[file.id]);await a.configure({mode4:'auto'});await b.configure({mode4:'auto'});});
await test('Una puerta de enlace equivocada no rompe el acceso local',async()=>{await a.configure({mode4:'manual',ip4:'192.168.49.30',mask:'255.255.255.0',gw4:'192.168.49.254'});assert(communication(a.me(),b.me(),a.peers(),4).ok);});
await test('Direcciones duplicadas impiden IPv4 y admiten alternativa IPv6',async()=>{let ip=effective(b.me()).ip4;await a.configure({ip4:ip});assert(!communication(a.me(),b.me(),a.peers(),4).ok);assert.equal(communication(a.me(),b.me(),a.peers()).family,6);await a.configure({mode4:'auto'});});
await test('Segundo equipo también comparte y el primero escribe',async()=>{let second=await b.createFolder('Bruno');await b.share(second,true,'write');let txt=await a.saveFile(second,null,'Aportacion.txt','Desde Ana',0);assert.equal((await b.readFiles(second))[txt.id].byName,'Ana Prueba');});
await test('Respuesta compartida y evidencia de autoría',async()=>{await b.answer(3,'Con permiso de lectura no se puede guardar.');await a.mark(3);assert.equal(a.data.answers[3].by,'Bruno Prueba');assert(a.data.completed[3]);assert(Object.values(a.data.events).some(e=>e.uid===b.uid&&e.type==='save'&&e.remote));});
await test('Una copia desde solo lectura se guarda en mi portátil y queda independiente del original',async()=>{await a.share(fid,true,'read');let local=await b.createFolder('Copias_X49'),original=(await a.readFiles(fid))[file.id];let copied=await b.copyFile(fid,file.id,local,'Copia_Equipo.txt');assert.equal(copied.text,original.text);let comparison=await b.compareCopy(Object.values(b.data.events).find(e=>e.type==='copy'&&e.toFile===copied.id));assert.equal(comparison.different,false);await a.saveFile(fid,file.id,file.name,original.text+'\nCambio solo en el original',original.revision);comparison=await b.compareCopy(Object.values(b.data.events).find(e=>e.type==='copy'&&e.toFile===copied.id));assert(comparison.different);assert(!comparison.local.text.includes('Cambio solo'));assert(comparison.source.text.includes('Cambio solo'));assert(Object.values(a.data.events).some(e=>e.type==='copycheck'&&e.different));});
await test('Copiar respeta el acceso al original y exige una carpeta propia de destino',async()=>{let local=Object.entries(b.catalog).find(([,f])=>f.owner===b.uid)[0];await a.share(fid,false,'read');await assert.rejects(()=>b.copyFile(fid,file.id,local,'No.txt'),/no está compartida/);await assert.rejects(()=>b.copyFile(fid,file.id,fid,'No.txt'),/propio portátil/);await a.share(fid,true,'write');});
await test('Límite de cinco puestos en una sala',async()=>{for(let i=3;i<=5;i++)await new Session(new Memory(shared,'uid-'+i),'Alumno '+i,()=>{}).join(room);await assert.rejects(()=>new Session(new Memory(shared,'uid-6'),'Sexto Alumno',()=>{}).join(room),/cinco/);});
await test('Reconexión recupera el mismo portátil por identificador',async()=>{let again=new Session(new Memory(shared,'uid-a'),'Ana Prueba',()=>{});await again.join(room);assert.equal(again.seat,1);assert(again.catalog[fid]);});
console.log(tests+' pruebas de colaboración completadas.');
})().catch(e=>{console.error(e);process.exitCode=1;});
