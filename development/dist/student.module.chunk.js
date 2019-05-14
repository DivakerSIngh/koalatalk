webpackJsonp(["student.module"],{

/***/ "../../../../../src/app/modules/student/components/student-list/student-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/student/components/student-list/student-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  student-list works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/student/components/student-list/student-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentListComponent; });
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

var StudentListComponent = (function () {
    function StudentListComponent() {
    }
    StudentListComponent.prototype.ngOnInit = function () {
    };
    StudentListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-student-list',
            template: __webpack_require__("../../../../../src/app/modules/student/components/student-list/student-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/student/components/student-list/student-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StudentListComponent);
    return StudentListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/student/components/student-profile-first/student-profile-first.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null,null,null],\"sourceMap\":false}!../../../material/prebuilt-themes/deeppurple-amber.css"), "");

// module
exports.push([module.i, ".basic-container {\r\n    padding: 5px;\r\n}\r\n\r\n.version-info {\r\n    font-size: 8pt;\r\n    float: right;\r\n}\r\n\r\n.choose-image {\r\n    position: relative;\r\n}\r\n\r\n.choose-image .profile-errormsg {\r\n    position: absolute;\r\n    top: 150px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    -webkit-transform: translateX(-50%);\r\n    -moz-transform: translateX(-50%);\r\n    -ms-transform: translateX(-50%);\r\n    color: #ff0000;\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/student/components/student-profile-first/student-profile-first.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- home page start -->\r\n<div class=\"profile-wrapper\">\r\n    <div class=\"text-center\">\r\n        <h1 class=\"titleheading small\">Profile Image</h1>\r\n    </div>\r\n    <div class=\"profile-imagesec-inner section-wrapper\">\r\n        <div class=\"choose-image\">\r\n            <figure class=\"profileimage\">\r\n                <img [src]=\"viewImage\" src=\"./assets/images/avtar.png\" alt=\"User\">\r\n            </figure>\r\n            <div class=\"profile-errormsg\">{{requiredStatus}}</div>\r\n            <div class=\"browse-btn\">Browse\r\n                <input type=\"file\" name=\"avatar\" (change)=\"onFileChange($event)\" accept=\"image/*\" class=\"browse-input\" id=\"docfileupload\">\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"other-option\"><span> Or Import From </span></div>\r\n        <div class=\"social-icon\">\r\n            <a href=\"javascript:void\" class=\"google-plus\" (click)=\"connectWithGooglePlus()\" ><i class=\"fa fa-google-plus\"></i></a>\r\n            <a href=\"javascript:void\" class=\"facebook\" (click)=\"getImageFromFacebook()\" ><i class=\"fa fa-facebook\"></i></a>\r\n        </div>\r\n        <div class=\"button-wrapper withbg text-right\">\r\n            <a (click)=\"goToSecondStep()\" class=\"gradient custom-btn small\">Next</a>\r\n            <!-- <mat-spinner></mat-spinner> -->\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- home page end -->"

/***/ }),

/***/ "../../../../../src/app/modules/student/components/student-profile-first/student-profile-first.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentProfileFirstComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_shared_loader__ = __webpack_require__("../../../../../src/app/modules/shared/loader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_service__ = __webpack_require__("../../../../../src/app/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular4_social_login__ = __webpack_require__("../../../../angular4-social-login/angular4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular4_social_login__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StudentProfileFirstComponent = (function () {
    //@Output() disableParentLinks=new EventEmitter<any>();
    function StudentProfileFirstComponent(route, router, studentService, loader, headerService, authService) {
        this.route = route;
        this.router = router;
        this.studentService = studentService;
        this.loader = loader;
        this.headerService = headerService;
        this.authService = authService;
        this.viewImage = "./assets/images/avtar.png";
        this.ifLogoOrNot = true;
        this.isprofilePicSelected = false;
        this.isProfilePicAlreadySelected = false;
        this.isSocialMediaImage = false;
    }
    StudentProfileFirstComponent.prototype.ngOnInit = function () {
        //hiding the 
        this.headerService.setHeaderValue(true);
        this.loader.display(true);
        this.varificationId = this.route.snapshot.paramMap.get("id");
        if (this.varificationId) {
            localStorage.setItem('auth-token', this.varificationId);
            localStorage.setItem('varificationId', this.varificationId);
        }
        this.formData = new FormData();
        //fetching the student information
        this.getStudentInformation();
    };
    //fetching student information method
    StudentProfileFirstComponent.prototype.getStudentInformation = function () {
        var _this = this;
        debugger;
        this.studentService.getStudentInformation().subscribe(function (data) {
            debugger;
            _this.loader.display(false);
            if (data.code == '200') {
                debugger;
                if (data.data[0].profileStepFour != undefined && data.data[0].profileStepFour == true) {
                    //redirect student to his main index page
                    //this.router.navigate(['']);
                }
                else {
                    if (data.data.length > 0) {
                        if (data.data[0].image != undefined) {
                            _this.viewImage = data.data[0].image;
                            _this.isProfilePicAlreadySelected = true;
                        }
                    }
                }
            }
            else {
                _this.router.navigate(['']);
            }
        }, function (error) {
            _this.loader.display(false);
            _this.router.navigate(['']);
        });
    };
    ;
    //checking the valid image
    StudentProfileFirstComponent.prototype.isValidImage = function (ext) {
        if (ext != "jpeg" && ext != "jpg" && ext != "png" && ext != "bmp" && ext != "gif") {
            return false;
        }
        return true;
    };
    //choose image 
    StudentProfileFirstComponent.prototype.onFileChange = function (fileInput) {
        var _this = this;
        this.isprofilePicSelected = true;
        var fileList = fileInput.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            console.log(fileList, file);
            var fileSize = fileList[0].size;
            var fileExtenstion = fileList[0].name.split('.').pop();
            if (this.isValidImage(fileExtenstion)) {
                //500 KB
                if (fileSize <= 512000) {
                    debugger;
                    this.loader.display(true);
                    this.formData.set('userImage', file);
                    this.viewImage = fileInput.target.files[0];
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        _this.viewImage = e.target.result;
                        _this.isSocialMediaImage = false;
                        localStorage.setItem('localImageStorage', _this.viewImage);
                        _this.requiredStatus = '';
                        _this.ifLogoOrNot = e.target.result;
                        _this.loader.display(false);
                    };
                    reader.readAsDataURL(fileInput.target.files[0]);
                }
                else {
                    this.isprofilePicSelected = false;
                    this.requiredStatus = 'File size can not be more than 500 kb.';
                }
            }
            else {
                this.isprofilePicSelected = false;
                this.requiredStatus = 'Please upload a valid image.';
            }
        }
    };
    //to go to second step of the 
    StudentProfileFirstComponent.prototype.goToSecondStep = function () {
        var _this = this;
        debugger;
        this.loader.display(true);
        if (this.isSocialMediaImage != true) {
            if (this.isprofilePicSelected) {
                console.log(this.formData.get('userImage'));
                this.studentService.saveStudentVerificationFirstStepData(this.formData).subscribe(function (data) {
                    debugger;
                    if (data.code == '200') {
                        _this.router.navigate(['../../student/student-profile-second-step']);
                    }
                    else {
                        debugger;
                        _this.router.navigate(['']);
                    }
                }, function (error) {
                    console.log(error.code);
                    _this.router.navigate(['']);
                });
            }
            else if (this.isProfilePicAlreadySelected) {
                this.router.navigate(['../../student/student-profile-second-step']);
            }
            else {
                this.loader.display(false);
                this.requiredStatus = 'Please select a valid image first.';
            }
        }
        else {
            debugger;
            this.studentService.saveStudentVerificationFromSocialMediaFirstStepData(this.viewImage).subscribe(function (data) {
                if (data.code == '200') {
                    _this.router.navigate(['../../student/student-profile-second-step']);
                }
                else {
                    _this.router.navigate(['']);
                }
            }, function (error) {
                debugger;
                console.log(error.code);
                _this.router.navigate(['']);
            });
        }
    };
    StudentProfileFirstComponent.prototype.getImageFromFacebook = function () {
        var _this = this;
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_5_angular4_social_login__["FacebookLoginProvider"].PROVIDER_ID).then(function (value) {
            _this.viewImage = value.photoUrl;
            _this.isSocialMediaImage = true;
        }, function (error) {
            console.log(error);
        });
    };
    StudentProfileFirstComponent.prototype.connectWithGooglePlus = function () {
        var _this = this;
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_5_angular4_social_login__["GoogleLoginProvider"].PROVIDER_ID).then(function (success) {
            _this.viewImage = success.photoUrl;
            _this.isSocialMediaImage = true;
        }, function (error) {
            console.log(error);
        });
    };
    StudentProfileFirstComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-student-profile-first',
            template: __webpack_require__("../../../../../src/app/modules/student/components/student-profile-first/student-profile-first.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/student/components/student-profile-first/student-profile-first.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_student_service__["a" /* StudentService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_student_service__["a" /* StudentService */],
            __WEBPACK_IMPORTED_MODULE_2__modules_shared_loader__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_4__header_service__["a" /* HeaderService */],
            __WEBPACK_IMPORTED_MODULE_5_angular4_social_login__["AuthService"]])
    ], StudentProfileFirstComponent);
    return StudentProfileFirstComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/student/components/student-profile-fourth/student-profile-fourth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".interest-listresult {\r\n    position: relative;\r\n}\r\n\r\n.interest-listresult .interest-errormsg {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 50px;\r\n    font-size: 14px;\r\n    color: #ff0000;\r\n    padding: 5px 10px;\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/student/components/student-profile-fourth/student-profile-fourth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-wrapper\">\r\n    <div class=\"text-center\">\r\n        <h1 class=\"titleheading small\">Purpose</h1>\r\n    </div>\r\n    <div class=\"purpose-listwrap section-wrapper\">\r\n        <ul class=\"purpose-list clearfix\">\r\n            <li>\r\n                <a href=\"javascript:void(0);\" [ngClass]=\"(purpose == '1')?'active':''\" (click)=\"ChangePurpose('1')\">\r\n                    <figure>\r\n                        <img src=\"./assets/images/family-deactive.png\" class=\"deactive\" alt=\"Family\">\r\n                        <img src=\"./assets/images/family-active.png\" class=\"active\" alt=\"Family\">\r\n                    </figure>\r\n                    <span>Family</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n        \r\n                <a href=\"javascript:void(0);\" [ngClass]=\"(purpose == '2')?'active':''\" (click)=\"ChangePurpose('2')\">\r\n                    <figure>\r\n                        <img src=\"./assets/images/education-deactive.png\" class=\"deactive\" alt=\"Education\">\r\n                        <img src=\"./assets/images/education-active.png\" class=\"active\" alt=\"Education\">\r\n                    </figure>\r\n                    <span>Education</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"javascript:void(0);\" [ngClass]=\"(purpose == '3')?'active':''\" (click)=\"ChangePurpose('3')\">\r\n                    <figure>\r\n                        <img src=\"./assets/images/career-deactive.png\" class=\"deactive\" alt=\"Career\">\r\n                        <img src=\"./assets/images/career-active.png\" class=\"active\" alt=\"Career\">\r\n                    </figure>\r\n                    <span>Career</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"javascript:void(0);\" [ngClass]=\"(purpose == '4')?'active':''\" (click)=\"ChangePurpose('4')\">\r\n                    <figure>\r\n                        <img src=\"./assets/images/hobby-deactive.png\" class=\"deactive\" alt=\"Hobby\">\r\n                        <img src=\"./assets/images/hobby-active.png\" class=\"active\" alt=\"Hobby\">\r\n                    </figure>\r\n                    <span>Hobby</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"javascript:void(0);\" [ngClass]=\"(purpose == '5')?'active':''\" (click)=\"ChangePurpose('5')\">\r\n                    <figure>\r\n                        <img src=\"./assets/images/travel-deactive.png\" class=\"deactive\" alt=\"Travel\">\r\n                        <img src=\"./assets/images/travel-active.png\" class=\"active\" alt=\"Travel\">\r\n                    </figure>\r\n                    <span>Travel</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"javascript:void(0);\" [ngClass]=\"(purpose == '6')?'active':''\" (click)=\"ChangePurpose('6')\">\r\n                    <figure>\r\n                        <img src=\"./assets/images/other-deactive.png\" class=\"deactive\" alt=\"\">\r\n                        <img src=\"./assets/images/other-active.png\" class=\"active\" alt=\"\">\r\n                    </figure>\r\n                    <span>Other</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"form-group\">\r\n            <label class=\"profile-label pn\">Additional Information</label>\r\n            <p class=\"parag\">(Optional)</p>\r\n        </div>\r\n        <div class=\"form-group mlr40\">\r\n            <textarea name=\"\" id=\"\" cols=\"30\" rows=\"5\" [(ngModel)]=\"additionalInformation\"></textarea>\r\n        </div>\r\n    </div>\r\n    <div class=\"text-center\">\r\n        <h1 class=\"titleheading small\">Interests</h1>\r\n    </div>\r\n    <div class=\"section-wrapper\">\r\n        <label class=\"profile-label mn\">Select Your Interests :</label>\r\n        <ul class=\"interest-list clearfix\">\r\n            <li *ngFor=\"let i of allIntrest;let index=index\">\r\n\r\n                <!-- <a href=\"javascript:void(0);\" [ngClass]=\"{'active':intrest == i._id}\" (click)=\"changeIntrest(i._id)\" [ngStyle]=\"{'background': 'url(' + i.imageUrl + ')'}\"> -->\r\n                        <a href=\"javascript:void(0);\" [ngClass]=\"{'active':checkForIntrest(i._id)}\" (click)=\"changeIntrest(i._id, 'change')\" [ngStyle]=\"{'background': 'url(' + i.imageUrl + ')'}\">\r\n                    <div class=\"overlay\">\r\n                        <h4 class=\"detail\">{{i.name}}</h4>\r\n                        <div class=\"right-check\" (click)=\"changeIntrest(i._id, 'remove')\" ><img src=\"./assets/images/tick.png\" alt=\"\"></div>\r\n                    </div>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"interest-listresult\">\r\n            <h4 class=\"head\">{{intrestName}}</h4>\r\n            <div class=\"custom-check-wrap\" *ngFor=\"let inner of allInrestInner;let index=index\">\r\n                <input type=\"checkbox\" value=\"\" name=\"check\" id=\"{{inner._id}}\" [checked]=\"isCheckedOrNot(inner._id)\" (change)=\"addRemoveSelection(inner._id)\">\r\n                <label for=\"{{inner._id}}\">{{inner.name}} </label>\r\n            </div>\r\n            <div class=\"interest-errormsg\">{{validationStatus}}</div>\r\n        </div>\r\n        <div class=\"button-wrapper withbg text-right\">\r\n            <a (click)=\"goToThiredStep()\" class=\"prev custom-btn small pull-left\">Previous</a>\r\n            <a (click)=\"saveData()\" class=\"gradient custom-btn small\">Submit</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- home page end -->"

