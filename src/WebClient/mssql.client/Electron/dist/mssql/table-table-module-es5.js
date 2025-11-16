function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["table-table-module"], {
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
    var _services_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/table.service */"./src/app/table/services/table.service.ts");
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
          var _this = this;
          this.isLoading = true;
          this.tableService.loadTableMetadata(this.tableName).subscribe({
            next: function next(metadata) {
              metadata ? _this.handleLoadSuccess(metadata) : null;
              _this.isLoading = false;
            },
            error: function error(_error) {
              _this.isLoading = false;
              _this.handleLoadError(_error);
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
          this.selectedDescription = Object.assign({}, description);
          this.displayDialog = true;
        }
      }, {
        key: "saveDescription",
        value: function saveDescription() {
          var _this2 = this;
          var index = this.descriptions.findIndex(function (desc) {
            return desc.name === _this2.selectedDescription.name && desc.table === _this2.selectedDescription.table;
          });
          if (index !== -1) {
            this.descriptions[index] = Object.assign({}, this.selectedDescription);
            this.tableService.updateTableExtendedProperties(this.selectedDescription).subscribe({
              next: function next() {
                return _this2.displayDialog = false;
              },
              error: function error(_error2) {
                return console.error("Error:", _error2);
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
          this.selectedColumn = Object.assign({}, selectedColumn);
          this.displayColumnDialog = true;
        }
      }, {
        key: "saveColumnDescription",
        value: function saveColumnDescription() {
          var _this3 = this;
          var index = this.columns.findIndex(function (desc) {
            return desc.tableName === _this3.selectedColumn.tableName && desc.columnName === _this3.selectedColumn.columnName;
          });
          if (index !== -1) {
            this.columns[index] = Object.assign({}, this.selectedColumn);
            this.tableService.updateTableColumnExtendedProperty(this.selectedColumn).subscribe({
              next: function next() {
                return _this3.displayColumnDialog = false;
              },
              error: function error(_error3) {
                return console.error("Error:", _error3);
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
        type: _services_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"]
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
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    var TablesComponent = /*#__PURE__*/function () {
      function TablesComponent(http, primaryUrl, secondaryUrl, authService) {
        _classCallCheck(this, TablesComponent);
        this.http = http;
        this.primaryUrl = primaryUrl;
        this.secondaryUrl = secondaryUrl;
        this.authService = authService;
        this.isLoading = true;
      }
      return _createClass(TablesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;
          this.cols = [{
            field: 'tableName',
            header: 'extendedPropertyValue'
          }, {
            field: 'extendedPropertyValue',
            header: 'tableColumns'
          }];
          // Wait for authentication before loading data
          this.authService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (isAuth) {
            return isAuth === true;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function () {
            _this4.loadTablesMetadata();
          });
        }
      }, {
        key: "loadTablesMetadata",
        value: function loadTablesMetadata() {
          var _this5 = this;
          var primaryUrl = "".concat(this.primaryUrl, "/Tables/GetTableDetails");
          var secondaryUrl = 'Tables/GetTableDetails';
          // Try the primary URL
          this.http.get(primaryUrl).subscribe(function (result) {
            _this5.handleLoadSuccess(result);
            _this5.isLoading = false;
          }, function (error) {
            console.error('Primary URL failed, trying secondary URL:', error);
            _this5.isLoading = false;
            _this5.http.get(secondaryUrl).subscribe(function (secondaryResult) {
              return _this5.handleLoadSuccess(secondaryResult);
            }, function (secondaryError) {
              return _this5.handleLoadError(secondaryError);
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
        // TrackBy function for better performance
      }, {
        key: "trackByTableName",
        value: function trackByTableName(index, table) {
          return table.tableName;
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
  /***/"./src/app/table/services/table.service.ts": (
  /*!*************************************************!*\
    !*** ./src/app/table/services/table.service.ts ***!
    \*************************************************/
  /*! exports provided: TableService */
  /***/
  function _src_app_table_services_tableServiceTs(module, __webpack_exports__, __webpack_require__) {
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
    var TableService = /*#__PURE__*/function () {
      function TableService(primaryUrl, secondaryUrl, http) {
        _classCallCheck(this, TableService);
        this.primaryUrl = primaryUrl;
        this.secondaryUrl = secondaryUrl;
        this.http = http;
      }
      return _createClass(TableService, [{
        key: "loadTableMetadata",
        value: function loadTableMetadata(tableName) {
          var primaryUrl = "".concat(this.primaryUrl, "/Tables/GetTableMetaData?tableName=").concat(tableName);
          var secondaryUrl = "Tables/GetTableMetaData?tableName=".concat(tableName);
          var primaryRequest = this.http.get(primaryUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2) // Retry the primary request up to 2 times before failing over
          );
          var secondaryRequest = this.http.get(secondaryUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2) // Optionally retry the secondary request as well
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
          return this.http.post("".concat(this.primaryUrl, "/Tables/UpdateTableExtendedProperties"), description);
        }
        /**
         * Updates the extended properties of a table column.
         * @param column Table column object
         * @returns Observable<any>
         */
      }, {
        key: "updateTableColumnExtendedProperty",
        value: function updateTableColumnExtendedProperty(column) {
          return this.http.post("".concat(this.primaryUrl, "/Tables/UpdateTableColumnExtendedProperty"), column);
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
      }];
    };
    TableService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('API_URL')), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('ANOTHER_URL'))], TableService);

    /***/
  }),
  /***/"./src/app/table/services/tables.service.ts": (
  /*!**************************************************!*\
    !*** ./src/app/table/services/tables.service.ts ***!
    \**************************************************/
  /*! exports provided: TablesService */
  /***/
  function _src_app_table_services_tablesServiceTs(module, __webpack_exports__, __webpack_require__) {
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
  /***/"./src/app/table/table.module.ts": (
  /*!***************************************!*\
    !*** ./src/app/table/table.module.ts ***!
    \***************************************/
  /*! exports provided: TablesModule */
  /***/
  function _src_app_table_tableModuleTs(module, __webpack_exports__, __webpack_require__) {
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
    var primeng_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/accordion */"./node_modules/primeng/fesm2015/primeng-accordion.js");
    /* harmony import */
    var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */"./node_modules/primeng/fesm2015/primeng-table.js");
    /* harmony import */
    var primeng_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tree */"./node_modules/primeng/fesm2015/primeng-tree.js");
    /* harmony import */
    var primeng_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toast */"./node_modules/primeng/fesm2015/primeng-toast.js");
    /* harmony import */
    var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */"./node_modules/primeng/fesm2015/primeng-button.js");
    /* harmony import */
    var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/contextmenu */"./node_modules/primeng/fesm2015/primeng-contextmenu.js");
    /* harmony import */
    var primeng_tabview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tabview */"./node_modules/primeng/fesm2015/primeng-tabview.js");
    /* harmony import */
    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/codehighlighter */"./node_modules/primeng/fesm2015/primeng-codehighlighter.js");
    /* harmony import */
    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/breadcrumb */"./node_modules/primeng/fesm2015/primeng-breadcrumb.js");
    /* harmony import */
    var primeng_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/api */"./node_modules/primeng/fesm2015/primeng-api.js");
    /* harmony import */
    var angular_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-progress-bar */"./node_modules/angular-progress-bar/fesm2015/angular-progress-bar.js");
    /* harmony import */
    var primeng_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dialog */"./node_modules/primeng/fesm2015/primeng-dialog.js");
    /* harmony import */
    var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputtextarea */"./node_modules/primeng/fesm2015/primeng-inputtextarea.js");
    /* harmony import */
    var _ngx_prism_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-prism/core */"./node_modules/@ngx-prism/core/dist/index.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _components_table_edit_description_dialog_edit_description_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/table/edit-description-dialog/edit-description-dialog.component */"./src/app/table/components/table/edit-description-dialog/edit-description-dialog.component.ts");
    /* harmony import */
    var _components_table_edit_column_description_dialog_edit_column_description_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/table/edit-column-description-dialog/edit-column-description-dialog.component */"./src/app/table/components/table/edit-column-description-dialog/edit-column-description-dialog.component.ts");
    /* harmony import */
    var _components_table_sql_script_viewer_sql_script_viewer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/table/sql-script-viewer/sql-script-viewer.component */"./src/app/table/components/table/sql-script-viewer/sql-script-viewer.component.ts");
    /* harmony import */
    var _services_table_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/table.service */"./src/app/table/services/table.service.ts");
    /* harmony import */
    var _services_tables_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/tables.service */"./src/app/table/services/tables.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../shared/shared.module */"./src/app/shared/shared.module.ts");
    var routes = [{
      path: 's',
      component: _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"]
    }, {
      path: ':objectname',
      component: _components_table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"]
    }];
    var TablesModule = /*#__PURE__*/_createClass(function TablesModule() {
      _classCallCheck(this, TablesModule);
    });
    TablesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"], _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"], _components_table_edit_description_dialog_edit_description_dialog_component__WEBPACK_IMPORTED_MODULE_20__["EditDescriptionDialogComponent"], _components_table_edit_column_description_dialog_edit_column_description_dialog_component__WEBPACK_IMPORTED_MODULE_21__["EditColumnDescriptionDialogComponent"], _components_table_sql_script_viewer_sql_script_viewer_component__WEBPACK_IMPORTED_MODULE_22__["SqlScriptViewerComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_26__["SharedModule"], primeng_accordion__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"], primeng_tree__WEBPACK_IMPORTED_MODULE_7__["TreeModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_8__["ToastModule"], primeng_contextmenu__WEBPACK_IMPORTED_MODULE_10__["ContextMenuModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_11__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_12__["CodeHighlighterModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbModule"], angular_progress_bar__WEBPACK_IMPORTED_MODULE_15__["ProgressBarModule"], primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_16__["DialogModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17__["InputTextareaModule"], _ngx_prism_core__WEBPACK_IMPORTED_MODULE_18__["PrismModule"]],
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_14__["TreeDragDropService"], primeng_api__WEBPACK_IMPORTED_MODULE_14__["MessageService"], _services_table_service__WEBPACK_IMPORTED_MODULE_23__["TableService"], _services_tables_service__WEBPACK_IMPORTED_MODULE_24__["TablesService"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], TablesModule);

    /***/
  })
}]);
//# sourceMappingURL=table-table-module-es5.js.map