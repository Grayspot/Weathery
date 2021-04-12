(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+GGL":
/*!*****************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.ts ***!
  \*****************************************************************/
/*! exports provided: NucleoiconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleoiconsComponent", function() { return NucleoiconsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nucleoicons_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nucleoicons.component.html */ "vG3S");
/* harmony import */ var _nucleoicons_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nucleoicons.component.scss */ "IBmT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var NucleoiconsComponent = /** @class */ (function () {
    function NucleoiconsComponent(element) {
        this.element = element;
    }
    NucleoiconsComponent.prototype.ngOnInit = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.remove('navbar-transparent');
    };
    NucleoiconsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
    };
    NucleoiconsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
    ]; };
    NucleoiconsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-nucleoicons',
            template: _raw_loader_nucleoicons_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_nucleoicons_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])
    ], NucleoiconsComponent);
    return NucleoiconsComponent;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! Z:\GIT REPOS\Weathery\src\main.ts */"zUnb");


/***/ }),

/***/ "0Inq":
/*!*****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "1E4i":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification/notification.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let alert of alerts\">\r\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"false\" >\r\n        <div class=\"container\">\r\n            <div class=\"alert-wrapper\">\r\n                <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert(alert)\">\r\n                  <span aria-hidden=\"true\">\r\n                      <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n                  </span>\r\n                </button>\r\n                <div class=\"message\">\r\n                    <ng-container *ngIf=\"alert.icon\">\r\n                      <div class=\"alert-icon\">\r\n                          <i class=\"now-ui-icons {{alert.icon}}\"></i>\r\n                      </div>\r\n                    </ng-container>\r\n                    <strong>{{alert.strong}} </strong>{{ alert.message }}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ngb-alert>\r\n</div>\r\n");

/***/ }),

/***/ "1RpN":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/basicelements/basicelements.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section section-basic\">\r\n    <div class=\"container\">\r\n      <h3 class=\"title\">Basic Elements</h3>\r\n      <div id=\"buttons\">\r\n          <h4>Buttons</h4>\r\n          <p class=\"category\">Pick your style</p>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-10\">\r\n                  <button class=\"btn btn-primary\" type=\"button\">Default</button>\r\n                  <button class=\"btn btn-primary btn-round\" type=\"button\">Round</button>\r\n                  <button class=\"btn btn-primary btn-round\" type=\"button\">\r\n                      <i class=\"now-ui-icons ui-2_favourite-28\"></i> With Icon\r\n                  </button>\r\n                  <button class=\"btn btn-primary btn-icon btn-round\" type=\"button\">\r\n                      <i class=\"now-ui-icons ui-2_favourite-28\"></i>\r\n                  </button>\r\n                  <button class=\"btn btn-primary btn-simple btn-round\" type=\"button\">Simple</button>\r\n              </div>\r\n          </div>\r\n          <p class=\"category\">Pick your size</p>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-10\">\r\n                  <button class=\"btn btn-primary btn-sm\">Small</button>\r\n                  <button class=\"btn btn-primary\">Regular</button>\r\n                  <button class=\"btn btn-primary btn-lg\">Large</button>\r\n              </div>\r\n          </div>\r\n          <p class=\"category\">Pick your color</p>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-10\">\r\n                  <button class=\"btn\">Default</button>\r\n                  <button class=\"btn btn-primary\">Primary</button>\r\n                  <button class=\"btn btn-info\">Info</button>\r\n                  <button class=\"btn btn-success\">Success</button>\r\n                  <button class=\"btn btn-warning\">Warning</button>\r\n                  <button class=\"btn btn-danger\">Danger</button>\r\n                  <button class=\"btn btn-neutral\">Neutral</button>\r\n              </div>\r\n          </div>\r\n          <h4>Links</h4>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-8\">\r\n                  <button class=\"btn btn-link\">Default</button>\r\n                  <button class=\"btn btn-link btn-primary \">Primary</button>\r\n                  <button class=\"btn btn-link btn-info\">Info</button>\r\n                  <button class=\"btn btn-link btn-success\">Success</button>\r\n                  <button class=\"btn btn-link btn-warning\">Warning</button>\r\n                  <button class=\"btn btn-link btn-danger\">Danger</button>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div id=\"inputs\">\r\n          <h4>Inputs</h4>\r\n          <p class=\"category\">Form Controls</p>\r\n          <div class=\"row\">\r\n              <div class=\"col-sm-6 col-lg-3\">\r\n                  <div class=\"form-group\">\r\n                      <input type=\"text\" value=\"\" placeholder=\"Regular\" class=\"form-control\" />\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-sm-6 col-lg-3\">\r\n                  <div class=\"form-group has-success\">\r\n                      <input type=\"text\" value=\"Success\" class=\"form-control form-control-success\" />\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-sm-6 col-lg-3\">\r\n                  <div class=\"form-group has-danger\">\r\n                      <input type=\"email\" value=\"Error Input\" class=\"form-control form-control-danger\" />\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-sm-6 col-lg-3\">\r\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                    <div class=\"input-group-prepend\" >\r\n                      <span class=\"input-group-text\">\r\n                          <i class=\"fa fa-user-circle\"></i>\r\n                      </span>\r\n                    </div>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Left Font Awesome Icon\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-sm-6 col-lg-3\">\r\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Right Nucleo Icon\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                      <div class=\"input-group-append\">\r\n                        <span class=\"input-group-text\">\r\n                            <i class=\"now-ui-icons users_single-02\"></i>\r\n                        </span>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"row\" id=\"checkRadios\">\r\n        <div class=\"col-sm-6 col-lg-3\">\r\n            <p class=\"category\">Checkboxes</p>\r\n            <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\">\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Unchecked\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" checked>\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Checked\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check disabled\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" disabled>\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Disabled Unchecked\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check disabled\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" checked disabled>\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Disabled Checked\r\n                </label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-lg-3\">\r\n            <p class=\"category\">Radios</p>\r\n            <div class=\"form-check form-check-radio\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\">\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Radio is off\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-radio\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option2\" checked>\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Radio is on\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-radio disabled\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios2\" value=\"option3\" disabled>\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Disabled radio is off\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-radio disabled\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios2\" value=\"option4\" disabled checked>\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Disabled radio is on\r\n                </label>\r\n            </div>\r\n        </div>\r\n          <div class=\"col-sm-6 col-lg-3\">\r\n              <p class=\"category\">Toggle Buttons</p>\r\n              <bSwitch\r\n                  [(ngModel)]=\"state\">\r\n              </bSwitch>\r\n              <bSwitch> Toggle is off\r\n              </bSwitch>\r\n          </div>\r\n          <div class=\"col-sm-6 col-lg-3\">\r\n              <p class=\"category\">Sliders</p>\r\n              <nouislider class=\"slider\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"simpleSlider\" [tooltips]=\"true\"></nouislider>\r\n              <br>\r\n              <nouislider class=\"slider slider-primary\" [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"doubleSlider\" [tooltips]=\"true\"></nouislider>\r\n          </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "4R/m":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/typography/typography.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\">\r\n    <div class=\"container\">\r\n        <h3 class=\"title\">Typography</h3>\r\n        <div id=\"typography\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"typography-line\">\r\n                        <h1>\r\n                            <span>Header 1</span>The Life of Now UI Kit </h1>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <h2>\r\n                            <span>Header 2</span>The Life of Now UI Kit</h2>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <h3>\r\n                            <span>Header 3</span>The Life of Now UI Kit</h3>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <h4>\r\n                            <span>Header 4</span>The Life of Now UI Kit</h4>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <h5>\r\n                            <span>Header 5</span>The Life of Now UI Kit</h5>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <h6>\r\n                            <span>Header 6</span>The Life of Now UI Kit</h6>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <p>\r\n                            <span>Paragraph</span>\r\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <span>Quote</span>\r\n                        <blockquote>\r\n                            <p class=\"blockquote blockquote-primary\">\r\n                                \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\r\n                                <br>\r\n                                <br>\r\n                                <small>\r\n                                    - Noaa\r\n                                </small>\r\n                            </p>\r\n                        </blockquote>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <span>Muted Text</span>\r\n                        <p class=\"text-muted\">\r\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <span>Primary Text</span>\r\n                        <p class=\"text-primary\">\r\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <span>Info Text</span>\r\n                        <p class=\"text-info\">\r\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <span>Success Text</span>\r\n                        <p class=\"text-success\">\r\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <span>Warning Text</span>\r\n                        <p class=\"text-warning\">\r\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <span>Danger Text</span>\r\n                        <p class=\"text-danger\">\r\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <h2>\r\n                            <span>Small Tag</span>\r\n                            Header with small subtitle\r\n                            <br>\r\n                            <small>Use \"small\" tag for the headers</small>\r\n                        </h2>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"space-50\"></div>\r\n        <div id=\"images\">\r\n            <h4>Images</h4>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-2\">\r\n                    <p class=\"category\">Image</p>\r\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Rounded Image\" class=\"rounded\">\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                    <p class=\"category\">Circle Image</p>\r\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Circle Image\" class=\"rounded-circle\">\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                    <p class=\"category\">Raised</p>\r\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Raised Image\" class=\"rounded img-raised\">\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                    <p class=\"category\">Circle Raised</p>\r\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-raised\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n");

/***/ }),

/***/ "4Wxn":
/*!***********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpY2VsZW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "5QX9":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/login/login.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"page-header\" filter-color=\"orange\">\r\n    <div class=\"page-header-image\" style=\"background-image:url(assets/img/login.jpg)\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"col-md-4 content-center\">\r\n            <div class=\"card card-login card-plain\">\r\n                <form class=\"form\" method=\"\" action=\"\">\r\n                    <div class=\"header header-primary text-center\">\r\n                        <div class=\"logo-container\">\r\n                            <img src=\"assets/img/now-logo.png\" alt=\"\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                      <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\">  <i class=\"now-ui-icons users_circle-08\"></i></span>\r\n                        </div>\r\n                          <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\r\n                      </div>\r\n                      <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\"><i class=\"now-ui-icons text_caps-small\"></i></span>\r\n                        </div>\r\n                          <input type=\"text\" placeholder=\"Last Name...\" class=\"form-control\" (focus)=\"focus1=true\" (blur)=\"focus1=false\"/>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"footer text-center\">\r\n                        <a href=\"#pablo\" class=\"btn btn-primary btn-round btn-lg btn-block\">Get Started</a>\r\n                    </div>\r\n                    <div class=\"pull-left\">\r\n                        <h6>\r\n                            <a href=\"#pablo\" class=\"link\">Create Account</a>\r\n                        </h6>\r\n                    </div>\r\n                    <div class=\"pull-right\">\r\n                        <h6>\r\n                            <a href=\"#pablo\" class=\"link\">Need Help?</a>\r\n                        </h6>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <footer class=\"footer\">\r\n        <div class=\"container\">\r\n            <nav>\r\n                <ul>\r\n                    <li>\r\n                        <a href=\"https://www.creative-tim.com\">\r\n                            Creative Tim\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"https://www.creative-tim.com/about-us\">\r\n                            About Us\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"http://blog.creative-tim.com\">\r\n                            Blog\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\r\n                            MIT License\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"copyright\">\r\n                &copy;\r\n              {{data | date: 'yyyy'}}, Designed by\r\n                <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\r\n                <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\r\n            </div>\r\n        </div>\r\n    </footer>\r\n</div>\r\n");

/***/ }),

/***/ "6nUm":
/*!**********************************************!*\
  !*** ./src/app/weather/weather.component.ts ***!
  \**********************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_weather_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./weather.component.html */ "xFnX");
/* harmony import */ var _weather_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather.component.css */ "Ytgu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var WeatherComponent = /** @class */ (function () {
    function WeatherComponent() {
    }
    WeatherComponent.prototype.ngOnInit = function () {
        this.WeatherTypeM = "Weathery";
        console.log(this.WeatherTypeM = "Weathery");
        this.Visibility = "hidden";
        this.WeatherData = {
            weather: [{}],
            main: {},
            isDay: true
        };
        // console.log(this.WeatherData);
        this.getWeatherType();
    };
    WeatherComponent.prototype.getWeatherData = function (city) {
        var _this = this;
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=ff1bc4683fc7325e9c57e586c20cc03e')
            .then(function (response) { return response.json(); })
            .then(function (data) { _this.setWeatherData(data); });
        // tslint:disable-next-line:max-line-length
        // let data = JSON.parse('{"coord":{"lon":72.85,"lat":19.01},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":297.15,"feels_like":297.4,"temp_min":297.15,"temp_max":297.15,"pressure":1013,"humidity":69},"visibility":3500,"wind":{"speed":3.6,"deg":300},"clouds":{"all":20},"dt":1580141589,"sys":{"type":1,"id":9052,"country":"IN","sunrise":1580089441,"sunset":1580129884},"timezone":19800,"id":1275339,"name":"Mumbai","cod":200}');
        // this.setWeatherData(data);
    };
    WeatherComponent.prototype.setWeatherData = function (data) {
        this.WeatherData = data;
        var sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
        this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
        var currentDate = new Date();
        this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
        this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
        this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
        this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
        this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
        this.WeatherData.weatherID = (this.WeatherData.weather[0].id);
        this.WeatherData.weatherDescription = (this.WeatherData.weather[0].description);
        this.Visibility = "visible";
        this.getWeatherType();
    };
    WeatherComponent.prototype.getWeatherType = function () {
        var id;
        id = parseInt(this.WeatherData.weatherID = (this.WeatherData.weather[0].id));
        if (id > 199 && id < 233) {
            this.WeatherTypeM = "Thunder";
            return "Thunder";
        }
        else if (id > 299 && id < 322) {
            this.WeatherTypeM = "Drizzle";
            if (this.WeatherData.isDay) {
                return "Drizzle";
            }
            else {
                return "DrizzleNight";
            }
        }
        else if (id > 499 && id < 532) {
            this.WeatherTypeM = "Rain";
            if (this.WeatherData.isDay) {
                return "Rain";
            }
            else {
                return "RainNight";
            }
        }
        else if (id > 599 && id < 623) {
            this.WeatherTypeM = "Snow";
            if (this.WeatherData.isDay) {
                return "Snow";
            }
            else {
                return "SnowNight";
            }
        }
        else if (id > 699 && id < 782) {
            this.WeatherTypeM = "Atmosphere";
            if (this.WeatherData.isDay) {
                return "Atmosphere";
            }
            else {
                return "AtmosphereNight";
            }
        }
        else if (id == 800) {
            this.WeatherTypeM = "Clouds Clear Ambience";
            if (this.WeatherData.isDay) {
                return "Clouds";
            }
            else {
                return "CloudsNight";
            }
        }
        else if (id > 799 && id < 805) {
            this.WeatherTypeM = "Clouds Clear Ambience";
            if (this.WeatherData.isDay) {
                return "Clouds";
            }
            else {
                return "CloudsNight";
            }
        }
        else {
            this.WeatherTypeM = "Weathery";
            return "Clear";
        }
    };
    WeatherComponent.ctorParameters = function () { return []; };
    WeatherComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-weather',
            template: _raw_loader_weather_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_weather_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], WeatherComponent);
    return WeatherComponent;
}());



