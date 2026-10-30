# RedLab · Guía docente

La web comienza por la teoría y propone dos prácticas de redes para 4.º ESO. El alumnado solo utiliza nombre y apellido. Los cambios afectan a equipos virtuales, sin modificar la red real de Windows 11.

## Organización

- **Sesión 1, 60 minutos:** teoría esencial (10), red doméstica (40), test y PDF individual (10).
- **Sesión 2, 60 minutos:** grupo y conexión X49 (10), carpetas y edición por turnos (35), interrupción controlada, test y PDF común (15).
- **Tercera sesión si hace falta:** terminar el montaje, repetir las pruebas locales y externas, revisar los test y completar las entregas. No hay taller de averías.

Cada paso muestra una idea esencial y una indicación cada vez, con acceso a la herramienta correspondiente. Avanzar una indicación no completa el paso: Comprobar este paso valida el montaje y las acciones. Las preguntas se responden únicamente al final, mediante test de selección única.

## Red de casa

El plano tiene tres dormitorios, salón, despacho, cocina, baño y pasillo, con puertas, ventanas y mobiliario. Los 16 aparatos obligatorios aparecen desde el principio: router, switch, dos sobremesas, dos portátiles, dos móviles, impresora, TV, tablet, Alexa, dos bombillas, enchufe y robot aspirador. No se añaden aparatos opcionales. Al recuperar montajes de la versión anterior se retiran AP adicional y cámara, conservando los enlaces entre los obligatorios.

El router parte con fibra desconectada. El alumno cablea sobremesa e impresora, revisa DHCP, cambia el wifi y conecta portátil y móvil. Después conecta router–switch, switch–segundo sobremesa y switch–TV, además del segundo portátil, segundo móvil y tablet por wifi.

**La domótica se vincula desde la app Casa conectada de un móvil o tablet ya conectado al wifi.** El alumno elige el aparato, pulsa el botón de emparejamiento simulado, introduce la clave de casa y confirma la conexión. No se escriben los datos wifi directamente en la bombilla, enchufe, altavoz o aspirador. La app valida que el controlador está conectado, el aparato encendido y preparado, la clave coincide y la banda es compatible. Registra qué móvil o tablet lo vinculó.

La app es una simplificación común de procesos que en la realidad dependen del fabricante y pueden utilizar Bluetooth o una red wifi temporal. No simula cuentas ni servicios de marcas. Bombillas, enchufe y robot son modelos de 2,4 GHz con IPv4; el altavoz admite ambas familias IP.

Pruebas de conexión contiene exclusivamente:

1. **Comprobar conectividad:** datos efectivos, enlace, Internet IPv4, Internet IPv6 y DNS.
2. **Ver el recorrido:** destino, familia IP y representación del camino del mensaje.
3. **Servicios de la casa:** impresión de prueba y control local de luces/enchufe desde móvil o tablet.
4. **Navegador del equipo:** páginas simuladas, incluida solo-ipv6.test.

No hay consola ni comandos. El paso 2 exige diagnóstico correcto del sobremesa; el paso 6 exige diagnóstico de ambas familias y DNS, apertura de la página IPv6 y control de un aparato. El último paso compara servicio local y acceso externo al cortar solo la fibra y después recuperarla.

## Aula X49

Un integrante crea el grupo y los demás introducen su código de cinco caracteres. Cada integrante controla su portátil desde un ordenador real. Los roles A, B y C–E aparecen junto al nombre de cada equipo. Tras entrar, aparece el escritorio de Windows 11 simulado, con fondo, iconos, menú Inicio, barra de tareas y ventanas que se pueden mover, redimensionar, minimizar, maximizar y cerrar. Todos conectan X49 desde el icono wifi inferior derecho: seleccionan la red, escriben AulaX49! y pulsan Conectar. Después abren Inicio → Configuración, mantienen IPv4 e IPv6 automáticas, aplican la configuración y pulsan Comprobar conexión. La guía breve permanece a la izquierda; la guía ampliada y el esquema del grupo se despliegan encima del escritorio. No hay terminal.

A crea una carpeta y un archivo, los comparte como lectura y B abre por Red. B intenta guardar y se comprueba la denegación; A concede escritura. B guarda una aportación y después A responde dentro del mismo archivo. En el siguiente paso B comparte otro recurso y A escribe en él. C–E, si existen, también deben guardar en un recurso ajeno. Después B pulsa Copiar a mi portátil, guarda en Copias_X49 y A cambia el original. B utiliza Comparar con original para ver los dos contenidos y comprobar que la copia local es independiente. Esta comparación tras un cambio y la impresión se incluyen en la comprobación del paso 6 y en el registro del PDF. Se comprueba la impresión USB compartida y la indisponibilidad temporal de los recursos al apagar virtualmente al servidor.

