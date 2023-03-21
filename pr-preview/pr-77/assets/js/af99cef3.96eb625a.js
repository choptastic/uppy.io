"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[4566],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),y=r,m=c["".concat(l,".").concat(y)]||c[y]||d[y]||o;return n?a.createElement(m,p(p({ref:t},u),{},{components:n})):a.createElement(m,p({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={title:"Uppy 1.8 and 1.9: security, error handling and better types",date:new Date("2020-03-09T00:00:00.000Z"),authors:["arturi"],published:!0,slug:"2020/03/1.9"},p=void 0,i={permalink:"/uppy.io/pr-preview/pr-77/blog/2020/03/1.9",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2020-03-1.9.md",source:"@site/blog/2020-03-1.9.md",title:"Uppy 1.8 and 1.9: security, error handling and better types",description:"Uppy 1.8, 1.9 and a few important security patches are out! Here are the",date:"2020-03-09T00:00:00.000Z",formattedDate:"March 9, 2020",tags:[],readingTime:3.96,hasTruncateMarker:!0,authors:[{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"}],frontMatter:{title:"Uppy 1.8 and 1.9: security, error handling and better types",date:"2020-03-09T00:00:00.000Z",authors:["arturi"],published:!0,slug:"2020/03/1.9"},prevItem:{title:"Uppy 1.10.1: Facebook and OneDrive",permalink:"/uppy.io/pr-preview/pr-77/blog/2020/04/1.10"},nextItem:{title:"Uppy 1.7: A Small One",permalink:"/uppy.io/pr-preview/pr-77/blog/2019/12/1.7"}},l={authorsImageUrls:[void 0]},s=[{value:"Companion: security patches and new Instagram API",id:"companion-security-patches-and-new-instagram-api",level:2},{value:"Error handling",id:"error-handling",level:2},{value:"Dashboard",id:"dashboard",level:2},{value:"Types",id:"types",level:2},{value:"Downloadable ZIP archives of Uppy releases",id:"downloadable-zip-archives-of-uppy-releases",level:2},{value:"Locales",id:"locales",level:2},{value:"Misc",id:"misc",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Uppy 1.8, 1.9 and a few important security patches are out! Here are the\nhighlights:"),(0,r.kt)("h2",{id:"companion-security-patches-and-new-instagram-api"},"Companion: security patches and new Instagram API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We released a patch to an SSRF vulnerability affecting ",(0,r.kt)("inlineCode",{parentName:"li"},"@uppy/companion")," and\nthe ",(0,r.kt)("inlineCode",{parentName:"li"},"@uppy/url")," plugin. Many thanks to the parties involved in\n",(0,r.kt)("a",{parentName:"li",href:"https://hackerone.com/reports/786956"},"reporting and disclosing")," this\nvulnerability to the Uppy team. The patch is available in\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/blob/master/CHANGELOG.md#194"},"@uppy/companion version 1.9.5"),"."),(0,r.kt)("li",{parentName:"ul"},"As the Instagram Legacy API will soon no longer be available, we have now\nadded support for the new Instagram Graph API. As far as using this on\n",(0,r.kt)("inlineCode",{parentName:"li"},"@uppy/companion")," goes, not much has changed. The only difference is that you\nwill now be retrieving your Instagram credentials from the\n",(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/"},"Facebook Developer Platform"),", and no longer\nfrom the ",(0,r.kt)("a",{parentName:"li",href:"https://www.instagram.com/developer/"},"Instagram Developer Platform"),".")),(0,r.kt)("h2",{id:"error-handling"},"Error handling"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We\u2019ve significantly improved error handling and retries in ",(0,r.kt)("inlineCode",{parentName:"li"},"@uppy/core"),",\n",(0,r.kt)("inlineCode",{parentName:"li"},"@uppy/transloadit")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"@uppy/dashboard"),". The retry button on the Status Bar,\nwhich was broken in some edge cases, now works as expected."),(0,r.kt)("li",{parentName:"ul"},"Errors from Transloadit assemblies now include Assembly ID, as well as the\nfull assembly object, for easier debugging."),(0,r.kt)("li",{parentName:"ul"},"You can now click on the question mark (?) icon on the Informer or Dashboard\nerror message, and get a browser alert with error details \u2014 much easier for\nthe users to copy-paste the text this way. The Informer now also conveniently\nstays on screen, as long as you hover over the question mark.")),(0,r.kt)("h2",{id:"dashboard"},"Dashboard"),(0,r.kt)("p",null,"The Dashboard plugin has gained new file type icons: for images \u2014 useful before\nthe preview is generated, or when there\u2019s no preview at all, like with images\nfrom the Url plugin \u2014 and for archives."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9342).Z,width:"1480",height:"492"})),(0,r.kt)("h2",{id:"types"},"Types"),(0,r.kt)("p",null,"Our typings got a significant upgrade: plugin options can now be type-checked!\nIn the past, we did have typings for plugin options, but the ",(0,r.kt)("inlineCode",{parentName:"p"},"uppy.use()"),"\nfunction had a fallback that would accept ",(0,r.kt)("em",{parentName:"p"},"any")," object as options. If your\nplugin options were wrong, typescript would just use the fallback and not tell\nyou about it!"),(0,r.kt)("p",null,"Stricter typings normally mean that old code may no longer type-check. So,\nalthough this is a bugfix, you have to opt into the new types. In 2.0, the old\nway will be removed and only the strict types will be available."),(0,r.kt)("p",null,"You can opt in by specifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"StrictTypes")," type parameter to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Uppy"),"\ntype:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import Uppy = require('@uppy/core');\nconst uppy = Uppy<Uppy.StrictTypes>({\n    // options here\n});\n")),(0,r.kt)("p",null,"This type parameter must also be specified if you are storing the ",(0,r.kt)("inlineCode",{parentName:"p"},"uppy"),"\ninstance anywhere. For example, inside a class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class UppyProvider extends React.Component {\n    private uppy: Uppy<Uppy.StrictTypes>;\n    constructor(props) {\n        super(props);\n        this.uppy = Uppy<Uppy.StrictTypes>({\n            // etc\n        });\n    }\n}\n")),(0,r.kt)("p",null,"If you do not specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"StrictTypes")," parameter, the old fallback for the\n",(0,r.kt)("inlineCode",{parentName:"p"},"uppy.use()")," method remains available."),(0,r.kt)("p",null,"The typings for ",(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/react")," component props are now derived from plugin\noptions types, so they will no longer get out of sync, as they occasionally did\nin the past. For example, in version 1.7, the ",(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/drag-drop")," plugin supported\na ",(0,r.kt)("inlineCode",{parentName:"p"},"note")," option to add some text to the drop area. The React typings didn't\ninclude that option, so you couldn't use it from typescript! That is now\npermanently fixed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import components = require('@uppy/react');\nconst { DragDrop } = components;\n\n// assuming some `uppy` variable already exists\ndeclare var uppy: Uppy<Uppy.StrictTypes>;\n\nfunction MyComponent() {\n    return <DragDrop uppy={uppy} note=\"This prop is now supported!\" />;\n}\n")),(0,r.kt)("p",null,"Finally, the ",(0,r.kt)("inlineCode",{parentName:"p"},"locale")," options and React props now have full typings. Your editor\nshould now be able to provide autocompletion for language keys!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot showing VS Code autocompletion for a language key.",src:n(7934).Z,width:"1099",height:"332"})),(0,r.kt)("p",null,"We now also use ",(0,r.kt)("inlineCode",{parentName:"p"},"tsd"),", so our typings are actually tested."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/1918"},"PR #1918")," for all the\ndetails."),(0,r.kt)("h2",{id:"downloadable-zip-archives-of-uppy-releases"},"Downloadable ZIP archives of Uppy releases"),(0,r.kt)("p",null,"Uppy is now available as a downloadable ZIP archive from the Transloadit CDN!\nNPM down? Don\u2019t like build tools? Looking for a quick way to play around with\nUppy? We\u2019ve got you covered:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://releases.transloadit.com/uppy/v1.9.3/uppy-v1.9.3.zip\n")),(0,r.kt)("h2",{id:"locales"},"Locales"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Uppy now speaks Korean and Vietnamese."),(0,r.kt)("li",{parentName:"ul"},"The French, German and Chinese (zh_TW) translations have been improved.")),(0,r.kt)("h2",{id:"misc"},"Misc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@uppy/core: core: setState(modifiedFiles) in onBeforeUpload (#2028 / @arturi)"),(0,r.kt)("li",{parentName:"ul"},"@uppy/core: always log errors (#2029 / @arturi)"),(0,r.kt)("li",{parentName:"ul"},"@uppy/core: fix mime type checking bug (#2004 / @shahimclt)"),(0,r.kt)("li",{parentName:"ul"},"@uppy/core: add .tsv and .tab: text/tab-separated-values (#2056 / @arturi)"),(0,r.kt)("li",{parentName:"ul"},"@uppy/onedrive: make encryption shorter + enable onedrive on website (#2034 /\n@ifedapoolarewaju)"),(0,r.kt)("li",{parentName:"ul"},"@uppy/react: use ",(0,r.kt)("inlineCode",{parentName:"li"},"componentDidUpdate")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"componentWillReceiveProps"),"\n(@cryptic022, #1999)"),(0,r.kt)("li",{parentName:"ul"},"@uppy/xhr-upload: free item from rate limit queue when upload times out\n(@rtaieb, #2018)"),(0,r.kt)("li",{parentName:"ul"},"@uppy/aws-s3-multipart: add optional headers for signed url (@ardeois, #1985)"),(0,r.kt)("li",{parentName:"ul"},"@uppy/aws-s3: fix crash when S3 response does not have a Content-Type header\n(@roenschg, #2012)")),(0,r.kt)("p",null,"As always, you can find the full list of changes and package versions, as well\nas future plans, in our\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/blob/master/CHANGELOG.md"},"changelog"),"."))}d.isMDXComponent=!0},9342:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/file-type-icons-3df61d5722546c6a244407279bcb4476.png"},7934:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/locale-type-3a3e1fb239489bc1d3a263672754c1e7.png"}}]);