"use strict";var y=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=y(function(Q,w){
var g=require('@stdlib/strided-base-reinterpret-complex128/dist'),z=require('@stdlib/complex-float64-base-mul-add/dist').assign,A=require('@stdlib/complex-float64-real/dist'),B=require('@stdlib/complex-float64-imag/dist'),C=require('@stdlib/blas-base-dcabs1/dist');function D(e,r,s,v,n,a,q,o){var x,u,f,m,t,i,l,j,p;if(e<=0||C(r)===0)return a;for(l=A(r),j=B(r),x=g(s,0),u=g(a,0),f=v*2,m=q*2,t=n*2,i=o*2,p=0;p<e;p++)z(l,j,x[t],x[t+1],u[i],u[i+1],u,1,i),t+=f,i+=m;return a}w.exports=D
});var b=y(function(S,_){
var R=require('@stdlib/strided-base-stride2offset/dist'),F=c();function G(e,r,s,v,n,a){var q=R(e,v),o=R(e,a);return F(e,r,s,v,q,n,a,o)}_.exports=G
});var h=y(function(T,O){
var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=b(),I=c();H(E,"ndarray",I);O.exports=E
});var J=require("path").join,K=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),M=h(),d,k=K(J(__dirname,"./native.js"));L(k)?d=M:d=k;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