/***/ }),

/***/ "7aL3":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: NgbdModalBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalBasic", function() { return NgbdModalBasic; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal.component.html */ "P6R5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");




var NgbdModalBasic = /** @class */ (function () {
    function NgbdModalBasic(modalService) {
        this.modalService = modalService;
    }
    NgbdModalBasic.prototype.open = function (content, type, modalDimension) {
        var _this = this;
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini modal-primary', size: 'sm' }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else if (modalDimension == undefined && type === 'Login') {
            this.modalService.open(content, { windowClass: 'modal-login modal-primary' }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else {
            this.modalService.open(content).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
    };
    NgbdModalBasic.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NgbdModalBasic.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
    ]; };
    NgbdModalBasic = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ngbd-modal-component',
            template: _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], NgbdModalBasic);
    return NgbdModalBasic;
}());



/***/ }),

/***/ "7pPp":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section section-navbars\">\r\n    <div class=\"container\" id=\"menu-dropdown\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <h4>Menu</h4>\r\n                <nav class=\"navbar navbar-expand-lg bg-primary\">\r\n                    <div class=\"container\">\r\n                        <a class=\"navbar-brand\" href=\"#\">Menu</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                        <div class=\"collapse navbar-collapse\" id=\"example-navbar\" data-nav-image=\"assets/img/blurred-image-1.jpg\">\r\n                            <ul class=\"navbar-nav\">\r\n                                <li class=\"nav-item active\">\r\n                                    <a class=\"nav-link\" href=\"#\">\r\n                                        <p>Link</p>\r\n                                    </a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" href=\"#\">\r\n                                        <p>Link</p>\r\n                                    </a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                  <div ngbDropdown class=\"dropdown\">\r\n                                      <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\r\n                                        <p>\r\n                                            Dropdown\r\n                                        </p>\r\n                                      </a>\r\n                                      <div ngbDropdownMenu class=\"dropdown-menu\">\r\n                                        <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                                      </div>\r\n                                  </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </nav>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <h4>Menu with Icons</h4>\r\n                <nav class=\"navbar navbar-expand-lg bg-info\">\r\n                    <div class=\"container\">\r\n                        <a class=\"navbar-brand\" href=\"#\">Icons</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-icons\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                        <div class=\"collapse navbar-collapse\" id=\"example-navbar-icons\">\r\n                            <ul class=\"navbar-nav ml-auto\">\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" href=\"#pablo\"><i class=\"now-ui-icons ui-1_send\" aria-hidden=\"true\"></i></a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" href=\"#pablo\"><i class=\"now-ui-icons users_single-02\" aria-hidden=\"true\"></i></a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <div ngbDropdown class=\"dropdown\">\r\n                                        <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\r\n                                            <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\r\n                                        </a>\r\n                                        <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\">\r\n                                            <div class=\"dropdown-header\">Dropdown header</div>\r\n                                            <a class=\"dropdown-item\">Action</a>\r\n                                            <a class=\"dropdown-item\">Another action</a>\r\n                                            <a class=\"dropdown-item\">Something else here</a>\r\n                                            <div class=\"dropdown-divider\"></div>\r\n                                            <a class=\"dropdown-item\">Separated link</a>\r\n                                            <div class=\"dropdown-divider\"></div>\r\n                                            <a class=\"dropdown-item\">Another separated link</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n        <h4>Navigation</h4>\r\n    </div>\r\n    <div id=\"navbar\">\r\n        <div class=\"navigation-example\" style=\"background-image:url('assets/img/bg7.jpg')\">\r\n            <!-- Navbar Primary  -->\r\n            <nav class=\"navbar navbar-expand-lg bg-primary\">\r\n                <div class=\"container\">\r\n                    <div class=\"navbar-translate\">\r\n                        <a class=\"navbar-brand\" href=\"#pablo\">Primary color</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-primary\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-primary\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item active\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"now-ui-icons objects_globe\"></i>\r\n                                    <p>Discover</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"now-ui-icons users_circle-08\"></i>\r\n                                    <p>Profile</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\r\n                                    <p>Settings</p>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <!-- End Navbar Primary -->\r\n            <!-- Navbar Info -->\r\n            <nav class=\"navbar navbar-expand-lg bg-info\">\r\n                <div class=\"container\">\r\n                    <div class=\"navbar-translate\">\r\n                        <a class=\"navbar-brand\" href=\"#pablo\">Info Color</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-info\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-info\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item active\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <p>Discover</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <p>Profile</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <p>Settings</p>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <!-- End Navbar Info -->\r\n            <!-- Navbar Success -->\r\n            <nav class=\"navbar navbar-expand-lg bg-success\">\r\n                <div class=\"container\">\r\n                    <div class=\"navbar-translate\">\r\n                        <a class=\"navbar-brand\" href=\"#\">Success Color</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-success\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-success\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item active\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"now-ui-icons objects_globe\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"now-ui-icons users_circle-08\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <!-- End Navbar Success -->\r\n            <!-- Navbar Warning -->\r\n            <nav class=\"navbar navbar-expand-lg bg-warning\">\r\n                <div class=\"container\">\r\n                    <div class=\"navbar-translate\">\r\n                        <a class=\"navbar-brand\" href=\"#pablo\">Warning Color</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-warning\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-warning\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-facebook-square\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-twitter\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-google-plus\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-instagram\"></i>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <!-- End Navbar Warning -->\r\n            <!-- Navbar Danger -->\r\n            <nav class=\"navbar navbar-expand-lg bg-danger\">\r\n                <div class=\"container\">\r\n                    <div class=\"navbar-translate\">\r\n                        <a class=\"navbar-brand\" href=\"#pablo\">Danger Color</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-danger\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-danger\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-facebook-square\"></i>\r\n                                    <p>Share</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-twitter\"></i>\r\n                                    <p>Tweet</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-pinterest\"></i>\r\n                                    <p>Pin</p>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <!-- End Navbar Danger -->\r\n            <!-- Navbar Transparent -->\r\n            <nav class=\"navbar navbar-expand-lg navbar-transparent\">\r\n                <div class=\"container\">\r\n                    <div class=\"navbar-translate\">\r\n                        <a class=\"navbar-brand\" href=\"#pablo\">Transparent</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-transparent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-transparent\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-facebook-square\"></i>\r\n                                    <p>Facebook</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-twitter\"></i>\r\n                                    <p>Twitter</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-instagram\"></i>\r\n                                    <p>Instagram</p>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <!-- End Navbar Transparent-->\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "93si":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_components_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./components.component.html */ "NPo9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rellax */ "HbP6");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_4__);





var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent(renderer, config) {
        this.renderer = renderer;
        this.data = new Date();
        this.page = 4;
        this.page1 = 5;
        this.page2 = 3;
        this.isCollapsed = true;
        this.isCollapsed1 = true;
        this.isCollapsed2 = true;
        this.state_icon_primary = true;
        config.closeOthers = true;
        config.type = 'info';
    }
    ComponentsComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    ComponentsComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    ComponentsComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_4__('.rellax-header');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
    };
    ComponentsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    };
    ComponentsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAccordionConfig"] }
    ]; };
    ComponentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-components',
            template: _raw_loader_components_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAccordionConfig"]])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "9GRG":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/landing/landing.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n    <div class=\"page-header page-header-small\">\r\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/bg6.jpg');\">\r\n        </div>\r\n        <div class=\"container\">\r\n            <div class=\"content-center\">\r\n                <h1 class=\"title\">This is our great company.</h1>\r\n                <div class=\"text-center\">\r\n                  <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\r\n                    <i class=\"fab fa-facebook-square\"></i>\r\n                  </a>\r\n                  <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\r\n                    <i class=\"fab fa-twitter\"></i>\r\n                  </a>\r\n                  <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\r\n                    <i class=\"fab fa-google-plus\"></i>\r\n                  </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"section section-about-us\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\r\n                    <h2 class=\"title\">Who we are?</h2>\r\n                    <h5 class=\"description\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice extent in the Pacific and a late drop in ice extent in the Barents Sea.</h5>\r\n                </div>\r\n            </div>\r\n            <div class=\"separator separator-primary\"></div>\r\n            <div class=\"section-story-overview\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"image-container image-left\" style=\"background-image: url('assets/img/login.jpg')\">\r\n                            <!-- First image on the left side -->\r\n                            <p class=\"blockquote blockquote-primary\">\"Over the span of the satellite record, Arctic sea ice has been declining significantly, while sea ice in the Antarctichas increased very slightly\"\r\n                                <br>\r\n                                <br>\r\n                                <small>-NOAA</small>\r\n                            </p>\r\n                        </div>\r\n                        <!-- Second image on the left side of the article -->\r\n                        <div class=\"image-container\" style=\"background-image: url('assets/img/bg3.jpg')\"></div>\r\n                    </div>\r\n                    <div class=\"col-md-5\">\r\n                        <!-- First image on the right side, above the article -->\r\n                        <div class=\"image-container image-right\" style=\"background-image: url('assets/img/bg1.jpg')\"></div>\r\n                        <h3>So what does the new record for the lowest level of winter ice actually mean</h3>\r\n                        <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.\r\n                        </p>\r\n                        <p>\r\n                            For a start, it does not automatically follow that a record amount of ice will melt this summer. More important for determining the size of the annual thaw is the state of the weather as the midnight sun approaches and temperatures rise. But over the more than 30 years of satellite records, scientists have observed a clear pattern of decline, decade-by-decade.\r\n                        </p>\r\n                        <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"section section-team text-center\">\r\n        <div class=\"container\">\r\n            <h2 class=\"title\">Here is our team</h2>\r\n            <div class=\"team\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"team-player\">\r\n                            <img src=\"assets/img/avatar.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\r\n                            <h4 class=\"title\">Romina Hadid</h4>\r\n                            <p class=\"category text-primary\">Model</p>\r\n                            <p class=\"description\">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some\r\n                                <a href=\"#\">links</a> for people to be able to follow them outside the site.</p>\r\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-twitter\"></i></a>\r\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-instagram\"></i></a>\r\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-facebook-square\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"team-player\">\r\n                            <img src=\"assets/img/ryan.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\r\n                            <h4 class=\"title\">Ryan Tompson</h4>\r\n                            <p class=\"category text-primary\">Designer</p>\r\n                            <p class=\"description\">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some\r\n                                <a href=\"#\">links</a> for people to be able to follow them outside the site.</p>\r\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-twitter\"></i></a>\r\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-linkedin\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"team-player\">\r\n                            <img src=\"assets/img/eva.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\r\n                            <h4 class=\"title\">Eva Jenner</h4>\r\n                            <p class=\"category text-primary\">Fashion</p>\r\n                            <p class=\"description\">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some\r\n                                <a href=\"#\">links</a> for people to be able to follow them outside the site.</p>\r\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-google-plus\"></i></a>\r\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-youtube\"></i></a>\r\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-twitter\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"section section-contact-us text-center\">\r\n        <div class=\"container\">\r\n            <h2 class=\"title\">Want to work with us?</h2>\r\n            <p class=\"description\">Your project is very important to us.</p>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 text-center col-md-8 ml-auto mr-auto\">\r\n                  <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                    <div class=\"input-group-prepend\" >\r\n                      <span class=\"input-group-text\">\r\n                          <i class=\"now-ui-icons users_circle-08\"></i>\r\n                      </span>\r\n                    </div>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Left Font Awesome Icon\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                  </div>\r\n                  <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                    <div class=\"input-group-prepend\" >\r\n                      <span class=\"input-group-text\">\r\n                            <i class=\"now-ui-icons ui-1_email-85\"></i>\r\n                      </span>\r\n                    </div>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Left Font Awesome Icon\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                  </div>\r\n                    <div class=\"textarea-container\">\r\n                        <textarea class=\"form-control\" name=\"name\" rows=\"4\" cols=\"80\" placeholder=\"Type a message...\"></textarea>\r\n                    </div>\r\n                    <div class=\"send-button\">\r\n                        <a href=\"#pablo\" class=\"btn btn-primary btn-round btn-block btn-lg\">Send Message</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <footer class=\"footer footer-default\">\r\n        <div class=\"container\">\r\n            <nav>\r\n                <ul>\r\n                    <li>\r\n                        <a href=\"https://www.creative-tim.com\">\r\n                            Creative Tim\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"https://www.creative-tim.com/about-us\">\r\n                            About Us\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"http://blog.creative-tim.com\">\r\n                            Blog\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\r\n                            MIT License\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"copyright\">\r\n                &copy;\r\n                {{data | date: 'yyyy'}}, Designed by\r\n                <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\r\n                <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\r\n            </div>\r\n        </div>\r\n    </footer>\r\n</div>\r\n");

/***/ }),

/***/ "9ldr":
/*!*******************************************************************!*\
  !*** ./src/app/components/notification/notification.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notification_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notification.component.html */ "1E4i");
/* harmony import */ var _notification_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.component.scss */ "oy3u");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            strong: 'Well done!',
            message: 'You successfully read this important alert message.',
            icon: 'ui-2_like'
        }, {
            id: 2,
            strong: 'Heads up!',
            type: 'info',
            message: 'This is an info alert',
            icon: 'travel_info'
        }, {
            id: 3,
            type: 'warning',
            strong: 'Warning!',
            message: 'This is a warning alert',
            icon: 'ui-1_bell-53'
        }, {
            id: 4,
            type: 'danger',
            strong: 'Oh snap!',
            message: 'This is a danger alert',
            icon: 'objects_support-17'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    NotificationComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    NotificationComponent.ctorParameters = function () { return []; };
    NotificationComponent.propDecorators = {
        alerts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    NotificationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-notification',
            template: _raw_loader_notification_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_notification_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "ARBA":
/*!*********************************************************!*\
  !*** ./src/app/examples/landing/landing.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5kaW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "AXTl":
/*!*******************************************************!*\
  !*** ./src/app/examples/landing/landing.component.ts ***!
  \*******************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./landing.component.html */ "9GRG");
/* harmony import */ var _landing_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing.component.scss */ "ARBA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rellax */ "HbP6");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_4__);





var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
        this.data = new Date();
    }
    LandingComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_4__('.rellax-header');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    LandingComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    LandingComponent.ctorParameters = function () { return []; };
    LandingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-landing',
            template: _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_landing_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "AytR":
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

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "zRkE");
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component.scss */ "cruu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
    ]; };
    NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-navbar',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "IBmT":
