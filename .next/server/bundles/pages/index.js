module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var dev = "production" !== 'production',
    liveBackendUrl = 'http://api.joesquared.com',
    liveUrl = 'https://www.joesquared.com',
    devUrl = 'http://localhost/joesquared.com',
    devFrontendUrl = 'http://localhost:3000',
    backendUrl = dev ? devUrl : liveBackendUrl,
    url = dev ? devFrontendUrl : liveUrl,
    restUrl = backendUrl + '/wp-json',
    wpRestUrl = restUrl + '/wp/v2';
var config = {
  url: url,
  api: {
    restUrl: restUrl,
    wpRestUrl: wpRestUrl,
    url: backendUrl
  },
  getPostSlug: function getPostSlug(url) {
    return url.replace(backendUrl, '');
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Image; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_visibility_sensor__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_visibility_sensor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_visibility_sensor__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var Image =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Image, _React$Component);

  function Image(props) {
    var _this;

    _classCallCheck(this, Image);

    _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, props));
    var boundMethods = ['getSrcset', 'loadImage', 'checkVisibility'];
    boundMethods.forEach(function (method) {
      return _this[method] = _this[method].bind(_assertThisInitialized(_this));
    });
    var image = props.data;
    _this.image = image;
    _this.sizes = image.sizes;
    _this.loadType = props.loadType;
    _this.loaded = false;

    if (props.loadType === 'manual') {
      console.log('manual');
      console.log(image);
    }

    _this.state = {
      src: image.sizes.lowres.url,
      srcSet: null
    };
    return _this;
  }

  _createClass(Image, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      if (props.loaded) {
        this.loadImage();
      }
    }
  }, {
    key: "checkVisibility",
    value: function checkVisibility(isVisible) {
      if (isVisible) {
        this.loadImage();
        this.setState({
          loaded: true
        });
      }
    }
  }, {
    key: "getSrcset",
    value: function getSrcset() {
      var _this2 = this;

      return Object.keys(this.sizes).map(function (key) {
        var size = _this2.sizes[key];
        return "".concat(size.url, " ").concat(size.width, "w");
      }).join(', ');
    }
  }, {
    key: "loadImage",
    value: function loadImage() {
      this.setState({
        srcSet: this.getSrcset()
      });
    }
  }, {
    key: "render",
    value: function render() {
      var image = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        id: this.props.id,
        className: this.props.className,
        src: this.state.src,
        srcSet: this.state.srcSet
      });

      if (this.loadType === 'auto' || this.state.loaded === true) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_visibility_sensor___default.a, {
          onChange: this.checkVisibility,
          partialVisibility: true
        }, image);
      }

      return image;
    }
  }]);

  return Image;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);


Image.defaultProps = {
  loadType: 'auto',
  loaded: false
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderScript; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HeaderScript =
/*#__PURE__*/
function () {
  function HeaderScript() {
    _classCallCheck(this, HeaderScript);

    this.$header = document.querySelector('#header');
    this.$nav = document.querySelector('#nav');
    this.lastScroll = 0, this.scrollDir = null;
    this.logScroll = this.logScroll.bind(this);
    this.watchHeader = this.watchHeader.bind(this);
    this.watchScroll();
    this.watchHeader();
  }

  _createClass(HeaderScript, [{
    key: "watchScroll",
    value: function watchScroll() {
      var _this = this;

      window.addEventListener('scroll', function () {
        _this.logScroll();

        _this.watchHeader();
      });
    }
  }, {
    key: "logScroll",
    value: function logScroll() {
      var st = window.pageYOffset;

      if (st > this.lastScroll) {
        this.scrollDir = 'down';
      } else {
        this.scrollDir = 'up';
      }

      this.lastScroll = st;
    }
  }, {
    key: "watchHeader",
    value: function watchHeader() {
      var y = window.pageYOffset,
          headerHeight = this.$header.offsetHeight; // Dock the header

      if (y <= headerHeight) {
        this.$header.classList.remove('is-scrolling');
        this.$header.style.top = -y + 'px';
      } else {
        this.$header.classList.add('is-scrolling');
      } // Switch to compact nav layout


      if (y > headerHeight) {
        this.$header.classList.add('is-compact');
      } else {
        this.$header.classList.remove('is-compact');
      } // Put the header up (scrolling up)


      if (y < 500 && y > headerHeight + 100 && this.scrollDir == 'up') {
        this.putHeaderUp();
      } // Put the header down (scrolling up)


      if (y > 500 && this.scrollDir == 'up') {
        this.putHeaderDown();
      }
    } // Slides header into view

  }, {
    key: "putHeaderDown",
    value: function putHeaderDown() {
      this.$header.style.top = -this.$header.offsetHeight + this.$nav.offsetHeight + 'px';
    } // Slides header out of view

  }, {
    key: "putHeaderUp",
    value: function putHeaderUp() {
      this.$header.style.top = -this.$header.offsetHeight + 'px';
    }
  }]);

  return HeaderScript;
}();



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wrap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Wrap =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Wrap, _React$Component);

  function Wrap(props) {
    var _this;

    _classCallCheck(this, Wrap);

    _this = _possibleConstructorReturn(this, (Wrap.__proto__ || Object.getPrototypeOf(Wrap)).call(this, props));
    _this.state = {
      selector: 'wrap wrap-' + props.width
    };
    return _this;
  }

  _createClass(Wrap, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: this.state.selector,
        style: this.state.style
      }, this.props.children);
    }
  }]);

  return Wrap;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);


