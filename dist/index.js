"use strict";var x=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=x(function(H,f){
var _=require('@stdlib/blas-base-dcabs1/dist'),b=require('@stdlib/complex-float64-base-mul/dist'),E=require('@stdlib/complex-float64-base-add/dist');function O(e,r,u,i,v,a,s,n){var q,t,o;if(e<=0||_(r)===0)return a;for(q=v,t=n,o=0;o<e;o++)a.set(E(b(r,u.get(q)),a.get(t)),t),q+=i,t+=s;return a}f.exports=O
});var m=x(function(I,y){
var d=require('@stdlib/strided-base-stride2offset/dist'),h=c();function k(e,r,u,i,v,a){var s=d(e,i),n=d(e,a);return h(e,r,u,i,s,v,a,n)}y.exports=k
});var g=x(function(J,l){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=m(),A=c();w(j,"ndarray",A);l.exports=j
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=g(),p,R=C(B(__dirname,"./native.js"));D(R)?p=F:p=R;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
