"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4757],{4757:(j,g,i)=>{i.r(g),i.d(g,{PerfilPageModule:()=>F});var m=i(177),h=i(4341),o=i(7863),f=i(8160),c=i(467),e=i(4438),v=i(4796),P=i(3366);function U(t,a){1&t&&(e.j41(0,"div",3)(1,"h3"),e.EFF(2," Se parte de la comunidad de... "),e.k0s(),e.j41(3,"h1"),e.EFF(4," \xa1Mercadito ESCOM! "),e.k0s(),e.nrm(5,"br"),e.j41(6,"ion-button",4),e.EFF(7,"Iniciar sesi\xf3n"),e.k0s(),e.j41(8,"ion-button",5),e.EFF(9,"Registrarse"),e.k0s()())}function y(t,a){if(1&t){const s=e.RV6();e.j41(0,"div")(1,"ion-card")(2,"ion-card-header")(3,"ion-card-title"),e.EFF(4),e.k0s(),e.j41(5,"ion-card-subtitle"),e.EFF(6),e.k0s()(),e.j41(7,"ion-card-content")(8,"ion-item"),e.nrm(9,"ion-icon",6),e.j41(10,"ion-label"),e.EFF(11),e.k0s()(),e.j41(12,"ion-item"),e.nrm(13,"ion-icon",7),e.j41(14,"ion-label"),e.EFF(15),e.k0s()(),e.j41(16,"ion-button",8),e.bIt("click",function(){e.eBV(s);const n=e.XpG();return e.Njj(n.updateUserType())}),e.nrm(17,"ion-icon",9),e.EFF(18),e.k0s(),e.nrm(19,"ion-alert"),e.k0s()(),e.j41(20,"ion-button",10),e.bIt("click",function(){e.eBV(s);const n=e.XpG();return e.Njj(n.onLogout())}),e.EFF(21,"Cerrar sesi\xf3n"),e.k0s()()}if(2&t){const s=e.XpG();e.R7$(4),e.JRh(s.currentUser.nombre_de_usuario),e.R7$(2),e.JRh(s.currentUser.boleta),e.R7$(5),e.JRh(s.currentUser.nombre_de_usuario),e.R7$(4),e.JRh(s.currentUser.tipo_de_usuario),e.R7$(3),e.SpI(" Cambiar usuario a ",s.newUserType," ")}}const b=[{path:"",component:(()=>{var t;class a{constructor(r,n,u,d,p){this.router=r,this.authService=n,this.apiService=u,this.toastController=d,this.alertController=p,this.isLoggedIn=!1,this.currentUser=null,this.newUserType=""}ngOnInit(){this.authService.currentUser$(!1).subscribe(r=>{var n;this.currentUser=r,this.isLoggedIn=null!==this.currentUser,this.newUserType="vendedor"===(null===(n=this.currentUser)||void 0===n?void 0:n.tipo_de_usuario)?"comprador":"vendedor",console.log(this.currentUser)})}updateUserType(){var r=this;return(0,c.A)(function*(){const n=yield r.toastController.create({message:"Cambiando tipo de usuario...",duration:2e3,position:"top"});if(!(r.currentUser&&r.currentUser.boleta&&r.currentUser.tipo_de_usuario&&r.currentUser.nombre_de_usuario))return n.message="No se ha iniciado sesi\xf3n",void n.present();yield(yield r.alertController.create({header:"Cambiar tipo de usuario",subHeader:"comprador"===r.newUserType?"\xa1Se eliminaran todos tus productos!":"",message:"comprador"===r.newUserType?`\n        \xbfEst\xe1s seguro que deseas cambiar tu tipo de usuario a ${r.newUserType}?. \n        Al volverte comprador, todos tus productos se eliminaran permanentemente.\n      `:`\n        \xbfEst\xe1s seguro que deseas cambiar tu tipo de usuario a ${r.newUserType}?\n      `,buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary"},{text:"Aceptar",role:"confirm",cssClass:"danger",handler:d=>{r.apiService.updateUserType(r.newUserType,d.password).subscribe(function(){var p=(0,c.A)(function*(l){(yield r.toastController.create({message:l,duration:2e3,position:"top"})).present(),r.onLogout()});return function(l){return p.apply(this,arguments)}}(),function(){var p=(0,c.A)(function*(l){console.error("Error al cambiar tipo de usuario:",l),(yield r.toastController.create({message:"Error al cambiar tipo de usuario: "+l.error,duration:2e3,position:"top"})).present()});return function(l){return p.apply(this,arguments)}}())}}],inputs:[{name:"password",type:"password",placeholder:"Contrase\xf1a",value:""}]})).present()})()}onLogout(){var r=this;return(0,c.A)(function*(){r.apiService.logout().subscribe(function(){var n=(0,c.A)(function*(u){localStorage.removeItem("currentUser"),r.currentUser=null,r.authService.setLoggedIn(!1),r.authService.setCurrentUser(null),r.router.navigate(["/"]),(yield r.toastController.create({message:u,duration:2e3,position:"top"})).present()});return function(u){return n.apply(this,arguments)}}(),function(){var n=(0,c.A)(function*(u){console.error("Error al cerrar sesi\xf3n:",u),(yield r.toastController.create({message:u.error,duration:2e3,position:"top"})).present()});return function(u){return n.apply(this,arguments)}}())})()}}return(t=a).\u0275fac=function(r){return new(r||t)(e.rXU(f.Ix),e.rXU(v.u),e.rXU(P.G),e.rXU(o.K_),e.rXU(o.hG))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-perfil"]],decls:7,vars:3,consts:[[1,"ion-padding",3,"fullscreen"],["class","ion-text-center",4,"ngIf"],[4,"ngIf"],[1,"ion-text-center"],["color","dark","shape","round","routerLink","/login"],["color","dark","shape","round","routerLink","/register"],["name","person-circle-outline","slot","start"],["name","basket","slot","start"],[3,"click"],["name","sync","slot","start"],["color","danger","shape","round","expand","block",3,"click"]],template:function(r,n){1&r&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e.EFF(3,"Perfil"),e.k0s()()(),e.j41(4,"ion-content",0),e.DNE(5,U,10,0,"div",1)(6,y,22,5,"div",2),e.k0s()),2&r&&(e.R7$(4),e.Y8G("fullscreen",!0),e.R7$(),e.Y8G("ngIf",!n.currentUser),e.R7$(),e.Y8G("ngIf",n.currentUser))},dependencies:[m.bT,o.Zy,o.Jm,o.b_,o.I9,o.ME,o.HW,o.tN,o.W9,o.eU,o.iq,o.uz,o.he,o.BC,o.ai,o.N7,f.Wk],styles:["ion-button[_ngcontent-%COMP%]{font-size:12px;white-space:nowrap;width:-moz-fit-content;width:fit-content;height:35px;padding:5px;margin:5px auto;display:block}p[_ngcontent-%COMP%]{font-size:14px}img[_ngcontent-%COMP%]{border-radius:20px}"]}),a})()}];let C=(()=>{var t;class a{}return(t=a).\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[f.iI.forChild(b),f.iI]}),a})(),F=(()=>{var t;class a{}return(t=a).\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[m.MD,h.YN,o.bv,C]}),a})()}}]);