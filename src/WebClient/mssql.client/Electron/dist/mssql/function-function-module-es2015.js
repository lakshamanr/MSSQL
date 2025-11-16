(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["function-function-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/aggregate-function/aggregate-function.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/aggregate-function/aggregate-function.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<amexio-accordion [multi-open]=\"true\">\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Aggregate Functions \" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n\r\n    <div class=\"table\">\r\n      <div class=\"cell\">\r\n        <h5>\r\n          <img src=\"./assets/icons/Function_Scalar.png\" style=\"width: 30px !important;\">\r\n          {{selectedFunction}}\r\n        </h5>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"MS Description \" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <div class=\"table\" *ngIf=\"!iblnShowEditBox\">\r\n      <div class=\"cell\">\r\n        <p>\r\n          {{functionMetadata?.extendedPropertyInfo?.description}}\r\n        </p>\r\n      </div>\r\n      <a (click)=\"ShowModelPOP($event)\" class=\"btn btn-default btn-lg a-btn-slide-text\">\r\n        <span class=\"fa fa-edit\"></span>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"form-group\" *ngIf=\"iblnShowEditBox\">\r\n      <textarea class=\"form-control\" rows=\"5\" id=\"comment\" [(ngModel)]=\"ms_description\"> </textarea>\r\n      <div class=\"form-group\" style=\"margin-left: 94%;\">\r\n\r\n        <a (click)=\"CancelTableMsDesciption($event)\"><i class=\"fa fa-2x fa-times\"></i></a>&nbsp;\r\n        <a (click)=\"SaveTableMsDesciption($event)\"><i class=\"fa fa-2x fa-save\"></i></a>\r\n      </div>\r\n    </div>\r\n\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Function Properties\" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Uses ansi Nulls</div>\r\n        <div class=\"cell\">Uses quoted identifier</div>\r\n        <div class=\"cell\">Create date</div>\r\n        <div class=\"cell\">Modify date</div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"cell\">{{ functionMetadata?.properties.uses_ansi_nulls}} </div>\r\n        <div class=\"cell\">{{ functionMetadata?.properties.uses_quoted_identifier}}</div>\r\n        <div class=\"cell\">{{ functionMetadata?.properties.create_date}} </div>\r\n        <div class=\"cell\">{{ functionMetadata?.properties.modify_date}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Parameters\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Parameter Name</div>\r\n        <div class=\"cell\">Type</div>\r\n        <div class=\"cell\">Length</div>\r\n        <div class=\"cell\">Precision</div>\r\n        <div class=\"cell\">Scale</div>\r\n        <div class=\"cell\">Param Order</div>\r\n        <div class=\"cell\">Collation</div>\r\n        <div class=\"cell\">ExtendedProperty</div>\r\n      </div>\r\n\r\n      <div *ngFor=\"let Property of functionMetadata?.parameters \" class=\"row\">\r\n        <div class=\"cell\">{{Property.parameterName}} </div>\r\n        <div class=\"cell\">{{Property.type}}</div>\r\n        <div class=\"cell\">{{Property.length}} </div>\r\n        <div class=\"cell\">{{Property.Precision}}</div>\r\n        <div class=\"cell\">{{Property.scale}} </div>\r\n        <div class=\"cell\">{{Property.paramOrder}}</div>\r\n        <div class=\"cell\">{{Property.collation}} </div>\r\n        <div class=\"cell\">{{Property.extendedProperty}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Function Create Script \" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <div>\r\n        <app-code-viewer [code]=\"functionMetadata?.definition\" [language]=\"'sql'\"></app-code-viewer> \r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Used By \" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"table\">\r\n        <div class=\"row header\">\r\n          <div class=\"cell\">Name</div>\r\n          <div class=\"cell\">Type</div>\r\n          <div class=\"cell\">Updated</div>\r\n          <div class=\"cell\">Selected</div>\r\n          <div class=\"cell\">Column Name</div>\r\n        </div>\r\n        <div *ngFor=\"let Property of functionMetadata?.dependencies \" class=\"row\">\r\n          <div class=\"cell\">   <a class=\"cell\" [routerLink]=\"['/tblName',Property.NevigationLink]\"> {{Property.name}}</a> </div>\r\n          <div class=\"cell\">{{Property.type}}</div>\r\n          <div class=\"cell\">{{Property.updated}} </div>\r\n          <div class=\"cell\">{{Property.selected}}</div>\r\n          <div class=\"cell\">{{Property.column_name}} </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </amexio-accordion-tab>\r\n</amexio-accordion>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/aggregate-functions/aggregate-functions.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/aggregate-functions/aggregate-functions.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n \r\n<amexio-accordion [multi-open]=\"true\">\r\n    <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"All Aggregate Functions \" [gradient]=\"true\"\r\n                          [active]=\"true\">\r\n      <hr />\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Search\" id=\"listSearch\">\r\n      <hr />\r\n      <div class=\"table\">\r\n        <div class=\"row header\">\r\n          <div class=\"cell\">Aggregate Functions </div>\r\n          <div class=\"cell\">MS Descriptions</div>\r\n        </div>\r\n        <div *ngFor=\"let function of functionDescriptions | keyvalue\" class=\"row\">\r\n          <div class=\"cell\"><a [routerLink]=\"['/AggregateFunction', function.key ]\"> {{ function.key }}</a></div>\r\n          <div class=\"cell\">{{ function.value }}</div>\r\n        </div>\r\n      </div>\r\n    </amexio-accordion-tab>\r\n  \r\n  </amexio-accordion>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/scalar-function/scalar-function.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/scalar-function/scalar-function.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<amexio-accordion [multi-open]=\"true\">\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Scalar Functions \" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n\r\n    <div class=\"table\">\r\n      <div class=\"cell\">\r\n        <h5>\r\n          <img src=\"./assets/icons/Function_Scalar.png\" style=\"width: 30px !important;\">\r\n          {{selectedFunction}}\r\n        </h5>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"MS Description \" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <div class=\"table\" *ngIf=\"!iblnShowEditBox\">\r\n      <div class=\"cell\">\r\n        <p>\r\n          {{functionMetadata?.extendedPropertyInfo?.description}}\r\n        </p>\r\n      </div>\r\n      <a (click)=\"ShowModelPOP($event)\" class=\"btn btn-default btn-lg a-btn-slide-text\">\r\n        <span class=\"fa fa-edit\"></span>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"form-group\" *ngIf=\"iblnShowEditBox\">\r\n      <textarea class=\"form-control\" rows=\"5\" id=\"comment\" [(ngModel)]=\"ms_description\"> </textarea>\r\n      <div class=\"form-group\" style=\"margin-left: 94%;\">\r\n\r\n        <a (click)=\"CancelTableMsDesciption($event)\"><i class=\"fa fa-2x fa-times\"></i></a>&nbsp;\r\n        <a (click)=\"SaveTableMsDesciption($event)\"><i class=\"fa fa-2x fa-save\"></i></a>\r\n      </div>\r\n    </div>\r\n\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Function Properties\" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Uses ansi Nulls</div>\r\n        <div class=\"cell\">Uses quoted identifier</div>\r\n        <div class=\"cell\">Create date</div>\r\n        <div class=\"cell\">Modify date</div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"cell\">{{ functionMetadata?.properties.uses_ansi_nulls}} </div>\r\n        <div class=\"cell\">{{ functionMetadata?.properties.uses_quoted_identifier}}</div>\r\n        <div class=\"cell\">{{ functionMetadata?.properties.create_date}} </div>\r\n        <div class=\"cell\">{{ functionMetadata?.properties.modify_date}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Parameters\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Parameter Name</div>\r\n        <div class=\"cell\">Type</div>\r\n        <div class=\"cell\">Length</div>\r\n        <div class=\"cell\">Precision</div>\r\n        <div class=\"cell\">Scale</div>\r\n        <div class=\"cell\">Param Order</div>\r\n        <div class=\"cell\">Collation</div>\r\n        <div class=\"cell\">ExtendedProperty</div>\r\n      </div>\r\n\r\n      <div *ngFor=\"let Property of functionMetadata?.parameters \" class=\"row\">\r\n        <div class=\"cell\">{{Property.parameterName}} </div>\r\n        <div class=\"cell\">{{Property.type}}</div>\r\n        <div class=\"cell\">{{Property.length}} </div>\r\n        <div class=\"cell\">{{Property.Precision}}</div>\r\n        <div class=\"cell\">{{Property.scale}} </div>\r\n        <div class=\"cell\">{{Property.paramOrder}}</div>\r\n        <div class=\"cell\">{{Property.collation}} </div>\r\n        <div class=\"cell\">{{Property.extendedProperty}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Function Create Script \" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <div>\r\n        <app-code-viewer [code]=\"functionMetadata?.definition\" [language]=\"'sql'\"></app-code-viewer> \r\n\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Used By \" [active]=\"true\"> \r\n    <div class=\"table\">\r\n      <div class=\"table\">\r\n        <div class=\"row header\">\r\n          <div class=\"cell\">Name</div>\r\n          <div class=\"cell\">Type</div>\r\n          <div class=\"cell\">Updated</div>\r\n          <div class=\"cell\">Selected</div>\r\n          <div class=\"cell\">Column Name</div> \r\n        </div> \r\n        <div *ngFor=\"let Property of functionMetadata?.dependencies \" class=\"row\">\r\n          <div class=\"cell\">   <a class=\"cell\" [routerLink]=\"['/tblName',Property.NevigationLink]\"> {{Property.name}}</a> </div>\r\n          <div class=\"cell\">{{Property.type}}</div>\r\n          <div class=\"cell\">{{Property.updated}} </div>\r\n          <div class=\"cell\">{{Property.selected}}</div>\r\n          <div class=\"cell\">{{Property.column_name}} </div> \r\n        </div>\r\n      </div>\r\n    </div> \r\n\r\n  </amexio-accordion-tab>\r\n</amexio-accordion>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/scalar-functions/scalar-functions.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/scalar-functions/scalar-functions.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<amexio-accordion [multi-open]=\"true\">\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"All Scalar Functions \" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <hr />\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search\" id=\"listSearch\">\r\n    <hr />\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Scalar Functions </div>\r\n        <div class=\"cell\">MS Descriptions</div>\r\n      </div>\r\n      <div *ngFor=\"let scalarfunction of functionDescriptions | keyvalue\" class=\"row\">\r\n\r\n        <div class=\"cell\"><a [routerLink]=\"['/ScalarFunction', scalarfunction.key ]\"> {{ scalarfunction.key }}</a></div>\r\n        <div class=\"cell\">{{ scalarfunction.value }}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n</amexio-accordion>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/table-value-function/table-value-function.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/table-value-function/table-value-function.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<amexio-accordion [multi-open]=\"true\">\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Table Value Functions \" [gradient]=\"true\"\r\n                        [active]=\"true\"> \r\n    <div class=\"table\">\r\n      <div class=\"cell\">\r\n        <h5>\r\n          <img src=\"./assets/icons/Function_Table.png\" style=\"width: 30px !important;\">\r\n          {{selectedFunction}}\r\n        </h5>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"MS Description \" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <div class=\"table\" *ngIf=\"!iblnShowEditBox\">\r\n      <div class=\"cell\">\r\n        <p>\r\n          {{functionMetadata?.extendedPropertyInfo?.description}}\r\n        </p>\r\n      </div>\r\n      <a (click)=\"ShowModelPOP($event)\" class=\"btn btn-default btn-lg a-btn-slide-text\">\r\n        <span class=\"fa fa-edit\"></span>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"form-group\" *ngIf=\"iblnShowEditBox\">\r\n      <textarea class=\"form-control\" rows=\"5\" id=\"comment\" [(ngModel)]=\"ms_description\"> </textarea>\r\n      <div class=\"form-group\" style=\"margin-left: 94%;\">\r\n\r\n        <a (click)=\"CancelTableMsDesciption($event)\"><i class=\"fa fa-2x fa-times\"></i></a>&nbsp;\r\n        <a (click)=\"SaveTableMsDesciption($event)\"><i class=\"fa fa-2x fa-save\"></i></a>\r\n      </div>\r\n    </div>\r\n\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Function Properties\" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Uses ansi Nulls</div>\r\n        <div class=\"cell\">Uses quoted identifier</div>\r\n        <div class=\"cell\">Create date</div>\r\n        <div class=\"cell\">Modify date</div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"cell\">{{ functionMetadata?.properties.uses_ansi_nulls}} </div>\r\n        <div class=\"cell\">{{ functionMetadata?.properties.uses_quoted_identifier}}</div>\r\n        <div class=\"cell\">{{ functionMetadata?.properties.create_date}} </div>\r\n        <div class=\"cell\">{{ functionMetadata?.properties.modify_date}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Parameters\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Parameter Name</div>\r\n        <div class=\"cell\">Type</div>\r\n        <div class=\"cell\">Length</div>\r\n        <div class=\"cell\">Precision</div>\r\n        <div class=\"cell\">Scale</div>\r\n        <div class=\"cell\">Param Order</div>\r\n        <div class=\"cell\">Collation</div>\r\n        <div class=\"cell\">ExtendedProperty</div>\r\n      </div>\r\n\r\n      <div *ngFor=\"let Property of functionMetadata?.parameters \" class=\"row\">\r\n        <div class=\"cell\">{{Property.parameterName}} </div>\r\n        <div class=\"cell\">{{Property.type}}</div>\r\n        <div class=\"cell\">{{Property.length}} </div>\r\n        <div class=\"cell\">{{Property.Precision}}</div>\r\n        <div class=\"cell\">{{Property.scale}} </div>\r\n        <div class=\"cell\">{{Property.paramOrder}}</div>\r\n        <div class=\"cell\">{{Property.collation}} </div>\r\n        <div class=\"cell\">{{Property.extendedProperty}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Function Create Script \" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <div>\r\n        <app-code-viewer [code]=\"functionMetadata?.definition\" [language]=\"'sql'\"></app-code-viewer>  \r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Used By \" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"table\">\r\n        <div class=\"row header\">\r\n          <div class=\"cell\">Name</div>\r\n          <div class=\"cell\">Type</div>\r\n          <div class=\"cell\">Updated</div>\r\n          <div class=\"cell\">Selected</div>\r\n          <div class=\"cell\">Column Name</div>\r\n        </div>\r\n        <div *ngFor=\"let Property of functionMetadata?.dependencies \" class=\"row\">\r\n          <div class=\"cell\">   <a class=\"cell\" [routerLink]=\"['/tblName',Property.NevigationLink]\"> {{Property.name}}</a> </div>\r\n          <div class=\"cell\">{{Property.type}}</div>\r\n          <div class=\"cell\">{{Property.updated}} </div>\r\n          <div class=\"cell\">{{Property.selected}}</div>\r\n          <div class=\"cell\">{{Property.column_name}} </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </amexio-accordion-tab>\r\n</amexio-accordion>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/table-value-functions/table-value-functions.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/table-value-functions/table-value-functions.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<amexio-accordion [multi-open]=\"true\">\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"All Table Functions \" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <hr />\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search\" id=\"listSearch\">\r\n    <hr />\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Table Functions </div>\r\n        <div class=\"cell\">MS Descriptions</div>\r\n      </div>\r\n      <div *ngFor=\"let tablevaluefunctions of functionDescriptions | keyvalue\" class=\"row\">\r\n        <div class=\"cell\"><a [routerLink]=\"['/TableValueFunction', tablevaluefunctions.key ]\"> {{ tablevaluefunctions.key }}</a></div>\r\n        <div class=\"cell\">{{ tablevaluefunctions.value }}</div>\r\n      </div> \r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n</amexio-accordion>\r\n");

/***/ }),

