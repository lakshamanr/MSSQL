(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/UserDefinedDataType/components/user-defined-data-type/user-defined-data-type.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/UserDefinedDataType/components/user-defined-data-type/user-defined-data-type.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>user-defined-data-type works!</p>\n<div class=\"container\">\n    <h2>User Defined Data Types</h2>\n    \n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Base Type</th>\n          <th>Length</th>\n          <th>Allow Nulls</th>\n          <th>Action</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let dataType of userDefinedDataTypes\">\n          <td>{{ dataType.name }}</td>\n          <td>{{ dataType.baseTypeName }}</td>\n          <td>{{ dataType.length }}</td>\n          <td>{{ dataType.allowNulls ? 'Yes' : 'No' }}</td>\n          <td><button (click)=\"loadDetails(dataType.name.split('.')[0], dataType.name.split('.')[1])\">View</button></td>\n        </tr>\n      </tbody>\n    </table>\n  \n    <div *ngIf=\"selectedDataType\">\n      <h3>Details for {{ selectedDataType.name }}</h3>\n      <p><strong>Description:</strong> {{ selectedDataType.description }}</p>\n  \n      <label>New Description:</label>\n      <input type=\"text\" [(ngModel)]=\"newDescription\" />\n      <button (click)=\"updateDescription()\">Update</button>\n  \n      <h4>Referenced By:</h4>\n      <ul>\n        <li *ngFor=\"let ref of selectedDataType.userDefinedDataTypeReference\">\n          {{ ref.objectName }} ({{ ref.objectType }})\n        </li>\n      </ul>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/UserDefinedDataType/components/user-defined-data-types/user-defined-data-types.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/UserDefinedDataType/components/user-defined-data-types/user-defined-data-types.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>user-defined-data-types works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header> \r\n<div id=\"main-content\">  \r\n  <ngx-ui-loader></ngx-ui-loader>\r\n  <div >\r\n    <div class=\"split-example ex-percent\">\r\n      <as-split unit=\"percent\"\r\n                direction=\"horizontal\"\r\n                #split=\"asSplit\"\r\n                gutterSize=\"10\"\r\n                [gutterDblClickDuration]=\"dblClickTime\"\r\n                [useTransition]=\"useTransition\"\r\n                (dragStart)=\"log('dragStart', $event)\"\r\n                (dragEnd)=\"log('dragEnd', $event)\"\r\n                (gutterClick)=\"log('gutterClick', $event)\"\r\n                (gutterDblClick)=\"log('gutterDblClick', $event)\"\r\n                (transitionEnd)=\"log('transitionEnd', $event)\"> \r\n        \r\n                <as-split-area [ngClass]=\"status ? 'HideSplitBar' : 'showSplitBar'\" size=\"25\" #area1=\"asSplitArea\">\r\n                  <div class=\"scollbar scrollbar-primary pre-scrollable leftmenuExtendedProperties setWindowHeight\" id=\"leftMenu\">\r\n                    <app-leftmenu></app-leftmenu>\r\n                  </div>\r\n                </as-split-area>\r\n                <as-split-area size=\"75\" [ngClass]=\"status ? 'ShowFullPageMode' : 'RemoveFullPageMode'\" #area2=\"asSplitArea\" id=\"asSplitArea2\">\r\n                  <div class=\"scollbar scrollbar-primary setWindowHeight\">\r\n                    <div id=\"center\">\r\n                      <app-main-page></app-main-page>\r\n                    </div>\r\n                  </div>\r\n                </as-split-area>\r\n       \r\n      </as-split>\r\n    </div>\r\n    <hr />\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/database/components/database-details/database-details.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/database/components/database-details/database-details.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<amexio-accordion [multi-open]=\"true\">\r\n  <!-- Database Tab -->\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Database\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"cell\">\r\n        <h3>\r\n          <p class=\"fa fa-database\">\r\n            {{databaseMetaData.currentDatabaseName}}\r\n          </p>\r\n        </h3>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Object Types\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"cell\">\r\n        <ul>\r\n          <div *ngFor=\"let item of objectTypeItems\">\r\n            <app-object-type-item [icon]=\"item.icon\"\r\n                                  [label]=\"item.label\"\r\n                                  [count]=\"item.count\"\r\n                                  [visible]=\"item.visible\">\r\n            </app-object-type-item>\r\n          </div>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Database Properties\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Property</div>\r\n        <div class=\"cell\">Value</div>\r\n      </div>\r\n\r\n      <div *ngFor=\"let property of databaseMetaData.serverProperties\" class=\"row\">\r\n        <div class=\"cell\" data-title=\"Property\">{{property.name}}</div>\r\n        <div class=\"cell\" data-title=\"Value\">{{property.value}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Database Options\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Property</div>\r\n        <div class=\"cell\">Value</div>\r\n      </div>\r\n\r\n      <div *ngFor=\"let option of databaseMetaData.serverAdvanceProperties\" class=\"row\">\r\n        <div class=\"cell\" data-title=\"Property\">{{option.name}}</div>\r\n        <div class=\"cell\" data-title=\"Value\">{{option.value}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <!-- Files Tab -->\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Files\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Type</div>\r\n        <div class=\"cell\">File Locations </div>\r\n        <div class=\"cell\">Current Size</div>\r\n        <div class=\"cell\">Max Size in MB</div>\r\n        <div class=\"cell\">Growth Type</div>\r\n      </div>\r\n\r\n      <div *ngFor=\"let file of databaseMetaData.fileInformations\" class=\"row\">\r\n        <div class=\"cell\" data-title=\"fileType\">{{file.fileType}}</div>\r\n        <div class=\"cell\" data-title=\"fileLocation\">{{file.fileLocation}} MB</div>\r\n        <div class=\"cell\" data-title=\"currentSizeMB\">{{file.currentSizeMB}}</div>\r\n        <div class=\"cell\" data-title=\"maxSizeMB\">{{file.maxSizeMB}}</div>\r\n        <div class=\"cell\" data-title=\"growthType\">{{file.growthType}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n</amexio-accordion>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/database/components/database-selector/database-selector.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/database/components/database-selector/database-selector.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"database-selector-container\">\r\n  <label for=\"databaseSelect\">Select Database:</label>\r\n  <select id=\"databaseSelect\" [(ngModel)]=\"selectedDatabase\" (change)=\"onChangeDatabase($event)\" class=\"database-dropdown\">\r\n    <option *ngFor=\"let db of databases\" [value]=\"db\">{{ db }}</option>\r\n  </select>\r\n  \r\n</div>\r\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/database/components/object-type-item/object-type-item.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/database/components/object-type-item/object-type-item.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<li *ngIf=\"visible\">\r\n    <div>\r\n      <img [src]=\"icon\" />\r\n      <a>{{ label }}</a>\r\n      <i *ngIf=\"count\" class=\"fa fa-5x fa-border icon-grey badge\">\r\n        {{ count }}\r\n      </i>\r\n    </div>\r\n  </li>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/aggregate-function/aggregate-function.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/aggregate-function/aggregate-function.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<amexio-accordion [multi-open]=\"true\">\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Aggregate Functions \" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n\r\n    <div class=\"table\">\r\n      <div class=\"cell\">\r\n        <h5>\r\n          <img src=\"./assets/icons/Function_Scalar.png\" style=\"width: 30px !important;\">\r\n          {{selectedFunction}}\r\n        </h5>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"MS Description \" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <div class=\"table\" *ngIf=\"!iblnShowEditBox\">\r\n      <div class=\"cell\">\r\n        <p>\r\n          {{functionMetadata?.extendedPropertyInfo?.description}}\r\n        </p>\r\n      </div>\r\n      <a (click)=\"ShowModelPOP($event)\" class=\"btn btn-default btn-lg a-btn-slide-text\">\r\n        <span class=\"fa fa-edit\"></span>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"form-group\" *ngIf=\"iblnShowEditBox\">\r\n      <textarea class=\"form-control\" rows=\"5\" id=\"comment\" [(ngModel)]=\"ms_description\"> </textarea>\r\n      <div class=\"form-group\" style=\"margin-left: 94%;\">\r\n\r\n        <a (click)=\"CancelTableMsDesciption($event)\"><i class=\"fa fa-2x fa-times\"></i></a>&nbsp;\r\n        <a (click)=\"SaveTableMsDesciption($event)\"><i class=\"fa fa-2x fa-save\"></i></a>\r\n      </div>\r\n    </div>\r\n\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Function Properties\" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Uses ansi Nulls</div>\r\n        <div class=\"cell\">Uses quoted identifier</div>\r\n        <div class=\"cell\">Create date</div>\r\n        <div class=\"cell\">Modify date</div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"cell\">{{ functionMetadata?.properties.uses_ansi_nulls}} </div>\r\n        <div class=\"cell\">{{ functionMetadata?.properties.uses_quoted_identifier}}</div>\r\n        <div class=\"cell\">{{ functionMetadata?.properties.create_date}} </div>\r\n        <div class=\"cell\">{{ functionMetadata?.properties.modify_date}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Parameters\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Parameter Name</div>\r\n        <div class=\"cell\">Type</div>\r\n        <div class=\"cell\">Length</div>\r\n        <div class=\"cell\">Precision</div>\r\n        <div class=\"cell\">Scale</div>\r\n        <div class=\"cell\">Param Order</div>\r\n        <div class=\"cell\">Collation</div>\r\n        <div class=\"cell\">ExtendedProperty</div>\r\n      </div>\r\n\r\n      <div *ngFor=\"let Property of functionMetadata?.parameters \" class=\"row\">\r\n        <div class=\"cell\">{{Property.parameterName}} </div>\r\n        <div class=\"cell\">{{Property.type}}</div>\r\n        <div class=\"cell\">{{Property.length}} </div>\r\n        <div class=\"cell\">{{Property.Precision}}</div>\r\n        <div class=\"cell\">{{Property.scale}} </div>\r\n        <div class=\"cell\">{{Property.paramOrder}}</div>\r\n        <div class=\"cell\">{{Property.collation}} </div>\r\n        <div class=\"cell\">{{Property.extendedProperty}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Function Create Script \" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <div>\r\n      <ngx-prism [language]=\"sql\">\r\n        {{functionMetadata?.definition}}\r\n      </ngx-prism>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Used By \" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"table\">\r\n        <div class=\"row header\">\r\n          <div class=\"cell\">Name</div>\r\n          <div class=\"cell\">Type</div>\r\n          <div class=\"cell\">Updated</div>\r\n          <div class=\"cell\">Selected</div>\r\n          <div class=\"cell\">Column Name</div>\r\n        </div>\r\n        <div *ngFor=\"let Property of functionMetadata?.dependencies \" class=\"row\">\r\n          <div class=\"cell\">   <a class=\"cell\" [routerLink]=\"['/tblName',Property.NevigationLink]\"> {{Property.name}}</a> </div>\r\n          <div class=\"cell\">{{Property.type}}</div>\r\n          <div class=\"cell\">{{Property.updated}} </div>\r\n          <div class=\"cell\">{{Property.selected}}</div>\r\n          <div class=\"cell\">{{Property.column_name}} </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </amexio-accordion-tab>\r\n</amexio-accordion>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/aggregate-functions/aggregate-functions.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/aggregate-functions/aggregate-functions.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n \r\n<amexio-accordion [multi-open]=\"true\">\r\n    <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"All Aggregate Functions \" [gradient]=\"true\"\r\n                          [active]=\"true\">\r\n      <hr />\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Search\" id=\"listSearch\">\r\n      <hr />\r\n      <div class=\"table\">\r\n        <div class=\"row header\">\r\n          <div class=\"cell\">Aggregate Functions </div>\r\n          <div class=\"cell\">MS Descriptions</div>\r\n        </div>\r\n        <div *ngFor=\"let key of functionDescriptions | keyvalue\"class=\"row\">\r\n          <a class=\"cell\" data-title=\"Name\"> {{ key.key }}</a>\r\n          <div class=\"cell\">{{ key.value }}</div>\r\n  \r\n        </div>\r\n      </div>\r\n    </amexio-accordion-tab>\r\n  \r\n  </amexio-accordion>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/scalar-function/scalar-function.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/scalar-function/scalar-function.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<amexio-accordion [multi-open]=\"true\">\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Scalar Functions \" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n\r\n    <div class=\"table\">\r\n      <div class=\"cell\">\r\n        <h5>\r\n          <img src=\"./assets/icons/Function_Scalar.png\" style=\"width: 30px !important;\">\r\n          {{selectedFunction}}\r\n        </h5>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"MS Description \" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <div class=\"table\" *ngIf=\"!iblnShowEditBox\">\r\n      <div class=\"cell\">\r\n        <p>\r\n          {{functionMetadata?.extendedPropertyInfo?.description}}\r\n        </p>\r\n      </div>\r\n      <a (click)=\"ShowModelPOP($event)\" class=\"btn btn-default btn-lg a-btn-slide-text\">\r\n        <span class=\"fa fa-edit\"></span>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"form-group\" *ngIf=\"iblnShowEditBox\">\r\n      <textarea class=\"form-control\" rows=\"5\" id=\"comment\" [(ngModel)]=\"ms_description\"> </textarea>\r\n      <div class=\"form-group\" style=\"margin-left: 94%;\">\r\n\r\n        <a (click)=\"CancelTableMsDesciption($event)\"><i class=\"fa fa-2x fa-times\"></i></a>&nbsp;\r\n        <a (click)=\"SaveTableMsDesciption($event)\"><i class=\"fa fa-2x fa-save\"></i></a>\r\n      </div>\r\n    </div>\r\n\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Function Properties\" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Uses ansi Nulls</div>\r\n        <div class=\"cell\">Uses quoted identifier</div>\r\n        <div class=\"cell\">Create date</div>\r\n        <div class=\"cell\">Modify date</div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"cell\">{{ functionMetadata?.properties.uses_ansi_nulls}} </div>\r\n        <div class=\"cell\">{{ functionMetadata?.properties.uses_quoted_identifier}}</div>\r\n        <div class=\"cell\">{{ functionMetadata?.properties.create_date}} </div>\r\n        <div class=\"cell\">{{ functionMetadata?.properties.modify_date}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Parameters\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Parameter Name</div>\r\n        <div class=\"cell\">Type</div>\r\n        <div class=\"cell\">Length</div>\r\n        <div class=\"cell\">Precision</div>\r\n        <div class=\"cell\">Scale</div>\r\n        <div class=\"cell\">Param Order</div>\r\n        <div class=\"cell\">Collation</div>\r\n        <div class=\"cell\">ExtendedProperty</div>\r\n      </div>\r\n\r\n      <div *ngFor=\"let Property of functionMetadata?.parameters \" class=\"row\">\r\n        <div class=\"cell\">{{Property.parameterName}} </div>\r\n        <div class=\"cell\">{{Property.type}}</div>\r\n        <div class=\"cell\">{{Property.length}} </div>\r\n        <div class=\"cell\">{{Property.Precision}}</div>\r\n        <div class=\"cell\">{{Property.scale}} </div>\r\n        <div class=\"cell\">{{Property.paramOrder}}</div>\r\n        <div class=\"cell\">{{Property.collation}} </div>\r\n        <div class=\"cell\">{{Property.extendedProperty}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Function Create Script \" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <div>\r\n      <ngx-prism [language]=\"sql\">\r\n        {{functionMetadata?.definition}}\r\n      </ngx-prism>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Used By \" [active]=\"true\"> \r\n    <div class=\"table\">\r\n      <div class=\"table\">\r\n        <div class=\"row header\">\r\n          <div class=\"cell\">Name</div>\r\n          <div class=\"cell\">Type</div>\r\n          <div class=\"cell\">Updated</div>\r\n          <div class=\"cell\">Selected</div>\r\n          <div class=\"cell\">Column Name</div> \r\n        </div> \r\n        <div *ngFor=\"let Property of functionMetadata?.dependencies \" class=\"row\">\r\n          <div class=\"cell\">   <a class=\"cell\" [routerLink]=\"['/tblName',Property.NevigationLink]\"> {{Property.name}}</a> </div>\r\n          <div class=\"cell\">{{Property.type}}</div>\r\n          <div class=\"cell\">{{Property.updated}} </div>\r\n          <div class=\"cell\">{{Property.selected}}</div>\r\n          <div class=\"cell\">{{Property.column_name}} </div> \r\n        </div>\r\n      </div>\r\n    </div> \r\n\r\n  </amexio-accordion-tab>\r\n</amexio-accordion>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/scalar-functions/scalar-functions.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/scalar-functions/scalar-functions.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" \r\n\r\n\r\n \r\n<amexio-accordion [multi-open]=\"true\">\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"All Scalar Functions \" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <hr />\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search\" id=\"listSearch\">\r\n    <hr />\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Scalar Functions </div>\r\n        <div class=\"cell\">MS Descriptions</div>\r\n      </div>\r\n      <div *ngFor=\"let key of functionDescriptions | keyvalue\"class=\"row\">\r\n        <a class=\"cell\" data-title=\"Name\"> {{ key.key }}</a>\r\n        <div class=\"cell\">{{ key.value }}</div>\r\n\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n</amexio-accordion>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/table-value-function/table-value-function.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/table-value-function/table-value-function.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<amexio-accordion [multi-open]=\"true\">\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Table Value Functions \" [gradient]=\"true\"\r\n                        [active]=\"true\"> \r\n    <div class=\"table\">\r\n      <div class=\"cell\">\r\n        <h5>\r\n          <img src=\"./assets/icons/Function_Table.png\" style=\"width: 30px !important;\">\r\n          {{selectedFunction}}\r\n        </h5>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"MS Description \" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <div class=\"table\" *ngIf=\"!iblnShowEditBox\">\r\n      <div class=\"cell\">\r\n        <p>\r\n          {{functionMetadata?.extendedPropertyInfo?.description}}\r\n        </p>\r\n      </div>\r\n      <a (click)=\"ShowModelPOP($event)\" class=\"btn btn-default btn-lg a-btn-slide-text\">\r\n        <span class=\"fa fa-edit\"></span>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"form-group\" *ngIf=\"iblnShowEditBox\">\r\n      <textarea class=\"form-control\" rows=\"5\" id=\"comment\" [(ngModel)]=\"ms_description\"> </textarea>\r\n      <div class=\"form-group\" style=\"margin-left: 94%;\">\r\n\r\n        <a (click)=\"CancelTableMsDesciption($event)\"><i class=\"fa fa-2x fa-times\"></i></a>&nbsp;\r\n        <a (click)=\"SaveTableMsDesciption($event)\"><i class=\"fa fa-2x fa-save\"></i></a>\r\n      </div>\r\n    </div>\r\n\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Function Properties\" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Uses ansi Nulls</div>\r\n        <div class=\"cell\">Uses quoted identifier</div>\r\n        <div class=\"cell\">Create date</div>\r\n        <div class=\"cell\">Modify date</div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"cell\">{{ functionMetadata?.properties.uses_ansi_nulls}} </div>\r\n        <div class=\"cell\">{{ functionMetadata?.properties.uses_quoted_identifier}}</div>\r\n        <div class=\"cell\">{{ functionMetadata?.properties.create_date}} </div>\r\n        <div class=\"cell\">{{ functionMetadata?.properties.modify_date}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Parameters\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Parameter Name</div>\r\n        <div class=\"cell\">Type</div>\r\n        <div class=\"cell\">Length</div>\r\n        <div class=\"cell\">Precision</div>\r\n        <div class=\"cell\">Scale</div>\r\n        <div class=\"cell\">Param Order</div>\r\n        <div class=\"cell\">Collation</div>\r\n        <div class=\"cell\">ExtendedProperty</div>\r\n      </div>\r\n\r\n      <div *ngFor=\"let Property of functionMetadata?.parameters \" class=\"row\">\r\n        <div class=\"cell\">{{Property.parameterName}} </div>\r\n        <div class=\"cell\">{{Property.type}}</div>\r\n        <div class=\"cell\">{{Property.length}} </div>\r\n        <div class=\"cell\">{{Property.Precision}}</div>\r\n        <div class=\"cell\">{{Property.scale}} </div>\r\n        <div class=\"cell\">{{Property.paramOrder}}</div>\r\n        <div class=\"cell\">{{Property.collation}} </div>\r\n        <div class=\"cell\">{{Property.extendedProperty}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Function Create Script \" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <div>\r\n      <ngx-prism [language]=\"sql\">\r\n        {{functionMetadata?.definition}}\r\n      </ngx-prism>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Used By \" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"table\">\r\n        <div class=\"row header\">\r\n          <div class=\"cell\">Name</div>\r\n          <div class=\"cell\">Type</div>\r\n          <div class=\"cell\">Updated</div>\r\n          <div class=\"cell\">Selected</div>\r\n          <div class=\"cell\">Column Name</div>\r\n        </div>\r\n        <div *ngFor=\"let Property of functionMetadata?.dependencies \" class=\"row\">\r\n          <div class=\"cell\">   <a class=\"cell\" [routerLink]=\"['/tblName',Property.NevigationLink]\"> {{Property.name}}</a> </div>\r\n          <div class=\"cell\">{{Property.type}}</div>\r\n          <div class=\"cell\">{{Property.updated}} </div>\r\n          <div class=\"cell\">{{Property.selected}}</div>\r\n          <div class=\"cell\">{{Property.column_name}} </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </amexio-accordion-tab>\r\n</amexio-accordion>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/table-value-functions/table-value-functions.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/function/component/table-value-functions/table-value-functions.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<amexio-accordion [multi-open]=\"true\">\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"All Table Functions \" [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n    <hr />\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search\" id=\"listSearch\">\r\n    <hr />\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Table Functions </div>\r\n        <div class=\"cell\">MS Descriptions</div>\r\n      </div>\r\n      <div *ngFor=\"let key of functionDescriptions | keyvalue\"class=\"row\">\r\n        <a class=\"cell\" data-title=\"Name\"> {{ key.key }}</a>\r\n        <div class=\"cell\">{{ key.value }}</div>\r\n\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n</amexio-accordion>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/left-menu/components/leftmenu/leftmenu.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/left-menu/components/leftmenu/leftmenu.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" \">\r\n    <div class=\"cell\">  \r\n      <amexio-tree-filter-view [data-reader]=\"'data'\"\r\n                               (nodeClick)=\"getNodeData($event)\"\r\n                               [data]=\"leftmenujsonvalues\">\r\n      </amexio-tree-filter-view> \r\n    </div>\r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/procedure/components/procedure/procedure.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/procedure/components/procedure/procedure.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<amexio-accordion [multi-open]=\"true\">\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Stored Procedure \" [gradient]=\"true\" [active]=\"true\">\r\n\r\n    <div class=\"table\">\r\n      <div class=\"cell\">\r\n        <div>\r\n          <h5>\r\n            <img src=\"./assets/icons/StoredProcedure.png\" style=\"width: 30px !important;\">\r\n            {{storedProcedureName}}\r\n          </h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette\r\n                        [color-palette]=\"''\"\r\n                        header=\"MS Description\"\r\n                        [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n\r\n    <!-- Display Mode -->\r\n    <ng-container *ngIf=\"!iblnShowEditBox; else editMode\">\r\n      <div class=\"description-container\">\r\n        <a (click)=\"toggleEditBox()\" class=\"edit-icon\">\r\n          <i class=\"fa fa-edit\"></i>\r\n        </a>\r\n        <p class=\"description-text\">\r\n          {{ storedProcedureMetadata?.storedProcedureInfo?.extendedProperty }}\r\n        </p>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!-- Edit Mode -->\r\n    <ng-template #editMode>\r\n      <div class=\"edit-container\">\r\n        <textarea class=\"form-control edit-textarea\"\r\n                  rows=\"4\"\r\n                  [(ngModel)]=\"storedProcedureMetadata.storedProcedureInfo.extendedProperty\">\r\n      </textarea>\r\n\r\n        <div class=\"action-buttons\">\r\n          <a (click)=\"CancelStoreProcMsDesciption()\" class=\"cancel-btn\">\r\n            <i class=\"fa fa-2x fa-times\"></i>\r\n          </a>\r\n          <a (click)=\"updateProcedureDescription()\" class=\"save-btn\">\r\n            <i class=\"fa fa-2x fa-save\"></i>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n\r\n  </amexio-accordion-tab>\r\n\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Objects dependncy Tree\" [gradient]=\"true\" [active]=\"true\">\r\n    <p-tree [value]=\"filesTree\"\r\n            layout=\"horizontal\"\r\n            selectionMode=\"single\">\r\n    </p-tree>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Parameters\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Edit</div>\r\n        <div class=\"cell\">Name</div>\r\n        <div class=\"cell\">Type</div>\r\n        <div class=\"cell\">Max Length (Bytes)</div>\r\n        <div class=\"cell\">Parameter Order</div>\r\n        <div class=\"cell\">Collation</div>\r\n        <div class=\"cell\">MS Description</div>\r\n      </div>\r\n\r\n      <div *ngFor=\"let property of storedProcedureMetadata?.parameters\" class=\"row\">\r\n        <!-- Edit Button at the Front -->\r\n        <div class=\"cell edit-cell\">\r\n          <a (click)=\"toggleParameterEdit(property)\" class=\"edit-icon\">\r\n            <span class=\"fa fa-edit\"></span>\r\n          </a>\r\n        </div>\r\n        <div class=\"cell\">{{ property.parameterName }}</div>\r\n        <div class=\"cell\">{{ property.type }}</div>\r\n        <div class=\"cell\">{{ property.length }}</div>\r\n        <div class=\"cell\">{{ property.parameterOrder }}</div>\r\n        <div class=\"cell\">{{ property.collation }}</div>\r\n\r\n        <!-- MS Description Column -->\r\n        <div class=\"cell\">\r\n          <div *ngIf=\"!property.isEditing\">\r\n            <p>{{ property.extendedProperty }}</p>\r\n          </div>\r\n\r\n          <div *ngIf=\"property.isEditing\">\r\n            <textarea class=\"edit-textarea\" [(ngModel)]=\"property.extendedProperty\"></textarea>\r\n\r\n            <div class=\"action-buttons\">\r\n              <a (click)=\"toggleParameterEdit(property)\" class=\"cancel-btn\">\r\n                <i class=\"fa fa-times\"></i>\r\n              </a>\r\n              <a (click)=\"updateParameterDescription(property)\" class=\"save-btn\">\r\n                <i class=\"fa fa-save\"></i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Create Script\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"code-container\">\r\n      <ngx-prism *ngIf=\"storedProcedureMetadata?.createScript?.procedureDefinition\" [language]=\"'sql'\">\r\n        {{ storedProcedureMetadata?.createScript?.procedureDefinition }}\r\n      </ngx-prism>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Used by \" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\"> Referenced object name </div>\r\n      </div>\r\n      <div *ngFor=\"let property of storedProcedureMetadata?.dependencies \" class=\"row\">\r\n        <div class=\"cell\"> {{property.referencedObjectName}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  \r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Execution Plan\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"execution-plan-container\">\r\n      <div id=\"container\"></div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n</amexio-accordion>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/procedure/components/procedures/procedures.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/procedure/components/procedures/procedures.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <amexio-accordion [multi-open]=\"true\">\r\n    <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Tables\" [active]=\"true\">\r\n      <p-table [columns]=\"cols\" [value]=\"tables\" dataKey=\"tableName\" [paginator]=\"true\" [rows]=\"10\">  \r\n        <ng-template pTemplate=\"header\" let-columns>\r\n          <tr>\r\n            <th style=\"width: 4em\"></th>\r\n            <th>Table Name</th>\r\n            <th>Description</th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-expanded=\"expanded\" let-columns=\"columns\">\r\n          <tr>\r\n            <td>\r\n              <a href=\"#\" [pRowToggler]=\"rowData\">\r\n                <i [ngClass]=\"expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'\"></i>\r\n              </a>\r\n            </td>\r\n            <td class=\"cell\">{{rowData.tableName}}</td>\r\n            <td class=\"cell\">{{rowData.extendedPropertyValue}}</td>\r\n          </tr>\r\n        </ng-template>  \r\n        <ng-template pTemplate=\"rowexpansion\" let-rowData let-columns=\"columns\">\r\n          <tr>\r\n            <td [attr.colspan]=\"columns.length + 1\">\r\n              <div class=\"table\">\r\n                <div class=\"row header\">\r\n                  <div class=\"cell\">Column Name</div>\r\n                  <div class=\"cell\">Description</div>\r\n                </div>\r\n                <div class=\"row\" *ngFor=\"let columndetails of rowData.tableColumns\">\r\n                  <div class=\"cell\">{{columndetails.columnName}}</div>\r\n                  <div class=\"cell\">{{columndetails.extendedPropertyValue}}</div>\r\n                </div>\r\n              </div>\r\n              <hr />\r\n            </td>\r\n          </tr>\r\n        </ng-template>  \r\n      </p-table>\r\n    </amexio-accordion-tab>\r\n  </amexio-accordion>\r\n   -->\r\n\r\n   <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Store Procerdure Extended Properties\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Store Procedures</div>\r\n        <div class=\"cell\">Extended Properties Value</div> \r\n      </div> \r\n      <div *ngFor=\"let description of storedProcedures\" class=\"row\">\r\n        <div class=\"cell\">{{description.storedProcedure}}</div>\r\n        <div class=\"cell\">{{description.extendedProperty}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/table/components/table/edit-column-description-dialog/edit-column-description-dialog.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table/components/table/edit-column-description-dialog/edit-column-description-dialog.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-dialog header=\"Edit Column Description\"\r\n          [(visible)]=\"displayColumnDialog\"\r\n          modal=\"true\"\r\n          [responsive]=\"true\"\r\n          styleClass=\"custom-dialog\"\r\n          [style]=\"{width: '350px', minWidth: '200px'}\"\r\n          [minY]=\"70\"\r\n          [maximizable]=\"true\"\r\n          [baseZIndex]=\"10000\">\r\n  <div class=\"p-fluid\">\r\n    <div class=\"p-formgrid p-grid\">\r\n      <div class=\"p-field p-col\">\r\n        <label for=\"value\">Column Extended Properties Value</label>\r\n        <textarea rows=\"5\"\r\n                  cols=\"30\"\r\n                  pInputTextarea\r\n                  [autoResize]=\"true\"\r\n                  [(ngModel)]=\"selectedColumn.description\"\r\n                  placeholder=\"Enter Description\">\r\n        </textarea>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <p-footer>\r\n    <button pButton\r\n            label=\"Save\"\r\n            icon=\"pi pi-check\"\r\n            (click)=\"saveDescription()\"\r\n            class=\"p-button-success\">\r\n    </button>\r\n    <button pButton\r\n            label=\"Cancel\"\r\n            icon=\"pi pi-times\"\r\n            class=\"p-button-secondary\"\r\n            (click)=\"cancelEdit()\">\r\n    </button>\r\n  </p-footer>\r\n</p-dialog>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/table/components/table/edit-description-dialog/edit-description-dialog.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table/components/table/edit-description-dialog/edit-description-dialog.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-dialog header=\"Edit Description\"\r\n          [(visible)]=\"displayDialog\"\r\n          modal=\"true\"\r\n          [responsive]=\"true\"\r\n          styleClass=\"custom-dialog\"\r\n          [style]=\"{width: '350px', minWidth: '200px'}\"\r\n          [minY]=\"70\"\r\n          [maximizable]=\"true\"\r\n          [baseZIndex]=\"10000\">\r\n  <div class=\"p-fluid\">\r\n    <div class=\"p-formgrid p-grid\">\r\n      <div class=\"p-field p-col\">\r\n        <label for=\"name\">Extended Properties Name</label>\r\n        <textarea rows=\"5\"\r\n                  cols=\"30\"\r\n                  [disabled]=\"true\"\r\n                  pInputTextarea\r\n                  [autoResize]=\"true\"\r\n                  [(ngModel)]=\"selectedDescription.name\"\r\n                  placeholder=\"Enter name\">\r\n        </textarea>\r\n      </div>\r\n      <div class=\"p-field p-col\">\r\n        <label for=\"value\">Extended Properties Value</label>\r\n        <textarea rows=\"5\"\r\n                  cols=\"30\"\r\n                  pInputTextarea\r\n                  [autoResize]=\"true\"\r\n                  [(ngModel)]=\"selectedDescription.value\"\r\n                  placeholder=\"Enter value\">\r\n        </textarea>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <p-footer>\r\n    <button *ngIf=\"hasEditPermission\"\r\n            pButton\r\n            label=\"Save\"\r\n            icon=\"pi pi-check\"\r\n            (click)=\"saveDescription()\"\r\n            class=\"p-button-success\">\r\n    </button>\r\n    <button pButton\r\n            label=\"Cancel\"\r\n            icon=\"pi pi-times\"\r\n            class=\"p-button-secondary\"\r\n            (click)=\"cancelEdit()\">\r\n    </button>\r\n  </p-footer>\r\n</p-dialog>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/table/components/table/sql-script-viewer/sql-script-viewer.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table/components/table/sql-script-viewer/sql-script-viewer.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"table\">\r\n    <div class=\"row\">\r\n      <pre>{{ script }}</pre>\r\n    </div>\r\n  </div>\r\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/table/components/table/table.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table/components/table/table.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<amexio-accordion [multi-open]=\"true\">\r\n  <!-- Table Information -->\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Table: {{tableName}}\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"cell\">\r\n        <h5>\r\n          <img src=\"./assets/icons/Table.png\" style=\"width: 30px !important;\" />\r\n          {{tableName}}\r\n        </h5>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n  <!-- Extended Properties -->\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Table Extended Properties\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Extended Properties Name</div>\r\n        <div class=\"cell\">Extended Properties Value</div>\r\n        <div class=\"cell\">Extended Properties of Table</div>\r\n        <div *ngIf=\"hasEditPermission\" class=\"cell\">Actions</div>\r\n      </div>\r\n      <div *ngFor=\"let description of descriptions\" class=\"row\">\r\n        <div class=\"cell\">{{description.name}}</div>\r\n        <div class=\"cell\">{{description.value}}</div>\r\n        <div class=\"cell\">{{description.table}}</div>\r\n        <div *ngIf=\"hasEditPermission\" class=\"cell\">\r\n          <button type=\"button\" (click)=\"editDescription(description)\" pButton icon=\"pi pi-pencil\"></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n  <!-- Objects Dependency Tree -->\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Objects Dependency Tree\" [gradient]=\"true\" [active]=\"true\">\r\n    <p-tree [value]=\"filesTree\" layout=\"horizontal\" selectionMode=\"single\"></p-tree>\r\n  </amexio-accordion-tab>\r\n\r\n  <!-- Table Index Fragmentation -->\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Table Index Fragmentation\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Index Name</div>\r\n      </div>\r\n      <div *ngFor=\"let Property of tableFragmentations\" class=\"row\">\r\n        <div class=\"cell\">\r\n          {{Property.indexName}}\r\n          <progress-bar [progress]=\"Property.percentFragmented\" [color-degraded]=\"{'0': 'green', '50': 'red'}\"></progress-bar>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n  <!-- Table Properties -->\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Table Properties\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Property</div>\r\n        <div class=\"cell\">Value</div>\r\n      </div>\r\n      <div *ngFor=\"let property of properties\" class=\"row\">\r\n        <div class=\"cell\">{{property.name}}</div>\r\n        <div class=\"cell\">{{property.value}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n  <!-- Table Columns -->\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Table Columns\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n\r\n        <div class=\"cell\">Name</div> \r\n        <div class=\"cell\">Data Type</div>\r\n        <div class=\"cell\">Key</div>\r\n        <div class=\"cell\">Max Length (Bytes)</div>\r\n        <div class=\"cell\">Is Nullable</div>\r\n        <div class=\"cell\">Identity</div>\r\n        <div class=\"cell\">Default</div>\r\n        <div class=\"cell\">Description</div>\r\n        <div *ngIf=\"hasEditPermission\" class=\"cell\">Actions</div>\r\n      </div>\r\n      <div *ngFor=\"let column of columns\" class=\"row\">\r\n        <div class=\"cell\">{{column.columnName}}</div>\r\n        <div class=\"cell\">{{column.dataType}}</div>\r\n        <div class=\"cell\">{{column.key}}</div>\r\n        <div class=\"cell\">{{column.maxLength}}</div>\r\n        <div class=\"cell\">{{column.allowNulls}}</div>\r\n        <div class=\"cell\">{{column.identity}}</div>\r\n        <div class=\"cell\">{{column.default}}</div>\r\n        <div class=\"cell\">{{column.description}}</div>\r\n        <div *ngIf=\"hasEditPermission\" class=\"cell\">\r\n          <button *ngIf=\"hasEditPermission\" pButton type=\"button\" icon=\"pi pi-pencil\" (click)=\"editColumnDescription(column)\"></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n  <!-- Table Indices -->\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Table Indices\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Name</div>\r\n        <div class=\"cell\">Columns Name</div>\r\n        <div class=\"cell\">Index Type</div>\r\n      </div>\r\n      <div *ngFor=\"let index of indices\" class=\"row\">\r\n        <div class=\"cell\">{{index.indexName}}</div>\r\n        <div class=\"cell\">{{index.columns}}</div>\r\n        <div class=\"cell\">{{index.indexType}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n  <!-- Table Key Constraints -->\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Table Key Constraints\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Table View</div>\r\n        <div class=\"cell\">Object Type</div>\r\n        <div class=\"cell\">Constraint Type</div>\r\n        <div class=\"cell\">Constraint Name</div>\r\n        <div class=\"cell\">Details</div>\r\n      </div>\r\n      <div *ngFor=\"let constraint of tableconstraint\" class=\"row\">\r\n        <div class=\"cell\">{{constraint.table_view}}</div>\r\n        <div class=\"cell\">{{constraint.object_type}}</div>\r\n        <div class=\"cell\">{{constraint.constraint_type}}</div>\r\n        <div class=\"cell\">{{constraint.constraint_name}}</div>\r\n        <div class=\"cell\">{{constraint.details}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n  <!-- Table Script -->\r\n  <!-- <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Table Script\" [gradient]=\"true\" [active]=\"true\">\r\n    <app-sql-script-viewer [script]=\"createScript.script\"></app-sql-script-viewer>\r\n  </amexio-accordion-tab> -->\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Create Script\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"code-container\">\r\n      <ngx-prism *ngIf=\"createScript.script\">\r\n        {{ createScript.script }}\r\n      </ngx-prism>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n</amexio-accordion>\r\n<div *ngIf=\"hasEditPermission\">\r\n  <app-edit-description-dialog\r\n  [displayDialog]=\"displayDialog\"\r\n  [selectedDescription]=\"selectedDescription\"\r\n  [hasEditPermission]=\"hasEditPermission\"\r\n  (save)=\"saveDescription()\"\r\n  (cancel)=\"cancelEdit()\">\r\n</app-edit-description-dialog>\r\n\r\n<app-edit-column-description-dialog\r\n  [displayColumnDialog]=\"displayColumnDialog\"\r\n  [selectedColumn]=\"selectedColumn\"\r\n  (saveColumnDescription)=\"saveColumnDescription()\"\r\n  (cancelColumnEdit)=\"cancelColumnEdit()\">\r\n</app-edit-column-description-dialog>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/table/components/tables/tables.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table/components/tables/tables.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<amexio-accordion [multi-open]=\"true\">\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Tables\" [active]=\"true\">\r\n    <p-table [columns]=\"cols\" [value]=\"tables\" dataKey=\"tableName\" [paginator]=\"true\" [rows]=\"10\">  \r\n      <ng-template pTemplate=\"header\" let-columns>\r\n        <tr>\r\n          <th style=\"width: 4em\"></th>\r\n          <th>Table Name</th>\r\n          <th>Description</th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-rowData let-expanded=\"expanded\" let-columns=\"columns\">\r\n        <tr>\r\n          <td>\r\n            <a href=\"#\" [pRowToggler]=\"rowData\">\r\n              <i [ngClass]=\"expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'\"></i>\r\n            </a>\r\n          </td>\r\n          <td class=\"cell\">{{rowData.tableName}}</td>\r\n          <td class=\"cell\">{{rowData.extendedPropertyValue}}</td>\r\n        </tr>\r\n      </ng-template>  \r\n      <ng-template pTemplate=\"rowexpansion\" let-rowData let-columns=\"columns\">\r\n        <tr>\r\n          <td [attr.colspan]=\"columns.length + 1\">\r\n            <div class=\"table\">\r\n              <div class=\"row header\">\r\n                <div class=\"cell\">Column Name</div>\r\n                <div class=\"cell\">Description</div>\r\n              </div>\r\n              <div class=\"row\" *ngFor=\"let columndetails of rowData.tableColumns\">\r\n                <div class=\"cell\">{{columndetails.columnName}}</div>\r\n                <div class=\"cell\">{{columndetails.extendedPropertyValue}}</div>\r\n              </div>\r\n            </div>\r\n            <hr />\r\n          </td>\r\n        </tr>\r\n      </ng-template>  \r\n    </p-table>\r\n  </amexio-accordion-tab>\r\n</amexio-accordion>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/footer/footer.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/footer/footer.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\"> \r\n   zzdfsdfsdf\r\n   sdf\r\n   sdas\r\n  </footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/header/header.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/header/header.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"header\">\r\n  <!--<div class=\"sql-settings\">\r\n    <label for=\"sql-server\">Select Database:</label>\r\n    <select id=\"sql-server\" (change)=\"onChangeServer($event)\">\r\n      <option value=\"server1\">SQL Server 1</option>\r\n      <option value=\"server2\">SQL Server 2</option>-->\r\n      <!-- Add more servers as needed -->\r\n    <!--</select>\r\n  </div>-->\r\n  <app-database-selector></app-database-selector>\r\n  </header>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/main-page/main-page.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/main-page/main-page.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<app-scalar-function></app-scalar-function>\r\n<app-aggregate-function></app-aggregate-function>\r\n<app-table-value-function></app-table-value-function>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view/components/view/view.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view/components/view/view.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" \r\n<amexio-accordion [multi-open]=\"true\">\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"View Name\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"view-name-container\">\r\n      <h5 class=\"view-title\">\r\n        <img src=\"./assets/icons/View.png\" class=\"view-icon\">\r\n        <span>{{ selectedViewName }}</span>\r\n      </h5>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"MS Description\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"ms-description-container\">\r\n      <div class=\"ms-description-content\">\r\n        <!-- Normal Text Display -->\r\n        <div class=\"col-10 description-text\" *ngIf=\"!iblnShowEditBox\">\r\n          <p>{{ selectedViewMetaData?.viewDetails[0]?.viewExtendedProperties }}</p>\r\n        </div>\r\n  \r\n        <!-- Edit Button -->\r\n        <div class=\"col-2 text-right edit-btn-container\" *ngIf=\"!iblnShowEditBox\">\r\n          <a (click)=\"EditView($event)\" class=\"edit-btn\">\r\n            <i class=\"fa fa-edit\"></i>\r\n          </a>\r\n        </div>\r\n      </div>\r\n  \r\n      <!-- Text Area for Editing -->\r\n      <div class=\"form-group edit-box\" *ngIf=\"iblnShowEditBox\">\r\n        <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"editedDescription\"></textarea>\r\n  \r\n        <!-- Action Buttons -->\r\n        <div class=\"text-right mt-2\">\r\n          <a (click)=\"CancelViewMsDesciption($event)\" class=\"btn btn-danger\">\r\n            <i class=\"fa fa-times\"></i> Cancel\r\n          </a>\r\n          <a (click)=\"SaveViewMsDesciption($event)\" class=\"btn btn-success\">\r\n            <i class=\"fa fa-save\"></i> Save\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  \r\n\r\n\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"View Properties\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Uses Ansi Nulls</div>\r\n        <div class=\"cell\">Uses Quoted Identifier</div>\r\n        <div class=\"cell\">Create Date</div>\r\n        <div class=\"cell\">Modify Date</div>\r\n      </div>\r\n      <div *ngFor=\"let Property of selectedViewMetaData.viewProperties\" class=\"row\">\r\n\r\n        <div class=\"cell\">{{Property.uses_ansi_nulls}} </div>\r\n        <div class=\"cell\">{{Property.uses_quoted_identifier}}</div>\r\n        <div class=\"cell\">{{Property.create_date}}</div>\r\n        <div class=\"cell\">{{Property.modify_date}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Columns\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Column Order</div>\r\n        <div class=\"cell\">Column Name</div>\r\n        <div class=\"cell\">Data Type</div>\r\n        <div class=\"cell\">Max Length</div>\r\n        <div class=\"cell\">Precision</div>\r\n        <div class=\"cell\">Scale</div>\r\n      </div>\r\n      <div *ngFor=\"let Property of selectedViewMetaData.viewColumns \" class=\"row\">\r\n\r\n        <div class=\"cell\">{{Property.columnOrder}} </div>\r\n        <div class=\"cell\">{{Property.columnName}}</div>\r\n        <div class=\"cell\">{{Property.dataType}}</div>\r\n        <div class=\"cell\">{{Property.maxLength}}</div>\r\n        <div class=\"cell\">{{Property.precision}}</div>\r\n        <div class=\"cell\">{{Property.scale}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Create Script \" [gradient]=\"true\" [active]=\"true\">\r\n    {{selectedViewMetaData.viewCreateScript.createViewScript}}\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Used By \" [gradient]=\"true\" [active]=\"true\">\r\n\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">View Dependency Name</div>\r\n        <div class=\"cell\">Type</div>\r\n        <div class=\"cell\">Updated</div>\r\n        <div class=\"cell\">Selected</div>\r\n        <div class=\"cell\">Column Name</div>\r\n        <div class=\"cell\">Full Reference Name</div>\r\n      </div>\r\n      <div *ngFor=\"let Property of selectedViewMetaData.viewDependencies \" class=\"row\">\r\n        <a class=\"cell\">{{Property.name}}</a>\r\n        <div class=\"cell\">{{Property.type}}</div>\r\n        <div class=\"cell\">{{Property.updated}}</div>\r\n        <div class=\"cell\">{{Property.selected}}</div>\r\n        <div class=\"cell\">{{Property.column_name}}</div>\r\n        <div class=\"cell\">{{Property.fullReferenceName}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n</amexio-accordion>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view/components/views/views.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view/components/views/views.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Store Procerdure Extended Properties\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">View</div>\r\n        <div class=\"cell\">Extended Properties Value</div> \r\n      </div> \r\n      <div *ngFor=\"let description of viewDetails\" class=\"row\">\r\n        <div class=\"cell\">{{description.viewName}}</div>\r\n        <div class=\"cell\">{{description.viewExtendedProperties}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
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
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
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


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/UserDefinedDataType/components/user-defined-data-type/user-defined-data-type.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/UserDefinedDataType/components/user-defined-data-type/user-defined-data-type.component.css ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    width: 80%;\r\n    margin: auto;\r\n  }\r\n  \r\n  table {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n  }\r\n  \r\n  th, td {\r\n    border: 1px solid #ddd;\r\n    padding: 10px;\r\n    text-align: left;\r\n  }\r\n  \r\n  th {\r\n    background-color: #f4f4f4;\r\n  }\r\n  \r\n  button {\r\n    padding: 5px 10px;\r\n    border: none;\r\n    background-color: #007bff;\r\n    color: white;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  button:hover {\r\n    background-color: #0056b3;\r\n  }\r\n  \r\n  input {\r\n    margin-right: 10px;\r\n    padding: 5px;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItZGVmaW5lZC1kYXRhLXR5cGUvdXNlci1kZWZpbmVkLWRhdGEtdHlwZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7SUFDWCx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZCIsImZpbGUiOiJ1c2VyLWRlZmluZWQtZGF0YS10eXBlL3VzZXItZGVmaW5lZC1kYXRhLXR5cGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIH1cclxuICBcclxuICB0aCwgdGQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICB0aCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG4gIH1cclxuICBcclxuICBidXR0b24ge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/UserDefinedDataType/components/user-defined-data-type/user-defined-data-type.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/UserDefinedDataType/components/user-defined-data-type/user-defined-data-type.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: UserDefinedDataTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDefinedDataTypeComponent", function() { return UserDefinedDataTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_defined_data_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user-defined-data-type.service */ "./src/app/UserDefinedDataType/services/user-defined-data-type.service.ts");



let UserDefinedDataTypeComponent = class UserDefinedDataTypeComponent {
    constructor(dataTypeService) {
        this.dataTypeService = dataTypeService;
        this.userDefinedDataTypes = [];
        this.selectedDataType = null;
        this.newDescription = '';
    }
    ngOnInit() {
        this.loadDataTypes();
    }
    loadDataTypes() {
        this.dataTypeService.getAllUserDefinedDataTypes().subscribe((data) => {
            this.userDefinedDataTypes = data;
        });
    }
    loadDetails(schemaName, typeName) {
        this.dataTypeService.getUserDefinedDataTypeDetails(schemaName, typeName).subscribe((data) => {
            this.selectedDataType = data;
        });
    }
    updateDescription() {
        if (!this.selectedDataType)
            return;
        const request = {
            schemaName: this.selectedDataType.name.split('.')[0],
            typeName: this.selectedDataType.name.split('.')[1],
            description: this.newDescription,
        };
        this.dataTypeService.upsertExtendedProperty(request).subscribe((response) => {
            alert(response);
            this.loadDataTypes(); // Refresh the list
        });
    }
};
UserDefinedDataTypeComponent.ctorParameters = () => [
    { type: _services_user_defined_data_type_service__WEBPACK_IMPORTED_MODULE_2__["UserDefinedDataTypeService"] }
];
UserDefinedDataTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-defined-data-type',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-defined-data-type.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/UserDefinedDataType/components/user-defined-data-type/user-defined-data-type.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-defined-data-type.component.css */ "./src/app/UserDefinedDataType/components/user-defined-data-type/user-defined-data-type.component.css")).default]
    })
], UserDefinedDataTypeComponent);



