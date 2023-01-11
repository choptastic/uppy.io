"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[5857],{5162:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(7294),n=r(6010);const i="tabItem_Ymn6";function s(e){let{children:t,hidden:r,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(i,s),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(7462),n=r(7294),i=r(6010),s=r(2389),l=r(7392),o=r(7094),p=r(2466);const u="tabList__CuJ",c="tabItem_LNqP";function m(e){const{lazy:t,block:r,defaultValue:s,values:m,groupId:d,className:k}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??h.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),y=(0,l.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===s?s:s??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==b&&!f.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:v}=(0,o.U)(),[w,N]=(0,n.useState)(b),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=d){const e=g[d];null!=e&&e!==w&&f.some((t=>t.value===e))&&N(e)}const U=e=>{const t=e.currentTarget,r=x.indexOf(t),a=f[r].value;a!==w&&(C(t),N(a),null!=d&&v(d,String(a)))},T=e=>{let t=null;switch(e.key){case"Enter":U(e);break;case"ArrowRight":{const r=x.indexOf(e.currentTarget)+1;t=x[r]??x[0];break}case"ArrowLeft":{const r=x.indexOf(e.currentTarget)-1;t=x[r]??x[x.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,i.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},k)},f.map((e=>{let{value:t,label:r,attributes:s}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:T,onClick:U},s,{className:(0,i.Z)("tabs__item",c,s?.className,{"tabs__item--active":w===t})}),r??t)}))),t?(0,n.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,s.Z)();return n.createElement(m,(0,a.Z)({key:String(t)},e))}},3068:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),n=r(814),i=r(3612);const s=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md prettier:check","prepare":"husky install","prettier:check":"prettier -c .","prettier:fix":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","@typescript-eslint/eslint-plugin":"^5.48.1","@typescript-eslint/parser":"^5.48.1","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:l}=s;function o(e){let{children:t,uppyCssName:r="uppy.min.css",uppyJsName:s="uppy.min.js"}=e,o=[];a.Children.toArray(t).forEach((e=>{o=[...o,...String(e).trim().split("\n").map((e=>e.trim()))]}));const p=o.map((e=>`  ${e}`)).join("\n"),u=`https://releases.transloadit.com/uppy/v${l}/${s}`,c=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${l}/${r}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${p.replace(/{{UPPY_JS_URL}}/g,u)}\n<\/script>\n`;return a.createElement(a.Fragment,null,a.createElement(i.Z,{type:"caution"},a.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),a.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),a.createElement(n.Z,{language:"html"},c))}},1355:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var a=r(7462),n=(r(7294),r(3905)),i=r(5488),s=r(5162),l=r(3068);const o={},p="React",u={unversionedId:"framework-integrations/react",id:"framework-integrations/react",title:"React",description:"React components for the Uppy UI plugins.",source:"@site/docs/framework-integrations/react.mdx",sourceDirName:"framework-integrations",slug:"/framework-integrations/react",permalink:"/uppy.io/pr-preview/pr-56/docs/framework-integrations/react",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/framework-integrations/react.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Angular",permalink:"/uppy.io/pr-preview/pr-56/docs/framework-integrations/angular"},next:{title:"Svelte",permalink:"/uppy.io/pr-preview/pr-56/docs/framework-integrations/svelte"}},c={},m=[{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2}],d={toc:m};function k(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"react"},"React"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://facebook.github.io/react"},"React")," components for the Uppy UI plugins."),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)(i.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/react\n"))),(0,n.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/react\n"))),(0,n.kt)(s.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,n.kt)(l.Z,{mdxType:"UppyCdnExample"},'\n        import { Uppy, Box } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(Box, {\n          // Options\n        })\n      '))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You also need to install the UI plugin you want to use.\nFor instance, ",(0,n.kt)("inlineCode",{parentName:"p"},"@uppy/dashboard"),".")),(0,n.kt)("h2",{id:"use"},"Use"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"@uppy/react")," exposes component wrappers for ",(0,n.kt)("inlineCode",{parentName:"p"},"Dashboard"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"DragDrop"),", and all other UI elements.\nThe components can be used with either ",(0,n.kt)("a",{parentName:"p",href:"https://facebook.github.io/react"},"React")," or API-compatible alternatives such as ",(0,n.kt)("a",{parentName:"p",href:"https://preactjs.com/"},"Preact"),"."),(0,n.kt)("p",null,"The following plugins are available as React component wrappers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<Dashboard />")," renders ",(0,n.kt)("a",{parentName:"li",href:"/docs/user-interfaces/dashboard"},(0,n.kt)("inlineCode",{parentName:"a"},"@uppy/dashboard"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<DragDrop />")," renders ",(0,n.kt)("a",{parentName:"li",href:"/docs/user-interfaces/drag-drop"},(0,n.kt)("inlineCode",{parentName:"a"},"@uppy/drag-drop"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<ProgressBar />")," renders ",(0,n.kt)("a",{parentName:"li",href:"/docs/user-interfaces/progress-bar"},(0,n.kt)("inlineCode",{parentName:"a"},"@uppy/progress-bar"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<StatusBar />")," renders ",(0,n.kt)("a",{parentName:"li",href:"/docs/user-interfaces/status-bar"},(0,n.kt)("inlineCode",{parentName:"a"},"@uppy/status-bar")))),(0,n.kt)("p",null,"A couple things to keep in mind when using Uppy with React:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Instead of adding a UI plugin to an Uppy instance with ",(0,n.kt)("inlineCode",{parentName:"li"},".use()"),", the Uppy instance can be passed into components as an ",(0,n.kt)("inlineCode",{parentName:"li"},"uppy")," prop."),(0,n.kt)("li",{parentName:"ul"},"All other props are passed as options to the plugin."),(0,n.kt)("li",{parentName:"ul"},"The Uppy instance should ",(0,n.kt)("strong",{parentName:"li"},"not")," live inside the component but outside of it."),(0,n.kt)("li",{parentName:"ul"},"You have to pass the IDs of your ",(0,n.kt)("inlineCode",{parentName:"li"},"use"),"d plugins to the ",(0,n.kt)("inlineCode",{parentName:"li"},"plugins")," array prop so Dashboard knows it needs to render them."),(0,n.kt)("li",{parentName:"ul"},"An Uppy instance can\u2019t be used by more than one component. Make sure you are using a unique Uppy instance per component.")),(0,n.kt)("p",null,"Here is a basic example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useEffect } from 'react';\nimport Uppy from '@uppy/core';\nimport Webcam from '@uppy/webcam';\nimport { Dashboard } from '@uppy/react';\n\n// Don't forget the CSS\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\n\nconst uppy = new Uppy().use(Webcam);\n\nfunction Component() {\n    return <Dashboard uppy={uppy} plugins={['Webcam']} />;\n}\n")))}k.isMDXComponent=!0}}]);