Wrap.defaultProps = {
  width: 'main'
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./src/less/header.less
var header = __webpack_require__(11);
var header_default = /*#__PURE__*/__webpack_require__.n(header);

// EXTERNAL MODULE: ./parts/HeaderScript.js
var HeaderScript = __webpack_require__(6);

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(2);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./parts/HeaderContext.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var HeaderContext = external__react__default.a.createContext({
  isMobile: null,
  activeSubMenuId: false,
  closeMobileMenu: function closeMobileMenu() {},
  openMobileMenu: function openMobileMenu() {},
  getActiveSubMenuId: function getActiveSubMenuId() {},
  setActiveSubMenuId: function setActiveSubMenuId() {}
});

function withHeaderContext(Component) {
  return function (props) {
    return external__react__default.a.createElement(HeaderContext.Consumer, null, function (headerContext) {
      return external__react__default.a.createElement(Component, _extends({}, props, {
        headerContext: headerContext
      }));
    });
  };
}


// CONCATENATED MODULE: ./parts/MenuItem.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var MenuItem_MenuItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MenuItem, _React$Component);

  function MenuItem(props) {
    var _this;

    _classCallCheck(this, MenuItem);

    _this = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props));
    var boundMethods = ['getItemClass', 'getSubMenuToggle'];
    boundMethods.forEach(function (method) {
      return _this[method] = _this[method].bind(_assertThisInitialized(_this));
    });
    _this.item = props.item;
    _this.subMenu = props.item.sub_menu || [];
    return _this;
  }

  _createClass(MenuItem, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      this.setState({
        subMenuIsOpen: props.subMenuIsOpen,
        activeSubMenuId: props.activeSubMenuId
      });
    }
  }, {
    key: "getItemClass",
    value: function getItemClass() {
      var classes = ['item', 'item-primary'];
      return classes.join(' ');
    }
  }, {
    key: "getSubMenu",
    value: function getSubMenu() {
      if (this.subMenu) {
        var items = this.subMenu.map(function (item) {
          var slug = config["a" /* config */].getPostSlug(item.url),
              target = item.type == 'custom' ? '_blank' : null;
          var href = {
            pathname: slug,
            query: {
              slug: slug,
              apiRoute: 'pages'
            }
          };
          return external__react__default.a.createElement("li", {
            className: "item item-secondary",
            key: item.ID
          }, external__react__default.a.createElement(link__default.a, {
            href: href,
            as: slug,
            prefetch: true
          }, external__react__default.a.createElement("a", {
            className: "title-secondary",
            target: target
          }, item.title)));
        });
        console.log(this.props.headerContext.activeSubMenuId + ' ' + this.item.ID);
        var classes = ['sub_menu', this.props.headerContext.activeSubMenuId === this.item.ID ? 'is-active' : null].join(' ');
        return external__react__default.a.createElement("ul", {
          className: classes
        }, items);
      }

      return null;
    }
  }, {
    key: "getSubMenuToggle",
    value: function getSubMenuToggle() {
      var _this2 = this;

      if (this.subMenu.length > 0) {
        return external__react__default.a.createElement("div", {
          className: "sub_menu-toggle",
          onClick: function onClick() {
            return _this2.props.headerContext.setActiveSubMenuById(_this2.item.ID);
          }
        });
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var item = this.props.item;
      var subMenuClass = this.subMenu.length > 0 ? 'has-children' : null,
          itemClass = ['item item-primary', subMenuClass].join(' '),
          slug = item.url ? config["a" /* config */].getPostSlug(item.url) : null,
          target = item.type == 'custom' ? '_blank' : null;
      var link = slug ? external__react__default.a.createElement(link__default.a, {
        href: {
          pathname: slug,
          query: {
            slug: slug,
            apiRoute: "pages"
          }
        },
        as: slug
      }, external__react__default.a.createElement("a", {
        target: target
      }, item.title)) : external__react__default.a.createElement("a", null, item.title);
      return external__react__default.a.createElement("li", {
        className: itemClass
      }, external__react__default.a.createElement("div", {
        className: "title"
      }, link, this.getSubMenuToggle()), this.getSubMenu());
    }
  }]);

  return MenuItem;
}(external__react__default.a.Component);

