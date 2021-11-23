(this["webpackJsonptiny-map"]=this["webpackJsonptiny-map"]||[]).push([[0],{108:function(e,t,n){e.exports={table:"ProductChoice_table__3b3pK",search:"ProductChoice_search__2Y-QW"}},111:function(e,t,n){e.exports={table:"RegionChoice_table__3X4Bg",search:"RegionChoice_search__2uZdA"}},125:function(e,t,n){e.exports={app:"App_app__pQWe-",menu:"App_menu__2HRcq",username:"App_username__3EYJD"}},150:function(e,t,n){e.exports={map:"TinyMap_map__2-PwY"}},153:function(e,t,n){e.exports={tabs:"MainMenu_tabs__36HWd"}},245:function(e,t,n){},269:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(24),a=n(37),o=n.n(a),s=n(125),i=n.n(s),u=n(89),l=n(150),d=n.n(l),b="PRODUCT_TAB",j="REGION_TAB",p=["#942010","#0b0038","#ffb21f","#ffbcb5","#6ac954","#dc143c","#3caa3c","#156fc1","#eaec35"],O=n(63),f=function(e,t){var n,r=Object(O.a)(e);try{for(r.s();!(n=r.n()).done;){var c=n.value;if(c.regionId===t)return c.color;if(c.productId===t)return c.color}}catch(a){r.e(a)}finally{r.f()}return p[0]},g=n(6);var h=function(e){var t=e.selectedStations,n=e.selectedIds,r=e.tab;return Object(g.jsx)("div",{children:t.map((function(e){var t=r===b?e.productId:e.regionId,c=e.done?"#c0c0c0":f(n,t);return Object(g.jsx)(u.b,{geometry:e.place,modules:["geoObject.addon.balloon","geoObject.addon.hint"],properties:{balloonContentHeader:"".concat(e.stationName),balloonContent:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442: ".concat(e.productName," --- ").concat(e.done?"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e!":"\u041d\u0430\u0434\u043e: ".concat(e.needCount)),balloonContentFooter:e.region},options:{preset:"islands#circleIcon",iconColor:c}},e.key)}))})},m={getSelectedByProductStations:function(e){return e.station.selectedByProductStations},getSelectedByRegionStations:function(e){return e.station.selectedByRegionStations}},S={getProductTableVisibility:function(e){return e.product.productTableVisibility},getSelectedProductIds:function(e){return e.product.selectedProductIds},getNextProductColorIndex:function(e){return e.product.nextProductColorIndex},getAllProducts:function(e){return e.product.allProducts}},v={getRegionTableVisibility:function(e){return e.region.regionTableVisibility},getSelectedRegionIds:function(e){return e.region.selectedRegionIds},getNextRegionColorIndex:function(e){return e.region.nextRegionColorIndex},getAllRegions:function(e){return e.region.allRegions}},x={getActiveTab:function(e){return e.tab.activeTab}};var y=Object(c.b)((function(e){return{selectedProductIds:S.getSelectedProductIds(e),selectedByProductStations:m.getSelectedByProductStations(e),selectedRegionIds:v.getSelectedRegionIds(e),selectedByRegionStations:m.getSelectedByRegionStations(e),activeTab:x.getActiveTab(e)}}))((function(e){var t=e.selectedProductIds,n=e.selectedByProductStations,r=e.selectedRegionIds,c=e.selectedByRegionStations,a=e.activeTab;return Object(g.jsx)(u.c,{children:Object(g.jsxs)(u.a,{className:d.a.map,defaultState:{center:[19.441468,17.496825],zoom:2},children:[a===b&&Object(g.jsx)(h,{selectedStations:n,selectedIds:t,tab:b}),a===j&&Object(g.jsx)(h,{selectedStations:c,selectedIds:r,tab:j})]})})})),I=n(272),_=n(41),T=n(277),R=n(165),P=n(62),E=n.n(P),C={getCurrentUser:function(e){return e.user.currentUser},getError:function(e){return e.user.errorType}},N="LOG_OUT";var B={logOut:{logOut:function(){return function(e){return e({type:N})}}}.logOut},w=Object(c.b)((function(e){return{currentUser:C.getCurrentUser(e)}}),B)((function(e){var t=e.currentUser,n=e.logOut;return Object(g.jsxs)("div",{className:E.a.user,children:[Object(g.jsx)(I.a,{title:"\u0425\u043e\u0442\u0438\u0442\u0435 \u0443\u0439\u0442\u0438",icon:Object(g.jsx)(R.a,{style:{color:"red"}}),onConfirm:function(){n(),localStorage.setItem("user-token","")},children:Object(g.jsx)(_.a,{size:"small",className:E.a["user-button"],children:"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0432\u043b\u0430\u0441\u0442\u044c"})}),Object(g.jsx)(T.a,{size:50,className:E.a.avatar,children:t?t.name:"\u0413\u043e\u0441\u0442\u044c"})]})}));function A(){return Object(g.jsx)("h2",{className:E.a.logo,children:" Tiny-Map "})}function U(){return Object(g.jsxs)("div",{className:E.a.header,children:[Object(g.jsx)(A,{}),Object(g.jsx)(w,{})]})}n(244),n(245);var D=n(14),k=n(128),L=n(275),V=n(153),G=n.n(V),F=n(31),M=n(278),z=n(95),H=n(108),W=n.n(H),Y=n(154),q=n.n(Y).a.create({baseURL:"https://stormy-brook-68283.herokuapp.com",timeout:2e3,headers:{"Content-Type":"application/json"}}),K="SWITCH_ON_PRODUCT_TABLE_VISIBILITY",J="GET_ALL_PRODUCTS",Q="PUSH_SELECTED_PRODUCT_ID",X="DELETE_SELECTED_PRODUCT_ID",Z={switchOnProductTableVisibility:function(){return function(e){return e({type:K})}},getAllProducts:function(){return function(e){return q.get("/product").then((function(e){return e.data})).then((function(t){return e({type:J,products:t})}))}},pushSelectedProductId:function(e){return function(t){return t({type:Q,productId:e})}},deleteSelectedProductId:function(e){return function(t){return t({type:X,productId:e})}}},$=n(12),ee=n(27),te=n.n(ee),ne=n(34),re="CREATE_STATION",ce="PUSH_SELECTED_BY_PRODUCT_STATIONS",ae="PUSH_SELECTED_BY_REGION_STATIONS",oe="DELETE_SELECTED_BY_PRODUCT_STATIONS",se="DELETE_SELECTED_BY_REGION_STATIONS",ie="UPDATE_STATION_DONE",ue={createStation:function(e){return function(){var t=Object(ne.a)(te.a.mark((function t(n){return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q.post("/station",e);case 2:return t.abrupt("return",n({type:re}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},pushSelectedByProductStations:function(e,t,n){return function(){var r=Object(ne.a)(te.a.mark((function r(c){var a,o;return te.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,q.post("/station/product/".concat(e),t);case 2:return a=r.sent,o=a.data,r.abrupt("return",c({type:ce,stationsData:o.map((function(e){return e.colorForMap=n,e}))}));case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},pushSelectedByRegionStations:function(e,t){return function(){var n=Object(ne.a)(te.a.mark((function n(r){var c,a;return te.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q.post("/station/region/".concat(e),t);case 2:return c=n.sent,a=c.data,n.abrupt("return",r({type:ae,stationsData:a}));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},updateStationDone:function(e){var t=e.stationId,n=e.currentUser,r=e.done;return function(){var e=Object(ne.a)(te.a.mark((function e(c){var a,o;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.post("/station/".concat(t,"/done"),Object($.a)(Object($.a)({},n),{},{done:r}));case 2:return a=e.sent,o=a.data,e.abrupt("return",c({type:ie,stationData:Object($.a)(Object($.a)({},o),{},{done:r})}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},deleteSelectedByProductStations:function(e){return function(t){return t({type:oe,product:e})}},deleteSelectedByRegionStations:function(e){return function(t){return t({type:se,region:e})}}},le=ue;var de={switchOnProductTableVisibility:Z.switchOnProductTableVisibility,pushSelectedProductIds:Z.pushSelectedProductId,deleteSelectedProductId:Z.deleteSelectedProductId,pushSelectedByProductStations:le.pushSelectedByProductStations,deleteSelectedByProductStations:le.deleteSelectedByProductStations},be=Object(c.b)((function(e){return{selectedProductIds:S.getSelectedProductIds(e),nextProductColor:S.getNextProductColorIndex(e),allProductsData:S.getAllProducts(e),currentUser:C.getCurrentUser(e)}}),de)((function(e){var t=e.selectedProductIds,n=e.nextProductColor,c=e.allProductsData,a=e.currentUser,o=e.switchOnProductTableVisibility,s=e.pushSelectedProductIds,i=e.deleteSelectedProductId,u=e.pushSelectedByProductStations,l=e.deleteSelectedByProductStations,d=Object(r.useState)([]),b=Object(F.a)(d,2),j=b[0],p=b[1];return Object(r.useEffect)((function(){var e=c.map((function(e){return{value:e._id,label:e.name}}));p(e)}),[c]),Object(g.jsx)("div",{className:W.a.search,children:Object(g.jsx)(z.a,{mode:"multiple",size:"large",showArrow:!0,style:{width:"100%"},placeholder:"\u0432\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442",tagRender:function(e){var n=e.label,r=e.closable,c=e.onClose,a=e.value,o=f(t,a);return Object(g.jsx)(M.a,{color:o,onMouseDown:function(e){e.preventDefault(),e.stopPropagation()},closable:r,onClose:c,style:{marginRight:3},children:n})},options:j,onSelect:function(e){e&&!t.includes(e)&&(u(e,a,n),o(),s(e))},onDeselect:function(e){i(e);var t=c.find((function(t){return t._id===e}));l(t)}})})})),je=n(273),pe=n(279);var Oe={updateStationDone:le.updateStationDone},fe=Object(c.b)((function(e){return{currentUser:C.getCurrentUser(e)}}),Oe)((function(e){var t=e.station,n=e.currentUser,r=e.updateStationDone;function c(e){r({stationId:t.stationId,currentUser:n,done:e})}return n?t.done?Object(g.jsx)(pe.a,{onChange:c,defaultChecked:!0}):Object(g.jsx)(pe.a,{onChange:c}):Object(g.jsx)("div",{})})),ge=[{title:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442",dataIndex:"productName",sorter:function(e,t){return e.productName>t.productName?1:-1}},{title:"\u0421\u0442\u0430\u043d\u0446\u0438\u044f",dataIndex:"stationName",sorter:function(e,t){return e.stationName>t.stationName?1:-1}},{title:"\u041d\u0443\u0436\u043d\u043e",dataIndex:"needCount",defaultSortOrder:"descend",sorter:function(e,t){return e.needCount-t.needCount}},{title:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e",render:function(e){return Object(g.jsx)(fe,{station:e})},filters:[{text:"Done",value:!0},{text:"Not Done",value:!1}],onFilter:function(e,t){return t.done===e}},{title:"\u0420\u0435\u0433\u0438\u043e\u043d",dataIndex:"regionName",sorter:function(e,t){return e.region>t.region?1:-1}}];var he=Object(c.b)((function(e){return{selectedByProductStations:m.getSelectedByProductStations(e)}}))((function(e){var t=e.selectedByProductStations;return Object(g.jsx)(je.a,{columns:ge,dataSource:t,size:"middle",pagination:{pageSize:7}})}));var me=Object(c.b)((function(e){return{productTableVisability:S.getProductTableVisibility(e)}}))((function(e){var t=e.productTableVisability;return Object(g.jsxs)("div",{children:[Object(g.jsx)(be,{}),t&&Object(g.jsx)(he,{className:W.a.table})]})})),Se=n(111),ve=n.n(Se),xe="SWITCH_ON_REGION_TABLE_VISIBILITY",ye="GET_ALL_REGIONS",Ie="PUSH_SELECTED_REGION_ID",_e="DELETE_SELECTED_REGION_ID",Te={switchOnRegionTableVisibility:function(){return function(e){return e({type:xe})}},getAllRegions:function(){return function(e){return q.get("/region").then((function(e){return e.data})).then((function(t){return e({type:ye,regions:t})}))}},pushSelectedRegionId:function(e){return function(t){return t({type:Ie,regionId:e})}},deleteSelectedRegionId:function(e){return function(t){return t({type:_e,regionId:e})}}};var Re={switchOnRegionTableVisibility:Te.switchOnRegionTableVisibility,pushSelectedRegionId:Te.pushSelectedRegionId,deleteSelectedRegionId:Te.deleteSelectedRegionId,pushSelectedByRegionStations:le.pushSelectedByRegionStations,deleteSelectedByRegionStations:le.deleteSelectedByRegionStations},Pe=Object(c.b)((function(e){return{selectedRegionIds:v.getSelectedRegionIds(e),nextRegionColor:v.getNextRegionColorIndex(e),allRegionsData:v.getAllRegions(e),currentUser:C.getCurrentUser(e)}}),Re)((function(e){var t=e.selectedRegionIds,n=(e.nextRegionColor,e.allRegionsData),c=e.currentUser,a=e.switchOnRegionTableVisibility,o=e.pushSelectedRegionId,s=e.deleteSelectedRegionId,i=e.pushSelectedByRegionStations,u=e.deleteSelectedByRegionStations,l=Object(r.useState)([]),d=Object(F.a)(l,2),b=d[0],j=d[1];return Object(r.useEffect)((function(){var e=n.map((function(e){return{value:e._id,label:e.name}}));j(e)}),[n]),Object(g.jsx)("div",{className:ve.a.search,children:Object(g.jsx)(z.a,{mode:"multiple",size:"large",showArrow:!0,style:{width:"100%"},placeholder:"\u0432\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u0440\u0435\u0433\u0438\u043e\u043d",tagRender:function(e){var n=e.label,r=e.closable,c=e.onClose,a=e.value,o=f(t,a);return Object(g.jsx)(M.a,{color:o,onMouseDown:function(e){e.preventDefault(),e.stopPropagation()},closable:r,onClose:c,style:{marginRight:3},children:n})},options:b,onSelect:function(e){e&&!t.includes(e)&&(o(e),i(e,c),a())},onDeselect:function(e){s(e);var t=n.find((function(t){return t._id===e}));u(t)}})})}));var Ee=Object(c.b)((function(e){return{selectedByRegionStations:m.getSelectedByRegionStations(e)}}))((function(e){var t=e.selectedByRegionStations;return Object(g.jsx)(je.a,{columns:ge,dataSource:t,size:"middle",pagination:{pageSize:7}})}));var Ce=Object(c.b)((function(e){return{regionTableVisability:v.getRegionTableVisibility(e)}}))((function(e){var t=e.regionTableVisability;return Object(g.jsxs)("div",{children:[Object(g.jsx)(Pe,{}),t&&Object(g.jsx)(Ee,{className:ve.a.table})]})})),Ne=n(274),Be=n(276);var we={createStation:le.createStation},Ae=Object(c.b)((function(e){return{currentUser:C.getCurrentUser(e)}}),we)((function(e){var t=e.currentUser,n=e.createStation,r=function(){var e=Object(ne.a)(te.a.mark((function e(r){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.userId=t._id,n(r);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(Ne.a,{labelCol:{span:7},wrapperCol:{span:14},layout:"horizontal",onFinish:r,onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(g.jsx)(Ne.a.Item,{label:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442",name:"productName",children:Object(g.jsx)(Be.a,{})}),Object(g.jsx)(Ne.a.Item,{label:"\u0421\u0442\u0430\u043d\u0446\u0438\u044f",name:"stationName",children:Object(g.jsx)(Be.a,{})}),Object(g.jsx)(Ne.a.Item,{label:"\u041a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b",name:"place",children:Object(g.jsx)(Be.a,{})}),Object(g.jsx)(Ne.a.Item,{label:"\u0420\u0435\u0433\u0438\u043e\u043d",name:"region",children:Object(g.jsx)(Be.a,{})}),Object(g.jsx)(Ne.a.Item,{label:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u043d\u0443\u0436\u043d\u043e",name:"needCount",children:Object(g.jsxs)(z.a,{children:[Object(g.jsx)(z.a.Option,{value:25,children:"25"}),Object(g.jsx)(z.a.Option,{value:50,children:"50"}),Object(g.jsx)(z.a.Option,{value:150,children:"150"}),Object(g.jsx)(z.a.Option,{value:350,children:"350"}),Object(g.jsx)(z.a.Option,{value:1e3,children:"1000"})]})}),Object(g.jsx)(Ne.a.Item,{label:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e",name:"done",valuePropName:"checked",children:Object(g.jsx)(pe.a,{})}),Object(g.jsx)(Ne.a.Item,{wrapperCol:{span:14,offset:7},children:Object(g.jsx)(_.a,{type:"primary",htmlType:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})]})})),Ue="CHANGE_ACTIVE_TAB",De={changeActiveTab:function(e){return function(t){return t({type:Ue,newActiveTabKey:e})}}},ke=L.a.TabPane;var Le={changeActiveTab:De.changeActiveTab},Ve=Object(c.b)((function(e){return{currentUser:C.getCurrentUser(e)}}),Le)((function(e){var t=e.currentUser,n=e.changeActiveTab;return Object(g.jsx)("div",{children:Object(g.jsxs)(L.a,{defaultActiveKey:"1",onChange:function(e){n(e)},className:G.a.tabs,children:[Object(g.jsx)(ke,{tab:"\u041f\u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430\u043c",children:Object(g.jsx)(me,{})},b),Object(g.jsx)(ke,{tab:"\u041f\u043e \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043c",children:Object(g.jsx)(Ce,{})},j),t.isAdmin&&Object(g.jsx)(ke,{tab:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0441\u0442\u0430\u043d\u0446\u0438\u044e",children:Object(g.jsx)(Ae,{})},"CREATE_STATION_TAB")]})})})),Ge=n(96),Fe=n(66),Me=n.n(Fe),ze="SET_CURRENT_USER",He="GET_PROFILE_BY_TOKEN",We="LOG_IN",Ye="LOG_IN_ERROR",qe="SIGN_UP",Ke="SIGN_UP_ERROR",Je="RESOLVE_ERROR",Qe={setCurrentUser:function(e){return function(){var t=Object(ne.a)(te.a.mark((function t(n){var r,c;return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q.get("/user/".concat(e));case 2:return r=t.sent,c=r.data,t.abrupt("return",n({type:ze,currentUser:c}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getProdileByToken:function(e){return function(){var t=Object(ne.a)(te.a.mark((function t(n){var r,c;return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,q.get("/user/profile",{headers:{Authorization:"Bearer ".concat(e)}});case 4:if(r=t.sent,console.log({response:r}),!(c=r.data).name){t.next=9;break}return t.abrupt("return",n({type:He,currentUser:c}));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},logIn:function(e,t){return function(){var n=Object(ne.a)(te.a.mark((function n(r){var c,a;return te.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q.post("/user/login",{username:e,password:t});case 2:if(c=n.sent,!(a=c.data).errorMessage){n.next=6;break}return n.abrupt("return",r({type:Ye,errorMessage:a.errorMessage}));case 6:return a.access_token&&localStorage.setItem("user-token",a.access_token),n.abrupt("return",r({type:We,currentUser:a}));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},signUp:function(e,t){return function(){var n=Object(ne.a)(te.a.mark((function n(r){var c,a;return te.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q.post("/user/sign-up",{username:e,password:t});case 2:if(c=n.sent,!(a=c.data).errorMessage){n.next=6;break}return n.abrupt("return",r({type:Ke,errorMessage:a.errorMessage}));case 6:return a.access_token&&localStorage.setItem("user-token",a.access_token),n.abrupt("return",r({type:qe,currentUser:a}));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},resolveError:function(){return function(e){return e({type:Je})}}},Xe=Qe,Ze={logIn:Xe.logIn,resolveError:Xe.resolveError},$e=Object(c.b)((function(e){return{errorType:C.getError(e)}}),Ze)((function(e){var t=e.errorType,n=e.logIn,c=e.resolveError,a=Object(r.useState)(""),o=Object(F.a)(a,2),s=o[0],i=o[1],u=Object(r.useState)(null),l=Object(F.a)(u,2),d=l[0],b=l[1],j=Object(r.useState)(""),p=Object(F.a)(j,2),O=p[0],f=p[1],h=Object(r.useState)(null),m=Object(F.a)(h,2),S=m[0],v=m[1];Object(r.useEffect)((function(){"USER_NOT_EXIST"===t&&(i("error"),b("\u0422\u0430\u043a\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442")),"WRONG_PASSWORD"===t&&(f("error"),v("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"))}),[t]);return Object(g.jsxs)(Ne.a,{layout:"vertical",wrapperCol:{span:16},name:"login",onFinish:function(e){var t=e.username,r=e.password;n(t,r)},onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off",className:Me.a["login-form"],onChange:function(){t&&(c(),i(""),b(null),f(""),v(null))},children:[Object(g.jsx)(Ne.a.Item,{label:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",name:"username",validateStatus:s,help:d,rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}],children:Object(g.jsx)(Be.a,{})}),Object(g.jsx)(Ne.a.Item,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",validateStatus:O,help:S,rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}],children:Object(g.jsx)(Be.a.Password,{})}),Object(g.jsxs)(Ne.a.Item,{children:[Object(g.jsx)(_.a,{type:"primary",htmlType:"submit",className:Me.a["submit-button"],children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"}),Object(g.jsx)(Ne.a.Item,{name:"remember",valuePropName:"checked",className:Me.a["remember-me"],children:Object(g.jsx)(Ge.a,{children:"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"})})]})]})})),et={signUp:Xe.signUp,resolveError:Xe.resolveError,getAllProducts:Z.getAllProducts,getAllRegions:Te.getAllRegions},tt=Object(c.b)((function(e){return{errorType:C.getError(e)}}),et)((function(e){var t=e.errorType,n=e.signUp,c=e.resolveError,a=e.getAllProducts,o=e.getAllRegions,s=Object(r.useState)(""),i=Object(F.a)(s,2),u=i[0],l=i[1],d=Object(r.useState)(null),b=Object(F.a)(d,2),j=b[0],p=b[1];Object(r.useEffect)((function(){t&&(l("error"),p("\u0422\u0430\u043a\u043e\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"))}),[t]);var O=function(){var e=Object(ne.a)(te.a.mark((function e(r){var c,s;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=r.username,s=r.password,n(c,s),console.log({errorType:t}),a(),o();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(Ne.a,{layout:"vertical",wrapperCol:{span:16},name:"sign-up",onFinish:O,onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off",className:Me.a["login-form"],onChange:function(){t&&(c(),l(""),p(null))},children:[Object(g.jsx)(Ne.a.Item,{label:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",name:"username",validateStatus:u,help:j,rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}],children:Object(g.jsx)(Be.a,{})}),Object(g.jsx)(Ne.a.Item,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}],children:Object(g.jsx)(Be.a.Password,{})}),Object(g.jsx)(Ne.a.Item,{label:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",name:"repassword",rules:[{required:!0,message:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"},function(e){var t=e.getFieldValue;return{validator:function(e,n){return n&&t("password")!==n?Promise.reject(new Error("\u041d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442!")):Promise.resolve()}}}],children:Object(g.jsx)(Be.a.Password,{})}),Object(g.jsxs)(Ne.a.Item,{children:[Object(g.jsx)(_.a,{type:"primary",htmlType:"submit",children:"\u0412\u0445\u043e\u0434"}),Object(g.jsx)(Ne.a.Item,{name:"remember",valuePropName:"checked",className:Me.a["remember-me"],children:Object(g.jsx)(Ge.a,{children:"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"})})]})]})})),nt=L.a.TabPane;var rt={getProdileByToken:Xe.getProdileByToken,getAllProducts:Z.getAllProducts,getAllRegions:Te.getAllRegions},ct=Object(c.b)(null,rt)((function(e){var t=e.getProdileByToken,n=e.getAllProducts,c=e.getAllRegions;return Object(r.useEffect)((function(){t(localStorage.getItem("user-token")),n(),c()}),[n,c,t]),Object(g.jsx)("div",{children:Object(g.jsxs)(L.a,{children:[Object(g.jsx)(nt,{tab:"\u0412\u0445\u043e\u0434",children:Object(g.jsx)($e,{})},"LOG_IN"),Object(g.jsx)(nt,{tab:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",children:Object(g.jsx)(tt,{})},"SIGN_UP")]})})}));var at=Object(c.b)((function(e){return{currentUser:C.getCurrentUser(e)}}))((function(e){var t=e.currentUser;return Object(g.jsxs)("div",{className:i.a.app,children:[Object(g.jsx)(y,{}),Object(g.jsxs)("div",{className:i.a.menu,children:[Object(g.jsx)(U,{}),t?Object(g.jsx)(k.a,{children:Object(g.jsxs)(D.d,{children:[Object(g.jsx)(D.b,{path:"/",element:Object(g.jsx)(Ve,{})}),Object(g.jsx)(D.b,{path:"*",element:Object(g.jsx)(D.a,{to:"/"})})]})}):Object(g.jsx)(k.a,{children:Object(g.jsxs)(D.d,{children:[Object(g.jsx)(D.b,{path:"/login",element:Object(g.jsx)(ct,{})}),Object(g.jsx)(D.b,{path:"*",element:Object(g.jsx)(D.a,{to:"/login"})})]})})]})]})})),ot=n(94),st=n(159),it=n(160),ut={currentUser:null,errorType:null},lt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ze:case He:case We:case qe:return Object($.a)(Object($.a)({},e),{},{currentUser:{name:t.currentUser.name,_id:t.currentUser._id,isAdmin:t.currentUser.isAdmin}});case Ye:case Ke:return Object($.a)(Object($.a)({},e),{},{errorType:t.errorMessage});case Je:return Object($.a)(Object($.a)({},e),{},{errorType:null});default:return e}},dt=n(46),bt={productTableVisibility:!1,selectedProductIds:[],freeColors:Object(dt.a)(p),allProducts:[]},jt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object($.a)(Object($.a)({},e),{},{allProducts:t.products});case K:return Object($.a)(Object($.a)({},e),{},{productTableVisibility:!0});case Q:var n=e.freeColors.pop();return Object($.a)(Object($.a)({},e),{},{selectedProductIds:[].concat(Object(dt.a)(e.selectedProductIds),[{productId:t.productId,color:n}])});case X:var r=e.selectedProductIds,c=e.freeColors,a=e.selectedProductIds.findIndex((function(e){return e.productId===t.productId})),o=r.splice(a,1);return c.push(o[0].color),Object($.a)(Object($.a)({},e),{},{selectedProductIds:r,freeColors:c});default:return e}},pt={regionTableVisibility:!1,selectedRegionIds:[],freeColors:Object(dt.a)(p),allRegions:[]},Ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ye:return Object($.a)(Object($.a)({},e),{},{allRegions:t.regions});case xe:return Object($.a)(Object($.a)({},e),{},{regionTableVisibility:!0});case Ie:var n=e.freeColors.pop();return Object($.a)(Object($.a)({},e),{},{selectedRegionIds:[].concat(Object(dt.a)(e.selectedRegionIds),[{regionId:t.regionId,color:n}])});case _e:var r=e.selectedRegionIds,c=e.freeColors,a=e.selectedRegionIds.findIndex((function(e){return e.regionId===t.regionId})),o=r.splice(a,1);return c.push(o[0].color),Object($.a)(Object($.a)({},e),{},{selectedRegionIds:r,freeColors:c});default:return e}},ft={selectedByProductStations:[],selectedByRegionStations:[]},gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce:return Object($.a)(Object($.a)({},e),{},{selectedByProductStations:[].concat(Object(dt.a)(e.selectedByProductStations),Object(dt.a)(t.stationsData))});case ae:return Object($.a)(Object($.a)({},e),{},{selectedByRegionStations:[].concat(Object(dt.a)(e.selectedByRegionStations),Object(dt.a)(t.stationsData))});case oe:var n=e.selectedByProductStations.filter((function(e){return e.productName!==t.product.name}));return Object($.a)(Object($.a)({},e),{},{selectedByProductStations:n});case se:var r=e.selectedByRegionStations.filter((function(e){return e.regionName!==t.region.name}));return Object($.a)(Object($.a)({},e),{},{selectedByRegionStations:r});case ie:return ht(e,t);default:return e}};function ht(e,t){var n,r=[],c=Object(O.a)(e.selectedByProductStations);try{for(c.s();!(n=c.n()).done;){var a=n.value;a.stationId===t.stationData.stationId?r.push(Object($.a)(Object($.a)({},a),{},{done:t.stationData.done})):r.push(a)}}catch(l){c.e(l)}finally{c.f()}var o,s=[],i=Object(O.a)(e.selectedByRegionStations);try{for(i.s();!(o=i.n()).done;){var u=o.value;u.stationId===t.stationData.stationId?s.push(Object($.a)(Object($.a)({},u),{},{done:t.stationData.done})):s.push(u)}}catch(l){i.e(l)}finally{i.f()}return Object($.a)(Object($.a)({},e),{},{selectedByProductStations:r,selectedByRegionStations:s})}var mt={activeTab:b},St=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,t=arguments.length>1?arguments[1]:void 0;return t.type===Ue?Object($.a)(Object($.a)({},e),{},{activeTab:t.newActiveTabKey}):e},vt=Object(ot.combineReducers)({user:lt,product:jt,region:Ot,station:gt,tab:St}),xt=Object(ot.createStore)((function(e,t){return t.type===N?vt(void 0,t):vt(e,t)}),Object(st.composeWithDevTools)(Object(ot.applyMiddleware)(it.a)));o.a.render(Object(g.jsxs)(c.a,{store:xt,children:[Object(g.jsx)(at,{}),Object(g.jsx)("style",{children:"#root {width: 100%} "})]}),document.getElementById("root"))},62:function(e,t,n){e.exports={header:"Header_header__mWrfg",logo:"Header_logo__3COiS",user:"Header_user__1SWzi","user-button":"Header_user-button__25kzA",avatar:"Header_avatar__2EqOL"}},66:function(e,t,n){e.exports={"login-form":"Authorization_login-form__1oUMC","remember-me":"Authorization_remember-me__DqKaF"}}},[[269,1,2]]]);
//# sourceMappingURL=main.d3e77402.chunk.js.map