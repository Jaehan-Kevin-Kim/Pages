webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "F:\\Self Study_Coding\\Web\\Portfolio\\React_NodeBird\\preapre_second\\front\\components\\LoginForm.js",
    _this = undefined,
    _s = $RefreshSig$();


 // import Form from "antd/lib/form/Form";





var LoginForm = function LoginForm() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      id = _useState[0],
      setId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      password = _useState2[0],
      setPassword = _useState2[1];

  var onChangeId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setId(e.target.value);
  }, []);
  var onChangePassword = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setId(e.target.value);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
        htmlFor: "user-id",
        children: "ID"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        name: "user-id",
        value: id,
        onChange: onChangeId,
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
        htmlFor: "user-password",
        children: "Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        name: "user-password",
        type: "password",
        value: password,
        onChange: onChangePassword,
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      style: {
        marginTop: "10px"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "primary",
        htmlType: "submit",
        loading: false,
        children: "Log In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/signup",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            children: "SignUp"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, _this);
};

_s(LoginForm, "uf5JhIhIf3u5eQuufuLymr8OAAk=");

_c = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c;

$RefreshReg$(_c, "LoginForm");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, ServerStyleSheet, StyleSheetConsumer, StyleSheetContext, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, __PRIVATE__, createGlobalStyle, css, isStyledComponent, keyframes, useTheme, version, withTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return Ue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetConsumer", function() { return le; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetContext", function() { return ue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return ye; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return Le; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return Ge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__PRIVATE__", function() { return Ze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return $e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return Ae; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return We; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return Xe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return Je; });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);
function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},S=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["typeOf"])(t)},w=Object.freeze([]),E=Object.freeze({});function b(e){return"function"==typeof e}function _(e){return true&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function N(e){return e&&"string"==typeof e.styledComponentId}var A="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",C="5.3.0",I="undefined"!=typeof window&&"HTMLElement"in window,P=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!=="development"),O={},R= true?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:undefined;function D(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function j(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw false?undefined:new Error(D.apply(void 0,[R[e]].concat(n)).trim())}var T=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&j(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var s=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(s,t[a])&&(this.groupSizes[e]++,s++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+=this.tag.getRule(i)+"/*!sc*/\n";return t},e}(),k=new Map,x=new Map,V=1,B=function(e){if(k.has(e))return k.get(e);for(;x.has(V);)V++;var t=V++;return true&&((0|t)<0||t>1<<30)&&j(16,""+t),k.set(e,t),x.set(t,e),t},M=function(e){return x.get(e)},z=function(e,t){k.set(e,t),x.set(t,e)},L="style["+A+'][data-styled-version="5.3.0"]',G=new RegExp("^"+A+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),F=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},Y=function(e,t){for(var n=t.innerHTML.split("/*!sc*/\n"),r=[],o=0,i=n.length;o<i;o++){var s=n[o].trim();if(s){var a=s.match(G);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(z(u,c),F(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(s)}}},q=function(){return"undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null},H=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(A))return r}}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(A,"active"),r.setAttribute("data-styled-version","5.3.0");var s=q();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},$=function(){function e(e){var t=this.element=H(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}j(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),W=function(){function e(e){var t=this.element=H(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),U=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),J=I,X={isServer:!I,useCSSOMInjection:!P},Z=function(){function e(e,t,n){void 0===e&&(e=E),void 0===t&&(t={}),this.options=v({},X,{},e),this.gs=t,this.names=new Map(n),!this.options.isServer&&I&&J&&(J=!1,function(e){for(var t=document.querySelectorAll(L),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(A)&&(Y(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return B(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(v({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new U(o):r?new $(o):new W(o),new T(e)));var e,t,n,r,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(B(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(B(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(B(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var i=M(o);if(void 0!==i){var s=e.names.get(i),a=t.getGroup(o);if(void 0!==s&&0!==a.length){var c=A+".g"+o+'[id="'+i+'"]',u="";void 0!==s&&s.forEach((function(e){e.length>0&&(u+=e+",")})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),K=/(a)(d)/gi,Q=function(e){return String.fromCharCode(e+(e>25?39:97))};function ee(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Q(t%52)+n;return(Q(t%52)+n).replace(K,"$1-$2")}var te=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ne=function(e){return te(5381,e)};function re(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(b(n)&&!N(n))return!1}return!0}var oe=ne("5.3.0"),ie=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= false&&false,this.componentId=t,this.baseHash=te(oe,t),this.baseStyle=n,Z.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var i=Ne(this.rules,e,t,n).join(""),s=ee(te(this.baseHash,i.length)>>>0);if(!t.hasNameForId(r,s)){var a=n(i,"."+s,void 0,r);t.insertRules(r,s,a)}o.push(s),this.staticRulesId=s}else{for(var c=this.rules.length,u=te(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h, true&&(u=te(u,h+d));else if(h){var p=Ne(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=te(u,f+d),l+=f}}if(l){var m=ee(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y)}o.push(m)}}return o.join(" ")},e}(),se=/^\s*\/\/.*$/gm,ae=[":","[",".","#"];function ce(e){var t,n,r,o,i=void 0===e?E:e,s=i.options,a=void 0===s?E:s,c=i.plugins,u=void 0===c?w:c,l=new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](a),d=[],h=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,i,s,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),f=function(e,r,i){return 0===r&&-1!==ae.indexOf(i[n.length])||i.match(o)?e:"."+t};function m(e,i,s,a){void 0===a&&(a="&");var c=e.replace(se,""),u=i&&s?s+" "+i+" { "+c+" }":c;return t=a,n=i,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(s||!i?"":i,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f))},h,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||j(15),te(e,t.name)}),5381).toString():"",m}var ue=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),le=ue.Consumer,de=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),he=(de.Consumer,new Z),pe=ce();function fe(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ue)||he}function me(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(de)||pe}function ye(e){var t=Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(e.stylisPlugins),n=t[0],i=t[1],c=fe(),u=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){var t=c;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){return ce({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])((function(){shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(n,e.stylisPlugins)||i(e.stylisPlugins)}),[e.stylisPlugins]),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ue.Provider,{value:u},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(de.Provider,{value:l}, true?react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.only(e.children):undefined))}var ve=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=pe);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return j(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=pe),this.name+e.hash},e}(),ge=/([A-Z])/,Se=/([A-Z])/g,we=/^ms-/,Ee=function(e){return"-"+e.toLowerCase()};function be(e){return ge.test(e)?e.replace(Se,Ee).replace(we,"-ms-"):e}var _e=function(e){return null==e||!1===e||""===e};function Ne(e,n,r,o){if(Array.isArray(e)){for(var i,s=[],a=0,c=e.length;a<c;a+=1)""!==(i=Ne(e[a],n,r,o))&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(_e(e))return"";if(N(e))return"."+e.styledComponentId;if(b(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return true&&Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isElement"])(u)&&console.warn(_(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ne(u,n,r,o)}var l;return e instanceof ve?r?(e.inject(r,o),e.getName(o)):e:S(e)?function e(t,n){var r,o,i=[];for(var s in t)t.hasOwnProperty(s)&&!_e(t[s])&&(S(t[s])?i.push.apply(i,e(t[s],s)):b(t[s])?i.push(be(s)+":",t[s],";"):i.push(be(s)+": "+(r=s,null==(o=t[s])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__["default"]?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(i,["}"]):i}(e):e.toString()}function Ae(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b(e)||S(e)?Ne(g(w,[e].concat(n))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ne(g(e,n))}var Ce=/invalid hook call/i,Ie=new Set,Pe=function(e,t){if(true){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.";try{Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(),Ie.has(n)||(console.warn(n),Ie.add(n))}catch(e){Ce.test(e.message)&&Ie.delete(n)}}},Oe=function(e,t,n){return void 0===n&&(n=E),e.theme!==n.theme&&e.theme||t||n.theme},Re=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,De=/(^-|-$)/g;function je(e){return e.replace(Re,"-").replace(De,"")}var Te=function(e){return ee(ne(e)>>>0)};function ke(e){return"string"==typeof e&&( false||e.charAt(0)===e.charAt(0).toLowerCase())}var xe=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Ve=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Be(e,t,n){var r=e[n];xe(t)&&xe(r)?Me(r,t):e[n]=t}function Me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var s=i[o];if(xe(s))for(var a in s)Ve(a)&&Be(e,s[a],a)}return e}var ze=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),Le=ze.Consumer;function Ge(e){var t=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ze),n=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){return function(e,t){if(!e)return j(14);if(b(e)){var n=e(t);return false||null!==n&&!Array.isArray(n)&&"object"==typeof n?n:j(7)}return Array.isArray(e)||"object"!=typeof e?j(8):t?v({},t,{},e):e}(e.theme,t)}),[e.theme,t]);return e.children?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ze.Provider,{value:n},e.children):null}var Fe={};function Ye(e,t,n){var o=N(e),s=!ke(e),a=t.attrs,c=void 0===a?w:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":je(e);Fe[n]=(Fe[n]||0)+1;var r=n+"-"+Te("5.3.0"+n+Fe[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,f=void 0===p?function(e){return ke(e)?"styled."+e:"Styled("+_(e)+")"}(e):p,g=t.displayName&&t.componentId?je(t.displayName)+"-"+t.componentId:t.componentId||h,S=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,A=t.shouldForwardProp;o&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var C,I=new ie(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,s=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target; true&&Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(h);var f=function(e,t,n){void 0===e&&(e=E);var r=v({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,i,s=e;for(t in b(s)&&(s=s(r)),s)r[t]=o[t]="className"===t?(n=o[t],i=s[t],n&&i?n+" "+i:n||i):s[t]})),[r,o]}(Oe(t,Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ze),a)||E,t,o),y=f[0],g=f[1],S=function(e,t,n,r){var o=fe(),i=me(),s=t?e.generateAndInjectStyles(E,o,i):e.generateAndInjectStyles(n,o,i);return true&&Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(s), true&&!t&&r&&r(s),s}(s,r,y, true?e.warnTooManyClasses:undefined),w=n,_=g.$as||t.$as||g.as||t.as||p,N=ke(_),A=g!==t?v({},t,{},g):t,C={};for(var I in A)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?C.as=A[I]:(d?d(I,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"],_):!N||Object(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"])(I))&&(C[I]=A[I]));return t.style&&g.style!==t.style&&(C.style=v({},t.style,{},g.style)),C.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),C.ref=w,Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_,C)}(C,e,t,P)};return O.displayName=f,(C=react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(O)).attrs=S,C.componentStyle=I,C.displayName=f,C.shouldForwardProp=A,C.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):w,C.styledComponentId=g,C.target=o?e.target:e,C.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),i=r&&r+"-"+(ke(e)?e:je(_(e)));return Ye(e,v({},o,{attrs:S,componentId:i}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Me({},e.defaultProps,t):t}}), true&&(Pe(f,g),C.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var i=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+i+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={}}}}(f,g)),C.toString=function(){return"."+C.styledComponentId},s&&hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var qe=function(e){return function e(t,r,o){if(void 0===o&&(o=E),!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isValidElementType"])(r))return j(1,String(r));var i=function(){return t(r,o,Ae.apply(void 0,arguments))};return i.withConfig=function(n){return e(t,r,v({},o,{},n))},i.attrs=function(n){return e(t,r,v({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},i}(Ye,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){qe[e]=qe(e)}));var He=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=re(e),Z.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(Ne(this.rules,t,n,r).join(""),""),i=this.componentId+e;n.insertRules(i,i,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&Z.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function $e(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var s=Ae.apply(void 0,[e].concat(n)),a="sc-global-"+Te(JSON.stringify(s)),u=new He(s,a);function l(e){var t=fe(),n=me(),o=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ze),l=Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(t.allocateGSInstance(a)).current;return true&&react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.count(e.children)&&console.warn("The global style component "+a+" was given child JSX. createGlobalStyle does not render children."), true&&s.some((function(e){return"string"==typeof e&&-1!==e.indexOf("@import")}))&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])((function(){return h(l,e,t,o,n),function(){return u.removeStyles(l,t)}}),[l,e,t,o,n]),null}function h(e,t,n,r,o){if(u.isStatic)u.renderStyles(e,O,n,o);else{var i=v({},t,{theme:Oe(t,r,l.defaultProps)});u.renderStyles(e,i,n,o)}}return true&&Pe(a),react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(l)}function We(e){ true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Ae.apply(void 0,[e].concat(n)).join(""),i=Te(o);return new ve(i,o)}var Ue=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=q();return"<style "+[n&&'nonce="'+n+'"',A+'="true"','data-styled-version="5.3.0"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?j(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return j(2);var n=((t={})[A]="",t["data-styled-version"]="5.3.0",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=q();return o&&(n.nonce=o),[react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style",v({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Z({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?j(2):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ye,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return j(3)},e}(),Je=function(e){var t=react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((function(t,n){var o=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ze),s=e.defaultProps,a=Oe(t,o,s);return true&&void 0===a&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'+_(e)+'"'),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(e,v({},t,{theme:a,ref:n}))}));return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(t,e),t.displayName="WithTheme("+_(e)+")",t},Xe=function(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ze)},Ze={StyleSheet:Z,masterSheet:he}; true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), true&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,1===window["__styled-components-init__"]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window["__styled-components-init__"]+=1);/* harmony default export */ __webpack_exports__["default"] = (qe);
//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9pcy1wcm9wLXZhbGlkL2Rpc3QvaXMtcHJvcC12YWxpZC5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL21lbW9pemUvZGlzdC9tZW1vaXplLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vc3R5bGlzL2Rpc3Qvc3R5bGlzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vdW5pdGxlc3MvZGlzdC91bml0bGVzcy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N0eWxlZC1jb21wb25lbnRzL2Rpc3Qvc3R5bGVkLWNvbXBvbmVudHMuYnJvd3Nlci5lc20uanMiXSwibmFtZXMiOlsiTG9naW5Gb3JtIiwidXNlU3RhdGUiLCJpZCIsInNldElkIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIm9uQ2hhbmdlSWQiLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3RCLGtCQUFvQkMsc0RBQVEsQ0FBQyxFQUFELENBQTVCO0FBQUEsTUFBT0MsRUFBUDtBQUFBLE1BQVdDLEtBQVg7O0FBQ0EsbUJBQWdDRixzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPRyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUVBLE1BQU1DLFVBQVUsR0FBR0MseURBQVcsQ0FBQyxV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QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixrQ0FBa0M7QUFDMUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLFVBQVU7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsVUFBVTs7QUFFcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQ0FBMkMsT0FBTztBQUNsRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0IseUJBQXlCLE9BQU87QUFDaEM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlEQUFpRDtBQUNqRDs7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SyxVQUFVLElBQUksNkJBQTZCLEVBQUUseUJBQXlCLE1BQU0sS0FBbUMsUUFBUSw0Q0FBQyxTQUFTLGVBQWUsS0FBbUMsb01BQW9NLHNEQUFzRCxJQUFJLHdCQUF3QixzREFBc0QsbUJBQW1CLGtCQUFrQixhQUFhLFdBQVcsOEJBQThCLGtDQUFrQywwSEFBMEgsOEJBQThCLHVDQUF1QyxpQ0FBaUMsTUFBTSx3QkFBd0IsWUFBWSxvRUFBb0UsNkJBQTZCLFVBQVUsdUJBQXVCLDRDQUFDLDJCQUEyQixJQUFJLGFBQWEsSUFBSSxzQkFBc0IsWUFBWSxzQkFBc0IsWUFBWSxpQkFBaUIsa0JBQWtCLG1DQUFtQyx3QkFBd0IsNENBQUMsbUJBQW1CLG9CQUFvQixJQUFJLHdDQUF3QyxZQUFZLEdBQUcsa0JBQWtCLE1BQU0sNENBQUMsMkJBQTJCLE1BQU0sd0RBQUMsa0NBQWtDLE1BQU0sS0FBbUMsOEpBQThKLDRDQUFDLHFCQUFxQixJQUFJLGNBQWMsR0FBRyxHQUFHLE9BQU8sOERBQUMsNENBQTRDLGVBQWUsT0FBTyx3REFBQyxLQUFLLEtBQUssNkJBQTZCLEtBQW1DLHlTQUF5UyxLQUFrRSw0ZUFBMmYsaUVBQUUsRUFBMlM7QUFDcDZ6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjhmOGZmNjFkYWI0N2Q5YmYwYjY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXQsIEZvcm0gfSBmcm9tIFwiYW50ZFwiO1xyXG4vLyBpbXBvcnQgRm9ybSBmcm9tIFwiYW50ZC9saWIvZm9ybS9Gb3JtXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlSWQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0SWQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldElkKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0ndXNlci1pZCc+SUQ8L2xhYmVsPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxJbnB1dCBuYW1lPSd1c2VyLWlkJyB2YWx1ZT17aWR9IG9uQ2hhbmdlPXtvbkNoYW5nZUlkfSByZXF1aXJlZCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0ndXNlci1wYXNzd29yZCc+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgbmFtZT0ndXNlci1wYXNzd29yZCdcclxuICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPSdwcmltYXJ5JyBodG1sVHlwZT0nc3VibWl0JyBsb2FkaW5nPXtmYWxzZX0+XHJcbiAgICAgICAgICBMb2cgSW5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8TGluayBocmVmPScvc2lnbnVwJz5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8QnV0dG9uPlNpZ25VcDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcclxuIiwiaW1wb3J0IG1lbW9pemUgZnJvbSAnQGVtb3Rpb24vbWVtb2l6ZSc7XG5cbnZhciByZWFjdFByb3BzUmVnZXggPSAvXigoY2hpbGRyZW58ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUx8a2V5fHJlZnxhdXRvRm9jdXN8ZGVmYXVsdFZhbHVlfGRlZmF1bHRDaGVja2VkfGlubmVySFRNTHxzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmd8c3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nfHZhbHVlTGlua3xhY2NlcHR8YWNjZXB0Q2hhcnNldHxhY2Nlc3NLZXl8YWN0aW9ufGFsbG93fGFsbG93VXNlck1lZGlhfGFsbG93UGF5bWVudFJlcXVlc3R8YWxsb3dGdWxsU2NyZWVufGFsbG93VHJhbnNwYXJlbmN5fGFsdHxhc3luY3xhdXRvQ29tcGxldGV8YXV0b1BsYXl8Y2FwdHVyZXxjZWxsUGFkZGluZ3xjZWxsU3BhY2luZ3xjaGFsbGVuZ2V8Y2hhclNldHxjaGVja2VkfGNpdGV8Y2xhc3NJRHxjbGFzc05hbWV8Y29sc3xjb2xTcGFufGNvbnRlbnR8Y29udGVudEVkaXRhYmxlfGNvbnRleHRNZW51fGNvbnRyb2xzfGNvbnRyb2xzTGlzdHxjb29yZHN8Y3Jvc3NPcmlnaW58ZGF0YXxkYXRlVGltZXxkZWNvZGluZ3xkZWZhdWx0fGRlZmVyfGRpcnxkaXNhYmxlZHxkaXNhYmxlUGljdHVyZUluUGljdHVyZXxkb3dubG9hZHxkcmFnZ2FibGV8ZW5jVHlwZXxmb3JtfGZvcm1BY3Rpb258Zm9ybUVuY1R5cGV8Zm9ybU1ldGhvZHxmb3JtTm9WYWxpZGF0ZXxmb3JtVGFyZ2V0fGZyYW1lQm9yZGVyfGhlYWRlcnN8aGVpZ2h0fGhpZGRlbnxoaWdofGhyZWZ8aHJlZkxhbmd8aHRtbEZvcnxodHRwRXF1aXZ8aWR8aW5wdXRNb2RlfGludGVncml0eXxpc3xrZXlQYXJhbXN8a2V5VHlwZXxraW5kfGxhYmVsfGxhbmd8bGlzdHxsb2FkaW5nfGxvb3B8bG93fG1hcmdpbkhlaWdodHxtYXJnaW5XaWR0aHxtYXh8bWF4TGVuZ3RofG1lZGlhfG1lZGlhR3JvdXB8bWV0aG9kfG1pbnxtaW5MZW5ndGh8bXVsdGlwbGV8bXV0ZWR8bmFtZXxub25jZXxub1ZhbGlkYXRlfG9wZW58b3B0aW11bXxwYXR0ZXJufHBsYWNlaG9sZGVyfHBsYXlzSW5saW5lfHBvc3RlcnxwcmVsb2FkfHByb2ZpbGV8cmFkaW9Hcm91cHxyZWFkT25seXxyZWZlcnJlclBvbGljeXxyZWx8cmVxdWlyZWR8cmV2ZXJzZWR8cm9sZXxyb3dzfHJvd1NwYW58c2FuZGJveHxzY29wZXxzY29wZWR8c2Nyb2xsaW5nfHNlYW1sZXNzfHNlbGVjdGVkfHNoYXBlfHNpemV8c2l6ZXN8c2xvdHxzcGFufHNwZWxsQ2hlY2t8c3JjfHNyY0RvY3xzcmNMYW5nfHNyY1NldHxzdGFydHxzdGVwfHN0eWxlfHN1bW1hcnl8dGFiSW5kZXh8dGFyZ2V0fHRpdGxlfHR5cGV8dXNlTWFwfHZhbHVlfHdpZHRofHdtb2RlfHdyYXB8YWJvdXR8ZGF0YXR5cGV8aW5saXN0fHByZWZpeHxwcm9wZXJ0eXxyZXNvdXJjZXx0eXBlb2Z8dm9jYWJ8YXV0b0NhcGl0YWxpemV8YXV0b0NvcnJlY3R8YXV0b1NhdmV8Y29sb3J8aW5lcnR8aXRlbVByb3B8aXRlbVNjb3BlfGl0ZW1UeXBlfGl0ZW1JRHxpdGVtUmVmfG9ufHJlc3VsdHN8c2VjdXJpdHl8dW5zZWxlY3RhYmxlfGFjY2VudEhlaWdodHxhY2N1bXVsYXRlfGFkZGl0aXZlfGFsaWdubWVudEJhc2VsaW5lfGFsbG93UmVvcmRlcnxhbHBoYWJldGljfGFtcGxpdHVkZXxhcmFiaWNGb3JtfGFzY2VudHxhdHRyaWJ1dGVOYW1lfGF0dHJpYnV0ZVR5cGV8YXV0b1JldmVyc2V8YXppbXV0aHxiYXNlRnJlcXVlbmN5fGJhc2VsaW5lU2hpZnR8YmFzZVByb2ZpbGV8YmJveHxiZWdpbnxiaWFzfGJ5fGNhbGNNb2RlfGNhcEhlaWdodHxjbGlwfGNsaXBQYXRoVW5pdHN8Y2xpcFBhdGh8Y2xpcFJ1bGV8Y29sb3JJbnRlcnBvbGF0aW9ufGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnN8Y29sb3JQcm9maWxlfGNvbG9yUmVuZGVyaW5nfGNvbnRlbnRTY3JpcHRUeXBlfGNvbnRlbnRTdHlsZVR5cGV8Y3Vyc29yfGN4fGN5fGR8ZGVjZWxlcmF0ZXxkZXNjZW50fGRpZmZ1c2VDb25zdGFudHxkaXJlY3Rpb258ZGlzcGxheXxkaXZpc29yfGRvbWluYW50QmFzZWxpbmV8ZHVyfGR4fGR5fGVkZ2VNb2RlfGVsZXZhdGlvbnxlbmFibGVCYWNrZ3JvdW5kfGVuZHxleHBvbmVudHxleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkfGZpbGx8ZmlsbE9wYWNpdHl8ZmlsbFJ1bGV8ZmlsdGVyfGZpbHRlclJlc3xmaWx0ZXJVbml0c3xmbG9vZENvbG9yfGZsb29kT3BhY2l0eXxmb2N1c2FibGV8Zm9udEZhbWlseXxmb250U2l6ZXxmb250U2l6ZUFkanVzdHxmb250U3RyZXRjaHxmb250U3R5bGV8Zm9udFZhcmlhbnR8Zm9udFdlaWdodHxmb3JtYXR8ZnJvbXxmcnxmeHxmeXxnMXxnMnxnbHlwaE5hbWV8Z2x5cGhPcmllbnRhdGlvbkhvcml6b250YWx8Z2x5cGhPcmllbnRhdGlvblZlcnRpY2FsfGdseXBoUmVmfGdyYWRpZW50VHJhbnNmb3JtfGdyYWRpZW50VW5pdHN8aGFuZ2luZ3xob3JpekFkdlh8aG9yaXpPcmlnaW5YfGlkZW9ncmFwaGljfGltYWdlUmVuZGVyaW5nfGlufGluMnxpbnRlcmNlcHR8a3xrMXxrMnxrM3xrNHxrZXJuZWxNYXRyaXh8a2VybmVsVW5pdExlbmd0aHxrZXJuaW5nfGtleVBvaW50c3xrZXlTcGxpbmVzfGtleVRpbWVzfGxlbmd0aEFkanVzdHxsZXR0ZXJTcGFjaW5nfGxpZ2h0aW5nQ29sb3J8bGltaXRpbmdDb25lQW5nbGV8bG9jYWx8bWFya2VyRW5kfG1hcmtlck1pZHxtYXJrZXJTdGFydHxtYXJrZXJIZWlnaHR8bWFya2VyVW5pdHN8bWFya2VyV2lkdGh8bWFza3xtYXNrQ29udGVudFVuaXRzfG1hc2tVbml0c3xtYXRoZW1hdGljYWx8bW9kZXxudW1PY3RhdmVzfG9mZnNldHxvcGFjaXR5fG9wZXJhdG9yfG9yZGVyfG9yaWVudHxvcmllbnRhdGlvbnxvcmlnaW58b3ZlcmZsb3d8b3ZlcmxpbmVQb3NpdGlvbnxvdmVybGluZVRoaWNrbmVzc3xwYW5vc2UxfHBhaW50T3JkZXJ8cGF0aExlbmd0aHxwYXR0ZXJuQ29udGVudFVuaXRzfHBhdHRlcm5UcmFuc2Zvcm18cGF0dGVyblVuaXRzfHBvaW50ZXJFdmVudHN8cG9pbnRzfHBvaW50c0F0WHxwb2ludHNBdFl8cG9pbnRzQXRafHByZXNlcnZlQWxwaGF8cHJlc2VydmVBc3BlY3RSYXRpb3xwcmltaXRpdmVVbml0c3xyfHJhZGl1c3xyZWZYfHJlZll8cmVuZGVyaW5nSW50ZW50fHJlcGVhdENvdW50fHJlcGVhdER1cnxyZXF1aXJlZEV4dGVuc2lvbnN8cmVxdWlyZWRGZWF0dXJlc3xyZXN0YXJ0fHJlc3VsdHxyb3RhdGV8cnh8cnl8c2NhbGV8c2VlZHxzaGFwZVJlbmRlcmluZ3xzbG9wZXxzcGFjaW5nfHNwZWN1bGFyQ29uc3RhbnR8c3BlY3VsYXJFeHBvbmVudHxzcGVlZHxzcHJlYWRNZXRob2R8c3RhcnRPZmZzZXR8c3RkRGV2aWF0aW9ufHN0ZW1ofHN0ZW12fHN0aXRjaFRpbGVzfHN0b3BDb2xvcnxzdG9wT3BhY2l0eXxzdHJpa2V0aHJvdWdoUG9zaXRpb258c3RyaWtldGhyb3VnaFRoaWNrbmVzc3xzdHJpbmd8c3Ryb2tlfHN0cm9rZURhc2hhcnJheXxzdHJva2VEYXNob2Zmc2V0fHN0cm9rZUxpbmVjYXB8c3Ryb2tlTGluZWpvaW58c3Ryb2tlTWl0ZXJsaW1pdHxzdHJva2VPcGFjaXR5fHN0cm9rZVdpZHRofHN1cmZhY2VTY2FsZXxzeXN0ZW1MYW5ndWFnZXx0YWJsZVZhbHVlc3x0YXJnZXRYfHRhcmdldFl8dGV4dEFuY2hvcnx0ZXh0RGVjb3JhdGlvbnx0ZXh0UmVuZGVyaW5nfHRleHRMZW5ndGh8dG98dHJhbnNmb3JtfHUxfHUyfHVuZGVybGluZVBvc2l0aW9ufHVuZGVybGluZVRoaWNrbmVzc3x1bmljb2RlfHVuaWNvZGVCaWRpfHVuaWNvZGVSYW5nZXx1bml0c1BlckVtfHZBbHBoYWJldGljfHZIYW5naW5nfHZJZGVvZ3JhcGhpY3x2TWF0aGVtYXRpY2FsfHZhbHVlc3x2ZWN0b3JFZmZlY3R8dmVyc2lvbnx2ZXJ0QWR2WXx2ZXJ0T3JpZ2luWHx2ZXJ0T3JpZ2luWXx2aWV3Qm94fHZpZXdUYXJnZXR8dmlzaWJpbGl0eXx3aWR0aHN8d29yZFNwYWNpbmd8d3JpdGluZ01vZGV8eHx4SGVpZ2h0fHgxfHgyfHhDaGFubmVsU2VsZWN0b3J8eGxpbmtBY3R1YXRlfHhsaW5rQXJjcm9sZXx4bGlua0hyZWZ8eGxpbmtSb2xlfHhsaW5rU2hvd3x4bGlua1RpdGxlfHhsaW5rVHlwZXx4bWxCYXNlfHhtbG5zfHhtbG5zWGxpbmt8eG1sTGFuZ3x4bWxTcGFjZXx5fHkxfHkyfHlDaGFubmVsU2VsZWN0b3J8enx6b29tQW5kUGFufGZvcnxjbGFzc3xhdXRvZm9jdXMpfCgoW0RkXVtBYV1bVHRdW0FhXXxbQWFdW1JyXVtJaV1bQWFdfHgpLS4qKSkkLzsgLy8gaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81YmZlZTY4YTRjZDdlNjAwOWVmNjFkMjNcblxudmFyIGluZGV4ID0gbWVtb2l6ZShmdW5jdGlvbiAocHJvcCkge1xuICByZXR1cm4gcmVhY3RQcm9wc1JlZ2V4LnRlc3QocHJvcCkgfHwgcHJvcC5jaGFyQ29kZUF0KDApID09PSAxMTFcbiAgLyogbyAqL1xuICAmJiBwcm9wLmNoYXJDb2RlQXQoMSkgPT09IDExMFxuICAvKiBuICovXG4gICYmIHByb3AuY2hhckNvZGVBdCgyKSA8IDkxO1xufVxuLyogWisxICovXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiIsImZ1bmN0aW9uIG1lbW9pemUoZm4pIHtcbiAgdmFyIGNhY2hlID0ge307XG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGNhY2hlW2FyZ10gPT09IHVuZGVmaW5lZCkgY2FjaGVbYXJnXSA9IGZuKGFyZyk7XG4gICAgcmV0dXJuIGNhY2hlW2FyZ107XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemU7XG4iLCJmdW5jdGlvbiBzdHlsaXNfbWluIChXKSB7XG4gIGZ1bmN0aW9uIE0oZCwgYywgZSwgaCwgYSkge1xuICAgIGZvciAodmFyIG0gPSAwLCBiID0gMCwgdiA9IDAsIG4gPSAwLCBxLCBnLCB4ID0gMCwgSyA9IDAsIGssIHUgPSBrID0gcSA9IDAsIGwgPSAwLCByID0gMCwgSSA9IDAsIHQgPSAwLCBCID0gZS5sZW5ndGgsIEogPSBCIC0gMSwgeSwgZiA9ICcnLCBwID0gJycsIEYgPSAnJywgRyA9ICcnLCBDOyBsIDwgQjspIHtcbiAgICAgIGcgPSBlLmNoYXJDb2RlQXQobCk7XG4gICAgICBsID09PSBKICYmIDAgIT09IGIgKyBuICsgdiArIG0gJiYgKDAgIT09IGIgJiYgKGcgPSA0NyA9PT0gYiA/IDEwIDogNDcpLCBuID0gdiA9IG0gPSAwLCBCKyssIEorKyk7XG5cbiAgICAgIGlmICgwID09PSBiICsgbiArIHYgKyBtKSB7XG4gICAgICAgIGlmIChsID09PSBKICYmICgwIDwgciAmJiAoZiA9IGYucmVwbGFjZShOLCAnJykpLCAwIDwgZi50cmltKCkubGVuZ3RoKSkge1xuICAgICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIGNhc2UgNTk6XG4gICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGYgKz0gZS5jaGFyQXQobCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZyA9IDU5O1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgY2FzZSAxMjM6XG4gICAgICAgICAgICBmID0gZi50cmltKCk7XG4gICAgICAgICAgICBxID0gZi5jaGFyQ29kZUF0KDApO1xuICAgICAgICAgICAgayA9IDE7XG5cbiAgICAgICAgICAgIGZvciAodCA9ICsrbDsgbCA8IEI7KSB7XG4gICAgICAgICAgICAgIHN3aXRjaCAoZyA9IGUuY2hhckNvZGVBdChsKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMTIzOlxuICAgICAgICAgICAgICAgICAgaysrO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDEyNTpcbiAgICAgICAgICAgICAgICAgIGstLTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZyA9IGUuY2hhckNvZGVBdChsICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0MjpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgICAgICAgICBhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHUgPSBsICsgMTsgdSA8IEo7ICsrdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGUuY2hhckNvZGVBdCh1KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoNDIgPT09IGcgJiYgNDIgPT09IGUuY2hhckNvZGVBdCh1IC0gMSkgJiYgbCArIDIgIT09IHUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9IHUgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoNDcgPT09IGcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9IHUgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbCA9IHU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA5MTpcbiAgICAgICAgICAgICAgICAgIGcrKztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICBnKys7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICBmb3IgKDsgbCsrIDwgSiAmJiBlLmNoYXJDb2RlQXQobCkgIT09IGc7KSB7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICgwID09PSBrKSBicmVhaztcbiAgICAgICAgICAgICAgbCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrID0gZS5zdWJzdHJpbmcodCwgbCk7XG4gICAgICAgICAgICAwID09PSBxICYmIChxID0gKGYgPSBmLnJlcGxhY2UoY2EsICcnKS50cmltKCkpLmNoYXJDb2RlQXQoMCkpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHEpIHtcbiAgICAgICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgICAgICAwIDwgciAmJiAoZiA9IGYucmVwbGFjZShOLCAnJykpO1xuICAgICAgICAgICAgICAgIGcgPSBmLmNoYXJDb2RlQXQoMSk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTAwOlxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDk6XG4gICAgICAgICAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgICAgICAgIGNhc2UgNDU6XG4gICAgICAgICAgICAgICAgICAgIHIgPSBjO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgciA9IE87XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgayA9IE0oYywgciwgaywgZywgYSArIDEpO1xuICAgICAgICAgICAgICAgIHQgPSBrLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAwIDwgQSAmJiAociA9IFgoTywgZiwgSSksIEMgPSBIKDMsIGssIHIsIGMsIEQsIHosIHQsIGcsIGEsIGgpLCBmID0gci5qb2luKCcnKSwgdm9pZCAwICE9PSBDICYmIDAgPT09ICh0ID0gKGsgPSBDLnRyaW0oKSkubGVuZ3RoKSAmJiAoZyA9IDAsIGsgPSAnJykpO1xuICAgICAgICAgICAgICAgIGlmICgwIDwgdCkgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgICAgICAgICAgZiA9IGYucmVwbGFjZShkYSwgZWEpO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIDEwMDpcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTA5OlxuICAgICAgICAgICAgICAgICAgY2FzZSA0NTpcbiAgICAgICAgICAgICAgICAgICAgayA9IGYgKyAneycgKyBrICsgJ30nO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDc6XG4gICAgICAgICAgICAgICAgICAgIGYgPSBmLnJlcGxhY2UoZmEsICckMSAkMicpO1xuICAgICAgICAgICAgICAgICAgICBrID0gZiArICd7JyArIGsgKyAnfSc7XG4gICAgICAgICAgICAgICAgICAgIGsgPSAxID09PSB3IHx8IDIgPT09IHcgJiYgTCgnQCcgKyBrLCAzKSA/ICdALXdlYmtpdC0nICsgayArICdAJyArIGsgOiAnQCcgKyBrO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgayA9IGYgKyBrLCAxMTIgPT09IGggJiYgKGsgPSAocCArPSBrLCAnJykpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBrID0gJyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBrID0gTShjLCBYKGMsIGYsIEkpLCBrLCBoLCBhICsgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEYgKz0gaztcbiAgICAgICAgICAgIGsgPSBJID0gciA9IHUgPSBxID0gMDtcbiAgICAgICAgICAgIGYgPSAnJztcbiAgICAgICAgICAgIGcgPSBlLmNoYXJDb2RlQXQoKytsKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMjU6XG4gICAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgICAgIGYgPSAoMCA8IHIgPyBmLnJlcGxhY2UoTiwgJycpIDogZikudHJpbSgpO1xuICAgICAgICAgICAgaWYgKDEgPCAodCA9IGYubGVuZ3RoKSkgc3dpdGNoICgwID09PSB1ICYmIChxID0gZi5jaGFyQ29kZUF0KDApLCA0NSA9PT0gcSB8fCA5NiA8IHEgJiYgMTIzID4gcSkgJiYgKHQgPSAoZiA9IGYucmVwbGFjZSgnICcsICc6JykpLmxlbmd0aCksIDAgPCBBICYmIHZvaWQgMCAhPT0gKEMgPSBIKDEsIGYsIGMsIGQsIEQsIHosIHAubGVuZ3RoLCBoLCBhLCBoKSkgJiYgMCA9PT0gKHQgPSAoZiA9IEMudHJpbSgpKS5sZW5ndGgpICYmIChmID0gJ1xceDAwXFx4MDAnKSwgcSA9IGYuY2hhckNvZGVBdCgwKSwgZyA9IGYuY2hhckNvZGVBdCgxKSwgcSkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgICAgICBpZiAoMTA1ID09PSBnIHx8IDk5ID09PSBnKSB7XG4gICAgICAgICAgICAgICAgICBHICs9IGYgKyBlLmNoYXJBdChsKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIDU4ICE9PSBmLmNoYXJDb2RlQXQodCAtIDEpICYmIChwICs9IFAoZiwgcSwgZywgZi5jaGFyQ29kZUF0KDIpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBJID0gciA9IHUgPSBxID0gMDtcbiAgICAgICAgICAgIGYgPSAnJztcbiAgICAgICAgICAgIGcgPSBlLmNoYXJDb2RlQXQoKytsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICA0NyA9PT0gYiA/IGIgPSAwIDogMCA9PT0gMSArIHEgJiYgMTA3ICE9PSBoICYmIDAgPCBmLmxlbmd0aCAmJiAociA9IDEsIGYgKz0gJ1xceDAwJyk7XG4gICAgICAgICAgMCA8IEEgKiBZICYmIEgoMCwgZiwgYywgZCwgRCwgeiwgcC5sZW5ndGgsIGgsIGEsIGgpO1xuICAgICAgICAgIHogPSAxO1xuICAgICAgICAgIEQrKztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDU5OlxuICAgICAgICBjYXNlIDEyNTpcbiAgICAgICAgICBpZiAoMCA9PT0gYiArIG4gKyB2ICsgbSkge1xuICAgICAgICAgICAgeisrO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgeisrO1xuICAgICAgICAgIHkgPSBlLmNoYXJBdChsKTtcblxuICAgICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgaWYgKDAgPT09IG4gKyBtICsgYikgc3dpdGNoICh4KSB7XG4gICAgICAgICAgICAgICAgY2FzZSA0NDpcbiAgICAgICAgICAgICAgICBjYXNlIDU4OlxuICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICAgICAgeSA9ICcnO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgMzIgIT09IGcgJiYgKHkgPSAnICcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIHkgPSAnXFxcXDAnO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgeSA9ICdcXFxcZic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICB5ID0gJ1xcXFx2JztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgbSAmJiAociA9IEkgPSAxLCB5ID0gJ1xcZicgKyB5KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTA4OlxuICAgICAgICAgICAgICBpZiAoMCA9PT0gbiArIGIgKyBtICsgRSAmJiAwIDwgdSkgc3dpdGNoIChsIC0gdSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgIDExMiA9PT0geCAmJiA1OCA9PT0gZS5jaGFyQ29kZUF0KGwgLSAzKSAmJiAoRSA9IHgpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgMTExID09PSBLICYmIChFID0gSyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNTg6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgbSAmJiAodSA9IGwpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0NDpcbiAgICAgICAgICAgICAgMCA9PT0gYiArIHYgKyBuICsgbSAmJiAociA9IDEsIHkgKz0gJ1xccicpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgIDAgPT09IGIgJiYgKG4gPSBuID09PSBnID8gMCA6IDAgPT09IG4gPyBnIDogbik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDkxOlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIHYgJiYgbSsrO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA5MzpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyB2ICYmIG0tLTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDE6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgbSAmJiB2LS07XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICBpZiAoMCA9PT0gbiArIGIgKyBtKSB7XG4gICAgICAgICAgICAgICAgaWYgKDAgPT09IHEpIHN3aXRjaCAoMiAqIHggKyAzICogSykge1xuICAgICAgICAgICAgICAgICAgY2FzZSA1MzM6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBxID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdisrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICAgIDAgPT09IGIgKyB2ICsgbiArIG0gKyB1ICsgayAmJiAoayA9IDEpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0MjpcbiAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgIGlmICghKDAgPCBuICsgbSArIHYpKSBzd2l0Y2ggKGIpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICBzd2l0Y2ggKDIgKiBnICsgMyAqIGUuY2hhckNvZGVBdChsICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMzU6XG4gICAgICAgICAgICAgICAgICAgICAgYiA9IDQ3O1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjIwOlxuICAgICAgICAgICAgICAgICAgICAgIHQgPSBsLCBiID0gNDI7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0MjpcbiAgICAgICAgICAgICAgICAgIDQ3ID09PSBnICYmIDQyID09PSB4ICYmIHQgKyAyICE9PSBsICYmICgzMyA9PT0gZS5jaGFyQ29kZUF0KHQgKyAyKSAmJiAocCArPSBlLnN1YnN0cmluZyh0LCBsICsgMSkpLCB5ID0gJycsIGIgPSAwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIDAgPT09IGIgJiYgKGYgKz0geSk7XG4gICAgICB9XG5cbiAgICAgIEsgPSB4O1xuICAgICAgeCA9IGc7XG4gICAgICBsKys7XG4gICAgfVxuXG4gICAgdCA9IHAubGVuZ3RoO1xuXG4gICAgaWYgKDAgPCB0KSB7XG4gICAgICByID0gYztcbiAgICAgIGlmICgwIDwgQSAmJiAoQyA9IEgoMiwgcCwgciwgZCwgRCwgeiwgdCwgaCwgYSwgaCksIHZvaWQgMCAhPT0gQyAmJiAwID09PSAocCA9IEMpLmxlbmd0aCkpIHJldHVybiBHICsgcCArIEY7XG4gICAgICBwID0gci5qb2luKCcsJykgKyAneycgKyBwICsgJ30nO1xuXG4gICAgICBpZiAoMCAhPT0gdyAqIEUpIHtcbiAgICAgICAgMiAhPT0gdyB8fCBMKHAsIDIpIHx8IChFID0gMCk7XG5cbiAgICAgICAgc3dpdGNoIChFKSB7XG4gICAgICAgICAgY2FzZSAxMTE6XG4gICAgICAgICAgICBwID0gcC5yZXBsYWNlKGhhLCAnOi1tb3otJDEnKSArIHA7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMTEyOlxuICAgICAgICAgICAgcCA9IHAucmVwbGFjZShRLCAnOjotd2Via2l0LWlucHV0LSQxJykgKyBwLnJlcGxhY2UoUSwgJzo6LW1vei0kMScpICsgcC5yZXBsYWNlKFEsICc6LW1zLWlucHV0LSQxJykgKyBwO1xuICAgICAgICB9XG5cbiAgICAgICAgRSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIEcgKyBwICsgRjtcbiAgfVxuXG4gIGZ1bmN0aW9uIFgoZCwgYywgZSkge1xuICAgIHZhciBoID0gYy50cmltKCkuc3BsaXQoaWEpO1xuICAgIGMgPSBoO1xuICAgIHZhciBhID0gaC5sZW5ndGgsXG4gICAgICAgIG0gPSBkLmxlbmd0aDtcblxuICAgIHN3aXRjaCAobSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgY2FzZSAxOlxuICAgICAgICB2YXIgYiA9IDA7XG5cbiAgICAgICAgZm9yIChkID0gMCA9PT0gbSA/ICcnIDogZFswXSArICcgJzsgYiA8IGE7ICsrYikge1xuICAgICAgICAgIGNbYl0gPSBaKGQsIGNbYl0sIGUpLnRyaW0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB2YXIgdiA9IGIgPSAwO1xuXG4gICAgICAgIGZvciAoYyA9IFtdOyBiIDwgYTsgKytiKSB7XG4gICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBtOyArK24pIHtcbiAgICAgICAgICAgIGNbdisrXSA9IFooZFtuXSArICcgJywgaFtiXSwgZSkudHJpbSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIGM7XG4gIH1cblxuICBmdW5jdGlvbiBaKGQsIGMsIGUpIHtcbiAgICB2YXIgaCA9IGMuY2hhckNvZGVBdCgwKTtcbiAgICAzMyA+IGggJiYgKGggPSAoYyA9IGMudHJpbSgpKS5jaGFyQ29kZUF0KDApKTtcblxuICAgIHN3aXRjaCAoaCkge1xuICAgICAgY2FzZSAzODpcbiAgICAgICAgcmV0dXJuIGMucmVwbGFjZShGLCAnJDEnICsgZC50cmltKCkpO1xuXG4gICAgICBjYXNlIDU4OlxuICAgICAgICByZXR1cm4gZC50cmltKCkgKyBjLnJlcGxhY2UoRiwgJyQxJyArIGQudHJpbSgpKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKDAgPCAxICogZSAmJiAwIDwgYy5pbmRleE9mKCdcXGYnKSkgcmV0dXJuIGMucmVwbGFjZShGLCAoNTggPT09IGQuY2hhckNvZGVBdCgwKSA/ICcnIDogJyQxJykgKyBkLnRyaW0oKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGQgKyBjO1xuICB9XG5cbiAgZnVuY3Rpb24gUChkLCBjLCBlLCBoKSB7XG4gICAgdmFyIGEgPSBkICsgJzsnLFxuICAgICAgICBtID0gMiAqIGMgKyAzICogZSArIDQgKiBoO1xuXG4gICAgaWYgKDk0NCA9PT0gbSkge1xuICAgICAgZCA9IGEuaW5kZXhPZignOicsIDkpICsgMTtcbiAgICAgIHZhciBiID0gYS5zdWJzdHJpbmcoZCwgYS5sZW5ndGggLSAxKS50cmltKCk7XG4gICAgICBiID0gYS5zdWJzdHJpbmcoMCwgZCkudHJpbSgpICsgYiArICc7JztcbiAgICAgIHJldHVybiAxID09PSB3IHx8IDIgPT09IHcgJiYgTChiLCAxKSA/ICctd2Via2l0LScgKyBiICsgYiA6IGI7XG4gICAgfVxuXG4gICAgaWYgKDAgPT09IHcgfHwgMiA9PT0gdyAmJiAhTChhLCAxKSkgcmV0dXJuIGE7XG5cbiAgICBzd2l0Y2ggKG0pIHtcbiAgICAgIGNhc2UgMTAxNTpcbiAgICAgICAgcmV0dXJuIDk3ID09PSBhLmNoYXJDb2RlQXQoMTApID8gJy13ZWJraXQtJyArIGEgKyBhIDogYTtcblxuICAgICAgY2FzZSA5NTE6XG4gICAgICAgIHJldHVybiAxMTYgPT09IGEuY2hhckNvZGVBdCgzKSA/ICctd2Via2l0LScgKyBhICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgOTYzOlxuICAgICAgICByZXR1cm4gMTEwID09PSBhLmNoYXJDb2RlQXQoNSkgPyAnLXdlYmtpdC0nICsgYSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDEwMDk6XG4gICAgICAgIGlmICgxMDAgIT09IGEuY2hhckNvZGVBdCg0KSkgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTY5OlxuICAgICAgY2FzZSA5NDI6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgOTc4OlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1vei0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgMTAxOTpcbiAgICAgIGNhc2UgOTgzOlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1vei0nICsgYSArICctbXMtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDg4MzpcbiAgICAgICAgaWYgKDQ1ID09PSBhLmNoYXJDb2RlQXQoOCkpIHJldHVybiAnLXdlYmtpdC0nICsgYSArIGE7XG4gICAgICAgIGlmICgwIDwgYS5pbmRleE9mKCdpbWFnZS1zZXQoJywgMTEpKSByZXR1cm4gYS5yZXBsYWNlKGphLCAnJDEtd2Via2l0LSQyJykgKyBhO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA5MzI6XG4gICAgICAgIGlmICg0NSA9PT0gYS5jaGFyQ29kZUF0KDQpKSBzd2l0Y2ggKGEuY2hhckNvZGVBdCg1KSkge1xuICAgICAgICAgIGNhc2UgMTAzOlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LWJveC0nICsgYS5yZXBsYWNlKCctZ3JvdycsICcnKSArICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYS5yZXBsYWNlKCdncm93JywgJ3Bvc2l0aXZlJykgKyBhO1xuXG4gICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhLnJlcGxhY2UoJ3NocmluaycsICduZWdhdGl2ZScpICsgYTtcblxuICAgICAgICAgIGNhc2UgOTg6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhLnJlcGxhY2UoJ2Jhc2lzJywgJ3ByZWZlcnJlZC1zaXplJykgKyBhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDk2NDpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LScgKyBhICsgYTtcblxuICAgICAgY2FzZSAxMDIzOlxuICAgICAgICBpZiAoOTkgIT09IGEuY2hhckNvZGVBdCg4KSkgYnJlYWs7XG4gICAgICAgIGIgPSBhLnN1YnN0cmluZyhhLmluZGV4T2YoJzonLCAxNSkpLnJlcGxhY2UoJ2ZsZXgtJywgJycpLnJlcGxhY2UoJ3NwYWNlLWJldHdlZW4nLCAnanVzdGlmeScpO1xuICAgICAgICByZXR1cm4gJy13ZWJraXQtYm94LXBhY2snICsgYiArICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LXBhY2snICsgYiArIGE7XG5cbiAgICAgIGNhc2UgMTAwNTpcbiAgICAgICAgcmV0dXJuIGthLnRlc3QoYSkgPyBhLnJlcGxhY2UoYWEsICc6LXdlYmtpdC0nKSArIGEucmVwbGFjZShhYSwgJzotbW96LScpICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgMWUzOlxuICAgICAgICBiID0gYS5zdWJzdHJpbmcoMTMpLnRyaW0oKTtcbiAgICAgICAgYyA9IGIuaW5kZXhPZignLScpICsgMTtcblxuICAgICAgICBzd2l0Y2ggKGIuY2hhckNvZGVBdCgwKSArIGIuY2hhckNvZGVBdChjKSkge1xuICAgICAgICAgIGNhc2UgMjI2OlxuICAgICAgICAgICAgYiA9IGEucmVwbGFjZShHLCAndGInKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAyMzI6XG4gICAgICAgICAgICBiID0gYS5yZXBsYWNlKEcsICd0Yi1ybCcpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDIyMDpcbiAgICAgICAgICAgIGIgPSBhLnJlcGxhY2UoRywgJ2xyJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGIgKyBhO1xuXG4gICAgICBjYXNlIDEwMTc6XG4gICAgICAgIGlmICgtMSA9PT0gYS5pbmRleE9mKCdzdGlja3knLCA5KSkgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTc1OlxuICAgICAgICBjID0gKGEgPSBkKS5sZW5ndGggLSAxMDtcbiAgICAgICAgYiA9ICgzMyA9PT0gYS5jaGFyQ29kZUF0KGMpID8gYS5zdWJzdHJpbmcoMCwgYykgOiBhKS5zdWJzdHJpbmcoZC5pbmRleE9mKCc6JywgNykgKyAxKS50cmltKCk7XG5cbiAgICAgICAgc3dpdGNoIChtID0gYi5jaGFyQ29kZUF0KDApICsgKGIuY2hhckNvZGVBdCg3KSB8IDApKSB7XG4gICAgICAgICAgY2FzZSAyMDM6XG4gICAgICAgICAgICBpZiAoMTExID4gYi5jaGFyQ29kZUF0KDgpKSBicmVhaztcblxuICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgYSA9IGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgYikgKyAnOycgKyBhO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDIwNzpcbiAgICAgICAgICBjYXNlIDEwMjpcbiAgICAgICAgICAgIGEgPSBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArICgxMDIgPCBtID8gJ2lubGluZS0nIDogJycpICsgJ2JveCcpICsgJzsnICsgYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyBiKSArICc7JyArIGEucmVwbGFjZShiLCAnLW1zLScgKyBiICsgJ2JveCcpICsgJzsnICsgYTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhICsgJzsnO1xuXG4gICAgICBjYXNlIDkzODpcbiAgICAgICAgaWYgKDQ1ID09PSBhLmNoYXJDb2RlQXQoNSkpIHN3aXRjaCAoYS5jaGFyQ29kZUF0KDYpKSB7XG4gICAgICAgICAgY2FzZSAxMDU6XG4gICAgICAgICAgICByZXR1cm4gYiA9IGEucmVwbGFjZSgnLWl0ZW1zJywgJycpLCAnLXdlYmtpdC0nICsgYSArICctd2Via2l0LWJveC0nICsgYiArICctbXMtZmxleC0nICsgYiArIGE7XG5cbiAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC1pdGVtLScgKyBhLnJlcGxhY2UoYmEsICcnKSArIGE7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LWxpbmUtcGFjaycgKyBhLnJlcGxhY2UoJ2FsaWduLWNvbnRlbnQnLCAnJykucmVwbGFjZShiYSwgJycpICsgYTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA5NzM6XG4gICAgICBjYXNlIDk4OTpcbiAgICAgICAgaWYgKDQ1ICE9PSBhLmNoYXJDb2RlQXQoMykgfHwgMTIyID09PSBhLmNoYXJDb2RlQXQoNCkpIGJyZWFrO1xuXG4gICAgICBjYXNlIDkzMTpcbiAgICAgIGNhc2UgOTUzOlxuICAgICAgICBpZiAoITAgPT09IGxhLnRlc3QoZCkpIHJldHVybiAxMTUgPT09IChiID0gZC5zdWJzdHJpbmcoZC5pbmRleE9mKCc6JykgKyAxKSkuY2hhckNvZGVBdCgwKSA/IFAoZC5yZXBsYWNlKCdzdHJldGNoJywgJ2ZpbGwtYXZhaWxhYmxlJyksIGMsIGUsIGgpLnJlcGxhY2UoJzpmaWxsLWF2YWlsYWJsZScsICc6c3RyZXRjaCcpIDogYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyBiKSArIGEucmVwbGFjZShiLCAnLW1vei0nICsgYi5yZXBsYWNlKCdmaWxsLScsICcnKSkgKyBhO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA5NjI6XG4gICAgICAgIGlmIChhID0gJy13ZWJraXQtJyArIGEgKyAoMTAyID09PSBhLmNoYXJDb2RlQXQoNSkgPyAnLW1zLScgKyBhIDogJycpICsgYSwgMjExID09PSBlICsgaCAmJiAxMDUgPT09IGEuY2hhckNvZGVBdCgxMykgJiYgMCA8IGEuaW5kZXhPZigndHJhbnNmb3JtJywgMTApKSByZXR1cm4gYS5zdWJzdHJpbmcoMCwgYS5pbmRleE9mKCc7JywgMjcpICsgMSkucmVwbGFjZShtYSwgJyQxLXdlYmtpdC0kMicpICsgYTtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEwoZCwgYykge1xuICAgIHZhciBlID0gZC5pbmRleE9mKDEgPT09IGMgPyAnOicgOiAneycpLFxuICAgICAgICBoID0gZC5zdWJzdHJpbmcoMCwgMyAhPT0gYyA/IGUgOiAxMCk7XG4gICAgZSA9IGQuc3Vic3RyaW5nKGUgKyAxLCBkLmxlbmd0aCAtIDEpO1xuICAgIHJldHVybiBSKDIgIT09IGMgPyBoIDogaC5yZXBsYWNlKG5hLCAnJDEnKSwgZSwgYyk7XG4gIH1cblxuICBmdW5jdGlvbiBlYShkLCBjKSB7XG4gICAgdmFyIGUgPSBQKGMsIGMuY2hhckNvZGVBdCgwKSwgYy5jaGFyQ29kZUF0KDEpLCBjLmNoYXJDb2RlQXQoMikpO1xuICAgIHJldHVybiBlICE9PSBjICsgJzsnID8gZS5yZXBsYWNlKG9hLCAnIG9yICgkMSknKS5zdWJzdHJpbmcoNCkgOiAnKCcgKyBjICsgJyknO1xuICB9XG5cbiAgZnVuY3Rpb24gSChkLCBjLCBlLCBoLCBhLCBtLCBiLCB2LCBuLCBxKSB7XG4gICAgZm9yICh2YXIgZyA9IDAsIHggPSBjLCB3OyBnIDwgQTsgKytnKSB7XG4gICAgICBzd2l0Y2ggKHcgPSBTW2ddLmNhbGwoQiwgZCwgeCwgZSwgaCwgYSwgbSwgYiwgdiwgbiwgcSkpIHtcbiAgICAgICAgY2FzZSB2b2lkIDA6XG4gICAgICAgIGNhc2UgITE6XG4gICAgICAgIGNhc2UgITA6XG4gICAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHggPSB3O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh4ICE9PSBjKSByZXR1cm4geDtcbiAgfVxuXG4gIGZ1bmN0aW9uIFQoZCkge1xuICAgIHN3aXRjaCAoZCkge1xuICAgICAgY2FzZSB2b2lkIDA6XG4gICAgICBjYXNlIG51bGw6XG4gICAgICAgIEEgPSBTLmxlbmd0aCA9IDA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGQpIFNbQSsrXSA9IGQ7ZWxzZSBpZiAoJ29iamVjdCcgPT09IHR5cGVvZiBkKSBmb3IgKHZhciBjID0gMCwgZSA9IGQubGVuZ3RoOyBjIDwgZTsgKytjKSB7XG4gICAgICAgICAgVChkW2NdKTtcbiAgICAgICAgfSBlbHNlIFkgPSAhIWQgfCAwO1xuICAgIH1cblxuICAgIHJldHVybiBUO1xuICB9XG5cbiAgZnVuY3Rpb24gVShkKSB7XG4gICAgZCA9IGQucHJlZml4O1xuICAgIHZvaWQgMCAhPT0gZCAmJiAoUiA9IG51bGwsIGQgPyAnZnVuY3Rpb24nICE9PSB0eXBlb2YgZCA/IHcgPSAxIDogKHcgPSAyLCBSID0gZCkgOiB3ID0gMCk7XG4gICAgcmV0dXJuIFU7XG4gIH1cblxuICBmdW5jdGlvbiBCKGQsIGMpIHtcbiAgICB2YXIgZSA9IGQ7XG4gICAgMzMgPiBlLmNoYXJDb2RlQXQoMCkgJiYgKGUgPSBlLnRyaW0oKSk7XG4gICAgViA9IGU7XG4gICAgZSA9IFtWXTtcblxuICAgIGlmICgwIDwgQSkge1xuICAgICAgdmFyIGggPSBIKC0xLCBjLCBlLCBlLCBELCB6LCAwLCAwLCAwLCAwKTtcbiAgICAgIHZvaWQgMCAhPT0gaCAmJiAnc3RyaW5nJyA9PT0gdHlwZW9mIGggJiYgKGMgPSBoKTtcbiAgICB9XG5cbiAgICB2YXIgYSA9IE0oTywgZSwgYywgMCwgMCk7XG4gICAgMCA8IEEgJiYgKGggPSBIKC0yLCBhLCBlLCBlLCBELCB6LCBhLmxlbmd0aCwgMCwgMCwgMCksIHZvaWQgMCAhPT0gaCAmJiAoYSA9IGgpKTtcbiAgICBWID0gJyc7XG4gICAgRSA9IDA7XG4gICAgeiA9IEQgPSAxO1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgdmFyIGNhID0gL15cXDArL2csXG4gICAgICBOID0gL1tcXDBcXHJcXGZdL2csXG4gICAgICBhYSA9IC86ICovZyxcbiAgICAgIGthID0gL3pvb3xncmEvLFxuICAgICAgbWEgPSAvKFssOiBdKSh0cmFuc2Zvcm0pL2csXG4gICAgICBpYSA9IC8sXFxyKz8vZyxcbiAgICAgIEYgPSAvKFtcXHRcXHJcXG4gXSkqXFxmPyYvZyxcbiAgICAgIGZhID0gL0Aoa1xcdyspXFxzKihcXFMqKVxccyovLFxuICAgICAgUSA9IC86OihwbGFjZSkvZyxcbiAgICAgIGhhID0gLzoocmVhZC1vbmx5KS9nLFxuICAgICAgRyA9IC9bc3ZoXVxcdystW3RibHJdezJ9LyxcbiAgICAgIGRhID0gL1xcKFxccyooLiopXFxzKlxcKS9nLFxuICAgICAgb2EgPSAvKFtcXHNcXFNdKj8pOy9nLFxuICAgICAgYmEgPSAvLXNlbGZ8ZmxleC0vZyxcbiAgICAgIG5hID0gL1teXSo/KDpbcnBdW2VsXWFbXFx3LV0rKVteXSovLFxuICAgICAgbGEgPSAvc3RyZXRjaHw6XFxzKlxcdytcXC0oPzpjb250ZXxhdmFpbCkvLFxuICAgICAgamEgPSAvKFteLV0pKGltYWdlLXNldFxcKCkvLFxuICAgICAgeiA9IDEsXG4gICAgICBEID0gMSxcbiAgICAgIEUgPSAwLFxuICAgICAgdyA9IDEsXG4gICAgICBPID0gW10sXG4gICAgICBTID0gW10sXG4gICAgICBBID0gMCxcbiAgICAgIFIgPSBudWxsLFxuICAgICAgWSA9IDAsXG4gICAgICBWID0gJyc7XG4gIEIudXNlID0gVDtcbiAgQi5zZXQgPSBVO1xuICB2b2lkIDAgIT09IFcgJiYgVShXKTtcbiAgcmV0dXJuIEI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxpc19taW47XG4iLCJ2YXIgdW5pdGxlc3NLZXlzID0ge1xuICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogMSxcbiAgYm9yZGVySW1hZ2VPdXRzZXQ6IDEsXG4gIGJvcmRlckltYWdlU2xpY2U6IDEsXG4gIGJvcmRlckltYWdlV2lkdGg6IDEsXG4gIGJveEZsZXg6IDEsXG4gIGJveEZsZXhHcm91cDogMSxcbiAgYm94T3JkaW5hbEdyb3VwOiAxLFxuICBjb2x1bW5Db3VudDogMSxcbiAgY29sdW1uczogMSxcbiAgZmxleDogMSxcbiAgZmxleEdyb3c6IDEsXG4gIGZsZXhQb3NpdGl2ZTogMSxcbiAgZmxleFNocmluazogMSxcbiAgZmxleE5lZ2F0aXZlOiAxLFxuICBmbGV4T3JkZXI6IDEsXG4gIGdyaWRSb3c6IDEsXG4gIGdyaWRSb3dFbmQ6IDEsXG4gIGdyaWRSb3dTcGFuOiAxLFxuICBncmlkUm93U3RhcnQ6IDEsXG4gIGdyaWRDb2x1bW46IDEsXG4gIGdyaWRDb2x1bW5FbmQ6IDEsXG4gIGdyaWRDb2x1bW5TcGFuOiAxLFxuICBncmlkQ29sdW1uU3RhcnQ6IDEsXG4gIG1zR3JpZFJvdzogMSxcbiAgbXNHcmlkUm93U3BhbjogMSxcbiAgbXNHcmlkQ29sdW1uOiAxLFxuICBtc0dyaWRDb2x1bW5TcGFuOiAxLFxuICBmb250V2VpZ2h0OiAxLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBvcGFjaXR5OiAxLFxuICBvcmRlcjogMSxcbiAgb3JwaGFuczogMSxcbiAgdGFiU2l6ZTogMSxcbiAgd2lkb3dzOiAxLFxuICB6SW5kZXg6IDEsXG4gIHpvb206IDEsXG4gIFdlYmtpdExpbmVDbGFtcDogMSxcbiAgLy8gU1ZHLXJlbGF0ZWQgcHJvcGVydGllc1xuICBmaWxsT3BhY2l0eTogMSxcbiAgZmxvb2RPcGFjaXR5OiAxLFxuICBzdG9wT3BhY2l0eTogMSxcbiAgc3Ryb2tlRGFzaGFycmF5OiAxLFxuICBzdHJva2VEYXNob2Zmc2V0OiAxLFxuICBzdHJva2VNaXRlcmxpbWl0OiAxLFxuICBzdHJva2VPcGFjaXR5OiAxLFxuICBzdHJva2VXaWR0aDogMVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdW5pdGxlc3NLZXlzO1xuIiwiaW1wb3J0e3R5cGVPZiBhcyBlLGlzRWxlbWVudCBhcyB0LGlzVmFsaWRFbGVtZW50VHlwZSBhcyBufWZyb21cInJlYWN0LWlzXCI7aW1wb3J0IHIse3VzZVN0YXRlIGFzIG8sdXNlQ29udGV4dCBhcyBpLHVzZU1lbW8gYXMgcyx1c2VFZmZlY3QgYXMgYSx1c2VSZWYgYXMgYyxjcmVhdGVFbGVtZW50IGFzIHUsdXNlRGVidWdWYWx1ZSBhcyBsLHVzZUxheW91dEVmZmVjdCBhcyBkfWZyb21cInJlYWN0XCI7aW1wb3J0IGggZnJvbVwic2hhbGxvd2VxdWFsXCI7aW1wb3J0IHAgZnJvbVwiQGVtb3Rpb24vc3R5bGlzXCI7aW1wb3J0IGYgZnJvbVwiQGVtb3Rpb24vdW5pdGxlc3NcIjtpbXBvcnQgbSBmcm9tXCJAZW1vdGlvbi9pcy1wcm9wLXZhbGlkXCI7aW1wb3J0IHkgZnJvbVwiaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3NcIjtmdW5jdGlvbiB2KCl7cmV0dXJuKHY9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgciBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLHIpJiYoZVtyXT1uW3JdKX1yZXR1cm4gZX0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgZz1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj1bZVswXV0scj0wLG89dC5sZW5ndGg7cjxvO3IrPTEpbi5wdXNoKHRbcl0sZVtyKzFdKTtyZXR1cm4gbn0sUz1mdW5jdGlvbih0KXtyZXR1cm4gbnVsbCE9PXQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZcIltvYmplY3QgT2JqZWN0XVwiPT09KHQudG9TdHJpbmc/dC50b1N0cmluZygpOk9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KSkmJiFlKHQpfSx3PU9iamVjdC5mcmVlemUoW10pLEU9T2JqZWN0LmZyZWV6ZSh7fSk7ZnVuY3Rpb24gYihlKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlfWZ1bmN0aW9uIF8oZSl7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmXCJzdHJpbmdcIj09dHlwZW9mIGUmJmV8fGUuZGlzcGxheU5hbWV8fGUubmFtZXx8XCJDb21wb25lbnRcIn1mdW5jdGlvbiBOKGUpe3JldHVybiBlJiZcInN0cmluZ1wiPT10eXBlb2YgZS5zdHlsZWRDb21wb25lbnRJZH12YXIgQT1cInVuZGVmaW5lZFwiIT10eXBlb2YgcHJvY2VzcyYmKHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TQ19BVFRSfHxwcm9jZXNzLmVudi5TQ19BVFRSKXx8XCJkYXRhLXN0eWxlZFwiLEM9XCI1LjMuMFwiLEk9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmXCJIVE1MRWxlbWVudFwiaW4gd2luZG93LFA9Qm9vbGVhbihcImJvb2xlYW5cIj09dHlwZW9mIFNDX0RJU0FCTEVfU1BFRURZP1NDX0RJU0FCTEVfU1BFRURZOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBwcm9jZXNzJiZ2b2lkIDAhPT1wcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfRElTQUJMRV9TUEVFRFkmJlwiXCIhPT1wcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfRElTQUJMRV9TUEVFRFk/XCJmYWxzZVwiIT09cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0RJU0FCTEVfU1BFRURZJiZwcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfRElTQUJMRV9TUEVFRFk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHByb2Nlc3MmJnZvaWQgMCE9PXByb2Nlc3MuZW52LlNDX0RJU0FCTEVfU1BFRURZJiZcIlwiIT09cHJvY2Vzcy5lbnYuU0NfRElTQUJMRV9TUEVFRFk/XCJmYWxzZVwiIT09cHJvY2Vzcy5lbnYuU0NfRElTQUJMRV9TUEVFRFkmJnByb2Nlc3MuZW52LlNDX0RJU0FCTEVfU1BFRURZOlwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYpLE89e30sUj1cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WP3sxOlwiQ2Fubm90IGNyZWF0ZSBzdHlsZWQtY29tcG9uZW50IGZvciBjb21wb25lbnQ6ICVzLlxcblxcblwiLDI6XCJDYW4ndCBjb2xsZWN0IHN0eWxlcyBvbmNlIHlvdSd2ZSBjb25zdW1lZCBhIGBTZXJ2ZXJTdHlsZVNoZWV0YCdzIHN0eWxlcyEgYFNlcnZlclN0eWxlU2hlZXRgIGlzIGEgb25lIG9mZiBpbnN0YW5jZSBmb3IgZWFjaCBzZXJ2ZXItc2lkZSByZW5kZXIgY3ljbGUuXFxuXFxuLSBBcmUgeW91IHRyeWluZyB0byByZXVzZSBpdCBhY3Jvc3MgcmVuZGVycz9cXG4tIEFyZSB5b3UgYWNjaWRlbnRhbGx5IGNhbGxpbmcgY29sbGVjdFN0eWxlcyB0d2ljZT9cXG5cXG5cIiwzOlwiU3RyZWFtaW5nIFNTUiBpcyBvbmx5IHN1cHBvcnRlZCBpbiBhIE5vZGUuanMgZW52aXJvbm1lbnQ7IFBsZWFzZSBkbyBub3QgdHJ5IHRvIGNhbGwgdGhpcyBtZXRob2QgaW4gdGhlIGJyb3dzZXIuXFxuXFxuXCIsNDpcIlRoZSBgU3R5bGVTaGVldE1hbmFnZXJgIGV4cGVjdHMgYSB2YWxpZCB0YXJnZXQgb3Igc2hlZXQgcHJvcCFcXG5cXG4tIERvZXMgdGhpcyBlcnJvciBvY2N1ciBvbiB0aGUgY2xpZW50IGFuZCBpcyB5b3VyIHRhcmdldCBmYWxzeT9cXG4tIERvZXMgdGhpcyBlcnJvciBvY2N1ciBvbiB0aGUgc2VydmVyIGFuZCBpcyB0aGUgc2hlZXQgZmFsc3k/XFxuXFxuXCIsNTpcIlRoZSBjbG9uZSBtZXRob2QgY2Fubm90IGJlIHVzZWQgb24gdGhlIGNsaWVudCFcXG5cXG4tIEFyZSB5b3UgcnVubmluZyBpbiBhIGNsaWVudC1saWtlIGVudmlyb25tZW50IG9uIHRoZSBzZXJ2ZXI/XFxuLSBBcmUgeW91IHRyeWluZyB0byBydW4gU1NSIG9uIHRoZSBjbGllbnQ/XFxuXFxuXCIsNjpcIlRyeWluZyB0byBpbnNlcnQgYSBuZXcgc3R5bGUgdGFnLCBidXQgdGhlIGdpdmVuIE5vZGUgaXMgdW5tb3VudGVkIVxcblxcbi0gQXJlIHlvdSB1c2luZyBhIGN1c3RvbSB0YXJnZXQgdGhhdCBpc24ndCBtb3VudGVkP1xcbi0gRG9lcyB5b3VyIGRvY3VtZW50IG5vdCBoYXZlIGEgdmFsaWQgaGVhZCBlbGVtZW50P1xcbi0gSGF2ZSB5b3UgYWNjaWRlbnRhbGx5IHJlbW92ZWQgYSBzdHlsZSB0YWcgbWFudWFsbHk/XFxuXFxuXCIsNzonVGhlbWVQcm92aWRlcjogUGxlYXNlIHJldHVybiBhbiBvYmplY3QgZnJvbSB5b3VyIFwidGhlbWVcIiBwcm9wIGZ1bmN0aW9uLCBlLmcuXFxuXFxuYGBganNcXG50aGVtZT17KCkgPT4gKHt9KX1cXG5gYGBcXG5cXG4nLDg6J1RoZW1lUHJvdmlkZXI6IFBsZWFzZSBtYWtlIHlvdXIgXCJ0aGVtZVwiIHByb3AgYW4gb2JqZWN0LlxcblxcbicsOTpcIk1pc3NpbmcgZG9jdW1lbnQgYDxoZWFkPmBcXG5cXG5cIiwxMDpcIkNhbm5vdCBmaW5kIGEgU3R5bGVTaGVldCBpbnN0YW5jZS4gVXN1YWxseSB0aGlzIGhhcHBlbnMgaWYgdGhlcmUgYXJlIG11bHRpcGxlIGNvcGllcyBvZiBzdHlsZWQtY29tcG9uZW50cyBsb2FkZWQgYXQgb25jZS4gQ2hlY2sgb3V0IHRoaXMgaXNzdWUgZm9yIGhvdyB0byB0cm91Ymxlc2hvb3QgYW5kIGZpeCB0aGUgY29tbW9uIGNhc2VzIHdoZXJlIHRoaXMgc2l0dWF0aW9uIGNhbiBoYXBwZW46IGh0dHBzOi8vZ2l0aHViLmNvbS9zdHlsZWQtY29tcG9uZW50cy9zdHlsZWQtY29tcG9uZW50cy9pc3N1ZXMvMTk0MSNpc3N1ZWNvbW1lbnQtNDE3ODYyMDIxXFxuXFxuXCIsMTE6XCJfVGhpcyBlcnJvciB3YXMgcmVwbGFjZWQgd2l0aCBhIGRldi10aW1lIHdhcm5pbmcsIGl0IHdpbGwgYmUgZGVsZXRlZCBmb3IgdjQgZmluYWwuXyBbY3JlYXRlR2xvYmFsU3R5bGVdIHJlY2VpdmVkIGNoaWxkcmVuIHdoaWNoIHdpbGwgbm90IGJlIHJlbmRlcmVkLiBQbGVhc2UgdXNlIHRoZSBjb21wb25lbnQgd2l0aG91dCBwYXNzaW5nIGNoaWxkcmVuIGVsZW1lbnRzLlxcblxcblwiLDEyOlwiSXQgc2VlbXMgeW91IGFyZSBpbnRlcnBvbGF0aW5nIGEga2V5ZnJhbWUgZGVjbGFyYXRpb24gKCVzKSBpbnRvIGFuIHVudGFnZ2VkIHN0cmluZy4gVGhpcyB3YXMgc3VwcG9ydGVkIGluIHN0eWxlZC1jb21wb25lbnRzIHYzLCBidXQgaXMgbm90IGxvbmdlciBzdXBwb3J0ZWQgaW4gdjQgYXMga2V5ZnJhbWVzIGFyZSBub3cgaW5qZWN0ZWQgb24tZGVtYW5kLiBQbGVhc2Ugd3JhcCB5b3VyIHN0cmluZyBpbiB0aGUgY3NzXFxcXGBcXFxcYCBoZWxwZXIgd2hpY2ggZW5zdXJlcyB0aGUgc3R5bGVzIGFyZSBpbmplY3RlZCBjb3JyZWN0bHkuIFNlZSBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9hcGkjY3NzXFxuXFxuXCIsMTM6XCIlcyBpcyBub3QgYSBzdHlsZWQgY29tcG9uZW50IGFuZCBjYW5ub3QgYmUgcmVmZXJyZWQgdG8gdmlhIGNvbXBvbmVudCBzZWxlY3Rvci4gU2VlIGh0dHBzOi8vd3d3LnN0eWxlZC1jb21wb25lbnRzLmNvbS9kb2NzL2FkdmFuY2VkI3JlZmVycmluZy10by1vdGhlci1jb21wb25lbnRzIGZvciBtb3JlIGRldGFpbHMuXFxuXFxuXCIsMTQ6J1RoZW1lUHJvdmlkZXI6IFwidGhlbWVcIiBwcm9wIGlzIHJlcXVpcmVkLlxcblxcbicsMTU6XCJBIHN0eWxpcyBwbHVnaW4gaGFzIGJlZW4gc3VwcGxpZWQgdGhhdCBpcyBub3QgbmFtZWQuIFdlIG5lZWQgYSBuYW1lIGZvciBlYWNoIHBsdWdpbiB0byBiZSBhYmxlIHRvIHByZXZlbnQgc3R5bGluZyBjb2xsaXNpb25zIGJldHdlZW4gZGlmZmVyZW50IHN0eWxpcyBjb25maWd1cmF0aW9ucyB3aXRoaW4gdGhlIHNhbWUgYXBwLiBCZWZvcmUgeW91IHBhc3MgeW91ciBwbHVnaW4gdG8gYDxTdHlsZVNoZWV0TWFuYWdlciBzdHlsaXNQbHVnaW5zPXtbXX0+YCwgcGxlYXNlIG1ha2Ugc3VyZSBlYWNoIHBsdWdpbiBpcyB1bmlxdWVseS1uYW1lZCwgZS5nLlxcblxcbmBgYGpzXFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGltcG9ydGVkUGx1Z2luLCAnbmFtZScsIHsgdmFsdWU6ICdzb21lLXVuaXF1ZS1uYW1lJyB9KTtcXG5gYGBcXG5cXG5cIiwxNjpcIlJlYWNoZWQgdGhlIGxpbWl0IG9mIGhvdyBtYW55IHN0eWxlZCBjb21wb25lbnRzIG1heSBiZSBjcmVhdGVkIGF0IGdyb3VwICVzLlxcbllvdSBtYXkgb25seSBjcmVhdGUgdXAgdG8gMSwwNzMsNzQxLDgyNCBjb21wb25lbnRzLiBJZiB5b3UncmUgY3JlYXRpbmcgY29tcG9uZW50cyBkeW5hbWljYWxseSxcXG5hcyBmb3IgaW5zdGFuY2UgaW4geW91ciByZW5kZXIgbWV0aG9kIHRoZW4geW91IG1heSBiZSBydW5uaW5nIGludG8gdGhpcyBsaW1pdGF0aW9uLlxcblxcblwiLDE3OlwiQ1NTU3R5bGVTaGVldCBjb3VsZCBub3QgYmUgZm91bmQgb24gSFRNTFN0eWxlRWxlbWVudC5cXG5IYXMgc3R5bGVkLWNvbXBvbmVudHMnIHN0eWxlIHRhZyBiZWVuIHVubW91bnRlZCBvciBhbHRlcmVkIGJ5IGFub3RoZXIgc2NyaXB0P1xcblwifTp7fTtmdW5jdGlvbiBEKCl7Zm9yKHZhciBlPWFyZ3VtZW50cy5sZW5ndGg8PTA/dm9pZCAwOmFyZ3VtZW50c1swXSx0PVtdLG49MSxyPWFyZ3VtZW50cy5sZW5ndGg7bjxyO24rPTEpdC5wdXNoKG48MHx8YXJndW1lbnRzLmxlbmd0aDw9bj92b2lkIDA6YXJndW1lbnRzW25dKTtyZXR1cm4gdC5mb3JFYWNoKChmdW5jdGlvbih0KXtlPWUucmVwbGFjZSgvJVthLXpdLyx0KX0pKSxlfWZ1bmN0aW9uIGooZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodD4xP3QtMTowKSxyPTE7cjx0O3IrKyluW3ItMV09YXJndW1lbnRzW3JdO3Rocm93XCJwcm9kdWN0aW9uXCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOVj9uZXcgRXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZC4gU2VlIGh0dHBzOi8vZ2l0LmlvL0pVSWFFI1wiK2UrXCIgZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIrKG4ubGVuZ3RoPjA/XCIgQXJnczogXCIrbi5qb2luKFwiLCBcIik6XCJcIikpOm5ldyBFcnJvcihELmFwcGx5KHZvaWQgMCxbUltlXV0uY29uY2F0KG4pKS50cmltKCkpfXZhciBUPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt0aGlzLmdyb3VwU2l6ZXM9bmV3IFVpbnQzMkFycmF5KDUxMiksdGhpcy5sZW5ndGg9NTEyLHRoaXMudGFnPWV9dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQuaW5kZXhPZkdyb3VwPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wLG49MDtuPGU7bisrKXQrPXRoaXMuZ3JvdXBTaXplc1tuXTtyZXR1cm4gdH0sdC5pbnNlcnRSdWxlcz1mdW5jdGlvbihlLHQpe2lmKGU+PXRoaXMuZ3JvdXBTaXplcy5sZW5ndGgpe2Zvcih2YXIgbj10aGlzLmdyb3VwU2l6ZXMscj1uLmxlbmd0aCxvPXI7ZT49bzspKG88PD0xKTwwJiZqKDE2LFwiXCIrZSk7dGhpcy5ncm91cFNpemVzPW5ldyBVaW50MzJBcnJheShvKSx0aGlzLmdyb3VwU2l6ZXMuc2V0KG4pLHRoaXMubGVuZ3RoPW87Zm9yKHZhciBpPXI7aTxvO2krKyl0aGlzLmdyb3VwU2l6ZXNbaV09MH1mb3IodmFyIHM9dGhpcy5pbmRleE9mR3JvdXAoZSsxKSxhPTAsYz10Lmxlbmd0aDthPGM7YSsrKXRoaXMudGFnLmluc2VydFJ1bGUocyx0W2FdKSYmKHRoaXMuZ3JvdXBTaXplc1tlXSsrLHMrKyl9LHQuY2xlYXJHcm91cD1mdW5jdGlvbihlKXtpZihlPHRoaXMubGVuZ3RoKXt2YXIgdD10aGlzLmdyb3VwU2l6ZXNbZV0sbj10aGlzLmluZGV4T2ZHcm91cChlKSxyPW4rdDt0aGlzLmdyb3VwU2l6ZXNbZV09MDtmb3IodmFyIG89bjtvPHI7bysrKXRoaXMudGFnLmRlbGV0ZVJ1bGUobil9fSx0LmdldEdyb3VwPWZ1bmN0aW9uKGUpe3ZhciB0PVwiXCI7aWYoZT49dGhpcy5sZW5ndGh8fDA9PT10aGlzLmdyb3VwU2l6ZXNbZV0pcmV0dXJuIHQ7Zm9yKHZhciBuPXRoaXMuZ3JvdXBTaXplc1tlXSxyPXRoaXMuaW5kZXhPZkdyb3VwKGUpLG89cituLGk9cjtpPG87aSsrKXQrPXRoaXMudGFnLmdldFJ1bGUoaSkrXCIvKiFzYyovXFxuXCI7cmV0dXJuIHR9LGV9KCksaz1uZXcgTWFwLHg9bmV3IE1hcCxWPTEsQj1mdW5jdGlvbihlKXtpZihrLmhhcyhlKSlyZXR1cm4gay5nZXQoZSk7Zm9yKDt4LmhhcyhWKTspVisrO3ZhciB0PVYrKztyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYoKDB8dCk8MHx8dD4xPDwzMCkmJmooMTYsXCJcIit0KSxrLnNldChlLHQpLHguc2V0KHQsZSksdH0sTT1mdW5jdGlvbihlKXtyZXR1cm4geC5nZXQoZSl9LHo9ZnVuY3Rpb24oZSx0KXtrLnNldChlLHQpLHguc2V0KHQsZSl9LEw9XCJzdHlsZVtcIitBKyddW2RhdGEtc3R5bGVkLXZlcnNpb249XCI1LjMuMFwiXScsRz1uZXcgUmVnRXhwKFwiXlwiK0ErJ1xcXFwuZyhcXFxcZCspXFxcXFtpZD1cIihbXFxcXHdcXFxcZC1dKylcIlxcXFxdLio/XCIoW15cIl0qKScpLEY9ZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcixvPW4uc3BsaXQoXCIsXCIpLGk9MCxzPW8ubGVuZ3RoO2k8cztpKyspKHI9b1tpXSkmJmUucmVnaXN0ZXJOYW1lKHQscil9LFk9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49dC5pbm5lckhUTUwuc3BsaXQoXCIvKiFzYyovXFxuXCIpLHI9W10sbz0wLGk9bi5sZW5ndGg7bzxpO28rKyl7dmFyIHM9bltvXS50cmltKCk7aWYocyl7dmFyIGE9cy5tYXRjaChHKTtpZihhKXt2YXIgYz0wfHBhcnNlSW50KGFbMV0sMTApLHU9YVsyXTswIT09YyYmKHoodSxjKSxGKGUsdSxhWzNdKSxlLmdldFRhZygpLmluc2VydFJ1bGVzKGMscikpLHIubGVuZ3RoPTB9ZWxzZSByLnB1c2gocyl9fX0scT1mdW5jdGlvbigpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJnZvaWQgMCE9PXdpbmRvdy5fX3dlYnBhY2tfbm9uY2VfXz93aW5kb3cuX193ZWJwYWNrX25vbmNlX186bnVsbH0sSD1mdW5jdGlvbihlKXt2YXIgdD1kb2N1bWVudC5oZWFkLG49ZXx8dCxyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSxvPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lLmNoaWxkTm9kZXMsbj10Lmxlbmd0aDtuPj0wO24tLSl7dmFyIHI9dFtuXTtpZihyJiYxPT09ci5ub2RlVHlwZSYmci5oYXNBdHRyaWJ1dGUoQSkpcmV0dXJuIHJ9fShuKSxpPXZvaWQgMCE9PW8/by5uZXh0U2libGluZzpudWxsO3Iuc2V0QXR0cmlidXRlKEEsXCJhY3RpdmVcIiksci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0eWxlZC12ZXJzaW9uXCIsXCI1LjMuMFwiKTt2YXIgcz1xKCk7cmV0dXJuIHMmJnIuc2V0QXR0cmlidXRlKFwibm9uY2VcIixzKSxuLmluc2VydEJlZm9yZShyLGkpLHJ9LCQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe3ZhciB0PXRoaXMuZWxlbWVudD1IKGUpO3QuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIikpLHRoaXMuc2hlZXQ9ZnVuY3Rpb24oZSl7aWYoZS5zaGVldClyZXR1cm4gZS5zaGVldDtmb3IodmFyIHQ9ZG9jdW1lbnQuc3R5bGVTaGVldHMsbj0wLHI9dC5sZW5ndGg7bjxyO24rKyl7dmFyIG89dFtuXTtpZihvLm93bmVyTm9kZT09PWUpcmV0dXJuIG99aigxNyl9KHQpLHRoaXMubGVuZ3RoPTB9dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQuaW5zZXJ0UnVsZT1mdW5jdGlvbihlLHQpe3RyeXtyZXR1cm4gdGhpcy5zaGVldC5pbnNlcnRSdWxlKHQsZSksdGhpcy5sZW5ndGgrKywhMH1jYXRjaChlKXtyZXR1cm4hMX19LHQuZGVsZXRlUnVsZT1mdW5jdGlvbihlKXt0aGlzLnNoZWV0LmRlbGV0ZVJ1bGUoZSksdGhpcy5sZW5ndGgtLX0sdC5nZXRSdWxlPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuc2hlZXQuY3NzUnVsZXNbZV07cmV0dXJuIHZvaWQgMCE9PXQmJlwic3RyaW5nXCI9PXR5cGVvZiB0LmNzc1RleHQ/dC5jc3NUZXh0OlwiXCJ9LGV9KCksVz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dmFyIHQ9dGhpcy5lbGVtZW50PUgoZSk7dGhpcy5ub2Rlcz10LmNoaWxkTm9kZXMsdGhpcy5sZW5ndGg9MH12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5pbnNlcnRSdWxlPWZ1bmN0aW9uKGUsdCl7aWYoZTw9dGhpcy5sZW5ndGgmJmU+PTApe3ZhciBuPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQpLHI9dGhpcy5ub2Rlc1tlXTtyZXR1cm4gdGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZShuLHJ8fG51bGwpLHRoaXMubGVuZ3RoKyssITB9cmV0dXJuITF9LHQuZGVsZXRlUnVsZT1mdW5jdGlvbihlKXt0aGlzLmVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5ub2Rlc1tlXSksdGhpcy5sZW5ndGgtLX0sdC5nZXRSdWxlPWZ1bmN0aW9uKGUpe3JldHVybiBlPHRoaXMubGVuZ3RoP3RoaXMubm9kZXNbZV0udGV4dENvbnRlbnQ6XCJcIn0sZX0oKSxVPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt0aGlzLnJ1bGVzPVtdLHRoaXMubGVuZ3RoPTB9dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQuaW5zZXJ0UnVsZT1mdW5jdGlvbihlLHQpe3JldHVybiBlPD10aGlzLmxlbmd0aCYmKHRoaXMucnVsZXMuc3BsaWNlKGUsMCx0KSx0aGlzLmxlbmd0aCsrLCEwKX0sdC5kZWxldGVSdWxlPWZ1bmN0aW9uKGUpe3RoaXMucnVsZXMuc3BsaWNlKGUsMSksdGhpcy5sZW5ndGgtLX0sdC5nZXRSdWxlPWZ1bmN0aW9uKGUpe3JldHVybiBlPHRoaXMubGVuZ3RoP3RoaXMucnVsZXNbZV06XCJcIn0sZX0oKSxKPUksWD17aXNTZXJ2ZXI6IUksdXNlQ1NTT01JbmplY3Rpb246IVB9LFo9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCxuKXt2b2lkIDA9PT1lJiYoZT1FKSx2b2lkIDA9PT10JiYodD17fSksdGhpcy5vcHRpb25zPXYoe30sWCx7fSxlKSx0aGlzLmdzPXQsdGhpcy5uYW1lcz1uZXcgTWFwKG4pLCF0aGlzLm9wdGlvbnMuaXNTZXJ2ZXImJkkmJkomJihKPSExLGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKEwpLG49MCxyPXQubGVuZ3RoO248cjtuKyspe3ZhciBvPXRbbl07byYmXCJhY3RpdmVcIiE9PW8uZ2V0QXR0cmlidXRlKEEpJiYoWShlLG8pLG8ucGFyZW50Tm9kZSYmby5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG8pKX19KHRoaXMpKX1lLnJlZ2lzdGVySWQ9ZnVuY3Rpb24oZSl7cmV0dXJuIEIoZSl9O3ZhciB0PWUucHJvdG90eXBlO3JldHVybiB0LnJlY29uc3RydWN0V2l0aE9wdGlvbnM9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdm9pZCAwPT09biYmKG49ITApLG5ldyBlKHYoe30sdGhpcy5vcHRpb25zLHt9LHQpLHRoaXMuZ3MsbiYmdGhpcy5uYW1lc3x8dm9pZCAwKX0sdC5hbGxvY2F0ZUdTSW5zdGFuY2U9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZ3NbZV09KHRoaXMuZ3NbZV18fDApKzF9LHQuZ2V0VGFnPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudGFnfHwodGhpcy50YWc9KG49KHQ9dGhpcy5vcHRpb25zKS5pc1NlcnZlcixyPXQudXNlQ1NTT01JbmplY3Rpb24sbz10LnRhcmdldCxlPW4/bmV3IFUobyk6cj9uZXcgJChvKTpuZXcgVyhvKSxuZXcgVChlKSkpO3ZhciBlLHQsbixyLG99LHQuaGFzTmFtZUZvcklkPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMubmFtZXMuaGFzKGUpJiZ0aGlzLm5hbWVzLmdldChlKS5oYXModCl9LHQucmVnaXN0ZXJOYW1lPWZ1bmN0aW9uKGUsdCl7aWYoQihlKSx0aGlzLm5hbWVzLmhhcyhlKSl0aGlzLm5hbWVzLmdldChlKS5hZGQodCk7ZWxzZXt2YXIgbj1uZXcgU2V0O24uYWRkKHQpLHRoaXMubmFtZXMuc2V0KGUsbil9fSx0Lmluc2VydFJ1bGVzPWZ1bmN0aW9uKGUsdCxuKXt0aGlzLnJlZ2lzdGVyTmFtZShlLHQpLHRoaXMuZ2V0VGFnKCkuaW5zZXJ0UnVsZXMoQihlKSxuKX0sdC5jbGVhck5hbWVzPWZ1bmN0aW9uKGUpe3RoaXMubmFtZXMuaGFzKGUpJiZ0aGlzLm5hbWVzLmdldChlKS5jbGVhcigpfSx0LmNsZWFyUnVsZXM9ZnVuY3Rpb24oZSl7dGhpcy5nZXRUYWcoKS5jbGVhckdyb3VwKEIoZSkpLHRoaXMuY2xlYXJOYW1lcyhlKX0sdC5jbGVhclRhZz1mdW5jdGlvbigpe3RoaXMudGFnPXZvaWQgMH0sdC50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtmb3IodmFyIHQ9ZS5nZXRUYWcoKSxuPXQubGVuZ3RoLHI9XCJcIixvPTA7bzxuO28rKyl7dmFyIGk9TShvKTtpZih2b2lkIDAhPT1pKXt2YXIgcz1lLm5hbWVzLmdldChpKSxhPXQuZ2V0R3JvdXAobyk7aWYodm9pZCAwIT09cyYmMCE9PWEubGVuZ3RoKXt2YXIgYz1BK1wiLmdcIitvKydbaWQ9XCInK2krJ1wiXScsdT1cIlwiO3ZvaWQgMCE9PXMmJnMuZm9yRWFjaCgoZnVuY3Rpb24oZSl7ZS5sZW5ndGg+MCYmKHUrPWUrXCIsXCIpfSkpLHIrPVwiXCIrYStjKyd7Y29udGVudDpcIicrdSsnXCJ9Lyohc2MqL1xcbid9fX1yZXR1cm4gcn0odGhpcyl9LGV9KCksSz0vKGEpKGQpL2dpLFE9ZnVuY3Rpb24oZSl7cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoZSsoZT4yNT8zOTo5NykpfTtmdW5jdGlvbiBlZShlKXt2YXIgdCxuPVwiXCI7Zm9yKHQ9TWF0aC5hYnMoZSk7dD41Mjt0PXQvNTJ8MCluPVEodCU1MikrbjtyZXR1cm4oUSh0JTUyKStuKS5yZXBsYWNlKEssXCIkMS0kMlwiKX12YXIgdGU9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49dC5sZW5ndGg7bjspZT0zMyplXnQuY2hhckNvZGVBdCgtLW4pO3JldHVybiBlfSxuZT1mdW5jdGlvbihlKXtyZXR1cm4gdGUoNTM4MSxlKX07ZnVuY3Rpb24gcmUoZSl7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kz0xKXt2YXIgbj1lW3RdO2lmKGIobikmJiFOKG4pKXJldHVybiExfXJldHVybiEwfXZhciBvZT1uZShcIjUuMy4wXCIpLGllPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQsbil7dGhpcy5ydWxlcz1lLHRoaXMuc3RhdGljUnVsZXNJZD1cIlwiLHRoaXMuaXNTdGF0aWM9XCJwcm9kdWN0aW9uXCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKHZvaWQgMD09PW58fG4uaXNTdGF0aWMpJiZyZShlKSx0aGlzLmNvbXBvbmVudElkPXQsdGhpcy5iYXNlSGFzaD10ZShvZSx0KSx0aGlzLmJhc2VTdHlsZT1uLFoucmVnaXN0ZXJJZCh0KX1yZXR1cm4gZS5wcm90b3R5cGUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXM9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPXRoaXMuY29tcG9uZW50SWQsbz1bXTtpZih0aGlzLmJhc2VTdHlsZSYmby5wdXNoKHRoaXMuYmFzZVN0eWxlLmdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKGUsdCxuKSksdGhpcy5pc1N0YXRpYyYmIW4uaGFzaClpZih0aGlzLnN0YXRpY1J1bGVzSWQmJnQuaGFzTmFtZUZvcklkKHIsdGhpcy5zdGF0aWNSdWxlc0lkKSlvLnB1c2godGhpcy5zdGF0aWNSdWxlc0lkKTtlbHNle3ZhciBpPU5lKHRoaXMucnVsZXMsZSx0LG4pLmpvaW4oXCJcIikscz1lZSh0ZSh0aGlzLmJhc2VIYXNoLGkubGVuZ3RoKT4+PjApO2lmKCF0Lmhhc05hbWVGb3JJZChyLHMpKXt2YXIgYT1uKGksXCIuXCIrcyx2b2lkIDAscik7dC5pbnNlcnRSdWxlcyhyLHMsYSl9by5wdXNoKHMpLHRoaXMuc3RhdGljUnVsZXNJZD1zfWVsc2V7Zm9yKHZhciBjPXRoaXMucnVsZXMubGVuZ3RoLHU9dGUodGhpcy5iYXNlSGFzaCxuLmhhc2gpLGw9XCJcIixkPTA7ZDxjO2QrKyl7dmFyIGg9dGhpcy5ydWxlc1tkXTtpZihcInN0cmluZ1wiPT10eXBlb2YgaClsKz1oLFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJih1PXRlKHUsaCtkKSk7ZWxzZSBpZihoKXt2YXIgcD1OZShoLGUsdCxuKSxmPUFycmF5LmlzQXJyYXkocCk/cC5qb2luKFwiXCIpOnA7dT10ZSh1LGYrZCksbCs9Zn19aWYobCl7dmFyIG09ZWUodT4+PjApO2lmKCF0Lmhhc05hbWVGb3JJZChyLG0pKXt2YXIgeT1uKGwsXCIuXCIrbSx2b2lkIDAscik7dC5pbnNlcnRSdWxlcyhyLG0seSl9by5wdXNoKG0pfX1yZXR1cm4gby5qb2luKFwiIFwiKX0sZX0oKSxzZT0vXlxccypcXC9cXC8uKiQvZ20sYWU9W1wiOlwiLFwiW1wiLFwiLlwiLFwiI1wiXTtmdW5jdGlvbiBjZShlKXt2YXIgdCxuLHIsbyxpPXZvaWQgMD09PWU/RTplLHM9aS5vcHRpb25zLGE9dm9pZCAwPT09cz9FOnMsYz1pLnBsdWdpbnMsdT12b2lkIDA9PT1jP3c6YyxsPW5ldyBwKGEpLGQ9W10saD1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KHQpe2lmKHQpdHJ5e2UodCtcIn1cIil9Y2F0Y2goZSl7fX1yZXR1cm4gZnVuY3Rpb24obixyLG8saSxzLGEsYyx1LGwsZCl7c3dpdGNoKG4pe2Nhc2UgMTppZigwPT09bCYmNjQ9PT1yLmNoYXJDb2RlQXQoMCkpcmV0dXJuIGUocitcIjtcIiksXCJcIjticmVhaztjYXNlIDI6aWYoMD09PXUpcmV0dXJuIHIrXCIvKnwqL1wiO2JyZWFrO2Nhc2UgMzpzd2l0Y2godSl7Y2FzZSAxMDI6Y2FzZSAxMTI6cmV0dXJuIGUob1swXStyKSxcIlwiO2RlZmF1bHQ6cmV0dXJuIHIrKDA9PT1kP1wiLyp8Ki9cIjpcIlwiKX1jYXNlLTI6ci5zcGxpdChcIi8qfCovfVwiKS5mb3JFYWNoKHQpfX19KChmdW5jdGlvbihlKXtkLnB1c2goZSl9KSksZj1mdW5jdGlvbihlLHIsaSl7cmV0dXJuIDA9PT1yJiYtMSE9PWFlLmluZGV4T2YoaVtuLmxlbmd0aF0pfHxpLm1hdGNoKG8pP2U6XCIuXCIrdH07ZnVuY3Rpb24gbShlLGkscyxhKXt2b2lkIDA9PT1hJiYoYT1cIiZcIik7dmFyIGM9ZS5yZXBsYWNlKHNlLFwiXCIpLHU9aSYmcz9zK1wiIFwiK2krXCIgeyBcIitjK1wiIH1cIjpjO3JldHVybiB0PWEsbj1pLHI9bmV3IFJlZ0V4cChcIlxcXFxcIituK1wiXFxcXGJcIixcImdcIiksbz1uZXcgUmVnRXhwKFwiKFxcXFxcIituK1wiXFxcXGIpezIsfVwiKSxsKHN8fCFpP1wiXCI6aSx1KX1yZXR1cm4gbC51c2UoW10uY29uY2F0KHUsW2Z1bmN0aW9uKGUsdCxvKXsyPT09ZSYmby5sZW5ndGgmJm9bMF0ubGFzdEluZGV4T2Yobik+MCYmKG9bMF09b1swXS5yZXBsYWNlKHIsZikpfSxoLGZ1bmN0aW9uKGUpe2lmKC0yPT09ZSl7dmFyIHQ9ZDtyZXR1cm4gZD1bXSx0fX1dKSksbS5oYXNoPXUubGVuZ3RoP3UucmVkdWNlKChmdW5jdGlvbihlLHQpe3JldHVybiB0Lm5hbWV8fGooMTUpLHRlKGUsdC5uYW1lKX0pLDUzODEpLnRvU3RyaW5nKCk6XCJcIixtfXZhciB1ZT1yLmNyZWF0ZUNvbnRleHQoKSxsZT11ZS5Db25zdW1lcixkZT1yLmNyZWF0ZUNvbnRleHQoKSxoZT0oZGUuQ29uc3VtZXIsbmV3IFopLHBlPWNlKCk7ZnVuY3Rpb24gZmUoKXtyZXR1cm4gaSh1ZSl8fGhlfWZ1bmN0aW9uIG1lKCl7cmV0dXJuIGkoZGUpfHxwZX1mdW5jdGlvbiB5ZShlKXt2YXIgdD1vKGUuc3R5bGlzUGx1Z2lucyksbj10WzBdLGk9dFsxXSxjPWZlKCksdT1zKChmdW5jdGlvbigpe3ZhciB0PWM7cmV0dXJuIGUuc2hlZXQ/dD1lLnNoZWV0OmUudGFyZ2V0JiYodD10LnJlY29uc3RydWN0V2l0aE9wdGlvbnMoe3RhcmdldDplLnRhcmdldH0sITEpKSxlLmRpc2FibGVDU1NPTUluamVjdGlvbiYmKHQ9dC5yZWNvbnN0cnVjdFdpdGhPcHRpb25zKHt1c2VDU1NPTUluamVjdGlvbjohMX0pKSx0fSksW2UuZGlzYWJsZUNTU09NSW5qZWN0aW9uLGUuc2hlZXQsZS50YXJnZXRdKSxsPXMoKGZ1bmN0aW9uKCl7cmV0dXJuIGNlKHtvcHRpb25zOntwcmVmaXg6IWUuZGlzYWJsZVZlbmRvclByZWZpeGVzfSxwbHVnaW5zOm59KX0pLFtlLmRpc2FibGVWZW5kb3JQcmVmaXhlcyxuXSk7cmV0dXJuIGEoKGZ1bmN0aW9uKCl7aChuLGUuc3R5bGlzUGx1Z2lucyl8fGkoZS5zdHlsaXNQbHVnaW5zKX0pLFtlLnN0eWxpc1BsdWdpbnNdKSxyLmNyZWF0ZUVsZW1lbnQodWUuUHJvdmlkZXIse3ZhbHVlOnV9LHIuY3JlYXRlRWxlbWVudChkZS5Qcm92aWRlcix7dmFsdWU6bH0sXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj9yLkNoaWxkcmVuLm9ubHkoZS5jaGlsZHJlbik6ZS5jaGlsZHJlbikpfXZhciB2ZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXt2YXIgbj10aGlzO3RoaXMuaW5qZWN0PWZ1bmN0aW9uKGUsdCl7dm9pZCAwPT09dCYmKHQ9cGUpO3ZhciByPW4ubmFtZSt0Lmhhc2g7ZS5oYXNOYW1lRm9ySWQobi5pZCxyKXx8ZS5pbnNlcnRSdWxlcyhuLmlkLHIsdChuLnJ1bGVzLHIsXCJAa2V5ZnJhbWVzXCIpKX0sdGhpcy50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiBqKDEyLFN0cmluZyhuLm5hbWUpKX0sdGhpcy5uYW1lPWUsdGhpcy5pZD1cInNjLWtleWZyYW1lcy1cIitlLHRoaXMucnVsZXM9dH1yZXR1cm4gZS5wcm90b3R5cGUuZ2V0TmFtZT1mdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9cGUpLHRoaXMubmFtZStlLmhhc2h9LGV9KCksZ2U9LyhbQS1aXSkvLFNlPS8oW0EtWl0pL2csd2U9L15tcy0vLEVlPWZ1bmN0aW9uKGUpe3JldHVyblwiLVwiK2UudG9Mb3dlckNhc2UoKX07ZnVuY3Rpb24gYmUoZSl7cmV0dXJuIGdlLnRlc3QoZSk/ZS5yZXBsYWNlKFNlLEVlKS5yZXBsYWNlKHdlLFwiLW1zLVwiKTplfXZhciBfZT1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZXx8ITE9PT1lfHxcIlwiPT09ZX07ZnVuY3Rpb24gTmUoZSxuLHIsbyl7aWYoQXJyYXkuaXNBcnJheShlKSl7Zm9yKHZhciBpLHM9W10sYT0wLGM9ZS5sZW5ndGg7YTxjO2ErPTEpXCJcIiE9PShpPU5lKGVbYV0sbixyLG8pKSYmKEFycmF5LmlzQXJyYXkoaSk/cy5wdXNoLmFwcGx5KHMsaSk6cy5wdXNoKGkpKTtyZXR1cm4gc31pZihfZShlKSlyZXR1cm5cIlwiO2lmKE4oZSkpcmV0dXJuXCIuXCIrZS5zdHlsZWRDb21wb25lbnRJZDtpZihiKGUpKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZihsPWUpfHxsLnByb3RvdHlwZSYmbC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudHx8IW4pcmV0dXJuIGU7dmFyIHU9ZShuKTtyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZ0KHUpJiZjb25zb2xlLndhcm4oXyhlKStcIiBpcyBub3QgYSBzdHlsZWQgY29tcG9uZW50IGFuZCBjYW5ub3QgYmUgcmVmZXJyZWQgdG8gdmlhIGNvbXBvbmVudCBzZWxlY3Rvci4gU2VlIGh0dHBzOi8vd3d3LnN0eWxlZC1jb21wb25lbnRzLmNvbS9kb2NzL2FkdmFuY2VkI3JlZmVycmluZy10by1vdGhlci1jb21wb25lbnRzIGZvciBtb3JlIGRldGFpbHMuXCIpLE5lKHUsbixyLG8pfXZhciBsO3JldHVybiBlIGluc3RhbmNlb2YgdmU/cj8oZS5pbmplY3QocixvKSxlLmdldE5hbWUobykpOmU6UyhlKT9mdW5jdGlvbiBlKHQsbil7dmFyIHIsbyxpPVtdO2Zvcih2YXIgcyBpbiB0KXQuaGFzT3duUHJvcGVydHkocykmJiFfZSh0W3NdKSYmKFModFtzXSk/aS5wdXNoLmFwcGx5KGksZSh0W3NdLHMpKTpiKHRbc10pP2kucHVzaChiZShzKStcIjpcIix0W3NdLFwiO1wiKTppLnB1c2goYmUocykrXCI6IFwiKyhyPXMsbnVsbD09KG89dFtzXSl8fFwiYm9vbGVhblwiPT10eXBlb2Ygb3x8XCJcIj09PW8/XCJcIjpcIm51bWJlclwiIT10eXBlb2Ygb3x8MD09PW98fHIgaW4gZj9TdHJpbmcobykudHJpbSgpOm8rXCJweFwiKStcIjtcIikpO3JldHVybiBuP1tuK1wiIHtcIl0uY29uY2F0KGksW1wifVwiXSk6aX0oZSk6ZS50b1N0cmluZygpfWZ1bmN0aW9uIEFlKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCkscj0xO3I8dDtyKyspbltyLTFdPWFyZ3VtZW50c1tyXTtyZXR1cm4gYihlKXx8UyhlKT9OZShnKHcsW2VdLmNvbmNhdChuKSkpOjA9PT1uLmxlbmd0aCYmMT09PWUubGVuZ3RoJiZcInN0cmluZ1wiPT10eXBlb2YgZVswXT9lOk5lKGcoZSxuKSl9dmFyIENlPS9pbnZhbGlkIGhvb2sgY2FsbC9pLEllPW5ldyBTZXQsUGU9ZnVuY3Rpb24oZSx0KXtpZihcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WKXt2YXIgbj1cIlRoZSBjb21wb25lbnQgXCIrZSsodD8nIHdpdGggdGhlIGlkIG9mIFwiJyt0KydcIic6XCJcIikrXCIgaGFzIGJlZW4gY3JlYXRlZCBkeW5hbWljYWxseS5cXG5Zb3UgbWF5IHNlZSB0aGlzIHdhcm5pbmcgYmVjYXVzZSB5b3UndmUgY2FsbGVkIHN0eWxlZCBpbnNpZGUgYW5vdGhlciBjb21wb25lbnQuXFxuVG8gcmVzb2x2ZSB0aGlzIG9ubHkgY3JlYXRlIG5ldyBTdHlsZWRDb21wb25lbnRzIG91dHNpZGUgb2YgYW55IHJlbmRlciBtZXRob2QgYW5kIGZ1bmN0aW9uIGNvbXBvbmVudC5cIjt0cnl7YygpLEllLmhhcyhuKXx8KGNvbnNvbGUud2FybihuKSxJZS5hZGQobikpfWNhdGNoKGUpe0NlLnRlc3QoZS5tZXNzYWdlKSYmSWUuZGVsZXRlKG4pfX19LE9lPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdm9pZCAwPT09biYmKG49RSksZS50aGVtZSE9PW4udGhlbWUmJmUudGhlbWV8fHR8fG4udGhlbWV9LFJlPS9bIVwiIyQlJicoKSorLC4vOjs8PT4/QFtcXFxcXFxdXmB7fH1+LV0rL2csRGU9LyheLXwtJCkvZztmdW5jdGlvbiBqZShlKXtyZXR1cm4gZS5yZXBsYWNlKFJlLFwiLVwiKS5yZXBsYWNlKERlLFwiXCIpfXZhciBUZT1mdW5jdGlvbihlKXtyZXR1cm4gZWUobmUoZSk+Pj4wKX07ZnVuY3Rpb24ga2UoZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUmJihcInByb2R1Y3Rpb25cIj09PXByb2Nlc3MuZW52Lk5PREVfRU5WfHxlLmNoYXJBdCgwKT09PWUuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkpfXZhciB4ZT1mdW5jdGlvbihlKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlfHxcIm9iamVjdFwiPT10eXBlb2YgZSYmbnVsbCE9PWUmJiFBcnJheS5pc0FycmF5KGUpfSxWZT1mdW5jdGlvbihlKXtyZXR1cm5cIl9fcHJvdG9fX1wiIT09ZSYmXCJjb25zdHJ1Y3RvclwiIT09ZSYmXCJwcm90b3R5cGVcIiE9PWV9O2Z1bmN0aW9uIEJlKGUsdCxuKXt2YXIgcj1lW25dO3hlKHQpJiZ4ZShyKT9NZShyLHQpOmVbbl09dH1mdW5jdGlvbiBNZShlKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxuPW5ldyBBcnJheSh0PjE/dC0xOjApLHI9MTtyPHQ7cisrKW5bci0xXT1hcmd1bWVudHNbcl07Zm9yKHZhciBvPTAsaT1uO288aS5sZW5ndGg7bysrKXt2YXIgcz1pW29dO2lmKHhlKHMpKWZvcih2YXIgYSBpbiBzKVZlKGEpJiZCZShlLHNbYV0sYSl9cmV0dXJuIGV9dmFyIHplPXIuY3JlYXRlQ29udGV4dCgpLExlPXplLkNvbnN1bWVyO2Z1bmN0aW9uIEdlKGUpe3ZhciB0PWkoemUpLG49cygoZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSx0KXtpZighZSlyZXR1cm4gaigxNCk7aWYoYihlKSl7dmFyIG49ZSh0KTtyZXR1cm5cInByb2R1Y3Rpb25cIj09PXByb2Nlc3MuZW52Lk5PREVfRU5WfHxudWxsIT09biYmIUFycmF5LmlzQXJyYXkobikmJlwib2JqZWN0XCI9PXR5cGVvZiBuP246aig3KX1yZXR1cm4gQXJyYXkuaXNBcnJheShlKXx8XCJvYmplY3RcIiE9dHlwZW9mIGU/aig4KTp0P3Yoe30sdCx7fSxlKTplfShlLnRoZW1lLHQpfSksW2UudGhlbWUsdF0pO3JldHVybiBlLmNoaWxkcmVuP3IuY3JlYXRlRWxlbWVudCh6ZS5Qcm92aWRlcix7dmFsdWU6bn0sZS5jaGlsZHJlbik6bnVsbH12YXIgRmU9e307ZnVuY3Rpb24gWWUoZSx0LG4pe3ZhciBvPU4oZSkscz0ha2UoZSksYT10LmF0dHJzLGM9dm9pZCAwPT09YT93OmEsZD10LmNvbXBvbmVudElkLGg9dm9pZCAwPT09ZD9mdW5jdGlvbihlLHQpe3ZhciBuPVwic3RyaW5nXCIhPXR5cGVvZiBlP1wic2NcIjpqZShlKTtGZVtuXT0oRmVbbl18fDApKzE7dmFyIHI9bitcIi1cIitUZShcIjUuMy4wXCIrbitGZVtuXSk7cmV0dXJuIHQ/dCtcIi1cIityOnJ9KHQuZGlzcGxheU5hbWUsdC5wYXJlbnRDb21wb25lbnRJZCk6ZCxwPXQuZGlzcGxheU5hbWUsZj12b2lkIDA9PT1wP2Z1bmN0aW9uKGUpe3JldHVybiBrZShlKT9cInN0eWxlZC5cIitlOlwiU3R5bGVkKFwiK18oZSkrXCIpXCJ9KGUpOnAsZz10LmRpc3BsYXlOYW1lJiZ0LmNvbXBvbmVudElkP2plKHQuZGlzcGxheU5hbWUpK1wiLVwiK3QuY29tcG9uZW50SWQ6dC5jb21wb25lbnRJZHx8aCxTPW8mJmUuYXR0cnM/QXJyYXkucHJvdG90eXBlLmNvbmNhdChlLmF0dHJzLGMpLmZpbHRlcihCb29sZWFuKTpjLEE9dC5zaG91bGRGb3J3YXJkUHJvcDtvJiZlLnNob3VsZEZvcndhcmRQcm9wJiYoQT10LnNob3VsZEZvcndhcmRQcm9wP2Z1bmN0aW9uKG4scixvKXtyZXR1cm4gZS5zaG91bGRGb3J3YXJkUHJvcChuLHIsbykmJnQuc2hvdWxkRm9yd2FyZFByb3AobixyLG8pfTplLnNob3VsZEZvcndhcmRQcm9wKTt2YXIgQyxJPW5ldyBpZShuLGcsbz9lLmNvbXBvbmVudFN0eWxlOnZvaWQgMCksUD1JLmlzU3RhdGljJiYwPT09Yy5sZW5ndGgsTz1mdW5jdGlvbihlLHQpe3JldHVybiBmdW5jdGlvbihlLHQsbixyKXt2YXIgbz1lLmF0dHJzLHM9ZS5jb21wb25lbnRTdHlsZSxhPWUuZGVmYXVsdFByb3BzLGM9ZS5mb2xkZWRDb21wb25lbnRJZHMsZD1lLnNob3VsZEZvcndhcmRQcm9wLGg9ZS5zdHlsZWRDb21wb25lbnRJZCxwPWUudGFyZ2V0O1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmwoaCk7dmFyIGY9ZnVuY3Rpb24oZSx0LG4pe3ZvaWQgMD09PWUmJihlPUUpO3ZhciByPXYoe30sdCx7dGhlbWU6ZX0pLG89e307cmV0dXJuIG4uZm9yRWFjaCgoZnVuY3Rpb24oZSl7dmFyIHQsbixpLHM9ZTtmb3IodCBpbiBiKHMpJiYocz1zKHIpKSxzKXJbdF09b1t0XT1cImNsYXNzTmFtZVwiPT09dD8obj1vW3RdLGk9c1t0XSxuJiZpP24rXCIgXCIraTpufHxpKTpzW3RdfSkpLFtyLG9dfShPZSh0LGkoemUpLGEpfHxFLHQsbykseT1mWzBdLGc9ZlsxXSxTPWZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBvPWZlKCksaT1tZSgpLHM9dD9lLmdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKEUsbyxpKTplLmdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKG4sbyxpKTtyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZsKHMpLFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJiF0JiZyJiZyKHMpLHN9KHMscix5LFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/ZS53YXJuVG9vTWFueUNsYXNzZXM6dm9pZCAwKSx3PW4sXz1nLiRhc3x8dC4kYXN8fGcuYXN8fHQuYXN8fHAsTj1rZShfKSxBPWchPT10P3Yoe30sdCx7fSxnKTp0LEM9e307Zm9yKHZhciBJIGluIEEpXCIkXCIhPT1JWzBdJiZcImFzXCIhPT1JJiYoXCJmb3J3YXJkZWRBc1wiPT09ST9DLmFzPUFbSV06KGQ/ZChJLG0sXyk6IU58fG0oSSkpJiYoQ1tJXT1BW0ldKSk7cmV0dXJuIHQuc3R5bGUmJmcuc3R5bGUhPT10LnN0eWxlJiYoQy5zdHlsZT12KHt9LHQuc3R5bGUse30sZy5zdHlsZSkpLEMuY2xhc3NOYW1lPUFycmF5LnByb3RvdHlwZS5jb25jYXQoYyxoLFMhPT1oP1M6bnVsbCx0LmNsYXNzTmFtZSxnLmNsYXNzTmFtZSkuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpLEMucmVmPXcsdShfLEMpfShDLGUsdCxQKX07cmV0dXJuIE8uZGlzcGxheU5hbWU9ZiwoQz1yLmZvcndhcmRSZWYoTykpLmF0dHJzPVMsQy5jb21wb25lbnRTdHlsZT1JLEMuZGlzcGxheU5hbWU9ZixDLnNob3VsZEZvcndhcmRQcm9wPUEsQy5mb2xkZWRDb21wb25lbnRJZHM9bz9BcnJheS5wcm90b3R5cGUuY29uY2F0KGUuZm9sZGVkQ29tcG9uZW50SWRzLGUuc3R5bGVkQ29tcG9uZW50SWQpOncsQy5zdHlsZWRDb21wb25lbnRJZD1nLEMudGFyZ2V0PW8/ZS50YXJnZXQ6ZSxDLndpdGhDb21wb25lbnQ9ZnVuY3Rpb24oZSl7dmFyIHI9dC5jb21wb25lbnRJZCxvPWZ1bmN0aW9uKGUsdCl7aWYobnVsbD09ZSlyZXR1cm57fTt2YXIgbixyLG89e30saT1PYmplY3Qua2V5cyhlKTtmb3Iocj0wO3I8aS5sZW5ndGg7cisrKW49aVtyXSx0LmluZGV4T2Yobik+PTB8fChvW25dPWVbbl0pO3JldHVybiBvfSh0LFtcImNvbXBvbmVudElkXCJdKSxpPXImJnIrXCItXCIrKGtlKGUpP2U6amUoXyhlKSkpO3JldHVybiBZZShlLHYoe30sbyx7YXR0cnM6Uyxjb21wb25lbnRJZDppfSksbil9LE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDLFwiZGVmYXVsdFByb3BzXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9mb2xkZWREZWZhdWx0UHJvcHN9LHNldDpmdW5jdGlvbih0KXt0aGlzLl9mb2xkZWREZWZhdWx0UHJvcHM9bz9NZSh7fSxlLmRlZmF1bHRQcm9wcyx0KTp0fX0pLFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJihQZShmLGcpLEMud2FyblRvb01hbnlDbGFzc2VzPWZ1bmN0aW9uKGUsdCl7dmFyIG49e30scj0hMTtyZXR1cm4gZnVuY3Rpb24obyl7aWYoIXImJihuW29dPSEwLE9iamVjdC5rZXlzKG4pLmxlbmd0aD49MjAwKSl7dmFyIGk9dD8nIHdpdGggdGhlIGlkIG9mIFwiJyt0KydcIic6XCJcIjtjb25zb2xlLndhcm4oXCJPdmVyIDIwMCBjbGFzc2VzIHdlcmUgZ2VuZXJhdGVkIGZvciBjb21wb25lbnQgXCIrZStpK1wiLlxcbkNvbnNpZGVyIHVzaW5nIHRoZSBhdHRycyBtZXRob2QsIHRvZ2V0aGVyIHdpdGggYSBzdHlsZSBvYmplY3QgZm9yIGZyZXF1ZW50bHkgY2hhbmdlZCBzdHlsZXMuXFxuRXhhbXBsZTpcXG4gIGNvbnN0IENvbXBvbmVudCA9IHN0eWxlZC5kaXYuYXR0cnMocHJvcHMgPT4gKHtcXG4gICAgc3R5bGU6IHtcXG4gICAgICBiYWNrZ3JvdW5kOiBwcm9wcy5iYWNrZ3JvdW5kLFxcbiAgICB9LFxcbiAgfSkpYHdpZHRoOiAxMDAlO2BcXG5cXG4gIDxDb21wb25lbnQgLz5cIikscj0hMCxuPXt9fX19KGYsZykpLEMudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIi5cIitDLnN0eWxlZENvbXBvbmVudElkfSxzJiZ5KEMsZSx7YXR0cnM6ITAsY29tcG9uZW50U3R5bGU6ITAsZGlzcGxheU5hbWU6ITAsZm9sZGVkQ29tcG9uZW50SWRzOiEwLHNob3VsZEZvcndhcmRQcm9wOiEwLHN0eWxlZENvbXBvbmVudElkOiEwLHRhcmdldDohMCx3aXRoQ29tcG9uZW50OiEwfSksQ312YXIgcWU9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uIGUodCxyLG8pe2lmKHZvaWQgMD09PW8mJihvPUUpLCFuKHIpKXJldHVybiBqKDEsU3RyaW5nKHIpKTt2YXIgaT1mdW5jdGlvbigpe3JldHVybiB0KHIsbyxBZS5hcHBseSh2b2lkIDAsYXJndW1lbnRzKSl9O3JldHVybiBpLndpdGhDb25maWc9ZnVuY3Rpb24obil7cmV0dXJuIGUodCxyLHYoe30sbyx7fSxuKSl9LGkuYXR0cnM9ZnVuY3Rpb24obil7cmV0dXJuIGUodCxyLHYoe30sbyx7YXR0cnM6QXJyYXkucHJvdG90eXBlLmNvbmNhdChvLmF0dHJzLG4pLmZpbHRlcihCb29sZWFuKX0pKX0saX0oWWUsZSl9O1tcImFcIixcImFiYnJcIixcImFkZHJlc3NcIixcImFyZWFcIixcImFydGljbGVcIixcImFzaWRlXCIsXCJhdWRpb1wiLFwiYlwiLFwiYmFzZVwiLFwiYmRpXCIsXCJiZG9cIixcImJpZ1wiLFwiYmxvY2txdW90ZVwiLFwiYm9keVwiLFwiYnJcIixcImJ1dHRvblwiLFwiY2FudmFzXCIsXCJjYXB0aW9uXCIsXCJjaXRlXCIsXCJjb2RlXCIsXCJjb2xcIixcImNvbGdyb3VwXCIsXCJkYXRhXCIsXCJkYXRhbGlzdFwiLFwiZGRcIixcImRlbFwiLFwiZGV0YWlsc1wiLFwiZGZuXCIsXCJkaWFsb2dcIixcImRpdlwiLFwiZGxcIixcImR0XCIsXCJlbVwiLFwiZW1iZWRcIixcImZpZWxkc2V0XCIsXCJmaWdjYXB0aW9uXCIsXCJmaWd1cmVcIixcImZvb3RlclwiLFwiZm9ybVwiLFwiaDFcIixcImgyXCIsXCJoM1wiLFwiaDRcIixcImg1XCIsXCJoNlwiLFwiaGVhZFwiLFwiaGVhZGVyXCIsXCJoZ3JvdXBcIixcImhyXCIsXCJodG1sXCIsXCJpXCIsXCJpZnJhbWVcIixcImltZ1wiLFwiaW5wdXRcIixcImluc1wiLFwia2JkXCIsXCJrZXlnZW5cIixcImxhYmVsXCIsXCJsZWdlbmRcIixcImxpXCIsXCJsaW5rXCIsXCJtYWluXCIsXCJtYXBcIixcIm1hcmtcIixcIm1hcnF1ZWVcIixcIm1lbnVcIixcIm1lbnVpdGVtXCIsXCJtZXRhXCIsXCJtZXRlclwiLFwibmF2XCIsXCJub3NjcmlwdFwiLFwib2JqZWN0XCIsXCJvbFwiLFwib3B0Z3JvdXBcIixcIm9wdGlvblwiLFwib3V0cHV0XCIsXCJwXCIsXCJwYXJhbVwiLFwicGljdHVyZVwiLFwicHJlXCIsXCJwcm9ncmVzc1wiLFwicVwiLFwicnBcIixcInJ0XCIsXCJydWJ5XCIsXCJzXCIsXCJzYW1wXCIsXCJzY3JpcHRcIixcInNlY3Rpb25cIixcInNlbGVjdFwiLFwic21hbGxcIixcInNvdXJjZVwiLFwic3BhblwiLFwic3Ryb25nXCIsXCJzdHlsZVwiLFwic3ViXCIsXCJzdW1tYXJ5XCIsXCJzdXBcIixcInRhYmxlXCIsXCJ0Ym9keVwiLFwidGRcIixcInRleHRhcmVhXCIsXCJ0Zm9vdFwiLFwidGhcIixcInRoZWFkXCIsXCJ0aW1lXCIsXCJ0aXRsZVwiLFwidHJcIixcInRyYWNrXCIsXCJ1XCIsXCJ1bFwiLFwidmFyXCIsXCJ2aWRlb1wiLFwid2JyXCIsXCJjaXJjbGVcIixcImNsaXBQYXRoXCIsXCJkZWZzXCIsXCJlbGxpcHNlXCIsXCJmb3JlaWduT2JqZWN0XCIsXCJnXCIsXCJpbWFnZVwiLFwibGluZVwiLFwibGluZWFyR3JhZGllbnRcIixcIm1hcmtlclwiLFwibWFza1wiLFwicGF0aFwiLFwicGF0dGVyblwiLFwicG9seWdvblwiLFwicG9seWxpbmVcIixcInJhZGlhbEdyYWRpZW50XCIsXCJyZWN0XCIsXCJzdG9wXCIsXCJzdmdcIixcInRleHRcIixcInRleHRQYXRoXCIsXCJ0c3BhblwiXS5mb3JFYWNoKChmdW5jdGlvbihlKXtxZVtlXT1xZShlKX0pKTt2YXIgSGU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7dGhpcy5ydWxlcz1lLHRoaXMuY29tcG9uZW50SWQ9dCx0aGlzLmlzU3RhdGljPXJlKGUpLFoucmVnaXN0ZXJJZCh0aGlzLmNvbXBvbmVudElkKzEpfXZhciB0PWUucHJvdG90eXBlO3JldHVybiB0LmNyZWF0ZVN0eWxlcz1mdW5jdGlvbihlLHQsbixyKXt2YXIgbz1yKE5lKHRoaXMucnVsZXMsdCxuLHIpLmpvaW4oXCJcIiksXCJcIiksaT10aGlzLmNvbXBvbmVudElkK2U7bi5pbnNlcnRSdWxlcyhpLGksbyl9LHQucmVtb3ZlU3R5bGVzPWZ1bmN0aW9uKGUsdCl7dC5jbGVhclJ1bGVzKHRoaXMuY29tcG9uZW50SWQrZSl9LHQucmVuZGVyU3R5bGVzPWZ1bmN0aW9uKGUsdCxuLHIpe2U+MiYmWi5yZWdpc3RlcklkKHRoaXMuY29tcG9uZW50SWQrZSksdGhpcy5yZW1vdmVTdHlsZXMoZSxuKSx0aGlzLmNyZWF0ZVN0eWxlcyhlLHQsbixyKX0sZX0oKTtmdW5jdGlvbiAkZShlKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxuPW5ldyBBcnJheSh0PjE/dC0xOjApLG89MTtvPHQ7bysrKW5bby0xXT1hcmd1bWVudHNbb107dmFyIHM9QWUuYXBwbHkodm9pZCAwLFtlXS5jb25jYXQobikpLGE9XCJzYy1nbG9iYWwtXCIrVGUoSlNPTi5zdHJpbmdpZnkocykpLHU9bmV3IEhlKHMsYSk7ZnVuY3Rpb24gbChlKXt2YXIgdD1mZSgpLG49bWUoKSxvPWkoemUpLGw9Yyh0LmFsbG9jYXRlR1NJbnN0YW5jZShhKSkuY3VycmVudDtyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZyLkNoaWxkcmVuLmNvdW50KGUuY2hpbGRyZW4pJiZjb25zb2xlLndhcm4oXCJUaGUgZ2xvYmFsIHN0eWxlIGNvbXBvbmVudCBcIithK1wiIHdhcyBnaXZlbiBjaGlsZCBKU1guIGNyZWF0ZUdsb2JhbFN0eWxlIGRvZXMgbm90IHJlbmRlciBjaGlsZHJlbi5cIiksXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmcy5zb21lKChmdW5jdGlvbihlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZSYmLTEhPT1lLmluZGV4T2YoXCJAaW1wb3J0XCIpfSkpJiZjb25zb2xlLndhcm4oXCJQbGVhc2UgZG8gbm90IHVzZSBAaW1wb3J0IENTUyBzeW50YXggaW4gY3JlYXRlR2xvYmFsU3R5bGUgYXQgdGhpcyB0aW1lLCBhcyB0aGUgQ1NTT00gQVBJcyB3ZSB1c2UgaW4gcHJvZHVjdGlvbiBkbyBub3QgaGFuZGxlIGl0IHdlbGwuIEluc3RlYWQsIHdlIHJlY29tbWVuZCB1c2luZyBhIGxpYnJhcnkgc3VjaCBhcyByZWFjdC1oZWxtZXQgdG8gaW5qZWN0IGEgdHlwaWNhbCA8bGluaz4gbWV0YSB0YWcgdG8gdGhlIHN0eWxlc2hlZXQsIG9yIHNpbXBseSBlbWJlZGRpbmcgaXQgbWFudWFsbHkgaW4geW91ciBpbmRleC5odG1sIDxoZWFkPiBzZWN0aW9uIGZvciBhIHNpbXBsZXIgYXBwLlwiKSxkKChmdW5jdGlvbigpe3JldHVybiBoKGwsZSx0LG8sbiksZnVuY3Rpb24oKXtyZXR1cm4gdS5yZW1vdmVTdHlsZXMobCx0KX19KSxbbCxlLHQsbyxuXSksbnVsbH1mdW5jdGlvbiBoKGUsdCxuLHIsbyl7aWYodS5pc1N0YXRpYyl1LnJlbmRlclN0eWxlcyhlLE8sbixvKTtlbHNle3ZhciBpPXYoe30sdCx7dGhlbWU6T2UodCxyLGwuZGVmYXVsdFByb3BzKX0pO3UucmVuZGVyU3R5bGVzKGUsaSxuLG8pfX1yZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZQZShhKSxyLm1lbW8obCl9ZnVuY3Rpb24gV2UoZSl7XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG5hdmlnYXRvciYmXCJSZWFjdE5hdGl2ZVwiPT09bmF2aWdhdG9yLnByb2R1Y3QmJmNvbnNvbGUud2FybihcImBrZXlmcmFtZXNgIGNhbm5vdCBiZSB1c2VkIG9uIFJlYWN0TmF0aXZlLCBvbmx5IG9uIHRoZSB3ZWIuIFRvIGRvIGFuaW1hdGlvbiBpbiBSZWFjdE5hdGl2ZSBwbGVhc2UgdXNlIEFuaW1hdGVkLlwiKTtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxuPW5ldyBBcnJheSh0PjE/dC0xOjApLHI9MTtyPHQ7cisrKW5bci0xXT1hcmd1bWVudHNbcl07dmFyIG89QWUuYXBwbHkodm9pZCAwLFtlXS5jb25jYXQobikpLmpvaW4oXCJcIiksaT1UZShvKTtyZXR1cm4gbmV3IHZlKGksbyl9dmFyIFVlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe3ZhciBlPXRoaXM7dGhpcy5fZW1pdFNoZWV0Q1NTPWZ1bmN0aW9uKCl7dmFyIHQ9ZS5pbnN0YW5jZS50b1N0cmluZygpLG49cSgpO3JldHVyblwiPHN0eWxlIFwiK1tuJiYnbm9uY2U9XCInK24rJ1wiJyxBKyc9XCJ0cnVlXCInLCdkYXRhLXN0eWxlZC12ZXJzaW9uPVwiNS4zLjBcIiddLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKStcIj5cIit0K1wiPC9zdHlsZT5cIn0sdGhpcy5nZXRTdHlsZVRhZ3M9ZnVuY3Rpb24oKXtyZXR1cm4gZS5zZWFsZWQ/aigyKTplLl9lbWl0U2hlZXRDU1MoKX0sdGhpcy5nZXRTdHlsZUVsZW1lbnQ9ZnVuY3Rpb24oKXt2YXIgdDtpZihlLnNlYWxlZClyZXR1cm4gaigyKTt2YXIgbj0oKHQ9e30pW0FdPVwiXCIsdFtcImRhdGEtc3R5bGVkLXZlcnNpb25cIl09XCI1LjMuMFwiLHQuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e19faHRtbDplLmluc3RhbmNlLnRvU3RyaW5nKCl9LHQpLG89cSgpO3JldHVybiBvJiYobi5ub25jZT1vKSxbci5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix2KHt9LG4se2tleTpcInNjLTAtMFwifSkpXX0sdGhpcy5zZWFsPWZ1bmN0aW9uKCl7ZS5zZWFsZWQ9ITB9LHRoaXMuaW5zdGFuY2U9bmV3IFooe2lzU2VydmVyOiEwfSksdGhpcy5zZWFsZWQ9ITF9dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQuY29sbGVjdFN0eWxlcz1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5zZWFsZWQ/aigyKTpyLmNyZWF0ZUVsZW1lbnQoeWUse3NoZWV0OnRoaXMuaW5zdGFuY2V9LGUpfSx0LmludGVybGVhdmVXaXRoTm9kZVN0cmVhbT1mdW5jdGlvbihlKXtyZXR1cm4gaigzKX0sZX0oKSxKZT1mdW5jdGlvbihlKXt2YXIgdD1yLmZvcndhcmRSZWYoKGZ1bmN0aW9uKHQsbil7dmFyIG89aSh6ZSkscz1lLmRlZmF1bHRQcm9wcyxhPU9lKHQsbyxzKTtyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZ2b2lkIDA9PT1hJiZjb25zb2xlLndhcm4oJ1t3aXRoVGhlbWVdIFlvdSBhcmUgbm90IHVzaW5nIGEgVGhlbWVQcm92aWRlciBub3IgcGFzc2luZyBhIHRoZW1lIHByb3Agb3IgYSB0aGVtZSBpbiBkZWZhdWx0UHJvcHMgaW4gY29tcG9uZW50IGNsYXNzIFwiJytfKGUpKydcIicpLHIuY3JlYXRlRWxlbWVudChlLHYoe30sdCx7dGhlbWU6YSxyZWY6bn0pKX0pKTtyZXR1cm4geSh0LGUpLHQuZGlzcGxheU5hbWU9XCJXaXRoVGhlbWUoXCIrXyhlKStcIilcIix0fSxYZT1mdW5jdGlvbigpe3JldHVybiBpKHplKX0sWmU9e1N0eWxlU2hlZXQ6WixtYXN0ZXJTaGVldDpoZX07XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG5hdmlnYXRvciYmXCJSZWFjdE5hdGl2ZVwiPT09bmF2aWdhdG9yLnByb2R1Y3QmJmNvbnNvbGUud2FybihcIkl0IGxvb2tzIGxpa2UgeW91J3ZlIGltcG9ydGVkICdzdHlsZWQtY29tcG9uZW50cycgb24gUmVhY3QgTmF0aXZlLlxcblBlcmhhcHMgeW91J3JlIGxvb2tpbmcgdG8gaW1wb3J0ICdzdHlsZWQtY29tcG9uZW50cy9uYXRpdmUnP1xcblJlYWQgbW9yZSBhYm91dCB0aGlzIGF0IGh0dHBzOi8vd3d3LnN0eWxlZC1jb21wb25lbnRzLmNvbS9kb2NzL2Jhc2ljcyNyZWFjdC1uYXRpdmVcIiksXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmXCJ0ZXN0XCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKHdpbmRvd1tcIl9fc3R5bGVkLWNvbXBvbmVudHMtaW5pdF9fXCJdPXdpbmRvd1tcIl9fc3R5bGVkLWNvbXBvbmVudHMtaW5pdF9fXCJdfHwwLDE9PT13aW5kb3dbXCJfX3N0eWxlZC1jb21wb25lbnRzLWluaXRfX1wiXSYmY29uc29sZS53YXJuKFwiSXQgbG9va3MgbGlrZSB0aGVyZSBhcmUgc2V2ZXJhbCBpbnN0YW5jZXMgb2YgJ3N0eWxlZC1jb21wb25lbnRzJyBpbml0aWFsaXplZCBpbiB0aGlzIGFwcGxpY2F0aW9uLiBUaGlzIG1heSBjYXVzZSBkeW5hbWljIHN0eWxlcyB0byBub3QgcmVuZGVyIHByb3Blcmx5LCBlcnJvcnMgZHVyaW5nIHRoZSByZWh5ZHJhdGlvbiBwcm9jZXNzLCBhIG1pc3NpbmcgdGhlbWUgcHJvcCwgYW5kIG1ha2VzIHlvdXIgYXBwbGljYXRpb24gYmlnZ2VyIHdpdGhvdXQgZ29vZCByZWFzb24uXFxuXFxuU2VlIGh0dHBzOi8vcy1jLnNoLzJCQVh6ZWQgZm9yIG1vcmUgaW5mby5cIiksd2luZG93W1wiX19zdHlsZWQtY29tcG9uZW50cy1pbml0X19cIl0rPTEpO2V4cG9ydCBkZWZhdWx0IHFlO2V4cG9ydHtVZSBhcyBTZXJ2ZXJTdHlsZVNoZWV0LGxlIGFzIFN0eWxlU2hlZXRDb25zdW1lcix1ZSBhcyBTdHlsZVNoZWV0Q29udGV4dCx5ZSBhcyBTdHlsZVNoZWV0TWFuYWdlcixMZSBhcyBUaGVtZUNvbnN1bWVyLHplIGFzIFRoZW1lQ29udGV4dCxHZSBhcyBUaGVtZVByb3ZpZGVyLFplIGFzIF9fUFJJVkFURV9fLCRlIGFzIGNyZWF0ZUdsb2JhbFN0eWxlLEFlIGFzIGNzcyxOIGFzIGlzU3R5bGVkQ29tcG9uZW50LFdlIGFzIGtleWZyYW1lcyxYZSBhcyB1c2VUaGVtZSxDIGFzIHZlcnNpb24sSmUgYXMgd2l0aFRoZW1lfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlZC1jb21wb25lbnRzLmJyb3dzZXIuZXNtLmpzLm1hcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==