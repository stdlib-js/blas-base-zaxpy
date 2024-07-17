// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("path")):"function"==typeof define&&define.amd?define(["path"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).zaxpy=e(r.require$$0)}(this,(function(r){"use strict";var e=Object,t=/./,n="function"==typeof Object.defineProperty?Object.defineProperty:null;var i=Object.defineProperty;function o(r){return"number"==typeof r}function a(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function c(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+a(i):a(i)+r,n&&(r="-"+r)),r}var u=String.prototype.toLowerCase,l=String.prototype.toUpperCase;function s(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!o(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=c(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=c(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===l.call(r.specifier)?l.call(t):u.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,p=String.prototype.toLowerCase,g=String.prototype.toUpperCase,d=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,h=/^(\d+)$/,v=/^(\d+)e/,w=/\.0$/,m=/\.0*e/,j=/(\..*[^0])0*e/;function E(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!o(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":f(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=d.call(t,j,"$1e"),t=d.call(t,m,"e"),t=d.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=d.call(t,y,"e+0$1"),t=d.call(t,b,"e-0$1"),r.alternate&&(t=d.call(t,h,"$1."),t=d.call(t,v,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===g.call(r.specifier)?g.call(t):p.call(t)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var S=String.fromCharCode,T=isNaN,x=Array.isArray;function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function O(r){var e,t,n,i,o,a,u,l,f,p,g,d,y;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,T(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!T(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(o)?String(n.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=E(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=c(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,y=void 0,(y=g-p.length)<0?p:p=d?p+_(y):_(y)+p)),a+=n.arg||"",u+=1}return a}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function P(r){var e,t,n,i;for(t=[],i=0,n=V.exec(r);n;)(e=r.slice(i,V.lastIndex-n[0].length)).length&&t.push(e),t.push(A(n)),i=V.lastIndex,n=V.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function C(r){var e,t;if("string"!=typeof r)throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[P(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return O.apply(null,e)}var R,$=Object.prototype,F=$.toString,I=$.__defineGetter__,B=$.__defineSetter__,L=$.__lookupGetter__,N=$.__lookupSetter__;R=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?i:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(r,e)||N.call(r,e)?(n=r.__proto__,r.__proto__=$,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&I&&I.call(r,e,t.get),a&&B&&B.call(r,e,t.set),r};var q=R;function M(r,e,t){q(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(r){return"boolean"==typeof r}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return Z&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;var z,J="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof J?J.toStringTag:"";z=W()?function(r){var e,t,n,i,o;if(null==r)return U.call(r);t=r[Y],o=Y,e=null!=(i=r)&&X.call(i,o);try{r[Y]=void 0}catch(e){return U.call(r)}return n=U.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return U.call(r)};var D=z,H=Boolean,K=Boolean.prototype.toString;var Q=W();function rr(r){return"object"==typeof r&&(r instanceof H||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===D(r)))}function er(r){return G(r)||rr(r)}M(er,"isPrimitive",G),M(er,"isObject",rr);var tr="object"==typeof self?self:null,nr="object"==typeof window?window:null,ir="object"==typeof global?global:null,or="object"==typeof globalThis?globalThis:null;var ar=function(r){if(arguments.length){if(!G(r))throw new TypeError(C("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(or)return or;if(tr)return tr;if(nr)return nr;if(ir)return ir;throw new Error("unexpected error. Unable to resolve global object.")}(),cr=ar.document&&ar.document.childNodes,ur=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var sr,fr=/^\s*function\s*([^(]*)/i;M(lr,"REGEXP",fr),sr=Array.isArray?Array.isArray:function(r){return"[object Array]"===D(r)};var pr=sr;function gr(r){return null!==r&&"object"==typeof r}var dr=function(r){if("function"!=typeof r)throw new TypeError(C("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!pr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(gr);function yr(r){var e,t,n,i;if(("Object"===(t=D(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=fr.exec(n.toString()))return e[1]}return gr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}M(gr,"isObjectLikeArray",dr);var br="function"==typeof t||"object"==typeof ur||"function"==typeof cr?function(r){return yr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?yr(r).toLowerCase():e};var hr,vr,wr=Object.getPrototypeOf;vr=Object.getPrototypeOf,hr="function"===br(vr)?wr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===D(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var mr=hr;function jr(r){return null==r?null:(r=e(r),mr(r))}function Er(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===D(r))return!0;r=jr(r)}return!1}function _r(r,e){return e>0?0:(1-r)*e}function Sr(r){return Math.abs(r)}function Tr(r){return r.re}function xr(r){return r.im}function kr(r){return"number"==typeof r}var Or=Number,Vr=Or.prototype.toString;var Ar=W();function Pr(r){return"object"==typeof r&&(r instanceof Or||(Ar?function(r){try{return Vr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===D(r)))}function Cr(r){return kr(r)||Pr(r)}function Rr(r,e){if(!(this instanceof Rr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!kr(r))throw new TypeError(C("invalid argument. Real component must be a number. Value: `%s`.",r));if(!kr(e))throw new TypeError(C("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return q(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),q(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}function $r(r,e){return new Rr(Tr(r)+Tr(e),xr(r)+xr(e))}function Fr(r,e,t,n,i,o,a,c){var u,l,s,f,p,g,d,y,b,h;if(r<=0)return o;if(0===Sr(Tr(f=e))+Sr(xr(f)))return o;for(u=i,l=c,s=0;s<r;s++)o.set($r((p=e,g=t.get(u),d=void 0,y=void 0,b=void 0,h=void 0,d=Tr(p),y=Tr(g),b=xr(p),h=xr(g),new Rr(d*y-b*h,d*h+b*y)),o.get(l)),l),u+=n,l+=a;return o}function Ir(r,e,t,n,i,o){return Fr(r,e,t,n,_r(r,n),i,o,_r(r,o))}M(Cr,"isPrimitive",kr),M(Cr,"isObject",Pr),M(Rr,"BYTES_PER_ELEMENT",8),M(Rr.prototype,"BYTES_PER_ELEMENT",8),M(Rr.prototype,"byteLength",16),M(Rr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),M(Rr.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r})),M(Ir,"ndarray",Fr);var Br=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return Er(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,r.join)(__dirname,"./native.js"));return Er(Br)?Ir:Br}));
//# sourceMappingURL=index.js.map
