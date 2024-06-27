"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_tabs_module_ts"],{

/***/ 2229:
/*!***************************************************!*\
  !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPageRoutingModule: () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 9319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _TabsPageRoutingModule;




const routes = [{
  path: 'tabs',
  component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
  children: [{
    path: 'home',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../home/home.module */ 6998)).then(m => m.HomePageModule)
  }, {
    path: 'product-details/:id',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_product-details_product-details_module_ts"), __webpack_require__.e("src_app_services_api_service_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../product-details/product-details.module */ 2702)).then(m => m.ProductDetailsPageModule)
  }, {
    path: 'cart',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_delivery_delivery_page_ts"), __webpack_require__.e("src_app_pages_cart_cart_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../cart/cart.module */ 6176)).then(m => m.CartPageModule)
  }, {
    path: 'notifications',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_notifications_notifications_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../notifications/notifications.module */ 5746)).then(m => m.NotificationsPageModule)
  }, {
    path: 'perfil',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_perfil_perfil_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../perfil/perfil.module */ 6732)).then(m => m.PerfilPageModule)
  }, {
    path: 'account',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_account_account_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../account/account.module */ 8422)).then(m => m.AccountPageModule)
  }, {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }]
}, {
  path: '',
  redirectTo: '/tabs/home',
  pathMatch: 'full'
}];
class TabsPageRoutingModule {}
_TabsPageRoutingModule = TabsPageRoutingModule;
_TabsPageRoutingModule.ɵfac = function TabsPageRoutingModule_Factory(t) {
  return new (t || _TabsPageRoutingModule)();
};
_TabsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _TabsPageRoutingModule
});
_TabsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TabsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 9660:
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPageModule: () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 2229);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 9319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var _TabsPageModule;






class TabsPageModule {}
_TabsPageModule = TabsPageModule;
_TabsPageModule.ɵfac = function TabsPageModule_Factory(t) {
  return new (t || _TabsPageModule)();
};
_TabsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _TabsPageModule
});
_TabsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TabsPageModule, {
    declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage],
    imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule]
  });
})();

/***/ }),

/***/ 9319:
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPage: () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 1507);
var _TabsPage;


class TabsPage {
  constructor() {}
}
_TabsPage = TabsPage;
_TabsPage.ɵfac = function TabsPage_Factory(t) {
  return new (t || _TabsPage)();
};
_TabsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _TabsPage,
  selectors: [["app-tabs"]],
  decls: 14,
  vars: 0,
  consts: [["color", "light", "slot", "bottom"], ["tab", "home"], [1, "fa-solid", "fa-house-blank"], [1, "fa-regular", "fa-house-blank"], ["tab", "cart"], [1, "fa-solid", "fa-cart-shopping"], [1, "fa-regular", "fa-cart-shopping"], ["tab", "perfil"], [1, "fa-solid", "fa-user"], [1, "fa-regular", "fa-user"], ["tab", "account"], [1, "fa-solid", "fa-grid-2"], [1, "fa-regular", "fa-grid-2"]],
  template: function TabsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-tabs")(1, "ion-tab-bar", 0)(2, "ion-tab-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2)(4, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-tab-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5)(7, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-tab-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8)(10, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-tab-button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 11)(13, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTabBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTabs],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_tabs_module_ts.js.map