/*!*******************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nucleo-icons-style,\n.nucleo-icons-style,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* .nucleo-icons-style5 display-role reset for older browsers */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nmain {\n  display: block;\n}\n\n.nucleo-icons-style {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* --------------------------------\n\nNucleo Outline Web Font - nucleoapp.com/\nLicense - nucleoapp.com/license/\nCreated using IcoMoon - icomoon.io\n\n-------------------------------- */\n\n/* --------------------------------\n\nPrimary style\n\n-------------------------------- */\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n}\n\n.nucleo-icons-style {\n  font-size: 62.5%;\n}\n\n.nucleo-icons-style {\n  font-size: 1.6rem;\n  font-family: sans-serif;\n  color: #333333;\n  background: #efefef;\n}\n\na {\n  color: #766acf;\n  text-decoration: none;\n}\n\n/* --------------------------------\n\nMain components\n\n-------------------------------- */\n\nheader {\n  text-align: center;\n  padding: 120px 0 0;\n}\n\nheader h1 {\n  font-size: 1.2rem;\n}\n\nheader p {\n  font-size: 0.9rem;\n  margin-top: 0.6em;\n}\n\nheader a:hover {\n  text-decoration: underline;\n}\n\nsection {\n  width: 90%;\n  max-width: 1200px;\n  margin: 50px auto;\n}\n\nsection h2 {\n  border-bottom: 1px solid #e2e2e2;\n  padding: 0 0 1em 0.2em;\n  margin-bottom: 1em;\n  font-size: 1rem;\n}\n\nul::after {\n  clear: both;\n  content: \"\";\n  display: table;\n}\n\nul li {\n  width: 25%;\n  float: left;\n  padding: 16px 0;\n  text-align: center;\n  border-radius: 0.25em;\n  transition: background 0.2s;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  overflow: hidden;\n}\n\nul li:hover {\n  background: #dbdbdb;\n}\n\nul p,\nul em,\nul input {\n  display: inline-block;\n  font-size: 0.7rem;\n  color: #999999;\n  -webkit-user-select: auto;\n  -moz-user-select: auto;\n  -ms-user-select: auto;\n  user-select: auto;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n}\n\nul p {\n  padding: 10px;\n  margin-top: 10px;\n}\n\nul p::-moz-selection, ul em::-moz-selection {\n  background: #766acf;\n  color: #efefef;\n}\n\nul p::selection,\nul em::selection {\n  background: #766acf;\n  color: #efefef;\n}\n\nul em {\n  margin-bottom: 8px;\n}\n\nul em::before {\n  content: \"[\";\n}\n\nul em::after {\n  content: \"]\";\n}\n\nul input {\n  text-align: center;\n  background: transparent;\n  border: none;\n  box-shadow: none;\n  outline: none;\n}\n\n@media only screen and (min-width: 768px) {\n  ul li {\n    width: 20%;\n    float: left;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  ul li {\n    width: 12.5%;\n    float: left;\n    padding: 32px 0;\n  }\n}\n\n/* --------------------------------\n\nSmart fixed navigation\n\n-------------------------------- */\n\n#cd-nav ul {\n  /* mobile first */\n  position: fixed;\n  width: 90%;\n  max-width: 400px;\n  max-height: 90%;\n  right: 5%;\n  bottom: 5%;\n  border-radius: 0.25em;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background: white;\n  visibility: hidden;\n  /* remove overflow:hidden if you want to create a drop-down menu - but then remember to fix/eliminate the list items animation */\n  overflow: hidden;\n  overflow-y: auto;\n  z-index: 1;\n  /* Force Hardware Acceleration in WebKit */\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: scale(0);\n  transform-origin: 100% 100%;\n  transition: transform 0.3s, visibility 0s 0.3s;\n}\n\n#cd-nav ul li {\n  /* Force Hardware Acceleration in WebKit */\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  display: block;\n  width: 100%;\n  padding: 0;\n  text-align: left;\n}\n\n#cd-nav ul li:hover {\n  background-color: #FFF;\n}\n\n#cd-nav ul.is-visible {\n  visibility: visible;\n  transform: scale(1);\n  transition: transform 0.3s, visibility 0s 0s;\n}\n\n#cd-nav li a {\n  display: block;\n  padding: 1em;\n  font-size: 1.2rem;\n  border-bottom: 1px solid #eff2f6;\n}\n\n#cd-nav li a:hover {\n  color: #333333;\n}\n\n#cd-nav li:last-child a {\n  border-bottom: none;\n}\n\n.cd-nav-trigger {\n  position: fixed;\n  bottom: 5%;\n  right: 5%;\n  width: 44px;\n  height: 44px;\n  background: white;\n  border-radius: 0.25em;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  /* image replacement */\n  overflow: hidden;\n  text-indent: 100%;\n  white-space: nowrap;\n  z-index: 2;\n}\n\n.cd-nav-trigger span {\n  /* the span element is used to create the menu icon */\n  position: absolute;\n  display: block;\n  width: 20px;\n  height: 2px;\n  background: #333333;\n  top: 50%;\n  margin-top: -1px;\n  left: 50%;\n  margin-left: -10px;\n  transition: background 0.3s;\n}\n\n.cd-nav-trigger span::before,\n.cd-nav-trigger span::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  background: inherit;\n  width: 100%;\n  height: 100%;\n  /* Force Hardware Acceleration in WebKit */\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transition: transform 0.3s, background 0s;\n}\n\n.cd-nav-trigger span::before {\n  top: -6px;\n  transform: rotate(0);\n}\n\n.cd-nav-trigger span::after {\n  bottom: -6px;\n  transform: rotate(0);\n}\n\n.cd-nav-trigger.menu-is-open {\n  box-shadow: none;\n}\n\n.cd-nav-trigger.menu-is-open span {\n  background: rgba(232, 74, 100, 0);\n}\n\n.cd-nav-trigger.menu-is-open span::before,\n.cd-nav-trigger.menu-is-open span::after {\n  background: #333333;\n}\n\n.cd-nav-trigger.menu-is-open span::before {\n  top: 0;\n  transform: rotate(135deg);\n}\n\n.cd-nav-trigger.menu-is-open span::after {\n  bottom: 0;\n  transform: rotate(225deg);\n}\n\n.now-ui-icons {\n  display: inline-block;\n  font: normal normal normal 32px/1 \"Nucleo Outline\";\n  speak: none;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxudWNsZW9pY29ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUZJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUFDSjs7QUFFQSwrREFBQTs7QUFFQTs7Ozs7Ozs7Ozs7O0VBWUksY0FBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtBQUFKOztBQUdBOztFQUVJLGdCQUFBO0FBQUo7O0FBR0E7O0VBRUksWUFBQTtBQUFKOztBQUdBOzs7O0VBSUksV0FBQTtFQUNBLGFBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFLQTs7Ozs7O2tDQUFBOztBQVFBOzs7O2tDQUFBOztBQU1BOzs7RUFHSSxzQkFBQTtBQUpKOztBQU9BO0VBQ0ksZ0JBQUE7QUFKSjs7QUFPQTtFQUNJLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFPQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQUpKOztBQU9BOzs7O2tDQUFBOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQUxKOztBQVFBO0VBQ0ksaUJBQUE7QUFMSjs7QUFRQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFMSjs7QUFRQTtFQUNJLDBCQUFBO0FBTEo7O0FBUUE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUxKOztBQVFBO0VBQ0ksZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUxKOztBQVFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBTEo7O0FBUUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBR0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBUUE7RUFDSSxtQkFBQTtBQUxKOztBQVFBOzs7RUFHSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFMSjs7QUFRQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0FBTEo7O0FBRUE7O0VBRUksbUJBQUE7RUFDQSxjQUFBO0FBTEo7O0FBUUE7RUFDSSxrQkFBQTtBQUxKOztBQVFBO0VBQ0ksWUFBQTtBQUxKOztBQVFBO0VBQ0ksWUFBQTtBQUxKOztBQVFBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFMSjs7QUFRQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUFMTjtBQUNGOztBQVFBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7RUFOTjtBQUNGOztBQVNBOzs7O2tDQUFBOztBQU1BO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnSUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsMENBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0VBS0EsbUJBQUE7RUFLQSwyQkFBQTtFQUdBLDhDQUFBO0FBUko7O0FBV0E7RUFDSSwwQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQVJKOztBQVdBO0VBQ0ksc0JBQUE7QUFSSjs7QUFXQTtFQUNJLG1CQUFBO0VBS0EsbUJBQUE7RUFHQSw0Q0FBQTtBQVJKOztBQVdBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FBUko7O0FBV0E7RUFDSSxjQUFBO0FBUko7O0FBV0E7RUFDSSxtQkFBQTtBQVJKOztBQVdBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFSSjs7QUFXQTtFQUNJLHFEQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUdBLDJCQUFBO0FBUko7O0FBV0E7O0VBRUksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUtBLHdCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtFQUdBLHlDQUFBO0FBUko7O0FBV0E7RUFDSSxTQUFBO0VBS0Esb0JBQUE7QUFSSjs7QUFXQTtFQUNJLFlBQUE7RUFLQSxvQkFBQTtBQVJKOztBQVdBO0VBQ0ksZ0JBQUE7QUFSSjs7QUFXQTtFQUNJLGlDQUFBO0FBUko7O0FBV0E7O0VBRUksbUJBQUE7QUFSSjs7QUFXQTtFQUNJLE1BQUE7RUFLQSx5QkFBQTtBQVJKOztBQVdBO0VBQ0ksU0FBQTtFQUtBLHlCQUFBO0FBUko7O0FBV0E7RUFDSSxxQkFBQTtFQUNBLGtEQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQVJKIiwiZmlsZSI6Im51Y2xlb2ljb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm51Y2xlby1pY29ucy1zdHlsZSxcclxuLm51Y2xlby1pY29ucy1zdHlsZSxcclxuZGl2LFxyXG5zcGFuLFxyXG5hcHBsZXQsXHJcbm9iamVjdCxcclxuaWZyYW1lLFxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2LFxyXG5wLFxyXG5ibG9ja3F1b3RlLFxyXG5wcmUsXHJcbmEsXHJcbmFiYnIsXHJcbmFjcm9ueW0sXHJcbmFkZHJlc3MsXHJcbmJpZyxcclxuY2l0ZSxcclxuY29kZSxcclxuZGVsLFxyXG5kZm4sXHJcbmVtLFxyXG5pbWcsXHJcbmlucyxcclxua2JkLFxyXG5xLFxyXG5zLFxyXG5zYW1wLFxyXG5zbWFsbCxcclxuc3RyaWtlLFxyXG5zdHJvbmcsXHJcbnN1Yixcclxuc3VwLFxyXG50dCxcclxudmFyLFxyXG5iLFxyXG51LFxyXG5pLFxyXG5jZW50ZXIsXHJcbmRsLFxyXG5kdCxcclxuZGQsXHJcbm9sLFxyXG51bCxcclxubGksXHJcbmZpZWxkc2V0LFxyXG5mb3JtLFxyXG5sYWJlbCxcclxubGVnZW5kLFxyXG50YWJsZSxcclxuY2FwdGlvbixcclxudGJvZHksXHJcbnRmb290LFxyXG50aGVhZCxcclxudHIsXHJcbnRoLFxyXG50ZCxcclxuYXJ0aWNsZSxcclxuYXNpZGUsXHJcbmNhbnZhcyxcclxuZGV0YWlscyxcclxuZW1iZWQsXHJcbmZpZ3VyZSxcclxuZmlnY2FwdGlvbixcclxuZm9vdGVyLFxyXG5oZWFkZXIsXHJcbmhncm91cCxcclxubWVudSxcclxubmF2LFxyXG5vdXRwdXQsXHJcbnJ1YnksXHJcbnNlY3Rpb24sXHJcbnN1bW1hcnksXHJcbnRpbWUsXHJcbm1hcmssXHJcbmF1ZGlvLFxyXG52aWRlbyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgZm9udDogaW5oZXJpdDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufVxyXG5cclxuLyogLm51Y2xlby1pY29ucy1zdHlsZTUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xyXG5cclxuYXJ0aWNsZSxcclxuYXNpZGUsXHJcbmRldGFpbHMsXHJcbmZpZ2NhcHRpb24sXHJcbmZpZ3VyZSxcclxuZm9vdGVyLFxyXG5oZWFkZXIsXHJcbmhncm91cCxcclxubWVudSxcclxubmF2LFxyXG5zZWN0aW9uLFxyXG5tYWluIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubnVjbGVvLWljb25zLXN0eWxlIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG5vbCxcclxudWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuYmxvY2txdW90ZSxcclxucSB7XHJcbiAgICBxdW90ZXM6IG5vbmU7XHJcbn1cclxuXHJcbmJsb2NrcXVvdGU6YmVmb3JlLFxyXG5ibG9ja3F1b3RlOmFmdGVyLFxyXG5xOmJlZm9yZSxcclxucTphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGNvbnRlbnQ6IG5vbmU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxufVxyXG5cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuTnVjbGVvIE91dGxpbmUgV2ViIEZvbnQgLSBudWNsZW9hcHAuY29tL1xyXG5MaWNlbnNlIC0gbnVjbGVvYXBwLmNvbS9saWNlbnNlL1xyXG5DcmVhdGVkIHVzaW5nIEljb01vb24gLSBpY29tb29uLmlvXHJcblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblByaW1hcnkgc3R5bGVcclxuXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4qLFxyXG4qOjphZnRlcixcclxuKjo6YmVmb3JlIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5udWNsZW8taWNvbnMtc3R5bGUge1xyXG4gICAgZm9udC1zaXplOiA2Mi41JTtcclxufVxyXG5cclxuLm51Y2xlby1pY29ucy1zdHlsZSB7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiAjNzY2YWNmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuTWFpbiBjb21wb25lbnRzXHJcblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEyMHB4IDAgMDtcclxufVxyXG5cclxuaGVhZGVyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG5oZWFkZXIgcCB7XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogLjZlbTtcclxufVxyXG5cclxuaGVhZGVyIGE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbn1cclxuXHJcbnNlY3Rpb24gaDIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmUyZTI7XHJcbiAgICBwYWRkaW5nOiAwIDAgMWVtIC4yZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbnVsOjphZnRlciB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxudWwgbGkge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTZweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1ZW07XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbnVsIGxpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNkYmRiZGI7XHJcbn1cclxuXHJcbnVsIHAsXHJcbnVsIGVtLFxyXG51bCBpbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogYXV0bztcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IGF1dG87XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IGF1dG87XHJcbiAgICB1c2VyLXNlbGVjdDogYXV0bztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxudWwgcCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxudWwgcDo6c2VsZWN0aW9uLFxyXG51bCBlbTo6c2VsZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6ICM3NjZhY2Y7XHJcbiAgICBjb2xvcjogI2VmZWZlZjtcclxufVxyXG5cclxudWwgZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG51bCBlbTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICdbJztcclxufVxyXG5cclxudWwgZW06OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICddJztcclxufVxyXG5cclxudWwgaW5wdXQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgdWwgbGkge1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICB1bCBsaSB7XHJcbiAgICAgICAgd2lkdGg6IDEyLjUlO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDMycHggMDtcclxuICAgIH1cclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblNtYXJ0IGZpeGVkIG5hdmlnYXRpb25cclxuXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4jY2QtbmF2IHVsIHtcclxuICAgIC8qIG1vYmlsZSBmaXJzdCAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XHJcbiAgICByaWdodDogNSU7XHJcbiAgICBib3R0b206IDUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAvKiByZW1vdmUgb3ZlcmZsb3c6aGlkZGVuIGlmIHlvdSB3YW50IHRvIGNyZWF0ZSBhIGRyb3AtZG93biBtZW51IC0gYnV0IHRoZW4gcmVtZW1iZXIgdG8gZml4L2VsaW1pbmF0ZSB0aGUgbGlzdCBpdGVtcyBhbmltYXRpb24gKi9cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIC8qIEZvcmNlIEhhcmR3YXJlIEFjY2VsZXJhdGlvbiBpbiBXZWJLaXQgKi9cclxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XHJcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xyXG4gICAgLW8tdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzLCB2aXNpYmlsaXR5IDBzIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMC4zcztcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCB2aXNpYmlsaXR5IDBzIDAuM3M7XHJcbn1cclxuXHJcbiNjZC1uYXYgdWwgbGkge1xyXG4gICAgLyogRm9yY2UgSGFyZHdhcmUgQWNjZWxlcmF0aW9uIGluIFdlYktpdCAqL1xyXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbiNjZC1uYXYgdWwgbGk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxufVxyXG5cclxuI2NkLW5hdiB1bC5pcy12aXNpYmxlIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzLCB2aXNpYmlsaXR5IDBzIDBzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjNzLCB2aXNpYmlsaXR5IDBzIDBzO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMHM7XHJcbn1cclxuXHJcbiNjZC1uYXYgbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmYyZjY7XHJcbn1cclxuXHJcbiNjZC1uYXYgbGkgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxufVxyXG5cclxuI2NkLW5hdiBsaTpsYXN0LWNoaWxkIGEge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuLmNkLW5hdi10cmlnZ2VyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNSU7XHJcbiAgICByaWdodDogNSU7XHJcbiAgICB3aWR0aDogNDRweDtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgLyogaW1hZ2UgcmVwbGFjZW1lbnQgKi9cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LWluZGVudDogMTAwJTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uY2QtbmF2LXRyaWdnZXIgc3BhbiB7XHJcbiAgICAvKiB0aGUgc3BhbiBlbGVtZW50IGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBtZW51IGljb24gKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzO1xyXG59XHJcblxyXG4uY2QtbmF2LXRyaWdnZXIgc3Bhbjo6YmVmb3JlLFxyXG4uY2QtbmF2LXRyaWdnZXIgc3Bhbjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLyogRm9yY2UgSGFyZHdhcmUgQWNjZWxlcmF0aW9uIGluIFdlYktpdCAqL1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcywgYmFja2dyb3VuZCAwcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC4zcywgYmFja2dyb3VuZCAwcztcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBiYWNrZ3JvdW5kIDBzO1xyXG59XHJcblxyXG4uY2QtbmF2LXRyaWdnZXIgc3Bhbjo6YmVmb3JlIHtcclxuICAgIHRvcDogLTZweDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxufVxyXG5cclxuLmNkLW5hdi10cmlnZ2VyIHNwYW46OmFmdGVyIHtcclxuICAgIGJvdHRvbTogLTZweDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxufVxyXG5cclxuLmNkLW5hdi10cmlnZ2VyLm1lbnUtaXMtb3BlbiB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW4ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzIsIDc0LCAxMDAsIDApO1xyXG59XHJcblxyXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW46OmJlZm9yZSxcclxuLmNkLW5hdi10cmlnZ2VyLm1lbnUtaXMtb3BlbiBzcGFuOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xyXG59XHJcblxyXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW46OmJlZm9yZSB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG59XHJcblxyXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW46OmFmdGVyIHtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XHJcbn1cclxuXHJcbi5ub3ctdWktaWNvbnMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMzJweC8xICdOdWNsZW8gT3V0bGluZSc7XHJcbiAgICBzcGVhazogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "NPo9":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n  <div class=\"page-header clear-filter\" filter-color=\"orange\">\r\n    <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-7\" style=\"background-image: url('assets/img/header.jpg');\">\r\n\r\n    </div>\r\n      <div class=\"container\">\r\n          <div class=\"content-center brand\">\r\n              <img class=\"n-logo\" src=\"assets/img/now-logo.png\" alt=\"\">\r\n              <h1 class=\"h1-seo\">Now UI Kit.</h1>\r\n              <h3>A beautiful Bootstrap 4 UI kit. Yours free.</h3>\r\n          </div>\r\n          <h6 class=\"category category-absolute\">Designed by\r\n              <a href=\"https://invisionapp.com/\" target=\"_blank\">\r\n                  <img src=\"assets/img/invision-white-slim.png\" class=\"invision-logo\" />\r\n              </a>. Coded by\r\n              <a href=\"https://www.creative-tim.com\" target=\"_blank\">\r\n                  <img src=\"assets/img/creative-tim-white-slim2.png\" class=\"creative-tim-logo\" />\r\n              </a>.</h6>\r\n      </div>\r\n  </div>\r\n\r\n  <div class=\"main\">\r\n    <div class=\"section section-images\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"hero-images-container\">\r\n                        <img src=\"assets/img/hero-image-1.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"hero-images-container-1\">\r\n                        <img src=\"assets/img/hero-image-2.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"hero-images-container-2\">\r\n                        <img src=\"assets/img/hero-image-3.png\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n      <app-basicelements></app-basicelements>\r\n      <app-navigation></app-navigation>\r\n      <div class=\"section section-tabs\">\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\r\n                      <p class=\"category\">Tabs with Icons on Card</p>\r\n                      <!-- Nav tabs -->\r\n\r\n                      <div class=\"card\">\r\n                        <div class=\"nav-tabs-navigation\">\r\n                            <div class=\"nav-tabs-wrapper\">\r\n                                <ngb-tabset [justify]=\"'center'\" class=\"text-center\">\r\n                                    <ngb-tab>\r\n                                      <ng-template ngbTabTitle>\r\n                                        <i class=\"now-ui-icons objects_umbrella-13\"></i> Home\r\n                                      </ng-template>\r\n                                        <ng-template ngbTabContent>\r\n                                          <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\r\n                                        </ng-template>\r\n                                    </ngb-tab>\r\n                                    <ngb-tab>\r\n                                      <ng-template ngbTabTitle>\r\n                                        <i class=\"now-ui-icons shopping_cart-simple\"></i> Profile\r\n                                      </ng-template>\r\n                                        <ng-template ngbTabContent>\r\n                                            <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>\r\n                                        </ng-template>\r\n                                    </ngb-tab>\r\n                                    <ngb-tab>\r\n                                      <ng-template ngbTabTitle>\r\n                                          <i class=\"now-ui-icons shopping_shop\"></i> Messages\r\n                                      </ng-template>\r\n                                        <ng-template ngbTabContent>\r\n                                            <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\r\n                                        </ng-template>\r\n                                    </ngb-tab>\r\n                                    <ngb-tab>\r\n                                      <ng-template ngbTabTitle>\r\n                                        <i class=\"now-ui-icons ui-2_settings-90\"></i> Settings\r\n                                      </ng-template>\r\n                                        <ng-template ngbTabContent>\r\n                                          <p>\r\n                                              \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\r\n                                          </p>\r\n                                        </ng-template>\r\n                                    </ngb-tab>\r\n                                </ngb-tabset>\r\n                            </div>\r\n                        </div>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\r\n                      <p class=\"category\">Tabs with Background on Card</p>\r\n                      <!-- Tabs with Background on Card -->\r\n                      <div class=\"card\">\r\n                        <div class=\"nav-tabs-navigation\" data-tabs-color=\"orange\">\r\n                            <div class=\"nav-tabs-wrapper\">\r\n                                <ngb-tabset [justify]=\"'center'\" class=\"text-center\" >\r\n                                    <ngb-tab title=\"Home\">\r\n                                      <ng-template ngbTabContent>\r\n                                        <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\r\n                                      </ng-template>\r\n                                    </ngb-tab>\r\n                                    <ngb-tab title=\"Profile\">\r\n                                      <ng-template ngbTabContent>\r\n                                          <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>\r\n                                      </ng-template>\r\n                                    </ngb-tab>\r\n                                    <ngb-tab title=\"Messages\">\r\n                                      <ng-template ngbTabContent>\r\n                                          <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\r\n                                      </ng-template>\r\n                                    </ngb-tab>\r\n                                    <ngb-tab title=\"Settings\">\r\n                                        <ng-template ngbTabContent>\r\n                                          <p>\r\n                                              \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\r\n                                          </p>\r\n                                        </ng-template>\r\n                                    </ngb-tab>\r\n                                </ngb-tabset>\r\n                            </div>\r\n                        </div>\r\n                      </div>\r\n                      <!-- End Tabs on plain Card -->\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"section section-pagination\">\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                      <h4>Progress Bars</h4>\r\n                      <div class=\"progress-container\">\r\n                        <span class=\"progress-badge\">Default</span>\r\n\r\n                        <ngb-progressbar [value]=\"25\"><span class=\"progress-value\">25%</span></ngb-progressbar><br>\r\n                      </div>\r\n                      <div class=\"progress-container progress-primary\">\r\n                          <span class=\"progress-badge\">Primary</span>\r\n                          <ngb-progressbar [value]=\"60\"><span class=\"progress-value\">60%</span></ngb-progressbar><br>\r\n                      </div>\r\n                      <br />\r\n                      <h4>Navigation Pills</h4>\r\n                      <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-primary justify-content-start tab-space nav-pills-just-icons\">\r\n                          <ngb-tab>\r\n                            <ng-template ngbTabTitle>\r\n                              <i class=\"far fa-gem\"></i>\r\n                            </ng-template>\r\n                              <ng-template ngbTabContent>\r\n                              </ng-template>\r\n                          </ngb-tab>\r\n                          <ngb-tab>\r\n                            <ng-template ngbTabTitle>\r\n                              <i class=\"fa fa-thermometer-full\"></i>\r\n                            </ng-template>\r\n                              <ng-template ngbTabContent>\r\n                              </ng-template>\r\n                          </ngb-tab>\r\n                          <ngb-tab>\r\n                              <ng-template ngbTabTitle>\r\n                                <i class=\"fa fa-suitcase\"></i>\r\n                              </ng-template>\r\n                              <ng-template ngbTabContent>\r\n                              </ng-template>\r\n                          </ngb-tab>\r\n                          <ngb-tab [disabled]=\"true\">\r\n                              <ng-template ngbTabTitle>\r\n                                <i class=\"fa fa-exclamation\"></i>\r\n                              </ng-template>\r\n                              <ng-template ngbTabContent>\r\n                              </ng-template>\r\n                          </ngb-tab>\r\n                      </ngb-tabset>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                      <h4>Pagination</h4>\r\n                      <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page\" aria-label=\"Default pagination\" class=\"pagination-primary\"></ngb-pagination>\r\n                      <br/>\r\n                      <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page2\" aria-label=\"Default pagination\"></ngb-pagination>\r\n                      <br>\r\n                      <h4>Labels</h4>\r\n                      <span class=\"badge badge-default\">Default</span>\r\n                      <span class=\"badge badge-primary\">Primary</span>\r\n                      <span class=\"badge badge-success\">Success</span>\r\n                      <span class=\"badge badge-info\">Info</span>\r\n                      <span class=\"badge badge-warning\">Warning</span>\r\n                      <span class=\"badge badge-danger\">Danger</span>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"section\" id=\"notifications\">\r\n          <div class=\"container\">\r\n            <h4>Notifications</h4>\r\n          </div>\r\n          <app-notification></app-notification>\r\n      </div>\r\n      <app-typography></app-typography>\r\n      <div class=\"section section-javascript\" id=\"javascriptComponents\">\r\n          <div class=\"container\">\r\n              <h3 class=\"title\">Angular Native Components</h3>\r\n              <div class=\"row\" id=\"modals\">\r\n                  <div class=\"col-md-6\">\r\n                      <h4>Modal</h4>\r\n                      <ngbd-modal-component></ngbd-modal-component>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                      <h4>Popovers</h4>\r\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"right\"\r\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on right\" popoverClass=\"popover-primary\">\r\n                          On right\r\n                      </button>\r\n\r\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"top\"\r\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on top\">\r\n                          On top\r\n                      </button>\r\n\r\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"left\"\r\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on left\">\r\n                          On left\r\n                      </button>\r\n\r\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"bottom\"\r\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on bottom\">\r\n                          On bottom\r\n                      </button>\r\n                  </div>\r\n                  <br />\r\n                  <br />\r\n                  <div class=\"col-md-6\">\r\n                      <h4>Datetimepicker</h4>\r\n                      <div class=\"row\">\r\n                          <div class=\"col-md-6\">\r\n                              <div class=\"datepicker-container\">\r\n                                  <div class=\"form-group\">\r\n                                    <input class=\"form-control datetimepicker\" placeholder=\"06/07/2017\"\r\n                                         name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" data-color=\"orange\">\r\n                \t\t\t            </div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <!--                 end collapse -->\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                      <h4>Tooltips</h4>\r\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\r\n                         On right\r\n                     </button>\r\n                     <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\r\n                       On left\r\n                     </button>\r\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\r\n                         On top\r\n                      </button>\r\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\r\n                          On bottom\r\n                      </button>\r\n                      <div class=\"clearfix\"></div>\r\n                      <br>\r\n                      <br>\r\n                  </div>\r\n              <!-- </div>\r\n            </div> -->\r\n          </div>\r\n\r\n          <div class=\"section\" id=\"carousel\">\r\n              <div class=\"container\">\r\n                  <div class=\"title\">\r\n                      <h4>Carousel</h4>\r\n                  </div>\r\n                  <div class=\"row justify-content-center\">\r\n                      <div class=\"col-8\">\r\n                        <ngb-carousel>\r\n                            <ng-template ngbSlide>\r\n                              <img class=\"d-block\" src=\"assets/img/bg1.jpg\" alt=\"First slide\">\r\n                              <div class=\"carousel-caption d-none d-md-block\">\r\n                                  <h5>Nature, United States</h5>\r\n                              </div>\r\n                            </ng-template>\r\n                            <ng-template ngbSlide>\r\n                              <img class=\"d-block\" src=\"assets/img/bg3.jpg\" alt=\"Second slide\">\r\n                              <div class=\"carousel-caption d-none d-md-block\">\r\n                                  <h5>Somewhere Beyond, United States</h5>\r\n                              </div>\r\n                            </ng-template>\r\n                            <ng-template ngbSlide>\r\n                              <img class=\"d-block\" src=\"assets/img/bg4.jpg\" alt=\"Third slide\">\r\n                              <div class=\"carousel-caption d-none d-md-block\">\r\n                                  <h5>Yellowstone National Park, United States</h5>\r\n                              </div>\r\n                            </ng-template>\r\n                        </ngb-carousel>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"section section-nucleo-icons\">\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-lg-6 col-md-12\">\r\n                      <h2 class=\"title\">Nucleo Icons</h2>\r\n                      <h5 class=\"description\">\r\n                          Now UI Kit PRO comes with 100 custom icons made by our friends from NucleoApp. The official package contains over 2.100 thin icons which are looking great in combination with Now UI Kit PRO Make sure you check all of them and use those that you like the most.\r\n                      </h5>\r\n                      <!-- <div class=\"nucleo-container\">\r\n        <img src=\"assets/img/nucleo.svg\" alt=\"\">\r\n      </div> -->\r\n                      <a [routerLink]=\"['/nucleoicons']\" class=\"btn btn-primary btn-round btn-lg\">View Demo Icons</a>\r\n                      <a href=\"https://nucleoapp.com/?ref=1712\" class=\"btn btn-primary btn-simple btn-round btn-lg\" target=\"_blank\">View All Icons</a>\r\n                  </div>\r\n                  <div class=\"col-lg-6 col-md-12\">\r\n                      <div class=\"icons-container\">\r\n                          <i class=\"now-ui-icons ui-1_send\"></i>\r\n                          <i class=\"now-ui-icons ui-2_like\"></i>\r\n                          <i class=\"now-ui-icons transportation_air-baloon\"></i>\r\n                          <i class=\"now-ui-icons text_bold\"></i>\r\n                          <i class=\"now-ui-icons tech_headphones\"></i>\r\n                          <i class=\"now-ui-icons emoticons_satisfied\"></i>\r\n                          <i class=\"now-ui-icons shopping_cart-simple\"></i>\r\n                          <i class=\"now-ui-icons objects_spaceship\"></i>\r\n                          <i class=\"now-ui-icons media-2_note-03\"></i>\r\n                          <i class=\"now-ui-icons ui-2_favourite-28\"></i>\r\n                          <i class=\"now-ui-icons design_palette\"></i>\r\n                          <i class=\"now-ui-icons clothes_tie-bow\"></i>\r\n                          <i class=\"now-ui-icons location_pin\"></i>\r\n                          <i class=\"now-ui-icons objects_key-25\"></i>\r\n                          <i class=\"now-ui-icons travel_istanbul\"></i>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"section\">\r\n          <div class=\"container text-center\">\r\n              <div class=\"row justify-content-md-center\">\r\n                  <div class=\"col-md-12 col-lg-8\">\r\n                      <h2 class=\"title\">Completed with examples</h2>\r\n                      <h5 class=\"description\">The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful Bootstrap 4 ui kit.</h5>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"section section-signup\" style=\"background-image: url('assets/img/bg11.jpg'); background-size: cover; background-position: top center; min-height: 700px;\">\r\n          <div class=\"container login-page\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4 content-center ml-auto mr-auto\">\r\n                  <div class=\"card card-login card-plain\">\r\n                      <form class=\"form\" method=\"\" action=\"\">\r\n                          <div class=\"header header-primary text-center\">\r\n                              <div class=\"logo-container\">\r\n                                  <img src=\"assets/img/now-logo.png\" alt=\"\">\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"content\">\r\n                            <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                              <div class=\"input-group-prepend\">\r\n                                  <span class=\"input-group-text\">  <i class=\"now-ui-icons users_circle-08\"></i></span>\r\n                              </div>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\r\n                            </div>\r\n                            <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                              <div class=\"input-group-prepend\">\r\n                                  <span class=\"input-group-text\"><i class=\"now-ui-icons text_caps-small\"></i></span>\r\n                              </div>\r\n                                <input type=\"text\" placeholder=\"Last Name...\" class=\"form-control\" (focus)=\"focus1=true\" (blur)=\"focus1=false\"/>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"footer text-center\">\r\n                              <a href=\"#pablo\" class=\"btn btn-primary btn-round btn-lg btn-block\">Get Started</a>\r\n                          </div>\r\n                          <div class=\"text-center\">\r\n                              <h6>\r\n                                  <a href=\"#pablo\" class=\"link\">Create Account</a>\r\n                              </h6>\r\n                          </div>\r\n                          <div class=\"text-center\">\r\n                              <h6>\r\n                                  <a href=\"#pablo\" class=\"link\">Need Help?</a>\r\n                              </h6>\r\n                          </div>\r\n                      </form>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n              <div class=\"col text-center\">\r\n                  <a [routerLink]=\"['/examples/login']\" class=\"btn btn-simple btn-round btn-white btn-lg\">View Login Page</a>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"section section-examples\" data-background-color=\"black\">\r\n          <div class=\"space-50\"></div>\r\n          <div class=\"container text-center\">\r\n              <div class=\"row\">\r\n                  <div class=\"col\">\r\n                      <a [routerLink]=\"['/examples/landing']\">\r\n                          <img src=\"assets/img/landing.jpg\" alt=\"Image\" class=\"img-raised\">\r\n                      </a>\r\n                      <a [routerLink]=\"['/examples/landing']\" class=\"btn btn-simple btn-primary btn-round\">View Landing Page</a>\r\n                  </div>\r\n                  <div class=\"col\">\r\n                      <a [routerLink]=\"['/examples/profile']\">\r\n                          <img src=\"assets/img/profile.jpg\" alt=\"Image\" class=\"img-raised\">\r\n                      </a>\r\n                      <a [routerLink]=\"['/examples/profile']\" class=\"btn btn-simple btn-primary btn-round\">View Profile Page</a>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"section section-download\" id=\"#download-section\" data-background-color=\"black\">\r\n          <div class=\"container\">\r\n              <div class=\"row justify-content-md-center\">\r\n                  <div class=\"text-center col-md-12 col-lg-8\">\r\n                      <h3 class=\"title\">Do you love this Bootstrap 4 UI Kit?</h3>\r\n                      <h5 class=\"description\">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim or Invision where you can find the kit in HTML or Sketch/PSD format. Start a new project or give an old Bootstrap project a new look!</h5>\r\n                  </div>\r\n                  <div class=\"text-center col-md-12 col-lg-8\">\r\n                      <a href=\"https://www.creative-tim.com/product/now-ui-kit-angular\" class=\"btn btn-primary btn-lg btn-round\" role=\"button\">\r\n                          Download Angular\r\n                      </a>\r\n                      <a href=\"https://www.invisionapp.com/now\" target=\"_blank\" class=\"btn btn-primary btn-lg btn-simple btn-round\" role=\"button\">\r\n                          Download PSD/Sketch\r\n                      </a>\r\n                  </div>\r\n              </div>\r\n              <br>\r\n              <br>\r\n              <br>\r\n              <div class=\"row text-center mt-5\">\r\n                  <div class=\"col-md-8 ml-auto mr-auto\">\r\n                      <h2>Want more?</h2>\r\n                      <h5 class=\"description\">We've just launched\r\n                          <a href=\"https://timcreative.github.io/now-ui-kit-pro-angular/presentation\" target=\"_blank\">Now UI Kit PRO Angular</a>. It has a huge number of components, sections and example pages. Start Your Development With A Badass Bootstrap 4 UI Kit.</h5>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                      <a href=\"https://timcreative.github.io/now-ui-kit-pro-angular/presentation\" class=\"btn btn-neutral btn-round btn-lg\" target=\"_blank\">\r\n                          <i class=\"now-ui-icons arrows-1_share-66\"></i> Upgrade to PRO\r\n                      </a>\r\n                  </div>\r\n              </div>\r\n              <br>\r\n              <br>\r\n              <div class=\"row justify-content-md-center sharing-area text-center\">\r\n                <div class=\"text-center col-md-12 col-lg-8\">\r\n                  <h3>Thank you for supporting us!</h3>\r\n                </div>\r\n                <div class=\"text-center col-md-12 col-lg-8\">\r\n                  <a target=\"_blank\" href=\"https://www.twitter.com/creativetim\" class=\"btn btn-neutral btn-icon btn-twitter btn-round btn-lg\" rel=\"tooltip\" title=\"Follow us\">\r\n                    <i class=\"fab fa-twitter\"></i>\r\n                  </a>\r\n                  <a target=\"_blank\" href=\"https://www.facebook.com/creativetim\" class=\"btn btn-neutral btn-icon btn-facebook btn-round btn-lg\" rel=\"tooltip\" title=\"Like us\">\r\n                    <i class=\"fab fa-facebook-square\"></i>\r\n                  </a>\r\n                  <a target=\"_blank\" href=\"https://www.linkedin.com/company-beta/9430489/\" class=\"btn btn-neutral btn-icon btn-linkedin btn-lg btn-round\" rel=\"tooltip\" title=\"Follow us\">\r\n                    <i class=\"fab fa-linkedin\"></i>\r\n                  </a>\r\n                  <a target=\"_blank\" href=\"https://github.com/creativetimofficial/now-ui-kit-angular\" class=\"btn btn-neutral btn-icon btn-github btn-round btn-lg\" rel=\"tooltip\" title=\"Star on Github\">\r\n                    <i class=\"fab fa-github\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <footer class=\"footer\" data-background-color=\"black\">\r\n      <div class=\"container\">\r\n          <nav>\r\n              <ul>\r\n                  <li>\r\n                      <a href=\"https://www.creative-tim.com\">\r\n                          Creative Tim\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"https://www.creative-tim.com/about-us\">\r\n                          About Us\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"http://blog.creative-tim.com\">\r\n                          Blog\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\r\n                          MIT License\r\n                      </a>\r\n                  </li>\r\n              </ul>\r\n          </nav>\r\n          <div class=\"copyright\">\r\n              &copy;\r\n            {{data | date: 'yyyy'}}, Designed by\r\n              <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\r\n              <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\r\n          </div>\r\n      </div>\r\n  </footer>\r\n</div>\r\n");

/***/ }),

