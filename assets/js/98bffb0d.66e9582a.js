"use strict";(self.webpackChunkSelcukes=self.webpackChunkSelcukes||[]).push([[7608],{6557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"guides/selcukes-testng","title":"Selcukes TestNG","description":"Selcukes TestNG is used to run cucumber testng","source":"@site/docs/03_guides/selcukes-testng.md","sourceDirName":"03_guides","slug":"/guides/selcukes-testng","permalink":"/docs/guides/selcukes-testng","draft":false,"unlisted":false,"editUrl":"https://github.com/selcukes/selcukes.github.io/tree/main/docs/03_guides/selcukes-testng.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"selcukes-testng","title":"Selcukes TestNG","sidebar_position":5},"sidebar":"defaultSidebar","previous":{"title":"Selcukes Excel Runner","permalink":"/docs/guides/excel-runner"},"next":{"title":"Selcukes Reports","permalink":"/docs/guides/selcukes-reports"}}');var r=n(4848),a=n(8453),l=n(1470),u=n(9365);const i={id:"selcukes-testng",title:"Selcukes TestNG",sidebar_position:5},o=void 0,c={},d=[{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/selcukes/selcukes-java/tree/master/selcukes-testng",children:"Selcukes TestNG"})," is used to run cucumber testng\ntests with easy runtime configurations for different modules."]}),"\n",(0,r.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsxs)(t.p,{children:["Selcukes TestNG is primarily used as a Java dependency . We typically use a ",(0,r.jsx)(t.em,{children:"build tool"})," (such\nas ",(0,r.jsx)(t.a,{href:"https://maven.apache.org/",children:"Maven"})," or ",(0,r.jsx)(t.a,{href:"https://gradle.org/",children:"Gradle"}),") to resolve the Selcukes TestNG dependency."]}),"\n","\n",(0,r.jsxs)(l.A,{defaultValue:"maven",values:[{label:"Maven",value:"maven"},{label:"Gradle",value:"gradle"}],children:[(0,r.jsx)(u.A,{value:"maven",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:"\n<dependency>\n    <groupId>io.github.selcukes</groupId>\n    <artifactId>selcukes-testng</artifactId>\n    <version>${selcukes.version}</version>\n</dependency>\n"})})}),(0,r.jsx)(u.A,{value:"gradle",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'dependencies{\n        implementation("io.github.selcukes:selcukes-testng:${selcukes.version}")\n}\n'})})})]}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.mdxAdmonitionTitle,{}),(0,r.jsxs)(t.p,{children:["Selcukes TestNG is a transitive Dependency of ",(0,r.jsx)(t.code,{children:"selcukes-excel-runner"}),".If you are using ",(0,r.jsx)(t.code,{children:"excel-runner"}),", then\nignore adding this dependency explicitly."]})]}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:["Add ",(0,r.jsx)(t.code,{children:"selcukes.yaml"})," file in ",(0,r.jsx)(t.code,{children:"src/test/resource"})," folder and update below cucumber options as required"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"cucumber:\n  module: google\n  features: src/test/resources/features/${module}\n  glue: io.github.selcukes.testng.tests\n  tags:\n  plugin:\n"})}),"\n",(0,r.jsx)(t.p,{children:"Also add report options as follows"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"reports:\n  emailReport: true\n  htmlReport: true\n  reportsPath:\n"})}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsx)(t.mdxAdmonitionTitle,{}),(0,r.jsx)(t.p,{children:"Here emailReport means extent reports, which will created automatically without any additional configurations."})]}),"\n",(0,r.jsxs)(t.p,{children:["Create your own Test runner by extending ",(0,r.jsx)(t.code,{children:"SelcukesTestNGRunner"})]}),"\n",(0,r.jsxs)(t.p,{children:["Add By default, all scenarios will execute in sequential. To enable scenario to run in parallel use ",(0,r.jsx)(t.code,{children:"@parallel"}),"\nannotation to the scenarios as follows"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"@parallel\nScenario: Maker starts a game\nWhen the Maker starts a game\nThen the Maker waits for a Breaker to join\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var s=n(4164);const r={tabItem:"tabItem_Ymn6"};var a=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,l),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>y});var s=n(6540),r=n(4164),a=n(3104),l=n(6347),u=n(205),i=n(7485),o=n(1682),c=n(679);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,o.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=p(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[o,d]=m({queryString:n,groupId:r}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,c.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),b=(()=>{const e=o??f;return h({value:e,tabValues:a})?e:null})();(0,u.A)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function x(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),r=u[n].value;r!==s&&(o(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:u.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...a,className:(0,r.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(k,{...t,...e})]})}function y(e){const t=(0,g.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>u});var s=n(6540);const r={},a=s.createContext(r);function l(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);