(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["XmlSchema-xml-schema-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/XmlSchema/component/xml-schema-details/xml-schema-details.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/XmlSchema/component/xml-schema-details/xml-schema-details.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<amexio-accordion [multi-open]=\"true\">\r\n\r\n  <!-- Trigger Name -->\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Trigger Name\" [active]=\"true\">\r\n    <h5>\r\n      <img src=\"./assets/icons/DdlTrigger.png\" style=\"width: 30px !important;\">\r\n      {{ schemaName }}\r\n    </h5>\r\n  </amexio-accordion-tab>\r\n  <!-- MS Description -->\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"MS Description\" [active]=\"true\">\r\n    <div class=\"table\" *ngIf=\"!iblnShowEditBox\">\r\n      <div class=\"cell\">\r\n        <p>{{schemaDetails?.mS_Description }}</p>\r\n      </div>\r\n      <a (click)=\"ShowModelPOP($event)\" class=\"btn btn-default btn-lg a-btn-slide-text\">\r\n        <span class=\"fa fa-edit\"></span>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"form-group\" *ngIf=\"iblnShowEditBox\">\r\n      <textarea class=\"form-control\" rows=\"5\" id=\"comment\" [(ngModel)]=\"msDescription\"></textarea>\r\n      <div class=\"form-group text-right\">\r\n        <a (click)=\"CancelTableMsDesciption($event)\"><i class=\"fa fa-2x fa-times\"></i></a>&nbsp;\r\n        <a (click)=\"SaveTableMsDesciption($event)\"><i class=\"fa fa-2x fa-save\"></i></a>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Dependent Columns\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Type</div>\r\n      </div>\r\n      <div *ngFor=\"let Property of schemaDetails?.dependentColumns \" class=\"row\">\r\n        <div class=\"cell\">{{Property}} </div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Create Script\" [active]=\"true\">\r\n    <div>\r\n      <app-code-viewer [code]=\"schemaDetails?.sqlScript\" [language]=\"'sql'\"></app-code-viewer>\r\n \r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Referance Schema\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Schema</div>\r\n      </div>\r\n      <div *ngFor=\"let Property of schemaDetails?.xmlschema \" class=\"row\">\r\n        <div class=\"cell\">{{Property.tableSchema}} </div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Referance Table\" [active]=\"true\"> \r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Schema</div>\r\n        <div class=\"cell\">Table</div>\r\n        <div class=\"cell\">Column</div>\r\n      </div>\r\n      <div *ngFor=\"let Property of schemaDetails?.xmlschemreference \" class=\"row\">\r\n        <div class=\"cell\">{{Property.tableSchema}} </div>\r\n        <div class=\"cell\">{{Property.tableName}} </div>\r\n        <div class=\"cell\">{{Property.columnName}} </div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n</amexio-accordion>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/XmlSchema/component/xml-schema-list/xml-schema-list.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/XmlSchema/component/xml-schema-list/xml-schema-list.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<amexio-accordion [multi-open]=\"true\">\r\n\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"All XML Schema\" [active]=\"true\">\r\n    <hr />\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search\" >\r\n    <hr />\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">XML Schema</div>\r\n        <div class=\"cell\">MS Descriptions</div>\r\n      </div>\r\n      <div *ngFor=\"let Property of collections  \" class=\"row\">\r\n        <a [innerHTML]=\"Property.xmlSchemaCollections\" class=\"cell\" data-title=\"Property\" [routerLink]=\"['/XmlSchema',Property.xmlSchemaCollections]\"> {{Property.xmlSchemaCollections}}</a>\r\n        <div [innerHTML]=\"Property.mS_Description\" class=\"cell\" data-title=\"Value\">{{Property.mS_Description}}</div>\r\n\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n</amexio-accordion>\r\n");

/***/ }),

