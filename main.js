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

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <app-product-form></app-product-form>\n  <app-products></app-products>\n</div>"

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
                _components_products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = "<nav class=\"navbar navbar-dark bg-dark mb-3\">\n  <div class=\"container\">\n    <a href=\"/\" class=\"navbar-brand\">Product Management Console</a>\n  </div>\n</nav>\n"

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

/***/ "./src/app/components/product-form/product-form.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/product-form/product-form.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/product-form/product-form.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/product-form/product-form.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-body mb-3\">\n  <form (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <input type=\"name\" name=\"name\" [(ngModel)]=\"name\" class=\"form-control\" placeholder=\"Add a product...\">\n    </div>\n    <input type=\"submit\" value=\"Add Product\" class=\"btn btn-light mr-3\" [disabled]=\"!this.name\">\n    <button (click)=\"clearState()\" type=\"button\" class=\"btn btn-warning\" [hidden]=!this.name>Clear</button>\n  </form>\n</div>\n"

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
        this.isNew = true;
    }
    ProductFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to the selectedProduct observable
        this.productService.selectedProduct.subscribe(function (product) {
            if (product.id !== null) {
                _this.isNew = false;
                _this.id = product.id;
                _this.name = product.name;
                _this.date = product.date;
                _this.isActive = true;
            }
        });
    };
    ProductFormComponent.prototype.onSubmit = function () {
        var IMAGE_URL = 'https://picsum.photos/400?product';
        // Check if new product
        if (this.isNew) {
            // Create a new product
            var newProduct = {
                id: this.generateId(),
                name: this.name,
                sku: this.sku ? this.sku : Math.floor(Math.random() * 1060) + 1,
                description: this.description ? this.description : this.randomString(40),
                brand: this.brand ? this.brand : this.randomString(10),
                date: new Date(),
                image: IMAGE_URL + Math.floor(Math.random() * 1060) + 1,
                isActive: (Math.floor((Math.random() * 10) + 1) > 5)
            };
            // Add product
            this.productService.addProduct(newProduct);
        }
        else {
            // Create product to be updated
            var updProduct = {
                id: this.id,
                name: this.name,
                sku: this.sku ? this.sku : Math.floor(Math.random() * 1060) + 1,
                description: this.description ? this.description : this.randomString(40),
                brand: this.brand ? this.brand : this.randomString(10),
                date: new Date(),
                image: IMAGE_URL + Math.floor(Math.random() * 1060) + 1,
                isActive: (Math.floor((Math.random() * 10) + 1) > 5)
            };
            // Update product
            this.productService.updateProduct(updProduct);
        }
        // Clear state
        this.clearState();
    };
    ProductFormComponent.prototype.clearState = function () {
        this.isNew = true;
        this.id = '';
        this.name = '';
        this.date = '';
        this.isActive = false;
        this.productService.clearState();
    };
    ProductFormComponent.prototype.randomString = function (length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    ProductFormComponent.prototype.generateId = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
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

module.exports = "<ul class=\"list-group\" *ngIf=\"loaded && products.length > 0\">\n  <li *ngFor=\"let product of products\" [class.list-group-item-secondary]=\"selectedProduct === product\"\n    class=\"list-group-item d-flex justify-content-between align-items-center\"\n    [class.bg-light]=\"product.isActive\" [style.border-color]=\"product.isActive ? 'green' : ''\">\n    <div class=\"row mb-5\">\n      <div class=\"col-sm-8\">\n        <h3 [ngStyle]=\"currentStyles\"> <a (click)=\"onSelect(product)\" href=\"#\">{{ product.name }}</a>  </h3>\n          <ul class=\"list-group\" *ngIf=\"showExtended && product.sku && product.date\">\n            <li class=\"list-group-item\">SKU: {{ product.sku }}</li>\n            <li class=\"list-group-item\">Date: {{ product.date | date: 'short'}}</li>\n          </ul>\n\n          <ul class=\"list-group\" *ngIf=\"showExtended && product.brand && product.description\">\n            <li class=\"list-group-item\">Brand: {{ product.brand }}</li>\n            <li class=\"list-group-item\">Description: {{ product.description}}</li>\n          </ul>\n          <button (click)=\"onDelete(product)\" type=\"button\" class=\"btn btn-danger pull-right mt-5\" [hidden]=!product.isActive>Delete</button>\n      </div>\n      <div class=\"col-sm-4 pull-right\" >\n        <img *ngIf=\"product.image\" class=\"img-fluid\" [src]=\"product.image\" alt=\"\">\n      </div>\n    </div>\n  </li>\n</ul>\n\n<div *ngIf=\"loaded && products.length == 0\">\n  <h5>There are no products in the system</h5>\n</div>\n\n<div *ngIf=\"!loaded\">\n  <h5>Loading...</h5>\n</div>\n"

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
                _this.selectedProduct = { id: '', name: '', sku: -1, description: '', brand: '', image: '', date: '', isActive: false };
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

module.exports = __webpack_require__(/*! /Users/user/Pictures/Evergage/ProductApplication_version2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map