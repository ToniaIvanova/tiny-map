(this["webpackJsonptiny-map"]=this["webpackJsonptiny-map"]||[]).push([[0],{103:function(e,t,n){e.exports={table:"ProductChoice_table__3b3pK",search:"ProductChoice_search__2Y-QW"}},106:function(e,t,n){e.exports={table:"RegionChoice_table__3X4Bg",search:"RegionChoice_search__2uZdA"}},120:function(e,t,n){e.exports={app:"App_app__pQWe-",menu:"App_menu__2HRcq",username:"App_username__3EYJD"}},145:function(e,t,n){e.exports={map:"TinyMap_map__2-PwY"}},149:function(e,t,n){e.exports={tabs:"MainMenu_tabs__36HWd"}},154:function(e,t,n){e.exports={"login-form":"LogIn_login-form__2cejJ"}},258:function(e,t,n){},264:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(25),o=n(35),a=n.n(o),i=n(120),s=n.n(i),u=n(85),l=n(145),d=n.n(l),b="PRODUCT_TAB",j="REGION_TAB",O=["#dc143c","#3caa3c","#156fc1","#eaec35","#942010","#0b0038","#ffb21f","#ffbcb5v","#6ac954"],p=n(7);var f=function(e){var t=e.selectedStations;return Object(p.jsx)("div",{children:t.map((function(e){var t=e.done?"#c0c0c0":O[e.colorForMap];return Object(p.jsx)(u.b,{geometry:e.place,modules:["geoObject.addon.balloon","geoObject.addon.hint"],properties:{balloonContentHeader:"".concat(e.stationName),balloonContent:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442: ".concat(e.productName," --- ").concat(e.done?"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e!":"\u041d\u0430\u0434\u043e: ".concat(e.needCount)),balloonContentFooter:e.region},options:{preset:"islands#circleIcon",iconColor:t}},e.key)}))})},g={getSelectedByProductStations:function(e){return e.station.selectedByProductStations},getSelectedByRegionStations:function(e){return e.station.selectedByRegionStations}},h={getActiveTab:function(e){return e.tab.activeTab}};var x=Object(c.b)((function(e){return{selectedByProductStations:g.getSelectedByProductStations(e),selectedByRegionStations:g.getSelectedByRegionStations(e),activeTab:h.getActiveTab(e)}}))((function(e){var t=e.selectedByProductStations,n=e.selectedByRegionStations,r=e.activeTab;return Object(p.jsx)(u.c,{children:Object(p.jsxs)(u.a,{className:d.a.map,defaultState:{center:[19.441468,17.496825],zoom:2},children:[r===b&&Object(p.jsx)(f,{selectedStations:t}),r===j&&Object(p.jsx)(f,{selectedStations:n})]})})})),S=n(51),m=n(271),I="SET_CURRENT_USER",v="LOG_IN",y=n(146),_=n.n(y).a.create({baseURL:"https://stormy-brook-68283.herokuapp.com",timeout:2e3,headers:{"Content-Type":"application/json"}}),C={setCurrentUser:function(e){return function(t){return _.get("/user/".concat(e)).then((function(e){return e.data})).then((function(e){return t({type:I,currentUser:e})}))}},logIn:function(e,t){return function(n){return _.post("/user/login",{username:e,password:t}).then((function(e){return e.data})).then((function(e){return n({type:v,currentUser:e})}))}}},R={getCurrentUser:function(e){return e.user.currentUser}},T=n(60),P=n.n(T);var N={setCurrentUser:C.setCurrentUser},B=Object(c.b)((function(e){return{currentUser:R.getCurrentUser(e)}}),N)((function(e){var t=e.currentUser;return e.setCurrentUser,Object(p.jsxs)("div",{className:P.a.user,children:[Object(p.jsx)(S.a,{size:"small",onClick:function(){},className:P.a["user-button"],children:"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0432\u043b\u0430\u0441\u0442\u044c"}),Object(p.jsx)(m.a,{size:50,className:P.a.avatar,children:t?t.name:"\u0413\u043e\u0441\u0442\u044c"})]})}));function U(){return Object(p.jsx)("h2",{className:P.a.logo,children:" Tiny-Map "})}function A(){return Object(p.jsxs)("div",{className:P.a.header,children:[Object(p.jsx)(U,{}),Object(p.jsx)(B,{})]})}n(257),n(258);var w=n(14),E=n(123),D=n(269),V=n(149),L=n.n(V),H=n(48),k=n.n(H),z=n(69),F=n(32),G=n(266),M=n(270),W=n(103),Y=n.n(W),q="SWITCH_ON_PRODUCT_TABLE_VISIBILITY",J="GET_ALL_PRODUCTS",K="PUSH_SELECTED_PRODUCT_ID",X="INC_PRODUCT_COLOR_INDEX",Q={switchOnProductTableVisibility:function(){return function(e){return e({type:q})}},getAllProducts:function(){return function(e){return _.get("/product").then((function(e){return e.data})).then((function(t){return e({type:J,products:t})}))}},pushSelectedProductId:function(e){return function(t){return t({type:K,productId:e})}},incProductColorIndex:function(e){return function(t){return t({type:X,colorIndex:e+1})}}},Z={getProductTableVisibility:function(e){return e.product.productTableVisibility},getSelectedProductIds:function(e){return e.product.selectedProductIds},getNextProductColorIndex:function(e){return e.product.nextProductColorIndex},getAllProducts:function(e){return e.product.allProducts}},$="CREATE_STATION",ee="PUSH_SELECTED_BY_PRODUCT_STATIONS",te="PUSH_SELECTED_BY_REGION_STATIONS",ne="UPDATE_STATION_DONE",re={createStation:function(e){return function(t){return _.post("/station",e).then((function(){return t({type:$})}))}},pushSelectedByProductStations:function(e,t,n){return function(r){return _.get("/station/product/".concat(e,"/").concat(t._id)).then((function(e){return e.data})).then((function(e){return r({type:ee,stationsData:e.map((function(e){return e.colorForMap=n,e}))})}))}},pushSelectedByRegionStations:function(e,t,n){return function(r){return _.get("/station/region/".concat(e,"/").concat(t._id)).then((function(e){return e.data})).then((function(e){return r({type:te,stationsData:e.map((function(e){return e.colorForMap=n,e}))})}))}},updateStationDone:function(e){var t=e.stationId,n=e.currentUser,r=e.done;return function(e){return _.put("/station/".concat(t,"/").concat(n._id,"/done"),{done:r}).then((function(e){return e.data})).then((function(){return e({type:ne,stationsData:{stationId:t,done:r}})}))}}};var ce={switchOnProductTableVisibility:Q.switchOnProductTableVisibility,pushSelectedProductIds:Q.pushSelectedProductId,incNextProductColor:Q.incProductColorIndex,pushSelectedByProductStations:re.pushSelectedByProductStations},oe=Object(c.b)((function(e){return{selectedProductIds:Z.getSelectedProductIds(e),nextProductColor:Z.getNextProductColorIndex(e),allProductsData:Z.getAllProducts(e),currentUser:R.getCurrentUser(e)}}),ce)((function(e){var t=e.selectedProductIds,n=e.currentUser,c=e.nextProductColor,o=e.allProductsData,a=e.incNextProductColor,i=e.switchOnProductTableVisibility,s=e.pushSelectedProductIds,u=e.pushSelectedByProductStations,l=Object(r.useState)([]),d=Object(F.a)(l,2),b=d[0],j=d[1],O=Object(r.useState)([]),f=Object(F.a)(O,2),g=f[0],h=f[1],x=Object(r.useState)(""),S=Object(F.a)(x,2),m=S[0],I=S[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(z.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=o.map((function(e){return{value:e._id,label:e.name}})),h(t),j(t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[o]),Object(p.jsx)("div",{className:Y.a.search,children:Object(p.jsx)(G.a,{dropdownMatchSelectWidth:252,style:{width:300},options:b,onSelect:function(e){e&&!t.includes(e)&&(u(e,n,c),i(),s(e),a(c))},onSearch:function(e){I(e);var t=g.filter((function(t){return t.label.toString().toLowerCase().indexOf(e.toString().toLowerCase())>-1}));j(t)},value:m,children:Object(p.jsx)(M.a.Search,{size:"large",placeholder:"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430",enterButton:!0})})})})),ae=n(267),ie=n(272);var se={updateStationDone:re.updateStationDone},ue=Object(c.b)((function(e){return{currentUser:R.getCurrentUser(e)}}),se)((function(e){var t=e.station,n=e.currentUser,r=e.updateStationDone;function c(e){r({stationId:t.stationId,currentUser:n,done:e})}return n?t.done?Object(p.jsx)(ie.a,{onChange:c,defaultChecked:!0}):Object(p.jsx)(ie.a,{onChange:c}):Object(p.jsx)("div",{})})),le=[{title:"Product Name",dataIndex:"productName",sorter:function(e,t){return e.productName>t.productName?1:-1}},{title:"Station Name",dataIndex:"stationName",sorter:function(e,t){return e.stationName>t.stationName?1:-1}},{title:"Need Count",dataIndex:"needCount",defaultSortOrder:"descend",sorter:function(e,t){return e.needCount-t.needCount}},{title:"Done",render:function(e){return Object(p.jsx)(ue,{station:e})}},{title:"region",dataIndex:"region",sorter:function(e,t){return e.region>t.region?1:-1}}];var de=Object(c.b)((function(e){return{selectedByProductStations:g.getSelectedByProductStations(e)}}))((function(e){var t=e.selectedByProductStations;return Object(p.jsx)(ae.a,{columns:le,dataSource:t,size:"middle",pagination:{pageSize:7}})}));var be=Object(c.b)((function(e){return{productTableVisability:Z.getProductTableVisibility(e)}}))((function(e){var t=e.productTableVisability;return Object(p.jsxs)("div",{children:[Object(p.jsx)(oe,{}),t&&Object(p.jsx)(de,{className:Y.a.table})]})})),je=n(106),Oe=n.n(je),pe="SWITCH_ON_REGION_TABLE_VISIBILITY",fe="GET_ALL_REGIONS",ge="PUSH_SELECTED_REGIONS_ID",he="INC_REGION_COLOR_INDEX",xe={switchOnRegionTableVisibility:function(){return function(e){return e({type:pe})}},getAllRegions:function(){return function(e){return _.get("/region").then((function(e){return e.data})).then((function(t){return e({type:fe,regions:t})}))}},pushSelectedRegionId:function(e){return function(t){return t({type:ge,regionId:e})}},incRegionColorIndex:function(e){return function(t){return t({type:he,colorIndex:e+1})}}},Se={getRegionTableVisibility:function(e){return e.region.regionTableVisibility},getSelectedRegionIds:function(e){return e.region.selectedRegionIds},getNextRegionColorIndex:function(e){return e.region.nextRegionColorIndex},getAllRegions:function(e){return e.region.allRegions}};var me={switchOnRegionTableVisibility:xe.switchOnRegionTableVisibility,pushSelectedRegionIds:xe.pushSelectedRegionId,incRegionColorIndex:xe.incRegionColorIndex,pushSelectedByRegionStations:re.pushSelectedByRegionStations},Ie=Object(c.b)((function(e){return{selectedRegionIds:Se.getSelectedRegionIds(e),nextRegionColor:Se.getNextRegionColorIndex(e),allRegionsData:Se.getAllRegions(e),currentUser:R.getCurrentUser(e)}}),me)((function(e){var t=e.selectedRegionIds,n=e.currentUser,c=e.nextRegionColor,o=e.allRegionsData,a=e.incRegionColorIndex,i=e.switchOnRegionTableVisibility,s=e.pushSelectedRegionIds,u=e.pushSelectedByRegionStations,l=Object(r.useState)([]),d=Object(F.a)(l,2),b=d[0],j=d[1],O=Object(r.useState)([]),f=Object(F.a)(O,2),g=f[0],h=f[1],x=Object(r.useState)(""),S=Object(F.a)(x,2),m=S[0],I=S[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(z.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=o.map((function(e){return{value:e._id,label:e.name}})),h(t),j(t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[o]),Object(p.jsx)("div",{className:Oe.a.search,children:Object(p.jsx)(G.a,{dropdownMatchSelectWidth:252,style:{width:300},options:b,onSelect:function(e){e&&!t.includes(e)&&(u(e,n,c),i(),s(e),a(c))},onSearch:function(e){I(e);var t=g.filter((function(t){return t.label.toString().toLowerCase().indexOf(e.toString().toLowerCase())>-1}));j(t)},value:m,children:Object(p.jsx)(M.a.Search,{size:"large",placeholder:"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u0433\u0438\u043e\u043d\u0430",enterButton:!0})})})}));var ve=Object(c.b)((function(e){return{selectedByRegionStations:g.getSelectedByRegionStations(e)}}))((function(e){var t=e.selectedByRegionStations;return Object(p.jsx)(ae.a,{columns:le,dataSource:t,size:"middle",pagination:{pageSize:7}})}));var ye=Object(c.b)((function(e){return{regionTableVisability:Se.getRegionTableVisibility(e)}}))((function(e){var t=e.regionTableVisability;return Object(p.jsxs)("div",{children:[Object(p.jsx)(Ie,{}),t&&Object(p.jsx)(ve,{className:Oe.a.table})]})})),_e=n(268),Ce=n(50);var Re={createStation:re.createStation},Te=Object(c.b)((function(e){return{currentUser:R.getCurrentUser(e)}}),Re)((function(e){var t=e.currentUser,n=e.createStation,r=function(){var e=Object(z.a)(k.a.mark((function e(r){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.userId=t._id,n(r);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(_e.a,{labelCol:{span:7},wrapperCol:{span:14},layout:"horizontal",onFinish:r,onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(p.jsx)(_e.a.Item,{label:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442",name:"productName",children:Object(p.jsx)(M.a,{})}),Object(p.jsx)(_e.a.Item,{label:"\u0421\u0442\u0430\u043d\u0446\u0438\u044f",name:"stationName",children:Object(p.jsx)(M.a,{})}),Object(p.jsx)(_e.a.Item,{label:"\u041a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b",name:"place",children:Object(p.jsx)(M.a,{})}),Object(p.jsx)(_e.a.Item,{label:"\u0420\u0435\u0433\u0438\u043e\u043d",name:"region",children:Object(p.jsx)(M.a,{})}),Object(p.jsx)(_e.a.Item,{label:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u043d\u0443\u0436\u043d\u043e",name:"needCount",children:Object(p.jsxs)(Ce.a,{children:[Object(p.jsx)(Ce.a.Option,{value:25,children:"25"}),Object(p.jsx)(Ce.a.Option,{value:50,children:"50"}),Object(p.jsx)(Ce.a.Option,{value:150,children:"150"}),Object(p.jsx)(Ce.a.Option,{value:350,children:"350"}),Object(p.jsx)(Ce.a.Option,{value:1e3,children:"1000"})]})}),Object(p.jsx)(_e.a.Item,{label:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e",name:"done",valuePropName:"checked",children:Object(p.jsx)(ie.a,{})}),Object(p.jsx)(_e.a.Item,{wrapperCol:{span:14,offset:7},children:Object(p.jsx)(S.a,{type:"primary",htmlType:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})]})})),Pe="CHANGE_ACTIVE_TAB",Ne={changeActiveTab:function(e){return function(t){return t({type:Pe,newActiveTabKey:e})}}},Be=D.a.TabPane;var Ue={changeActiveTab:Ne.changeActiveTab},Ae=Object(c.b)(null,Ue)((function(e){var t=e.changeActiveTab;return Object(p.jsx)("div",{children:Object(p.jsxs)(D.a,{defaultActiveKey:"1",onChange:function(e){t(e)},className:L.a.tabs,children:[Object(p.jsx)(Be,{tab:"\u041f\u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430\u043c",children:Object(p.jsx)(be,{})},b),Object(p.jsx)(Be,{tab:"\u041f\u043e \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043c",children:Object(p.jsx)(ye,{})},j),Object(p.jsx)(Be,{tab:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0441\u0442\u0430\u043d\u0446\u0438\u044e",children:Object(p.jsx)(Te,{})},"CREATE_STATION_TAB")]})})})),we=n(91),Ee=n(154),De=n.n(Ee),Ve={logIn:C.logIn,getAllProducts:Q.getAllProducts,getAllRegions:xe.getAllRegions},Le=Object(c.b)(null,Ve)((function(e){var t=e.logIn,n=e.getAllProducts,r=e.getAllRegions;return Object(p.jsxs)(_e.a,{labelCol:{span:7},wrapperCol:{span:14},name:"basic",onFinish:function(e){var c=e.username,o=e.password;t(c,o),n(),r()},onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off",className:De.a["login-form"],children:[Object(p.jsx)(_e.a.Item,{label:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",name:"username",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}],children:Object(p.jsx)(M.a,{})}),Object(p.jsx)(_e.a.Item,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}],children:Object(p.jsx)(M.a.Password,{})}),Object(p.jsx)(_e.a.Item,{name:"remember",valuePropName:"checked",wrapperCol:{offset:7,span:14},children:Object(p.jsx)(we.a,{children:"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"})}),Object(p.jsx)(_e.a.Item,{wrapperCol:{offset:7,span:14},children:Object(p.jsx)(S.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})}));var He=Object(c.b)((function(e){return{currentUser:R.getCurrentUser(e)}}))((function(e){var t=e.currentUser;return Object(p.jsxs)("div",{className:s.a.app,children:[Object(p.jsx)(x,{}),Object(p.jsxs)("div",{className:s.a.menu,children:[Object(p.jsx)(A,{}),t?Object(p.jsx)(E.a,{children:Object(p.jsxs)(w.d,{children:[Object(p.jsx)(w.b,{path:"/",element:Object(p.jsx)(Ae,{})}),Object(p.jsx)(w.b,{path:"*",element:Object(p.jsx)(w.a,{to:"/"})})]})}):Object(p.jsx)(E.a,{children:Object(p.jsxs)(w.d,{children:[Object(p.jsx)(w.b,{path:"/login",element:Object(p.jsx)(Le,{})}),Object(p.jsx)(w.b,{path:"*",element:Object(p.jsx)(w.a,{to:"/login"})})]})})]})]})})),ke=n(90),ze=n(155),Fe=n(156),Ge=n(22),Me={currentUser:null},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:case I:return Object(Ge.a)(Object(Ge.a)({},e),{},{currentUser:t.currentUser});default:return e}},Ye=n(52),qe={productTableVisibility:!1,selectedProductIds:[],nextProductColorIndex:0,allProducts:[]},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(Ge.a)(Object(Ge.a)({},e),{},{allProducts:t.products});case q:return Object(Ge.a)(Object(Ge.a)({},e),{},{productTableVisibility:!0});case K:return Object(Ge.a)(Object(Ge.a)({},e),{},{selectedProductIds:[].concat(Object(Ye.a)(e.selectedProductIds),[t.productId])});case X:return Object(Ge.a)(Object(Ge.a)({},e),{},{nextProductColorIndex:t.colorIndex});default:return e}},Ke={regionTableVisibility:!1,selectedRegionIds:[],nextRegionColorIndex:0,allRegions:[]},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe:return Object(Ge.a)(Object(Ge.a)({},e),{},{allRegions:t.regions});case pe:return Object(Ge.a)(Object(Ge.a)({},e),{},{regionTableVisibility:!0});case ge:return Object(Ge.a)(Object(Ge.a)({},e),{},{selectedRegionIds:[].concat(Object(Ye.a)(e.selectedRegionIds),[t.regionId])});case he:return Object(Ge.a)(Object(Ge.a)({},e),{},{nextRegionColorIndex:t.colorIndex});default:return e}},Qe=n(89),Ze={selectedByProductStations:[],selectedByRegionStations:[]},$e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee:return Object(Ge.a)(Object(Ge.a)({},e),{},{selectedByProductStations:[].concat(Object(Ye.a)(e.selectedByProductStations),Object(Ye.a)(t.stationsData))});case te:return Object(Ge.a)(Object(Ge.a)({},e),{},{selectedByRegionStations:[].concat(Object(Ye.a)(e.selectedByRegionStations),Object(Ye.a)(t.stationsData))});case ne:return et(e,t);default:return e}};function et(e,t){var n,r=[],c=Object(Qe.a)(e.selectedByProductStations);try{for(c.s();!(n=c.n()).done;){var o=n.value;o.stationId===t.stationsData.stationId?r.push(Object(Ge.a)(Object(Ge.a)({},o),{},{done:t.stationsData.done})):r.push(o)}}catch(l){c.e(l)}finally{c.f()}var a,i=[],s=Object(Qe.a)(e.selectedByRegionStations);try{for(s.s();!(a=s.n()).done;){var u=a.value;u.stationId===t.stationsData.stationId?i.push(Object(Ge.a)(Object(Ge.a)({},u),{},{done:t.stationsData.done})):i.push(u)}}catch(l){s.e(l)}finally{s.f()}return Object(Ge.a)(Object(Ge.a)({},e),{},{selectedByProductStations:r,selectedByRegionStations:i})}var tt={activeTab:b},nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;return t.type===Pe?Object(Ge.a)(Object(Ge.a)({},e),{},{activeTab:t.newActiveTabKey}):e},rt=Object(ke.combineReducers)({user:We,product:Je,region:Xe,station:$e,tab:nt}),ct=Object(ke.createStore)(rt,Object(ze.composeWithDevTools)(Object(ke.applyMiddleware)(Fe.a)));a.a.render(Object(p.jsxs)(c.a,{store:ct,children:[Object(p.jsx)(He,{}),Object(p.jsx)("style",{children:"#root {width: 100%} "})]}),document.getElementById("root"))},60:function(e,t,n){e.exports={header:"Header_header__mWrfg",logo:"Header_logo__3COiS",user:"Header_user__1SWzi","user-button":"Header_user-button__25kzA",avatar:"Header_avatar__2EqOL"}}},[[264,1,2]]]);
//# sourceMappingURL=main.3c7bd43a.chunk.js.map