/***/ "./src/app/XmlSchema/component/xml-schema-details/xml-schema-details.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/XmlSchema/component/xml-schema-details/xml-schema-details.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n#Objects li:last-child {\r\n  display: none;\r\n}\r\n\r\n.table {\r\n  margin: 0px 0 3px 0;\r\n  width: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: table;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .table {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.row {\r\n  display: table-row;\r\n  background: #f6f6f6;\r\n}\r\n\r\n.row:nth-of-type(odd) {\r\n    background: #e9e9e9;\r\n  }\r\n\r\n.row.header {\r\n    font-weight: 900;\r\n    color: #ffffff;\r\n    background: #184569 !important;\r\n  }\r\n\r\n.row.green {\r\n    background: #27ae60;\r\n  }\r\n\r\n.row.blue {\r\n    background: #2980b9;\r\n  }\r\n\r\n@media screen and (max-width: 580px) {\r\n  .row {\r\n    padding: 14px 0 7px;\r\n    display: block;\r\n  }\r\n\r\n    .row.header {\r\n      padding: 0;\r\n      height: 6px;\r\n    }\r\n\r\n      .row.header .cell {\r\n        display: none;\r\n      }\r\n\r\n    .row .cell {\r\n      margin-bottom: 10px;\r\n    }\r\n\r\n      .row .cell:before {\r\n        margin-bottom: 3px;\r\n        content: attr(data-title);\r\n        min-width: 98px;\r\n        font-size: 10px;\r\n        line-height: 10px;\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n        color: #969696;\r\n        display: block;\r\n      }\r\n}\r\n\r\n.cell {\r\n  /*  padding: 6px 12px; */\r\n  display: table-cell;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .cell {\r\n    padding: 2px 16px;\r\n    display: block;\r\n  }\r\n}\r\n\r\n.node:hover {\r\n  fill: #ec008c;\r\n  opacity: 1;\r\n}\r\n\r\n.modal-dialog {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.modal-content {\r\n  height: auto;\r\n  min-height: 100%;\r\n  border: 0 none;\r\n  border-radius: 0;\r\n  box-shadow: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvWG1sU2NoZW1hL2NvbXBvbmVudC94bWwtc2NoZW1hLWRldGFpbHMveG1sLXNjaGVtYS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx3Q0FBd0M7RUFDeEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFRTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsOEJBQThCO0VBQ2hDOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVGO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsY0FBYztFQUNoQjs7SUFFRTtNQUNFLFVBQVU7TUFDVixXQUFXO0lBQ2I7O01BRUU7UUFDRSxhQUFhO01BQ2Y7O0lBRUY7TUFDRSxtQkFBbUI7SUFDckI7O01BRUU7UUFDRSxrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQix5QkFBeUI7UUFDekIsY0FBYztRQUNkLGNBQWM7TUFDaEI7QUFDTjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtBQUNaOztBQUdBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL1htbFNjaGVtYS9jb21wb25lbnQveG1sLXNjaGVtYS1kZXRhaWxzL3htbC1zY2hlbWEtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNPYmplY3RzIGxpOmxhc3QtY2hpbGQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgbWFyZ2luOiAwcHggMCAzcHggMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gIC50YWJsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG59XHJcblxyXG4gIC5yb3c6bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xyXG4gIH1cclxuXHJcbiAgLnJvdy5oZWFkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzE4NDU2OSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnJvdy5ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjdhZTYwO1xyXG4gIH1cclxuXHJcbiAgLnJvdy5ibHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICMyOTgwYjk7XHJcbiAgfVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAucm93IHtcclxuICAgIHBhZGRpbmc6IDE0cHggMCA3cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICAgLnJvdy5oZWFkZXIge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBoZWlnaHQ6IDZweDtcclxuICAgIH1cclxuXHJcbiAgICAgIC5yb3cuaGVhZGVyIC5jZWxsIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgLnJvdyAuY2VsbCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgICAucm93IC5jZWxsOmJlZm9yZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XHJcbiAgICAgICAgbWluLXdpZHRoOiA5OHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiAjOTY5Njk2O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbn1cclxuXHJcbi5jZWxsIHtcclxuICAvKiAgcGFkZGluZzogNnB4IDEycHg7ICovXHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAuY2VsbCB7XHJcbiAgICBwYWRkaW5nOiAycHggMTZweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLm5vZGU6aG92ZXIge1xyXG4gIGZpbGw6ICNlYzAwOGM7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuXHJcbi5tb2RhbC1kaWFsb2cge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlcjogMCBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/XmlSchema/component/xml-schema-details/xml-schema-details.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/XmlSchema/component/xml-schema-details/xml-schema-details.component.ts ***!
  \****************************************************************************************/
