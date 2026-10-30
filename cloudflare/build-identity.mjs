import {build} from 'esbuild';
import {copyFile} from 'node:fs/promises';
await build({stdin:{contents:"import {sha256} from '@noble/hashes/sha2.js'; globalThis.redlabIdentityDigest=token=>sha256(new TextEncoder().encode(token));",resolveDir:process.cwd()},bundle:true,minify:true,format:'iife',platform:'browser',outfile:'docs/vendor/identity-hash.js',banner:{js:'/* SHA-256 de @noble/hashes. Licencia MIT en SHA256_LICENSE.txt. */'},legalComments:'inline'});
await copyFile('node_modules/@noble/hashes/LICENSE','docs/vendor/SHA256_LICENSE.txt');