/***/ "./src/app/function/component/aggregate-function/aggregate-function.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/function/component/aggregate-function/aggregate-function.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table {\r\n    margin: 0px 0 3px 0;\r\n    width: 100%;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n    display: table;\r\n  }\r\n  \r\n  @media screen and (max-width: 580px) {\r\n    .table {\r\n      display: block;\r\n    }\r\n  }\r\n  \r\n  .row {\r\n    display: table-row;\r\n    background: #f6f6f6;\r\n  }\r\n  \r\n  .row:nth-of-type(odd) {\r\n      background: #e9e9e9;\r\n    }\r\n  \r\n  .row.header {\r\n      font-weight: 900;\r\n      color: #ffffff;\r\n      background: #184569 !important;\r\n    }\r\n  \r\n  .row.green {\r\n      background: #27ae60;\r\n    }\r\n  \r\n  .row.blue {\r\n      background: #2980b9;\r\n    }\r\n  \r\n  @media screen and (max-width: 580px) {\r\n    .row {\r\n      padding: 14px 0 7px;\r\n      display: block;\r\n    }\r\n  \r\n      .row.header {\r\n        padding: 0;\r\n        height: 6px;\r\n      }\r\n  \r\n        .row.header .cell {\r\n          display: none;\r\n        }\r\n  \r\n      .row .cell {\r\n        margin-bottom: 10px;\r\n      }\r\n  \r\n        .row .cell:before {\r\n          margin-bottom: 3px;\r\n          content: attr(data-title);\r\n          min-width: 98px;\r\n          font-size: 10px;\r\n          line-height: 10px;\r\n          font-weight: bold;\r\n          text-transform: uppercase;\r\n          color: #969696;\r\n          display: block;\r\n        }\r\n  }\r\n  \r\n  .cell {\r\n    /*  padding: 6px 12px; */\r\n    display: table-cell;\r\n  }\r\n  \r\n  @media screen and (max-width: 580px) {\r\n    .cell {\r\n      padding: 2px 16px;\r\n      display: block;\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVuY3Rpb24vY29tcG9uZW50L2FnZ3JlZ2F0ZS1mdW5jdGlvbi9hZ2dyZWdhdGUtZnVuY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsd0NBQXdDO0lBQ3hDLGNBQWM7RUFDaEI7O0VBRUE7SUFDRTtNQUNFLGNBQWM7SUFDaEI7RUFDRjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7O0VBRUU7TUFDRSxtQkFBbUI7SUFDckI7O0VBRUE7TUFDRSxnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLDhCQUE4QjtJQUNoQzs7RUFFQTtNQUNFLG1CQUFtQjtJQUNyQjs7RUFFQTtNQUNFLG1CQUFtQjtJQUNyQjs7RUFFRjtJQUNFO01BQ0UsbUJBQW1CO01BQ25CLGNBQWM7SUFDaEI7O01BRUU7UUFDRSxVQUFVO1FBQ1YsV0FBVztNQUNiOztRQUVFO1VBQ0UsYUFBYTtRQUNmOztNQUVGO1FBQ0UsbUJBQW1CO01BQ3JCOztRQUVFO1VBQ0Usa0JBQWtCO1VBQ2xCLHlCQUF5QjtVQUN6QixlQUFlO1VBQ2YsZUFBZTtVQUNmLGlCQUFpQjtVQUNqQixpQkFBaUI7VUFDakIseUJBQXlCO1VBQ3pCLGNBQWM7VUFDZCxjQUFjO1FBQ2hCO0VBQ047O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0U7TUFDRSxpQkFBaUI7TUFDakIsY0FBYztJQUNoQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvZnVuY3Rpb24vY29tcG9uZW50L2FnZ3JlZ2F0ZS1mdW5jdGlvbi9hZ2dyZWdhdGUtZnVuY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB7XHJcbiAgICBtYXJnaW46IDBweCAwIDNweCAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgICAudGFibGUge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG4gIH1cclxuICBcclxuICAgIC5yb3c6bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlOWU5ZTk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucm93LmhlYWRlciB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMTg0NTY5ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucm93LmdyZWVuIHtcclxuICAgICAgYmFja2dyb3VuZDogIzI3YWU2MDtcclxuICAgIH1cclxuICBcclxuICAgIC5yb3cuYmx1ZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMyOTgwYjk7XHJcbiAgICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAgIC5yb3cge1xyXG4gICAgICBwYWRkaW5nOiAxNHB4IDAgN3B4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICBcclxuICAgICAgLnJvdy5oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiA2cHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgICAucm93LmhlYWRlciAuY2VsbCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgLnJvdyAuY2VsbCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5yb3cgLmNlbGw6YmVmb3JlIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDk4cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgIGNvbG9yOiAjOTY5Njk2O1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gIH1cclxuICBcclxuICAuY2VsbCB7XHJcbiAgICAvKiAgcGFkZGluZzogNnB4IDEycHg7ICovXHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gICAgLmNlbGwge1xyXG4gICAgICBwYWRkaW5nOiAycHggMTZweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/function/component/aggregate-function/aggregate-function.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/function/component/aggregate-function/aggregate-function.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AggregateFunctionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AggregateFunctionComponent", function() { return AggregateFunctionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_aggregate_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/aggregate-function.service */ "./src/app/function/services/aggregate-function.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/services/auth.service */ "./src/app/auth/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let AggregateFunctionComponent = class AggregateFunctionComponent {
    constructor(route, aggregateFunctionService, authService) {
        this.route = route;
        this.aggregateFunctionService = aggregateFunctionService;
        this.authService = authService;
    }
    ngOnInit() {
        this.selectedFunction = this.route.snapshot.params.objectname;
        // Wait for authentication before loading data
        this.authService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(isAuth => isAuth === true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(() => {
            this.fetchFunctionMetadata();
        });
    }
    fetchFunctionMetadata() {
        if (this.selectedFunction) {
            this.aggregateFunctionService.getFunctionMetadata(this.selectedFunction).subscribe((data) => {
                this.functionMetadata = data;
            });
        }
    }
    upsertFunctionDescription() {
        const schemaName = 'dbo';
        const description = 'Updated function description';
        this.aggregateFunctionService.upsertFunctionDescription(schemaName, this.selectedFunction, description).subscribe(() => {
            alert('Description updated successfully!');
        });
    }
};
AggregateFunctionComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_aggregate_function_service__WEBPACK_IMPORTED_MODULE_2__["AggregateFunctionService"] },
    { type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
AggregateFunctionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aggregate-function',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./aggregate-function.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/aggregate-function/aggregate-function.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./aggregate-function.component.css */ "./src/app/function/component/aggregate-function/aggregate-function.component.css")).default]
    })
], AggregateFunctionComponent);



