(this["webpackJsonpjamsoft-test"]=this["webpackJsonpjamsoft-test"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(3),r=n.n(i),s=n(2),d=n(5),o=n(1),l=function(e){var t=e.value;return Object(o.jsx)("div",{className:"progress-wrapper",children:Object(o.jsx)("div",{className:"progress",children:Object(o.jsx)("div",{className:"determinate",style:{width:"".concat(t||0,"%")}})})})},u=function(e){var t=e.obj,n=e.handleChange,a=e.deleteItem,c=e.useEditItem,i=e.index,r=c(),l=r.onChange,u=r.Edit;return Object(o.jsx)(d.b,{draggableId:"".concat(t.id),index:i,children:function(e){return Object(o.jsxs)("div",Object(s.a)(Object(s.a)(Object(s.a)({className:"TodoItem".concat(t.done?" done":"")},e.draggableProps),e.dragHandleProps),{},{ref:e.innerRef,children:[Object(o.jsxs)("label",{htmlFor:t.id,children:[Object(o.jsx)("input",{checked:t.done,type:"checkbox",id:t.id,name:t.id,onChange:n}),Object(o.jsx)("span",{className:"",children:Object(o.jsx)("input",{onChange:l,maxlength:"90",className:"TodoItem__input",id:t.id,disabled:!t.isEditing,type:"text",value:t.text})})]}),Object(o.jsxs)("div",{className:"TodoItem__btns",children:[Object(o.jsx)("i",{className:"material-icons",children:"drag_handle"}),Object(o.jsx)("i",{className:"material-icons",onClick:u,id:t.id,children:t.isEditing?"save":"edit"}),Object(o.jsx)("i",{onClick:a,id:t.id,className:"material-icons",children:"clear"})]})]}))}})},j=function(e){var t=e.useAddItem,n=e.resetDone,a=e.progress,c=t(),i=c.Add,r=c.input;return Object(o.jsxs)("div",{className:"todoAdd-wrapper",children:[Object(o.jsxs)("form",{onSubmit:i,className:"todoAdd",children:[Object(o.jsxs)("div",{className:"input-field",children:[Object(o.jsx)("input",Object(s.a)({maxlength:"90",placeholder:"ToDo",id:"todo",type:"text",className:"validate"},r)),Object(o.jsx)("label",{htmlFor:"todo",children:"Add Todo"})]}),Object(o.jsxs)("div",{className:"todoAdd__btns",children:[Object(o.jsx)("button",{type:"submit",className:"waves-effect waves-light btn",disabled:""===r.value,children:"ADD"}),Object(o.jsx)("button",{onClick:function(e){e.preventDefault(),n()},className:"waves-effect waves-light btn",disabled:0===a,children:Object(o.jsx)("i",{className:"material-icons",children:"refresh"})})]})]}),Object(o.jsx)("p",{children:"".concat(r.value.length,"/90")})]})},b=n(7),m=n(8),f=function(){var e=c.a.useState([]),t=Object(m.a)(e,2),n=t[0],a=t[1],i=c.a.useState(0),r=Object(m.a)(i,2),d=r[0],o=r[1];c.a.useEffect((function(){var e=JSON.parse(localStorage.getItem("state"));if(e){var t=e.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{isEditing:!1})}));a(t)}}),[]),c.a.useEffect((function(){localStorage.setItem("state",JSON.stringify(n));var e=n.reduce((function(e,t,n){return t.done?e+1:e}),0);o(Math.round(e/n.length*100))}),[n]);return{progress:d,state:n,handleChange:function(e){a((function(t){return t.map((function(t){return t.id===Number(e.target.name)?Object(s.a)(Object(s.a)({},t),{},{done:!t.done}):t}))}))},deleteItem:function(e){var t=Object(b.a)(n),c=t.findIndex((function(t){return t.id===Number(e.target.id)}));t.splice(c,1),a(t)},useAddItem:function(e){var t=c.a.useState(""),n=Object(m.a)(t,2),i=n[0],r=n[1];return{input:{value:i,onChange:function(e){return r(e.target.value)}},Add:function(e){e.preventDefault(),""!==i&&(a((function(e){return[].concat(Object(b.a)(e),[{id:Date.now(),text:i,done:!1,isEditing:!1}])})),r(""))}}},useEditItem:function(){return{onChange:function(e){return a((function(t){return t.map((function(t){return t.id===Number(e.target.id)?Object(s.a)(Object(s.a)({},t),{},{text:e.target.value}):t}))}))},Edit:function(e){return a((function(t){return t.map((function(t){return t.id===Number(e.target.id)?Object(s.a)(Object(s.a)({},t),{},{isEditing:!t.isEditing}):t}))}))}}},changeOrder:function(e){var t=e.destination,c=e.source;console.log(e),console.log(n);var i=Object(b.a)(n);i.splice(c.index,1),i.splice(t.index,0,n[c.index]),a((function(e){return i}))},resetDone:function(){return a((function(e){return e.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{done:!1})}))}))}}},h=function(){var e=f(),t=e.state,n=e.progress,a=e.handleChange,c=e.deleteItem,i=e.useAddItem,r=e.useEditItem,b=e.changeOrder,m=e.resetDone;return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(j,{useAddItem:i,resetDone:m,progress:n}),Object(o.jsx)(l,{value:n}),Object(o.jsx)(d.a,{onDragEnd:function(e){e.destination&&(e.destination.droppableId===e.source.droppableId&&e.destination.index===e.source.index||b(e))},children:Object(o.jsx)(d.c,{droppableId:"droppable-0",children:function(e){return Object(o.jsxs)("div",Object(s.a)(Object(s.a)({className:"TodoList",ref:e.innerRef},e.droppableProps),{},{children:[t.map((function(e,t){return Object(o.jsx)(u,{useEditItem:r,index:t,handleChange:a,deleteItem:c,obj:e},e.id)})),e.placeholder]}))}})})]})};n(21),n(23);r.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.1fb59436.chunk.js.map