/***/ }),

/***/ "./src/app/UserDefinedDataType/components/user-defined-data-types/user-defined-data-types.component.css":
/*!**************************************************************************************************************!*\
  !*** ./src/app/UserDefinedDataType/components/user-defined-data-types/user-defined-data-types.component.css ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWRlZmluZWQtZGF0YS10eXBlcy91c2VyLWRlZmluZWQtZGF0YS10eXBlcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/UserDefinedDataType/components/user-defined-data-types/user-defined-data-types.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/UserDefinedDataType/components/user-defined-data-types/user-defined-data-types.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: UserDefinedDataTypesComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDefinedDataTypesComponents", function() { return UserDefinedDataTypesComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserDefinedDataTypesComponents = class UserDefinedDataTypesComponents {
    constructor() { }
    ngOnInit() {
    }
};
UserDefinedDataTypesComponents = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-defined-data-types',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-defined-data-types.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/UserDefinedDataType/components/user-defined-data-types/user-defined-data-types.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-defined-data-types.component.css */ "./src/app/UserDefinedDataType/components/user-defined-data-types/user-defined-data-types.component.css")).default]
    })
], UserDefinedDataTypesComponents);



/***/ }),

/***/ "./src/app/UserDefinedDataType/services/user-defined-data-type.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/UserDefinedDataType/services/user-defined-data-type.service.ts ***!
  \********************************************************************************/
