"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 4987:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageRoutingModule: () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _LoginPageRoutingModule;




const routes = [{
  path: '',
  component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
}];
class LoginPageRoutingModule {}
_LoginPageRoutingModule = LoginPageRoutingModule;
_LoginPageRoutingModule.ɵfac = function LoginPageRoutingModule_Factory(t) {
  return new (t || _LoginPageRoutingModule)();
};
_LoginPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _LoginPageRoutingModule
});
_LoginPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 9370:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageModule: () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 4987);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var _LoginPageModule;






class LoginPageModule {}
_LoginPageModule = LoginPageModule;
_LoginPageModule.ɵfac = function LoginPageModule_Factory(t) {
  return new (t || _LoginPageModule)();
};
_LoginPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _LoginPageModule
});
_LoginPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginPageModule, {
    declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule]
  });
})();

/***/ }),

/***/ 413:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPage: () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 3366);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
var _LoginPage;






class LoginPage {
  constructor(apiService, router, authService) {
    this.apiService = apiService;
    this.router = router;
    this.authService = authService;
  }
  ngOnInit() {}
  onLogin() {
    this.apiService.login(this.username, this.password).subscribe(response => {
      // Manejar la respuesta de la API (por ejemplo, redireccionar a otra página)
      console.log('Respuesta de la API:', response);
      localStorage.setItem('currentUser', JSON.stringify(response));
      const currentUserString = localStorage.getItem('currentUser');
      if (currentUserString !== null) {
        this.authService.setCurrentUser(JSON.parse(currentUserString));
        this.authService.setLoggedIn(true);
      }
      this.router.navigate(['/']);
    }, error => {
      if (error.status === 401) {
        this.router.navigate(['/login']); // Redirige al login en caso de error 401
      } else {
        console.error('Error al iniciar sesión:', error);
      }
    });
  }
}
_LoginPage = LoginPage;
_LoginPage.ɵfac = function LoginPage_Factory(t) {
  return new (t || _LoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
_LoginPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _LoginPage,
  selectors: [["app-login"]],
  decls: 20,
  vars: 2,
  consts: [["color", "light", 1, "ion-padding"], ["size", "large", "name", "arrow-back", "routerLink", "/"], ["size", "large"], [3, "ngSubmit"], ["color", "light", 1, "ion-no-padding"], ["position", "stacked"], ["type", "text", "name", "username", "required", "", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "required", "", 3, "ngModelChange", "ngModel"], ["color", "dark", "shape", "round", "expand", "block", "type", "submit"], ["name", "arrow-forward"]],
  template: function LoginPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br")(2, "ion-icon", 1)(3, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2", 2)(5, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Iniciar sesi\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginPage_Template_form_ngSubmit_7_listener() {
        return ctx.onLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-item", 4)(9, "ion-label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Boleta*");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function LoginPage_Template_ion_input_ngModelChange_11_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.username, $event) || (ctx.username = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-item", 4)(13, "ion-label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Contrase\u00F1a*");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function LoginPage_Template_ion_input_ngModelChange_15_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Iniciar sesion \u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "ion-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.username);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.password);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  styles: ["ion-button[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map