(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{Dl3P:function(e,t,n){var r=n("mp5j");e.exports=(r.default||r).template({1:function(e,t,n,r,a){var o,l,c=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,i=e.escapeExpression,u=e.lambda,p=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<h1><span class="hidden">Город:</span>'+i("function"==typeof(l=null!=(l=p(n,"name")||(null!=t?p(t,"name"):t))?l:s)?l.call(c,{name:"name",hash:{},data:a,loc:{start:{line:2,column:38},end:{line:2,column:46}}}):l)+'</h1>\n<h2 class="js-td">'+i("function"==typeof(l=null!=(l=p(n,"dt")||(null!=t?p(t,"dt"):t))?l:s)?l.call(c,{name:"dt",hash:{},data:a,loc:{start:{line:3,column:18},end:{line:3,column:24}}}):l)+'</h2>\n<div class="current-weather">\n    <img class="current-weather__icon" src="https://openweathermap.org/img/w/'+i(u(null!=(o=null!=(o=null!=t?p(t,"weather"):t)?p(o,"0"):o)?p(o,"icon"):o,t))+'.png"\n        alt="'+i(u(null!=(o=null!=t?p(t,"weather"):t)?p(o,"main"):o,t))+'" width="100" height="100">\n    <p><span class="hidden">Температура:</span> <span class="current-weather__temp js-temp">'+i(u(null!=(o=null!=t?p(t,"main"):t)?p(o,"temp"):o,t))+'</span></p>\n</div>\n<p class="current-weather__max-temp">Макс. <span class="js-temp">'+i(u(null!=(o=null!=t?p(t,"main"):t)?p(o,"temp_max"):o,t))+'</span>, мин. <span\n        class="js-temp">'+i(u(null!=(o=null!=t?p(t,"main"):t)?p(o,"temp_min"):o,t))+'</span></p>\n<p class="current-weather__desc">'+i(u(null!=(o=null!=(o=null!=t?p(t,"weather"):t)?p(o,"0"):o)?p(o,"description"):o,t))+'</p>\n<p class="weather-add"><span>Температура RealFeel:</span><span class="js-temp rightside">'+i(u(null!=(o=null!=t?p(t,"main"):t)?p(o,"feels_like"):o,t))+'</span></p>\n<p class="weather-add"><span>Влажность:</span> <span class="rightside">'+i(u(null!=(o=null!=t?p(t,"main"):t)?p(o,"humidity"):o,t))+'%</span></p>\n<p class="weather-add"><span>Давление:</span><span class="rightside">'+i(u(null!=(o=null!=t?p(t,"main"):t)?p(o,"pressure"):o,t))+' мм.рт.ст</span></p>\n<p class="weather-add"><span>Средняя cкорость ветра:</span><span class="rightside"><span\n            class="js-wind">'+i(u(null!=(o=null!=t?p(t,"wind"):t)?p(o,"deg"):o,t))+"</span> "+i(u(null!=(o=null!=t?p(t,"wind"):t)?p(o,"speed"):o,t))+'м/сек</span>\n</p>\n<p class="weather-add"><span>Средняя облачность:</span><span class="rightside">'+i(u(null!=(o=null!=t?p(t,"clouds"):t)?p(o,"all"):o,t))+'%</span></p>\n<p class="weather-add"><span>Восход солнца:</span><span class="js-time rightside">'+i(u(null!=(o=null!=t?p(t,"sys"):t)?p(o,"sunrise"):o,t))+'</span></p>\n<p class="weather-add"><span>Заход солнца:</span><span class="js-time rightside">'+i(u(null!=(o=null!=t?p(t,"sys"):t)?p(o,"sunset"):o,t))+"</span></p>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,a){var o;return null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:21,column:9}}}))?o:""},useData:!0})},EbCq:function(e,t,n){var r=n("mp5j");e.exports=(r.default||r).template({1:function(e,t,n,r,a){var o,l=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,s=e.escapeExpression,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="item">\n    <a href="" class="item-btn" data-index="'+s("function"==typeof(o=null!=(o=i(n,"index")||a&&i(a,"index"))?o:c)?o.call(l,{name:"index",hash:{},data:a,loc:{start:{line:3,column:44},end:{line:3,column:54}}}):o)+'">'+s("function"==typeof(o=null!=(o=i(n,"city")||(null!=t?i(t,"city"):t))?o:c)?o.call(l,{name:"city",hash:{},data:a,loc:{start:{line:3,column:56},end:{line:3,column:64}}}):o)+", "+s("function"==typeof(o=null!=(o=i(n,"country")||(null!=t?i(t,"country"):t))?o:c)?o.call(l,{name:"country",hash:{},data:a,loc:{start:{line:3,column:66},end:{line:3,column:77}}}):o)+'</a>\n    <button class="item-btn__close" type="button" data-index="'+s("function"==typeof(o=null!=(o=i(n,"index")||a&&i(a,"index"))?o:c)?o.call(l,{name:"index",hash:{},data:a,loc:{start:{line:4,column:62},end:{line:4,column:72}}}):o)+'">\n    </button>\n</li>\n'},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,a){var o;return null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:7,column:9}}}))?o:""},useData:!0})},L1EO:function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);n("L1EO"),n("RtS0"),n("D/wG"),n("fp7Y"),n("LW6M"),n("+XsM"),n("wCa+"),n("JBxO"),n("FdtR"),n("SgDD"),n("3dw1"),n("wcNg");var r={body:document.querySelector("body"),form:document.querySelector("#weatherForm"),formBox:document.querySelector(".js-form-box"),input:document.querySelector("#weatherInput"),weatherBox:document.querySelector("#weather-box"),cityList:document.querySelector("#cityList"),menu:document.querySelector("#menu"),localBtn:document.querySelector(".js-local")};function a(e,t,n,r,a,o,l){try{var c=e[o](l),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}var o={_city:"",get city(){return this._city},set city(e){this._city=e},fetchWeather:function(){var e,t=this;return(e=regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.openweathermap.org/data/2.5/weather?q="+t._city+"&units=metric&lang=ru&appid=090fc987cd5621140b25360d9b4c89d1",e.next=3,fetch(n);case 3:return r=e.sent,e.abrupt("return",r.json());case 5:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var l=e.apply(t,n);function c(e){a(l,r,o,c,s,"next",e)}function s(e){a(l,r,o,c,s,"throw",e)}c(void 0)}))})()}};function l(e,t,n,r,a,o,l){try{var c=e[o](l),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}var c={_lat:0,_lon:0,set lat(e){this._lat=e},set lon(e){this._lon=e},fetchWeatherByLoc:function(){var e,t=this;return(e=regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.openweathermap.org/data/2.5/weather?lat="+t._lat+"&lon="+t._lon+"&units=metric&lang=ru&appid=090fc987cd5621140b25360d9b4c89d1",e.next=3,fetch(n);case 3:return r=e.sent,e.abrupt("return",r.json());case 5:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){l(o,r,a,c,s,"next",e)}function s(e){l(o,r,a,c,s,"throw",e)}c(void 0)}))})()}},s=n("Dl3P"),i=n.n(s),u=n("EbCq"),p=n.n(u),m=(n("zrP5"),n("JauC"),n("bzha"),n("QJ3N"));function d(e,t,n,r,a,o,l){try{var c=e[o](l),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function f(e){r.weatherBox.innerHTML="";var t=i()(e);r.weatherBox.insertAdjacentHTML("beforeend",t);var n=document.querySelector(".js-td"),a=new Date(1e3*n.textContent).toLocaleString("Ru-ru",{weekday:"long",month:"long",day:"numeric"});n.textContent=""+a;var o=document.querySelectorAll(".js-temp");o.forEach((function(e,t){return e.textContent=function(e){var t=[];return e.forEach((function(e){var n=e.textContent;t.push(Math.round(Number.parseFloat(n)))})),t}(o)[t]+"°"}));var l=document.querySelectorAll(".js-time");l.forEach((function(e,t){return e.textContent=function(e){var t=[];return e.forEach((function(e){var n=e.textContent,r=new Date(1e3*Number.parseInt(n)).toLocaleTimeString("Ru-ru",{hour:"2-digit",minute:"2-digit"});t.push(r)})),t}(l)[t]}));var c=document.querySelector(".js-wind");c.textContent=function(e){var t=e.textContent,n=Number.parseInt(t);switch(!0){case 0===n||360:return"С";case n>0&&n<45:return"ССВ";case 45===n:return"СВ";case n>45&&n<90:return"ВСВ";case 90===n:return"В";case n>90&&n<135:return"ВЮВ";case 135===n:return"ЮВ";case n>135&&n<180:return"ЮЮВ";case 180===n:return"Ю";case n>180&&n<225:return"ЮЮЗ";case 225===n:return"ЮЗ";case n>225&&n<270:return"ЗЮЗ";case 270===n:return"З";case n>270&&n<315:return"ЗСЗ";case 315===n:return"СЗ";case n>315&&(0===n||360):return"ССЗ";default:return n}}(c)}function h(e){var t,n=localStorage.getItem("countFavorites"),r={id:e.id,city:e.name,coord:e.coord,country:e.sys.country};if(n){t=Number.parseInt(n),t++;for(var a=1;a<t;a++){var o=JSON.parse(localStorage.getItem("favorite"+a)).city;if(e.name===o)return Object(m.notice)({text:"Город уже добавлен",animateSpeed:"fast",delay:3e3})}localStorage.setItem("countFavorites",""+t);var l="favorite"+t;localStorage.setItem(l,JSON.stringify(r)),localStorage.setItem("currentCity",JSON.stringify(r)),v()}else{t=1,localStorage.setItem("countFavorites",""+t);var c="favorite"+t;localStorage.setItem(c,JSON.stringify(r)),localStorage.setItem("currentCity",JSON.stringify(r)),v()}}function v(){r.cityList.innerHTML="";var e=localStorage.getItem("countFavorites");if(e){for(var t=[],n=Number.parseInt(e),a=1;a<=n;a++){var o="favorite"+a,l=JSON.parse(localStorage.getItem(o));t.push(l)}var c=p()(Object.assign({},t));r.cityList.insertAdjacentHTML("beforeend",c)}}function g(){var e=localStorage.getItem("currentCity"),t=JSON.parse(e);if(null!==t)o.city=t.city,o.fetchWeather().then((function(e){return f({data:e})}),(function(e){return console.log(e)}));else{var n=localStorage.getItem("favorite1");localStorage.setItem("currentCity",n)}}function y(){r.formBox.classList.toggle("is-open"),r.weatherBox.classList.toggle("is-open")}function w(){r.weatherBox.innerHTML="";var e=document.createElement("h2");e.classList.add("weather-box__error"),e.style.fontSize="24px",e.textContent="Выберите город для отслеживания погоды",r.weatherBox.insertAdjacentElement("beforeend",e)}function x(){return Object(m.notice)({text:"Нет доступа к местоположению",animateSpeed:"fast",delay:3e3})}r.form.addEventListener("submit",(function(e){e.preventDefault(),r.weatherBox.innerHTML="",o.city=e.currentTarget.query.value.trim(),o.fetchWeather().then((function(e){200===e.status||200===e.cod?(h(e),r.form.reset()):(Object(m.alert)({text:"Не найден город, попробуйте еще",animateSpeed:"fast",delay:3e3}),r.form.reset())}))})),r.menu.addEventListener("click",(function(){y(),v(),!r.formBox.classList.contains("is-open")&&r.cityList.innerHTML&&(console.log("load"),g())})),r.cityList.addEventListener("click",(function(e){if(e.preventDefault(),"A"===e.target.nodeName){var t=Number.parseInt(e.target.dataset.index)+1,n=localStorage.getItem("favorite"+t);localStorage.setItem("currentCity",n),g(),y()}"BUTTON"===e.target.nodeName&&function(e){var t=Number.parseInt(e),n=localStorage.getItem("countFavorites");if(t>=0&&t<=n){localStorage.removeItem("favorite"+(t+1));for(var r=t+2;r<=n;r++){var a="favorite"+r,o=JSON.parse(localStorage.getItem(a));localStorage.removeItem(a),a="favorite"+(r-1),localStorage.setItem(a,JSON.stringify(o))}var l=localStorage.getItem("favorite1");localStorage.setItem("currentCity",l),localStorage.setItem("countFavorites",n-1),v(),"0"===localStorage.getItem("countFavorites")&&(localStorage.removeItem("countFavorites"),localStorage.removeItem("currentCity"),w())}}(e.target.dataset.index)})),localStorage.getItem("currentCity")?g():w(),r.localBtn.addEventListener("click",(function(e){var t;(t={timeout:5e3},new Promise((function(e,n){navigator.geolocation.getCurrentPosition(e,n,t)}))).then((function(e){var t=e.coords.latitude,n=e.coords.longitude;c.lat=t,c.lon=n,c.fetchWeatherByLoc().then((function(e){200===e.status||200===e.cod?h(e):x()}))})).catch((function(e){(function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.ipgeolocation.io/ipgeo?apiKey=dff7afe788c44b9e90e7b4fd64d0bb1b");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function l(e){d(o,r,a,l,c,"next",e)}function c(e){d(o,r,a,l,c,"throw",e)}l(void 0)}))});return function(){return t.apply(this,arguments)}})()().then((function(e){c.lat=Number.parseFloat(e.latitude),c.lon=Number.parseFloat(e.longitude),c.fetchWeatherByLoc().then((function(e){200===e.status||200===e.cod?h(e):x()}))}))}))}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.7f57d23a1d87f4c6b4f9.js.map