/*! exports provided: UserDefinedDataTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDefinedDataTypeService", function() { return UserDefinedDataTypeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserDefinedDataTypeService = class UserDefinedDataTypeService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:5000/UserDefinedDataType'; // Change as needed
    }
    getAllUserDefinedDataTypes() {
        return this.http.get(`${this.apiUrl}/all`);
    }
    getUserDefinedDataTypeDetails(schemaName, typeName) {
        return this.http.get(`${this.apiUrl}/details/${schemaName}/${typeName}`);
    }
    upsertExtendedProperty(request) {
        return this.http.post(`${this.apiUrl}/upsert-extended-property`, request);
    }
};
UserDefinedDataTypeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserDefinedDataTypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], UserDefinedDataTypeService);



/***/ }),

/***/ "./src/app/UserDefinedDataType/user-defined-data-types/user-defined-data-types.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/UserDefinedDataType/user-defined-data-types/user-defined-data-types.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: UserDefinedDataTypesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDefinedDataTypesModule", function() { return UserDefinedDataTypesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_user_defined_data_type_user_defined_data_type_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/user-defined-data-type/user-defined-data-type.component */ "./src/app/UserDefinedDataType/components/user-defined-data-type/user-defined-data-type.component.ts");
/* harmony import */ var _services_user_defined_data_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user-defined-data-type.service */ "./src/app/UserDefinedDataType/services/user-defined-data-type.service.ts");
/* harmony import */ var _components_user_defined_data_types_user_defined_data_types_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/user-defined-data-types/user-defined-data-types.component */ "./src/app/UserDefinedDataType/components/user-defined-data-types/user-defined-data-types.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






 // 
let UserDefinedDataTypesModule = class UserDefinedDataTypesModule {
};
UserDefinedDataTypesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_user_defined_data_type_user_defined_data_type_component__WEBPACK_IMPORTED_MODULE_3__["UserDefinedDataTypeComponent"], _components_user_defined_data_types_user_defined_data_types_component__WEBPACK_IMPORTED_MODULE_5__["UserDefinedDataTypesComponents"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ],
        providers: [_services_user_defined_data_type_service__WEBPACK_IMPORTED_MODULE_4__["UserDefinedDataTypeService"]],
        exports: [_components_user_defined_data_type_user_defined_data_type_component__WEBPACK_IMPORTED_MODULE_3__["UserDefinedDataTypeComponent"], _components_user_defined_data_types_user_defined_data_types_component__WEBPACK_IMPORTED_MODULE_5__["UserDefinedDataTypesComponents"]],
    })
], UserDefinedDataTypesModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" #asSplitArea2{\r\n  height: 85vh !important;\r\n}\r\n#asSplitArea1 {\r\n  height: 85vh !important;\r\n}\r\n/* Split bar visibility */\r\n.HideSplitBar {\r\n  flex: 0 0 0 !important;\r\n}\r\n.HideSplitBar div {\r\n  display: none !important;\r\n}\r\n.showSplitBar div {\r\n  display: block !important;\r\n}\r\n/* Full-page and partial modes */\r\n.ShowFullPageMode {\r\n  order: 2;\r\n  flex: 0 0 calc(100% - 15px) !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDO0VBQ0MsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQSx5QkFBeUI7QUFDekI7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUEsZ0NBQWdDO0FBQ2hDO0VBQ0UsUUFBUTtFQUNSLHNDQUFzQztBQUN4QyIsImZpbGUiOiIuLi8uLi9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAjYXNTcGxpdEFyZWEye1xyXG4gIGhlaWdodDogODV2aCAhaW1wb3J0YW50O1xyXG59XHJcbiNhc1NwbGl0QXJlYTEge1xyXG4gIGhlaWdodDogODV2aCAhaW1wb3J0YW50O1xyXG59XHJcbi8qIFNwbGl0IGJhciB2aXNpYmlsaXR5ICovXHJcbi5IaWRlU3BsaXRCYXIge1xyXG4gIGZsZXg6IDAgMCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5IaWRlU3BsaXRCYXIgZGl2IHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaG93U3BsaXRCYXIgZGl2IHtcclxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBGdWxsLXBhZ2UgYW5kIHBhcnRpYWwgbW9kZXMgKi9cclxuLlNob3dGdWxsUGFnZU1vZGUge1xyXG4gIG9yZGVyOiAyO1xyXG4gIGZsZXg6IDAgMCBjYWxjKDEwMCUgLSAxNXB4KSAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.status = false;
    }
    log(type, e) {
        switch (type) {
            case "gutterDblClick":
            case "gutterClick":
                {
                    this.status = !this.status;
                }
                break;
            case "dragEnd":
                break;
            case "dragStart":
                break;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('area1', { static: false })
], AppComponent.prototype, "mySplitEl1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('area2', { static: false })
], AppComponent.prototype, "mySplitEl2", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        host: {
            'class': 'Maincontent'
        },
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _ngx_prism_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-prism/core */ "./node_modules/@ngx-prism/core/dist/index.js");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/breadcrumb */ "./node_modules/primeng/fesm2015/primeng-breadcrumb.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-split */ "./node_modules/angular-split/fesm2015/angular-split.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/fesm2015/primeng-accordion.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/fesm2015/primeng-table.js");
/* harmony import */ var angular_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-progress-bar */ "./node_modules/angular-progress-bar/fesm2015/angular-progress-bar.js");
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/tree */ "./node_modules/primeng/fesm2015/primeng-tree.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/contextmenu */ "./node_modules/primeng/fesm2015/primeng-contextmenu.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/fesm2015/primeng-tabview.js");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/codehighlighter */ "./node_modules/primeng/fesm2015/primeng-codehighlighter.js");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm2015/angular2-multiselect-dropdown.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ui_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ui/main-page/main-page.component */ "./src/app/ui/main-page/main-page.component.ts");
/* harmony import */ var _ui_header_header_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ui/header/header.component */ "./src/app/ui/header/header.component.ts");
/* harmony import */ var _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ui/footer/footer.component */ "./src/app/ui/footer/footer.component.ts");
/* harmony import */ var _table_tables_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./table/tables.module */ "./src/app/table/tables.module.ts");
/* harmony import */ var _database_database_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./database/database.module */ "./src/app/database/database.module.ts");
/* harmony import */ var _left_menu_components_leftmenu_leftmenu_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./left-menu/components/leftmenu/leftmenu.component */ "./src/app/left-menu/components/leftmenu/leftmenu.component.ts");
/* harmony import */ var _procedure_procedure_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./procedure/procedure.module */ "./src/app/procedure/procedure.module.ts");
/* harmony import */ var _database_components_database_selector_database_selector_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./database/components/database-selector/database-selector.component */ "./src/app/database/components/database-selector/database-selector.component.ts");
/* harmony import */ var _function_function_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./function/function.module */ "./src/app/function/function.module.ts");
/* harmony import */ var _view_views_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./view/views.module */ "./src/app/view/views.module.ts");
/* harmony import */ var _UserDefinedDataType_user_defined_data_types_user_defined_data_types_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./UserDefinedDataType/user-defined-data-types/user-defined-data-types.module */ "./src/app/UserDefinedDataType/user-defined-data-types/user-defined-data-types.module.ts");







 // <----- Here
























//import { AppRoutingModule } from './app-routing.module';












const appRoutes = [];
const ngxUiLoaderConfig = {
    "bgsColor": "#1c749a",
    "bgsOpacity": 0.7,
    "bgsPosition": "center-center",
    "bgsSize": 80,
    "bgsType": "ball-spin-clockwise",
    "blur": 5,
    "delay": 0,
    "fgsColor": "#1c749a",
    "fgsPosition": "center-center",
    "fgsSize": 60,
    "fgsType": "ball-spin-clockwise",
    "gap": 10,
    "logoPosition": "center-center",
    "logoSize": 120,
    "logoUrl": "",
    "masterLoaderId": "master",
    "overlayBorderRadius": "0",
    "overlayColor": "rgba(40, 40, 40, 0.8)",
    "pbColor": "red",
    "pbDirection": "ltr",
    "pbThickness": 1,
    "hasProgressBar": true,
    "text": "Loading",
    "textColor": "#FFFFFF",
    "textPosition": "center-center",
    "maxTime": -1,
    "minTime": 300
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _ui_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_28__["MainPageComponent"],
            _ui_header_header_component__WEBPACK_IMPORTED_MODULE_29__["HeaderComponent"],
            _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_30__["FooterComponent"],
            _left_menu_components_leftmenu_leftmenu_component__WEBPACK_IMPORTED_MODULE_33__["LeftmenuComponent"],
            _database_components_database_selector_database_selector_component__WEBPACK_IMPORTED_MODULE_35__["DatabaseSelectorComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_10__["AmexioDataModule"],
            amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_10__["AmexioWidgetModule"],
            amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_10__["AmexioChartsModule"],
            amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_10__["AmexioEnterpriseModule"],
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_14__["AngularFontAwesomeModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            angular_split__WEBPACK_IMPORTED_MODULE_15__["AngularSplitModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterModule"].forRoot(appRoutes, { useHash: true }),
            _ngx_prism_core__WEBPACK_IMPORTED_MODULE_7__["PrismModule"],
            primeng_tree__WEBPACK_IMPORTED_MODULE_20__["TreeModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_21__["ToastModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_22__["ButtonModule"],
            primeng_contextmenu__WEBPACK_IMPORTED_MODULE_23__["ContextMenuModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_24__["TabViewModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_25__["CodeHighlighterModule"],
            primeng_accordion__WEBPACK_IMPORTED_MODULE_17__["AccordionModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_18__["TableModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
            angular_progress_bar__WEBPACK_IMPORTED_MODULE_19__["ProgressBarModule"],
            primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_11__["NgxUiLoaderModule"].forRoot(ngxUiLoaderConfig),
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_11__["NgxUiLoaderHttpModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["ModalModule"].forRoot(),
            angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_26__["AngularMultiSelectModule"],
            _view_views_module__WEBPACK_IMPORTED_MODULE_37__["ViewModule"],
            _table_tables_module__WEBPACK_IMPORTED_MODULE_31__["TablesModule"],
            _database_database_module__WEBPACK_IMPORTED_MODULE_32__["DatabaseModule"],
            _procedure_procedure_module__WEBPACK_IMPORTED_MODULE_34__["ProcedureModule"],
            _function_function_module__WEBPACK_IMPORTED_MODULE_36__["FunctionModule"],
            _UserDefinedDataType_user_defined_data_types_user_defined_data_types_module__WEBPACK_IMPORTED_MODULE_38__["UserDefinedDataTypesModule"]
        ],
        providers: [
            {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"],
                useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["HashLocationStrategy"]
            },
            primeng_api__WEBPACK_IMPORTED_MODULE_16__["TreeDragDropService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_16__["MessageService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/database/components/database-details/database-details.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/database/components/database-details/database-details.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n#Objects li:last-child {\r\n    display: none;\r\n  }\r\n  .table {\r\n  margin:  0px 0 3px 0;\r\n    width: 100%;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n    display: table;\r\n  }\r\n  @media screen and (max-width: 580px) {\r\n    .table {\r\n      display: block;\r\n    }\r\n  }\r\n  .row {\r\n    display: table-row;\r\n    background: #f6f6f6;\r\n  }\r\n  .row:nth-of-type(odd) {\r\n      background: #e9e9e9;\r\n    }\r\n  .row.header {\r\n      font-weight: 900;\r\n      color: #ffffff;\r\n      background: #184569 !important;\r\n    }\r\n  .row.green {\r\n      background: #27ae60;\r\n    }\r\n  .row.blue {\r\n      background: #2980b9;\r\n    }\r\n  @media screen and (max-width: 580px) {\r\n    .row {\r\n      padding: 14px 0 7px;\r\n      display: block;\r\n    }\r\n  \r\n      .row.header {\r\n        padding: 0;\r\n        height: 6px;\r\n      }\r\n  \r\n        .row.header .cell {\r\n          display: none;\r\n        }\r\n  \r\n      .row .cell {\r\n        margin-bottom: 10px;\r\n      }\r\n  \r\n        .row .cell:before {\r\n          margin-bottom: 3px;\r\n          content: attr(data-title);\r\n          min-width: 98px;\r\n          font-size: 10px;\r\n          line-height: 10px;\r\n          font-weight: bold;\r\n          text-transform: uppercase;\r\n          color: #969696;\r\n          display: block;\r\n        }\r\n  }\r\n  .cell {\r\n  /*  padding: 6px 12px; */\r\n    display: table-cell;\r\n  }\r\n  @media screen and (max-width: 580px) {\r\n    .cell {\r\n      padding: 2px 16px;\r\n      display: block;\r\n    }\r\n  }\r\n  .node:hover {\r\n    fill: #ec008c;\r\n    opacity: 1;\r\n  }\r\n  .modal-dialog {\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  .modal-content {\r\n    height: auto;\r\n    min-height: 100%;\r\n    border: 0 none;\r\n    border-radius: 0;\r\n    box-shadow: none;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2RhdGFiYXNlL2NvbXBvbmVudHMvZGF0YWJhc2UtZGV0YWlscy9kYXRhYmFzZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtFQUNmO0VBQ0E7RUFDQSxvQkFBb0I7SUFDbEIsV0FBVztJQUNYLHdDQUF3QztJQUN4QyxjQUFjO0VBQ2hCO0VBRUE7SUFDRTtNQUNFLGNBQWM7SUFDaEI7RUFDRjtFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjtFQUVFO01BQ0UsbUJBQW1CO0lBQ3JCO0VBRUE7TUFDRSxnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLDhCQUE4QjtJQUNoQztFQUVBO01BQ0UsbUJBQW1CO0lBQ3JCO0VBRUE7TUFDRSxtQkFBbUI7SUFDckI7RUFFRjtJQUNFO01BQ0UsbUJBQW1CO01BQ25CLGNBQWM7SUFDaEI7O01BRUU7UUFDRSxVQUFVO1FBQ1YsV0FBVztNQUNiOztRQUVFO1VBQ0UsYUFBYTtRQUNmOztNQUVGO1FBQ0UsbUJBQW1CO01BQ3JCOztRQUVFO1VBQ0Usa0JBQWtCO1VBQ2xCLHlCQUF5QjtVQUN6QixlQUFlO1VBQ2YsZUFBZTtVQUNmLGlCQUFpQjtVQUNqQixpQkFBaUI7VUFDakIseUJBQXlCO1VBQ3pCLGNBQWM7VUFDZCxjQUFjO1FBQ2hCO0VBQ047RUFFQTtFQUNBLHdCQUF3QjtJQUN0QixtQkFBbUI7RUFDckI7RUFFQTtJQUNFO01BQ0UsaUJBQWlCO01BQ2pCLGNBQWM7SUFDaEI7RUFDRjtFQUNBO0lBQ0UsYUFBYTtJQUNiLFVBQVU7RUFDWjtFQUdBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtFQUNaO0VBRUE7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6Ii4uLy4uL2RhdGFiYXNlL2NvbXBvbmVudHMvZGF0YWJhc2UtZGV0YWlscy9kYXRhYmFzZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI09iamVjdHMgbGk6bGFzdC1jaGlsZCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAudGFibGUge1xyXG4gIG1hcmdpbjogIDBweCAwIDNweCAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgICAudGFibGUge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG4gIH1cclxuICBcclxuICAgIC5yb3c6bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlOWU5ZTk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucm93LmhlYWRlciB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMTg0NTY5ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucm93LmdyZWVuIHtcclxuICAgICAgYmFja2dyb3VuZDogIzI3YWU2MDtcclxuICAgIH1cclxuICBcclxuICAgIC5yb3cuYmx1ZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMyOTgwYjk7XHJcbiAgICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAgIC5yb3cge1xyXG4gICAgICBwYWRkaW5nOiAxNHB4IDAgN3B4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICBcclxuICAgICAgLnJvdy5oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiA2cHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgICAucm93LmhlYWRlciAuY2VsbCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgLnJvdyAuY2VsbCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5yb3cgLmNlbGw6YmVmb3JlIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDk4cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgIGNvbG9yOiAjOTY5Njk2O1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gIH1cclxuICBcclxuICAuY2VsbCB7XHJcbiAgLyogIHBhZGRpbmc6IDZweCAxMnB4OyAqL1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAgIC5jZWxsIHtcclxuICAgICAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuICAubm9kZTpob3ZlciB7XHJcbiAgICBmaWxsOiAjZWMwMDhjO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLm1vZGFsLWRpYWxvZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IDAgbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/database/components/database-details/database-details.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/database/components/database-details/database-details.component.ts ***!
  \************************************************************************************/
/*! exports provided: DatabaseDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseDetailsComponent", function() { return DatabaseDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_database_metadata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/database-metadata.service */ "./src/app/database/service/database-metadata.service.ts");



let DatabaseDetailsComponent = class DatabaseDetailsComponent {
    constructor(databaseMetadataService) {
        this.databaseMetadataService = databaseMetadataService;
        this.objectTypeItems = [];
    }
    ngOnInit() {
        this.loadDatabaseMetadata();
    }
    loadDatabaseMetadata() {
        this.databaseMetadataService.getDatabaseMetaData().subscribe({
            next: (databaseMetaData) => {
                if (databaseMetaData) {
                    this.databaseMetaData = databaseMetaData;
                    this.initializeObjectTypeItems();
                }
            },
            error: (error) => this.handleLoadError(error)
        });
    }
    initializeObjectTypeItems() {
        const metadataConfig = [
            { icon: 'Table.png', label: 'Tables', data: this.databaseMetaData.tablesMetadata },
            { icon: 'View.png', label: 'View', data: this.databaseMetaData.viewMetadata },
            { icon: 'StoredProcedure.png', label: 'Stored Procedure', data: this.databaseMetaData.procedureInfos },
            { icon: 'Function_Table.png', label: 'Table-Valued Functions', data: this.databaseMetaData.tableFunctionInfos },
            { icon: 'Function_Scalar.png', label: 'Scalar-Valued Functions', data: this.databaseMetaData.scalarFunctionInfos },
            { icon: 'DdlTrigger.png', label: 'Database Triggers', data: this.databaseMetaData.triggerInfos },
            { icon: 'UserDefinedDataType.png', label: 'User-Defined Data Types', data: this.databaseMetaData.userTypes },
            { icon: 'XmlSchemaCollection.png', label: 'XML Schema Collections', data: this.databaseMetaData.dbXmlSchemas }
        ];
        this.objectTypeItems = metadataConfig.map(item => ({
            icon: `./assets/icons/${item.icon}`,
            label: item.label,
            count: item.data.length,
            visible: !!item.data.length
        }));
    }
    handleLoadError(error) {
        console.error('Failed to load database metadata:', error);
    }
};
DatabaseDetailsComponent.ctorParameters = () => [
    { type: _service_database_metadata_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseMetadataService"] }
];
DatabaseDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-database-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./database-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/database/components/database-details/database-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./database-details.component.css */ "./src/app/database/components/database-details/database-details.component.css")).default]
    })
], DatabaseDetailsComponent);



/***/ }),

/***/ "./src/app/database/components/database-selector/database-selector.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/database/components/database-selector/database-selector.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Container for database selection */\r\n.database-selector-container {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  background-color: #1b3a57;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  margin-bottom: 10px;\r\n}\r\nlabel {\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n.database-dropdown {\r\n  padding: 5px;\r\n  border-radius: 4px;\r\n  border: 1px solid #ccc;\r\n  background-color: white;\r\n  color: black;\r\n  font-size: 14px;\r\n  min-width: 220px; /* Wider for better readability */\r\n}\r\n.change-db-button {\r\n  background-color: #007bff;\r\n  color: white;\r\n  border: none;\r\n  padding: 8px 12px;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n}\r\n.change-db-button:hover {\r\n    background-color: #0056b3;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2RhdGFiYXNlL2NvbXBvbmVudHMvZGF0YWJhc2Utc2VsZWN0b3IvZGF0YWJhc2Utc2VsZWN0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBcUM7QUFDckM7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQixFQUFFLGlDQUFpQztBQUNyRDtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUU7SUFDRSx5QkFBeUI7RUFDM0IiLCJmaWxlIjoiLi4vLi4vZGF0YWJhc2UvY29tcG9uZW50cy9kYXRhYmFzZS1zZWxlY3Rvci9kYXRhYmFzZS1zZWxlY3Rvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29udGFpbmVyIGZvciBkYXRhYmFzZSBzZWxlY3Rpb24gKi9cclxuLmRhdGFiYXNlLXNlbGVjdG9yLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIzYTU3O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5kYXRhYmFzZS1kcm9wZG93biB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWluLXdpZHRoOiAyMjBweDsgLyogV2lkZXIgZm9yIGJldHRlciByZWFkYWJpbGl0eSAqL1xyXG59XHJcblxyXG4uY2hhbmdlLWRiLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4gIC5jaGFuZ2UtZGItYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XHJcbiAgfVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/database/components/database-selector/database-selector.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/database/components/database-selector/database-selector.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DatabaseSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseSelectorComponent", function() { return DatabaseSelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_database_metadata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/database-metadata.service */ "./src/app/database/service/database-metadata.service.ts");



