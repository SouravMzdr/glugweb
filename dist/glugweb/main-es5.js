function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var routes = [// {path:'',redirectTo:'home',pathMatch:'full'},
    {
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'past-events',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | past-events-past-events-module */
        "past-events-past-events-module").then(__webpack_require__.bind(null,
        /*! ./past-events/past-events.module */
        "./src/app/past-events/past-events.module.ts")).then(function (m) {
          return m.PastEventsModule;
        });
      }
    }, {
      path: "**",
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ui/navbar/navbar.component */
    "./src/app/ui/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ui/footer/footer.component */
    "./src/app/ui/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'glugweb';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        }
      },
      directives: [_ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n    max-width: 100%;\n    overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0QiIsImZpbGUiOiIuLi8uLi9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHkge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./ui/navbar/navbar.component */
    "./src/app/ui/navbar/navbar.component.ts");
    /* harmony import */


    var _home_intro_intro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/intro/intro.component */
    "./src/app/home/intro/intro.component.ts");
    /* harmony import */


    var _home_services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/services/services.component */
    "./src/app/home/services/services.component.ts");
    /* harmony import */


    var _home_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/projects/projects.component */
    "./src/app/home/projects/projects.component.ts");
    /* harmony import */


    var _home_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/timeline/timeline.component */
    "./src/app/home/timeline/timeline.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./ui/footer/footer.component */
    "./src/app/ui/footer/footer.component.ts");
    /* harmony import */


    var _home_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./home/about/about.component */
    "./src/app/home/about/about.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _home_team_team_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./home/team/team.component */
    "./src/app/home/team/team.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js"); // import { PortfolioComponent } from './home/portfolio/portfolio.component';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _home_intro_intro_component__WEBPACK_IMPORTED_MODULE_5__["IntroComponent"], _home_services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"], _home_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"], _home_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_8__["TimelineComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"], _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _home_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _home_team_team_component__WEBPACK_IMPORTED_MODULE_13__["TeamComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _home_intro_intro_component__WEBPACK_IMPORTED_MODULE_5__["IntroComponent"], _home_services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"], _home_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"], _home_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_8__["TimelineComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"], _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _home_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _home_team_team_component__WEBPACK_IMPORTED_MODULE_13__["TeamComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons */
    "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js"); // import { faInstagram } from '@fortawesome/free-solid-svg-icons';
    // import { fa } from '@fortawesome/


    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);

        this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLinkedin"];
        this.faFacebook = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFacebook"];
        this.faInstagram = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInstagram"];
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 22,
      vars: 3,
      consts: [["id", "contact", 1, "page-section"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-12", "text-center"], [1, "section-heading", "text-uppercase", 2, "font-family", "'Dosis', sans-serif", "font-weight", "500"], [1, "section-subheading", "text-muted"], [1, "container", "social"], [1, "row", "align-items-end", "justify-content-center", 2, "height", "5rem"], [1, "col", "align-self-center", "text-center"], [1, "social-buttons"], ["href", "https://instagram.com/jecglug?igshid=a41h882poiuf", "target", "_blank", 1, "social-links"], [3, "icon"], [1, "col", "text-center"], ["href", "https://www.facebook.com/jec.glug", "target", "_blank", 1, "social-links"], ["href", "#", 1, "social-links"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Connect with us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "We are available on Instagram and Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "fa-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "fa-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "fa-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faInstagram);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faFacebook);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faLinkedin);
        }
      },
      directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]],
      styles: ["fa-icon[_ngcontent-%COMP%]{\n    color: rgb(240, 240, 240);\n}\nsection#contact[_ngcontent-%COMP%] {\n    background-color: #212529;\n    background-image: url('map-image.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    padding-top: 50px;\n    padding-bottom: 10px;\n    }\nsection#contact[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]{\n        padding-top: 50px;\n        padding-bottom: 10px;\n    }\nsection#contact[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%] {\n    color: #fff;\n    }\n.social[_ngcontent-%COMP%]{\n        padding-top: 100px;\n    }\nul.social-buttons[_ngcontent-%COMP%] {\n    margin-bottom: 50;\n    margin-left: -40px;\n    font-size: 40px ;\n    -webkit-transition:  0.3s;\n    transition:  0.3s;\n    }\nul.social-buttons[_ngcontent-%COMP%]:hover {\n        font-size: 43px ;\n        color: #fed136;        \n\n    }\nul.social-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 20px;\n    line-height: 50px;\n    display: inline-block;\n    width: 50px;\n    height: 50px;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n    color: white;\n    border-radius: 100%;\n    outline: none;\n    background-color: #212529;\n    }\nul.social-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, ul.social-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, ul.social-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background-color: #fed136;\n    }\n.fas[_ngcontent-%COMP%]{\n        color: white;\n    }\n.fas[_ngcontent-%COMP%]:hover{\n        color: #fed136;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsc0NBQXVEO0lBQ3ZELDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQjtBQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLG9CQUFvQjtJQUN4QjtBQUVBO0lBQ0EsV0FBVztJQUNYO0FBRUE7UUFDSSxrQkFBa0I7SUFDdEI7QUFFQTtJQUNBLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHlCQUFpQjtJQUFqQixpQkFBaUI7SUFDakI7QUFFQTtRQUNJLGdCQUFnQjtRQUNoQixjQUFjOztJQUVsQjtBQUVBO0lBQ0EsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWiw0QkFBb0I7SUFBcEIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QjtBQUVBO0lBQ0EseUJBQXlCO0lBQ3pCO0FBRUE7UUFDSSxZQUFZO0lBQ2hCO0FBRUE7UUFDSSxjQUFjO0lBQ2xCIiwiZmlsZSI6Ii4uLy4uL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZmEtaWNvbntcbiAgICBjb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xufVxuc2VjdGlvbiNjb250YWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvbWFwLWltYWdlLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgXG4gICAgc2VjdGlvbiNjb250YWN0IC5wYWdlLXNlY3Rpb257XG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICBzZWN0aW9uI2NvbnRhY3QgLnNlY3Rpb24taGVhZGluZyB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgLnNvY2lhbHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIH1cbiAgICBcbiAgICB1bC5zb2NpYWwtYnV0dG9ucyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTA7XG4gICAgbWFyZ2luLWxlZnQ6IC00MHB4O1xuICAgIGZvbnQtc2l6ZTogNDBweCA7XG4gICAgdHJhbnNpdGlvbjogIDAuM3M7XG4gICAgfVxuXG4gICAgdWwuc29jaWFsLWJ1dHRvbnM6aG92ZXIge1xuICAgICAgICBmb250LXNpemU6IDQzcHggO1xuICAgICAgICBjb2xvcjogI2ZlZDEzNjsgICAgICAgIFxuXG4gICAgfVxuICAgIFxuICAgIHVsLnNvY2lhbC1idXR0b25zIGxpIGEge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcbiAgICB9XG5cbiAgICB1bC5zb2NpYWwtYnV0dG9ucyBsaSBhOmFjdGl2ZSwgdWwuc29jaWFsLWJ1dHRvbnMgbGkgYTpmb2N1cywgdWwuc29jaWFsLWJ1dHRvbnMgbGkgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZDEzNjtcbiAgICB9XG5cbiAgICAuZmFze1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLmZhczpob3ZlcntcbiAgICAgICAgY29sb3I6ICNmZWQxMzY7XG4gICAgfVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/about/about.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/home/about/about.component.ts ***!
    \***********************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppHomeAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! aos */
    "./node_modules/aos/dist/aos.js");
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          aos__WEBPACK_IMPORTED_MODULE_1__["init"]({
            easing: 'ease',
            duration: 1000
          });
          aos__WEBPACK_IMPORTED_MODULE_1__["init"]({// disable: function () {
            //   var maxWidth = 800;
            //   return window.innerWidth < maxWidth;
            // }
          });
        }
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 26,
      vars: 0,
      consts: [["id", "about", 1, "about"], [1, "container", "center"], [1, "row", 2, "padding-bottom", "50px"], [1, "container"], ["href", "#registration-form"], ["alt", "Click here to register for orientation program", "src", "../../../assets/img/registration banner.png", 1, "img-rounded", 2, "height", "auto", "max-width", "100%"], [1, "row"], ["data-aos", "fade-right", "data-aos-anchor-placement", "top-center", 1, "col-12", "col-md-5", "text-centre", "text-md-right"], [1, "section-heading"], [1, "display-4"], ["data-aos", "fade-up", "data-aos-anchor-placement", "top-center", 1, "col-12", "col-md-1", "vl", "hide-mobile"], ["data-aos", "fade-left", "data-aos-anchor-placement", "top-center", 1, "col-12", "col-md-5", "d-flex", "justify-content-center", "hide-mobile", "text-left"], ["src", "../../../assets/img/glug logo scale.png", "alt", "", 1, "img-fluid"], [1, "col-12", "text-center", 2, "font-family", "Dancing Script"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "What Is GLUG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Jorhat Engineering College GNU Linux Users Group is a community of enthusiastic people passionate about Computers and Technology. The main objective of the group is to promote and create an environment where people can share and work on new ideas and help each other learn and grow. We at Jec GLUG believe in the freedom of knowledge and thus 'Free As In Freedom' is our proud moto. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Interested in Tech? We are here for you! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".about[_ngcontent-%COMP%]{\n    padding: 70px 0;\n}\nh4[_ngcontent-%COMP%]{\n    font-family: 'Dancing Script';\n    font-weight: 1000;\n    \n}\n.img-fluid[_ngcontent-%COMP%]{\n    \n    height: auto;\n    max-width:100%\n}\n.vl[_ngcontent-%COMP%] {\n    border-right: 6px solid rgb(107, 107, 107);\n    height: 300px;\n    margin-left: 0px;\n    margin-right: 30px;\n  }\n@media only screen and (max-width: 800px) {\n    .hide-mobile[_ngcontent-%COMP%] {\n        display: none;    \n    }\n    .about[_ngcontent-%COMP%]{\n        padding-top: 50px;\n    }\n    .img-fluid[_ngcontent-%COMP%]{\n        display: none;\n    }\n}\n.center[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLDBDQUEwQztBQUM5QztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWjtBQUNKO0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7QUFFRjtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QiIsImZpbGUiOiIuLi9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0e1xuICAgIHBhZGRpbmc6IDcwcHggMDtcbn1cbmg0e1xuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xuICAgIC8qIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsgKi9cbn1cblxuLmltZy1mbHVpZHtcbiAgICAvKiBtYXgtaGVpZ2h0OiAzMDBweDsgKi9cbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWF4LXdpZHRoOjEwMCVcbn1cblxuLnZsIHtcbiAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCByZ2IoMTA3LCAxMDcsIDEwNyk7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgfVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgLmhpZGUtbW9iaWxlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTsgICAgXG4gICAgfVxuICAgIC5hYm91dHtcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgfVxuICAgIC5pbWctZmx1aWR7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4uY2VudGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _intro_intro_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./intro/intro.component */
    "./src/app/home/intro/intro.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/home/about/about.component.ts");
    /* harmony import */


    var _services_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/services.component */
    "./src/app/home/services/services.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/home/projects/projects.component.ts");
    /* harmony import */


    var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./timeline/timeline.component */
    "./src/app/home/timeline/timeline.component.ts");
    /* harmony import */


    var _team_team_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./team/team.component */
    "./src/app/home/team/team.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../contact/contact.component */
    "./src/app/contact/contact.component.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 8,
      vars: 0,
      consts: [["id", "page-top"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-intro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-about");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-timeline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_intro_intro_component__WEBPACK_IMPORTED_MODULE_1__["IntroComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"], _services_services_component__WEBPACK_IMPORTED_MODULE_3__["ServicesComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_5__["TimelineComponent"], _team_team_component__WEBPACK_IMPORTED_MODULE_6__["TeamComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9ob21lLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/intro/intro.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/home/intro/intro.component.ts ***!
    \***********************************************/

  /*! exports provided: IntroComponent */

  /***/
  function srcAppHomeIntroIntroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntroComponent", function () {
      return IntroComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! aos */
    "./node_modules/aos/dist/aos.js");
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var IntroComponent = /*#__PURE__*/function () {
      function IntroComponent() {
        _classCallCheck(this, IntroComponent);

        // public req =  "http://coderscommunity.herokuapp.com/"
        this.faAngleDoubleDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faAngleDoubleDown"];
      }

      _createClass(IntroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          Object(aos__WEBPACK_IMPORTED_MODULE_1__["init"])({
            easing: 'ease',
            duration: 2000
          });
          Object(aos__WEBPACK_IMPORTED_MODULE_1__["init"])({// disable: function () {
            //   var maxWidth = 800;
            //   return window.innerWidth < maxWidth;
            // }
          });
        }
      }]);

      return IntroComponent;
    }();

    IntroComponent.ɵfac = function IntroComponent_Factory(t) {
      return new (t || IntroComponent)();
    };

    IntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IntroComponent,
      selectors: [["app-intro"]],
      decls: 22,
      vars: 2,
      consts: [[1, "vheader"], [1, "overlay"], [1, "container", 2, "height", "inherit"], [1, "row", "align-items-end", "justify-content-center"], [1, "col-12", "text-center"], [3, "icon"], ["id", "videobg", "playsinline", "playsinline", "autoplay", "autoplay", "muted", "muted", "loop", "loop"], ["src", "../../../assets/videos/glug compress 3.webm", "type", "video/mp4"], [1, "intro"], [1, "row"], [1, "col-12", "xs-12", "align-self-start", 2, "display", "none"], ["data-aos", "zoom-in", "data-aos-anchor-placement", "top-bottom", 1, "col-12", "xs-12", "align-self-center", "text-center", 2, "margin-bottom", "-45vh"], ["src", "../../../assets/img/glug logo scale.png", "loading", "eager", "alt", "", 1, "img-fluid"], [1, "col-12", "xs-12", "align-self-end", "text-center"]],
      template: function IntroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Scroll Down to get started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "fa-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "video", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "source", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Scroll Down ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "fa-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faAngleDoubleDown);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faAngleDoubleDown);
        }
      },
      directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]],
      styles: [".vheader[_ngcontent-%COMP%] {\n    position: relative;\n    background-color: black;\n    height: 85vh;\n    min-height: 25rem;\n    width: 100%;\n    overflow: hidden;\n    }\n    \n    .vheader[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    min-width: 100%;\n    min-height: 100%;\n    width: auto;\n    height: auto;\n    z-index: 0;\n    -webkit-transform: translateX(-50%) translateY(-50%);\n    transform: translateX(-50%) translateY(-50%);\n    }\n    \n    .vheader[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 1;\n    }\n    \n    .vheader[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    height: 100%;\n    width: 100%;\n    background-color: black;\n    opacity: 0.5;\n    z-index: 2;\n    color: white;\n    }\n    \n    \n    \n    .hoverWrapper[_ngcontent-%COMP%]:hover   #hoverShow1[_ngcontent-%COMP%] {\n display: block;\n}\n    \n    .videoBox[_ngcontent-%COMP%]{\n  float: left;\n}\n    \n    .videoOverlay[_ngcontent-%COMP%]{\n  position:absolute;\n  float:left;\n  width: 100%;\n  height: 120%;\n    background-color:rgba(255, 255, 255, 0.17);\n    z-index:0;\n    \n}\n    \n    .hoverWrapper[_ngcontent-%COMP%]:hover   .hoverShow1[_ngcontent-%COMP%] {\n  display: block;\n }\n    \n    .hoverWrapper[_ngcontent-%COMP%]:hover   .default[_ngcontent-%COMP%] {\n  display: none;\n }\n    \n    .hoverShow1[_ngcontent-%COMP%] {\n display: none;\n position: absolute;\n \n width: 300px;\n height: 300px;\n left: 0px;\n top: 0px;\n}\n    \n    .intro[_ngcontent-%COMP%]{\n  display: none;\n  position: relative;\n  background-color: black;\n  height: 75vh;\n  min-height: 25rem;\n  width: 100%;\n  overflow: hidden;\n  color: white;\n  background-image: url('grid-min.png');\n}\n    \n    .row[_ngcontent-%COMP%]{\n  color: white;\n  height: 75vh;\n}\n    \n    h1[_ngcontent-%COMP%]{\n  font-size: 65px;\n}\n    \n    h2[_ngcontent-%COMP%]{\n  font-size: 45px;\n}\n    \n    .img-fluid[_ngcontent-%COMP%]{\n  height: 35vh;\n}\n    \n    \n    \n    \n    \n    \n    \n    \n    \n    @media (min-width: 768px) {\n  \n    \n  }\n    \n    @media only screen and (max-width: 600px) {\n    .vheader[_ngcontent-%COMP%] {\n      \n      display: none;\n    }\n\n    .intro[_ngcontent-%COMP%]{\n      display: block;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2ludHJvL2ludHJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEI7O0lBRUE7SUFDQSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUdWLG9EQUFvRDtJQUNwRCw0Q0FBNEM7SUFDNUM7O0lBRUE7SUFDQSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWOztJQUVBO0lBQ0Esa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1o7O0lBQ0o7Ozs7Ozs7Ozs7Ozs7O0VBY0U7O0lBR0U7Q0FDSCxjQUFjO0FBQ2Y7O0lBRUE7RUFDRSxXQUFXO0FBQ2I7O0lBQ0E7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0lBQ1YsMENBQTBDO0lBQzFDLFNBQVM7SUFDVDt5QkFDcUI7QUFDekI7O0lBR0E7RUFDRSxjQUFjO0NBQ2Y7O0lBQ0E7RUFDQyxhQUFhO0NBQ2Q7O0lBRUQ7Q0FDQyxhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLCtCQUErQjtDQUMvQixZQUFZO0NBQ1osYUFBYTtDQUNiLFNBQVM7Q0FDVCxRQUFRO0FBQ1Q7O0lBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHFDQUF5RDtBQUMzRDs7SUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0lBRUE7RUFDRSxlQUFlO0FBQ2pCOztJQUVBO0VBQ0UsZUFBZTtBQUNqQjs7SUFFQTtFQUNFLFlBQVk7QUFDZDs7SUFDRTs7dUJBRXFCOztJQUNuQjs7OzZCQUd5Qjs7SUFDekI7Ozs7O0lBS0E7O0lBRUY7Ozs7Ozs7Ozs7Ozs7O0tBY0c7O0lBRUg7O0lBRUU7Ozs7Ozs7Ozs7Ozs7Ozs7O09BaUJHO0VBQ0w7O0lBRUE7SUFDRTtNQUNFLGlDQUFpQztNQUNqQyxhQUFhO0lBQ2Y7O0lBRUE7TUFDRSxjQUFjO0lBQ2hCO0VBQ0YiLCJmaWxlIjoiLi4vaW50cm8vaW50cm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAudmhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGhlaWdodDogODV2aDtcbiAgICBtaW4taGVpZ2h0OiAyNXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbiAgICBcbiAgICAudmhlYWRlciB2aWRlbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgei1pbmRleDogMDtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgIH1cbiAgICBcbiAgICAudmhlYWRlciAuY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICB9XG4gICAgXG4gICAgLnZoZWFkZXIgLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4vKiBcbiAgICAudmhlYWRlciAub3ZlcmxheSAuZGVmYXVsdHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH0gICAgXG4gICAgLnZoZWFkZXIgLm92ZXJsYXkgLnNob3ctaG92ZXJ7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC52aGVhZGVyIC5vdmVybGF5IC5kZWZhdWx0OmhvdmVye1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9ICAgIFxuICAgIC52aGVhZGVyIC5vdmVybGF5IC5zaG93LWhvdmVyOmhvdmVye1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICovXG5cblxuICAgIC5ob3ZlcldyYXBwZXI6aG92ZXIgI2hvdmVyU2hvdzEge1xuIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udmlkZW9Cb3h7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLnZpZGVvT3ZlcmxheXtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGZsb2F0OmxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTcpO1xuICAgIHotaW5kZXg6MDtcbiAgICAvKiBib3gtc2hhZG93OiBpbnNldCAwIDAgMjAwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xuICAgIGZpbHRlcjogYmx1cigxMHB4KTsgKi9cbn1cblxuXG4uaG92ZXJXcmFwcGVyOmhvdmVyIC5ob3ZlclNob3cxIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gfVxuIC5ob3ZlcldyYXBwZXI6aG92ZXIgLmRlZmF1bHQge1xuICBkaXNwbGF5OiBub25lO1xuIH1cbiBcbi5ob3ZlclNob3cxIHtcbiBkaXNwbGF5OiBub25lO1xuIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwOyAqL1xuIHdpZHRoOiAzMDBweDtcbiBoZWlnaHQ6IDMwMHB4O1xuIGxlZnQ6IDBweDtcbiB0b3A6IDBweDtcbn1cbiAgICBcbi5pbnRyb3tcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiA3NXZoO1xuICBtaW4taGVpZ2h0OiAyNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2dyaWQtbWluLnBuZycpO1xufVxuXG4ucm93e1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNzV2aDtcbn1cblxuaDF7XG4gIGZvbnQtc2l6ZTogNjVweDtcbn1cblxuaDJ7XG4gIGZvbnQtc2l6ZTogNDVweDtcbn1cblxuLmltZy1mbHVpZHtcbiAgaGVpZ2h0OiAzNXZoO1xufVxuICAvKiB2aWRlbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTsgKi9cbiAgICAvKiAtby1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICBmaWx0ZXI6IGJsdXIoMXB4KTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpOyAqL1xuICAgIC8qIHotaW5kZXg6IC0xO1xuICB9XG4gIHZpZGVvOjotd2Via2l0LW1lZGlhLWNvbnRyb2xzIHtcbiAgICBkaXNwbGF5Om5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAgKi9cbiAgXG4gIC8qIGhlYWRlci5tYXN0aGVhZCAuaW50cm8tdGV4dCAuaW50cm8tbGVhZC1pbiB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnRHJvaWQgU2VyaWYnLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLCAnTm90byBDb2xvciBFbW9qaSc7XG4gIH1cbiAgXG4gIGhlYWRlci5tYXN0aGVhZCAuaW50cm8tdGV4dCAuaW50cm8taGVhZGluZyB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLCAnTm90byBDb2xvciBFbW9qaSc7XG4gIH0gKi9cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBcbiAgICAvKiBoZWFkZXIubWFzdGhlYWQgLmludHJvLXRleHQge1xuICAgICAgcGFkZGluZy10b3A6IDMwMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xuICAgIH1cbiAgICBoZWFkZXIubWFzdGhlYWQgLmludHJvLXRleHQgLmludHJvLWxlYWQtaW4ge1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgZm9udC1mYW1pbHk6ICdEcm9pZCBTZXJpZicsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsICdOb3RvIENvbG9yIEVtb2ppJztcbiAgICB9XG4gICAgaGVhZGVyLm1hc3RoZWFkIC5pbnRyby10ZXh0IC5pbnRyby1oZWFkaW5nIHtcbiAgICAgIGZvbnQtc2l6ZTogNzVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBsaW5lLWhlaWdodDogNzVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLCAnTm90byBDb2xvciBFbW9qaSc7XG4gICAgfSAqL1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC52aGVhZGVyIHtcbiAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTsgKi9cbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmludHJve1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG4gIFxuICJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-intro',
          templateUrl: './intro.component.html',
          styleUrls: ['./intro.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/projects/projects.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/home/projects/projects.component.ts ***!
    \*****************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppHomeProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProjectsComponent = /*#__PURE__*/function () {
      function ProjectsComponent() {
        _classCallCheck(this, ProjectsComponent);
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)();
    };

    ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["app-projects"]],
      decls: 125,
      vars: 0,
      consts: [["id", "portfolio", 1, "bg-light", "page-section"], [1, "container", 2, "height", "inherit"], [1, "row", "justify-content-center"], [1, "col-12", "text-center"], [1, "section-heading", 2, "font-family", "'Dosis', sans-serif", "font-weight", "500"], [1, "text-center", "text-muted", "section-subheading"], [1, "row", "justify-content-center", "text-center", 2, "margin-left", "-10px"], [1, "col-sm-4", "mb-3"], [1, "card", "card-flip"], [1, "card-front", "text-white"], [1, "card-body"], ["src", "../../../assets/img/projects/coderscommunity sc.png", "alt", "", 1, "img-fluid"], [1, "card-back"], [1, "card-title"], [1, "card-text"], ["type", "button", "data-toggle", "modal", "data-target", "#exampleModalLong1", 1, "btn", "btn-outline-secondary"], ["src", "../../../assets/img/projects/ai flappy bird.jpeg", "alt", "", 1, "img-fluid"], ["type", "button", "data-toggle", "modal", "data-target", "#exampleModalLong2", 1, "btn", "btn-outline-secondary"], ["src", "../../../assets/img/projects/text encrypt.png", "alt", "", 1, "img-fluid"], ["type", "button", "data-toggle", "modal", "data-target", "#exampleModalLong3", 1, "btn", "btn-outline-secondary"], [2, "font-family", "Dancing Script", "padding-top", "20px"], ["id", "exampleModalLong1", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLongTitle", "aria-hidden", "true", 1, "modal", "fade", "config"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLongTitle", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "container", "d-flex", "justify-content-center"], [1, "btn", "btn-outline-secondary"], ["href", "https://peaceful-murdock-0147ea.netlify.app/", "target", "_blank"], [1, "modal-footer"], ["id", "exampleModalLong2", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLongTitle", "aria-hidden", "true", 1, "modal", "fade"], ["href", "https://github.com/rupam2001/FlappyBirdAI", "target", "_blank"], ["id", "exampleModalLong3", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLongTitle", "aria-hidden", "true", 1, "modal", "fade"], ["href", "https://github.com/PijushBhuyan/AES-Encrption-Using-Python", "target", "_blank"]],
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "FEATURED PROJECTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Take a look at some of the cool projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "CodersCommunity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Question and Answer Platform for your coding and tech queries. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Click to know more ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "AI flappy birds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "The birds get better and unbeatable after each generation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Click to know more ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Text Encryptor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Python based text encryptor and decrytor ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Click to know more ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Want to get your Projects featured? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Contact Us!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h5", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "CodersCommunity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " CodersCommunity is a Online Q&A Platform where you can ask your queries and someone will answer. You can also help out others by answering there questions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Creator : Sourav Mazumdar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Click here to visit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h5", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "AI flappy birds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Flappy bird is a very popular game where the bird has to fly between the pips without touching them. In this project there are 100 birds in each generation. The birds with highest score will get qualified to reproduce and give birth to the next generation which is better than the previous one.After some generations the birds learn to avoid the pips and becomes unbeatable.It is a basic project of Reinforcement Learning with Genetic Algorithm. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Creator : Rupamjyoti Das ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Click here to visit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h5", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Text Encryptor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " In this project we have tried to implement a working version of 128 bit AES encryption in python from scratch. The user enters a 16 bit(will be removing memory limit soon) plain text and a 16 bit key and the program outputs a equivalent cipher text ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Team : Pijush Bhuyan ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Bhaskar Jyoti Bhattacharya ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Aritra Kaushik ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Souvik Baruah ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " Click here to visit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".section-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n  \n  font-weight: 900;\n}\n\n.section-subheading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n  font-weight: 400;\n  font-size: 16px;\n  font-style: italic;\n  font-family: 'Droid Serif'\n}\n\n.card[_ngcontent-%COMP%]{\n    height: 20rem;\n    -webkit-perspective: 1000px;\n            perspective: 1000px;\n    border: 0;\n    margin: 0;\n    padding: 0;\n    background: transparent;\n    \n    height: inherit;\n\n     \n}\n\n\n\n.card-flip[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    -webkit-transition: -webkit-transform 500ms;\n    transition: -webkit-transform 500ms;\n    transition: transform 500ms;\n    transition: transform 500ms, -webkit-transform 500ms;\n    -webkit-transition-timing-function: linear;\n            transition-timing-function: linear;\n    width: 100%;\n    height: inherit;\n    margin-bottom: 15px;\n    display: -webkit-box;\n    display: flex;\n  }\n\n.card-front[_ngcontent-%COMP%] {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n  }\n\n.card-back[_ngcontent-%COMP%] {\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n    position: absolute;\n    top: 0;\n    background-color: black;\n    color: white;\n  }\n\n.card-back[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{\n    border: 2px solid #fec503;\n    margin: 10px;\n  }\n\n\n\n.card-back[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{\n    color: #fec503;\n    font-family: 'sans-serif';\n  }\n\n.card-flip[_ngcontent-%COMP%]:hover   .card-front[_ngcontent-%COMP%] {\n    -webkit-transform: rotateY(-180deg);\n            transform: rotateY(-180deg);\n  }\n\n.card-flip[_ngcontent-%COMP%]:hover   .card-back[_ngcontent-%COMP%] {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n  }\n\n.modal[_ngcontent-%COMP%]{\n    z-index: 10002;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQjtBQUNGOztBQUNBO0lBQ0ksYUFBYTtJQUNiLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFNBQVM7SUFDVCxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixlQUFlOztLQUVkLGdEQUFnRDtBQUNyRDs7QUFFQTs7Q0FFQzs7QUFJRDtJQUNJLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsMkNBQTJCO0lBQTNCLG1DQUEyQjtJQUEzQiwyQkFBMkI7SUFBM0Isb0RBQTJCO0lBQzNCLDBDQUFrQztZQUFsQyxrQ0FBa0M7SUFDbEMsV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsb0JBQWE7SUFBYixhQUFhO0VBQ2Y7O0FBRUE7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCOztBQUVBO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtFQUNkOztBQUNBOzs7S0FHRzs7QUFFSDtJQUNFLGNBQWM7SUFDZCx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0VBQzdCOztBQUVBO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjs7QUFJQTtJQUNFLGNBQWM7RUFDaEIiLCJmaWxlIjoiLi4vcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uc2VjdGlvbi1oZWFkaW5nIGgxe1xuICAvKiBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JzsgKi9cbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLnNlY3Rpb24tc3ViaGVhZGluZyBoM3tcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtZmFtaWx5OiAnRHJvaWQgU2VyaWYnXG59XG4uY2FyZHtcbiAgICBoZWlnaHQ6IDIwcmVtO1xuICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC8qIHdpZHRoOiA1MHZoOyAqL1xuICAgIGhlaWdodDogaW5oZXJpdDtcblxuICAgICAvKiBSZW1vdmUgdGhpcyBpZiB5b3UgZG9uJ3Qgd2FudCB0aGUgM0QgZWZmZWN0ICovXG59XG5cbi8qXG5mbGlwIGNhcmRcbiovXG5cblxuXG4uY2FyZC1mbGlwID4gZGl2IHtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBcbiAgLmNhcmQtZnJvbnQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgfVxuICBcbiAgLmNhcmQtYmFjayB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAuY2FyZC1iYWNrIC5jYXJkLWJvZHl7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZlYzUwMztcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cbiAgLyogLmNhcmQtYmFjayAuY2FyZC1ib2R5IGJ1dHRvbntcbiAgICBjb2xvcjogICNmZWM1MDM7XG4gICAgXG4gIH0gKi9cblxuICAuY2FyZC1iYWNrIC5jYXJkLXRpdGxle1xuICAgIGNvbG9yOiAjZmVjNTAzO1xuICAgIGZvbnQtZmFtaWx5OiAnc2Fucy1zZXJpZic7XG4gIH1cbiAgXG4gIC5jYXJkLWZsaXA6aG92ZXIgLmNhcmQtZnJvbnQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcbiAgfVxuICAgIFxuICAuY2FyZC1mbGlwOmhvdmVyIC5jYXJkLWJhY2sge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgfVxuXG4gXG5cbiAgLm1vZGFse1xuICAgIHotaW5kZXg6IDEwMDAyO1xuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-projects',
          templateUrl: './projects.component.html',
          styleUrls: ['./projects.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/services/services.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/home/services/services.component.ts ***!
    \*****************************************************/

  /*! exports provided: ServicesComponent */

  /***/
  function srcAppHomeServicesServicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesComponent", function () {
      return ServicesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ServicesComponent = /*#__PURE__*/function () {
      function ServicesComponent() {
        _classCallCheck(this, ServicesComponent);
      }

      _createClass(ServicesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServicesComponent;
    }();

    ServicesComponent.ɵfac = function ServicesComponent_Factory(t) {
      return new (t || ServicesComponent)();
    };

    ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServicesComponent,
      selectors: [["app-services"]],
      decls: 48,
      vars: 0,
      consts: [["id", "services", 1, "page-section", 2, "background-color", "rgb(240, 240, 240)"], [1, "container"], [1, "row"], [1, "col-lg-12", "text-center"], [1, "section-heading", "text-uppercase", 2, "font-family", "'Dosis', sans-serif", "font-weight", "500"], [1, "section-subheading", "text-muted"], [1, "card-container", "column"], [1, "card", "card--dark"], ["href", "#", "onclick", "return false;"], [1, "card--display"], [1, "fa", "fa-child", 2, "color", "red"], [1, "card--hover"], [1, "card--border"], [1, "fa", "fa-bolt", 2, "color", "red"], [1, "fa", "fa-paper-plane-o", 2, "color", "red"]],
      template: function ServicesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Activities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "We have given our best to provide you with every opportunities possible");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Trainings and Classes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Trainings and Classes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " We organise various training and classes on emerging fields in Computer Technology. Sessions on Linux Operating System, cybersecurity, development are a few examples. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Comepetitions and Seminars");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Comepetitions and Seminars");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Various Comepetitions in the field of competitive coding, web development and Seminars are held regularly to provide students with exposure of real world scenerios in the field of Computer Science. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Workshops and bootcamps");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Workshops and bootcamps");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Learning and keeping up with new technologies is very important for anyone in the field Computer Science. Keeping this in mind we organise Workshops and bootcamps on the latest and popular fields of Computer Science. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".service-heading[_ngcontent-%COMP%] {\n    margin: 15px 0;\n    text-transform: none;\n    }\n\n.page-section[_ngcontent-%COMP%]{\n    padding-top: 50px;\n}\n\n@media only screen and (max-width: 800px) {\n    .page-section[_ngcontent-%COMP%]{\n    padding-top: 100px;    \n    }\n  }\n\n.card-container[_ngcontent-%COMP%] {\n  -webkit-box-flex: 300px;\n          flex: 300px;\n  margin: 30px;\n\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  font-weight: bold;\n  position: relative;\n  width: 100%;\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 30px;\n  width: 100%;\n  height: 400px;\n  border: 2px solid black;\n  background: white;\n  text-decoration: none;\n  color: black;\n  display: block;\n  -webkit-transition: 0.25s ease;\n  transition: 0.25s ease;\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  -webkit-transform: translate(-20px, -20px);\n          transform: translate(-20px, -20px);\n  border-color: #5bc0eb;\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .card--display[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .card--hover[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .card--display[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 60px;\n  margin-top: 200px;\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .card--display[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 20px 0 0;\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .card--hover[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .card--hover[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  color: #fec503;\n\n}\n\n\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .card--hover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: normal;\n  line-height: 1.5;\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .card--hover[_ngcontent-%COMP%]   p.link[_ngcontent-%COMP%] {\n  margin: 20px 0 0;\n  font-weight: bold;\n  color: #5bc0eb;\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card--border[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  border: 2px dashed black;\n  z-index: -1;\n}\n\n.card-container[_ngcontent-%COMP%]   .card.card--dark[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  background-color: black;\n  border-color: black;\n}\n\n.card-container[_ngcontent-%COMP%]   .card.card--dark[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .card--hover[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  color: #fde74c;\n}\n\n.Row[_ngcontent-%COMP%] {\n    display: table;\n}\n\n.Column[_ngcontent-%COMP%] {\n    display: table-cell;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCOztBQUVKO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7SUFDQSxrQkFBa0I7SUFDbEI7RUFDRjs7QUFFRjtFQUNFLHVCQUFXO1VBQVgsV0FBVztFQUNYLFlBQVk7O0FBRWQ7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixjQUFjO0VBQ2QsOEJBQXNCO0VBQXRCLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLDBDQUFrQztVQUFsQyxrQ0FBa0M7RUFDbEMscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsY0FBYzs7QUFFaEI7O0FBRUE7OztHQUdHOztBQUNIO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE9BQU87RUFDUCxNQUFNO0VBQ04sd0JBQXdCO0VBQ3hCLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoiLi4vc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXJ2aWNlLWhlYWRpbmcge1xuICAgIG1hcmdpbjogMTVweCAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIH1cblxuLnBhZ2Utc2VjdGlvbntcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5wYWdlLXNlY3Rpb257XG4gICAgcGFkZGluZy10b3A6IDEwMHB4OyAgICBcbiAgICB9XG4gIH1cbiBcbi5jYXJkLWNvbnRhaW5lciB7XG4gIGZsZXg6IDMwMHB4O1xuICBtYXJnaW46IDMwcHg7XG5cbn1cbi5jYXJkLWNvbnRhaW5lciAuY2FyZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNhcmQtY29udGFpbmVyIC5jYXJkIGEge1xuICBwYWRkaW5nOiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IDAuMjVzIGVhc2U7XG59XG4uY2FyZC1jb250YWluZXIgLmNhcmQgYTpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMHB4LCAtMjBweCk7XG4gIGJvcmRlci1jb2xvcjogIzViYzBlYjtcbn1cbi5jYXJkLWNvbnRhaW5lciAuY2FyZCBhOmhvdmVyIC5jYXJkLS1kaXNwbGF5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jYXJkLWNvbnRhaW5lciAuY2FyZCBhOmhvdmVyIC5jYXJkLS1ob3ZlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNhcmQtY29udGFpbmVyIC5jYXJkIGEgLmNhcmQtLWRpc3BsYXkgaSB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgbWFyZ2luLXRvcDogMjAwcHg7XG59XG4uY2FyZC1jb250YWluZXIgLmNhcmQgYSAuY2FyZC0tZGlzcGxheSBoMiB7XG4gIG1hcmdpbjogMjBweCAwIDA7XG59XG4uY2FyZC1jb250YWluZXIgLmNhcmQgYSAuY2FyZC0taG92ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNhcmQtY29udGFpbmVyIC5jYXJkIGEgLmNhcmQtLWhvdmVyIGgyIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGNvbG9yOiAjZmVjNTAzO1xuXG59IFxuXG4vKiAuY2FyZC0taG92ZXJ7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZlYzUwMztcbiAgbWFyZ2luOiAxMHB4O1xufSAqL1xuLmNhcmQtY29udGFpbmVyIC5jYXJkIGEgLmNhcmQtLWhvdmVyIHAge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuLmNhcmQtY29udGFpbmVyIC5jYXJkIGEgLmNhcmQtLWhvdmVyIHAubGluayB7XG4gIG1hcmdpbjogMjBweCAwIDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzViYzBlYjtcbn1cbi5jYXJkLWNvbnRhaW5lciAuY2FyZCAuY2FyZC0tYm9yZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCBibGFjaztcbiAgei1pbmRleDogLTE7XG59XG4uY2FyZC1jb250YWluZXIgLmNhcmQuY2FyZC0tZGFyayBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cbi5jYXJkLWNvbnRhaW5lciAuY2FyZC5jYXJkLS1kYXJrIGEgLmNhcmQtLWhvdmVyIC5saW5rIHtcbiAgY29sb3I6ICNmZGU3NGM7XG59XG4uUm93IHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbn1cbi5Db2x1bW4ge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-services',
          templateUrl: './services.component.html',
          styleUrls: ['./services.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/team/team.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/team/team.component.ts ***!
    \*********************************************/

  /*! exports provided: TeamComponent */

  /***/
  function srcAppHomeTeamTeamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamComponent", function () {
      return TeamComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons */
    "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var TeamComponent = /*#__PURE__*/function () {
      function TeamComponent() {
        _classCallCheck(this, TeamComponent);

        this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLinkedin"];
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEnvelope"];
      }

      _createClass(TeamComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TeamComponent;
    }();

    TeamComponent.ɵfac = function TeamComponent_Factory(t) {
      return new (t || TeamComponent)();
    };

    TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TeamComponent,
      selectors: [["app-team"]],
      decls: 76,
      vars: 3,
      consts: [["id", "team", 1, "bg-light", "page-section"], [1, "container"], [1, "row"], [1, "col-lg-12", "text-center"], [1, "section-heading", "text-uppercase", 2, "font-family", "'Dosis', sans-serif", "font-weight", "500"], [1, "section-subheading", "text-muted"], [1, "col-sm-6"], [1, "team-member"], ["src", "../../../assets/img/biswajit sir.jpg", "loading", "lazy", "alt", "", 1, "mx-auto", "rounded-circle"], [1, "text-muted"], [1, "list-inline", "social-buttons"], [1, "list-inline-item"], ["href", "https://www.linkedin.com/in/biswajit-sarma-3a42b425/", "target", "_blank"], [3, "icon"], ["src", "../../../assets/img/sourav.jpg", "loading", "lazy", "alt", "", 1, "mx-auto", "rounded-circle"], ["href", "https://www.linkedin.com/in/sourav-mazumdar-57773a181/", "target", "_blank"], ["href", "mailto:sauravmzdr@jecassam.ac.in", "target", "_blank"], [1, "col-12", "text-center", 2, "font-family", "Dancing Script", "font-weight", "bold"], [2, "font-size", "large"], [1, "credit"], [1, "col-4", "xs-4", "text-center"], ["href", "https://www.linkedin.com/in/bhaskar-jyoti-bhattacharya-0a820817b", "target", "_blank"], ["href", "https://www.linkedin.com/in/aritra-k-414879134", "target", "_blank"], ["href", "https://www.linkedin.com/in/pijush-bhuyan-05645a188", "target", "_blank"], [1, "col-3", "xs-3", "text-center"], ["href", "https://www.linkedin.com/in/jyotiska-bharadwaj-b49476167", "target", "_blank"], [1, "col-6", "xs-6", "text-center", 2, "font-family", "'Dosis', sans-serif", "font-weight", "500"], ["href", "https://www.linkedin.com/in/kibri-ahsan-97397418b/", "target", "_blank"], ["href", "https://www.linkedin.com/in/bishakha-bikhya-733209191", "target", "_blank"], ["href", "https://www.linkedin.com/in/rupam-jyoti-das-218a521a6/", "target", "_blank"]],
      template: function TeamComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Our Team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Biswajit Sarmah");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Faculty Supervisor ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Assistant Professor ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Computer Science and Engineering ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "fa-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sourav Mazumdar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Club Head ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Final year ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Computer Science and Engineering ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "fa-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "fa-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " With Members from all 4 years and all 5 Branches we stand together as a Strong United Community ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Bhaskar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Aritra ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Pijush");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Jyotiska");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Webiste Credits ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Kibri");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Bishakha ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Deepsekhar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Rupam");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faLinkedin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faLinkedin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faEnvelope);
        }
      },
      directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]],
      styles: [".col-4[_ngcontent-%COMP%]:hover{\n    font-weight:bolder ;\n    \n}\n\n.col-4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    text-decoration: none;\n    color: black;\n}\n\n.col-3[_ngcontent-%COMP%]:hover{\n    font-weight:bolder ;\n    \n}\n\n.col-3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    text-decoration: none;\n    color: black;\n}\n\n\n\nsection#team[_ngcontent-%COMP%]{\n    padding-top: 100px;\n    padding-bottom: 0;\n}\n\n.credit[_ngcontent-%COMP%]{\n    background-color:rgb(240, 240, 240);\n    padding: 10px;\n}\n\n.list-inline-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    color: #6c757d;\n    font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBQ0E7OztHQUdHOztBQUNIO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkIiLCJmaWxlIjoidGVhbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29sLTQ6aG92ZXJ7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZGVyIDtcbiAgICBcbn1cblxuLmNvbC00IGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmNvbC0zOmhvdmVye1xuICAgIGZvbnQtd2VpZ2h0OmJvbGRlciA7XG4gICAgXG59XG5cbi5jb2wtMyBhe1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4vKiAucm93OmhvdmVye1xuICAgIGZvbnQtd2VpZ2h0OmJvbGRlciA7XG5cbn0gKi9cbnNlY3Rpb24jdGVhbXtcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5jcmVkaXR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjQwLCAyNDAsIDI0MCk7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmxpc3QtaW5saW5lLWl0ZW0gYXtcbiAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-team',
          templateUrl: './team.component.html',
          styleUrls: ['./team.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/timeline/timeline.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/home/timeline/timeline.component.ts ***!
    \*****************************************************/

  /*! exports provided: TimelineComponent */

  /***/
  function srcAppHomeTimelineTimelineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimelineComponent", function () {
      return TimelineComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TimelineComponent = /*#__PURE__*/function () {
      function TimelineComponent() {
        _classCallCheck(this, TimelineComponent);
      }

      _createClass(TimelineComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TimelineComponent;
    }();

    TimelineComponent.ɵfac = function TimelineComponent_Factory(t) {
      return new (t || TimelineComponent)();
    };

    TimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TimelineComponent,
      selectors: [["app-timeline"]],
      decls: 78,
      vars: 0,
      consts: [["id", "about", 1, "page-section"], [1, "container"], [1, "row"], [1, "col-lg-12", "text-center"], [1, "section-heading", "text-uppercase", 2, "font-family", "'Dosis', sans-serif", "font-weight", "500"], [1, "section-subheading", "text-muted"], [1, "col-lg-12"], [1, "timeline"], [1, "timeline-image", 2, "background-color", "#e9ecef"], ["src", "../../../assets/img/codenovus sc-min.png", "alt", "", 1, "rounded-circle", "img-fluid"], [1, "timeline-panel"], [1, "timeline-heading"], [1, "subheading"], [1, "timeline-body"], [1, "text-muted"], [1, "timeline-inverted"], [1, "timeline-image"], ["src", "../../../assets/img/consilium fhd.jpg", "alt", "", 1, "rounded-circle", "img-fluid"], ["src", "../../../assets/img/web-o-design sc-min.png", "alt", "", 1, "rounded-circle", "img-fluid"], [1, "timeline-inverted", "hide-mobile"], ["href", "/past-events", 2, "color", "white"], [1, "col-12", "show-mobile", "text-center"], ["href", "/past-events"], [2, "font-family", "'Dosis', sans-serif", "font-weight", "500"], ["id", "registration-form", 1, "container", "text-center"], [1, "display-4"], ["src", "https://docs.google.com/forms/d/e/1FAIpQLSfRK7ENQzUZ6rqyTtfZK3hIsnEHbwMLS85nLX0eINDnZ1SumQ/viewform?embedded=true", "width", "100%", "height", "1048", "frameborder", "0", "marginheight", "0", "marginwidth", "0"]],
      template: function TimelineComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "LATEST EVENTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Featuring Some of our latest events");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "sup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "rd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Nov 2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Codenovus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "It is a flagship coding competition that was conducted in two rounds i.e. qualifying and final.The qualifying round was held online and shortlisted candidates got the chance to compete in the final round.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "sup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "nd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Nov 2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Consilium");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "An interactive session with Dr. Prabin Kumar Bora, Professor in the Department of Electronics and Electrical Engineering at IITG, was held.Students caught a glimpse of his accomplishments in the field of machine learning and the virues and vices of this revolutionary technology was discussed.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "sup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "nd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Nov 2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Web-o-design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "A front-end web development competition was organised wherein the participants were to produce a replica of the website that was shown at the time of competition using HTML,CSS,Bootstrap,JS.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "View ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "All ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Events! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h3", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "View all Events!!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h2", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Please Fill the form below for GLUG orientation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "iframe", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Loading\u2026");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".img-fluid[_ngcontent-%COMP%]{\n    max-width: 100%;\n    height: 100%;\n}\n.timeline[_ngcontent-%COMP%] {\n    position: relative;\n    padding: 0;\n    list-style: none;\n    }\n.timeline[_ngcontent-%COMP%]:before {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 40px;\n    width: 2px;\n    margin-left: -1.5px;\n    content: '';\n    background-color: #e9ecef;\n    }\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    position: relative;\n    min-height: 50px;\n    margin-bottom: 50px;\n    }\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:after, .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:before {\n    display: table;\n    content: ' ';\n    }\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:after {\n    clear: both;\n    }\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .timeline-panel[_ngcontent-%COMP%] {\n    position: relative;\n    float: right;\n    width: 100%;\n    padding: 0 20px 0 100px;\n    text-align: left;\n    }\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .timeline-panel[_ngcontent-%COMP%]:before {\n    right: auto;\n    left: -15px;\n    border-right-width: 15px;\n    border-left-width: 0;\n    }\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .timeline-panel[_ngcontent-%COMP%]:after {\n    right: auto;\n    left: -14px;\n    border-right-width: 14px;\n    border-left-width: 0;\n    }\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .timeline-image[_ngcontent-%COMP%] {\n    position: absolute;\n    z-index: 100;\n    left: 0;\n    width: 20%;\n    height: 20%;\n    margin-left: 0;\n    text-align: center;\n    color: white;\n    border: 7px solid #e9ecef;\n    border-radius: 100%;\n    background-color: #fed136;\n    }\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .timeline-image[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 14px;\n    margin-top: 12px;\n    }\n.timeline[_ngcontent-%COMP%]    > li.timeline-inverted[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%] {\n    float: right;\n    padding: 0 20px 0 100px;\n    text-align: left;\n    }\n.timeline[_ngcontent-%COMP%]    > li.timeline-inverted[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:before {\n    right: auto;\n    left: -15px;\n    border-right-width: 15px;\n    border-left-width: 0;\n    }\n.timeline[_ngcontent-%COMP%]    > li.timeline-inverted[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:after {\n    right: auto;\n    left: -14px;\n    border-right-width: 14px;\n    border-left-width: 0;\n    }\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0;\n    }\n.timeline[_ngcontent-%COMP%]   .timeline-heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    margin-top: 0;\n    color: inherit;\n    }\n.timeline[_ngcontent-%COMP%]   .timeline-heading[_ngcontent-%COMP%]   h4.subheading[_ngcontent-%COMP%] {\n    text-transform: none;\n    }\n.timeline[_ngcontent-%COMP%]   .timeline-body[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%], .timeline[_ngcontent-%COMP%]   .timeline-body[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n    }\n@media (min-width: 768px) {\n    .timeline[_ngcontent-%COMP%]:before {\n        left: 50%;\n    }\n    .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n        min-height: 100px;\n        margin-bottom: 100px;\n    }\n    .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .timeline-panel[_ngcontent-%COMP%] {\n        float: left;\n        width: 41%;\n        padding: 0 20px 20px 30px;\n        text-align: right;\n    }\n    .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .timeline-image[_ngcontent-%COMP%] {\n        left: 50%;\n        width: 100px;\n        height: 100px;\n        margin-left: -50px;\n    }\n    .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .timeline-image[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n        font-size: 13px;\n        line-height: 18px;\n        margin-top: 16px;\n    }\n    .timeline[_ngcontent-%COMP%]    > li.timeline-inverted[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%] {\n        float: right;\n        padding: 0 30px 20px 20px;\n        text-align: left;\n    }\n    }\n@media (min-width: 992px) {\n    .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n        min-height: 150px;\n    }\n    .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .timeline-panel[_ngcontent-%COMP%] {\n        padding: 0 20px 20px;\n    }\n    .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .timeline-image[_ngcontent-%COMP%] {\n        width: 150px;\n        height: 150px;\n        margin-left: -75px;\n    }\n    .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .timeline-image[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n        font-size: 18px;\n        line-height: 26px;\n        margin-top: 30px;\n    }\n    .timeline[_ngcontent-%COMP%]    > li.timeline-inverted[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%] {\n        padding: 0 20px 20px;\n    }\n    }\n@media (min-width: 1200px) {\n    .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n        min-height: 170px;\n    }\n    .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .timeline-panel[_ngcontent-%COMP%] {\n        padding: 0 20px 20px 100px;\n    }\n    .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .timeline-image[_ngcontent-%COMP%] {\n        width: 170px;\n        height: 170px;\n        margin-left: -85px;\n    }\n    .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .timeline-image[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n        margin-top: 40px;\n    }\n    .timeline[_ngcontent-%COMP%]    > li.timeline-inverted[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%] {\n        padding: 0 100px 20px 20px;\n    }\n    }\n.show-mobile[_ngcontent-%COMP%]{\n        display: none;\n    }\n@media only screen and (max-width: 800px) {\n        .hide-mobile[_ngcontent-%COMP%] {\n            display: none;    \n        }\n        .show-mobile[_ngcontent-%COMP%]{\n            display: block;\n        }\n\n        .display-4[_ngcontent-%COMP%]{\n            font-size: 30px;\n            padding-bottom: 10px;\n        }\n\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEI7QUFFQTtJQUNBLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULFVBQVU7SUFDVixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx5QkFBeUI7SUFDekI7QUFFQTtJQUNBLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CO0FBRUE7SUFDQSxjQUFjO0lBQ2QsWUFBWTtJQUNaO0FBRUE7SUFDQSxXQUFXO0lBQ1g7QUFFQTtJQUNBLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEI7QUFFQTtJQUNBLFdBQVc7SUFDWCxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQjtBQUVBO0lBQ0EsV0FBVztJQUNYLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCO0FBRUE7SUFDQSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLE9BQU87SUFDUCxVQUFVO0lBQ1YsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCO0FBRUE7SUFDQSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQjtBQUVBO0lBQ0EsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEI7QUFFQTtJQUNBLFdBQVc7SUFDWCxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQjtBQUVBO0lBQ0EsV0FBVztJQUNYLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCO0FBRUE7SUFDQSxnQkFBZ0I7SUFDaEI7QUFFQTtJQUNBLGFBQWE7SUFDYixjQUFjO0lBQ2Q7QUFFQTtJQUNBLG9CQUFvQjtJQUNwQjtBQUVBOztJQUVBLGdCQUFnQjtJQUNoQjtBQUVBO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxVQUFVO1FBQ1YseUJBQXlCO1FBQ3pCLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksU0FBUztRQUNULFlBQVk7UUFDWixhQUFhO1FBQ2Isa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLHlCQUF5QjtRQUN6QixnQkFBZ0I7SUFDcEI7SUFDQTtBQUVBO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxvQkFBb0I7SUFDeEI7SUFDQTtBQUVBO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7QUFDQTtRQUNJLGFBQWE7SUFDakI7QUFFQTtRQUNJO1lBQ0ksYUFBYTtRQUNqQjtRQUNBO1lBQ0ksY0FBYztRQUNsQjs7UUFFQTtZQUNJLGVBQWU7WUFDZixvQkFBb0I7UUFDeEI7O0lBRUoiLCJmaWxlIjoiLi4vdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctZmx1aWR7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi50aW1lbGluZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICAudGltZWxpbmU6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiA0MHB4O1xuICAgIHdpZHRoOiAycHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xLjVweDtcbiAgICBjb250ZW50OiAnJztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICAgIH1cblxuICAgIC50aW1lbGluZSA+IGxpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIH1cblxuICAgIC50aW1lbGluZSA+IGxpOmFmdGVyLCAudGltZWxpbmUgPiBsaTpiZWZvcmUge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGNvbnRlbnQ6ICcgJztcbiAgICB9XG5cbiAgICAudGltZWxpbmUgPiBsaTphZnRlciB7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgfVxuXG4gICAgLnRpbWVsaW5lID4gbGkgLnRpbWVsaW5lLXBhbmVsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgMjBweCAwIDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuXG4gICAgLnRpbWVsaW5lID4gbGkgLnRpbWVsaW5lLXBhbmVsOmJlZm9yZSB7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgbGVmdDogLTE1cHg7XG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxNXB4O1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICAgIH1cblxuICAgIC50aW1lbGluZSA+IGxpIC50aW1lbGluZS1wYW5lbDphZnRlciB7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgbGVmdDogLTE0cHg7XG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxNHB4O1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICAgIH1cblxuICAgIC50aW1lbGluZSA+IGxpIC50aW1lbGluZS1pbWFnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgaGVpZ2h0OiAyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDdweCBzb2xpZCAjZTllY2VmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZDEzNjtcbiAgICB9XG5cbiAgICAudGltZWxpbmUgPiBsaSAudGltZWxpbmUtaW1hZ2UgaDQge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIH1cblxuICAgIC50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLXBhbmVsIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZzogMCAyMHB4IDAgMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG5cbiAgICAudGltZWxpbmUgPiBsaS50aW1lbGluZS1pbnZlcnRlZCA+IC50aW1lbGluZS1wYW5lbDpiZWZvcmUge1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIGxlZnQ6IC0xNXB4O1xuICAgIGJvcmRlci1yaWdodC13aWR0aDogMTVweDtcbiAgICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgICB9XG5cbiAgICAudGltZWxpbmUgPiBsaS50aW1lbGluZS1pbnZlcnRlZCA+IC50aW1lbGluZS1wYW5lbDphZnRlciB7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgbGVmdDogLTE0cHg7XG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxNHB4O1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICAgIH1cblxuICAgIC50aW1lbGluZSA+IGxpOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgLnRpbWVsaW5lIC50aW1lbGluZS1oZWFkaW5nIGg0IHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cblxuICAgIC50aW1lbGluZSAudGltZWxpbmUtaGVhZGluZyBoNC5zdWJoZWFkaW5nIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG5cbiAgICAudGltZWxpbmUgLnRpbWVsaW5lLWJvZHkgPiB1bCxcbiAgICAudGltZWxpbmUgLnRpbWVsaW5lLWJvZHkgPiBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC50aW1lbGluZTpiZWZvcmUge1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgfVxuICAgIC50aW1lbGluZSA+IGxpIHtcbiAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgIH1cbiAgICAudGltZWxpbmUgPiBsaSAudGltZWxpbmUtcGFuZWwge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6IDQxJTtcbiAgICAgICAgcGFkZGluZzogMCAyMHB4IDIwcHggMzBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICAgIC50aW1lbGluZSA+IGxpIC50aW1lbGluZS1pbWFnZSB7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTUwcHg7XG4gICAgfVxuICAgIC50aW1lbGluZSA+IGxpIC50aW1lbGluZS1pbWFnZSBoNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuICAgIC50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLXBhbmVsIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nOiAwIDMwcHggMjBweCAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAudGltZWxpbmUgPiBsaSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgIH1cbiAgICAudGltZWxpbmUgPiBsaSAudGltZWxpbmUtcGFuZWwge1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHggMjBweDtcbiAgICB9XG4gICAgLnRpbWVsaW5lID4gbGkgLnRpbWVsaW5lLWltYWdlIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTc1cHg7XG4gICAgfVxuICAgIC50aW1lbGluZSA+IGxpIC50aW1lbGluZS1pbWFnZSBoNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgfVxuICAgIC50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLXBhbmVsIHtcbiAgICAgICAgcGFkZGluZzogMCAyMHB4IDIwcHg7XG4gICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAudGltZWxpbmUgPiBsaSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDE3MHB4O1xuICAgIH1cbiAgICAudGltZWxpbmUgPiBsaSAudGltZWxpbmUtcGFuZWwge1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHggMjBweCAxMDBweDtcbiAgICB9XG4gICAgLnRpbWVsaW5lID4gbGkgLnRpbWVsaW5lLWltYWdlIHtcbiAgICAgICAgd2lkdGg6IDE3MHB4O1xuICAgICAgICBoZWlnaHQ6IDE3MHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTg1cHg7XG4gICAgfVxuICAgIC50aW1lbGluZSA+IGxpIC50aW1lbGluZS1pbWFnZSBoNCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgfVxuICAgIC50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLXBhbmVsIHtcbiAgICAgICAgcGFkZGluZzogMCAxMDBweCAyMHB4IDIwcHg7XG4gICAgfVxuICAgIH1cbiAgICAuc2hvdy1tb2JpbGV7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgICAuaGlkZS1tb2JpbGUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTsgICAgXG4gICAgICAgIH1cbiAgICAgICAgLnNob3ctbW9iaWxle1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAuZGlzcGxheS00e1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cblxuICAgIH1cblxuICJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-timeline',
          templateUrl: './timeline.component.html',
          styleUrls: ['./timeline.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/footer/footer.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/ui/footer/footer.component.ts ***!
    \***********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppUiFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.faHeart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHeart"];
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 8,
      vars: 1,
      consts: [[1, "container"], [1, "row"], [1, "col-12", "text-center"], [1, "section-subheading", "text-muted"], [2, "color", "red", 3, "icon"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Made with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " by GLUG ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faHeart);
        }
      },
      directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]],
      styles: ["footer[_ngcontent-%COMP%]{\n    margin:0;\n    padding: 20px;\n    background-color: rgb(240, 240, 240);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3VpL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFFBQVE7SUFDUixhQUFhO0lBQ2Isb0NBQW9DO0FBQ3hDIiwiZmlsZSI6Ii4uLy4uL3VpL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcntcbiAgICBtYXJnaW46MDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/navbar/navbar.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/ui/navbar/navbar.component.ts ***!
    \***********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppUiNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);

        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBars"];
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onWindowScroll",
        value: function onWindowScroll() {
          if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 2) {
            document.getElementById('mainNav').classList.add('navbar-color');
          } else {
            document.getElementById('mainNav').classList.remove('navbar-color');
          }
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavbarComponent_scroll_HostBindingHandler() {
            return ctx.onWindowScroll();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 26,
      vars: 1,
      consts: [["id", "mainNav", 1, "navbar", "navbar-expand-lg", "navbar-dark", "fixed-top"], [1, "container"], ["href", "#page-top", 1, "navbar-brand", "js-scroll-trigger"], ["data-toggle", "collapse", "data-target", "#navbarResponsive", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "navbar-toggler-right"], [3, "icon"], ["id", "navbarResponsive", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "text-uppercase", "ml-auto"], ["data-toggle", "collapse", "data-target", ".navbar-collapse.show", 1, "nav-item"], ["href", "#about", 1, "nav-link", "js-scroll-trigger"], ["href", "#services", 1, "nav-link", "js-scroll-trigger"], ["href", "#portfolio", 1, "nav-link", "js-scroll-trigger"], ["href", "/past-events", 1, "nav-link", "js-scroll-trigger"], ["href", "#team", 1, "nav-link", "js-scroll-trigger"], ["href", "#contact", 1, "nav-link", "js-scroll-trigger"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Jec GLUG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "fa-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Activities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faBars);
        }
      },
      directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]],
      styles: ["#mainNav[_ngcontent-%COMP%] {\n    background-color: transparent;\n    z-index: 10001;\n    }\n\n    #mainNav[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n    font-size: 30px;\n    right: 0;\n    padding-top:5px ;\n    text-transform: uppercase;\n    color: white;\n    border: 0;\n    background-color: transparent;\n    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n    }\n\n    #mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n    color: #fed136;\n    font-family: 'Kaushan Script', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n    }\n\n    #mainNav[_ngcontent-%COMP%]   .navbar-brand.active[_ngcontent-%COMP%], #mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:active, #mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:focus, #mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover {\n    color: #fec503;\n    }\n\n    #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    font-size: 90%;\n    font-weight: 400;\n    padding: 0.75em 0;\n    letter-spacing: 1px;\n    color: white;\n    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n    }\n\n    #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n    color: #fed136;\n    }\n\n    @media (min-width: 992px) {\n    #mainNav[_ngcontent-%COMP%] {\n        padding-top: 15px;\n        padding-bottom: 15px;\n        -webkit-transition: padding-top 0.3s, padding-bottom 0.3s;\n        transition: padding-top 0.3s, padding-bottom 0.3s;\n        border: none;\n        background-color: transparent;\n    }\n    #mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n        font-size: 1.75em;\n        -webkit-transition: all 0.3s;\n        transition: all 0.3s;\n    }\n    #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n        padding: 1.1em 1em !important;\n    }\n    #mainNav.navbar-shrink[_ngcontent-%COMP%] {\n        padding-top: 0;\n        padding-bottom: 0;\n        background-color: #212529;\n    }\n    #mainNav.navbar-shrink[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n        font-size: 1.25em;\n        padding: 12px 0;\n    }\n}\n\n    .navbar-color[_ngcontent-%COMP%]{\n    background-color: black !important; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3VpL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2Q7O0lBRUE7SUFDQSxlQUFlO0lBQ2YsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFNBQVM7SUFDVCw2QkFBNkI7SUFDN0IsbU1BQW1NO0lBQ25NOztJQUVBO0lBQ0EsY0FBYztJQUNkLHVNQUF1TTtJQUN2TTs7SUFFQTtJQUNBLGNBQWM7SUFDZDs7SUFFQTtJQUNBLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osbU1BQW1NO0lBQ25NOztJQUVBO0lBQ0EsY0FBYztJQUNkOztJQUVBO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLHlEQUFpRDtRQUFqRCxpREFBaUQ7UUFDakQsWUFBWTtRQUNaLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLDRCQUFvQjtRQUFwQixvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0ksY0FBYztRQUNkLGlCQUFpQjtRQUNqQix5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25CO0FBQ0o7O0lBRUE7SUFDSSxrQ0FBa0M7QUFDdEMiLCJmaWxlIjoiLi4vLi4vdWkvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW5OYXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHotaW5kZXg6IDEwMDAxO1xuICAgIH1cblxuICAgICNtYWluTmF2IC5uYXZiYXItdG9nZ2xlciB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIHBhZGRpbmctdG9wOjVweCA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsICdOb3RvIENvbG9yIEVtb2ppJztcbiAgICB9XG5cbiAgICAjbWFpbk5hdiAubmF2YmFyLWJyYW5kIHtcbiAgICBjb2xvcjogI2ZlZDEzNjtcbiAgICBmb250LWZhbWlseTogJ0thdXNoYW4gU2NyaXB0JywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJywgJ05vdG8gQ29sb3IgRW1vamknO1xuICAgIH1cblxuICAgICNtYWluTmF2IC5uYXZiYXItYnJhbmQuYWN0aXZlLCAjbWFpbk5hdiAubmF2YmFyLWJyYW5kOmFjdGl2ZSwgI21haW5OYXYgLm5hdmJhci1icmFuZDpmb2N1cywgI21haW5OYXYgLm5hdmJhci1icmFuZDpob3ZlciB7XG4gICAgY29sb3I6ICNmZWM1MDM7XG4gICAgfVxuXG4gICAgI21haW5OYXYgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gICAgZm9udC1zaXplOiA5MCU7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBwYWRkaW5nOiAwLjc1ZW0gMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLCAnTm90byBDb2xvciBFbW9qaSc7XG4gICAgfVxuXG4gICAgI21haW5OYXYgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluay5hY3RpdmUsICNtYWluTmF2IC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbms6aG92ZXIge1xuICAgIGNvbG9yOiAjZmVkMTM2O1xuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICNtYWluTmF2IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBwYWRkaW5nLXRvcCAwLjNzLCBwYWRkaW5nLWJvdHRvbSAwLjNzO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAjbWFpbk5hdiAubmF2YmFyLWJyYW5kIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjc1ZW07XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIH1cbiAgICAjbWFpbk5hdiAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgICAgICAgcGFkZGluZzogMS4xZW0gMWVtICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgICNtYWluTmF2Lm5hdmJhci1zaHJpbmsge1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XG4gICAgfVxuICAgICNtYWluTmF2Lm5hdmJhci1zaHJpbmsgLm5hdmJhci1icmFuZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDA7XG4gICAgfVxufVxuXG4ubmF2YmFyLWNvbG9ye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7IFxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [];
      }, {
        onWindowScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:scroll', []]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/sourav/angular/glugweb/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map