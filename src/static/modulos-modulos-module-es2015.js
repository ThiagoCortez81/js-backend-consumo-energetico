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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _modulos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modulos.page */ "./src/app/pages/tabs/modulos/modulos.page.ts");







let Tab1PageModule = class Tab1PageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_webservices_webservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/webservices/webservices.service */ "./src/app/services/webservices/webservices.service.ts");
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/alert/alert.service */ "./src/app/services/alert/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_fcm_fcm_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/fcm/fcm.service */ "./src/app/services/fcm/fcm.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/storage/storage.service */ "./src/app/services/storage/storage.service.ts");











let ModulosPage = class ModulosPage {
    constructor(_ws, _alertService, _nav, _fcm, _toastCtrl, _platform, _localNotifications, _storageService) {
        this._ws = _ws;
        this._alertService = _alertService;
        this._nav = _nav;
        this._fcm = _fcm;
        this._platform = _platform;
        this._localNotifications = _localNotifications;
        this._storageService = _storageService;
        this.appName = _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].appName;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.initializePage();
        });
    }
    initializePage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.consumo = yield this._storageService.getValorKW();
            // Registrando o serviço do firebase
            this._platform.ready().then(() => {
                // Get an FCM token
                this._fcm.getToken();
                // Listen to incoming messages
                this._fcm.listenToNotifications().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(msg => {
                    this._localNotifications.cancelAll();
                    this._localNotifications.schedule({
                        id: 1,
                        title: msg.title,
                        text: msg.body
                    });
                })).subscribe();
            });
            const loading = yield this._alertService.defaultLoading("Carregando...");
            this._ws.listarSensoresCliente().then(resp => resp.toPromise()).then((resposta) => {
                if (resposta.isAuthenticated) {
                    this.listSensores = resposta.sensores;
                }
                else {
                    this._storageService.saveJWT(undefined).then((res) => {
                        this._alertService.defaultAlert("Oops!", null, "Sua sessão expirou, faça o login novamente!", ["Vamos lá!"]);
                        this._nav.navigate(['/']);
                    });
                }
                loading.dismiss();
            });
        });
    }
    abrirAlertEditApelido(sensor) {
        this.selectedSensor = sensor;
        const title = 'Editar apelido do módulo';
        const inputs = [{
                name: 'apelido',
                type: 'text',
                placeholder: 'Apelido',
                value: this.selectedSensor.apelido
            }];
        const buttons = [{
                text: 'Cancelar',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {
                    console.log('Confirm Cancel');
                }
            }, {
                text: 'Alterar',
                handler: (content) => {
                    this.salvarNovoApelido(content.apelido);
                }
            }];
        this._alertService.promptAlert(title, inputs, buttons);
    }
    abrirAlertEditLimite(sensor) {
        this.selectedSensor = sensor;
        const title = 'Editar limite para alerta do módulo (em R$)';
        const inputs = [{
                name: 'limiteAlerta',
                type: 'number',
                placeholder: 'Limite',
                value: this.selectedSensor.limiteAlerta
            }];
        const buttons = [{
                text: 'Cancelar',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {
                    console.log('Confirm Cancel');
                }
            }, {
                text: 'Alterar',
                handler: (content) => {
                    this.salvarNovoLimite(content.limiteAlerta);
                }
            }];
        this._alertService.promptAlert(title, inputs, buttons);
    }
    abrirAlertEditLimitePico(sensor) {
        this.selectedSensor = sensor;
        const title = 'Editar limite para o modulo desligar (pico Kw/h)';
        const inputs = [{
                name: 'kwAlerta',
                type: 'number',
                placeholder: 'Limite',
                value: this.selectedSensor.kwAlerta
            }];
        const buttons = [{
                text: 'Cancelar',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {
                    console.log('Confirm Cancel');
                }
            }, {
                text: 'Alterar',
                handler: (content) => {
                    this.salvarNovoLimitePico(content.kwAlerta);
                }
            }];
        this._alertService.promptAlert(title, inputs, buttons);
    }
    salvarNovoApelido(apelido) {
        this.selectedSensor.apelido = apelido;
        this._ws.alterarSensorApelido({ sensor: this.selectedSensor }).then(res => res.toPromise()).then((response) => {
            if (response.isAuthenticated) {
                let header = "Oops!";
                let message = "Ops, ocorreu um problema ao salvar os dados. Tente novamente mais tarde!";
                let button = "Tentar novamente";
                if (response.success) {
                    header = "Sucesso!";
                    message = `Apelido '${apelido}' salvo com sucesso!`;
                    button = "Ok";
                }
                this._alertService.defaultAlert(header, null, message, [button]);
            }
            else {
                this._storageService.saveJWT(undefined).then((res) => {
                    this._alertService.defaultAlert("Oops!", null, "Sua sessão expirou, faça o login novamente!", ["Vamos lá!"]);
                    this._nav.navigate(['/']);
                });
            }
        });
    }
    salvarNovoLimite(limite) {
        this.selectedSensor.limiteAlerta = limite;
        this._ws.alterarSensorLimite({ sensor: this.selectedSensor }).then(res => res.toPromise()).then((response) => {
            if (response.isAuthenticated) {
                let header = "Oops!";
                let message = "Ops, ocorreu um problema ao salvar os dados. Tente novamente mais tarde!";
                let button = "Tentar novamente";
                if (response.success) {
                    header = "Sucesso!";
                    message = `Limite de '${this.paraReais(limite)}' salvo com sucesso!`;
                    button = "Ok";
                }
                this._alertService.defaultAlert(header, null, message, [button]);
            }
            else {
                this._storageService.saveJWT(undefined).then((res) => {
                    this._alertService.defaultAlert("Oops!", null, "Sua sessão expirou, faça o login novamente!", ["Vamos lá!"]);
                    this._nav.navigate(['/']);
                });
            }
        });
    }
    salvarNovoLimitePico(limite) {
        this.selectedSensor.kwAlerta = limite;
        this._ws.alterarSensorLimitePico({ sensor: this.selectedSensor }).then(res => res.toPromise()).then((response) => {
            if (response.isAuthenticated) {
                let header = "Oops!";
                let message = "Ops, ocorreu um problema ao salvar os dados. Tente novamente mais tarde!";
                let button = "Tentar novamente";
                if (response.success) {
                    header = "Sucesso!";
                    message = `Limite de '${limite}' salvo com sucesso!`;
                    button = "Ok";
                }
                this._alertService.defaultAlert(header, null, message, [button]);
            }
            else {
                this._storageService.saveJWT(undefined).then((res) => {
                    this._alertService.defaultAlert("Oops!", null, "Sua sessão expirou, faça o login novamente!", ["Vamos lá!"]);
                    this._nav.navigate(['/']);
                });
            }
        });
    }
    detalharSensor(sensor) {
        this._nav.navigate(["/modulo/", sensor.macSensor, sensor.apelido]);
    }
    converteData(data) {
        return this._alertService.converteData(data);
    }
    calculaConsumo(qtdKw) {
        console.log('qtdKw', qtdKw);
        console.log('this.consumo', this.consumo);
        return this.consumo * qtdKw;
    }
    paraReais(valor) {
        return `R$ ${parseFloat(valor).toFixed(2).toString().replace('.', ',')}`;
    }
    logout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this._storageService.saveJWT(null);
            this._nav.navigate(['/']);
        });
    }
};
ModulosPage.ctorParameters = () => [
    { type: _services_webservices_webservices_service__WEBPACK_IMPORTED_MODULE_3__["WebservicesService"] },
    { type: _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_fcm_fcm_service__WEBPACK_IMPORTED_MODULE_7__["FcmService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__["LocalNotifications"] },
    { type: _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"] }
];
ModulosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tab-modulos',
        template: __webpack_require__(/*! raw-loader!./modulos.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tabs/modulos/modulos.page.html"),
        styles: [__webpack_require__(/*! ./modulos.page.scss */ "./src/app/pages/tabs/modulos/modulos.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_webservices_webservices_service__WEBPACK_IMPORTED_MODULE_3__["WebservicesService"], _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_fcm_fcm_service__WEBPACK_IMPORTED_MODULE_7__["FcmService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__["LocalNotifications"], _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"]])
], ModulosPage);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ "./node_modules/@ionic-native/firebase-x/ngx/index.js");
/* harmony import */ var _webservices_webservices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../webservices/webservices.service */ "./src/app/services/webservices/webservices.service.ts");





