(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{EhdV:function(e,s,t){"use strict";t.r(s);var i=t("ofXK"),n=t("3Pt+"),o=t("TEn/"),a=t("tyNb"),c=t("mrSG"),r=t("VOof"),b=t("J07l"),l=t("HDdC"),g=t("fXoL"),d=t("7JkF");function h(e,s){if(1&e&&(g.Mb(0,"ion-col",9),g.Mb(1,"span"),g.lc(2),g.Lb(),g.Kb(3,"br"),g.Mb(4,"span"),g.lc(5),g.Lb(),g.Mb(6,"span"),g.lc(7,"Host"),g.Lb(),g.Lb()),2&e){const e=g.Wb().$implicit;g.zb(2),g.mc(e.message),g.zb(3),g.mc(e.dateMessage)}}function u(e,s){if(1&e&&(g.Mb(0,"ion-col",10),g.Mb(1,"span"),g.lc(2),g.Lb(),g.Kb(3,"br"),g.Mb(4,"span"),g.lc(5),g.Lb(),g.Lb()),2&e){const e=g.Wb().$implicit;g.zb(2),g.mc(e.message),g.zb(3),g.mc(e.dateMessage)}}function p(e,s){if(1&e&&(g.Mb(0,"ion-row"),g.kc(1,h,8,2,"ion-col",7),g.kc(2,u,6,2,"ion-col",8),g.Lb()),2&e){const e=s.$implicit,t=g.Wb();g.zb(1),g.cc("ngIf",e.idUser==t.idUser),g.zb(1),g.cc("ngIf",e.idUser!=t.idUser)}}const M=[{path:"",component:(()=>{class e{constructor(e,s,t){this.socket=e,this.storage=s,this.apiService=t,this.idUser="",this.listMessages=[],this.message="",this.idChat="",this.recepMessage().subscribe(e=>{console.log(e," Mi data"),new Audio("/assets/message.mp3").play(),this.listMessages.push(e.response)})}ngOnInit(){}ionViewWillEnter(){return Object(c.a)(this,void 0,void 0,(function*(){this.loadMessages();const e=yield this.storage.getLogin();e&&(this.idUser="exter"===e[0].type?e[0].login:e[0].UserID)}))}loadMessages(){return Object(c.a)(this,void 0,void 0,(function*(){const e=yield this.storage.getChat();e&&(this.idChat=e,this.socket.emit("entryChat",{idChat:e}),this.apiService.getOneChat(e).subscribe(e=>{"ok"===e.status&&(this.listMessages=e.response)}))}))}sendMessages(){return Object(c.a)(this,void 0,void 0,(function*(){this.socket.emit("sendMessage",{ID:this.idUser,parentChat:this.idChat,message:this.message}),this.listMessages.push({dateMessage:(new Date).getDate(),message:this.message,idUser:this.idUser}),this.message=""}))}recepMessage(){return new l.a(e=>{this.socket.on("recepMessage",s=>{e.next(s)})})}}return e.\u0275fac=function(s){return new(s||e)(g.Jb(d.a),g.Jb(r.a),g.Jb(b.a))},e.\u0275cmp=g.Db({type:e,selectors:[["app-messages"]],decls:14,vars:2,consts:[["color","danger"],["slot","end"],["name","ellipsis-vertical-outline","slot","icon-only"],[4,"ngFor","ngForOf"],["placeholder","Escribe tu mensaje",3,"ngModel","ngModelChange"],["shape","round","mode","ios","fill","clear",3,"click"],["name","send-outline","slot","icon-only"],["offset","3","size","9","class","message verde",4,"ngIf"],["size","9","class","message",4,"ngIf"],["offset","3","size","9",1,"message","verde"],["size","9",1,"message"]],template:function(e,s){1&e&&(g.Mb(0,"ion-header"),g.Mb(1,"ion-toolbar",0),g.Mb(2,"ion-title"),g.lc(3,"Mensajeria"),g.Lb(),g.Mb(4,"ion-buttons",1),g.Mb(5,"ion-button"),g.Kb(6,"ion-icon",2),g.Lb(),g.Lb(),g.Lb(),g.Lb(),g.Mb(7,"ion-content"),g.Mb(8,"ion-grid"),g.kc(9,p,3,2,"ion-row",3),g.Lb(),g.Lb(),g.Mb(10,"ion-footer"),g.Mb(11,"ion-textarea",4),g.Ub("ngModelChange",(function(e){return s.message=e})),g.Lb(),g.Mb(12,"ion-button",5),g.Ub("click",(function(){return s.sendMessages()})),g.Kb(13,"ion-icon",6),g.Lb(),g.Lb()),2&e&&(g.zb(9),g.cc("ngForOf",s.listMessages),g.zb(2),g.cc("ngModel",s.message))},directives:[o.s,o.T,o.S,o.h,o.g,o.t,o.l,o.r,i.h,o.q,o.R,o.fb,n.c,n.d,o.J,i.i,o.k],styles:[".verde[_ngcontent-%COMP%]{background:#fbd4d4!important}.message[_ngcontent-%COMP%]{margin-top:10px;background:#e9e9e9;border-radius:20px}ion-footer[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}"]}),e})()}];let f=(()=>{class e{}return e.\u0275mod=g.Hb({type:e}),e.\u0275inj=g.Gb({factory:function(s){return new(s||e)},imports:[[a.i.forChild(M)],a.i]}),e})();t.d(s,"MessagesPageModule",(function(){return m}));let m=(()=>{class e{}return e.\u0275mod=g.Hb({type:e}),e.\u0275inj=g.Gb({factory:function(s){return new(s||e)},imports:[[i.b,n.a,o.U,f]]}),e})()}}]);