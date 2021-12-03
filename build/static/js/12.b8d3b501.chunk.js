(this["webpackJsonpreact-movie"]=this["webpackJsonpreact-movie"]||[]).push([[12],{203:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(69),n=a(0),i=a(202),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=Object(n.useState)(t),s=Object(r.a)(a,2),c=s[0],l=s[1],o=Object(n.useState)(!1),d=Object(r.a)(o,2),u=d[0],m=d[1],b=!0,j=null;if(e){var p=i.object(e),h=p.validate({value:c}),f=h.error;f&&(j=f.toString(),b=!1)}var g=!b&&u,O=function(e){l(e.target.value)},x=function(){m(!0)},v=function(){m(!1),l("")};return Object(n.useEffect)((function(){l(t)}),[t]),{enteredInput:c,inputIsValid:b,hasError:g,inputChangeHandler:O,inputBlurHandler:x,inputReset:v,setEnteredInput:l,errorMsg:j,isTouched:u}}},204:function(e,t,a){"use strict";var r=a(55),n=a(208),i=a(172),s=a(183),c=a(295),l=(a(0),a(2)),o=["children","size","onClick","isLoading"],d=Object(i.a)((function(e){return{root:{display:"block","&.Mui-disabled":{background:"#ddd",cursort:"not-allowed"}},buttonLoading:{opacity:" 0.7 !important",minHeight:42}}}));t.a=function(e){var t=e.children,a=e.size,i=e.onClick,u=e.isLoading,m=Object(n.a)(e,o),b=d();return Object(l.jsxs)(l.Fragment,{children:[u&&Object(l.jsx)(s.a,{className:"".concat(b.root," ").concat(b.buttonLoading),fullWidth:!0,size:a,variant:"contained",color:"primary",startIcon:Object(l.jsx)(c.a,{size:22,style:{color:"#fff"}})}),!u&&Object(l.jsx)(s.a,Object(r.a)(Object(r.a)({className:b.root,variant:"contained",color:"primary",fullWidth:!0,size:a,onClick:i},m),{},{children:t}))]})}},205:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return i})),a.d(t,"d",(function(){return c})),a.d(t,"b",(function(){return l})),a.d(t,"e",(function(){return d}));var r=a(202),n={value:r.string().min(8).required().messages({"string.base":"Password should be a type of 'text'","string.empty":"Password cannot be an empty field","any.required":"Password is a required field","string.min":"Password must be longer than or equal to 8 characters"})},i={value:r.string().required().messages({"string.empty":"Retype password cannot be an empty field"})},s=a(202),c={value:s.string().min(3).max(32).required().messages({"string.base":"Username should be a type of 'text' or email","string.empty":"Username cannot be an empty field","string.min":"Username should have a minimum length of {#limit}","string.max":"Username should have a maximum length of {#limit}","any.required":"Username is a required field"})},l={value:s.string().max(320).email({tlds:{allow:!1}}).required().messages({"string.empty":"Email cannot be an empty field","string.max":"Email should have a maximum length of {#limit}","any.required":"Email is a required field"})},o=a(202),d=(o.string().required().messages({"string.empty":'"recoveryCode" cannot be an empty field',"any.required":'"recoveryCode" is a required field'}),{value:o.string().required().messages({"string.empty":'"recoveryCode" cannot be an empty field',"any.required":'"recoveryCode" is a required field'})})},232:function(e,t,a){"use strict";var r=a(0),n=a(31);t.a=Object(n.a)(r.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},248:function(e,t,a){"use strict";var r=a(0),n=a(31);t.a=Object(n.a)(r.createElement("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff")},308:function(e,t,a){"use strict";a.r(t);var r=a(7),n=a.n(r),i=a(14),s=a(69),c=a(0),l=a(191),o=a(197),d=a(198),u=a(175),m=a(176),b=a(247),j=a(180),p=a(194),h=a(216),f=a(298),g=a(8),O=a(172),x=a(23),v=Object(O.a)((function(e){return{root:{minHeight:"100vh",background:"url('/images/background.jpg') no-repeat center/cover",backgroundAttachment:"fixed",paddingTop:"20vh",paddingBottom:"20vh",position:"relative",zIndex:1,"&::before":{content:"''",position:"absolute",left:0,top:0,width:"100%",height:"100%",background:Object(x.a)("#000",.7),zIndex:-1}},form:Object(g.a)({width:"27rem",maxWidth:"calc(100% - 20px)",margin:"0 auto 0",padding:e.spacing(5,7),borderRadius:10,background:Object(x.a)("#000",.7)},e.breakpoints.down("xs"),{padding:e.spacing(3,2)}),title:{marginBottom:e.spacing(3),textAlign:"center",color:"#fff"},formControl:{marginBottom:e.spacing(2)},textField:{background:"#ddd",borderRadius:e.shape.borderRadius,"& .MuiFilledInput-underline:after":{display:"none"}},inputLabel:{fontSize:13,"&.Mui-focused":{color:"#000"},"&.Mui-error":{color:"red"}},textHelper:{marginTop:e.spacing(1),color:"#fff","& > a":{color:e.palette.primary.main,textDecoration:"underline"},"&:not(:last-child)":{marginRight:e.spacing(2)}},errorMessage:{fontSize:11,color:"red",fontWeight:"normal"},datePicker:{"& .MuiInputBase-adornedEnd":{marginRight:-12}},resError:{fontSize:11,color:"red",fontWeight:"normal",marginBottom:e.spacing(1)}}})),y=a(232),w=a(248),N=a(13),C=a(17),M=a(203),k=a(205),z=a(204),q=a(250),E=a(21),B=a(36),I=a(234),F=a.n(I),R=a(2);t.default=function(){var e,t=v(),a=Object(c.useState)(!1),r=Object(s.a)(a,2),g=r[0],O=r[1],x=Object(c.useState)(!1),I=Object(s.a)(x,2),H=I[0],D=I[1],S=Object(E.c)((function(e){return e.auth.isLoading})),L=Object(E.c)((function(e){return e.auth.isAuthenticated})),W=Object(c.useState)(new Date),V=Object(s.a)(W,2),P=V[0],A=V[1],U=Object(c.useState)(null),T=Object(s.a)(U,2),J=T[0],K=T[1],G=Object(c.useState)(!0),Q=Object(s.a)(G,2),X=Q[0],Y=Q[1],Z=Object(c.useState)(null),$=Object(s.a)(Z,2),_=$[0],ee=$[1],te=Object(N.g)(),ae=Object(N.h)(),re=Object(E.b)(),ne=Object(M.a)(k.d),ie=ne.enteredInput,se=ne.inputBlurHandler,ce=ne.inputChangeHandler,le=ne.inputReset,oe=ne.inputIsValid,de=ne.hasError,ue=ne.errorMsg,me=Object(M.a)(k.b),be=me.enteredInput,je=me.inputBlurHandler,pe=me.inputChangeHandler,he=me.inputReset,fe=me.inputIsValid,ge=me.hasError,Oe=me.errorMsg,xe=Object(M.a)(k.c),ve=xe.enteredInput,ye=xe.inputBlurHandler,we=xe.inputChangeHandler,Ne=xe.inputReset,Ce=xe.inputIsValid,Me=xe.hasError,ke=xe.errorMsg,ze=Object(M.a)(k.a),qe=ze.enteredInput,Ee=ze.inputBlurHandler,Be=ze.inputChangeHandler,Ie=ze.inputReset,Fe=ze.inputIsValid,Re=ze.hasError,He=ze.errorMsg,De=ze.isTouched,Se=oe&&fe&&Ce&&Fe&&null===J,Le=function(){var e=Object(i.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),Se){e.next=3;break}return e.abrupt("return");case 3:return ee(null),e.prev=4,e.next=7,re(Object(B.f)({email:be,username:ie,password:ve,birthdate:F()(P).format("yyyy-MM-DD")})).unwrap();case 7:te.push("/confirm-email"),le(),he(),Ne(),Ie(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),ee(e.t0);case 17:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(t){return e.apply(this,arguments)}}();return L?Object(R.jsx)(N.a,{to:(null===(e=ae.state)||void 0===e?void 0:e.from)||"/"}):Object(R.jsx)("div",{className:t.root,children:Object(R.jsx)("div",{children:Object(R.jsxs)("form",{className:t.form,onSubmit:Le,children:[Object(R.jsx)(l.a,{variant:"h6",className:t.title,children:"Register"}),Object(R.jsxs)("div",{className:t.formControl,children:[Object(R.jsxs)(o.a,{error:de,variant:"filled",fullWidth:!0,className:t.textField,children:[Object(R.jsx)(d.a,{htmlFor:"username",className:t.inputLabel,children:"Username"}),Object(R.jsx)(u.a,{value:ie,onBlur:se,onChange:ce,id:"username",type:"text"})]}),de&&Object(R.jsx)(m.a,{className:t.errorMessage,children:ue})]}),Object(R.jsxs)("div",{className:t.formControl,children:[Object(R.jsxs)(o.a,{error:ge,variant:"filled",fullWidth:!0,className:t.textField,children:[Object(R.jsx)(d.a,{htmlFor:"email",className:t.inputLabel,children:"Email"}),Object(R.jsx)(u.a,{value:be,onBlur:je,onChange:pe,id:"email",type:"text"})]}),ge&&Object(R.jsx)(m.a,{className:t.errorMessage,children:Oe})]}),Object(R.jsxs)("div",{className:t.formControl,children:[Object(R.jsx)(h.a,{utils:q.a,children:Object(R.jsx)(o.a,{error:Me,variant:"filled",fullWidth:!0,className:t.textField,children:Object(R.jsx)(f.a,{className:t.datePicker,label:"Birth day",format:"MM/DD/yyyy",maxDate:new Date,value:P,onChange:function(e){K(null),A(e)},error:!1,helperText:null,autoOk:!0,variant:"inline",inputVariant:"filled",KeyboardButtonProps:{"aria-label":"change date"}})})}),J&&Object(R.jsx)(m.a,{className:t.errorMessage,children:J})]}),Object(R.jsxs)("div",{className:t.formControl,children:[Object(R.jsxs)(o.a,{error:Me,className:t.textField,variant:"filled",fullWidth:!0,children:[Object(R.jsx)(d.a,{htmlFor:"password",className:t.inputLabel,children:"Password"}),Object(R.jsx)(u.a,{value:ve,onBlur:ye,onChange:function(e){we(e),e.target.value!==qe&&De?Y(!0):Y(!1)},id:"password",type:g?"text":"password",className:t.inputField,endAdornment:Object(R.jsx)(b.a,{position:"end",children:Object(R.jsx)(j.a,{"aria-label":"toggle password visibility",edge:"end",onClick:function(){O((function(e){return!e}))},onMouseDown:function(e){e.preventDefault()},children:g?Object(R.jsx)(y.a,{}):Object(R.jsx)(w.a,{})})})})]}),Me&&Object(R.jsx)(m.a,{className:t.errorMessage,children:ke})]}),Object(R.jsxs)("div",{className:t.formControl,children:[Object(R.jsxs)(o.a,{error:Re,className:t.textField,variant:"filled",fullWidth:!0,children:[Object(R.jsx)(d.a,{htmlFor:"confirmpassword",className:t.inputLabel,children:"Retype password"}),Object(R.jsx)(u.a,{value:qe,onBlur:Ee,onChange:function(e){Be(e),e.target.value!==ve?Y(!0):Y(!1)},id:"retype-password",type:H?"text":"password",className:t.inputField,endAdornment:Object(R.jsx)(b.a,{position:"end",children:Object(R.jsx)(j.a,{"aria-label":"toggle password visibility",edge:"end",onClick:function(){D((function(e){return!e}))},onMouseDown:function(e){e.preventDefault()},children:H?Object(R.jsx)(y.a,{}):Object(R.jsx)(w.a,{})})})})]}),Re&&Object(R.jsx)(m.a,{className:t.errorMessage,children:He}),X&&De&&!Re&&Object(R.jsx)(m.a,{className:t.errorMessage,children:Object(R.jsx)(R.Fragment,{children:"ValidationError: Retype password does not match password"})})]}),_&&Object(R.jsx)(m.a,{className:t.resError,children:_}),Object(R.jsx)(z.a,{size:"large",isLoading:S,type:"submit",disabled:!Se,children:"Register"}),Object(R.jsx)(p.a,{display:"flex",justifyContent:"flex-end",children:Object(R.jsx)(l.a,{variant:"body2",className:t.textHelper,children:Object(R.jsx)(C.a,{to:"/login",children:"Already have an account?"})})})]})})})}}}]);
//# sourceMappingURL=12.b8d3b501.chunk.js.map