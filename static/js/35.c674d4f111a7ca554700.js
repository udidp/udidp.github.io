webpackJsonp([35],{"67q9":function(t,a){},ao19:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=i("Xxa5"),l=i.n(e),n=i("exGp"),s=i.n(n),o=i("woOf"),r=i.n(o),c=i("0xDb"),d=i("1plq"),m=(i("JX3P"),i("M/cH")),f=i("82Js"),u=i("T6DH"),v={name:"MailDomainDetail",components:{LoadingDot:i("g1m8").a},computed:{expiration:function(){return this.mailInfo.expire?Object(c.h)(this.mailInfo.expire):""},commDisabled:function(){return!this.mailInfo.domainHash||this.ctrl.inprogress},multiLabel:function(){if(!this.mulDialog.typDict)return"";var t=this.mulDialog.typDict;return this.$t("l.RefData"+t)},multiInputPlaceholder:function(){var t=this.mulDialog.typDict;return this.$t("l.RefDataInputPlaceHolder",{typ:this.$t("l.RefData"+t)})}},data:function(){return{mailInfo:{domainHash:"",name:"",domaintext:"",expire:0},refdata:{MXBCA:""},origin:{MXBCA:""},ctrl:{editEnabled:!1,inprogress:!1},mulDialog:{visible:!1,items:[{typ:"MX",val:""}],typDict:"MX",loading:!1},maskDialog:{visible:!1},cleanConfirm:{visible:!1,loading:!1,typDict:"MX",domaintext:""}}},methods:{enableEditConf:function(){this.ctrl.editEnabled=!0},disableEditConf:function(){this.ctrl.editEnabled=!1},SubmitPublicKey:function(){var t=this;if(this.$store.getters.metaMaskDisabled)this.$metamask();else{var a=this.$store.getters.web3State,i=this.mailInfo.owner,e=a.chainId,l=a.wallet,n=this.mailInfo.domainHash,s="";if(!n)return s=this.$t("code.200004",{domaintext:this.mailInfo.domaintext}),void this.$message(this.$basTip.error(s));if(!Object(c.s)(i,l))return s=this.$t("code.110110",{wallet:l,owner:i}),void this.$message(this.$basTip.error(s));var o=this.refdata.MXBCA;if(Object(m.d)(o))return s=this.$t("p.DomainRefDataValidIPIllegal",{typ:this.$t("l.RefDataMXBCA"),val:o}),void this.$message(this.$basTip.error(s));var r=Object(d.v)(o);this.maskDialog.visible=!0,Object(u.c)("MXBCA",n,r,e,l).then(function(a){t.maskDialog.visible=!1,t.ctrl.editEnabled=!1,t.$message(t.$basTip.warn(t.$t("g.OperateTipSuccess")))}).catch(function(a){t.maskDialog.visible=!1,t.$message(t.$basTip.error(t.$t("g.OperateTipFail")))})}},updateRefData:function(t){this.openMulDialog(t)},showCleanConfirmDialog:function(t){this.cleanConfirm=r()({},this.cleanConfirm,{visible:!0,loading:!1,typDict:t})},hideCleanConfirmDialog:function(){this.cleanConfirm=r()({},this.cleanConfirm,{visible:!1,loading:!1,typDict:""})},submitCleanData:function(){this.clearRefData()},clearRefData:function(){var t=this;if(this.$store.getters.metaMaskDisabled)this.$metamask();else{var a=this.cleanConfirm.typDict,i=this.$store.getters.web3State,e=i.chainId,l=i.wallet,n=this.mailInfo.domainHash,s=this.mailInfo.owner;a&&(Object(c.s)(s,l)?(this.ctrl.inprogress=!0,this.cleanConfirm.loading=!0,Object(u.b)(a,n,e,l).then(function(i){t.refdata[a]="",t.ctrl.inprogress=!1,t.hideCleanConfirmDialog()}).catch(function(a){t.ctrl.inprogress=!1,t.cleanConfirm.loading=!1})):this.$message(this.$basTip.error(this.$t("code."+NO_UPDATE_PERMISSIONS,{wallet:l,owner:s}))))}},openMulDialog:function(t){var a=Object(d.v)(this.refdata[t]).map(function(a){return{typ:t,val:a}});a&&a.length||(a=[{typ:t,val:""}]);var i={visible:!0,items:a,typDict:t,loading:!1};this.mulDialog=r()({},i)},cancelMulti:function(){this.mulDialog=r()({},{visible:!1,items:[],typDict:null,loading:!1})},submmitMultiConfData:function(){var t=this;if(this.$store.getters.metaMaskDisabled)this.$metamask();else{try{this.validDatas()}catch(t){return void this.$message(this.$basTip.error(t))}var a=this.$store.getters.web3State,i=a.chainId,e=a.wallet,l=this.mulDialog.items.map(function(t){return t.val}),n=this.mulDialog.typDict,s=this.mailInfo.domainHash;this.mulDialog.loading=!0;var o=Object(d.j)(l);Object(u.c)(n,s,l,i,e).then(function(a){t.mulDialog.visible=!1,t.refdata[n]=o,t.mulDialog.loading=!1}).catch(function(a){t.mulDialog.loading=!1})}},validDatas:function(){var t=this.mulDialog.items,a=this.mulDialog.typDict;if(!t||!t.length)return!1;switch(a){case"MX":var i=t.find(function(t){return 0==Object(m.e)(t.val)});if(i)throw this.$t("p.DomainRefDataValidIPIllegal",{typ:this.$t("l.RefDataMX"),val:i.val});break;case"MXBCA":var e=t.find(function(t){return Object(m.d)(t.val)});if(e)throw this.$t("p.DomainRefDataValidBCAIllegal",{typ:this.$t("l.RefData"+a),val:e.val})}},InputEnterHandle:function(t){this.addMultiItem()},addMultiItem:function(){var t=this.mulDialog.typDict;this.mulDialog.items.push({typ:t,val:""})},removeItem:function(t,a){this.mulDialog.items;this.mulDialog.items.splice(a,1)},goback:function(){this.$router.go(-1)}},mounted:function(){var t=this;return s()(l.a.mark(function a(){var i,e,n,s;return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return i=t.$route.params.domaintext,t.mailInfo.domaintext=i,e=t.$store.getters.web3State,n=e.chainId,a.next=6,Object(f.d)(i,n);case 6:(s=a.sent).state&&(t.mailInfo=r()({},t.mailInfo,s.mailInfo),s.refdata&&(t.refdata=r()(t.refdata,s.refdata)));case 8:case"end":return a.stop()}},a,t)}))()}},b={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"container"},[i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-md-9 col-sm-12 pt-2"},[i("div",{staticClass:"nav-breadcrumbs",on:{click:t.goback}},[i("span",{staticClass:"breadcrumbs"},[i("span",[t._v(t._s(t.$t("l.GoBackPrevPage")))])])])])]),t._v(" "),i("div",{staticClass:"row justify-content-center mt-3"},[i("div",{staticClass:"col-md-10 col-sm-12 mail-box-wrapper "},[i("div",{staticClass:"inner-box"},[i("div",{staticClass:"mail-info--base"},[i("div",{staticClass:"mail-info-primary"},[i("label",[t._v(t._s(t.$t("l.MailLabel")))]),t._v(" "),i("span",[t._v(t._s("@"+t.mailInfo.domaintext))])]),t._v(" "),i("div",[i("label",{staticClass:"bas-info-label"},[t._v(" "+t._s(t.$t("l.Domain")))]),t._v(" "),i("a",{staticClass:"bas-link"},[t._v(t._s(t.mailInfo.domaintext))])]),t._v(" "),i("div",[i("label",{staticClass:"bas-info-label"},[t._v(t._s(t.$t("l.ExpiredDate")))]),t._v(" "),i("span",[t._v(t._s(t.expiration))])])]),t._v(" "),i("div",{staticClass:"mail-conf-nav"},[i("label",{staticClass:"conf-label"},[t._v(t._s(t.$t("l.ConfigurationLabel")))])]),t._v(" "),i("el-form",{staticClass:"mail-conf-container",attrs:{"label-width":"160px"}},[i("el-form-item",{attrs:{label:t.$t("l.RefDataMX")}},[i("div",{staticClass:"refdata-container"},[i("el-input",{attrs:{placeholder:t.$t("l.RefNoDataPlaceholder"),disabled:!0,type:"textarea",size:"mini",autosize:""},model:{value:t.refdata.MX,callback:function(a){t.$set(t.refdata,"MX",a)},expression:"refdata.MX"}}),t._v(" "),i("div",{staticClass:"refdata-btns"},[i("el-button",{staticClass:"bas-btn-primary",attrs:{disabled:t.commDisabled,type:"primary",size:"mini"},on:{click:function(a){return t.updateRefData("MX")}}},[t._v("\n                  "+t._s(t.refdata.MX?t.$t("l.RefUpdateDataBtn"):t.$t("l.RefAddDataBtn"))+"\n                ")]),t._v(" "),Boolean(t.refdata.MX)?i("el-button",{attrs:{disabled:t.commDisabled,size:"mini",plain:""},on:{click:function(a){return t.showCleanConfirmDialog("MX")}}},[t._v("\n                  "+t._s(t.$t("l.RefClearDataBtn"))+"\n                ")]):t._e()],1)],1)]),t._v(" "),i("el-form-item",{attrs:{label:t.$t("l.RefDataMXBCA")}},[i("div",{staticClass:"refdata-container"},[i("el-input",{attrs:{placeholder:t.$t("l.RefNoDataPlaceholder"),disabled:!0,size:"mini",type:"textarea",autosize:""},model:{value:t.refdata.MXBCA,callback:function(a){t.$set(t.refdata,"MXBCA",a)},expression:"refdata.MXBCA"}}),t._v(" "),i("div",{staticClass:"refdata-btns"},[i("el-button",{staticClass:"bas-btn-primary",attrs:{disabled:t.commDisabled,type:"primary",size:"mini"},on:{click:function(a){return t.updateRefData("MXBCA")}}},[t._v("\n                  "+t._s(t.refdata.MXBCA?t.$t("l.RefUpdateDataBtn"):t.$t("l.RefAddDataBtn"))+"\n                ")]),t._v(" "),Boolean(t.refdata.MXBCA)?i("el-button",{attrs:{disabled:t.commDisabled,size:"mini",plain:""},on:{click:function(a){return t.showCleanConfirmDialog("MXBCA")}}},[t._v("\n                  "+t._s(t.$t("l.RefClearDataBtn"))+"\n                ")]):t._e()],1)],1)]),t._v(" "),t.ctrl.editEnabled?i("el-form-item",[i("el-button",{staticClass:"bas-w-68 bas-btn-primary",attrs:{type:"primary"},on:{click:t.SubmitPublicKey}},[t._v("\n              "+t._s(t.$t("g.Confirm"))+"\n            ")]),t._v(" "),i("el-button",{staticClass:"w-25",attrs:{type:"default"},on:{click:t.disableEditConf}},[t._v("\n              "+t._s(t.$t("g.Cancel"))+"\n            ")])],1):t._e()],1)],1)])]),t._v(" "),i("el-dialog",{attrs:{width:"25%","close-on-click-modal":!1,"show-close":!1,visible:t.maskDialog.visible},on:{"update:visible":function(a){return t.$set(t.maskDialog,"visible",a)}}},[i("div",{attrs:{slot:"title"},slot:"title"},[t.maskDialog.visible&&Boolean(t.mailInfo.domainHash)?i("loading-dot",{staticStyle:{float:"left"}}):t._e(),t._v(" "),i("span",{staticStyle:{"margin-left":"10px"}},[t._v("\n        "+t._s(t.maskDialog.title)+"\n      ")])],1),t._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-10 text-center"},[i("h5",[t._v("\n            "+t._s(t.$t("l.TransactionTip"))+"\n          ")])])])])]),t._v(" "),i("el-dialog",{attrs:{visible:t.mulDialog.visible,"close-on-click-modal":!1,"show-close":!1,width:"55%"},on:{"update:visible":function(a){return t.$set(t.mulDialog,"visible",a)}}},[i("div",{attrs:{slot:"title"},slot:"title"},[t._v("\n      "+t._s(t.$t("p.UpdateDomainRefDataDialogTitle",{domain:t.mailInfo.domaintext,typ:this.$t("l.RefData"+t.mulDialog.typDict)}))+"\n    ")]),t._v(" "),i("div",{staticClass:"container refdata-dialog--body"},[i("el-table",{staticStyle:{width:"100%"},attrs:{type:"index",data:t.mulDialog.items,stripe:""}},[i("el-table-column",{attrs:{type:"index",width:"50"}}),t._v(" "),i("el-table-column",{attrs:{label:t.multiLabel,width:"375px"},scopedSlots:t._u([{key:"default",fn:function(a){return[i("el-form",{ref:"scope.row",attrs:{model:a.row},nativeOn:{submit:function(t){t.preventDefault()}}},[i("el-input",{ref:t.mulDialog.typDict+"_"+a.row.length,attrs:{disabled:t.mulDialog.loading,size:"mini",placeholder:t.multiInputPlaceholder},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.InputEnterHandle.apply(null,arguments)}},model:{value:a.row.val,callback:function(i){t.$set(a.row,"val",i)},expression:"scope.row.val"}})],1)]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:t.$t("l.Operating"),width:"260px"},scopedSlots:t._u([{key:"default",fn:function(a){return[i("el-button",{attrs:{size:"mini",disabled:t.mulDialog.loading,type:"default",icon:"el-icon-plus",circle:""},on:{click:t.addMultiItem}}),t._v(" "),i("el-button",{attrs:{size:"mini",type:"default",disabled:t.mulDialog.loading,icon:"el-icon-minus",circle:""},on:{click:function(i){return t.removeItem(a.row.val,a.$index)}}})]}}])})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"mini",disabled:t.mulDialog.loading},on:{click:t.cancelMulti}},[t._v("\n        "+t._s(t.$t("g.Cancel"))+"\n      ")]),t._v(" "),i("el-button",{attrs:{size:"mini",disabled:t.mulDialog.loading},on:{click:t.addMultiItem}},[t._v("\n        "+t._s(t.$t("g.AddOneRecord"))+"\n      ")]),t._v(" "),i("el-button",{staticClass:"bas-btn-primary",attrs:{type:"primary",size:"mini",disabled:t.mulDialog.loading},on:{click:t.submmitMultiConfData}},[t._v("\n        "+t._s(t.$t("g.Confirm"))+"\n      ")]),t._v(" "),t.mulDialog.loading?i("loading-dot",{staticStyle:{float:"left"}}):t._e()],1)]),t._v(" "),i("el-dialog",{attrs:{width:"25%","close-on-click-modal":!1,"show-close":!t.cleanConfirm.loading,"before-close":t.hideCleanConfirmDialog,visible:t.cleanConfirm.visible,top:"35vh","custom-class":"bas-dialog"},on:{"update:visible":function(a){return t.$set(t.cleanConfirm,"visible",a)}}},[i("div",{staticClass:"bas-dg-header",attrs:{slot:"title"},slot:"title"}),t._v(" "),i("div",{staticClass:"bas-dg-body"},[i("div",{staticClass:"abandon-title"},[i("span",[t._v(t._s(t.$t("p.RefDataCleanDialogConfirmContents",{text:t.$t("l.RefData"+t.cleanConfirm.typDict)})))])]),t._v(" "),i("div",{staticClass:"text-center"},[i("span",{staticClass:"bas-dg-gray-tips"})]),t._v(" "),i("div",{staticClass:"text-center"},[i("el-button",{staticClass:"bas-w-60 bas-btn-primary btn-abandon",attrs:{disabled:t.cleanConfirm.loading,type:"primary"},on:{click:t.submitCleanData}},[i("div",[t.cleanConfirm.loading?i("LoadingDot"):t._e()],1),t._v("\n          "+t._s(t.cleanConfirm.loading?t.$t("l.Transactioning"):t.$t("l.Confirm"))+"\n        ")])],1)])])],1)},staticRenderFns:[]};var p=i("VU/8")(v,b,!1,function(t){i("67q9")},null,null);a.default=p.exports}});
//# sourceMappingURL=35.c674d4f111a7ca554700.js.map