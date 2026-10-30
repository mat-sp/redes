# Publicar RedLab con GitHub Pages y Cloudflare

Esta versión sustituye Firebase. La web sigue en GitHub Pages; un Worker con Durable Objects y almacenamiento SQLite conserva cada sala y envía los cambios mediante WebSocket. El alumnado entra con nombre, apellido y código de cinco caracteres. No necesita cuentas de Google, Cloudflare ni contraseñas personales.

## 1. Preparar el ordenador del profesor

1. Extrae el ZIP completo en una carpeta, por ejemplo `RedLab`.
2. Instala Node.js LTS desde https://nodejs.org si todavía no lo tienes. Cierra y vuelve a abrir la consola después de instalarlo.
3. Crea o utiliza una cuenta de Cloudflare en https://dash.cloudflare.com. Puedes utilizar correo y contraseña sin iniciar sesión con Google.
4. Utiliza **Workers Free**. Este proyecto utiliza Durable Objects con SQLite, disponibles en ese plan. Su funcionamiento gratuito está sujeto a las cuotas vigentes de Cloudflare; no hace falta contratar un plan de pago para esta práctica.

## 2. Autorizar el dominio de la web

Abre `wrangler.jsonc` con el Bloc de notas. En `ALLOWED_ORIGINS` se ha preparado:

```json
"ALLOWED_ORIGINS": "https://mat-sp.github.io"
```

Si vas a publicar en esa cuenta de GitHub, déjalo así. Si empleas otra cuenta o un dominio propio, escribe su origen HTTPS: **solo protocolo y dominio, sin la ruta del repositorio ni barra final**. Para permitir varios, sepáralos por comas.

Ejemplo: para `https://mat-sp.github.io/redlab/`, el origen es `https://mat-sp.github.io`.

## 3. Publicar el servicio en Cloudflare

En Windows, haz doble clic en **PUBLICAR_CLOUDFLARE.bat**. Se instalarán las herramientas del proyecto, se abrirá el acceso a Cloudflare para que autorices tu cuenta y se publicará el servicio. Si hay varias cuentas, selecciona la que quieras utilizar para RedLab.

También puedes abrir una terminal en la carpeta del proyecto y ejecutar, una orden cada vez:

```text
npm ci
npx wrangler login
npm run deploy
```

La primera publicación crea automáticamente el almacenamiento de las salas. No hay que crear tablas ni reglas manualmente. Conserva el nombre del Worker y la migración `v1` en las actualizaciones para mantener sus datos.

Al terminar aparecerá una URL semejante a:

```text
https://redlab-x49.TU_SUBDOMINIO.workers.dev
```

Copia la **URL real que devuelva la publicación**. El ejemplo anterior no es una dirección ya activada.

Abre esa URL seguida de `/api/health`. Debe responder con `RedLab X49`, `websocket` y `durable-object-sqlite`. Esta comprobación indica que el servicio existe; la prueba completa se hace con dos equipos en el paso 6.

## 4. Conectar la web con ese servicio

Abre `docs/cloudflare-config.js`. Sustituye:

```javascript
window.REDLAB_CLOUDFLARE = null;
```

por lo siguiente, pegando tu URL real:

```javascript
window.REDLAB_CLOUDFLARE = {
  url: "https://redlab-x49.TU_SUBDOMINIO.workers.dev"
};
```

No añadas `/api`, rutas ni barra final. Esta URL es pública. No pegues tokens de Cloudflare ni credenciales de tu cuenta en ningún archivo de la web.

## 5. Publicar o actualizar GitHub Pages

1. Crea o abre el repositorio de RedLab.
2. Sube el contenido de la carpeta del proyecto, de forma que `docs`, `cloudflare`, `package.json` y `wrangler.jsonc` queden en la raíz. No metas una carpeta adicional envolviéndolos.
3. No subas `node_modules`, `.wrangler` ni archivos `.dev.vars` o `.env`. El ZIP entregado no los incluye.
4. En **Settings → Pages**, selecciona **Deploy from a branch**, rama **main**, carpeta **/docs**, y guarda.
5. Espera a que GitHub termine la publicación y abre la URL HTTPS que indique.

La dirección que utilizarán los alumnos es la de **GitHub Pages**. El Worker suministra la sincronización. No se necesita dominio propio, Supabase, Firebase, Google Sheets ni Apps Script.

Si ya tenías la versión anterior, reemplaza los archivos de la web, elimina `docs/firebase-config.js` y publica los archivos nuevos. No necesitas mantener `database.rules.json` ni las instrucciones antiguas de Firebase. La práctica individual guardada en el navegador se conserva. Las salas antiguas de Firebase no se importan automáticamente: crea nuevos grupos en Cloudflare.