/*! exports provided: XmlSchemaDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XmlSchemaDetailsComponent", function() { return XmlSchemaDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_xml_schema_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/xml-schema.service */ "./src/app/XmlSchema/service/xml-schema.service.ts");




let XmlSchemaDetailsComponent = class XmlSchemaDetailsComponent {
    constructor(route, xmlSchemaService) {
        this.route = route;
        this.xmlSchemaService = xmlSchemaService;
        this.schemaDetails = null;
        this.msDescription = "";
        this.iblnShowEditBox = false;
    }
    ngOnInit() {
        this.schemaName = this.route.snapshot.params.objectname;
        this.xmlSchemaService.getXmlSchemaDetails(this.schemaName).subscribe((data) => { this.schemaDetails = data, this.msDescription = this.schemaDetails.mS_Description; }, (error) => console.error('Error fetching schema details', error));
    }
};
XmlSchemaDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _service_xml_schema_service__WEBPACK_IMPORTED_MODULE_3__["XmlSchemaService"] }
];
XmlSchemaDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-xml-schema-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xml-schema-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/XmlSchema/component/xml-schema-details/xml-schema-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xml-schema-details.component.css */ "./src/app/XmlSchema/component/xml-schema-details/xml-schema-details.component.css")).default]
    })
], XmlSchemaDetailsComponent);



/***/ }),

/***/ "./src/app/XmlSchema/component/xml-schema-list/xml-schema-list.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/XmlSchema/component/xml-schema-list/xml-schema-list.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n#Objects li:last-child {\r\n  display: none;\r\n}\r\n\r\n.table {\r\n  margin: 0px 0 3px 0;\r\n  width: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: table;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .table {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.row {\r\n  display: table-row;\r\n  background: #f6f6f6;\r\n}\r\n\r\n.row:nth-of-type(odd) {\r\n    background: #e9e9e9;\r\n  }\r\n\r\n.row.header {\r\n    font-weight: 900;\r\n    color: #ffffff;\r\n    background: #184569 !important;\r\n  }\r\n\r\n.row.green {\r\n    background: #27ae60;\r\n  }\r\n\r\n.row.blue {\r\n    background: #2980b9;\r\n  }\r\n\r\n@media screen and (max-width: 580px) {\r\n  .row {\r\n    padding: 14px 0 7px;\r\n    display: block;\r\n  }\r\n\r\n    .row.header {\r\n      padding: 0;\r\n      height: 6px;\r\n    }\r\n\r\n      .row.header .cell {\r\n        display: none;\r\n      }\r\n\r\n    .row .cell {\r\n      margin-bottom: 10px;\r\n    }\r\n\r\n      .row .cell:before {\r\n        margin-bottom: 3px;\r\n        content: attr(data-title);\r\n        min-width: 98px;\r\n        font-size: 10px;\r\n        line-height: 10px;\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n        color: #969696;\r\n        display: block;\r\n      }\r\n}\r\n\r\n.cell {\r\n  /*  padding: 6px 12px; */\r\n  display: table-cell;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .cell {\r\n    padding: 2px 16px;\r\n    display: block;\r\n  }\r\n}\r\n\r\n.node:hover {\r\n  fill: #ec008c;\r\n  opacity: 1;\r\n}\r\n\r\n.modal-dialog {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.modal-content {\r\n  height: auto;\r\n  min-height: 100%;\r\n  border: 0 none;\r\n  border-radius: 0;\r\n  box-shadow: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvWG1sU2NoZW1hL2NvbXBvbmVudC94bWwtc2NoZW1hLWxpc3QveG1sLXNjaGVtYS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx3Q0FBd0M7RUFDeEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFRTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsOEJBQThCO0VBQ2hDOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVGO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsY0FBYztFQUNoQjs7SUFFRTtNQUNFLFVBQVU7TUFDVixXQUFXO0lBQ2I7O01BRUU7UUFDRSxhQUFhO01BQ2Y7O0lBRUY7TUFDRSxtQkFBbUI7SUFDckI7O01BRUU7UUFDRSxrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQix5QkFBeUI7UUFDekIsY0FBYztRQUNkLGNBQWM7TUFDaEI7QUFDTjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtBQUNaOztBQUdBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL1htbFNjaGVtYS9jb21wb25lbnQveG1sLXNjaGVtYS1saXN0L3htbC1zY2hlbWEtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNPYmplY3RzIGxpOmxhc3QtY2hpbGQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgbWFyZ2luOiAwcHggMCAzcHggMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gIC50YWJsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG59XHJcblxyXG4gIC5yb3c6bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xyXG4gIH1cclxuXHJcbiAgLnJvdy5oZWFkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzE4NDU2OSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnJvdy5ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjdhZTYwO1xyXG4gIH1cclxuXHJcbiAgLnJvdy5ibHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICMyOTgwYjk7XHJcbiAgfVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAucm93IHtcclxuICAgIHBhZGRpbmc6IDE0cHggMCA3cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICAgLnJvdy5oZWFkZXIge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBoZWlnaHQ6IDZweDtcclxuICAgIH1cclxuXHJcbiAgICAgIC5yb3cuaGVhZGVyIC5jZWxsIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgLnJvdyAuY2VsbCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgICAucm93IC5jZWxsOmJlZm9yZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XHJcbiAgICAgICAgbWluLXdpZHRoOiA5OHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiAjOTY5Njk2O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbn1cclxuXHJcbi5jZWxsIHtcclxuICAvKiAgcGFkZGluZzogNnB4IDEycHg7ICovXHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAuY2VsbCB7XHJcbiAgICBwYWRkaW5nOiAycHggMTZweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLm5vZGU6aG92ZXIge1xyXG4gIGZpbGw6ICNlYzAwOGM7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuXHJcbi5tb2RhbC1kaWFsb2cge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlcjogMCBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/XmlSchema/component/xml-schema-list/xml-schema-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/XmlSchema/component/xml-schema-list/xml-schema-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: XmlSchemaListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XmlSchemaListComponent", function() { return XmlSchemaListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_xml_schema_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/xml-schema.service */ "./src/app/XmlSchema/service/xml-schema.service.ts");



