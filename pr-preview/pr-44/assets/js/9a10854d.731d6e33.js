"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2600],{5162:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(7294),a=t(6010);const r="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,i),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var o=t(7462),a=t(7294),r=t(6010),i=t(2389),s=t(7392),l=t(7094),p=t(2466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var n;const{lazy:t,block:i,defaultValue:d,values:m,groupId:h,className:k}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??b.map((e=>{let{props:{value:n,label:t,attributes:o}}=e;return{value:n,label:t,attributes:o}})),v=(0,s.l)(f,((e,n)=>e.value===n.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)??b[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:N}=(0,l.U)(),[C,w]=(0,a.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=h){const e=g[h];null!=e&&e!==C&&f.some((n=>n.value===e))&&w(e)}const A=e=>{const n=e.currentTarget,t=x.indexOf(n),o=f[t].value;o!==C&&(T(n),w(o),null!=h&&N(h,String(o)))},F=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]??x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]??x[x.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},k)},f.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:e=>x.push(e),onKeyDown:F,onFocus:A,onClick:A},i,{className:(0,r.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":C===n})}),t??n)}))),t?(0,a.cloneElement)(b.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==C})))))}function m(e){const n=(0,i.Z)();return a.createElement(d,(0,o.Z)({key:String(n)},e))}},3068:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(7294),a=t(814),r=t(3612);const i=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","docusaurus":"docusaurus","lint:js":"eslint . --cache ","lint":"run-s --continue-on-error lint:js lint:md","prepare":"husky install","lint:md":"run-s --continue-on-error remark:md remark:mdx","remark:md":"remark docs -qf","remark:mdx":"remark docs -e mdx -u mdx -qf","serve":"docusaurus serve","dev":"docusaurus start","swizzle":"docusaurus swizzle","typecheck":"tsc","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.js":"eslint --fix --cache","*.{css,html,json,js,jsx,ts,tsx,yml}":["prettier --write"],"docs/*.md":["remark -qf --"],"docs/*.mdx":["remark -u mdx -qf --"]},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.7.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-lint-recommended":"^6.1.2","remark-preset-prettier":"^1.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.2.3+sha224.953c8233f7a92884eee2de69a1b92d1f2ec1655e66d08071ba9a02fa"}'),{version:s}=i;function l(e){let{children:n,uppyCssName:t="uppy.min.css",uppyJsName:i="uppy.min.js"}=e,l=[];o.Children.toArray(n).forEach((e=>{l=[...l,...String(e).trim().split("\n").map((e=>e.trim()))]}));const p=l.map((e=>`  ${e}`)).join("\n"),u=`https://releases.transloadit.com/uppy/v${s}/${i}`,c=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${s}/${t}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${p.replace(/{{UPPY_JS_URL}}/g,u)}\n<\/script>\n`;return o.createElement(o.Fragment,null,o.createElement(r.Z,{type:"caution"},o.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few.")),o.createElement(a.Z,{language:"html"},c))}},4859:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var o=t(7462),a=(t(7294),t(3905)),r=t(5488),i=t(5162),s=t(3068);const l={},p="Facebook",u={unversionedId:"sources/companion-plugins/facebook",id:"sources/companion-plugins/facebook",title:"Facebook",description:"The @uppy/facebook plugin lets users import files from their Facebook account.",source:"@site/docs/sources/companion-plugins/facebook.mdx",sourceDirName:"sources/companion-plugins",slug:"/sources/companion-plugins/facebook",permalink:"/uppy.io/pr-preview/pr-44/docs/sources/companion-plugins/facebook",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/sources/companion-plugins/facebook.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dropbox",permalink:"/uppy.io/pr-preview/pr-44/docs/sources/companion-plugins/dropbox"},next:{title:"Google Drive",permalink:"/uppy.io/pr-preview/pr-44/docs/sources/companion-plugins/google-drive"}},c={},d=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Use",id:"use",level:2},{value:"Use in Uppy",id:"use-in-uppy",level:3},{value:"Use in Companion",id:"use-in-companion",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>title</code>",id:"title",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>companionUrl</code>",id:"companionurl",level:4},{value:"<code>companionHeaders</code>",id:"companionheaders",level:4},{value:"<code>companionAllowedHosts</code>",id:"companionallowedhosts",level:4},{value:"<code>companionCookiesRule</code>",id:"companioncookiesrule",level:4},{value:"<code>locale</code>",id:"locale",level:4}],m={toc:d};function h(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"facebook"},"Facebook"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@uppy/facebook")," plugin lets users import files from their ",(0,a.kt)("a",{parentName:"p",href:"https://www.facebook.com"},"Facebook")," account."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"/examples"},"Try out the live example")," or take it for a spin in ",(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-dashboard-xpxuhd"},"CodeSandbox"),".")),(0,a.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,a.kt)("p",null,"When you want to let users import files from their ",(0,a.kt)("a",{parentName:"p",href:"https://www.facebook.com"},"Facebook")," account."),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," instance is required for the Facebook plugin to work.\nCompanion handles authentication with Facebook, downloads the files, and uploads them to the destination.\nThis saves the user bandwidth, especially helpful if they are on a mobile connection."),(0,a.kt)("p",null,"You can self-host Companion or get a hosted version with any ",(0,a.kt)("a",{parentName:"p",href:"https://transloadit.com/pricing/"},"Transloadit plan"),"."),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/facebook\n"))),(0,a.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/facebook\n"))),(0,a.kt)(i.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,a.kt)(s.Z,{mdxType:"UppyCdnExample"},'\n        import { Uppy, Facebook } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(Facebook, {\n          // Options\n        })\n      '))),(0,a.kt)("h2",{id:"use"},"Use"),(0,a.kt)("p",null,"Using Facebook requires setup in both Uppy and Companion."),(0,a.kt)("h3",{id:"use-in-uppy"},"Use in Uppy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{12-19} showLineNumbers","{12-19}":!0,showLineNumbers:!0},"import Uppy from '@uppy/core'\nimport Dashboard from '@uppy/dashboard'\nimport Facebook from '@uppy/facebook'\n\nimport '@uppy/core/dist/style.min.css'\nimport '@uppy/dashboard/dist/style.min.css'\n\nnew Uppy\n  .use(Dashboard, { inline: true, target: 'body' })\n  // Example of setting all the options to their defaults.\n  // Not passing anything to `Facebook` is therefor the same as the example below.\n  .use(Facebook, {\n    id: 'Facebook',\n    title: 'Facebook',\n    target: null,\n    companionUrl: null,\n    companionHeaders: null,\n    companionAllowedHosts: null,\n  })\n")),(0,a.kt)("h3",{id:"use-in-companion"},"Use in Companion"),(0,a.kt)("p",null,"You can create a Facebook App on the ",(0,a.kt)("a",{parentName:"p",href:"https://developers.facebook.com/"},"Facebook Developers site"),"."),(0,a.kt)("p",null,"The app page has a \u201cRedirect URIs\u201d field. Here, add:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://$YOUR_COMPANION_HOST_NAME/facebook/redirect\n")),(0,a.kt)("p",null,"You can only use the integration with your own account initially.\nMake sure to apply for production status on the app page before you publish your app, or your users will not be able to sign in!"),(0,a.kt)("p",null,"You need to set up OAuth in your Facebook app for Companion to be able to connect to users\u2019 Facebook accounts. You have to enable \u201cAdvanced Access\u201d for the ",(0,a.kt)("inlineCode",{parentName:"p"},"user_photos")," permission. A precondition of that is \u201cBusiness Verification\u201d which involves setting up a Meta Business Account and submitting documents to prove business ownership."),(0,a.kt)("p",null,"Configure the Facebook key and secret. With the standalone Companion server, specify environment variables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'export COMPANION_FACEBOOK_KEY="Facebook API key"\nexport COMPANION_FACEBOOK_SECRET="Facebook API secret"\n')),(0,a.kt)("p",null,"When using the Companion Node.js API, configure these options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"companion.app({\n  providerOptions: {\n    facebook: {\n      key: 'Facebook API key',\n      secret: 'Facebook API secret',\n    },\n  },\n})\n")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("h4",{id:"id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")),(0,a.kt)("p",null,"A unique identifier for this plugin (",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"'Facebook'"),")."),(0,a.kt)("h4",{id:"title"},(0,a.kt)("inlineCode",{parentName:"h4"},"title")),(0,a.kt)("p",null,"Title / name shown in the UI, such as Dashboard tabs (",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"'Facebook'"),")."),(0,a.kt)("h4",{id:"target"},(0,a.kt)("inlineCode",{parentName:"h4"},"target")),(0,a.kt)("p",null,"DOM element, CSS selector, or plugin to place the drag and drop area into (",(0,a.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Element"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,a.kt)("h4",{id:"companionurl"},(0,a.kt)("inlineCode",{parentName:"h4"},"companionUrl")),(0,a.kt)("p",null,"URL to a ",(0,a.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," instance (",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,a.kt)("h4",{id:"companionheaders"},(0,a.kt)("inlineCode",{parentName:"h4"},"companionHeaders")),(0,a.kt)("p",null,"Custom headers that should be sent along to ",(0,a.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," on every request (",(0,a.kt)("inlineCode",{parentName:"p"},"Object"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"{}"),")."),(0,a.kt)("h4",{id:"companionallowedhosts"},(0,a.kt)("inlineCode",{parentName:"h4"},"companionAllowedHosts")),(0,a.kt)("p",null,"The valid and authorised URL(s) from which OAuth responses should be accepted (",(0,a.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"RegExp")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Array"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"companionUrl"),")."),(0,a.kt)("p",null,"This value can be a ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", a ",(0,a.kt)("inlineCode",{parentName:"p"},"RegExp")," pattern, or an ",(0,a.kt)("inlineCode",{parentName:"p"},"Array")," of both.\nThis is useful when you have your ",(0,a.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," running on several hosts. Otherwise, the default value should do fine."),(0,a.kt)("h4",{id:"companioncookiesrule"},(0,a.kt)("inlineCode",{parentName:"h4"},"companionCookiesRule")),(0,a.kt)("p",null,"This option correlates to the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials"},"RequestCredentials value")," (",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"'same-origin'"),")."),(0,a.kt)("p",null,"This tells the plugin whether to send cookies to ",(0,a.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion"),"."),(0,a.kt)("h4",{id:"locale"},(0,a.kt)("inlineCode",{parentName:"h4"},"locale")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  strings: {\n    pluginNameFacebook: 'Facebook',\n  },\n}\n")))}h.isMDXComponent=!0}}]);