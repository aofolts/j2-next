webpackHotUpdate(5,{

/***/ "./config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var dev = "development" !== 'production',
    liveBackendUrl = 'http://api.joesquared.com',
    liveUrl = 'https://www.joesquared.com',
    devUrl = 'http://localhost/joesquared.com',
    devFrontendUrl = 'http://localhost:3000',
    backendUrl = dev ? devUrl : liveBackendUrl,
    url = dev ? devFrontendUrl : liveBackendUrl,
    apiUrl = dev ? devUrl : liveUrl,
    restUrl = backendUrl + '/wp-json',
    wpRestUrl = restUrl + '/wp/v2';
var config = {
  url: url,
  api: {
    restUrl: restUrl,
    wpRestUrl: wpRestUrl,
    url: apiUrl
  },
  getPostSlug: function getPostSlug(url) {
    return url.replace(apiUrl, '');
  }
};

/***/ })

})
//# sourceMappingURL=5.48b8d2416c177f99da99.hot-update.js.map