/* harmony default export */ var parts_MenuItem = (withHeaderContext(MenuItem_MenuItem));
// CONCATENATED MODULE: ./parts/MainMenu.js


function MainMenu__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MainMenu__typeof = function _typeof(obj) { return typeof obj; }; } else { MainMenu__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MainMenu__typeof(obj); }

function MainMenu__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MainMenu__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MainMenu__createClass(Constructor, protoProps, staticProps) { if (protoProps) MainMenu__defineProperties(Constructor.prototype, protoProps); if (staticProps) MainMenu__defineProperties(Constructor, staticProps); return Constructor; }

function MainMenu__possibleConstructorReturn(self, call) { if (call && (MainMenu__typeof(call) === "object" || typeof call === "function")) { return call; } return MainMenu__assertThisInitialized(self); }

function MainMenu__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function MainMenu__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var MainMenu_MainMenu =
/*#__PURE__*/
function (_React$Component) {
  MainMenu__inherits(MainMenu, _React$Component);

  function MainMenu(props) {
    var _this;

    MainMenu__classCallCheck(this, MainMenu);

    _this = MainMenu__possibleConstructorReturn(this, (MainMenu.__proto__ || Object.getPrototypeOf(MainMenu)).call(this, props));
    var boundMethods = ['getMenuItems'];
    boundMethods.forEach(function (method) {
      return _this[method] = _this[method].bind(MainMenu__assertThisInitialized(_this));
    });
    return _this;
  }

  MainMenu__createClass(MainMenu, [{
    key: "getMenuItems",
    value: function getMenuItems() {
      return this.props.items.map(function (item) {
        return external__react__default.a.createElement(parts_MenuItem, {
          item: item,
          key: item.ID
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var showClass = this.props.headerContext.activeSubMenuId ? 'show-sub_menu' : null;
      return external__react__default.a.createElement("ul", {
        id: "menu",
        className: showClass
      }, this.getMenuItems());
    }
  }]);

  return MainMenu;
}(external__react__default.a.Component);

/* harmony default export */ var parts_MainMenu = (withHeaderContext(MainMenu_MainMenu));
// CONCATENATED MODULE: ./parts/MobileMenu.js
function MobileMenu__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MobileMenu__typeof = function _typeof(obj) { return typeof obj; }; } else { MobileMenu__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MobileMenu__typeof(obj); }

function MobileMenu__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MobileMenu__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MobileMenu__createClass(Constructor, protoProps, staticProps) { if (protoProps) MobileMenu__defineProperties(Constructor.prototype, protoProps); if (staticProps) MobileMenu__defineProperties(Constructor, staticProps); return Constructor; }

function MobileMenu__possibleConstructorReturn(self, call) { if (call && (MobileMenu__typeof(call) === "object" || typeof call === "function")) { return call; } return MobileMenu__assertThisInitialized(self); }

function MobileMenu__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function MobileMenu__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




/**
 * Icon
 * 
 * Closes mobile menu
 * OR
 * Exits current mobile sub menu
 */

var MobileMenuExit = withHeaderContext(function (props) {
  var _props$headerContext = props.headerContext,
      activeSubMenuId = _props$headerContext.activeSubMenuId,
      setActiveSubMenuId = _props$headerContext.setActiveSubMenuId,
      closeMobileMenu = _props$headerContext.closeMobileMenu;
  return external__react__default.a.createElement("div", {
    className: "exit",
    onClick: function onClick() {
      if (activeSubMenuId) {
        props.headerContext.setActiveSubMenuById(false);
      } else {
        closeMobileMenu();
      }
    }
  });
});
/**
 * Mobile Menu
 * 
 * Show on mobile devices
 */

var MobileMenu_MobileMenu =
/*#__PURE__*/
function (_React$Component) {
  MobileMenu__inherits(MobileMenu, _React$Component);

  function MobileMenu(props) {
    var _this;

    MobileMenu__classCallCheck(this, MobileMenu);

    _this = MobileMenu__possibleConstructorReturn(this, (MobileMenu.__proto__ || Object.getPrototypeOf(MobileMenu)).call(this, props));
    var boundMethods = [];
    boundMethods.forEach(function (method) {
      return _this[method] = _this[method].bind(MobileMenu__assertThisInitialized(_this));
    });
    _this.state = {
      openClass: props.openClass
    };
    return _this;
  }

  MobileMenu__createClass(MobileMenu, [{
    key: "render",
    value: function render() {
      var classes = [this.props.headerContext.mobileMenuIsOpen ? 'is-open' : null, this.props.headerContext.activeSubMenuId ? 'sub_menu-is-open' : null].join(' ');
      return external__react__default.a.createElement("div", {
        id: "menu-mobile",
        className: classes
      }, external__react__default.a.createElement(parts_MainMenu, {
        items: this.props.menu
      }), this.state.activeMenu, external__react__default.a.createElement(MobileMenuExit, null));
    }
  }]);

  return MobileMenu;
}(external__react__default.a.Component);

/* harmony default export */ var parts_MobileMenu = (withHeaderContext(MobileMenu_MobileMenu));
// CONCATENATED MODULE: ./parts/Header.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header_Header; });


function Header__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Header__typeof = function _typeof(obj) { return typeof obj; }; } else { Header__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Header__typeof(obj); }

function Header__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Header__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Header__createClass(Constructor, protoProps, staticProps) { if (protoProps) Header__defineProperties(Constructor.prototype, protoProps); if (staticProps) Header__defineProperties(Constructor, staticProps); return Constructor; }

function Header__possibleConstructorReturn(self, call) { if (call && (Header__typeof(call) === "object" || typeof call === "function")) { return call; } return Header__assertThisInitialized(self); }

function Header__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Header__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







/**
 * HEADER
 */

var Header_Header =
/*#__PURE__*/
function (_React$Component) {
  Header__inherits(Header, _React$Component);

  function Header(props) {
    var _this;

    Header__classCallCheck(this, Header);

    _this = Header__possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    var boundMethods = ['checkIsMobile', 'closeMobileMenu', 'getHeaderClass', 'getMobileMenu', 'openMobileMenu', 'setActiveSubMenuById', 'watchWindow'];
    boundMethods.forEach(function (method) {
      return _this[method] = _this[method].bind(Header__assertThisInitialized(_this));
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

  Header__createClass(Header, [{
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

      __webpack_require__(6);

      var Script = new HeaderScript["default"]();
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
        return external__react__default.a.createElement(HeaderContext.Provider, {
          value: this.state
        }, external__react__default.a.createElement(parts_MobileMenu, {
          openClass: openClass,
          menu: this.props.menu,
          closeMobileMenu: function closeMobileMenu() {
            return _this2.closeMobileMenu();
          }
        }), external__react__default.a.createElement("div", {
          className: "toggle",
          onClick: this.openMobileMenu
        }, external__react__default.a.createElement("div", {
          className: "bar bar-top"
        }), external__react__default.a.createElement("div", {
          className: "bar bar-middle"
        }), external__react__default.a.createElement("div", {
          className: "bar bar-bottom"
        })));
      } else {
        return external__react__default.a.createElement(HeaderContext.Provider, {
          value: this.state
        }, external__react__default.a.createElement(parts_MainMenu, {
          items: this.props.menu
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
      return external__react__default.a.createElement("header", {
        id: "header",
        className: this.getHeaderClass()
      }, external__react__default.a.createElement("nav", {
        id: "nav"
      }, external__react__default.a.createElement(link__default.a, {
        href: {
          pathname: '/',
          query: {
            slug: 'home',
            apiRoute: 'pages'
          }
        },
        as: "/"
      }, external__react__default.a.createElement("a", {
        id: "site_name"
      }, external__react__default.a.createElement("img", {
        id: "siteLogo",
        src: "/static/img/logo-inline.svg"
      }))), this.getMobileMenu()));
    }
  }]);

  return Header;
}(external__react__default.a.Component);



/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Section; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Section =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Section, _React$Component);

  function Section(props) {
    var _this;

    _classCallCheck(this, Section);

    _this = _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).call(this, props));
    _this.state = {
      id: 'section-' + props.name
    };
    return _this;
  }

  _createClass(Section, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        id: this.state.id
      }, this.props.children);
    }
  }]);

  return Section;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);


