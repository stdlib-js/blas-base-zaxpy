"use strict";var y=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=y(function(S,w){
var g=require('@stdlib/strided-base-reinterpret-complex128/dist'),A=require('@stdlib/complex-float64-base-mul-add/dist').assign,B=require('@stdlib/complex-float64-real/dist'),C=require('@stdlib/complex-float64-imag/dist'),D=require('@stdlib/blas-base-dcabs1/dist');function F(e,r,s,v,n,a,q,o){var x,u,d,m,t,i,l,j,p;if(e<=0||D(r)===0)return a;for(l=B(r),j=C(r),x=g(s,0),u=g(a,0),d=v*2,m=q*2,t=n*2,i=o*2,p=0;p<e;p++)A(l,j,x[t],x[t+1],u[i],u[i+1],u,1,i),t+=d,i+=m;return a}w.exports=F
});var b=y(function(T,_){
var R=require('@stdlib/strided-base-stride2offset/dist'),G=f();function H(e,r,s,v,n,a){var q=R(e,v),o=R(e,a);return G(e,r,s,v,q,n,a,o)}_.exports=H
});var h=y(function(U,O){
var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=b(),J=f();I(E,"ndarray",J);O.exports=E
});var K=require("path").join,L=require('@stdlib/utils-try-require/dist'),M=require('@stdlib/assert-is-error/dist'),P=h(),c,k=L(K(__dirname,"./native.js"));M(k)?c=P:c=k;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
