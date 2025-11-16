(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["triggers-trigger-module"],{

/***/ "./node_modules/primeng/fesm2015/primeng-card.js":
/*!*******************************************************!*\
  !*** ./node_modules/primeng/fesm2015/primeng-card.js ***!
  \*******************************************************/
/*! exports provided: Card, CardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return CardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");




var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Card = class Card {
    constructor(el) {
        this.el = el;
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
};
Card.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Card.prototype, "header", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Card.prototype, "subheader", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Card.prototype, "style", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Card.prototype, "styleClass", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(primeng_api__WEBPACK_IMPORTED_MODULE_2__["Header"])
], Card.prototype, "headerFacet", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(primeng_api__WEBPACK_IMPORTED_MODULE_2__["Footer"])
], Card.prototype, "footerFacet", void 0);
Card = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'p-card',
        template: `
        <div [ngClass]="'ui-card ui-widget ui-widget-content ui-corner-all'" [ngStyle]="style" [class]="styleClass">
            <div class="ui-card-header" *ngIf="headerFacet">
               <ng-content select="p-header"></ng-content>
            </div>
            <div class="ui-card-body">
                <div class="ui-card-title" *ngIf="header">{{header}}</div>
                <div class="ui-card-subtitle" *ngIf="subheader">{{subheader}}</div>
                <div class="ui-card-content">
                    <ng-content></ng-content>
                </div>
                <div class="ui-card-footer" *ngIf="footerFacet">
                    <ng-content select="p-footer"></ng-content>
                </div>
            </div>
        </div>
    `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
    })
], Card);
let CardModule = class CardModule {
};
CardModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [Card, primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
        declarations: [Card]
    })
], CardModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-card.js.map


/***/ }),

/***/ "./node_modules/primeng/fesm2015/primeng-inputtext.js":
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2015/primeng-inputtext.js ***!
  \************************************************************/
