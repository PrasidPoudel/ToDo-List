(()=>{"use strict";var e={919:(e,t,n)=>{n.d(t,{A:()=>a});var o=n(601),r=n.n(o),c=n(314),i=n.n(c)()(r());i.push([e.id,'.options {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n.options div {\n    display: flex;\n}\n.options div div {\n    align-self: center;\n    font-family: "Roboto",sans-serif;\n    font-size: 1.125rem;\n}\n.cancel-button {\n    background-color: rgb(206, 37, 37);\n    font-family: "Bebas Neue", serif;\n    font-size: 1.125rem;\n    height: fit-content;\n    width: fit-content;\n}\n.add-button {\n    background-color: rgb(104, 243, 104);\n     font-family: "Bebas Neue", serif;\n    font-size: 1.2rem;\n    height: fit-content;\n    width: fit-content;\n}\n.add-projects div img {\n    height: 25px;\n    width: 35px;\n}\n.add-projects>button {\n    background-color: transparent;\n    display: flex;\n}\nimg {\n    height: 27px;\n    width: 27px;\n}\n.features {\n    margin-left: 18px;\n}\n.add-projects div>*:hover {\n    background-color: lightblue;\n}\n.add-projects>button>div{\n    align-self: center;\n}\n.todo-container {\n    display: flex;\n}\nbutton:active {\n    background-color: black;\n    color: white;\n}\n.taskAdd {\n    text-align: center;\n    height: 60px;\n    font-size: 2 rem;\n    font-size: 3rem;\n    position: absolute;\n    top: 70%;\n    left: 70%;\n    width: 60px;\n    border-radius: 100%;\n    border: 1px solid black;\n}\n.add-projects {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n.add-projects>button{\n    width: fit-content;\n}\n.add-projects button:hover{\n    cursor: pointer;\n}',""]);const a=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,c){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var c={},i=[],a=0;a<e.length;a++){var d=e[a],s=o.base?d[0]+o.base:d[0],l=c[s]||0,u="".concat(s," ").concat(l);c[s]=l+1;var p=n(u),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=r(f,o);o.byIndex=a,t.splice(a,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var c=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<c.length;i++){var a=n(c[i]);t[a].references--}for(var d=o(e,r),s=0;s<c.length;s++){var l=n(c[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}c=d}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,n.d({},{m:()=>w,v:()=>S});var o=n(72),r=n.n(o),c=n(825),i=n.n(c),a=n(659),d=n.n(a),s=n(56),l=n.n(s),u=n(540),p=n.n(u),f=n(113),m=n.n(f),v=n(919),h={};h.styleTagTransform=m(),h.setAttributes=l(),h.insert=d().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),r()(v.A,h),v.A&&v.A.locals&&v.A.locals;const y=n.p+"27178b4697c8fe649bcd.svg";class b{constructor(e,t=[]){this.uniqueProject=e,this.tasksArray=t}}class g{constructor(e,t,n,o){this.title=e,this.description=t,this.duedate=n,this.priority=o}}const x=function(e,t){let n=new b(e.value,[]);S.push(n);const o=document.querySelector(".add-projects"),r=document.createElement("button"),c=document.createElement("div");c.textContent=e.value,c.setAttribute("name",`${e.value}`),w.push(e.value);const i=document.createElement("img");i.src=y,i.setAttribute("data",t),i.classList.add("delete-img"),r.appendChild(c),r.appendChild(i),r.setAttribute("data",t),r.classList.add("project-item"),o.appendChild(r),e.value="",t++},E=function(e){const t=document.querySelector(".add-todo");let n=document.getElementById("title").value,o=document.getElementById("description").value,r=new Date(document.getElementById("duedate").value),c=document.getElementById("Priority").value,i=e.firstChild,a=new g(n,o,r,c);console.log(a);for(let e=0;e<S.length;e++)if(S[e].uniqueProject===i.textContent){S[e].tasksArray.push(a);const o=document.createElement("input");o.setAttribute("type","checkbox");const c=document.createElement("div");c.textContent=n;const i=document.createElement("div");r.textContent=r.toDateString();const d=document.createElement("div");d.classList.add("todo-items"),d.appendChild(o),d.appendChild(c),d.appendChild(i),t.appendChild(d);break}console.log(S)},C=function(e){let t;document.querySelector(".add-todo").innerHTML="";const n=e.firstChild;for(let e=0;e<S.length;e++)if(S[e].uniqueProject===n.textContent){t=S[e].tasksArray;break}const o=document.querySelector(".add-todo");o.innerHTML="";for(let e=0;e<t.length;e++){const n=document.createElement("input");n.setAttribute("type","checkbox");const r=document.createElement("div");r.textContent=t[e].title;const c=document.createElement("div");c.textContent=t[e].duedate;const i=document.createElement("div");i.classList.add("todo-items"),i.appendChild(n),i.appendChild(r),i.appendChild(c),o.appendChild(i)}},S=[],w=[],k=document.querySelector("#submit"),j=document.querySelector(".projects"),A=document.querySelector(".projects-form");j.addEventListener("click",(()=>{A.style.display="block",document.querySelector("#project-label").focus()}));const q=document.querySelector("#project-label");document.querySelector(".add-button").addEventListener("click",(e=>{if(e.preventDefault(),""!==q.value){let e=function(e,t){for(let n of e)if(n===t.value)return alert("NO Duplicate Projects Allowed"),!1;return!0}(w,q);console.log(e),!0===e&&x(q,0),document.querySelectorAll(".add-projects>button").forEach((e=>{e.addEventListener("click",(()=>{C(e),k.addEventListener("click",(t=>{t.preventDefault(),E(e)}))}))}))}})),document.querySelector(".cancel-button").addEventListener("click",(e=>{e.preventDefault(),A.style.display="none"}));const L=document.querySelector(".taskAdd"),T=document.querySelector(".dialog");L.addEventListener("click",(()=>{T.showModal()})),document.querySelector(".cancel").addEventListener("click",(e=>{e.preventDefault(),T.close()}))})();