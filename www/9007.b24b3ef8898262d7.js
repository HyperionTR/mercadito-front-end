"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9007],{9007:(j,u,i)=>{i.r(u),i.d(u,{CartPageModule:()=>F});var s=i(177),d=i(4341),a=i(7863),l=i(8986),g=i(467),p=i(9243),t=i(4438),m=i(6868);function f(o,n){1&o&&(t.j41(0,"div",8)(1,"p"),t.EFF(2,"Tu carrito esta vacio agrega productos"),t.k0s(),t.j41(3,"ion-button",9),t.EFF(4,"Productos"),t.k0s()())}function P(o,n){if(1&o){const e=t.RV6();t.j41(0,"ion-card",10)(1,"ion-item",11)(2,"ion-thumbnail",12),t.nrm(3,"img",13),t.k0s(),t.j41(4,"ion-icon",14),t.bIt("click",function(){const c=t.eBV(e).index,k=t.XpG();return t.Njj(k.removeProduct(c))}),t.k0s(),t.j41(5,"ion-note",15)(6,"p"),t.EFF(7),t.k0s(),t.j41(8,"b"),t.EFF(9),t.k0s()()()()}if(2&o){const e=n.$implicit;t.R7$(3),t.Y8G("src",e.imagen||"https://via.placeholder.com/150",t.B4B),t.R7$(4),t.JRh(e.nombre),t.R7$(2),t.SpI("$",e.precio,"")}}function h(o,n){if(1&o){const e=t.RV6();t.j41(0,"ion-footer")(1,"ion-toolbar")(2,"ion-row")(3,"ion-col")(4,"p",16),t.EFF(5,"Total"),t.k0s(),t.j41(6,"p",17)(7,"b"),t.EFF(8),t.nI1(9,"number"),t.k0s()()(),t.j41(10,"ion-col",18)(11,"ion-button",19),t.bIt("click",function(){t.eBV(e);const c=t.XpG();return t.Njj(c.openDeliveryPage())}),t.EFF(12,"Continuar "),t.nrm(13,"i",20),t.k0s()()()()()}if(2&o){const e=t.XpG();t.R7$(8),t.SpI("$",t.i5U(9,1,e.total,"1.2-2"),"")}}const C=[{path:"",component:(()=>{var o;class n{constructor(r,c){this.cartService=r,this.modalController=c,this.cartProducts=[],this.total=0}ngOnInit(){this.loadCartProducts(),this.cartSubscription=this.cartService.getCartProducts().subscribe(r=>{this.cartProducts=r,this.calculateTotal()})}loadCartProducts(){const r=localStorage.getItem("cartProducts");r&&(this.cartProducts=JSON.parse(r),this.cartService.setCartProducts(this.cartProducts),this.calculateTotal())}calculateTotal(){this.total=this.cartProducts.reduce((r,c)=>r+c.precio,0)}removeProduct(r){this.cartProducts.splice(r,1),localStorage.setItem("cartProducts",JSON.stringify(this.cartProducts)),this.calculateTotal(),this.cartService.setCartProducts(this.cartProducts)}openDeliveryPage(){var r=this;return(0,g.A)(function*(){return yield(yield r.modalController.create({component:p.W})).present()})()}}return(o=n).\u0275fac=function(r){return new(r||o)(t.rXU(m.m),t.rXU(a.W3))},o.\u0275cmp=t.VBU({type:o,selectors:[["app-cart"]],decls:13,vars:5,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],["routerLink","/tabs/home",1,"fa-solid","fa-arrow-left"],["class","ion-text-center",4,"ngIf"],["class","ion-padding",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"ion-text-center"],["color","dark","shape","round","routerLink","/tabs/home"],[1,"ion-padding"],[1,"no-lines"],["slot","start"],["alt","Product Image",3,"src"],["color","danger","aria-hidden","true","name","trash","slot","end",3,"click"],["color","dark"],[2,"font-size","12px","margin-left","10px"],[2,"font-size","16px","margin-left","10px","margin-top","-10px"],[1,"ion-text-end"],["shape","round","color","dark",2,"margin-top","15px",3,"click"],[1,"fa-solid","fa-angle-right"]],template:function(r,c){1&r&&(t.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t.EFF(3,"Mi carrito"),t.k0s()()(),t.j41(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),t.nrm(8,"i",4),t.EFF(9," Mi carrito"),t.k0s()()(),t.DNE(10,f,5,0,"div",5)(11,P,10,3,"ion-card",6),t.k0s(),t.DNE(12,h,14,4,"ion-footer",7)),2&r&&(t.Y8G("translucent",!0),t.R7$(4),t.Y8G("fullscreen",!0),t.R7$(6),t.Y8G("ngIf",0===c.cartProducts.length),t.R7$(),t.Y8G("ngForOf",c.cartProducts),t.R7$(),t.Y8G("ngIf",c.cartProducts.length>0))},dependencies:[s.Sq,s.bT,a.Jm,a.b_,a.hU,a.W9,a.M0,a.eU,a.iq,a.uz,a.JI,a.ln,a.Zx,a.BC,a.ai,a.N7,l.Wk,s.QX]}),n})()}];let v=(()=>{var o;class n{}return(o=n).\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[l.iI.forChild(C),l.iI]}),n})(),F=(()=>{var o;class n{}return(o=n).\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[s.MD,d.YN,a.bv,v]}),n})()}}]);