/***/ }),

/***/ "./src/app/function/component/aggregate-functions/aggregate-functions.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/function/component/aggregate-functions/aggregate-functions.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table {\r\n    margin: 0px 0 3px 0;\r\n    width: 100%;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n    display: table;\r\n  }\r\n  \r\n  @media screen and (max-width: 580px) {\r\n    .table {\r\n      display: block;\r\n    }\r\n  }\r\n  \r\n  .row {\r\n    display: table-row;\r\n    background: #f6f6f6;\r\n  }\r\n  \r\n  .row:nth-of-type(odd) {\r\n      background: #e9e9e9;\r\n    }\r\n  \r\n  .row.header {\r\n      font-weight: 900;\r\n      color: #ffffff;\r\n      background: #184569 !important;\r\n    }\r\n  \r\n  .row.green {\r\n      background: #27ae60;\r\n    }\r\n  \r\n  .row.blue {\r\n      background: #2980b9;\r\n    }\r\n  \r\n  @media screen and (max-width: 580px) {\r\n    .row {\r\n      padding: 14px 0 7px;\r\n      display: block;\r\n    }\r\n  \r\n      .row.header {\r\n        padding: 0;\r\n        height: 6px;\r\n      }\r\n  \r\n        .row.header .cell {\r\n          display: none;\r\n        }\r\n  \r\n      .row .cell {\r\n        margin-bottom: 10px;\r\n      }\r\n  \r\n        .row .cell:before {\r\n          margin-bottom: 3px;\r\n          content: attr(data-title);\r\n          min-width: 98px;\r\n          font-size: 10px;\r\n          line-height: 10px;\r\n          font-weight: bold;\r\n          text-transform: uppercase;\r\n          color: #969696;\r\n          display: block;\r\n        }\r\n  }\r\n  \r\n  .cell {\r\n    /*  padding: 6px 12px; */\r\n    display: table-cell;\r\n  }\r\n  \r\n  @media screen and (max-width: 580px) {\r\n    .cell {\r\n      padding: 2px 16px;\r\n      display: block;\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVuY3Rpb24vY29tcG9uZW50L2FnZ3JlZ2F0ZS1mdW5jdGlvbnMvYWdncmVnYXRlLWZ1bmN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx3Q0FBd0M7SUFDeEMsY0FBYztFQUNoQjs7RUFFQTtJQUNFO01BQ0UsY0FBYztJQUNoQjtFQUNGOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjs7RUFFRTtNQUNFLG1CQUFtQjtJQUNyQjs7RUFFQTtNQUNFLGdCQUFnQjtNQUNoQixjQUFjO01BQ2QsOEJBQThCO0lBQ2hDOztFQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOztFQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOztFQUVGO0lBQ0U7TUFDRSxtQkFBbUI7TUFDbkIsY0FBYztJQUNoQjs7TUFFRTtRQUNFLFVBQVU7UUFDVixXQUFXO01BQ2I7O1FBRUU7VUFDRSxhQUFhO1FBQ2Y7O01BRUY7UUFDRSxtQkFBbUI7TUFDckI7O1FBRUU7VUFDRSxrQkFBa0I7VUFDbEIseUJBQXlCO1VBQ3pCLGVBQWU7VUFDZixlQUFlO1VBQ2YsaUJBQWlCO1VBQ2pCLGlCQUFpQjtVQUNqQix5QkFBeUI7VUFDekIsY0FBYztVQUNkLGNBQWM7UUFDaEI7RUFDTjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRTtNQUNFLGlCQUFpQjtNQUNqQixjQUFjO0lBQ2hCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9mdW5jdGlvbi9jb21wb25lbnQvYWdncmVnYXRlLWZ1bmN0aW9ucy9hZ2dyZWdhdGUtZnVuY3Rpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xyXG4gICAgbWFyZ2luOiAwcHggMCAzcHggMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gICAgLnRhYmxlIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheTogdGFibGUtcm93O1xyXG4gICAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxuICB9XHJcbiAgXHJcbiAgICAucm93Om50aC1vZi10eXBlKG9kZCkge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnJvdy5oZWFkZXIge1xyXG4gICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgYmFja2dyb3VuZDogIzE4NDU2OSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnJvdy5ncmVlbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMyN2FlNjA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucm93LmJsdWUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMjk4MGI5O1xyXG4gICAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgICAucm93IHtcclxuICAgICAgcGFkZGluZzogMTRweCAwIDdweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAgIC5yb3cuaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGhlaWdodDogNnB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnJvdy5oZWFkZXIgLmNlbGwge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgIC5yb3cgLmNlbGwge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgICAucm93IC5jZWxsOmJlZm9yZSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xyXG4gICAgICAgICAgbWluLXdpZHRoOiA5OHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICBjb2xvcjogIzk2OTY5NjtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmNlbGwge1xyXG4gICAgLyogIHBhZGRpbmc6IDZweCAxMnB4OyAqL1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAgIC5jZWxsIHtcclxuICAgICAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/function/component/aggregate-functions/aggregate-functions.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/function/component/aggregate-functions/aggregate-functions.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AggregateFunctionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AggregateFunctionsComponent", function() { return AggregateFunctionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_aggregate_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/aggregate-function.service */ "./src/app/function/services/aggregate-function.service.ts");



