(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{400:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},401:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}t.exports=function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}},402:function(t,e,n){},403:function(t,e,n){},404:function(t,e,n){},405:function(t,e,n){},406:function(t,e,n){},414:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},415:function(t,e,n){"use strict";n(402)},416:function(t,e,n){"use strict";n(403)},417:function(t,e,n){"use strict";n(404)},418:function(t,e,n){"use strict";n(405)},419:function(t,e,n){"use strict";n(406)},432:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"content"},[n("Header"),t._v(" "),n("v-main",{staticClass:"main pt-0"},[n("LoadComponents",{ref:"loadComponents",scopedSlots:t._u([{key:"content",fn:function(e){var i=e.components;return[n(i.Section01,{tag:"component"}),t._v(" "),n("div",{staticClass:"barLine barLine-60 barLine-sm-80 barLine-md-100 barLine-lg-140 inlayTop",attrs:{id:"barLine_01_02"}}),t._v(" "),n(i.Section02,{tag:"component"}),t._v(" "),n("div",{staticClass:"barLine barLine-60 barLine-sm-80 barLine-md-100 barLine-lg-140 inlayBottom",attrs:{id:"barLine_02_03"}}),t._v(" "),n(i.Section03,{tag:"component"}),t._v(" "),n("div",{staticClass:"barLine barLine-60 barLine-sm-80 barLine-md-100 barLine-lg-140 inlayTop",attrs:{id:"barLine_03_04"}}),t._v(" "),n(i.Section04,{tag:"component"}),t._v(" "),n("div",{staticClass:"barLine barLine-60 barLine-sm-80 barLine-md-100 barLine-lg-140 inlayBottom",attrs:{id:"barLine_04_05"}}),t._v(" "),n(i.Section05,{tag:"component"}),t._v(" "),n("div",{staticClass:"barLine barLine-60 barLine-sm-80 barLine-md-100 barLine-lg-140 inlayTop",attrs:{id:"barLine_05_06"}}),t._v(" "),n(i.Section06,{tag:"component"})]}}])})],1)],1)};i._withStripped=!0;var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{staticClass:"app_bar",attrs:{app:"",elevation:"0","elevate-on-scroll":""}},[n("v-container",{staticClass:"pa-0 fill-height"},[n("div",{staticClass:"d-flex flex-md-column align-center"},[n("v-responsive",{staticClass:"logo",attrs:{"aspect-ratio":6}},[n("div",{staticClass:"img"})])],1),t._v(" "),n("v-spacer"),t._v(" "),n("Menu",{staticClass:"d-none d-md-flex align-self-end menu"}),t._v(" "),n("v-btn",{staticClass:"d-flex d-md-none menuBtn",attrs:{color:"transparent",fab:"",small:"",elevation:"0"},on:{click:function(e){t.$refs.sidebar.isOpen=!t.$refs.sidebar.isOpen}}},[n("v-icon",[t._v(t._s(t.$icons.mdiMenu))])],1)],1)],1),t._v(" "),n("Sidebar",{ref:"sidebar",scopedSlots:t._u([{key:"content",fn:function(){return[n("div",{staticClass:"d-flex pa-4"},[n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"closeBtn",attrs:{fab:"",small:"",elevation:"0"},on:{click:function(e){t.$refs.sidebar.isOpen=!1}}},[n("v-icon",[t._v(t._s(t.$icons.mdiClose))])],1)],1),t._v(" "),n("Menu",{staticClass:"sidebarMenu d-flex flex-column",on:{itemClick:t.sidebarMenu_click}})]},proxy:!0}])})],1)};s._withStripped=!0;var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu"},[n("v-btn",{staticClass:"pageItem px-2 text-body-1",attrs:{depressed:"",text:"",id:"btn01","active-class":"active"},on:{click:function(e){return t.pageItem_click("section02")}}},[t._v("\n    公司介绍\n  ")]),t._v(" "),n("v-btn",{staticClass:"pageItem px-2 text-body-1",attrs:{depressed:"",text:"",id:"btn02","active-class":"active"},on:{click:function(e){return t.pageItem_click("section03")}}},[t._v("\n    专业团队\n  ")]),t._v(" "),n("v-btn",{staticClass:"pageItem px-2 text-body-1",attrs:{depressed:"",text:"",id:"btn03","active-class":"active"},on:{click:function(e){return t.pageItem_click("section04")}}},[t._v("\n    产品服务\n  ")]),t._v(" "),n("v-btn",{staticClass:"pageItem px-2 text-body-1",attrs:{depressed:"",text:"",id:"btn04","active-class":"active"},on:{click:function(e){return t.pageItem_click("section05")}}},[t._v("\n    联络我们\n  ")])],1)};a._withStripped=!0;var r=n(400),o=n.n(r),c=n(401),l=n.n(c),u=n(414),d=n.n(u);function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){d()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f=function(){function t(){o()(this,t),this.startTime=0,this.active=!1}return l()(t,[{key:"start",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;this.durationTime=e,this.fun=t,this.startTime=Date.now(),this.active=!0,this.run()}},{key:"run",value:function(){var t=Date.now()-this.startTime,e=Math.min(t/this.durationTime,1);this.fun&&this.fun(e),e>=1&&(this.active=!1),this.active&&requestAnimationFrame(this.run.bind(this))}},{key:"cancel",value:function(){this.active=!1}}]),t}(),p=function(){function t(){o()(this,t)}return l()(t,null,[{key:"mix",value:function(t,e,n){return t*(1-n)+e*n}},{key:"fract",value:function(t){return(t%=1)<0?t+1:t}},{key:"inverseMix",value:function(t,e,n){return(n-t)/(e-t)}},{key:"clamp",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return t<=e?e:t>=n?n:t}},{key:"smoothstep",value:function(t,e,n){return(n=clamp(inverseMix(t,e,n)))*n*(3-2*n)}}]),t}(),b={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}},_={components:{},data:function(){return{timeRun:new f}},mounted:function(){var t=this;window.addEventListener("wheel",(function(){t.timeRun.cancel()}))},methods:{pageItem_click:function(t){var e=document.getElementById(t),n=window.pageYOffset,i=Math.max(e.offsetTop-64,0);this.timeRun.start((function(t){window.scrollTo(0,p.mix(n,i,b.easeOutCubic(t)))}),1e3),this.$emit("itemClick",t)}},computed:{}},h=(n(415),n(115)),g=Object(h.a)(_,a,[],!1,null,"3111d13b",null);g.options.__file="src/vue/pages/components/Menu.vue";var x=g.exports,C=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-navigation-drawer",{staticClass:"sidebar",attrs:{right:"",app:"",temporary:""},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[t._t("content")],2)};C._withStripped=!0;var y={components:{},props:{},watch:{},data:function(){return{isOpen:!1,resizeID:void 0}},mounted:function(){window.addEventListener("resize",this.resize)},beforeDestroy:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){var t=this;clearTimeout(this.resizeID),this.resizeID=setTimeout((function(){t.isOpen&&t.$vuetify.breakpoint.mdAndUp&&(t.isOpen=!1)}),300)}},computed:{}},w=Object(h.a)(y,C,[],!1,null,"2e4a0ea0",null);w.options.__file="src/vue/pages/components/Sidebar.vue";var k={components:{Menu:x,Sidebar:w.exports},data:function(){return{}},mounted:function(){},methods:{sidebarMenu_click:function(){this.$refs.sidebar.isOpen=!1}},computed:{}},O=(n(416),Object(h.a)(k,s,[],!1,null,"023c3669",null));O.options.__file="src/vue/pages/components/Header.vue";var L=O.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer px-3 py-8"},[n("v-container",[n("div",{staticClass:"row"},[n("div",{staticClass:"col col-12 col-sm-4 px-2 py-0 my-2 align-self-center"},[n("div",{staticClass:"textContent d-flex justify-md-center"},[n("v-responsive",{staticClass:"logo",attrs:{"aspect-ratio":3.5}})],1)]),t._v(" "),n("div",{staticClass:"col col-12 col-sm-4 px-2 py-0 my-2"},[n("div",{staticClass:"textContent"},[n("ul",{staticClass:"contactInfo items d-flex flex-column ma-0 pa-0"},[n("li",{staticClass:"item d-flex flex-column flex-md-row flex-wrap py-2"},[n("div",{staticClass:"title text-body-2"},[n("v-icon",[t._v("mdi-map-marker-radius")]),t._v(" "),n("span",[t._v("地址")])],1),t._v(" "),n("a",{staticClass:"pl-5 text-body-2 d-inline-block",attrs:{href:"https://www.google.com.tw/maps?q=高雄市前鎮區復興四路12號2樓之9",target:"_blank"}},[t._v("80661 高雄市前鎮區復興四路12號2樓之9")])]),t._v(" "),n("li",{staticClass:"item d-flex flex-column flex-md-row flex-wrap py-2"},[n("div",{staticClass:"title text-body-2"},[n("v-icon",[t._v("mdi-phone-check")]),t._v(" "),n("span",[t._v("電話")])],1),t._v(" "),n("a",{staticClass:"pl-5 text-body-2 d-inline-block",attrs:{href:"tel:+886-7-3389791"}},[t._v("(07)338-9791")]),t._v(" "),n("a",{staticClass:"pl-5 text-body-2 d-inline-block",attrs:{href:"tel:+886-0911662616"}},[t._v("0911-662-616")])]),t._v(" "),n("li",{staticClass:"item d-flex flex-column flex-md-row flex-wrap py-2"},[n("div",{staticClass:"title text-body-2"},[n("v-icon",[t._v("mdi-fax")]),t._v(" "),n("span",[t._v("傳真")])],1),t._v(" "),n("a",{staticClass:"pl-5 text-body-2 d-inline-block",attrs:{href:"tel:+886-7-3312156"}},[t._v("(07)331-2156")])]),t._v(" "),n("li",{staticClass:"item d-flex flex-column flex-md-row flex-wrap py-2"},[n("div",{staticClass:"title text-body-2"},[n("v-icon",[t._v("mdi-email-receive")]),t._v(" "),n("span",[t._v("信箱")])],1),t._v(" "),n("a",{staticClass:"pl-5 text-body-2 d-inline-block",attrs:{href:"mailto:mengyu@n-way.net"}},[t._v("mengyu@n-way.net")]),t._v(" "),n("a",{staticClass:"pl-5 text-body-2 d-inline-block",attrs:{href:"mailto:butter@n-way.net"}},[t._v("butter@n-way.net")])])])])]),t._v(" "),n("div",{staticClass:"col col-12 col-sm-4 px-2 py-0  my-2"},[n("div",{staticClass:"textTitle text-h6 bold tri"},[t._v("合作夥伴")]),t._v(" "),n("div",{staticClass:"textContent"},[n("ul",{staticClass:"collaborationInfo d-inline-flex flex-wrap items ma-0 pa-0"},[n("li",{staticClass:"item d-flex align-center ml-4",attrs:{id:"item01"}},[n("v-btn",{attrs:{large:"",text:"",href:"http://www.jsene.com/",target:"_blank"}},[n("div",{staticClass:"icon mr-2"}),t._v(" "),n("div",{staticClass:"title text-body-2"},[t._v("捷思環能")])])],1),t._v(" "),n("li",{staticClass:"item d-flex align-center ml-4",attrs:{id:"item02"}},[n("v-btn",{attrs:{large:"",text:""}},[n("div",{staticClass:"icon mr-2"}),t._v(" "),n("div",{staticClass:"title text-body-2"},[t._v("睿思環能")])])],1)])])])]),t._v(" "),n("div",{staticClass:"rightsReserved text-caption text-center my-3"},[t._v("\n      Copyright © 2021 安瑞環境科技有限公司 All Rights Reserved.\n    ")])])],1)};S._withStripped=!0;var I={components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{}},E=(n(417),Object(h.a)(I,S,[],!1,null,"3dec5b12",null));E.options.__file="src/vue/pages/components/Footer.vue";var $=E.exports,j=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.finished?[this._t("content",null,{components:this.components})]:[e("div",{staticClass:"vh-70 d-flex align-center justify-center"},[e("v-progress-circular",{attrs:{indeterminate:"",size:"64"}},[this._v(this._s(Math.round(100*this.progress))+"%")])],1)]],2)};j._withStripped=!0;var T={components:{},data:function(){return{finished:!1,progress:0,components:{}}},mounted:function(){},methods:{load:function(t){var e=this;return this.finished=!1,this.progress=0,function(t,e){var n=0,i=t.length,s=t.map((function(t){return t.src.then((function(t){return n++,e&&e(n,i),Promise.resolve(t)}))}));return Promise.all(s).then((function(e){return e.map((function(e,n){return m(m({},t[n]),{},{component:e.default})}))}))}(t,(function(t,n){e.progress=t/n})).then((function(t){var n={};return t.forEach((function(t){n[t.name]=t.component})),e.components=n,e.finished=!0,n}))}},computed:{}},M=(n(418),Object(h.a)(T,j,[],!1,null,"1ad06cf8",null));M.options.__file="src/vue/pages/components/LoadComponents.vue";var H={components:{Header:L,Footer:$,LoadComponents:M.exports},data:function(){return{}},mounted:function(){var t=this;this.$refs.loadComponents.load([{name:"Section01",src:n.e(4).then(n.bind(null,433))},{name:"Section02",src:n.e(3).then(n.bind(null,434))},{name:"Section03",src:n.e(5).then(n.bind(null,435))},{name:"Section04",src:n.e(6).then(n.bind(null,431))},{name:"Section05",src:n.e(7).then(n.bind(null,436))},{name:"Section06",src:n.e(8).then(n.bind(null,437))}]).then((function(){var e=t.$scrollmagic.scene({triggerElement:"#section02",triggerHook:.5}).setClassToggle(".menu #btn01","active");t.$scrollmagic.addScene(e);var n=t.$scrollmagic.scene({triggerElement:"#section03",triggerHook:.5}).setClassToggle(".menu #btn02","active");t.$scrollmagic.addScene(n);var i=t.$scrollmagic.scene({triggerElement:"#section04",triggerHook:.5}).setClassToggle(".menu #btn03","active");t.$scrollmagic.addScene(i);var s=t.$scrollmagic.scene({triggerElement:"#section05",triggerHook:.5}).setClassToggle(".menu #btn04","active");t.$scrollmagic.addScene(s);var a=function(){e.duration(document.getElementById("section02").clientHeight),n.duration(document.getElementById("section03").clientHeight),i.duration(document.getElementById("section04").clientHeight),s.duration(document.getElementById("section05").clientHeight)};window.addEventListener("resize",a),window.addEventListener("scroll",a),a()}))},methods:{},computed:{}},P=(n(419),Object(h.a)(H,i,[],!1,null,"4f87bf2c",null));P.options.__file="src/vue/pages/Home.vue";e.default=P.exports}}]);