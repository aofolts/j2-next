module.exports=__NEXT_REGISTER_PAGE("/blog",function(){return{page:webpackJsonp([2],{240:function(e,t,n){e.exports=n(241)},241:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return y});var r=n(8),o=n.n(r),a=n(0),i=n.n(a),l=n(11),s=(n(21),n(18)),c=n.n(s);n(19),n(12),n(47),n(30),n(86),n(87),n(88);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}var y=function(e){var t,n;function r(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),f(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,i.a.Component),d(r,null,[{key:"getInitialProps",value:(t=o.a.mark(function e(t){var n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.query.slug,e.next=3,c()("".concat(l.a.api.wpRestUrl,"/community/?slug=reservoir-hill-improvement-council-pizza-copy"));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",{post:r[0]});case 8:case"end":return e.stop()}},e,this)}),n=function(){var e=this,n=arguments;return new Promise(function(r,o){var a=t.apply(e,n);function i(e,t){try{var n=a[e](t),i=n.value}catch(e){return void o(e)}n.done?r(i):Promise.resolve(i).then(l,s)}function l(e){i("next",e)}function s(e){i("throw",e)}l()})},function(e){return n.apply(this,arguments)})}]),d(r,[{key:"render",value:function(){var e=this.props.post.title;return i.a.createElement("div",{id:"page"},i.a.createElement("h1",null,e.rendered))}}]),r}()},47:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var r=n(0),o=n.n(r),a=n(6),i=(n.n(a),n(7)),l=n.n(i);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state={selector:"button button-"+e.type},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){return o.a.createElement(l.a,{href:this.props.link},o.a.createElement("a",{className:this.props.className},this.props.label))}}])&&c(n.prototype,r),a&&c(n,a),t}();f.defaultProps={type:"primary"}},86:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var r=n(0),o=n.n(r),a=n(47),i=n(12);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function f(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?d(e):t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var y=function(e){function t(e){var n;return s(this,t),(n=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).getSlideClass=n.getSlideClass.bind(d(n)),n.state={slideClass:n.getSlideClass()},n}return p(t,o.a.Component),u(t,[{key:"getSlideClass",value:function(){return"slide "+this.props.slideState}},{key:"componentWillReceiveProps",value:function(e){this.setState({slideClass:"slide "+e.slideState})}},{key:"render",value:function(){var e=this.props.slide,t=e.featured_image,n=o.a.createElement(i.a,{className:"background",data:t,size:"hero",loadType:"auto"});return o.a.createElement("div",{className:this.state.slideClass,key:e.id,title:e.title.rendered},n,o.a.createElement("div",{className:"content"},o.a.createElement("h2",{className:"headline"},e.acf.headline),o.a.createElement(m,{link:"test",fields:e.acf})))}}]),t}(),m=function(e){var t=[e.fields.button];return"secondary_button"in e.fields&&t.push(e.fields.secondary_button),o.a.createElement("div",{className:"buttons"},t.map(function(e,t){return o.a.createElement(a.a,{key:t,label:e.label,className:"button-primary button-".concat(t+1),link:e.link})}))},b=function(e){function t(e){var n;s(this,t),n=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));["advanceSlider","getNextSlideById","getPreviousSlideById","getSlideById","getSlideByIndex","getSlideElements","getSlideStateClassById","selectSlideById","startLoop"].forEach(function(e){return n[e]=n[e].bind(d(n))});var r=n.props.slides.reduce(function(e,t,n){return t.index=n,e[t.id]=t,e},{}),o=n.props.slides.length;return n.state={slidesById:r,slideCount:n.props.slides.length,previousSlide:r[n.props.slides[o-2].id],currentSlide:r[n.props.slides[o-1].id],nextSlide:r[n.props.slides[0].id]},n}return p(t,o.a.Component),u(t,[{key:"advanceSlider",value:function(){var e=this.state.nextSlide;this.setState({previousSlide:this.state.currentSlide,currentSlide:e,nextSlide:this.getNextSlideById(e.id)})}},{key:"getNextSlideById",value:function(e){var t=this.state.slidesById[e].index+1;return t>=this.state.slideCount&&(t=0),this.getSlideByIndex(t)}},{key:"getPreviousSlideById",value:function(e){var t=this.state.slidesById[e].index-1;return t<0&&(t=this.state.slideCount-1),this.getSlideByIndex(t)}},{key:"getSlideById",value:function(e){return this.state.slidesById[e]}},{key:"getSlideByIndex",value:function(e){var t=this.props.slides[e].id;return this.state.slidesById[t]}},{key:"componentDidMount",value:function(){this.startLoop()}},{key:"componentWillUnmount",value:function(){this.stopLoop()}},{key:"getSlideElements",value:function(){var e=this;return e.props.slides.map(function(t){var n=e.getSlideStateClassById(t.id);return o.a.createElement(y,{slide:t,key:t.id,slideState:n})})}},{key:"getSlideNav",value:function(){var e=this;return o.a.createElement("nav",{className:"nav"},this.props.slides.map(function(t){var n=e.getSlideStateClassById(t.id);return o.a.createElement("div",{key:t.id,className:"item ".concat(n),onClick:function(){return e.selectSlideById(t.id)},title:t.title.rendered},o.a.createElement("div",{className:"icon"}),o.a.createElement("div",{className:"title"},t.title.rendered))}))}},{key:"getSlideStateClassById",value:function(e){var t=null;switch(e){case this.state.previousSlide.id:t="previous";break;case this.state.currentSlide.id:t="current";break;default:t="inactive"}return"is-"+t}},{key:"selectSlideById",value:function(e){this.stopLoop(),this.setState({previousSlide:this.state.currentSlide,currentSlide:this.getSlideById(e),nextSlide:this.getNextSlideById(e)})}},{key:"startLoop",value:function(){var e=this;this.advanceSlider(),this.timer=setInterval(function(){e.advanceSlider()},4e3)}},{key:"stopLoop",value:function(){clearTimeout(this.timer)}},{key:"render",value:function(){return o.a.createElement("section",{id:"slider"},this.getSlideElements(),this.getSlideNav())}}]),t}()},87:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(0),o=n.n(r),a=n(7),i=n.n(a);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=function(e){function t(e){var n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(a=(t.__proto__||Object.getPrototypeOf(t)).call(this,e))||"object"!==l(a)&&"function"!=typeof a?c(r):a).changeTab=n.changeTab.bind(c(n));var s=(new Date).toLocaleDateString("en-US",{weekday:"long"}).toLowerCase(),u=function(e){var t=e.fields,n=t.day.charAt(0).toUpperCase()+t.day.slice(1);return t.is_open?o.a.createElement("div",{className:"day"},"".concat(n,": ").concat(t.opens," - ").concat(t.closes,".")):o.a.createElement("div",null,n,": Closed.")},f=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"].map(function(t){return o.a.createElement("div",{key:t,className:"day"},o.a.createElement(u,{fields:e.hours[t]}))}),p=o.a.createElement("p",null,"Book on ",o.a.createElement("a",{target:"__blank",href:n.props.location.open_table_link},"Open Table")),d=o.a.createElement("p",null,o.a.createElement("span",null,n.props.location.address),o.a.createElement("br",null),o.a.createElement("span",null,"Phone: ",n.props.location.phone),o.a.createElement("br",null),o.a.createElement("span",null,"Fax: ",n.props.location.fax),o.a.createElement("br",null),o.a.createElement("span",null,"More ",o.a.createElement(i.a,{href:"/visit"},o.a.createElement("a",{target:"__blank"},"Location Info")))),y=[{title:"Today",content:o.a.createElement(u,{fields:e.hours[s]})},{title:"Hours",content:f},{title:"Visit",content:d},{title:"Reserve a Table",content:p}];return n.state={items:y,activeTab:0,todayKey:s},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.Component),n=t,(r=[{key:"changeTab",value:function(e){this.setState({activeTab:e})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"featured_sorter"},o.a.createElement("nav",{className:"nav"},this.state.items.map(function(t,n){var r=null;return n==e.state.activeTab&&(r="is-selected"),o.a.createElement("div",{className:"item "+r,key:n,onClick:function(){return e.changeTab(n)}},t.title)})),o.a.createElement("div",{className:"items"},this.state.items.map(function(t,n){var r=null;return n==e.state.activeTab&&(r="is-selected"),o.a.createElement("div",{className:"item "+r,key:n},t.content)})))}}])&&s(n.prototype,r),a&&s(n,a),t}()},88:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(0),o=n.n(r),a=n(6);n.n(a);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=(t.__proto__||Object.getPrototypeOf(t)).call(this,e))||"object"!==i(o)&&"function"!=typeof o?s(r):o).getSrc=n.getSrc.bind(s(n)),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.Component),n=t,(r=[{key:"getSrc",value:function(){var e=this.props.videoKey;switch(this.props.host){case"youtube":return"https://www.youtube.com/embed/".concat(e);case"vimeo":return"https://player.vimeo.com/video/".concat(e,"?title=0&byline=0&portrait=0")}}},{key:"render",value:function(){return o.a.createElement("div",{className:"container-video"},o.a.createElement("iframe",{className:"video",src:this.getSrc(),frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0}))}}])&&l(n.prototype,r),a&&l(n,a),t}()}},[240]).default}});