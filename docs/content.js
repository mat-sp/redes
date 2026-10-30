'use strict';
window.LESSONS = [
  {
    "title": "Una red permite compartir",
    "tag": "Libro · 24",
    "html": "<p>Una <b>red informática</b> conecta dispositivos para intercambiar datos y compartir recursos: archivos, impresoras y servicios. En una comunicación hay un <b>emisor</b>, un <b>receptor</b> y un <b>medio o canal</b>. Los datos se codifican en señales y el receptor los interpreta siguiendo unas reglas: los <b>protocolos</b>.</p><div class=\"concept-flow\"><span>Portátil<br><b>emisor</b></span><i>→</i><span>Wifi / Ethernet<br><b>canal</b></span><i>→</i><span>Impresora<br><b>receptor</b></span></div><p>Una <b>LAN puede funcionar sin Internet</b>. Puedes compartir un archivo con otro equipo de la misma red aunque el operador tenga una avería. Internet comunica muchas redes.</p>"
  },
  {
    "title": "Alcance, acceso y organización",
    "tag": "Libro · 24 y práctica 4",
    "html": "<table><tr><th>Alcance orientativo</th><th>Ejemplo</th></tr><tr><td>PAN · personal</td><td>Móvil y reloj por Bluetooth.</td></tr><tr><td>LAN · local</td><td>Casa o aula. WLAN es una LAN con acceso inalámbrico.</td></tr><tr><td>CAN · campus</td><td>Redes de varios edificios de una institución.</td></tr><tr><td>MAN · metropolitana</td><td>Conexiones dentro de una zona urbana.</td></tr><tr><td>WAN · extensa</td><td>Conecta redes distantes. Internet es una red de redes de alcance mundial.</td></tr></table><p>El alcance no determina quién entra: una red puede tener <b>acceso privado o público</b>. Una <b>intranet</b> ofrece servicios internos. Una <b>VPN</b> crea una conexión lógica protegida sobre otra red; no es otra medida de tamaño.</p><p>En el modelo <b>cliente-servidor</b>, un servicio atiende a sus clientes. En una red <b>entre iguales</b>, los equipos pueden ofrecer y usar recursos. En X49, tu portátil será servidor de su carpeta y cliente de la de un compañero.</p>"
  },
  {
    "title": "Topologías y medios de transmisión",
    "tag": "Libro · 25 y práctica 4",
    "html": "<p>La <b>topología física</b> describe cómo se conectan los equipos. En <b>bus</b> comparten un canal principal; en <b>anillo</b> se conectan formando un circuito; en <b>estrella</b> cada uno se une a un punto central. Las LAN Ethernet actuales suelen usar estrellas con switches; un edificio puede combinar varias estrellas.</p><table><tr><th>Medio</th><th>Características y elección</th></tr><tr><td>Par trenzado UTP/STP</td><td>Cobre, pares de hilos trenzados; STP incorpora apantallamiento. Conector 8P8C, llamado habitualmente RJ45. La categoría y los equipos determinan la velocidad. Referencia de canal: 100 m, incluidos latiguillos.</td></tr><tr><td>Fibra óptica</td><td>Transporta pulsos de luz. Adecuada para capacidad y distancia elevadas; resiste interferencias electromagnéticas.</td></tr><tr><td>Wifi</td><td>Ondas de radio: movilidad, medio compartido y rendimiento variable. Es tecnología de acceso, no una topología.</td></tr></table><p><b>Cableado estructurado:</b> latiguillo del equipo → roseta → cable horizontal → panel de parcheo (<i>patch panel</i>) → latiguillo → switch en un <b>rack</b>. El <b>backbone</b> enlaza zonas o plantas; puede formar una estrella y no tiene que ser un bus.</p>"
  },
  {
    "title": "Los aparatos cumplen funciones distintas",
    "tag": "Libro · 26",
    "html": "<table><tr><th>Elemento</th><th>Función</th></tr><tr><td>Interfaz o tarjeta de red</td><td>Conecta el equipo al medio. Tiene una dirección MAC a nivel de enlace; puede ser local o aleatoria, por lo que no es una identidad personal inmutable.</td></tr><tr><td>Switch</td><td>Conecta dispositivos de una LAN y reenvía tramas según las MAC aprendidas. Un switch no gestionable no necesita una IP para hacer esta tarea.</td></tr><tr><td>Punto de acceso · AP</td><td>Une clientes wifi a la LAN. En X49 se conecta por Ethernet a la infraestructura del centro.</td></tr><tr><td>Router</td><td>Comunica redes y encamina paquetes IP. La puerta de enlace de los clientes suele ser su dirección en la LAN.</td></tr><tr><td>ONT</td><td>Termina el acceso de fibra del operador.</td></tr></table><p>El router doméstico de la práctica reúne <b>ONT, router, switch, AP y servicios DHCP/DNS</b>. El AP de X49 es un puente: el router y los servicios del centro están detrás de él.</p>"
  },
  {
    "title": "Wifi, otras conexiones e Internet de las cosas",
    "tag": "Libro · 20–23",
    "html": "<p>El <b>SSID</b> identifica la red wifi. Para entrar se necesitan una banda y seguridad compatibles y las credenciales correctas. Trabajaremos <b>2,4 y 5 GHz</b>, WPA2-Personal con AES y WPA3-Personal. Las luces y el enchufe del catálogo son modelos de 2,4 GHz y WPA2; otros productos reales pueden admitir más opciones. La velocidad anunciada es teórica y depende del estándar, la distancia, obstáculos y ocupación.</p><p><b>Bluetooth</b> conecta dispositivos cercanos, como un reloj y un móvil. Los <b>infrarrojos</b> necesitan una trayectoria adecuada, como un mando. <b>4G/5G</b> conectan mediante la red móvil del operador; 5G móvil y wifi de 5 GHz son conceptos diferentes.</p><p><b>IoT</b> conecta objetos con sensores o actuadores: luces, enchufes o termostatos. Los <b>wearables</b> son dispositivos que llevamos puestos. Algunos servicios son locales y otros dependen de la nube. En esta casa, el control directo de luces y enchufe es local; la consulta de Alexa y el contenido de la Smart TV dependen de Internet.</p><h2>Conectar un aparato inteligente desde el móvil</h2><p>Muchos dispositivos se configuran con la app de su fabricante en un móvil o tablet. La app transmite los datos de la red al aparato en modo emparejamiento. Según el modelo se utiliza Bluetooth o una red wifi temporal durante el alta.</p><p>En RedLab usamos una app simulada común, <b>Casa conectada</b>: conecta primero el móvil o la tablet al wifi, selecciona el aparato, simula el botón de emparejamiento e introduce la clave de casa. No se necesitan cuentas ni apps reales. Bombillas, enchufe y robot de este modelo utilizan 2,4 GHz; no todos los productos reales tienen las mismas capacidades.</p>"
  },
  {
    "title": "IPv4, máscara y puerta de enlace",
    "tag": "Libro · 26–27 y práctica 6",
    "html": "<p>Una dirección <b>IPv4 tiene 32 bits</b>, expresados como cuatro números de 0 a 255. Una interfaz necesita una dirección válida, sin duplicados en su red. La <b>máscara</b> indica qué parte identifica la subred.</p><table><tr><th>Dato</th><th>Casa</th><th>Aula X49</th></tr><tr><td>Subred</td><td>192.168.1.0/24</td><td>192.168.49.0/24</td></tr><tr><td>Máscara</td><td>255.255.255.0</td><td>255.255.255.0</td></tr><tr><td>Puerta de enlace</td><td>192.168.1.1</td><td>192.168.49.1</td></tr></table><p>En estas subredes /24, las direcciones terminadas en .0 y .255 son red y difusión y no se asignan a equipos. Para un destino de otra red, el equipo usa normalmente la <b>puerta de enlace</b>; para un vecino de su subred, se comunica directamente por la LAN.</p><p>Las direcciones 192.168.x.x de estos ejemplos son <b>privadas</b>. Al salir por IPv4, el router puede aplicar <b>NAT/PAT</b>. La IP local y la IP pública de salida no tienen por qué coincidir.</p>"
  },
  {
    "title": "DHCP y DNS: dos servicios diferentes",
    "tag": "Libro · 27 y sesión 18",
    "html": "<p><b>DHCPv4</b> proporciona automáticamente dirección IPv4, máscara, puerta de enlace y DNS durante una concesión. Apagar DHCP no borra las concesiones vigentes. Si el equipo no consigue configuración, puede mostrar 169.254.x.x: una dirección de enlace local, sin salida automática a Internet.</p><p><b>DNS</b> resuelve nombres a direcciones: un registro <b>A</b> proporciona IPv4 y <b>AAAA</b> proporciona IPv6. Un DNS accesible por IPv4 puede responder con una IPv6. Que una IP responda no prueba que funcione DNS.</p><p>La impresora de casa usará una IP manual fuera del intervalo DHCP, o en una red real podría utilizarse una reserva DHCP. En X49 empezarás con dirección automática y compararás los datos de los portátiles.</p>"
  },
  {
    "title": "IPv6 y doble pila",
    "tag": "Ampliación actualizada · sesión 18",
    "html": "<p><b>IPv6 tiene 128 bits</b> y se escribe en hexadecimal. <code>2001:db8:49::101</code> es un ejemplo abreviado: <code>::</code> sustituye bloques de ceros una sola vez. Los prefijos <code>2001:db8::/32</code> de esta web son de documentación y se usan solo en el simulador.</p><p>Una dirección <code>fe80::…</code> es de <b>enlace local</b>. Mediante <b>SLAAC</b> y los anuncios <b>RA</b>, el cliente puede formar una dirección de otro alcance y aprender el router por defecto; RA puede anunciar DNS mediante RDNSS. <b>DHCPv6</b> es otro mecanismo de configuración, pero no sustituye a RA para descubrir automáticamente la puerta de enlace. Aquí se implementa SLAAC/RA.</p><p>Con <b>doble pila</b>, IPv4 e IPv6 coexisten. La web puede abrir por uno aunque el otro falle. Pulsa <b>Comprobar conectividad</b> desde el sobremesa y compara los resultados de cada versión. IPv6 no utiliza broadcast; una dirección global tampoco elimina la necesidad de un cortafuegos.</p>"
  },
  {
    "title": "Protocolos, servicios y puertos",
    "tag": "Libro · 26–27",
    "html": "<p><b>TCP/IP es una familia de protocolos</b>. IP se ocupa del direccionamiento y encaminamiento. TCP proporciona transporte fiable y ordenado; UDP transporta datagramas sin ofrecer esas mismas garantías. Los <b>puertos pertenecen a TCP o UDP</b>, y permiten distinguir servicios.</p><table><tr><th>Servicio</th><th>Referencia habitual</th></tr><tr><td>Web</td><td>HTTP TCP 80; HTTPS TCP 443 (también existen otros transportes, como QUIC en UDP 443).</td></tr><tr><td>Nombres</td><td>DNS UDP/TCP 53.</td></tr><tr><td>Archivos en la LAN</td><td>SMB TCP 445; lo simularemos en Windows 11.</td></tr><tr><td>Correo</td><td>SMTP para envío y POP3/IMAP para recepción; se utilizan variantes y configuración con cifrado.</td></tr><tr><td>Acceso y transferencia</td><td>SSH/SFTP, normalmente TCP 22. FTP (21) y Telnet (23) aparecen en el libro: sus formas clásicas no protegen credenciales.</td></tr></table><p>Una dirección y un puerto identifican un extremo de comunicación; la palabra <i>socket</i> tiene ese sentido en los ejemplos del libro.</p>"
  },
  {
    "title": "Diagnóstico en Windows 11",
    "tag": "Libro · práctica 7 y sesión 19",
    "html": "<p>Para revisar una conexión, sigue este orden: <b>enlace → datos IP → comunicación local → acceso externo → nombres DNS</b>.</p><div class=\"notice\">En esta práctica no necesitas escribir comandos: utiliza los cuatro apartados de Pruebas de conexión.</div><ul><li><b>Comprobar conectividad:</b> muestra los datos del aparato y el estado del enlace, Internet IPv4, Internet IPv6 y DNS.</li><li><b>Ver el recorrido:</b> dibuja por qué aparatos pasa el mensaje hasta su destino.</li><li><b>Servicios de la casa:</b> prueba la impresora y el control local de luces y enchufes.</li><li><b>Navegador del equipo:</b> abre una página simulada y muestra si se ha utilizado IPv4 o IPv6.</li></ul><p>Si una impresión local funciona, pero una web externa no abre, revisa la salida del router. Si una versión de IP falla, compara la otra. En la práctica, el diagnóstico comprueba los destinos representados; no mide la red real del ordenador.</p>"
  },
  {
    "title": "Carpetas e impresoras compartidas",
    "tag": "Libro · prácticas 5 y 13",
    "html": "<p><b>Compartir no es copiar</b>: cuando abres la carpeta compartida de otro equipo, accedes al recurso que ofrece ese equipo. Si guardas un cambio allí, los demás verán el archivo actualizado. Una copia en tu carpeta personal es otro archivo.</p><ol><li>Crea una carpeta en Documentos.</li><li>Activa su uso compartido y define los permisos.</li><li>Desde otro equipo, abre <b>Explorador → Red → PC del compañero</b>.</li><li>Prueba lectura y después escritura. Guarda los cambios y compruébalos desde el otro portátil.</li></ol><p><b>Lectura</b> permite abrir; <b>lectura y escritura</b> permite crear y modificar. En Windows real se combinan permisos del recurso compartido, del sistema de archivos, autenticación y cortafuegos. Aquí se agrupan en controles de uso compartido y lectura/escritura.</p><p>Los equipos deben tener conectividad entre sí y el servicio disponible. Estar en el mismo SSID no siempre basta: puede haber aislamiento de clientes. Un ordenador apagado deja de servir su carpeta. Una impresora de red tiene su propia conexión; una impresora USB compartida depende del ordenador que la sirve.</p><p>En esta simulación los cambios se comparten al <b>guardar</b>, como en un editor normal; si dos personas editan una versión antigua, se detecta el conflicto antes de sobrescribir.</p>"
  }
];
window.HOME_STEPS = [
  {
    "title": "Diseña y conecta",
    "text": "Revisa el plano común. Conecta la fibra al router y cablea el sobremesa y la impresora a puertos LAN libres. Mantén todos encendidos. Arrastra los dispositivos para colocarlos en las habitaciones."
  },
  {
    "title": "Consigue una configuración automática",
    "text": "Deja el sobremesa en IPv4 automática. En Pruebas de conexión selecciona Sobremesa y pulsa Comprobar conectividad. Lee la IP, máscara, puerta de enlace y DNS, y observa el recorrido hacia aula.test."
  },
  {
    "title": "Configura el wifi de casa",
    "text": "En el router cambia el SSID y la contraseña inicial. Usa una red protegida. Conecta el portátil y el móvil buscando ese SSID y escribiendo la clave. Comprueba la navegación de los dos."
  },
  {
    "title": "Conecta todos los aparatos de casa",
    "text": "Conecta el switch, el segundo sobremesa y la TV por cable. Conecta los demás equipos por wifi. Desde Casa conectada en un móvil o tablet vincula Alexa, las dos bombillas, el enchufe y el aspirador."
  },
  {
    "title": "Da una IP estable a la impresora",
    "text": "Configura la impresora con IPv4 manual dentro de la subred y fuera del intervalo DHCP. Prueba su acceso desde el sobremesa y envía una impresión de prueba. Comprueba que no hay direcciones repetidas."
  },
  {
    "title": "Comprueba las dos versiones de IP",
    "text": "Comprueba el diagnóstico del sobremesa, abre solo-ipv6.test y controla una luz desde un móvil o tablet en Servicios de la casa."
  },
  {
    "title": "Distingue red local y salida a Internet",
    "text": "Desconecta la fibra en el router. Desde el móvil prueba la domótica local y desde el sobremesa la impresora; intenta abrir una web externa. Después vuelve a conectar la fibra y comprueba la recuperación."
  }
];
window.CLASS_STEPS = [
  {
    "title": "Entra con todo tu grupo",
    "text": "Quien crea la sala comparte el código. Todos entran, comprueban su portátil y conocen el orden de los turnos."
  },
  {
    "title": "Conecta tu portátil a X49",
    "text": "Cada integrante conecta su wifi virtual, revisa las direcciones automáticas y pulsa Comprobar conexión."
  },
  {
    "title": "Abrimos el primer recurso compartido",
    "text": "Quien creó la sala crea una carpeta y un archivo. Comparte con Lectura. Todos los demás abren el archivo por Red."
  },
  {
    "title": "Probamos los permisos entre todos",
    "text": "Cada compañero intenta Guardar con solo lectura. Después, quien creó el recurso concede Lectura y escritura."
  },
  {
    "title": "Todos editamos el primer archivo",
    "text": "Los compañeros añaden una frase uno a uno. Al terminar todos, quien creó el archivo guarda una respuesta final."
  },
  {
    "title": "Todos compartimos, copiamos e imprimimos",
    "text": "Todos tienen su carpeta y archivo. Cada uno edita el del siguiente compañero, guarda una copia, la compara tras cambiar el original y prueba su impresora."
  },
  {
    "title": "Apagamos por turnos y entregamos",
    "text": "Cada integrante apaga su portátil virtual mientras el compañero anterior intenta entrar. Se recupera antes de pasar al siguiente. Al final, test y PDF común."
  }
];
