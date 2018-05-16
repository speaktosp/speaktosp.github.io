(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/product-form/product-form.component */ "./src/app/components/product-form/product-form.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"] },
    { path: 'products', component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"] },
    { path: 'add', component: _components_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_2__["ProductFormComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: '**', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Product management console';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/product-form/product-form.component */ "./src/app/components/product-form/product-form.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _components_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_5__["ProductFormComponent"],
                _components_products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"]
            ],
            providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<h1>Saravana Perumal Ramachandran</h1>\n<BR>\n<p>\nI have 12 years of overall work experience with strong experience in Full Stack application development using Java, JavaScript, and AWS Cloud technologies. I have worked with Banking and financial services before developing customer-facing applications for companies like Citi Bank, Rabo Bank and Samba Bank.\n</p>\n<p>\n  For the past 8 years, I have delivered on multiple projects for clients around the globe managing big in-house and distributed offshore teams. I am self-motivated and am always looking to learn new technologies.\n</p>\n<p>\nI am Certified Scrum Master and have managed agile teams leading the standup meetings, Retrospective and Sprint reviews.\nPlease find my resume attached herewith.\nPlease call me at 860 817 9517, to reach out me regarding any questions.\n</p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;\"  class=\"container\">\n\tCreated by <a class=\"ml-1 float-none\" href=\"https://www.linkedin.com/in/saravana-perumal-ramachandran-4249084/\" target=\"_blank\">Saravana</a>\n</div>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-dark bg-primary mb-4\">\n  <div class=\"container\">\n    <a routerLink=\"/\" class=\"navbar-brand\">Product Management Console</a>\n    <div>\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a routerLink=\"/\" class=\"nav-link\">Home</a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a routerLink=\"/about\" class=\"nav-link\">About Me</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>404 Page Not Found</h3>\n<p>Sorry, there is nothing to see here...</p>\n"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/product-form/product-form.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/product-form/product-form.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n/* Hide default HTML checkbox */\n.switch input {display:none;}\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s;\n}\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: .4s;\n}\ninput:checked + .slider {\n  background-color: #2196F3;\n}\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  transform: translateX(26px);\n}\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n.slider.round:before {\n  border-radius: 50%;\n}\n"

/***/ }),

