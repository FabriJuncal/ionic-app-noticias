"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1015],{1015:(P,l,n)=>{n.r(l),n.d(l,{Tab1PageModule:()=>b});var e=n(2846),u=n(9808),g=n(4182),d=n(9885),c=n(1e3),i=n(2096),f=n(7987),T=n(7734);const h=[{path:"",component:(()=>{class o{constructor(t){this.noticiasService=t,this.noticias=[],this.categoria="business"}ionViewDidEnter(){this.noticiasService.getTitularesPrincipalesPorCategoria(this.categoria).subscribe(t=>{console.log(t),this.noticias=t})}loadData(){this.noticiasService.getTitularesPrincipalesPorCategoria(this.categoria,!0).subscribe(t=>{t.length!==this.noticias.length?(console.log(t),this.noticias=t,this.infiniteScroll.complete()):this.infiniteScroll.disabled=!0})}}return o.\u0275fac=function(t){return new(t||o)(i.Y36(f.D))},o.\u0275cmp=i.Xpm({type:o,selectors:[["app-tab1"]],viewQuery:function(t,s){if(1&t&&i.Gf(e.ju,7),2&t){let r;i.iGM(r=i.CRH())&&(s.infiniteScroll=r.first)}},decls:8,vars:3,consts:[["mode","ios",1,"ion-no-border",3,"translucent"],["color","dark"],["color","dark",3,"fullscreen"],[3,"noticias"],["threshold","25%","position","bottom",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Cargando..."]],template:function(t,s){1&t&&(i.TgZ(0,"ion-header",0),i.TgZ(1,"ion-toolbar",1),i.TgZ(2,"ion-title"),i._uU(3," Fabricio New's "),i.qZA(),i.qZA(),i.qZA(),i.TgZ(4,"ion-content",2),i._UZ(5,"app-noticias",3),i.TgZ(6,"ion-infinite-scroll",4),i.NdJ("ionInfinite",function(){return s.loadData()}),i._UZ(7,"ion-infinite-scroll-content",5),i.qZA(),i.qZA()),2&t&&(i.Q6J("translucent",!0),i.xp6(4),i.Q6J("fullscreen",!0),i.xp6(1),i.Q6J("noticias",s.noticias))},directives:[e.Gu,e.sr,e.wd,e.W2,T.a,e.ju,e.MB],styles:[""]}),o})()}];let m=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({imports:[[c.Bz.forChild(h)],c.Bz]}),o})();var p=n(5642);let b=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({imports:[[p.U,e.Pc,u.ez,g.u5,d.e,m]]}),o})()}}]);