let DatabaseSelectorComponent = class DatabaseSelectorComponent {
    constructor(databaseService) {
        this.databaseService = databaseService;
        this.selectedDatabase = '';
        this.databases = []; // List of available databases
    }
    ngOnInit() {
        this.loadDatabases();
    }
    // Load available databases from backend
    loadDatabases() {
        this.databaseService.getDatabases().subscribe((response) => {
            this.databases = response;
            // Set default to the currently active database
            this.getCurrentDatabase();
        }, (error) => console.error('❌ Error fetching databases:', error));
    }
    // Get the currently active database
    getCurrentDatabase() {
        this.databaseService.getCurrentDatabase().subscribe((response) => {
            this.selectedDatabase = response.database;
        }, (error) => console.error('❌ Error fetching current database:', error));
    }
    // Change the database
    onChangeDatabase() {
        this.databaseService.changeDatabase(this.selectedDatabase).subscribe((response) => {
            console.log(response);
            window.location.reload(); // 🔄 Force full reload
        }, (error) => {
            console.error('❌ Error changing database:', error);
            alert('Failed to change database. Please try again.');
        });
    }
};
DatabaseSelectorComponent.ctorParameters = () => [
    { type: _service_database_metadata_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseMetadataService"] }
];
DatabaseSelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-database-selector',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./database-selector.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/database/components/database-selector/database-selector.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./database-selector.component.css */ "./src/app/database/components/database-selector/database-selector.component.css")).default]
    })
], DatabaseSelectorComponent);



/***/ }),

/***/ "./src/app/database/components/object-type-item/object-type-item.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/database/components/object-type-item/object-type-item.component.ts ***!
  \************************************************************************************/
/*! exports provided: ObjectTypeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectTypeItemComponent", function() { return ObjectTypeItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ObjectTypeItemComponent = class ObjectTypeItemComponent {
    constructor() {
        this.icon = '';
        this.label = '';
        this.visible = true;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ObjectTypeItemComponent.prototype, "icon", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ObjectTypeItemComponent.prototype, "label", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ObjectTypeItemComponent.prototype, "count", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ObjectTypeItemComponent.prototype, "visible", void 0);
ObjectTypeItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-object-type-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./object-type-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/database/components/object-type-item/object-type-item.component.html")).default
    })
], ObjectTypeItemComponent);



/***/ }),

/***/ "./src/app/database/database.module.ts":
/*!*********************************************!*\
  !*** ./src/app/database/database.module.ts ***!
  \*********************************************/
/*! exports provided: DatabaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseModule", function() { return DatabaseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/fesm2015/primeng-accordion.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/fesm2015/primeng-table.js");
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tree */ "./node_modules/primeng/fesm2015/primeng-tree.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/contextmenu */ "./node_modules/primeng/fesm2015/primeng-contextmenu.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/fesm2015/primeng-tabview.js");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/codehighlighter */ "./node_modules/primeng/fesm2015/primeng-codehighlighter.js");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/breadcrumb */ "./node_modules/primeng/fesm2015/primeng-breadcrumb.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var _service_database_metadata_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/database-metadata.service */ "./src/app/database/service/database-metadata.service.ts");
/* harmony import */ var _components_object_type_item_object_type_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/object-type-item/object-type-item.component */ "./src/app/database/components/object-type-item/object-type-item.component.ts");
/* harmony import */ var _components_database_details_database_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/database-details/database-details.component */ "./src/app/database/components/database-details/database-details.component.ts");

















let DatabaseModule = class DatabaseModule {
};
DatabaseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_database_details_database_details_component__WEBPACK_IMPORTED_MODULE_16__["DatabaseDetailsComponent"], _components_object_type_item_object_type_item_component__WEBPACK_IMPORTED_MODULE_15__["ObjectTypeItemComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_3__["AmexioDataModule"],
            amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_3__["AmexioWidgetModule"],
            amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_3__["AmexioChartsModule"],
            amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_3__["AmexioEnterpriseModule"],
            primeng_accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"],
            primeng_tree__WEBPACK_IMPORTED_MODULE_6__["TreeModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_7__["ToastModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
            primeng_contextmenu__WEBPACK_IMPORTED_MODULE_9__["ContextMenuModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_10__["TabViewModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_11__["CodeHighlighterModule"],
            primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_12__["BreadcrumbModule"]
        ],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_13__["TreeDragDropService"], primeng_api__WEBPACK_IMPORTED_MODULE_13__["MessageService"], _service_database_metadata_service__WEBPACK_IMPORTED_MODULE_14__["DatabaseMetadataService"]],
        exports: [_components_database_details_database_details_component__WEBPACK_IMPORTED_MODULE_16__["DatabaseDetailsComponent"]]
    })
], DatabaseModule);



/***/ }),

/***/ "./src/app/database/service/database-metadata.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/database/service/database-metadata.service.ts ***!
  \***************************************************************/
/*! exports provided: DatabaseMetadataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseMetadataService", function() { return DatabaseMetadataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let DatabaseMetadataService = class DatabaseMetadataService {
    constructor(http, primaryUrl, secondaryUrl) {
        this.http = http;
        this.primaryUrl = primaryUrl;
        this.secondaryUrl = secondaryUrl;
    }
    getDatabaseMetaData() {
        const primaryUrl = `${this.primaryUrl}/Database/database-meta-data`;
        const secondaryUrl = 'Database/database-meta-data';
        return this.http.get(primaryUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((primaryError) => {
            console.error('Primary URL failed, trying secondary URL:', primaryError);
            return this.http.get(secondaryUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((secondaryError) => {
                console.error('Secondary URL also failed:', secondaryError);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }));
        }));
    }
    changeDatabase(databaseName) {
        return this.http.post(`${this.primaryUrl}/Database/ChangeDatabase`, { databaseName });
    }
    // Get list of available databases
    getDatabases() {
        return this.http.get(`${this.primaryUrl}/Database/list`);
    }
    // Get the currently active database
    getCurrentDatabase() {
        return this.http.get(`${this.primaryUrl}/Database/current`);
    }
};
DatabaseMetadataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['API_URL',] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['ANOTHER_URL',] }] }
];
DatabaseMetadataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('API_URL')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('ANOTHER_URL'))
], DatabaseMetadataService);



/***/ }),

/***/ "./src/app/function/component/aggregate-function/aggregate-function.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/function/component/aggregate-function/aggregate-function.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table {\r\n    margin: 0px 0 3px 0;\r\n    width: 100%;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n    display: table;\r\n  }\r\n  \r\n  @media screen and (max-width: 580px) {\r\n    .table {\r\n      display: block;\r\n    }\r\n  }\r\n  \r\n  .row {\r\n    display: table-row;\r\n    background: #f6f6f6;\r\n  }\r\n  \r\n  .row:nth-of-type(odd) {\r\n      background: #e9e9e9;\r\n    }\r\n  \r\n  .row.header {\r\n      font-weight: 900;\r\n      color: #ffffff;\r\n      background: #184569 !important;\r\n    }\r\n  \r\n  .row.green {\r\n      background: #27ae60;\r\n    }\r\n  \r\n  .row.blue {\r\n      background: #2980b9;\r\n    }\r\n  \r\n  @media screen and (max-width: 580px) {\r\n    .row {\r\n      padding: 14px 0 7px;\r\n      display: block;\r\n    }\r\n  \r\n      .row.header {\r\n        padding: 0;\r\n        height: 6px;\r\n      }\r\n  \r\n        .row.header .cell {\r\n          display: none;\r\n        }\r\n  \r\n      .row .cell {\r\n        margin-bottom: 10px;\r\n      }\r\n  \r\n        .row .cell:before {\r\n          margin-bottom: 3px;\r\n          content: attr(data-title);\r\n          min-width: 98px;\r\n          font-size: 10px;\r\n          line-height: 10px;\r\n          font-weight: bold;\r\n          text-transform: uppercase;\r\n          color: #969696;\r\n          display: block;\r\n        }\r\n  }\r\n  \r\n  .cell {\r\n    /*  padding: 6px 12px; */\r\n    display: table-cell;\r\n  }\r\n  \r\n  @media screen and (max-width: 580px) {\r\n    .cell {\r\n      padding: 2px 16px;\r\n      display: block;\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2Z1bmN0aW9uL2NvbXBvbmVudC9hZ2dyZWdhdGUtZnVuY3Rpb24vYWdncmVnYXRlLWZ1bmN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHdDQUF3QztJQUN4QyxjQUFjO0VBQ2hCOztFQUVBO0lBQ0U7TUFDRSxjQUFjO0lBQ2hCO0VBQ0Y7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVFO01BQ0UsbUJBQW1CO0lBQ3JCOztFQUVBO01BQ0UsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCw4QkFBOEI7SUFDaEM7O0VBRUE7TUFDRSxtQkFBbUI7SUFDckI7O0VBRUE7TUFDRSxtQkFBbUI7SUFDckI7O0VBRUY7SUFDRTtNQUNFLG1CQUFtQjtNQUNuQixjQUFjO0lBQ2hCOztNQUVFO1FBQ0UsVUFBVTtRQUNWLFdBQVc7TUFDYjs7UUFFRTtVQUNFLGFBQWE7UUFDZjs7TUFFRjtRQUNFLG1CQUFtQjtNQUNyQjs7UUFFRTtVQUNFLGtCQUFrQjtVQUNsQix5QkFBeUI7VUFDekIsZUFBZTtVQUNmLGVBQWU7VUFDZixpQkFBaUI7VUFDakIsaUJBQWlCO1VBQ2pCLHlCQUF5QjtVQUN6QixjQUFjO1VBQ2QsY0FBYztRQUNoQjtFQUNOOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFO01BQ0UsaUJBQWlCO01BQ2pCLGNBQWM7SUFDaEI7RUFDRiIsImZpbGUiOiIuLi8uLi9mdW5jdGlvbi9jb21wb25lbnQvYWdncmVnYXRlLWZ1bmN0aW9uL2FnZ3JlZ2F0ZS1mdW5jdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHtcclxuICAgIG1hcmdpbjogMHB4IDAgM3B4IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAgIC50YWJsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuICAgIGJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbiAgfVxyXG4gIFxyXG4gICAgLnJvdzpudGgtb2YtdHlwZShvZGQpIHtcclxuICAgICAgYmFja2dyb3VuZDogI2U5ZTllOTtcclxuICAgIH1cclxuICBcclxuICAgIC5yb3cuaGVhZGVyIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMxODQ1NjkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICBcclxuICAgIC5yb3cuZ3JlZW4ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMjdhZTYwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnJvdy5ibHVlIHtcclxuICAgICAgYmFja2dyb3VuZDogIzI5ODBiOTtcclxuICAgIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gICAgLnJvdyB7XHJcbiAgICAgIHBhZGRpbmc6IDE0cHggMCA3cHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgICAucm93LmhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBoZWlnaHQ6IDZweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5yb3cuaGVhZGVyIC5jZWxsIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAucm93IC5jZWxsIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnJvdyAuY2VsbDpiZWZvcmUge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcclxuICAgICAgICAgIG1pbi13aWR0aDogOThweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgY29sb3I6ICM5Njk2OTY7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jZWxsIHtcclxuICAgIC8qICBwYWRkaW5nOiA2cHggMTJweDsgKi9cclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgICAuY2VsbCB7XHJcbiAgICAgIHBhZGRpbmc6IDJweCAxNnB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */");

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



