(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"I+9i":function(t,i,e){"use strict";e.r(i);var o=e("ofXK"),n=e("3Pt+"),r=e("TEn/"),s=e("tyNb"),c=e("mrSG"),a=e("VOof"),l=e("J07l"),b=e("R0Ic"),m=e("Adf6"),h=e("96DK"),u=e("fXoL"),d=e("7JkF");function p(t,i){1&t&&(u.Mb(0,"div",4),u.Kb(1,"br"),u.Kb(2,"br"),u.Kb(3,"br"),u.Kb(4,"ion-spinner",5),u.Mb(5,"p"),u.lc(6,"Cargando Formularios..."),u.Lb(),u.Lb())}function f(t,i){if(1&t){const t=u.Nb();u.Mb(0,"ion-item",6),u.Ub("click",(function(){u.hc(t);const e=i.$implicit;return u.Wb().clickForm(e)})),u.Mb(1,"div",7),u.lc(2,"F"),u.Lb(),u.Mb(3,"ion-label",8),u.lc(4),u.Lb(),u.Lb()}if(2&t){const t=i.$implicit;u.zb(4),u.nc(" ",t.Name,"")}}const g=[{path:"",component:(()=>{class t{constructor(t,i,e,o,n,r,s){this.apiService=t,this.sqliteService=i,this.myPlatform=e,this.storageService=o,this.router=n,this.menuCtrl=r,this.socket=s,this.dataUser={AccesToken:"90BA1FD909F45177050A18D22AF00BA0"},this.listForms=[],this.draw=!1,this.loadForms=!1,this.plt="",this.myPlatform.$myplatform.subscribe(t=>{this.plt=t})}ngOnInit(){}ionViewWillEnter(){return Object(c.a)(this,void 0,void 0,(function*(){this.listForms=[],0===this.listForms.length&&(this.loadForms=!0),yield this.menuCtrl.enable(!0,"menu"),this.dataUser.AccessToken=yield this.storageService.getToken(),this.apiService.getForm(this.dataUser,{}).subscribe(t=>{t=JSON.parse(t),this.loadForms=!1,t.forEach(t=>{"True"!==t.isDeleted&&this.listForms.push(t)}),"web"===this.plt&&this.storageService.insertForms(t),console.log(this.listForms)})}))}clickForm(t){return Object(c.a)(this,void 0,void 0,(function*(){try{console.log(t),t.JSONQuestions=JSON.parse(t.JSONQuestions),(yield this.storageService.insertFormActive(t))&&this.router.navigate(["/form"])}catch(i){}}))}}return t.\u0275fac=function(i){return new(i||t)(u.Jb(l.a),u.Jb(m.a),u.Jb(h.a),u.Jb(a.a),u.Jb(s.g),u.Jb(r.X),u.Jb(d.a))},t.\u0275cmp=u.Db({type:t,selectors:[["app-central"]],decls:8,vars:3,consts:[[1,"ion-no-border"],["color","danger"],["class","center column",4,"ngIf"],["class","ion-margin-bottom",3,"click",4,"ngFor","ngForOf"],[1,"center","column"],["name","crescent"],[1,"ion-margin-bottom",3,"click"],[1,"avatar"],[1,"ion-text-wrap"]],template:function(t,i){1&t&&(u.Mb(0,"ion-header",0),u.Mb(1,"ion-toolbar",1),u.Mb(2,"ion-title"),u.lc(3,"Formularios"),u.Lb(),u.Lb(),u.Lb(),u.Mb(4,"ion-content"),u.kc(5,p,7,0,"div",2),u.Mb(6,"ion-list"),u.kc(7,f,5,1,"ion-item",3),u.Lb(),u.Lb()),2&t&&(u.zb(5),u.cc("ngIf",i.loadForms),u.zb(1),u.cc("@welcome",i.listForms.length),u.zb(1),u.cc("ngForOf",i.listForms))},directives:[r.s,r.T,r.S,r.l,o.i,r.B,o.h,r.P,r.v,r.A],styles:[".avatar[_ngcontent-%COMP%]{width:50px;height:50px;background:#4d662e;color:#fff;font-weight:700;font-size:22px;border-radius:100%;margin-right:20px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}"],data:{animation:[Object(b.k)("welcome",[Object(b.j)("* => *",[Object(b.f)(":enter",[Object(b.i)({opacity:0,transform:"translateX(-100px)"}),Object(b.h)(100,[Object(b.e)("300ms",Object(b.i)({opacity:1,transform:"none"}))])],{optional:!0})])])]}}),t})()}];let F=(()=>{class t{}return t.\u0275mod=u.Hb({type:t}),t.\u0275inj=u.Gb({factory:function(i){return new(i||t)},imports:[[s.i.forChild(g)],s.i]}),t})();e.d(i,"CentralPageModule",(function(){return v}));let v=(()=>{class t{}return t.\u0275mod=u.Hb({type:t}),t.\u0275inj=u.Gb({factory:function(i){return new(i||t)},imports:[[o.b,n.a,r.U,F]]}),t})()}}]);