(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(2),c=a(6),s=a(7),o=(a(14),a(1)),l=a(9),d=a.n(l),u=a(0),m=function(e){var t=e.user,a=t.name,n=t.email;return Object(u.jsx)("a",{className:"user-info-link",href:"mailto:".concat(n),children:a})},j=function(e){var t=e.todo,a=t.id,n=t.title,i=t.completed,r=t.user;return Object(u.jsxs)("article",{"data-id":a,className:d()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:n}),r&&Object(u.jsx)(m,{user:r})]})},b=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"list-of-todo",children:t.map((function(e){return Object(u.jsx)(j,{todo:e},e.id)}))})},h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];function f(e){return h.find((function(t){return t.id===e}))||null}var O=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:f(e.userId)})}));function p(e){return Math.max.apply(Math,Object(c.a)(e.map((function(e){return e.id}))))+1}var x=function(){var e=Object(o.useState)(O),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),s=Object(r.a)(i,2),l=s[0],d=s[1],m=Object(o.useState)(0),j=Object(r.a)(m,2),x=j[0],v=j[1],y=Object(o.useState)(!1),N=Object(r.a)(y,2),S=N[0],I=N[1],g=Object(o.useState)(!1),C=Object(r.a)(g,2),_=C[0],k=C[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("form",{className:"decor",action:"/api/users",method:"POST",onSubmit:function(e){if(e.preventDefault(),x&&l.trim()){var t={id:p(a),title:l,completed:!1,userId:x,user:f(x)};n((function(e){return[].concat(Object(c.a)(e),[t])})),d(""),v(0),I(!1),k(!1)}x||k(!0),l||I(!0)},children:[Object(u.jsx)("div",{className:"form-left-decoration"}),Object(u.jsx)("div",{className:"form-right-decoration"}),Object(u.jsx)("div",{className:"circle"}),Object(u.jsxs)("div",{className:"form-inner",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsx)("input",{id:"title",type:"text","data-cy":"titleInput",placeholder:"Title",value:l,onChange:function(e){d(e.target.value),I(!1)}}),S&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"}),Object(u.jsxs)("select",{id:"userId","data-cy":"userSelect",value:x,onChange:function(e){v(+e.target.value),k(!1)},children:[Object(u.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),h.map((function(e){var t=e.id,a=e.name;return Object(u.jsx)("option",{value:t,children:a},t)}))]}),_&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]})]}),Object(u.jsx)(b,{todos:a})]})};i.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3462914d.chunk.js.map