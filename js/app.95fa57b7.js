(function(){var a={1974:function(a,e,i){"use strict";var s=i(9242),o=i(3396);function t(a,e,i,s,t,l){const n=(0,o.up)("MainPage");return(0,o.wg)(),(0,o.j4)(n)}var l=i(7139);const n={class:"main-container"},r={class:"nav-mobile"},c=(0,o._)("span",null,"Nahyun Lee",-1),u={class:"content-wrapper"},d={class:"main-sidebar"},p={class:"main-body"},m={class:"nav"},v={name:"fade"},f={class:"mobile-header"},h=(0,o._)("li",null,"Home",-1),b=(0,o._)("li",null,"About me",-1),g=(0,o._)("li",null,"Portfolio",-1);function w(a,e,i,s,t,w){const _=(0,o.up)("SideBar"),k=(0,o.up)("router-view"),y=(0,o.up)("MainHeader"),S=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",n,[(0,o._)("div",r,[c,(0,o._)("i",{class:"fa-solid fa-bars",onClick:e[0]||(e[0]=(...a)=>w.toggleSidebar&&w.toggleSidebar(...a))})]),(0,o._)("div",u,[(0,o._)("div",d,[(0,o.Wm)(_)]),(0,o._)("div",p,[(0,o.Wm)(k)])]),(0,o._)("div",m,[(0,o.Wm)(y)])]),(0,o._)("div",v,[(0,o._)("div",{class:(0,l.C_)(["mobile-header-container",{showSidebar:t.modal}])},[(0,o._)("div",null,[(0,o._)("i",{class:"fa-solid fa-xmark",onClick:e[1]||(e[1]=(...a)=>w.toggleSidebar&&w.toggleSidebar(...a))})]),(0,o._)("div",f,[(0,o._)("ul",null,[(0,o.Wm)(S,{to:"/",onClick:w.toggleSidebar},{default:(0,o.w5)((()=>[h])),_:1},8,["onClick"]),(0,o.Wm)(S,{to:"/about-me",onClick:w.toggleSidebar},{default:(0,o.w5)((()=>[b])),_:1},8,["onClick"]),(0,o.Wm)(S,{to:"/portfolio",onClick:w.toggleSidebar},{default:(0,o.w5)((()=>[g])),_:1},8,["onClick"])])])],2)])],64)}const _={class:"main-header-wrapper"},k=(0,o._)("i",{class:"fa-solid fa-house header-icon"},null,-1),y=(0,o._)("p",{class:"arrow_box"},"Home",-1),S=(0,o._)("i",{class:"fa-regular fa-user header-icon"},null,-1),j=(0,o._)("i",{class:"fa-regular fa-file-lines header-icon"},null,-1);function C(a,e,i,s,t,l){const n=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",_,[(0,o.Wm)(n,{to:"/"},{default:(0,o.w5)((()=>[k,y])),_:1}),(0,o.Wm)(n,{to:"/about-me"},{default:(0,o.w5)((()=>[S])),_:1}),(0,o.Wm)(n,{to:"/portfolio"},{default:(0,o.w5)((()=>[j])),_:1})])}var L={},M=i(89);const H=(0,M.Z)(L,[["render",C]]);var N=H,x=i(8250);const T={class:"sidebar-container"},D=(0,o.uE)('<div class="flex-column"><div class="profile-content"><div class="profile-photo"><img src="'+x+'" alt="profile" class="profile-image"></div><div class="profile-title"><h2 class="profile-name font-32">Nahyun Lee</h2><h4 class="profile-job">Web Developer</h4></div></div><div class="social-links"><a href="https://github.com/NahyunLeylaLee" target="_blank"><i class="fa-brands fa-github"></i></a><a href="https://www.linkedin.com/in/nahyun-lee-6458a2113/" target="_blank"><i class="fa-brands fa-linkedin"></i></a><a href="https://www.instagram.com/florence5107" target="_blank"><i class="fa-brands fa-instagram"></i></a></div><div class="contact-me"><a href="mailto:florence5107@gmail.com" class="button-contact-me"><i class="fa-regular fa-envelope"></i> Contact Me </a></div></div><div class="copyright"><p>© 2022 All rights reserved.</p></div>',2),O=[D];function W(a,e,i,s,t,l){return(0,o.wg)(),(0,o.iD)("div",T,O)}var P={};const A=(0,M.Z)(P,[["render",W]]);var B=A,$={data(){return{modal:!1,showSidebar:!1}},methods:{toggleSidebar(){this.modal=!this.modal}},components:{MainHeader:N,SideBar:B}};const I=(0,M.Z)($,[["render",w]]);var J=I,Z={name:"App",components:{MainPage:J}};const E=(0,M.Z)(Z,[["render",t]]);var z=E,K=i(2483);const U={class:"homepage-wrapper"},V=(0,o._)("div",{class:"home-desktop"},[(0,o._)("h1",{class:"homepage-content"},[(0,o.Uk)("Hello, "),(0,o._)("br"),(0,o.Uk)("I'm Nahyun Lee")])],-1),F={class:"home-mobile"};function Y(a,e,i,s,t,l){const n=(0,o.up)("SideBar");return(0,o.wg)(),(0,o.iD)("div",U,[V,(0,o._)("div",F,[(0,o.Wm)(n)])])}var q={components:{SideBar:B}};const G=(0,M.Z)(q,[["render",Y]]);var Q=G;const R={class:"portfolio-wrapper"},X={class:"portfolio-container"},aa=(0,o._)("div",{class:"page-title"},[(0,o._)("h2",{class:"font-32"},"Portfolio")],-1),ea={class:"portfolio-list"},ia={class:"portfolio-item"},sa=(0,o._)("i",{class:"fa-solid fa-square-arrow-up-right"},null,-1);function oa(a,e,i,s,t,n){const r=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",R,[(0,o._)("div",X,[aa,(0,o._)("div",ea,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.data,((a,e)=>((0,o.wg)(),(0,o.j4)(r,{to:`/portfolio/${e}`,class:"sub-color",key:e},{default:(0,o.w5)((()=>[(0,o._)("div",ia,[sa,(0,o._)("span",null,(0,l.zw)(a.title),1)])])),_:2},1032,["to"])))),128))])])])}var ta=[{id:0,title:"My Homepage",summary:"This is Nahyun Lee's Homepage",skills:"HTML, CSS, JavaScript, Vue.js",team:"Nahyun Lee",url:"https://nahyunleylalee.github.io"},{id:1,title:"MeetDoc",summary:"This is a website providing medical services to people who doesn't have an easy access to hospital. Patients can make an appointment online and have a video call for prescriptions. Doctors can update daily schedules so they can manage their office hours easily.",skills:"HTML, CSS, JavaScript, Vue.js, Bootstrap v5.0",team:"Nahyun Lee and 4 members",url:"updating.."},{id:2,title:"Happy House",summary:"This is a website providing real estate information of Korea. People can search apartment by location and apartment name. It also provides information on a map so people can check the location at the same time.",skills:"HTML, CSS, JavaScript, Vue.js",team:"Nahyun Lee and 1 member",url:"https://www.youtube.com/watch?v=TUdBZVj_vsw"},{id:3,title:"SAMBA",summary:"This is a dashboard website providing Samsung's internal network status.",skills:"HTML, CSS, JavaScript, Java, SpringBoot, SQL",team:"Nahyun Lee and 9 members",url:"N/A, Confidential"},{id:4,title:"Integrated Website",summary:"This is an integrated website providing 7 different military systems of Korea.",skills:"HTML, CSS, JavaScript, Java, SpringBoot, SQL",team:"Nahyun Lee and 7 members",url:"N/A, Confidential"}],la={data(){return{data:ta}}};const na=(0,M.Z)(la,[["render",oa]]);var ra=na;const ca={class:"aboutme-wrapper"},ua=(0,o.uE)('<div class="aboutme-container"><div class="page-title"><h2 class="font-32">About <span class="main-color">Me</span></h2></div><div class="row"><div class="aboutme-content"><p class="sub-color"> Hello, I do love and enjoy programming. I&#39;ve usually worked on front-end development, but I can also do back-end since I have 2 years of work experience as a full-stack developer. I am currently looking for web developer position in Canada since I am a Canadian permanent resident. Please feel free to contact me if you have any questions. <br>Thank you! </p></div><div><div class="info-list"><ul class="sub-color"><li><span class="title main-color">Name</span><span class="value">Nahyun Lee</span></li><li><span class="title main-color">Address</span><span class="value">Yongin, South Korea</span></li><li><span class="title main-color">E-mail</span><span class="value">florence5107@gmail.com</span></li><li><span class="title main-color">Phone(Korea)</span><span class="value">+82 10 6428 5107</span></li><li><span class="title main-color">Phone(Canada)</span><span class="value">+1 416 857 2799</span></li></ul></div></div><div class="row-bottom"><div class="block-title"><h3>Experience</h3></div><section class="timeline-vertical"><ul><li class="timeline-first"><div><p class="timeline-job-title">Front-end Developer</p><p class="timeline-company sub-color">Samsung Software Academy</p><time class="sub-color">2022</time></div></li><li><div><p class="timeline-job-title">Project Management Assistant</p><p class="timeline-company sub-color">Samsung SDS</p><time class="sub-color">2021</time></div></li><li class="timeline-last"><div><p class="timeline-job-title">Full-stack Developer</p><p class="timeline-company sub-color">Naviworks</p><time class="sub-color">2019</time></div></li></ul></section></div><div class="row-bottom row-lastbox"><div class="block-title"><h3>Major <span class="main-color">skills</span></h3></div><div class="sub-color"><p>HTML</p><div class="skillbar"><div class="skills html main-color-back"></div></div><p>CSS</p><div class="skillbar"><div class="skills css main-color-back"></div></div><p>JavaScript</p><div class="skillbar"><div class="skills js main-color-back"></div></div><p>Java</p><div class="skillbar"><div class="skills java main-color-back"></div></div><p>Vue.js</p><div class="skillbar"><div class="skills vue main-color-back"></div></div></div></div></div></div>',1),da=[ua];function pa(a,e,i,s,t,l){return(0,o.wg)(),(0,o.iD)("div",ca,da)}var ma={};const va=(0,M.Z)(ma,[["render",pa]]);var fa=va;const ha={class:"detail-wrapper"},ba={class:"page-title"},ga={class:"font-32"},wa={class:"portfolio-photo"},_a=["src","alt"],ka={class:"info-list portfolio-detail"},ya={class:"sub-color"},Sa=(0,o._)("h3",{class:"title main-color"},"Summary",-1),ja={class:"value"},Ca=(0,o._)("h3",{class:"title main-color"},"Skills",-1),La={class:"value"},Ma=(0,o._)("h3",{class:"title main-color"},"Team",-1),Ha={class:"value"},Na=(0,o._)("h3",{class:"title main-color"},"url/youtube",-1),xa=["href"],Ta=(0,o._)("button",{class:"main-color-back"},"GoBack",-1);function Da(a,e,s,t,n,r){const c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",ha,[(0,o._)("div",ba,[(0,o._)("h2",ga,(0,l.zw)(n.data[this.$route.params.id].title),1)]),(0,o._)("div",wa,[(0,o._)("img",{src:i(4026)(`./${this.$route.params.id}.jpg`),alt:n.data[this.$route.params.id].title,class:"portfolio-image"},null,8,_a)]),(0,o._)("div",ka,[(0,o._)("ul",ya,[(0,o._)("li",null,[Sa,(0,o._)("span",ja,(0,l.zw)(n.data[this.$route.params.id].summary),1)]),(0,o._)("li",null,[Ca,(0,o._)("span",La,(0,l.zw)(n.data[this.$route.params.id].skills),1)]),(0,o._)("li",null,[Ma,(0,o._)("span",Ha,(0,l.zw)(n.data[this.$route.params.id].team),1)]),(0,o._)("li",null,[Na,(0,o._)("a",{href:`${n.data[this.$route.params.id].url}`,class:"value",target:"_blank"},(0,l.zw)(n.data[this.$route.params.id].url),9,xa)])])]),(0,o.Wm)(c,{to:"/portfolio"},{default:(0,o.w5)((()=>[Ta])),_:1})])}var Oa={data(){return{data:ta}}};const Wa=(0,M.Z)(Oa,[["render",Da]]);var Pa=Wa;const Aa=[{path:"/",component:Q},{path:"/portfolio",component:ra},{path:"/about-me",component:fa},{path:"/portfolio/:id",component:Pa}],Ba=(0,K.p7)({history:(0,K.r5)(),routes:Aa});var $a=Ba,Ia=i(3494),Ja=i(7749),Za=i(8539);Ia.vI.add(Za.BC0),(0,s.ri)(z).use($a).component("font-awesome-icon",Ja.GN).mount("#app")},4026:function(a,e,i){var s={"./0.jpg":636,"./1.jpg":7363,"./2.jpg":3964,"./3.jpg":6031,"./4.jpg":5741,"./profile.jpg":8250};function o(a){var e=t(a);return i(e)}function t(a){if(!i.o(s,a)){var e=new Error("Cannot find module '"+a+"'");throw e.code="MODULE_NOT_FOUND",e}return s[a]}o.keys=function(){return Object.keys(s)},o.resolve=t,a.exports=o,o.id=4026},636:function(a,e,i){"use strict";a.exports=i.p+"img/0.f27b2ad2.jpg"},7363:function(a,e,i){"use strict";a.exports=i.p+"img/1.d08777a3.jpg"},3964:function(a,e,i){"use strict";a.exports=i.p+"img/2.e11c45a3.jpg"},6031:function(a,e,i){"use strict";a.exports=i.p+"img/3.f39f6e91.jpg"},5741:function(a,e,i){"use strict";a.exports=i.p+"img/4.fafcf474.jpg"},8250:function(a,e,i){"use strict";a.exports=i.p+"img/profile.ed723170.jpg"}},e={};function i(s){var o=e[s];if(void 0!==o)return o.exports;var t=e[s]={exports:{}};return a[s](t,t.exports,i),t.exports}i.m=a,function(){var a=[];i.O=function(e,s,o,t){if(!s){var l=1/0;for(u=0;u<a.length;u++){s=a[u][0],o=a[u][1],t=a[u][2];for(var n=!0,r=0;r<s.length;r++)(!1&t||l>=t)&&Object.keys(i.O).every((function(a){return i.O[a](s[r])}))?s.splice(r--,1):(n=!1,t<l&&(l=t));if(n){a.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}t=t||0;for(var u=a.length;u>0&&a[u-1][2]>t;u--)a[u]=a[u-1];a[u]=[s,o,t]}}(),function(){i.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return i.d(e,{a:e}),e}}(),function(){i.d=function(a,e){for(var s in e)i.o(e,s)&&!i.o(a,s)&&Object.defineProperty(a,s,{enumerable:!0,get:e[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){i.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){i.p="/"}(),function(){var a={143:0};i.O.j=function(e){return 0===a[e]};var e=function(e,s){var o,t,l=s[0],n=s[1],r=s[2],c=0;if(l.some((function(e){return 0!==a[e]}))){for(o in n)i.o(n,o)&&(i.m[o]=n[o]);if(r)var u=r(i)}for(e&&e(s);c<l.length;c++)t=l[c],i.o(a,t)&&a[t]&&a[t][0](),a[t]=0;return i.O(u)},s=self["webpackChunkmyhomepage"]=self["webpackChunkmyhomepage"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=i.O(void 0,[998],(function(){return i(1974)}));s=i.O(s)})();
//# sourceMappingURL=app.95fa57b7.js.map