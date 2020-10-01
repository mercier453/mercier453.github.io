(function(e){function t(t){for(var o,a,l=t[0],s=t[1],u=t[2],c=0,f=[];c<l.length;c++)a=l[c],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={app:0},r={app:0},i=[];function l(e){return s.p+"js/"+({about:"about",details:"details"}[e]||e)+"."+{about:"fe12b756",details:"a4766fef"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1,details:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({about:"about",details:"details"}[e]||e)+"."+{about:"37b7882f",details:"7c45b487"}[e]+".css",r=s.p+o,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var u=i[l],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===o||c===r))return t()}var f=document.getElementsByTagName("style");for(l=0;l<f.length;l++){u=f[l],c=u.getAttribute("data-href");if(c===o||c===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=r;var g=document.getElementsByTagName("head")[0];g.appendChild(d)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=i);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=l(e);var f=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",f.name="ChunkLoadError",f.type=o,f.request=a,n[1](f)}r[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4360:function(e,t,n){"use strict";var o=n("2b0e"),a=n("2f62"),r=(n("4de4"),n("caad"),n("c975"),n("d81d"),n("a434"),n("2532"),n("d6f0")),i={state:{data:r,filterRole:null,filterLevel:null,filters:{language:[],tool:[]},filterCount:0},actions:{changeFilters:function(e,t){var n=t.target.getAttribute("data-type"),o=t.target.getAttribute("data-value")||t.target.value,a=t.target.getAttribute("data-action"),r={key:n,value:o};if("add"===a)if("role"==n||"level"==n)e.commit("addFilterItem",r);else{var i=e.state.filters[n].indexOf(o);-1==i&&e.commit("addFilterItem",r)}else e.commit("removeFilterItem",r)}},getters:{jobList:function(e){var t=e.data;if(null!=e.filterRole&&(t=t.filter((function(t){return t.role==e.filterRole}))),null!=e.filterLevel&&(t=t.filter((function(t){return t.level==e.filterLevel}))),e.filters.language.length>0)for(var n=0;n<e.filters.language.length;n++)t=t.filter((function(t){return t.languages.includes(e.filters.language[n])}));if(e.filters.tool.length>0)for(var o=0;o<e.filters.tool.length;o++)t=t.filter((function(t){return t.tools.includes(e.filters.tool[o])}));return t},getFilters:function(e){var t=[],n=[],o=[],a=[];e.data.map((function(e){-1==t.indexOf(e.role)&&t.push(e.role),-1==n.indexOf(e.level)&&n.push(e.level),e.languages.map((function(e){-1==o.indexOf(e)&&o.push(e)})),e.tools.map((function(e){-1==a.indexOf(e)&&a.push(e)}))})),t=t.sort(),n=n.sort(),o=o.sort(),a=a.sort();var r={roles:t,levels:n,languages:o,tools:a};return r},selectedFilters:function(e){var t=[];return null!=e.filterRole&&t.push({category:"role",value:e.filterRole}),null!=e.filterLevel&&t.push({category:"level",value:e.filterLevel}),e.filters.language.map((function(e){return t.push({category:"language",value:e})})),e.filters.tool.map((function(e){return t.push({category:"tool",value:e})})),t}},mutations:{addFilterItem:function(e,t){"role"==t.key?e.filterRole=t.value:"level"==t.key?e.filterLevel=t.value:e.filters[t.key].push(t.value),e.filterCount++},removeFilterItem:function(e,t){if("role"!=t.key&&"level"!=t.key){var n=e.filters[t.key].indexOf(t.value);-1!=n&&(e.filters[t.key].splice(n,1),e.filterCount--)}"role"==t.key&&(e.filterRole=null),"level"==t.key&&(e.filterLevel=null)}}},l=(n("b0c0"),n("ac1f"),n("5319"),n("bc3a")),s=n.n(l),u={state:{countryList:[],countryName:"",currentCountry:"",regionName:"",isDark:!1},getters:{getCountry:function(e){return e.currentCountry},getCountries:function(e){return""!=e.countryName?e.countryList.filter((function(t){return t.name.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().includes(e.countryName.toLowerCase())})):""!=e.regionName?e.countryList.filter((function(t){return t.region===e.regionName})):e.countryList},getCountryName:function(e){return e.countryName},getRegionFilters:function(e){var t=[];return e.countryList.map((function(e){-1==t.indexOf(e.region)&&t.push(e.region)})),t.sort()},getRegionName:function(e){return e.regionName},isDark:function(e){return e.isDark}},actions:{fetchCountries:function(e){var t=e.commit;s.a.get("https://restcountries.eu/rest/v2/all").then((function(e){t("setCountryList",e.data)})).catch((function(e){console.log(e)}))},fetchCountry:function(e,t){var n=e.commit;s.a.get("https://restcountries.eu/rest/v2/alpha/"+t).then((function(e){n("setCountry",e.data)})).catch((function(e){console.log(e)}))}},mutations:{setCountryList:function(e,t){e.countryList=t},setCountry:function(e,t){e.currentCountry=t},setBorderCountries:function(e,t){e.borderCountries=t},setCountryName:function(e,t){e.countryName=t},setRegionName:function(e,t){e.regionName=t},setIsDark:function(e,t){e.isDark=t}}},c=(n("99af"),{state:{location:"",term:"tacos",locations:[],offset:0,currentBusiness:{},sortby:"best_match",isLoading:!1},getters:{getLocations:function(e){return e.locations},getLocation:function(e){return e.location},getCurrentBusiness:function(e){return e.currentBusiness},getSortBy:function(e){return e.sortby},getOffset:function(e){return e.offset},getLoadingStatus:function(e){return e.isLoading}},actions:{fetchLocations:function(e){var t=e.commit,n=e.state;t("changeStatus"),s.a.get("https://colorful-halibut.glitch.me/api/v1/businesses/search?location=".concat(n.location,"&term=").concat(n.term,"&offset=").concat(n.offset,"&sort_by=").concat(n.sortby)).then((function(e){t("updateLocations",e.data.businesses)})).catch((function(e){console.log(e)}))},fetchBusiness:function(e,t){var n=e.commit;s.a.get("https://colorful-halibut.glitch.me/api/v1/businesses/".concat(t)).then((function(e){n("setBusiness",e.data)})).catch((function(e){console.log(e)}))},fetchNewlocations:function(e){var t=e.commit,n=e.state;console.log("https://colorful-halibut.glitch.me/api/v1/businesses/search?location=".concat(n.location,"&term=").concat(n.term,"&offset=").concat(n.offset,"&sort_by=").concat(n.sortby)),s.a.get("https://colorful-halibut.glitch.me/api/v1/businesses/search?location=".concat(n.location,"&term=").concat(n.term,"&offset=").concat(n.offset,"&sort_by=").concat(n.sortby)).then((function(e){t("addNewLocations",e.data.businesses)})).catch((function(e){console.log(e)}))}},mutations:{updateLocations:function(e,t){e.currentBusiness={},e.locations=t;var n=!e.isLoading;e.isLoading=n},setLocation:function(e,t){e.location=t},setSortBy:function(e,t){e.sortby=t},setBusiness:function(e,t){e.currentBusiness=t},setOffset:function(e,t){e.offset=t},addNewLocations:function(e,t){var n=e.locations.concat(t);e.locations=n},changeStatus:function(e){var t=!e.isLoading;e.isLoading=t}}});o["a"].use(a["a"]);t["a"]=new a["a"].Store({modules:{joblistings:i,countries:u,tacos:c},state:{},mutations:{},actions:{}})},"4ffb":function(e){e.exports=JSON.parse('[{"id":1,"title":"Job Listing","description":"","statsImg":"","name":"joblisting","url":"JobListingMain"},{"id":2,"title":"REST Countries API","description":"","statsImg":"","name":"countries","url":"CountriesMain"},{"id":3,"title":"Tacos anyone?","description":"","statsImg":"","name":"taco","url":"TacosMain"}]')},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("header",{attrs:{id:"mainNav"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),n("router-link",{attrs:{to:{name:"JobListingMain"}}},[e._v("Job Listing")]),n("router-link",{attrs:{to:{name:"CountriesMain"}}},[e._v("Countries")]),n("router-link",{attrs:{to:{name:"TacosMain"}}},[e._v("Tacos")])],1)]),n("router-view",{key:e.$route.fullPath})],1)},r=[],i={name:"App",metaInfo:function(){return{title:"Demo Page",meta:[{name:"description",content:"Demo page for Pamela Mercier"}]}}},l=i,s=(n("5c0b"),n("2877")),u=Object(s["a"])(l,a,r,!1,null,null,null),c=u.exports,f=(n("b0c0"),n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("HelloWorld")],1)},g=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},e._l(e.modules,(function(t){return n("router-link",{key:t.id,class:[t.name,"module"],attrs:{to:{name:t.url}}},[n("h1",[e._v(e._s(t.title))])])})),1)},m=[],v=n("4ffb"),h={data:function(){return{modules:v}}},y=h,b=(n("76c5"),Object(s["a"])(y,p,m,!1,null,"3f168bd7",null)),S=b.exports,w={name:"Home",components:{HelloWorld:S},metaInfo:function(){return{title:"Demo Page",meta:[{name:"description",content:"Demo page for Pamela Mercier"}]}}},L=w,C=Object(s["a"])(L,d,g,!1,null,null,null),k=C.exports,F=void 0;o["a"].use(f["a"]);var O=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/joblisting/main",name:"JobListingMain",component:function(){return n.e("about").then(n.bind(null,"b236"))}},{path:"/countries/main",name:"CountriesMain",component:function(){return n.e("about").then(n.bind(null,"9d34"))}},{path:"/countries/country/:slug",name:"Details",props:!0,component:function(){return n.e("details").then(n.bind(null,"1701"))},beforeRouteUpdate:function(e){F.name=e.params.name}},{path:"/tacos/main",name:"TacosMain",component:function(){return n.e("about").then(n.bind(null,"aefa"))}},{path:"/tacos/details/:slug",name:"TacoDetails",props:!0,component:function(){return n.e("about").then(n.bind(null,"5164"))},beforeRouteUpdate:function(e){F.name=e.params.name}}],A=new f["a"]({base:"/",routes:O,scrollBehavior:function(e,t,n){if(n)return n;var o={};return e.hash?(o.selector=e.hash,"#experience"===e.hash&&(o.offset={y:140}),!!document.querySelector(e.hash)&&o):void 0}}),J=A,T=n("4360"),N=n("f7ab"),_=n("58ca");o["a"].config.productionTip=!1,new o["a"]({router:J,store:T["a"],render:function(e){return e(c)}}).$mount("#app"),o["a"].use(N["a"]),o["a"].use(_["a"])},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),a=n.n(o);a.a},"76c5":function(e,t,n){"use strict";var o=n("da0d"),a=n.n(o);a.a},"9c0c":function(e,t,n){},d6f0:function(e){e.exports=JSON.parse('[{"id":1,"company":"Photosnap","logo":"photosnap.svg","new":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA Only","languages":["HTML","CSS","JavaScript"],"tools":[]},{"id":2,"company":"Manage","logo":"manage.svg","new":true,"featured":true,"position":"FullStack Developer","role":"FullStack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"]},{"id":3,"company":"Account","logo":"account.svg","new":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA Only","languages":["JavaScript"],"tools":["React","Sass"]},{"id":4,"company":"MyHome","logo":"myhome.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA Only","languages":["CSS","JavaScript"],"tools":[]},{"id":5,"company":"Loop Studios","logo":"loop-studios.svg","new":false,"featured":false,"position":"Software Engineer","role":"FullStack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript"],"tools":["Ruby","Sass"]},{"id":6,"company":"FaceIt","logo":"faceit.svg","new":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK Only","languages":["Ruby"],"tools":["RoR"]},{"id":7,"company":"Shortly","logo":"shortly.svg","new":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"]},{"id":8,"company":"Insure","logo":"insure.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA Only","languages":["JavaScript"],"tools":["Vue","Sass"]},{"id":9,"company":"Eyecam Co.","logo":"eyecam-co.svg","new":false,"featured":false,"position":"Full Stack Engineer","role":"FullStack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"]},{"id":10,"company":"The Air Filter Company","logo":"the-air-filter-company.svg","new":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"]}]')},da0d:function(e,t,n){}});
//# sourceMappingURL=app.658f6f48.js.map