let AggregateFunctionsComponent = class AggregateFunctionsComponent {
    constructor(aggregateFunctionService) {
        this.aggregateFunctionService = aggregateFunctionService;
        this.functionDescriptions = {};
    }
    ngOnInit() {
        this.loadFunctionDescriptions();
    }
    loadFunctionDescriptions() {
        this.aggregateFunctionService.getAggregateFunctionDescriptions().subscribe((data) => {
            this.functionDescriptions = data;
        });
    }
    // TrackBy function for better performance (for keyvalue pipe)
    trackByKey(index, item) {
        return item.key;
    }
};
AggregateFunctionsComponent.ctorParameters = () => [
    { type: _services_aggregate_function_service__WEBPACK_IMPORTED_MODULE_2__["AggregateFunctionService"] }
];
AggregateFunctionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aggregate-functions',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./aggregate-functions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/aggregate-functions/aggregate-functions.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./aggregate-functions.component.css */ "./src/app/function/component/aggregate-functions/aggregate-functions.component.css")).default]
    })
], AggregateFunctionsComponent);



/***/ }),

/***/ "./src/app/function/component/scalar-function/scalar-function.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/function/component/scalar-function/scalar-function.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table {\r\n  margin: 0px 0 3px 0;\r\n  width: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: table;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .table {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.row {\r\n  display: table-row;\r\n  background: #f6f6f6;\r\n}\r\n\r\n.row:nth-of-type(odd) {\r\n    background: #e9e9e9;\r\n  }\r\n\r\n.row.header {\r\n    font-weight: 900;\r\n    color: #ffffff;\r\n    background: #184569 !important;\r\n  }\r\n\r\n.row.green {\r\n    background: #27ae60;\r\n  }\r\n\r\n.row.blue {\r\n    background: #2980b9;\r\n  }\r\n\r\n@media screen and (max-width: 580px) {\r\n  .row {\r\n    padding: 14px 0 7px;\r\n    display: block;\r\n  }\r\n\r\n    .row.header {\r\n      padding: 0;\r\n      height: 6px;\r\n    }\r\n\r\n      .row.header .cell {\r\n        display: none;\r\n      }\r\n\r\n    .row .cell {\r\n      margin-bottom: 10px;\r\n    }\r\n\r\n      .row .cell:before {\r\n        margin-bottom: 3px;\r\n        content: attr(data-title);\r\n        min-width: 98px;\r\n        font-size: 10px;\r\n        line-height: 10px;\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n        color: #969696;\r\n        display: block;\r\n      }\r\n}\r\n\r\n.cell {\r\n  /*  padding: 6px 12px; */\r\n  display: table-cell;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .cell {\r\n    padding: 2px 16px;\r\n    display: block;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVuY3Rpb24vY29tcG9uZW50L3NjYWxhci1mdW5jdGlvbi9zY2FsYXItZnVuY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsd0NBQXdDO0VBQ3hDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUU7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLDhCQUE4QjtFQUNoQzs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFRjtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLGNBQWM7RUFDaEI7O0lBRUU7TUFDRSxVQUFVO01BQ1YsV0FBVztJQUNiOztNQUVFO1FBQ0UsYUFBYTtNQUNmOztJQUVGO01BQ0UsbUJBQW1CO0lBQ3JCOztNQUVFO1FBQ0Usa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QixlQUFlO1FBQ2YsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIseUJBQXlCO1FBQ3pCLGNBQWM7UUFDZCxjQUFjO01BQ2hCO0FBQ047O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZnVuY3Rpb24vY29tcG9uZW50L3NjYWxhci1mdW5jdGlvbi9zY2FsYXItZnVuY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB7XHJcbiAgbWFyZ2luOiAwcHggMCAzcHggMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gIC50YWJsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG59XHJcblxyXG4gIC5yb3c6bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xyXG4gIH1cclxuXHJcbiAgLnJvdy5oZWFkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzE4NDU2OSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnJvdy5ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjdhZTYwO1xyXG4gIH1cclxuXHJcbiAgLnJvdy5ibHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICMyOTgwYjk7XHJcbiAgfVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAucm93IHtcclxuICAgIHBhZGRpbmc6IDE0cHggMCA3cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICAgLnJvdy5oZWFkZXIge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBoZWlnaHQ6IDZweDtcclxuICAgIH1cclxuXHJcbiAgICAgIC5yb3cuaGVhZGVyIC5jZWxsIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgLnJvdyAuY2VsbCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgICAucm93IC5jZWxsOmJlZm9yZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XHJcbiAgICAgICAgbWluLXdpZHRoOiA5OHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiAjOTY5Njk2O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbn1cclxuXHJcbi5jZWxsIHtcclxuICAvKiAgcGFkZGluZzogNnB4IDEycHg7ICovXHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAuY2VsbCB7XHJcbiAgICBwYWRkaW5nOiAycHggMTZweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/function/component/scalar-function/scalar-function.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/function/component/scalar-function/scalar-function.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ScalarFunctionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScalarFunctionComponent", function() { return ScalarFunctionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_scalar_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/scalar-function.service */ "./src/app/function/services/scalar-function.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/services/auth.service */ "./src/app/auth/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let ScalarFunctionComponent = class ScalarFunctionComponent {
    constructor(route, scalarFunctionService, authService) {
        this.route = route;
        this.scalarFunctionService = scalarFunctionService;
        this.authService = authService;
    }
    ngOnInit() {
        this.selectedFunction = this.route.snapshot.params.objectname;
        // Wait for authentication before loading data
        this.authService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(isAuth => isAuth === true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(() => {
            this.fetchFunctionMetadata();
        });
    }
    fetchFunctionMetadata() {
        if (this.selectedFunction) {
            this.scalarFunctionService.getFunctionMetadata(this.selectedFunction).subscribe((data) => {
                this.functionMetadata = data;
            });
        }
    }
    upsertFunctionDescription() {
        const schemaName = 'dbo';
        const description = 'Updated function description';
        this.scalarFunctionService.upsertFunctionDescription(schemaName, this.selectedFunction, description).subscribe(() => {
            alert('Description updated successfully!');
        });
    }
};
ScalarFunctionComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_scalar_function_service__WEBPACK_IMPORTED_MODULE_2__["ScalarFunctionService"] },
    { type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
ScalarFunctionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scalar-function',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./scalar-function.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/scalar-function/scalar-function.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./scalar-function.component.css */ "./src/app/function/component/scalar-function/scalar-function.component.css")).default]
    })
], ScalarFunctionComponent);



