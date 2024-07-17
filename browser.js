// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}function e(r,e){for(var t=0,n=r.length-1;n>=0;n--){var i=r[n];"."===i?r.splice(n,1):".."===i?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}var t=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,n=function(r){return t.exec(r).slice(1)};function i(){for(var r="",t=!1,n=arguments.length-1;n>=-1&&!t;n--){var i=n>=0?arguments[n]:"/";if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(r=i+"/"+r,t="/"===i.charAt(0))}return(t?"/":"")+(r=e(g(r.split("/"),(function(r){return!!r})),!t).join("/"))||"."}function o(r){var t=a(r),n="/"===b(r,-1);return(r=e(g(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&n&&(r+="/"),(t?"/":"")+r}function a(r){return"/"===r.charAt(0)}function u(){return o(g(Array.prototype.slice.call(arguments,0),(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function c(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=i(r).substr(1),e=i(e).substr(1);for(var n=t(r.split("/")),o=t(e.split("/")),a=Math.min(n.length,o.length),u=a,c=0;c<a;c++)if(n[c]!==o[c]){u=c;break}var s=[];for(c=u;c<n.length;c++)s.push("..");return(s=s.concat(o.slice(u))).join("/")}function s(r){var e=n(r),t=e[0],i=e[1];return t||i?(i&&(i=i.substr(0,i.length-1)),t+i):"."}function l(r,e){var t=n(r)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t}function f(r){return n(r)[3]}var p={extname:f,basename:l,dirname:s,sep:"/",delimiter:":",relative:c,join:u,isAbsolute:a,normalize:o,resolve:i};function g(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var b="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)},h=r(Object.freeze({__proto__:null,basename:l,default:p,delimiter:":",dirname:s,extname:f,isAbsolute:a,join:u,normalize:o,relative:c,resolve:i,sep:"/"})),y=Object,d=/./,v="function"==typeof Object.defineProperty?Object.defineProperty:null,m=Object.defineProperty;function w(r){return"number"==typeof r}function j(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function E(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+j(i):j(i)+r,n&&(r="-"+r)),r}var _=String.prototype.toLowerCase,S=String.prototype.toUpperCase;function x(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!w(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=E(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=E(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===S.call(r.specifier)?S.call(t):_.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var O=Math.abs,T=String.prototype.toLowerCase,k=String.prototype.toUpperCase,A=String.prototype.replace,P=/e\+(\d)$/,V=/e-(\d)$/,R=/^(\d+)$/,C=/^(\d+)e/,F=/\.0$/,$=/\.0*e/,I=/(\..*[^0])0*e/;function B(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!w(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":O(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=A.call(t,I,"$1e"),t=A.call(t,$,"e"),t=A.call(t,F,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=A.call(t,P,"e+0$1"),t=A.call(t,V,"e-0$1"),r.alternate&&(t=A.call(t,R,"$1."),t=A.call(t,C,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===k.call(r.specifier)?k.call(t):T.call(t)}function L(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var M=String.fromCharCode,N=isNaN,z=Array.isArray;function G(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Z(r){var e,t,n,i,o,a,u,c,s,l,f,p,g;if(!z(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if("string"==typeof(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=G(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,N(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,N(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=x(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!N(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=N(o)?String(n.arg):M(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=B(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=E(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,f=n.width,p=n.padRight,g=void 0,(g=f-l.length)<0?l:l=p?l+L(g):L(g)+l)),a+=n.arg||"",u+=1}return a}var q=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function W(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function U(r){var e,t,n,i;for(t=[],i=0,n=q.exec(r);n;)(e=r.slice(i,q.lastIndex-n[0].length)).length&&t.push(e),t.push(W(n)),i=q.lastIndex,n=q.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function X(r){var e,t;if("string"!=typeof r)throw new TypeError(X("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[U(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Z.apply(null,e)}var D,J=Object.prototype,Y=J.toString,H=J.__defineGetter__,K=J.__defineSetter__,Q=J.__lookupGetter__,rr=J.__lookupSetter__;D=function(){try{return v({},"x",{}),!0}catch(r){return!1}}()?m:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===Y.call(r))throw new TypeError(X("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Y.call(t))throw new TypeError(X("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Q.call(r,e)||rr.call(r,e)?(n=r.__proto__,r.__proto__=J,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&H&&H.call(r,e,t.get),a&&K&&K.call(r,e,t.set),r};var er=D;function tr(r,e,t){er(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function nr(r){return"boolean"==typeof r}var ir="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function or(){return ir&&"symbol"==typeof Symbol.toStringTag}var ar,ur=Object.prototype.toString,cr=Object.prototype.hasOwnProperty,sr="function"==typeof Symbol?Symbol:void 0,lr="function"==typeof sr?sr.toStringTag:"";ar=or()?function(r){var e,t,n,i,o;if(null==r)return ur.call(r);t=r[lr],o=lr,e=null!=(i=r)&&cr.call(i,o);try{r[lr]=void 0}catch(e){return ur.call(r)}return n=ur.call(r),e?r[lr]=t:delete r[lr],n}:function(r){return ur.call(r)};var fr=ar,pr=Boolean,gr=Boolean.prototype.toString,br=or();function hr(r){return"object"==typeof r&&(r instanceof pr||(br?function(r){try{return gr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===fr(r)))}function yr(r){return nr(r)||hr(r)}tr(yr,"isPrimitive",nr),tr(yr,"isObject",hr);var dr="object"==typeof self?self:null,vr="object"==typeof window?window:null,mr="object"==typeof globalThis?globalThis:null,wr=function(r){if(arguments.length){if(!nr(r))throw new TypeError(X("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(mr)return mr;if(dr)return dr;if(vr)return vr;throw new Error("unexpected error. Unable to resolve global object.")}(),jr=wr.document&&wr.document.childNodes,Er=Int8Array;function _r(){return/^\s*function\s*([^(]*)/i}var Sr,xr=/^\s*function\s*([^(]*)/i;tr(_r,"REGEXP",xr),Sr=Array.isArray?Array.isArray:function(r){return"[object Array]"===fr(r)};var Or=Sr;function Tr(r){return null!==r&&"object"==typeof r}var kr=function(r){if("function"!=typeof r)throw new TypeError(X("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Or(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Tr);function Ar(r){var e,t,n,i;if(("Object"===(t=fr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=xr.exec(n.toString()))return e[1]}return Tr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}tr(Tr,"isObjectLikeArray",kr);var Pr,Vr,Rr="function"==typeof d||"object"==typeof Er||"function"==typeof jr?function(r){return Ar(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?Ar(r).toLowerCase():e},Cr=Object.getPrototypeOf;Vr=Object.getPrototypeOf,Pr="function"===Rr(Vr)?Cr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===fr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Fr=Pr;function $r(r){return null==r?null:(r=y(r),Fr(r))}function Ir(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===fr(r))return!0;r=$r(r)}return!1}function Br(r,e){return e>0?0:(1-r)*e}function Lr(r){return Math.abs(r)}function Mr(r){return r.re}function Nr(r){return r.im}function zr(r){return"number"==typeof r}var Gr=Number,Zr=Gr.prototype.toString,qr=or();function Wr(r){return"object"==typeof r&&(r instanceof Gr||(qr?function(r){try{return Zr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===fr(r)))}function Ur(r){return zr(r)||Wr(r)}function Xr(r,e){if(!(this instanceof Xr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!zr(r))throw new TypeError(X("invalid argument. Real component must be a number. Value: `%s`.",r));if(!zr(e))throw new TypeError(X("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return er(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),er(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}function Dr(r,e){return new Xr(Mr(r)+Mr(e),Nr(r)+Nr(e))}function Jr(r,e,t,n,i,o,a,u){var c,s,l,f,p,g,b,h,y,d;if(r<=0)return o;if(0===Lr(Mr(f=e))+Lr(Nr(f)))return o;for(c=i,s=u,l=0;l<r;l++)o.set(Dr((p=e,g=t.get(c),b=void 0,h=void 0,y=void 0,d=void 0,b=Mr(p),h=Mr(g),y=Nr(p),d=Nr(g),new Xr(b*h-y*d,b*d+y*h)),o.get(s)),s),c+=n,s+=a;return o}function Yr(r,e,t,n,i,o){return Jr(r,e,t,n,Br(r,n),i,o,Br(r,o))}tr(Ur,"isPrimitive",zr),tr(Ur,"isObject",Wr),tr(Xr,"BYTES_PER_ELEMENT",8),tr(Xr.prototype,"BYTES_PER_ELEMENT",8),tr(Xr.prototype,"byteLength",16),tr(Xr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),tr(Xr.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r})),tr(Yr,"ndarray",Jr);var Hr=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return Ir(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,h.join)("/home/runner/work/blas-base-zaxpy/blas-base-zaxpy/lib","./native.js"));return Ir(Hr)?Yr:Hr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).zaxpy=e();
//# sourceMappingURL=browser.js.map
