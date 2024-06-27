"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 935:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageRoutingModule: () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 6393);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _HomePageRoutingModule;




const routes = [{
  path: '',
  component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
  children: [{
    path: 'product-details/:id',
    loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_pages_product-details_product-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../product-details/product-details.module */ 2702)).then(m => m.ProductDetailsPageModule)
  }]
}];
class HomePageRoutingModule {}
_HomePageRoutingModule = HomePageRoutingModule;
_HomePageRoutingModule.ɵfac = function HomePageRoutingModule_Factory(t) {
  return new (t || _HomePageRoutingModule)();
};
_HomePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _HomePageRoutingModule
});
_HomePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomePageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6998:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageModule: () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 6393);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var _HomePageModule;






class HomePageModule {}
_HomePageModule = HomePageModule;
_HomePageModule.ɵfac = function HomePageModule_Factory(t) {
  return new (t || _HomePageModule)();
};
_HomePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _HomePageModule
});
_HomePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomePageModule, {
    declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage],
    imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule]
  });
})();

/***/ }),

/***/ 6393:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePage: () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 3366);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
var _HomePage;








const _c0 = a0 => ["/tabs/product-details", a0];
function HomePage_ion_toolbar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-toolbar", 7)(1, "ion-grid", 8)(2, "ion-row")(3, "ion-col", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u00A1Se parte de la comunidad!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-col", 9)(6, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Registrarse");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-col", 9)(9, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Iniciar sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
}
function HomePage_ion_toolbar_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-toolbar", 12)(1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u00A1Bienvenido!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 14)(4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.currentUser.nombre_de_usuario);
  }
}
function HomePage_ion_col_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.apiService.getProductImage(product_r2.imagen, product_r2.placeholder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, product_r2.id_producto));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", product_r2.nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r2.precio);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" por ", product_r2.nombre_de_usuario, "");
  }
}
class HomePage {
  constructor(apiService, authService) {
    this.apiService = apiService;
    this.authService = authService;
    this.products = []; // Array para almacenar los productos
    this.currentPage = 1; // Página actual
    this.searchTerm = ''; // Término de búsqueda
    this.isLoggedIn = false;
  }
  ngOnInit() {
    this.checkLoggedIn();
    // this.loadData(null);
    this.authService.isLoggedIn$().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
    this.authService.currentUser$().subscribe(currentUser => {
      this.currentUser = currentUser;
      console.log(this.currentUser);
    });
  }
  // Recargamos los productos al entrar en la página con ionic
  // ionviewWillEnter es un métodoe especial dado por el router de Ionic y se 
  // ejecuta cada vez que se entra en la página según el ciclo de vida mostado en esta página
  // https://ionicframework.com/docs/angular/lifecycle  
  ionViewWillEnter() {
    this.products = [];
    this.currentPage = 1;
    this.loadData(null);
    this.infiniteScroll.disabled = false; // Habilita el scroll infinito nuevamente
  }
  checkLoggedIn() {
    const currentUserString = localStorage.getItem('currentUser');
    if (currentUserString !== null) {
      this.authService.setCurrentUser(JSON.parse(currentUserString));
      this.authService.setLoggedIn(true);
    }
  }
  loadData(event) {
    if (this.searchTerm) {
      // Si hay un término de búsqueda, usa products/search
      this.apiService.searchProducts(this.currentPage, this.searchTerm).subscribe(data => {
        // Al no haber más productos, se deshabilita el scroll infinito
        if (data && data.length > 0) {
          if (event) event.target.disabled = true;
          this.products = this.products.concat(data);
          this.currentPage++;
          event.target.complete(); // Completa el evento del scroll infinito
        } else {
          if (event) {
            event.target.disabled = true;
          }
        }
      }, error => {
        console.error('Error al cargar productos de búsqueda:', error);
        if (event) {
          event.target.complete(); // Completa el evento del scroll infinito
        }
      });
    } else {
      // Si no hay término de búsqueda, carga más productos de products/data
      this.apiService.getProducts(this.currentPage).subscribe(data => {
        if (data && data.length > 0) {
          if (event) {
            event.target.complete(); // Completa el evento del scroll infinito
          }
          this.products = this.products.concat(data);
          this.currentPage++;
        } else {
          if (event) {
            event.target.disabled = true;
            event.target.complete(); // Completa el evento del scroll infinito
          }
        }
      }, error => {
        console.error('Error al cargar más productos:', error);
        if (event) {
          event.target.complete(); // Completa el evento del scroll infinito
        }
      });
    }
  }
  onSearchChange() {
    this.products = [];
    this.currentPage = 1;
    this.infiniteScroll.disabled = false; // Habilita el scroll infinito nuevamente
    this.loadData(null);
  }
}
_HomePage = HomePage;
_HomePage.ɵfac = function HomePage_Factory(t) {
  return new (t || _HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
_HomePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _HomePage,
  selectors: [["app-home"]],
  viewQuery: function HomePage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonInfiniteScroll, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.infiniteScroll = _t.first);
    }
  },
  decls: 10,
  vars: 5,
  consts: [["color", "dark", 4, "ngIf"], ["color", "light", 4, "ngIf"], [3, "fullscreen"], ["placeholder", "Buscar productos", 3, "ngModelChange", "ionChange", "ngModel"], ["size", "6", 4, "ngFor", "ngForOf"], ["threshold", "100px", 3, "ionInfinite"], ["loadingSpinner", "bubbles", "loadingText", "Cargando productos..."], ["color", "dark"], [1, "ion-text-center", "ion-justify-content-center", "ion-align-items-center", "loginToolbar"], ["size", "3"], ["color", "light", "shape", "round", "routerLink", "/register"], ["color", "light", "shape", "round", "routerLink", "/login"], ["color", "light"], [2, "margin-left", "10px"], [2, "font-size", "16px", "margin-left", "10px", "margin-top", "-10px"], ["size", "6"], ["width", "100%", "alt", "Product Image", 3, "src", "routerLink"], [2, "font-size", "16px", "margin-top", "0px"], [2, "margin-top", "-30px"]],
  template: function HomePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomePage_ion_toolbar_1_Template, 11, 0, "ion-toolbar", 0)(2, HomePage_ion_toolbar_2_Template, 6, 1, "ion-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-content", 2)(4, "ion-searchbar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function HomePage_Template_ion_searchbar_ngModelChange_4_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionChange", function HomePage_Template_ion_searchbar_ionChange_4_listener() {
        return ctx.onSearchChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-grid")(6, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, HomePage_ion_col_7_Template, 10, 7, "ion-col", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-infinite-scroll", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionInfinite", function HomePage_Template_ion_infinite_scroll_ionInfinite_8_listener($event) {
        return ctx.loadData($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ion-infinite-scroll-content", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.searchTerm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.products);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonInfiniteScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonInfiniteScrollContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.RouterLinkDelegate, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
  styles: ["ion-button[_ngcontent-%COMP%] {\n  font-size: 12px;\n  white-space: normal;\n  width: 80%;\n  height: 35px;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\nimg[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n\nion-row[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\nion-grid.loginToolbar[_ngcontent-%COMP%] {\n  --ion-grid-columns: 9;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG59XHJcblxyXG5we1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG5pb24tcm93IHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG5pb24tZ3JpZC5sb2dpblRvb2xiYXIge1xyXG4gIC0taW9uLWdyaWQtY29sdW1uczogOTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3366:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiService: () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _home_einhander_Programas_Javascript_Javascript_mercadito_front_end_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);

var _ApiService;








class ApiService {
  constructor(http, toastController, router) {
    this.http = http;
    this.toastController = toastController;
    this.router = router;
    this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api;
  }
  getHeaders() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const token = currentUser && currentUser.token ? currentUser.token : ''; // Obtiene el token de localStorage
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // Incluye el token en el encabezado Authorization
    });
  }
  login(username, password) {
    var _this = this;
    const url = this.api + '/login';
    const body = {
      boleta: username,
      password: password
    };
    return this.http.post(url, body, {
      observe: 'response',
      withCredentials: true
    }) // Observa la respuesta completa
    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response.body), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)( /*#__PURE__*/function () {
      var _ref = (0,_home_einhander_Programas_Javascript_Javascript_mercadito_front_end_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
        console.error('Error en el inicio de sesión:', error);
        // Muestra el mensaje de error en un toast
        const toast = yield _this.toastController.create({
          message: error.error,
          duration: 2000,
          position: 'top'
        });
        toast.present();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => new Error(error)); // Propaga el error para manejarlo en el componente
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()));
  }
  logout() {
    const url = this.api + '/login'; // Endpoint de cierre de sesión
    return this.http.delete(url, {
      headers: this.getHeaders(),
      observe: 'response',
      responseType: 'text',
      withCredentials: true
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      return response.body || '';
    }));
  }
  verifySession() {
    const url = this.api + '/login/verify';
    return this.http.get(url, {
      withCredentials: true
    }) // withCredentials: true para enviar cookies
    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      if (error.status === 401) {
        // Si no está autenticado, redirigir a la página de inicio de sesión
        this.router.navigate(['/login']); // Redirige al login en caso de error 401
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
      } else {
        console.error('Error al verificar la sesión:', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => new Error(error));
      }
    }));
  }
  products() {
    const url = this.api + '/products/data';
    return this.http.get(url);
  }
  getProducts(page) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('page', page.toString());
    const url = this.api + '/products/data';
    return this.http.get(url, {
      params
    });
  }
  searchProducts(page, query) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('page', page.toString()).set('query', query);
    const url = this.api + '/products/search';
    return this.http.get(url, {
      params
    });
  }
  productDetails(id) {
    const url = this.api + '/products/data/' + id;
    return this.http.get(url);
  }
  register(jsonData) {
    const url = this.api + '/verify/registration';
    return this.http.post(url, jsonData, {
      headers: this.getHeaders(),
      observe: 'response',
      responseType: 'text'
    }) // Incluye los encabezados
    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      return response.body || '';
    }));
  }
  createOrder(orderData) {
    const url = this.api + '/pedidos';
    return this.http.post(url, orderData, {
      headers: this.getHeaders(),
      observe: 'response',
      responseType: 'text',
      withCredentials: true
    }) // Incluye los encabezados
    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      return response.body || '';
    }));
  }
  getOrders() {
    const url = this.api + '/pedidos';
    return this.http.get(url, {
      withCredentials: true
    });
  }
  getSales() {
    const url = this.api + '/pedidos/sales';
    return this.http.get(url, {
      withCredentials: true
    });
  }
  getInventory() {
    const url = this.api + '/products/seller/data';
    return this.http.get(url, {
      withCredentials: true
    });
  }
  updateOrderStatus(orderId, productId, newStatus) {
    const url = this.api + `/pedidos/${orderId}`; // URL con el ID del pedido
    const body = {
      estado: newStatus,
      id_producto: productId
    }; // Datos en formato JSON
    return this.http.patch(url, body, {
      headers: this.getHeaders(),
      observe: 'response',
      responseType: 'text',
      withCredentials: true
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      return response.body || '';
    }));
  }
  updateProduct(productId, formData) {
    const url = this.api + `/products/seller/data/${productId}`;
    return this.http.patch(url, formData, {
      observe: 'response',
      responseType: 'text',
      withCredentials: true
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      return response.body || '';
    }));
  }
  createProduct(formData) {
    const url = this.api + `/products/seller`;
    return this.http.post(url, formData, {
      observe: 'response',
      responseType: 'text',
      withCredentials: true
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      return response.body || '';
    }));
  }
  deleteProduct(productId) {
    const url = this.api + `/products/seller/${productId}`;
    return this.http.delete(url, {
      headers: this.getHeaders(),
      observe: 'response',
      responseType: 'text',
      withCredentials: true
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      return response.body || '';
    }));
  }
  updateProductAvailability(productId, availability) {
    const url = this.api + `/products/seller/avail/${productId}`;
    return this.http.patch(url, {
      disponibilidad: availability
    }, {
      headers: this.getHeaders(),
      observe: 'response',
      responseType: 'text',
      withCredentials: true
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      return response.body || '';
    }));
  }
  getProductImage(image, placeholder) {
    const backend_url = this.api + `/images/products/${image}`;
    const generic_url_seed = 'https://picsum.photos/seed';
    const generic_url = 'https://picsum.photos/256';
    if (image && !placeholder) {
      return backend_url;
    } else if (placeholder) {
      return `${generic_url_seed}/${image}/256`;
    } else {
      return generic_url;
    }
  }
}
_ApiService = ApiService;
_ApiService.ɵfac = function ApiService_Factory(t) {
  return new (t || _ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
};
_ApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: _ApiService,
  factory: _ApiService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map