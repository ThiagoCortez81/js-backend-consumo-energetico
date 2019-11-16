(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modulos-modulos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tabs/modulos/modulos.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tabs/modulos/modulos.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"custom-navbar\">\n    <ion-toolbar color=\"dark\">\n        <ion-title>\n            {{appName}}\n            <a class=\"logout-button\" (click)=\"logout()\">\n                <ion-icon name=\"exit\"></ion-icon>\n            </a>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-color-dark\" color=\"#FFF\">\n    <ion-card class=\"ion-color-light login-container\" color=\"#FFF\" *ngFor=\"let sensor of listSensores\">\n        <ion-card-header>\n            <ion-card-title>\n                <b>{{sensor.apelido || \"Módulo \" + sensor._id.substr(0, 7)}}</b>\n            </ion-card-title>\n        </ion-card-header>\n\n        <ion-card-content>\n            <ion-list lines=\"none\">\n                <ion-item class=\"activated\">\n                    <ion-icon name=\"star\" slot=\"start\"></ion-icon>\n                    <ion-label>{{sensor._id}}</ion-label>\n                </ion-item>\n                <ion-item class=\"activated\">\n                    <ion-icon name=\"wifi\" slot=\"start\"></ion-icon>\n                    <ion-label>{{sensor.macSensor}}</ion-label>\n                </ion-item>\n                <ion-item class=\"activated\">\n                    <ion-icon name=\"time\" slot=\"start\"></ion-icon>\n                    <ion-label>{{converteData(sensor.ultimaComunicacao) || 'Sem dados'}}</ion-label>\n                </ion-item>\n                <ion-item class=\"activated\">\n                    <ion-icon name=\"alert\" slot=\"start\"></ion-icon>\n                    <ion-label>{{sensor.kwAlerta || 'Sem dados de'}} KW limite</ion-label>\n                </ion-item>\n                <ion-item class=\"activated\">\n                    <ion-icon [color]=\"sensor.limiteAlerta != null && sensor.limiteAlerta < calculaConsumo(sensor.consumo) ? 'danger' : 'success'\" name=\"cash\" slot=\"start\"></ion-icon>\n                    <ion-label>\n                        {{paraReais(calculaConsumo(sensor.consumo))}}\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"activated\">\n                    <ion-icon name=\"alert\" slot=\"start\"></ion-icon>\n                    <ion-label>\n                        {{paraReais(sensor.limiteAlerta)}}\n                        <ion-badge color=\"danger\" *ngIf=\"sensor.limiteAlerta != null && sensor.limiteAlerta < calculaConsumo(sensor.consumo)\">\n                            Consumo atual {{paraReais(calculaConsumo(sensor.consumo))}}.\n                        </ion-badge>\n                    </ion-label>\n                </ion-item>\n            </ion-list>\n        </ion-card-content>\n\n        <ion-row padding float-right>\n            <ion-button expand=\"block\" color=\"warning\" (click)=\"abrirAlertEditLimitePico(sensor)\">\n                <ion-icon name=\"create\" slot=\"start\"></ion-icon>\n                <span>Limite Pico</span>\n            </ion-button>\n            <ion-button expand=\"block\" color=\"warning\" (click)=\"abrirAlertEditLimite(sensor)\">\n                <ion-icon name=\"create\" slot=\"start\"></ion-icon>\n                <span>Limite</span>\n            </ion-button>\n            <ion-button expand=\"block\" color=\"success\" (click)=\"abrirAlertEditApelido(sensor)\">\n                <ion-icon name=\"create\" slot=\"start\"></ion-icon>\n                <span>Apelido</span>\n            </ion-button>\n            <ion-button expand=\"block\" (click)=\"detalharSensor(sensor)\">\n                <ion-icon name=\"eye\" slot=\"start\"></ion-icon>\n                <span>Detalhar</span>\n            </ion-button>\n        </ion-row>\n    </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tabs/modulos/modulos.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/modulos/modulos.module.ts ***!
  \******************************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modulos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modulos.page */ "./src/app/pages/tabs/modulos/modulos.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _modulos_page__WEBPACK_IMPORTED_MODULE_6__["ModulosPage"] }])
            ],
            declarations: [_modulos_page__WEBPACK_IMPORTED_MODULE_6__["ModulosPage"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/modulos/modulos.page.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/modulos/modulos.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.logout-button {\n  float: right;\n  color: #FFF;\n  text-decoration: none;\n}\n\nion-content {\n  --ion-color-base: #3f3f40 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RoaWFnb2NvcnRlei9Qcm9qZXRvcy9yZWRlcy9yZWRlc19paS9mcm9udC1hcHAtY29uc3Vtby1lbmVyZ2V0aWNvL3NyYy9hcHAvcGFnZXMvdGFicy9tb2R1bG9zL21vZHVsb3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90YWJzL21vZHVsb3MvbW9kdWxvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFicy9tb2R1bG9zL21vZHVsb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubG9nb3V0LWJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICNGRkY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1jb2xvci1iYXNlOiAjM2YzZjQwICFpbXBvcnRhbnQ7XG59XG4iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5sb2dvdXQtYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogI0ZGRjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICMzZjNmNDAgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tabs/modulos/modulos.page.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/tabs/modulos/modulos.page.ts ***!
  \****************************************************/
/*! exports provided: ModulosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulosPage", function() { return ModulosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_webservices_webservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/webservices/webservices.service */ "./src/app/services/webservices/webservices.service.ts");
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/alert/alert.service */ "./src/app/services/alert/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_fcm_fcm_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/fcm/fcm.service */ "./src/app/services/fcm/fcm.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/storage/storage.service */ "./src/app/services/storage/storage.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");












var ModulosPage = /** @class */ (function () {
    function ModulosPage(_ws, _alertService, _nav, _fcm, _toastCtrl, _platform, _localNotifications, _storageService) {
        this._ws = _ws;
        this._alertService = _alertService;
        this._nav = _nav;
        this._fcm = _fcm;
        this._platform = _platform;
        this._localNotifications = _localNotifications;
        this._storageService = _storageService;
        this.appName = _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].appName;
    }
    ModulosPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initializePage()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ModulosPage.prototype.initializePage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this._storageService.getValorKW()];
                    case 1:
                        _a.consumo = _b.sent();
                        // Registrando o serviço do firebase
                        this._platform.ready().then(function () {
                            // Get an FCM token
                            _this._fcm.getToken();
                            // Listen to incoming messages
                            _this._fcm.listenToNotifications().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (msg) {
                                _this._localNotifications.cancelAll();
                                _this._localNotifications.schedule({
                                    id: 1,
                                    title: msg.title,
                                    text: msg.body
                                });
                            })).subscribe();
                        });
                        return [4 /*yield*/, this._alertService.defaultLoading("Carregando...")];
                    case 2:
                        loading = _b.sent();
                        this._ws.listarSensoresCliente().then(function (resp) { return resp.toPromise(); }).then(function (resposta) {
                            if (resposta.isAuthenticated) {
                                _this.listSensores = resposta.sensores;
                            }
                            else {
                                _this._storageService.saveJWT(undefined).then(function (res) {
                                    _this._alertService.defaultAlert("Oops!", null, "Sua sessão expirou, faça o login novamente!", ["Vamos lá!"]);
                                    _this._nav.navigate(['/']);
                                });
                            }
                            loading.dismiss();
                        });
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["interval"])(10000)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () { return _this._ws.listarSensoresCliente().then(function (resp) { return resp.toPromise(); }); })).subscribe(function (resposta) {
                            if (resposta.isAuthenticated) {
                                _this.listSensores = resposta.sensores;
                            }
                            else {
                                _this._storageService.saveJWT(undefined).then(function (res) {
                                    _this._alertService.defaultAlert("Oops!", null, "Sua sessão expirou, faça o login novamente!", ["Vamos lá!"]);
                                    _this._nav.navigate(['/']);
                                });
                            }
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ModulosPage.prototype.abrirAlertEditApelido = function (sensor) {
        var _this = this;
        this.selectedSensor = sensor;
        var title = 'Editar apelido do módulo';
        var inputs = [{
                name: 'apelido',
                type: 'text',
                placeholder: 'Apelido',
                value: this.selectedSensor.apelido
            }];
        var buttons = [{
                text: 'Cancelar',
                role: 'cancel',
                cssClass: 'secondary',
                handler: function () {
                    console.log('Confirm Cancel');
                }
            }, {
                text: 'Alterar',
                handler: function (content) {
                    _this.salvarNovoApelido(content.apelido);
                }
            }];
        this._alertService.promptAlert(title, inputs, buttons);
    };
    ModulosPage.prototype.abrirAlertEditLimite = function (sensor) {
        var _this = this;
        this.selectedSensor = sensor;
        var title = 'Editar limite para alerta do módulo (em R$)';
        var inputs = [{
                name: 'limiteAlerta',
                type: 'number',
                placeholder: 'Limite',
                value: this.selectedSensor.limiteAlerta
            }];
        var buttons = [{
                text: 'Cancelar',
                role: 'cancel',
                cssClass: 'secondary',
                handler: function () {
                    console.log('Confirm Cancel');
                }
            }, {
                text: 'Alterar',
                handler: function (content) {
                    _this.salvarNovoLimite(content.limiteAlerta);
                }
            }];
        this._alertService.promptAlert(title, inputs, buttons);
    };
    ModulosPage.prototype.abrirAlertEditLimitePico = function (sensor) {
        var _this = this;
        this.selectedSensor = sensor;
        var title = 'Editar limite para o modulo desligar (pico Kw/h)';
        var inputs = [{
                name: 'kwAlerta',
                type: 'number',
                placeholder: 'Limite',
                value: this.selectedSensor.kwAlerta
            }];
        var buttons = [{
                text: 'Cancelar',
                role: 'cancel',
                cssClass: 'secondary',
                handler: function () {
                    console.log('Confirm Cancel');
                }
            }, {
                text: 'Alterar',
                handler: function (content) {
                    _this.salvarNovoLimitePico(content.kwAlerta);
                }
            }];
        this._alertService.promptAlert(title, inputs, buttons);
    };
    ModulosPage.prototype.salvarNovoApelido = function (apelido) {
        var _this = this;
        this.selectedSensor.apelido = apelido;
        this._ws.alterarSensorApelido({ sensor: this.selectedSensor }).then(function (res) { return res.toPromise(); }).then(function (response) {
            if (response.isAuthenticated) {
                var header = "Oops!";
                var message = "Ops, ocorreu um problema ao salvar os dados. Tente novamente mais tarde!";
                var button = "Tentar novamente";
                if (response.success) {
                    header = "Sucesso!";
                    message = "Apelido '" + apelido + "' salvo com sucesso!";
                    button = "Ok";
                }
                _this._alertService.defaultAlert(header, null, message, [button]);
            }
            else {
                _this._storageService.saveJWT(undefined).then(function (res) {
                    _this._alertService.defaultAlert("Oops!", null, "Sua sessão expirou, faça o login novamente!", ["Vamos lá!"]);
                    _this._nav.navigate(['/']);
                });
            }
        });
    };
    ModulosPage.prototype.salvarNovoLimite = function (limite) {
        var _this = this;
        this.selectedSensor.limiteAlerta = limite;
        this._ws.alterarSensorLimite({ sensor: this.selectedSensor }).then(function (res) { return res.toPromise(); }).then(function (response) {
            if (response.isAuthenticated) {
                var header = "Oops!";
                var message = "Ops, ocorreu um problema ao salvar os dados. Tente novamente mais tarde!";
                var button = "Tentar novamente";
                if (response.success) {
                    header = "Sucesso!";
                    message = "Limite de '" + _this.paraReais(limite) + "' salvo com sucesso!";
                    button = "Ok";
                }
                _this._alertService.defaultAlert(header, null, message, [button]);
            }
            else {
                _this._storageService.saveJWT(undefined).then(function (res) {
                    _this._alertService.defaultAlert("Oops!", null, "Sua sessão expirou, faça o login novamente!", ["Vamos lá!"]);
                    _this._nav.navigate(['/']);
                });
            }
        });
    };
    ModulosPage.prototype.salvarNovoLimitePico = function (limite) {
        var _this = this;
        this.selectedSensor.kwAlerta = limite;
        this._ws.alterarSensorLimitePico({ sensor: this.selectedSensor }).then(function (res) { return res.toPromise(); }).then(function (response) {
            if (response.isAuthenticated) {
                var header = "Oops!";
                var message = "Ops, ocorreu um problema ao salvar os dados. Tente novamente mais tarde!";
                var button = "Tentar novamente";
                if (response.success) {
                    header = "Sucesso!";
                    message = "Limite de '" + limite + "' salvo com sucesso!";
                    button = "Ok";
                }
                _this._alertService.defaultAlert(header, null, message, [button]);
            }
            else {
                _this._storageService.saveJWT(undefined).then(function (res) {
                    _this._alertService.defaultAlert("Oops!", null, "Sua sessão expirou, faça o login novamente!", ["Vamos lá!"]);
                    _this._nav.navigate(['/']);
                });
            }
        });
    };
    ModulosPage.prototype.detalharSensor = function (sensor) {
        this._nav.navigate(["/modulo/", sensor.macSensor, sensor.apelido]);
    };
    ModulosPage.prototype.converteData = function (data) {
        return this._alertService.converteData(data);
    };
    ModulosPage.prototype.calculaConsumo = function (qtdKw) {
        console.log('qtdKw', qtdKw);
        console.log('this.consumo', this.consumo);
        return this.consumo * qtdKw;
    };
    ModulosPage.prototype.paraReais = function (valor) {
        return "R$ " + parseFloat(valor).toFixed(2).toString().replace('.', ',');
    };
    ModulosPage.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._storageService.saveJWT(null)];
                    case 1:
                        _a.sent();
                        this._nav.navigate(['/']);
                        return [2 /*return*/];
                }
            });
        });
    };
    ModulosPage.ctorParameters = function () { return [
        { type: _services_webservices_webservices_service__WEBPACK_IMPORTED_MODULE_3__["WebservicesService"] },
        { type: _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _services_fcm_fcm_service__WEBPACK_IMPORTED_MODULE_7__["FcmService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
        { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__["LocalNotifications"] },
        { type: _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"] }
    ]; };
    ModulosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tab-modulos',
            template: __webpack_require__(/*! raw-loader!./modulos.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tabs/modulos/modulos.page.html"),
            styles: [__webpack_require__(/*! ./modulos.page.scss */ "./src/app/pages/tabs/modulos/modulos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_webservices_webservices_service__WEBPACK_IMPORTED_MODULE_3__["WebservicesService"], _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_fcm_fcm_service__WEBPACK_IMPORTED_MODULE_7__["FcmService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__["LocalNotifications"], _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"]])
    ], ModulosPage);
    return ModulosPage;
}());



