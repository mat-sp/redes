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
    "goal": "Que cada integrante tenga su propio portátil virtual dentro del mismo grupo.",
    "expected": "En el grupo aparecerán entre dos y cinco tarjetas, con nombres y portátiles diferentes.",
    "help": "Solo una persona crea el grupo. Las demás usan su código. Entrar a la misma web no os mete automáticamente en el mismo grupo.",
    "steps": [
      [
        "Repartid los papeles",
        "Elegid a una persona <b>A</b>, que creará el grupo. Los demás serán B, C… Cada integrante abrirá esta web en su propio portátil real y escribirá su nombre y apellido.",
        "identity",
        "Revisar mi nombre"
      ],
      [
        "Cread una sola sala",
        "Antes de entrar, A pulsa <b>Crear grupo</b>. Cuando vea el código, pulsa <b>Copiar</b> y se lo pasa a los demás. Si tú no eres A, espera ese código: no crees otra sala.",
        "copy-code",
        "Copiar el código de esta sala"
      ],
      [
        "Los demás entran con el código",
        "B, C… pegan el código completo en <b>Código del grupo</b> y pulsan <b>Entrar con mi nombre</b>. Cada uno debe ver su tarjeta marcada con <b>tú</b>.",
        "members",
        "Ver quién ha entrado"
      ],
      [
        "Identificad vuestros portátiles",
        "Cada uno verá un <b>escritorio de Windows 11 simulado</b> con su nombre y su <b>PORTATIL-1</b>, <b>PORTATIL-2</b>… En <b>Mi grupo y la red X49</b> podéis ver a todos. Acordad quién compartirá primero una carpeta: será A.",
        "members",
        "Ver los portátiles"
      ],
      [
        "Comprueba que estáis todos",
        "Despliega <b>Mi grupo y la red X49</b>. Cada nombre debe tener un portátil distinto. Cuando aparezcáis los 2–5 integrantes, pulsa <b>Comprobar este paso</b>. El test se responde al final.",
        "members",
        "Ver los integrantes"
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
    "goal": "Que A cree un archivo y los compañeros lo abran desde otro portátil.",
    "expected": "A verá su archivo dentro de Documentos. B lo abrirá entrando por Red en el portátil de A, con permiso de solo lectura.",
    "help": "Los archivos se guardan al pulsar Guardar en el Bloc de notas. Activar la carpeta compartida no crea ni guarda un archivo automáticamente.",
    "steps": [
      [
        "A crea una carpeta en su portátil",
        "En el escritorio de A, pulsa <b>Documentos</b> (o abre el <b>Explorador</b> desde la barra de tareas y entra en Documentos). Pulsa <b>Nueva carpeta</b>, escribe <code>Equipo_X49</code> y pulsa <b>Crear en Documentos</b>. La carpeta se abrirá.",
        "documents",
        "Abrir mis Documentos"
      ],
      [
        "A crea el archivo de texto",
        "Dentro de la carpeta, A pulsa <b>Nuevo archivo de texto</b>. Puede dejar <code>Equipo_X49.txt</code> y pulsa <b>Abrir en Bloc de notas</b>.",
        "explorer",
        "Abrir el Explorador"
      ],
      [
        "A escribe y guarda",
        "En el Bloc de notas, A escribe los nombres de los integrantes y una frase, por ejemplo «Este archivo está en el portátil de A». Pulsa <b>Guardar</b>. Comprueba que aparece <b>versión 1</b>.",
        "editor",
        "Volver al Bloc de notas"
      ],
      [
        "A activa el uso compartido",
        "A vuelve al <b>Explorador</b> pulsando su icono de carpeta en la barra inferior. Dentro de su carpeta, pulsa <b>Compartir y permisos</b>. Marca <b>Compartir esta carpeta con el grupo</b>, deja <b>Lectura</b> y pulsa <b>Aplicar permisos</b>.",
        "explorer",
        "Volver a la carpeta para compartir"
      ],
      [
        "B busca el equipo de A",
        "En su propio escritorio, B pulsa <b>Red</b> (o entra desde el lateral del Explorador). Pulsa el equipo <b>PORTATIL-n</b> que tenga el nombre de A. Verá la carpeta <code>Equipo_X49</code>.",
        "network",
        "Abrir Red en mi portátil"
      ],
      [
        "B abre el archivo remoto",
        "B pulsa la carpeta y después <b>Abrir</b>, junto a <code>Equipo_X49.txt</code>. Debe leer el texto que escribió A. En la ventana aparecerá <b>Archivo de otro portátil</b> y <b>solo lectura</b>.",
        "network",
        "Buscar el recurso del compañero"
      ],
      [
        "Comprueba el acceso a la carpeta",
        "Cuando B haya abierto la carpeta de A por <b>Red</b> y vea el archivo, pulsa <b>Comprobar este paso</b>. No copies la carpeta a Documentos.",
        "explorer",
        "Volver a la carpeta abierta"
      ]
    ]
  },
  {
    "goal": "Probar qué permite la lectura y cómo se concede la escritura.",
    "expected": "El intento de guardar de B se denegará con Lectura. Después de cambiar el permiso y volver a abrir el archivo, B podrá editarlo.",
    "help": "El propietario puede editar su propia carpeta aunque la comparta como Lectura. La denegación se prueba desde otro portátil. Tras cambiar el permiso, vuelve a abrir el archivo: una ventana ya abierta puede seguir mostrando solo lectura.",
    "steps": [
      [
        "B prueba a guardar desde otro portátil",
        "B abre el archivo de A desde <b>Red</b>. El texto está en <b>solo lectura</b>. Pulsa <b>Guardar</b>, aunque no puedas escribir, para comprobar la denegación.",
        "network",
        "Buscar la carpeta de otro portátil"
      ],
      [
        "Leed el aviso de acceso denegado",
        "Debe aparecer <b>Acceso denegado: el recurso solo permite lectura</b>. No es un fallo del wifi: puedes leer el contenido, pero no cambiarlo.",
        "editor",
        "Ver el archivo abierto"
      ],
      [
        "A concede permiso de escritura",
        "En el portátil de A: <b>Explorador → su carpeta → Compartir y permisos</b>. En <b>Permiso para los compañeros</b> elige <b>Lectura y escritura</b> y pulsa <b>Aplicar permisos</b>.",
        "explorer",
        "Abrir mi carpeta para revisar permisos"
      ],
      [
        "B actualiza la carpeta y reabre el archivo",
        "En el portátil de B: vuelve a <b>Explorador</b>, pulsa <b>Actualizar</b> dentro de la carpeta remota y después <b>Abrir</b> junto al archivo. Ya no debe indicar solo lectura.",
        "explorer",
        "Volver al Explorador"
      ],
      [
        "Comprueba los permisos",
        "Primero debe haberse denegado Guardar desde B con Lectura. Después A debe haber aplicado <b>Lectura y escritura</b>. Pulsa <b>Comprobar este paso</b>.",
        "explorer",
        "Volver a la carpeta"
      ]
    ]
  },
  {
    "goal": "Guardar aportaciones desde varios portátiles y comprobarlas en el archivo original.",
    "expected": "Cada guardado aumentará la versión. El Explorador y los archivos abiertos sin cambios pendientes recibirán las aportaciones de los compañeros automáticamente.",
    "help": "Trabajad por turnos. Los cambios se envían al pulsar Guardar. Un archivo abierto sin borrador recibe automáticamente la nueva versión. Si estabas escribiendo, tu borrador se conserva: copia tu aportación, pulsa Cargar última versión y combínala antes de guardar.",
    "steps": [
      [
        "B añade una frase al archivo de A",
        "B abre <code>Equipo_X49.txt</code> en la carpeta compartida de A, escribe una línea con su nombre y pulsa <b>Guardar</b>. Revisa que el número de versión aumenta.",
        "network",
        "Abrir el recurso remoto"
      ],
      [
        "A ve llegar el cambio de B",
        "A vuelve al <b>Explorador</b> con su icono en la barra: verá aumentar la versión sin recargar la página. Abre el archivo para leer la frase de B. Si lo tenía abierto en Bloc de notas sin cambios pendientes, el contenido se actualizará automáticamente.",
        "explorer",
        "Volver al Explorador para actualizar"
      ],
      [
        "A responde dentro del mismo archivo",
        "A añade otra línea, por ejemplo «He leído la aportación de B», y pulsa <b>Guardar</b>. Este guardado debe ocurrir después del de B.",
        "editor",
        "Volver al archivo abierto"
      ],
      [
        "C, D y E aportan, si los hay",
        "C, D y E, si los hay, abren <b>Red → portátil de A → Equipo_X49 → Equipo_X49.txt</b>. Por turnos, cada uno añade una línea con su nombre y pulsa <b>Guardar</b>. Antes del siguiente turno, comprobad que todos ven la última versión.",
        "network",
        "Abrir Red para mi turno"
      ],
      [
        "Revisad el resultado de los turnos",
        "A debe haber guardado una respuesta después de la aportación de B. C, D y E, si los hay, añaden también sus frases por turnos. En el próximo paso A escribirá en la carpeta de B para probar el acceso en el otro sentido.",
        "editor",
        "Ver el archivo abierto"
      ],
      [
        "Reabre el archivo y comprueba los turnos",
        "B ha guardado su frase y A ha guardado otra después. Reabrid el archivo y leed las dos aportaciones. Pulsa <b>Comprobar este paso</b>.",
        "explorer",
        "Volver al archivo desde el Explorador"
      ]
    ]
  },
  {
    "goal": "Intercambiar carpetas, distinguir una copia local del original y usar una impresora compartida.",
    "expected": "Habrá dos portátiles compartiendo, una copia local que no cambia al editar el original y una página de prueba recibida.",
    "help": "Todos escriben al menos una vez en un recurso ajeno. Para comparar la copia, el compañero cambia y guarda el original DESPUÉS de copiarlo. Una copia no se actualiza como el archivo compartido.",
    "steps": [
      [
        "B crea y comparte su propia carpeta",
        "Ahora B hace <b>Explorador → Documentos → Nueva carpeta</b>, la llama <code>Carpeta_B</code> y la comparte con <b>Lectura y escritura</b> desde <b>Compartir y permisos</b>.",
        "documents",
        "Abrir Documentos para crear mi carpeta"
      ],
      [
        "A accede al portátil de B",
        "En su pantalla, A abre <b>Explorador → Red → portátil de B → Carpeta_B</b>. Está accediendo a otro recurso, ofrecido por otro ordenador.",
        "network",
        "Buscar el portátil del compañero"
      ],
      [
        "A crea y guarda una aportación remota",
        "Dentro de <code>Carpeta_B</code>, A pulsa <b>Nuevo archivo de texto</b>, acepta un nombre terminado en .txt, escribe una frase y pulsa <b>Guardar</b>. B lo comprueba desde su carpeta.",
        "explorer",
        "Volver a la carpeta abierta"
      ],
      [
        "Comprueba la participación",
        "C, D y E, si los hay, guardan una frase en el archivo de A. A debe haber guardado en la carpeta de B. Así todos han escrito en un ordenador ajeno.",
        "members",
        "Ver los integrantes"
      ],
      [
        "B guarda una copia en su portátil",
        "B abre <b>Red → portátil de A → Equipo_X49</b>. Junto al archivo, pulsa <b>Copiar a mi portátil</b>. Deja <b>Crear carpeta Copias_X49</b> y el nombre <code>Copia_Equipo_X49.txt</code>. Pulsa <b>Guardar copia en mi portátil</b>: se abrirá su carpeta local.",
        "network",
        "Abrir el archivo compartido para copiarlo"
      ],
      [
        "A cambia el original compartido",
        "Sin tocar la copia de B, A abre el archivo original de su carpeta, añade «Este cambio está solo en el original» y pulsa <b>Guardar</b>. B conserva abierta su carpeta <b>Copias_X49</b>.",
        "explorer",
        "Abrir el Explorador"
      ],
      [
        "B compara los dos archivos",
        "En su carpeta <b>Copias_X49</b>, B pulsa <b>Comparar con original</b> junto a su copia. Verá los dos textos: la frase nueva estará solo en el original. Lee el aviso y cierra la comparación.",
        "documents",
        "Abrir mis Documentos para buscar la copia"
      ],
      [
        "Probad la impresora de otro portátil",
        "Abre <b>Impresoras</b>, en el escritorio. Busca la fila del portátil de A y pulsa su <b>Página de prueba</b>. Lee el aviso de recepción y ciérralo.",
        "printer",
        "Abrir las impresoras compartidas"
      ],
      [
        "Comprueba el intercambio",
        "Cuando haya dos portátiles compartiendo, todos hayan guardado en una carpeta ajena, se haya comparado la copia con el original ya modificado y llegue la impresión, pulsa <b>Comprobar este paso</b>.",
        "members",
        "Ver el grupo"
      ]
    ]
  },
  {
    "goal": "Provocar una interrupción, recuperarse y generar el PDF común del grupo.",
    "expected": "Con A apagado, B no podrá abrir su carpeta. Después de encenderlo, el recurso volverá a estar disponible. El PDF recogerá los nombres de todo el grupo.",
    "help": "Usad únicamente Inicio → Apagar portátil dentro del escritorio simulado. Guardad el texto antes. No apaguéis el ordenador real ni cerréis esta web.",
    "steps": [
      [
        "Guardad primero y elegid qué equipo se apaga",
        "Aseguraos de que los archivos están guardados. Elegid el portátil que ofrece la carpeta inicial: A lo apagará virtualmente y B intentará entrar desde el suyo.",
        "explorer",
        "Volver al Explorador"
      ],
      [
        "A apaga su portátil virtual",
        "Después de guardar, A pulsa el botón <b>Inicio</b> (cuatro cuadrados azules, en la barra inferior) y después <b>Apagar portátil</b>. Verá la pantalla de equipo apagado.",
        "start",
        "Abrir el menú Inicio"
      ],
      [
        "B prueba el acceso durante la interrupción",
        "Sin esperar a que A lo encienda, B abre <b>Explorador → Red → portátil de A → su carpeta</b>. Debe obtener un aviso de que el equipo está apagado o desconectado. Si ya la tenía abierta, pulsa <b>Actualizar</b>.",
        "network",
        "Intentar abrir el recurso de A"
      ],
      [
        "A enciende y B comprueba la recuperación",
        "A pulsa <b>Encender portátil</b> en la pantalla oscura. Después B vuelve a abrir la carpeta. Si habéis desconectado solo el wifi, A vuelve al icono wifi, selecciona X49 e introduce la clave.",
        "members",
        "Ver si todos vuelven a estar conectados"
      ],
      [
        "Comprueba la recuperación",
        "Todos deben volver a indicar <b>Conectado</b>. B vuelve a abrir la carpeta de A y comprueba que el archivo sigue allí. Pulsa <b>Comprobar este paso</b>.",
        "network",
        "Abrir Red para comprobar el acceso"
      ],
      [
        "Responded juntos y descargad el PDF",
        "Pulsa <b>Responder preguntas finales</b>. Acordad cada respuesta del test. Una persona marca una opción por pregunta y pulsa <b>Guardar respuestas del grupo</b>. Después descargad el PDF común y entregadlo por Classroom.",
        "class-review",
        "Ir a las preguntas finales"
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