let AggregateFunctionComponent = class AggregateFunctionComponent {
    constructor(aggregateFunctionService) {
        this.aggregateFunctionService = aggregateFunctionService;
        this.selectedFunction = 'dbo.ufnGetContactInformation';
    }
    ngOnInit() {
        this.fetchFunctionMetadata();
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
    { type: _services_aggregate_function_service__WEBPACK_IMPORTED_MODULE_2__["AggregateFunctionService"] }
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
/* harmony default export */ __webpack_exports__["default"] = (".table {\n    margin: 0px 0 3px 0;\n    width: 100%;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n    display: table;\n  }\n  \n  @media screen and (max-width: 580px) {\n    .table {\n      display: block;\n    }\n  }\n  \n  .row {\n    display: table-row;\n    background: #f6f6f6;\n  }\n  \n  .row:nth-of-type(odd) {\n      background: #e9e9e9;\n    }\n  \n  .row.header {\n      font-weight: 900;\n      color: #ffffff;\n      background: #184569 !important;\n    }\n  \n  .row.green {\n      background: #27ae60;\n    }\n  \n  .row.blue {\n      background: #2980b9;\n    }\n  \n  @media screen and (max-width: 580px) {\n    .row {\n      padding: 14px 0 7px;\n      display: block;\n    }\n  \n      .row.header {\n        padding: 0;\n        height: 6px;\n      }\n  \n        .row.header .cell {\n          display: none;\n        }\n  \n      .row .cell {\n        margin-bottom: 10px;\n      }\n  \n        .row .cell:before {\n          margin-bottom: 3px;\n          content: attr(data-title);\n          min-width: 98px;\n          font-size: 10px;\n          line-height: 10px;\n          font-weight: bold;\n          text-transform: uppercase;\n          color: #969696;\n          display: block;\n        }\n  }\n  \n  .cell {\n    /*  padding: 6px 12px; */\n    display: table-cell;\n  }\n  \n  @media screen and (max-width: 580px) {\n    .cell {\n      padding: 2px 16px;\n      display: block;\n    }\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2Z1bmN0aW9uL2NvbXBvbmVudC9hZ2dyZWdhdGUtZnVuY3Rpb25zL2FnZ3JlZ2F0ZS1mdW5jdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsd0NBQXdDO0lBQ3hDLGNBQWM7RUFDaEI7O0VBRUE7SUFDRTtNQUNFLGNBQWM7SUFDaEI7RUFDRjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7O0VBRUU7TUFDRSxtQkFBbUI7SUFDckI7O0VBRUE7TUFDRSxnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLDhCQUE4QjtJQUNoQzs7RUFFQTtNQUNFLG1CQUFtQjtJQUNyQjs7RUFFQTtNQUNFLG1CQUFtQjtJQUNyQjs7RUFFRjtJQUNFO01BQ0UsbUJBQW1CO01BQ25CLGNBQWM7SUFDaEI7O01BRUU7UUFDRSxVQUFVO1FBQ1YsV0FBVztNQUNiOztRQUVFO1VBQ0UsYUFBYTtRQUNmOztNQUVGO1FBQ0UsbUJBQW1CO01BQ3JCOztRQUVFO1VBQ0Usa0JBQWtCO1VBQ2xCLHlCQUF5QjtVQUN6QixlQUFlO1VBQ2YsZUFBZTtVQUNmLGlCQUFpQjtVQUNqQixpQkFBaUI7VUFDakIseUJBQXlCO1VBQ3pCLGNBQWM7VUFDZCxjQUFjO1FBQ2hCO0VBQ047O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0U7TUFDRSxpQkFBaUI7TUFDakIsY0FBYztJQUNoQjtFQUNGIiwiZmlsZSI6Ii4uLy4uL2Z1bmN0aW9uL2NvbXBvbmVudC9hZ2dyZWdhdGUtZnVuY3Rpb25zL2FnZ3JlZ2F0ZS1mdW5jdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB7XG4gICAgbWFyZ2luOiAwcHggMCAzcHggMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xuICAgIC50YWJsZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbiAgXG4gIC5yb3cge1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcbiAgICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xuICB9XG4gIFxuICAgIC5yb3c6bnRoLW9mLXR5cGUob2RkKSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xuICAgIH1cbiAgXG4gICAgLnJvdy5oZWFkZXIge1xuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgYmFja2dyb3VuZDogIzE4NDU2OSAhaW1wb3J0YW50O1xuICAgIH1cbiAgXG4gICAgLnJvdy5ncmVlbiB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMjdhZTYwO1xuICAgIH1cbiAgXG4gICAgLnJvdy5ibHVlIHtcbiAgICAgIGJhY2tncm91bmQ6ICMyOTgwYjk7XG4gICAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgICAucm93IHtcbiAgICAgIHBhZGRpbmc6IDE0cHggMCA3cHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIFxuICAgICAgLnJvdy5oZWFkZXIge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgIH1cbiAgXG4gICAgICAgIC5yb3cuaGVhZGVyIC5jZWxsIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gIFxuICAgICAgLnJvdyAuY2VsbCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG4gIFxuICAgICAgICAucm93IC5jZWxsOmJlZm9yZSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XG4gICAgICAgICAgbWluLXdpZHRoOiA5OHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGNvbG9yOiAjOTY5Njk2O1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gIH1cbiAgXG4gIC5jZWxsIHtcbiAgICAvKiAgcGFkZGluZzogNnB4IDEycHg7ICovXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgICAuY2VsbCB7XG4gICAgICBwYWRkaW5nOiAycHggMTZweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuICAiXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".table {\n  margin: 0px 0 3px 0;\n  width: 100%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  display: table;\n}\n\n@media screen and (max-width: 580px) {\n  .table {\n    display: block;\n  }\n}\n\n.row {\n  display: table-row;\n  background: #f6f6f6;\n}\n\n.row:nth-of-type(odd) {\n    background: #e9e9e9;\n  }\n\n.row.header {\n    font-weight: 900;\n    color: #ffffff;\n    background: #184569 !important;\n  }\n\n.row.green {\n    background: #27ae60;\n  }\n\n.row.blue {\n    background: #2980b9;\n  }\n\n@media screen and (max-width: 580px) {\n  .row {\n    padding: 14px 0 7px;\n    display: block;\n  }\n\n    .row.header {\n      padding: 0;\n      height: 6px;\n    }\n\n      .row.header .cell {\n        display: none;\n      }\n\n    .row .cell {\n      margin-bottom: 10px;\n    }\n\n      .row .cell:before {\n        margin-bottom: 3px;\n        content: attr(data-title);\n        min-width: 98px;\n        font-size: 10px;\n        line-height: 10px;\n        font-weight: bold;\n        text-transform: uppercase;\n        color: #969696;\n        display: block;\n      }\n}\n\n.cell {\n  /*  padding: 6px 12px; */\n  display: table-cell;\n}\n\n@media screen and (max-width: 580px) {\n  .cell {\n    padding: 2px 16px;\n    display: block;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2Z1bmN0aW9uL2NvbXBvbmVudC9zY2FsYXItZnVuY3Rpb24vc2NhbGFyLWZ1bmN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHdDQUF3QztFQUN4QyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVFO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCw4QkFBOEI7RUFDaEM7O0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUY7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixjQUFjO0VBQ2hCOztJQUVFO01BQ0UsVUFBVTtNQUNWLFdBQVc7SUFDYjs7TUFFRTtRQUNFLGFBQWE7TUFDZjs7SUFFRjtNQUNFLG1CQUFtQjtJQUNyQjs7TUFFRTtRQUNFLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsZUFBZTtRQUNmLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLHlCQUF5QjtRQUN6QixjQUFjO1FBQ2QsY0FBYztNQUNoQjtBQUNOOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7QUFDRiIsImZpbGUiOiIuLi8uLi9mdW5jdGlvbi9jb21wb25lbnQvc2NhbGFyLWZ1bmN0aW9uL3NjYWxhci1mdW5jdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHtcbiAgbWFyZ2luOiAwcHggMCAzcHggMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xuICAudGFibGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiB0YWJsZS1yb3c7XG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XG59XG5cbiAgLnJvdzpudGgtb2YtdHlwZShvZGQpIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xuICB9XG5cbiAgLnJvdy5oZWFkZXIge1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZDogIzE4NDU2OSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnJvdy5ncmVlbiB7XG4gICAgYmFja2dyb3VuZDogIzI3YWU2MDtcbiAgfVxuXG4gIC5yb3cuYmx1ZSB7XG4gICAgYmFja2dyb3VuZDogIzI5ODBiOTtcbiAgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xuICAucm93IHtcbiAgICBwYWRkaW5nOiAxNHB4IDAgN3B4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgICAucm93LmhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgfVxuXG4gICAgICAucm93LmhlYWRlciAuY2VsbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAucm93IC5jZWxsIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgICAucm93IC5jZWxsOmJlZm9yZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcbiAgICAgICAgbWluLXdpZHRoOiA5OHB4O1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6ICM5Njk2OTY7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxufVxuXG4uY2VsbCB7XG4gIC8qICBwYWRkaW5nOiA2cHggMTJweDsgKi9cbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLmNlbGwge1xuICAgIHBhZGRpbmc6IDJweCAxNnB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4iXX0= */");

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



let ScalarFunctionComponent = class ScalarFunctionComponent {
    constructor(scalarFunctionService) {
        this.scalarFunctionService = scalarFunctionService;
        this.selectedFunction = 'dbo.ufnGetProductDealerPrice';
    }
    ngOnInit() {
        this.fetchFunctionMetadata();
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
    { type: _services_scalar_function_service__WEBPACK_IMPORTED_MODULE_2__["ScalarFunctionService"] }
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
/* harmony default export */ __webpack_exports__["default"] = (".table {\r\n  margin: 0px 0 3px 0;\r\n  width: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: table;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .table {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.row {\r\n  display: table-row;\r\n  background: #f6f6f6;\r\n}\r\n\r\n.row:nth-of-type(odd) {\r\n    background: #e9e9e9;\r\n  }\r\n\r\n.row.header {\r\n    font-weight: 900;\r\n    color: #ffffff;\r\n    background: #184569 !important;\r\n  }\r\n\r\n.row.green {\r\n    background: #27ae60;\r\n  }\r\n\r\n.row.blue {\r\n    background: #2980b9;\r\n  }\r\n\r\n@media screen and (max-width: 580px) {\r\n  .row {\r\n    padding: 14px 0 7px;\r\n    display: block;\r\n  }\r\n\r\n    .row.header {\r\n      padding: 0;\r\n      height: 6px;\r\n    }\r\n\r\n      .row.header .cell {\r\n        display: none;\r\n      }\r\n\r\n    .row .cell {\r\n      margin-bottom: 10px;\r\n    }\r\n\r\n      .row .cell:before {\r\n        margin-bottom: 3px;\r\n        content: attr(data-title);\r\n        min-width: 98px;\r\n        font-size: 10px;\r\n        line-height: 10px;\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n        color: #969696;\r\n        display: block;\r\n      }\r\n}\r\n\r\n.cell {\r\n  /*  padding: 6px 12px; */\r\n  display: table-cell;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .cell {\r\n    padding: 2px 16px;\r\n    display: block;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2Z1bmN0aW9uL2NvbXBvbmVudC9zY2FsYXItZnVuY3Rpb25zL3NjYWxhci1mdW5jdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsd0NBQXdDO0VBQ3hDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUU7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLDhCQUE4QjtFQUNoQzs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFRjtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLGNBQWM7RUFDaEI7O0lBRUU7TUFDRSxVQUFVO01BQ1YsV0FBVztJQUNiOztNQUVFO1FBQ0UsYUFBYTtNQUNmOztJQUVGO01BQ0UsbUJBQW1CO0lBQ3JCOztNQUVFO1FBQ0Usa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QixlQUFlO1FBQ2YsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIseUJBQXlCO1FBQ3pCLGNBQWM7UUFDZCxjQUFjO01BQ2hCO0FBQ047O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjtBQUNGIiwiZmlsZSI6Ii4uLy4uL2Z1bmN0aW9uL2NvbXBvbmVudC9zY2FsYXItZnVuY3Rpb25zL3NjYWxhci1mdW5jdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB7XHJcbiAgbWFyZ2luOiAwcHggMCAzcHggMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gIC50YWJsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG59XHJcblxyXG4gIC5yb3c6bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xyXG4gIH1cclxuXHJcbiAgLnJvdy5oZWFkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzE4NDU2OSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnJvdy5ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjdhZTYwO1xyXG4gIH1cclxuXHJcbiAgLnJvdy5ibHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICMyOTgwYjk7XHJcbiAgfVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAucm93IHtcclxuICAgIHBhZGRpbmc6IDE0cHggMCA3cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICAgLnJvdy5oZWFkZXIge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBoZWlnaHQ6IDZweDtcclxuICAgIH1cclxuXHJcbiAgICAgIC5yb3cuaGVhZGVyIC5jZWxsIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgLnJvdyAuY2VsbCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgICAucm93IC5jZWxsOmJlZm9yZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XHJcbiAgICAgICAgbWluLXdpZHRoOiA5OHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiAjOTY5Njk2O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbn1cclxuXHJcbi5jZWxsIHtcclxuICAvKiAgcGFkZGluZzogNnB4IDEycHg7ICovXHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAuY2VsbCB7XHJcbiAgICBwYWRkaW5nOiAycHggMTZweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG4iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".table {\r\n    margin: 0px 0 3px 0;\r\n    width: 100%;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n    display: table;\r\n  }\r\n  \r\n  @media screen and (max-width: 580px) {\r\n    .table {\r\n      display: block;\r\n    }\r\n  }\r\n  \r\n  .row {\r\n    display: table-row;\r\n    background: #f6f6f6;\r\n  }\r\n  \r\n  .row:nth-of-type(odd) {\r\n      background: #e9e9e9;\r\n    }\r\n  \r\n  .row.header {\r\n      font-weight: 900;\r\n      color: #ffffff;\r\n      background: #184569 !important;\r\n    }\r\n  \r\n  .row.green {\r\n      background: #27ae60;\r\n    }\r\n  \r\n  .row.blue {\r\n      background: #2980b9;\r\n    }\r\n  \r\n  @media screen and (max-width: 580px) {\r\n    .row {\r\n      padding: 14px 0 7px;\r\n      display: block;\r\n    }\r\n  \r\n      .row.header {\r\n        padding: 0;\r\n        height: 6px;\r\n      }\r\n  \r\n        .row.header .cell {\r\n          display: none;\r\n        }\r\n  \r\n      .row .cell {\r\n        margin-bottom: 10px;\r\n      }\r\n  \r\n        .row .cell:before {\r\n          margin-bottom: 3px;\r\n          content: attr(data-title);\r\n          min-width: 98px;\r\n          font-size: 10px;\r\n          line-height: 10px;\r\n          font-weight: bold;\r\n          text-transform: uppercase;\r\n          color: #969696;\r\n          display: block;\r\n        }\r\n  }\r\n  \r\n  .cell {\r\n    /*  padding: 6px 12px; */\r\n    display: table-cell;\r\n  }\r\n  \r\n  @media screen and (max-width: 580px) {\r\n    .cell {\r\n      padding: 2px 16px;\r\n      display: block;\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2Z1bmN0aW9uL2NvbXBvbmVudC90YWJsZS12YWx1ZS1mdW5jdGlvbi90YWJsZS12YWx1ZS1mdW5jdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx3Q0FBd0M7SUFDeEMsY0FBYztFQUNoQjs7RUFFQTtJQUNFO01BQ0UsY0FBYztJQUNoQjtFQUNGOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjs7RUFFRTtNQUNFLG1CQUFtQjtJQUNyQjs7RUFFQTtNQUNFLGdCQUFnQjtNQUNoQixjQUFjO01BQ2QsOEJBQThCO0lBQ2hDOztFQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOztFQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOztFQUVGO0lBQ0U7TUFDRSxtQkFBbUI7TUFDbkIsY0FBYztJQUNoQjs7TUFFRTtRQUNFLFVBQVU7UUFDVixXQUFXO01BQ2I7O1FBRUU7VUFDRSxhQUFhO1FBQ2Y7O01BRUY7UUFDRSxtQkFBbUI7TUFDckI7O1FBRUU7VUFDRSxrQkFBa0I7VUFDbEIseUJBQXlCO1VBQ3pCLGVBQWU7VUFDZixlQUFlO1VBQ2YsaUJBQWlCO1VBQ2pCLGlCQUFpQjtVQUNqQix5QkFBeUI7VUFDekIsY0FBYztVQUNkLGNBQWM7UUFDaEI7RUFDTjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRTtNQUNFLGlCQUFpQjtNQUNqQixjQUFjO0lBQ2hCO0VBQ0YiLCJmaWxlIjoiLi4vLi4vZnVuY3Rpb24vY29tcG9uZW50L3RhYmxlLXZhbHVlLWZ1bmN0aW9uL3RhYmxlLXZhbHVlLWZ1bmN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xyXG4gICAgbWFyZ2luOiAwcHggMCAzcHggMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gICAgLnRhYmxlIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheTogdGFibGUtcm93O1xyXG4gICAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxuICB9XHJcbiAgXHJcbiAgICAucm93Om50aC1vZi10eXBlKG9kZCkge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnJvdy5oZWFkZXIge1xyXG4gICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgYmFja2dyb3VuZDogIzE4NDU2OSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnJvdy5ncmVlbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMyN2FlNjA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucm93LmJsdWUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMjk4MGI5O1xyXG4gICAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgICAucm93IHtcclxuICAgICAgcGFkZGluZzogMTRweCAwIDdweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAgIC5yb3cuaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGhlaWdodDogNnB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnJvdy5oZWFkZXIgLmNlbGwge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgIC5yb3cgLmNlbGwge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgICAucm93IC5jZWxsOmJlZm9yZSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xyXG4gICAgICAgICAgbWluLXdpZHRoOiA5OHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICBjb2xvcjogIzk2OTY5NjtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmNlbGwge1xyXG4gICAgLyogIHBhZGRpbmc6IDZweCAxMnB4OyAqL1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAgIC5jZWxsIHtcclxuICAgICAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */");

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



let TableValueFunctionComponent = class TableValueFunctionComponent {
    constructor(tableValueFunctionService) {
        this.tableValueFunctionService = tableValueFunctionService;
        this.selectedFunction = 'dbo.ufnGetContactInformation';
    }
    ngOnInit() {
        this.fetchFunctionMetadata();
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
    { type: _services_table_value_function_service__WEBPACK_IMPORTED_MODULE_2__["TableValueFunctionService"] }
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
/* harmony default export */ __webpack_exports__["default"] = (".table {\r\n  margin: 0px 0 3px 0;\r\n  width: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: table;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .table {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.row {\r\n  display: table-row;\r\n  background: #f6f6f6;\r\n}\r\n\r\n.row:nth-of-type(odd) {\r\n    background: #e9e9e9;\r\n  }\r\n\r\n.row.header {\r\n    font-weight: 900;\r\n    color: #ffffff;\r\n    background: #184569 !important;\r\n  }\r\n\r\n.row.green {\r\n    background: #27ae60;\r\n  }\r\n\r\n.row.blue {\r\n    background: #2980b9;\r\n  }\r\n\r\n@media screen and (max-width: 580px) {\r\n  .row {\r\n    padding: 14px 0 7px;\r\n    display: block;\r\n  }\r\n\r\n    .row.header {\r\n      padding: 0;\r\n      height: 6px;\r\n    }\r\n\r\n      .row.header .cell {\r\n        display: none;\r\n      }\r\n\r\n    .row .cell {\r\n      margin-bottom: 10px;\r\n    }\r\n\r\n      .row .cell:before {\r\n        margin-bottom: 3px;\r\n        content: attr(data-title);\r\n        min-width: 98px;\r\n        font-size: 10px;\r\n        line-height: 10px;\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n        color: #969696;\r\n        display: block;\r\n      }\r\n}\r\n\r\n.cell {\r\n  /*  padding: 6px 12px; */\r\n  display: table-cell;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .cell {\r\n    padding: 2px 16px;\r\n    display: block;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2Z1bmN0aW9uL2NvbXBvbmVudC90YWJsZS12YWx1ZS1mdW5jdGlvbnMvdGFibGUtdmFsdWUtZnVuY3Rpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHdDQUF3QztFQUN4QyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVFO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCw4QkFBOEI7RUFDaEM7O0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUY7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixjQUFjO0VBQ2hCOztJQUVFO01BQ0UsVUFBVTtNQUNWLFdBQVc7SUFDYjs7TUFFRTtRQUNFLGFBQWE7TUFDZjs7SUFFRjtNQUNFLG1CQUFtQjtJQUNyQjs7TUFFRTtRQUNFLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsZUFBZTtRQUNmLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLHlCQUF5QjtRQUN6QixjQUFjO1FBQ2QsY0FBYztNQUNoQjtBQUNOOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7QUFDRiIsImZpbGUiOiIuLi8uLi9mdW5jdGlvbi9jb21wb25lbnQvdGFibGUtdmFsdWUtZnVuY3Rpb25zL3RhYmxlLXZhbHVlLWZ1bmN0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHtcclxuICBtYXJnaW46IDBweCAwIDNweCAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgLnRhYmxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogdGFibGUtcm93O1xyXG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbn1cclxuXHJcbiAgLnJvdzpudGgtb2YtdHlwZShvZGQpIHtcclxuICAgIGJhY2tncm91bmQ6ICNlOWU5ZTk7XHJcbiAgfVxyXG5cclxuICAucm93LmhlYWRlciB7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTg0NTY5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAucm93LmdyZWVuIHtcclxuICAgIGJhY2tncm91bmQ6ICMyN2FlNjA7XHJcbiAgfVxyXG5cclxuICAucm93LmJsdWUge1xyXG4gICAgYmFja2dyb3VuZDogIzI5ODBiOTtcclxuICB9XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gIC5yb3cge1xyXG4gICAgcGFkZGluZzogMTRweCAwIDdweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgICAucm93LmhlYWRlciB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGhlaWdodDogNnB4O1xyXG4gICAgfVxyXG5cclxuICAgICAgLnJvdy5oZWFkZXIgLmNlbGwge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAucm93IC5jZWxsIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAgIC5yb3cgLmNlbGw6YmVmb3JlIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcclxuICAgICAgICBtaW4td2lkdGg6IDk4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgY29sb3I6ICM5Njk2OTY7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxufVxyXG5cclxuLmNlbGwge1xyXG4gIC8qICBwYWRkaW5nOiA2cHggMTJweDsgKi9cclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gIC5jZWxsIHtcclxuICAgIHBhZGRpbmc6IDJweCAxNnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

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
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/fesm2015/primeng-accordion.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/fesm2015/primeng-table.js");
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tree */ "./node_modules/primeng/fesm2015/primeng-tree.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/contextmenu */ "./node_modules/primeng/fesm2015/primeng-contextmenu.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/fesm2015/primeng-tabview.js");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/codehighlighter */ "./node_modules/primeng/fesm2015/primeng-codehighlighter.js");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/breadcrumb */ "./node_modules/primeng/fesm2015/primeng-breadcrumb.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/fesm2015/primeng-dialog.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/fesm2015/primeng-inputtextarea.js");
/* harmony import */ var angular_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-progress-bar */ "./node_modules/angular-progress-bar/fesm2015/angular-progress-bar.js");
/* harmony import */ var _component_aggregate_function_aggregate_function_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/aggregate-function/aggregate-function.component */ "./src/app/function/component/aggregate-function/aggregate-function.component.ts");
/* harmony import */ var _component_scalar_function_scalar_function_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/scalar-function/scalar-function.component */ "./src/app/function/component/scalar-function/scalar-function.component.ts");
/* harmony import */ var _component_table_value_function_table_value_function_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/table-value-function/table-value-function.component */ "./src/app/function/component/table-value-function/table-value-function.component.ts");
/* harmony import */ var _component_table_value_functions_table_value_functions_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/table-value-functions/table-value-functions.component */ "./src/app/function/component/table-value-functions/table-value-functions.component.ts");
/* harmony import */ var _component_scalar_functions_scalar_functions_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/scalar-functions/scalar-functions.component */ "./src/app/function/component/scalar-functions/scalar-functions.component.ts");
/* harmony import */ var _component_aggregate_functions_aggregate_functions_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./component/aggregate-functions/aggregate-functions.component */ "./src/app/function/component/aggregate-functions/aggregate-functions.component.ts");
/* harmony import */ var _services_aggregate_function_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/aggregate-function.service */ "./src/app/function/services/aggregate-function.service.ts");
/* harmony import */ var _services_scalar_function_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/scalar-function.service */ "./src/app/function/services/scalar-function.service.ts");
/* harmony import */ var _services_table_value_function_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/table-value-function.service */ "./src/app/function/services/table-value-function.service.ts");





/* ===== Amexio Modules ===== */

/* ===== PrimeNG Modules ===== */











/* ===== Other Third-Party Modules ===== */










/* ===== Components & Services ===== */
let FunctionModule = class FunctionModule {
};
FunctionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _component_aggregate_function_aggregate_function_component__WEBPACK_IMPORTED_MODULE_18__["AggregateFunctionComponent"],
            _component_scalar_function_scalar_function_component__WEBPACK_IMPORTED_MODULE_19__["ScalarFunctionComponent"],
            _component_table_value_function_table_value_function_component__WEBPACK_IMPORTED_MODULE_20__["TableValueFunctionComponent"],
            _component_table_value_functions_table_value_functions_component__WEBPACK_IMPORTED_MODULE_21__["TableValueFunctionsComponent"],
            _component_scalar_functions_scalar_functions_component__WEBPACK_IMPORTED_MODULE_22__["ScalarFunctionsComponent"],
            _component_aggregate_functions_aggregate_functions_component__WEBPACK_IMPORTED_MODULE_23__["AggregateFunctionsComponent"]
        ],
        imports: [
            /* Core Modules */
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            /* Amexio Modules */
            amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioDataModule"],
            amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"],
            amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioChartsModule"],
            amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioEnterpriseModule"],
            /* PrimeNG Modules */
            primeng_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"],
            primeng_tree__WEBPACK_IMPORTED_MODULE_8__["TreeModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"],
            primeng_contextmenu__WEBPACK_IMPORTED_MODULE_11__["ContextMenuModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_12__["TabViewModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_13__["CodeHighlighterModule"],
            primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_14__["BreadcrumbModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_15__["DialogModule"],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_16__["InputTextareaModule"],
            /* Other Third-Party Modules */
            angular_progress_bar__WEBPACK_IMPORTED_MODULE_17__["ProgressBarModule"]
        ],
        exports: [
            _component_aggregate_function_aggregate_function_component__WEBPACK_IMPORTED_MODULE_18__["AggregateFunctionComponent"],
            _component_scalar_function_scalar_function_component__WEBPACK_IMPORTED_MODULE_19__["ScalarFunctionComponent"],
            _component_table_value_function_table_value_function_component__WEBPACK_IMPORTED_MODULE_20__["TableValueFunctionComponent"],
            _component_table_value_functions_table_value_functions_component__WEBPACK_IMPORTED_MODULE_21__["TableValueFunctionsComponent"],
            _component_scalar_functions_scalar_functions_component__WEBPACK_IMPORTED_MODULE_22__["ScalarFunctionsComponent"],
            _component_aggregate_functions_aggregate_functions_component__WEBPACK_IMPORTED_MODULE_23__["AggregateFunctionsComponent"]
        ],
        providers: [_services_aggregate_function_service__WEBPACK_IMPORTED_MODULE_24__["AggregateFunctionService"], _services_scalar_function_service__WEBPACK_IMPORTED_MODULE_25__["ScalarFunctionService"], _services_table_value_function_service__WEBPACK_IMPORTED_MODULE_26__["TableValueFunctionService"]],
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



/***/ }),

/***/ "./src/app/left-menu/components/leftmenu/leftmenu.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/left-menu/components/leftmenu/leftmenu.component.ts ***!
  \*********************************************************************/
/*! exports provided: LeftmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftmenuComponent", function() { return LeftmenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_left_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/left-menu.service */ "./src/app/left-menu/services/left-menu.service.ts");



let LeftmenuComponent = class LeftmenuComponent {
    constructor(leftMenuService) {
        this.leftMenuService = leftMenuService;
    }
    ngOnInit() {
        this.loadLeftMenuData();
    }
    loadLeftMenuData() {
        this.leftMenuService.loadLeftMenuData().subscribe((result) => this.handleLoadSuccess(result), (error) => this.handleLoadError(error));
    }
    handleLoadSuccess(result) {
        this.leftmenujsonvalues = result;
    }
    handleLoadError(error) {
        console.error(error);
    }
    getNodeData(data) {
        // Implement getNodeData logic here
    }
};
LeftmenuComponent.ctorParameters = () => [
    { type: _services_left_menu_service__WEBPACK_IMPORTED_MODULE_2__["LeftMenuService"] }
];
LeftmenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-leftmenu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./leftmenu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/left-menu/components/leftmenu/leftmenu.component.html")).default
    })
], LeftmenuComponent);



/***/ }),

/***/ "./src/app/left-menu/services/left-menu.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/left-menu/services/left-menu.service.ts ***!
  \*********************************************************/
/*! exports provided: LeftMenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftMenuService", function() { return LeftMenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let LeftMenuService = class LeftMenuService {
    constructor(http, primaryUrl, secondaryUrl) {
        this.http = http;
        this.primaryUrl = primaryUrl;
        this.secondaryUrl = secondaryUrl;
    }
    loadLeftMenuData() {
        const primaryUrl = `${this.primaryUrl}/LeftMenu/left-menu`;
        const secondaryUrl = 'LeftMenu/left-menu'; // Fallback URL
        return this.http.get(primaryUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            console.error('Primary URL failed, trying secondary URL:', error);
            return this.http.get(secondaryUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((secondaryError) => {
                console.error('Both primary and secondary URLs failed:', secondaryError);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null); // Return a safe fallback
            }));
        }));
    }
};
LeftMenuService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['API_URL',] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['ANOTHER_URL',] }] }
];
LeftMenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('API_URL')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('ANOTHER_URL'))
], LeftMenuService);



/***/ }),

