(()=>{var t={10:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var i=n(537),r=n.n(i),s=n(645),a=n.n(s)()(r());a.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const o=a},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,r,s){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(i)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(a[l]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);i&&a[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),s="/*# ".concat(r," */");return[e].concat([s]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",r="minute",s="hour",a="day",o="week",l="month",c="quarter",d="year",u="date",p="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},y={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+v(i,2,"0")+":"+v(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,l),s=n-r<0,a=e.clone().add(i+(s?-1:1),l);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:d,w:o,d:a,D:u,h:s,m:r,s:i,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",_={};_[g]=m;var b="$isDayjsObject",$=function(t){return t instanceof T||!(!t||!t[b])},w=function t(e,n,i){var r;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();_[s]&&(r=s),n&&(_[s]=n,r=s);var a=e.split("-");if(!r&&a.length>1)return t(a[0])}else{var o=e.name;_[o]=e,r=o}return!i&&r&&(g=r),r||!i&&g},M=function(t,e){if($(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new T(n)},A=y;A.l=w,A.i=$,A.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var T=function(){function m(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[b]=!0}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(A.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(f);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return A},v.isValid=function(){return!(this.$d.toString()===p)},v.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return M(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<M(t)},v.$g=function(t,e,n){return A.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,c=!!A.u(e)||e,p=A.p(t),f=function(t,e){var i=A.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?i:i.endOf(a)},h=function(t,e){return A.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,y=this.$D,g="set"+(this.$u?"UTC":"");switch(p){case d:return c?f(1,0):f(31,11);case l:return c?f(1,v):f(0,v+1);case o:var _=this.$locale().weekStart||0,b=(m<_?m+7:m)-_;return f(c?y-b:y+(6-b),v);case a:case u:return h(g+"Hours",0);case s:return h(g+"Minutes",1);case r:return h(g+"Seconds",2);case i:return h(g+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var o,c=A.p(t),p="set"+(this.$u?"UTC":""),f=(o={},o[a]=p+"Date",o[u]=p+"Date",o[l]=p+"Month",o[d]=p+"FullYear",o[s]=p+"Hours",o[r]=p+"Minutes",o[i]=p+"Seconds",o[n]=p+"Milliseconds",o)[c],h=c===a?this.$D+(e-this.$W):e;if(c===l||c===d){var m=this.clone().set(u,1);m.$d[f](h),m.init(),this.$d=m.set(u,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[A.p(t)]()},v.add=function(n,c){var u,p=this;n=Number(n);var f=A.p(c),h=function(t){var e=M(p);return A.w(e.date(e.date()+Math.round(t*n)),p)};if(f===l)return this.set(l,this.$M+n);if(f===d)return this.set(d,this.$y+n);if(f===a)return h(1);if(f===o)return h(7);var m=(u={},u[r]=t,u[s]=e,u[i]=1e3,u)[f]||1,v=this.$d.getTime()+n*m;return A.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=A.z(this),s=this.$H,a=this.$m,o=this.$M,l=n.weekdays,c=n.months,d=n.meridiem,u=function(t,n,r,s){return t&&(t[n]||t(e,i))||r[n].slice(0,s)},f=function(t){return A.s(s%12||12,t,"0")},m=d||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i};return i.replace(h,(function(t,i){return i||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return A.s(e.$y,4,"0");case"M":return o+1;case"MM":return A.s(o+1,2,"0");case"MMM":return u(n.monthsShort,o,c,3);case"MMMM":return u(c,o);case"D":return e.$D;case"DD":return A.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return u(n.weekdaysMin,e.$W,l,2);case"ddd":return u(n.weekdaysShort,e.$W,l,3);case"dddd":return l[e.$W];case"H":return String(s);case"HH":return A.s(s,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return m(s,a,!0);case"A":return m(s,a,!1);case"m":return String(a);case"mm":return A.s(a,2,"0");case"s":return String(e.$s);case"ss":return A.s(e.$s,2,"0");case"SSS":return A.s(e.$ms,3,"0");case"Z":return r}return null}(t)||r.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,u,p){var f,h=this,m=A.p(u),v=M(n),y=(v.utcOffset()-this.utcOffset())*t,g=this-v,_=function(){return A.m(h,v)};switch(m){case d:f=_()/12;break;case l:f=_();break;case c:f=_()/3;break;case o:f=(g-y)/6048e5;break;case a:f=(g-y)/864e5;break;case s:f=g/e;break;case r:f=g/t;break;case i:f=g/1e3;break;default:f=g}return p?f:A.a(f)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return _[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=w(t,e,!0);return i&&(n.$L=i),n},v.clone=function(){return A.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),S=T.prototype;return M.prototype=S,[["$ms",n],["$s",i],["$m",r],["$H",s],["$W",a],["$M",l],["$y",d],["$D",u]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,T,M),t.$i=!0),M},M.locale=w,M.isDayjs=$,M.unix=function(t){return M(1e3*t)},M.en=_[g],M.Ls=_,M.p={},M}()},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var s={},a=[],o=0;o<t.length;o++){var l=t[o],c=i.base?l[0]+i.base:l[0],d=s[c]||0,u="".concat(c," ").concat(d);s[c]=d+1;var p=n(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=r(f,i);i.byIndex=o,e.splice(o,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var s=i(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<s.length;a++){var o=n(s[a]);e[o].references--}for(var l=i(t,r),c=0;c<s.length;c++){var d=n(s[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}s=l}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,r&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var s=e[i]={id:i,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";var t=n(379),e=n.n(t),i=n(795),r=n.n(i),s=n(569),a=n.n(s),o=n(565),l=n.n(o),c=n(216),d=n.n(c),u=n(589),p=n.n(u),f=n(10),h={};h.styleTagTransform=p(),h.setAttributes=l(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m="shake";class v{#t=null;constructor(){if(new.target===v)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#t||(this.#t=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#t}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#t=null}shake(t){this.element.classList.add(m),setTimeout((()=>{this.element.classList.remove(m),t?.()}),600)}}function y(t,e,n="beforeend"){if(!(t instanceof v))throw new Error("Can render only components");if(null===e)throw new Error("Container element doesn't exist");e.insertAdjacentElement(n,t.element)}class g extends v{get template(){return' <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n<div class="trip-sort__item  trip-sort__item--day">\n  <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n  <label class="trip-sort__btn" for="sort-day">Day</label>\n</div>\n\n<div class="trip-sort__item  trip-sort__item--event">\n  <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n  <label class="trip-sort__btn" for="sort-event">Event</label>\n</div>\n\n<div class="trip-sort__item  trip-sort__item--time">\n  <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n  <label class="trip-sort__btn" for="sort-time">Time</label>\n</div>\n\n<div class="trip-sort__item  trip-sort__item--price">\n  <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n  <label class="trip-sort__btn" for="sort-price">Price</label>\n</div>\n\n<div class="trip-sort__item  trip-sort__item--offer">\n  <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n  <label class="trip-sort__btn" for="sort-offer">Offers</label>\n</div>\n</form>>'}}class _ extends v{get template(){return'<ul class="trip-events__list">'}}const b="YYYY-MM-DD",$="HH:mm";var w=n(484),M=n.n(w);const A=(t,e)=>(t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t),T=(t,e)=>t?M()(t).format(e):"";class S extends v{#e=null;#n=null;#i=null;constructor({point:t,offers:e,destination:n}){super(),this.#e=t,this.#n=e,this.#i=n}get template(){return(({point:t,offers:e,destination:n})=>{const{type:i,basePrice:r,dateFrom:s,dateTo:a,isFavorite:o}=t,{name:l}=n,c=T(s,"MMM DD"),d=T(s,b),u=T(a,b),p=T(s,$),f=T(a,$);return`<li class="trip-events__item">\n<div class="event">\n  <time class="event__date" datetime="${d}">${c}</time>\n  <div class="event__type">\n    <img class="event__type-icon" width="42" height="42" src="img/icons/${i}.png" alt="Event type icon">\n  </div>\n  <h3 class="event__title">${i} ${l}</h3>\n  <div class="event__schedule">\n    <p class="event__time">\n      <time class="event__start-time" datetime="${d}T${p}">${p}</time>\n      —\n      <time class="event__end-time" datetime="${u}T${f}">${f}</time>\n    </p>\n    <p class="event__duration">30M</p>\n  </div>\n  <p class="event__price">\n    €&nbsp;<span class="event__price-value">\n    ${r}</span>\n  </p>\n  <h4 class="visually-hidden">Offers:</h4>\n  <ul class="event__selected-offers">\n    ${e.map((e=>t.offers.includes(e.id)&&e.title?`<li class="event__offer">\n        <span class="event__offer-title">${e.title}</span>\n        +€&nbsp;\n        <span class="event__offer-price">${e.price}</span>\n      </li>`:"")).join("")}\n  </ul>\n  <button class="event__favorite-btn ${(t=>t?"event__favorite-btn--active":"")(o)}" type="button">\n    <span class="visually-hidden">Add to favorite</span>\n    <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n      <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>\n    </svg>\n  </button>\n  <button class="event__rollup-btn" type="button">\n    <span class="visually-hidden">Open event</span>\n  </button>\n</div>\n</li>`})({point:this.#e,offers:this.#n,destination:this.#i})}}const k=[{id:1,description:"Chamonix, is a beautiful city, a true asian pearl, with crowded streets.",name:"Chamonix",pictures:[{src:`https://loremflickr.com/248/152?random=${A(1,10)}`,description:"Chamonix parliament building"},{src:`https://loremflickr.com/248/152?random=${A(1,10)}`,description:"Chamonix parliament building"}]},{id:2,description:"Amsterdam is the capital and most populous city of the Netherlands, with The Hague being the seat of government.",name:"Amsterdam",pictures:[{src:`https://loremflickr.com/248/152?random=${A(1,10)}`,description:"Amsterdam parliament building"},{src:`https://loremflickr.com/248/152?random=${A(1,10)}`,description:"Amsterdam parliament building"},{src:`https://loremflickr.com/248/152?random=${A(1,10)}`,description:"Amsterdam parliament building"}]},{id:3,description:"Geneva is the second-most populous city in Switzerland (after Zürich) and the most populous city of Romandy, the French-speaking part of Switzerland. ",name:"Geneva",pictures:[{src:`https://loremflickr.com/248/152?random=${A(1,10)}`,description:"Geneva parliament building"},{src:`https://loremflickr.com/248/152?random=${A(1,10)}`,description:"Geneva parliament building"},{src:`https://loremflickr.com/248/152?random=${A(1,10)}`,description:"Geneva parliament building"},{src:`https://loremflickr.com/248/152?random=${A(1,10)}`,description:"Geneva parliament building"}]},{id:4,description:"London is the capital and largest city of England and the United Kingdom, with a population of just under 9 million.",name:"London",pictures:[{src:`https://loremflickr.com/248/152?random=${A(1,10)}`,description:"London parliament building"},{src:`https://loremflickr.com/248/152?random=${A(1,10)}`,description:"London parliament building"}]},{id:5,description:"Boston officially the City of Boston, is the state capital and most populous city of the Commonwealth of Massachusetts, as well as the cultural and financial center of the New England region of the United States.",name:"Boston",pictures:[{src:`https://loremflickr.com/248/152?random=${A(1,10)}`,description:"Boston parliament building"},{src:`https://loremflickr.com/248/152?random=${A(1,10)}`,description:"Boston parliament building"}]},{id:6,description:"Thailand, officially the Kingdom of Thailand and historically known as Siam, is a country in Southeast Asia on the Indochinese Peninsula. With a population of almost 70 million, it spans 513,120 square kilometres (198,120 sq mi)",name:"Thailand",pictures:[{src:`https://loremflickr.com/248/152?random=${A(1,10)}`,description:"Thailand parliament building"},{src:`https://loremflickr.com/248/152?random=${A(1,10)}`,description:"Thailand parliament building"}]},{id:7,description:"Berlin is the capital and largest city of Germany by both area and population.",name:"Berlin",pictures:[{src:`https://loremflickr.com/248/152?random=${A(1,10)}`,description:"Berlin parliament building"},{src:`https://loremflickr.com/248/152?random=${A(1,10)}`,description:"Berlin parliament building"}]},{id:8,description:"Berlin is the capital and largest city of Germany by both area and population.",name:"Berlin",pictures:[{src:`https://loremflickr.com/248/152?random=${A(1,10)}`,description:"Berlin parliament building"},{src:`https://loremflickr.com/248/152?random=${A(1,10)}`,description:"Berlin parliament building"}]},{id:9,description:"Vienna is the capital, largest city, and one of the nine States of Austria. ",name:"Vienna",pictures:[]}],C=[{type:"taxi",offers:[{id:1,title:"Upgrade to a business class",price:100},{id:5,title:"Add luggage",price:50}]},{type:"bus",offers:[{id:1,title:"Upgrade to a business class",price:100},{id:5,title:"Add luggage",price:50},{id:3,title:"Choose seats",price:60}]},{type:"train",offers:[{id:1,title:"Upgrade to a business class",price:100},{id:5,title:"Add luggage",price:50},{id:3,title:"Choose seats",price:60},{id:4,title:"Add meal",price:90},{id:2,title:"Switch to comfort",price:140}]},{type:"ship",offers:[{id:1,title:"Upgrade to a business class",price:100},{id:5,title:"Add luggage",price:50},{id:3,title:"Choose seats",price:60},{id:4,title:"Add meal",price:90},{id:2,title:"Switch to comfort",price:140}]},{type:"drive",offers:[{id:5,title:"Add luggage",price:50},{id:3,title:"Choose seats",price:60},{id:2,title:"Switch to comfort",price:140}]},{type:"flight",offers:[{id:5,title:"Add luggage",price:50},{id:3,title:"Choose seats",price:60},{id:2,title:"Switch to comfort",price:140},{id:4,title:"Add meal",price:90}]},{type:"check-in",offers:[{id:2,title:"Switch to comfort",price:140}]},{type:"sightseeing",offers:[{id:2,title:"Switch to comfort",price:140},{id:1,title:"Upgrade to a business class",price:100},{id:5,title:"Travel by train",price:70}]},{type:"restaurant",offers:[{id:2,title:"Switch to comfort",price:140}]}],x=[{id:1,basePrice:100,dateFrom:"2019-09-10T11:05:56.845Z",dateTo:"2019-09-11T12:02:13.375Z",destination:1,isFavorite:!0,offers:[1,5],type:"taxi"},{id:2,basePrice:200,dateFrom:"2019-07-10T02:15:56.845Z",dateTo:"2019-07-11T14:12:13.375Z",destination:2,isFavorite:!1,offers:[1,5,3],type:"bus"},{id:3,basePrice:300,dateFrom:"2019-06-10T23:05:56.845Z",dateTo:"2019-06-11T16:01:13.375Z",destination:3,isFavorite:!0,offers:[1,3,5],type:"train"},{id:4,basePrice:400,dateFrom:"2019-03-10T16:25:56.845Z",dateTo:"2019-03-11T22:00:13.375Z",destination:4,isFavorite:!1,offers:[1,2,3],type:"ship"},{id:5,basePrice:500,dateFrom:"2019-02-10T11:45:56.845Z",dateTo:"2019-02-11T15:12:13.375Z",destination:5,isFavorite:!1,offers:[3,5],type:"drive"},{id:6,basePrice:600,dateFrom:"2019-01-10T21:10:56.845Z",dateTo:"2019-01-11T11:32:13.375Z",destination:1,isFavorite:!1,offers:[3,4,5],type:"flight"},{id:7,basePrice:700,dateFrom:"2019-12-10T10:55:56.845Z",dateTo:"2019-12-11T19:22:13.375Z",destination:2,isFavorite:!0,offers:[2],type:"check-in"},{id:8,basePrice:800,dateFrom:"2019-11-10T16:55:56.845Z",dateTo:"2019-11-11T11:22:13.375Z",destination:3,isFavorite:!1,offers:[1,5],type:"sightseeing"},{id:9,basePrice:900,dateFrom:"2019-03-10T12:55:56.845Z",dateTo:"2019-03-11T09:22:13.375Z",destination:4,isFavorite:!0,offers:[],type:"restaurant"}],D=()=>{return(t=x)[Math.floor(Math.random()*t.length)];var t},E=document.querySelector(".page-header").querySelector(".trip-main"),B=document.querySelector(".trip-controls__filters"),O=document.querySelector(".page-main"),F=document.querySelector(".trip-controls"),Z=O.querySelector(".trip-events"),P=new class{#r=null;#n=null;#s=null;constructor(){this.#r=Array.from({length:3},D),this.#n=C,this.#s=k}getPoints(){return this.#r}getOffers(){return this.#n}getDestinations(){return this.#s}},L=new class{#a=null;#r=null;constructor(t){this.#a=t,this.#r=this.#a.getPoints()}get(){return this.#r}}(P),I=new class{#a=null;#n=null;constructor(t){this.#a=t,this.#n=this.#a.getOffers()}get(){return this.#n}getOfferByType(t){return this.#n.find((e=>e.type===t)).offers}}(P),H=new class{#a=null;#s=null;constructor(t){this.#a=t,this.#s=this.#a.getDestinations()}get(){return this.#s}getDestinationById(t){return this.#s.find((e=>e.id===t))}}(P),Y=new class{#o=new _;#l=null;#r=null;#n=null;#s=null;#c=null;constructor({pointsContainer:t,pointsModel:e,offersModel:n,destinationsModel:i}){this.#l=t,this.#r=e,this.#n=n,this.#s=i}init(){this.#c=[...this.#r.get()],y(new g,this.#l),y(this.#o,this.#l);for(let t=0;t<this.#c.length;t++)this.#d(this.#c[t])}#d(t){y(new S({point:t,offers:this.#n.getOfferByType(t.type),destination:this.#s.getDestinationById(t.destination)}),this.#o.element)}}({pointsContainer:Z,pointsModel:L,offersModel:I,destinationsModel:H});y(new class extends v{get template(){return'<section class="trip-main__trip-info trip-info"></section>'}},E,"afterbegin"),y(new class extends v{get template(){return'<div class="trip-info__main">\n<h1 class="trip-info__title">Amsterdam — Chamonix — Geneva</h1>\n\n<p class="trip-info__dates">18&nbsp;—&nbsp;20 Mar</p>\n</div>'}},E.querySelector(".trip-info")),y(new class extends v{get template(){return'<p class="trip-info__cost">\nTotal: €&nbsp;<span class="trip-info__cost-value">1230</span>\n</p>'}},E.querySelector(".trip-info")),y(new class extends v{get template(){return'<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>'}},F,"afterend"),y(new class extends v{get template(){return'<form class="trip-filters" action="#" method="get">\n  <div class="trip-filters__filter">\n    <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>\n    <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n  </div>\n\n  <div class="trip-filters__filter">\n    <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n    <label class="trip-filters__filter-label" for="filter-future">Future</label>\n  </div>\n\n  <div class="trip-filters__filter">\n    <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n    <label class="trip-filters__filter-label" for="filter-present">Present</label>\n  </div>\n\n  <div class="trip-filters__filter">\n    <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">\n    <label class="trip-filters__filter-label" for="filter-past">Past</label>\n  </div>\n\n  <button class="visually-hidden" type="submit">Accept filter</button>\n</form>'}},B),Y.init()})()})();
//# sourceMappingURL=bundle.1fadeaf3dd8a6977c1fc.js.map