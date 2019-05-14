webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/commonpages/commonpages.module": [
		"../../../../../src/app/modules/commonpages/commonpages.module.ts",
		"commonpages.module"
	],
	"./modules/student/student.module": [
		"../../../../../src/app/modules/student/student.module.ts",
		"student.module"
	],
	"./modules/teacher/teacher.module": [
		"../../../../../src/app/modules/teacher/teacher.module.ts",
		"teacher.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loader {\r\n    position: fixed;\r\n    z-index: 999;\r\n    margin: auto;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    border: 7px solid #f3f3f3;\r\n    border-radius: 50%;\r\n    border-top:7px solid #7db452;\r\n    width: 68px;\r\n    height: 68px;\r\n    -webkit-animation: spin 2s linear infinite;\r\n    animation: spin 2s linear infinite;\r\n  }\r\n  \r\n \r\n  @-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); }\r\n  }\r\n  \r\n  @keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet (deactivate)=\"onDeactivate()\">\r\n        <div *ngIf=\"showLoader\">\r\n                <div class=\"loader\"></div>\r\n        </div>\r\n\r\n</router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_shared_loader__ = __webpack_require__("../../../../../src/app/modules/shared/loader.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(loaderService) {
        this.loaderService = loaderService;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showLoader = false;
        this.loaderService.getValue.subscribe(function (val) {
            _this.showLoader = val;
        });
    };
    AppComponent.prototype.onDeactivate = function () {
        document.body.scrollTop = 0;
        // Alternatively, you can scroll to top by using this other call:
        //window.scrollTo(0, 0)
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__modules_shared_loader__["a" /* LoaderService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_shared_shared_module__ = __webpack_require__("../../../../../src/app/modules/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_shared_loader__ = __webpack_require__("../../../../../src/app/modules/shared/loader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_shared_header_footer_service__ = __webpack_require__("../../../../../src/app/modules/shared/header-footer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_shared_header_header_component__ = __webpack_require__("../../../../../src/app/modules/shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__header_service__ = __webpack_require__("../../../../../src/app/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular4_social_login__ = __webpack_require__("../../../../angular4-social-login/angular4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular4_social_login__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var config = new __WEBPACK_IMPORTED_MODULE_13_angular4_social_login__["AuthServiceConfig"]([
    {
        id: __WEBPACK_IMPORTED_MODULE_13_angular4_social_login__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_13_angular4_social_login__["GoogleLoginProvider"]("460998218213-gtgo8gldgutbrcio1lomc1i1aievgoml.apps.googleusercontent.com")
    },
    {
        id: __WEBPACK_IMPORTED_MODULE_13_angular4_social_login__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_13_angular4_social_login__["FacebookLoginProvider"]("148641569191133")
    }
]);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__modules_shared_header_header_component__["a" /* HeaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_8__modules_shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13_angular4_social_login__["SocialLoginModule"].initialize(config)
            ],
            exports: [],
            providers: [__WEBPACK_IMPORTED_MODULE_9__modules_shared_loader__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_10__modules_shared_header_footer_service__["a" /* HeaderFooterService */], __WEBPACK_IMPORTED_MODULE_12__header_service__["a" /* HeaderService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var appRoutes = [
    { path: '', loadChildren: './modules/commonpages/commonpages.module#CommonpagesModule' },
    { path: 'teacher', loadChildren: './modules/teacher/teacher.module#TeacherModule' },
    { path: 'student', loadChildren: './modules/student/student.module#StudentModule' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderService = (function () {
    function HeaderService() {
        this.bs = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
    }
    HeaderService.prototype.setHeaderValue = function (val) {
        this.bs.next(val);
    };
    Object.defineProperty(HeaderService.prototype, "getHeaderValue", {
        get: function () {
            return this.bs.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    HeaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], HeaderService);
    return HeaderService;
}());



/***/ }),

/***/ "../../../../../src/app/models/user-registration.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegistration; });
var UserRegistration = (function () {
    /**
     *
     */
    function UserRegistration() {
    }
    return UserRegistration;
}());



/***/ }),

/***/ "../../../../../src/app/modules/shared/components/forgot/forgot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/shared/components/forgot/forgot.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"modal-bg\">\r\n    <div class=\"forgot-modal custom-modal clearfix\" id=\"LogInmodal\">\r\n        <div class=\"modal-inner\">\r\n            <div class=\"content-section\">\r\n                <a href=\"javascript:void(0);\" class=\"modal-cross\"><img src=\"images/cancel.png\" alt=\"close\"></a>\r\n                <h2 class=\"modal-head text-center\">Forgot Password?</h2>\r\n                <p class=\"modal-para text-center\">Enter your email address below and we will send you an email allowing to reset it.</p>\r\n                <div class=\"icon-image\">\r\n                    <figure class=\"icon-bg\">\r\n                        <img src=\"images/lock.png\" alt=\"lock\">\r\n                    </figure>\r\n                </div>\r\n                <form action=\"reset.html\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-wrap fixed-widthinput text-center\">\r\n                            <input type=\"Email\" name=\"\" value=\"\" placeholder=\"Email\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                    <div class=\"button-wrapper text-center\">\r\n                        <button type=\"submit\" name=\"\" value=\"\" class=\"gradient custom-btn\">Reset Password</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/modules/shared/components/forgot/forgot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgotComponent = (function () {
    function ForgotComponent() {
    }
    ForgotComponent.prototype.ngOnInit = function () {
    };
    ForgotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__("../../../../../src/app/modules/shared/components/forgot/forgot.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/shared/components/forgot/forgot.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/shared/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/shared/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- home page start -->\r\n<!-- <div class=\"modal-bg\">\r\n    <div class=\"LogIn-modal custom-modal clearfix\" id=\"LogInmodal\">\r\n        <div class=\"modal-inner\">\r\n            <div class=\"image-section\">\r\n                <img src=\"assets/images/login.png\" alt=\"\">\r\n            </div>\r\n            <div class=\"content-section\">\r\n                <h2 class=\"modal-head text-center\">Sign In</h2>\r\n                <p class=\"modal-para\">Lorem Ipsum is simply dummy text of the printing. </p>\r\n                <form action=\"Student_Profile_Screen1.html\">\r\n                    <div class=\"custom-radio\">\r\n                        <input type=\"radio\" value=\"\" name=\"radio1\" id=\"student\" checked />\r\n                        <label for=\"student\">Student</label>\r\n                    </div>\r\n                    <div class=\"custom-radio\">\r\n                        <input type=\"radio\" value=\"\" name=\"radio1\" id=\"tutor\" />\r\n                        <label for=\"tutor\">Tutor</label>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-wrap\">\r\n                            <input type=\"text\" name=\"\" value=\"\" class=\"\" placeholder=\"Email\">\r\n                            <span class=\"error-inputmsg\">This Field is Requried </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-wrap\">\r\n                            <input type=\"password\" name=\"\" value=\"\" class=\"\" placeholder=\"Password\">\r\n                            <span class=\"error-inputmsg\">This Field is Requried </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"custom-check\">\r\n                        <input type=\"checkbox\" value=\"\" name=\"check\" id=\"Remember\" />\r\n                        <label for=\"Remember\">Remember Me</label>\r\n                    </div>\r\n                    <a href=\"forgot.html\" class=\"forgot-psw\">Forgot Password</a>\r\n                    <div class=\"clearfix\"></div>\r\n                    <div class=\"button-wrapper text-center\">\r\n                        <button type=\"submit\" name=\"\" value=\"\" class=\"gradient custom-btn\">Sign In</button>\r\n                    </div>\r\n                    <div class=\"other-option\"><span> Or Login With </span></div>\r\n                    <div class=\"social-icon\">\r\n                        <a href=\"javascript:void\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a>\r\n                        <a href=\"javascript:void\" class=\"google-plus\"><i class=\"fa fa-google-plus\"></i></a>\r\n                    </div>\r\n                </form>\r\n                <div class=\"footer-modal text-center\">\r\n                    <p class=\"para\">Don't have an account? <a href=\"signup.html\" class=\"signup\"> Sign Up </a></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n<!-- home page end -->"

/***/ }),