/***/ "P6R5":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button class=\"btn btn-primary\" (click)=\"open(classic,'' , '')\">\r\n Launch Modal\r\n</button>\r\n<ng-template #classic let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header justify-content-center\">\r\n        <button type=\"button\" class=\"close\" (click)=\"d('Cross click')\">\r\n            <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n        </button>\r\n        <h4 class=\"title title-up\">Modal title</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.\r\n        </p>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\">Nice Button</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click')\">Close</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<button class=\"btn btn-warning\" (click)=\"open(modal_mini, 'modal_mini', 'sm')\">\r\n   Launch Modal Mini\r\n</button>\r\n<ng-template #modal_mini let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header justify-content-center\">\r\n      <div class=\"modal-profile\">\r\n          <i class=\"now-ui-icons users_circle-08\"></i>\r\n      </div>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n      <p>Always have an access to your profile</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-link btn-neutral\">Back</button>\r\n      <button type=\"button\" class=\"btn btn-link btn-neutral\" (click)=\"c('Close click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "QhSr":
/*!***************************************************************!*\
  !*** ./src/app/components/typography/typography.component.ts ***!
  \***************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./typography.component.html */ "4R/m");
/* harmony import */ var _typography_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typography.component.scss */ "0Inq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () { };
    TypographyComponent.ctorParameters = function () { return []; };
    TypographyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-typography',
            template: _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_typography_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");









var AppComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            // this.navbar.sidebarClose();
            // tslint:disable-next-line:no-shadowed-variable
            _this.renderer.listen('window', 'scroll', function (event) {
                var number = window.scrollY;
                var _location = _this.location.path();
                _location = _location.split('/')[2];
                if (number > 150 || window.pageYOffset > 150) {
                    navbar.classList.remove('navbar-transparent');
                }
                else if (_location !== 'login' && _this.location.path() !== '/nucleoicons') {
                    // remove logic
                    navbar.classList.add('navbar-transparent');
                }
            });
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }
    ]; };
    AppComponent.propDecorators = {
        navbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],] }]
    };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "T9Od":
/*!*****************************************************!*\
  !*** ./src/app/examples/login/login.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<!--\r\n<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n-->\r\n\r\n<app-searchbar></app-searchbar>\r\n");

/***/ }),

/***/ "Y10/":
/*!******************************************!*\
  !*** ./src/app/music/music.component.ts ***!
  \******************************************/
/*! exports provided: MusicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicComponent", function() { return MusicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _music_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./music.component.css */ "ZSFa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../weather/weather.component */ "6nUm");




var tabSound = [];
var URLmusic = '';
var MusicComponent = /** @class */ (function () {
    function MusicComponent() {
        this.requestPlayList = new XMLHttpRequest();
        this.requestMusic = new XMLHttpRequest();
    }
    MusicComponent.prototype.ngOnInit = function () {
        this.requetePlaylist();
    };
    MusicComponent.prototype.requetePlaylist = function () {
        this.requestPlayList.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                var response = JSON.parse(this.responseText);
                // console.log(response);
                var taille = response.items.length;
                // console.log(response);
                for (var i = 0; i < taille; i++) {
                    console.log(response.items[i].contentDetails.videoId);
                    tabSound[i] = response.items[i].contentDetails.videoId;
                }
            }
        };
        this.requestPlayList.open('GET', 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=PL1B9kgxoct2qr6qEmC3ZemusdAAvhxm6a&key=AIzaSyD9K_P6cREPoxh9HHfMw7yR5gbE-vJTsnA', false);
        this.requestPlayList.send();
    };
    MusicComponent.prototype.requeteMusic = function (id) {
        this.requestMusic.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                var response = JSON.stringify(this.response);
                URLmusic = response.substring(1244, 1380);
            }
        };
        this.requestMusic.open('GET', 'https://www.yt-download.org/api/button/mp3/' + id, false);
        this.requestMusic.send();
        return URLmusic;
    };
    MusicComponent.prototype.startMusic = function (weather) {
        if (weather === "Thunder") {
            return this.requeteMusic(tabSound[1]);
        }
        else if (weather === "Drizzle") {
            return this.requeteMusic(tabSound[5]);
        }
        else if (weather === "Rain") {
            return this.requeteMusic(tabSound[0]);
        }
        else if (weather === "Snow") {
            return this.requeteMusic(tabSound[2]);
        }
        else if (weather === "Atmosphere") {
            return this.requeteMusic(tabSound[4]);
        }
        else if (weather === "Clear") {
            return this.requeteMusic(tabSound[3]);
        }
        else if (weather === "Clouds") {
            return this.requeteMusic(tabSound[3]);
        }
        else {
            return "../../assets/sound/Rain.mp3";
        }
    };
    MusicComponent.prototype.launchMusic = function () {
        var audio = new Audio();
        audio.src = this.startMusic(this.child.getWeatherType());
        audio.load();
        audio.play();
    };
    MusicComponent.ctorParameters = function () { return []; };
    MusicComponent.propDecorators = {
        child: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_weather_weather_component__WEBPACK_IMPORTED_MODULE_3__["WeatherComponent"], { static: false },] }]
    };
    MusicComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-music',
            template: "<div>\n                <audio controls src=\"{{this.startMusic(this.child.getWeatherType())}}\">\n                <code>audio</code>\n                </audio>\n            </div>",
            styles: [_music_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], MusicComponent);
    return MusicComponent;
}());



