"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_product-details_product-details_module_ts"],{

/***/ 4383:
/*!*************************************************************************!*\
  !*** ./src/app/pages/product-details/product-details-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductDetailsPageRoutingModule: () => (/* binding */ ProductDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _product_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-details.page */ 6897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _ProductDetailsPageRoutingModule;




const routes = [{
  path: '',
  component: _product_details_page__WEBPACK_IMPORTED_MODULE_0__.ProductDetailsPage
}];
class ProductDetailsPageRoutingModule {}
_ProductDetailsPageRoutingModule = ProductDetailsPageRoutingModule;
_ProductDetailsPageRoutingModule.ɵfac = function ProductDetailsPageRoutingModule_Factory(t) {
  return new (t || _ProductDetailsPageRoutingModule)();
};
_ProductDetailsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _ProductDetailsPageRoutingModule
});
_ProductDetailsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProductDetailsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 2702:
/*!*****************************************************************!*\
  !*** ./src/app/pages/product-details/product-details.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductDetailsPageModule: () => (/* binding */ ProductDetailsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _product_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-details-routing.module */ 4383);
/* harmony import */ var _product_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-details.page */ 6897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var _ProductDetailsPageModule;






class ProductDetailsPageModule {}
_ProductDetailsPageModule = ProductDetailsPageModule;
_ProductDetailsPageModule.ɵfac = function ProductDetailsPageModule_Factory(t) {
  return new (t || _ProductDetailsPageModule)();
};
_ProductDetailsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _ProductDetailsPageModule
});
_ProductDetailsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _product_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductDetailsPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProductDetailsPageModule, {
    declarations: [_product_details_page__WEBPACK_IMPORTED_MODULE_1__.ProductDetailsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _product_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductDetailsPageRoutingModule]
  });
})();

/***/ }),

/***/ 6897:
/*!***************************************************************!*\
  !*** ./src/app/pages/product-details/product-details.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductDetailsPage: () => (/* binding */ ProductDetailsPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 3366);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cart.service */ 6868);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
var _ProductDetailsPage;






function ProductDetailsPage_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 9)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.productDetails.imagen ? "https://mercadito-app.azurewebsites.net/images/products/" + ctx_r0.productDetails.imagen : "https://via.placeholder.com/150", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.productDetails.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.productDetails.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Vendedor: ", ctx_r0.productDetails.nombre_de_usuario, "");
  }
}
function ProductDetailsPage_ion_row_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-row")(1, "ion-col")(2, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Precio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 13)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-col", 14)(9, "ion-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductDetailsPage_ion_row_13_Template_ion_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.addProductCart(ctx_r0.productDetails));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Agregar al carrito");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 1, ctx_r0.productDetails.precio, "1.2-2"), "");
  }
}
class ProductDetailsPage {
  constructor(activatedRoute, apiService, cartService, router) {
    this.activatedRoute = activatedRoute;
    this.apiService = apiService;
    this.cartService = cartService;
    this.router = router;
    this.productId = '';
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.productId = params['id'];
      this.loadProductDetails(this.productId);
    });
  }
  loadProductDetails(productId) {
    this.apiService.productDetails(productId).subscribe(response => {
      if (response) {
        // Convertir el precio a número
        response.precio = parseFloat(response.precio);
        this.productDetails = response;
        console.log(this.productDetails);
      } else {
        console.error('API response was not successful');
      }
    }, error => {
      console.error('Error fetching product details', error);
    });
  }
  addProductCart(product) {
    // Verificar si el producto tiene un id_producto
    if (!product.id_producto) {
      console.error('Product does not have an id_producto:', product);
      return;
    }
    console.log('Adding product to cart:', product);
    let cartProducts = localStorage.getItem('cartProducts');
    let products = cartProducts ? JSON.parse(cartProducts) : [];
    // Verificar si el producto ya existe en el carrito
    const productIndex = products.findIndex(p => p.id_producto === product.id_producto);
    if (productIndex === -1) {
      products.push({
        ...product,
        quantity: 1
      });
    } else {
      products[productIndex].quantity += 1; // Si ya existe, incrementar la cantidad
    }
    localStorage.setItem('cartProducts', JSON.stringify(products));
    this.cartService.setCartProducts(products);
    this.cartService.setCartStatus(true);
    console.log('Updated cart products:', products);
    // Navegar al carrito
    this.router.navigate(['/tabs/cart']);
  }
}
_ProductDetailsPage = ProductDetailsPage;
_ProductDetailsPage.ɵfac = function ProductDetailsPage_Factory(t) {
  return new (t || _ProductDetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
_ProductDetailsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _ProductDetailsPage,
  selectors: [["app-product-details"]],
  decls: 14,
  vars: 4,
  consts: [[3, "translucent"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], ["routerLink", "/", 1, "fa-solid", "fa-arrow-left"], ["class", "ion-padding", 4, "ngIf"], [4, "ngIf"], [1, "ion-padding"], ["width", "100%", "alt", "Product Image", 3, "src"], [2, "font-size", "18px", "margin-top", "10px"], [2, "font-size", "16px", "margin-top", "-30px"], [2, "font-size", "12px", "margin-top", "-10px"], [2, "font-size", "12px", "margin-left", "10px"], [2, "font-size", "16px", "margin-left", "10px", "margin-top", "-10px"], [1, "ion-text-end"], ["shape", "round", "color", "dark", 2, "margin-top", "15px", 3, "click"]],
  template: function ProductDetailsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Producto");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-content", 1)(5, "ion-header", 2)(6, "ion-toolbar")(7, "ion-title", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Regresar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ProductDetailsPage_div_10_Template, 14, 4, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-footer")(12, "ion-toolbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ProductDetailsPage_ion_row_13_Template, 11, 4, "ion-row", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.productDetails);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.productDetails);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe],
  styles: ["img[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6868:
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartService: () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _CartService;


class CartService {
  constructor() {
    this.cartStatus = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.cartProducts = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
  }
  // Método para obtener el observable del estado de inicio de sesión
  cartStatus$() {
    return this.cartStatus.asObservable();
  }
  // Método para obtener el observable del usuario actual
  cartProducts$() {
    return this.cartProducts.asObservable();
  }
  // Método para establecer el estado de inicio de sesión
  setCartStatus(value) {
    this.cartStatus.next(value);
  }
  setCartProducts(products) {
    this.cartProducts.next(products);
  }
  getCartProducts() {
    return this.cartProducts.asObservable();
  }
  clearCart() {
    this.cartProducts.next([]);
    localStorage.removeItem('cartProducts');
  }
}
_CartService = CartService;
_CartService.ɵfac = function CartService_Factory(t) {
  return new (t || _CartService)();
};
_CartService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _CartService,
  factory: _CartService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_product-details_product-details_module_ts.js.map