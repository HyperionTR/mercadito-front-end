"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2987],{2987:(x,p,c)=>{c.r(p),c.d(p,{ProductDetailsPageModule:()=>F});var u=c(177),g=c(4341),a=c(7863),d=c(8986),t=c(4438),P=c(3366),f=c(6868);function m(o,s){if(1&o&&(t.j41(0,"div",7),t.nrm(1,"img",8),t.j41(2,"p",9)(3,"b"),t.EFF(4),t.k0s()(),t.j41(5,"p",10),t.nrm(6,"br"),t.j41(7,"b"),t.EFF(8,"Descripci\xf3n"),t.k0s(),t.nrm(9,"br"),t.k0s(),t.j41(10,"p",11),t.EFF(11),t.k0s(),t.j41(12,"p",11),t.EFF(13),t.k0s(),t.j41(14,"p",11),t.EFF(15),t.k0s()()),2&o){const r=t.XpG();t.R7$(),t.Y8G("src",r.productDetails.imagen?r.productDetails.imagen:"https://via.placeholder.com/150",t.B4B),t.R7$(3),t.JRh(r.productDetails.nombre),t.R7$(7),t.JRh(r.productDetails.descripcion),t.R7$(2),t.SpI("Disponibilidad: ",r.productDetails.disponibilidad,""),t.R7$(2),t.SpI("Vendedor: ",r.productDetails.nombre_de_usuario,"")}}function D(o,s){if(1&o){const r=t.RV6();t.j41(0,"ion-row")(1,"ion-col")(2,"p",12),t.EFF(3,"Precio"),t.k0s(),t.j41(4,"p",13)(5,"b"),t.EFF(6),t.nI1(7,"number"),t.k0s()()(),t.j41(8,"ion-col",14)(9,"ion-button",15),t.bIt("click",function(){t.eBV(r);const i=t.XpG();return t.Njj(i.addProductCart(i.productDetails))}),t.EFF(10,"Agregar al carrito"),t.k0s()()()}if(2&o){const r=t.XpG();t.R7$(6),t.SpI("$",t.i5U(7,1,r.productDetails.precio,"1.2-2"),"")}}const h=[{path:"",component:(()=>{var o;class s{constructor(e,i,n,l){this.activatedRoute=e,this.apiService=i,this.cartService=n,this.router=l,this.productId=""}ngOnInit(){this.activatedRoute.params.subscribe(e=>{this.productId=e.id,this.loadProductDetails(this.productId)})}loadProductDetails(e){this.apiService.productDetails(e).subscribe(i=>{i?(i.precio=parseFloat(i.precio),this.productDetails=i,console.log(this.productDetails)):console.error("API response was not successful")},i=>{console.error("Error fetching product details",i)})}addProductCart(e){if(!e.id_producto)return void console.error("Product does not have an id_producto:",e);console.log("Adding product to cart:",e);let i=localStorage.getItem("cartProducts"),n=i?JSON.parse(i):[];const l=n.findIndex(I=>I.id_producto===e.id_producto);-1===l?n.push({...e,quantity:1}):n[l].quantity+=1,localStorage.setItem("cartProducts",JSON.stringify(n)),this.cartService.setCartProducts(n),this.cartService.setCartStatus(!0),console.log("Updated cart products:",n),this.router.navigate(["/tabs/cart"])}}return(o=s).\u0275fac=function(e){return new(e||o)(t.rXU(d.nX),t.rXU(P.G),t.rXU(f.m),t.rXU(d.Ix))},o.\u0275cmp=t.VBU({type:o,selectors:[["app-product-details"]],decls:14,vars:4,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],["routerLink","/",1,"fa-solid","fa-arrow-left"],["class","ion-padding",4,"ngIf"],[4,"ngIf"],[1,"ion-padding"],["width","100%","alt","Product Image",3,"src"],[2,"font-size","18px","margin-top","10px"],[2,"font-size","16px","margin-top","-30px"],[2,"font-size","12px","margin-top","-10px"],[2,"font-size","12px","margin-left","10px"],[2,"font-size","16px","margin-left","10px","margin-top","-10px"],[1,"ion-text-end"],["shape","round","color","dark",2,"margin-top","15px",3,"click"]],template:function(e,i){1&e&&(t.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t.EFF(3,"Producto"),t.k0s()()(),t.j41(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),t.nrm(8,"i",4),t.EFF(9," Regresar"),t.k0s()()(),t.DNE(10,m,16,5,"div",5),t.k0s(),t.j41(11,"ion-footer")(12,"ion-toolbar"),t.DNE(13,D,11,4,"ion-row",6),t.k0s()()),2&e&&(t.Y8G("translucent",!0),t.R7$(4),t.Y8G("fullscreen",!0),t.R7$(6),t.Y8G("ngIf",i.productDetails),t.R7$(3),t.Y8G("ngIf",i.productDetails))},dependencies:[u.bT,a.Jm,a.hU,a.W9,a.M0,a.eU,a.ln,a.BC,a.ai,a.N7,d.Wk,u.QX],styles:["img[_ngcontent-%COMP%]{border-radius:20px}"]}),s})()}];let v=(()=>{var o;class s{}return(o=s).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[d.iI.forChild(h),d.iI]}),s})(),F=(()=>{var o;class s{}return(o=s).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[u.MD,g.YN,a.bv,v]}),s})()}}]);