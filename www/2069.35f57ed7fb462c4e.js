"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2069],{2069:(H,u,r)=>{r.r(u),r.d(u,{HomePageModule:()=>v});var s=r(7863),l=r(177),g=r(4341),c=r(8986),o=r(4438),d=r(1626),m=r(4796);const p=e=>["/tabs/product-details",e];function h(e,i){1&e&&(o.j41(0,"ion-toolbar",5)(1,"ion-grid",6)(2,"ion-row")(3,"ion-col",7),o.EFF(4,"\xa1Se parte de la comunidad!"),o.k0s(),o.j41(5,"ion-col",8)(6,"ion-button",9),o.EFF(7,"Registrarse"),o.k0s()(),o.j41(8,"ion-col",10)(9,"ion-button",11),o.EFF(10,"Iniciar sesi\xf3n"),o.k0s()()()()())}function f(e,i){if(1&e&&(o.j41(0,"ion-toolbar",12)(1,"p",13),o.EFF(2,"\xa1Bienvenido!"),o.k0s(),o.j41(3,"p",14)(4,"b"),o.EFF(5),o.k0s()()()),2&e){const n=o.XpG();o.R7$(5),o.JRh(n.currentUser.nombre_de_usuario)}}function P(e,i){if(1&e&&(o.j41(0,"ion-col",15),o.nrm(1,"img",16),o.j41(2,"p",17),o.EFF(3),o.k0s(),o.j41(4,"p",18),o.nrm(5,"br"),o.j41(6,"b"),o.EFF(7),o.k0s(),o.nrm(8,"br"),o.EFF(9),o.k0s()()),2&e){const n=i.$implicit;o.R7$(),o.Y8G("src",null!=n.imagen?n.imagen:"https://via.placeholder.com/150",o.B4B)("routerLink",o.eq3(5,p,n.id_producto)),o.R7$(2),o.SpI(" ",n.nombre," "),o.R7$(4),o.JRh(n.precio),o.R7$(2),o.SpI(" por ",n.nombre_de_usuario,"")}}const F=[{path:"",component:(()=>{var e;class i{constructor(t,a,b){this.http=t,this.router=a,this.authService=b,this.isLoggedIn=!1}ngOnInit(){this.checkLoggedIn(),this.fetchProducts(),this.authService.isLoggedIn$().subscribe(t=>{this.isLoggedIn=t}),this.authService.currentUser$().subscribe(t=>{this.currentUser=t,console.log(this.currentUser)})}checkLoggedIn(){const t=localStorage.getItem("currentUser");null!==t&&(this.authService.setCurrentUser(JSON.parse(t)),this.authService.setLoggedIn(!0))}fetchProducts(){this.http.get("https://mercadito-app.azurewebsites.net/products/data",{}).subscribe(t=>{this.products=t,console.log(this.products)})}}return(e=i).\u0275fac=function(t){return new(t||e)(o.rXU(d.Qq),o.rXU(c.Ix),o.rXU(m.u))},e.\u0275cmp=o.VBU({type:e,selectors:[["app-home"]],decls:8,vars:4,consts:[["color","dark",4,"ngIf"],["color","light",4,"ngIf"],[3,"fullscreen"],["placeholder","Buscar productos"],["size","6",4,"ngFor","ngForOf"],["color","dark"],[1,"ion-text-center"],["size","5"],["size","3"],["size","small","color","light","shape","round","routerLink","/register"],["size","4"],["size","small","color","light","shape","round","routerLink","/login"],["color","light"],[2,"margin-left","10px"],[2,"font-size","16px","margin-left","10px","margin-top","-10px"],["size","6"],["width","100%","alt","Product Image",3,"src","routerLink"],[2,"font-size","16px","margin-top","0px"],[2,"margin-top","-30px"]],template:function(t,a){1&t&&(o.j41(0,"ion-header"),o.DNE(1,h,11,0,"ion-toolbar",0)(2,f,6,1,"ion-toolbar",1),o.k0s(),o.j41(3,"ion-content",2),o.nrm(4,"ion-searchbar",3),o.j41(5,"ion-grid")(6,"ion-row"),o.DNE(7,P,10,7,"ion-col",4),o.k0s()()()),2&t&&(o.R7$(),o.Y8G("ngIf",!a.isLoggedIn),o.R7$(),o.Y8G("ngIf",a.isLoggedIn),o.R7$(),o.Y8G("fullscreen",!0),o.R7$(4),o.Y8G("ngForOf",a.products))},dependencies:[s.Jm,s.hU,s.W9,s.lO,s.eU,s.ln,s.S1,s.ai,s.Gw,s.N7,l.Sq,l.bT,c.Wk],styles:["ion-button[_ngcontent-%COMP%]{font-size:12px;white-space:nowrap;width:90px;height:35px}p[_ngcontent-%COMP%]{font-size:14px}img[_ngcontent-%COMP%]{border-radius:20px}"]}),i})(),children:[{path:"product-details/:id",loadChildren:()=>Promise.all([r.e(2076),r.e(2987)]).then(r.bind(r,2987)).then(e=>e.ProductDetailsPageModule)}]}];let I=(()=>{var e;class i{}return(e=i).\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.$C({type:e}),e.\u0275inj=o.G2t({imports:[c.iI.forChild(F),c.iI]}),i})(),v=(()=>{var e;class i{}return(e=i).\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.$C({type:e}),e.\u0275inj=o.G2t({imports:[s.bv,l.MD,g.YN,I]}),i})()}}]);