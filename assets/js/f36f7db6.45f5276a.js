"use strict";(self.webpackChunkSelcukes=self.webpackChunkSelcukes||[]).push([[5823],{6648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"guides/selcukes-notifier","title":"Selcukes Notifier","description":"Selcukes Notifier helps to send notifications","source":"@site/docs/03_guides/notifier.md","sourceDirName":"03_guides","slug":"/guides/selcukes-notifier","permalink":"/docs/guides/selcukes-notifier","draft":false,"unlisted":false,"editUrl":"https://github.com/selcukes/selcukes.github.io/tree/main/docs/03_guides/notifier.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"selcukes-notifier","title":"Selcukes Notifier","sidebar_position":3},"sidebar":"defaultSidebar","previous":{"title":"Extent Reports","permalink":"/docs/guides/extent-reports"},"next":{"title":"Selcukes Excel Runner","permalink":"/docs/guides/excel-runner"}}');var s=n(4848),r=n(8453),i=n(1470),l=n(9365);const o={id:"selcukes-notifier",title:"Selcukes Notifier",sidebar_position:3},u=void 0,c={},d=[{value:"Motivation",id:"motivation",level:2},{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/selcukes/selcukes-java/tree/master/selcukes-notifier",children:"Selcukes Notifier"})," helps to send notifications\nusing Slack and Microsoft Teams."]}),"\n",(0,s.jsx)(t.h2,{id:"motivation",children:"Motivation"}),"\n",(0,s.jsx)(t.p,{children:"Currently, we moved to On premises environments. To view HTML report generated by automation scripts we need to connect\nto the different VPN\u2019s to open the report and check the related screenshots to see which test case has failed and why.\nSo, why not raise an alert as soon as the test case fails? And why not attach a screenshot along with that alert so that\nall the stakeholders can actually see what has failed in the application?"}),"\n",(0,s.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(t.p,{children:["Selcukes Notifier is primarily used as a Java dependency . We typically use a ",(0,s.jsx)(t.em,{children:"build tool"})," (such\nas ",(0,s.jsx)(t.a,{href:"https://maven.apache.org/",children:"Maven"})," or ",(0,s.jsx)(t.a,{href:"https://gradle.org/",children:"Gradle"}),") to resolve the Selcukes Notifier dependency."]}),"\n","\n",(0,s.jsxs)(i.A,{defaultValue:"maven",values:[{label:"Maven",value:"maven"},{label:"Gradle",value:"gradle"}],children:[(0,s.jsx)(l.A,{value:"maven",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:"\n<dependency>\n    <groupId>io.github.selcukes</groupId>\n    <artifactId>selcukes-notifier</artifactId>\n    <version>${selcukes.version}</version>\n</dependency>\n"})})}),(0,s.jsx)(l.A,{value:"gradle",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'dependencies{\n        implementation("io.github.selcukes:selcukes-notifier:${selcukes.version}")\n}\n'})})})]}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(t.p,{children:["Add ",(0,s.jsx)(t.code,{children:"selcukes.yaml"})," and update below config as follows"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"notifier:\n  notification: true\n  type: teams\n  webhookToken: WEBHOOKXXXX\n  apiToken: APIXXXX\n  channel: selcukes\n  authorIcon: https://github.com/rameshbabuprudhvi.png\n"})}),"\n",(0,s.jsx)(t.p,{children:"Create a test class as follows"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'public class NotifierTest {\n    @Test\n    public void testNotifications() {\n        NotifierFactory.getNotifier()\n                .scenarioName("This is sample scenario")\n                .scenarioStatus("FAILED")\n                .stepDetails("This is sample test step")\n                .errorMessage("NullPointerException")\n                .path("")\n                .pushNotification();\n    }\n}\n'})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var a=n(4164);const s={tabItem:"tabItem_Ymn6"};var r=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,i),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>j});var a=n(6540),s=n(4164),r=n(3104),i=n(6347),l=n(205),o=n(7485),u=n(1682),c=n(679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:s}}=e;return{value:t,label:n,attributes:a,default:s}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,r=h(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[u,d]=f({queryString:n,groupId:s}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,c.Dv)(n);return[s,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),v=(()=>{const e=u??m;return p({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=n(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function k(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),s=l[n].value;s!==a&&(u(t),i(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...r,className:(0,s.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,g.jsx)(k,{...t,...e}),(0,g.jsx)(x,{...t,...e})]})}function j(e){const t=(0,b.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var a=n(6540);const s={},r=a.createContext(s);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);