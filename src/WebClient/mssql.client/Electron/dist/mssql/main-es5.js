function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/Triggers/components/database-trigger/database-trigger.component.html": (
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Triggers/components/database-trigger/database-trigger.component.html ***!
    \****************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_Triggers_components_databaseTrigger_databaseTriggerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\r\n<amexio-accordion [multi-open]=\"true\">\r\n\r\n  <!-- Trigger Name -->\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Trigger Name\" [active]=\"true\">\r\n    <h5>\r\n      <img src=\"./assets/icons/DdlTrigger.png\" style=\"width: 30px !important;\">\r\n      {{ selectedTrigger?.name }}\r\n    </h5>\r\n  </amexio-accordion-tab>\r\n\r\n  <!-- MS Description -->\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"MS Description\" [active]=\"true\">\r\n    <div class=\"table\" *ngIf=\"!iblnShowEditBox\">\r\n      <div class=\"cell\">\r\n        <p>{{ selectedTrigger?.description }}</p>\r\n      </div>\r\n      <a (click)=\"ShowModelPOP($event)\" class=\"btn btn-default btn-lg a-btn-slide-text\">\r\n        <span class=\"fa fa-edit\"></span>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"form-group\" *ngIf=\"iblnShowEditBox\">\r\n      <textarea class=\"form-control\" rows=\"5\" id=\"comment\" [(ngModel)]=\"tiggersDesc\"></textarea>\r\n      <div class=\"form-group text-right\">\r\n        <a (click)=\"CancelTableMsDesciption($event)\"><i class=\"fa fa-2x fa-times\"></i></a>&nbsp;\r\n        <a (click)=\"SaveTableMsDesciption($event)\"><i class=\"fa fa-2x fa-save\"></i></a>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n  <!-- Property -->\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Property\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Property</div>\r\n        <div class=\"cell\">Value</div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"cell\">Created Date</div>\r\n        <div class=\"cell\">{{ selectedTrigger?.createDate }}</div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"cell\">Modified Date</div>\r\n        <div class=\"cell\">{{  selectedTrigger?.modifyDate }}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n  <!-- Script -->\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Script\" [active]=\"true\">\r\n    {{ selectedTrigger.definition }}\r\n  </amexio-accordion-tab>\r\n\r\n</amexio-accordion>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/Triggers/components/database-triggers/database-triggers.component.html": (
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Triggers/components/database-triggers/database-triggers.component.html ***!
    \******************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_Triggers_components_databaseTriggers_databaseTriggersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<amexio-accordion [multi-open]=\"true\">\r\n\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"All Triggers\" [active]=\"true\">\r\n    <hr />\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n    <hr />\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Triggers</div>\r\n        <div class=\"cell\">MS Descriptions</div>\r\n      </div>\r\n      <div *ngFor=\"let Property of triggers   \" class=\"row\">\r\n        <a [innerHTML]=\"Property.name  \" class=\"cell\" data-title=\"Property\" [routerLink]=\"['/Trigger',Property.name]\"> {{Property.name}}</a>\r\n        <div [innerHTML]=\"Property.description  \" class=\"cell\" data-title=\"Value\">{{Property.istrValue}}</div>\r\n\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n</amexio-accordion>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/UserDefinedDataType/components/user-defined-data-type/user-defined-data-type.component.html": (
  /*!***************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/UserDefinedDataType/components/user-defined-data-type/user-defined-data-type.component.html ***!
    \***************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_UserDefinedDataType_components_userDefinedDataType_userDefinedDataTypeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<amexio-accordion [multi-open]=\"true\">\r\n\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"User Defined Data Type  Name \" [active]=\"true\">\r\n    <h5>\r\n      <img src=\"./assets/icons/UserDefinedDataType.png\" style=\"width: 30px !important;\">\r\n      {{selectedDataType?.name}}\r\n    </h5>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"MS Descriptions \" [active]=\"true\">\r\n    <div class=\"table\" *ngIf=\"!iblnShowEditBox\">\r\n      <div class=\"cell\">\r\n        <p>{{ selectedDataType?.description || 'No description available' }}</p>\r\n      </div>\r\n      <a (click)=\"toggleEditBox()\" class=\"btn btn-default btn-lg a-btn-slide-text\">\r\n        <span class=\"fa fa-edit\"></span>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"form-group\" *ngIf=\"iblnShowEditBox\">\r\n      <textarea class=\"form-control\" rows=\"5\" id=\"comment\" [(ngModel)]=\"newDescription\"></textarea>\r\n      <div class=\"form-group\" style=\"margin-left: 94%;\">\r\n        <a (click)=\"toggleEditBox()\"><i class=\"fa fa-2x fa-times\"></i></a>&nbsp;\r\n        <a (click)=\"saveDescription()\"><i class=\"fa fa-2x fa-save\"></i></a>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Properties\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Property</div>\r\n        <div class=\"cell\">Values</div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"cell\">Allow Nulls</div>\r\n        <div class=\"cell\">{{selectedDataType?.allowNulls}} </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"cell\">Base Type Name</div>\r\n        <div class=\"cell\">{{selectedDataType?.baseTypeName}}</div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"cell\">Length</div>\r\n        <div class=\"cell\">{{selectedDataType?.length}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"SQL Script\" [gradient]=\"true\" [active]=\"true\">\r\n    {{selectedDataType?.createScript}}\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Used By\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Object Name</div>\r\n        <div class=\"cell\">Object Type</div>\r\n      </div>\r\n      <div *ngFor=\"let Property of selectedDataType?.userDefinedDataTypeReference \" class=\"row\">\r\n        <div class=\"cell\"><a>{{Property.objectName}}</a> </div>\r\n        <div class=\"cell\">{{Property.objectType}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n</amexio-accordion>\r\n\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/UserDefinedDataType/components/user-defined-data-types/user-defined-data-types.component.html": (
  /*!*****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/UserDefinedDataType/components/user-defined-data-types/user-defined-data-types.component.html ***!
    \*****************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_UserDefinedDataType_components_userDefinedDataTypes_userDefinedDataTypesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = " \r\n<amexio-accordion [multi-open]=\"true\">\r\n\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"User Defined Data Type\" [active]=\"true\">\r\n    <hr />\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n    <hr />\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Name</div>\r\n      </div>\r\n      <div *ngFor=\"let Property of userDefinedDataTypes   \" class=\"row\">\r\n        <a [innerHTML]=\"Property.name\" class=\"cell\" data-title=\"Property\" [routerLink]=\"['/UserDefinedDataType',Property.name]\"> {{Property.name}}\r\n        </a>  \r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n</amexio-accordion>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/XmlSchema/component/xml-schema-details/xml-schema-details.component.html": (
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/XmlSchema/component/xml-schema-details/xml-schema-details.component.html ***!
    \********************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_XmlSchema_component_xmlSchemaDetails_xmlSchemaDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\r\n<amexio-accordion [multi-open]=\"true\">\r\n\r\n  <!-- Trigger Name -->\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Trigger Name\" [active]=\"true\">\r\n    <h5>\r\n      <img src=\"./assets/icons/DdlTrigger.png\" style=\"width: 30px !important;\">\r\n      {{ schemaName }}\r\n    </h5>\r\n  </amexio-accordion-tab>\r\n  <!-- MS Description -->\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"MS Description\" [active]=\"true\">\r\n    <div class=\"table\" *ngIf=\"!iblnShowEditBox\">\r\n      <div class=\"cell\">\r\n        <p>{{schemaDetails?.mS_Description }}</p>\r\n      </div>\r\n      <a (click)=\"ShowModelPOP($event)\" class=\"btn btn-default btn-lg a-btn-slide-text\">\r\n        <span class=\"fa fa-edit\"></span>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"form-group\" *ngIf=\"iblnShowEditBox\">\r\n      <textarea class=\"form-control\" rows=\"5\" id=\"comment\" [(ngModel)]=\"msDescription\"></textarea>\r\n      <div class=\"form-group text-right\">\r\n        <a (click)=\"CancelTableMsDesciption($event)\"><i class=\"fa fa-2x fa-times\"></i></a>&nbsp;\r\n        <a (click)=\"SaveTableMsDesciption($event)\"><i class=\"fa fa-2x fa-save\"></i></a>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Dependent Columns\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Type</div>\r\n      </div>\r\n      <div *ngFor=\"let Property of schemaDetails?.dependentColumns \" class=\"row\">\r\n        <div class=\"cell\">{{Property}} </div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Create Script\" [active]=\"true\">\r\n    <div>\r\n      <p>{{schemaDetails?.sqlScript }}</p>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Referance Schema\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Schema</div>\r\n      </div>\r\n      <div *ngFor=\"let Property of schemaDetails?.xmlschema \" class=\"row\">\r\n        <div class=\"cell\">{{Property.tableSchema}} </div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Referance Table\" [active]=\"true\"> \r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Schema</div>\r\n        <div class=\"cell\">Table</div>\r\n        <div class=\"cell\">Column</div>\r\n      </div>\r\n      <div *ngFor=\"let Property of schemaDetails?.xmlschemreference \" class=\"row\">\r\n        <div class=\"cell\">{{Property.tableSchema}} </div>\r\n        <div class=\"cell\">{{Property.tableName}} </div>\r\n        <div class=\"cell\">{{Property.columnName}} </div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n</amexio-accordion>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/XmlSchema/component/xml-schema-list/xml-schema-list.component.html": (
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/XmlSchema/component/xml-schema-list/xml-schema-list.component.html ***!
    \**************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_XmlSchema_component_xmlSchemaList_xmlSchemaListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<amexio-accordion [multi-open]=\"true\">\r\n\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"All XML Schema\" [active]=\"true\">\r\n    <hr />\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search\" >\r\n    <hr />\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">XML Schema</div>\r\n        <div class=\"cell\">MS Descriptions</div>\r\n      </div>\r\n      <div *ngFor=\"let Property of collections  \" class=\"row\">\r\n        <a [innerHTML]=\"Property.xmlSchemaCollections\" class=\"cell\" data-title=\"Property\" [routerLink]=\"['/XmlSchema',Property.xmlSchemaCollections]\"> {{Property.xmlSchemaCollections}}</a>\r\n        <div [innerHTML]=\"Property.mS_Description\" class=\"cell\" data-title=\"Value\">{{Property.mS_Description}}</div>\r\n\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n</amexio-accordion>\r\n";

    /***/
  }),
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
    __webpack_exports__["default"] = "<app-header></app-header>\r\n<div id=\"main-content\">\r\n  <ngx-ui-loader></ngx-ui-loader>\r\n\r\n  <div class=\"split-example ex-percent\">\r\n    <as-split unit=\"percent\"\r\n              direction=\"horizontal\"\r\n              #split=\"asSplit\"\r\n              [gutterSize]=\"10\"\r\n              [useTransition]=\"useTransition\"\r\n              (dragStart)=\"log('dragStart', $event)\"\r\n              (dragEnd)=\"log('dragEnd', $event)\"\r\n              (gutterClick)=\"toggleSidebar()\"\r\n              (gutterDblClick)=\"toggleSidebar()\">\r\n\r\n      <as-split-area [size]=\"25\"\r\n                     [minSize]=\"0\"\r\n                     [maxSize]=\"50\"\r\n                     #area1=\"asSplitArea\" id=\"asSplitArea1\">\r\n        <div class=\"leftmenuExtendedProperties\">\r\n          <!-- Fixed Top Section -->\r\n          <div class=\"database-section\">\r\n            <app-database-selector></app-database-selector>\r\n          </div>\r\n\r\n          <!-- Scrollable Bottom Section -->\r\n          <div class=\"menu-section\">\r\n            <app-leftmenu></app-leftmenu>\r\n          </div>\r\n        </div>\r\n      </as-split-area>\r\n\r\n\r\n\r\n      <!-- Right Panel - Main Content -->\r\n      <as-split-area [size]=\"75\"\r\n                     [ngClass]=\"status ? 'ShowFullPageMode' : 'RemoveFullPageMode'\"\r\n                     #area2=\"asSplitArea\"\r\n                     id=\"asSplitArea2\">\r\n        <div class=\"main-area\">\r\n          <button class=\"menu-toggle\" (click)=\"toggleSidebar()\">\r\n            <i class=\"fa fa-bars\"></i>\r\n          </button>\r\n          <div id=\"center\">\r\n            <app-main-page></app-main-page>\r\n          </div>\r\n        </div>\r\n      </as-split-area>\r\n\r\n    </as-split>\r\n  </div>\r\n\r\n  <!-- Overlay for Sidebar -->\r\n  <div class=\"overlay\" [class.active]=\"!status\" (click)=\"toggleSidebar()\"></div>\r\n</div>\r\n";

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
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/database/components/database-details/database-details.component.html": (
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/database/components/database-details/database-details.component.html ***!
    \****************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_database_components_databaseDetails_databaseDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\r\n<div *ngIf=\"isLoading\"  >\r\n  <p>Loading database information... ⏳</p>\r\n</div>\r\n<div *ngIf=\"!isLoading\">\r\n\r\n  <amexio-accordion [multi-open]=\"true\">\r\n    <!-- Database Tab -->\r\n    <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Database\" [active]=\"true\">\r\n      <div class=\"table\">\r\n        <div class=\"cell\">\r\n          <h3>\r\n            <p class=\"fa fa-database\">\r\n              {{databaseMetaData.currentDatabaseName}}\r\n            </p>\r\n          </h3>\r\n        </div>\r\n      </div>\r\n    </amexio-accordion-tab>\r\n    <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Object Types\" [active]=\"true\">\r\n      <div class=\"table\">\r\n        <div class=\"cell\">\r\n          <ul>\r\n            <li *ngFor=\"let item of objectTypeItems\">\r\n              <a [routerLink]=\"item.routing\" style=\"text-decoration: none;\">\r\n                <app-object-type-item [icon]=\"item.icon\"\r\n                                      [label]=\"item.label\"\r\n                                      [count]=\"item.count\"\r\n                                      [visible]=\"item.visible\">\r\n                </app-object-type-item>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </amexio-accordion-tab>\r\n    <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Database Properties\" [active]=\"true\">\r\n      <div class=\"table\">\r\n        <div class=\"row header\">\r\n          <div class=\"cell\">Property</div>\r\n          <div class=\"cell\">Value</div>\r\n        </div>\r\n\r\n        <div *ngFor=\"let property of databaseMetaData.serverProperties\" class=\"row\">\r\n          <div class=\"cell\" data-title=\"Property\">{{property.name}}</div>\r\n          <div class=\"cell\" data-title=\"Value\">{{property.value}}</div>\r\n        </div>\r\n      </div>\r\n    </amexio-accordion-tab>\r\n    <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Database Options\" [active]=\"true\">\r\n      <div class=\"table\">\r\n        <div class=\"row header\">\r\n          <div class=\"cell\">Property</div>\r\n          <div class=\"cell\">Value</div>\r\n        </div>\r\n\r\n        <div *ngFor=\"let option of databaseMetaData.serverAdvanceProperties\" class=\"row\">\r\n          <div class=\"cell\" data-title=\"Property\">{{option.name}}</div>\r\n          <div class=\"cell\" data-title=\"Value\">{{option.value}}</div>\r\n        </div>\r\n      </div>\r\n    </amexio-accordion-tab>\r\n    <!-- Files Tab -->\r\n    <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Files\" [active]=\"true\">\r\n      <div class=\"table\">\r\n        <div class=\"row header\">\r\n          <div class=\"cell\">Type</div>\r\n          <div class=\"cell\">File Locations </div>\r\n          <div class=\"cell\">Current Size</div>\r\n          <div class=\"cell\">Max Size in MB</div>\r\n          <div class=\"cell\">Growth Type</div>\r\n        </div>\r\n\r\n        <div *ngFor=\"let file of databaseMetaData.fileInformations\" class=\"row\">\r\n          <div class=\"cell\" data-title=\"fileType\">{{file.fileType}}</div>\r\n          <div class=\"cell\" data-title=\"fileLocation\">{{file.fileLocation}} MB</div>\r\n          <div class=\"cell\" data-title=\"currentSizeMB\">{{file.currentSizeMB}}</div>\r\n          <div class=\"cell\" data-title=\"maxSizeMB\">{{file.maxSizeMB}}</div>\r\n          <div class=\"cell\" data-title=\"growthType\">{{file.growthType}}</div>\r\n        </div>\r\n      </div>\r\n    </amexio-accordion-tab>\r\n  </amexio-accordion>\r\n\r\n</div>\r\n";

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
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/database/components/object-type-item/object-type-item.component.html": (
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/database/components/object-type-item/object-type-item.component.html ***!
    \****************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_database_components_objectTypeItem_objectTypeItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<li *ngIf=\"visible\">\r\n    <div>\r\n      <img [src]=\"icon\" />\r\n      <a>{{ label }}</a>\r\n      <i *ngIf=\"count\" class=\"fa fa-5x fa-border icon-grey badge\">\r\n        {{ count }}\r\n      </i>\r\n    </div>\r\n  </li>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/aggregate-function/aggregate-function.component.html": (
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/aggregate-function/aggregate-function.component.html ***!
    \*******************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_function_component_aggregateFunction_aggregateFunctionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\r\n<amexio-accordion [multi-open]=\"true\">\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Aggregate Functions \" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n\r\n    <div class=\"table\">\r\n      <div class=\"cell\">\r\n        <h5>\r\n          <img src=\"./assets/icons/Function_Scalar.png\" style=\"width: 30px !important;\">\r\n          {{selectedFunction}}\r\n        </h5>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"MS Description \" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <div class=\"table\" *ngIf=\"!iblnShowEditBox\">\r\n      <div class=\"cell\">\r\n        <p>\r\n          {{functionMetadata?.extendedPropertyInfo?.description}}\r\n        </p>\r\n      </div>\r\n      <a (click)=\"ShowModelPOP($event)\" class=\"btn btn-default btn-lg a-btn-slide-text\">\r\n        <span class=\"fa fa-edit\"></span>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"form-group\" *ngIf=\"iblnShowEditBox\">\r\n      <textarea class=\"form-control\" rows=\"5\" id=\"comment\" [(ngModel)]=\"ms_description\"> </textarea>\r\n      <div class=\"form-group\" style=\"margin-left: 94%;\">\r\n\r\n        <a (click)=\"CancelTableMsDesciption($event)\"><i class=\"fa fa-2x fa-times\"></i></a>&nbsp;\r\n        <a (click)=\"SaveTableMsDesciption($event)\"><i class=\"fa fa-2x fa-save\"></i></a>\r\n      </div>\r\n    </div>\r\n\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Function Properties\" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Uses ansi Nulls</div>\r\n        <div class=\"cell\">Uses quoted identifier</div>\r\n        <div class=\"cell\">Create date</div>\r\n        <div class=\"cell\">Modify date</div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"cell\">{{ functionMetadata?.properties.uses_ansi_nulls}} </div>\r\n        <div class=\"cell\">{{ functionMetadata?.properties.uses_quoted_identifier}}</div>\r\n        <div class=\"cell\">{{ functionMetadata?.properties.create_date}} </div>\r\n        <div class=\"cell\">{{ functionMetadata?.properties.modify_date}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Parameters\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Parameter Name</div>\r\n        <div class=\"cell\">Type</div>\r\n        <div class=\"cell\">Length</div>\r\n        <div class=\"cell\">Precision</div>\r\n        <div class=\"cell\">Scale</div>\r\n        <div class=\"cell\">Param Order</div>\r\n        <div class=\"cell\">Collation</div>\r\n        <div class=\"cell\">ExtendedProperty</div>\r\n      </div>\r\n\r\n      <div *ngFor=\"let Property of functionMetadata?.parameters \" class=\"row\">\r\n        <div class=\"cell\">{{Property.parameterName}} </div>\r\n        <div class=\"cell\">{{Property.type}}</div>\r\n        <div class=\"cell\">{{Property.length}} </div>\r\n        <div class=\"cell\">{{Property.Precision}}</div>\r\n        <div class=\"cell\">{{Property.scale}} </div>\r\n        <div class=\"cell\">{{Property.paramOrder}}</div>\r\n        <div class=\"cell\">{{Property.collation}} </div>\r\n        <div class=\"cell\">{{Property.extendedProperty}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Function Create Script \" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <div>\r\n      <ngx-prism [language]=\"sql\">\r\n        {{functionMetadata?.definition}}\r\n      </ngx-prism>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Used By \" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"table\">\r\n        <div class=\"row header\">\r\n          <div class=\"cell\">Name</div>\r\n          <div class=\"cell\">Type</div>\r\n          <div class=\"cell\">Updated</div>\r\n          <div class=\"cell\">Selected</div>\r\n          <div class=\"cell\">Column Name</div>\r\n        </div>\r\n        <div *ngFor=\"let Property of functionMetadata?.dependencies \" class=\"row\">\r\n          <div class=\"cell\">   <a class=\"cell\" [routerLink]=\"['/tblName',Property.NevigationLink]\"> {{Property.name}}</a> </div>\r\n          <div class=\"cell\">{{Property.type}}</div>\r\n          <div class=\"cell\">{{Property.updated}} </div>\r\n          <div class=\"cell\">{{Property.selected}}</div>\r\n          <div class=\"cell\">{{Property.column_name}} </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </amexio-accordion-tab>\r\n</amexio-accordion>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/aggregate-functions/aggregate-functions.component.html": (
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/aggregate-functions/aggregate-functions.component.html ***!
    \*********************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_function_component_aggregateFunctions_aggregateFunctionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\r\n \r\n<amexio-accordion [multi-open]=\"true\">\r\n    <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"All Aggregate Functions \" [gradient]=\"true\"\r\n                          [active]=\"true\">\r\n      <hr />\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Search\" id=\"listSearch\">\r\n      <hr />\r\n      <div class=\"table\">\r\n        <div class=\"row header\">\r\n          <div class=\"cell\">Aggregate Functions </div>\r\n          <div class=\"cell\">MS Descriptions</div>\r\n        </div>\r\n        <div *ngFor=\"let function of functionDescriptions | keyvalue\" class=\"row\">\r\n          <div class=\"cell\"><a [routerLink]=\"['/AggregateFunction', function.key ]\"> {{ function.key }}</a></div>\r\n          <div class=\"cell\">{{ function.value }}</div>\r\n        </div>\r\n      </div>\r\n    </amexio-accordion-tab>\r\n  \r\n  </amexio-accordion>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/scalar-function/scalar-function.component.html": (
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/scalar-function/scalar-function.component.html ***!
    \*************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_function_component_scalarFunction_scalarFunctionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\r\n<amexio-accordion [multi-open]=\"true\">\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Scalar Functions \" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n\r\n    <div class=\"table\">\r\n      <div class=\"cell\">\r\n        <h5>\r\n          <img src=\"./assets/icons/Function_Scalar.png\" style=\"width: 30px !important;\">\r\n          {{selectedFunction}}\r\n        </h5>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"MS Description \" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <div class=\"table\" *ngIf=\"!iblnShowEditBox\">\r\n      <div class=\"cell\">\r\n        <p>\r\n          {{functionMetadata?.extendedPropertyInfo?.description}}\r\n        </p>\r\n      </div>\r\n      <a (click)=\"ShowModelPOP($event)\" class=\"btn btn-default btn-lg a-btn-slide-text\">\r\n        <span class=\"fa fa-edit\"></span>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"form-group\" *ngIf=\"iblnShowEditBox\">\r\n      <textarea class=\"form-control\" rows=\"5\" id=\"comment\" [(ngModel)]=\"ms_description\"> </textarea>\r\n      <div class=\"form-group\" style=\"margin-left: 94%;\">\r\n\r\n        <a (click)=\"CancelTableMsDesciption($event)\"><i class=\"fa fa-2x fa-times\"></i></a>&nbsp;\r\n        <a (click)=\"SaveTableMsDesciption($event)\"><i class=\"fa fa-2x fa-save\"></i></a>\r\n      </div>\r\n    </div>\r\n\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Function Properties\" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Uses ansi Nulls</div>\r\n        <div class=\"cell\">Uses quoted identifier</div>\r\n        <div class=\"cell\">Create date</div>\r\n        <div class=\"cell\">Modify date</div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"cell\">{{ functionMetadata?.properties.uses_ansi_nulls}} </div>\r\n        <div class=\"cell\">{{ functionMetadata?.properties.uses_quoted_identifier}}</div>\r\n        <div class=\"cell\">{{ functionMetadata?.properties.create_date}} </div>\r\n        <div class=\"cell\">{{ functionMetadata?.properties.modify_date}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Parameters\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Parameter Name</div>\r\n        <div class=\"cell\">Type</div>\r\n        <div class=\"cell\">Length</div>\r\n        <div class=\"cell\">Precision</div>\r\n        <div class=\"cell\">Scale</div>\r\n        <div class=\"cell\">Param Order</div>\r\n        <div class=\"cell\">Collation</div>\r\n        <div class=\"cell\">ExtendedProperty</div>\r\n      </div>\r\n\r\n      <div *ngFor=\"let Property of functionMetadata?.parameters \" class=\"row\">\r\n        <div class=\"cell\">{{Property.parameterName}} </div>\r\n        <div class=\"cell\">{{Property.type}}</div>\r\n        <div class=\"cell\">{{Property.length}} </div>\r\n        <div class=\"cell\">{{Property.Precision}}</div>\r\n        <div class=\"cell\">{{Property.scale}} </div>\r\n        <div class=\"cell\">{{Property.paramOrder}}</div>\r\n        <div class=\"cell\">{{Property.collation}} </div>\r\n        <div class=\"cell\">{{Property.extendedProperty}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Function Create Script \" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <div>\r\n      <ngx-prism [language]=\"sql\">\r\n        {{functionMetadata?.definition}}\r\n      </ngx-prism>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Used By \" [active]=\"true\"> \r\n    <div class=\"table\">\r\n      <div class=\"table\">\r\n        <div class=\"row header\">\r\n          <div class=\"cell\">Name</div>\r\n          <div class=\"cell\">Type</div>\r\n          <div class=\"cell\">Updated</div>\r\n          <div class=\"cell\">Selected</div>\r\n          <div class=\"cell\">Column Name</div> \r\n        </div> \r\n        <div *ngFor=\"let Property of functionMetadata?.dependencies \" class=\"row\">\r\n          <div class=\"cell\">   <a class=\"cell\" [routerLink]=\"['/tblName',Property.NevigationLink]\"> {{Property.name}}</a> </div>\r\n          <div class=\"cell\">{{Property.type}}</div>\r\n          <div class=\"cell\">{{Property.updated}} </div>\r\n          <div class=\"cell\">{{Property.selected}}</div>\r\n          <div class=\"cell\">{{Property.column_name}} </div> \r\n        </div>\r\n      </div>\r\n    </div> \r\n\r\n  </amexio-accordion-tab>\r\n</amexio-accordion>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/scalar-functions/scalar-functions.component.html": (
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/scalar-functions/scalar-functions.component.html ***!
    \***************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_function_component_scalarFunctions_scalarFunctionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<amexio-accordion [multi-open]=\"true\">\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"All Scalar Functions \" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <hr />\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search\" id=\"listSearch\">\r\n    <hr />\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Scalar Functions </div>\r\n        <div class=\"cell\">MS Descriptions</div>\r\n      </div>\r\n      <div *ngFor=\"let scalarfunction of functionDescriptions | keyvalue\" class=\"row\">\r\n\r\n        <div class=\"cell\"><a [routerLink]=\"['/ScalarFunction', scalarfunction.key ]\"> {{ scalarfunction.key }}</a></div>\r\n        <div class=\"cell\">{{ scalarfunction.value }}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n</amexio-accordion>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/table-value-function/table-value-function.component.html": (
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/table-value-function/table-value-function.component.html ***!
    \***********************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_function_component_tableValueFunction_tableValueFunctionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\r\n<amexio-accordion [multi-open]=\"true\">\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Table Value Functions \" [gradient]=\"true\"\r\n                        [active]=\"true\"> \r\n    <div class=\"table\">\r\n      <div class=\"cell\">\r\n        <h5>\r\n          <img src=\"./assets/icons/Function_Table.png\" style=\"width: 30px !important;\">\r\n          {{selectedFunction}}\r\n        </h5>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"MS Description \" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <div class=\"table\" *ngIf=\"!iblnShowEditBox\">\r\n      <div class=\"cell\">\r\n        <p>\r\n          {{functionMetadata?.extendedPropertyInfo?.description}}\r\n        </p>\r\n      </div>\r\n      <a (click)=\"ShowModelPOP($event)\" class=\"btn btn-default btn-lg a-btn-slide-text\">\r\n        <span class=\"fa fa-edit\"></span>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"form-group\" *ngIf=\"iblnShowEditBox\">\r\n      <textarea class=\"form-control\" rows=\"5\" id=\"comment\" [(ngModel)]=\"ms_description\"> </textarea>\r\n      <div class=\"form-group\" style=\"margin-left: 94%;\">\r\n\r\n        <a (click)=\"CancelTableMsDesciption($event)\"><i class=\"fa fa-2x fa-times\"></i></a>&nbsp;\r\n        <a (click)=\"SaveTableMsDesciption($event)\"><i class=\"fa fa-2x fa-save\"></i></a>\r\n      </div>\r\n    </div>\r\n\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Function Properties\" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Uses ansi Nulls</div>\r\n        <div class=\"cell\">Uses quoted identifier</div>\r\n        <div class=\"cell\">Create date</div>\r\n        <div class=\"cell\">Modify date</div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"cell\">{{ functionMetadata?.properties.uses_ansi_nulls}} </div>\r\n        <div class=\"cell\">{{ functionMetadata?.properties.uses_quoted_identifier}}</div>\r\n        <div class=\"cell\">{{ functionMetadata?.properties.create_date}} </div>\r\n        <div class=\"cell\">{{ functionMetadata?.properties.modify_date}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Parameters\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Parameter Name</div>\r\n        <div class=\"cell\">Type</div>\r\n        <div class=\"cell\">Length</div>\r\n        <div class=\"cell\">Precision</div>\r\n        <div class=\"cell\">Scale</div>\r\n        <div class=\"cell\">Param Order</div>\r\n        <div class=\"cell\">Collation</div>\r\n        <div class=\"cell\">ExtendedProperty</div>\r\n      </div>\r\n\r\n      <div *ngFor=\"let Property of functionMetadata?.parameters \" class=\"row\">\r\n        <div class=\"cell\">{{Property.parameterName}} </div>\r\n        <div class=\"cell\">{{Property.type}}</div>\r\n        <div class=\"cell\">{{Property.length}} </div>\r\n        <div class=\"cell\">{{Property.Precision}}</div>\r\n        <div class=\"cell\">{{Property.scale}} </div>\r\n        <div class=\"cell\">{{Property.paramOrder}}</div>\r\n        <div class=\"cell\">{{Property.collation}} </div>\r\n        <div class=\"cell\">{{Property.extendedProperty}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Function Create Script \" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <div>\r\n      <ngx-prism [language]=\"sql\">\r\n        {{functionMetadata?.definition}}\r\n      </ngx-prism>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Used By \" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"table\">\r\n        <div class=\"row header\">\r\n          <div class=\"cell\">Name</div>\r\n          <div class=\"cell\">Type</div>\r\n          <div class=\"cell\">Updated</div>\r\n          <div class=\"cell\">Selected</div>\r\n          <div class=\"cell\">Column Name</div>\r\n        </div>\r\n        <div *ngFor=\"let Property of functionMetadata?.dependencies \" class=\"row\">\r\n          <div class=\"cell\">   <a class=\"cell\" [routerLink]=\"['/tblName',Property.NevigationLink]\"> {{Property.name}}</a> </div>\r\n          <div class=\"cell\">{{Property.type}}</div>\r\n          <div class=\"cell\">{{Property.updated}} </div>\r\n          <div class=\"cell\">{{Property.selected}}</div>\r\n          <div class=\"cell\">{{Property.column_name}} </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </amexio-accordion-tab>\r\n</amexio-accordion>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/table-value-functions/table-value-functions.component.html": (
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/table-value-functions/table-value-functions.component.html ***!
    \*************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_function_component_tableValueFunctions_tableValueFunctionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\r\n<amexio-accordion [multi-open]=\"true\">\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"All Table Functions \" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <hr />\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search\" id=\"listSearch\">\r\n    <hr />\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Table Functions </div>\r\n        <div class=\"cell\">MS Descriptions</div>\r\n      </div>\r\n      <div *ngFor=\"let tablevaluefunctions of functionDescriptions | keyvalue\" class=\"row\">\r\n        <div class=\"cell\"><a [routerLink]=\"['/TableValueFunction', tablevaluefunctions.key ]\"> {{ tablevaluefunctions.key }}</a></div>\r\n        <div class=\"cell\">{{ tablevaluefunctions.value }}</div>\r\n      </div> \r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n</amexio-accordion>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/left-menu/components/leftmenu/leftmenu.component.html": (
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/left-menu/components/leftmenu/leftmenu.component.html ***!
    \*************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_leftMenu_components_leftmenu_leftmenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\" \">\r\n    <div class=\"cell\">  \r\n      <amexio-tree-filter-view [data-reader]=\"'data'\"\r\n                               (nodeClick)=\"getNodeData($event)\"\r\n                               [data]=\"leftmenujsonvalues\">\r\n      </amexio-tree-filter-view> \r\n    </div>\r\n  </div>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/procedure/components/procedure/procedure.component.html": (
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/procedure/components/procedure/procedure.component.html ***!
    \***************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_procedure_components_procedure_procedureComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<amexio-accordion [multi-open]=\"true\">\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Stored Procedure \" [gradient]=\"true\" [active]=\"true\">\r\n\r\n    <div class=\"table\">\r\n      <div class=\"cell\">\r\n        <div>\r\n          <h5>\r\n            <img src=\"./assets/icons/StoredProcedure.png\" style=\"width: 30px !important;\">\r\n            {{storedProcedureName}}\r\n          </h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette\r\n                        [color-palette]=\"''\"\r\n                        header=\"MS Description\"\r\n                        [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n\r\n    <!-- Display Mode -->\r\n    <ng-container *ngIf=\"!iblnShowEditBox; else editMode\">\r\n      <div class=\"description-container\">\r\n        <a (click)=\"toggleEditBox()\" class=\"edit-icon\">\r\n          <i class=\"fa fa-edit\"></i>\r\n        </a>\r\n        <p class=\"description-text\">\r\n          {{ storedProcedureMetadata?.storedProcedureInfo?.extendedProperty }}\r\n        </p>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!-- Edit Mode -->\r\n    <ng-template #editMode>\r\n      <div class=\"edit-container\">\r\n        <textarea class=\"form-control edit-textarea\"\r\n                  rows=\"4\"\r\n                  [(ngModel)]=\"storedProcedureMetadata.storedProcedureInfo.extendedProperty\">\r\n      </textarea>\r\n\r\n        <div class=\"action-buttons\">\r\n          <a (click)=\"CancelStoreProcMsDesciption()\" class=\"cancel-btn\">\r\n            <i class=\"fa fa-2x fa-times\"></i>\r\n          </a>\r\n          <a (click)=\"updateProcedureDescription()\" class=\"save-btn\">\r\n            <i class=\"fa fa-2x fa-save\"></i>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n\r\n  </amexio-accordion-tab>\r\n\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Objects dependncy Tree\" [gradient]=\"true\" [active]=\"true\">\r\n    <p-tree [value]=\"filesTree\"\r\n            layout=\"horizontal\"\r\n            selectionMode=\"single\">\r\n    </p-tree>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Parameters\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Edit</div>\r\n        <div class=\"cell\">Name</div>\r\n        <div class=\"cell\">Type</div>\r\n        <div class=\"cell\">Max Length (Bytes)</div>\r\n        <div class=\"cell\">Parameter Order</div>\r\n        <div class=\"cell\">Collation</div>\r\n        <div class=\"cell\">MS Description</div>\r\n      </div>\r\n\r\n      <div *ngFor=\"let property of storedProcedureMetadata?.parameters\" class=\"row\">\r\n        <!-- Edit Button at the Front -->\r\n        <div class=\"cell edit-cell\">\r\n          <a (click)=\"toggleParameterEdit(property)\" class=\"edit-icon\">\r\n            <span class=\"fa fa-edit\"></span>\r\n          </a>\r\n        </div>\r\n        <div class=\"cell\">{{ property.parameterName }}</div>\r\n        <div class=\"cell\">{{ property.type }}</div>\r\n        <div class=\"cell\">{{ property.length }}</div>\r\n        <div class=\"cell\">{{ property.parameterOrder }}</div>\r\n        <div class=\"cell\">{{ property.collation }}</div>\r\n\r\n        <!-- MS Description Column -->\r\n        <div class=\"cell\">\r\n          <div *ngIf=\"!property.isEditing\">\r\n            <p>{{ property.extendedProperty }}</p>\r\n          </div>\r\n\r\n          <div *ngIf=\"property.isEditing\">\r\n            <textarea class=\"edit-textarea\" [(ngModel)]=\"property.extendedProperty\"></textarea>\r\n\r\n            <div class=\"action-buttons\">\r\n              <a (click)=\"toggleParameterEdit(property)\" class=\"cancel-btn\">\r\n                <i class=\"fa fa-times\"></i>\r\n              </a>\r\n              <a (click)=\"updateParameterDescription(property)\" class=\"save-btn\">\r\n                <i class=\"fa fa-save\"></i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Create Script\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"code-container\">\r\n      <ngx-prism *ngIf=\"storedProcedureMetadata?.createScript?.procedureDefinition\" [language]=\"'sql'\">\r\n        {{ storedProcedureMetadata?.createScript?.procedureDefinition }}\r\n      </ngx-prism>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Used by \" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\"> Referenced object name </div>\r\n      </div>\r\n      <div *ngFor=\"let property of storedProcedureMetadata?.dependencies \" class=\"row\">\r\n        <div class=\"cell\"> {{property.referencedObjectName}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  \r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Execution Plan\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"execution-plan-container\">\r\n      <div id=\"container\"></div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n</amexio-accordion>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/procedure/components/procedures/procedures.component.html": (
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/procedure/components/procedures/procedures.component.html ***!
    \*****************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_procedure_components_procedures_proceduresComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<!-- <amexio-accordion [multi-open]=\"true\">\r\n    <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Tables\" [active]=\"true\">\r\n      <p-table [columns]=\"cols\" [value]=\"tables\" dataKey=\"tableName\" [paginator]=\"true\" [rows]=\"10\">  \r\n        <ng-template pTemplate=\"header\" let-columns>\r\n          <tr>\r\n            <th style=\"width: 4em\"></th>\r\n            <th>Table Name</th>\r\n            <th>Description</th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-expanded=\"expanded\" let-columns=\"columns\">\r\n          <tr>\r\n            <td>\r\n              <a href=\"#\" [pRowToggler]=\"rowData\">\r\n                <i [ngClass]=\"expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'\"></i>\r\n              </a>\r\n            </td>\r\n            <td class=\"cell\">{{rowData.tableName}}</td>\r\n            <td class=\"cell\">{{rowData.extendedPropertyValue}}</td>\r\n          </tr>\r\n        </ng-template>  \r\n        <ng-template pTemplate=\"rowexpansion\" let-rowData let-columns=\"columns\">\r\n          <tr>\r\n            <td [attr.colspan]=\"columns.length + 1\">\r\n              <div class=\"table\">\r\n                <div class=\"row header\">\r\n                  <div class=\"cell\">Column Name</div>\r\n                  <div class=\"cell\">Description</div>\r\n                </div>\r\n                <div class=\"row\" *ngFor=\"let columndetails of rowData.tableColumns\">\r\n                  <div class=\"cell\">{{columndetails.columnName}}</div>\r\n                  <div class=\"cell\">{{columndetails.extendedPropertyValue}}</div>\r\n                </div>\r\n              </div>\r\n              <hr />\r\n            </td>\r\n          </tr>\r\n        </ng-template>  \r\n      </p-table>\r\n    </amexio-accordion-tab>\r\n  </amexio-accordion>\r\n   -->\r\n\r\n   <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Store Procerdure Extended Properties\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Store Procedures</div>\r\n        <div class=\"cell\">Extended Properties Value</div> \r\n      </div> \r\n      <div *ngFor=\"let sp of storedProcedures\" class=\"row\">\r\n        <div class=\"cell\"><a  [routerLink]=\"['/Storeprocedure',sp.storedProcedure]\">{{sp.storedProcedure}}</a></div>\r\n        <div class=\"cell\">{{sp.extendedProperty}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/schema/components/schema/schema.component.html": (
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/schema/components/schema/schema.component.html ***!
    \******************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_schema_components_schema_schemaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<amexio-accordion [multi-open]=\"true\">\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Schema Procedure \" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"cell\">\r\n        <div>\r\n          <h5>\r\n            <img src=\"./assets/icons/StoredProcedure.png\" style=\"width: 30px !important;\">\r\n            {{schemaName}}\r\n          </h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"MS Description\" [active]=\"true\">\r\n    <div class=\"table\" *ngIf=\"!iblnShowEditBox\">\r\n      <div class=\"cell\">\r\n        <p>{{ schema?.description?.description }}</p>\r\n      </div>\r\n      <a (click)=\"ShowModelPOP($event)\" class=\"btn btn-default btn-lg a-btn-slide-text\">\r\n        <span class=\"fa fa-edit\"></span>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"form-group\" *ngIf=\"iblnShowEditBox\">\r\n      <textarea class=\"form-control\" rows=\"5\" id=\"comment\"></textarea>\r\n      <div class=\"form-group text-right\">\r\n        <a (click)=\"CancelTableMsDesciption($event)\"><i class=\"fa fa-2x fa-times\"></i></a>&nbsp;\r\n        <a (click)=\"SaveTableMsDesciption($event)\"><i class=\"fa fa-2x fa-save\"></i></a>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Script\" [gradient]=\"true\" [active]=\"true\">\r\n    <div>{{schema?.script}}</div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Used by\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Referrence</div>\r\n        <div class=\"cell\">Type</div>\r\n      </div>\r\n      <div *ngFor=\"let Property of schema?.objectsUsedBySchemaAsync \" class=\"row\">\r\n        <div class=\"cell\">{{Property.objectName}} </div>\r\n        <div class=\"cell\">{{Property.objectType}} </div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n</amexio-accordion>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/schema/components/schemas/schemas.component.html": (
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/schema/components/schemas/schemas.component.html ***!
    \********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_schema_components_schemas_schemasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<amexio-accordion [multi-open]=\"true\">\r\n\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"All Schemas\" [active]=\"true\">\r\n    <hr />\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n    <hr />\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Schemas</div>\r\n        <div class=\"cell\">MS Descriptions</div>\r\n      </div>\r\n      <div *ngFor=\"let Property of schemas   \" class=\"row\">\r\n        <a [innerHTML]=\"Property.schemaName  \" class=\"cell\" data-title=\"Property\"> {{Property.schemaName}}</a>\r\n        <div [innerHTML]=\"Property.description  \" class=\"cell\" data-title=\"Value\">{{Property.description}}</div>\r\n\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n</amexio-accordion>\r\n";

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
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/table/components/table/edit-column-description-dialog/edit-column-description-dialog.component.html": (
  /*!***********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table/components/table/edit-column-description-dialog/edit-column-description-dialog.component.html ***!
    \***********************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_table_components_table_editColumnDescriptionDialog_editColumnDescriptionDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<p-dialog header=\"Edit Column Description\"\r\n          [(visible)]=\"displayColumnDialog\"\r\n          modal=\"true\"\r\n          [responsive]=\"true\"\r\n          styleClass=\"custom-dialog\"\r\n          [style]=\"{width: '350px', minWidth: '200px'}\"\r\n          [minY]=\"70\"\r\n          [maximizable]=\"true\"\r\n          [baseZIndex]=\"10000\">\r\n  <div class=\"p-fluid\">\r\n    <div class=\"p-formgrid p-grid\">\r\n      <div class=\"p-field p-col\">\r\n        <label for=\"value\">Column Extended Properties Value</label>\r\n        <textarea rows=\"5\"\r\n                  cols=\"30\"\r\n                  pInputTextarea\r\n                  [autoResize]=\"true\"\r\n                  [(ngModel)]=\"selectedColumn.description\"\r\n                  placeholder=\"Enter Description\">\r\n        </textarea>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <p-footer>\r\n    <button pButton\r\n            label=\"Save\"\r\n            icon=\"pi pi-check\"\r\n            (click)=\"saveDescription()\"\r\n            class=\"p-button-success\">\r\n    </button>\r\n    <button pButton\r\n            label=\"Cancel\"\r\n            icon=\"pi pi-times\"\r\n            class=\"p-button-secondary\"\r\n            (click)=\"cancelEdit()\">\r\n    </button>\r\n  </p-footer>\r\n</p-dialog>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/table/components/table/edit-description-dialog/edit-description-dialog.component.html": (
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table/components/table/edit-description-dialog/edit-description-dialog.component.html ***!
    \*********************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_table_components_table_editDescriptionDialog_editDescriptionDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<p-dialog header=\"Edit Description\"\r\n          [(visible)]=\"displayDialog\"\r\n          modal=\"true\"\r\n          [responsive]=\"true\"\r\n          styleClass=\"custom-dialog\"\r\n          [style]=\"{width: '350px', minWidth: '200px'}\"\r\n          [minY]=\"70\"\r\n          [maximizable]=\"true\"\r\n          [baseZIndex]=\"10000\">\r\n  <div class=\"p-fluid\">\r\n    <div class=\"p-formgrid p-grid\">\r\n      <div class=\"p-field p-col\">\r\n        <label for=\"name\">Extended Properties Name</label>\r\n        <textarea rows=\"5\"\r\n                  cols=\"30\"\r\n                  [disabled]=\"true\"\r\n                  pInputTextarea\r\n                  [autoResize]=\"true\"\r\n                  [(ngModel)]=\"selectedDescription.name\"\r\n                  placeholder=\"Enter name\">\r\n        </textarea>\r\n      </div>\r\n      <div class=\"p-field p-col\">\r\n        <label for=\"value\">Extended Properties Value</label>\r\n        <textarea rows=\"5\"\r\n                  cols=\"30\"\r\n                  pInputTextarea\r\n                  [autoResize]=\"true\"\r\n                  [(ngModel)]=\"selectedDescription.value\"\r\n                  placeholder=\"Enter value\">\r\n        </textarea>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <p-footer>\r\n    <button *ngIf=\"hasEditPermission\"\r\n            pButton\r\n            label=\"Save\"\r\n            icon=\"pi pi-check\"\r\n            (click)=\"saveDescription()\"\r\n            class=\"p-button-success\">\r\n    </button>\r\n    <button pButton\r\n            label=\"Cancel\"\r\n            icon=\"pi pi-times\"\r\n            class=\"p-button-secondary\"\r\n            (click)=\"cancelEdit()\">\r\n    </button>\r\n  </p-footer>\r\n</p-dialog>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/table/components/table/sql-script-viewer/sql-script-viewer.component.html": (
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table/components/table/sql-script-viewer/sql-script-viewer.component.html ***!
    \*********************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_table_components_table_sqlScriptViewer_sqlScriptViewerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"table\">\r\n    <div class=\"row\">\r\n      <pre>{{ script }}</pre>\r\n    </div>\r\n  </div>\r\n ";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/table/components/table/table.component.html": (
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table/components/table/table.component.html ***!
    \***************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_table_components_table_tableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div *ngIf=\"isLoading\">\r\n  <p>Loading Table information... ⏳</p>\r\n</div> \r\n\r\n  <amexio-accordion [multi-open]=\"true\" *ngIf=\"!isLoading\">\r\n    <!-- Table Information -->\r\n    <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Table: {{tableName}}\" [gradient]=\"true\" [active]=\"true\">\r\n      <div class=\"table\">\r\n        <div class=\"cell\">\r\n          <h5>\r\n            <img src=\"./assets/icons/Table.png\" style=\"width: 30px !important;\" />\r\n            {{tableName}}\r\n          </h5>\r\n        </div>\r\n      </div>\r\n    </amexio-accordion-tab>\r\n\r\n    <!-- Extended Properties -->\r\n    <amexio-accordion-tab *ngIf=\"descriptions && descriptions.length > 0\" amexioColorPalette [color-palette]=\"''\" header=\"Table Extended Properties\" [gradient]=\"true\" [active]=\"true\">\r\n      <div class=\"table\">\r\n        <div class=\"row header\">\r\n          <div class=\"cell\">Extended Properties Name</div>\r\n          <div class=\"cell\">Extended Properties Value</div>\r\n          <div class=\"cell\">Extended Properties of Table</div>\r\n          <div *ngIf=\"hasEditPermission\" class=\"cell\">Actions</div>\r\n        </div>\r\n        <div *ngFor=\"let description of descriptions\" class=\"row\">\r\n          <div class=\"cell\">{{description.name}}</div>\r\n          <div class=\"cell\">{{description.value}}</div>\r\n          <div class=\"cell\">{{description.table}}</div>\r\n          <div *ngIf=\"hasEditPermission\" class=\"cell\">\r\n            <button type=\"button\" (click)=\"editDescription(description)\" pButton icon=\"pi pi-pencil\"></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </amexio-accordion-tab>\r\n\r\n    <!-- Objects Dependency Tree -->\r\n    <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Objects Dependency Tree\" [gradient]=\"true\" [active]=\"true\">\r\n      <p-tree [value]=\"filesTree\" layout=\"horizontal\" selectionMode=\"single\"></p-tree>\r\n    </amexio-accordion-tab>\r\n\r\n    <!-- Table Index Fragmentation -->\r\n    <amexio-accordion-tab *ngIf=\"tableFragmentations && tableFragmentations.length > 0\" amexioColorPalette [color-palette]=\"''\" header=\"Table Index Fragmentation\" [gradient]=\"true\" [active]=\"true\">\r\n      <div class=\"table\">\r\n        <div class=\"row header\">\r\n          <div class=\"cell\">Index Name</div>\r\n        </div>\r\n\r\n        <div *ngFor=\"let property of tableFragmentations\" class=\"row\">\r\n          <div class=\"cell\">\r\n            {{ property.indexName }}\r\n            <progress-bar [progress]=\"getSafeProgress(property.percentFragmented)\"\r\n                          [color-degraded]=\"getDynamicColor(property.percentFragmented)\">\r\n            </progress-bar>\r\n          </div>\r\n        </div>\r\n      </div>  \r\n    </amexio-accordion-tab>\r\n\r\n    <!-- Table Properties -->\r\n    <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Table Properties\" [gradient]=\"true\" [active]=\"true\">\r\n      <div class=\"table\">\r\n        <div class=\"row header\">\r\n          <div class=\"cell\">Property</div>\r\n          <div class=\"cell\">Value</div>\r\n        </div>\r\n        <div *ngFor=\"let property of properties\" class=\"row\">\r\n          <div class=\"cell\">{{property.name}}</div>\r\n          <div class=\"cell\">{{property.value}}</div>\r\n        </div>\r\n      </div>\r\n    </amexio-accordion-tab>\r\n\r\n    <!-- Table Columns -->\r\n    <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Table Columns\" [gradient]=\"true\" [active]=\"true\">\r\n      <div class=\"table\">\r\n        <div class=\"row header\">\r\n\r\n          <div class=\"cell\">Name</div>\r\n          <div class=\"cell\">Data Type</div>\r\n          <div class=\"cell\">Key</div>\r\n          <div class=\"cell\">Max Length (Bytes)</div>\r\n          <div class=\"cell\">Is Nullable</div>\r\n          <div class=\"cell\">Identity</div>\r\n          <div class=\"cell\">Default</div>\r\n          <div class=\"cell\">Description</div>\r\n          <div *ngIf=\"hasEditPermission\" class=\"cell\">Actions</div>\r\n        </div>\r\n        <div *ngFor=\"let column of columns\" class=\"row\">\r\n          <div class=\"cell\">{{column.columnName}}</div>\r\n          <div class=\"cell\">{{column.dataType}}</div>\r\n          <div class=\"cell\">{{column.key}}</div>\r\n          <div class=\"cell\">{{column.maxLength}}</div>\r\n          <div class=\"cell\">{{column.allowNulls}}</div>\r\n          <div class=\"cell\">{{column.identity}}</div>\r\n          <div class=\"cell\">{{column.default}}</div>\r\n          <div class=\"cell\">{{column.description}}</div>\r\n          <div class=\"cell\" style=\"display:none\">{{column.extendedPropertyName}}</div>\r\n          <div class=\"cell\" style=\"display:none\">{{column.extendedPropertyValue}}</div>\r\n\r\n          <!--public string ExtendedPropertyName { get; set; }\r\n  public string ExtendedPropertyValue { get; set; }-->\r\n\r\n          <div *ngIf=\"hasEditPermission\" class=\"cell\">\r\n            <button *ngIf=\"hasEditPermission\" pButton type=\"button\" icon=\"pi pi-pencil\" (click)=\"editColumnDescription(column)\"></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </amexio-accordion-tab>\r\n\r\n    <!-- Table Indices -->\r\n    <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Table Indices\" [gradient]=\"true\" [active]=\"true\">\r\n      <div class=\"table\">\r\n        <div class=\"row header\">\r\n          <div class=\"cell\">Name</div>\r\n          <div class=\"cell\">Columns Name</div>\r\n          <div class=\"cell\">Index Type</div>\r\n        </div>\r\n        <div *ngFor=\"let index of indices\" class=\"row\">\r\n          <div class=\"cell\">{{index.indexName}}</div>\r\n          <div class=\"cell\">{{index.columns}}</div>\r\n          <div class=\"cell\">{{index.indexType}}</div>\r\n        </div>\r\n      </div>\r\n    </amexio-accordion-tab>\r\n\r\n    <!-- Table Key Constraints -->\r\n    <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Table Key Constraints\" [gradient]=\"true\" [active]=\"true\">\r\n      <div class=\"table\">\r\n        <div class=\"row header\">\r\n          <div class=\"cell\">Table View</div>\r\n          <div class=\"cell\">Object Type</div>\r\n          <div class=\"cell\">Constraint Type</div>\r\n          <div class=\"cell\">Constraint Name</div>\r\n          <div class=\"cell\">Details</div>\r\n        </div>\r\n        <div *ngFor=\"let constraint of tableconstraint\" class=\"row\">\r\n          <div class=\"cell\">{{constraint.table_view}}</div>\r\n          <div class=\"cell\">{{constraint.object_type}}</div>\r\n          <div class=\"cell\">{{constraint.constraint_type}}</div>\r\n          <div class=\"cell\">{{constraint.constraint_name}}</div>\r\n          <div class=\"cell\">{{constraint.details}}</div>\r\n        </div>\r\n      </div>\r\n    </amexio-accordion-tab>\r\n\r\n    <!-- Table Script -->\r\n    <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Create Script\" [gradient]=\"true\" [active]=\"true\">\r\n      <app-code-viewer [code]=\"createScript.script\" [language]=\"'sql'\"></app-code-viewer>\r\n    </amexio-accordion-tab>\r\n\r\n  </amexio-accordion>\r\n  <div *ngIf=\"hasEditPermission\">\r\n    <app-edit-description-dialog [displayDialog]=\"displayDialog\"\r\n                                 [selectedDescription]=\"selectedDescription\"\r\n                                 [hasEditPermission]=\"hasEditPermission\"\r\n                                 (save)=\"saveDescription()\"\r\n                                 (cancel)=\"cancelEdit()\">\r\n    </app-edit-description-dialog>\r\n\r\n    <app-edit-column-description-dialog [displayColumnDialog]=\"displayColumnDialog\"\r\n                                        [selectedColumn]=\"selectedColumn\"\r\n                                        (saveColumnDescription)=\"saveColumnDescription()\"\r\n                                        (cancelColumnEdit)=\"cancelColumnEdit()\">\r\n    </app-edit-column-description-dialog>\r\n\r\n  </div>\r\n\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/table/components/tables/tables.component.html": (
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table/components/tables/tables.component.html ***!
    \*****************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_table_components_tables_tablesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\r\n<div *ngIf=\"isLoading\">\r\n  <p>Loading tables information... ⏳</p>\r\n</div>\r\n\r\n<amexio-accordion [multi-open]=\"true\" *ngIf=\"!isLoading\">\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Tables\" [active]=\"true\">\r\n    <p-table [columns]=\"cols\" [value]=\"tables\" dataKey=\"tableName\" [paginator]=\"true\" [rows]=\"20\">\r\n      <ng-template pTemplate=\"header\" let-columns>\r\n        <tr>\r\n          <th style=\"width: 4em\"></th>\r\n          <th>Table Name</th>\r\n          <th>Description</th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-rowData let-expanded=\"expanded\" let-columns=\"columns\">\r\n        <tr>\r\n          <td>\r\n            <a href=\"#\" [pRowToggler]=\"rowData\">\r\n              <i [ngClass]=\"expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'\"></i>\r\n            </a>\r\n          </td>\r\n          <td class=\"cell\"> <a class=\"cell\" data-title=\"Name\" [routerLink]=\"['/Table',rowData.tableName]\"> {{rowData.tableName}}</a></td>\r\n          <td class=\"cell\">{{rowData.extendedPropertyValue}}</td>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"rowexpansion\" let-rowData let-columns=\"columns\">\r\n        <tr>\r\n          <td [attr.colspan]=\"columns.length + 1\">\r\n            <div class=\"table\">\r\n              <div class=\"row header\">\r\n                <div class=\"cell\">Column Name</div>\r\n                <div class=\"cell\">Description</div>\r\n              </div>\r\n              <div class=\"row\" *ngFor=\"let columndetails of rowData.tableColumns\">\r\n\r\n                <div class=\"cell\">{{columndetails.columnName}}</div>\r\n                <div class=\"cell\">{{columndetails.extendedPropertyValue}}</div>\r\n              </div>\r\n            </div>\r\n            <hr />\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </amexio-accordion-tab>\r\n</amexio-accordion>\r\n";

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
    __webpack_exports__["default"] = "<header class=\"header\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark\">\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n      <i class=\"fa fa-database\"></i> MSSQL Management\r\n    </a>\r\n    \r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" \r\n            aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    \r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\" *ngIf=\"!isAuthenticated\">\r\n          <button class=\"btn btn-outline-light btn-sm\" (click)=\"navigateToLogin()\">\r\n            <i class=\"fa fa-sign-in\"></i> Login\r\n          </button>\r\n        </li>\r\n        \r\n        <li class=\"nav-item dropdown\" *ngIf=\"isAuthenticated\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" \r\n             data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <i class=\"fa fa-user-circle\"></i> \r\n            {{ currentUser?.fullName || currentUser?.userName || 'User' }}\r\n          </a>\r\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n              <i class=\"fa fa-user\"></i> Profile\r\n            </a>\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n              <i class=\"fa fa-cog\"></i> Settings\r\n            </a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" href=\"#\" (click)=\"logout(); $event.preventDefault()\">\r\n              <i class=\"fa fa-sign-out\"></i> Logout\r\n            </a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</header>\r\n";

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
    __webpack_exports__["default"] = "<router-outlet> </router-outlet>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/view/components/view/view.component.html": (
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view/components/view/view.component.html ***!
    \************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_view_components_view_viewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = " \r\n<amexio-accordion [multi-open]=\"true\">\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"View Name\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"\">\r\n      <h5 class=\"\">\r\n        <img src=\"./assets/icons/View.png\" >\r\n        <span>{{ selectedViewName }}</span>\r\n      </h5>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"MS Description\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"ms-description-container\">\r\n      <div class=\"ms-description-content\">\r\n        <!-- Normal Text Display -->\r\n        <div class=\"col-10 description-text\" *ngIf=\"!iblnShowEditBox\">\r\n          <p>{{ selectedViewMetaData?.viewDetails[0]?.viewExtendedProperties }}</p>\r\n        </div>\r\n  \r\n        <!-- Edit Button -->\r\n        <div class=\"col-2 text-right edit-btn-container\" *ngIf=\"!iblnShowEditBox\">\r\n          <a (click)=\"EditView($event)\" class=\"edit-btn\">\r\n            <i class=\"fa fa-edit\"></i>\r\n          </a>\r\n        </div>\r\n      </div>\r\n  \r\n      <!-- Text Area for Editing -->\r\n      <div class=\"form-group edit-box\" *ngIf=\"iblnShowEditBox\">\r\n        <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"editedDescription\"></textarea>\r\n  \r\n        <!-- Action Buttons -->\r\n        <div class=\"text-right mt-2\">\r\n          <a (click)=\"CancelViewMsDesciption($event)\" class=\"btn btn-danger\">\r\n            <i class=\"fa fa-times\"></i> Cancel\r\n          </a>\r\n          <a (click)=\"SaveViewMsDesciption($event)\" class=\"btn btn-success\">\r\n            <i class=\"fa fa-save\"></i> Save\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  \r\n\r\n\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"View Properties\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Uses Ansi Nulls</div>\r\n        <div class=\"cell\">Uses Quoted Identifier</div>\r\n        <div class=\"cell\">Create Date</div>\r\n        <div class=\"cell\">Modify Date</div>\r\n      </div>\r\n      <div *ngFor=\"let Property of selectedViewMetaData.viewProperties\" class=\"row\">\r\n\r\n        <div class=\"cell\">{{Property.uses_ansi_nulls}} </div>\r\n        <div class=\"cell\">{{Property.uses_quoted_identifier}}</div>\r\n        <div class=\"cell\">{{Property.create_date}}</div>\r\n        <div class=\"cell\">{{Property.modify_date}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Columns\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Column Order</div>\r\n        <div class=\"cell\">Column Name</div>\r\n        <div class=\"cell\">Data Type</div>\r\n        <div class=\"cell\">Max Length</div>\r\n        <div class=\"cell\">Precision</div>\r\n        <div class=\"cell\">Scale</div>\r\n      </div>\r\n      <div *ngFor=\"let Property of selectedViewMetaData.viewColumns \" class=\"row\">\r\n\r\n        <div class=\"cell\">{{Property.columnOrder}} </div>\r\n        <div class=\"cell\">{{Property.columnName}}</div>\r\n        <div class=\"cell\">{{Property.dataType}}</div>\r\n        <div class=\"cell\">{{Property.maxLength}}</div>\r\n        <div class=\"cell\">{{Property.precision}}</div>\r\n        <div class=\"cell\">{{Property.scale}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Create Script \" [gradient]=\"true\" [active]=\"true\">\r\n    {{selectedViewMetaData.viewCreateScript.createViewScript}}\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Used By \" [gradient]=\"true\" [active]=\"true\">\r\n\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">View Dependency Name</div>\r\n        <div class=\"cell\">Type</div>\r\n        <div class=\"cell\">Updated</div>\r\n        <div class=\"cell\">Selected</div>\r\n        <div class=\"cell\">Column Name</div>\r\n        <div class=\"cell\">Full Reference Name</div>\r\n      </div>\r\n      <div *ngFor=\"let Property of selectedViewMetaData.viewDependencies \" class=\"row\">\r\n        <a class=\"cell\">{{Property.name}}</a>\r\n        <div class=\"cell\">{{Property.type}}</div>\r\n        <div class=\"cell\">{{Property.updated}}</div>\r\n        <div class=\"cell\">{{Property.selected}}</div>\r\n        <div class=\"cell\">{{Property.column_name}}</div>\r\n        <div class=\"cell\">{{Property.fullReferenceName}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n</amexio-accordion>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/view/components/views/views.component.html": (
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view/components/views/views.component.html ***!
    \**************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_view_components_views_viewsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = " \r\n \r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\"  header=\"Views\" [active]=\"true\">\r\n    <p-table [columns]=\"cols\" [value]=\"viewDetails\" dataKey=\"viewName\" [paginator]=\"true\" [rows]=\"20\">\r\n      <ng-template pTemplate=\"header\" let-columns>\r\n        <tr>\r\n         \r\n          <th>View Name</th>\r\n          <th>Description</th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-rowData let-expanded=\"expanded\" let-columns=\"columns\">\r\n        <tr>\r\n          <td class=\"cell\"> <a class=\"cell\" data-title=\"Name\" [routerLink]=\"['/View',rowData.viewName]\"> {{rowData.viewName}}</a></td>\r\n          <td class=\"cell\">{{rowData.viewExtendedProperties}}</td>\r\n        </tr>\r\n      </ng-template>\r\n     \r\n    </p-table>\r\n  </amexio-accordion-tab>\r\n \r\n";

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
  /***/"./src/app/Triggers/components/database-trigger/database-trigger.component.css": (
  /*!*************************************************************************************!*\
    !*** ./src/app/Triggers/components/database-trigger/database-trigger.component.css ***!
    \*************************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_Triggers_components_databaseTrigger_databaseTriggerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\r\n#Objects li:last-child {\r\n  display: none;\r\n}\r\n\r\n.table {\r\n  margin: 0px 0 3px 0;\r\n  width: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: table;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .table {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.row {\r\n  display: table-row;\r\n  background: #f6f6f6;\r\n}\r\n\r\n.row:nth-of-type(odd) {\r\n    background: #e9e9e9;\r\n  }\r\n\r\n.row.header {\r\n    font-weight: 900;\r\n    color: #ffffff;\r\n    background: #184569 !important;\r\n  }\r\n\r\n.row.green {\r\n    background: #27ae60;\r\n  }\r\n\r\n.row.blue {\r\n    background: #2980b9;\r\n  }\r\n\r\n@media screen and (max-width: 580px) {\r\n  .row {\r\n    padding: 14px 0 7px;\r\n    display: block;\r\n  }\r\n\r\n    .row.header {\r\n      padding: 0;\r\n      height: 6px;\r\n    }\r\n\r\n      .row.header .cell {\r\n        display: none;\r\n      }\r\n\r\n    .row .cell {\r\n      margin-bottom: 10px;\r\n    }\r\n\r\n      .row .cell:before {\r\n        margin-bottom: 3px;\r\n        content: attr(data-title);\r\n        min-width: 98px;\r\n        font-size: 10px;\r\n        line-height: 10px;\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n        color: #969696;\r\n        display: block;\r\n      }\r\n}\r\n\r\n.cell {\r\n  /*  padding: 6px 12px; */\r\n  display: table-cell;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .cell {\r\n    padding: 2px 16px;\r\n    display: block;\r\n  }\r\n}\r\n\r\n.node:hover {\r\n  fill: #ec008c;\r\n  opacity: 1;\r\n}\r\n\r\n.modal-dialog {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.modal-content {\r\n  height: auto;\r\n  min-height: 100%;\r\n  border: 0 none;\r\n  border-radius: 0;\r\n  box-shadow: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVHJpZ2dlcnMvY29tcG9uZW50cy9kYXRhYmFzZS10cmlnZ2VyL2RhdGFiYXNlLXRyaWdnZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHdDQUF3QztFQUN4QyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVFO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCw4QkFBOEI7RUFDaEM7O0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUY7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixjQUFjO0VBQ2hCOztJQUVFO01BQ0UsVUFBVTtNQUNWLFdBQVc7SUFDYjs7TUFFRTtRQUNFLGFBQWE7TUFDZjs7SUFFRjtNQUNFLG1CQUFtQjtJQUNyQjs7TUFFRTtRQUNFLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsZUFBZTtRQUNmLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLHlCQUF5QjtRQUN6QixjQUFjO1FBQ2QsY0FBYztNQUNoQjtBQUNOOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0FBQ1o7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvVHJpZ2dlcnMvY29tcG9uZW50cy9kYXRhYmFzZS10cmlnZ2VyL2RhdGFiYXNlLXRyaWdnZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jT2JqZWN0cyBsaTpsYXN0LWNoaWxkIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gIG1hcmdpbjogMHB4IDAgM3B4IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAudGFibGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxufVxyXG5cclxuICAucm93Om50aC1vZi10eXBlKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZDogI2U5ZTllOTtcclxuICB9XHJcblxyXG4gIC5yb3cuaGVhZGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQ6ICMxODQ1NjkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5yb3cuZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZDogIzI3YWU2MDtcclxuICB9XHJcblxyXG4gIC5yb3cuYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjk4MGI5O1xyXG4gIH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgLnJvdyB7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDAgN3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAgIC5yb3cuaGVhZGVyIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgaGVpZ2h0OiA2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgICAucm93LmhlYWRlciAuY2VsbCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgIC5yb3cgLmNlbGwge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICAgLnJvdyAuY2VsbDpiZWZvcmUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xyXG4gICAgICAgIG1pbi13aWR0aDogOThweDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBjb2xvcjogIzk2OTY5NjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG59XHJcblxyXG4uY2VsbCB7XHJcbiAgLyogIHBhZGRpbmc6IDZweCAxMnB4OyAqL1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgLmNlbGwge1xyXG4gICAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi5ub2RlOmhvdmVyIHtcclxuICBmaWxsOiAjZWMwMDhjO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcblxyXG4ubW9kYWwtZGlhbG9nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBib3JkZXI6IDAgbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuIl19 */";

    /***/
  }),
  /***/"./src/app/Triggers/components/database-trigger/database-trigger.component.ts": (
  /*!************************************************************************************!*\
    !*** ./src/app/Triggers/components/database-trigger/database-trigger.component.ts ***!
    \************************************************************************************/
  /*! exports provided: DatabaseTriggerComponent */
  /***/
  function _src_app_Triggers_components_databaseTrigger_databaseTriggerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DatabaseTriggerComponent", function () {
      return DatabaseTriggerComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_database_trigger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/database-trigger.service */"./src/app/Triggers/services/database-trigger.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var DatabaseTriggerComponent = /*#__PURE__*/function () {
      function DatabaseTriggerComponent(route, triggerService) {
        _classCallCheck(this, DatabaseTriggerComponent);
        this.route = route;
        this.triggerService = triggerService;
        this.iblnShowEditBox = false;
        this.language = 'sql'; // For ngx-prism
        this.tiggersDesc = "";
      }
      return _createClass(DatabaseTriggerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.tiggersName = this.route.snapshot.params.objectname;
          this.getTriggerByName(this.tiggersName);
        }
      }, {
        key: "getTriggerByName",
        value: function getTriggerByName(name) {
          var _this = this;
          this.triggerService.getTriggerByName(name).subscribe(function (data) {
            _this.selectedTrigger = data;
            _this.tiggersDesc = _this.selectedTrigger.description;
          }, function (error) {
            return console.error('Error fetching trigger:', error);
          });
        }
        //mergeTriggerProperty(): void {
        //  this.triggerService.mergeTriggerProperty(this.newTrigger).subscribe(
        //    (message) => {
        //      console.log(message); 
        //    },
        //    (error) => console.error('Error creating/updating trigger:', error)
        //  );
        //}
        // Show edit box for description
      }, {
        key: "ShowModelPOP",
        value: function ShowModelPOP(event) {
          event.preventDefault();
          this.iblnShowEditBox = true;
        }
        // Cancel editing
      }, {
        key: "CancelTableMsDesciption",
        value: function CancelTableMsDesciption(event) {
          event.preventDefault();
          this.iblnShowEditBox = false;
        }
        // Save updated description
      }, {
        key: "SaveTableMsDesciption",
        value: function SaveTableMsDesciption(event) {
          var _this2 = this;
          event.preventDefault();
          this.iblnShowEditBox = false;
          this.selectedTrigger.description = this.tiggersDesc;
          this.triggerService.mergeTriggerProperty(this.selectedTrigger).subscribe(function (message) {
            console.log(message);
            _this2.iblnShowEditBox = false;
            _this2.getTriggerByName(_this2.tiggersName);
          }, function (error) {
            return console.error('Error updating trigger description:', error);
          });
        }
      }]);
    }();
    DatabaseTriggerComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_database_trigger_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseTriggerService"]
      }];
    };
    DatabaseTriggerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-database-trigger',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./database-trigger.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/Triggers/components/database-trigger/database-trigger.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./database-trigger.component.css */"./src/app/Triggers/components/database-trigger/database-trigger.component.css"))["default"]]
    })], DatabaseTriggerComponent);

    /***/
  }),
  /***/"./src/app/Triggers/components/database-triggers/database-triggers.component.css": (
  /*!***************************************************************************************!*\
    !*** ./src/app/Triggers/components/database-triggers/database-triggers.component.css ***!
    \***************************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_Triggers_components_databaseTriggers_databaseTriggersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\r\n#Objects li:last-child {\r\n  display: none;\r\n}\r\n\r\n.table {\r\n  margin: 0px 0 3px 0;\r\n  width: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: table;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .table {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.row {\r\n  display: table-row;\r\n  background: #f6f6f6;\r\n}\r\n\r\n.row:nth-of-type(odd) {\r\n    background: #e9e9e9;\r\n  }\r\n\r\n.row.header {\r\n    font-weight: 900;\r\n    color: #ffffff;\r\n    background: #184569 !important;\r\n  }\r\n\r\n.row.green {\r\n    background: #27ae60;\r\n  }\r\n\r\n.row.blue {\r\n    background: #2980b9;\r\n  }\r\n\r\n@media screen and (max-width: 580px) {\r\n  .row {\r\n    padding: 14px 0 7px;\r\n    display: block;\r\n  }\r\n\r\n    .row.header {\r\n      padding: 0;\r\n      height: 6px;\r\n    }\r\n\r\n      .row.header .cell {\r\n        display: none;\r\n      }\r\n\r\n    .row .cell {\r\n      margin-bottom: 10px;\r\n    }\r\n\r\n      .row .cell:before {\r\n        margin-bottom: 3px;\r\n        content: attr(data-title);\r\n        min-width: 98px;\r\n        font-size: 10px;\r\n        line-height: 10px;\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n        color: #969696;\r\n        display: block;\r\n      }\r\n}\r\n\r\n.cell {\r\n  /*  padding: 6px 12px; */\r\n  display: table-cell;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .cell {\r\n    padding: 2px 16px;\r\n    display: block;\r\n  }\r\n}\r\n\r\n.node:hover {\r\n  fill: #ec008c;\r\n  opacity: 1;\r\n}\r\n\r\n.modal-dialog {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.modal-content {\r\n  height: auto;\r\n  min-height: 100%;\r\n  border: 0 none;\r\n  border-radius: 0;\r\n  box-shadow: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVHJpZ2dlcnMvY29tcG9uZW50cy9kYXRhYmFzZS10cmlnZ2Vycy9kYXRhYmFzZS10cmlnZ2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsd0NBQXdDO0VBQ3hDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUU7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLDhCQUE4QjtFQUNoQzs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFRjtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLGNBQWM7RUFDaEI7O0lBRUU7TUFDRSxVQUFVO01BQ1YsV0FBVztJQUNiOztNQUVFO1FBQ0UsYUFBYTtNQUNmOztJQUVGO01BQ0UsbUJBQW1CO0lBQ3JCOztNQUVFO1FBQ0Usa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QixlQUFlO1FBQ2YsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIseUJBQXlCO1FBQ3pCLGNBQWM7UUFDZCxjQUFjO01BQ2hCO0FBQ047O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7QUFDWjs7QUFHQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9UcmlnZ2Vycy9jb21wb25lbnRzL2RhdGFiYXNlLXRyaWdnZXJzL2RhdGFiYXNlLXRyaWdnZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI09iamVjdHMgbGk6bGFzdC1jaGlsZCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICBtYXJnaW46IDBweCAwIDNweCAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgLnRhYmxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogdGFibGUtcm93O1xyXG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbn1cclxuXHJcbiAgLnJvdzpudGgtb2YtdHlwZShvZGQpIHtcclxuICAgIGJhY2tncm91bmQ6ICNlOWU5ZTk7XHJcbiAgfVxyXG5cclxuICAucm93LmhlYWRlciB7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTg0NTY5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAucm93LmdyZWVuIHtcclxuICAgIGJhY2tncm91bmQ6ICMyN2FlNjA7XHJcbiAgfVxyXG5cclxuICAucm93LmJsdWUge1xyXG4gICAgYmFja2dyb3VuZDogIzI5ODBiOTtcclxuICB9XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gIC5yb3cge1xyXG4gICAgcGFkZGluZzogMTRweCAwIDdweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgICAucm93LmhlYWRlciB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGhlaWdodDogNnB4O1xyXG4gICAgfVxyXG5cclxuICAgICAgLnJvdy5oZWFkZXIgLmNlbGwge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAucm93IC5jZWxsIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAgIC5yb3cgLmNlbGw6YmVmb3JlIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcclxuICAgICAgICBtaW4td2lkdGg6IDk4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgY29sb3I6ICM5Njk2OTY7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxufVxyXG5cclxuLmNlbGwge1xyXG4gIC8qICBwYWRkaW5nOiA2cHggMTJweDsgKi9cclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gIC5jZWxsIHtcclxuICAgIHBhZGRpbmc6IDJweCAxNnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG4ubm9kZTpob3ZlciB7XHJcbiAgZmlsbDogI2VjMDA4YztcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5cclxuLm1vZGFsLWRpYWxvZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyOiAwIG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbiJdfQ== */";

    /***/
  }),
  /***/"./src/app/Triggers/components/database-triggers/database-triggers.component.ts": (
  /*!**************************************************************************************!*\
    !*** ./src/app/Triggers/components/database-triggers/database-triggers.component.ts ***!
    \**************************************************************************************/
  /*! exports provided: DatabaseTriggersComponent */
  /***/
  function _src_app_Triggers_components_databaseTriggers_databaseTriggersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DatabaseTriggersComponent", function () {
      return DatabaseTriggersComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_database_trigger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/database-trigger.service */"./src/app/Triggers/services/database-trigger.service.ts");
    var DatabaseTriggersComponent = /*#__PURE__*/function () {
      function DatabaseTriggersComponent(triggerService) {
        _classCallCheck(this, DatabaseTriggersComponent);
        this.triggerService = triggerService;
        this.triggers = [];
      }
      return _createClass(DatabaseTriggersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllTriggers();
        }
      }, {
        key: "getAllTriggers",
        value: function getAllTriggers() {
          var _this3 = this;
          this.triggerService.getAllTriggers().subscribe(function (data) {
            return _this3.triggers = data;
          }, function (error) {
            return console.error('Error fetching triggers:', error);
          });
        }
      }]);
    }();
    DatabaseTriggersComponent.ctorParameters = function () {
      return [{
        type: _services_database_trigger_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseTriggerService"]
      }];
    };
    DatabaseTriggersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-database-triggers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./database-triggers.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/Triggers/components/database-triggers/database-triggers.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./database-triggers.component.css */"./src/app/Triggers/components/database-triggers/database-triggers.component.css"))["default"]]
    })], DatabaseTriggersComponent);

    /***/
  }),
  /***/"./src/app/Triggers/database-trigger.module.ts": (
  /*!*****************************************************!*\
    !*** ./src/app/Triggers/database-trigger.module.ts ***!
    \*****************************************************/
  /*! exports provided: DatabaseTriggerModule */
  /***/
  function _src_app_Triggers_databaseTriggerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DatabaseTriggerModule", function () {
      return DatabaseTriggerModule;
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
    var _components_database_trigger_database_trigger_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/database-trigger/database-trigger.component */"./src/app/Triggers/components/database-trigger/database-trigger.component.ts");
    /* harmony import */
    var _components_database_triggers_database_triggers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/database-triggers/database-triggers.component */"./src/app/Triggers/components/database-triggers/database-triggers.component.ts");
    /* harmony import */
    var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! amexio-ng-extensions */"./node_modules/amexio-ng-extensions/amexio-ng-extensions.js");
    /* harmony import */
    var primeng_accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/accordion */"./node_modules/primeng/fesm2015/primeng-accordion.js");
    /* harmony import */
    var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */"./node_modules/primeng/fesm2015/primeng-table.js");
    /* harmony import */
    var primeng_tree__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tree */"./node_modules/primeng/fesm2015/primeng-tree.js");
    /* harmony import */
    var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */"./node_modules/primeng/fesm2015/primeng-toast.js");
    /* harmony import */
    var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */"./node_modules/primeng/fesm2015/primeng-button.js");
    /* harmony import */
    var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/contextmenu */"./node_modules/primeng/fesm2015/primeng-contextmenu.js");
    /* harmony import */
    var primeng_tabview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tabview */"./node_modules/primeng/fesm2015/primeng-tabview.js");
    /* harmony import */
    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/codehighlighter */"./node_modules/primeng/fesm2015/primeng-codehighlighter.js");
    /* harmony import */
    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/breadcrumb */"./node_modules/primeng/fesm2015/primeng-breadcrumb.js");
    /* harmony import */
    var primeng_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/dialog */"./node_modules/primeng/fesm2015/primeng-dialog.js");
    /* harmony import */
    var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputtextarea */"./node_modules/primeng/fesm2015/primeng-inputtextarea.js");
    /* harmony import */
    var angular_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-progress-bar */"./node_modules/angular-progress-bar/fesm2015/angular-progress-bar.js");
    /* harmony import */
    var _services_database_trigger_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/database-trigger.service */"./src/app/Triggers/services/database-trigger.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");

    /* ===== Amexio Modules ===== */

    /* ===== PrimeNG Modules ===== */

    var appRoutes = [{
      path: 'Triggers',
      component: _components_database_triggers_database_triggers_component__WEBPACK_IMPORTED_MODULE_6__["DatabaseTriggersComponent"]
    }, {
      path: 'Trigger/:objectname',
      component: _components_database_trigger_database_trigger_component__WEBPACK_IMPORTED_MODULE_5__["DatabaseTriggerComponent"]
    }];
    var DatabaseTriggerModule = /*#__PURE__*/_createClass(function DatabaseTriggerModule() {
      _classCallCheck(this, DatabaseTriggerModule);
    });
    DatabaseTriggerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_database_trigger_database_trigger_component__WEBPACK_IMPORTED_MODULE_5__["DatabaseTriggerComponent"], _components_database_triggers_database_triggers_component__WEBPACK_IMPORTED_MODULE_6__["DatabaseTriggersComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"].forRoot(appRoutes, {
        useHash: true
      }), /* Core Modules */
      _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], /* Amexio Modules */
      amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_7__["AmexioDataModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_7__["AmexioWidgetModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_7__["AmexioChartsModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_7__["AmexioEnterpriseModule"], /* PrimeNG Modules */
      primeng_accordion__WEBPACK_IMPORTED_MODULE_8__["AccordionModule"], primeng_table__WEBPACK_IMPORTED_MODULE_9__["TableModule"], primeng_tree__WEBPACK_IMPORTED_MODULE_10__["TreeModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_11__["ToastModule"], primeng_contextmenu__WEBPACK_IMPORTED_MODULE_13__["ContextMenuModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_14__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_15__["CodeHighlighterModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_16__["BreadcrumbModule"], primeng_button__WEBPACK_IMPORTED_MODULE_12__["ButtonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_17__["DialogModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_18__["InputTextareaModule"], angular_progress_bar__WEBPACK_IMPORTED_MODULE_19__["ProgressBarModule"]],
      providers: [_services_database_trigger_service__WEBPACK_IMPORTED_MODULE_20__["DatabaseTriggerService"]],
      exports: [_components_database_trigger_database_trigger_component__WEBPACK_IMPORTED_MODULE_5__["DatabaseTriggerComponent"], _components_database_triggers_database_triggers_component__WEBPACK_IMPORTED_MODULE_6__["DatabaseTriggersComponent"]]
    })], DatabaseTriggerModule);

    /***/
  }),
  /***/"./src/app/Triggers/services/database-trigger.service.ts": (
  /*!***************************************************************!*\
    !*** ./src/app/Triggers/services/database-trigger.service.ts ***!
    \***************************************************************/
  /*! exports provided: DatabaseTriggerService */
  /***/
  function _src_app_Triggers_services_databaseTriggerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DatabaseTriggerService", function () {
      return DatabaseTriggerService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/services/auth.service */"./src/app/auth/services/auth.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var DatabaseTriggerService = /*#__PURE__*/function () {
      function DatabaseTriggerService(http, primaryUrl, secondaryUrl, authService, router) {
        _classCallCheck(this, DatabaseTriggerService);
        this.http = http;
        this.primaryUrl = primaryUrl;
        this.secondaryUrl = secondaryUrl;
        this.authService = authService;
        this.router = router;
        this.primaryUrl = "".concat(this.primaryUrl, "/DatabaseTrigger");
        this.secondaryUrl = "".concat(this.secondaryUrl, "/DatabaseTrigger");
      }
      return _createClass(DatabaseTriggerService, [{
        key: "getAuthHeaders",
        value: function getAuthHeaders() {
          var token = this.authService.getToken();
          if (!token) {
            this.router.navigate(['/login']);
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          }
          return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': "Bearer ".concat(token)
          });
        }
      }, {
        key: "getAllTriggers",
        value: function getAllTriggers() {
          var headers = this.getAuthHeaders();
          return this.http.get("".concat(this.primaryUrl), {
            headers: headers
          });
        }
      }, {
        key: "getTriggerByName",
        value: function getTriggerByName(name) {
          var headers = this.getAuthHeaders();
          return this.http.get("".concat(this.primaryUrl, "/").concat(name), {
            headers: headers
          });
        }
      }, {
        key: "mergeTriggerProperty",
        value: function mergeTriggerProperty(trigger) {
          var headers = this.getAuthHeaders();
          return this.http.post("".concat(this.primaryUrl), trigger, {
            headers: headers
          });
        }
      }]);
    }();
    DatabaseTriggerService.ctorParameters = function () {
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
      }, {
        type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };
    DatabaseTriggerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('API_URL')), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('ANOTHER_URL'))], DatabaseTriggerService);

    /***/
  }),
  /***/"./src/app/UserDefinedDataType/components/user-defined-data-type/user-defined-data-type.component.css": (
  /*!************************************************************************************************************!*\
    !*** ./src/app/UserDefinedDataType/components/user-defined-data-type/user-defined-data-type.component.css ***!
    \************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_UserDefinedDataType_components_userDefinedDataType_userDefinedDataTypeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".table {\r\n  margin: 0px 0 3px 0;\r\n  width: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: table;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .table {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.row {\r\n  display: table-row;\r\n  background: #f6f6f6;\r\n}\r\n\r\n.row:nth-of-type(odd) {\r\n    background: #e9e9e9;\r\n  }\r\n\r\n.row.header {\r\n    font-weight: 900;\r\n    color: #ffffff;\r\n    background: #184569 !important;\r\n  }\r\n\r\n.row.green {\r\n    background: #27ae60;\r\n  }\r\n\r\n.row.blue {\r\n    background: #2980b9;\r\n  }\r\n\r\n@media screen and (max-width: 580px) {\r\n  .row {\r\n    padding: 14px 0 7px;\r\n    display: block;\r\n  }\r\n\r\n    .row.header {\r\n      padding: 0;\r\n      height: 6px;\r\n    }\r\n\r\n      .row.header .cell {\r\n        display: none;\r\n      }\r\n\r\n    .row .cell {\r\n      margin-bottom: 10px;\r\n    }\r\n\r\n      .row .cell:before {\r\n        margin-bottom: 3px;\r\n        content: attr(data-title);\r\n        min-width: 98px;\r\n        font-size: 10px;\r\n        line-height: 10px;\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n        color: #969696;\r\n        display: block;\r\n      }\r\n}\r\n\r\n.cell {\r\n  /*  padding: 6px 12px; */\r\n  display: table-cell;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .cell {\r\n    padding: 2px 16px;\r\n    display: block;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVXNlckRlZmluZWREYXRhVHlwZS9jb21wb25lbnRzL3VzZXItZGVmaW5lZC1kYXRhLXR5cGUvdXNlci1kZWZpbmVkLWRhdGEtdHlwZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx3Q0FBd0M7RUFDeEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFRTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsOEJBQThCO0VBQ2hDOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVGO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsY0FBYztFQUNoQjs7SUFFRTtNQUNFLFVBQVU7TUFDVixXQUFXO0lBQ2I7O01BRUU7UUFDRSxhQUFhO01BQ2Y7O0lBRUY7TUFDRSxtQkFBbUI7SUFDckI7O01BRUU7UUFDRSxrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQix5QkFBeUI7UUFDekIsY0FBYztRQUNkLGNBQWM7TUFDaEI7QUFDTjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9Vc2VyRGVmaW5lZERhdGFUeXBlL2NvbXBvbmVudHMvdXNlci1kZWZpbmVkLWRhdGEtdHlwZS91c2VyLWRlZmluZWQtZGF0YS10eXBlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xyXG4gIG1hcmdpbjogMHB4IDAgM3B4IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAudGFibGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxufVxyXG5cclxuICAucm93Om50aC1vZi10eXBlKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZDogI2U5ZTllOTtcclxuICB9XHJcblxyXG4gIC5yb3cuaGVhZGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQ6ICMxODQ1NjkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5yb3cuZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZDogIzI3YWU2MDtcclxuICB9XHJcblxyXG4gIC5yb3cuYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjk4MGI5O1xyXG4gIH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgLnJvdyB7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDAgN3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAgIC5yb3cuaGVhZGVyIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgaGVpZ2h0OiA2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgICAucm93LmhlYWRlciAuY2VsbCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgIC5yb3cgLmNlbGwge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICAgLnJvdyAuY2VsbDpiZWZvcmUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xyXG4gICAgICAgIG1pbi13aWR0aDogOThweDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBjb2xvcjogIzk2OTY5NjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG59XHJcblxyXG4uY2VsbCB7XHJcbiAgLyogIHBhZGRpbmc6IDZweCAxMnB4OyAqL1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgLmNlbGwge1xyXG4gICAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuIl19 */";

    /***/
  }),
  /***/"./src/app/UserDefinedDataType/components/user-defined-data-type/user-defined-data-type.component.ts": (
  /*!***********************************************************************************************************!*\
    !*** ./src/app/UserDefinedDataType/components/user-defined-data-type/user-defined-data-type.component.ts ***!
    \***********************************************************************************************************/
  /*! exports provided: UserDefinedDataTypeComponent */
  /***/
  function _src_app_UserDefinedDataType_components_userDefinedDataType_userDefinedDataTypeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UserDefinedDataTypeComponent", function () {
      return UserDefinedDataTypeComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_user_defined_data_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user-defined-data-type.service */"./src/app/UserDefinedDataType/services/user-defined-data-type.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var UserDefinedDataTypeComponent = /*#__PURE__*/function () {
      function UserDefinedDataTypeComponent(route, dataTypeService, ngZone, cdRef) {
        _classCallCheck(this, UserDefinedDataTypeComponent);
        this.route = route;
        this.dataTypeService = dataTypeService;
        this.ngZone = ngZone;
        this.cdRef = cdRef;
        this.newDescription = '';
        this.iblnShowEditBox = false;
      }
      return _createClass(UserDefinedDataTypeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.usedDefindFunction = this.route.snapshot.params.objectname;
          var _this$usedDefindFunct = this.usedDefindFunction.split('.'),
            _this$usedDefindFunct2 = _slicedToArray(_this$usedDefindFunct, 2),
            schema = _this$usedDefindFunct2[0],
            type = _this$usedDefindFunct2[1];
          this.loadDetails(schema, type);
        }
      }, {
        key: "loadDetails",
        value: function loadDetails(schemaName, typeName) {
          var _this4 = this;
          this.dataTypeService.getUserDefinedDataTypeDetails(schemaName, typeName).subscribe(function (data) {
            _this4.selectedDataType = data;
            _this4.newDescription = data.description || '';
          });
        }
      }, {
        key: "toggleEditBox",
        value: function toggleEditBox() {
          this.iblnShowEditBox = !this.iblnShowEditBox;
          if (!this.iblnShowEditBox) {
            this.newDescription = this.selectedDataType.description || '';
          }
        }
      }, {
        key: "saveDescription",
        value: function saveDescription() {
          var _this5 = this;
          if (!this.selectedDataType) return;
          var _this$usedDefindFunct3 = this.usedDefindFunction.split('.'),
            _this$usedDefindFunct4 = _slicedToArray(_this$usedDefindFunct3, 2),
            schema = _this$usedDefindFunct4[0],
            type = _this$usedDefindFunct4[1];
          var request = {
            schemaName: schema,
            typeName: type,
            description: this.newDescription
          };
          console.log('Saving new description:', request); // Debugging
          this.dataTypeService.upsertExtendedProperty(request).subscribe(function () {
            console.log('Save successful!'); // Debugging
            // Update the description
            _this5.selectedDataType.description = _this5.newDescription;
            // Force UI update
            _this5.ngZone.run(function () {
              _this5.iblnShowEditBox = false;
              _this5.cdRef.detectChanges(); // Ensures Angular updates UI
            });
          }, function (error) {
            console.error('Failed to update description:', error);
          });
        }
      }]);
    }();
    UserDefinedDataTypeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_user_defined_data_type_service__WEBPACK_IMPORTED_MODULE_2__["UserDefinedDataTypeService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };
    UserDefinedDataTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-defined-data-type',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-defined-data-type.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/UserDefinedDataType/components/user-defined-data-type/user-defined-data-type.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-defined-data-type.component.css */"./src/app/UserDefinedDataType/components/user-defined-data-type/user-defined-data-type.component.css"))["default"]]
    })], UserDefinedDataTypeComponent);

    /***/
  }),
  /***/"./src/app/UserDefinedDataType/components/user-defined-data-types/user-defined-data-types.component.css": (
  /*!**************************************************************************************************************!*\
    !*** ./src/app/UserDefinedDataType/components/user-defined-data-types/user-defined-data-types.component.css ***!
    \**************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_UserDefinedDataType_components_userDefinedDataTypes_userDefinedDataTypesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".table {\r\n  margin: 0px 0 3px 0;\r\n  width: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: table;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .table {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.row {\r\n  display: table-row;\r\n  background: #f6f6f6;\r\n}\r\n\r\n.row:nth-of-type(odd) {\r\n    background: #e9e9e9;\r\n  }\r\n\r\n.row.header {\r\n    font-weight: 900;\r\n    color: #ffffff;\r\n    background: #184569 !important;\r\n  }\r\n\r\n.row.green {\r\n    background: #27ae60;\r\n  }\r\n\r\n.row.blue {\r\n    background: #2980b9;\r\n  }\r\n\r\n@media screen and (max-width: 580px) {\r\n  .row {\r\n    padding: 14px 0 7px;\r\n    display: block;\r\n  }\r\n\r\n    .row.header {\r\n      padding: 0;\r\n      height: 6px;\r\n    }\r\n\r\n      .row.header .cell {\r\n        display: none;\r\n      }\r\n\r\n    .row .cell {\r\n      margin-bottom: 10px;\r\n    }\r\n\r\n      .row .cell:before {\r\n        margin-bottom: 3px;\r\n        content: attr(data-title);\r\n        min-width: 98px;\r\n        font-size: 10px;\r\n        line-height: 10px;\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n        color: #969696;\r\n        display: block;\r\n      }\r\n}\r\n\r\n.cell {\r\n  /*  padding: 6px 12px; */\r\n  display: table-cell;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .cell {\r\n    padding: 2px 16px;\r\n    display: block;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVXNlckRlZmluZWREYXRhVHlwZS9jb21wb25lbnRzL3VzZXItZGVmaW5lZC1kYXRhLXR5cGVzL3VzZXItZGVmaW5lZC1kYXRhLXR5cGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHdDQUF3QztFQUN4QyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVFO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCw4QkFBOEI7RUFDaEM7O0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUY7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixjQUFjO0VBQ2hCOztJQUVFO01BQ0UsVUFBVTtNQUNWLFdBQVc7SUFDYjs7TUFFRTtRQUNFLGFBQWE7TUFDZjs7SUFFRjtNQUNFLG1CQUFtQjtJQUNyQjs7TUFFRTtRQUNFLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsZUFBZTtRQUNmLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLHlCQUF5QjtRQUN6QixjQUFjO1FBQ2QsY0FBYztNQUNoQjtBQUNOOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL1VzZXJEZWZpbmVkRGF0YVR5cGUvY29tcG9uZW50cy91c2VyLWRlZmluZWQtZGF0YS10eXBlcy91c2VyLWRlZmluZWQtZGF0YS10eXBlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHtcclxuICBtYXJnaW46IDBweCAwIDNweCAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgLnRhYmxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogdGFibGUtcm93O1xyXG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbn1cclxuXHJcbiAgLnJvdzpudGgtb2YtdHlwZShvZGQpIHtcclxuICAgIGJhY2tncm91bmQ6ICNlOWU5ZTk7XHJcbiAgfVxyXG5cclxuICAucm93LmhlYWRlciB7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTg0NTY5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAucm93LmdyZWVuIHtcclxuICAgIGJhY2tncm91bmQ6ICMyN2FlNjA7XHJcbiAgfVxyXG5cclxuICAucm93LmJsdWUge1xyXG4gICAgYmFja2dyb3VuZDogIzI5ODBiOTtcclxuICB9XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gIC5yb3cge1xyXG4gICAgcGFkZGluZzogMTRweCAwIDdweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgICAucm93LmhlYWRlciB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGhlaWdodDogNnB4O1xyXG4gICAgfVxyXG5cclxuICAgICAgLnJvdy5oZWFkZXIgLmNlbGwge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAucm93IC5jZWxsIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAgIC5yb3cgLmNlbGw6YmVmb3JlIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcclxuICAgICAgICBtaW4td2lkdGg6IDk4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgY29sb3I6ICM5Njk2OTY7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxufVxyXG5cclxuLmNlbGwge1xyXG4gIC8qICBwYWRkaW5nOiA2cHggMTJweDsgKi9cclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gIC5jZWxsIHtcclxuICAgIHBhZGRpbmc6IDJweCAxNnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";

    /***/
  }),
  /***/"./src/app/UserDefinedDataType/components/user-defined-data-types/user-defined-data-types.component.ts": (
  /*!*************************************************************************************************************!*\
    !*** ./src/app/UserDefinedDataType/components/user-defined-data-types/user-defined-data-types.component.ts ***!
    \*************************************************************************************************************/
  /*! exports provided: UserDefinedDataTypesComponent */
  /***/
  function _src_app_UserDefinedDataType_components_userDefinedDataTypes_userDefinedDataTypesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UserDefinedDataTypesComponent", function () {
      return UserDefinedDataTypesComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_user_defined_data_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user-defined-data-type.service */"./src/app/UserDefinedDataType/services/user-defined-data-type.service.ts");
    var UserDefinedDataTypesComponent = /*#__PURE__*/function () {
      function UserDefinedDataTypesComponent(dataTypeService) {
        _classCallCheck(this, UserDefinedDataTypesComponent);
        this.dataTypeService = dataTypeService;
        this.userDefinedDataTypes = [];
      }
      return _createClass(UserDefinedDataTypesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadDataTypes();
        }
      }, {
        key: "loadDataTypes",
        value: function loadDataTypes() {
          var _this6 = this;
          this.dataTypeService.getAllUserDefinedDataTypes().subscribe(function (data) {
            _this6.userDefinedDataTypes = data;
          });
        }
      }]);
    }();
    UserDefinedDataTypesComponent.ctorParameters = function () {
      return [{
        type: _services_user_defined_data_type_service__WEBPACK_IMPORTED_MODULE_2__["UserDefinedDataTypeService"]
      }];
    };
    UserDefinedDataTypesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-defined-data-types',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-defined-data-types.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/UserDefinedDataType/components/user-defined-data-types/user-defined-data-types.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-defined-data-types.component.css */"./src/app/UserDefinedDataType/components/user-defined-data-types/user-defined-data-types.component.css"))["default"]]
    })], UserDefinedDataTypesComponent);

    /***/
  }),
  /***/"./src/app/UserDefinedDataType/services/user-defined-data-type.service.ts": (
  /*!********************************************************************************!*\
    !*** ./src/app/UserDefinedDataType/services/user-defined-data-type.service.ts ***!
    \********************************************************************************/
  /*! exports provided: UserDefinedDataTypeService */
  /***/
  function _src_app_UserDefinedDataType_services_userDefinedDataTypeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UserDefinedDataTypeService", function () {
      return UserDefinedDataTypeService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/services/auth.service */"./src/app/auth/services/auth.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var UserDefinedDataTypeService = /*#__PURE__*/function () {
      function UserDefinedDataTypeService(http, primaryUrl, authService, router) {
        _classCallCheck(this, UserDefinedDataTypeService);
        this.http = http;
        this.primaryUrl = primaryUrl;
        this.authService = authService;
        this.router = router;
        this.baseUrl = '/UserDefinedDataType'; // Adjust based on your API base path
        this.primaryUrl = this.primaryUrl + this.baseUrl;
      }
      return _createClass(UserDefinedDataTypeService, [{
        key: "getAuthHeaders",
        value: function getAuthHeaders() {
          var token = this.authService.getToken();
          if (!token) {
            this.router.navigate(['/login']);
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          }
          return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': "Bearer ".concat(token)
          });
        }
      }, {
        key: "getAllUserDefinedDataTypes",
        value: function getAllUserDefinedDataTypes() {
          var headers = this.getAuthHeaders();
          return this.http.get("".concat(this.primaryUrl, "/all"), {
            headers: headers
          });
        }
      }, {
        key: "getUserDefinedDataTypeDetails",
        value: function getUserDefinedDataTypeDetails(schemaName, typeName) {
          var headers = this.getAuthHeaders();
          return this.http.get("".concat(this.primaryUrl, "/details/").concat(schemaName, "/").concat(typeName), {
            headers: headers
          });
        }
      }, {
        key: "upsertExtendedProperty",
        value: function upsertExtendedProperty(request) {
          var headers = this.getAuthHeaders();
          return this.http.post("".concat(this.primaryUrl, "/upsert-extended-property"), request, {
            headers: headers
          });
        }
      }]);
    }();
    UserDefinedDataTypeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: ['API_URL']
        }]
      }, {
        type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };
    UserDefinedDataTypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('API_URL'))], UserDefinedDataTypeService);

    /***/
  }),
  /***/"./src/app/UserDefinedDataType/user-defined-data-types.module.ts": (
  /*!***********************************************************************!*\
    !*** ./src/app/UserDefinedDataType/user-defined-data-types.module.ts ***!
    \***********************************************************************/
  /*! exports provided: UserDefinedDataTypesModule */
  /***/
  function _src_app_UserDefinedDataType_userDefinedDataTypesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UserDefinedDataTypesModule", function () {
      return UserDefinedDataTypesModule;
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
    var _components_user_defined_data_type_user_defined_data_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user-defined-data-type/user-defined-data-type.component */"./src/app/UserDefinedDataType/components/user-defined-data-type/user-defined-data-type.component.ts");
    /* harmony import */
    var _components_user_defined_data_types_user_defined_data_types_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user-defined-data-types/user-defined-data-types.component */"./src/app/UserDefinedDataType/components/user-defined-data-types/user-defined-data-types.component.ts");
    /* harmony import */
    var _services_user_defined_data_type_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/user-defined-data-type.service */"./src/app/UserDefinedDataType/services/user-defined-data-type.service.ts");
    /* harmony import */
    var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! amexio-ng-extensions */"./node_modules/amexio-ng-extensions/amexio-ng-extensions.js");
    /* harmony import */
    var primeng_accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/accordion */"./node_modules/primeng/fesm2015/primeng-accordion.js");
    /* harmony import */
    var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */"./node_modules/primeng/fesm2015/primeng-table.js");
    /* harmony import */
    var primeng_tree__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tree */"./node_modules/primeng/fesm2015/primeng-tree.js");
    /* harmony import */
    var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */"./node_modules/primeng/fesm2015/primeng-toast.js");
    /* harmony import */
    var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */"./node_modules/primeng/fesm2015/primeng-button.js");
    /* harmony import */
    var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/contextmenu */"./node_modules/primeng/fesm2015/primeng-contextmenu.js");
    /* harmony import */
    var primeng_tabview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tabview */"./node_modules/primeng/fesm2015/primeng-tabview.js");
    /* harmony import */
    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/codehighlighter */"./node_modules/primeng/fesm2015/primeng-codehighlighter.js");
    /* harmony import */
    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/breadcrumb */"./node_modules/primeng/fesm2015/primeng-breadcrumb.js");
    /* harmony import */
    var primeng_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/dialog */"./node_modules/primeng/fesm2015/primeng-dialog.js");
    /* harmony import */
    var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputtextarea */"./node_modules/primeng/fesm2015/primeng-inputtextarea.js");
    /* harmony import */
    var angular_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-progress-bar */"./node_modules/angular-progress-bar/fesm2015/angular-progress-bar.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");

    // 

    /* ===== Amexio Modules ===== */

    /* ===== PrimeNG Modules ===== */

    var appRoutes = [{
      path: 'UserDefinedDataTypes',
      component: _components_user_defined_data_types_user_defined_data_types_component__WEBPACK_IMPORTED_MODULE_5__["UserDefinedDataTypesComponent"]
    }, {
      path: 'UserDefinedDataType/:objectname',
      component: _components_user_defined_data_type_user_defined_data_type_component__WEBPACK_IMPORTED_MODULE_4__["UserDefinedDataTypeComponent"]
    }];
    var UserDefinedDataTypesModule = /*#__PURE__*/_createClass(function UserDefinedDataTypesModule() {
      _classCallCheck(this, UserDefinedDataTypesModule);
    });
    UserDefinedDataTypesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_user_defined_data_type_user_defined_data_type_component__WEBPACK_IMPORTED_MODULE_4__["UserDefinedDataTypeComponent"], _components_user_defined_data_types_user_defined_data_types_component__WEBPACK_IMPORTED_MODULE_5__["UserDefinedDataTypesComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"].forRoot(appRoutes, {
        useHash: true
      }), /* Core Modules */
      _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], /* Amexio Modules */
      amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_7__["AmexioDataModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_7__["AmexioWidgetModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_7__["AmexioChartsModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_7__["AmexioEnterpriseModule"], /* PrimeNG Modules */
      primeng_accordion__WEBPACK_IMPORTED_MODULE_8__["AccordionModule"], primeng_table__WEBPACK_IMPORTED_MODULE_9__["TableModule"], primeng_tree__WEBPACK_IMPORTED_MODULE_10__["TreeModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_11__["ToastModule"], primeng_contextmenu__WEBPACK_IMPORTED_MODULE_13__["ContextMenuModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_14__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_15__["CodeHighlighterModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_16__["BreadcrumbModule"], primeng_button__WEBPACK_IMPORTED_MODULE_12__["ButtonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_17__["DialogModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_18__["InputTextareaModule"], /* Other Third-Party Modules */
      angular_progress_bar__WEBPACK_IMPORTED_MODULE_19__["ProgressBarModule"]],
      providers: [_services_user_defined_data_type_service__WEBPACK_IMPORTED_MODULE_6__["UserDefinedDataTypeService"]],
      exports: [_components_user_defined_data_type_user_defined_data_type_component__WEBPACK_IMPORTED_MODULE_4__["UserDefinedDataTypeComponent"], _components_user_defined_data_types_user_defined_data_types_component__WEBPACK_IMPORTED_MODULE_5__["UserDefinedDataTypesComponent"]]
    })], UserDefinedDataTypesModule);

    /***/
  }),
  /***/"./src/app/XmlSchema/component/xml-schema-details/xml-schema-details.component.css": (
  /*!*****************************************************************************************!*\
    !*** ./src/app/XmlSchema/component/xml-schema-details/xml-schema-details.component.css ***!
    \*****************************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_XmlSchema_component_xmlSchemaDetails_xmlSchemaDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\r\n#Objects li:last-child {\r\n  display: none;\r\n}\r\n\r\n.table {\r\n  margin: 0px 0 3px 0;\r\n  width: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: table;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .table {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.row {\r\n  display: table-row;\r\n  background: #f6f6f6;\r\n}\r\n\r\n.row:nth-of-type(odd) {\r\n    background: #e9e9e9;\r\n  }\r\n\r\n.row.header {\r\n    font-weight: 900;\r\n    color: #ffffff;\r\n    background: #184569 !important;\r\n  }\r\n\r\n.row.green {\r\n    background: #27ae60;\r\n  }\r\n\r\n.row.blue {\r\n    background: #2980b9;\r\n  }\r\n\r\n@media screen and (max-width: 580px) {\r\n  .row {\r\n    padding: 14px 0 7px;\r\n    display: block;\r\n  }\r\n\r\n    .row.header {\r\n      padding: 0;\r\n      height: 6px;\r\n    }\r\n\r\n      .row.header .cell {\r\n        display: none;\r\n      }\r\n\r\n    .row .cell {\r\n      margin-bottom: 10px;\r\n    }\r\n\r\n      .row .cell:before {\r\n        margin-bottom: 3px;\r\n        content: attr(data-title);\r\n        min-width: 98px;\r\n        font-size: 10px;\r\n        line-height: 10px;\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n        color: #969696;\r\n        display: block;\r\n      }\r\n}\r\n\r\n.cell {\r\n  /*  padding: 6px 12px; */\r\n  display: table-cell;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .cell {\r\n    padding: 2px 16px;\r\n    display: block;\r\n  }\r\n}\r\n\r\n.node:hover {\r\n  fill: #ec008c;\r\n  opacity: 1;\r\n}\r\n\r\n.modal-dialog {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.modal-content {\r\n  height: auto;\r\n  min-height: 100%;\r\n  border: 0 none;\r\n  border-radius: 0;\r\n  box-shadow: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvWG1sU2NoZW1hL2NvbXBvbmVudC94bWwtc2NoZW1hLWRldGFpbHMveG1sLXNjaGVtYS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx3Q0FBd0M7RUFDeEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFRTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsOEJBQThCO0VBQ2hDOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVGO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsY0FBYztFQUNoQjs7SUFFRTtNQUNFLFVBQVU7TUFDVixXQUFXO0lBQ2I7O01BRUU7UUFDRSxhQUFhO01BQ2Y7O0lBRUY7TUFDRSxtQkFBbUI7SUFDckI7O01BRUU7UUFDRSxrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQix5QkFBeUI7UUFDekIsY0FBYztRQUNkLGNBQWM7TUFDaEI7QUFDTjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtBQUNaOztBQUdBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL1htbFNjaGVtYS9jb21wb25lbnQveG1sLXNjaGVtYS1kZXRhaWxzL3htbC1zY2hlbWEtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNPYmplY3RzIGxpOmxhc3QtY2hpbGQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgbWFyZ2luOiAwcHggMCAzcHggMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gIC50YWJsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG59XHJcblxyXG4gIC5yb3c6bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xyXG4gIH1cclxuXHJcbiAgLnJvdy5oZWFkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzE4NDU2OSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnJvdy5ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjdhZTYwO1xyXG4gIH1cclxuXHJcbiAgLnJvdy5ibHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICMyOTgwYjk7XHJcbiAgfVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAucm93IHtcclxuICAgIHBhZGRpbmc6IDE0cHggMCA3cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICAgLnJvdy5oZWFkZXIge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBoZWlnaHQ6IDZweDtcclxuICAgIH1cclxuXHJcbiAgICAgIC5yb3cuaGVhZGVyIC5jZWxsIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgLnJvdyAuY2VsbCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgICAucm93IC5jZWxsOmJlZm9yZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XHJcbiAgICAgICAgbWluLXdpZHRoOiA5OHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiAjOTY5Njk2O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbn1cclxuXHJcbi5jZWxsIHtcclxuICAvKiAgcGFkZGluZzogNnB4IDEycHg7ICovXHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAuY2VsbCB7XHJcbiAgICBwYWRkaW5nOiAycHggMTZweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLm5vZGU6aG92ZXIge1xyXG4gIGZpbGw6ICNlYzAwOGM7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuXHJcbi5tb2RhbC1kaWFsb2cge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlcjogMCBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4iXX0= */";

    /***/
  }),
  /***/"./src/app/XmlSchema/component/xml-schema-details/xml-schema-details.component.ts": (
  /*!****************************************************************************************!*\
    !*** ./src/app/XmlSchema/component/xml-schema-details/xml-schema-details.component.ts ***!
    \****************************************************************************************/
  /*! exports provided: XmlSchemaDetailsComponent */
  /***/
  function _src_app_XmlSchema_component_xmlSchemaDetails_xmlSchemaDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "XmlSchemaDetailsComponent", function () {
      return XmlSchemaDetailsComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _service_xml_schema_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/xml-schema.service */"./src/app/XmlSchema/service/xml-schema.service.ts");
    var XmlSchemaDetailsComponent = /*#__PURE__*/function () {
      function XmlSchemaDetailsComponent(route, xmlSchemaService) {
        _classCallCheck(this, XmlSchemaDetailsComponent);
        this.route = route;
        this.xmlSchemaService = xmlSchemaService;
        this.schemaDetails = null;
        this.msDescription = "";
        this.iblnShowEditBox = false;
      }
      return _createClass(XmlSchemaDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;
          this.schemaName = this.route.snapshot.params.objectname;
          this.xmlSchemaService.getXmlSchemaDetails(this.schemaName).subscribe(function (data) {
            _this7.schemaDetails = data, _this7.msDescription = _this7.schemaDetails.mS_Description;
          }, function (error) {
            return console.error('Error fetching schema details', error);
          });
        }
      }]);
    }();
    XmlSchemaDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _service_xml_schema_service__WEBPACK_IMPORTED_MODULE_3__["XmlSchemaService"]
      }];
    };
    XmlSchemaDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-xml-schema-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xml-schema-details.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/XmlSchema/component/xml-schema-details/xml-schema-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xml-schema-details.component.css */"./src/app/XmlSchema/component/xml-schema-details/xml-schema-details.component.css"))["default"]]
    })], XmlSchemaDetailsComponent);

    /***/
  }),
  /***/"./src/app/XmlSchema/component/xml-schema-list/xml-schema-list.component.css": (
  /*!***********************************************************************************!*\
    !*** ./src/app/XmlSchema/component/xml-schema-list/xml-schema-list.component.css ***!
    \***********************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_XmlSchema_component_xmlSchemaList_xmlSchemaListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\r\n#Objects li:last-child {\r\n  display: none;\r\n}\r\n\r\n.table {\r\n  margin: 0px 0 3px 0;\r\n  width: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: table;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .table {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.row {\r\n  display: table-row;\r\n  background: #f6f6f6;\r\n}\r\n\r\n.row:nth-of-type(odd) {\r\n    background: #e9e9e9;\r\n  }\r\n\r\n.row.header {\r\n    font-weight: 900;\r\n    color: #ffffff;\r\n    background: #184569 !important;\r\n  }\r\n\r\n.row.green {\r\n    background: #27ae60;\r\n  }\r\n\r\n.row.blue {\r\n    background: #2980b9;\r\n  }\r\n\r\n@media screen and (max-width: 580px) {\r\n  .row {\r\n    padding: 14px 0 7px;\r\n    display: block;\r\n  }\r\n\r\n    .row.header {\r\n      padding: 0;\r\n      height: 6px;\r\n    }\r\n\r\n      .row.header .cell {\r\n        display: none;\r\n      }\r\n\r\n    .row .cell {\r\n      margin-bottom: 10px;\r\n    }\r\n\r\n      .row .cell:before {\r\n        margin-bottom: 3px;\r\n        content: attr(data-title);\r\n        min-width: 98px;\r\n        font-size: 10px;\r\n        line-height: 10px;\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n        color: #969696;\r\n        display: block;\r\n      }\r\n}\r\n\r\n.cell {\r\n  /*  padding: 6px 12px; */\r\n  display: table-cell;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .cell {\r\n    padding: 2px 16px;\r\n    display: block;\r\n  }\r\n}\r\n\r\n.node:hover {\r\n  fill: #ec008c;\r\n  opacity: 1;\r\n}\r\n\r\n.modal-dialog {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.modal-content {\r\n  height: auto;\r\n  min-height: 100%;\r\n  border: 0 none;\r\n  border-radius: 0;\r\n  box-shadow: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvWG1sU2NoZW1hL2NvbXBvbmVudC94bWwtc2NoZW1hLWxpc3QveG1sLXNjaGVtYS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx3Q0FBd0M7RUFDeEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFRTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsOEJBQThCO0VBQ2hDOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVGO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsY0FBYztFQUNoQjs7SUFFRTtNQUNFLFVBQVU7TUFDVixXQUFXO0lBQ2I7O01BRUU7UUFDRSxhQUFhO01BQ2Y7O0lBRUY7TUFDRSxtQkFBbUI7SUFDckI7O01BRUU7UUFDRSxrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQix5QkFBeUI7UUFDekIsY0FBYztRQUNkLGNBQWM7TUFDaEI7QUFDTjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtBQUNaOztBQUdBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL1htbFNjaGVtYS9jb21wb25lbnQveG1sLXNjaGVtYS1saXN0L3htbC1zY2hlbWEtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNPYmplY3RzIGxpOmxhc3QtY2hpbGQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgbWFyZ2luOiAwcHggMCAzcHggMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gIC50YWJsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG59XHJcblxyXG4gIC5yb3c6bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xyXG4gIH1cclxuXHJcbiAgLnJvdy5oZWFkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzE4NDU2OSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnJvdy5ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjdhZTYwO1xyXG4gIH1cclxuXHJcbiAgLnJvdy5ibHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICMyOTgwYjk7XHJcbiAgfVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAucm93IHtcclxuICAgIHBhZGRpbmc6IDE0cHggMCA3cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICAgLnJvdy5oZWFkZXIge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBoZWlnaHQ6IDZweDtcclxuICAgIH1cclxuXHJcbiAgICAgIC5yb3cuaGVhZGVyIC5jZWxsIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgLnJvdyAuY2VsbCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgICAucm93IC5jZWxsOmJlZm9yZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XHJcbiAgICAgICAgbWluLXdpZHRoOiA5OHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiAjOTY5Njk2O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbn1cclxuXHJcbi5jZWxsIHtcclxuICAvKiAgcGFkZGluZzogNnB4IDEycHg7ICovXHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAuY2VsbCB7XHJcbiAgICBwYWRkaW5nOiAycHggMTZweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLm5vZGU6aG92ZXIge1xyXG4gIGZpbGw6ICNlYzAwOGM7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuXHJcbi5tb2RhbC1kaWFsb2cge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlcjogMCBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4iXX0= */";

    /***/
  }),
  /***/"./src/app/XmlSchema/component/xml-schema-list/xml-schema-list.component.ts": (
  /*!**********************************************************************************!*\
    !*** ./src/app/XmlSchema/component/xml-schema-list/xml-schema-list.component.ts ***!
    \**********************************************************************************/
  /*! exports provided: XmlSchemaListComponent */
  /***/
  function _src_app_XmlSchema_component_xmlSchemaList_xmlSchemaListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "XmlSchemaListComponent", function () {
      return XmlSchemaListComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _service_xml_schema_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/xml-schema.service */"./src/app/XmlSchema/service/xml-schema.service.ts");
    var XmlSchemaListComponent = /*#__PURE__*/function () {
      function XmlSchemaListComponent(xmlSchemaService) {
        _classCallCheck(this, XmlSchemaListComponent);
        this.xmlSchemaService = xmlSchemaService;
        this.collections = [];
      }
      return _createClass(XmlSchemaListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;
          this.xmlSchemaService.getAllXmlSchemaCollections().subscribe(function (data) {
            return _this8.collections = data;
          }, function (error) {
            return console.error('Error fetching collections', error);
          });
        }
      }]);
    }();
    XmlSchemaListComponent.ctorParameters = function () {
      return [{
        type: _service_xml_schema_service__WEBPACK_IMPORTED_MODULE_2__["XmlSchemaService"]
      }];
    };
    XmlSchemaListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-xml-schema-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xml-schema-list.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/XmlSchema/component/xml-schema-list/xml-schema-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xml-schema-list.component.css */"./src/app/XmlSchema/component/xml-schema-list/xml-schema-list.component.css"))["default"]]
    })], XmlSchemaListComponent);

    /***/
  }),
  /***/"./src/app/XmlSchema/service/xml-schema.service.ts": (
  /*!*********************************************************!*\
    !*** ./src/app/XmlSchema/service/xml-schema.service.ts ***!
    \*********************************************************/
  /*! exports provided: XmlSchemaService */
  /***/
  function _src_app_XmlSchema_service_xmlSchemaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "XmlSchemaService", function () {
      return XmlSchemaService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/services/auth.service */"./src/app/auth/services/auth.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var XmlSchemaService = /*#__PURE__*/function () {
      function XmlSchemaService(http, primaryUrl, secondaryUrl, authService, router) {
        _classCallCheck(this, XmlSchemaService);
        this.http = http;
        this.primaryUrl = primaryUrl;
        this.secondaryUrl = secondaryUrl;
        this.authService = authService;
        this.router = router;
        this.primaryUrl = "".concat(this.primaryUrl, "/XmlSchema");
        this.secondaryUrl = "".concat(this.secondaryUrl, "/XmlSchema");
      }
      return _createClass(XmlSchemaService, [{
        key: "getXmlSchemaDetails",
        value: function getXmlSchemaDetails(schemaCollectionName) {
          var headers = this.getAuthHeaders();
          return this.http.get("".concat(this.primaryUrl, "/details/").concat(schemaCollectionName), {
            headers: headers
          });
        }
      }, {
        key: "getXmlSchemaReferences",
        value: function getXmlSchemaReferences(schemaCollectionName) {
          var headers = this.getAuthHeaders();
          return this.http.get("".concat(this.primaryUrl, "/references/").concat(schemaCollectionName), {
            headers: headers
          });
        }
      }, {
        key: "getAllXmlSchemaCollections",
        value: function getAllXmlSchemaCollections() {
          var headers = this.getAuthHeaders();
          return this.http.get("".concat(this.primaryUrl, "/collections"), {
            headers: headers
          });
        }
      }, {
        key: "getAuthHeaders",
        value: function getAuthHeaders() {
          var token = this.authService.getToken();
          if (!token) {
            this.router.navigate(['/login']);
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          }
          return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': "Bearer ".concat(token)
          });
        }
      }]);
    }();
    XmlSchemaService.ctorParameters = function () {
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
      }, {
        type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };
    XmlSchemaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('API_URL')), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('ANOTHER_URL'))], XmlSchemaService);

    /***/
  }),
  /***/"./src/app/XmlSchema/xml-schema.module.ts": (
  /*!************************************************!*\
    !*** ./src/app/XmlSchema/xml-schema.module.ts ***!
    \************************************************/
  /*! exports provided: XmlSchemaModule */
  /***/
  function _src_app_XmlSchema_xmlSchemaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "XmlSchemaModule", function () {
      return XmlSchemaModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _component_xml_schema_list_xml_schema_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/xml-schema-list/xml-schema-list.component */"./src/app/XmlSchema/component/xml-schema-list/xml-schema-list.component.ts");
    /* harmony import */
    var _component_xml_schema_details_xml_schema_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/xml-schema-details/xml-schema-details.component */"./src/app/XmlSchema/component/xml-schema-details/xml-schema-details.component.ts");
    /* harmony import */
    var _service_xml_schema_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/xml-schema.service */"./src/app/XmlSchema/service/xml-schema.service.ts");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! amexio-ng-extensions */"./node_modules/amexio-ng-extensions/amexio-ng-extensions.js");
    /* harmony import */
    var primeng_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/accordion */"./node_modules/primeng/fesm2015/primeng-accordion.js");
    /* harmony import */
    var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */"./node_modules/primeng/fesm2015/primeng-table.js");
    /* harmony import */
    var primeng_tree__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tree */"./node_modules/primeng/fesm2015/primeng-tree.js");
    /* harmony import */
    var primeng_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toast */"./node_modules/primeng/fesm2015/primeng-toast.js");
    /* harmony import */
    var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */"./node_modules/primeng/fesm2015/primeng-button.js");
    /* harmony import */
    var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/contextmenu */"./node_modules/primeng/fesm2015/primeng-contextmenu.js");
    /* harmony import */
    var primeng_tabview__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/tabview */"./node_modules/primeng/fesm2015/primeng-tabview.js");
    /* harmony import */
    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/codehighlighter */"./node_modules/primeng/fesm2015/primeng-codehighlighter.js");
    /* harmony import */
    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/breadcrumb */"./node_modules/primeng/fesm2015/primeng-breadcrumb.js");
    /* harmony import */
    var primeng_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dialog */"./node_modules/primeng/fesm2015/primeng-dialog.js");
    /* harmony import */
    var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/inputtextarea */"./node_modules/primeng/fesm2015/primeng-inputtextarea.js");
    /* harmony import */
    var angular_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-progress-bar */"./node_modules/angular-progress-bar/fesm2015/angular-progress-bar.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");

    /* ===== Amexio Modules ===== */

    /* ===== PrimeNG Modules ===== */

    var appRoutes = [{
      path: 'XmlSchemas',
      component: _component_xml_schema_list_xml_schema_list_component__WEBPACK_IMPORTED_MODULE_3__["XmlSchemaListComponent"]
    }, {
      path: 'XmlSchema/:objectname',
      component: _component_xml_schema_details_xml_schema_details_component__WEBPACK_IMPORTED_MODULE_4__["XmlSchemaDetailsComponent"]
    }];
    var XmlSchemaModule = /*#__PURE__*/_createClass(function XmlSchemaModule() {
      _classCallCheck(this, XmlSchemaModule);
    });
    XmlSchemaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_component_xml_schema_list_xml_schema_list_component__WEBPACK_IMPORTED_MODULE_3__["XmlSchemaListComponent"], _component_xml_schema_details_xml_schema_details_component__WEBPACK_IMPORTED_MODULE_4__["XmlSchemaDetailsComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"].forRoot(appRoutes, {
        useHash: true
      }), /* Core Modules */
      _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], /* Amexio Modules */
      amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_8__["AmexioDataModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_8__["AmexioWidgetModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_8__["AmexioChartsModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_8__["AmexioEnterpriseModule"], /* PrimeNG Modules */
      primeng_accordion__WEBPACK_IMPORTED_MODULE_9__["AccordionModule"], primeng_table__WEBPACK_IMPORTED_MODULE_10__["TableModule"], primeng_tree__WEBPACK_IMPORTED_MODULE_11__["TreeModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_12__["ToastModule"], primeng_contextmenu__WEBPACK_IMPORTED_MODULE_14__["ContextMenuModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_15__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_16__["CodeHighlighterModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_17__["BreadcrumbModule"], primeng_button__WEBPACK_IMPORTED_MODULE_13__["ButtonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_18__["DialogModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_19__["InputTextareaModule"], angular_progress_bar__WEBPACK_IMPORTED_MODULE_20__["ProgressBarModule"]],
      providers: [_service_xml_schema_service__WEBPACK_IMPORTED_MODULE_5__["XmlSchemaService"]],
      exports: [_component_xml_schema_list_xml_schema_list_component__WEBPACK_IMPORTED_MODULE_3__["XmlSchemaListComponent"], _component_xml_schema_details_xml_schema_details_component__WEBPACK_IMPORTED_MODULE_4__["XmlSchemaDetailsComponent"]]
    })], XmlSchemaModule);

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
    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(cdr) {
        _classCallCheck(this, AppComponent);
        this.cdr = cdr;
        this.status = false;
        this.dblClickTime = 300;
        this.useTransition = true;
        this.previousSizes = [25, 75];
      }
      return _createClass(AppComponent, [{
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
      }]);
    }();
    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('split', {
      "static": false
    })], AppComponent.prototype, "splitComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('area1', {
      "static": false
    })], AppComponent.prototype, "area1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('area2', {
      "static": false
    })], AppComponent.prototype, "area2", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      host: {
        'class': 'Maincontent'
      },
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
    var angular_font_awesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-font-awesome */"./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
    /* harmony import */
    var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-multiselect-dropdown */"./node_modules/angular2-multiselect-dropdown/fesm2015/angular2-multiselect-dropdown.js");
    /* harmony import */
    var angular_split__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-split */"./node_modules/angular-split/fesm2015/angular-split.js");
    /* harmony import */
    var _ngx_prism_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-prism/core */"./node_modules/@ngx-prism/core/dist/index.js");
    /* harmony import */
    var primeng_accordion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/accordion */"./node_modules/primeng/fesm2015/primeng-accordion.js");
    /* harmony import */
    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/breadcrumb */"./node_modules/primeng/fesm2015/primeng-breadcrumb.js");
    /* harmony import */
    var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */"./node_modules/primeng/fesm2015/primeng-button.js");
    /* harmony import */
    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/codehighlighter */"./node_modules/primeng/fesm2015/primeng-codehighlighter.js");
    /* harmony import */
    var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/contextmenu */"./node_modules/primeng/fesm2015/primeng-contextmenu.js");
    /* harmony import */
    var primeng_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/api */"./node_modules/primeng/fesm2015/primeng-api.js");
    /* harmony import */
    var angular_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-progress-bar */"./node_modules/angular-progress-bar/fesm2015/angular-progress-bar.js");
    /* harmony import */
    var primeng_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/table */"./node_modules/primeng/fesm2015/primeng-table.js");
    /* harmony import */
    var primeng_tabview__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/tabview */"./node_modules/primeng/fesm2015/primeng-tabview.js");
    /* harmony import */
    var primeng_toast__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/toast */"./node_modules/primeng/fesm2015/primeng-toast.js");
    /* harmony import */
    var primeng_tree__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/tree */"./node_modules/primeng/fesm2015/primeng-tree.js");
    /* harmony import */
    var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! amexio-ng-extensions */"./node_modules/amexio-ng-extensions/amexio-ng-extensions.js");
    /* harmony import */
    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-ui-loader */"./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _ui_header_header_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ui/header/header.component */"./src/app/ui/header/header.component.ts");
    /* harmony import */
    var _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ui/footer/footer.component */"./src/app/ui/footer/footer.component.ts");
    /* harmony import */
    var _ui_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ui/main-page/main-page.component */"./src/app/ui/main-page/main-page.component.ts");
    /* harmony import */
    var _left_menu_components_leftmenu_leftmenu_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./left-menu/components/leftmenu/leftmenu.component */"./src/app/left-menu/components/leftmenu/leftmenu.component.ts");
    /* harmony import */
    var _database_components_database_selector_database_selector_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./database/components/database-selector/database-selector.component */"./src/app/database/components/database-selector/database-selector.component.ts");
    /* harmony import */
    var _table_tables_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./table/tables.module */"./src/app/table/tables.module.ts");
    /* harmony import */
    var _database_database_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./database/database.module */"./src/app/database/database.module.ts");
    /* harmony import */
    var _procedure_procedure_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./procedure/procedure.module */"./src/app/procedure/procedure.module.ts");
    /* harmony import */
    var _function_function_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./function/function.module */"./src/app/function/function.module.ts");
    /* harmony import */
    var _view_views_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./view/views.module */"./src/app/view/views.module.ts");
    /* harmony import */
    var _UserDefinedDataType_user_defined_data_types_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./UserDefinedDataType/user-defined-data-types.module */"./src/app/UserDefinedDataType/user-defined-data-types.module.ts");
    /* harmony import */
    var _Triggers_database_trigger_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./Triggers/database-trigger.module */"./src/app/Triggers/database-trigger.module.ts");
    /* harmony import */
    var _XmlSchema_xml_schema_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./XmlSchema/xml-schema.module */"./src/app/XmlSchema/xml-schema.module.ts");
    /* harmony import */
    var _schema_schemas_module__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./schema/schemas.module */"./src/app/schema/schemas.module.ts");
    /* harmony import */
    var _auth_auth_module__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./auth/auth.module */"./src/app/auth/auth.module.ts");
    /* harmony import */
    var _auth_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./auth/interceptors/auth.interceptor */"./src/app/auth/interceptors/auth.interceptor.ts");
    /* harmony import */
    var _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./auth/components/login/login.component */"./src/app/auth/components/login/login.component.ts");
    /* harmony import */
    var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./auth/guards/auth.guard */"./src/app/auth/guards/auth.guard.ts");
    /* harmony import */
    var _table_components_tables_tables_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./table/components/tables/tables.component */"./src/app/table/components/tables/tables.component.ts");
    /* harmony import */
    var _table_components_table_table_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./table/components/table/table.component */"./src/app/table/components/table/table.component.ts");
    /* harmony import */
    var _procedure_components_procedures_procedures_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./procedure/components/procedures/procedures.component */"./src/app/procedure/components/procedures/procedures.component.ts");
    /* harmony import */
    var _procedure_components_procedure_procedure_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./procedure/components/procedure/procedure.component */"./src/app/procedure/components/procedure/procedure.component.ts");
    /* harmony import */
    var _view_components_views_views_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./view/components/views/views.component */"./src/app/view/components/views/views.component.ts");
    /* harmony import */
    var _view_components_view_view_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./view/components/view/view.component */"./src/app/view/components/view/view.component.ts");
    /* harmony import */
    var _function_component_aggregate_functions_aggregate_functions_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./function/component/aggregate-functions/aggregate-functions.component */"./src/app/function/component/aggregate-functions/aggregate-functions.component.ts");
    /* harmony import */
    var _function_component_aggregate_function_aggregate_function_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./function/component/aggregate-function/aggregate-function.component */"./src/app/function/component/aggregate-function/aggregate-function.component.ts");
    /* harmony import */
    var _function_component_scalar_functions_scalar_functions_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./function/component/scalar-functions/scalar-functions.component */"./src/app/function/component/scalar-functions/scalar-functions.component.ts");
    /* harmony import */
    var _function_component_scalar_function_scalar_function_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./function/component/scalar-function/scalar-function.component */"./src/app/function/component/scalar-function/scalar-function.component.ts");
    /* harmony import */
    var _function_component_table_value_functions_table_value_functions_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./function/component/table-value-functions/table-value-functions.component */"./src/app/function/component/table-value-functions/table-value-functions.component.ts");
    /* harmony import */
    var _function_component_table_value_function_table_value_function_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./function/component/table-value-function/table-value-function.component */"./src/app/function/component/table-value-function/table-value-function.component.ts");
    /* harmony import */
    var _Triggers_components_database_triggers_database_triggers_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./Triggers/components/database-triggers/database-triggers.component */"./src/app/Triggers/components/database-triggers/database-triggers.component.ts");
    /* harmony import */
    var _Triggers_components_database_trigger_database_trigger_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./Triggers/components/database-trigger/database-trigger.component */"./src/app/Triggers/components/database-trigger/database-trigger.component.ts");
    /* harmony import */
    var _schema_components_schemas_schemas_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./schema/components/schemas/schemas.component */"./src/app/schema/components/schemas/schemas.component.ts");
    /* harmony import */
    var _schema_components_schema_schema_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./schema/components/schema/schema.component */"./src/app/schema/components/schema/schema.component.ts");
    /* harmony import */
    var _XmlSchema_component_xml_schema_list_xml_schema_list_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./XmlSchema/component/xml-schema-list/xml-schema-list.component */"./src/app/XmlSchema/component/xml-schema-list/xml-schema-list.component.ts");
    /* harmony import */
    var _XmlSchema_component_xml_schema_details_xml_schema_details_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./XmlSchema/component/xml-schema-details/xml-schema-details.component */"./src/app/XmlSchema/component/xml-schema-details/xml-schema-details.component.ts");
    /* harmony import */
    var _UserDefinedDataType_components_user_defined_data_types_user_defined_data_types_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./UserDefinedDataType/components/user-defined-data-types/user-defined-data-types.component */"./src/app/UserDefinedDataType/components/user-defined-data-types/user-defined-data-types.component.ts");
    /* harmony import */
    var _UserDefinedDataType_components_user_defined_data_type_user_defined_data_type_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./UserDefinedDataType/components/user-defined-data-type/user-defined-data-type.component */"./src/app/UserDefinedDataType/components/user-defined-data-type/user-defined-data-type.component.ts");
    /* harmony import */
    var _database_components_database_details_database_details_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./database/components/database-details/database-details.component */"./src/app/database/components/database-details/database-details.component.ts");
    /* harmony import */
    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./shared/shared.module */"./src/app/shared/shared.module.ts");

    // Third-party UI Libraries

    // PrimeNG Modules

    // Amexio Modules

    // NGX-UI-Loader

    // Routing

    // Application Components

    // Feature Modules

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
    // Application Routes
    //const appRoutes: Routes = [
    //  { path: 'login', component: LoginComponent },
    //  { path: '', redirectTo: '/', pathMatch: 'full' }
    //];
    var appRoutes = [
    // Login route (public, no guard, no layout)
    {
      path: 'login',
      component: _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_44__["LoginComponent"]
    },
    // Main protected area with child routes
    {
      path: '',
      component: _ui_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_30__["MainPageComponent"],
      canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_45__["AuthGuard"]],
      children: [{
        path: 'Tables',
        component: _table_components_tables_tables_component__WEBPACK_IMPORTED_MODULE_46__["TablesComponent"]
      }, {
        path: 'Table/:objectname',
        component: _table_components_table_table_component__WEBPACK_IMPORTED_MODULE_47__["TableComponent"]
      }, {
        path: 'Storeprocedures',
        component: _procedure_components_procedures_procedures_component__WEBPACK_IMPORTED_MODULE_48__["ProceduresComponent"]
      }, {
        path: 'Storeprocedure/:objectname',
        component: _procedure_components_procedure_procedure_component__WEBPACK_IMPORTED_MODULE_49__["ProcedureComponent"]
      }, {
        path: 'Views',
        component: _view_components_views_views_component__WEBPACK_IMPORTED_MODULE_50__["ViewsComponent"]
      }, {
        path: 'View/:objectname',
        component: _view_components_view_view_component__WEBPACK_IMPORTED_MODULE_51__["ViewComponent"]
      }, {
        path: 'AggregateFunctions',
        component: _function_component_aggregate_functions_aggregate_functions_component__WEBPACK_IMPORTED_MODULE_52__["AggregateFunctionsComponent"]
      }, {
        path: 'AggregateFunction/:objectname',
        component: _function_component_aggregate_function_aggregate_function_component__WEBPACK_IMPORTED_MODULE_53__["AggregateFunctionComponent"]
      }, {
        path: 'ScalarFunctions',
        component: _function_component_scalar_functions_scalar_functions_component__WEBPACK_IMPORTED_MODULE_54__["ScalarFunctionsComponent"]
      }, {
        path: 'ScalarFunction/:objectname',
        component: _function_component_scalar_function_scalar_function_component__WEBPACK_IMPORTED_MODULE_55__["ScalarFunctionComponent"]
      }, {
        path: 'TableValueFunctions',
        component: _function_component_table_value_functions_table_value_functions_component__WEBPACK_IMPORTED_MODULE_56__["TableValueFunctionsComponent"]
      }, {
        path: 'TableValueFunction/:objectname',
        component: _function_component_table_value_function_table_value_function_component__WEBPACK_IMPORTED_MODULE_57__["TableValueFunctionComponent"]
      }, {
        path: 'Triggers',
        component: _Triggers_components_database_triggers_database_triggers_component__WEBPACK_IMPORTED_MODULE_58__["DatabaseTriggersComponent"]
      }, {
        path: 'Trigger/:objectname',
        component: _Triggers_components_database_trigger_database_trigger_component__WEBPACK_IMPORTED_MODULE_59__["DatabaseTriggerComponent"]
      }, {
        path: 'Schemas',
        component: _schema_components_schemas_schemas_component__WEBPACK_IMPORTED_MODULE_60__["SchemasComponent"]
      }, {
        path: 'Schema/:objectname',
        component: _schema_components_schema_schema_component__WEBPACK_IMPORTED_MODULE_61__["SchemaComponent"]
      }, {
        path: 'XmlSchemas',
        component: _XmlSchema_component_xml_schema_list_xml_schema_list_component__WEBPACK_IMPORTED_MODULE_62__["XmlSchemaListComponent"]
      }, {
        path: 'XmlSchema/:objectname',
        component: _XmlSchema_component_xml_schema_details_xml_schema_details_component__WEBPACK_IMPORTED_MODULE_63__["XmlSchemaDetailsComponent"]
      }, {
        path: 'UserDefinedDataTypes',
        component: _UserDefinedDataType_components_user_defined_data_types_user_defined_data_types_component__WEBPACK_IMPORTED_MODULE_64__["UserDefinedDataTypesComponent"]
      }, {
        path: 'UserDefinedDataType/:objectname',
        component: _UserDefinedDataType_components_user_defined_data_type_user_defined_data_type_component__WEBPACK_IMPORTED_MODULE_65__["UserDefinedDataTypeComponent"]
      }, {
        path: 'Database',
        component: _database_components_database_details_database_details_component__WEBPACK_IMPORTED_MODULE_66__["DatabaseDetailsComponent"]
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
    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_27__["AppComponent"], _ui_header_header_component__WEBPACK_IMPORTED_MODULE_28__["HeaderComponent"], _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_29__["FooterComponent"], _ui_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_30__["MainPageComponent"], _left_menu_components_leftmenu_leftmenu_component__WEBPACK_IMPORTED_MODULE_31__["LeftmenuComponent"], _database_components_database_selector_database_selector_component__WEBPACK_IMPORTED_MODULE_32__["DatabaseSelectorComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"].withServerTransition({
        appId: 'ng-cli-universal'
      }), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
      // Amexio Modules
      amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_24__["AmexioDataModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_24__["AmexioWidgetModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_24__["AmexioChartsModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_24__["AmexioEnterpriseModule"],
      // PrimeNG Modules
      primeng_accordion__WEBPACK_IMPORTED_MODULE_13__["AccordionModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_14__["BreadcrumbModule"], primeng_button__WEBPACK_IMPORTED_MODULE_15__["ButtonModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_16__["CodeHighlighterModule"], primeng_contextmenu__WEBPACK_IMPORTED_MODULE_17__["ContextMenuModule"], primeng_table__WEBPACK_IMPORTED_MODULE_20__["TableModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_21__["TabViewModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_22__["ToastModule"], primeng_tree__WEBPACK_IMPORTED_MODULE_23__["TreeModule"],
      // Third-Party UI Libraries
      _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(), angular_font_awesome__WEBPACK_IMPORTED_MODULE_9__["AngularFontAwesomeModule"], angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__["AngularMultiSelectModule"], angular_split__WEBPACK_IMPORTED_MODULE_11__["AngularSplitModule"].forRoot(), _ngx_prism_core__WEBPACK_IMPORTED_MODULE_12__["PrismModule"], angular_progress_bar__WEBPACK_IMPORTED_MODULE_19__["ProgressBarModule"],
      // NGX-UI-Loader
      ngx_ui_loader__WEBPACK_IMPORTED_MODULE_25__["NgxUiLoaderModule"].forRoot(ngxUiLoaderConfig), ngx_ui_loader__WEBPACK_IMPORTED_MODULE_25__["NgxUiLoaderHttpModule"],
      // Shared Module
      _shared_shared_module__WEBPACK_IMPORTED_MODULE_67__["SharedModule"],
      // Feature Modules (these have their own routes)
      _view_views_module__WEBPACK_IMPORTED_MODULE_37__["ViewModule"], _table_tables_module__WEBPACK_IMPORTED_MODULE_33__["TablesModule"], _database_database_module__WEBPACK_IMPORTED_MODULE_34__["DatabaseModule"], _procedure_procedure_module__WEBPACK_IMPORTED_MODULE_35__["ProcedureModule"], _function_function_module__WEBPACK_IMPORTED_MODULE_36__["FunctionModule"], _UserDefinedDataType_user_defined_data_types_module__WEBPACK_IMPORTED_MODULE_38__["UserDefinedDataTypesModule"], _Triggers_database_trigger_module__WEBPACK_IMPORTED_MODULE_39__["DatabaseTriggerModule"], _XmlSchema_xml_schema_module__WEBPACK_IMPORTED_MODULE_40__["XmlSchemaModule"], _schema_schemas_module__WEBPACK_IMPORTED_MODULE_41__["SchemasModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_42__["AuthModule"],
      // Routing - MUST BE LAST
      _angular_router__WEBPACK_IMPORTED_MODULE_26__["RouterModule"].forRoot(appRoutes, {
        useHash: true
      })],
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["HashLocationStrategy"]
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
        useClass: _auth_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_43__["AuthInterceptor"],
        multi: true
      }, primeng_api__WEBPACK_IMPORTED_MODULE_18__["TreeDragDropService"], primeng_api__WEBPACK_IMPORTED_MODULE_18__["MessageService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_27__["AppComponent"]]
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
          var _this9 = this;
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
            _this9.loading = false;
            console.log('Login successful:', response);
            // Reset login attempts on success
            _this9.loginAttempts = 0;
            _this9.lastAttemptTime = 0;
            // Show elements back before navigating
            _this9.showElements();
            // Navigate to the return URL or default to Database
            _this9.router.navigate([_this9.returnUrl]);
          }, function (error) {
            _this9.loading = false;
            console.error('Login error:', error);
            // Increment failed login attempts
            _this9.loginAttempts++;
            _this9.lastAttemptTime = Date.now();
            // Handle different error scenarios
            if (error.error && error.error.error_description) {
              _this9.errorMessage = error.error.error_description;
            } else if (error.status === 0) {
              _this9.errorMessage = 'Unable to connect to the server. Please check your connection.';
            } else if (error.status === 400) {
              var remainingAttempts = _this9.MAX_ATTEMPTS - _this9.loginAttempts;
              if (remainingAttempts > 0) {
                _this9.errorMessage = "Invalid username or password. ".concat(remainingAttempts, " attempt(s) remaining.");
              } else {
                _this9.errorMessage = 'Invalid username or password. Account temporarily locked.';
              }
            } else {
              _this9.errorMessage = 'An error occurred during login. Please try again.';
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
          var _this0 = this;
          // Don't add token to token endpoint
          if (request.url.includes('/connect/token')) {
            return next.handle(request);
          }
          // Add authorization header with token
          var token = this.authService.getToken();
          if (token && !this.authService.isTokenExpired()) {
            request = this.addTokenAndSecurityHeaders(request, token);
          } else {
            // Add security headers even without token
            request = this.addSecurityHeaders(request);
          }
          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"] && error.status === 401) {
              return _this0.handle401Error(request, next);
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
          var _this1 = this;
          if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);
            return this.authService.refreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (response) {
              _this1.isRefreshing = false;
              _this1.refreshTokenSubject.next(response.access_token);
              return next.handle(_this1.addToken(request, response.access_token));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
              _this1.isRefreshing = false;
              _this1.authService.logout();
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
            }));
          } else {
            return this.refreshTokenSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (token) {
              return token != null;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (token) {
              return next.handle(_this1.addToken(request, token));
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
    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);
        this.http = http;
        this.API_URL = ''; // Use relative URLs to work with proxy
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
          var _this10 = this;
          var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('username', username).set('password', password).set('client_id', 'swagger_ui').set('grant_type', 'password');
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded'
          });
          return this.http.post("".concat(this.API_URL, "/connect/token"), body.toString(), {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
            _this10.storeTokens(response);
            _this10.isAuthenticatedSubject.next(true);
            _this10.loadCurrentUser().subscribe();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            console.error('Login failed:', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
          }));
        }
        /**
         * Refresh the access token using refresh token
         */
      }, {
        key: "refreshToken",
        value: function refreshToken() {
          var _this11 = this;
          var refreshToken = this.getRefreshToken();
          if (!refreshToken) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('No refresh token available');
          }
          var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('grant_type', 'refresh_token').set('refresh_token', refreshToken).set('scope', 'openid email phone profile offline_access roles');
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded'
          });
          return this.http.post("".concat(this.API_URL, "/connect/token"), body.toString(), {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
            _this11.storeTokens(response);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            console.error('Token refresh failed:', error);
            _this11.logout();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
          }));
        }
        /**
         * Load current user details from API
         */
      }, {
        key: "loadCurrentUser",
        value: function loadCurrentUser() {
          var _this12 = this;
          var token = this.getToken();
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': "Bearer ".concat(token)
          });
          return this.http.get("".concat(this.API_URL, "/api/account/users/me"), {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (user) {
            _this12.storeUser(user);
            _this12.currentUserSubject.next(user);
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
         */
      }, {
        key: "isTokenExpired",
        value: function isTokenExpired() {
          var token = this.getToken();
          if (!token) {
            return true;
          }
          try {
            // Validate JWT structure (should have 3 parts separated by dots)
            var parts = token.split('.');
            if (parts.length !== 3) {
              console.warn('Invalid JWT token structure');
              return true;
            }
            // Decode and parse the payload
            var payload = JSON.parse(atob(parts[1]));
            // Validate expiry claim exists
            if (!payload.exp) {
              console.warn('JWT token missing expiry claim');
              return true;
            }
            // Check if token is expired (with 60 second buffer for clock skew)
            var expiry = payload.exp;
            var currentTime = Math.floor(new Date().getTime() / 1000);
            return currentTime >= expiry - 60;
          } catch (e) {
            console.error('Error parsing JWT token:', e);
            return true;
          }
        }
        /**
         * Store tokens in localStorage
         */
      }, {
        key: "storeTokens",
        value: function storeTokens(response) {
          localStorage.setItem(this.TOKEN_KEY, response.access_token);
          if (response.refresh_token) {
            localStorage.setItem(this.REFRESH_TOKEN_KEY, response.refresh_token);
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
      }];
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);

    /***/
  }),
  /***/"./src/app/database/components/database-details/database-details.component.css": (
  /*!*************************************************************************************!*\
    !*** ./src/app/database/components/database-details/database-details.component.css ***!
    \*************************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_database_components_databaseDetails_databaseDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\r\n#Objects li:last-child {\r\n    display: none;\r\n  }\r\n  .table {\r\n  margin:  0px 0 3px 0;\r\n    width: 100%;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n    display: table;\r\n  }\r\n  @media screen and (max-width: 580px) {\r\n    .table {\r\n      display: block;\r\n    }\r\n  }\r\n  .row {\r\n    display: table-row;\r\n    background: #f6f6f6;\r\n  }\r\n  .row:nth-of-type(odd) {\r\n      background: #e9e9e9;\r\n    }\r\n  .row.header {\r\n      font-weight: 900;\r\n      color: #ffffff;\r\n      background: #184569 !important;\r\n    }\r\n  .row.green {\r\n      background: #27ae60;\r\n    }\r\n  .row.blue {\r\n      background: #2980b9;\r\n    }\r\n  @media screen and (max-width: 580px) {\r\n    .row {\r\n      padding: 14px 0 7px;\r\n      display: block;\r\n    }\r\n  \r\n      .row.header {\r\n        padding: 0;\r\n        height: 6px;\r\n      }\r\n  \r\n        .row.header .cell {\r\n          display: none;\r\n        }\r\n  \r\n      .row .cell {\r\n        margin-bottom: 10px;\r\n      }\r\n  \r\n        .row .cell:before {\r\n          margin-bottom: 3px;\r\n          content: attr(data-title);\r\n          min-width: 98px;\r\n          font-size: 10px;\r\n          line-height: 10px;\r\n          font-weight: bold;\r\n          text-transform: uppercase;\r\n          color: #969696;\r\n          display: block;\r\n        }\r\n  }\r\n  .cell {\r\n  /*  padding: 6px 12px; */\r\n    display: table-cell;\r\n  }\r\n  @media screen and (max-width: 580px) {\r\n    .cell {\r\n      padding: 2px 16px;\r\n      display: block;\r\n    }\r\n  }\r\n  .node:hover {\r\n    fill: #ec008c;\r\n    opacity: 1;\r\n  }\r\n  .modal-dialog {\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  .modal-content {\r\n    height: auto;\r\n    min-height: 100%;\r\n    border: 0 none;\r\n    border-radius: 0;\r\n    box-shadow: none;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YWJhc2UvY29tcG9uZW50cy9kYXRhYmFzZS1kZXRhaWxzL2RhdGFiYXNlLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxhQUFhO0VBQ2Y7RUFDQTtFQUNBLG9CQUFvQjtJQUNsQixXQUFXO0lBQ1gsd0NBQXdDO0lBQ3hDLGNBQWM7RUFDaEI7RUFFQTtJQUNFO01BQ0UsY0FBYztJQUNoQjtFQUNGO0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCO0VBRUU7TUFDRSxtQkFBbUI7SUFDckI7RUFFQTtNQUNFLGdCQUFnQjtNQUNoQixjQUFjO01BQ2QsOEJBQThCO0lBQ2hDO0VBRUE7TUFDRSxtQkFBbUI7SUFDckI7RUFFQTtNQUNFLG1CQUFtQjtJQUNyQjtFQUVGO0lBQ0U7TUFDRSxtQkFBbUI7TUFDbkIsY0FBYztJQUNoQjs7TUFFRTtRQUNFLFVBQVU7UUFDVixXQUFXO01BQ2I7O1FBRUU7VUFDRSxhQUFhO1FBQ2Y7O01BRUY7UUFDRSxtQkFBbUI7TUFDckI7O1FBRUU7VUFDRSxrQkFBa0I7VUFDbEIseUJBQXlCO1VBQ3pCLGVBQWU7VUFDZixlQUFlO1VBQ2YsaUJBQWlCO1VBQ2pCLGlCQUFpQjtVQUNqQix5QkFBeUI7VUFDekIsY0FBYztVQUNkLGNBQWM7UUFDaEI7RUFDTjtFQUVBO0VBQ0Esd0JBQXdCO0lBQ3RCLG1CQUFtQjtFQUNyQjtFQUVBO0lBQ0U7TUFDRSxpQkFBaUI7TUFDakIsY0FBYztJQUNoQjtFQUNGO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsVUFBVTtFQUNaO0VBR0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0VBQ1o7RUFFQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9kYXRhYmFzZS9jb21wb25lbnRzL2RhdGFiYXNlLWRldGFpbHMvZGF0YWJhc2UtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNPYmplY3RzIGxpOmxhc3QtY2hpbGQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnRhYmxlIHtcclxuICBtYXJnaW46ICAwcHggMCAzcHggMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gICAgLnRhYmxlIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheTogdGFibGUtcm93O1xyXG4gICAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxuICB9XHJcbiAgXHJcbiAgICAucm93Om50aC1vZi10eXBlKG9kZCkge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnJvdy5oZWFkZXIge1xyXG4gICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgYmFja2dyb3VuZDogIzE4NDU2OSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnJvdy5ncmVlbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMyN2FlNjA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucm93LmJsdWUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMjk4MGI5O1xyXG4gICAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgICAucm93IHtcclxuICAgICAgcGFkZGluZzogMTRweCAwIDdweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAgIC5yb3cuaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGhlaWdodDogNnB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnJvdy5oZWFkZXIgLmNlbGwge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgIC5yb3cgLmNlbGwge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgICAucm93IC5jZWxsOmJlZm9yZSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xyXG4gICAgICAgICAgbWluLXdpZHRoOiA5OHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICBjb2xvcjogIzk2OTY5NjtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmNlbGwge1xyXG4gIC8qICBwYWRkaW5nOiA2cHggMTJweDsgKi9cclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgICAuY2VsbCB7XHJcbiAgICAgIHBhZGRpbmc6IDJweCAxNnB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbiAgLm5vZGU6aG92ZXIge1xyXG4gICAgZmlsbDogI2VjMDA4YztcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBcclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiAwIG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbiAgIl19 */";

    /***/
  }),
  /***/"./src/app/database/components/database-details/database-details.component.ts": (
  /*!************************************************************************************!*\
    !*** ./src/app/database/components/database-details/database-details.component.ts ***!
    \************************************************************************************/
  /*! exports provided: DatabaseDetailsComponent */
  /***/
  function _src_app_database_components_databaseDetails_databaseDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DatabaseDetailsComponent", function () {
      return DatabaseDetailsComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _service_database_metadata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/database-metadata.service */"./src/app/database/service/database-metadata.service.ts");
    var DatabaseDetailsComponent = /*#__PURE__*/function () {
      function DatabaseDetailsComponent(databaseMetadataService) {
        _classCallCheck(this, DatabaseDetailsComponent);
        this.databaseMetadataService = databaseMetadataService;
        this.objectTypeItems = [];
        this.isLoading = true;
      }
      return _createClass(DatabaseDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadDatabaseMetadata();
        }
      }, {
        key: "loadDatabaseMetadata",
        value: function loadDatabaseMetadata() {
          var _this13 = this;
          this.isLoading = true;
          this.databaseMetadataService.getDatabaseMetaData().subscribe({
            next: function next(databaseMetaData) {
              if (databaseMetaData) {
                _this13.databaseMetaData = databaseMetaData;
                _this13.initializeObjectTypeItems();
                _this13.isLoading = false;
              }
            },
            error: function error(_error) {
              _this13.handleLoadError(_error);
              _this13.isLoading = false;
            }
          });
        }
      }, {
        key: "initializeObjectTypeItems",
        value: function initializeObjectTypeItems() {
          var metadataConfig = [{
            icon: 'Table.png',
            label: 'Tables',
            data: this.databaseMetaData.tablesMetadata,
            routing: "/Tables"
          }, {
            icon: 'View.png',
            label: 'View',
            data: this.databaseMetaData.viewMetadata,
            routing: "/Views"
          }, {
            icon: 'StoredProcedure.png',
            label: 'Stored Procedure',
            data: this.databaseMetaData.procedureInfos,
            routing: "/Storeprocedures"
          }, {
            icon: 'Function_Table.png',
            label: 'Aggregated-Valued Functions',
            data: this.databaseMetaData.tableFunctionInfos,
            routing: "/AggregateFunctions"
          }, {
            icon: 'Function_Table.png',
            label: 'Table-Valued Functions',
            data: this.databaseMetaData.tableFunctionInfos,
            routing: "/TableValueFunctions"
          }, {
            icon: 'Function_Scalar.png',
            label: 'Scalar-Valued Functions',
            data: this.databaseMetaData.scalarFunctionInfos,
            routing: "/ScalarFunctions"
          }, {
            icon: 'DdlTrigger.png',
            label: 'Database Triggers',
            data: this.databaseMetaData.triggerInfos,
            routing: "/Triggers"
          }, {
            icon: 'UserDefinedDataType.png',
            label: 'User-Defined Data Types',
            data: this.databaseMetaData.userTypes,
            routing: "/UserDefinedDataTypes"
          }, {
            icon: 'XmlSchemaCollection.png',
            label: 'XML Schema Collections',
            data: this.databaseMetaData.dbXmlSchemas,
            routing: "/XmlSchemas"
          }];
          this.objectTypeItems = metadataConfig.map(function (item) {
            return {
              icon: "./assets/icons/".concat(item.icon),
              label: item.label,
              count: item.data.length,
              visible: !!item.data.length,
              routing: item.routing
            };
          });
        }
      }, {
        key: "handleLoadError",
        value: function handleLoadError(error) {
          console.error('Failed to load database metadata:', error);
        }
      }]);
    }();
    DatabaseDetailsComponent.ctorParameters = function () {
      return [{
        type: _service_database_metadata_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseMetadataService"]
      }];
    };
    DatabaseDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-database-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./database-details.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/database/components/database-details/database-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./database-details.component.css */"./src/app/database/components/database-details/database-details.component.css"))["default"]]
    })], DatabaseDetailsComponent);

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
    var _service_database_metadata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/database-metadata.service */"./src/app/database/service/database-metadata.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var DatabaseSelectorComponent = /*#__PURE__*/function () {
      function DatabaseSelectorComponent(databaseService, router) {
        _classCallCheck(this, DatabaseSelectorComponent);
        this.databaseService = databaseService;
        this.router = router;
        this.selectedDatabase = '';
        this.databases = []; // List of available databases
      }
      return _createClass(DatabaseSelectorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadDatabases();
        }
        // Load available databases from backend
      }, {
        key: "loadDatabases",
        value: function loadDatabases() {
          var _this14 = this;
          this.databaseService.getDatabases().subscribe(function (response) {
            _this14.databases = response;
            // Set default to the currently active database
            _this14.getCurrentDatabase();
          }, function (error) {
            return console.error('❌ Error fetching databases:', error);
          });
        }
        // Get the currently active database
      }, {
        key: "getCurrentDatabase",
        value: function getCurrentDatabase() {
          var _this15 = this;
          this.databaseService.getCurrentDatabase().subscribe(function (response) {
            _this15.selectedDatabase = response.database;
          }, function (error) {
            return console.error('❌ Error fetching current database:', error);
          });
        }
        // Change the database
      }, {
        key: "onChangeDatabase",
        value: function onChangeDatabase() {
          var _this16 = this;
          this.databaseService.changeDatabase(this.selectedDatabase).subscribe(function (response) {
            console.log(response);
            _this16.router.navigate(['/Database']).then(function () {
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
        type: _service_database_metadata_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseMetadataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };
    DatabaseSelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-database-selector',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./database-selector.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/database/components/database-selector/database-selector.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./database-selector.component.css */"./src/app/database/components/database-selector/database-selector.component.css"))["default"]]
    })], DatabaseSelectorComponent);

    /***/
  }),
  /***/"./src/app/database/components/object-type-item/object-type-item.component.ts": (
  /*!************************************************************************************!*\
    !*** ./src/app/database/components/object-type-item/object-type-item.component.ts ***!
    \************************************************************************************/
  /*! exports provided: ObjectTypeItemComponent */
  /***/
  function _src_app_database_components_objectTypeItem_objectTypeItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ObjectTypeItemComponent", function () {
      return ObjectTypeItemComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var ObjectTypeItemComponent = /*#__PURE__*/_createClass(function ObjectTypeItemComponent() {
      _classCallCheck(this, ObjectTypeItemComponent);
      this.icon = '';
      this.label = '';
      this.visible = true;
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ObjectTypeItemComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ObjectTypeItemComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ObjectTypeItemComponent.prototype, "count", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ObjectTypeItemComponent.prototype, "visible", void 0);
    ObjectTypeItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-object-type-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./object-type-item.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/database/components/object-type-item/object-type-item.component.html"))["default"]
    })], ObjectTypeItemComponent);

    /***/
  }),
  /***/"./src/app/database/database.module.ts": (
  /*!*********************************************!*\
    !*** ./src/app/database/database.module.ts ***!
    \*********************************************/
  /*! exports provided: DatabaseModule */
  /***/
  function _src_app_database_databaseModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DatabaseModule", function () {
      return DatabaseModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! amexio-ng-extensions */"./node_modules/amexio-ng-extensions/amexio-ng-extensions.js");
    /* harmony import */
    var primeng_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/accordion */"./node_modules/primeng/fesm2015/primeng-accordion.js");
    /* harmony import */
    var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */"./node_modules/primeng/fesm2015/primeng-table.js");
    /* harmony import */
    var primeng_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tree */"./node_modules/primeng/fesm2015/primeng-tree.js");
    /* harmony import */
    var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toast */"./node_modules/primeng/fesm2015/primeng-toast.js");
    /* harmony import */
    var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */"./node_modules/primeng/fesm2015/primeng-button.js");
    /* harmony import */
    var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/contextmenu */"./node_modules/primeng/fesm2015/primeng-contextmenu.js");
    /* harmony import */
    var primeng_tabview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tabview */"./node_modules/primeng/fesm2015/primeng-tabview.js");
    /* harmony import */
    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/codehighlighter */"./node_modules/primeng/fesm2015/primeng-codehighlighter.js");
    /* harmony import */
    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/breadcrumb */"./node_modules/primeng/fesm2015/primeng-breadcrumb.js");
    /* harmony import */
    var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */"./node_modules/primeng/fesm2015/primeng-api.js");
    /* harmony import */
    var _service_database_metadata_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/database-metadata.service */"./src/app/database/service/database-metadata.service.ts");
    /* harmony import */
    var _components_object_type_item_object_type_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/object-type-item/object-type-item.component */"./src/app/database/components/object-type-item/object-type-item.component.ts");
    /* harmony import */
    var _components_database_details_database_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/database-details/database-details.component */"./src/app/database/components/database-details/database-details.component.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var appRoutes = [{
      path: 'Database',
      component: _components_database_details_database_details_component__WEBPACK_IMPORTED_MODULE_16__["DatabaseDetailsComponent"]
    }];
    var DatabaseModule = /*#__PURE__*/_createClass(function DatabaseModule() {
      _classCallCheck(this, DatabaseModule);
    });
    DatabaseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_database_details_database_details_component__WEBPACK_IMPORTED_MODULE_16__["DatabaseDetailsComponent"], _components_object_type_item_object_type_item_component__WEBPACK_IMPORTED_MODULE_15__["ObjectTypeItemComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"].forRoot(appRoutes, {
        useHash: true
      }), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_3__["AmexioDataModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_3__["AmexioWidgetModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_3__["AmexioChartsModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_3__["AmexioEnterpriseModule"], primeng_accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionModule"], primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"], primeng_tree__WEBPACK_IMPORTED_MODULE_6__["TreeModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_7__["ToastModule"], primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"], primeng_contextmenu__WEBPACK_IMPORTED_MODULE_9__["ContextMenuModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_10__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_11__["CodeHighlighterModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_12__["BreadcrumbModule"]],
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_13__["TreeDragDropService"], primeng_api__WEBPACK_IMPORTED_MODULE_13__["MessageService"], _service_database_metadata_service__WEBPACK_IMPORTED_MODULE_14__["DatabaseMetadataService"]],
      exports: [_components_database_details_database_details_component__WEBPACK_IMPORTED_MODULE_16__["DatabaseDetailsComponent"]]
    })], DatabaseModule);

    /***/
  }),
  /***/"./src/app/database/service/database-metadata.service.ts": (
  /*!***************************************************************!*\
    !*** ./src/app/database/service/database-metadata.service.ts ***!
    \***************************************************************/
  /*! exports provided: DatabaseMetadataService */
  /***/
  function _src_app_database_service_databaseMetadataServiceTs(module, __webpack_exports__, __webpack_require__) {
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
    /* harmony import */
    var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/services/auth.service */"./src/app/auth/services/auth.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var DatabaseMetadataService = /*#__PURE__*/function () {
      function DatabaseMetadataService(http, primaryUrl, secondaryUrl, authService, router) {
        _classCallCheck(this, DatabaseMetadataService);
        this.http = http;
        this.primaryUrl = primaryUrl;
        this.secondaryUrl = secondaryUrl;
        this.authService = authService;
        this.router = router;
      }
      return _createClass(DatabaseMetadataService, [{
        key: "getDatabaseMetaData",
        value: function getDatabaseMetaData() {
          var _this17 = this;
          var primaryUrl = "".concat(this.primaryUrl, "/Database/database-meta-data");
          var secondaryUrl = 'Database/database-meta-data';
          var headers = this.getAuthHeaders();
          return this.http.get(primaryUrl, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (primaryError) {
            console.error('Primary URL failed, trying secondary URL:', primaryError);
            return _this17.http.get(secondaryUrl, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (secondaryError) {
              console.error('Secondary URL also failed:', secondaryError);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }));
          }));
        }
      }, {
        key: "changeDatabase",
        value: function changeDatabase(databaseName) {
          var headers = this.getAuthHeaders();
          return this.http.post("".concat(this.primaryUrl, "/Database/ChangeDatabase"), {
            databaseName: databaseName
          }, {
            headers: headers
          });
        }
        // Get list of available databases
      }, {
        key: "getDatabases",
        value: function getDatabases() {
          var headers = this.getAuthHeaders();
          return this.http.get("".concat(this.primaryUrl, "/Database/list"), {
            headers: headers
          });
        }
        // Get the currently active database
      }, {
        key: "getCurrentDatabase",
        value: function getCurrentDatabase() {
          var headers = this.getAuthHeaders();
          return this.http.get("".concat(this.primaryUrl, "/Database/current"), {
            headers: headers
          });
        }
        /**
        * Get HTTP headers with bearer token
        */
      }, {
        key: "getAuthHeaders",
        value: function getAuthHeaders() {
          var token = this.authService.getToken();
          if (!token) {
            this.router.navigate(['/login']);
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          }
          return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': "Bearer ".concat(token)
          });
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
      }, {
        type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };
    DatabaseMetadataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('API_URL')), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('ANOTHER_URL'))], DatabaseMetadataService);

    /***/
  }),
  /***/"./src/app/function/component/aggregate-function/aggregate-function.component.css": (
  /*!****************************************************************************************!*\
    !*** ./src/app/function/component/aggregate-function/aggregate-function.component.css ***!
    \****************************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_function_component_aggregateFunction_aggregateFunctionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".table {\r\n    margin: 0px 0 3px 0;\r\n    width: 100%;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n    display: table;\r\n  }\r\n  \r\n  @media screen and (max-width: 580px) {\r\n    .table {\r\n      display: block;\r\n    }\r\n  }\r\n  \r\n  .row {\r\n    display: table-row;\r\n    background: #f6f6f6;\r\n  }\r\n  \r\n  .row:nth-of-type(odd) {\r\n      background: #e9e9e9;\r\n    }\r\n  \r\n  .row.header {\r\n      font-weight: 900;\r\n      color: #ffffff;\r\n      background: #184569 !important;\r\n    }\r\n  \r\n  .row.green {\r\n      background: #27ae60;\r\n    }\r\n  \r\n  .row.blue {\r\n      background: #2980b9;\r\n    }\r\n  \r\n  @media screen and (max-width: 580px) {\r\n    .row {\r\n      padding: 14px 0 7px;\r\n      display: block;\r\n    }\r\n  \r\n      .row.header {\r\n        padding: 0;\r\n        height: 6px;\r\n      }\r\n  \r\n        .row.header .cell {\r\n          display: none;\r\n        }\r\n  \r\n      .row .cell {\r\n        margin-bottom: 10px;\r\n      }\r\n  \r\n        .row .cell:before {\r\n          margin-bottom: 3px;\r\n          content: attr(data-title);\r\n          min-width: 98px;\r\n          font-size: 10px;\r\n          line-height: 10px;\r\n          font-weight: bold;\r\n          text-transform: uppercase;\r\n          color: #969696;\r\n          display: block;\r\n        }\r\n  }\r\n  \r\n  .cell {\r\n    /*  padding: 6px 12px; */\r\n    display: table-cell;\r\n  }\r\n  \r\n  @media screen and (max-width: 580px) {\r\n    .cell {\r\n      padding: 2px 16px;\r\n      display: block;\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVuY3Rpb24vY29tcG9uZW50L2FnZ3JlZ2F0ZS1mdW5jdGlvbi9hZ2dyZWdhdGUtZnVuY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsd0NBQXdDO0lBQ3hDLGNBQWM7RUFDaEI7O0VBRUE7SUFDRTtNQUNFLGNBQWM7SUFDaEI7RUFDRjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7O0VBRUU7TUFDRSxtQkFBbUI7SUFDckI7O0VBRUE7TUFDRSxnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLDhCQUE4QjtJQUNoQzs7RUFFQTtNQUNFLG1CQUFtQjtJQUNyQjs7RUFFQTtNQUNFLG1CQUFtQjtJQUNyQjs7RUFFRjtJQUNFO01BQ0UsbUJBQW1CO01BQ25CLGNBQWM7SUFDaEI7O01BRUU7UUFDRSxVQUFVO1FBQ1YsV0FBVztNQUNiOztRQUVFO1VBQ0UsYUFBYTtRQUNmOztNQUVGO1FBQ0UsbUJBQW1CO01BQ3JCOztRQUVFO1VBQ0Usa0JBQWtCO1VBQ2xCLHlCQUF5QjtVQUN6QixlQUFlO1VBQ2YsZUFBZTtVQUNmLGlCQUFpQjtVQUNqQixpQkFBaUI7VUFDakIseUJBQXlCO1VBQ3pCLGNBQWM7VUFDZCxjQUFjO1FBQ2hCO0VBQ047O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0U7TUFDRSxpQkFBaUI7TUFDakIsY0FBYztJQUNoQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvZnVuY3Rpb24vY29tcG9uZW50L2FnZ3JlZ2F0ZS1mdW5jdGlvbi9hZ2dyZWdhdGUtZnVuY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB7XHJcbiAgICBtYXJnaW46IDBweCAwIDNweCAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgICAudGFibGUge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG4gIH1cclxuICBcclxuICAgIC5yb3c6bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlOWU5ZTk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucm93LmhlYWRlciB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMTg0NTY5ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucm93LmdyZWVuIHtcclxuICAgICAgYmFja2dyb3VuZDogIzI3YWU2MDtcclxuICAgIH1cclxuICBcclxuICAgIC5yb3cuYmx1ZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMyOTgwYjk7XHJcbiAgICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAgIC5yb3cge1xyXG4gICAgICBwYWRkaW5nOiAxNHB4IDAgN3B4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICBcclxuICAgICAgLnJvdy5oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiA2cHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgICAucm93LmhlYWRlciAuY2VsbCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgLnJvdyAuY2VsbCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5yb3cgLmNlbGw6YmVmb3JlIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDk4cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgIGNvbG9yOiAjOTY5Njk2O1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gIH1cclxuICBcclxuICAuY2VsbCB7XHJcbiAgICAvKiAgcGFkZGluZzogNnB4IDEycHg7ICovXHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gICAgLmNlbGwge1xyXG4gICAgICBwYWRkaW5nOiAycHggMTZweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */";

    /***/
  }),
  /***/"./src/app/function/component/aggregate-function/aggregate-function.component.ts": (
  /*!***************************************************************************************!*\
    !*** ./src/app/function/component/aggregate-function/aggregate-function.component.ts ***!
    \***************************************************************************************/
  /*! exports provided: AggregateFunctionComponent */
  /***/
  function _src_app_function_component_aggregateFunction_aggregateFunctionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AggregateFunctionComponent", function () {
      return AggregateFunctionComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_aggregate_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/aggregate-function.service */"./src/app/function/services/aggregate-function.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var AggregateFunctionComponent = /*#__PURE__*/function () {
      function AggregateFunctionComponent(route, aggregateFunctionService) {
        _classCallCheck(this, AggregateFunctionComponent);
        this.route = route;
        this.aggregateFunctionService = aggregateFunctionService;
      }
      return _createClass(AggregateFunctionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.selectedFunction = this.route.snapshot.params.objectname;
          this.fetchFunctionMetadata();
        }
      }, {
        key: "fetchFunctionMetadata",
        value: function fetchFunctionMetadata() {
          var _this18 = this;
          if (this.selectedFunction) {
            this.aggregateFunctionService.getFunctionMetadata(this.selectedFunction).subscribe(function (data) {
              _this18.functionMetadata = data;
            });
          }
        }
      }, {
        key: "upsertFunctionDescription",
        value: function upsertFunctionDescription() {
          var schemaName = 'dbo';
          var description = 'Updated function description';
          this.aggregateFunctionService.upsertFunctionDescription(schemaName, this.selectedFunction, description).subscribe(function () {
            alert('Description updated successfully!');
          });
        }
      }]);
    }();
    AggregateFunctionComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_aggregate_function_service__WEBPACK_IMPORTED_MODULE_2__["AggregateFunctionService"]
      }];
    };
    AggregateFunctionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-aggregate-function',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./aggregate-function.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/aggregate-function/aggregate-function.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./aggregate-function.component.css */"./src/app/function/component/aggregate-function/aggregate-function.component.css"))["default"]]
    })], AggregateFunctionComponent);

    /***/
  }),
  /***/"./src/app/function/component/aggregate-functions/aggregate-functions.component.css": (
  /*!******************************************************************************************!*\
    !*** ./src/app/function/component/aggregate-functions/aggregate-functions.component.css ***!
    \******************************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_function_component_aggregateFunctions_aggregateFunctionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".table {\r\n    margin: 0px 0 3px 0;\r\n    width: 100%;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n    display: table;\r\n  }\r\n  \r\n  @media screen and (max-width: 580px) {\r\n    .table {\r\n      display: block;\r\n    }\r\n  }\r\n  \r\n  .row {\r\n    display: table-row;\r\n    background: #f6f6f6;\r\n  }\r\n  \r\n  .row:nth-of-type(odd) {\r\n      background: #e9e9e9;\r\n    }\r\n  \r\n  .row.header {\r\n      font-weight: 900;\r\n      color: #ffffff;\r\n      background: #184569 !important;\r\n    }\r\n  \r\n  .row.green {\r\n      background: #27ae60;\r\n    }\r\n  \r\n  .row.blue {\r\n      background: #2980b9;\r\n    }\r\n  \r\n  @media screen and (max-width: 580px) {\r\n    .row {\r\n      padding: 14px 0 7px;\r\n      display: block;\r\n    }\r\n  \r\n      .row.header {\r\n        padding: 0;\r\n        height: 6px;\r\n      }\r\n  \r\n        .row.header .cell {\r\n          display: none;\r\n        }\r\n  \r\n      .row .cell {\r\n        margin-bottom: 10px;\r\n      }\r\n  \r\n        .row .cell:before {\r\n          margin-bottom: 3px;\r\n          content: attr(data-title);\r\n          min-width: 98px;\r\n          font-size: 10px;\r\n          line-height: 10px;\r\n          font-weight: bold;\r\n          text-transform: uppercase;\r\n          color: #969696;\r\n          display: block;\r\n        }\r\n  }\r\n  \r\n  .cell {\r\n    /*  padding: 6px 12px; */\r\n    display: table-cell;\r\n  }\r\n  \r\n  @media screen and (max-width: 580px) {\r\n    .cell {\r\n      padding: 2px 16px;\r\n      display: block;\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVuY3Rpb24vY29tcG9uZW50L2FnZ3JlZ2F0ZS1mdW5jdGlvbnMvYWdncmVnYXRlLWZ1bmN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx3Q0FBd0M7SUFDeEMsY0FBYztFQUNoQjs7RUFFQTtJQUNFO01BQ0UsY0FBYztJQUNoQjtFQUNGOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjs7RUFFRTtNQUNFLG1CQUFtQjtJQUNyQjs7RUFFQTtNQUNFLGdCQUFnQjtNQUNoQixjQUFjO01BQ2QsOEJBQThCO0lBQ2hDOztFQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOztFQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOztFQUVGO0lBQ0U7TUFDRSxtQkFBbUI7TUFDbkIsY0FBYztJQUNoQjs7TUFFRTtRQUNFLFVBQVU7UUFDVixXQUFXO01BQ2I7O1FBRUU7VUFDRSxhQUFhO1FBQ2Y7O01BRUY7UUFDRSxtQkFBbUI7TUFDckI7O1FBRUU7VUFDRSxrQkFBa0I7VUFDbEIseUJBQXlCO1VBQ3pCLGVBQWU7VUFDZixlQUFlO1VBQ2YsaUJBQWlCO1VBQ2pCLGlCQUFpQjtVQUNqQix5QkFBeUI7VUFDekIsY0FBYztVQUNkLGNBQWM7UUFDaEI7RUFDTjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRTtNQUNFLGlCQUFpQjtNQUNqQixjQUFjO0lBQ2hCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9mdW5jdGlvbi9jb21wb25lbnQvYWdncmVnYXRlLWZ1bmN0aW9ucy9hZ2dyZWdhdGUtZnVuY3Rpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xyXG4gICAgbWFyZ2luOiAwcHggMCAzcHggMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gICAgLnRhYmxlIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheTogdGFibGUtcm93O1xyXG4gICAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxuICB9XHJcbiAgXHJcbiAgICAucm93Om50aC1vZi10eXBlKG9kZCkge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnJvdy5oZWFkZXIge1xyXG4gICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgYmFja2dyb3VuZDogIzE4NDU2OSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnJvdy5ncmVlbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMyN2FlNjA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucm93LmJsdWUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMjk4MGI5O1xyXG4gICAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgICAucm93IHtcclxuICAgICAgcGFkZGluZzogMTRweCAwIDdweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAgIC5yb3cuaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGhlaWdodDogNnB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnJvdy5oZWFkZXIgLmNlbGwge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgIC5yb3cgLmNlbGwge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgICAucm93IC5jZWxsOmJlZm9yZSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xyXG4gICAgICAgICAgbWluLXdpZHRoOiA5OHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICBjb2xvcjogIzk2OTY5NjtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmNlbGwge1xyXG4gICAgLyogIHBhZGRpbmc6IDZweCAxMnB4OyAqL1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAgIC5jZWxsIHtcclxuICAgICAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */";

    /***/
  }),
  /***/"./src/app/function/component/aggregate-functions/aggregate-functions.component.ts": (
  /*!*****************************************************************************************!*\
    !*** ./src/app/function/component/aggregate-functions/aggregate-functions.component.ts ***!
    \*****************************************************************************************/
  /*! exports provided: AggregateFunctionsComponent */
  /***/
  function _src_app_function_component_aggregateFunctions_aggregateFunctionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AggregateFunctionsComponent", function () {
      return AggregateFunctionsComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_aggregate_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/aggregate-function.service */"./src/app/function/services/aggregate-function.service.ts");
    var AggregateFunctionsComponent = /*#__PURE__*/function () {
      function AggregateFunctionsComponent(aggregateFunctionService) {
        _classCallCheck(this, AggregateFunctionsComponent);
        this.aggregateFunctionService = aggregateFunctionService;
        this.functionDescriptions = {};
      }
      return _createClass(AggregateFunctionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadFunctionDescriptions();
        }
      }, {
        key: "loadFunctionDescriptions",
        value: function loadFunctionDescriptions() {
          var _this19 = this;
          this.aggregateFunctionService.getAggregateFunctionDescriptions().subscribe(function (data) {
            _this19.functionDescriptions = data;
          });
        }
      }]);
    }();
    AggregateFunctionsComponent.ctorParameters = function () {
      return [{
        type: _services_aggregate_function_service__WEBPACK_IMPORTED_MODULE_2__["AggregateFunctionService"]
      }];
    };
    AggregateFunctionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-aggregate-functions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./aggregate-functions.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/aggregate-functions/aggregate-functions.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./aggregate-functions.component.css */"./src/app/function/component/aggregate-functions/aggregate-functions.component.css"))["default"]]
    })], AggregateFunctionsComponent);

    /***/
  }),
  /***/"./src/app/function/component/scalar-function/scalar-function.component.css": (
  /*!**********************************************************************************!*\
    !*** ./src/app/function/component/scalar-function/scalar-function.component.css ***!
    \**********************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_function_component_scalarFunction_scalarFunctionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".table {\r\n  margin: 0px 0 3px 0;\r\n  width: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: table;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .table {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.row {\r\n  display: table-row;\r\n  background: #f6f6f6;\r\n}\r\n\r\n.row:nth-of-type(odd) {\r\n    background: #e9e9e9;\r\n  }\r\n\r\n.row.header {\r\n    font-weight: 900;\r\n    color: #ffffff;\r\n    background: #184569 !important;\r\n  }\r\n\r\n.row.green {\r\n    background: #27ae60;\r\n  }\r\n\r\n.row.blue {\r\n    background: #2980b9;\r\n  }\r\n\r\n@media screen and (max-width: 580px) {\r\n  .row {\r\n    padding: 14px 0 7px;\r\n    display: block;\r\n  }\r\n\r\n    .row.header {\r\n      padding: 0;\r\n      height: 6px;\r\n    }\r\n\r\n      .row.header .cell {\r\n        display: none;\r\n      }\r\n\r\n    .row .cell {\r\n      margin-bottom: 10px;\r\n    }\r\n\r\n      .row .cell:before {\r\n        margin-bottom: 3px;\r\n        content: attr(data-title);\r\n        min-width: 98px;\r\n        font-size: 10px;\r\n        line-height: 10px;\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n        color: #969696;\r\n        display: block;\r\n      }\r\n}\r\n\r\n.cell {\r\n  /*  padding: 6px 12px; */\r\n  display: table-cell;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .cell {\r\n    padding: 2px 16px;\r\n    display: block;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVuY3Rpb24vY29tcG9uZW50L3NjYWxhci1mdW5jdGlvbi9zY2FsYXItZnVuY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsd0NBQXdDO0VBQ3hDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUU7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLDhCQUE4QjtFQUNoQzs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFRjtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLGNBQWM7RUFDaEI7O0lBRUU7TUFDRSxVQUFVO01BQ1YsV0FBVztJQUNiOztNQUVFO1FBQ0UsYUFBYTtNQUNmOztJQUVGO01BQ0UsbUJBQW1CO0lBQ3JCOztNQUVFO1FBQ0Usa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QixlQUFlO1FBQ2YsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIseUJBQXlCO1FBQ3pCLGNBQWM7UUFDZCxjQUFjO01BQ2hCO0FBQ047O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZnVuY3Rpb24vY29tcG9uZW50L3NjYWxhci1mdW5jdGlvbi9zY2FsYXItZnVuY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB7XHJcbiAgbWFyZ2luOiAwcHggMCAzcHggMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gIC50YWJsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG59XHJcblxyXG4gIC5yb3c6bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xyXG4gIH1cclxuXHJcbiAgLnJvdy5oZWFkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzE4NDU2OSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnJvdy5ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjdhZTYwO1xyXG4gIH1cclxuXHJcbiAgLnJvdy5ibHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICMyOTgwYjk7XHJcbiAgfVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAucm93IHtcclxuICAgIHBhZGRpbmc6IDE0cHggMCA3cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICAgLnJvdy5oZWFkZXIge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBoZWlnaHQ6IDZweDtcclxuICAgIH1cclxuXHJcbiAgICAgIC5yb3cuaGVhZGVyIC5jZWxsIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgLnJvdyAuY2VsbCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgICAucm93IC5jZWxsOmJlZm9yZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XHJcbiAgICAgICAgbWluLXdpZHRoOiA5OHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiAjOTY5Njk2O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbn1cclxuXHJcbi5jZWxsIHtcclxuICAvKiAgcGFkZGluZzogNnB4IDEycHg7ICovXHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAuY2VsbCB7XHJcbiAgICBwYWRkaW5nOiAycHggMTZweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG4iXX0= */";

    /***/
  }),
  /***/"./src/app/function/component/scalar-function/scalar-function.component.ts": (
  /*!*********************************************************************************!*\
    !*** ./src/app/function/component/scalar-function/scalar-function.component.ts ***!
    \*********************************************************************************/
  /*! exports provided: ScalarFunctionComponent */
  /***/
  function _src_app_function_component_scalarFunction_scalarFunctionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ScalarFunctionComponent", function () {
      return ScalarFunctionComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_scalar_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/scalar-function.service */"./src/app/function/services/scalar-function.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var ScalarFunctionComponent = /*#__PURE__*/function () {
      function ScalarFunctionComponent(route, scalarFunctionService) {
        _classCallCheck(this, ScalarFunctionComponent);
        this.route = route;
        this.scalarFunctionService = scalarFunctionService;
      }
      return _createClass(ScalarFunctionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.selectedFunction = this.route.snapshot.params.objectname;
          this.fetchFunctionMetadata();
        }
      }, {
        key: "fetchFunctionMetadata",
        value: function fetchFunctionMetadata() {
          var _this20 = this;
          if (this.selectedFunction) {
            this.scalarFunctionService.getFunctionMetadata(this.selectedFunction).subscribe(function (data) {
              _this20.functionMetadata = data;
            });
          }
        }
      }, {
        key: "upsertFunctionDescription",
        value: function upsertFunctionDescription() {
          var schemaName = 'dbo';
          var description = 'Updated function description';
          this.scalarFunctionService.upsertFunctionDescription(schemaName, this.selectedFunction, description).subscribe(function () {
            alert('Description updated successfully!');
          });
        }
      }]);
    }();
    ScalarFunctionComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_scalar_function_service__WEBPACK_IMPORTED_MODULE_2__["ScalarFunctionService"]
      }];
    };
    ScalarFunctionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-scalar-function',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./scalar-function.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/scalar-function/scalar-function.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./scalar-function.component.css */"./src/app/function/component/scalar-function/scalar-function.component.css"))["default"]]
    })], ScalarFunctionComponent);

    /***/
  }),
  /***/"./src/app/function/component/scalar-functions/scalar-functions.component.css": (
  /*!************************************************************************************!*\
    !*** ./src/app/function/component/scalar-functions/scalar-functions.component.css ***!
    \************************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_function_component_scalarFunctions_scalarFunctionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".table {\r\n  margin: 0px 0 3px 0;\r\n  width: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: table;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .table {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.row {\r\n  display: table-row;\r\n  background: #f6f6f6;\r\n}\r\n\r\n.row:nth-of-type(odd) {\r\n    background: #e9e9e9;\r\n  }\r\n\r\n.row.header {\r\n    font-weight: 900;\r\n    color: #ffffff;\r\n    background: #184569 !important;\r\n  }\r\n\r\n.row.green {\r\n    background: #27ae60;\r\n  }\r\n\r\n.row.blue {\r\n    background: #2980b9;\r\n  }\r\n\r\n@media screen and (max-width: 580px) {\r\n  .row {\r\n    padding: 14px 0 7px;\r\n    display: block;\r\n  }\r\n\r\n    .row.header {\r\n      padding: 0;\r\n      height: 6px;\r\n    }\r\n\r\n      .row.header .cell {\r\n        display: none;\r\n      }\r\n\r\n    .row .cell {\r\n      margin-bottom: 10px;\r\n    }\r\n\r\n      .row .cell:before {\r\n        margin-bottom: 3px;\r\n        content: attr(data-title);\r\n        min-width: 98px;\r\n        font-size: 10px;\r\n        line-height: 10px;\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n        color: #969696;\r\n        display: block;\r\n      }\r\n}\r\n\r\n.cell {\r\n  /*  padding: 6px 12px; */\r\n  display: table-cell;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .cell {\r\n    padding: 2px 16px;\r\n    display: block;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVuY3Rpb24vY29tcG9uZW50L3NjYWxhci1mdW5jdGlvbnMvc2NhbGFyLWZ1bmN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx3Q0FBd0M7RUFDeEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFRTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsOEJBQThCO0VBQ2hDOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVGO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsY0FBYztFQUNoQjs7SUFFRTtNQUNFLFVBQVU7TUFDVixXQUFXO0lBQ2I7O01BRUU7UUFDRSxhQUFhO01BQ2Y7O0lBRUY7TUFDRSxtQkFBbUI7SUFDckI7O01BRUU7UUFDRSxrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQix5QkFBeUI7UUFDekIsY0FBYztRQUNkLGNBQWM7TUFDaEI7QUFDTjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mdW5jdGlvbi9jb21wb25lbnQvc2NhbGFyLWZ1bmN0aW9ucy9zY2FsYXItZnVuY3Rpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xyXG4gIG1hcmdpbjogMHB4IDAgM3B4IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAudGFibGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxufVxyXG5cclxuICAucm93Om50aC1vZi10eXBlKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZDogI2U5ZTllOTtcclxuICB9XHJcblxyXG4gIC5yb3cuaGVhZGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQ6ICMxODQ1NjkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5yb3cuZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZDogIzI3YWU2MDtcclxuICB9XHJcblxyXG4gIC5yb3cuYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjk4MGI5O1xyXG4gIH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgLnJvdyB7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDAgN3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAgIC5yb3cuaGVhZGVyIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgaGVpZ2h0OiA2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgICAucm93LmhlYWRlciAuY2VsbCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgIC5yb3cgLmNlbGwge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICAgLnJvdyAuY2VsbDpiZWZvcmUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xyXG4gICAgICAgIG1pbi13aWR0aDogOThweDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBjb2xvcjogIzk2OTY5NjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG59XHJcblxyXG4uY2VsbCB7XHJcbiAgLyogIHBhZGRpbmc6IDZweCAxMnB4OyAqL1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgLmNlbGwge1xyXG4gICAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuIl19 */";

    /***/
  }),
  /***/"./src/app/function/component/scalar-functions/scalar-functions.component.ts": (
  /*!***********************************************************************************!*\
    !*** ./src/app/function/component/scalar-functions/scalar-functions.component.ts ***!
    \***********************************************************************************/
  /*! exports provided: ScalarFunctionsComponent */
  /***/
  function _src_app_function_component_scalarFunctions_scalarFunctionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ScalarFunctionsComponent", function () {
      return ScalarFunctionsComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_scalar_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/scalar-function.service */"./src/app/function/services/scalar-function.service.ts");
    var ScalarFunctionsComponent = /*#__PURE__*/function () {
      function ScalarFunctionsComponent(scalarFunctionService) {
        _classCallCheck(this, ScalarFunctionsComponent);
        this.scalarFunctionService = scalarFunctionService;
        this.functionDescriptions = {};
      }
      return _createClass(ScalarFunctionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadFunctionDescriptions();
        }
      }, {
        key: "loadFunctionDescriptions",
        value: function loadFunctionDescriptions() {
          var _this21 = this;
          this.scalarFunctionService.getScalarFunctionDescriptions().subscribe(function (data) {
            _this21.functionDescriptions = data;
          });
        }
      }]);
    }();
    ScalarFunctionsComponent.ctorParameters = function () {
      return [{
        type: _services_scalar_function_service__WEBPACK_IMPORTED_MODULE_2__["ScalarFunctionService"]
      }];
    };
    ScalarFunctionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-scalar-functions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./scalar-functions.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/scalar-functions/scalar-functions.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./scalar-functions.component.css */"./src/app/function/component/scalar-functions/scalar-functions.component.css"))["default"]]
    })], ScalarFunctionsComponent);

    /***/
  }),
  /***/"./src/app/function/component/table-value-function/table-value-function.component.css": (
  /*!********************************************************************************************!*\
    !*** ./src/app/function/component/table-value-function/table-value-function.component.css ***!
    \********************************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_function_component_tableValueFunction_tableValueFunctionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".table {\r\n    margin: 0px 0 3px 0;\r\n    width: 100%;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n    display: table;\r\n  }\r\n  \r\n  @media screen and (max-width: 580px) {\r\n    .table {\r\n      display: block;\r\n    }\r\n  }\r\n  \r\n  .row {\r\n    display: table-row;\r\n    background: #f6f6f6;\r\n  }\r\n  \r\n  .row:nth-of-type(odd) {\r\n      background: #e9e9e9;\r\n    }\r\n  \r\n  .row.header {\r\n      font-weight: 900;\r\n      color: #ffffff;\r\n      background: #184569 !important;\r\n    }\r\n  \r\n  .row.green {\r\n      background: #27ae60;\r\n    }\r\n  \r\n  .row.blue {\r\n      background: #2980b9;\r\n    }\r\n  \r\n  @media screen and (max-width: 580px) {\r\n    .row {\r\n      padding: 14px 0 7px;\r\n      display: block;\r\n    }\r\n  \r\n      .row.header {\r\n        padding: 0;\r\n        height: 6px;\r\n      }\r\n  \r\n        .row.header .cell {\r\n          display: none;\r\n        }\r\n  \r\n      .row .cell {\r\n        margin-bottom: 10px;\r\n      }\r\n  \r\n        .row .cell:before {\r\n          margin-bottom: 3px;\r\n          content: attr(data-title);\r\n          min-width: 98px;\r\n          font-size: 10px;\r\n          line-height: 10px;\r\n          font-weight: bold;\r\n          text-transform: uppercase;\r\n          color: #969696;\r\n          display: block;\r\n        }\r\n  }\r\n  \r\n  .cell {\r\n    /*  padding: 6px 12px; */\r\n    display: table-cell;\r\n  }\r\n  \r\n  @media screen and (max-width: 580px) {\r\n    .cell {\r\n      padding: 2px 16px;\r\n      display: block;\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVuY3Rpb24vY29tcG9uZW50L3RhYmxlLXZhbHVlLWZ1bmN0aW9uL3RhYmxlLXZhbHVlLWZ1bmN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHdDQUF3QztJQUN4QyxjQUFjO0VBQ2hCOztFQUVBO0lBQ0U7TUFDRSxjQUFjO0lBQ2hCO0VBQ0Y7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVFO01BQ0UsbUJBQW1CO0lBQ3JCOztFQUVBO01BQ0UsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCw4QkFBOEI7SUFDaEM7O0VBRUE7TUFDRSxtQkFBbUI7SUFDckI7O0VBRUE7TUFDRSxtQkFBbUI7SUFDckI7O0VBRUY7SUFDRTtNQUNFLG1CQUFtQjtNQUNuQixjQUFjO0lBQ2hCOztNQUVFO1FBQ0UsVUFBVTtRQUNWLFdBQVc7TUFDYjs7UUFFRTtVQUNFLGFBQWE7UUFDZjs7TUFFRjtRQUNFLG1CQUFtQjtNQUNyQjs7UUFFRTtVQUNFLGtCQUFrQjtVQUNsQix5QkFBeUI7VUFDekIsZUFBZTtVQUNmLGVBQWU7VUFDZixpQkFBaUI7VUFDakIsaUJBQWlCO1VBQ2pCLHlCQUF5QjtVQUN6QixjQUFjO1VBQ2QsY0FBYztRQUNoQjtFQUNOOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFO01BQ0UsaUJBQWlCO01BQ2pCLGNBQWM7SUFDaEI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2Z1bmN0aW9uL2NvbXBvbmVudC90YWJsZS12YWx1ZS1mdW5jdGlvbi90YWJsZS12YWx1ZS1mdW5jdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHtcclxuICAgIG1hcmdpbjogMHB4IDAgM3B4IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAgIC50YWJsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuICAgIGJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbiAgfVxyXG4gIFxyXG4gICAgLnJvdzpudGgtb2YtdHlwZShvZGQpIHtcclxuICAgICAgYmFja2dyb3VuZDogI2U5ZTllOTtcclxuICAgIH1cclxuICBcclxuICAgIC5yb3cuaGVhZGVyIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMxODQ1NjkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICBcclxuICAgIC5yb3cuZ3JlZW4ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMjdhZTYwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnJvdy5ibHVlIHtcclxuICAgICAgYmFja2dyb3VuZDogIzI5ODBiOTtcclxuICAgIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gICAgLnJvdyB7XHJcbiAgICAgIHBhZGRpbmc6IDE0cHggMCA3cHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgICAucm93LmhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBoZWlnaHQ6IDZweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5yb3cuaGVhZGVyIC5jZWxsIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAucm93IC5jZWxsIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnJvdyAuY2VsbDpiZWZvcmUge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcclxuICAgICAgICAgIG1pbi13aWR0aDogOThweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgY29sb3I6ICM5Njk2OTY7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jZWxsIHtcclxuICAgIC8qICBwYWRkaW5nOiA2cHggMTJweDsgKi9cclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgICAuY2VsbCB7XHJcbiAgICAgIHBhZGRpbmc6IDJweCAxNnB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */";

    /***/
  }),
  /***/"./src/app/function/component/table-value-function/table-value-function.component.ts": (
  /*!*******************************************************************************************!*\
    !*** ./src/app/function/component/table-value-function/table-value-function.component.ts ***!
    \*******************************************************************************************/
  /*! exports provided: TableValueFunctionComponent */
  /***/
  function _src_app_function_component_tableValueFunction_tableValueFunctionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TableValueFunctionComponent", function () {
      return TableValueFunctionComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_table_value_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/table-value-function.service */"./src/app/function/services/table-value-function.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var TableValueFunctionComponent = /*#__PURE__*/function () {
      function TableValueFunctionComponent(route, tableValueFunctionService) {
        _classCallCheck(this, TableValueFunctionComponent);
        this.route = route;
        this.tableValueFunctionService = tableValueFunctionService;
      }
      return _createClass(TableValueFunctionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.selectedFunction = this.route.snapshot.params.objectname;
          this.fetchFunctionMetadata();
        }
      }, {
        key: "fetchFunctionMetadata",
        value: function fetchFunctionMetadata() {
          var _this22 = this;
          try {
            if (this.selectedFunction) {
              this.tableValueFunctionService.getFunctionMetadata(this.selectedFunction).subscribe(function (data) {
                _this22.functionMetadata = data;
              });
            }
          } catch (e) {
            alert(e);
          }
        }
      }, {
        key: "upsertFunctionDescription",
        value: function upsertFunctionDescription() {
          var schemaName = 'dbo';
          var description = 'Updated function description';
          this.tableValueFunctionService.upsertFunctionDescription(schemaName, this.selectedFunction, description).subscribe(function () {
            alert('Description updated successfully!');
          });
        }
      }]);
    }();
    TableValueFunctionComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_table_value_function_service__WEBPACK_IMPORTED_MODULE_2__["TableValueFunctionService"]
      }];
    };
    TableValueFunctionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-table-value-function',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table-value-function.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/table-value-function/table-value-function.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table-value-function.component.css */"./src/app/function/component/table-value-function/table-value-function.component.css"))["default"]]
    })], TableValueFunctionComponent);

    /***/
  }),
  /***/"./src/app/function/component/table-value-functions/table-value-functions.component.css": (
  /*!**********************************************************************************************!*\
    !*** ./src/app/function/component/table-value-functions/table-value-functions.component.css ***!
    \**********************************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_function_component_tableValueFunctions_tableValueFunctionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".table {\r\n  margin: 0px 0 3px 0;\r\n  width: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: table;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .table {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.row {\r\n  display: table-row;\r\n  background: #f6f6f6;\r\n}\r\n\r\n.row:nth-of-type(odd) {\r\n    background: #e9e9e9;\r\n  }\r\n\r\n.row.header {\r\n    font-weight: 900;\r\n    color: #ffffff;\r\n    background: #184569 !important;\r\n  }\r\n\r\n.row.green {\r\n    background: #27ae60;\r\n  }\r\n\r\n.row.blue {\r\n    background: #2980b9;\r\n  }\r\n\r\n@media screen and (max-width: 580px) {\r\n  .row {\r\n    padding: 14px 0 7px;\r\n    display: block;\r\n  }\r\n\r\n    .row.header {\r\n      padding: 0;\r\n      height: 6px;\r\n    }\r\n\r\n      .row.header .cell {\r\n        display: none;\r\n      }\r\n\r\n    .row .cell {\r\n      margin-bottom: 10px;\r\n    }\r\n\r\n      .row .cell:before {\r\n        margin-bottom: 3px;\r\n        content: attr(data-title);\r\n        min-width: 98px;\r\n        font-size: 10px;\r\n        line-height: 10px;\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n        color: #969696;\r\n        display: block;\r\n      }\r\n}\r\n\r\n.cell {\r\n  /*  padding: 6px 12px; */\r\n  display: table-cell;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .cell {\r\n    padding: 2px 16px;\r\n    display: block;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVuY3Rpb24vY29tcG9uZW50L3RhYmxlLXZhbHVlLWZ1bmN0aW9ucy90YWJsZS12YWx1ZS1mdW5jdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsd0NBQXdDO0VBQ3hDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUU7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLDhCQUE4QjtFQUNoQzs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFRjtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLGNBQWM7RUFDaEI7O0lBRUU7TUFDRSxVQUFVO01BQ1YsV0FBVztJQUNiOztNQUVFO1FBQ0UsYUFBYTtNQUNmOztJQUVGO01BQ0UsbUJBQW1CO0lBQ3JCOztNQUVFO1FBQ0Usa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QixlQUFlO1FBQ2YsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIseUJBQXlCO1FBQ3pCLGNBQWM7UUFDZCxjQUFjO01BQ2hCO0FBQ047O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZnVuY3Rpb24vY29tcG9uZW50L3RhYmxlLXZhbHVlLWZ1bmN0aW9ucy90YWJsZS12YWx1ZS1mdW5jdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB7XHJcbiAgbWFyZ2luOiAwcHggMCAzcHggMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gIC50YWJsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG59XHJcblxyXG4gIC5yb3c6bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xyXG4gIH1cclxuXHJcbiAgLnJvdy5oZWFkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzE4NDU2OSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnJvdy5ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjdhZTYwO1xyXG4gIH1cclxuXHJcbiAgLnJvdy5ibHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICMyOTgwYjk7XHJcbiAgfVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAucm93IHtcclxuICAgIHBhZGRpbmc6IDE0cHggMCA3cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICAgLnJvdy5oZWFkZXIge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBoZWlnaHQ6IDZweDtcclxuICAgIH1cclxuXHJcbiAgICAgIC5yb3cuaGVhZGVyIC5jZWxsIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgLnJvdyAuY2VsbCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgICAucm93IC5jZWxsOmJlZm9yZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XHJcbiAgICAgICAgbWluLXdpZHRoOiA5OHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiAjOTY5Njk2O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbn1cclxuXHJcbi5jZWxsIHtcclxuICAvKiAgcGFkZGluZzogNnB4IDEycHg7ICovXHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAuY2VsbCB7XHJcbiAgICBwYWRkaW5nOiAycHggMTZweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG4iXX0= */";

    /***/
  }),
  /***/"./src/app/function/component/table-value-functions/table-value-functions.component.ts": (
  /*!*********************************************************************************************!*\
    !*** ./src/app/function/component/table-value-functions/table-value-functions.component.ts ***!
    \*********************************************************************************************/
  /*! exports provided: TableValueFunctionsComponent */
  /***/
  function _src_app_function_component_tableValueFunctions_tableValueFunctionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TableValueFunctionsComponent", function () {
      return TableValueFunctionsComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_table_value_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/table-value-function.service */"./src/app/function/services/table-value-function.service.ts");
    var TableValueFunctionsComponent = /*#__PURE__*/function () {
      function TableValueFunctionsComponent(tableValueFunctionService) {
        _classCallCheck(this, TableValueFunctionsComponent);
        this.tableValueFunctionService = tableValueFunctionService;
        this.functionDescriptions = {};
      }
      return _createClass(TableValueFunctionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadFunctionDescriptions();
        }
      }, {
        key: "loadFunctionDescriptions",
        value: function loadFunctionDescriptions() {
          var _this23 = this;
          this.tableValueFunctionService.getTableFunctionDescriptions().subscribe(function (data) {
            _this23.functionDescriptions = data;
          });
        }
      }]);
    }();
    TableValueFunctionsComponent.ctorParameters = function () {
      return [{
        type: _services_table_value_function_service__WEBPACK_IMPORTED_MODULE_2__["TableValueFunctionService"]
      }];
    };
    TableValueFunctionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-table-value-functions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table-value-functions.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/table-value-functions/table-value-functions.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table-value-functions.component.css */"./src/app/function/component/table-value-functions/table-value-functions.component.css"))["default"]]
    })], TableValueFunctionsComponent);

    /***/
  }),
  /***/"./src/app/function/function.module.ts": (
  /*!*********************************************!*\
    !*** ./src/app/function/function.module.ts ***!
    \*********************************************/
  /*! exports provided: FunctionModule */
  /***/
  function _src_app_function_functionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FunctionModule", function () {
      return FunctionModule;
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
    var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! amexio-ng-extensions */"./node_modules/amexio-ng-extensions/amexio-ng-extensions.js");
    /* harmony import */
    var primeng_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/accordion */"./node_modules/primeng/fesm2015/primeng-accordion.js");
    /* harmony import */
    var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */"./node_modules/primeng/fesm2015/primeng-table.js");
    /* harmony import */
    var primeng_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tree */"./node_modules/primeng/fesm2015/primeng-tree.js");
    /* harmony import */
    var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */"./node_modules/primeng/fesm2015/primeng-toast.js");
    /* harmony import */
    var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */"./node_modules/primeng/fesm2015/primeng-button.js");
    /* harmony import */
    var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/contextmenu */"./node_modules/primeng/fesm2015/primeng-contextmenu.js");
    /* harmony import */
    var primeng_tabview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tabview */"./node_modules/primeng/fesm2015/primeng-tabview.js");
    /* harmony import */
    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/codehighlighter */"./node_modules/primeng/fesm2015/primeng-codehighlighter.js");
    /* harmony import */
    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/breadcrumb */"./node_modules/primeng/fesm2015/primeng-breadcrumb.js");
    /* harmony import */
    var primeng_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dialog */"./node_modules/primeng/fesm2015/primeng-dialog.js");
    /* harmony import */
    var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputtextarea */"./node_modules/primeng/fesm2015/primeng-inputtextarea.js");
    /* harmony import */
    var angular_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-progress-bar */"./node_modules/angular-progress-bar/fesm2015/angular-progress-bar.js");
    /* harmony import */
    var _component_aggregate_function_aggregate_function_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/aggregate-function/aggregate-function.component */"./src/app/function/component/aggregate-function/aggregate-function.component.ts");
    /* harmony import */
    var _component_scalar_function_scalar_function_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/scalar-function/scalar-function.component */"./src/app/function/component/scalar-function/scalar-function.component.ts");
    /* harmony import */
    var _component_table_value_function_table_value_function_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/table-value-function/table-value-function.component */"./src/app/function/component/table-value-function/table-value-function.component.ts");
    /* harmony import */
    var _component_table_value_functions_table_value_functions_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/table-value-functions/table-value-functions.component */"./src/app/function/component/table-value-functions/table-value-functions.component.ts");
    /* harmony import */
    var _component_scalar_functions_scalar_functions_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/scalar-functions/scalar-functions.component */"./src/app/function/component/scalar-functions/scalar-functions.component.ts");
    /* harmony import */
    var _component_aggregate_functions_aggregate_functions_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./component/aggregate-functions/aggregate-functions.component */"./src/app/function/component/aggregate-functions/aggregate-functions.component.ts");
    /* harmony import */
    var _services_aggregate_function_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/aggregate-function.service */"./src/app/function/services/aggregate-function.service.ts");
    /* harmony import */
    var _services_scalar_function_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/scalar-function.service */"./src/app/function/services/scalar-function.service.ts");
    /* harmony import */
    var _services_table_value_function_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/table-value-function.service */"./src/app/function/services/table-value-function.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");

    /* ===== Amexio Modules ===== */

    /* ===== PrimeNG Modules ===== */

    /* ===== Other Third-Party Modules ===== */

    /* ===== Components & Services ===== */
    var appRoutes = [{
      path: 'AggregateFunctions',
      component: _component_aggregate_functions_aggregate_functions_component__WEBPACK_IMPORTED_MODULE_23__["AggregateFunctionsComponent"]
    }, {
      path: 'AggregateFunction/:objectname',
      component: _component_aggregate_function_aggregate_function_component__WEBPACK_IMPORTED_MODULE_18__["AggregateFunctionComponent"]
    }, {
      path: 'ScalarFunctions',
      component: _component_scalar_functions_scalar_functions_component__WEBPACK_IMPORTED_MODULE_22__["ScalarFunctionsComponent"]
    }, {
      path: 'ScalarFunction/:objectname',
      component: _component_scalar_function_scalar_function_component__WEBPACK_IMPORTED_MODULE_19__["ScalarFunctionComponent"]
    }, {
      path: 'TableValueFunctions',
      component: _component_table_value_functions_table_value_functions_component__WEBPACK_IMPORTED_MODULE_21__["TableValueFunctionsComponent"]
    }, {
      path: 'TableValueFunction/:objectname',
      component: _component_table_value_function_table_value_function_component__WEBPACK_IMPORTED_MODULE_20__["TableValueFunctionComponent"]
    }];
    var FunctionModule = /*#__PURE__*/_createClass(function FunctionModule() {
      _classCallCheck(this, FunctionModule);
    });
    FunctionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_component_aggregate_function_aggregate_function_component__WEBPACK_IMPORTED_MODULE_18__["AggregateFunctionComponent"], _component_scalar_function_scalar_function_component__WEBPACK_IMPORTED_MODULE_19__["ScalarFunctionComponent"], _component_table_value_function_table_value_function_component__WEBPACK_IMPORTED_MODULE_20__["TableValueFunctionComponent"], _component_table_value_functions_table_value_functions_component__WEBPACK_IMPORTED_MODULE_21__["TableValueFunctionsComponent"], _component_scalar_functions_scalar_functions_component__WEBPACK_IMPORTED_MODULE_22__["ScalarFunctionsComponent"], _component_aggregate_functions_aggregate_functions_component__WEBPACK_IMPORTED_MODULE_23__["AggregateFunctionsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterModule"].forRoot(appRoutes, {
        useHash: true
      }), /* Core Modules */
      _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], /* Amexio Modules */
      amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioDataModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioChartsModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioEnterpriseModule"], /* PrimeNG Modules */
      primeng_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionModule"], primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"], primeng_tree__WEBPACK_IMPORTED_MODULE_8__["TreeModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"], primeng_contextmenu__WEBPACK_IMPORTED_MODULE_11__["ContextMenuModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_12__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_13__["CodeHighlighterModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_14__["BreadcrumbModule"], primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_15__["DialogModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_16__["InputTextareaModule"], /* Other Third-Party Modules */
      angular_progress_bar__WEBPACK_IMPORTED_MODULE_17__["ProgressBarModule"]],
      exports: [_component_aggregate_function_aggregate_function_component__WEBPACK_IMPORTED_MODULE_18__["AggregateFunctionComponent"], _component_scalar_function_scalar_function_component__WEBPACK_IMPORTED_MODULE_19__["ScalarFunctionComponent"], _component_table_value_function_table_value_function_component__WEBPACK_IMPORTED_MODULE_20__["TableValueFunctionComponent"], _component_table_value_functions_table_value_functions_component__WEBPACK_IMPORTED_MODULE_21__["TableValueFunctionsComponent"], _component_scalar_functions_scalar_functions_component__WEBPACK_IMPORTED_MODULE_22__["ScalarFunctionsComponent"], _component_aggregate_functions_aggregate_functions_component__WEBPACK_IMPORTED_MODULE_23__["AggregateFunctionsComponent"]],
      providers: [_services_aggregate_function_service__WEBPACK_IMPORTED_MODULE_24__["AggregateFunctionService"], _services_scalar_function_service__WEBPACK_IMPORTED_MODULE_25__["ScalarFunctionService"], _services_table_value_function_service__WEBPACK_IMPORTED_MODULE_26__["TableValueFunctionService"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]] // ✅ Keep this for custom elements
    })], FunctionModule);

    /***/
  }),
  /***/"./src/app/function/services/aggregate-function.service.ts": (
  /*!*****************************************************************!*\
    !*** ./src/app/function/services/aggregate-function.service.ts ***!
    \*****************************************************************/
  /*! exports provided: AggregateFunctionService */
  /***/
  function _src_app_function_services_aggregateFunctionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AggregateFunctionService", function () {
      return AggregateFunctionService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/services/auth.service */"./src/app/auth/services/auth.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var AggregateFunctionService = /*#__PURE__*/function () {
      function AggregateFunctionService(http, primaryUrl, authService, router) {
        _classCallCheck(this, AggregateFunctionService);
        this.http = http;
        this.primaryUrl = primaryUrl;
        this.authService = authService;
        this.router = router;
        this.baseUrl = '/AggregateFunction'; // Adjust based on your API base path
        this.primaryUrl = this.primaryUrl + this.baseUrl;
      }
      /**
        * Fetches descriptions of all table-valued functions.
        * @returns An Observable containing a dictionary of function names and their descriptions.
      */
      return _createClass(AggregateFunctionService, [{
        key: "getAggregateFunctionDescriptions",
        value: function getAggregateFunctionDescriptions() {
          var headers = this.getAuthHeaders();
          return this.http.get("".concat(this.primaryUrl, "/AggregateFunctionDescriptions"), {
            headers: headers
          });
        }
        /**
         * Retrieves metadata for a specified table-valued function.
         * @param functionName Name of the function.
         * @returns Observable of SqlFunctionMetadata.
         */
      }, {
        key: "getFunctionMetadata",
        value: function getFunctionMetadata(functionName) {
          var headers = this.getAuthHeaders();
          return this.http.get("".concat(this.primaryUrl, "/").concat(functionName), {
            headers: headers
          });
        }
        /**
         * Upserts the description of a specified table-valued function.
         * @param schemaName Schema name of the function.
         * @param functionName Name of the function.
         * @param description Description to be upserted.
         * @returns Observable of void.
         */
      }, {
        key: "upsertFunctionDescription",
        value: function upsertFunctionDescription(schemaName, functionName, description) {
          var headers = this.getAuthHeaders();
          return this.http.post("".concat(this.primaryUrl, "/description/upsert"), null,
          // No request body, only query parameters
          {
            params: {
              schemaName: schemaName,
              functionName: functionName,
              description: description
            },
            headers: headers
          });
        }
        /**
         * Retrieves descriptions for all table-valued functions.
         * @returns Observable containing a dictionary of function names and their descriptions.
         */
      }, {
        key: "getFunctionDescriptions",
        value: function getFunctionDescriptions() {
          var headers = this.getAuthHeaders();
          return this.http.get("".concat(this.primaryUrl, "/descriptions"), {
            headers: headers
          });
        }
      }, {
        key: "getAuthHeaders",
        value: function getAuthHeaders() {
          var token = this.authService.getToken();
          if (!token) {
            this.router.navigate(['/login']);
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          }
          return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': "Bearer ".concat(token)
          });
        }
      }]);
    }();
    AggregateFunctionService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: ['API_URL']
        }]
      }, {
        type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };
    AggregateFunctionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('API_URL'))], AggregateFunctionService);

    /***/
  }),
  /***/"./src/app/function/services/scalar-function.service.ts": (
  /*!**************************************************************!*\
    !*** ./src/app/function/services/scalar-function.service.ts ***!
    \**************************************************************/
  /*! exports provided: ScalarFunctionService */
  /***/
  function _src_app_function_services_scalarFunctionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ScalarFunctionService", function () {
      return ScalarFunctionService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/services/auth.service */"./src/app/auth/services/auth.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var ScalarFunctionService = /*#__PURE__*/function () {
      function ScalarFunctionService(http, primaryUrl, authService, router) {
        _classCallCheck(this, ScalarFunctionService);
        this.http = http;
        this.primaryUrl = primaryUrl;
        this.authService = authService;
        this.router = router;
        this.baseUrl = '/ScalarFunction'; // Adjust based on your API base path
        this.primaryUrl = this.primaryUrl + this.baseUrl;
      }
      /**
          * Fetches descriptions of all table-valued functions.
          * @returns An Observable containing a dictionary of function names and their descriptions.
        */
      return _createClass(ScalarFunctionService, [{
        key: "getScalarFunctionDescriptions",
        value: function getScalarFunctionDescriptions() {
          var headers = this.getAuthHeaders();
          return this.http.get("".concat(this.primaryUrl, "/ScalarFunctionDescriptions"), {
            headers: headers
          });
        }
        /**
         * Retrieves metadata for a specified table-valued function.
         * @param functionName Name of the function.
         * @returns Observable of SqlFunctionMetadata.
         */
      }, {
        key: "getFunctionMetadata",
        value: function getFunctionMetadata(functionName) {
          var headers = this.getAuthHeaders();
          return this.http.get("".concat(this.primaryUrl, "/").concat(functionName), {
            headers: headers
          });
        }
        /**
         * Upserts the description of a specified table-valued function.
         * @param schemaName Schema name of the function.
         * @param functionName Name of the function.
         * @param description Description to be upserted.
         * @returns Observable of void.
         */
      }, {
        key: "upsertFunctionDescription",
        value: function upsertFunctionDescription(schemaName, functionName, description) {
          var headers = this.getAuthHeaders();
          return this.http.post("".concat(this.primaryUrl, "/description/upsert"), null,
          // No request body, only query parameters
          {
            params: {
              schemaName: schemaName,
              functionName: functionName,
              description: description
            },
            headers: headers
          });
        }
        /**
         * Retrieves descriptions for all table-valued functions.
         * @returns Observable containing a dictionary of function names and their descriptions.
         */
      }, {
        key: "getFunctionDescriptions",
        value: function getFunctionDescriptions() {
          var headers = this.getAuthHeaders();
          return this.http.get("".concat(this.primaryUrl, "/descriptions"), {
            headers: headers
          });
        }
      }, {
        key: "getAuthHeaders",
        value: function getAuthHeaders() {
          var token = this.authService.getToken();
          if (!token) {
            this.router.navigate(['/login']);
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          }
          return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': "Bearer ".concat(token)
          });
        }
      }]);
    }();
    ScalarFunctionService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: ['API_URL']
        }]
      }, {
        type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };
    ScalarFunctionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('API_URL'))], ScalarFunctionService);

    /***/
  }),
  /***/"./src/app/function/services/table-value-function.service.ts": (
  /*!*******************************************************************!*\
    !*** ./src/app/function/services/table-value-function.service.ts ***!
    \*******************************************************************/
  /*! exports provided: TableValueFunctionService */
  /***/
  function _src_app_function_services_tableValueFunctionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TableValueFunctionService", function () {
      return TableValueFunctionService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/services/auth.service */"./src/app/auth/services/auth.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var TableValueFunctionService = /*#__PURE__*/function () {
      function TableValueFunctionService(http, primaryUrl, authService, router) {
        _classCallCheck(this, TableValueFunctionService);
        this.http = http;
        this.primaryUrl = primaryUrl;
        this.authService = authService;
        this.router = router;
        this.baseUrl = '/TableFunction'; // Adjust based on your API base path
        this.primaryUrl = this.primaryUrl + this.baseUrl;
      }
      /**
          * Fetches descriptions of all table-valued functions.
          * @returns An Observable containing a dictionary of function names and their descriptions.
        */
      return _createClass(TableValueFunctionService, [{
        key: "getTableFunctionDescriptions",
        value: function getTableFunctionDescriptions() {
          var headers = this.getAuthHeaders();
          return this.http.get("".concat(this.primaryUrl, "/TableValuedFunctionDescriptions"), {
            headers: headers
          });
        }
        /**
         * Retrieves metadata for a specified table-valued function.
         * @param functionName Name of the function.
         * @returns Observable of SqlFunctionMetadata.
         */
      }, {
        key: "getFunctionMetadata",
        value: function getFunctionMetadata(functionName) {
          var headers = this.getAuthHeaders();
          return this.http.get("".concat(this.primaryUrl, "/").concat(functionName), {
            headers: headers
          });
        }
        /**
         * Upserts the description of a specified table-valued function.
         * @param schemaName Schema name of the function.
         * @param functionName Name of the function.
         * @param description Description to be upserted.
         * @returns Observable of void.
         */
      }, {
        key: "upsertFunctionDescription",
        value: function upsertFunctionDescription(schemaName, functionName, description) {
          var headers = this.getAuthHeaders();
          return this.http.post("".concat(this.primaryUrl, "/description/upsert"), null,
          // No request body, only query parameters
          {
            params: {
              schemaName: schemaName,
              functionName: functionName,
              description: description
            },
            headers: headers
          });
        }
        /**
         * Retrieves descriptions for all table-valued functions.
         * @returns Observable containing a dictionary of function names and their descriptions.
         */
      }, {
        key: "getFunctionDescriptions",
        value: function getFunctionDescriptions() {
          var headers = this.getAuthHeaders();
          return this.http.get("".concat(this.primaryUrl, "/descriptions"), {
            headers: headers
          });
        }
      }, {
        key: "getAuthHeaders",
        value: function getAuthHeaders() {
          var token = this.authService.getToken();
          if (!token) {
            this.router.navigate(['/login']);
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          }
          return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': "Bearer ".concat(token)
          });
        }
      }]);
    }();
    TableValueFunctionService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: ['API_URL']
        }]
      }, {
        type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };
    TableValueFunctionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])('API_URL'))], TableValueFunctionService);

    /***/
  }),
  /***/"./src/app/left-menu/components/leftmenu/leftmenu.component.ts": (
  /*!*********************************************************************!*\
    !*** ./src/app/left-menu/components/leftmenu/leftmenu.component.ts ***!
    \*********************************************************************/
  /*! exports provided: LeftmenuComponent */
  /***/
  function _src_app_leftMenu_components_leftmenu_leftmenuComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    var LeftmenuComponent = /*#__PURE__*/function () {
      function LeftmenuComponent(route, leftMenuService) {
        _classCallCheck(this, LeftmenuComponent);
        this.route = route;
        this.leftMenuService = leftMenuService;
      }
      return _createClass(LeftmenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadLeftMenuData();
        }
      }, {
        key: "loadLeftMenuData",
        value: function loadLeftMenuData() {
          var _this24 = this;
          this.leftMenuService.loadLeftMenuData().subscribe(function (result) {
            return _this24.handleLoadSuccess(result);
          }, function (error) {
            return _this24.handleLoadError(error);
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
          var _this25 = this;
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
            _this25.route.navigate([routePath]);
          });
        }
      }]);
    }();
    LeftmenuComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_left_menu_service__WEBPACK_IMPORTED_MODULE_2__["LeftMenuService"]
      }];
    };
    LeftmenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-leftmenu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./leftmenu.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/left-menu/components/leftmenu/leftmenu.component.html"))["default"]
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
    /* harmony import */
    var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/services/auth.service */"./src/app/auth/services/auth.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var LeftMenuService = /*#__PURE__*/function () {
      function LeftMenuService(http, primaryUrl, secondaryUrl, authService, router) {
        _classCallCheck(this, LeftMenuService);
        this.http = http;
        this.primaryUrl = primaryUrl;
        this.secondaryUrl = secondaryUrl;
        this.authService = authService;
        this.router = router;
      }
      return _createClass(LeftMenuService, [{
        key: "loadLeftMenuData",
        value: function loadLeftMenuData() {
          var _this26 = this;
          var primaryUrl = "".concat(this.primaryUrl, "/LeftMenu/left-menu");
          var secondaryUrl = 'LeftMenu/left-menu'; // Fallback URL
          var headers = this.getAuthHeaders();
          return this.http.get(primaryUrl, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            console.error('Primary URL failed, trying secondary URL:', error);
            return _this26.http.get(secondaryUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (secondaryError) {
              console.error('Both primary and secondary URLs failed:', secondaryError);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null); // Return a safe fallback
            }));
          }));
        }
      }, {
        key: "getAuthHeaders",
        value: function getAuthHeaders() {
          var token = this.authService.getToken();
          if (!token) {
            this.router.navigate(['/login']);
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          }
          return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': "Bearer ".concat(token)
          });
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
      }, {
        type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };
    LeftMenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('API_URL')), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('ANOTHER_URL'))], LeftMenuService);

    /***/
  }),
  /***/"./src/app/procedure/components/procedure/procedure.component.css": (
  /*!************************************************************************!*\
    !*** ./src/app/procedure/components/procedure/procedure.component.css ***!
    \************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_procedure_components_procedure_procedureComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "/* ===== General Table Styling ===== */\r\n.table {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n/* ===== Table Row Styles ===== */\r\n.row {\r\n  display: table-row;\r\n  background: #f6f6f6;\r\n}\r\n.row:nth-of-type(odd) {\r\n  background: #e9e9e9;\r\n}\r\n.row.header {\r\n  font-weight: 900;\r\n  color: #ffffff;\r\n  background: #184569;\r\n}\r\n/* Additional Row Styles */\r\n.row.green {\r\n  background: #27ae60;\r\n}\r\n.row.blue {\r\n  background: #2980b9;\r\n}\r\n/* ===== Table Cells ===== */\r\n.cell {\r\n  display: table-cell;\r\n  padding: 6px 12px;\r\n}\r\n/* ===== Edit Button Positioning ===== */\r\n.edit-cell {\r\n  text-align: center;\r\n  width: 50px;\r\n}\r\n/* Edit Icon Styles */\r\n.edit-icon {\r\n  font-size: 18px;\r\n  color: #007bff;\r\n  cursor: pointer;\r\n  margin-right: 10px;\r\n}\r\n.edit-icon:hover {\r\n  color: #0056b3;\r\n}\r\n/* ===== Description Container for Editable Fields ===== */\r\n.description-container {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 10px;\r\n  background-color: #f1f1f1;\r\n  border-radius: 5px;\r\n  flex-wrap: wrap;\r\n}\r\n.description-text {\r\n  max-width: 80%;\r\n  font-size: 14px;\r\n  line-height: 1.5;\r\n}\r\n/* ===== Edit Mode Styles ===== */\r\n.edit-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  max-width: 600px;\r\n  margin: auto;\r\n}\r\n.edit-textarea {\r\n  width: 100%;\r\n  resize: vertical;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  font-size: 14px;\r\n  border: 1px solid #ccc;\r\n}\r\n/* ===== Action Buttons (Save & Cancel) ===== */\r\n.action-buttons {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin-top: 10px;\r\n}\r\n.action-buttons a {\r\n  cursor: pointer;\r\n  margin-left: 10px;\r\n  font-size: 16px;\r\n}\r\n.cancel-btn i {\r\n  color: #d9534f;\r\n}\r\n.save-btn i {\r\n  color: #5cb85c;\r\n}\r\n.cancel-btn i:hover {\r\n  color: #c9302c;\r\n}\r\n.save-btn i:hover {\r\n  color: #449d44;\r\n}\r\n/* ===== Responsive Table Adjustments ===== */\r\n@media screen and (max-width: 580px) {\r\n  .table {\r\n    display: block;\r\n  }\r\n\r\n  .row {\r\n    padding: 14px 0 7px;\r\n    display: block;\r\n  }\r\n\r\n  .row.header {\r\n    padding: 0;\r\n    height: 6px;\r\n  }\r\n\r\n  .row.header .cell {\r\n    display: none;\r\n  }\r\n\r\n  .row .cell {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .row .cell:before {\r\n    margin-bottom: 3px;\r\n    content: attr(data-title);\r\n    min-width: 98px;\r\n    font-size: 10px;\r\n    line-height: 10px;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    color: #969696;\r\n    display: block;\r\n  }\r\n\r\n  .cell {\r\n    padding: 2px 16px;\r\n    display: block;\r\n  }\r\n}\r\n/* ===== Button Hover Effects ===== */\r\na.btn {\r\n  transition: transform 0.5s;\r\n}\r\na.btn:hover {\r\n  transform: scale(1.1);\r\n}\r\n/* ===== Headings ===== */\r\nh4 {\r\n  text-align: center;\r\n  margin: 0 0 8px 0;\r\n}\r\n/* ===== Input Field Adjustments ===== */\r\n.ui-inputtext {\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n  font-size: 12px;\r\n}\r\n/* ===== Progress Bar Fixes ===== */\r\n.progress-inner {\r\n  min-width: 1% !important;\r\n}\r\n/* Ensure the textarea fits inside the cell */\r\n.edit-textarea {\r\n  width: 100%;\r\n  min-height: 50px;\r\n  max-height: 100px;\r\n  resize: vertical;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n  font-size: 14px;\r\n  border: 1px solid #ccc;\r\n  word-wrap: break-word;\r\n  white-space: normal;\r\n  overflow-y: auto;\r\n  box-sizing: border-box; /* Prevents overflow beyond parent cell */\r\n}\r\n/* Align action buttons properly */\r\n.action-buttons {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  margin-top: 5px;\r\n  gap: 10px; /* Adds space between buttons */\r\n}\r\n/* Adjust Cancel (X) and Save (💾) Icons */\r\n.action-buttons a {\r\n  cursor: pointer;\r\n  font-size: 16px;\r\n}\r\n.cancel-btn i {\r\n  color: #d9534f;\r\n}\r\n.save-btn i {\r\n  color: #5cb85c;\r\n}\r\n.cancel-btn i:hover {\r\n  color: #c9302c;\r\n}\r\n.save-btn i:hover {\r\n  color: #449d44;\r\n}\r\n/* Container for code block */\r\n.code-container {\r\n  max-height: 400px;  /* Prevents excessive scrolling */\r\n  overflow-y: auto;  /* Enables vertical scroll if content is too long */\r\n  padding: 10px;\r\n  background-color: #2d2d2d; /* Dark background for readability */\r\n  border-radius: 5px;\r\n  border: 1px solid #444;\r\n}\r\n/* Ensures ngx-prism styles correctly */\r\nngx-prism {\r\n  display: block;\r\n  white-space: pre-wrap !important; /* Prevents horizontal scrolling */\r\n  word-wrap: break-word !important;\r\n  overflow-x: hidden; /* Ensures content does not overflow horizontally */\r\n  background: #272822 !important; /* Dark background for contrast */\r\n  color: #f8f8f2 !important; /* Light text for readability */\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  font-size: 14px;\r\n  line-height: 1.5; /* Adjust line height for better readability */\r\n  font-family: 'Courier New', Courier, monospace;\r\n}\r\n/* Hide unnecessary horizontal scrollbar */\r\nngx-prism::-webkit-scrollbar {\r\n  width: 6px;\r\n  height: 6px;\r\n}\r\nngx-prism::-webkit-scrollbar-thumb {\r\n  background: #555;\r\n  border-radius: 3px;\r\n}\r\nngx-prism::-webkit-scrollbar-track {\r\n  background: #222;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvY2VkdXJlL2NvbXBvbmVudHMvcHJvY2VkdXJlL3Byb2NlZHVyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNDQUFzQztBQUN0QztFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsd0NBQXdDO0FBQzFDO0FBRUEsaUNBQWlDO0FBQ2pDO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjtBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUEsNEJBQTRCO0FBQzVCO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUVBLHdDQUF3QztBQUN4QztFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQSwwREFBMEQ7QUFDMUQ7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBRUEsaUNBQWlDO0FBQ2pDO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7QUFFQSwrQ0FBK0M7QUFDL0M7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUEsNkNBQTZDO0FBQzdDO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsV0FBVztFQUNiOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7QUFDRjtBQUVBLHFDQUFxQztBQUNyQztFQUNFLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUVBLHdDQUF3QztBQUN4QztFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUVBLG1DQUFtQztBQUNuQztFQUNFLHdCQUF3QjtBQUMxQjtBQUVBLDZDQUE2QztBQUM3QztFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsc0JBQXNCLEVBQUUseUNBQXlDO0FBQ25FO0FBRUEsa0NBQWtDO0FBQ2xDO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFNBQVMsRUFBRSwrQkFBK0I7QUFDNUM7QUFFQSwwQ0FBMEM7QUFDMUM7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUNBLDZCQUE2QjtBQUM3QjtFQUNFLGlCQUFpQixHQUFHLGlDQUFpQztFQUNyRCxnQkFBZ0IsR0FBRyxtREFBbUQ7RUFDdEUsYUFBYTtFQUNiLHlCQUF5QixFQUFFLG9DQUFvQztFQUMvRCxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCO0FBRUEsdUNBQXVDO0FBQ3ZDO0VBQ0UsY0FBYztFQUNkLGdDQUFnQyxFQUFFLGtDQUFrQztFQUNwRSxnQ0FBZ0M7RUFDaEMsa0JBQWtCLEVBQUUsbURBQW1EO0VBQ3ZFLDhCQUE4QixFQUFFLGlDQUFpQztFQUNqRSx5QkFBeUIsRUFBRSwrQkFBK0I7RUFDMUQsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUUsOENBQThDO0VBQ2hFLDhDQUE4QztBQUNoRDtBQUVBLDBDQUEwQztBQUMxQztFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3Byb2NlZHVyZS9jb21wb25lbnRzL3Byb2NlZHVyZS9wcm9jZWR1cmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT09IEdlbmVyYWwgVGFibGUgU3R5bGluZyA9PT09PSAqL1xyXG4udGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLyogPT09PT0gVGFibGUgUm93IFN0eWxlcyA9PT09PSAqL1xyXG4ucm93IHtcclxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxufVxyXG5cclxuLnJvdzpudGgtb2YtdHlwZShvZGQpIHtcclxuICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xyXG59XHJcblxyXG4ucm93LmhlYWRlciB7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBiYWNrZ3JvdW5kOiAjMTg0NTY5O1xyXG59XHJcblxyXG4vKiBBZGRpdGlvbmFsIFJvdyBTdHlsZXMgKi9cclxuLnJvdy5ncmVlbiB7XHJcbiAgYmFja2dyb3VuZDogIzI3YWU2MDtcclxufVxyXG5cclxuLnJvdy5ibHVlIHtcclxuICBiYWNrZ3JvdW5kOiAjMjk4MGI5O1xyXG59XHJcblxyXG4vKiA9PT09PSBUYWJsZSBDZWxscyA9PT09PSAqL1xyXG4uY2VsbCB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxufVxyXG5cclxuLyogPT09PT0gRWRpdCBCdXR0b24gUG9zaXRpb25pbmcgPT09PT0gKi9cclxuLmVkaXQtY2VsbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4vKiBFZGl0IEljb24gU3R5bGVzICovXHJcbi5lZGl0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzAwN2JmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZWRpdC1pY29uOmhvdmVyIHtcclxuICBjb2xvcjogIzAwNTZiMztcclxufVxyXG5cclxuLyogPT09PT0gRGVzY3JpcHRpb24gQ29udGFpbmVyIGZvciBFZGl0YWJsZSBGaWVsZHMgPT09PT0gKi9cclxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24tdGV4dCB7XHJcbiAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbi8qID09PT09IEVkaXQgTW9kZSBTdHlsZXMgPT09PT0gKi9cclxuLmVkaXQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5lZGl0LXRleHRhcmVhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICByZXNpemU6IHZlcnRpY2FsO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcblxyXG4vKiA9PT09PSBBY3Rpb24gQnV0dG9ucyAoU2F2ZSAmIENhbmNlbCkgPT09PT0gKi9cclxuLmFjdGlvbi1idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmFjdGlvbi1idXR0b25zIGEge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5jYW5jZWwtYnRuIGkge1xyXG4gIGNvbG9yOiAjZDk1MzRmO1xyXG59XHJcblxyXG4uc2F2ZS1idG4gaSB7XHJcbiAgY29sb3I6ICM1Y2I4NWM7XHJcbn1cclxuXHJcbi5jYW5jZWwtYnRuIGk6aG92ZXIge1xyXG4gIGNvbG9yOiAjYzkzMDJjO1xyXG59XHJcblxyXG4uc2F2ZS1idG4gaTpob3ZlciB7XHJcbiAgY29sb3I6ICM0NDlkNDQ7XHJcbn1cclxuXHJcbi8qID09PT09IFJlc3BvbnNpdmUgVGFibGUgQWRqdXN0bWVudHMgPT09PT0gKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAudGFibGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAucm93IHtcclxuICAgIHBhZGRpbmc6IDE0cHggMCA3cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5yb3cuaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICB9XHJcblxyXG4gIC5yb3cuaGVhZGVyIC5jZWxsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAucm93IC5jZWxsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICAucm93IC5jZWxsOmJlZm9yZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xyXG4gICAgbWluLXdpZHRoOiA5OHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogIzk2OTY5NjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmNlbGwge1xyXG4gICAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09IEJ1dHRvbiBIb3ZlciBFZmZlY3RzID09PT09ICovXHJcbmEuYnRuIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxufVxyXG5cclxuYS5idG46aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuLyogPT09PT0gSGVhZGluZ3MgPT09PT0gKi9cclxuaDQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDAgMCA4cHggMDtcclxufVxyXG5cclxuLyogPT09PT0gSW5wdXQgRmllbGQgQWRqdXN0bWVudHMgPT09PT0gKi9cclxuLnVpLWlucHV0dGV4dCB7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4vKiA9PT09PSBQcm9ncmVzcyBCYXIgRml4ZXMgPT09PT0gKi9cclxuLnByb2dyZXNzLWlubmVyIHtcclxuICBtaW4td2lkdGg6IDElICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIEVuc3VyZSB0aGUgdGV4dGFyZWEgZml0cyBpbnNpZGUgdGhlIGNlbGwgKi9cclxuLmVkaXQtdGV4dGFyZWEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogUHJldmVudHMgb3ZlcmZsb3cgYmV5b25kIHBhcmVudCBjZWxsICovXHJcbn1cclxuXHJcbi8qIEFsaWduIGFjdGlvbiBidXR0b25zIHByb3Blcmx5ICovXHJcbi5hY3Rpb24tYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgZ2FwOiAxMHB4OyAvKiBBZGRzIHNwYWNlIGJldHdlZW4gYnV0dG9ucyAqL1xyXG59XHJcblxyXG4vKiBBZGp1c3QgQ2FuY2VsIChYKSBhbmQgU2F2ZSAo8J+SvikgSWNvbnMgKi9cclxuLmFjdGlvbi1idXR0b25zIGEge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5jYW5jZWwtYnRuIGkge1xyXG4gIGNvbG9yOiAjZDk1MzRmO1xyXG59XHJcblxyXG4uc2F2ZS1idG4gaSB7XHJcbiAgY29sb3I6ICM1Y2I4NWM7XHJcbn1cclxuXHJcbi5jYW5jZWwtYnRuIGk6aG92ZXIge1xyXG4gIGNvbG9yOiAjYzkzMDJjO1xyXG59XHJcblxyXG4uc2F2ZS1idG4gaTpob3ZlciB7XHJcbiAgY29sb3I6ICM0NDlkNDQ7XHJcbn1cclxuLyogQ29udGFpbmVyIGZvciBjb2RlIGJsb2NrICovXHJcbi5jb2RlLWNvbnRhaW5lciB7XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7ICAvKiBQcmV2ZW50cyBleGNlc3NpdmUgc2Nyb2xsaW5nICovXHJcbiAgb3ZlcmZsb3cteTogYXV0bzsgIC8qIEVuYWJsZXMgdmVydGljYWwgc2Nyb2xsIGlmIGNvbnRlbnQgaXMgdG9vIGxvbmcgKi9cclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7IC8qIERhcmsgYmFja2dyb3VuZCBmb3IgcmVhZGFiaWxpdHkgKi9cclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ0NDtcclxufVxyXG5cclxuLyogRW5zdXJlcyBuZ3gtcHJpc20gc3R5bGVzIGNvcnJlY3RseSAqL1xyXG5uZ3gtcHJpc20ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcCAhaW1wb3J0YW50OyAvKiBQcmV2ZW50cyBob3Jpem9udGFsIHNjcm9sbGluZyAqL1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjsgLyogRW5zdXJlcyBjb250ZW50IGRvZXMgbm90IG92ZXJmbG93IGhvcml6b250YWxseSAqL1xyXG4gIGJhY2tncm91bmQ6ICMyNzI4MjIgIWltcG9ydGFudDsgLyogRGFyayBiYWNrZ3JvdW5kIGZvciBjb250cmFzdCAqL1xyXG4gIGNvbG9yOiAjZjhmOGYyICFpbXBvcnRhbnQ7IC8qIExpZ2h0IHRleHQgZm9yIHJlYWRhYmlsaXR5ICovXHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIEFkanVzdCBsaW5lIGhlaWdodCBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5ICovXHJcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxufVxyXG5cclxuLyogSGlkZSB1bm5lY2Vzc2FyeSBob3Jpem9udGFsIHNjcm9sbGJhciAqL1xyXG5uZ3gtcHJpc206Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogNnB4O1xyXG4gIGhlaWdodDogNnB4O1xyXG59XHJcblxyXG5uZ3gtcHJpc206Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjNTU1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxubmd4LXByaXNtOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogIzIyMjtcclxufVxyXG4iXX0= */";

    /***/
  }),
  /***/"./src/app/procedure/components/procedure/procedure.component.ts": (
  /*!***********************************************************************!*\
    !*** ./src/app/procedure/components/procedure/procedure.component.ts ***!
    \***********************************************************************/
  /*! exports provided: ProcedureComponent */
  /***/
  function _src_app_procedure_components_procedure_procedureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ProcedureComponent", function () {
      return ProcedureComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _service_procedure_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/procedure.service */"./src/app/procedure/service/procedure.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var ProcedureComponent = /*#__PURE__*/function () {
      function ProcedureComponent(route, storedProcedureService) {
        _classCallCheck(this, ProcedureComponent);
        this.route = route;
        this.storedProcedureService = storedProcedureService;
        this.iblnShowEditBox = false;
        this.language = 'plsql';
        this.iblnLoading = false;
      }
      return _createClass(ProcedureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.storedProcedureName = this.route.snapshot.params.objectname;
          this.loadMetadata();
        }
        /**
         * Extract schema from stored procedure name.
         */
      }, {
        key: "getSchema",
        value: function getSchema() {
          return this.storedProcedureName.split('.')[0] || '';
        }
      }, {
        key: "getStoreprocedureName",
        value: function getStoreprocedureName() {
          return this.storedProcedureName.split('.')[1] || '';
        }
        /**
         * Fetch metadata for the stored procedure.
         */
      }, {
        key: "loadMetadata",
        value: function loadMetadata() {
          var _this27 = this;
          this.storedProcedureService.getStoredProcedureMetadata(this.storedProcedureName).subscribe({
            next: function next(data) {
              _this27.iblnLoading = true;
              _this27.storedProcedureMetadata = data;
              _this27.filesTree = JSON.parse(data.storedProcedureDependenciesTree);
              QP.showPlan(document.getElementById("container"), "".concat(_this27.storedProcedureMetadata.executionPlan.queryPlan), {
                jsTooltips: true
              });
            },
            error: function error(err) {
              return console.error('Error fetching metadata:', err);
            }
          });
        }
        /**
         * Toggle edit mode for the stored procedure description.
         */
      }, {
        key: "toggleEditBox",
        value: function toggleEditBox() {
          this.iblnShowEditBox = !this.iblnShowEditBox;
        }
      }, {
        key: "CancelStoreProcMsDesciption",
        value: function CancelStoreProcMsDesciption() {
          this.iblnShowEditBox = false;
        }
        /**
         * Update stored procedure description.
         */
      }, {
        key: "updateProcedureDescription",
        value: function updateProcedureDescription() {
          var _this28 = this;
          if (!this.storedProcedureMetadata.storedProcedureInfo.extendedProperty) {
            console.error('No description available to update.');
            return;
          }
          var request = {
            schemaName: this.getSchema(),
            storedProcedureName: this.getStoreprocedureName(),
            description: this.storedProcedureMetadata.storedProcedureInfo.extendedProperty
          };
          this.storedProcedureService.mergeStoredProcedureDescription(request).subscribe({
            next: function next() {
              console.log('Stored procedure description updated successfully');
              _this28.toggleEditBox();
            },
            error: function error(err) {
              return console.error('Error updating description:', err);
            }
          });
        }
      }, {
        key: "updateParameterDescription",
        value: function updateParameterDescription(parameter) {
          var _this29 = this;
          var request = {
            schemaName: this.getSchema(),
            storedProcedureName: this.getStoreprocedureName(),
            parameterName: parameter.parameterName,
            description: parameter.extendedProperty
          };
          this.storedProcedureService.mergeParameterDescription(request).subscribe({
            next: function next() {
              console.log('Parameter description updated successfully');
              _this29.toggleParameterEdit(parameter);
            },
            error: function error(err) {
              return console.error('Error updating parameter description:', err);
            }
          });
        }
      }, {
        key: "toggleParameterEdit",
        value: function toggleParameterEdit(parameter) {
          parameter.isEditing = !parameter.isEditing;
        }
      }]);
    }();
    ProcedureComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _service_procedure_service__WEBPACK_IMPORTED_MODULE_2__["ProcedureService"]
      }];
    };
    ProcedureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-procedure',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./procedure.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/procedure/components/procedure/procedure.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./procedure.component.css */"./src/app/procedure/components/procedure/procedure.component.css"))["default"]]
    })], ProcedureComponent);

    /***/
  }),
  /***/"./src/app/procedure/components/procedures/procedures.component.css": (
  /*!**************************************************************************!*\
    !*** ./src/app/procedure/components/procedures/procedures.component.css ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_procedure_components_procedures_proceduresComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".table {\r\n  margin: 0px 0 3px 0;\r\n  width: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: table;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .table {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.row {\r\n  display: table-row;\r\n  background: #f6f6f6;\r\n}\r\n\r\n.row:nth-of-type(odd) {\r\n    background: #e9e9e9;\r\n  }\r\n\r\n.row.header {\r\n    font-weight: 900;\r\n    color: #ffffff;\r\n    background: #184569 !important;\r\n  }\r\n\r\n.row.green {\r\n    background: #27ae60;\r\n  }\r\n\r\n.row.blue {\r\n    background: #2980b9;\r\n  }\r\n\r\n@media screen and (max-width: 580px) {\r\n  .row {\r\n    padding: 14px 0 7px;\r\n    display: block;\r\n  }\r\n\r\n    .row.header {\r\n      padding: 0;\r\n      height: 6px;\r\n    }\r\n\r\n      .row.header .cell {\r\n        display: none;\r\n      }\r\n\r\n    .row .cell {\r\n      margin-bottom: 10px;\r\n    }\r\n\r\n      .row .cell:before {\r\n        margin-bottom: 3px;\r\n        content: attr(data-title);\r\n        min-width: 98px;\r\n        font-size: 10px;\r\n        line-height: 10px;\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n        color: #969696;\r\n        display: block;\r\n      }\r\n}\r\n\r\n.cell {\r\n  /*  padding: 6px 12px; */\r\n  display: table-cell;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .cell {\r\n    padding: 2px 16px;\r\n    display: block;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvY2VkdXJlL2NvbXBvbmVudHMvcHJvY2VkdXJlcy9wcm9jZWR1cmVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHdDQUF3QztFQUN4QyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVFO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCw4QkFBOEI7RUFDaEM7O0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUY7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixjQUFjO0VBQ2hCOztJQUVFO01BQ0UsVUFBVTtNQUNWLFdBQVc7SUFDYjs7TUFFRTtRQUNFLGFBQWE7TUFDZjs7SUFFRjtNQUNFLG1CQUFtQjtJQUNyQjs7TUFFRTtRQUNFLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsZUFBZTtRQUNmLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLHlCQUF5QjtRQUN6QixjQUFjO1FBQ2QsY0FBYztNQUNoQjtBQUNOOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2NlZHVyZS9jb21wb25lbnRzL3Byb2NlZHVyZXMvcHJvY2VkdXJlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHtcclxuICBtYXJnaW46IDBweCAwIDNweCAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgLnRhYmxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogdGFibGUtcm93O1xyXG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbn1cclxuXHJcbiAgLnJvdzpudGgtb2YtdHlwZShvZGQpIHtcclxuICAgIGJhY2tncm91bmQ6ICNlOWU5ZTk7XHJcbiAgfVxyXG5cclxuICAucm93LmhlYWRlciB7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTg0NTY5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAucm93LmdyZWVuIHtcclxuICAgIGJhY2tncm91bmQ6ICMyN2FlNjA7XHJcbiAgfVxyXG5cclxuICAucm93LmJsdWUge1xyXG4gICAgYmFja2dyb3VuZDogIzI5ODBiOTtcclxuICB9XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gIC5yb3cge1xyXG4gICAgcGFkZGluZzogMTRweCAwIDdweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgICAucm93LmhlYWRlciB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGhlaWdodDogNnB4O1xyXG4gICAgfVxyXG5cclxuICAgICAgLnJvdy5oZWFkZXIgLmNlbGwge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAucm93IC5jZWxsIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAgIC5yb3cgLmNlbGw6YmVmb3JlIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcclxuICAgICAgICBtaW4td2lkdGg6IDk4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgY29sb3I6ICM5Njk2OTY7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxufVxyXG5cclxuLmNlbGwge1xyXG4gIC8qICBwYWRkaW5nOiA2cHggMTJweDsgKi9cclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gIC5jZWxsIHtcclxuICAgIHBhZGRpbmc6IDJweCAxNnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";

    /***/
  }),
  /***/"./src/app/procedure/components/procedures/procedures.component.ts": (
  /*!*************************************************************************!*\
    !*** ./src/app/procedure/components/procedures/procedures.component.ts ***!
    \*************************************************************************/
  /*! exports provided: ProceduresComponent */
  /***/
  function _src_app_procedure_components_procedures_proceduresComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ProceduresComponent", function () {
      return ProceduresComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _service_procedure_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/procedure.service */"./src/app/procedure/service/procedure.service.ts");
    var ProceduresComponent = /*#__PURE__*/function () {
      function ProceduresComponent(storedProcedureService) {
        _classCallCheck(this, ProceduresComponent);
        this.storedProcedureService = storedProcedureService;
        this.storedProcedures = [];
        this.isLoading = true;
        this.errorMessage = '';
      }
      return _createClass(ProceduresComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadStoredProcedures();
        }
        /**
           * Fetch all stored procedures.
           */
      }, {
        key: "loadStoredProcedures",
        value: function loadStoredProcedures() {
          var _this30 = this;
          this.storedProcedureService.getAllStoredProcedures().subscribe({
            next: function next(data) {
              _this30.storedProcedures = data;
            },
            error: function error(err) {
              return console.error('Error fetching stored procedures:', err);
            }
          });
        }
      }]);
    }();
    ProceduresComponent.ctorParameters = function () {
      return [{
        type: _service_procedure_service__WEBPACK_IMPORTED_MODULE_2__["ProcedureService"]
      }];
    };
    ProceduresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-procedures',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./procedures.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/procedure/components/procedures/procedures.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./procedures.component.css */"./src/app/procedure/components/procedures/procedures.component.css"))["default"]]
    })], ProceduresComponent);

    /***/
  }),
  /***/"./src/app/procedure/procedure.module.ts": (
  /*!***********************************************!*\
    !*** ./src/app/procedure/procedure.module.ts ***!
    \***********************************************/
  /*! exports provided: ProcedureModule */
  /***/
  function _src_app_procedure_procedureModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ProcedureModule", function () {
      return ProcedureModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _components_procedures_procedures_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/procedures/procedures.component */"./src/app/procedure/components/procedures/procedures.component.ts");
    /* harmony import */
    var _components_procedure_procedure_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/procedure/procedure.component */"./src/app/procedure/components/procedure/procedure.component.ts");
    /* harmony import */
    var _service_procedure_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/procedure.service */"./src/app/procedure/service/procedure.service.ts");
    /* harmony import */
    var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! amexio-ng-extensions */"./node_modules/amexio-ng-extensions/amexio-ng-extensions.js");
    /* harmony import */
    var primeng_accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/accordion */"./node_modules/primeng/fesm2015/primeng-accordion.js");
    /* harmony import */
    var primeng_tree__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tree */"./node_modules/primeng/fesm2015/primeng-tree.js");
    /* harmony import */
    var primeng_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toast */"./node_modules/primeng/fesm2015/primeng-toast.js");
    /* harmony import */
    var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */"./node_modules/primeng/fesm2015/primeng-button.js");
    /* harmony import */
    var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/contextmenu */"./node_modules/primeng/fesm2015/primeng-contextmenu.js");
    /* harmony import */
    var primeng_tabview__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/tabview */"./node_modules/primeng/fesm2015/primeng-tabview.js");
    /* harmony import */
    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/codehighlighter */"./node_modules/primeng/fesm2015/primeng-codehighlighter.js");
    /* harmony import */
    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/breadcrumb */"./node_modules/primeng/fesm2015/primeng-breadcrumb.js");
    /* harmony import */
    var primeng_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dialog */"./node_modules/primeng/fesm2015/primeng-dialog.js");
    /* harmony import */
    var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/inputtextarea */"./node_modules/primeng/fesm2015/primeng-inputtextarea.js");
    /* harmony import */
    var angular_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-progress-bar */"./node_modules/angular-progress-bar/fesm2015/angular-progress-bar.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");

    /* ===== Amexio Modules ===== */

    /* ===== PrimeNG Modules ===== */

    /* ===== Other Third-Party Modules ===== */

    var appRoutes = [{
      path: 'Storeprocedures',
      component: _components_procedures_procedures_component__WEBPACK_IMPORTED_MODULE_6__["ProceduresComponent"]
    }, {
      path: 'Storeprocedure/:objectname',
      component: _components_procedure_procedure_component__WEBPACK_IMPORTED_MODULE_7__["ProcedureComponent"]
    }];
    var ProcedureModule = /*#__PURE__*/_createClass(function ProcedureModule() {
      _classCallCheck(this, ProcedureModule);
    });
    ProcedureModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_procedures_procedures_component__WEBPACK_IMPORTED_MODULE_6__["ProceduresComponent"], _components_procedure_procedure_component__WEBPACK_IMPORTED_MODULE_7__["ProcedureComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"].forRoot(appRoutes, {
        useHash: true
      }), /* Core Modules */
      _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], /* Amexio Modules */
      amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_9__["AmexioDataModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_9__["AmexioWidgetModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_9__["AmexioChartsModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_9__["AmexioEnterpriseModule"], /* PrimeNG Modules */
      primeng_accordion__WEBPACK_IMPORTED_MODULE_10__["AccordionModule"], primeng_tree__WEBPACK_IMPORTED_MODULE_11__["TreeModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_12__["ToastModule"], primeng_contextmenu__WEBPACK_IMPORTED_MODULE_14__["ContextMenuModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_15__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_16__["CodeHighlighterModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_17__["BreadcrumbModule"], primeng_button__WEBPACK_IMPORTED_MODULE_13__["ButtonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_18__["DialogModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_19__["InputTextareaModule"], /* Other Third-Party Modules */
      angular_progress_bar__WEBPACK_IMPORTED_MODULE_20__["ProgressBarModule"]],
      providers: [_service_procedure_service__WEBPACK_IMPORTED_MODULE_8__["ProcedureService"]],
      exports: [_components_procedures_procedures_component__WEBPACK_IMPORTED_MODULE_6__["ProceduresComponent"], _components_procedure_procedure_component__WEBPACK_IMPORTED_MODULE_7__["ProcedureComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], ProcedureModule);

    /***/
  }),
  /***/"./src/app/procedure/service/procedure.service.ts": (
  /*!********************************************************!*\
    !*** ./src/app/procedure/service/procedure.service.ts ***!
    \********************************************************/
  /*! exports provided: ProcedureService */
  /***/
  function _src_app_procedure_service_procedureServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ProcedureService", function () {
      return ProcedureService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/services/auth.service */"./src/app/auth/services/auth.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var ProcedureService = /*#__PURE__*/function () {
      function ProcedureService(primaryUrl, http, authService, router) {
        _classCallCheck(this, ProcedureService);
        this.http = http;
        this.authService = authService;
        this.router = router;
        this.baseUrl = ''; // Update this with actual API URL
        this.baseUrl = primaryUrl + '/StoredProcedure';
      }
      /**
       * Get all stored procedures.
       */
      return _createClass(ProcedureService, [{
        key: "getAllStoredProcedures",
        value: function getAllStoredProcedures() {
          var headers = this.getAuthHeaders();
          return this.http.get("".concat(this.baseUrl, "/AllStoredProcedures"), {
            headers: headers
          });
        }
        /**
         * Get metadata of a specific stored procedure.
         * @param storedProcedureName The name of the stored procedure.
         */
      }, {
        key: "getStoredProcedureMetadata",
        value: function getStoredProcedureMetadata(storedProcedureName) {
          var headers = this.getAuthHeaders();
          return this.http.get("".concat(this.baseUrl, "/").concat(storedProcedureName, "/metadata"), {
            headers: headers
          });
        }
        /**
         * Merge stored procedure description.
         * @param request The request body containing schema name, stored procedure name, and description.
         */
      }, {
        key: "mergeStoredProcedureDescription",
        value: function mergeStoredProcedureDescription(request) {
          var headers = this.getAuthHeaders();
          return this.http.post("".concat(this.baseUrl, "/description"), request, {
            headers: headers
          });
        }
        /**
         * Merge parameter description of a stored procedure.
         * @param request The request body containing schema name, stored procedure name, parameter name, and description.
         */
      }, {
        key: "mergeParameterDescription",
        value: function mergeParameterDescription(request) {
          var headers = this.getAuthHeaders();
          return this.http.post("".concat(this.baseUrl, "/parameter/description"), request, {
            headers: headers
          });
        }
      }, {
        key: "getAuthHeaders",
        value: function getAuthHeaders() {
          var token = this.authService.getToken();
          if (!token) {
            this.router.navigate(['/login']);
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          }
          return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': "Bearer ".concat(token)
          });
        }
      }]);
    }();
    ProcedureService.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: ['API_URL']
        }]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };
    ProcedureService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])('API_URL'))], ProcedureService);

    /***/
  }),
  /***/"./src/app/schema/components/schema/schema.component.css": (
  /*!***************************************************************!*\
    !*** ./src/app/schema/components/schema/schema.component.css ***!
    \***************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_schema_components_schema_schemaComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\r\n#Objects li:last-child {\r\n  display: none;\r\n}\r\n\r\n.table {\r\n  margin: 0px 0 3px 0;\r\n  width: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: table;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .table {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.row {\r\n  display: table-row;\r\n  background: #f6f6f6;\r\n}\r\n\r\n.row:nth-of-type(odd) {\r\n    background: #e9e9e9;\r\n  }\r\n\r\n.row.header {\r\n    font-weight: 900;\r\n    color: #ffffff;\r\n    background: #184569 !important;\r\n  }\r\n\r\n.row.green {\r\n    background: #27ae60;\r\n  }\r\n\r\n.row.blue {\r\n    background: #2980b9;\r\n  }\r\n\r\n@media screen and (max-width: 580px) {\r\n  .row {\r\n    padding: 14px 0 7px;\r\n    display: block;\r\n  }\r\n\r\n    .row.header {\r\n      padding: 0;\r\n      height: 6px;\r\n    }\r\n\r\n      .row.header .cell {\r\n        display: none;\r\n      }\r\n\r\n    .row .cell {\r\n      margin-bottom: 10px;\r\n    }\r\n\r\n      .row .cell:before {\r\n        margin-bottom: 3px;\r\n        content: attr(data-title);\r\n        min-width: 98px;\r\n        font-size: 10px;\r\n        line-height: 10px;\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n        color: #969696;\r\n        display: block;\r\n      }\r\n}\r\n\r\n.cell {\r\n  /*  padding: 6px 12px; */\r\n  display: table-cell;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .cell {\r\n    padding: 2px 16px;\r\n    display: block;\r\n  }\r\n}\r\n\r\n.node:hover {\r\n  fill: #ec008c;\r\n  opacity: 1;\r\n}\r\n\r\n.modal-dialog {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.modal-content {\r\n  height: auto;\r\n  min-height: 100%;\r\n  border: 0 none;\r\n  border-radius: 0;\r\n  box-shadow: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NoZW1hL2NvbXBvbmVudHMvc2NoZW1hL3NjaGVtYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsd0NBQXdDO0VBQ3hDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUU7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLDhCQUE4QjtFQUNoQzs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFRjtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLGNBQWM7RUFDaEI7O0lBRUU7TUFDRSxVQUFVO01BQ1YsV0FBVztJQUNiOztNQUVFO1FBQ0UsYUFBYTtNQUNmOztJQUVGO01BQ0UsbUJBQW1CO0lBQ3JCOztNQUVFO1FBQ0Usa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QixlQUFlO1FBQ2YsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIseUJBQXlCO1FBQ3pCLGNBQWM7UUFDZCxjQUFjO01BQ2hCO0FBQ047O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7QUFDWjs7QUFHQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zY2hlbWEvY29tcG9uZW50cy9zY2hlbWEvc2NoZW1hLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI09iamVjdHMgbGk6bGFzdC1jaGlsZCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICBtYXJnaW46IDBweCAwIDNweCAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgLnRhYmxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogdGFibGUtcm93O1xyXG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbn1cclxuXHJcbiAgLnJvdzpudGgtb2YtdHlwZShvZGQpIHtcclxuICAgIGJhY2tncm91bmQ6ICNlOWU5ZTk7XHJcbiAgfVxyXG5cclxuICAucm93LmhlYWRlciB7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTg0NTY5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAucm93LmdyZWVuIHtcclxuICAgIGJhY2tncm91bmQ6ICMyN2FlNjA7XHJcbiAgfVxyXG5cclxuICAucm93LmJsdWUge1xyXG4gICAgYmFja2dyb3VuZDogIzI5ODBiOTtcclxuICB9XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gIC5yb3cge1xyXG4gICAgcGFkZGluZzogMTRweCAwIDdweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgICAucm93LmhlYWRlciB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGhlaWdodDogNnB4O1xyXG4gICAgfVxyXG5cclxuICAgICAgLnJvdy5oZWFkZXIgLmNlbGwge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAucm93IC5jZWxsIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAgIC5yb3cgLmNlbGw6YmVmb3JlIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcclxuICAgICAgICBtaW4td2lkdGg6IDk4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgY29sb3I6ICM5Njk2OTY7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxufVxyXG5cclxuLmNlbGwge1xyXG4gIC8qICBwYWRkaW5nOiA2cHggMTJweDsgKi9cclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gIC5jZWxsIHtcclxuICAgIHBhZGRpbmc6IDJweCAxNnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG4ubm9kZTpob3ZlciB7XHJcbiAgZmlsbDogI2VjMDA4YztcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5cclxuLm1vZGFsLWRpYWxvZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyOiAwIG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbiJdfQ== */";

    /***/
  }),
  /***/"./src/app/schema/components/schema/schema.component.ts": (
  /*!**************************************************************!*\
    !*** ./src/app/schema/components/schema/schema.component.ts ***!
    \**************************************************************/
  /*! exports provided: SchemaComponent */
  /***/
  function _src_app_schema_components_schema_schemaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SchemaComponent", function () {
      return SchemaComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _services_schema_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/schema.service */"./src/app/schema/services/schema.service.ts");
    var SchemaComponent = /*#__PURE__*/function () {
      function SchemaComponent(route, schemaService) {
        _classCallCheck(this, SchemaComponent);
        this.route = route;
        this.schemaService = schemaService;
        this.schema = null;
        this.msDescription = '';
        this.iblnShowEditBox = false;
      }
      return _createClass(SchemaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this31 = this;
          this.schemaName = this.route.snapshot.params.objectname;
          if (this.schemaName) {
            this.schemaService.getSchemaMetadata(this.schemaName).subscribe(function (data) {
              _this31.schema = data;
            });
          }
        }
      }]);
    }();
    SchemaComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_schema_service__WEBPACK_IMPORTED_MODULE_3__["SchemaService"]
      }];
    };
    SchemaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-schema',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./schema.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/schema/components/schema/schema.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./schema.component.css */"./src/app/schema/components/schema/schema.component.css"))["default"]]
    })], SchemaComponent);

    /***/
  }),
  /***/"./src/app/schema/components/schemas/schemas.component.css": (
  /*!*****************************************************************!*\
    !*** ./src/app/schema/components/schemas/schemas.component.css ***!
    \*****************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_schema_components_schemas_schemasComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\r\n#Objects li:last-child {\r\n  display: none;\r\n}\r\n\r\n.table {\r\n  margin: 0px 0 3px 0;\r\n  width: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: table;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .table {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.row {\r\n  display: table-row;\r\n  background: #f6f6f6;\r\n}\r\n\r\n.row:nth-of-type(odd) {\r\n    background: #e9e9e9;\r\n  }\r\n\r\n.row.header {\r\n    font-weight: 900;\r\n    color: #ffffff;\r\n    background: #184569 !important;\r\n  }\r\n\r\n.row.green {\r\n    background: #27ae60;\r\n  }\r\n\r\n.row.blue {\r\n    background: #2980b9;\r\n  }\r\n\r\n@media screen and (max-width: 580px) {\r\n  .row {\r\n    padding: 14px 0 7px;\r\n    display: block;\r\n  }\r\n\r\n    .row.header {\r\n      padding: 0;\r\n      height: 6px;\r\n    }\r\n\r\n      .row.header .cell {\r\n        display: none;\r\n      }\r\n\r\n    .row .cell {\r\n      margin-bottom: 10px;\r\n    }\r\n\r\n      .row .cell:before {\r\n        margin-bottom: 3px;\r\n        content: attr(data-title);\r\n        min-width: 98px;\r\n        font-size: 10px;\r\n        line-height: 10px;\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n        color: #969696;\r\n        display: block;\r\n      }\r\n}\r\n\r\n.cell {\r\n  /*  padding: 6px 12px; */\r\n  display: table-cell;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .cell {\r\n    padding: 2px 16px;\r\n    display: block;\r\n  }\r\n}\r\n\r\n.node:hover {\r\n  fill: #ec008c;\r\n  opacity: 1;\r\n}\r\n\r\n.modal-dialog {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.modal-content {\r\n  height: auto;\r\n  min-height: 100%;\r\n  border: 0 none;\r\n  border-radius: 0;\r\n  box-shadow: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NoZW1hL2NvbXBvbmVudHMvc2NoZW1hcy9zY2hlbWFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx3Q0FBd0M7RUFDeEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFRTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsOEJBQThCO0VBQ2hDOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVGO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsY0FBYztFQUNoQjs7SUFFRTtNQUNFLFVBQVU7TUFDVixXQUFXO0lBQ2I7O01BRUU7UUFDRSxhQUFhO01BQ2Y7O0lBRUY7TUFDRSxtQkFBbUI7SUFDckI7O01BRUU7UUFDRSxrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQix5QkFBeUI7UUFDekIsY0FBYztRQUNkLGNBQWM7TUFDaEI7QUFDTjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtBQUNaOztBQUdBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3NjaGVtYS9jb21wb25lbnRzL3NjaGVtYXMvc2NoZW1hcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNPYmplY3RzIGxpOmxhc3QtY2hpbGQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgbWFyZ2luOiAwcHggMCAzcHggMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gIC50YWJsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG59XHJcblxyXG4gIC5yb3c6bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xyXG4gIH1cclxuXHJcbiAgLnJvdy5oZWFkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzE4NDU2OSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnJvdy5ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjdhZTYwO1xyXG4gIH1cclxuXHJcbiAgLnJvdy5ibHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICMyOTgwYjk7XHJcbiAgfVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAucm93IHtcclxuICAgIHBhZGRpbmc6IDE0cHggMCA3cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICAgLnJvdy5oZWFkZXIge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBoZWlnaHQ6IDZweDtcclxuICAgIH1cclxuXHJcbiAgICAgIC5yb3cuaGVhZGVyIC5jZWxsIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgLnJvdyAuY2VsbCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgICAucm93IC5jZWxsOmJlZm9yZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XHJcbiAgICAgICAgbWluLXdpZHRoOiA5OHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiAjOTY5Njk2O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbn1cclxuXHJcbi5jZWxsIHtcclxuICAvKiAgcGFkZGluZzogNnB4IDEycHg7ICovXHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAuY2VsbCB7XHJcbiAgICBwYWRkaW5nOiAycHggMTZweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLm5vZGU6aG92ZXIge1xyXG4gIGZpbGw6ICNlYzAwOGM7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuXHJcbi5tb2RhbC1kaWFsb2cge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlcjogMCBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4iXX0= */";

    /***/
  }),
  /***/"./src/app/schema/components/schemas/schemas.component.ts": (
  /*!****************************************************************!*\
    !*** ./src/app/schema/components/schemas/schemas.component.ts ***!
    \****************************************************************/
  /*! exports provided: SchemasComponent */
  /***/
  function _src_app_schema_components_schemas_schemasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SchemasComponent", function () {
      return SchemasComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_schema_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/schema.service */"./src/app/schema/services/schema.service.ts");
    var SchemasComponent = /*#__PURE__*/function () {
      function SchemasComponent(schemaService) {
        _classCallCheck(this, SchemasComponent);
        this.schemaService = schemaService;
        this.schemas = [];
      }
      return _createClass(SchemasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this32 = this;
          this.schemaService.getAllSchemas().subscribe(function (data) {
            _this32.schemas = data;
          });
        }
      }]);
    }();
    SchemasComponent.ctorParameters = function () {
      return [{
        type: _services_schema_service__WEBPACK_IMPORTED_MODULE_2__["SchemaService"]
      }];
    };
    SchemasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-schemas',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./schemas.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/schema/components/schemas/schemas.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./schemas.component.css */"./src/app/schema/components/schemas/schemas.component.css"))["default"]]
    })], SchemasComponent);

    /***/
  }),
  /***/"./src/app/schema/schemas.module.ts": (
  /*!******************************************!*\
    !*** ./src/app/schema/schemas.module.ts ***!
    \******************************************/
  /*! exports provided: SchemasModule */
  /***/
  function _src_app_schema_schemasModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SchemasModule", function () {
      return SchemasModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _services_schema_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/schema.service */"./src/app/schema/services/schema.service.ts");
    /* harmony import */
    var _components_schema_schema_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/schema/schema.component */"./src/app/schema/components/schema/schema.component.ts");
    /* harmony import */
    var _components_schemas_schemas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/schemas/schemas.component */"./src/app/schema/components/schemas/schemas.component.ts");
    /* harmony import */
    var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! amexio-ng-extensions */"./node_modules/amexio-ng-extensions/amexio-ng-extensions.js");
    /* harmony import */
    var primeng_accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/accordion */"./node_modules/primeng/fesm2015/primeng-accordion.js");
    /* harmony import */
    var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */"./node_modules/primeng/fesm2015/primeng-table.js");
    /* harmony import */
    var primeng_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tree */"./node_modules/primeng/fesm2015/primeng-tree.js");
    /* harmony import */
    var primeng_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toast */"./node_modules/primeng/fesm2015/primeng-toast.js");
    /* harmony import */
    var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */"./node_modules/primeng/fesm2015/primeng-button.js");
    /* harmony import */
    var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/contextmenu */"./node_modules/primeng/fesm2015/primeng-contextmenu.js");
    /* harmony import */
    var primeng_tabview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/tabview */"./node_modules/primeng/fesm2015/primeng-tabview.js");
    /* harmony import */
    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/codehighlighter */"./node_modules/primeng/fesm2015/primeng-codehighlighter.js");
    /* harmony import */
    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/breadcrumb */"./node_modules/primeng/fesm2015/primeng-breadcrumb.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var appRoutes = [{
      path: 'Schemas',
      component: _components_schemas_schemas_component__WEBPACK_IMPORTED_MODULE_5__["SchemasComponent"]
    }, {
      path: 'Schema/:objectname',
      component: _components_schema_schema_component__WEBPACK_IMPORTED_MODULE_4__["SchemaComponent"]
    }];
    var SchemasModule = /*#__PURE__*/_createClass(function SchemasModule() {
      _classCallCheck(this, SchemasModule);
    });
    SchemasModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_schema_schema_component__WEBPACK_IMPORTED_MODULE_4__["SchemaComponent"], _components_schemas_schemas_component__WEBPACK_IMPORTED_MODULE_5__["SchemasComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"].forRoot(appRoutes, {
        useHash: true
      }), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_6__["AmexioDataModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_6__["AmexioWidgetModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_6__["AmexioChartsModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_6__["AmexioEnterpriseModule"], primeng_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionModule"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"], primeng_tree__WEBPACK_IMPORTED_MODULE_9__["TreeModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_10__["ToastModule"], primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"], primeng_contextmenu__WEBPACK_IMPORTED_MODULE_12__["ContextMenuModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_13__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_14__["CodeHighlighterModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_15__["BreadcrumbModule"]],
      exports: [_components_schema_schema_component__WEBPACK_IMPORTED_MODULE_4__["SchemaComponent"], _components_schemas_schemas_component__WEBPACK_IMPORTED_MODULE_5__["SchemasComponent"]],
      providers: [_services_schema_service__WEBPACK_IMPORTED_MODULE_3__["SchemaService"]]
    })], SchemasModule);

    /***/
  }),
  /***/"./src/app/schema/services/schema.service.ts": (
  /*!***************************************************!*\
    !*** ./src/app/schema/services/schema.service.ts ***!
    \***************************************************/
  /*! exports provided: SchemaService */
  /***/
  function _src_app_schema_services_schemaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SchemaService", function () {
      return SchemaService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/services/auth.service */"./src/app/auth/services/auth.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var SchemaService = /*#__PURE__*/function () {
      function SchemaService(http, primaryUrl, secondaryUrl, authService, router) {
        _classCallCheck(this, SchemaService);
        this.http = http;
        this.primaryUrl = primaryUrl;
        this.secondaryUrl = secondaryUrl;
        this.authService = authService;
        this.router = router;
        this.primaryUrl = "".concat(this.primaryUrl, "/Schema");
        this.secondaryUrl = "".concat(this.secondaryUrl, "/Schema");
      }
      return _createClass(SchemaService, [{
        key: "getAllSchemas",
        value: function getAllSchemas() {
          var headers = this.getAuthHeaders();
          return this.http.get("".concat(this.primaryUrl), {
            headers: headers
          });
        }
      }, {
        key: "getSchemaMetadata",
        value: function getSchemaMetadata(schemaName) {
          var headers = this.getAuthHeaders();
          return this.http.get("".concat(this.primaryUrl, "/metadata/").concat(schemaName), {
            headers: headers
          });
        }
      }, {
        key: "getAuthHeaders",
        value: function getAuthHeaders() {
          var token = this.authService.getToken();
          if (!token) {
            this.router.navigate(['/login']);
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          }
          return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': "Bearer ".concat(token)
          });
        }
      }]);
    }();
    SchemaService.ctorParameters = function () {
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
      }, {
        type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };
    SchemaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('API_URL')), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('ANOTHER_URL'))], SchemaService);

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
    __webpack_exports__["default"] = ".code-container {\r\n  background-color: #1e1e1e;\r\n  border-radius: 8px;\r\n  padding: 16px;\r\n  overflow-x: auto;\r\n  overflow-y: auto;\r\n  margin: 8px 0;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\r\n  border: 1px solid #333;\r\n  max-height: 600px;\r\n}\r\n\r\n.code-container pre {\r\n  margin: 0;\r\n  font-family: 'Consolas', 'Monaco', 'Courier New', 'Menlo', monospace;\r\n  font-size: 14px;\r\n  line-height: 1.6;\r\n  white-space: pre-wrap;\r\n  word-wrap: break-word;\r\n}\r\n\r\n.code-container code {\r\n  color: #d4d4d4;\r\n  display: block;\r\n}\r\n\r\n.no-code-message {\r\n  padding: 20px;\r\n  text-align: center;\r\n  color: #888;\r\n  background-color: #f5f5f5;\r\n  border: 1px dashed #ccc;\r\n  border-radius: 4px;\r\n  margin: 8px 0;\r\n}\r\n\r\n.no-code-message p {\r\n  margin: 0;\r\n  font-style: italic;\r\n}\r\n\r\n/* Scrollbar styling for webkit browsers (Chrome, Safari, Edge) */\r\n\r\n.code-container::-webkit-scrollbar {\r\n  width: 8px;\r\n  height: 8px;\r\n}\r\n\r\n.code-container::-webkit-scrollbar-track {\r\n  background: #2d2d2d;\r\n  border-radius: 4px;\r\n}\r\n\r\n.code-container::-webkit-scrollbar-thumb {\r\n  background: #555;\r\n  border-radius: 4px;\r\n  transition: background 0.3s ease;\r\n}\r\n\r\n.code-container::-webkit-scrollbar-thumb:hover {\r\n  background: #777;\r\n}\r\n\r\n/* Firefox scrollbar styling */\r\n\r\n.code-container {\r\n  scrollbar-width: thin;\r\n  scrollbar-color: #555 #2d2d2d;\r\n}\r\n\r\n/* Responsive font size */\r\n\r\n@media (max-width: 768px) {\r\n  .code-container {\r\n    padding: 12px;\r\n  }\r\n\r\n  .code-container pre {\r\n    font-size: 12px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29kZS12aWV3ZXIvY29kZS12aWV3ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHlDQUF5QztFQUN6QyxzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUztFQUNULG9FQUFvRTtFQUNwRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUEsaUVBQWlFOztBQUNqRTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUEsOEJBQThCOztBQUM5QjtFQUNFLHFCQUFxQjtFQUNyQiw2QkFBNkI7QUFDL0I7O0FBRUEseUJBQXlCOztBQUN6QjtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29kZS12aWV3ZXIvY29kZS12aWV3ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2RlLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xyXG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG59XHJcblxyXG4uY29kZS1jb250YWluZXIgcHJlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6ICdDb25zb2xhcycsICdNb25hY28nLCAnQ291cmllciBOZXcnLCAnTWVubG8nLCBtb25vc3BhY2U7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxuLmNvZGUtY29udGFpbmVyIGNvZGUge1xyXG4gIGNvbG9yOiAjZDRkNGQ0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubm8tY29kZS1tZXNzYWdlIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzg4ODtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG59XHJcblxyXG4ubm8tY29kZS1tZXNzYWdlIHAge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi8qIFNjcm9sbGJhciBzdHlsaW5nIGZvciB3ZWJraXQgYnJvd3NlcnMgKENocm9tZSwgU2FmYXJpLCBFZGdlKSAqL1xyXG4uY29kZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogOHB4O1xyXG4gIGhlaWdodDogOHB4O1xyXG59XHJcblxyXG4uY29kZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjMmQyZDJkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmNvZGUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogIzU1NTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5jb2RlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM3Nzc7XHJcbn1cclxuXHJcbi8qIEZpcmVmb3ggc2Nyb2xsYmFyIHN0eWxpbmcgKi9cclxuLmNvZGUtY29udGFpbmVyIHtcclxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XHJcbiAgc2Nyb2xsYmFyLWNvbG9yOiAjNTU1ICMyZDJkMmQ7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgZm9udCBzaXplICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb2RlLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmNvZGUtY29udGFpbmVyIHByZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";

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
          var _this33 = this;
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
              return _this33.highlightCode();
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
    var SharedModule = /*#__PURE__*/_createClass(function SharedModule() {
      _classCallCheck(this, SharedModule);
    });
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_code_viewer_code_viewer_component__WEBPACK_IMPORTED_MODULE_4__["CodeViewerComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_prism_core__WEBPACK_IMPORTED_MODULE_3__["PrismModule"]],
      exports: [_components_code_viewer_code_viewer_component__WEBPACK_IMPORTED_MODULE_4__["CodeViewerComponent"]]
    })], SharedModule);

    /***/
  }),
  /***/"./src/app/table/components/table/edit-column-description-dialog/edit-column-description-dialog.component.css": (
  /*!********************************************************************************************************************!*\
    !*** ./src/app/table/components/table/edit-column-description-dialog/edit-column-description-dialog.component.css ***!
    \********************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_table_components_table_editColumnDescriptionDialog_editColumnDescriptionDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlL2NvbXBvbmVudHMvdGFibGUvZWRpdC1jb2x1bW4tZGVzY3JpcHRpb24tZGlhbG9nL2VkaXQtY29sdW1uLWRlc2NyaXB0aW9uLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */";

    /***/
  }),
  /***/"./src/app/table/components/table/edit-column-description-dialog/edit-column-description-dialog.component.ts": (
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/table/components/table/edit-column-description-dialog/edit-column-description-dialog.component.ts ***!
    \*******************************************************************************************************************/
  /*! exports provided: EditColumnDescriptionDialogComponent */
  /***/
  function _src_app_table_components_table_editColumnDescriptionDialog_editColumnDescriptionDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "EditColumnDescriptionDialogComponent", function () {
      return EditColumnDescriptionDialogComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var EditColumnDescriptionDialogComponent = /*#__PURE__*/function () {
      function EditColumnDescriptionDialogComponent() {
        _classCallCheck(this, EditColumnDescriptionDialogComponent);
        this.saveColumnDescription = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cancelColumnEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      return _createClass(EditColumnDescriptionDialogComponent, [{
        key: "saveDescription",
        value: function saveDescription() {
          this.saveColumnDescription.emit();
        }
      }, {
        key: "cancelEdit",
        value: function cancelEdit() {
          this.cancelColumnEdit.emit();
        }
      }]);
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EditColumnDescriptionDialogComponent.prototype, "displayColumnDialog", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EditColumnDescriptionDialogComponent.prototype, "selectedColumn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], EditColumnDescriptionDialogComponent.prototype, "saveColumnDescription", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], EditColumnDescriptionDialogComponent.prototype, "cancelColumnEdit", void 0);
    EditColumnDescriptionDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-column-description-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-column-description-dialog.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/table/components/table/edit-column-description-dialog/edit-column-description-dialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-column-description-dialog.component.css */"./src/app/table/components/table/edit-column-description-dialog/edit-column-description-dialog.component.css"))["default"]]
    })], EditColumnDescriptionDialogComponent);

    /***/
  }),
  /***/"./src/app/table/components/table/edit-description-dialog/edit-description-dialog.component.css": (
  /*!******************************************************************************************************!*\
    !*** ./src/app/table/components/table/edit-description-dialog/edit-description-dialog.component.css ***!
    \******************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_table_components_table_editDescriptionDialog_editDescriptionDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlL2NvbXBvbmVudHMvdGFibGUvZWRpdC1kZXNjcmlwdGlvbi1kaWFsb2cvZWRpdC1kZXNjcmlwdGlvbi1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */";

    /***/
  }),
  /***/"./src/app/table/components/table/edit-description-dialog/edit-description-dialog.component.ts": (
  /*!*****************************************************************************************************!*\
    !*** ./src/app/table/components/table/edit-description-dialog/edit-description-dialog.component.ts ***!
    \*****************************************************************************************************/
  /*! exports provided: EditDescriptionDialogComponent */
  /***/
  function _src_app_table_components_table_editDescriptionDialog_editDescriptionDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "EditDescriptionDialogComponent", function () {
      return EditDescriptionDialogComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var EditDescriptionDialogComponent = /*#__PURE__*/function () {
      function EditDescriptionDialogComponent() {
        _classCallCheck(this, EditDescriptionDialogComponent);
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      return _createClass(EditDescriptionDialogComponent, [{
        key: "saveDescription",
        value: function saveDescription() {
          this.save.emit();
        }
      }, {
        key: "cancelEdit",
        value: function cancelEdit() {
          this.cancel.emit();
        }
      }]);
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EditDescriptionDialogComponent.prototype, "displayDialog", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EditDescriptionDialogComponent.prototype, "selectedDescription", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EditDescriptionDialogComponent.prototype, "hasEditPermission", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], EditDescriptionDialogComponent.prototype, "save", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], EditDescriptionDialogComponent.prototype, "cancel", void 0);
    EditDescriptionDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-description-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-description-dialog.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/table/components/table/edit-description-dialog/edit-description-dialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-description-dialog.component.css */"./src/app/table/components/table/edit-description-dialog/edit-description-dialog.component.css"))["default"]]
    })], EditDescriptionDialogComponent);

    /***/
  }),
  /***/"./src/app/table/components/table/sql-script-viewer/sql-script-viewer.component.css": (
  /*!******************************************************************************************!*\
    !*** ./src/app/table/components/table/sql-script-viewer/sql-script-viewer.component.css ***!
    \******************************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_table_components_table_sqlScriptViewer_sqlScriptViewerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "/* Add any specific styles for the SQL script viewer here */\r\n.table {\r\n    width: 100%;\r\n  }\r\n.row {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin-right: -15px;\r\n    margin-left: 0px;\r\n \r\n  }\r\n.header {\r\n    font-weight: bold;\r\n  }\r\n.cell {\r\n    padding: 8px;\r\n  }\r\npre {\r\n    white-space: pre-wrap; /* Ensures the script wraps and is readable */\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGUvY29tcG9uZW50cy90YWJsZS9zcWwtc2NyaXB0LXZpZXdlci9zcWwtc2NyaXB0LXZpZXdlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJEQUEyRDtBQUMzRDtJQUNJLFdBQVc7RUFDYjtBQUVBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCOztFQUVsQjtBQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFFQTtJQUNFLHFCQUFxQixFQUFFLDZDQUE2QztFQUN0RSIsImZpbGUiOiJzcmMvYXBwL3RhYmxlL2NvbXBvbmVudHMvdGFibGUvc3FsLXNjcmlwdC12aWV3ZXIvc3FsLXNjcmlwdC12aWV3ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFkZCBhbnkgc3BlY2lmaWMgc3R5bGVzIGZvciB0aGUgU1FMIHNjcmlwdCB2aWV3ZXIgaGVyZSAqL1xyXG4udGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gXHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZWxsIHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgcHJlIHtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDsgLyogRW5zdXJlcyB0aGUgc2NyaXB0IHdyYXBzIGFuZCBpcyByZWFkYWJsZSAqL1xyXG4gIH1cclxuICAiXX0= */";

    /***/
  }),
  /***/"./src/app/table/components/table/sql-script-viewer/sql-script-viewer.component.ts": (
  /*!*****************************************************************************************!*\
    !*** ./src/app/table/components/table/sql-script-viewer/sql-script-viewer.component.ts ***!
    \*****************************************************************************************/
  /*! exports provided: SqlScriptViewerComponent */
  /***/
  function _src_app_table_components_table_sqlScriptViewer_sqlScriptViewerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SqlScriptViewerComponent", function () {
      return SqlScriptViewerComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var SqlScriptViewerComponent = /*#__PURE__*/_createClass(function SqlScriptViewerComponent() {
      _classCallCheck(this, SqlScriptViewerComponent);
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SqlScriptViewerComponent.prototype, "script", void 0);
    SqlScriptViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sql-script-viewer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sql-script-viewer.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/table/components/table/sql-script-viewer/sql-script-viewer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sql-script-viewer.component.css */"./src/app/table/components/table/sql-script-viewer/sql-script-viewer.component.css"))["default"]]
    })], SqlScriptViewerComponent);

    /***/
  }),
  /***/"./src/app/table/components/table/table.component.css": (
  /*!************************************************************!*\
    !*** ./src/app/table/components/table/table.component.css ***!
    \************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_table_components_table_tableComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".table {\r\n  margin: 0px 0 3px 0;\r\n  width: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: table;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .table {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.row {\r\n  display: table-row;\r\n  background: #f6f6f6;\r\n}\r\n\r\n.row:nth-of-type(odd) {\r\n    background: #e9e9e9;\r\n  }\r\n\r\n.row.header {\r\n    font-weight: 900;\r\n    color: #ffffff;\r\n    background: #184569 !important;\r\n  }\r\n\r\n.row.green {\r\n    background: #27ae60;\r\n  }\r\n\r\n.row.blue {\r\n    background: #2980b9;\r\n  }\r\n\r\n@media screen and (max-width: 580px) {\r\n  .row {\r\n    padding: 14px 0 7px;\r\n    display: block;\r\n  }\r\n\r\n    .row.header {\r\n      padding: 0;\r\n      height: 6px;\r\n    }\r\n\r\n      .row.header .cell {\r\n        display: none;\r\n      }\r\n\r\n    .row .cell {\r\n      margin-bottom: 10px;\r\n    }\r\n\r\n      .row .cell:before {\r\n        margin-bottom: 3px;\r\n        content: attr(data-title);\r\n        min-width: 98px;\r\n        font-size: 10px;\r\n        line-height: 10px;\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n        color: #969696;\r\n        display: block;\r\n      }\r\n}\r\n\r\n.cell {\r\n  /*  padding: 6px 12px; */\r\n  display: table-cell;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .cell {\r\n    padding: 2px 16px;\r\n    display: block;\r\n  }\r\n}\r\n\r\na.btn:hover {\r\n  -webkit-transform: scale(1.1);\r\n  -moz-transform: scale(1.1);\r\n  -o-transform: scale(1.1);\r\n}\r\n\r\na.btn {\r\n  -webkit-transform: scale(0.8);\r\n  -moz-transform: scale(0.8);\r\n  -o-transform: scale(0.8);\r\n  -webkit-transition-duration: 0.5s;\r\n  -moz-transition-duration: 0.5s;\r\n  -o-transition-duration: 0.5s;\r\n}\r\n\r\n#RotateDiv {\r\n  /* background-color: yellow;\r\n  border: 1px solid black;\r\n  -webkit-transform: rotateZ(90deg);  \r\n  transform: rotateZ(90deg);   */\r\n}\r\n\r\nh4 {\r\n  text-align: center;\r\n  margin: 0 0 8px 0;\r\n}\r\n\r\n.ui-inputtext {\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n  font-size: 12px;\r\n}\r\n\r\n.progress-inner {\r\n  min-width: 1% !important;\r\n}\r\n\r\n/* Code container for improved readability */\r\n\r\n.code-container {\r\n  max-height: 400px;  /* Prevents excessive scrolling */\r\n  overflow-y: auto;  /* Enables vertical scroll when needed */\r\n  padding: 10px;\r\n  background-color: #2d2d2d; /* Dark background for contrast */\r\n  border-radius: 5px;\r\n  border: 1px solid #444;\r\n}\r\n\r\n/* ngx-prism styling for better text display */\r\n\r\nngx-prism {\r\n  display: block;\r\n  white-space: pre-wrap !important; /* Ensures proper line breaks */\r\n  word-wrap: break-word !important; /* Prevents long lines from breaking UI */\r\n  overflow-x: auto; /* Enables horizontal scroll for very long SQL statements */\r\n  background: #272822 !important; /* Dark theme for syntax highlighting */\r\n  color: #f8f8f2 !important; /* Light text for readability */\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  font-size: 14px;\r\n  line-height: 1.5; /* Increases spacing for better readability */\r\n  font-family: 'Courier New', Courier, monospace;\r\n}\r\n\r\n/* Scrollbar customization for better UX */\r\n\r\nngx-prism::-webkit-scrollbar {\r\n  width: 6px;\r\n  height: 6px;\r\n}\r\n\r\nngx-prism::-webkit-scrollbar-thumb {\r\n  background: #555;\r\n  border-radius: 3px;\r\n}\r\n\r\nngx-prism::-webkit-scrollbar-track {\r\n  background: #222;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGUvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx3Q0FBd0M7RUFDeEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFRTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsOEJBQThCO0VBQ2hDOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVGO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsY0FBYztFQUNoQjs7SUFFRTtNQUNFLFVBQVU7TUFDVixXQUFXO0lBQ2I7O01BRUU7UUFDRSxhQUFhO01BQ2Y7O0lBRUY7TUFDRSxtQkFBbUI7SUFDckI7O01BRUU7UUFDRSxrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQix5QkFBeUI7UUFDekIsY0FBYztRQUNkLGNBQWM7TUFDaEI7QUFDTjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCO0FBQ0Y7O0FBR0E7RUFDRSw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLGlDQUFpQztFQUNqQyw4QkFBOEI7RUFDOUIsNEJBQTRCO0FBQzlCOztBQUdBO0VBQ0U7OztnQ0FHOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUNBLDRDQUE0Qzs7QUFDNUM7RUFDRSxpQkFBaUIsR0FBRyxpQ0FBaUM7RUFDckQsZ0JBQWdCLEdBQUcsd0NBQXdDO0VBQzNELGFBQWE7RUFDYix5QkFBeUIsRUFBRSxpQ0FBaUM7RUFDNUQsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQSw4Q0FBOEM7O0FBQzlDO0VBQ0UsY0FBYztFQUNkLGdDQUFnQyxFQUFFLCtCQUErQjtFQUNqRSxnQ0FBZ0MsRUFBRSx5Q0FBeUM7RUFDM0UsZ0JBQWdCLEVBQUUsMkRBQTJEO0VBQzdFLDhCQUE4QixFQUFFLHVDQUF1QztFQUN2RSx5QkFBeUIsRUFBRSwrQkFBK0I7RUFDMUQsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUUsNkNBQTZDO0VBQy9ELDhDQUE4QztBQUNoRDs7QUFFQSwwQ0FBMEM7O0FBQzFDO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC90YWJsZS9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xyXG4gIG1hcmdpbjogMHB4IDAgM3B4IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAudGFibGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxufVxyXG5cclxuICAucm93Om50aC1vZi10eXBlKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZDogI2U5ZTllOTtcclxuICB9XHJcblxyXG4gIC5yb3cuaGVhZGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQ6ICMxODQ1NjkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5yb3cuZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZDogIzI3YWU2MDtcclxuICB9XHJcblxyXG4gIC5yb3cuYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjk4MGI5O1xyXG4gIH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgLnJvdyB7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDAgN3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAgIC5yb3cuaGVhZGVyIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgaGVpZ2h0OiA2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgICAucm93LmhlYWRlciAuY2VsbCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgIC5yb3cgLmNlbGwge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICAgLnJvdyAuY2VsbDpiZWZvcmUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xyXG4gICAgICAgIG1pbi13aWR0aDogOThweDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBjb2xvcjogIzk2OTY5NjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG59XHJcblxyXG4uY2VsbCB7XHJcbiAgLyogIHBhZGRpbmc6IDZweCAxMnB4OyAqL1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgLmNlbGwge1xyXG4gICAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcblxyXG5hLmJ0bjpob3ZlciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG5hLmJ0biB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxuICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgLW8tdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxufVxyXG5cclxuXHJcbiNSb3RhdGVEaXYge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWig5MGRlZyk7ICBcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVooOTBkZWcpOyAgICovXHJcbn1cclxuXHJcbmg0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIDAgOHB4IDA7XHJcbn1cclxuXHJcbi51aS1pbnB1dHRleHQge1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnByb2dyZXNzLWlubmVyIHtcclxuICBtaW4td2lkdGg6IDElICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogQ29kZSBjb250YWluZXIgZm9yIGltcHJvdmVkIHJlYWRhYmlsaXR5ICovXHJcbi5jb2RlLWNvbnRhaW5lciB7XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7ICAvKiBQcmV2ZW50cyBleGNlc3NpdmUgc2Nyb2xsaW5nICovXHJcbiAgb3ZlcmZsb3cteTogYXV0bzsgIC8qIEVuYWJsZXMgdmVydGljYWwgc2Nyb2xsIHdoZW4gbmVlZGVkICovXHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkOyAvKiBEYXJrIGJhY2tncm91bmQgZm9yIGNvbnRyYXN0ICovXHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NDQ7XHJcbn1cclxuXHJcbi8qIG5neC1wcmlzbSBzdHlsaW5nIGZvciBiZXR0ZXIgdGV4dCBkaXNwbGF5ICovXHJcbm5neC1wcmlzbSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7IC8qIEVuc3VyZXMgcHJvcGVyIGxpbmUgYnJlYWtzICovXHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7IC8qIFByZXZlbnRzIGxvbmcgbGluZXMgZnJvbSBicmVha2luZyBVSSAqL1xyXG4gIG92ZXJmbG93LXg6IGF1dG87IC8qIEVuYWJsZXMgaG9yaXpvbnRhbCBzY3JvbGwgZm9yIHZlcnkgbG9uZyBTUUwgc3RhdGVtZW50cyAqL1xyXG4gIGJhY2tncm91bmQ6ICMyNzI4MjIgIWltcG9ydGFudDsgLyogRGFyayB0aGVtZSBmb3Igc3ludGF4IGhpZ2hsaWdodGluZyAqL1xyXG4gIGNvbG9yOiAjZjhmOGYyICFpbXBvcnRhbnQ7IC8qIExpZ2h0IHRleHQgZm9yIHJlYWRhYmlsaXR5ICovXHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIEluY3JlYXNlcyBzcGFjaW5nIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHkgKi9cclxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG59XHJcblxyXG4vKiBTY3JvbGxiYXIgY3VzdG9taXphdGlvbiBmb3IgYmV0dGVyIFVYICovXHJcbm5neC1wcmlzbTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA2cHg7XHJcbiAgaGVpZ2h0OiA2cHg7XHJcbn1cclxuXHJcbm5neC1wcmlzbTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICM1NTU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG5uZ3gtcHJpc206Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG59XHJcbiJdfQ== */";

    /***/
  }),
  /***/"./src/app/table/components/table/table.component.ts": (
  /*!***********************************************************!*\
    !*** ./src/app/table/components/table/table.component.ts ***!
    \***********************************************************/
  /*! exports provided: TableComponent */
  /***/
  function _src_app_table_components_table_tableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TableComponent", function () {
      return TableComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _service_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/table.service */"./src/app/table/service/table.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var TableComponent = /*#__PURE__*/function () {
      function TableComponent(route, tableService) {
        _classCallCheck(this, TableComponent);
        this.route = route;
        this.tableService = tableService;
        this.columns = [];
        this.tableFragmentations = [];
        this.createScript = {
          script: ""
        };
        this.descriptions = [];
        this.indices = [];
        this.foreignKeys = [];
        this.properties = [];
        this.selectedDescription = {
          name: "",
          value: "",
          table: ""
        };
        this.selectedColumn = {
          tableName: "",
          columnName: "",
          key: "",
          identity: "",
          dataType: "",
          maxLength: "",
          allowNulls: "",
          "default": "",
          description: "",
          descriptionname: "",
          extendedPropertyName: "",
          extendedPropertyValue: ""
        };
        this.language = 'plsql';
        this.isLoading = true;
      }
      return _createClass(TableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.tableName = this.route.snapshot.params.objectname;
          this.loadTableMetadata();
          this.loadData();
        }
      }, {
        key: "loadData",
        value: function loadData() {
          this.hasEditPermission = true;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          window.Prism.highlightAll();
        }
      }, {
        key: "loadTableMetadata",
        value: function loadTableMetadata() {
          var _this34 = this;
          this.isLoading = true;
          this.tableService.loadTableMetadata(this.tableName).subscribe({
            next: function next(metadata) {
              metadata ? _this34.handleLoadSuccess(metadata) : null;
              _this34.isLoading = false;
            },
            error: function error(_error2) {
              _this34.isLoading = false;
              _this34.handleLoadError(_error2);
            }
          });
        }
      }, {
        key: "handleLoadSuccess",
        value: function handleLoadSuccess(result) {
          this.descriptions = result.descriptions;
          this.columns = result.columns;
          this.createScript = result.createScript;
          this.indices = result.indices;
          this.foreignKeys = result.foreignKeys;
          this.properties = result.properties;
          this.tableconstraint = result.constraints;
          this.tableFragmentations = result.tableFragmentations;
          this.filesTree = JSON.parse(result.tableDependenciesTree);
        }
      }, {
        key: "handleLoadError",
        value: function handleLoadError(error) {
          console.error(error);
        }
      }, {
        key: "editDescription",
        value: function editDescription(description) {
          this.selectedDescription = _objectSpread({}, description);
          this.displayDialog = true;
        }
      }, {
        key: "saveDescription",
        value: function saveDescription() {
          var _this35 = this;
          var index = this.descriptions.findIndex(function (desc) {
            return desc.name === _this35.selectedDescription.name && desc.table === _this35.selectedDescription.table;
          });
          if (index !== -1) {
            this.descriptions[index] = _objectSpread({}, this.selectedDescription);
            this.tableService.updateTableExtendedProperties(this.selectedDescription).subscribe({
              next: function next() {
                return _this35.displayDialog = false;
              },
              error: function error(_error3) {
                return console.error("Error:", _error3);
              }
            });
          }
        }
      }, {
        key: "cancelEdit",
        value: function cancelEdit() {
          this.displayDialog = false;
        }
      }, {
        key: "editColumnDescription",
        value: function editColumnDescription(selectedColumn) {
          this.selectedColumn = _objectSpread({}, selectedColumn);
          this.displayColumnDialog = true;
        }
      }, {
        key: "saveColumnDescription",
        value: function saveColumnDescription() {
          var _this36 = this;
          var index = this.columns.findIndex(function (desc) {
            return desc.tableName === _this36.selectedColumn.tableName && desc.columnName === _this36.selectedColumn.columnName;
          });
          if (index !== -1) {
            this.columns[index] = _objectSpread({}, this.selectedColumn);
            this.tableService.updateTableColumnExtendedProperty(this.selectedColumn).subscribe({
              next: function next() {
                return _this36.displayColumnDialog = false;
              },
              error: function error(_error4) {
                return console.error("Error:", _error4);
              }
            });
          }
        }
      }, {
        key: "cancelColumnEdit",
        value: function cancelColumnEdit() {
          this.displayColumnDialog = false;
        }
      }, {
        key: "getSafeProgress",
        value: function getSafeProgress(value) {
          // Handles undefined, null, or weird string values
          var val = Number(value);
          if (isNaN(val) || val < 0) return 0;
          if (val > 100) return 100;
          return val;
        }
      }, {
        key: "getDynamicColor",
        value: function getDynamicColor(percent) {
          // Convert to number just in case
          var value = Number(percent) || 0;
          // Dynamically map progress to color intensity
          if (value < 10) {
            return {
              0: '#2ecc71',
              50: '#2ecc71'
            }; // bright green
          } else if (value < 40) {
            return {
              0: '#f1c40f',
              50: '#f1c40f'
            }; // yellow
          } else if (value < 70) {
            return {
              0: '#e67e22',
              50: '#e67e22'
            }; // orange
          } else {
            return {
              0: '#e74c3c',
              50: '#e74c3c'
            }; // red
          }
        }
      }]);
    }();
    TableComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _service_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"]
      }];
    };
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-table",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/table/components/table/table.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table.component.css */"./src/app/table/components/table/table.component.css"))["default"]]
    })], TableComponent);

    /***/
  }),
  /***/"./src/app/table/components/tables/tables.component.css": (
  /*!**************************************************************!*\
    !*** ./src/app/table/components/tables/tables.component.css ***!
    \**************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_table_components_tables_tablesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = " /* Style for table header */\r\n .p-table thead th {\r\n    text-align: left;\r\n    padding: 8px;\r\n    background-color: #f4f4f4;\r\n  }\r\n /* Style for table cells */\r\n .p-table td {\r\n    padding: 8px;\r\n    border-bottom: 1px solid #ddd;\r\n  }\r\n /* Style for the expanded row content */\r\n .table {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n    margin-top: 10px;\r\n  }\r\n .table .row {\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n .table .header {\r\n      font-weight: bold;\r\n      background-color: #234468 !important;\r\n      color:white !important;\r\n    }\r\n .table .cell {\r\n    padding: 8px;\r\n    border-bottom: 1px solid #ddd;\r\n    flex: 1;\r\n  }\r\n .table .row:nth-child(even) {\r\n    background-color: #f9f9f9;\r\n  }\r\n .table .row:hover {\r\n    background-color: #f1f1f1;\r\n  }\r\n /* Add hover effect for row togglers */\r\n .p-table a {\r\n    text-decoration: none;\r\n    color: #007bff;\r\n  }\r\n .p-table a:hover {\r\n    text-decoration: underline;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGUvY29tcG9uZW50cy90YWJsZXMvdGFibGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUMsMkJBQTJCO0NBQzNCO0lBQ0csZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix5QkFBeUI7RUFDM0I7Q0FFQSwwQkFBMEI7Q0FDMUI7SUFDRSxZQUFZO0lBQ1osNkJBQTZCO0VBQy9CO0NBRUEsdUNBQXVDO0NBQ3ZDO0lBQ0UsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7Q0FFQTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7RUFDaEM7Q0FFRTtNQUNFLGlCQUFpQjtNQUNqQixvQ0FBb0M7TUFDcEMsc0JBQXNCO0lBQ3hCO0NBRUY7SUFDRSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLE9BQU87RUFDVDtDQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0NBRUE7SUFDRSx5QkFBeUI7RUFDM0I7Q0FFQSxzQ0FBc0M7Q0FDdEM7SUFDRSxxQkFBcUI7SUFDckIsY0FBYztFQUNoQjtDQUVBO0lBQ0UsMEJBQTBCO0VBQzVCIiwiZmlsZSI6InNyYy9hcHAvdGFibGUvY29tcG9uZW50cy90YWJsZXMvdGFibGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLyogU3R5bGUgZm9yIHRhYmxlIGhlYWRlciAqL1xyXG4gLnAtdGFibGUgdGhlYWQgdGgge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbiAgfVxyXG5cclxuICAvKiBTdHlsZSBmb3IgdGFibGUgY2VsbHMgKi9cclxuICAucC10YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICB9XHJcblxyXG4gIC8qIFN0eWxlIGZvciB0aGUgZXhwYW5kZWQgcm93IGNvbnRlbnQgKi9cclxuICAudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIC50YWJsZSAucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAgIC50YWJsZSAuaGVhZGVyIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzQ0NjggIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6d2hpdGUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgLnRhYmxlIC5jZWxsIHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcblxyXG4gIC50YWJsZSAucm93Om50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gIH1cclxuXHJcbiAgLnRhYmxlIC5yb3c6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICB9XHJcblxyXG4gIC8qIEFkZCBob3ZlciBlZmZlY3QgZm9yIHJvdyB0b2dnbGVycyAqL1xyXG4gIC5wLXRhYmxlIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgfVxyXG5cclxuICAucC10YWJsZSBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuIl19 */";

    /***/
  }),
  /***/"./src/app/table/components/tables/tables.component.ts": (
  /*!*************************************************************!*\
    !*** ./src/app/table/components/tables/tables.component.ts ***!
    \*************************************************************/
  /*! exports provided: TablesComponent */
  /***/
  function _src_app_table_components_tables_tablesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TablesComponent", function () {
      return TablesComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */"./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */
    var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/services/auth.service */"./src/app/auth/services/auth.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var TablesComponent = /*#__PURE__*/function () {
      function TablesComponent(http, primaryUrl, secondaryUrl, authService, router) {
        _classCallCheck(this, TablesComponent);
        this.http = http;
        this.primaryUrl = primaryUrl;
        this.secondaryUrl = secondaryUrl;
        this.authService = authService;
        this.router = router;
        this.isLoading = true;
      }
      return _createClass(TablesComponent, [{
        key: "getAuthHeaders",
        value: function getAuthHeaders() {
          var token = this.authService.getToken();
          if (!token) {
            this.router.navigate(['/login']);
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          }
          return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': "Bearer ".concat(token)
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cols = [{
            field: 'tableName',
            header: 'extendedPropertyValue'
          }, {
            field: 'extendedPropertyValue',
            header: 'tableColumns'
          }];
          this.loadTablesMetadata();
        }
      }, {
        key: "loadTablesMetadata",
        value: function loadTablesMetadata() {
          var _this37 = this;
          var headers = this.getAuthHeaders();
          var primaryUrl = "".concat(this.primaryUrl, "/Tables/GetTableDetails");
          var secondaryUrl = 'Tables/GetTableDetails';
          // Try the primary URL
          this.http.get(primaryUrl, {
            headers: headers
          }).subscribe(function (result) {
            _this37.handleLoadSuccess(result);
            _this37.isLoading = false;
          }, function (error) {
            console.error('Primary URL failed, trying secondary URL:', error);
            _this37.isLoading = false;
            _this37.http.get(secondaryUrl).subscribe(function (secondaryResult) {
              return _this37.handleLoadSuccess(secondaryResult);
            }, function (secondaryError) {
              return _this37.handleLoadError(secondaryError);
            });
          });
        }
      }, {
        key: "handleLoadSuccess",
        value: function handleLoadSuccess(result) {
          this.tables = result;
        }
      }, {
        key: "handleLoadError",
        value: function handleLoadError(error) {
          console.error(error);
        }
      }]);
    }();
    TablesComponent.ctorParameters = function () {
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
      }, {
        type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };
    TablesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tables',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tables.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/table/components/tables/tables.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('rowExpansionTrigger', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'translateX(-10%)',
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'translateX(0)',
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tables.component.css */"./src/app/table/components/tables/tables.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('API_URL')), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('ANOTHER_URL'))], TablesComponent);

    /***/
  }),
  /***/"./src/app/table/service/table.service.ts": (
  /*!************************************************!*\
    !*** ./src/app/table/service/table.service.ts ***!
    \************************************************/
  /*! exports provided: TableService */
  /***/
  function _src_app_table_service_tableServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TableService", function () {
      return TableService;
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
    var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/services/auth.service */"./src/app/auth/services/auth.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var TableService = /*#__PURE__*/function () {
      function TableService(primaryUrl, secondaryUrl, http, authService, router) {
        _classCallCheck(this, TableService);
        this.primaryUrl = primaryUrl;
        this.secondaryUrl = secondaryUrl;
        this.http = http;
        this.authService = authService;
        this.router = router;
      }
      /**
       * Get HTTP headers with bearer token
       */
      return _createClass(TableService, [{
        key: "getAuthHeaders",
        value: function getAuthHeaders() {
          var token = this.authService.getToken();
          if (!token) {
            this.router.navigate(['/login']);
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          }
          return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': "Bearer ".concat(token)
          });
        }
      }, {
        key: "loadTableMetadata",
        value: function loadTableMetadata(tableName) {
          var headers = this.getAuthHeaders();
          var primaryUrl = "".concat(this.primaryUrl, "/Tables/GetTableMetaData?tableName=").concat(tableName);
          var secondaryUrl = "Tables/GetTableMetaData?tableName=".concat(tableName);
          var primaryRequest = this.http.get(primaryUrl, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2) // Retry the primary request up to 2 times before failing over
          );
          var secondaryRequest = this.http.get(secondaryUrl, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2) // Optionally retry the secondary request as well
          );
          return primaryRequest.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            console.error('Primary API URL failed after retries:', error);
            return secondaryRequest.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (secondaryError) {
              console.error('Secondary API URL failed after retries:', secondaryError);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null); // Handle the error or return a default value
            }));
          }));
        }
        /**
         * Updates the extended properties of a table.
         * @param description Table description object
         * @returns Observable<any>
         */
      }, {
        key: "updateTableExtendedProperties",
        value: function updateTableExtendedProperties(description) {
          var headers = this.getAuthHeaders();
          return this.http.post("".concat(this.primaryUrl, "/Tables/UpdateTableExtendedProperties"), description, {
            headers: headers
          });
        }
        /**
         * Updates the extended properties of a table column.
         * @param column Table column object
         * @returns Observable<any>
         */
      }, {
        key: "updateTableColumnExtendedProperty",
        value: function updateTableColumnExtendedProperty(column) {
          var headers = this.getAuthHeaders();
          return this.http.post("".concat(this.primaryUrl, "/Tables/UpdateTableColumnExtendedProperty"), column, {
            headers: headers
          });
        }
      }]);
    }();
    TableService.ctorParameters = function () {
      return [{
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
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };
    TableService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('API_URL')), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('ANOTHER_URL'))], TableService);

    /***/
  }),
  /***/"./src/app/table/service/tables.service.ts": (
  /*!*************************************************!*\
    !*** ./src/app/table/service/tables.service.ts ***!
    \*************************************************/
  /*! exports provided: TablesService */
  /***/
  function _src_app_table_service_tablesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TablesService", function () {
      return TablesService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var TablesService = /*#__PURE__*/_createClass(function TablesService(apiUrl, anotherUrl) {
      _classCallCheck(this, TablesService);
      this.apiUrl = apiUrl;
      this.anotherUrl = anotherUrl;
    });
    TablesService.ctorParameters = function () {
      return [{
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
    TablesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('API_URL')), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('ANOTHER_URL'))], TablesService);

    /***/
  }),
  /***/"./src/app/table/tables.module.ts": (
  /*!****************************************!*\
    !*** ./src/app/table/tables.module.ts ***!
    \****************************************/
  /*! exports provided: TablesModule */
  /***/
  function _src_app_table_tablesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TablesModule", function () {
      return TablesModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _components_table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/table/table.component */"./src/app/table/components/table/table.component.ts");
    /* harmony import */
    var _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tables/tables.component */"./src/app/table/components/tables/tables.component.ts");
    /* harmony import */
    var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! amexio-ng-extensions */"./node_modules/amexio-ng-extensions/amexio-ng-extensions.js");
    /* harmony import */
    var primeng_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/accordion */"./node_modules/primeng/fesm2015/primeng-accordion.js");
    /* harmony import */
    var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */"./node_modules/primeng/fesm2015/primeng-table.js");
    /* harmony import */
    var primeng_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tree */"./node_modules/primeng/fesm2015/primeng-tree.js");
    /* harmony import */
    var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */"./node_modules/primeng/fesm2015/primeng-toast.js");
    /* harmony import */
    var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */"./node_modules/primeng/fesm2015/primeng-button.js");
    /* harmony import */
    var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/contextmenu */"./node_modules/primeng/fesm2015/primeng-contextmenu.js");
    /* harmony import */
    var primeng_tabview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tabview */"./node_modules/primeng/fesm2015/primeng-tabview.js");
    /* harmony import */
    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/codehighlighter */"./node_modules/primeng/fesm2015/primeng-codehighlighter.js");
    /* harmony import */
    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/breadcrumb */"./node_modules/primeng/fesm2015/primeng-breadcrumb.js");
    /* harmony import */
    var primeng_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/api */"./node_modules/primeng/fesm2015/primeng-api.js");
    /* harmony import */
    var angular_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-progress-bar */"./node_modules/angular-progress-bar/fesm2015/angular-progress-bar.js");
    /* harmony import */
    var primeng_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/dialog */"./node_modules/primeng/fesm2015/primeng-dialog.js");
    /* harmony import */
    var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputtextarea */"./node_modules/primeng/fesm2015/primeng-inputtextarea.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _ngx_prism_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-prism/core */"./node_modules/@ngx-prism/core/dist/index.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _components_table_edit_description_dialog_edit_description_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/table/edit-description-dialog/edit-description-dialog.component */"./src/app/table/components/table/edit-description-dialog/edit-description-dialog.component.ts");
    /* harmony import */
    var _components_table_edit_column_description_dialog_edit_column_description_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/table/edit-column-description-dialog/edit-column-description-dialog.component */"./src/app/table/components/table/edit-column-description-dialog/edit-column-description-dialog.component.ts");
    /* harmony import */
    var _components_table_sql_script_viewer_sql_script_viewer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/table/sql-script-viewer/sql-script-viewer.component */"./src/app/table/components/table/sql-script-viewer/sql-script-viewer.component.ts");
    /* harmony import */
    var _service_table_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./service/table.service */"./src/app/table/service/table.service.ts");
    /* harmony import */
    var _service_tables_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./service/tables.service */"./src/app/table/service/tables.service.ts");
    /* harmony import */
    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../shared/shared.module */"./src/app/shared/shared.module.ts");
    var appRoutes = [{
      path: 'Tables',
      component: _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"]
    }, {
      path: 'Table/:objectname',
      component: _components_table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"]
    }];
    var TablesModule = /*#__PURE__*/_createClass(function TablesModule() {
      _classCallCheck(this, TablesModule);
    });
    TablesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"], _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"], _components_table_edit_description_dialog_edit_description_dialog_component__WEBPACK_IMPORTED_MODULE_22__["EditDescriptionDialogComponent"], _components_table_edit_column_description_dialog_edit_column_description_dialog_component__WEBPACK_IMPORTED_MODULE_23__["EditColumnDescriptionDialogComponent"], _components_table_sql_script_viewer_sql_script_viewer_component__WEBPACK_IMPORTED_MODULE_24__["SqlScriptViewerComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_27__["SharedModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioDataModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioChartsModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioEnterpriseModule"], primeng_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionModule"], primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"], primeng_tree__WEBPACK_IMPORTED_MODULE_8__["TreeModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"], primeng_contextmenu__WEBPACK_IMPORTED_MODULE_11__["ContextMenuModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_12__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_13__["CodeHighlighterModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_14__["BreadcrumbModule"], angular_progress_bar__WEBPACK_IMPORTED_MODULE_16__["ProgressBarModule"], primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_17__["DialogModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_18__["InputTextareaModule"], _ngx_prism_core__WEBPACK_IMPORTED_MODULE_20__["PrismModule"]],
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_15__["TreeDragDropService"], primeng_api__WEBPACK_IMPORTED_MODULE_15__["MessageService"], _service_table_service__WEBPACK_IMPORTED_MODULE_25__["TableService"], _service_tables_service__WEBPACK_IMPORTED_MODULE_26__["TablesService"]],
      exports: [_components_table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"], _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], TablesModule);

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
    __webpack_exports__["default"] = ".header {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 1000;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-brand {\r\n  font-weight: 600;\r\n  font-size: 1.25rem;\r\n}\r\n\r\n.navbar-brand i {\r\n  margin-right: 8px;\r\n}\r\n\r\n.nav-link {\r\n  font-size: 14px;\r\n  padding: 8px 12px !important;\r\n}\r\n\r\n.dropdown-item {\r\n  font-size: 14px;\r\n  padding: 8px 16px;\r\n}\r\n\r\n.dropdown-item i {\r\n  margin-right: 8px;\r\n  width: 16px;\r\n  text-align: center;\r\n}\r\n\r\n.dropdown-item:hover {\r\n  background-color: #f8f9fa;\r\n}\r\n\r\n.btn-outline-light {\r\n  border-width: 2px;\r\n}\r\n\r\n.btn-outline-light:hover {\r\n  background-color: rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n.navbar-dark .navbar-nav .nav-link {\r\n  color: rgba(255, 255, 255, 0.9);\r\n}\r\n\r\n.navbar-dark .navbar-nav .nav-link:hover {\r\n  color: #fff;\r\n}\r\n\r\n.fa-user-circle {\r\n  font-size: 18px;\r\n  margin-right: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sYUFBYTtFQUNiLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3VpL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQgaSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1pdGVtIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1pdGVtIGkge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1saWdodCB7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1saWdodDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG59XHJcblxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG59XHJcblxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmZhLXVzZXItY2lyY2xlIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuIl19 */";

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
      }
      return _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this38 = this;
          this.userSubscription = this.authService.currentUser.subscribe(function (user) {
            _this38.currentUser = user;
          });
          this.authSubscription = this.authService.isAuthenticated.subscribe(function (isAuth) {
            _this38.isAuthenticated = isAuth;
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
        key: "onChangeServer",
        value: function onChangeServer(event) {
          var selectedServer = event.target.value;
          console.log('Selected SQL Server:', selectedServer);
          // Handle the change as needed
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.logout();
          this.router.navigate(['/login']);
        }
      }, {
        key: "navigateToLogin",
        value: function navigateToLogin() {
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
    var MainPageComponent = /*#__PURE__*/function () {
      function MainPageComponent() {
        _classCallCheck(this, MainPageComponent);
      }
      return _createClass(MainPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();
    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-page.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/ui/main-page/main-page.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-page.component.css */"./src/app/ui/main-page/main-page.component.css"))["default"]]
    })], MainPageComponent);

    /***/
  }),
  /***/"./src/app/view/components/view/view.component.css": (
  /*!*********************************************************!*\
    !*** ./src/app/view/components/view/view.component.css ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_view_components_view_viewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\r\n/* 🔹 Container for MS Description */\r\n.ms-description-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: #ffffff;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  width: 100%;\r\n  border: 1px solid #ccc;\r\n}\r\n/* 🔹 Flexbox for proper alignment */\r\n.ms-description-content {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  background: #f6f6f6;\r\n  padding: 10px;\r\n  border-radius: 4px;\r\n}\r\n/* 🔹 Proper text alignment */\r\n.description-text {\r\n  font-size: 16px;\r\n  color: #333;\r\n}\r\n/* 🔹 Edit button */\r\n.edit-btn-container {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.edit-btn {\r\n  color: #184569;\r\n  font-size: 18px;\r\n  padding: 5px;\r\n  cursor: pointer;\r\n  transition: 0.2s;\r\n}\r\n.edit-btn:hover {\r\n  color: #2980b9;\r\n}\r\n/* 🔹 Edit box (Textarea) */\r\n.edit-box {\r\n  margin-top: 10px;\r\n}\r\n/* 🔹 Mobile Responsiveness */\r\n@media screen and (max-width: 768px) {\r\n  .ms-description-content {\r\n      flex-direction: column;\r\n      align-items: flex-start;\r\n  }\r\n  .edit-btn-container {\r\n      margin-top: 5px;\r\n      text-align: right;\r\n      width: 100%;\r\n  }\r\n}\r\n/* Fix accordion spacing & alignment */\r\n.view-name-container {\r\n  display: flex;\r\n  align-items: center;\r\n  background: #184569;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  width: 100%;\r\n}\r\n/* Ensures the header text is properly aligned */\r\n.view-title {\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  color: #ffffff;\r\n  margin: 0;\r\n  width: 100%;\r\n}\r\n/* Properly align icon with text */\r\n.view-icon {\r\n  width: 25px;\r\n  height: auto;\r\n  margin-right: 10px;\r\n  vertical-align: middle;\r\n}\r\n/* General table styling */\r\n.table {\r\n  width: 100%;\r\n  display: table;\r\n  border-collapse: collapse;\r\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n/* Table row structure */\r\n.row {\r\n  display: table-row;\r\n  background: #f6f6f6;\r\n}\r\n/* Alternate row colors */\r\n.row:nth-of-type(odd) {\r\n    background: #e9e9e9;\r\n  }\r\n/* Header row styling */\r\n.row.header {\r\n    font-weight: bold;\r\n    color: #ffffff;\r\n    background: #184569;\r\n  }\r\n/* Table cell styling */\r\n.cell {\r\n  display: table-cell;\r\n  padding: 10px;\r\n  text-align: left;\r\n}\r\n/* Mobile Responsive Adjustments */\r\n@media screen and (max-width: 768px) {\r\n  .view-title {\r\n    font-size: 16px;\r\n  }\r\n\r\n  .table {\r\n    display: block;\r\n  }\r\n\r\n  .row {\r\n    display: block;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .cell {\r\n    display: block;\r\n    text-align: left;\r\n    padding: 5px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9jb21wb25lbnRzL3ZpZXcvdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvQ0FBb0M7QUFDcEM7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7QUFFQSxvQ0FBb0M7QUFDcEM7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUVBLDZCQUE2QjtBQUM3QjtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUEsNkJBQTZCO0FBQzdCO0VBQ0U7TUFDSSxzQkFBc0I7TUFDdEIsdUJBQXVCO0VBQzNCO0VBQ0E7TUFDSSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLFdBQVc7RUFDZjtBQUNGO0FBRUEsc0NBQXNDO0FBQ3RDO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFFQSxnREFBZ0Q7QUFDaEQ7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFNBQVM7RUFDVCxXQUFXO0FBQ2I7QUFFQSxrQ0FBa0M7QUFDbEM7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLHlCQUF5QjtFQUN6QiwwQ0FBMEM7QUFDNUM7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBRUUseUJBQXlCO0FBQ3pCO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBRUEsdUJBQXVCO0FBQ3ZCO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxtQkFBbUI7RUFDckI7QUFFRix1QkFBdUI7QUFDdkI7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjtBQUVBLGtDQUFrQztBQUNsQztFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvY29tcG9uZW50cy92aWV3L3ZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiDwn5S5IENvbnRhaW5lciBmb3IgTVMgRGVzY3JpcHRpb24gKi9cclxuLm1zLWRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxufVxyXG5cclxuLyog8J+UuSBGbGV4Ym94IGZvciBwcm9wZXIgYWxpZ25tZW50ICovXHJcbi5tcy1kZXNjcmlwdGlvbi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi8qIPCflLkgUHJvcGVyIHRleHQgYWxpZ25tZW50ICovXHJcbi5kZXNjcmlwdGlvbi10ZXh0IHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi8qIPCflLkgRWRpdCBidXR0b24gKi9cclxuLmVkaXQtYnRuLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZWRpdC1idG4ge1xyXG4gIGNvbG9yOiAjMTg0NTY5O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbn1cclxuXHJcbi5lZGl0LWJ0bjpob3ZlciB7XHJcbiAgY29sb3I6ICMyOTgwYjk7XHJcbn1cclxuXHJcbi8qIPCflLkgRWRpdCBib3ggKFRleHRhcmVhKSAqL1xyXG4uZWRpdC1ib3gge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi8qIPCflLkgTW9iaWxlIFJlc3BvbnNpdmVuZXNzICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLm1zLWRlc2NyaXB0aW9uLWNvbnRlbnQge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB9XHJcbiAgLmVkaXQtYnRuLWNvbnRhaW5lciB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLyogRml4IGFjY29yZGlvbiBzcGFjaW5nICYgYWxpZ25tZW50ICovXHJcbi52aWV3LW5hbWUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzE4NDU2OTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogRW5zdXJlcyB0aGUgaGVhZGVyIHRleHQgaXMgcHJvcGVybHkgYWxpZ25lZCAqL1xyXG4udmlldy10aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIFByb3Blcmx5IGFsaWduIGljb24gd2l0aCB0ZXh0ICovXHJcbi52aWV3LWljb24ge1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLyogR2VuZXJhbCB0YWJsZSBzdHlsaW5nICovXHJcbi50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbi8qIFRhYmxlIHJvdyBzdHJ1Y3R1cmUgKi9cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogdGFibGUtcm93O1xyXG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbn1cclxuXHJcbiAgLyogQWx0ZXJuYXRlIHJvdyBjb2xvcnMgKi9cclxuICAucm93Om50aC1vZi10eXBlKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZDogI2U5ZTllOTtcclxuICB9XHJcblxyXG4gIC8qIEhlYWRlciByb3cgc3R5bGluZyAqL1xyXG4gIC5yb3cuaGVhZGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTg0NTY5O1xyXG4gIH1cclxuXHJcbi8qIFRhYmxlIGNlbGwgc3R5bGluZyAqL1xyXG4uY2VsbCB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi8qIE1vYmlsZSBSZXNwb25zaXZlIEFkanVzdG1lbnRzICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnZpZXctdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLnRhYmxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuY2VsbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";

    /***/
  }),
  /***/"./src/app/view/components/view/view.component.ts": (
  /*!********************************************************!*\
    !*** ./src/app/view/components/view/view.component.ts ***!
    \********************************************************/
  /*! exports provided: ViewComponent */
  /***/
  function _src_app_view_components_view_viewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ViewComponent", function () {
      return ViewComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _service_services_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/services/view.service */"./src/app/view/service/services/view.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var ViewComponent = /*#__PURE__*/function () {
      function ViewComponent(route, viewService) {
        _classCallCheck(this, ViewComponent);
        this.route = route;
        this.viewService = viewService;
        this.selectedViewMetaData = null;
        this.editedDescription = ''; // Local copy for editing
      }
      return _createClass(ViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.selectedViewName = this.route.snapshot.params.objectname;
          this.loadViewMetaData(this.selectedViewName);
        }
      }, {
        key: "loadViewMetaData",
        value: function loadViewMetaData(viewName) {
          var _this39 = this;
          this.viewService.getViewMetaData(viewName).subscribe(function (data) {
            _this39.selectedViewMetaData = data;
          });
        }
        /**
        * Enables edit mode and creates a local copy of the description.
        */
      }, {
        key: "EditView",
        value: function EditView(event) {
          event.preventDefault();
          if (this.selectedViewMetaData.viewDetails.length) {
            this.editedDescription = this.selectedViewMetaData.viewDetails[0].viewExtendedProperties;
            this.iblnShowEditBox = true;
          }
        }
        /**
         * Cancels editing without modifying the original value.
         */
      }, {
        key: "CancelViewMsDesciption",
        value: function CancelViewMsDesciption(event) {
          event.preventDefault();
          this.iblnShowEditBox = false;
        }
        /**
         * Saves the modified description and updates the backend.
         */
      }, {
        key: "SaveViewMsDesciption",
        value: function SaveViewMsDesciption(event) {
          var _this40 = this;
          event.preventDefault();
          if (this.selectedViewMetaData.viewDetails.length) {
            var updatedDescription = this.editedDescription;
            // Call API to save the new description
            this.viewService.updateViewDescription(this.selectedViewName, updatedDescription).subscribe(function () {
              console.log('Description updated successfully');
              // Update the original data
              _this40.selectedViewMetaData.viewDetails[0].viewExtendedProperties = updatedDescription;
              // Hide edit box
              _this40.iblnShowEditBox = false;
            }, function (error) {
              console.error('Error updating description:', error);
            });
          }
        }
      }]);
    }();
    ViewComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _service_services_view_service__WEBPACK_IMPORTED_MODULE_2__["ViewService"]
      }];
    };
    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/view/components/view/view.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view.component.css */"./src/app/view/components/view/view.component.css"))["default"]]
    })], ViewComponent);

    /***/
  }),
  /***/"./src/app/view/components/views/views.component.css": (
  /*!***********************************************************!*\
    !*** ./src/app/view/components/views/views.component.css ***!
    \***********************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_view_components_views_viewsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".table {\r\n  margin: 0px 0 3px 0;\r\n  width: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: table;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .table {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.row {\r\n  display: table-row;\r\n  background: #f6f6f6;\r\n}\r\n\r\n.row:nth-of-type(odd) {\r\n    background: #e9e9e9;\r\n  }\r\n\r\n.row.header {\r\n    font-weight: 900;\r\n    color: #ffffff;\r\n    background: #184569 !important;\r\n  }\r\n\r\n.row.green {\r\n    background: #27ae60;\r\n  }\r\n\r\n.row.blue {\r\n    background: #2980b9;\r\n  }\r\n\r\n@media screen and (max-width: 580px) {\r\n  .row {\r\n    padding: 14px 0 7px;\r\n    display: block;\r\n  }\r\n\r\n    .row.header {\r\n      padding: 0;\r\n      height: 6px;\r\n    }\r\n\r\n      .row.header .cell {\r\n        display: none;\r\n      }\r\n\r\n    .row .cell {\r\n      margin-bottom: 10px;\r\n    }\r\n\r\n      .row .cell:before {\r\n        margin-bottom: 3px;\r\n        content: attr(data-title);\r\n        min-width: 98px;\r\n        font-size: 10px;\r\n        line-height: 10px;\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n        color: #969696;\r\n        display: block;\r\n      }\r\n}\r\n\r\n.cell {\r\n  /*  padding: 6px 12px; */\r\n  display: table-cell;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .cell {\r\n    padding: 2px 16px;\r\n    display: block;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9jb21wb25lbnRzL3ZpZXdzL3ZpZXdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHdDQUF3QztFQUN4QyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVFO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCw4QkFBOEI7RUFDaEM7O0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUY7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixjQUFjO0VBQ2hCOztJQUVFO01BQ0UsVUFBVTtNQUNWLFdBQVc7SUFDYjs7TUFFRTtRQUNFLGFBQWE7TUFDZjs7SUFFRjtNQUNFLG1CQUFtQjtJQUNyQjs7TUFFRTtRQUNFLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsZUFBZTtRQUNmLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLHlCQUF5QjtRQUN6QixjQUFjO1FBQ2QsY0FBYztNQUNoQjtBQUNOOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvY29tcG9uZW50cy92aWV3cy92aWV3cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHtcclxuICBtYXJnaW46IDBweCAwIDNweCAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgLnRhYmxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogdGFibGUtcm93O1xyXG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbn1cclxuXHJcbiAgLnJvdzpudGgtb2YtdHlwZShvZGQpIHtcclxuICAgIGJhY2tncm91bmQ6ICNlOWU5ZTk7XHJcbiAgfVxyXG5cclxuICAucm93LmhlYWRlciB7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTg0NTY5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAucm93LmdyZWVuIHtcclxuICAgIGJhY2tncm91bmQ6ICMyN2FlNjA7XHJcbiAgfVxyXG5cclxuICAucm93LmJsdWUge1xyXG4gICAgYmFja2dyb3VuZDogIzI5ODBiOTtcclxuICB9XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gIC5yb3cge1xyXG4gICAgcGFkZGluZzogMTRweCAwIDdweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgICAucm93LmhlYWRlciB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGhlaWdodDogNnB4O1xyXG4gICAgfVxyXG5cclxuICAgICAgLnJvdy5oZWFkZXIgLmNlbGwge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAucm93IC5jZWxsIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAgIC5yb3cgLmNlbGw6YmVmb3JlIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcclxuICAgICAgICBtaW4td2lkdGg6IDk4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgY29sb3I6ICM5Njk2OTY7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxufVxyXG5cclxuLmNlbGwge1xyXG4gIC8qICBwYWRkaW5nOiA2cHggMTJweDsgKi9cclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gIC5jZWxsIHtcclxuICAgIHBhZGRpbmc6IDJweCAxNnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";

    /***/
  }),
  /***/"./src/app/view/components/views/views.component.ts": (
  /*!**********************************************************!*\
    !*** ./src/app/view/components/views/views.component.ts ***!
    \**********************************************************/
  /*! exports provided: ViewsComponent */
  /***/
  function _src_app_view_components_views_viewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ViewsComponent", function () {
      return ViewsComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _service_services_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/services/view.service */"./src/app/view/service/services/view.service.ts");
    var ViewsComponent = /*#__PURE__*/function () {
      function ViewsComponent(viewService) {
        _classCallCheck(this, ViewsComponent);
        this.viewService = viewService;
        this.viewDetails = [];
      }
      return _createClass(ViewsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cols = [{
            field: 'viewName',
            header: 'viewExtendedProperties'
          }];
          this.loadAllViews();
        }
      }, {
        key: "loadAllViews",
        value: function loadAllViews() {
          var _this41 = this;
          this.viewService.getAllViewData().subscribe(function (data) {
            _this41.viewDetails = data;
          });
        }
      }]);
    }();
    ViewsComponent.ctorParameters = function () {
      return [{
        type: _service_services_view_service__WEBPACK_IMPORTED_MODULE_2__["ViewService"]
      }];
    };
    ViewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-views',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./views.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/view/components/views/views.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./views.component.css */"./src/app/view/components/views/views.component.css"))["default"]]
    })], ViewsComponent);

    /***/
  }),
  /***/"./src/app/view/service/services/view.service.ts": (
  /*!*******************************************************!*\
    !*** ./src/app/view/service/services/view.service.ts ***!
    \*******************************************************/
  /*! exports provided: ViewService */
  /***/
  function _src_app_view_service_services_viewServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ViewService", function () {
      return ViewService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth/services/auth.service */"./src/app/auth/services/auth.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var ViewService = /*#__PURE__*/function () {
      function ViewService(primaryUrl, secondaryUrl, http, authService, router) {
        _classCallCheck(this, ViewService);
        this.primaryUrl = primaryUrl;
        this.secondaryUrl = secondaryUrl;
        this.http = http;
        this.authService = authService;
        this.router = router;
      }
      return _createClass(ViewService, [{
        key: "getAllViewData",
        value: function getAllViewData() {
          var headers = this.getAuthHeaders();
          return this.http.get("".concat(this.primaryUrl, "/View/GetAllViewData"), {
            headers: headers
          });
        }
      }, {
        key: "getViewMetaData",
        value: function getViewMetaData(viewname) {
          var headers = this.getAuthHeaders();
          return this.http.get("".concat(this.primaryUrl, "/View/GetViewMetaData").concat(viewname), {
            headers: headers
          });
        }
      }, {
        key: "getAuthHeaders",
        value: function getAuthHeaders() {
          var token = this.authService.getToken();
          if (!token) {
            this.router.navigate(['/login']);
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          }
          return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': "Bearer ".concat(token)
          });
        }
      }]);
    }();
    ViewService.ctorParameters = function () {
      return [{
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
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };
    ViewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('API_URL')), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('ANOTHER_URL'))], ViewService);

    /***/
  }),
  /***/"./src/app/view/views.module.ts": (
  /*!**************************************!*\
    !*** ./src/app/view/views.module.ts ***!
    \**************************************/
  /*! exports provided: ViewModule */
  /***/
  function _src_app_view_viewsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ViewModule", function () {
      return ViewModule;
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
    var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! amexio-ng-extensions */"./node_modules/amexio-ng-extensions/amexio-ng-extensions.js");
    /* harmony import */
    var primeng_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/accordion */"./node_modules/primeng/fesm2015/primeng-accordion.js");
    /* harmony import */
    var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */"./node_modules/primeng/fesm2015/primeng-table.js");
    /* harmony import */
    var primeng_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tree */"./node_modules/primeng/fesm2015/primeng-tree.js");
    /* harmony import */
    var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */"./node_modules/primeng/fesm2015/primeng-toast.js");
    /* harmony import */
    var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */"./node_modules/primeng/fesm2015/primeng-button.js");
    /* harmony import */
    var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/contextmenu */"./node_modules/primeng/fesm2015/primeng-contextmenu.js");
    /* harmony import */
    var primeng_tabview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tabview */"./node_modules/primeng/fesm2015/primeng-tabview.js");
    /* harmony import */
    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/codehighlighter */"./node_modules/primeng/fesm2015/primeng-codehighlighter.js");
    /* harmony import */
    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/breadcrumb */"./node_modules/primeng/fesm2015/primeng-breadcrumb.js");
    /* harmony import */
    var primeng_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dialog */"./node_modules/primeng/fesm2015/primeng-dialog.js");
    /* harmony import */
    var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputtextarea */"./node_modules/primeng/fesm2015/primeng-inputtextarea.js");
    /* harmony import */
    var angular_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-progress-bar */"./node_modules/angular-progress-bar/fesm2015/angular-progress-bar.js");
    /* harmony import */
    var _components_view_view_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/view/view.component */"./src/app/view/components/view/view.component.ts");
    /* harmony import */
    var _components_views_views_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/views/views.component */"./src/app/view/components/views/views.component.ts");
    /* harmony import */
    var _service_services_view_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./service/services/view.service */"./src/app/view/service/services/view.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");

    /* ===== Amexio Modules ===== */

    /* ===== PrimeNG Modules ===== */

    /* ===== Other Third-Party Modules ===== */

    /* ===== Components & Services ===== */

    var appRoutes = [{
      path: 'Views',
      component: _components_views_views_component__WEBPACK_IMPORTED_MODULE_19__["ViewsComponent"]
    }, {
      path: 'View/:objectname',
      component: _components_view_view_component__WEBPACK_IMPORTED_MODULE_18__["ViewComponent"]
    }];
    var ViewModule = /*#__PURE__*/_createClass(function ViewModule() {
      _classCallCheck(this, ViewModule);
    });
    ViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_view_view_component__WEBPACK_IMPORTED_MODULE_18__["ViewComponent"], _components_views_views_component__WEBPACK_IMPORTED_MODULE_19__["ViewsComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"].forRoot(appRoutes, {
        useHash: true
      }), /* Core Modules */
      _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], /* Amexio Modules */
      amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioDataModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioChartsModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioEnterpriseModule"], /* PrimeNG Modules */
      primeng_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionModule"], primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"], primeng_tree__WEBPACK_IMPORTED_MODULE_8__["TreeModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"], primeng_contextmenu__WEBPACK_IMPORTED_MODULE_11__["ContextMenuModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_12__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_13__["CodeHighlighterModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_14__["BreadcrumbModule"], primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_15__["DialogModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_16__["InputTextareaModule"], /* Other Third-Party Modules */
      angular_progress_bar__WEBPACK_IMPORTED_MODULE_17__["ProgressBarModule"]],
      providers: [_service_services_view_service__WEBPACK_IMPORTED_MODULE_20__["ViewService"]],
      exports: [_components_view_view_component__WEBPACK_IMPORTED_MODULE_18__["ViewComponent"], _components_views_views_component__WEBPACK_IMPORTED_MODULE_19__["ViewsComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]] // ✅ Keep this for custom elements
    })], ViewModule);

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
      return 'http://localhost:5000'; // Your first URL
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
    module.exports = __webpack_require__(/*! C:\Users\lakshaman.rokade\source\repos\MSSQL\src\WebClient\mssql.client\src\main.ts */"./src/main.ts");

    /***/
  })
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map