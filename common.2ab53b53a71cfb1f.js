"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{7080:(g,m,u)=>{u.d(m,{c:()=>o});var d=u(5225),_=u(5587),a=u(1597);const o=(c,s)=>{let e,t;const n=(r,f,h)=>{if("undefined"==typeof document)return;const p=document.elementFromPoint(r,f);p&&s(p)?p!==e&&(l(),i(p,h)):l()},i=(r,f)=>{e=r,t||(t=e);const h=e;(0,d.c)(()=>h.classList.add("ion-activated")),f()},l=(r=!1)=>{if(!e)return;const f=e;(0,d.c)(()=>f.classList.remove("ion-activated")),r&&t!==e&&e.click(),e=void 0};return(0,a.createGesture)({el:c,gestureName:"buttonActiveDrag",threshold:0,onStart:r=>n(r.currentX,r.currentY,_.a),onMove:r=>n(r.currentX,r.currentY,_.b),onEnd:()=>{l(!0),(0,_.h)(),t=void 0}})}},8784:(g,m,u)=>{u.d(m,{a:()=>a,d:()=>o});var d=u(9671),_=u(6536);const a=function(){var c=(0,d.Z)(function*(s,e,t,n,i){if(s)return s.attachViewToDom(e,t,i,n);if("string"!=typeof t&&!(t instanceof HTMLElement))throw new Error("framework delegate is missing");const l="string"==typeof t?e.ownerDocument&&e.ownerDocument.createElement(t):t;return n&&n.forEach(r=>l.classList.add(r)),i&&Object.assign(l,i),e.appendChild(l),yield new Promise(r=>(0,_.c)(l,r)),l});return function(e,t,n,i,l){return c.apply(this,arguments)}}(),o=(c,s)=>{if(s){if(c)return c.removeViewFromDom(s.parentElement,s);s.remove()}return Promise.resolve()}},5587:(g,m,u)=>{u.d(m,{a:()=>a,b:()=>o,c:()=>_,d:()=>s,h:()=>c});const d={getEngine(){const e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const t=this.getEngine();if(!t)return;const n=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:n})},notification(e){const t=this.getEngine();if(!t)return;const n=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},_=()=>{d.selection()},a=()=>{d.selectionStart()},o=()=>{d.selectionChanged()},c=()=>{d.selectionEnd()},s=e=>{d.impact(e)}},7006:(g,m,u)=>{u.d(m,{s:()=>d});const d=t=>{try{if(t instanceof class{constructor(n){this.value=n}})return t.value;if(!o()||"string"!=typeof t||""===t)return t;const n=document.createDocumentFragment(),i=document.createElement("div");n.appendChild(i),i.innerHTML=t,s.forEach(h=>{const p=n.querySelectorAll(h);for(let y=p.length-1;y>=0;y--){const E=p[y];E.parentNode?E.parentNode.removeChild(E):n.removeChild(E);const b=a(E);for(let C=0;C<b.length;C++)_(b[C])}});const l=a(n);for(let h=0;h<l.length;h++)_(l[h]);const r=document.createElement("div");r.appendChild(n);const f=r.querySelector("div");return null!==f?f.innerHTML:r.innerHTML}catch(n){return console.error(n),""}},_=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let i=t.attributes.length-1;i>=0;i--){const l=t.attributes.item(i),r=l.name;if(!c.includes(r.toLowerCase())){t.removeAttribute(r);continue}const f=l.value;null!=f&&f.toLowerCase().includes("javascript:")&&t.removeAttribute(r)}const n=a(t);for(let i=0;i<n.length;i++)_(n[i])},a=t=>null!=t.children?t.children:t.childNodes,o=()=>{const t=window,n=t&&t.Ionic&&t.Ionic.config;return!n||(n.get?n.get("sanitizerEnabled",!0):!0===n.sanitizerEnabled||void 0===n.sanitizerEnabled)},c=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]},392:(g,m,u)=>{u.d(m,{S:()=>_});const _={bubbles:{dur:1e3,circles:9,fn:(a,o,c)=>{const s=a*o/c-a+"ms",e=2*Math.PI*o/c;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(a,o,c)=>{const s=o/c,e=a*s-a+"ms",t=2*Math.PI*s;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(a,o)=>({r:6,style:{left:9-9*o+"px","animation-delay":-110*o+"ms"}})},lines:{dur:1e3,lines:12,fn:(a,o,c)=>({y1:17,y2:29,style:{transform:`rotate(${30*o+(o<6?180:-180)}deg)`,"animation-delay":a*o/c-a+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(a,o,c)=>({y1:12,y2:20,style:{transform:`rotate(${30*o+(o<6?180:-180)}deg)`,"animation-delay":a*o/c-a+"ms"}})}}},5951:(g,m,u)=>{u.d(m,{c:()=>a,g:()=>c,h:()=>_,o:()=>e});var d=u(9671);const _=(t,n)=>null!==n.closest(t),a=(t,n)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},n):n,c=t=>{const n={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(i=>null!=i).map(i=>i.trim()).filter(i=>""!==i):[])(t).forEach(i=>n[i]=!0),n},s=/^[a-z][a-z0-9+\-.]*:/,e=function(){var t=(0,d.Z)(function*(n,i,l,r){if(null!=n&&"#"!==n[0]&&!s.test(n)){const f=document.querySelector("ion-router");if(f)return null!=i&&i.preventDefault(),f.push(n,l,r)}return!1});return function(i,l,r,f){return t.apply(this,arguments)}}()}}]);