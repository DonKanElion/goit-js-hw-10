!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=a||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,y=function(){return s.Date.now()};function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var a=u.test(t);return a||c.test(t)?f(t.slice(2),a?2:8):i.test(t)?NaN:+t}t=function(e,t,n){var o,r,i,u,c,f,a=0,l=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=o,i=r;return o=r=void 0,a=t,u=e.apply(i,n)}function g(e){return a=e,c=setTimeout(T,t),l?m(e):u}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-a>=i}function T(){var e=y();if(j(e))return w(e);c=setTimeout(T,function(e){var n=t-(e-f);return s?p(n,i-(e-a)):n}(e))}function w(e){return c=void 0,d&&o?m(e):(o=r=void 0,u)}function x(){var e=y(),n=j(e);if(o=arguments,r=this,f=e,n){if(void 0===c)return g(f);if(s)return c=setTimeout(T,t),m(f)}return void 0===c&&(c=setTimeout(T,t)),u}return t=h(t)||0,b(n)&&(l=!!n.leading,i=(s="maxWait"in n)?v(h(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),x.cancel=function(){void 0!==c&&clearTimeout(c),a=0,o=f=r=c=void 0},x.flush=function(){return void 0===c?u:w(y())},x};var m={searchBox:document.querySelector("input#search-box"),countryList:document.querySelector(".country-list"),countryInfo:document.querySelector(".country-info")};m.searchBox.addEventListener("input",e(t)((function(e){var t=m.searchBox.value.trim();console.log(t),n=t,console.log("Hello fetchCountries: ".concat(n)),fetch("https://restcountries.com/v2/all?fields=name.official,capital,population,flags.svg,languages").then((function(e){if(!e.ok)throw new Error(e.starus);return console.log("Then 1: response ",e),e.json()})).catch((function(e){console.log("This is ERROR !!!! ",e)}));var n}),300))}();
//# sourceMappingURL=index.b1d75d7b.js.map
