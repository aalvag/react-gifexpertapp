(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(1),a=n(7),i=n.n(a),s=n(2),u=n(10),o=n(8),j=function(t){var e=t.setCategories,n=Object(c.useState)(""),a=Object(s.a)(n,2),i=a[0],o=a[1];return Object(r.jsx)("form",{onSubmit:function(t){t.preventDefault(),i.trim().length>2&&(e((function(t){return[i].concat(Object(u.a)(t))})),o(""))},children:Object(r.jsx)("input",{type:"text",value:i,onChange:function(t){o(t.target.value)}})})};j.protoTypes={setCategories:n.n(o).a.func.isRequired};var d=n(11),l=n(6),p=n.n(l),f=n(9),b=function(){var t=Object(f.a)(p.a.mark((function t(e){var n,r,c,a,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=6lHQ7RxOIMLotWs6psvCtx5F9LffZj6S"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,a=c.data,i=a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t){var e=t.id,n=t.title,c=t.url;return console.log(e,n,c),Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("img",{src:c,alt:n}),Object(r.jsx)("p",{children:n})]})},h=function(t){var e=t.category,n=function(t){var e=t.category,n=Object(c.useState)({data:[],loading:!0}),r=Object(s.a)(n,2),a=r[0],i=r[1];return Object(c.useEffect)((function(){b(e).then((function(t){setTimeout((function(){i({data:t,loading:!1})}),3e3)}))}),[e]),a}(e),a=n.loading,i=n.data;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:e}),a&&Object(r.jsx)("p",{children:"Loading..."}),Object(r.jsx)("div",{className:"card-grid",children:i.map((function(t){return Object(r.jsx)(O,Object(d.a)({},t),t.id)}))})]})},x=function(){var t=Object(c.useState)(["One Punch"]),e=Object(s.a)(t,2),n=e[0],a=e[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"GiftExpertApp"}),Object(r.jsx)(j,{setCategories:a}),Object(r.jsx)("hr",{}),Object(r.jsx)("ol",{children:n.map((function(t){return Object(r.jsx)(h,{category:t},t)}))})]})},g=(n(20),document.getElementById("root"));i.a.render(Object(r.jsx)(x,{}),g)}},[[21,1,2]]]);
//# sourceMappingURL=main.ca85c7a8.chunk.js.map