## 6. Prueba con dos ordenadores antes de llevarla a clase

1. Abre la misma web publicada en dos ordenadores y escribe nombres de prueba distintos.
2. En el primero crea un grupo. En el segundo introduce su código. Deben aparecer dos portátiles diferentes y **Conexión en directo**.
3. Conecta ambos portátiles virtuales a X49 con la clave `AulaX49!`, aplica y pulsa Comprobar conexión en cada uno.
4. Desde A crea una carpeta y un archivo, guarda un texto y comparte la carpeta como Lectura.
5. Desde B entra por Red, abre la carpeta y lee el archivo. Prueba Guardar: debe denegarse por permiso de lectura.
6. A cambia a Lectura y escritura. B vuelve a abrir el archivo, añade una línea y guarda. A debe recibir la nueva versión sin pulsar un botón de actualización para obtener el aviso; si tenía el archivo abierto, debe reabrirlo para leer el texto nuevo.
7. Marca una opción del test en B y pulsa Guardar respuestas del grupo. La elección debe aparecer en el test de A.
8. Apaga virtualmente A: B debe perder acceso a sus recursos. Vuelve a encenderlo y comprueba la recuperación.
9. Cierra la pestaña de B y comprueba que A lo ve sin conexión. Reabre en el mismo navegador, introduce el código y recupera el mismo puesto y los archivos.
10. Descarga y abre el PDF común.

En los grupos, el texto se comparte al pulsar **Guardar**. Es una edición por turnos con control de versión, no escritura simultánea letra a letra. Si alguien intenta guardar una versión antigua, su texto permanece en el editor para copiarlo y combinarlo con la última versión.

## Uso y conservación

- La identidad de cada portátil se conserva mediante una credencial aleatoria privada en ese navegador. Los nombres son declarados, no una identidad escolar verificada.
- El código invita al grupo: compártelo solo entre sus integrantes. Hay cinco puestos por sala. Salir no borra el puesto, para poder recuperarlo después.
- La sala conserva los archivos, respuestas y progreso entre sesiones. Cerrar todos los navegadores no borra esos datos.
- El estado de conexión cambia al cerrar o perder el navegador; detectar una caída de Internet puede tardar más que enviar una edición normal.
- Durante una interrupción aparece Reconectando. Los cambios sin confirmar no se envían de nuevo automáticamente. Espera a Conexión en directo, revisa la versión y vuelve a Guardar.
- Límites de esta versión: 25 carpetas por sala, 10 archivos por carpeta, 20.000 caracteres por archivo y un tamaño total de sala limitado. Se conservan las últimas 500 acciones. Los PDF incluyen el registro disponible.
- Los archivos son textos de la simulación. No se suben archivos del ordenador real ni se comparten carpetas SMB de Windows.
- No hay panel docente ni envío automático a Classroom. Las entregas siguen siendo los dos PDF.

## Si algo falla

- **Funciona la casa, pero el aula indica ensayo local:** revisa que hayas sustituido `null` por la URL real en `docs/cloudflare-config.js` y subido ese archivo a GitHub.
- **No conecta al crear/entrar:** comprueba `/api/health`, la URL y `ALLOWED_ORIGINS`. El origen debe coincidir exactamente con el dominio de la web.
- **Abrir el HTML desde el disco:** sirve para casa y teoría. La conexión de grupo de producción debe probarse desde GitHub Pages; los archivos locales tienen un origen diferente.
- **La red del centro bloquea WebSockets:** prueba la web desde la red real del aula antes de la sesión. El servicio requiere acceso HTTPS/WebSocket a tu dominio `workers.dev`.
- **Actualización de código:** publica de nuevo con el mismo Worker y después actualiza `docs` en GitHub. Los alumnos pueden tener que recargar al terminar una edición.

## Comprobación técnica opcional

```text
npm ci
npm test
```

Las pruebas de Cloudflare ejecutan el Worker real en el entorno local de Cloudflare, con WebSocket y SQLite. Comprueban permisos, guardados concurrentes, reconexión, cinco puestos y conservación al reiniciar el servicio.

`npm run dev` abre el entorno local. Solo ahí cada pestaña usa una identidad distinta para ensayar varios portátiles desde un mismo navegador. En producción se conserva una identidad por navegador y servicio. La vista previa local no publica recursos en tu cuenta.

Referencias oficiales:

- https://developers.cloudflare.com/durable-objects/examples/websocket-hibernation-server/
- https://developers.cloudflare.com/durable-objects/platform/pricing/
- https://developers.cloudflare.com/fundamentals/account/create-account/