/*! exports provided: InputText, InputTextModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputText", function() { return InputText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextModule", function() { return InputTextModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
let InputText = class InputText {
    constructor(el, ngModel) {
        this.el = el;
        this.ngModel = ngModel;
    }
    ngDoCheck() {
        this.updateFilledState();
    }
    //To trigger change detection to manage ui-state-filled for material labels when there is no value binding
    onInput(e) {
        this.updateFilledState();
    }
    updateFilledState() {
        this.filled = (this.el.nativeElement.value && this.el.nativeElement.value.length) ||
            (this.ngModel && this.ngModel.model);
    }
};
InputText.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input', ['$event'])
], InputText.prototype, "onInput", null);
InputText = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[pInputText]',
        host: {
            '[class.ui-inputtext]': 'true',
            '[class.ui-corner-all]': 'true',
            '[class.ui-state-default]': 'true',
            '[class.ui-widget]': 'true',
            '[class.ui-state-filled]': 'filled'
        }
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])())
], InputText);
let InputTextModule = class InputTextModule {
};
InputTextModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [InputText],
        declarations: [InputText]
    })
], InputTextModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-inputtext.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/triggers/components/database-trigger/database-trigger.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/triggers/components/database-trigger/database-trigger.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"trigger-detail-container\">\r\n  <!-- Header Card -->\r\n  <p-card styleClass=\"trigger-header-card\">\r\n    <div class=\"trigger-header\">\r\n      <div class=\"trigger-title-section\">\r\n        <i class=\"pi pi-bolt trigger-icon-large\"></i>\r\n        <div>\r\n          <h1 class=\"trigger-title\">{{ selectedTrigger ? selectedTrigger.name : '' }}</h1>\r\n          <p-breadcrumb [model]=\"breadcrumbItems\" [home]=\"homeBreadcrumb\"></p-breadcrumb>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </p-card>\r\n\r\n  <!-- Main Content -->\r\n  <div class=\"content-grid\">\r\n    <!-- Description Card -->\r\n    <p-card header=\"Description\" styleClass=\"section-card\">\r\n      <ng-template pTemplate=\"header\">\r\n        <div class=\"card-header-with-action\">\r\n          <span class=\"card-header-title\">\r\n            <i class=\"pi pi-file-edit\"></i> Description\r\n          </span>\r\n          <p-button\r\n            *ngIf=\"!iblnShowEditBox\"\r\n            icon=\"pi pi-pencil\"\r\n            (onClick)=\"ShowModelPOP($event)\"\r\n            [rounded]=\"true\"\r\n            [text]=\"true\"\r\n            severity=\"secondary\"\r\n            pTooltip=\"Edit Description\"\r\n            tooltipPosition=\"left\">\r\n          </p-button>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <div *ngIf=\"!iblnShowEditBox\" class=\"description-content\">\r\n        <p *ngIf=\"selectedTrigger && selectedTrigger.description; else noDescription\">\r\n          {{ selectedTrigger.description }}\r\n        </p>\r\n        <ng-template #noDescription>\r\n          <p class=\"text-muted\"><i>No description available</i></p>\r\n        </ng-template>\r\n      </div>\r\n\r\n      <div *ngIf=\"iblnShowEditBox\" class=\"edit-description\">\r\n        <textarea\r\n          pInputTextarea\r\n          [(ngModel)]=\"tiggersDesc\"\r\n          rows=\"5\"\r\n          class=\"w-full\"\r\n          placeholder=\"Enter description...\"\r\n          [autoResize]=\"true\">\r\n        </textarea>\r\n        <div class=\"edit-actions\">\r\n          <p-button\r\n            label=\"Cancel\"\r\n            icon=\"pi pi-times\"\r\n            (onClick)=\"CancelTableMsDesciption($event)\"\r\n            severity=\"secondary\"\r\n            [outlined]=\"true\">\r\n          </p-button>\r\n          <p-button\r\n            label=\"Save\"\r\n            icon=\"pi pi-check\"\r\n            (onClick)=\"SaveTableMsDesciption($event)\"\r\n            severity=\"success\">\r\n          </p-button>\r\n        </div>\r\n      </div>\r\n    </p-card>\r\n\r\n    <!-- Properties Card -->\r\n    <p-card header=\"Properties\" styleClass=\"section-card\">\r\n      <ng-template pTemplate=\"header\">\r\n        <span class=\"card-header-title\">\r\n          <i class=\"pi pi-info-circle\"></i> Properties\r\n        </span>\r\n      </ng-template>\r\n\r\n      <div class=\"properties-grid\">\r\n        <div class=\"property-item\">\r\n          <span class=\"property-label\">\r\n            <i class=\"pi pi-calendar-plus\"></i> Created Date\r\n          </span>\r\n          <span class=\"property-value\">\r\n            {{ (selectedTrigger && selectedTrigger.createDate) ? (selectedTrigger.createDate | date:'medium') : 'N/A' }}\r\n          </span>\r\n        </div>\r\n        <div class=\"property-item\">\r\n          <span class=\"property-label\">\r\n            <i class=\"pi pi-calendar\"></i> Modified Date\r\n          </span>\r\n          <span class=\"property-value\">\r\n            {{ (selectedTrigger && selectedTrigger.modifyDate) ? (selectedTrigger.modifyDate | date:'medium') : 'N/A' }}\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </p-card>\r\n  </div>\r\n\r\n  <!-- Script Card -->\r\n  <p-card header=\"Script\" styleClass=\"section-card script-card\">\r\n    <ng-template pTemplate=\"header\">\r\n      <span class=\"card-header-title\">\r\n        <i class=\"pi pi-code\"></i> Trigger Definition\r\n      </span>\r\n    </ng-template>\r\n\r\n    <div class=\"code-viewer-wrapper\">\r\n      <app-code-viewer\r\n        [code]=\"selectedTrigger && selectedTrigger.definition ? selectedTrigger.definition : ''\"\r\n        [language]=\"'sql'\">\r\n      </app-code-viewer>\r\n    </div>\r\n  </p-card>\r\n</div>\r\n\r\n<p-toast></p-toast>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/triggers/components/database-triggers/database-triggers.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/triggers/components/database-triggers/database-triggers.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"triggers-container\">\r\n  <p-card header=\"Database Triggers\" styleClass=\"triggers-card\">\r\n    <ng-template pTemplate=\"header\">\r\n      <div class=\"card-header-content\">\r\n        <div class=\"header-title\">\r\n          <i class=\"pi pi-bolt\"></i>\r\n          <h2>Database Triggers</h2>\r\n        </div>\r\n        <span class=\"custom-badge\">{{ triggers && triggers.length ? triggers.length : 0 }}</span>\r\n      </div>\r\n    </ng-template>\r\n\r\n    <div class=\"search-container\">\r\n      <span class=\"p-input-icon-left search-input\">\r\n        <i class=\"pi pi-search\"></i>\r\n        <input\r\n          pInputText\r\n          type=\"text\"\r\n          (input)=\"dt.filterGlobal($event.target.value, 'contains')\"\r\n          placeholder=\"Search triggers...\"\r\n          class=\"w-full\"\r\n        />\r\n      </span>\r\n    </div>\r\n\r\n    <p-table\r\n      #dt\r\n      [value]=\"triggers\"\r\n      [globalFilterFields]=\"['name', 'description']\"\r\n      [paginator]=\"true\"\r\n      [rows]=\"10\"\r\n      [rowsPerPageOptions]=\"[10, 25, 50]\"\r\n      [loading]=\"loading\"\r\n      [showCurrentPageReport]=\"true\"\r\n      currentPageReportTemplate=\"Showing {first} to {last} of {totalRecords} triggers\"\r\n      styleClass=\"p-datatable-striped p-datatable-gridlines\"\r\n      [tableStyle]=\"{'min-width': '50rem'}\"\r\n      responsiveLayout=\"scroll\">\r\n\r\n      <ng-template pTemplate=\"header\">\r\n        <tr>\r\n          <th pSortableColumn=\"name\" style=\"width: 40%\">\r\n            <div class=\"flex align-items-center\">\r\n              Trigger Name\r\n              <p-sortIcon field=\"name\"></p-sortIcon>\r\n            </div>\r\n          </th>\r\n          <th pSortableColumn=\"description\" style=\"width: 50%\">\r\n            <div class=\"flex align-items-center\">\r\n              Description\r\n              <p-sortIcon field=\"description\"></p-sortIcon>\r\n            </div>\r\n          </th>\r\n          <th style=\"width: 10%\">Actions</th>\r\n        </tr>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"body\" let-trigger>\r\n        <tr>\r\n          <td>\r\n            <div class=\"trigger-name-cell\">\r\n              <i class=\"pi pi-bolt trigger-icon\"></i>\r\n              <span class=\"trigger-name\">{{ trigger.name }}</span>\r\n            </div>\r\n          </td>\r\n          <td>\r\n            <span class=\"trigger-description\">{{ trigger.description || 'No description' }}</span>\r\n          </td>\r\n          <td>\r\n            <p-button\r\n              icon=\"pi pi-eye\"\r\n              [routerLink]=\"['/Trigger', trigger.name]\"\r\n              severity=\"info\"\r\n              [rounded]=\"true\"\r\n              [text]=\"true\"\r\n              pTooltip=\"View Details\"\r\n              tooltipPosition=\"left\">\r\n            </p-button>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"emptymessage\">\r\n        <tr>\r\n          <td colspan=\"3\" class=\"text-center\">\r\n            <div class=\"empty-state\">\r\n              <i class=\"pi pi-info-circle\"></i>\r\n              <p>No triggers found</p>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </p-card>\r\n</div>\r\n\r\n<p-toast></p-toast>\r\n");

/***/ }),