/***/ }),

/***/ "Ytgu":
/*!***********************************************!*\
  !*** ./src/app/weather/weather.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container_weather{\r\n    margin: auto;\r\n    width: 35%;\r\n    padding: 10px;\r\n}\r\n\r\n#divWeatherMain{\r\n    display: block;\r\n    border-radius: 25px;\r\n    position: inherit;\r\n    width: 360px;\r\n    height: 320px;\r\n    padding: 15px;\r\n    color: white;\r\n    font-family: 'Comfortaa', sans-serif;\r\n    background-color: rgba(255, 255, 255, .15);\r\n    -webkit-backdrop-filter: blur(10px);\r\n            backdrop-filter: blur(10px);\r\n}\r\n\r\n.weatherWidgetRow{\r\n    display:block;\r\n    margin:0 auto;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n\r\n.sun{\r\n    margin-top: 10px;\r\n    color: yellow;\r\n    filter: drop-shadow( 1px 1px 10px yellow);\r\n}\r\n\r\n.moon{\r\n    margin-top: 10px;\r\n    color: white;\r\n    filter: drop-shadow( 1px 1px 10px white);\r\n}\r\n\r\n.cloudDiv{\r\n    margin-top: -40px;\r\n}\r\n\r\n.cloud{\r\n    color: rgb(104, 175, 197);\r\n    filter: drop-shadow( 1px 1px 5px rgb(104, 175, 197));\r\n    -webkit-animation-name: cloudMovement;\r\n            animation-name: cloudMovement;\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite;\r\n    -webkit-animation-duration: 10s;\r\n            animation-duration: 10s;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n            animation-timing-function: ease-in-out;\r\n    -webkit-animation-direction: alternate;\r\n            animation-direction: alternate;\r\n}\r\n\r\n@-webkit-keyframes cloudMovement{\r\n    from{margin-left: -55px;}\r\n    to{margin-left: 65px;}\r\n}\r\n\r\n@keyframes cloudMovement{\r\n    from{margin-left: -55px;}\r\n    to{margin-left: 65px;}\r\n}\r\n\r\n.glass{\r\n    background-color: rgba(255, 255, 255, .15);\r\n    -webkit-backdrop-filter: blur(3px);\r\n            backdrop-filter: blur(3px);\r\n}\r\n\r\n.preview{\r\n    content: \" \";\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: 80px;\r\n    min-width: 50px;\r\n    min-height: 50px;\r\n    -webkit-animation-name: custom_anim;\r\n            animation-name: custom_anim;\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite;\r\n    -webkit-animation-duration: 8s;\r\n            animation-duration: 8s;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n            animation-timing-function: ease-in-out;\r\n    -webkit-animation-direction: alternate;\r\n            animation-direction: alternate;\r\n\r\n}\r\n\r\n@-webkit-keyframes custom_anim{\r\n    from{margin-left: -30px;}\r\n    to{margin-left: 30px;}\r\n}\r\n\r\n@keyframes custom_anim{\r\n    from{margin-left: -30px;}\r\n    to{margin-left: 30px;}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsMENBQTBDO0lBQzFDLG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixvREFBb0Q7SUFDcEQscUNBQTZCO1lBQTdCLDZCQUE2QjtJQUM3QiwyQ0FBbUM7WUFBbkMsbUNBQW1DO0lBQ25DLCtCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsOENBQXNDO1lBQXRDLHNDQUFzQztJQUN0QyxzQ0FBOEI7WUFBOUIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksS0FBSyxrQkFBa0IsQ0FBQztJQUN4QixHQUFHLGlCQUFpQixDQUFDO0FBQ3pCOztBQUhBO0lBQ0ksS0FBSyxrQkFBa0IsQ0FBQztJQUN4QixHQUFHLGlCQUFpQixDQUFDO0FBQ3pCOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLGtDQUEwQjtZQUExQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLDJDQUFtQztZQUFuQyxtQ0FBbUM7SUFDbkMsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qiw4Q0FBc0M7WUFBdEMsc0NBQXNDO0lBQ3RDLHNDQUE4QjtZQUE5Qiw4QkFBOEI7O0FBRWxDOztBQUVBO0lBQ0ksS0FBSyxrQkFBa0IsQ0FBQztJQUN4QixHQUFHLGlCQUFpQixDQUFDO0FBQ3pCOztBQUhBO0lBQ0ksS0FBSyxrQkFBa0IsQ0FBQztJQUN4QixHQUFHLGlCQUFpQixDQUFDO0FBQ3pCIiwiZmlsZSI6IndlYXRoZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJfd2VhdGhlcntcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jZGl2V2VhdGhlck1haW57XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcclxuICAgIHdpZHRoOiAzNjBweDtcclxuICAgIGhlaWdodDogMzIwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG59XHJcblxyXG4ud2VhdGhlcldpZGdldFJvd3tcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4uc3Vue1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGNvbG9yOiB5ZWxsb3c7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAxcHggMXB4IDEwcHggeWVsbG93KTtcclxufVxyXG5cclxuLm1vb257XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMXB4IDFweCAxMHB4IHdoaXRlKTtcclxufVxyXG5cclxuLmNsb3VkRGl2e1xyXG4gICAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbn1cclxuXHJcbi5jbG91ZHtcclxuICAgIGNvbG9yOiByZ2IoMTA0LCAxNzUsIDE5Nyk7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAxcHggMXB4IDVweCByZ2IoMTA0LCAxNzUsIDE5NykpO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGNsb3VkTW92ZW1lbnQ7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY2xvdWRNb3ZlbWVudHtcclxuICAgIGZyb217bWFyZ2luLWxlZnQ6IC01NXB4O31cclxuICAgIHRve21hcmdpbi1sZWZ0OiA2NXB4O31cclxufVxyXG5cclxuLmdsYXNze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XHJcbn1cclxuXHJcbi5wcmV2aWV3e1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA4MHB4O1xyXG4gICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgbWluLWhlaWdodDogNTBweDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBjdXN0b21fYW5pbTtcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4cztcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG5cclxufVxyXG5cclxuQGtleWZyYW1lcyBjdXN0b21fYW5pbXtcclxuICAgIGZyb217bWFyZ2luLWxlZnQ6IC0zMHB4O31cclxuICAgIHRve21hcmdpbi1sZWZ0OiAzMHB4O31cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _examples_examples_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/examples.module */ "ieWF");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./searchbar/searchbar.component */ "jiot");
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./weather/weather.component */ "6nUm");
/* harmony import */ var _music_music_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./music/music.component */ "Y10/");

 // this is needed!












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_11__["SearchbarComponent"],
                _weather_weather_component__WEBPACK_IMPORTED_MODULE_12__["WeatherComponent"],
                _music_music_component__WEBPACK_IMPORTED_MODULE_13__["MusicComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _examples_examples_module__WEBPACK_IMPORTED_MODULE_8__["ExamplesModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "ZSFa":
/*!*******************************************!*\
  !*** ./src/app/music/music.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtdXNpYy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components.component */ "93si");
/* harmony import */ var _examples_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/landing/landing.component */ "AXTl");
/* harmony import */ var _examples_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/login/login.component */ "lznb");
/* harmony import */ var _examples_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/profile/profile.component */ "xQKc");
/* harmony import */ var _components_nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/nucleoicons/nucleoicons.component */ "+GGL");










var routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: _components_components_component__WEBPACK_IMPORTED_MODULE_5__["ComponentsComponent"] },
    { path: 'nucleoicons', component: _components_nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_9__["NucleoiconsComponent"] },
    { path: 'examples/landing', component: _examples_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"] },
    { path: 'examples/login', component: _examples_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'examples/profile', component: _examples_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "cruu":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "gqYc":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/examples.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  examples works!\r\n</p>\r\n");

/***/ }),

/***/ "hMDP":
/*!************************************************!*\
  !*** ./src/app/examples/examples.component.ts ***!
  \************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_examples_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./examples.component.html */ "gqYc");
/* harmony import */ var _examples_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./examples.component.scss */ "w1at");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent() {
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    ExamplesComponent.ctorParameters = function () { return []; };
    ExamplesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-examples',
            template: _raw_loader_examples_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_examples_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ }),

/***/ "ieWF":
/*!*********************************************!*\
  !*** ./src/app/examples/examples.module.ts ***!
  \*********************************************/
/*! exports provided: ExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesModule", function() { return ExamplesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "yw8I");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "yQBb");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/landing.component */ "AXTl");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "lznb");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "xQKc");
/* harmony import */ var _examples_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples.component */ "hMDP");












var ExamplesModule = /** @class */ (function () {
    function ExamplesModule() {
    }
    ExamplesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__["JwBootstrapSwitchNg2Module"],
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                    apiKey: 'YOUR_KEY_HERE'
                })
            ],
            exports: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _examples_component__WEBPACK_IMPORTED_MODULE_11__["ExamplesComponent"]
            ],
            declarations: [
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _examples_component__WEBPACK_IMPORTED_MODULE_11__["ExamplesComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"]
            ]
        })
    ], ExamplesModule);
    return ExamplesModule;
}());



/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-nouislider */ "yw8I");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "yQBb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./basicelements/basicelements.component */ "o8F2");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navigation/navigation.component */ "mvyS");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./typography/typography.component */ "QhSr");
/* harmony import */ var _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nucleoicons/nucleoicons.component */ "+GGL");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components.component */ "93si");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./notification/notification.component */ "9ldr");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modal/modal.component */ "7aL3");















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__["NouisliderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__["JwBootstrapSwitchNg2Module"]
            ],
            declarations: [
                _components_component__WEBPACK_IMPORTED_MODULE_12__["ComponentsComponent"],
                _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_8__["BasicelementsComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_10__["TypographyComponent"],
                _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_11__["NucleoiconsComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_13__["NotificationComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_14__["NgbdModalBasic"]
            ],
            exports: [_components_component__WEBPACK_IMPORTED_MODULE_12__["ComponentsComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_14__["NgbdModalBasic"], _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_8__["BasicelementsComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"], _notification_notification_component__WEBPACK_IMPORTED_MODULE_13__["NotificationComponent"], _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_11__["NucleoiconsComponent"], _typography_typography_component__WEBPACK_IMPORTED_MODULE_10__["TypographyComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "jiot":
/*!**************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.ts ***!
  \**************************************************/
/*! exports provided: SearchbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarComponent", function() { return SearchbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_searchbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./searchbar.component.html */ "ymkF");
/* harmony import */ var _searchbar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchbar.component.css */ "r9DF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../weather/weather.component */ "6nUm");





var tabVille = [];
var tabPhoto = [];
var tabURLPhoto = [];
var placeId = '';
var index = 0;
var SearchbarComponent = /** @class */ (function () {
    function SearchbarComponent() {
        this.nomVille = '';
        this.tabVilles = [];
        this.tabPhotos = [];
        this.nbPhotomax = 5;
        this.tabURLPhotos = [];
        this.requestVille = new XMLHttpRequest();
        this.requestPhoto = new XMLHttpRequest();
        this.requestChoixVille = new XMLHttpRequest();
        this.requestChoixPhoto = new XMLHttpRequest();
    }
    SearchbarComponent.prototype.ngOnInit = function () { };
    SearchbarComponent.prototype.rechercheVille = function (nom) {
        if (nom !== '') {
            tabVille = [];
            tabPhoto = [];
            tabURLPhoto = [];
            index = 0;
            this.nomVille = nom;
            this.child.getWeatherData(nom);
            // console.log('Le nom de la ville recherchée : ', this.nomVille);
            this.requeteChoixVille(nom);
            this.requetePhoto();
            // for (let j = 0; j < this.tabPhotos.length; j++) {
            //  console.log(this.tabPhotos[j]);
            // }
            var temp = this.tabPhotos.length;
            if (temp < this.nbPhotomax) {
                this.nbPhotomax = temp;
            }
            for (var i = 0; i < this.nbPhotomax; i++) {
                this.requeteChoixPhoto();
            }
            this.tabURLPhotos = tabURLPhoto.filter(function (err) {
                return err != null;
            });
            for (var j = 0; j < this.tabPhotos.length; j++) {
                console.log(this.tabURLPhotos[j]);
            }
        }
    };
    SearchbarComponent.prototype.requeteVille = function (nom) {
        if (nom !== '' && nom.length > 2) {
            this.requestVille.onreadystatechange = function () {
                if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                    var response = JSON.parse(this.responseText);
                    var taille = response.predictions.length;
                    // console.log(response);
                    for (var i = 0; i < taille; i++) {
                        // console.log(response.predictions[i].description);
                        tabVille[i] = response.predictions[i].description;
                    }
                }
            };
            this.requestVille.open('GET', 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + nom + '&types=geocode&language=fr&key=AIzaSyD9K_P6cREPoxh9HHfMw7yR5gbE-vJTsnA', false);
            this.requestVille.send();
            this.tabVilles = tabVille;
        }
    };
    SearchbarComponent.prototype.requetePhoto = function () {
        this.requestPhoto.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                var response = JSON.parse(this.responseText);
                var taille = response.result.photos.length;
                // console.log(response);
                for (var i = 0; i < taille; i++) {
                    // tslint:disable-next-line:max-line-length
                    if (response.result.photos[i].height > 720 && response.result.photos[i].width > 1280) { // Photo en HD Ready
                        // console.log(response.result.photos[i].photo_reference);
                        tabPhoto[i] = response.result.photos[i].photo_reference;
                    }
                }
            }
        };
        this.requestPhoto.open('GET', 'https://maps.googleapis.com/maps/api/place/details/json?place_id=' + placeId + '&key=AIzaSyD9K_P6cREPoxh9HHfMw7yR5gbE-vJTsnA', false);
        this.requestPhoto.send();
        this.tabPhotos = tabPhoto.filter(function (err) {
            return err != null;
        });
    };
    SearchbarComponent.prototype.requeteChoixVille = function (nom) {
        if (nom !== '' && nom.length > 2) {
            this.requestChoixVille.onreadystatechange = (function () {
                if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                    var response = JSON.parse(this.responseText);
                    // console.log(response);
                    placeId = response.predictions[0].place_id;
                }
            });
            this.requestChoixVille.open('GET', 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + nom + '&types=geocode&language=fr&key=AIzaSyD9K_P6cREPoxh9HHfMw7yR5gbE-vJTsnA', false);
            this.requestChoixVille.send();
        }
    };
    SearchbarComponent.prototype.requeteChoixPhoto = function () {
        this.requestChoixPhoto.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                // console.log(this.responseURL);
                tabURLPhoto[index] = this.responseURL;
                index++;
            }
        };
        // tslint:disable-next-line:max-line-length
        this.requestChoixPhoto.open('GET', 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=1100&photoreference=' + this.tabPhotos[index] + '&key=AIzaSyD9K_P6cREPoxh9HHfMw7yR5gbE-vJTsnA', false);
        this.requestChoixPhoto.send();
    };
    SearchbarComponent.prototype.setBackgroundImage = function () {
        var indice = 1;
        if (this.tabURLPhotos.length === 0) {
            return 'assets/img/weathery/login.jpg';
        }
        else {
            while (this.tabURLPhotos[indice] === null) {
                indice++;
                if (indice === this.tabURLPhotos.length) {
                    indice = 0;
                }
            }
            // tslint:disable-next-line:max-line-length
            return this.tabURLPhotos[indice]; // Il prend la deuxième photo, il faut ajouter un bouton pour que l'utilisateur change l'image du site
        }
    };
    SearchbarComponent.ctorParameters = function () { return []; };
    SearchbarComponent.propDecorators = {
        child: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_weather_weather_component__WEBPACK_IMPORTED_MODULE_4__["WeatherComponent"], { static: false },] }]
    };
    SearchbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-searchbar',
            template: _raw_loader_searchbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_searchbar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SearchbarComponent);
    return SearchbarComponent;
}());