Los archivos son recursos de la web, no carpetas SMB del Windows real. Los cambios se comparten al guardar; se trabaja por turnos. El Explorador refleja las versiones automáticamente. Si el archivo está abierto sin cambios pendientes, Bloc de notas recibe el nuevo contenido al guardar desde otro portátil. Si hay un borrador, se conserva y aparece Cargar última versión; el alumno copia su aportación antes de combinarla. El control de versiones rechaza una edición obsoleta. Inicio → Apagar portátil permite comprobar la dependencia del equipo que comparte el recurso.

## Test finales y PDF

Cada práctica termina con **siete preguntas, cuatro opciones por pregunta y una única respuesta correcta**. No hay campos para redactar explicaciones. Las preguntas incluyen una pista y Comprobar test ofrece corrección con explicación de la opción elegida. La corrección es formativa; el PDF registra el resultado y las opciones marcadas.

Las elecciones individuales se guardan en el navegador. En el grupo una persona marca las respuestas acordadas y pulsa Guardar respuestas del grupo; los otros equipos reciben las elecciones guardadas. Los borradores locales no se envían hasta guardarlos. Las respuestas libres de las versiones anteriores no se interpretan como elecciones del nuevo test.

El PDF individual recoge nombre, montaje, direcciones, evidencias y test. El de grupo incluye integrantes, código, recursos, versiones de archivos accesibles, participación, registro y test común. No se incluye la contraseña wifi. Si falta trabajo, el informe se identifica como borrador. La entrega se hace manualmente por Classroom.

## Correspondencia con el material

| Contenido | Material de referencia | Trabajo en la web |
|---|---|---|
| Wifi, Bluetooth, infrarrojos, red móvil | Libro, 20–21 | Teoría 5; elección cable/wifi y ejemplo PAN en casa |
| IoT y wearables | Libro, 22–23 | Teoría 5; alta de Alexa, luz y enchufe; servicios locales y externos |
| Comunicación: emisor, receptor, canal y protocolos | Libro, 24 | Teoría 1; explicación de una impresión en casa |
| LAN, MAN, WAN, PAN y CAN; acceso privado/público y VPN | Libro, 24; práctica 4; sesión 17 | Teoría 2; clasificación de casa y ejemplos de alcance |
| Entre iguales y cliente-servidor | Libro, 24 | Teoría 2; cada portátil sirve una carpeta y utiliza la ajena |
| Bus, anillo y estrella | Libro, 25; sesión 17 | Teoría 3; diseño de casa y estrella wifi del aula |
| Par trenzado, fibra, RJ45 y cableado estructurado | Libro, 25; práctica 4; sesión 17 | Teoría 3; cableado de casa y esquema del centro |
| NIC/MAC, switch, AP y router | Libro, 26; sesión 17 | Teoría 4; configuración del hogar y conexión al AP X49 |
| IPv4, TCP/IP, gateway, DNS y puertos | Libro, 26–27; sesión 18 | Teoría 6, 7 y 9; DHCP, impresora manual y propiedades de red |
| Planificación y direcciones sin duplicar | Libro, práctica 6 | Diseño doméstico; direcciones distintas por puesto en X49 |
| Carpetas, permisos e impresoras compartidas | Libro, prácticas 5 y 13 | Teoría 11; acceso remoto, lectura/escritura, impresora USB y dependencia del servidor |
| Consulta y diagnóstico | Libro, práctica 7; sesión 19 | Diagnóstico con botones, resultados IPv4/IPv6/DNS y recorrido visual |
| IPv6 | Sesiones 18–19; petición del profesor | Teoría 8; doble pila, SLAAC/RA, enlace local y pruebas separadas |

Los conceptos de diagnóstico de las fichas se trabajan aquí mediante botones, resultados y recorridos visuales. La práctica conserva el contenido de redes, pero no exige aprender comandos.

## Configuración y límites

La teoría y la práctica de casa funcionan sin configurar Cloudflare. El modo demo del aula sincroniza pestañas de un mismo navegador. Para comunicar ordenadores distintos es necesario publicar el Worker de Cloudflare y completar su URL y probarlo en el centro, según LEEME_GITHUB_CLOUDFLARE.md. El servicio se ha probado localmente con WebSocket y SQLite; su publicación en la cuenta del profesor y la prueba de la red del centro se realizan siguiendo esas instrucciones.

El plano representa conexiones, no canalizaciones físicas ni cobertura radioeléctrica. El modelo de casa usa una LAN IPv4 /24 y un prefijo IPv6 /64. Los temporizadores y latencias son didácticos. Las direcciones externas son de documentación y las páginas .test solo existen en la simulación.

La conexión de Cloudflare envía los cambios al guardar. El indicador Conexión en directo/Reconexion distingue el transporte real de la asociación wifi virtual a X49. Las salas, archivos y test se conservan en SQLite al cerrar todos los navegadores. Los permisos y las revisiones se validan también en el servidor.
