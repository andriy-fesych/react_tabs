(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var c=n(3),i=n.n(c),a=n(4),d=n(1),b=(n(9),n(0)),o=function(t){var e,n=t.tabs,c=t.onTabSelected,i=t.selectedTabId;return Object(b.jsxs)(b.Fragment,{children:[n.map((function(t){return Object(b.jsx)("button",{type:"button",onClick:function(){i!==t.id&&c(t.id)},children:t.title},t.id)})),Object(b.jsx)("div",{"data-cy":"tab-content",children:null===(e=n.find((function(t){return t.id===i})))||void 0===e?void 0:e.content})]})},s=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],r=function(){var t=Object(d.useState)("tab-1"),e=Object(a.a)(t,2),n=e[0],c=e[1],i=s.find((function(t){return t.id===n}));return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("h1",{children:["Selected tab is\xa0",null===i||void 0===i?void 0:i.title]}),Object(b.jsx)(o,{tabs:s,onTabSelected:c,selectedTabId:n})]})};i.a.render(Object(b.jsx)(r,{}),document.getElementById("root"))},9:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.496d011f.chunk.js.map