Section.defaultProps = {};

/***/ }),
/* 11 */
/***/ (function(module, exports) {



/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-visibility-sensor");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./parts/Header.js + 4 modules
var Header = __webpack_require__(8);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: ./parts/WpImage.js
var WpImage = __webpack_require__(4);

// EXTERNAL MODULE: ./parts/Section.js
var Section = __webpack_require__(10);

// EXTERNAL MODULE: ./parts/Wrap.js
var Wrap = __webpack_require__(7);

// CONCATENATED MODULE: ./parts/Footer.js






var Footer_NewsletterForm = function NewsletterForm(props) {
  return external__react__default.a.createElement("form", {
    action: "https://my.zenreach.com/api/widgets/submit_customer/",
    method: "post",
    encType: "application/x-www-form-urlencoded",
    target: "_blank"
  }, external__react__default.a.createElement("input", {
    type: "hidden",
    name: "business_id",
    value: "5a0b07627c331300095e165c"
  }), external__react__default.a.createElement("input", {
    type: "hidden",
    name: "tags",
    value: "website"
  }), external__react__default.a.createElement("div", {
    className: "field"
  }, external__react__default.a.createElement("label", {
    htmlFor: "footer-newsletter-name"
  }), external__react__default.a.createElement("input", {
    type: "text",
    id: "footer-newsletter-name",
    name: "fullname",
    placeholder: "Name"
  })), external__react__default.a.createElement("div", {
    className: "field"
  }, external__react__default.a.createElement("label", {
    htmlFor: "footer-newsletter-email"
  }), external__react__default.a.createElement("input", {
    type: "email",
    id: "footer-newsletter-email",
    name: "email",
    placeholder: "Email"
  })), external__react__default.a.createElement("button", {
    type: "submit",
    className: "submit"
  }, "Subscribe \u2192"));
};

var Footer_Newsletter = function Newsletter(props) {
  return external__react__default.a.createElement(Section["a" /* default */], {
    name: "footer-newsletter"
  }, external__react__default.a.createElement(Wrap["a" /* default */], {
    width: "medium"
  }, external__react__default.a.createElement("div", {
    className: "container-newsletter"
  }, external__react__default.a.createElement("div", {
    className: "content"
  }, external__react__default.a.createElement("h2", null, "Stay in the Know"), external__react__default.a.createElement("p", null, "Sign up for our weekly newsletter for the latest on upcoming shows, events, sweet deals, and tasty recipes from Joe. ")), external__react__default.a.createElement("div", {
    className: "form"
  }, external__react__default.a.createElement(Footer_NewsletterForm, null)))));
};

var Footer_FooterBar = function FooterBar(props) {
  var social = {
    facebook: {
      url: 'https://www.facebook.com/joesquared'
    },
    twitter: {
      url: 'https://twitter.com/joesquared'
    },
    instagram: {
      url: 'https://www.instagram.com/joesquaredpizza'
    }
  };
  var icons = Object.keys(social).map(function (platform) {
    return external__react__default.a.createElement("a", {
      className: "link",
      href: social[platform].url,
      target: "_blank"
    }, external__react__default.a.createElement("img", {
      className: "icon",
      alt: "".concat(platform, "-icon"),
      key: platform,
      src: "/static/img/icon-social-".concat(platform, ".svg")
    }));
  });
  return external__react__default.a.createElement("div", {
    id: "footer-bar"
  }, external__react__default.a.createElement("div", {
    id: "copyright",
    className: "item"
  }, "\xA92018 Joe Squared"), external__react__default.a.createElement("div", {
    id: "credit",
    className: "item"
  }, "Site by ", external__react__default.a.createElement(link__default.a, {
    href: "http://sherpadesign.co"
  }, external__react__default.a.createElement("a", {
    id: "credit-link"
  }, "Sherpa Design Co."))), external__react__default.a.createElement("div", {
    className: "item social"
  }, icons));
};

var Footer_Footer = function Footer(props) {
  return external__react__default.a.createElement("footer", {
    id: "footer"
  }, external__react__default.a.createElement(Footer_Newsletter, null), external__react__default.a.createElement(Footer_FooterBar, null));
};

/* harmony default export */ var parts_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./parts/Layout.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Layout_Layout =
/*#__PURE__*/
function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        id: "page"
      }, external__react__default.a.createElement(Header["a" /* default */], {
        menu: this.props.menu
      }), this.props.children, external__react__default.a.createElement(parts_Footer, null));
    }
  }]);

  return Layout;
}(external__react_["Component"]);

