"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_account_account_module_ts"],{

/***/ 4561:
/*!***************************************************************!*\
  !*** ./src/app/components/order-card/order-card.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderCardComponent: () => (/* binding */ OrderCardComponent)
/* harmony export */ });
/* harmony import */ var _home_einhander_Programas_Javascript_Javascript_mercadito_front_end_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var src_app_pages_account_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pages/account/edit-product/edit-product.component */ 3993);
/* harmony import */ var src_app_pages_account_account_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/account/account.page */ 2585);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 4796);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ 3366);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);

var _OrderCardComponent;








function OrderCardComponent_ion_card_title_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-card-title")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.order.lugar_entrega);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](", ", ctx_r0.order.fecha_pedido.slice(0, 10), " ");
  }
}
function OrderCardComponent_ion_card_title_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.producto.nombre, " ");
  }
}
function OrderCardComponent_ion_card_subtitle_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.order.id_pedido, " ");
  }
}
function OrderCardComponent_ion_card_subtitle_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-card-subtitle")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", ctx_r0.producto.precio, "");
  }
}
function OrderCardComponent_ion_card_content_7_ion_list_1_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const detail_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Vendedor: ", detail_r2.vendedor, "");
  }
}
function OrderCardComponent_ion_card_content_7_ion_list_1_ion_select_10_ion_select_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const status_r4 = ctx.$implicit;
    const detail_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", status_r4)("disabled", !ctx_r0.isStatusAllowed(detail_r2.estado, status_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", status_r4, " ");
  }
}
function OrderCardComponent_ion_card_content_7_ion_list_1_ion_select_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function OrderCardComponent_ion_card_content_7_ion_list_1_ion_select_10_Template_ion_select_ionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const detail_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.updateOrderStatus(detail_r2, $event.detail.value));
    })("click", function OrderCardComponent_ion_card_content_7_ion_list_1_ion_select_10_Template_ion_select_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, OrderCardComponent_ion_card_content_7_ion_list_1_ion_select_10_ion_select_option_1_Template, 2, 3, "ion-select-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const detail_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", detail_r2.estado);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.getAvailableStatuses(detail_r2.estado));
  }
}
function OrderCardComponent_ion_card_content_7_ion_list_1_ion_badge_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-badge", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const detail_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("color", ctx_r0.getStatusColor(detail_r2.estado));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", detail_r2.estado, " ");
  }
}
function OrderCardComponent_ion_card_content_7_ion_list_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-list", 4)(1, "ion-item")(2, "ion-thumbnail", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-label")(5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, OrderCardComponent_ion_card_content_7_ion_list_1_p_9_Template, 2, 1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, OrderCardComponent_ion_card_content_7_ion_list_1_ion_select_10_Template, 2, 2, "ion-select", 7)(11, OrderCardComponent_ion_card_content_7_ion_list_1_ion_badge_11_Template, 2, 2, "ion-badge", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const detail_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", detail_r2.imagen ? "https://mercadito-app.azurewebsites.net/images/products/" + detail_r2.imagen : "https://via.placeholder.com/150", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](detail_r2.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", detail_r2.precio, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", detail_r2.vendedor !== (ctx_r0.currentUser == null ? null : ctx_r0.currentUser.nombre_de_usuario));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.isSellerView);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.isSellerView);
  }
}
function OrderCardComponent_ion_card_content_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, OrderCardComponent_ion_card_content_7_ion_list_1_Template, 12, 6, "ion-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.order.detalles);
  }
}
function OrderCardComponent_ion_card_content_8_ion_thumbnail_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-thumbnail", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r0.producto.imagen ? "https://mercadito-app.azurewebsites.net/images/products/" + ctx_r0.producto.imagen : "https://via.placeholder.com/150", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function OrderCardComponent_ion_card_content_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-card-content")(1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, OrderCardComponent_ion_card_content_8_ion_thumbnail_2_Template, 2, 1, "ion-thumbnail", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OrderCardComponent_ion_card_content_8_Template_ion_button_click_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r0.openEditProductModal(ctx_r0.producto);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OrderCardComponent_ion_card_content_8_Template_ion_button_click_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r0.deleteProduct();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OrderCardComponent_ion_card_content_8_Template_ion_button_click_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r0.toggleAvailability();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Cambiar disponibilidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.isProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.producto.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("color", ctx_r0.producto.disponibilidad ? "success" : "danger");
  }
}
class OrderCardComponent {
  constructor(authService, apiService, toastController, router, alertController, modalController) {
    this.authService = authService;
    this.apiService = apiService;
    this.toastController = toastController;
    this.router = router;
    this.alertController = alertController;
    this.modalController = modalController;
    this.order = {
      id_pedido: '',
      lugar_entrega: '',
      fecha_pedido: '',
      detalles: []
    };
    this.isSellerView = false; // Indica si es la vista del vendedor
    this.isProduct = false; // Indica si es un producto
    this.isInventory = false; // Indica si es la vista de inventario 
    this.producto = {
      nombre_de_usuario: '',
      boleta_vendedor: 0,
      id_producto: 0,
      nombre: '',
      imagen: '',
      descripcion: '',
      precio: 0,
      disponibilidad: false
    };
    this.showDetails = false;
    this.currentUser = null;
  }
  ngOnInit() {
    this.authService.currentUser$().subscribe(user => {
      if (user) this.currentUser = user;
    });
  }
  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
  getStatusColor(status) {
    switch (status) {
      case 'pendiente':
        return 'warning';
      case 'aceptado':
        return 'success';
      case 'finalizado':
        return 'primary';
      case 'cancelado':
        return 'danger';
      default:
        return 'medium';
    }
  }
  showMap() {
    return (0,_home_einhander_Programas_Javascript_Javascript_mercadito_front_end_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  } // ... (lógica para mostrar el mapa en un modal)
  updateOrderStatus(detail, newStatus) {
    var _this = this;
    this.apiService.updateOrderStatus(this.order.id_pedido, detail.id_producto, newStatus).subscribe( /*#__PURE__*/function () {
      var _ref = (0,_home_einhander_Programas_Javascript_Javascript_mercadito_front_end_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
        detail.estado = newStatus;
        const toast = yield _this.toastController.create({
          message: response,
          duration: 2000,
          position: 'top'
        });
        toast.present();
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref2 = (0,_home_einhander_Programas_Javascript_Javascript_mercadito_front_end_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
        console.error('Error al actualizar el estado del pedido:', error);
        let errorMessage = 'Error desconocido';
        if (error.status === 400) {
          errorMessage = 'Faltan datos en la solicitud';
        } else if (error.status === 409) {
          errorMessage = 'No se puede actualizar el estado del pedido';
        } else if (error.status === 500) {
          errorMessage = 'Error interno del servidor';
        }
        const toast = yield _this.toastController.create({
          message: errorMessage,
          duration: 2000,
          position: 'top'
        });
        toast.present();
      });
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  }
  getAvailableStatuses(currentStatus) {
    switch (currentStatus) {
      case 'pendiente':
        return ['pendiente', 'aceptado', 'cancelado'];
      case 'aceptado':
        return ['aceptado', 'finalizado'];
      case 'cancelado':
      case 'finalizado':
        return [currentStatus];
      // No se puede cambiar el estado
      default:
        return [];
    }
  }
  isStatusAllowed(currentStatus, newStatus) {
    return this.getAvailableStatuses(currentStatus).includes(newStatus);
  }
  openEditProductModal(product) {
    var _this2 = this;
    return (0,_home_einhander_Programas_Javascript_Javascript_mercadito_front_end_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalController.create({
        component: src_app_pages_account_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_1__.EditProductComponent,
        componentProps: {
          product
        }
      });
      modal.onDidDismiss().then(() => {
        src_app_pages_account_account_page__WEBPACK_IMPORTED_MODULE_2__.AccountPage.prototype.loadInventory();
      });
      return yield modal.present();
    })();
  }
  deleteProduct() {
    var _this3 = this;
    return (0,_home_einhander_Programas_Javascript_Javascript_mercadito_front_end_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        header: 'Confirmar eliminación',
        message: '¿Estás seguro de que quieres eliminar este producto?',
        buttons: [{
          text: 'Cancelar',
          role: 'cancel'
        }, {
          text: 'Eliminar',
          handler: () => {
            _this3.apiService.deleteProduct(_this3.producto.id_producto).subscribe( /*#__PURE__*/function () {
              var _ref3 = (0,_home_einhander_Programas_Javascript_Javascript_mercadito_front_end_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
                const toast = yield _this3.toastController.create({
                  message: response,
                  duration: 2000,
                  position: 'top'
                });
                toast.present();
                // Actualiza la lista de productos después de eliminar (puedes emitir un evento o recargar los datos)
              });
              return function (_x3) {
                return _ref3.apply(this, arguments);
              };
            }(), /*#__PURE__*/function () {
              var _ref4 = (0,_home_einhander_Programas_Javascript_Javascript_mercadito_front_end_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
                // ... (manejo de errores)
              });
              return function (_x4) {
                return _ref4.apply(this, arguments);
              };
            }());
          }
        }]
      });
      yield alert.present();
    })();
  }
  toggleAvailability() {
    var _this4 = this;
    return (0,_home_einhander_Programas_Javascript_Javascript_mercadito_front_end_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const newAvailability = !_this4.producto.disponibilidad;
      _this4.apiService.updateProductAvailability(_this4.producto.id_producto, newAvailability).subscribe( /*#__PURE__*/function () {
        var _ref5 = (0,_home_einhander_Programas_Javascript_Javascript_mercadito_front_end_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          _this4.producto.disponibilidad = newAvailability; // Actualiza la disponibilidad en el frontend
          const toast = yield _this4.toastController.create({
            message: newAvailability ? 'El producto ahora es visible' : 'Has ocultado el producto',
            duration: 2000,
            position: 'top'
          });
          toast.present();
        });
        return function (_x5) {
          return _ref5.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref6 = (0,_home_einhander_Programas_Javascript_Javascript_mercadito_front_end_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
          const toast = yield _this4.toastController.create({
            message: error.error,
            duration: 2000,
            position: 'top'
          });
        });
        return function (_x6) {
          return _ref6.apply(this, arguments);
        };
      }());
    })();
  }
}
_OrderCardComponent = OrderCardComponent;
_OrderCardComponent.ɵfac = function OrderCardComponent_Factory(t) {
  return new (t || _OrderCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController));
};
_OrderCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _OrderCardComponent,
  selectors: [["app-order-card"]],
  inputs: {
    order: "order",
    isSellerView: "isSellerView",
    isProduct: "isProduct",
    isInventory: "isInventory",
    producto: "producto"
  },
  decls: 9,
  vars: 7,
  consts: [["button", "true", 3, "click"], ["slot", "end", 3, "name"], [4, "ngIf"], ["lines", "none", 4, "ngFor", "ngForOf"], ["lines", "none"], ["slot", "start"], [3, "src"], ["slot", "end", "interface", "popover", 3, "value", "ionChange", "click", 4, "ngIf"], ["slot", "end", 3, "color", 4, "ngIf"], ["slot", "end", "interface", "popover", 3, "ionChange", "click", "value"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [3, "value", "disabled"], ["slot", "end", 3, "color"], ["slot", "start", 4, "ngIf"], ["color", "dark", 3, "click"], [3, "click", "color"]],
  template: function OrderCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-card", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OrderCardComponent_Template_ion_card_click_0_listener() {
        return ctx.toggleDetails();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-icon", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, OrderCardComponent_ion_card_title_3_Template, 4, 2, "ion-card-title", 2)(4, OrderCardComponent_ion_card_title_4_Template, 2, 1, "ion-card-title", 2)(5, OrderCardComponent_ion_card_subtitle_5_Template, 2, 1, "ion-card-subtitle", 2)(6, OrderCardComponent_ion_card_subtitle_6_Template, 3, 1, "ion-card-subtitle", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, OrderCardComponent_ion_card_content_7_Template, 2, 1, "ion-card-content", 2)(8, OrderCardComponent_ion_card_content_8_Template, 11, 3, "ion-card-content", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("name", ctx.showDetails ? "chevron-up-outline" : "chevron-down-outline");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isProduct);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isProduct);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isProduct);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isProduct);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showDetails && !ctx.isProduct);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showDetails && ctx.isProduct);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonThumbnail, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.SelectValueAccessor],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7191:
/*!*********************************************************!*\
  !*** ./src/app/pages/account/account-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountPageRoutingModule: () => (/* binding */ AccountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.page */ 2585);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _AccountPageRoutingModule;




