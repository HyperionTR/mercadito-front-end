"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_services_api_service_ts"],{

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
//# sourceMappingURL=src_app_services_api_service_ts.js.map