/***/ "./src/app/procedure/components/procedure/procedure.component.css":
/*!************************************************************************!*\
  !*** ./src/app/procedure/components/procedure/procedure.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ===== General Table Styling ===== */\r\n.table {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n/* ===== Table Row Styles ===== */\r\n.row {\r\n  display: table-row;\r\n  background: #f6f6f6;\r\n}\r\n.row:nth-of-type(odd) {\r\n  background: #e9e9e9;\r\n}\r\n.row.header {\r\n  font-weight: 900;\r\n  color: #ffffff;\r\n  background: #184569;\r\n}\r\n/* Additional Row Styles */\r\n.row.green {\r\n  background: #27ae60;\r\n}\r\n.row.blue {\r\n  background: #2980b9;\r\n}\r\n/* ===== Table Cells ===== */\r\n.cell {\r\n  display: table-cell;\r\n  padding: 6px 12px;\r\n}\r\n/* ===== Edit Button Positioning ===== */\r\n.edit-cell {\r\n  text-align: center;\r\n  width: 50px;\r\n}\r\n/* Edit Icon Styles */\r\n.edit-icon {\r\n  font-size: 18px;\r\n  color: #007bff;\r\n  cursor: pointer;\r\n  margin-right: 10px;\r\n}\r\n.edit-icon:hover {\r\n  color: #0056b3;\r\n}\r\n/* ===== Description Container for Editable Fields ===== */\r\n.description-container {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 10px;\r\n  background-color: #f1f1f1;\r\n  border-radius: 5px;\r\n  flex-wrap: wrap;\r\n}\r\n.description-text {\r\n  max-width: 80%;\r\n  font-size: 14px;\r\n  line-height: 1.5;\r\n}\r\n/* ===== Edit Mode Styles ===== */\r\n.edit-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  max-width: 600px;\r\n  margin: auto;\r\n}\r\n.edit-textarea {\r\n  width: 100%;\r\n  resize: vertical;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  font-size: 14px;\r\n  border: 1px solid #ccc;\r\n}\r\n/* ===== Action Buttons (Save & Cancel) ===== */\r\n.action-buttons {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin-top: 10px;\r\n}\r\n.action-buttons a {\r\n  cursor: pointer;\r\n  margin-left: 10px;\r\n  font-size: 16px;\r\n}\r\n.cancel-btn i {\r\n  color: #d9534f;\r\n}\r\n.save-btn i {\r\n  color: #5cb85c;\r\n}\r\n.cancel-btn i:hover {\r\n  color: #c9302c;\r\n}\r\n.save-btn i:hover {\r\n  color: #449d44;\r\n}\r\n/* ===== Responsive Table Adjustments ===== */\r\n@media screen and (max-width: 580px) {\r\n  .table {\r\n    display: block;\r\n  }\r\n\r\n  .row {\r\n    padding: 14px 0 7px;\r\n    display: block;\r\n  }\r\n\r\n  .row.header {\r\n    padding: 0;\r\n    height: 6px;\r\n  }\r\n\r\n  .row.header .cell {\r\n    display: none;\r\n  }\r\n\r\n  .row .cell {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .row .cell:before {\r\n    margin-bottom: 3px;\r\n    content: attr(data-title);\r\n    min-width: 98px;\r\n    font-size: 10px;\r\n    line-height: 10px;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    color: #969696;\r\n    display: block;\r\n  }\r\n\r\n  .cell {\r\n    padding: 2px 16px;\r\n    display: block;\r\n  }\r\n}\r\n/* ===== Button Hover Effects ===== */\r\na.btn {\r\n  transition: transform 0.5s;\r\n}\r\na.btn:hover {\r\n  transform: scale(1.1);\r\n}\r\n/* ===== Headings ===== */\r\nh4 {\r\n  text-align: center;\r\n  margin: 0 0 8px 0;\r\n}\r\n/* ===== Input Field Adjustments ===== */\r\n.ui-inputtext {\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n  font-size: 12px;\r\n}\r\n/* ===== Progress Bar Fixes ===== */\r\n.progress-inner {\r\n  min-width: 1% !important;\r\n}\r\n/* Ensure the textarea fits inside the cell */\r\n.edit-textarea {\r\n  width: 100%;\r\n  min-height: 50px;\r\n  max-height: 100px;\r\n  resize: vertical;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n  font-size: 14px;\r\n  border: 1px solid #ccc;\r\n  word-wrap: break-word;\r\n  white-space: normal;\r\n  overflow-y: auto;\r\n  box-sizing: border-box; /* Prevents overflow beyond parent cell */\r\n}\r\n/* Align action buttons properly */\r\n.action-buttons {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  margin-top: 5px;\r\n  gap: 10px; /* Adds space between buttons */\r\n}\r\n/* Adjust Cancel (X) and Save (💾) Icons */\r\n.action-buttons a {\r\n  cursor: pointer;\r\n  font-size: 16px;\r\n}\r\n.cancel-btn i {\r\n  color: #d9534f;\r\n}\r\n.save-btn i {\r\n  color: #5cb85c;\r\n}\r\n.cancel-btn i:hover {\r\n  color: #c9302c;\r\n}\r\n.save-btn i:hover {\r\n  color: #449d44;\r\n}\r\n/* Container for code block */\r\n.code-container {\r\n  max-height: 400px;  /* Prevents excessive scrolling */\r\n  overflow-y: auto;  /* Enables vertical scroll if content is too long */\r\n  padding: 10px;\r\n  background-color: #2d2d2d; /* Dark background for readability */\r\n  border-radius: 5px;\r\n  border: 1px solid #444;\r\n}\r\n/* Ensures ngx-prism styles correctly */\r\nngx-prism {\r\n  display: block;\r\n  white-space: pre-wrap !important; /* Prevents horizontal scrolling */\r\n  word-wrap: break-word !important;\r\n  overflow-x: hidden; /* Ensures content does not overflow horizontally */\r\n  background: #272822 !important; /* Dark background for contrast */\r\n  color: #f8f8f2 !important; /* Light text for readability */\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  font-size: 14px;\r\n  line-height: 1.5; /* Adjust line height for better readability */\r\n  font-family: 'Courier New', Courier, monospace;\r\n}\r\n/* Hide unnecessary horizontal scrollbar */\r\nngx-prism::-webkit-scrollbar {\r\n  width: 6px;\r\n  height: 6px;\r\n}\r\nngx-prism::-webkit-scrollbar-thumb {\r\n  background: #555;\r\n  border-radius: 3px;\r\n}\r\nngx-prism::-webkit-scrollbar-track {\r\n  background: #222;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Byb2NlZHVyZS9jb21wb25lbnRzL3Byb2NlZHVyZS9wcm9jZWR1cmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQ0FBc0M7QUFDdEM7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHdDQUF3QztBQUMxQztBQUVBLGlDQUFpQztBQUNqQztFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBLDRCQUE0QjtBQUM1QjtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFFQSx3Q0FBd0M7QUFDeEM7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUEsMERBQTBEO0FBQzFEO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUVBLGlDQUFpQztBQUNqQztFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCO0FBRUEsK0NBQStDO0FBQy9DO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBLDZDQUE2QztBQUM3QztFQUNFO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCO0FBQ0Y7QUFFQSxxQ0FBcUM7QUFDckM7RUFDRSwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBLHlCQUF5QjtBQUN6QjtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFFQSx3Q0FBd0M7QUFDeEM7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFFQSxtQ0FBbUM7QUFDbkM7RUFDRSx3QkFBd0I7QUFDMUI7QUFFQSw2Q0FBNkM7QUFDN0M7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQixFQUFFLHlDQUF5QztBQUNuRTtBQUVBLGtDQUFrQztBQUNsQztFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixTQUFTLEVBQUUsK0JBQStCO0FBQzVDO0FBRUEsMENBQTBDO0FBQzFDO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFDQSw2QkFBNkI7QUFDN0I7RUFDRSxpQkFBaUIsR0FBRyxpQ0FBaUM7RUFDckQsZ0JBQWdCLEdBQUcsbURBQW1EO0VBQ3RFLGFBQWE7RUFDYix5QkFBeUIsRUFBRSxvQ0FBb0M7RUFDL0Qsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUVBLHVDQUF1QztBQUN2QztFQUNFLGNBQWM7RUFDZCxnQ0FBZ0MsRUFBRSxrQ0FBa0M7RUFDcEUsZ0NBQWdDO0VBQ2hDLGtCQUFrQixFQUFFLG1EQUFtRDtFQUN2RSw4QkFBOEIsRUFBRSxpQ0FBaUM7RUFDakUseUJBQXlCLEVBQUUsK0JBQStCO0VBQzFELGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQixFQUFFLDhDQUE4QztFQUNoRSw4Q0FBOEM7QUFDaEQ7QUFFQSwwQ0FBMEM7QUFDMUM7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoiLi4vLi4vcHJvY2VkdXJlL2NvbXBvbmVudHMvcHJvY2VkdXJlL3Byb2NlZHVyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogPT09PT0gR2VuZXJhbCBUYWJsZSBTdHlsaW5nID09PT09ICovXHJcbi50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4vKiA9PT09PSBUYWJsZSBSb3cgU3R5bGVzID09PT09ICovXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG59XHJcblxyXG4ucm93Om50aC1vZi10eXBlKG9kZCkge1xyXG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk7XHJcbn1cclxuXHJcbi5yb3cuaGVhZGVyIHtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQ6ICMxODQ1Njk7XHJcbn1cclxuXHJcbi8qIEFkZGl0aW9uYWwgUm93IFN0eWxlcyAqL1xyXG4ucm93LmdyZWVuIHtcclxuICBiYWNrZ3JvdW5kOiAjMjdhZTYwO1xyXG59XHJcblxyXG4ucm93LmJsdWUge1xyXG4gIGJhY2tncm91bmQ6ICMyOTgwYjk7XHJcbn1cclxuXHJcbi8qID09PT09IFRhYmxlIENlbGxzID09PT09ICovXHJcbi5jZWxsIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xyXG59XHJcblxyXG4vKiA9PT09PSBFZGl0IEJ1dHRvbiBQb3NpdGlvbmluZyA9PT09PSAqL1xyXG4uZWRpdC1jZWxsIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi8qIEVkaXQgSWNvbiBTdHlsZXMgKi9cclxuLmVkaXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMDA3YmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5lZGl0LWljb246aG92ZXIge1xyXG4gIGNvbG9yOiAjMDA1NmIzO1xyXG59XHJcblxyXG4vKiA9PT09PSBEZXNjcmlwdGlvbiBDb250YWluZXIgZm9yIEVkaXRhYmxlIEZpZWxkcyA9PT09PSAqL1xyXG4uZGVzY3JpcHRpb24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi10ZXh0IHtcclxuICBtYXgtd2lkdGg6IDgwJTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuLyogPT09PT0gRWRpdCBNb2RlIFN0eWxlcyA9PT09PSAqL1xyXG4uZWRpdC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmVkaXQtdGV4dGFyZWEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHJlc2l6ZTogdmVydGljYWw7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuXHJcbi8qID09PT09IEFjdGlvbiBCdXR0b25zIChTYXZlICYgQ2FuY2VsKSA9PT09PSAqL1xyXG4uYWN0aW9uLWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uYWN0aW9uLWJ1dHRvbnMgYSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmNhbmNlbC1idG4gaSB7XHJcbiAgY29sb3I6ICNkOTUzNGY7XHJcbn1cclxuXHJcbi5zYXZlLWJ0biBpIHtcclxuICBjb2xvcjogIzVjYjg1YztcclxufVxyXG5cclxuLmNhbmNlbC1idG4gaTpob3ZlciB7XHJcbiAgY29sb3I6ICNjOTMwMmM7XHJcbn1cclxuXHJcbi5zYXZlLWJ0biBpOmhvdmVyIHtcclxuICBjb2xvcjogIzQ0OWQ0NDtcclxufVxyXG5cclxuLyogPT09PT0gUmVzcG9uc2l2ZSBUYWJsZSBBZGp1c3RtZW50cyA9PT09PSAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gIC50YWJsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5yb3cge1xyXG4gICAgcGFkZGluZzogMTRweCAwIDdweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLnJvdy5oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gIH1cclxuXHJcbiAgLnJvdy5oZWFkZXIgLmNlbGwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5yb3cgLmNlbGwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gIC5yb3cgLmNlbGw6YmVmb3JlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XHJcbiAgICBtaW4td2lkdGg6IDk4cHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAjOTY5Njk2O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuY2VsbCB7XHJcbiAgICBwYWRkaW5nOiAycHggMTZweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT0gQnV0dG9uIEhvdmVyIEVmZmVjdHMgPT09PT0gKi9cclxuYS5idG4ge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG59XHJcblxyXG5hLmJ0bjpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG4vKiA9PT09PSBIZWFkaW5ncyA9PT09PSAqL1xyXG5oNCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMCAwIDhweCAwO1xyXG59XHJcblxyXG4vKiA9PT09PSBJbnB1dCBGaWVsZCBBZGp1c3RtZW50cyA9PT09PSAqL1xyXG4udWktaW5wdXR0ZXh0IHtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi8qID09PT09IFByb2dyZXNzIEJhciBGaXhlcyA9PT09PSAqL1xyXG4ucHJvZ3Jlc3MtaW5uZXIge1xyXG4gIG1pbi13aWR0aDogMSUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogRW5zdXJlIHRoZSB0ZXh0YXJlYSBmaXRzIGluc2lkZSB0aGUgY2VsbCAqL1xyXG4uZWRpdC10ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogNTBweDtcclxuICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICByZXNpemU6IHZlcnRpY2FsO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBQcmV2ZW50cyBvdmVyZmxvdyBiZXlvbmQgcGFyZW50IGNlbGwgKi9cclxufVxyXG5cclxuLyogQWxpZ24gYWN0aW9uIGJ1dHRvbnMgcHJvcGVybHkgKi9cclxuLmFjdGlvbi1idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBnYXA6IDEwcHg7IC8qIEFkZHMgc3BhY2UgYmV0d2VlbiBidXR0b25zICovXHJcbn1cclxuXHJcbi8qIEFkanVzdCBDYW5jZWwgKFgpIGFuZCBTYXZlICjwn5K+KSBJY29ucyAqL1xyXG4uYWN0aW9uLWJ1dHRvbnMgYSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmNhbmNlbC1idG4gaSB7XHJcbiAgY29sb3I6ICNkOTUzNGY7XHJcbn1cclxuXHJcbi5zYXZlLWJ0biBpIHtcclxuICBjb2xvcjogIzVjYjg1YztcclxufVxyXG5cclxuLmNhbmNlbC1idG4gaTpob3ZlciB7XHJcbiAgY29sb3I6ICNjOTMwMmM7XHJcbn1cclxuXHJcbi5zYXZlLWJ0biBpOmhvdmVyIHtcclxuICBjb2xvcjogIzQ0OWQ0NDtcclxufVxyXG4vKiBDb250YWluZXIgZm9yIGNvZGUgYmxvY2sgKi9cclxuLmNvZGUtY29udGFpbmVyIHtcclxuICBtYXgtaGVpZ2h0OiA0MDBweDsgIC8qIFByZXZlbnRzIGV4Y2Vzc2l2ZSBzY3JvbGxpbmcgKi9cclxuICBvdmVyZmxvdy15OiBhdXRvOyAgLyogRW5hYmxlcyB2ZXJ0aWNhbCBzY3JvbGwgaWYgY29udGVudCBpcyB0b28gbG9uZyAqL1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDsgLyogRGFyayBiYWNrZ3JvdW5kIGZvciByZWFkYWJpbGl0eSAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNDQ0O1xyXG59XHJcblxyXG4vKiBFbnN1cmVzIG5neC1wcmlzbSBzdHlsZXMgY29ycmVjdGx5ICovXHJcbm5neC1wcmlzbSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7IC8qIFByZXZlbnRzIGhvcml6b250YWwgc2Nyb2xsaW5nICovXHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBFbnN1cmVzIGNvbnRlbnQgZG9lcyBub3Qgb3ZlcmZsb3cgaG9yaXpvbnRhbGx5ICovXHJcbiAgYmFja2dyb3VuZDogIzI3MjgyMiAhaW1wb3J0YW50OyAvKiBEYXJrIGJhY2tncm91bmQgZm9yIGNvbnRyYXN0ICovXHJcbiAgY29sb3I6ICNmOGY4ZjIgIWltcG9ydGFudDsgLyogTGlnaHQgdGV4dCBmb3IgcmVhZGFiaWxpdHkgKi9cclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogQWRqdXN0IGxpbmUgaGVpZ2h0IGZvciBiZXR0ZXIgcmVhZGFiaWxpdHkgKi9cclxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG59XHJcblxyXG4vKiBIaWRlIHVubmVjZXNzYXJ5IGhvcml6b250YWwgc2Nyb2xsYmFyICovXHJcbm5neC1wcmlzbTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA2cHg7XHJcbiAgaGVpZ2h0OiA2cHg7XHJcbn1cclxuXHJcbm5neC1wcmlzbTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICM1NTU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG5uZ3gtcHJpc206Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/procedure/components/procedure/procedure.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/procedure/components/procedure/procedure.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProcedureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcedureComponent", function() { return ProcedureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_procedure_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/procedure.service */ "./src/app/procedure/service/procedure.service.ts");



let ProcedureComponent = class ProcedureComponent {
    constructor(storedProcedureService) {
        this.storedProcedureService = storedProcedureService;
        this.storedProcedureName = "HumanResources.uspUpdateEmployeeHireInfo";
        this.iblnShowEditBox = false;
        this.language = 'plsql';
        this.iblnLoading = false;
    }
    ngOnInit() {
        this.loadMetadata();
    }
    /**
     * Extract schema from stored procedure name.
     */
    getSchema() {
        return this.storedProcedureName.split('.')[0] || '';
    }
    getStoreprocedureName() {
        return this.storedProcedureName.split('.')[1] || '';
    }
    /**
     * Fetch metadata for the stored procedure.
     */
    loadMetadata() {
        this.storedProcedureService.getStoredProcedureMetadata(this.storedProcedureName).subscribe({
            next: (data) => {
                this.iblnLoading = true;
                this.storedProcedureMetadata = data;
                this.filesTree = JSON.parse(data.storedProcedureDependenciesTree);
                QP.showPlan(document.getElementById("container"), `${this.storedProcedureMetadata.executionPlan.queryPlan}`, { jsTooltips: true });
            },
            error: (err) => console.error('Error fetching metadata:', err)
        });
    }
    /**
     * Toggle edit mode for the stored procedure description.
     */
    toggleEditBox() {
        this.iblnShowEditBox = !this.iblnShowEditBox;
    }
    CancelStoreProcMsDesciption() {
        this.iblnShowEditBox = false;
    }
    /**
     * Update stored procedure description.
     */
    updateProcedureDescription() {
        if (!this.storedProcedureMetadata.storedProcedureInfo.extendedProperty) {
            console.error('No description available to update.');
            return;
        }
        const request = {
            schemaName: this.getSchema(),
            storedProcedureName: this.getStoreprocedureName(),
            description: this.storedProcedureMetadata.storedProcedureInfo.extendedProperty
        };
        this.storedProcedureService.mergeStoredProcedureDescription(request).subscribe({
            next: () => {
                console.log('Stored procedure description updated successfully');
                this.toggleEditBox();
            },
            error: (err) => console.error('Error updating description:', err)
        });
    }
    updateParameterDescription(parameter) {
        const request = {
            schemaName: this.getSchema(),
            storedProcedureName: this.getStoreprocedureName(),
            parameterName: parameter.parameterName,
            description: parameter.extendedProperty
        };
        this.storedProcedureService.mergeParameterDescription(request).subscribe({
            next: () => {
                console.log('Parameter description updated successfully');
                this.toggleParameterEdit(parameter);
            },
            error: (err) => console.error('Error updating parameter description:', err)
        });
    }
    toggleParameterEdit(parameter) {
        parameter.isEditing = !parameter.isEditing;
    }
};
ProcedureComponent.ctorParameters = () => [
    { type: _service_procedure_service__WEBPACK_IMPORTED_MODULE_2__["ProcedureService"] }
];
ProcedureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-procedure',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./procedure.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/procedure/components/procedure/procedure.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./procedure.component.css */ "./src/app/procedure/components/procedure/procedure.component.css")).default]
    })
], ProcedureComponent);



/***/ }),

/***/ "./src/app/procedure/components/procedures/procedures.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/procedure/components/procedures/procedures.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table {\r\n  margin: 0px 0 3px 0;\r\n  width: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: table;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .table {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.row {\r\n  display: table-row;\r\n  background: #f6f6f6;\r\n}\r\n\r\n.row:nth-of-type(odd) {\r\n    background: #e9e9e9;\r\n  }\r\n\r\n.row.header {\r\n    font-weight: 900;\r\n    color: #ffffff;\r\n    background: #184569 !important;\r\n  }\r\n\r\n.row.green {\r\n    background: #27ae60;\r\n  }\r\n\r\n.row.blue {\r\n    background: #2980b9;\r\n  }\r\n\r\n@media screen and (max-width: 580px) {\r\n  .row {\r\n    padding: 14px 0 7px;\r\n    display: block;\r\n  }\r\n\r\n    .row.header {\r\n      padding: 0;\r\n      height: 6px;\r\n    }\r\n\r\n      .row.header .cell {\r\n        display: none;\r\n      }\r\n\r\n    .row .cell {\r\n      margin-bottom: 10px;\r\n    }\r\n\r\n      .row .cell:before {\r\n        margin-bottom: 3px;\r\n        content: attr(data-title);\r\n        min-width: 98px;\r\n        font-size: 10px;\r\n        line-height: 10px;\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n        color: #969696;\r\n        display: block;\r\n      }\r\n}\r\n\r\n.cell {\r\n  /*  padding: 6px 12px; */\r\n  display: table-cell;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .cell {\r\n    padding: 2px 16px;\r\n    display: block;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Byb2NlZHVyZS9jb21wb25lbnRzL3Byb2NlZHVyZXMvcHJvY2VkdXJlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx3Q0FBd0M7RUFDeEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFRTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsOEJBQThCO0VBQ2hDOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVGO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsY0FBYztFQUNoQjs7SUFFRTtNQUNFLFVBQVU7TUFDVixXQUFXO0lBQ2I7O01BRUU7UUFDRSxhQUFhO01BQ2Y7O0lBRUY7TUFDRSxtQkFBbUI7SUFDckI7O01BRUU7UUFDRSxrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQix5QkFBeUI7UUFDekIsY0FBYztRQUNkLGNBQWM7TUFDaEI7QUFDTjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCO0FBQ0YiLCJmaWxlIjoiLi4vLi4vcHJvY2VkdXJlL2NvbXBvbmVudHMvcHJvY2VkdXJlcy9wcm9jZWR1cmVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xyXG4gIG1hcmdpbjogMHB4IDAgM3B4IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAudGFibGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxufVxyXG5cclxuICAucm93Om50aC1vZi10eXBlKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZDogI2U5ZTllOTtcclxuICB9XHJcblxyXG4gIC5yb3cuaGVhZGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQ6ICMxODQ1NjkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5yb3cuZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZDogIzI3YWU2MDtcclxuICB9XHJcblxyXG4gIC5yb3cuYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjk4MGI5O1xyXG4gIH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgLnJvdyB7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDAgN3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAgIC5yb3cuaGVhZGVyIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgaGVpZ2h0OiA2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgICAucm93LmhlYWRlciAuY2VsbCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgIC5yb3cgLmNlbGwge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICAgLnJvdyAuY2VsbDpiZWZvcmUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xyXG4gICAgICAgIG1pbi13aWR0aDogOThweDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBjb2xvcjogIzk2OTY5NjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG59XHJcblxyXG4uY2VsbCB7XHJcbiAgLyogIHBhZGRpbmc6IDZweCAxMnB4OyAqL1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgLmNlbGwge1xyXG4gICAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/procedure/components/procedures/procedures.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/procedure/components/procedures/procedures.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProceduresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProceduresComponent", function() { return ProceduresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_procedure_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/procedure.service */ "./src/app/procedure/service/procedure.service.ts");



let ProceduresComponent = class ProceduresComponent {
    constructor(storedProcedureService) {
        this.storedProcedureService = storedProcedureService;
        this.storedProcedures = [];
        this.isLoading = true;
        this.errorMessage = '';
    }
    ngOnInit() {
        this.loadStoredProcedures();
    }
    /**
       * Fetch all stored procedures.
       */
    loadStoredProcedures() {
        this.storedProcedureService.getAllStoredProcedures().subscribe({
            next: (data) => {
                this.storedProcedures = data;
            },
            error: (err) => console.error('Error fetching stored procedures:', err)
        });
    }
};
ProceduresComponent.ctorParameters = () => [
    { type: _service_procedure_service__WEBPACK_IMPORTED_MODULE_2__["ProcedureService"] }
];
ProceduresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-procedures',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./procedures.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/procedure/components/procedures/procedures.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./procedures.component.css */ "./src/app/procedure/components/procedures/procedures.component.css")).default]
    })
], ProceduresComponent);



/***/ }),

/***/ "./src/app/procedure/procedure.module.ts":
/*!***********************************************!*\
  !*** ./src/app/procedure/procedure.module.ts ***!
  \***********************************************/
/*! exports provided: ProcedureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcedureModule", function() { return ProcedureModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_procedures_procedures_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/procedures/procedures.component */ "./src/app/procedure/components/procedures/procedures.component.ts");
/* harmony import */ var _components_procedure_procedure_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/procedure/procedure.component */ "./src/app/procedure/components/procedure/procedure.component.ts");
/* harmony import */ var _service_procedure_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/procedure.service */ "./src/app/procedure/service/procedure.service.ts");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/fesm2015/primeng-accordion.js");
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tree */ "./node_modules/primeng/fesm2015/primeng-tree.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/contextmenu */ "./node_modules/primeng/fesm2015/primeng-contextmenu.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/fesm2015/primeng-tabview.js");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/codehighlighter */ "./node_modules/primeng/fesm2015/primeng-codehighlighter.js");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/breadcrumb */ "./node_modules/primeng/fesm2015/primeng-breadcrumb.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/fesm2015/primeng-dialog.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/fesm2015/primeng-inputtextarea.js");
/* harmony import */ var angular_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-progress-bar */ "./node_modules/angular-progress-bar/fesm2015/angular-progress-bar.js");









/* ===== Amexio Modules ===== */

/* ===== PrimeNG Modules ===== */










/* ===== Other Third-Party Modules ===== */

let ProcedureModule = class ProcedureModule {
};
ProcedureModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_procedures_procedures_component__WEBPACK_IMPORTED_MODULE_6__["ProceduresComponent"],
            _components_procedure_procedure_component__WEBPACK_IMPORTED_MODULE_7__["ProcedureComponent"]
        ],
        imports: [
            /* Core Modules */
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            /* Amexio Modules */
            amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_9__["AmexioDataModule"],
            amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_9__["AmexioWidgetModule"],
            amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_9__["AmexioChartsModule"],
            amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_9__["AmexioEnterpriseModule"],
            /* PrimeNG Modules */
            primeng_accordion__WEBPACK_IMPORTED_MODULE_10__["AccordionModule"],
            primeng_tree__WEBPACK_IMPORTED_MODULE_11__["TreeModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_12__["ToastModule"],
            primeng_contextmenu__WEBPACK_IMPORTED_MODULE_14__["ContextMenuModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_15__["TabViewModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_16__["CodeHighlighterModule"],
            primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_17__["BreadcrumbModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_13__["ButtonModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_18__["DialogModule"],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_19__["InputTextareaModule"],
            /* Other Third-Party Modules */
            angular_progress_bar__WEBPACK_IMPORTED_MODULE_20__["ProgressBarModule"]
        ],
        providers: [_service_procedure_service__WEBPACK_IMPORTED_MODULE_8__["ProcedureService"]],
        exports: [
            _components_procedures_procedures_component__WEBPACK_IMPORTED_MODULE_6__["ProceduresComponent"],
            _components_procedure_procedure_component__WEBPACK_IMPORTED_MODULE_7__["ProcedureComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], ProcedureModule);



/***/ }),

/***/ "./src/app/procedure/service/procedure.service.ts":
/*!********************************************************!*\
  !*** ./src/app/procedure/service/procedure.service.ts ***!
  \********************************************************/
/*! exports provided: ProcedureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcedureService", function() { return ProcedureService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let ProcedureService = class ProcedureService {
    constructor(primaryUrl, http) {
        this.http = http;
        this.baseUrl = ''; // Update this with actual API URL
        this.baseUrl = primaryUrl + '/StoredProcedure';
    }
    /**
     * Get all stored procedures.
     */
    getAllStoredProcedures() {
        return this.http.get(`${this.baseUrl}/AllStoredProcedures`);
    }
    /**
     * Get metadata of a specific stored procedure.
     * @param storedProcedureName The name of the stored procedure.
     */
    getStoredProcedureMetadata(storedProcedureName) {
        return this.http.get(`${this.baseUrl}/${storedProcedureName}/metadata`);
    }
    /**
     * Merge stored procedure description.
     * @param request The request body containing schema name, stored procedure name, and description.
     */
    mergeStoredProcedureDescription(request) {
        return this.http.post(`${this.baseUrl}/description`, request);
    }
    /**
     * Merge parameter description of a stored procedure.
     * @param request The request body containing schema name, stored procedure name, parameter name, and description.
     */
    mergeParameterDescription(request) {
        return this.http.post(`${this.baseUrl}/parameter/description`, request);
    }
};
ProcedureService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: ['API_URL',] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ProcedureService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])('API_URL'))
], ProcedureService);



/***/ }),