const routes = [{
  path: '',
  component: _account_page__WEBPACK_IMPORTED_MODULE_0__.AccountPage
}];
class AccountPageRoutingModule {}
_AccountPageRoutingModule = AccountPageRoutingModule;
_AccountPageRoutingModule.ɵfac = function AccountPageRoutingModule_Factory(t) {
  return new (t || _AccountPageRoutingModule)();
};
_AccountPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _AccountPageRoutingModule
});
_AccountPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AccountPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 8422:
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountPageModule: () => (/* binding */ AccountPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-routing.module */ 7191);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page */ 2585);
/* harmony import */ var _components_order_card_order_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/order-card/order-card.component */ 4561);
/* harmony import */ var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-product/edit-product.component */ 3993);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
var _AccountPageModule;





 // Importa el componente 




class AccountPageModule {}
_AccountPageModule = AccountPageModule;
_AccountPageModule.ɵfac = function AccountPageModule_Factory(t) {
  return new (t || _AccountPageModule)();
};
_AccountPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: _AccountPageModule
});
_AccountPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AccountPageModule, {
    declarations: [_account_page__WEBPACK_IMPORTED_MODULE_1__.AccountPage, _components_order_card_order_card_component__WEBPACK_IMPORTED_MODULE_2__.OrderCardComponent, _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_3__.EditProductComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule]
  });
})();
_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetComponentScope"](_account_page__WEBPACK_IMPORTED_MODULE_1__.AccountPage, [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchCase, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.SelectValueAccessor, _components_order_card_order_card_component__WEBPACK_IMPORTED_MODULE_2__.OrderCardComponent], []);

