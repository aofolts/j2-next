webpackHotUpdate(5,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parts_Header__ = __webpack_require__("./parts/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parts_Wrap__ = __webpack_require__("./parts/Wrap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__parts_WpImage__ = __webpack_require__("./parts/WpImage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__parts_Button__ = __webpack_require__("./parts/Button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__parts_Section__ = __webpack_require__("./parts/Section.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__parts_Slider__ = __webpack_require__("./parts/Slider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config__ = __webpack_require__("./config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__parts_FeaturedTabs__ = __webpack_require__("./parts/FeaturedTabs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__parts_Video__ = __webpack_require__("./parts/Video.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__parts_Layout__ = __webpack_require__("./parts/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__parts_BlogCard__ = __webpack_require__("./parts/BlogCard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_less_home_less__ = __webpack_require__("./src/less/home.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_less_home_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__src_less_home_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__parts_Wrapper__ = __webpack_require__("./parts/Wrapper.js");

var _jsxFileName = "/Users/aofolts/GitHub/j2-next/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















var IntroSection = function IntroSection(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
    id: "section-intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__parts_Wrap__["a" /* default */], {
    width: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, props.fields.headline), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "copy",
    dangerouslySetInnerHTML: {
      __html: props.fields.copy
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  })));
};

var VideoSection = function VideoSection(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__parts_Section__["a" /* default */], {
    name: "video",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__parts_Wrap__["a" /* default */], {
    width: "medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__parts_Video__["a" /* default */], {
    videoKey: "44662050",
    host: "vimeo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  })));
};

var MenusSection = function MenusSection(props) {
  var fields = props.fields;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__parts_Section__["a" /* default */], {
    name: "menus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__parts_Wrap__["a" /* default */], {
    width: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, fields.headline), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "copy",
    dangerouslySetInnerHTML: {
      __html: fields.copy
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__parts_Wrap__["a" /* default */], {
    width: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "grid-menus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, fields.list.map(function (post) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_next_link___default.a, {
      href: "/".concat(post.slug),
      key: post.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      className: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__parts_WpImage__["a" /* default */], {
      className: "background",
      data: post.featured_image,
      size: "medium",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      }
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      }
    }, post.title.rendered)));
  }))));
};

var CommunitySection = function CommunitySection(props) {
  var fields = props.fields;
  console.log(fields);
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__parts_Section__["a" /* default */], {
    name: "community",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__parts_Wrap__["a" /* default */], {
    width: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, fields.headline), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "copy",
    dangerouslySetInnerHTML: {
      __html: fields.copy
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__parts_Wrap__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "grid-community",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, fields.list.map(function (post) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__parts_BlogCard__["a" /* default */], {
      key: post.id,
      post: post,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      }
    });
  }))));
};

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      console.log(this.props);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__parts_Layout__["a" /* default */], _extends({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__parts_Slider__["a" /* default */], {
        slides: this.props.slides,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(IntroSection, {
        fields: this.props.introFields,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__parts_Section__["a" /* default */], {
        name: "featured_tabs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__parts_Wrap__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__parts_FeaturedTabs__["a" /* default */], {
        hours: this.props.hours,
        location: this.props.location,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(VideoSection, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(MenusSection, {
        fields: this.props.featuredMenus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CommunitySection, {
        fields: this.props.blog,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(props) {
        var post, slides, locationRes, location, hours, featuredMenus, blogsRes, blogs;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                post = props.post; // Hero Slides

                _context3.next = 3;
                return Promise.all(post.acf.hero_slides.map(
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(postId) {
                    var res;
                    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()("".concat(__WEBPACK_IMPORTED_MODULE_9__config__["a" /* config */].api.wpRestUrl, "/slides/") + postId + '?_embed');

                          case 2:
                            res = _context.sent;
                            return _context.abrupt("return", res.json());

                          case 4:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));

                  return function (_x2) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 3:
                slides = _context3.sent;
                _context3.next = 6;
                return __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()("".concat(__WEBPACK_IMPORTED_MODULE_9__config__["a" /* config */].api.restUrl, "/acf/v3/options/location"));

              case 6:
                locationRes = _context3.sent;
                _context3.next = 9;
                return locationRes.json();

              case 9:
                location = _context3.sent;
                _context3.next = 12;
                return location.acf.hours;

              case 12:
                hours = _context3.sent;
                featuredMenus = {
                  headline: post.acf.menus.headline,
                  copy: post.acf.menus.copy
                };
                _context3.next = 16;
                return Promise.all(post.acf.menus.list.map(
                /*#__PURE__*/
                function () {
                  var _ref2 = _asyncToGenerator(
                  /*#__PURE__*/
                  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(postId) {
                    var res;
                    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()("".concat(__WEBPACK_IMPORTED_MODULE_9__config__["a" /* config */].api.wpRestUrl, "/pages/") + postId + '?_embed');

                          case 2:
                            res = _context2.sent;
                            return _context2.abrupt("return", res.json());

                          case 4:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this);
                  }));

                  return function (_x3) {
                    return _ref2.apply(this, arguments);
                  };
                }()));

              case 16:
                featuredMenus.list = _context3.sent;
                _context3.next = 19;
                return __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()("".concat(__WEBPACK_IMPORTED_MODULE_9__config__["a" /* config */].api.wpRestUrl, "/blog/?per_page=3"));

              case 19:
                blogsRes = _context3.sent;
                _context3.t0 = post.acf.community.headline;
                _context3.t1 = post.acf.community.copy;
                _context3.next = 24;
                return blogsRes.json();

              case 24:
                _context3.t2 = _context3.sent;
                _context3.next = 27;
                return {
                  headline: _context3.t0,
                  copy: _context3.t1,
                  list: _context3.t2
                };

              case 27:
                blogs = _context3.sent;
                return _context3.abrupt("return", _objectSpread({}, props, {
                  slides: slides,
                  hours: hours,
                  introFields: post.acf.intro,
                  location: location.acf,
                  featuredMenus: featuredMenus,
                  blog: blogs
                }));

              case 29:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_16__parts_Wrapper__["a" /* default */])(Index));
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

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
//# sourceMappingURL=5.f92a8f37995d474e1936.hot-update.js.map