/***/ }),

/***/ "../../../../../src/app/modules/student/components/student-profile-fourth/student-profile-fourth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentProfileFourthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_shared_loader__ = __webpack_require__("../../../../../src/app/modules/shared/loader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_service__ = __webpack_require__("../../../../../src/app/header.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentProfileFourthComponent = (function () {
    function StudentProfileFourthComponent(route, router, studentService, loaderService, headerService) {
        this.route = route;
        this.router = router;
        this.studentService = studentService;
        this.loaderService = loaderService;
        this.headerService = headerService;
        //intrest: string;
        this.intrest = [];
        this.allIntrest = [];
        this.allInrestInner = [];
        this.allSelectedintrestInner = [];
    }
    StudentProfileFourthComponent.prototype.ngOnInit = function () {
        //hide and disable the header component
        this.headerService.setHeaderValue(true);
        this.loaderService.display(true);
        this.purpose = '1';
        //this.intrest = '1';
        // this.intrest.push(1);
        this.getStudnetIntrest();
    };
    //active menu of interst
    StudentProfileFourthComponent.prototype.checkForIntrest = function (existvalue) {
        var exist = this.intrest.filter(function (x) { return x == existvalue; });
        if (exist.length > 0) {
            return true;
        }
        return false;
    };
    StudentProfileFourthComponent.prototype.ChangePurpose = function (purpose) {
        this.purpose = purpose;
    };
    StudentProfileFourthComponent.prototype.goToThiredStep = function () {
        this.router.navigate(['../../student/student-profile-third-step']);
    };
    //get student intrestOptions
    StudentProfileFourthComponent.prototype.getStudnetIntrest = function () {
        var _this = this;
        this.studentService.getStudentIntrest().subscribe(function (data) {
            if (data.code == '200') {
                if (data.dataGrid.length > 0) {
                    _this.allIntrest = data.dataGrid;
                    var inner = _this.allIntrest.filter(function (x) { return x._id == 1; });
                    _this.intrestName = inner[0].name;
                    _this.allInrestInner = inner[0].innerData;
                }
                else {
                    _this.router.navigate(['']);
                }
                if (data.data.length > 0) {
                    if (data.data[0].purpose != undefined) {
                        _this.purpose = data.data[0].purpose;
                    }
                    if (data.data[0].parantInterest != undefined) {
                        _this.intrest = [];
                        for (var i = 0; i < data.data[0].parantInterest.length; i++) {
                            _this.intrest.push(data.data[0].parantInterest[i]);
                        }
                        ;
                    }
                    if (data.data[0].interests != undefined) {
                        _this.allSelectedintrestInner = [];
                        for (var i = 0; i < data.data[0].interests.length; i++) {
                            _this.allSelectedintrestInner.push(data.data[0].interests[i]);
                        }
                        ;
                    }
                    if (data.data[0].additionalInfo != undefined) {
                        _this.additionalInformation = data.data[0].additionalInfo;
                    }
                    // if (data.data[0].interests != undefined) {
                    //    this.allSelectedintrestInner = data.data[0].interests;
                    //    let inner = this.allIntrest;//.filter(x => x._id == this.intrest);
                    //   // this.intrestName =inner[0].name;
                    //    this.allInrestInner = inner[0].innerData;
                    // }
                    _this.loaderService.display(false);
                    //  } else {
                    //   this.router.navigate(['']);
                }
            }
            else {
                _this.router.navigate(['']);
            }
        }, function (error) {
            //   if (error.code == 501) {
            _this.router.navigate(['']);
            // }
        });
    };
    ;
    StudentProfileFourthComponent.prototype.isCheckedOrNot = function (value) {
        if (this.allSelectedintrestInner.length > 0) {
            var status = false;
            for (var i = 0; i < this.allSelectedintrestInner.length; i++) {
                if (this.allSelectedintrestInner[i] == value) {
                    status = false;
                    break;
                }
                else {
                    status = true;
                }
            }
            if (status) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    };
    StudentProfileFourthComponent.prototype.removeAllPerentChild = function (_id) {
        alert('removeAllPerentChild');
        var indexOfArray = this.intrest.indexOf(function (x) { return x == _id; });
        this.intrest.splice(indexOfArray, 1);
        var parentElement = this.allIntrest.filter(function (x) { return x._id == _id; });
        for (var t = 0; t < parentElement[0].innerData.length; t++) {
            for (var s = 0; s < this.allSelectedintrestInner.length; s++) {
                var currentValue = this.allSelectedintrestInner[s];
                if (currentValue == parentElement[0].innerData[t]._id) {
                    var index = this.allSelectedintrestInner.indexOf(currentValue);
                    this.allSelectedintrestInner.splice(index, 1);
                }
            }
        }
    };
    StudentProfileFourthComponent.prototype.addRemoveSelection = function (value) {
        this.validationStatus = '';
        if (this.allSelectedintrestInner.length > 0) {
            var status = false;
            for (var i = 0; i < this.allSelectedintrestInner.length; i++) {
                if (this.allSelectedintrestInner[i] == value) {
                    var selection = this.allSelectedintrestInner.filter(function (x) { return x == value; });
                    status = false;
                    break;
                }
                else {
                    status = true;
                }
            }
            if (status) {
                this.allSelectedintrestInner.push(value);
                var parentId = this.allIntrest.filter(function (x) { return (x.innerData.filter(function (y) { return y._id == value; }))[0]; })[0]._id;
                var existValue = this.intrest.filter(function (x) { return x == parentId; });
                if (existValue.length == 0) {
                    this.intrest.push(parentId);
                }
            }
            else {
                var count = 0;
                // var indexOfArray = this.allSelectedintrestInner.indexOf(selection[0]);
                var indexOfArray = this.allSelectedintrestInner.indexOf(selection[0]);
                this.allSelectedintrestInner.splice(indexOfArray, 1);
                //find parentId
                var parentId = this.allIntrest.filter(function (x) { return (x.innerData.filter(function (y) { return y._id == selection[0]; }))[0]; })[0]._id;
                var parentElement = this.allIntrest.filter(function (x) { return x._id == parentId; });
                for (var s = 0; s < this.allSelectedintrestInner.length; s++) {
                    var currentValue = this.allSelectedintrestInner[s];
                    for (var t = 0; t < parentElement[0].innerData.length; t++) {
                        if (currentValue == parentElement[0].innerData[t]._id) {
                            count++;
                        }
                    }
                }
                if (count <= 0) {
                    var indexOfArray = this.intrest.indexOf(parentId);
                    this.intrest.splice(indexOfArray, 1);
                }
            }
        }
        else {
            this.allSelectedintrestInner.push(value);
            var parentId = this.allIntrest.filter(function (x) { return (x.innerData.filter(function (y) { return y._id == value; }))[0]; })[0]._id;
            var isExistsOrNot = this.intrest.filter(function (x) { return x == parentId; });
            if (isExistsOrNot.length == 0) {
                this.intrest.push(parentId);
            }
        }
    };
    StudentProfileFourthComponent.prototype.changeIntrest = function (intrest, purpose) {
        if (purpose == 'change') {
            this.validationStatus = '';
            var exist = this.intrest.filter(function (x) { return x == intrest; });
            if (exist.length > 0) {
                // var indexOfArray = this.intrest.indexOf(exist[0]);
                //this.intrest.splice(indexOfArray,1);
                //removing the child selection 
                var inner = this.allIntrest.filter(function (x) { return x._id == intrest; });
                var innerData = inner[0].innerData;
                this.intrestName = inner[0].name;
                this.allInrestInner = innerData;
                // for (var i = 0; i < innerData.length; i++) {
                //   let arryValue = innerData[i]._id;
                //   var indexOfArray = this.allSelectedintrestInner.indexOf(arryValue);
                //   //this.allSelectedintrestInner.splice(indexOfArray,1);
                // }
            }
            else {
                var inner = this.allIntrest.filter(function (x) { return x._id == intrest; });
                this.intrestName = inner[0].name;
                this.allInrestInner = inner[0].innerData;
            }
        }
        else {
            debugger;
            var indexOfArray = this.intrest.findIndex(function (x) { return x == intrest; });
            this.intrest.splice(indexOfArray, 1);
            var parentElement = this.allIntrest.filter(function (x) { return x._id == intrest; });
            for (var t = 0; t < parentElement[0].innerData.length; t++) {
                for (var s = 0; s < this.allSelectedintrestInner.length; s++) {
                    var currentValue = this.allSelectedintrestInner[s];
                    if (currentValue == parentElement[0].innerData[t]._id) {
                        var index = this.allSelectedintrestInner.indexOf(currentValue);
                        this.allSelectedintrestInner.splice(index, 1);
                    }
                }
            }
        }
    };
    //save student data
    StudentProfileFourthComponent.prototype.saveData = function () {
        var _this = this;
        this.loaderService.display(true);
        if (this.allSelectedintrestInner.length > 0) {
            this.validationStatus = '';
            var obj = {
                purpose: this.purpose,
                parantInterest: this.intrest,
                intrest: this.allSelectedintrestInner,
                additionalInformation: this.additionalInformation
            };
            this.studentService.saveStudentFourthStepData(obj).subscribe(function (data) {
                if (data.code == '200') {
                    _this.router.navigate(['../../student/student-profile-fourth-step']);
                }
                else {
                    _this.loaderService.display(true);
                    _this.router.navigate(['']);
                }
            }, function (error) {
                console.log(error.code);
            });
        }
        else {
            this.loaderService.display(false);
            this.validationStatus = 'Please check at least 1 intrest';
        }
    };
    StudentProfileFourthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-student-profile-fourth',
            template: __webpack_require__("../../../../../src/app/modules/student/components/student-profile-fourth/student-profile-fourth.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/student/components/student-profile-fourth/student-profile-fourth.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_student_service__["a" /* StudentService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_student_service__["a" /* StudentService */],
            __WEBPACK_IMPORTED_MODULE_3__modules_shared_loader__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_4__header_service__["a" /* HeaderService */]])
    ], StudentProfileFourthComponent);
    return StudentProfileFourthComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/student/components/student-profile-second/student-profile-second.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error-inputmsg {\r\n    bottom: -29px;\r\n    padding: 5px 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/student/components/student-profile-second/student-profile-second.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- home page start -->\r\n<div class=\"profile-wrapper\">\r\n    <div class=\"text-center\">\r\n        <h1 class=\"titleheading small\">Language You Speak</h1>\r\n    </div>\r\n    <div class=\"section-wrapper choose-language\">\r\n        <div class=\"input-wrap maxwidth-select\">\r\n            <span class=\"selectpicker-btn\"></span>\r\n            <select class=\"custom-selectpicker\" [(ngModel)]=\"selecteLanguages\" (change)=\"selectLanguageYouSepak()\">\r\n                <option value=\"0\" disabled selected>Select Language</option>\r\n                <option *ngFor=\"let language of languagesYouSpeak;let i=index\" value=\"{{language.counrty}}\">\r\n                        {{language.counrty}}\r\n                </option>              \r\n            </select>\r\n            <span *ngIf=\"noLanguageSelction\" class=\"error-inputmsg\" style=\"display:block\">Please select Languages you speak. </span>\r\n            <span *ngIf=\"noMoreThanFive\" class=\"error-inputmsg\" style=\"display:block\">Please select only max 5 Languages you speak. </span>\r\n\r\n        </div>\r\n        <ul class=\"append-langlist\">\r\n            <li *ngFor=\"let language of languagesYouSpeakSelection;let i=index\">\r\n                {{language.value}} <span class=\"cross-image\" (click)=\"removeLanguageFromList(i)\"><img src=\"./assets/images/select-cross.png\" alt=\"\"></span>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"text-center\">\r\n        <h1 class=\"titleheading small\">Time Zone</h1>\r\n    </div>\r\n    <div class=\"section-wrapper\">\r\n        <label class=\"profile-label text-center\">Where are you currently staying now?</label>\r\n        <div class=\"input-wrap maxwidth-select\">\r\n            <span class=\"selectpicker-btn\"></span>\r\n            <select class=\"custom-selectpicker\" name=\"country\" [(ngModel)]=\"country\" (change)=\"changeCountry()\">\r\n                <option value=\"0\" disabled selected>Select country</option>\r\n                <option *ngFor=\"let c of countries;let i=index\" value=\"{{c.counrty}}\">\r\n                    {{c.counrty}}\r\n                </option>\r\n              \r\n                <!-- <option value=\"1\">India</option>\r\n                <option value=\"2\">Spain</option>\r\n                <option value=\"3\">Chaina</option>\r\n                <option value=\"4\">Koeria</option>\r\n                <option value=\"5\">Japan</option> -->\r\n            </select>\r\n            <span *ngIf=\"noCountrySelected\" class=\"error-inputmsg\" style=\"display:block\">Please selecte a country. </span>\r\n        </div>\r\n\r\n        <label class=\"profile-label text-center\">Your time zone?</label>\r\n        <div class=\"input-wrap maxwidth-select\">\r\n            <input type=\"text\" name=\"timeZone\" value=\"\" placeholder=\"(UTC+05:00)\" [(ngModel)]=\"timeZone\" disabled />\r\n            <!-- <span  *ngIf=\"noTimeZone\" class=\"error-inputmsg\" style=\"display:block\">Please enter your time zone </span> -->\r\n        </div>\r\n        <div class=\"button-wrapper withbg text-right\">\r\n            <a [routerLink]=\"['../profile',varificationId]\" class=\"custom-btn small prev pull-left\">Previous</a>\r\n            <!-- <button type=\"submit\" name=\"\" value=\"\" class=\"custom-btn small prev pull-left\">Previous</button> -->\r\n            <!-- <button type=\"submit\" name=\"\" value=\"\" class=\"gradient custom-btn small\">Next</button> -->\r\n            <!-- <a href=\"Student_Profile_Screen3.html\" class=\"gradient custom-btn small\">Next</a> -->\r\n            <a (click)=\"goToThiredStep()\" class=\"gradient custom-btn small\">Next</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- home page end -->"

/***/ }),

