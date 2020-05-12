function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"back\">\n  <br>\n  <img src=\"/assets/icon/logo.jpeg\" class=\"logo\"> \n<br>\n<br>\n\n<ion-text color=\"warning\"><h4 class=\"text\">Welcome !</h4></ion-text>\n\n<br>\n<ion-grid>\n  \n  <ion-row center>\n\n<div class=\"sizeInput\">\n  <ion-item class=\"input\">\n    <ion-label  position = \"floating\" color=\"warning\">Enter your Email Id</ion-label>\n      <ion-input [(ngModel)]=\"user.email\" color=\"warning\" clearInput value=\"clear me\"></ion-input>\n  </ion-item>\n  \n<br>  \n  <ion-item class=\"input\">\n    <ion-label  position = \"floating\" color=\"warning\">Enter a 6 digit password</ion-label>\n   <ion-input  type=\"password\" [(ngModel)]=\"user.password\" color=\"warning\"></ion-input>\n  </ion-item>\n  \n</div>\n\n<div class=\"sizeButton\">\n\n  <br>\n  \n\n<ion-button (click)=\"callingButtonSignIn()\" shape=\"round\" color=\"warning\" fill=\"outline\">Sign In</ion-button>\n<br>\n<br>\n<ion-button (click)=\"callingButtonRegister()\" shape=\"round\" color=\"warning\" fill=\"outline\">Sign Up</ion-button>\n</div>\n\n</ion-row>\n</ion-grid>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".back {\n  --background: #6b0f1a;\n  --background: linear-gradient(315deg, #6b0f1a 0%, #b91372 74%);\n}\n\n.logo {\n  padding-left: 80px;\n}\n\n.input {\n  --border-radius: 30px;\n  --box-shadow: 10px;\n}\n\n.sizeInput {\n  width: 250px;\n  margin-left: 55px;\n}\n\n.sizeButton {\n  margin-left: 115px;\n}\n\n.text {\n  text-decoration: underline;\n  margin-left: 130px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YXRzYXYvRGVza3RvcC9FeHBlbnNlVHJhY2tlcklvbmljL3NyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxxQkFBQTtFQUNBLDhEQUFBO0FDQUo7O0FESUE7RUFDSSxrQkFBQTtBQ0RKOztBREtBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBRFlBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDVEo7O0FEYUE7RUFDSSxrQkFBQTtBQ1ZKOztBRGFBO0VBQ0ksMEJBQUE7RUFDQSxrQkFBQTtBQ1ZKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2t7XG4gICAgXG4gICAgLS1iYWNrZ3JvdW5kOiAjNmIwZjFhO1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzZiMGYxYSAwJSwgI2I5MTM3MiA3NCUpO1xufVxuXG5cbi5sb2dve1xuICAgIHBhZGRpbmctbGVmdDogODBweCA7XG4gICAgXG59XG5cbi5pbnB1dHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgLS1ib3gtc2hhZG93OiAxMHB4O1xuLy8gICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbi8vICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4vLyAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4vLyAgIC0tYm94LXNoYWRvdzogMnB4IGdyYXk7XG4vLyAgIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcbi8vIC8vICAgLS1iYWNrZ3JvdW5kOiAjZjhmOWZhO1xuXG59XG5cbi5zaXplSW5wdXR7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1NXB4O1xuICAgIFxufVxuXG4uc2l6ZUJ1dHRvbntcbiAgICBtYXJnaW4tbGVmdDogMTE1cHg7XG59XG5cbi50ZXh0e1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIG1hcmdpbi1sZWZ0OiAxMzBweDtcbn0iLCIuYmFjayB7XG4gIC0tYmFja2dyb3VuZDogIzZiMGYxYTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjNmIwZjFhIDAlLCAjYjkxMzcyIDc0JSk7XG59XG5cbi5sb2dvIHtcbiAgcGFkZGluZy1sZWZ0OiA4MHB4O1xufVxuXG4uaW5wdXQge1xuICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIC0tYm94LXNoYWRvdzogMTBweDtcbn1cblxuLnNpemVJbnB1dCB7XG4gIHdpZHRoOiAyNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDU1cHg7XG59XG5cbi5zaXplQnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDExNXB4O1xufVxuXG4udGV4dCB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBtYXJnaW4tbGVmdDogMTMwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(nav, rauth, toastctrl) {
        _classCallCheck(this, LoginPage);

        this.nav = nav;
        this.rauth = rauth;
        this.toastctrl = toastctrl;
        this.user = {
          email: '',
          password: ''
        };
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          var _this = this;

          var user = this.rauth.auth.signInWithEmailAndPassword(this.user.email, this.user.password).then(function () {
            _this.nav.navigateForward('tabs');
          }).then(function (user) {
            console.log("inhere");

            _this.toast();
          })["catch"](function (err) {
            console.log(err);
          });
        }
      }, {
        key: "register",
        value: function register() {
          var _this2 = this;

          var user = this.rauth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then(function (user) {
            console.log("here");

            _this2.toast();
          })["catch"](function (err) {
            console.log(err);
          });
        }
      }, {
        key: "toast",
        value: function toast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastctrl.create({
                      message: 'err',
                      duration: 2000
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "callingButtonSignIn",
        value: function callingButtonSignIn() {
          this.login();
          this.toast();
        }
      }, {
        key: "callingButtonRegister",
        value: function callingButtonRegister() {
          this.register();
          this.toast();
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map