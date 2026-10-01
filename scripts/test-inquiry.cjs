/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS VM harness tests the server action without provider calls. */
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const ts = require('typescript');
const source = fs.readFileSync('app/actions/inquiry.ts', 'utf8').replace('import { brand, towns } from "@/lib/site";', 'const brand = {email:"seacoasthomepartners@gmail.com"}; const towns = ["Rye", "New Castle", "Portsmouth", "North Hampton"];');
const code = ts.transpileModule(source, {compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
const ctx={exports:{},process:{env:{}},crypto:globalThis.crypto,AbortSignal,FormData,URL,fetch:async()=>{throw Error('unexpected request')}};
vm.runInNewContext(code,ctx);
function form(changes={}) {const f=new FormData();for(const [key,value] of Object.entries({name:'Test only',phone:'6035550123',email:'',town:'Rye',interest:'Property Stewardship',note:'Synthetic inquiry',consent:'yes',...changes}))f.set(key,value);return f;}
(async()=>{
 const submit=f=>ctx.exports.submitInquiry({status:'idle'},f);
 for(const changes of [{name:''},{phone:'12'},{email:'bad'},{town:'Invalid'},{interest:'Invalid'},{consent:''},{note:'x'.repeat(3001)}]) assert.equal((await submit(form(changes))).status,'error');
 assert.equal((await submit(form())).status,'error','missing destination must fail');
 ctx.process.env.INQUIRY_WEBHOOK_URL='https://example.test/intake';
 ctx.fetch=async()=>({ok:false});assert.equal((await submit(form())).status,'error');
 ctx.fetch=async()=>{throw Error('timeout')};assert.equal((await submit(form())).status,'error');
 let payload;ctx.fetch=async(url,options)=>{payload=JSON.parse(options.body);return{ok:true}};
 assert.equal((await submit(form())).status,'success');assert.equal(payload.email,null);assert.equal(payload.phone,'(603) 555-0123');assert.equal(payload.contactConsent,true);
 assert.equal((await submit(form({phone:'+1 603 555 0123',email:'test@example.test'}))).status,'success');assert.equal(payload.email,'test@example.test');
 payload=null;await submit(form({company_website:'spam'}));assert.equal(payload,null);
 delete ctx.process.env.INQUIRY_WEBHOOK_URL; ctx.process.env.RESEND_API_KEY='synthetic-test-key';ctx.process.env.INQUIRY_FROM_EMAIL='inquiries@notifications.example.test';
 let sent;ctx.fetch=async(url,options)=>{sent={url,options,payload:JSON.parse(options.body)};return{ok:true,json:async()=>({id:'test-email-id'})}};
 assert.equal((await submit(form())).status,'success');assert.equal(sent.url,'https://api.resend.com/emails');assert.equal(sent.payload.to[0],'seacoasthomepartners@gmail.com');assert.equal(sent.payload.reply_to,undefined);assert.ok(sent.payload.text.includes('Phone: (603) 555-0123'));
 await submit(form({email:'test@example.test'}));assert.equal(sent.payload.reply_to,'test@example.test');
 ctx.fetch=async()=>({ok:true,json:async()=>({})});assert.equal((await submit(form())).status,'error');
 ctx.fetch=async()=>({ok:false});assert.equal((await submit(form())).status,'error');
 console.log('18 inquiry scenarios passed: validation, consent, missing destination, failure, success, optional email, and honeypot.');
})().catch(error=>{console.error(error);process.exitCode=1});
