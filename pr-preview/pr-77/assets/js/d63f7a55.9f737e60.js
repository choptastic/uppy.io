"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[1389],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(a),m=n,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return a?o.createElement(g,p(p({ref:t},u),{},{components:a})):o.createElement(g,p({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,p=new Array(r);p[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,p[1]=i;for(var l=2;l<r;l++)p[l]=a[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2225:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=a(7462),n=(a(7294),a(3905));const r={title:"Uppy 0.30: Introducing Robodog",date:new Date("2019-03-06T00:00:00.000Z"),author:"renee",image:"https://uppy.io/img/blog/0.30/robodog-assemble.jpg",published:!0,slug:"2019/03/0.30"},p=void 0,i={permalink:"/uppy.io/pr-preview/pr-77/blog/2019/03/0.30",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2019-03-0.30.md",source:"@site/blog/2019-03-0.30.md",title:"Uppy 0.30: Introducing Robodog",description:"In 0.30, we are introducing a new friend for Uppy \u2014 the Robodog.",date:"2019-03-06T00:00:00.000Z",formattedDate:"March 6, 2019",tags:[],readingTime:3.325,hasTruncateMarker:!0,authors:[{name:"renee"}],frontMatter:{title:"Uppy 0.30: Introducing Robodog",date:"2019-03-06T00:00:00.000Z",author:"renee",image:"https://uppy.io/img/blog/0.30/robodog-assemble.jpg",published:!0,slug:"2019/03/0.30"},prevItem:{title:"Day 1",permalink:"/uppy.io/pr-preview/pr-77/blog/2019/03/liftoff/01"},nextItem:{title:"Uppy 0.29: separate Core and Plugin styles, React Native in tus-js-client",permalink:"/uppy.io/pr-preview/pr-77/blog/2018/12/0.29"}},s={authorsImageUrls:[void 0]},l=[{value:"Robodog",id:"robodog",level:2},{value:"Dashboard Improvements",id:"dashboard-improvements",level:2},{value:"Progress or no progress",id:"progress-or-no-progress",level:2},{value:"Upload Success",id:"upload-success",level:2},{value:"Changelog",id:"changelog",level:2}],u={toc:l},d="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In ",(0,n.kt)("inlineCode",{parentName:"p"},"0.30"),", we are introducing a new friend for Uppy \u2014 the Robodog."),(0,n.kt)("img",{src:"/img/blog/0.30/robodog-assemble.jpg"}),(0,n.kt)("small",null,"Robodog: easy to assemble"),(0,n.kt)("h2",{id:"robodog"},"Robodog"),(0,n.kt)("p",null,"Uppy is developed by ",(0,n.kt)("a",{parentName:"p",href:"https://transloadit.com"},"Transloadit"),". Transloadit is the\nSwiss Army Knife for your files: importing, resizing, cropping and watermarking\nimages, making GIFs, transcoding videos, extracting thumbnails, generating audio\nwaveforms, and so much more \u2014 all in a single service. Uppy has a similarly\nlarge feature set in dozens of plugins, but because of that it can be\ncomplicated to wire everything up for the best experience."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://uppy.io/docs/robodog/"},"Robodog")," is a new Uppy-based library that has\nbeen trained to work with Transloadit. It includes three components:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://uppy.io/docs/robodog/picker/"},"File picker"),", using the Dashboard\nplugin you know and love for the modal UI, with support for imports from\nthird-party services."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://uppy.io/docs/robodog/form/"},"Form"),": integration with your existing\nHTML forms. Files will be uploaded to Transloadit, and the form will submit\nJSON information about the files and encoding results."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://uppy.io/docs/robodog/upload/"},"Upload"),": one-line programmatic uploads\n\u2014 call ",(0,n.kt)("inlineCode",{parentName:"li"},"transloadit.upload(files, opts)")," and get an array of results back.")),(0,n.kt)("center",null,(0,n.kt)("img",{src:"https://media.giphy.com/media/Eq7T3GwDAlggE/giphy.gif"})),(0,n.kt)("p",null,"Here\u2019s a demo:"),(0,n.kt)("figure",{class:"wide"},(0,n.kt)("p",{class:"codepen","data-height":"600","data-theme-id":"light","data-border-color":"#EB2177","data-default-tab":"js,result","data-user":"uppy","data-slug-hash":"gEgPav",style:{height:"600px",boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid black",margin:"1em 0",padding:"1em"},"data-pen-title":"Robodog: resizing and optimizing your avatar"},(0,n.kt)("span",null,"See the Pen ",(0,n.kt)("a",{href:"https://codepen.io/uppy/pen/gEgPav/"},"Robodog: resizing and optimizing your avatar")," by Uppy File Uploader (",(0,n.kt)("a",{href:"https://codepen.io/uppy"},"@uppy"),") on ",(0,n.kt)("a",{href:"https://codepen.io"},"CodePen"),".")),(0,n.kt)("script",{async:!0,src:"https://static.codepen.io/assets/embed/ei.js"})),(0,n.kt)("p",null,"You can install Robodog from NPM:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @uppy/robodog --save\n")),(0,n.kt)("p",null,"Or import it by using an HTML script tag:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<link\n    rel="stylesheet"\n    href="https://releases.transloadit.com/uppy/v0.30.3/robodog.min.css"\n/>\n<script src="https://releases.transloadit.com/uppy/v0.30.3/robodog.min.js"><\/script>\n')),(0,n.kt)("center",null,(0,n.kt)("img",{src:"https://media.giphy.com/media/MqGA1Za9ar6lG/giphy.gif"})),(0,n.kt)("h2",{id:"dashboard-improvements"},"Dashboard Improvements"),(0,n.kt)("p",null,"As usual, we are making constant iterations and improvements to the Dashboard\nplugin. Accessibility has been improved, we\u2019ve updated and fixed some icons,\nbreadcrumbs in remote providers, and the issue with ",(0,n.kt)("inlineCode",{parentName:"p"},"browserBackButton")," and\nmultiple modals."),(0,n.kt)("h2",{id:"progress-or-no-progress"},"Progress or no progress"),(0,n.kt)("p",null,"We\u2019ve improved how the StatusBar behaves when no progress reporting is available\n(which is\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/1184"},"the case for MS Edge"),"):"),(0,n.kt)("img",{src:"/img/blog/0.30/unknown-progress.gif"}),(0,n.kt)("h2",{id:"upload-success"},"Upload Success"),(0,n.kt)("p",null,"\u26a0\ufe0f Breaking"),(0,n.kt)("p",null,"We\u2019ve changed ",(0,n.kt)("a",{parentName:"p",href:"https://uppy.io/docs/uppy/#upload-success"},(0,n.kt)("inlineCode",{parentName:"a"},"upload-success"))," and\n",(0,n.kt)("a",{parentName:"p",href:"https://uppy.io/docs/uppy/#upload-error"},(0,n.kt)("inlineCode",{parentName:"a"},"upload-error"))," signatures."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"uppy.on('upload-success', (file, responseObject) => {\n    // (depending on the uploader plugin used, it might contain\n    // less info, the example is for @uppy/xhr-upload)\n    // responseObject = {\n    //   status, // HTTP status code (0, 200, 300)\n    //   body, // response body\n    //   uploadURL // the file url, if it was returned\n    // }\n});\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"uppy.on('upload-error', (file, responseObject) => {\n    // responseObject = {\n    //   status, // HTTP status code (0, 200, 300)\n    //   body // response body\n    // }\n});\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://uppy.io/docs/uppy/"},"See the docs")," and\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/1138"},"PR #1138")," for more details."),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"@uppy/robodog: \ud83d\udce3\u26a0\ufe0f Add Robodog \u2014 Transloadit browser SDK (#1135 /\n@goto-bus-stop)"),(0,n.kt)("li",{parentName:"ul"},"@uppy/dashboard: fixed issue with ",(0,n.kt)("inlineCode",{parentName:"li"},"browserBackButton")," history and multiple\nmodals (#1258 / @goto-bus-stop, @arturi)"),(0,n.kt)("li",{parentName:"ul"},"@uppy/core: Set response in Core rather than in upload plugins (#1138 /\n@arturi)"),(0,n.kt)("li",{parentName:"ul"},"@uppy/core: Don\u2019t emit a complete event if an upload has been canceled (#1271\n/ @arturi)"),(0,n.kt)("li",{parentName:"ul"},"@uppy/companion: Support Redis option (auth_pass, etc...) (#1215 /\n@tranvansang)"),(0,n.kt)("li",{parentName:"ul"},"@uppy/companion: Sanitize text before adding to html (f77a102 /\n@ifedapoolarewaju)"),(0,n.kt)("li",{parentName:"ul"},"@uppy/dashboard: Update pause-resume-cancel icons (#1241 / @arturi, @nqst)"),(0,n.kt)("li",{parentName:"ul"},"@uppy/dashboard: Fix issues with multiple modals (#1258 / @goto-bus-stop,\n@arturi)"),(0,n.kt)("li",{parentName:"ul"},"@uppy/dashboard: Dashboard ui fixes: fix icon animation jiggling, inherit\nfont, allow overriding outline, fix breadcrumbs, bug with x button being\nstuck, fix an issue with long note margin on mobile (#1279 / @arturi)"),(0,n.kt)("li",{parentName:"ul"},"@uppy/provider-views: update instagram nextPagePath after every fetch (25e31e5\n/ @ifedapoolarewaju)"),(0,n.kt)("li",{parentName:"ul"},"@uppy/react: Allow changing instance in ",(0,n.kt)("inlineCode",{parentName:"li"},"uppy")," prop (#1247 / @goto-bus-stop)"),(0,n.kt)("li",{parentName:"ul"},"@uppy/react: Typescript: Make DashboardModal.target prop optional (#1254 /\n@mattes3)"),(0,n.kt)("li",{parentName:"ul"},"@uppy/aws-s3: Use user-provided filename / type for uploaded object, fixes\n#1238 (#1257 / @goto-bus-stop)"),(0,n.kt)("li",{parentName:"ul"},"@uppy/tus: Update to ",(0,n.kt)("inlineCode",{parentName:"li"},"tus-js-client@1.6.0")," with React Native support (#1250 /\n@arturi)"),(0,n.kt)("li",{parentName:"ul"},"build: Improve dev npm script: use Parcel for bundled example, re-build lib\nautomatically, don\u2019t open browser and no ghosts mode, start companion when\ndeveloping (but there\u2019s optional npm run dev:no-companion) (#1280 / @arturi)")))}c.isMDXComponent=!0}}]);