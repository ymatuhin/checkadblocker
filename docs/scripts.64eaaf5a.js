parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"zAbn":[function(require,module,exports) {
"use strict";var e=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;var o=Array(e),c=0;for(r=0;r<t;r++)for(var s=arguments[r],l=0,T=s.length;l<T;l++,c++)o[c]=s[l];return o};Object.defineProperty(exports,"__esModule",{value:!0}),exports.CHECK_EVAL_ATTRIBUTE="data-check-eval",exports.CHECK_SIZE_ATTRIBUTE="data-check-size",exports.CHECK_LOADING_ATTRIBUTE="data-check-loading",exports.CHECK_FETCH_ATTRIBUTE="data-check-fetch",exports.CHECK_VAR_ATTRIBUTE="data-check-variables",exports.ITEM_BLOCKED="data-blocked",exports.ITEM_FINAL_BLOCKED="data-final-blocked",exports.STATUS_LOADING_SUCCESS="success",exports.STATUS_LOADING_FAILURE="failure",exports.$finalScorePercent=document.querySelector(".js-final-score-percent"),exports.$finalScoreSuccess=document.querySelector(".js-final-score-success"),exports.$finalScoreCount=document.querySelector(".js-final-score-count"),exports.$checkLoadings=e(document.querySelectorAll("["+exports.CHECK_LOADING_ATTRIBUTE+"]")),exports.$checkVars=e(document.querySelectorAll("["+exports.CHECK_VAR_ATTRIBUTE+"]")),exports.$checkSizes=e(document.querySelectorAll("["+exports.CHECK_SIZE_ATTRIBUTE+"]")),exports.$checkEvals=e(document.querySelectorAll("["+exports.CHECK_EVAL_ATTRIBUTE+"]")),exports.$checkFetchs=e(document.querySelectorAll("["+exports.CHECK_FETCH_ATTRIBUTE+"]")),exports.$itemResults=e(document.querySelectorAll("["+exports.ITEM_BLOCKED+"]"));
},{}],"x3jT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./variables"),t=function(){var e=!1;try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash")&&(e=!0)}catch(t){null!=navigator.mimeTypes["application/x-shockwave-flash"]&&(e=!0)}return e};function r(e,t){void 0===t&&(t=window);for(var r=e.split("."),i=t,o=0;o<r.length;++o){if(null==i[r[o]])return;i=i[r[o]]}return i}exports.flashSupported=t(),exports.extendAttribute=function(e,t,r){var i=e.getAttribute(t),o=i?"/":"";e.setAttribute(t,i+o+r)},exports.updateResult=function(t,r){var i=t.closest("li").querySelector("["+e.ITEM_BLOCKED+"]");exports.extendAttribute(i,e.ITEM_BLOCKED,r)},exports.deepFind=r;
},{"./variables":"zAbn"}],"KqmS":[function(require,module,exports) {
"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(a,i){function s(e){try{l(n.next(e))}catch(t){i(t)}}function u(e){try{l(n.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(s,u)}l((n=n.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var r,n,a,i,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(a=(a=s.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){s.label=i[1];break}if(6===i[0]&&s.label<a[1]){s.label=a[1],a=i;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(i);break}a[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(u){i=[6,u],n=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(exports,"__esModule",{value:!0});var variables_1=require("./variables"),helpers_1=require("./helpers"),syncCheckSize=function(){variables_1.$checkSizes.forEach(function(e){var t=0===e.clientWidth||0===e.clientHeight;e.parentElement.setAttribute("data-size",t?"empty":"full"),e.parentElement.setAttribute("data-unsupported-flash",!1+""),helpers_1.updateResult(e,t||!1)})},syncLoading=function(){variables_1.$checkLoadings.forEach(function(e){var t=e.getAttribute(variables_1.CHECK_LOADING_ATTRIBUTE);""===t?(helpers_1.extendAttribute(e,variables_1.CHECK_LOADING_ATTRIBUTE,variables_1.STATUS_LOADING_FAILURE),helpers_1.updateResult(e,!0)):t.split("/").forEach(function(t){return helpers_1.updateResult(e,t!==variables_1.STATUS_LOADING_SUCCESS)})})},syncVariables=function(){variables_1.$checkVars.forEach(function(e){var t=e.getAttribute(variables_1.CHECK_VAR_ATTRIBUTE).split("/").reduce(function(e,t){return void 0===helpers_1.deepFind(t)||e},!1);helpers_1.updateResult(e,t)})},syncEvals=function syncEvals(){variables_1.$checkEvals.forEach(function($el){var evalString=$el.getAttribute(variables_1.CHECK_EVAL_ATTRIBUTE),result=eval(evalString);helpers_1.updateResult($el,result)})},syncFetch=function(){variables_1.$checkFetchs.forEach(function(e){return __awaiter(void 0,void 0,void 0,function(){var t;return __generator(this,function(r){switch(r.label){case 0:t=e.getAttribute(variables_1.CHECK_FETCH_ATTRIBUTE),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,fetch(t)];case 2:return r.sent(),helpers_1.updateResult(e,!1),[3,4];case 3:return r.sent(),helpers_1.updateResult(e,!0),[3,4];case 4:return[2]}})})})},syncItemResults=function(){variables_1.$itemResults.forEach(function(e){var t=e.getAttribute(variables_1.ITEM_BLOCKED).split("/").map(function(e){return"true"===e}).reduce(function(e,t){return!1!==e&&t}),r=e.getAttribute("data-success-text")||"заблокирован",n=e.getAttribute("data-failute-text")||"загружен";e.setAttribute(variables_1.ITEM_FINAL_BLOCKED,t+""),e.textContent=t?"✅ "+r:"❌ "+n,e.classList.remove(t?"red":"green"),e.classList.add(t?"green":"red")})},syncFinalScore=function(){var e=variables_1.$itemResults.reduce(function(e,t){return e+("true"===t.getAttribute(variables_1.ITEM_FINAL_BLOCKED)?1:0)},0);variables_1.$finalScoreSuccess.textContent=""+e,variables_1.$finalScoreCount.textContent=""+variables_1.$itemResults.length,variables_1.$finalScorePercent.textContent=(0==e?0:Math.round(e/variables_1.$itemResults.length*1e4)/100)+"% "},clearResults=function(){return variables_1.$itemResults.forEach(function(e){return e.setAttribute(variables_1.ITEM_BLOCKED,"")})},appCycle=function e(t){return __awaiter(void 0,void 0,void 0,function(){var r;return __generator(this,function(n){switch(n.label){case 0:return[4,syncFetch()];case 1:return n.sent(),clearResults(),syncCheckSize(),syncLoading(),syncVariables(),syncEvals(),syncItemResults(),syncFinalScore(),r=t+.5*t,setTimeout(function(){return e(r)},r),[2]}})})};window.onload=function(){return appCycle(500)};
},{"./variables":"zAbn","./helpers":"x3jT"}]},{},["KqmS"], null)
//# sourceMappingURL=/scripts.64eaaf5a.js.map