module.exports=__NEXT_REGISTER_PAGE("/archive",function(){return{page:webpackJsonp([8],{219:function(e,t,n){e.exports=n(220)},220:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),o=n.n(r),a=n(0),i=n.n(a),c=(n(21),n(18)),u=n.n(c),s=n(11);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var y=function(e){return function(t){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}var r,c,l,y,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,a.Component),r=n,c=[{key:"render",value:function(){return i.a.createElement(e,this.props)}}],l=[{key:"getInitialProps",value:(y=o.a.mark(function t(n){var r,a,i,c,l,f,p,y,d,m,b,h,v,g;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.query,a=r.slug,r.apiRoute,t.next=3,u()(s.a.api.restUrl);case 3:return i=t.sent,t.next=6,i.json();case 6:return t.sent,t.next=9,u()("".concat(s.a.api.url,"/wp-json/j2/v1/menu/2"));case 9:return c=t.sent,t.next=12,c.json();case 12:return l=t.sent,f="".concat(s.a.api.wpRestUrl,"/food_category/?slug=").concat(a),t.next=16,u()(f).then(function(e){return e.json()}).then(function(e){return e[0]});case 16:if(p=t.sent){t.next=21;break}throw(y=new Error).code="ENOENT",y;case 21:return d="".concat(s.a.api.wpRestUrl,"/food_category/?parent=").concat(p.id),t.next=24,u()(d).then(function(e){return e.json()});case 24:return m=t.sent,t.next=27,"".concat(s.a.api.wpRestUrl,"/food/?food_category=").concat(p.id,"&per_page=50");case 27:return b=t.sent,t.next=30,u()(b).then(function(e){return e.json()}).then(function(e){return e.sort(function(e,t){return e.title.rendered.toUpperCase()>t.title.rendered.toUpperCase()?1:-1})});case 30:return h=t.sent,t.next=33,"".concat(s.a.api.wpRestUrl,"/food/?food_category=").concat(p.id);case 33:return v=t.sent,t.next=36,u()(v).then(function(e){return e.json()});case 36:return g=t.sent,t.abrupt("return",e.getInitialProps({title:p.name,featuredImage:p.featured_image,foodMenuItems:h,menu:l,category:p,subCategories:m,posts:g,context:n.apiRoute,query:n.query}));case 38:case"end":return t.stop()}},t,this)}),d=function(){var e=this,t=arguments;return new Promise(function(n,r){var o=y.apply(e,t);function a(e,t){try{var a=o[e](t),u=a.value}catch(e){return void r(e)}a.done?n(u):Promise.resolve(u).then(i,c)}function i(e){a("next",e)}function c(e){a("throw",e)}i()})},function(e){return d.apply(this,arguments)})}],c&&f(r.prototype,c),l&&f(r,l),n}()},d=n(34),m=n(46),b=(n(35),n(19)),h=(n(12),n(30));n(7),n(122);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){w(e,t,n[t])})}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t,n){return t&&E(e.prototype,t),n&&E(e,n),e}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var S=function(e){var t,n;function r(e){var t,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),n=this,o=(r.__proto__||Object.getPrototypeOf(r)).call(this,e),t=!o||"object"!==v(o)&&"function"!=typeof o?j(n):o;return["getNavSection","getItemsSection","setSelectedCategoryById"].forEach(function(e){return t[e]=t[e].bind(j(t))}),t.state={selectedCategoryId:e.subCategories[0].id},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,i.a.Component),_(r,null,[{key:"getInitialProps",value:(t=o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g({},t));case 1:case"end":return e.stop()}},e,this)}),n=function(){var e=this,n=arguments;return new Promise(function(r,o){var a=t.apply(e,n);function i(e,t){try{var n=a[e](t),i=n.value}catch(e){return void o(e)}n.done?r(i):Promise.resolve(i).then(c,u)}function c(e){i("next",e)}function u(e){i("throw",e)}c()})},function(e){return n.apply(this,arguments)})}]),_(r,[{key:"getItemsSection",value:function(){var e=this,t=this.props.foodMenuItems.map(function(t){var n=["item",t.food_category.includes(e.state.selectedCategoryId)?"is-selected":null].join(" "),r=null;if(t.acf.pricing){var o=t.acf.pricing.filter(function(e){return e.price>0});o&&(r=i.a.createElement("p",{className:"pricing p2"},o.map(function(e){return[e.label,"$"+e.price].join(" ")}).join(", ")))}return i.a.createElement("li",{key:t.id,className:n},i.a.createElement("h3",{className:"title",dangerouslySetInnerHTML:{__html:t.title.rendered}}),i.a.createElement("p",{className:"description",dangerouslySetInnerHTML:{__html:t.acf.description}}),r)});return i.a.createElement(h.a,{name:"items"},i.a.createElement(b.a,null,i.a.createElement("ul",{id:"items"},t)))}},{key:"getNavSection",value:function(){var e=this,t=this.props.subCategories.map(function(t){var n=["category",t.id===e.state.selectedCategoryId?"is-selected":null].join(" ");return i.a.createElement("li",{key:t.id,className:n,onClick:function(){return e.setSelectedCategoryById(t.id)}},t.name)}),n=this.props.subCategories.filter(function(e){return void 0!==e.description}).map(function(t){var n={display:t.id===e.state.selectedCategoryId?"block":"none"};return i.a.createElement("li",{key:t.id,className:"description",style:n},t.description)}),r=n?i.a.createElement("p",null,n):null,o=this.props.category.description?i.a.createElement("p",null,this.props.category.description):null,a=o||r?i.a.createElement("div",{id:"info"},o,r):null;return i.a.createElement(h.a,{name:"nav"},i.a.createElement(b.a,{width:"small"},i.a.createElement("div",null,i.a.createElement("ul",{id:"nav-food"},t)),a))}},{key:"setSelectedCategoryById",value:function(e){e!==this.state.selectedCategoryId&&this.setState({selectedCategoryId:e})}},{key:"render",value:function(){var e=this.props;return i.a.createElement(d.a,e,i.a.createElement(m.a,{title:this.props.title,background:this.props.featuredImage}),this.getNavSection(),this.getItemsSection())}}]),r}();t.default=y(S)}},[219]).default}});