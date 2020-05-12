function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDetailsDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHerf='/'></ion-back-button>\n      </ion-buttons>\n    <ion-title>details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list>\n\n  <ion-item>\n    <ion-input placeholder=\"Expense\" [(ngModel)]= \"expenses.expense\"></ion-input>\n  </ion-item>\n\n  \n<ion-item>\n    <ion-input placeholder=\"Expense\" [(ngModel)]= \"expenses.dollars\"></ion-input>\n  </ion-item>\n\n  <ion-button (click)=\"saveExpenses()\">Save</ion-button>\n</ion-list>\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/details/details-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/details/details-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: DetailsPageRoutingModule */

  /***/
  function srcAppDetailsDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsPageRoutingModule", function () {
      return DetailsPageRoutingModule;
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


    var _details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./details.page */
    "./src/app/details/details.page.ts");

    var routes = [{
      path: '',
      component: _details_page__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"]
    }];

    var DetailsPageRoutingModule = function DetailsPageRoutingModule() {
      _classCallCheck(this, DetailsPageRoutingModule);
    };

    DetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/details/details.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/details/details.module.ts ***!
    \*******************************************/

  /*! exports provided: DetailsPageModule */

  /***/
  function srcAppDetailsDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function () {
      return DetailsPageModule;
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


    var _details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./details-routing.module */
    "./src/app/details/details-routing.module.ts");
    /* harmony import */


    var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./details.page */
    "./src/app/details/details.page.ts");

    var DetailsPageModule = function DetailsPageModule() {
      _classCallCheck(this, DetailsPageModule);
    };

    DetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _details_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsPageRoutingModule"]],
      declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]]
    })], DetailsPageModule);
    /***/
  },

  /***/
  "./src/app/details/details.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/details/details.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppDetailsDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/details/details.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/details/details.page.ts ***!
    \*****************************************/

  /*! exports provided: DetailsPage */

  /***/
  function srcAppDetailsDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsPage", function () {
      return DetailsPage;
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


    var _cash_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../cash.service */
    "./src/app/cash.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var DetailsPage = /*#__PURE__*/function () {
      function DetailsPage(cashService, route, nav) {
        _classCallCheck(this, DetailsPage);

        this.cashService = cashService;
        this.route = route;
        this.nav = nav;
        this.expenses = {
          expense: '',
          dollars: '',
          dated: new Date().getDate()
        };
      }

      _createClass(DetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.expensesId = this.route.snapshot.params['id'];

          if (this.expensesId) {
            this.loadexpenses();
          }
        }
      }, {
        key: "loadexpenses",
        value: function loadexpenses() {
          var _this = this;

          this.cashService.getExp(this.expensesId).subscribe(function (res) {
            _this.expenses = res;
          });
        }
      }, {
        key: "saveExpenses",
        value: function saveExpenses() {
          var _this2 = this;

          if (this.expensesId) {
            this.cashService.updateExpenses(this.expenses, this.expensesId).then(function () {
              _this2.nav.navigateBack('tabs');
            });
          } else {
            this.cashService.addExpenses(this.expenses).then(function () {
              _this2.nav.navigateBack('tabs');
            });
          }
        }
      }]);

      return DetailsPage;
    }();

    DetailsPage.ctorParameters = function () {
      return [{
        type: _cash_service__WEBPACK_IMPORTED_MODULE_2__["CashService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }];
    };

    DetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./details.page.scss */
      "./src/app/details/details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cash_service__WEBPACK_IMPORTED_MODULE_2__["CashService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])], DetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=details-details-module-es5.js.map