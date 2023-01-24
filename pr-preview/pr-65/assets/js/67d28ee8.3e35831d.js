"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[7199],{9787:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(7462),i=(t(7294),t(3905));const o={sidebar_position:10},a="Golden Retriever",l={unversionedId:"golden-retriever",id:"golden-retriever",title:"Golden Retriever",description:"The @uppy/golden-retriever plugin saves selected files in your browser cache,",source:"@site/docs/golden-retriever.mdx",sourceDirName:".",slug:"/golden-retriever",permalink:"/uppy.io/pr-preview/pr-65/docs/golden-retriever",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/golden-retriever.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Remote sources",permalink:"/uppy.io/pr-preview/pr-65/docs/presets/remote-sources"},next:{title:"Compressor",permalink:"/uppy.io/pr-preview/pr-65/docs/compressor"}},s={},p=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"Enabling Service Worker",id:"enabling-service-worker",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>expires</code>",id:"expires",level:4},{value:"<code>serviceWorker</code>",id:"serviceworker",level:4}],d=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",r)},u=d("Tabs"),c=d("TabItem"),k=d("UppyCdnExample"),m={toc:p};function h(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"golden-retriever"},"Golden Retriever"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@uppy/golden-retriever")," plugin saves selected files in your browser cache,\nso that if the browser crashes, or the user accidentally closes the tab, Uppy\ncan restore everything and continue uploading as if nothing happened. You can\nread more about it\n",(0,i.kt)("a",{parentName:"p",href:"https://uppy.io/blog/2017/07/golden-retriever/"},"on our blog"),"."),(0,i.kt)("p",null,"The Golden Retriever uses three methods of browser data storage:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LocalStorage")," to store file metadata and Uppy state only."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IndexedDB")," for small files, usually under 5MiB."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Service Worker")," (",(0,i.kt)("em",{parentName:"li"},"optional"),") for ",(0,i.kt)("em",{parentName:"li"},"all")," files because, unlike ",(0,i.kt)("inlineCode",{parentName:"li"},"IndexedDB"),",\n",(0,i.kt)("inlineCode",{parentName:"li"},"Service Worker")," can keep references to large files. Service Worker storage is\n",(0,i.kt)("em",{parentName:"li"},"quite")," temporary though, and doesn\u2019t persist across browser crashes or\nrestarts. It works well, however, for accidental refreshes or closed tabs.")),(0,i.kt)("p",null,"Upon restore, the plugin first restores state from ",(0,i.kt)("inlineCode",{parentName:"p"},"LocalStorage")," and then\nchecks both file storages \u2014 ",(0,i.kt)("inlineCode",{parentName:"p"},"IndexedDB")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceWorker")," \u2014 merging the\nresults."),(0,i.kt)("p",null,"If restore is unsuccessful for certain files, they will be marked as \u201cghosts\u201d in\nthe Dashboard UI, and a message + button offering to re-select those files will\nbe displayed."),(0,i.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,i.kt)("p",null,"When you want extra insurance for the user-selected files. If you feel like\nusers might spend some time picking files, tweaking descriptions etc, and will\nnot appreciate having to do it over again if something crashes. Another use case\nmight be when you think user might want to pick a few files, navigate away to do\nsomething else in your app or otherwise, and then come back to the same\nselection."),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)(u,{mdxType:"Tabs"},(0,i.kt)(c,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/golden-retriever\n"))),(0,i.kt)(c,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/golden-retriever\n"))),(0,i.kt)(c,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,i.kt)(k,{mdxType:"UppyCdnExample"},'\n        import { Uppy, GoldenRetriever } from "{{UPPY_JS_URL}}"\n        new Uppy().use(GoldenRetriever)\n      '))),(0,i.kt)("h2",{id:"use"},"Use"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{9} showLineNumbers","{9}":!0,showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport Tus from '@uppy/tus';\nimport GoldenRetriever from '@uppy/golden-retriever';\n\nnew Uppy().use(Dashboard).use(Tus).use(GoldenRetriever);\n")),(0,i.kt)("p",null,"By default, Golden Retriever will only use the ",(0,i.kt)("inlineCode",{parentName:"p"},"IndexedDB")," storage, which is\ngood enough for files up to 5 MiB (configurable). ",(0,i.kt)("inlineCode",{parentName:"p"},"Service Worker")," is\noptional and requires setup."),(0,i.kt)("h3",{id:"enabling-service-worker"},"Enabling Service Worker"),(0,i.kt)("p",null,"With the Service Worker storage, Golden Retriever will be able to temporary\nstore references to large files."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Bundle your own service worker ",(0,i.kt)("inlineCode",{parentName:"p"},"sw.js")," file with Uppy GoldenRetriever\u2019s\nservice worker."),(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"For Webpack, check out\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/oliviertassinari/serviceworker-webpack-plugin"},"serviceworker-webpack-plugin"),".")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sw.js"',title:'"sw.js"'},"import('@uppy/golden-retriever/lib/ServiceWorker');\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Register it in your app\u2019s entry point:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// you app.js entry point\nuppy.use(GoldenRetriever, { serviceWorker: true });\n\nif ('serviceWorker' in navigator) {\n    navigator.serviceWorker\n        .register('/sw.js') // path to your bundled service worker with GoldenRetriever service worker\n        .then((registration) => {\n            console.log(\n                'ServiceWorker registration successful with scope: ',\n                registration.scope,\n            );\n        })\n        .catch((error) => {\n            console.log(`Registration failed with ${error}`);\n        });\n}\n")))),(0,i.kt)("p",null,"Voil\xe0, that\u2019s it. Happy retrieving!"),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("h4",{id:"id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")),(0,i.kt)("p",null,"A unique identifier for this plugin (",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"'GoldenRetriever'"),")."),(0,i.kt)("h4",{id:"expires"},(0,i.kt)("inlineCode",{parentName:"h4"},"expires")),(0,i.kt)("p",null,"How long to store metadata and files for. Used for ",(0,i.kt)("inlineCode",{parentName:"p"},"LocalStorage")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"IndexedDB")," (",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"24 * 60 * 60 * 1000")," // 24 hours)"),(0,i.kt)("h4",{id:"serviceworker"},(0,i.kt)("inlineCode",{parentName:"h4"},"serviceWorker")),(0,i.kt)("p",null,"Whether to enable ",(0,i.kt)("inlineCode",{parentName:"p"},"Service Worker")," storage (",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),")"))}h.isMDXComponent=!0}}]);