/***/ "./src/app/triggers/components/database-trigger/database-trigger.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/triggers/components/database-trigger/database-trigger.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".trigger-detail-container {\r\n  padding: 1.5rem;\r\n  max-width: 1400px;\r\n  margin: 0 auto;\r\n}\r\n\r\n/* Header Card Styles */\r\n\r\n::ng-deep .trigger-header-card {\r\n  margin-bottom: 1.5rem;\r\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n  border: none;\r\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);\r\n}\r\n\r\n::ng-deep .trigger-header-card .p-card-body {\r\n  padding: 2rem;\r\n  color: white;\r\n}\r\n\r\n.trigger-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.trigger-title-section {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  gap: 1rem;\r\n}\r\n\r\n.trigger-icon-large {\r\n  font-size: 2.5rem;\r\n  color: white;\r\n  margin-top: 0.25rem;\r\n}\r\n\r\n.trigger-title {\r\n  margin: 0 0 0.5rem 0;\r\n  font-size: 2rem;\r\n  font-weight: 700;\r\n  color: white;\r\n}\r\n\r\n::ng-deep .trigger-header-card .p-breadcrumb {\r\n  background: rgba(255, 255, 255, 0.1);\r\n  border: 1px solid rgba(255, 255, 255, 0.2);\r\n  border-radius: 6px;\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n::ng-deep .trigger-header-card .p-breadcrumb .p-menuitem-link {\r\n  color: white;\r\n}\r\n\r\n::ng-deep .trigger-header-card .p-breadcrumb .p-menuitem-separator {\r\n  color: rgba(255, 255, 255, 0.7);\r\n}\r\n\r\n/* Content Grid */\r\n\r\n.content-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\r\n  gap: 1.5rem;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n/* Section Card Styles */\r\n\r\n::ng-deep .section-card {\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\r\n  border-radius: 12px;\r\n  height: 100%;\r\n}\r\n\r\n::ng-deep .section-card .p-card-header {\r\n  background: #f8f9fa;\r\n  border-bottom: 2px solid #e9ecef;\r\n  padding: 1.25rem 1.5rem;\r\n}\r\n\r\n.card-header-with-action {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.card-header-title {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  font-weight: 600;\r\n  font-size: 1.1rem;\r\n  color: #333;\r\n}\r\n\r\n.card-header-title i {\r\n  color: #667eea;\r\n}\r\n\r\n/* Description Content */\r\n\r\n.description-content {\r\n  min-height: 80px;\r\n  line-height: 1.6;\r\n}\r\n\r\n.description-content p {\r\n  margin: 0;\r\n  color: #495057;\r\n}\r\n\r\n.text-muted {\r\n  color: #999 !important;\r\n  font-style: italic;\r\n}\r\n\r\n.edit-description {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.edit-actions {\r\n  display: flex;\r\n  gap: 0.75rem;\r\n  justify-content: flex-end;\r\n}\r\n\r\n::ng-deep .edit-description textarea {\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;\r\n  font-size: 0.95rem;\r\n  line-height: 1.6;\r\n}\r\n\r\n/* Properties Grid */\r\n\r\n.properties-grid {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.property-item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n  padding: 1rem;\r\n  background: #f8f9fa;\r\n  border-radius: 8px;\r\n  border-left: 4px solid #667eea;\r\n}\r\n\r\n.property-label {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  font-size: 0.85rem;\r\n  font-weight: 600;\r\n  color: #666;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.5px;\r\n}\r\n\r\n.property-label i {\r\n  color: #667eea;\r\n  font-size: 1rem;\r\n}\r\n\r\n.property-value {\r\n  font-size: 1rem;\r\n  color: #333;\r\n  font-weight: 500;\r\n  margin-left: 1.5rem;\r\n}\r\n\r\n/* Script Card */\r\n\r\n::ng-deep .script-card {\r\n  grid-column: 1 / -1;\r\n}\r\n\r\n.code-viewer-wrapper {\r\n  background: #1e1e1e;\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n  padding: 0;\r\n}\r\n\r\n::ng-deep .code-viewer-wrapper pre {\r\n  margin: 0;\r\n  border-radius: 8px;\r\n}\r\n\r\n/* Responsive Design */\r\n\r\n@media screen and (max-width: 768px) {\r\n  .trigger-detail-container {\r\n    padding: 1rem;\r\n  }\r\n\r\n  .content-grid {\r\n    grid-template-columns: 1fr;\r\n    gap: 1rem;\r\n  }\r\n\r\n  .trigger-title {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .trigger-icon-large {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .trigger-title-section {\r\n    flex-direction: column;\r\n  }\r\n\r\n  ::ng-deep .trigger-header-card .p-card-body {\r\n    padding: 1.5rem;\r\n  }\r\n\r\n  .card-header-with-action {\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 0.75rem;\r\n  }\r\n\r\n  .edit-actions {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .edit-actions button {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n/* Utility Classes */\r\n\r\n.w-full {\r\n  width: 100%;\r\n}\r\n\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpZ2dlcnMvY29tcG9uZW50cy9kYXRhYmFzZS10cmlnZ2VyL2RhdGFiYXNlLXRyaWdnZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQSx1QkFBdUI7O0FBQ3ZCO0VBQ0UscUJBQXFCO0VBQ3JCLDZEQUE2RDtFQUM3RCxZQUFZO0VBQ1osZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQywwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQSxpQkFBaUI7O0FBQ2pCO0VBQ0UsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUVBLHdCQUF3Qjs7QUFDeEI7RUFDRSx3Q0FBd0M7RUFDeEMsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUEsd0JBQXdCOztBQUN4QjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUdBQXlHO0VBQ3pHLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUEsb0JBQW9COztBQUNwQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBLGdCQUFnQjs7QUFDaEI7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBLHNCQUFzQjs7QUFDdEI7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsWUFBWTtFQUNkOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUEsb0JBQW9COztBQUNwQjtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3RyaWdnZXJzL2NvbXBvbmVudHMvZGF0YWJhc2UtdHJpZ2dlci9kYXRhYmFzZS10cmlnZ2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJpZ2dlci1kZXRhaWwtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi8qIEhlYWRlciBDYXJkIFN0eWxlcyAqL1xyXG46Om5nLWRlZXAgLnRyaWdnZXItaGVhZGVyLWNhcmQge1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4xNSk7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudHJpZ2dlci1oZWFkZXItY2FyZCAucC1jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udHJpZ2dlci1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50cmlnZ2VyLXRpdGxlLXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4udHJpZ2dlci1pY29uLWxhcmdlIHtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxufVxyXG5cclxuLnRyaWdnZXItdGl0bGUge1xyXG4gIG1hcmdpbjogMCAwIDAuNXJlbSAwO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC50cmlnZ2VyLWhlYWRlci1jYXJkIC5wLWJyZWFkY3J1bWIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnRyaWdnZXItaGVhZGVyLWNhcmQgLnAtYnJlYWRjcnVtYiAucC1tZW51aXRlbS1saW5rIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudHJpZ2dlci1oZWFkZXItY2FyZCAucC1icmVhZGNydW1iIC5wLW1lbnVpdGVtLXNlcGFyYXRvciB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxufVxyXG5cclxuLyogQ29udGVudCBHcmlkICovXHJcbi5jb250ZW50LWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMWZyKSk7XHJcbiAgZ2FwOiAxLjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG4vKiBTZWN0aW9uIENhcmQgU3R5bGVzICovXHJcbjo6bmctZGVlcCAuc2VjdGlvbi1jYXJkIHtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnNlY3Rpb24tY2FyZCAucC1jYXJkLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2U5ZWNlZjtcclxuICBwYWRkaW5nOiAxLjI1cmVtIDEuNXJlbTtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyLXdpdGgtYWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXItdGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXItdGl0bGUgaSB7XHJcbiAgY29sb3I6ICM2NjdlZWE7XHJcbn1cclxuXHJcbi8qIERlc2NyaXB0aW9uIENvbnRlbnQgKi9cclxuLmRlc2NyaXB0aW9uLWNvbnRlbnQge1xyXG4gIG1pbi1oZWlnaHQ6IDgwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLWNvbnRlbnQgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG59XHJcblxyXG4udGV4dC1tdXRlZCB7XHJcbiAgY29sb3I6ICM5OTkgIWltcG9ydGFudDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5lZGl0LWRlc2NyaXB0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4uZWRpdC1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMC43NXJlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmVkaXQtZGVzY3JpcHRpb24gdGV4dGFyZWEge1xyXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG5cclxuLyogUHJvcGVydGllcyBHcmlkICovXHJcbi5wcm9wZXJ0aWVzLWdyaWQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDEuNXJlbTtcclxufVxyXG5cclxuLnByb3BlcnR5LWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzY2N2VlYTtcclxufVxyXG5cclxuLnByb3BlcnR5LWxhYmVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbn1cclxuXHJcbi5wcm9wZXJ0eS1sYWJlbCBpIHtcclxuICBjb2xvcjogIzY2N2VlYTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5wcm9wZXJ0eS12YWx1ZSB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcclxufVxyXG5cclxuLyogU2NyaXB0IENhcmQgKi9cclxuOjpuZy1kZWVwIC5zY3JpcHQtY2FyZCB7XHJcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcclxufVxyXG5cclxuLmNvZGUtdmlld2VyLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6ICMxZTFlMWU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jb2RlLXZpZXdlci13cmFwcGVyIHByZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAudHJpZ2dlci1kZXRhaWwtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgfVxyXG5cclxuICAuY29udGVudC1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLnRyaWdnZXItdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAudHJpZ2dlci1pY29uLWxhcmdlIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcblxyXG4gIC50cmlnZ2VyLXRpdGxlLXNlY3Rpb24ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAudHJpZ2dlci1oZWFkZXItY2FyZCAucC1jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtaGVhZGVyLXdpdGgtYWN0aW9uIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGdhcDogMC43NXJlbTtcclxuICB9XHJcblxyXG4gIC5lZGl0LWFjdGlvbnMge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5lZGl0LWFjdGlvbnMgYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLyogVXRpbGl0eSBDbGFzc2VzICovXHJcbi53LWZ1bGwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/triggers/components/database-trigger/database-trigger.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/triggers/components/database-trigger/database-trigger.component.ts ***!
  \************************************************************************************/
/*! exports provided: DatabaseTriggerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseTriggerComponent", function() { return DatabaseTriggerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_database_trigger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/database-trigger.service */ "./src/app/triggers/services/database-trigger.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");





let DatabaseTriggerComponent = class DatabaseTriggerComponent {
    constructor(route, router, triggerService, messageService) {
        this.route = route;
        this.router = router;
        this.triggerService = triggerService;
        this.messageService = messageService;
        this.iblnShowEditBox = false;
        this.loading = false;
        this.saving = false;
        this.language = 'sql';
        this.tiggersDesc = "";
        this.breadcrumbItems = [];
        this.homeBreadcrumb = { icon: 'pi pi-home', routerLink: '/' };
    }
    ngOnInit() {
        this.tiggersName = this.route.snapshot.params.objectname;
        this.setupBreadcrumb();
        this.getTriggerByName(this.tiggersName);
    }
    setupBreadcrumb() {
        this.breadcrumbItems = [
            { label: 'Triggers', routerLink: '/Trigger/s' },
            { label: this.tiggersName }
        ];
    }
    getTriggerByName(name) {
        this.loading = true;
        this.triggerService.getTriggerByName(name).subscribe({
            next: (data) => {
                this.selectedTrigger = data;
                this.tiggersDesc = this.selectedTrigger ? this.selectedTrigger.description || '' : '';
                this.loading = false;
            },
            error: (error) => {
                console.error('Error fetching trigger:', error);
                this.loading = false;
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Failed to load trigger details',
                    life: 5000
                });
            }
        });
    }
    ShowModelPOP(event) {
        event.preventDefault();
        this.iblnShowEditBox = true;
    }
    CancelTableMsDesciption(event) {
        event.preventDefault();
        this.tiggersDesc = this.selectedTrigger ? this.selectedTrigger.description || '' : '';
        this.iblnShowEditBox = false;
    }
    SaveTableMsDesciption(event) {
        event.preventDefault();
        if (!this.selectedTrigger) {
            return;
        }
        this.saving = true;
        this.selectedTrigger.description = this.tiggersDesc;
        this.triggerService.mergeTriggerProperty(this.selectedTrigger).subscribe({
            next: (message) => {
                console.log(message);
                this.saving = false;
                this.iblnShowEditBox = false;
                this.messageService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'Description updated successfully',
                    life: 3000
                });
                this.getTriggerByName(this.tiggersName);
            },
            error: (error) => {
                console.error('Error updating trigger description:', error);
                this.saving = false;
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Failed to update description',
                    life: 5000
                });
            }
        });
    }
};
DatabaseTriggerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_database_trigger_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseTriggerService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }
];
DatabaseTriggerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-database-trigger',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./database-trigger.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/triggers/components/database-trigger/database-trigger.component.html")).default,
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./database-trigger.component.css */ "./src/app/triggers/components/database-trigger/database-trigger.component.css")).default]
    })
], DatabaseTriggerComponent);