/***/ "../../../../../src/app/modules/shared/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/modules/shared/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/shared/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/shared/components/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/shared/components/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- home page start -->\r\n<!-- <div class=\"modal-bg\">\r\n    <div class=\"signup-modal custom-modal clearfix\" id=\"LogInmodal\">\r\n        <div class=\"modal-inner\">\r\n            <div class=\"image-section\">\r\n                <img src=\"assets/images/signup.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"content-section\">\r\n                <h2 class=\"modal-head text-center\">Sign Up</h2>\r\n                <p class=\"modal-para\">Lorem Ipsum is simply dummy text of the printing. </p>\r\n                <form action=\"\">\r\n                    <div class=\"custom-radio\">\r\n                        <input type=\"radio\" value=\"\" name=\"radio1\" id=\"student\" checked />\r\n                        <label for=\"student\">Student</label>\r\n                    </div>\r\n                    <div class=\"custom-radio\">\r\n                        <input type=\"radio\" value=\"\" name=\"radio1\" id=\"tutor\" />\r\n                        <label for=\"tutor\">Tutor</label>\r\n                    </div>\r\n                    <div class=\"form-group col50\">\r\n                        <div class=\"input-wrap col50right\">\r\n                            <input type=\"text\" name=\"\" value=\"\" placeholder=\"First Name\">\r\n                            <span class=\"error-inputmsg\">This Field is Requried </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col50\">\r\n                        <div class=\"input-wrap col50left\">\r\n                            <input type=\"text\" name=\"\" value=\"\" placeholder=\"Last name\">\r\n                            <span class=\"error-inputmsg\">This Field is Requried </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-wrap\">\r\n                            <input type=\"text\" name=\"\" value=\"\" placeholder=\"Email\">\r\n                            <span class=\"error-inputmsg\">This Field is Requried </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-wrap\">\r\n                            <input type=\"password\" name=\"\" value=\"\" placeholder=\"Password\">\r\n                            <span class=\"error-inputmsg\">This Field is Requried </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"button-wrapper text-center\">\r\n                        <button type=\"submit\" name=\"\" value=\"\" class=\"gradient custom-btn\">Sign Up</button>\r\n                    </div>\r\n                    <div class=\"other-option\"><span> Or Connect With </span></div>\r\n                    <div class=\"social-icon\">\r\n                        <a href=\"javascript:void\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a>\r\n                        <a href=\"javascript:void\" class=\"google-plus\"><i class=\"fa fa-google-plus\"></i></a>\r\n                    </div>\r\n                </form>\r\n                <div class=\"footer-modal text-center\">\r\n                    <p class=\"para\">Already have an account <a href=\"login.html\" class=\"signup\"> Sign In </a></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n<!-- home page end -->"

/***/ }),

/***/ "../../../../../src/app/modules/shared/components/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/modules/shared/components/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/shared/components/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/shared/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* footer css \r\n*******************************/\r\n\r\n.footer-listing {\r\n    background: #001517;\r\n    text-align: center;\r\n    padding: 0 30px 30px;\r\n}\r\n\r\n.footer-listing .heading {\r\n    font-size: 20px;\r\n    color: #82c84a;\r\n    padding-top: 30px;\r\n}\r\n\r\n.footer-listing li {\r\n    display: inline-block;\r\n}\r\n\r\n.footer-listing li a {\r\n    font-size: 14px;\r\n    color: #fff;\r\n    padding: 15px 15px;\r\n    display: block;\r\n    position: relative;\r\n}\r\n\r\n.footer-listing li a:hover,\r\n.footer-listing li a:focus {\r\n    color: #82c84a;\r\n}\r\n\r\n.footer-listing li a:before {\r\n    content: '';\r\n    position: absolute;\r\n    right: 0;\r\n    background: #fff;\r\n    width: 2px;\r\n    height: 15px;\r\n    top: 18px;\r\n}\r\n\r\n.footer-listing li:last-child a:before {\r\n    display: none;\r\n}\r\n\r\n.footer-copyright {\r\n    background: #001e21;\r\n}\r\n\r\n.footer-copyright p {\r\n    font-size: 14px;\r\n    color: #b6b6b6;\r\n    font-weight: 100;\r\n    float: left;\r\n    padding: 15px 0;\r\n}\r\n\r\n.footer-copyright .social-icons {\r\n    float: right;\r\n}\r\n\r\n.footer-copyright .social-icons>li {\r\n    display: inline-block;\r\n}\r\n\r\n.footer-copyright .social-icons>li>a {\r\n    display: block;\r\n    padding: 10px 5px;\r\n}\r\n\r\n.footer-copyright .social-icons>li>a:hover,\r\n.footer-copyright .social-icons>li>a:focus {\r\n    -webkit-transform: scale(1.3);\r\n            transform: scale(1.3);\r\n}\r\n\r\n\r\n/* footer css end \r\n*******************************/\r\n\r\n@media(max-width:767px) {\r\n    .footer-listing li a {\r\n        font-size: 13px;\r\n        padding: 10px 12px;\r\n    }\r\n    .footer-listing li a:before {\r\n        height: 10px;\r\n        top: 15px;\r\n    }\r\n    .footer-listing {\r\n        padding: 0 10px 20px;\r\n    }\r\n    .footer-copyright p {\r\n        font-size: 13px;\r\n        padding: 12px 0;\r\n    }\r\n    .footer-listing .heading {\r\n        font-size: 16px;\r\n    }\r\n}\r\n\r\n@media(max-width:480px) {\r\n    .footer-copyright p {\r\n        width: 100%;\r\n        text-align: center;\r\n    }\r\n    .footer-copyright .social-icons {\r\n        width: 100%;\r\n        text-align: center;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- footer -->\r\n<footer>\r\n    <div class=\"footer-listing\">\r\n        <ul class=\"innerlinks\">\r\n            <h3 class=\"heading\">KoalaTalk</h3>\r\n            <li>\r\n                <a [class.disabled]=\"allowOrNot\" href=\"javascript:void(0);\">About Us </a>\r\n            </li>\r\n            <li>\r\n                <a [class.disabled]=\"allowOrNot\" href=\"javascript:void(0);\">Privacy Policy</a>\r\n            </li>\r\n            <li>\r\n                <a [class.disabled]=\"allowOrNot\" href=\"javascript:void(0);\">Contact Us</a>\r\n            </li>\r\n            <li>\r\n                <a [class.disabled]=\"allowOrNot\" href=\"javascript:void(0);\">Press</a>\r\n            </li>\r\n            <li>\r\n                <a [class.disabled]=\"allowOrNot\" href=\"javascript:void(0);\">Blog</a>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"innerlinks\">\r\n            <h3 class=\"heading\">Tutors</h3>\r\n            <li>\r\n                <a [class.disabled]=\"allowOrNot\" href=\"javascript:void(0);\">English Tutor</a>\r\n            </li>\r\n            <li>\r\n                <a [class.disabled]=\"allowOrNot\" href=\"javascript:void(0);\">Spanish Tutor</a>\r\n            </li>\r\n            <li>\r\n                <a [class.disabled]=\"allowOrNot\" href=\"javascript:void(0);\">Chinese Tutor</a>\r\n            </li>\r\n            <li>\r\n                <a [class.disabled]=\"allowOrNot\" href=\"javascript:void(0);\">Korean Tutor</a>\r\n            </li>\r\n            <li>\r\n                <a [class.disabled]=\"allowOrNot\" href=\"javascript:void(0);\">Chinese Tutor</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"footer-copyright clearfix\">\r\n        <div class=\"container\">\r\n            <p>© 2017 KoalaTalk. All rights reserved.</p>\r\n            <ul class=\"social-icons\">\r\n                <li>\r\n                    <a [class.disabled]=\"allowOrNot\" href=\"javascript:void(0);\"><img src=\"assets/images/facebook.png\" alt=\"facebook\"></a>\r\n                </li>\r\n                <li>\r\n                    <a [class.disabled]=\"allowOrNot\" href=\"javascript:void(0);\"><img src=\"assets/images/twitter.png\" alt=\"twitter\"></a>\r\n                </li>\r\n                <li>\r\n                    <a [class.disabled]=\"allowOrNot\" href=\"javascript:void(0);\"><img src=\"assets/images/google-plus.png\" alt=\"google-plus\"></a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</footer>\r\n<!-- footer end -->"

