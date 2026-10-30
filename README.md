# RedLab · Redes en casa y en el aula X49

Simulador para Digitalización de 4.º ESO del IES Sancti Petri. Incluye teoría, una práctica individual con 16 aparatos ya colocados y otra en grupos de 2–5 desde un escritorio de Windows 11 simulado: Inicio, barra de tareas, panel wifi, ventanas, carpetas, archivos y permisos. Cada práctica termina con un test de siete preguntas y un PDF para entregar manualmente por Classroom.

**Empieza por [LEEME_GITHUB_CLOUDFLARE.md](LEEME_GITHUB_CLOUDFLARE.md).** La web se publica en GitHub Pages y los grupos se sincronizan por Cloudflare Workers + Durable Objects con SQLite. Los cambios se envían por WebSocket al guardar, sin consultas periódicas.

En Windows puedes publicar el servicio con **PUBLICAR_CLOUDFLARE.bat**. Después debes pegar su URL en `docs/cloudflare-config.js` y publicar `docs` en GitHub Pages.

Para revisar teoría y casa sin publicar, extrae el ZIP y abre **ABRIR_RED_LAB.html**. Mientras la configuración de Cloudflare esté en `null`, el aula permite únicamente un ensayo entre pestañas del mismo navegador.

- `docs/`: web completa lista para GitHub Pages, sin compilación.
- `docs/cloudflare-config.js`: URL del servicio de grupos.
- `cloudflare/`: servicio de sincronización y validación de permisos.
- `wrangler.jsonc`: configuración de publicación y dominios autorizados.
- `GUIA_DOCENTE.md`: organización, contenidos y funcionamiento didáctico.
- `tests/`: comprobaciones del motor, la domótica, los test y Cloudflare.

Se mantienen el plano realista, la app Casa conectada para vincular la domótica desde un móvil o tablet, las pruebas visuales sin comandos y los test finales. No hay aparatos opcionales ni taller de averías.

La sincronización de producción requiere publicar el Worker en una cuenta Cloudflare. El paquete no contiene una cuenta ni credenciales de administrador. Las instrucciones explican cómo activarlo y probarlo con dos ordenadores del aula.

El aula empieza en el escritorio. El alumnado conecta X49 desde el icono wifi, revisa las direcciones en Configuración, comparte carpetas con el Explorador y edita con Bloc de notas. Las ventanas se pueden mover, redimensionar, minimizar, maximizar y cerrar. Los archivos abiertos sin borrador reciben las nuevas versiones al guardar desde otro portátil; los borradores se conservan para evitar sobrescribir aportaciones.

Tarea breve añadida: copiar un archivo remoto a Documentos, modificar el original desde el otro portátil y comparar ambos. La copia es independiente, respeta los permisos del origen y se registra en el PDF junto con la impresión compartida.