/***/ }),

/***/ "./src/app/triggers/components/database-triggers/database-triggers.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/triggers/components/database-triggers/database-triggers.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".triggers-container {\r\n  padding: 1.5rem;\r\n  max-width: 1400px;\r\n  margin: 0 auto;\r\n}\r\n\r\n::ng-deep .triggers-card {\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\r\n  border-radius: 12px;\r\n  overflow: hidden;\r\n}\r\n\r\n::ng-deep .triggers-card .p-card-header {\r\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n  padding: 1.5rem;\r\n  border-bottom: none;\r\n}\r\n\r\n.card-header-content {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  color: white;\r\n}\r\n\r\n.header-title {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.75rem;\r\n}\r\n\r\n.header-title i {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.header-title h2 {\r\n  margin: 0;\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n  color: white;\r\n}\r\n\r\n.custom-badge {\r\n  background: rgba(255, 255, 255, 0.2);\r\n  color: white;\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 20px;\r\n  font-weight: 600;\r\n  font-size: 0.95rem;\r\n  min-width: 2.5rem;\r\n  text-align: center;\r\n  display: inline-block;\r\n  border: 2px solid rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.search-container {\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.search-input {\r\n  width: 100%;\r\n}\r\n\r\n.search-input input {\r\n  width: 100%;\r\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\r\n  border-radius: 8px;\r\n  border: 1px solid #e0e0e0;\r\n  font-size: 1rem;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.search-input input:focus {\r\n  border-color: #667eea;\r\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\r\n}\r\n\r\n.trigger-name-cell {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.75rem;\r\n}\r\n\r\n.trigger-icon {\r\n  color: #667eea;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.trigger-name {\r\n  font-weight: 600;\r\n  color: #333;\r\n}\r\n\r\n.trigger-description {\r\n  color: #666;\r\n  font-size: 0.95rem;\r\n}\r\n\r\n.empty-state {\r\n  padding: 3rem 1rem;\r\n  text-align: center;\r\n  color: #999;\r\n}\r\n\r\n.empty-state i {\r\n  font-size: 3rem;\r\n  margin-bottom: 1rem;\r\n  display: block;\r\n  color: #ccc;\r\n}\r\n\r\n.empty-state p {\r\n  font-size: 1.1rem;\r\n  margin: 0;\r\n}\r\n\r\n::ng-deep .p-datatable .p-datatable-header {\r\n  background: #f8f9fa;\r\n  border: none;\r\n  padding: 1rem;\r\n}\r\n\r\n::ng-deep .p-datatable .p-datatable-thead > tr > th {\r\n  background: #f8f9fa;\r\n  color: #495057;\r\n  font-weight: 600;\r\n  border: none;\r\n  padding: 1rem;\r\n}\r\n\r\n::ng-deep .p-datatable .p-datatable-tbody > tr {\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n::ng-deep .p-datatable .p-datatable-tbody > tr:hover {\r\n  background: #f8f9ff !important;\r\n  transform: translateY(-2px);\r\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);\r\n}\r\n\r\n::ng-deep .p-datatable .p-datatable-tbody > tr > td {\r\n  padding: 1rem;\r\n  border-color: #f0f0f0;\r\n}\r\n\r\n::ng-deep .p-button.p-button-rounded.p-button-text {\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n::ng-deep .p-button.p-button-rounded.p-button-text:hover {\r\n  background: rgba(102, 126, 234, 0.1);\r\n  transform: scale(1.1);\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .triggers-container {\r\n    padding: 1rem;\r\n  }\r\n\r\n  .header-title h2 {\r\n    font-size: 1.25rem;\r\n  }\r\n\r\n  .card-header-content {\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    align-items: flex-start;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpZ2dlcnMvY29tcG9uZW50cy9kYXRhYmFzZS10cmlnZ2Vycy9kYXRhYmFzZS10cmlnZ2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw2REFBNkQ7RUFDN0QsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUztFQUNULGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULHVCQUF1QjtFQUN6QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdHJpZ2dlcnMvY29tcG9uZW50cy9kYXRhYmFzZS10cmlnZ2Vycy9kYXRhYmFzZS10cmlnZ2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyaWdnZXJzLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIG1heC13aWR0aDogMTQwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnRyaWdnZXJzLWNhcmQge1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnRyaWdnZXJzLWNhcmQgLnAtY2FyZC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlci1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhlYWRlci10aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC43NXJlbTtcclxufVxyXG5cclxuLmhlYWRlci10aXRsZSBpIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLmhlYWRlci10aXRsZSBoMiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY3VzdG9tLWJhZGdlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgbWluLXdpZHRoOiAyLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbn1cclxuXHJcbi5zZWFyY2gtY29udGFpbmVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi5zZWFyY2gtaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0IGlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW0gMC43NXJlbSAyLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5zZWFyY2gtaW5wdXQgaW5wdXQ6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogIzY2N2VlYTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjEpO1xyXG59XHJcblxyXG4udHJpZ2dlci1uYW1lLWNlbGwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNzVyZW07XHJcbn1cclxuXHJcbi50cmlnZ2VyLWljb24ge1xyXG4gIGNvbG9yOiAjNjY3ZWVhO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcblxyXG4udHJpZ2dlci1uYW1lIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4udHJpZ2dlci1kZXNjcmlwdGlvbiB7XHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG59XHJcblxyXG4uZW1wdHktc3RhdGUge1xyXG4gIHBhZGRpbmc6IDNyZW0gMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbi5lbXB0eS1zdGF0ZSBpIHtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogI2NjYztcclxufVxyXG5cclxuLmVtcHR5LXN0YXRlIHAge1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5wLWRhdGF0YWJsZSAucC1kYXRhdGFibGUtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnAtZGF0YXRhYmxlIC5wLWRhdGF0YWJsZS10aGVhZCA+IHRyID4gdGgge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5wLWRhdGF0YWJsZSAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5wLWRhdGF0YWJsZSAucC1kYXRhdGFibGUtdGJvZHkgPiB0cjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmZiAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjEpO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnAtZGF0YXRhYmxlIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyID4gdGQge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjBmMGYwO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnAtYnV0dG9uLnAtYnV0dG9uLXJvdW5kZWQucC1idXR0b24tdGV4dCB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5wLWJ1dHRvbi5wLWJ1dHRvbi1yb3VuZGVkLnAtYnV0dG9uLXRleHQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4xKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnRyaWdnZXJzLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlci10aXRsZSBoMiB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgfVxyXG5cclxuICAuY2FyZC1oZWFkZXItY29udGVudCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/triggers/components/database-triggers/database-triggers.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/triggers/components/database-triggers/database-triggers.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DatabaseTriggersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseTriggersComponent", function() { return DatabaseTriggersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_database_trigger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/database-trigger.service */ "./src/app/triggers/services/database-trigger.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");




let DatabaseTriggersComponent = class DatabaseTriggersComponent {
    constructor(triggerService, messageService) {
        this.triggerService = triggerService;
        this.messageService = messageService;
        this.triggers = [];
        this.loading = false;
    }
    ngOnInit() {
        this.getAllTriggers();
    }
    getAllTriggers() {
        this.loading = true;
        this.triggerService.getAllTriggers().subscribe({
            next: (data) => {
                this.triggers = data;
                this.loading = false;
                if (data.length === 0) {
                    this.messageService.add({
                        severity: 'info',
                        summary: 'No Triggers',
                        detail: 'No database triggers found',
                        life: 3000
                    });
                }
            },
            error: (error) => {
                console.error('Error fetching triggers:', error);
                this.loading = false;
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Failed to load database triggers',
                    life: 5000
                });
            }
        });
    }
    // TrackBy function for better performance
    trackByName(index, trigger) {
        return trigger.name;
    }
};
DatabaseTriggersComponent.ctorParameters = () => [
    { type: _services_database_trigger_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseTriggerService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
];
DatabaseTriggersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-database-triggers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./database-triggers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/triggers/components/database-triggers/database-triggers.component.html")).default,
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./database-triggers.component.css */ "./src/app/triggers/components/database-triggers/database-triggers.component.css")).default]
    })
], DatabaseTriggersComponent);



