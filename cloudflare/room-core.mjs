/* Autoridad de una sala. Mismo modelo de red que la práctica del navegador. */
import '../docs/laboratorio/engine.js';
import '../docs/classroom.js';
const {copy,settings,effective,communication}=globalThis.RedClass;
const bad=(text)=>{throw new Error(text);};
const validId=x=>typeof x==='string'&&/^[a-zA-Z0-9_-]{1,64}$/.test(x)&&!['__proto__','constructor','prototype'].includes(x);
const equal=(a,b)=>JSON.stringify(a??null)===JSON.stringify(b??null);
const str=(x,max)=>typeof x==='string'&&x.length>0&&x.length<=max;
export class RoomCore{
 constructor(code,state){this.code=code;this.state=state||{room:{},catalog:{},contents:{}};}
 member(uid){return Object.values(this.state.room.seats||{}).some(s=>s.uid===uid);}
 seat(uid){return Object.entries(this.state.room.seats||{}).find(([,s])=>s.uid===uid)?.[0];}
 parts(path){let p=String(path||'').split('/');if(p[1]!==this.code||!['rooms','catalog','contents'].includes(p[0])||p.some(x=>!validId(x)))bad('Ruta no válida.');return p;}
 value(p){let node=p[0]==='rooms'?this.state.room:this.state[p[0]];for(let k of p.slice(2))node=node?.[k];return node??null;}
 access(uid,fid,write=false){let f=this.state.catalog[fid];if(!f)bad('No existe la carpeta.');if(f.owner===uid)return;let me=this.state.room.computers?.[uid],owner=this.state.room.computers?.[f.owner];let r=communication(me,owner,Object.values(this.state.room.computers||{}));if(!r.ok)bad(r.why);if(!owner.config.sharing||!owner.config.firewall)bad('El equipo remoto no ofrece el servicio SMB o su cortafuegos lo bloquea.');if(!f.enabled)bad('La carpeta no está compartida.');if(write&&f.permission!=='write')bad('Acceso denegado: el recurso solo permite lectura.');}
 read(uid,path){let p=this.parts(path);if(p[0]==='rooms'&&p[2]==='meta'&&p.length===3)return copy(this.state.room.meta||null);if(p[0]==='rooms'&&p[2]==='seats'&&p.length<=4){let seats=this.state.room.seats||{};if(this.member(uid))return copy(this.value(p));if(p.length===4)return seats[p[3]]?{taken:true}:null;return Object.fromEntries(Object.entries(seats).map(([k,s])=>[k,s.uid===uid?copy(s):{taken:true}]));}if(!this.member(uid))bad('Entra primero en un puesto de esta sala.');if(p[0]==='contents'){if(p.length<3||p.length>4)bad('Abre una carpeta concreta.');this.access(uid,p[2]);}else if(p[0]==='rooms'&&p.length>4||p[0]==='catalog'&&p.length>3)bad('Ruta no válida.');return copy(this.value(p));}
 normalComputer(uid,value){let seat=Number(this.seat(uid));if(!seat||!value||value.uid!==uid||value.seat!==seat||!str(value.name,90))bad('Solo puedes configurar tu propio portátil.');let c=copy(value),s={...settings(),...c.config};for(let k of ['power','sharing','firewall','online'])if(typeof s[k]!=='boolean')bad('Configuración no válida.');for(let k of ['mode4','mode6'])if(!['auto','manual','off'].includes(s[k]))bad('Modo IP no válido.');for(let k of ['ssid','key','ip4','mask','gw4','dns4','ip6','gw6','dns6'])if(typeof s[k]!=='string'||s[k].length>100)bad('Dato de red no válido.');if(s.mode4==='manual'&&!RedLab.usable4(s.ip4,s.mask))bad('IPv4 o máscara no válidas.');if(s.mode6==='manual'&&RedLab.ipv6(s.ip6)===null)bad('IPv6 no válida.');c={uid,seat,name:c.name,pc:'PORTATIL-'+seat,mac:'02:49:00:00:00:0'+seat,config:s};c.net=effective(c);return c;}
 write(uid,op,path,value,expected){let p=this.parts(path),r=this.state.room,old=this.value(p),v=copy(value);if(v===null||v===undefined)bad('No se permite borrar por esta ruta.');
 if(p[0]==='rooms'&&p[2]==='meta'&&p.length===3){if(op!=='cas'||v.owner!==uid||v.version!==2)bad('Reserva de sala no válida.');if(old)return {committed:false,value:copy(old)};v={owner:uid,version:2,created:Date.now()};}
 else if(p[0]==='rooms'&&p[2]==='seats'&&p.length===4){if(op!=='cas'||!r.meta||!/^[1-5]$/.test(p[3])||v.uid!==uid||!str(v.name,90))bad('Puesto no válido.');if(old)return {committed:false,value:{taken:true}};if(this.member(uid))bad('Ya tienes un portátil en esta sala.');v={uid,name:v.name};}
 else{if(!this.member(uid))bad('No perteneces a este grupo.');if(op==='cas'&&!equal(old,expected))return {committed:false,value:null};
 if(p[0]==='rooms'&&p[2]==='computers'&&p.length===4){if(p[3]!==uid)bad('Solo puedes configurar tu propio portátil.');v=this.normalComputer(uid,v);}
 else if(p[0]==='rooms'&&p[2]==='events'&&p.length===4){if(old||!str(v.type,40)||typeof v.text!=='string'||v.text.length>400)bad('Acción no válida.');v={...v,uid,name:r.computers?.[uid]?.name||'',time:Date.now()};}
 else if(p[0]==='rooms'&&p[2]==='answers'&&p.length===4){if(!/^[0-6]$/.test(p[3])||!/^test-v1:[A-D]$/.test(v.text||''))bad('Marca una opción válida del test.');v={text:v.text,by:r.computers?.[uid]?.name||'',time:Date.now()};}
 else if(p[0]==='rooms'&&p[2]==='completed'&&p.length===4){if(!/^[0-6]$/.test(p[3]))bad('Paso no válido.');v={by:r.computers?.[uid]?.name||'',time:Date.now()};}
 else if(p[0]==='catalog'&&p.length===3){if(v.owner!==uid||old&&old.owner!==uid||!str(v.name,45)||/[<>:"/\\|?*]/.test(v.name)||typeof v.enabled!=='boolean'||!['read','write'].includes(v.permission))bad('Solo el propietario cambia los permisos de su carpeta.');if(!old&&Object.keys(this.state.catalog).length>=25)bad('La sala admite hasta 25 carpetas.');v={owner:uid,ownerName:r.computers[uid].name,pc:r.computers[uid].pc,name:v.name,enabled:v.enabled,permission:v.permission,created:old?.created||Date.now()};}
 else if(p[0]==='contents'&&p.length===4){this.access(uid,p[2],true);if(op!=='cas')bad('Guarda con control de versión.');if(!str(v.name,64)||!/^[^<>:"/\\|?*]{1,60}\.txt$/i.test(v.name)||typeof v.text!=='string'||v.text.length>20000||v.revision!==(old?.revision||0)+1)bad('Archivo o versión no válidos.');let files=this.state.contents[p[2]]||{};if(!old){if(Object.keys(files).length>=10)bad('Cada carpeta admite hasta 10 archivos.');if(Object.values(files).some(f=>f.name.toLowerCase()===v.name.toLowerCase()))bad('Ya existe un archivo con ese nombre.');}v={name:v.name,text:v.text,revision:v.revision,by:uid,byName:r.computers[uid].name,time:Date.now()};}
 else bad('No se permite modificar esa ruta.');}
 let node=p[0]==='rooms'?r:this.state[p[0]];for(let k of p.slice(2,-1))node=node[k]||(node[k]={});let key=p.at(-1);node[key]=v;
 if(new TextEncoder().encode(JSON.stringify(this.state)).byteLength>900000){if(old===null)delete node[key];else node[key]=old;bad('La sala ha alcanzado su capacidad. Descargad el PDF y continuad en una sala nueva.');}
 if(p[2]==='events'){let events=Object.entries(r.events||{}).sort((a,b)=>a[1].time-b[1].time);for(let [id] of events.slice(0,-500))delete r.events[id];}
 return {committed:true,value:copy(v)};
 }
 online(uid,online){let c=this.state.room.computers?.[uid];if(!c||c.config.online===online)return false;c.config.online=online;c.net=effective(c);return true;}
}
