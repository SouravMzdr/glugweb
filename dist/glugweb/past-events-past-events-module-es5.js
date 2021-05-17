function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["past-events-past-events-module"], {
  /***/
  "./node_modules/ngx-gallery-9/__ivy_ngcc__/fesm2015/ngx-gallery-9.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/ngx-gallery-9/__ivy_ngcc__/fesm2015/ngx-gallery-9.js ***!
    \***************************************************************************/

  /*! exports provided: NgxGalleryAction, NgxGalleryActionComponent, NgxGalleryAnimation, NgxGalleryArrowsComponent, NgxGalleryBulletsComponent, NgxGalleryComponent, NgxGalleryHelperService, NgxGalleryImage, NgxGalleryImageComponent, NgxGalleryImageSize, NgxGalleryLayout, NgxGalleryModule, NgxGalleryOptions, NgxGalleryOrder, NgxGalleryOrderedImage, NgxGalleryPreviewComponent, NgxGalleryThumbnailsComponent */

  /***/
  function node_modulesNgxGallery9__ivy_ngcc__Fesm2015NgxGallery9Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxGalleryAction", function () {
      return NgxGalleryAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxGalleryActionComponent", function () {
      return NgxGalleryActionComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxGalleryAnimation", function () {
      return NgxGalleryAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxGalleryArrowsComponent", function () {
      return NgxGalleryArrowsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxGalleryBulletsComponent", function () {
      return NgxGalleryBulletsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxGalleryComponent", function () {
      return NgxGalleryComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxGalleryHelperService", function () {
      return NgxGalleryHelperService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxGalleryImage", function () {
      return NgxGalleryImage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxGalleryImageComponent", function () {
      return NgxGalleryImageComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxGalleryImageSize", function () {
      return NgxGalleryImageSize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxGalleryLayout", function () {
      return NgxGalleryLayout;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxGalleryModule", function () {
      return NgxGalleryModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxGalleryOptions", function () {
      return NgxGalleryOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxGalleryOrder", function () {
      return NgxGalleryOrder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxGalleryOrderedImage", function () {
      return NgxGalleryOrderedImage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxGalleryPreviewComponent", function () {
      return NgxGalleryPreviewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxGalleryThumbnailsComponent", function () {
      return NgxGalleryThumbnailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["previewImage"];

    function NgxGalleryPreviewComponent_ngx_gallery_arrows_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-gallery-arrows", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onPrevClick", function NgxGalleryPreviewComponent_ngx_gallery_arrows_0_Template_ngx_gallery_arrows_onPrevClick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r11.showPrev();
        })("onNextClick", function NgxGalleryPreviewComponent_ngx_gallery_arrows_0_Template_ngx_gallery_arrows_onNextClick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r13.showNext();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("prevDisabled", !ctx_r0.canShowPrev())("nextDisabled", !ctx_r0.canShowNext())("arrowPrevIcon", ctx_r0.arrowPrevIcon)("arrowNextIcon", ctx_r0.arrowNextIcon);
      }
    }

    function NgxGalleryPreviewComponent_ngx_gallery_action_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-gallery-action", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function NgxGalleryPreviewComponent_ngx_gallery_action_3_Template_ngx_gallery_action_onClick_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

          var action_r14 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return action_r14.onClick($event, ctx_r15.index);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var action_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", action_r14.icon)("disabled", action_r14.disabled)("titleText", action_r14.titleText);
      }
    }

    function NgxGalleryPreviewComponent_a_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r2.src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("ngx-gallery-icon-content ", ctx_r2.downloadIcon, "");
      }
    }

    function NgxGalleryPreviewComponent_ngx_gallery_action_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-gallery-action", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function NgxGalleryPreviewComponent_ngx_gallery_action_5_Template_ngx_gallery_action_onClick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r17.zoomOut();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r3.zoomOutIcon)("disabled", !ctx_r3.canZoomOut());
      }
    }

    function NgxGalleryPreviewComponent_ngx_gallery_action_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-gallery-action", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function NgxGalleryPreviewComponent_ngx_gallery_action_6_Template_ngx_gallery_action_onClick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r19.zoomIn();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r4.zoomInIcon)("disabled", !ctx_r4.canZoomIn());
      }
    }

    function NgxGalleryPreviewComponent_ngx_gallery_action_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-gallery-action", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function NgxGalleryPreviewComponent_ngx_gallery_action_7_Template_ngx_gallery_action_onClick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r21.rotateLeft();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r5.rotateLeftIcon);
      }
    }

    function NgxGalleryPreviewComponent_ngx_gallery_action_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-gallery-action", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function NgxGalleryPreviewComponent_ngx_gallery_action_8_Template_ngx_gallery_action_onClick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r23.rotateRight();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r6.rotateRightIcon);
      }
    }

    function NgxGalleryPreviewComponent_ngx_gallery_action_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-gallery-action", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function NgxGalleryPreviewComponent_ngx_gallery_action_9_Template_ngx_gallery_action_onClick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r25.manageFullscreen();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "ngx-gallery-fullscreen " + ctx_r7.fullscreenIcon);
      }
    }

    function NgxGalleryPreviewComponent_img_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 19, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxGalleryPreviewComponent_img_15_Template_img_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);

          return $event.stopPropagation();
        })("mouseenter", function NgxGalleryPreviewComponent_img_15_Template_img_mouseenter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r30.imageMouseEnter();
        })("mouseleave", function NgxGalleryPreviewComponent_img_15_Template_img_mouseleave_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r31.imageMouseLeave();
        })("mousedown", function NgxGalleryPreviewComponent_img_15_Template_img_mousedown_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r32.mouseDownHandler($event);
        })("touchstart", function NgxGalleryPreviewComponent_img_15_Template_img_touchstart_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r33.mouseDownHandler($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("transform", ctx_r8.getTransform())("left", ctx_r8.positionLeft + "px")("top", ctx_r8.positionTop + "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ngx-gallery-active", !ctx_r8.loading)("animation", ctx_r8.animation)("ngx-gallery-grab", ctx_r8.canDragOnZoom());

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r8.src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function NgxGalleryPreviewComponent_ngx_gallery_bullets_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-gallery-bullets", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onChange", function NgxGalleryPreviewComponent_ngx_gallery_bullets_16_Template_ngx_gallery_bullets_onChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r34.showAtIndex($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("count", ctx_r9.images.length)("active", ctx_r9.index);
      }
    }

    function NgxGalleryPreviewComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxGalleryPreviewComponent_div_17_Template_div_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37);

          return $event.stopPropagation();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r10.description, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    function NgxGalleryImageComponent_div_1_ngx_gallery_action_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-gallery-action", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function NgxGalleryImageComponent_div_1_ngx_gallery_action_2_Template_ngx_gallery_action_onClick_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

          var action_r7 = ctx.$implicit;

          var image_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          return action_r7.onClick($event, image_r3.index);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var action_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", action_r7.icon)("disabled", action_r7.disabled)("titleText", action_r7.titleText);
      }
    }

    function NgxGalleryImageComponent_div_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxGalleryImageComponent_div_1_div_3_Template_div_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

          return $event.stopPropagation();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r6.descriptions[image_r3.index], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    var _c1 = function _c1(a0, a1, a2, a3) {
      return {
        "ngx-gallery-active": a0,
        "ngx-gallery-inactive-left": a1,
        "ngx-gallery-inactive-right": a2,
        "ngx-gallery-clickable": a3
      };
    };

    function NgxGalleryImageComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxGalleryImageComponent_div_1_Template_div_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var image_r3 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r14.handleClick($event, image_r3.index);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgxGalleryImageComponent_div_1_ngx_gallery_action_2_Template, 1, 3, "ngx-gallery-action", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NgxGalleryImageComponent_div_1_div_3_Template, 1, 1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r3 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-image", ctx_r0.getSafeUrl(image_r3.src), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](5, _c1, ctx_r0.selectedIndex == image_r3.index, ctx_r0.selectedIndex > image_r3.index, ctx_r0.selectedIndex < image_r3.index, ctx_r0.clickable));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.actions);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.showDescription && ctx_r0.descriptions[image_r3.index]);
      }
    }

    function NgxGalleryImageComponent_ngx_gallery_bullets_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-gallery-bullets", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onChange", function NgxGalleryImageComponent_ngx_gallery_bullets_2_Template_ngx_gallery_bullets_onChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r16.show($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("count", ctx_r1.images.length)("active", ctx_r1.selectedIndex);
      }
    }

    function NgxGalleryImageComponent_ngx_gallery_arrows_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-gallery-arrows", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onPrevClick", function NgxGalleryImageComponent_ngx_gallery_arrows_3_Template_ngx_gallery_arrows_onPrevClick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r18.showPrev();
        })("onNextClick", function NgxGalleryImageComponent_ngx_gallery_arrows_3_Template_ngx_gallery_arrows_onNextClick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r20.showNext();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("ngx-gallery-image-size-", ctx_r2.size, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("prevDisabled", !ctx_r2.canShowPrev())("nextDisabled", !ctx_r2.canShowNext())("arrowPrevIcon", ctx_r2.arrowPrevIcon)("arrowNextIcon", ctx_r2.arrowNextIcon);
      }
    }

    function NgxGalleryThumbnailsComponent_a_2_ngx_gallery_action_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-gallery-action", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function NgxGalleryThumbnailsComponent_a_2_ngx_gallery_action_2_Template_ngx_gallery_action_onClick_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

          var action_r6 = ctx.$implicit;

          var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

          return action_r6.onClick($event, i_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var action_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", action_r6.icon)("disabled", action_r6.disabled)("titleText", action_r6.titleText);
      }
    }

    function NgxGalleryThumbnailsComponent_a_2_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", ctx_r5.remainingCountValue, "");
      }
    }

    var _c2 = function _c2(a0, a1) {
      return {
        "ngx-gallery-active": a0,
        "ngx-gallery-clickable": a1
      };
    };

    function NgxGalleryThumbnailsComponent_a_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxGalleryThumbnailsComponent_a_2_Template_a_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

          var i_r3 = ctx.index;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r10.handleClick($event, i_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgxGalleryThumbnailsComponent_a_2_ngx_gallery_action_2_Template, 1, 3, "ngx-gallery-action", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NgxGalleryThumbnailsComponent_a_2_div_3_Template, 3, 1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r2 = ctx.$implicit;
        var i_r3 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-image", ctx_r0.getSafeUrl(image_r2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"])("width", ctx_r0.getThumbnailWidth())("height", ctx_r0.getThumbnailHeight())("left", ctx_r0.getThumbnailLeft(i_r3))("top", ctx_r0.getThumbnailTop(i_r3));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r0.hasLink(i_r3) ? ctx_r0.links[i_r3] : "#", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("target", ctx_r0.linkTarget)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](16, _c2, i_r3 == ctx_r0.selectedIndex, ctx_r0.clickable));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r0.labels[i_r3]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.actions);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.remainingCount && ctx_r0.remainingCountValue && i_r3 == ctx_r0.rows * ctx_r0.columns - 1);
      }
    }

    function NgxGalleryThumbnailsComponent_ngx_gallery_arrows_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-gallery-arrows", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onPrevClick", function NgxGalleryThumbnailsComponent_ngx_gallery_arrows_3_Template_ngx_gallery_arrows_onPrevClick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r12.moveLeft();
        })("onNextClick", function NgxGalleryThumbnailsComponent_ngx_gallery_arrows_3_Template_ngx_gallery_arrows_onNextClick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r14.moveRight();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("prevDisabled", !ctx_r1.canMoveLeft())("nextDisabled", !ctx_r1.canMoveRight())("arrowPrevIcon", ctx_r1.arrowPrevIcon)("arrowNextIcon", ctx_r1.arrowNextIcon);
      }
    }

    function NgxGalleryComponent_ngx_gallery_image_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-gallery-image", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function NgxGalleryComponent_ngx_gallery_image_1_Template_ngx_gallery_image_onClick_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r2.openPreview($event);
        })("onActiveChange", function NgxGalleryComponent_ngx_gallery_image_1_Template_ngx_gallery_image_onActiveChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r4.selectFromImage($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx_r0.getImageHeight());

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx_r0.mediumImages)("clickable", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.preview)("selectedIndex", ctx_r0.selectedIndex)("arrows", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageArrows)("arrowsAutoHide", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageArrowsAutoHide)("arrowPrevIcon", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.arrowPrevIcon)("arrowNextIcon", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.arrowNextIcon)("swipe", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageSwipe)("animation", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageAnimation)("size", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageSize)("autoPlay", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageAutoPlay)("autoPlayInterval", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageAutoPlayInterval)("autoPlayPauseOnHover", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageAutoPlayPauseOnHover)("infinityMove", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageInfinityMove)("lazyLoading", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.lazyLoading)("actions", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageActions)("descriptions", ctx_r0.descriptions)("showDescription", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageDescription)("bullets", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageBullets);
      }
    }

    var _c3 = function _c3() {
      return [];
    };

    function NgxGalleryComponent_ngx_gallery_thumbnails_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-gallery-thumbnails", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onActiveChange", function NgxGalleryComponent_ngx_gallery_thumbnails_2_Template_ngx_gallery_thumbnails_onActiveChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r5.selectFromThumbnails($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("margin-top", ctx_r1.getThumbnailsMarginTop())("margin-bottom", ctx_r1.getThumbnailsMarginBottom())("height", ctx_r1.getThumbnailsHeight());

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx_r1.smallImages)("links", (ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsAsLinks) ? ctx_r1.links : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](26, _c3))("labels", ctx_r1.labels)("linkTarget", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.linkTarget)("selectedIndex", ctx_r1.selectedIndex)("columns", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsColumns)("rows", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsRows)("margin", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailMargin)("arrows", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsArrows)("arrowsAutoHide", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsArrowsAutoHide)("arrowPrevIcon", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.arrowPrevIcon)("arrowNextIcon", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.arrowNextIcon)("clickable", (ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.image) || (ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.preview))("swipe", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsSwipe)("size", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailSize)("moveSize", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsMoveSize)("order", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsOrder)("remainingCount", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsRemainingCount)("lazyLoading", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.lazyLoading)("actions", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailActions);
      }
    }

    var _c4 = function _c4(a0) {
      return {
        "ngx-gallery-active": a0
      };
    };

    function NgxGalleryBulletsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxGalleryBulletsComponent_div_0_Template_div_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

          var i_r2 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r3.handleChange($event, i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r2 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c4, i_r2 == ctx_r0.active));
      }
    }

    var NgxGalleryHelperService = /*#__PURE__*/function () {
      function NgxGalleryHelperService(renderer) {
        _classCallCheck(this, NgxGalleryHelperService);

        this.renderer = renderer;
        this.swipeHandlers = new Map();
      }

      _createClass(NgxGalleryHelperService, [{
        key: "manageSwipe",
        value: function manageSwipe(status, element, id, nextHandler, prevHandler) {
          var handlers = this.getSwipeHandlers(id); // swipeleft and swiperight are available only if hammerjs is included

          try {
            if (status && !handlers) {
              this.swipeHandlers.set(id, [this.renderer.listen(element.nativeElement, 'swipeleft', function () {
                return nextHandler();
              }), this.renderer.listen(element.nativeElement, 'swiperight', function () {
                return prevHandler();
              })]);
            } else if (!status && handlers) {
              handlers.map(function (handler) {
                return handler();
              });
              this.removeSwipeHandlers(id);
            }
          } catch (e) {}
        }
      }, {
        key: "validateUrl",
        value: function validateUrl(url) {
          if (url.replace) {
            return url.replace(new RegExp(' ', 'g'), '%20').replace(new RegExp('\'', 'g'), '%27');
          } else {
            return url;
          }
        }
      }, {
        key: "getBackgroundUrl",
        value: function getBackgroundUrl(image) {
          return 'url(\'' + this.validateUrl(image) + '\')';
        }
      }, {
        key: "getSwipeHandlers",
        value: function getSwipeHandlers(id) {
          return this.swipeHandlers.get(id);
        }
      }, {
        key: "removeSwipeHandlers",
        value: function removeSwipeHandlers(id) {
          this.swipeHandlers["delete"](id);
        }
      }]);

      return NgxGalleryHelperService;
    }();

    NgxGalleryHelperService.ɵfac = function NgxGalleryHelperService_Factory(t) {
      return new (t || NgxGalleryHelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]));
    };

    NgxGalleryHelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: NgxGalleryHelperService,
      factory: NgxGalleryHelperService.ɵfac
    });

    NgxGalleryHelperService.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    var NgxGalleryAnimation = function NgxGalleryAnimation() {
      _classCallCheck(this, NgxGalleryAnimation);
    };

    NgxGalleryAnimation.Fade = 'fade';
    NgxGalleryAnimation.Slide = 'slide';
    NgxGalleryAnimation.Rotate = 'rotate';
    NgxGalleryAnimation.Zoom = 'zoom';

    var NgxGalleryImageSize = function NgxGalleryImageSize() {
      _classCallCheck(this, NgxGalleryImageSize);
    };

    NgxGalleryImageSize.Cover = 'cover';
    NgxGalleryImageSize.Contain = 'contain';

    var NgxGalleryLayout = function NgxGalleryLayout() {
      _classCallCheck(this, NgxGalleryLayout);
    };

    NgxGalleryLayout.ThumbnailsTop = 'thumbnails-top';
    NgxGalleryLayout.ThumbnailsBottom = 'thumbnails-bottom';

    var NgxGalleryOrder = function NgxGalleryOrder() {
      _classCallCheck(this, NgxGalleryOrder);
    };

    NgxGalleryOrder.Column = 1;
    NgxGalleryOrder.Row = 2;
    NgxGalleryOrder.Page = 3;

    var NgxGalleryAction = function NgxGalleryAction(action) {
      _classCallCheck(this, NgxGalleryAction);

      this.icon = action.icon;
      this.disabled = action.disabled ? action.disabled : false;
      this.titleText = action.titleText ? action.titleText : '';
      this.onClick = action.onClick;
    };

    var NgxGalleryOptions = function NgxGalleryOptions(obj) {
      _classCallCheck(this, NgxGalleryOptions);

      var preventDefaults = obj.breakpoint === undefined ? false : true;

      function use(source, defaultValue) {
        return obj && (source !== undefined || preventDefaults) ? source : defaultValue;
      }

      this.breakpoint = use(obj.breakpoint, undefined);
      this.width = use(obj.width, '500px');
      this.height = use(obj.height, '400px');
      this.fullWidth = use(obj.fullWidth, false);
      this.layout = use(obj.layout, NgxGalleryLayout.ThumbnailsBottom);
      this.startIndex = use(obj.startIndex, 0);
      this.linkTarget = use(obj.linkTarget, '_blank');
      this.lazyLoading = use(obj.lazyLoading, true);
      this.image = use(obj.image, true);
      this.imagePercent = use(obj.imagePercent, 75);
      this.imageArrows = use(obj.imageArrows, true);
      this.imageArrowsAutoHide = use(obj.imageArrowsAutoHide, false);
      this.imageSwipe = use(obj.imageSwipe, false);
      this.imageAnimation = use(obj.imageAnimation, NgxGalleryAnimation.Fade);
      this.imageSize = use(obj.imageSize, NgxGalleryImageSize.Cover);
      this.imageAutoPlay = use(obj.imageAutoPlay, false);
      this.imageAutoPlayInterval = use(obj.imageAutoPlayInterval, 2000);
      this.imageAutoPlayPauseOnHover = use(obj.imageAutoPlayPauseOnHover, false);
      this.imageInfinityMove = use(obj.imageInfinityMove, false);

      if (obj && obj.imageActions && obj.imageActions.length) {
        obj.imageActions = obj.imageActions.map(function (action) {
          return new NgxGalleryAction(action);
        });
      }

      this.imageActions = use(obj.imageActions, []);
      this.imageDescription = use(obj.imageDescription, false);
      this.imageBullets = use(obj.imageBullets, false);
      this.thumbnails = use(obj.thumbnails, true);
      this.thumbnailsColumns = use(obj.thumbnailsColumns, 4);
      this.thumbnailsRows = use(obj.thumbnailsRows, 1);
      this.thumbnailsPercent = use(obj.thumbnailsPercent, 25);
      this.thumbnailsMargin = use(obj.thumbnailsMargin, 10);
      this.thumbnailsArrows = use(obj.thumbnailsArrows, true);
      this.thumbnailsArrowsAutoHide = use(obj.thumbnailsArrowsAutoHide, false);
      this.thumbnailsSwipe = use(obj.thumbnailsSwipe, false);
      this.thumbnailsMoveSize = use(obj.thumbnailsMoveSize, 1);
      this.thumbnailsOrder = use(obj.thumbnailsOrder, NgxGalleryOrder.Column);
      this.thumbnailsRemainingCount = use(obj.thumbnailsRemainingCount, false);
      this.thumbnailsAsLinks = use(obj.thumbnailsAsLinks, false);
      this.thumbnailsAutoHide = use(obj.thumbnailsAutoHide, false);
      this.thumbnailMargin = use(obj.thumbnailMargin, 10);
      this.thumbnailSize = use(obj.thumbnailSize, NgxGalleryImageSize.Cover);

      if (obj && obj.thumbnailActions && obj.thumbnailActions.length) {
        obj.thumbnailActions = obj.thumbnailActions.map(function (action) {
          return new NgxGalleryAction(action);
        });
      }

      this.thumbnailActions = use(obj.thumbnailActions, []);
      this.preview = use(obj.preview, true);
      this.previewDescription = use(obj.previewDescription, true);
      this.previewArrows = use(obj.previewArrows, true);
      this.previewArrowsAutoHide = use(obj.previewArrowsAutoHide, false);
      this.previewSwipe = use(obj.previewSwipe, false);
      this.previewFullscreen = use(obj.previewFullscreen, false);
      this.previewForceFullscreen = use(obj.previewForceFullscreen, false);
      this.previewCloseOnClick = use(obj.previewCloseOnClick, false);
      this.previewCloseOnEsc = use(obj.previewCloseOnEsc, false);
      this.previewKeyboardNavigation = use(obj.previewKeyboardNavigation, false);
      this.previewAnimation = use(obj.previewAnimation, true);
      this.previewAutoPlay = use(obj.previewAutoPlay, false);
      this.previewAutoPlayInterval = use(obj.previewAutoPlayInterval, 2000);
      this.previewAutoPlayPauseOnHover = use(obj.previewAutoPlayPauseOnHover, false);
      this.previewInfinityMove = use(obj.previewInfinityMove, false);
      this.previewZoom = use(obj.previewZoom, false);
      this.previewZoomStep = use(obj.previewZoomStep, 0.1);
      this.previewZoomMax = use(obj.previewZoomMax, 2);
      this.previewZoomMin = use(obj.previewZoomMin, 0.5);
      this.previewRotate = use(obj.previewRotate, false);
      this.previewDownload = use(obj.previewDownload, false);
      this.previewCustom = use(obj.previewCustom, undefined);
      this.previewBullets = use(obj.previewBullets, false);
      this.arrowPrevIcon = use(obj.arrowPrevIcon, 'fa fa-arrow-circle-left');
      this.arrowNextIcon = use(obj.arrowNextIcon, 'fa fa-arrow-circle-right');
      this.closeIcon = use(obj.closeIcon, 'fa fa-times-circle');
      this.fullscreenIcon = use(obj.fullscreenIcon, 'fa fa-arrows-alt');
      this.spinnerIcon = use(obj.spinnerIcon, 'fa fa-spinner fa-pulse fa-3x fa-fw');
      this.zoomInIcon = use(obj.zoomInIcon, 'fa fa-search-plus');
      this.zoomOutIcon = use(obj.zoomOutIcon, 'fa fa-search-minus');
      this.rotateLeftIcon = use(obj.rotateLeftIcon, 'fa fa-undo');
      this.rotateRightIcon = use(obj.rotateRightIcon, 'fa fa-repeat');
      this.downloadIcon = use(obj.downloadIcon, 'fa fa-arrow-circle-down');

      if (obj && obj.actions && obj.actions.length) {
        obj.actions = obj.actions.map(function (action) {
          return new NgxGalleryAction(action);
        });
      }

      this.actions = use(obj.actions, []);
    };

    var NgxGalleryOrderedImage = function NgxGalleryOrderedImage(obj) {
      _classCallCheck(this, NgxGalleryOrderedImage);

      this.src = obj.src;
      this.index = obj.index;
    };

    var NgxGalleryPreviewComponent = /*#__PURE__*/function () {
      function NgxGalleryPreviewComponent(sanitization, elementRef, helperService, renderer, changeDetectorRef) {
        _classCallCheck(this, NgxGalleryPreviewComponent);

        this.sanitization = sanitization;
        this.elementRef = elementRef;
        this.helperService = helperService;
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.showSpinner = false;
        this.positionLeft = 0;
        this.positionTop = 0;
        this.zoomValue = 1;
        this.loading = false;
        this.rotateValue = 0;
        this.index = 0;
        this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onActiveChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isOpen = false;
        this.initialX = 0;
        this.initialY = 0;
        this.initialLeft = 0;
        this.initialTop = 0;
        this.isMove = false;
      }

      _createClass(NgxGalleryPreviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.arrows && this.arrowsAutoHide) {
            this.arrows = false;
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this = this;

          if (changes['swipe']) {
            this.helperService.manageSwipe(this.swipe, this.elementRef, 'preview', function () {
              return _this.showNext();
            }, function () {
              return _this.showPrev();
            });
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.keyDownListener) {
            this.keyDownListener();
          }
        }
      }, {
        key: "onMouseEnter",
        value: function onMouseEnter() {
          if (this.arrowsAutoHide && !this.arrows) {
            this.arrows = true;
          }
        }
      }, {
        key: "onMouseLeave",
        value: function onMouseLeave() {
          if (this.arrowsAutoHide && this.arrows) {
            this.arrows = false;
          }
        }
      }, {
        key: "onKeyDown",
        value: function onKeyDown(e) {
          if (this.isOpen) {
            if (this.keyboardNavigation) {
              if (this.isKeyboardPrev(e)) {
                this.showPrev();
              } else if (this.isKeyboardNext(e)) {
                this.showNext();
              }
            }

            if (this.closeOnEsc && this.isKeyboardEsc(e)) {
              this.close();
            }
          }
        }
      }, {
        key: "open",
        value: function open(index) {
          var _this2 = this;

          this.onOpen.emit();
          this.index = index;
          this.isOpen = true;
          this.show(true);

          if (this.forceFullscreen) {
            this.manageFullscreen();
          }

          this.keyDownListener = this.renderer.listen("window", "keydown", function (e) {
            return _this2.onKeyDown(e);
          });
        }
      }, {
        key: "close",
        value: function close() {
          this.isOpen = false;
          this.closeFullscreen();
          this.onClose.emit();
          this.stopAutoPlay();

          if (this.keyDownListener) {
            this.keyDownListener();
          }
        }
      }, {
        key: "imageMouseEnter",
        value: function imageMouseEnter() {
          if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.stopAutoPlay();
          }
        }
      }, {
        key: "imageMouseLeave",
        value: function imageMouseLeave() {
          if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.startAutoPlay();
          }
        }
      }, {
        key: "startAutoPlay",
        value: function startAutoPlay() {
          var _this3 = this;

          if (this.autoPlay) {
            this.stopAutoPlay();
            this.timer = setTimeout(function () {
              if (!_this3.showNext()) {
                _this3.index = -1;

                _this3.showNext();
              }
            }, this.autoPlayInterval);
          }
        }
      }, {
        key: "stopAutoPlay",
        value: function stopAutoPlay() {
          if (this.timer) {
            clearTimeout(this.timer);
          }
        }
      }, {
        key: "showAtIndex",
        value: function showAtIndex(index) {
          this.index = index;
          this.show();
        }
      }, {
        key: "showNext",
        value: function showNext() {
          if (this.canShowNext()) {
            this.index++;

            if (this.index === this.images.length) {
              this.index = 0;
            }

            this.show();
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "showPrev",
        value: function showPrev() {
          if (this.canShowPrev()) {
            this.index--;

            if (this.index < 0) {
              this.index = this.images.length - 1;
            }

            this.show();
          }
        }
      }, {
        key: "canShowNext",
        value: function canShowNext() {
          if (this.loading) {
            return false;
          } else if (this.images) {
            return this.infinityMove || this.index < this.images.length - 1 ? true : false;
          } else {
            return false;
          }
        }
      }, {
        key: "canShowPrev",
        value: function canShowPrev() {
          if (this.loading) {
            return false;
          } else if (this.images) {
            return this.infinityMove || this.index > 0 ? true : false;
          } else {
            return false;
          }
        }
      }, {
        key: "manageFullscreen",
        value: function manageFullscreen() {
          if (this.fullscreen || this.forceFullscreen) {
            var doc = document;

            if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
              this.openFullscreen();
            } else {
              this.closeFullscreen();
            }
          }
        }
      }, {
        key: "getSafeUrl",
        value: function getSafeUrl(image) {
          return image.substr(0, 10) === 'data:image' ? image : this.sanitization.bypassSecurityTrustUrl(image);
        }
      }, {
        key: "zoomIn",
        value: function zoomIn() {
          if (this.canZoomIn()) {
            this.zoomValue += this.zoomStep;

            if (this.zoomValue > this.zoomMax) {
              this.zoomValue = this.zoomMax;
            }
          }
        }
      }, {
        key: "zoomOut",
        value: function zoomOut() {
          if (this.canZoomOut()) {
            this.zoomValue -= this.zoomStep;

            if (this.zoomValue < this.zoomMin) {
              this.zoomValue = this.zoomMin;
            }

            if (this.zoomValue <= 1) {
              this.resetPosition();
            }
          }
        }
      }, {
        key: "rotateLeft",
        value: function rotateLeft() {
          this.rotateValue -= 90;
        }
      }, {
        key: "rotateRight",
        value: function rotateRight() {
          this.rotateValue += 90;
        }
      }, {
        key: "getTransform",
        value: function getTransform() {
          return this.sanitization.bypassSecurityTrustStyle('scale(' + this.zoomValue + ') rotate(' + this.rotateValue + 'deg)');
        }
      }, {
        key: "canZoomIn",
        value: function canZoomIn() {
          return this.zoomValue < this.zoomMax ? true : false;
        }
      }, {
        key: "canZoomOut",
        value: function canZoomOut() {
          return this.zoomValue > this.zoomMin ? true : false;
        }
      }, {
        key: "canDragOnZoom",
        value: function canDragOnZoom() {
          return this.zoom && this.zoomValue > 1;
        }
      }, {
        key: "mouseDownHandler",
        value: function mouseDownHandler(e) {
          if (this.canDragOnZoom()) {
            this.initialX = this.getClientX(e);
            this.initialY = this.getClientY(e);
            this.initialLeft = this.positionLeft;
            this.initialTop = this.positionTop;
            this.isMove = true;
            e.preventDefault();
          }
        }
      }, {
        key: "mouseUpHandler",
        value: function mouseUpHandler(e) {
          this.isMove = false;
        }
      }, {
        key: "mouseMoveHandler",
        value: function mouseMoveHandler(e) {
          if (this.isMove) {
            this.positionLeft = this.initialLeft + (this.getClientX(e) - this.initialX);
            this.positionTop = this.initialTop + (this.getClientY(e) - this.initialY);
          }
        }
      }, {
        key: "getClientX",
        value: function getClientX(e) {
          return e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
        }
      }, {
        key: "getClientY",
        value: function getClientY(e) {
          return e.touches && e.touches.length ? e.touches[0].clientY : e.clientY;
        }
      }, {
        key: "resetPosition",
        value: function resetPosition() {
          if (this.zoom) {
            this.positionLeft = 0;
            this.positionTop = 0;
          }
        }
      }, {
        key: "isKeyboardNext",
        value: function isKeyboardNext(e) {
          return e.keyCode === 39 ? true : false;
        }
      }, {
        key: "isKeyboardPrev",
        value: function isKeyboardPrev(e) {
          return e.keyCode === 37 ? true : false;
        }
      }, {
        key: "isKeyboardEsc",
        value: function isKeyboardEsc(e) {
          return e.keyCode === 27 ? true : false;
        }
      }, {
        key: "openFullscreen",
        value: function openFullscreen() {
          var element = document.documentElement;

          if (element.requestFullscreen) {
            element.requestFullscreen();
          } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
          } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
          } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
          }
        }
      }, {
        key: "closeFullscreen",
        value: function closeFullscreen() {
          if (this.isFullscreen()) {
            var doc = document;

            if (doc.exitFullscreen) {
              doc.exitFullscreen();
            } else if (doc.msExitFullscreen) {
              doc.msExitFullscreen();
            } else if (doc.mozCancelFullScreen) {
              doc.mozCancelFullScreen();
            } else if (doc.webkitExitFullscreen) {
              doc.webkitExitFullscreen();
            }
          }
        }
      }, {
        key: "isFullscreen",
        value: function isFullscreen() {
          var doc = document;
          return doc.fullscreenElement || doc.webkitFullscreenElement || doc.mozFullScreenElement || doc.msFullscreenElement;
        }
      }, {
        key: "show",
        value: function show() {
          var _this4 = this;

          var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this.loading = true;
          this.stopAutoPlay();
          this.onActiveChange.emit(this.index);

          if (first || !this.animation) {
            this._show();
          } else {
            setTimeout(function () {
              return _this4._show();
            }, 600);
          }
        }
      }, {
        key: "_show",
        value: function _show() {
          var _this5 = this;

          this.zoomValue = 1;
          this.rotateValue = 0;
          this.resetPosition();
          this.src = this.getSafeUrl(this.images[this.index]);
          this.srcIndex = this.index;
          this.description = this.descriptions[this.index];
          this.changeDetectorRef.markForCheck();
          setTimeout(function () {
            if (_this5.isLoaded(_this5.previewImage.nativeElement)) {
              _this5.loading = false;

              _this5.startAutoPlay();

              _this5.changeDetectorRef.markForCheck();
            } else {
              setTimeout(function () {
                if (_this5.loading) {
                  _this5.showSpinner = true;

                  _this5.changeDetectorRef.markForCheck();
                }
              });

              _this5.previewImage.nativeElement.onload = function () {
                _this5.loading = false;
                _this5.showSpinner = false;
                _this5.previewImage.nativeElement.onload = null;

                _this5.startAutoPlay();

                _this5.changeDetectorRef.markForCheck();
              };
            }
          });
        }
      }, {
        key: "isLoaded",
        value: function isLoaded(img) {
          if (!img.complete) {
            return false;
          }

          if (typeof img.naturalWidth !== 'undefined' && img.naturalWidth === 0) {
            return false;
          }

          return true;
        }
      }]);

      return NgxGalleryPreviewComponent;
    }();

    NgxGalleryPreviewComponent.ɵfac = function NgxGalleryPreviewComponent_Factory(t) {
      return new (t || NgxGalleryPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NgxGalleryHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
    };

    NgxGalleryPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NgxGalleryPreviewComponent,
      selectors: [["ngx-gallery-preview"]],
      viewQuery: function NgxGalleryPreviewComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.previewImage = _t.first);
        }
      },
      hostBindings: function NgxGalleryPreviewComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NgxGalleryPreviewComponent_mouseenter_HostBindingHandler() {
            return ctx.onMouseEnter();
          })("mouseleave", function NgxGalleryPreviewComponent_mouseleave_HostBindingHandler() {
            return ctx.onMouseLeave();
          });
        }
      },
      inputs: {
        arrows: "arrows",
        images: "images",
        descriptions: "descriptions",
        showDescription: "showDescription",
        arrowsAutoHide: "arrowsAutoHide",
        swipe: "swipe",
        fullscreen: "fullscreen",
        forceFullscreen: "forceFullscreen",
        closeOnClick: "closeOnClick",
        closeOnEsc: "closeOnEsc",
        keyboardNavigation: "keyboardNavigation",
        arrowPrevIcon: "arrowPrevIcon",
        arrowNextIcon: "arrowNextIcon",
        closeIcon: "closeIcon",
        fullscreenIcon: "fullscreenIcon",
        spinnerIcon: "spinnerIcon",
        autoPlay: "autoPlay",
        autoPlayInterval: "autoPlayInterval",
        autoPlayPauseOnHover: "autoPlayPauseOnHover",
        infinityMove: "infinityMove",
        zoom: "zoom",
        zoomStep: "zoomStep",
        zoomMax: "zoomMax",
        zoomMin: "zoomMin",
        zoomInIcon: "zoomInIcon",
        zoomOutIcon: "zoomOutIcon",
        animation: "animation",
        actions: "actions",
        rotate: "rotate",
        rotateLeftIcon: "rotateLeftIcon",
        rotateRightIcon: "rotateRightIcon",
        download: "download",
        downloadIcon: "downloadIcon",
        bullets: "bullets"
      },
      outputs: {
        onOpen: "onOpen",
        onClose: "onClose",
        onActiveChange: "onActiveChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 18,
      vars: 17,
      consts: [[3, "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "onPrevClick", "onNextClick", 4, "ngIf"], [1, "ngx-gallery-preview-top"], [1, "ngx-gallery-preview-icons"], [3, "icon", "disabled", "titleText", "onClick", 4, "ngFor", "ngForOf"], ["class", "ngx-gallery-icon", "aria-hidden", "true", "download", "", 3, "href", 4, "ngIf"], [3, "icon", "disabled", "onClick", 4, "ngIf"], [3, "icon", "onClick", 4, "ngIf"], [3, "icon", "onClick"], [1, "ngx-spinner-wrapper", "ngx-gallery-center"], ["aria-hidden", "true"], [1, "ngx-gallery-preview-wrapper", 3, "click", "mouseup", "mousemove", "touchend", "touchmove"], [1, "ngx-gallery-preview-img-wrapper"], ["class", "ngx-gallery-preview-img ngx-gallery-center", 3, "src", "ngx-gallery-active", "animation", "ngx-gallery-grab", "transform", "left", "top", "click", "mouseenter", "mouseleave", "mousedown", "touchstart", 4, "ngIf"], [3, "count", "active", "onChange", 4, "ngIf"], ["class", "ngx-gallery-preview-text", 3, "innerHTML", "click", 4, "ngIf"], [3, "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "onPrevClick", "onNextClick"], [3, "icon", "disabled", "titleText", "onClick"], ["aria-hidden", "true", "download", "", 1, "ngx-gallery-icon", 3, "href"], [3, "icon", "disabled", "onClick"], [1, "ngx-gallery-preview-img", "ngx-gallery-center", 3, "src", "click", "mouseenter", "mouseleave", "mousedown", "touchstart"], ["previewImage", ""], [3, "count", "active", "onChange"], [1, "ngx-gallery-preview-text", 3, "innerHTML", "click"]],
      template: function NgxGalleryPreviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NgxGalleryPreviewComponent_ngx_gallery_arrows_0_Template, 1, 4, "ngx-gallery-arrows", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NgxGalleryPreviewComponent_ngx_gallery_action_3_Template, 1, 3, "ngx-gallery-action", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NgxGalleryPreviewComponent_a_4_Template, 2, 4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NgxGalleryPreviewComponent_ngx_gallery_action_5_Template, 1, 2, "ngx-gallery-action", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NgxGalleryPreviewComponent_ngx_gallery_action_6_Template, 1, 2, "ngx-gallery-action", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NgxGalleryPreviewComponent_ngx_gallery_action_7_Template, 1, 1, "ngx-gallery-action", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NgxGalleryPreviewComponent_ngx_gallery_action_8_Template, 1, 1, "ngx-gallery-action", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NgxGalleryPreviewComponent_ngx_gallery_action_9_Template, 1, 1, "ngx-gallery-action", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ngx-gallery-action", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function NgxGalleryPreviewComponent_Template_ngx_gallery_action_onClick_10_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxGalleryPreviewComponent_Template_div_click_13_listener() {
            return ctx.closeOnClick && ctx.close();
          })("mouseup", function NgxGalleryPreviewComponent_Template_div_mouseup_13_listener($event) {
            return ctx.mouseUpHandler($event);
          })("mousemove", function NgxGalleryPreviewComponent_Template_div_mousemove_13_listener($event) {
            return ctx.mouseMoveHandler($event);
          })("touchend", function NgxGalleryPreviewComponent_Template_div_touchend_13_listener($event) {
            return ctx.mouseUpHandler($event);
          })("touchmove", function NgxGalleryPreviewComponent_Template_div_touchmove_13_listener($event) {
            return ctx.mouseMoveHandler($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, NgxGalleryPreviewComponent_img_15_Template, 2, 13, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, NgxGalleryPreviewComponent_ngx_gallery_bullets_16_Template, 1, 2, "ngx-gallery-bullets", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, NgxGalleryPreviewComponent_div_17_Template, 1, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.arrows);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.actions);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.download && ctx.src);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.zoom);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.zoom);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rotate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rotate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fullscreen);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "ngx-gallery-close " + ctx.closeIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ngx-gallery-active", ctx.showSpinner);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("ngx-gallery-icon ngx-gallery-spinner ", ctx.spinnerIcon, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.src);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bullets);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showDescription && ctx.description);
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], NgxGalleryActionComponent, NgxGalleryArrowsComponent, NgxGalleryBulletsComponent];
      },
      styles: [".ngx-gallery-active[_nghost-%COMP%]{width:100%;height:100%;position:fixed;left:0;top:0;background:rgba(0,0,0,.7);z-index:10000;display:inline-block}[_nghost-%COMP%]{display:none}[_nghost-%COMP%] .ngx-gallery-arrow{font-size:50px}[_nghost-%COMP%] ngx-gallery-bullets{height:5%;-webkit-box-align:center;align-items:center;padding:0}.ngx-gallery-preview-img[_ngcontent-%COMP%]{opacity:0;max-width:90%;max-height:90%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}.ngx-gallery-preview-img.animation[_ngcontent-%COMP%]{-webkit-transition:opacity .5s linear,-webkit-transform .5s;transition:opacity .5s linear,transform .5s,-webkit-transform .5s}.ngx-gallery-preview-img.ngx-gallery-active[_ngcontent-%COMP%]{opacity:1}.ngx-gallery-preview-img.ngx-gallery-grab[_ngcontent-%COMP%]{cursor:grab;cursor:-webkit-grab}.ngx-gallery-icon.ngx-gallery-spinner[_ngcontent-%COMP%]{font-size:50px;left:0;display:inline-block}[_nghost-%COMP%] .ngx-gallery-preview-top{position:absolute;width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[_nghost-%COMP%] .ngx-gallery-preview-icons{float:right}[_nghost-%COMP%] .ngx-gallery-preview-icons .ngx-gallery-icon{position:relative;margin-right:10px;margin-top:10px;font-size:25px;cursor:pointer;text-decoration:none}[_nghost-%COMP%] .ngx-gallery-preview-icons .ngx-gallery-icon.ngx-gallery-icon-disabled{cursor:default;opacity:.4}.ngx-spinner-wrapper[_ngcontent-%COMP%]{width:50px;height:50px;display:none}.ngx-spinner-wrapper.ngx-gallery-active[_ngcontent-%COMP%]{display:inline-block}.ngx-gallery-center[_ngcontent-%COMP%]{position:absolute;left:0;right:0;bottom:0;margin:auto;top:0}.ngx-gallery-preview-text[_ngcontent-%COMP%]{width:100%;background:rgba(0,0,0,.7);padding:10px;text-align:center;color:#fff;font-size:16px;-webkit-box-flex:0;flex:0 1 auto;z-index:10}.ngx-gallery-preview-wrapper[_ngcontent-%COMP%]{width:100%;height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}.ngx-gallery-preview-img-wrapper[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1 1 auto;position:relative}"]
    });

    NgxGalleryPreviewComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: NgxGalleryHelperService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "images", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "descriptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "showDescription", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "arrows", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "arrowsAutoHide", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "swipe", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "fullscreen", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "forceFullscreen", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "closeOnClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "closeOnEsc", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "keyboardNavigation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "arrowPrevIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "arrowNextIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "closeIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "fullscreenIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "spinnerIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "autoPlay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "autoPlayInterval", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "autoPlayPauseOnHover", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "infinityMove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "zoom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "zoomStep", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "zoomMax", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "zoomMin", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "zoomInIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "zoomOutIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "animation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "actions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "rotate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "rotateLeftIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "rotateRightIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "download", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "downloadIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryPreviewComponent.prototype, "bullets", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxGalleryPreviewComponent.prototype, "onOpen", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxGalleryPreviewComponent.prototype, "onClose", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxGalleryPreviewComponent.prototype, "onActiveChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('previewImage')], NgxGalleryPreviewComponent.prototype, "previewImage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter')], NgxGalleryPreviewComponent.prototype, "onMouseEnter", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave')], NgxGalleryPreviewComponent.prototype, "onMouseLeave", null);

    var NgxGalleryImageComponent = /*#__PURE__*/function () {
      function NgxGalleryImageComponent(sanitization, elementRef, helperService) {
        _classCallCheck(this, NgxGalleryImageComponent);

        this.sanitization = sanitization;
        this.elementRef = elementRef;
        this.helperService = helperService;
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onActiveChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.canChangeImage = true;
      }

      _createClass(NgxGalleryImageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.arrows && this.arrowsAutoHide) {
            this.arrows = false;
          }

          if (this.autoPlay) {
            this.startAutoPlay();
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this6 = this;

          if (changes['swipe']) {
            this.helperService.manageSwipe(this.swipe, this.elementRef, 'image', function () {
              return _this6.showNext();
            }, function () {
              return _this6.showPrev();
            });
          }
        }
      }, {
        key: "onMouseEnter",
        value: function onMouseEnter() {
          if (this.arrowsAutoHide && !this.arrows) {
            this.arrows = true;
          }

          if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.stopAutoPlay();
          }
        }
      }, {
        key: "onMouseLeave",
        value: function onMouseLeave() {
          if (this.arrowsAutoHide && this.arrows) {
            this.arrows = false;
          }

          if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.startAutoPlay();
          }
        }
      }, {
        key: "reset",
        value: function reset(index) {
          this.selectedIndex = index;
        }
      }, {
        key: "getImages",
        value: function getImages() {
          if (!this.images) {
            return [];
          }

          if (this.lazyLoading) {
            var indexes = [this.selectedIndex];
            var prevIndex = this.selectedIndex - 1;

            if (prevIndex === -1 && this.infinityMove) {
              indexes.push(this.images.length - 1);
            } else if (prevIndex >= 0) {
              indexes.push(prevIndex);
            }

            var nextIndex = this.selectedIndex + 1;

            if (nextIndex == this.images.length && this.infinityMove) {
              indexes.push(0);
            } else if (nextIndex < this.images.length) {
              indexes.push(nextIndex);
            }

            return this.images.filter(function (img, i) {
              return indexes.indexOf(i) != -1;
            });
          } else {
            return this.images;
          }
        }
      }, {
        key: "startAutoPlay",
        value: function startAutoPlay() {
          var _this7 = this;

          this.stopAutoPlay();
          this.timer = setInterval(function () {
            if (!_this7.showNext()) {
              _this7.selectedIndex = -1;

              _this7.showNext();
            }
          }, this.autoPlayInterval);
        }
      }, {
        key: "stopAutoPlay",
        value: function stopAutoPlay() {
          if (this.timer) {
            clearInterval(this.timer);
          }
        }
      }, {
        key: "handleClick",
        value: function handleClick(event, index) {
          if (this.clickable) {
            this.onClick.emit(index);
            event.stopPropagation();
            event.preventDefault();
          }
        }
      }, {
        key: "show",
        value: function show(index) {
          this.selectedIndex = index;
          this.onActiveChange.emit(this.selectedIndex);
          this.setChangeTimeout();
        }
      }, {
        key: "showNext",
        value: function showNext() {
          if (this.canShowNext() && this.canChangeImage) {
            this.selectedIndex++;

            if (this.selectedIndex === this.images.length) {
              this.selectedIndex = 0;
            }

            this.onActiveChange.emit(this.selectedIndex);
            this.setChangeTimeout();
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "showPrev",
        value: function showPrev() {
          if (this.canShowPrev() && this.canChangeImage) {
            this.selectedIndex--;

            if (this.selectedIndex < 0) {
              this.selectedIndex = this.images.length - 1;
            }

            this.onActiveChange.emit(this.selectedIndex);
            this.setChangeTimeout();
          }
        }
      }, {
        key: "setChangeTimeout",
        value: function setChangeTimeout() {
          var _this8 = this;

          this.canChangeImage = false;
          var timeout = 1000;

          if (this.animation === NgxGalleryAnimation.Slide || this.animation === NgxGalleryAnimation.Fade) {
            timeout = 500;
          }

          setTimeout(function () {
            _this8.canChangeImage = true;
          }, timeout);
        }
      }, {
        key: "canShowNext",
        value: function canShowNext() {
          if (this.images) {
            return this.infinityMove || this.selectedIndex < this.images.length - 1 ? true : false;
          } else {
            return false;
          }
        }
      }, {
        key: "canShowPrev",
        value: function canShowPrev() {
          if (this.images) {
            return this.infinityMove || this.selectedIndex > 0 ? true : false;
          } else {
            return false;
          }
        }
      }, {
        key: "getSafeUrl",
        value: function getSafeUrl(image) {
          return this.sanitization.bypassSecurityTrustStyle(this.helperService.getBackgroundUrl(image));
        }
      }]);

      return NgxGalleryImageComponent;
    }();

    NgxGalleryImageComponent.ɵfac = function NgxGalleryImageComponent_Factory(t) {
      return new (t || NgxGalleryImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NgxGalleryHelperService));
    };

    NgxGalleryImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NgxGalleryImageComponent,
      selectors: [["ngx-gallery-image"]],
      hostBindings: function NgxGalleryImageComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NgxGalleryImageComponent_mouseenter_HostBindingHandler() {
            return ctx.onMouseEnter();
          })("mouseleave", function NgxGalleryImageComponent_mouseleave_HostBindingHandler() {
            return ctx.onMouseLeave();
          });
        }
      },
      inputs: {
        arrows: "arrows",
        selectedIndex: "selectedIndex",
        images: "images",
        clickable: "clickable",
        arrowsAutoHide: "arrowsAutoHide",
        swipe: "swipe",
        animation: "animation",
        size: "size",
        arrowPrevIcon: "arrowPrevIcon",
        arrowNextIcon: "arrowNextIcon",
        autoPlay: "autoPlay",
        autoPlayInterval: "autoPlayInterval",
        autoPlayPauseOnHover: "autoPlayPauseOnHover",
        infinityMove: "infinityMove",
        lazyLoading: "lazyLoading",
        actions: "actions",
        descriptions: "descriptions",
        showDescription: "showDescription",
        bullets: "bullets"
      },
      outputs: {
        onClick: "onClick",
        onActiveChange: "onActiveChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 4,
      vars: 7,
      consts: [["class", "ngx-gallery-image", 3, "ngClass", "background-image", "click", 4, "ngFor", "ngForOf"], [3, "count", "active", "onChange", 4, "ngIf"], [3, "class", "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "onPrevClick", "onNextClick", 4, "ngIf"], [1, "ngx-gallery-image", 3, "ngClass", "click"], [1, "ngx-gallery-icons-wrapper"], [3, "icon", "disabled", "titleText", "onClick", 4, "ngFor", "ngForOf"], ["class", "ngx-gallery-image-text", 3, "innerHTML", "click", 4, "ngIf"], [3, "icon", "disabled", "titleText", "onClick"], [1, "ngx-gallery-image-text", 3, "innerHTML", "click"], [3, "count", "active", "onChange"], [3, "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "onPrevClick", "onNextClick"]],
      template: function NgxGalleryImageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgxGalleryImageComponent_div_1_Template, 4, 10, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgxGalleryImageComponent_ngx_gallery_bullets_2_Template, 1, 2, "ngx-gallery-bullets", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NgxGalleryImageComponent_ngx_gallery_arrows_3_Template, 1, 7, "ngx-gallery-arrows", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate2"]("ngx-gallery-image-wrapper ngx-gallery-animation-", ctx.animation, " ngx-gallery-image-size-", ctx.size, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getImages());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bullets);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.arrows);
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], NgxGalleryActionComponent, NgxGalleryBulletsComponent, NgxGalleryArrowsComponent];
      },
      styles: ["[_nghost-%COMP%]{width:100%;display:inline-block;position:relative}.ngx-gallery-image-wrapper[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;left:0;top:0;overflow:hidden}.ngx-gallery-image[_ngcontent-%COMP%]{background-position:center;background-repeat:no-repeat;height:100%;width:100%;position:absolute;top:0}.ngx-gallery-image.ngx-gallery-active[_ngcontent-%COMP%]{z-index:1000}.ngx-gallery-image-size-cover[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{background-size:cover}.ngx-gallery-image-size-contain[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{background-size:contain}.ngx-gallery-animation-fade[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{left:0;opacity:0;-webkit-transition:.5s ease-in-out;transition:.5s ease-in-out}.ngx-gallery-animation-fade[_ngcontent-%COMP%]   .ngx-gallery-image.ngx-gallery-active[_ngcontent-%COMP%]{opacity:1}.ngx-gallery-animation-slide[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{-webkit-transition:.5s ease-in-out;transition:.5s ease-in-out}.ngx-gallery-animation-slide[_ngcontent-%COMP%]   .ngx-gallery-image.ngx-gallery-active[_ngcontent-%COMP%]{left:0}.ngx-gallery-animation-slide[_ngcontent-%COMP%]   .ngx-gallery-image.ngx-gallery-inactive-left[_ngcontent-%COMP%]{left:-100%}.ngx-gallery-animation-slide[_ngcontent-%COMP%]   .ngx-gallery-image.ngx-gallery-inactive-right[_ngcontent-%COMP%]{left:100%}.ngx-gallery-animation-rotate[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{-webkit-transition:1s;transition:1s;-webkit-transform:scale(3.5,3.5) rotate(90deg);transform:scale(3.5,3.5) rotate(90deg);left:0;opacity:0}.ngx-gallery-animation-rotate[_ngcontent-%COMP%]   .ngx-gallery-image.ngx-gallery-active[_ngcontent-%COMP%]{-webkit-transform:scale(1,1) rotate(0);transform:scale(1,1) rotate(0);opacity:1}.ngx-gallery-animation-zoom[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{-webkit-transition:1s;transition:1s;-webkit-transform:scale(2.5,2.5);transform:scale(2.5,2.5);left:0;opacity:0}.ngx-gallery-animation-zoom[_ngcontent-%COMP%]   .ngx-gallery-image.ngx-gallery-active[_ngcontent-%COMP%]{-webkit-transform:scale(1,1);transform:scale(1,1);opacity:1}.ngx-gallery-image-text[_ngcontent-%COMP%]{width:100%;background:rgba(0,0,0,.7);padding:10px;text-align:center;color:#fff;font-size:16px;position:absolute;bottom:0;z-index:10}"]
    });

    NgxGalleryImageComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: NgxGalleryHelperService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryImageComponent.prototype, "images", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryImageComponent.prototype, "clickable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryImageComponent.prototype, "selectedIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryImageComponent.prototype, "arrows", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryImageComponent.prototype, "arrowsAutoHide", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryImageComponent.prototype, "swipe", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryImageComponent.prototype, "animation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryImageComponent.prototype, "size", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryImageComponent.prototype, "arrowPrevIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryImageComponent.prototype, "arrowNextIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryImageComponent.prototype, "autoPlay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryImageComponent.prototype, "autoPlayInterval", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryImageComponent.prototype, "autoPlayPauseOnHover", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryImageComponent.prototype, "infinityMove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryImageComponent.prototype, "lazyLoading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryImageComponent.prototype, "actions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryImageComponent.prototype, "descriptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryImageComponent.prototype, "showDescription", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryImageComponent.prototype, "bullets", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxGalleryImageComponent.prototype, "onClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxGalleryImageComponent.prototype, "onActiveChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter')], NgxGalleryImageComponent.prototype, "onMouseEnter", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave')], NgxGalleryImageComponent.prototype, "onMouseLeave", null);

    var NgxGalleryThumbnailsComponent = /*#__PURE__*/function () {
      function NgxGalleryThumbnailsComponent(sanitization, elementRef, helperService) {
        _classCallCheck(this, NgxGalleryThumbnailsComponent);

        this.sanitization = sanitization;
        this.elementRef = elementRef;
        this.helperService = helperService;
        this.minStopIndex = 0;
        this.onActiveChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.index = 0;
      }

      _createClass(NgxGalleryThumbnailsComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this9 = this;

          if (changes['selectedIndex']) {
            this.validateIndex();
          }

          if (changes['swipe']) {
            this.helperService.manageSwipe(this.swipe, this.elementRef, 'thumbnails', function () {
              return _this9.moveRight();
            }, function () {
              return _this9.moveLeft();
            });
          }

          if (this.images) {
            this.remainingCountValue = this.images.length - this.rows * this.columns;
          }
        }
      }, {
        key: "onMouseEnter",
        value: function onMouseEnter() {
          this.mouseenter = true;
        }
      }, {
        key: "onMouseLeave",
        value: function onMouseLeave() {
          this.mouseenter = false;
        }
      }, {
        key: "reset",
        value: function reset(index) {
          this.selectedIndex = index;
          this.setDefaultPosition();
          this.index = 0;
          this.validateIndex();
        }
      }, {
        key: "getImages",
        value: function getImages() {
          if (!this.images) {
            return [];
          }

          if (this.remainingCount) {
            return this.images.slice(0, this.rows * this.columns);
          } else if (this.lazyLoading && this.order != NgxGalleryOrder.Row) {
            var stopIndex = 0;

            if (this.order === NgxGalleryOrder.Column) {
              stopIndex = (this.index + this.columns + this.moveSize) * this.rows;
            } else if (this.order === NgxGalleryOrder.Page) {
              stopIndex = this.index + this.columns * this.rows * 2;
            }

            if (stopIndex <= this.minStopIndex) {
              stopIndex = this.minStopIndex;
            } else {
              this.minStopIndex = stopIndex;
            }

            return this.images.slice(0, stopIndex);
          } else {
            return this.images;
          }
        }
      }, {
        key: "handleClick",
        value: function handleClick(event, index) {
          if (!this.hasLink(index)) {
            this.selectedIndex = index;
            this.onActiveChange.emit(index);
            event.stopPropagation();
            event.preventDefault();
          }
        }
      }, {
        key: "hasLink",
        value: function hasLink(index) {
          if (this.links && this.links.length && this.links[index]) return true;
        }
      }, {
        key: "moveRight",
        value: function moveRight() {
          if (this.canMoveRight()) {
            this.index += this.moveSize;
            var maxIndex = this.getMaxIndex() - this.columns;

            if (this.index > maxIndex) {
              this.index = maxIndex;
            }

            this.setThumbnailsPosition();
          }
        }
      }, {
        key: "moveLeft",
        value: function moveLeft() {
          if (this.canMoveLeft()) {
            this.index -= this.moveSize;

            if (this.index < 0) {
              this.index = 0;
            }

            this.setThumbnailsPosition();
          }
        }
      }, {
        key: "canMoveRight",
        value: function canMoveRight() {
          return this.index + this.columns < this.getMaxIndex() ? true : false;
        }
      }, {
        key: "canMoveLeft",
        value: function canMoveLeft() {
          return this.index !== 0 ? true : false;
        }
      }, {
        key: "getThumbnailLeft",
        value: function getThumbnailLeft(index) {
          var calculatedIndex;

          if (this.order === NgxGalleryOrder.Column) {
            calculatedIndex = Math.floor(index / this.rows);
          } else if (this.order === NgxGalleryOrder.Page) {
            calculatedIndex = index % this.columns + Math.floor(index / (this.rows * this.columns)) * this.columns;
          } else if (this.order == NgxGalleryOrder.Row && this.remainingCount) {
            calculatedIndex = index % this.columns;
          } else {
            calculatedIndex = index % Math.ceil(this.images.length / this.rows);
          }

          return this.getThumbnailPosition(calculatedIndex, this.columns);
        }
      }, {
        key: "getThumbnailTop",
        value: function getThumbnailTop(index) {
          var calculatedIndex;

          if (this.order === NgxGalleryOrder.Column) {
            calculatedIndex = index % this.rows;
          } else if (this.order === NgxGalleryOrder.Page) {
            calculatedIndex = Math.floor(index / this.columns) - Math.floor(index / (this.rows * this.columns)) * this.rows;
          } else if (this.order == NgxGalleryOrder.Row && this.remainingCount) {
            calculatedIndex = Math.floor(index / this.columns);
          } else {
            calculatedIndex = Math.floor(index / Math.ceil(this.images.length / this.rows));
          }

          return this.getThumbnailPosition(calculatedIndex, this.rows);
        }
      }, {
        key: "getThumbnailWidth",
        value: function getThumbnailWidth() {
          return this.getThumbnailDimension(this.columns);
        }
      }, {
        key: "getThumbnailHeight",
        value: function getThumbnailHeight() {
          return this.getThumbnailDimension(this.rows);
        }
      }, {
        key: "setThumbnailsPosition",
        value: function setThumbnailsPosition() {
          this.thumbnailsLeft = -(100 / this.columns * this.index) + '%';
          this.thumbnailsMarginLeft = -((this.margin - (this.columns - 1) * this.margin / this.columns) * this.index) + 'px';
        }
      }, {
        key: "setDefaultPosition",
        value: function setDefaultPosition() {
          this.thumbnailsLeft = '0px';
          this.thumbnailsMarginLeft = '0px';
        }
      }, {
        key: "canShowArrows",
        value: function canShowArrows() {
          if (this.remainingCount) {
            return false;
          } else if (this.arrows && this.images && this.images.length > this.getVisibleCount() && (!this.arrowsAutoHide || this.mouseenter)) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "validateIndex",
        value: function validateIndex() {
          if (this.images) {
            var newIndex;

            if (this.order === NgxGalleryOrder.Column) {
              newIndex = Math.floor(this.selectedIndex / this.rows);
            } else {
              newIndex = this.selectedIndex % Math.ceil(this.images.length / this.rows);
            }

            if (this.remainingCount) {
              newIndex = 0;
            }

            if (newIndex < this.index || newIndex >= this.index + this.columns) {
              var maxIndex = this.getMaxIndex() - this.columns;
              this.index = newIndex > maxIndex ? maxIndex : newIndex;
              this.setThumbnailsPosition();
            }
          }
        }
      }, {
        key: "getSafeUrl",
        value: function getSafeUrl(image) {
          return this.sanitization.bypassSecurityTrustStyle(this.helperService.getBackgroundUrl(image));
        }
      }, {
        key: "getThumbnailPosition",
        value: function getThumbnailPosition(index, count) {
          return this.getSafeStyle('calc(' + 100 / count * index + '% + ' + (this.margin - (count - 1) * this.margin / count) * index + 'px)');
        }
      }, {
        key: "getThumbnailDimension",
        value: function getThumbnailDimension(count) {
          if (this.margin !== 0) {
            return this.getSafeStyle('calc(' + 100 / count + '% - ' + (count - 1) * this.margin / count + 'px)');
          } else {
            return this.getSafeStyle('calc(' + 100 / count + '% + 1px)');
          }
        }
      }, {
        key: "getMaxIndex",
        value: function getMaxIndex() {
          if (this.order == NgxGalleryOrder.Page) {
            var maxIndex = Math.floor(this.images.length / this.getVisibleCount()) * this.columns;

            if (this.images.length % this.getVisibleCount() > this.columns) {
              maxIndex += this.columns;
            } else {
              maxIndex += this.images.length % this.getVisibleCount();
            }

            return maxIndex;
          } else {
            return Math.ceil(this.images.length / this.rows);
          }
        }
      }, {
        key: "getVisibleCount",
        value: function getVisibleCount() {
          return this.columns * this.rows;
        }
      }, {
        key: "getSafeStyle",
        value: function getSafeStyle(value) {
          return this.sanitization.bypassSecurityTrustStyle(value);
        }
      }]);

      return NgxGalleryThumbnailsComponent;
    }();

    NgxGalleryThumbnailsComponent.ɵfac = function NgxGalleryThumbnailsComponent_Factory(t) {
      return new (t || NgxGalleryThumbnailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NgxGalleryHelperService));
    };

    NgxGalleryThumbnailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NgxGalleryThumbnailsComponent,
      selectors: [["ngx-gallery-thumbnails"]],
      hostBindings: function NgxGalleryThumbnailsComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NgxGalleryThumbnailsComponent_mouseenter_HostBindingHandler() {
            return ctx.onMouseEnter();
          })("mouseleave", function NgxGalleryThumbnailsComponent_mouseleave_HostBindingHandler() {
            return ctx.onMouseLeave();
          });
        }
      },
      inputs: {
        selectedIndex: "selectedIndex",
        images: "images",
        links: "links",
        labels: "labels",
        linkTarget: "linkTarget",
        columns: "columns",
        rows: "rows",
        arrows: "arrows",
        arrowsAutoHide: "arrowsAutoHide",
        margin: "margin",
        clickable: "clickable",
        swipe: "swipe",
        size: "size",
        arrowPrevIcon: "arrowPrevIcon",
        arrowNextIcon: "arrowNextIcon",
        moveSize: "moveSize",
        order: "order",
        remainingCount: "remainingCount",
        lazyLoading: "lazyLoading",
        actions: "actions"
      },
      outputs: {
        onActiveChange: "onActiveChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 4,
      vars: 9,
      consts: [[1, "ngx-gallery-thumbnails"], ["class", "ngx-gallery-thumbnail", 3, "href", "target", "background-image", "width", "height", "left", "top", "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "onPrevClick", "onNextClick", 4, "ngIf"], [1, "ngx-gallery-thumbnail", 3, "href", "target", "ngClass", "click"], [1, "ngx-gallery-icons-wrapper"], [3, "icon", "disabled", "titleText", "onClick", 4, "ngFor", "ngForOf"], ["class", "ngx-gallery-remaining-count-overlay", 4, "ngIf"], [3, "icon", "disabled", "titleText", "onClick"], [1, "ngx-gallery-remaining-count-overlay"], [1, "ngx-gallery-remaining-count"], [3, "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "onPrevClick", "onNextClick"]],
      template: function NgxGalleryThumbnailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgxGalleryThumbnailsComponent_a_2_Template, 4, 19, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NgxGalleryThumbnailsComponent_ngx_gallery_arrows_3_Template, 1, 4, "ngx-gallery-arrows", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("ngx-gallery-thumbnails-wrapper ngx-gallery-thumbnail-size-", ctx.size, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("transform", "translateX(" + ctx.thumbnailsLeft + ")")("margin-left", ctx.thumbnailsMarginLeft);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getImages());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.canShowArrows());
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], NgxGalleryActionComponent, NgxGalleryArrowsComponent];
      },
      styles: ["[_nghost-%COMP%]{width:100%;display:inline-block;position:relative}.ngx-gallery-thumbnails-wrapper[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;overflow:hidden}.ngx-gallery-thumbnails[_ngcontent-%COMP%]{height:100%;width:100%;position:absolute;left:0;-webkit-transform:translateX(0);transform:translateX(0);-webkit-transition:-webkit-transform .5s ease-in-out;transition:transform .5s ease-in-out;transition:transform .5s ease-in-out,-webkit-transform .5s ease-in-out;will-change:transform}.ngx-gallery-thumbnails[_ngcontent-%COMP%]   .ngx-gallery-thumbnail[_ngcontent-%COMP%]{position:absolute;height:100%;background-position:center;background-repeat:no-repeat;text-decoration:none}.ngx-gallery-thumbnail-size-cover[_ngcontent-%COMP%]   .ngx-gallery-thumbnails[_ngcontent-%COMP%]   .ngx-gallery-thumbnail[_ngcontent-%COMP%]{background-size:cover}.ngx-gallery-thumbnail-size-contain[_ngcontent-%COMP%]   .ngx-gallery-thumbnails[_ngcontent-%COMP%]   .ngx-gallery-thumbnail[_ngcontent-%COMP%]{background-size:contain}.ngx-gallery-remaining-count-overlay[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;left:0;top:0;background-color:rgba(0,0,0,.4)}.ngx-gallery-remaining-count[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:#fff;font-size:30px}"]
    });

    NgxGalleryThumbnailsComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: NgxGalleryHelperService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryThumbnailsComponent.prototype, "images", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryThumbnailsComponent.prototype, "links", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryThumbnailsComponent.prototype, "labels", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryThumbnailsComponent.prototype, "linkTarget", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryThumbnailsComponent.prototype, "columns", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryThumbnailsComponent.prototype, "rows", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryThumbnailsComponent.prototype, "arrows", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryThumbnailsComponent.prototype, "arrowsAutoHide", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryThumbnailsComponent.prototype, "margin", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryThumbnailsComponent.prototype, "selectedIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryThumbnailsComponent.prototype, "clickable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryThumbnailsComponent.prototype, "swipe", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryThumbnailsComponent.prototype, "size", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryThumbnailsComponent.prototype, "arrowPrevIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryThumbnailsComponent.prototype, "arrowNextIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryThumbnailsComponent.prototype, "moveSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryThumbnailsComponent.prototype, "order", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryThumbnailsComponent.prototype, "remainingCount", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryThumbnailsComponent.prototype, "lazyLoading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryThumbnailsComponent.prototype, "actions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxGalleryThumbnailsComponent.prototype, "onActiveChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter')], NgxGalleryThumbnailsComponent.prototype, "onMouseEnter", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave')], NgxGalleryThumbnailsComponent.prototype, "onMouseLeave", null);

    var NgxGalleryComponent = /*#__PURE__*/function () {
      function NgxGalleryComponent(myElement) {
        _classCallCheck(this, NgxGalleryComponent);

        this.myElement = myElement;
        this.imagesReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.previewOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.previewClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.previewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.oldImagesLength = 0;
        this.selectedIndex = 0;
        this.breakpoint = undefined;
        this.prevBreakpoint = undefined;
      }

      _createClass(NgxGalleryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.options = this.options.map(function (opt) {
            return new NgxGalleryOptions(opt);
          });
          this.sortOptions();
          this.setBreakpoint();
          this.setOptions();
          this.checkFullWidth();

          if (this.currentOptions) {
            this.selectedIndex = this.currentOptions.startIndex;
          }
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this.images !== undefined && this.images.length !== this.oldImagesLength || this.images !== this.oldImages) {
            this.oldImagesLength = this.images.length;
            this.oldImages = this.images;
            this.setOptions();
            this.setImages();

            if (this.images && this.images.length) {
              this.imagesReady.emit();
            }

            if (this.image) {
              this.image.reset(this.currentOptions.startIndex);
            }

            if (this.currentOptions.thumbnailsAutoHide && this.currentOptions.thumbnails && this.images.length <= 1) {
              this.currentOptions.thumbnails = false;
              this.currentOptions.imageArrows = false;
            }

            this.resetThumbnails();
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.checkFullWidth();
        }
      }, {
        key: "onResize",
        value: function onResize() {
          var _this10 = this;

          this.setBreakpoint();

          if (this.prevBreakpoint !== this.breakpoint) {
            this.setOptions();
            this.resetThumbnails();
          }

          if (this.currentOptions && this.currentOptions.fullWidth) {
            if (this.fullWidthTimeout) {
              clearTimeout(this.fullWidthTimeout);
            }

            this.fullWidthTimeout = setTimeout(function () {
              _this10.checkFullWidth();
            }, 200);
          }
        }
      }, {
        key: "getImageHeight",
        value: function getImageHeight() {
          return this.currentOptions && this.currentOptions.thumbnails ? this.currentOptions.imagePercent + '%' : '100%';
        }
      }, {
        key: "getThumbnailsHeight",
        value: function getThumbnailsHeight() {
          if (this.currentOptions && this.currentOptions.image) {
            return 'calc(' + this.currentOptions.thumbnailsPercent + '% - ' + this.currentOptions.thumbnailsMargin + 'px)';
          } else {
            return '100%';
          }
        }
      }, {
        key: "getThumbnailsMarginTop",
        value: function getThumbnailsMarginTop() {
          if (this.currentOptions && this.currentOptions.layout === NgxGalleryLayout.ThumbnailsBottom) {
            return this.currentOptions.thumbnailsMargin + 'px';
          } else {
            return '0px';
          }
        }
      }, {
        key: "getThumbnailsMarginBottom",
        value: function getThumbnailsMarginBottom() {
          if (this.currentOptions && this.currentOptions.layout === NgxGalleryLayout.ThumbnailsTop) {
            return this.currentOptions.thumbnailsMargin + 'px';
          } else {
            return '0px';
          }
        }
      }, {
        key: "openPreview",
        value: function openPreview(index) {
          if (this.currentOptions.previewCustom) {
            this.currentOptions.previewCustom(index);
          } else {
            this.previewEnabled = true;
            this.preview.open(index);
          }
        }
      }, {
        key: "onPreviewOpen",
        value: function onPreviewOpen() {
          this.previewOpen.emit();

          if (this.image && this.image.autoPlay) {
            this.image.stopAutoPlay();
          }
        }
      }, {
        key: "onPreviewClose",
        value: function onPreviewClose() {
          this.previewEnabled = false;
          this.previewClose.emit();

          if (this.image && this.image.autoPlay) {
            this.image.startAutoPlay();
          }
        }
      }, {
        key: "selectFromImage",
        value: function selectFromImage(index) {
          this.select(index);
        }
      }, {
        key: "selectFromThumbnails",
        value: function selectFromThumbnails(index) {
          this.select(index);

          if (this.currentOptions && this.currentOptions.thumbnails && this.currentOptions.preview && (!this.currentOptions.image || this.currentOptions.thumbnailsRemainingCount)) {
            this.openPreview(this.selectedIndex);
          }
        }
      }, {
        key: "show",
        value: function show(index) {
          this.select(index);
        }
      }, {
        key: "showNext",
        value: function showNext() {
          this.image.showNext();
        }
      }, {
        key: "showPrev",
        value: function showPrev() {
          this.image.showPrev();
        }
      }, {
        key: "canShowNext",
        value: function canShowNext() {
          if (this.images && this.currentOptions) {
            return this.currentOptions.imageInfinityMove || this.selectedIndex < this.images.length - 1 ? true : false;
          } else {
            return false;
          }
        }
      }, {
        key: "canShowPrev",
        value: function canShowPrev() {
          if (this.images && this.currentOptions) {
            return this.currentOptions.imageInfinityMove || this.selectedIndex > 0 ? true : false;
          } else {
            return false;
          }
        }
      }, {
        key: "previewSelect",
        value: function previewSelect(index) {
          this.previewChange.emit({
            index: index,
            image: this.images[index]
          });
        }
      }, {
        key: "moveThumbnailsRight",
        value: function moveThumbnailsRight() {
          this.thubmnails.moveRight();
        }
      }, {
        key: "moveThumbnailsLeft",
        value: function moveThumbnailsLeft() {
          this.thubmnails.moveLeft();
        }
      }, {
        key: "canMoveThumbnailsRight",
        value: function canMoveThumbnailsRight() {
          return this.thubmnails.canMoveRight();
        }
      }, {
        key: "canMoveThumbnailsLeft",
        value: function canMoveThumbnailsLeft() {
          return this.thubmnails.canMoveLeft();
        }
      }, {
        key: "resetThumbnails",
        value: function resetThumbnails() {
          if (this.thubmnails) {
            this.thubmnails.reset(this.currentOptions.startIndex);
          }
        }
      }, {
        key: "select",
        value: function select(index) {
          this.selectedIndex = index;
          this.change.emit({
            index: index,
            image: this.images[index]
          });
        }
      }, {
        key: "checkFullWidth",
        value: function checkFullWidth() {
          if (this.currentOptions && this.currentOptions.fullWidth) {
            this.width = document.body.clientWidth + 'px';
            this.left = -(document.body.clientWidth - this.myElement.nativeElement.parentNode.innerWidth) / 2 + 'px';
          }
        }
      }, {
        key: "setImages",
        value: function setImages() {
          this.smallImages = this.images.map(function (img) {
            return img.small;
          });
          this.mediumImages = this.images.map(function (img, i) {
            return new NgxGalleryOrderedImage({
              src: img.medium,
              index: i
            });
          });
          this.bigImages = this.images.map(function (img) {
            return img.big;
          });
          this.descriptions = this.images.map(function (img) {
            return img.description;
          });
          this.links = this.images.map(function (img) {
            return img.url;
          });
          this.labels = this.images.map(function (img) {
            return img.label;
          });
        }
      }, {
        key: "setBreakpoint",
        value: function setBreakpoint() {
          this.prevBreakpoint = this.breakpoint;
          var breakpoints;

          if (typeof window !== 'undefined') {
            breakpoints = this.options.filter(function (opt) {
              return opt.breakpoint >= window.innerWidth;
            }).map(function (opt) {
              return opt.breakpoint;
            });
          }

          if (breakpoints && breakpoints.length) {
            this.breakpoint = breakpoints.pop();
          } else {
            this.breakpoint = undefined;
          }
        }
      }, {
        key: "sortOptions",
        value: function sortOptions() {
          this.options = [].concat(_toConsumableArray(this.options.filter(function (a) {
            return a.breakpoint === undefined;
          })), _toConsumableArray(this.options.filter(function (a) {
            return a.breakpoint !== undefined;
          }).sort(function (a, b) {
            return b.breakpoint - a.breakpoint;
          })));
        }
      }, {
        key: "setOptions",
        value: function setOptions() {
          var _this11 = this;

          this.currentOptions = new NgxGalleryOptions({});
          this.options.filter(function (opt) {
            return opt.breakpoint === undefined || opt.breakpoint >= _this11.breakpoint;
          }).map(function (opt) {
            return _this11.combineOptions(_this11.currentOptions, opt);
          });
          this.width = this.currentOptions.width;
          this.height = this.currentOptions.height;
        }
      }, {
        key: "combineOptions",
        value: function combineOptions(first, second) {
          Object.keys(second).map(function (val) {
            return first[val] = second[val] !== undefined ? second[val] : first[val];
          });
        }
      }]);

      return NgxGalleryComponent;
    }();

    NgxGalleryComponent.ɵfac = function NgxGalleryComponent_Factory(t) {
      return new (t || NgxGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    NgxGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NgxGalleryComponent,
      selectors: [["ngx-gallery"]],
      viewQuery: function NgxGalleryComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](NgxGalleryPreviewComponent, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](NgxGalleryImageComponent, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](NgxGalleryThumbnailsComponent, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.preview = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.image = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.thubmnails = _t.first);
        }
      },
      hostVars: 6,
      hostBindings: function NgxGalleryComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function NgxGalleryComponent_resize_HostBindingHandler() {
            return ctx.onResize();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.width)("left", ctx.left)("height", ctx.height);
        }
      },
      inputs: {
        options: "options",
        images: "images"
      },
      outputs: {
        imagesReady: "imagesReady",
        change: "change",
        previewOpen: "previewOpen",
        previewClose: "previewClose",
        previewChange: "previewChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([NgxGalleryHelperService])],
      decls: 4,
      vars: 41,
      consts: [[3, "height", "images", "clickable", "selectedIndex", "arrows", "arrowsAutoHide", "arrowPrevIcon", "arrowNextIcon", "swipe", "animation", "size", "autoPlay", "autoPlayInterval", "autoPlayPauseOnHover", "infinityMove", "lazyLoading", "actions", "descriptions", "showDescription", "bullets", "onClick", "onActiveChange", 4, "ngIf"], [3, "marginTop", "marginBottom", "height", "images", "links", "labels", "linkTarget", "selectedIndex", "columns", "rows", "margin", "arrows", "arrowsAutoHide", "arrowPrevIcon", "arrowNextIcon", "clickable", "swipe", "size", "moveSize", "order", "remainingCount", "lazyLoading", "actions", "onActiveChange", 4, "ngIf"], [3, "images", "descriptions", "showDescription", "arrowPrevIcon", "arrowNextIcon", "closeIcon", "fullscreenIcon", "spinnerIcon", "arrows", "arrowsAutoHide", "swipe", "fullscreen", "forceFullscreen", "closeOnClick", "closeOnEsc", "keyboardNavigation", "animation", "autoPlay", "autoPlayInterval", "autoPlayPauseOnHover", "infinityMove", "zoom", "zoomStep", "zoomMax", "zoomMin", "zoomInIcon", "zoomOutIcon", "actions", "rotate", "rotateLeftIcon", "rotateRightIcon", "download", "downloadIcon", "bullets", "onClose", "onOpen", "onActiveChange"], [3, "images", "clickable", "selectedIndex", "arrows", "arrowsAutoHide", "arrowPrevIcon", "arrowNextIcon", "swipe", "animation", "size", "autoPlay", "autoPlayInterval", "autoPlayPauseOnHover", "infinityMove", "lazyLoading", "actions", "descriptions", "showDescription", "bullets", "onClick", "onActiveChange"], [3, "images", "links", "labels", "linkTarget", "selectedIndex", "columns", "rows", "margin", "arrows", "arrowsAutoHide", "arrowPrevIcon", "arrowNextIcon", "clickable", "swipe", "size", "moveSize", "order", "remainingCount", "lazyLoading", "actions", "onActiveChange"]],
      template: function NgxGalleryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgxGalleryComponent_ngx_gallery_image_1_Template, 1, 21, "ngx-gallery-image", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgxGalleryComponent_ngx_gallery_thumbnails_2_Template, 1, 27, "ngx-gallery-thumbnails", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ngx-gallery-preview", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClose", function NgxGalleryComponent_Template_ngx_gallery_preview_onClose_3_listener() {
            return ctx.onPreviewClose();
          })("onOpen", function NgxGalleryComponent_Template_ngx_gallery_preview_onOpen_3_listener() {
            return ctx.onPreviewOpen();
          })("onActiveChange", function NgxGalleryComponent_Template_ngx_gallery_preview_onActiveChange_3_listener($event) {
            return ctx.previewSelect($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("ngx-gallery-layout ", ctx.currentOptions == null ? null : ctx.currentOptions.layout, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentOptions == null ? null : ctx.currentOptions.image);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentOptions == null ? null : ctx.currentOptions.thumbnails);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ngx-gallery-active", ctx.previewEnabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx.bigImages)("descriptions", ctx.descriptions)("showDescription", ctx.currentOptions == null ? null : ctx.currentOptions.previewDescription)("arrowPrevIcon", ctx.currentOptions == null ? null : ctx.currentOptions.arrowPrevIcon)("arrowNextIcon", ctx.currentOptions == null ? null : ctx.currentOptions.arrowNextIcon)("closeIcon", ctx.currentOptions == null ? null : ctx.currentOptions.closeIcon)("fullscreenIcon", ctx.currentOptions == null ? null : ctx.currentOptions.fullscreenIcon)("spinnerIcon", ctx.currentOptions == null ? null : ctx.currentOptions.spinnerIcon)("arrows", ctx.currentOptions == null ? null : ctx.currentOptions.previewArrows)("arrowsAutoHide", ctx.currentOptions == null ? null : ctx.currentOptions.previewArrowsAutoHide)("swipe", ctx.currentOptions == null ? null : ctx.currentOptions.previewSwipe)("fullscreen", ctx.currentOptions == null ? null : ctx.currentOptions.previewFullscreen)("forceFullscreen", ctx.currentOptions == null ? null : ctx.currentOptions.previewForceFullscreen)("closeOnClick", ctx.currentOptions == null ? null : ctx.currentOptions.previewCloseOnClick)("closeOnEsc", ctx.currentOptions == null ? null : ctx.currentOptions.previewCloseOnEsc)("keyboardNavigation", ctx.currentOptions == null ? null : ctx.currentOptions.previewKeyboardNavigation)("animation", ctx.currentOptions == null ? null : ctx.currentOptions.previewAnimation)("autoPlay", ctx.currentOptions == null ? null : ctx.currentOptions.previewAutoPlay)("autoPlayInterval", ctx.currentOptions == null ? null : ctx.currentOptions.previewAutoPlayInterval)("autoPlayPauseOnHover", ctx.currentOptions == null ? null : ctx.currentOptions.previewAutoPlayPauseOnHover)("infinityMove", ctx.currentOptions == null ? null : ctx.currentOptions.previewInfinityMove)("zoom", ctx.currentOptions == null ? null : ctx.currentOptions.previewZoom)("zoomStep", ctx.currentOptions == null ? null : ctx.currentOptions.previewZoomStep)("zoomMax", ctx.currentOptions == null ? null : ctx.currentOptions.previewZoomMax)("zoomMin", ctx.currentOptions == null ? null : ctx.currentOptions.previewZoomMin)("zoomInIcon", ctx.currentOptions == null ? null : ctx.currentOptions.zoomInIcon)("zoomOutIcon", ctx.currentOptions == null ? null : ctx.currentOptions.zoomOutIcon)("actions", ctx.currentOptions == null ? null : ctx.currentOptions.actions)("rotate", ctx.currentOptions == null ? null : ctx.currentOptions.previewRotate)("rotateLeftIcon", ctx.currentOptions == null ? null : ctx.currentOptions.rotateLeftIcon)("rotateRightIcon", ctx.currentOptions == null ? null : ctx.currentOptions.rotateRightIcon)("download", ctx.currentOptions == null ? null : ctx.currentOptions.previewDownload)("downloadIcon", ctx.currentOptions == null ? null : ctx.currentOptions.downloadIcon)("bullets", ctx.currentOptions == null ? null : ctx.currentOptions.previewBullets);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], NgxGalleryPreviewComponent, NgxGalleryImageComponent, NgxGalleryThumbnailsComponent],
      styles: ["[_nghost-%COMP%]{display:inline-block}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{float:left}[_nghost-%COMP%] *{box-sizing:border-box}[_nghost-%COMP%] .ngx-gallery-icon{color:#fff;font-size:25px;position:absolute;z-index:2000;display:inline-block}[_nghost-%COMP%] .ngx-gallery-icon .ngx-gallery-icon-content{display:block}[_nghost-%COMP%] .ngx-gallery-clickable{cursor:pointer}[_nghost-%COMP%] .ngx-gallery-icons-wrapper .ngx-gallery-icon{position:relative;margin-right:5px;margin-top:5px;font-size:20px;cursor:pointer}[_nghost-%COMP%] .ngx-gallery-icons-wrapper{float:right}[_nghost-%COMP%]   .ngx-gallery-layout[_ngcontent-%COMP%]{width:100%;height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}[_nghost-%COMP%]   .ngx-gallery-layout.thumbnails-top[_ngcontent-%COMP%]   ngx-gallery-image[_ngcontent-%COMP%]{-webkit-box-ordinal-group:3;order:2}[_nghost-%COMP%]   .ngx-gallery-layout.thumbnails-top[_ngcontent-%COMP%]   ngx-gallery-thumbnails[_ngcontent-%COMP%]{-webkit-box-ordinal-group:2;order:1}[_nghost-%COMP%]   .ngx-gallery-layout.thumbnails-bottom[_ngcontent-%COMP%]   ngx-gallery-image[_ngcontent-%COMP%]{-webkit-box-ordinal-group:2;order:1}[_nghost-%COMP%]   .ngx-gallery-layout.thumbnails-bottom[_ngcontent-%COMP%]   ngx-gallery-thumbnails[_ngcontent-%COMP%]{-webkit-box-ordinal-group:3;order:2}"]
    });

    NgxGalleryComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryComponent.prototype, "options", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryComponent.prototype, "images", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxGalleryComponent.prototype, "imagesReady", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxGalleryComponent.prototype, "change", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxGalleryComponent.prototype, "previewOpen", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxGalleryComponent.prototype, "previewClose", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxGalleryComponent.prototype, "previewChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(NgxGalleryPreviewComponent)], NgxGalleryComponent.prototype, "preview", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(NgxGalleryImageComponent)], NgxGalleryComponent.prototype, "image", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(NgxGalleryThumbnailsComponent)], NgxGalleryComponent.prototype, "thubmnails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.width')], NgxGalleryComponent.prototype, "width", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height')], NgxGalleryComponent.prototype, "height", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.left')], NgxGalleryComponent.prototype, "left", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize')], NgxGalleryComponent.prototype, "onResize", null);

    var NgxGalleryActionComponent = /*#__PURE__*/function () {
      function NgxGalleryActionComponent() {
        _classCallCheck(this, NgxGalleryActionComponent);

        this.disabled = false;
        this.titleText = '';
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(NgxGalleryActionComponent, [{
        key: "handleClick",
        value: function handleClick(event) {
          if (!this.disabled) {
            this.onClick.emit(event);
          }

          event.stopPropagation();
          event.preventDefault();
        }
      }]);

      return NgxGalleryActionComponent;
    }();

    NgxGalleryActionComponent.ɵfac = function NgxGalleryActionComponent_Factory(t) {
      return new (t || NgxGalleryActionComponent)();
    };

    NgxGalleryActionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NgxGalleryActionComponent,
      selectors: [["ngx-gallery-action"]],
      inputs: {
        disabled: "disabled",
        titleText: "titleText",
        icon: "icon"
      },
      outputs: {
        onClick: "onClick"
      },
      decls: 2,
      vars: 6,
      consts: [["aria-hidden", "true", 1, "ngx-gallery-icon", 3, "title", "click"]],
      template: function NgxGalleryActionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxGalleryActionComponent_Template_div_click_0_listener($event) {
            return ctx.handleClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ngx-gallery-icon-disabled", ctx.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx.titleText);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("ngx-gallery-icon-content ", ctx.icon, "");
        }
      },
      styles: [""],
      changeDetection: 0
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryActionComponent.prototype, "icon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryActionComponent.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryActionComponent.prototype, "titleText", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxGalleryActionComponent.prototype, "onClick", void 0);

    var NgxGalleryArrowsComponent = /*#__PURE__*/function () {
      function NgxGalleryArrowsComponent() {
        _classCallCheck(this, NgxGalleryArrowsComponent);

        this.onPrevClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNextClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(NgxGalleryArrowsComponent, [{
        key: "handlePrevClick",
        value: function handlePrevClick() {
          this.onPrevClick.emit();
        }
      }, {
        key: "handleNextClick",
        value: function handleNextClick() {
          this.onNextClick.emit();
        }
      }]);

      return NgxGalleryArrowsComponent;
    }();

    NgxGalleryArrowsComponent.ɵfac = function NgxGalleryArrowsComponent_Factory(t) {
      return new (t || NgxGalleryArrowsComponent)();
    };

    NgxGalleryArrowsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NgxGalleryArrowsComponent,
      selectors: [["ngx-gallery-arrows"]],
      inputs: {
        prevDisabled: "prevDisabled",
        nextDisabled: "nextDisabled",
        arrowPrevIcon: "arrowPrevIcon",
        arrowNextIcon: "arrowNextIcon"
      },
      outputs: {
        onPrevClick: "onPrevClick",
        onNextClick: "onNextClick"
      },
      decls: 6,
      vars: 10,
      consts: [[1, "ngx-gallery-arrow-wrapper", "ngx-gallery-arrow-left"], ["aria-hidden", "true", 1, "ngx-gallery-icon", "ngx-gallery-arrow", 3, "click"], [1, "ngx-gallery-arrow-wrapper", "ngx-gallery-arrow-right"]],
      template: function NgxGalleryArrowsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxGalleryArrowsComponent_Template_div_click_1_listener() {
            return ctx.handlePrevClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxGalleryArrowsComponent_Template_div_click_4_listener() {
            return ctx.handleNextClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ngx-gallery-disabled", ctx.prevDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("ngx-gallery-icon-content ", ctx.arrowPrevIcon, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ngx-gallery-disabled", ctx.nextDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("ngx-gallery-icon-content ", ctx.arrowNextIcon, "");
        }
      },
      styles: [".ngx-gallery-arrow-wrapper[_ngcontent-%COMP%]{position:absolute;height:100%;width:1px;display:table;z-index:2000;table-layout:fixed}.ngx-gallery-arrow-left[_ngcontent-%COMP%]{left:0}.ngx-gallery-arrow-right[_ngcontent-%COMP%]{right:0}.ngx-gallery-arrow[_ngcontent-%COMP%]{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);cursor:pointer}.ngx-gallery-arrow.ngx-gallery-disabled[_ngcontent-%COMP%]{opacity:.6;cursor:default}.ngx-gallery-arrow-left[_ngcontent-%COMP%]   .ngx-gallery-arrow[_ngcontent-%COMP%]{left:10px}.ngx-gallery-arrow-right[_ngcontent-%COMP%]   .ngx-gallery-arrow[_ngcontent-%COMP%]{right:10px}"]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryArrowsComponent.prototype, "prevDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryArrowsComponent.prototype, "nextDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryArrowsComponent.prototype, "arrowPrevIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryArrowsComponent.prototype, "arrowNextIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxGalleryArrowsComponent.prototype, "onPrevClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxGalleryArrowsComponent.prototype, "onNextClick", void 0);

    var NgxGalleryBulletsComponent = /*#__PURE__*/function () {
      function NgxGalleryBulletsComponent() {
        _classCallCheck(this, NgxGalleryBulletsComponent);

        this.active = 0;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(NgxGalleryBulletsComponent, [{
        key: "getBullets",
        value: function getBullets() {
          return Array(this.count);
        }
      }, {
        key: "handleChange",
        value: function handleChange(event, index) {
          this.onChange.emit(index);
        }
      }]);

      return NgxGalleryBulletsComponent;
    }();

    NgxGalleryBulletsComponent.ɵfac = function NgxGalleryBulletsComponent_Factory(t) {
      return new (t || NgxGalleryBulletsComponent)();
    };

    NgxGalleryBulletsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NgxGalleryBulletsComponent,
      selectors: [["ngx-gallery-bullets"]],
      inputs: {
        active: "active",
        count: "count"
      },
      outputs: {
        onChange: "onChange"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "ngx-gallery-bullet", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "ngx-gallery-bullet", 3, "ngClass", "click"]],
      template: function NgxGalleryBulletsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NgxGalleryBulletsComponent_div_0_Template, 1, 3, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getBullets());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
      styles: ["[_nghost-%COMP%]{position:absolute;z-index:2000;display:-webkit-inline-box;display:inline-flex;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);bottom:0;padding:10px}.ngx-gallery-bullet[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:50%;cursor:pointer;background:#fff}.ngx-gallery-bullet[_ngcontent-%COMP%]:not(:first-child){margin-left:5px}.ngx-gallery-bullet.ngx-gallery-active[_ngcontent-%COMP%], .ngx-gallery-bullet[_ngcontent-%COMP%]:hover{background:#000}"]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryBulletsComponent.prototype, "count", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGalleryBulletsComponent.prototype, "active", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxGalleryBulletsComponent.prototype, "onChange", void 0);

    var NgxGalleryModule = function NgxGalleryModule() {
      _classCallCheck(this, NgxGalleryModule);
    };

    NgxGalleryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgxGalleryModule
    });
    NgxGalleryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgxGalleryModule_Factory(t) {
        return new (t || NgxGalleryModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxGalleryHelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxGalleryPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'ngx-gallery-preview',
          template: "<ngx-gallery-arrows *ngIf=\"arrows\" (onPrevClick)=\"showPrev()\" (onNextClick)=\"showNext()\" [prevDisabled]=\"!canShowPrev()\" [nextDisabled]=\"!canShowNext()\" [arrowPrevIcon]=\"arrowPrevIcon\" [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n<div class=\"ngx-gallery-preview-top\">\n    <div class=\"ngx-gallery-preview-icons\">\n        <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\" [titleText]=\"action.titleText\" (onClick)=\"action.onClick($event, index)\"></ngx-gallery-action>\n        <a *ngIf=\"download && src\" [href]=\"src\" class=\"ngx-gallery-icon\" aria-hidden=\"true\" download>\n            <i class=\"ngx-gallery-icon-content {{ downloadIcon }}\"></i>\n        </a>\n        <ngx-gallery-action *ngIf=\"zoom\" [icon]=\"zoomOutIcon\" [disabled]=\"!canZoomOut()\" (onClick)=\"zoomOut()\"></ngx-gallery-action>\n        <ngx-gallery-action *ngIf=\"zoom\" [icon]=\"zoomInIcon\" [disabled]=\"!canZoomIn()\" (onClick)=\"zoomIn()\"></ngx-gallery-action>\n        <ngx-gallery-action *ngIf=\"rotate\" [icon]=\"rotateLeftIcon\" (onClick)=\"rotateLeft()\"></ngx-gallery-action>\n        <ngx-gallery-action *ngIf=\"rotate\" [icon]=\"rotateRightIcon\" (onClick)=\"rotateRight()\"></ngx-gallery-action>\n        <ngx-gallery-action *ngIf=\"fullscreen\" [icon]=\"'ngx-gallery-fullscreen ' + fullscreenIcon\" (onClick)=\"manageFullscreen()\"></ngx-gallery-action>\n        <ngx-gallery-action [icon]=\"'ngx-gallery-close ' + closeIcon\" (onClick)=\"close()\"></ngx-gallery-action>\n    </div>\n</div>\n<div class=\"ngx-spinner-wrapper ngx-gallery-center\" [class.ngx-gallery-active]=\"showSpinner\">\n    <i class=\"ngx-gallery-icon ngx-gallery-spinner {{spinnerIcon}}\" aria-hidden=\"true\"></i>\n</div>\n<div class=\"ngx-gallery-preview-wrapper\" (click)=\"closeOnClick && close()\" (mouseup)=\"mouseUpHandler($event)\" (mousemove)=\"mouseMoveHandler($event)\" (touchend)=\"mouseUpHandler($event)\" (touchmove)=\"mouseMoveHandler($event)\">\n    <div class=\"ngx-gallery-preview-img-wrapper\">\n        <img *ngIf=\"src\" #previewImage class=\"ngx-gallery-preview-img ngx-gallery-center\" [src]=\"src\" (click)=\"$event.stopPropagation()\" (mouseenter)=\"imageMouseEnter()\" (mouseleave)=\"imageMouseLeave()\" (mousedown)=\"mouseDownHandler($event)\" (touchstart)=\"mouseDownHandler($event)\" [class.ngx-gallery-active]=\"!loading\" [class.animation]=\"animation\" [class.ngx-gallery-grab]=\"canDragOnZoom()\" [style.transform]=\"getTransform()\" [style.left]=\"positionLeft + 'px'\" [style.top]=\"positionTop + 'px'\"/>\n        <ngx-gallery-bullets *ngIf=\"bullets\" [count]=\"images.length\" [active]=\"index\" (onChange)=\"showAtIndex($event)\"></ngx-gallery-bullets>\n    </div>\n    <div class=\"ngx-gallery-preview-text\" *ngIf=\"showDescription && description\" [innerHTML]=\"description\" (click)=\"$event.stopPropagation()\"></div>\n</div>",
          styles: [":host(.ngx-gallery-active){width:100%;height:100%;position:fixed;left:0;top:0;background:rgba(0,0,0,.7);z-index:10000;display:inline-block}:host{display:none}:host>>>.ngx-gallery-arrow{font-size:50px}:host>>>ngx-gallery-bullets{height:5%;-webkit-box-align:center;align-items:center;padding:0}.ngx-gallery-preview-img{opacity:0;max-width:90%;max-height:90%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}.ngx-gallery-preview-img.animation{-webkit-transition:opacity .5s linear,-webkit-transform .5s;transition:opacity .5s linear,transform .5s,-webkit-transform .5s}.ngx-gallery-preview-img.ngx-gallery-active{opacity:1}.ngx-gallery-preview-img.ngx-gallery-grab{cursor:grab;cursor:-webkit-grab}.ngx-gallery-icon.ngx-gallery-spinner{font-size:50px;left:0;display:inline-block}:host>>>.ngx-gallery-preview-top{position:absolute;width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host>>>.ngx-gallery-preview-icons{float:right}:host>>>.ngx-gallery-preview-icons .ngx-gallery-icon{position:relative;margin-right:10px;margin-top:10px;font-size:25px;cursor:pointer;text-decoration:none}:host>>>.ngx-gallery-preview-icons .ngx-gallery-icon.ngx-gallery-icon-disabled{cursor:default;opacity:.4}.ngx-spinner-wrapper{width:50px;height:50px;display:none}.ngx-spinner-wrapper.ngx-gallery-active{display:inline-block}.ngx-gallery-center{position:absolute;left:0;right:0;bottom:0;margin:auto;top:0}.ngx-gallery-preview-text{width:100%;background:rgba(0,0,0,.7);padding:10px;text-align:center;color:#fff;font-size:16px;-webkit-box-flex:0;flex:0 1 auto;z-index:10}.ngx-gallery-preview-wrapper{width:100%;height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}.ngx-gallery-preview-img-wrapper{-webkit-box-flex:1;flex:1 1 auto;position:relative}"]
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: NgxGalleryHelperService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      }, {
        onOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onActiveChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        arrows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        onMouseEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['mouseenter']
        }],
        onMouseLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['mouseleave']
        }],
        images: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        descriptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showDescription: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        arrowsAutoHide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        swipe: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fullscreen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        forceFullscreen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        closeOnClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        closeOnEsc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        keyboardNavigation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        arrowPrevIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        arrowNextIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        closeIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fullscreenIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        spinnerIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        autoPlay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        autoPlayInterval: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        autoPlayPauseOnHover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        infinityMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zoomStep: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zoomMax: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zoomMin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zoomInIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zoomOutIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        animation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        actions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rotate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rotateLeftIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rotateRightIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        download: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        downloadIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        bullets: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        previewImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['previewImage']
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxGalleryImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'ngx-gallery-image',
          template: "<div class=\"ngx-gallery-image-wrapper ngx-gallery-animation-{{animation}} ngx-gallery-image-size-{{size}}\">\n    <div class=\"ngx-gallery-image\" \n        *ngFor=\"let image of getImages(); let i = index;\" \n        [ngClass]=\"{ 'ngx-gallery-active': selectedIndex == image.index, 'ngx-gallery-inactive-left': selectedIndex > image.index, 'ngx-gallery-inactive-right': selectedIndex < image.index, 'ngx-gallery-clickable': clickable }\" \n        [style.background-image]=\"getSafeUrl(image.src)\" \n        (click)=\"handleClick($event, image.index)\" >\n        <div class=\"ngx-gallery-icons-wrapper\">\n            <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\" [titleText]=\"action.titleText\" (onClick)=\"action.onClick($event, image.index)\"></ngx-gallery-action>\n        </div>\n        <div class=\"ngx-gallery-image-text\" *ngIf=\"showDescription && descriptions[image.index]\" [innerHTML]=\"descriptions[image.index]\" (click)=\"$event.stopPropagation()\"></div>\n    </div>\n</div>\n<ngx-gallery-bullets *ngIf=\"bullets\" [count]=\"images.length\" [active]=\"selectedIndex\" (onChange)=\"show($event)\"></ngx-gallery-bullets>\n<ngx-gallery-arrows class=\"ngx-gallery-image-size-{{size}}\" *ngIf=\"arrows\" (onPrevClick)=\"showPrev()\" (onNextClick)=\"showNext()\" [prevDisabled]=\"!canShowPrev()\" [nextDisabled]=\"!canShowNext()\" [arrowPrevIcon]=\"arrowPrevIcon\" [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n",
          styles: [":host{width:100%;display:inline-block;position:relative}.ngx-gallery-image-wrapper{width:100%;height:100%;position:absolute;left:0;top:0;overflow:hidden}.ngx-gallery-image{background-position:center;background-repeat:no-repeat;height:100%;width:100%;position:absolute;top:0}.ngx-gallery-image.ngx-gallery-active{z-index:1000}.ngx-gallery-image-size-cover .ngx-gallery-image{background-size:cover}.ngx-gallery-image-size-contain .ngx-gallery-image{background-size:contain}.ngx-gallery-animation-fade .ngx-gallery-image{left:0;opacity:0;-webkit-transition:.5s ease-in-out;transition:.5s ease-in-out}.ngx-gallery-animation-fade .ngx-gallery-image.ngx-gallery-active{opacity:1}.ngx-gallery-animation-slide .ngx-gallery-image{-webkit-transition:.5s ease-in-out;transition:.5s ease-in-out}.ngx-gallery-animation-slide .ngx-gallery-image.ngx-gallery-active{left:0}.ngx-gallery-animation-slide .ngx-gallery-image.ngx-gallery-inactive-left{left:-100%}.ngx-gallery-animation-slide .ngx-gallery-image.ngx-gallery-inactive-right{left:100%}.ngx-gallery-animation-rotate .ngx-gallery-image{-webkit-transition:1s;transition:1s;-webkit-transform:scale(3.5,3.5) rotate(90deg);transform:scale(3.5,3.5) rotate(90deg);left:0;opacity:0}.ngx-gallery-animation-rotate .ngx-gallery-image.ngx-gallery-active{-webkit-transform:scale(1,1) rotate(0);transform:scale(1,1) rotate(0);opacity:1}.ngx-gallery-animation-zoom .ngx-gallery-image{-webkit-transition:1s;transition:1s;-webkit-transform:scale(2.5,2.5);transform:scale(2.5,2.5);left:0;opacity:0}.ngx-gallery-animation-zoom .ngx-gallery-image.ngx-gallery-active{-webkit-transform:scale(1,1);transform:scale(1,1);opacity:1}.ngx-gallery-image-text{width:100%;background:rgba(0,0,0,.7);padding:10px;text-align:center;color:#fff;font-size:16px;position:absolute;bottom:0;z-index:10}"]
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: NgxGalleryHelperService
        }];
      }, {
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onActiveChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        arrows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        onMouseEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['mouseenter']
        }],
        onMouseLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['mouseleave']
        }],
        selectedIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        images: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        clickable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        arrowsAutoHide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        swipe: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        animation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        arrowPrevIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        arrowNextIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        autoPlay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        autoPlayInterval: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        autoPlayPauseOnHover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        infinityMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        lazyLoading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        actions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        descriptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showDescription: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        bullets: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxGalleryThumbnailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'ngx-gallery-thumbnails',
          template: "<div class=\"ngx-gallery-thumbnails-wrapper ngx-gallery-thumbnail-size-{{size}}\">\n    <div class=\"ngx-gallery-thumbnails\" [style.transform]=\"'translateX(' + thumbnailsLeft + ')'\" [style.marginLeft]=\"thumbnailsMarginLeft\">\n        <a [href]=\"hasLink(i) ? links[i] : '#'\" [target]=\"linkTarget\" class=\"ngx-gallery-thumbnail\" *ngFor=\"let image of getImages(); let i = index;\" [style.background-image]=\"getSafeUrl(image)\" (click)=\"handleClick($event, i)\" [style.width]=\"getThumbnailWidth()\" [style.height]=\"getThumbnailHeight()\" [style.left]=\"getThumbnailLeft(i)\" [style.top]=\"getThumbnailTop(i)\" [ngClass]=\"{ 'ngx-gallery-active': i == selectedIndex, 'ngx-gallery-clickable': clickable }\" [attr.aria-label]=\"labels[i]\">\n            <div class=\"ngx-gallery-icons-wrapper\">\n                <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\" [titleText]=\"action.titleText\" (onClick)=\"action.onClick($event, i)\"></ngx-gallery-action>\n            </div>\n            <div class=\"ngx-gallery-remaining-count-overlay\" *ngIf=\"remainingCount && remainingCountValue && (i == (rows * columns) - 1)\">\n                <span class=\"ngx-gallery-remaining-count\">+{{remainingCountValue}}</span>\n            </div>\n        </a>\n    </div>\n</div>\n<ngx-gallery-arrows *ngIf=\"canShowArrows()\" (onPrevClick)=\"moveLeft()\" (onNextClick)=\"moveRight()\" [prevDisabled]=\"!canMoveLeft()\" [nextDisabled]=\"!canMoveRight()\" [arrowPrevIcon]=\"arrowPrevIcon\" [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n",
          styles: [":host{width:100%;display:inline-block;position:relative}.ngx-gallery-thumbnails-wrapper{width:100%;height:100%;position:absolute;overflow:hidden}.ngx-gallery-thumbnails{height:100%;width:100%;position:absolute;left:0;-webkit-transform:translateX(0);transform:translateX(0);-webkit-transition:-webkit-transform .5s ease-in-out;transition:transform .5s ease-in-out;transition:transform .5s ease-in-out,-webkit-transform .5s ease-in-out;will-change:transform}.ngx-gallery-thumbnails .ngx-gallery-thumbnail{position:absolute;height:100%;background-position:center;background-repeat:no-repeat;text-decoration:none}.ngx-gallery-thumbnail-size-cover .ngx-gallery-thumbnails .ngx-gallery-thumbnail{background-size:cover}.ngx-gallery-thumbnail-size-contain .ngx-gallery-thumbnails .ngx-gallery-thumbnail{background-size:contain}.ngx-gallery-remaining-count-overlay{width:100%;height:100%;position:absolute;left:0;top:0;background-color:rgba(0,0,0,.4)}.ngx-gallery-remaining-count{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:#fff;font-size:30px}"]
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: NgxGalleryHelperService
        }];
      }, {
        onActiveChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onMouseEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['mouseenter']
        }],
        onMouseLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['mouseleave']
        }],
        selectedIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        images: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        links: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        labels: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        linkTarget: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        columns: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        arrows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        arrowsAutoHide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        margin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        clickable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        swipe: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        arrowPrevIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        arrowNextIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        moveSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        order: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        remainingCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        lazyLoading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        actions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxGalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'ngx-gallery',
          template: "\n    <div class=\"ngx-gallery-layout {{currentOptions?.layout}}\">\n      <ngx-gallery-image *ngIf=\"currentOptions?.image\" [style.height]=\"getImageHeight()\" [images]=\"mediumImages\" [clickable]=\"currentOptions?.preview\" [selectedIndex]=\"selectedIndex\" [arrows]=\"currentOptions?.imageArrows\" [arrowsAutoHide]=\"currentOptions?.imageArrowsAutoHide\" [arrowPrevIcon]=\"currentOptions?.arrowPrevIcon\" [arrowNextIcon]=\"currentOptions?.arrowNextIcon\" [swipe]=\"currentOptions?.imageSwipe\" [animation]=\"currentOptions?.imageAnimation\" [size]=\"currentOptions?.imageSize\" [autoPlay]=\"currentOptions?.imageAutoPlay\" [autoPlayInterval]=\"currentOptions?.imageAutoPlayInterval\" [autoPlayPauseOnHover]=\"currentOptions?.imageAutoPlayPauseOnHover\" [infinityMove]=\"currentOptions?.imageInfinityMove\"  [lazyLoading]=\"currentOptions?.lazyLoading\" [actions]=\"currentOptions?.imageActions\" [descriptions]=\"descriptions\" [showDescription]=\"currentOptions?.imageDescription\" [bullets]=\"currentOptions?.imageBullets\" (onClick)=\"openPreview($event)\" (onActiveChange)=\"selectFromImage($event)\"></ngx-gallery-image>\n\n      <ngx-gallery-thumbnails *ngIf=\"currentOptions?.thumbnails\" [style.marginTop]=\"getThumbnailsMarginTop()\" [style.marginBottom]=\"getThumbnailsMarginBottom()\" [style.height]=\"getThumbnailsHeight()\" [images]=\"smallImages\" [links]=\"currentOptions?.thumbnailsAsLinks ? links : []\" [labels]=\"labels\" [linkTarget]=\"currentOptions?.linkTarget\" [selectedIndex]=\"selectedIndex\" [columns]=\"currentOptions?.thumbnailsColumns\" [rows]=\"currentOptions?.thumbnailsRows\" [margin]=\"currentOptions?.thumbnailMargin\" [arrows]=\"currentOptions?.thumbnailsArrows\" [arrowsAutoHide]=\"currentOptions?.thumbnailsArrowsAutoHide\" [arrowPrevIcon]=\"currentOptions?.arrowPrevIcon\" [arrowNextIcon]=\"currentOptions?.arrowNextIcon\" [clickable]=\"currentOptions?.image || currentOptions?.preview\" [swipe]=\"currentOptions?.thumbnailsSwipe\" [size]=\"currentOptions?.thumbnailSize\" [moveSize]=\"currentOptions?.thumbnailsMoveSize\" [order]=\"currentOptions?.thumbnailsOrder\" [remainingCount]=\"currentOptions?.thumbnailsRemainingCount\" [lazyLoading]=\"currentOptions?.lazyLoading\" [actions]=\"currentOptions?.thumbnailActions\"  (onActiveChange)=\"selectFromThumbnails($event)\"></ngx-gallery-thumbnails>\n\n      <ngx-gallery-preview [images]=\"bigImages\" [descriptions]=\"descriptions\" [showDescription]=\"currentOptions?.previewDescription\" [arrowPrevIcon]=\"currentOptions?.arrowPrevIcon\" [arrowNextIcon]=\"currentOptions?.arrowNextIcon\" [closeIcon]=\"currentOptions?.closeIcon\" [fullscreenIcon]=\"currentOptions?.fullscreenIcon\" [spinnerIcon]=\"currentOptions?.spinnerIcon\" [arrows]=\"currentOptions?.previewArrows\" [arrowsAutoHide]=\"currentOptions?.previewArrowsAutoHide\" [swipe]=\"currentOptions?.previewSwipe\" [fullscreen]=\"currentOptions?.previewFullscreen\" [forceFullscreen]=\"currentOptions?.previewForceFullscreen\" [closeOnClick]=\"currentOptions?.previewCloseOnClick\" [closeOnEsc]=\"currentOptions?.previewCloseOnEsc\" [keyboardNavigation]=\"currentOptions?.previewKeyboardNavigation\" [animation]=\"currentOptions?.previewAnimation\" [autoPlay]=\"currentOptions?.previewAutoPlay\" [autoPlayInterval]=\"currentOptions?.previewAutoPlayInterval\" [autoPlayPauseOnHover]=\"currentOptions?.previewAutoPlayPauseOnHover\" [infinityMove]=\"currentOptions?.previewInfinityMove\" [zoom]=\"currentOptions?.previewZoom\" [zoomStep]=\"currentOptions?.previewZoomStep\" [zoomMax]=\"currentOptions?.previewZoomMax\" [zoomMin]=\"currentOptions?.previewZoomMin\" [zoomInIcon]=\"currentOptions?.zoomInIcon\" [zoomOutIcon]=\"currentOptions?.zoomOutIcon\" [actions]=\"currentOptions?.actions\" [rotate]=\"currentOptions?.previewRotate\" [rotateLeftIcon]=\"currentOptions?.rotateLeftIcon\" [rotateRightIcon]=\"currentOptions?.rotateRightIcon\" [download]=\"currentOptions?.previewDownload\" [downloadIcon]=\"currentOptions?.downloadIcon\" [bullets]=\"currentOptions?.previewBullets\" (onClose)=\"onPreviewClose()\" (onOpen)=\"onPreviewOpen()\" (onActiveChange)=\"previewSelect($event)\" [class.ngx-gallery-active]=\"previewEnabled\"></ngx-gallery-preview>\n    </div>\n  ",
          providers: [NgxGalleryHelperService],
          styles: [":host{display:inline-block}:host>*{float:left}:host>>>*{box-sizing:border-box}:host>>>.ngx-gallery-icon{color:#fff;font-size:25px;position:absolute;z-index:2000;display:inline-block}:host>>>.ngx-gallery-icon .ngx-gallery-icon-content{display:block}:host>>>.ngx-gallery-clickable{cursor:pointer}:host>>>.ngx-gallery-icons-wrapper .ngx-gallery-icon{position:relative;margin-right:5px;margin-top:5px;font-size:20px;cursor:pointer}:host>>>.ngx-gallery-icons-wrapper{float:right}:host .ngx-gallery-layout{width:100%;height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}:host .ngx-gallery-layout.thumbnails-top ngx-gallery-image{-webkit-box-ordinal-group:3;order:2}:host .ngx-gallery-layout.thumbnails-top ngx-gallery-thumbnails{-webkit-box-ordinal-group:2;order:1}:host .ngx-gallery-layout.thumbnails-bottom ngx-gallery-image{-webkit-box-ordinal-group:2;order:1}:host .ngx-gallery-layout.thumbnails-bottom ngx-gallery-thumbnails{-webkit-box-ordinal-group:3;order:2}"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      }, {
        imagesReady: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        previewOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        previewClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        previewChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:resize']
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['style.width']
        }],
        left: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['style.left']
        }],
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['style.height']
        }],
        images: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        preview: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [NgxGalleryPreviewComponent]
        }],
        image: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [NgxGalleryImageComponent]
        }],
        thubmnails: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [NgxGalleryThumbnailsComponent]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxGalleryActionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'ngx-gallery-action',
          template: "<div class=\"ngx-gallery-icon\" [class.ngx-gallery-icon-disabled]=\"disabled\"\naria-hidden=\"true\"\ntitle=\"{{ titleText }}\"\n(click)=\"handleClick($event)\">\n    <i class=\"ngx-gallery-icon-content {{ icon }}\"></i>\n</div>",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          styles: [""]
        }]
      }], function () {
        return [];
      }, {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        titleText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxGalleryArrowsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'ngx-gallery-arrows',
          template: "<div class=\"ngx-gallery-arrow-wrapper ngx-gallery-arrow-left\">\n    <div class=\"ngx-gallery-icon ngx-gallery-arrow\" aria-hidden=\"true\" (click)=\"handlePrevClick()\" [class.ngx-gallery-disabled]=\"prevDisabled\">\n        <i class=\"ngx-gallery-icon-content {{arrowPrevIcon}}\"></i>\n    </div>\n</div>\n<div class=\"ngx-gallery-arrow-wrapper ngx-gallery-arrow-right\">\n    <div class=\"ngx-gallery-icon ngx-gallery-arrow\" aria-hidden=\"true\" (click)=\"handleNextClick()\" [class.ngx-gallery-disabled]=\"nextDisabled\">\n        <i class=\"ngx-gallery-icon-content {{arrowNextIcon}}\"></i>\n    </div>\n</div>",
          styles: [".ngx-gallery-arrow-wrapper{position:absolute;height:100%;width:1px;display:table;z-index:2000;table-layout:fixed}.ngx-gallery-arrow-left{left:0}.ngx-gallery-arrow-right{right:0}.ngx-gallery-arrow{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);cursor:pointer}.ngx-gallery-arrow.ngx-gallery-disabled{opacity:.6;cursor:default}.ngx-gallery-arrow-left .ngx-gallery-arrow{left:10px}.ngx-gallery-arrow-right .ngx-gallery-arrow{right:10px}"]
        }]
      }], function () {
        return [];
      }, {
        onPrevClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onNextClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        prevDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nextDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        arrowPrevIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        arrowNextIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxGalleryBulletsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'ngx-gallery-bullets',
          template: "<div class=\"ngx-gallery-bullet\" *ngFor=\"let bullet of getBullets(); let i = index;\" (click)=\"handleChange($event, i)\" [ngClass]=\"{ 'ngx-gallery-active': i == active }\"></div>",
          styles: [":host{position:absolute;z-index:2000;display:-webkit-inline-box;display:inline-flex;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);bottom:0;padding:10px}.ngx-gallery-bullet{width:10px;height:10px;border-radius:50%;cursor:pointer;background:#fff}.ngx-gallery-bullet:not(:first-child){margin-left:5px}.ngx-gallery-bullet.ngx-gallery-active,.ngx-gallery-bullet:hover{background:#000}"]
        }]
      }], function () {
        return [];
      }, {
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        onChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        count: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxGalleryModule, {
        declarations: function declarations() {
          return [NgxGalleryComponent, NgxGalleryPreviewComponent, NgxGalleryImageComponent, NgxGalleryThumbnailsComponent, NgxGalleryActionComponent, NgxGalleryArrowsComponent, NgxGalleryBulletsComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]];
        },
        exports: function exports() {
          return [NgxGalleryComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxGalleryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [NgxGalleryComponent, NgxGalleryPreviewComponent, NgxGalleryImageComponent, NgxGalleryThumbnailsComponent, NgxGalleryActionComponent, NgxGalleryArrowsComponent, NgxGalleryBulletsComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
          exports: [NgxGalleryComponent]
        }]
      }], null, null);
    })();

    var NgxGalleryImage = function NgxGalleryImage(obj) {
      _classCallCheck(this, NgxGalleryImage);

      this.small = obj.small;
      this.medium = obj.medium;
      this.big = obj.big;
      this.description = obj.description;
      this.url = obj.url;
      this.label = obj.label;
    };
    /*
     * Public API Surface of ngx-gallery
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-gallery-9.js.map

    /***/

  },

  /***/
  "./src/app/past-events/past-events.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/past-events/past-events.module.ts ***!
    \***************************************************/

  /*! exports provided: PastEventsModule */

  /***/
  function srcAppPastEventsPastEventsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PastEventsModule", function () {
      return PastEventsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _past_events_past_events_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./past-events/past-events.component */
    "./src/app/past-events/past-events/past-events.component.ts");
    /* harmony import */


    var ngx_gallery_9__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-gallery-9 */
    "./node_modules/ngx-gallery-9/__ivy_ngcc__/fesm2015/ngx-gallery-9.js");
    /* harmony import */


    var _past_events_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./past-events.routing */
    "./src/app/past-events/past-events.routing.ts");

    var PastEventsModule = function PastEventsModule() {
      _classCallCheck(this, PastEventsModule);
    };

    PastEventsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PastEventsModule
    });
    PastEventsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PastEventsModule_Factory(t) {
        return new (t || PastEventsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_gallery_9__WEBPACK_IMPORTED_MODULE_3__["NgxGalleryModule"], _past_events_routing__WEBPACK_IMPORTED_MODULE_4__["PastEventsRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PastEventsModule, {
        declarations: [_past_events_past_events_component__WEBPACK_IMPORTED_MODULE_2__["PastEventsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_gallery_9__WEBPACK_IMPORTED_MODULE_3__["NgxGalleryModule"], _past_events_routing__WEBPACK_IMPORTED_MODULE_4__["PastEventsRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PastEventsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_past_events_past_events_component__WEBPACK_IMPORTED_MODULE_2__["PastEventsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_gallery_9__WEBPACK_IMPORTED_MODULE_3__["NgxGalleryModule"], _past_events_routing__WEBPACK_IMPORTED_MODULE_4__["PastEventsRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/past-events/past-events.routing.ts":
  /*!****************************************************!*\
    !*** ./src/app/past-events/past-events.routing.ts ***!
    \****************************************************/

  /*! exports provided: PastEventsRoutingModule */

  /***/
  function srcAppPastEventsPastEventsRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PastEventsRoutingModule", function () {
      return PastEventsRoutingModule;
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


    var _past_events_past_events_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./past-events/past-events.component */
    "./src/app/past-events/past-events/past-events.component.ts");

    var routes = [{
      path: '',
      component: _past_events_past_events_component__WEBPACK_IMPORTED_MODULE_2__["PastEventsComponent"]
    }];

    var PastEventsRoutingModule = function PastEventsRoutingModule() {
      _classCallCheck(this, PastEventsRoutingModule);
    };

    PastEventsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PastEventsRoutingModule
    });
    PastEventsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PastEventsRoutingModule_Factory(t) {
        return new (t || PastEventsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PastEventsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PastEventsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/past-events/past-events/past-events.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/past-events/past-events/past-events.component.ts ***!
    \******************************************************************/

  /*! exports provided: PastEventsComponent */

  /***/
  function srcAppPastEventsPastEventsPastEventsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PastEventsComponent", function () {
      return PastEventsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_gallery_9__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-gallery-9 */
    "./node_modules/ngx-gallery-9/__ivy_ngcc__/fesm2015/ngx-gallery-9.js");

    var PastEventsComponent = /*#__PURE__*/function () {
      function PastEventsComponent() {
        _classCallCheck(this, PastEventsComponent);

        this.galleryOptions = [{
          "imagePercent": 80,
          "thumbnailsPercent": 20,
          "thumbnailsColumns": 4,
          "thumbnailsMargin": 0,
          "thumbnailMargin": 0,
          "lazyLoading": true,
          "previewCloseOnClick": true
        }, {
          "breakpoint": 500,
          "width": "100%",
          "height": "300px",
          "thumbnailsColumns": 3,
          "lazyLoading": true
        }, {
          "breakpoint": 300,
          "width": "100%",
          "height": "200px",
          "thumbnailsColumns": 2,
          "lazyLoading": true
        }];
        this.galleryOptionsHideThumbnails = [{
          "imagePercent": 80,
          "lazyLoading": true,
          "thumbnails": false
        }, {
          "breakpoint": 500,
          "width": "100%",
          "height": "300px",
          "thumbnailsColumns": 3,
          "lazyLoading": true
        }];
      }

      _createClass(PastEventsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.galleryOptions_technovus = this.galleryOptions;
          this.galleryOptions_programmers = this.galleryOptions;
          this.galleryOptions_bootcamp = this.galleryOptions;
          this.galleryOptions_linux = this.galleryOptionsHideThumbnails;
          this.galleryOptions_cynsecure = this.galleryOptions;
          this.galleryOptions_legacy = this.galleryOptions;
          this.galleryOptions_starting = this.galleryOptions;
          this.galleryImages_technovus = [{
            small: '../../../assets/img/events/codenovus 1.jpeg',
            medium: '../../../assets/img/events/codenovus 1.jpeg',
            big: '../../../assets/img/events/codenovus 1.jpeg'
          }, {
            small: '../../../assets/img/events/codenovus 2.jpeg',
            medium: '../../../assets/img/events/codenovus 2.jpeg',
            big: '../../../assets/img/events/codenovus 2.jpeg'
          }, {
            small: '../../../assets/img/events/codenovus 3.jpeg',
            medium: '../../../assets/img/events/codenovus 3.jpeg',
            big: '../../../assets/img/events/codenovus 3.jpeg'
          }, {
            small: '../../../assets/img/events/wod 1.jpeg',
            medium: '../../../assets/img/events/wod 1.jpeg',
            big: '../../../assets/img/events/wod 1.jpeg'
          }, {
            small: '../../../assets/img/events/wod 2.jpeg',
            medium: '../../../assets/img/events/wod 2.jpeg',
            big: '../../../assets/img/events/wod 2.jpeg'
          }, {
            small: '../../../assets/img/events/wod 3.jpeg',
            medium: '../../../assets/img/events/wod 3.jpeg',
            big: '../../../assets/img/events/wod 3.jpeg'
          }, {
            small: '../../../assets/img/events/wod 4.jpeg',
            medium: '../../../assets/img/events/wod 4.jpeg',
            big: '../../../assets/img/events/wod 4.jpeg'
          }];
          this.galleryImages_programmers = [{
            small: '../../../assets/img/events/codingspree 1.jpeg',
            medium: '../../../assets/img/events/codingspree 1.jpeg',
            big: '../../../assets/img/events/codingspree 1.jpeg'
          }, {
            small: '../../../assets/img/events/codingspree 2.jpeg',
            medium: '../../../assets/img/events/codingspree 2.jpeg',
            big: '../../../assets/img/events/codingspree 2.jpeg'
          }, {
            small: '../../../assets/img/events/codingspree 3.jpeg',
            medium: '../../../assets/img/events/codingspree 3.jpeg',
            big: '../../../assets/img/events/codingspree 3.jpeg'
          }, {
            small: '../../../assets/img/events/codingspree 4.jpeg',
            medium: '../../../assets/img/events/codingspree 4.jpeg',
            big: '../../../assets/img/events/codingspree 4.jpeg'
          }, {
            small: '../../../assets/img/events/webinar 1.jpeg',
            medium: '../../../assets/img/events/webinar 1.jpeg',
            big: '../../../assets/img/events/webinar 1.jpeg'
          }, {
            small: '../../../assets/img/events/webinar 2.jpeg',
            medium: '../../../assets/img/events/webinar 2.jpeg',
            big: '../../../assets/img/events/webinar 2.jpeg'
          }];
          this.galleryImages_bootcamp = [{
            small: '../../../assets/img/events/pybootcamp1.jpeg',
            medium: '../../../assets/img/events/pybootcamp1.jpeg',
            big: '../../../assets/img/events/pybootcamp1.jpeg'
          }, {
            small: '../../../assets/img/events/pybootcamp2.jpeg',
            medium: '../../../assets/img/events/pybootcamp2.jpeg',
            big: '../../../assets/img/events/pybootcamp2.jpeg'
          }, {
            small: '../../../assets/img/events/compclass1.jpeg',
            medium: '../../../assets/img/events/compclass1.jpeg',
            big: '../../../assets/img/events/compclass1.jpeg'
          }, {
            small: '../../../assets/img/events/compclass2.jpeg',
            medium: '../../../assets/img/events/compclass2.jpeg',
            big: '../../../assets/img/events/compclass2.jpeg'
          }];
          this.galleryImages_linux = [{
            small: '../../../assets/img/events/linux1.jpeg',
            medium: '../../../assets/img/events/linux1.jpeg',
            big: '../../../assets/img/events/linux1.jpeg'
          }, {
            small: '../../../assets/img/events/linux2.jpeg',
            medium: '../../../assets/img/events/linux2.jpeg',
            big: '../../../assets/img/events/linux2.jpeg'
          }];
          this.galleryImages_cynsecure = [{
            small: '../../../assets/img/events/cynsecure1.jpeg',
            medium: '../../../assets/img/events/cynsecure1.jpeg',
            big: '../../../assets/img/events/cynsecure1.jpeg'
          }, {
            small: '../../../assets/img/events/cynsecure2.jpeg',
            medium: '../../../assets/img/events/cynsecure2.jpeg',
            big: '../../../assets/img/events/cynsecure2.jpeg'
          }, {
            small: '../../../assets/img/events/cynsecure3.jpeg',
            medium: '../../../assets/img/events/cynsecure3.jpeg',
            big: '../../../assets/img/events/cynsecure3.jpeg'
          }, {
            small: '../../../assets/img/events/cynsecure4.jpeg',
            medium: '../../../assets/img/events/cynsecure4.jpeg',
            big: '../../../assets/img/events/cynsecure4.jpeg'
          }];
          this.galleryImages_legacy = [{
            small: '../../../assets/img/events/legacy1.jpg',
            medium: '../../../assets/img/events/legacy1.jpg',
            big: '../../../assets/img/events/legacy1.jpg'
          }, {
            small: '../../../assets/img/events/legacy2.jpg',
            medium: '../../../assets/img/events/legacy2.jpg',
            big: '../../../assets/img/events/legacy2.jpg'
          }, {
            small: '../../../assets/img/events/legacy3.jpg',
            medium: '../../../assets/img/events/legacy3.jpg',
            big: '../../../assets/img/events/legacy3.jpg'
          }, {
            small: '../../../assets/img/events/legacy4.jpg',
            medium: '../../../assets/img/events/legacy4.jpg',
            big: '../../../assets/img/events/legacy4.jpg'
          }];
          this.galleryImages_starting = [{
            small: '../../../assets/img/events/starting1.jpg',
            medium: '../../../assets/img/events/starting1.jpg',
            big: '../../../assets/img/events/starting1.jpg'
          }, {
            small: '../../../assets/img/events/starting2.jpg',
            medium: '../../../assets/img/events/starting2.jpg',
            big: '../../../assets/img/events/starting2.jpg'
          }, {
            small: '../../../assets/img/events/starting3.jpeg',
            medium: '../../../assets/img/events/starting3.jpeg',
            big: '../../../assets/img/events/starting3.jpeg'
          }, {
            small: '../../../assets/img/events/starting4.jpg',
            medium: '../../../assets/img/events/starting4.jpg',
            big: '../../../assets/img/events/starting4.jpg'
          }, {
            small: '../../../assets/img/events/starting5.jpeg',
            medium: '../../../assets/img/events/starting5.jpeg',
            big: '../../../assets/img/events/starting5.jpeg'
          }];
        }
      }]);

      return PastEventsComponent;
    }();

    PastEventsComponent.ɵfac = function PastEventsComponent_Factory(t) {
      return new (t || PastEventsComponent)();
    };

    PastEventsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PastEventsComponent,
      selectors: [["app-past-events"]],
      decls: 86,
      vars: 14,
      consts: [[1, "container"], [1, "row", "flex-column-reverse", "flex-md-row"], [1, "col-12", "col-md-6", "text-center"], [3, "options", "images"], [1, "col-12", "col-md-6"], [1, "row"], [1, "col-12", "col-md-6", "align-self-center"]],
      template: function PastEventsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ngx-gallery", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Technovus 2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " The various events organised by glug on the occasion of Technovus (our technical extravaganza) are- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Codenovus- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " A flagship coding competition conducted in two rounds, qualifying and final.The qualifying round was held online and shortlisted candidates got the chance to compete in the final round. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Web-o-design- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " A front-end web development competition wherein the participants were to produce a replica of a sample website shown at the time of competition using HTML,CSS,Bootstrap. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Consilium- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " An interactive session with Dr. Prabin Kumar Bora, Professor in the Department of Electronics and Electrical Engineering at IITG, was held.Students caught a glimpse of his accomplishments in the field of machine learning and the virtues and vices of this revolutionary technology was discussed. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Python bootcamp , Compt Coding Practice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " A two-day python bootcamp was organised where we offered classes on python programming language. The speciality of this camp was that anyone having no prior knowledge of python could participate in it. We also organised a practice session dealing with problems related to competitive coding. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "ngx-gallery", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "ngx-gallery", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Linux introduction and installation drive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Annual mass linux installation fest was organised where we installed various linux operating system distributions. Multiple session on linux commands and configuration of linux os evnironment was also organised. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Codingspree and Big Data Webinar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " On the occasion of Engineer\u2019s day we organised a flagship coding competition (Codingspree) to promote and improve the coding skills of the students. Another event that was organised on the very occasion of Programmer\u2019s day i.e. on 13th of September was an online webiner session. The guests of our session were Jaydeep Deka, an alumnus of our institution, who is also a speaker at world Machine Learning Summit, Dublin, Ireland and Habib Mohammed Khan who is a scientist at ISRO, the leading research organisation of India. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "ngx-gallery", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "ngx-gallery", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Cynsecure 2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Cynsecure organised on the occasion of Pheonix 2019. Cynsecure was a bootcamp and the very First CTF Capture The Flag competition of the region. The events organised under the supervision of Mr. Subhasmit Malakar, lasted 3 days out of which the first 2 was introduction and training on various concepts and tools of cybersecurity with the 3rd day being the final CTF day. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Events 2017-19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Showcasing some glimpse of our events throughout the year 2017-19. Mass Linux installation , linux commands tutorials , coding competitions are few of the many events conducted by glug throughout these years ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "ngx-gallery", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "ngx-gallery", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Events 2015-2017");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Catch a glimpse of some of event organised in the very early years of Jec GLUG. Founded in 2013 under the supervision of MR. Rajib Chakrabartty Sir we are proud to be one the very first group of its kind in the entire region of jorhat and upper assam`. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.galleryOptions_technovus)("images", ctx.galleryImages_technovus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.galleryOptions_bootcamp)("images", ctx.galleryImages_bootcamp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.galleryOptions_linux)("images", ctx.galleryImages_linux);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.galleryOptions_programmers)("images", ctx.galleryImages_programmers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.galleryOptions_cynsecure)("images", ctx.galleryImages_cynsecure);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.galleryOptions_legacy)("images", ctx.galleryImages_legacy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.galleryOptions_starting)("images", ctx.galleryImages_starting);
        }
      },
      directives: [ngx_gallery_9__WEBPACK_IMPORTED_MODULE_1__["NgxGalleryComponent"]],
      styles: ["h2[_ngcontent-%COMP%]{\n    \n    font-family: 'Dosis', sans-serif;\n    font-weight: 500;\n}\n\n\n\n.show-xs[_ngcontent-%COMP%]{\n    display: none;\n}\n\n\n\n@media only screen and (max-width: 500px) {\n    .show-xs[_ngcontent-%COMP%] {\n        display: block;    \n    }\n    .hide-xs[_ngcontent-%COMP%]{\n        display: none;\n    }\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Bhc3QtZXZlbnRzL3Bhc3QtZXZlbnRzL3Bhc3QtZXZlbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQ0FBMEM7SUFDMUMsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtBQUNwQjs7OztBQUlBO0lBQ0ksYUFBYTtBQUNqQjs7OztBQUNBO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCOztBQUVKIiwiZmlsZSI6Ii4uLy4uL3Bhc3QtZXZlbnRzL3Bhc3QtZXZlbnRzL3Bhc3QtZXZlbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcbiAgICAvKiBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7ICovXG4gICAgZm9udC1mYW1pbHk6ICdEb3NpcycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuXG5cbi5zaG93LXhze1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgLnNob3cteHMge1xuICAgICAgICBkaXNwbGF5OiBibG9jazsgICAgXG4gICAgfVxuICAgIC5oaWRlLXhze1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PastEventsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-past-events',
          templateUrl: './past-events.component.html',
          styleUrls: ['./past-events.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=past-events-past-events-module-es5.js.map