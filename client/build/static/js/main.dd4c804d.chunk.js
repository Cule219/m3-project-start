(this["webpackJsonpm3-react-typescript"]=this["webpackJsonpm3-react-typescript"]||[]).push([[0],{124:function(e,t,a){e.exports=a(225)},129:function(e,t,a){},225:function(e,t,a){"use strict";a.r(t);var n,r=a(0),s=a.n(r),o=a(76),l=a.n(o),i=(a(129),a(15)),u=a(16),c=a(21),d=a(19),h=a(20),m=a(34),p=function(e){return r.createElement("nav",null,r.createElement("ul",null,r.createElement("li",null,r.createElement(m.a,{exact:!0,to:"/"},"Login")),r.createElement("li",null,r.createElement(m.a,{to:"/register"},"Register")),r.createElement("li",null,r.createElement(m.a,{to:"/showassets"},"Assets"))))};!function(e){e.INIT="@@INIT",e.login_error="login_error",e.user_logged_in="user_logged_in",e.user_logged_out="user_logged_out",e.update_user="update_user",e.user_created="user_created",e.user_exists="user_exists",e.create_asset="create_asset",e.update_asset="update_asset",e.delete_asset="delete_asset",e.render_test="render_test",e.server_called="server_called",e.asset_updated="asset_updated",e.add_assets_from_server="add_assets_from_server"}(n||(n={}));var w=a(17),g=a.n(w),v={UI:{counter:0,loggedIn:!1,waitingForResponse:!1,Login:{errorMessage:""}},BM:{user:{firstname:"",lastname:"",username:"",password:""},assets:[]}},_={},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;window.CS.log("2. ACTION:"+t.type);var a=JSON.parse(JSON.stringify(e));a.UI.counter=e.UI.counter+1;var r=_[t.type];if(void 0!==r)return r(a,t),a;switch(t.type){case n.INIT:return a;default:return window.CS.log("1. Error!!!!! no reducer defined"),a}},C=a(10),f=Object(C.a)();_[n.login_error]=function(e,t){return e.UI.waitingForResponse=!1,e.UI.Login.errorMessage=t.errorMessage,e},_[n.user_logged_in]=function(e,t){return e.UI.waitingForResponse=!1,e.UI.Login.errorMessage="",e.UI.loggedIn=!0,e.BM.user=t.user,e},_[n.user_logged_out]=function(e,t){return e.UI.waitingForResponse=!1,e.UI.Login.errorMessage="",e.UI.loggedIn=!1,e.BM.user={lastname:"",firstname:"",username:"",password:""},e};var E=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return window.CS.getUIState().loggedIn?s.a.createElement("div",null,s.a.createElement("p",null,"You are logged in as ",window.CS.getBMState().user.username),s.a.createElement("button",{onClick:this.handleLogout},"Logout")):s.a.createElement("div",null,s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("label",{htmlFor:"username"},"Username:"),s.a.createElement("input",{type:"username",placeholder:"Your username",onChange:this.handleUsernameChange,value:window.CS.getBMState().user.username}),s.a.createElement("br",null),s.a.createElement("label",{htmlFor:"password"},"Password:"),s.a.createElement("input",{type:"password",placeholder:"********",onChange:this.handlePasswordChange,value:window.CS.getBMState().user.password}),s.a.createElement("br",null),s.a.createElement("input",{type:"submit",value:"Login"})),s.a.createElement("p",null,window.CS.getUIState().Login.errorMessage))}},{key:"handleUsernameChange",value:function(e){var t=window.CS.getBMState().user;t.username=e.target.value;var a={type:n.update_user,user:t};window.CS.clientAction(a)}},{key:"handlePasswordChange",value:function(e){var t=window.CS.getBMState().user;t.password=e.target.value;var a={type:n.update_user,user:t};window.CS.clientAction(a)}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={type:n.server_called};window.CS.clientAction(t),g.a.post("/auth/signup",window.CS.getBMState().user).then((function(e){var t={type:n.user_created};window.CS.clientAction(t),f.push("/showassets"),console.log(e.data)}))}},{key:"handleLogout",value:function(){var e={type:n.server_called};window.CS.clientAction(e),g.a.get("/logout").then((function(e){var t={type:n.user_logged_out};window.CS.clientAction(t)}))}}]),t}(r.Component);_[n.update_user]=function(e,t){return console.log(t.user),e.BM.user=t.user,e},_[n.user_created]=function(e,t){return console.log(t.user),e.UI.waitingForResponse=!1,e.UI.loggedIn=!0,e};var b=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("label",{htmlFor:"firstname"},"First name:"),s.a.createElement("input",{type:"text",placeholder:"firstname",onChange:this.handleFirstnameChange,value:window.CS.getBMState().user.firstname}),s.a.createElement("br",null),s.a.createElement("label",{htmlFor:"lastname"},"Last name:"),s.a.createElement("input",{type:"text",placeholder:"lastname",onChange:this.handleLastnameChange,value:window.CS.getBMState().user.lastname}),s.a.createElement("br",null),s.a.createElement("label",{htmlFor:"username"},"Username:"),s.a.createElement("input",{type:"username",placeholder:"Your username",onChange:this.handleUsernameChange,value:window.CS.getBMState().user.username}),s.a.createElement("br",null),s.a.createElement("label",{htmlFor:"password"},"Password:"),s.a.createElement("input",{type:"password",placeholder:"********",onChange:this.handlePasswordChange,value:window.CS.getBMState().user.password}),s.a.createElement("br",null),s.a.createElement("input",{type:"submit",value:"Register as new User"})))}},{key:"handleFirstnameChange",value:function(e){var t=window.CS.getBMState().user;t.firstname=e.target.value;var a={type:n.update_user,user:t};window.CS.clientAction(a)}},{key:"handleLastnameChange",value:function(e){var t=window.CS.getBMState().user;t.lastname=e.target.value;var a={type:n.update_user,user:t};window.CS.clientAction(a)}},{key:"handleUsernameChange",value:function(e){var t=window.CS.getBMState().user;t.username=e.target.value;var a={type:n.update_user,user:t};window.CS.clientAction(a)}},{key:"handlePasswordChange",value:function(e){var t=window.CS.getBMState().user;t.password=e.target.value;var a={type:n.update_user,user:t};window.CS.clientAction(a)}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={type:n.server_called};window.CS.clientAction(t),g.a.post("/auth/signup",window.CS.getBMState().user).then((function(e){var t={type:n.user_created};f.push("/"),window.CS.clientAction(t),console.log(e.data)}))}}]),t}(r.Component),y=a(18);_[n.asset_updated]=function(e,t){e.UI.waitingForResponse=!1},_[n.update_asset]=function(e,t){var a=e.BM.assets.filter((function(e){return e._id===t.asset._id}));return console.log(a),a[0].asset_name=t.asset.asset_name,a[0].asset_value=t.asset.asset_value,e},_[n.delete_asset]=function(e,t){var a=e.BM.assets.filter((function(e){return e._id!==t.asset._id}));return e.BM.assets=a,e};var O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleSwitchToEditMode=a.handleSwitchToEditMode.bind(Object(y.a)(a)),a.handleNameChange=a.handleNameChange.bind(Object(y.a)(a)),a.handleValueChange=a.handleValueChange.bind(Object(y.a)(a)),a.handleSave=a.handleSave.bind(Object(y.a)(a)),a.handleRerenderTest=a.handleRerenderTest.bind(Object(y.a)(a)),a.handleDelete=a.handleDelete.bind(Object(y.a)(a)),a.state={edit_mode:e.edit},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.state.edit_mode?s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement("input",{type:"text",name:"name",value:this.props.asset.asset_name,onChange:this.handleNameChange})),s.a.createElement("td",null,s.a.createElement("input",{type:"number",name:"value",value:this.props.asset.asset_value,onChange:this.handleValueChange})," \u20ac"),s.a.createElement("td",null,s.a.createElement("button",{onClick:this.handleSave,id:this.props.asset._id},"save"),s.a.createElement("button",{onClick:this.handleRerenderTest},"increase State Counter"))):s.a.createElement("tr",null,s.a.createElement("td",null,this.props.asset.asset_name),s.a.createElement("td",null,this.props.asset.asset_value," \u20ac"),s.a.createElement("td",null,s.a.createElement("button",{onClick:this.handleSwitchToEditMode},"edit"),s.a.createElement("button",{onClick:this.handleDelete,id:this.props.asset._id},"sell or dispose"),s.a.createElement("button",{onClick:this.handleRerenderTest},"increase State Counter ",window.CS.getUIState().counter)))}},{key:"handleSwitchToEditMode",value:function(){this.setState({edit_mode:!0})}},{key:"handleNameChange",value:function(e){var t=this.props.asset;t.asset_name=e.target.value;var a={type:n.update_asset,asset:t};window.CS.clientAction(a)}},{key:"handleValueChange",value:function(e){var t=this.props.asset;t.asset_value=e.target.value;var a={type:n.update_asset,asset:t};window.CS.clientAction(a)}},{key:"handleSave",value:function(e){this.setState({edit_mode:!1});var t={type:n.server_called};window.CS.clientAction(t),g.a.put("/assets/update/"+this.props.asset._id,this.props.asset).then((function(e){var t={type:n.asset_updated};window.CS.clientAction(t)}))}},{key:"handleDelete",value:function(){var e=this,t={type:n.server_called};window.CS.clientAction(t),g.a.post("/assets/delete/"+this.props.asset._id).then((function(t){var a={type:n.delete_asset,asset:e.props.asset};window.CS.clientAction(a)}))}},{key:"handleRerenderTest",value:function(e){var t={type:n.render_test};window.CS.clientAction(t)}}]),t}(s.a.PureComponent),I=a(122),k=a.n(I);_[n.create_asset]=function(e,t){return e.BM.assets.push(t.asset),e.UI.waitingForResponse=!1,e};var j=function(e){function t(e){var a;return Object(i.a)(this,t),console.log("new App component will be initialized"),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleCreateAsset=a.handleCreateAsset.bind(Object(y.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("p",null," ",window.CS.getUIState().waitingForResponse.toString(),window.CS.getUIState().counter),s.a.createElement("h1",null,"simple asset management application"),s.a.createElement("p",null,"to create a new asset click this button:\xa0",s.a.createElement("button",{onClick:this.handleCreateAsset},"create asset")),s.a.createElement("table",null,s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("th",null,"description"),s.a.createElement("th",null,"value"),s.a.createElement("th",null,"action")),window.CS.getBMState().assets.map((function(e){return s.a.createElement(O,{key:e._id,asset:e,edit:!1})})))))}},{key:"handleCreateAsset",value:function(){console.log("handleCreateAsset invoked");var e={type:n.server_called};window.CS.clientAction(e);var t={_id:k.a.Types.ObjectId().toString(),asset_name:"",asset_value:0},a={type:n.create_asset,asset:t};g.a.post("/assets/add",t).then((function(e){window.CS.clientAction(a),console.log(e.data)}))}}]),t}(r.Component),M=a(24);_[n.server_called]=function(e,t){return e.UI.waitingForResponse=!0,e},_[n.add_assets_from_server]=function(e,t){return e.UI.waitingForResponse=!1,e.BM.assets=t.assets,e};var U=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e={type:n.server_called};window.CS.clientAction(e),g.a.get("/assets/read").then((function(e){console.log("this data was loaded as a result of componentDidMount:"),console.log(e.data);var t={type:n.add_assets_from_server,assets:e.data};window.CS.clientAction(t)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return window.CS.log("App --\x3e render()"),s.a.createElement(s.a.Fragment,null,s.a.createElement(p,null),s.a.createElement(M.c,null,s.a.createElement(M.a,{path:"/showassets",component:j}),s.a.createElement(M.a,{path:"/register",component:b}),s.a.createElement(M.a,{path:"/",component:E})))}}]),t}(s.a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A,B=a(41),F=a(79);A=window.__REDUX_DEVTOOLS_EXTENSION__?Object(B.b)(Object(B.a)(F.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()):Object(B.a)(F.a);var R=function(){function e(){Object(i.a)(this,e),this.store=void 0}return Object(u.a)(e,[{key:"log",value:function(e){console.log(e)}},{key:"getStore",value:function(){return this.store}},{key:"getState",value:function(){return this.store.getState()}},{key:"getUIState",value:function(){return this.getState().UI}},{key:"getBMState",value:function(){return this.getState().BM}},{key:"initializeStore",value:function(){this.store=Object(B.c)(S,A)}},{key:"clientAction",value:function(e){this.store.dispatch(e)}}]),e}();window.CS=new R,window.CS.initializeStore(),l.a.render(s.a.createElement(M.b,{history:f},s.a.createElement(U,{stateCounter:window.CS.getUIState().counter})),document.getElementById("root")),window.CS.getStore().subscribe((function(){window.CS.log("3. before render ---------------------------------------------"),l.a.render(s.a.createElement(M.b,{history:f},s.a.createElement(U,{stateCounter:window.CS.getUIState().counter})),document.getElementById("root")),window.CS.log("3. after render ---------------------------------------------")})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[124,1,2]]]);
//# sourceMappingURL=main.dd4c804d.chunk.js.map