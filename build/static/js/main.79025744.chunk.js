(this.webpackJsonpfacedetectionbrain=this.webpackJsonpfacedetectionbrain||[]).push([[0],{105:function(e,t,n){},106:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){},378:function(e,t,n){},380:function(e,t,n){"use strict";n.r(t);var a=n(9),s=n.n(a),i=n(49),c=n.n(i),r=(n(105),n(95)),l=n(96),o=n(100),b=n(99),d=(n(106),n(2)),h=function(e){var t=e.onRouteChange;return e.isSignedIn?Object(d.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(d.jsx)("p",{onClick:function(){return t("signout")},className:" white f3 pa3 pointer underline link hover-red dim",children:"Sign Out"})}):Object(d.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(d.jsx)("p",{onClick:function(){return t("signin")},className:" white f3 pa3 pointer underline link hover-red dim",children:"Sign In"}),Object(d.jsx)("p",{onClick:function(){return t("signout")},className:" white f3 pa3 pointer underline link hover-red dim",children:"Sign Out"})]})},u=n(50),j=n.n(u),m=n(97),p=n.n(m),g=(n(145),n.p+"static/media/brain.9fc4b313.png"),x=function(){return Object(d.jsx)("div",{className:"ma4 mt0",children:Object(d.jsx)(p.a,{className:"Tilt br3 shadow-3",options:{max:25},style:{height:150,width:150},children:Object(d.jsxs)("div",{className:"Tilt-inner pa3",children:[" ",Object(d.jsx)("img",{src:g,alt:"icon"})]})})})},f=function(e){var t=e.onRouteChange;return Object(d.jsx)("article",{className:"br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center",children:Object(d.jsx)("main",{className:"pa4 black-80",children:Object(d.jsxs)("div",{className:"measure",children:[Object(d.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(d.jsx)("legend",{className:"f2 fw6 ph0 mh0",children:"Sign In"}),Object(d.jsxs)("div",{className:"mt3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(d.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})]}),Object(d.jsxs)("div",{className:"mv3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(d.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})]})]}),Object(d.jsx)("div",{className:"",children:Object(d.jsx)("input",{onClick:function(){return t("home")},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})}),Object(d.jsx)("div",{className:"lh-copy mt3",children:Object(d.jsx)("p",{onClick:function(){return t("register")},className:"pointer f6 link dim black db",children:"Register"})})]})})})},O=function(e){var t=e.onRouteChange;return Object(d.jsx)("article",{className:"br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center",children:Object(d.jsx)("main",{className:"pa4 black-80",children:Object(d.jsxs)("div",{className:"measure",children:[Object(d.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(d.jsx)("legend",{className:"f2 fw6 ph0 mh0",children:"Register"}),Object(d.jsxs)("div",{className:"mt3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"user-name",children:"User"}),Object(d.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"user-name",id:"user-name"})]}),Object(d.jsxs)("div",{className:"mt3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(d.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})]})]}),Object(d.jsx)("div",{className:"",children:Object(d.jsx)("input",{onClick:function(){return t("home")},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow f6 dib",type:"submit",value:"Register"})})]})})})},v=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"white f3",children:"Usama, your current rank is ..."}),Object(d.jsx)("div",{className:"white f1",children:"38"})]})},w=(n(146),function(e){var t=e.onInputChange,n=e.onButtonPress;return Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"f4",children:"This magic brain will detect face. Lets give it a try."}),Object(d.jsx)("div",{className:"center",children:Object(d.jsxs)("div",{className:"pa3 br3 shadow-4 center form",children:[Object(d.jsx)("input",{onChange:t,className:"pa2 f4 w-70 center",type:"text"}),Object(d.jsx)("button",{onClick:n,className:"w-30 pa2 f4 grow link white bg-light-purple",children:"Detect"})]})})]})}),N=n(98),C=n.n(N),y=(n(378),function(e){var t=e.imageUrl,n=e.box;return Object(d.jsx)("div",{className:"center ma",children:Object(d.jsxs)("div",{className:"absolute mt2",children:[Object(d.jsx)("img",{id:"inputimage",alt:"",src:t,width:"500px",heigh:"auto"}),Object(d.jsx)("div",{className:"bounding-box",style:{top:n.topRow,right:n.rightCol,bottom:n.bottomRow,left:n.leftCol}})]})})}),k={particles:{number:{value:80,density:{enable:!0,value_area:800}}}},S=new j.a.App({apiKey:"7ebc9459b3ef4a1da7ee52e6b32c58cb"}),R=function(e){Object(o.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputimage"),a=Number(n.width),s=Number(n.height);return{leftCol:t.left_col*a,topRow:t.top_row*s,rightCol:a-t.right_col*a,bottomRow:s-t.bottom_row*s}},e.displayFaceBox=function(t){console.log(t),e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonPress=function(t){e.setState({imageUrl:e.state.input}),S.models.predict(j.a.FACE_DETECT_MODEL,e.state.input).then((function(t){e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"home"===t?e.setState({isSignedIn:!0}):"signout"===t&&e.setState({isSignedIn:!1}),e.setState({route:t})},e.state={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,n=e.route,a=e.input,s=(e.imageUrl,e.box);return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(C.a,{className:"particles",params:k}),Object(d.jsx)(h,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===n?Object(d.jsxs)("div",{children:[Object(d.jsx)(x,{}),Object(d.jsx)(v,{}),Object(d.jsx)(w,{onInputChange:this.onInputChange,onButtonPress:this.onButtonPress}),Object(d.jsx)(y,{box:s,imageUrl:a})]}):"signin"===n?Object(d.jsx)(f,{onRouteChange:this.onRouteChange}):Object(d.jsx)(O,{onRouteChange:this.onRouteChange})]})}}]),n}(a.Component),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,381)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};n(379);c.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(R,{})}),document.getElementById("root")),I()}},[[380,1,2]]]);
//# sourceMappingURL=main.79025744.chunk.js.map