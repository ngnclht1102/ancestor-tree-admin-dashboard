(this["webpackJsonpancestor-tree-admin"]=this["webpackJsonpancestor-tree-admin"]||[]).push([[0],{447:function(e,t,n){},699:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),l=n.n(c),o=(n(447),n(779)),i=n(778),s=n(15),u=n(350),m=n.n(u),d=n(205),h=n(399),f=n.n(h),p=n(398),b=n.n(p),g=n(10),E=n.n(g),v=n(25),O=n(101),y=n.n(O),j="http://honguyensi.com:4001",x="http://honguyensi.com:4001/admin/v1",w=1,k=function(){return localStorage.getItem("X-ACCESS-TOKEN")},N=function(){return localStorage.removeItem("X-ACCESS-TOKEN")},_=function(){return localStorage.removeItem("X-ADMIN-NAME")},S="",T=function(e){return e?"".concat(j).concat(e):j},C=function(){return S||(S=k())},P=function(e){for(var t=Object.keys(e),n=[],a=0;a<t.length;a++){var r=t[a];e[r]&&n.push(encodeURIComponent(r)+"="+encodeURIComponent(e[r]))}return n.length?n.join("&"):""},J=function(){var e=Object(v.a)(E.a.mark((function e(t,n,a){var r,c,l,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:return e.t0=e.sent,e.t1={Accept:"application/json","Content-Type":"application/json","x-access-token":e.t0},r={method:"GET",headers:e.t1},c=n?P(n):null,l="".concat(T(t),"?").concat(c||"").concat(a||""),console.log("request curl: ",y()(l,r)),e.next=10,fetch(l,r);case 10:return o=e.sent,e.next=13,A(o,l,r);case 13:return e.abrupt("return",e.sent);case 14:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),I=function(){var e=Object(v.a)(E.a.mark((function e(t,n,a){var r,c,l;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:a?JSON.stringify(n):n},c=T(t),console.log("request curl: ",y()(c,r)),e.next=5,fetch(c,r);case 5:return l=e.sent,e.next=8,A(l,c,r);case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),A=function(){var e=Object(v.a)(E.a.mark((function e(t,n,a){var r,c,l,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="1"==w,e.next=3,t.json();case 3:if(c=e.sent,!(t.status>=400)){e.next=9;break}throw l=new Error,"string"!==typeof c.error_message?(console.log("API Response: ",c),c.error_message instanceof Array?(o=r?"":". Status: "+t.status,l.message=c.error_message.join(", ")+o):l.message=r?"Unexpected Error \nOps, we encountered an unexpected error. Please try again or contact us! ":" server error with detail "+JSON.stringify(t)):l.message=c.error_message,l.status=t.status,l;case 9:return e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),F=function(){var e=Object(v.a)(E.a.mark((function e(t){var n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,a=t.password,e.next=3,I("/admin/public/login",{email:n,password:a},!0);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M={login:function(){var e=Object(v.a)(E.a.mark((function e(t){var n,a,r,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,a=t.password,e.prev=1,e.next=4,F({email:n,password:a});case 4:return r=e.sent,c=r.data,l=c.access_token,localStorage.setItem("X-ACCESS-TOKEN",l),c.name,localStorage.getItem("X-ADMIN-NAME"),e.abrupt("return",Promise.resolve());case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",Promise.reject(e.t0));case 14:case"end":return e.stop()}var l}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),logout:function(){return N(),_(),Promise.resolve()},checkError:function(e){var t=e.status;return 401===t||403===t?(N(),_(),Promise.reject()):Promise.resolve()},checkAuth:function(){return k()?Promise.resolve():Promise.reject()},getPermissions:function(){return Promise.resolve()}},V=n(182),D=n(112),R=n(115),B=n(59),L=x,X=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.headers=new Headers({Accept:"application/json","Content-Type":"application/json","x-access-token":C()}),R.a.fetchJson(e,t)},U={getList:function(e,t){var n=t.pagination,a=n.page,r=n.perPage,c=t.sort,l={sort_field:c.field,sort_direction:c.order,page:a,page_size:r,filter:JSON.stringify(t.filter)},o="".concat(L,"/").concat(e,"?").concat(Object(B.stringify)(l));return X(o).then((function(e){var t=e.headers,n=e.json;return{data:n?n.data:[],total:parseInt(t.get("content-range").split("/").pop(),10)}}))},getOne:function(e,t){return X("".concat(L,"/").concat(e,"/").concat(t.id)).then((function(e){return{data:e.json.data}}))},getMany:function(e,t){var n={filter:JSON.stringify({id:t.ids})},a="".concat(L,"/").concat(e,"?").concat(Object(B.stringify)(n));return X(a).then((function(e){return{data:e.json}}))},getManyReference:function(e,t){var n=t.pagination,a=n.page,r=n.perPage,c=t.sort,l=c.field,o=c.order,i={sort:JSON.stringify([l,o]),range:JSON.stringify([(a-1)*r,a*r-1]),filter:JSON.stringify(Object(D.a)(Object(D.a)({},t.filter),{},Object(V.a)({},t.target,t.id)))},s="".concat(L,"/").concat(e,"?").concat(Object(B.stringify)(i));return X(s).then((function(e){var t=e.headers;return{data:e.json,total:parseInt(t.get("content-range").split("/").pop(),10)}}))},update:function(e,t){return X("".concat(L,"/").concat(e,"/").concat(t.id),{method:"PUT",body:JSON.stringify(t.data)}).then((function(e){return{data:e.json}}))},updateMany:function(e,t){var n={filter:JSON.stringify({id:t.ids})};return X("".concat(L,"/").concat(e,"?").concat(Object(B.stringify)(n)),{method:"PUT",body:JSON.stringify(t.data)}).then((function(e){return{data:e.json}}))},create:function(e,t){return X("".concat(L,"/").concat(e),{method:"POST",body:JSON.stringify(t.data)}).then((function(e){var n=e.json;return{data:Object(D.a)(Object(D.a)({},t.data),{},{id:n.id})}}))},delete:function(e,t){return X("".concat(L,"/").concat(e,"/").concat(t.id),{method:"DELETE"}).then((function(e){return{data:e.json}}))},deleteMany:function(e,t){var n={filter:JSON.stringify({id:t.ids})};return X("".concat(L,"/").concat(e,"?").concat(Object(B.stringify)(n)),{method:"DELETE",body:JSON.stringify(t.data)}).then((function(e){return{data:e.json}}))}},G=n(71),q=n(131),z=n(781),K=n(780),W=n(792),H=n(783),$=n(702),Q=n(757),Y=n(793),Z=function(e){var t=Object(Q.a)(),n=t.basePath;t.resource;return r.a.createElement(H.a,{textAlign:"center",m:1},r.a.createElement($.a,{variant:"h4",paragraph:!0},e.title),r.a.createElement($.a,{variant:"body1"},e.subtitle),r.a.createElement(Y.a,{label:e.buttonLabel,basePath:n}))},ee=n(7),te=function(e,t){var n=function(e){return e&&e.admin&&e.admin.resources?e.admin.resources:void 0}(e),a=n&&n[t]?Object(D.a)({},n[t].data):void 0;return a&&(delete a.undefined,delete a.fetchedAt),Object.values(a)},ne=n(125),ae=n(790),re=n(773),ce=function(e){var t=e.className,n=(e.exporter,e.filters),c=(e.maxResults,Object(q.a)(e,["className","exporter","filters","maxResults"])),l=Object(Q.a)(),o=(l.data,l.resource),i=l.displayedFilters,s=l.filterValues,u=l.basePath,m=l.showFilter,d=l.total;return r.a.createElement(ne.a,Object.assign({className:t},Object(ae.c)(c)),n&&Object(a.cloneElement)(n,{resource:o,showFilter:m,displayedFilters:i,filterValues:s,context:"button"}),d<1?r.a.createElement(Y.a,{label:"Th\xeam d\xf2ng h\u1ecd",basePath:u}):null)},le=function(e){var t=Object(ee.f)((function(e){return te(e,"families")}))||[],n=Object(a.useState)(!1),c=Object(G.a)(n,2),l=c[0],o=c[1];return Object(a.useEffect)((function(){return t.length&&o(!0),function(){}}),[t.length]),l?r.a.createElement(s.a,{stopRender:!l,to:"/families/".concat(t[0].id)}):r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(z.a,Object.assign({bulkActionButtons:!1},e,{empty:r.a.createElement(Z,{title:"B\u1ea1n ch\u01b0a t\u1ea1o d\xf2ng h\u1ecd",subtitle:"B\u1eaft \u0111\u1ea7u ngay b\u1eb1ng c\xe1ch b\u1ea5m n\xfat 'Th\xeam' d\u01b0\u1edbi \u0111\xe2y",buttonLabel:"Th\xeam"}),title:"Danh s\xe1ch d\xf2ng h\u1ecd",actions:r.a.createElement(ce,null)}),r.a.createElement(K.a,{rowClick:"edit"},r.a.createElement(W.a,{source:"id"}),r.a.createElement(W.a,{source:"name",label:"T\xean d\xf2ng h\u1ecd"}),r.a.createElement(W.a,{source:"main_address",label:"\u0110\u1ecba ch\u1ec9"}),r.a.createElement(re.a,null))))},oe=n(786),ie=n(782),se=n(375),ue=n(376),me=n(91),de=function(e){return a.createElement(oe.a,Object.assign({},e,{title:"T\u1ea1o d\xf2ng h\u1ecd"}),a.createElement(ie.a,null,a.createElement(se.a,{source:"name",validate:Object(ue.b)(),label:"Nh\u1eadp t\xean d\xf2ng h\u1ecd v\xe0o \u0111\xe2y..."}),a.createElement(se.a,{source:"main_address",validate:Object(ue.b)(),label:"Nh\u1eadp \u0111\u1ecba ch\u1ec9 d\xf2ng h\u1ecd v\xe0o \u0111\xe2y..."}),a.createElement(me.a,{source:"description",label:"Nh\u1eadp th\xeam th\xf4ng tin ghi ch\xfa \u1edf ph\xeda d\u01b0\u1edbi:"})))},he=n(784),fe=function(e){return a.createElement(he.a,Object.assign({title:"Xem v\xe0 s\u1eeda th\xf4ng tin d\xf2ng h\u1ecd"},e),a.createElement(ie.a,null,a.createElement(se.a,{source:"name",validate:Object(ue.b)(),label:"Nh\u1eadp t\xean d\xf2ng h\u1ecd v\xe0o \u0111\xe2y..."}),a.createElement(se.a,{source:"main_address",validate:Object(ue.b)(),label:"Nh\u1eadp \u0111\u1ecba ch\u1ec9 d\xf2ng h\u1ecd v\xe0o \u0111\xe2y..."}),a.createElement(me.a,{source:"description",label:"Nh\u1eadp th\xeam th\xf4ng tin ghi ch\xfa \u1edf ph\xeda d\u01b0\u1edbi:"})))},pe=n(787),be=function(){var e=Object(v.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J("/admin/v1/families");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ge=function(e){var t=e.className,n=(e.exporter,e.filters),c=(e.maxResults,Object(q.a)(e,["className","exporter","filters","maxResults"])),l=Object(Q.a)(),o=(l.currentSort,l.resource),i=l.displayedFilters,s=l.filterValues,u=(l.hasCreate,l.basePath),m=(l.selectedIds,l.showFilter);l.total;return r.a.createElement(ne.a,Object.assign({className:t},Object(ae.c)(c)),n&&Object(a.cloneElement)(n,{resource:o,showFilter:m,displayedFilters:i,filterValues:s,context:"button"}),r.a.createElement(Y.a,{label:"Th\xeam ng\u01b0\u1eddi",basePath:u}))},Ee=function(e){var t=Object(a.useState)(!1),n=Object(G.a)(t,2),c=n[0],l=n[1],o=Object(a.useState)(!1),i=Object(G.a)(o,2),u=i[0],m=i[1],d=Object(ee.f)((function(e){return te(e,"families")}))||[],h=Object(ee.f)((function(e){return te(e,"persons")}))||[];return Object(a.useEffect)((function(){var e=function(){var e=Object(v.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("check_if_has_family_already"),e.prev=1,e.next=4,be();case 4:(t=e.sent)&&t.data&&t.data.length>0?l(!0):m(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return e(),d.length?l(!0):e(),function(){}}),[d.length]),c?r.a.createElement(r.a.Fragment,null,h.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"\u0110\xe2y l\xe0 danh s\xe1ch t\u1ea5t c\u1ea3 m\u1ecdi ng\u01b0\u1eddi trong d\xf2ng h\u1ecd"),r.a.createElement("p",null,"B\u1ea1n c\xf3 th\u1ec3 th\xeam, s\u1eeda, v\xe0 x\xf3a th\xf4ng tin c\u1ee7a b\u1ea5t k\u1ef3 ai.")):null,r.a.createElement(z.a,Object.assign({bulkActionButtons:!1},e,{empty:r.a.createElement(Z,{title:"B\u1ea1n ch\u01b0a th\xeam ng\u01b0\u1eddi v\xe0o d\xf2ng h\u1ecd",subtitle:"B\u1eaft \u0111\u1ea7u ngay b\u1eb1ng c\xe1ch b\u1ea5m n\xfat 'Th\xeam' d\u01b0\u1edbi \u0111\xe2y",buttonLabel:"Th\xeam"}),title:"T\u1ea5t c\u1ea3 m\u1ecdi ng\u01b0\u1eddi trong d\xf2ng h\u1ecd",actions:r.a.createElement(ge,null)}),r.a.createElement(K.a,{rowClick:"edit"},r.a.createElement(W.a,{source:"id"}),r.a.createElement(W.a,{source:"full_name",label:"T\xean"}),r.a.createElement(W.a,{source:"nickname",label:"T\xean kh\xe1c"}),r.a.createElement(W.a,{source:"dob_year",label:"Sinh n\u0103m"}),r.a.createElement(W.a,{source:"family_level",label:"\u0110\u1eddi th\u1ee9"}),r.a.createElement(re.a,{label:"S\u1eeda"}),r.a.createElement(pe.a,{label:"X\xf3a"})))):u?r.a.createElement(s.a,{to:"/families"}):null},ve=n(789),Oe=n(775),ye=n(776),je=n(785),xe=n(715),we=n(716),ke=n(408),Ne=function(e){var t=Object(ke.a)(e),n=t.input,a=t.meta;a.touched,a.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,e.label,":  "),r.a.createElement(xe.a,Object.assign({label:"Gi\u1edbi t\xednh"},n),r.a.createElement(we.a,{value:"male"},"Nam gi\u1edbi"),r.a.createElement(we.a,{value:"female"},"N\u1eef gi\u1edbi")))},_e=function(e){return a.createElement(ie.a,e,a.createElement(se.a,{source:"full_name",validate:Object(ue.b)(),label:"T\xean \u0111\u1ea7y \u0111\u1ee7..."}),a.createElement("br",null),a.createElement(se.a,{source:"nickname",label:"T\xean kh\xe1c n\u1ebfu c\xf3 (v\xed d\u1ee5 C\u1ed1 N\u1ec1n) ..."}),a.createElement("br",null),a.createElement(Ne,{initialValue:"male",label:"Gi\u1edbi t\xednh",source:"gender"}),a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement("p",null,a.createElement("span",null,"Ng\xe0y sinh: "),a.createElement("span",null,"(kh\xf4ng b\u1eaft bu\u1ed9c)")),a.createElement(ve.a,{source:"dob_in_lunar",label:"D\u01b0\u01a1ng hay \xe2m",initialValue:!0,choices:[{id:!0,name:"\xc2m l\u1ecbch"},{id:!1,name:"D\u01b0\u01a1ng l\u1ecbch"}]}),a.createElement(Oe.a,{source:"dob_date",max:31,min:1,label:"Ng\xe0y"}),a.createElement(Oe.a,{source:"dob_month",max:12,min:1,label:"Th\xe1ng"}),a.createElement(Oe.a,{source:"dob_year",label:"N\u0103m"})),a.createElement(ve.a,{source:"is_alive",label:"C\xf2n s\u1ed1ng hay \u0111\xe3 m\u1ea5t",initialValue:!0,choices:[{id:!0,name:"C\xf2n s\u1ed1ng"},{id:!1,name:"\u0110\xe3 m\u1ea5t"}]}),a.createElement(ye.a,null,(function(e){return e.formData.is_alive?null:a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement("p",null,a.createElement("span",null,"Ng\xe0y gi\u1ed7: "),a.createElement("span",null,"(kh\xf4ng b\u1eaft bu\u1ed9c)")),a.createElement(ve.a,{source:"dod_in_lunar",label:"D\u01b0\u01a1ng hay \xe2m",initialValue:!0,choices:[{id:!0,name:"\xc2m l\u1ecbch"},{id:!1,name:"D\u01b0\u01a1ng l\u1ecbch"}]}),a.createElement(Oe.a,{source:"dod_date",max:31,min:1,label:"Ng\xe0y"}),a.createElement(Oe.a,{source:"dod_month",max:12,min:1,label:"Th\xe1ng"}),a.createElement(Oe.a,{source:"dod_year",label:"N\u0103m"}),a.createElement("br",null))})),a.createElement("br",null),a.createElement("span",null,"M\u1ed1i quan h\u1ec7 gia \u0111\xecnh:"),a.createElement("span",null,"(kh\xf4ng b\u1eaft bu\u1ed9c)"),a.createElement(a.Fragment,null,a.createElement(je.a,{label:"Cha l\xe0 \xf4ng",source:"father_id",reference:"persons",allowEmpty:!0},a.createElement(ve.a,{optionText:"full_name"})),a.createElement(je.a,{label:"M\u1eb9 l\xe0 b\xe0",source:"mother_id",reference:"persons",allowEmpty:!0},a.createElement(ve.a,{optionText:"full_name"}))),a.createElement("br",null),a.createElement("span",null,"V\u1ee3 ch\u1ed3ng: (kh\xf4ng b\u1eaft bu\u1ed9c)"),a.createElement(je.a,{label:"V\u1ee3/Ch\u1ed3ng l\xe0:",source:"spouse_id",reference:"persons",allowEmpty:!0},a.createElement(ve.a,{optionText:"full_name"})),a.createElement("br",null),a.createElement("span",null,"Con th\u1ee9 m\u1ea5y trong nh\xe0: (kh\xf4ng b\u1eaft bu\u1ed9c)"),a.createElement(Oe.a,{min:1,source:"sibling_level",label:"Con \u0111\u1ea7u ghi 1, con th\u1ee9 2 ghi 2"}),a.createElement("br",null),a.createElement("span",null,"Nh\u1eadp th\xeam th\xf4ng tin: (kh\xf4ng b\u1eaft bu\u1ed9c)"),a.createElement(me.a,{source:"note",label:"(v\xed d\u1ee5: T\u1ed5 r\u1ea5t gi\u1ecfi v\xe0 gi\xe0u c\xf3) "}))},Se=function(e){return a.createElement(oe.a,Object.assign({},e,{title:"Th\xeam ng\u01b0\u1eddi v\xe0o d\xf2ng h\u1ecd"}),a.createElement(_e,null))},Te=function(e){return a.createElement(he.a,Object.assign({},e,{title:"S\u1eeda th\xf4ng tin c\u1ee7a ng\u01b0\u1eddi"}),a.createElement(_e,e))},Ce=(n(777),n(384)),Pe=n.n(Ce),Je=function(){var e=Object(v.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J("/admin/v1/persons/tree");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ie=function(){var e=Object(v.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J("/admin/v1/persons/tree/from/"+t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(v.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t){e.next=7;break}return e.next=4,Je();case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,Ie(t);case 9:e.t0=e.sent;case 10:return n=e.t0,console.log(n.data),e.abrupt("return",n.data);case 15:return e.prev=15,e.t1=e.catch(0),console.log(e.t1),e.abrupt("return",null);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),Fe=function e(t){var n={id:t.id,name:t.full_name,attributes:t.spouse&&{"V\u1ee3":t.spouse.full_name},children:[]};return t.children&&Object.keys(t.children).forEach((function(a){n.children.push(e(t.children[a]))})),n},Me={},Ve=function(e,t,n){if(1===e)Me.children["child_".concat(t)].children=n;else{var a=JSON.stringify(n),r=JSON.stringify(Me),c='"child_'.concat(t,'":{'),l=c+'"children":'+a+",",o=JSON.parse(r.replace(c,l));Me=o}};function De(){var e=Object(a.useState)(),t=Object(G.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(),o=Object(G.a)(l,2),i=o[0],s=o[1];return Object(a.useEffect)((function(){return function(){var e=Object(v.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetchTree..."),e.next=3,Ae(i?i.id:null);case 3:t=e.sent,i?(Ve(i.__rd3t.depth,i.id,t.children),c(Fe(Me))):c(Fe(Me=t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){}}),[i]),r.a.createElement("div",{id:"treeWrapper",style:{width:"100%",height:"100%"}},n?r.a.createElement(Pe.a,{orientation:"horizontal",nodeSize:{x:250,y:100},translate:{x:100,y:200},pathFunc:"diagonal",enableLegacyTransitions:!0,onNodeClick:function(e){Object.keys(e.children).length||s(e)},data:n}):null)}var Re=n(704),Be=n(130),Le=n(204),Xe=n(385),Ue=n.n(Xe),Ge=Object(s.i)((function(e){var t=e.onMenuClick,n=e.logout,r=Object(Re.a)((function(e){return e.breakpoints.down("xs")})),c=Object(ee.f)((function(e){return e.admin.ui.sidebarOpen})),l=Object(ee.f)(Be.b);return a.createElement("div",null,l.map((function(e){return a.createElement(Le.a,{key:e.name,to:"/".concat(e.name),primaryText:e.options&&e.options.label||e.name,leftIcon:Object(a.createElement)(e.icon),onClick:t,sidebarIsOpen:c})})),a.createElement(Le.a,{to:"/tree",primaryText:"C\xe2y gia ph\u1ea3",leftIcon:a.createElement(Ue.a,null),onClick:t,sidebarIsOpen:c}),r&&n)})),qe={vi:m.a},ze=(Object(d.a)((function(e){return qe[e]})),function(){return r.a.createElement(o.a,{menu:Ge,authProvider:M,dataProvider:U,customRoutes:[r.a.createElement(s.b,{path:"/tree",component:De})]},r.a.createElement(i.a,{name:"families",options:{label:"Th\xf4ng tin d\xf2ng h\u1ecd"},icon:b.a,list:le,edit:fe,create:de}),r.a.createElement(i.a,{name:"persons",options:{label:"Gia ph\u1ea3"},icon:f.a,list:Ee,edit:Te,create:Se}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[699,1,2]]]);
//# sourceMappingURL=main.91c29611.chunk.js.map