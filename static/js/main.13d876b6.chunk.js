(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{108:function(e,t,o){},109:function(e,t,o){},118:function(e,t,o){"use strict";o.r(t);var n=o(1),r=o(0),a=o.n(r),c=o(18),s=o.n(c),i=(o(108),o(156)),l=o(120),b=o(157),d=o(4),m=(o(109),o(71)),j=o(151),h=o(136),x=(o(110),o(7)),u=o(142),O=o(135),g=o(143),p=o(144),f=o(145),C=o(146),v=o(147),w=o(95),k=o(164),S=o(27),I=o(137),T=o(96),M=o(141),y=o(165),E=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{image:!1,random:!0,custom_url:""},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r={color:e,colorMode:t,name:""===n?e.name:n,startColor:"dark"===t?e.darkColor1:e.lightColor1,endColor:"dark"===t?e.darkColor2:e.lightColor2,bgImage:o.image,bgInfo:{location:"online",random_url:"https://source.unsplash.com/1600x900/?background,scenery,".concat(e.name),custom_url:o.custom_url,random:null==o.random||o.random},styles:{bg:{color:e.textColor,_hover:{bg:e.hover},bgGradient:"light"===t?"linear(to-bl,".concat(e.lightColor1,",").concat(e.lightColor2,")"):"linear(to-bl,".concat(e.darkColor1,",").concat(e.darkColor2,")"),reverse:{color:e.textColor,_hover:{bg:e.hover},bgGradient:"light"===t?"linear(to-r,".concat(e.lightColor1,",").concat(e.lightColor2,")"):"linear(to-r,".concat(e.darkColor1,",").concat(e.darkColor2,")")}},bgNoHover:{color:e.textColor,bgGradient:"light"===t?"linear(to-bl,".concat(e.lightColor1,",").concat(e.lightColor2,")"):"linear(to-bl,".concat(e.darkColor1,",").concat(e.darkColor2,")")},imageModeContrastText:"dark"===t?{textShadow:"5px 5px 20px black, -5px -5px 20px black,-5px 5px 50px black"}:{textShadow:"5px 5px 20px white, -5px -5px 20px white,-5px 5px 50px white"},imageModeContrastBg:"dark"===t?{bg:"rgba(0, 0, 0, 0.5)"}:{bg:"rgba(255, 255, 255, 0.2)"}}};return r},N=function(e){window.localStorage.setItem("timer-theme",JSON.stringify(e))},D={name:"purple",baseColor:"#9b00fa",lightColor1:"#5d0cff",lightColor2:"#9b00fa",darkColor1:"#5d0cff",darkColor2:"#9b00fa",hover:"#5d0cff",textColor:"white"},_=[{name:"blue",baseColor:"blue.500",lightColor1:"#149fff",lightColor2:"#117aff",darkColor1:"#149fff",darkColor2:"#117aff",hover:"blue.600",textColor:"white"},D,{name:"orange",baseColor:"orange.500",lightColor1:"#F98745",lightColor2:"#FC6952",darkColor1:"#F98745",darkColor2:"#FC6952",hover:"#e56a39",textColor:"white"},{name:"red",baseColor:"red.500",lightColor1:"#F22E44",lightColor2:"#CE263B",darkColor1:"#F22E44",darkColor2:"#CE263B",hover:"#D43A5A",textColor:"white"},{name:"green",baseColor:"lime",lightColor1:"#9AF945",lightColor2:"#65F883",darkColor1:"#9AF945",darkColor2:"#65F883",hover:"lime",textColor:"black"},{name:"yellow",baseColor:"yellow",lightColor1:"#FECE52",lightColor2:"#FDA714",darkColor1:"#FECE52",darkColor2:"#FDA714",hover:"#FFCC30",textColor:"black"}],F=o(89),R=o(131),P=o(159),z=o(160),A=o(163),W=o(138),B=o(162),H=o(86);var J=function(e){var t=Object(r.useState)("nature background"),o=Object(d.a)(t,2),a=o[0],c=o[1],s=Object(r.useState)(null),i=Object(d.a)(s,2),l=i[0],b=i[1],m=Object(r.useState)(!1),j=Object(d.a)(m,2),x=j[0],u=j[1],g=Object(R.a)("(max-width: 768px)"),p=Object(d.a)(g,1)[0],f=Object(P.a)();Object(H.config)();var C=Object(F.a)({accessKey:Object({NODE_ENV:"production",PUBLIC_URL:"/pomodoro-timer",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY}),v=function(e){C.search.getPhotos({query:e,orientation:p?"portrait":"landscape",per_page:30}).then((function(e){null!=e&&b(e)})).catch((function(){}))};Object(r.useEffect)((function(){!e.theme.bgInfo.random&&e.theme.bgImage&&e.isOpen&&v("nature background")}),[e.theme.bgInfo.random,e.theme.bgImage,e.isOpen]);var w=Object(n.jsx)(O.a,{children:x?Object(n.jsx)(z.a,{m:"4",w:"100%",h:"100%"}):Object(n.jsx)(O.a,{m:"4",w:"100%",h:"100%"})});return null!=l&&null!=l.response&&(w=Object(n.jsx)(O.a,{m:"4",w:"100%",h:"90%",flexWrap:"wrap",flexDir:"row",children:l.response.results.map((function(t){return Object(n.jsx)(h.a,{m:"2",w:p?"28%":"25%",children:Object(n.jsx)(A.a,{w:"100%",h:p?"200px":"100px",borderRadius:"4px",src:t.urls.regular,alt:t.alt_description,onClick:function(){var o=function(e,t){var o=E(e.color,e.colorMode,{image:e.bgImage,random:e.bgInfo.random,custom_url:t});return N(o),o}(e.theme,t.urls.regular);e.setTheme(o),f({title:"Background changed!",description:"Close the image search drawer to see your changes",status:"success",duration:500})}})},t.id)}))})),Object(n.jsx)(k.a,{onClose:e.onClose,isOpen:e.isOpen,size:p?"sm":"lg",placement:"right",children:Object(n.jsx)(S.g,{children:Object(n.jsxs)(k.b,{children:[Object(n.jsx)(S.f,{children:Object(n.jsxs)(O.a,{justify:"space-between",w:"100%",align:"center",children:[Object(n.jsxs)(O.a,{flexDir:"column",children:[Object(n.jsx)(I.a,{ml:"4",fontWeight:"bold",children:"Choose Background Image"}),Object(n.jsxs)(I.a,{ml:"4",fontSize:"sm",children:["Images from"," ",Object(n.jsx)(W.a,{color:"teal.500",href:"https://www.unsplash.com",isExternal:!0,children:"Unsplash.com"})]})]}),Object(n.jsx)(T.a,{variant:"outline",mr:"1",onClick:e.onClose,children:"Done"})]})}),Object(n.jsxs)(S.b,{children:[Object(n.jsx)("form",{onSubmit:function(e){e.preventDefault(),v(a)},children:Object(n.jsxs)(O.a,{mx:"2",w:"98%",children:[Object(n.jsx)(B.a,{w:"100%",pr:"1vw",value:a,onChange:function(e){c(e.target.value)},variant:"outline",borderRight:"0px",borderRadius:"4px 0px 0px 4px",placeholder:"Search Images"}),Object(n.jsx)(T.a,{size:"md",type:"submit",minW:"max-content",borderRadius:"0px 4px 4px 0px",leftIcon:Object(n.jsx)(M.a,{}),onClick:function(){return u(!0)},children:"search"})]})}),w]})]})})})};var V=function(e){var t=Object(u.a)(),o=t.isOpen,r=t.onOpen,a=t.onClose;return Object(n.jsxs)(O.a,{flexDir:"column",flex:"1",my:"8",children:[Object(n.jsx)(I.a,{ml:"2",fontWeight:"800",children:"Background"}),Object(n.jsxs)(O.a,{m:"2",flexDir:"column",children:[Object(n.jsxs)(O.a,{m:"2",w:"90%",justify:"space-between",children:[Object(n.jsx)(I.a,{width:"70%",mr:"4",children:"Background Image"}),Object(n.jsx)(y.a,{size:"lg",colorScheme:e.theme.name,isChecked:e.theme.bgImage,onChange:function(){var t=function(e){var t=E(e.color,e.colorMode,{image:!e.bgImage,random:e.bgInfo.random,custom_url:e.bgInfo.custom_url});return N(t),t}(e.theme);e.setTheme(t)}})]}),e.theme.bgImage?Object(n.jsxs)(O.a,{m:"2",w:"90%",justify:"space-between",children:[Object(n.jsx)(I.a,{width:"70%",mr:"4",children:"Random Image"}),Object(n.jsx)(y.a,{size:"lg",colorScheme:e.theme.name,isChecked:e.theme.bgInfo.random,onChange:function(){var t=function(e){var t=E(e.color,e.colorMode,{image:e.bgImage,random:!e.bgInfo.random,custom_url:e.bgInfo.custom_url});return N(t),t}(e.theme);e.setTheme(t)}})]}):Object(n.jsx)("div",{}),!e.theme.bgInfo.random&&e.theme.bgImage?Object(n.jsx)(T.a,{my:"4",minW:"max-content",w:"40%",leftIcon:Object(n.jsx)(M.a,{}),onClick:function(){return r()},children:"Find image"}):Object(n.jsx)("div",{})]}),Object(n.jsx)(J,{isOpen:o,onClose:a,theme:e.theme,setTheme:e.setTheme})]})},U=o(158),K=o(93),L=o.n(K);var G=function(e){return Object(n.jsxs)(O.a,{flexDir:"column",flex:"1",children:[Object(n.jsx)(I.a,{ml:"2",fontWeight:"800",children:"Colours"}),Object(n.jsx)(O.a,{mt:"4",maxW:"40vw",flexWrap:"wrap",children:_.map((function(t,o){return Object(n.jsx)(U.a,{label:t.name.toUpperCase(),children:Object(n.jsx)(h.b,{m:"2",size:"10",bg:t.baseColor,rounded:"md",onClick:function(){e.setTheme(function(e,t){var o=E(t,e.colorMode,{image:e.bgImage,random:e.bgInfo.random,custom_url:e.bgInfo.custom_url});return N(o),o}(e.theme,_[o]))}})},L()())}))})]})};var q=function(e){return Object(n.jsx)(k.a,{isOpen:e.isOpen,placement:"right",onClose:e.onClose,finalFocusRef:e.btnRef,children:Object(n.jsx)(S.g,{children:Object(n.jsxs)(k.b,{children:[Object(n.jsx)(S.c,{}),Object(n.jsx)(S.f,{children:Object(n.jsx)(I.a,{ml:"3",fontWeight:"800",children:"Customize Theme"})}),Object(n.jsx)(S.b,{children:Object(n.jsxs)(O.a,{flexDir:"column",children:[Object(n.jsx)(G,{theme:e.theme,setTheme:e.setTheme}),Object(n.jsx)(V,{theme:e.theme,setTheme:e.setTheme})]})}),Object(n.jsx)(S.e,{children:Object(n.jsx)(T.a,{variant:"outline",mr:3,onClick:e.onClose,children:"Close"})})]})})})};var $=function(e){var t=Object(m.c)(),o=t.colorMode,r=t.toggleColorMode,c=Object(u.a)(),s=c.isOpen,i=c.onOpen,l=c.onClose,b=a.a.useRef();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(O.a,{justify:"center",align:"center",p:"5",m:"4",children:[Object(n.jsx)(g.a,Object(x.a)(Object(x.a)({color:"light"===o?"black":"white"},e.theme.bgImage?e.theme.styles.imageModeContrastText:{}),{},{mx:"20px",children:"Pomodoro Timer"})),Object(n.jsx)(p.a,Object(x.a)(Object(x.a)({color:"light"===o?"black":"white",icon:"light"===o?Object(n.jsx)(f.a,{}):Object(n.jsx)(C.a,{})},e.theme.bgImage?e.theme.styles.imageModeContrastBg:{}),{},{onClick:r,mx:"10px",fill:"red"})),Object(n.jsx)(p.a,Object(x.a)(Object(x.a)({color:"light"===o?"black":"white",icon:Object(n.jsx)(w.a,{})},e.theme.bgImage?e.theme.styles.imageModeContrastBg:{}),{},{onClick:i,mx:"10px",fill:"red"})),Object(n.jsx)(p.a,Object(x.a)(Object(x.a)({color:"light"===o?"black":"white",icon:Object(n.jsx)(v.a,{})},e.theme.bgImage?e.theme.styles.imageModeContrastBg:{}),{},{onClick:i,mx:"10px",fill:"red"}))]}),Object(n.jsx)(q,{isOpen:s,onClose:l,btnRef:b,theme:e.theme,setTheme:e.setTheme})]})},Y=o(15),Q=o(44),X=o(166);var Z=function(e){var t=Object(r.useState)(e.edit?e.edit.value:""),o=Object(d.a)(t,2),a=o[0],c=o[1],s=Object(R.a)("(max-width: 768px)"),i=Object(d.a)(s,1)[0],l=Object(n.jsxs)(X.a,{spacing:"0px",w:i?"70vw":"32vw",children:[Object(n.jsx)(h.a,Object(x.a)(Object(x.a)({},e.theme.styles.bgNoHover),{},{bg:"transparent",border:"2px",borderRadius:"4px 0 0 4px",p:"14px 16px 14px 16px",borderColor:e.theme.startColor,color:"light"===e.theme.colorMode?"black":"white",_placeholder:Object(x.a)({color:"light"===e.theme.colorMode?"black":"white"},e.theme.bgImage?e.theme.styles.imageModeContrastText:{}),w:"70%",as:"input",my:"10px",placeholder:"Add Task",value:a,onChange:function(e){c(e.target.value)}})),Object(n.jsx)(h.a,Object(x.a)(Object(x.a)({as:"button",type:"submit",ml:"0px",w:"30%",border:"2px",py:"14px",borderRadius:"0 4px 4px 0",textAlign:"center"},e.theme.styles.bg),{},{borderColor:e.theme.startColor,borderLeft:"0px",children:"Add Task"}))]});return Object(n.jsx)("form",{className:"todo-form",onSubmit:function(t){t.preventDefault(),e.onSubmit({id:Math.floor(1e4*Math.random()),text:a,columnID:"NEW"}),c(" ")},children:l})},ee=o(148),te=o(149),oe=o(150);var ne=function(e){var t=Object(r.useState)(!1),o=Object(d.a)(t,2),a=o[0],c=o[1],s=Object(r.useState)(e.todo.text),i=Object(d.a)(s,2),l=i[0],b=i[1],m=Object(R.a)("(max-width: 768px)"),j=Object(d.a)(m,1)[0],u=Object(r.useRef)(null);Object(r.useEffect)((function(){u.current&&u.current.focus()}),[a]);var g=Object(r.createElement)(h.a,Object(x.a)(Object(x.a)(Object(x.a)(Object(x.a)({},e.provided.draggableProps),e.provided.dragHandleProps),{},{ref:e.provided.innerRef},e.theme.styles.bgNoHover),{},{w:j?"42vw":"100%",borderRadius:"4px",p:j?"2":"4",my:"10px",key:e.index}),Object(n.jsxs)(O.a,{children:[Object(n.jsx)(h.a,{w:"40vw",overflow:"hidden",children:Object(n.jsx)("form",{className:"todo-form",onSubmit:function(t){t.preventDefault(),c(!1),e.updateTodo(e.index,e.todo.columnID,l)},children:Object(n.jsx)(h.a,Object(x.a)(Object(x.a)({},e.theme.styles.bgNoHover),{},{bg:"transparent",border:"2px",borderRadius:"4px 0 0 4px",p:"4px 8px",borderColor:"white",color:"light"===e.theme.colorMode?"black":"white",_placeholder:Object(x.a)({color:"light"===e.theme.colorMode?"black":"white"},e.theme.bgImage?e.theme.styles.imageModeContrastText:{}),w:j?"30vw":"100%",as:"input",placeholder:"Edit Text",value:l,onChange:function(e){b(e.target.value)},ref:u}))})},e.todo.id),Object(n.jsx)(O.a,{align:"center",justify:"center",w:"10%",children:Object(n.jsx)(ee.a,{boxSize:"5",m:"8px",onClick:function(){c(!1),e.updateTodo(e.index,e.todo.columnID,l)}})})]})),p=Object(r.createElement)(h.a,Object(x.a)(Object(x.a)(Object(x.a)(Object(x.a)({},e.provided.draggableProps),e.provided.dragHandleProps),{},{ref:e.provided.innerRef},e.theme.styles.bgNoHover),{},{w:j?"42vw":"100%",borderRadius:"4px",p:j?"2":"4",my:"10px",key:e.index}),Object(n.jsxs)(O.a,{justify:"space-between",children:[Object(n.jsx)(h.a,{w:j?"20vw":"200%",overflow:"hidden",children:e.todo.text},e.todo.id),Object(n.jsxs)(O.a,{align:"center",justify:"center",w:j?"10vw":"40%",pr:j?"2":"0px",children:[Object(n.jsx)(te.a,{boxSize:j?"4":"5",m:"8px",onClick:function(){return e.removeTodo(e.index,e.todo.columnID)}}),Object(n.jsx)(oe.a,{boxSize:j?"4":"5",m:"8px",onClick:function(){c(!0),b(e.todo.text)}})]})]}));return a?g:p};var re=function(e){var t=Object(r.useState)({id:null,value:""}),o=Object(d.a)(t,2),a=o[0],c=o[1];return a.id?Object(n.jsx)(Z,{edit:a,onSubmit:function(t){e.updateTodo(a.id,t),c({id:null,value:""})}}):e.todos.map((function(t,o){return Object(n.jsx)(Q.b,{draggableId:"".concat(t.id),index:o,children:function(r){return Object(n.jsx)(ne,{theme:e.theme,provided:r,todo:t,index:o,removeTodo:e.removeTodo,updateTodo:e.updateTodo})}},t.id)}))};var ae=function(e){var t=Object(r.useState)({newTasks:[],completedTasks:[]}),o=Object(d.a)(t,2),a=o[0],c=o[1],s=function(e,t,o){if(o&&!/^\s*$/.test(o)){var n=Object(x.a)({},a);if("NEW"===t){var r=Object(Y.a)(a.newTasks);r[e].text=o,n.newTasks=r}else{var s=Object(Y.a)(a.completedTasks);s[e].text=o,n.completedTasks=s}c(n)}},i=function(e,t){var o=Object(x.a)({},a);if("NEW"===t){var n=Object(Y.a)(a.newTasks);n.splice(e,1),o.newTasks=n}else{var r=Object(Y.a)(a.completedTasks);r.splice(e,1),o.completedTasks=r}c(o)},l=Object(n.jsx)(Q.a,{onDragEnd:function(e){if(e.destination){var t=e.source.droppableId,o=e.destination.droppableId;if(t===o){var n="NEW"===t?a.newTasks:a.completedTasks,r=n.splice(e.source.index,1),s=Object(d.a)(r,1)[0];n.splice(e.destination.index,0,s);var i=Object(x.a)({},a);"NEW"===t?i.newTasks=n:i.completedTasks=n,c(i)}else{var l="DONE"===t?a.completedTasks:a.newTasks,b=l.splice(e.source.index,1),m=Object(d.a)(b,1)[0];"DONE"===m.columnID?m.columnID="NEW":m.columnID="DONE";var j="DONE"===o?a.completedTasks:a.newTasks;j.splice(e.destination.index,0,m);var h=Object(x.a)({},a);"DONE"===t?(h.completedTasks=l,h.newTasks=j):(h.completedTasks=j,h.newTasks=l),c(h)}}},children:Object(n.jsxs)(O.a,{mx:"10px",w:"95vw",justifyContent:"center",h:"100%",children:[Object(n.jsxs)(O.a,{mx:"10px",w:"1/3",h:"100%",flex:"1",justifyContent:"center",flexDirection:"column",children:[Object(n.jsx)(g.a,Object(x.a)(Object(x.a)({fontSize:"xl",m:"30px",textAlign:"center"},e.theme.bgImage?e.theme.styles.imageModeContrastText:{}),{},{children:"New Tasks"})),Object(n.jsx)(Q.c,{droppableId:"NEW",children:function(t){return Object(n.jsxs)(h.a,Object(x.a)(Object(x.a)({},t.droppableProps),{},{ref:t.innerRef,w:"100%",h:"100%",minH:"200px",children:[Object(n.jsx)(re,{theme:e.theme,todos:a.newTasks,removeTodo:i,updateTodo:s}),t.placeholder]}))}})]}),Object(n.jsxs)(O.a,{mx:"10px",w:"1/3",h:"100%",flex:"1",justifyContent:"center",flexDirection:"column",children:[Object(n.jsx)(g.a,Object(x.a)(Object(x.a)({fontSize:"xl",textAlign:"center",m:"30px"},e.theme.bgImage?e.theme.styles.imageModeContrastText:{}),{},{children:"Tasks Done"})),Object(n.jsx)(Q.c,{droppableId:"DONE",children:function(t){return Object(n.jsxs)(h.a,Object(x.a)(Object(x.a)({},t.droppableProps),{},{ref:t.innerRef,w:"100%",h:"100%",minH:"200px",children:[Object(n.jsx)(re,{theme:e.theme,todos:a.completedTasks,removeTodo:i,updateTodo:s}),t.placeholder]}))}})]})]})});return Object(n.jsxs)(O.a,{w:"100vw",flexDir:"column",align:"center",children:[Object(n.jsx)(g.a,Object(x.a)(Object(x.a)({fontSize:"2xl",textAlign:"center",m:"30px"},e.theme.bgImage?e.theme.styles.imageModeContrastText:{}),{},{children:"Tasks"})),Object(n.jsx)(Z,{theme:e.theme,onSubmit:function(e){if(e.text&&!/^\s*$/.test(e.text)){var t=Object(x.a)({},a);t.newTasks=[e].concat(Object(Y.a)(a.newTasks)),c(t)}}}),l]})},ce=o(155),se="session",ie="break";var le=function(e){var t=Object(m.c)().colorMode,o=Object(r.useState)(0),a=Object(d.a)(o,2),c=a[0],s=a[1],i=Object(r.useState)(e.mode===se?e.sessionMins:e.breakMins),l=Object(d.a)(i,2),b=l[0],h=l[1],u=localStorage.getItem("timerProps"),g=Object(r.useState)(u?JSON.parse(localStorage.getItem("timerProps")).updatedTime:e.sessionMins),p=Object(d.a)(g,2),f=p[0],C=p[1],v=Object(r.useRef)(null);Object(r.useEffect)((function(){var t=JSON.parse(localStorage.getItem("timerProps"));t&&(t.mode=e.mode,t.updatedTime=f,window.localStorage.setItem("timerProps",JSON.stringify(t)))}),[e.mode,f]),Object(r.useEffect)((function(){var t=JSON.parse(localStorage.getItem("timerProps"));t?(C(t.updatedTime),e.setMode(t.mode),h(Math.floor(t.updatedTime/60)),s(t.updatedTime%60)):((t={}).started=!0,t.isRunning=!1,t.mode=e.mode,t.updatedTime=f,window.localStorage.setItem("timerProps",JSON.stringify(t)))}),[]);var w=function(t){return v.current=60*t-1,window.setInterval((function(){s(v.current%60),h(Math.floor(v.current/60)),v.current-=1,C(v.current),v.current<0&&(h(!1===e.mode?e.sessionMins:e.breakMins),C(!1===e.mode?60*e.sessionMins:60*e.breakMins),e.setMode(e.mode===se?ie:se))}),1e3)};return Object(r.useEffect)((function(){var t;return e.isRunning&&(b===e.sessionMins||b===e.breakMins?e.mode===se?t=w(e.sessionMins):e.mode===ie&&(t=w(e.breakMins)):t=w((f+1)/60)),function(){return clearInterval(t)}}),[e.mode,e.isRunning]),Object(n.jsx)(O.a,{height:"100%",justifyContent:"center",alignItems:"center",children:Object(n.jsxs)(j.a,{h:"100%",bg:"transparent",centerContent:!0,children:[Object(n.jsxs)(I.a,Object(x.a)(Object(x.a)({m:"5",fontSize:"2xl"},e.theme.styles.bgNoHover),{},{textShadow:"dark"===e.theme.colorMode&&e.theme.bgImage?"1px 1px 50px black, -1px -1px 40px ".concat(e.theme.color.baseColor):"1px 1px 50px ".concat(e.theme.color.baseColor,", -1px -1px 40px ").concat(e.theme.color.baseColor,", -4px 4px 30px black").concat(e.theme.color.baseColor),bgClip:"text",fontWeight:"extrabold",children:["- ",e.mode.toUpperCase()," -"]})),Object(n.jsx)(I.a,Object(x.a)(Object(x.a)({color:"light"===t?"black":"white"},e.theme.bgImage?e.theme.styles.imageModeContrastText:{}),{},{fontSize:"8xl",children:c<10?"".concat(b,":0").concat(c):"".concat(b,":").concat(c)}))]})})},be=o(153),de=o(154),me=o(152),je=o(167),he=function(e,t,o,n){e>o?(t(o),n({title:"Error",description:"Minutes are exceeding max limit",status:"error",duration:1e3,isClosable:!0})):e<1&&(t(1),n({title:"Error",description:"Minutes cannot be less than 1",status:"error",duration:1e3,isClosable:!0}))};var xe=function(e){var t=Object(P.a)();return Object(n.jsx)(j.a,Object(x.a)(Object(x.a)({h:"100%",flex:"1",bg:"transparent",centerContent:!0},e.theme.bgImage?e.theme.styles.imageModeContrastText:{}),{},{children:Object(n.jsxs)(O.a,{height:"100%",direction:"column",align:"center",justify:"center",children:[Object(n.jsx)(me.a,{}),Object(n.jsxs)(I.a,{my:"10px",w:"100%",fontWeight:"bold",textAlign:"center",m:"8",children:[e.title.toUpperCase()," (mins)"]}),Object(n.jsx)(me.a,{}),Object(n.jsx)(h.b,Object(x.a)(Object(x.a)({size:"40px"},e.theme.styles.bg),{},{rounded:"md",fontSize:"lg",as:T.a,onClick:function(){he(e.mins,e.setMins,e.maxVal,t),e.mins<e.maxVal?e.setMins(e.mins+1):t({title:"Error",description:"Minutes cannot exceed max limit ".concat(e.maxVal),status:"error",duration:1e3,isClosable:!0})},children:Object(n.jsx)(be.a,{})})),Object(n.jsx)(me.a,{}),Object(n.jsx)(h.b,{size:"100px",bg:"transparent",rounded:"md",fontSize:"6xl",textAlign:"center",children:Object(n.jsxs)(je.a,{defaultValue:e.defaultMins,value:e.mins,onSubmit:function(o){var n;e.setMins(parseInt(o,10)),he(e.mins,e.setMins,e.maxVal,t),n=o,(Number.isNaN(n)||""===n||null==Number.isNaN(n))&&e.setMins(e.defaultMins)},onChange:function(t){e.setMins(t)},children:[Object(n.jsx)(je.c,{}),Object(n.jsx)(je.b,{})]})}),Object(n.jsx)(me.a,{}),Object(n.jsx)(h.b,Object(x.a)(Object(x.a)({size:"40px"},e.theme.styles.bg),{},{rounded:"md",fontSize:"lg",as:T.a,onClick:function(){he(e.mins,e.setMins,e.maxVal,t),e.mins>1?e.setMins(e.mins-1):t({title:"Error",description:"Minutes cannot be less than 1",status:"error",duration:1e3,isClosable:!0})},children:Object(n.jsx)(de.a,{})})),Object(n.jsx)(me.a,{})]})}))};var ue=function(e){var t=Object(m.c)().colorMode;return Object(n.jsxs)(O.a,{height:"100%",color:"light"===t?"black":"white",justifyContent:"center",alignItems:"center",children:[Object(n.jsx)(xe,{theme:e.theme,title:"Session",defaultMins:25,mins:e.sessionMins,maxVal:e.maxSessionMins,setMins:e.setSessionMins}),Object(n.jsx)(xe,{theme:e.theme,title:"Break",defaultMins:10,mins:e.breakMins,maxVal:e.maxBreakMins,setMins:e.setBreakMins})]})};var Oe=function(e){var t,o=Object(r.useState)(25),a=Object(d.a)(o,2),c=a[0],s=a[1],i=Object(r.useState)(10),l=Object(d.a)(i,2),b=l[0],m=l[1],j=Object(r.useState)(!1),u=Object(d.a)(j,2),g=u[0],p=u[1],f=Object(r.useState)(se),C=Object(d.a)(f,2),v=C[0],w=C[1],k=Object(r.useState)(!0),S=Object(d.a)(k,2),I=S[0],M=S[1];return Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("timerProps"));e&&(p(e.started),M(!1),w(e.mode))}),[]),Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("timerProps"));e&&(e.started=g,window.localStorage.setItem("timerProps",JSON.stringify(e)))}),[g]),t=g?Object(n.jsx)(le,{theme:e.theme,mode:v,sessionMins:c,setMode:w,started:g,setStarted:p,isRunning:I,setIsRunning:M,breakMins:b}):Object(n.jsx)(ue,{theme:e.theme,sessionMins:c,setSessionMins:s,maxSessionMins:60,breakMins:b,setBreakMins:m,maxBreakMins:60}),Object(n.jsx)(h.a,Object(x.a)(Object(x.a)({w:"90%",minH:"40vh",rounded:"xl",boxShadow:"dark-lg",p:"2"},e.theme.bgImage?e.theme.styles.imageModeContrastBg:{}),{},{children:Object(n.jsxs)(O.a,{minH:"40vh",h:"100%",justify:"center",align:"center",flexDir:"column",children:[Object(n.jsx)(ce.a,{children:t}),Object(n.jsxs)(O.a,{m:"4",justify:"center",align:"center",children:[Object(n.jsx)(ce.a,{m:"20px",children:Object(n.jsx)(T.a,Object(x.a)(Object(x.a)({},e.theme.styles.bg),{},{onClick:function(){p(!g),M(!0)},children:g?"STOP":"START"}))}),g?Object(n.jsx)(ce.a,{children:Object(n.jsx)(T.a,Object(x.a)(Object(x.a)({},e.theme.styles.bg),{},{onClick:function(){return M(!I)},children:I?"PAUSE":"RESUME"}))}):Object(n.jsx)("div",{})]})]})}))};var ge=function(){var e=Object(m.c)().colorMode,t=Object(r.useState)(localStorage.getItem("timer-theme")?JSON.parse(localStorage.getItem("timer-theme")):E(D,e)),o=Object(d.a)(t,2),a=o[0],c=o[1];Object(r.useEffect)((function(){var t=JSON.parse(localStorage.getItem("timer-theme"));t&&c(E(a.color,e,{image:t.bgImage,random:t.bgInfo.random,custom_url:t.bgInfo.custom_url}))}),[e,a.color]),Notification.requestPermission();var s=Object(n.jsxs)(j.a,{centerContent:!0,children:[Object(n.jsx)($,{theme:a,setTheme:c}),Object(n.jsx)(Oe,{theme:a}),Object(n.jsx)(ae,{theme:a})]}),i=Object(n.jsx)(h.a,{width:"100vw",height:"maxContent",overflow:"hidden",minH:"100vh",bgGradient:"light"===e?"linear(to-bl, #F5F5F5, #FFFFFF)":"linear(to-bl, #121417, #2B2E36)",children:s}),l=Object(n.jsx)(h.a,{width:"100vw",minH:"100vh",_before:{bgImage:"url('".concat(a.bgInfo.random_url,"')"),bgAttachment:"fixed",bgSize:"cover",bgRepeat:"no-repeat",height:"100%",left:0,position:"fixed",top:0,width:"100%",willChange:"transform",content:"''",zIndex:-1},children:s}),b=Object(n.jsx)(h.a,{width:"100vw",height:"maxContent",minH:"100vh",_before:{bgImage:"url('".concat(a.bgInfo.custom_url,"')"),bgAttachment:"fixed",bgSize:"cover",bgRepeat:"no-repeat",height:"100%",left:0,position:"fixed",top:0,width:"100%",willChange:"transform",content:"''",zIndex:-1},children:s});return a.bgImage?a.bgInfo.random?l:b:i},pe=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,168)).then((function(t){var o=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;o(e),n(e),r(e),a(e),c(e)}))},fe=Object(i.a)({config:{initialColorMode:"light",useSystemColorMode:!1}});s.a.render(Object(n.jsxs)(a.a.StrictMode,{children:[Object(n.jsx)(l.a,{}),Object(n.jsx)(b.a,{theme:fe,children:Object(n.jsx)(ge,{})})]}),document.getElementById("root")),pe()}},[[118,1,2]]]);
//# sourceMappingURL=main.13d876b6.chunk.js.map