(function(){"use strict";var a={1738:function(a,n,i){var o=i(9242),e=i(3396);function s(a,n,i,o,s,l){const t=(0,e.up)("MainPage");return(0,e.wg)(),(0,e.j4)(t)}var l=i(7139);const t={class:"main-container"},r={class:"nav-mobile"},c=(0,e._)("span",null,"Nahyun Lee",-1),d={class:"content-wrapper"},u={class:"main-sidebar"},p={class:"main-body"},v={class:"nav"},f={class:"mobile-header-container",style:{display:"flex","flex-direction":"column"}},m={class:"mobile-header"},h=(0,e._)("li",null,"Home",-1),g=(0,e._)("li",null,"About me",-1),_=(0,e._)("li",null,"Portfolio",-1),b=(0,e._)("li",null,"Contact",-1);function w(a,n,i,o,s,w){const k=(0,e.up)("SideBar"),y=(0,e.up)("router-view"),W=(0,e.up)("MainHeader"),x=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("div",t,[(0,e._)("div",r,[c,(0,e._)("i",{class:"fa-solid fa-bars",onClick:n[0]||(n[0]=a=>{s.modal=!0,s.end=!0})})]),(0,e._)("div",d,[(0,e._)("div",u,[(0,e.Wm)(k)]),(0,e._)("div",p,[(0,e.Wm)(y)])]),(0,e._)("div",v,[(0,e.Wm)(W)])]),1==s.modal?((0,e.wg)(),(0,e.iD)("div",{key:0,name:"slide-fade",mode:"out-in",class:(0,l.C_)(["start",{end:!0}])},[(0,e._)("div",f,[(0,e._)("div",null,[(0,e._)("i",{class:"fa-solid fa-xmark",onClick:n[1]||(n[1]=a=>{s.modal=!1,s.end=!1}),style:{float:"right",margin:"30px","font-size":"40px"}})]),(0,e._)("div",m,[(0,e._)("ul",null,[(0,e.Wm)(x,{to:"/",onClick:n[2]||(n[2]=a=>{s.modal=!1})},{default:(0,e.w5)((()=>[h])),_:1}),(0,e.Wm)(x,{to:"/about-me",onClick:n[3]||(n[3]=a=>{s.modal=!1})},{default:(0,e.w5)((()=>[g])),_:1}),(0,e.Wm)(x,{to:"/portfolio",onClick:n[4]||(n[4]=a=>{s.modal=!1})},{default:(0,e.w5)((()=>[_])),_:1}),(0,e.Wm)(x,{to:"/contact",onClick:n[5]||(n[5]=a=>{s.modal=!1})},{default:(0,e.w5)((()=>[b])),_:1})])])])])):(0,e.kq)("",!0)],64)}const k={class:"main-header-wrapper"},y=(0,e._)("i",{class:"fa-solid fa-house header-icon"},null,-1),W=(0,e._)("p",{class:"arrow_box"},"Home",-1),x=(0,e._)("i",{class:"fa-regular fa-user header-icon"},null,-1),C=(0,e._)("i",{class:"fa-regular fa-file-lines header-icon"},null,-1);function P(a,n,i,o,s,l){const t=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("div",k,[(0,e.Wm)(t,{to:"/"},{default:(0,e.w5)((()=>[y,W])),_:1}),(0,e.Wm)(t,{to:"/about-me"},{default:(0,e.w5)((()=>[x])),_:1}),(0,e.Wm)(t,{to:"/portfolio"},{default:(0,e.w5)((()=>[C])),_:1})])}var j={},S=i(89);const M=(0,S.Z)(j,[["render",P]]);var D=M,H=i.p+"img/profile.ed723170.jpg";const O={class:"sidebar-container"},I=(0,e.uE)('<div class="flex-column"><div class="profile-content"><div class="profile-photo"><img src="'+H+'" alt="profile" class="profile-image"></div><div class="profile-title"><h2 class="profile-name font-32">Nahyun Lee</h2><h4 class="profile-job">Web Developer</h4></div></div><div class="social-links"><a href="https://github.com/NahyunLeylaLee" target="_blank"><i class="fa-brands fa-github"></i></a><a href="https://www.linkedin.com/in/nahyun-lee-6458a2113/" target="_blank"><i class="fa-brands fa-linkedin"></i></a><a href="https://www.instagram.com/florence5107" target="_blank"><i class="fa-brands fa-instagram"></i></a></div><div class="contact-me"><a href="mailto:florence5107@gmail.com" class="button-contact-me"><i class="fa-regular fa-envelope"></i> Contact Me </a></div></div><div class="copyright"><p>© 2022 All rights reserved.</p></div>',2),Z=[I];function A(a,n,i,o,s,l){return(0,e.wg)(),(0,e.iD)("div",O,Z)}var N={};const q=(0,S.Z)(N,[["render",A]]);var B=q,L={data(){return{modal:!1,end:!1}},components:{MainHeader:D,SideBar:B}};const U=(0,S.Z)(L,[["render",w]]);var E=U,T={name:"App",components:{MainPage:E}};const Y=(0,S.Z)(T,[["render",s]]);var G=Y,J=i(2483);const K={class:"homepage-wrapper"},z=(0,e._)("h1",{class:"homepage-content"},"Hello, I'm Nahyun Lee",-1),F=[z];function V(a,n,i,o,s,l){return(0,e.wg)(),(0,e.iD)("div",K,F)}var Q={};const R=(0,S.Z)(Q,[["render",V]]);var X=R;const $={class:"portfolio-wrapper"},aa={class:"portfolio-container"},na=(0,e._)("div",{class:"page-title"},[(0,e._)("h2",{class:"font-32"},"Portfolio")],-1),ia={class:"portfolio-list"},oa=(0,e._)("div",{class:"portfolio-item"},[(0,e._)("i",{class:"fa-solid fa-square-arrow-up-right"}),(0,e._)("span",null,"MyHomepage")],-1),ea=(0,e._)("div",{class:"portfolio-item"},[(0,e._)("i",{class:"fa-solid fa-square-arrow-up-right"}),(0,e._)("span",null,"MeetDoc")],-1),sa=(0,e._)("div",{class:"portfolio-item"},[(0,e._)("i",{class:"fa-solid fa-square-arrow-up-right"}),(0,e._)("span",null,"Happy House")],-1),la=(0,e._)("div",{class:"portfolio-item"},[(0,e._)("i",{class:"fa-solid fa-square-arrow-up-right"}),(0,e._)("span",null,"SAMBA")],-1),ta=(0,e._)("div",{class:"portfolio-item"},[(0,e._)("i",{class:"fa-solid fa-square-arrow-up-right"}),(0,e._)("span",null,"Integrated Website")],-1);function ra(a,n,i,o,s,l){const t=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("div",$,[(0,e._)("div",aa,[na,(0,e._)("div",ia,[(0,e.Wm)(t,{to:"/UpdatingPage"},{default:(0,e.w5)((()=>[oa])),_:1}),(0,e.Wm)(t,{to:"/UpdatingPage"},{default:(0,e.w5)((()=>[ea])),_:1}),(0,e.Wm)(t,{to:"/UpdatingPage"},{default:(0,e.w5)((()=>[sa])),_:1}),(0,e.Wm)(t,{to:"/UpdatingPage"},{default:(0,e.w5)((()=>[la])),_:1}),(0,e.Wm)(t,{to:"/UpdatingPage"},{default:(0,e.w5)((()=>[ta])),_:1})])])])}var ca={};const da=(0,S.Z)(ca,[["render",ra]]);var ua=da;const pa={class:"aboutme-wrapper"},va=(0,e.uE)('<div class="aboutme-container"><div class="page-title"><h2 class="font-32">About <span class="main-color">Me</span></h2></div><div class="row"><div class="aboutme-content"><p> Hello, I do love and enjoy programming I&#39;ve usually worked on front-end development, but I can also do back-end since I have 2 years of work experience as a full-stack developer. I am currently looking for web developer position in Canada since I am a Canadian permanent resident. Please feel free to contact me if you have any questions. <br>Thank you! </p></div><div><div class="info-list"><ul><li><span class="title main-color">Name</span><span class="value">Nahyun Lee</span></li><li><span class="title main-color">Address</span><span class="value">Yongin, South Korea</span></li><li><span class="title main-color">E-mail</span><span class="value">florence5107@gmail.com</span></li><li><span class="title main-color">Phone(Korea)</span><span class="value">+82 10 6428 5107</span></li><li><span class="title main-color">Phone(Canada)</span><span class="value">+1 416 857 2799</span></li></ul></div></div><div class="row-bottom"><div class="block-title"><h3>Experience</h3></div><div class="timeline"><div class="container left" style="margin-top:20px;"><div class="content"><h2>2022</h2><p>Samsung Software Academy</p></div></div><div class="container right"><div class="content rightbox"><h2>2021</h2><p>Samsung SDS</p></div></div><div class="container left"><div class="content lastbox"><h2>2019 - 2021</h2><p>Naviworks</p></div></div></div></div><div class="row-bottom row-lastbox"><div class="block-title"><h3>Major <span class="main-color">skills</span></h3></div><div><p>HTML</p><div class="skillbar"><div class="skills html main-color-back"></div></div><p>CSS</p><div class="skillbar"><div class="skills css main-color-back"></div></div><p>JavaScript</p><div class="skillbar"><div class="skills js main-color-back"></div></div><p>Java</p><div class="skillbar"><div class="skills java main-color-back"></div></div><p>Vue.js</p><div class="skillbar"><div class="skills vue main-color-back"></div></div></div></div></div></div>',1),fa=[va];function ma(a,n,i,o,s,l){return(0,e.wg)(),(0,e.iD)("div",pa,fa)}var ha={};const ga=(0,S.Z)(ha,[["render",ma]]);var _a=ga;const ba={class:"updating-wrapper"},wa=(0,e._)("h2",null,"Updating...",-1),ka=(0,e._)("button",{class:"main-color-back"},"GoBack",-1);function ya(a,n,i,o,s,l){const t=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("div",ba,[wa,(0,e.Wm)(t,{to:"/portfolio"},{default:(0,e.w5)((()=>[ka])),_:1})])}var Wa={};const xa=(0,S.Z)(Wa,[["render",ya]]);var Ca=xa;const Pa=(0,e._)("div",{class:"page-title"},[(0,e._)("h2",{class:"font-32"},[(0,e.Uk)("Contact "),(0,e._)("span",{class:"main-color"},"Me")])],-1);function ja(a,n,i,o,s,l){const t=(0,e.up)("SideBar");return(0,e.wg)(),(0,e.iD)(e.HY,null,[Pa,(0,e.Wm)(t)],64)}var Sa={components:{SideBar:B}};const Ma=(0,S.Z)(Sa,[["render",ja]]);var Da=Ma;const Ha=[{path:"/",component:X},{path:"/portfolio",component:ua},{path:"/about-me",component:_a},{path:"/updatingPage",component:Ca},{path:"/contact",component:Da}],Oa=(0,J.p7)({history:(0,J.PO)(),routes:Ha});var Ia=Oa,Za=i(3494),Aa=i(7749),Na=i(8539);Za.vI.add(Na.BC0),(0,o.ri)(G).use(Ia).component("font-awesome-icon",Aa.GN).mount("#app")}},n={};function i(o){var e=n[o];if(void 0!==e)return e.exports;var s=n[o]={exports:{}};return a[o](s,s.exports,i),s.exports}i.m=a,function(){var a=[];i.O=function(n,o,e,s){if(!o){var l=1/0;for(d=0;d<a.length;d++){o=a[d][0],e=a[d][1],s=a[d][2];for(var t=!0,r=0;r<o.length;r++)(!1&s||l>=s)&&Object.keys(i.O).every((function(a){return i.O[a](o[r])}))?o.splice(r--,1):(t=!1,s<l&&(l=s));if(t){a.splice(d--,1);var c=e();void 0!==c&&(n=c)}}return n}s=s||0;for(var d=a.length;d>0&&a[d-1][2]>s;d--)a[d]=a[d-1];a[d]=[o,e,s]}}(),function(){i.n=function(a){var n=a&&a.__esModule?function(){return a["default"]}:function(){return a};return i.d(n,{a:n}),n}}(),function(){i.d=function(a,n){for(var o in n)i.o(n,o)&&!i.o(a,o)&&Object.defineProperty(a,o,{enumerable:!0,get:n[o]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){i.o=function(a,n){return Object.prototype.hasOwnProperty.call(a,n)}}(),function(){i.p="/"}(),function(){var a={143:0};i.O.j=function(n){return 0===a[n]};var n=function(n,o){var e,s,l=o[0],t=o[1],r=o[2],c=0;if(l.some((function(n){return 0!==a[n]}))){for(e in t)i.o(t,e)&&(i.m[e]=t[e]);if(r)var d=r(i)}for(n&&n(o);c<l.length;c++)s=l[c],i.o(a,s)&&a[s]&&a[s][0](),a[s]=0;return i.O(d)},o=self["webpackChunkmyhomepage"]=self["webpackChunkmyhomepage"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=i.O(void 0,[998],(function(){return i(1738)}));o=i.O(o)})();
//# sourceMappingURL=app.91e594d6.js.map