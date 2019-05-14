webpackJsonp(["teacher.module"],{

/***/ "../../../../../src/app/modules/teacher/components/application/application.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/teacher/components/application/application.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-wrapper\">\r\n    <div class=\"text-center\">\r\n        <h1 class=\"titleheading small\">Teacher Application Submitted</h1>\r\n    </div>\r\n    <div class=\"section-wrapper teacher-applicationform\">\r\n        <div class=\"icon-image\">\r\n            <figure class=\"icon-bg\">\r\n                <img src=\"assets/images/circle-check.png\" alt=\"lock\">\r\n            </figure>\r\n            <h2 class=\"bold\">Application Date</h2>\r\n            <!-- <h2> 20 July, 2017 3:00PM</h2> -->\r\n            <h2>{{createdTime}}</h2>\r\n            <p class=\"para\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen\r\n                book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more\r\n                recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n            <p class=\"para\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti ex veniam sit illo alias at corporis dolor obcaecati corrupti, tempore aspernatur possimus veritatis placeat. Ratione voluptatem adipisci officia facere. Lorem ipsum\r\n                dolor sit amet, consectetur adipisicing elit. Atque deleniti ex veniam sit illo alias at corporis dolor obcaecati corrupti, tempore aspernatur possimus veritatis placeat. Ratione voluptatem adipisci officia facere.</p>\r\n            <div class=\"button-wrapper\">\r\n                  <button type=\"button\" (click)=\"gotoHomePage()\"  value=\"\" class=\"gradient custom-btn\">Go to Home Page</button>\r\n                <!-- <button type=\"button\" value=\"\" class=\"gradient custom-btn\">Go to Dashboard</button> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/teacher/components/application/application.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_shared_loader__ = __webpack_require__("../../../../../src/app/modules/shared/loader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_teacher_service__ = __webpack_require__("../../../../../src/app/services/teacher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_service__ = __webpack_require__("../../../../../src/app/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApplicationComponent = (function () {
    function ApplicationComponent(teacherService, route, router, loaderService, headerService) {
        this.teacherService = teacherService;
        this.route = route;
        this.router = router;
        this.loaderService = loaderService;
        this.headerService = headerService;
    }
    ApplicationComponent.prototype.ngOnInit = function () {
        this.headerService.setHeaderValue(true);
        this.getTeacherInformation();
    };
    //fetching teacher information method
    ApplicationComponent.prototype.getTeacherInformation = function () {
        var _this = this;
        this.loaderService.display(true);
        debugger;
        this.teacherService.getTeacherInformation().subscribe(function (data) {
            debugger;
            if (data.code == '200') {
                if (data.tutorsInfo.length > 0) {
                    if (data.tutorsInfo[0].created != undefined) {
                        _this.createdTime = data.tutorsInfo[0].created;
                    }
                }
                _this.loaderService.display(false);
            }
            else {
                _this.loaderService.display(false);
                _this.router.navigate(['']);
            }
        }, function (error) {
            _this.loaderService.display(false);
            _this.router.navigate(['']);
        });
    };
    ;
    ApplicationComponent.prototype.gotoHomePage = function () {
        this.router.navigate(['']);
        localStorage.clear();
    };
    ApplicationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-application',
            template: __webpack_require__("../../../../../src/app/modules/teacher/components/application/application.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/teacher/components/application/application.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_teacher_service__["a" /* TeacherService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_teacher_service__["a" /* TeacherService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__modules_shared_loader__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__header_service__["a" /* HeaderService */]])
    ], ApplicationComponent);
    return ApplicationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/teacher/components/certification/certification.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/teacher/components/certification/certification.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-wrapper teacher\">\r\n    <div class=\"text-center\">\r\n        <h1 class=\"titleheading small\">Certification</h1>\r\n    </div>\r\n    <div class=\"section-wrapper\">\r\n            <form action=\"\" class=\"\">\r\n                    <div class=\"append-wrapper\"  *ngFor=\"let form of educationListPrepareForm;let i=index\">\r\n                       <!-- strat from here -->\r\n                       <div *ngIf=\"i != 0\" (click)=\"removeFormFromDome(i)\" >close</div>\r\n                       <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"input-label\">Experience Type:</label>\r\n                                <div class=\"input-wrap\">\r\n                                    <span class=\"selectpicker-btn\"></span>\r\n                                   \r\n                                    <select class=\"custom-selectpicker\" name=\"experience{{i}}\" [(ngModel)]=\"form.experience\">\r\n                                      <option value=\"0\" disabled selected>Select Experience Type</option>\r\n                                      <option *ngFor=\"let ex of experienceList;let i=index\" value=\"{{ex}}\">\r\n                                            {{ex}}\r\n                                      </option>\r\n        \r\n                                  </select>\r\n                                  <span  *ngIf=\"form.experienceValid\" class=\"error-inputmsg\" style=\"display:block\">This field is required. </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"input-label\">Title:</label>\r\n                                <div class=\"input-form\">\r\n                                    <input type=\"text\"  name=\"title{{i}}\" [(ngModel)]=\"educationListPrepareForm[i]['title']\" placeholder=\"Title\" />\r\n                                    <span  *ngIf=\"form.titleValid\" class=\"error-inputmsg\" style=\"display:block\">This field is required. </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"input-label\">Institution:</label>\r\n                                <div class=\"input-form\">\r\n                                    <input type=\"text\" value=\"\" name=\"Institution{{i}}\"  [(ngModel)]=\"form.institution\" placeholder=\"Institution\" />\r\n                                    <span  *ngIf=\"form.institutionValid\" class=\"error-inputmsg\" style=\"display:block\">This field is required. </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"input-label\">Location:</label>\r\n                                <div class=\"input-form\">\r\n                                    <input type=\"text\" value=\"\" name=\"Location{{i}}\" [(ngModel)]=\"form.location\" placeholder=\"Location\" />\r\n                                    <span  *ngIf=\"form.locationValid\" class=\"error-inputmsg\" style=\"display:block\">This field is required. </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"input-label\">Start Date:</label>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-6\">\r\n                                        <div class=\"input-wrap\">\r\n                                            <span class=\"selectpicker-btn\"></span>\r\n                                            <select class=\"custom-selectpicker\" name=\"stratDateYear{{i}}\" [(ngModel)]=\"form.stratDateYear\" (change)=\"ChangeStartDate(i,form.stratDateYear)\" >\r\n                                              <option value=\"0\" disabled selected>Select Year</option>\r\n                                              <option *ngFor=\"let y of form.startYearList;let i=index\" value=\"{{y}}\" (change)=\"changeStartYear()\">\r\n                                                    {{y}}\r\n                                            </option>\r\n                                          </select>\r\n                                          <span  *ngIf=\"form.stratDateYearValid\" class=\"error-inputmsg\" style=\"display:block\">This field is required. </span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-6\">\r\n                                        <div class=\"input-wrap\">\r\n                                            <span class=\"selectpicker-btn\"></span>\r\n                                            <select class=\"custom-selectpicker\"  name=\"stratDateMonth{{i}}\" [(ngModel)]=\"form.stratDateMonth\">\r\n                                              <option value=\"0\" disabled selected>Select Month</option>\r\n                                              <option value=\"1\">January</option>\r\n                                              <option value=\"2\">February</option>\r\n                                              <option value=\"3\">March</option>\r\n                                              <option value=\"4\">April</option>\r\n                                              <option value=\"5\">May</option>\r\n                                              <option value=\"6\">June</option>\r\n                                              <option value=\"7\">July</option>\r\n                                              <option value=\"8\">August</option>\r\n                                              <option value=\"9\">September</option>\r\n                                              <option value=\"10\">October</option>\r\n                                              <option value=\"11\">November</option>\r\n                                              <option value=\"12\">December</option>\r\n                                          </select>\r\n                                          <span  *ngIf=\"form.stratDateMonthValid\" class=\"error-inputmsg\" style=\"display:block\">This field is required. </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"input-label\">Year of Acquisition:</label>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-6\">\r\n                                        <div class=\"input-wrap\">\r\n                                            <span class=\"selectpicker-btn\"></span>\r\n                                            <select class=\"custom-selectpicker\"  name=\"acquisitionYear{{i}}\" [(ngModel)]=\"form.acquisitionYear\">\r\n                                              <option value=\"0\" disabled selected>Select Year</option>\r\n                                              <option *ngFor=\"let y of form.YearofAcquisitionList;let i=index\" value=\"{{y}}\">\r\n                                                    {{y}}\r\n                                               </option>\r\n                                             \r\n                                          </select>\r\n                                          <span  *ngIf=\"form.acquisitionYearValid\" class=\"error-inputmsg\" style=\"display:block\">This field is required. </span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-6\">\r\n                                        <div class=\"input-wrap\">\r\n                                            <span class=\"selectpicker-btn\"></span>\r\n                                            <select class=\"custom-selectpicker\" name=\"acquisitionMonth{{i}}\" [(ngModel)]=\"form.acquisitionMonth\">\r\n                                              <option value=\"0\" disabled selected>Select Month</option>\r\n                                              <option value=\"1\">January</option>\r\n                                              <option value=\"2\">February</option>\r\n                                              <option value=\"3\">March</option>\r\n                                              <option value=\"4\">April</option>\r\n                                              <option value=\"5\">May</option>\r\n                                              <option value=\"6\">June</option>\r\n                                              <option value=\"7\">July</option>\r\n                                              <option value=\"8\">August</option>\r\n                                              <option value=\"9\">September</option>\r\n                                              <option value=\"10\">October</option>\r\n                                              <option value=\"11\">November</option>\r\n                                              <option value=\"12\">December</option>\r\n                                          </select>\r\n                                          <span  *ngIf=\"form.acquisitionMonthValid\" class=\"error-inputmsg\" style=\"display:block\">This field is required. </span>\r\n                                          \r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-xs-12\">\r\n                            <div class=\"input-form\">\r\n                                <label class=\"input-label\">Descriptions:</label>\r\n                                <textarea name=\"\" id=\"\" cols=\"30\" rows=\"3\" name=\"descriptions{{i}}\" [(ngModel)]=\"form.descriptions\" ></textarea>\r\n                                <span  *ngIf=\"form.descriptionsValid\" class=\"error-inputmsg\" style=\"display:block\">This field is required. </span>\r\n                                \r\n        \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                        <!-- ends here -->\r\n                    </div>\r\n                        <a href=\"javascript:void(0);\" class=\"add-more-appenddata\" (click)=\"addNewForm()\" >Add More</a> {{formStatus}}<br/>\r\n                        <label class=\"input-label\">Upload a diploma from your computer &nbsp; </label>\r\n                            <div class=\"browse-btn\">Upload \r\n                                    <input type=\"file\" name=\"avatar\" (change)=\"onFileChange($event)\" id=\"docfileupload\">\r\n                                   \r\n                                <!-- <input type=\"file\" multiple /> -->\r\n                            </div>\r\n                            <span  class=\"error-inputmsg\" style=\"display:block\">{{validFileStatus}} </span>   \r\n                            <ul class=\"choosefile-list\">\r\n                                <li *ngFor=\"let file of uploadValue;let i=index\">{{file.fileName}}<span class=\"cross\"><img src=\"assets/images/red-cross.png\" (click)=\"removeFile(i)\" alt=\"\"></span></li>\r\n                            </ul>                \r\n                        <!-- </div> -->\r\n                    <div class=\"button-wrapper row\">\r\n                        <div class=\"col-sm-6 text-right\"><button (click)=\"gotoPreviouseStep()\" type=\"submit\" name=\"\" value=\"\" class=\"custom-btn cancel\">Cancel</button></div>\r\n                        <div class=\"col-sm-6 text-left\"><button  (click)=\"gotoNextStep()\" type=\"submit\" name=\"\" value=\"\" class=\"gradient custom-btn save\">Save</button></div>\r\n                    </div>\r\n                </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/teacher/components/certification/certification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CertificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_shared_loader__ = __webpack_require__("../../../../../src/app/modules/shared/loader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_teacher_service__ = __webpack_require__("../../../../../src/app/services/teacher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_service__ = __webpack_require__("../../../../../src/app/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CertificationComponent = (function () {
    function CertificationComponent(teacherService, route, router, loaderService, headerService) {
        this.teacherService = teacherService;
        this.route = route;
        this.router = router;
        this.loaderService = loaderService;
        this.headerService = headerService;
        this.returnStartYearList = [];
        //for preparing form in the html
        this.educationListPrepareForm = [];
        this.experienceList = [];
        this.startYearList = [];
        this.YearofAcquisitionList = [];
        this.uploadValue = [];
        this.formStatus = '';
    }
    CertificationComponent.prototype.ngOnInit = function () {
        this.headerService.setHeaderValue(true);
        this.loaderService.display(true);
        this.formData = new FormData();
        this.prepareFormInDom();
        this.getEducationList();
        this.getTeacherInformation();
        //this.getYear();
    };
    CertificationComponent.prototype.prepareFormInDom = function () {
        var form = {
            experience: '0',
            experienceValid: false,
            title: '',
            titleValid: false,
            institution: '',
            institutionValid: false,
            location: '',
            locationValid: false,
            stratDateYear: '0',
            stratDateYearValid: false,
            stratDateMonth: '0',
            stratDateMonthValid: false,
            acquisitionYear: '0',
            acquisitionYearValid: false,
            acquisitionMonth: '0',
            acquisitionMonthValid: false,
            descriptions: '',
            descriptionsValid: false,
            startYearList: this.getStartYear(),
            YearofAcquisitionList: this.getStartYear()
        };
        this.educationListPrepareForm.push(form);
    };
    CertificationComponent.prototype.removeFile = function (index) {
        this.validFileStatus = '';
        this.uploadValue.splice(index, 1);
    };
    //choose file 
    CertificationComponent.prototype.onFileChange = function (fileInput) {
        var _this = this;
        if (this.uploadValue.length <= 4) {
            this.loaderService.display(true);
            var fileList = fileInput.target.files;
            if (fileList.length > 0) {
                var file = fileList[0];
                console.log(fileList, file);
                var fileSize = fileList[0].size;
                //500 KB
                if (fileSize <= 512000) {
                    this.formData.set('userImage', file);
                    //file.name
                    localStorage.setItem('fileName', file.name);
                    this.teacherService.uploadTeacherProfileImage(this.formData).subscribe(function (data) {
                        if (data.code == '200') {
                            var obj = {
                                fileName: localStorage.getItem('fileName') || null,
                                fileLocation: data.imageURL
                            };
                            _this.uploadValue.push(obj);
                            _this.validFileStatus = "";
                            _this.loaderService.display(false);
                        }
                        else {
                            // this.requiredStatus = 'There is some internal error.';
                            // this.isImage = false;
                            // this.loaderService.display(false);   
                            _this.router.navigate(['']);
                        }
                    }, function (error) {
                        // validFileStatus
                        _this.loaderService.display(false);
                        console.log(error.code);
                        //this.router.navigate(['']);
                    });
                }
                else {
                    // this.loaderService.display(false);
                    // this.isImage = false;
                    // this.requiredStatus = 'file size can not be more than 500 kb.';
                }
            }
        }
        else {
            this.validFileStatus = "you can upload only 5 valid file.";
        }
    };
    CertificationComponent.prototype.ChangeStartDate = function (index, year) {
        this.educationListPrepareForm[index].YearofAcquisitionList = [];
        this.educationListPrepareForm[index].acquisitionYear = '0';
        this.educationListPrepareForm[index].YearofAcquisitionList = this.educationListPrepareForm[index].startYearList.filter(function (x) { return x >= year; });
    };
    CertificationComponent.prototype.removeFormFromDome = function (index) {
        this.formStatus = '';
        this.educationListPrepareForm.splice(index, 1);
    };
    CertificationComponent.prototype.addNewForm = function () {
        if (this.educationListPrepareForm.length <= 4) {
            this.formStatus = '';
            var form = {
                experience: '0',
                experienceValid: false,
                title: '',
                titleValid: false,
                institution: '',
                institutionValid: false,
                location: '',
                locationValid: false,
                stratDateYear: '0',
                stratDateYearValid: false,
                stratDateMonth: '0',
                stratDateMonthValid: false,
                acquisitionYear: '0',
                acquisitionYearValid: false,
                acquisitionMonth: '0',
                acquisitionMonthValid: false,
                descriptions: '',
                descriptionsValid: false,
                startYearList: this.getStartYear(),
                YearofAcquisitionList: this.getStartYear()
            };
            this.educationListPrepareForm.push(form);
        }
        else {
            this.formStatus = 'You can add only 5 certificates';
        }
    };
    CertificationComponent.prototype.getEducationList = function () {
        this.experienceList.push('Associate Degree');
        this.experienceList.push('Bachelor Degree');
        this.experienceList.push('Graduate Degree');
        this.experienceList.push('Master Degree');
        this.experienceList.push('Doctoral Degree');
        this.experienceList.push('Professional Degree');
    };
    CertificationComponent.prototype.getStartYear = function () {
        this.returnStartYearList = [];
        var currentTime = new Date();
        var Currentyear = currentTime.getFullYear();
        var startYear = Currentyear - 70;
        for (var y = startYear; y <= Currentyear; y++) {
            this.returnStartYearList.push(y);
        }
        return this.returnStartYearList;
    };
    CertificationComponent.prototype.gotoPreviouseStep = function () {
        this.router.navigate(['../../teacher/education']);
    };
    //here showing the validation error
    CertificationComponent.prototype.showValidation = function () {
        for (var i = 0; i < this.educationListPrepareForm.length; i++) {
            if (this.educationListPrepareForm[i].experience != '0' && this.educationListPrepareForm[i].experience != '') {
                this.educationListPrepareForm[i].experienceValid = false;
            }
            else {
                this.educationListPrepareForm[i].experienceValid = true;
            }
            if (this.educationListPrepareForm[i].title != '0' && this.educationListPrepareForm[i].title != '') {
                this.educationListPrepareForm[i].titleValid = false;
            }
            else {
                this.educationListPrepareForm[i].titleValid = true;
            }
            if (this.educationListPrepareForm[i].institution != '0' && this.educationListPrepareForm[i].institution != '') {
                this.educationListPrepareForm[i].institutionValid = false;
            }
            else {
                this.educationListPrepareForm[i].institutionValid = true;
            }
            if (this.educationListPrepareForm[i].location != '0' && this.educationListPrepareForm[i].location != '') {
                this.educationListPrepareForm[i].locationValid = false;
            }
            else {
                this.educationListPrepareForm[i].locationValid = true;
            }
            //not done
            if (this.educationListPrepareForm[i].stratDateYear != '0' && this.educationListPrepareForm[i].stratDateYear != '') {
                this.educationListPrepareForm[i].stratDateYearValid = false;
            }
            else {
                this.educationListPrepareForm[i].stratDateYearValid = true;
            }
            if (this.educationListPrepareForm[i].stratDateMonth != '0' && this.educationListPrepareForm[i].stratDateMonth != '') {
                this.educationListPrepareForm[i].stratDateMonthValid = false;
            }
            else {
                this.educationListPrepareForm[i].stratDateMonthValid = true;
            }
            if (this.educationListPrepareForm[i].acquisitionYear != '0' && this.educationListPrepareForm[i].acquisitionYear != '') {
                this.educationListPrepareForm[i].acquisitionYearValid = false;
            }
            else {
                this.educationListPrepareForm[i].acquisitionYearValid = true;
            }
            if (this.educationListPrepareForm[i].acquisitionMonth != '0' && this.educationListPrepareForm[i].acquisitionMonth != '') {
                this.educationListPrepareForm[i].acquisitionMonthValid = false;
            }
            else {
                this.educationListPrepareForm[i].acquisitionMonthValid = true;
            }
            if (this.educationListPrepareForm[i].descriptions != '0' && this.educationListPrepareForm[i].descriptions != '') {
                this.educationListPrepareForm[i].descriptionsValid = false;
            }
            else {
                this.educationListPrepareForm[i].descriptionsValid = true;
            }
        }
    };
    CertificationComponent.prototype.isValid = function () {
        var status = true;
        for (var i = 0; i < this.educationListPrepareForm.length; i++) {
            if (this.educationListPrepareForm[i].experience == '0' || this.educationListPrepareForm[i].experience == '') {
                return false;
            }
            if (this.educationListPrepareForm[i].title == '0' || this.educationListPrepareForm[i].title == '') {
                return false;
            }
            if (this.educationListPrepareForm[i].institution == '0' || this.educationListPrepareForm[i].institution == '') {
                return false;
            }
            if (this.educationListPrepareForm[i].location == '0' || this.educationListPrepareForm[i].location == '') {
                return false;
            }
            if (this.educationListPrepareForm[i].stratDateYear == '0' || this.educationListPrepareForm[i].stratDateYear == '') {
                return false;
            }
            if (this.educationListPrepareForm[i].stratDateMonth == '0' || this.educationListPrepareForm[i].stratDateMonth == '') {
                return false;
            }
            if (this.educationListPrepareForm[i].acquisitionYear == '0' || this.educationListPrepareForm[i].acquisitionYear == '') {
                return false;
            }
            if (this.educationListPrepareForm[i].acquisitionMonth == '0' || this.educationListPrepareForm[i].acquisitionMonth == '') {
                return false;
            }
            if (this.educationListPrepareForm[i].descriptions == '0' || this.educationListPrepareForm[i].descriptions == '') {
                return false;
            }
        }
        return status;
    };
    CertificationComponent.prototype.gotoNextStep = function () {
        var _this = this;
        this.showValidation();
        if (this.isValid()) {
            if (this.uploadValue.length > 0) {
                this.loaderService.display(true);
                this.validFileStatus = "";
                var experienceData = [];
                for (var i = 0; i < this.educationListPrepareForm.length; i++) {
                    var obj = {
                        "experienceType": this.educationListPrepareForm[i].experience,
                        "title": this.educationListPrepareForm[i].title,
                        "institution": this.educationListPrepareForm[i].institution,
                        "location": this.educationListPrepareForm[i].location,
                        "startDate": this.educationListPrepareForm[i].stratDateYear + '-' + this.educationListPrepareForm[i].stratDateMonth + '-01',
                        "yearOfAcquisition": this.educationListPrepareForm[i].acquisitionYear + '-' + this.educationListPrepareForm[i].acquisitionMonth + '-01',
                        "descriptions": this.educationListPrepareForm[i].descriptions
                    };
                    experienceData.push(obj);
                }
                var docs = [];
                for (var i = 0; i < this.uploadValue.length; i++) {
                    docs.push(this.uploadValue[i].fileLocation);
                }
                this.teacherService.saveTeacherCertificationDetails(experienceData, docs).subscribe(function (data) {
                    debugger;
                    if (data.code == '200') {
                        _this.loaderService.display(false);
                        _this.router.navigate(['../../teacher/work-experience']);
                    }
                    else {
                        //this.router.navigate(['']);
                    }
                }, function (error) {
                    debugger;
                    //this.router.navigate(['']);
                });
            }
            else {
                this.validFileStatus = "Please upload you diploma(s)";
            }
        }
    };
    //fetching teacher information method
    CertificationComponent.prototype.getTeacherInformation = function () {
        var _this = this;
        this.teacherService.getTeacherInformation().subscribe(function (data) {
            debugger;
            if (data.code == '200') {
                if (data.tutorsInfo.length > 0) {
                    if (data.tutorsInfo[0].certificationDocs != undefined && data.tutorsInfo[0].certificationDocs.length > 0) {
                        for (var i = 0; i < data.tutorsInfo[0].certificationDocs.length; i++) {
                            var fileName = data.tutorsInfo[0].certificationDocs[i];
                            var fileLength = fileName.split('/');
                            var NameName = fileLength[fileLength.length - 1];
                            var obj = {
                                fileName: NameName,
                                fileLocation: data.tutorsInfo[0].certificationDocs[i]
                            };
                            _this.uploadValue.push(obj);
                        }
                        if (data.tutorsInfo[0].certification.length > 0) {
                            _this.educationListPrepareForm = [];
                            for (var i = 0; i < data.tutorsInfo[0].certification.length; i++) {
                                var form = {
                                    experience: data.tutorsInfo[0].certification[i].experienceType,
                                    experienceValid: false,
                                    title: data.tutorsInfo[0].certification[i].title,
                                    titleValid: false,
                                    institution: data.tutorsInfo[0].certification[i].institution,
                                    institutionValid: false,
                                    location: data.tutorsInfo[0].certification[i].location,
                                    locationValid: false,
                                    stratDateYear: data.tutorsInfo[0].certification[i].startDate.split('-')[0],
                                    stratDateYearValid: false,
                                    stratDateMonth: data.tutorsInfo[0].certification[i].startDate.split('-')[1],
                                    stratDateMonthValid: false,
                                    acquisitionYear: data.tutorsInfo[0].certification[i].yearOfAcquisition.split('-')[0],
                                    acquisitionYearValid: false,
                                    acquisitionMonth: data.tutorsInfo[0].certification[i].yearOfAcquisition.split('-')[1],
                                    acquisitionMonthValid: false,
                                    descriptions: data.tutorsInfo[0].certification[i].descriptions,
                                    descriptionsValid: false,
                                    startYearList: _this.getStartYear(),
                                    YearofAcquisitionList: _this.getStartYear()
                                };
                                _this.educationListPrepareForm.push(form);
                            }
                        }
                    }
                    _this.loaderService.display(false);
                }
            }
            else {
                _this.loaderService.display(false);
                _this.router.navigate(['']);
            }
        }, function (error) {
            _this.loaderService.display(false);
            _this.router.navigate(['']);
        });
    };
    ;
    CertificationComponent.prototype.changeStartYear = function () {
    };
    CertificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-certification',
            template: __webpack_require__("../../../../../src/app/modules/teacher/components/certification/certification.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/teacher/components/certification/certification.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_teacher_service__["a" /* TeacherService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_teacher_service__["a" /* TeacherService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__modules_shared_loader__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__header_service__["a" /* HeaderService */]])
    ], CertificationComponent);
    return CertificationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/teacher/components/education/education.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/teacher/components/education/education.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-wrapper teacher\">\r\n    <div class=\"text-center\">\r\n        <h1 class=\"titleheading small\">Education</h1>\r\n    </div>\r\n    <div class=\"section-wrapper\">\r\n        <form action=\"\" class=\"\">\r\n            <div class=\"append-wrapper\"  *ngFor=\"let form of educationListPrepareForm;let i=index\">\r\n               <!-- strat from here -->\r\n               <div *ngIf=\"i != 0\" (click)=\"removeFormFromDome(i)\" >close</div>\r\n               <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"input-label\">Experience Type:</label>\r\n                        <div class=\"input-wrap\">\r\n                            <span class=\"selectpicker-btn\"></span>\r\n                           \r\n                            <select class=\"custom-selectpicker\" name=\"experience{{i}}\" [(ngModel)]=\"form.experience\">\r\n                              <option value=\"0\" disabled selected>Select Experience Type</option>\r\n                              <option *ngFor=\"let ex of experienceList;let i=index\" value=\"{{ex}}\">\r\n                                    {{ex}}\r\n                              </option>\r\n\r\n                          </select>\r\n                          <span  *ngIf=\"form.experienceValid\" class=\"error-inputmsg\" style=\"display:block\">This field is required. </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"input-label\">Title:</label>\r\n                        <div class=\"input-form\">\r\n                            <input type=\"text\"  name=\"title{{i}}\" [(ngModel)]=\"educationListPrepareForm[i]['title']\" placeholder=\"Title\" />\r\n                            <span  *ngIf=\"form.titleValid\" class=\"error-inputmsg\" style=\"display:block\">This field is required. </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"input-label\">Institution:</label>\r\n                        <div class=\"input-form\">\r\n                            <input type=\"text\" value=\"\" name=\"Institution{{i}}\"  [(ngModel)]=\"form.institution\" placeholder=\"Institution\" />\r\n                            <span  *ngIf=\"form.institutionValid\" class=\"error-inputmsg\" style=\"display:block\">This field is required. </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"input-label\">Location:</label>\r\n                        <div class=\"input-form\">\r\n                            <input type=\"text\" value=\"\" name=\"Location{{i}}\" [(ngModel)]=\"form.location\" placeholder=\"Location\" />\r\n                            <span  *ngIf=\"form.locationValid\" class=\"error-inputmsg\" style=\"display:block\">This field is required. </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"input-label\">Start Date:</label>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"input-wrap\">\r\n                                    <span class=\"selectpicker-btn\"></span>\r\n                                    <select class=\"custom-selectpicker\" name=\"stratDateYear{{i}}\" [(ngModel)]=\"form.stratDateYear\" (change)=\"ChangeStartDate(i,form.stratDateYear)\" >\r\n                                      <option value=\"0\" disabled selected>Select Year</option>\r\n                                      <option *ngFor=\"let y of form.startYearList;let i=index\" value=\"{{y}}\" (change)=\"changeStartYear()\">\r\n                                            {{y}}\r\n                                    </option>\r\n                                  </select>\r\n                                  <span  *ngIf=\"form.stratDateYearValid\" class=\"error-inputmsg\" style=\"display:block\">This field is required. </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"input-wrap\">\r\n                                    <span class=\"selectpicker-btn\"></span>\r\n                                    <select class=\"custom-selectpicker\"  name=\"stratDateMonth{{i}}\" [(ngModel)]=\"form.stratDateMonth\">\r\n                                      <option value=\"0\" disabled selected>Select Month</option>\r\n                                      <option value=\"1\">January</option>\r\n                                      <option value=\"2\">February</option>\r\n                                      <option value=\"3\">March</option>\r\n                                      <option value=\"4\">April</option>\r\n                                      <option value=\"5\">May</option>\r\n                                      <option value=\"6\">June</option>\r\n                                      <option value=\"7\">July</option>\r\n                                      <option value=\"8\">August</option>\r\n                                      <option value=\"9\">September</option>\r\n                                      <option value=\"10\">October</option>\r\n                                      <option value=\"11\">November</option>\r\n                                      <option value=\"12\">December</option>\r\n                                  </select>\r\n                                  <span  *ngIf=\"form.stratDateMonthValid\" class=\"error-inputmsg\" style=\"display:block\">This field is required. </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"input-label\">Year of Acquisition:</label>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"input-wrap\">\r\n                                    <span class=\"selectpicker-btn\"></span>\r\n                                    <select class=\"custom-selectpicker\"  name=\"acquisitionYear{{i}}\" [(ngModel)]=\"form.acquisitionYear\">\r\n                                      <option value=\"0\" disabled selected>Select Year</option>\r\n                                      <option *ngFor=\"let y of form.YearofAcquisitionList;let i=index\" value=\"{{y}}\">\r\n                                            {{y}}\r\n                                       </option>\r\n                                     \r\n                                  </select>\r\n                                  <span  *ngIf=\"form.acquisitionYearValid\" class=\"error-inputmsg\" style=\"display:block\">This field is required. </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"input-wrap\">\r\n                                    <span class=\"selectpicker-btn\"></span>\r\n                                    <select class=\"custom-selectpicker\" name=\"acquisitionMonth{{i}}\" [(ngModel)]=\"form.acquisitionMonth\">\r\n                                      <option value=\"0\" disabled selected>Select Month</option>\r\n                                      <option value=\"1\">January</option>\r\n                                      <option value=\"2\">February</option>\r\n                                      <option value=\"3\">March</option>\r\n                                      <option value=\"4\">April</option>\r\n                                      <option value=\"5\">May</option>\r\n                                      <option value=\"6\">June</option>\r\n                                      <option value=\"7\">July</option>\r\n                                      <option value=\"8\">August</option>\r\n                                      <option value=\"9\">September</option>\r\n                                      <option value=\"10\">October</option>\r\n                                      <option value=\"11\">November</option>\r\n                                      <option value=\"12\">December</option>\r\n                                  </select>\r\n                                  <span  *ngIf=\"form.acquisitionMonthValid\" class=\"error-inputmsg\" style=\"display:block\">This field is required. </span>\r\n                                  \r\n                                  \r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12 col-xs-12\">\r\n                    <div class=\"input-form\">\r\n                        <label class=\"input-label\">Descriptions:</label>\r\n                        <textarea name=\"\" id=\"\" cols=\"30\" rows=\"3\" name=\"descriptions{{i}}\" [(ngModel)]=\"form.descriptions\" ></textarea>\r\n                        <span  *ngIf=\"form.descriptionsValid\" class=\"error-inputmsg\" style=\"display:block\">This field is required. </span>\r\n                        \r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n                <!-- ends here -->\r\n            </div>\r\n                <a href=\"javascript:void(0);\" class=\"add-more-appenddata\" (click)=\"addNewForm()\" >Add More</a>\r\n   {{formStatus}}\r\n                <br/>\r\n               \r\n                <label class=\"input-label\">Upload a diploma from your computer &nbsp; </label>\r\n                    <div class=\"browse-btn\">Upload \r\n                            <input type=\"file\" name=\"avatar\" (change)=\"onFileChange($event)\" id=\"docfileupload\">\r\n                           \r\n                        <!-- <input type=\"file\" multiple /> -->\r\n                    </div>\r\n                    <span  class=\"error-inputmsg\" style=\"display:block\">{{validFileStatus}} </span>   \r\n                    <ul class=\"choosefile-list\">\r\n                        <li *ngFor=\"let file of uploadValue;let i=index\">{{file.fileName}}<span class=\"cross\"><img src=\"assets/images/red-cross.png\" (click)=\"removeFile(i)\" alt=\"\"></span></li>\r\n                    </ul>                \r\n                <!-- </div> -->\r\n            <div class=\"button-wrapper row\">\r\n                <div class=\"col-sm-6 text-right\"><button (click)=\"gotoPreviouseStep()\" type=\"submit\" name=\"\" value=\"\" class=\"custom-btn cancel\">Cancel</button></div>\r\n                <div class=\"col-sm-6 text-left\"><button  (click)=\"gotoNextStep()\" type=\"submit\" name=\"\" value=\"\" class=\"gradient custom-btn save\">Save</button></div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/teacher/components/education/education.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_shared_loader__ = __webpack_require__("../../../../../src/app/modules/shared/loader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_teacher_service__ = __webpack_require__("../../../../../src/app/services/teacher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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





var EducationComponent = (function () {
    function EducationComponent(teacherService, route, router, loaderService, headerService) {
        this.teacherService = teacherService;
        this.route = route;
        this.router = router;
        this.loaderService = loaderService;
        this.headerService = headerService;
        this.experienceList = [];
        this.startYearList = [];
        this.YearofAcquisitionList = [];
        this.returnStartYearList = [];
        this.uploadValue = [];
        this.formStatus = '';
        //for preparing form in the html
        this.educationListPrepareForm = [];
    }
    EducationComponent.prototype.ngOnInit = function () {
        this.headerService.setHeaderValue(true);
        this.loaderService.display(true);
        this.formData = new FormData();
        this.prepareFormInDom();
        this.getEducationList();
        this.getTeacherInformation();
        //this.getYear();
    };
    EducationComponent.prototype.prepareFormInDom = function () {
        var form = {
            experience: '0',
            experienceValid: false,
            title: '',
            titleValid: false,
            institution: '',
            institutionValid: false,
            location: '',
            locationValid: false,
            stratDateYear: '0',
            stratDateYearValid: false,
            stratDateMonth: '0',
            stratDateMonthValid: false,
            acquisitionYear: '0',
            acquisitionYearValid: false,
            acquisitionMonth: '0',
            acquisitionMonthValid: false,
            descriptions: '',
            descriptionsValid: false,
            startYearList: this.getStartYear(),
            YearofAcquisitionList: this.getStartYear()
        };
        this.educationListPrepareForm.push(form);
    };
    EducationComponent.prototype.removeFile = function (index) {
        this.validFileStatus = '';
        this.uploadValue.splice(index, 1);
    };
    //choose file 
    EducationComponent.prototype.onFileChange = function (fileInput) {
        var _this = this;
        if (this.uploadValue.length <= 4) {
            this.loaderService.display(true);
            var fileList = fileInput.target.files;
            if (fileList.length > 0) {
                var file = fileList[0];
                console.log(fileList, file);
                var fileSize = fileList[0].size;
                //500 KB
                if (fileSize <= 512000) {
                    this.formData.set('userImage', file);
                    //file.name
                    localStorage.setItem('fileName', file.name);
                    this.teacherService.uploadTeacherProfileImage(this.formData).subscribe(function (data) {
                        if (data.code == '200') {
                            var obj = {
                                fileName: localStorage.getItem('fileName') || null,
                                fileLocation: data.imageURL
                            };
                            _this.uploadValue.push(obj);
                            _this.validFileStatus = "";
                            _this.loaderService.display(false);
                        }
                        else {
                            // this.requiredStatus = 'There is some internal error.';
                            // this.isImage = false;
                            // this.loaderService.display(false);   
                            _this.router.navigate(['']);
                        }
                    }, function (error) {
                        // validFileStatus
                        _this.loaderService.display(false);
                        console.log(error.code);
                        //this.router.navigate(['']);
                    });
                }
                else {
                    // this.loaderService.display(false);
                    // this.isImage = false;
                    // this.requiredStatus = 'file size can not be more than 500 kb.';
                }
            }
        }
        else {
            this.validFileStatus = "you can upload only 5 valid file.";
        }
    };
    EducationComponent.prototype.ChangeStartDate = function (index, year) {
        this.educationListPrepareForm[index].YearofAcquisitionList = [];
        this.educationListPrepareForm[index].acquisitionYear = '0';
        this.educationListPrepareForm[index].YearofAcquisitionList = this.educationListPrepareForm[index].startYearList.filter(function (x) { return x >= year; });
    };
    EducationComponent.prototype.removeFormFromDome = function (index) {
        this.formStatus = '';
        this.educationListPrepareForm.splice(index, 1);
    };
    EducationComponent.prototype.addNewForm = function () {
        if (this.educationListPrepareForm.length <= 4) {
            this.formStatus = '';
            var form = {
                experience: '0',
                experienceValid: false,
                title: '',
                titleValid: false,
                institution: '',
                institutionValid: false,
                location: '',
                locationValid: false,
                stratDateYear: '0',
                stratDateYearValid: false,
                stratDateMonth: '0',
                stratDateMonthValid: false,
                acquisitionYear: '0',
                acquisitionYearValid: false,
                acquisitionMonth: '0',
                acquisitionMonthValid: false,
                descriptions: '',
                descriptionsValid: false,
                startYearList: this.getStartYear(),
                YearofAcquisitionList: this.getStartYear()
            };
            this.educationListPrepareForm.push(form);
        }
        else {
            this.formStatus = 'You can add only 5 certificates';
        }
    };
    EducationComponent.prototype.getEducationList = function () {
        this.experienceList.push('Associate Degree');
        this.experienceList.push('Bachelor Degree');
        this.experienceList.push('Graduate Degree');
        this.experienceList.push('Master Degree');
        this.experienceList.push('Doctoral Degree');
        this.experienceList.push('Professional Degree');
    };
    EducationComponent.prototype.getStartYear = function () {
        this.returnStartYearList = [];
        var currentTime = new Date();
        var Currentyear = currentTime.getFullYear();
        var startYear = Currentyear - 70;
        for (var y = startYear; y <= Currentyear; y++) {
            this.returnStartYearList.push(y);
        }
        return this.returnStartYearList;
    };
    EducationComponent.prototype.gotoPreviouseStep = function () {
        this.router.navigate(['../../teacher/language']);
    };
    //here showing the validation error
    EducationComponent.prototype.showValidation = function () {
        for (var i = 0; i < this.educationListPrepareForm.length; i++) {
            if (this.educationListPrepareForm[i].experience != '0' && this.educationListPrepareForm[i].experience != '') {
                this.educationListPrepareForm[i].experienceValid = false;
            }
            else {
                this.educationListPrepareForm[i].experienceValid = true;
            }
            if (this.educationListPrepareForm[i].title != '0' && this.educationListPrepareForm[i].title != '') {
                this.educationListPrepareForm[i].titleValid = false;
            }
            else {
                this.educationListPrepareForm[i].titleValid = true;
            }
            if (this.educationListPrepareForm[i].institution != '0' && this.educationListPrepareForm[i].institution != '') {
                this.educationListPrepareForm[i].institutionValid = false;
            }
            else {
                this.educationListPrepareForm[i].institutionValid = true;
            }
            if (this.educationListPrepareForm[i].location != '0' && this.educationListPrepareForm[i].location != '') {
                this.educationListPrepareForm[i].locationValid = false;
            }
            else {
                this.educationListPrepareForm[i].locationValid = true;
            }
            //not done
            if (this.educationListPrepareForm[i].stratDateYear != '0' && this.educationListPrepareForm[i].stratDateYear != '') {
                this.educationListPrepareForm[i].stratDateYearValid = false;
            }
            else {
                this.educationListPrepareForm[i].stratDateYearValid = true;
            }
            if (this.educationListPrepareForm[i].stratDateMonth != '0' && this.educationListPrepareForm[i].stratDateMonth != '') {
                this.educationListPrepareForm[i].stratDateMonthValid = false;
            }
            else {
                this.educationListPrepareForm[i].stratDateMonthValid = true;
            }
            if (this.educationListPrepareForm[i].acquisitionYear != '0' && this.educationListPrepareForm[i].acquisitionYear != '') {
                this.educationListPrepareForm[i].acquisitionYearValid = false;
            }
            else {
                this.educationListPrepareForm[i].acquisitionYearValid = true;
            }
            if (this.educationListPrepareForm[i].acquisitionMonth != '0' && this.educationListPrepareForm[i].acquisitionMonth != '') {
                this.educationListPrepareForm[i].acquisitionMonthValid = false;
            }
            else {
                this.educationListPrepareForm[i].acquisitionMonthValid = true;
            }
            if (this.educationListPrepareForm[i].descriptions != '0' && this.educationListPrepareForm[i].descriptions != '') {
                this.educationListPrepareForm[i].descriptionsValid = false;
            }
            else {
                this.educationListPrepareForm[i].descriptionsValid = true;
            }
        }
    };
    EducationComponent.prototype.isValid = function () {
        var status = true;
        for (var i = 0; i < this.educationListPrepareForm.length; i++) {
            if (this.educationListPrepareForm[i].experience == '0' || this.educationListPrepareForm[i].experience == '') {
                return false;
            }
            if (this.educationListPrepareForm[i].title == '0' || this.educationListPrepareForm[i].title == '') {
                return false;
            }
            if (this.educationListPrepareForm[i].institution == '0' || this.educationListPrepareForm[i].institution == '') {
                return false;
            }
            if (this.educationListPrepareForm[i].location == '0' || this.educationListPrepareForm[i].location == '') {
                return false;
            }
            if (this.educationListPrepareForm[i].stratDateYear == '0' || this.educationListPrepareForm[i].stratDateYear == '') {
                return false;
            }
            if (this.educationListPrepareForm[i].stratDateMonth == '0' || this.educationListPrepareForm[i].stratDateMonth == '') {
                return false;
            }
            if (this.educationListPrepareForm[i].acquisitionYear == '0' || this.educationListPrepareForm[i].acquisitionYear == '') {
                return false;
            }
            if (this.educationListPrepareForm[i].acquisitionMonth == '0' || this.educationListPrepareForm[i].acquisitionMonth == '') {
                return false;
            }
            if (this.educationListPrepareForm[i].descriptions == '0' || this.educationListPrepareForm[i].descriptions == '') {
                return false;
            }
        }
        return status;
    };
    EducationComponent.prototype.gotoNextStep = function () {
        var _this = this;
        this.showValidation();
        if (this.isValid()) {
            if (this.uploadValue.length > 0) {
                this.loaderService.display(true);
                this.validFileStatus = "";
                var experienceData = [];
                for (var i = 0; i < this.educationListPrepareForm.length; i++) {
                    var obj = {
                        "experienceType": this.educationListPrepareForm[i].experience,
                        "title": this.educationListPrepareForm[i].title,
                        "institution": this.educationListPrepareForm[i].institution,
                        "location": this.educationListPrepareForm[i].location,
                        "startDate": this.educationListPrepareForm[i].stratDateYear + '-' + this.educationListPrepareForm[i].stratDateMonth + '-01',
                        "yearOfAcquisition": this.educationListPrepareForm[i].acquisitionYear + '-' + this.educationListPrepareForm[i].acquisitionMonth + '-01',
                        "descriptions": this.educationListPrepareForm[i].descriptions
                    };
                    experienceData.push(obj);
                }
                var docs = [];
                for (var i = 0; i < this.uploadValue.length; i++) {
                    docs.push(this.uploadValue[i].fileLocation);
                }
                this.teacherService.saveTeacherEducationDetails(experienceData, docs).subscribe(function (data) {
                    if (data.code == '200') {
                        _this.loaderService.display(false);
                        _this.router.navigate(['../../teacher/certification']);
                    }
                    else {
                        //this.router.navigate(['']);
                    }
                }, function (error) {
                    //this.router.navigate(['']);
                });
            }
            else {
                this.validFileStatus = "Please upload you diploma(s)";
            }
        }
    };
    //fetching teacher information method
    EducationComponent.prototype.getTeacherInformation = function () {
        var _this = this;
        this.teacherService.getTeacherInformation().subscribe(function (data) {
            if (data.code == '200') {
                if (data.tutorsInfo.length > 0) {
                    if (data.tutorsInfo[0].educationDocs != undefined && data.tutorsInfo[0].educationDocs.length > 0) {
                        for (var i = 0; i < data.tutorsInfo[0].educationDocs.length; i++) {
                            var fileName = data.tutorsInfo[0].educationDocs[i];
                            var fileLength = fileName.split('/');
                            var NameName = fileLength[fileLength.length - 1];
                            var obj = {
                                fileName: NameName,
                                fileLocation: data.tutorsInfo[0].educationDocs[i]
                            };
                            _this.uploadValue.push(obj);
                        }
                        if (data.tutorsInfo[0].education.length > 0) {
                            _this.educationListPrepareForm = [];
                            for (var i = 0; i < data.tutorsInfo[0].education.length; i++) {
                                var form = {
                                    experience: data.tutorsInfo[0].education[i].experienceType,
                                    experienceValid: false,
                                    title: data.tutorsInfo[0].education[i].title,
                                    titleValid: false,
                                    institution: data.tutorsInfo[0].education[i].institution,
                                    institutionValid: false,
                                    location: data.tutorsInfo[0].education[i].location,
                                    locationValid: false,
                                    stratDateYear: data.tutorsInfo[0].education[i].startDate.split('-')[0],
                                    stratDateYearValid: false,
                                    stratDateMonth: data.tutorsInfo[0].education[i].startDate.split('-')[1],
                                    stratDateMonthValid: false,
                                    acquisitionYear: data.tutorsInfo[0].education[i].yearOfAcquisition.split('-')[0],
                                    acquisitionYearValid: false,
                                    acquisitionMonth: data.tutorsInfo[0].education[i].yearOfAcquisition.split('-')[1],
                                    acquisitionMonthValid: false,
                                    descriptions: data.tutorsInfo[0].education[i].descriptions,
                                    descriptionsValid: false,
                                    startYearList: _this.getStartYear(),
                                    YearofAcquisitionList: _this.getStartYear()
                                };
                                _this.educationListPrepareForm.push(form);
                            }
                        }
                    }
                    _this.loaderService.display(false);
                }
            }
            else {
                _this.loaderService.display(false);
                _this.router.navigate(['']);
            }
        }, function (error) {
            _this.loaderService.display(false);
            _this.router.navigate(['']);
        });
    };
    ;
    EducationComponent.prototype.changeStartYear = function () {
    };
    EducationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-education',
            template: __webpack_require__("../../../../../src/app/modules/teacher/components/education/education.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/teacher/components/education/education.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_teacher_service__["a" /* TeacherService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_teacher_service__["a" /* TeacherService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__modules_shared_loader__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_4__header_service__["a" /* HeaderService */]])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/teacher/components/general-availability/general-availability.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*------------- calendar-wrapper  ----*/\r\n\r\n.calendar-wrapper {\r\n    max-width: 800px;\r\n    width: 100%;\r\n    border: solid 1px #ebebeb;\r\n    margin: 10px auto -40px;\r\n    position: relative;\r\n}\r\n\r\n.table-wrapper .table {\r\n    margin: 20px 0 0;\r\n}\r\n\r\n.table-wrapper tr th {\r\n    border-right: solid 1px #eeeeee;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    font-weight: 400;\r\n    letter-spacing: 0.5px;\r\n    vertical-align: middle;\r\n    border-bottom: none;\r\n    width: 100px;\r\n}\r\n\r\n.table-wrapper thead tr th {\r\n    color: #000;\r\n}\r\n\r\n.table-wrapper tr th img {\r\n    display: block;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.table-wrapper tr th span {\r\n    color: #52686e;\r\n    font-weight: 600;\r\n}\r\n\r\n.table-wrapper tr td {\r\n    border-right: solid 1px #eeeeee;\r\n}\r\n\r\n.table-wrapper tr td:last-child,\r\n.table-wrapper thead tr th:last-child {\r\n    border-right: none;\r\n}\r\n\r\n.table-wrapper tr td.check {\r\n    padding: 0;\r\n    position: relative;\r\n}\r\n\r\n.table-checkbox [type=\"checkbox\"]:checked+label:before,\r\n.table-checkbox [type=\"checkbox\"]:not(:checked)+label:before {\r\n    content: '';\r\n    width: 100%;\r\n    height: 100%;\r\n    border: none;\r\n}\r\n\r\n.table-checkbox [type=\"checkbox\"]:checked+label,\r\n.table-checkbox [type=\"checkbox\"]:not(:checked)+label {\r\n    position: initial;\r\n    padding-left: 0;\r\n    display: block;\r\n}\r\n\r\n.table-checkbox [type=\"checkbox\"]:checked+label:after,\r\n.table-checkbox [type=\"checkbox\"]:not(:checked)+label:after {\r\n    content: '';\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: none;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #a5d281;\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n}\r\n\r\n.table-checkbox [type=\"checkbox\"]:checked+label:after {\r\n    opacity: 1;\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/teacher/components/general-availability/general-availability.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n <div class=\"profile-wrapper\">\r\n    <div class=\"text-center\">\r\n        <h1 class=\"titleheading small\">General weekly teaching availability</h1>\r\n    </div>\r\n    <div class=\"section-wrapper\">\r\n        <div class=\"calendar-wrapper\">\r\n            <label class=\"profile-label text-center pn\">Monday to Sunday</label>\r\n            <p class=\"parag text-center\">All times listed are in your local timezone</p>\r\n            <div class=\"table-wrapper\">\r\n                <table class=\"table table-responsive\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th><img src=\"assets/images/clock.png\" alt=\"Clock\"><span>{{timeZone}}</span></th>\r\n                            <th>MON</th>\r\n                            <th>TUE</th>\r\n                            <th>WED</th>\r\n                            <th>THU</th>\r\n                            <th>FRI</th>\r\n                            <th>SAT</th>\r\n                            <th>SUN</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n\r\n                      \r\n                            <tr *ngFor=\"let cal of prepareCalendar;let i=index\">\r\n                                    <th>{{cal.time}}</th>\r\n                                   <td class=\"check\">\r\n                                        <div class=\"table-checkbox\">\r\n                                            <input id=\"Monday{{i}}\" name=\"check{{cal.availability.Monday}}\" type=\"checkbox\" [checked]=\"isCheckedOrNot(i,'Monday')\" (change)=\"changeValue(i,'Monday')\">\r\n                                            <label for=\"Monday{{i}}\"></label>\r\n                                        </div>\r\n                                    </td>\r\n                                    \r\n                                  \r\n                                  \r\n\r\n                                     <td class=\"check\">\r\n                                        <div class=\"table-checkbox\">\r\n                                            <input id=\"Tuesday{{i}}\" name=\"check{{cal.availability.Tuesday}}\" type=\"checkbox\" [checked]=\"isCheckedOrNot(i,'Tuesday')\"  (change)=\"changeValue(i,'Tuesday')\">\r\n                                            <label for=\"Tuesday{{i}}\"></label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td class=\"check\">\r\n                                        <div class=\"table-checkbox\">\r\n                                                <input id=\"Wednesday{{i}}\" name=\"check{{cal.availability.Wednesday}}\" type=\"checkbox\" [checked]=\"isCheckedOrNot(i,'Wednesday')\" (change)=\"changeValue(i,'Wednesday')\" >\r\n                                                <label for=\"Wednesday{{i}}\"></label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td class=\"check\">\r\n                                        <div class=\"table-checkbox\">\r\n                                                <input id=\"Thursday{{i}}\" name=\"check{{cal.availability.Thursday}}\" type=\"checkbox\" [checked]=\"isCheckedOrNot(i,'Thursday')\" (change)=\"changeValue(i,'Thursday')\">\r\n                                                <label for=\"Thursday{{i}}\"></label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td class=\"check\">\r\n                                        <div class=\"table-checkbox\">\r\n                                                <input id=\"Friday{{i}}\" name=\"check{{cal.availability.Friday}}\" type=\"checkbox\" [checked]=\"isCheckedOrNot(i,'Friday')\" (change)=\"changeValue(i,'Friday')\">\r\n                                                <label for=\"Friday{{i}}\"></label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td class=\"check\">\r\n                                        <div class=\"table-checkbox\">\r\n                                                <input id=\"Saturday{{i}}\" name=\"check{{cal.availability.Saturday}}\" type=\"checkbox\" [checked]=\"isCheckedOrNot(i,'Saturday')\" (change)=\"changeValue(i,'Saturday')\">\r\n                                                <label for=\"Saturday{{i}}\"></label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td class=\"check\">\r\n                                        <div class=\"table-checkbox\">\r\n                                                <input id=\"Sunday{{i}}\" name=\"check{{cal.availability.Sunday}}\" type=\"checkbox\" [checked]=\"isCheckedOrNot(i,'Sunday')\" (change)=\"changeValue(i,'Sunday')\">\r\n                                                <label for=\"Sunday{{i}}\"></label>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr> \r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div class=\"button-wrapper withbg\">\r\n            <button type=\"submit\" (click)=\"goToBack()\" name=\"\" value=\"\" class=\"custom-btn prev small\">Previous</button>\r\n            <button type=\"submit\" (click)=\"goToNext()\" name=\"\" value=\"\" class=\"gradient custom-btn small pull-right\">Next</button>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/teacher/components/general-availability/general-availability.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralAvailabilityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_shared_loader__ = __webpack_require__("../../../../../src/app/modules/shared/loader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_teacher_service__ = __webpack_require__("../../../../../src/app/services/teacher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_calender_service__ = __webpack_require__("../../../../../src/app/services/calender.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_service__ = __webpack_require__("../../../../../src/app/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GeneralAvailabilityComponent = (function () {
    function GeneralAvailabilityComponent(teacherService, route, router, loaderService, calenderService, headerService) {
        this.teacherService = teacherService;
        this.route = route;
        this.router = router;
        this.loaderService = loaderService;
        this.calenderService = calenderService;
        this.headerService = headerService;
    }
    GeneralAvailabilityComponent.prototype.ngOnInit = function () {
        this.headerService.setHeaderValue(true);
        this.getCalendarForm();
        this.getTeacherInformation();
    };
    GeneralAvailabilityComponent.prototype.getCalendarForm = function () {
        this.prepareCalendar = this.calenderService.getCalendarForm();
    };
    GeneralAvailabilityComponent.prototype.goToBack = function () {
        this.router.navigate(['../../teacher/introduction']);
    };
    GeneralAvailabilityComponent.prototype.changeValue = function (index, value) {
        this.prepareCalendar[index].availability[value] = !this.prepareCalendar[index].availability[value];
    };
    GeneralAvailabilityComponent.prototype.isCheckedOrNot = function (index, value) {
        return this.prepareCalendar[index].availability[value];
    };
    GeneralAvailabilityComponent.prototype.goToNext = function () {
        var _this = this;
        this.loaderService.display(true);
        this.teacherService.saveTeacherAvailableTime(this.prepareCalendar).subscribe(function (data) {
            debugger;
            if (data.code == '200') {
                _this.loaderService.display(false);
                _this.router.navigate(['../../teacher/application']);
            }
            else {
                //this.router.navigate(['']);
            }
        }, function (error) {
            //this.router.navigate(['']);
        });
    };
    //fetching teacher information method
    GeneralAvailabilityComponent.prototype.getTeacherInformation = function () {
        var _this = this;
        this.loaderService.display(true);
        this.teacherService.getTeacherInformation().subscribe(function (data) {
            debugger;
            if (data.code == '200') {
                if (data.tutorsInfo.length > 0) {
                    if (data.tutorsInfo[0].timeZone != undefined) {
                        _this.timeZone = data.tutorsInfo[0].timeZone;
                    }
                    if (data.tutorsInfo[0].availableTime != undefined && data.tutorsInfo[0].availableTime.length > 0) {
                        _this.prepareCalendar = [];
                        _this.prepareCalendar = data.tutorsInfo[0].availableTime;
                    }
                }
                _this.loaderService.display(false);
            }
            else {
                _this.loaderService.display(false);
                _this.router.navigate(['']);
            }
        }, function (error) {
            _this.router.navigate(['']);
        });
    };
    ;
    GeneralAvailabilityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-general-availability',
            template: __webpack_require__("../../../../../src/app/modules/teacher/components/general-availability/general-availability.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/teacher/components/general-availability/general-availability.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_teacher_service__["a" /* TeacherService */], __WEBPACK_IMPORTED_MODULE_3__services_calender_service__["a" /* CalenderService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_teacher_service__["a" /* TeacherService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__modules_shared_loader__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__services_calender_service__["a" /* CalenderService */],
            __WEBPACK_IMPORTED_MODULE_4__header_service__["a" /* HeaderService */]])
    ], GeneralAvailabilityComponent);
    return GeneralAvailabilityComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/teacher/components/general-profile/general-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/teacher/components/general-profile/general-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-wrapper\">\r\n    <div class=\"text-center\">\r\n        <h1 class=\"titleheading small\">General Information</h1>\r\n    </div>\r\n    <div class=\"profile-imagesec-inner section-wrapper\">\r\n            <!-- <form (ngSubmit)=\"login(verification)\" #frm=\"ngForm\" novalidate> -->\r\n     <form (ngSubmit)=\"firstStepOfTeacher()\" #frm=\"ngForm\" novalidate>\r\n            <div class=\"choose-image\">\r\n                <figure class=\"profileimage\">\r\n                    <img [src]=\"viewImage\" src=\"assets/images/avtar.png\" alt=\"User\">\r\n                </figure>\r\n\r\n\r\n                <div class=\"browse-btn\">Browse \r\n                    <!-- <input type=\"file\" /> -->\r\n                    <input type=\"file\" name=\"avatar\" (change)=\"onFileChange($event)\"  accept=\"image/*\" class=\"browse-input\" id=\"docfileupload\">   \r\n                </div>\r\n                \r\n            </div>\r\n            <div class=\"other-option\"><span> Or Import From </span></div>\r\n            <div class=\"social-icon\">\r\n                <a href=\"javascript:void\" (click)=\"connectWithGooglePlus()\" class=\"google-plus\"><i class=\"fa fa-google-plus\"></i></a>\r\n                <a href=\"javascript:void\" (click)=\"getImageFromFacebook()\"  class=\"facebook\"><i class=\"fa fa-facebook\"></i></a>\r\n            </div>\r\n           \r\n            \r\n                    <span> {{requiredStatus}} </span>\r\n            \r\n            <div class=\"teacherprofile\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"input-label\">First Name:</label>\r\n                    <div class=\"input-form\">\r\n                        <!-- <input type=\"text\" value=\"\" name=\"\" placeholder=\"\" /> -->\r\n\r\n                        <input type=\"text\" name=\"firstName\" placeholder=\"First Name\"  #firstNameRef=\"ngModel\" [(ngModel)]=\"firstName\" required/>\r\n                         <div *ngIf=\"firstNameRef.invalid && firstNameRef.touched\">\r\n                                <span class=\"error-inputmsg\" style=\"display:block\" *ngIf=\"firstNameRef?.errors.required\">This Field is Required </span>\r\n                            </div>\r\n                      \r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"input-label\">Last Name:</label>\r\n                    <div class=\"input-form\">\r\n                            <input type=\"text\" name=\"lastName\" placeholder=\"Last Name\"  #lastNameRef=\"ngModel\" [(ngModel)]=\"lastName\" required/>\r\n                            <div *ngIf=\"lastNameRef.invalid && lastNameRef.touched\">\r\n                                   <span class=\"error-inputmsg\" style=\"display:block\" *ngIf=\"lastNameRef?.errors.required\">This Field is Required </span>\r\n                         </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"input-label\">Phone Number:</label>\r\n                    <div class=\"input-form\">\r\n                            <input type=\"text\" onPaste=\"return false\" (keypress)=\"restrictNumeric($event)\" name=\"phoneNumber\" placeholder=\"Phone Number\" minlength=\"7\" maxlength=\"12\"  #phoneNumberRef=\"ngModel\" [(ngModel)]=\"phoneNumber\" required/>\r\n                            <div *ngIf=\"phoneNumberRef.invalid && phoneNumberRef.touched\">\r\n                                   <span class=\"error-inputmsg\" style=\"display:block\" *ngIf=\"phoneNumberRef?.errors.required\">This Field is Required </span>\r\n                                   <span class=\"error-inputmsg\" style=\"display:block\" *ngIf=\"phoneNumberRef?.errors.minlength\">Phone number must be 7 to 12 digit.</span>\r\n                                   <span class=\"error-inputmsg\" style=\"display:block\" *ngIf=\"phoneNumberRef?.errors.maxlength\">Phone number must be 7 to 12 digit.</span>\r\n                               </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"input-label\">Country:</label>\r\n                    <div class=\"input-wrap\">\r\n                        <span class=\"selectpicker-btn\"></span>\r\n                       \r\n                      <select class=\"custom-selectpicker\" name=\"country\" [(ngModel)]=\"country\" (change)=\"changeCountry()\" required >\r\n                            <option value=\"0\" disabled selected>Select country</option>\r\n                            <option *ngFor=\"let c of countries;let i=index\" value=\"{{c.counrty}}\">\r\n                                {{c.counrty}}\r\n                            </option>\r\n                            </select>\r\n                            <div *ngIf=\"!selectcountry\">\r\n                                    <span class=\"error-inputmsg\" style=\"display:block\">This Field is Required </span>\r\n                             </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"input-label\">Time Zone:</label>\r\n                    <div class=\"input-form\">\r\n                        <input type=\"text\" value=\"\" name=\"timeZone\" placeholder=\"\" [(ngModel)]=\"timeZone\" disabled />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"button-wrapper withbg text-right\">\r\n                \r\n                <button type=\"submit\" name=\"\" value=\"\" class=\"gradient custom-btn small\" [disabled]=\"frm.invalid\">Next</button>\r\n\r\n               \r\n            </div>\r\n        </form>\r\n\r\n        <!-- <button type=\"submit\" name=\"\" value=\"\" (click)=\"changeValue()\" class=\"gradient custom-btn small\">Change Value</button> -->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/teacher/components/general-profile/general-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_teacher_service__ = __webpack_require__("../../../../../src/app/services/teacher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_shared_loader__ = __webpack_require__("../../../../../src/app/modules/shared/loader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_shared_header_footer_service__ = __webpack_require__("../../../../../src/app/modules/shared/header-footer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_service__ = __webpack_require__("../../../../../src/app/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular4_social_login__ = __webpack_require__("../../../../angular4-social-login/angular4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular4_social_login__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GeneralProfileComponent = (function () {
    function GeneralProfileComponent(teacherService, route, router, headerService, loaderService, headerFooterService, authService) {
        this.teacherService = teacherService;
        this.route = route;
        this.router = router;
        this.headerService = headerService;
        this.loaderService = loaderService;
        this.headerFooterService = headerFooterService;
        this.authService = authService;
        this.viewImage = "./assets/images/avtar.png";
        this.countries = [];
        this.selectcountry = true;
        this.isImage = false;
        this.isProfilePicAlreadySelected = false;
    }
    GeneralProfileComponent.prototype.changeValue = function () {
        this.headerService.setHeaderValue(true);
    };
    GeneralProfileComponent.prototype.ngOnInit = function () {
        this.headerService.setHeaderValue(true);
        this.loaderService.display(true);
        this.formData = new FormData();
        this.varificationId = this.route.snapshot.paramMap.get("id");
        if (this.varificationId) {
            localStorage.setItem('auth-token', this.varificationId);
        }
        this.country = '0';
        this.getCountriesAndTimeZone();
        this.getTeacherInformation();
    };
    //checking the valid image
    GeneralProfileComponent.prototype.isValidImage = function (ext) {
        if (ext != "jpeg" && ext != "jpg" && ext != "png" && ext != "bmp" && ext != "gif") {
            return false;
        }
        return true;
    };
    //choose image 
    GeneralProfileComponent.prototype.onFileChange = function (fileInput) {
        var _this = this;
        this.loaderService.display(true);
        var fileList = fileInput.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            console.log(fileList, file);
            var fileSize = fileList[0].size;
            var fileExtenstion = fileList[0].name.split('.').pop();
            if (this.isValidImage(fileExtenstion.toLowerCase())) {
                //500 KB
                if (fileSize <= 512000) {
                    this.formData.set('userImage', file);
                    this.teacherService.uploadTeacherProfileImage(this.formData).subscribe(function (data) {
                        if (data.code == '200') {
                            _this.viewImage = data.imageURL;
                            _this.requiredStatus = '';
                            _this.isImage = true;
                            _this.loaderService.display(false);
                        }
                        else {
                            _this.requiredStatus = 'There is some internal error.';
                            _this.isImage = false;
                            _this.loaderService.display(false);
                            //this.router.navigate(['']);
                        }
                    }, function (error) {
                        _this.isImage = true;
                        _this.requiredStatus = error.message;
                        console.log(error.code);
                        //this.router.navigate(['']);
                    });
                    // this.viewImage = fileInput.target.files[0];
                    // let reader = new FileReader();
                    // reader.onload = (e: any) => {
                    //   this.viewImage = e.target.result;
                    //   // localStorage.setItem('localImageStorage', this.viewImage);
                    //   this.requiredStatus = '';
                    //   this.isImage = true;
                    //   //this.ifLogoOrNot = e.target.result;
                    // }
                    // reader.readAsDataURL(fileInput.target.files[0]);
                }
                else {
                    this.loaderService.display(false);
                    this.isImage = false;
                    this.requiredStatus = 'file size can not be more than 500 kb.';
                }
            }
            else {
                this.loaderService.display(false);
                this.isImage = false;
                this.requiredStatus = 'Please upload a valid image.';
            }
        }
    };
    //get countries and their timezone
    GeneralProfileComponent.prototype.getCountriesAndTimeZone = function () {
        var _this = this;
        this.teacherService.getCountriesAndTimeZone().subscribe(function (data) {
            if (data.code == '200') {
                _this.countries = data.data;
            }
            else {
                _this.router.navigate(['']);
            }
        }, function (error) {
            console.log(error.code);
            _this.router.navigate(['']);
        });
    };
    //get teacher information
    //fetching teacher information method
    GeneralProfileComponent.prototype.getTeacherInformation = function () {
        var _this = this;
        debugger;
        this.teacherService.getTeacherInformation().subscribe(function (data) {
            debugger;
            if (data.code == '200') {
                if (data.tutorsInfo.length > 0) {
                    if (data.tutorsInfo[0].firstName != undefined) {
                        _this.firstName = data.tutorsInfo[0].firstName;
                    }
                    if (data.tutorsInfo[0].lastName != undefined) {
                        _this.lastName = data.tutorsInfo[0].lastName;
                    }
                    if (data.tutorsInfo[0].image != undefined) {
                        _this.viewImage = data.tutorsInfo[0].image;
                        _this.isProfilePicAlreadySelected = true;
                    }
                    if (data.tutorsInfo[0].phoneNumber != undefined) {
                        _this.phoneNumber = data.tutorsInfo[0].phoneNumber;
                    }
                    if (data.tutorsInfo[0].counrty != undefined) {
                        _this.country = data.tutorsInfo[0].counrty;
                    }
                    if (data.tutorsInfo[0].timeZone != undefined) {
                        _this.timeZone = data.tutorsInfo[0].timeZone;
                    }
                }
                _this.loaderService.display(false);
            }
            else {
                _this.loaderService.display(false);
                _this.router.navigate(['']);
            }
        }, function (error) {
            _this.router.navigate(['']);
        });
    };
    ;
    GeneralProfileComponent.prototype.isValid = function () {
        if (this.isImage || this.isProfilePicAlreadySelected) {
            this.requiredStatus = '';
        }
        else {
            this.requiredStatus = 'Please upload a valid image.';
        }
        if (this.country != '0') {
            this.selectcountry = true;
        }
        else {
            this.selectcountry = false;
        }
    };
    GeneralProfileComponent.prototype.restrictNumeric = function (e) {
        var input;
        if (e.metaKey || e.ctrlKey) {
            return true;
        }
        if (e.which === 32) {
            return false;
        }
        if (e.which === 0) {
            return true;
        }
        if (e.which < 33) {
            return true;
        }
        input = String.fromCharCode(e.which);
        return !!/[\d\s]/.test(input);
    };
    GeneralProfileComponent.prototype.changeCountry = function () {
        var _this = this;
        var timeZone = this.countries.filter(function (x) { return x.counrty == _this.country; });
        this.timeZone = timeZone[0].timeZone;
        this.selectcountry = true;
    };
    GeneralProfileComponent.prototype.firstStepOfTeacher = function () {
        var _this = this;
        this.isValid();
        if (this.isImage || this.isProfilePicAlreadySelected) {
            if (this.country != '0') {
                this.loaderService.display(true);
                var obj = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    phoneNumber: this.phoneNumber,
                    country: this.country,
                    timeZone: this.timeZone,
                    image: this.viewImage
                };
                this.teacherService.saveTeacherFirstStepData(obj).subscribe(function (data) {
                    _this.loaderService.display(false);
                    if (data.code == '200') {
                        _this.router.navigate(['../../teacher/language']);
                    }
                    else {
                        _this.router.navigate(['']);
                    }
                }, function (error) {
                    debugger;
                    console.log(error.code);
                });
            }
        }
    };
    GeneralProfileComponent.prototype.getImageFromFacebook = function () {
        var _this = this;
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_6_angular4_social_login__["FacebookLoginProvider"].PROVIDER_ID).then(function (value) {
            _this.viewImage = value.photoUrl;
            _this.isImage = true;
        }, function (error) {
            console.log(error);
        });
    };
    GeneralProfileComponent.prototype.connectWithGooglePlus = function () {
        var _this = this;
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_6_angular4_social_login__["GoogleLoginProvider"].PROVIDER_ID).then(function (success) {
            _this.viewImage = success.photoUrl;
            _this.isImage = true;
        }, function (error) {
            console.log(error);
        });
    };
    GeneralProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-general-profile',
            template: __webpack_require__("../../../../../src/app/modules/teacher/components/general-profile/general-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/teacher/components/general-profile/general-profile.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_teacher_service__["a" /* TeacherService */], __WEBPACK_IMPORTED_MODULE_4__modules_shared_header_footer_service__["a" /* HeaderFooterService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_teacher_service__["a" /* TeacherService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__header_service__["a" /* HeaderService */],
            __WEBPACK_IMPORTED_MODULE_3__modules_shared_loader__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_4__modules_shared_header_footer_service__["a" /* HeaderFooterService */],
            __WEBPACK_IMPORTED_MODULE_6_angular4_social_login__["AuthService"]])
    ], GeneralProfileComponent);
    return GeneralProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/teacher/components/introduction/introduction.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-group-small {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.filesize {\r\n    color: #8499a2;\r\n    font-size: 16px;\r\n    padding: 0 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/teacher/components/introduction/introduction.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-wrapper\">\r\n    <div class=\"text-center\">\r\n        <h1 class=\"titleheading small\">Introduction</h1>\r\n    </div>\r\n    <div class=\"section-wrapper\">\r\n        <form action=\"\">\r\n            <div class=\"maxwidth-select\">\r\n                <label for=\"\" class=\"profile-label text-center\">Link to introduction video</label>\r\n                <div class=\"text-center\">\r\n                    <div class=\"withicon browse-btn\"><img src=\"assets/images/upload.png\" alt=\"\"> Upload   <input type=\"file\" name=\"avatar\" [disabled]=\"introductionUrlText != ''\" (change)=\"onFileChange($event)\" id=\"docfileupload\">   </div>\r\n                  \r\n                    <span class=\"filesize\">(Max size 3MB)</span>\r\n                    <span *ngIf=\"IsFile\"> {{uploadedVideoName}} <img src=\"assets/images/red-cross.png\" (click)=\"removeFile()\" alt=\"\"/></span>         \r\n                    {{requiredStatus}}\r\n                </div>\r\n                <div class=\"form-group-small\">\r\n                    <div class=\"other-option\"><span>OR</span></div>\r\n                </div>\r\n                <div class=\"input-wrap form-group\">\r\n                    <input type=\"text\" [disabled]=\"IsFile\" value=\"\" name=\"introductionUrl\" placeholder=\"\" [(ngModel)]=\"introductionUrlText\" />\r\n                    <div class=\"input-addion\"><img src=\"assets/images/attachment.png\" alt=\"\"></div>\r\n                    <span class=\"error-inputmsg\" style=\"display:block\" *ngIf=\"noVideo\">Please upload a video or paste url here. </span>\r\n                </div>\r\n                <div class=\"form-group-small\">\r\n                    <label class=\"profile-label text-center pn pt30\">Write about yourself and your qualifications</label>\r\n                    <p class=\"parag text-center\">(About Me)</p>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <textarea name=\"aboutYourSelf\" id=\"\" cols=\"200\" rows=\"4\" [(ngModel)]=\"aboutYourSelf\"></textarea>\r\n                    <p class=\"parag text-right\">200 Characters</p>\r\n                    <span class=\"\" style=\"display:block\" *ngIf=\"noAboutYourSelf\">This Field is Required </span>\r\n                    \r\n                </div>\r\n            </div>\r\n            <div class=\"button-wrapper withbg\">\r\n                <button type=\"submit\" (click)=\"goToPreviouseStep()\" name=\"\" value=\"\" class=\"custom-btn prev small\">Previous</button>\r\n                <button type=\"submit\" (click)=\"goToNextStep()\" name=\"\" value=\"\" class=\"gradient custom-btn small pull-right\">Next</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/teacher/components/introduction/introduction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroductionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_shared_loader__ = __webpack_require__("../../../../../src/app/modules/shared/loader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_teacher_service__ = __webpack_require__("../../../../../src/app/services/teacher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_service__ = __webpack_require__("../../../../../src/app/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IntroductionComponent = (function () {
    function IntroductionComponent(teacherService, route, router, loaderService, headerService) {
        this.teacherService = teacherService;
        this.route = route;
        this.router = router;
        this.loaderService = loaderService;
        this.headerService = headerService;
        this.introductionUrl = '';
        this.introductionUrlText = '';
        this.introduction = '';
        this.requiredStatus = '';
        this.noVideo = false;
        this.aboutYourSelf = '';
        this.noAboutYourSelf = false;
        this.uploadedVideoName = '';
        this.IsFile = false;
    }
    IntroductionComponent.prototype.ngOnInit = function () {
        this.headerService.setHeaderValue(true);
        this.formData = new FormData();
        this.getTeacherInformation();
    };
    IntroductionComponent.prototype.goToPreviouseStep = function () {
        this.router.navigate(['../../teacher/work-experience']);
    };
    //checking the valid file
    IntroductionComponent.prototype.isValidImage = function (ext) {
        if (ext != "avi" && ext != "flv" && ext != "mp4") {
            return false;
        }
        return true;
    };
    //choose video 
    IntroductionComponent.prototype.onFileChange = function (fileInput) {
        var _this = this;
        this.loaderService.display(true);
        var fileList = fileInput.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            console.log(fileList, file);
            var fileSize = fileList[0].size;
            var fileExtenstion = fileList[0].name.split('.').pop();
            localStorage.setItem('vidsName', file.name);
            if (this.isValidImage(fileExtenstion.toLowerCase())) {
                //3 MB
                if (fileSize <= 3072000) {
                    this.formData.set('userImage', file);
                    this.teacherService.uploadTeacherProfileImage(this.formData).subscribe(function (data) {
                        if (data.code == '200') {
                            _this.uploadedVideoName = localStorage.getItem('vidsName') || null;
                            _this.introductionUrl = data.imageURL;
                            _this.requiredStatus = '';
                            _this.loaderService.display(false);
                            _this.noVideo = false;
                            _this.IsFile = true;
                        }
                        else {
                            _this.requiredStatus = 'There is some internal error.';
                            _this.loaderService.display(false);
                            //this.router.navigate(['']);
                        }
                    }, function (error) {
                        _this.requiredStatus = error.message;
                        console.log(error.code);
                        //this.router.navigate(['']);
                    });
                }
                else {
                    this.noVideo = true;
                    this.loaderService.display(false);
                    this.requiredStatus = 'file size can not be more than 3 Mb.';
                }
            }
            else {
                this.loaderService.display(false);
                this.requiredStatus = 'Please upload only .mp4, .avi or .flv file';
            }
        }
    };
    IntroductionComponent.prototype.removeFile = function () {
        this.introductionUrl = '';
        this.IsFile = false;
    };
    //fetching teacher information method
    IntroductionComponent.prototype.getTeacherInformation = function () {
        var _this = this;
        this.teacherService.getTeacherInformation().subscribe(function (data) {
            debugger;
            if (data.code == '200') {
                if (data.tutorsInfo.length > 0) {
                    if (data.tutorsInfo[0].videoLink != undefined && data.tutorsInfo[0].videoLink != null && data.tutorsInfo[0].videoLink != '') {
                        var url = data.tutorsInfo[0].videoLink.split('/');
                        var newName = url[url.length - 1];
                        _this.uploadedVideoName = newName;
                        _this.introductionUrl = data.tutorsInfo[0].videoLink;
                        _this.IsFile = true;
                    }
                    if (data.tutorsInfo[0].videoUrlLink != undefined && data.tutorsInfo[0].videoUrlLink != null && data.tutorsInfo[0].videoUrlLink != '') {
                        _this.introductionUrlText = data.tutorsInfo[0].videoUrlLink;
                    }
                    if (data.tutorsInfo[0].aboutMe != undefined) {
                        _this.aboutYourSelf = data.tutorsInfo[0].aboutMe;
                    }
                }
                _this.loaderService.display(false);
            }
            else {
                _this.loaderService.display(false);
                _this.router.navigate(['']);
            }
        }, function (error) {
            _this.router.navigate(['']);
        });
    };
    ;
    IntroductionComponent.prototype.goToNextStep = function () {
        var _this = this;
        debugger;
        if (this.introductionUrl != '' || this.introductionUrlText != '') {
            debugger;
            this.noVideo = false;
            if (this.aboutYourSelf != '') {
                this.loaderService.display(true);
                this.noAboutYourSelf = false;
                var videoUrl;
                var obj = {
                    videoLink: this.introductionUrl,
                    videoUrlLink: this.introductionUrlText,
                    aboutMe: this.aboutYourSelf
                };
                this.teacherService.saveTeacherIntroduction(obj).subscribe(function (data) {
                    _this.loaderService.display(false);
                    _this.loaderService.display(false);
                    if (data.code == '200') {
                        _this.router.navigate(['../../teacher/general-availability']);
                    }
                    else {
                        _this.router.navigate(['']);
                    }
                }, function (error) {
                    _this.loaderService.display(false);
                    console.log(error.code);
                });
            }
            else {
                this.noAboutYourSelf = true;
            }
        }
        else {
            this.noVideo = true;
        }
    };
    IntroductionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-introduction',
            template: __webpack_require__("../../../../../src/app/modules/teacher/components/introduction/introduction.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/teacher/components/introduction/introduction.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_teacher_service__["a" /* TeacherService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_teacher_service__["a" /* TeacherService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__modules_shared_loader__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__header_service__["a" /* HeaderService */]])
    ], IntroductionComponent);
    return IntroductionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/teacher/components/language/language.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/teacher/components/language/language.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-wrapper\">\r\n    <div class=\"text-center\">\r\n        <h1 class=\"titleheading small\">Languages you teach and speak</h1>\r\n    </div>\r\n    <div class=\"section-wrapper\">\r\n        <div class=\"form-group pb30\">\r\n            <label class=\"profile-label text-center\">What language do you want to teach?</label>\r\n            <div class=\"input-wrap maxwidth-select\">\r\n                <span class=\"selectpicker-btn\"></span>\r\n                <select class=\"custom-selectpicker\" name=\"teachLanguage\" [(ngModel)]=\"teachLanguage\" (change)=\"changeLanguageYouTeach()\">\r\n                    <option value=\"0\" disabled selected>Select Language</option>\r\n                    <option *ngFor=\"let language of languagesYouSpeakAndTeach;let i=index\" value=\"{{language.counrty}}\">\r\n                        {{language.counrty}}\r\n                    </option>\r\n\r\n                </select>\r\n                <span *ngIf=\"noTachLanguageSelction\" class=\"error-inputmsg\" style=\"display:block\">Please select Languages you teach. </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"section-wrapper\">\r\n        <div class=\"form-group pb30\">\r\n            <label class=\"profile-label text-center\">Languages you speak </label>\r\n            <div class=\"input-wrap maxwidth-select\">\r\n                <span class=\"selectpicker-btn\"></span>\r\n                <select class=\"custom-selectpicker\" name=\"speakLanguage\" [(ngModel)]=\"speakLanguage\" (change)=\"changeLanguageYouSpeak()\">\r\n                    <option value=\"0\" disabled selected>Select Language</option>\r\n                    <option *ngFor=\"let language of languagesYouSpeakAndTeach;let i=index\" value=\"{{language.counrty}}\">\r\n                        {{language.counrty}}\r\n                    </option>\r\n                </select>\r\n                <span *ngIf=\"noSpeakLanguageSelction\" class=\"error-inputmsg\" style=\"display:block\">Please select Languages you speak. </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"text-center\">\r\n        <h1 class=\"titleheading small\">Interests</h1>\r\n    </div>\r\n    <div class=\"section-wrapper\">\r\n\r\n        <label class=\"profile-label mn\">Select Your Interests :</label>\r\n        <ul class=\"interest-list clearfix\">\r\n                <li *ngFor=\"let i of allIntrest;let index=index\">\r\n                        \r\n                                        <!-- <a href=\"javascript:void(0);\" [ngClass]=\"{'active':intrest == i._id}\" (click)=\"changeIntrest(i._id)\" [ngStyle]=\"{'background': 'url(' + i.imageUrl + ')'}\"> -->\r\n                                                <a href=\"javascript:void(0);\" [ngClass]=\"{'active':checkForIntrest(i._id)}\" (click)=\"changeIntrest(i._id, 'change')\" [ngStyle]=\"{'background': 'url(' + i.imageUrl + ')'}\">\r\n                                            <div class=\"overlay\">\r\n                                                <h4 class=\"detail\">{{i.name}}</h4>\r\n                                                <div class=\"right-check\" (click)=\"changeIntrest(i._id, 'remove')\" ><img src=\"./assets/images/tick.png\" alt=\"\"></div>\r\n                                            </div>\r\n                                        </a>\r\n           </li>\r\n        </ul>\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"interest-listresult\">\r\n                <h4 class=\"head\">{{intrestName}}</h4>\r\n                <div class=\"custom-check-wrap\" *ngFor=\"let inner of allInrestInner;let index=index\">\r\n                    <input type=\"checkbox\" value=\"\" name=\"check\" id=\"{{inner._id}}\" [checked]=\"isCheckedOrNot(inner._id)\" (change)=\"addRemoveSelection(inner._id)\">\r\n                    <label for=\"{{inner._id}}\">{{inner.name}} </label>\r\n                </div>\r\n                <div class=\"interest-errormsg\">{{validationStatus}}</div>\r\n            </div>\r\n\r\n\r\n        <div class=\"button-wrapper withbg text-right\">\r\n            <a [routerLink]=\"['../generalprofile',varificationId]\" class=\"prev custom-btn small pull-left\">Previous</a>\r\n\r\n           \r\n            <button (click)=\"goToThirdStep()\" type=\"submit\" name=\"\" value=\"\" class=\"gradient custom-btn small\">Next</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/teacher/components/language/language.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_teacher_service__ = __webpack_require__("../../../../../src/app/services/teacher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_service__ = __webpack_require__("../../../../../src/app/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_loader__ = __webpack_require__("../../../../../src/app/modules/shared/loader.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LanguageComponent = (function () {
    function LanguageComponent(teacherService, route, router, loaderService, headerService) {
        this.teacherService = teacherService;
        this.route = route;
        this.router = router;
        this.loaderService = loaderService;
        this.headerService = headerService;
        this.languagesYouSpeakAndTeach = [];
        this.speakLanguage = '0';
        this.teachLanguage = '0';
        this.noTachLanguageSelction = false;
        this.noSpeakLanguageSelction = false;
        this.allIntrest = [];
        this.allInrestInner = [];
        this.allSelectedintrestInner = [];
        //intrest: string;
        this.intrest = [];
        this.validationStatus = '';
    }
    LanguageComponent.prototype.ngOnInit = function () {
        this.headerService.setHeaderValue(true);
        this.intrestName = 'FREE TALKING';
        this.loaderService.display(true);
        this.purpose = '1';
        //this.intrest = 'Free talking';
        this.getTeacherIntrest();
        this.getLanguagesYouSpeakAndTeach();
        if (localStorage.getItem('auth-token') != undefined) {
            this.varificationId = localStorage.getItem('auth-token');
        }
        this.getTeacherInformation();
    };
    //active menu of interst
    LanguageComponent.prototype.checkForIntrest = function (existvalue) {
        var exist = this.intrest.filter(function (x) { return x == existvalue; });
        if (exist.length > 0) {
            return true;
        }
        return false;
    };
    //fetching teacher information method
    LanguageComponent.prototype.getTeacherInformation = function () {
        var _this = this;
        this.teacherService.getTeacherInformation().subscribe(function (data) {
            if (data.code == '200') {
                if (data.tutorsInfo.length > 0) {
                    if (data.tutorsInfo[0].teachLanguage != undefined) {
                        _this.teachLanguage = data.tutorsInfo[0].teachLanguage;
                    }
                    if (data.tutorsInfo[0].parantInterest != undefined) {
                        _this.intrest = [];
                        for (var i = 0; i < data.tutorsInfo[0].parantInterest.length; i++) {
                            _this.intrest.push(data.tutorsInfo[0].parantInterest[i]);
                        }
                        ;
                    }
                    if (data.tutorsInfo[0].interests != undefined) {
                        _this.allSelectedintrestInner = [];
                        for (var i = 0; i < data.tutorsInfo[0].interests.length; i++) {
                            _this.allSelectedintrestInner.push(data.tutorsInfo[0].interests[i]);
                        }
                        ;
                    }
                    if (data.tutorsInfo[0].speakLanguage != undefined && data.tutorsInfo[0].speakLanguage != null) {
                        _this.speakLanguage = data.tutorsInfo[0].speakLanguage;
                    }
                    _this.loaderService.display(false);
                }
            }
            else {
                _this.loaderService.display(false);
                _this.router.navigate(['']);
            }
        }, function (error) {
            _this.loaderService.display(false);
            _this.router.navigate(['']);
        });
    };
    ;
    //remove parent and child element
    LanguageComponent.prototype.removeAllPerentChild = function (_id) {
        var indexOfArray = this.intrest.indexOf(_id);
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
    LanguageComponent.prototype.ChangePurpose = function (purpose) {
        this.purpose = purpose;
    };
    LanguageComponent.prototype.isCheckedOrNot = function (value) {
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
    LanguageComponent.prototype.addRemoveSelection = function (value) {
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
    LanguageComponent.prototype.changeIntrest = function (intrest, purpose) {
        if (purpose == 'change') {
            this.validationStatus = '';
            var exist = this.intrest.filter(function (x) { return x == intrest; });
            if (exist.length > 0) {
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
    LanguageComponent.prototype.getTeacherIntrest = function () {
        var _this = this;
        this.teacherService.getTeacherIntrest().subscribe(function (data) {
            if (data.code === 200) {
                if (data.dataGrid.length > 0) {
                    _this.allIntrest = data.dataGrid;
                    var inner = _this.allIntrest; //.filter(x => x._id == this.intrest);
                    // this.intrestName = inner[0].name;
                    _this.allInrestInner = inner[0].innerData;
                }
            }
            else {
            }
        }, function (error) {
            console.log(error.code);
        });
    };
    LanguageComponent.prototype.getLanguagesYouSpeakAndTeach = function () {
        var _this = this;
        this.teacherService.getTeacherLanguages().subscribe(function (data) {
            if (data.code == '200') {
                _this.languagesYouSpeakAndTeach = data.data;
            }
            else {
            }
        }, function (error) {
            console.log(error.code);
        });
    };
    LanguageComponent.prototype.isValid = function () {
        if (this.speakLanguage != '0') {
            this.noSpeakLanguageSelction = false;
        }
        else {
            this.noSpeakLanguageSelction = true;
        }
        if (this.teachLanguage != '0') {
            this.noTachLanguageSelction = false;
        }
        else {
            this.noTachLanguageSelction = true;
        }
    };
    LanguageComponent.prototype.changeLanguageYouTeach = function () {
        this.noTachLanguageSelction = false;
    };
    LanguageComponent.prototype.changeLanguageYouSpeak = function () {
        this.noSpeakLanguageSelction = false;
    };
    LanguageComponent.prototype.goToThirdStep = function () {
        var _this = this;
        debugger;
        this.isValid();
        if (this.speakLanguage != '0') {
            if (this.teachLanguage != '0') {
                if (this.allSelectedintrestInner.length > 0) {
                    this.loaderService.display(true);
                    var obj = {
                        parantInterest: this.intrest,
                        intrest: this.allSelectedintrestInner,
                        languageYouSpeak: this.speakLanguage,
                        languageYouTeach: this.teachLanguage
                    };
                    this.teacherService.saveTeacherSecondStepData(obj).subscribe(function (data) {
                        _this.loaderService.display(false);
                        if (data.code == '200') {
                            _this.router.navigate(['../../teacher/education']);
                        }
                        else {
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
            }
        }
    };
    LanguageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-language',
            template: __webpack_require__("../../../../../src/app/modules/teacher/components/language/language.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/teacher/components/language/language.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_teacher_service__["a" /* TeacherService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_teacher_service__["a" /* TeacherService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__shared_loader__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__header_service__["a" /* HeaderService */]])
    ], LanguageComponent);
    return LanguageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/teacher/components/work-experience/work-experience.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/teacher/components/work-experience/work-experience.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-wrapper teacher\">\r\n    <div class=\"text-center\">\r\n        <h1 class=\"titleheading small\">Work Experience</h1>\r\n    </div>\r\n    <div class=\"section-wrapper\">\r\n        <form action=\"\" class=\"\">\r\n\r\n            \r\n            <div class=\"append-wrapper\"  *ngFor=\"let form of educationListPrepareForm;let i=index\">\r\n            <div *ngIf=\"i != 0\" (click)=\"removeFormFromDome(i)\" >close</div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"input-label\">Company Name:</label>\r\n                        <div class=\"input-form\">\r\n                            <input type=\"text\" value=\"\" name=\"companyName{{i}}\" placeholder=\"\"  [(ngModel)]=\"form.companyName\" />\r\n                            <span  *ngIf=\"form.companyNameValid\" class=\"error-inputmsg\" style=\"display:block\">This field is required. </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"input-label\">Position:</label>\r\n                        <div class=\"input-form\">\r\n                            <input type=\"text\" value=\"\" name=\"Position{{i}}\" placeholder=\"\"  [(ngModel)]=\"form.position\" />\r\n                            <span  *ngIf=\"form.positionValid\" class=\"error-inputmsg\" style=\"display:block\">This field is required. </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"input-label\">Start Date:</label>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"input-wrap\">\r\n                                    <span class=\"selectpicker-btn\"></span>\r\n                                  <select class=\"custom-selectpicker\" name=\"stratDateYear{{i}}\" [(ngModel)]=\"form.stratDateYear\" (change)=\"ChangeStartDate(i,form.stratDateYear)\" >\r\n                                        <option value=\"0\" disabled selected>Select Year</option>\r\n                                        <option *ngFor=\"let y of form.startYearList;let i=index\" value=\"{{y}}\" (change)=\"changeStartYear()\">\r\n                                              {{y}}\r\n                                      </option>\r\n                                    </select>\r\n                                    <span  *ngIf=\"form.stratDateYearValid\" class=\"error-inputmsg\" style=\"display:block\">This field is required. </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"input-wrap\">\r\n                                    <span class=\"selectpicker-btn\"></span>\r\n                                    <select class=\"custom-selectpicker\" name=\"stratDateMonth{{i}}\" [(ngModel)]=\"form.stratDateMonth\">\r\n                                      <option value=\"0\" disabled selected>Select Month</option>\r\n                                      <option value=\"1\">January</option>\r\n                                      <option value=\"2\">February</option>\r\n                                      <option value=\"3\">March</option>\r\n                                      <option value=\"4\">April</option>\r\n                                      <option value=\"5\">May</option>\r\n                                      <option value=\"6\">June</option>\r\n                                      <option value=\"7\">July</option>\r\n                                      <option value=\"8\">August</option>\r\n                                      <option value=\"9\">September</option>\r\n                                      <option value=\"10\">October</option>\r\n                                      <option value=\"11\">November</option>\r\n                                      <option value=\"12\">December</option>\r\n                                  </select>\r\n                                  <span  *ngIf=\"form.stratDateMonthValid\" class=\"error-inputmsg\" style=\"display:block\">This field is required. </span>\r\n                                  \r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"input-label\">End Date:</label>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"input-wrap\">\r\n                                    <span class=\"selectpicker-btn\"></span>\r\n                                    <select class=\"custom-selectpicker\"  name=\"endDateYear{{i}}\" [(ngModel)]=\"form.endDateYear\">\r\n                                      <option value=\"0\" disabled selected>Select Year</option>\r\n                                      <option *ngFor=\"let y of form.YearofAcquisitionList;let i=index\" value=\"{{y}}\">\r\n                                            {{y}}\r\n                                       </option>\r\n                                  </select>\r\n                                  <span  *ngIf=\"form.endDateYearValid\" class=\"error-inputmsg\" style=\"display:block\">This field is required. </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"input-wrap\">\r\n                                    <span class=\"selectpicker-btn\"></span>\r\n                                    <select class=\"custom-selectpicker\" name=\"endDateMonth{{i}}\" [(ngModel)]=\"form.endDateMonth\">\r\n                                      <option value=\"0\" disabled selected>Select Month</option>\r\n                                      <option value=\"1\">January</option>\r\n                                      <option value=\"2\">February</option>\r\n                                      <option value=\"3\">March</option>\r\n                                      <option value=\"4\">April</option>\r\n                                      <option value=\"5\">May</option>\r\n                                      <option value=\"6\">June</option>\r\n                                      <option value=\"7\">July</option>\r\n                                      <option value=\"8\">August</option>\r\n                                      <option value=\"9\">September</option>\r\n                                      <option value=\"10\">October</option>\r\n                                      <option value=\"11\">November</option>\r\n                                      <option value=\"12\">December</option>\r\n                                  </select>\r\n                                  <span  *ngIf=\"form.endDateMonthValid\" class=\"error-inputmsg\" style=\"display:block\">This field is required. </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12 col-xs-12\">\r\n                    <div class=\"input-form\">\r\n                        <label class=\"input-label\">Descriptions:</label>\r\n                        <textarea name=\"\" id=\"\" cols=\"30\" rows=\"3\" name=\"descriptions{{i}}\" [(ngModel)]=\"form.descriptions\"></textarea>\r\n                        <span  *ngIf=\"form.descriptionsValid\" class=\"error-inputmsg\" style=\"display:block\">This field is required. </span>\r\n                        \r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12 col-xs-12\">\r\n                    <a href=\"javascript:void(0);\"  (click)=\"addNewForm()\" class=\"add-more-appenddata\">Add More</a>\r\n                </div>\r\n            </div>\r\n            </div>\r\n            <div class=\"button-wrapper row\">\r\n                <div class=\"col-sm-6 text-right\"><button (click)=\"gotoPreviouseStep()\" type=\"submit\" name=\"\" value=\"\" class=\"custom-btn cancel\">Cancel</button></div>\r\n                <div class=\"col-sm-6 text-left\"><button (click)=\"gotoNextStep()\" type=\"submit\" name=\"\" value=\"\" class=\"gradient custom-btn save\">Save</button></div>\r\n            </div>\r\n           \r\n\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/teacher/components/work-experience/work-experience.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkExperienceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_shared_loader__ = __webpack_require__("../../../../../src/app/modules/shared/loader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_teacher_service__ = __webpack_require__("../../../../../src/app/services/teacher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_service__ = __webpack_require__("../../../../../src/app/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WorkExperienceComponent = (function () {
    function WorkExperienceComponent(teacherService, route, router, loaderService, headerService) {
        this.teacherService = teacherService;
        this.route = route;
        this.router = router;
        this.loaderService = loaderService;
        this.headerService = headerService;
        //for preparing form in the html
        this.educationListPrepareForm = [];
        this.returnStartYearList = [];
    }
    WorkExperienceComponent.prototype.ngOnInit = function () {
        this.headerService.setHeaderValue(true);
        this.loaderService.display(true);
        this.prepareFormInDom();
        // this.getEducationList();
        this.getTeacherInformation();
    };
    WorkExperienceComponent.prototype.prepareFormInDom = function () {
        var form = {
            companyName: '',
            companyNameValid: false,
            position: '',
            positionValid: false,
            stratDateYear: '0',
            stratDateYearValid: false,
            stratDateMonth: '0',
            stratDateMonthValid: false,
            endDateYear: '0',
            endDateYearValid: false,
            endDateMonth: '0',
            endDateMonthValid: false,
            descriptions: '',
            descriptionsValid: false,
            startYearList: this.getStartYear(),
            YearofAcquisitionList: this.getStartYear()
        };
        this.educationListPrepareForm.push(form);
    };
    WorkExperienceComponent.prototype.ChangeStartDate = function (index, year) {
        this.educationListPrepareForm[index].YearofAcquisitionList = [];
        this.educationListPrepareForm[index].endDateYear = '0';
        this.educationListPrepareForm[index].YearofAcquisitionList = this.educationListPrepareForm[index].startYearList.filter(function (x) { return x >= year; });
    };
    WorkExperienceComponent.prototype.addNewForm = function () {
        if (this.educationListPrepareForm.length <= 4) {
            var form = {
                companyName: '',
                companyNameValid: false,
                position: '',
                positionValid: false,
                stratDateYear: '0',
                stratDateYearValid: false,
                stratDateMonth: '0',
                stratDateMonthValid: false,
                endDateYear: '0',
                endDateYearValid: false,
                endDateMonth: '0',
                endDateMonthValid: false,
                descriptions: '',
                descriptionsValid: false,
                startYearList: this.getStartYear(),
                YearofAcquisitionList: this.getStartYear()
            };
            this.educationListPrepareForm.push(form);
        }
    };
    WorkExperienceComponent.prototype.removeFormFromDome = function (index) {
        this.educationListPrepareForm.splice(index, 1);
    };
    WorkExperienceComponent.prototype.showValidation = function () {
        for (var i = 0; i < this.educationListPrepareForm.length; i++) {
            if (this.educationListPrepareForm[i].companyName != '0' && this.educationListPrepareForm[i].companyName != '') {
                this.educationListPrepareForm[i].companyNameValid = false;
            }
            else {
                this.educationListPrepareForm[i].companyNameValid = true;
            }
            if (this.educationListPrepareForm[i].position != '0' && this.educationListPrepareForm[i].position != '') {
                this.educationListPrepareForm[i].positionValid = false;
            }
            else {
                this.educationListPrepareForm[i].positionValid = true;
            }
            if (this.educationListPrepareForm[i].stratDateYear != '0' && this.educationListPrepareForm[i].stratDateYear != '') {
                this.educationListPrepareForm[i].stratDateYearValid = false;
            }
            else {
                this.educationListPrepareForm[i].stratDateYearValid = true;
            }
            if (this.educationListPrepareForm[i].stratDateMonth != '0' && this.educationListPrepareForm[i].stratDateMonth != '') {
                this.educationListPrepareForm[i].stratDateMonthValid = false;
            }
            else {
                this.educationListPrepareForm[i].stratDateMonthValid = true;
            }
            if (this.educationListPrepareForm[i].endDateYear != '0' && this.educationListPrepareForm[i].endDateYear != '') {
                this.educationListPrepareForm[i].endDateYearValid = false;
            }
            else {
                this.educationListPrepareForm[i].endDateYearValid = true;
            }
            if (this.educationListPrepareForm[i].endDateMonth != '0' && this.educationListPrepareForm[i].endDateMonth != '') {
                this.educationListPrepareForm[i].endDateMonthValid = false;
            }
            else {
                this.educationListPrepareForm[i].endDateMonthValid = true;
            }
            if (this.educationListPrepareForm[i].descriptions != '0' && this.educationListPrepareForm[i].descriptions != '') {
                this.educationListPrepareForm[i].descriptionsValid = false;
            }
            else {
                this.educationListPrepareForm[i].descriptionsValid = true;
            }
        }
    };
    WorkExperienceComponent.prototype.isValid = function () {
        var status = true;
        for (var i = 0; i < this.educationListPrepareForm.length; i++) {
            if (this.educationListPrepareForm[i].companyName == '0' || this.educationListPrepareForm[i].companyName == '') {
                return false;
            }
            if (this.educationListPrepareForm[i].position == '0' || this.educationListPrepareForm[i].position == '') {
                return false;
            }
            if (this.educationListPrepareForm[i].stratDateYear == '0' || this.educationListPrepareForm[i].stratDateYear == '') {
                return false;
            }
            if (this.educationListPrepareForm[i].stratDateMonth == '0' || this.educationListPrepareForm[i].stratDateMonth == '') {
                return false;
            }
            if (this.educationListPrepareForm[i].endDateYear == '0' || this.educationListPrepareForm[i].endDateYear == '') {
                return false;
            }
            if (this.educationListPrepareForm[i].endDateMonth == '0' || this.educationListPrepareForm[i].endDateMonth == '') {
                return false;
            }
            if (this.educationListPrepareForm[i].descriptions == '0' || this.educationListPrepareForm[i].descriptions == '') {
                return false;
            }
        }
        return status;
    };
    WorkExperienceComponent.prototype.gotoPreviouseStep = function () {
        this.router.navigate(['../../teacher/certification']);
    };
    WorkExperienceComponent.prototype.gotoNextStep = function () {
        var _this = this;
        this.showValidation();
        if (this.isValid()) {
            this.loaderService.display(true);
            // this.validFileStatus = "";
            var workExperienceData = [];
            for (var i = 0; i < this.educationListPrepareForm.length; i++) {
                var obj = {
                    "companyName": this.educationListPrepareForm[i].companyName,
                    "position": this.educationListPrepareForm[i].position,
                    "startDate": this.educationListPrepareForm[i].stratDateYear + '-' + this.educationListPrepareForm[i].stratDateMonth + '-01',
                    "endDate": this.educationListPrepareForm[i].endDateYear + '-' + this.educationListPrepareForm[i].endDateMonth + '-01',
                    "descriptions": this.educationListPrepareForm[i].descriptions
                };
                workExperienceData.push(obj);
            }
            this.teacherService.saveTeacherworkExperianceData(workExperienceData).subscribe(function (data) {
                if (data.code == '200') {
                    _this.loaderService.display(false);
                    _this.router.navigate(['../../teacher/introduction']);
                }
                else {
                    //this.router.navigate(['']);
                }
            }, function (error) {
                //this.router.navigate(['']);
            });
        }
    };
    //fetching teacher information method
    WorkExperienceComponent.prototype.getTeacherInformation = function () {
        var _this = this;
        this.teacherService.getTeacherInformation().subscribe(function (data) {
            if (data.code == '200') {
                if (data.tutorsInfo.length > 0) {
                    if (data.tutorsInfo[0].workExperience != undefined && data.tutorsInfo[0].workExperience.length > 0) {
                        _this.educationListPrepareForm = [];
                        for (var i = 0; i < data.tutorsInfo[0].workExperience.length; i++) {
                            var form = {
                                companyName: data.tutorsInfo[0].workExperience[i].companyName,
                                companyNameValid: false,
                                position: data.tutorsInfo[0].workExperience[i].position,
                                positionValid: false,
                                stratDateYear: data.tutorsInfo[0].workExperience[i].startDate.split('-')[0],
                                stratDateYearValid: false,
                                stratDateMonth: data.tutorsInfo[0].workExperience[i].startDate.split('-')[1],
                                stratDateMonthValid: false,
                                endDateYear: data.tutorsInfo[0].workExperience[i].endDate.split('-')[0],
                                endDateYearValid: false,
                                endDateMonth: data.tutorsInfo[0].workExperience[i].endDate.split('-')[1],
                                endDateMonthValid: false,
                                descriptions: data.tutorsInfo[0].workExperience[i].descriptions,
                                descriptionsValid: false,
                                startYearList: _this.getStartYear(),
                                YearofAcquisitionList: _this.getStartYear()
                            };
                            _this.educationListPrepareForm.push(form);
                        }
                    }
                    _this.loaderService.display(false);
                }
            }
            else {
                _this.loaderService.display(false);
                _this.router.navigate(['']);
            }
        }, function (error) {
            _this.loaderService.display(false);
            _this.router.navigate(['']);
        });
    };
    ;
    WorkExperienceComponent.prototype.getStartYear = function () {
        this.returnStartYearList = [];
        var currentTime = new Date();
        var Currentyear = currentTime.getFullYear();
        var startYear = Currentyear - 70;
        for (var y = startYear; y <= Currentyear; y++) {
            this.returnStartYearList.push(y);
        }
        return this.returnStartYearList;
    };
    WorkExperienceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-work-experience',
            template: __webpack_require__("../../../../../src/app/modules/teacher/components/work-experience/work-experience.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/teacher/components/work-experience/work-experience.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_teacher_service__["a" /* TeacherService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_teacher_service__["a" /* TeacherService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__modules_shared_loader__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__header_service__["a" /* HeaderService */]])
    ], WorkExperienceComponent);
    return WorkExperienceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/teacher/teacher.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherModule", function() { return TeacherModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teacher_router__ = __webpack_require__("../../../../../src/app/modules/teacher/teacher.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_general_profile_general_profile_component__ = __webpack_require__("../../../../../src/app/modules/teacher/components/general-profile/general-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_language_language_component__ = __webpack_require__("../../../../../src/app/modules/teacher/components/language/language.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_education_education_component__ = __webpack_require__("../../../../../src/app/modules/teacher/components/education/education.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_certification_certification_component__ = __webpack_require__("../../../../../src/app/modules/teacher/components/certification/certification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_work_experience_work_experience_component__ = __webpack_require__("../../../../../src/app/modules/teacher/components/work-experience/work-experience.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_introduction_introduction_component__ = __webpack_require__("../../../../../src/app/modules/teacher/components/introduction/introduction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_application_application_component__ = __webpack_require__("../../../../../src/app/modules/teacher/components/application/application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_general_availability_general_availability_component__ = __webpack_require__("../../../../../src/app/modules/teacher/components/general-availability/general-availability.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var TeacherModule = (function () {
    function TeacherModule() {
    }
    TeacherModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__teacher_router__["a" /* TeacherRouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__components_general_profile_general_profile_component__["a" /* GeneralProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_language_language_component__["a" /* LanguageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_education_education_component__["a" /* EducationComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_certification_certification_component__["a" /* CertificationComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_work_experience_work_experience_component__["a" /* WorkExperienceComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_introduction_introduction_component__["a" /* IntroductionComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_application_application_component__["a" /* ApplicationComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_general_availability_general_availability_component__["a" /* GeneralAvailabilityComponent */]
            ]
        })
    ], TeacherModule);
    return TeacherModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/teacher/teacher.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherRouterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_general_profile_general_profile_component__ = __webpack_require__("../../../../../src/app/modules/teacher/components/general-profile/general-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_language_language_component__ = __webpack_require__("../../../../../src/app/modules/teacher/components/language/language.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_education_education_component__ = __webpack_require__("../../../../../src/app/modules/teacher/components/education/education.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_certification_certification_component__ = __webpack_require__("../../../../../src/app/modules/teacher/components/certification/certification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_work_experience_work_experience_component__ = __webpack_require__("../../../../../src/app/modules/teacher/components/work-experience/work-experience.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_introduction_introduction_component__ = __webpack_require__("../../../../../src/app/modules/teacher/components/introduction/introduction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_application_application_component__ = __webpack_require__("../../../../../src/app/modules/teacher/components/application/application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_general_availability_general_availability_component__ = __webpack_require__("../../../../../src/app/modules/teacher/components/general-availability/general-availability.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var teacherRoutes = [
    // { path:'', redirectTo:'generalprofile',  component:GeneralProfileComponent },
    { path: 'generalprofile/:id', component: __WEBPACK_IMPORTED_MODULE_2__components_general_profile_general_profile_component__["a" /* GeneralProfileComponent */] },
    { path: 'language', component: __WEBPACK_IMPORTED_MODULE_3__components_language_language_component__["a" /* LanguageComponent */] },
    { path: 'education', component: __WEBPACK_IMPORTED_MODULE_4__components_education_education_component__["a" /* EducationComponent */] },
    { path: 'certification', component: __WEBPACK_IMPORTED_MODULE_5__components_certification_certification_component__["a" /* CertificationComponent */] },
    { path: 'work-experience', component: __WEBPACK_IMPORTED_MODULE_6__components_work_experience_work_experience_component__["a" /* WorkExperienceComponent */] },
    { path: 'introduction', component: __WEBPACK_IMPORTED_MODULE_7__components_introduction_introduction_component__["a" /* IntroductionComponent */] },
    { path: 'application', component: __WEBPACK_IMPORTED_MODULE_8__components_application_application_component__["a" /* ApplicationComponent */] },
    { path: 'general-availability', component: __WEBPACK_IMPORTED_MODULE_9__components_general_availability_general_availability_component__["a" /* GeneralAvailabilityComponent */] }
];
var TeacherRouterModule = (function () {
    function TeacherRouterModule() {
    }
    TeacherRouterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(teacherRoutes)
            ],
            declarations: []
        })
    ], TeacherRouterModule);
    return TeacherRouterModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/calender.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalenderService; });
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

var CalenderService = (function () {
    function CalenderService() {
        this.preparecalendar = [];
    }
    CalenderService.prototype.getCalendarForm = function () {
        for (var i = 1; i <= 24; i++) {
            if (i <= 9) {
                var value = {
                    "time": '0' + i + ':00',
                    "availability": {
                        "Monday": false,
                        "Tuesday": false,
                        "Wednesday": false,
                        "Thursday": false,
                        "Friday": false,
                        "Saturday": false,
                        "Sunday": false
                    }
                };
                this.preparecalendar.push(value);
            }
            else {
                var value = {
                    "time": i + ':00',
                    "availability": {
                        "Monday": false,
                        "Tuesday": false,
                        "Wednesday": false,
                        "Thursday": false,
                        "Friday": false,
                        "Saturday": false,
                        "Sunday": false
                    }
                };
                this.preparecalendar.push(value);
            }
        }
        return this.preparecalendar;
    };
    CalenderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CalenderService);
    return CalenderService;
}());



/***/ }),

/***/ "../../../../../src/app/services/teacher.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherService; });
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







var TeacherService = (function () {
    function TeacherService(http) {
        this.http = http;
    }
    TeacherService.prototype.getHeaderOfApplication = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', "application/x-www-form-urlencoded");
        headers.append('authtoken', localStorage.getItem('auth-token'));
        headers.append('Authorization', "Basic YWRtaW5Aa2FvbGF3ZWJhcHAuY29tOjEyMzQ1Ng==");
        return headers;
    };
    TeacherService.prototype.getHeaderOfApplicationWithAuthorization = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        // headers.append('Content-Type', "application/x-www-form-urlencoded")
        headers.append('authtoken', localStorage.getItem('auth-token'));
        headers.append('Authorization', "Basic YWRtaW5Aa2FvbGF3ZWJhcHAuY29tOjEyMzQ1Ng==");
        return headers;
    };
    TeacherService.prototype.getHeaderOfApplicationJson = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', "application/json");
        headers.append('authtoken', localStorage.getItem('auth-token'));
        headers.append('Authorization', "Basic YWRtaW5Aa2FvbGF3ZWJhcHAuY29tOjEyMzQ1Ng==");
        return headers;
    };
    //get teacher countries and their time zone
    TeacherService.prototype.getCountriesAndTimeZone = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].serverUrl + 'users/country-with-time-zone', { headers: this.getHeaderOfApplicationWithAuthorization() })
            .map(function (res) {
            return res.json();
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].throw(error.json() || 'Server error'); });
    };
    //get student full information
    TeacherService.prototype.getTeacherInformation = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].serverUrl + 'tutor/view-tutor-info', { headers: this.getHeaderOfApplicationWithAuthorization() })
            .map(function (res) {
            return res.json();
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].throw(error.json() || 'Server error'); });
    };
    //upload teacher items
    // student first step verification
    TeacherService.prototype.uploadTeacherProfileImage = function (data) {
        console.log("control in the save teacher first StepData service");
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].serverUrl + 'tutor/upload-image', data, { headers: this.getHeaderOfApplicationWithAuthorization() })
            .map(function (res) {
            return res.json();
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].throw(error.json() || 'Server error'); });
    };
    TeacherService.prototype.saveTeacherFirstStepData = function (obj) {
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        body.set('firstName', obj.firstName);
        body.set('lastName', obj.lastName);
        body.set('phoneNumber', obj.phoneNumber);
        body.set('counrty', obj.country);
        body.set('timeZone', obj.timeZone);
        body.set('image', obj.image);
        debugger;
        console.log("control in the save Student Second StepData service");
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].serverUrl + 'tutor/setup-profile-first', body.toString(), { headers: this.getHeaderOfApplication() })
            .map(function (res) {
            debugger;
            return res.json();
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].throw(error.json() || 'Server error'); });
    };
    //get teacher speaking languages
    TeacherService.prototype.getTeacherLanguages = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].serverUrl + 'users/country-language', { headers: this.getHeaderOfApplicationWithAuthorization() })
            .map(function (res) {
            return res.json();
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].throw(error.json() || 'Server error'); });
    };
    //get teacher intrest
    TeacherService.prototype.getTeacherIntrest = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].serverUrl + 'tutor/tutor-interests', { headers: this.getHeaderOfApplicationWithAuthorization() })
            .map(function (res) {
            return res.json();
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].throw(error.json() || 'Server error'); });
    };
    //save teacher intrest of language
    TeacherService.prototype.saveTeacherSecondStepData = function (obj) {
        debugger;
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        body.set('parantInterest', obj.parantInterest);
        body.set('interests', obj.intrest);
        body.set('speakLanguage', obj.languageYouSpeak);
        body.set('teachLanguage', obj.languageYouTeach);
        console.log("control in the save teacher Second StepData service");
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].serverUrl + 'tutor/tutor-save-interests', body.toString(), { headers: this.getHeaderOfApplication() })
            .map(function (res) {
            debugger;
            return res.json();
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].throw(error.json() || 'Server error'); });
    };
    TeacherService.prototype.saveTeacherEducationDetails = function (exp, docs) {
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        body.set('experienceData', JSON.stringify(exp));
        body.set('docs', docs);
        console.log("Control in thesaveTeacherEducationDetails for user");
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].serverUrl + "tutor/setup-education", body.toString(), { headers: this.getHeaderOfApplication() })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].throw(error.json() || 'Server error'); });
    };
    TeacherService.prototype.saveTeacherCertificationDetails = function (exp, docs) {
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        body.set('certificationData', JSON.stringify(exp));
        body.set('docs', docs);
        console.log("Control in saveTeacherCertificationDetails for user");
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].serverUrl + "tutor/setup-certification", body.toString(), { headers: this.getHeaderOfApplication() })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].throw(error.json() || 'Server error'); });
    };
    TeacherService.prototype.saveTeacherworkExperianceData = function (exp) {
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        body.set('workExperienceData', JSON.stringify(exp));
        console.log("Control in saveTeacherCertificationDetails for user");
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].serverUrl + "tutor/work-experience", body.toString(), { headers: this.getHeaderOfApplication() })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].throw(error.json() || 'Server error'); });
    };
    //save teacher introduction
    TeacherService.prototype.saveTeacherIntroduction = function (obj) {
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        body.set('videoLink', obj.videoLink);
        body.set('videoUrlLink', obj.videoUrlLink);
        body.set('aboutMe', obj.aboutMe);
        debugger;
        console.log("control in the save Student Second StepData service");
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].serverUrl + 'tutor/setup-introduction', body.toString(), { headers: this.getHeaderOfApplication() })
            .map(function (res) {
            debugger;
            return res.json();
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].throw(error.json() || 'Server error'); });
    };
    TeacherService.prototype.saveTeacherAvailableTime = function (availableTime) {
        debugger;
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        body.set('availableTime', JSON.stringify(availableTime));
        console.log("Control in saveTeacherCertificationDetails for user");
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].serverUrl + "tutor/set-available-time", body.toString(), { headers: this.getHeaderOfApplication() })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].throw(error.json() || 'Server error'); });
    };
    TeacherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], TeacherService);
    return TeacherService;
}());



/***/ })

});
//# sourceMappingURL=teacher.module.chunk.js.map