(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tabs/tabs.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tabs/tabs.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"modulos\">\n      <ion-icon name=\"flash\"></ion-icon>\n      <ion-label>Energia</ion-label>\n    </ion-tab-button>\n\n    <!--<ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"water\"></ion-icon>\n      <ion-label>Agua</ion-label>\n    </ion-tab-button>-->\n  </ion-tab-bar>\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/pages/tabs/tabs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/pages/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-tab-bar {\n  font-weight: lighter;\n  background-color: #222428;\n}\nion-tab-bar ion-tab-button {\n  background-color: #222428;\n  color: rgba(255, 255, 255, 0.6);\n}\n.tab-selected {\n  font-weight: bold;\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RoaWFnb2NvcnRlei9Qcm9qZXRvcy9yZWRlcy9yZWRlc19paS9mcm9udC1hcHAtY29uc3Vtby1lbmVyZ2V0aWNvL3NyYy9hcHAvcGFnZXMvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0EseUJBQUE7QUNDRjtBRENFO0VBQ0UseUJBQUE7RUFDQSwrQkFBQTtBQ0NKO0FER0E7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYi1iYXIge1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAzNiwgNDApO1xuXG4gIGlvbi10YWItYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDM2LCA0MCk7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgfVxufVxuXG4udGFiLXNlbGVjdGVke1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSFpbXBvcnRhbnQ7XG59XG4iLCJpb24tdGFiLWJhciB7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyNDI4O1xufVxuaW9uLXRhYi1iYXIgaW9uLXRhYi1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyNDI4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xufVxuXG4udGFiLXNlbGVjdGVkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: __webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tabs/tabs.page.html"),
        styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/pages/tabs/tabs.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TabsPage);



/***/ }),

/***/ "./src/app/pages/tabs/tabs.router.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/tabs/tabs.router.module.ts ***!
  \**************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'modulos',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | modulos-modulos-module */ "modulos-modulos-module").then(__webpack_require__.bind(null, /*! ./modulos/modulos.module */ "./src/app/pages/tabs/modulos/modulos.module.ts")).then(m => m.Tab1PageModule)
                    }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | tab2-tab2-module */ "tab2-tab2-module").then(__webpack_require__.bind(null, /*! ./tab2/tab2.module */ "./src/app/pages/tabs/tab2/tab2.module.ts")).then(m => m.Tab2PageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'tabs/modulos',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/modulos',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-tabs-tabs-module-es2015.js.map