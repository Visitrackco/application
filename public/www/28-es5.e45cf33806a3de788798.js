function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{zuTJ:function(e,t,n){"use strict";n.r(t);var o=n("ofXK"),i=n("TEn/"),r=n("3Pt+"),s=n("tyNb"),c=n("mrSG"),a=n("HDdC"),b=n("J07l"),u=n("lNB8"),l=n("VOof"),h=n("fXoL"),d=n("7JkF");function f(e,t){1&e&&(h.Mb(0,"ion-header"),h.Mb(1,"ion-toolbar",1),h.Mb(2,"ion-title"),h.lc(3,"Crar Nuevo Chat"),h.Lb(),h.Lb(),h.Lb())}function m(e,t){1&e&&(h.Mb(0,"ion-header"),h.Mb(1,"ion-toolbar",1),h.Mb(2,"ion-title"),h.lc(3,"Crar Nuevo Cliente"),h.Lb(),h.Lb(),h.Lb())}function g(e,t){if(1&e){var n=h.Nb();h.Mb(0,"ion-item"),h.Mb(1,"ion-checkbox",6),h.Ub("ionChange",(function(e){return h.hc(n),h.Wb(2).selection(e)})),h.Lb(),h.Mb(2,"ion-label"),h.Mb(3,"strong"),h.lc(4),h.Lb(),h.Kb(5,"br"),h.Mb(6,"p"),h.lc(7,"Agregar al chat"),h.Lb(),h.Lb(),h.Lb()}if(2&e){var o=t.$implicit;h.zb(1),h.dc("value",o.ID),h.zb(3),h.mc(o.Name)}}function p(e,t){if(1&e){var n=h.Nb();h.Mb(0,"ion-item"),h.Mb(1,"ion-checkbox",6),h.Ub("ionChange",(function(e){return h.hc(n),h.Wb(2).selection(e)})),h.Lb(),h.Mb(2,"ion-label"),h.Mb(3,"strong"),h.lc(4),h.Lb(),h.Kb(5,"br"),h.Mb(6,"p"),h.lc(7,"Agregar al chat"),h.Lb(),h.Lb(),h.Lb()}if(2&e){var o=t.$implicit;h.zb(1),h.dc("value",o.ID),h.zb(3),h.mc(o.name)}}function C(e,t){if(1&e){var n=h.Nb();h.Mb(0,"ion-content"),h.Mb(1,"ion-list"),h.Mb(2,"ion-item"),h.Mb(3,"ion-input",2),h.Ub("ngModelChange",(function(e){return h.hc(n),h.Wb().usersSelect.name=e})),h.Lb(),h.Lb(),h.Mb(4,"ion-slides",3),h.Mb(5,"ion-slide"),h.Mb(6,"ion-item-divider",4),h.Mb(7,"h4"),h.lc(8,"Usuario de mi empresa"),h.Lb(),h.Lb(),h.kc(9,g,8,2,"ion-item",5),h.Lb(),h.Mb(10,"ion-slide"),h.Mb(11,"ion-item-divider",4),h.Mb(12,"h4"),h.lc(13,"Clientes de mi Empresa"),h.Lb(),h.Lb(),h.kc(14,p,8,2,"ion-item",5),h.Lb(),h.Lb(),h.Lb(),h.Lb()}if(2&e){var o=h.Wb();h.zb(3),h.cc("ngModel",o.usersSelect.name),h.zb(6),h.cc("ngForOf",o.users),h.zb(5),h.cc("ngForOf",o.customers)}}function v(e,t){if(1&e){var n=h.Nb();h.Mb(0,"ion-content"),h.Mb(1,"ion-list"),h.Mb(2,"ion-item"),h.Mb(3,"ion-input",7),h.Ub("ngModelChange",(function(e){return h.hc(n),h.Wb().customer.name=e})),h.Lb(),h.Lb(),h.Mb(4,"ion-item"),h.Mb(5,"ion-input",8),h.Ub("ngModelChange",(function(e){return h.hc(n),h.Wb().customer.login=e})),h.Lb(),h.Lb(),h.Mb(6,"ion-item"),h.Mb(7,"ion-input",9),h.Ub("ngModelChange",(function(e){return h.hc(n),h.Wb().customer.clave=e})),h.Lb(),h.Lb(),h.Lb(),h.Lb()}if(2&e){var o=h.Wb();h.zb(3),h.cc("ngModel",o.customer.name),h.zb(2),h.cc("ngModel",o.customer.login),h.zb(2),h.cc("ngModel",o.customer.clave)}}function M(e,t){if(1&e){var n=h.Nb();h.Mb(0,"ion-footer"),h.Mb(1,"ion-toolbar",4),h.Mb(2,"ion-title"),h.lc(3,"Crar nuevo chat"),h.Lb(),h.Mb(4,"ion-buttons",10),h.Mb(5,"ion-button",11),h.Ub("click",(function(){return h.hc(n),h.Wb().createdChat()})),h.Kb(6,"ion-icon",12),h.Lb(),h.Lb(),h.Lb(),h.Lb()}}function k(e,t){if(1&e){var n=h.Nb();h.Mb(0,"ion-footer"),h.Mb(1,"ion-toolbar",4),h.Mb(2,"ion-buttons",10),h.Mb(3,"ion-button",11),h.Ub("click",(function(){return h.hc(n),h.Wb().createdCustomer()})),h.Kb(4,"ion-icon",12),h.Lb(),h.Lb(),h.Lb(),h.Lb()}}var L,y=((L=function(){function e(t,n,o,i){_classCallCheck(this,e),this.apiService=t,this.storage=n,this.socket=o,this.modalCtrl=i,this.users=[],this.usersSelect={name:"Mi sala de chat",users:[]},this.customer={name:"",login:"",clave:"",company:"",userID:""},this.customers=[]}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("chat"!==this.type){e.next=6;break}return this.usersSelect={name:"Mi sala de chat",users:[]},e.next=4,this.storage.getLogin();case 4:(t=e.sent)&&(console.log(t[0]),this.apiService.getCustomersCompany(t[0].CompanyID).subscribe((function(e){console.log(e,"DaTAMAN"),"ok"===e.status&&(e.response.length>0&&e.response.forEach((function(e){e.ID=e.login,n.customers.push(e)})),n.customers=e.response)})),this.apiService.getUsersCompany({AccessToken:t[0].AccessToken}).subscribe((function(e){e=JSON.parse(e),console.log(e),n.users=e[0],n.users=n.users.filter((function(e){return e.ID!==t[0].UserID})),n.usersSelect.users.push(t[0].UserID)})));case 6:case"end":return e.stop()}}),e,this)})))}},{key:"selection",value:function(e){e.detail.checked?this.usersSelect.users.push(e.detail.value):this.usersSelect.users=this.usersSelect.users.filter((function(t){return t!==e.detail.value}))}},{key:"createdChat",value:function(){this.socket.emit("chat",this.usersSelect),this.modalCtrl.dismiss({status:"ok"})}},{key:"createdCustomer",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.storage.getLogin();case 2:(t=e.sent)&&(console.log(t[0]),this.customer.company=t[0].CompanyID,this.customer.userID=t[0].UserID,this.apiService.createdCustomer(this.customer).subscribe((function(e){console.log(e," data mas"),n.modalCtrl.dismiss("ok"===e.status?{status:"ok"}:{status:"error",error:e.error})})));case 4:case"end":return e.stop()}}),e,this)})))}}]),e}()).\u0275fac=function(e){return new(e||L)(h.Jb(b.a),h.Jb(l.a),h.Jb(d.a),h.Jb(i.Y))},L.\u0275cmp=h.Db({type:L,selectors:[["app-chat-modal"]],inputs:{type:"type"},decls:6,vars:6,consts:[[4,"ngIf"],["color","danger"],["type","text","placeholder","Nombre de la sala de chat",3,"ngModel","ngModelChange"],[1,"slides"],["color","light"],[4,"ngFor","ngForOf"],["slot","start",3,"value","ionChange"],["type","text","placeholder","Nombre del Cliente",3,"ngModel","ngModelChange"],["type","text","placeholder","Login del Cliente",3,"ngModel","ngModelChange"],["type","password","placeholder","Contrase\xf1a del Cliente",3,"ngModel","ngModelChange"],["slot","end"],[3,"click"],["name","add-outline","slot","icon-only"]],template:function(e,t){1&e&&(h.kc(0,f,4,0,"ion-header",0),h.kc(1,m,4,0,"ion-header",0),h.kc(2,C,15,3,"ion-content",0),h.kc(3,v,8,3,"ion-content",0),h.kc(4,M,7,0,"ion-footer",0),h.kc(5,k,5,0,"ion-footer",0)),2&e&&(h.cc("ngIf","chat"===t.type),h.zb(1),h.cc("ngIf","customer"===t.type),h.zb(1),h.cc("ngIf","chat"===t.type),h.zb(1),h.cc("ngIf","customer"===t.type),h.zb(1),h.cc("ngIf","chat"===t.type),h.zb(1),h.cc("ngIf","customer"===t.type))},directives:[o.i,i.s,i.T,i.S,i.l,i.B,i.v,i.u,i.fb,r.c,r.d,i.O,i.N,i.w,o.h,i.i,i.b,i.A,i.q,i.h,i.g,i.t],styles:["ion-item[_ngcontent-%COMP%]{margin:3px 5px!important}.slides[_ngcontent-%COMP%]{width:100%;min-height:100%;height:auto}.slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{width:100%}"]}),L),w=n("w9U0");function x(e,t){if(1&e&&(h.Mb(0,"ion-title"),h.lc(1),h.Lb()),2&e){var n=h.Wb();h.zb(1),h.oc(" Hablando con ",n.chatUser.FirstName," ",n.chatUser.LastName," ")}}function O(e,t){1&e&&(h.Mb(0,"ion-title"),h.lc(1," Modulo Chat "),h.Lb())}function U(e,t){if(1&e){var n=h.Nb();h.Mb(0,"ion-item",3),h.Ub("click",(function(){h.hc(n);var e=t.$implicit;return h.Wb().saveChat(e.parentChat._id)})),h.Kb(1,"ion-icon",13),h.Mb(2,"ion-label"),h.lc(3),h.Lb(),h.Lb()}if(2&e){var o=t.$implicit;h.zb(3),h.mc(o.parentChat.name)}}function I(e,t){if(1&e){var n=h.Nb();h.Mb(0,"ion-fab-button",14),h.Ub("click",(function(){return h.hc(n),h.Wb().createdCustomer()})),h.Kb(1,"ion-icon",15),h.Lb()}}var z,_,N=((_=function(){function e(t,n,o,i,r,s,c,a){var b=this;_classCallCheck(this,e),this.socket=t,this.toastCtrl=n,this.alertCtrl=o,this.dataCompany=i,this.apiService=r,this.storage=s,this.modalCtrl=c,this.router=a,this.mensajes=[],this.nombreUsuario="",this.chatUser="",this.listChat=[],this.RoleCA=!1,this.newChat().subscribe((function(){b.loadChats()}))}return _createClass(e,[{key:"ionViewDidEnter",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadChats();case 1:case"end":return e.stop()}}),e,this)})))}},{key:"loadChats",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.dataCompany.getVista("2"),e.next=3,this.storage.getLogin();case 3:(t=e.sent)&&(this.RoleCA="CA"===t[0].ROLE,"exter"===t[0].type?this.apiService.getChats(t[0].login).subscribe((function(e){n.listChat=e.response})):"inter"===t[0].type&&this.apiService.getChats(t[0].UserID).subscribe((function(e){n.listChat=e.response})));case 5:case"end":return e.stop()}}),e,this)})))}},{key:"createdChat",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,o,i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalCtrl.create({component:y,componentProps:{type:"chat"}});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.next=7,t.onWillDismiss();case 7:if(!(n=e.sent)){e.next=14;break}return console.log("Michat",n),e.next=12,this.storage.getLogin();case 12:(o=e.sent)&&setTimeout((function(){i.apiService.getChats(o[0].UserID).subscribe((function(e){i.listChat=e.response,console.log(e," data"),console.log(e.response)}))}),1e3);case 14:case"end":return e.stop()}}),e,this)})))}},{key:"createdCustomer",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalCtrl.create({component:y,componentProps:{type:"customer"}});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.next=7,t.onWillDismiss();case 7:(n=e.sent)&&n.data&&("ok"===n.data.status?this.toastCtrl.newCreatedToast("Cliente creado con \xe9xito",!0):"error"===n.data.status&&this.toastCtrl.newCreatedToast("No se pudo crear el cliente",!0));case 9:case"end":return e.stop()}}),e,this)})))}},{key:"saveChat",value:function(e){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.storage.insertChat(e);case 2:if(t.t0=t.sent,!t.t0){t.next=5;break}this.router.navigate(["/messages"]);case 5:case"end":return t.stop()}}),t,this)})))}},{key:"newChat",value:function(){var e=this;return new a.a((function(t){e.socket.on("newchat",(function(e){t.next(e)}))}))}}]),e}()).\u0275fac=function(e){return new(e||_)(h.Jb(d.a),h.Jb(w.a),h.Jb(i.a),h.Jb(u.a),h.Jb(b.a),h.Jb(l.a),h.Jb(i.Y),h.Jb(s.g))},_.\u0275cmp=h.Db({type:_,selectors:[["app-home"]],decls:17,vars:4,consts:[["color","danger"],[4,"ngIf"],["slot","end"],[3,"click"],["name","refresh-outline","slot","icon-only"],["color","light"],[3,"click",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],["name","add"],["side","top"],["color","light",3,"click"],["name","chatbubble-outline"],["color","secondary",3,"click",4,"ngIf"],["name","chatbubble-outline","slot","start"],["color","secondary",3,"click"],["name","person-add-outline"]],template:function(e,t){1&e&&(h.Mb(0,"ion-header"),h.Mb(1,"ion-toolbar",0),h.kc(2,x,2,2,"ion-title",1),h.kc(3,O,2,0,"ion-title",1),h.Mb(4,"ion-buttons",2),h.Mb(5,"ion-button",3),h.Ub("click",(function(){return t.loadChats()})),h.Kb(6,"ion-icon",4),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Mb(7,"ion-content",5),h.Mb(8,"ion-list"),h.kc(9,U,4,1,"ion-item",6),h.Lb(),h.Mb(10,"ion-fab",7),h.Mb(11,"ion-fab-button",0),h.Kb(12,"ion-icon",8),h.Lb(),h.Mb(13,"ion-fab-list",9),h.Mb(14,"ion-fab-button",10),h.Ub("click",(function(){return t.createdChat()})),h.Kb(15,"ion-icon",11),h.Lb(),h.kc(16,I,2,0,"ion-fab-button",12),h.Lb(),h.Lb(),h.Lb()),2&e&&(h.zb(2),h.cc("ngIf",""!==t.chatUser),h.zb(1),h.cc("ngIf",""==t.chatUser),h.zb(6),h.cc("ngForOf",t.listChat),h.zb(7),h.cc("ngIf",t.RoleCA))},directives:[i.s,i.T,o.i,i.h,i.g,i.t,i.l,i.B,o.h,i.n,i.o,i.p,i.S,i.v,i.A],styles:[".verde[_ngcontent-%COMP%]{background:#fbd4d4!important}.message[_ngcontent-%COMP%]{margin-top:10px;background:#e9e9e9;border-radius:20px}ion-item[_ngcontent-%COMP%]:hover{cursor:pointer;--background:var(--ion-color-light)}"]}),_),S=((z=function e(){_classCallCheck(this,e)}).\u0275mod=h.Hb({type:z}),z.\u0275inj=h.Gb({factory:function(e){return new(e||z)},imports:[[o.b,r.a,i.U]]}),z);n.d(t,"HomePageModule",(function(){return J}));var D,J=((D=function e(){_classCallCheck(this,e)}).\u0275mod=h.Hb({type:D}),D.\u0275inj=h.Gb({factory:function(e){return new(e||D)},imports:[[o.b,r.a,i.U,s.i.forChild([{path:"",component:N}]),S]]}),D)}}]);