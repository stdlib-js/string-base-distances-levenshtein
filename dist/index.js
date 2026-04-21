"use strict";var h=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}};var p=h(function(d,l){
var m=require('@stdlib/assert-is-string/dist').isPrimitive,f=require('@stdlib/error-tools-fmtprodmsg/dist'),g=require('@stdlib/math-base-special-min/dist');function c(t,e){var s,r,v,a,o,i,n,u;if(!m(t))throw new TypeError(f('1fl3F',t));if(!m(e))throw new TypeError(f('1fl39',e));if(o=t.length,a=e.length,o===0)return a;if(a===0)return o;for(r=[],i=0;i<=a;i++)r.push(i);for(i=0;i<o;i++)for(v=r[0],r[0]=i+1,n=0;n<a;n++)u=n+1,s=r[u],t[i]===e[n]?r[u]=v:r[u]=g(v,g(r[n],r[u]))+1,v=s;return r[a]}l.exports=c
});var w=p();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
