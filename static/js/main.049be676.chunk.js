(this.webpackJsonpgisfrontend=this.webpackJsonpgisfrontend||[]).push([[0],{162:function(e,a,t){e.exports=t(279)},167:function(e,a,t){},168:function(e,a,t){e.exports=t.p+"static/media/logo.06e73328.svg"},169:function(e,a,t){},171:function(e,a,t){},178:function(e,a,t){},279:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),i=t.n(l),o=(t(167),t(168),t(169),t(170),t(8)),c=t(9),s=t(14),u=t(15),m=t(18),d=t(320),p=t(281),h=t(325),f=t(329),E=t(328),g=t(324),b=t(326),v=t(347),w=t(327);t(171);function y(e,a,t,n){return{name:e,code:a,population:t,size:n,density:t/n}}y("India","IN",1324171354,3287263),y("China","CN",1403500365,9596961),y("Italy","IT",60483973,301340),y("United States","US",327167434,9833520),y("Canada","CA",37602103,9984670),y("Australia","AU",25475400,7692024),y("Germany","DE",83019200,357578),y("Ireland","IE",4857e3,70273),y("Mexico","MX",126577691,1972550),y("Japan","JP",126317e3,377973),y("France","FR",67022e3,640679),y("United Kingdom","GB",67545757,242495),y("Russia","RU",146793744,17098246),y("Nigeria","NG",200962417,923768),y("Brazil","BR",210147125,8515767);var k=Object(d.a)({root:{width:"100%"},cells:{"font-size":"20px"},container:{maxHeight:440}});function C(e){var a=k(),t=r.a.useState(0),n=Object(m.a)(t,2),l=n[0],i=n[1],o=r.a.useState(10),c=Object(m.a)(o,2),s=c[0],u=c[1],d=e.items;return r.a.createElement(p.a,{className:a.root},r.a.createElement(g.a,{className:a.container},r.a.createElement(h.a,{stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement(b.a,null,r.a.createElement(w.a,null,e.columns.map((function(e){return r.a.createElement(E.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth},className:a.cells},e.label)})))),r.a.createElement(f.a,null,d.slice(l*s,l*s+s).map((function(t,n,l){return r.a.createElement(w.a,{hover:!0,role:"checkbox",tabIndex:-1,key:n},e.columns.map((function(e){var n=t[e.id];return r.a.createElement(E.a,{key:e.id,align:e.align,className:a.cells},e.format&&"number"===typeof n?e.format(n):n)})))}))))),r.a.createElement(v.a,{rowsPerPageOptions:[10,25,100],component:"div",count:d.length,rowsPerPage:s,page:l,onChangePage:function(e,a){i(a)},onChangeRowsPerPage:function(e){u(+e.target.value),i(0)}}))}var j=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={error:null,isLoaded:!1,items:[]},n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.url).then((function(e){return e.json()})).then((function(a){e.setState({isLoaded:!0,items:a})}),(function(a){e.setState({isLoaded:!0,error:a})}))}},{key:"render",value:function(){var e=this.state,a=e.error,t=e.isLoaded,n=e.items;if(a)return r.a.createElement("div",null,"Error: ",a.message);if(t){var l=this.props.mainC;return r.a.createElement(l,{columns:this.props.columns,items:n})}return r.a.createElement("div",null,"Loading...")}}]),t}(r.a.Component),O=[{id:"village_code_census",label:"Census Code",minWidth:10,align:"center",format:function(e){return e.toLocaleString("en-US")}},{id:"vname",label:"Name",minWidth:70,align:"center",format:function(e){return e.toLocaleString("en-US")}},{id:"vname_eng",label:"Name(English)",minWidth:70,align:"center",format:function(e){return e.toFixed(2)}}],S=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(e){return Object(o.a)(this,t),a.call(this,e)}return Object(c.a)(t,[{key:"render",value:function(){var e=C;return r.a.createElement(j,{url:"./villages.json",columns:O,mainC:e})}}]),t}(r.a.Component),x=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={error:null,isLoaded:!1,items:[]},n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("./gisfrontend/villages.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(a){e.setState({isLoaded:!0,items:a})}),(function(a){e.setState({isLoaded:!0,error:a})}))}},{key:"render",value:function(){var e=this.state,a=e.error,t=e.isLoaded,n=e.items;return a?r.a.createElement("div",null,"Error: ",a.message):t?r.a.createElement(S,{items:n}):r.a.createElement("div",null,"Loading...")}}]),t}(r.a.Component),N=(t(44),t(71),t(19));t(178);var L=t(61),P=t(13),I=t(337),B=t(332),M=t(330),W=t(94),R=t(149),U=t(336),z=t(331),T=t(147),_=t(141),D=t.n(_),F=t(142),A=t.n(F),G=t(108),J=t.n(G),q=t(30),H=t.n(q),V=t(107),K=t.n(V),X=t(143),Q=t.n(X),Y=Object(d.a)((function(e){return{grow:{flexGrow:1,zIndex:100},menuButton:{marginRight:e.spacing(2)},title:Object(L.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(L.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(P.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(P.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(L.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(L.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(L.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function Z(){var e=Y(),a=r.a.useState(null),t=Object(m.a)(a,2),n=t[0],l=t[1],i=r.a.useState(null),o=Object(m.a)(i,2),c=o[0],s=o[1],u=Boolean(n),d=Boolean(c),p=function(e){l(e.currentTarget)},h=function(){s(null)},f=function(){l(null),h()},E="primary-search-account-menu",g=r.a.createElement(T.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:E,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:f},r.a.createElement(z.a,{onClick:f},"Profile"),r.a.createElement(z.a,{onClick:f},"My account")),b=r.a.createElement(T.a,{anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:h},r.a.createElement(z.a,null,r.a.createElement(M.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(U.a,{badgeContent:4,color:"secondary"},r.a.createElement(H.a,null))),r.a.createElement("p",null,"Messages")),r.a.createElement(z.a,null,r.a.createElement(M.a,{"aria-label":"show 11 new notifications",color:"inherit"},r.a.createElement(U.a,{badgeContent:11,color:"secondary"},r.a.createElement(K.a,null))),r.a.createElement("p",null,"Notifications")),r.a.createElement(z.a,{onClick:p},r.a.createElement(M.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement(J.a,null)),r.a.createElement("p",null,"Profile")));return r.a.createElement("div",{className:e.grow},r.a.createElement(I.a,{position:"fixed"},r.a.createElement(B.a,null,r.a.createElement(M.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement(D.a,null)),r.a.createElement(W.a,{className:e.title,variant:"h6",noWrap:!0},"Material-UI"),r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(A.a,null)),r.a.createElement(R.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement("div",{className:e.grow}),r.a.createElement("div",{className:e.sectionDesktop},r.a.createElement(M.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(U.a,{badgeContent:4,color:"secondary"},r.a.createElement(H.a,null))),r.a.createElement(M.a,{"aria-label":"show 17 new notifications",color:"inherit"},r.a.createElement(U.a,{badgeContent:17,color:"secondary"},r.a.createElement(K.a,null))),r.a.createElement(M.a,{edge:"end","aria-label":"account of current user","aria-controls":E,"aria-haspopup":"true",onClick:p,color:"inherit"},r.a.createElement(J.a,null))),r.a.createElement("div",{className:e.sectionMobile},r.a.createElement(M.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},color:"inherit"},r.a.createElement(Q.a,null))))),b,g)}var $=t(346),ee=t(341),ae=t(335),te=t(342),ne=t(282),re=t(338),le=t(339),ie=t(26),oe=t.n(ie),ce=[{id:"district_code_census",label:"Census Code",minWidth:10,align:"center",format:function(e){return e.toLocaleString("en-US")}},{id:"district_name",label:"Name",minWidth:70,align:"center",format:function(e){return e.toLocaleString("en-US")}},{id:"district_name_english",label:"Name(English)",minWidth:70,align:"center",format:function(e){return e.toLocaleString("en-US")}}],se=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(e){return Object(o.a)(this,t),a.call(this,e)}return Object(c.a)(t,[{key:"render",value:function(){var e=C;return r.a.createElement(j,{url:"./districts.json",columns:ce,mainC:e})}}]),t}(r.a.Component);function ue(e){return r.a.createElement(ne.a,{button:!0,key:"districts",onClick:function(){e.handleClick(se)}},r.a.createElement(re.a,null," ",r.a.createElement(oe.a,null)," "),r.a.createElement(le.a,{primary:"Districts"}))}function me(e){return r.a.createElement(ne.a,{button:!0,key:"districts",onClick:function(){e.handleClick(S)}},r.a.createElement(re.a,null," ",r.a.createElement(oe.a,null)," "),r.a.createElement(le.a,{primary:"Villages"}))}var de=t(93),pe=t(340),he=t(344),fe=de.a({email:de.b("Enter your email").email("Enter a valid email").required("Email is required"),password:de.b("Enter your password").min(8,"Password should be of minimum 8 characters length").required("Password is required")});function Ee(){var e=Object(N.e)({initialValues:{email:"foobar@example.com",password:"foobar"},validationSchema:fe,onSubmit:function(e){alert(JSON.stringify(e,null,2))}});return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(he.a,{fullWidth:!0,id:"email",name:"email",label:"Email",value:e.values.email,onChange:e.handleChange,error:e.touched.email&&Boolean(e.errors.email),helperText:e.touched.email&&e.errors.email}),r.a.createElement(he.a,{fullWidth:!0,id:"password",name:"password",label:"Password",type:"password",value:e.values.password,onChange:e.handleChange,error:e.touched.password&&Boolean(e.errors.password),helperText:e.touched.password&&e.errors.password}),r.a.createElement(pe.a,{color:"primary",variant:"contained",fullWidth:!0,type:"submit"},"Submit")))}function ge(e){return r.a.createElement(ne.a,{button:!0,key:"login",onClick:function(){e.handleClick(Ee)}},r.a.createElement(re.a,null," ",r.a.createElement(oe.a,null)," "),r.a.createElement(le.a,{primary:"Login"}))}var be=Object(d.a)((function(e){return{root:{display:"flex"},appBar:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240},drawer:{width:240,flexShrink:0},drawerPaper:{width:240,zIndex:100},toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)}}}));function ve(e){var a=be(),t=(e.mainc,Object(n.useState)((function(){return e.mainc}))),l=Object(m.a)(t,2),i=l[0],o=l[1],c=function(e){console.log("clicked"),console.log(e),o((function(){return e}))};return r.a.createElement("div",{className:a.root},r.a.createElement(ee.a,null),r.a.createElement($.a,{className:a.drawer,variant:"permanent",classes:{paper:a.drawerPaper},anchor:"left"},r.a.createElement("div",{className:a.toolbar}),r.a.createElement(te.a,null),r.a.createElement(ae.a,null,r.a.createElement(ue,{handleClick:c}),r.a.createElement(me,{handleClick:c}),r.a.createElement(ge,{handleClick:c})),r.a.createElement(te.a,null),r.a.createElement(ae.a,null,["All mail","Trash","Spam"].map((function(e,a){return r.a.createElement(ne.a,{button:!0,key:e},r.a.createElement(re.a,null,a%2===0?r.a.createElement(oe.a,null):r.a.createElement(H.a,null)),r.a.createElement(le.a,{primary:e}))})))),r.a.createElement("main",{className:a.content},r.a.createElement("div",{className:a.toolbar}),r.a.createElement(i,null)))}Object(d.a)((function(e){return{root:{display:"flex"},appBar:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240},drawer:{width:240,flexShrink:0},drawerPaper:{width:240,zIndex:100},toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)}}}));var we=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Z,null),r.a.createElement(ve,{mainc:x}))},ye=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,350)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,l=a.getLCP,i=a.getTTFB;t(e),n(e),r(e),l(e),i(e)}))};t(278);i.a.hydrate(r.a.createElement(r.a.StrictMode,null,r.a.createElement(we,null)),document.getElementById("root")),ye()}},[[162,1,2]]]);
//# sourceMappingURL=main.049be676.chunk.js.map