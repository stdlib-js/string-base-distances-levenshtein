// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-min@v0.2.2-esm/index.mjs";function e(e,i){var n,o,m,f,d,l,h,p;if(!r(e))throw new TypeError(t("1fl3F",e));if(!r(i))throw new TypeError(t("1fl39",i));if(d=e.length,f=i.length,0===d)return f;if(0===f)return d;for(o=[],l=0;l<=f;l++)o.push(l);for(l=0;l<d;l++)for(m=o[0],o[0]=l+1,h=0;h<f;h++)n=o[p=h+1],e[l]===i[h]?o[p]=m:o[p]=s(m,s(o[h],o[p]))+1,m=n;return o[f]}export{e as default};
//# sourceMappingURL=index.mjs.map