/***/ "../../../../../src/app/modules/student/components/student-profile-second/student-profile-second.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentProfileSecondComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_shared_loader__ = __webpack_require__("../../../../../src/app/modules/shared/loader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_service__ = __webpack_require__("../../../../../src/app/header.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentProfileSecondComponent = (function () {
    function StudentProfileSecondComponent(route, router, studentService, loaderService, headerService) {
        this.route = route;
        this.router = router;
        this.studentService = studentService;
        this.loaderService = loaderService;
        this.headerService = headerService;
        this.languagesYouSpeakSelection = [];
        this.languagesYouSpeak = [];
        this.countries = [];
        this.noLanguageSelction = false;
        this.country = '0';
        this.noCountrySelected = false;
        this.noTimeZone = false;
        this.timeZone = '';
        this.noMoreThanFive = false;
    }
    StudentProfileSecondComponent.prototype.ngOnInit = function () {
        this.headerService.setHeaderValue(true);
        this.selecteLanguages = '0';
        this.getLanguagesYouSpeak();
        var varificationId = localStorage.getItem('varificationId') || null;
        if (varificationId) {
            this.varificationId = varificationId;
        }
        this.getCountriesAndTimeZone();
        this.getStudentInformation();
    };
    //get student full information
    StudentProfileSecondComponent.prototype.getStudentInformation = function () {
        var _this = this;
        this.loaderService.display(true);
        this.studentService.getStudentInformation().subscribe(function (data) {
            _this.loaderService.display(false);
            if (data.code == '200') {
                if (data.data.length > 0) {
                    if (data.data[0].languages != undefined) {
                        for (var i = 0; i < data.data[0].languages.length; i++) {
                            var value = {
                                value: data.data[0].languages[i]
                            };
                            _this.languagesYouSpeakSelection.push(value);
                            _this.noLanguageSelction = false;
                        }
                    }
                    if (data.data[0].counrty != undefined) {
                        _this.country = data.data[0].counrty;
                    }
                    if (data.data[0].timeZone != undefined) {
                        _this.timeZone = data.data[0].timeZone;
                    }
                    _this.loaderService.display(false);
                }
            }
            else {
                _this.loaderService.display(false);
                _this.router.navigate(['']);
            }
        }, function (error) {
            debugger;
            //   if (error.code == 501) {
            _this.router.navigate(['']);
            // }
        });
    };
    ;
    //to add language in the selection list
    StudentProfileSecondComponent.prototype.selectLanguageYouSepak = function () {
        if (this.languagesYouSpeakSelection.length < 5) {
            this.noMoreThanFive = false;
            var status = true;
            var index;
            for (var i = 0; i < this.languagesYouSpeakSelection.length; i++) {
                if (this.languagesYouSpeakSelection[i].value == this.selecteLanguages) {
                    status = false;
                    index = i;
                    break;
                }
            }
            if (status) {
                var value = {
                    value: this.selecteLanguages
                };
                this.languagesYouSpeakSelection.push(value);
                this.noLanguageSelction = false;
            }
            // else{
            //   this.selecteLanguages = '0';
            //   this.languagesYouSpeakSelection.splice(index, 1);
            // }
        }
        else {
            this.noMoreThanFive = true;
        }
    };
    StudentProfileSecondComponent.prototype.removeLanguageFromList = function (index) {
        this.noMoreThanFive = false;
        this.selecteLanguages = '0';
        this.languagesYouSpeakSelection.splice(index, 1);
        if (this.languagesYouSpeakSelection.length > 0) {
            this.noLanguageSelction = false;
        }
        else {
            this.noLanguageSelction = true;
        }
    };
    StudentProfileSecondComponent.prototype.getLanguagesYouSpeak = function () {
        var _this = this;
        this.studentService.getStudentLanguages().subscribe(function (data) {
            debugger;
            if (data.code == '200') {
                _this.languagesYouSpeak = data.data;
            }
            else {
            }
        }, function (error) {
            console.log(error.code);
        });
    };
    StudentProfileSecondComponent.prototype.gotoSecondStep = function () {
        this.router.navigate(['../../student/profile']);
    };
    //get countries and their timezone
    StudentProfileSecondComponent.prototype.getCountriesAndTimeZone = function () {
        var _this = this;
        this.studentService.getCountriesAndTimeZone().subscribe(function (data) {
            if (data.code == '200') {
                _this.countries = data.data;
            }
            else {
                _this.router.navigate(['']);
            }
        }, function (error) {
            debugger;
            console.log(error.code);
        });
    };
    StudentProfileSecondComponent.prototype.goToThiredStep = function () {
        var _this = this;
        this.validate();
        if (this.languagesYouSpeakSelection.length > 0) {
            this.noLanguageSelction = false;
            if (this.country != '0') {
                if (this.timeZone != '') {
                    this.loaderService.display(true);
                    this.noTimeZone = false;
                    var languages = [];
                    for (var i = 0; i < this.languagesYouSpeakSelection.length; i++) {
                        languages.push(this.languagesYouSpeakSelection[i].value);
                    }
                    var obj = {
                        language: languages,
                        counrty: this.country,
                        timeZone: this.timeZone
                    };
                    this.studentService.saveStudentSecondStepData(obj).subscribe(function (data) {
                        if (data.code == '200') {
                            _this.loaderService.display(false);
                            _this.router.navigate(['../../student/student-profile-third-step']);
                        }
                        else {
                            _this.router.navigate(['']);
                        }
                    }, function (error) {
                        debugger;
                        console.log(error.code);
                    });
                }
                else {
                    this.noTimeZone = true;
                }
            }
            else {
                this.noCountrySelected = true;
            }
        }
        else {
            this.noLanguageSelction = true;
        }
    };
    StudentProfileSecondComponent.prototype.validate = function () {
        if (this.languagesYouSpeakSelection.length > 0) {
            this.noLanguageSelction = false;
        }
        else {
            this.noLanguageSelction = true;
        }
        if (this.country != '0') {
            this.noCountrySelected = false;
        }
        else {
            this.noCountrySelected = true;
        }
        if (this.timeZone != '') {
            this.noTimeZone = false;
        }
        else {
            this.noTimeZone = true;
        }
    };
    StudentProfileSecondComponent.prototype.changeCountry = function () {
        var _this = this;
        this.noMoreThanFive = false;
        var timeZone = this.countries.filter(function (x) { return x.counrty == _this.country; });
        this.timeZone = timeZone[0].timeZone;
        this.noCountrySelected = false;
    };
    StudentProfileSecondComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-student-profile-second',
            template: __webpack_require__("../../../../../src/app/modules/student/components/student-profile-second/student-profile-second.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/student/components/student-profile-second/student-profile-second.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_student_service__["a" /* StudentService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_student_service__["a" /* StudentService */],
            __WEBPACK_IMPORTED_MODULE_3__modules_shared_loader__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_4__header_service__["a" /* HeaderService */]])
    ], StudentProfileSecondComponent);
    return StudentProfileSecondComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/student/components/student-profile-third/student-profile-third.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null,null,null],\"sourceMap\":false}!../../../material/prebuilt-themes/deeppurple-amber.css"), "");

