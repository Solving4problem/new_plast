!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist",n(n.s=2)}([function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),r=o.sources.map((function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"}));return[n].concat(r).concat([i]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var o,i,r={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=o.apply(this,arguments)),i}),s=function(t){return document.querySelector(t)},l=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=s.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),c=null,p=0,f=[],d=n(5);function u(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(y(o.parts[a],e))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(y(o.parts[a],e));r[o.id]={id:o.id,refs:1,parts:s}}}}function m(t,e){for(var n=[],o={},i=0;i<t.length;i++){var r=t[i],a=e.base?r[0]+e.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}function g(t,e){var n=l(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=f[f.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),f.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=l(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,i)}}function x(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);e>=0&&f.splice(e,1)}function h(t){var e=document.createElement("style");return t.attrs.type="text/css",_(e,t.attrs),g(t,e),e}function _(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function y(t,e){var n,o,i,r;if(e.transform&&t.css){if(!(r=e.transform(t.css)))return function(){};t.css=r}if(e.singleton){var a=p++;n=c||(c=h(e)),o=w.bind(null,n,a,!1),i=w.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",_(e,t.attrs),g(t,e),e}(e),o=k.bind(null,n,e),i=function(){x(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(e),o=j.bind(null,n),i=function(){x(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=m(t,e);return u(n,e),function(t){for(var o=[],i=0;i<n.length;i++){var a=n[i];(s=r[a.id]).refs--,o.push(s)}t&&u(m(t,e),e);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete r[s.id]}}}};var b,v=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function w(t,e,n,o){var i=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=v(e,i);else{var r=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function j(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function k(t,e,n){var o=n.css,i=n.sourceMap,r=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||r)&&(o=d(o)),i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}},function(t,e,n){"use strict";n(3),n(6),n(8),n(10),n(12),n(14),n(16),n(18),n(20),n(22),n(24),n(26)},function(t,e,n){var o=n(4);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,".donations{width:100%;margin-top:50px}.donations__title{display:flex;justify-content:center;flex-direction:column}.donations__title .donations_main-title{font-family:PT Sans;font-style:normal;font-weight:700;font-size:32px;line-height:41px;text-align:center;color:#000;opacity:.7}.donations__title .donations__subtitle{display:flex;justify-content:center;font-family:PT Sans;font-style:normal;font-weight:400;font-size:16px;text-align:center;color:#000;opacity:.7}.donations__buttons{display:flex;justify-content:center}.donations__buttons .donations__button{position:relative;min-width:170px;min-height:100px;color:#fff;margin:15px;background:linear-gradient(180deg,#3d1e5c,#221131 84.38%);box-shadow:0 4px 20px rgba(61,30,92,.4);border-radius:4px;display:flex;justify-content:center;align-items:center;font-family:PT Sans;font-style:normal;font-weight:700;font-size:16px;line-height:21px;text-align:center}.donations__buttons .donations__button img{height:30px}.donations__buttons .donations__button .donations__link{position:absolute;width:100%;height:100%}.donations__buttons .donations__button .donations__link:hover{color:red}.donations__help{display:flex;justify-content:center;flex-direction:column}.donations__help .donations__help-message{display:flex;justify-content:center;font-family:PT Sans;font-style:normal;font-weight:400;font-size:16px;text-align:center;color:#000;opacity:.7}.donations__help .donations__help-link{display:flex;justify-content:center}.donations__help .donations__help-link a{font-family:PT Sans;font-style:normal;font-weight:700;font-size:16px;line-height:21px;color:#3b1d58}@media screen and (max-width:768px){.donations__buttons{display:flex;justify-content:center;flex-direction:column}}",""])},function(t,e,n){"use strict";t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var i,r=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}},function(t,e,n){var o=n(7);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,'.support-banner{margin:0;padding:0;width:100%;min-height:400px;background-image:url("https://res.cloudinary.com/dhcba8amn/image/upload/v1571655961/DSC_3432_pvtdot.jpg");background-repeat:no-repeat;background-position:top;display:flex;align-items:center;justify-content:center;background-size:cover}.support-banner .support-banner__main-title{margin-left:50px;font-style:normal;font-weight:700;font-size:36px;color:#ffe500}.support-banner .support-banner__subtitle{font-style:normal;font-weight:400;font-size:16px;line-height:19px;color:#fff;padding-left:50px;padding-right:50px;padding-bottom:30px}.support-banner__message{font-family:Roboto;width:60%;min-height:180px;background:linear-gradient(90deg,rgba(0,0,0,.75),rgba(0,0,0,.35));display:flex;align-items:center}.support-banner__lily-wrapper{width:90%;height:100%;display:flex;background:#221131;justify-content:center}.support-banner__lily{width:100%;height:220px;background-image:url("https://res.cloudinary.com/dhcba8amn/image/upload/v1571655743/logo_njcnjk.jpg");background-size:contain;background-repeat:no-repeat;background-position:50%}@media screen and (max-width:968px){.support-banner__message{width:100%;display:flex;justify-content:center;flex-direction:column}.support-banner__lily{order:1;width:90%;height:200px;background-image:url("https://res.cloudinary.com/dhcba8amn/image/upload/v1571655743/logo_njcnjk.jpg");background-position:50%;background-repeat:no-repeat;background-size:contain}.support-banner__text{order:2}}',""])},function(t,e,n){var o=n(9);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,'.attraction{margin-top:50px;flex-direction:column;justify-content:center;align-items:center;background-image:url("https://i.ibb.co/L8KRk2Q/Group-62.png")}.attraction,.attraction .attraction__element__wrapper{display:flex}.attraction .attraction__title{font-family:PT Sans;font-style:normal;font-weight:700;font-size:32px;line-height:41px;text-align:center;color:#000;opacity:.7}.attraction .attraction__element__border{min-width:8px;height:auto;background-color:#221131;border-radius:4px}.attraction .attraction__element{width:70%;display:flex;justify-content:center;align-items:center;margin-top:55px}.attraction .attraction__element .attraction__photo{height:200px}.attraction .attraction__element .attraction__message{padding:22px}.attraction .attraction__element .attraction__main-title{font-family:PT Sans;font-style:normal;font-weight:400;font-size:24px;line-height:31px;color:#000;margin-bottom:25px}.attraction .attraction__element .attraction__subtitle{font-family:PT Sans;font-style:normal;font-weight:400;font-size:14px;line-height:18px;color:#000}@media screen and (max-width:968px){.attraction .attraction__element{flex-direction:column-reverse}.attraction .attraction__element img{max-width:500px}.attraction .attraction__message{order:2}.attraction .attraction__photo{order:1}}@media screen and (max-width:768px){.attraction .attraction__element{flex-direction:column-reverse}.attraction .attraction__element img{max-width:350px}.attraction .attraction__message{order:2}.attraction .attraction__photo{order:1}}@media screen and (max-width:568px){.attraction .attraction .attraction__element{flex-direction:column-reverse}.attraction .attraction .attraction__element img{max-width:300px}.attraction .attraction .attraction__message{order:2}.attraction .attraction .attraction__photo{order:1}}',""])},function(t,e,n){var o=n(11);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,".donations-counter{margin-top:100px}.donations-counter .donations-counter__main-title{font-family:PT Sans;font-style:normal;font-weight:700;font-size:32px;line-height:41px;text-align:center;color:#000;opacity:.7}.donations-counter .donations-bg{position:absolute;bottom:0;left:0;height:60%;width:100%;background:#391655;opacity:.03}.donations-counter .donations-counter__element{position:relative;margin-left:90px;display:flex}.donations-counter .donations-counter__element .donations-counter__sum{font-family:PT Sans;font-style:normal;font-weight:700;font-size:64px;color:#000;opacity:.6}.donations-counter .donations-counter__element .donations-counter__message{position:relative;bottom:-5px;right:0}.donations-counter .donations-counter__element .donations-counter__small-text{font-family:PT Sans;font-style:normal;font-weight:400;font-size:14px;line-height:18px;color:#000;opacity:.6}.donations-counter .donations-counter__element .vertical{width:191px;height:80px;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);background:rgba(0,0,0,.1);box-shadow:inset 0 4px 6px #ccc}.donations-counter .donations-counter__element .progress-bar{box-shadow:inset 0 4px 6px hsla(0,0%,39%,.6)}.donations-counter .donations-counter__element .donations-counter__list{display:flex;flex-direction:row}.donations-counter__list{min-height:200px;display:flex;justify-content:center;align-items:center;position:relative;margin-top:40px}.progress-bar{box-shadow:inset 0 4px 6px hsla(0,0%,39%,.6);background:red;height:100%;color:#fff;text-align:center;background-color:#337ab7;background:linear-gradient(180deg,#3d1e5c,#221131 84.38%);box-shadow:0 4px 20px rgba(61,30,92,.4);border-radius:4px}.progress-bar-info{background-color:#5bc0de}@media screen and (max-width:768px){.donations-counter__list{display:flex;justify-content:center;flex-direction:column}.donations-counter__element{margin-top:100px}}",""])},function(t,e,n){var o=n(13);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,".project-list{display:flex;justify-content:center;flex-direction:column;align-items:center;margin-top:25px}.project-list__title{font-size:32px;line-height:41px;text-align:center}.project-list__el__wrapper{width:100%;display:flex;justify-content:center;background:url(https://i.ibb.co/L8KRk2Q/Group-62.png) 50%}.project-list__element{display:flex;align-items:center}.project-list__title{font-family:PT Sans;font-style:normal;font-weight:700;font-size:24px;line-height:31px;opacity:.7;color:#000}.project-list__progress-text{font-family:PT Sans;font-style:normal;font-weight:400;font-size:16px;line-height:21px;opacity:.6;color:#000}.progres-list__progress{display:flex;align-items:center}.project-list__percent{margin-left:15px;font-family:PT Sans;font-style:normal;font-weight:400;font-size:24px;line-height:31px;opacity:.7}.horizontal{width:200px;height:20px;background:rgba(0,0,0,.1)}.vertical{box-shadow:inset 0 4px 6px #ccc}.progress-bar{box-shadow:inset 0 4px 6px hsla(0,0%,39%,.6)}@media screen and (max-width:968px){.project-list__element{flex-direction:column}.project-list__message{order:2}.project-list__image{order:1}}@media screen and (max-width:768px){.project-list{padding:25px}.project-list__element{flex-direction:column}.project-list__message{order:2}.project-list__image{order:1}.project-list__image img{max-width:300px}}",""])},function(t,e,n){var o=n(15);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,".about{display:flex;justify-content:center;align-items:center;padding:25px;position:relative}.about__message{display:flex;flex-direction:column;border-left:5px solid #221131;padding-left:15px}.about__title{font-weight:700;font-size:36px;line-height:47px;color:#000}.about__subtitle,.about__title{font-family:PT Sans;font-style:normal}.about__subtitle{font-weight:400;font-size:14px}.about__background{width:100%;height:250px;position:absolute;background:rgba(57,22,85,.03);z-index:-1}@media screen and (max-width:768px){.about{flex-direction:column;padding:5px}.about__image{order:1}.about__message{order:2}.about__background{height:100%}}",""])},function(t,e,n){var o=n(17);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,".supporters{display:flex;justify-content:center;flex-direction:column;align-items:center}.supporters__title{font-family:PT Sans;font-style:normal;font-weight:700;font-size:32px;line-height:41px;text-align:center;color:#000;opacity:.7}.supporters__list{margin:15px}.supporters__element{margin-top:25px;font-family:PT Sans;font-style:normal;font-weight:400;font-size:18px;opacity:.7}",""])},function(t,e,n){var o=n(19);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,".contacts{margin-top:50px;display:flex;justify-content:space-evenly;background:url(https://i.ibb.co/L8KRk2Q/Group-62.png) 50%}.contacts__element{min-width:300px}.contacts__title{font-weight:700;font-size:24px;color:rgba(0,0,0,.7)}.contacts__text,.contacts__title{font-family:PT Sans;font-style:normal}.contacts__text{display:flex;flex-direction:column;font-weight:400;font-size:14px}.contacts__text *{margin-top:10px}.contacts__socials{color:rgba(0,0,0,.7);display:flex}.contacts__socials a{margin-right:25px;color:rgba(0,0,0,.7);font-size:22px;text-decoration:none}@media screen and (max-width:768px){.contacts{flex-direction:column;padding:0}.contacts__element{margin-top:25px;display:flex;flex-direction:column;justify-content:center;align-items:center}}",""])},function(t,e,n){var o=n(21);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,".account-payment{display:flex;justify-content:center;flex-direction:column;align-items:center}.account-payment__details{min-width:400px;margin-top:100px;display:flex;flex-direction:column}",""])},function(t,e,n){var o=n(23);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,".footer{margin-top:100px;padding:25px;width:100%;min-height:150px;display:flex;justify-content:space-around;border-top:1px solid #0000001c;font-family:Arial}.footer__links{display:flex;justify-content:center;flex-wrap:wrap}.footer__link a{text-decoration:none;color:#000}.footer__button{height:35px;padding:15px;background:linear-gradient(180deg,#3d1e5c,#221131 84.38%);box-shadow:0 4px 20px rgba(61,30,92,.4);border-radius:4px;font-family:PT Sans;font-style:normal;font-weight:700;font-size:14px;line-height:18px;text-align:center;display:flex;justify-content:center;align-items:center;color:#fff}.footer__button a{color:#fff}.footer__logo{color:#3d1e5c;font-family:Myriad Pro;font-weight:700;font-style:italic;font-size:22px}@media screen and (max-width:768px){.footer{flex-direction:column}.footer__logo{display:flex;justify-content:center}}",""])},function(t,e,n){var o=n(25);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"body{margin:0;padding:0;font-family:PT Sans;font-style:normal}.cd-header{background:#7741a7}.cd-faq__trigger{color:#7741a7}.nav-item,.nav-link{color:rgba(0,0,0,.8)!important}.background--white{background:#fff}",""])},function(t,e,n){var o=n(27);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,".header-toggle__button.header-toggle__button{color:#3d1e5c;border:0}.header .header-toggle_title{color:#3d1e5c;font-family:Myriad Pro;font-weight:700;font-style:italic}.header .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(61,30,92)' stroke-width='3' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\")}.header-toggle .nav-item.nav-link{font-family:Arial;font-size:24px;line-height:28px;color:#3d1e5c}",""])}]);