/***/ }),

/***/ 2585:
/*!***********************************************!*\
  !*** ./src/app/pages/account/account.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountPage: () => (/* binding */ AccountPage)
/* harmony export */ });
/* harmony import */ var _home_einhander_Programas_Javascript_Javascript_mercadito_front_end_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-product/edit-product.component */ 3993);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ 3366);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 4796);

var _AccountPage;





function AccountPage_ion_segment_button_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-segment-button", 10)(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Mi inventario");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function AccountPage_ion_segment_button_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-segment-button", 11)(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Mis ventas");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function AccountPage_div_16_app_order_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-order-card", 14);
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("order", order_r1);
  }
}
function AccountPage_div_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "A\u00FAn no tienes compras");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function AccountPage_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AccountPage_div_16_app_order_card_1_Template, 1, 1, "app-order-card", 12)(2, AccountPage_div_16_div_2_Template, 3, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.orders);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.orders.length === 0);
  }
}
function AccountPage_div_17_ion_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AccountPage_div_17_ion_button_1_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.openEditProductModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " + Agregar producto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AccountPage_div_17_app_order_card_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-order-card", 19);
  }
  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("producto", product_r4)("isProduct", true);
  }
}
function AccountPage_div_17_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "A\u00FAn no tienes productos en tu inventario");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function AccountPage_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AccountPage_div_17_ion_button_1_Template, 2, 0, "ion-button", 16)(2, AccountPage_div_17_app_order_card_2_Template, 1, 2, "app-order-card", 17)(3, AccountPage_div_17_div_3_Template, 3, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isSeller);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.inventory);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.inventory.length === 0);
  }
}
function AccountPage_div_18_app_order_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-order-card", 21);
  }
  if (rf & 2) {
    const order_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("order", order_r5)("isSellerView", true);
  }
}
function AccountPage_div_18_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "A\u00FAn no tienes ventas");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function AccountPage_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AccountPage_div_18_app_order_card_1_Template, 1, 2, "app-order-card", 20)(2, AccountPage_div_18_div_2_Template, 3, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.sales);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.sales.length === 0);
  }
}
class AccountPage {
  constructor(modalController, apiService, authService) {
    this.modalController = modalController;
    this.apiService = apiService;
    this.authService = authService;
    this.orders = [];
    this.sales = [];
    this.inventory = [];
    this.currentSegment = 'compras';
    this.isSeller = false;
    this.currentUser = null;
  }
  ngOnInit() {
    this.authService.currentUser$().subscribe(user => {
      if (user) {
        this.isSeller = user.tipo_de_usuario === 'vendedor';
        this.loadOrders();
        if (this.isSeller) {
          this.loadSales();
          this.loadInventory();
        }
      } else {
        this.isSeller = false;
        this.orders = [];
        this.sales = [];
        this.inventory = [];
      }
    });
    console.log('AccountPage initialized');
  }
  segmentChanged(event) {
    this.currentSegment = event.detail.value;
    // Cargar datos según el segmento seleccionado
    if (this.currentSegment === 'ventas') {
      this.loadSales();
    } else if (this.currentSegment === 'inventario') {
      this.loadInventory();
    } else {
      this.loadOrders();
    }
  }
  loadOrders() {
    this.apiService.getOrders().subscribe(orders => {
      this.orders = orders;
    }, error => {
      console.error('Error al cargar los pedidos:', error);
    });
  }
  loadSales() {
    this.apiService.getSales().subscribe(sales => {
      this.sales = sales;
    }, error => {
      console.error('Error al cargar las ventas:', error);
    });
  }
  loadInventory() {
    this.apiService.getInventory().subscribe(inventory => {
      this.inventory = inventory;
    }, error => {
      console.error('Error al cargar el inventario:', error);
    });
  }
  // Actualizar todo al momento de cambiar a esta página
  ionViewWillEnter() {
    this.authService.currentUser$().subscribe(user => {
      if (user) {
        this.isSeller = user.tipo_de_usuario === 'vendedor';
        console.log('ionView: isSeller:', this.isSeller);
        this.loadOrders();
        if (this.isSeller) {
          this.loadSales();
          this.loadInventory();
        }
      } else {
        this.isSeller = false;
        this.orders = [];
        this.sales = [];
        this.inventory = [];
      }
    });
    this.loadOrders();
    if (this.isSeller) {
      this.loadSales();
      this.loadInventory();
    }
  }
  openEditProductModal(product) {
    var _this = this;
    return (0,_home_einhander_Programas_Javascript_Javascript_mercadito_front_end_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalController.create({
        component: _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_1__.EditProductComponent,
        componentProps: {
          product
        } // Pasa el producto al modal si existe
      });
      modal.onDidDismiss().then(() => {
        _this.loadInventory(); // Recarga el inventario después de cerrar el modal
      });
      return yield modal.present();
    })();
  }
}
_AccountPage = AccountPage;
_AccountPage.ɵfac = function AccountPage_Factory(t) {
  return new (t || _AccountPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService));
};
_AccountPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _AccountPage,
  selectors: [["app-account"]],
  decls: 19,
  vars: 8,
  consts: [[3, "translucent"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], ["value", "compras", 3, "ionChange"], ["value", "compras"], ["value", "inventario", 4, "ngIf"], ["value", "ventas", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["value", "inventario"], ["value", "ventas"], [3, "order", 4, "ngFor", "ngForOf"], ["class", "ion-text-center", 4, "ngIf"], [3, "order"], [1, "ion-text-center"], ["expand", "block", "color", "dark", 3, "click", 4, "ngIf"], [3, "producto", "isProduct", 4, "ngFor", "ngForOf"], ["expand", "block", "color", "dark", 3, "click"], [3, "producto", "isProduct"], [3, "order", "isSellerView", 4, "ngFor", "ngForOf"], [3, "order", "isSellerView"]],
  template: function AccountPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "M\u00E1s");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-content", 1)(5, "ion-header", 2)(6, "ion-toolbar")(7, "ion-title", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "M\u00E1s");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-segment", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ionChange", function AccountPage_Template_ion_segment_ionChange_9_listener($event) {
        return ctx.segmentChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-segment-button", 5)(11, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Mis compras");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, AccountPage_ion_segment_button_13_Template, 3, 0, "ion-segment-button", 6)(14, AccountPage_ion_segment_button_14_Template, 3, 0, "ion-segment-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, AccountPage_div_16_Template, 3, 2, "div", 9)(17, AccountPage_div_17_Template, 4, 3, "div", 9)(18, AccountPage_div_18_Template, 3, 2, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isSeller);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isSeller);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx.currentSegment);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "compras");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "inventario");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "ventas");
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3993:
/*!**********************************************************************!*\
  !*** ./src/app/pages/account/edit-product/edit-product.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditProductComponent: () => (/* binding */ EditProductComponent)