let XmlSchemaListComponent = class XmlSchemaListComponent {
    constructor(xmlSchemaService) {
        this.xmlSchemaService = xmlSchemaService;
        this.collections = [];
    }
    ngOnInit() {
        this.xmlSchemaService.getAllXmlSchemaCollections().subscribe((data) => (this.collections = data), (error) => console.error('Error fetching collections', error));
    }
};
XmlSchemaListComponent.ctorParameters = () => [
    { type: _service_xml_schema_service__WEBPACK_IMPORTED_MODULE_2__["XmlSchemaService"] }
];
XmlSchemaListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-xml-schema-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xml-schema-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/XmlSchema/component/xml-schema-list/xml-schema-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xml-schema-list.component.css */ "./src/app/XmlSchema/component/xml-schema-list/xml-schema-list.component.css")).default]
    })
], XmlSchemaListComponent);



/***/ }),

/***/ "./src/app/XmlSchema/service/xml-schema.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/XmlSchema/service/xml-schema.service.ts ***!
  \*********************************************************/
/*! exports provided: XmlSchemaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XmlSchemaService", function() { return XmlSchemaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/services/auth.service */ "./src/app/auth/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let XmlSchemaService = class XmlSchemaService {
    constructor(http, primaryUrl, secondaryUrl, authService, router) {
        this.http = http;
        this.primaryUrl = primaryUrl;
        this.secondaryUrl = secondaryUrl;
        this.authService = authService;
        this.router = router;
        this.primaryUrl = `${this.primaryUrl}/XmlSchema`;
        this.secondaryUrl = `${this.secondaryUrl}/XmlSchema`;
    }
    getXmlSchemaDetails(schemaCollectionName) {
        const headers = this.getAuthHeaders();
        return this.http.get(`${this.primaryUrl}/details/${schemaCollectionName}`, { headers });
    }
    getXmlSchemaReferences(schemaCollectionName) {
        const headers = this.getAuthHeaders();
        return this.http.get(`${this.primaryUrl}/references/${schemaCollectionName}`, { headers });
    }
    getAllXmlSchemaCollections() {
        const headers = this.getAuthHeaders();
        return this.http.get(`${this.primaryUrl}/collections`, { headers });
    }
    getAuthHeaders() {
        const token = this.authService.getToken();
        if (!token) {
            this.router.navigate(['/login']);
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        }
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': `Bearer ${token}`
        });
    }
};
XmlSchemaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['API_URL',] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['ANOTHER_URL',] }] },
    { type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
XmlSchemaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('API_URL')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('ANOTHER_URL'))
], XmlSchemaService);



