"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_delivery_delivery_page_ts"],{

/***/ 9243:
/*!*************************************************!*\
  !*** ./src/app/pages/delivery/delivery.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeliveryPage: () => (/* binding */ DeliveryPage)
/* harmony export */ });
/* harmony import */ var _home_einhander_Programas_Javascript_Javascript_mercadito_front_end_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 3366);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cart.service */ 6868);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);

var _DeliveryPage;







function DeliveryPage_ion_item_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item")(1, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Ingresa el lugar de entrega:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function DeliveryPage_ion_item_30_Template_ion_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.otherLocation, $event) || (ctx_r1.otherLocation = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.otherLocation);
  }
}
class DeliveryPage {
  constructor(modalController, apiService, toastController, router, cartService) {
    this.modalController = modalController;
    this.apiService = apiService;
    this.toastController = toastController;
    this.router = router;
    this.cartService = cartService;
    this.cartProducts = []; // Recibe los productos del carrito
    this.selectedLocation = 'Palapas de gobierno'; // Valor por defecto
    this.otherLocation = '';
  }
  ngOnInit() {}
  onLocationChange() {
    if (this.selectedLocation !== 'Otro') {
      this.otherLocation = ''; // Limpia el campo "Otro" si se selecciona otra opción
    }
  }
  confirmDelivery() {
    var _this = this;
    return (0,_home_einhander_Programas_Javascript_Javascript_mercadito_front_end_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const lugarEntrega = _this.selectedLocation === 'Otro' ? _this.otherLocation : _this.selectedLocation;
      const orderData = {
        info: {
          lugar_entrega: lugarEntrega
        },
        detalles: _this.cartProducts.map(product => ({
          boleta_vendedor: product.boleta_vendedor,
          id_producto: product.id_producto
        }))
      };
      _this.apiService.createOrder(orderData).subscribe( /*#__PURE__*/function () {
        var _ref = (0,_home_einhander_Programas_Javascript_Javascript_mercadito_front_end_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          console.log('Pedido creado:', response);
          const toast = yield _this.toastController.create({
            message: response,
            duration: 2000,
            position: 'top'
          });
          toast.present();
          _this.modalController.dismiss(); // Cierra el modal después de crear el pedido
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref2 = (0,_home_einhander_Programas_Javascript_Javascript_mercadito_front_end_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
          console.error('Error al crear el pedido:', error);
          if (error.status === 401) {
            _this.router.navigate(['/login']);
          }
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
      // Usamos el servicio de carrito para limpiarlo
      _this.cartService.clearCart();
    })();
  }
  closeModal() {
    this.modalController.dismiss();
  }
}
_DeliveryPage = DeliveryPage;
_DeliveryPage.ɵfac = function DeliveryPage_Factory(t) {
  return new (t || _DeliveryPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService));
};
_DeliveryPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _DeliveryPage,
  selectors: [["app-delivery"]],
  inputs: {
    cartProducts: "cartProducts"
  },
  decls: 36,
  vars: 4,
  consts: [[3, "translucent"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], [3, "ngModelChange", "ionChange", "ngModel"], ["value", "Palapas de gobierno"], ["value", "Asta bandera / Letras"], ["value", "Barra de caf\u00E9"], ["value", "Papeler\u00EDa"], ["value", "Palapas de IA"], ["value", "Cafeter\u00EDa"], ["value", "Laboratorios planta baja"], ["value", "Otro"], [4, "ngIf"], [1, "ion-text-center"], ["color", "dark", "shape", "round", 3, "click"], ["position", "floating"], [3, "ngModelChange", "ngModel"]],
  template: function DeliveryPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Entrega");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-content", 1)(5, "ion-header", 2)(6, "ion-toolbar")(7, "ion-title", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Entrega");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-list")(10, "ion-item")(11, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Lugar de entrega:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-select", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function DeliveryPage_Template_ion_select_ngModelChange_13_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.selectedLocation, $event) || (ctx.selectedLocation = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionChange", function DeliveryPage_Template_ion_select_ionChange_13_listener() {
        return ctx.onLocationChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-select-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Palapas de gobierno");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-select-option", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Asta bandera / Letras");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ion-select-option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Barra de caf\u00E9");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ion-select-option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Papeler\u00EDa");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "ion-select-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Palapas de IA");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "ion-select-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Cafeter\u00EDa");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "ion-select-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Laboratorios planta baja");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "ion-select-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Otro");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, DeliveryPage_ion_item_30_Template, 4, 1, "ion-item", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 14)(32, "ion-button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DeliveryPage_Template_ion_button_click_32_listener() {
        return ctx.confirmDelivery();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Confirmar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "ion-button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DeliveryPage_Template_ion_button_click_34_listener() {
        return ctx.closeModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Cancelar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedLocation);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedLocation === "Otro");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.TextValueAccessor],
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
//# sourceMappingURL=default-src_app_pages_delivery_delivery_page_ts.js.map