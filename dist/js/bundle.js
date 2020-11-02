(()=>{"use strict";var e={807:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap);"]),o.push([e.id,'*{margin:0;padding:0;box-sizing:border-box}header{display:flex;justify-content:center;align-items:center;padding:.2rem;background-color:#113b68bd;overflow:auto}header h1{text-align:center;color:#fff;font-family:"Fira Sans",monospace;font-size:1.5rem}.wrapper{position:absolute;display:flex;flex-direction:column;top:50%;left:50%;transform:translate(-50%, -50%);min-width:fit-content;max-width:40rem;min-height:min-content;max-height:45rem;background-color:#113b687e;border-radius:.5rem;overflow:auto}.wrapper .quote{padding:1rem;font-family:"Fira Sans"}.wrapper .quote #quote-txt{font-size:3rem;font-weight:bolder;color:#fff}.wrapper .quote #quote-auth{margin-top:.2rem;text-align:right;font-weight:bold;font-size:1.8rem;color:#fff}.wrapper .quote #quote-img{display:inline;padding:1rem}.wrapper hr{position:relative;top:85%;border:2px solid #fff;width:fit-content;padding:0}.wrapper .quote-change{position:relative;top:90%;display:flex;justify-content:center;align-items:flex-end;padding:.5rem;cursor:pointer}.wrapper .quote-change button{font-size:1.5rem;font-family:"Fira Sans",monospace;background-color:transparent;border:none;color:#fff;cursor:inherit}.wrapper .quote-change:hover{background-color:#14437648}.wrapper .quote-change:active{background-color:#113b687e}',""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},379:(e,t,n)=>{var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var c=e[o],s=t.base?c[0]+t.base:c[0],u=n[s]||0,l="".concat(s," ").concat(u);n[s]=u+1;var f=a(l),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:l,updater:m(d,t),references:1}),r.push(l)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,l=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function d(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,h=0;function m(e,t){var n,r,o;if(t.singleton){var i=h++;n=p||(p=s(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=s(t),r=d.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var s=c(e,t),u=0;u<n.length;u++){var l=a(n[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=s}}}}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(807);t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const o={async fetchFromServer(){try{return(await fetch("https://type.fit/api/quotes")).json()}catch(e){console.log("Error in Fetching Data \n "+e)}}};(function(){function e(){o.fetchFromServer().then((e=>e[Math.floor(100*Math.random())])).then((e=>{!function(e,t){const n=`"${e}"`,r="~&nbsp;"+t;document.getElementById("quote-txt").innerHTML=n,document.getElementById("quote-auth").innerHTML=r}(e.text,e.author)}))}return{init(){e(),document.querySelector(".quote-change").addEventListener("click",e)}}})().init()})()})();