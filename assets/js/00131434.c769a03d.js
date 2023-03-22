"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[5551],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),f=a,m=c["".concat(p,".").concat(f)]||c[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},16:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"Uppy 1.0: Your best friend in file uploading",date:new Date("2019-04-25T00:00:00.000Z"),authors:["arturi"],image:"https://uppy.io/img/blog/1.0/uppy-dashboard-1.png",published:!0,slug:"2019/04/1.0"},i=void 0,l={permalink:"/blog/2019/04/1.0",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2019-04-1.0.md",source:"@site/blog/2019-04-1.0.md",title:"Uppy 1.0: Your best friend in file uploading",description:"Today, after three years of development, we are launching version 1.0 of Uppy,",date:"2019-04-25T00:00:00.000Z",formattedDate:"April 25, 2019",tags:[],readingTime:9.525,hasTruncateMarker:!0,authors:[{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"}],frontMatter:{title:"Uppy 1.0: Your best friend in file uploading",date:"2019-04-25T00:00:00.000Z",authors:["arturi"],image:"https://uppy.io/img/blog/1.0/uppy-dashboard-1.png",published:!0,slug:"2019/04/1.0"},prevItem:{title:"Uppy 1.3: Accessibility and performance, new languages",permalink:"/blog/2019/08/1.3"},nextItem:{title:"Day 30",permalink:"/blog/2019/04/liftoff/30"}},p={authorsImageUrls:[void 0]},s=[{value:"A little history",id:"a-little-history",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Today, after three years of development, we are launching version 1.0 of Uppy,\nour file uploader for web browsers."),(0,a.kt)("img",{src:"/img/blog/1.0/uppy-dashboard-1.png"}),(0,a.kt)("h2",{id:"a-little-history"},"A little history"),(0,a.kt)("p",null,"Three years ago, Transloadit was ready to replace their jQuery-based file\nuploading & processing plugin for browsers with something more modern. They\nposted a ",(0,a.kt)("a",{parentName:"p",href:"https://transloadit.com/jobs/2015-10-front-end-developer/"},"job ad")," in\nsearch for people to build it:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In general, we\u2019re looking for polished, well tested, carefully crafted\nproducts that are delightful to work with and use. So for this job it\u2019s not\nonly important that you know JavaScript, but also how to make things look\nstunning and work well for end users."),(0,a.kt)("p",{parentName:"blockquote"},"At your disposal are time, focus, and the core team ready to provide feedback,\nguidance, and anything else you need.")),(0,a.kt)("p",null,"Shortly after, I saw a retweet of this vacancy come across my time line and I\ndecided to apply. That, in a nutshell, is how I got involved with Uppy in the\nearliest stages of the project."),(0,a.kt)("p",null,"Initially, the idea was to build a proprietary uploader that would work\nexclusively with Transloadit\u2019s commercial service, but we quickly turned around\non it. We felt our version of a file uploader could have a real impact if we\nmade it more widely available. So, just like Transloadit had done before with\n",(0,a.kt)("a",{parentName:"p",href:"https://tus.io/"},"Tus"),", we decided to make Uppy an open source solution \u2014 free\nfor anyone to use and hack on. Transloadit support became an optional plugin."),(0,a.kt)("p",null,"Three years,\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/stargazers"},"16.000 stargazers"),", getting\nfeatured on\n",(0,a.kt)("a",{parentName:"p",href:"https://www.smashingmagazine.com/the-smashing-newsletter/smashing-newsletter-issue-197/"},"Smashing Magazine"),",\n",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/JavaScriptDaily/status/950348390268919809"},"JavaScript Daily"),",\n",(0,a.kt)("a",{parentName:"p",href:"https://www.producthunt.com/posts/uppy-io"},"Product Hunt"),", and\n",(0,a.kt)("a",{parentName:"p",href:"https://survivejs.com/blog/uppy-interview/"},"SurviveJS"),", and a thriving\ncommunity later\xa0\u2014 and we could not be happier to finally launch Uppy 1.0!"))}d.isMDXComponent=!0}}]);