"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2792],{5162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),n=r(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(7462),n=r(7294),l=r(6010),o=r(2466),s=r(6550),i=r(1980),u=r(7392),p=r(12);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function c(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=c(e),[o,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,u]=h({queryString:r,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,p.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),f=(()=>{const e=i??d;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var f=r(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:r,selectedValue:s,selectValue:i,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),c=e=>{const t=e.currentTarget,r=p.indexOf(t),a=u[r].value;a!==s&&(d(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},o,{className:(0,l.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":s===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function b(e){const t=g(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},n.createElement(y,(0,a.Z)({},e,t)),n.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return n.createElement(b,(0,a.Z)({key:String(t)},e))}},3068:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(7294),n=r(814),l=r(3612);const o=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md format:check-diff","prepare":"husky install","format:show-diff":"git stash push -q; prettier . -w --loglevel silent && git --no-pager diff && git reset --hard; git stash pop -q","format:check":"prettier -c .","format:check-diff":"yarn format:check || yarn format:show-diff","format":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/plugin-client-redirects":"^2.3.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","@uppy/audio":"latest","@uppy/box":"latest","@uppy/core":"latest","@uppy/dashboard":"latest","@uppy/dropbox":"latest","@uppy/google-drive":"latest","@uppy/image-editor":"latest","@uppy/instagram":"latest","@uppy/onedrive":"latest","@uppy/react":"latest","@uppy/remote-sources":"latest","@uppy/screen-capture":"latest","@uppy/tus":"latest","@uppy/unsplash":"latest","@uppy/url":"latest","@uppy/webcam":"latest","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","@typescript-eslint/eslint-plugin":"^5.48.1","@typescript-eslint/parser":"^5.48.1","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:s}=o;function i(e){let{children:t,uppyCssName:r="uppy.min.css",uppyJsName:o="uppy.min.js"}=e,i=[];a.Children.toArray(t).forEach((e=>{i=[...i,...String(e).trim().split("\n").map((e=>e.trim()))]}));const u=i.map((e=>`  ${e}`)).join("\n"),p=`https://releases.transloadit.com/uppy/v${s}/${o}`,d=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${s}/${r}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${u.replace(/{{UPPY_JS_URL}}/g,p)}\n<\/script>\n`;return a.createElement(a.Fragment,null,a.createElement(l.Z,{type:"caution"},a.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),a.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),a.createElement(n.Z,{language:"html"},d))}},1092:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=r(7462),n=(r(7294),r(3905)),l=r(4866),o=r(5162),s=r(3068);const i={sidebar_position:2,slug:"/drop-target"},u="Drop target",p={unversionedId:"user-interfaces/elements/drop-target",id:"user-interfaces/elements/drop-target",title:"Drop target",description:"The @uppy/drop-target plugin lets your users drag-and-drop files on any",source:"@site/docs/user-interfaces/elements/drop-target.mdx",sourceDirName:"user-interfaces/elements",slug:"/drop-target",permalink:"/uppy.io/pr-preview/pr-77/docs/drop-target",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/user-interfaces/elements/drop-target.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/drop-target"},sidebar:"tutorialSidebar",previous:{title:"Image editor",permalink:"/uppy.io/pr-preview/pr-77/docs/image-editor"},next:{title:"Thumbnail generator",permalink:"/uppy.io/pr-preview/pr-77/docs/thumbnail-generator"}},d={},c=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>onDragLeave</code>",id:"ondragleave",level:4},{value:"<code>onDragOver</code>",id:"ondragover",level:4},{value:"<code>onDrop</code>",id:"ondrop",level:4},{value:"<code>target</code>",id:"target",level:4}],m={toc:c},h="wrapper";function g(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"drop-target"},"Drop target"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"@uppy/drop-target")," plugin lets your users drag-and-drop files on any\nelement on the page, for example the whole page, ",(0,n.kt)("inlineCode",{parentName:"p"},"document.body"),"."),(0,n.kt)("p",null,"Can be used together with Uppy Dashboard or Drag & Drop plugins, or your custom\nsolution targeting any DOM element."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"/examples"},"Try out the live example")," or take it for a spin in\n",(0,n.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-drag-drop-gyewzx?file=/src/index.js"},"CodeSandbox"),".")),(0,n.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,n.kt)("p",null,"When you want to allow users to drag and drop files in your own UI, rather than\nin the ",(0,n.kt)("a",{parentName:"p",href:"../dashboard"},(0,n.kt)("inlineCode",{parentName:"a"},"Dashboard"))," UI, or catch dropped files from anywhere on\nthe page."),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/drop-target\n"))),(0,n.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/drop-target\n"))),(0,n.kt)(o.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,n.kt)(s.Z,{mdxType:"UppyCdnExample"},'\n        import { DropTarget } from "{{UPPY_JS_URL}}"\n        const DropTarget = new Uppy().use(DropTarget)\n      '))),(0,n.kt)("h2",{id:"use"},"Use"),(0,n.kt)("p",null,"This module has one default export: the ",(0,n.kt)("inlineCode",{parentName:"p"},"DropTarget")," plugin class."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"{8-10} showLineNumbers","{8-10}":!0,showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport DropTarget from '@uppy/drop-target';\n\nimport '@uppy/core/dist/style.css';\nimport '@uppy/drop-target/dist/style.css';\n\nconst uppy = new Uppy();\nuppy.use(DropTarget, {\n    target: document.body,\n});\n")),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("h4",{id:"ondragleave"},(0,n.kt)("inlineCode",{parentName:"h4"},"onDragLeave")),(0,n.kt)("p",null,"Event listener for the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragleave_event"},(0,n.kt)("inlineCode",{parentName:"a"},"dragleave")," event"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3-5} showLineNumbers","{3-5}":!0,showLineNumbers:!0},"uppy.use(DropTarget, {\n    target: document.body,\n    onDragLeave: (event) => {\n        event.stopPropagation();\n    },\n});\n")),(0,n.kt)("h4",{id:"ondragover"},(0,n.kt)("inlineCode",{parentName:"h4"},"onDragOver")),(0,n.kt)("p",null,"Event listener for the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragover_event"},(0,n.kt)("inlineCode",{parentName:"a"},"dragover")," event"),"."),(0,n.kt)("h4",{id:"ondrop"},(0,n.kt)("inlineCode",{parentName:"h4"},"onDrop")),(0,n.kt)("p",null,"Event listener for the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event"},(0,n.kt)("inlineCode",{parentName:"a"},"drop")," event"),"."),(0,n.kt)("h4",{id:"target"},(0,n.kt)("inlineCode",{parentName:"h4"},"target")),(0,n.kt)("p",null,"DOM element, CSS selector, or plugin to place the drag and drop area into\n(",(0,n.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Element"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Function"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"UIPlugin"),", default: ",(0,n.kt)("inlineCode",{parentName:"p"},"null"),")."))}g.isMDXComponent=!0}}]);