/***/ }),

/***/ "../../../../../src/app/modules/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_service__ = __webpack_require__("../../../../../src/app/header.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = (function () {
    function FooterComponent(studentService, headerService) {
        this.studentService = studentService;
        this.headerService = headerService;
    }
    FooterComponent.prototype.ngOnInit = function () {
        //this.chckForHeaders();
        var _this = this;
        this.headerService.bs.subscribe(function (x) {
            console.log('=============', x);
            _this.allowOrNot = x;
        });
    };
    //check for footer
    FooterComponent.prototype.chckForHeaders = function () {
        var _this = this;
        if (localStorage.getItem('auth-token') != undefined) {
            this.studentService.checkForHeaders().subscribe(function (data) {
                if (data.code == '200') {
                    _this.allowOrNot = !data.headerStatus;
                }
            }, function (error) {
                console.log(error.code);
            });
        }
        else {
            this.allowOrNot = false;
        }
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/modules/shared/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/shared/footer/footer.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_student_service__["a" /* StudentService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_student_service__["a" /* StudentService */],
            __WEBPACK_IMPORTED_MODULE_2__header_service__["a" /* HeaderService */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/shared/header-footer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderFooterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderFooterService = (function () {
    function HeaderFooterService() {
        this.status = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
    }
    HeaderFooterService.prototype.display = function (value) {
        this.status.next(value);
    };
    Object.defineProperty(HeaderFooterService.prototype, "getStatus", {
        get: function () {
            return this.status.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    HeaderFooterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], HeaderFooterService);
    return HeaderFooterService;
}());



/***/ }),

/***/ "../../../../../src/app/modules/shared/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* header css\r\n*******************************/\r\n\r\n.header-wrapper {\r\n    background: #ffffff;\r\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);\r\n    width: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    z-index: 99;\r\n}\r\n\r\n.logo-wrpper {\r\n    float: left;\r\n    padding: 25px 0 20px;\r\n}\r\n\r\n.menubar-wrapper {\r\n    float: right;\r\n}\r\n\r\n\r\n/*-- menu section --*/\r\n\r\n.navbar-list {\r\n    float: right;\r\n}\r\n\r\n.navbar-list>li {\r\n    display: inline-block;\r\n}\r\n\r\n.navbar-list>li>a {\r\n    display: block;\r\n    text-transform: uppercase;\r\n    font-size: 14px;\r\n    padding: 30px 10px;\r\n    color: #52686e;\r\n    font-weight: 500;\r\n}\r\n\r\n\r\n/*-- menu end --*/\r\n\r\n\r\n/*-- navbar-buttons --*/\r\n\r\n.navbar-buttons {\r\n    float: right;\r\n    margin-left: 5px;\r\n}\r\n\r\n.navbar-buttons>li {\r\n    display: inline-block;\r\n    padding: 18px 5px;\r\n}\r\n\r\n.navbar-buttons>li.login a {\r\n    font-size: 16px;\r\n    color: #52686e;\r\n    font-weight: 500;\r\n    border: solid 2px #52686e;\r\n    padding: 8px 18px;\r\n    border-radius: 25px;\r\n    display: block;\r\n    background: #fff;\r\n}\r\n\r\n.navbar-buttons>li.login a:hover,\r\n.navbar-buttons>li.login a:focus {\r\n    background: #52686e;\r\n    color: #fff;\r\n}\r\n\r\n.navbar-buttons>li.signup a {\r\n    font-size: 16px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    padding: 10px 18px;\r\n    border-radius: 25px;\r\n    display: block;\r\n}\r\n\r\n.custom-select {\r\n    display: block;\r\n    max-width: 100%;\r\n    vertical-align: top;\r\n    background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAJCAYAAADtj3ZXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkEzOTRCODUzRDM0NTExRTdCOTVCRTZDNzg2OTU5RTczIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkEzOTRCODU0RDM0NTExRTdCOTVCRTZDNzg2OTU5RTczIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTM5NEI4NTFEMzQ1MTFFN0I5NUJFNkM3ODY5NTlFNzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTM5NEI4NTJEMzQ1MTFFN0I5NUJFNkM3ODY5NTlFNzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz48Q+M5AAAAlUlEQVR42mIMyshjIBcwQWlWIJ4OxJYE1JtB1bEhawZxfIB4JxDb4NBoBcS7gNgfXfNXIHYC4o9AvB2IbbFo3AbE36DqviBrBoHbUIkPUAPsoOLWUD7IAkcgvoHuZ2QDHID4HdSmAqjGL1CNN7EFGDK4i2RAPxB/gmq8hSu00cE9qAGLoPQtbIpY8EQLyIB4fPEGEGAA0VggYFpe2MQAAAAASUVORK5CYII=);\r\n    border: none;\r\n    background-repeat: no-repeat;\r\n    background-size: auto;\r\n    background-position: center right;\r\n    color: #52686e;\r\n    font-size: 14px;\r\n    text-transform: uppercase;\r\n    padding: 12px 15px 12px 0;\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n}\r\n\r\n.navbar-list>li>a:hover,\r\n.navbar-list>li>a:focus,\r\n.navbar-list>li>a.active {\r\n    color: #89bd60;\r\n}\r\n\r\n\r\n/*-- navbar-buttons end --*/\r\n\r\n.navbar-buttons .toggle-button {\r\n    display: none;\r\n}\r\n\r\n\r\n/*----------- after login ----------------*/\r\n\r\n.notification a,\r\n.message-wrap a {\r\n    display: block;\r\n    position: relative;\r\n    margin: 0 5px;\r\n}\r\n\r\n.notification .badge {\r\n    background: #e91000;\r\n}\r\n\r\n.message-wrap .badge {\r\n    background: #659b3a;\r\n}\r\n\r\n.navbar-buttons .badge {\r\n    position: absolute;\r\n    top: -9px;\r\n    left: 12px;\r\n    width: 22px;\r\n    height: 22px;\r\n    border-radius: 50%;\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    text-align: center;\r\n    padding: 4px 0;\r\n}\r\n\r\n.user-image figure {\r\n    width: 45px;\r\n    height: 45px;\r\n    border-radius: 50%;\r\n    background-size: cover;\r\n    background-color: #fff;\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n    float: left;\r\n    margin: 0 0 0 5px;\r\n}\r\n\r\n.user-image a {\r\n    display: block;\r\n}\r\n\r\n.username {\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    color: #52686e;\r\n    font-weight: 500;\r\n    padding: 10px 10px;\r\n}\r\n\r\n\r\n/* header css end\r\n*******************************/\r\n\r\ninput.ng-invalid.ng-touched {\r\n    border: solid 1px #be4b49;\r\n}\r\n\r\n\r\n/* media strat *******************************/\r\n\r\n@media(max-width:1300px) {\r\n    .navbar-list>li>a {\r\n        font-size: 13px;\r\n        padding: 30px 8px;\r\n    }\r\n    .logo-wrpper {\r\n        padding: 30px 0 20px;\r\n    }\r\n    .logo-wrpper img {\r\n        width: 170px;\r\n    }\r\n}\r\n\r\n@media(max-width:1100px) {\r\n    .navbar-buttons .toggle-button {\r\n        display: block;\r\n    }\r\n    .toggle-button {\r\n        padding: 30px 10px;\r\n        position: absolute;\r\n        top: 10px;\r\n        right: 0;\r\n        cursor: pointer;\r\n    }\r\n    .toggle-button span {\r\n        display: block;\r\n        background: #67ab33;\r\n        height: 3px;\r\n        width: 30px;\r\n        border-radius: 4px;\r\n        margin: 3px 0;\r\n    }\r\n    .toggle-button span:nth-child(2) {\r\n        width: 18px;\r\n    }\r\n    .navbar-buttons {\r\n        position: relative;\r\n        padding-right: 50px;\r\n    }\r\n    .navbar-list {\r\n        position: fixed;\r\n        top: 80px;\r\n        right: 0;\r\n        bottom: 0;\r\n        background: #67ab33;\r\n        width: 200px;\r\n        z-index: 9;\r\n        display: none;\r\n    }\r\n    .navbar-list>li {\r\n        display: block;\r\n    }\r\n    .navbar-list>li>a {\r\n        font-size: 13px;\r\n        padding: 15px 20px;\r\n        color: #2a4019;\r\n        border-bottom: solid 1px #568e2b;\r\n    }\r\n    .navbar-list>li>a:hover,\r\n    .navbar-list>li>a:focus,\r\n    .navbar-list>li>a.active {\r\n        color: #ffffff;\r\n    }\r\n}\r\n\r\n@media(max-width:767px) {\r\n    .navbar-buttons>li {\r\n        padding: 10px 2px;\r\n    }\r\n    .custom-select {\r\n        font-size: 12px;\r\n    }\r\n    .navbar-buttons>li.signup a {\r\n        font-size: 13px;\r\n        padding: 8px 12px;\r\n    }\r\n    .navbar-buttons>li.login a {\r\n        font-size: 13px;\r\n        padding: 6px 12px;\r\n    }\r\n    .logo-wrpper img {\r\n        width: 130px;\r\n    }\r\n    .logo-wrpper {\r\n        padding: 22px 0 10px;\r\n    }\r\n    .body-wrapper {\r\n        padding-top: 58px;\r\n    }\r\n    .navbar-list {\r\n        top: 58px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- header -->\r\n<header class=\"header-wrapper\">\r\n    <div class=\"container clearfix\">\r\n        <a href=\"/\" class=\"logo-wrpper\" [class.disabled]=\"allowOrNot\">\r\n            <img src=\"assets/images/logo.png\" alt=\"Koala Talk\" [class.disabled]=\"allowOrNot\">\r\n        </a>\r\n        <div class=\"menubar-wrapper clearfix\">\r\n            <ul class=\"navbar-buttons\">\r\n\r\n                <li class=\"login\" *ngIf=\"!allowOrNot\">\r\n                    <a [class.disabled]=\"allowOrNot\" href=\"javascript:void(0)\" (click)=\"open(loginmodal)\">Login</a>\r\n                </li>\r\n                <li class=\"signup\" *ngIf=\"!allowOrNot\">\r\n                    <a [class.disabled]=\"allowOrNot\" href=\"javascript:void(0)\" (click)=\"open(signupmodal)\" class=\"gradient\">Sign Up</a>\r\n                </li>\r\n                <li class=\"toggle-button\">\r\n                    <span></span>\r\n                    <span></span>\r\n                    <span></span>\r\n                </li>\r\n                <li class=\"language\" *ngIf=\"!allowOrNot\">\r\n                    <select class=\"custom-select\">\r\n                      <option value=\"0\" disabled>Select</option>\r\n                      <option value=\"1\">english</option>\r\n                      <option value=\"2\">Spanish</option>\r\n                      <option value=\"3\">Chinese</option>\r\n                      <option value=\"4\">Korean</option>\r\n                      <option value=\"5\">Japanese</option>\r\n                  </select>\r\n                </li>\r\n            </ul>\r\n            <ul class=\"navbar-list\">\r\n                <li>\r\n                    <a [class.disabled]=\"allowOrNot\" href=\"javascript:void(0);\" class=\"active\">Find A Tutor </a>\r\n                </li>\r\n                <li>\r\n                    <a [class.disabled]=\"allowOrNot\" href=\"javascript:void(0);\">Find A Topic</a>\r\n                </li>\r\n                <li>\r\n                    <a [class.disabled]=\"allowOrNot\" href=\"javascript:void(0);\">Study Group </a>\r\n                </li>\r\n                <li>\r\n                    <a [class.disabled]=\"allowOrNot\" href=\"javascript:void(0);\">Bulletin Board</a>\r\n                </li>\r\n                <li>\r\n                    <a [class.disabled]=\"allowOrNot\" href=\"javascript:void(0);\">Become a Tutor</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</header>\r\n<!-- header end-->\r\n\r\n\r\n<ng-template #loginmodal let-c=\"close\" let-d=\"dismiss\" class=\"lg-modal\">\r\n    <button type=\"button\" class=\"modal-cross\" aria-label=\"Close\" (click)=\"d('Cross click')\"><img src=\"assets/images/cancel.png\" alt=\"close\"></button>\r\n    <div class=\"modal-body\">\r\n        <div class=\"modal-bg\">\r\n            <div class=\"LogIn-modal custom-modal clearfix\" id=\"LogInmodal\">\r\n                <div class=\"modal-inner\">\r\n                    <div class=\"image-section\">\r\n                        <img src=\"assets/images/login.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"content-section\">\r\n                        <h2 class=\"modal-head text-center\">Sign In</h2>\r\n                        <p class=\"modal-para\">Lorem Ipsum is simply dummy text of the printing. </p>\r\n                        <form action=\"Student_Profile_Screen1.html\">\r\n                            <div class=\"custom-radio\">\r\n                                <input type=\"radio\" value=\"\" name=\"radio1\" id=\"student\" checked />\r\n                                <label for=\"student\">Student</label>\r\n                            </div>\r\n                            <div class=\"custom-radio\">\r\n                                <input type=\"radio\" value=\"\" name=\"radio1\" id=\"tutor\" />\r\n                                <label for=\"tutor\">Tutor</label>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-wrap\">\r\n                                    <input type=\"text\" name=\"\" value=\"\" class=\"\" placeholder=\"Email\">\r\n                                    <span class=\"error-inputmsg\">This Field is Requried </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-wrap\">\r\n                                    <input type=\"password\" name=\"\" value=\"\" class=\"\" placeholder=\"Password\">\r\n                                    <span class=\"error-inputmsg\">This Field is Requried </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"custom-check\">\r\n                                <input type=\"checkbox\" value=\"\" name=\"check\" id=\"Remember\" />\r\n                                <label for=\"Remember\">Remember Me</label>\r\n                            </div>\r\n                            <a href=\"javascript:void(0)\" (click)=\"open(forgotmodal)\" class=\"forgot-psw\">Forgot Password</a>\r\n                            <div class=\"clearfix\"></div>\r\n                            <div class=\"button-wrapper text-center\">\r\n                                <button type=\"submit\" name=\"\" value=\"\" class=\"gradient custom-btn\">Sign In</button>\r\n                            </div>\r\n                            <div class=\"other-option\"><span> Or Login With </span></div>\r\n                            <div class=\"social-icon\">\r\n                                <a href=\"javascript:void\" (click)=\"loginWithFacebook()\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a>\r\n                                <a href=\"javascript:void\" (click)=\"loginWithGooglePlus()\" class=\"google-plus\"><i class=\"fa fa-google-plus\"></i></a> \r\n                            </div>\r\n                        </form>\r\n                        <div class=\"footer-modal text-center\">\r\n                            <p class=\"para\">Don't have an account? <a href=\"javascript:void(0)\" (click)=\"open(signupmodal)\" class=\"signup\"> Sign Up </a></p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n<ng-template #forgotmodal let-c=\"close\" let-d=\"dismiss\" class=\"lg-modal\">\r\n    <button type=\"button\" class=\"modal-cross\" aria-label=\"Close\" (click)=\"d('Cross click')\"><img src=\"assets/images/cancel.png\" alt=\"close\"></button>\r\n    <div class=\"modal-body\">\r\n        <div class=\"modal-bg\">\r\n            <div class=\"forgot-modal custom-modal clearfix\" id=\"LogInmodal\">\r\n                <div class=\"modal-inner\">\r\n\r\n                    <div class=\"content-section\">\r\n                        <h2 class=\"modal-head text-center\">Forgot Password?</h2>\r\n                        <p class=\"modal-para text-center\">Enter your email address below and we will send you an email allowing to reset it.</p>\r\n                        <div class=\"icon-image\">\r\n                            <figure class=\"icon-bg\">\r\n                                <img src=\"assets/images/lock.png\" alt=\"lock\">\r\n                            </figure>\r\n                        </div>\r\n                        <form (ngSubmit)=\"forgotPassword(verification)\" #ngforgotForm=\"ngForm\" novalidate>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-wrap fixed-widthinput text-center\">\r\n\r\n                                    <input type=\"email\" placeholder=\"Email\" name=\"email\" #mailForgotRef=\"ngModel\" [(ngModel)]=\"forgotMail\" email/>\r\n                                    <div *ngIf=\"mailForgotRef.invalid&&mailForgotRef.touched&&mailForgotRef.dirty\">\r\n                                        <span class=\"error-inputmsg\" style=\"display:block\" *ngIf=\"mailForgotRef?.errors.required\">This Field is Required.</span>\r\n                                        <span class=\"error-inputmsg\" style=\"display:block\" *ngIf=\"mailForgotRef?.errors.email\">Please enter a valid email </span>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"clearfix\"></div>\r\n                            <div class=\"button-wrapper text-center\">\r\n                                <button type=\"submit\" name=\"btnSubmit\" class=\"gradient custom-btn\" [disabled]=\"ngforgotForm.invalid\">Reset Password</button> {{forgotPasswordStatus}}\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n<ng-template #signupmodal let-c=\"close\" let-d=\"dismiss\" class=\"lg-modal\">\r\n    <button type=\"button\" class=\"modal-cross\" aria-label=\"Close\" (click)=\"d('Cross click')\"><img src=\"assets/images/cancel.png\" alt=\"close\"></button>\r\n    <div class=\"modal-body\">\r\n        <div class=\"modal-bg\">\r\n            <div class=\"signup-modal custom-modal clearfix\" id=\"LogInmodal\">\r\n                <div class=\"modal-inner\">\r\n                    <div class=\"image-section\">\r\n                        <img src=\"assets/images/signup.jpg\" alt=\"\">\r\n                    </div>\r\n\r\n                    <div class=\"content-section\">\r\n                        <div class=\"error-commonmsg\"> {{registrationResponse}} </div>\r\n                        <h2 class=\"modal-head text-center\">Sign Up</h2>\r\n                        <p class=\"modal-para\">Lorem Ipsum is simply dummy text of the printing. </p>\r\n                        <form (ngSubmit)=\"signUp(verification)\" #frm=\"ngForm\" novalidate>\r\n                            <div class=\"custom-radio\">\r\n                                <input type=\"radio\" name=\"student\" value=\"1\" checked=\"checked\" name=\"radio1\" id=\"student\" [(ngModel)]=\"reg.isStudent\" />\r\n                                <label for=\"student\">Student</label>\r\n                            </div>\r\n                            <div class=\"custom-radio\">\r\n                                <input type=\"radio\" name=\"tutor\" value=\"0\" name=\"radio1\" id=\"tutor\" [(ngModel)]=\"reg.isStudent\" />\r\n                                <label for=\"tutor\">Tutor</label>\r\n                            </div>\r\n                            <div class=\"form-group col50\">\r\n                                <div class=\"input-wrap col50right\">\r\n                                    <input type=\"text\" name=\"firstName\" placeholder=\"First Name\" #firstNameRef=\"ngModel\" [(ngModel)]=\"reg.firstName\" required/>\r\n                                    <div *ngIf=\"firstNameRef.invalid && firstNameRef.touched\">\r\n                                        <span class=\"error-inputmsg\" style=\"display:block\" *ngIf=\"firstNameRef?.errors.required\">This Field is Required </span>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group col50\">\r\n                                <div class=\"input-wrap col50left\">\r\n                                    <input type=\"text\" name=\"lastName\" value=\"\" placeholder=\"Last name\" #lastNameRef=\"ngModel\" [(ngModel)]=\"reg.lastName\" required>\r\n                                    <div *ngIf=\"lastNameRef.invalid&&lastNameRef.touched\">\r\n                                        <span class=\"error-inputmsg\" style=\"display:block\" *ngIf=\"lastNameRef?.errors.required\">This Field is Required </span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"clearfix\"></div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-wrap\">\r\n                                    <input type=\"email\" name=\"email\"   [disabled]=\"isEmailFalse\" placeholder=\"Email\" name=\"email\" #mailRef=\"ngModel\" [(ngModel)]=\"reg.email\" email>\r\n                                    <div *ngIf=\"mailRef.invalid&&mailRef.touched\">\r\n                                        <span class=\"error-inputmsg\" style=\"display:block\" *ngIf=\"mailRef?.errors.required\">This Field is Required.</span>\r\n                                        <span class=\"error-inputmsg\" style=\"display:block\" *ngIf=\"mailRef?.errors.email\">Please enter a valid email </span>\r\n                                    </div>\r\n\r\n\r\n                                    <!-- <div *ngIf=\"emailRef.invalid&&emailRef.touched\">\r\n                                        <span class=\"\" *ngIf=\"emailRef?.errors.email\">Please enter a valid email</span>\r\n                                    </div> -->\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-wrap\">\r\n                                    <input type=\"password\" name=\"password\" value=\"\" placeholder=\"Password\" #passwordRef=\"ngModel\" [(ngModel)]=\"reg.password\" required>\r\n                                    <div *ngIf=\"passwordRef.invalid&&passwordRef.touched\">\r\n                                        <span class=\"error-inputmsg\" style=\"display:block\" *ngIf=\"passwordRef?.errors.required\">This Field is Requried.</span>\r\n                                        <!-- <span class=\"error-inputmsg\"  style=\"display:block\"  *ngIf=\"passwordRef?.errors.minlengt\">password should be greater than 3 characters </span> -->\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"button-wrapper text-center\">\r\n                                <!-- <button type=\"button\" name=\"\" value=\"\" class=\"gradient custom-btn\"  \r\n                                (click)=\"open(verification)\">Sign Up</button> -->\r\n                                <button type=\"submit\" name=\"btnSubmit\" class=\"gradient custom-btn\" [disabled]=\"frm.invalid\">Sign Up</button>\r\n                                <!-- <span stype=\"color:red\">{{registrationResponse}}</span> -->\r\n                            </div>\r\n                            <div class=\"other-option\"><span> Or Connect With </span></div>\r\n                            <div class=\"social-icon\">\r\n                                <a href=\"javascript:void\" class=\"facebook\" (click)=\"connectWithFacebook()\"><i class=\"fa fa-facebook\"></i></a>\r\n                                <a href=\"javascript:void\" class=\"google-plus\"  (click)=\"connectWithGooglePlus()\"><i class=\"fa fa-google-plus\"></i></a>\r\n                              \r\n                            </div>\r\n                        </form>\r\n                        <div class=\"footer-modal text-center\">\r\n                            <p class=\"para\">Already have an account <a href=\"javascript:void(0);\" (click)=\"open(loginmodal)\" class=\"signup\"> Sign In </a></p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n<ng-template #verification let-c=\"close\" let-d=\"dismiss\">\r\n    <button type=\"button\" class=\"modal-cross\" aria-label=\"Close\" (click)=\"d('Cross click')\"><img src=\"assets/images/cancel.png\" alt=\"close\"></button>\r\n    <div class=\"modal-bg\">\r\n        <div class=\"verification custom-modal clearfix\" id=\"LogInmodal\">\r\n            <div class=\"modal-inner\">\r\n                <div class=\"content-section\">\r\n                    <h2 class=\"modal-head text-center\">Verification Link Sent</h2>\r\n                    <p class=\"modal-para text-center\">The email containing a link to varify your account has been sent to your email address. Please check your inbox.</p>\r\n\r\n                    <a [href]=\"varificationLink\" target=\"_blank\" >Click here</a>\r\n                    <div class=\"icon-image\">\r\n                        <figure class=\"icon-bg\">\r\n                            <img src=\"assets/images/circle-check.png\" alt=\"Check\">\r\n                        </figure>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/modules/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_registration__ = __webpack_require__("../../../../../src/app/models/user-registration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_shared_loader__ = __webpack_require__("../../../../../src/app/modules/shared/loader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_shared_header_footer_service__ = __webpack_require__("../../../../../src/app/modules/shared/header-footer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_service__ = __webpack_require__("../../../../../src/app/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular4_social_login__ = __webpack_require__("../../../../angular4-social-login/angular4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular4_social_login__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var HeaderComponent = (function () {
    function HeaderComponent(modalService, accountService, studentService, loaderService, headerFooterService, headerService, authService, router) {
        this.modalService = modalService;
        this.accountService = accountService;
        this.studentService = studentService;
        this.loaderService = loaderService;
        this.headerFooterService = headerFooterService;
        this.headerService = headerService;
        this.authService = authService;
        this.router = router;
        this.isStudent = true;
        this.isTutor = false;
        this.allowOrNot = true;
        this.isEmailFalse = false;
        this.isSocialSignup = false;
        this.varificationLink = '';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSocialSignup = false;
        this.reg = new __WEBPACK_IMPORTED_MODULE_2__models_user_registration__["a" /* UserRegistration */]();
        this.reg.isStudent = '1';
        this.isEmailFalse = false;
        //this.chckForHeaders();
        // //this is subscribing the method
        // this.headerFooterService.getStatus.subscribe((val: boolean) => {
        //   console.log('---------', val);
        //   this.allowOrNot = val;
        // });
        this.headerService.bs.subscribe(function (x) {
            console.log('=============', x);
            _this.allowOrNot = x;
        });
    };
    //check for headers
    //this method is not being used
    HeaderComponent.prototype.chckForHeaders = function () {
        var _this = this;
        if (localStorage.getItem('auth-token') != undefined) {
            this.studentService.checkForHeaders().subscribe(function (data) {
                if (data.code == '200') {
                    _this.allowOrNot = !data.headerStatus;
                }
            }, function (error) {
                if (error.code == 501) {
                    _this.reg.email = '';
                    _this.registrationResponse = error.message;
                }
            });
        }
        else {
            this.allowOrNot = false;
        }
    };
    HeaderComponent.prototype.open = function (content) {
        this.isEmailFalse = false;
        this.forgotMail = '';
        this.reg = new __WEBPACK_IMPORTED_MODULE_2__models_user_registration__["a" /* UserRegistration */]();
        this.reg.isStudent = '1';
        if (this.signupPopup) {
            this.signupPopup.close();
        }
        this.signupPopup = this.modalService.open(content);
    };
    HeaderComponent.prototype.signUp = function (content) {
        var _this = this;
        this.loaderService.display(true);
        this.dynamicFormControl = content;
        this.reg.isSocial = this.isSocialSignup;
        var values = this.reg;
        this.accountService.signup(values).subscribe(function (data) {
            debugger;
            if (data.code == '200') {
                _this.reg = new __WEBPACK_IMPORTED_MODULE_2__models_user_registration__["a" /* UserRegistration */]();
                _this.reg.isStudent = '1';
                _this.signupPopup.close();
                _this.loaderService.display(false);
                if (!_this.isSocialSignup) {
                    if (data.UserInfo.roleId == '4') {
                        //redirect student here
                        _this.varificationLink = 'http://52.8.169.78:7112/student/profile/' + data.token;
                    }
                    else if (data.UserInfo.roleId == '3') {
                        //teacher
                        _this.varificationLink = 'http://52.8.169.78:7112/teacher/generalprofile/' + data.token;
                    }
                    _this.open(_this.dynamicFormControl);
                }
                else {
                    if (data.UserInfo.roleId == '4') {
                        //redirect student here
                        //http://localhost:4200/student/profile/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhNDM0ZTdkMzg5NWQ5MWZmZTNjNDMxMiIsImlhdCI6MTUxNDM2MDQ0NSwiZXhwIjoxNTE2OTUyNDQ1fQ.Ee6Lz7fTmdMv4MJrfZWPnHHYcmiMuKR9MdGhQDMaFK8
                        _this.signupPopup.close();
                        _this.router.navigate(['../../student/profile/' + data.token]);
                    }
                    else if (data.UserInfo.roleId == '3') {
                        //teacher
                        _this.signupPopup.close();
                        //http://localhost:4200/teacher/generalprofile/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhNDQ3ZmY0NDU0MTM1MDE3NTU4ZjYyNiIsImlhdCI6MTUxNDQzODY0NCwiZXhwIjoxNTE3MDMwNjQ0fQ.LsEXHK9H5CJwrRz951aY80oLdNN4DUDmK6icN5_2lvQ
                        _this.router.navigate(['../../teacher/generalprofile/' + data.token]);
                    }
                }
            }
            else {
                _this.loaderService.display(false);
                _this.registrationResponse = data.message;
            }
        }, function (error) {
            if (error.code == 501) {
                // this.reg.email = '';
                _this.registrationResponse = error.message;
            }
        });
    };
    HeaderComponent.prototype.forgotPassword = function (content) {
        var _this = this;
        this.dynamicFormControl = content;
        var email = this.forgotMail;
        this.accountService.forgotPassword(email).subscribe(function (data) {
            if (data.code == '200') {
                _this.reg = new __WEBPACK_IMPORTED_MODULE_2__models_user_registration__["a" /* UserRegistration */]();
                _this.reg.isStudent = '1';
                _this.signupPopup.close();
                _this.open(_this.dynamicFormControl);
            }
            else {
                _this.forgotPasswordStatus = data.message;
            }
        }, function (error) {
            // if (error.code == 501) {
            //   this.reg.email = '';
            //   this.registrationResponse = error.message;
            // }
        });
    };
    HeaderComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    HeaderComponent.prototype.connectWithFacebook = function () {
        var _this = this;
        this.loaderService.display(true);
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_9_angular4_social_login__["FacebookLoginProvider"].PROVIDER_ID).then(function (success) {
            if (success.authToken != null) {
                var obj = {
                    email: success.email
                };
                if (success.email != undefined && success.email != '') {
                    localStorage.setItem('regfb_email', success.email);
                }
                localStorage.setItem('regfb_firstName', success.firstName);
                localStorage.setItem('regfb_lastName', success.lastName);
                _this.accountService.userAlreadyExistsOrNot(obj).subscribe(function (data) {
                    if (data.code == '200') {
                        _this.reg = new __WEBPACK_IMPORTED_MODULE_2__models_user_registration__["a" /* UserRegistration */]();
                        _this.reg.isStudent = '1';
                        _this.reg.firstName = localStorage.getItem('regfb_firstName');
                        _this.reg.lastName = localStorage.getItem('regfb_lastName');
                        if (localStorage.getItem('regfb_email') != null && localStorage.getItem('regfb_email') != null) {
                            _this.reg.email = localStorage.getItem('regfb_email');
                            _this.isEmailFalse = true;
                        }
                        _this.loaderService.display(false);
                        _this.isSocialSignup = true;
                    }
                    else {
                        if (data.UserInfo[0].roleId == '4') {
                            //redirect student here
                            //http://localhost:4200/student/profile/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhNDM0ZTdkMzg5NWQ5MWZmZTNjNDMxMiIsImlhdCI6MTUxNDM2MDQ0NSwiZXhwIjoxNTE2OTUyNDQ1fQ.Ee6Lz7fTmdMv4MJrfZWPnHHYcmiMuKR9MdGhQDMaFK8
                            _this.signupPopup.close();
                            _this.router.navigate(['../../student/profile/' + data.token]);
                        }
                        else if (data.UserInfo[0].roleId == '3') {
                            //teacher
                            _this.signupPopup.close();
                            //http://localhost:4200/teacher/generalprofile/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhNDQ3ZmY0NDU0MTM1MDE3NTU4ZjYyNiIsImlhdCI6MTUxNDQzODY0NCwiZXhwIjoxNTE3MDMwNjQ0fQ.LsEXHK9H5CJwrRz951aY80oLdNN4DUDmK6icN5_2lvQ
                            _this.router.navigate(['../../teacher/generalprofile/' + data.token]);
                        }
                    }
                }, function (error) {
                    // if (error.code == 501) {
                    //   this.reg.email = '';
                    //   this.registrationResponse = error.message;
                    // }
                });
            }
        }, function (error) {
            debugger;
        });
    };
    HeaderComponent.prototype.connectWithGooglePlus = function () {
        var _this = this;
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_9_angular4_social_login__["GoogleLoginProvider"].PROVIDER_ID).then(function (success) {
            debugger;
            if (success.authToken != null) {
                var obj = {
                    email: success.email
                };
                if (success.email != undefined && success.email != '') {
                    localStorage.setItem('regfb_email', success.email);
                }
                var fullName = success.name.split(' ');
                if (fullName[0] != undefined) {
                    localStorage.setItem('regfb_firstName', fullName[0]);
                }
                if (fullName[1] != undefined) {
                    localStorage.setItem('regfb_lastName', fullName[1]);
                }
                _this.accountService.userAlreadyExistsOrNot(obj).subscribe(function (data) {
                    if (data.code == '200') {
                        _this.reg = new __WEBPACK_IMPORTED_MODULE_2__models_user_registration__["a" /* UserRegistration */]();
                        _this.reg.isStudent = '1';
                        _this.reg.firstName = localStorage.getItem('regfb_firstName');
                        _this.reg.lastName = localStorage.getItem('regfb_lastName');
                        if (localStorage.getItem('regfb_email') != null && localStorage.getItem('regfb_email') != null) {
                            _this.reg.email = localStorage.getItem('regfb_email');
                            _this.isEmailFalse = true;
                        }
                        _this.isSocialSignup = true;
                        _this.loaderService.display(false);
                    }
                    else {
                        debugger;
                        if (data.UserInfo[0].roleId == '4') {
                            //redirect student here
                            //http://localhost:4200/student/profile/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhNDM0ZTdkMzg5NWQ5MWZmZTNjNDMxMiIsImlhdCI6MTUxNDM2MDQ0NSwiZXhwIjoxNTE2OTUyNDQ1fQ.Ee6Lz7fTmdMv4MJrfZWPnHHYcmiMuKR9MdGhQDMaFK8
                            _this.signupPopup.close();
                            _this.router.navigate(['../../student/profile/' + data.token]);
                        }
                        else if (data.UserInfo[0].roleId == '3') {
                            //teacher
                            _this.signupPopup.close();
                            //http://localhost:4200/teacher/generalprofile/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhNDQ3ZmY0NDU0MTM1MDE3NTU4ZjYyNiIsImlhdCI6MTUxNDQzODY0NCwiZXhwIjoxNTE3MDMwNjQ0fQ.LsEXHK9H5CJwrRz951aY80oLdNN4DUDmK6icN5_2lvQ
                            _this.router.navigate(['../../teacher/generalprofile/' + data.token]);
                        }
                    }
                }, function (error) {
                    debugger;
                    // if (error.code == 501) {
                    //   this.reg.email = '';
                    //   this.registrationResponse = error.message;
                    // }
                });
            }
        }, function (error) {
            debugger;
        });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/modules/shared/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/shared/header/header.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_5__services_student_service__["a" /* StudentService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_4__services_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_5__services_student_service__["a" /* StudentService */],
            __WEBPACK_IMPORTED_MODULE_6__modules_shared_loader__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_7__modules_shared_header_footer_service__["a" /* HeaderFooterService */],
            __WEBPACK_IMPORTED_MODULE_8__header_service__["a" /* HeaderService */],
            __WEBPACK_IMPORTED_MODULE_9_angular4_social_login__["AuthService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/shared/loader.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LoaderService = (function () {
    function LoaderService() {
        this.status = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
    }
    LoaderService.prototype.display = function (value) {
        this.status.next(value);
    };
    Object.defineProperty(LoaderService.prototype, "getValue", {
        get: function () {
            return this.status.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    LoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "../../../../../src/app/modules/shared/modal/modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/shared/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Modal title</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <p>One fine body&hellip;</p>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Close</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Launch demo modal</button> -->"

/***/ }),

/***/ "../../../../../src/app/modules/shared/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponent = (function () {
    function ModalComponent() {
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__("../../../../../src/app/modules/shared/modal/modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/shared/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__ = __webpack_require__("../../../../../src/app/modules/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_modal_component__ = __webpack_require__("../../../../../src/app/modules/shared/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__ = __webpack_require__("../../../../../src/app/modules/shared/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_forgot_forgot_component__ = __webpack_require__("../../../../../src/app/modules/shared/components/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_signup_signup_component__ = __webpack_require__("../../../../../src/app/modules/shared/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_progress_spinner__ = __webpack_require__("../../../material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__modal_modal_component__["a" /* ModalComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_forgot_forgot_component__["a" /* ForgotComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_signup_signup_component__["a" /* SignupComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__modal_modal_component__["a" /* ModalComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_forgot_forgot_component__["a" /* ForgotComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["e" /* MatCheckboxModule */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AccountService = (function () {
    function AccountService(http) {
        this.http = http;
    }
    //this method used for send request to  the user login
    AccountService.prototype.getHeaderOfApplication = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', "application/x-www-form-urlencoded");
        headers.append('Authorization', "Basic YWRtaW5Aa2FvbGF3ZWJhcHAuY29tOjEyMzQ1Ng==");
        return headers;
    };
    AccountService.prototype.signup = function (obj) {
        debugger;
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        body.set('firstName', obj.firstName.trim());
        body.set('lastName', obj.lastName);
        body.set('email', obj.email);
        // body.set('country', 'IN');
        body.set('password', obj.password);
        body.set('isSocial', obj.isSocial);
        //loginType 4 for student and 3 for teacher
        if (obj.isStudent == '1') {
            body.set('loginType', '4');
        }
        else {
            body.set('loginType', '3');
        }
        debugger;
        console.log("control in the sign up service");
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].serverUrl + 'users/registration', body.toString(), { headers: this.getHeaderOfApplication() })
            .map(function (res) {
            return res.json();
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].throw(error.json() || 'Server error'); });
    };
    AccountService.prototype.forgotPassword = function (email) {
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        body.set('email', email.trim());
        console.log("control in forgot email service");
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].serverUrl + 'users/forgot-password', body.toString(), { headers: this.getHeaderOfApplication() })
            .map(function (res) {
            return res.json();
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].throw(error.json() || 'Server error'); });
    };
    AccountService.prototype.userAlreadyExistsOrNot = function (obj) {
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        body.set('email', obj.email.trim());
        console.log("control in User alreay exists or not Service");
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].serverUrl + 'users/social-login', body.toString(), { headers: this.getHeaderOfApplication() })
            .map(function (res) {
            return res.json();
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].throw(error.json() || 'Server error'); });
    };
    AccountService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "../../../../../src/app/services/student.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StudentService = (function () {
    function StudentService(http) {
        this.http = http;
    }
    StudentService.prototype.getHeaderOfApplication = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', "application/x-www-form-urlencoded");
        headers.append('authtoken', localStorage.getItem('auth-token'));
        headers.append('Authorization', "Basic YWRtaW5Aa2FvbGF3ZWJhcHAuY29tOjEyMzQ1Ng==");
        return headers;
    };
    StudentService.prototype.getHeaderOfApplicationWithAuthorization = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        // headers.append('Content-Type', "application/x-www-form-urlencoded")
        headers.append('authtoken', localStorage.getItem('auth-token'));
        //headers.append('authtoken',' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhNDM0ZTdkMzg5NWQ5MWZmZTNjNDMxMiIsImlhdCI6MTUxNDM2MDQ0NSwiZXhwIjoxNTE2OTUyNDQ1fQ.Ee6Lz7fTmdMv4MJrfZWPnHHYcmiMuKR9MdGhQDMaFK8');   
        headers.append('Authorization', "Basic YWRtaW5Aa2FvbGF3ZWJhcHAuY29tOjEyMzQ1Ng==");
        return headers;
    };
    // student first step verification
    StudentService.prototype.saveStudentVerificationFirstStepData = function (data) {
        debugger;
        console.log(data.get('userImage'));
        console.log("control in the save Student first StepData service");
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].serverUrl + 'users/image-upload', data, { headers: this.getHeaderOfApplicationWithAuthorization() })
            .map(function (res) {
            return res.json();
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].throw(error.json() || 'Server error'); });
    };
    // student first step verification With social media
    StudentService.prototype.saveStudentVerificationFromSocialMediaFirstStepData = function (image) {
        console.log("control in the save Student first StepData service social media");
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        body.set('imageUrl', image);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].serverUrl + 'users/google-image-url', body.toString(), { headers: this.getHeaderOfApplication() })
            .map(function (res) {
            return res.json();
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].throw(error.json() || 'Server error'); });
    };
    //student second step verifiacion
    StudentService.prototype.saveStudentSecondStepData = function (obj) {
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        body.set('language', obj.language);
        body.set('counrty', obj.counrty);
        body.set('timeZone', obj.timeZone);
        console.log("control in the save Student Second StepData service");
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].serverUrl + 'users/edit-language', body.toString(), { headers: this.getHeaderOfApplication() })
            .map(function (res) {
            return res.json();
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].throw(error.json() || 'Server error'); });
    };
    //student third step varification 
    StudentService.prototype.saveStudentThirdStepData = function (obj) {
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        body.set('mainlanguage', obj.mainlanguage);
        body.set('rate', obj.rate);
        console.log("control in the save Student third StepData service");
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].serverUrl + 'users/main-language', body.toString(), { headers: this.getHeaderOfApplication() })
            .map(function (res) {
            return res.json();
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].throw(error.json() || 'Server error'); });
    };
    //student fourth step varification 
    StudentService.prototype.saveStudentFourthStepData = function (obj) {
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        body.set('interests', obj.intrest);
        body.set('purpose', obj.purpose);
        body.set('additionalinfo', obj.additionalInformation);
        body.set('parantInterest', obj.parantInterest);
        console.log("control in the save Student fourth StepData service");
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].serverUrl + 'users/save-interests', body.toString(), { headers: this.getHeaderOfApplication() })
            .map(function (res) {
            return res.json();
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].throw(error.json() || 'Server error'); });
    };
    //get student full information
    StudentService.prototype.getStudentInformation = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].serverUrl + 'users/view-user-info', { headers: this.getHeaderOfApplicationWithAuthorization() })
            .map(function (res) {
            return res.json();
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].throw(error.json() || 'Server error'); });
    };
    //get Student countries and their time zone
    StudentService.prototype.getCountriesAndTimeZone = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].serverUrl + 'users/country-with-time-zone', { headers: this.getHeaderOfApplicationWithAuthorization() })
            .map(function (res) {
            return res.json();
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].throw(error.json() || 'Server error'); });
    };
    //get student speaking languages
    StudentService.prototype.getStudentLanguages = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].serverUrl + 'users/country-language', { headers: this.getHeaderOfApplicationWithAuthorization() })
            .map(function (res) {
            return res.json();
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].throw(error.json() || 'Server error'); });
    };
    //for student varification second step
    StudentService.prototype.getLanguageYouSpeak = function () {
    };
    StudentService.prototype.getTimeZoneAndCountry = function () {
    };
    //get student intrest
    StudentService.prototype.getStudentIntrest = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].serverUrl + 'users/my-interests', { headers: this.getHeaderOfApplicationWithAuthorization() })
            .map(function (res) {
            return res.json();
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].throw(error.json() || 'Server error'); });
    };
    //get student intrest
    StudentService.prototype.checkForHeaders = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].serverUrl + 'users/header-check', { headers: this.getHeaderOfApplicationWithAuthorization() })
            .map(function (res) {
            return res.json();
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].throw(error.json() || 'Server error'); });
    };
    StudentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], StudentService);
    return StudentService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    serverUrl: "http://52.8.169.78:7112/api/",
    api: {
        registration: 'api/users/registration'
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map