// module
exports.push([module.i, "/*---------- chart ---*/\r\n\r\n.learning-graph {\r\n    max-width: 560px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.learning-graph .barchart {\r\n    text-align: center;\r\n    margin: 40px 0;\r\n}\r\n\r\n.learning-graph .barchart li {\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n}\r\n\r\n.learning-graph .barchart li span {\r\n    background: #ebebeb;\r\n    width: 20px;\r\n    display: block;\r\n    border-radius: 25px;\r\n    cursor: pointer;\r\n}\r\n\r\n.barchart li.active span {\r\n    background: #589b24 !important;\r\n}\r\n\r\n.barchart li:first-child span {\r\n    height: 50px;\r\n}\r\n\r\n.barchart li:nth-child(2) span {\r\n    height: 70px;\r\n}\r\n\r\n.barchart li:nth-child(3) span {\r\n    height: 95px;\r\n}\r\n\r\n.barchart li:nth-child(4) span {\r\n    height: 125px;\r\n}\r\n\r\n.barchart li:nth-child(5) span {\r\n    height: 145px;\r\n}\r\n\r\n.barchart li:nth-child(6) span {\r\n    height: 160px;\r\n}\r\n\r\n.progress-wrap {\r\n    position: relative;\r\n}\r\n\r\n.progress-wrap .pointer {\r\n    width: 20px;\r\n    height: 20px;\r\n    background: #589b24;\r\n    border-radius: 50%;\r\n    display: block;\r\n    float: left;\r\n    cursor: pointer;\r\n    margin-top: -7px;\r\n}\r\n\r\n.progressbar {\r\n    width: 100%;\r\n    background: #5c5c5c;\r\n    height: 6px;\r\n    border-radius: 8px;\r\n}\r\n\r\n.progress-wrap .datapoint {\r\n    position: relative;\r\n    margin: 10px -45px;\r\n    text-align: center;\r\n}\r\n\r\n.datapoint li {\r\n    float: left;\r\n    width: 16.6%;\r\n    font-size: 14px;\r\n    color: #8499a2;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/student/components/student-profile-third/student-profile-third.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-wrapper\">\r\n    <div class=\"text-center\">\r\n        <h1 class=\"titleheading small\">What You Want To Learn?</h1>\r\n    </div>\r\n    <div class=\"section-wrapper\">\r\n        <div class=\"form-group\">\r\n            <label class=\"profile-label text-center\">What language are you learning?</label>\r\n            <div class=\"input-wrap maxwidth-select\">\r\n                <span class=\"selectpicker-btn\"></span>\r\n                <select name=\"speakingLanguage\" class=\"custom-selectpicker\" [(ngModel)]=\"speakingLanguage\" (change)=\"ChangeLanguage()\">\r\n                  <option value=\"0\" disabled selected>Select Language</option>\r\n                  <option *ngFor=\"let language of languageYouAreLeaning;let i=index\"\r\n                  value=\"{{language.counrty}}\">{{language.counrty}}</option>                \r\n              </select>\r\n                <span *ngIf=\"noLanguageSelction\" class=\"error-inputmsg\" style=\"display:block\">Please select Language you are learning. </span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <p class=\"parag bold text-center\">Millions of native speakers. </p>\r\n            <p class=\"parag text-center\">You can add more languages in your settings later</p>\r\n        </div>\r\n        <label class=\"profile-label text-center\" *ngIf=\"speakingLanguage!='0'\">How well do you speak {{speakingLanguage}}?</label>\r\n        <div class=\"form-group\">\r\n            <div class=\"learning-graph\">\r\n                <ul class=\"barchart clearfix\">\r\n                    <!-- <li class=\"active\"><span></span></li> -->\r\n                    <li [ngClass]=\"{'active':progressBarValue >= '1'}\" (click)=\"ChangeValue(1)\"><span></span></li>\r\n                    <li [ngClass]=\"{'active':progressBarValue >= '2'}\" (click)=\"ChangeValue(2)\"><span></span></li>\r\n                    <li [ngClass]=\"{'active':progressBarValue >= '3'}\" (click)=\"ChangeValue(3)\"><span></span></li>\r\n                    <li [ngClass]=\"{'active':progressBarValue >= '4'}\" (click)=\"ChangeValue(4)\"><span></span></li>\r\n                    <li [ngClass]=\"{'active':progressBarValue >= '5'}\" (click)=\"ChangeValue(5)\"><span></span></li>\r\n                    <li [ngClass]=\"{'active':progressBarValue >= '6'}\" (click)=\"ChangeValue(6)\"><span></span></li>\r\n                </ul>\r\n                <div class=\"progress-wrap\">\r\n\r\n                    <mat-slider step=\"17\" min=\"1\" max=\"100\" [value]=\"sliderValue\" (change)=\"changeSliderValue($event)\"></mat-slider>\r\n                    <!-- {{sliderValue}} -->\r\n                    <!-- <mat-slider></mat-slider>   -->\r\n                    <!-- <div class=\"progressbar\"><span class=\"pointer\" [style.left]=\"dynamicStyle\"  style=\"position: relative;\"></span></div> -->\r\n                    <ul class=\"datapoint\">\r\n                        <li>(A1)</li>\r\n                        <li>(A2)</li>\r\n                        <li>(B1)</li>\r\n                        <li>(B2)</li>\r\n                        <li>(C1)</li>\r\n                        <li>(C2)</li>\r\n                    </ul>\r\n                </div>\r\n\r\n\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"button-wrapper withbg text-right\">\r\n            <a (click)=\"goToSecondStep()\" class=\"custom-btn small prev pull-left\">Previous</a>\r\n            <a (click)=\"goToFourthStep()\" class=\"gradient custom-btn small\">Next</a>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/student/components/student-profile-third/student-profile-third.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentProfileThirdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_shared_loader__ = __webpack_require__("../../../../../src/app/modules/shared/loader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_service__ = __webpack_require__("../../../../../src/app/header.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var StudentProfileThirdComponent = (function () {
    function StudentProfileThirdComponent(document, elementRef, route, router, studentService, loaderService, headerService) {
        this.document = document;
        this.elementRef = elementRef;
        this.route = route;
        this.router = router;
        this.studentService = studentService;
        this.loaderService = loaderService;
        this.headerService = headerService;
        this.languageYouAreLeaning = [];
        this.noLanguageSelction = false;
        this.sliderValue = 0;
    }
    StudentProfileThirdComponent.prototype.ngOnInit = function () {
        this.headerService.setHeaderValue(true);
        this.loaderService.display(true);
        this.progressBarValue = '1';
        this.getLanguageYouAreLearning();
        this.speakingLanguage = '0';
        this.dynamicStyle = '0px';
        this.sliderValue = 0;
        this.getStudentInformation();
    };
    // ngAfterViewInit() {
    //   var element=this.elementRef.nativeElement;
    //   setTimeout(function() {
    //     var s = this.document.createElement("script");
    //     s.type = "text/javascript";
    //     s.src = "assets/js/slider.js";
    //     element.appendChild(s);  
    //   }, 1000);
    // }
    //get student full information
    StudentProfileThirdComponent.prototype.getStudentInformation = function () {
        var _this = this;
        this.studentService.getStudentInformation().subscribe(function (data) {
            debugger;
            if (data.code == '200') {
                if (data.data.length > 0) {
                    // if(data.data[0].profileStepThree){
                    if (data.data[0].mainlanguage != undefined) {
                        _this.speakingLanguage = data.data[0].mainlanguage;
                    }
                    if (data.data[0].rate != undefined) {
                        _this.progressBarValue = data.data[0].rate;
                        _this.ChangeValue(_this.progressBarValue);
                    }
                    _this.loaderService.display(false);
                    // }
                    // else{
                    //   this.router.navigate(['']);
                    //  // this.router.navigate(['../../student/student-profile-second-step'])
                    // }
                }
            }
            else {
                _this.router.navigate(['']);
            }
        }, function (error) {
            //   if (error.code == 501) {
            _this.router.navigate(['']);
            // }
        });
    };
    ;
    StudentProfileThirdComponent.prototype.goToSecondStep = function () {
        this.router.navigate(['../../student/student-profile-second-step']);
    };
    StudentProfileThirdComponent.prototype.changeSliderValue = function (event) {
        this.loaderService.display(true);
        var value = event.value;
        if (value <= 16.16) {
            this.progressBarValue = '1';
            this.sliderValue = 0;
        }
        else if (value >= 16.16 && value <= 33.33) {
            this.progressBarValue = '2';
            this.sliderValue = 21;
        }
        else if (value >= 33.33 && value <= 50.00) {
            this.progressBarValue = '3';
            this.sliderValue = 41;
        }
        else if (value >= 50.00 && value <= 66.66) {
            this.progressBarValue = '4';
            this.sliderValue = 61;
        }
        else if (value >= 66.66 && value <= 83.33) {
            this.progressBarValue = '5';
            this.sliderValue = 80;
        }
        else {
            this.progressBarValue = '6';
            this.sliderValue = 100;
        }
        this.loaderService.display(false);
    };
    StudentProfileThirdComponent.prototype.getLanguageYouAreLearning = function () {
        var _this = this;
        this.studentService.getStudentLanguages().subscribe(function (data) {
            if (data.code == '200') {
                _this.languageYouAreLeaning = data.data;
            }
            else {
                _this.router.navigate(['']);
            }
        }, function (error) {
            console.log(error.code);
            _this.router.navigate(['']);
        });
    };
    StudentProfileThirdComponent.prototype.ChangeValue = function (value) {
        this.loaderService.display(true);
        if (value == '1') {
            this.dynamicStyle = '0px';
            this.sliderValue = 0;
        }
        else if (value == '2') {
            this.dynamicStyle = '106px';
            this.sliderValue = 21;
        }
        else if (value == '3') {
            this.dynamicStyle = '215px';
            this.sliderValue = 41;
        }
        else if (value == '4') {
            this.dynamicStyle = '323px';
            this.sliderValue = 61;
        }
        else if (value == '5') {
            this.dynamicStyle = '431px';
            this.sliderValue = 80;
        }
        else if (value == '6') {
            this.dynamicStyle = '541px';
            this.sliderValue = 100;
        }
        this.progressBarValue = value;
        this.loaderService.display(false);
    };
    StudentProfileThirdComponent.prototype.goToFourthStep = function () {
        var _this = this;
        if (this.speakingLanguage !== '0') {
            var obj = {
                mainlanguage: this.speakingLanguage,
                rate: this.progressBarValue
            };
            this.noLanguageSelction = false;
            this.studentService.saveStudentThirdStepData(obj).subscribe(function (data) {
                if (data.code == '200') {
                    _this.router.navigate(['../../student/student-profile-fourth-step']);
                }
                else {
                    _this.router.navigate(['']);
                }
            }, function (error) {
                debugger;
                console.log(error.code);
            });
        }
        else {
            this.noLanguageSelction = true;
        }
    };
    StudentProfileThirdComponent.prototype.ChangeLanguage = function () {
        this.noLanguageSelction = false;
    };
    StudentProfileThirdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-student-profile-third',
            template: __webpack_require__("../../../../../src/app/modules/student/components/student-profile-third/student-profile-third.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/student/components/student-profile-third/student-profile-third.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_student_service__["a" /* StudentService */]]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_student_service__["a" /* StudentService */],
            __WEBPACK_IMPORTED_MODULE_4__modules_shared_loader__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_5__header_service__["a" /* HeaderService */]])
    ], StudentProfileThirdComponent);
    return StudentProfileThirdComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/student/student.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderMaterialModule", function() { return SliderMaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentModule", function() { return StudentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student_router__ = __webpack_require__("../../../../../src/app/modules/student/student.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_student_list_student_list_component__ = __webpack_require__("../../../../../src/app/modules/student/components/student-list/student-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_student_profile_first_student_profile_first_component__ = __webpack_require__("../../../../../src/app/modules/student/components/student-profile-first/student-profile-first.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_student_profile_second_student_profile_second_component__ = __webpack_require__("../../../../../src/app/modules/student/components/student-profile-second/student-profile-second.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_student_profile_third_student_profile_third_component__ = __webpack_require__("../../../../../src/app/modules/student/components/student-profile-third/student-profile-third.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_student_profile_fourth_student_profile_fourth_component__ = __webpack_require__("../../../../../src/app/modules/student/components/student-profile-fourth/student-profile-fourth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var SliderMaterialModule = (function () {
    function SliderMaterialModule() {
    }
    SliderMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_11__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["A" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["y" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["z" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["B" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["C" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["D" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["E" /* MatTooltipModule */],
            ]
        })
    ], SliderMaterialModule);
    return SliderMaterialModule;
}());

var StudentModule = (function () {
    function StudentModule() {
    }
    StudentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__student_router__["a" /* StudentRouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                SliderMaterialModule
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__components_student_list_student_list_component__["a" /* StudentListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_student_profile_first_student_profile_first_component__["a" /* StudentProfileFirstComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_student_profile_second_student_profile_second_component__["a" /* StudentProfileSecondComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_student_profile_third_student_profile_third_component__["a" /* StudentProfileThirdComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_student_profile_fourth_student_profile_fourth_component__["a" /* StudentProfileFourthComponent */]
            ]
        })
    ], StudentModule);
    return StudentModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/student/student.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentRouterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_student_list_student_list_component__ = __webpack_require__("../../../../../src/app/modules/student/components/student-list/student-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_student_profile_first_student_profile_first_component__ = __webpack_require__("../../../../../src/app/modules/student/components/student-profile-first/student-profile-first.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_student_profile_second_student_profile_second_component__ = __webpack_require__("../../../../../src/app/modules/student/components/student-profile-second/student-profile-second.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_student_profile_third_student_profile_third_component__ = __webpack_require__("../../../../../src/app/modules/student/components/student-profile-third/student-profile-third.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_student_profile_fourth_student_profile_fourth_component__ = __webpack_require__("../../../../../src/app/modules/student/components/student-profile-fourth/student-profile-fourth.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var studentRoutes = [
    { path: '', redirectTo: 'student-list', component: __WEBPACK_IMPORTED_MODULE_2__components_student_list_student_list_component__["a" /* StudentListComponent */] },
    { path: 'student-list', component: __WEBPACK_IMPORTED_MODULE_2__components_student_list_student_list_component__["a" /* StudentListComponent */] },
    { path: 'profile/:id', component: __WEBPACK_IMPORTED_MODULE_3__components_student_profile_first_student_profile_first_component__["a" /* StudentProfileFirstComponent */] },
    { path: 'student-profile-second-step', component: __WEBPACK_IMPORTED_MODULE_4__components_student_profile_second_student_profile_second_component__["a" /* StudentProfileSecondComponent */] },
    { path: 'student-profile-third-step', component: __WEBPACK_IMPORTED_MODULE_5__components_student_profile_third_student_profile_third_component__["a" /* StudentProfileThirdComponent */] },
    { path: 'student-profile-fourth-step', component: __WEBPACK_IMPORTED_MODULE_6__components_student_profile_fourth_student_profile_fourth_component__["a" /* StudentProfileFourthComponent */] }
];
var StudentRouterModule = (function () {
    function StudentRouterModule() {
    }
    StudentRouterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(studentRoutes)
            ],
            declarations: []
        })
    ], StudentRouterModule);
    return StudentRouterModule;
}());