/***/ }),

/***/ "lznb":
/*!***************************************************!*\
  !*** ./src/app/examples/login/login.component.ts ***!
  \***************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "5QX9");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss */ "T9Od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.data = new Date();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    LoginComponent.ctorParameters = function () { return []; };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "mvyS":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navigation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navigation.component.html */ "7pPp");
/* harmony import */ var _navigation_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation.component.scss */ "r7bM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent.ctorParameters = function () { return []; };
    NavigationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-navigation',
            template: _raw_loader_navigation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_navigation_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "o8F2":
/*!*********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.ts ***!
  \*********************************************************************/
/*! exports provided: BasicelementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicelementsComponent", function() { return BasicelementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_basicelements_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./basicelements.component.html */ "1RpN");
/* harmony import */ var _basicelements_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basicelements.component.scss */ "4Wxn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var BasicelementsComponent = /** @class */ (function () {
    function BasicelementsComponent() {
        this.simpleSlider = 40;
        this.doubleSlider = [20, 60];
        this.state = true;
        this.tagItems = ['Minimal', 'Light', 'New', 'Friends'];
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.dropdownList1 = [];
        this.selectedItems1 = [];
        this.dropdownSettings1 = {};
    }
    BasicelementsComponent.prototype.ngOnInit = function () {
        this.dropdownList = [
            { "id": 1, "itemName": "Roman" },
            { "id": 2, "itemName": "Paris" },
            { "id": 3, "itemName": "Bucharest" },
            { "id": 4, "itemName": "Rome" },
            { "id": 5, "itemName": "New York" },
            { "id": 6, "itemName": "Miami" },
            { "id": 7, "itemName": "Piatra Neamt" },
            { "id": 8, "itemName": "Paris" },
            { "id": 9, "itemName": "Bucharest" },
            { "id": 10, "itemName": "Rome" },
            { "id": 11, "itemName": "New York" },
            { "id": 12, "itemName": "Miami" },
            { "id": 13, "itemName": "Piatra Neamt" }
        ];
        this.selectedItems = [];
        this.dropdownSettings = {
            singleSelection: false,
            text: "Multiple Select",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
        };
        this.dropdownList1 = [
            { "id": 1, "itemName": "Roman" },
            { "id": 2, "itemName": "Paris" },
            { "id": 3, "itemName": "Bucharest" },
            { "id": 4, "itemName": "Rome" },
            { "id": 5, "itemName": "New York" },
            { "id": 6, "itemName": "Miami" },
            { "id": 7, "itemName": "Piatra Neamt" },
            { "id": 8, "itemName": "Paris" },
            { "id": 9, "itemName": "Bucharest" },
            { "id": 10, "itemName": "Rome" },
            { "id": 11, "itemName": "New York" },
            { "id": 12, "itemName": "Miami" },
            { "id": 13, "itemName": "Piatra Neamt" }
        ];
        this.selectedItems1 = [];
        this.dropdownSettings1 = {
            singleSelection: true,
            text: "Single Select",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
        };
    };
    BasicelementsComponent.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    BasicelementsComponent.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    BasicelementsComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    BasicelementsComponent.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    BasicelementsComponent.ctorParameters = function () { return []; };
    BasicelementsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-basicelements',
            template: _raw_loader_basicelements_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_basicelements_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BasicelementsComponent);
    return BasicelementsComponent;
}());



/***/ }),

/***/ "oy3u":
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "q3QT":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/profile/profile.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n    <div class=\"page-header page-header-small\" filter-color=\"orange\">\r\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/bg5.jpg') ;\">\r\n        </div>\r\n        <div class=\"container\">\r\n            <div class=\"content-center\">\r\n                <div class=\"photo-container\">\r\n                    <img src=\"assets/img/ryan.jpg\" alt=\"\">\r\n                </div>\r\n                <h3 class=\"title\">Ryan Scheinder</h3>\r\n                <p class=\"category\">Photographer</p>\r\n                <div class=\"content\">\r\n                    <div class=\"social-description\">\r\n                        <h2>26</h2>\r\n                        <p>Comments</p>\r\n                    </div>\r\n                    <div class=\"social-description\">\r\n                        <h2>26</h2>\r\n                        <p>Comments</p>\r\n                    </div>\r\n                    <div class=\"social-description\">\r\n                        <h2>48</h2>\r\n                        <p>Bookmarks</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"section\">\r\n        <div class=\"container\">\r\n          <div class=\"button-container\">\r\n              <a href=\"#button\" class=\"btn btn-primary btn-round btn-lg\">Follow</a>\r\n              <a href=\"#button\" class=\"btn btn-default btn-round btn-lg btn-icon\" rel=\"tooltip\" title=\"Follow me on Twitter\">\r\n                <i class=\"fab fa-twitter\"></i>\r\n              </a>\r\n              <a href=\"#button\" class=\"btn btn-default btn-round btn-lg btn-icon\" rel=\"tooltip\" title=\"Follow me on Instagram\">\r\n                <i class=\"fab fa-instagram\"></i>\r\n              </a>\r\n          </div>\r\n          <h3 class=\"title\">About me</h3>\r\n          <h5 class=\"description\">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</h5>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h4 class=\"title text-center\">My Portfolio</h4>\r\n                      <ngb-tabset [justify]=\"'center'\" type=\"pills\" class=\"nav nav-pills nav-pills-primary  nav-pills-just-icons justify-content-center tab-space\">\r\n                          <ngb-tab>\r\n                            <ng-template ngbTabTitle>\r\n                              <i class=\"now-ui-icons design_image\"></i>\r\n                            </ng-template>\r\n                              <ng-template ngbTabContent>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-10 ml-auto mr-auto\">\r\n                                      <div class=\"row collections\">\r\n                                          <div class=\"col-md-6\">\r\n                                              <img src=\"assets/img/bg1.jpg\" alt=\"\" class=\"img-raised\">\r\n                                              <img src=\"assets/img/bg3.jpg\" alt=\"\" class=\"img-raised\">\r\n                                          </div>\r\n                                          <div class=\"col-md-6\">\r\n                                              <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\r\n                                              <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                                </div>\r\n                              </ng-template>\r\n                          </ngb-tab>\r\n                          <ngb-tab>\r\n                            <ng-template ngbTabTitle>\r\n                              <i class=\"now-ui-icons location_world\"></i>\r\n                            </ng-template>\r\n                              <ng-template ngbTabContent>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-10 ml-auto mr-auto\">\r\n                                      <div class=\"row collections\">\r\n                                          <div class=\"col-md-6\">\r\n                                              <img src=\"assets/img/bg6.jpg\" class=\"img-raised\">\r\n                                              <img src=\"assets/img/bg11.jpg\" alt=\"\" class=\"img-raised\">\r\n                                          </div>\r\n                                          <div class=\"col-md-6\">\r\n                                              <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\r\n                                              <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                                </div>\r\n                              </ng-template>\r\n                          </ngb-tab>\r\n                          <ngb-tab>\r\n                            <ng-template ngbTabTitle>\r\n                              <i class=\"now-ui-icons sport_user-run\"></i>\r\n                            </ng-template>\r\n                              <ng-template ngbTabContent>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-10 ml-auto mr-auto\">\r\n                                      <div class=\"row collections\">\r\n                                          <div class=\"col-md-6\">\r\n                                              <img src=\"assets/img/bg3.jpg\" alt=\"\" class=\"img-raised\">\r\n                                              <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\r\n                                          </div>\r\n                                          <div class=\"col-md-6\">\r\n                                              <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\r\n                                              <img src=\"assets/img/bg6.jpg\" class=\"img-raised\">\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                                </div>\r\n                              </ng-template>\r\n                          </ngb-tab>\r\n                      </ngb-tabset>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <footer class=\"footer footer-default\">\r\n        <div class=\"container\">\r\n            <nav>\r\n                <ul>\r\n                    <li>\r\n                        <a href=\"https://www.creative-tim.com\">\r\n                            Creative Tim\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"https://www.creative-tim.com/about-us\">\r\n                            About Us\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"http://blog.creative-tim.com\">\r\n                            Blog\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\r\n                            MIT License\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"copyright\">\r\n                &copy;\r\n                {{data | date: 'yyyy'}}, Designed by\r\n                <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\r\n                <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\r\n            </div>\r\n        </div>\r\n    </footer>\r\n</div>\r\n");

/***/ }),

