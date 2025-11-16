function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-views-module"], {
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
    __webpack_exports__["default"] = " \r\n<amexio-accordion [multi-open]=\"true\">\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"View Name\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"\">\r\n      <h5 class=\"\">\r\n        <img src=\"./assets/icons/View.png\" >\r\n        <span>{{ selectedViewName }}</span>\r\n      </h5>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"MS Description\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"ms-description-container\">\r\n      <div class=\"ms-description-content\">\r\n        <!-- Normal Text Display -->\r\n        <div class=\"col-10 description-text\" *ngIf=\"!iblnShowEditBox\">\r\n          <p>{{ selectedViewMetaData?.viewDetails[0]?.viewExtendedProperties }}</p>\r\n        </div>\r\n  \r\n        <!-- Edit Button -->\r\n        <div class=\"col-2 text-right edit-btn-container\" *ngIf=\"!iblnShowEditBox\">\r\n          <a (click)=\"EditView($event)\" class=\"edit-btn\">\r\n            <i class=\"fa fa-edit\"></i>\r\n          </a>\r\n        </div>\r\n      </div>\r\n  \r\n      <!-- Text Area for Editing -->\r\n      <div class=\"form-group edit-box\" *ngIf=\"iblnShowEditBox\">\r\n        <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"editedDescription\"></textarea>\r\n  \r\n        <!-- Action Buttons -->\r\n        <div class=\"text-right mt-2\">\r\n          <a (click)=\"CancelViewMsDesciption($event)\" class=\"btn btn-danger\">\r\n            <i class=\"fa fa-times\"></i> Cancel\r\n          </a>\r\n          <a (click)=\"SaveViewMsDesciption($event)\" class=\"btn btn-success\">\r\n            <i class=\"fa fa-save\"></i> Save\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  \r\n\r\n\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"View Properties\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\" *ngIf=\"selectedViewMetaData\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Uses Ansi Nulls</div>\r\n        <div class=\"cell\">Uses Quoted Identifier</div>\r\n        <div class=\"cell\">Create Date</div>\r\n        <div class=\"cell\">Modify Date</div>\r\n      </div>\r\n      <div *ngFor=\"let Property of selectedViewMetaData.viewProperties\" class=\"row\">\r\n\r\n        <div class=\"cell\">{{Property.uses_ansi_nulls}} </div>\r\n        <div class=\"cell\">{{Property.uses_quoted_identifier}}</div>\r\n        <div class=\"cell\">{{Property.create_date}}</div>\r\n        <div class=\"cell\">{{Property.modify_date}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Columns\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\" *ngIf=\"selectedViewMetaData\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Column Order</div>\r\n        <div class=\"cell\">Column Name</div>\r\n        <div class=\"cell\">Data Type</div>\r\n        <div class=\"cell\">Max Length</div>\r\n        <div class=\"cell\">Precision</div>\r\n        <div class=\"cell\">Scale</div>\r\n      </div>\r\n      <div *ngFor=\"let Property of selectedViewMetaData.viewColumns \" class=\"row\">\r\n\r\n        <div class=\"cell\">{{Property.columnOrder}} </div>\r\n        <div class=\"cell\">{{Property.columnName}}</div>\r\n        <div class=\"cell\">{{Property.dataType}}</div>\r\n        <div class=\"cell\">{{Property.maxLength}}</div>\r\n        <div class=\"cell\">{{Property.precision}}</div>\r\n        <div class=\"cell\">{{Property.scale}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Create Script \" [gradient]=\"true\" [active]=\"true\">\r\n    <app-code-viewer *ngIf=\"selectedViewMetaData?.viewCreateScript\" [code]=\"selectedViewMetaData.viewCreateScript.createViewScript\" [language]=\"'sql'\"></app-code-viewer>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Used By \" [gradient]=\"true\" [active]=\"true\">\r\n\r\n    <div class=\"table\" *ngIf=\"selectedViewMetaData\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">View Dependency Name</div>\r\n        <div class=\"cell\">Type</div>\r\n        <div class=\"cell\">Updated</div>\r\n        <div class=\"cell\">Selected</div>\r\n        <div class=\"cell\">Column Name</div>\r\n        <div class=\"cell\">Full Reference Name</div>\r\n      </div>\r\n      <div *ngFor=\"let Property of selectedViewMetaData.viewDependencies \" class=\"row\">\r\n        <a class=\"cell\">{{Property.name}}</a>\r\n        <div class=\"cell\">{{Property.type}}</div>\r\n        <div class=\"cell\">{{Property.updated}}</div>\r\n        <div class=\"cell\">{{Property.selected}}</div>\r\n        <div class=\"cell\">{{Property.column_name}}</div>\r\n        <div class=\"cell\">{{Property.fullReferenceName}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n</amexio-accordion>\r\n";

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
    /* harmony import */
    var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/services/auth.service */"./src/app/auth/services/auth.service.ts");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    var ViewComponent = /*#__PURE__*/function () {
      function ViewComponent(route, viewService, authService) {
        _classCallCheck(this, ViewComponent);
        this.route = route;
        this.viewService = viewService;
        this.authService = authService;
        this.selectedViewMetaData = null;
        this.editedDescription = ''; // Local copy for editing
      }
      return _createClass(ViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;
          this.selectedViewName = this.route.snapshot.params.objectname;
          // Wait for authentication before loading data
          this.authService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (isAuth) {
            return isAuth === true;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function () {
            _this.loadViewMetaData(_this.selectedViewName);
          });
        }
      }, {
        key: "loadViewMetaData",
        value: function loadViewMetaData(viewName) {
          var _this2 = this;
          this.viewService.getViewMetaData(viewName).subscribe(function (data) {
            _this2.selectedViewMetaData = data;
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
          var _this3 = this;
          event.preventDefault();
          if (this.selectedViewMetaData.viewDetails.length) {
            var updatedDescription = this.editedDescription;
            // Call API to save the new description
            this.viewService.updateViewDescription(this.selectedViewName, updatedDescription).subscribe(function () {
              console.log('Description updated successfully');
              // Update the original data
              _this3.selectedViewMetaData.viewDetails[0].viewExtendedProperties = updatedDescription;
              // Hide edit box
              _this3.iblnShowEditBox = false;
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
      }, {
        type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
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
          var _this4 = this;
          this.viewService.getAllViewData().subscribe(function (data) {
            _this4.viewDetails = data;
          });
        }
        // TrackBy function for better performance
      }, {
        key: "trackByViewName",
        value: function trackByViewName(index, view) {
          return view.viewName;
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
    var ViewService = /*#__PURE__*/function () {
      function ViewService(primaryUrl, secondaryUrl, http) {
        _classCallCheck(this, ViewService);
        this.primaryUrl = primaryUrl;
        this.secondaryUrl = secondaryUrl;
        this.http = http;
      }
      return _createClass(ViewService, [{
        key: "getAllViewData",
        value: function getAllViewData() {
          return this.http.get("".concat(this.primaryUrl, "/View/GetAllViewData"));
        }
      }, {
        key: "getViewMetaData",
        value: function getViewMetaData(viewname) {
          return this.http.get("".concat(this.primaryUrl, "/View/GetViewMetaData").concat(viewname));
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
    var primeng_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dialog */"./node_modules/primeng/fesm2015/primeng-dialog.js");
    /* harmony import */
    var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtextarea */"./node_modules/primeng/fesm2015/primeng-inputtextarea.js");
    /* harmony import */
    var angular_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-progress-bar */"./node_modules/angular-progress-bar/fesm2015/angular-progress-bar.js");
    /* harmony import */
    var _components_view_view_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/view/view.component */"./src/app/view/components/view/view.component.ts");
    /* harmony import */
    var _components_views_views_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/views/views.component */"./src/app/view/components/views/views.component.ts");
    /* harmony import */
    var _service_services_view_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./service/services/view.service */"./src/app/view/service/services/view.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../shared/shared.module */"./src/app/shared/shared.module.ts");

    /* ===== PrimeNG Modules ===== */

    /* ===== Other Third-Party Modules ===== */

    /* ===== Components & Services ===== */

    var routes = [{
      path: 's',
      component: _components_views_views_component__WEBPACK_IMPORTED_MODULE_18__["ViewsComponent"]
    }, {
      path: ':objectname',
      component: _components_view_view_component__WEBPACK_IMPORTED_MODULE_17__["ViewComponent"]
    }];
    var ViewModule = /*#__PURE__*/_createClass(function ViewModule() {
      _classCallCheck(this, ViewModule);
    });
    ViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_view_view_component__WEBPACK_IMPORTED_MODULE_17__["ViewComponent"], _components_views_views_component__WEBPACK_IMPORTED_MODULE_18__["ViewsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_21__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"].forChild(routes), /* Core Modules */
      _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], /* PrimeNG Modules */
      primeng_accordion__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"], primeng_tree__WEBPACK_IMPORTED_MODULE_7__["TreeModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_8__["ToastModule"], primeng_contextmenu__WEBPACK_IMPORTED_MODULE_10__["ContextMenuModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_11__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_12__["CodeHighlighterModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbModule"], primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_14__["DialogModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__["InputTextareaModule"], /* Other Third-Party Modules */
      angular_progress_bar__WEBPACK_IMPORTED_MODULE_16__["ProgressBarModule"]],
      providers: [_service_services_view_service__WEBPACK_IMPORTED_MODULE_19__["ViewService"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]] // ✅ Keep this for custom elements
    })], ViewModule);

    /***/
  })
}]);
//# sourceMappingURL=view-views-module-es5.js.map