function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"I+9i":function(e,t,n){"use strict";n.r(t);var r=n("ofXK"),i=n("3Pt+"),o=n("TEn/"),s=n("tyNb"),c=n("mrSG"),a=n("VOof"),l=n("J07l"),b=n("R0Ic"),u=n("Adf6"),f=n("96DK"),m=n("fXoL"),h=n("7JkF");function p(e,t){1&e&&(m.Mb(0,"div",4),m.Kb(1,"br"),m.Kb(2,"br"),m.Kb(3,"br"),m.Kb(4,"ion-spinner",5),m.Mb(5,"p"),m.lc(6,"Cargando Formularios..."),m.Lb(),m.Lb())}function d(e,t){if(1&e){var n=m.Nb();m.Mb(0,"ion-item",6),m.Ub("click",(function(){m.hc(n);var e=t.$implicit;return m.Wb().clickForm(e)})),m.Mb(1,"div",7),m.lc(2,"F"),m.Lb(),m.Mb(3,"ion-label",8),m.lc(4),m.Lb(),m.Lb()}if(2&e){var r=t.$implicit;m.zb(4),m.nc(" ",r.Name,"")}}var v,g,k=[{path:"",component:(v=function(){function e(t,n,r,i,o,s,c){var a=this;_classCallCheck(this,e),this.apiService=t,this.sqliteService=n,this.myPlatform=r,this.storageService=i,this.router=o,this.menuCtrl=s,this.socket=c,this.dataUser={AccesToken:"90BA1FD909F45177050A18D22AF00BA0"},this.listForms=[],this.draw=!1,this.loadForms=!1,this.plt="",this.myPlatform.$myplatform.subscribe((function(e){a.plt=e}))}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.listForms=[],0===this.listForms.length&&(this.loadForms=!0),e.next=4,this.menuCtrl.enable(!0,"menu");case 4:return e.next=6,this.storageService.getToken();case 6:this.dataUser.AccessToken=e.sent,this.apiService.getForm(this.dataUser,{}).subscribe((function(e){e=JSON.parse(e),t.loadForms=!1,e.forEach((function(e){"True"!==e.isDeleted&&t.listForms.push(e)})),"web"===t.plt&&t.storageService.insertForms(e),console.log(t.listForms)}));case 8:case"end":return e.stop()}}),e,this)})))}},{key:"clickForm",value:function(e){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log(e),e.JSONQuestions=JSON.parse(e.JSONQuestions),t.next=5,this.storageService.insertFormActive(e);case 5:if(t.t0=t.sent,!t.t0){t.next=8;break}this.router.navigate(["/form"]);case 8:t.next=12;break;case 10:t.prev=10,t.t1=t.catch(0);case 12:case"end":return t.stop()}}),t,this,[[0,10]])})))}}]),e}(),v.\u0275fac=function(e){return new(e||v)(m.Jb(l.a),m.Jb(u.a),m.Jb(f.a),m.Jb(a.a),m.Jb(s.g),m.Jb(o.X),m.Jb(h.a))},v.\u0275cmp=m.Db({type:v,selectors:[["app-central"]],decls:8,vars:3,consts:[[1,"ion-no-border"],["color","danger"],["class","center column",4,"ngIf"],["class","ion-margin-bottom",3,"click",4,"ngFor","ngForOf"],[1,"center","column"],["name","crescent"],[1,"ion-margin-bottom",3,"click"],[1,"avatar"],[1,"ion-text-wrap"]],template:function(e,t){1&e&&(m.Mb(0,"ion-header",0),m.Mb(1,"ion-toolbar",1),m.Mb(2,"ion-title"),m.lc(3,"Formularios"),m.Lb(),m.Lb(),m.Lb(),m.Mb(4,"ion-content"),m.kc(5,p,7,0,"div",2),m.Mb(6,"ion-list"),m.kc(7,d,5,1,"ion-item",3),m.Lb(),m.Lb()),2&e&&(m.zb(5),m.cc("ngIf",t.loadForms),m.zb(1),m.cc("@welcome",t.listForms.length),m.zb(1),m.cc("ngForOf",t.listForms))},directives:[o.s,o.T,o.S,o.l,r.i,o.B,r.h,o.P,o.v,o.A],styles:[".avatar[_ngcontent-%COMP%]{width:50px;height:50px;background:#4d662e;color:#fff;font-weight:700;font-size:22px;border-radius:100%;margin-right:20px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}"],data:{animation:[Object(b.k)("welcome",[Object(b.j)("* => *",[Object(b.f)(":enter",[Object(b.i)({opacity:0,transform:"translateX(-100px)"}),Object(b.h)(100,[Object(b.e)("300ms",Object(b.i)({opacity:1,transform:"none"}))])],{optional:!0})])])]}}),v)}],w=((g=function e(){_classCallCheck(this,e)}).\u0275mod=m.Hb({type:g}),g.\u0275inj=m.Gb({factory:function(e){return new(e||g)},imports:[[s.i.forChild(k)],s.i]}),g);n.d(t,"CentralPageModule",(function(){return y}));var F,y=((F=function e(){_classCallCheck(this,e)}).\u0275mod=m.Hb({type:F}),F.\u0275inj=m.Gb({factory:function(e){return new(e||F)},imports:[[r.b,i.a,o.U,w]]}),F)}}]);