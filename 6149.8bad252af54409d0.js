"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6149],{7423:(k,U,u)=>{u.d(U,{Uw:()=>v,fo:()=>h});var n=u(9671);"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global&&global;var m=(()=>{return(f=m||(m={})).Unimplemented="UNIMPLEMENTED",f.Unavailable="UNAVAILABLE",m;var f})();class N extends Error{constructor(s,d){super(s),this.message=s,this.code=d}}const nt=f=>{var s,d,p,T,Z;const z=f.CapacitorCustomPlatform||null,y=f.Capacitor||{},t=y.Plugins=y.Plugins||{},e=f.CapacitorPlatforms,i=(null===(s=null==e?void 0:e.currentPlatform)||void 0===s?void 0:s.getPlatform)||(()=>null!==z?z.name:(f=>{var s,d;return(null==f?void 0:f.androidBridge)?"android":(null===(d=null===(s=null==f?void 0:f.webkit)||void 0===s?void 0:s.messageHandlers)||void 0===d?void 0:d.bridge)?"ios":"web"})(f)),r=(null===(d=null==e?void 0:e.currentPlatform)||void 0===d?void 0:d.isNativePlatform)||(()=>"web"!==i()),w=(null===(p=null==e?void 0:e.currentPlatform)||void 0===p?void 0:p.isPluginAvailable)||(P=>{const A=C.get(P);return!(!(null==A?void 0:A.platforms.has(i()))&&!l(P))}),l=(null===(T=null==e?void 0:e.currentPlatform)||void 0===T?void 0:T.getPluginHeader)||(P=>{var A;return null===(A=y.PluginHeaders)||void 0===A?void 0:A.find(X=>X.name===P)}),C=new Map,et=(null===(Z=null==e?void 0:e.currentPlatform)||void 0===Z?void 0:Z.registerPlugin)||((P,A={})=>{const X=C.get(P);if(X)return console.warn(`Capacitor plugin "${P}" already registered. Cannot register plugins twice.`),X.proxy;const V=i(),q=l(P);let $;const lt=function(){var O=(0,n.Z)(function*(){return!$&&V in A?$=$="function"==typeof A[V]?yield A[V]():A[V]:null!==z&&!$&&"web"in A&&($=$="function"==typeof A.web?yield A.web():A.web),$});return function(){return O.apply(this,arguments)}}(),it=O=>{let M;const B=(...H)=>{const K=lt().then(F=>{const Q=((O,M)=>{var B,H;if(!q){if(O)return null===(H=O[M])||void 0===H?void 0:H.bind(O);throw new N(`"${P}" plugin is not implemented on ${V}`,m.Unimplemented)}{const K=null==q?void 0:q.methods.find(F=>M===F.name);if(K)return"promise"===K.rtype?F=>y.nativePromise(P,M.toString(),F):(F,Q)=>y.nativeCallback(P,M.toString(),F,Q);if(O)return null===(B=O[M])||void 0===B?void 0:B.bind(O)}})(F,O);if(Q){const ot=Q(...H);return M=null==ot?void 0:ot.remove,ot}throw new N(`"${P}.${O}()" is not implemented on ${V}`,m.Unimplemented)});return"addListener"===O&&(K.remove=(0,n.Z)(function*(){return M()})),K};return B.toString=()=>`${O.toString()}() { [capacitor code] }`,Object.defineProperty(B,"name",{value:O,writable:!1,configurable:!1}),B},at=it("addListener"),st=it("removeListener"),ut=(O,M)=>{const B=at({eventName:O},M),H=function(){var F=(0,n.Z)(function*(){const Q=yield B;st({eventName:O,callbackId:Q},M)});return function(){return F.apply(this,arguments)}}(),K=new Promise(F=>B.then(()=>F({remove:H})));return K.remove=(0,n.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield H()}),K},rt=new Proxy({},{get(O,M){switch(M){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return q?ut:at;case"removeListener":return st;default:return it(M)}}});return t[P]=rt,C.set(P,{name:P,proxy:rt,platforms:new Set([...Object.keys(A),...q?[V]:[]])}),rt});return y.convertFileSrc||(y.convertFileSrc=P=>P),y.getPlatform=i,y.handleError=P=>f.console.error(P),y.isNativePlatform=r,y.isPluginAvailable=w,y.pluginMethodNoop=(P,A,X)=>Promise.reject(`${X} does not have an implementation of "${A}".`),y.registerPlugin=et,y.Exception=N,y.DEBUG=!!y.DEBUG,y.isLoggingEnabled=!!y.isLoggingEnabled,y.platform=y.getPlatform(),y.isNative=y.isNativePlatform(),y},R=(f=>f.Capacitor=nt(f))("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}),h=R.registerPlugin;class v{constructor(s){this.listeners={},this.windowListeners={},s&&(console.warn(`Capacitor WebPlugin "${s.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=s)}addListener(s,d){var p=this;this.listeners[s]||(this.listeners[s]=[]),this.listeners[s].push(d);const Z=this.windowListeners[s];Z&&!Z.registered&&this.addWindowListener(Z);const z=function(){var t=(0,n.Z)(function*(){return p.removeListener(s,d)});return function(){return t.apply(this,arguments)}}(),y=Promise.resolve({remove:z});return Object.defineProperty(y,"remove",{value:(t=(0,n.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield z()}),function(){return t.apply(this,arguments)})}),y;var t}removeAllListeners(){var s=this;return(0,n.Z)(function*(){s.listeners={};for(const d in s.windowListeners)s.removeWindowListener(s.windowListeners[d]);s.windowListeners={}})()}notifyListeners(s,d){const p=this.listeners[s];p&&p.forEach(T=>T(d))}hasListeners(s){return!!this.listeners[s].length}registerWindowListener(s,d){this.windowListeners[d]={registered:!1,windowEventName:s,pluginEventName:d,handler:p=>{this.notifyListeners(d,p)}}}unimplemented(s="not implemented"){return new R.Exception(s,m.Unimplemented)}unavailable(s="not available"){return new R.Exception(s,m.Unavailable)}removeListener(s,d){var p=this;return(0,n.Z)(function*(){const T=p.listeners[s];if(!T)return;const Z=T.indexOf(d);p.listeners[s].splice(Z,1),p.listeners[s].length||p.removeWindowListener(p.windowListeners[s])})()}addWindowListener(s){window.addEventListener(s.windowEventName,s.handler),s.registered=!0}removeWindowListener(s){!s||(window.removeEventListener(s.windowEventName,s.handler),s.registered=!1)}}},5642:(k,U,u)=>{u.d(U,{U:()=>x});var n=u(9808),_=u(2846),S=u(2096);let x=(()=>{class E{}return E.\u0275fac=function(W){return new(W||E)},E.\u0275mod=S.oAB({type:E}),E.\u0275inj=S.cJS({imports:[[n.ez,_.Pc]]}),E})()},7734:(k,U,u)=>{u.d(U,{a:()=>R});var n=u(2096),_=u(2846),S=u(9808),x=u(655),E=u(7423);const b=(0,E.fo)("Browser",{web:()=>u.e(6874).then(u.bind(u,6874)).then(h=>new h.BrowserWeb)}),W=(0,E.fo)("Share",{web:()=>u.e(7907).then(u.bind(u,7907)).then(h=>new h.ShareWeb)});var m=u(8667);function N(h,I){if(1&h){const g=n.EpF();n.TgZ(0,"ion-img",12),n.NdJ("click",function(){return n.CHM(g),n.oxw().openArticle()}),n.qZA()}if(2&h){const g=n.oxw();n.Q6J("src",g.noticia.urlToImage)}}function D(h,I){if(1&h&&(n.TgZ(0,"ion-card-content"),n.TgZ(1,"p"),n._uU(2),n.qZA(),n.qZA()),2&h){const g=n.oxw();n.xp6(2),n.hij(" ",g.noticia.description," ")}}let nt=(()=>{class h{constructor(g,v,G,f){this.platform=g,this.actionSheetCtrl=v,this.toastController=G,this.storageService=f}presentToast(g){return(0,x.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:g,duration:2e3,buttons:[{side:"end",text:"Deshacer",handler:()=>{this.onToggleFavorite()}}]})).present()})}openArticle(){(this.platform.is("ios")||this.platform.is("android"))&&(()=>{(0,x.mG)(this,void 0,void 0,function*(){yield b.open({url:this.noticia.url})})})(),window.open(this.noticia.url,"_blank")}onOpenMenu(){return(0,x.mG)(this,void 0,void 0,function*(){this.articleInFavorite=this.storageService.articleInFavorites(this.noticia);const g=[{text:this.articleInFavorite?"Remover Favorito":"Favorito",icon:this.articleInFavorite?"heart":"heart-outline",handler:()=>{this.onToggleFavorite(),this.presentToast(this.articleInFavorite?"Articulo removido de Favoritos":"Articulo agregado a Favoritos")}},{text:"Cancelar",icon:"close-outline",role:"cancel"}],v={text:"Compartir ",icon:"share-social-outline",handler:()=>this.onShareArticle()};this.platform.is("capacitor")&&g.unshift(v),yield(yield this.actionSheetCtrl.create({header:"Opciones",buttons:g})).present()})}onShareArticle(){return(0,x.mG)(this,void 0,void 0,function*(){const{title:g,description:v,url:G}=this.noticia;console.log(this.noticia),yield W.share({title:g,text:v,url:G})})}onToggleFavorite(){this.storageService.saveRemoveArticle(this.noticia)}}return h.\u0275fac=function(g){return new(g||h)(n.Y36(_.t4),n.Y36(_.BX),n.Y36(_.yF),n.Y36(m.V))},h.\u0275cmp=n.Xpm({type:h,selectors:[["app-noticia"]],inputs:{noticia:"noticia",index:"index"},decls:21,vars:9,consts:[["color","dark"],[1,"ion-align-items-center"],[1,"ion-padding-horizontal"],[1,"ion-text-right"],["fill","clear",3,"click"],["slot","icon-only","name","ellipsis-vertical"],[1,"ion-align-items-center",3,"click"],[1,"text-primary"],[1,"noticia-source-name"],[1,"ion-padding-horizontal","ion-margin-bottom"],[3,"src","click",4,"ngIf"],[4,"ngIf"],[3,"src","click"]],template:function(g,v){1&g&&(n.TgZ(0,"ion-card",0),n.TgZ(1,"ion-card-header"),n.TgZ(2,"ion-card-subtitle"),n.TgZ(3,"ion-row",1),n.TgZ(4,"ion-col",2),n.TgZ(5,"p"),n._uU(6),n.ALo(7,"date"),n.qZA(),n.qZA(),n.TgZ(8,"ion-col",3),n.TgZ(9,"ion-button",4),n.NdJ("click",function(){return v.onOpenMenu()}),n._UZ(10,"ion-icon",5),n.qZA(),n.qZA(),n.qZA(),n.TgZ(11,"ion-row",6),n.NdJ("click",function(){return v.openArticle()}),n.TgZ(12,"ion-col"),n.TgZ(13,"span",7),n._uU(14),n.qZA(),n.TgZ(15,"span",8),n._uU(16),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(17,"ion-card-title",9),n._uU(18),n.qZA(),n.qZA(),n.YNc(19,N,1,1,"ion-img",10),n.YNc(20,D,3,1,"ion-card-content",11),n.qZA()),2&g&&(n.xp6(6),n.hij(" ",n.xi3(7,6,v.noticia.publishedAt,"dd-MM-yyyy")," "),n.xp6(8),n.hij(" ",v.index+1,". "),n.xp6(2),n.hij(" ",v.noticia.source.name," "),n.xp6(2),n.Oqu(v.noticia.title),n.xp6(1),n.Q6J("ngIf",v.noticia.urlToImage),n.xp6(1),n.Q6J("ngIf",v.noticia.description))},directives:[_.PM,_.Zi,_.tO,_.Nd,_.wI,_.YG,_.gu,_.gZ,S.O5,_.Xz,_.FN],pipes:[S.uU],styles:[""]}),h})();function tt(h,I){if(1&h&&(n.TgZ(0,"ion-col",2),n._UZ(1,"app-noticia",3),n.qZA()),2&h){const g=I.$implicit,v=I.index;n.xp6(1),n.Q6J("noticia",g)("index",v)}}let R=(()=>{class h{constructor(){this.noticias=[]}ngOnInit(){}}return h.\u0275fac=function(g){return new(g||h)},h.\u0275cmp=n.Xpm({type:h,selectors:[["app-noticias"]],inputs:{noticias:"noticias"},decls:3,vars:1,consts:[["fixed",""],["size","12","size-lg","3","size-md","4","size-sm","6","size-xs","12",4,"ngFor","ngForOf"],["size","12","size-lg","3","size-md","4","size-sm","6","size-xs","12"],[3,"noticia","index"]],template:function(g,v){1&g&&(n.TgZ(0,"ion-grid",0),n.TgZ(1,"ion-row"),n.YNc(2,tt,2,2,"ion-col",1),n.qZA(),n.qZA()),2&g&&(n.xp6(2),n.Q6J("ngForOf",v.noticias))},directives:[_.jY,_.Nd,S.sg,_.wI,nt],styles:[""]}),h})()},9885:(k,U,u)=>{u.d(U,{e:()=>E});var n=u(9808),_=u(4182),S=u(2846),x=u(2096);let E=(()=>{class b{}return b.\u0275fac=function(m){return new(m||b)},b.\u0275mod=x.oAB({type:b}),b.\u0275inj=x.cJS({imports:[[n.ez,_.u5,S.Pc]]}),b})()},8667:(k,U,u)=>{u.d(U,{V:()=>E});var n=u(655);const S=(0,u(7423).fo)("Storage",{web:()=>u.e(8913).then(u.bind(u,8913)).then(b=>new b.StorageWeb)});var x=u(2096);let E=(()=>{class b{constructor(){this._localArticle=[]}get getLocalArticles(){return[...this._localArticle]}saveRemoveArticle(m){return(0,n.mG)(this,void 0,void 0,function*(){this._localArticle=this._localArticle.find(D=>D.title===m.title)?this._localArticle.filter(D=>D.title!==m.title):[m,...this._localArticle],yield S.set({key:"article",value:JSON.stringify(this._localArticle)})})}loadFavorite(){return(0,n.mG)(this,void 0,void 0,function*(){try{const m=yield S.get({key:"article"});console.log(m),m.value&&(this._localArticle=JSON.parse(m.value))}catch(m){console.log("Error al obtener los datos del Local Storage",m)}})}articleInFavorites(m){return!!this._localArticle.find(N=>N.title===m.title)}}return b.\u0275fac=function(m){return new(m||b)},b.\u0275prov=x.Yz7({token:b,factory:b.\u0275fac,providedIn:"root"}),b})()},655:(k,U,u)=>{function m(t,e,o,i){return new(o||(o=Promise))(function(r,c){function w(L){try{l(i.next(L))}catch(J){c(J)}}function j(L){try{l(i.throw(L))}catch(J){c(J)}}function l(L){L.done?r(L.value):function(r){return r instanceof o?r:new o(function(c){c(r)})}(L.value).then(w,j)}l((i=i.apply(t,e||[])).next())})}u.d(U,{mG:()=>m})}}]);