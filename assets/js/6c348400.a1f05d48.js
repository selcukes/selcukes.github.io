"use strict";(self.webpackChunkSelcukes=self.webpackChunkSelcukes||[]).push([[4711],{5092:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"docker/selenoid-grid-test","title":"Selenoid Grid Test","description":"<Tabs defaultValue=\\"json\\"","source":"@site/docs/11_docker/selenoid-grid-test.md","sourceDirName":"11_docker","slug":"/docker/selenoid-grid-test","permalink":"/docs/docker/selenoid-grid-test","draft":false,"unlisted":false,"editUrl":"https://github.com/selcukes/selcukes.github.io/tree/main/docs/11_docker/selenoid-grid-test.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Selenoid Grid Test","sidebar_position":1},"sidebar":"defaultSidebar","previous":{"title":"CsvMapper","permalink":"/docs/data-bind/csv-mapper"},"next":{"title":"Advanced Examples","permalink":"/docs/contributing/adv-examples"}}');var o=t(4848),s=t(8453),a=t(5537),l=t(9329);const i={title:"Selenoid Grid Test",sidebar_position:1},u=void 0,c={},d=[];function m(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(a.A,{defaultValue:"json",values:[{label:"browsers.json",value:"json"},{label:"docker-compose.yml",value:"yml"}],children:[(0,o.jsx)(l.A,{value:"json",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "firefox": {\n    "default": "latest",\n    "versions": {\n      "latest": {\n        "image": "selenoid/vnc_firefox",\n        "port": "4444",\n        "path": "/wd/hub",\n        "tmpfs": {\n          "/tmp": "size=512m"\n        }\n      }\n    }\n  },\n  "chrome": {\n    "default": "latest",\n    "versions": {\n      "latest": {\n        "image": "selenoid/vnc_chrome",\n        "port": "4444",\n        "tmpfs": {\n          "/tmp": "size=512m"\n        }\n      }\n    }\n  }\n}\n'})})}),(0,o.jsx)(l.A,{value:"yml",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'version: "3.8"\nservices:\n  selenoid:\n    network_mode: bridge\n    image: aerokube/selenoid\n    container_name: selenoid\n    volumes:\n      - "PATH_TO_CONFIG_FOLDER:/etc/selenoid"\n      - "PATH_TO_VIDEO_FOLDER:/opt/selenoid/video"\n      - "PATH_TO_LOGS_FOLDER:/opt/selenoid/logs"\n      - "/var/run/docker.sock:/var/run/docker.sock"\n    environment:\n      - OVERRIDE_VIDEO_OUTPUT_DIR=PATH_TO_VIDEO_FOLDER\n    command: ["-conf", "/etc/selenoid/browsers.json", "-video-output-dir", "/opt/selenoid/video", "-log-output-dir", "/opt/selenoid/logs", "-limit", "5"] # change the limit to have more sessions\n    ports:\n      - "4444:4444"\n\n  selenoid-ui:\n    network_mode: bridge\n    image: "aerokube/selenoid-ui"\n    container_name: selenoid-ui\n    links:\n      - selenoid\n    ports:\n      - "8083:8080"\n    networks:\n      - selenoid\n    command: ["--selenoid-uri", "http://selenoid:4444"]\n\n  chrome_89.0:\n    network_mode: bridge\n    image: "selenoid/vnc_chrome"\n    container_name: chrome_vnc\n    links:\n      - selenoid\n      - selenoid-ui\n    depends_on:\n      - selenoid\n      - selenoid-ui\n    volumes:\n      - "/dev/shm:/dev/shm"\n\n  firefox_87.0:\n    network_mode: bridge\n    image: "selenoid/vnc_firefox"\n    container_name: firefox_latest\n    links:\n      - selenoid\n      - selenoid-ui\n    depends_on:\n      - selenoid\n      - selenoid-ui\n    volumes:\n      - "/dev/shm:/dev/shm"\n'})})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},9329:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);var r=t(4164);const o={tabItem:"tabItem_Ymn6"};var s=t(4848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,a),hidden:t,children:n})}},5537:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(6540),o=t(4164),s=t(5627),a=t(6347),l=t(372),i=t(604),u=t(1861),c=t(8749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const o=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,s=m(e),[a,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,d]=f({queryString:t,groupId:o}),[b,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,c.Dv)(t);return[o,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:o}),v=(()=>{const e=u??b;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{v&&i(v)}),[v]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),h(e)}),[d,h,s]),tabValues:s}}var h=t(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function _(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),o=l[t].value;o!==r&&(u(n),a(o))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{i.push(e)},onKeyDown:d,onClick:c,...s,className:(0,o.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function k(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function x(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,o.A)("tabs-container",v.tabList),children:[(0,g.jsx)(_,{...n,...e}),(0,g.jsx)(k,{...n,...e})]})}function w(e){const n=(0,h.A)();return(0,g.jsx)(x,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var r=t(6540);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);