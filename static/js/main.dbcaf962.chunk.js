(this.webpackJsonptableapp=this.webpackJsonptableapp||[]).push([[0],{1:function(e,t,n){e.exports={multirow_cell:"style_multirow_cell__3X5nN",row_cell:"style_row_cell__1YdWz",lineBox:"style_lineBox__d7WQi",innerLineBox:"style_innerLineBox__3VGit",line:"style_line__2XUo-",contents:"style_contents__3orVV",gradient:"style_gradient__27H4O",header:"style_header__2PNam",textbox:"style_textbox__QG3ET",buttonbox_minus:"style_buttonbox_minus__2wA1M",and:"style_and__20m3W",content:"style_content__Na7YG",buttonbox_plus:"style_buttonbox_plus__E-IEE"}},18:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(2),s=n.n(i),l=n(12),a=n.n(l),o=n(10),r=n(6),d=n(4),j=n.n(d),b=n(3),_=n.n(b),u=n(5),x=n.n(u),m=function(e){var t=e.onClick;return Object(c.jsx)("button",{className:x.a.red,onClick:function(e){t()},children:Object(c.jsx)("div",{className:x.a.minus,children:Object(c.jsx)("div",{})})})},O=function(e){var t=e.onClick;return Object(c.jsx)("button",{className:x.a.green,onClick:function(e){t()},children:Object(c.jsxs)("div",{className:x.a.plus,children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]})})},p=function(e){var t=e.onClick;return Object(c.jsx)("button",{className:x.a.green_big,onClick:function(e){t()},children:Object(c.jsxs)("div",{className:x.a.plus,children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]})})},v=function(e){var t=e.onClick,n=e.title;return Object(c.jsxs)("div",{className:_.a.basic_cell,children:[Object(c.jsx)("div",{className:_.a.and,children:"And"}),Object(c.jsx)("div",{className:_.a.lineBox,children:Object(c.jsx)("div",{className:_.a.line})}),Object(c.jsxs)("div",{className:_.a.contents,children:[Object(c.jsx)("div",{className:_.a.gradient}),Object(c.jsx)("span",{className:_.a.title,children:n}),Object(c.jsx)("div",{className:_.a.buttonbox,children:Object(c.jsx)(m,{onClick:t})})]})]})},f=n(1),y=n.n(f),h=function(e){var t=e.onClickDelete,n=e.title;return Object(c.jsxs)("div",{className:y.a.row_cell,children:[Object(c.jsx)("div",{className:y.a.and,children:"Or"}),Object(c.jsx)("div",{className:y.a.innerLineBox,children:Object(c.jsx)("div",{className:y.a.line})}),Object(c.jsxs)("div",{className:y.a.textbox,children:[n,Object(c.jsx)("div",{className:y.a.buttonbox_minus,children:Object(c.jsx)(m,{onClick:t})})]})]})},N=function(e){var t=e.onClickAdd,n=e.onClickDelete,i=e.onClickDeleteAll,s=e.content,l=e.title;return Object(c.jsxs)("div",{className:y.a.multirow_cell,children:[Object(c.jsx)("div",{className:y.a.and,children:"And"}),Object(c.jsx)("div",{className:y.a.lineBox,children:Object(c.jsx)("div",{className:y.a.line})}),Object(c.jsxs)("div",{className:y.a.contents,children:[Object(c.jsx)("div",{className:y.a.gradient}),Object(c.jsxs)("div",{className:y.a.header,children:[Object(c.jsx)("div",{className:y.a.textbox,children:l}),Object(c.jsx)("div",{className:y.a.buttonbox_minus,children:Object(c.jsx)(m,{onClick:i})})]}),Object(c.jsx)("div",{className:y.a.content,children:s.map((function(e){return Object(c.jsx)(h,{onClickDelete:function(){n(e.id)},title:e.title})}))}),Object(c.jsx)("div",{className:y.a.buttonbox_plus,children:Object(c.jsx)(O,{onClick:function(){t()}})})]})]})},k=n(9),g=n.n(k),C=function(e){var t=e.onSubmit,n=e.onCancel,s=Object(i.useState)(""),l=Object(r.a)(s,2),a=l[0],o=l[1];return Object(c.jsxs)("div",{id:"bg",className:g.a.overlay,onClick:function(e){n()},children:[Object(c.jsx)("button",{className:g.a.cancel,onClick:function(){n()},children:Object(c.jsx)("span",{children:"+"})}),Object(c.jsxs)("form",{className:g.a.form,onSubmit:function(e){e.preventDefault(),t(a)},onClick:function(e){e.stopPropagation()},children:[Object(c.jsx)("label",{htmlFor:"name",children:"please specify your category name: "}),Object(c.jsx)("input",{id:"name",type:"text",onChange:function(e){o(e.target.value)},value:a,required:!0}),Object(c.jsx)("button",{type:"submit",children:"+"})]})]})},w=[{id:1,title:"Age 40+",type:"simple"},{id:2,title:"Ethnicity",type:"multirow",rows:[{id:1,title:"Black"},{id:2,title:"Hispanic"}]},{id:3,title:"Income yearly 45k USD+",type:"simple"}],B=function(){var e=Object(i.useState)(w),t=Object(r.a)(e,2),n=t[0],s=t[1],l=Object(i.useState)(!1),a=Object(r.a)(l,2),d=a[0],b=a[1],_=Object(i.useState)(-1),u=Object(r.a)(_,2),x=u[0],m=u[1],O=function(e){s(n.filter((function(t){return t.id!==e})))},f=function(e){return function(t){var c=n.findIndex((function(t){return t.id===e})),i=n[c].rows.filter((function(e){return e.id!==t})),l=Object(o.a)(n);l[c].rows=i,s(l)}};return Object(c.jsxs)("div",{className:j.a.background,children:[Object(c.jsx)("div",{className:j.a.logo}),Object(c.jsxs)("div",{className:j.a.appbox,children:[Object(c.jsx)("div",{className:j.a.people,children:"People"}),Object(c.jsx)("div",{className:j.a.content,children:n.map((function(e){return"simple"===e.type?Object(c.jsx)(v,{onClick:function(){O(e.id)},title:e.title}):"multirow"===e.type?Object(c.jsx)(N,{onClickAdd:function(){m(e.id),b(!0)},onClickDeleteAll:function(){O(e.id)},onClickDelete:f(e.id),content:e.rows,title:e.title}):void 0}))}),Object(c.jsx)("div",{className:j.a.buttonbox,children:Object(c.jsx)(p,{onClick:function(){b(!0)}})})]}),d?Object(c.jsx)(C,{onSubmit:function(e){x>-1?function(e,t){var c=n.findIndex((function(t){return t.id===e})),i=Object(o.a)(n);if(n[c].rows.length>0){var l=n[c].rows.sort((function(e,t){return t.id-e.id}))[0].id;i[c].rows.push({id:l+1,title:t})}else i[c].rows.push({id:1,title:t});s(i)}(x,e):function(e){if(n.length>1){var t=n.sort((function(e,t){return t.id-e.id}))[0].id;s([].concat(Object(o.a)(n),[{id:t+1,title:e,type:"simple"}]))}else s([{id:1,title:e,type:"simple"}])}(e),m(-1),b(!1)},onCancel:function(){m(-1),b(!1)}}):null]})};a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(B,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={basic_cell:"style_basic_cell__2MM9q",lineBox:"style_lineBox__1ZukP",line:"style_line__2S7Ad",contents:"style_contents__G2Szf",gradient:"style_gradient__J1DsJ",title:"style_title__zG15D",buttonbox:"style_buttonbox__zM2aM",and:"style_and__1sraZ"}},4:function(e,t,n){e.exports={background:"style_background__37m16",logo:"style_logo__1fWVI",appbox:"style_appbox__DZdBL",people:"style_people__3RCM1",content:"style_content__lNUNx",buttonbox:"style_buttonbox__2gunq"}},5:function(e,t,n){e.exports={red:"style_red__hcEU5",green:"style_green__3Brjr",green_big:"style_green_big__4V0SK",symbol:"style_symbol__2QO2Y",plus:"style_plus__1YAfb",minus:"style_minus__2zc8N"}},9:function(e,t,n){e.exports={overlay:"style_overlay__1PkBY",form:"style_form__mRUDJ",cancel:"style_cancel__2113S"}}},[[18,1,2]]]);
//# sourceMappingURL=main.dbcaf962.chunk.js.map