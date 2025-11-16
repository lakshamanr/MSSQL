function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~database-database-module~function-function-module~schema-schema-module~table-table-module~tr~1a72d205"], {
  /***/"./node_modules/primeng/fesm2015/primeng-dropdown.js": (
  /*!***********************************************************!*\
    !*** ./node_modules/primeng/fesm2015/primeng-dropdown.js ***!
    \***********************************************************/
  /*! exports provided: DROPDOWN_VALUE_ACCESSOR, Dropdown, DropdownItem, DropdownModule */
  /***/
  function _node_modules_primeng_fesm2015_primengDropdownJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DROPDOWN_VALUE_ACCESSOR", function () {
      return DROPDOWN_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Dropdown", function () {
      return Dropdown;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DropdownItem", function () {
      return DropdownItem;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DropdownModule", function () {
      return DropdownModule;
    });
    /* harmony import */
    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/scrolling */"./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */"./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */"./node_modules/primeng/fesm2015/primeng-api.js");
    /* harmony import */
    var primeng_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dom */"./node_modules/primeng/fesm2015/primeng-dom.js");
    /* harmony import */
    var primeng_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/utils */"./node_modules/primeng/fesm2015/primeng-utils.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tooltip */"./node_modules/primeng/fesm2015/primeng-tooltip.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var DROPDOWN_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return Dropdown;
      }),
      multi: true
    };
    var DropdownItem = /*#__PURE__*/function () {
      function DropdownItem() {
        _classCallCheck(this, DropdownItem);
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      return _createClass(DropdownItem, [{
        key: "onOptionClick",
        value: function onOptionClick(event) {
          this.onClick.emit({
            originalEvent: event,
            option: this.option
          });
        }
      }]);
    }();
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DropdownItem.prototype, "option", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DropdownItem.prototype, "selected", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DropdownItem.prototype, "disabled", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DropdownItem.prototype, "visible", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DropdownItem.prototype, "itemSize", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DropdownItem.prototype, "template", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DropdownItem.prototype, "onClick", void 0);
    DropdownItem = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-dropdownItem',
      template: "\n        <li (click)=\"onOptionClick($event)\" role=\"option\"\n            [attr.aria-label]=\"option.label\" [attr.aria-selected]=\"selected\"\n            [ngStyle]=\"{'height': itemSize + 'px'}\"\n            [ngClass]=\"{'ui-dropdown-item ui-corner-all':true,\n                                                'ui-state-highlight': selected,\n                                                'ui-state-disabled':(option.disabled),\n                                                'ui-dropdown-item-empty': !option.label||option.label.length === 0}\">\n            <span *ngIf=\"!template\">{{option.label||'empty'}}</span>\n            <ng-container *ngTemplateOutlet=\"template; context: {$implicit: option}\"></ng-container>\n        </li>\n    "
    })], DropdownItem);
    var Dropdown = /*#__PURE__*/function () {
      function Dropdown(el, renderer, cd, zone) {
        _classCallCheck(this, Dropdown);
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.zone = zone;
        this.scrollHeight = '200px';
        this.filterBy = 'label';
        this.resetFilterOnHide = false;
        this.dropdownIcon = 'pi pi-chevron-down';
        this.autoDisplayFirst = true;
        this.emptyFilterMessage = 'No results found';
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.showTransitionOptions = '225ms ease-out';
        this.hideTransitionOptions = '195ms ease-in';
        this.filterMatchMode = "contains";
        this.tooltip = '';
        this.tooltipPosition = 'right';
        this.tooltipPositionStyle = 'absolute';
        this.autofocusFilter = true;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onModelChange = function () {};
        this.onModelTouched = function () {};
        this.viewPortOffsetTop = 0;
      }
      return _createClass(Dropdown, [{
        key: "disabled",
        get: function get() {
          return this._disabled;
        },
        set: function set(_disabled) {
          if (_disabled) this.focused = false;
          this._disabled = _disabled;
          if (!this.cd.destroyed) {
            this.cd.detectChanges();
          }
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this = this;
          this.templates.forEach(function (item) {
            switch (item.getType()) {
              case 'item':
                _this.itemTemplate = item.template;
                break;
              case 'selectedItem':
                _this.selectedItemTemplate = item.template;
                break;
              case 'group':
                _this.groupTemplate = item.template;
                break;
              default:
                _this.itemTemplate = item.template;
                break;
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.optionsToDisplay = this.options;
          this.updateSelectedOption(null);
        }
      }, {
        key: "options",
        get: function get() {
          return this._options;
        },
        set: function set(val) {
          var opts = this.optionLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].generateSelectItems(val, this.optionLabel) : val;
          this._options = opts;
          this.optionsToDisplay = this._options;
          this.updateSelectedOption(this.value);
          this.optionsChanged = true;
          this.updateFilledState();
          if (this.filterValue && this.filterValue.length) {
            this.activateFilter();
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.editable) {
            this.updateEditableLabel();
          }
        }
      }, {
        key: "label",
        get: function get() {
          return this.selectedOption ? this.selectedOption.label : null;
        }
      }, {
        key: "updateEditableLabel",
        value: function updateEditableLabel() {
          if (this.editableInputViewChild && this.editableInputViewChild.nativeElement) {
            this.editableInputViewChild.nativeElement.value = this.selectedOption ? this.selectedOption.label : this.value || '';
          }
        }
      }, {
        key: "onItemClick",
        value: function onItemClick(event) {
          var _this2 = this;
          var option = event.option;
          if (!option.disabled) {
            this.selectItem(event, option);
            this.accessibleViewChild.nativeElement.focus();
          }
          setTimeout(function () {
            _this2.hide(event);
          }, 150);
        }
      }, {
        key: "selectItem",
        value: function selectItem(event, option) {
          var _this3 = this;
          if (this.selectedOption != option) {
            this.selectedOption = option;
            this.value = option.value;
            this.filled = true;
            this.onModelChange(this.value);
            this.updateEditableLabel();
            this.onChange.emit({
              originalEvent: event.originalEvent,
              value: this.value
            });
            if (this.virtualScroll) {
              setTimeout(function () {
                _this3.viewPortOffsetTop = _this3.viewPort ? _this3.viewPort.measureScrollOffset() : 0;
              }, 1);
            }
          }
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          var _this4 = this;
          if (this.optionsChanged && this.overlayVisible) {
            this.optionsChanged = false;
            if (this.virtualScroll) {
              this.updateVirtualScrollSelectedIndex(true);
            }
            this.zone.runOutsideAngular(function () {
              setTimeout(function () {
                _this4.alignOverlay();
              }, 1);
            });
          }
          if (this.selectedOptionUpdated && this.itemsWrapper) {
            if (this.virtualScroll && this.viewPort) {
              var range = this.viewPort.getRenderedRange();
              this.updateVirtualScrollSelectedIndex(false);
              if (range.start > this.virtualScrollSelectedIndex || range.end < this.virtualScrollSelectedIndex) {
                this.viewPort.scrollToIndex(this.virtualScrollSelectedIndex);
              }
            }
            var selectedItem = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.overlay, 'li.ui-state-highlight');
            if (selectedItem) {
              primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].scrollInView(this.itemsWrapper, primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.overlay, 'li.ui-state-highlight'));
            }
            this.selectedOptionUpdated = false;
          }
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          if (this.filter) {
            this.resetFilter();
          }
          this.value = value;
          this.updateSelectedOption(value);
          this.updateEditableLabel();
          this.updateFilledState();
          this.cd.markForCheck();
        }
      }, {
        key: "resetFilter",
        value: function resetFilter() {
          this.filterValue = null;
          if (this.filterViewChild && this.filterViewChild.nativeElement) {
            this.filterViewChild.nativeElement.value = '';
          }
          this.optionsToDisplay = this.options;
        }
      }, {
        key: "updateSelectedOption",
        value: function updateSelectedOption(val) {
          this.selectedOption = this.findOption(val, this.optionsToDisplay);
          if (this.autoDisplayFirst && !this.placeholder && !this.selectedOption && this.optionsToDisplay && this.optionsToDisplay.length && !this.editable) {
            this.selectedOption = this.optionsToDisplay[0];
          }
          this.selectedOptionUpdated = true;
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onModelChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onModelTouched = fn;
        }
      }, {
        key: "setDisabledState",
        value: function setDisabledState(val) {
          this.disabled = val;
        }
      }, {
        key: "onMouseclick",
        value: function onMouseclick(event) {
          if (this.disabled || this.readonly || this.isInputClick(event)) {
            return;
          }
          this.onClick.emit(event);
          this.accessibleViewChild.nativeElement.focus();
          if (this.overlayVisible) this.hide(event);else this.show();
          this.cd.detectChanges();
        }
      }, {
        key: "isInputClick",
        value: function isInputClick(event) {
          return primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(event.target, 'ui-dropdown-clear-icon') || event.target.isSameNode(this.accessibleViewChild.nativeElement) || this.editableInputViewChild && event.target.isSameNode(this.editableInputViewChild.nativeElement);
        }
      }, {
        key: "isOutsideClicked",
        value: function isOutsideClicked(event) {
          return !(this.el.nativeElement.isSameNode(event.target) || this.el.nativeElement.contains(event.target) || this.overlay && this.overlay.contains(event.target));
        }
      }, {
        key: "onEditableInputClick",
        value: function onEditableInputClick() {
          this.bindDocumentClickListener();
        }
      }, {
        key: "onEditableInputFocus",
        value: function onEditableInputFocus(event) {
          this.focused = true;
          this.hide(event);
          this.onFocus.emit(event);
        }
      }, {
        key: "onEditableInputChange",
        value: function onEditableInputChange(event) {
          this.value = event.target.value;
          this.updateSelectedOption(this.value);
          this.onModelChange(this.value);
          this.onChange.emit({
            originalEvent: event,
            value: this.value
          });
        }
      }, {
        key: "show",
        value: function show() {
          this.overlayVisible = true;
        }
      }, {
        key: "onOverlayAnimationStart",
        value: function onOverlayAnimationStart(event) {
          switch (event.toState) {
            case 'visible':
              this.overlay = event.element;
              var itemsWrapperSelector = this.virtualScroll ? '.cdk-virtual-scroll-viewport' : '.ui-dropdown-items-wrapper';
              this.itemsWrapper = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.overlay, itemsWrapperSelector);
              this.appendOverlay();
              if (this.autoZIndex) {
                this.overlay.style.zIndex = String(this.baseZIndex + ++primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].zindex);
              }
              this.alignOverlay();
              this.bindDocumentClickListener();
              this.bindDocumentResizeListener();
              if (this.options && this.options.length) {
                if (!this.virtualScroll) {
                  var selectedListItem = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.itemsWrapper, '.ui-dropdown-item.ui-state-highlight');
                  if (selectedListItem) {
                    primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].scrollInView(this.itemsWrapper, selectedListItem);
                  }
                }
              }
              if (this.filterViewChild && this.filterViewChild.nativeElement) {
                this.preventModelTouched = true;
                if (this.autofocusFilter) {
                  this.filterViewChild.nativeElement.focus();
                }
              }
              this.onShow.emit(event);
              break;
            case 'void':
              this.onOverlayHide();
              break;
          }
        }
      }, {
        key: "scrollToSelectedVirtualScrollElement",
        value: function scrollToSelectedVirtualScrollElement() {
          if (!this.virtualAutoScrolled) {
            if (this.viewPortOffsetTop) {
              this.viewPort.scrollToOffset(this.viewPortOffsetTop);
            } else if (this.virtualScrollSelectedIndex > -1) {
              this.viewPort.scrollToIndex(this.virtualScrollSelectedIndex);
            }
          }
          this.virtualAutoScrolled = true;
        }
      }, {
        key: "updateVirtualScrollSelectedIndex",
        value: function updateVirtualScrollSelectedIndex(resetOffset) {
          if (this.selectedOption && this.optionsToDisplay && this.optionsToDisplay.length) {
            if (resetOffset) {
              this.viewPortOffsetTop = 0;
            }
            this.virtualScrollSelectedIndex = this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay);
          }
        }
      }, {
        key: "appendOverlay",
        value: function appendOverlay() {
          if (this.appendTo) {
            if (this.appendTo === 'body') document.body.appendChild(this.overlay);else primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].appendChild(this.overlay, this.appendTo);
            if (!this.overlay.style.minWidth) {
              this.overlay.style.minWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getWidth(this.containerViewChild.nativeElement) + 'px';
            }
          }
        }
      }, {
        key: "restoreOverlayAppend",
        value: function restoreOverlayAppend() {
          if (this.overlay && this.appendTo) {
            this.el.nativeElement.appendChild(this.overlay);
          }
        }
      }, {
        key: "hide",
        value: function hide(event) {
          this.overlayVisible = false;
          if (this.filter && this.resetFilterOnHide) {
            this.resetFilter();
          }
          if (this.virtualScroll) {
            this.virtualAutoScrolled = false;
          }
          this.cd.markForCheck();
          this.onHide.emit(event);
        }
      }, {
        key: "alignOverlay",
        value: function alignOverlay() {
          if (this.overlay) {
            if (this.appendTo) primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].absolutePosition(this.overlay, this.containerViewChild.nativeElement);else primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].relativePosition(this.overlay, this.containerViewChild.nativeElement);
          }
        }
      }, {
        key: "onInputFocus",
        value: function onInputFocus(event) {
          this.focused = true;
          this.onFocus.emit(event);
        }
      }, {
        key: "onInputBlur",
        value: function onInputBlur(event) {
          this.focused = false;
          this.onBlur.emit(event);
          if (!this.preventModelTouched) {
            this.onModelTouched();
          }
          this.preventModelTouched = false;
        }
      }, {
        key: "findPrevEnabledOption",
        value: function findPrevEnabledOption(index) {
          var prevEnabledOption;
          if (this.optionsToDisplay && this.optionsToDisplay.length) {
            for (var i = index - 1; 0 <= i; i--) {
              var option = this.optionsToDisplay[i];
              if (option.disabled) {
                continue;
              } else {
                prevEnabledOption = option;
                break;
              }
            }
            if (!prevEnabledOption) {
              for (var _i = this.optionsToDisplay.length - 1; _i >= index; _i--) {
                var _option = this.optionsToDisplay[_i];
                if (_option.disabled) {
                  continue;
                } else {
                  prevEnabledOption = _option;
                  break;
                }
              }
            }
          }
          return prevEnabledOption;
        }
      }, {
        key: "findNextEnabledOption",
        value: function findNextEnabledOption(index) {
          var nextEnabledOption;
          if (this.optionsToDisplay && this.optionsToDisplay.length) {
            for (var i = index + 1; index < this.optionsToDisplay.length - 1; i++) {
              var option = this.optionsToDisplay[i];
              if (option.disabled) {
                continue;
              } else {
                nextEnabledOption = option;
                break;
              }
            }
            if (!nextEnabledOption) {
              for (var _i2 = 0; _i2 < index; _i2++) {
                var _option2 = this.optionsToDisplay[_i2];
                if (_option2.disabled) {
                  continue;
                } else {
                  nextEnabledOption = _option2;
                  break;
                }
              }
            }
          }
          return nextEnabledOption;
        }
      }, {
        key: "onKeydown",
        value: function onKeydown(event, search) {
          if (this.readonly || !this.optionsToDisplay || this.optionsToDisplay.length === null) {
            return;
          }
          switch (event.which) {
            //down
            case 40:
              if (!this.overlayVisible && event.altKey) {
                this.show();
              } else {
                if (this.group) {
                  var selectedItemIndex = this.selectedOption ? this.findOptionGroupIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
                  if (selectedItemIndex !== -1) {
                    var nextItemIndex = selectedItemIndex.itemIndex + 1;
                    if (nextItemIndex < this.optionsToDisplay[selectedItemIndex.groupIndex].items.length) {
                      this.selectItem(event, this.optionsToDisplay[selectedItemIndex.groupIndex].items[nextItemIndex]);
                      this.selectedOptionUpdated = true;
                    } else if (this.optionsToDisplay[selectedItemIndex.groupIndex + 1]) {
                      this.selectItem(event, this.optionsToDisplay[selectedItemIndex.groupIndex + 1].items[0]);
                      this.selectedOptionUpdated = true;
                    }
                  } else {
                    this.selectItem(event, this.optionsToDisplay[0].items[0]);
                  }
                } else {
                  var _selectedItemIndex = this.selectedOption ? this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
                  var nextEnabledOption = this.findNextEnabledOption(_selectedItemIndex);
                  if (nextEnabledOption) {
                    this.selectItem(event, nextEnabledOption);
                    this.selectedOptionUpdated = true;
                  }
                }
              }
              event.preventDefault();
              break;
            //up
            case 38:
              if (this.group) {
                var _selectedItemIndex2 = this.selectedOption ? this.findOptionGroupIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
                if (_selectedItemIndex2 !== -1) {
                  var prevItemIndex = _selectedItemIndex2.itemIndex - 1;
                  if (prevItemIndex >= 0) {
                    this.selectItem(event, this.optionsToDisplay[_selectedItemIndex2.groupIndex].items[prevItemIndex]);
                    this.selectedOptionUpdated = true;
                  } else if (prevItemIndex < 0) {
                    var prevGroup = this.optionsToDisplay[_selectedItemIndex2.groupIndex - 1];
                    if (prevGroup) {
                      this.selectItem(event, prevGroup.items[prevGroup.items.length - 1]);
                      this.selectedOptionUpdated = true;
                    }
                  }
                }
              } else {
                var _selectedItemIndex3 = this.selectedOption ? this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
                var prevEnabledOption = this.findPrevEnabledOption(_selectedItemIndex3);
                if (prevEnabledOption) {
                  this.selectItem(event, prevEnabledOption);
                  this.selectedOptionUpdated = true;
                }
              }
              event.preventDefault();
              break;
            //space
            case 32:
            case 32:
              if (!this.overlayVisible) {
                this.show();
                event.preventDefault();
              }
              break;
            //enter
            case 13:
              if (!this.filter || this.optionsToDisplay && this.optionsToDisplay.length > 0) {
                this.hide(event);
              }
              event.preventDefault();
              break;
            //escape and tab
            case 27:
            case 9:
              this.hide(event);
              break;
            //search item based on keyboard input
            default:
              if (search) {
                this.search(event);
              }
              break;
          }
        }
      }, {
        key: "search",
        value: function search(event) {
          var _this5 = this;
          if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
          }
          var _char = event.key;
          this.previousSearchChar = this.currentSearchChar;
          this.currentSearchChar = _char;
          if (this.previousSearchChar === this.currentSearchChar) this.searchValue = this.currentSearchChar;else this.searchValue = this.searchValue ? this.searchValue + _char : _char;
          var newOption;
          if (this.group) {
            var searchIndex = this.selectedOption ? this.findOptionGroupIndex(this.selectedOption.value, this.optionsToDisplay) : {
              groupIndex: 0,
              itemIndex: 0
            };
            newOption = this.searchOptionWithinGroup(searchIndex);
          } else {
            var _searchIndex = this.selectedOption ? this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
            newOption = this.searchOption(++_searchIndex);
          }
          if (newOption && !newOption.disabled) {
            this.selectItem(event, newOption);
            this.selectedOptionUpdated = true;
          }
          this.searchTimeout = setTimeout(function () {
            _this5.searchValue = null;
          }, 250);
        }
      }, {
        key: "searchOption",
        value: function searchOption(index) {
          var option;
          if (this.searchValue) {
            option = this.searchOptionInRange(index, this.optionsToDisplay.length);
            if (!option) {
              option = this.searchOptionInRange(0, index);
            }
          }
          return option;
        }
      }, {
        key: "searchOptionInRange",
        value: function searchOptionInRange(start, end) {
          for (var i = start; i < end; i++) {
            var opt = this.optionsToDisplay[i];
            if (opt.label.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !opt.disabled) {
              return opt;
            }
          }
          return null;
        }
      }, {
        key: "searchOptionWithinGroup",
        value: function searchOptionWithinGroup(index) {
          var option;
          if (this.searchValue) {
            for (var i = index.groupIndex; i < this.optionsToDisplay.length; i++) {
              for (var j = index.groupIndex === i ? index.itemIndex + 1 : 0; j < this.optionsToDisplay[i].items.length; j++) {
                var opt = this.optionsToDisplay[i].items[j];
                if (opt.label.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !opt.disabled) {
                  return opt;
                }
              }
            }
            if (!option) {
              for (var _i3 = 0; _i3 <= index.groupIndex; _i3++) {
                for (var _j = 0; _j < (index.groupIndex === _i3 ? index.itemIndex : this.optionsToDisplay[_i3].items.length); _j++) {
                  var _opt = this.optionsToDisplay[_i3].items[_j];
                  if (_opt.label.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !_opt.disabled) {
                    return _opt;
                  }
                }
              }
            }
          }
          return null;
        }
      }, {
        key: "findOptionIndex",
        value: function findOptionIndex(val, opts) {
          var index = -1;
          if (opts) {
            for (var i = 0; i < opts.length; i++) {
              if (val == null && opts[i].value == null || primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].equals(val, opts[i].value, this.dataKey)) {
                index = i;
                break;
              }
            }
          }
          return index;
        }
      }, {
        key: "findOptionGroupIndex",
        value: function findOptionGroupIndex(val, opts) {
          var groupIndex, itemIndex;
          if (opts) {
            for (var i = 0; i < opts.length; i++) {
              groupIndex = i;
              itemIndex = this.findOptionIndex(val, opts[i].items);
              if (itemIndex !== -1) {
                break;
              }
            }
          }
          if (itemIndex !== -1) {
            return {
              groupIndex: groupIndex,
              itemIndex: itemIndex
            };
          } else {
            return -1;
          }
        }
      }, {
        key: "findOption",
        value: function findOption(val, opts, inGroup) {
          if (this.group && !inGroup) {
            var opt;
            if (opts && opts.length) {
              var _iterator = _createForOfIteratorHelper(opts),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var optgroup = _step.value;
                  opt = this.findOption(val, optgroup.items, true);
                  if (opt) {
                    break;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
            return opt;
          } else {
            var index = this.findOptionIndex(val, opts);
            return index != -1 ? opts[index] : null;
          }
        }
      }, {
        key: "onFilter",
        value: function onFilter(event) {
          var inputValue = event.target.value;
          if (inputValue && inputValue.length) {
            this.filterValue = inputValue;
            this.activateFilter();
          } else {
            this.filterValue = null;
            this.optionsToDisplay = this.options;
          }
          this.optionsChanged = true;
        }
      }, {
        key: "activateFilter",
        value: function activateFilter() {
          var searchFields = this.filterBy.split(',');
          if (this.options && this.options.length) {
            if (this.group) {
              var filteredGroups = [];
              var _iterator2 = _createForOfIteratorHelper(this.options),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var optgroup = _step2.value;
                  var filteredSubOptions = primeng_utils__WEBPACK_IMPORTED_MODULE_6__["FilterUtils"].filter(optgroup.items, searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
                  if (filteredSubOptions && filteredSubOptions.length) {
                    filteredGroups.push({
                      label: optgroup.label,
                      value: optgroup.value,
                      items: filteredSubOptions
                    });
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              this.optionsToDisplay = filteredGroups;
            } else {
              this.optionsToDisplay = primeng_utils__WEBPACK_IMPORTED_MODULE_6__["FilterUtils"].filter(this.options, searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
            }
            this.optionsChanged = true;
          }
        }
      }, {
        key: "applyFocus",
        value: function applyFocus() {
          if (this.editable) primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.el.nativeElement, '.ui-dropdown-label.ui-inputtext').focus();else primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.el.nativeElement, 'input[readonly]').focus();
        }
      }, {
        key: "focus",
        value: function focus() {
          this.applyFocus();
        }
      }, {
        key: "bindDocumentClickListener",
        value: function bindDocumentClickListener() {
          var _this6 = this;
          if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', function (event) {
              if (_this6.isOutsideClicked(event)) {
                _this6.hide(event);
                _this6.unbindDocumentClickListener();
              }
              _this6.cd.markForCheck();
            });
          }
        }
      }, {
        key: "unbindDocumentClickListener",
        value: function unbindDocumentClickListener() {
          if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
          }
        }
      }, {
        key: "bindDocumentResizeListener",
        value: function bindDocumentResizeListener() {
          this.documentResizeListener = this.onWindowResize.bind(this);
          window.addEventListener('resize', this.documentResizeListener);
        }
      }, {
        key: "unbindDocumentResizeListener",
        value: function unbindDocumentResizeListener() {
          if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
          }
        }
      }, {
        key: "onWindowResize",
        value: function onWindowResize() {
          if (!primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].isAndroid()) {
            this.hide(event);
          }
        }
      }, {
        key: "updateFilledState",
        value: function updateFilledState() {
          this.filled = this.selectedOption != null;
        }
      }, {
        key: "clear",
        value: function clear(event) {
          this.value = null;
          this.onModelChange(this.value);
          this.onChange.emit({
            originalEvent: event,
            value: this.value
          });
          this.updateSelectedOption(this.value);
          this.updateEditableLabel();
          this.updateFilledState();
        }
      }, {
        key: "onOverlayHide",
        value: function onOverlayHide() {
          this.unbindDocumentClickListener();
          this.unbindDocumentResizeListener();
          this.overlay = null;
          this.itemsWrapper = null;
          this.onModelTouched();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.restoreOverlayAppend();
          this.onOverlayHide();
        }
      }]);
    }();
    Dropdown.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "scrollHeight", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "filter", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "name", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "style", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "panelStyle", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "styleClass", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "panelStyleClass", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "readonly", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "required", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "editable", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "appendTo", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "tabindex", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "placeholder", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "filterPlaceholder", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "filterLocale", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "inputId", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "selectId", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "dataKey", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "filterBy", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "autofocus", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "resetFilterOnHide", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "dropdownIcon", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "optionLabel", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "autoDisplayFirst", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "group", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "showClear", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "emptyFilterMessage", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "virtualScroll", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "itemSize", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "autoZIndex", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "baseZIndex", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "showTransitionOptions", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "hideTransitionOptions", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "ariaFilterLabel", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "ariaLabelledBy", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "filterMatchMode", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "maxlength", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "tooltip", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "tooltipPosition", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "tooltipPositionStyle", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "tooltipStyleClass", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "autofocusFilter", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Dropdown.prototype, "onChange", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Dropdown.prototype, "onFocus", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Dropdown.prototype, "onBlur", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Dropdown.prototype, "onClick", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Dropdown.prototype, "onShow", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Dropdown.prototype, "onHide", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container')], Dropdown.prototype, "containerViewChild", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('filter')], Dropdown.prototype, "filterViewChild", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('in')], Dropdown.prototype, "accessibleViewChild", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualScrollViewport"])], Dropdown.prototype, "viewPort", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editableInput')], Dropdown.prototype, "editableInputViewChild", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"])], Dropdown.prototype, "templates", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "disabled", null);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "options", null);
    Dropdown = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-dropdown',
      template: "\n         <div #container [ngClass]=\"{'ui-dropdown ui-widget ui-state-default ui-corner-all':true,\n            'ui-state-disabled':disabled, 'ui-dropdown-open':overlayVisible, 'ui-state-focus':focused, 'ui-dropdown-clearable': showClear && !disabled}\"\n            (click)=\"onMouseclick($event)\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #in [attr.id]=\"inputId\" type=\"text\" [attr.aria-label]=\"selectedOption ? selectedOption.label : ' '\" readonly (focus)=\"onInputFocus($event)\" aria-haspopup=\"listbox\"\n                    aria-haspopup=\"listbox\" [attr.aria-expanded]=\"overlayVisible\" [attr.aria-labelledby]=\"ariaLabelledBy\" (blur)=\"onInputBlur($event)\" (keydown)=\"onKeydown($event, true)\"\n                    [disabled]=\"disabled\" [attr.tabindex]=\"tabindex\" [attr.autofocus]=\"autofocus\" role=\"listbox\">\n            </div>\n            <div class=\"ui-dropdown-label-container\" [pTooltip]=\"tooltip\" [tooltipPosition]=\"tooltipPosition\" [positionStyle]=\"tooltipPositionStyle\" [tooltipStyleClass]=\"tooltipStyleClass\">\n                <span [ngClass]=\"{'ui-dropdown-label ui-inputtext ui-corner-all':true,'ui-dropdown-label-empty':(label == null || label.length === 0)}\" *ngIf=\"!editable && (label != null)\">\n                    <ng-container *ngIf=\"!selectedItemTemplate\">{{label||'empty'}}</ng-container>\n                    <ng-container *ngTemplateOutlet=\"selectedItemTemplate; context: {$implicit: selectedOption}\"></ng-container>\n                </span>\n                <span [ngClass]=\"{'ui-dropdown-label ui-inputtext ui-corner-all ui-placeholder':true,'ui-dropdown-label-empty': (placeholder == null || placeholder.length === 0)}\" *ngIf=\"!editable && (label == null)\">{{placeholder||'empty'}}</span>\n                <input #editableInput type=\"text\" [attr.maxlength]=\"maxlength\" [attr.aria-label]=\"selectedOption ? selectedOption.label : ' '\" class=\"ui-dropdown-label ui-inputtext ui-corner-all\" *ngIf=\"editable\" [disabled]=\"disabled\" [attr.placeholder]=\"placeholder\"\n                    aria-haspopup=\"listbox\" [attr.aria-expanded]=\"overlayVisible\" (click)=\"onEditableInputClick()\" (input)=\"onEditableInputChange($event)\" (focus)=\"onEditableInputFocus($event)\" (blur)=\"onInputBlur($event)\">\n                <i class=\"ui-dropdown-clear-icon pi pi-times\" (click)=\"clear($event)\" *ngIf=\"value != null && showClear && !disabled\"></i>\n            </div>\n            <div class=\"ui-dropdown-trigger ui-state-default ui-corner-right\" role=\"button\" aria-haspopup=\"listbox\" [attr.aria-expanded]=\"overlayVisible\">\n                <span class=\"ui-dropdown-trigger-icon ui-clickable\" [ngClass]=\"dropdownIcon\"></span>\n            </div>\n            <div *ngIf=\"overlayVisible\" [ngClass]=\"'ui-dropdown-panel  ui-widget ui-widget-content ui-corner-all ui-shadow'\" [@overlayAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\" [ngStyle]=\"panelStyle\" [class]=\"panelStyleClass\">\n                <div *ngIf=\"filter\" class=\"ui-dropdown-filter-container\" (click)=\"$event.stopPropagation()\">\n                    <input #filter type=\"text\" autocomplete=\"off\" [value]=\"filterValue||''\" class=\"ui-dropdown-filter ui-inputtext ui-widget ui-state-default ui-corner-all\" [attr.placeholder]=\"filterPlaceholder\"\n                    (keydown.enter)=\"$event.preventDefault()\" (keydown)=\"onKeydown($event, false)\" (input)=\"onFilter($event)\" [attr.aria-label]=\"ariaFilterLabel\">\n                    <span class=\"ui-dropdown-filter-icon pi pi-search\"></span>\n                </div>\n                <div class=\"ui-dropdown-items-wrapper\" [style.max-height]=\"virtualScroll ? 'auto' : (scrollHeight||'auto')\">\n                    <ul class=\"ui-dropdown-items ui-dropdown-list ui-widget-content ui-widget ui-corner-all ui-helper-reset\" role=\"listbox\">\n                        <ng-container *ngIf=\"group\">\n                            <ng-template ngFor let-optgroup [ngForOf]=\"optionsToDisplay\">\n                                <li class=\"ui-dropdown-item-group\">\n                                    <span *ngIf=\"!groupTemplate\">{{optgroup.label||'empty'}}</span>\n                                    <ng-container *ngTemplateOutlet=\"groupTemplate; context: {$implicit: optgroup}\"></ng-container>\n                                </li>\n                                <ng-container *ngTemplateOutlet=\"itemslist; context: {$implicit: optgroup.items, selectedOption: selectedOption}\"></ng-container>\n                            </ng-template>\n                        </ng-container>\n                        <ng-container *ngIf=\"!group\">\n                            <ng-container *ngTemplateOutlet=\"itemslist; context: {$implicit: optionsToDisplay, selectedOption: selectedOption}\"></ng-container>\n                        </ng-container>\n                        <ng-template #itemslist let-options let-selectedOption=\"selectedOption\">\n\n                            <ng-container *ngIf=\"!virtualScroll; else virtualScrollList\">\n                                <ng-template ngFor let-option let-i=\"index\" [ngForOf]=\"options\">\n                                    <p-dropdownItem [option]=\"option\" [selected]=\"selectedOption == option\"\n                                                    (onClick)=\"onItemClick($event)\"\n                                                    [template]=\"itemTemplate\"></p-dropdownItem>\n                                </ng-template>\n                            </ng-container>\n                            <ng-template #virtualScrollList>\n                                <cdk-virtual-scroll-viewport (scrolledIndexChange)=\"scrollToSelectedVirtualScrollElement()\" #viewport [ngStyle]=\"{'height': scrollHeight}\" [itemSize]=\"itemSize\" *ngIf=\"virtualScroll && optionsToDisplay && optionsToDisplay.length\">\n                                    <ng-container *cdkVirtualFor=\"let option of options; let i = index; let c = count; let f = first; let l = last; let e = even; let o = odd\">\n                                        <p-dropdownItem [option]=\"option\" [selected]=\"selectedOption == option\"\n                                                                   (onClick)=\"onItemClick($event)\"\n                                                                   [template]=\"itemTemplate\"></p-dropdownItem>\n                                    </ng-container>\n                                </cdk-virtual-scroll-viewport>\n                            </ng-template>\n                        </ng-template>\n                        <li *ngIf=\"filter && (!optionsToDisplay || (optionsToDisplay && optionsToDisplay.length === 0))\" class=\"ui-dropdown-empty-message\">{{emptyFilterMessage}}</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    ",
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('overlayAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(5%)',
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(0)',
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{showTransitionParams}}')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{hideTransitionParams}}'))])],
      host: {
        '[class.ui-inputwrapper-filled]': 'filled',
        '[class.ui-inputwrapper-focus]': 'focused'
      },
      providers: [DROPDOWN_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    })], Dropdown);
    var DropdownModule = /*#__PURE__*/_createClass(function DropdownModule() {
      _classCallCheck(this, DropdownModule);
    });
    DropdownModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"]],
      exports: [Dropdown, primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]],
      declarations: [Dropdown, DropdownItem]
    })], DropdownModule);

    /**
     * Generated bundle index. Do not edit.
     */

    //# sourceMappingURL=primeng-dropdown.js.map

    /***/
  }),
  /***/"./node_modules/primeng/fesm2015/primeng-paginator.js": (
  /*!************************************************************!*\
    !*** ./node_modules/primeng/fesm2015/primeng-paginator.js ***!
    \************************************************************/
  /*! exports provided: Paginator, PaginatorModule */
  /***/
  function _node_modules_primeng_fesm2015_primengPaginatorJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Paginator", function () {
      return Paginator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PaginatorModule", function () {
      return PaginatorModule;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */"./node_modules/primeng/fesm2015/primeng-dropdown.js");
    /* harmony import */
    var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */"./node_modules/primeng/fesm2015/primeng-api.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var Paginator = /*#__PURE__*/function () {
      function Paginator(cd) {
        _classCallCheck(this, Paginator);
        this.cd = cd;
        this.pageLinkSize = 5;
        this.onPageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.alwaysShow = true;
        this.dropdownScrollHeight = '200px';
        this.currentPageReportTemplate = '{currentPage} of {totalPages}';
        this.totalRecords = 0;
        this.rows = 0;
        this._first = 0;
      }
      return _createClass(Paginator, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updatePaginatorState();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(simpleChange) {
          if (simpleChange.totalRecords) {
            this.updatePageLinks();
            this.updatePaginatorState();
            this.updateFirst();
            this.updateRowsPerPageOptions();
          }
          if (simpleChange.first) {
            this._first = simpleChange.first.currentValue;
            this.updatePageLinks();
            this.updatePaginatorState();
          }
          if (simpleChange.rows) {
            this.updatePageLinks();
            this.updatePaginatorState();
          }
          if (simpleChange.rowsPerPageOptions) {
            this.updateRowsPerPageOptions();
          }
        }
      }, {
        key: "first",
        get: function get() {
          return this._first;
        },
        set: function set(val) {
          this._first = val;
        }
      }, {
        key: "updateRowsPerPageOptions",
        value: function updateRowsPerPageOptions() {
          if (this.rowsPerPageOptions) {
            this.rowsPerPageItems = [];
            var _iterator3 = _createForOfIteratorHelper(this.rowsPerPageOptions),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var opt = _step3.value;
                if (typeof opt == 'object' && opt['showAll']) {
                  this.rowsPerPageItems.unshift({
                    label: opt['showAll'],
                    value: this.totalRecords
                  });
                } else {
                  this.rowsPerPageItems.push({
                    label: String(opt),
                    value: opt
                  });
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }
      }, {
        key: "isFirstPage",
        value: function isFirstPage() {
          return this.getPage() === 0;
        }
      }, {
        key: "isLastPage",
        value: function isLastPage() {
          return this.getPage() === this.getPageCount() - 1;
        }
      }, {
        key: "getPageCount",
        value: function getPageCount() {
          return Math.ceil(this.totalRecords / this.rows) || 1;
        }
      }, {
        key: "calculatePageLinkBoundaries",
        value: function calculatePageLinkBoundaries() {
          var numberOfPages = this.getPageCount(),
            visiblePages = Math.min(this.pageLinkSize, numberOfPages);
          //calculate range, keep current in middle if necessary
          var start = Math.max(0, Math.ceil(this.getPage() - visiblePages / 2)),
            end = Math.min(numberOfPages - 1, start + visiblePages - 1);
          //check when approaching to last page
          var delta = this.pageLinkSize - (end - start + 1);
          start = Math.max(0, start - delta);
          return [start, end];
        }
      }, {
        key: "updatePageLinks",
        value: function updatePageLinks() {
          this.pageLinks = [];
          var boundaries = this.calculatePageLinkBoundaries(),
            start = boundaries[0],
            end = boundaries[1];
          for (var i = start; i <= end; i++) {
            this.pageLinks.push(i + 1);
          }
        }
      }, {
        key: "changePage",
        value: function changePage(p) {
          var pc = this.getPageCount();
          if (p >= 0 && p < pc) {
            this._first = this.rows * p;
            var state = {
              page: p,
              first: this.first,
              rows: this.rows,
              pageCount: pc
            };
            this.updatePageLinks();
            this.onPageChange.emit(state);
            this.updatePaginatorState();
          }
        }
      }, {
        key: "updateFirst",
        value: function updateFirst() {
          var _this7 = this;
          var page = this.getPage();
          if (page > 0 && this.totalRecords && this.first >= this.totalRecords) {
            Promise.resolve(null).then(function () {
              return _this7.changePage(page - 1);
            });
          }
        }
      }, {
        key: "getPage",
        value: function getPage() {
          return Math.floor(this.first / this.rows);
        }
      }, {
        key: "changePageToFirst",
        value: function changePageToFirst(event) {
          if (!this.isFirstPage()) {
            this.changePage(0);
          }
          event.preventDefault();
        }
      }, {
        key: "changePageToPrev",
        value: function changePageToPrev(event) {
          this.changePage(this.getPage() - 1);
          event.preventDefault();
        }
      }, {
        key: "changePageToNext",
        value: function changePageToNext(event) {
          this.changePage(this.getPage() + 1);
          event.preventDefault();
        }
      }, {
        key: "changePageToLast",
        value: function changePageToLast(event) {
          if (!this.isLastPage()) {
            this.changePage(this.getPageCount() - 1);
          }
          event.preventDefault();
        }
      }, {
        key: "onPageLinkClick",
        value: function onPageLinkClick(event, page) {
          this.changePage(page);
          event.preventDefault();
        }
      }, {
        key: "onRppChange",
        value: function onRppChange(event) {
          this.changePage(this.getPage());
        }
      }, {
        key: "updatePaginatorState",
        value: function updatePaginatorState() {
          this.paginatorState = {
            page: this.getPage(),
            pageCount: this.getPageCount(),
            rows: this.rows,
            first: this.first,
            totalRecords: this.totalRecords
          };
        }
      }, {
        key: "currentPageReport",
        get: function get() {
          return this.currentPageReportTemplate.replace("{currentPage}", String(this.getPage() + 1)).replace("{totalPages}", String(this.getPageCount())).replace("{first}", String(this._first + 1)).replace("{last}", String(Math.min(this._first + this.rows, this.totalRecords))).replace("{rows}", String(this.rows)).replace("{totalRecords}", String(this.totalRecords));
        }
      }]);
    }();
    Paginator.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Paginator.prototype, "pageLinkSize", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Paginator.prototype, "onPageChange", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Paginator.prototype, "style", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Paginator.prototype, "styleClass", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Paginator.prototype, "alwaysShow", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Paginator.prototype, "templateLeft", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Paginator.prototype, "templateRight", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Paginator.prototype, "dropdownAppendTo", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Paginator.prototype, "dropdownScrollHeight", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Paginator.prototype, "currentPageReportTemplate", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Paginator.prototype, "showCurrentPageReport", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Paginator.prototype, "totalRecords", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Paginator.prototype, "rows", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Paginator.prototype, "rowsPerPageOptions", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Paginator.prototype, "first", null);
    Paginator = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'p-paginator',
      template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\" [ngClass]=\"'ui-paginator ui-widget ui-widget-header ui-unselectable-text ui-helper-clearfix'\"\n            *ngIf=\"alwaysShow ? true : (pageLinks && pageLinks.length > 1)\">\n            <div class=\"ui-paginator-left-content\" *ngIf=\"templateLeft\">\n                <ng-container *ngTemplateOutlet=\"templateLeft; context: {$implicit: paginatorState}\"></ng-container>\n            </div>\n            <span class=\"ui-paginator-current\" *ngIf=\"showCurrentPageReport\">{{currentPageReport}}</span>\n            <a [attr.tabindex]=\"isFirstPage() ? null : '0'\" class=\"ui-paginator-first ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"changePageToFirst($event)\" (keydown.enter)=\"changePageToFirst($event)\" [ngClass]=\"{'ui-state-disabled':isFirstPage()}\" [tabindex]=\"isFirstPage() ? -1 : null\">\n                <span class=\"ui-paginator-icon pi pi-step-backward\"></span>\n            </a>\n            <a tabindex=\"0\" [attr.tabindex]=\"isFirstPage() ? null : '0'\" class=\"ui-paginator-prev ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"changePageToPrev($event)\" (keydown.enter)=\"changePageToPrev($event)\" [ngClass]=\"{'ui-state-disabled':isFirstPage()}\" [tabindex]=\"isFirstPage() ? -1 : null\">\n                <span class=\"ui-paginator-icon pi pi-caret-left\"></span>\n            </a>\n            <span class=\"ui-paginator-pages\">\n                <a tabindex=\"0\" *ngFor=\"let pageLink of pageLinks\" class=\"ui-paginator-page ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"onPageLinkClick($event, pageLink - 1)\" (keydown.enter)=\"onPageLinkClick($event, pageLink - 1)\" [ngClass]=\"{'ui-state-active': (pageLink-1 == getPage())}\">{{pageLink}}</a>\n            </span>\n            <a [attr.tabindex]=\"isLastPage() ? null : '0'\" class=\"ui-paginator-next ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"changePageToNext($event)\" (keydown.enter)=\"changePageToNext($event)\" [ngClass]=\"{'ui-state-disabled':isLastPage()}\" [tabindex]=\"isLastPage() ? -1 : null\">\n                <span class=\"ui-paginator-icon pi pi-caret-right\"></span>\n            </a>\n            <a [attr.tabindex]=\"isLastPage() ? null : '0'\" class=\"ui-paginator-last ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"changePageToLast($event)\" (keydown.enter)=\"changePageToLast($event)\" [ngClass]=\"{'ui-state-disabled':isLastPage()}\" [tabindex]=\"isLastPage() ? -1 : null\">\n                <span class=\"ui-paginator-icon pi pi-step-forward\"></span>\n            </a>\n            <p-dropdown [options]=\"rowsPerPageItems\" [(ngModel)]=\"rows\" *ngIf=\"rowsPerPageOptions\" \n                (onChange)=\"onRppChange($event)\" [appendTo]=\"dropdownAppendTo\" [scrollHeight]=\"dropdownScrollHeight\"></p-dropdown>\n            <div class=\"ui-paginator-right-content\" *ngIf=\"templateRight\">\n                <ng-container *ngTemplateOutlet=\"templateRight; context: {$implicit: paginatorState}\"></ng-container>\n            </div>\n        </div>\n    ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
    })], Paginator);
    var PaginatorModule = /*#__PURE__*/_createClass(function PaginatorModule() {
      _classCallCheck(this, PaginatorModule);
    });
    PaginatorModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
      exports: [Paginator, primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
      declarations: [Paginator]
    })], PaginatorModule);

    /**
     * Generated bundle index. Do not edit.
     */

    //# sourceMappingURL=primeng-paginator.js.map

    /***/
  }),
  /***/"./node_modules/primeng/fesm2015/primeng-table.js": (
  /*!********************************************************!*\
    !*** ./node_modules/primeng/fesm2015/primeng-table.js ***!
    \********************************************************/
  /*! exports provided: CancelEditableRow, CellEditor, ContextMenuRow, EditableColumn, EditableRow, InitEditableRow, ReorderableColumn, ReorderableRow, ReorderableRowHandle, ResizableColumn, RowToggler, SaveEditableRow, ScrollableView, SelectableRow, SelectableRowDblClick, SortIcon, SortableColumn, Table, TableBody, TableCheckbox, TableHeaderCheckbox, TableModule, TableRadioButton, TableService */
  /***/
  function _node_modules_primeng_fesm2015_primengTableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CancelEditableRow", function () {
      return CancelEditableRow;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CellEditor", function () {
      return CellEditor;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ContextMenuRow", function () {
      return ContextMenuRow;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "EditableColumn", function () {
      return EditableColumn;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "EditableRow", function () {
      return EditableRow;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "InitEditableRow", function () {
      return InitEditableRow;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ReorderableColumn", function () {
      return ReorderableColumn;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ReorderableRow", function () {
      return ReorderableRow;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ReorderableRowHandle", function () {
      return ReorderableRowHandle;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ResizableColumn", function () {
      return ResizableColumn;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RowToggler", function () {
      return RowToggler;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SaveEditableRow", function () {
      return SaveEditableRow;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ScrollableView", function () {
      return ScrollableView;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SelectableRow", function () {
      return SelectableRow;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SelectableRowDblClick", function () {
      return SelectableRowDblClick;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SortIcon", function () {
      return SortIcon;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SortableColumn", function () {
      return SortableColumn;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Table", function () {
      return Table;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TableBody", function () {
      return TableBody;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TableCheckbox", function () {
      return TableCheckbox;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TableHeaderCheckbox", function () {
      return TableHeaderCheckbox;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TableModule", function () {
      return TableModule;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TableRadioButton", function () {
      return TableRadioButton;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TableService", function () {
      return TableService;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */"./node_modules/primeng/fesm2015/primeng-api.js");
    /* harmony import */
    var primeng_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/paginator */"./node_modules/primeng/fesm2015/primeng-paginator.js");
    /* harmony import */
    var primeng_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dom */"./node_modules/primeng/fesm2015/primeng-dom.js");
    /* harmony import */
    var primeng_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/utils */"./node_modules/primeng/fesm2015/primeng-utils.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */"./node_modules/@angular/cdk/esm2015/scrolling.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };
    var TableService = /*#__PURE__*/function () {
      function TableService() {
        _classCallCheck(this, TableService);
        this.sortSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.selectionSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.contextMenuSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.valueSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.totalRecordsSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.columnsSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.sortSource$ = this.sortSource.asObservable();
        this.selectionSource$ = this.selectionSource.asObservable();
        this.contextMenuSource$ = this.contextMenuSource.asObservable();
        this.valueSource$ = this.valueSource.asObservable();
        this.totalRecordsSource$ = this.totalRecordsSource.asObservable();
        this.columnsSource$ = this.columnsSource.asObservable();
      }
      return _createClass(TableService, [{
        key: "onSort",
        value: function onSort(sortMeta) {
          this.sortSource.next(sortMeta);
        }
      }, {
        key: "onSelectionChange",
        value: function onSelectionChange() {
          this.selectionSource.next();
        }
      }, {
        key: "onContextMenu",
        value: function onContextMenu(data) {
          this.contextMenuSource.next(data);
        }
      }, {
        key: "onValueChange",
        value: function onValueChange(value) {
          this.valueSource.next(value);
        }
      }, {
        key: "onTotalRecordsChange",
        value: function onTotalRecordsChange(value) {
          this.totalRecordsSource.next(value);
        }
      }, {
        key: "onColumnsChange",
        value: function onColumnsChange(columns) {
          this.columnsSource.next(columns);
        }
      }]);
    }();
    TableService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], TableService);
    var Table = /*#__PURE__*/function () {
      function Table(el, zone, tableService, cd) {
        _classCallCheck(this, Table);
        this.el = el;
        this.zone = zone;
        this.tableService = tableService;
        this.cd = cd;
        this.pageLinks = 5;
        this.alwaysShowPaginator = true;
        this.paginatorPosition = 'bottom';
        this.paginatorDropdownScrollHeight = '200px';
        this.currentPageReportTemplate = '{currentPage} of {totalPages}';
        this.defaultSortOrder = 1;
        this.sortMode = 'single';
        this.resetPageOnSort = true;
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contextMenuSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contextMenuSelectionMode = "separate";
        this.rowTrackBy = function (index, item) {
          return item;
        };
        this.lazy = false;
        this.lazyLoadOnInit = true;
        this.compareSelectionBy = 'deepEquals';
        this.csvSeparator = ',';
        this.exportFilename = 'download';
        this.filters = {};
        this.filterDelay = 300;
        this.expandedRowKeys = {};
        this.editingRowKeys = {};
        this.rowExpandMode = 'multiple';
        this.virtualScrollDelay = 150;
        this.virtualRowHeight = 28;
        this.columnResizeMode = 'fit';
        this.loadingIcon = 'pi pi-spinner';
        this.showLoader = true;
        this.stateStorage = 'session';
        this.editMode = 'cell';
        this.onRowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRowUnselect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRowExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRowCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onContextMenuSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onColResize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onColReorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRowReorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onEditInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onEditComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onEditCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHeaderCheckboxToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sortFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.firstChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rowsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onStateSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onStateRestore = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._value = [];
        this._totalRecords = 0;
        this._first = 0;
        this.selectionKeys = {};
        this._sortOrder = 1;
      }
      return _createClass(Table, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.lazy && this.lazyLoadOnInit) {
            if (!this.virtualScroll) {
              this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }
            if (this.restoringFilter) {
              this.restoringFilter = false;
            }
          }
          this.initialized = true;
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this8 = this;
          this.templates.forEach(function (item) {
            switch (item.getType()) {
              case 'caption':
                _this8.captionTemplate = item.template;
                break;
              case 'header':
                _this8.headerTemplate = item.template;
                break;
              case 'body':
                _this8.bodyTemplate = item.template;
                break;
              case 'loadingbody':
                _this8.loadingBodyTemplate = item.template;
                break;
              case 'footer':
                _this8.footerTemplate = item.template;
                break;
              case 'summary':
                _this8.summaryTemplate = item.template;
                break;
              case 'colgroup':
                _this8.colGroupTemplate = item.template;
                break;
              case 'rowexpansion':
                _this8.expandedRowTemplate = item.template;
                break;
              case 'frozenrows':
                _this8.frozenRowsTemplate = item.template;
                break;
              case 'frozenheader':
                _this8.frozenHeaderTemplate = item.template;
                break;
              case 'frozenbody':
                _this8.frozenBodyTemplate = item.template;
                break;
              case 'frozenfooter':
                _this8.frozenFooterTemplate = item.template;
                break;
              case 'frozencolgroup':
                _this8.frozenColGroupTemplate = item.template;
                break;
              case 'emptymessage':
                _this8.emptyMessageTemplate = item.template;
                break;
              case 'paginatorleft':
                _this8.paginatorLeftTemplate = item.template;
                break;
              case 'paginatorright':
                _this8.paginatorRightTemplate = item.template;
                break;
            }
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.isStateful() && this.resizableColumns) {
            this.restoreColumnWidths();
          }
        }
      }, {
        key: "clearCache",
        value: function clearCache() {
          if (this.scrollable) {
            if (this.scrollableViewChild) {
              this.scrollableViewChild.clearCache();
            }
            if (this.scrollableFrozenViewChild) {
              this.scrollableViewChild.clearCache();
            }
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(simpleChange) {
          if (simpleChange.value) {
            if (this.isStateful() && !this.stateRestored) {
              this.restoreState();
            }
            this._value = simpleChange.value.currentValue;
            if (!this.lazy) {
              this.clearCache();
              this.totalRecords = this._value ? this._value.length : 0;
              if (this.sortMode == 'single' && this.sortField) this.sortSingle();else if (this.sortMode == 'multiple' && this.multiSortMeta) this.sortMultiple();else if (this.hasFilter())
                //sort already filters
                this._filter();
            }
            this.tableService.onValueChange(simpleChange.value.currentValue);
          }
          if (simpleChange.columns) {
            this._columns = simpleChange.columns.currentValue;
            this.tableService.onColumnsChange(simpleChange.columns.currentValue);
            if (this._columns && this.isStateful() && this.reorderableColumns && !this.columnOrderStateRestored) {
              this.restoreColumnOrder();
            }
          }
          if (simpleChange.sortField) {
            this._sortField = simpleChange.sortField.currentValue;
            //avoid triggering lazy load prior to lazy initialization at onInit
            if (!this.lazy || this.initialized) {
              if (this.sortMode === 'single') {
                this.sortSingle();
              }
            }
          }
          if (simpleChange.sortOrder) {
            this._sortOrder = simpleChange.sortOrder.currentValue;
            //avoid triggering lazy load prior to lazy initialization at onInit
            if (!this.lazy || this.initialized) {
              if (this.sortMode === 'single') {
                this.sortSingle();
              }
            }
          }
          if (simpleChange.multiSortMeta) {
            this._multiSortMeta = simpleChange.multiSortMeta.currentValue;
            if (this.sortMode === 'multiple') {
              this.sortMultiple();
            }
          }
          if (simpleChange.selection) {
            this._selection = simpleChange.selection.currentValue;
            if (!this.preventSelectionSetterPropagation) {
              this.updateSelectionKeys();
              this.tableService.onSelectionChange();
            }
            this.preventSelectionSetterPropagation = false;
          }
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        },
        set: function set(val) {
          this._value = val;
        }
      }, {
        key: "columns",
        get: function get() {
          return this._columns;
        },
        set: function set(cols) {
          this._columns = cols;
        }
      }, {
        key: "first",
        get: function get() {
          return this._first;
        },
        set: function set(val) {
          this._first = val;
        }
      }, {
        key: "rows",
        get: function get() {
          return this._rows;
        },
        set: function set(val) {
          this._rows = val;
        }
      }, {
        key: "totalRecords",
        get: function get() {
          return this._totalRecords;
        },
        set: function set(val) {
          this._totalRecords = val;
          this.tableService.onTotalRecordsChange(this._totalRecords);
        }
      }, {
        key: "sortField",
        get: function get() {
          return this._sortField;
        },
        set: function set(val) {
          this._sortField = val;
        }
      }, {
        key: "sortOrder",
        get: function get() {
          return this._sortOrder;
        },
        set: function set(val) {
          this._sortOrder = val;
        }
      }, {
        key: "multiSortMeta",
        get: function get() {
          return this._multiSortMeta;
        },
        set: function set(val) {
          this._multiSortMeta = val;
        }
      }, {
        key: "selection",
        get: function get() {
          return this._selection;
        },
        set: function set(val) {
          this._selection = val;
        }
      }, {
        key: "updateSelectionKeys",
        value: function updateSelectionKeys() {
          if (this.dataKey && this._selection) {
            this.selectionKeys = {};
            if (Array.isArray(this._selection)) {
              var _iterator4 = _createForOfIteratorHelper(this._selection),
                _step4;
              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var data = _step4.value;
                  this.selectionKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(data, this.dataKey))] = 1;
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            } else {
              this.selectionKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(this._selection, this.dataKey))] = 1;
            }
          }
        }
      }, {
        key: "onPageChange",
        value: function onPageChange(event) {
          this.first = event.first;
          this.rows = event.rows;
          if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
          }
          this.onPage.emit({
            first: this.first,
            rows: this.rows
          });
          this.firstChange.emit(this.first);
          this.rowsChange.emit(this.rows);
          this.tableService.onValueChange(this.value);
          if (this.isStateful()) {
            this.saveState();
          }
          this.anchorRowIndex = null;
          if (this.scrollable) {
            this.resetScrollTop();
          }
        }
      }, {
        key: "sort",
        value: function sort(event) {
          var originalEvent = event.originalEvent;
          if (this.sortMode === 'single') {
            this._sortOrder = this.sortField === event.field ? this.sortOrder * -1 : this.defaultSortOrder;
            this._sortField = event.field;
            this.sortSingle();
            if (this.resetPageOnSort) {
              this._first = 0;
              this.firstChange.emit(this._first);
              if (this.scrollable) {
                this.resetScrollTop();
              }
            }
          }
          if (this.sortMode === 'multiple') {
            var metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
            var sortMeta = this.getSortMeta(event.field);
            if (sortMeta) {
              if (!metaKey) {
                this._multiSortMeta = [{
                  field: event.field,
                  order: sortMeta.order * -1
                }];
                if (this.resetPageOnSort) {
                  this._first = 0;
                  this.firstChange.emit(this._first);
                  if (this.scrollable) {
                    this.resetScrollTop();
                  }
                }
              } else {
                sortMeta.order = sortMeta.order * -1;
              }
            } else {
              if (!metaKey || !this.multiSortMeta) {
                this._multiSortMeta = [];
                if (this.resetPageOnSort) {
                  this._first = 0;
                  this.firstChange.emit(this._first);
                }
              }
              this._multiSortMeta.push({
                field: event.field,
                order: this.defaultSortOrder
              });
            }
            this.sortMultiple();
          }
          if (this.isStateful()) {
            this.saveState();
          }
          this.anchorRowIndex = null;
        }
      }, {
        key: "sortSingle",
        value: function sortSingle() {
          var _this9 = this;
          if (this.sortField && this.sortOrder) {
            if (this.restoringSort) {
              this.restoringSort = false;
            }
            if (this.lazy) {
              this.onLazyLoad.emit(this.createLazyLoadMetadata());
            } else if (this.value) {
              if (this.customSort) {
                this.sortFunction.emit({
                  data: this.value,
                  mode: this.sortMode,
                  field: this.sortField,
                  order: this.sortOrder
                });
              } else {
                this.value.sort(function (data1, data2) {
                  var value1 = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(data1, _this9.sortField);
                  var value2 = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(data2, _this9.sortField);
                  var result = null;
                  if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
                  return _this9.sortOrder * result;
                });
              }
              if (this.hasFilter()) {
                this._filter();
              }
            }
            var sortMeta = {
              field: this.sortField,
              order: this.sortOrder
            };
            this.onSort.emit(sortMeta);
            this.tableService.onSort(sortMeta);
          }
        }
      }, {
        key: "sortMultiple",
        value: function sortMultiple() {
          var _this0 = this;
          if (this.multiSortMeta) {
            if (this.lazy) {
              this.onLazyLoad.emit(this.createLazyLoadMetadata());
            } else if (this.value) {
              if (this.customSort) {
                this.sortFunction.emit({
                  data: this.value,
                  mode: this.sortMode,
                  multiSortMeta: this.multiSortMeta
                });
              } else {
                this.value.sort(function (data1, data2) {
                  return _this0.multisortField(data1, data2, _this0.multiSortMeta, 0);
                });
              }
              if (this.hasFilter()) {
                this._filter();
              }
            }
            this.onSort.emit({
              multisortmeta: this.multiSortMeta
            });
            this.tableService.onSort(this.multiSortMeta);
          }
        }
      }, {
        key: "multisortField",
        value: function multisortField(data1, data2, multiSortMeta, index) {
          var value1 = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(data1, multiSortMeta[index].field);
          var value2 = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(data2, multiSortMeta[index].field);
          var result = null;
          if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 == 'string' || value1 instanceof String) {
            if (value1.localeCompare && value1 != value2) {
              return multiSortMeta[index].order * value1.localeCompare(value2);
            }
          } else {
            result = value1 < value2 ? -1 : 1;
          }
          if (value1 == value2) {
            return multiSortMeta.length - 1 > index ? this.multisortField(data1, data2, multiSortMeta, index + 1) : 0;
          }
          return multiSortMeta[index].order * result;
        }
      }, {
        key: "getSortMeta",
        value: function getSortMeta(field) {
          if (this.multiSortMeta && this.multiSortMeta.length) {
            for (var i = 0; i < this.multiSortMeta.length; i++) {
              if (this.multiSortMeta[i].field === field) {
                return this.multiSortMeta[i];
              }
            }
          }
          return null;
        }
      }, {
        key: "isSorted",
        value: function isSorted(field) {
          if (this.sortMode === 'single') {
            return this.sortField && this.sortField === field;
          } else if (this.sortMode === 'multiple') {
            var sorted = false;
            if (this.multiSortMeta) {
              for (var i = 0; i < this.multiSortMeta.length; i++) {
                if (this.multiSortMeta[i].field == field) {
                  sorted = true;
                  break;
                }
              }
            }
            return sorted;
          }
        }
      }, {
        key: "handleRowClick",
        value: function handleRowClick(event) {
          var target = event.originalEvent.target;
          var targetNode = target.nodeName;
          var parentNode = target.parentElement && target.parentElement.nodeName;
          if (targetNode == 'INPUT' || targetNode == 'BUTTON' || targetNode == 'A' || parentNode == 'INPUT' || parentNode == 'BUTTON' || parentNode == 'A' || primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(event.originalEvent.target, 'ui-clickable')) {
            return;
          }
          if (this.selectionMode) {
            this.preventSelectionSetterPropagation = true;
            if (this.isMultipleSelectionMode() && event.originalEvent.shiftKey && this.anchorRowIndex != null) {
              primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].clearSelection();
              if (this.rangeRowIndex != null) {
                this.clearSelectionRange(event.originalEvent);
              }
              this.rangeRowIndex = event.rowIndex;
              this.selectRange(event.originalEvent, event.rowIndex);
            } else {
              var rowData = event.rowData;
              var selected = this.isSelected(rowData);
              var metaSelection = this.rowTouched ? false : this.metaKeySelection;
              var dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey)) : null;
              this.anchorRowIndex = event.rowIndex;
              this.rangeRowIndex = event.rowIndex;
              if (metaSelection) {
                var metaKey = event.originalEvent.metaKey || event.originalEvent.ctrlKey;
                if (selected && metaKey) {
                  if (this.isSingleSelectionMode()) {
                    this._selection = null;
                    this.selectionKeys = {};
                    this.selectionChange.emit(null);
                  } else {
                    var selectionIndex = this.findIndexInSelection(rowData);
                    this._selection = this.selection.filter(function (val, i) {
                      return i != selectionIndex;
                    });
                    this.selectionChange.emit(this.selection);
                    if (dataKeyValue) {
                      delete this.selectionKeys[dataKeyValue];
                    }
                  }
                  this.onRowUnselect.emit({
                    originalEvent: event.originalEvent,
                    data: rowData,
                    type: 'row'
                  });
                } else {
                  if (this.isSingleSelectionMode()) {
                    this._selection = rowData;
                    this.selectionChange.emit(rowData);
                    if (dataKeyValue) {
                      this.selectionKeys = {};
                      this.selectionKeys[dataKeyValue] = 1;
                    }
                  } else if (this.isMultipleSelectionMode()) {
                    if (metaKey) {
                      this._selection = this.selection || [];
                    } else {
                      this._selection = [];
                      this.selectionKeys = {};
                    }
                    this._selection = [].concat(_toConsumableArray(this.selection), [rowData]);
                    this.selectionChange.emit(this.selection);
                    if (dataKeyValue) {
                      this.selectionKeys[dataKeyValue] = 1;
                    }
                  }
                  this.onRowSelect.emit({
                    originalEvent: event.originalEvent,
                    data: rowData,
                    type: 'row',
                    index: event.rowIndex
                  });
                }
              } else {
                if (this.selectionMode === 'single') {
                  if (selected) {
                    this._selection = null;
                    this.selectionKeys = {};
                    this.selectionChange.emit(this.selection);
                    this.onRowUnselect.emit({
                      originalEvent: event.originalEvent,
                      data: rowData,
                      type: 'row'
                    });
                  } else {
                    this._selection = rowData;
                    this.selectionChange.emit(this.selection);
                    this.onRowSelect.emit({
                      originalEvent: event.originalEvent,
                      data: rowData,
                      type: 'row',
                      index: event.rowIndex
                    });
                    if (dataKeyValue) {
                      this.selectionKeys = {};
                      this.selectionKeys[dataKeyValue] = 1;
                    }
                  }
                } else if (this.selectionMode === 'multiple') {
                  if (selected) {
                    var _selectionIndex = this.findIndexInSelection(rowData);
                    this._selection = this.selection.filter(function (val, i) {
                      return i != _selectionIndex;
                    });
                    this.selectionChange.emit(this.selection);
                    this.onRowUnselect.emit({
                      originalEvent: event.originalEvent,
                      data: rowData,
                      type: 'row'
                    });
                    if (dataKeyValue) {
                      delete this.selectionKeys[dataKeyValue];
                    }
                  } else {
                    this._selection = this.selection ? [].concat(_toConsumableArray(this.selection), [rowData]) : [rowData];
                    this.selectionChange.emit(this.selection);
                    this.onRowSelect.emit({
                      originalEvent: event.originalEvent,
                      data: rowData,
                      type: 'row',
                      index: event.rowIndex
                    });
                    if (dataKeyValue) {
                      this.selectionKeys[dataKeyValue] = 1;
                    }
                  }
                }
              }
            }
            this.tableService.onSelectionChange();
            if (this.isStateful()) {
              this.saveState();
            }
          }
          this.rowTouched = false;
        }
      }, {
        key: "handleRowTouchEnd",
        value: function handleRowTouchEnd(event) {
          this.rowTouched = true;
        }
      }, {
        key: "handleRowRightClick",
        value: function handleRowRightClick(event) {
          if (this.contextMenu) {
            var rowData = event.rowData;
            if (this.contextMenuSelectionMode === 'separate') {
              this.contextMenuSelection = rowData;
              this.contextMenuSelectionChange.emit(rowData);
              this.onContextMenuSelect.emit({
                originalEvent: event.originalEvent,
                data: rowData,
                index: event.rowIndex
              });
              this.contextMenu.show(event.originalEvent);
              this.tableService.onContextMenu(rowData);
            } else if (this.contextMenuSelectionMode === 'joint') {
              this.preventSelectionSetterPropagation = true;
              var selected = this.isSelected(rowData);
              var dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey)) : null;
              if (!selected) {
                if (this.isSingleSelectionMode()) {
                  this.selection = rowData;
                  this.selectionChange.emit(rowData);
                } else if (this.isMultipleSelectionMode()) {
                  this.selection = [rowData];
                  this.selectionChange.emit(this.selection);
                }
                if (dataKeyValue) {
                  this.selectionKeys[dataKeyValue] = 1;
                }
              }
              this.contextMenu.show(event.originalEvent);
              this.onContextMenuSelect.emit({
                originalEvent: event,
                data: rowData,
                index: event.rowIndex
              });
            }
          }
        }
      }, {
        key: "selectRange",
        value: function selectRange(event, rowIndex) {
          var rangeStart, rangeEnd;
          if (this.anchorRowIndex > rowIndex) {
            rangeStart = rowIndex;
            rangeEnd = this.anchorRowIndex;
          } else if (this.anchorRowIndex < rowIndex) {
            rangeStart = this.anchorRowIndex;
            rangeEnd = rowIndex;
          } else {
            rangeStart = rowIndex;
            rangeEnd = rowIndex;
          }
          if (this.lazy && this.paginator) {
            rangeStart -= this.first;
            rangeEnd -= this.first;
          }
          for (var i = rangeStart; i <= rangeEnd; i++) {
            var rangeRowData = this.filteredValue ? this.filteredValue[i] : this.value[i];
            if (!this.isSelected(rangeRowData)) {
              this._selection = [].concat(_toConsumableArray(this.selection), [rangeRowData]);
              var dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rangeRowData, this.dataKey)) : null;
              if (dataKeyValue) {
                this.selectionKeys[dataKeyValue] = 1;
              }
              this.onRowSelect.emit({
                originalEvent: event,
                data: rangeRowData,
                type: 'row'
              });
            }
          }
          this.selectionChange.emit(this.selection);
        }
      }, {
        key: "clearSelectionRange",
        value: function clearSelectionRange(event) {
          var _this1 = this;
          var rangeStart, rangeEnd;
          if (this.rangeRowIndex > this.anchorRowIndex) {
            rangeStart = this.anchorRowIndex;
            rangeEnd = this.rangeRowIndex;
          } else if (this.rangeRowIndex < this.anchorRowIndex) {
            rangeStart = this.rangeRowIndex;
            rangeEnd = this.anchorRowIndex;
          } else {
            rangeStart = this.rangeRowIndex;
            rangeEnd = this.rangeRowIndex;
          }
          var _loop = function _loop() {
            var rangeRowData = _this1.value[i];
            var selectionIndex = _this1.findIndexInSelection(rangeRowData);
            _this1._selection = _this1.selection.filter(function (val, i) {
              return i != selectionIndex;
            });
            var dataKeyValue = _this1.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rangeRowData, _this1.dataKey)) : null;
            if (dataKeyValue) {
              delete _this1.selectionKeys[dataKeyValue];
            }
            _this1.onRowUnselect.emit({
              originalEvent: event,
              data: rangeRowData,
              type: 'row'
            });
          };
          for (var i = rangeStart; i <= rangeEnd; i++) {
            _loop();
          }
        }
      }, {
        key: "isSelected",
        value: function isSelected(rowData) {
          if (rowData && this.selection) {
            if (this.dataKey) {
              return this.selectionKeys[primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey)] !== undefined;
            } else {
              if (this.selection instanceof Array) return this.findIndexInSelection(rowData) > -1;else return this.equals(rowData, this.selection);
            }
          }
          return false;
        }
      }, {
        key: "findIndexInSelection",
        value: function findIndexInSelection(rowData) {
          var index = -1;
          if (this.selection && this.selection.length) {
            for (var i = 0; i < this.selection.length; i++) {
              if (this.equals(rowData, this.selection[i])) {
                index = i;
                break;
              }
            }
          }
          return index;
        }
      }, {
        key: "toggleRowWithRadio",
        value: function toggleRowWithRadio(event, rowData) {
          this.preventSelectionSetterPropagation = true;
          if (this.selection != rowData) {
            this._selection = rowData;
            this.selectionChange.emit(this.selection);
            this.onRowSelect.emit({
              originalEvent: event.originalEvent,
              index: event.rowIndex,
              data: rowData,
              type: 'radiobutton'
            });
            if (this.dataKey) {
              this.selectionKeys = {};
              this.selectionKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey))] = 1;
            }
          } else {
            this._selection = null;
            this.selectionChange.emit(this.selection);
            this.onRowUnselect.emit({
              originalEvent: event.originalEvent,
              index: event.rowIndex,
              data: rowData,
              type: 'radiobutton'
            });
          }
          this.tableService.onSelectionChange();
          if (this.isStateful()) {
            this.saveState();
          }
        }
      }, {
        key: "toggleRowWithCheckbox",
        value: function toggleRowWithCheckbox(event, rowData) {
          this.selection = this.selection || [];
          var selected = this.isSelected(rowData);
          var dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey)) : null;
          this.preventSelectionSetterPropagation = true;
          if (selected) {
            var selectionIndex = this.findIndexInSelection(rowData);
            this._selection = this.selection.filter(function (val, i) {
              return i != selectionIndex;
            });
            this.selectionChange.emit(this.selection);
            this.onRowUnselect.emit({
              originalEvent: event.originalEvent,
              index: event.rowIndex,
              data: rowData,
              type: 'checkbox'
            });
            if (dataKeyValue) {
              delete this.selectionKeys[dataKeyValue];
            }
          } else {
            this._selection = this.selection ? [].concat(_toConsumableArray(this.selection), [rowData]) : [rowData];
            this.selectionChange.emit(this.selection);
            this.onRowSelect.emit({
              originalEvent: event.originalEvent,
              index: event.rowIndex,
              data: rowData,
              type: 'checkbox'
            });
            if (dataKeyValue) {
              this.selectionKeys[dataKeyValue] = 1;
            }
          }
          this.tableService.onSelectionChange();
          if (this.isStateful()) {
            this.saveState();
          }
        }
      }, {
        key: "toggleRowsWithCheckbox",
        value: function toggleRowsWithCheckbox(event, check) {
          this._selection = check ? this.filteredValue ? this.filteredValue.slice() : this.value.slice() : [];
          this.preventSelectionSetterPropagation = true;
          this.updateSelectionKeys();
          this.selectionChange.emit(this._selection);
          this.tableService.onSelectionChange();
          this.onHeaderCheckboxToggle.emit({
            originalEvent: event,
            checked: check
          });
          if (this.isStateful()) {
            this.saveState();
          }
        }
      }, {
        key: "equals",
        value: function equals(data1, data2) {
          return this.compareSelectionBy === 'equals' ? data1 === data2 : primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].equals(data1, data2, this.dataKey);
        }
      }, {
        key: "filter",
        value: function filter(value, field, matchMode) {
          var _this10 = this;
          if (this.filterTimeout) {
            clearTimeout(this.filterTimeout);
          }
          if (!this.isFilterBlank(value)) {
            this.filters[field] = {
              value: value,
              matchMode: matchMode
            };
          } else if (this.filters[field]) {
            delete this.filters[field];
          }
          this.filterTimeout = setTimeout(function () {
            _this10._filter();
            _this10.filterTimeout = null;
          }, this.filterDelay);
          this.anchorRowIndex = null;
        }
      }, {
        key: "filterGlobal",
        value: function filterGlobal(value, matchMode) {
          this.filter(value, 'global', matchMode);
        }
      }, {
        key: "isFilterBlank",
        value: function isFilterBlank(filter) {
          if (filter !== null && filter !== undefined) {
            if (typeof filter === 'string' && filter.trim().length == 0 || filter instanceof Array && filter.length == 0) return true;else return false;
          }
          return true;
        }
      }, {
        key: "_filter",
        value: function _filter() {
          if (!this.restoringFilter) {
            this.first = 0;
            this.firstChange.emit(this.first);
          }
          if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
          } else {
            if (!this.value) {
              return;
            }
            if (!this.hasFilter()) {
              this.filteredValue = null;
              if (this.paginator) {
                this.totalRecords = this.value ? this.value.length : 0;
              }
            } else {
              var globalFilterFieldsArray;
              if (this.filters['global']) {
                if (!this.columns && !this.globalFilterFields) throw new Error('Global filtering requires dynamic columns or globalFilterFields to be defined.');else globalFilterFieldsArray = this.globalFilterFields || this.columns;
              }
              this.filteredValue = [];
              for (var i = 0; i < this.value.length; i++) {
                var localMatch = true;
                var globalMatch = false;
                var localFiltered = false;
                for (var prop in this.filters) {
                  if (this.filters.hasOwnProperty(prop) && prop !== 'global') {
                    localFiltered = true;
                    var filterMeta = this.filters[prop];
                    var filterField = prop;
                    var filterValue = filterMeta.value;
                    var filterMatchMode = filterMeta.matchMode || 'startsWith';
                    var dataFieldValue = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(this.value[i], filterField);
                    var filterConstraint = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["FilterUtils"][filterMatchMode];
                    if (!filterConstraint(dataFieldValue, filterValue, this.filterLocale)) {
                      localMatch = false;
                    }
                    if (!localMatch) {
                      break;
                    }
                  }
                }
                if (this.filters['global'] && !globalMatch && globalFilterFieldsArray) {
                  for (var j = 0; j < globalFilterFieldsArray.length; j++) {
                    var globalFilterField = globalFilterFieldsArray[j].field || globalFilterFieldsArray[j];
                    globalMatch = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["FilterUtils"][this.filters['global'].matchMode](primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(this.value[i], globalFilterField), this.filters['global'].value, this.filterLocale);
                    if (globalMatch) {
                      break;
                    }
                  }
                }
                var matches = void 0;
                if (this.filters['global']) {
                  matches = localFiltered ? localFiltered && localMatch && globalMatch : globalMatch;
                } else {
                  matches = localFiltered && localMatch;
                }
                if (matches) {
                  this.filteredValue.push(this.value[i]);
                }
              }
              if (this.filteredValue.length === this.value.length) {
                this.filteredValue = null;
              }
              if (this.paginator) {
                this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
              }
            }
          }
          this.onFilter.emit({
            filters: this.filters,
            filteredValue: this.filteredValue || this.value
          });
          this.tableService.onValueChange(this.value);
          if (this.isStateful() && !this.restoringFilter) {
            this.saveState();
          }
          if (this.restoringFilter) {
            this.restoringFilter = false;
          }
          this.cd.markForCheck();
          if (this.scrollable) {
            this.resetScrollTop();
          }
        }
      }, {
        key: "hasFilter",
        value: function hasFilter() {
          var empty = true;
          for (var prop in this.filters) {
            if (this.filters.hasOwnProperty(prop)) {
              empty = false;
              break;
            }
          }
          return !empty;
        }
      }, {
        key: "createLazyLoadMetadata",
        value: function createLazyLoadMetadata() {
          return {
            first: this.first,
            rows: this.rows,
            sortField: this.sortField,
            sortOrder: this.sortOrder,
            filters: this.filters,
            globalFilter: this.filters && this.filters['global'] ? this.filters['global'].value : null,
            multiSortMeta: this.multiSortMeta
          };
        }
      }, {
        key: "reset",
        value: function reset() {
          this._sortField = null;
          this._sortOrder = this.defaultSortOrder;
          this._multiSortMeta = null;
          this.tableService.onSort(null);
          this.filteredValue = null;
          this.filters = {};
          this.first = 0;
          this.firstChange.emit(this.first);
          if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
          } else {
            this.totalRecords = this._value ? this._value.length : 0;
          }
        }
      }, {
        key: "exportCSV",
        value: function exportCSV(options) {
          var _this11 = this;
          var data = this.filteredValue || this.value;
          var csv = '';
          if (options && options.selectionOnly) {
            data = this.selection || [];
          }
          //headers
          for (var i = 0; i < this.columns.length; i++) {
            var column = this.columns[i];
            if (column.exportable !== false && column.field) {
              csv += '"' + (column.header || column.field) + '"';
              if (i < this.columns.length - 1) {
                csv += this.csvSeparator;
              }
            }
          }
          //body
          data.forEach(function (record, i) {
            csv += '\n';
            for (var _i4 = 0; _i4 < _this11.columns.length; _i4++) {
              var _column = _this11.columns[_i4];
              if (_column.exportable !== false && _column.field) {
                var cellData = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(record, _column.field);
                if (cellData != null) {
                  if (_this11.exportFunction) {
                    cellData = _this11.exportFunction({
                      data: cellData,
                      field: _column.field
                    });
                  } else cellData = String(cellData).replace(/"/g, '""');
                } else cellData = '';
                csv += '"' + cellData + '"';
                if (_i4 < _this11.columns.length - 1) {
                  csv += _this11.csvSeparator;
                }
              }
            }
          });
          var blob = new Blob([csv], {
            type: 'text/csv;charset=utf-8;'
          });
          if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, this.exportFilename + '.csv');
          } else {
            var link = document.createElement("a");
            link.style.display = 'none';
            document.body.appendChild(link);
            if (link.download !== undefined) {
              link.setAttribute('href', URL.createObjectURL(blob));
              link.setAttribute('download', this.exportFilename + '.csv');
              link.click();
            } else {
              csv = 'data:text/csv;charset=utf-8,' + csv;
              window.open(encodeURI(csv));
            }
            document.body.removeChild(link);
          }
        }
      }, {
        key: "resetScrollTop",
        value: function resetScrollTop() {
          if (this.virtualScroll) this.scrollToVirtualIndex(0);else this.scrollTo({
            top: 0
          });
        }
      }, {
        key: "scrollToVirtualIndex",
        value: function scrollToVirtualIndex(index) {
          if (this.scrollableViewChild) {
            this.scrollableViewChild.scrollToVirtualIndex(index);
          }
          if (this.scrollableFrozenViewChild) {
            this.scrollableFrozenViewChild.scrollToVirtualIndex(index);
          }
        }
      }, {
        key: "scrollTo",
        value: function scrollTo(options) {
          if (this.scrollableViewChild) {
            this.scrollableViewChild.scrollTo(options);
          }
          if (this.scrollableFrozenViewChild) {
            this.scrollableFrozenViewChild.scrollTo(options);
          }
        }
      }, {
        key: "updateEditingCell",
        value: function updateEditingCell(cell, data, field, index) {
          this.editingCell = cell;
          this.editingCellData = data;
          this.editingCellField = field;
          this.editingCellRowIndex = index;
          this.bindDocumentEditListener();
        }
      }, {
        key: "isEditingCellValid",
        value: function isEditingCellValid() {
          return this.editingCell && primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].find(this.editingCell, '.ng-invalid.ng-dirty').length === 0;
        }
      }, {
        key: "bindDocumentEditListener",
        value: function bindDocumentEditListener() {
          var _this12 = this;
          if (!this.documentEditListener) {
            this.documentEditListener = function (event) {
              if (_this12.editingCell && !_this12.editingCellClick && _this12.isEditingCellValid()) {
                primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(_this12.editingCell, 'ui-editing-cell');
                _this12.editingCell = null;
                _this12.onEditComplete.emit({
                  field: _this12.editingCellField,
                  data: _this12.editingCellData,
                  originalEvent: event,
                  index: _this12.editingCellRowIndex
                });
                _this12.editingCellField = null;
                _this12.editingCellData = null;
                _this12.editingCellRowIndex = null;
                _this12.unbindDocumentEditListener();
              }
              _this12.editingCellClick = false;
            };
            document.addEventListener('click', this.documentEditListener);
          }
        }
      }, {
        key: "unbindDocumentEditListener",
        value: function unbindDocumentEditListener() {
          if (this.documentEditListener) {
            document.removeEventListener('click', this.documentEditListener);
            this.documentEditListener = null;
          }
        }
      }, {
        key: "initRowEdit",
        value: function initRowEdit(rowData) {
          var dataKeyValue = String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey));
          this.editingRowKeys[dataKeyValue] = true;
        }
      }, {
        key: "saveRowEdit",
        value: function saveRowEdit(rowData, rowElement) {
          if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].find(rowElement, '.ng-invalid.ng-dirty').length === 0) {
            var dataKeyValue = String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey));
            delete this.editingRowKeys[dataKeyValue];
          }
        }
      }, {
        key: "cancelRowEdit",
        value: function cancelRowEdit(rowData) {
          var dataKeyValue = String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey));
          delete this.editingRowKeys[dataKeyValue];
        }
      }, {
        key: "toggleRow",
        value: function toggleRow(rowData, event) {
          if (!this.dataKey) {
            throw new Error('dataKey must be defined to use row expansion');
          }
          var dataKeyValue = String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey));
          if (this.expandedRowKeys[dataKeyValue] != null) {
            delete this.expandedRowKeys[dataKeyValue];
            this.onRowCollapse.emit({
              originalEvent: event,
              data: rowData
            });
          } else {
            if (this.rowExpandMode === 'single') {
              this.expandedRowKeys = {};
            }
            this.expandedRowKeys[dataKeyValue] = true;
            this.onRowExpand.emit({
              originalEvent: event,
              data: rowData
            });
          }
          if (event) {
            event.preventDefault();
          }
          if (this.isStateful()) {
            this.saveState();
          }
        }
      }, {
        key: "isRowExpanded",
        value: function isRowExpanded(rowData) {
          return this.expandedRowKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey))] === true;
        }
      }, {
        key: "isRowEditing",
        value: function isRowEditing(rowData) {
          return this.editingRowKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey))] === true;
        }
      }, {
        key: "isSingleSelectionMode",
        value: function isSingleSelectionMode() {
          return this.selectionMode === 'single';
        }
      }, {
        key: "isMultipleSelectionMode",
        value: function isMultipleSelectionMode() {
          return this.selectionMode === 'multiple';
        }
      }, {
        key: "onColumnResizeBegin",
        value: function onColumnResizeBegin(event) {
          var containerLeft = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(this.containerViewChild.nativeElement).left;
          this.lastResizerHelperX = event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft;
          this.onColumnResize(event);
          event.preventDefault();
        }
      }, {
        key: "onColumnResize",
        value: function onColumnResize(event) {
          var containerLeft = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(this.containerViewChild.nativeElement).left;
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.containerViewChild.nativeElement, 'ui-unselectable-text');
          this.resizeHelperViewChild.nativeElement.style.height = this.containerViewChild.nativeElement.offsetHeight + 'px';
          this.resizeHelperViewChild.nativeElement.style.top = 0 + 'px';
          this.resizeHelperViewChild.nativeElement.style.left = event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft + 'px';
          this.resizeHelperViewChild.nativeElement.style.display = 'block';
        }
      }, {
        key: "onColumnResizeEnd",
        value: function onColumnResizeEnd(event, column) {
          var delta = this.resizeHelperViewChild.nativeElement.offsetLeft - this.lastResizerHelperX;
          var columnWidth = column.offsetWidth;
          var minWidth = parseInt(column.style.minWidth || 15);
          if (columnWidth + delta < minWidth) {
            delta = minWidth - columnWidth;
          }
          var newColumnWidth = columnWidth + delta;
          if (newColumnWidth >= minWidth) {
            if (this.columnResizeMode === 'fit') {
              var nextColumn = column.nextElementSibling;
              while (!nextColumn.offsetParent) {
                nextColumn = nextColumn.nextElementSibling;
              }
              if (nextColumn) {
                var nextColumnWidth = nextColumn.offsetWidth - delta;
                var nextColumnMinWidth = nextColumn.style.minWidth || 15;
                if (newColumnWidth > 15 && nextColumnWidth > parseInt(nextColumnMinWidth)) {
                  if (this.scrollable) {
                    var scrollableView = this.findParentScrollableView(column);
                    var scrollableBodyTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, '.ui-table-scrollable-body table');
                    var scrollableHeaderTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, 'table.ui-table-scrollable-header-table');
                    var scrollableFooterTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, 'table.ui-table-scrollable-footer-table');
                    var resizeColumnIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].index(column);
                    this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                    this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                    this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                  } else {
                    column.style.width = newColumnWidth + 'px';
                    if (nextColumn) {
                      nextColumn.style.width = nextColumnWidth + 'px';
                    }
                  }
                }
              }
            } else if (this.columnResizeMode === 'expand') {
              if (newColumnWidth > minWidth) {
                if (this.scrollable) {
                  this.setScrollableItemsWidthOnExpandResize(column, newColumnWidth, delta);
                } else {
                  this.tableViewChild.nativeElement.style.width = this.tableViewChild.nativeElement.offsetWidth + delta + 'px';
                  column.style.width = newColumnWidth + 'px';
                  var containerWidth = this.tableViewChild.nativeElement.style.width;
                  this.containerViewChild.nativeElement.style.width = containerWidth + 'px';
                }
              }
            }
            this.onColResize.emit({
              element: column,
              delta: delta
            });
            if (this.isStateful()) {
              this.saveState();
            }
          }
          this.resizeHelperViewChild.nativeElement.style.display = 'none';
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.containerViewChild.nativeElement, 'ui-unselectable-text');
        }
      }, {
        key: "setScrollableItemsWidthOnExpandResize",
        value: function setScrollableItemsWidthOnExpandResize(column, newColumnWidth, delta) {
          var scrollableView = column ? this.findParentScrollableView(column) : this.containerViewChild.nativeElement;
          var scrollableBody = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, '.ui-table-scrollable-body');
          var scrollableHeader = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, '.ui-table-scrollable-header');
          var scrollableFooter = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, '.ui-table-scrollable-footer');
          var scrollableBodyTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableBody, '.ui-table-scrollable-body table');
          var scrollableHeaderTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableHeader, 'table.ui-table-scrollable-header-table');
          var scrollableFooterTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableFooter, 'table.ui-table-scrollable-footer-table');
          var scrollableBodyTableWidth = column ? scrollableBodyTable.offsetWidth + delta : newColumnWidth;
          var scrollableHeaderTableWidth = column ? scrollableHeaderTable.offsetWidth + delta : newColumnWidth;
          var isContainerInViewport = this.containerViewChild.nativeElement.offsetWidth >= scrollableBodyTableWidth;
          var setWidth = function setWidth(container, table, width, isContainerInViewport) {
            if (container && table) {
              container.style.width = isContainerInViewport ? width + primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].calculateScrollbarWidth(scrollableBody) + 'px' : 'auto';
              table.style.width = width + 'px';
            }
          };
          setWidth(scrollableBody, scrollableBodyTable, scrollableBodyTableWidth, isContainerInViewport);
          setWidth(scrollableHeader, scrollableHeaderTable, scrollableHeaderTableWidth, isContainerInViewport);
          setWidth(scrollableFooter, scrollableFooterTable, scrollableHeaderTableWidth, isContainerInViewport);
          if (column) {
            var resizeColumnIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].index(column);
            this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, null);
            this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, null);
            this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, null);
          }
        }
      }, {
        key: "findParentScrollableView",
        value: function findParentScrollableView(column) {
          if (column) {
            var parent = column.parentElement;
            while (parent && !primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(parent, 'ui-table-scrollable-view')) {
              parent = parent.parentElement;
            }
            return parent;
          } else {
            return null;
          }
        }
      }, {
        key: "resizeColGroup",
        value: function resizeColGroup(table, resizeColumnIndex, newColumnWidth, nextColumnWidth) {
          if (table) {
            var colGroup = table.children[0].nodeName === 'COLGROUP' ? table.children[0] : null;
            if (colGroup) {
              var col = colGroup.children[resizeColumnIndex];
              var nextCol = col.nextElementSibling;
              col.style.width = newColumnWidth + 'px';
              if (nextCol && nextColumnWidth) {
                nextCol.style.width = nextColumnWidth + 'px';
              }
            } else {
              throw "Scrollable tables require a colgroup to support resizable columns";
            }
          }
        }
      }, {
        key: "onColumnDragStart",
        value: function onColumnDragStart(event, columnElement) {
          this.reorderIconWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getHiddenElementOuterWidth(this.reorderIndicatorUpViewChild.nativeElement);
          this.reorderIconHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getHiddenElementOuterHeight(this.reorderIndicatorDownViewChild.nativeElement);
          this.draggedColumn = columnElement;
          event.dataTransfer.setData('text', 'b'); // For firefox
        }
      }, {
        key: "onColumnDragEnter",
        value: function onColumnDragEnter(event, dropHeader) {
          if (this.reorderableColumns && this.draggedColumn && dropHeader) {
            event.preventDefault();
            var containerOffset = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(this.containerViewChild.nativeElement);
            var dropHeaderOffset = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(dropHeader);
            if (this.draggedColumn != dropHeader) {
              var dragIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].indexWithinGroup(this.draggedColumn, 'preorderablecolumn');
              var dropIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].indexWithinGroup(dropHeader, 'preorderablecolumn');
              var targetLeft = dropHeaderOffset.left - containerOffset.left;
              var targetTop = containerOffset.top - dropHeaderOffset.top;
              var columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
              this.reorderIndicatorUpViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top - (this.reorderIconHeight - 1) + 'px';
              this.reorderIndicatorDownViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';
              if (event.pageX > columnCenter) {
                this.reorderIndicatorUpViewChild.nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + 'px';
                this.reorderIndicatorDownViewChild.nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + 'px';
                this.dropPosition = 1;
              } else {
                this.reorderIndicatorUpViewChild.nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + 'px';
                this.reorderIndicatorDownViewChild.nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + 'px';
                this.dropPosition = -1;
              }
              if (dropIndex - dragIndex === 1 && this.dropPosition === -1 || dropIndex - dragIndex === -1 && this.dropPosition === 1) {
                this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
                this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
              } else {
                this.reorderIndicatorUpViewChild.nativeElement.style.display = 'block';
                this.reorderIndicatorDownViewChild.nativeElement.style.display = 'block';
              }
            } else {
              event.dataTransfer.dropEffect = 'none';
            }
          }
        }
      }, {
        key: "onColumnDragLeave",
        value: function onColumnDragLeave(event) {
          if (this.reorderableColumns && this.draggedColumn) {
            event.preventDefault();
            this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
            this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
          }
        }
      }, {
        key: "onColumnDrop",
        value: function onColumnDrop(event, dropColumn) {
          var _this13 = this;
          event.preventDefault();
          if (this.draggedColumn) {
            var dragIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].indexWithinGroup(this.draggedColumn, 'preorderablecolumn');
            var dropIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].indexWithinGroup(dropColumn, 'preorderablecolumn');
            var allowDrop = dragIndex != dropIndex;
            if (allowDrop && (dropIndex - dragIndex == 1 && this.dropPosition === -1 || dragIndex - dropIndex == 1 && this.dropPosition === 1)) {
              allowDrop = false;
            }
            if (allowDrop && dropIndex < dragIndex && this.dropPosition === 1) {
              dropIndex = dropIndex + 1;
            }
            if (allowDrop && dropIndex > dragIndex && this.dropPosition === -1) {
              dropIndex = dropIndex - 1;
            }
            if (allowDrop) {
              primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].reorderArray(this.columns, dragIndex, dropIndex);
              this.onColReorder.emit({
                dragIndex: dragIndex,
                dropIndex: dropIndex,
                columns: this.columns
              });
              if (this.isStateful()) {
                this.zone.runOutsideAngular(function () {
                  setTimeout(function () {
                    _this13.saveState();
                  });
                });
              }
            }
            this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
            this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
            this.draggedColumn.draggable = false;
            this.draggedColumn = null;
            this.dropPosition = null;
          }
        }
      }, {
        key: "onRowDragStart",
        value: function onRowDragStart(event, index) {
          this.rowDragging = true;
          this.draggedRowIndex = index;
          event.dataTransfer.setData('text', 'b'); // For firefox
        }
      }, {
        key: "onRowDragOver",
        value: function onRowDragOver(event, index, rowElement) {
          if (this.rowDragging && this.draggedRowIndex !== index) {
            var rowY = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(rowElement).top + primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getWindowScrollTop();
            var pageY = event.pageY;
            var rowMidY = rowY + primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(rowElement) / 2;
            var prevRowElement = rowElement.previousElementSibling;
            if (pageY < rowMidY) {
              primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(rowElement, 'ui-table-dragpoint-bottom');
              this.droppedRowIndex = index;
              if (prevRowElement) primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(prevRowElement, 'ui-table-dragpoint-bottom');else primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(rowElement, 'ui-table-dragpoint-top');
            } else {
              if (prevRowElement) primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(prevRowElement, 'ui-table-dragpoint-bottom');else primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(rowElement, 'ui-table-dragpoint-top');
              this.droppedRowIndex = index + 1;
              primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(rowElement, 'ui-table-dragpoint-bottom');
            }
          }
        }
      }, {
        key: "onRowDragLeave",
        value: function onRowDragLeave(event, rowElement) {
          var prevRowElement = rowElement.previousElementSibling;
          if (prevRowElement) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(prevRowElement, 'ui-table-dragpoint-bottom');
          }
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(rowElement, 'ui-table-dragpoint-bottom');
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(rowElement, 'ui-table-dragpoint-top');
        }
      }, {
        key: "onRowDragEnd",
        value: function onRowDragEnd(event) {
          this.rowDragging = false;
          this.draggedRowIndex = null;
          this.droppedRowIndex = null;
        }
      }, {
        key: "onRowDrop",
        value: function onRowDrop(event, rowElement) {
          if (this.droppedRowIndex != null) {
            var dropIndex = this.draggedRowIndex > this.droppedRowIndex ? this.droppedRowIndex : this.droppedRowIndex === 0 ? 0 : this.droppedRowIndex - 1;
            primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].reorderArray(this.value, this.draggedRowIndex, dropIndex);
            this.onRowReorder.emit({
              dragIndex: this.draggedRowIndex,
              dropIndex: dropIndex
            });
          }
          //cleanup
          this.onRowDragLeave(event, rowElement);
          this.onRowDragEnd(event);
        }
      }, {
        key: "isEmpty",
        value: function isEmpty() {
          var data = this.filteredValue || this.value;
          return data == null || data.length == 0;
        }
      }, {
        key: "getBlockableElement",
        value: function getBlockableElement() {
          return this.el.nativeElement.children[0];
        }
      }, {
        key: "getStorage",
        value: function getStorage() {
          switch (this.stateStorage) {
            case 'local':
              return window.localStorage;
            case 'session':
              return window.sessionStorage;
            default:
              throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
          }
        }
      }, {
        key: "isStateful",
        value: function isStateful() {
          return this.stateKey != null;
        }
      }, {
        key: "saveState",
        value: function saveState() {
          var storage = this.getStorage();
          var state = {};
          if (this.paginator) {
            state.first = this.first;
            state.rows = this.rows;
          }
          if (this.sortField) {
            state.sortField = this.sortField;
            state.sortOrder = this.sortOrder;
          }
          if (this.multiSortMeta) {
            state.multiSortMeta = this.multiSortMeta;
          }
          if (this.hasFilter()) {
            state.filters = this.filters;
          }
          if (this.resizableColumns) {
            this.saveColumnWidths(state);
          }
          if (this.reorderableColumns) {
            this.saveColumnOrder(state);
          }
          if (this.selection) {
            state.selection = this.selection;
          }
          if (Object.keys(this.expandedRowKeys).length) {
            state.expandedRowKeys = this.expandedRowKeys;
          }
          if (Object.keys(state).length) {
            storage.setItem(this.stateKey, JSON.stringify(state));
          }
          this.onStateSave.emit(state);
        }
      }, {
        key: "clearState",
        value: function clearState() {
          var storage = this.getStorage();
          if (this.stateKey) {
            storage.removeItem(this.stateKey);
          }
        }
      }, {
        key: "restoreState",
        value: function restoreState() {
          var _this14 = this;
          var storage = this.getStorage();
          var stateString = storage.getItem(this.stateKey);
          if (stateString) {
            var state = JSON.parse(stateString);
            if (this.paginator) {
              this.first = state.first;
              this.rows = state.rows;
              this.firstChange.emit(this.first);
              this.rowsChange.emit(this.rows);
            }
            if (state.sortField) {
              this.restoringSort = true;
              this._sortField = state.sortField;
              this._sortOrder = state.sortOrder;
            }
            if (state.multiSortMeta) {
              this.restoringSort = true;
              this._multiSortMeta = state.multiSortMeta;
            }
            if (state.filters) {
              this.restoringFilter = true;
              this.filters = state.filters;
            }
            if (this.resizableColumns) {
              this.columnWidthsState = state.columnWidths;
              this.tableWidthState = state.tableWidth;
            }
            if (state.expandedRowKeys) {
              this.expandedRowKeys = state.expandedRowKeys;
            }
            if (state.selection) {
              Promise.resolve(null).then(function () {
                return _this14.selectionChange.emit(state.selection);
              });
            }
            this.stateRestored = true;
            this.onStateRestore.emit(state);
          }
        }
      }, {
        key: "saveColumnWidths",
        value: function saveColumnWidths(state) {
          var widths = [];
          var headers = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].find(this.containerViewChild.nativeElement, '.ui-table-thead > tr:first-child > th');
          headers.map(function (header) {
            return widths.push(primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterWidth(header));
          });
          state.columnWidths = widths.join(',');
          if (this.columnResizeMode === 'expand') {
            state.tableWidth = this.scrollable ? primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(this.containerViewChild.nativeElement, '.ui-table-scrollable-header-table').style.width : primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterWidth(this.tableViewChild.nativeElement) + 'px';
          }
        }
      }, {
        key: "restoreColumnWidths",
        value: function restoreColumnWidths() {
          if (this.columnWidthsState) {
            var widths = this.columnWidthsState.split(',');
            if (this.columnResizeMode === 'expand' && this.tableWidthState) {
              if (this.scrollable) {
                this.setScrollableItemsWidthOnExpandResize(null, this.tableWidthState, 0);
              } else {
                this.tableViewChild.nativeElement.style.width = this.tableWidthState;
                this.containerViewChild.nativeElement.style.width = this.tableWidthState;
              }
            }
            if (this.scrollable) {
              var headerCols = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].find(this.containerViewChild.nativeElement, '.ui-table-scrollable-header-table > colgroup > col');
              var bodyCols = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].find(this.containerViewChild.nativeElement, '.ui-table-scrollable-body table > colgroup > col');
              headerCols.map(function (col, index) {
                return col.style.width = widths[index] + 'px';
              });
              bodyCols.map(function (col, index) {
                return col.style.width = widths[index] + 'px';
              });
            } else {
              var headers = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].find(this.tableViewChild.nativeElement, '.ui-table-thead > tr:first-child > th');
              headers.map(function (header, index) {
                return header.style.width = widths[index] + 'px';
              });
            }
          }
        }
      }, {
        key: "saveColumnOrder",
        value: function saveColumnOrder(state) {
          if (this.columns) {
            var columnOrder = [];
            this.columns.map(function (column) {
              columnOrder.push(column.field || column.key);
            });
            state.columnOrder = columnOrder;
          }
        }
      }, {
        key: "restoreColumnOrder",
        value: function restoreColumnOrder() {
          var _this15 = this;
          var storage = this.getStorage();
          var stateString = storage.getItem(this.stateKey);
          if (stateString) {
            var state = JSON.parse(stateString);
            var columnOrder = state.columnOrder;
            if (columnOrder) {
              var reorderedColumns = [];
              columnOrder.map(function (key) {
                return reorderedColumns.push(_this15.findColumnByKey(key));
              });
              this.columnOrderStateRestored = true;
              this.columns = reorderedColumns;
            }
          }
        }
      }, {
        key: "findColumnByKey",
        value: function findColumnByKey(key) {
          if (this.columns) {
            var _iterator5 = _createForOfIteratorHelper(this.columns),
              _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var col = _step5.value;
                if (col.key === key || col.field === key) return col;else continue;
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          } else {
            return null;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unbindDocumentEditListener();
          this.editingCell = null;
          this.initialized = null;
        }
      }]);
    }();
    Table.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: TableService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "frozenColumns", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "frozenValue", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "style", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "styleClass", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "tableStyle", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "tableStyleClass", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "paginator", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "pageLinks", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "rowsPerPageOptions", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "alwaysShowPaginator", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "paginatorPosition", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "paginatorDropdownAppendTo", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "paginatorDropdownScrollHeight", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "currentPageReportTemplate", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "showCurrentPageReport", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "defaultSortOrder", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "sortMode", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "resetPageOnSort", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "selectionMode", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "selectionChange", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "contextMenuSelection", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "contextMenuSelectionChange", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "contextMenuSelectionMode", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "dataKey", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "metaKeySelection", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "rowTrackBy", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "lazy", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "lazyLoadOnInit", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "compareSelectionBy", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "csvSeparator", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "exportFilename", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "filters", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "globalFilterFields", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "filterDelay", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "filterLocale", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "expandedRowKeys", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "editingRowKeys", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "rowExpandMode", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "scrollable", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "scrollHeight", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "virtualScroll", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "virtualScrollDelay", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "virtualRowHeight", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "frozenWidth", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "responsive", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "contextMenu", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "resizableColumns", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "columnResizeMode", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "reorderableColumns", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "loading", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "loadingIcon", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "showLoader", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "rowHover", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "customSort", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "autoLayout", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "exportFunction", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "stateKey", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "stateStorage", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "editMode", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "minBufferPx", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "maxBufferPx", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onRowSelect", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onRowUnselect", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onPage", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onSort", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onFilter", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onLazyLoad", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onRowExpand", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onRowCollapse", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onContextMenuSelect", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onColResize", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onColReorder", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onRowReorder", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onEditInit", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onEditComplete", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onEditCancel", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onHeaderCheckboxToggle", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "sortFunction", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "firstChange", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "rowsChange", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onStateSave", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onStateRestore", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('container')], Table.prototype, "containerViewChild", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('resizeHelper')], Table.prototype, "resizeHelperViewChild", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('reorderIndicatorUp')], Table.prototype, "reorderIndicatorUpViewChild", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('reorderIndicatorDown')], Table.prototype, "reorderIndicatorDownViewChild", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('table')], Table.prototype, "tableViewChild", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollableView')], Table.prototype, "scrollableViewChild", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollableFrozenView')], Table.prototype, "scrollableFrozenViewChild", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"])], Table.prototype, "templates", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "value", null);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "columns", null);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "first", null);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "rows", null);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "totalRecords", null);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "sortField", null);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "sortOrder", null);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "multiSortMeta", null);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "selection", null);
    Table = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'p-table',
      template: "\n        <div #container [ngStyle]=\"style\" [class]=\"styleClass\"\n            [ngClass]=\"{'ui-table ui-widget': true, 'ui-table-responsive': responsive, 'ui-table-resizable': resizableColumns,\n                'ui-table-resizable-fit': (resizableColumns && columnResizeMode === 'fit'),\n                'ui-table-hoverable-rows': (rowHover||selectionMode), 'ui-table-auto-layout': autoLayout,\n                'ui-table-flex-scrollable': (scrollable && scrollHeight === 'flex')}\">\n            <div class=\"ui-table-loading ui-widget-overlay\" *ngIf=\"loading && showLoader\"></div>\n            <div class=\"ui-table-loading-content\" *ngIf=\"loading && showLoader\">\n                <i [class]=\"'ui-table-loading-icon pi-spin ' + loadingIcon\"></i>\n            </div>\n            <div *ngIf=\"captionTemplate\" class=\"ui-table-caption ui-widget-header\">\n                <ng-container *ngTemplateOutlet=\"captionTemplate\"></ng-container>\n            </div>\n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" styleClass=\"ui-paginator-top\" [alwaysShow]=\"alwaysShowPaginator\"\n                (onPageChange)=\"onPageChange($event)\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && (paginatorPosition === 'top' || paginatorPosition =='both')\"\n                [templateLeft]=\"paginatorLeftTemplate\" [templateRight]=\"paginatorRightTemplate\" [dropdownAppendTo]=\"paginatorDropdownAppendTo\" [dropdownScrollHeight]=\"paginatorDropdownScrollHeight\"\n                [currentPageReportTemplate]=\"currentPageReportTemplate\" [showCurrentPageReport]=\"showCurrentPageReport\"></p-paginator>\n\n            <div class=\"ui-table-wrapper\" *ngIf=\"!scrollable\">\n                <table role=\"grid\" #table [ngClass]=\"tableStyleClass\" [ngStyle]=\"tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <thead class=\"ui-table-thead\">\n                        <ng-container *ngTemplateOutlet=\"headerTemplate; context: {$implicit: columns}\"></ng-container>\n                    </thead>\n                    <tbody class=\"ui-table-tbody\" [pTableBody]=\"columns\" [pTableBodyTemplate]=\"bodyTemplate\"></tbody>\n                    <tfoot *ngIf=\"footerTemplate\" class=\"ui-table-tfoot\">\n                        <ng-container *ngTemplateOutlet=\"footerTemplate; context {$implicit: columns}\"></ng-container>\n                    </tfoot>\n                </table>\n            </div>\n\n            <div class=\"ui-table-scrollable-wrapper\" *ngIf=\"scrollable\">\n               <div class=\"ui-table-scrollable-view ui-table-frozen-view\" *ngIf=\"frozenColumns||frozenBodyTemplate\" #scrollableFrozenView [pScrollableView]=\"frozenColumns\" [frozen]=\"true\" [ngStyle]=\"{width: frozenWidth}\" [scrollHeight]=\"scrollHeight\"></div>\n               <div class=\"ui-table-scrollable-view\" #scrollableView [pScrollableView]=\"columns\" [frozen]=\"false\" [scrollHeight]=\"scrollHeight\" [ngStyle]=\"{left: frozenWidth, width: 'calc(100% - '+frozenWidth+')'}\"></div>\n            </div>\n\n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" styleClass=\"ui-paginator-bottom\" [alwaysShow]=\"alwaysShowPaginator\"\n                (onPageChange)=\"onPageChange($event)\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && (paginatorPosition === 'bottom' || paginatorPosition =='both')\"\n                [templateLeft]=\"paginatorLeftTemplate\" [templateRight]=\"paginatorRightTemplate\" [dropdownAppendTo]=\"paginatorDropdownAppendTo\" [dropdownScrollHeight]=\"paginatorDropdownScrollHeight\"\n                [currentPageReportTemplate]=\"currentPageReportTemplate\" [showCurrentPageReport]=\"showCurrentPageReport\"></p-paginator>\n\n                <div *ngIf=\"summaryTemplate\" class=\"ui-table-summary ui-widget-header\">\n                <ng-container *ngTemplateOutlet=\"summaryTemplate\"></ng-container>\n            </div>\n\n            <div #resizeHelper class=\"ui-column-resizer-helper ui-state-highlight\" style=\"display:none\" *ngIf=\"resizableColumns\"></div>\n\n            <span #reorderIndicatorUp class=\"pi pi-arrow-down ui-table-reorder-indicator-up\" style=\"display:none\" *ngIf=\"reorderableColumns\"></span>\n            <span #reorderIndicatorDown class=\"pi pi-arrow-up ui-table-reorder-indicator-down\" style=\"display:none\" *ngIf=\"reorderableColumns\"></span>\n        </div>\n    ",
      providers: [TableService],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
    })], Table);
    var TableBody = /*#__PURE__*/_createClass(function TableBody(dt) {
      _classCallCheck(this, TableBody);
      this.dt = dt;
    });
    TableBody.ctorParameters = function () {
      return [{
        type: Table
      }];
    };
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pTableBody")], TableBody.prototype, "columns", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pTableBodyTemplate")], TableBody.prototype, "template", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableBody.prototype, "frozen", void 0);
    TableBody = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: '[pTableBody]',
      template: "\n        <ng-container *ngIf=\"!dt.expandedRowTemplate && !dt.virtualScroll\">\n            <ng-template ngFor let-rowData let-rowIndex=\"index\" [ngForOf]=\"(dt.paginator && !dt.lazy) ? ((dt.filteredValue||dt.value) | slice:dt.first:(dt.first + dt.rows)) : (dt.filteredValue||dt.value)\" [ngForTrackBy]=\"dt.rowTrackBy\">\n                <ng-container *ngTemplateOutlet=\"template; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, editing: (dt.editMode === 'row' && dt.isRowEditing(rowData))}\"></ng-container>\n            </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"!dt.expandedRowTemplate && dt.virtualScroll\">\n            <ng-template cdkVirtualFor let-rowData let-rowIndex=\"index\" [cdkVirtualForOf]=\"dt.value\" [cdkVirtualForTrackBy]=\"dt.rowTrackBy\">\n                <ng-container *ngTemplateOutlet=\"rowData ? template: dt.loadingBodyTemplate; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, editing: (dt.editMode === 'row' && dt.isRowEditing(rowData))}\"></ng-container>\n            </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"dt.expandedRowTemplate\">\n            <ng-template ngFor let-rowData let-rowIndex=\"index\" [ngForOf]=\"(dt.paginator && !dt.lazy) ? ((dt.filteredValue||dt.value) | slice:dt.first:(dt.first + dt.rows)) : (dt.filteredValue||dt.value)\" [ngForTrackBy]=\"dt.rowTrackBy\">\n                <ng-container *ngTemplateOutlet=\"template; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, expanded: dt.isRowExpanded(rowData), editing: (dt.editMode === 'row' && dt.isRowEditing(rowData))}\"></ng-container>\n                <ng-container *ngIf=\"dt.isRowExpanded(rowData)\">\n                    <ng-container *ngTemplateOutlet=\"dt.expandedRowTemplate; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns}\"></ng-container>\n                </ng-container>\n            </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"dt.loading\">\n            <ng-container *ngTemplateOutlet=\"dt.loadingBodyTemplate; context: {$implicit: columns, frozen: frozen}\"></ng-container>\n        </ng-container>\n        <ng-container *ngIf=\"dt.isEmpty() && !dt.loading\">\n            <ng-container *ngTemplateOutlet=\"dt.emptyMessageTemplate; context: {$implicit: columns, frozen: frozen}\"></ng-container>\n        </ng-container>\n    "
    })], TableBody);
    var ScrollableView = /*#__PURE__*/function () {
      function ScrollableView(dt, el, zone) {
        var _this16 = this;
        _classCallCheck(this, ScrollableView);
        this.dt = dt;
        this.el = el;
        this.zone = zone;
        this.loadedPages = [];
        this.subscription = this.dt.tableService.valueSource$.subscribe(function () {
          _this16.zone.runOutsideAngular(function () {
            setTimeout(function () {
              _this16.alignScrollBar();
            }, 50);
          });
        });
        this.initialized = false;
      }
      return _createClass(ScrollableView, [{
        key: "scrollHeight",
        get: function get() {
          return this._scrollHeight;
        },
        set: function set(val) {
          this._scrollHeight = val;
          if (val != null && (val.includes('%') || val.includes('calc'))) {
            console.log('Percentage scroll height calculation is removed in favor of the more performant CSS based flex mode, use scrollHeight="flex" instead.');
          }
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          if (!this.initialized && this.el.nativeElement.offsetParent) {
            this.alignScrollBar();
            this.initialized = true;
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (!this.frozen) {
            if (this.dt.frozenColumns || this.dt.frozenBodyTemplate) {
              primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.el.nativeElement, 'ui-table-unfrozen-view');
            }
            var frozenView = this.el.nativeElement.previousElementSibling;
            if (frozenView) {
              if (this.dt.virtualScroll) this.frozenSiblingBody = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(frozenView, '.ui-table-virtual-scrollable-body');else this.frozenSiblingBody = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(frozenView, '.ui-table-scrollable-body');
            }
          } else {
            if (this.scrollableAlignerViewChild && this.scrollableAlignerViewChild.nativeElement) {
              this.scrollableAlignerViewChild.nativeElement.style.height = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].calculateScrollbarHeight() + 'px';
            }
          }
          this.bindEvents();
          this.alignScrollBar();
        }
      }, {
        key: "bindEvents",
        value: function bindEvents() {
          var _this17 = this;
          this.zone.runOutsideAngular(function () {
            if (_this17.scrollHeaderViewChild && _this17.scrollHeaderViewChild.nativeElement) {
              _this17.headerScrollListener = _this17.onHeaderScroll.bind(_this17);
              _this17.scrollHeaderViewChild.nativeElement.addEventListener('scroll', _this17.headerScrollListener);
            }
            if (_this17.scrollFooterViewChild && _this17.scrollFooterViewChild.nativeElement) {
              _this17.footerScrollListener = _this17.onFooterScroll.bind(_this17);
              _this17.scrollFooterViewChild.nativeElement.addEventListener('scroll', _this17.footerScrollListener);
            }
            if (!_this17.frozen) {
              _this17.bodyScrollListener = _this17.onBodyScroll.bind(_this17);
              if (_this17.dt.virtualScroll) _this17.virtualScrollBody.getElementRef().nativeElement.addEventListener('scroll', _this17.bodyScrollListener);else _this17.scrollBodyViewChild.nativeElement.addEventListener('scroll', _this17.bodyScrollListener);
            }
          });
        }
      }, {
        key: "unbindEvents",
        value: function unbindEvents() {
          if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderViewChild.nativeElement.removeEventListener('scroll', this.headerScrollListener);
          }
          if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
            this.scrollFooterViewChild.nativeElement.removeEventListener('scroll', this.footerScrollListener);
          }
          if (this.scrollBodyViewChild && this.scrollBodyViewChild.nativeElement) {
            this.scrollBodyViewChild.nativeElement.removeEventListener('scroll', this.bodyScrollListener);
          }
          if (this.virtualScrollBody && this.virtualScrollBody.getElementRef()) {
            this.virtualScrollBody.getElementRef().nativeElement.removeEventListener('scroll', this.bodyScrollListener);
          }
        }
      }, {
        key: "onHeaderScroll",
        value: function onHeaderScroll() {
          var scrollLeft = this.scrollHeaderViewChild.nativeElement.scrollLeft;
          this.scrollBodyViewChild.nativeElement.scrollLeft = scrollLeft;
          if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
            this.scrollFooterViewChild.nativeElement.scrollLeft = scrollLeft;
          }
          this.preventBodyScrollPropagation = true;
        }
      }, {
        key: "onFooterScroll",
        value: function onFooterScroll() {
          var scrollLeft = this.scrollFooterViewChild.nativeElement.scrollLeft;
          this.scrollBodyViewChild.nativeElement.scrollLeft = scrollLeft;
          if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderViewChild.nativeElement.scrollLeft = scrollLeft;
          }
          this.preventBodyScrollPropagation = true;
        }
      }, {
        key: "onBodyScroll",
        value: function onBodyScroll(event) {
          if (this.preventBodyScrollPropagation) {
            this.preventBodyScrollPropagation = false;
            return;
          }
          if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderBoxViewChild.nativeElement.style.marginLeft = -1 * event.target.scrollLeft + 'px';
          }
          if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
            this.scrollFooterBoxViewChild.nativeElement.style.marginLeft = -1 * event.target.scrollLeft + 'px';
          }
          if (this.frozenSiblingBody) {
            this.frozenSiblingBody.scrollTop = event.target.scrollTop;
          }
        }
      }, {
        key: "onScrollIndexChange",
        value: function onScrollIndexChange(index) {
          var _this18 = this;
          if (this.dt.lazy) {
            var pageRange = this.createPageRange(Math.floor(index / this.dt.rows));
            pageRange.forEach(function (page) {
              return _this18.loadPage(page);
            });
          }
        }
      }, {
        key: "createPageRange",
        value: function createPageRange(page) {
          var range = [];
          if (page !== 0) {
            range.push(page - 1);
          }
          range.push(page);
          if (page !== this.getPageCount() - 1) {
            range.push(page + 1);
          }
          return range;
        }
      }, {
        key: "loadPage",
        value: function loadPage(page) {
          if (!this.loadedPages.includes(page)) {
            this.dt.onLazyLoad.emit({
              first: this.dt.rows * page,
              rows: this.dt.rows,
              sortField: this.dt.sortField,
              sortOrder: this.dt.sortOrder,
              filters: this.dt.filters,
              globalFilter: this.dt.filters && this.dt.filters['global'] ? this.dt.filters['global'].value : null,
              multiSortMeta: this.dt.multiSortMeta
            });
            this.loadedPages.push(page);
          }
        }
      }, {
        key: "clearCache",
        value: function clearCache() {
          this.loadedPages = [];
        }
      }, {
        key: "getPageCount",
        value: function getPageCount() {
          var dataToRender = this.dt.filteredValue || this.dt.value;
          var dataLength = dataToRender ? dataToRender.length : 0;
          return Math.ceil(dataLength / this.dt.rows);
        }
      }, {
        key: "scrollToVirtualIndex",
        value: function scrollToVirtualIndex(index) {
          if (this.virtualScrollBody) {
            this.virtualScrollBody.scrollToIndex(index);
          }
        }
      }, {
        key: "scrollTo",
        value: function scrollTo(options) {
          if (this.virtualScrollBody) {
            this.virtualScrollBody.scrollTo(options);
          } else {
            if (this.scrollBodyViewChild.nativeElement.scrollTo) {
              this.scrollBodyViewChild.nativeElement.scrollTo(options);
            } else {
              this.scrollBodyViewChild.nativeElement.scrollLeft = options.left;
              this.scrollBodyViewChild.nativeElement.scrollTop = options.top;
            }
          }
        }
      }, {
        key: "hasVerticalOverflow",
        value: function hasVerticalOverflow() {
          if (this.dt.virtualScroll) return this.virtualScrollBody.getDataLength() * this.dt.virtualRowHeight > this.virtualScrollBody.getViewportSize();else return primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.scrollTableViewChild.nativeElement) > primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.scrollBodyViewChild.nativeElement);
        }
      }, {
        key: "alignScrollBar",
        value: function alignScrollBar() {
          if (!this.frozen) {
            var scrollBarWidth = this.hasVerticalOverflow() ? primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].calculateScrollbarWidth() : 0;
            this.scrollHeaderBoxViewChild.nativeElement.style.paddingRight = scrollBarWidth + 'px';
            if (this.scrollFooterBoxViewChild && this.scrollFooterBoxViewChild.nativeElement) {
              this.scrollFooterBoxViewChild.nativeElement.style.paddingRight = scrollBarWidth + 'px';
            }
          }
          this.initialized = false;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unbindEvents();
          this.frozenSiblingBody = null;
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
          this.initialized = false;
        }
      }]);
    }();
    ScrollableView.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pScrollableView")], ScrollableView.prototype, "columns", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], ScrollableView.prototype, "frozen", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollHeader')], ScrollableView.prototype, "scrollHeaderViewChild", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollHeaderBox')], ScrollableView.prototype, "scrollHeaderBoxViewChild", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollBody')], ScrollableView.prototype, "scrollBodyViewChild", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollTable')], ScrollableView.prototype, "scrollTableViewChild", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollFooter')], ScrollableView.prototype, "scrollFooterViewChild", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollFooterBox')], ScrollableView.prototype, "scrollFooterBoxViewChild", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollableAligner')], ScrollableView.prototype, "scrollableAlignerViewChild", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkVirtualScrollViewport"])], ScrollableView.prototype, "virtualScrollBody", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], ScrollableView.prototype, "scrollHeight", null);
    ScrollableView = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: '[pScrollableView]',
      template: "\n        <div #scrollHeader class=\"ui-table-scrollable-header ui-widget-header\">\n            <div #scrollHeaderBox class=\"ui-table-scrollable-header-box\">\n                <table class=\"ui-table-scrollable-header-table\" [ngClass]=\"dt.tableStyleClass\" [ngStyle]=\"dt.tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <thead class=\"ui-table-thead\">\n                        <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenHeaderTemplate||dt.headerTemplate : dt.headerTemplate; context {$implicit: columns}\"></ng-container>\n                    </thead>\n                    <tbody class=\"ui-table-tbody\">\n                        <ng-template ngFor let-rowData let-rowIndex=\"index\" [ngForOf]=\"dt.frozenValue\" [ngForTrackBy]=\"dt.rowTrackBy\">\n                            <ng-container *ngTemplateOutlet=\"dt.frozenRowsTemplate; context: {$implicit: rowData, rowIndex: rowIndex, columns: columns}\"></ng-container>\n                        </ng-template>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        <ng-container *ngIf=\"!dt.virtualScroll; else virtualScrollTemplate\">\n            <div #scrollBody class=\"ui-table-scrollable-body\" [ngStyle]=\"{'max-height': dt.scrollHeight !== 'flex' ? scrollHeight : undefined}\">\n                <table #scrollTable [class]=\"dt.tableStyleClass\" [ngStyle]=\"dt.tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <tbody class=\"ui-table-tbody\" [pTableBody]=\"columns\" [pTableBodyTemplate]=\"frozen ? dt.frozenBodyTemplate||dt.bodyTemplate : dt.bodyTemplate\" [frozen]=\"frozen\"></tbody>\n                </table>\n                <div #scrollableAligner style=\"background-color:transparent\" *ngIf=\"frozen\"></div>\n            </div>\n        </ng-container>\n        <ng-template #virtualScrollTemplate>\n            <cdk-virtual-scroll-viewport [itemSize]=\"dt.virtualRowHeight\" [style.height]=\"dt.scrollHeight !== 'flex' ? scrollHeight : undefined\" \n                    [minBufferPx]=\"dt.minBufferPx\" [maxBufferPx]=\"dt.maxBufferPx\" (scrolledIndexChange)=\"onScrollIndexChange($event)\" class=\"ui-table-virtual-scrollable-body\">\n                <table #scrollTable [class]=\"dt.tableStyleClass\" [ngStyle]=\"dt.tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <tbody class=\"ui-table-tbody\" [pTableBody]=\"columns\" [pTableBodyTemplate]=\"frozen ? dt.frozenBodyTemplate||dt.bodyTemplate : dt.bodyTemplate\" [frozen]=\"frozen\"></tbody>\n                </table>\n                <div #scrollableAligner style=\"background-color:transparent\" *ngIf=\"frozen\"></div>\n            </cdk-virtual-scroll-viewport>\n        </ng-template>\n        <div #scrollFooter class=\"ui-table-scrollable-footer ui-widget-header\">\n            <div #scrollFooterBox class=\"ui-table-scrollable-footer-box\">\n                <table class=\"ui-table-scrollable-footer-table\" [ngClass]=\"dt.tableStyleClass\" [ngStyle]=\"dt.tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <tfoot class=\"ui-table-tfoot\">\n                        <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenFooterTemplate||dt.footerTemplate : dt.footerTemplate; context {$implicit: columns}\"></ng-container>\n                    </tfoot>\n                </table>\n            </div>\n        </div>\n    "
    })], ScrollableView);
    var SortableColumn = /*#__PURE__*/function () {
      function SortableColumn(dt) {
        var _this19 = this;
        _classCallCheck(this, SortableColumn);
        this.dt = dt;
        if (this.isEnabled()) {
          this.subscription = this.dt.tableService.sortSource$.subscribe(function (sortMeta) {
            _this19.updateSortState();
          });
        }
      }
      return _createClass(SortableColumn, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.isEnabled()) {
            this.updateSortState();
          }
        }
      }, {
        key: "updateSortState",
        value: function updateSortState() {
          this.sorted = this.dt.isSorted(this.field);
          this.sortOrder = this.sorted ? this.dt.sortOrder === 1 ? 'ascending' : 'descending' : 'none';
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          if (this.isEnabled()) {
            this.updateSortState();
            this.dt.sort({
              originalEvent: event,
              field: this.field
            });
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].clearSelection();
          }
        }
      }, {
        key: "onEnterKey",
        value: function onEnterKey(event) {
          this.onClick(event);
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.pSortableColumnDisabled !== true;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);
    }();
    SortableColumn.ctorParameters = function () {
      return [{
        type: Table
      }];
    };
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pSortableColumn")], SortableColumn.prototype, "field", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], SortableColumn.prototype, "pSortableColumnDisabled", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event'])], SortableColumn.prototype, "onClick", null);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown.enter', ['$event'])], SortableColumn.prototype, "onEnterKey", null);
    SortableColumn = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
      selector: '[pSortableColumn]',
      host: {
        '[class.ui-sortable-column]': 'isEnabled()',
        '[class.ui-state-highlight]': 'sorted',
        '[attr.tabindex]': 'isEnabled() ? "0" : null',
        '[attr.role]': '"columnheader"',
        '[attr.aria-sort]': 'sortOrder'
      }
    })], SortableColumn);
    var SortIcon = /*#__PURE__*/function () {
      function SortIcon(dt) {
        var _this20 = this;
        _classCallCheck(this, SortIcon);
        this.dt = dt;
        this.subscription = this.dt.tableService.sortSource$.subscribe(function (sortMeta) {
          _this20.updateSortState();
        });
      }
      return _createClass(SortIcon, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateSortState();
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          event.preventDefault();
        }
      }, {
        key: "updateSortState",
        value: function updateSortState() {
          if (this.dt.sortMode === 'single') {
            this.sortOrder = this.dt.isSorted(this.field) ? this.dt.sortOrder : 0;
          } else if (this.dt.sortMode === 'multiple') {
            var sortMeta = this.dt.getSortMeta(this.field);
            this.sortOrder = sortMeta ? sortMeta.order : 0;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);
    }();
    SortIcon.ctorParameters = function () {
      return [{
        type: Table
      }];
    };
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], SortIcon.prototype, "field", void 0);
    SortIcon = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'p-sortIcon',
      template: "\n        <i class=\"ui-sortable-column-icon pi pi-fw\" [ngClass]=\"{'pi-sort-amount-up-alt': sortOrder === 1, 'pi-sort-amount-down': sortOrder === -1, 'pi-sort-alt': sortOrder === 0}\"></i>\n    "
    })], SortIcon);
    var SelectableRow = /*#__PURE__*/function () {
      function SelectableRow(dt, tableService) {
        var _this21 = this;
        _classCallCheck(this, SelectableRow);
        this.dt = dt;
        this.tableService = tableService;
        if (this.isEnabled()) {
          this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
            _this21.selected = _this21.dt.isSelected(_this21.data);
          });
        }
      }
      return _createClass(SelectableRow, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.isEnabled()) {
            this.selected = this.dt.isSelected(this.data);
          }
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          if (this.isEnabled()) {
            this.dt.handleRowClick({
              originalEvent: event,
              rowData: this.data,
              rowIndex: this.index
            });
          }
        }
      }, {
        key: "onTouchEnd",
        value: function onTouchEnd(event) {
          if (this.isEnabled()) {
            this.dt.handleRowTouchEnd(event);
          }
        }
      }, {
        key: "onArrowDownKeyDown",
        value: function onArrowDownKeyDown(event) {
          if (!this.isEnabled()) {
            return;
          }
          var row = event.currentTarget;
          var nextRow = this.findNextSelectableRow(row);
          if (nextRow) {
            nextRow.focus();
          }
          event.preventDefault();
        }
      }, {
        key: "onArrowUpKeyDown",
        value: function onArrowUpKeyDown(event) {
          if (!this.isEnabled()) {
            return;
          }
          var row = event.currentTarget;
          var prevRow = this.findPrevSelectableRow(row);
          if (prevRow) {
            prevRow.focus();
          }
          event.preventDefault();
        }
      }, {
        key: "onEnterKeyDown",
        value: function onEnterKeyDown(event) {
          if (!this.isEnabled()) {
            return;
          }
          this.dt.handleRowClick({
            originalEvent: event,
            rowData: this.data,
            rowIndex: this.index
          });
        }
      }, {
        key: "findNextSelectableRow",
        value: function findNextSelectableRow(row) {
          var nextRow = row.nextElementSibling;
          if (nextRow) {
            if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(nextRow, 'ui-selectable-row')) return nextRow;else return this.findNextSelectableRow(nextRow);
          } else {
            return null;
          }
        }
      }, {
        key: "findPrevSelectableRow",
        value: function findPrevSelectableRow(row) {
          var prevRow = row.previousElementSibling;
          if (prevRow) {
            if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(prevRow, 'ui-selectable-row')) return prevRow;else return this.findPrevSelectableRow(prevRow);
          } else {
            return null;
          }
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.pSelectableRowDisabled !== true;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);
    }();
    SelectableRow.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: TableService
      }];
    };
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pSelectableRow")], SelectableRow.prototype, "data", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pSelectableRowIndex")], SelectableRow.prototype, "index", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], SelectableRow.prototype, "pSelectableRowDisabled", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event'])], SelectableRow.prototype, "onClick", null);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('touchend', ['$event'])], SelectableRow.prototype, "onTouchEnd", null);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown.arrowdown', ['$event'])], SelectableRow.prototype, "onArrowDownKeyDown", null);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown.arrowup', ['$event'])], SelectableRow.prototype, "onArrowUpKeyDown", null);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown.enter', ['$event'])], SelectableRow.prototype, "onEnterKeyDown", null);
    SelectableRow = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
      selector: '[pSelectableRow]',
      host: {
        '[class.ui-selectable-row]': 'isEnabled()',
        '[class.ui-state-highlight]': 'selected',
        '[attr.tabindex]': 'isEnabled() ? 0 : undefined'
      }
    })], SelectableRow);
    var SelectableRowDblClick = /*#__PURE__*/function () {
      function SelectableRowDblClick(dt, tableService) {
        var _this22 = this;
        _classCallCheck(this, SelectableRowDblClick);
        this.dt = dt;
        this.tableService = tableService;
        if (this.isEnabled()) {
          this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
            _this22.selected = _this22.dt.isSelected(_this22.data);
          });
        }
      }
      return _createClass(SelectableRowDblClick, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.isEnabled()) {
            this.selected = this.dt.isSelected(this.data);
          }
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          if (this.isEnabled()) {
            this.dt.handleRowClick({
              originalEvent: event,
              rowData: this.data,
              rowIndex: this.index
            });
          }
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.pSelectableRowDisabled !== true;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);
    }();
    SelectableRowDblClick.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: TableService
      }];
    };
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pSelectableRowDblClick")], SelectableRowDblClick.prototype, "data", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pSelectableRowIndex")], SelectableRowDblClick.prototype, "index", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], SelectableRowDblClick.prototype, "pSelectableRowDisabled", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dblclick', ['$event'])], SelectableRowDblClick.prototype, "onClick", null);
    SelectableRowDblClick = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
      selector: '[pSelectableRowDblClick]',
      host: {
        '[class.ui-selectable-row]': 'isEnabled()',
        '[class.ui-state-highlight]': 'selected'
      }
    })], SelectableRowDblClick);
    var ContextMenuRow = /*#__PURE__*/function () {
      function ContextMenuRow(dt, tableService, el) {
        var _this23 = this;
        _classCallCheck(this, ContextMenuRow);
        this.dt = dt;
        this.tableService = tableService;
        this.el = el;
        if (this.isEnabled()) {
          this.subscription = this.dt.tableService.contextMenuSource$.subscribe(function (data) {
            _this23.selected = _this23.dt.equals(_this23.data, data);
          });
        }
      }
      return _createClass(ContextMenuRow, [{
        key: "onContextMenu",
        value: function onContextMenu(event) {
          if (this.isEnabled()) {
            this.dt.handleRowRightClick({
              originalEvent: event,
              rowData: this.data,
              rowIndex: this.index
            });
            this.el.nativeElement.focus();
            event.preventDefault();
          }
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.pContextMenuRowDisabled !== true;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);
    }();
    ContextMenuRow.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: TableService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pContextMenuRow")], ContextMenuRow.prototype, "data", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pContextMenuRowIndex")], ContextMenuRow.prototype, "index", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], ContextMenuRow.prototype, "pContextMenuRowDisabled", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('contextmenu', ['$event'])], ContextMenuRow.prototype, "onContextMenu", null);
    ContextMenuRow = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
      selector: '[pContextMenuRow]',
      host: {
        '[class.ui-contextmenu-selected]': 'selected',
        '[attr.tabindex]': 'isEnabled() ? 0 : undefined'
      }
    })], ContextMenuRow);
    var RowToggler = /*#__PURE__*/function () {
      function RowToggler(dt) {
        _classCallCheck(this, RowToggler);
        this.dt = dt;
      }
      return _createClass(RowToggler, [{
        key: "onClick",
        value: function onClick(event) {
          if (this.isEnabled()) {
            this.dt.toggleRow(this.data, event);
            event.preventDefault();
          }
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.pRowTogglerDisabled !== true;
        }
      }]);
    }();
    RowToggler.ctorParameters = function () {
      return [{
        type: Table
      }];
    };
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('pRowToggler')], RowToggler.prototype, "data", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], RowToggler.prototype, "pRowTogglerDisabled", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event'])], RowToggler.prototype, "onClick", null);
    RowToggler = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
      selector: '[pRowToggler]'
    })], RowToggler);
    var ResizableColumn = /*#__PURE__*/function () {
      function ResizableColumn(dt, el, zone) {
        _classCallCheck(this, ResizableColumn);
        this.dt = dt;
        this.el = el;
        this.zone = zone;
      }
      return _createClass(ResizableColumn, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this24 = this;
          if (this.isEnabled()) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.el.nativeElement, 'ui-resizable-column');
            this.resizer = document.createElement('span');
            this.resizer.className = 'ui-column-resizer ui-clickable';
            this.el.nativeElement.appendChild(this.resizer);
            this.zone.runOutsideAngular(function () {
              _this24.resizerMouseDownListener = _this24.onMouseDown.bind(_this24);
              _this24.resizer.addEventListener('mousedown', _this24.resizerMouseDownListener);
            });
          }
        }
      }, {
        key: "bindDocumentEvents",
        value: function bindDocumentEvents() {
          var _this25 = this;
          this.zone.runOutsideAngular(function () {
            _this25.documentMouseMoveListener = _this25.onDocumentMouseMove.bind(_this25);
            document.addEventListener('mousemove', _this25.documentMouseMoveListener);
            _this25.documentMouseUpListener = _this25.onDocumentMouseUp.bind(_this25);
            document.addEventListener('mouseup', _this25.documentMouseUpListener);
          });
        }
      }, {
        key: "unbindDocumentEvents",
        value: function unbindDocumentEvents() {
          if (this.documentMouseMoveListener) {
            document.removeEventListener('mousemove', this.documentMouseMoveListener);
            this.documentMouseMoveListener = null;
          }
          if (this.documentMouseUpListener) {
            document.removeEventListener('mouseup', this.documentMouseUpListener);
            this.documentMouseUpListener = null;
          }
        }
      }, {
        key: "onMouseDown",
        value: function onMouseDown(event) {
          if (event.which === 1) {
            this.dt.onColumnResizeBegin(event);
            this.bindDocumentEvents();
          }
        }
      }, {
        key: "onDocumentMouseMove",
        value: function onDocumentMouseMove(event) {
          this.dt.onColumnResize(event);
        }
      }, {
        key: "onDocumentMouseUp",
        value: function onDocumentMouseUp(event) {
          this.dt.onColumnResizeEnd(event, this.el.nativeElement);
          this.unbindDocumentEvents();
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.pResizableColumnDisabled !== true;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.resizerMouseDownListener) {
            this.resizer.removeEventListener('mousedown', this.resizerMouseDownListener);
          }
          this.unbindDocumentEvents();
        }
      }]);
    }();
    ResizableColumn.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], ResizableColumn.prototype, "pResizableColumnDisabled", void 0);
    ResizableColumn = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
      selector: '[pResizableColumn]'
    })], ResizableColumn);
    var ReorderableColumn = /*#__PURE__*/function () {
      function ReorderableColumn(dt, el, zone) {
        _classCallCheck(this, ReorderableColumn);
        this.dt = dt;
        this.el = el;
        this.zone = zone;
      }
      return _createClass(ReorderableColumn, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.isEnabled()) {
            this.bindEvents();
          }
        }
      }, {
        key: "bindEvents",
        value: function bindEvents() {
          var _this26 = this;
          this.zone.runOutsideAngular(function () {
            _this26.mouseDownListener = _this26.onMouseDown.bind(_this26);
            _this26.el.nativeElement.addEventListener('mousedown', _this26.mouseDownListener);
            _this26.dragStartListener = _this26.onDragStart.bind(_this26);
            _this26.el.nativeElement.addEventListener('dragstart', _this26.dragStartListener);
            _this26.dragOverListener = _this26.onDragEnter.bind(_this26);
            _this26.el.nativeElement.addEventListener('dragover', _this26.dragOverListener);
            _this26.dragEnterListener = _this26.onDragEnter.bind(_this26);
            _this26.el.nativeElement.addEventListener('dragenter', _this26.dragEnterListener);
            _this26.dragLeaveListener = _this26.onDragLeave.bind(_this26);
            _this26.el.nativeElement.addEventListener('dragleave', _this26.dragLeaveListener);
          });
        }
      }, {
        key: "unbindEvents",
        value: function unbindEvents() {
          if (this.mouseDownListener) {
            document.removeEventListener('mousedown', this.mouseDownListener);
            this.mouseDownListener = null;
          }
          if (this.dragOverListener) {
            document.removeEventListener('dragover', this.dragOverListener);
            this.dragOverListener = null;
          }
          if (this.dragEnterListener) {
            document.removeEventListener('dragenter', this.dragEnterListener);
            this.dragEnterListener = null;
          }
          if (this.dragEnterListener) {
            document.removeEventListener('dragenter', this.dragEnterListener);
            this.dragEnterListener = null;
          }
          if (this.dragLeaveListener) {
            document.removeEventListener('dragleave', this.dragLeaveListener);
            this.dragLeaveListener = null;
          }
        }
      }, {
        key: "onMouseDown",
        value: function onMouseDown(event) {
          if (event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA' || primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(event.target, 'ui-column-resizer')) this.el.nativeElement.draggable = false;else this.el.nativeElement.draggable = true;
        }
      }, {
        key: "onDragStart",
        value: function onDragStart(event) {
          this.dt.onColumnDragStart(event, this.el.nativeElement);
        }
      }, {
        key: "onDragOver",
        value: function onDragOver(event) {
          event.preventDefault();
        }
      }, {
        key: "onDragEnter",
        value: function onDragEnter(event) {
          this.dt.onColumnDragEnter(event, this.el.nativeElement);
        }
      }, {
        key: "onDragLeave",
        value: function onDragLeave(event) {
          this.dt.onColumnDragLeave(event);
        }
      }, {
        key: "onDrop",
        value: function onDrop(event) {
          if (this.isEnabled()) {
            this.dt.onColumnDrop(event, this.el.nativeElement);
          }
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.pReorderableColumnDisabled !== true;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unbindEvents();
        }
      }]);
    }();
    ReorderableColumn.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], ReorderableColumn.prototype, "pReorderableColumnDisabled", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('drop', ['$event'])], ReorderableColumn.prototype, "onDrop", null);
    ReorderableColumn = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
      selector: '[pReorderableColumn]'
    })], ReorderableColumn);
    var EditableColumn = /*#__PURE__*/function () {
      function EditableColumn(dt, el, zone) {
        _classCallCheck(this, EditableColumn);
        this.dt = dt;
        this.el = el;
        this.zone = zone;
      }
      return _createClass(EditableColumn, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.isEnabled()) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.el.nativeElement, 'ui-editable-column');
          }
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          if (this.isEnabled()) {
            this.dt.editingCellClick = true;
            if (this.dt.editingCell) {
              if (this.dt.editingCell !== this.el.nativeElement) {
                if (!this.dt.isEditingCellValid()) {
                  return;
                }
                this.closeEditingCell(true, event);
                this.openCell();
              }
            } else {
              this.openCell();
            }
          }
        }
      }, {
        key: "openCell",
        value: function openCell() {
          var _this27 = this;
          this.dt.updateEditingCell(this.el.nativeElement, this.data, this.field, this.rowIndex);
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.el.nativeElement, 'ui-editing-cell');
          this.dt.onEditInit.emit({
            field: this.field,
            data: this.data,
            index: this.rowIndex
          });
          this.zone.runOutsideAngular(function () {
            setTimeout(function () {
              var focusCellSelector = _this27.pFocusCellSelector || 'input, textarea, select';
              var focusableElement = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(_this27.el.nativeElement, focusCellSelector);
              if (focusableElement) {
                focusableElement.focus();
              }
            }, 50);
          });
        }
      }, {
        key: "closeEditingCell",
        value: function closeEditingCell(completed, event) {
          if (completed) this.dt.onEditComplete.emit({
            field: this.dt.editingCellField,
            data: this.dt.editingCellData,
            originalEvent: event,
            index: this.rowIndex
          });else this.dt.onEditCancel.emit({
            field: this.dt.editingCellField,
            data: this.dt.editingCellData,
            originalEvent: event,
            index: this.rowIndex
          });
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.dt.editingCell, 'ui-editing-cell');
          this.dt.editingCell = null;
          this.dt.editingCellData = null;
          this.dt.editingCellField = null;
          this.dt.unbindDocumentEditListener();
        }
      }, {
        key: "onEnterKeyDown",
        value: function onEnterKeyDown(event) {
          if (this.isEnabled()) {
            if (this.dt.isEditingCellValid()) {
              this.closeEditingCell(true, event);
            }
            event.preventDefault();
          }
        }
      }, {
        key: "onEscapeKeyDown",
        value: function onEscapeKeyDown(event) {
          if (this.isEnabled()) {
            if (this.dt.isEditingCellValid()) {
              this.closeEditingCell(false, event);
            }
            event.preventDefault();
          }
        }
      }, {
        key: "onShiftKeyDown",
        value: function onShiftKeyDown(event) {
          if (this.isEnabled()) {
            if (event.shiftKey) this.moveToPreviousCell(event);else {
              this.moveToNextCell(event);
            }
          }
        }
      }, {
        key: "findCell",
        value: function findCell(element) {
          if (element) {
            var cell = element;
            while (cell && !primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(cell, 'ui-editing-cell')) {
              cell = cell.parentElement;
            }
            return cell;
          } else {
            return null;
          }
        }
      }, {
        key: "moveToPreviousCell",
        value: function moveToPreviousCell(event) {
          var currentCell = this.findCell(event.target);
          if (currentCell) {
            var targetCell = this.findPreviousEditableColumn(currentCell);
            if (targetCell) {
              if (this.dt.isEditingCellValid()) {
                this.closeEditingCell(true, event);
              }
              primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].invokeElementMethod(event.target, 'blur');
              primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].invokeElementMethod(targetCell, 'click');
              event.preventDefault();
            }
          }
        }
      }, {
        key: "moveToNextCell",
        value: function moveToNextCell(event) {
          var currentCell = this.findCell(event.target);
          if (currentCell) {
            var targetCell = this.findNextEditableColumn(currentCell);
            if (targetCell) {
              if (this.dt.isEditingCellValid()) {
                this.closeEditingCell(true, event);
              }
              primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].invokeElementMethod(event.target, 'blur');
              primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].invokeElementMethod(targetCell, 'click');
              event.preventDefault();
            }
          }
        }
      }, {
        key: "findPreviousEditableColumn",
        value: function findPreviousEditableColumn(cell) {
          var prevCell = cell.previousElementSibling;
          if (!prevCell) {
            var previousRow = cell.parentElement.previousElementSibling;
            if (previousRow) {
              prevCell = previousRow.lastElementChild;
            }
          }
          if (prevCell) {
            if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(prevCell, 'ui-editable-column')) return prevCell;else return this.findPreviousEditableColumn(prevCell);
          } else {
            return null;
          }
        }
      }, {
        key: "findNextEditableColumn",
        value: function findNextEditableColumn(cell) {
          var nextCell = cell.nextElementSibling;
          if (!nextCell) {
            var nextRow = cell.parentElement.nextElementSibling;
            if (nextRow) {
              nextCell = nextRow.firstElementChild;
            }
          }
          if (nextCell) {
            if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(nextCell, 'ui-editable-column')) return nextCell;else return this.findNextEditableColumn(nextCell);
          } else {
            return null;
          }
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.pEditableColumnDisabled !== true;
        }
      }]);
    }();
    EditableColumn.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pEditableColumn")], EditableColumn.prototype, "data", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pEditableColumnField")], EditableColumn.prototype, "field", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pEditableColumnRowIndex")], EditableColumn.prototype, "rowIndex", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], EditableColumn.prototype, "pEditableColumnDisabled", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], EditableColumn.prototype, "pFocusCellSelector", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event'])], EditableColumn.prototype, "onClick", null);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown.enter', ['$event'])], EditableColumn.prototype, "onEnterKeyDown", null);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown.escape', ['$event'])], EditableColumn.prototype, "onEscapeKeyDown", null);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown.tab', ['$event']), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown.shift.tab', ['$event']), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown.meta.tab', ['$event'])], EditableColumn.prototype, "onShiftKeyDown", null);
    EditableColumn = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
      selector: '[pEditableColumn]'
    })], EditableColumn);
    var EditableRow = /*#__PURE__*/function () {
      function EditableRow(el) {
        _classCallCheck(this, EditableRow);
        this.el = el;
      }
      return _createClass(EditableRow, [{
        key: "isEnabled",
        value: function isEnabled() {
          return this.pEditableRowDisabled !== true;
        }
      }]);
    }();
    EditableRow.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pEditableRow")], EditableRow.prototype, "data", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], EditableRow.prototype, "pEditableRowDisabled", void 0);
    EditableRow = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
      selector: '[pEditableRow]'
    })], EditableRow);
    var InitEditableRow = /*#__PURE__*/function () {
      function InitEditableRow(dt, editableRow) {
        _classCallCheck(this, InitEditableRow);
        this.dt = dt;
        this.editableRow = editableRow;
      }
      return _createClass(InitEditableRow, [{
        key: "onClick",
        value: function onClick(event) {
          this.dt.initRowEdit(this.editableRow.data);
          event.preventDefault();
        }
      }]);
    }();
    InitEditableRow.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: EditableRow
      }];
    };
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event'])], InitEditableRow.prototype, "onClick", null);
    InitEditableRow = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
      selector: '[pInitEditableRow]'
    })], InitEditableRow);
    var SaveEditableRow = /*#__PURE__*/function () {
      function SaveEditableRow(dt, editableRow) {
        _classCallCheck(this, SaveEditableRow);
        this.dt = dt;
        this.editableRow = editableRow;
      }
      return _createClass(SaveEditableRow, [{
        key: "onClick",
        value: function onClick(event) {
          this.dt.saveRowEdit(this.editableRow.data, this.editableRow.el.nativeElement);
          event.preventDefault();
        }
      }]);
    }();
    SaveEditableRow.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: EditableRow
      }];
    };
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event'])], SaveEditableRow.prototype, "onClick", null);
    SaveEditableRow = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
      selector: '[pSaveEditableRow]'
    })], SaveEditableRow);
    var CancelEditableRow = /*#__PURE__*/function () {
      function CancelEditableRow(dt, editableRow) {
        _classCallCheck(this, CancelEditableRow);
        this.dt = dt;
        this.editableRow = editableRow;
      }
      return _createClass(CancelEditableRow, [{
        key: "onClick",
        value: function onClick(event) {
          this.dt.cancelRowEdit(this.editableRow.data);
          event.preventDefault();
        }
      }]);
    }();
    CancelEditableRow.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: EditableRow
      }];
    };
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event'])], CancelEditableRow.prototype, "onClick", null);
    CancelEditableRow = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
      selector: '[pCancelEditableRow]'
    })], CancelEditableRow);
    var CellEditor = /*#__PURE__*/function () {
      function CellEditor(dt, editableColumn, editableRow) {
        _classCallCheck(this, CellEditor);
        this.dt = dt;
        this.editableColumn = editableColumn;
        this.editableRow = editableRow;
      }
      return _createClass(CellEditor, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this28 = this;
          this.templates.forEach(function (item) {
            switch (item.getType()) {
              case 'input':
                _this28.inputTemplate = item.template;
                break;
              case 'output':
                _this28.outputTemplate = item.template;
                break;
            }
          });
        }
      }, {
        key: "editing",
        get: function get() {
          return this.dt.editingCell && this.editableColumn && this.dt.editingCell === this.editableColumn.el.nativeElement || this.editableRow && this.dt.editMode === 'row' && this.dt.isRowEditing(this.editableRow.data);
        }
      }]);
    }();
    CellEditor.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: EditableColumn,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: EditableRow,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"])], CellEditor.prototype, "templates", void 0);
    CellEditor = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'p-cellEditor',
      template: "\n        <ng-container *ngIf=\"editing\">\n            <ng-container *ngTemplateOutlet=\"inputTemplate\"></ng-container>\n        </ng-container>\n        <ng-container *ngIf=\"!editing\">\n            <ng-container *ngTemplateOutlet=\"outputTemplate\"></ng-container>\n        </ng-container>\n    "
    }), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])())], CellEditor);
    var TableRadioButton = /*#__PURE__*/function () {
      function TableRadioButton(dt, tableService) {
        var _this29 = this;
        _classCallCheck(this, TableRadioButton);
        this.dt = dt;
        this.tableService = tableService;
        this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
          _this29.checked = _this29.dt.isSelected(_this29.value);
        });
      }
      return _createClass(TableRadioButton, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checked = this.dt.isSelected(this.value);
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          if (!this.disabled) {
            this.dt.toggleRowWithRadio({
              originalEvent: event,
              rowIndex: this.index
            }, this.value);
          }
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].clearSelection();
        }
      }, {
        key: "onFocus",
        value: function onFocus() {
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.boxViewChild.nativeElement, 'ui-state-focus');
        }
      }, {
        key: "onBlur",
        value: function onBlur() {
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.boxViewChild.nativeElement, 'ui-state-focus');
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);
    }();
    TableRadioButton.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: TableService
      }];
    };
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableRadioButton.prototype, "disabled", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableRadioButton.prototype, "value", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableRadioButton.prototype, "index", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableRadioButton.prototype, "inputId", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableRadioButton.prototype, "name", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableRadioButton.prototype, "ariaLabel", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('box')], TableRadioButton.prototype, "boxViewChild", void 0);
    TableRadioButton = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'p-tableRadioButton',
      template: "\n        <div class=\"ui-radiobutton ui-widget\" (click)=\"onClick($event)\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input type=\"radio\" [attr.id]=\"inputId\" [attr.name]=\"name\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\"\n                [disabled]=\"disabled\" [attr.aria-label]=\"ariaLabel\">\n            </div>\n            <div #box [ngClass]=\"{'ui-radiobutton-box ui-widget ui-state-default':true,\n                'ui-state-active':checked, 'ui-state-disabled':disabled}\" role=\"radio\" [attr.aria-checked]=\"checked\">\n                <span class=\"ui-radiobutton-icon ui-clickable\" [ngClass]=\"{'pi pi-circle-on':checked}\"></span>\n            </div>\n        </div>\n    "
    })], TableRadioButton);
    var TableCheckbox = /*#__PURE__*/function () {
      function TableCheckbox(dt, tableService) {
        var _this30 = this;
        _classCallCheck(this, TableCheckbox);
        this.dt = dt;
        this.tableService = tableService;
        this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
          _this30.checked = _this30.dt.isSelected(_this30.value);
        });
      }
      return _createClass(TableCheckbox, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checked = this.dt.isSelected(this.value);
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          if (!this.disabled) {
            this.dt.toggleRowWithCheckbox({
              originalEvent: event,
              rowIndex: this.index
            }, this.value);
          }
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].clearSelection();
        }
      }, {
        key: "onFocus",
        value: function onFocus() {
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.boxViewChild.nativeElement, 'ui-state-focus');
        }
      }, {
        key: "onBlur",
        value: function onBlur() {
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.boxViewChild.nativeElement, 'ui-state-focus');
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);
    }();
    TableCheckbox.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: TableService
      }];
    };
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableCheckbox.prototype, "disabled", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableCheckbox.prototype, "value", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableCheckbox.prototype, "index", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableCheckbox.prototype, "inputId", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableCheckbox.prototype, "name", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableCheckbox.prototype, "required", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableCheckbox.prototype, "ariaLabel", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('box')], TableCheckbox.prototype, "boxViewChild", void 0);
    TableCheckbox = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'p-tableCheckbox',
      template: "\n        <div class=\"ui-chkbox ui-widget\" (click)=\"onClick($event)\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input type=\"checkbox\" [attr.id]=\"inputId\" [attr.name]=\"name\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\" [disabled]=\"disabled\"\n                [attr.required]=\"required\" [attr.aria-label]=\"ariaLabel\">\n            </div>\n            <div #box [ngClass]=\"{'ui-chkbox-box ui-widget ui-state-default':true,\n                'ui-state-active':checked, 'ui-state-disabled':disabled}\" role=\"checkbox\" [attr.aria-checked]=\"checked\">\n                <span class=\"ui-chkbox-icon ui-clickable\" [ngClass]=\"{'pi pi-check':checked}\"></span>\n            </div>\n        </div>\n    "
    })], TableCheckbox);
    var TableHeaderCheckbox = /*#__PURE__*/function () {
      function TableHeaderCheckbox(dt, tableService) {
        var _this31 = this;
        _classCallCheck(this, TableHeaderCheckbox);
        this.dt = dt;
        this.tableService = tableService;
        this.valueChangeSubscription = this.dt.tableService.valueSource$.subscribe(function () {
          _this31.checked = _this31.updateCheckedState();
        });
        this.selectionChangeSubscription = this.dt.tableService.selectionSource$.subscribe(function () {
          _this31.checked = _this31.updateCheckedState();
        });
      }
      return _createClass(TableHeaderCheckbox, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checked = this.updateCheckedState();
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          if (!this.disabled) {
            if (this.dt.value && this.dt.value.length > 0) {
              this.dt.toggleRowsWithCheckbox(event, !this.checked);
            }
          }
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].clearSelection();
        }
      }, {
        key: "onFocus",
        value: function onFocus() {
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.boxViewChild.nativeElement, 'ui-state-focus');
        }
      }, {
        key: "onBlur",
        value: function onBlur() {
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.boxViewChild.nativeElement, 'ui-state-focus');
        }
      }, {
        key: "isDisabled",
        value: function isDisabled() {
          return this.disabled || !this.dt.value || !this.dt.value.length;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.selectionChangeSubscription) {
            this.selectionChangeSubscription.unsubscribe();
          }
          if (this.valueChangeSubscription) {
            this.valueChangeSubscription.unsubscribe();
          }
        }
      }, {
        key: "updateCheckedState",
        value: function updateCheckedState() {
          if (this.dt.filteredValue) {
            var val = this.dt.filteredValue;
            return val && val.length > 0 && this.dt.selection && this.dt.selection.length > 0 && this.isAllFilteredValuesChecked();
          } else {
            var _val = this.dt.value;
            return _val && _val.length > 0 && this.dt.selection && this.dt.selection.length > 0 && this.dt.selection.length === _val.length;
          }
        }
      }, {
        key: "isAllFilteredValuesChecked",
        value: function isAllFilteredValuesChecked() {
          if (!this.dt.filteredValue) {
            return false;
          } else {
            var _iterator6 = _createForOfIteratorHelper(this.dt.filteredValue),
              _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var rowData = _step6.value;
                if (!this.dt.isSelected(rowData)) {
                  return false;
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
            return true;
          }
        }
      }]);
    }();
    TableHeaderCheckbox.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: TableService
      }];
    };
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('box')], TableHeaderCheckbox.prototype, "boxViewChild", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableHeaderCheckbox.prototype, "disabled", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableHeaderCheckbox.prototype, "inputId", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableHeaderCheckbox.prototype, "name", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableHeaderCheckbox.prototype, "ariaLabel", void 0);
    TableHeaderCheckbox = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'p-tableHeaderCheckbox',
      template: "\n        <div class=\"ui-chkbox ui-widget\" (click)=\"onClick($event)\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #cb type=\"checkbox\" [attr.id]=\"inputId\" [attr.name]=\"name\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\"\n                [disabled]=\"isDisabled()\" [attr.aria-label]=\"ariaLabel\">\n            </div>\n            <div #box [ngClass]=\"{'ui-chkbox-box ui-widget ui-state-default':true,\n                'ui-state-active':checked, 'ui-state-disabled': isDisabled()}\" role=\"checkbox\" [attr.aria-checked]=\"checked\">\n                <span class=\"ui-chkbox-icon ui-clickable\" [ngClass]=\"{'pi pi-check':checked}\"></span>\n            </div>\n        </div>\n    "
    })], TableHeaderCheckbox);
    var ReorderableRowHandle = /*#__PURE__*/function () {
      function ReorderableRowHandle(el) {
        _classCallCheck(this, ReorderableRowHandle);
        this.el = el;
      }
      return _createClass(ReorderableRowHandle, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.el.nativeElement, 'ui-table-reorderablerow-handle');
        }
      }]);
    }();
    ReorderableRowHandle.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pReorderableRowHandle")], ReorderableRowHandle.prototype, "index", void 0);
    ReorderableRowHandle = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
      selector: '[pReorderableRowHandle]'
    })], ReorderableRowHandle);
    var ReorderableRow = /*#__PURE__*/function () {
      function ReorderableRow(dt, el, zone) {
        _classCallCheck(this, ReorderableRow);
        this.dt = dt;
        this.el = el;
        this.zone = zone;
      }
      return _createClass(ReorderableRow, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.isEnabled()) {
            this.el.nativeElement.droppable = true;
            this.bindEvents();
          }
        }
      }, {
        key: "bindEvents",
        value: function bindEvents() {
          var _this32 = this;
          this.zone.runOutsideAngular(function () {
            _this32.mouseDownListener = _this32.onMouseDown.bind(_this32);
            _this32.el.nativeElement.addEventListener('mousedown', _this32.mouseDownListener);
            _this32.dragStartListener = _this32.onDragStart.bind(_this32);
            _this32.el.nativeElement.addEventListener('dragstart', _this32.dragStartListener);
            _this32.dragEndListener = _this32.onDragEnd.bind(_this32);
            _this32.el.nativeElement.addEventListener('dragend', _this32.dragEndListener);
            _this32.dragOverListener = _this32.onDragOver.bind(_this32);
            _this32.el.nativeElement.addEventListener('dragover', _this32.dragOverListener);
            _this32.dragLeaveListener = _this32.onDragLeave.bind(_this32);
            _this32.el.nativeElement.addEventListener('dragleave', _this32.dragLeaveListener);
          });
        }
      }, {
        key: "unbindEvents",
        value: function unbindEvents() {
          if (this.mouseDownListener) {
            document.removeEventListener('mousedown', this.mouseDownListener);
            this.mouseDownListener = null;
          }
          if (this.dragStartListener) {
            document.removeEventListener('dragstart', this.dragStartListener);
            this.dragStartListener = null;
          }
          if (this.dragEndListener) {
            document.removeEventListener('dragend', this.dragEndListener);
            this.dragEndListener = null;
          }
          if (this.dragOverListener) {
            document.removeEventListener('dragover', this.dragOverListener);
            this.dragOverListener = null;
          }
          if (this.dragLeaveListener) {
            document.removeEventListener('dragleave', this.dragLeaveListener);
            this.dragLeaveListener = null;
          }
        }
      }, {
        key: "onMouseDown",
        value: function onMouseDown(event) {
          if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(event.target, 'ui-table-reorderablerow-handle')) this.el.nativeElement.draggable = true;else this.el.nativeElement.draggable = false;
        }
      }, {
        key: "onDragStart",
        value: function onDragStart(event) {
          this.dt.onRowDragStart(event, this.index);
        }
      }, {
        key: "onDragEnd",
        value: function onDragEnd(event) {
          this.dt.onRowDragEnd(event);
          this.el.nativeElement.draggable = false;
        }
      }, {
        key: "onDragOver",
        value: function onDragOver(event) {
          this.dt.onRowDragOver(event, this.index, this.el.nativeElement);
          event.preventDefault();
        }
      }, {
        key: "onDragLeave",
        value: function onDragLeave(event) {
          this.dt.onRowDragLeave(event, this.el.nativeElement);
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.pReorderableRowDisabled !== true;
        }
      }, {
        key: "onDrop",
        value: function onDrop(event) {
          if (this.isEnabled() && this.dt.rowDragging) {
            this.dt.onRowDrop(event, this.el.nativeElement);
          }
          event.preventDefault();
        }
      }]);
    }();
    ReorderableRow.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pReorderableRow")], ReorderableRow.prototype, "index", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], ReorderableRow.prototype, "pReorderableRowDisabled", void 0);
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('drop', ['$event'])], ReorderableRow.prototype, "onDrop", null);
    ReorderableRow = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
      selector: '[pReorderableRow]'
    })], ReorderableRow);
    var TableModule = /*#__PURE__*/_createClass(function TableModule() {
      _classCallCheck(this, TableModule);
    });
    TableModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_paginator__WEBPACK_IMPORTED_MODULE_3__["PaginatorModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"]],
      exports: [Table, primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], SortableColumn, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"]],
      declarations: [Table, SortableColumn, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, TableBody, ScrollableView, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow]
    })], TableModule);

    /**
     * Generated bundle index. Do not edit.
     */

    //# sourceMappingURL=primeng-table.js.map

    /***/
  })
}]);
//# sourceMappingURL=default~database-database-module~function-function-module~schema-schema-module~table-table-module~tr~1a72d205-es5.js.map