/* harmony default export */ var parts_Layout = __webpack_exports__["a"] = (Layout_Layout);

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(2);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

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
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Child, this.props);
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
                    _context.next = 9;
                    return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()("".concat(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* config */].api.restUrl, "/j2/v1/menu/2"));

                  case 9:
                    menuRes = _context.sent;
                    _context.next = 12;
                    return menuRes.json();

                  case 12:
                    menu = _context.sent;
                    // Post Url
                    postUrl = "".concat(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* config */].api.wpRestUrl, "/").concat(apiRoute, "/");

                    if (slug) {
                      postUrl += "?slug=".concat(slug);
                    } // Post Data


                    _context.next = 17;
                    return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()(postUrl);

                  case 17:
                    postRes = _context.sent;
                    _context.next = 20;
                    return postRes.json().then(function (r) {
                      return Array.isArray(r) ? r[0] : r;
                    });

                  case 20:
                    post = _context.sent;

                    if (post) {
                      _context.next = 25;
                      break;
                    }

                    err = new Error();
                    err.code = 'ENOENT';
                    throw err;

                  case 25:
                    return _context.abrupt("return", Child.getInitialProps({
                      post: post,
                      menu: menu,
                      context: context.apiRoute,
                      query: context.query
                    }));

                  case 26:
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

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Button =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));
    _this.state = {
      selector: 'button button-' + props.type
    };
    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: this.props.link
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: this.props.className
      }, this.props.label));
    }
  }]);

  return Button;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);


