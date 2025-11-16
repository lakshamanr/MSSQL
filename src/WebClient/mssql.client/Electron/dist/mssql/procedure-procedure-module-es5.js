function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["procedure-procedure-module"], {
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
    __webpack_exports__["default"] = "<amexio-accordion [multi-open]=\"true\">\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Stored Procedure \" [gradient]=\"true\" [active]=\"true\">\r\n\r\n    <div class=\"table\">\r\n      <div class=\"cell\">\r\n        <div>\r\n          <h5>\r\n            <img src=\"./assets/icons/StoredProcedure.png\" style=\"width: 30px !important;\">\r\n            {{storedProcedureName}}\r\n          </h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette\r\n                        [color-palette]=\"''\"\r\n                        header=\"MS Description\"\r\n                        [gradient]=\"true\"\r\n                        [active]=\"true\">\r\n\r\n    <!-- Display Mode -->\r\n    <ng-container *ngIf=\"!iblnShowEditBox; else editMode\">\r\n      <div class=\"description-container\">\r\n        <a (click)=\"toggleEditBox()\" class=\"edit-icon\">\r\n          <i class=\"fa fa-edit\"></i>\r\n        </a>\r\n        <p class=\"description-text\">\r\n          {{ storedProcedureMetadata?.storedProcedureInfo?.extendedProperty }}\r\n        </p>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!-- Edit Mode -->\r\n    <ng-template #editMode>\r\n      <div class=\"edit-container\">\r\n        <textarea class=\"form-control edit-textarea\"\r\n                  rows=\"4\"\r\n                  [(ngModel)]=\"storedProcedureMetadata.storedProcedureInfo.extendedProperty\">\r\n      </textarea>\r\n\r\n        <div class=\"action-buttons\">\r\n          <a (click)=\"CancelStoreProcMsDesciption()\" class=\"cancel-btn\">\r\n            <i class=\"fa fa-2x fa-times\"></i>\r\n          </a>\r\n          <a (click)=\"updateProcedureDescription()\" class=\"save-btn\">\r\n            <i class=\"fa fa-2x fa-save\"></i>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n\r\n  </amexio-accordion-tab>\r\n\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Objects dependncy Tree\" [gradient]=\"true\" [active]=\"true\">\r\n    <p-tree [value]=\"filesTree\"\r\n            layout=\"horizontal\"\r\n            selectionMode=\"single\">\r\n    </p-tree>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Parameters\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Edit</div>\r\n        <div class=\"cell\">Name</div>\r\n        <div class=\"cell\">Type</div>\r\n        <div class=\"cell\">Max Length (Bytes)</div>\r\n        <div class=\"cell\">Parameter Order</div>\r\n        <div class=\"cell\">Collation</div>\r\n        <div class=\"cell\">MS Description</div>\r\n      </div>\r\n\r\n      <div *ngFor=\"let property of storedProcedureMetadata?.parameters\" class=\"row\">\r\n        <!-- Edit Button at the Front -->\r\n        <div class=\"cell edit-cell\">\r\n          <a (click)=\"toggleParameterEdit(property)\" class=\"edit-icon\">\r\n            <span class=\"fa fa-edit\"></span>\r\n          </a>\r\n        </div>\r\n        <div class=\"cell\">{{ property.parameterName }}</div>\r\n        <div class=\"cell\">{{ property.type }}</div>\r\n        <div class=\"cell\">{{ property.length }}</div>\r\n        <div class=\"cell\">{{ property.parameterOrder }}</div>\r\n        <div class=\"cell\">{{ property.collation }}</div>\r\n\r\n        <!-- MS Description Column -->\r\n        <div class=\"cell\">\r\n          <div *ngIf=\"!property.isEditing\">\r\n            <p>{{ property.extendedProperty }}</p>\r\n          </div>\r\n\r\n          <div *ngIf=\"property.isEditing\">\r\n            <textarea class=\"edit-textarea\" [(ngModel)]=\"property.extendedProperty\"></textarea>\r\n\r\n            <div class=\"action-buttons\">\r\n              <a (click)=\"toggleParameterEdit(property)\" class=\"cancel-btn\">\r\n                <i class=\"fa fa-times\"></i>\r\n              </a>\r\n              <a (click)=\"updateParameterDescription(property)\" class=\"save-btn\">\r\n                <i class=\"fa fa-save\"></i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Create Script\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"code-container\">\r\n        <app-code-viewer [code]=\"storedProcedureMetadata?.createScript?.procedureDefinition\" [language]=\"'sql'\"></app-code-viewer>  \r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Used by \" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\"> Referenced object name </div>\r\n      </div>\r\n      <div *ngFor=\"let property of storedProcedureMetadata?.dependencies \" class=\"row\">\r\n        <div class=\"cell\"> {{property.referencedObjectName}}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  \r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" header=\"Execution Plan\" [gradient]=\"true\" [active]=\"true\">\r\n    <div class=\"execution-plan-container\">\r\n      <div id=\"container\"></div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n</amexio-accordion>\r\n";

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
    var _services_procedure_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/procedure.service */"./src/app/procedure/services/procedure.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/services/auth.service */"./src/app/auth/services/auth.service.ts");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    var ProcedureComponent = /*#__PURE__*/function () {
      function ProcedureComponent(route, storedProcedureService, authService) {
        _classCallCheck(this, ProcedureComponent);
        this.route = route;
        this.storedProcedureService = storedProcedureService;
        this.authService = authService;
        this.iblnShowEditBox = false;
        this.language = 'plsql';
        this.iblnLoading = false;
      }
      return _createClass(ProcedureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;
          this.storedProcedureName = this.route.snapshot.params.objectname;
          // Wait for authentication to be ready before loading data
          this.authService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (isAuth) {
            return isAuth === true;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function () {
            _this.loadMetadata();
          });
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
          var _this2 = this;
          this.storedProcedureService.getStoredProcedureMetadata(this.storedProcedureName).subscribe({
            next: function next(data) {
              _this2.iblnLoading = true;
              _this2.storedProcedureMetadata = data;
              _this2.filesTree = JSON.parse(data.storedProcedureDependenciesTree);
              QP.showPlan(document.getElementById("container"), "".concat(_this2.storedProcedureMetadata.executionPlan.queryPlan), {
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
          var _this3 = this;
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
              _this3.toggleEditBox();
            },
            error: function error(err) {
              return console.error('Error updating description:', err);
            }
          });
        }
      }, {
        key: "updateParameterDescription",
        value: function updateParameterDescription(parameter) {
          var _this4 = this;
          var request = {
            schemaName: this.getSchema(),
            storedProcedureName: this.getStoreprocedureName(),
            parameterName: parameter.parameterName,
            description: parameter.extendedProperty
          };
          this.storedProcedureService.mergeParameterDescription(request).subscribe({
            next: function next() {
              console.log('Parameter description updated successfully');
              _this4.toggleParameterEdit(parameter);
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
        type: _services_procedure_service__WEBPACK_IMPORTED_MODULE_2__["ProcedureService"]
      }, {
        type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
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
    var _services_procedure_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/procedure.service */"./src/app/procedure/services/procedure.service.ts");
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
          var _this5 = this;
          this.storedProcedureService.getAllStoredProcedures().subscribe({
            next: function next(data) {
              _this5.storedProcedures = data;
            },
            error: function error(err) {
              return console.error('Error fetching stored procedures:', err);
            }
          });
        }
        // TrackBy function for better performance
      }, {
        key: "trackByProcedureName",
        value: function trackByProcedureName(index, procedure) {
          return procedure.storedProcedure;
        }
      }]);
    }();
    ProceduresComponent.ctorParameters = function () {
      return [{
        type: _services_procedure_service__WEBPACK_IMPORTED_MODULE_2__["ProcedureService"]
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
    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _components_procedures_procedures_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/procedures/procedures.component */"./src/app/procedure/components/procedures/procedures.component.ts");
    /* harmony import */
    var _components_procedure_procedure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/procedure/procedure.component */"./src/app/procedure/components/procedure/procedure.component.ts");
    /* harmony import */
    var _services_procedure_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/procedure.service */"./src/app/procedure/services/procedure.service.ts");
    /* harmony import */
    var primeng_accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/accordion */"./node_modules/primeng/fesm2015/primeng-accordion.js");
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
    var primeng_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dialog */"./node_modules/primeng/fesm2015/primeng-dialog.js");
    /* harmony import */
    var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputtextarea */"./node_modules/primeng/fesm2015/primeng-inputtextarea.js");
    /* harmony import */
    var angular_progress_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-progress-bar */"./node_modules/angular-progress-bar/fesm2015/angular-progress-bar.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/shared.module */"./src/app/shared/shared.module.ts");

    /* ===== PrimeNG Modules ===== */

    /* ===== Other Third-Party Modules ===== */

    var routes = [{
      path: 's',
      component: _components_procedures_procedures_component__WEBPACK_IMPORTED_MODULE_5__["ProceduresComponent"]
    }, {
      path: ':objectname',
      component: _components_procedure_procedure_component__WEBPACK_IMPORTED_MODULE_6__["ProcedureComponent"]
    }];
    var ProcedureModule = /*#__PURE__*/_createClass(function ProcedureModule() {
      _classCallCheck(this, ProcedureModule);
    });
    ProcedureModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_procedures_procedures_component__WEBPACK_IMPORTED_MODULE_5__["ProceduresComponent"], _components_procedure_procedure_component__WEBPACK_IMPORTED_MODULE_6__["ProcedureComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"].forChild(routes), /* Core Modules */
      _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], /* PrimeNG Modules */
      primeng_accordion__WEBPACK_IMPORTED_MODULE_8__["AccordionModule"], primeng_tree__WEBPACK_IMPORTED_MODULE_9__["TreeModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_10__["ToastModule"], primeng_contextmenu__WEBPACK_IMPORTED_MODULE_12__["ContextMenuModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_13__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_14__["CodeHighlighterModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_15__["BreadcrumbModule"], primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_16__["DialogModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17__["InputTextareaModule"], /* Other Third-Party Modules */
      angular_progress_bar__WEBPACK_IMPORTED_MODULE_18__["ProgressBarModule"]],
      providers: [_services_procedure_service__WEBPACK_IMPORTED_MODULE_7__["ProcedureService"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], ProcedureModule);

    /***/
  }),
  /***/"./src/app/procedure/services/procedure.service.ts": (
  /*!*********************************************************!*\
    !*** ./src/app/procedure/services/procedure.service.ts ***!
    \*********************************************************/
  /*! exports provided: ProcedureService */
  /***/
  function _src_app_procedure_services_procedureServiceTs(module, __webpack_exports__, __webpack_require__) {
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
    var ProcedureService = /*#__PURE__*/function () {
      function ProcedureService(primaryUrl, http) {
        _classCallCheck(this, ProcedureService);
        this.http = http;
        this.baseUrl = ''; // Update this with actual API URL
        this.baseUrl = primaryUrl + '/StoredProcedure';
      }
      /**
       * Get all stored procedures.
       */
      return _createClass(ProcedureService, [{
        key: "getAllStoredProcedures",
        value: function getAllStoredProcedures() {
          return this.http.get("".concat(this.baseUrl, "/AllStoredProcedures"));
        }
        /**
         * Get metadata of a specific stored procedure.
         * @param storedProcedureName The name of the stored procedure.
         */
      }, {
        key: "getStoredProcedureMetadata",
        value: function getStoredProcedureMetadata(storedProcedureName) {
          return this.http.get("".concat(this.baseUrl, "/").concat(storedProcedureName, "/metadata"));
        }
        /**
         * Merge stored procedure description.
         * @param request The request body containing schema name, stored procedure name, and description.
         */
      }, {
        key: "mergeStoredProcedureDescription",
        value: function mergeStoredProcedureDescription(request) {
          return this.http.post("".concat(this.baseUrl, "/description"), request);
        }
        /**
         * Merge parameter description of a stored procedure.
         * @param request The request body containing schema name, stored procedure name, parameter name, and description.
         */
      }, {
        key: "mergeParameterDescription",
        value: function mergeParameterDescription(request) {
          return this.http.post("".concat(this.baseUrl, "/parameter/description"), request);
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
      }];
    };
    ProcedureService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])('API_URL'))], ProcedureService);

    /***/
  })
}]);
//# sourceMappingURL=procedure-procedure-module-es5.js.map