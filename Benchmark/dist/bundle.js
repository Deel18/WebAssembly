!function(e){var t={};function n(E){if(t[E])return t[E].exports;var N=t[E]={i:E,l:!1,exports:{}};return e[E].call(N.exports,N,N.exports,n),N.l=!0,N.exports}n.m=e,n.c=t,n.d=function(e,t,E){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:E})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var E=Object.create(null);if(n.r(E),Object.defineProperty(E,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var N in e)n.d(E,N,function(t){return e[t]}.bind(null,N));return E},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){console.log("STARTING RAINBOW BENCHMARK");const n=function(){const e={JS_RENDERING:document.getElementById("section.js-rendering"),WASM_RENDERING:document.getElementById("section.wasm-rendering")};return{JS_RENDERING:{SECTION:e.JS_RENDERING,BTN_REFRESH:e.JS_RENDERING.getElementsByClassName("btn.refresh")[0],UI_EXEC_TIME:e.JS_RENDERING.getElementsByClassName("code.exec-time")[0],CANVAS:e.JS_RENDERING.getElementsByTagName("canvas")[0]},WASM_RENDERING:{SECTION:e.WASM_RENDERING,BTN_REFRESH:e.WASM_RENDERING.getElementsByClassName("btn.refresh")[0],UI_EXEC_TIME:e.WASM_RENDERING.getElementsByClassName("code.exec-time")[0],CANVAS:e.WASM_RENDERING.getElementsByTagName("canvas")[0]}}}(),E=function(){const e=n.JS_RENDERING.CANVAS.width,t=n.JS_RENDERING.CANVAS.height,E=n.JS_RENDERING.CANVAS.getContext("2d");E.fillRect(0,0,40,40),E.fill(),console.log(E.getImageData(1,1,100,100));const N={CANVAS_EL:n.JS_RENDERING.CANVAS,CTX:E,IMG_DATA:E.getImageData(0,0,e,t)},o=n.WASM_RENDERING.CANVAS.width,r=n.WASM_RENDERING.CANVAS.height,a={CANVAS_EL:n.WASM_RENDERING.CANVAS,CTX:n.WASM_RENDERING.CANVAS.getContext("2d"),IMG_DATA:n.WASM_RENDERING.CANVAS.getContext("2d").getImageData(0,0,o,r)};return{JS_RENDERING:N,WASM_RENDERING:a}}();n.JS_RENDERING.BTN_REFRESH.addEventListener("click",()=>(function(e){console.log("Drawing canvas with JS");const{CANVAS_EL:t,CTX:n,IMG_DATA:E}=e,N=E.data,{WIDTH:o,HEIGHT:r}=E;for(let e=0;e<r;e++)for(let t=0;t<o;t++){const n=e*o*4+4*t;N[n]=255*Math.random(),N[n+1]=255*Math.random(),N[n+2]=255*Math.random(),N[n+3]=255}n.putImageData(E,0,0)})(E.JS_RENDERING))}]);