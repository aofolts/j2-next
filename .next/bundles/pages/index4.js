module.exports=__NEXT_REGISTER_PAGE("/index4",function(){return{page:webpackJsonp([6],{252:function(e,t,n){e.exports=n(253)},253:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),o=n.n(r),u=n(0),i=n.n(u),a=n(9),c=n(17),f=n.n(c);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,r,u,c,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.a.Component),n=t,r=[{key:"render",value:function(){return console.log(this.props.site),i.a.createElement("h1",null,"Test")}}],u=[{key:"getInitialProps",value:(c=o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()(a.a.api.restUrl).then(function(e){return e.json()});case 2:return t=e.sent,e.abrupt("return",{site:t});case 4:case"end":return e.stop()}},e,this)}),s=function(){var e=this,t=arguments;return new Promise(function(n,r){var o=c.apply(e,t);function u(e,t){try{var u=o[e](t),c=u.value}catch(e){return void r(e)}u.done?n(c):Promise.resolve(c).then(i,a)}function i(e){u("next",e)}function a(e){u("throw",e)}i()})},function(){return s.apply(this,arguments)})}],r&&p(n.prototype,r),u&&p(n,u),t}();t.default=y}},[252]).default}});