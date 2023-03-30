"use strict";(self.webpackChunkcmix_helper_docs=self.webpackChunkcmix_helper_docs||[]).push([[305],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5777:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>c,Link:()=>u,assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const l={id:"setStatus",title:"Set Project Status",sidebar_label:"setStatus()",hide_table_of_contents:!0,pagination_next:null},o=void 0,i={unversionedId:"Projects/setStatus",id:"Projects/setStatus",title:"Set Project Status",description:'PATCH https://survey-api.cmix.com/projects/{"\\{projectId\\}"}',source:"@site/docs/02-Projects/07-setStatus.md",sourceDirName:"02-Projects",slug:"/Projects/setStatus",permalink:"/CMIX-Helper/docs/Projects/setStatus",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"setStatus",title:"Set Project Status",sidebar_label:"setStatus()",hide_table_of_contents:!0,pagination_next:null},sidebar:"tutorialSidebar",previous:{title:"cloneReady()",permalink:"/CMIX-Helper/docs/Projects/cloneReady"}},s={},d=[{value:"Example Usage",id:"example-usage",level:2}],u=e=>{let{children:t}=e;return(0,a.kt)("span",null,t,(0,a.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{display:"inline-block",verticalAlign:"middle",width:"1.25rem",height:"1.25rem",marginBottom:"0.25rem"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},(0,a.kt)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})))},c=e=>{let{children:t,color:n}=e;return(0,a.kt)("span",{style:{backgroundColor:n,borderRadius:"5px",color:"#fff",padding:"0.4rem"}},t)},p={toc:d,Link:u,Highlight:c},m="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(c,{color:"#50e3c2",mdxType:"Highlight"},"PATCH")," https://survey-api.cmix.com/projects/","{projectId}",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"projectId"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"integer")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(c,{color:"#F93E3E",mdxType:"Highlight"},"Required"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"status"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(c,{color:"#F93E3E",mdxType:"Highlight"},"Required"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/properties#expanded-project"},(0,a.kt)(u,{mdxType:"Link"},(0,a.kt)("inlineCode",{parentName:"a"},"Promise<ExpandedProject>"))),"  "),(0,a.kt)("h2",{id:"example-usage"},"Example Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import API from "API/router";\n\nconst project = await API.CMIX.Project.setStatus(109834, "TEST");\n\n// Response\n// {\n//  "id": 109834,\n//  "name": "Project X",\n//  "clientId": 36585,\n//  "pUsrId": 29693,\n//  "sUsrId": null,\n//  "surveyId": 138665,\n//  "mxrId": null,\n//  "cxNumber": null,\n//  "token": "1D2E4B0B",\n//  "testToken": "5402762F",\n//  "libraryYn": false,\n//  "dateCreated": "2023-03-29T21:25:07+00:00",\n//  "dateModified": "2023-03-29T21:25:22+00:00",\n//  "pscId": 2,\n//  "externalId": null,\n//  "published": false,\n//  "draftSurveyId": 138665,\n//  "deployingYn": "N",\n//  "enableProjectQuotas": false,\n//  "status": "TEST",\n//  "surveys": [\n//      {\n//          "id": 138665,\n//          "mxrId": null,\n//          "dateCreated": "2023-03-29T21:25:07+00:00",\n//          "dateModified": "2023-03-30T17:57:45+00:00",\n//          "svsId": 2,\n//          "token": "1D2E4B0B",\n//          "name": "Project X",\n//          "clientId": 36585,\n//          "projectId": 109834,\n//          "cxNumber": null,\n//          "pUsrId": 29693,\n//          "sUsrId": null,\n//          "statusDate": "2023-03-30T17:57:45+00:00",\n//          "libraryYn": false,\n//          "externalId": null,\n//          "publishedYn": "N",\n//          "version": null,\n//          "cloningProgress": 100,\n//          "status": "TEST"\n//      }\n//  ],\n//  "currentSurvey": {\n//      "id": 138665,\n//      "mxrId": null,\n//      "dateCreated": "2023-03-29T21:25:07+00:00",\n//      "dateModified": "2023-03-30T17:57:45+00:00",\n//      "svsId": 2,\n//      "token": "1D2E4B0B",\n//      "name": "Project X",\n//      "clientId": 36585,\n//      "projectId": 109834,\n//      "cxNumber": null,\n//      "pUsrId": 29693,\n//      "sUsrId": null,\n//      "statusDate": "2023-03-30T17:57:45+00:00",\n//      "libraryYn": false,\n//      "externalId": null,\n//      "publishedYn": "N",\n//      "version": null,\n//      "cloningProgress": 100,\n//      "status": "TEST"\n//  },\n//  "primaryProgrammer": {\n//      "id": 29693,\n//      "firstName": "Kaloyan",\n//      "lastName": "Shivergev",\n//      "profileImageUrl": null,\n//      "dateCreated": "2023-03-29 15:43:16-04",\n//      "dateModified": "2023-03-29 16:27:09-04",\n//      "authFail": 0,\n//      "dateLockout": null,\n//      "platformId": null,\n//      "keycloakId": null,\n//      "sessionToken": null,\n//      "profileThumbnailUrl": null,\n//      "status": "ACTIVE"\n//  },\n//  "secondaryProgrammer": null\n// }\n')))}f.isMDXComponent=!0}}]);