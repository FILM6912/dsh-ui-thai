const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(process.env.DSH_INSTALL_DIR,'..');
const inventory=[];
for(const pkg of fs.readdirSync(root).filter(x=>x.startsWith('dsh-client-'))) {
 const dir=path.join(root,pkg,'src/client'); if(!fs.existsSync(dir))continue;
 const files=fs.readdirSync(dir).filter(x=>/locale/.test(x)&&x.endsWith('.ts'));
 const entries=[];
 for(const name of files){const p=path.join(dir,name);if(fs.statSync(p).size>500000)continue;const text=fs.readFileSync(p,'utf8');entries.push({path:'src/client/'+name,bytes:Buffer.byteLength(text),englishExports:[...text.matchAll(/export const (\w*[Ee]n\w*|en)\s*=/g)].map(x=>x[1])});}
 const index=path.join(dir,'index.ts'); const text=fs.existsSync(index)?fs.readFileSync(index,'utf8'):'';
 const namespaces=[...text.matchAll(/(?:register|bind)\(['"]([^'"]+)['"]/g)].map(x=>x[1]);
 for(const entry of entries){const source=fs.readFileSync(path.join(root,pkg,entry.path),'utf8');entry.namespaceConstants=[...source.matchAll(/export const (\w*NS\w*)\s*=\s*['"]([^'"]+)['"]/g)].map(x=>({symbol:x[1],value:x[2]}));}
 if(entries.length)inventory.push({package:pkg,namespaces,files:entries});
}
fs.mkdirSync('sources',{recursive:true});fs.writeFileSync('sources/inventory.json',JSON.stringify(inventory,null,2)+'\n');console.log(inventory);console.log('PACKAGES',inventory.length);
