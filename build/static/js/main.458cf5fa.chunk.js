(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{16:function(e,t,n){e.exports={Contact__list:"PhoneContacts_Contact__list__1azxW",Contact__item:"PhoneContacts_Contact__item__13Qym",Button:"PhoneContacts_Button__2Fvkh",block__contact:"PhoneContacts_block__contact__1ymIp",block__contact__item:"PhoneContacts_block__contact__item__2ETsT",block__contact__icon:"PhoneContacts_block__contact__icon__2YCI8"}},20:function(e,t,n){e.exports={nav__menu__container:"NavMenu_nav__menu__container__2dcSh",nav__menu__item:"NavMenu_nav__menu__item__1gj7Q",nav__menu__text__dec:"NavMenu_nav__menu__text__dec__1GLYT"}},27:function(e,t,n){e.exports={Contacts__title:"PhoneBook_Contacts__title__1soz4",Filter__text:"PhoneBook_Filter__text__2PMSn"}},30:function(e,t,n){e.exports={UserMenu:"UserMenu_UserMenu__1eynt",user__text:"UserMenu_user__text__3RY4-"}},31:function(e,t,n){e.exports={Filter__search:"Filter_Filter__search__1oJmY",Filter__input:"Filter_Filter__input__1FUZG"}},41:function(e,t,n){e.exports={container:"global_container__1GSA-"}},5:function(e,t,n){e.exports={Forma:"InputPhonebook_Forma__mMyPT",Forma__input:"InputPhonebook_Forma__input__1AjOE",nameinput:"InputPhonebook_nameinput__2MBVh",Button__form:"InputPhonebook_Button__form__yveQA"}},50:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(26),s=n.n(r),o=n(17),u=(n(50),n(2)),i=n(8),l=n(20),j=n.n(l),b=n(4),_={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUsername:function(e){return e.auth.user.name}},d=n(10),m=n.n(d),O=n(18),p=n(13),h=n.n(p),f=n(6);h.a.defaults.baseURL="https://connections-api.herokuapp.com";var x=function(e){h.a.defaults.headers.common.Authorization="Bearer ".concat(e)},v=function(){h.a.defaults.headers.common.Authorization=""},g=Object(f.c)("auth/register",function(){var e=Object(O.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("/users/signup",t);case 3:return n=e.sent,a=n.data,x(a.token),e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),k=Object(f.c)("auth/login",function(){var e=Object(O.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("/users/login",t);case 3:return n=e.sent,a=n.data,x(a.token),e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),C={register:g,logOut:Object(f.c)("auth/logout",Object(O.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("/users/logout");case 3:v(),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})))),logIn:k,fetchCurrentUser:Object(f.c)("auth/refresh",function(){var e=Object(O.a)(m.a.mark((function e(t,n){var a,c,r,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.getState(),null!==(c=a.auth.token)){e.next=4;break}return e.abrupt("return",n.rejectWithValue());case 4:return x(c),e.prev=5,e.next=8,h.a.get("/users/current");case 8:return r=e.sent,s=r.data,e.abrupt("return",s);case 13:e.prev=13,e.t0=e.catch(5);case 15:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,n){return e.apply(this,arguments)}}())},N=n(16),y=n.n(N),w=n(30),F=n.n(w),I=n(0);var L=function(){var e=Object(b.c)(_.getUsername),t=Object(b.b)();return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)("div",{className:F.a.UserMenu,children:[Object(I.jsx)("div",{children:Object(I.jsxs)("span",{className:F.a.user__text,children:["Hello, ",e]})}),Object(I.jsx)("button",{type:"button",onClick:function(){return t(C.logOut())},className:y.a.Button,children:"Logout"})]})})};function P(){var e=Object(b.c)(_.getIsLoggedIn),t=Object(a.useState)(!0),n=Object(i.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(!1),l=Object(i.a)(s,2),d=l[0],m=l[1];return Object(I.jsxs)("header",{children:[Object(I.jsx)("nav",{children:e?Object(I.jsx)(L,{}):Object(I.jsx)("div",{children:Object(I.jsxs)("ul",{className:j.a.nav__menu__container,children:[Object(I.jsx)("li",{className:j.a.nav__menu__item,children:Object(I.jsx)(o.b,{to:"login",className:c?j.a.nav__menu__text__dec:j.a.nav__menu__text,onClick:function(){r(!0),m(!1)},children:"Authorization"})}),Object(I.jsx)("li",{className:j.a.nav__menu__item,children:Object(I.jsx)(o.b,{to:"register",className:d?j.a.nav__menu__text__dec:j.a.nav__menu__text,onClick:function(){r(!1),m(!0)},children:"Register"})})]})})}),Object(I.jsx)(u.b,{})]})}var B=n(3),S=n(14),A=n(15),M=n(5),U=n.n(M),T=function(){var e=Object(b.b)(),t=Object(a.useState)({email:"",password:""}),n=Object(i.a)(t,2),c=n[0],r=n[1],s=Object(b.c)(_.getIsLoggedIn),o=function(e){var t=e.target,n=t.name,a=t.value;r((function(e){return Object(S.a)(Object(S.a)({},e),{},Object(B.a)({},n,a))}))},u=function(){r({email:"",password:""})};return Object(I.jsx)("div",{className:"",children:!s&&Object(I.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(C.logIn(Object(S.a)({},c))),u()},className:U.a.Forma,children:[Object(I.jsx)("label",{}),Object(I.jsx)("span",{children:"login"}),Object(I.jsx)("input",{className:U.a.Forma__input,id:Object(A.a)(),type:"text",name:"email",value:c.email,required:!0,onChange:o}),Object(I.jsx)("label",{}),Object(I.jsx)("span",{children:"Password"}),Object(I.jsx)("input",{className:U.a.Forma__input,id:Object(A.a)(),type:"text",name:"password",value:c.password,required:!0,onChange:o}),Object(I.jsx)("button",{type:"submit",className:U.a.Button__form,children:"Login"})]})})},z=function(){var e=Object(a.useState)({name:"",email:"",password:""}),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(b.b)(),s=function(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(S.a)(Object(S.a)({},e),{},Object(B.a)({},n,a))}))},o=function(){c({name:"",email:"",password:""})};return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(C.register(Object(S.a)({},n))),o()},className:U.a.Forma,children:[Object(I.jsx)("label",{className:U.a.nameinput}),Object(I.jsx)("span",{children:"login"}),Object(I.jsx)("input",{className:U.a.Forma__input,id:Object(A.a)(),type:"text",name:"name",value:n.name,required:!0,onChange:s}),Object(I.jsx)("label",{className:U.a.nameinput}),Object(I.jsx)("span",{children:"Password"}),Object(I.jsx)("input",{className:U.a.Forma__input,id:Object(A.a)(),type:"text",name:"password",value:n.password,required:!0,onChange:s}),Object(I.jsx)("label",{}),Object(I.jsx)("span",{children:"Email"}),Object(I.jsx)("input",{className:U.a.Forma__input,id:Object(A.a)(),type:"text",name:"email",value:n.email,required:!0,onChange:s}),Object(I.jsx)("button",{type:"submit",className:U.a.Button__form,children:"Registry"})]})})},q=n(41),E=n.n(q);function R(e){var t=e.element,n=e.redirectTo,a=Object(b.c)(_.getIsLoggedIn);return Object(I.jsx)(I.Fragment,{children:a?t:Object(I.jsx)(u.a,{to:n})})}function J(e){var t=e.redirectTo,n=e.restricted,a=void 0!==n&&n,c=e.element,r=Object(b.c)(_.getIsLoggedIn);return!t&&a?Object(I.jsx)(u.a,{to:"/"}):Object(I.jsx)(I.Fragment,{children:r&&a?Object(I.jsx)(u.a,{to:t}):c})}var Y=Object(f.b)("contacts/addFilter");h.a.defaults.baseURL="https://connections-api.herokuapp.com";var Z=Object(f.c)("contacts/fetchContacts",Object(O.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/contacts");case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))),D=Object(f.c)("contacts/addContacts",function(){var e=Object(O.a)(m.a.mark((function e(t){var n,a,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={name:t.name,number:t.number},e.prev=1,e.next=4,h.a.post("/contacts",n);case 4:return a=e.sent,c=a.data,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()),G=Object(f.c)("contacts/deleteContact",function(){var e=Object(O.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.delete("/contacts/".concat(t));case 3:return e.abrupt("return",t);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()),Q=n(21),V=function(e){return e.contacts.items},W=function(e){return e.contacts.filter},H=(Object(Q.a)([V,W],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),function(e){var t=e.onSubmit,n=Object(a.useState)({name:"",number:""}),c=Object(i.a)(n,2),r=c[0],s=c[1],o=function(e){var t=e.target,n=t.name,a=t.value;s((function(e){return Object(S.a)(Object(S.a)({},e),{},Object(B.a)({},n,a))}))},u=function(){s({name:"",number:""})};return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(Object(S.a)({},r)),u()},className:U.a.Forma,children:[Object(I.jsx)("label",{className:U.a.nameinput}),"Name",Object(I.jsx)("input",{className:U.a.Forma__input,id:Object(A.a)(),type:"text",name:"name",value:r.name,placeholder:"Ivan Petrov",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:o}),Object(I.jsx)("label",{className:U.a.nameinput}),"Number",Object(I.jsx)("input",{className:U.a.Forma__input,id:Object(A.a)(),type:"text",name:"number",value:r.number,placeholder:"+380990000000",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:o}),Object(I.jsx)("button",{type:"submit",className:U.a.Button__form,children:"Add Contact"})]})})}),$=n.p+"static/media/sprite.48e8d233.svg",K=function(e){var t=e.contacts,n=void 0===t?[]:t,a=e.delContact,c=e.isLogin;return Object(I.jsx)(I.Fragment,{children:!c&&Object(I.jsx)("ul",{className:y.a.Contact__list,children:n.map((function(e){return Object(I.jsxs)("li",{className:y.a.Contact__item,children:[Object(I.jsxs)("div",{className:y.a.block__contact__item,children:[Object(I.jsx)("svg",{width:25,height:25,className:y.a.block__contact__icon,children:Object(I.jsx)("use",{href:$+"#icon-user-tie"})}),Object(I.jsxs)("span",{children:[" ",e.name]})]}),Object(I.jsxs)("div",{className:y.a.block__contact__item,children:[Object(I.jsx)("svg",{width:25,height:25,className:y.a.block__contact__icon,children:Object(I.jsx)("use",{href:$+"#icon-phone"})}),Object(I.jsxs)("span",{children:[" ",e.number]})]}),Object(I.jsx)("button",{type:"button",onClick:function(){return a(e.id)},className:y.a.Button,children:"Remove"})]},e.id)}))})})},X=n(31),ee=n.n(X),te=function(e){var t=e.filterContact,n=e.value;return Object(I.jsx)("div",{children:Object(I.jsxs)("form",{className:ee.a.Filter__search,children:[Object(I.jsx)("label",{children:"Search"}),Object(I.jsx)("input",{className:ee.a.Filter__input,value:n,onChange:t,placeholder:"Enter your name"})]})})},ne=n(27),ae=n.n(ne);var ce=function(){var e=Object(b.c)(V),t=Object(b.c)(W),n=Object(b.b)();Object(a.useEffect)((function(){Z&&n(Z())}),[n]);var c=function(t){return e.find((function(e){return e.name===t}))},r=t.toLowerCase(),s=e.filter((function(e){return e.name.toLowerCase().includes(r)}));return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("div",{className:ae.a.PhoneBookBlock,children:Object(I.jsx)(H,{onSubmit:function(e){var t={name:e.name,number:e.number};if(c(t.name))return console.log(t.name),alert("Name ".concat(t.name,"already on your list\n      "));n(D(t))}})}),Object(I.jsxs)("div",{children:[Object(I.jsxs)("div",{children:[Object(I.jsx)("h2",{className:ae.a.Contacts__title,children:"Contacts"}),e.length>0?Object(I.jsx)(te,{filterContact:function(e){var t=e.currentTarget.value;n(Y(t))},value:t}):Object(I.jsx)("p",{className:ae.a.Filter__text,children:"No contacts\ud83d\ude41"})]}),Object(I.jsx)(K,{contacts:s,delContact:function(e){n(G(e))}})]})]})};var re,se,oe,ue=function(){var e=Object(b.b)();return Object(a.useEffect)((function(){e(C.fetchCurrentUser())}),[e]),Object(I.jsx)("div",{className:E.a.container,children:Object(I.jsx)(u.e,{children:Object(I.jsxs)(u.c,{path:"/",element:Object(I.jsx)(P,{}),children:[Object(I.jsx)(u.c,{path:"/",element:Object(I.jsx)(u.a,{replace:!0,to:"/login"})}),Object(I.jsx)(u.c,{path:"login",element:Object(I.jsx)(J,{element:Object(I.jsx)(T,{}),redirectTo:"/contacts",restricted:!0})}),Object(I.jsx)(u.c,{path:"register",element:Object(I.jsx)(J,{element:Object(I.jsx)(z,{}),redirectTo:"/contacts",restricted:!0})}),Object(I.jsx)(u.c,{path:"contacts/*",element:Object(I.jsx)(R,{element:Object(I.jsx)(ce,{}),redirectTo:"/login"})})]})})})},ie=(n(77),n(42)),le=n(45),je=n(7),be=Object(f.d)([],(re={},Object(B.a)(re,Z.fulfilled,(function(e,t){return t.payload})),Object(B.a)(re,D.fulfilled,(function(e,t){return[].concat(Object(le.a)(e),[t.payload])})),Object(B.a)(re,G.fulfilled,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),re)),_e=Object(f.d)(!1,(se={},Object(B.a)(se,Z.pending,(function(){return!0})),Object(B.a)(se,D.fulfilled,(function(){return!1})),Object(B.a)(se,D.rejected,(function(){return!1})),Object(B.a)(se,G.pending,(function(){return!0})),Object(B.a)(se,G.fulfilled,(function(){return!1})),Object(B.a)(se,G.rejected,(function(){return!1})),Object(B.a)(se,Z.pending,(function(){return!0})),Object(B.a)(se,Z.fulfilled,(function(){return!1})),Object(B.a)(se,Z.rejected,(function(){return!1})),se)),de=Object(f.d)("",Object(B.a)({},Y,(function(e,t){return t.payload}))),me=Object(je.b)({items:be,filter:de,loading:_e}),Oe=n(43),pe=n.n(Oe),he=Object(f.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1},extraReducers:(oe={},Object(B.a)(oe,C.register.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(B.a)(oe,C.logIn.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(B.a)(oe,C.logOut.fulfilled,(function(e,t){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1})),Object(B.a)(oe,C.fetchCurrentUser.fulfilled,(function(e,t){e.user=t.payload,e.isLoggedIn=!0})),oe)}).reducer,fe=n(19),xe=Object(ie.createLogger)(),ve={serializableCheck:{ignoredActions:[fe.a,fe.f,fe.b,fe.c,fe.d,fe.e]},logger:xe},ge={key:"auth",storage:pe.a,whitelist:["token"]},ke=Object(f.a)({reducer:{auth:Object(fe.g)(ge,he),contacts:me},middleware:function(e){return e(ve)},devTools:!1}),Ce=Object(fe.h)(ke),Ne=n(44);s.a.render(Object(I.jsx)(c.a.StrictMode,{children:Object(I.jsx)(b.a,{store:ke,children:Object(I.jsx)(Ne.a,{loading:null,persistor:Ce,children:Object(I.jsx)(o.a,{children:Object(I.jsx)(ue,{})})})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.458cf5fa.chunk.js.map