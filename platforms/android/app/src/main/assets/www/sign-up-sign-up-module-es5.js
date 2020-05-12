function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up-sign-up-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignUpSignUpPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"back\">\n  \n  <img src=\"/assets/icon/logo.jpeg\" class=\"logo\"> \n<br>\n\n\n<ion-text color=\"warning\"><h4 class=\"text\">Enter the required Fields</h4></ion-text>\n\n<br>\n\n<div class=\"sizeInput\">\n  <ion-item class=\"input\">\n    <ion-label  position = \"floating\" color=\"warning\">Enter your First Name</ion-label>\n      <ion-input [(ngModel)]=\"user.firstName\" color=\"warning\" clearInput value=\"clear me\"></ion-input>\n  </ion-item>\n<br>\n\n  <div class=\"sizeInput\">\n  <ion-item class=\"input\">\n    <ion-label  position = \"floating\" color=\"warning\">Enter your Last Name</ion-label>\n      <ion-input [(ngModel)]=\"user.lastName\" color=\"warning\" clearInput value=\"clear me\"></ion-input>\n  </ion-item>\n  \n<br>\n  <div class=\"sizeInput\">\n  <ion-item class=\"input\">\n    <ion-label  position = \"floating\" color=\"warning\">Enter your Phone Number</ion-label>\n      <ion-input [(ngModel)]=\"user.phoneNumber\" color=\"warning\" clearInput value=\"clear me\"></ion-input>\n  </ion-item>\n\n\n<br>\n\n  <!-- <div class=\"sizeInput\"> -->\n  <ion-item class=\"input\">\n    <ion-label  position = \"floating\" color=\"warning\">Enter your Email Id</ion-label>\n      <ion-input [(ngModel)]=\"user.email\" color=\"warning\" clearInput value=\"clear me\"></ion-input>\n  </ion-item>\n  \n<br>  \n  <ion-item class=\"input\">\n    <ion-label  position = \"floating\" color=\"warning\">Enter a 6 digit password</ion-label>\n   <ion-input  type=\"password\" [(ngModel)]=\"user.password\" color=\"warning\"></ion-input>\n  </ion-item>\n  \n\n<div class=\"sizeButton\">\n<ion-button (click)=\"register()\" shape=\"round\" color=\"warning\" fill=\"outline\">Sign Up</ion-button>\n</div>\n\n\n\n\n\n";
    /***/
  },

  /***/
  "./src/app/sign-up/sign-up-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/sign-up/sign-up-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: SignUpPageRoutingModule */

  /***/
  function srcAppSignUpSignUpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpPageRoutingModule", function () {
      return SignUpPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _sign_up_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sign-up.page */
    "./src/app/sign-up/sign-up.page.ts");

    var routes = [{
      path: '',
      component: _sign_up_page__WEBPACK_IMPORTED_MODULE_3__["SignUpPage"]
    }];

    var SignUpPageRoutingModule = function SignUpPageRoutingModule() {
      _classCallCheck(this, SignUpPageRoutingModule);
    };

    SignUpPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignUpPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/sign-up/sign-up.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/sign-up/sign-up.module.ts ***!
    \*******************************************/

  /*! exports provided: SignUpPageModule */

  /***/
  function srcAppSignUpSignUpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function () {
      return SignUpPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sign-up-routing.module */
    "./src/app/sign-up/sign-up-routing.module.ts");
    /* harmony import */


    var _sign_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sign-up.page */
    "./src/app/sign-up/sign-up.page.ts");

    var SignUpPageModule = function SignUpPageModule() {
      _classCallCheck(this, SignUpPageModule);
    };

    SignUpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignUpPageRoutingModule"]],
      declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]]
    })], SignUpPageModule);
    /***/
  },

  /***/
  "./src/app/sign-up/sign-up.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/sign-up/sign-up.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignUpSignUpPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".back {\n  --background: #6b0f1a;\n  --background: linear-gradient(315deg, #6b0f1a 0%, #b91372 74%);\n}\n\n.logo {\n  padding-left: 80px;\n}\n\n.sizeButton {\n  margin-left: 115px;\n}\n\n.text {\n  text-decoration: underline;\n  margin-left: 65px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YXRzYXYvRGVza3RvcC9FeHBlbnNlVHJhY2tlcklvbmljL3NyYy9hcHAvc2lnbi11cC9zaWduLXVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2lnbi11cC9zaWduLXVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHFCQUFBO0VBQ0EsOERBQUE7QUNBSjs7QURJQTtFQUNJLGtCQUFBO0FDREo7O0FEdUJBO0VBQ0ksa0JBQUE7QUNwQko7O0FEdUJBO0VBQ0ksMEJBQUE7RUFDQyxpQkFBQTtBQ3BCTCIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja3tcbiAgICBcbiAgICAtLWJhY2tncm91bmQ6ICM2YjBmMWE7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjNmIwZjFhIDAlLCAjYjkxMzcyIDc0JSk7XG59XG5cblxuLmxvZ297XG4gICAgcGFkZGluZy1sZWZ0OiA4MHB4IDtcbiAgICBcbn1cblxuLy8gLmlucHV0e1xuLy8gICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbi8vICAgICAtLWJveC1zaGFkb3c6IDEwcHg7XG4vLyAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuLy8gICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbi8vICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbi8vICAgLS1ib3gtc2hhZG93OiAycHggZ3JheTtcbi8vICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xuLy8gLy8gICAtLWJhY2tncm91bmQ6ICNmOGY5ZmE7XG5cblxuXG4vLyAuc2l6ZUlucHV0e1xuLy8gICAgIHdpZHRoOiAyNTBweDtcbi8vICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBcbi8vIH1cblxuLnNpemVCdXR0b257XG4gICAgbWFyZ2luLWxlZnQ6IDExNXB4O1xufVxuXG4udGV4dHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgbWFyZ2luLWxlZnQ6IDY1cHg7XG59IiwiLmJhY2sge1xuICAtLWJhY2tncm91bmQ6ICM2YjBmMWE7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzZiMGYxYSAwJSwgI2I5MTM3MiA3NCUpO1xufVxuXG4ubG9nbyB7XG4gIHBhZGRpbmctbGVmdDogODBweDtcbn1cblxuLnNpemVCdXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTE1cHg7XG59XG5cbi50ZXh0IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIG1hcmdpbi1sZWZ0OiA2NXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/sign-up/sign-up.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/sign-up/sign-up.page.ts ***!
    \*****************************************/

  /*! exports provided: SignUpPage */

  /***/
  function srcAppSignUpSignUpPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpPage", function () {
      return SignUpPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");

    var SignUpPage = /*#__PURE__*/function () {
      function SignUpPage(nav, rauth, toastctrl) {
        _classCallCheck(this, SignUpPage);

        this.nav = nav;
        this.rauth = rauth;
        this.toastctrl = toastctrl;
        this.user = {
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          phoneNumber: ''
        };
      }

      _createClass(SignUpPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "register",
        value: function register() {
          var _this = this;

          var user = this.rauth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then(function () {
            _this.nav.navigateRoot('login');
          });
        }
      }]);

      return SignUpPage;
    }();

    SignUpPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    SignUpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-up',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-up.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-up.page.scss */
      "./src/app/sign-up/sign-up.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], SignUpPage);
    /***/
  }
}]);
//# sourceMappingURL=sign-up-sign-up-module-es5.js.map