(function(t){function e(e){for(var n,a,s=e[0],c=e[1],u=e[2],d=0,f=[];d<s.length;d++)a=s[d],o[a]&&f.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={app:0},i=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"0a49":function(t,e,r){"use strict";var n=r("f236"),o=r.n(n);o.a},"0c67":function(t,e,r){},1:function(t,e){},"14a0":function(t,e,r){"use strict";var n=r("7d1a"),o=r.n(n);o.a},3688:function(t,e,r){t.exports=r.p+"img/down-vec.4bc5ad3b.svg"},"3bcf":function(t,e,r){},"4ce3":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Header"),r("div",{staticClass:"router-cont"},[r("router-view")],1)],1)},i=[],a=(r("0c67"),r("f9e3"),r("2dd8"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-container",{staticClass:"header d-flex",attrs:{fluid:""}},[n("img",{staticClass:"header-img mr-5 my-auto",attrs:{src:r("bca0"),width:"40",height:"40"}}),t._l(t.btns,(function(e){return n("button",{key:e.title,staticClass:"header-btn",class:{active:e.active},on:{click:function(r){return t.btnClick(e)}}},[t._v(" "+t._s(e.title)+" ")])}))],2),n("b-container",{staticClass:"header header-burger d-none",attrs:{fluid:""}},[n("img",{staticClass:"header-img mr-4 my-auto",attrs:{src:r("bca0"),width:"30",height:"30"}}),n("BurgerButton",{ref:"burgerBtn",on:{click:t.burgerBtnClick}}),n("b-container",{staticClass:"burger-buttons",class:t.burgerClasses,attrs:{fluid:""}},t._l(t.btns,(function(e){return n("button",{key:e.title,staticClass:"header-btn burger-btn",class:{active:e.active},on:{click:function(r){return t.btnClick(e)}}},[t._v(" "+t._s(e.title)+" ")])})),0)],1),n("div",{staticClass:"burger-closer",class:{"d-none":!t.burgerActive},on:{click:function(e){return t.burgerClose()}}})],1)}),s=[],c=(r("7f7f"),r("ac6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{on:{click:t.btnClick}},[n("img",{style:{transform:"rotate("+this.rotation+"deg)"},attrs:{src:r("3688"),height:"40",width:"40"}})])}),u=[],l=new n["default"],d={name:"BurgerButton",props:{msg:String},data:function(){return{active:!1,rotation:0}},methods:{btnClick:function(){this.rotation-=180,this.active=!this.active,this.$emit("click",this.active)},setActive:function(t){this.active!=t&&(this.rotation-=180,this.active=t,this.$emit("click",this.active))}}},f=d,h=(r("a973"),r("2877")),b=Object(h["a"])(f,c,u,!1,null,"53f8ea70",null),p=b.exports,v=r("5118"),m={name:"Header",props:{msg:String},components:{BurgerButton:p},data:function(){return{burgerActive:!1,setBurgerActive:!1,burgerClasses:{"burger-active":!1,"d-none":!0},btns:[{name:"Main",title:"Home",window_title:"Progen",route:"/",active:!0},{name:"Discord",title:"Discord",window_title:"Progen",route:"/Discord",active:!0}]}},methods:{btnClick:function(t){this.$router.push(t.route),window.document.title=t.window_title},burgerBtnClick:function(t){var e=this;this.burgerActive=t,t?(this.burgerClasses["d-none"]=!1,Object(v["setTimeout"])((function(){e.burgerClasses["burger-active"]=!0}),25)):(this.burgerClasses["burger-active"]=!1,Object(v["setTimeout"])((function(){e.burgerClasses["d-none"]=!0}),250))},burgerClose:function(){this.$refs.burgerBtn.setActive(!1)}},created:function(){var t=this;l.$on("mounted",(function(e){t.btns.forEach((function(t){t.name===e?t.active=!0:t.active=!1}))}))}},g=m,_=(r("e85a"),Object(h["a"])(g,a,s,!1,null,"4cf956b9",null)),w=_.exports,C=r("8c4f"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"main-header"},[n("b-container",{staticClass:"header-cont",attrs:{fluid:""}},[n("div",{staticClass:"logo mx-auto text-center"},[n("img",{attrs:{width:"300",height:"300",src:r("bca0")}}),n("h1",{staticClass:"font-montserrat mt-3 mb-0"},[t._v("Progen")]),n("h2",{staticClass:"font-montserrat"},[t._v("Mutlifunction DiscordBot with Webinterface")]),n("button",{staticClass:"down",on:{click:function(e){return t.scrollTo("#about")}}},[n("p",[t._v("This is Progen!")]),n("div",{staticStyle:{top:"-20px"}},[n("img",{attrs:{width:"80",src:r("3688")}})]),n("div",{staticStyle:{top:"-60px"}},[n("img",{attrs:{width:"80",src:r("3688")}})])])])])],1),n("b-container",{staticClass:"content mt-6",attrs:{id:"about"}},[n("h1",{staticClass:"page-header"},[t._v("HEY! MY NAME IS PROGEN!")]),n("p",{staticClass:"mt-5"},[t._v(" Progen is "+t._s(t.calculateAge(new Date(1983)))+" years old. "),n("br"),n("br"),t._v(" Progen is a multifunctional bot. Not only does it provide good mood on your Discord server, but it also has the option to moderate the server so that there is still a peaceful mood. Progen ensures a good tuning in the voice channels with an excellent Tom qualtität for a good mood. The two additional bots "),n("a",{attrs:{href:"https://discordapp.com/oauth2/authorize?client_id=662647209929605126&scope=bot"}},[t._v("ProgenMusic1")]),t._v(" and "),n("a",{attrs:{href:"https://discordapp.com/oauth2/authorize?client_id=662647378385305620&scope=bot"}},[t._v("ProgenMusic2")]),t._v(" have been added. Thanks to them, you can listen to music in several channels. The join process is automatic. The "),n("a",{attrs:{href:"https://pwi.progen-bot.de/"}},[t._v("PWI (Progen Webinterface)")]),t._v(" is available day and night for easy conditions. Progen is reliably online for them day and night. This is made possible by a new powerful server. For more information we have written a "),n("a",{attrs:{href:"https://github.com/ProgenBot/ProgenBot/wiki"}},[t._v("Documentation ")]),t._v(" just waiting to be read. "),n("br"),n("br"),n("img",{attrs:{src:"https://top.gg/api/widget/495293590503817237.svg?usernamecolor=FFFFFF&topcolor=000000",alt:" "}}),n("br"),n("br"),t._v(" I would like to thank all the people who put their time and passion into this project and put so much effort into it! "),n("br"),n("br"),n("a",{attrs:{href:"https://www.youtube.com/user/Zekrommaster110"}},[t._v("Zekro")]),t._v("WebDev "),n("br"),n("br"),t._v(" Evoh BotDev "),n("br"),n("br"),t._v(" M'Torials PWI -, Bot-, WebDev "),n("br"),n("br"),t._v(" ShowMeYourSkil PWI -, Bot-, WebDev "),n("br"),n("br"),t._v(" A very big thank you to Zekro! ")])]),n("Footer")],1)},k=[],P={name:"Main",props:{msg:String},components:{},methods:{scrollTo:function(t){var e=this.$el.querySelector(t);e&&e.scrollIntoView()},calculateAge:function(t){var e=Date.now()-t.getTime(),r=new Date(e);return Math.abs(r.getUTCFullYear()-2018)}},mounted:function(){l.$emit("mounted",this.$options.name)}},x=P,D=(r("14a0"),Object(h["a"])(x,y,k,!1,null,"750f2020",null)),j=D.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"discord"},[r("div",{staticClass:"container text-center"},[r("h1",[t._v("Progen Discord")]),t._m(0),r("DiscordInfo",{staticClass:"mx-auto dc-info mb-5",attrs:{guildid:"495865304770150401",href:"https://discord.progen-bot.de"}}),r("iframe",{staticClass:"mx-auto dc-frame",attrs:{src:"https://discordapp.com/widget?id=495865304770150401&theme=dark",allowtransparency:"true",frameborder:"0"}})],1)])},$=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"my-5"},[t._v(" Progen's Discord Server. There they can write with other members to be informed about all current topics and look at the latest development work. "),r("br"),r("br"),r("a",{attrs:{href:"https://discordapp.com/oauth2/authorize?client_id=495293590503817237&scope=bot"}},[t._v("Invite Progen")]),r("br"),r("br"),r("a",{attrs:{href:"https://discordapp.com/oauth2/authorize?client_id=662647209929605126&scope=bot"}},[t._v("Invite ProgenMusic1 additional function")]),r("br"),r("br"),r("a",{attrs:{href:"https://discordapp.com/oauth2/authorize?client_id=662647378385305620&scope=bot"}},[t._v("Invite ProgenMusc2 additional function")])])}],M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"dc-cont d-flex",attrs:{href:t.href}},[r("div",{staticClass:"d-flex mx-auto data-cont"},[r("img",{staticClass:"avatar mr-4",attrs:{src:t.rdata.icon_url.replace(".jpg"),width:"100",height:"100"}}),r("div",[r("h2",[t._v(t._s(t.rdata.name))]),r("div",{staticClass:"d-flex"},[r("div",{staticClass:"pill mr-3"},[r("div",{staticClass:"pill-dot online"}),t._v(" "+t._s(t.rdata.members_online)+"online ")]),r("div",{staticClass:"pill"},[r("div",{staticClass:"pill-dot"}),t._v(" "+t._s(t.rdata.members_total)+"Members ")])])])]),r("div",{staticClass:"join-txt"},[t._v("JOIN NOW")])])},T=[],B={name:"DiscordInfo",props:{guildid:String,href:String},data:function(){return{rdata:{icon_url:"../assets/Logo.png",name:"Progen",members_total:N/A,members_online:N/A}}},methods:{fetchData:function(){var t=this;this.$http.get("".concat(this.guildid)).then((function(e){t.rdata=e.body})).catch(console.error)}},created:function(){this.fetchData()}},S=B,I=(r("0a49"),Object(h["a"])(S,M,T,!1,null,"670e191b",null)),E=I.exports,F={name:"Discord",components:{DiscordInfo:E},props:{},data:function(){return{}},mounted:function(){l.$emit("mounted",this.$options.name)}},W=F,z=(r("9a1c"),Object(h["a"])(W,O,$,!1,null,"3921c8a7",null)),H=z.exports,Y=new C["a"]({mode:"history",routes:[{path:"/",name:"Main",component:j},{path:"/discord",name:"Discord",component:H}]}),J={name:"app",router:Y,components:{Header:w}},Z=J,q=(r("034f"),Object(h["a"])(Z,o,i,!1,null,null,null)),L=q.exports,G=r("5f5b"),R=r("28dd"),U=r("98c9");n["default"].use(G["a"]),n["default"].use(C["a"]),n["default"].use(R["a"]),n["default"].use(U["a"]),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(L)}}).$mount("#app")},"7d1a":function(t,e,r){},"85ec":function(t,e,r){},"9a1c":function(t,e,r){"use strict";var n=r("4ce3"),o=r.n(n);o.a},a973:function(t,e,r){"use strict";var n=r("3bcf"),o=r.n(n);o.a},bca0:function(t,e,r){t.exports=r.p+"img/Logo.41dea63a.png"},dd9f:function(t,e,r){},e85a:function(t,e,r){"use strict";var n=r("dd9f"),o=r.n(n);o.a},f236:function(t,e,r){}});
//# sourceMappingURL=app.js.map