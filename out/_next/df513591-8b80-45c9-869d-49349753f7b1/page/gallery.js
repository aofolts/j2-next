module.exports=__NEXT_REGISTER_PAGE("/gallery",function(){return{page:webpackJsonp([6],{247:function(e,t,n){e.exports=n(248)},248:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),o=n.n(r),a=n(0),i=n.n(a),u=(n(21),n(18),n(11),n(48)),c=n(34),l=n(46),f=(n(35),n(19)),s=n(12),p=n(30);n(249),n(6);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){m(e,t,n[t])})}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var h=function(e){var t=e.images.map(function(e){return i.a.createElement("div",{className:"image",key:e.id},i.a.createElement(s.a,{className:"background",data:e,size:"medium"}))});return i.a.createElement(p.a,{name:"gallery"},i.a.createElement(f.a,null,i.a.createElement("div",{className:"grid-gallery"},t)))},g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,r,a,u,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.a.Component),n=t,r=[{key:"render",value:function(){var e=this.props.post.acf.gallery;return i.a.createElement(c.a,this.props,i.a.createElement(l.a,{title:this.props.post.title.rendered,background:this.props.post.featured_image}),i.a.createElement(h,{images:e}))}}],a=[{key:"getInitialProps",value:(u=o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b({},t));case 1:case"end":return e.stop()}},e,this)}),f=function(){var e=this,t=arguments;return new Promise(function(n,r){var o=u.apply(e,t);function a(e,t){try{var a=o[e](t),u=a.value}catch(e){return void r(e)}a.done?n(u):Promise.resolve(u).then(i,c)}function i(e){a("next",e)}function c(e){a("throw",e)}i()})},function(e){return f.apply(this,arguments)})}],r&&d(n.prototype,r),a&&d(n,a),t}();t.default=Object(u.a)(g)}},[247]).default}});