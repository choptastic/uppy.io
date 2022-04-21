"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[7901],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,h=m["".concat(l,".").concat(c)]||m[c]||d[c]||o;return n?a.createElement(h,p(p({ref:t},u),{},{components:n})):a.createElement(h,p({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8073:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),p=["components"],i={sidebar_position:5},l="Migrate to 2.0",s={unversionedId:"guides/migrate-2.0",id:"guides/migrate-2.0",title:"Migrate to 2.0",description:"New bundle requires manual polyfilling",source:"@site/docs/guides/migrate-2.0.md",sourceDirName:"guides",slug:"/guides/migrate-2.0",permalink:"/uppy.io/pr-preview/pr-4/docs/guides/migrate-2.0",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guides/migrate-2.0.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Building your own UI with Uppy",permalink:"/uppy.io/pr-preview/pr-4/docs/guides/building-your-own-ui-with-uppy"},next:{title:"Supporting IE11",permalink:"/uppy.io/pr-preview/pr-4/docs/guides/browser-support"}},u={},d=[{value:"New bundle requires manual polyfilling",id:"new-bundle-requires-manual-polyfilling",level:3},{value:"Use <code>BasePlugin</code> or <code>UIPlugin</code> instead of <code>Plugin</code>",id:"use-baseplugin-or-uiplugin-instead-of-plugin",level:3},{value:"Use the latest Preact for your Uppy plugins",id:"use-the-latest-preact-for-your-uppy-plugins",level:3},{value:"Set plugin titles from locales",id:"set-plugin-titles-from-locales",level:3},{value:"Initialize Uppy with the <code>new</code> keyword",id:"initialize-uppy-with-the-new-keyword",level:3},{value:"Rename <code>allowMultipleUploads</code> to <code>allowMultipleUploadBatches</code>",id:"rename-allowmultipleuploads-to-allowmultipleuploadbatches",level:3},{value:"New default limits for @uppy/xhr-upload and @uppy/tus",id:"new-default-limits-for-uppyxhr-upload-and-uppytus",level:3},{value:"TypeScript changes",id:"typescript-changes",level:3},{value:"Event types",id:"event-types",level:4},{value:"Changes to pre-signing URLs for @uppy/aws-s3-multipart",id:"changes-to-pre-signing-urls-for-uppyaws-s3-multipart",level:3},{value:"Removed the <code>.run</code> method from @uppy/core",id:"removed-the-run-method-from-uppycore",level:3},{value:"Removed <code>resume</code> and <code>removeFingerprintOnSuccess</code> options from @uppy/tus",id:"removed-resume-and-removefingerprintonsuccess-options-from-uppytus",level:3},{value:"That\u2019s it!",id:"thats-it",level:3},{value:"Migrating Companion v1 to v2",id:"migrating-companion-v1-to-v2",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"ProviderOptions",id:"provideroptions",level:3},{value:"OAuth Redirect URIs",id:"oauth-redirect-uris",level:3},{value:"New Redirect URIs",id:"new-redirect-uris",level:4}],m={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"migrate-to-20"},"Migrate to 2.0"),(0,o.kt)("h3",{id:"new-bundle-requires-manual-polyfilling"},"New bundle requires manual polyfilling"),(0,o.kt)("p",null,"With 2.0, following in the footsteps of Microsoft, we are dropping support for IE11. As a result, we are able to remove all built-in polyfills, and the new bundle size is ",(0,o.kt)("strong",{parentName:"p"},"25% smaller"),"! If you want your app to still support older browsers (such as IE11), you may need to add the following polyfills to your bundle:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mo/abortcontroller-polyfill"},"abortcontroller-polyfill")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/zloirock/core-js"},"core-js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mozdevs/mediaDevices-getUserMedia-polyfill"},"md-gum-polyfill")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/que-etc/resize-observer-polyfill"},"resize-observer-polyfill")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/github/fetch"},"whatwg-fetch"))),(0,o.kt)("p",null,"If you\u2019re using a bundler, you need import these before Uppy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import 'core-js'\nimport 'whatwg-fetch'\nimport 'abortcontroller-polyfill/dist/polyfill-patch-fetch'\n// Order matters here: AbortController needs fetch, which needs Promise (provided by core-js).\n\nimport 'md-gum-polyfill'\nimport ResizeObserver from 'resize-observer-polyfill'\n\nwindow.ResizeObserver ??= ResizeObserver\n\nexport { default } from '@uppy/core'\nexport * from '@uppy/core'\n")),(0,o.kt)("p",null,"If you\u2019re using Uppy from a CDN, we now provide two bundles: one for up-to-date browsers that do not include polyfills and use modern syntax, and one for legacy browsers. When migrating, be mindful about the types of browsers you want to support:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Modern browsers (recommended) --\x3e\n<script src="https://releases.transloadit.com/uppy/v2.9.1/uppy.min.js"><\/script>\n\n\x3c!-- Legacy browsers (IE11+) --\x3e\n<script nomodule src="https://releases.transloadit.com/uppy/v2.9.1/uppy.legacy.min.js"><\/script>\n<script type="module">import "https://releases.transloadit.com/uppy/v2.9.1/uppy.min.js";<\/script>\n')),(0,o.kt)("p",null,"Please note that while you may be able to get 2.0 to work in IE11 this way, we do not officially support it anymore."),(0,o.kt)("h3",{id:"use-baseplugin-or-uiplugin-instead-of-plugin"},"Use ",(0,o.kt)("inlineCode",{parentName:"h3"},"BasePlugin")," or ",(0,o.kt)("inlineCode",{parentName:"h3"},"UIPlugin")," instead of ",(0,o.kt)("inlineCode",{parentName:"h3"},"Plugin")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/uppy/"},(0,o.kt)("inlineCode",{parentName:"a"},"@uppy/core"))," used to provide a ",(0,o.kt)("inlineCode",{parentName:"p"},"Plugin")," class for creating plugins. This was used for any official plugin, but also for users who want to create their own custom plugin. But, ",(0,o.kt)("inlineCode",{parentName:"p"},"Plugin")," always came bundled with Preact, even if the plugin itself didn\u2019t add any UI elements."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Plugin")," has been replaced with ",(0,o.kt)("inlineCode",{parentName:"p"},"BasePlugin")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"UIPlugin"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"BasePlugin")," is the minimum you need to create a plugin and ",(0,o.kt)("inlineCode",{parentName:"p"},"UIPlugin")," adds Preact for rendering user interfaces."),(0,o.kt)("p",null,"You can import them from ",(0,o.kt)("a",{parentName:"p",href:"/docs/uppy/"},(0,o.kt)("inlineCode",{parentName:"a"},"@uppy/core")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { BasePlugin, UIPlugin } from '@uppy/core'\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," some bundlers will include ",(0,o.kt)("inlineCode",{parentName:"p"},"UIPlugin")," (and thus Preact) if you import from ",(0,o.kt)("inlineCode",{parentName:"p"},"@uppy/core"),". To make sure this does not happen, you can import ",(0,o.kt)("inlineCode",{parentName:"p"},"Uppy")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"BasePlugin")," directly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Uppy from '@uppy/core/lib/Uppy.js'\nimport BasePlugin from '@uppy/core/lib/BasePlugin.js'\n")),(0,o.kt)("h3",{id:"use-the-latest-preact-for-your-uppy-plugins"},"Use the latest Preact for your Uppy plugins"),(0,o.kt)("p",null,"Official plugins have already been upgraded. If you are using any custom plugins, upgrade Preact to the latest version. At the time of writing this is ",(0,o.kt)("inlineCode",{parentName:"p"},"10.5.13"),"."),(0,o.kt)("h3",{id:"set-plugin-titles-from-locales"},"Set plugin titles from locales"),(0,o.kt)("p",null,"Titles for plugins used to be set with the ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," property in the plugin options, but all other strings are set in ",(0,o.kt)("inlineCode",{parentName:"p"},"locale"),". This has now been aligned. You should set your plugin title from the ",(0,o.kt)("inlineCode",{parentName:"p"},"locale")," property."),(0,o.kt)("p",null,"Before"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Webcam from '@uppy/webcam'\n\nuppy.use(Webcam, {\n  title: 'Some title',\n})\n")),(0,o.kt)("p",null,"After"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Webcam from '@uppy/webcam'\n\nuppy.use(Webcam, {\n  locale: {\n    strings: {\n      title: 'Some title',\n    },\n  },\n})\n")),(0,o.kt)("h3",{id:"initialize-uppy-with-the-new-keyword"},"Initialize Uppy with the ",(0,o.kt)("inlineCode",{parentName:"h3"},"new")," keyword"),(0,o.kt)("p",null,"The default export ",(0,o.kt)("inlineCode",{parentName:"p"},"Uppy")," is no longer callable as a function. This means you construct the ",(0,o.kt)("inlineCode",{parentName:"p"},"Uppy")," instance using the ",(0,o.kt)("inlineCode",{parentName:"p"},"new")," keyword."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Uppy from '@uppy/core'\n\nconst uppy = new Uppy() // correct.\n\nconst otherUppy = Uppy() // incorrect, will throw.\n")),(0,o.kt)("h3",{id:"rename-allowmultipleuploads-to-allowmultipleuploadbatches"},"Rename ",(0,o.kt)("inlineCode",{parentName:"h3"},"allowMultipleUploads")," to ",(0,o.kt)("inlineCode",{parentName:"h3"},"allowMultipleUploadBatches")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://uppy.io/docs/uppy/#allowMultipleUploadBatches-true"},(0,o.kt)("inlineCode",{parentName:"a"},"allowMultipleUploadBatches"))," means allowing several calls to ",(0,o.kt)("a",{parentName:"p",href:"https://uppy.io/docs/uppy/#uppy-upload"},(0,o.kt)("inlineCode",{parentName:"a"},".upload()")),", in other words, a user can add more files after already having uploaded some."),(0,o.kt)("p",null,"We have renamed this to be more intention revealing that this is about uploads, and not whether a user can choose multiple files for one upload."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const uppy = new Uppy({\n  allowMultipleUploadBatches: true,\n})\n")),(0,o.kt)("h3",{id:"new-default-limits-for-uppyxhr-upload-and-uppytus"},"New default limits for ",(0,o.kt)("a",{parentName:"h3",href:"/docs/xhr-upload/"},(0,o.kt)("inlineCode",{parentName:"a"},"@uppy/xhr-upload"))," and ",(0,o.kt)("a",{parentName:"h3",href:"/docs/tus/"},(0,o.kt)("inlineCode",{parentName:"a"},"@uppy/tus"))),(0,o.kt)("p",null,"The default limit has been changed from ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"5"),". Setting this to ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," means no limit on concurrent uploads."),(0,o.kt)("p",null,"You can change the limit on the Tus and XHR plugin options."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(Tus, {\n  // ...\n  limit: 10,\n})\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(XHRUpload, {\n  // ...\n  limit: 10,\n})\n")),(0,o.kt)("h3",{id:"typescript-changes"},"TypeScript changes"),(0,o.kt)("p",null,"Uppy used to have loose types by default and strict types as an opt-in. The default export was a function that returned the ",(0,o.kt)("inlineCode",{parentName:"p"},"Uppy")," class, and the types came bundled with the default export (",(0,o.kt)("inlineCode",{parentName:"p"},"Uppy.SomeType"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import Uppy from '@uppy/core'\nimport Tus from '@uppy/tus'\n\nconst uppy = Uppy<Uppy.StrictTypes>()\n\nuppy.use(Tus, {\n  invalidOption: null, // this will make the compilation fail!\n})\n")),(0,o.kt)("p",null,"Uppy is now strictly typed by default and loose types have been removed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// ...\n\nconst uppy = new Uppy()\n\nuppy.use(Tus, {\n  invalidOption: null, // this will make the compilation fail!\n})\n")),(0,o.kt)("p",null,"Uppy types are now individual exports and should be imported separately."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import type { PluginOptions, UIPlugin, PluginTarget } from '@uppy/core'\n")),(0,o.kt)("h4",{id:"event-types"},"Event types"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/uppy/"},(0,o.kt)("inlineCode",{parentName:"a"},"@uppy/core"))," provides an ",(0,o.kt)("a",{parentName:"p",href:"/docs/uppy/#uppy-on-39-event-39-action"},(0,o.kt)("inlineCode",{parentName:"a"},".on"))," method to listen to ",(0,o.kt)("a",{parentName:"p",href:"/docs/uppy/#Events"},"events"),". The types for these events were loose and allowed for invalid events to be passed, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"uppy.on('upload-errrOOOoooOOOOOrrrr')"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Before:\n\ntype Meta = { myCustomMetadata: string }\n\n// Invalid event\nuppy.on<Meta>('upload-errrOOOoooOOOOOrrrr', () => {\n  // ...\n})\n\n// After:\n\n// Normal event signature\nuppy.on('complete', (result) => {\n  const successResults = result.successful\n})\n\n// Custom signature\ntype Meta = { myCustomMetadata: string }\n\n// Notice how the custom type has now become the second argument\nuppy.on<'complete', Meta>('complete', (result) => {\n  // The passed type is now merged into the `meta` types.\n  const meta = result.successful[0].meta.myCustomMetadata\n})\n")),(0,o.kt)("p",null,"Plugins that add their own events can merge with existing ones in ",(0,o.kt)("inlineCode",{parentName:"p"},"@uppy/core")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"declare module '@uppy/core' { ... }"),". This is a TypeScript pattern called ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation"},"module augmentation"),". For instance, when using ",(0,o.kt)("a",{parentName:"p",href:"/docs/dashboard/"},(0,o.kt)("inlineCode",{parentName:"a"},"@uppy/dashboard")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"uppy.on('dashboard:file-edit-state', (file) => {\n  const fileName = file.name\n})\n")),(0,o.kt)("h3",{id:"changes-to-pre-signing-urls-for-uppyaws-s3-multipart"},"Changes to pre-signing URLs for ",(0,o.kt)("a",{parentName:"h3",href:"/docs/aws-s3-multipart/"},(0,o.kt)("inlineCode",{parentName:"a"},"@uppy/aws-s3-multipart"))),(0,o.kt)("p",null,"See the Uppy 2.0.0 announcement post about the batch ",(0,o.kt)("a",{parentName:"p",href:"https://uppy.io/blog/2021/08/2.0/#Batch-pre-signing-URLs-for-AWS-S3-Multipart"},"pre-signing URLs change"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"prepareUploadPart")," has been renamed to ",(0,o.kt)("a",{parentName:"p",href:"https://uppy.io/docs/aws-s3-multipart/#prepareUploadParts-file-partData"},(0,o.kt)("inlineCode",{parentName:"a"},"prepareUploadParts"))," (plural). See the documentation link on how to use this function."),(0,o.kt)("h3",{id:"removed-the-run-method-from-uppycore"},"Removed the ",(0,o.kt)("inlineCode",{parentName:"h3"},".run")," method from ",(0,o.kt)("a",{parentName:"h3",href:"/docs/uppy/"},(0,o.kt)("inlineCode",{parentName:"a"},"@uppy/core"))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},".run")," method on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Uppy")," instance has been removed. This method was already obsolete and only logged a warning. As of this major version, it no longer exists."),(0,o.kt)("h3",{id:"removed-resume-and-removefingerprintonsuccess-options-from-uppytus"},"Removed ",(0,o.kt)("inlineCode",{parentName:"h3"},"resume")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"removeFingerprintOnSuccess")," options from ",(0,o.kt)("a",{parentName:"h3",href:"/docs/tus/"},(0,o.kt)("inlineCode",{parentName:"a"},"@uppy/tus"))),(0,o.kt)("p",null,"Tus will now by default try to resume uploads if the upload has been started in the past."),(0,o.kt)("p",null,"This also means tus will store some data in localStorage for each upload, which will automatically be removed on success. Making ",(0,o.kt)("inlineCode",{parentName:"p"},"removeFingerprintOnSuccess")," obsolete too."),(0,o.kt)("h3",{id:"thats-it"},"That\u2019s it!"),(0,o.kt)("p",null,"Uppy 1.0 will continue to receive bug fixes for three more months (until ",(0,o.kt)("time",{datetime:"2021-12-01"},"1 December 2021"),"), security fixes for one more year (until ",(0,o.kt)("time",{datetime:"2022-09-01"},"1 September 2022"),"), but no more new features after today. Exceptions are unlikely, but ",(0,o.kt)("em",{parentName:"p"},"can")," be made \u2013 to accommodate those with commercial support contracts, for example."),(0,o.kt)("p",null,"We hope you\u2019ll waste no time in taking Uppy 2.0 out for a walk. When you do, please let us know what you thought of it on ",(0,o.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/javascript/comments/penbr7/uppy_file_uploader_20_smaller_and_faster_modular/"},"Reddit"),", ",(0,o.kt)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=28359287"},"HN"),", ProductHunt, or ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/uppy_io/status/1432399270846603264"},"Twitter"),". We\u2019re howling at the moon to hear from you!"),(0,o.kt)("h2",{id:"migrating-companion-v1-to-v2"},"Migrating Companion v1 to v2"),(0,o.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("p",null,"Since v2, you now need to be running ",(0,o.kt)("inlineCode",{parentName:"p"},"node.js >= v10.20.1")," to use Companion."),(0,o.kt)("h3",{id:"provideroptions"},"ProviderOptions"),(0,o.kt)("p",null,"In v2 the ",(0,o.kt)("inlineCode",{parentName:"p"},"google")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"microsoft")," ",(0,o.kt)("a",{parentName:"p",href:"https://uppy.io/docs/companion/#Options"},"providerOptions")," have been changed to ",(0,o.kt)("inlineCode",{parentName:"p"},"drive")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"onedrive")," respectively."),(0,o.kt)("h3",{id:"oauth-redirect-uris"},"OAuth Redirect URIs"),(0,o.kt)("p",null,"On your Providers\u2019 respective developer platforms, the OAuth redirect URIs that you should supply has now changed from:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"http(s)://$COMPANION_HOST_NAME/connect/$AUTH_PROVIDER/callback")," in v1"),(0,o.kt)("p",null,"to:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"http(s)://$COMPANION_HOST_NAME/$PROVIDER_NAME/redirect")," in v2"),(0,o.kt)("h4",{id:"new-redirect-uris"},"New Redirect URIs"),(0,o.kt)("div",{class:"table-responsive"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Provider"),(0,o.kt)("th",{parentName:"tr",align:null},"New Redirect URI"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Dropbox"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"https://$COMPANION_HOST_NAME/dropbox/redirect"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Google Drive"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"https://$COMPANION_HOST_NAME/drive/redirect"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"OneDrive"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"https://$COMPANION_HOST_NAME/onedrive/redirect"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Box"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"https://$YOUR_COMPANION_HOST_NAME/box/redirect"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Facebook"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"https://$COMPANION_HOST_NAME/facebook/redirect"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Instagram"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"https://$COMPANION_HOST_NAME/instagram/redirect")))))))}c.isMDXComponent=!0}}]);