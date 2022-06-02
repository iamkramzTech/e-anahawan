this.wc=this.wc||{},this.wc.date=function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=465)}({11:function(e,t){e.exports=window.moment},2:function(e,t){e.exports=window.wp.i18n},32:function(e,t,r){"use strict";var o=r(62),n=r(63),a=r(39);e.exports={formats:a,parse:n,stringify:o}},39:function(e,t,r){"use strict";var o=String.prototype.replace,n=/%20/g,a="RFC1738",i="RFC3986";e.exports={default:i,formatters:{RFC1738:function(e){return o.call(e,n,"+")},RFC3986:function(e){return String(e)}},RFC1738:a,RFC3986:i}},45:function(e,t,r){"use strict";var o=r(39),n=Object.prototype.hasOwnProperty,a=Array.isArray,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),c=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)void 0!==e[o]&&(r[o]=e[o]);return r};e.exports={arrayToObject:c,assign:function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],o=0;o<t.length;++o)for(var n=t[o],i=n.obj[n.prop],c=Object.keys(i),l=0;l<c.length;++l){var s=c[l],u=i[s];"object"==typeof u&&null!==u&&-1===r.indexOf(u)&&(t.push({obj:i,prop:s}),r.push(u))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(a(r)){for(var o=[],n=0;n<r.length;++n)void 0!==r[n]&&o.push(r[n]);t.obj[t.prop]=o}}}(t),e},decode:function(e,t,r){var o=e.replace(/\+/g," ");if("iso-8859-1"===r)return o.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(o)}catch(e){return o}},encode:function(e,t,r,n,a){if(0===e.length)return e;var c=e;if("symbol"==typeof e?c=Symbol.prototype.toString.call(e):"string"!=typeof e&&(c=String(e)),"iso-8859-1"===r)return escape(c).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var l="",s=0;s<c.length;++s){var u=c.charCodeAt(s);45===u||46===u||95===u||126===u||u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122||a===o.RFC1738&&(40===u||41===u)?l+=c.charAt(s):u<128?l+=i[u]:u<2048?l+=i[192|u>>6]+i[128|63&u]:u<55296||u>=57344?l+=i[224|u>>12]+i[128|u>>6&63]+i[128|63&u]:(s+=1,u=65536+((1023&u)<<10|1023&c.charCodeAt(s)),l+=i[240|u>>18]+i[128|u>>12&63]+i[128|u>>6&63]+i[128|63&u])}return l},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,t){if(a(e)){for(var r=[],o=0;o<e.length;o+=1)r.push(t(e[o]));return r}return t(e)},merge:function e(t,r,o){if(!r)return t;if("object"!=typeof r){if(a(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(o&&(o.plainObjects||o.allowPrototypes)||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(r);var i=t;return a(t)&&!a(r)&&(i=c(t,o)),a(t)&&a(r)?(r.forEach((function(r,a){if(n.call(t,a)){var i=t[a];i&&"object"==typeof i&&r&&"object"==typeof r?t[a]=e(i,r,o):t.push(r)}else t[a]=r})),t):Object.keys(r).reduce((function(t,a){var i=r[a];return n.call(t,a)?t[a]=e(t[a],i,o):t[a]=i,t}),i)}}},465:function(e,t,r){"use strict";r.r(t),r.d(t,"isoDateFormat",(function(){return l})),r.d(t,"defaultDateTimeFormat",(function(){return s})),r.d(t,"presetValues",(function(){return u})),r.d(t,"periods",(function(){return d})),r.d(t,"appendTimestamp",(function(){return f})),r.d(t,"toMoment",(function(){return m})),r.d(t,"getRangeLabel",(function(){return p})),r.d(t,"getStoreTimeZoneMoment",(function(){return y})),r.d(t,"getLastPeriod",(function(){return b})),r.d(t,"getCurrentPeriod",(function(){return h})),r.d(t,"getDateParamsFromQuery",(function(){return g})),r.d(t,"getCurrentDates",(function(){return O})),r.d(t,"getDateDifferenceInDays",(function(){return _})),r.d(t,"getPreviousDate",(function(){return Y})),r.d(t,"getAllowedIntervalsForQuery",(function(){return k})),r.d(t,"getIntervalForQuery",(function(){return S})),r.d(t,"getChartTypeForQuery",(function(){return D})),r.d(t,"dayTicksThreshold",(function(){return M})),r.d(t,"weekTicksThreshold",(function(){return F})),r.d(t,"defaultTableDateFormat",(function(){return x})),r.d(t,"getDateFormatsForInterval",(function(){return L})),r.d(t,"getDateFormatsForIntervalD3",(function(){return P})),r.d(t,"getDateFormatsForIntervalPhp",(function(){return E})),r.d(t,"loadLocaleData",(function(){return A})),r.d(t,"dateValidationMessages",(function(){return N})),r.d(t,"validateDateInputForRange",(function(){return T}));var o=r(11),n=r.n(o),a=r(5),i=r(2),c=r(32);const l="YYYY-MM-DD",s="YYYY-MM-DDTHH:mm:ss",u=[{value:"today",label:Object(i.__)("Today",'woocommerce')},{value:"yesterday",label:Object(i.__)("Yesterday",'woocommerce')},{value:"week",label:Object(i.__)("Week to date",'woocommerce')},{value:"last_week",label:Object(i.__)("Last week",'woocommerce')},{value:"month",label:Object(i.__)("Month to date",'woocommerce')},{value:"last_month",label:Object(i.__)("Last month",'woocommerce')},{value:"quarter",label:Object(i.__)("Quarter to date",'woocommerce')},{value:"last_quarter",label:Object(i.__)("Last quarter",'woocommerce')},{value:"year",label:Object(i.__)("Year to date",'woocommerce')},{value:"last_year",label:Object(i.__)("Last year",'woocommerce')},{value:"custom",label:Object(i.__)("Custom",'woocommerce')}],d=[{value:"previous_period",label:Object(i.__)("Previous period",'woocommerce')},{value:"previous_year",label:Object(i.__)("Previous year",'woocommerce')}],f=(e,t)=>{if("start"===t)return e.startOf("day").format(s);if("now"===t)return e.format(s);if("end"===t)return e.endOf("day").format(s);throw new Error("appendTimestamp requires second parameter to be either `start`, `now` or `end`")};function m(e,t){if(n.a.isMoment(t))return t.isValid()?t:null;if("string"==typeof t){const r=n()(t,[l,e],!0);return r.isValid()?r:null}throw new Error("toMoment requires a string to be passed as an argument")}function p(e,t){const r=e.year()===t.year(),o=r&&e.month()===t.month(),n=r&&o&&e.isSame(t,"day"),a=Object(i.__)("MMM D, YYYY",'woocommerce');if(n)return e.format(a);if(o){const r=e.date();return e.format(a).replace(r,`${r} - ${t.date()}`)}if(r){const r=Object(i.__)("MMM D",'woocommerce');return`${e.format(r)} - ${t.format(a)}`}return`${e.format(a)} - ${t.format(a)}`}function y(){return window.wcSettings&&window.wcSettings.timeZone?["+","-"].includes(window.wcSettings.timeZone.charAt(0))?n()().utcOffset(window.wcSettings.timeZone):n()().tz(window.wcSettings.timeZone):n()()}function b(e,t){const r=y().startOf(e).subtract(1,e),o=r.clone().endOf(e);let a,i;if("previous_period"===t)if("year"===e)a=n()().startOf(e).subtract(2,e),i=a.clone().endOf(e);else{const e=o.diff(r,"days");i=r.clone().subtract(1,"days"),a=i.clone().subtract(e,"days")}else"week"===e?(a=r.clone().subtract(1,"years"),i=o.clone().subtract(1,"years")):(a=r.clone().subtract(1,"years"),i=a.clone().endOf(e));return"month"===e&&(i=i.clone().endOf("month")),{primaryStart:r,primaryEnd:o,secondaryStart:a,secondaryEnd:i}}function h(e,t){const r=y().startOf(e),o=y(),n=o.diff(r,"days");let a,i;return"previous_period"===t?(a=r.clone().subtract(1,e),i=o.clone().subtract(1,e)):(a=r.clone().subtract(1,"years"),i=a.clone().add(n+1,"days").subtract(1,"seconds")),{primaryStart:r,primaryEnd:o,secondaryStart:a,secondaryEnd:i}}const v=Object(a.memoize)((e,t,r,o)=>{switch(e){case"today":return h("day",t);case"yesterday":return b("day",t);case"week":return h("week",t);case"last_week":return b("week",t);case"month":return h("month",t);case"last_month":return b("month",t);case"quarter":return h("quarter",t);case"last_quarter":return b("quarter",t);case"year":return h("year",t);case"last_year":return b("year",t);case"custom":const e=o.diff(r,"days");if("previous_period"===t){const t=r.clone().subtract(1,"days");return{primaryStart:r,primaryEnd:o,secondaryStart:t.clone().subtract(e,"days"),secondaryEnd:t}}return{primaryStart:r,primaryEnd:o,secondaryStart:r.clone().subtract(1,"years"),secondaryEnd:o.clone().subtract(1,"years")}}},(e,t,r,o)=>[e,t,r&&r.format(),o&&o.format()].join(":")),w=Object(a.memoize)((e,t,r,o,a)=>{if(e&&t)return{period:e,compare:t,after:r?n()(r):null,before:o?n()(o):null};const i=Object(c.parse)(a.replace(/&amp;/g,"&"));return{period:i.period,compare:i.compare,after:i.after?n()(i.after):null,before:i.before?n()(i.before):null}},(e,t,r,o,n)=>[e,t,r,o,n].join(":")),g=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"period=month&compare=previous_year";const{period:r,compare:o,after:n,before:a}=e;return w(r,o,n,a,t)},j=Object(a.memoize)((e,t,r,o,n,i)=>({primary:{label:Object(a.find)(u,t=>t.value===e).label,range:p(r,o),after:r,before:o},secondary:{label:Object(a.find)(d,e=>e.value===t).label,range:p(n,i),after:n,before:i}}),(e,t,r,o,n,a)=>[e,t,r&&r.format(),o&&o.format(),n&&n.format(),a&&a.format()].join(":")),O=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"period=month&compare=previous_year";const{period:r,compare:o,after:n,before:a}=g(e,t),{primaryStart:i,primaryEnd:c,secondaryStart:l,secondaryEnd:s}=v(r,o,n,a);return j(r,o,i,c,l,s)},_=(e,t)=>{const r=n()(e),o=n()(t);return r.diff(o,"days")},Y=(e,t,r,o,a)=>{const i=n()(e);if("previous_year"===o)return i.clone().subtract(1,"years");const c=n()(t),l=n()(r),s=c.diff(l,a);return i.clone().subtract(s,a)};function k(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"period=&compare=previous_year";const{period:r}=g(e,t);let o=[];if("custom"===r){const{primary:t}=O(e),r=_(t.before,t.after);o=r>=365?["day","week","month","quarter","year"]:r>=90?["day","week","month","quarter"]:r>=28?["day","week","month"]:r>=7?["day","week"]:r>1&&r<7?["day"]:["hour","day"]}else switch(r){case"today":case"yesterday":o=["hour","day"];break;case"week":case"last_week":o=["day"];break;case"month":case"last_month":o=["day","week"];break;case"quarter":case"last_quarter":o=["day","week","month"];break;case"year":case"last_year":o=["day","week","month","quarter"];break;default:o=["day"]}return o}function S(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"period=&compare=previous_year";const r=k(e,t),o=r[0];let n=e.interval||o;return e.interval&&!r.includes(e.interval)&&(n=o),n}function D(e){let{chartType:t}=e;return["line","bar"].includes(t)?t:"line"}const M=63,F=9,x="m/d/Y";function L(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{type:"d3"};switch(r.type){case"php":return E(e,t);case"d3":default:return P(e,t)}}function P(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r="%B %-d, %Y",o="%B %-d, %Y",n="%Y-%m-%d",a="%b %Y",c=x;switch(e){case"hour":r="%_I%p %B %-d, %Y",o="%_I%p %b %-d, %Y",n="%_I%p",a="%b %-d, %Y",c="h A";break;case"day":t<M?n="%-d":(n="%b",a="%Y");break;case"week":t<F?(n="%-d",a="%b %Y"):(n="%b",a="%Y"),r=Object(i.__)("Week of %B %-d, %Y",'woocommerce'),o=Object(i.__)("Week of %B %-d, %Y",'woocommerce');break;case"quarter":case"month":r="%B %Y",o="%B %Y",n="%b",a="%Y";break;case"year":r="%Y",o="%Y",n="%Y"}return{screenReaderFormat:r,tooltipLabelFormat:o,xFormat:n,x2Format:a,tableFormat:c}}function E(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r="F j, Y",o="F j, Y",n="Y-m-d",a="M Y",c=x;switch(e){case"hour":r="gA F j, Y",o="gA M j, Y",n="gA",a="M j, Y",c="h A";break;case"day":t<M?n="j":(n="M",a="Y");break;case"week":t<F?(n="j",a="M Y"):(n="M",a="Y");const e=Object(i.__)("Week of",'woocommerce').replace(/(\w)/g,"\\$1");r=e+" F j, Y",o=e+" F j, Y";break;case"quarter":case"month":r="F Y",o="F Y",n="M",a="Y";break;case"year":r="Y",o="Y",n="Y"}return{screenReaderFormat:r,tooltipLabelFormat:o,xFormat:n,x2Format:a,tableFormat:c}}function A(e){let{userLocale:t,weekdaysShort:r}=e;"en"!==n.a.locale()&&n.a.updateLocale(t,{longDateFormat:{L:Object(i.__)("MM/DD/YYYY",'woocommerce'),LL:Object(i.__)("MMMM D, YYYY",'woocommerce'),LLL:Object(i.__)("D MMMM YYYY LT",'woocommerce'),LLLL:Object(i.__)("dddd, D MMMM YYYY LT",'woocommerce'),LT:Object(i.__)("HH:mm",'woocommerce')},weekdaysMin:r})}const N={invalid:Object(i.__)("Invalid date",'woocommerce'),future:Object(i.__)("Select a date in the past",'woocommerce'),startAfterEnd:Object(i.__)("Start date must be before end date",'woocommerce'),endBeforeStart:Object(i.__)("Start date must be before end date",'woocommerce')};function T(e,t,r,o,a){const i=m(a,t);return i?n()().isBefore(i,"day")?{date:null,error:N.future}:"after"===e&&r&&i.isAfter(r,"day")?{date:null,error:N.startAfterEnd}:"before"===e&&o&&i.isBefore(o,"day")?{date:null,error:N.endBeforeStart}:{date:i}:{date:null,error:N.invalid}}},5:function(e,t){e.exports=window.lodash},62:function(e,t,r){"use strict";var o=r(45),n=r(39),a=Object.prototype.hasOwnProperty,i={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},c=Array.isArray,l=Array.prototype.push,s=function(e,t){l.apply(e,c(t)?t:[t])},u=Date.prototype.toISOString,d=n.default,f={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,format:d,formatter:n.formatters[d],indices:!1,serializeDate:function(e){return u.call(e)},skipNulls:!1,strictNullHandling:!1},m=function e(t,r,n,a,i,l,u,d,m,p,y,b,h,v){var w,g=t;if("function"==typeof u?g=u(r,g):g instanceof Date?g=p(g):"comma"===n&&c(g)&&(g=o.maybeMap(g,(function(e){return e instanceof Date?p(e):e}))),null===g){if(a)return l&&!h?l(r,f.encoder,v,"key",y):r;g=""}if("string"==typeof(w=g)||"number"==typeof w||"boolean"==typeof w||"symbol"==typeof w||"bigint"==typeof w||o.isBuffer(g))return l?[b(h?r:l(r,f.encoder,v,"key",y))+"="+b(l(g,f.encoder,v,"value",y))]:[b(r)+"="+b(String(g))];var j,O=[];if(void 0===g)return O;if("comma"===n&&c(g))j=[{value:g.length>0?g.join(",")||null:void 0}];else if(c(u))j=u;else{var _=Object.keys(g);j=d?_.sort(d):_}for(var Y=0;Y<j.length;++Y){var k=j[Y],S="object"==typeof k&&void 0!==k.value?k.value:g[k];if(!i||null!==S){var D=c(g)?"function"==typeof n?n(r,k):r:r+(m?"."+k:"["+k+"]");s(O,e(S,D,n,a,i,l,u,d,m,p,y,b,h,v))}}return O};e.exports=function(e,t){var r,o=e,l=function(e){if(!e)return f;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||f.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=n.default;if(void 0!==e.format){if(!a.call(n.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var o=n.formatters[r],i=f.filter;return("function"==typeof e.filter||c(e.filter))&&(i=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:f.addQueryPrefix,allowDots:void 0===e.allowDots?f.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:f.charsetSentinel,delimiter:void 0===e.delimiter?f.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:f.encode,encoder:"function"==typeof e.encoder?e.encoder:f.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:f.encodeValuesOnly,filter:i,format:r,formatter:o,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:f.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:f.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:f.strictNullHandling}}(t);"function"==typeof l.filter?o=(0,l.filter)("",o):c(l.filter)&&(r=l.filter);var u,d=[];if("object"!=typeof o||null===o)return"";u=t&&t.arrayFormat in i?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var p=i[u];r||(r=Object.keys(o)),l.sort&&r.sort(l.sort);for(var y=0;y<r.length;++y){var b=r[y];l.skipNulls&&null===o[b]||s(d,m(o[b],b,p,l.strictNullHandling,l.skipNulls,l.encode?l.encoder:null,l.filter,l.sort,l.allowDots,l.serializeDate,l.format,l.formatter,l.encodeValuesOnly,l.charset))}var h=d.join(l.delimiter),v=!0===l.addQueryPrefix?"?":"";return l.charsetSentinel&&("iso-8859-1"===l.charset?v+="utf8=%26%2310003%3B&":v+="utf8=%E2%9C%93&"),h.length>0?v+h:""}},63:function(e,t,r){"use strict";var o=r(45),n=Object.prototype.hasOwnProperty,a=Array.isArray,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:o.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},c=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},l=function(e,t){return e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},s=function(e,t,r,o){if(e){var a=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/g,c=r.depth>0&&/(\[[^[\]]*])/.exec(a),s=c?a.slice(0,c.index):a,u=[];if(s){if(!r.plainObjects&&n.call(Object.prototype,s)&&!r.allowPrototypes)return;u.push(s)}for(var d=0;r.depth>0&&null!==(c=i.exec(a))&&d<r.depth;){if(d+=1,!r.plainObjects&&n.call(Object.prototype,c[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(c[1])}return c&&u.push("["+a.slice(c.index)+"]"),function(e,t,r,o){for(var n=o?t:l(t,r),a=e.length-1;a>=0;--a){var i,c=e[a];if("[]"===c&&r.parseArrays)i=[].concat(n);else{i=r.plainObjects?Object.create(null):{};var s="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,u=parseInt(s,10);r.parseArrays||""!==s?!isNaN(u)&&c!==s&&String(u)===s&&u>=0&&r.parseArrays&&u<=r.arrayLimit?(i=[])[u]=n:i[s]=n:i={0:n}}n=i}return n}(u,t,r,o)}};e.exports=function(e,t){var r=function(e){if(!e)return i;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?i.charset:e.charset;return{allowDots:void 0===e.allowDots?i.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:i.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:i.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:i.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:i.comma,decoder:"function"==typeof e.decoder?e.decoder:i.decoder,delimiter:"string"==typeof e.delimiter||o.isRegExp(e.delimiter)?e.delimiter:i.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:i.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:i.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:i.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:i.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:i.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var u="string"==typeof e?function(e,t){var r,s={},u=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,d=t.parameterLimit===1/0?void 0:t.parameterLimit,f=u.split(t.delimiter,d),m=-1,p=t.charset;if(t.charsetSentinel)for(r=0;r<f.length;++r)0===f[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===f[r]?p="utf-8":"utf8=%26%2310003%3B"===f[r]&&(p="iso-8859-1"),m=r,r=f.length);for(r=0;r<f.length;++r)if(r!==m){var y,b,h=f[r],v=h.indexOf("]="),w=-1===v?h.indexOf("="):v+1;-1===w?(y=t.decoder(h,i.decoder,p,"key"),b=t.strictNullHandling?null:""):(y=t.decoder(h.slice(0,w),i.decoder,p,"key"),b=o.maybeMap(l(h.slice(w+1),t),(function(e){return t.decoder(e,i.decoder,p,"value")}))),b&&t.interpretNumericEntities&&"iso-8859-1"===p&&(b=c(b)),h.indexOf("[]=")>-1&&(b=a(b)?[b]:b),n.call(s,y)?s[y]=o.combine(s[y],b):s[y]=b}return s}(e,r):e,d=r.plainObjects?Object.create(null):{},f=Object.keys(u),m=0;m<f.length;++m){var p=f[m],y=s(p,u[p],r,"string"==typeof e);d=o.merge(d,y,r)}return o.compact(d)}}});