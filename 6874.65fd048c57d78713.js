"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6874],{6874:(a,n,o)=>{o.r(n),o.d(n,{BrowserWeb:()=>l,Browser:()=>i});var _=o(9671),r=o(7423);class l extends r.Uw{constructor(){super(),this._lastWindow=null}open(s){var e=this;return(0,_.Z)(function*(){e._lastWindow=window.open(s.url,s.windowName||"_blank")})()}close(){var s=this;return(0,_.Z)(function*(){return new Promise((e,t)=>{null!=s._lastWindow?(s._lastWindow.close(),s._lastWindow=null,e()):t("No active window to close!")})})()}}const i=new l}}]);