/***/ "./src/app/components/product-form/product-form.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/product-form/product-form.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-body mb-3\">\n  <form #productForm=\"ngForm\" (ngSubmit)=\"onSubmit(productForm)\">\n      <div class=\"form-group\">\n        <label>Product Name</label>\n        <input\n          type=\"text\"\n          [(ngModel)]=\"product.name\"\n          [ngClass]=\"{'is-invalid':productName.errors && productName.touched}\"\n          class=\"form-control\"\n          name=\"name\"\n          #productName=\"ngModel\"\n          minlength=\"2\"\n          maxlength=\"35\"\n          required\n        >\n        <div [hidden]=\"!productName.errors?.required\" class=\"invalid-feedback\">\n          Product name required\n        </div>\n\n        <div [hidden]=\"!productName.errors?.minlength\" class=\"invalid-feedback\">\n            Must be at least 2 characters\n        </div>\n        <div [hidden]=\"!productName.errors?.maxlength\" class=\"invalid-feedback\">\n            Can not exceed 35 characters\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>SKU</label>\n        <input\n          type=\"number\"\n          [(ngModel)]=\"product.sku\"\n          [ngClass]=\"{'is-invalid':productSku.errors && productSku.touched}\"\n          class=\"form-control\"\n          name=\"sku\"\n          #productSku=\"ngModel\"\n          min=\"0\" max=\"10000000\"\n          required\n        >\n        <div [hidden]=\"!productSku.errors?.required\" class=\"invalid-feedback\">\n          SKU required\n        </div>\n        <div [hidden]=\"!productSku.errors?.pattern\" class=\"invalid-feedback\">\n            Not a valid number\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>Brand Name</label>\n        <input\n          type=\"text\"\n          [(ngModel)]=\"product.brand\"\n          [ngClass]=\"{'is-invalid':productBrand.errors && productBrand.touched}\"\n          class=\"form-control\"\n          name=\"brand\"\n          #productBrand=\"ngModel\"\n          minlength=\"2\"\n          maxlength=\"20\"\n        >\n        <div [hidden]=\"!productBrand.errors?.minlength\" class=\"invalid-feedback\">\n            Must be at least 2 characters\n        </div>\n        <div [hidden]=\"!productBrand.errors?.maxlength\" class=\"invalid-feedback\">\n            Can not exceed 20 characters\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>Description</label>\n        <input\n          type=\"textarea\"\n          [(ngModel)]=\"product.description\"\n          [ngClass]=\"{'is-invalid':productDescription.errors && productDescription.touched}\"\n          class=\"form-control\"\n          name=\"description\"\n          #productDescription=\"ngModel\"\n          minlength=\"50\"\n          maxlength=\"2000\"\n        >\n        <div [hidden]=\"!productDescription.errors?.minlength\" class=\"invalid-feedback\">\n            Must be at least 50 characters\n        </div>\n        <div [hidden]=\"!productDescription.errors?.maxlength\" class=\"invalid-feedback\">\n            Can not exceed 2000 characters\n        </div>\n      </div>\n      <div class=\"form-group\">\n          <label>Activate</label> <BR/>\n          <label class=\"switch\">\n          <input type=\"checkbox\" name=\"isActive\" [(ngModel)]=\"product.isActive\" [checked]=\"product.isActive\" (change)=\"product.isActive = !product.isActive\">\n          <span class=\"slider round\"></span>\n          </label>\n      </div>\n    <input [hidden]=\"!isNew\" type=\"submit\" value=\"Add Product\" class=\"btn btn-light mr-3\" [disabled]=\"!productForm.form.valid\" >\n    <input [hidden]=\"isNew\" type=\"submit\" value=\"Edit Product\" class=\"btn btn-light mr-3\" [disabled]=\"!productForm.form.valid\" >\n\n    <button (click)=\"clearState()\" type=\"button\" class=\"btn btn-warning\" [hidden]=!productForm.form.valid>Clear</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/product-form/product-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/product-form/product-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function() { return ProductFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductFormComponent = /** @class */ (function () {
    function ProductFormComponent(productService) {
        this.productService = productService;
        this.isActive = false;
        this.showUserForm = false;
        this.isNew = true;
    }
    ProductFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to the selectedProduct observable
        this.productService.selectedProduct.subscribe(function (product) {
            if (product.id !== null) {
                _this.isNew = false;
                _this.product = product;
                _this.product.isActive = true;
            }
        });
        this.clearState();
    };
    ProductFormComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            console.log('Form is not valid');
            return;
        }
        var IMAGE_URL = 'https://picsum.photos/400?product';
        // Check if new product
        if (this.isNew) {
            value.id = this.generateId();
            value.date = new Date();
            value.image = IMAGE_URL + Math.floor(Math.random() * 1060) + 1;
            // Add product
            this.productService.addProduct(value);
        }
        else {
            value.date = new Date();
            value.image = IMAGE_URL + Math.floor(Math.random() * 1060) + 1;
            // Update product
            this.productService.updateProduct(value);
        }
        this.clearState();
    };
    ProductFormComponent.prototype.clearState = function () {
        this.product = {
            id: '',
            sku: undefined,
            name: '',
            description: '',
            brand: '',
            isActive: true,
            date: ''
        };
        this.isNew = true;
        this.form.reset();
        this.productService.clearState();
    };
    ProductFormComponent.prototype.generateId = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('productForm'),
        __metadata("design:type", Object)
    ], ProductFormComponent.prototype, "form", void 0);
    ProductFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-form',
            template: __webpack_require__(/*! ./product-form.component.html */ "./src/app/components/product-form/product-form.component.html"),
            styles: [__webpack_require__(/*! ./product-form.component.css */ "./src/app/components/product-form/product-form.component.css")]
        }),
        __metadata("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], ProductFormComponent);
    return ProductFormComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/products/products.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-date {\r\n  color: #777;\r\n}"

/***/ }),

