(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s,a=c(5),n=c.n(a),l=c(2),i=c(1),d=(c(10),c(11),c(3)),r=c.n(d);!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var o=c(0),j=function(e){var t=e.todos,c=e.setTodoId,a=e.todoId,n=e.query,d=e.filter,j=Object(i.useState)(null),u=Object(l.a)(j,2),b=u[0],h=u[1],m=t.filter((function(e){switch(d){case s.All:return e;case s.Active:return!e.completed;case s.Completed:return e.completed;default:return e}})).filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())}));return Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:m.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"todo",onMouseEnter:function(){return h(e.id)},onMouseLeave:function(){return h(null)},className:r()({"has-background-info-light":a===e.id||b===e.id}),children:[Object(o.jsx)("td",{className:"is-vcentered",children:e.id}),Object(o.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(o.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:r()({"has-text-success":e.completed,"has-text-danger":!e.completed}),children:e.title})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{onClick:function(){return c(e.id)},"data-cy":"selectButton",className:"button",type:"button",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:r()("far",{"fa-eye":!(a===e.id),"fa-eye-slash":a===e.id})})})})})]})}))})]})},u=function(e){var t=e.setFilter,c=e.filter,a=e.query,n=e.setQuery;return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){return t(e.target.value)},children:[Object(o.jsx)("option",{value:s.All,children:"All"}),Object(o.jsx)("option",{value:s.Active,children:"Active"}),Object(o.jsx)("option",{value:s.Completed,children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:function(e){return n(e.target.value)}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),a&&Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(o.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return n("")}})})]})]})},b=(c(13),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})});function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var m=function(e){var t=e.todoId,c=e.setTodoId,s=e.todo,a=Object(i.useState)(null),n=Object(l.a)(a,2),d=n[0],r=n[1],j=Object(i.useState)(!1),u=Object(l.a)(j,2),m=u[0],O=u[1];return Object(i.useEffect)((function(){var e;null!==t&&(O(!0),(e=s.userId,h("/users/".concat(e))).then(r).finally((function(){return O(!1)})))}),[s,t]),Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),m||null===d?Object(o.jsx)(b,{}):Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(s.id)}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:s.title}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[s.completed?Object(o.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(o.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(o.jsx)("a",{href:"mailto:".concat(d.email),children:d.name})]})]})]})]})},O=function(){var e,t,c=Object(i.useState)([]),a=Object(l.a)(c,2),n=a[0],d=a[1],r=Object(i.useState)(s.All),O=Object(l.a)(r,2),x=O[0],f=O[1],p=Object(i.useState)(""),N=Object(l.a)(p,2),v=N[0],y=N[1],g=Object(i.useState)(!1),k=Object(l.a)(g,2),C=k[0],I=k[1],S=Object(i.useState)(null),w=Object(l.a)(S,2),A=w[0],T=w[1];return Object(i.useEffect)((function(){I(!0),h("/todos").then(d).finally((function(){return I(!1)}))}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(u,{filter:x,setFilter:f,query:v,setQuery:y})}),Object(o.jsx)("div",{className:"block",children:C?Object(o.jsx)(b,{}):Object(o.jsx)(j,{query:v,filter:x,todos:n,setTodoId:T,todoId:A})})]})})}),null!==A&&Object(o.jsx)(m,{todo:(e=A,t=n,t.find((function(t){return t.id===e}))),todoId:A,setTodoId:T})]})};n.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.79988b99.chunk.js.map