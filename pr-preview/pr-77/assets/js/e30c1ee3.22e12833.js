"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2377],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},i),{},{components:n})):r.createElement(f,l({ref:t},i))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[c]="string"==typeof e?e:a,l[1]=u;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7462),a=n(7294),o=n(6010),l=n(2466),u=n(6550),s=n(1980),p=n(7392),i=n(12);function c(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,p]=f({queryString:n,groupId:r}),[c,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,i.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),g=(()=>{const e=s??c;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{g&&u(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),p(e),b(e)}),[p,b,o]),tabValues:o}}var g=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:u,selectValue:s,tabValues:p}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),r=p[n].value;r!==u&&(c(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>i.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":u===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return a.createElement(v,(0,r.Z)({key:String(t)},e))}},4138:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>u,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),l=n(5162);const u={slug:"/angular"},s="Angular",p={unversionedId:"framework-integrations/angular",id:"framework-integrations/angular",title:"Angular",description:"Angular components for Uppy UI plugins.",source:"@site/docs/framework-integrations/angular.mdx",sourceDirName:"framework-integrations",slug:"/angular",permalink:"/uppy.io/pr-preview/pr-77/docs/angular",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/framework-integrations/angular.mdx",tags:[],version:"current",frontMatter:{slug:"/angular"},sidebar:"tutorialSidebar",previous:{title:"XHR",permalink:"/uppy.io/pr-preview/pr-77/docs/xhr-upload"},next:{title:"React",permalink:"/uppy.io/pr-preview/pr-77/docs/react"}},i={},c=[{value:"When should I use it?",id:"when-should-i-use-it",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"CSS",id:"css",level:3}],d={toc:c},m="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"angular"},"Angular"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://angular.io"},"Angular")," components for Uppy UI plugins."),(0,a.kt)("h2",{id:"when-should-i-use-it"},"When should I use it?"),(0,a.kt)("p",null,"When you are using the Angular framework and you wouldl like to use on of the UI\ncomponents."),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/angular\n"))),(0,a.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/angular\n")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You also need to install the UI plugin you want to use. For instance,\n",(0,a.kt)("inlineCode",{parentName:"p"},"@uppy/dashboard"),".")),(0,a.kt)("h2",{id:"use"},"Use"),(0,a.kt)("p",null,"Instead of adding a UI plugin to an Uppy instance with ",(0,a.kt)("inlineCode",{parentName:"p"},".use()"),", the Uppy\ninstance can be passed into components as a ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," prop."),(0,a.kt)("p",null,"The following plugins are available as Angular component wrappers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<uppy-dashboard />")," renders\n",(0,a.kt)("a",{parentName:"li",href:"/docs/user-interfaces/dashboard"},(0,a.kt)("inlineCode",{parentName:"a"},"@uppy/dashboard"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<uppy-drag-drop />")," renders\n",(0,a.kt)("a",{parentName:"li",href:"/docs/user-interfaces/drag-drop"},(0,a.kt)("inlineCode",{parentName:"a"},"@uppy/drag-drop"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<uppy-progress-bar />")," renders\n",(0,a.kt)("a",{parentName:"li",href:"/docs/user-interfaces/progress-bar"},(0,a.kt)("inlineCode",{parentName:"a"},"@uppy/progress-bar"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<uppy-status-bar />")," renders\n",(0,a.kt)("a",{parentName:"li",href:"/docs/user-interfaces/status-bar"},(0,a.kt)("inlineCode",{parentName:"a"},"@uppy/status-bar")))),(0,a.kt)("p",null,"Each component takes a ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," prop that will be passed to the UI Plugin."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="app.module.ts" showLineNumbers',title:'"app.module.ts"',showLineNumbers:!0},"import { NgModule } from '@angular/core';\nimport { UppyAngularDashboardModule } from '@uppy/angular';\n\nimport { BrowserModule } from '@angular/platform-browser';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n    declarations: [AppComponent],\n    imports: [BrowserModule, UppyAngularDashboardModule],\n    providers: [],\n    bootstrap: [AppComponent],\n})\nclass {}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="app.component.html" showLineNumbers',title:'"app.component.html"',showLineNumbers:!0},'<uppy-dashboard [uppy]="uppy"> </uppy-dashboard>\n')),(0,a.kt)("p",null,"You should initialize Uppy as a property of your component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="app.component.ts" showLineNumbers',title:'"app.component.ts"',showLineNumbers:!0},"import { Component } from '@angular/core';\nimport { Uppy } from '@uppy/core';\n\n@Component({\n    selector: 'app-root',\n})\nexport class AppComponent {\n    uppy: Uppy = new Uppy({ debug: true, autoProceed: true });\n}\n")),(0,a.kt)("h3",{id:"css"},"CSS"),(0,a.kt)("p",null,"All components have their own styling and should be added to your component\ndecorator. You can find the CSS import statements in the docs of the UI plugin\nyou want to use. For instance, for ",(0,a.kt)("inlineCode",{parentName:"p"},"@uppy/dashboard"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Component({\n  // ...\n  styleUrls: [\n    '../node_modules/@uppy/core/dist/style.css',\n    '../node_modules/@uppy/dashboard/dist/style.css',\n  ],\n})\n")))}f.isMDXComponent=!0}}]);