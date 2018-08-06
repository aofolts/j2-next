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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(2);



var Content = function Content(props) {
  var html = props.html;
  console.log(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* config */]);
  console.log(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* config */].backendUrl + ' ' + __WEBPACK_IMPORTED_MODULE_1__config__["a" /* config */].url);
  html = html.replace(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* config */].backendUrl, __WEBPACK_IMPORTED_MODULE_1__config__["a" /* config */].url);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "content",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Content);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__WpImage__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_less_hero_secondary_less__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_less_hero_secondary_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_less_hero_secondary_less__);





var Hero = function Hero(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    id: "hero"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WpImage__["a" /* default */], {
    id: "hero__background",
    data: props.background,
    size: "hero"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "hero__content"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    id: "hero__headline",
    dangerouslySetInnerHTML: {
      __html: props.title
    }
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Hero);

/***/ }),
/* 16 */
/***/ (function(module, exports) {



/***/ }),
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports) {



/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(31);


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(5);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./parts/Header.js + 4 modules
var Header = __webpack_require__(8);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external__isomorphic_unfetch_ = __webpack_require__(9);
var external__isomorphic_unfetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_unfetch_);

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(2);

// CONCATENATED MODULE: ./parts/ArchiveWrapper.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ArchiveWrapper_Wrapper = function Wrapper(Child) {
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
          return external__react__default.a.createElement(Child, this.props);
        }
      }], [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = _asyncToGenerator(
          /*#__PURE__*/
          regenerator__default.a.mark(function _callee(context) {
            var _context$query, slug, apiRoute, siteRes, site, menuRes, menu, taxUrl, tax, err, taxKidsUrl, taxKids, foodItemsUrl, foodMenuItems, postsUrl, posts;

            return regenerator__default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context$query = context.query, slug = _context$query.slug, apiRoute = _context$query.apiRoute; // Site Data

                    _context.next = 3;
                    return external__isomorphic_unfetch__default()(config["a" /* config */].api.restUrl);

                  case 3:
                    siteRes = _context.sent;
                    _context.next = 6;
                    return siteRes.json();

                  case 6:
                    site = _context.sent;
                    _context.next = 9;
                    return external__isomorphic_unfetch__default()("".concat(config["a" /* config */].api.url, "/wp-json/j2/v1/menu/2"));

                  case 9:
                    menuRes = _context.sent;
                    _context.next = 12;
                    return menuRes.json();

                  case 12:
                    menu = _context.sent;
                    taxUrl = "".concat(config["a" /* config */].api.wpRestUrl, "/food_category/?slug=").concat(slug);
                    _context.next = 16;
                    return external__isomorphic_unfetch__default()(taxUrl).then(function (r) {
                      return r.json();
                    }).then(function (r) {
                      return r[0];
                    });

                  case 16:
                    tax = _context.sent;

                    if (tax) {
                      _context.next = 21;
                      break;
                    }

                    err = new Error();
                    err.code = 'ENOENT';
                    throw err;

                  case 21:
                    taxKidsUrl = "".concat(config["a" /* config */].api.wpRestUrl, "/food_category/?parent=").concat(tax.id);
                    _context.next = 24;
                    return external__isomorphic_unfetch__default()(taxKidsUrl).then(function (r) {
                      return r.json();
                    });

                  case 24:
                    taxKids = _context.sent;
                    _context.next = 27;
                    return "".concat(config["a" /* config */].api.wpRestUrl, "/food/?food_category=").concat(tax.id, "&per_page=50");

                  case 27:
                    foodItemsUrl = _context.sent;
                    _context.next = 30;
                    return external__isomorphic_unfetch__default()(foodItemsUrl).then(function (r) {
                      return r.json();
                    }).then(function (r) {
                      return r.sort(function (a, b) {
                        return a.title.rendered.toUpperCase() > b.title.rendered.toUpperCase() ? 1 : -1;
                      });
                    });

                  case 30:
                    foodMenuItems = _context.sent;
                    _context.next = 33;
                    return "".concat(config["a" /* config */].api.wpRestUrl, "/food/?food_category=").concat(tax.id);

                  case 33:
                    postsUrl = _context.sent;
                    _context.next = 36;
                    return external__isomorphic_unfetch__default()(postsUrl).then(function (r) {
                      return r.json();
                    });

                  case 36:
                    posts = _context.sent;
                    return _context.abrupt("return", Child.getInitialProps({
                      title: tax.name,
                      featuredImage: tax.featured_image,
                      foodMenuItems: foodMenuItems,
                      menu: menu,
                      category: tax,
                      subCategories: taxKids,
                      posts: posts,
                      context: context.apiRoute,
                      query: context.query
                    }));

                  case 38:
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
    }(external__react_["Component"])
  );
};

/* harmony default export */ var ArchiveWrapper = (ArchiveWrapper_Wrapper);
// EXTERNAL MODULE: ./parts/Layout.js + 1 modules
var Layout = __webpack_require__(13);

// EXTERNAL MODULE: ./parts/Hero.js
var Hero = __webpack_require__(15);

// EXTERNAL MODULE: ./parts/Content.js
var Content = __webpack_require__(14);

// EXTERNAL MODULE: ./parts/Wrap.js
var Wrap = __webpack_require__(7);

// EXTERNAL MODULE: ./parts/WpImage.js
var WpImage = __webpack_require__(4);

// EXTERNAL MODULE: ./parts/Section.js
var Section = __webpack_require__(10);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: ./src/less/food.less
var food = __webpack_require__(19);
var food_default = /*#__PURE__*/__webpack_require__.n(food);

// CONCATENATED MODULE: ./pages/archive.js



function archive__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { archive__typeof = function _typeof(obj) { return typeof obj; }; } else { archive__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return archive__typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function archive__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function archive__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function archive__possibleConstructorReturn(self, call) { if (call && (archive__typeof(call) === "object" || typeof call === "function")) { return call; } return archive__assertThisInitialized(self); }

function archive__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function archive__createClass(Constructor, protoProps, staticProps) { if (protoProps) archive__defineProperties(Constructor.prototype, protoProps); if (staticProps) archive__defineProperties(Constructor, staticProps); return Constructor; }

function archive__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function archive__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }














var archive_MenuArchive =
/*#__PURE__*/
function (_React$Component) {
  archive__inherits(MenuArchive, _React$Component);

  archive__createClass(MenuArchive, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = archive__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(props) {
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _objectSpread({}, props));

              case 1:
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

  function MenuArchive(props) {
    var _this;

    archive__classCallCheck(this, MenuArchive);

    _this = archive__possibleConstructorReturn(this, (MenuArchive.__proto__ || Object.getPrototypeOf(MenuArchive)).call(this, props));
    var boundMethods = ['getNavSection', 'getItemsSection', 'setSelectedCategoryById'];
    boundMethods.forEach(function (method) {
      return _this[method] = _this[method].bind(archive__assertThisInitialized(_this));
    });
    _this.state = {
      selectedCategoryId: props.subCategories[0].id
    };
    return _this;
  }

  archive__createClass(MenuArchive, [{
    key: "getItemsSection",
    value: function getItemsSection() {
      var _this2 = this;

      var items = this.props.foodMenuItems.map(function (item) {
        var selectedClass = item.food_category.includes(_this2.state.selectedCategoryId) ? 'is-selected' : null,
            classes = ['item', selectedClass].join(' ');
        var pricing = null;

        if (item.acf.pricing) {
          var nonZeroPrices = item.acf.pricing.filter(function (level) {
            return level.price > 0;
          });

          if (nonZeroPrices) {
            pricing = external__react__default.a.createElement("p", {
              className: "pricing p2"
            }, nonZeroPrices.map(function (level) {
              return [level.label, '$' + level.price].join(' ');
            }).join(', '));
          }
        }

        return external__react__default.a.createElement("li", {
          key: item.id,
          className: classes
        }, external__react__default.a.createElement("h3", {
          className: "title",
          dangerouslySetInnerHTML: {
            __html: item.title.rendered
          }
        }), external__react__default.a.createElement("p", {
          className: "description",
          dangerouslySetInnerHTML: {
            __html: item.acf.description
          }
        }), pricing);
      });
      return external__react__default.a.createElement(Section["a" /* default */], {
        name: "items"
      }, external__react__default.a.createElement(Wrap["a" /* default */], null, external__react__default.a.createElement("ul", {
        id: "items"
      }, items)));
    }
  }, {
    key: "getNavSection",
    value: function getNavSection() {
      var _this3 = this;

      var items = this.props.subCategories.map(function (cat) {
        var selectedClass = cat.id === _this3.state.selectedCategoryId ? 'is-selected' : null,
            classes = ['category', selectedClass].join(' ');
        return external__react__default.a.createElement("li", {
          key: cat.id,
          className: classes,
          onClick: function onClick() {
            return _this3.setSelectedCategoryById(cat.id);
          }
        }, cat.name);
      });
      var catDescriptions = this.props.subCategories.filter(function (cat) {
        return typeof cat.description !== 'undefined';
      }).map(function (cat) {
        var style = {
          display: cat.id === _this3.state.selectedCategoryId ? 'block' : 'none'
        };
        return external__react__default.a.createElement("li", {
          key: cat.id,
          className: "description",
          style: style
        }, cat.description);
      });
      var subCatInfo = catDescriptions ? external__react__default.a.createElement("p", null, catDescriptions) : null;
      var catInfo = this.props.category.description ? external__react__default.a.createElement("p", null, this.props.category.description) : null;
      var info = catInfo || subCatInfo ? external__react__default.a.createElement("div", {
        id: "info"
      }, catInfo, subCatInfo) : null;
      return external__react__default.a.createElement(Section["a" /* default */], {
        name: "nav"
      }, external__react__default.a.createElement(Wrap["a" /* default */], {
        width: "small"
      }, external__react__default.a.createElement("div", null, external__react__default.a.createElement("ul", {
        id: "nav-food"
      }, items)), info));
    }
  }, {
    key: "setSelectedCategoryById",
    value: function setSelectedCategoryById(id) {
      if (id !== this.state.selectedCategoryId) {
        this.setState({
          selectedCategoryId: id
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      return external__react__default.a.createElement(Layout["a" /* default */], props, external__react__default.a.createElement(Hero["a" /* default */], {
        title: this.props.title,
        background: this.props.featuredImage
      }), this.getNavSection(), this.getItemsSection());
    }
  }]);

  return MenuArchive;
}(external__react__default.a.Component);

/* harmony default export */ var archive = __webpack_exports__["default"] = (ArchiveWrapper(archive_MenuArchive));

/***/ })
/******/ ]);