Button.defaultProps = {
  type: 'primary'
};

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Slider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Button__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parts_WpImage__ = __webpack_require__(4);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var Slide =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Slide, _React$Component);

  function Slide(props) {
    var _this;

    _classCallCheck(this, Slide);

    _this = _possibleConstructorReturn(this, (Slide.__proto__ || Object.getPrototypeOf(Slide)).call(this, props));
    _this.getSlideClass = _this.getSlideClass.bind(_assertThisInitialized(_this));
    _this.state = {
      slideClass: _this.getSlideClass()
    };
    return _this;
  }

  _createClass(Slide, [{
    key: "getSlideClass",
    value: function getSlideClass() {
      return 'slide ' + this.props.slideState;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      this.setState({
        slideClass: 'slide ' + props.slideState
      });
    }
  }, {
    key: "render",
    value: function render() {
      var slide = this.props.slide,
          image = slide.featured_image;
      var imageEl = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__parts_WpImage__["a" /* default */], {
        className: "background",
        data: image,
        size: "hero",
        loadType: "auto"
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: this.state.slideClass,
        key: slide.id,
        title: slide.title.rendered
      }, imageEl, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "content"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "headline"
      }, slide.acf.headline), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Buttons, {
        link: "test",
        fields: slide.acf
      })));
    }
  }]);

  return Slide;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var Buttons = function Buttons(props) {
  var buttons = [props.fields.button];

  if ('secondary_button' in props.fields) {
    buttons.push(props.fields.secondary_button);
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "buttons"
  }, buttons.map(function (button, i) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Button__["a" /* default */], {
      key: i,
      label: button.label,
      className: "button-primary button-".concat(i + 1),
      link: button.link
    });
  }));
};

