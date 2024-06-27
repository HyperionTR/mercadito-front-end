"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_delivery_delivery_module_ts"],{

/***/ 1929:
/*!***********************************************************!*\
  !*** ./src/app/pages/delivery/delivery-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeliveryPageRoutingModule: () => (/* binding */ DeliveryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _delivery_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delivery.page */ 9243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _DeliveryPageRoutingModule;




const routes = [{
  path: '',
  component: _delivery_page__WEBPACK_IMPORTED_MODULE_0__.DeliveryPage
}];
class DeliveryPageRoutingModule {}
_DeliveryPageRoutingModule = DeliveryPageRoutingModule;
_DeliveryPageRoutingModule.ɵfac = function DeliveryPageRoutingModule_Factory(t) {
  return new (t || _DeliveryPageRoutingModule)();
};
_DeliveryPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _DeliveryPageRoutingModule
});
_DeliveryPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DeliveryPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 7392:
/*!***************************************************!*\
  !*** ./src/app/pages/delivery/delivery.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeliveryPageModule: () => (/* binding */ DeliveryPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _delivery_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delivery-routing.module */ 1929);
/* harmony import */ var _delivery_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delivery.page */ 9243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var _DeliveryPageModule;






class DeliveryPageModule {}
_DeliveryPageModule = DeliveryPageModule;
_DeliveryPageModule.ɵfac = function DeliveryPageModule_Factory(t) {
  return new (t || _DeliveryPageModule)();
};
_DeliveryPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _DeliveryPageModule
});
_DeliveryPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _delivery_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeliveryPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DeliveryPageModule, {
    declarations: [_delivery_page__WEBPACK_IMPORTED_MODULE_1__.DeliveryPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _delivery_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeliveryPageRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_delivery_delivery_module_ts.js.map