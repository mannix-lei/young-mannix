(this.webpackJsonpyoung=this.webpackJsonpyoung||[]).push([[0],{111:function(e,t,a){e.exports={body:"Home_body__3JG4K",card:"Home_card__2hkvf"}},150:function(e,t,a){e.exports={header:"news_header__SBCQ2",source:"news_source__3GTXY"}},183:function(e,t,a){e.exports={body:"Login_body__3ED08",login:"Login_login__29f7P"}},243:function(e,t,a){e.exports={formBody:"songs-form_formBody__otZWl"}},254:function(e,t,a){e.exports=a.p+"static/media/troye.0d8d828a.jpeg"},255:function(e,t,a){e.exports=a.p+"static/media/WechatIMG2.45083ac7.jpeg"},256:function(e,t,a){e.exports=a.p+"static/media/WechatIMG3.55de156c.jpeg"},266:function(e,t,a){e.exports=a(491)},271:function(e,t,a){},33:function(e,t,a){e.exports={player:"songs-list_player__3ipZM",audio:"songs-list_audio__1wHga",currentSong:"songs-list_currentSong__36SQp",playAll:"songs-list_playAll__9iW7K",songName:"songs-list_songName__2SkCr",provider:"songs-list_provider__1Bvry",hide:"songs-list_hide__L1XyE"}},491:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),o=a(22),s=a.n(o),i=(a(271),a(272),a(12)),l=a(52),u=a(26),m=a(8),d=a.n(m),p=a(27),f=Object(r.createContext)({authTokens:"",setAuthTokens:function(e){return e}}),g=function(){return Object(r.useContext)(f)},b=a(498),h=a(497),v=a(500),y=a(110),j=a(53),E=a(183),O=a.n(E),k=a(229),w=a.n(k),S=function(){var e=Object(p.a)(d.a.mark((function e(t,a,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t,a,n),e.abrupt("return",{token:"234234234"});case 2:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),x={type:"email",message:"please input correct email"},_={labelCol:{span:5}},N=function(e){var t=b.a.useForm(),a=Object(i.a)(t,1)[0],n=Object(r.useState)(!1),o=Object(i.a)(n,2),s=o[0],l=o[1],m=g().setAuthTokens,f=((e.location||{}).state||{}).referer||"/";a.setFieldsValue({email:localStorage.getItem("email"),password:localStorage.getItem("password")});var E=function(){var e=Object(p.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.remember?(localStorage.setItem("email",t.email),localStorage.setItem("password",t.password)):(localStorage.setItem("email",""),localStorage.setItem("password","")),e.next=3,S(t.email,t.password,t.remember);case 3:a=e.sent,n=a.token,m({token:n}),l(!0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return s?c.a.createElement(u.a,{to:f.pathname||"/"}):c.a.createElement("div",{className:O.a.body},c.a.createElement(w.a,{config:{count:50},style:{zIndex:0}}),c.a.createElement(h.a,{title:"Login",bordered:!1,className:O.a.login},c.a.createElement(b.a,Object.assign({},_,{form:a,name:"basic",initialValues:{remember:!0},onFinish:function(e){return E({email:e.email,password:e.password,remember:e.remember})}}),c.a.createElement(b.a.Item,{label:"E-mail",name:"email",rules:[x,{required:!0,message:"Please input your email!"}]},c.a.createElement(v.a,null)),c.a.createElement(b.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},c.a.createElement(v.a.Password,null)),c.a.createElement(b.a.Item,{name:"remember",valuePropName:"checked"},c.a.createElement(y.a,null,"Remember me")),c.a.createElement(b.a.Item,null,c.a.createElement(j.a,{type:"primary",htmlType:"submit"},"Submit")))))},I=a(263),L=a(492),C=a(493),A=a(499),H=a(96),P=a.n(H),Q=a(45),M=a(29),D=a(134);!function(e){e[e.InitData=0]="InitData"}(n||(n={}));var G={cid:"",cip:"",cname:""},T=a(241),U=a.n(T),B=a(501),W=U.a.create({baseURL:"",withCredentials:!1});W.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),W.interceptors.response.use((function(e){return"/cityapi/cityjson"===e.config.url?JSON.parse(e.data.match(/{[^}{]*?}/g)[0]):200===e.status?e.data.data:(B.a.error({message:e.statusText}),Promise.reject(e.data))}),(function(e){return Promise.reject(e)}));var z,F=W,V=function(){var e=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.get("/cityapi/cityjson");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function e(t){var a=this;Object(D.a)(this,e),this.dispatch=void 0,this.getLocalCity=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:t=e.sent,a.dispatch({type:n.InitData,payload:Object(M.a)({},t)});case 4:case"end":return e.stop()}}),e)}))),this.dispatch=t},R=L.a.Header,J=L.a.Content,Z=L.a.Footer;!function(e){e["\u6b4c\u5355"]="songs-list",e["\u6700\u65b0\u97f3\u4e50"]="latest-list"}(z||(z={}));var K,X=function(e){var t=Object(Q.b)(),a=new q(t),n=Object(Q.c)((function(e){return e.city})),o=n.cip,s=n.cname,l=Object(Q.c)((function(e){return e.loading})).loading,u=Object(r.useState)(Math.floor(5*Math.random())+1),m=Object(i.a)(u,2),d=m[0],p=m[1];return Object(r.useEffect)((function(){a.getLocalCity()}),[]),c.a.createElement(L.a,{className:P.a.layout},c.a.createElement(R,null,c.a.createElement("div",{className:P.a.search},c.a.createElement("div",{className:P.a.avator,onClick:function(){return window.location.href="/"}})),c.a.createElement("span",null,s,"\xa0\xa0",o),c.a.createElement("span",{onClick:function(){return p(Math.floor(5*Math.random())+1)}},c.a.createElement(C.a,{className:P.a.loginAvatar,src:"http://api.rosysun.cn/sjtx/?type=".concat(d)}))),c.a.createElement(J,{className:P.a.content},c.a.createElement(A.a,{active:!0,loading:l},c.a.createElement("div",{className:"site-layout-content"},e.children))),c.a.createElement(Z,{style:{textAlign:"center"}},"Young Mannix \xa92020 Created by Mannix Lei"))},Y=function(e){var t=e.Component,a=Object(I.a)(e,["Component"]),n=g().authTokens;return c.a.createElement(u.d,null,c.a.createElement(u.b,Object.assign({},a,{render:function(e){return n?c.a.createElement(X,null,c.a.createElement(t,e)):c.a.createElement(u.a,{to:{pathname:"/login",state:{referer:e.location}}})}})))},$=a(494),ee=a(496),te=a(502),ae=a(504),ne=a(505),re=a(33),ce=a.n(re),oe=function(e,t,a){return e>600?[{title:"song-name",dataIndex:"name",key:"name",width:"17rem",render:function(e,t){return c.a.createElement("a",{href:t.link,target:"_blank"},e)}},{title:"singer-name",dataIndex:"artists",key:"artists",className:"".concat(ce.a.hide),render:function(e,t){return t.artists.map((function(e){var a=t.artists.length>5?"geekblue":"green";return c.a.createElement(te.a,{color:a,key:e.name},c.a.createElement("a",{href:e.link,target:"_blank"},e.name))}))}},{title:"album",dataIndex:"album",key:"album",className:"".concat(ce.a.hide),render:function(e,t){return c.a.createElement(te.a,{key:t.album.name},c.a.createElement("a",{href:t.album.link,target:"_blank"},t.album.name))}},{title:"platform",dataIndex:"platform",key:"platform",className:"".concat(ce.a.hide)},{title:"operation",dataIndex:"operation",key:"operation",align:"center",render:function(e,n){return c.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",fontSize:"20px"}},c.a.createElement(ae.a,{onClick:function(){return t(n)}}),c.a.createElement(ne.a,{onClick:function(){return a(n.platform,n.originalId,n.name)}}))}}]:[{title:"song-name",dataIndex:"name",key:"name",width:"17rem",render:function(e,t){return c.a.createElement("div",null,c.a.createElement("a",{href:t.link,target:"_blank"},e),c.a.createElement("br",null),t.artists.map((function(e){var a=t.artists.length>5?"geekblue":"green";return c.a.createElement(te.a,{color:a,key:e.name},c.a.createElement("a",{href:e.link,target:"_blank"},e.name))})))}},{title:"operation",dataIndex:"operation",key:"operation",align:"center",render:function(e,n){return c.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",fontSize:"20px"}},c.a.createElement(ae.a,{onClick:function(){return t(n)}}),c.a.createElement(ne.a,{onClick:function(){return a(n.platform,n.originalId,n.name)}}))}}]},se=a(137),ie=a.n(se),le={songsList:[],total:0,loading:!0};!function(e){e[e.GetSongList=0]="GetSongList",e[e.GetHotSong=1]="GetHotSong"}(K||(K={}));var ue,me,de=function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.get("/api/search",{params:Object(M.a)({},t)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),pe=function(){var e=Object(p.a)(d.a.mark((function e(t,a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.get("/api/song_source/".concat(t,"/").concat(a));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),fe=function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.get("/api/hot_list/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ge=function e(t){var a=this;Object(D.a)(this,e),this.dispatch=void 0,this.getHotSong=function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe(t).then((function(e){a.dispatch({type:K.GetHotSong,payload:{songsList:e.songs,total:e.totalCount||e.songs.length,loading:!1}})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getSongList=function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de(t).then((function(e){a.dispatch({type:K.GetSongList,payload:{songsList:e.songs,total:e.totalCount||e.songs.length,loading:!1}})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.dispatch=t},be=a(109),he=a(139),ve=a(243),ye=a.n(ve),je={labelCol:{span:8}};!function(e){e["\u7f51\u6613\u4e91"]="netease",e.QQ="qq",e["\u867e\u7c73"]="xiami",e["\u9177\u6211"]="kuwo"}(ue||(ue={})),function(e){e[e["\u70ed\u699c"]=1]="\u70ed\u699c",e[e["\u641c\u7d22"]=2]="\u641c\u7d22"}(me||(me={}));var Ee,Oe=function(e){var t=Object(u.g)(),a=new URLSearchParams(t.location.search),n=b.a.useForm(),o=Object(i.a)(n,1)[0],s=Object(r.useState)(t.location.pathname),m=Object(i.a)(s,2),f=m[0],g=(m[1],Object(r.useState)(a.get("provider")||ue.\u7f51\u6613\u4e91)),h=Object(i.a)(g,2),y=h[0],j=h[1],E=Object(r.useState)(a.get("keyword")||"sia"),O=Object(i.a)(E,2),k=O[0],w=O[1],S=Object(r.useState)(Number(a.get("page"))||1),x=Object(i.a)(S,2),_=x[0];x[1];o.setFieldsValue({keyword:a.get("keyword")}),Object(r.useEffect)((function(){"/songs/hot"===f?N(y,me.\u70ed\u699c):N(k,me.\u641c\u7d22)}),[]);var N=function(){var a=Object(p.a)(d.a.mark((function a(n,r){var c,o;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n){a.next=3;break}return $.a.info("please input something ~~"),a.abrupt("return");case 3:"/songs/hot"===f?r===me.\u70ed\u699c?null===(c=e.sendHotQuery)||void 0===c||c.call(e,n):t.replace("/songs/list?provider=".concat(y,"&keyword=").concat(n,"&page=1")):null===(o=e.sendListQuery)||void 0===o||o.call(e,{provider:y,keyword:n,page:_});case 4:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}(),I=c.a.createElement(be.a,{defaultValue:y,className:"select-after",onChange:function(e){return function(e){j(e)}(e)}},c.a.createElement(be.a.Option,{value:ue.\u7f51\u6613\u4e91},"\u7f51\u6613\u4e91"),c.a.createElement(be.a.Option,{value:ue.QQ},"QQ"),c.a.createElement(be.a.Option,{value:ue.\u867e\u7c73},"\u867e\u7c73"),c.a.createElement(be.a.Option,{value:ue.\u9177\u6211},"\u9177\u6211"));return c.a.createElement(b.a,Object.assign({className:ye.a.formBody,style:e.style},je,{name:"basic",form:o,initialValues:{remember:!0}}),"/songs/hot"===t.location.pathname&&c.a.createElement(b.a.Item,{label:"",name:"provider"},c.a.createElement(he.default.Group,{buttonStyle:"solid",defaultValue:y,value:y,onChange:function(e){j(e.target.value),N(e.target.value,me.\u70ed\u699c)}},c.a.createElement(he.default.Button,{value:ue.\u7f51\u6613\u4e91},"\u7f51\u6613\u4e91"),c.a.createElement(he.default.Button,{value:ue.QQ},"QQ"),c.a.createElement(he.default.Button,{value:ue.\u867e\u7c73,disabled:!0},"\u867e\u7c73"),c.a.createElement(he.default.Button,{value:ue.\u9177\u6211,disabled:!0},"\u9177\u6211"))),c.a.createElement(b.a.Item,{label:"",name:"keyword"},c.a.createElement(v.a,{maxLength:30,addonAfter:I,placeholder:"please input something~",onPressEnter:function(e){w(e.currentTarget.value),N(e.currentTarget.value,me.\u641c\u7d22)}})),"/songs/list"===f&&c.a.createElement(b.a.Item,null,c.a.createElement(l.b,{to:"/songs/hot"},"\u524d\u5f80\u70ed\u699c")))},ke=function(){var e=Object(u.g)(),t=Object(r.useState)(""),a=Object(i.a)(t,2),n=a[0],o=a[1],s=Object(r.useState)(!1),l=Object(i.a)(s,2),m=l[0],f=(l[1],Object(Q.b)()),g=new ge(f),b=new URLSearchParams(e.location.search),h=Object(r.useState)(b.get("provider")||ue.\u7f51\u6613\u4e91),v=Object(i.a)(h,2),y=v[0],E=v[1],O=Object(r.useState)(b.get("keyword")||"sia"),k=Object(i.a)(O,2),w=k[0],S=k[1],x=Object(r.useState)(Number(b.get("page"))||1),_=Object(i.a)(x,2),N=_[0],I=_[1],L=Object(r.useState)(0),C=Object(i.a)(L,2),H=C[0],P=C[1],M=Object(r.useState)(1080),D=Object(i.a)(M,2),G=D[0],T=D[1],U=Object(r.useState)(""),B=Object(i.a)(U,2),W=B[0],z=B[1],F=c.a.createRef(),V=Object(r.useState)(!1),q=Object(i.a)(V,2),R=q[0],J=q[1],Z=Object(r.useState)([]),K=Object(i.a)(Z,2),X=K[0],Y=K[1],te=Object(Q.c)((function(e){return e.song})),ne=te.songsList,re=te.total,se=te.loading;Object(r.useEffect)((function(){le()}),[]);var le=function(){var e,t=null===(e=document.querySelector("body"))||void 0===e?void 0:e.offsetWidth;T(t)},me=function(e,t,a){S(t),E(e),I(a),g.getSongList({provider:e,keyword:t,page:a})},de=function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return J(!0),Y(t.artists),z(t.name),e.next=5,pe(t.platform,t.originalId).then((function(e){o(e.songSource)})).catch((function(){$.a.error("\u83b7\u53d6\u64ad\u653e\u4fe1\u606f\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5")}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fe=oe(G,de,function(){var e=Object(p.a)(d.a.mark((function e(t,a,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe(t,a).then((function(e){if(navigator.platform.match(/Win|Linux|MAC/i)){var t=document.createElement("a");t.setAttribute("href",e.songSource),t.setAttribute("target","_blank"),t.setAttribute("download",n),t.click()}else{var a=document.createElement("iframe");a.src=e.songSource,a.style.display=n,document.body.appendChild(a)}})).catch((function(){$.a.error("\u83b7\u53d6\u64ad\u653e\u4fe1\u606f\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5")}));case 2:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}()),be=function(){var e=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:J(!0),de(ne[H]);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement(A.a,{active:!0,loading:se},c.a.createElement(Oe,{sendListQuery:function(t){e.replace("/songs/list?provider=".concat(t.provider,"&keyword=").concat(t.keyword,"&page=1")),me(t.provider,t.keyword,t.page)}}),c.a.createElement(j.a,{type:"link",className:ce.a.playAll,icon:c.a.createElement(ae.a,null),onClick:function(){return be()}},"\u64ad\u653e\u5168\u90e8"),c.a.createElement(ee.a,{columns:fe,dataSource:ne,pagination:{current:N,total:re,onChange:function(e){I(e),me(y,w,e)},showSizeChanger:!1}})),c.a.createElement("div",{className:ce.a.player},c.a.createElement("div",{className:ce.a.currentSong},c.a.createElement("span",{className:ce.a.songName},W),X.map((function(e){return e.name+" "}))),c.a.createElement(ie.a,{ref:F,className:ce.a.audio,src:n,autoPlay:R,controls:!0,onEnded:function(e){H<ne.length-1?(P(H+1),de(ne[H+1])):(z(""),P(0),J(!1))},muted:m}),n&&c.a.createElement("div",{className:ce.a.provider},y)))},we=a(149),Se=a.n(we),xe=a(254),_e=a.n(xe),Ne=a(255),Ie=a.n(Ne),Le=a(256),Ce=a.n(Le),Ae=a(111),He=a.n(Ae),Pe=function(){var e=Object(u.g)();return c.a.createElement("div",{className:He.a.body},c.a.createElement(h.a,{hoverable:!0,className:He.a.card,cover:c.a.createElement("img",{alt:"hotImg",src:_e.a}),onClick:function(){return e.push("/songs/hot")}},c.a.createElement(Se.a,{title:c.a.createElement(l.b,{to:"/songs/hot"},"\u542c\u4f1a\u6b4c\uff5e"),description:"Popular playlist"})),c.a.createElement(h.a,{hoverable:!0,className:He.a.card,cover:c.a.createElement("img",{alt:"listImg",src:Ie.a}),onClick:function(){return e.push("/news")}},c.a.createElement(Se.a,{title:c.a.createElement(l.b,{to:"/news"},"\u770b\u4f1a\u65b0\u95fb~"),description:"Popular news"})),c.a.createElement(h.a,{hoverable:!0,className:He.a.card,cover:c.a.createElement("img",{alt:"listImg",src:Ce.a}),onClick:function(){return e.push("")}},c.a.createElement(Se.a,{title:c.a.createElement(l.b,{to:""},"\u540e\u7eed\u677f\u5757\u9646\u7eed\u5f00\u542f\uff5e"),description:"\u656c\u8bf7\u671f\u5f85\u3002\u3002\u3002"})))},Qe=function(){return c.a.createElement("div",null,"sign up")},Me=function(){var e=Object(u.g)(),t=Object(r.useState)(""),a=Object(i.a)(t,2),n=a[0],o=a[1],s=Object(r.useState)(!1),l=Object(i.a)(s,2),m=l[0],f=(l[1],Object(Q.b)()),g=new ge(f),b=Object(r.useState)(1080),h=Object(i.a)(b,2),v=h[0],y=h[1],E=Object(r.useState)(!1),O=Object(i.a)(E,2),k=O[0],w=O[1],S=Object(r.useState)(""),x=Object(i.a)(S,2),_=x[0],N=x[1],I=Object(r.useState)(""),L=Object(i.a)(I,2),C=(L[0],L[1],Object(r.useState)(1)),H=Object(i.a)(C,2),P=(H[0],H[1],Object(r.useState)(0)),M=Object(i.a)(P,2),D=M[0],G=M[1],T=Object(r.useState)(""),U=Object(i.a)(T,2),B=U[0],W=U[1],z=Object(r.useState)(0),F=Object(i.a)(z,2),V=(F[0],F[1],Object(r.useState)([])),q=Object(i.a)(V,2),R=q[0],J=q[1],Z=Object(Q.c)((function(e){return e.song})),K=Z.songsList,X=Z.loading;Object(r.useEffect)((function(){ne()}),[]);var Y=function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W(t.name),J(t.artists),e.next=4,pe(t.platform,t.originalId);case 4:a=e.sent,o(a.songSource);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=Object(p.a)(d.a.mark((function e(t,a,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe(t,a).then((function(e){if(navigator.platform.match(/Win|Linux|MAC/i)){var t=document.createElement("a");t.setAttribute("href",e.songSource),t.setAttribute("target","_blank"),t.setAttribute("download",n),t.click()}else{var a=document.createElement("iframe");a.src=e.songSource,a.style.display=n,document.body.appendChild(a)}})).catch((function(){$.a.error("\u83b7\u53d6\u64ad\u653e\u4fe1\u606f\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5")}));case 2:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),ne=function(){var e,t=null===(e=document.querySelector("body"))||void 0===e?void 0:e.offsetWidth;y(t)},re=function(){var e=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w(!0),Y(K[D]);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=oe(v,Y,te);return c.a.createElement("div",null,c.a.createElement(Oe,{sendHotQuery:function(t){e.replace("/songs/hot?provider=".concat(t)),N(t),g.getHotSong(t)}}),c.a.createElement(A.a,{active:!0,loading:X},c.a.createElement("div",null,c.a.createElement(j.a,{type:"link",className:ce.a.playAll,icon:c.a.createElement(ae.a,null),onClick:function(){return re()}},"\u64ad\u653e\u5168\u90e8")),c.a.createElement(ee.a,{columns:se,dataSource:K,pagination:!1})),c.a.createElement("div",{className:ce.a.player},c.a.createElement("div",{className:ce.a.currentSong},c.a.createElement("span",{className:ce.a.songName},B),R.map((function(e){return e.name+" "}))),c.a.createElement(ie.a,{src:n,autoPlay:k,className:ce.a.audio,controls:!0,onEnded:function(e){D<K.length-1?(G(D+1),Y(K[D+1])):(w(!1),W(""),G(0))},muted:m,children:c.a.createElement(j.a,{type:"link"},"download")}),c.a.createElement("div",{className:ce.a.provider},_)))},De=a(150),Ge=a.n(De),Te=a(495),Ue=a(503),Be=[{key:"zhihu",value:"\u77e5\u4e4e\u70ed\u699c"},{key:"weibo",value:"\u5fae\u535a\u70ed\u641c"},{key:"weixin",value:"\u5fae\u4fe1 \u2027 24h\u70ed\u6587\u699c"},{key:"baidu",value:"\u767e\u5ea6 \u2027 \u5b9e\u65f6\u70ed\u70b9"},{key:"toutiao",value:"\u4eca\u65e5\u5934\u6761"},{key:"163",value:"\u7f51\u6613\u65b0\u95fb"},{key:"xl",value:"\u65b0\u6d6a\u7f51 \u2027 \u70ed\u8bcd\u6392\u884c\u699c"},{key:"36k",value:"36\u6c2a \u2027 24\u5c0f\u65f6\u70ed\u699c(\u9ed8\u8ba4)"},{key:"hitory",value:"\u5386\u53f2\u4e0a\u7684\u4eca\u5929"},{key:"sspai",value:"\u5c11\u6570\u6d3e"},{key:"csdn",value:"**csdn **\u4eca\u65e5\u63a8\u8350"},{key:"juejin",value:"\u6398\u91d1\u70ed\u699c"},{key:"bilibili",value:"\u54d4\u54e9\u54d4\u54e9\u70ed\u699c"},{key:"douyin",value:"\u6296\u97f3\u89c6\u9891\u699c"},{key:"52pojie",value:"\u543e\u7231\u7834\u89e3\u70ed\u699c"},{key:"v2ex",value:"V2ex \u70ed\u5e16"},{key:"hostloc",value:"\u5168\u7403\u4e3b\u673a\u8bba\u575b\u70ed\u5e16"}],We=function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.post("/newsapi/tophub/get",{type:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();!function(e){e.zhihu="\u77e5\u4e4e\u70ed\u699c",e.weibo="\u5fae\u535a\u70ed\u641c",e.weixin="\u5fae\u4fe1 \u2027 24h\u70ed\u6587\u699c,",e.baidu="\u767e\u5ea6 \u2027 \u5b9e\u65f6\u70ed\u70b9",e.toutiao="\u4eca\u65e5\u5934\u6761",e['"163"']="\u7f51\u6613\u65b0\u95fb",e.xl="\u65b0\u6d6a\u7f51 \u2027 \u70ed\u8bcd\u6392\u884c\u699c",e["36k"]="36\u6c2a \u2027 24\u5c0f\u65f6\u70ed\u699c(\u9ed8\u8ba4)",e.hitory="\u5386\u53f2\u4e0a\u7684\u4eca\u5929",e.sspai="\u5c11\u6570\u6d3e",e.csdn="**csdn **\u4eca\u65e5\u63a8\u8350",e.juejin="\u6398\u91d1\u70ed\u699c",e.bilibili="\u54d4\u54e9\u54d4\u54e9\u70ed\u699c",e.douyin="\u6296\u97f3\u89c6\u9891\u699c",e["52pojie"]="\u543e\u7231\u7834\u89e3\u70ed\u699c",e.v2ex="V2ex \u70ed\u5e16",e.hostloc="\u5168\u7403\u4e3b\u673a\u8bba\u575b\u70ed\u5e16"}(Ee||(Ee={}));var ze=function(){var e=Object(u.g)(),t=new URLSearchParams(e.location.search),a=Object(r.useState)(t.get("type")||"zhihu"),n=Object(i.a)(a,2),o=n[0],s=n[1],l=Object(r.useState)({last_update:"",name:"",list:[]}),m=Object(i.a)(l,2),f=m[0],g=m[1],b=Object(r.useState)(!1),h=Object(i.a)(b,2),v=h[0],y=h[1],E=Object(r.useState)((new Date).toLocaleString()),O=Object(i.a)(E,2),k=O[0],w=O[1];Object(r.useEffect)((function(){S(o);var e=setInterval((function(){w((new Date).toLocaleString())}),1e3);return function(){clearTimeout(e)}}),[]);var S=function(){var t=Object(p.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y(!0),e.replace("/news?type=".concat(a)),t.next=4,We(a).then((function(e){g(e),y(!1)})).catch((function(){y(!1)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return c.a.createElement("div",{className:Ge.a.newsbody},c.a.createElement("div",null,Be.map((function(e){return c.a.createElement("span",null,c.a.createElement(j.a,{type:"link",disabled:v,onClick:function(){return function(e){s(e),S(e)}(e.key)}},e.value),c.a.createElement(Te.a,{type:"vertical"}))}))),c.a.createElement("div",{className:Ge.a.header},c.a.createElement("div",{style:{marginRight:"3rem"}},"\u66f4\u65b0\u65f6\u95f4: ",f.last_update),c.a.createElement("div",null,"\u6765\u81ea: ",c.a.createElement("span",{className:Ge.a.source},f.name)),c.a.createElement("div",{style:{marginLeft:"3rem"}},"\u5f53\u524d\u65f6\u95f4: ",k)),c.a.createElement(A.a,{active:!0,loading:v},c.a.createElement(Ue.b,{itemLayout:"horizontal",dataSource:f.list,renderItem:function(e){return c.a.createElement(Ue.b.Item,null,c.a.createElement(Ue.b.Item.Meta,{avatar:c.a.createElement(C.a,{src:"http://api.rosysun.cn/sjtx/?type=".concat(Math.floor(5*Math.random())+1)}),title:c.a.createElement("a",{href:e.link,target:"_blank"},e.title),description:e.other}))}})))},Fe=function(){var e=JSON.parse(localStorage.getItem("tokens")),t=Object(r.useState)(e),a=Object(i.a)(t,2),n=a[0],o=a[1];return c.a.createElement(f.Provider,{value:{authTokens:n,setAuthTokens:function(e){localStorage.setItem("tokens",JSON.stringify(e)),o(e)}}},c.a.createElement(l.a,null,c.a.createElement(u.d,null,c.a.createElement(u.b,{exact:!0,path:"/login",component:N}),c.a.createElement(u.b,{exact:!0,path:"/signUp",component:Qe}),c.a.createElement(Y,{path:"/",Component:Pe})),c.a.createElement(Y,{path:"/songs/list",Component:ke}),c.a.createElement(Y,{path:"/songs/hot",Component:Me}),c.a.createElement(Y,{path:"/news",Component:ze})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ve,qe=a(73),Re=a(257),Je=a.n(Re);!function(e){e[e.InitList=0]="InitList"}(Ve||(Ve={}));var Ze,Ke={last_update:"",name:"",list:[]};!function(e){e[e.UpdateName=0]="UpdateName",e[e.UpdateAddress=1]="UpdateAddress",e[e.DeleteName=2]="DeleteName",e[e.DeleteAddress=3]="DeleteAddress"}(Ze||(Ze={}));var Xe,Ye={name:"",address:""};!function(e){e[e.setLoading=0]="setLoading"}(Xe||(Xe={}));var $e={loading:!1},et={song:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K.GetSongList:return{songsList:t.payload.songsList,total:t.payload.total,loading:t.payload.loading};case K.GetHotSong:return Object(M.a)(Object(M.a)({},e),{},{songsList:t.payload.songsList,total:t.payload.total,loading:t.payload.loading});default:return e}},test:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ze.UpdateName:return Object(M.a)(Object(M.a)({},e),{},{name:t.payload.name||""});case Ze.UpdateAddress:return Object(M.a)(Object(M.a)({},e),{},{address:t.payload.address||""});case Ze.DeleteName:return Object(M.a)(Object(M.a)({},e),{},{name:""});case Ze.DeleteAddress:return Object(M.a)(Object(M.a)({},e),{},{address:""});default:return e}},city:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.InitData:return Object(M.a)(Object(M.a)({},e),t.payload);default:return e}},news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ve.InitList:return Object(M.a)(Object(M.a)({},e),t.payload);default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Xe.setLoading:return Object(M.a)(Object(M.a)({},e),t.payload);default:return e}}},tt=Object(qe.c)(et),at=a(258),nt=Object(qe.d)(tt,Object(qe.a)(at.a,Je.a));s.a.render(c.a.createElement(Q.a,{store:nt},c.a.createElement(c.a.StrictMode,null,c.a.createElement(Fe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},96:function(e,t,a){e.exports={layout:"Header_layout__LeZNa",avator:"Header_avator__nvnhF",search:"Header_search___htFL",content:"Header_content__3UTcU",loginAvatar:"Header_loginAvatar__WQ4eH"}}},[[266,1,2]]]);
//# sourceMappingURL=main.a2e49b08.chunk.js.map