/***/ }),

/***/ "./src/app/function/component/scalar-functions/scalar-functions.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/function/component/scalar-functions/scalar-functions.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table {\r\n  margin: 0px 0 3px 0;\r\n  width: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: table;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .table {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.row {\r\n  display: table-row;\r\n  background: #f6f6f6;\r\n}\r\n\r\n.row:nth-of-type(odd) {\r\n    background: #e9e9e9;\r\n  }\r\n\r\n.row.header {\r\n    font-weight: 900;\r\n    color: #ffffff;\r\n    background: #184569 !important;\r\n  }\r\n\r\n.row.green {\r\n    background: #27ae60;\r\n  }\r\n\r\n.row.blue {\r\n    background: #2980b9;\r\n  }\r\n\r\n@media screen and (max-width: 580px) {\r\n  .row {\r\n    padding: 14px 0 7px;\r\n    display: block;\r\n  }\r\n\r\n    .row.header {\r\n      padding: 0;\r\n      height: 6px;\r\n    }\r\n\r\n      .row.header .cell {\r\n        display: none;\r\n      }\r\n\r\n    .row .cell {\r\n      margin-bottom: 10px;\r\n    }\r\n\r\n      .row .cell:before {\r\n        margin-bottom: 3px;\r\n        content: attr(data-title);\r\n        min-width: 98px;\r\n        font-size: 10px;\r\n        line-height: 10px;\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n        color: #969696;\r\n        display: block;\r\n      }\r\n}\r\n\r\n.cell {\r\n  /*  padding: 6px 12px; */\r\n  display: table-cell;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .cell {\r\n    padding: 2px 16px;\r\n    display: block;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVuY3Rpb24vY29tcG9uZW50L3NjYWxhci1mdW5jdGlvbnMvc2NhbGFyLWZ1bmN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx3Q0FBd0M7RUFDeEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFRTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsOEJBQThCO0VBQ2hDOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVGO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsY0FBYztFQUNoQjs7SUFFRTtNQUNFLFVBQVU7TUFDVixXQUFXO0lBQ2I7O01BRUU7UUFDRSxhQUFhO01BQ2Y7O0lBRUY7TUFDRSxtQkFBbUI7SUFDckI7O01BRUU7UUFDRSxrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQix5QkFBeUI7UUFDekIsY0FBYztRQUNkLGNBQWM7TUFDaEI7QUFDTjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mdW5jdGlvbi9jb21wb25lbnQvc2NhbGFyLWZ1bmN0aW9ucy9zY2FsYXItZnVuY3Rpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xyXG4gIG1hcmdpbjogMHB4IDAgM3B4IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAudGFibGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxufVxyXG5cclxuICAucm93Om50aC1vZi10eXBlKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZDogI2U5ZTllOTtcclxuICB9XHJcblxyXG4gIC5yb3cuaGVhZGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQ6ICMxODQ1NjkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5yb3cuZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZDogIzI3YWU2MDtcclxuICB9XHJcblxyXG4gIC5yb3cuYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjk4MGI5O1xyXG4gIH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgLnJvdyB7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDAgN3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAgIC5yb3cuaGVhZGVyIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgaGVpZ2h0OiA2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgICAucm93LmhlYWRlciAuY2VsbCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgIC5yb3cgLmNlbGwge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICAgLnJvdyAuY2VsbDpiZWZvcmUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xyXG4gICAgICAgIG1pbi13aWR0aDogOThweDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBjb2xvcjogIzk2OTY5NjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG59XHJcblxyXG4uY2VsbCB7XHJcbiAgLyogIHBhZGRpbmc6IDZweCAxMnB4OyAqL1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgLmNlbGwge1xyXG4gICAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/function/component/scalar-functions/scalar-functions.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/function/component/scalar-functions/scalar-functions.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ScalarFunctionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScalarFunctionsComponent", function() { return ScalarFunctionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_scalar_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/scalar-function.service */ "./src/app/function/services/scalar-function.service.ts");



let ScalarFunctionsComponent = class ScalarFunctionsComponent {
    constructor(scalarFunctionService) {
        this.scalarFunctionService = scalarFunctionService;
        this.functionDescriptions = {};
    }
    ngOnInit() {
        this.loadFunctionDescriptions();
    }
    loadFunctionDescriptions() {
        this.scalarFunctionService.getScalarFunctionDescriptions().subscribe((data) => {
            this.functionDescriptions = data;
        });
    }
    // TrackBy function for better performance (for keyvalue pipe)
    trackByKey(index, item) {
        return item.key;
    }
};
ScalarFunctionsComponent.ctorParameters = () => [
    { type: _services_scalar_function_service__WEBPACK_IMPORTED_MODULE_2__["ScalarFunctionService"] }
];
ScalarFunctionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scalar-functions',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./scalar-functions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/scalar-functions/scalar-functions.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./scalar-functions.component.css */ "./src/app/function/component/scalar-functions/scalar-functions.component.css")).default]
    })
], ScalarFunctionsComponent);



