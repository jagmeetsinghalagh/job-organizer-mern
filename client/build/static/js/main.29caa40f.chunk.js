(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{118:function(e,n,t){e.exports=t.p+"static/media/ss-img.2281e675.png"},121:function(e,n,t){e.exports=t(245)},189:function(e,n,t){},245:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(54),c=t.n(o),i=t(10),l=t(9),u=t(111),s=t(112),p=t(250),d=t(8),b={isLoggedIn:!1,token:localStorage.getItem("token"),userId:null,email:null},m=t(38),f={jobs:[],filteredJobs:[],currentJob:null},h=[],g=Object(l.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case"LOGIN_SUCCESS":return localStorage.setItem("token",a.token),Object(d.a)(Object(d.a)({},e),{},{isLoggedIn:!0,token:a.token,userId:a.userId,email:a.email});case"LOGIN_FAIL":case"LOGOUT":return localStorage.removeItem("token"),Object(d.a)(Object(d.a)({},e),{},{isLoggedIn:!1,token:null,userId:null,email:null});default:return e}},jobs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case"GET_JOBS":return Object(d.a)(Object(d.a)({},e),{},{jobs:a,filteredJobs:a});case"FILTER_JOBS":return Object(d.a)(Object(d.a)({},e),{},{filteredJobs:Object(m.a)(a)});case"ADD_JOB":return Object(d.a)(Object(d.a)({},e),{},{jobs:[].concat(Object(m.a)(e.jobs),[a.job]),filteredJobs:[].concat(Object(m.a)(e.jobs),[a.job])});case"GET_JOB":return Object(d.a)(Object(d.a)({},e),{},{currentJob:a});case"EDIT_JOB":return Object(d.a)(Object(d.a)({},e),{},{currentJob:a,jobs:e.jobs.map((function(e){return e._id===a._id?a:e})),filteredJobs:e.jobs.map((function(e){return e._id===a._id?a:e}))});default:return e}},form:p.a,alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case"SET_ALERT":return[].concat(Object(m.a)(e),[a]);case"REMOVE_ALERT":return e.filter((function(e){return e.id!==a}));default:return e}}}),v=(t(189),t(11)),j=t(31),E=t(4),O=t(5);function y(){var e=Object(E.a)(["\n    padding: 1rem 1.5rem;\n    width: 40%;\n    margin: 0 auto;\n    border: 2px solid ",";\n    border-radius: 10px;\n    margin-bottom: 1rem;\n    color: ",";\n    background: ",";\n    text-align: center;\n"]);return y=function(){return e},e}var w=O.b.div(y(),(function(e){return e.color}),(function(e){return e.color}),(function(e){return e.bgColor})),x=Object(i.b)((function(e){return{alert:e.alert}}))((function(e){var n=e.alert,t=n.map((function(e){var n="danger"===e.type?"#fa0000":"green",t="danger"===e.type?"#fa8787":"white";return r.a.createElement(w,{key:e.id,color:n,bgColor:t},e.msg)}));return n.length>0?t:null})),k=t(23),S=t(24),I=t(26),C=t(25);function J(){var e=Object(E.a)(["\n    a{\n        font-size: 1.3rem;\n    }\n"]);return J=function(){return e},e}function A(){var e=Object(E.a)(["\n    display: inline-block;\n    a{\n        text-decoration: none;\n        display: block;\n        color: blue;\n        font-size: 1.1rem;\n        padding: 0.5rem 1rem;\n        border-radius: 5px;\n    }\n    &:hover a{\n        color: white;\n        background: blue;\n        cursor: pointer;\n        transition: background 0.3s;\n    }\n"]);return A=function(){return e},e}function L(){var e=Object(E.a)(["\n    padding: 0.5rem 1rem;\n    border: 3px solid ",";\n    background: none;\n    outline: none;\n    cursor: pointer;\n    border-radius: 5px;\n\n    &:hover{\n        background: ",";\n        color: white;\n        transition: background 0.4s;\n    }\n"]);return L=function(){return e},e}function _(){var e=Object(E.a)(["\n    a{\n        padding: 0.5rem 2rem;\n        text-align: center;\n        background: #7410e6;\n        border-radius: 5px; \n        color: white;\n        border: none;\n        outline: none;\n        text-decoration: none;\n    }\n   \n    a:hover{\n        border: 2px solid #7410e6;\n        color: #7410e6;\n        background: white;\n        transition: background 0.3s;\n        cursor: pointer;\n    }\n"]);return _=function(){return e},e}function R(){var e=Object(E.a)(["\n    width: 100%;\n    text-align: center;\n    background: ",";\n    border-radius: 5px; \n    color: white;\n    border: none;\n    outline: none;\n    padding: 0.75rem 1.5rem;\n    margin-top: 1rem;\n    cursor: pointer;\n"]);return R=function(){return e},e}var T=O.b.button(R(),(function(e){return e.bgColor?e.bgColor:"#7410e6"})),D=O.b.div(_()),N=O.b.button(L(),(function(e){return e.color}),(function(e){return e.color})),F=O.b.div(A()),B=Object(O.b)(F)(J()),M=t(12),U=t.n(M),Y=t(20),G=t(32),z=t.n(G),V=t(249),H=function(e,n){return function(){var t=Object(Y.a)(U.a.mark((function t(a,r){var o;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=Object(V.a)(),a({type:"SET_ALERT",payload:{id:o,msg:e,type:n}}),setTimeout((function(){return a({type:"REMOVE_ALERT",payload:o})}),5e3);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};function P(){var e=Object(E.a)(["\n    display: flex;\n"]);return P=function(){return e},e}function W(){var e=Object(E.a)(["\n    padding: 0.5rem;\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 1rem;\n"]);return W=function(){return e},e}var K=O.b.div(W()),q=O.b.div(P()),Q=function(e){Object(I.a)(t,e);var n=Object(C.a)(t);function t(){return Object(k.a)(this,t),n.apply(this,arguments)}return Object(S.a)(t,[{key:"render",value:function(){return r.a.createElement(K,null,r.a.createElement(B,null,r.a.createElement(v.b,{to:"/"},"Applyist")),this.props.isLoggedIn?r.a.createElement(q,null,r.a.createElement(F,null,r.a.createElement(v.b,{to:"/dashboard"},this.props.email)),r.a.createElement(F,null,r.a.createElement(v.b,{to:"/",onClick:this.props.logoutUser},"Logout"))):r.a.createElement(q,null,r.a.createElement(F,null,r.a.createElement(v.b,{to:"/"},"Home")),r.a.createElement(F,null,r.a.createElement(v.b,{to:"/login"},"Login")),r.a.createElement(F,null,r.a.createElement(v.b,{to:"/signup"},"Signup"))))}}]),t}(r.a.Component),X=Object(i.b)((function(e){return{email:e.auth.email,isLoggedIn:e.auth.isLoggedIn}}),{logoutUser:function(){return{type:"LOGOUT"}}})(Q),Z=t(118),$=t.n(Z);function ee(){var e=Object(E.a)(["\n    display: block;\n    height: 80%;\n    @media(max-width: 500px){\n        width: 100%;\n    }\n"]);return ee=function(){return e},e}function ne(){var e=Object(E.a)(["\n    width: 50%;\n    margin-top: 5rem;\n    @media(max-width: 500px){\n        width: 100%;\n        text-align: center;\n        margin-top: 0;\n        margin-bottom: 2rem;\n    }\n"]);return ne=function(){return e},e}function te(){var e=Object(E.a)(["\n    width: 90%;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n    height: 90vh;\n    @media(max-width: 500px){\n        flex-wrap: wrap;\n        height: 100%;\n    }\n"]);return te=function(){return e},e}var ae=O.b.div(te()),re=O.b.div(ne()),oe=O.b.img(ee()),ce=function(){return r.a.createElement(ae,null,r.a.createElement(oe,{src:$.a,alt:"No img."}),r.a.createElement(re,null,r.a.createElement("h1",null,"Organize Your Job Search"),r.a.createElement("p",null,"During a job search its not uncommon to be applying to multiple companies at once. Keeping this process organized can be a pain, but not to worry, We are here to help. Create a free account and see if you can create a more organized search."),r.a.createElement(D,null,r.a.createElement(v.b,{to:"/signup"},"Signup for free"))))},ie=t(55),le=t.n(ie),ue=t(119),se=t.n(ue);function pe(){var e=Object(E.a)(["\n    display: flex;\n    background: #f0edeb;\n    padding: 1rem 1.5rem;\n    border-radius: 10px;\n    border-left: 7px solid ",";\n    grid-column: 2 / span 8;\n    justify-content: space-between;\n    align-items: center;\n    @media(max-width:500px){\n        flex-wrap: wrap;\n        grid-column: 2 / span 10;\n    }\n"]);return pe=function(){return e},e}var de=O.b.div(pe(),(function(e){return e.borderColor}));function be(){var e=Object(E.a)(["\n    color: ",";\n"]);return be=function(){return e},e}function me(){var e=Object(E.a)(["\n    display: flex;\n    p{\n        margin: 1rem 1rem 0 0;\n    }\n    flex-wrap: wrap;\n    @media(max-width:500px){\n        flex-wrap: wrap;\n        justify-content: space-between;\n        p {\n            margin-top: 0.5rem;\n        }\n    }\n"]);return me=function(){return e},e}var fe=O.b.div(me()),he=O.b.span(be(),(function(e){return e.color})),ge=function(e){switch(e){case"Applied":return"blue";case"Under Review":return"yellow";case"Offer Received":return"green";case"Rejected":return"red";default:return"black"}},ve=Object(i.b)(null,{getJob:function(e){return function(){var n=Object(Y.a)(U.a.mark((function n(t,a){var r,o,c,i;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=localStorage.getItem("token"),o={headers:{Authorization:"Bearer "+r}},n.next=4,z.a.get("http://localhost:8000/job/".concat(e),o);case 4:c=n.sent,i=le()(c.data.job.appliedOn).format("YYYY-MM-DD"),t({type:"GET_JOB",payload:Object(d.a)(Object(d.a)({},c.data.job),{},{appliedOn:i})});case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}})((function(e){var n=e.job;return r.a.createElement(de,{borderColor:ge(n.status)},r.a.createElement("div",{className:"job-description"},r.a.createElement("h2",null,n.title),r.a.createElement(fe,null,r.a.createElement("p",null,r.a.createElement("i",{className:"far fa-building"})," ",n.company),r.a.createElement("p",null,r.a.createElement("i",{className:"fas fa-map-marker-alt"})," ",n.address),r.a.createElement("p",null,r.a.createElement("i",{className:"far fa-calendar-alt"})," Applied on:",r.a.createElement(se.a,{format:"YYYY/MM/DD"},n.appliedOn))),r.a.createElement("p",null,r.a.createElement("i",{className:"far fa-clock"})," Status: ",r.a.createElement(he,{color:ge(n.status)},n.status))),r.a.createElement("div",{className:"action-button"},r.a.createElement(D,null,r.a.createElement(v.b,{onClick:function(){return e.getJob(n._id)},to:"/edit-job/".concat(n._id)},"MODIFY"))))}));function je(){var e=Object(E.a)(["\n    grid-column: 2 / span 8;\n"]);return je=function(){return e},e}var Ee=O.b.h2(je()),Oe=function(e){var n=e.jobs;return n.length>0?n.map((function(e){return r.a.createElement(ve,{key:e._id,job:e})})):r.a.createElement(Ee,null,"No jobs found.")};function ye(){var e=Object(E.a)(["\n    display: flex;\n    justify-content: space-between;\n    background: #f0f0f0;\n    grid-column: 2 / span 8;\n    padding: 0.5rem;\n    @media(max-width: 500px){\n        grid-column: 2 / span 10;\n        flex-wrap: wrap;\n        justify-content: center;\n        align-content: space-between;\n        button{\n            margin: 0.75rem 0.75rem 0 0;\n        }\n    }\n"]);return ye=function(){return e},e}function we(){var e=Object(E.a)(["\n    text-decoration: underline;\n    border: none;\n    outline: none;\n    background: none;\n    cursor: pointer;\n    font-size: 1.1rem;\n    color: #a6a2ab;\n"]);return we=function(){return e},e}function xe(){var e=Object(E.a)(["\n    display: flex;\n    justify-content: space-between;\n    grid-column: 2 / span 8;\n    @media(max-width:500px){\n        grid-column: 2/ span 10;\n    } \n"]);return xe=function(){return e},e}var ke=O.b.div(xe()),Se=O.b.button(we()),Ie=O.b.div(ye()),Ce=function(e){Object(I.a)(t,e);var n=Object(C.a)(t);function t(){var e;Object(k.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={isVisible:!1},e.onClickHandler=function(){e.setState({isVisible:!e.state.isVisible})},e}return Object(S.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ke,null,r.a.createElement(D,null,r.a.createElement(v.b,{to:"/add-job"},"ADD JOB")),r.a.createElement(Se,{onClick:this.onClickHandler},"Filter ",r.a.createElement("i",{className:"fas fa-caret-down"}))),this.state.isVisible&&r.a.createElement(Ie,null,r.a.createElement(N,{onClick:function(n){return e.props.handleFilterChange(n.target.value)},color:"black",value:"Show All"},"Show All"),r.a.createElement(N,{onClick:function(n){return e.props.handleFilterChange(n.target.value)},color:"blue",value:"Applied"},"Applied"),r.a.createElement(N,{onClick:function(n){return e.props.handleFilterChange(n.target.value)},color:"#f5e90a",value:"Under Review"},"Under Review"),r.a.createElement(N,{onClick:function(n){return e.props.handleFilterChange(n.target.value)},color:"green",value:"Offer Received"},"Offer Recieved"),r.a.createElement(N,{onClick:function(n){return e.props.handleFilterChange(n.target.value)},color:"red",value:"Rejected"},"Rejected")))}}]),t}(r.a.Component);function Je(){var e=Object(E.a)(["\n    grid-column: "," / ",";\n"]);return Je=function(){return e},e}function Ae(){var e=Object(E.a)(["\n        grid-gap: ","\n    "]);return Ae=function(){return e},e}function Le(){var e=Object(E.a)(["\n    display: grid;\n    grid-template-columns: repeat(12,1fr);\n    ",";\n"]);return Le=function(){return e},e}var _e=O.b.div(Le(),(function(e){return e.gap?Object(O.a)(Ae(),e.gap):""})),Re=O.b.div(Je(),(function(e){return e.start}),(function(e){return e.end})),Te=function(e){Object(I.a)(t,e);var n=Object(C.a)(t);function t(){var e;Object(k.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).handleFilterChange=function(n){"Show All"===n?e.props.getJobs():e.props.filterJobs(n)},e}return Object(S.a)(t,[{key:"componentDidMount",value:function(){this.props.getJobs()}},{key:"render",value:function(){return r.a.createElement(_e,{gap:"1rem"},r.a.createElement(Ce,{handleFilterChange:this.handleFilterChange}),r.a.createElement(Oe,{jobs:this.props.jobs}))}}]),t}(r.a.Component),De=Object(i.b)((function(e){return{jobs:e.jobs.filteredJobs}}),{getJobs:function(){return function(){var e=Object(Y.a)(U.a.mark((function e(n,t){var a,r,o;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token"),r={headers:{Authorization:"Bearer "+a}},e.next=4,z.a.get("http://localhost:8000/jobs",r);case 4:o=e.sent,n({type:"GET_JOBS",payload:o.data.jobs});case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},filterJobs:function(e){return function(){var n=Object(Y.a)(U.a.mark((function n(t,a){var r,o;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=a().jobs.jobs,o=r.filter((function(n){return n.status===e})),t({type:"FILTER_JOBS",payload:o});case 3:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}})(Te),Ne=t(248),Fe=t(247);function Be(){var e=Object(E.a)(["\n    width: 100%;\n    padding: 1rem 0.5rem;\n    -webkit-appearence: none;\n    outline: none;\n    line-height: 1.5;\n    border: 2px solid #d4d2d2;\n    border-radius: 5px;\n"]);return Be=function(){return e},e}function Me(){var e=Object(E.a)(["\n    padding: 1rem 0.5rem;\n    outline: none;\n    border: 2px solid ",";\n    border-radius: 5px;\n    width: 100%;\n"]);return Me=function(){return e},e}var Ue=O.b.input(Me(),(function(e){return e.borderColor})),Ye=O.b.select(Be());function Ge(){var e=Object(E.a)(["\n    color: red;\n"]);return Ge=function(){return e},e}var ze=O.b.span(Ge()),Ve=function(e){return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:e.input.name},e.label),r.a.createElement(Ue,Object.assign({},e.input,{type:e.type,placeholder:e.placeholder,borderColor:e.meta.touched&&e.meta.error?"red":"#d4d2d2"})),e.meta.touched&&r.a.createElement(ze,null,e.meta.error))},He=function(e){return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:e.input.name},e.label),r.a.createElement(Ye,e.input,r.a.createElement("option",null,"select Option"),r.a.createElement("option",{value:"Applied"},"Applied"),r.a.createElement("option",{value:"Under Review"},"Under Review"),r.a.createElement("option",{value:"Offer Received"},"Offer Received"),r.a.createElement("option",{value:"Rejected"},"Rejected")))};function Pe(){var e=Object(E.a)(["\n    width: 80%;\n    margin: 0 auto;\n"]);return Pe=function(){return e},e}var We=O.b.div(Pe()),Ke=function(e){Object(I.a)(t,e);var n=Object(C.a)(t);function t(){var e;Object(k.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={isEditing:!1},e.onSubmit=function(n){var t=Object(d.a)(Object(d.a)({},n),{},{createdBy:e.props.userId});e.state.isEditing?(e.props.editJob(t),e.props.history.push("/dashboard")):(e.props.addJob(t),e.props.history.push("/dashboard"))},e}return Object(S.a)(t,[{key:"componentDidMount",value:function(){"/edit-job/:jobId"===this.props.match.path&&this.setState({isEditing:!0})}},{key:"render",value:function(){var e=this.state.isEditing?"Edit Job":"Add A Job",n=this.state.isEditing?"Modify":"Submit";return r.a.createElement(We,null,r.a.createElement("h3",null,e),r.a.createElement(v.b,{to:"/dashboard"},r.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to dashboard"),r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onSubmit),style:{marginTop:"1rem"}},r.a.createElement(_e,null,r.a.createElement(Re,{start:"1",end:"6"},r.a.createElement(Ne.a,{type:"text",name:"title",placeholder:"Senior Dog Walker",label:"Position Title",component:Ve}),r.a.createElement(Ne.a,{type:"text",name:"address",placeholder:"Hyderabad,India",label:"Location",component:Ve}),r.a.createElement(Ne.a,{type:"text",name:"company",placeholder:"Google",label:"Company",component:Ve})),r.a.createElement(Re,{start:"7",end:"13"},r.a.createElement(Ne.a,{type:"date",name:"appliedOn",label:"Date Applied",component:Ve}),r.a.createElement(Ne.a,{name:"status",label:"Current Status",component:He}))),r.a.createElement(T,{type:"submit"},n)))}}]),t}(r.a.Component),qe=Object(i.b)((function(e,n){return"/edit-job/:jobId"===n.match.path?{userId:e.auth.userId,initialValues:e.jobs.currentJob}:{userId:e.auth.userId}}),{addJob:function(e){return function(){var n=Object(Y.a)(U.a.mark((function n(t,a){var r,o,c,i;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=localStorage.getItem("token"),o=JSON.stringify(e),c={headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"}},n.next=5,z.a.post("http://localhost:8000/add-job",o,c);case 5:i=n.sent,t({type:"ADD_JOB",payload:i.data});case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},editJob:function(e){return function(){var n=Object(Y.a)(U.a.mark((function n(t,a){var r,o,c,i,l;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=localStorage.getItem("token"),o=JSON.stringify(e),c={headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"}},n.next=5,z.a.put("http://localhost:8000/job/".concat(e._id,"/edit"),o,c);case 5:i=n.sent,l=le()(i.data.job.appliedOn).format("YYYY-MM-DD"),t({type:"EDIT_JOB",payload:Object(d.a)(Object(d.a)({},i.data.job),{},{appliedOn:l})});case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}})(Object(Fe.a)({form:"jobForm"})(Ke)),Qe=function(e){Object(I.a)(t,e);var n=Object(C.a)(t);function t(){var e;Object(k.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={loginMode:!0},e.onSubmitHandler=function(n){e.state.loginMode?e.props.loginUser(n,e.props.history):e.props.signupUser(n,e.props.history)},e}return Object(S.a)(t,[{key:"componentDidMount",value:function(){"/signup"===this.props.match.path&&this.setState({loginMode:!1})}},{key:"render",value:function(){var e,n;return this.props.isLoggedIn?r.a.createElement(j.a,{to:"/dashboard"}):(this.state.loginMode?(n="Login",e="New to applyist? "):(n="Signup",e="Already a member "),r.a.createElement(_e,null,r.a.createElement(Re,{start:"3",end:"8"},r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onSubmitHandler)},r.a.createElement(Ne.a,{type:"text",placeholder:"Enter Email",name:"email",label:"Email",component:Ve}),r.a.createElement(Ne.a,{type:"password",placeholder:"Enter password",name:"password",label:"Password",component:Ve}),r.a.createElement(T,{type:"submit"},n)),r.a.createElement("div",null,r.a.createElement("p",null,e,r.a.createElement(v.b,{to:"/signup"},n))))))}}]),t}(r.a.Component),Xe=Object(Fe.a)({form:"loginForm",validate:function(e){var n={};return e.email||(n.email="Email cannot be empty"),e.password?e.password.length<8&&(n.password="Password must be 8 characters long"):n.password="Password cannot be empty",n}})(Object(i.b)((function(e){return{isLoggedIn:e.auth.isLoggedIn}}),{loginUser:function(e,n){return function(){var t=Object(Y.a)(U.a.mark((function t(a,r){var o,c,i;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o=JSON.stringify(e),c={headers:{"Content-Type":"application/json"}},t.next=5,z.a.post("http://localhost:8000/login",o,c);case 5:i=t.sent,a({type:"LOGIN_SUCCESS",payload:i.data}),n.push("/dashboard"),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(0),a(H(t.t0.response.data.message,"danger")),a({type:"LOGIN_FAIL"}),n.push("/login");case 15:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n){return t.apply(this,arguments)}}()},signupUser:function(e,n){return function(){var t=Object(Y.a)(U.a.mark((function t(a,r){var o,c,i;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o=JSON.stringify(e),c={headers:{"Content-Type":"application/json"}},t.next=5,z.a.post("http://localhost:8000/register",o,c);case 5:i=t.sent,a({type:"SIGNUP_SUCCESS",payload:i.data}),n.push("/login"),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(0),a(H(t.t0.response.data.message,"danger")),a({type:"SIGNUP_FAIL"}),n.push("/signup");case 15:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n){return t.apply(this,arguments)}}()}})(Qe)),Ze=t(120),$e=Object(i.b)((function(e){return{isLoggedIn:e.auth.isLoggedIn}}))((function(e){var n=e.isLoggedIn,t=e.component,a=Object(Ze.a)(e,["isLoggedIn","component"]);return r.a.createElement(j.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(j.a,{to:"/login"})}}))})),en=function(){return r.a.createElement(v.a,null,r.a.createElement("div",null,r.a.createElement(X,null),r.a.createElement(x,null),r.a.createElement(j.b,{path:"/",exact:!0,component:ce}),r.a.createElement(j.b,{path:"/signup",exact:!0,component:Xe}),r.a.createElement(j.b,{path:"/login",exact:!0,component:Xe}),r.a.createElement($e,{path:"/dashboard",exact:!0,component:De}),r.a.createElement($e,{path:"/add-job",exact:!0,component:qe}),r.a.createElement($e,{path:"/edit-job/:jobId",exact:!0,component:qe})))};c.a.render(r.a.createElement(i.a,{store:Object(l.createStore)(g,Object(s.composeWithDevTools)(Object(l.applyMiddleware)(u.a)))},r.a.createElement(en,null)),document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.29caa40f.chunk.js.map