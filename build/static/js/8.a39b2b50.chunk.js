(this["webpackJsonpreact-movie"]=this["webpackJsonpreact-movie"]||[]).push([[8],{203:function(e,r,t){"use strict";t.d(r,"a",(function(){return o}));var n=t(69),a=t(0),i=t(202),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=Object(a.useState)(r),o=Object(n.a)(t,2),s=o[0],c=o[1],l=Object(a.useState)(!1),u=Object(n.a)(l,2),d=u[0],p=u[1],f=!0,m=null;if(e){var g=i.object(e),b=g.validate({value:s}),j=b.error;j&&(m=j.toString(),f=!1)}var h=!f&&d,v=function(e){c(e.target.value)},y=function(){p(!0)},O=function(){p(!1),c("")};return Object(a.useEffect)((function(){c(r)}),[r]),{enteredInput:s,inputIsValid:f,hasError:h,inputChangeHandler:v,inputBlurHandler:y,inputReset:O,setEnteredInput:c,errorMsg:m,isTouched:d}}},204:function(e,r,t){"use strict";var n=t(55),a=t(208),i=t(172),o=t(183),s=t(295),c=(t(0),t(2)),l=["children","size","onClick","isLoading"],u=Object(i.a)((function(e){return{root:{display:"block","&.Mui-disabled":{background:"#ddd",cursort:"not-allowed"}},buttonLoading:{opacity:" 0.7 !important",minHeight:42}}}));r.a=function(e){var r=e.children,t=e.size,i=e.onClick,d=e.isLoading,p=Object(a.a)(e,l),f=u();return Object(c.jsxs)(c.Fragment,{children:[d&&Object(c.jsx)(o.a,{className:"".concat(f.root," ").concat(f.buttonLoading),fullWidth:!0,size:t,variant:"contained",color:"primary",startIcon:Object(c.jsx)(s.a,{size:22,style:{color:"#fff"}})}),!d&&Object(c.jsx)(o.a,Object(n.a)(Object(n.a)({className:f.root,variant:"contained",color:"primary",fullWidth:!0,size:t,onClick:i},p),{},{children:r}))]})}},205:function(e,r,t){"use strict";t.d(r,"c",(function(){return a})),t.d(r,"a",(function(){return i})),t.d(r,"d",(function(){return s})),t.d(r,"b",(function(){return c})),t.d(r,"e",(function(){return u}));var n=t(202),a={value:n.string().min(8).required().messages({"string.base":"Password should be a type of 'text'","string.empty":"Password cannot be an empty field","any.required":"Password is a required field","string.min":"Password must be longer than or equal to 8 characters"})},i={value:n.string().required().messages({"string.empty":"Retype password cannot be an empty field"})},o=t(202),s={value:o.string().min(3).max(32).required().messages({"string.base":"Username should be a type of 'text' or email","string.empty":"Username cannot be an empty field","string.min":"Username should have a minimum length of {#limit}","string.max":"Username should have a maximum length of {#limit}","any.required":"Username is a required field"})},c={value:o.string().max(320).email({tlds:{allow:!1}}).required().messages({"string.empty":"Email cannot be an empty field","string.max":"Email should have a maximum length of {#limit}","any.required":"Email is a required field"})},l=t(202),u=(l.string().required().messages({"string.empty":'"recoveryCode" cannot be an empty field',"any.required":'"recoveryCode" is a required field'}),{value:l.string().required().messages({"string.empty":'"recoveryCode" cannot be an empty field',"any.required":'"recoveryCode" is a required field'})})},232:function(e,r,t){"use strict";var n=t(0),a=t(31);r.a=Object(a.a)(n.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},235:function(e,r,t){"use strict";var n=t(210),a=t(212),i=t(229),o=t(214),s=t(236),c=t(237),l=t(238),u=t(239),d=Symbol("encodeFragmentIdentifier");function p(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function f(e,r){return r.encode?r.strict?s(e):encodeURIComponent(e):e}function m(e,r){return r.decode?c(e):e}function g(e){return Array.isArray(e)?e.sort():"object"===typeof e?g(Object.keys(e)).sort((function(e,r){return Number(e)-Number(r)})).map((function(r){return e[r]})):e}function b(e){var r=e.indexOf("#");return-1!==r&&(e=e.slice(0,r)),e}function j(e){var r=(e=b(e)).indexOf("?");return-1===r?"":e.slice(r+1)}function h(e,r){return r.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?e=Number(e):!r.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function v(e,r){p((r=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},r)).arrayFormatSeparator);var t=function(e){var r;switch(e.arrayFormat){case"index":return function(e,t,n){r=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),r?(void 0===n[e]&&(n[e]={}),n[e][r[1]]=t):n[e]=t};case"bracket":return function(e,t,n){r=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),r?void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=[t]:n[e]=t};case"comma":case"separator":return function(r,t,n){var a="string"===typeof t&&t.includes(e.arrayFormatSeparator),i="string"===typeof t&&!a&&m(t,e).includes(e.arrayFormatSeparator);t=i?m(t,e):t;var o=a||i?t.split(e.arrayFormatSeparator).map((function(r){return m(r,e)})):null===t?t:m(t,e);n[r]=o};case"bracket-separator":return function(r,t,n){var a=/(\[\])$/.test(r);if(r=r.replace(/\[\]$/,""),a){var i=null===t?[]:t.split(e.arrayFormatSeparator).map((function(r){return m(r,e)}));void 0!==n[r]?n[r]=[].concat(n[r],i):n[r]=i}else n[r]=t?m(t,e):t};default:return function(e,r,t){void 0!==t[e]?t[e]=[].concat(t[e],r):t[e]=r}}}(r),n=Object.create(null);if("string"!==typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;var o,s=i(e.split("&"));try{for(s.s();!(o=s.n()).done;){var c=o.value;if(""!==c){var u=l(r.decode?c.replace(/\+/g," "):c,"="),d=a(u,2),f=d[0],b=d[1];b=void 0===b?null:["comma","separator","bracket-separator"].includes(r.arrayFormat)?b:m(b,r),t(m(f,r),b,n)}}}catch(E){s.e(E)}finally{s.f()}for(var j=0,v=Object.keys(n);j<v.length;j++){var y=v[j],O=n[y];if("object"===typeof O&&null!==O)for(var x=0,w=Object.keys(O);x<w.length;x++){var k=w[x];O[k]=h(O[k],r)}else n[y]=h(O,r)}return!1===r.sort?n:(!0===r.sort?Object.keys(n).sort():Object.keys(n).sort(r.sort)).reduce((function(e,r){var t=n[r];return Boolean(t)&&"object"===typeof t&&!Array.isArray(t)?e[r]=g(t):e[r]=t,e}),Object.create(null))}r.extract=j,r.parse=v,r.stringify=function(e,r){if(!e)return"";p((r=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},r)).arrayFormatSeparator);for(var t=function(t){return r.skipNull&&(null===(n=e[t])||void 0===n)||r.skipEmptyString&&""===e[t];var n},n=function(e){switch(e.arrayFormat){case"index":return function(r){return function(t,n){var a=t.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:[].concat(o(t),null===n?[[f(r,e),"[",a,"]"].join("")]:[[f(r,e),"[",f(a,e),"]=",f(n,e)].join("")])}};case"bracket":return function(r){return function(t,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:[].concat(o(t),null===n?[[f(r,e),"[]"].join("")]:[[f(r,e),"[]=",f(n,e)].join("")])}};case"comma":case"separator":case"bracket-separator":var r="bracket-separator"===e.arrayFormat?"[]=":"=";return function(t){return function(n,a){return void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?n:(a=null===a?"":a,0===n.length?[[f(t,e),r,f(a,e)].join("")]:[[n,f(a,e)].join(e.arrayFormatSeparator)])}};default:return function(r){return function(t,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:[].concat(o(t),null===n?[f(r,e)]:[[f(r,e),"=",f(n,e)].join("")])}}}}(r),a={},i=0,s=Object.keys(e);i<s.length;i++){var c=s[i];t(c)||(a[c]=e[c])}var l=Object.keys(a);return!1!==r.sort&&l.sort(r.sort),l.map((function(t){var a=e[t];return void 0===a?"":null===a?f(t,r):Array.isArray(a)?0===a.length&&"bracket-separator"===r.arrayFormat?f(t,r)+"[]":a.reduce(n(t),[]).join("&"):f(t,r)+"="+f(a,r)})).filter((function(e){return e.length>0})).join("&")},r.parseUrl=function(e,r){r=Object.assign({decode:!0},r);var t=l(e,"#"),n=a(t,2),i=n[0],o=n[1];return Object.assign({url:i.split("?")[0]||"",query:v(j(e),r)},r&&r.parseFragmentIdentifier&&o?{fragmentIdentifier:m(o,r)}:{})},r.stringifyUrl=function(e,t){t=Object.assign(n({encode:!0,strict:!0},d,!0),t);var a=b(e.url).split("?")[0]||"",i=r.extract(e.url),o=r.parse(i,{sort:!1}),s=Object.assign(o,e.query),c=r.stringify(s,t);c&&(c="?".concat(c));var l=function(e){var r="",t=e.indexOf("#");return-1!==t&&(r=e.slice(t)),r}(e.url);return e.fragmentIdentifier&&(l="#".concat(t[d]?f(e.fragmentIdentifier,t):e.fragmentIdentifier)),"".concat(a).concat(c).concat(l)},r.pick=function(e,t,a){a=Object.assign(n({parseFragmentIdentifier:!0},d,!1),a);var i=r.parseUrl(e,a),o=i.url,s=i.query,c=i.fragmentIdentifier;return r.stringifyUrl({url:o,query:u(s,t),fragmentIdentifier:c},a)},r.exclude=function(e,t,n){var a=Array.isArray(t)?function(e){return!t.includes(e)}:function(e,r){return!t(e,r)};return r.pick(e,a,n)}},236:function(e,r,t){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},237:function(e,r,t){"use strict";var n="%[a-f0-9]{2}",a=new RegExp(n,"gi"),i=new RegExp("("+n+")+","gi");function o(e,r){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;r=r||1;var t=e.slice(0,r),n=e.slice(r);return Array.prototype.concat.call([],o(t),o(n))}function s(e){try{return decodeURIComponent(e)}catch(n){for(var r=e.match(a),t=1;t<r.length;t++)r=(e=o(r,t).join("")).match(a);return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(r){return function(e){for(var t={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},n=i.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(r){var a=s(n[0]);a!==n[0]&&(t[n[0]]=a)}n=i.exec(e)}t["%C2"]="\ufffd";for(var o=Object.keys(t),c=0;c<o.length;c++){var l=o[c];e=e.replace(new RegExp(l,"g"),t[l])}return e}(e)}}},238:function(e,r,t){"use strict";e.exports=function(e,r){if("string"!==typeof e||"string"!==typeof r)throw new TypeError("Expected the arguments to be of type `string`");if(""===r)return[e];var t=e.indexOf(r);return-1===t?[e]:[e.slice(0,t),e.slice(t+r.length)]}},239:function(e,r,t){"use strict";e.exports=function(e,r){for(var t={},n=Object.keys(e),a=Array.isArray(r),i=0;i<n.length;i++){var o=n[i],s=e[o];(a?-1!==r.indexOf(o):r(o,s,e))&&(t[o]=s)}return t}},247:function(e,r,t){"use strict";var n=t(1),a=t(3),i=t(0),o=(t(6),t(4)),s=t(191),c=t(5),l=t(42),u=i.forwardRef((function(e,r){var t=e.children,c=e.classes,u=e.className,d=e.component,p=void 0===d?"div":d,f=e.disablePointerEvents,m=void 0!==f&&f,g=e.disableTypography,b=void 0!==g&&g,j=e.position,h=e.variant,v=Object(a.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),y=Object(l.b)()||{},O=h;return h&&y.variant,y&&!O&&(O=y.variant),i.createElement(l.a.Provider,{value:null},i.createElement(p,Object(n.a)({className:Object(o.a)(c.root,u,"end"===j?c.positionEnd:c.positionStart,m&&c.disablePointerEvents,y.hiddenLabel&&c.hiddenLabel,"filled"===O&&c.filled,"dense"===y.margin&&c.marginDense),ref:r},v),"string"!==typeof t||b?t:i.createElement(s.a,{color:"textSecondary"},t)))}));r.a=Object(c.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(u)},248:function(e,r,t){"use strict";var n=t(0),a=t(31);r.a=Object(a.a)(n.createElement("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff")},309:function(e,r,t){"use strict";t.r(r);var n=t(7),a=t.n(n),i=t(14),o=t(69),s=t(0),c=t(191),l=t(197),u=t(198),d=t(175),p=t(247),f=t(180),m=t(176),g=t(194),b=t(235),j=t.n(b),h=t(8),v=t(172),y=t(23),O=Object(v.a)((function(e){return{root:{minHeight:"100vh",background:"url('/images/background.jpg') no-repeat center/cover",backgroundAttachment:"fixed",paddingTop:"20vh",paddingBottom:"20vh",position:"relative",zIndex:1,"&::before":{content:"''",position:"absolute",left:0,top:0,width:"100%",height:"100%",background:Object(y.a)("#000",.7),zIndex:-1}},form:Object(h.a)({width:"27rem",maxWidth:"calc(100% - 20px)",margin:"0 auto 0",padding:e.spacing(5,7),borderRadius:10,background:Object(y.a)("#000",.7)},e.breakpoints.down("xs"),{padding:e.spacing(3,2)}),title:{marginBottom:e.spacing(3),textAlign:"center",color:"#fff"},formControl:{marginBottom:e.spacing(2)},textField:{background:"#ddd",borderRadius:e.shape.borderRadius,"& .MuiFilledInput-underline:after":{display:"none"}},inputLabel:{fontSize:13,"&.Mui-focused":{color:"#000"},"&.Mui-error":{color:"red"}},textHelper:{marginTop:e.spacing(1),color:"#fff","& > a":{color:e.palette.primary.main,textDecoration:"underline"},"&:not(:last-child)":{marginRight:e.spacing(2)}},errorMessage:{fontSize:11,color:"red",fontWeight:"normal"}}})),x=t(232),w=t(248),k=t(13),E=t(17),F=t(203),C=t(205),N=t(204),S=t(21),I=t(36),R=t(71),q=t(2);r.default=function(){var e=O(),r=Object(S.c)((function(e){return e.auth.isLoading})),t=Object(s.useState)(!1),n=Object(o.a)(t,2),b=n[0],h=n[1],v=Object(s.useState)(!1),y=Object(o.a)(v,2),L=y[0],M=y[1],z=Object(s.useState)(!0),A=Object(o.a)(z,2),U=A[0],B=A[1],H=Object(k.g)(),P=Object(S.b)(),T=Object(k.h)(),D=j.a.parse(T.search),$=D.id,W=D.code,V=Object(F.a)(C.c),J=V.enteredInput,G=V.inputBlurHandler,K=V.inputChangeHandler,Q=V.inputReset,X=V.inputIsValid,Y=V.hasError,Z=V.errorMsg,_=Object(F.a)(C.a),ee=_.enteredInput,re=_.inputBlurHandler,te=_.inputChangeHandler,ne=_.inputReset,ae=_.inputIsValid,ie=_.hasError,oe=_.errorMsg,se=_.isTouched,ce=X&&ae,le=function(){var e=Object(i.a)(a.a.mark((function e(r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),ce){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,P(Object(I.g)({id:$,recoveryCode:W,password:J})).unwrap();case 6:Q(),ne(),H.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),R.b.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(r){return e.apply(this,arguments)}}();return Object(q.jsx)("div",{className:e.root,children:Object(q.jsx)("div",{children:Object(q.jsxs)("form",{className:e.form,onSubmit:le,children:[Object(q.jsx)(c.a,{variant:"h6",className:e.title,children:"Reset Password"}),Object(q.jsxs)("div",{className:e.formControl,children:[Object(q.jsxs)(l.a,{error:Y,className:e.textField,variant:"filled",fullWidth:!0,children:[Object(q.jsx)(u.a,{htmlFor:"password",className:e.inputLabel,children:"Password"}),Object(q.jsx)(d.a,{value:J,onBlur:G,onChange:K,id:"password",type:b?"text":"password",className:e.inputField,endAdornment:Object(q.jsx)(p.a,{position:"end",children:Object(q.jsx)(f.a,{"aria-label":"toggle password visibility",edge:"end",onClick:function(){h((function(e){return!e}))},onMouseDown:function(e){e.preventDefault()},children:b?Object(q.jsx)(x.a,{}):Object(q.jsx)(w.a,{})})})})]}),Y&&Object(q.jsx)(m.a,{className:e.errorMessage,children:Z})]}),Object(q.jsxs)("div",{className:e.formControl,children:[Object(q.jsxs)(l.a,{error:ie,className:e.textField,variant:"filled",fullWidth:!0,children:[Object(q.jsx)(u.a,{htmlFor:"confirmpassword",className:e.inputLabel,children:"Retype password"}),Object(q.jsx)(d.a,{value:ee,onBlur:re,onChange:function(e){te(e),e.target.value!==J?B(!0):B(!1)},id:"password",type:L?"text":"password",className:e.inputField,endAdornment:Object(q.jsx)(p.a,{position:"end",children:Object(q.jsx)(f.a,{"aria-label":"toggle password visibility",edge:"end",onClick:function(){M((function(e){return!e}))},onMouseDown:function(e){e.preventDefault()},children:L?Object(q.jsx)(x.a,{}):Object(q.jsx)(w.a,{})})})})]}),ie&&Object(q.jsx)(m.a,{className:e.errorMessage,children:oe}),U&&se&&!ie&&Object(q.jsx)(m.a,{className:e.errorMessage,children:Object(q.jsx)(q.Fragment,{children:"ValidationError: Retype password does not match password"})})]}),Object(q.jsx)(N.a,{size:"large",isLoading:r,type:"submit",disabled:!ce,children:"Confirm"}),Object(q.jsxs)(g.a,{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",children:[Object(q.jsx)(c.a,{variant:"body2",className:e.textHelper,children:Object(q.jsx)(E.a,{to:"/forgot-password",children:"Back"})}),Object(q.jsx)(c.a,{variant:"body2",className:e.textHelper,children:Object(q.jsx)(E.a,{to:"/login",children:"Login"})})]})]})})})}}}]);
//# sourceMappingURL=8.a39b2b50.chunk.js.map