/***/ }),

/***/ "./src/app/function/component/table-value-function/table-value-function.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/function/component/table-value-function/table-value-function.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table {\r\n    margin: 0px 0 3px 0;\r\n    width: 100%;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n    display: table;\r\n  }\r\n  \r\n  @media screen and (max-width: 580px) {\r\n    .table {\r\n      display: block;\r\n    }\r\n  }\r\n  \r\n  .row {\r\n    display: table-row;\r\n    background: #f6f6f6;\r\n  }\r\n  \r\n  .row:nth-of-type(odd) {\r\n      background: #e9e9e9;\r\n    }\r\n  \r\n  .row.header {\r\n      font-weight: 900;\r\n      color: #ffffff;\r\n      background: #184569 !important;\r\n    }\r\n  \r\n  .row.green {\r\n      background: #27ae60;\r\n    }\r\n  \r\n  .row.blue {\r\n      background: #2980b9;\r\n    }\r\n  \r\n  @media screen and (max-width: 580px) {\r\n    .row {\r\n      padding: 14px 0 7px;\r\n      display: block;\r\n    }\r\n  \r\n      .row.header {\r\n        padding: 0;\r\n        height: 6px;\r\n      }\r\n  \r\n        .row.header .cell {\r\n          display: none;\r\n        }\r\n  \r\n      .row .cell {\r\n        margin-bottom: 10px;\r\n      }\r\n  \r\n        .row .cell:before {\r\n          margin-bottom: 3px;\r\n          content: attr(data-title);\r\n          min-width: 98px;\r\n          font-size: 10px;\r\n          line-height: 10px;\r\n          font-weight: bold;\r\n          text-transform: uppercase;\r\n          color: #969696;\r\n          display: block;\r\n        }\r\n  }\r\n  \r\n  .cell {\r\n    /*  padding: 6px 12px; */\r\n    display: table-cell;\r\n  }\r\n  \r\n  @media screen and (max-width: 580px) {\r\n    .cell {\r\n      padding: 2px 16px;\r\n      display: block;\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVuY3Rpb24vY29tcG9uZW50L3RhYmxlLXZhbHVlLWZ1bmN0aW9uL3RhYmxlLXZhbHVlLWZ1bmN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHdDQUF3QztJQUN4QyxjQUFjO0VBQ2hCOztFQUVBO0lBQ0U7TUFDRSxjQUFjO0lBQ2hCO0VBQ0Y7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVFO01BQ0UsbUJBQW1CO0lBQ3JCOztFQUVBO01BQ0UsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCw4QkFBOEI7SUFDaEM7O0VBRUE7TUFDRSxtQkFBbUI7SUFDckI7O0VBRUE7TUFDRSxtQkFBbUI7SUFDckI7O0VBRUY7SUFDRTtNQUNFLG1CQUFtQjtNQUNuQixjQUFjO0lBQ2hCOztNQUVFO1FBQ0UsVUFBVTtRQUNWLFdBQVc7TUFDYjs7UUFFRTtVQUNFLGFBQWE7UUFDZjs7TUFFRjtRQUNFLG1CQUFtQjtNQUNyQjs7UUFFRTtVQUNFLGtCQUFrQjtVQUNsQix5QkFBeUI7VUFDekIsZUFBZTtVQUNmLGVBQWU7VUFDZixpQkFBaUI7VUFDakIsaUJBQWlCO1VBQ2pCLHlCQUF5QjtVQUN6QixjQUFjO1VBQ2QsY0FBYztRQUNoQjtFQUNOOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFO01BQ0UsaUJBQWlCO01BQ2pCLGNBQWM7SUFDaEI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2Z1bmN0aW9uL2NvbXBvbmVudC90YWJsZS12YWx1ZS1mdW5jdGlvbi90YWJsZS12YWx1ZS1mdW5jdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHtcclxuICAgIG1hcmdpbjogMHB4IDAgM3B4IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAgIC50YWJsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuICAgIGJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbiAgfVxyXG4gIFxyXG4gICAgLnJvdzpudGgtb2YtdHlwZShvZGQpIHtcclxuICAgICAgYmFja2dyb3VuZDogI2U5ZTllOTtcclxuICAgIH1cclxuICBcclxuICAgIC5yb3cuaGVhZGVyIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMxODQ1NjkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICBcclxuICAgIC5yb3cuZ3JlZW4ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMjdhZTYwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnJvdy5ibHVlIHtcclxuICAgICAgYmFja2dyb3VuZDogIzI5ODBiOTtcclxuICAgIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gICAgLnJvdyB7XHJcbiAgICAgIHBhZGRpbmc6IDE0cHggMCA3cHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgICAucm93LmhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBoZWlnaHQ6IDZweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5yb3cuaGVhZGVyIC5jZWxsIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAucm93IC5jZWxsIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnJvdyAuY2VsbDpiZWZvcmUge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcclxuICAgICAgICAgIG1pbi13aWR0aDogOThweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgY29sb3I6ICM5Njk2OTY7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jZWxsIHtcclxuICAgIC8qICBwYWRkaW5nOiA2cHggMTJweDsgKi9cclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgICAuY2VsbCB7XHJcbiAgICAgIHBhZGRpbmc6IDJweCAxNnB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */");

/***/ }),

/***/ "./src/app/function/component/table-value-function/table-value-function.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/function/component/table-value-function/table-value-function.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: TableValueFunctionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableValueFunctionComponent", function() { return TableValueFunctionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_table_value_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/table-value-function.service */ "./src/app/function/services/table-value-function.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/services/auth.service */ "./src/app/auth/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let TableValueFunctionComponent = class TableValueFunctionComponent {
    constructor(route, tableValueFunctionService, authService) {
        this.route = route;
        this.tableValueFunctionService = tableValueFunctionService;
        this.authService = authService;
    }
    ngOnInit() {
        this.selectedFunction = this.route.snapshot.params.objectname;
        // Wait for authentication before loading data
        this.authService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(isAuth => isAuth === true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(() => {
            this.fetchFunctionMetadata();
        });
    }
    fetchFunctionMetadata() {
        try {
            if (this.selectedFunction) {
                this.tableValueFunctionService.getFunctionMetadata(this.selectedFunction).subscribe((data) => {
                    this.functionMetadata = data;
                });
            }
        }
        catch (e) {
            alert(e);
        }
    }
    upsertFunctionDescription() {
        const schemaName = 'dbo';
        const description = 'Updated function description';
        this.tableValueFunctionService.upsertFunctionDescription(schemaName, this.selectedFunction, description).subscribe(() => {
            alert('Description updated successfully!');
        });
    }
};
TableValueFunctionComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_table_value_function_service__WEBPACK_IMPORTED_MODULE_2__["TableValueFunctionService"] },
    { type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
TableValueFunctionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table-value-function',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table-value-function.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/table-value-function/table-value-function.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table-value-function.component.css */ "./src/app/function/component/table-value-function/table-value-function.component.css")).default]
    })
], TableValueFunctionComponent);



/***/ }),