/***/ }),

/***/ "./src/app/triggers/services/database-trigger.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/triggers/services/database-trigger.service.ts ***!
  \***************************************************************/
/*! exports provided: DatabaseTriggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseTriggerService", function() { return DatabaseTriggerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DatabaseTriggerService = class DatabaseTriggerService {
    constructor(http, primaryUrl, secondaryUrl) {
        this.http = http;
        this.primaryUrl = primaryUrl;
        this.secondaryUrl = secondaryUrl;
        this.primaryUrl = `${this.primaryUrl}/DatabaseTrigger`;
        this.secondaryUrl = `${this.secondaryUrl}/DatabaseTrigger`;
    }
    getAllTriggers() {
        return this.http.get(`${this.primaryUrl}`);
    }
    getTriggerByName(name) {
        return this.http.get(`${this.primaryUrl}/${name}`);
    }
    mergeTriggerProperty(trigger) {
        return this.http.post(`${this.primaryUrl}`, trigger);
    }
};
DatabaseTriggerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['API_URL',] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['ANOTHER_URL',] }] }
];
DatabaseTriggerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('API_URL')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('ANOTHER_URL'))
], DatabaseTriggerService);



/***/ }),

/***/ "./src/app/triggers/trigger.module.ts":
/*!********************************************!*\
  !*** ./src/app/triggers/trigger.module.ts ***!
  \********************************************/
