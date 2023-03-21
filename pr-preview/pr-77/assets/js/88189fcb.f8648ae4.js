"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[9007],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(a),h=r,c=d["".concat(p,".").concat(h)]||d[h]||m[h]||i;return a?n.createElement(c,o(o({ref:t},u),{},{components:a})):n.createElement(c,o({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3352:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={title:"Uppy 1.3: Accessibility and performance, new languages",date:new Date("2019-08-05T00:00:00.000Z"),authors:["arturi"],published:!0,slug:"2019/08/1.3"},o=void 0,l={permalink:"/uppy.io/pr-preview/pr-77/blog/2019/08/1.3",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2019-08-1.3.md",source:"@site/blog/2019-08-1.3.md",title:"Uppy 1.3: Accessibility and performance, new languages",description:"Hi there! We are back after a period of silence following the",date:"2019-08-05T00:00:00.000Z",formattedDate:"August 5, 2019",tags:[],readingTime:7.19,hasTruncateMarker:!0,authors:[{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"}],frontMatter:{title:"Uppy 1.3: Accessibility and performance, new languages",date:"2019-08-05T00:00:00.000Z",authors:["arturi"],published:!0,slug:"2019/08/1.3"},prevItem:{title:"Uppy 1.5: Facebook and OneDrive (beta) support, upload cancellation",permalink:"/uppy.io/pr-preview/pr-77/blog/2019/10/1.5"},nextItem:{title:"Uppy 1.0: Your best friend in file uploading",permalink:"/uppy.io/pr-preview/pr-77/blog/2019/04/1.0"}},p={authorsImageUrls:[void 0]},s=[{value:"Accessibility",id:"accessibility",level:2},{value:"Dashboard performance improvements",id:"dashboard-performance-improvements",level:2},{value:"Logger",id:"logger",level:2},{value:"Thumbnails rotated correctly",id:"thumbnails-rotated-correctly",level:2},{value:"Progress improvements",id:"progress-improvements",level:2},{value:"Drag and drop",id:"drag-and-drop",level:2},{value:"Uploaders",id:"uploaders",level:2},{value:"Localization",id:"localization",level:2},{value:"Robodog",id:"robodog",level:2},{value:"Build",id:"build",level:2},{value:"Website and docs",id:"website-and-docs",level:2},{value:"Companion",id:"companion",level:2},{value:"Misc",id:"misc",level:2}],u={toc:s},d="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Hi there! We are back after a period of silence following the\n",(0,r.kt)("a",{parentName:"p",href:"https://uppy.io/blog/2019/04/1.0/"},"Uppy 1.0 release")," in the end of April. It\nwas pretty well received by the commnunity and press: we hit the front pages of\nHacker News, ",(0,r.kt)("a",{parentName:"p",href:"https://www.producthunt.com/posts/uppy-1-0/"},"Product Hunt")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/javascript/comments/bhkx5k/uppy_10_your_best_friend_in_file_uploading/"},"Reddit"),".\nWe then started trending and gained over 20,000 stargazers on GitHub, got\nmentioned by\n",(0,r.kt)("a",{parentName:"p",href:"https://mobile.twitter.com/smashingmag/status/1097870169043546112"},"Smashing Magazine"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/JavaScriptDaily/status/1122935583603556352"},"JavaScript Daily"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://javascriptweekly.com/issues/434"},"JavaScript Weekly"),". It\u2019s been a\ncrazy ride! We\u2019d like to thank all our contributors and users for their\ncontinued support."),(0,r.kt)("p",null,"It was not all self reflection and celebrations, though, in Uppy Remote\nHeadquaters\u2122 following the ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0")," launch. After some vacation time, we quickly\ngot back to work, releasing Uppy ",(0,r.kt)("inlineCode",{parentName:"p"},"1.1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"1.2")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"1.3"),". These updates address a\nlot of issues raised by the community and the team."),(0,r.kt)("p",null,"This post highlights the most important and exciting changes from those\nreleases: accessibility and performance, thumbnails rotatation, new logger,\nprogress and uploader improvements, Robodog and Companion updates, new languages\nand more."),(0,r.kt)("h2",{id:"accessibility"},"Accessibility"),(0,r.kt)("p",null,"Our new team member, Evgenia, has been on a roll and together with Artur and\nAlex, she has been working hard on improving accessiblity in Uppy. Evgenia has\ncome up with something called \u201csuperfocus\u201d, which makes sure focus stays on the\nmost relevant button or field in the current view. The ",(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/provider-views"),"\nlayouts have been refactored so that checkboxes and labels are accessible. Focus\nstyles have also been improved."),(0,r.kt)("video",{alt:"Demo video showing Uppy focus management in action",muted:!0,autoplay:!0,loop:!0},(0,r.kt)("source",{src:"/img/blog/1.3/uppy-focus-demo.webm",type:"video/webm"}),(0,r.kt)("source",{src:"/img/blog/1.3/uppy-focus-demo.mp4",type:"video/mp4"})),(0,r.kt)("p",null,"Other notable accessiblity fixes and improvements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An \u201cAdd more\u201d caption near the + button has been added to the desktop version\nof Uppy"),(0,r.kt)("li",{parentName:"ul"},"\u201cCopy link\u201d & \u201cEdit\u201d links have been replaced with icons"),(0,r.kt)("li",{parentName:"ul"},"All SVGs are now not focusable in IE11"),(0,r.kt)("li",{parentName:"ul"},"Pasting works while we\u2019re focused on buttons"),(0,r.kt)("li",{parentName:"ul"},"Focus is not lost when state is updated in filter in provider-views or when\nediting file meta"),(0,r.kt)("li",{parentName:"ul"},"Selected checkboxes now persist when moving between folders")),(0,r.kt)("p",null,"\u26a0\ufe0f ",(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/provider-views")," translation strings have been moved from Dashboard to\nCore. This eliminates a dependency of provider-views upon Dashboard\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/1712"},"#1712"),"."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/1507"},"#1507"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/1574"},"#1574")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/1656"},"#1656")," for more details."),(0,r.kt)("h2",{id:"dashboard-performance-improvements"},"Dashboard performance improvements"),(0,r.kt)("p",null,"Ren\xe9e attacked performance problems in the Dashboard when adding many hundreds\nof files. Previously, we naively rerendered the entire file list when ",(0,r.kt)("em",{parentName:"p"},"any")," file\nhad a change. Now, only the changed file rerenders:"),(0,r.kt)("p",null,"Before:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1006268/59605307-ce67f580-910e-11e9-992a-6e0c3c2a7570.gif",alt:"slow"})),(0,r.kt)("p",null,"After:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1006268/59605354-e3dd1f80-910e-11e9-9cb3-1b7339650959.gif",alt:"fast"})),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/1671"},"#1671")," for more details. As\nyou can see, there are still some laggy interactions \u2014 expect more improvements\nin future releases!"),(0,r.kt)("h2",{id:"logger"},"Logger"),(0,r.kt)("p",null,"We\u2019ve added an option to supply a ",(0,r.kt)("inlineCode",{parentName:"p"},"logger")," object with ",(0,r.kt)("inlineCode",{parentName:"p"},"debug"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"warn")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"error")," methods, so you can use a custom logging solution with Uppy. Check out\n",(0,r.kt)("a",{parentName:"p",href:"https://uppy.io/docs/uppy/#logger"},"the docs")," for more information."),(0,r.kt)("p",null,"In the future, past 2.0, the ",(0,r.kt)("inlineCode",{parentName:"p"},"logger: Uppy.debugLogger")," option is going to\nreplace ",(0,r.kt)("inlineCode",{parentName:"p"},"debug: true"),". The latter will be kept for backwards compatibility for\nnow."),(0,r.kt)("p",null,"\u26a0\ufe0f Since ",(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/core@1.2"),", the default logger has switched to ",(0,r.kt)("inlineCode",{parentName:"p"},"console.debug"),"\nfrom ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log")," by default. You might need to change settings in your\nbrowser\u2019s devtools to see Uppy logs!"),(0,r.kt)("p",null,"Versions of each Uppy plugin and Core are now also logged for easier debugging."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/1661"},"#1661")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/1640"},"#1640")," for more details."),(0,r.kt)("h2",{id:"thumbnails-rotated-correctly"},"Thumbnails rotated correctly"),(0,r.kt)("p",null,"Before this change, when you added a file to Uppy from a mobile device, you\nwould sometimes see the preview image sideways. This was because we didn\u2019t\naccount for EXIF rotation metadata when generating thumbnails with\n",(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/thumbnail-generator"),". But now, thanks to\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Botz"},"@Botz"),", we do! See\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/1661"},"#1532"),"."),(0,r.kt)("h2",{id:"progress-improvements"},"Progress improvements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Status Bar now shows the correct total size of the upload when some files\nhave already finished, instead of jumping down\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1685"},"#1685"),"."),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where progress could jump to bizarrely high values (like 1038%)\nwhile uploading files that don\u2019t have a known size (e.g., pictures from\nInstagram) ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1610"},"#1610"),"."),(0,r.kt)("li",{parentName:"ul"},"We\u2019ve moved from the ",(0,r.kt)("inlineCode",{parentName:"li"},"prettier-bytes")," package into ",(0,r.kt)("inlineCode",{parentName:"li"},"@uppy/utils"),", and divide\nby ",(0,r.kt)("inlineCode",{parentName:"li"},"1024")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"1000")," to justify ",(0,r.kt)("inlineCode",{parentName:"li"},"KB")," vs ",(0,r.kt)("inlineCode",{parentName:"li"},"kB"),(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1732"},"#1732"),".")),(0,r.kt)("h2",{id:"drag-and-drop"},"Drag and drop"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Drag and drop has been refactored internally in both the Dashboard and\nDragDrop plugins. This means a more robust and cross-browser implementation,\nwith a fancy \u201cdrop files here\u201d screen when you drag over the Dashboard."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"@uppy/drag-drop")," plugin now renders an entirely clickable DnD area.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2690).Z,width:"1242",height:"604"})),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/1440"},"#1440"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/1565"},"#1565")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/1633"},"#1633")," for more details."),(0,r.kt)("h2",{id:"uploaders"},"Uploaders"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"xhr-upload: we now send along global metadata when ",(0,r.kt)("inlineCode",{parentName:"li"},"bundle: true")," option is\nset ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1677"},"#1677"),"."),(0,r.kt)("li",{parentName:"ul"},"xhr-upload: type and name are set from file.meta\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1616"},"#1616"),"."),(0,r.kt)("li",{parentName:"ul"},"aws-s3-multipart: added metadata support for S3 MultiPart\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1698"},"#1698"),"."),(0,r.kt)("li",{parentName:"ul"},"aws-s3: allows overriding of getResponseData()\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1647"},"#1647"),"."),(0,r.kt)("li",{parentName:"ul"},"aws-s3: prevents unnecessary delete multiparts request for completed files\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1650"},"#1650"),"."),(0,r.kt)("li",{parentName:"ul"},"aws-s3: do not extract keys from empty ",(0,r.kt)("inlineCode",{parentName:"li"},"fields"),(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1569"},"#1569"),"."),(0,r.kt)("li",{parentName:"ul"},"tus: ",(0,r.kt)("inlineCode",{parentName:"li"},"metaFields")," option has been added to the tus plugin\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1644"},"#1644"),".")),(0,r.kt)("h2",{id:"localization"},"Localization"),(0,r.kt)("p",null,"Thanks to our amazing contributors, Uppy now speaks: Arabic, Chinese, Dutch,\nEnglish, Finnish, French, German, Hungarian, Italian, Japanese, Persian,\nPortuguese, Russian, Serbian, Spanish an Turkish!"),(0,r.kt)("p",null,"New translations are rolling in every month, but there are plenty more languages\nout there that Uppy would love to learn. Please consider\n",(0,r.kt)("a",{parentName:"p",href:"http://uppy.io/docs/locales/#Contributing-a-new-language"},"contributing your language"),"\nas well!"),(0,r.kt)("p",null,"We\u2019ve also added docs for locales \u2014 how to use from NPM and CDN, auto-generated\nlist of languages that are supported already and an invitation to add more\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/1553"},"#1553"),"."),(0,r.kt)("p",null,"Finally, we\u2019ve fixed an issue that could occur when adding files with names in\nnon-Latin alphabets. When adding a file to Uppy, it gets an ID based on several\ncharacteristics, such as its size and file name. Previously, our ID generation\nwould ignore any non-alphanumeric characters in the file name, which could cause\nthe IDs for different files to clash. Now, those characters are worked into the\nID, so that multiple similar files with different non-alphanumeric names can be\nadded. See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/1722"},"#1722"),"."),(0,r.kt)("h2",{id:"robodog"},"Robodog"),(0,r.kt)("p",null,"Robodog is an Uppy-based library that helps you talk to the Transloadit API.\nSince 1.0, most of the updates have been bugfixes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Robodog.dashboard()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Robodog.form()")," now pass their options to the\n",(0,r.kt)("inlineCode",{parentName:"li"},"@uppy/dashboard")," plugin as advertised."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Robodog.form()")," now supports the\n",(0,r.kt)("a",{parentName:"li",href:"/docs/robodog/form/#Separating-Uploads-from-Form-Submission"},(0,r.kt)("inlineCode",{parentName:"a"},"triggerUploadOnSubmit")),"\noption from ",(0,r.kt)("inlineCode",{parentName:"li"},"@uppy/form"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Robodog.form()")," now supports localization of the \u201cChoose files\u201d button it\nadds in the default configuration.")),(0,r.kt)("h2",{id:"build"},"Build"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ren\xe9e split our test runs into multiple jobs on Travis CI, so unit tests,\nend-to-end tests and other jobs all run in parallel. This lets us identify\nissues with failing builds quicker and also slashes total build times by half!\n\ud83d\ude80 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1709"},"#1709"),"."),(0,r.kt)("li",{parentName:"ul"},"Webdriverio, which we use for end-to-end testing, has been updated to v5. This\nimproves a bunch of things and adds a lot of ",(0,r.kt)("inlineCode",{parentName:"li"},"await"),"s to our tests\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1675"},"#1675"),"."),(0,r.kt)("li",{parentName:"ul"},"Build dependencies have been upgraded: Babel to v7, Eslint to v5, Jest to v24,\nTypescript to v3, Postcss to v7\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1686"},"#1549"),"."),(0,r.kt)("li",{parentName:"ul"},"Fixed tags for docker build\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1579"},"#1579"),"."),(0,r.kt)("li",{parentName:"ul"},"New ",(0,r.kt)("inlineCode",{parentName:"li"},"uploadcdn")," and sync version scripts\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1586"},"#1586"),(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1600"},"#1600"),".")),(0,r.kt)("h2",{id:"website-and-docs"},"Website and docs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added Community projects \u2014 a page with Uppy plugins and integrations developed\nby the community ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1620"},"#1620"),".\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/blob/master/website/src/docs/community-projects.md"},"Add yours"),"!"),(0,r.kt)("li",{parentName:"ul"},"Custom plugin\n",(0,r.kt)("a",{parentName:"li",href:"http://uppy.io/docs/writing-plugins/#Example-of-a-custom-plugin"},"example")," \u2014\nnow you have a reference to look at when writing your own plugin for Uppy\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1623"},"#1623"),"."),(0,r.kt)("li",{parentName:"ul"},"Added signature authentication to Transloadit example\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1705"},"#1705"),"."),(0,r.kt)("li",{parentName:"ul"},"Documented Companion\u2019s Auth and Token mechanism\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1540"},"#1540"),"."),(0,r.kt)("li",{parentName:"ul"},"Updated AWS S3 Multipart documentation wrt CORS settings\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1539"},"#1539"),".")),(0,r.kt)("h2",{id:"companion"},"Companion"),(0,r.kt)("p",null,"Of course, we didn\u2019t forget ",(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/companion"),". It\u2019s getting more robust with\nevery release:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u26a0\ufe0f We are now sending an ",(0,r.kt)("inlineCode",{parentName:"li"},"uppy-versions")," header to Companion. Please see\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1612#issuecomment-515117137"},"how to avoid errors if you are using Companion but NOT as standalone"),(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1686"},"#1612"),"."),(0,r.kt)("li",{parentName:"ul"},"Companion now returns mimetypes for Dropbox files\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1599"},"#1599"),"."),(0,r.kt)("li",{parentName:"ul"},"Added colors to logs ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1648"},"#1648"),"."),(0,r.kt)("li",{parentName:"ul"},"Changed oauth access token transport method\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1668"},"#1668"),"."),(0,r.kt)("li",{parentName:"ul"},"Companion now displays truer error during oauth failure\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1702"},"#1702"),"."),(0,r.kt)("li",{parentName:"ul"},"Not logging uppyAuthToken and not sending the error stack to client\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1663"},"#1663"),"."),(0,r.kt)("li",{parentName:"ul"},"Properly loading Instagram user name, removed deprecated dropbox field\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1663"},"#1651"),(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1692"},"#1692"),"."),(0,r.kt)("li",{parentName:"ul"},"Return nextPagePath for Drive/Dropbox\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1652"},"#1652"),"."),(0,r.kt)("li",{parentName:"ul"},"Added ability to load secret keys from files\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1632"},"#1632"),"."),(0,r.kt)("li",{parentName:"ul"},"Set upload filename from metadata during uploads\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1587"},"#1587"),".")),(0,r.kt)("h2",{id:"misc"},"Misc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u26a0\ufe0f form: now excludes own metadata when creating a new upload. There\u2019s also a\nnew option to append results to the input instead of overwriting\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1686"},"#1686"),"."),(0,r.kt)("li",{parentName:"ul"},"core: ",(0,r.kt)("inlineCode",{parentName:"li"},"relativePath")," is added to local files when a directory has been\ndropped/selected. It is ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," for non-foldered files\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1602"},"#1602"),"."),(0,r.kt)("li",{parentName:"ul"},"core: using ",(0,r.kt)("inlineCode",{parentName:"li"},"uploadStarted: null")," instead of false\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1628"},"#1628"),"."),(0,r.kt)("li",{parentName:"ul"},"status-bar: hide seconds if ETA is more than 1 hour\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1501"},"#1501"),"."),(0,r.kt)("li",{parentName:"ul"},"react: dashboard react component prop typings updated\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1598"},"#1598"),"."),(0,r.kt)("li",{parentName:"ul"},"webcam: Allow definition of MediaRecorder ",(0,r.kt)("inlineCode",{parentName:"li"},"mimeType"),(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1708"},"#1708"),".")),(0,r.kt)("p",null,"As always, you can find the full list of changes and package versions, as well\nas future plans, in our\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/blob/master/CHANGELOG.md"},"changelog"),"."))}m.isMDXComponent=!0},2690:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/drag-drop-focus-d96b35dd1fba826168fd9e708e6c916e.png"}}]);