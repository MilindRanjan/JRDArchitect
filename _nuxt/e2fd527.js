(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3],{275:function(t,e,n){"use strict";n.r(e);n(32);var o={data:function(){return{isMenuOpen:!1,menuItems:[{name:"Home",path:"/"},{name:"Projects",path:"/projects"},{name:"About Us",path:"/about"},{name:"Contact Me",path:"/contact"}]}},methods:{toggleMenu:function(){this.isMenuOpen=!this.isMenuOpen,document.body.style.overflow=this.isMenuOpen?"hidden":""},closeMenu:function(){this.isMenuOpen=!1,document.body.style.overflow=""}},mounted:function(){var t=this;window.addEventListener("keydown",(function(e){"Escape"===e.key&&t.isMenuOpen&&t.closeMenu()})),window.addEventListener("resize",(function(){window.innerWidth>768&&t.isMenuOpen&&t.closeMenu()}))},beforeDestroy:function(){window.removeEventListener("keydown",this.closeMenu),window.removeEventListener("resize",this.closeMenu),document.body.style.overflow=""}},r=(n(277),n(46)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("header",{class:{"mobile-open":t.isMenuOpen}},[t._m(0),t._v(" "),e("button",{staticClass:"hamburger",attrs:{"aria-expanded":t.isMenuOpen,"aria-label":"Toggle navigation menu"},on:{click:t.toggleMenu}},[e("span",{staticClass:"hamburger-line"}),t._v(" "),e("span",{staticClass:"hamburger-line"}),t._v(" "),e("span",{staticClass:"hamburger-line"})]),t._v(" "),e("nav",{class:{"nav-open":t.isMenuOpen}},[e("ul",t._l(t.menuItems,(function(n,o){return e("li",{key:o},[e("nuxt-link",{class:{active:t.$route.path===n.path},attrs:{to:n.path},on:{click:t.closeMenu}},[t._v("\n          "+t._s(n.name)+"\n        ")])],1)})),0)]),t._v(" "),t.isMenuOpen?e("div",{staticClass:"mobile-overlay",on:{click:t.closeMenu}}):t._e()])}),[function(){var t=this._self._c;return t("div",{staticClass:"logo-container"},[t("img",{staticClass:"logo",attrs:{src:"/logo.jpeg",alt:"Company Logo"}})])}],!1,null,"4536ef8b",null);e.default=component.exports;installComponents(component,{Header:n(275).default})},276:function(t,e,n){var content=n(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(86).default)("ef0a79ae",content,!0,{sourceMap:!1})},277:function(t,e,n){"use strict";n(276)},278:function(t,e,n){var o=n(85)((function(i){return i[1]}));o.push([t.i,'header[data-v-4536ef8b]{align-items:center;background:#fff;border-bottom:1px solid #ddd;display:flex;height:70px;justify-content:space-between;left:0;padding:15px 20px;position:fixed;right:0;top:0;z-index:1000}.logo-container[data-v-4536ef8b]{flex-grow:1}.logo[data-v-4536ef8b]{height:50px;transition:transform .3s ease}.logo[data-v-4536ef8b]:hover{transform:scale(1.05)}nav ul[data-v-4536ef8b]{display:flex;justify-content:flex-end;list-style:none;margin:0;padding:0}nav li[data-v-4536ef8b]{margin:0 15px;position:relative}nav a[data-v-4536ef8b]{color:#000;display:inline-block;font-size:16px;padding:5px 0;-webkit-text-decoration:none;text-decoration:none;transition:color .3s ease}nav a.active[data-v-4536ef8b],nav a[data-v-4536ef8b]:hover{color:#555}nav li[data-v-4536ef8b]:after{background:#000;bottom:-5px;content:"";display:block;height:2px;left:0;position:absolute;transition:width .3s ease;width:0}nav a.active+li[data-v-4536ef8b]:after,nav li[data-v-4536ef8b]:hover:after{width:100%}.hamburger[data-v-4536ef8b]{background:none;border:none;cursor:pointer;display:none;padding:10px;z-index:1001}.hamburger-line[data-v-4536ef8b]{background-color:#000;display:block;height:2px;margin:5px 0;transition:transform .3s ease,opacity .3s ease;width:25px}.mobile-overlay[data-v-4536ef8b]{background:rgba(0,0,0,.5);bottom:0;display:none;left:0;position:fixed;right:0;top:0;z-index:999}@media (max-width:768px){.hamburger[data-v-4536ef8b]{display:block}nav[data-v-4536ef8b]{background:#fff;height:calc(100vh - 70px);left:100%;position:fixed;top:70px;transition:transform .3s ease;width:100%;z-index:1000}nav.nav-open[data-v-4536ef8b]{transform:translateX(-100%)}nav ul[data-v-4536ef8b]{align-items:center;flex-direction:column;padding:20px 0}nav li[data-v-4536ef8b]{margin:15px 0;text-align:center;width:100%}nav a[data-v-4536ef8b]{display:block;font-size:18px;padding:10px 20px;width:100%}.mobile-open .hamburger-line[data-v-4536ef8b]:first-child{transform:translateY(7px) rotate(45deg)}.mobile-open .hamburger-line[data-v-4536ef8b]:nth-child(2){opacity:0}.mobile-open .hamburger-line[data-v-4536ef8b]:last-child{transform:translateY(-7px) rotate(-45deg)}.mobile-open .mobile-overlay[data-v-4536ef8b]{display:block}}',""]),o.locals={},t.exports=o},279:function(t,e,n){var content=n(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(86).default)("24ea1dbf",content,!0,{sourceMap:!1})},280:function(t,e,n){"use strict";n(279)},281:function(t,e,n){var o=n(85)((function(i){return i[1]}));o.push([t.i,'.portfolio-content[data-v-73ef19aa]{font-family:"Arial",sans-serif;margin:auto;max-width:1200px;padding:20px}.hero[data-v-73ef19aa]{height:50vh;margin-bottom:40px}.hero[data-v-73ef19aa],.logo-container[data-v-73ef19aa]{align-items:center;display:flex}.logo-container[data-v-73ef19aa]{flex:1;justify-content:center}.logo[data-v-73ef19aa]{max-width:200px;width:100%}.hero-text[data-v-73ef19aa]{flex:2;text-align:left}.hero-text h1[data-v-73ef19aa]{color:#333;font-size:48px;margin:0}.hero-text .motto[data-v-73ef19aa]{color:#666;font-size:24px;margin-top:10px}.about-us p[data-v-73ef19aa]{color:#555;font-size:22px;line-height:1.6;margin-bottom:20px}.achievements[data-v-73ef19aa]{background-color:#fafafa;padding:60px 0}.achievements h2[data-v-73ef19aa]{color:#333;font-size:2.5rem;margin-bottom:50px;position:relative;text-align:center}.achievements h2[data-v-73ef19aa]:after{background-color:#333;bottom:-15px;content:"";height:3px;left:50%;position:absolute;transform:translateX(-50%);width:60px}.timeline-container[data-v-73ef19aa]{margin:0 auto;max-width:1000px;padding:20px 0;position:relative}.timeline-container[data-v-73ef19aa]:before{background-color:#ddd;content:"";height:100%;left:50%;position:absolute;top:0;transform:translateX(-50%);width:2px}.timeline-item[data-v-73ef19aa]{margin-bottom:60px;opacity:0;position:relative;transform:translateY(20px);transition:all .6s ease;width:100%}.timeline-item.visible[data-v-73ef19aa]{opacity:1;transform:translateY(0)}.timeline-item:nth-child(odd) .timeline-content[data-v-73ef19aa]{margin-left:50%;padding-left:40px}.timeline-item:nth-child(2n) .timeline-content[data-v-73ef19aa]{margin-right:50%;padding-right:40px;text-align:right}.timeline-content[data-v-73ef19aa]{background:#fff;border-radius:5px;box-shadow:0 5px 15px rgba(0,0,0,.1);padding:20px;position:relative;transition:transform .3s ease}.timeline-content[data-v-73ef19aa]:hover{transform:translateY(-5px)}.timeline-date[data-v-73ef19aa]{background:#333;border-radius:3px;color:#fff;display:inline-block;font-weight:700;margin-bottom:15px;padding:8px 16px}.timeline-body h3[data-v-73ef19aa]{color:#333;font-size:1.2rem;margin:0 0 10px}.timeline-body p[data-v-73ef19aa]{color:#666;line-height:1.5;margin:0}@media (max-width:768px){.hero[data-v-73ef19aa]{align-items:center;background-color:#f9f9f9;display:flex;flex-direction:column;justify-content:center;padding:20px;text-align:center}.logo-container img[data-v-73ef19aa]{height:auto;margin-bottom:20px;margin-top:40px;max-width:80%}.hero-text h1[data-v-73ef19aa]{color:#333;font-size:24px;font-weight:700;margin:10px 0;text-align:center}.hero-text .motto[data-v-73ef19aa]{color:#555;font-size:16px;line-height:1.4;margin:0;text-align:center}.timeline-container[data-v-73ef19aa]:before{left:30px}.timeline-item[data-v-73ef19aa]:before{left:20px}.timeline-item:nth-child(2n) .timeline-content[data-v-73ef19aa],.timeline-item:nth-child(odd) .timeline-content[data-v-73ef19aa]{margin:0 0 0 70px;padding:20px;text-align:left}}',""]),o.locals={},t.exports=o},283:function(t,e,n){var content=n(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(86).default)("814f1892",content,!0,{sourceMap:!1})},284:function(t,e,n){var content=n(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(86).default)("69798e37",content,!0,{sourceMap:!1})},285:function(t,e,n){"use strict";n.r(e);n(36),n(63),n(21),n(37);var o={data:function(){return{achievements:[{year:"2001",title:"Commercial Complex",description:"Designed for Zila Parishad, Begusarai, Bihar."},{year:"2004",title:"Vishwesaraiya Institute",description:"Conceptualized the Institute of Sanitation & Water Academy, Ranchi, Jharkhand."},{year:"2006",title:"City Bus Terminus",description:"Transformed transit experience in Munger, Bihar."},{year:"2008",title:"Seevusagar Ramgulam Statue",description:"First Prize in the Government of Bihar Design Competition."},{year:"2010",title:"Shri Krishna Nagar Housing",description:"First Prize in Housing Design Competition."},{year:"2012",title:"Bihar State Guest House",description:"First Prize in Design Competition."}]}},mounted:function(){var t=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&t.target.classList.add("visible")}))}),{threshold:.2});this.$el.querySelectorAll(".timeline-item").forEach((function(e){return t.observe(e)}))}},r=(n(280),n(46)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"portfolio-content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("section",{staticClass:"achievements"},[e("h2",[t._v("Achievements Timeline")]),t._v(" "),e("div",{staticClass:"timeline-container"},t._l(t.achievements,(function(n){return e("div",{key:n.year,staticClass:"timeline-item"},[e("div",{staticClass:"timeline-content"},[e("div",{staticClass:"timeline-date"},[t._v(t._s(n.year))]),t._v(" "),e("div",{staticClass:"timeline-body"},[e("h3",[t._v(t._s(n.title))]),t._v(" "),e("p",[t._v(t._s(n.description))])])])])})),0)])])}),[function(){var t=this,e=t._self._c;return e("section",{staticClass:"hero"},[e("div",{staticClass:"logo-container"},[e("img",{staticClass:"logo",attrs:{src:"/logo.jpeg",alt:"Company Logo"}})]),t._v(" "),e("div",{staticClass:"hero-text"},[e("h1",[t._v("Janaki Raman Designs")]),t._v(" "),e("p",{staticClass:"motto"},[t._v("Where architecture meets purpose and innovation")])])])},function(){var t=this,e=t._self._c;return e("section",{staticClass:"about-us"},[e("p",[t._v("\n      Established in "),e("strong",[t._v("2000")]),t._v(", Janaki Raman Designs has grown into a name synonymous with excellence in architectural design.\n      With a legacy of crafting impactful spaces, we specialize in designing structures that blend functionality with aesthetic appeal.\n    ")])])}],!1,null,"73ef19aa",null);e.default=component.exports},288:function(t,e,n){"use strict";n(283)},289:function(t,e,n){var o=n(85)((function(i){return i[1]}));o.push([t.i,'.portfolio-content[data-v-59a82f4b]{font-family:"Arial",sans-serif;margin:auto;max-width:1200px;padding:20px}.hero[data-v-59a82f4b]{height:50vh;margin-bottom:40px}.hero[data-v-59a82f4b],.logo-container[data-v-59a82f4b]{align-items:center;display:flex}.logo-container[data-v-59a82f4b]{flex:1;justify-content:center}.logo[data-v-59a82f4b]{max-width:200px;width:100%}.hero-text[data-v-59a82f4b]{flex:2;text-align:left}.hero-text h1[data-v-59a82f4b]{color:#333;font-size:48px;margin:0}.hero-text .motto[data-v-59a82f4b]{color:#666;font-size:24px;margin-top:10px}.about-us p[data-v-59a82f4b]{color:#555;font-size:22px;line-height:1.6;margin-bottom:20px}.achievements[data-v-59a82f4b]{background-color:#fafafa;padding:60px 0}.achievements h2[data-v-59a82f4b]{color:#333;font-size:2.5rem;margin-bottom:50px;position:relative;text-align:center}.achievements h2[data-v-59a82f4b]:after{background-color:#333;bottom:-15px;content:"";height:3px;left:50%;position:absolute;transform:translateX(-50%);width:60px}.timeline-container[data-v-59a82f4b]{margin:0 auto;max-width:1000px;padding:20px 0;position:relative}.timeline-container[data-v-59a82f4b]:before{background-color:#ddd;content:"";height:100%;left:50%;position:absolute;top:0;transform:translateX(-50%);width:2px}.timeline-item[data-v-59a82f4b]{margin-bottom:60px;opacity:0;position:relative;transform:translateY(20px);transition:all .6s ease;width:100%}.timeline-item.visible[data-v-59a82f4b]{opacity:1;transform:translateY(0)}.timeline-item:nth-child(odd) .timeline-content[data-v-59a82f4b]{margin-left:50%;padding-left:40px}.timeline-item:nth-child(2n) .timeline-content[data-v-59a82f4b]{margin-right:50%;padding-right:40px;text-align:right}.timeline-content[data-v-59a82f4b]{background:#fff;border-radius:5px;box-shadow:0 5px 15px rgba(0,0,0,.1);padding:20px;position:relative;transition:transform .3s ease}.timeline-content[data-v-59a82f4b]:hover{transform:translateY(-5px)}.timeline-date[data-v-59a82f4b]{background:#333;border-radius:3px;color:#fff;display:inline-block;font-weight:700;margin-bottom:15px;padding:8px 16px}.timeline-body h3[data-v-59a82f4b]{color:#333;font-size:1.2rem;margin:0 0 10px}.timeline-body p[data-v-59a82f4b]{color:#666;line-height:1.5;margin:0}@media (max-width:768px){.hero[data-v-59a82f4b]{align-items:center;background-color:#f9f9f9;display:flex;flex-direction:column;justify-content:center;padding:20px;text-align:center}.logo-container img[data-v-59a82f4b]{height:auto;margin-bottom:20px;margin-top:40px;max-width:80%}.hero-text h1[data-v-59a82f4b]{color:#333;font-size:24px;font-weight:700;margin:10px 0;text-align:center}.hero-text .motto[data-v-59a82f4b]{color:#555;font-size:16px;line-height:1.4;margin:0;text-align:center}.timeline-container[data-v-59a82f4b]:before{left:30px}.timeline-item[data-v-59a82f4b]:before{left:20px}.timeline-item:nth-child(2n) .timeline-content[data-v-59a82f4b],.timeline-item:nth-child(odd) .timeline-content[data-v-59a82f4b]{margin:0 0 0 70px;padding:20px;text-align:left}}',""]),o.locals={},t.exports=o},290:function(t,e,n){"use strict";n(284)},291:function(t,e,n){var o=n(85)((function(i){return i[1]}));o.push([t.i,".welcome-overlay[data-v-165a94fa]{align-items:center;background-color:hsla(0,0%,100%,.95);cursor:pointer;display:flex;flex-direction:column;height:100vh;justify-content:center;left:0;opacity:1;position:fixed;top:0;transform:scale(1);transition:opacity .6s ease,transform .6s ease;width:100%;z-index:1000}.logo[data-v-165a94fa]{animation:logo-bounce-165a94fa 1.2s infinite;max-width:200px;width:30%}.company-name[data-v-165a94fa]{animation:fade-in-165a94fa 1s ease-out forwards;font-size:2em;font-weight:700;margin-top:20px}.fade-enter-active[data-v-165a94fa],.fade-leave-active[data-v-165a94fa]{transition:opacity .6s ease,transform .6s ease}.fade-enter[data-v-165a94fa]{opacity:0;transform:scale(.95)}.fade-leave-to[data-v-165a94fa]{opacity:0;transform:scale(1.05)}@keyframes logo-bounce-165a94fa{0%,to{transform:translateY(0)}50%{transform:translateY(-10px)}}@keyframes fade-in-165a94fa{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.contact-form-overlay[data-v-165a94fa]{align-items:center;background-color:rgba(0,0,0,.5);display:flex;height:100vh;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:1050}.contact-form[data-v-165a94fa]{background:#fff;border-radius:10px;box-shadow:0 4px 8px rgba(0,0,0,.2);max-width:400px;padding:20px;width:90%}.contact-form input[data-v-165a94fa],.contact-form textarea[data-v-165a94fa]{border:1px solid #ccc;border-radius:5px;margin:10px 0;padding:10px;width:100%}.contact-form .form-submit[data-v-165a94fa]{background-color:#007bff;color:#fff;font-weight:700}.contact-form .form-close[data-v-165a94fa],.contact-form .form-submit[data-v-165a94fa]{border:none;border-radius:5px;cursor:pointer;padding:10px;width:100%}.contact-form .form-close[data-v-165a94fa]{background:#ccc;margin-top:10px}.contact-fab[data-v-165a94fa]{background-color:#007bff;border-radius:50%;bottom:20px;box-shadow:0 4px 8px rgba(0,0,0,.2);color:#fff;padding:15px 20px;position:fixed;right:20px;transition:background-color .3s ease}.contact-fab[data-v-165a94fa]:hover{background-color:#0056b3}",""]),o.locals={},t.exports=o},292:function(t,e,n){"use strict";n.r(e);n(32);var o=n(12),r=(n(66),n(1));const l={_origin:"https://api.emailjs.com"},c=(t,e,n)=>{if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class d{constructor(t){this.status=t.status,this.text=t.responseText}}const f=(t,data,e={})=>new Promise(((n,o)=>{const r=new XMLHttpRequest;r.addEventListener("load",(({target:t})=>{const e=new d(t);200===e.status||"OK"===e.text?n(e):o(e)})),r.addEventListener("error",(({target:t})=>{o(new d(t))})),r.open("POST",l._origin+t,!0),Object.keys(e).forEach((t=>{r.setRequestHeader(t,e[t])})),r.send(data)}));var m=(t,e,n,o)=>{const r=o||l._userID;c(r,t,e);const d={lib_version:"3.2.0",user_id:r,service_id:t,template_id:e,template_params:n};return f("/api/v1.0/email/send",JSON.stringify(d),{"Content-type":"application/json"})},v=n(275),h=(n(36),n(63),n(21),n(37),{data:function(){return{achievements:[{year:"2001",title:"Commercial Complex",description:"Designed for Zila Parishad, Begusarai, Bihar."},{year:"2004",title:"Vishwesaraiya Institute",description:"Conceptualized the Institute of Sanitation & Water Academy, Ranchi, Jharkhand."},{year:"2006",title:"City Bus Terminus",description:"Transformed transit experience in Munger, Bihar."},{year:"2008",title:"Seevusagar Ramgulam Statue",description:"First Prize in the Government of Bihar Design Competition."},{year:"2010",title:"Shri Krishna Nagar Housing",description:"First Prize in Housing Design Competition."},{year:"2012",title:"Bihar State Guest House",description:"First Prize in Design Competition."}]}},mounted:function(){var t=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&t.target.classList.add("visible")}))}),{threshold:.2});this.$el.querySelectorAll(".timeline-item").forEach((function(e){return t.observe(e)}))}}),x=(n(288),n(46)),y=Object(x.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"portfolio-content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("section",{staticClass:"achievements"},[e("h2",[t._v("Achievements Timeline")]),t._v(" "),e("div",{staticClass:"timeline-container"},t._l(t.achievements,(function(n){return e("div",{key:n.year,staticClass:"timeline-item"},[e("div",{staticClass:"timeline-content"},[e("div",{staticClass:"timeline-date"},[t._v(t._s(n.year))]),t._v(" "),e("div",{staticClass:"timeline-body"},[e("h3",[t._v(t._s(n.title))]),t._v(" "),e("p",[t._v(t._s(n.description))])])])])})),0)])])}),[function(){var t=this,e=t._self._c;return e("section",{staticClass:"hero"},[e("div",{staticClass:"logo-container"},[e("img",{staticClass:"logo",attrs:{src:"/logo.jpeg",alt:"Company Logo"}})]),t._v(" "),e("div",{staticClass:"hero-text"},[e("h1",[t._v("Janaki Raman Designs")]),t._v(" "),e("p",{staticClass:"motto"},[t._v("Where architecture meets purpose and innovation")])])])},function(){var t=this,e=t._self._c;return e("section",{staticClass:"about-us"},[e("p",[t._v("\n      Established in "),e("strong",[t._v("2000")]),t._v(", Janaki Raman Designs has grown into a name synonymous with excellence in architectural design.\n      With a legacy of crafting impactful spaces, we specialize in designing structures that blend functionality with aesthetic appeal.\n    ")])])}],!1,null,"59a82f4b",null).exports,w={__name:"index",setup:function(t){var e=Object(r.d)(!1),n=Object(r.d)(!1),l=Object(r.c)({name:"",email:"",message:""}),c=function(){n.value=!n.value},d=function(){sessionStorage.getItem("welcomeShown")&&(e.value=!0)},f=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e={name:l.name,email:l.email,message:l.message},t.next=7,m("service_1v20ook","template_xmavmga",e,"FrrVOmajsxXNPXg3a");case 7:alert("Message sent successfully!"),l.name="",l.email="",l.message="",c(),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(0),console.error("Error:",t.t0),alert("Failed to send message. Please try again.");case 18:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(){return t.apply(this,arguments)}}();return Object(r.b)((function(){d()})),{__sfc:!0,fadeOut:e,showContactForm:n,formData:l,toggleContactForm:c,fadeOutOverlay:function(){e.value=!0,sessionStorage.setItem("welcomeShown","true")},checkWelcomeOverlay:d,handleSubmit:f,Header:v.default,Home:y}}},_=w,C=(n(290),Object(x.a)(_,(function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("div",[e("transition",{attrs:{name:"fade"}},[n.fadeOut?t._e():e("div",{staticClass:"welcome-overlay",on:{click:n.fadeOutOverlay}},[e("img",{staticClass:"logo",attrs:{src:"/logo.jpeg",alt:"Company Logo"}}),t._v(" "),e("h1",{staticClass:"company-name"},[t._v("Janaki Raman Designs")])])]),t._v(" "),n.fadeOut?e(n.Header):t._e(),t._v(" "),n.fadeOut?e(n.Home):t._e(),t._v(" "),n.fadeOut?e("button",{staticClass:"fixed right-6 bottom-6 w-14 h-14 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center group z-50",on:{click:n.toggleContactForm}},[e("img",{staticClass:"w-6 h-6 group-hover:scale-110 transition-transform duration-300",attrs:{src:"/icons/message-circle-icon.svg",alt:"Message Icon"}})]):t._e(),t._v(" "),e("Transition",{attrs:{"enter-active-class":"transition duration-300 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-200 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"}},[n.showContactForm?e("div",{staticClass:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},[e("div",{staticClass:"bg-white w-full max-w-md mx-4 rounded-lg shadow-xl"},[e("div",{staticClass:"flex items-center justify-between p-4 border-b border-gray-200"},[e("h2",{staticClass:"text-xl font-semibold text-gray-900"},[t._v("Contact Us")]),t._v(" "),e("button",{staticClass:"p-1 rounded-full hover:bg-gray-100 transition-colors duration-200",on:{click:n.toggleContactForm}},[e("img",{staticClass:"w-5 h-5 text-gray-500",attrs:{src:"/icons/cross.svg",alt:"Close Icon"}})])]),t._v(" "),e("form",{staticClass:"p-4 space-y-4",on:{submit:function(t){return t.preventDefault(),n.handleSubmit.apply(null,arguments)}}},[e("div",{staticClass:"relative"},[e("img",{staticClass:"absolute left-3 top-3 w-5 h-5 text-gray-400",attrs:{src:"/icons/user-icon.svg",alt:"User Icon"}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:n.formData.name,expression:"formData.name"}],staticClass:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200",attrs:{type:"text",placeholder:"Your Name",required:""},domProps:{value:n.formData.name},on:{input:function(e){e.target.composing||t.$set(n.formData,"name",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"relative"},[e("img",{staticClass:"absolute left-3 top-3 w-5 h-5 text-gray-400",attrs:{src:"/icons/account-icon.svg",alt:"Account Icon"}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:n.formData.email,expression:"formData.email"}],staticClass:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200",attrs:{type:"email",placeholder:"Your Email",required:""},domProps:{value:n.formData.email},on:{input:function(e){e.target.composing||t.$set(n.formData,"email",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"relative"},[e("img",{staticClass:"absolute left-3 top-3 w-5 h-5 text-gray-400",attrs:{src:"/icons/message-text-icon.svg",alt:"Message Text Icon"}}),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:n.formData.message,expression:"formData.message"}],staticClass:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 min-h-[120px] resize-none",attrs:{placeholder:"Your Message",required:""},domProps:{value:n.formData.message},on:{input:function(e){e.target.composing||t.$set(n.formData,"message",e.target.value)}}})]),t._v(" "),e("button",{staticClass:"w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2",attrs:{type:"submit"}},[e("img",{staticClass:"w-5 h-5",attrs:{src:"/icons/send-icon.svg",alt:"Send Icon"}}),t._v(" "),e("span",[t._v("Send Message")])])])])]):t._e()])],1)}),[],!1,null,"165a94fa",null));e.default=C.exports;installComponents(C,{Header:n(275).default,Home:n(285).default})}}]);