/*! exports provided: DatabaseTriggerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseTriggerModule", function() { return DatabaseTriggerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_database_trigger_database_trigger_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/database-trigger/database-trigger.component */ "./src/app/triggers/components/database-trigger/database-trigger.component.ts");
/* harmony import */ var _components_database_triggers_database_triggers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/database-triggers/database-triggers.component */ "./src/app/triggers/components/database-triggers/database-triggers.component.ts");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/fesm2015/primeng-accordion.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/fesm2015/primeng-table.js");
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tree */ "./node_modules/primeng/fesm2015/primeng-tree.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/contextmenu */ "./node_modules/primeng/fesm2015/primeng-contextmenu.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/fesm2015/primeng-tabview.js");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/codehighlighter */ "./node_modules/primeng/fesm2015/primeng-codehighlighter.js");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/breadcrumb */ "./node_modules/primeng/fesm2015/primeng-breadcrumb.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/fesm2015/primeng-dialog.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/fesm2015/primeng-inputtextarea.js");
/* harmony import */ var angular_progress_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-progress-bar */ "./node_modules/angular-progress-bar/fesm2015/angular-progress-bar.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/fesm2015/primeng-card.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/fesm2015/primeng-inputtext.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/fesm2015/primeng-tooltip.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var _services_database_trigger_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/database-trigger.service */ "./src/app/triggers/services/database-trigger.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");







