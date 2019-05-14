webpackJsonp(["commonpages.module"],{

/***/ "../../../../../src/app/modules/commonpages/commonpages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonpagesModule", function() { return CommonpagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/modules/commonpages/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commonpages_router__ = __webpack_require__("../../../../../src/app/modules/commonpages/commonpages.router.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CommonpagesModule = (function () {
    function CommonpagesModule() {
    }
    CommonpagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__commonpages_router__["a" /* CommonPageRouterModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__landing_page_landing_page_component__["a" /* LandingPageComponent */]]
        })
    ], CommonpagesModule);
    return CommonpagesModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/commonpages/commonpages.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonPageRouterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/modules/commonpages/landing-page/landing-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var commonpageRoutes = [
    // { path:'', redirectTo:'index', component:LandingPageComponent },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__landing_page_landing_page_component__["a" /* LandingPageComponent */] }
];
var CommonPageRouterModule = (function () {
    function CommonPageRouterModule() {
    }
    CommonPageRouterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(commonpageRoutes)
            ],
            declarations: []
        })
    ], CommonPageRouterModule);
    return CommonPageRouterModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/commonpages/landing-page/landing-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Home css \r\n*******************************/\r\n\r\n\r\n/*-- top banner --*/\r\n\r\n.home-banner {\r\n    background: url(" + __webpack_require__("../../../../../src/assets/images/bg1.jpg") + ");\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n    position: relative;\r\n    min-height: 640px;\r\n    background-size: cover;\r\n    display: table;\r\n    width: 100%;\r\n}\r\n\r\n.home-banner-inner {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n\r\n.home-banner .image-sec {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 25px;\r\n}\r\n\r\n.home-banner .image-sec img {\r\n    max-width: 100%;\r\n}\r\n\r\n.home-banner .content {\r\n    width: 480px;\r\n    float: left;\r\n}\r\n\r\n.home-banner .heading {\r\n    font-size: 40px;\r\n    padding: 10px 0;\r\n    font-weight: 400;\r\n}\r\n\r\n.home-banner .para {\r\n    font-size: 18px;\r\n    padding: 0 100px 0 0;\r\n}\r\n\r\n.home-banner .custom-btn {\r\n    margin: 25px 0 0 0;\r\n}\r\n\r\n\r\n/*-- top banner end --*/\r\n\r\n\r\n/*--how it works start --*/\r\n\r\n.howitworks {\r\n    text-align: center;\r\n    background: #fff;\r\n    position: relative;\r\n    padding: 60px 0;\r\n}\r\n\r\n.howitworks .column {\r\n    float: left;\r\n    width: 33.3%;\r\n    padding: 30px 40px;\r\n}\r\n\r\n.howitworks .heading {\r\n    font-size: 30px;\r\n    color: #a5d281;\r\n    font-weight: 400;\r\n    padding: 10px 0;\r\n}\r\n\r\n.howitworks .para {\r\n    color: #8499a2;\r\n    font-size: 16px;\r\n}\r\n\r\n.howitworks .icon-bg {\r\n    background: url(" + __webpack_require__("../../../../../src/assets/images/image1.png") + ");\r\n    background-size: contain;\r\n    width: 210px;\r\n    height: 230px;\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n    margin: 0 auto;\r\n    padding: 80px 0;\r\n}\r\n\r\n\r\n/*-- how it works end--*/\r\n\r\n\r\n/*-about us wrapper  start--*/\r\n\r\n.about-wrapper {\r\n    position: relative;\r\n    display: table;\r\n    width: 100%;\r\n    background: #f9fafb;\r\n    height: 556px;\r\n}\r\n\r\n.aboutinner-wrapper {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n\r\n.about-wrapper .image-sec {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n}\r\n\r\n.about-wrapper .image-sec img {\r\n    max-width: 100%;\r\n}\r\n\r\n.about-wrapper .content {\r\n    width: 480px;\r\n    float: right;\r\n    padding: 0 20px;\r\n}\r\n\r\n.about-wrapper .content .para {\r\n    color: #8499a2;\r\n    font-size: 18px;\r\n    margin: 0 0 15px 0;\r\n}\r\n\r\n\r\n/*--about us wrapper  end--*/\r\n\r\n\r\n/*-gallery wrapper  start--*/\r\n\r\n.gallery-wrapper {\r\n    position: relative;\r\n    background: #fff;\r\n    padding: 50px 0 100px 0;\r\n    text-align: center;\r\n    overflow: hidden;\r\n}\r\n\r\n.gallery-wrapper .image-listing {\r\n    margin: 25px 0;\r\n    position: relative;\r\n    display: table;\r\n    z-index: 9;\r\n}\r\n\r\n.gallery-wrapper .image-listing li {\r\n    position: relative;\r\n    display: inline-block;\r\n    z-index: 9;\r\n    transition: all 0.5s ease-in-out;\r\n    -webkit-transition: all 0.5s ease-in-out;\r\n    -moz-transition: all 0.5s ease-in-out;\r\n    -ms-transition: all 0.5s ease-in-out;\r\n    margin-top: -6px;\r\n}\r\n\r\n.gallery-wrapper .image-listing li:hover .overlay,\r\n.gallery-wrapper .image-listing li:focus .overlay {\r\n    visibility: visible;\r\n    z-index: 9;\r\n}\r\n\r\n.gallery-wrapper figure {\r\n    background-color: #f9fafb;\r\n    width: 195px;\r\n    height: 195px;\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n    background-size: cover;\r\n}\r\n\r\n.gallery-wrapper .overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background: rgba(0, 0, 0, 0.7);\r\n    visibility: hidden;\r\n    z-index: -99;\r\n    width: 100%;\r\n    height: 100%;\r\n    color: #fff;\r\n    padding: 50px 0;\r\n}\r\n\r\n.gallery-wrapper .overlay h3 {\r\n    font-size: 20px;\r\n    color: #fff;\r\n}\r\n\r\n.gallery-wrapper .overlay p {\r\n    font-size: 16px;\r\n    font-weight: 100;\r\n}\r\n\r\n.gallery-wrapper .image-listing .custom-btn {\r\n    font-size: 16px;\r\n    min-width: 110px;\r\n    padding: 10px 20px;\r\n    margin: 15px 0 0 0\r\n}\r\n\r\n.gallery-wrapper .image-listing:before {\r\n    content: '';\r\n    position: absolute;\r\n    left: -215px;\r\n    top: 0;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    background-position: left center;\r\n    width: 340px;\r\n    height: 583px;\r\n    background: url(" + __webpack_require__("../../../../../src/assets/images/gallery-leftbg.png") + ");\r\n}\r\n\r\n.gallery-wrapper .image-listing:after {\r\n    content: '';\r\n    position: absolute;\r\n    right: -215px;\r\n    top: 0;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    background-position: left center;\r\n    width: 340px;\r\n    height: 583px;\r\n    background: url(" + __webpack_require__("../../../../../src/assets/images/gallery-rightbg.png") + ");\r\n}\r\n\r\n\r\n/* Home css end\r\n*******************************/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/commonpages/landing-page/landing-page.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- home page start -->\r\n<div class=\"home-banner\">\r\n    <div class=\"home-banner-inner\">\r\n        <div class=\"container\">\r\n            <div class=\"content\">\r\n                <h1 class=\"heading\">Learn to speak a language</h1>\r\n                <p class=\"para\">Conquer a language with native teachers you pick to guide you on your language journey.</p>\r\n                <button class=\"custom-btn gradient\">Start Learning</button>\r\n            </div>\r\n            <div class=\"image-sec\">\r\n                <img src=\"assets/images/macbook.png\" alt=\"Macbook\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- home page end -->\r\n<!-- how it works -->\r\n<div class=\"howitworks clearfix\">\r\n    <div class=\"container\">\r\n        <h2 class=\"titleheading\">How it Works</h2>\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"column\">\r\n            <figure class=\"icon-bg\">\r\n                <img src=\"assets/images/icon1.png\" alt=\"\">\r\n            </figure>\r\n            <h3 class=\"heading\">Find a Teacher</h3>\r\n            <p class=\"para\">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima hic totam magni blanditiis dolorem quas ipsa facilis beatae,</p>\r\n        </div>\r\n        <div class=\"column\">\r\n            <figure class=\"icon-bg\">\r\n                <img src=\"assets/images/icon2.png\" alt=\"\">\r\n            </figure>\r\n            <h3 class=\"heading\">Book Lessons</h3>\r\n            <p class=\"para\">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima hic totam magni blanditiis dolorem quas ipsa facilis beatae,</p>\r\n        </div>\r\n        <div class=\"column\">\r\n            <figure class=\"icon-bg\">\r\n                <img src=\"assets/images/icon3.png\" alt=\"\">\r\n            </figure>\r\n            <h3 class=\"heading\">Start Mastering</h3>\r\n            <p class=\"para\">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima hic totam magni blanditiis dolorem quas ipsa facilis beatae,</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- how it works end -->\r\n<!-- about-wrapper  -->\r\n<div class=\"about-wrapper clearfix\">\r\n    <div class=\"aboutinner-wrapper\">\r\n        <div class=\"container\">\r\n            <div class=\"image-sec\">\r\n                <img src=\"assets/images/banner1.jpg\" alt=\"banner\">\r\n            </div>\r\n            <div class=\"content\">\r\n                <h2 class=\"titleheading\">Lorem Ipsum is simply</h2>\r\n                <p class=\"para\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen\r\n                    book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>\r\n                <p class=\"para\">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.</p>\r\n                <button class=\"custom-btn gradient\">Learn More</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- about-wrapper end  -->\r\n\r\n<!-- gallery-wrapper  -->\r\n<div class=\"gallery-wrapper clearfix\">\r\n    <div class=\"container\">\r\n        <h2 class=\"titleheading\">Our KoalaTalk Tutors</h2>\r\n        <ul class=\"image-listing clearfix\">\r\n            <li>\r\n                <figure style=\"background-image: url('assets/images/user1.jpg');\"></figure>\r\n                <div class=\"overlay\">\r\n                    <h3>John Doe</h3>\r\n                    <p>(English)</p>\r\n                    <button class=\"custom-btn gradient\">Book Lesson</button>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <figure style=\"background-image: url('assets/images/user2.jpg');\"></figure>\r\n                <div class=\"overlay\">\r\n                    <h3>John Doe</h3>\r\n                    <p>(English)</p>\r\n                    <button class=\"custom-btn gradient\">Book Lesson</button>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <figure style=\"background-image: url('assets/images/user1.jpg');\"></figure>\r\n                <div class=\"overlay\">\r\n                    <h3>John Doe</h3>\r\n                    <p>(English)</p>\r\n                    <button class=\"custom-btn gradient\">Book Lesson</button>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <figure style=\"background-image: url('assets/images/user2.jpg');\"></figure>\r\n                <div class=\"overlay\">\r\n                    <h3>John Doe</h3>\r\n                    <p>(English)</p>\r\n                    <button class=\"custom-btn gradient\">Book Lesson</button>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <figure style=\"background-image: url('assets/images/user1.jpg');\"></figure>\r\n                <div class=\"overlay\">\r\n                    <h3>John Doe</h3>\r\n                    <p>(English)</p>\r\n                    <button class=\"custom-btn gradient\">Book Lesson</button>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <figure style=\"background-image: url('assets/images/user2.jpg');\"></figure>\r\n                <div class=\"overlay\">\r\n                    <h3>John Doe</h3>\r\n                    <p>(English)</p>\r\n                    <button class=\"custom-btn gradient\">Book Lesson</button>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <figure style=\"background-image: url('assets/images/user1.jpg');\"></figure>\r\n                <div class=\"overlay\">\r\n                    <h3>John Doe</h3>\r\n                    <p>(English)</p>\r\n                    <button class=\"custom-btn gradient\">Book Lesson</button>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <figure style=\"background-image: url('assets/images/user2.jpg');\"></figure>\r\n                <div class=\"overlay\">\r\n                    <h3>John Doe</h3>\r\n                    <p>(English)</p>\r\n                    <button class=\"custom-btn gradient\">Book Lesson</button>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <figure style=\"background-image: url('assets/images/user1.jpg');\"></figure>\r\n                <div class=\"overlay\">\r\n                    <h3>John Doe</h3>\r\n                    <p>(English)</p>\r\n                    <button class=\"custom-btn gradient\">Book Lesson</button>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <figure style=\"background-image: url('assets/images/user2.jpg');\"></figure>\r\n                <div class=\"overlay\">\r\n                    <h3>John Doe</h3>\r\n                    <p>(English)</p>\r\n                    <button class=\"custom-btn gradient\">Book Lesson</button>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <figure style=\"background-image: url('assets/images/user1.jpg');\"></figure>\r\n                <div class=\"overlay\">\r\n                    <h3>John Doe</h3>\r\n                    <p>(English)</p>\r\n                    <button class=\"custom-btn gradient\">Book Lesson</button>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <figure style=\"background-image: url('assets/images/user2.jpg');\"></figure>\r\n                <div class=\"overlay\">\r\n                    <h3>John Doe</h3>\r\n                    <p>(English)</p>\r\n                    <button class=\"custom-btn gradient\">Book Lesson</button>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <figure style=\"background-image: url('assets/images/user1.jpg');\"></figure>\r\n                <div class=\"overlay\">\r\n                    <h3>John Doe</h3>\r\n                    <p>(English)</p>\r\n                    <button class=\"custom-btn gradient\">Book Lesson</button>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <figure style=\"background-image: url('assets/images/user2.jpg');\"></figure>\r\n                <div class=\"overlay\">\r\n                    <h3>John Doe</h3>\r\n                    <p>(English)</p>\r\n                    <button class=\"custom-btn gradient\">Book Lesson</button>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <figure style=\"background-image: url('assets/images/user2.jpg');\"></figure>\r\n                <div class=\"overlay\">\r\n                    <h3>John Doe</h3>\r\n                    <p>(English)</p>\r\n                    <button class=\"custom-btn gradient\">Book Lesson</button>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <figure style=\"background-image: url('assets/images/user2.jpg');\"></figure>\r\n                <div class=\"overlay\">\r\n                    <h3>John Doe</h3>\r\n                    <p>(English)</p>\r\n                    <button class=\"custom-btn gradient\">Book Lesson</button>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <figure style=\"background-image: url('assets/images/user2.jpg');\"></figure>\r\n                <div class=\"overlay\">\r\n                    <h3>John Doe</h3>\r\n                    <p>(English)</p>\r\n                    <button class=\"custom-btn gradient\">Book Lesson</button>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <figure style=\"background-image: url('assets/images/user2.jpg');\"></figure>\r\n                <div class=\"overlay\">\r\n                    <h3>John Doe</h3>\r\n                    <p>(English)</p>\r\n                    <button class=\"custom-btn gradient\">Book Lesson</button>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n        <button class=\"custom-btn gradient\">See More Tutors</button>\r\n    </div>\r\n</div>\r\n<!-- gallery-wrapper end -->"

/***/ }),

/***/ "../../../../../src/app/modules/commonpages/landing-page/landing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Koalatalk_src_app_header_service__ = __webpack_require__("../../../../../src/app/header.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingPageComponent = (function () {
    function LandingPageComponent(headerService) {
        this.headerService = headerService;
    }
    LandingPageComponent.prototype.ngOnInit = function () {
        this.headerService.setHeaderValue(false);
    };
    LandingPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__("../../../../../src/app/modules/commonpages/landing-page/landing-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/commonpages/landing-page/landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Koalatalk_src_app_header_service__["a" /* HeaderService */]])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/images/bg1.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg1.2cae25b7b3b2a2579b11.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/gallery-leftbg.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gallery-leftbg.3130f11ac002e8dfd4f9.png";

/***/ }),

/***/ "../../../../../src/assets/images/gallery-rightbg.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gallery-rightbg.67040fd0421a7c80f3d3.png";

/***/ }),

/***/ "../../../../../src/assets/images/image1.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image1.4dd35825efea513bc5ea.png";

/***/ })

});
//# sourceMappingURL=commonpages.module.chunk.js.map