/***/ "./src/app/components/products/products.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/products/products.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-product-form></app-product-form> \n<ul class=\"list-group\" *ngIf=\"loaded && products.length > 0\">\n  <li *ngFor=\"let product of products\" [class.list-group-item-secondary]=\"selectedProduct === product\"\n    class=\"list-group-item d-flex justify-content-between align-items-center\"\n    [class.bg-light]=\"product.isActive\" [style.border-color]=\"product.isActive ? 'green' : ''\">\n    <div class=\"row mb-5\">\n      <div class=\"col-sm-8\">\n        <h3 [ngStyle]=\"currentStyles\"> <a (click)=\"onSelect(product)\" href=\"#\">{{ product.name }}</a>  </h3>\n          <ul class=\"list-group\">\n            <li class=\"list-group-item\" *ngIf=\"product.sku\">SKU: {{ product.sku }}</li>\n            <li class=\"list-group-item\" *ngIf=\"showExtended && product.brand\">Brand: {{ product.brand }}</li>\n            <li class=\"list-group-item\" *ngIf=\"showExtended && product.description\">{{ product.description.length > 80 ? product.description.substring(0,80) : product.description}}</li>\n            <li class=\"list-group-item\" *ngIf=\"showExtended && product.date\">Last Modified on: {{ product.date | date: 'short'}}</li>\n          </ul>\n          <div class=\"row mt-4\">\n            <div class=\"col-sm-2\">\n              <a (click)=\"onSelect(product)\" class=\"btn btn-warning pull-right\"  href=\"#\">Edit</a>\n            </div>\n            <div class=\"col-sm-2\">\n              <button (click)=\"onDelete(product)\" type=\"button\" class=\"btn btn-danger pull-right\" [hidden]=!product.isActive>Delete</button>\n            </div>\n          </div>\n      </div>\n      <div class=\"col-sm-4 pull-right\" >\n        <img *ngIf=\"product.image\" class=\"img-fluid\" [src]=\"product.image\" alt=\"\">\n      </div>\n    </div>\n  </li>\n</ul>\n\n<div *ngIf=\"loaded && products.length == 0\">\n  <h5>There are no products in the system</h5>\n</div>\n\n<div *ngIf=\"!loaded\">\n  <h5>Loading...</h5>\n</div>\n"

/***/ }),

/***/ "./src/app/components/products/products.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productService) {
        this.productService = productService;
        this.loaded = false;
        this.showExtended = true;
        this.currentClasses = {};
        this.currentStyles = {};
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.stateClear.subscribe(function (clear) {
            if (clear) {
                _this.selectedProduct = { id: '', name: '', sku: undefined, description: '', brand: '', image: '', date: '', isActive: true };
            }
        });
        this.productService.getProducts().subscribe(function (products) {
            _this.products = products;
            _this.loaded = true;
        });
    };
    ProductsComponent.prototype.onSelect = function (product) {
        this.productService.setFormProduct(product);
        this.selectedProduct = product;
    };
    ProductsComponent.prototype.onDelete = function (product) {
        if (confirm('Are you sure?')) {
            this.productService.deleteProduct(product);
        }
    };
    ProductsComponent.prototype.setCurrentClasses = function () {
        this.currentClasses = {
            'big-text': this.showExtended
        };
    };
    ProductsComponent.prototype.setCurrentStyles = function () {
        this.currentStyles = {
            'padding-top': this.showExtended ? '0' : '40px',
            'font-size': this.showExtended ? '' : '40px'
        };
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/components/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/components/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = /** @class */ (function () {
    function ProductService() {
        // this.products = [
        //   {id: '1', text: 'Generated components', date: new Date('12/26/2017 12:54:23')},
        //   {id: '2', text: 'Added Bootstrap', date: new Date('12/27/2017 9:33:13')},
        //   {id: '3', text: 'Added products component', date: new Date('12/27/2017 12:00:23')}
        // ]
        this.productSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ id: '', name: '', sku: -1, description: '', brand: '', image: '', date: '', isActive: false });
        this.selectedProduct = this.productSource.asObservable();
        this.stateSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.stateClear = this.stateSource.asObservable();
        this.products = [];
    }
    ProductService.prototype.getProducts = function () {
        if (localStorage.getItem('products') === null) {
            this.products = [];
        }
        else {
            this.products = JSON.parse(localStorage.getItem('products'));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.products.sort(function (a, b) {
            return b.date = a.date;
        }));
    };
    ProductService.prototype.setFormProduct = function (product) {
        this.productSource.next(product);
    };
    ProductService.prototype.addProduct = function (product) {
        this.products.unshift(product);
        // Add to local storage
        localStorage.setItem('products', JSON.stringify(this.products));
    };
    ProductService.prototype.updateProduct = function (product) {
        var _this = this;
        this.products.forEach(function (cur, index) {
            if (product.id === cur.id) {
                _this.products.splice(index, 1);
            }
        });
        this.products.unshift(product);
        // Update local storage
        localStorage.setItem('products', JSON.stringify(this.products));
    };
    ProductService.prototype.deleteProduct = function (product) {
        var _this = this;
        this.products.forEach(function (cur, index) {
            if (product.id === cur.id) {
                _this.products.splice(index, 1);
            }
        });
        // Delete from local storage
        localStorage.setItem('products', JSON.stringify(this.products));
    };
    ProductService.prototype.clearState = function () {
        this.stateSource.next(true);
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/user/Pictures/Evergage/ProductManagementConsole/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map