var Slider =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Slider, _React$Component2);

  function Slider(props) {
    var _this2;

    _classCallCheck(this, Slider);

    _this2 = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));
    var boundMethods = ['advanceSlider', 'getNextSlideById', 'getPreviousSlideById', 'getSlideById', 'getSlideByIndex', 'getSlideElements', 'getSlideStateClassById', 'selectSlideById', 'startLoop'];
    boundMethods.forEach(function (method) {
      return _this2[method] = _this2[method].bind(_assertThisInitialized(_this2));
    });

    var slidesById = _this2.props.slides.reduce(function (obj, slide, i) {
      slide.index = i;
      obj[slide.id] = slide;
      return obj;
    }, {});

    var slideCount = _this2.props.slides.length;
    _this2.state = {
      slidesById: slidesById,
      slideCount: _this2.props.slides.length,
      previousSlide: slidesById[_this2.props.slides[slideCount - 2].id],
      currentSlide: slidesById[_this2.props.slides[slideCount - 1].id],
      nextSlide: slidesById[_this2.props.slides[0].id]
    };
    return _this2;
  }

  _createClass(Slider, [{
    key: "advanceSlider",
    value: function advanceSlider() {
      var newCurrent = this.state.nextSlide;
      this.setState({
        previousSlide: this.state.currentSlide,
        currentSlide: newCurrent,
        nextSlide: this.getNextSlideById(newCurrent.id)
      });
    }
  }, {
    key: "getNextSlideById",
    value: function getNextSlideById(id) {
      var i = this.state.slidesById[id].index + 1;

      if (i >= this.state.slideCount) {
        i = 0;
      }

      return this.getSlideByIndex(i);
    }
  }, {
    key: "getPreviousSlideById",
    value: function getPreviousSlideById(id) {
      var i = this.state.slidesById[id].index - 1;

      if (i < 0) {
        i = this.state.slideCount - 1;
      }

      return this.getSlideByIndex(i);
    }
  }, {
    key: "getSlideById",
    value: function getSlideById(id) {
      return this.state.slidesById[id];
    }
  }, {
    key: "getSlideByIndex",
    value: function getSlideByIndex(i) {
      var id = this.props.slides[i].id;
      return this.state.slidesById[id];
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startLoop();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopLoop();
    }
  }, {
    key: "getSlideElements",
    value: function getSlideElements() {
      var self = this;
      return self.props.slides.map(function (slide) {
        var stateClass = self.getSlideStateClassById(slide.id);
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Slide, {
          slide: slide,
          key: slide.id,
          slideState: stateClass
        });
      });
    }
  }, {
    key: "getSlideNav",
    value: function getSlideNav() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
        className: "nav"
      }, this.props.slides.map(function (slide) {
        var stateClass = _this3.getSlideStateClassById(slide.id);

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          key: slide.id,
          className: "item ".concat(stateClass),
          onClick: function onClick() {
            return _this3.selectSlideById(slide.id);
          },
          title: slide.title.rendered
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "icon"
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "title"
        }, slide.title.rendered));
      }));
    }
  }, {
    key: "getSlideStateClassById",
    value: function getSlideStateClassById(id) {
      var slideState = null;

      switch (id) {
        case this.state.previousSlide.id:
          slideState = 'previous';
          break;

        case this.state.currentSlide.id:
          slideState = 'current';
          break;

        default:
          slideState = 'inactive';
      }

      return 'is-' + slideState;
    }
  }, {
    key: "selectSlideById",
    value: function selectSlideById(id) {
      this.stopLoop();
      this.setState({
        previousSlide: this.state.currentSlide,
        currentSlide: this.getSlideById(id),
        nextSlide: this.getNextSlideById(id)
      });
    }
  }, {
    key: "startLoop",
    value: function startLoop() {
      var _this4 = this;

      this.advanceSlider();
      this.timer = setInterval(function () {
        _this4.advanceSlider();
      }, 4000);
    }
  }, {
    key: "stopLoop",
    value: function stopLoop() {
      clearTimeout(this.timer);
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        id: "slider"
      }, this.getSlideElements(), this.getSlideNav());
    }
  }]);

  return Slider;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturedTabs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var FeaturedTabs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FeaturedTabs, _React$Component);

  function FeaturedTabs(props) {
    var _this;

    _classCallCheck(this, FeaturedTabs);

    _this = _possibleConstructorReturn(this, (FeaturedTabs.__proto__ || Object.getPrototypeOf(FeaturedTabs)).call(this, props));
    _this.changeTab = _this.changeTab.bind(_assertThisInitialized(_this));
    var dotw = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    var date = new Date(),
        todayKey = date.toLocaleDateString('en-US', {
      weekday: 'long'
    }).toLowerCase();

    var HoursText = function HoursText(props) {
      var fields = props.fields,
          day = fields.day.charAt(0).toUpperCase() + fields.day.slice(1);

      if (fields.is_open) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "day"
        }, "".concat(day, ": ").concat(fields.opens, " - ").concat(fields.closes, "."));
      } else {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, day, ": Closed.");
      }
    };

    var hours = dotw.map(function (key) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        key: key,
        className: "day"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(HoursText, {
        fields: props.hours[key]
      }));
    });
    var openTable = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Book on ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
      target: "__blank",
      href: _this.props.location.open_table_link
    }, "Open Table"));
    var visit = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null, _this.props.location.address), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null, "Phone: ", _this.props.location.phone), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null, "Fax: ", _this.props.location.fax), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null, "More ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
      href: "/visit"
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
      target: "__blank"
    }, "Location Info"))));
    var items = [{
      title: 'Today',
      content: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(HoursText, {
        fields: props.hours[todayKey]
      })
    }, {
      title: 'Hours',
      content: hours
    }, {
      title: 'Visit',
      content: visit
    }, {
      title: 'Reserve a Table',
      content: openTable
    }];
    _this.state = {
      items: items,
      activeTab: 0,
      todayKey: todayKey
    };
    return _this;
  }

  _createClass(FeaturedTabs, [{
    key: "changeTab",
    value: function changeTab(index) {
      this.setState({
        activeTab: index
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "featured_sorter"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
        className: "nav"
      }, this.state.items.map(function (item, i) {
        var stateClass = null;

        if (i == _this2.state.activeTab) {
          stateClass = 'is-selected';
        }

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: 'item ' + stateClass,
          key: i,
          onClick: function onClick() {
            return _this2.changeTab(i);
          }
        }, item.title);
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "items"
      }, this.state.items.map(function (item, i) {
        var stateClass = null;

        if (i == _this2.state.activeTab) {
          stateClass = 'is-selected';
        }

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: 'item ' + stateClass,
          key: i
        }, item.content);
      })));
    }
  }]);

  return FeaturedTabs;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Video; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var Video =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Video, _React$Component);

  function Video(props) {
    var _this;

    _classCallCheck(this, Video);

    _this = _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).call(this, props));
    _this.getSrc = _this.getSrc.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Video, [{
    key: "getSrc",
    value: function getSrc() {
      var key = this.props.videoKey;

      switch (this.props.host) {
        case 'youtube':
          return "https://www.youtube.com/embed/".concat(key);
          break;

        case 'vimeo':
          return "https://player.vimeo.com/video/".concat(key, "?title=0&byline=0&portrait=0");
          break;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container-video"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("iframe", {
        className: "video",
        src: this.getSrc(),
        frameBorder: "0",
        allow: "autoplay; encrypted-media",
        allowFullScreen: true
      }));
    }
  }]);

  return Video;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parts_WpImage__ = __webpack_require__(4);