/* harmony export */ });
/* harmony import */ var _home_einhander_Programas_Javascript_Javascript_mercadito_front_end_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 3366);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);

var _EditProductComponent;






const _c0 = ["fileInput"];
function EditProductComponent_ion_card_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.imagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function EditProductComponent_ion_card_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-skeleton-text", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class EditProductComponent {
  constructor(formBuilder, apiService, modalController, toastController) {
    this.formBuilder = formBuilder;
    this.apiService = apiService;
    this.modalController = modalController;
    this.toastController = toastController;
    this.product = null;
    this.productId = null;
    this.selectedFile = null;
    this.imagePreview = null;
    this.productForm = this.formBuilder.group({
      nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      descripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      precio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
  }
  ngOnInit() {
    if (this.product) {
      this.productForm.patchValue(this.product);
      // Si estamos editando un producto, mostramos su imagen actual
      if (this.product.imagen) {
        this.imagePreview = `https://mercadito-app.azurewebsites.net/images/products/${this.product.imagen}`;
      }
    }
  }
  closeModal() {
    this.modalController.dismiss();
  }
  selectImage() {
    const fileInput = document.getElementById('fileInput'); // Obtén el elemento por ID
    if (fileInput) {
      fileInput.click(); // Simula un clic en el input de archivo
    } else {
      console.error('Elemento fileInput no encontrado');
    }
  }
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    // Actualiza la vista previa de la imagen
    const reader = new FileReader();
    reader.onload = e => {
      this.imagePreview = e.target.result;
    };
    if (this.selectedFile) reader.readAsDataURL(this.selectedFile);
  }
  submitForm() {
    var _this = this;
    const formData = new FormData();
    formData.append('nombre', this.productForm.value.nombre);
    formData.append('descripcion', this.productForm.value.descripcion);
    formData.append('precio', this.productForm.value.precio);
    if (this.selectedFile) formData.append('imagen', this.selectedFile, this.selectedFile.name);
    if (this.product) {
      // Editar producto existente
      this.apiService.updateProduct(this.product.id_producto, formData).subscribe( /*#__PURE__*/function () {
        var _ref = (0,_home_einhander_Programas_Javascript_Javascript_mercadito_front_end_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          const toast = yield _this.toastController.create({
            message: response,
            duration: 2000,
            position: 'top'
          });
          toast.present();
          _this.closeModal(); // Cierra el modal después de editar
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref2 = (0,_home_einhander_Programas_Javascript_Javascript_mercadito_front_end_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
          const toast = yield _this.toastController.create({
            message: error.error,
            duration: 2000,
            position: 'top'
          });
          toast.present();
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    } else {
      // Crear nuevo producto
      this.apiService.createProduct(formData).subscribe( /*#__PURE__*/function () {
        var _ref3 = (0,_home_einhander_Programas_Javascript_Javascript_mercadito_front_end_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          const toast = yield _this.toastController.create({
            message: response,
            duration: 2000,
            position: 'top'
          });
          toast.present();
          _this.closeModal(); // Cierra el modal después de crear
        });
        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref4 = (0,_home_einhander_Programas_Javascript_Javascript_mercadito_front_end_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
          const toast = yield _this.toastController.create({
            message: error.error,
            duration: 2000,
            position: 'top'
          });
          toast.present();
        });
        return function (_x4) {
          return _ref4.apply(this, arguments);
        };
      }());
    }
  }
}
_EditProductComponent = EditProductComponent;
_EditProductComponent.ɵfac = function EditProductComponent_Factory(t) {
  return new (t || _EditProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController));
};
_EditProductComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _EditProductComponent,
  selectors: [["app-edit-product"]],
  viewQuery: function EditProductComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
    }
  },
  inputs: {
    product: "product"
  },
  decls: 34,
  vars: 6,
  consts: [["slot", "start"], [3, "click"], ["name", "arrow-back"], [4, "ngIf"], [3, "ngSubmit", "formGroup"], ["position", "floating"], ["formControlName", "nombre", "maxlength", "45", 3, "counter"], ["formControlName", "descripcion", "maxlength", "150", 3, "counter"], ["formControlName", "precio", "type", "number"], ["expand", "block"], ["color", "dark", "size", "default", 3, "click"], ["name", "image-outline", "slot", "start"], ["type", "file", "id", "fileInput", "hidden", "", 3, "change"], ["color", "dark", "size", "large", "type", "submit", 3, "disabled"], ["width", "100%", 3, "src"], ["animated", ""]],
  template: function EditProductComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0)(3, "ion-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditProductComponent_Template_ion_button_click_3_listener() {
        return ctx.closeModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Editar Producto");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, EditProductComponent_ion_card_8_Template, 2, 1, "ion-card", 3)(9, EditProductComponent_ion_card_9_Template, 2, 0, "ion-card", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditProductComponent_Template_form_ngSubmit_10_listener() {
        return ctx.submitForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-item")(12, "ion-label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Nombre");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "ion-input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-item")(16, "ion-label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Descripci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "ion-textarea", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-item")(20, "ion-label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Precio");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "ion-input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "ion-item", 9)(25, "ion-button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditProductComponent_Template_ion_button_click_25_listener() {
        return ctx.selectImage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "ion-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Seleccionar Imagen ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function EditProductComponent_Template_input_change_28_listener($event) {
        return ctx.onFileSelected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "br")(30, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ion-item", 9)(32, "ion-button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Guardar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.imagePreview);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.imagePreview);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.productForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("counter", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("counter", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.productForm.valid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTextarea, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
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
//# sourceMappingURL=src_app_pages_account_account_module_ts.js.map