/***/ "./src/app/function/component/table-value-functions/table-value-functions.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/function/component/table-value-functions/table-value-functions.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table {\r\n  margin: 0px 0 3px 0;\r\n  width: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: table;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .table {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.row {\r\n  display: table-row;\r\n  background: #f6f6f6;\r\n}\r\n\r\n.row:nth-of-type(odd) {\r\n    background: #e9e9e9;\r\n  }\r\n\r\n.row.header {\r\n    font-weight: 900;\r\n    color: #ffffff;\r\n    background: #184569 !important;\r\n  }\r\n\r\n.row.green {\r\n    background: #27ae60;\r\n  }\r\n\r\n.row.blue {\r\n    background: #2980b9;\r\n  }\r\n\r\n@media screen and (max-width: 580px) {\r\n  .row {\r\n    padding: 14px 0 7px;\r\n    display: block;\r\n  }\r\n\r\n    .row.header {\r\n      padding: 0;\r\n      height: 6px;\r\n    }\r\n\r\n      .row.header .cell {\r\n        display: none;\r\n      }\r\n\r\n    .row .cell {\r\n      margin-bottom: 10px;\r\n    }\r\n\r\n      .row .cell:before {\r\n        margin-bottom: 3px;\r\n        content: attr(data-title);\r\n        min-width: 98px;\r\n        font-size: 10px;\r\n        line-height: 10px;\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n        color: #969696;\r\n        display: block;\r\n      }\r\n}\r\n\r\n.cell {\r\n  /*  padding: 6px 12px; */\r\n  display: table-cell;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .cell {\r\n    padding: 2px 16px;\r\n    display: block;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVuY3Rpb24vY29tcG9uZW50L3RhYmxlLXZhbHVlLWZ1bmN0aW9ucy90YWJsZS12YWx1ZS1mdW5jdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsd0NBQXdDO0VBQ3hDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUU7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLDhCQUE4QjtFQUNoQzs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFRjtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLGNBQWM7RUFDaEI7O0lBRUU7TUFDRSxVQUFVO01BQ1YsV0FBVztJQUNiOztNQUVFO1FBQ0UsYUFBYTtNQUNmOztJQUVGO01BQ0UsbUJBQW1CO0lBQ3JCOztNQUVFO1FBQ0Usa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QixlQUFlO1FBQ2YsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIseUJBQXlCO1FBQ3pCLGNBQWM7UUFDZCxjQUFjO01BQ2hCO0FBQ047O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZnVuY3Rpb24vY29tcG9uZW50L3RhYmxlLXZhbHVlLWZ1bmN0aW9ucy90YWJsZS12YWx1ZS1mdW5jdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB7XHJcbiAgbWFyZ2luOiAwcHggMCAzcHggMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gIC50YWJsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG59XHJcblxyXG4gIC5yb3c6bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xyXG4gIH1cclxuXHJcbiAgLnJvdy5oZWFkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzE4NDU2OSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnJvdy5ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjdhZTYwO1xyXG4gIH1cclxuXHJcbiAgLnJvdy5ibHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICMyOTgwYjk7XHJcbiAgfVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAucm93IHtcclxuICAgIHBhZGRpbmc6IDE0cHggMCA3cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICAgLnJvdy5oZWFkZXIge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBoZWlnaHQ6IDZweDtcclxuICAgIH1cclxuXHJcbiAgICAgIC5yb3cuaGVhZGVyIC5jZWxsIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgLnJvdyAuY2VsbCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgICAucm93IC5jZWxsOmJlZm9yZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XHJcbiAgICAgICAgbWluLXdpZHRoOiA5OHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiAjOTY5Njk2O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbn1cclxuXHJcbi5jZWxsIHtcclxuICAvKiAgcGFkZGluZzogNnB4IDEycHg7ICovXHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAuY2VsbCB7XHJcbiAgICBwYWRkaW5nOiAycHggMTZweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/function/component/table-value-functions/table-value-functions.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/function/component/table-value-functions/table-value-functions.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: TableValueFunctionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableValueFunctionsComponent", function() { return TableValueFunctionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_table_value_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/table-value-function.service */ "./src/app/function/services/table-value-function.service.ts");



let TableValueFunctionsComponent = class TableValueFunctionsComponent {
    constructor(tableValueFunctionService) {
        this.tableValueFunctionService = tableValueFunctionService;
        this.functionDescriptions = {};
    }
    ngOnInit() {
        this.loadFunctionDescriptions();
    }
    loadFunctionDescriptions() {
        this.tableValueFunctionService.getTableFunctionDescriptions().subscribe((data) => {
            this.functionDescriptions = data;
        });
    }
    // TrackBy function for better performance (for keyvalue pipe)
    trackByKey(index, item) {
        return item.key;
    }
};
TableValueFunctionsComponent.ctorParameters = () => [
    { type: _services_table_value_function_service__WEBPACK_IMPORTED_MODULE_2__["TableValueFunctionService"] }
];
TableValueFunctionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table-value-functions',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table-value-functions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/table-value-functions/table-value-functions.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table-value-functions.component.css */ "./src/app/function/component/table-value-functions/table-value-functions.component.css")).default]
    })
], TableValueFunctionsComponent);



/***/ }),

/***/ "./src/app/function/function.module.ts":
/*!*********************************************!*\
  !*** ./src/app/function/function.module.ts ***!
  \*********************************************/
/*! exports provided: FunctionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionModule", function() { return FunctionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/fesm2015/primeng-accordion.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/fesm2015/primeng-table.js");
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tree */ "./node_modules/primeng/fesm2015/primeng-tree.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/contextmenu */ "./node_modules/primeng/fesm2015/primeng-contextmenu.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/fesm2015/primeng-tabview.js");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/codehighlighter */ "./node_modules/primeng/fesm2015/primeng-codehighlighter.js");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/breadcrumb */ "./node_modules/primeng/fesm2015/primeng-breadcrumb.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/fesm2015/primeng-dialog.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/fesm2015/primeng-inputtextarea.js");
/* harmony import */ var angular_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-progress-bar */ "./node_modules/angular-progress-bar/fesm2015/angular-progress-bar.js");
/* harmony import */ var _component_aggregate_function_aggregate_function_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/aggregate-function/aggregate-function.component */ "./src/app/function/component/aggregate-function/aggregate-function.component.ts");
/* harmony import */ var _component_scalar_function_scalar_function_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/scalar-function/scalar-function.component */ "./src/app/function/component/scalar-function/scalar-function.component.ts");
/* harmony import */ var _component_table_value_function_table_value_function_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/table-value-function/table-value-function.component */ "./src/app/function/component/table-value-function/table-value-function.component.ts");
/* harmony import */ var _component_table_value_functions_table_value_functions_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/table-value-functions/table-value-functions.component */ "./src/app/function/component/table-value-functions/table-value-functions.component.ts");
/* harmony import */ var _component_scalar_functions_scalar_functions_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/scalar-functions/scalar-functions.component */ "./src/app/function/component/scalar-functions/scalar-functions.component.ts");
/* harmony import */ var _component_aggregate_functions_aggregate_functions_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/aggregate-functions/aggregate-functions.component */ "./src/app/function/component/aggregate-functions/aggregate-functions.component.ts");
/* harmony import */ var _services_aggregate_function_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/aggregate-function.service */ "./src/app/function/services/aggregate-function.service.ts");
/* harmony import */ var _services_scalar_function_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/scalar-function.service */ "./src/app/function/services/scalar-function.service.ts");
/* harmony import */ var _services_table_value_function_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/table-value-function.service */ "./src/app/function/services/table-value-function.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");





/* ===== PrimeNG Modules ===== */












/* ===== Other Third-Party Modules ===== */











