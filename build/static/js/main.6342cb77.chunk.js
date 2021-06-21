(this["webpackJsonpancestor-tree-admin"]=this["webpackJsonpancestor-tree-admin"]||[]).push([[0],{447:function(e,t,n){},686:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),l=n.n(c),i=(n(447),n(770)),o=n(769),s=n(15),u=n(348),m=n.n(u),h=n(211),d=n(402),b=n.n(d),f=n(401),p=n.n(f),g=n(11),E=n.n(g),v=n(24),O=n(101),y=n.n(O),j="http://localhost:4021",_="http://localhost:4021/admin/v1",x=1,k=function(){return localStorage.getItem("X-ACCESS-TOKEN")},w=function(){return localStorage.removeItem("X-ACCESS-TOKEN")},N=function(){return localStorage.removeItem("X-ADMIN-NAME")},T="",S=function(e){return e?"".concat(j).concat(e):j},C=function(){return T||(T=k())},P=function(e){for(var t=Object.keys(e),n=[],a=0;a<t.length;a++){var r=t[a];e[r]&&n.push(encodeURIComponent(r)+"="+encodeURIComponent(e[r]))}return n.length?n.join("&"):""},I=function(){var e=Object(v.a)(E.a.mark((function e(t,n,a){var r,c,l,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:return e.t0=e.sent,e.t1={Accept:"application/json","Content-Type":"application/json","x-access-token":e.t0},r={method:"GET",headers:e.t1},c=n?P(n):null,l="".concat(S(t),"?").concat(c||"").concat(a||""),console.log("request curl: ",y()(l,r)),e.next=10,fetch(l,r);case 10:return i=e.sent,e.next=13,A(i,l,r);case 13:return e.abrupt("return",e.sent);case 14:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),J=function(){var e=Object(v.a)(E.a.mark((function e(t,n,a){var r,c,l;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:a?JSON.stringify(n):n},c=S(t),console.log("request curl: ",y()(c,r)),e.next=5,fetch(c,r);case 5:return l=e.sent,e.next=8,A(l,c,r);case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),A=function(){var e=Object(v.a)(E.a.mark((function e(t,n,a){var r,c,l,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="1"==x,e.next=3,t.json();case 3:if(c=e.sent,!(t.status>=400)){e.next=9;break}throw l=new Error,"string"!==typeof c.error_message?(console.log("API Response: ",c),c.error_message instanceof Array?(i=r?"":". Status: "+t.status,l.message=c.error_message.join(", ")+i):l.message=r?"Unexpected Error \nOps, we encountered an unexpected error. Please try again or contact us! ":" server error with detail "+JSON.stringify(t)):l.message=c.error_message,l.status=t.status,l;case 9:return e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),F=function(){var e=Object(v.a)(E.a.mark((function e(t){var n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,a=t.password,e.next=3,J("/admin/public/login",{email:n,password:a},!0);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V={login:function(){var e=Object(v.a)(E.a.mark((function e(t){var n,a,r,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,a=t.password,e.prev=1,e.next=4,F({email:n,password:a});case 4:return r=e.sent,c=r.data,l=c.access_token,localStorage.setItem("X-ACCESS-TOKEN",l),c.name,localStorage.getItem("X-ADMIN-NAME"),e.abrupt("return",Promise.resolve());case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",Promise.reject(e.t0));case 14:case"end":return e.stop()}var l}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),logout:function(){return w(),N(),Promise.resolve()},checkError:function(e){var t=e.status;return 401===t||403===t?(w(),N(),Promise.reject()):Promise.resolve()},checkAuth:function(){return k()?Promise.resolve():Promise.reject()},getPermissions:function(){return Promise.resolve()}},D=n(185),M=n(100),R=n(115),B=n(57),L=_,X=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.headers=new Headers({Accept:"application/json","Content-Type":"application/json","x-access-token":C()}),R.a.fetchJson(e,t)},q={getList:function(e,t){var n=t.pagination,a=n.page,r=n.perPage,c=t.sort,l={sort_field:c.field,sort_direction:c.order,page:a,page_size:r,filter:JSON.stringify(t.filter||{})},i="".concat(L,"/").concat(e,"?").concat(Object(B.stringify)(l));return X(i).then((function(e){var t=e.headers,n=e.json;return{data:n?n.data:[],total:parseInt(t.get("content-range").split("/").pop(),10)}}))},getOne:function(e,t){return X("".concat(L,"/").concat(e,"/").concat(t.id)).then((function(e){return{data:e.json.data}}))},getMany:function(e,t){var n={filter:JSON.stringify({id:t.ids})},a="".concat(L,"/").concat(e,"?").concat(Object(B.stringify)(n));return X(a).then((function(e){return{data:e.json}}))},getManyReference:function(e,t){var n=t.pagination,a=n.page,r=n.perPage,c=t.sort,l=c.field,i=c.order,o={sort:JSON.stringify([l,i]),range:JSON.stringify([(a-1)*r,a*r-1]),filter:JSON.stringify(Object(M.a)(Object(M.a)({},t.filter),{},Object(D.a)({},t.target,t.id)))},s="".concat(L,"/").concat(e,"?").concat(Object(B.stringify)(o));return X(s).then((function(e){var t=e.headers;return{data:e.json,total:parseInt(t.get("content-range").split("/").pop(),10)}}))},update:function(e,t){return X("".concat(L,"/").concat(e,"/").concat(t.id),{method:"PUT",body:JSON.stringify(t.data)}).then((function(e){return{data:e.json}}))},updateMany:function(e,t){var n={filter:JSON.stringify({id:t.ids})};return X("".concat(L,"/").concat(e,"?").concat(Object(B.stringify)(n)),{method:"PUT",body:JSON.stringify(t.data)}).then((function(e){return{data:e.json}}))},create:function(e,t){return X("".concat(L,"/").concat(e),{method:"POST",body:JSON.stringify(t.data)}).then((function(e){var n=e.json;return{data:Object(M.a)(Object(M.a)({},t.data),{},{id:n.id})}}))},delete:function(e,t){return X("".concat(L,"/").concat(e,"/").concat(t.id),{method:"DELETE"}).then((function(e){return{data:e.json}}))},deleteMany:function(e,t){var n={filter:JSON.stringify({id:t.ids})};return X("".concat(L,"/").concat(e,"?").concat(Object(B.stringify)(n)),{method:"DELETE",body:JSON.stringify(t.data)}).then((function(e){return{data:e.json}}))}},U=n(69),G=n(133),K=n(772),z=n(771),Q=n(784),W=n(773),H=n(689),$=n(750),Y=n(786),Z=function(e){var t=Object($.a)(),n=t.basePath;t.resource;return r.a.createElement(W.a,{textAlign:"center",m:1},r.a.createElement(H.a,{variant:"h4",paragraph:!0},e.title),r.a.createElement(H.a,{variant:"body1"},e.subtitle),r.a.createElement(Y.a,{label:e.buttonLabel,basePath:n}))},ee=n(7),te=function(e){return e&&e.admin&&e.admin.resources?e.admin.resources:void 0},ne=function(e,t){var n=te(e),a=n&&n[t]?Object(M.a)({},n[t].data):void 0;return a&&(delete a.undefined,delete a.fetchedAt),Object.values(a)},ae=n(127),re=n(782),ce=n(764),le=function(e){var t=e.className,n=(e.exporter,e.filters),c=(e.maxResults,Object(G.a)(e,["className","exporter","filters","maxResults"])),l=Object($.a)(),i=(l.data,l.resource),o=l.displayedFilters,s=l.filterValues,u=l.basePath,m=l.showFilter,h=l.total;return r.a.createElement(ae.a,Object.assign({className:t},Object(re.c)(c)),n&&Object(a.cloneElement)(n,{resource:i,showFilter:m,displayedFilters:o,filterValues:s,context:"button"}),h<1?r.a.createElement(Y.a,{label:"Th\xeam d\xf2ng h\u1ecd",basePath:u}):null)},ie=function(e){var t=Object(ee.f)((function(e){return ne(e,"families")}))||[],n=Object(a.useState)(!1),c=Object(U.a)(n,2),l=c[0],i=c[1];return Object(a.useEffect)((function(){return t.length&&i(!0),function(){}}),[t.length]),l?r.a.createElement(s.a,{stopRender:!l,to:"/families/".concat(t[0].id)}):r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(K.a,Object.assign({bulkActionButtons:!1},e,{empty:r.a.createElement(Z,{title:"B\u1ea1n ch\u01b0a t\u1ea1o d\xf2ng h\u1ecd",subtitle:"B\u1eaft \u0111\u1ea7u ngay b\u1eb1ng c\xe1ch b\u1ea5m n\xfat 'Th\xeam' d\u01b0\u1edbi \u0111\xe2y",buttonLabel:"Th\xeam"}),title:"Danh s\xe1ch d\xf2ng h\u1ecd",actions:r.a.createElement(le,null)}),r.a.createElement(z.a,{rowClick:"edit"},r.a.createElement(Q.a,{source:"id"}),r.a.createElement(Q.a,{source:"name",label:"T\xean d\xf2ng h\u1ecd"}),r.a.createElement(Q.a,{source:"main_address",label:"\u0110\u1ecba ch\u1ec9"}),r.a.createElement(ce.a,null))))},oe=n(778),se=n(774),ue=n(372),me=n(373),he=n(87),de=function(e){return a.createElement(oe.a,Object.assign({},e,{title:"T\u1ea1o d\xf2ng h\u1ecd"}),a.createElement(se.a,null,a.createElement(ue.a,{source:"name",validate:Object(me.b)(),label:"Nh\u1eadp t\xean d\xf2ng h\u1ecd v\xe0o \u0111\xe2y..."}),a.createElement(ue.a,{source:"main_address",validate:Object(me.b)(),label:"Nh\u1eadp \u0111\u1ecba ch\u1ec9 d\xf2ng h\u1ecd v\xe0o \u0111\xe2y..."}),a.createElement(he.a,{source:"description",label:"Nh\u1eadp th\xeam th\xf4ng tin ghi ch\xfa \u1edf ph\xeda d\u01b0\u1edbi:"})))},be=n(775),fe=function(e){return a.createElement(be.a,Object.assign({title:"Xem v\xe0 s\u1eeda th\xf4ng tin d\xf2ng h\u1ecd"},e),a.createElement(se.a,null,a.createElement(ue.a,{source:"name",validate:Object(me.b)(),label:"Nh\u1eadp t\xean d\xf2ng h\u1ecd v\xe0o \u0111\xe2y..."}),a.createElement(ue.a,{source:"main_address",validate:Object(me.b)(),label:"Nh\u1eadp \u0111\u1ecba ch\u1ec9 d\xf2ng h\u1ecd v\xe0o \u0111\xe2y..."}),a.createElement(he.a,{source:"description",label:"Nh\u1eadp th\xeam th\xf4ng tin ghi ch\xfa \u1edf ph\xeda d\u01b0\u1edbi:"})))},pe=n(785),ge=n(781),Ee=n(203),ve=n(779),Oe=function(){var e=Object(v.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I("/admin/v1/families");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ye=function(e){var t=e.className,n=(e.exporter,e.filters),c=(e.maxResults,Object(G.a)(e,["className","exporter","filters","maxResults"])),l=Object($.a)(),i=(l.currentSort,l.resource),o=l.displayedFilters,s=l.filterValues,u=(l.hasCreate,l.basePath),m=(l.selectedIds,l.showFilter);l.total;return r.a.createElement(ae.a,Object.assign({className:t},Object(re.c)(c)),n&&Object(a.cloneElement)(n,{resource:i,showFilter:m,displayedFilters:o,filterValues:s,context:"button"}),r.a.createElement(Y.a,{label:"Th\xeam ng\u01b0\u1eddi",basePath:u}))},je=function(e){return r.a.createElement(ge.a,e,r.a.createElement(ue.a,{label:"T\xecm ki\u1ebfm...",source:"q",alwaysOn:!0}),r.a.createElement(pe.a,{source:"belong_to_main_list_of_family",label:"Thu\u1ed9c danh s\xe1ch",choices:[{id:!0,name:"Danh s\xe1ch \u0111inh"},{id:!1,name:"Danh s\xe1ch kh\xe1c"}]}),r.a.createElement(pe.a,{source:"is_alive",label:"C\xf2n s\u1ed1ng hay \u0111\xe3 m\u1ea5t",choices:[{id:null,name:"T\u1ea5t c\u1ea3"},{id:!0,name:"C\xf2n s\u1ed1ng"},{id:!1,name:"\u0110\xe3 m\u1ea5t"}]}))},_e=function(e,t){return{backgroundColor:e.is_alive?"#ffffff":"#fff385"}},xe=function(e){var t=Object(ee.f)((function(e){return function(e,t){var n=te(e);return n&&n[t]&&n[t].list?Object(M.a)({},n[t].list.params):void 0}(e,"persons")}))||{page:1},n=Object(Ee.b)(e);return r.a.createElement("span",null,50*(parseInt(t.page)-1)+parseInt(n.stt))},ke=function(e){var t=Object(a.useState)(!1),n=Object(U.a)(t,2),c=n[0],l=n[1],i=Object(a.useState)(!1),o=Object(U.a)(i,2),u=o[0],m=o[1],h=Object(ee.f)((function(e){return ne(e,"families")}))||[],d=Object(ee.f)((function(e){return ne(e,"persons")}))||[];return Object(a.useEffect)((function(){var e=function(){var e=Object(v.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("check_if_has_family_already"),e.prev=1,e.next=4,Oe();case 4:(t=e.sent)&&t.data&&t.data.length>0?l(!0):m(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return e(),h.length?l(!0):e(),function(){}}),[h.length]),c?r.a.createElement(r.a.Fragment,null,d.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"\u0110\xe2y l\xe0 danh s\xe1ch t\u1ea5t c\u1ea3 m\u1ecdi ng\u01b0\u1eddi trong d\xf2ng h\u1ecd. C\xf3 th\u1ec3 th\xeam, s\u1eeda, v\xe0 x\xf3a th\xf4ng tin c\u1ee7a b\u1ea5t k\u1ef3 ai."),r.a.createElement("p",null," C\xf3 th\u1ec3 t\xecm ki\u1ebfm b\u1eb1ng b\u1ea5t c\u1ee9 th\xf4ng tin g\xec c\u1ee7a m\u1ed9t ng\u01b0\u1eddi, v\xed d\u1ee5 t\xecm 1 ng\u01b0\u1eddi b\u1eb1ng t\xean, s\u1ed1 \u0111i\u1ec7n tho\u1ea1i, t\xecm 1 ng\u01b0\u1eddi b\u1eb1ng t\xean th\u01b0\u1eddng g\u1ecdi, t\xecm 1 ng\u01b0\u1eddi b\u1eb1ng \u0111\u1ecba ch\u1ec9, t\xecm 1 ng\u01b0\u1eddi b\u1eb1ng n\u01a1i an t\xe1ng (C\xf3 th\u1ec3 t\xecm kh\xf4ng d\u1ea5u)")):null,r.a.createElement(K.a,Object.assign({filters:r.a.createElement(je,null),bulkActionButtons:!1,sort:{field:"NOSORT",order:"asc"}},e,{perPage:50,empty:r.a.createElement(Z,{title:"B\u1ea1n ch\u01b0a th\xeam ng\u01b0\u1eddi v\xe0o d\xf2ng h\u1ecd",subtitle:"B\u1eaft \u0111\u1ea7u ngay b\u1eb1ng c\xe1ch b\u1ea5m n\xfat 'Th\xeam' d\u01b0\u1edbi \u0111\xe2y",buttonLabel:"Th\xeam"}),title:"T\u1ea5t c\u1ea3 m\u1ecdi ng\u01b0\u1eddi trong d\xf2ng h\u1ecd",actions:r.a.createElement(ye,null)}),r.a.createElement(z.a,{rowClick:"edit",rowStyle:_e},r.a.createElement(xe,{source:"stt",label:"STT"}),r.a.createElement(Q.a,{source:"family_level",label:"\u0110\u1eddi th\u1ee9"}),r.a.createElement(Q.a,{source:"full_name",label:"T\xean"}),r.a.createElement(Q.a,{source:"nickname",label:"T\xean th\u01b0\u1eddng g\u1ecdi"}),r.a.createElement(Q.a,{source:"dob_year",label:"Sinh n\u0103m"}),r.a.createElement(ce.a,{label:"S\u1eeda"}),r.a.createElement(ve.a,{label:"X\xf3a"})))):u?r.a.createElement(s.a,{to:"/families"}):null},we=n(766),Ne=n(767),Te=n(776),Se=n(777),Ce=n(705),Pe=n(706),Ie=n(412),Je=function(e){var t=Object(Ie.a)(e),n=t.input,a=t.meta;a.touched,a.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,e.label,":  "),r.a.createElement(Ce.a,Object.assign({label:"Gi\u1edbi t\xednh"},n),r.a.createElement(Pe.a,{value:"male"},"Nam gi\u1edbi"),r.a.createElement(Pe.a,{value:"female"},"N\u1eef gi\u1edbi")))},Ae=function(e){return a.createElement(se.a,e,a.createElement(ue.a,{source:"full_name",validate:Object(me.b)(),label:"T\xean \u0111\u1ea7y \u0111\u1ee7..."}),a.createElement("br",null),a.createElement(ue.a,{source:"nickname",label:"T\xean th\u01b0\u1eddng g\u1ecdi n\u1ebfu c\xf3 (v\xed d\u1ee5 C\u1ed1 N\u1ec1n) ..."}),a.createElement("br",null),a.createElement(Je,{initialValue:"male",label:"Gi\u1edbi t\xednh",source:"gender"}),a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement("p",null,a.createElement("span",null,"Ng\xe0y sinh: "),a.createElement("span",null,"(kh\xf4ng b\u1eaft bu\u1ed9c)")),a.createElement(pe.a,{source:"dob_in_lunar",label:"D\u01b0\u01a1ng hay \xe2m",initialValue:!e.noInitialValue||void 0,choices:[{id:!0,name:"\xc2m l\u1ecbch"},{id:!1,name:"D\u01b0\u01a1ng l\u1ecbch"}]}),a.createElement(we.a,{source:"dob_date",max:31,min:1,label:"Ng\xe0y"}),a.createElement(we.a,{source:"dob_month",max:12,min:1,label:"Th\xe1ng"}),a.createElement(we.a,{source:"dob_year",label:"N\u0103m"})),a.createElement(pe.a,{source:"is_alive",label:"C\xf2n s\u1ed1ng hay \u0111\xe3 m\u1ea5t",initialValue:!e.noInitialValue||void 0,choices:[{id:!0,name:"C\xf2n s\u1ed1ng"},{id:!1,name:"\u0110\xe3 m\u1ea5t"}]}),a.createElement(Ne.a,null,(function(t){return t.formData.is_alive?a.createElement(a.Fragment,null,a.createElement("span",null,"\u0110\u1ecba ch\u1ec9: (kh\xf4ng b\u1eaft bu\u1ed9c)"),a.createElement("br",null),a.createElement(ue.a,{source:"address",label:"\u0110\u1ecba ch\u1ec9..."}),a.createElement("br",null),a.createElement("span",null,"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i (kh\xf4ng b\u1eaft bu\u1ed9c)"),a.createElement("br",null),a.createElement(ue.a,{source:"phone_number",label:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i..."})):a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement("p",null,a.createElement("span",null,"Ng\xe0y gi\u1ed7: "),a.createElement("span",null,"(kh\xf4ng b\u1eaft bu\u1ed9c)")),a.createElement(pe.a,{source:"dod_in_lunar",label:"D\u01b0\u01a1ng hay \xe2m",initialValue:!e.noInitialValue||void 0,choices:[{id:!0,name:"\xc2m l\u1ecbch"},{id:!1,name:"D\u01b0\u01a1ng l\u1ecbch"}]}),a.createElement(we.a,{source:"dod_date",max:31,min:1,label:"Ng\xe0y"}),a.createElement(we.a,{source:"dod_month",max:12,min:1,label:"Th\xe1ng"}),a.createElement(we.a,{source:"dod_year",label:"N\u0103m"}),a.createElement("br",null),a.createElement("span",null,"N\u01a1i an t\xe1ng: (kh\xf4ng b\u1eaft bu\u1ed9c)"),a.createElement("br",null),a.createElement(ue.a,{source:"tomb_address",label:"An t\xe1ng t\u1ea1i..."}),a.createElement("br",null))})),a.createElement("br",null),a.createElement("span",null,"M\u1ed1i quan h\u1ec7 gia \u0111\xecnh:"),a.createElement("br",null),a.createElement("span",null,"(N\u1ebfu l\xe0 r\u1ec3, ho\u1eb7c con c\u1ee7a c\xe1c o d\u01b0\u1ee3ng th\xec thu\u1ed9c danh s\xe1ch KH\xc1C)"),a.createElement(pe.a,{source:"belong_to_main_list_of_family",label:"Thu\u1ed9c danh s\xe1ch",initialValue:!e.noInitialValue||void 0,choices:[{id:!0,name:"Danh s\xe1ch \u0111inh"},{id:!1,name:"Danh s\xe1ch kh\xe1c"}]}),a.createElement("span",null,"M\u1ed1i quan h\u1ec7 gia \u0111\xecnh:"),a.createElement("span",null,"(L\u01b0u \xfd n\u1ebfu l\xe0 d\xe2u (r\u1ec3) th\xec \u0111\u1ec3 tr\u1ed1ng ph\u1ea7n cha m\u1eb9, ch\u1ec9 nh\u1eadp cha m\u1eb9 ru\u1ed9t)"),a.createElement("span",null,"(kh\xf4ng b\u1eaft bu\u1ed9c)"),a.createElement(a.Fragment,null,a.createElement(Te.a,{label:"Cha l\xe0 \xf4ng",source:"father_id",reference:"persons",perPage:5e6,filterToQuery:function(e){return{arr:[{field:"gender",value:"male",operation:"=="}]}},allowEmpty:!0},a.createElement(Se.a,{optionText:"ascii_full_name"})),a.createElement(Te.a,{label:"M\u1eb9 l\xe0 b\xe0",source:"mother_id",reference:"persons",perPage:5e6,filterToQuery:function(e){return{arr:[{field:"gender",value:"female",operation:"=="}]}},allowEmpty:!0},a.createElement(Se.a,{optionText:"ascii_full_name"}))),a.createElement("br",null),a.createElement("span",null,"V\u1ee3 ch\u1ed3ng: (kh\xf4ng b\u1eaft bu\u1ed9c)"),a.createElement(Te.a,{label:"V\u1ee3/Ch\u1ed3ng l\xe0:",source:"spouse_id",reference:"persons",perPage:5e6,filterToQuery:function(e){return{arr:[]}},allowEmpty:!0},a.createElement(Se.a,{optionText:"ascii_full_name"})),a.createElement("br",null),a.createElement("span",null,"Con th\u1ee9 m\u1ea5y trong nh\xe0: (kh\xf4ng b\u1eaft bu\u1ed9c)"),a.createElement(we.a,{min:1,source:"sibling_level",label:"Con \u0111\u1ea7u ghi 1, con th\u1ee9 2 ghi 2"}),a.createElement("br",null),a.createElement("span",null,"Nh\u1eadp th\xeam th\xf4ng tin: (kh\xf4ng b\u1eaft bu\u1ed9c)"),a.createElement(he.a,{source:"note",label:"(v\xed d\u1ee5: T\u1ed5 r\u1ea5t gi\u1ecfi v\xe0 gi\xe0u c\xf3) "}))},Fe=function(e){return a.createElement(oe.a,Object.assign({},e,{title:"Th\xeam ng\u01b0\u1eddi v\xe0o d\xf2ng h\u1ecd"}),a.createElement(Ae,null))},Ve=function(e){return a.createElement(be.a,Object.assign({},e,{title:"S\u1eeda th\xf4ng tin c\u1ee7a ng\u01b0\u1eddi"}),a.createElement(Ae,Object.assign({},e,{noInitialValue:!0})))},De=(n(768),n(387)),Me=n.n(De),Re=function(){var e=Object(v.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I("/admin/v1/persons/tree");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Be=function(){var e=Object(v.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I("/admin/v1/persons/tree/from/"+t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Le=function(){var e=Object(v.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t){e.next=7;break}return e.next=4,Re();case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,Be(t);case 9:e.t0=e.sent;case 10:return n=e.t0,console.log(n.data),e.abrupt("return",n.data);case 15:return e.prev=15,e.t1=e.catch(0),console.log(e.t1),e.abrupt("return",null);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),Xe=function e(t){var n=t.spouse?"female"==t.spouse.gender?{"V\u1ee3":t.spouse.full_name}:{"Ch\u1ed3ng":t.spouse.full_name}:{},a={sibling_level:t.sibling_level,id:t.id,name:t.full_name,attributes:n,children:[]};return t.children&&Object.keys(t.children).forEach((function(n){a.children.push(e(t.children[n]))})),a.children.sort((function(e,t){return e.sibling_level-t.sibling_level})),a},qe={},Ue=function(e,t,n,a){var r="child_".concat(n,"_").concat(t);if(1===e)qe.children[r].children=a;else{var c=JSON.stringify(a),l=JSON.stringify(qe),i='"'.concat(r,'":{'),o=i+'"children":'+c+",",s=JSON.parse(l.replace(i,o));qe=s}};function Ge(){var e=Object(a.useState)(),t=Object(U.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(),i=Object(U.a)(l,2),o=i[0],s=i[1];return Object(a.useEffect)((function(){return function(){var e=Object(v.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetchTree..."),e.next=3,Le(o?o.id:null);case 3:t=e.sent,o?(Ue(o.__rd3t.depth,o.id,o.sibling_level,t.children),c(Xe(qe))):c(Xe(qe=t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){}}),[o]),r.a.createElement("div",{id:"treeWrapper",style:{width:"100%",height:"100%"}},n?r.a.createElement(Me.a,{orientation:"horizontal",nodeSize:{x:250,y:100},translate:{x:100,y:200},pathFunc:"diagonal",enableLegacyTransitions:!0,onNodeClick:function(e){Object.keys(e.children).length||s(e)},data:n}):null)}var Ke=n(406),ze=n(132),Qe=n(210),We=n(388),He=n.n(We),$e=Object(s.i)((function(e){var t=e.onMenuClick,n=e.logout,r=Object(Ke.a)((function(e){return e.breakpoints.down("xs")})),c=Object(ee.f)((function(e){return e.admin.ui.sidebarOpen})),l=Object(ee.f)(ze.b);return a.createElement("div",null,l.map((function(e){return a.createElement(Qe.a,{key:e.name,to:"/".concat(e.name),primaryText:e.options&&e.options.label||e.name,leftIcon:Object(a.createElement)(e.icon),onClick:t,sidebarIsOpen:c})})),a.createElement(Qe.a,{to:"/tree",primaryText:"C\xe2y gia ph\u1ea3",leftIcon:a.createElement(He.a,null),onClick:t,sidebarIsOpen:c}),r&&n)})),Ye={vi:m.a},Ze=(Object(h.a)((function(e){return Ye[e]})),function(){return r.a.createElement(i.a,{menu:$e,authProvider:V,dataProvider:q,customRoutes:[r.a.createElement(s.b,{path:"/tree",component:Ge})]},r.a.createElement(o.a,{name:"families",options:{label:"Th\xf4ng tin d\xf2ng h\u1ecd"},icon:p.a,list:ie,edit:fe,create:de}),r.a.createElement(o.a,{name:"persons",options:{label:"Gia ph\u1ea3"},icon:b.a,list:ke,edit:Ve,create:Fe}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[686,1,2]]]);
//# sourceMappingURL=main.6342cb77.chunk.js.map