"use strict";(self.webpackChunklife_restart=self.webpackChunklife_restart||[]).push([[297],{8297:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Main)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8304);\n/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(489);\n/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2419);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2526);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1817);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1539);\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2165);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6992);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8783);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3948);\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar Main = /*#__PURE__*/function (_ui$view$DefaultTheme) {\n  _inherits(Main, _ui$view$DefaultTheme);\n\n  var _super = _createSuper(Main);\n\n  function Main() {\n    var _this;\n\n    _classCallCheck(this, Main);\n\n    _this = _super.call(this);\n\n    _this.btnRemake.on(Laya.Event.CLICK, _assertThisInitialized(_this), function () {\n      return $ui.switchView(UI.pages.MODE);\n    });\n\n    _this.btnAchievement.on(Laya.Event.CLICK, _assertThisInitialized(_this), function () {\n      return $ui.switchView(UI.pages.ACHIEVEMENT);\n    });\n\n    _this.btnThanks.on(Laya.Event.CLICK, _assertThisInitialized(_this), function () {\n      return $ui.switchView(UI.pages.THANKS);\n    });\n\n    _this.btnGithub.on(Laya.Event.CLICK, _assertThisInitialized(_this), goto, [\'github\']);\n\n    _this.btnDiscord.on(Laya.Event.CLICK, _assertThisInitialized(_this), goto, [\'discord\']);\n\n    _this.btnThemes.on(Laya.Event.CLICK, _assertThisInitialized(_this), function () {\n      return $ui.showDialog(UI.pages.THEMES);\n    });\n\n    _this.btnSaveLoad.on(Laya.Event.CLICK, _assertThisInitialized(_this), function () {\n      return $ui.showDialog(UI.pages.SAVELOAD);\n    });\n\n    return _this;\n  }\n\n  _createClass(Main, [{\n    key: "init",\n    value: function init() {\n      this.btnDiscord.visible = this.btnAchievement.visible = this.btnThanks.visible = !!core.times;\n      var text = this.labSubTitle.text;\n      this.labSubTitle.text = \' \';\n      this.labSubTitle.text = text;\n    }\n  }], [{\n    key: "load",\n    value: function load() {\n      return ["images/atlas/images/icons.atlas"];\n    }\n  }]);\n\n  return Main;\n}(ui.view.DefaultTheme.MainUI);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODI5Ny5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUNBO0FBQUE7O0FBQUE7O0FBQ0E7O0FBQ0E7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTs7QUFSQTtBQVNBOzs7O0FBUUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFiQTtBQUNBO0FBR0E7Ozs7QUFoQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWZlX3Jlc3RhcnQvLi9zcmMvdWkvdGhlbWVzL2RlZmF1bHQvbWFpbi5qcz9iMjNmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyB1aS52aWV3LkRlZmF1bHRUaGVtZS5NYWluVUkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmJ0blJlbWFrZS5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKT0+JHVpLnN3aXRjaFZpZXcoVUkucGFnZXMuTU9ERSkpO1xyXG4gICAgICAgIHRoaXMuYnRuQWNoaWV2ZW1lbnQub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCk9PiR1aS5zd2l0Y2hWaWV3KFVJLnBhZ2VzLkFDSElFVkVNRU5UKSk7XHJcbiAgICAgICAgdGhpcy5idG5UaGFua3Mub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCk9PiR1aS5zd2l0Y2hWaWV3KFVJLnBhZ2VzLlRIQU5LUykpO1xyXG4gICAgICAgIHRoaXMuYnRuR2l0aHViLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsIGdvdG8sIFsnZ2l0aHViJ10pO1xyXG4gICAgICAgIHRoaXMuYnRuRGlzY29yZC5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCBnb3RvLCBbJ2Rpc2NvcmQnXSk7XHJcbiAgICAgICAgdGhpcy5idG5UaGVtZXMub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCk9PiR1aS5zaG93RGlhbG9nKFVJLnBhZ2VzLlRIRU1FUykpO1xyXG4gICAgICAgIHRoaXMuYnRuU2F2ZUxvYWQub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCk9PiR1aS5zaG93RGlhbG9nKFVJLnBhZ2VzLlNBVkVMT0FEKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvYWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgXCJpbWFnZXMvYXRsYXMvaW1hZ2VzL2ljb25zLmF0bGFzXCIsXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5idG5EaXNjb3JkLnZpc2libGUgPVxyXG4gICAgICAgIHRoaXMuYnRuQWNoaWV2ZW1lbnQudmlzaWJsZSA9XHJcbiAgICAgICAgdGhpcy5idG5UaGFua3MudmlzaWJsZSA9ICEhY29yZS50aW1lcztcclxuICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5sYWJTdWJUaXRsZS50ZXh0O1xyXG4gICAgICAgIHRoaXMubGFiU3ViVGl0bGUudGV4dCA9ICcgJztcclxuICAgICAgICB0aGlzLmxhYlN1YlRpdGxlLnRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8297\n')}}]);