/***/ "./src/app/table/components/table/edit-column-description-dialog/edit-column-description-dialog.component.css":
/*!********************************************************************************************************************!*\
  !*** ./src/app/table/components/table/edit-column-description-dialog/edit-column-description-dialog.component.css ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi90YWJsZS9jb21wb25lbnRzL3RhYmxlL2VkaXQtY29sdW1uLWRlc2NyaXB0aW9uLWRpYWxvZy9lZGl0LWNvbHVtbi1kZXNjcmlwdGlvbi1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/table/components/table/edit-column-description-dialog/edit-column-description-dialog.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/table/components/table/edit-column-description-dialog/edit-column-description-dialog.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: EditColumnDescriptionDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditColumnDescriptionDialogComponent", function() { return EditColumnDescriptionDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EditColumnDescriptionDialogComponent = class EditColumnDescriptionDialogComponent {
    constructor() {
        this.saveColumnDescription = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cancelColumnEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    saveDescription() {
        this.saveColumnDescription.emit();
    }
    cancelEdit() {
        this.cancelColumnEdit.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EditColumnDescriptionDialogComponent.prototype, "displayColumnDialog", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EditColumnDescriptionDialogComponent.prototype, "selectedColumn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], EditColumnDescriptionDialogComponent.prototype, "saveColumnDescription", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], EditColumnDescriptionDialogComponent.prototype, "cancelColumnEdit", void 0);
EditColumnDescriptionDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-column-description-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-column-description-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/table/components/table/edit-column-description-dialog/edit-column-description-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-column-description-dialog.component.css */ "./src/app/table/components/table/edit-column-description-dialog/edit-column-description-dialog.component.css")).default]
    })
], EditColumnDescriptionDialogComponent);



/***/ }),

/***/ "./src/app/table/components/table/edit-description-dialog/edit-description-dialog.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/table/components/table/edit-description-dialog/edit-description-dialog.component.css ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi90YWJsZS9jb21wb25lbnRzL3RhYmxlL2VkaXQtZGVzY3JpcHRpb24tZGlhbG9nL2VkaXQtZGVzY3JpcHRpb24tZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/table/components/table/edit-description-dialog/edit-description-dialog.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/table/components/table/edit-description-dialog/edit-description-dialog.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: EditDescriptionDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDescriptionDialogComponent", function() { return EditDescriptionDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EditDescriptionDialogComponent = class EditDescriptionDialogComponent {
    constructor() {
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    saveDescription() {
        this.save.emit();
    }
    cancelEdit() {
        this.cancel.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EditDescriptionDialogComponent.prototype, "displayDialog", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EditDescriptionDialogComponent.prototype, "selectedDescription", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EditDescriptionDialogComponent.prototype, "hasEditPermission", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], EditDescriptionDialogComponent.prototype, "save", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], EditDescriptionDialogComponent.prototype, "cancel", void 0);
EditDescriptionDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-description-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-description-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/table/components/table/edit-description-dialog/edit-description-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-description-dialog.component.css */ "./src/app/table/components/table/edit-description-dialog/edit-description-dialog.component.css")).default]
    })
], EditDescriptionDialogComponent);



/***/ }),

/***/ "./src/app/table/components/table/sql-script-viewer/sql-script-viewer.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/table/components/table/sql-script-viewer/sql-script-viewer.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Add any specific styles for the SQL script viewer here */\r\n.table {\r\n    width: 100%;\r\n  }\r\n.row {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin-right: -15px;\r\n    margin-left: 0px;\r\n \r\n  }\r\n.header {\r\n    font-weight: bold;\r\n  }\r\n.cell {\r\n    padding: 8px;\r\n  }\r\npre {\r\n    white-space: pre-wrap; /* Ensures the script wraps and is readable */\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3RhYmxlL2NvbXBvbmVudHMvdGFibGUvc3FsLXNjcmlwdC12aWV3ZXIvc3FsLXNjcmlwdC12aWV3ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyREFBMkQ7QUFDM0Q7SUFDSSxXQUFXO0VBQ2I7QUFFQTtJQUNFLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjs7RUFFbEI7QUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUVBO0lBQ0UsWUFBWTtFQUNkO0FBRUE7SUFDRSxxQkFBcUIsRUFBRSw2Q0FBNkM7RUFDdEUiLCJmaWxlIjoiLi4vLi4vdGFibGUvY29tcG9uZW50cy90YWJsZS9zcWwtc2NyaXB0LXZpZXdlci9zcWwtc2NyaXB0LXZpZXdlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQWRkIGFueSBzcGVjaWZpYyBzdHlsZXMgZm9yIHRoZSBTUUwgc2NyaXB0IHZpZXdlciBoZXJlICovXHJcbi50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiBcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgLmNlbGwge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gIH1cclxuICBcclxuICBwcmUge1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwOyAvKiBFbnN1cmVzIHRoZSBzY3JpcHQgd3JhcHMgYW5kIGlzIHJlYWRhYmxlICovXHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/table/components/table/sql-script-viewer/sql-script-viewer.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/table/components/table/sql-script-viewer/sql-script-viewer.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SqlScriptViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqlScriptViewerComponent", function() { return SqlScriptViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SqlScriptViewerComponent = class SqlScriptViewerComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SqlScriptViewerComponent.prototype, "script", void 0);
SqlScriptViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sql-script-viewer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sql-script-viewer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/table/components/table/sql-script-viewer/sql-script-viewer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sql-script-viewer.component.css */ "./src/app/table/components/table/sql-script-viewer/sql-script-viewer.component.css")).default]
    })
], SqlScriptViewerComponent);



/***/ }),

/***/ "./src/app/table/components/table/table.component.css":
/*!************************************************************!*\
  !*** ./src/app/table/components/table/table.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table {\r\n  margin: 0px 0 3px 0;\r\n  width: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: table;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .table {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.row {\r\n  display: table-row;\r\n  background: #f6f6f6;\r\n}\r\n\r\n.row:nth-of-type(odd) {\r\n    background: #e9e9e9;\r\n  }\r\n\r\n.row.header {\r\n    font-weight: 900;\r\n    color: #ffffff;\r\n    background: #184569 !important;\r\n  }\r\n\r\n.row.green {\r\n    background: #27ae60;\r\n  }\r\n\r\n.row.blue {\r\n    background: #2980b9;\r\n  }\r\n\r\n@media screen and (max-width: 580px) {\r\n  .row {\r\n    padding: 14px 0 7px;\r\n    display: block;\r\n  }\r\n\r\n    .row.header {\r\n      padding: 0;\r\n      height: 6px;\r\n    }\r\n\r\n      .row.header .cell {\r\n        display: none;\r\n      }\r\n\r\n    .row .cell {\r\n      margin-bottom: 10px;\r\n    }\r\n\r\n      .row .cell:before {\r\n        margin-bottom: 3px;\r\n        content: attr(data-title);\r\n        min-width: 98px;\r\n        font-size: 10px;\r\n        line-height: 10px;\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n        color: #969696;\r\n        display: block;\r\n      }\r\n}\r\n\r\n.cell {\r\n  /*  padding: 6px 12px; */\r\n  display: table-cell;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .cell {\r\n    padding: 2px 16px;\r\n    display: block;\r\n  }\r\n}\r\n\r\na.btn:hover {\r\n  -webkit-transform: scale(1.1);\r\n  -moz-transform: scale(1.1);\r\n  -o-transform: scale(1.1);\r\n}\r\n\r\na.btn {\r\n  -webkit-transform: scale(0.8);\r\n  -moz-transform: scale(0.8);\r\n  -o-transform: scale(0.8);\r\n  -webkit-transition-duration: 0.5s;\r\n  -moz-transition-duration: 0.5s;\r\n  -o-transition-duration: 0.5s;\r\n}\r\n\r\n#RotateDiv {\r\n  /* background-color: yellow;\r\n  border: 1px solid black;\r\n  -webkit-transform: rotateZ(90deg);  \r\n  transform: rotateZ(90deg);   */\r\n}\r\n\r\nh4 {\r\n  text-align: center;\r\n  margin: 0 0 8px 0;\r\n}\r\n\r\n.ui-inputtext {\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n  font-size: 12px;\r\n}\r\n\r\n.progress-inner {\r\n  min-width: 1% !important;\r\n}\r\n\r\n/* Code container for improved readability */\r\n\r\n.code-container {\r\n  max-height: 400px;  /* Prevents excessive scrolling */\r\n  overflow-y: auto;  /* Enables vertical scroll when needed */\r\n  padding: 10px;\r\n  background-color: #2d2d2d; /* Dark background for contrast */\r\n  border-radius: 5px;\r\n  border: 1px solid #444;\r\n}\r\n\r\n/* ngx-prism styling for better text display */\r\n\r\nngx-prism {\r\n  display: block;\r\n  white-space: pre-wrap !important; /* Ensures proper line breaks */\r\n  word-wrap: break-word !important; /* Prevents long lines from breaking UI */\r\n  overflow-x: auto; /* Enables horizontal scroll for very long SQL statements */\r\n  background: #272822 !important; /* Dark theme for syntax highlighting */\r\n  color: #f8f8f2 !important; /* Light text for readability */\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  font-size: 14px;\r\n  line-height: 1.5; /* Increases spacing for better readability */\r\n  font-family: 'Courier New', Courier, monospace;\r\n}\r\n\r\n/* Scrollbar customization for better UX */\r\n\r\nngx-prism::-webkit-scrollbar {\r\n  width: 6px;\r\n  height: 6px;\r\n}\r\n\r\nngx-prism::-webkit-scrollbar-thumb {\r\n  background: #555;\r\n  border-radius: 3px;\r\n}\r\n\r\nngx-prism::-webkit-scrollbar-track {\r\n  background: #222;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3RhYmxlL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsd0NBQXdDO0VBQ3hDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUU7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLDhCQUE4QjtFQUNoQzs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFRjtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLGNBQWM7RUFDaEI7O0lBRUU7TUFDRSxVQUFVO01BQ1YsV0FBVztJQUNiOztNQUVFO1FBQ0UsYUFBYTtNQUNmOztJQUVGO01BQ0UsbUJBQW1CO0lBQ3JCOztNQUVFO1FBQ0Usa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QixlQUFlO1FBQ2YsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIseUJBQXlCO1FBQ3pCLGNBQWM7UUFDZCxjQUFjO01BQ2hCO0FBQ047O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjtBQUNGOztBQUdBO0VBQ0UsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QixpQ0FBaUM7RUFDakMsOEJBQThCO0VBQzlCLDRCQUE0QjtBQUM5Qjs7QUFHQTtFQUNFOzs7Z0NBRzhCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFDQSw0Q0FBNEM7O0FBQzVDO0VBQ0UsaUJBQWlCLEdBQUcsaUNBQWlDO0VBQ3JELGdCQUFnQixHQUFHLHdDQUF3QztFQUMzRCxhQUFhO0VBQ2IseUJBQXlCLEVBQUUsaUNBQWlDO0VBQzVELGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUEsOENBQThDOztBQUM5QztFQUNFLGNBQWM7RUFDZCxnQ0FBZ0MsRUFBRSwrQkFBK0I7RUFDakUsZ0NBQWdDLEVBQUUseUNBQXlDO0VBQzNFLGdCQUFnQixFQUFFLDJEQUEyRDtFQUM3RSw4QkFBOEIsRUFBRSx1Q0FBdUM7RUFDdkUseUJBQXlCLEVBQUUsK0JBQStCO0VBQzFELGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQixFQUFFLDZDQUE2QztFQUMvRCw4Q0FBOEM7QUFDaEQ7O0FBRUEsMENBQTBDOztBQUMxQztFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6Ii4uLy4uL3RhYmxlL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB7XHJcbiAgbWFyZ2luOiAwcHggMCAzcHggMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gIC50YWJsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG59XHJcblxyXG4gIC5yb3c6bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xyXG4gIH1cclxuXHJcbiAgLnJvdy5oZWFkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzE4NDU2OSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnJvdy5ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjdhZTYwO1xyXG4gIH1cclxuXHJcbiAgLnJvdy5ibHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICMyOTgwYjk7XHJcbiAgfVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAucm93IHtcclxuICAgIHBhZGRpbmc6IDE0cHggMCA3cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICAgLnJvdy5oZWFkZXIge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBoZWlnaHQ6IDZweDtcclxuICAgIH1cclxuXHJcbiAgICAgIC5yb3cuaGVhZGVyIC5jZWxsIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgLnJvdyAuY2VsbCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgICAucm93IC5jZWxsOmJlZm9yZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XHJcbiAgICAgICAgbWluLXdpZHRoOiA5OHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiAjOTY5Njk2O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbn1cclxuXHJcbi5jZWxsIHtcclxuICAvKiAgcGFkZGluZzogNnB4IDEycHg7ICovXHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAuY2VsbCB7XHJcbiAgICBwYWRkaW5nOiAycHggMTZweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmEuYnRuOmhvdmVyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbmEuYnRuIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxuICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG59XHJcblxyXG5cclxuI1JvdGF0ZURpdiB7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDkwZGVnKTsgIFxyXG4gIHRyYW5zZm9ybTogcm90YXRlWig5MGRlZyk7ICAgKi9cclxufVxyXG5cclxuaDQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDAgMCA4cHggMDtcclxufVxyXG5cclxuLnVpLWlucHV0dGV4dCB7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtaW5uZXIge1xyXG4gIG1pbi13aWR0aDogMSUgIWltcG9ydGFudDtcclxufVxyXG4vKiBDb2RlIGNvbnRhaW5lciBmb3IgaW1wcm92ZWQgcmVhZGFiaWxpdHkgKi9cclxuLmNvZGUtY29udGFpbmVyIHtcclxuICBtYXgtaGVpZ2h0OiA0MDBweDsgIC8qIFByZXZlbnRzIGV4Y2Vzc2l2ZSBzY3JvbGxpbmcgKi9cclxuICBvdmVyZmxvdy15OiBhdXRvOyAgLyogRW5hYmxlcyB2ZXJ0aWNhbCBzY3JvbGwgd2hlbiBuZWVkZWQgKi9cclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7IC8qIERhcmsgYmFja2dyb3VuZCBmb3IgY29udHJhc3QgKi9cclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ0NDtcclxufVxyXG5cclxuLyogbmd4LXByaXNtIHN0eWxpbmcgZm9yIGJldHRlciB0ZXh0IGRpc3BsYXkgKi9cclxubmd4LXByaXNtIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXAgIWltcG9ydGFudDsgLyogRW5zdXJlcyBwcm9wZXIgbGluZSBicmVha3MgKi9cclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDsgLyogUHJldmVudHMgbG9uZyBsaW5lcyBmcm9tIGJyZWFraW5nIFVJICovXHJcbiAgb3ZlcmZsb3cteDogYXV0bzsgLyogRW5hYmxlcyBob3Jpem9udGFsIHNjcm9sbCBmb3IgdmVyeSBsb25nIFNRTCBzdGF0ZW1lbnRzICovXHJcbiAgYmFja2dyb3VuZDogIzI3MjgyMiAhaW1wb3J0YW50OyAvKiBEYXJrIHRoZW1lIGZvciBzeW50YXggaGlnaGxpZ2h0aW5nICovXHJcbiAgY29sb3I6ICNmOGY4ZjIgIWltcG9ydGFudDsgLyogTGlnaHQgdGV4dCBmb3IgcmVhZGFiaWxpdHkgKi9cclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogSW5jcmVhc2VzIHNwYWNpbmcgZm9yIGJldHRlciByZWFkYWJpbGl0eSAqL1xyXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbn1cclxuXHJcbi8qIFNjcm9sbGJhciBjdXN0b21pemF0aW9uIGZvciBiZXR0ZXIgVVggKi9cclxubmd4LXByaXNtOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDZweDtcclxuICBoZWlnaHQ6IDZweDtcclxufVxyXG5cclxubmd4LXByaXNtOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogIzU1NTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbm5neC1wcmlzbTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICMyMjI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/table/components/table/table.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/table/components/table/table.component.ts ***!
  \***********************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_table_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/table.service */ "./src/app/table/service/table.service.ts");




let TableComponent = class TableComponent {
    constructor(tableService, http, cd) {
        this.tableService = tableService;
        this.http = http;
        this.cd = cd;
        this.tableName = "HumanResources.Employee";
        this.columns = [];
        this.tableFragmentations = [];
        this.createScript = { script: "" };
        this.descriptions = [];
        this.indices = [];
        this.foreignKeys = [];
        this.properties = [];
        this.selectedDescription = { name: "", value: "", table: "" };
        this.selectedColumn = {
            tableName: "",
            columnName: "",
            key: "",
            identity: "",
            dataType: "",
            maxLength: "",
            allowNulls: "",
            default: "",
            description: "",
            descriptionname: "",
            extendedPropertyName: "",
            extendedPropertyValue: ""
        };
        this.language = 'plsql';
    }
    ngOnInit() {
        this.loadTableMetadata();
        this.loadData();
    }
    loadData() {
        this.hasEditPermission = true;
    }
    ngAfterViewInit() {
        window.Prism.highlightAll();
    }
    loadTableMetadata() {
        this.tableService.loadTableMetadata(this.tableName).subscribe({
            next: (metadata) => metadata ? this.handleLoadSuccess(metadata) : null,
            error: (error) => this.handleLoadError(error)
        });
    }
    handleLoadSuccess(result) {
        this.descriptions = result.descriptions;
        this.columns = result.columns;
        this.createScript = result.createScript;
        this.indices = result.indices;
        this.foreignKeys = result.foreignKeys;
        this.properties = result.properties;
        this.tableconstraint = result.constraint;
        this.tableFragmentations = result.tableFragmentations;
        this.filesTree = JSON.parse(result.tableDependenciesTree);
    }
    handleLoadError(error) {
        console.error(error);
    }
    editDescription(description) {
        this.selectedDescription = { ...description };
        this.displayDialog = true;
    }
    saveDescription() {
        const index = this.descriptions.findIndex((desc) => desc.name === this.selectedDescription.name && desc.table === this.selectedDescription.table);
        if (index !== -1) {
            this.descriptions[index] = { ...this.selectedDescription };
            this.tableService.updateTableExtendedProperties(this.selectedDescription).subscribe({
                next: () => this.displayDialog = false,
                error: (error) => console.error("Error:", error)
            });
        }
    }
    cancelEdit() {
        this.displayDialog = false;
    }
    editColumnDescription(selectedColumn) {
        this.selectedColumn = { ...selectedColumn };
        this.displayColumnDialog = true;
    }
    saveColumnDescription() {
        const index = this.columns.findIndex((desc) => desc.tableName === this.selectedColumn.tableName && desc.columnName === this.selectedColumn.columnName);
        if (index !== -1) {
            this.columns[index] = { ...this.selectedColumn };
            this.tableService.updateTableColumnExtendedProperty(this.selectedColumn).subscribe({
                next: () => this.displayColumnDialog = false,
                error: (error) => console.error("Error:", error)
            });
        }
    }
    cancelColumnEdit() {
        this.displayColumnDialog = false;
    }
};
TableComponent.ctorParameters = () => [
    { type: _service_table_service__WEBPACK_IMPORTED_MODULE_3__["TableService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
];
TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-table",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/table/components/table/table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table.component.css */ "./src/app/table/components/table/table.component.css")).default]
    })
], TableComponent);



/***/ }),

/***/ "./src/app/table/components/tables/tables.component.css":
/*!**************************************************************!*\
  !*** ./src/app/table/components/tables/tables.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" /* Style for table header */\r\n .p-table thead th {\r\n    text-align: left;\r\n    padding: 8px;\r\n    background-color: #f4f4f4;\r\n  }\r\n /* Style for table cells */\r\n .p-table td {\r\n    padding: 8px;\r\n    border-bottom: 1px solid #ddd;\r\n  }\r\n /* Style for the expanded row content */\r\n .table {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n    margin-top: 10px;\r\n  }\r\n .table .row {\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n .table .header {\r\n    font-weight: bold;\r\n    background-color: #f4f4f4;\r\n  }\r\n .table .cell {\r\n    padding: 8px;\r\n    border-bottom: 1px solid #ddd;\r\n    flex: 1;\r\n  }\r\n .table .row:nth-child(even) {\r\n    background-color: #f9f9f9;\r\n  }\r\n .table .row:hover {\r\n    background-color: #f1f1f1;\r\n  }\r\n /* Add hover effect for row togglers */\r\n .p-table a {\r\n    text-decoration: none;\r\n    color: #007bff;\r\n  }\r\n .p-table a:hover {\r\n    text-decoration: underline;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3RhYmxlL2NvbXBvbmVudHMvdGFibGVzL3RhYmxlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDLDJCQUEyQjtDQUMzQjtJQUNHLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1oseUJBQXlCO0VBQzNCO0NBRUEsMEJBQTBCO0NBQzFCO0lBQ0UsWUFBWTtJQUNaLDZCQUE2QjtFQUMvQjtDQUVBLHVDQUF1QztDQUN2QztJQUNFLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsZ0JBQWdCO0VBQ2xCO0NBRUE7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0VBQ2hDO0NBRUE7SUFDRSxpQkFBaUI7SUFDakIseUJBQXlCO0VBQzNCO0NBRUE7SUFDRSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLE9BQU87RUFDVDtDQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0NBRUE7SUFDRSx5QkFBeUI7RUFDM0I7Q0FFQSxzQ0FBc0M7Q0FDdEM7SUFDRSxxQkFBcUI7SUFDckIsY0FBYztFQUNoQjtDQUVBO0lBQ0UsMEJBQTBCO0VBQzVCIiwiZmlsZSI6Ii4uLy4uL3RhYmxlL2NvbXBvbmVudHMvdGFibGVzL3RhYmxlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC8qIFN0eWxlIGZvciB0YWJsZSBoZWFkZXIgKi9cclxuIC5wLXRhYmxlIHRoZWFkIHRoIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG4gIH1cclxuXHJcbiAgLyogU3R5bGUgZm9yIHRhYmxlIGNlbGxzICovXHJcbiAgLnAtdGFibGUgdGQge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgfVxyXG5cclxuICAvKiBTdHlsZSBmb3IgdGhlIGV4cGFuZGVkIHJvdyBjb250ZW50ICovXHJcbiAgLnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAudGFibGUgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgLnRhYmxlIC5oZWFkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG4gIH1cclxuXHJcbiAgLnRhYmxlIC5jZWxsIHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcblxyXG4gIC50YWJsZSAucm93Om50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gIH1cclxuXHJcbiAgLnRhYmxlIC5yb3c6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICB9XHJcblxyXG4gIC8qIEFkZCBob3ZlciBlZmZlY3QgZm9yIHJvdyB0b2dnbGVycyAqL1xyXG4gIC5wLXRhYmxlIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgfVxyXG5cclxuICAucC10YWJsZSBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/table/components/tables/tables.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/table/components/tables/tables.component.ts ***!
  \*************************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");




let TablesComponent = class TablesComponent {
    constructor(http, primaryUrl, secondaryUrl) {
        this.http = http;
        this.primaryUrl = primaryUrl;
        this.secondaryUrl = secondaryUrl;
    }
    ngOnInit() {
        this.cols = [
            { field: 'tableName', header: 'extendedPropertyValue' },
            { field: 'extendedPropertyValue', header: 'tableColumns' }
        ];
        this.loadTablesMetadata();
    }
    loadTablesMetadata() {
        const primaryUrl = `${this.primaryUrl}/Tables/GetTableDetails`;
        const secondaryUrl = 'Tables/GetTableDetails';
        // Try the primary URL
        this.http.get(primaryUrl).subscribe((result) => this.handleLoadSuccess(result), (error) => {
            console.error('Primary URL failed, trying secondary URL:', error);
            // If the primary URL fails, try the secondary URL
            this.http.get(secondaryUrl).subscribe((secondaryResult) => this.handleLoadSuccess(secondaryResult), (secondaryError) => this.handleLoadError(secondaryError));
        });
    }
    handleLoadSuccess(result) {
        this.tables = result;
    }
    handleLoadError(error) {
        console.error(error);
    }
};
TablesComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['API_URL',] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['ANOTHER_URL',] }] }
];
TablesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tables',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tables.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/table/components/tables/tables.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('rowExpansionTrigger', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                    transform: 'translateX(-10%)',
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                    transform: 'translateX(0)',
                    opacity: 1
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tables.component.css */ "./src/app/table/components/tables/tables.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('API_URL')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('ANOTHER_URL'))
], TablesComponent);



/***/ }),

/***/ "./src/app/table/service/table.service.ts":
/*!************************************************!*\
  !*** ./src/app/table/service/table.service.ts ***!
  \************************************************/
