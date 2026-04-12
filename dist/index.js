"use strict";var p=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=p(function(S,l){
var g=require('@stdlib/strided-base-reinterpret-complex128/dist'),A=require('@stdlib/complex-float64-base-mul-add/dist').assign,B=require('@stdlib/complex-float64-real/dist'),C=require('@stdlib/complex-float64-imag/dist'),D=require('@stdlib/blas-base-dcabs1/dist');function F(e,r,s,v,n,a,q,o){var x,u,f,m,t,i,z,j,y;if(e<=0||D(r)===0)return a;for(z=B(r),j=C(r),x=g(s,0),u=g(a,0),f=v*2,m=q*2,t=n*2,i=o*2,y=0;y<e;y++)A(z,j,x[t],x[t+1],u[i],u[i+1],u,1,i),t+=f,i+=m;return a}l.exports=F
});var _=p(function(T,R){
var w=require('@stdlib/strided-base-stride2offset/dist'),G=c();function H(e,r,s,v,n,a){var q=w(e,v),o=w(e,a);return G(e,r,s,v,q,n,a,o)}R.exports=H
});var O=p(function(U,E){
var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=_(),J=c();I(b,"ndarray",J);E.exports=b
});var K=require("path").join,L=require('@stdlib/utils-try-require/dist'),M=require('@stdlib/assert-is-error/dist'),P=O(),d,k=L(K(__dirname,"./native.js"));M(k)?d=P:d=k;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
