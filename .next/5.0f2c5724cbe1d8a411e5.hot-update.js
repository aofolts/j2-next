webpackHotUpdate(5,{

/***/ "./parts/Wrapper.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("./config.js");

var _jsxFileName = "/Users/aofolts/GitHub/j2-next/parts/Wrapper.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Wrapper = function Wrapper(Child) {
  return (
    /*#__PURE__*/
    function (_Component) {
      _inherits(_class, _Component);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "render",
        value: function render() {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Child, _extends({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          }));
        }
      }], [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = _asyncToGenerator(
          /*#__PURE__*/
          __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(context) {
            var _context$query, slug, apiRoute, siteRes, site, menuRes, menu, postUrl, postRes, post, err;

            return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context$query = context.query, slug = _context$query.slug, apiRoute = _context$query.apiRoute; // Site Data

                    _context.next = 3;
                    return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* config */].api.restUrl);

                  case 3:
                    siteRes = _context.sent;
                    _context.next = 6;
                    return siteRes.json();

                  case 6:
                    site = _context.sent;
                    console.log("".concat(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* config */].api.restUrl, "/js/v1/menu/2")); // Menu Data

                    _context.next = 10;
                    return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()("".concat(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* config */].api.restUrl, "/j2/v1/menu/2"));

                  case 10:
                    menuRes = _context.sent;
                    _context.next = 13;
                    return menuRes.json();

                  case 13:
                    menu = _context.sent;
                    // Post Url
                    postUrl = "".concat(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* config */].api.wpRestUrl, "/").concat(apiRoute, "/");

                    if (slug) {
                      postUrl += "?slug=".concat(slug);
                    } // Post Data


                    _context.next = 18;
                    return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()(postUrl);

                  case 18:
                    postRes = _context.sent;
                    _context.next = 21;
                    return postRes.json().then(function (r) {
                      return Array.isArray(r) ? r[0] : r;
                    });

                  case 21:
                    post = _context.sent;

                    if (post) {
                      _context.next = 26;
                      break;
                    }

                    err = new Error();
                    err.code = 'ENOENT';
                    throw err;

                  case 26:
                    return _context.abrupt("return", Child.getInitialProps({
                      post: post,
                      menu: menu,
                      context: context.apiRoute,
                      query: context.query
                    }));

                  case 27:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function getInitialProps(_x) {
            return _getInitialProps.apply(this, arguments);
          };
        }()
      }]);

      return _class;
    }(__WEBPACK_IMPORTED_MODULE_1_react__["Component"])
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Wrapper);

/***/ })

})
//# sourceMappingURL=5.0f2c5724cbe1d8a411e5.hot-update.js.map