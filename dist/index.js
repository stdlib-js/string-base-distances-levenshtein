"use strict";var h=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(v){throw (r=0, v)}};};var p=h(function(d,l){
var m=require('@stdlib/assert-is-string/dist').isPrimitive,f=require('@stdlib/error-tools-fmtprodmsg/dist'),g=require('@stdlib/math-base-special-min/dist');function c(t,r){var v,e,o,a,s,i,n,u;if(!m(t))throw new TypeError(f('1fl3F',t));if(!m(r))throw new TypeError(f('1fl39',r));if(s=t.length,a=r.length,s===0)return a;if(a===0)return s;for(e=[],i=0;i<=a;i++)e.push(i);for(i=0;i<s;i++)for(o=e[0],e[0]=i+1,n=0;n<a;n++)u=n+1,v=e[u],t[i]===r[n]?e[u]=o:e[u]=g(o,g(e[n],e[u]))+1,o=v;return e[a]}l.exports=c
});var w=p();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