/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null,null,null],\"sourceMap\":false}!../../../material/prebuilt-themes/deeppurple-amber.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-elevation-z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-elevation-z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-elevation-z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-elevation-z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-elevation-z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-elevation-z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mat-elevation-z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-elevation-z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mat-elevation-z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-elevation-z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mat-elevation-z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mat-elevation-z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mat-elevation-z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-elevation-z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mat-elevation-z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mat-elevation-z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mat-elevation-z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-elevation-z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mat-elevation-z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mat-elevation-z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mat-elevation-z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mat-elevation-z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mat-elevation-z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mat-elevation-z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mat-elevation-z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h5,.mat-typography h5{font-size:11.62px;font-weight:400;font-family:Roboto,\"Helvetica Neue\",sans-serif;line-height:20px;margin:0 0 12px}.mat-h6,.mat-typography h6{font-size:9.38px;font-weight:400;font-family:Roboto,\"Helvetica Neue\",sans-serif;line-height:20px;margin:0 0 12px}.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-body p,.mat-body-1 p,.mat-typography p{margin:0 0 12px}.mat-caption,.mat-small{font:400 12px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 56px;letter-spacing:-.05em}.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.02em}.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.005em}.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px}.mat-button,.mat-fab,.mat-icon-button,.mat-mini-fab,.mat-raised-button{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-button-toggle{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card-title{font-size:24px;font-weight:400}.mat-card-content,.mat-card-header .mat-card-title,.mat-card-subtitle{font-size:14px}.mat-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-checkbox-layout .mat-checkbox-label{line-height:24px}.mat-chip{font-size:13px;line-height:18px}.mat-chip .mat-chip-remove.mat-icon{font-size:18px}.mat-table{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-header-cell{font-size:12px;font-weight:500}.mat-cell{font-size:14px}.mat-calendar{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-calendar-body{font-size:13px}.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}.mat-calendar-table-header th{font-size:11px;font-weight:400}.mat-dialog-title{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif}.mat-expansion-panel-header{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:inherit;font-weight:400;line-height:1.125}.mat-form-field-wrapper{padding-bottom:1.25em}.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}.mat-form-field-infix{padding:.4375em 0;border-top:.84375em solid transparent}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333%}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.33334%}.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.33335%}.mat-form-field-label-wrapper{top:-.84375em;padding-top:.84375em}.mat-form-field-label{top:1.28125em}.mat-form-field-underline{bottom:1.25em}.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.54167em;top:calc(100% - 1.66667em)}.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}input.mat-input-element{margin-top:-.0625em}.mat-menu-item{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px}.mat-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select-trigger{height:1.125em}.mat-slide-toggle-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-slider-thumb-label-text{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-step-label{font-size:14px;font-weight:400}.mat-step-label-selected{font-size:14px;font-weight:500}.mat-tab-group{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-tab-label,.mat-tab-link{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0}.mat-tooltip{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-list-item{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list-option{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{font-size:16px}.mat-list .mat-list-item .mat-line,.mat-nav-list .mat-list-item .mat-line,.mat-selection-list .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list .mat-list-item .mat-line:nth-child(n+2){font-size:14px}.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{font-size:16px}.mat-list .mat-list-option .mat-line,.mat-nav-list .mat-list-option .mat-line,.mat-selection-list .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list .mat-list-option .mat-line:nth-child(n+2){font-size:14px}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-list[dense] .mat-list-item,.mat-nav-list[dense] .mat-list-item,.mat-selection-list[dense] .mat-list-item{font-size:12px}.mat-list[dense] .mat-list-item .mat-line,.mat-nav-list[dense] .mat-list-item .mat-line,.mat-selection-list[dense] .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2){font-size:12px}.mat-list[dense] .mat-list-option,.mat-nav-list[dense] .mat-list-option,.mat-selection-list[dense] .mat-list-option{font-size:12px}.mat-list[dense] .mat-list-option .mat-line,.mat-nav-list[dense] .mat-list-option .mat-line,.mat-selection-list[dense] .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}.mat-list[dense] .mat-subheader,.mat-nav-list[dense] .mat-subheader,.mat-selection-list[dense] .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-option{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px}.mat-optgroup-label{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-simple-snackbar{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px}.mat-simple-snackbar-action{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-ripple{overflow:hidden}@media screen and (-ms-high-contrast:active){.mat-ripple{display:none}}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,-webkit-transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1),-webkit-transform 0s cubic-bezier(0,0,.2,1);-webkit-transform:scale(0);transform:scale(0)}.mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;position:relative;cursor:pointer;outline:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;max-width:100%;box-sizing:border-box;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.mat-option-text{display:inline-block;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}@media screen and (-ms-high-contrast:active){.mat-option-ripple{opacity:.5}}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}.mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-global-overlay-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.48}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.6)}.cdk-overlay-transparent-backdrop{background:0 0}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}.mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-option{color:rgba(0,0,0,.87)}.mat-option:focus:not(.mat-option-disabled),.mat-option:hover:not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:#673ab7}.mat-accent .mat-option.mat-selected:not(.mat-option-disabled){color:#ffd740}.mat-warn .mat-option.mat-selected:not(.mat-option-disabled){color:#f44336}.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-active{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}.mat-option.mat-option-disabled{color:rgba(0,0,0,.38)}.mat-optgroup-label{color:rgba(0,0,0,.54)}.mat-optgroup-disabled .mat-optgroup-label{color:rgba(0,0,0,.38)}.mat-pseudo-checkbox{color:rgba(0,0,0,.54)}.mat-pseudo-checkbox::after{color:#fafafa}.mat-accent .mat-pseudo-checkbox-checked,.mat-accent .mat-pseudo-checkbox-indeterminate,.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate{background:#ffd740}.mat-primary .mat-pseudo-checkbox-checked,.mat-primary .mat-pseudo-checkbox-indeterminate{background:#673ab7}.mat-warn .mat-pseudo-checkbox-checked,.mat-warn .mat-pseudo-checkbox-indeterminate{background:#f44336}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background:#b0b0b0}.mat-app-background{background-color:#fafafa}.mat-theme-loaded-marker{display:none}.mat-autocomplete-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){background:#fff}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}.mat-button,.mat-icon-button{background:0 0}.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay{background-color:rgba(103,58,183,.12)}.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay{background-color:rgba(255,215,64,.12)}.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay{background-color:rgba(244,67,54,.12)}.mat-button[disabled] .mat-button-focus-overlay,.mat-icon-button[disabled] .mat-button-focus-overlay{background-color:transparent}.mat-button.mat-primary,.mat-icon-button.mat-primary{color:#673ab7}.mat-button.mat-accent,.mat-icon-button.mat-accent{color:#ffd740}.mat-button.mat-warn,.mat-icon-button.mat-warn{color:#f44336}.mat-button.mat-accent[disabled],.mat-button.mat-primary[disabled],.mat-button.mat-warn[disabled],.mat-button[disabled][disabled],.mat-icon-button.mat-accent[disabled],.mat-icon-button.mat-primary[disabled],.mat-icon-button.mat-warn[disabled],.mat-icon-button[disabled][disabled]{color:rgba(0,0,0,.38)}.mat-fab,.mat-mini-fab,.mat-raised-button{color:rgba(0,0,0,.87);background-color:#fff}.mat-fab.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{color:rgba(255,255,255,.87)}.mat-fab.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{color:rgba(0,0,0,.87)}.mat-fab.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{color:#fff}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{color:rgba(0,0,0,.38)}.mat-fab.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{background-color:#673ab7}.mat-fab.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{background-color:#ffd740}.mat-fab.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{background-color:#f44336}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{background-color:rgba(0,0,0,.12)}.mat-fab.mat-primary .mat-ripple-element,.mat-mini-fab.mat-primary .mat-ripple-element,.mat-raised-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.2)}.mat-fab.mat-accent .mat-ripple-element,.mat-mini-fab.mat-accent .mat-ripple-element,.mat-raised-button.mat-accent .mat-ripple-element{background-color:rgba(0,0,0,.2)}.mat-fab.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.2)}.mat-button.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.1)}.mat-button.mat-accent .mat-ripple-element{background-color:rgba(255,215,64,.1)}.mat-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.1)}.mat-icon-button.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.2)}.mat-icon-button.mat-accent .mat-ripple-element{background-color:rgba(255,215,64,.2)}.mat-icon-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.2)}.mat-button-toggle{color:rgba(0,0,0,.38)}.mat-button-toggle.cdk-focused .mat-button-toggle-focus-overlay{background-color:rgba(0,0,0,.06)}.mat-button-toggle-checked{background-color:#e0e0e0;color:rgba(0,0,0,.54)}.mat-button-toggle-disabled{background-color:#eee;color:rgba(0,0,0,.38)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#bdbdbd}.mat-card{background:#fff;color:rgba(0,0,0,.87)}.mat-card-subtitle{color:rgba(0,0,0,.54)}.mat-checkbox-frame{border-color:rgba(0,0,0,.54)}.mat-checkbox-checkmark{fill:#fafafa}.mat-checkbox-checkmark-path{stroke:#fafafa!important}.mat-checkbox-mixedmark{background-color:#fafafa}.mat-checkbox-checked.mat-primary .mat-checkbox-background,.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background{background-color:#673ab7}.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#ffd740}.mat-checkbox-checked.mat-warn .mat-checkbox-background,.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background{background-color:#f44336}.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,.mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background{background-color:#b0b0b0}.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{border-color:#b0b0b0}.mat-checkbox-disabled .mat-checkbox-label{color:#b0b0b0}.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(103,58,183,.26)}.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(255,215,64,.26)}.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}.mat-chip:not(.mat-basic-chip){background-color:#e0e0e0;color:rgba(0,0,0,.87)}.mat-chip:not(.mat-basic-chip) .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip:not(.mat-basic-chip) .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-chip-selected.mat-primary{background-color:#673ab7;color:rgba(255,255,255,.87)}.mat-chip.mat-chip-selected.mat-primary .mat-chip-remove{color:rgba(255,255,255,.87);opacity:.4}.mat-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-chip-selected.mat-warn{background-color:#f44336;color:#fff}.mat-chip.mat-chip-selected.mat-warn .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-chip-selected.mat-accent{background-color:#ffd740;color:rgba(0,0,0,.87)}.mat-chip.mat-chip-selected.mat-accent .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover{opacity:.54}.mat-table{background:#fff}.mat-header-row,.mat-row{border-bottom-color:rgba(0,0,0,.12)}.mat-header-cell{color:rgba(0,0,0,.54)}.mat-cell{color:rgba(0,0,0,.87)}.mat-datepicker-content{background-color:#fff;color:rgba(0,0,0,.87)}.mat-calendar-arrow{border-top-color:rgba(0,0,0,.54)}.mat-calendar-next-button,.mat-calendar-previous-button{color:rgba(0,0,0,.54)}.mat-calendar-table-header{color:rgba(0,0,0,.38)}.mat-calendar-table-header-divider::after{background:rgba(0,0,0,.12)}.mat-calendar-body-label{color:rgba(0,0,0,.54)}.mat-calendar-body-cell-content{color:rgba(0,0,0,.87);border-color:transparent}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){color:rgba(0,0,0,.38)}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:rgba(0,0,0,.04)}.mat-calendar-body-selected{background-color:#673ab7;color:rgba(255,255,255,.87)}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(103,58,183,.4)}.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.38)}.mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px rgba(255,255,255,.87)}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.18)}.mat-dialog-container{background:#fff;color:rgba(0,0,0,.87)}.mat-expansion-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-action-row{border-top-color:rgba(0,0,0,.12)}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:rgba(0,0,0,.04)}.mat-expansion-panel-header-title{color:rgba(0,0,0,.87)}.mat-expansion-indicator::after,.mat-expansion-panel-header-description{color:rgba(0,0,0,.54)}.mat-expansion-panel-header[aria-disabled=true]{color:rgba(0,0,0,.38)}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title{color:inherit}.mat-form-field-label{color:rgba(0,0,0,.54)}.mat-hint{color:rgba(0,0,0,.54)}.mat-focused .mat-form-field-label{color:#673ab7}.mat-focused .mat-form-field-label.mat-accent{color:#ffd740}.mat-focused .mat-form-field-label.mat-warn{color:#f44336}.mat-focused .mat-form-field-required-marker{color:#ffd740}.mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 1px;background-repeat:repeat-x}.mat-form-field-ripple{background-color:#673ab7}.mat-form-field-ripple.mat-accent{background-color:#ffd740}.mat-form-field-ripple.mat-warn{background-color:#f44336}.mat-form-field-invalid .mat-form-field-label{color:#f44336}.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker,.mat-form-field-invalid .mat-form-field-label.mat-accent{color:#f44336}.mat-form-field-invalid .mat-form-field-ripple{background-color:#f44336}.mat-error{color:#f44336}.mat-icon.mat-primary{color:#673ab7}.mat-icon.mat-accent{color:#ffd740}.mat-icon.mat-warn{color:#f44336}.mat-input-element:disabled{color:rgba(0,0,0,.38)}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{color:rgba(0,0,0,.87)}.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{color:rgba(0,0,0,.87)}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{color:rgba(0,0,0,.54)}.mat-list-item-disabled{background-color:#eee}.mat-divider{border-top-color:rgba(0,0,0,.12)}.mat-nav-list .mat-list-item{outline:0}.mat-nav-list .mat-list-item.mat-list-item-focus,.mat-nav-list .mat-list-item:hover{background:rgba(0,0,0,.04)}.mat-list-option{outline:0}.mat-list-option.mat-list-item-focus,.mat-list-option:hover{background:rgba(0,0,0,.04)}.mat-menu-panel{background:#fff}.mat-menu-item{background:0 0;color:rgba(0,0,0,.87)}.mat-menu-item[disabled]{color:rgba(0,0,0,.38)}.mat-menu-item .mat-icon:not([color]),.mat-menu-item-submenu-trigger::after{color:rgba(0,0,0,.54)}.mat-menu-item-highlighted:not([disabled]),.mat-menu-item:focus:not([disabled]),.mat-menu-item:hover:not([disabled]){background:rgba(0,0,0,.04)}.mat-paginator{background:#fff}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{color:rgba(0,0,0,.54)}.mat-paginator-decrement,.mat-paginator-increment{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}.mat-icon-button[disabled] .mat-paginator-decrement,.mat-icon-button[disabled] .mat-paginator-increment{border-color:rgba(0,0,0,.38)}.mat-progress-bar-background{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23d1c4e9%27%2F%3E%3C%2Fsvg%3E\")}.mat-progress-bar-buffer{background-color:#d1c4e9}.mat-progress-bar-fill::after{background-color:#673ab7}.mat-progress-bar.mat-accent .mat-progress-bar-background{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23ffe57f%27%2F%3E%3C%2Fsvg%3E\")}.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#ffe57f}.mat-progress-bar.mat-accent .mat-progress-bar-fill::after{background-color:#ffd740}.mat-progress-bar.mat-warn .mat-progress-bar-background{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23ffcdd2%27%2F%3E%3C%2Fsvg%3E\")}.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-fill::after{background-color:#f44336}.mat-progress-spinner circle,.mat-spinner circle{stroke:#673ab7}.mat-progress-spinner.mat-accent circle,.mat-spinner.mat-accent circle{stroke:#ffd740}.mat-progress-spinner.mat-warn circle,.mat-spinner.mat-warn circle{stroke:#f44336}.mat-radio-outer-circle{border-color:rgba(0,0,0,.54)}.mat-radio-disabled .mat-radio-outer-circle{border-color:rgba(0,0,0,.38)}.mat-radio-disabled .mat-radio-inner-circle,.mat-radio-disabled .mat-radio-ripple .mat-ripple-element{background-color:rgba(0,0,0,.38)}.mat-radio-disabled .mat-radio-label-content{color:rgba(0,0,0,.38)}.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{border-color:#673ab7}.mat-radio-button.mat-primary .mat-radio-inner-circle{background-color:#673ab7}.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element{background-color:rgba(103,58,183,.26)}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#ffd740}.mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#ffd740}.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:rgba(255,215,64,.26)}.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{border-color:#f44336}.mat-radio-button.mat-warn .mat-radio-inner-circle{background-color:#f44336}.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}.mat-select-content,.mat-select-panel-done-animating{background:#fff}.mat-select-value{color:rgba(0,0,0,.87)}.mat-select-placeholder{color:rgba(0,0,0,.42)}.mat-select-disabled .mat-select-value{color:rgba(0,0,0,.38)}.mat-select-arrow{color:rgba(0,0,0,.54)}.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){background:rgba(0,0,0,.12)}.mat-form-field.mat-focused.mat-primary .mat-select-arrow{color:#673ab7}.mat-form-field.mat-focused.mat-accent .mat-select-arrow{color:#ffd740}.mat-form-field.mat-focused.mat-warn .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{color:rgba(0,0,0,.38)}.mat-drawer-container{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-drawer{background-color:#fff;color:rgba(0,0,0,.87)}.mat-drawer.mat-drawer-push{background-color:#fff}.mat-drawer-backdrop.mat-drawer-shown{background-color:rgba(0,0,0,.6)}.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#ffc107}.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(255,193,7,.5)}.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle .mat-ripple-element{background-color:rgba(255,193,7,.12)}.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#673ab7}.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(103,58,183,.5)}.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.12)}.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#f44336}.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(244,67,54,.5)}.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.12)}.mat-disabled .mat-slide-toggle-thumb{background-color:#bdbdbd}.mat-disabled .mat-slide-toggle-bar{background-color:rgba(0,0,0,.1)}.mat-slide-toggle-thumb{background-color:#fafafa}.mat-slide-toggle-bar{background-color:rgba(0,0,0,.38)}.mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-primary .mat-slider-thumb,.mat-primary .mat-slider-thumb-label,.mat-primary .mat-slider-track-fill{background-color:#673ab7}.mat-primary .mat-slider-thumb-label-text{color:rgba(255,255,255,.87)}.mat-accent .mat-slider-thumb,.mat-accent .mat-slider-thumb-label,.mat-accent .mat-slider-track-fill{background-color:#ffd740}.mat-accent .mat-slider-thumb-label-text{color:rgba(0,0,0,.87)}.mat-warn .mat-slider-thumb,.mat-warn .mat-slider-thumb-label,.mat-warn .mat-slider-track-fill{background-color:#f44336}.mat-warn .mat-slider-thumb-label-text{color:#fff}.mat-slider-focus-ring{background-color:rgba(255,215,64,.2)}.cdk-focused .mat-slider-track-background,.mat-slider:hover .mat-slider-track-background{background-color:rgba(0,0,0,.38)}.mat-slider-disabled .mat-slider-thumb,.mat-slider-disabled .mat-slider-track-background,.mat-slider-disabled .mat-slider-track-fill{background-color:rgba(0,0,0,.26)}.mat-slider-disabled:hover .mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-slider-min-value .mat-slider-focus-ring{background-color:rgba(0,0,0,.12)}.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{background-color:rgba(0,0,0,.87)}.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{background-color:rgba(0,0,0,.26)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{border-color:rgba(0,0,0,.26);background-color:transparent}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb{border-color:rgba(0,0,0,.38)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb{border-color:rgba(0,0,0,.26)}.mat-slider-has-ticks .mat-slider-wrapper::after{border-color:rgba(0,0,0,.7)}.mat-slider-horizontal .mat-slider-ticks{background-image:repeating-linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent);background-image:-moz-repeating-linear-gradient(.0001deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-slider-vertical .mat-slider-ticks{background-image:repeating-linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused,.mat-step-header:hover{background-color:rgba(0,0,0,.04)}.mat-step-header .mat-step-label,.mat-step-header .mat-step-optional{color:rgba(0,0,0,.38)}.mat-step-header .mat-step-icon{background-color:#673ab7;color:rgba(255,255,255,.87)}.mat-step-header .mat-step-icon-not-touched{background-color:rgba(0,0,0,.38);color:rgba(255,255,255,.87)}.mat-step-header .mat-step-label.mat-step-label-active{color:rgba(0,0,0,.87)}.mat-stepper-horizontal,.mat-stepper-vertical{background-color:#fff}.mat-stepper-vertical-line::before{border-left-color:rgba(0,0,0,.12)}.mat-stepper-horizontal-line{border-top-color:rgba(0,0,0,.12)}.mat-tab-header,.mat-tab-nav-bar{border-bottom:1px solid rgba(0,0,0,.12)}.mat-tab-group-inverted-header .mat-tab-header,.mat-tab-group-inverted-header .mat-tab-nav-bar{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}.mat-tab-label,.mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-label.mat-tab-disabled,.mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.38)}.mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.38)}.mat-tab-group[class*=mat-background-] .mat-tab-header,.mat-tab-nav-bar[class*=mat-background-]{border-bottom:none;border-top:none}.mat-tab-group.mat-primary .mat-tab-label:focus,.mat-tab-group.mat-primary .mat-tab-link:focus,.mat-tab-nav-bar.mat-primary .mat-tab-label:focus,.mat-tab-nav-bar.mat-primary .mat-tab-link:focus{background-color:rgba(209,196,233,.3)}.mat-tab-group.mat-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#673ab7}.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar{background-color:rgba(255,255,255,.87)}.mat-tab-group.mat-accent .mat-tab-label:focus,.mat-tab-group.mat-accent .mat-tab-link:focus,.mat-tab-nav-bar.mat-accent .mat-tab-label:focus,.mat-tab-nav-bar.mat-accent .mat-tab-link:focus{background-color:rgba(255,229,127,.3)}.mat-tab-group.mat-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent .mat-ink-bar{background-color:#ffd740}.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar{background-color:rgba(0,0,0,.87)}.mat-tab-group.mat-warn .mat-tab-label:focus,.mat-tab-group.mat-warn .mat-tab-link:focus,.mat-tab-nav-bar.mat-warn .mat-tab-label:focus,.mat-tab-nav-bar.mat-warn .mat-tab-link:focus{background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn .mat-ink-bar{background-color:#f44336}.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label:focus,.mat-tab-group.mat-background-primary .mat-tab-link:focus,.mat-tab-nav-bar.mat-background-primary .mat-tab-label:focus,.mat-tab-nav-bar.mat-background-primary .mat-tab-link:focus{background-color:rgba(209,196,233,.3)}.mat-tab-group.mat-background-primary .mat-tab-header,.mat-tab-group.mat-background-primary .mat-tab-links,.mat-tab-nav-bar.mat-background-primary .mat-tab-header,.mat-tab-nav-bar.mat-background-primary .mat-tab-links{background-color:#673ab7}.mat-tab-group.mat-background-primary .mat-tab-label,.mat-tab-group.mat-background-primary .mat-tab-link,.mat-tab-nav-bar.mat-background-primary .mat-tab-label,.mat-tab-nav-bar.mat-background-primary .mat-tab-link{color:rgba(255,255,255,.87)}.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.87)}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-accent .mat-tab-label:focus,.mat-tab-group.mat-background-accent .mat-tab-link:focus,.mat-tab-nav-bar.mat-background-accent .mat-tab-label:focus,.mat-tab-nav-bar.mat-background-accent .mat-tab-link:focus{background-color:rgba(255,229,127,.3)}.mat-tab-group.mat-background-accent .mat-tab-header,.mat-tab-group.mat-background-accent .mat-tab-links,.mat-tab-nav-bar.mat-background-accent .mat-tab-header,.mat-tab-nav-bar.mat-background-accent .mat-tab-links{background-color:#ffd740}.mat-tab-group.mat-background-accent .mat-tab-label,.mat-tab-group.mat-background-accent .mat-tab-link,.mat-tab-nav-bar.mat-background-accent .mat-tab-label,.mat-tab-nav-bar.mat-background-accent .mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.4)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.4)}.mat-tab-group.mat-background-accent .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent .mat-ripple-element{background-color:rgba(0,0,0,.12)}.mat-tab-group.mat-background-warn .mat-tab-label:focus,.mat-tab-group.mat-background-warn .mat-tab-link:focus,.mat-tab-nav-bar.mat-background-warn .mat-tab-label:focus,.mat-tab-nav-bar.mat-background-warn .mat-tab-link:focus{background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-background-warn .mat-tab-header,.mat-tab-group.mat-background-warn .mat-tab-links,.mat-tab-nav-bar.mat-background-warn .mat-tab-header,.mat-tab-nav-bar.mat-background-warn .mat-tab-links{background-color:#f44336}.mat-tab-group.mat-background-warn .mat-tab-label,.mat-tab-group.mat-background-warn .mat-tab-link,.mat-tab-nav-bar.mat-background-warn .mat-tab-label,.mat-tab-nav-bar.mat-background-warn .mat-tab-link{color:#fff}.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-toolbar{background:#f5f5f5;color:rgba(0,0,0,.87)}.mat-toolbar.mat-primary{background:#673ab7;color:rgba(255,255,255,.87)}.mat-toolbar.mat-accent{background:#ffd740;color:rgba(0,0,0,.87)}.mat-toolbar.mat-warn{background:#f44336;color:#fff}.mat-tooltip{background:rgba(97,97,97,.9)}.mat-snack-bar-container{background:#323232;color:#fff}.mat-simple-snackbar-action{color:#ffd740}", ""]);

// exports


/***/ })

});
//# sourceMappingURL=student.module.chunk.js.map