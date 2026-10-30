'use strict';
window.HOME_GUIDES = [
  {
    "goal": "Unir el router con Internet y conectar dos aparatos por cable.",
    "expected": "Verás un cable entre el router y el sobremesa y otro entre el router y la impresora. El indicador del operador dejará de mostrar «Sin enlace».",
    "help": "Si un puerto no aparece en la lista, ya tiene un cable: elige otro libre. Para cerrar una ventana de configuración, pulsa su ✕.",
    "steps": [
      [
        "Busca el router en el plano",
        "Pulsa sobre <b>Router de casa</b>. Se abrirá su configuración a la derecha. La casilla <b>Alimentación encendida</b> debe estar marcada.",
        "router",
        "Abrir el router"
      ],
      [
        "Conecta la fibra",
        "Marca <b>Fibra conectada a la ONT</b>. Conserva marcado <b>Servicio del operador disponible</b>. Pulsa <b>Aplicar configuración</b>; hay un botón arriba y otro al pie del panel. Después ciérralo con ✕.",
        "router-fiber",
        "Ir a la casilla de fibra"
      ],
      [
        "Abre el cuadro para poner un cable",
        "Pulsa <b>Conectar cable</b>, encima del plano. En esta ventana eliges los dos extremos del cable Ethernet.",
        "cable",
        "Abrir Conectar cable"
      ],
      [
        "Conecta el sobremesa",
        "En <b>Dispositivo A</b> elige <b>Router de casa</b> y un puerto LAN libre. En <b>Dispositivo B</b> elige <b>Sobremesa</b> y su puerto <b>LAN 1</b>. Pulsa <b>Conectar cable Ethernet</b>.",
        "cable",
        "Elegir los extremos del cable"
      ],
      [
        "Conecta la impresora",
        "Abre otra vez <b>Conectar cable</b>. Elige <b>Router de casa</b> y otro puerto LAN libre como A; <b>Impresora</b> y <b>LAN 1</b> como B. Pulsa <b>Conectar cable Ethernet</b>.",
        "cable",
        "Conectar el segundo cable"
      ],
      [
        "Comprueba los dos cables",
        "En el plano deben aparecer dos líneas: router–sobremesa y router–impresora. Pulsa <b>Comprobar este paso</b>. Si falta algo, el aviso te dirá qué revisar.",
        "map",
        "Volver al plano"
      ]
    ]
  },
  {
    "goal": "Ver cómo el router configura automáticamente el sobremesa y comprobar su conexión.",
    "expected": "En Comprobar conectividad verás la IP recibida y el resultado del enlace, IPv4, IPv6 y DNS.",
    "help": "Si ves una IP 169.254…, revisa el cable y que el DHCP del router esté activado. Si la LAN funciona pero la web no, revisa la fibra.",
    "steps": [
      [
        "Deja la IPv4 en automático",
        "Pulsa <b>Sobremesa</b>. En <b>IPv4</b>, deja <b>Asignación de IPv4: Automático (DHCP)</b> y pulsa <b>Aplicar configuración</b>.",
        "desktop",
        "Configurar el sobremesa"
      ],
      [
        "Abre las pruebas del sobremesa",
        "Entra en <b>Pruebas de conexión</b>. Arriba, en <b>Elige el aparato desde el que pruebas</b>, selecciona <b>Sobremesa</b>.",
        "tests-desktop",
        "Abrir las pruebas"
      ],
      [
        "Pulsa Comprobar conectividad",
        "Pulsa el botón <b>Comprobar conectividad</b>. Aparecerán los datos del equipo y cuatro resultados. No hay que escribir comandos.",
        "tests-desktop",
        "Ir a Comprobar conectividad"
      ],
      [
        "Localiza los datos recibidos",
        "Lee la <b>IPv4</b>, <b>máscara</b>, <b>puerta de enlace</b> y <b>DNS</b>. El router los ha proporcionado mediante DHCP. Con los valores iniciales, la IP será 192.168.1.x.",
        "tests-desktop",
        "Ver los datos del equipo"
      ],
      [
        "Observa por dónde sale el mensaje",
        "En <b>Ver el recorrido</b>, deja <b>Destino: aula.test</b> e <b>IPv4</b>. Pulsa <b>Ver el recorrido</b>. Observa el sobremesa, router, operador y servidor.",
        "trace-desktop",
        "Abrir Ver el recorrido"
      ],
      [
        "Comprueba el paso",
        "Con el diagnóstico realizado y la conexión correcta, pulsa <b>Comprobar este paso</b>. Las preguntas tipo test se responden al terminar toda la práctica.",
        "tests-desktop",
        "Volver a las pruebas"
      ]
    ]
  },
  {
    "goal": "Crear el wifi de casa y conectar el portátil y el móvil.",
    "expected": "El portátil y el móvil aparecerán unidos al router mediante líneas discontinuas. Una página externa se abrirá desde ambos.",
    "help": "Comprueba SSID y contraseña letra a letra: las mayúsculas importan. Si el portátil sigue por Ethernet, cambia su Adaptador activo a Wifi y aplica. Cambiar la clave del router no actualiza automáticamente los clientes.",
    "steps": [
      [
        "Abre el apartado Wifi del router",
        "Selecciona <b>Router de casa</b> y despliega <b>Wifi</b>. Mantén activadas la radio wifi y las bandas <b>2,4 GHz</b> y <b>5 GHz</b>.",
        "router-wifi",
        "Abrir el Wifi del router"
      ],
      [
        "Pon nombre y contraseña a tu red",
        "En <b>Nombre de red (SSID)</b> puedes escribir <code>MiCasa</code>. En <b>Contraseña wifi</b>, por ejemplo <code>RedCasa2026!</code>. Anota tus datos para repetirlos en los aparatos. Puedes elegir otros válidos.",
        "router-wifi",
        "Ir al nombre y la contraseña"
      ],
      [
        "Elige seguridad y guarda",
        "En <b>Seguridad</b> elige <b>WPA2/WPA3-Personal</b>: será compatible con la domótica de la próxima fase. Pulsa <b>Aplicar configuración</b> y cierra el panel.",
        "router-wifi",
        "Revisar y guardar el Wifi"
      ],
      [
        "Cambia el portátil a Wifi",
        "Selecciona <b>Portátil</b>. En <b>Adaptador activo</b> elige <b>Wifi</b>. Despliega <b>Conexión wifi</b> si está cerrada.",
        "laptop-wifi",
        "Abrir la conexión del portátil"
      ],
      [
        "Conecta el portátil a tu red",
        "Pulsa <b>Buscar redes disponibles</b> y selecciona el nombre que acabas de crear. Escribe su contraseña en <b>Contraseña wifi</b>. Elige una banda activa y pulsa <b>Aplicar configuración</b>.",
        "laptop-wifi",
        "Configurar el Wifi del portátil"
      ],
      [
        "Conecta también el móvil",
        "Selecciona <b>Móvil</b>. Repite <b>Buscar redes disponibles → tu red → contraseña</b> y pulsa <b>Aplicar configuración</b>.",
        "phone-wifi",
        "Configurar el móvil"
      ],
      [
        "Comprueba que los dos navegan",
        "En <b>Pruebas de conexión</b>, elige primero Portátil y abre <code>aula.test</code> en el <b>Navegador del equipo</b>. Repite eligiendo Móvil. La web debe indicar conexión correcta.",
        "browser-laptop",
        "Abrir el navegador del portátil"
      ],
      [
        "Prueba también desde el móvil",
        "Selecciona <b>Móvil</b>, abre <code>aula.test</code> y lee si funciona. Después pulsa <b>Comprobar este paso</b>.",
        "browser-phone",
        "Abrir el navegador del móvil"
      ]
    ]
  },
  {
    "goal": "Conectar todos los aparatos de casa y vincular la domótica desde un móvil o tablet.",
    "expected": "Los 16 aparatos obligatorios tendrán conexión. Alexa, las dos bombillas, el enchufe y el aspirador constarán como vinculados desde la app.",
    "help": "Conecta primero el móvil o la tablet al wifi. En la app, prepara el modo emparejamiento antes de Conectar. La clave es la misma que elegiste para el router. Las bombillas, el enchufe y el robot necesitan 2,4 GHz y WPA2 compatible.",
    "steps": [
      [
        "Conecta el switch",
        "En <b>Conectar cable</b>, elige <b>Router de casa</b> con un puerto libre como A y <b>Switch LAN 1</b> como B. Confirma con <b>Conectar cable Ethernet</b>.",
        "cable",
        "Conectar router y switch"
      ],
      [
        "Conecta el segundo sobremesa",
        "En <b>Conectar cable</b>, elige <b>Switch LAN 2 → Sobremesa 2 LAN 1</b> y confirma.",
        "cable",
        "Cablear el segundo sobremesa"
      ],
      [
        "Conecta la televisión",
        "En <b>Conectar cable</b>, elige <b>Switch LAN 3 → Smart TV LAN 1</b> y confirma. La TV usará Ethernet.",
        "cable",
        "Cablear la Smart TV"
      ],
      [
        "Conecta Portátil 2 y Móvil 2",
        "Pulsa cada aparato en el plano. Elige <b>Adaptador activo: Wifi</b>, busca tu red, escribe su contraseña y pulsa <b>Aplicar configuración</b>. Hazlo primero en Portátil 2 y después en Móvil 2.",
        "type:laptop",
        "Abrir el portátil pendiente"
      ],
      [
        "Conecta la tablet",
        "Pulsa <b>Tablet</b> en el salón. Busca tu red, introduce su contraseña y pulsa <b>Aplicar configuración</b>. Ya tienes móviles y tablet para configurar la domótica.",
        "type:tablet",
        "Configurar la tablet"
      ],
      [
        "Abre la app Casa conectada",
        "Selecciona un <b>Móvil</b> o la <b>Tablet</b> en el plano y pulsa <b>Abrir app Casa conectada</b>. Comprueba que arriba indica que está conectado a tu wifi. En la app selecciona <b>Alexa / altavoz inteligente</b>.",
        "smart-app",
        "Abrir Casa conectada"
      ],
      [
        "Vincula Alexa desde la app",
        "Pulsa <b>Simular botón de emparejamiento</b>: aparecerá Luz parpadeando. Comprueba el nombre de tu wifi, escribe la contraseña y pulsa <b>Conectar aparato al wifi</b>. Debe aparecer Aparato vinculado.",
        "smart-app",
        "Volver a la app"
      ],
      [
        "Vincula las dos bombillas",
        "Pulsa <b>Vincular otro aparato</b>. Elige <b>Bombilla wifi</b>, prepara el emparejamiento, introduce la clave y deja <b>2,4 GHz</b>. Conecta. Repite con <b>Bombilla wifi 2</b>.",
        "smart-app",
        "Abrir la lista de aparatos"
      ],
      [
        "Vincula el enchufe y el aspirador",
        "Desde la misma app, repite el procedimiento para <b>Enchufe wifi</b> y después <b>Robot aspirador wifi</b>: emparejamiento, clave de casa, <b>2,4 GHz</b> y Conectar.",
        "smart-app",
        "Vincular los aparatos pendientes"
      ],
      [
        "Revisa el listado y comprueba",
        "Abre el listado de este paso. Todos deben aparecer conectados. Si falta un aparato inteligente, vuelve a <b>Casa conectada</b>; si falta otro equipo, abre su configuración. Pulsa <b>Comprobar este paso</b>.",
        "map",
        "Ver el plano completo"
      ]
    ]
  },
  {
    "goal": "Asignar una IPv4 manual a la impresora y enviarle una página por la LAN.",
    "expected": "La impresora tendrá una IPv4 estable fuera del intervalo DHCP. La impresión desde el sobremesa mostrará «La impresora ha recibido la página».",
    "help": "La propuesta 192.168.1.20 funciona con la red inicial. Si cambiaste la subred o el rango DHCP, debes adaptar la IP. No uses .0, .255 ni la misma IP que otro equipo.",
    "steps": [
      [
        "Abre la IPv4 de la impresora",
        "Pulsa <b>Impresora</b>. Dentro de <b>IPv4</b>, cambia <b>Asignación de IPv4</b> a <b>Manual</b>. Aparecerán los campos que vas a completar.",
        "printer",
        "Abrir la impresora"
      ],
      [
        "Escribe una dirección válida",
        "Si mantienes la red inicial, usa: <b>Dirección IPv4</b> <code>192.168.1.20</code>; <b>Máscara</b> <code>255.255.255.0</code>; <b>Puerta de enlace</b> y <b>DNS</b> <code>192.168.1.1</code>.",
        "printer",
        "Ir a los campos de la impresora"
      ],
      [
        "Aplica y revisa los datos efectivos",
        "Pulsa <b>Aplicar configuración</b>. Lee la <b>Configuración efectiva</b> de la impresora y comprueba la dirección guardada. Con el rango inicial, .20 está fuera de .100–.199.",
        "printer",
        "Comprobar la IP guardada"
      ],
      [
        "Envía la página desde el sobremesa",
        "Abre <b>Pruebas de conexión</b> y elige <b>Sobremesa</b> en <b>Ejecutar las pruebas desde</b>. En <b>Servicios de la casa</b> pulsa <b>Impresión de prueba</b>.",
        "print-desktop",
        "Ir a Impresión de prueba"
      ],
      [
        "Comprueba que llega la página",
        "Debe aparecer que la impresora ha recibido la página. Si falla, revisa sus dos extremos del cable y la IP guardada. Después pulsa <b>Comprobar este paso</b>.",
        "print-desktop",
        "Volver a la impresión de prueba"
      ]
    ]
  },
  {
    "goal": "Comprobar IPv4, IPv6 y DNS con botones y usar un servicio local.",
    "expected": "El diagnóstico del sobremesa mostrará IPv4, IPv6 y DNS correctos, la web solo-ipv6.test abrirá y podrás encender una luz desde el móvil.",
    "help": "Las bombillas, el enchufe y el aspirador de esta práctica solo tienen IPv4. Haz la prueba de las dos versiones desde el sobremesa. Para controlar luces, elige un móvil o tablet conectado.",
    "steps": [
      [
        "Comprueba la conexión del sobremesa",
        "En <b>Pruebas de conexión</b>, selecciona <b>Sobremesa</b> arriba y pulsa <b>Comprobar conectividad</b>.",
        "tests-desktop",
        "Abrir las pruebas del sobremesa"
      ],
      [
        "Lee los resultados de las dos versiones",
        "Localiza <b>Internet IPv4</b>, <b>Internet IPv6</b> y <b>DNS</b>: deben estar correctos. En los datos del equipo, una IPv4 usa puntos y una IPv6 usa dos puntos. DNS busca la dirección de los nombres.",
        "tests-desktop",
        "Ver el diagnóstico"
      ],
      [
        "Abre la página que solo usa IPv6",
        "En <b>Navegador del equipo</b>, escribe <code>solo-ipv6.test</code> y pulsa <b>Abrir</b>. Debe indicar <b>Conexión IPv6</b>.",
        "browser-ipv6",
        "Abrir el navegador"
      ],
      [
        "Enciende una luz desde el móvil",
        "Arriba selecciona <b>Móvil</b>. En <b>Servicios de la casa</b>, pulsa <b>Encender Bombilla wifi</b> o <b>Encender Enchufe wifi</b>. El aparato debe recibir la orden.",
        "control-phone",
        "Abrir los servicios desde el móvil"
      ],
      [
        "Comprueba el paso",
        "Después del diagnóstico, la web IPv6 y el control de la luz, pulsa <b>Comprobar este paso</b>. Si falta una acción, el aviso te dirá cuál.",
        "tests-desktop",
        "Volver a las pruebas"
      ]
    ]
  },
  {
    "goal": "Comprobar qué sigue funcionando cuando se corta la salida a Internet.",
    "expected": "Sin fibra, la impresora y la domótica local seguirán accesibles, pero una web externa fallará. Tras reconectar, volverá la navegación.",
    "help": "Corta únicamente «Fibra conectada a la ONT». Si apagas el router o desconectas los cables LAN, también romperás la red local y estarás probando otra avería.",
    "steps": [
      [
        "Comprueba primero que tienes Internet",
        "En el navegador del <b>Sobremesa</b>, abre <code>aula.test</code>. Debe funcionar antes de provocar el corte. Así podrás comparar el antes y el después.",
        "browser-desktop",
        "Abrir la web antes del corte"
      ],
      [
        "Corta la fibra, sin apagar el router",
        "Abre <b>Router de casa</b>. Desmarca solo <b>Fibra conectada a la ONT</b> y pulsa <b>Aplicar configuración</b>. Mantén encendidos router y aparatos.",
        "router-fiber",
        "Ir a la casilla de fibra"
      ],
      [
        "Prueba un servicio local",
        "Con la fibra todavía desmarcada, elige <b>Sobremesa</b> en las pruebas y pulsa <b>Impresión de prueba</b>. Anota si llega. Puedes probar también el control de la luz desde el móvil.",
        "print-desktop",
        "Probar la impresora durante el corte"
      ],
      [
        "Prueba ahora la navegación",
        "Todavía sin fibra, abre <code>aula.test</code> desde el sobremesa. Lee el mensaje de error. No basta con mirar un indicador: realiza la prueba para registrarla.",
        "browser-desktop",
        "Probar la web durante el corte"
      ],
      [
        "Recupera el enlace del operador",
        "Vuelve al router, marca <b>Fibra conectada a la ONT</b> y pulsa <b>Aplicar configuración</b>.",
        "router-fiber",
        "Reconectar la fibra"
      ],
      [
        "Recupera la web y termina el montaje",
        "Abre otra vez <code>aula.test</code>. Cuando funcione, pulsa <b>Comprobar este paso</b> y después <b>Responder preguntas finales</b>. Marca las opciones del test y descarga tu PDF.",
        "browser-desktop",
        "Comprobar que vuelve la web"
      ]
    ]
  }
];
window.CLASS_GUIDES = [
  {
    "goal": "Reunir a todos los integrantes y conocer el orden de los turnos.",
    "expected": "Entre 2 y 5 personas, cada una con su propio portátil virtual.",
    "help": "Solo una persona crea el grupo. Esperad a que todos entren antes de comenzar. Quien crea la sala realizará la primera demostración; después todos harán las mismas tareas.",
    "steps": [
      [
        "Entrad todos en una sola sala",
        "Quien crea el grupo comparte el código de cinco caracteres. Los demás entran con su nombre y apellido desde sus propios ordenadores.",
        "copy-code",
        "Copiar el código"
      ],
      [
        "Identificad a quien empieza",
        "La primera persona en crear carpeta y archivo será <b>{{creator}}</b>, que ha creado el grupo. Su portátil es <b>{{creator_pc}}</b>.",
        "members",
        "Ver los integrantes"
      ],
      [
        "Acordad el orden de los turnos",
        "Este es el orden de vuestro grupo: <b>{{order}}</b>. En cada ronda participa todo el mundo. Después del último, se vuelve al primero.",
        "members",
        "Ver el orden"
      ],
      [
        "Comprueba que estáis todos",
        "Cada nombre debe tener un portátil distinto. Cuando hayan entrado todos los integrantes de vuestro grupo, pulsa <b>Comprobar este paso</b>.",
        "members",
        "Revisar el grupo"
      ]
    ]
  },
  {
    "goal": "Conectar todos los portátiles virtuales al punto de acceso X49 y comprobarlo con un botón.",
    "expected": "Cada tarjeta mostrará Conectado, con direcciones distintas. Todos habréis pulsado Comprobar conexión desde vuestro portátil.",
    "help": "Cada integrante conecta su portátil virtual. Pulsa el icono wifi de la esquina inferior derecha, elige X49 y escribe AulaX49!, con mayúsculas y signo !. Las direcciones se asignan automáticamente. No cambies el wifi real de Windows.",
    "steps": [
      [
        "Abre las redes wifi desde el escritorio",
        "En la <b>esquina inferior derecha del escritorio simulado</b>, pulsa el icono <b>Wifi · Sin conexión</b>. Se abrirá el panel de redes disponibles. Cada integrante lo hace en su pantalla.",
        "wifi",
        "Abrir el panel wifi"
      ],
      [
        "Selecciona la red del aula",
        "Pulsa <b>X49</b>, la red segura que aparece en la lista. Debajo verás el campo <b>Clave de seguridad de red</b>.",
        "wifi",
        "Ver las redes disponibles"
      ],
      [
        "Escribe la clave y conecta",
        "Escribe <code>AulaX49!</code> y pulsa <b>Conectar</b>. Puedes marcar <b>Mostrar caracteres</b> para revisar la clave. El icono de la barra debe pasar a <b>X49</b>. Si falla, revisa mayúsculas y el signo !.",
        "wifi",
        "Abrir el panel wifi"
      ],
      [
        "Abre las propiedades de la conexión",
        "Desde <b>Inicio → Configuración</b> o el icono <b>Configuración</b> del escritorio, abre <b>Red e Internet › Wifi</b>. Deja <b>IPv4: Automática (DHCP)</b> e <b>IPv6: Automática (SLAAC + RA)</b> y pulsa <b>Aplicar configuración</b>.",
        "settings",
        "Abrir Configuración"
      ],
      [
        "Compara tus direcciones",
        "En Configuración, baja hasta <b>Datos efectivos de este portátil</b>. Lee IPv4, máscara, puerta de enlace, DNS e IPv6. Compáralas con las de otro compañero: cada portátil tiene una IP distinta.",
        "settings",
        "Ver mis propiedades de red"
      ],
      [
        "Todos comprueban la conexión",
        "Cuando todos indiquen X49, cada uno pulsa <b>Comprobar conexión</b> en Configuración. Debe aparecer que se comunica con todos los compañeros. Si falta alguien, revisad su wifi y repetid la prueba.",
        "settings",
        "Comprobar mi conexión"
      ],
      [
        "Comprueba el paso del grupo",
        "Despliega <b>Mi grupo y la red X49</b>: todos deben aparecer conectados. Cuando cada uno haya realizado la comprobación, pulsa <b>Comprobar este paso</b>.",
        "members",
        "Ver los portátiles del grupo"
      ]
    ]
  },
  {
    "goal": "Quien creó el grupo crea el primer recurso. Todos los demás lo abren desde su portátil.",
    "expected": "El primer archivo está guardado y cada compañero lo ha abierto por Red.",
    "help": "Durante esta primera demostración crea la carpeta únicamente quien abrió la sala. Los demás tendrán su propio turno para crear y compartir después. Abrir por Red permite acceder al archivo del compañero.",
    "steps": [
      [
        "Quien creó la sala crea la primera carpeta",
        "<b>{{creator}}</b> abre <b>Documentos → Nueva carpeta</b>. Puede llamarla <code>{{creator_folder}}</code> y pulsa <b>Crear en Documentos</b>. Los demás observan los pasos para repetirlos después.",
        "documents",
        "Abrir Documentos"
      ],
      [
        "La misma persona crea y guarda el archivo",
        "Dentro de esa carpeta, <b>{{creator}}</b> pulsa <b>Nuevo archivo de texto</b>, escribe un nombre acabado en <code>.txt</code> y abre Bloc de notas. Escribe los nombres del grupo, pulsa <b>Guardar</b> y comprueba que aparece versión 1.",
        "explorer",
        "Abrir el Explorador"
      ],
      [
        "Comparte inicialmente con permiso de lectura",
        "<b>{{creator}}</b> vuelve al Explorador, pulsa <b>Compartir y permisos</b>, marca <b>Compartir esta carpeta con el grupo</b>, deja <b>Lectura</b> y pulsa <b>Aplicar permisos</b>.",
        "explorer",
        "Ver la carpeta abierta"
      ],
      [
        "Todos los demás abren la carpeta y el archivo",
        "Cada compañero entra desde su escritorio en <b>Red → {{creator_pc}} → {{creator_folder}}</b> y pulsa <b>Abrir</b> junto al archivo. Todos deben leer el texto y ver que está en solo lectura.",
        "network",
        "Buscar la primera carpeta"
      ],
      [
        "Comprobad que nadie queda fuera",
        "En el seguimiento de participación, todos deben tener registrada su parte. Cuando cada compañero haya abierto el recurso, pulsa <b>Comprobar este paso</b>.",
        "members",
        "Ver el grupo"
      ]
    ]
  },
  {
    "goal": "Que todos prueben la lectura y comprendan cuándo se puede guardar en un recurso ajeno.",
    "expected": "Todos los compañeros han recibido la denegación de Guardar y la primera carpeta termina compartida con escritura.",
    "help": "El propietario siempre puede guardar en su carpeta. La denegación deben probarla todos los demás desde sus propios portátiles, antes de cambiar el permiso.",
    "steps": [
      [
        "Todos los demás prueban Guardar",
        "Cada persona excepto <b>{{creator}}</b> abre el archivo inicial por Red y pulsa <b>Guardar</b>. Aunque el texto esté bloqueado, este botón permite comprobar el permiso.",
        "network",
        "Abrir el archivo inicial"
      ],
      [
        "Cada uno lee su aviso",
        "Cada compañero debe obtener <b>Acceso denegado: el recurso solo permite lectura</b>. Esperad a que todos hayan realizado su intento antes de cambiar los permisos.",
        "editor",
        "Ver Bloc de notas"
      ],
      [
        "Quien creó el recurso concede escritura",
        "Cuando todos hayan probado, <b>{{creator}}</b> abre su carpeta en el Explorador → <b>Compartir y permisos</b>, elige <b>Lectura y escritura</b> y pulsa <b>Aplicar permisos</b>.",
        "explorer",
        "Revisar los permisos"
      ],
      [
        "Todos vuelven a abrir el archivo",
        "Cada compañero vuelve al Explorador y abre de nuevo el mismo archivo. Ahora se podrá escribir. Todavía no escribáis todos a la vez: la siguiente ronda va por turnos.",
        "network",
        "Abrir el recurso con escritura"
      ],
      [
        "Comprobad el permiso del grupo",
        "Cuando todos hayan recibido la denegación y el propietario haya concedido escritura, pulsa <b>Comprobar este paso</b>.",
        "members",
        "Ver la participación"
      ]
    ]
  },
  {
    "goal": "Que cada compañero edite el mismo archivo por turnos y quien lo creó responda al final.",
    "expected": "El primer archivo contiene una aportación de cada compañero y una respuesta final de su propietario.",
    "help": "Seguid el orden indicado. Antes de escribir, comprobad que veis la última versión. Guardad y avisad al siguiente. Si aparece un conflicto, el borrador se conserva: copiad la aportación antes de cargar la última versión.",
    "steps": [
      [
        "Preparad el archivo inicial",
        "Todos abrirán el archivo de <b>{{creator_pc}}</b>. La persona que creó el recurso espera mientras los demás escriben, uno a uno. El orden del grupo es <b>{{order}}</b>.",
        "network",
        "Buscar el archivo compartido"
      ],
      [
        "Turno de cada compañero",
        "Cada integrante excepto quien creó la sala añade su frase al mismo archivo y guarda antes de que empiece el siguiente.",
        "network",
        "Abrir el archivo inicial"
      ],
      [
        "Quien creó el archivo responde al final",
        "Después de la aportación de <b>todos</b> los compañeros, <b>{{creator}}</b> lee el resultado, añade una respuesta final y pulsa <b>Guardar</b>.",
        "editor",
        "Volver a Bloc de notas"
      ],
      [
        "Todos leen el resultado",
        "Cada persona comprueba que ve todas las frases en el archivo original. Los cambios llegan al guardar; el número de versión aumenta. Pulsa <b>Comprobar este paso</b>.",
        "explorer",
        "Ver el archivo y su versión"
      ]
    ]
  },
  {
    "goal": "Que todos ofrezcan archivos y prueben el intercambio, las copias y la impresión.",
    "expected": "Cada integrante tiene un recurso compartido, ha editado uno ajeno, ha comparado una copia local y ha impreso en otro portátil.",
    "help": "Cada persona trabaja con el siguiente integrante de la lista. El último trabaja con quien creó el grupo. Primero terminad todos las copias; después cada propietario cambia su original, y por último todos comparan. No compartáis Copias_X49: es vuestra copia local.",
    "steps": [
      [
        "Ahora todos tienen su propia carpeta y archivo",
        "Quien creó la sala conserva su recurso inicial. <b>Todos los demás</b> abren <b>Documentos → Nueva carpeta</b>, por ejemplo <code>{{own_folder}}</code>. Dentro crean <code>{{own_file}}</code>, escriben una frase y pulsan <b>Guardar</b>.",
        "documents",
        "Crear mi recurso"
      ],
      [
        "Todos comparten con escritura",
        "Cada propietario abre <b>Compartir y permisos</b>, marca la carpeta como compartida y aplica <b>Lectura y escritura</b>. Esperad a que todo el mundo tenga su carpeta y archivo preparados.",
        "explorer",
        "Compartir mi carpeta"
      ],
      [
        "Cada uno escribe en el siguiente portátil",
        "En tu caso, abre <b>Red → {{target_pc}}</b>, de <b>{{target}}</b>, entra en su carpeta compartida y abre su archivo. Añade una frase con tu nombre y pulsa <b>Guardar</b>. Quien creó el grupo también hace esta tarea.",
        "network",
        "Abrir el portátil de mi compañero"
      ],
      [
        "Cada propietario comprueba la aportación recibida",
        "Vuelve a tu propia carpeta y abre tu archivo. Debe contener una frase de <b>{{observer}}</b>. Así todos han ofrecido un recurso y también han utilizado el de otro ordenador.",
        "documents",
        "Revisar mi archivo"
      ],
      [
        "Todos guardan una copia del archivo ajeno",
        "Abre otra vez el archivo del portátil <b>{{target_pc}}</b>, desde el Explorador. Junto al archivo pulsa <b>Copiar a mi portátil</b>. Deja <b>Crear carpeta Copias_X49</b>, conserva el nombre propuesto y pulsa <b>Guardar copia en mi portátil</b>.",
        "network",
        "Buscar el archivo para copiarlo"
      ],
      [
        "Esperad a que todos tengan su copia",
        "Antes de cambiar los originales, cada integrante confirma que ve su archivo en <b>Documentos → Copias_X49</b>. Las copias son archivos independientes.",
        "documents",
        "Ver mi copia local"
      ],
      [
        "Todos cambian su propio original",
        "Cada persona abre <b>su carpeta compartida original</b>, añade una línea como «Cambio posterior a la copia» y pulsa <b>Guardar</b>. No edites el archivo que está en Copias_X49.",
        "documents",
        "Abrir mi carpeta original"
      ],
      [
        "Todos comparan la copia con el original",
        "En tu portátil abre <b>Documentos → Copias_X49</b>. Pulsa <b>Comparar con original</b>. La frase nueva de <b>{{target}}</b> debe aparecer solo en el original. Si siguen iguales, espera a que esa persona guarde y compara de nuevo.",
        "documents",
        "Comparar mi copia"
      ],
      [
        "Todos imprimen en otro portátil",
        "Abre <b>Impresoras</b>. En la fila de <b>{{target_pc}}</b>, de <b>{{target}}</b>, pulsa <b>Página de prueba</b>. Lee la confirmación y ciérrala.",
        "printer",
        "Probar la impresora compartida"
      ],
      [
        "Comprobad que todos han participado",
        "Cada integrante debe tener su carpeta y archivo compartidos, una edición enviada y otra recibida, una copia comparada tras el cambio del original y una impresión remota. Pulsa <b>Comprobar este paso</b>.",
        "members",
        "Ver qué falta a cada persona"
      ]
    ]
  },
  {
    "goal": "Apagar y recuperar los portátiles por turnos, y generar el PDF común.",
    "expected": "Cada portátil se ha apagado y recuperado mientras otro integrante comprobaba que su carpeta dejaba de estar accesible.",
    "help": "Se apaga un solo portátil virtual cada vez. La persona anterior en el orden prueba su carpeta mientras está apagado. Después se enciende y se pasa al siguiente. Guardad antes de apagar; no cerréis la web ni apaguéis el equipo real.",
    "steps": [
      [
        "Preparad la ronda de apagado",
        "Guardad los archivos. El orden es <b>{{order}}</b>. En tu turno apagarás tu portátil y <b>{{observer}}</b> intentará abrir tu carpeta. Tú comprobarás la carpeta de <b>{{target}}</b> cuando le toque apagarse.",
        "members",
        "Ver el orden y los compañeros"
      ],
      [
        "Cada persona apaga su portátil cuando le toca",
        "En tu turno pulsa <b>Inicio → Apagar portátil</b> dentro del escritorio simulado. Espera con la pantalla oscura mientras tu compañero intenta entrar. No pulses todavía Encender portátil.",
        "start",
        "Abrir Inicio"
      ],
      [
        "El compañero prueba la carpeta durante el apagado",
        "Cuando <b>{{target}}</b> tenga su portátil apagado, entra en <b>Red → {{target_pc}} → su carpeta compartida</b>. Pulsa la carpeta o <b>Actualizar</b> si ya estaba abierta. Debe aparecer un aviso de equipo apagado o desconectado.",
        "network",
        "Probar el recurso durante el apagado"
      ],
      [
        "El propietario enciende y se continúa la ronda",
        "Después del intento de acceso, el propietario pulsa <b>Encender portátil</b>. Comprobad que vuelve a estar conectado y que su carpeta abre. Entonces empieza el siguiente turno. Repetid hasta que todos hayan apagado y recuperado su portátil.",
        "members",
        "Revisar la recuperación"
      ],
      [
        "Comprobad la ronda completa",
        "Cada integrante debe haber apagado su portátil, recibido el intento de acceso del compañero y vuelto a encenderlo. Todos terminan conectados. Pulsa <b>Comprobar este paso</b>.",
        "members",
        "Ver los turnos completados"
      ],
      [
        "Responded el test y descargad el PDF común",
        "Pulsa <b>Preguntas finales y PDF</b>. Acordad las siete respuestas. Una persona marca las opciones, pulsa <b>Guardar respuestas del grupo</b> y descarga el PDF común para entregarlo por Classroom.",
        "class-review",
        "Ir al test final"
      ]
    ]
  }
];
window.LESSON_IDEAS = [
  [
    "Conectar sirve para intercambiar y compartir.",
    "El sobremesa envía un documento y la impresora lo recibe por la red."
  ],
  [
    "El tamaño de una red y quién puede entrar son cosas distintas.",
    "Tu casa puede tener una LAN privada. Un reloj y un móvil forman un entorno personal."
  ],
  [
    "El dibujo de las conexiones es la topología; el cable o la radio es el medio.",
    "Varios cables que llegan a un switch forman una estrella."
  ],
  [
    "Router, switch y punto de acceso hacen trabajos diferentes.",
    "El AP conecta tu portátil por wifi; el router permite llegar a otras redes."
  ],
  [
    "Wifi conecta aparatos sin cable; algunos aparatos necesitan una banda concreta.",
    "La bombilla de la práctica usa 2,4 GHz. El 5G del móvil es otra tecnología."
  ],
  [
    "La IP identifica una interfaz y la máscara permite reconocer su subred.",
    "En el aula verás 192.168.49.101 y 192.168.49.102: mismo entorno, direcciones distintas."
  ],
  [
    "DHCP entrega la configuración; DNS busca la dirección de los nombres.",
    "El diagnóstico muestra la IP del equipo y comprueba si se puede resolver aula.test."
  ],
  [
    "IPv4 e IPv6 pueden funcionar al mismo tiempo y fallar por separado.",
    "El diagnóstico del sobremesa muestra un resultado separado para IPv4 y para IPv6."
  ],
  [
    "Una dirección te lleva al equipo; un puerto distingue el servicio.",
    "Un portátil puede ofrecer archivos por SMB y también utilizar una página HTTPS."
  ],
  [
    "Comprueba primero el enlace y después la conexión local y externa.",
    "Los resultados de Comprobar conectividad y Ver el recorrido ayudan a localizar qué falla."
  ],
  [
    "Abrir una carpeta compartida da acceso al recurso del otro ordenador.",
    "B guarda una frase en la carpeta de A y A puede leerla al volver a abrir ese archivo."
  ]
];
window.PRACTICE_IDEAS = {
  "home": [
    "El router conecta tu casa con otras redes. Un cable Ethernet une cada aparato a la red local.",
    "DHCP da una IP al equipo automáticamente. La IP es su dirección dentro de la red.",
    "Wifi es la conexión sin cable. SSID es el nombre de la red; la clave permite entrar.",
    "La app del móvil o tablet comunica los datos del wifi al aparato preparado para emparejarse. El switch añade tomas de cable.",
    "Una IP manual se queda fija. La impresora debe tener una dirección propia, sin repetir otra.",
    "IPv4 e IPv6 son dos formas de dirección. DNS busca la dirección de un nombre como aula.test.",
    "La LAN es la red de tu casa. Puede seguir funcionando aunque se corte la salida a Internet."
  ],
  "class": [
    "Cada persona maneja su propio portátil virtual. El código os reúne en la misma práctica.",
    "El punto de acceso X49 une los portátiles por wifi. Cada portátil recibe una dirección diferente.",
    "Compartir permite que otro portátil abra una carpeta que sigue guardada en el tuyo.",
    "Lectura permite ver. Lectura y escritura permite ver y guardar cambios.",
    "El cambio se comparte al pulsar Guardar. Reabre el archivo antes del siguiente turno.",
    "Un portátil puede ofrecer y usar carpetas. Una copia local es otro archivo y no recibe cambios del original.",
    "Una carpeta compartida depende del portátil que la ofrece: debe seguir encendido y conectado."
  ]
};
