"use strict";(self.webpackChunkSelcukes=self.webpackChunkSelcukes||[]).push([[5950],{8781:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"test/mobile-test","title":"Mobile Test","description":"<Tabs defaultValue=\\"java\\"","source":"@site/docs/02_test/mobile-test.md","sourceDirName":"02_test","slug":"/test/mobile-test","permalink":"/docs/test/mobile-test","draft":false,"unlisted":false,"editUrl":"https://github.com/selcukes/selcukes.github.io/tree/main/docs/02_test/mobile-test.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"mobile-test","title":"Mobile Test","sidebar_position":2},"sidebar":"defaultSidebar","previous":{"title":"Web Test","permalink":"/docs/test/web-test"},"next":{"title":"Desktop Test","permalink":"/docs/test/desktop-test"}}');var a=n(4848),s=n(8453),o=n(5537),i=n(9329);const l={id:"mobile-test",title:"Mobile Test",sidebar_position:2},u=void 0,c={},d=[];function p(e){const t={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(o.A,{defaultValue:"java",values:[{label:"selcukes.yaml",value:"yaml"},{label:"MobileTest.java",value:"java"}],children:[(0,a.jsx)(i.A,{value:"yaml",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:'mobile:\n  remote: true\n  cloud: BROWSER_STACK\n  platform: Android\n  browser: CHROME\n  headLess: true\n  serviceUrl: "http://127.0.0.1:4723"\n  app: "src/test/resources/android-app.apk"\n'})})}),(0,a.jsx)(i.A,{value:"java",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'package org.example;\n\nimport io.appium.java_client.android.Activity;\nimport io.appium.java_client.android.AndroidDriver;\nimport io.github.selcukes.commons.annotation.Lifecycle;\nimport io.github.selcukes.core.driver.DriverManager;\nimport io.github.selcukes.core.page.MobilePage;\nimport io.github.selcukes.core.page.Pages;\nimport io.github.selcukes.core.wait.WaitCondition;\nimport org.openqa.selenium.By;\nimport org.testng.annotations.BeforeMethod;\nimport org.testng.annotations.Test;\n\nimport static io.github.selcukes.core.enums.SwipeDirection.DOWN;\nimport static io.github.selcukes.core.enums.SwipeDirection.UP;\nimport static java.lang.String.format;\n\n@Lifecycle\npublic class MobileAppTest {\n    MobilePage page;\n\n    @BeforeMethod\n    void beforeTest() {\n        page = Pages.mobilePage();\n    }\n\n    private By textView(String text) {\n        return By.xpath(format("//android.widget.TextView[@text=\'%s\']", text));\n    }\n\n    @Test\n    public void expandAndScrollScreenTest() {\n        page.click("aid:Views")\n                .click("aid:Expandable Lists")\n                .click("aid:3. Simple Adapter")\n                .swipe(textView("Group 18"), DOWN)\n                .click(textView("Group 18"))\n                .swipe(textView("Child 13"), DOWN)\n                .swipe(textView("Group 1"), UP);\n\n    }\n}\n'})})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},9329:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var s=n(4848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:n,children:t})}},5537:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(6540),a=n(4164),s=n(5627),o=n(6347),i=n(372),l=n(604),u=n(1861),c=n(8749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=b({queryString:n,groupId:a}),[f,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),v=(()=>{const e=u??f;return m({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),h(e)}),[d,h,s]),tabValues:s}}var h=n(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==r&&(u(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{l.push(e)},onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function k(e){let{lazy:t,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(k,{...t,...e})]})}function y(e){const t=(0,h.A)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(6540);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);