let FcmService = class FcmService {
    // _URL_WEBSERVICES = "http://localhost:3000/api/";
    constructor(platform, firebaseNative, _ws) {
        this.platform = platform;
        this.firebaseNative = firebaseNative;
        this._ws = _ws;
        // _URL_WEBSERVICES = "http://cortezit.me/api/";
        this._URL_WEBSERVICES = "http://192.168.0.5:3000/api/";
        console.log('Hello FcmProvider Provider');
    }
    // Get permission from the user
    getToken() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let token;
            console.info('this.platform-> ', this.platform);
            if (this.platform.is('android')) {
                token = yield this.firebaseNative.getToken();
            }
            console.log('token', token);
            const sendObj = {
                token: token
            };
            this._ws.storeToken(sendObj).then(resp => resp.toPromise()).then((res) => {
                console.log(res);
            });
        });
    }
    // Listen to incoming FCM messages
    listenToNotifications() {
        return this.firebaseNative.onMessageReceived();
        // return this.firebaseNative.onNotificationOpen()
    }
};
FcmService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_3__["FirebaseX"] },
    { type: _webservices_webservices_service__WEBPACK_IMPORTED_MODULE_4__["WebservicesService"] }
];
FcmService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_3__["FirebaseX"],
        _webservices_webservices_service__WEBPACK_IMPORTED_MODULE_4__["WebservicesService"]])
], FcmService);



/***/ })

}]);
//# sourceMappingURL=modulos-modulos-module-es2015.js.map