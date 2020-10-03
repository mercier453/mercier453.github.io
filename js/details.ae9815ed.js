(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["details"],{1701:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{dark:t.isDark},attrs:{id:"countriespage"}},[n("Header"),n("div",{attrs:{id:"countryDisplay"}},[n("div",{staticClass:"back"},[n("GoBack")],1),n("div",{staticClass:"details"},[n("figure",{staticClass:"flag"},[n("img",{attrs:{src:t.country.flag,alt:t.country.name}})]),n("div",{staticClass:"content country"},[n("h1",[t._v(t._s(t.country.name))]),n("ul",[n("li",[n("span",{staticClass:"header"},[t._v("Native Name: ")]),t._v(t._s(t.country.nativeName))]),n("li",[n("span",{staticClass:"header"},[t._v("Population: ")]),t._v(t._s(t.country.population))]),n("li",[n("span",{staticClass:"header"},[t._v("Region: ")]),t._v(t._s(t.country.region))]),n("li",[n("span",{staticClass:"header"},[t._v("Sub Region: ")]),t._v(t._s(t.country.subregion))]),n("li",[n("span",{staticClass:"header"},[t._v("Capital: ")]),t._v(t._s(t.country.capital))]),n("li",[n("span",{staticClass:"header"},[t._v("Top Level Domain: ")]),t._l(t.country.topLevelDomain,(function(e,r){return n("span",{key:e},[t._v(t._s(e)+" "),r!=t.country.topLevelDomain.length-1?n("span",[t._v(", ")]):t._e()])}))],2),n("li",[n("span",{staticClass:"header"},[t._v("Currencies: ")]),t._l(t.country.currencies,(function(e,r){return n("span",{key:e.code},[t._v(t._s(e.name)+" "),r!=t.country.currencies.length-1?n("span",[t._v(",")]):t._e()])}))],2),n("li",[n("span",{staticClass:"header"},[t._v("Languages: ")]),t._l(t.country.languages,(function(e,r){return n("span",{key:e.iso639_1},[t._v(t._s(e.name)+" "),r!=t.country.languages.length-1?n("span",[t._v(",")]):t._e()])}))],2)]),t.borderCountries.length?n("div",{staticClass:"borderCountries"},[n("span",{staticClass:"header"},[t._v("Border Countries: ")]),n("div",t._l(t.borderCountries,(function(e){return n("router-link",{key:e.alph3Code,staticClass:"button",attrs:{to:{name:"Details",params:{slug:e.alpha3Code}}}},[t._v(t._s(e.name))])})),1)]):t._e()])])])],1)},a=[],s=(n("7db0"),n("d81d"),n("5530")),i=n("2f62"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"go-back"},[n("button",{on:{click:t.goBack}},[n("ion-icon",{attrs:{name:"arrow-back-outline"}}),t._v("Back")],1)])},c=[],u={methods:{goBack:function(){return this.$router.go(-1)}}},l=u,f=(n("176a"),n("2877")),d=Object(f["a"])(l,o,c,!1,null,"7aefbed2",null),p=d.exports,b=n("b22a"),v={props:{slug:{type:String,required:!0}},computed:Object(s["a"])({borderCountries:function(){var t=this,e=[];return this.country.borders&&this.country.borders.map((function(n){var r=t.countries.find((function(t){return t.alpha3Code===n}));e.push(r)})),e}},Object(i["c"])({country:"getCountry",countries:"getCountries",isDark:"isDark"})),methods:{fetchCountry:function(){this.$store.dispatch("fetchCountry",this.slug)},fetchCountries:function(){this.$store.dispatch("fetchCountries")}},created:function(){this.fetchCountry(),this.fetchCountries()},components:{GoBack:p,Header:b["a"]}},h=v,_=(n("aef0"),Object(f["a"])(h,r,a,!1,null,"1d9cb77b",null));e["default"]=_.exports},"176a":function(t,e,n){"use strict";var r=n("27f1"),a=n.n(r);a.a},"27f1":function(t,e,n){},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"670b":function(t,e,n){},"9eb3":function(t,e,n){},aef0:function(t,e,n){"use strict";var r=n("9eb3"),a=n.n(r);a.a},b22a:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"content"},[n("h1",[t._v("Where in the world?")]),t.isDark?n("div",{staticClass:"mode",on:{click:function(e){return t.updateDark()}}},[n("ion-icon",{attrs:{name:"sunny"}}),t._v(" Light Mode")],1):n("div",{staticClass:"mode",on:{click:function(e){return t.updateDark()}}},[n("ion-icon",{attrs:{name:"moon"}}),t._v(" Dark Mode")],1)])])},a=[],s={data:function(){return{isDark:!1}},methods:{updateDark:function(){this.isDark=!this.isDark,this.$store.commit("setIsDark",this.isDark)}}},i=s,o=(n("b36a"),n("2877")),c=Object(o["a"])(i,r,a,!1,null,"79d592f1",null);e["a"]=c.exports},b36a:function(t,e,n){"use strict";var r=n("670b"),a=n.n(r);a.a},b64b:function(t,e,n){var r=n("23e7"),a=n("7b0b"),s=n("df75"),i=n("d039"),o=i((function(){s(1)}));r({target:"Object",stat:!0,forced:o},{keys:function(t){return s(a(t))}})},dbb4:function(t,e,n){var r=n("23e7"),a=n("83ab"),s=n("56ef"),i=n("fc6a"),o=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,n,r=i(t),a=o.f,u=s(r),l={},f=0;while(u.length>f)n=a(r,e=u[f++]),void 0!==n&&c(l,e,n);return l}})},e439:function(t,e,n){var r=n("23e7"),a=n("d039"),s=n("fc6a"),i=n("06cf").f,o=n("83ab"),c=a((function(){i(1)})),u=!o||c;r({target:"Object",stat:!0,forced:u,sham:!o},{getOwnPropertyDescriptor:function(t,e){return i(s(t),e)}})}}]);
//# sourceMappingURL=details.ae9815ed.js.map