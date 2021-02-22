webpackHotUpdate_N_E("pages/_app",{

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return buildClient; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function buildClient(_ref) {
  var req = _ref.req;
  // if (typeof window === 'undefined') {
  //   return axios.create({
  //     baseURL:
  //       'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
  //     headers: req.headers,
  //   });
  // } else {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
    baseUrl: 'https://ticketing.com.br'
  }); // }
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBpL2J1aWxkLWNsaWVudC5qcyJdLCJuYW1lcyI6WyJidWlsZENsaWVudCIsInJlcSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZSxTQUFTQSxXQUFULE9BQThCO0FBQUEsTUFBUEMsR0FBTyxRQUFQQSxHQUFPO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBT0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQUVDLFdBQU8sRUFBRTtBQUFYLEdBQWIsQ0FBUCxDQVIyQyxDQVMzQztBQUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZjZhMDFmOTI5MTUwNDVhZGE5YmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkQ2xpZW50KHsgcmVxIH0pIHtcbiAgLy8gaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gIC8vICAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XG4gIC8vICAgICBiYXNlVVJMOlxuICAvLyAgICAgICAnaHR0cDovL2luZ3Jlc3MtbmdpbngtY29udHJvbGxlci5pbmdyZXNzLW5naW54LnN2Yy5jbHVzdGVyLmxvY2FsJyxcbiAgLy8gICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAvLyAgIH0pO1xuICAvLyB9IGVsc2Uge1xuICByZXR1cm4gYXhpb3MuY3JlYXRlKHsgYmFzZVVybDogJ2h0dHBzOi8vdGlja2V0aW5nLmNvbS5icicgfSk7XG4gIC8vIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=