/*! exports provided: TableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return TableService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let TableService = class TableService {
    constructor(primaryUrl, secondaryUrl, http) {
        this.primaryUrl = primaryUrl;
        this.secondaryUrl = secondaryUrl;
        this.http = http;
    }
    loadTableMetadata(tableName) {
        const primaryUrl = `${this.primaryUrl}/Tables/GetTableMetaData?tableName=${tableName}`;
        const secondaryUrl = `Tables/GetTableMetaData?tableName=${tableName}`;
        const primaryRequest = this.http.get(primaryUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2) // Retry the primary request up to 2 times before failing over
        );
        const secondaryRequest = this.http.get(secondaryUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2) // Optionally retry the secondary request as well
        );
        return primaryRequest.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            console.error('Primary API URL failed after retries:', error);
            return secondaryRequest.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((secondaryError) => {
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
    updateTableExtendedProperties(description) {
        return this.http.post(`${this.primaryUrl}/UpdateTableExtendedProperties`, description);
    }
    /**
     * Updates the extended properties of a table column.
     * @param column Table column object
     * @returns Observable<any>
     */
    updateTableColumnExtendedProperty(column) {
        return this.http.post(`${this.primaryUrl}/UpdateTableColumnExtendedProperty`, column);
    }
};
TableService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['API_URL',] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['ANOTHER_URL',] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TableService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('API_URL')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('ANOTHER_URL'))
], TableService);



/***/ }),

/***/ "./src/app/table/service/tables.service.ts":
/*!*************************************************!*\
  !*** ./src/app/table/service/tables.service.ts ***!
  \*************************************************/
/*! exports provided: TablesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesService", function() { return TablesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TablesService = class TablesService {
    constructor(apiUrl, anotherUrl) {
        this.apiUrl = apiUrl;
        this.anotherUrl = anotherUrl;
    }
};
TablesService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['API_URL',] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['ANOTHER_URL',] }] }
];
TablesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('API_URL')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('ANOTHER_URL'))
], TablesService);



/***/ }),

/***/ "./src/app/table/tables.module.ts":
/*!****************************************!*\
  !*** ./src/app/table/tables.module.ts ***!
  \****************************************/
/*! exports provided: TablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/table/table.component */ "./src/app/table/components/table/table.component.ts");
/* harmony import */ var _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tables/tables.component */ "./src/app/table/components/tables/tables.component.ts");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/fesm2015/primeng-accordion.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/fesm2015/primeng-table.js");
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tree */ "./node_modules/primeng/fesm2015/primeng-tree.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/contextmenu */ "./node_modules/primeng/fesm2015/primeng-contextmenu.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/fesm2015/primeng-tabview.js");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/codehighlighter */ "./node_modules/primeng/fesm2015/primeng-codehighlighter.js");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/breadcrumb */ "./node_modules/primeng/fesm2015/primeng-breadcrumb.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var angular_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-progress-bar */ "./node_modules/angular-progress-bar/fesm2015/angular-progress-bar.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/fesm2015/primeng-dialog.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/fesm2015/primeng-inputtextarea.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_table_edit_description_dialog_edit_description_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/table/edit-description-dialog/edit-description-dialog.component */ "./src/app/table/components/table/edit-description-dialog/edit-description-dialog.component.ts");
/* harmony import */ var _components_table_edit_column_description_dialog_edit_column_description_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/table/edit-column-description-dialog/edit-column-description-dialog.component */ "./src/app/table/components/table/edit-column-description-dialog/edit-column-description-dialog.component.ts");
/* harmony import */ var _components_table_sql_script_viewer_sql_script_viewer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/table/sql-script-viewer/sql-script-viewer.component */ "./src/app/table/components/table/sql-script-viewer/sql-script-viewer.component.ts");
/* harmony import */ var _service_table_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./service/table.service */ "./src/app/table/service/table.service.ts");
/* harmony import */ var _service_tables_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./service/tables.service */ "./src/app/table/service/tables.service.ts");


























let TablesModule = class TablesModule {
};
TablesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"], _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"], _components_table_edit_description_dialog_edit_description_dialog_component__WEBPACK_IMPORTED_MODULE_21__["EditDescriptionDialogComponent"], _components_table_edit_column_description_dialog_edit_column_description_dialog_component__WEBPACK_IMPORTED_MODULE_22__["EditColumnDescriptionDialogComponent"], _components_table_sql_script_viewer_sql_script_viewer_component__WEBPACK_IMPORTED_MODULE_23__["SqlScriptViewerComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
            amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioDataModule"],
            amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"],
            amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioChartsModule"],
            amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioEnterpriseModule"],
            primeng_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"],
            primeng_tree__WEBPACK_IMPORTED_MODULE_8__["TreeModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"],
            primeng_contextmenu__WEBPACK_IMPORTED_MODULE_11__["ContextMenuModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_12__["TabViewModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_13__["CodeHighlighterModule"],
            primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_14__["BreadcrumbModule"],
            angular_progress_bar__WEBPACK_IMPORTED_MODULE_16__["ProgressBarModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_17__["DialogModule"],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_18__["InputTextareaModule"]
        ],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_15__["TreeDragDropService"], primeng_api__WEBPACK_IMPORTED_MODULE_15__["MessageService"], _service_table_service__WEBPACK_IMPORTED_MODULE_24__["TableService"], _service_tables_service__WEBPACK_IMPORTED_MODULE_25__["TablesService"]],
        exports: [_components_table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"], _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], TablesModule);



/***/ }),

/***/ "./src/app/ui/footer/footer.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/footer/footer.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer{\r\n    \r\n  border: 1px solid blue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3VpL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoiLi4vLi4vdWkvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVye1xyXG4gICAgXHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/ui/footer/footer.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/footer/footer.component.ts ***!
  \***********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/ui/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/ui/header/header.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/header/header.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi91aS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/ui/header/header.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/header/header.component.ts ***!
  \***********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    onChangeServer(event) {
        const selectedServer = event.target.value;
        console.log('Selected SQL Server:', selectedServer);
        // Handle the change as needed
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/ui/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/ui/main-page/main-page.component.css":
/*!******************************************************!*\
  !*** ./src/app/ui/main-page/main-page.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi91aS9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/ui/main-page/main-page.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/ui/main-page/main-page.component.ts ***!
  \*****************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainPageComponent = class MainPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/main-page/main-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-page.component.css */ "./src/app/ui/main-page/main-page.component.css")).default]
    })
], MainPageComponent);



/***/ }),

/***/ "./src/app/view/components/view/view.component.css":
/*!*********************************************************!*\
  !*** ./src/app/view/components/view/view.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n/* 🔹 Container for MS Description */\r\n.ms-description-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: #ffffff;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  width: 100%;\r\n  border: 1px solid #ccc;\r\n}\r\n/* 🔹 Flexbox for proper alignment */\r\n.ms-description-content {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  background: #f6f6f6;\r\n  padding: 10px;\r\n  border-radius: 4px;\r\n}\r\n/* 🔹 Proper text alignment */\r\n.description-text {\r\n  font-size: 16px;\r\n  color: #333;\r\n}\r\n/* 🔹 Edit button */\r\n.edit-btn-container {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.edit-btn {\r\n  color: #184569;\r\n  font-size: 18px;\r\n  padding: 5px;\r\n  cursor: pointer;\r\n  transition: 0.2s;\r\n}\r\n.edit-btn:hover {\r\n  color: #2980b9;\r\n}\r\n/* 🔹 Edit box (Textarea) */\r\n.edit-box {\r\n  margin-top: 10px;\r\n}\r\n/* 🔹 Mobile Responsiveness */\r\n@media screen and (max-width: 768px) {\r\n  .ms-description-content {\r\n      flex-direction: column;\r\n      align-items: flex-start;\r\n  }\r\n  .edit-btn-container {\r\n      margin-top: 5px;\r\n      text-align: right;\r\n      width: 100%;\r\n  }\r\n}\r\n/* Fix accordion spacing & alignment */\r\n.view-name-container {\r\n  display: flex;\r\n  align-items: center;\r\n  background: #184569;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  width: 100%;\r\n}\r\n/* Ensures the header text is properly aligned */\r\n.view-title {\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  color: #ffffff;\r\n  margin: 0;\r\n  width: 100%;\r\n}\r\n/* Properly align icon with text */\r\n.view-icon {\r\n  width: 25px;\r\n  height: auto;\r\n  margin-right: 10px;\r\n  vertical-align: middle;\r\n}\r\n/* General table styling */\r\n.table {\r\n  width: 100%;\r\n  display: table;\r\n  border-collapse: collapse;\r\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n/* Table row structure */\r\n.row {\r\n  display: table-row;\r\n  background: #f6f6f6;\r\n}\r\n/* Alternate row colors */\r\n.row:nth-of-type(odd) {\r\n    background: #e9e9e9;\r\n  }\r\n/* Header row styling */\r\n.row.header {\r\n    font-weight: bold;\r\n    color: #ffffff;\r\n    background: #184569;\r\n  }\r\n/* Table cell styling */\r\n.cell {\r\n  display: table-cell;\r\n  padding: 10px;\r\n  text-align: left;\r\n}\r\n/* Mobile Responsive Adjustments */\r\n@media screen and (max-width: 768px) {\r\n  .view-title {\r\n    font-size: 16px;\r\n  }\r\n\r\n  .table {\r\n    display: block;\r\n  }\r\n\r\n  .row {\r\n    display: block;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .cell {\r\n    display: block;\r\n    text-align: left;\r\n    padding: 5px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXcvY29tcG9uZW50cy92aWV3L3ZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esb0NBQW9DO0FBQ3BDO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCO0FBRUEsb0NBQW9DO0FBQ3BDO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFFQSw2QkFBNkI7QUFDN0I7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiO0FBRUEsbUJBQW1CO0FBQ25CO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBLDZCQUE2QjtBQUM3QjtFQUNFO01BQ0ksc0JBQXNCO01BQ3RCLHVCQUF1QjtFQUMzQjtFQUNBO01BQ0ksZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixXQUFXO0VBQ2Y7QUFDRjtBQUVBLHNDQUFzQztBQUN0QztFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBRUEsZ0RBQWdEO0FBQ2hEO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxTQUFTO0VBQ1QsV0FBVztBQUNiO0FBRUEsa0NBQWtDO0FBQ2xDO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCO0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsMENBQTBDO0FBQzVDO0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUVFLHlCQUF5QjtBQUN6QjtJQUNFLG1CQUFtQjtFQUNyQjtBQUVBLHVCQUF1QjtBQUN2QjtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCO0FBRUYsdUJBQXVCO0FBQ3ZCO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7QUFFQSxrQ0FBa0M7QUFDbEM7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkO0FBQ0YiLCJmaWxlIjoiLi4vLi4vdmlldy9jb21wb25lbnRzL3ZpZXcvdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qIPCflLkgQ29udGFpbmVyIGZvciBNUyBEZXNjcmlwdGlvbiAqL1xyXG4ubXMtZGVzY3JpcHRpb24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcblxyXG4vKiDwn5S5IEZsZXhib3ggZm9yIHByb3BlciBhbGlnbm1lbnQgKi9cclxuLm1zLWRlc2NyaXB0aW9uLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLyog8J+UuSBQcm9wZXIgdGV4dCBhbGlnbm1lbnQgKi9cclxuLmRlc2NyaXB0aW9uLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLyog8J+UuSBFZGl0IGJ1dHRvbiAqL1xyXG4uZWRpdC1idG4tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lZGl0LWJ0biB7XHJcbiAgY29sb3I6ICMxODQ1Njk7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxufVxyXG5cclxuLmVkaXQtYnRuOmhvdmVyIHtcclxuICBjb2xvcjogIzI5ODBiOTtcclxufVxyXG5cclxuLyog8J+UuSBFZGl0IGJveCAoVGV4dGFyZWEpICovXHJcbi5lZGl0LWJveCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLyog8J+UuSBNb2JpbGUgUmVzcG9uc2l2ZW5lc3MgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubXMtZGVzY3JpcHRpb24tY29udGVudCB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuICAuZWRpdC1idG4tY29udGFpbmVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBGaXggYWNjb3JkaW9uIHNwYWNpbmcgJiBhbGlnbm1lbnQgKi9cclxuLnZpZXctbmFtZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjMTg0NTY5O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vKiBFbnN1cmVzIHRoZSBoZWFkZXIgdGV4dCBpcyBwcm9wZXJseSBhbGlnbmVkICovXHJcbi52aWV3LXRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogUHJvcGVybHkgYWxpZ24gaWNvbiB3aXRoIHRleHQgKi9cclxuLnZpZXctaWNvbiB7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4vKiBHZW5lcmFsIHRhYmxlIHN0eWxpbmcgKi9cclxuLnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLyogVGFibGUgcm93IHN0cnVjdHVyZSAqL1xyXG4ucm93IHtcclxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxufVxyXG5cclxuICAvKiBBbHRlcm5hdGUgcm93IGNvbG9ycyAqL1xyXG4gIC5yb3c6bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xyXG4gIH1cclxuXHJcbiAgLyogSGVhZGVyIHJvdyBzdHlsaW5nICovXHJcbiAgLnJvdy5oZWFkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQ6ICMxODQ1Njk7XHJcbiAgfVxyXG5cclxuLyogVGFibGUgY2VsbCBzdHlsaW5nICovXHJcbi5jZWxsIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLyogTW9iaWxlIFJlc3BvbnNpdmUgQWRqdXN0bWVudHMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAudmlldy10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAudGFibGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gIC5jZWxsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/view/components/view/view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/view/components/view/view.component.ts ***!
  \********************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_services_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/services/view.service */ "./src/app/view/service/services/view.service.ts");



let ViewComponent = class ViewComponent {
    constructor(viewService) {
        this.viewService = viewService;
        this.selectedViewMetaData = null;
        this.selectedViewName = 'HumanResources.vEmployee';
        this.editedDescription = ''; // Local copy for editing
    }
    ngOnInit() {
        this.loadViewMetaData(this.selectedViewName);
    }
    loadViewMetaData(viewName) {
        this.viewService.getViewMetaData(viewName).subscribe((data) => {
            this.selectedViewMetaData = data;
        });
    }
    /**
    * Enables edit mode and creates a local copy of the description.
    */
    EditView(event) {
        event.preventDefault();
        if (this.selectedViewMetaData.viewDetails.length) {
            this.editedDescription = this.selectedViewMetaData.viewDetails[0].viewExtendedProperties;
            this.iblnShowEditBox = true;
        }
    }
    /**
     * Cancels editing without modifying the original value.
     */
    CancelViewMsDesciption(event) {
        event.preventDefault();
        this.iblnShowEditBox = false;
    }
    /**
     * Saves the modified description and updates the backend.
     */
    SaveViewMsDesciption(event) {
        event.preventDefault();
        if (this.selectedViewMetaData.viewDetails.length) {
            const updatedDescription = this.editedDescription;
            // Call API to save the new description
            this.viewService.updateViewDescription(this.selectedViewName, updatedDescription).subscribe(() => {
                console.log('Description updated successfully');
                // Update the original data
                this.selectedViewMetaData.viewDetails[0].viewExtendedProperties = updatedDescription;
                // Hide edit box
                this.iblnShowEditBox = false;
            }, (error) => {
                console.error('Error updating description:', error);
            });
        }
    }
};
ViewComponent.ctorParameters = () => [
    { type: _service_services_view_service__WEBPACK_IMPORTED_MODULE_2__["ViewService"] }
];
ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view/components/view/view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view.component.css */ "./src/app/view/components/view/view.component.css")).default]
    })
], ViewComponent);



/***/ }),

/***/ "./src/app/view/components/views/views.component.css":
/*!***********************************************************!*\
  !*** ./src/app/view/components/views/views.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table {\r\n  margin: 0px 0 3px 0;\r\n  width: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: table;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .table {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.row {\r\n  display: table-row;\r\n  background: #f6f6f6;\r\n}\r\n\r\n.row:nth-of-type(odd) {\r\n    background: #e9e9e9;\r\n  }\r\n\r\n.row.header {\r\n    font-weight: 900;\r\n    color: #ffffff;\r\n    background: #184569 !important;\r\n  }\r\n\r\n.row.green {\r\n    background: #27ae60;\r\n  }\r\n\r\n.row.blue {\r\n    background: #2980b9;\r\n  }\r\n\r\n@media screen and (max-width: 580px) {\r\n  .row {\r\n    padding: 14px 0 7px;\r\n    display: block;\r\n  }\r\n\r\n    .row.header {\r\n      padding: 0;\r\n      height: 6px;\r\n    }\r\n\r\n      .row.header .cell {\r\n        display: none;\r\n      }\r\n\r\n    .row .cell {\r\n      margin-bottom: 10px;\r\n    }\r\n\r\n      .row .cell:before {\r\n        margin-bottom: 3px;\r\n        content: attr(data-title);\r\n        min-width: 98px;\r\n        font-size: 10px;\r\n        line-height: 10px;\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n        color: #969696;\r\n        display: block;\r\n      }\r\n}\r\n\r\n.cell {\r\n  /*  padding: 6px 12px; */\r\n  display: table-cell;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .cell {\r\n    padding: 2px 16px;\r\n    display: block;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXcvY29tcG9uZW50cy92aWV3cy92aWV3cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx3Q0FBd0M7RUFDeEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFRTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsOEJBQThCO0VBQ2hDOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVGO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsY0FBYztFQUNoQjs7SUFFRTtNQUNFLFVBQVU7TUFDVixXQUFXO0lBQ2I7O01BRUU7UUFDRSxhQUFhO01BQ2Y7O0lBRUY7TUFDRSxtQkFBbUI7SUFDckI7O01BRUU7UUFDRSxrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQix5QkFBeUI7UUFDekIsY0FBYztRQUNkLGNBQWM7TUFDaEI7QUFDTjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCO0FBQ0YiLCJmaWxlIjoiLi4vLi4vdmlldy9jb21wb25lbnRzL3ZpZXdzL3ZpZXdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xyXG4gIG1hcmdpbjogMHB4IDAgM3B4IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAudGFibGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxufVxyXG5cclxuICAucm93Om50aC1vZi10eXBlKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZDogI2U5ZTllOTtcclxuICB9XHJcblxyXG4gIC5yb3cuaGVhZGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQ6ICMxODQ1NjkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5yb3cuZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZDogIzI3YWU2MDtcclxuICB9XHJcblxyXG4gIC5yb3cuYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjk4MGI5O1xyXG4gIH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgLnJvdyB7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDAgN3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAgIC5yb3cuaGVhZGVyIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgaGVpZ2h0OiA2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgICAucm93LmhlYWRlciAuY2VsbCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgIC5yb3cgLmNlbGwge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICAgLnJvdyAuY2VsbDpiZWZvcmUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xyXG4gICAgICAgIG1pbi13aWR0aDogOThweDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBjb2xvcjogIzk2OTY5NjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG59XHJcblxyXG4uY2VsbCB7XHJcbiAgLyogIHBhZGRpbmc6IDZweCAxMnB4OyAqL1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgLmNlbGwge1xyXG4gICAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/view/components/views/views.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/view/components/views/views.component.ts ***!
  \**********************************************************/
/*! exports provided: ViewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsComponent", function() { return ViewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_services_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/services/view.service */ "./src/app/view/service/services/view.service.ts");



let ViewsComponent = class ViewsComponent {
    constructor(viewService) {
        this.viewService = viewService;
        this.viewDetails = [];
    }
    ngOnInit() {
        this.loadAllViews();
    }
    loadAllViews() {
        this.viewService.getAllViewData().subscribe((data) => {
            this.viewDetails = data;
        });
    }
};
ViewsComponent.ctorParameters = () => [
    { type: _service_services_view_service__WEBPACK_IMPORTED_MODULE_2__["ViewService"] }
];
ViewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-views',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./views.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view/components/views/views.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./views.component.css */ "./src/app/view/components/views/views.component.css")).default]
    })
], ViewsComponent);



/***/ }),

/***/ "./src/app/view/service/services/view.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/view/service/services/view.service.ts ***!
  \*******************************************************/
/*! exports provided: ViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewService", function() { return ViewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ViewService = class ViewService {
    constructor(primaryUrl, secondaryUrl, http) {
        this.primaryUrl = primaryUrl;
        this.secondaryUrl = secondaryUrl;
        this.http = http;
    }
    getAllViewData() {
        return this.http.get(`${this.primaryUrl}/View/GetAllViewData`);
    }
    getViewMetaData(viewname) {
        return this.http.get(`${this.primaryUrl}/View/GetViewMetaData${viewname}`);
    }
};
ViewService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['API_URL',] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['ANOTHER_URL',] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ViewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('API_URL')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('ANOTHER_URL'))
], ViewService);



/***/ }),

/***/ "./src/app/view/views.module.ts":
/*!**************************************!*\
  !*** ./src/app/view/views.module.ts ***!
  \**************************************/
/*! exports provided: ViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModule", function() { return ViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/fesm2015/primeng-accordion.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/fesm2015/primeng-table.js");
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tree */ "./node_modules/primeng/fesm2015/primeng-tree.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/contextmenu */ "./node_modules/primeng/fesm2015/primeng-contextmenu.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/fesm2015/primeng-tabview.js");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/codehighlighter */ "./node_modules/primeng/fesm2015/primeng-codehighlighter.js");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/breadcrumb */ "./node_modules/primeng/fesm2015/primeng-breadcrumb.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/fesm2015/primeng-dialog.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/fesm2015/primeng-inputtextarea.js");
/* harmony import */ var angular_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-progress-bar */ "./node_modules/angular-progress-bar/fesm2015/angular-progress-bar.js");
/* harmony import */ var _components_view_view_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/view/view.component */ "./src/app/view/components/view/view.component.ts");
/* harmony import */ var _components_views_views_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/views/views.component */ "./src/app/view/components/views/views.component.ts");
/* harmony import */ var _service_services_view_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./service/services/view.service */ "./src/app/view/service/services/view.service.ts");





/* ===== Amexio Modules ===== */

/* ===== PrimeNG Modules ===== */











/* ===== Other Third-Party Modules ===== */

/* ===== Components & Services ===== */



let ViewModule = class ViewModule {
};
ViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_view_view_component__WEBPACK_IMPORTED_MODULE_18__["ViewComponent"],
            _components_views_views_component__WEBPACK_IMPORTED_MODULE_19__["ViewsComponent"]
        ],
        imports: [
            /* Core Modules */
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            /* Amexio Modules */
            amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioDataModule"],
            amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"],
            amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioChartsModule"],
            amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioEnterpriseModule"],
            /* PrimeNG Modules */
            primeng_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"],
            primeng_tree__WEBPACK_IMPORTED_MODULE_8__["TreeModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"],
            primeng_contextmenu__WEBPACK_IMPORTED_MODULE_11__["ContextMenuModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_12__["TabViewModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_13__["CodeHighlighterModule"],
            primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_14__["BreadcrumbModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_15__["DialogModule"],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_16__["InputTextareaModule"],
            /* Other Third-Party Modules */
            angular_progress_bar__WEBPACK_IMPORTED_MODULE_17__["ProgressBarModule"]
        ],
        providers: [_service_services_view_service__WEBPACK_IMPORTED_MODULE_20__["ViewService"]],
        exports: [_components_view_view_component__WEBPACK_IMPORTED_MODULE_18__["ViewComponent"], _components_views_views_component__WEBPACK_IMPORTED_MODULE_19__["ViewsComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]] // ✅ Keep this for custom elements
    })
], ViewModule);



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getApiUrl, getAnotherUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApiUrl", function() { return getApiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnotherUrl", function() { return getAnotherUrl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");




function getApiUrl() {
    return 'http://localhost:5000'; // Your first URL
}
function getAnotherUrl() {
    return 'https://localhost:5001'; // Your second URL
}
const providers = [
    { provide: 'API_URL', useFactory: getApiUrl, deps: [] },
    { provide: 'ANOTHER_URL', useFactory: getAnotherUrl, deps: [] }
];
if (true) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\lakshaman\Source\lakshamanr\mssql\src\WebClient\mssql.client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2019.js.map