/* ===== PrimeNG Modules ===== */



















const routes = [
    { path: 's', component: _components_database_triggers_database_triggers_component__WEBPACK_IMPORTED_MODULE_6__["DatabaseTriggersComponent"] },
    { path: ':objectname', component: _components_database_trigger_database_trigger_component__WEBPACK_IMPORTED_MODULE_5__["DatabaseTriggerComponent"] }
];
let DatabaseTriggerModule = class DatabaseTriggerModule {
};
DatabaseTriggerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_database_trigger_database_trigger_component__WEBPACK_IMPORTED_MODULE_5__["DatabaseTriggerComponent"], _components_database_triggers_database_triggers_component__WEBPACK_IMPORTED_MODULE_6__["DatabaseTriggersComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_25__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterModule"].forChild(routes),
            /* Core Modules */
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            /* PrimeNG Modules */
            primeng_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"],
            primeng_tree__WEBPACK_IMPORTED_MODULE_9__["TreeModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_10__["ToastModule"],
            primeng_contextmenu__WEBPACK_IMPORTED_MODULE_12__["ContextMenuModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_13__["TabViewModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_14__["CodeHighlighterModule"],
            primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_15__["BreadcrumbModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_16__["DialogModule"],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17__["InputTextareaModule"],
            angular_progress_bar__WEBPACK_IMPORTED_MODULE_18__["ProgressBarModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_19__["CardModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_20__["InputTextModule"],
            primeng_tooltip__WEBPACK_IMPORTED_MODULE_21__["TooltipModule"]
        ],
        providers: [_services_database_trigger_service__WEBPACK_IMPORTED_MODULE_23__["DatabaseTriggerService"], primeng_api__WEBPACK_IMPORTED_MODULE_22__["MessageService"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], DatabaseTriggerModule);



/***/ })

}]);
//# sourceMappingURL=triggers-trigger-module-es2015.js.map