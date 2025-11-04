function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Triggers-database-trigger-module"], {
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
    __webpack_exports__["default"] = "\r\n<amexio-accordion [multi-open]=\"true\">\r\n\r\n  <!-- Trigger Name -->\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Trigger Name\" [active]=\"true\">\r\n    <h5>\r\n      <img src=\"./assets/icons/DdlTrigger.png\" style=\"width: 30px !important;\">\r\n      {{ selectedTrigger?.name }}\r\n    </h5>\r\n  </amexio-accordion-tab>\r\n\r\n  <!-- MS Description -->\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"MS Description\" [active]=\"true\">\r\n    <div class=\"table\" *ngIf=\"!iblnShowEditBox\">\r\n      <div class=\"cell\">\r\n        <p>{{ selectedTrigger?.description }}</p>\r\n      </div>\r\n      <a (click)=\"ShowModelPOP($event)\" class=\"btn btn-default btn-lg a-btn-slide-text\">\r\n        <span class=\"fa fa-edit\"></span>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"form-group\" *ngIf=\"iblnShowEditBox\">\r\n      <textarea class=\"form-control\" rows=\"5\" id=\"comment\" [(ngModel)]=\"tiggersDesc\"></textarea>\r\n      <div class=\"form-group text-right\">\r\n        <a (click)=\"CancelTableMsDesciption($event)\"><i class=\"fa fa-2x fa-times\"></i></a>&nbsp;\r\n        <a (click)=\"SaveTableMsDesciption($event)\"><i class=\"fa fa-2x fa-save\"></i></a>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n  <!-- Property -->\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Property\" [active]=\"true\">\r\n    <div class=\"table\">\r\n      <div class=\"row header\">\r\n        <div class=\"cell\">Property</div>\r\n        <div class=\"cell\">Value</div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"cell\">Created Date</div>\r\n        <div class=\"cell\">{{ selectedTrigger?.createDate }}</div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"cell\">Modified Date</div>\r\n        <div class=\"cell\">{{  selectedTrigger?.modifyDate }}</div>\r\n      </div>\r\n    </div>\r\n  </amexio-accordion-tab>\r\n\r\n  <!-- Script -->\r\n  <amexio-accordion-tab amexioColorPalette [color-palette]=\"''\" [gradient]=\"true\" header=\"Script\" [active]=\"true\">\r\n \r\n        <app-code-viewer [code]=\"selectedTrigger.definition\" [language]=\"'sql'\"></app-code-viewer>\r\n \r\n  </amexio-accordion-tab>\r\n\r\n</amexio-accordion>\r\n";

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
    var primeng_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dialog */"./node_modules/primeng/fesm2015/primeng-dialog.js");
    /* harmony import */
    var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputtextarea */"./node_modules/primeng/fesm2015/primeng-inputtextarea.js");
    /* harmony import */
    var angular_progress_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-progress-bar */"./node_modules/angular-progress-bar/fesm2015/angular-progress-bar.js");
    /* harmony import */
    var _services_database_trigger_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/database-trigger.service */"./src/app/Triggers/services/database-trigger.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../shared/shared.module */"./src/app/shared/shared.module.ts");

    /* ===== PrimeNG Modules ===== */

    var routes = [{
      path: 's',
      component: _components_database_triggers_database_triggers_component__WEBPACK_IMPORTED_MODULE_6__["DatabaseTriggersComponent"]
    }, {
      path: ':objectname',
      component: _components_database_trigger_database_trigger_component__WEBPACK_IMPORTED_MODULE_5__["DatabaseTriggerComponent"]
    }];
    var DatabaseTriggerModule = /*#__PURE__*/_createClass(function DatabaseTriggerModule() {
      _classCallCheck(this, DatabaseTriggerModule);
    });
    DatabaseTriggerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_database_trigger_database_trigger_component__WEBPACK_IMPORTED_MODULE_5__["DatabaseTriggerComponent"], _components_database_triggers_database_triggers_component__WEBPACK_IMPORTED_MODULE_6__["DatabaseTriggersComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_21__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"].forChild(routes), /* Core Modules */
      _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], /* PrimeNG Modules */
      primeng_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionModule"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"], primeng_tree__WEBPACK_IMPORTED_MODULE_9__["TreeModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_10__["ToastModule"], primeng_contextmenu__WEBPACK_IMPORTED_MODULE_12__["ContextMenuModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_13__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_14__["CodeHighlighterModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_15__["BreadcrumbModule"], primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_16__["DialogModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17__["InputTextareaModule"], angular_progress_bar__WEBPACK_IMPORTED_MODULE_18__["ProgressBarModule"]],
      providers: [_services_database_trigger_service__WEBPACK_IMPORTED_MODULE_19__["DatabaseTriggerService"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
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
  })
}]);
//# sourceMappingURL=Triggers-database-trigger-module-es5.js.map