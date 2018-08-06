webpackHotUpdate(5,{

/***/ "./parts/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_less_header_less__ = __webpack_require__("./src/less/header.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_less_header_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_less_header_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HeaderScript__ = __webpack_require__("./parts/HeaderScript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MainMenu__ = __webpack_require__("./parts/MainMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__parts_HeaderContext__ = __webpack_require__("./parts/HeaderContext.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__parts_MobileMenu__ = __webpack_require__("./parts/MobileMenu.js");
var _jsxFileName = "/Users/aofolts/GitHub/j2-next/parts/Header.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







/**
 * HEADER
 */

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    var boundMethods = ['checkIsMobile', 'closeMobileMenu', 'getHeaderClass', 'getMobileMenu', 'openMobileMenu', 'setActiveSubMenuById', 'watchWindow'];
    boundMethods.forEach(function (method) {
      return _this[method] = _this[method].bind(_assertThisInitialized(_this));
    });
    _this.state = {
      activeSubMenuId: false,
      isMobile: false,
      mobileMenuIsOpen: false,
      closeMobileMenu: _this.closeMobileMenu,
      openMobileMenu: _this.openMobileMenu,
      setActiveSubMenuById: _this.setActiveSubMenuById
    };
    return _this;
  }

  _createClass(Header, [{
    key: "checkIsMobile",
    value: function checkIsMobile() {
      var width = window.outerWidth,
          isMobile = width < 1280 || false;

      if (isMobile !== this.state.isMobile) {
        this.setState({
          isMobile: isMobile
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkIsMobile();
      this.watchWindow();

      __webpack_require__("./parts/HeaderScript.js");

      var Script = new __WEBPACK_IMPORTED_MODULE_2__HeaderScript__["default"]();
    }
  }, {
    key: "closeMobileMenu",
    value: function closeMobileMenu() {
      this.setState({
        activeSubMenuId: false,
        mobileMenuIsOpen: false
      });
    }
  }, {
    key: "getHeaderClass",
    value: function getHeaderClass() {
      if (this.state.isMobile) {
        return 'is-mobile';
      } else {
        return 'not-mobile';
      }
    }
  }, {
    key: "getMobileMenu",
    value: function getMobileMenu() {
      var _this2 = this;

      if (this.state.isMobile) {
        var openClass = this.state.mobileMenuIsOpen ? 'is-open' : 'is-closed';
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__parts_HeaderContext__["a" /* HeaderContext */].Provider, {
          value: this.state,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__parts_MobileMenu__["a" /* default */], {
          openClass: openClass,
          menu: this.props.menu,
          closeMobileMenu: function closeMobileMenu() {
            return _this2.closeMobileMenu();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "toggle",
          onClick: this.openMobileMenu,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "bar bar-top",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "bar bar-middle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "bar bar-bottom",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        })));
      } else {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__parts_HeaderContext__["a" /* HeaderContext */].Provider, {
          value: this.state,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__MainMenu__["a" /* default */], {
          items: this.props.menu,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }));
      }
    }
  }, {
    key: "openMobileMenu",
    value: function openMobileMenu() {
      this.setState({
        mobileMenuIsOpen: true
      });
    }
  }, {
    key: "setActiveSubMenuById",
    value: function setActiveSubMenuById(id) {
      this.setState({
        activeSubMenuId: id
      });
    }
  }, {
    key: "watchWindow",
    value: function watchWindow() {
      var _this3 = this;

      window.addEventListener('resize', function (e) {
        _this3.checkIsMobile();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
        id: "header",
        className: this.getHeaderClass(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
        id: "nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_link___default.a, {
        href: {
          pathname: '/',
          query: {
            slug: 'home',
            apiRoute: 'pages'
          }
        },
        as: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        id: "site_name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        id: "siteLogo",
        src: "/static/img/logo-inline.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }))), this.getMobileMenu()));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=5.84bc1929976138949e0c.hot-update.js.map