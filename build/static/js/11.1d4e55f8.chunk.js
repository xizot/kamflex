(this["webpackJsonpreact-movie"]=this["webpackJsonpreact-movie"]||[]).push([[11],{217:function(e,t,a){"use strict";var n=a(191),r=(a(0),a(23)),c=a(147),i=Object(c.a)((function(e){return{root:{position:"fixed",top:0,left:0,width:"100%",height:"100vh",zIndex:"99999",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",background:Object(r.a)(e.palette.secondary.main,.8)},box:{width:"3.5em",height:"4em",border:"3px solid transparent",borderTopColor:e.palette.primary.main,borderBottomColor:e.palette.primary.main,marginBottom:e.spacing(2),borderRadius:"50%",animation:"$spinStretch 2s ease infinite"},"@keyframes spinStretch":{"50%":{transform:"rotate(360deg) scale(0.4, 0.33)",borderWidth:8},"100%":{transform:"rotate(720deg) scale(1, 1)",borderWidth:3}}}})),s=a(2);t.a=function(e){var t=e.text,a=i();return Object(s.jsxs)("div",{className:a.root,children:[Object(s.jsx)("div",{className:a.box}),Object(s.jsx)(n.a,{color:"primary",variant:"body2",children:t||"Please waiting..."})]})}},233:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){var t=new Date(e),a=("0"+t.getDate()).slice(-2),n=("0"+(t.getMonth()+1)).slice(-2),r=t.getFullYear(),c=("0"+t.getHours()).slice(-2),i=("0"+t.getMinutes()).slice(-2);return"".concat(a,"/").concat(n,"/").concat(r," ").concat(c,":").concat(i)}},285:function(e,t,a){"use strict";var n=a(0),r=a(31);t.a=Object(r.a)(n.createElement("path",{d:"M8 5v14l11-7z"}),"PlayArrow")},286:function(e,t,a){"use strict";var n=a(0),r=a(31);t.a=Object(r.a)(n.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")},290:function(e,t,a){"use strict";var n=a(0),r=a(31);t.a=Object(r.a)(n.createElement(n.Fragment,null,n.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),n.createElement("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"})),"AccessTime")},302:function(e,t,a){"use strict";a.r(t);var n=a(55),r=a(7),c=a.n(r),i=a(14),s=a(69),o=a(191),l=a(186),d=a(194),p=a(183),u=a(290),b=a(286),m=a(0),j=a(31),h=Object(j.a)(m.createElement("path",{d:"M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84C7 18.95 8.05 20 9.34 20h8.11c.7 0 1.36-.37 1.72-.97l2.66-6.15z"}),"ThumbUpAlt"),g=Object(j.a)(m.createElement("path",{d:"M22 4h-2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h2V4zM2.17 11.12c-.11.25-.17.52-.17.8V13c0 1.1.9 2 2 2h5.5l-.92 4.65c-.05.22-.02.46.08.66.23.45.52.86.88 1.22L10 22l6.41-6.41c.38-.38.59-.89.59-1.42V6.34C17 5.05 15.95 4 14.66 4h-8.1c-.71 0-1.36.37-1.72.97l-2.67 6.15z"}),"ThumbDownAlt"),f=a(285),v=a(13),O=a(17),x=a(8),w=a(172),y=Object(w.a)((function(e){var t,a,n;return{root:{minHeight:"100vh",paddingTop:"20vh",paddingBottom:"20vh",background:e.palette.secondary.main},poster:(t={borderRadius:e.shape.borderRadius,width:350,height:"auto",marginRight:50,maxHeight:"100%",objectFit:"cover"},Object(x.a)(t,e.breakpoints.down("sm"),{width:250,marginRight:25}),Object(x.a)(t,e.breakpoints.down("xs"),{margin:e.spacing(0,"auto",2)}),t),detail:(a={color:"#fff",width:"calc(100% - 400px)"},Object(x.a)(a,e.breakpoints.down("xs"),{width:"calc(100% - 300px)"}),Object(x.a)(a,e.breakpoints.down("xs"),{width:"100%"}),a),title:Object(x.a)({marginBottom:e.spacing(1),fontWeight:"bold",lineHeight:1.3},e.breakpoints.down("xs"),{fontSize:30,lineHeight:1.2}),moreInfo:{fontWeight:500,lineHeight:1.8},review:{marginBottom:e.spacing(1)},score:Object(x.a)({border:"2px solid ".concat(e.palette.primary.main),color:e.palette.primary.main,borderRadius:"50%",padding:10,fontWeight:"bold",marginRight:e.spacing(2)},e.breakpoints.down("xs"),{padding:7,marginRight:e.spacing(1)}),iconTime:{marginRight:e.spacing(.5)},time:{fontWeight:"bold"},section:Object(x.a)({padding:e.spacing(5,0)},e.breakpoints.down("xs"),{padding:e.spacing(3,0)}),content:(n={padding:e.spacing(0,20)},Object(x.a)(n,e.breakpoints.down("sm"),{padding:e.spacing(0,7)}),Object(x.a)(n,e.breakpoints.down("xs"),{padding:e.spacing(0)}),n),description:{borderBottom:"1px solid #bebebe"},descriptionContent:{color:"#9CABB6",lineHeight:1.8},playerWrapper:{position:"relative",paddingTop:"56.25%",borderRadius:e.shape.borderRadius,overflow:"hidden"},subtitle:{marginBottom:e.spacing(1)},commentBox:{marginBottom:e.spacing(1)},inputComment:{marginBottom:e.spacing(1),background:"#fff",borderRadius:e.shape.borderRadius,overflow:"hidden"},btnPostComment:{marginBottom:e.spacing(2),display:"block",marginLeft:"auto",minWidth:100},btnPlay:{minWidth:150},genre:{color:e.palette.primary.main},actions:{marginTop:e.spacing(2),display:"flex",alignItems:"center"},rating:{color:"#fff",transition:"all .5s","&:hover":{opacity:.8,color:e.palette.primary.main}},rated:{color:e.palette.primary.main},error:{marginTop:20}}})),k=a(249),N=a.n(k),C=a(217),M=a(21),I=a(91),R=a(233),T=a(77),B=a(75),D=a(2),E=null;t.default=function(){var e,t,a,r=y(),j=Object(v.g)(),x=Object(v.i)(),w=Object(M.b)(),k=x.id,H=Object(m.useState)(null),W=Object(s.a)(H,2),z=W[0],S=W[1],L=Object(m.useState)({}),A=Object(s.a)(L,2),P=A[0],V=A[1],F=Object(M.c)((function(e){return e.detail.isLoading})),J=Object(M.c)((function(e){return e.auth.isAuthenticated})),U=Object(m.useState)(null),Y=Object(s.a)(U,2),G=Y[0],$=Y[1],_=Object(m.useState)(!1),q=Object(s.a)(_,2),K=q[0],Q=q[1],X=Object(m.useCallback)(function(){var e=Object(i.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w(Object(T.b)({media:t})).unwrap();case 3:a=e.sent,$(a.kind||null),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("\ud83d\ude80 ~ file: MovieDetail.jsx ~ line 39 ~ getRatingHandler ~ error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[w]),Z=Object(m.useCallback)(function(){var e=Object(i.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w(Object(B.a)({media:t})).unwrap();case 3:a=e.sent,Q(!!a._id),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("\ud83d\ude80 ~ file: MovieDetail.jsx ~ line 39 ~ getRatingHandler ~ error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[w]),ee=function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w(Object(B.e)({media:k})).unwrap();case 3:Q(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("\ud83d\ude80 ~ file: MovieDetail.jsx ~ line 56 ~ insertMyListHandler ~ error",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),te=Object(m.useCallback)(function(){var e=Object(i.a)(c.a.mark((function e(t,a){var r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a===G&&(a=0),e.prev=1,e.next=4,w(Object(T.c)({media:t,kind:a})).unwrap();case 4:r=P.likes||0,i=P.dislikes||0,0!==a?G?1===G?(r-=1,i+=1):2===G&&(r+=1,i-=1):(r=1===a?r+1:r,i=2===a?i+1:i):1===G?r-=1:2===G&&(i-=1),V((function(e){return Object(n.a)(Object(n.a)({},e),{},{likes:r,dislikes:i})})),$(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("\ud83d\ude80 ~ file: MovieDetail.jsx ~ line 57 ~ error",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}(),[w,P,G]),ae=Object(m.useCallback)(function(){var e=Object(i.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w(Object(I.b)(t)).unwrap();case 3:a=e.sent,V(a),console.log("\ud83d\ude80 ~ file: MovieDetail.jsx ~ line 119 ~ response)",a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),S(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),[w]);return Object(m.useEffect)((function(){Z(k)}),[k,Z]),Object(m.useEffect)((function(){ae(k)}),[k,ae]),Object(m.useEffect)((function(){J&&X(k)}),[k,X,J]),Object(m.useEffect)((function(){var e=P.videos;if(null===e||void 0===e?void 0:e.length){var t;E&&E.destroy();var a=document.getElementById("player");E=new N.a(a);var n={type:"video",sources:[{src:e[0].key,provider:null===(t=e[0].site)||void 0===t?void 0:t.toLowerCase()}]};E.source=n}}),[P]),Object(m.useLayoutEffect)((function(){window.scrollTo(0,0)}),[]),Object(D.jsxs)("div",{className:r.root,children:[F&&Object(D.jsx)(C.a,{}),!F&&z?Object(D.jsx)(o.a,{ratingiant:"subtitle1",color:"primary",align:"center",className:r.error,children:z}):Object(D.jsxs)(l.a,{children:[Object(D.jsxs)(d.a,{display:"flex",flexWrap:"wrap",children:[Object(D.jsx)("img",{className:r.poster,src:P.posterUrl,alt:""}),Object(D.jsxs)(d.a,{className:r.detail,children:[Object(D.jsx)(o.a,{ratingiant:"h3",className:r.title,children:P.title}),Object(D.jsx)(d.a,{className:r.review,display:"flex",flexWrap:"wrap",alignItems:"center",children:Object(D.jsxs)(d.a,{className:r.release,display:"flex",flexWrap:"wrap",alignItems:"center",children:[Object(D.jsx)(u.a,{fontSize:"small",className:r.iconTime}),Object(D.jsx)(o.a,{ratingiant:"body1",className:r.time,children:P.releaseDate&&Object(R.a)(P.releaseDate)})]})}),Object(D.jsxs)(o.a,{ratingiant:"body2",className:r.moreInfo,children:["Total views: ",P.views]}),Object(D.jsxs)(o.a,{ratingiant:"body2",className:r.moreInfo,children:["Genres:"," ",null===(e=P.genres)||void 0===e?void 0:e.map((function(e,t){var a;return Object(D.jsxs)(O.a,{to:"/movie?genre=".concat(null===(a=e.name)||void 0===a?void 0:a.toLowerCase()),className:r.genre,children:[0===t?" ":", ",e.name]},t)}))]}),Object(D.jsxs)(o.a,{ratingiant:"body2",className:r.moreInfo,children:["Producers: ",null===(t=P.producers)||void 0===t?void 0:t.map((function(e){return e.name})).join(", ")]}),!K&&Object(D.jsx)(d.a,{className:r.actions,children:Object(D.jsx)(p.a,{ratingiant:"outlined",className:r.rating,startIcon:Object(D.jsx)(b.a,{}),onClick:ee,children:"ADD TO MY LIST"})}),Object(D.jsxs)(d.a,{className:r.actions,children:[Object(D.jsxs)(p.a,{className:"".concat(r.rating," ").concat(1===G?r.rated:""),startIcon:Object(D.jsx)(h,{}),onClick:function(){return te(k,1)},children:["(",P.likes||0,")"]}),Object(D.jsxs)(p.a,{className:"".concat(r.rating," ").concat(2===G?r.rated:""),startIcon:Object(D.jsx)(g,{}),onClick:function(){return te(k,2)},children:["(",P.dislikes||0,")"]})]}),Object(D.jsx)(d.a,{className:r.actions,children:Object(D.jsx)(p.a,{variant:"contained",color:"primary",className:r.btnPlay,startIcon:Object(D.jsx)(f.a,{}),onClick:function(){j.push("/watch/".concat(k),{from:"/detail/".concat(k)})},children:"Play"})})]})]}),Object(D.jsxs)(d.a,{className:r.content,children:[Object(D.jsx)(d.a,{className:"".concat(r.section," ").concat(r.description),"data-aos":"fade-up",children:Object(D.jsx)(o.a,{ratingiant:"body1",className:r.descriptionContent,children:P.overview})}),(null===P||void 0===P||null===(a=P.videos)||void 0===a?void 0:a.length)>0&&Object(D.jsxs)(d.a,{className:r.section,"data-aos":"fade-up",children:[Object(D.jsx)(o.a,{ratingiant:"h5",color:"primary",className:r.subtitle,children:"Offical Trailer:"}),Object(D.jsx)("div",{className:r.playerWrapper,children:Object(D.jsx)("video",{id:"player",playsInline:!0,controls:!0})})]})]}),Object(D.jsx)(d.a,{className:r.suggestion,"data-aos":"fade-up"})]})]})}}}]);
//# sourceMappingURL=11.1d4e55f8.chunk.js.map