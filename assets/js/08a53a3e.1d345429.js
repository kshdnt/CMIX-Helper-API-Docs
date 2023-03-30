"use strict";(self.webpackChunkcmix_helper_docs=self.webpackChunkcmix_helper_docs||[]).push([[315],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(r),d=i,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3778:(e,t,r)=>{r.r(t),r.d(t,{Highlight:()=>u,Link:()=>c,assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const o={id:"getClientGroups",title:"Get Client Permission Groups",sidebar_label:"getClientGroups()",hide_table_of_contents:!0,pagination_prev:null},l=void 0,a={unversionedId:"Permissions/getClientGroups",id:"Permissions/getClientGroups",title:"Get Client Permission Groups",description:'GET https://survey-api.cmix.com/clients/{"\\{clientId\\}"}/groups',source:"@site/docs/03-Permissions/01-getClientGroups.md",sourceDirName:"03-Permissions",slug:"/Permissions/getClientGroups",permalink:"/CMIX-Helper/docs/Permissions/getClientGroups",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"getClientGroups",title:"Get Client Permission Groups",sidebar_label:"getClientGroups()",hide_table_of_contents:!0,pagination_prev:null},sidebar:"tutorialSidebar",next:{title:"getProjectGroups()",permalink:"/CMIX-Helper/docs/Permissions/getProjectGroups"}},s={},p=[{value:"Example Usage",id:"example-usage",level:2}],c=e=>{let{children:t}=e;return(0,i.kt)("span",null,t,(0,i.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{display:"inline-block",verticalAlign:"middle",width:"1.25rem",height:"1.25rem",marginBottom:"0.25rem"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},(0,i.kt)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})))},u=e=>{let{children:t,color:r}=e;return(0,i.kt)("span",{style:{backgroundColor:r,borderRadius:"5px",color:"#fff",padding:"0.4rem"}},t)},m={toc:p,Link:c,Highlight:u},d="wrapper";function g(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(u,{color:"#61AFFE",mdxType:"Highlight"},"GET")," https://survey-api.cmix.com/clients/","{clientId}","/groups",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"clientId"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"integer")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(u,{color:"#F93E3E",mdxType:"Highlight"},"Required"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/properties#user-group"},(0,i.kt)(c,{mdxType:"Link"},(0,i.kt)("inlineCode",{parentName:"a"},"Promise<[UserGroup,..]>"))),"  "),(0,i.kt)("h2",{id:"example-usage"},"Example Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import API from "API/router";\n\nconst project = await API.CMIX.Permissions.getClientGroups(36585);\n\n// Response\n// [\n//  {\n//      "id": 40335,\n//      "name": "CMIX Helper Sandbox",\n//      "clientId": 36585,\n//      "groupType": "CLIENT",\n//      "clientAdminYn": false,\n//      "systemYn": false,\n//      "platformId": null\n//  }\n// ]\n')))}g.isMDXComponent=!0}}]);