/***/ }),

/***/ "./src/app/XmlSchema/xml-schema.module.ts":
/*!************************************************!*\
  !*** ./src/app/XmlSchema/xml-schema.module.ts ***!
  \************************************************/
/*! exports provided: XmlSchemaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XmlSchemaModule", function() { return XmlSchemaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _component_xml_schema_list_xml_schema_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/xml-schema-list/xml-schema-list.component */ "./src/app/XmlSchema/component/xml-schema-list/xml-schema-list.component.ts");
/* harmony import */ var _component_xml_schema_details_xml_schema_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/xml-schema-details/xml-schema-details.component */ "./src/app/XmlSchema/component/xml-schema-details/xml-schema-details.component.ts");
/* harmony import */ var _service_xml_schema_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/xml-schema.service */ "./src/app/XmlSchema/service/xml-schema.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/fesm2015/primeng-accordion.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/fesm2015/primeng-table.js");
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tree */ "./node_modules/primeng/fesm2015/primeng-tree.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/contextmenu */ "./node_modules/primeng/fesm2015/primeng-contextmenu.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/fesm2015/primeng-tabview.js");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/codehighlighter */ "./node_modules/primeng/fesm2015/primeng-codehighlighter.js");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/breadcrumb */ "./node_modules/primeng/fesm2015/primeng-breadcrumb.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/fesm2015/primeng-dialog.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/fesm2015/primeng-inputtextarea.js");
/* harmony import */ var angular_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-progress-bar */ "./node_modules/angular-progress-bar/fesm2015/angular-progress-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








/* ===== PrimeNG Modules ===== */














const routes = [
    { path: 's', component: _component_xml_schema_list_xml_schema_list_component__WEBPACK_IMPORTED_MODULE_3__["XmlSchemaListComponent"] },
    { path: ':objectname', component: _component_xml_schema_details_xml_schema_details_component__WEBPACK_IMPORTED_MODULE_4__["XmlSchemaDetailsComponent"] }
];
let XmlSchemaModule = class XmlSchemaModule {
};
XmlSchemaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _component_xml_schema_list_xml_schema_list_component__WEBPACK_IMPORTED_MODULE_3__["XmlSchemaListComponent"],
            _component_xml_schema_details_xml_schema_details_component__WEBPACK_IMPORTED_MODULE_4__["XmlSchemaDetailsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_21__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"].forChild(routes),
            /* Core Modules */
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            /* PrimeNG Modules */
            primeng_accordion__WEBPACK_IMPORTED_MODULE_8__["AccordionModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_9__["TableModule"],
            primeng_tree__WEBPACK_IMPORTED_MODULE_10__["TreeModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_11__["ToastModule"],
            primeng_contextmenu__WEBPACK_IMPORTED_MODULE_13__["ContextMenuModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_14__["TabViewModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_15__["CodeHighlighterModule"],
            primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_16__["BreadcrumbModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_12__["ButtonModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_17__["DialogModule"],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_18__["InputTextareaModule"],
            angular_progress_bar__WEBPACK_IMPORTED_MODULE_19__["ProgressBarModule"]
        ],
        providers: [_service_xml_schema_service__WEBPACK_IMPORTED_MODULE_5__["XmlSchemaService"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], XmlSchemaModule);



/***/ })

}]);
//# sourceMappingURL=XmlSchema-xml-schema-module-es2015.js.map