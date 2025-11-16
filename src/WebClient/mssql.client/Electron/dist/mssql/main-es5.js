function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": (
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_appComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ngx-ui-loader></ngx-ui-loader>\r\n<router-outlet></router-outlet>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/login/login.component.html": (
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/login/login.component.html ***!
    \**************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_auth_components_login_loginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"login-container\">\r\n  <div class=\"login-card\">\r\n    <div class=\"login-header\">\r\n      <h2>MSSQL Management</h2>\r\n      <p>Sign in to continue</p>\r\n    </div>\r\n\r\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n      <!-- Error Alert -->\r\n      <div *ngIf=\"errorMessage\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n        <i class=\"fa fa-exclamation-circle\"></i> {{ errorMessage }}\r\n        <button type=\"button\" class=\"close\" (click)=\"clearError()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n\r\n      <!-- Username Field -->\r\n      <div class=\"form-group\">\r\n        <label for=\"username\">Username or Email</label>\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">\r\n              <i class=\"fa fa-user\"></i>\r\n            </span>\r\n          </div>\r\n          <input \r\n            type=\"text\" \r\n            formControlName=\"username\" \r\n            class=\"form-control\" \r\n            id=\"username\"\r\n            placeholder=\"Enter username or email\"\r\n            [class.is-invalid]=\"submitted && f.username.errors\"\r\n            (focus)=\"clearError()\"\r\n          />\r\n        </div>\r\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback d-block\">\r\n          <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Password Field -->\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">\r\n              <i class=\"fa fa-lock\"></i>\r\n            </span>\r\n          </div>\r\n          <input \r\n            type=\"password\" \r\n            formControlName=\"password\" \r\n            class=\"form-control\" \r\n            id=\"password\"\r\n            placeholder=\"Enter password\"\r\n            [class.is-invalid]=\"submitted && f.password.errors\"\r\n            (focus)=\"clearError()\"\r\n          />\r\n        </div>\r\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback d-block\">\r\n          <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Remember Me -->\r\n      <div class=\"form-group form-check\">\r\n        <input \r\n          type=\"checkbox\" \r\n          formControlName=\"rememberMe\" \r\n          class=\"form-check-input\" \r\n          id=\"rememberMe\"\r\n        />\r\n        <label class=\"form-check-label\" for=\"rememberMe\">\r\n          Remember me\r\n        </label>\r\n      </div>\r\n\r\n      <!-- Submit Button -->\r\n      <button \r\n        type=\"submit\" \r\n        class=\"btn btn-primary btn-block\" \r\n        [disabled]=\"loading\"\r\n      >\r\n        <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-2\"></span>\r\n        <span *ngIf=\"!loading\"><i class=\"fa fa-sign-in mr-2\"></i>Sign In</span>\r\n        <span *ngIf=\"loading\">Signing In...</span>\r\n      </button>\r\n    </form>\r\n\r\n    <div class=\"login-footer\">\r\n      <p class=\"text-muted\">\r\n        <small>© 2024 MSSQL Management System</small>\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/database/components/database-selector/database-selector.component.html": (
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/database/components/database-selector/database-selector.component.html ***!
    \******************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_database_components_databaseSelector_databaseSelectorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"database-selector-container\">\r\n  <label for=\"databaseSelect\">Select Database:</label>\r\n  <select id=\"databaseSelect\" [(ngModel)]=\"selectedDatabase\" (change)=\"onChangeDatabase($event)\" class=\"database-dropdown\">\r\n    <option *ngFor=\"let db of databases\" [value]=\"db\">{{ db }}</option>\r\n  </select>\r\n  \r\n</div>\r\n ";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/left-menu/components/left-menu/leftmenu.component.html": (
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/left-menu/components/left-menu/leftmenu.component.html ***!
    \**************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_leftMenu_components_leftMenu_leftmenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\" \">\r\n    <div class=\"cell\">  \r\n      <amexio-tree-filter-view [data-reader]=\"'data'\"\r\n                               (nodeClick)=\"getNodeData($event)\"\r\n                               [data]=\"leftmenujsonvalues\">\r\n      </amexio-tree-filter-view> \r\n    </div>\r\n  </div>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/code-viewer/code-viewer.component.html": (
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/code-viewer/code-viewer.component.html ***!
    \****************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_shared_components_codeViewer_codeViewerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"code-container\">\r\n  <ngx-prism *ngIf=\"code && code.length > 0\" [language]=\"language\">\r\n    {{ code }}\r\n  </ngx-prism>\r\n  <div *ngIf=\"!code || code.length === 0\" class=\"no-code-message\">\r\n    <p>No code available to display</p>\r\n  </div>\r\n</div>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/ui/footer/footer.component.html": (
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/footer/footer.component.html ***!
    \***************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_ui_footer_footerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<footer class=\"footer\"> \r\n   zzdfsdfsdf\r\n   sdf\r\n   sdas\r\n  </footer>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/ui/header/header.component.html": (
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/header/header.component.html ***!
    \***************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_ui_header_headerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<header class=\"header\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark\">\r\n    <a class=\"navbar-brand\" routerLink=\"/\">\r\n      <i class=\"fa fa-database\"></i> MSSQL Management\r\n    </a>\r\n\r\n    <!-- Dashboard menu next to brand (left side) -->\r\n    <ul class=\"navbar-nav navbar-nav-left\" *ngIf=\"isAuthenticated\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/dashboard\" routerLinkActive=\"active\">\r\n          <i class=\"fa fa-home\"></i> Dashboard\r\n        </a>\r\n      </li>\r\n    </ul>\r\n\r\n    <button class=\"navbar-toggler\" type=\"button\"\r\n            (click)=\"isNavbarCollapsed = !isNavbarCollapsed\"\r\n            [attr.aria-expanded]=\"!isNavbarCollapsed\"\r\n            aria-controls=\"navbarNav\"\r\n            aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\"\r\n         id=\"navbarNav\"\r\n         [class.show]=\"!isNavbarCollapsed\">\r\n      <!-- Dashboard link for mobile (inside collapse) -->\r\n      <ul class=\"navbar-nav mobile-nav\" *ngIf=\"isAuthenticated\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/dashboard\" routerLinkActive=\"active\" (click)=\"isNavbarCollapsed = true\">\r\n            <i class=\"fa fa-home\"></i> Dashboard\r\n          </a>\r\n        </li>\r\n      </ul>\r\n\r\n      <!-- Right side user menu -->\r\n      <ul class=\"navbar-nav ms-auto\">\r\n        <li class=\"nav-item\" *ngIf=\"!isAuthenticated\">\r\n          <button class=\"btn btn-outline-light btn-sm\" (click)=\"navigateToLogin()\">\r\n            <i class=\"fa fa-sign-in\"></i> Login\r\n          </button>\r\n        </li>\r\n\r\n        <li class=\"nav-item\" *ngIf=\"isAuthenticated\">\r\n          <span class=\"navbar-text user-info\">\r\n            <i class=\"fa fa-user-circle\"></i>\r\n            {{ currentUser?.fullName || currentUser?.userName || 'User' }}\r\n          </span>\r\n        </li>\r\n\r\n        <li class=\"nav-item\" *ngIf=\"isAuthenticated\">\r\n          <button class=\"btn btn-outline-light btn-sm\" (click)=\"logout()\">\r\n            <i class=\"fa fa-sign-out\"></i> Logout\r\n          </button>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</header>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/ui/main-page/main-page.component.html": (
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/main-page/main-page.component.html ***!
    \*********************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_ui_mainPage_mainPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-header></app-header>\r\n<div id=\"main-content\">\r\n  <div class=\"split-example ex-percent\">\r\n    <as-split unit=\"percent\"\r\n              direction=\"horizontal\"\r\n              #split=\"asSplit\"\r\n              [gutterSize]=\"10\"\r\n              [useTransition]=\"useTransition\"\r\n              (dragStart)=\"log('dragStart', $event)\"\r\n              (dragEnd)=\"log('dragEnd', $event)\"\r\n              (gutterClick)=\"toggleSidebar()\"\r\n              (gutterDblClick)=\"toggleSidebar()\">\r\n\r\n      <as-split-area [size]=\"25\"\r\n                     [minSize]=\"0\"\r\n                     [maxSize]=\"50\"\r\n                     #area1=\"asSplitArea\" id=\"asSplitArea1\">\r\n        <div class=\"leftmenuExtendedProperties\">\r\n          <!-- Fixed Top Section -->\r\n          <div class=\"database-section\">\r\n            <app-database-selector></app-database-selector>\r\n          </div>\r\n\r\n          <!-- Scrollable Bottom Section -->\r\n          <div class=\"menu-section\">\r\n            <app-leftmenu></app-leftmenu>\r\n          </div>\r\n        </div>\r\n      </as-split-area>\r\n\r\n\r\n\r\n      <!-- Right Panel - Main Content -->\r\n      <as-split-area [size]=\"75\"\r\n                     [ngClass]=\"status ? 'ShowFullPageMode' : 'RemoveFullPageMode'\"\r\n                     #area2=\"asSplitArea\"\r\n                     id=\"asSplitArea2\">\r\n        <div class=\"main-area\">\r\n          <button class=\"menu-toggle\" (click)=\"toggleSidebar()\">\r\n            <i class=\"fa fa-bars\"></i>\r\n          </button>\r\n          <div id=\"center\">\r\n            <router-outlet></router-outlet>\r\n          </div>\r\n        </div>\r\n      </as-split-area>\r\n\r\n    </as-split>\r\n  </div>\r\n\r\n  <!-- Overlay for Sidebar -->\r\n  <div class=\"overlay\" [class.active]=\"!status\" (click)=\"toggleSidebar()\"></div>\r\n</div>\r\n";

    /***/
  }),
  /***/"./node_modules/tslib/tslib.es6.js": (
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/
  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
  /***/
  function _node_modules_tslib_tslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
      return _extendStatics(d, b);
    };
    function __extends(d, b) {
      _extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }
    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }
    function __exportStar(m, exports) {
      for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
      return ar;
    }
    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
      return r;
    }
    ;
    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;
      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }
    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }
    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
        i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }
    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    }
    ;
    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result["default"] = mod;
      return result;
    }
    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
    }

    /***/
  }),
  /***/"./src/$$_lazy_route_resource lazy recursive": (
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/
  /*! no static exports found */
  /***/
  function _src_$$_lazy_route_resource_lazy_recursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

    /***/
  }),
  /***/"./src/app/app-routing.module.ts": (
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/
  /*! exports provided: AppRoutingModule */
  /***/
  function _src_app_appRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/components/login/login.component */"./src/app/auth/components/login/login.component.ts");
    /* harmony import */
    var _ui_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/main-page/main-page.component */"./src/app/ui/main-page/main-page.component.ts");
    /* harmony import */
    var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/guards/auth.guard */"./src/app/auth/guards/auth.guard.ts");
    var routes = [
    // Login route (public, no guard, no layout)
    {
      path: 'login',
      component: _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    // Main protected area with lazy-loaded child routes
    {
      path: '',
      component: _ui_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"],
      canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
      children: [
      // Singular routes (for detail views)
      {
        path: 'Table',
        loadChildren: function loadChildren() {
          return Promise.all(/*! import() | table-table-module */[__webpack_require__.e("default~database-database-module~function-function-module~procedure-procedure-module~schema-schema-m~0dd5a5d6"), __webpack_require__.e("default~database-database-module~function-function-module~schema-schema-module~table-table-module~tr~1a72d205"), __webpack_require__.e("default~function-function-module~procedure-procedure-module~table-table-module~triggers-trigger-modu~a5cf089c"), __webpack_require__.e("table-table-module")]).then(__webpack_require__.bind(null, /*! ./table/table.module */"./src/app/table/table.module.ts")).then(function (m) {
            return m.TablesModule;
          });
        }
      }, {
        path: 'Storeprocedure',
        loadChildren: function loadChildren() {
          return Promise.all(/*! import() | procedure-procedure-module */[__webpack_require__.e("default~database-database-module~function-function-module~procedure-procedure-module~schema-schema-m~0dd5a5d6"), __webpack_require__.e("default~function-function-module~procedure-procedure-module~table-table-module~triggers-trigger-modu~a5cf089c"), __webpack_require__.e("procedure-procedure-module")]).then(__webpack_require__.bind(null, /*! ./procedure/procedure.module */"./src/app/procedure/procedure.module.ts")).then(function (m) {
            return m.ProcedureModule;
          });
        }
      }, {
        path: 'View',
        loadChildren: function loadChildren() {
          return Promise.all(/*! import() | view-views-module */[__webpack_require__.e("default~database-database-module~function-function-module~procedure-procedure-module~schema-schema-m~0dd5a5d6"), __webpack_require__.e("default~database-database-module~function-function-module~schema-schema-module~table-table-module~tr~1a72d205"), __webpack_require__.e("default~function-function-module~procedure-procedure-module~table-table-module~triggers-trigger-modu~a5cf089c"), __webpack_require__.e("view-views-module")]).then(__webpack_require__.bind(null, /*! ./view/views.module */"./src/app/view/views.module.ts")).then(function (m) {
            return m.ViewModule;
          });
        }
      }, {
        path: 'AggregateFunction',
        loadChildren: function loadChildren() {
          return Promise.all(/*! import() | function-function-module */[__webpack_require__.e("default~database-database-module~function-function-module~procedure-procedure-module~schema-schema-m~0dd5a5d6"), __webpack_require__.e("default~database-database-module~function-function-module~schema-schema-module~table-table-module~tr~1a72d205"), __webpack_require__.e("default~function-function-module~procedure-procedure-module~table-table-module~triggers-trigger-modu~a5cf089c"), __webpack_require__.e("function-function-module")]).then(__webpack_require__.bind(null, /*! ./function/function.module */"./src/app/function/function.module.ts")).then(function (m) {
            return m.FunctionModule;
          });
        }
      }, {
        path: 'ScalarFunction',
        loadChildren: function loadChildren() {
          return Promise.all(/*! import() | function-function-module */[__webpack_require__.e("default~database-database-module~function-function-module~procedure-procedure-module~schema-schema-m~0dd5a5d6"), __webpack_require__.e("default~database-database-module~function-function-module~schema-schema-module~table-table-module~tr~1a72d205"), __webpack_require__.e("default~function-function-module~procedure-procedure-module~table-table-module~triggers-trigger-modu~a5cf089c"), __webpack_require__.e("function-function-module")]).then(__webpack_require__.bind(null, /*! ./function/function.module */"./src/app/function/function.module.ts")).then(function (m) {
            return m.FunctionModule;
          });
        }
      }, {
        path: 'TableValueFunction',
        loadChildren: function loadChildren() {
          return Promise.all(/*! import() | function-function-module */[__webpack_require__.e("default~database-database-module~function-function-module~procedure-procedure-module~schema-schema-m~0dd5a5d6"), __webpack_require__.e("default~database-database-module~function-function-module~schema-schema-module~table-table-module~tr~1a72d205"), __webpack_require__.e("default~function-function-module~procedure-procedure-module~table-table-module~triggers-trigger-modu~a5cf089c"), __webpack_require__.e("function-function-module")]).then(__webpack_require__.bind(null, /*! ./function/function.module */"./src/app/function/function.module.ts")).then(function (m) {
            return m.FunctionModule;
          });
        }
      }, {
        path: 'Trigger',
        loadChildren: function loadChildren() {
          return Promise.all(/*! import() | triggers-trigger-module */[__webpack_require__.e("default~database-database-module~function-function-module~procedure-procedure-module~schema-schema-m~0dd5a5d6"), __webpack_require__.e("default~database-database-module~function-function-module~schema-schema-module~table-table-module~tr~1a72d205"), __webpack_require__.e("default~function-function-module~procedure-procedure-module~table-table-module~triggers-trigger-modu~a5cf089c"), __webpack_require__.e("triggers-trigger-module")]).then(__webpack_require__.bind(null, /*! ./triggers/trigger.module */"./src/app/triggers/trigger.module.ts")).then(function (m) {
            return m.DatabaseTriggerModule;
          });
        }
      }, {
        path: 'Schema',
        loadChildren: function loadChildren() {
          return Promise.all(/*! import() | schema-schema-module */[__webpack_require__.e("default~database-database-module~function-function-module~procedure-procedure-module~schema-schema-m~0dd5a5d6"), __webpack_require__.e("default~database-database-module~function-function-module~schema-schema-module~table-table-module~tr~1a72d205"), __webpack_require__.e("schema-schema-module")]).then(__webpack_require__.bind(null, /*! ./schema/schema.module */"./src/app/schema/schema.module.ts")).then(function (m) {
            return m.SchemasModule;
          });
        }
      }, {
        path: 'XmlSchema',
        loadChildren: function loadChildren() {
          return Promise.all(/*! import() | xml-schema-xml-schema-module */[__webpack_require__.e("default~database-database-module~function-function-module~procedure-procedure-module~schema-schema-m~0dd5a5d6"), __webpack_require__.e("default~database-database-module~function-function-module~schema-schema-module~table-table-module~tr~1a72d205"), __webpack_require__.e("default~function-function-module~procedure-procedure-module~table-table-module~triggers-trigger-modu~a5cf089c"), __webpack_require__.e("xml-schema-xml-schema-module")]).then(__webpack_require__.bind(null, /*! ./xml-schema/xml-schema.module */"./src/app/xml-schema/xml-schema.module.ts")).then(function (m) {
            return m.XmlSchemaModule;
          });
        }
      }, {
        path: 'UserDefinedDataType',
        loadChildren: function loadChildren() {
          return Promise.all(/*! import() | user-defined-data-type-user-defined-data-type-module */[__webpack_require__.e("default~database-database-module~function-function-module~procedure-procedure-module~schema-schema-m~0dd5a5d6"), __webpack_require__.e("default~database-database-module~function-function-module~schema-schema-module~table-table-module~tr~1a72d205"), __webpack_require__.e("default~function-function-module~procedure-procedure-module~table-table-module~triggers-trigger-modu~a5cf089c"), __webpack_require__.e("user-defined-data-type-user-defined-data-type-module")]).then(__webpack_require__.bind(null, /*! ./user-defined-data-type/user-defined-data-type.module */"./src/app/user-defined-data-type/user-defined-data-type.module.ts")).then(function (m) {
            return m.UserDefinedDataTypesModule;
          });
        }
      }, {
        path: 'Database',
        loadChildren: function loadChildren() {
          return Promise.all(/*! import() | database-database-module */[__webpack_require__.e("default~database-database-module~function-function-module~procedure-procedure-module~schema-schema-m~0dd5a5d6"), __webpack_require__.e("default~database-database-module~function-function-module~schema-schema-module~table-table-module~tr~1a72d205"), __webpack_require__.e("database-database-module")]).then(__webpack_require__.bind(null, /*! ./database/database.module */"./src/app/database/database.module.ts")).then(function (m) {
            return m.DatabaseModule;
          });
        }
      },
      // Plural routes (redirects to list views)
      {
        path: 'Tables',
        redirectTo: 'Table/s',
        pathMatch: 'full'
      }, {
        path: 'Views',
        redirectTo: 'View/s',
        pathMatch: 'full'
      }, {
        path: 'Storeprocedures',
        redirectTo: 'Storeprocedure/s',
        pathMatch: 'full'
      }, {
        path: 'ScalarFunctions',
        redirectTo: 'ScalarFunction/s',
        pathMatch: 'full'
      }, {
        path: 'AggregateFunctions',
        redirectTo: 'AggregateFunction/s',
        pathMatch: 'full'
      }, {
        path: 'TableValueFunctions',
        redirectTo: 'TableValueFunction/s',
        pathMatch: 'full'
      }, {
        path: 'Triggers',
        redirectTo: 'Trigger/s',
        pathMatch: 'full'
      }, {
        path: 'Schemas',
        redirectTo: 'Schema/s',
        pathMatch: 'full'
      }, {
        path: 'XmlSchemas',
        redirectTo: 'XmlSchema/s',
        pathMatch: 'full'
      }, {
        path: 'UserDefinedDataTypes',
        redirectTo: 'UserDefinedDataType/s',
        pathMatch: 'full'
      }, {
        path: '',
        redirectTo: 'Database',
        pathMatch: 'full'
      }]
    },
    // Fallback
    {
      path: '**',
      redirectTo: ''
    }];
    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: true,
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);

    /***/
  }),
  /***/"./src/app/app.component.css": (
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/
  /*! exports provided: default */
  /***/
  function _src_app_appComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = " \r\n\r\n/* Main Content Layout */\r\n#main-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100vh;\r\n  transition: var(--transition);\r\n}\r\n/* Split container styling */\r\n.split-example {\r\n  flex: 1;\r\n  margin: 10px;\r\n  display: flex;\r\n  border-radius: 14px;\r\n  overflow: hidden; \r\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);\r\n  transition: var(--transition);\r\n  position: relative;\r\n}\r\n/* Sidebar Panel */\r\n/* --- Make sidebar fill the split area and allow inner scrolling --- */\r\n.leftmenuExtendedProperties {\r\n  /* keep your existing rules */ \r\n  border-right: 1px solid rgba(255, 255, 255, 0.05); \r\n  padding: 0;                 /* move padding into child sections to avoid layout surprises */\r\n  -webkit-animation: slideIn 0.6s ease;\r\n          animation: slideIn 0.6s ease;\r\n  transition: var(--transition);\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  /* important additions */\r\n  height: 100%;               /* ensure flex container fills the area */\r\n  min-height: 0;              /* allow children to shrink and enable scrolling on them */\r\n  box-sizing: border-box;\r\n}\r\n/* database (fixed) + menu (scrollable) layout */\r\n.leftmenuExtendedProperties .database-section {\r\n  flex: 0 0 auto;\r\n  padding: 16px;\r\n  border-bottom: 1px solid rgba(255,255,255,0.06);\r\n  background: rgba(255,255,255,0.02);\r\n  box-shadow: 0 2px 6px rgba(0,180,216,0.08);\r\n}\r\n.leftmenuExtendedProperties .menu-section {\r\n  flex: 1 1 auto;\r\n  min-height: 0;              /* CRITICAL: lets this child actually scroll inside a flex column */\r\n  overflow-y: auto;\r\n  padding: 12px 16px;\r\n}\r\n/* scrollbar cosmetics */\r\n.leftmenuExtendedProperties .menu-section::-webkit-scrollbar { width: 8px; }\r\n.leftmenuExtendedProperties .menu-section::-webkit-scrollbar-thumb {\r\n  background: var(--accent); border-radius: 6px;\r\n}\r\n.leftmenuExtendedProperties:hover {\r\n    background: rgba(255, 255, 255, 0.08);\r\n    \r\n  }\r\n/* Sidebar Item Hover Animation */\r\n.leftmenuExtendedProperties button,\r\n  .leftmenuExtendedProperties a {\r\n    background: transparent;\r\n    color: var(--text);\r\n    border: none;\r\n    padding: 10px 15px;\r\n    text-align: left;\r\n    border-radius: 8px;\r\n    transition: var(--transition);\r\n    cursor: pointer;\r\n  }\r\n.leftmenuExtendedProperties button:hover {\r\n      background: var(--accent);\r\n      color: #000;\r\n      transform: scale(1.05);\r\n    }\r\n/* Main Area */\r\n#center { \r\n  transition: var(--transition);\r\n  position: relative;\r\n  overflow-y: auto;\r\n}\r\n/* Hover Glow Effect */\r\n#center:hover {\r\n    box-shadow: 0 0 50px rgba(0, 180, 216, 0.1) inset;\r\n  }\r\n/* Divider (Gutter) Styling */\r\n.as-split > .as-split-gutter {\r\n  background: linear-gradient(180deg, var(--accent), #0077b6);\r\n  cursor: col-resize;\r\n  transition: var(--transition);\r\n}\r\n.as-split > .as-split-gutter:hover {\r\n    -webkit-filter: brightness(1.2);\r\n            filter: brightness(1.2);\r\n    box-shadow: 0 0 12px var(--accent-hover);\r\n  }\r\n/* Sidebar Collapse Transition */\r\n.HideSplitBar {\r\n  transform: translateX(-100%);\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  transition: var(--transition);\r\n}\r\n.showSplitBar {\r\n  transform: translateX(0);\r\n  opacity: 1;\r\n  transition: var(--transition);\r\n}\r\n/* Subtle motion when expanding area */\r\n.ShowFullPageMode {\r\n  -webkit-animation: grow 0.6s ease forwards;\r\n          animation: grow 0.6s ease forwards;\r\n}\r\n/* ====== Scrollbar Magic ====== */\r\n::-webkit-scrollbar {\r\n  width: 8px;\r\n}\r\n::-webkit-scrollbar-thumb {\r\n  background: var(--accent);\r\n  border-radius: 4px;\r\n}\r\n::-webkit-scrollbar-thumb:hover {\r\n    background: var(--accent-hover);\r\n  }\r\n/* ====== Animations ====== */\r\n@-webkit-keyframes slideIn {\r\n  0% {\r\n    transform: translateX(-100%);\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes slideIn {\r\n  0% {\r\n    transform: translateX(-100%);\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@-webkit-keyframes grow {\r\n  0% {\r\n    transform: scale(0.98);\r\n    opacity: 0.8;\r\n  }\r\n\r\n  100% {\r\n    transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes grow {\r\n  0% {\r\n    transform: scale(0.98);\r\n    opacity: 0.8;\r\n  }\r\n\r\n  100% {\r\n    transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n}\r\n/* Inside Sidebar Layout */\r\n/*.leftmenuExtendedProperties {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;*/\r\n/* Make sure the sidebar fills the full panel height */\r\n/*overflow: hidden;*/\r\n/* Prevent sidebar from scrolling as a whole */\r\n/*}*/\r\n/* Fixed Section (Top: app-database-selector) */\r\n/*.database-section {\r\n  flex: 0 0 auto;*/\r\n/* No grow/shrink */\r\n/*padding-bottom: 10px;\r\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\r\n  background: rgba(255, 255, 255, 0.02);\r\n  z-index: 2;\r\n}*/\r\n/* Scrollable Section (Bottom: app-leftmenu) */\r\n/*.menu-section {\r\n  flex: 1 1 auto;*/\r\n/* Take remaining space */\r\n/*overflow-y: auto;\r\n  overflow-x: hidden;\r\n  padding-top: 10px;\r\n}*/\r\n/* Smooth Scrollbar for menu */\r\n/*.menu-section::-webkit-scrollbar {\r\n  width: 8px;\r\n}\r\n\r\n.menu-section::-webkit-scrollbar-thumb {\r\n  background: var(--accent);\r\n  border-radius: 6px;\r\n}\r\n\r\n.menu-section::-webkit-scrollbar-thumb:hover {\r\n  background: var(--accent-hover);\r\n}*/\r\n/* Optional: add a subtle shadow for depth between sections */\r\n/*.database-section {\r\n  box-shadow: 0 2px 6px rgba(0, 180, 216, 0.15);\r\n}*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRSxPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHlDQUF5QztFQUN6Qyw2QkFBNkI7RUFDN0Isa0JBQWtCO0FBQ3BCO0FBRUEsa0JBQWtCO0FBQ2xCLHVFQUF1RTtBQUN2RTtFQUNFLDZCQUE2QjtFQUM3QixpREFBaUQ7RUFDakQsVUFBVSxrQkFBa0IsK0RBQStEO0VBQzNGLG9DQUE0QjtVQUE1Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixzQkFBc0I7O0VBRXRCLHdCQUF3QjtFQUN4QixZQUFZLGdCQUFnQix5Q0FBeUM7RUFDckUsYUFBYSxlQUFlLDBEQUEwRDtFQUN0RixzQkFBc0I7QUFDeEI7QUFFQSxnREFBZ0Q7QUFDaEQ7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLCtDQUErQztFQUMvQyxrQ0FBa0M7RUFDbEMsMENBQTBDO0FBQzVDO0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYSxlQUFlLG1FQUFtRTtFQUMvRixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBRUEsd0JBQXdCO0FBQ3hCLCtEQUErRCxVQUFVLEVBQUU7QUFDM0U7RUFDRSx5QkFBeUIsRUFBRSxrQkFBa0I7QUFDL0M7QUFHRTtJQUNFLHFDQUFxQzs7RUFFdkM7QUFFQSxpQ0FBaUM7QUFDakM7O0lBRUUsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLGVBQWU7RUFDakI7QUFFRTtNQUNFLHlCQUF5QjtNQUN6QixXQUFXO01BQ1gsc0JBQXNCO0lBQ3hCO0FBRUosY0FBYztBQUNkO0VBQ0UsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFFRSxzQkFBc0I7QUFDdEI7SUFDRSxpREFBaUQ7RUFDbkQ7QUFFRiw2QkFBNkI7QUFDN0I7RUFDRSwyREFBMkQ7RUFDM0Qsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjtBQUVFO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix3Q0FBd0M7RUFDMUM7QUFFRixnQ0FBZ0M7QUFDaEM7RUFDRSw0QkFBNEI7RUFDNUIsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQiw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsNkJBQTZCO0FBQy9CO0FBRUEsc0NBQXNDO0FBQ3RDO0VBQ0UsMENBQWtDO1VBQWxDLGtDQUFrQztBQUNwQztBQUVBLGtDQUFrQztBQUNsQztFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjtBQUVFO0lBQ0UsK0JBQStCO0VBQ2pDO0FBRUYsNkJBQTZCO0FBQzdCO0VBQ0U7SUFDRSw0QkFBNEI7SUFDNUIsVUFBVTtFQUNaOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLFVBQVU7RUFDWjtBQUNGO0FBVkE7RUFDRTtJQUNFLDRCQUE0QjtJQUM1QixVQUFVO0VBQ1o7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsVUFBVTtFQUNaO0FBQ0Y7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7QUFDRjtBQVZBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFVBQVU7RUFDWjtBQUNGO0FBQ0EsMEJBQTBCO0FBQzFCOzs7Z0JBR2dCO0FBQUUsc0RBQXNEO0FBQ3RFLG9CQUFvQjtBQUFFLDhDQUE4QztBQUN0RSxJQUFJO0FBRUosK0NBQStDO0FBQy9DO2tCQUNrQjtBQUFFLG1CQUFtQjtBQUNyQzs7OztFQUlBO0FBRUYsOENBQThDO0FBQzlDO2tCQUNrQjtBQUFFLHlCQUF5QjtBQUMzQzs7O0VBR0E7QUFFRiw4QkFBOEI7QUFDOUI7Ozs7Ozs7Ozs7O0VBV0U7QUFFRiw2REFBNkQ7QUFDN0Q7O0VBRUUiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiBcclxuXHJcbi8qIE1haW4gQ29udGVudCBMYXlvdXQgKi9cclxuI21haW4tY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XHJcbn1cclxuXHJcbi8qIFNwbGl0IGNvbnRhaW5lciBzdHlsaW5nICovXHJcbi5zcGxpdC1leGFtcGxlIHtcclxuICBmbGV4OiAxO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgXHJcbiAgYm94LXNoYWRvdzogMCA4cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4vKiBTaWRlYmFyIFBhbmVsICovXHJcbi8qIC0tLSBNYWtlIHNpZGViYXIgZmlsbCB0aGUgc3BsaXQgYXJlYSBhbmQgYWxsb3cgaW5uZXIgc2Nyb2xsaW5nIC0tLSAqL1xyXG4ubGVmdG1lbnVFeHRlbmRlZFByb3BlcnRpZXMge1xyXG4gIC8qIGtlZXAgeW91ciBleGlzdGluZyBydWxlcyAqLyBcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpOyBcclxuICBwYWRkaW5nOiAwOyAgICAgICAgICAgICAgICAgLyogbW92ZSBwYWRkaW5nIGludG8gY2hpbGQgc2VjdGlvbnMgdG8gYXZvaWQgbGF5b3V0IHN1cnByaXNlcyAqL1xyXG4gIGFuaW1hdGlvbjogc2xpZGVJbiAwLjZzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAvKiBpbXBvcnRhbnQgYWRkaXRpb25zICovXHJcbiAgaGVpZ2h0OiAxMDAlOyAgICAgICAgICAgICAgIC8qIGVuc3VyZSBmbGV4IGNvbnRhaW5lciBmaWxscyB0aGUgYXJlYSAqL1xyXG4gIG1pbi1oZWlnaHQ6IDA7ICAgICAgICAgICAgICAvKiBhbGxvdyBjaGlsZHJlbiB0byBzaHJpbmsgYW5kIGVuYWJsZSBzY3JvbGxpbmcgb24gdGhlbSAqL1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qIGRhdGFiYXNlIChmaXhlZCkgKyBtZW51IChzY3JvbGxhYmxlKSBsYXlvdXQgKi9cclxuLmxlZnRtZW51RXh0ZW5kZWRQcm9wZXJ0aWVzIC5kYXRhYmFzZS1zZWN0aW9uIHtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDYpO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wMik7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwxODAsMjE2LDAuMDgpO1xyXG59XHJcblxyXG4ubGVmdG1lbnVFeHRlbmRlZFByb3BlcnRpZXMgLm1lbnUtc2VjdGlvbiB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgbWluLWhlaWdodDogMDsgICAgICAgICAgICAgIC8qIENSSVRJQ0FMOiBsZXRzIHRoaXMgY2hpbGQgYWN0dWFsbHkgc2Nyb2xsIGluc2lkZSBhIGZsZXggY29sdW1uICovXHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbn1cclxuXHJcbi8qIHNjcm9sbGJhciBjb3NtZXRpY3MgKi9cclxuLmxlZnRtZW51RXh0ZW5kZWRQcm9wZXJ0aWVzIC5tZW51LXNlY3Rpb246Oi13ZWJraXQtc2Nyb2xsYmFyIHsgd2lkdGg6IDhweDsgfVxyXG4ubGVmdG1lbnVFeHRlbmRlZFByb3BlcnRpZXMgLm1lbnUtc2VjdGlvbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCk7IGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuXHJcbiAgLmxlZnRtZW51RXh0ZW5kZWRQcm9wZXJ0aWVzOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC8qIFNpZGViYXIgSXRlbSBIb3ZlciBBbmltYXRpb24gKi9cclxuICAubGVmdG1lbnVFeHRlbmRlZFByb3BlcnRpZXMgYnV0dG9uLFxyXG4gIC5sZWZ0bWVudUV4dGVuZGVkUHJvcGVydGllcyBhIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgICAubGVmdG1lbnVFeHRlbmRlZFByb3BlcnRpZXMgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICB9XHJcblxyXG4vKiBNYWluIEFyZWEgKi9cclxuI2NlbnRlciB7IFxyXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4gIC8qIEhvdmVyIEdsb3cgRWZmZWN0ICovXHJcbiAgI2NlbnRlcjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNTBweCByZ2JhKDAsIDE4MCwgMjE2LCAwLjEpIGluc2V0O1xyXG4gIH1cclxuXHJcbi8qIERpdmlkZXIgKEd1dHRlcikgU3R5bGluZyAqL1xyXG4uYXMtc3BsaXQgPiAuYXMtc3BsaXQtZ3V0dGVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1hY2NlbnQpLCAjMDA3N2I2KTtcclxuICBjdXJzb3I6IGNvbC1yZXNpemU7XHJcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XHJcbn1cclxuXHJcbiAgLmFzLXNwbGl0ID4gLmFzLXNwbGl0LWd1dHRlcjpob3ZlciB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMnB4IHZhcigtLWFjY2VudC1ob3Zlcik7XHJcbiAgfVxyXG5cclxuLyogU2lkZWJhciBDb2xsYXBzZSBUcmFuc2l0aW9uICovXHJcbi5IaWRlU3BsaXRCYXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgb3BhY2l0eTogMDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcclxufVxyXG5cclxuLnNob3dTcGxpdEJhciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XHJcbn1cclxuXHJcbi8qIFN1YnRsZSBtb3Rpb24gd2hlbiBleHBhbmRpbmcgYXJlYSAqL1xyXG4uU2hvd0Z1bGxQYWdlTW9kZSB7XHJcbiAgYW5pbWF0aW9uOiBncm93IDAuNnMgZWFzZSBmb3J3YXJkcztcclxufVxyXG5cclxuLyogPT09PT09IFNjcm9sbGJhciBNYWdpYyA9PT09PT0gKi9cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDhweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtaG92ZXIpO1xyXG4gIH1cclxuXHJcbi8qID09PT09PSBBbmltYXRpb25zID09PT09PSAqL1xyXG5Aa2V5ZnJhbWVzIHNsaWRlSW4ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBncm93IHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuLyogSW5zaWRlIFNpZGViYXIgTGF5b3V0ICovXHJcbi8qLmxlZnRtZW51RXh0ZW5kZWRQcm9wZXJ0aWVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlOyovIC8qIE1ha2Ugc3VyZSB0aGUgc2lkZWJhciBmaWxscyB0aGUgZnVsbCBwYW5lbCBoZWlnaHQgKi9cclxuICAvKm92ZXJmbG93OiBoaWRkZW47Ki8gLyogUHJldmVudCBzaWRlYmFyIGZyb20gc2Nyb2xsaW5nIGFzIGEgd2hvbGUgKi9cclxuLyp9Ki9cclxuXHJcbi8qIEZpeGVkIFNlY3Rpb24gKFRvcDogYXBwLWRhdGFiYXNlLXNlbGVjdG9yKSAqL1xyXG4vKi5kYXRhYmFzZS1zZWN0aW9uIHtcclxuICBmbGV4OiAwIDAgYXV0bzsqLyAvKiBObyBncm93L3NocmluayAqL1xyXG4gIC8qcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDIpO1xyXG4gIHotaW5kZXg6IDI7XHJcbn0qL1xyXG5cclxuLyogU2Nyb2xsYWJsZSBTZWN0aW9uIChCb3R0b206IGFwcC1sZWZ0bWVudSkgKi9cclxuLyoubWVudS1zZWN0aW9uIHtcclxuICBmbGV4OiAxIDEgYXV0bzsqLyAvKiBUYWtlIHJlbWFpbmluZyBzcGFjZSAqL1xyXG4gIC8qb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn0qL1xyXG5cclxuLyogU21vb3RoIFNjcm9sbGJhciBmb3IgbWVudSAqL1xyXG4vKi5tZW51LXNlY3Rpb246Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogOHB4O1xyXG59XHJcblxyXG4ubWVudS1zZWN0aW9uOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuXHJcbi5tZW51LXNlY3Rpb246Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtaG92ZXIpO1xyXG59Ki9cclxuXHJcbi8qIE9wdGlvbmFsOiBhZGQgYSBzdWJ0bGUgc2hhZG93IGZvciBkZXB0aCBiZXR3ZWVuIHNlY3Rpb25zICovXHJcbi8qLmRhdGFiYXNlLXNlY3Rpb24ge1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsIDE4MCwgMjE2LCAwLjE1KTtcclxufSovXHJcbiJdfQ== */";

    /***/
  }),
  /***/"./src/app/app.component.ts": (
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/
  function _src_app_appComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);
    });
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */"./src/app/app.component.css"))["default"]]
    })], AppComponent);

    /***/
  }),
  /***/"./src/app/app.module.ts": (
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: AppModule */
  /***/
  function _src_app_appModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */"./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */
    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */"./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */
    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */"./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */
    var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-multiselect-dropdown */"./node_modules/angular2-multiselect-dropdown/fesm2015/angular2-multiselect-dropdown.js");
    /* harmony import */
    var angular_split__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-split */"./node_modules/angular-split/fesm2015/angular-split.js");
    /* harmony import */
    var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */"./node_modules/primeng/fesm2015/primeng-api.js");
    /* harmony import */
    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-ui-loader */"./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */"./src/app/app-routing.module.ts");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _ui_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ui/header/header.component */"./src/app/ui/header/header.component.ts");
    /* harmony import */
    var _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ui/footer/footer.component */"./src/app/ui/footer/footer.component.ts");
    /* harmony import */
    var _ui_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ui/main-page/main-page.component */"./src/app/ui/main-page/main-page.component.ts");
    /* harmony import */
    var _left_menu_components_left_menu_leftmenu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./left-menu/components/left-menu/leftmenu.component */"./src/app/left-menu/components/left-menu/leftmenu.component.ts");
    /* harmony import */
    var _database_components_database_selector_database_selector_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./database/components/database-selector/database-selector.component */"./src/app/database/components/database-selector/database-selector.component.ts");
    /* harmony import */
    var _auth_auth_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth/auth.module */"./src/app/auth/auth.module.ts");
    /* harmony import */
    var _auth_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth/interceptors/auth.interceptor */"./src/app/auth/interceptors/auth.interceptor.ts");
    /* harmony import */
    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/shared.module */"./src/app/shared/shared.module.ts");

    // Third-party UI Libraries

    // PrimeNG Modules (only those needed in app.module components)

    // NGX-UI-Loader

    // Routing

    // Application Components

    // Auth Module (keep for login component and guards)

    // NGX-UI-Loader Configuration
    var ngxUiLoaderConfig = {
      bgsColor: '#1c749a',
      bgsOpacity: 0.7,
      bgsPosition: 'center-center',
      bgsSize: 80,
      bgsType: 'ball-spin-clockwise',
      blur: 5,
      delay: 0,
      fgsColor: '#1c749a',
      fgsPosition: 'center-center',
      fgsSize: 60,
      fgsType: 'ball-spin-clockwise',
      gap: 10,
      logoPosition: 'center-center',
      logoSize: 120,
      logoUrl: '',
      masterLoaderId: 'master',
      overlayBorderRadius: '0',
      overlayColor: 'rgba(40, 40, 40, 0.8)',
      pbColor: 'red',
      pbDirection: 'ltr',
      pbThickness: 1,
      hasProgressBar: true,
      text: 'Loading',
      textColor: '#FFFFFF',
      textPosition: 'center-center',
      maxTime: -1,
      minTime: 300
    };
    // Routes are now defined in app-routing.module.ts
    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"], _ui_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"], _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"], _ui_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_17__["MainPageComponent"], _left_menu_components_left_menu_leftmenu_component__WEBPACK_IMPORTED_MODULE_18__["LeftmenuComponent"], _database_components_database_selector_database_selector_component__WEBPACK_IMPORTED_MODULE_19__["DatabaseSelectorComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"].withServerTransition({
        appId: 'ng-cli-universal'
      }), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
      // Third-Party UI Libraries
      _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(), angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["AngularMultiSelectModule"], angular_split__WEBPACK_IMPORTED_MODULE_10__["AngularSplitModule"].forRoot(),
      // NGX-UI-Loader
      ngx_ui_loader__WEBPACK_IMPORTED_MODULE_12__["NgxUiLoaderModule"].forRoot(ngxUiLoaderConfig), ngx_ui_loader__WEBPACK_IMPORTED_MODULE_12__["NgxUiLoaderHttpModule"],
      // Shared Module
      _shared_shared_module__WEBPACK_IMPORTED_MODULE_22__["SharedModule"],
      // Auth Module (for login component and guards)
      _auth_auth_module__WEBPACK_IMPORTED_MODULE_20__["AuthModule"],
      // App Routing Module - MUST BE LAST (feature modules now lazy loaded)
      _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"]],
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["HashLocationStrategy"]
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
        useClass: _auth_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_21__["AuthInterceptor"],
        multi: true
      }, primeng_api__WEBPACK_IMPORTED_MODULE_11__["TreeDragDropService"], primeng_api__WEBPACK_IMPORTED_MODULE_11__["MessageService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
    })], AppModule);

    /***/
  }),
  /***/"./src/app/auth/auth.module.ts": (
  /*!*************************************!*\
    !*** ./src/app/auth/auth.module.ts ***!
    \*************************************/
  /*! exports provided: AuthModule */
  /***/
  function _src_app_auth_authModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */"./src/app/auth/components/login/login.component.ts");
    /* harmony import */
    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth.service */"./src/app/auth/services/auth.service.ts");
    /* harmony import */
    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/auth.guard */"./src/app/auth/guards/auth.guard.ts");
    /* harmony import */
    var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interceptors/auth.interceptor */"./src/app/auth/interceptors/auth.interceptor.ts");

    // Components

    // Services

    // Guards

    // Interceptors

    var AuthModule = /*#__PURE__*/_createClass(function AuthModule() {
      _classCallCheck(this, AuthModule);
    });
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptor"],
        multi: true
      }],
      exports: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]]
    })], AuthModule);

    /***/
  }),
  /***/"./src/app/auth/components/login/login.component.css": (
  /*!***********************************************************!*\
    !*** ./src/app/auth/components/login/login.component.css ***!
    \***********************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_auth_components_login_loginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".login-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  min-height: 100vh;\r\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n  padding: 20px;\r\n}\r\n#asSplitArea1 {\r\n  display: none;\r\n}\r\n.login-card {\r\n  background: white;\r\n  border-radius: 10px;\r\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\r\n  padding: 40px;\r\n  width: 100%;\r\n  max-width: 420px;\r\n  -webkit-animation: fadeInUp 0.5s ease-in-out;\r\n          animation: fadeInUp 0.5s ease-in-out;\r\n}\r\n@-webkit-keyframes fadeInUp {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(30px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n@keyframes fadeInUp {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(30px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n.login-header {\r\n  text-align: center;\r\n  margin-bottom: 30px;\r\n}\r\n.login-header h2 {\r\n  color: #333;\r\n  font-weight: 700;\r\n  margin-bottom: 10px;\r\n  font-size: 28px;\r\n}\r\n.login-header p {\r\n  color: #666;\r\n  font-size: 14px;\r\n  margin: 0;\r\n}\r\n.form-group {\r\n  margin-bottom: 20px;\r\n}\r\n.form-group label {\r\n  font-weight: 600;\r\n  color: #444;\r\n  margin-bottom: 8px;\r\n  font-size: 14px;\r\n}\r\n.input-group-text {\r\n  background-color: #f8f9fa;\r\n  border-right: none;\r\n  color: #667eea;\r\n}\r\n.form-control {\r\n  border-left: none;\r\n  padding: 12px 15px;\r\n  font-size: 14px;\r\n}\r\n.form-control:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);\r\n  border-color: #667eea;\r\n}\r\n.input-group-prepend + .form-control {\r\n  border-left: 1px solid #ced4da;\r\n}\r\n.input-group:focus-within .input-group-text {\r\n  border-color: #667eea;\r\n}\r\n.input-group:focus-within .form-control {\r\n  border-color: #667eea;\r\n}\r\n.form-check {\r\n  margin-bottom: 20px;\r\n}\r\n.form-check-label {\r\n  font-size: 14px;\r\n  color: #666;\r\n  cursor: pointer;\r\n}\r\n.btn-primary {\r\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n  border: none;\r\n  padding: 12px;\r\n  font-weight: 600;\r\n  font-size: 16px;\r\n  transition: transform 0.2s, box-shadow 0.2s;\r\n}\r\n.btn-primary:hover:not(:disabled) {\r\n  transform: translateY(-2px);\r\n  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);\r\n  background: linear-gradient(135deg, #5568d3 0%, #6a3f8f 100%);\r\n}\r\n.btn-primary:active:not(:disabled) {\r\n  transform: translateY(0);\r\n}\r\n.btn-primary:disabled {\r\n  opacity: 0.7;\r\n  cursor: not-allowed;\r\n}\r\n.alert {\r\n  font-size: 14px;\r\n  border-radius: 6px;\r\n  margin-bottom: 20px;\r\n}\r\n.alert i {\r\n  margin-right: 5px;\r\n}\r\n.login-footer {\r\n  text-align: center;\r\n  margin-top: 30px;\r\n  padding-top: 20px;\r\n  border-top: 1px solid #e9ecef;\r\n}\r\n.login-footer p {\r\n  margin: 0;\r\n}\r\n.spinner-border-sm {\r\n  width: 1rem;\r\n  height: 1rem;\r\n  border-width: 0.2em;\r\n}\r\n.invalid-feedback {\r\n  font-size: 13px;\r\n  margin-top: 5px;\r\n}\r\n/* Responsive adjustments */\r\n@media (max-width: 576px) {\r\n  .login-card {\r\n    padding: 30px 25px;\r\n  }\r\n\r\n  .login-header h2 {\r\n    font-size: 24px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsNkRBQTZEO0VBQzdELGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLDBDQUEwQztFQUMxQyxhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQiw0Q0FBb0M7VUFBcEMsb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDViwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLFVBQVU7SUFDVix3QkFBd0I7RUFDMUI7QUFDRjtBQVRBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxVQUFVO0lBQ1Ysd0JBQXdCO0VBQzFCO0FBQ0Y7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsU0FBUztBQUNYO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxrREFBa0Q7RUFDbEQscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsNkRBQTZEO0VBQzdELFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiwyQ0FBMkM7QUFDN0M7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiwrQ0FBK0M7RUFDL0MsNkRBQTZEO0FBQy9EO0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsU0FBUztBQUNYO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG4jYXNTcGxpdEFyZWExIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5sb2dpbi1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNDIwcHg7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW5VcCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9naW4taGVhZGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmxvZ2luLWhlYWRlciBoMiB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG5cclxuLmxvZ2luLWhlYWRlciBwIHtcclxuICBjb2xvcjogIzY2NjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM0NDQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwLXRleHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIGNvbG9yOiAjNjY3ZWVhO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICBib3JkZXItbGVmdDogbm9uZTtcclxuICBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjI1KTtcclxuICBib3JkZXItY29sb3I6ICM2NjdlZWE7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC1wcmVwZW5kICsgLmZvcm0tY29udHJvbCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXA6Zm9jdXMtd2l0aGluIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICBib3JkZXItY29sb3I6ICM2NjdlZWE7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cDpmb2N1cy13aXRoaW4gLmZvcm0tY29udHJvbCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNjY3ZWVhO1xyXG59XHJcblxyXG4uZm9ybS1jaGVjayB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmZvcm0tY2hlY2stbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzY2NjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycywgYm94LXNoYWRvdyAwLjJzO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICBib3gtc2hhZG93OiAwIDVweCAyMHB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC40KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNTU2OGQzIDAlLCAjNmEzZjhmIDEwMCUpO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6YWN0aXZlOm5vdCg6ZGlzYWJsZWQpIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTpkaXNhYmxlZCB7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi5hbGVydCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uYWxlcnQgaSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5sb2dpbi1mb290ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTllY2VmO1xyXG59XHJcblxyXG4ubG9naW4tZm9vdGVyIHAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNwaW5uZXItYm9yZGVyLXNtIHtcclxuICB3aWR0aDogMXJlbTtcclxuICBoZWlnaHQ6IDFyZW07XHJcbiAgYm9yZGVyLXdpZHRoOiAwLjJlbTtcclxufVxyXG5cclxuLmludmFsaWQtZmVlZGJhY2sge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgYWRqdXN0bWVudHMgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLmxvZ2luLWNhcmQge1xyXG4gICAgcGFkZGluZzogMzBweCAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLWhlYWRlciBoMiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";

    /***/
  }),
  /***/"./src/app/auth/components/login/login.component.ts": (
  /*!**********************************************************!*\
    !*** ./src/app/auth/components/login/login.component.ts ***!
    \**********************************************************/
  /*! exports provided: LoginComponent */
  /***/
  function _src_app_auth_components_login_loginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */"./src/app/auth/services/auth.service.ts");
    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(formBuilder, route, router, authService) {
        _classCallCheck(this, LoginComponent);
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.loading = false;
        this.submitted = false;
        this.errorMessage = '';
        this.originalStyles = new Map();
        this.loginAttempts = 0;
        this.lastAttemptTime = 0;
        this.MAX_ATTEMPTS = 5;
        this.LOCKOUT_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds
        // Redirect to home if already logged in
        if (this.authService.isAuthenticatedValue) {
          this.router.navigate(['/']);
        }
        this.loginForm = this.formBuilder.group({
          username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          rememberMe: [false]
        });
        this.returnUrl = '/';
      }
      return _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Get return url from route parameters or default to '/'
          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          // Hide elements when login page loads
          this.hideElements();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // Show elements back when leaving login page
          this.showElements();
        }
      }, {
        key: "hideElements",
        value: function hideElements() {
          // Hide by ID
          var area1 = document.getElementById('asSplitArea1');
          if (area1) {
            this.originalStyles.set('asSplitArea1-display', area1.style.display);
            area1.style.display = 'none';
            area1.style.order = '2';
            area1.style.flex = '0 0 0%';
          }
          var area2 = document.getElementById('asSplitArea2');
          if (area2) {
            this.originalStyles.set('asSplitArea2-flex', area2.style.flex);
            this.originalStyles.set('asSplitArea2-order', area2.style.order);
            area2.style.order = '2';
            area2.style.flex = '0 0 100%';
          }
          // Hide header
          var header = document.querySelector('header');
          if (header) {
            header.style.display = 'none';
          }
          // Hide by class names
          var classesToHide = ['as-split-gutter-icon', 'as-split-gutter', 'menu-toggle'];
          classesToHide.forEach(function (className) {
            var elements = document.querySelectorAll(".".concat(className));
            elements.forEach(function (element) {
              element.style.display = 'none';
            });
          });
        }
      }, {
        key: "showElements",
        value: function showElements() {
          // Show by ID
          var area1 = document.getElementById('asSplitArea1');
          if (area1) {
            area1.style.display = this.originalStyles.get('asSplitArea1-display') || '';
            area1.style.flex = this.originalStyles.get('asSplitArea1-flex') || '0 0 calc(25% - 2.5px)';
            area1.style.order = this.originalStyles.get('asSplitArea1-order') || '0';
          }
          // Restore asSplitArea2
          var area2 = document.getElementById('asSplitArea2');
          if (area2) {
            area2.style.flex = this.originalStyles.get('asSplitArea2-flex') || '0 0 calc(75% - 7.5px)';
            area2.style.order = this.originalStyles.get('asSplitArea2-order') || '2';
          }
          // Show header
          var header = document.querySelector('header');
          if (header) {
            header.style.display = '';
          }
          // Show by class names
          var classesToShow = ['as-split-gutter-icon', 'as-split-gutter', 'menu-toggle'];
          classesToShow.forEach(function (className) {
            var elements = document.querySelectorAll(".".concat(className));
            elements.forEach(function (element) {
              element.style.display = '';
            });
          });
        }
        // Convenience getter for easy access to form fields
      }, {
        key: "f",
        get: function get() {
          return this.loginForm.controls;
        }
        /**
         * Sanitize input to prevent XSS attacks
         */
      }, {
        key: "sanitizeInput",
        value: function sanitizeInput(input) {
          if (!input) return '';
          // Remove any HTML tags and dangerous characters
          return input.trim().replace(/[<>\"'\/]/g, '').replace(/javascript:/gi, '').replace(/on\w+=/gi, '');
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;
          this.submitted = true;
          this.errorMessage = '';
          // Stop if form is invalid
          if (this.loginForm.invalid) {
            return;
          }
          // Check for rate limiting
          var currentTime = Date.now();
          if (this.loginAttempts >= this.MAX_ATTEMPTS) {
            var timeSinceLastAttempt = currentTime - this.lastAttemptTime;
            if (timeSinceLastAttempt < this.LOCKOUT_DURATION) {
              var remainingMinutes = Math.ceil((this.LOCKOUT_DURATION - timeSinceLastAttempt) / 60000);
              this.errorMessage = "Too many failed login attempts. Please try again in ".concat(remainingMinutes, " minute(s).");
              return;
            } else {
              // Reset after lockout duration
              this.loginAttempts = 0;
            }
          }
          // Sanitize inputs to prevent XSS attacks
          var username = this.sanitizeInput(this.f.username.value);
          var password = this.f.password.value; // Don't log or sanitize password, but validate length
          // Additional validation
          if (username.length > 100 || password.length > 100) {
            this.errorMessage = 'Username or password is too long.';
            return;
          }
          this.loading = true;
          this.authService.login(username, password).subscribe(function (response) {
            _this.loading = false;
            console.log('Login successful:', response);
            // Reset login attempts on success
            _this.loginAttempts = 0;
            _this.lastAttemptTime = 0;
            // Show elements back before navigating
            _this.showElements();
            // Navigate to the return URL or default to Database
            _this.router.navigate([_this.returnUrl]);
          }, function (error) {
            _this.loading = false;
            console.error('Login error:', error);
            // Increment failed login attempts
            _this.loginAttempts++;
            _this.lastAttemptTime = Date.now();
            // Handle different error scenarios
            if (error.error && error.error.error_description) {
              _this.errorMessage = error.error.error_description;
            } else if (error.status === 0) {
              _this.errorMessage = 'Unable to connect to the server. Please check your connection.';
            } else if (error.status === 400) {
              var remainingAttempts = _this.MAX_ATTEMPTS - _this.loginAttempts;
              if (remainingAttempts > 0) {
                _this.errorMessage = "Invalid username or password. ".concat(remainingAttempts, " attempt(s) remaining.");
              } else {
                _this.errorMessage = 'Invalid username or password. Account temporarily locked.';
              }
            } else {
              _this.errorMessage = 'An error occurred during login. Please try again.';
            }
          });
        }
      }, {
        key: "clearError",
        value: function clearError() {
          this.errorMessage = '';
        }
      }]);
    }();
    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */"./src/app/auth/components/login/login.component.css"))["default"]]
    })], LoginComponent);

    /***/
  }),
  /***/"./src/app/auth/guards/auth.guard.ts": (
  /*!*******************************************!*\
    !*** ./src/app/auth/guards/auth.guard.ts ***!
    \*******************************************/
  /*! exports provided: AuthGuard */
  /***/
  function _src_app_auth_guards_authGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */"./src/app/auth/services/auth.service.ts");
    //import { Injectable } from '@angular/core';
    //import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
    //import { Observable } from 'rxjs';
    //import { AuthService } from '../services/auth.service';

    //@Injectable({
    //  providedIn: 'root'
    //})
    //export class AuthGuard implements CanActivate {
    //  constructor(
    //    private authService: AuthService,
    //    private router: Router
    //  ) {}
    //  canActivate(
    //    route: ActivatedRouteSnapshot,
    //    state: RouterStateSnapshot
    //  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //    if (this.authService.isAuthenticatedValue && !this.authService.isTokenExpired()) {
    //      return true;
    //    }
    //    // Not logged in or token expired, redirect to login page
    //    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    //    return false;
    //  }
    //}

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router, authService) {
        _classCallCheck(this, AuthGuard);
        this.router = router;
        this.authService = authService;
      }
      return _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var isAuthenticated = this.authService.isAuthenticatedValue;
          if (isAuthenticated) {
            // User is logged in, allow access
            return true;
          }
          // User is not logged in, redirect to login page with return url
          this.router.navigate(['/login'], {
            queryParams: {
              returnUrl: state.url
            }
          });
          return false;
        }
      }]);
    }();
    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);

    /***/
  }),
  /***/"./src/app/auth/interceptors/auth.interceptor.ts": (
  /*!*******************************************************!*\
    !*** ./src/app/auth/interceptors/auth.interceptor.ts ***!
    \*******************************************************/
  /*! exports provided: AuthInterceptor */
  /***/
  function _src_app_auth_interceptors_authInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */"./src/app/auth/services/auth.service.ts");
    var AuthInterceptor = /*#__PURE__*/function () {
      function AuthInterceptor(authService) {
        _classCallCheck(this, AuthInterceptor);
        this.authService = authService;
        this.isRefreshing = false;
        this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
      }
      return _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this2 = this;
          // Don't add token to token endpoint
          if (request.url.includes('/connect/token')) {
            console.log('🔓 Skipping token for /connect/token endpoint');
            return next.handle(request);
          }
          // Add authorization header with token
          var token = this.authService.getToken();
          var isExpired = this.authService.isTokenExpired();
          if (token && !isExpired) {
            request = this.addTokenAndSecurityHeaders(request, token);
          } else {
            // Add security headers even without token
            request = this.addSecurityHeaders(request);
            console.warn('⚠️ Request without token:', request.url, 'Reason:', !token ? 'No token found' : 'Token expired');
          }
          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"] && error.status === 401) {
              console.log('🔒 401 Unauthorized error detected for:', request.url);
              return _this2.handle401Error(request, next);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
          }));
        }
      }, {
        key: "addToken",
        value: function addToken(request, token) {
          return request.clone({
            setHeaders: {
              Authorization: "Bearer ".concat(token)
            }
          });
        }
      }, {
        key: "addTokenAndSecurityHeaders",
        value: function addTokenAndSecurityHeaders(request, token) {
          return request.clone({
            setHeaders: {
              Authorization: "Bearer ".concat(token),
              'X-Requested-With': 'XMLHttpRequest',
              'X-Content-Type-Options': 'nosniff'
            }
          });
        }
      }, {
        key: "addSecurityHeaders",
        value: function addSecurityHeaders(request) {
          return request.clone({
            setHeaders: {
              'X-Requested-With': 'XMLHttpRequest',
              'X-Content-Type-Options': 'nosniff'
            }
          });
        }
      }, {
        key: "handle401Error",
        value: function handle401Error(request, next) {
          var _this3 = this;
          if (!this.isRefreshing) {
            console.log('🔄 Starting token refresh process...');
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);
            return this.authService.refreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (response) {
              console.log('✅ Token refreshed, retrying original request');
              _this3.isRefreshing = false;
              _this3.refreshTokenSubject.next(response.access_token);
              return next.handle(_this3.addToken(request, response.access_token));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
              console.error('❌ Token refresh failed in interceptor, logging out');
              _this3.isRefreshing = false;
              _this3.authService.logout();
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
            }));
          } else {
            console.log('⏳ Token refresh already in progress, waiting...');
            return this.refreshTokenSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (token) {
              return token != null;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (token) {
              console.log('✅ Using refreshed token for queued request');
              return next.handle(_this3.addToken(request, token));
            }));
          }
        }
      }]);
    }();
    AuthInterceptor.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthInterceptor);

    /***/
  }),
  /***/"./src/app/auth/services/auth.service.ts": (
  /*!***********************************************!*\
    !*** ./src/app/auth/services/auth.service.ts ***!
    \***********************************************/
  /*! exports provided: AuthService */
  /***/
  function _src_app_auth_services_authServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var AuthService = /*#__PURE__*/function () {
      function AuthService(http, router, apiUrl) {
        _classCallCheck(this, AuthService);
        this.http = http;
        this.router = router;
        this.apiUrl = apiUrl;
        this.TOKEN_KEY = 'access_token';
        this.REFRESH_TOKEN_KEY = 'refresh_token';
        this.USER_KEY = 'current_user';
        var storedUser = this.getUserFromStorage();
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](storedUser);
        this.currentUser = this.currentUserSubject.asObservable();
        this.isAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](!!storedUser && !!this.getToken());
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
      }
      return _createClass(AuthService, [{
        key: "currentUserValue",
        get: function get() {
          return this.currentUserSubject.value;
        }
      }, {
        key: "isAuthenticatedValue",
        get: function get() {
          return this.isAuthenticatedSubject.value;
        }
        /**
         * Login user with username and password
         */
      }, {
        key: "login",
        value: function login(username, password) {
          var _this4 = this;
          var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('username', username).set('password', password).set('client_id', 'swagger_ui').set('grant_type', 'password');
          // Note: No scope parameter - swagger_ui client doesn't allow scopes
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded'
          });
          return this.http.post("".concat(this.apiUrl, "/connect/token"), body.toString(), {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
            console.log('✅ Login successful, storing tokens');
            _this4.storeTokens(response);
            _this4.isAuthenticatedSubject.next(true);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (response) {
            console.log('📥 Loading current user before completing login...');
            // Load current user before completing login
            // If it fails, still allow login to succeed
            return _this4.loadCurrentUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
              console.log('✅ User loaded successfully:', user);
              return response; // Return original login response
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
              console.warn('⚠️ Failed to load user after login (non-fatal):', error);
              // Still return the login response to allow navigation
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(response);
            }));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            console.error('Login failed:', error);
            console.error('Error details:', {
              status: error.status,
              statusText: error.statusText,
              url: error.url,
              errorBody: error.error
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
          }));
        }
        /**
         * Refresh the access token using refresh token
         */
      }, {
        key: "refreshToken",
        value: function refreshToken() {
          var _this5 = this;
          var refreshToken = this.getRefreshToken();
          console.log('🔄 Attempting to refresh token...');
          if (!refreshToken) {
            console.warn('⚠️ No refresh token available - redirecting to login');
            this.logout();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('No refresh token available');
          }
          console.log('✅ Refresh token found, sending refresh request to server');
          var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('grant_type', 'refresh_token').set('refresh_token', refreshToken).set('client_id', 'swagger_ui');
          // Note: No scope parameter - swagger_ui client doesn't allow scopes
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded'
          });
          return this.http.post("".concat(this.apiUrl, "/connect/token"), body.toString(), {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
            console.log('✅ Token refresh successful');
            _this5.storeTokens(response);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            console.error('❌ Token refresh failed:', error);
            _this5.logout();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
          }));
        }
        /**
         * Load current user details from API
         */
      }, {
        key: "loadCurrentUser",
        value: function loadCurrentUser() {
          var _this6 = this;
          return this.http.get("".concat(this.apiUrl, "/api/account/users/me")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (user) {
            _this6.storeUser(user);
            _this6.currentUserSubject.next(user);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            console.error('Failed to load current user:', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
          }));
        }
        /**
         * Logout user and clear all stored data
         */
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem(this.TOKEN_KEY);
          localStorage.removeItem(this.REFRESH_TOKEN_KEY);
          localStorage.removeItem(this.USER_KEY);
          this.currentUserSubject.next(null);
          this.isAuthenticatedSubject.next(false);
          this.router.navigate(['/login']);
        }
        /**
         * Get stored access token
         */
      }, {
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem(this.TOKEN_KEY);
        }
        /**
         * Get stored refresh token
         */
      }, {
        key: "getRefreshToken",
        value: function getRefreshToken() {
          return localStorage.getItem(this.REFRESH_TOKEN_KEY);
        }
        /**
         * Check if access token is expired
         * Note: Encrypted tokens (JWE) cannot be decoded client-side, so we assume they're valid
         * and let the server handle expiry validation
         */
      }, {
        key: "isTokenExpired",
        value: function isTokenExpired() {
          var token = this.getToken();
          if (!token) {
            return true;
          }
          try {
            // Check token structure
            var parts = token.split('.');
            // JWE (encrypted) tokens have 5 parts - we can't decode these client-side
            // So we assume they're valid and let the server validate expiry
            if (parts.length === 5) {
              // Only log once to reduce noise
              if (!sessionStorage.getItem('jwe_logged')) {
                console.log('📝 Token is encrypted (JWE) - server will validate expiry');
                sessionStorage.setItem('jwe_logged', 'true');
              }
              return false; // Assume valid, let server decide
            }
            // Standard JWT should have 3 parts
            if (parts.length !== 3) {
              console.warn('⚠️ Invalid token structure');
              return true;
            }
            // Decode and parse the payload for standard JWT
            var payload = JSON.parse(atob(parts[1]));
            // Validate expiry claim exists
            if (!payload.exp) {
              console.warn('⚠️ JWT token missing expiry claim');
              return true;
            }
            // Check if token is expired (with 60 second buffer for clock skew)
            var expiry = payload.exp;
            var currentTime = Math.floor(new Date().getTime() / 1000);
            var isExpired = currentTime >= expiry - 60;
            if (isExpired) {
              console.log('⏰ Token expired');
            }
            return isExpired;
          } catch (e) {
            console.error('❌ Error parsing token:', e);
            return true;
          }
        }
        /**
         * Store tokens in localStorage
         */
      }, {
        key: "storeTokens",
        value: function storeTokens(response) {
          console.log('📦 Storing tokens:', {
            access_token: response.access_token ? '✅ Present' : '❌ Missing',
            refresh_token: response.refresh_token ? '✅ Present' : '❌ Missing',
            expires_in: response.expires_in
          });
          localStorage.setItem(this.TOKEN_KEY, response.access_token);
          if (response.refresh_token) {
            localStorage.setItem(this.REFRESH_TOKEN_KEY, response.refresh_token);
            console.log('✅ Refresh token stored successfully');
          } else {
            console.warn('⚠️ No refresh token received from server - user will need to re-login when token expires');
          }
        }
        /**
         * Store user in localStorage
         */
      }, {
        key: "storeUser",
        value: function storeUser(user) {
          localStorage.setItem(this.USER_KEY, JSON.stringify(user));
        }
        /**
         * Get user from localStorage
         */
      }, {
        key: "getUserFromStorage",
        value: function getUserFromStorage() {
          var userJson = localStorage.getItem(this.USER_KEY);
          if (userJson) {
            try {
              return JSON.parse(userJson);
            } catch (e) {
              return null;
            }
          }
          return null;
        }
      }, {
        key: "isLoggedIn",
        get: function get() {
          return !!localStorage.getItem(this.TOKEN_KEY) && !this.isTokenExpired();
        }
      }]);
    }();
    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: ['API_URL']
        }]
      }];
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('API_URL'))], AuthService);

    /***/
  }),
  /***/"./src/app/database/components/database-selector/database-selector.component.css": (
  /*!***************************************************************************************!*\
    !*** ./src/app/database/components/database-selector/database-selector.component.css ***!
    \***************************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_database_components_databaseSelector_databaseSelectorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "/* Container for database selection */\r\n.database-selector-container {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  background-color: #1b3a57;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  margin-bottom: 10px;\r\n}\r\nlabel {\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n.database-dropdown {\r\n  padding: 5px;\r\n  border-radius: 4px;\r\n  border: 1px solid #ccc;\r\n  background-color: white;\r\n  color: black;\r\n  font-size: 14px;\r\n  min-width: 220px; /* Wider for better readability */\r\n}\r\n.change-db-button {\r\n  background-color: #007bff;\r\n  color: white;\r\n  border: none;\r\n  padding: 8px 12px;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n}\r\n.change-db-button:hover {\r\n    background-color: #0056b3;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YWJhc2UvY29tcG9uZW50cy9kYXRhYmFzZS1zZWxlY3Rvci9kYXRhYmFzZS1zZWxlY3Rvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFxQztBQUNyQztFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUUsaUNBQWlDO0FBQ3JEO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFRTtJQUNFLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJzcmMvYXBwL2RhdGFiYXNlL2NvbXBvbmVudHMvZGF0YWJhc2Utc2VsZWN0b3IvZGF0YWJhc2Utc2VsZWN0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvbnRhaW5lciBmb3IgZGF0YWJhc2Ugc2VsZWN0aW9uICovXHJcbi5kYXRhYmFzZS1zZWxlY3Rvci1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiM2E1NztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZGF0YWJhc2UtZHJvcGRvd24ge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1pbi13aWR0aDogMjIwcHg7IC8qIFdpZGVyIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHkgKi9cclxufVxyXG5cclxuLmNoYW5nZS1kYi1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiA4cHggMTJweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuICAuY2hhbmdlLWRiLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xyXG4gIH1cclxuIl19 */";

    /***/
  }),
  /***/"./src/app/database/components/database-selector/database-selector.component.ts": (
  /*!**************************************************************************************!*\
    !*** ./src/app/database/components/database-selector/database-selector.component.ts ***!
    \**************************************************************************************/
  /*! exports provided: DatabaseSelectorComponent */
  /***/
  function _src_app_database_components_databaseSelector_databaseSelectorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DatabaseSelectorComponent", function () {
      return DatabaseSelectorComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_database_metadata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/database-metadata.service */"./src/app/database/services/database-metadata.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/services/auth.service */"./src/app/auth/services/auth.service.ts");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    var DatabaseSelectorComponent = /*#__PURE__*/function () {
      function DatabaseSelectorComponent(databaseService, router, authService) {
        _classCallCheck(this, DatabaseSelectorComponent);
        this.databaseService = databaseService;
        this.router = router;
        this.authService = authService;
        this.selectedDatabase = '';
        this.databases = []; // List of available databases
      }
      return _createClass(DatabaseSelectorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;
          // Wait for authentication to be fully ready before loading data
          this.authService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (isAuth) {
            return isAuth === true;
          }),
          // Only proceed when authenticated
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1) // Take only the first emission, then unsubscribe
          ).subscribe(function () {
            console.log('🔑 Auth ready, loading databases');
            _this7.loadDatabases();
          });
        }
        // Load available databases from backend
      }, {
        key: "loadDatabases",
        value: function loadDatabases() {
          var _this8 = this;
          this.databaseService.getDatabases().subscribe(function (response) {
            _this8.databases = response;
            // Set default to the currently active database
            _this8.getCurrentDatabase();
          }, function (error) {
            return console.error('❌ Error fetching databases:', error);
          });
        }
        // Get the currently active database
      }, {
        key: "getCurrentDatabase",
        value: function getCurrentDatabase() {
          var _this9 = this;
          this.databaseService.getCurrentDatabase().subscribe(function (response) {
            _this9.selectedDatabase = response.database;
          }, function (error) {
            return console.error('❌ Error fetching current database:', error);
          });
        }
        // Change the database
      }, {
        key: "onChangeDatabase",
        value: function onChangeDatabase() {
          var _this0 = this;
          this.databaseService.changeDatabase(this.selectedDatabase).subscribe(function (response) {
            console.log(response);
            _this0.router.navigate(['/Database']).then(function () {
              window.location.reload();
            });
          }, function (error) {
            console.error('❌ Error changing database:', error);
            alert('Failed to change database. Please try again.');
          });
        }
      }]);
    }();
    DatabaseSelectorComponent.ctorParameters = function () {
      return [{
        type: _services_database_metadata_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseMetadataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };
    DatabaseSelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-database-selector',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./database-selector.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/database/components/database-selector/database-selector.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./database-selector.component.css */"./src/app/database/components/database-selector/database-selector.component.css"))["default"]]
    })], DatabaseSelectorComponent);

    /***/
  }),
  /***/"./src/app/database/services/database-metadata.service.ts": (
  /*!****************************************************************!*\
    !*** ./src/app/database/services/database-metadata.service.ts ***!
    \****************************************************************/
  /*! exports provided: DatabaseMetadataService */
  /***/
  function _src_app_database_services_databaseMetadataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DatabaseMetadataService", function () {
      return DatabaseMetadataService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    var DatabaseMetadataService = /*#__PURE__*/function () {
      function DatabaseMetadataService(http, primaryUrl, secondaryUrl) {
        _classCallCheck(this, DatabaseMetadataService);
        this.http = http;
        this.primaryUrl = primaryUrl;
        this.secondaryUrl = secondaryUrl;
      }
      return _createClass(DatabaseMetadataService, [{
        key: "getDatabaseMetaData",
        value: function getDatabaseMetaData() {
          var _this1 = this;
          var primaryUrl = "".concat(this.primaryUrl, "/Database/database-meta-data");
          var secondaryUrl = 'Database/database-meta-data';
          return this.http.get(primaryUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (primaryError) {
            console.error('Primary URL failed, trying secondary URL:', primaryError);
            return _this1.http.get(secondaryUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (secondaryError) {
              console.error('Secondary URL also failed:', secondaryError);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }));
          }));
        }
      }, {
        key: "changeDatabase",
        value: function changeDatabase(databaseName) {
          return this.http.post("".concat(this.primaryUrl, "/Database/ChangeDatabase"), {
            databaseName: databaseName
          });
        }
        // Get list of available databases
      }, {
        key: "getDatabases",
        value: function getDatabases() {
          return this.http.get("".concat(this.primaryUrl, "/Database/list"));
        }
        // Get the currently active database
      }, {
        key: "getCurrentDatabase",
        value: function getCurrentDatabase() {
          return this.http.get("".concat(this.primaryUrl, "/Database/current"));
        }
      }]);
    }();
    DatabaseMetadataService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: ['API_URL']
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: ['ANOTHER_URL']
        }]
      }];
    };
    DatabaseMetadataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('API_URL')), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('ANOTHER_URL'))], DatabaseMetadataService);

    /***/
  }),
  /***/"./src/app/left-menu/components/left-menu/leftmenu.component.ts": (
  /*!**********************************************************************!*\
    !*** ./src/app/left-menu/components/left-menu/leftmenu.component.ts ***!
    \**********************************************************************/
  /*! exports provided: LeftmenuComponent */
  /***/
  function _src_app_leftMenu_components_leftMenu_leftmenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LeftmenuComponent", function () {
      return LeftmenuComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_left_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/left-menu.service */"./src/app/left-menu/services/left-menu.service.ts");
    /* harmony import */
    var _models_schemaenum_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/schemaenum.enum */"./src/app/left-menu/models/schemaenum.enum.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../auth/services/auth.service */"./src/app/auth/services/auth.service.ts");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    var LeftmenuComponent = /*#__PURE__*/function () {
      function LeftmenuComponent(route, leftMenuService, authService) {
        _classCallCheck(this, LeftmenuComponent);
        this.route = route;
        this.leftMenuService = leftMenuService;
        this.authService = authService;
      }
      return _createClass(LeftmenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;
          // Wait for authentication to be fully ready before loading data
          this.authService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (isAuth) {
            return isAuth === true;
          }),
          // Only proceed when authenticated
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1) // Take only the first emission, then unsubscribe
          ).subscribe(function () {
            console.log('🔑 Auth ready, loading left menu');
            _this10.loadLeftMenuData();
          });
        }
      }, {
        key: "loadLeftMenuData",
        value: function loadLeftMenuData() {
          var _this11 = this;
          this.leftMenuService.loadLeftMenuData().subscribe(function (result) {
            return _this11.handleLoadSuccess(result);
          }, function (error) {
            return _this11.handleLoadError(error);
          });
        }
      }, {
        key: "handleLoadSuccess",
        value: function handleLoadSuccess(result) {
          this.leftmenujsonvalues = result;
        }
      }, {
        key: "handleLoadError",
        value: function handleLoadError(error) {
          console.error(error);
        }
      }, {
        key: "getNodeData",
        value: function getNodeData(data) {
          var _this12 = this;
          var schemaEnum = data.SchemaEnum;
          var objectName = data.text;
          var routePath = '';
          switch (schemaEnum) {
            case _models_schemaenum_enum__WEBPACK_IMPORTED_MODULE_3__["SchemaEnums"].Databases:
              routePath = "/Database";
              break;
            case _models_schemaenum_enum__WEBPACK_IMPORTED_MODULE_3__["SchemaEnums"].Tables:
              routePath = "/Tables";
              break;
            case _models_schemaenum_enum__WEBPACK_IMPORTED_MODULE_3__["SchemaEnums"].Views:
              routePath = "/Views";
              break;
            case _models_schemaenum_enum__WEBPACK_IMPORTED_MODULE_3__["SchemaEnums"].StoredProcedures:
              routePath = "/Storeprocedures";
              break;
            case _models_schemaenum_enum__WEBPACK_IMPORTED_MODULE_3__["SchemaEnums"].ScalarValuedFunctions:
              routePath = "/ScalarFunctions";
              break;
            case _models_schemaenum_enum__WEBPACK_IMPORTED_MODULE_3__["SchemaEnums"].AggregateFunctions:
              routePath = "/AggregateFunctions";
              break;
            case _models_schemaenum_enum__WEBPACK_IMPORTED_MODULE_3__["SchemaEnums"].TableValuedFunctions:
              routePath = "/TableValueFunctions";
              break;
            case _models_schemaenum_enum__WEBPACK_IMPORTED_MODULE_3__["SchemaEnums"].Schemas:
              routePath = "/Schemas";
              break;
            case _models_schemaenum_enum__WEBPACK_IMPORTED_MODULE_3__["SchemaEnums"].Triggers:
              routePath = "/Triggers";
              break;
            case _models_schemaenum_enum__WEBPACK_IMPORTED_MODULE_3__["SchemaEnums"].UserDefinedDataTypes:
              routePath = "/UserDefinedDataTypes";
              break;
            case _models_schemaenum_enum__WEBPACK_IMPORTED_MODULE_3__["SchemaEnums"].AllXmlSchemaCollections:
              routePath = "/XmlSchemas";
              break;
            case _models_schemaenum_enum__WEBPACK_IMPORTED_MODULE_3__["SchemaEnums"].Programmability:
              return;
              break;
            case _models_schemaenum_enum__WEBPACK_IMPORTED_MODULE_3__["SchemaEnums"].DatabaseDataTypes:
              return;
              break;
            case _models_schemaenum_enum__WEBPACK_IMPORTED_MODULE_3__["SchemaEnums"].DatabaseServer:
              routePath = "/DatabaseServerDetails/".concat(encodeURIComponent(objectName));
              break;
            case _models_schemaenum_enum__WEBPACK_IMPORTED_MODULE_3__["SchemaEnums"].Schema:
              routePath = "/Schema/".concat(encodeURIComponent(objectName));
              break;
            case _models_schemaenum_enum__WEBPACK_IMPORTED_MODULE_3__["SchemaEnums"].Table:
              routePath = "/Table/".concat(encodeURIComponent(objectName));
              break;
            case _models_schemaenum_enum__WEBPACK_IMPORTED_MODULE_3__["SchemaEnums"].View:
              routePath = "/View/".concat(encodeURIComponent(objectName));
              break;
            case _models_schemaenum_enum__WEBPACK_IMPORTED_MODULE_3__["SchemaEnums"].StoredProcedure:
              routePath = "/Storeprocedure/".concat(encodeURIComponent(objectName));
              break;
            case _models_schemaenum_enum__WEBPACK_IMPORTED_MODULE_3__["SchemaEnums"].ScalarValuedFunction:
              routePath = "/ScalarFunction/".concat(encodeURIComponent(objectName));
              break;
            case _models_schemaenum_enum__WEBPACK_IMPORTED_MODULE_3__["SchemaEnums"].AggregateFunction:
              routePath = "/AggregateFunction/".concat(encodeURIComponent(objectName));
              break;
            case _models_schemaenum_enum__WEBPACK_IMPORTED_MODULE_3__["SchemaEnums"].TableValuedFunction:
              routePath = "/TableValueFunction/".concat(encodeURIComponent(objectName));
              break;
            case _models_schemaenum_enum__WEBPACK_IMPORTED_MODULE_3__["SchemaEnums"].Trigger:
              routePath = "/Trigger/".concat(encodeURIComponent(objectName));
              break;
            case _models_schemaenum_enum__WEBPACK_IMPORTED_MODULE_3__["SchemaEnums"].UserDefinedDataType:
              routePath = "/UserDefinedDataType/".concat(encodeURIComponent(objectName));
              break;
            case _models_schemaenum_enum__WEBPACK_IMPORTED_MODULE_3__["SchemaEnums"].XmlSchemaCollection:
              routePath = "/XmlSchema/".concat(encodeURIComponent(objectName));
              break;
            case _models_schemaenum_enum__WEBPACK_IMPORTED_MODULE_3__["SchemaEnums"].ProjectInfo:
              routePath = "/ProjectInfo/".concat(encodeURIComponent(objectName));
              break;
            default:
              console.warn("Unhandled SchemaEnum:", schemaEnum);
              return;
          }
          // 🚀 Navigate to the route
          this.route.navigateByUrl('/', {
            skipLocationChange: true
          }).then(function () {
            _this12.route.navigate([routePath]);
          });
        }
      }]);
    }();
    LeftmenuComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_left_menu_service__WEBPACK_IMPORTED_MODULE_2__["LeftMenuService"]
      }, {
        type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };
    LeftmenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-leftmenu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./leftmenu.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/left-menu/components/left-menu/leftmenu.component.html"))["default"]
    })], LeftmenuComponent);

    /***/
  }),
  /***/"./src/app/left-menu/models/schemaenum.enum.ts": (
  /*!*****************************************************!*\
    !*** ./src/app/left-menu/models/schemaenum.enum.ts ***!
    \*****************************************************/
  /*! exports provided: SchemaEnums */
  /***/
  function _src_app_leftMenu_models_schemaenumEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SchemaEnums", function () {
      return SchemaEnums;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");

    /**
     * Represents schema elements in the order similar to SQL Server Object Explorer.
     */
    var SchemaEnums = {
      /** Represents all databases. */
      Databases: "Databases",
      /** Represents all schemas. */
      Schemas: "Schemas",
      /** Represents a schema. */
      Schema: "Schema",
      /** Represents all tables. */
      Tables: "Tables",
      /** Represents a table. */
      Table: "Table",
      /** Represents table columns. */
      TableColumns: "TableColumns",
      /** Represents all views. */
      Views: "Views",
      /** Represents a view. */
      View: "View",
      /** Represents programmability. */
      Programmability: "Programmability",
      /** Represents a table-valued function. */
      TableValuedFunction: "TableValuedFunction",
      /** Represents all table-valued functions. */
      TableValuedFunctions: "TableValuedFunctions",
      /** Represents a scalar-valued function. */
      ScalarValuedFunction: "ScalarValuedFunction",
      /** Represents all scalar-valued functions. */
      ScalarValuedFunctions: "ScalarValuedFunctions",
      /** Represents an aggregate function. */
      AggregateFunction: "AggregateFunction",
      /** Represents all aggregate functions. */
      AggregateFunctions: "AggregateFunctions",
      /** Represents a stored procedure. */
      StoredProcedure: "StoredProcedure",
      /** Represents all stored procedures. */
      StoredProcedures: "StoredProcedures",
      /** Represents a trigger. */
      Trigger: "Trigger",
      /** Represents all triggers. */
      Triggers: "Triggers",
      /** Represents a user-defined data type. */
      UserDefinedDataType: "UserDefinedDataType",
      /** Represents all user-defined data types. */
      UserDefinedDataTypes: "UserDefinedDataTypes",
      /** Represents an XML schema collection. */
      XmlSchemaCollection: "XmlSchemaCollection",
      /** Represents all XML schema collections. */
      AllXmlSchemaCollections: "XmlSchemaCollections",
      /** Represents all database data types. */
      DatabaseDataTypes: "DatabaseDataTypes",
      /** Represents project information. */
      ProjectInfo: "ProjectInfo",
      /** Represents a database server. */
      DatabaseServer: "DatabaseServer"
    };

    /***/
  }),
  /***/"./src/app/left-menu/services/left-menu.service.ts": (
  /*!*********************************************************!*\
    !*** ./src/app/left-menu/services/left-menu.service.ts ***!
    \*********************************************************/
  /*! exports provided: LeftMenuService */
  /***/
  function _src_app_leftMenu_services_leftMenuServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LeftMenuService", function () {
      return LeftMenuService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    var LeftMenuService = /*#__PURE__*/function () {
      function LeftMenuService(http, primaryUrl, secondaryUrl) {
        _classCallCheck(this, LeftMenuService);
        this.http = http;
        this.primaryUrl = primaryUrl;
        this.secondaryUrl = secondaryUrl;
      }
      return _createClass(LeftMenuService, [{
        key: "loadLeftMenuData",
        value: function loadLeftMenuData() {
          var _this13 = this;
          var primaryUrl = "".concat(this.primaryUrl, "/LeftMenu/left-menu");
          var secondaryUrl = 'LeftMenu/left-menu'; // Fallback URL
          return this.http.get(primaryUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            console.error('Primary URL failed, trying secondary URL:', error);
            return _this13.http.get(secondaryUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (secondaryError) {
              console.error('Both primary and secondary URLs failed:', secondaryError);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null); // Return a safe fallback
            }));
          }));
        }
      }]);
    }();
    LeftMenuService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: ['API_URL']
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: ['ANOTHER_URL']
        }]
      }];
    };
    LeftMenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('API_URL')), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('ANOTHER_URL'))], LeftMenuService);

    /***/
  }),
  /***/"./src/app/shared/components/code-viewer/code-viewer.component.css": (
  /*!*************************************************************************!*\
    !*** ./src/app/shared/components/code-viewer/code-viewer.component.css ***!
    \*************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_shared_components_codeViewer_codeViewerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".code-container {\r\n  \r\n  overflow-x: auto;\r\n  overflow-y: auto; \r\n  max-height: 600px;\r\n}\r\n\r\n.code-container pre {\r\n  margin: 0;\r\n  font-family: 'Consolas', 'Monaco', 'Courier New', 'Menlo', monospace;\r\n  font-size: 14px;\r\n  line-height: 1.6;\r\n  white-space: pre-wrap;\r\n  word-wrap: break-word;\r\n}\r\n\r\n.code-container code {\r\n  color: #d4d4d4;\r\n  display: block;\r\n}\r\n\r\n.no-code-message {\r\n  padding: 20px;\r\n  text-align: center;\r\n  color: #888;\r\n  background-color: #f5f5f5;\r\n  border: 1px dashed #ccc;\r\n  border-radius: 4px;\r\n  margin: 8px 0;\r\n}\r\n\r\n.no-code-message p {\r\n  margin: 0;\r\n  font-style: italic;\r\n}\r\n\r\n/* Scrollbar styling for webkit browsers (Chrome, Safari, Edge) */\r\n\r\n.code-container::-webkit-scrollbar {\r\n  width: 8px;\r\n  height: 8px;\r\n}\r\n\r\n.code-container::-webkit-scrollbar-track {\r\n  background: #2d2d2d;\r\n  border-radius: 4px;\r\n}\r\n\r\n.code-container::-webkit-scrollbar-thumb {\r\n  background: #555;\r\n  border-radius: 4px;\r\n  transition: background 0.3s ease;\r\n}\r\n\r\n.code-container::-webkit-scrollbar-thumb:hover {\r\n  background: #777;\r\n}\r\n\r\n/* Firefox scrollbar styling */\r\n\r\n.code-container {\r\n  scrollbar-width: thin;\r\n  scrollbar-color: #555 #2d2d2d;\r\n}\r\n\r\n/* Responsive font size */\r\n\r\n@media (max-width: 768px) {\r\n  .code-container {\r\n    padding: 12px;\r\n  }\r\n\r\n  .code-container pre {\r\n    font-size: 12px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29kZS12aWV3ZXIvY29kZS12aWV3ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxvRUFBb0U7RUFDcEUsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBLGlFQUFpRTs7QUFDakU7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLDhCQUE4Qjs7QUFDOUI7RUFDRSxxQkFBcUI7RUFDckIsNkJBQTZCO0FBQy9COztBQUVBLHlCQUF5Qjs7QUFDekI7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvZGUtdmlld2VyL2NvZGUtdmlld2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29kZS1jb250YWluZXIge1xyXG4gIFxyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgb3ZlcmZsb3cteTogYXV0bzsgXHJcbiAgbWF4LWhlaWdodDogNjAwcHg7XHJcbn1cclxuXHJcbi5jb2RlLWNvbnRhaW5lciBwcmUge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogJ0NvbnNvbGFzJywgJ01vbmFjbycsICdDb3VyaWVyIE5ldycsICdNZW5sbycsIG1vbm9zcGFjZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4uY29kZS1jb250YWluZXIgY29kZSB7XHJcbiAgY29sb3I6ICNkNGQ0ZDQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5uby1jb2RlLW1lc3NhZ2Uge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjODg4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuXHJcbi5uby1jb2RlLW1lc3NhZ2UgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLyogU2Nyb2xsYmFyIHN0eWxpbmcgZm9yIHdlYmtpdCBicm93c2VycyAoQ2hyb21lLCBTYWZhcmksIEVkZ2UpICovXHJcbi5jb2RlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA4cHg7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5jb2RlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICMyZDJkMmQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uY29kZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjNTU1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmNvZGUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzc3NztcclxufVxyXG5cclxuLyogRmlyZWZveCBzY3JvbGxiYXIgc3R5bGluZyAqL1xyXG4uY29kZS1jb250YWluZXIge1xyXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcclxuICBzY3JvbGxiYXItY29sb3I6ICM1NTUgIzJkMmQyZDtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBmb250IHNpemUgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvZGUtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuY29kZS1jb250YWluZXIgcHJlIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbn1cclxuIl19 */";

    /***/
  }),
  /***/"./src/app/shared/components/code-viewer/code-viewer.component.ts": (
  /*!************************************************************************!*\
    !*** ./src/app/shared/components/code-viewer/code-viewer.component.ts ***!
    \************************************************************************/
  /*! exports provided: CodeViewerComponent */
  /***/
  function _src_app_shared_components_codeViewer_codeViewerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CodeViewerComponent", function () {
      return CodeViewerComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var CodeViewerComponent = /*#__PURE__*/function () {
      function CodeViewerComponent() {
        _classCallCheck(this, CodeViewerComponent);
        this.code = '';
        this.language = 'sql';
      }
      return _createClass(CodeViewerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('CodeViewerComponent initialized');
          console.log('Code length:', this.code ? this.code.length : 0);
          console.log('Language:', this.language);
          if (this.code) {
            console.log('Code preview:', this.code.substring(0, Math.min(100, this.code.length)));
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          // Trigger Prism highlighting after view is initialized
          this.highlightCode();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this14 = this;
          if (changes['code']) {
            console.log('Code input changed:');
            var prevValue = changes['code'].previousValue;
            var currValue = changes['code'].currentValue;
            if (prevValue) {
              console.log('Previous value:', prevValue.substring(0, Math.min(50, prevValue.length)));
            }
            if (currValue) {
              console.log('Current value:', currValue.substring(0, Math.min(50, currValue.length)));
            }
            console.log('Current code length:', this.code ? this.code.length : 0);
            // Re-highlight when code changes
            setTimeout(function () {
              return _this14.highlightCode();
            }, 0);
          }
        }
      }, {
        key: "highlightCode",
        value: function highlightCode() {
          if (typeof window !== 'undefined' && window.Prism) {
            window.Prism.highlightAll();
          }
        }
      }]);
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CodeViewerComponent.prototype, "code", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CodeViewerComponent.prototype, "language", void 0);
    CodeViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-code-viewer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./code-viewer.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/code-viewer/code-viewer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./code-viewer.component.css */"./src/app/shared/components/code-viewer/code-viewer.component.css"))["default"]]
    })], CodeViewerComponent);

    /***/
  }),
  /***/"./src/app/shared/shared.module.ts": (
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/
  /*! exports provided: SharedModule */
  /***/
  function _src_app_shared_sharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _ngx_prism_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-prism/core */"./node_modules/@ngx-prism/core/dist/index.js");
    /* harmony import */
    var _components_code_viewer_code_viewer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/code-viewer/code-viewer.component */"./src/app/shared/components/code-viewer/code-viewer.component.ts");
    /* harmony import */
    var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! amexio-ng-extensions */"./node_modules/amexio-ng-extensions/amexio-ng-extensions.js");

    // Import Amexio modules once here to share across all modules

    var SharedModule = /*#__PURE__*/_createClass(function SharedModule() {
      _classCallCheck(this, SharedModule);
    });
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_code_viewer_code_viewer_component__WEBPACK_IMPORTED_MODULE_4__["CodeViewerComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_prism_core__WEBPACK_IMPORTED_MODULE_3__["PrismModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioDataModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioChartsModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioEnterpriseModule"]],
      exports: [_components_code_viewer_code_viewer_component__WEBPACK_IMPORTED_MODULE_4__["CodeViewerComponent"],
      // Re-export Amexio modules so feature modules can use them
      amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioDataModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioChartsModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioEnterpriseModule"]]
    })], SharedModule);

    /***/
  }),
  /***/"./src/app/ui/footer/footer.component.css": (
  /*!************************************************!*\
    !*** ./src/app/ui/footer/footer.component.css ***!
    \************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_ui_footer_footerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "footer{\r\n    \r\n  border: 1px solid blue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3VpL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcntcclxuICAgIFxyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XHJcbn0iXX0= */";

    /***/
  }),
  /***/"./src/app/ui/footer/footer.component.ts": (
  /*!***********************************************!*\
    !*** ./src/app/ui/footer/footer.component.ts ***!
    \***********************************************/
  /*! exports provided: FooterComponent */
  /***/
  function _src_app_ui_footer_footerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var FooterComponent = /*#__PURE__*/_createClass(function FooterComponent() {
      _classCallCheck(this, FooterComponent);
    });
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/ui/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */"./src/app/ui/footer/footer.component.css"))["default"]]
    })], FooterComponent);

    /***/
  }),
  /***/"./src/app/ui/header/header.component.css": (
  /*!************************************************!*\
    !*** ./src/app/ui/header/header.component.css ***!
    \************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_ui_header_headerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".header {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 1030;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n/* Navbar styling */\r\n\r\n.navbar {\r\n  padding: 0.5rem 1rem !important;\r\n  background-color: #1b3a57 !important;\r\n  min-height: 50px;\r\n  height: 50px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.navbar-brand {\r\n  font-weight: 600;\r\n  font-size: 1.25rem;\r\n  color: #fff !important;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.navbar-brand:hover {\r\n  color: #00b4d8 !important;\r\n}\r\n\r\n.navbar-brand i {\r\n  margin-right: 8px;\r\n}\r\n\r\n/* Navbar toggler */\r\n\r\n.navbar-toggler {\r\n  border-color: rgba(255, 255, 255, 0.3);\r\n  padding: 0.25rem 0.5rem;\r\n}\r\n\r\n.navbar-toggler:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);\r\n}\r\n\r\n.navbar-toggler-icon {\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.8)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\r\n}\r\n\r\n/* Navigation links */\r\n\r\n.nav-link {\r\n  font-size: 14px;\r\n  padding: 8px 12px !important;\r\n  color: rgba(255, 255, 255, 0.9) !important;\r\n  transition: all 0.3s ease;\r\n  border-radius: 4px;\r\n}\r\n\r\n.nav-link:hover {\r\n  color: #fff !important;\r\n  background-color: rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n.nav-link.active {\r\n  color: #00b4d8 !important;\r\n  background-color: rgba(0, 180, 216, 0.15);\r\n  font-weight: 500;\r\n}\r\n\r\n.nav-link i {\r\n  margin-right: 5px;\r\n  font-size: 14px;\r\n}\r\n\r\n/* Left navigation menu (next to brand) */\r\n\r\n.navbar-nav-left {\r\n  display: flex;\r\n  flex-direction: row;\r\n  margin-left: 1rem;\r\n  margin-bottom: 0;\r\n  padding-left: 0;\r\n  list-style: none;\r\n}\r\n\r\n.navbar-nav-left .nav-item {\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n/* User info display */\r\n\r\n.user-info {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 6px 12px;\r\n  color: rgba(255, 255, 255, 0.9) !important;\r\n  font-size: 14px;\r\n  border: 1px solid rgba(255, 255, 255, 0.2);\r\n  border-radius: 20px;\r\n  background-color: rgba(255, 255, 255, 0.05);\r\n}\r\n\r\n.user-info i {\r\n  margin-right: 6px;\r\n  font-size: 16px;\r\n}\r\n\r\n/* Login button */\r\n\r\n.btn-outline-light {\r\n  border-width: 2px;\r\n  color: #fff;\r\n  border-color: rgba(255, 255, 255, 0.5);\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.btn-outline-light:hover {\r\n  background-color: rgba(255, 255, 255, 0.1);\r\n  border-color: #fff;\r\n  color: #fff;\r\n}\r\n\r\n/* User icon */\r\n\r\n.fa-user-circle {\r\n  font-size: 18px;\r\n  margin-right: 5px;\r\n}\r\n\r\n/* Navbar collapse */\r\n\r\n.navbar-collapse {\r\n  flex-basis: auto;\r\n  flex-grow: 1;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.navbar-collapse.show {\r\n  display: flex;\r\n}\r\n\r\n/* Ensure ms-auto works correctly */\r\n\r\n.navbar-nav.ms-auto {\r\n  margin-left: auto !important;\r\n}\r\n\r\n.navbar-nav.ms-auto .nav-item {\r\n  margin-left: 0.5rem !important;\r\n}\r\n\r\n.navbar-nav.ms-auto .nav-item:first-child {\r\n  margin-left: 0 !important;\r\n}\r\n\r\n/* Mobile navigation - hidden on desktop */\r\n\r\n.mobile-nav {\r\n  display: none;\r\n}\r\n\r\n/* Responsive adjustments */\r\n\r\n@media (max-width: 991.98px) {\r\n  .navbar {\r\n    height: auto;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  /* Hide left nav on mobile, show it in collapse menu */\r\n  .navbar-nav-left {\r\n    display: none !important;\r\n  }\r\n\r\n  /* Show mobile nav in collapsed menu */\r\n  .mobile-nav {\r\n    display: flex !important;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    margin-bottom: 0.5rem;\r\n    padding-bottom: 0.5rem;\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\r\n  }\r\n\r\n  .navbar-collapse {\r\n    background-color: #1b3a57;\r\n    padding: 1rem;\r\n    margin-top: 0.5rem;\r\n    border-radius: 4px;\r\n    width: 100%;\r\n  }\r\n\r\n  .navbar-nav {\r\n    flex-direction: column;\r\n    width: 100%;\r\n  }\r\n\r\n  .navbar-nav .nav-item {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n    margin-bottom: 0.5rem;\r\n    width: 100%;\r\n  }\r\n\r\n  .nav-link {\r\n    padding: 10px 12px !important;\r\n  }\r\n\r\n  .user-info {\r\n    border-radius: 4px;\r\n    width: 100%;\r\n    justify-content: flex-start;\r\n    margin-bottom: 0.5rem;\r\n  }\r\n\r\n  .btn-outline-light {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  /* Ensure left nav displays on desktop */\r\n  .navbar-nav-left {\r\n    display: flex !important;\r\n  }\r\n\r\n  /* Hide mobile nav on desktop */\r\n  .mobile-nav {\r\n    display: none !important;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .navbar {\r\n    padding: 0.25rem 0.75rem !important;\r\n  }\r\n\r\n  .navbar-brand {\r\n    font-size: 1rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .navbar-brand {\r\n    font-size: 0.9rem;\r\n  }\r\n\r\n  .navbar-brand i {\r\n    margin-right: 4px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sYUFBYTtFQUNiLHdDQUF3QztBQUMxQzs7QUFFQSxtQkFBbUI7O0FBQ25CO0VBQ0UsK0JBQStCO0VBQy9CLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLG1CQUFtQjs7QUFDbkI7RUFDRSxzQ0FBc0M7RUFDdEMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0UsOFBBQThQO0FBQ2hROztBQUVBLHFCQUFxQjs7QUFDckI7RUFDRSxlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLDBDQUEwQztFQUMxQyx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5Q0FBeUM7RUFDekMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUEseUNBQXlDOztBQUN6QztFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBLHNCQUFzQjs7QUFDdEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiwwQ0FBMEM7RUFDMUMsZUFBZTtFQUNmLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUEsaUJBQWlCOztBQUNqQjtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsc0NBQXNDO0VBQ3RDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBLGNBQWM7O0FBQ2Q7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBLG9CQUFvQjs7QUFDcEI7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsbUNBQW1DOztBQUNuQztFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSwwQ0FBMEM7O0FBQzFDO0VBQ0UsYUFBYTtBQUNmOztBQUVBLDJCQUEyQjs7QUFDM0I7RUFDRTtJQUNFLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztFQUVBLHNEQUFzRDtFQUN0RDtJQUNFLHdCQUF3QjtFQUMxQjs7RUFFQSxzQ0FBc0M7RUFDdEM7SUFDRSx3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGlEQUFpRDtFQUNuRDs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsV0FBVztFQUNiOztFQUVBO0lBQ0UsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEM7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUEsK0JBQStCO0VBQy9CO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG1DQUFtQztFQUNyQzs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC91aS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDMwO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi8qIE5hdmJhciBzdHlsaW5nICovXHJcbi5uYXZiYXIge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiM2E1NyAhaW1wb3J0YW50O1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQ6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDBiNGQ4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQgaSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi8qIE5hdmJhciB0b2dnbGVyICovXHJcbi5uYXZiYXItdG9nZ2xlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XHJcbn1cclxuXHJcbi5uYXZiYXItdG9nZ2xlcjpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbn1cclxuXHJcbi5uYXZiYXItdG9nZ2xlci1pY29uIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDMwIDMwJyUzZSUzY3BhdGggc3Ryb2tlPSdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCknIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBzdHJva2Utd2lkdGg9JzInIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8lM2UlM2Mvc3ZnJTNlXCIpO1xyXG59XHJcblxyXG4vKiBOYXZpZ2F0aW9uIGxpbmtzICovXHJcbi5uYXYtbGluayB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4ubmF2LWxpbms6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG59XHJcblxyXG4ubmF2LWxpbmsuYWN0aXZlIHtcclxuICBjb2xvcjogIzAwYjRkOCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTgwLCAyMTYsIDAuMTUpO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5uYXYtbGluayBpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi8qIExlZnQgbmF2aWdhdGlvbiBtZW51IChuZXh0IHRvIGJyYW5kKSAqL1xyXG4ubmF2YmFyLW5hdi1sZWZ0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLm5hdmJhci1uYXYtbGVmdCAubmF2LWl0ZW0ge1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG59XHJcblxyXG4vKiBVc2VyIGluZm8gZGlzcGxheSAqL1xyXG4udXNlci1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xyXG59XHJcblxyXG4udXNlci1pbmZvIGkge1xyXG4gIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLyogTG9naW4gYnV0dG9uICovXHJcbi5idG4tb3V0bGluZS1saWdodCB7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWxpZ2h0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4vKiBVc2VyIGljb24gKi9cclxuLmZhLXVzZXItY2lyY2xlIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi8qIE5hdmJhciBjb2xsYXBzZSAqL1xyXG4ubmF2YmFyLWNvbGxhcHNlIHtcclxuICBmbGV4LWJhc2lzOiBhdXRvO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5uYXZiYXItY29sbGFwc2Uuc2hvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLyogRW5zdXJlIG1zLWF1dG8gd29ya3MgY29ycmVjdGx5ICovXHJcbi5uYXZiYXItbmF2Lm1zLWF1dG8ge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2Lm1zLWF1dG8gLm5hdi1pdGVtIHtcclxuICBtYXJnaW4tbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2Lm1zLWF1dG8gLm5hdi1pdGVtOmZpcnN0LWNoaWxkIHtcclxuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBNb2JpbGUgbmF2aWdhdGlvbiAtIGhpZGRlbiBvbiBkZXNrdG9wICovXHJcbi5tb2JpbGUtbmF2IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIGFkanVzdG1lbnRzICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG4gIC5uYXZiYXIge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuXHJcbiAgLyogSGlkZSBsZWZ0IG5hdiBvbiBtb2JpbGUsIHNob3cgaXQgaW4gY29sbGFwc2UgbWVudSAqL1xyXG4gIC5uYXZiYXItbmF2LWxlZnQge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLyogU2hvdyBtb2JpbGUgbmF2IGluIGNvbGxhcHNlZCBtZW51ICovXHJcbiAgLm1vYmlsZS1uYXYge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjNhNTc7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLW5hdiB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLW5hdiAubmF2LWl0ZW0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5uYXYtbGluayB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC51c2VyLWluZm8ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgfVxyXG5cclxuICAuYnRuLW91dGxpbmUtbGlnaHQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAvKiBFbnN1cmUgbGVmdCBuYXYgZGlzcGxheXMgb24gZGVza3RvcCAqL1xyXG4gIC5uYXZiYXItbmF2LWxlZnQge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLyogSGlkZSBtb2JpbGUgbmF2IG9uIGRlc2t0b3AgKi9cclxuICAubW9iaWxlLW5hdiB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubmF2YmFyIHtcclxuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1icmFuZCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAubmF2YmFyLWJyYW5kIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1icmFuZCBpIHtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */";

    /***/
  }),
  /***/"./src/app/ui/header/header.component.ts": (
  /*!***********************************************!*\
    !*** ./src/app/ui/header/header.component.ts ***!
    \***********************************************/
  /*! exports provided: HeaderComponent */
  /***/
  function _src_app_ui_header_headerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/services/auth.service */"./src/app/auth/services/auth.service.ts");
    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(authService, router) {
        _classCallCheck(this, HeaderComponent);
        this.authService = authService;
        this.router = router;
        this.currentUser = null;
        this.isAuthenticated = false;
        this.isNavbarCollapsed = true;
      }
      return _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;
          this.userSubscription = this.authService.currentUser.subscribe(function (user) {
            _this15.currentUser = user;
          });
          this.authSubscription = this.authService.isAuthenticated.subscribe(function (isAuth) {
            _this15.isAuthenticated = isAuth;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.userSubscription) {
            this.userSubscription.unsubscribe();
          }
          if (this.authSubscription) {
            this.authSubscription.unsubscribe();
          }
        }
      }, {
        key: "onResize",
        value: function onResize() {
          // Close navbar on larger screens
          if (window.innerWidth >= 992 && !this.isNavbarCollapsed) {
            this.isNavbarCollapsed = true;
          }
        }
      }, {
        key: "onChangeServer",
        value: function onChangeServer(event) {
          var selectedServer = event.target.value;
          console.log('Selected SQL Server:', selectedServer);
          // Handle the change as needed
        }
      }, {
        key: "logout",
        value: function logout() {
          this.isNavbarCollapsed = true;
          this.authService.logout();
          this.router.navigate(['/login']);
        }
      }, {
        key: "navigateToLogin",
        value: function navigateToLogin() {
          this.isNavbarCollapsed = true;
          this.router.navigate(['/login']);
        }
      }]);
    }();
    HeaderComponent.ctorParameters = function () {
      return [{
        type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])], HeaderComponent.prototype, "onResize", null);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/ui/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */"./src/app/ui/header/header.component.css"))["default"]]
    })], HeaderComponent);

    /***/
  }),
  /***/"./src/app/ui/main-page/main-page.component.css": (
  /*!******************************************************!*\
    !*** ./src/app/ui/main-page/main-page.component.css ***!
    \******************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_ui_mainPage_mainPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */";

    /***/
  }),
  /***/"./src/app/ui/main-page/main-page.component.ts": (
  /*!*****************************************************!*\
    !*** ./src/app/ui/main-page/main-page.component.ts ***!
    \*****************************************************/
  /*! exports provided: MainPageComponent */
  /***/
  function _src_app_ui_mainPage_mainPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "MainPageComponent", function () {
      return MainPageComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/services/auth.service */"./src/app/auth/services/auth.service.ts");
    var MainPageComponent = /*#__PURE__*/function () {
      function MainPageComponent(cdr, authService) {
        _classCallCheck(this, MainPageComponent);
        this.cdr = cdr;
        this.authService = authService;
        this.status = false;
        this.dblClickTime = 300;
        this.useTransition = true;
        this.previousSizes = [25, 75];
      }
      return _createClass(MainPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;
          // Subscribe to auth state changes and trigger change detection
          // This ensures the view updates when authentication completes
          this.authSubscription = this.authService.isAuthenticated.subscribe(function () {
            _this16.cdr.markForCheck();
          });
        }
      }, {
        key: "log",
        value: function log(type, e) {
          switch (type) {
            case "gutterDblClick":
            case "gutterClick":
              {
                this.toggleSidebar();
              }
              break;
            case "dragEnd":
              // Store the sizes when user manually adjusts
              if (!this.status) {
                this.previousSizes = _toConsumableArray(e.sizes);
              }
              break;
            case "dragStart":
              console.log('Drag started', e);
              break;
            case "transitionEnd":
              console.log('Transition ended', e);
              break;
          }
        }
      }, {
        key: "toggleSidebar",
        value: function toggleSidebar() {
          this.status = !this.status;
          var toggleSound = new Audio('assets/switch.mp3'); // add a small click sound in /assets
          toggleSound.volume = 0.3;
          toggleSound.play();
          if (this.status) {
            this.area1.size = 0;
            this.area2.size = 100;
          } else {
            this.area1.size = this.previousSizes[0];
            this.area2.size = this.previousSizes[1];
          }
          this.cdr.markForCheck();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // Clean up subscription to prevent memory leaks
          if (this.authSubscription) {
            this.authSubscription.unsubscribe();
          }
        }
      }]);
    }();
    MainPageComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('split', {
      "static": false
    })], MainPageComponent.prototype, "splitComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('area1', {
      "static": false
    })], MainPageComponent.prototype, "area1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('area2', {
      "static": false
    })], MainPageComponent.prototype, "area2", void 0);
    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-page',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-page.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/ui/main-page/main-page.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-page.component.css */"./src/app/ui/main-page/main-page.component.css"))["default"]]
    })], MainPageComponent);

    /***/
  }),
  /***/"./src/main.ts": (
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! exports provided: getApiUrl, getAnotherUrl */
  /***/
  function _src_mainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "getApiUrl", function () {
      return getApiUrl;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "getAnotherUrl", function () {
      return getAnotherUrl;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */"./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */"./src/app/app.module.ts");
    function getApiUrl() {
      return ''; // Empty string to use proxy configuration from proxy.conf.js
    }
    function getAnotherUrl() {
      return 'https://localhost:5001'; // Your second URL
    }
    var providers = [{
      provide: 'API_URL',
      useFactory: getApiUrl,
      deps: []
    }, {
      provide: 'ANOTHER_URL',
      useFactory: getAnotherUrl,
      deps: []
    }];
    if (true) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });

    /***/
  }),
  /***/0: (
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(/*! c:\Users\lakshaman.rokade\source\repos\MSSQL\src\WebClient\mssql.client\src\main.ts */"./src/main.ts");

    /***/
  })
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map