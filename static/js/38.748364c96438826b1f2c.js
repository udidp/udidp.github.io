webpackJsonp([38],{MbbZ:function(t,e){},OLT2:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("pFYg");var a=s("Xxa5"),i=s.n(a),r=s("woOf"),n=s.n(r),o=s("exGp"),c=s.n(o),l=s("Dd8w"),p=s.n(l),u=s("0xDb"),d=s("A77I"),m=s("JX3P"),b=s("GqfT"),h=s("2Qll"),v={name:"RegistDomain",components:{GobackNav:s("/hYL").a},computed:p()({showDomainAppend:function(){return void 0!==this.domain&&""!==this.domain},topShow:function(){var t=Object(d.i)(this.domain);return"raretop"===t||"commontop"===t},subWarnShow:function(){return this.topasset&&this.topasset.owner&&!this.topasset.openApplied},customPriceEdidShow:function(){var t=Object(d.i)(this.domain);return!("raretop"!==t&&"commontop"!==t||!this.openApplied)},customPriceEditEnabled:function(){return this.openApplied&&this.isCustomed},domainType:function(){return""===this.domain?"":this.$t("g."+Object(d.i)(this.domain))},showTopAssetInfo:function(){return this.topasset&&this.topasset.owner},getTopOwner:function(){return this.topasset?this.topasset.owner:""},getTopExpired:function(){return this.topasset?Object(u.h)(this.topasset.expire,"YYYY-MM-DD HH:mm:ss"):""},getTotal:function(){if(""===this.domain)return 0;var t=parseFloat(this.unitPrice*this.years);return this.isCustomed?t+parseFloat(this.ruleState.externalBas):t}},Vuex.mapGetters({ruleState:"dapp/ruleState",minsubBas:function(t){return parseFloat(Object(u.C)(t.dapp.subGas))},maxYears:function(t){return t.dapp.maxRegYears}}),Vuex.mapState({dappState:function(t){return t.dapp}})),data:function(){return{domain:"",years:1,openApplied:!0,isCustomed:!1,subUnitPrice:4,unitPrice:4,maxPriceBas:d.e,topasset:{name:"",owner:"",openApplied:!1,isCustomed:!1,customPrice:4*Math.pow(10,18)},ctrl:{loading:!1}}},methods:{setUnitPrice:function(){var t=this.domain,e=this.$store.getters["dapp/ruleState"];if(void 0!==t&&""!==t&&""!==t.trim()){var s=Object(d.i)(t),a=this.topasset;switch(s){case"subdomain":this.unitPrice=e.subBas,a.owner&&a.openApplied&&a.isCustomed,this.unitPrice=Object(u.C)(a.customPrice);break;case"raretop":this.unitPrice=e.rareBas;break;case"commontop":this.unitPrice=e.rootBas}}else this.unitPrice=e.subBas},changeLower:function(t){t&&(this.domain=t.trim().toLowerCase())},openAppliedChange:function(){},closeSubApply:function(t){this.isCustomed=!1;var e=this.$store.getters["dapp/ruleState"];this.subUnitPrice=e.subBas},openSubApply:function(t){},customedPriceChanged:function(){},customedCheckedChange:function(){if(!this.isCustomed){var t=this.$store.getters["dapp/ruleState"];this.subUnitPrice=t.subBas}},gotoWhois:function(){this.topasset.name&&this.$router.push({path:"/domain/detail/"+this.topasset.name})},loadTopasset:function(t){var e=this;return c()(i.a.mark(function s(){var a,r;return i.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:e,a=e.$store.getters["dapp/web3State"],(r=a.chainId)&&Object(b.a)(t,r).then(function(t){t.state&&(e.topasset=n()({},t.assetinfo),e.setUnitPrice())}).catch(function(t){});case 5:case"end":return s.stop()}},s,e)}))()},resetTopAsset:function(){var t=this.$store.state.dapp.subGas;this.topasset=n()({},{name:"",owner:"",openApplied:!1,isCustomed:!1,customPrice:t})},validForm:function(){var t=this.domain,e="";try{if(Object(d.a)(t),this.topasset.owner&&!this.topasset.openApplied)throw 10012;return!0}catch(s){switch(s){case 1e4:e=t+" "+this.$t("l.Illegal");break;case 10001:e=this.$t("code.10001",{max:d.d});break;case 10002:e=t+" "+this.$t("l.ErrorHasSpecialCharacter");break;case 10003:e=t+" 域名超过二级";break;case 10004:e=t+" "+this.$t("l.ErrorHasUpperCase");break;case 10012:e=t+" "+this.$t("l.ErrorHasSpecialCharacter");break;default:e=t+" "+this.$t("l.Illegal")}return this.$message(this.$basTip.error(e)),!1}},commitRegist:function(){var t=this;return c()(i.a.mark(function e(){var s,a,r,n,o,c,l,p,m;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t.domain,t.validForm()){e.next=3;break}return e.abrupt("return");case 3:if(!t.$store.getters.metaMaskDisabled){e.next=6;break}return t.$metamask(),e.abrupt("return");case 6:if(a=Object(d.l)(s),r=t.$store.getters["dapp/web3State"],n=r.chainId,o=t.subUnitPrice,!(parseFloat(o)<=0)){e.next=14;break}return c=t.$t("p.SaleOnPriceUnitBasValidError",{begin:0,end:Object(u.u)(d.e)}),t.$message(t.$basTip.error(c)),e.abrupt("return");case 14:return e.prev=14,e.next=17,Object(b.d)(s,n,!a);case 17:if(!e.sent){e.next=21;break}return t.$message(t.$basTip.error(t.$t("code.200002",{domaintext:s}))),e.abrupt("return");case 21:e.next=27;break;case 23:return e.prev=23,e.t0=e.catch(14),e.abrupt("return");case 27:if(!a){e.next=35;break}return l=Object(d.g)(s.trim().toLowerCase()),p=l.subtext,m=l.toptext,e.next=33,t.commitSubRegisting(p,m);case 33:e.next=37;break;case 35:return e.next=37,t.commitTopRegisting(s);case 37:case"end":return e.stop()}},e,t,[[14,23]])}))()},commitSubRegisting:function(t,e){var s=this;return c()(i.a.mark(function a(){var r,o,c,l,p,d,b;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return r=s.$store.getters["dapp/web3State"],o=r.chainId,c=r.wallet,l={isSubDomain:!0,domainText:t,topText:e,openApplied:!1,isCustomed:!1,customPriceWei:Object(u.e)(s.subUnitPrice+""),costWei:0,years:s.years,chainId:o,wallet:c},a.prev=4,s.ctrl.loading=!0,a.next=8,Object(h.b)(e,t,s.years,o,c);case 8:p=a.sent,s.ctrl.loading=!1,d=n()({},l,{hash:p.hash,costWei:p.costwei}),s.$router.push({name:"domain.applyresult",params:{commitData:d}}),a.next=34;break;case 15:a.prev=15,a.t0=a.catch(4),s.ctrl.loading=!1,b="",a.t1=a.t0,a.next=a.t1===m.d?22:a.t1===m.c?22:a.t1===m.B?25:a.t1===m.h?25:a.t1===m.l?28:a.t1===m.k?28:a.t1===m.c?30:32;break;case 22:return b=s.$t("code."+a.t0,{text:t}),s.$message(s.$basTip.error(b)),a.abrupt("return");case 25:return b=s.$t("code."+a.t0,{text:e}),s.$message(s.$basTip.error(b)),a.abrupt("return");case 28:return s.$message(s.$basTip.error(s.$t("code."+a.t0))),a.abrupt("return");case 30:return a.abrupt("return");case 32:return a.abrupt("break",33);case 33:case 34:case"end":return a.stop()}},a,s,[[4,15]])}))()},commitTopRegisting:function(t){var e=this;return c()(i.a.mark(function s(){var a,r,o,c,l,p,d,b;return i.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return"",a=e.$store.getters["dapp/web3State"],r=a.chainId,o=a.wallet,Object(u.e)(e.getTotal),c=Object(u.e)(e.subUnitPrice),l={isSubDomain:!1,domainText:t,openApplied:e.openApplied,isCustomed:e.isCustomed,customPriceWei:c,years:e.years,chainId:r,wallet:o},p={domaintext:t,isCustomed:e.isCustomed,customWei:c,years:e.years,chainId:r,wallet:o},s.prev=9,e.ctrl.loading=!0,s.next=13,Object(h.a)(p);case 13:d=s.sent,e.ctrl.loading=!1,e.$router.push({name:"domain.applyresult",params:{commitData:n()({},l,{costWei:d.costwei,hash:d.hash})}}),s.next=37;break;case 18:s.prev=18,s.t0=s.catch(9),e.ctrl.loading=!1,b="",s.t1=s.t0,s.next=s.t1===m.d?25:s.t1===m.c?25:s.t1===m.B?28:s.t1===m.h?28:s.t1===m.l?31:s.t1===m.k?31:s.t1===m.c?33:35;break;case 25:case 28:return b=e.$t("code."+s.t0,{text:t}),e.$message(e.$basTip.error(b)),s.abrupt("return");case 31:return e.$message(e.$basTip.error(e.$t("code."+s.t0))),s.abrupt("return");case 33:return s.abrupt("return");case 35:return s.abrupt("break",36);case 36:case 37:case"end":return s.stop()}},s,e,[[9,18]])}))()}},mounted:function(){this.domain=this.$route.params.domainText,this.setUnitPrice();var t=Object(u.j)(this.domain);t&&this.loadTopasset(t)},watch:{domain:function(t,e){if(this.setUnitPrice(),t&&t!==e&&Object(d.l)(t)){var s=Object(u.j)(t);s?this.loadTopasset(s):this.resetTopAsset()}}}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-7 pb-2"},[s("goback-nav",{attrs:{clsName:"sub-goback-nav"}})],1),t._v(" "),s("div",{staticClass:"col-7 bas-card"},[s("div",{staticClass:"bas-card__header"},[s("div",{staticClass:"bas-card__header-title"},[t._v("\n          "+t._s(t.$t("p.DomainRegistTopTitle"))+"\n        ")])]),t._v(" "),s("div",{staticClass:"bas-gray-split"}),t._v(" "),s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.ctrl.loading,expression:"ctrl.loading"}],staticClass:"bas-card__body bas-border-none"},[s("el-form",{staticClass:"col-10",attrs:{"label-width":"160px"}},[s("el-form-item",[s("label",{attrs:{slot:"label"},slot:"label"},[t._v("\n              "+t._s(t.$t("l.Domain"))+"\n            ")]),t._v(" "),s("el-input",{staticClass:"bas-regist--domain-input",attrs:{placeholder:"please enter domain..."},on:{input:t.changeLower},model:{value:t.domain,callback:function(e){t.domain=e},expression:"domain"}},[t.showDomainAppend?s("template",{slot:"append"},[t._v("\n                "+t._s(t.domainType)+"\n              ")]):t._e()],2),t._v(" "),t.subWarnShow?s("div",{staticClass:"bas-text-warning"},[s("i",{staticClass:"fa fa-warning"}),t._v("\n              "+t._s(t.$t("p.DomainRegistTopClosedTip"))+"\n            ")]):t._e()],1),t._v(" "),s("el-form-item",[s("label",{attrs:{slot:"label"},slot:"label"},[t._v(t._s(t.$t("l.PriceBas")))]),t._v(" "),s("span",[t._v(" "+t._s(t.unitPrice)+" ")]),t._v(" "),s("span",[t._v(" "+t._s(t.ruleState.symbol)+"UDID/year ")])]),t._v(" "),t.topShow?s("el-form-item",[s("label",{attrs:{slot:"label"},slot:"label"},[t._v("\n              "+t._s(t.$t("l.HasOpenAppliedSubRegistLabel"))+"\n            ")]),t._v(" "),s("el-radio-group",{on:{change:t.openAppliedChange},model:{value:t.openApplied,callback:function(e){t.openApplied=e},expression:"openApplied"}},[s("el-radio",{attrs:{label:!1},on:{change:t.closeSubApply}},[t._v("\n                "+t._s(t.$t("l.N"))+"\n              ")]),t._v(" "),s("el-radio",{attrs:{label:!0},on:{change:t.openSubApply}},[t._v("\n                "+t._s(t.$t("l.Y"))+"\n              ")])],1)],1):t._e(),t._v(" "),t.customPriceEdidShow?s("el-form-item",[s("label",{attrs:{slot:"label"},slot:"label"},[t._v(t._s(t.$t("p.DomainDetailRegistSubTips"))+" "+t._s(t.minsubBas))]),t._v(" "),s("el-input-number",{attrs:{disabled:!t.customPriceEditEnabled,precision:2,step:1,"controls-position":"",min:t.minsubBas},on:{change:t.customedPriceChanged},model:{value:t.subUnitPrice,callback:function(e){t.subUnitPrice=e},expression:"subUnitPrice"}}),t._v(" "),s("el-checkbox",{staticClass:"bas-domain--setprice-tip",on:{change:t.customedCheckedChange},model:{value:t.isCustomed,callback:function(e){t.isCustomed=e},expression:"isCustomed"}},[t._v("\n              Notice: "+t._s(t.$t("p.DomainRegistExternalBasTip"))+t._s(t.ruleState.externalBAS)+t._s(t.ruleState.symbol)+"\n            ")])],1):t._e(),t._v(" "),s("el-form-item",{attrs:{label:t.$t("l.PurchaseYears")}},[s("el-input-number",{attrs:{name:"years","controls-position":"",min:1,max:t.ruleState.maxRegYears},model:{value:t.years,callback:function(e){t.years=e},expression:"years"}}),t._v(" "),s("span",[t._v("Year")])],1)],1),t._v(" "),t.showTopAssetInfo?s("div",{staticClass:"bas-regist--topdomain-container"},[s("h5",{},[t._v(t._s(t.$t("p.DomainRegistSubRootInfoTitle")))]),t._v(" "),s("div",{staticClass:"bas-inline-flex"},[s("div",{staticClass:"bas-label-100"},[t._v(t._s(t.$t("l.ExpiredDate"))+":")]),t._v(" "),s("span",[t._v(t._s(t.getTopExpired))])]),t._v(" "),s("div",{staticClass:"bas-inline-flex"},[s("div",{staticClass:"bas-label-100"},[t._v(t._s(t.$t("l.Owner"))+":")]),t._v(" "),s("span",[t._v(t._s(t.getTopOwner))]),t._v(" "),s("a",{staticClass:"bas-link bas-small",staticStyle:{"margin-left":"1.5rem"},on:{click:function(e){return e.preventDefault(),t.gotoWhois.apply(null,arguments)}}},[t._v("\n              Who is >>\n            ")])])]):t._e()],1)]),t._v(" "),s("div",{staticClass:"col-7 text-center regist-footer"},[s("div",{staticClass:"total"},[s("span",{staticClass:"bas-text-green"},[t._v(t._s(t.$t("l.Total"))+":")]),t._v(" "),s("h2",{staticClass:"d-inline bas-text-green"},[t._v(t._s(t.getTotal))]),t._v(" "),s("span",{staticClass:"bas-text-green"},[t._v("UDID")])]),t._v(" "),s("div",{staticClass:"bas-card__footer"},[s("button",{staticClass:"btn bas-btn-primary",on:{click:t.commitRegist}},[t._v("\n          "+t._s(t.$t("l.RegistBtn"))+"\n        ")])])])])])},staticRenderFns:[]};var _=s("VU/8")(v,f,!1,function(t){s("MbbZ")},null,null);e.default=_.exports}});
//# sourceMappingURL=38.748364c96438826b1f2c.js.map