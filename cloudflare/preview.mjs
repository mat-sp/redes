import {spawn} from 'node:child_process';
const child=spawn(process.execPath,['node_modules/wrangler/bin/wrangler.js','dev','--local','--ip','0.0.0.0','--port',process.env.PORT||'4173','--var','ALLOW_LOCAL_PREVIEW:true'],{stdio:'inherit',env:{...process.env,WRANGLER_SEND_METRICS:'false'}});
for(let signal of ['SIGINT','SIGTERM'])process.on(signal,()=>child.kill(signal));child.on('exit',code=>process.exit(code||0));