/* ===== Components & Services ===== */
const routes = [
    { path: 's', component: _component_aggregate_functions_aggregate_functions_component__WEBPACK_IMPORTED_MODULE_22__["AggregateFunctionsComponent"] },
    { path: ':objectname', component: _component_aggregate_function_aggregate_function_component__WEBPACK_IMPORTED_MODULE_17__["AggregateFunctionComponent"] }
];
let FunctionModule = class FunctionModule {
};
FunctionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _component_aggregate_function_aggregate_function_component__WEBPACK_IMPORTED_MODULE_17__["AggregateFunctionComponent"],
            _component_scalar_function_scalar_function_component__WEBPACK_IMPORTED_MODULE_18__["ScalarFunctionComponent"],
            _component_table_value_function_table_value_function_component__WEBPACK_IMPORTED_MODULE_19__["TableValueFunctionComponent"],
            _component_table_value_functions_table_value_functions_component__WEBPACK_IMPORTED_MODULE_20__["TableValueFunctionsComponent"],
            _component_scalar_functions_scalar_functions_component__WEBPACK_IMPORTED_MODULE_21__["ScalarFunctionsComponent"],
            _component_aggregate_functions_aggregate_functions_component__WEBPACK_IMPORTED_MODULE_22__["AggregateFunctionsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_27__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_26__["RouterModule"].forChild(routes),
            /* Core Modules */
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            /* PrimeNG Modules */
            primeng_accordion__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
            primeng_tree__WEBPACK_IMPORTED_MODULE_7__["TreeModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_8__["ToastModule"],
            primeng_contextmenu__WEBPACK_IMPORTED_MODULE_10__["ContextMenuModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_11__["TabViewModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_12__["CodeHighlighterModule"],
            primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_14__["DialogModule"],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__["InputTextareaModule"],
            /* Other Third-Party Modules */
            angular_progress_bar__WEBPACK_IMPORTED_MODULE_16__["ProgressBarModule"]
        ],
        providers: [_services_aggregate_function_service__WEBPACK_IMPORTED_MODULE_23__["AggregateFunctionService"], _services_scalar_function_service__WEBPACK_IMPORTED_MODULE_24__["ScalarFunctionService"], _services_table_value_function_service__WEBPACK_IMPORTED_MODULE_25__["TableValueFunctionService"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]] // ✅ Keep this for custom elements
    })
], FunctionModule);



/***/ }),

/***/ "./src/app/function/services/aggregate-function.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/function/services/aggregate-function.service.ts ***!
  \*****************************************************************/
/*! exports provided: AggregateFunctionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AggregateFunctionService", function() { return AggregateFunctionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AggregateFunctionService = class AggregateFunctionService {
    constructor(http, primaryUrl) {
        this.http = http;
        this.primaryUrl = primaryUrl;
        this.baseUrl = '/AggregateFunction'; // Adjust based on your API base path
        this.primaryUrl = this.primaryUrl + this.baseUrl;
    }
    /**
      * Fetches descriptions of all table-valued functions.
      * @returns An Observable containing a dictionary of function names and their descriptions.
    */
    getAggregateFunctionDescriptions() {
        return this.http.get(`${this.primaryUrl}/AggregateFunctionDescriptions`);
    }
    /**
     * Retrieves metadata for a specified table-valued function.
     * @param functionName Name of the function.
     * @returns Observable of SqlFunctionMetadata.
     */
    getFunctionMetadata(functionName) {
        return this.http.get(`${this.primaryUrl}/${functionName}`);
    }
    /**
     * Upserts the description of a specified table-valued function.
     * @param schemaName Schema name of the function.
     * @param functionName Name of the function.
     * @param description Description to be upserted.
     * @returns Observable of void.
     */
    upsertFunctionDescription(schemaName, functionName, description) {
        return this.http.post(`${this.primaryUrl}/description/upsert`, null, // No request body, only query parameters
        { params: { schemaName, functionName, description } });
    }
    /**
     * Retrieves descriptions for all table-valued functions.
     * @returns Observable containing a dictionary of function names and their descriptions.
     */
    getFunctionDescriptions() {
        return this.http.get(`${this.primaryUrl}/descriptions`);
    }
};
AggregateFunctionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['API_URL',] }] }
];
AggregateFunctionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('API_URL'))
], AggregateFunctionService);



/***/ }),

/***/ "./src/app/function/services/scalar-function.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/function/services/scalar-function.service.ts ***!
  \**************************************************************/
/*! exports provided: ScalarFunctionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScalarFunctionService", function() { return ScalarFunctionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ScalarFunctionService = class ScalarFunctionService {
    constructor(http, primaryUrl) {
        this.http = http;
        this.primaryUrl = primaryUrl;
        this.baseUrl = '/ScalarFunction'; // Adjust based on your API base path
        this.primaryUrl = this.primaryUrl + this.baseUrl;
    }
    /**
        * Fetches descriptions of all table-valued functions.
        * @returns An Observable containing a dictionary of function names and their descriptions.
      */
    getScalarFunctionDescriptions() {
        return this.http.get(`${this.primaryUrl}/ScalarFunctionDescriptions`);
    }
    /**
     * Retrieves metadata for a specified table-valued function.
     * @param functionName Name of the function.
     * @returns Observable of SqlFunctionMetadata.
     */
    getFunctionMetadata(functionName) {
        return this.http.get(`${this.primaryUrl}/${functionName}`);
    }
    /**
     * Upserts the description of a specified table-valued function.
     * @param schemaName Schema name of the function.
     * @param functionName Name of the function.
     * @param description Description to be upserted.
     * @returns Observable of void.
     */
    upsertFunctionDescription(schemaName, functionName, description) {
        return this.http.post(`${this.primaryUrl}/description/upsert`, null, // No request body, only query parameters
        { params: { schemaName, functionName, description } });
    }
    /**
     * Retrieves descriptions for all table-valued functions.
     * @returns Observable containing a dictionary of function names and their descriptions.
     */
    getFunctionDescriptions() {
        return this.http.get(`${this.primaryUrl}/descriptions`);
    }
};
ScalarFunctionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['API_URL',] }] }
];
ScalarFunctionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('API_URL'))
], ScalarFunctionService);



/***/ }),

/***/ "./src/app/function/services/table-value-function.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/function/services/table-value-function.service.ts ***!
  \*******************************************************************/
/*! exports provided: TableValueFunctionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableValueFunctionService", function() { return TableValueFunctionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let TableValueFunctionService = class TableValueFunctionService {
    constructor(http, primaryUrl) {
        this.http = http;
        this.primaryUrl = primaryUrl;
        this.baseUrl = '/TableFunction'; // Adjust based on your API base path
        this.primaryUrl = this.primaryUrl + this.baseUrl;
    }
    /**
        * Fetches descriptions of all table-valued functions.
        * @returns An Observable containing a dictionary of function names and their descriptions.
      */
    getTableFunctionDescriptions() {
        return this.http.get(`${this.primaryUrl}/TableValuedFunctionDescriptions`);
    }
    /**
     * Retrieves metadata for a specified table-valued function.
     * @param functionName Name of the function.
     * @returns Observable of SqlFunctionMetadata.
     */
    getFunctionMetadata(functionName) {
        return this.http.get(`${this.primaryUrl}/${functionName}`);
    }
    /**
     * Upserts the description of a specified table-valued function.
     * @param schemaName Schema name of the function.
     * @param functionName Name of the function.
     * @param description Description to be upserted.
     * @returns Observable of void.
     */
    upsertFunctionDescription(schemaName, functionName, description) {
        return this.http.post(`${this.primaryUrl}/description/upsert`, null, // No request body, only query parameters
        { params: { schemaName, functionName, description } });
    }
    /**
     * Retrieves descriptions for all table-valued functions.
     * @returns Observable containing a dictionary of function names and their descriptions.
     */
    getFunctionDescriptions() {
        return this.http.get(`${this.primaryUrl}/descriptions`);
    }
};
TableValueFunctionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: ['API_URL',] }] }
];
TableValueFunctionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])('API_URL'))
], TableValueFunctionService);



/***/ })

}]);
//# sourceMappingURL=function-function-module-es2015.js.map