var BlogCard = function BlogCard(props) {
  var post = props.post;
  var href = {
    pathname: "/community/".concat(post.slug),
    query: {
      slug: post.slug,
      apiRoute: 'community'
    }
  };
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: href,
    as: "/community/".concat(post.slug)
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    key: post.id,
    className: "card-community"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "media"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__parts_WpImage__["a" /* default */], {
    className: "background",
    data: post.featured_image,
    size: "medium"
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "content"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "category"
  }, "Music"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    className: "title",
    dangerouslySetInnerHTML: {
      __html: post.title.rendered
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "p2 excerpt"
  }, post.acf.excerpt, "...", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "p2 link-text"
  }, "Read More"))));
};

/* harmony default export */ __webpack_exports__["a"] = (BlogCard);

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(43);


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parts_Header__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parts_Wrap__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__parts_WpImage__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__parts_Button__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__parts_Section__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__parts_Slider__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__parts_FeaturedTabs__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__parts_Video__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_next_link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__parts_Layout__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__parts_BlogCard__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_less_home_less__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_less_home_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__src_less_home_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__parts_Wrapper__ = __webpack_require__(17);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















var IntroSection = function IntroSection(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
    id: "section-intro"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__parts_Wrap__["a" /* default */], {
    width: "small"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", null, props.fields.headline), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "copy",
    dangerouslySetInnerHTML: {
      __html: props.fields.copy
    }
  })));
};

var VideoSection = function VideoSection(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__parts_Section__["a" /* default */], {
    name: "video"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__parts_Wrap__["a" /* default */], {
    width: "medium"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__parts_Video__["a" /* default */], {
    videoKey: "44662050",
    host: "vimeo"
  })));
};

var MenusSection = function MenusSection(props) {
  var fields = props.fields;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__parts_Section__["a" /* default */], {
    name: "menus"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "content"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__parts_Wrap__["a" /* default */], {
    width: "small"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", null, fields.headline), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "copy",
    dangerouslySetInnerHTML: {
      __html: fields.copy
    }
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__parts_Wrap__["a" /* default */], {
    width: "main"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "grid-menus"
  }, fields.list.map(function (post) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_next_link___default.a, {
      href: "/".concat(post.slug),
      key: post.id
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      className: "card"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__parts_WpImage__["a" /* default */], {
      className: "background",
      data: post.featured_image,
      size: "medium"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
      className: "title"
    }, post.title.rendered)));
  }))));
};

var CommunitySection = function CommunitySection(props) {
  var fields = props.fields;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__parts_Section__["a" /* default */], {
    name: "community"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__parts_Wrap__["a" /* default */], {
    width: "small"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", null, fields.headline), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "copy",
    dangerouslySetInnerHTML: {
      __html: fields.copy
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__parts_Wrap__["a" /* default */], null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "grid-community"
  }, fields.list.map(function (post) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__parts_BlogCard__["a" /* default */], {
      key: post.id,
      post: post
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
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "page"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__parts_Layout__["a" /* default */], this.props, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__parts_Slider__["a" /* default */], {
        slides: this.props.slides
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(IntroSection, {
        fields: this.props.introFields
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__parts_Section__["a" /* default */], {
        name: "featured_tabs"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__parts_Wrap__["a" /* default */], null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__parts_FeaturedTabs__["a" /* default */], {
        hours: this.props.hours,
        location: this.props.location
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(VideoSection, null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(MenusSection, {
        fields: this.props.featuredMenus
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CommunitySection, {
        fields: this.props.blog
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

/***/ }),
/* 44 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);