"use strict";var p=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var c=p(function(S,l){
var g=require('@stdlib/strided-base-reinterpret-complex128/dist'),A=require('@stdlib/complex-float64-base-mul-add/dist').assign,B=require('@stdlib/complex-float64-real/dist'),C=require('@stdlib/complex-float64-imag/dist'),D=require('@stdlib/blas-base-dcabs1/dist');function F(e,r,i,u,n,a,q,o){var x,t,f,m,s,v,z,j,y;if(e<=0||D(r)===0)return a;for(z=B(r),j=C(r),x=g(i,0),t=g(a,0),f=u*2,m=q*2,s=n*2,v=o*2,y=0;y<e;y++)A(z,j,x[s],x[s+1],t[v],t[v+1],t,1,v),s+=f,v+=m;return a}l.exports=F
});var _=p(function(T,R){
var w=require('@stdlib/strided-base-stride2offset/dist'),G=c();function H(e,r,i,u,n,a){var q=w(e,u),o=w(e,a);return G(e,r,i,u,q,n,a,o)}R.exports=H
});var O=p(function(U,E){
var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=_(),J=c();I(b,"ndarray",J);E.exports=b
});var K=require("path").join,L=require('@stdlib/utils-try-require/dist'),M=require('@stdlib/assert-is-error/dist'),P=O(),d,k=L(K(__dirname,"./native.js"));M(k)?d=P:d=k;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