/***/ }),

/***/ "./src/app/services/fcm/fcm.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/fcm/fcm.service.ts ***!
  \*********************************************/
/*! exports provided: FcmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcmService", function() { return FcmService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ "./node_modules/@ionic-native/firebase-x/ngx/index.js");
/* harmony import */ var _webservices_webservices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../webservices/webservices.service */ "./src/app/services/webservices/webservices.service.ts");





var FcmService = /** @class */ (function () {
    // _URL_WEBSERVICES = "http://localhost:3000/api/";
    function FcmService(platform, firebaseNative, _ws) {
        this.platform = platform;
        this.firebaseNative = firebaseNative;
        this._ws = _ws;
        // _URL_WEBSERVICES = "http://cortezit.me/api/";
        this._URL_WEBSERVICES = "http://192.168.0.5:3000/api/";
        console.log('Hello FcmProvider Provider');
    }
    // Get permission from the user
    FcmService.prototype.getToken = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var token, sendObj;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.info('this.platform-> ', this.platform);
                        if (!this.platform.is('android')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.firebaseNative.getToken()];
                    case 1:
                        token = _a.sent();
                        _a.label = 2;
                    case 2:
                        console.log('token', token);
                        sendObj = {
                            token: token
                        };
                        this._ws.storeToken(sendObj).then(function (resp) { return resp.toPromise(); }).then(function (res) {
                            console.log(res);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    // Listen to incoming FCM messages
    FcmService.prototype.listenToNotifications = function () {
        return this.firebaseNative.onMessageReceived();
        // return this.firebaseNative.onNotificationOpen()
    };
    FcmService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_3__["FirebaseX"] },
        { type: _webservices_webservices_service__WEBPACK_IMPORTED_MODULE_4__["WebservicesService"] }
    ]; };
    FcmService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_3__["FirebaseX"],
            _webservices_webservices_service__WEBPACK_IMPORTED_MODULE_4__["WebservicesService"]])
    ], FcmService);
    return FcmService;
}());



/***/ })

}]);
//# sourceMappingURL=modulos-modulos-module-es5.js.map