/***/ "r7bM":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "r9DF":
/*!***************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.imglogo{\r\n    display:block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 50px;\r\n    opacity:0.5;\r\n    height: 200px;\r\n    filter:alpha(opacity=50);\r\n}\r\n\r\n.logo-text{\r\n    display:block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 50px;\r\n    padding-top: 10%;\r\n    font-family: 'Comfortaa', sans-serif;\r\n    font-size: 64px;\r\n    opacity: 0.8;\r\n    filter:alpha(opacity=50);\r\n}\r\n\r\n.form-control{\r\n    font-family: 'Comfortaa', sans-serif;\r\n    font-size:25px;\r\n    color: white;\r\n}\r\n\r\n.page-header-image{\r\n    transition: 1s ease-in-out;\r\n}\r\n\r\n.page-header{\r\n    margin: auto;\r\n    background-color: rgba(255, 255, 255, .15);\r\n    -webkit-backdrop-filter: blur(10px);\r\n            backdrop-filter: blur(10px);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixZQUFZO0lBQ1osd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBRUksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDBDQUEwQztJQUMxQyxtQ0FBMkI7WUFBM0IsMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNlYXJjaGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5pbWdsb2dve1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIG9wYWNpdHk6MC41O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGZpbHRlcjphbHBoYShvcGFjaXR5PTUwKTtcclxufVxyXG5cclxuLmxvZ28tdGV4dHtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgZmlsdGVyOmFscGhhKG9wYWNpdHk9NTApO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9se1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOjI1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wYWdlLWhlYWRlci1pbWFnZXtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnBhZ2UtaGVhZGVye1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "vG3S":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nucleoicons/nucleoicons.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nucleo-icons-style\">\r\n  <header>\r\n      <h1>Nucleo Outline Web Font v2.9</h1>\r\n      <p>\r\n          <a href=\"https://nucleoapp.com/?ref=1712\">nucleoapp.com</a>\r\n      </p>\r\n  </header>\r\n  <div id=\"cd-nav\">\r\n      <nav>\r\n          <ul id=\"cd-main-nav\">\r\n              <li>\r\n                  <a href=\"#arrows\">Arrows</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#business\">Business &amp; Finance</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#clothes\">Clothes &amp; Accessories</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#design\">Design &amp; Development</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#emoticons\">Emoticons</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#files\">Files &amp; Folders</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#medical\">Healthcare &amp; Medical</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#loaders\">Loaders</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#maps\">Maps &amp; Location</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#media\">Media</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#objects\">Objects</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#school\">School &amp; Education</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#shopping\">Shopping</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#sport\">Sport</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#technology\">Technology</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#text\">Text Editing</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#gestures\">Touch Gestures</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#transportation\">Transportation</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#travel\">Travel</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#interface\">User Interface</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#users\">Users</a>\r\n              </li>\r\n          </ul>\r\n      </nav>\r\n  </div>\r\n  <div id=\"icons-wrapper\">\r\n      <section id=\"arrows\">\r\n          <h2>Arrows</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_cloud-download-93\"></i>\r\n                  <p>arrows-1_cloud-download-93</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_cloud-upload-94\"></i>\r\n                  <p>arrows-1_cloud-upload-94</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\r\n                  <p>arrows-1_minimal-down</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_minimal-left\"></i>\r\n                  <p>arrows-1_minimal-left</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_minimal-right\"></i>\r\n                  <p>arrows-1_minimal-right</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_minimal-up\"></i>\r\n                  <p>arrows-1_minimal-up</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_refresh-69\"></i>\r\n                  <p>arrows-1_refresh-69</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_share-66\"></i>\r\n                  <p>arrows-1_share-66</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"business\">\r\n          <h2>Business &amp; Finance</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_badge\"></i>\r\n                  <p>business_badge</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_bank\"></i>\r\n                  <p>business_bank</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_briefcase-24\"></i>\r\n                  <p>business_briefcase-24</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_bulb-63\"></i>\r\n                  <p>business_bulb-63</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_chart-bar-32\"></i>\r\n                  <p>business_chart-bar-32</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_chart-pie-36\"></i>\r\n                  <p>business_chart-pie-36</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_globe\"></i>\r\n                  <p>business_globe</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_money-coins\"></i>\r\n                  <p>business_money-coins</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"clothes\">\r\n          <h2>Clothes &amp; Accessories</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons clothes_tie-bow\"></i>\r\n                  <p>clothes_tie-bow</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"design\">\r\n          <h2>Design &amp; Development</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons design_app\"></i>\r\n                  <p>design_app</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons design_bullet-list-67\"></i>\r\n                  <p>design_bullet-list-67</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons design_image\"></i>\r\n                  <p>design_image</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons design_palette\"></i>\r\n                  <p>design_palette</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons design_scissors\"></i>\r\n                  <p>design_scissors</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons design_vector\"></i>\r\n                  <p>design_vector</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons design-2_html5\"></i>\r\n                  <p>design-2_html5</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons design-2_ruler-pencil\"></i>\r\n                  <p>design-2_ruler-pencil</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"emoticons\">\r\n          <h2>Emoticons</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons emoticons_satisfied\"></i>\r\n                  <p>emoticons_satisfied</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"files\">\r\n          <h2>Files &amp; Folders</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons files_box\"></i>\r\n                  <p>files_box</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons files_paper\"></i>\r\n                  <p>files_paper</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons files_single-copy-04\"></i>\r\n                  <p>files_single-copy-04</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"medical\">\r\n          <h2>Healthcare &amp; Medical</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons health_ambulance\"></i>\r\n                  <p>health_ambulance</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"loaders\">\r\n          <h2>Loaders</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons loader_gear spin\"></i>\r\n                  <p>loader_gear</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons loader_refresh spin\"></i>\r\n                  <p>loader_refresh</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"maps\">\r\n          <h2>Maps &amp; Location</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons location_bookmark\"></i>\r\n                  <p>location_bookmark</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons location_compass-05\"></i>\r\n                  <p>location_compass-05</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons location_map-big\"></i>\r\n                  <p>location_map-big</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons location_pin\"></i>\r\n                  <p>location_pin</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons location_world\"></i>\r\n                  <p>location_world</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"media\">\r\n          <h2>Media</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons media-1_album\"></i>\r\n                  <p>media-1_album</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons media-1_button-pause\"></i>\r\n                  <p>media-1_button-pause</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons media-1_button-play\"></i>\r\n                  <p>media-1_button-play</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons media-1_button-power\"></i>\r\n                  <p>media-1_button-power</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons media-1_camera-compact\"></i>\r\n                  <p>media-1_camera-compact</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons media-2_note-03\"></i>\r\n                  <p>media-2_note-03</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons media-2_sound-wave\"></i>\r\n                  <p>media-2_sound-wave</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"objects\">\r\n          <h2>Objects</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons objects_diamond\"></i>\r\n                  <p>objects_diamond</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons objects_globe\"></i>\r\n                  <p>objects_globe</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons objects_key-25\"></i>\r\n                  <p>objects_key-25</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons objects_planet\"></i>\r\n                  <p>objects_planet</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons objects_spaceship\"></i>\r\n                  <p>objects_spaceship</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons objects_support-17\"></i>\r\n                  <p>objects_support-17</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons objects_umbrella-13\"></i>\r\n                  <p>objects_umbrella-13</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"school\">\r\n          <h2>School &amp; Education</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons education_agenda-bookmark\"></i>\r\n                  <p>education_agenda-bookmark</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons education_atom\"></i>\r\n                  <p>education_atom</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons education_glasses\"></i>\r\n                  <p>education_glasses</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons education_hat\"></i>\r\n                  <p>education_hat</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons education_paper\"></i>\r\n                  <p>education_paper</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"shopping\">\r\n          <h2>Shopping</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_bag-16\"></i>\r\n                  <p>shopping_bag-16</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_basket\"></i>\r\n                  <p>shopping_basket</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_box\"></i>\r\n                  <p>shopping_box</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_cart-simple\"></i>\r\n                  <p>shopping_cart-simple</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_credit-card\"></i>\r\n                  <p>shopping_credit-card</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_delivery-fast\"></i>\r\n                  <p>shopping_delivery-fast</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_shop\"></i>\r\n                  <p>shopping_shop</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_tag-content\"></i>\r\n                  <p>shopping_tag-content</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"sport\">\r\n          <h2>Sport</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons sport_trophy\"></i>\r\n                  <p>sport_trophy</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons sport_user-run\"></i>\r\n                  <p>sport_user-run</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"technology\">\r\n          <h2>Technology</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons tech_controller-modern\"></i>\r\n                  <p>tech_controller-modern</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons tech_headphones\"></i>\r\n                  <p>tech_headphones</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons tech_laptop\"></i>\r\n                  <p>tech_laptop</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons tech_mobile\"></i>\r\n                  <p>tech_mobile</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons tech_tablet\"></i>\r\n                  <p>tech_tablet</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons tech_tv\"></i>\r\n                  <p>tech_tv</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons tech_watch-time\"></i>\r\n                  <p>tech_watch-time</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"text\">\r\n          <h2>Text Editing</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons text_align-center\"></i>\r\n                  <p>text_align-center</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons text_align-left\"></i>\r\n                  <p>text_align-left</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons text_bold\"></i>\r\n                  <p>text_bold</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons text_caps-small\"></i>\r\n                  <p>text_caps-small</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"gestures\">\r\n          <h2>Touch Gestures</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons gestures_tap-01\"></i>\r\n                  <p>gestures_tap-01</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"transportation\">\r\n          <h2>Transportation</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons transportation_air-baloon\"></i>\r\n                  <p>transportation_air-baloon</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons transportation_bus-front-12\"></i>\r\n                  <p>transportation_bus-front-12</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"travel\">\r\n          <h2>Travel</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons travel_info\"></i>\r\n                  <p>travel_info</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons travel_istanbul\"></i>\r\n                  <p>travel_istanbul</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"interface\">\r\n          <h2>User Interface</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_bell-53\"></i>\r\n                  <p>ui-1_bell-53</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_calendar-60\"></i>\r\n                  <p>ui-1_calendar-60</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_check\"></i>\r\n                  <p>ui-1_check</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_lock-circle-open\"></i>\r\n                  <p>ui-1_lock-circle-open</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_send\"></i>\r\n                  <p>ui-1_send</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\r\n                  <p>ui-1_settings-gear-63</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_simple-add\"></i>\r\n                  <p>ui-1_simple-add</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_simple-delete\"></i>\r\n                  <p>ui-1_simple-delete</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n                  <p>ui-1_simple-remove</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_zoom-bold\"></i>\r\n                  <p>ui-1_zoom-bold</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-2_chat-round\"></i>\r\n                  <p>ui-2_chat-round</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-2_favourite-28\"></i>\r\n                  <p>ui-2_favourite-28</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-2_like\"></i>\r\n                  <p>ui-2_like</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-2_settings-90\"></i>\r\n                  <p>ui-2_settings-90</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-2_time-alarm\"></i>\r\n                  <p>ui-2_time-alarm</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_email-85\"></i>\r\n                  <p>ui-1_email-85</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"users\">\r\n          <h2>Users</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons users_circle-08\"></i>\r\n                  <p>users_circle-08</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons users_single-02\"></i>\r\n                  <p>users_single-02</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "w1at":
/*!**************************************************!*\
  !*** ./src/app/examples/examples.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtcGxlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "xFnX":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/weather/weather.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container_weather\">\r\n    <div id=\"divWeatherMain\" style=\"visibility: {{Visibility}};\">\r\n        <!--\r\n        <div *ngIf=\"WeatherData.isDay\" class=\"weatherWidgetRow\">\r\n            <i class=\"preview\"></i>\r\n        </div>\r\n        <div *ngIf=\"!WeatherData.isDay\" class=\"weatherWidgetRow\">\r\n            <i class=\"preview\"></i>\r\n        </div>\r\n        <div class=\"weatherWidgetRow cloudDiv\">\r\n            <i class=\"fas fa-cloud fa-3x cloud\"></i>\r\n        </div>\r\n        -->\r\n        <div class=\"preview\" style=\"background-image: url('../../assets/img/weathery/weather-api/animated/{{getWeatherType()}}.svg');\"></div>\r\n        <div class=\"weatherWidgetRow\" style=\"font-size: 12px;margin-top: 5px;\">{{WeatherData.weatherDescription}}</div>\r\n        <div class=\"weatherWidgetRow\" style=\"font-size: 32px;margin-top: 5px;\">{{WeatherData.temp_celcius}}°</div>\r\n        <div class=\"weatherWidgetRow\" style=\"font-size: 12px;\">{{WeatherData.temp_min}}° / {{WeatherData.temp_max}}°</div>\r\n        <div class=\"weatherWidgetRow\" style=\"font-size: 12px;\">Feels Like: {{WeatherData.temp_feels_like}}°</div>\r\n        <div class=\"weatherWidgetRow\" style=\"font-size: 25px;margin-top: 10px;\">{{WeatherData.name}}</div>\r\n        <div class=\"weatherWidgetRow\" style=\"font-size: 12px;\">Humidity: {{WeatherData.main.humidity}}%</div>\r\n        <div class=\"weatherWidgetRow\" style=\"font-size: 12px;\">\r\n            <audio controls autoplay controls=\"controls\" loop=\"loop\" src=\"../../assets/sound/{{WeatherTypeM}}.mp3\">\r\n                <code>audio</code>\r\n            </audio>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "xQKc":
/*!*******************************************************!*\
  !*** ./src/app/examples/profile/profile.component.ts ***!
  \*******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "q3QT");
/* harmony import */ var _profile_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component.scss */ "zXGc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rellax */ "HbP6");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_4__);





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.zoom = 14;
        this.lat = 44.445248;
        this.lng = 26.099672;
        this.styles = [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }];
        this.data = new Date();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_4__('.rellax-header');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('profile-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('profile-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    ProfileComponent.ctorParameters = function () { return []; };
    ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-profile',
            template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "ymkF":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/searchbar/searchbar.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"page-header\">\r\n    <div class=\"page-header-image\" [ngStyle]=\"{'background-image': 'url(' + setBackgroundImage() + ')'}\"></div>\r\n    <div class=\"container\">\r\n       <!--<div class=\"logo-container\">\r\n            <img class=\"imglogo\" src=\"assets/img/weathery/logo2.png\" alt=\"\" height=\"228\">\r\n        </div>-->\r\n        <div class=\"logo-text\">Weathery</div>\r\n        <form autocomplete=\"off\" class=\"form\"  (ngSubmit)=\"rechercheVille(nomVille)\">\r\n            <div class=\"content\">\r\n                <div class=\"input-group form-group-no-border\" >\r\n                    <label for=\"input\"></label>\r\n                    <input type=\"text\"\r\n                           class=\"form-control\"\r\n                           name=\"nomVille\"\r\n                           [(ngModel)]=nomVille required\r\n                           placeholder=\"Saisir la ville...\"\r\n                           list=\"datalist\"\r\n                           autocomplete=\"off\"\r\n                           id=\"input\"\r\n                           (input)=\"requeteVille(nomVille)\"\r\n                    >\r\n                    <datalist id=\"datalist\">\r\n                        <option *ngFor=\"let c of tabVilles\" [value]=\"c\">\r\n                    </datalist>\r\n                </div>\r\n            </div>\r\n            <div class=\"footer text-center\">\r\n                <button  class=\"btn btn-round btn-lg [disabled]=!searchForm.valid\" >Go</button>\r\n            </div>\r\n        </form>\r\n        <app-weather></app-weather>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zRkE":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg bg-primary fixed-top navbar-transparent\" color-on-scroll=\"500\">\r\n    <div class=\"container\">\r\n      <div class=\"dropdown button-dropdown\">\r\n        <div ngbDropdown>\r\n          <a class=\"dropdown-toggle\" ngbDropdownToggle>\r\n              <span class=\"button-bar\"></span>\r\n              <span class=\"button-bar\"></span>\r\n              <span class=\"button-bar\"></span>\r\n          </a>\r\n           <div ngbDropdownMenu>\r\n             <a class=\"dropdown-header\">Dropdown header</a>\r\n             <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n             <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n             <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n             <div class=\"dropdown-divider\"></div>\r\n             <a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n             <div class=\"dropdown-divider\"></div>\r\n             <a class=\"dropdown-item\" href=\"#\">One more separated link</a>\r\n           </div>\r\n         </div>\r\n      </div>\r\n        <div class=\"navbar-translate\">\r\n            <a class=\"navbar-brand\" [routerLink]=\"['/index']\" placement=\"bottom\" ngbTooltip=\"Designed by Invision. Coded by Creative Tim\">\r\n                Now Ui Kit\r\n            </a>\r\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\r\n                <span class=\"navbar-toggler-bar bar1\"></span>\r\n                <span class=\"navbar-toggler-bar bar2\"></span>\r\n                <span class=\"navbar-toggler-bar bar3\"></span>\r\n            </button>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" data-nav-image=\"assets/img/blurred-image-1.jpg\" data-color=\"orange\">\r\n            <ul class=\"navbar-nav ml-auto\">\r\n              <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" href=\"https://www.creative-tim.com/product/now-ui-kit-angular\" target=\"_blank\">\r\n                      <i class=\"now-ui-icons arrows-1_cloud-download-93\"></i>\r\n                      <p>Download</p>\r\n                  </a>\r\n              </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"https://creativetimofficial.github.io/now-ui-kit-angular/documentation/tutorial\" target=\"_blank\">\r\n                      <i class=\"now-ui-icons files_paper\"></i>\r\n                      <p>Documentation</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link btn btn-neutral\" href=\"https://www.creative-tim.com/product/now-ui-kit-pro-angular\" target=\"_blank\">\r\n                        <i class=\"now-ui-icons arrows-1_share-66\"></i>\r\n                        <p>Upgrade to PRO</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Twitter\" data-placement=\"bottom\" href=\"https://twitter.com/CreativeTim\" target=\"_blank\">\r\n                    <i class=\"fab fa-twitter\"></i>\r\n                    <p class=\"d-lg-none d-xl-none\">Twitter</p>\r\n                  </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" rel=\"tooltip\" title=\"Like us on Facebook\" data-placement=\"bottom\" href=\"https://www.facebook.com/CreativeTim\" target=\"_blank\">\r\n                    <i class=\"fab fa-facebook-square\"></i>\r\n                    <p class=\"d-lg-none d-xl-none\">Facebook</p>\r\n                  </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Instagram\" data-placement=\"bottom\" href=\"https://www.instagram.com/CreativeTimOfficial\" target=\"_blank\">\r\n                    <i class=\"fab fa-instagram\"></i>\r\n                    <p class=\"d-lg-none d-xl-none\">Instagram</p>\r\n                  </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/*!

=========================================================
* Now UI Kit Angular - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-angular
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ "zXGc":
/*!*********************************************************!*\
  !*** ./src/app/examples/profile/profile.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map