webpackJsonp([44],{CnXM:function(t,e){},xCFx:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("pFYg");var r=a("woOf"),s=a.n(r),n=a("Xxa5"),i=a.n(n),o=a("exGp"),c=a.n(o),u=a("BO1k"),l=a.n(u),p=a("Dd8w"),d=a.n(p),b=a("0xDb"),m=a("A77I"),f=a("FGy5"),h=a("GqfT"),v={name:"Favourite",components:{},computed:d()({domainType:function(){return""===this.domain?"":this.$t("g."+Object(m.i)(this.domain))}},Vuex.mapGetters({ruleState:"dapp/ruleState",minsubBas:function(t){return parseFloat(Object(b.C)(t.dapp.subGas))},maxYears:function(t){return t.dapp.maxRegYears}}),Vuex.mapState({dappState:function(t){return t.dapp}})),data:function(){return{topText:"",subText:"",domain:"",years:1,openApplied:!0,isCustomed:!1,subUnitPrice:4,unitPrice:4,maxPriceBas:m.e,topasset:{name:"",owner:"",openApplied:!1,isCustomed:!1,customPrice:4*Math.pow(10,18)},subasset:{name:"",owner:""},ctrl:{loading:!1},favourTableData:[]}},methods:{getFavourItems:function(){var t=JSON.parse(localStorage.favourList),e=!0,a=!1,r=void 0;try{for(var s,n=l()(t);!(e=(s=n.next()).done);e=!0){var i=s.value,o={price:"",duration:1,isFavor:!0};o.domains=i,o.type=this.$t("g."+Object(m.i)(i)),"subdomain"===Object(m.i)(i)?this.loadSubasset(o):this.loadTopasset(o),this.favourTableData.push(o)}}catch(t){a=!0,r=t}finally{try{!e&&n.return&&n.return()}finally{if(a)throw r}}},deFavour:function(t){var e=this;return c()(i.a.mark(function a(){return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.$store.dispatch("favourite/deFavour",t.domains);case 2:e.favourTableData.remove(t);case 3:case"end":return a.stop()}},a,e)}))()},translateType:function(t){var e=Object(m.i)(t.domains);return this.$t("g."+e)},setUnitPrice:function(t){var e=this.$store.getters["dapp/ruleState"];if(void 0!==t.domains&&""!==t.domains&&""!==t.domains.trim()){var a=Object(m.i)(t.domains),r=this.topasset;switch(a){case"subdomain":t.price=e.subBas,r.owner&&r.openApplied&&r.isCustomed,t.price=Object(b.C)(r.customPrice);break;case"raretop":t.price=e.rareBas;break;case"commontop":t.price=e.rootBas}}else t.price=e.subBas},setSubUnitPrice:function(t){var e=this.$store.getters["dapp/ruleState"],a=this.subasset,r=a.expire,s=parseInt((new Date).getTime()/1e3);if(a.owner&&a.openApplied&&a.isCustomed&&r-s>0){var n=a.customPrice;t.price=n?Object(b.C)(n):e.subBas}else t.price=e.subBas},loadTopasset:function(t){var e=this;return c()(i.a.mark(function a(){var r,n;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:e,r=e.$store.getters["dapp/web3State"],(n=r.chainId)&&Object(h.a)(t.domains,n).then(function(a){e.setUnitPrice(t),a.state&&(e.topasset=s()({},a.assetinfo),e.setUnitPrice(t))}).catch(function(t){});case 4:case"end":return a.stop()}},a,e)}))()},loadSubasset:function(t){var e=this;return c()(i.a.mark(function a(){var r,n,o,c;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(f.b)();case 2:r=a.sent,n=t.domains.split("."),o=n[1],e.topText=o,e.subText=n[0]||"",e.subasset=s()(e.subasset,{name:o}),c=r.chainId,o&&Object(h.a)(o,c).then(function(a){a.state&&(e.subasset=s()({},a.assetinfo)),e.setSubUnitPrice(t)}).catch(function(a){e.setSubUnitPrice(t)});case 10:case"end":return a.stop()}},a,e)}))()},resetTopAsset:function(){var t=this.$store.state.dapp.subGas;this.topasset=s()({},{name:"",owner:"",openApplied:!1,isCustomed:!1,customPrice:t})},validForm:function(){var t=this.domain,e="";try{if(Object(m.a)(t),this.topasset.owner&&!this.topasset.openApplied)throw 10012;return!0}catch(a){switch(a){case 1e4:e=t+" "+this.$t("l.Illegal");break;case 10001:e=this.$t("code.10001",{max:m.d});break;case 10002:e=t+" "+this.$t("l.ErrorHasSpecialCharacter");break;case 10003:e=t+" 域名超过二级";break;case 10004:e=t+" "+this.$t("l.ErrorHasUpperCase");break;case 10012:e=t+" "+this.$t("l.ErrorHasSpecialCharacter");break;default:e=t+" "+this.$t("l.Illegal")}return this.$message(this.$basTip.error(e)),!1}},commitRegist:function(){var t=this;return c()(i.a.mark(function e(){var a,r,s,n,o,c,u,l,p;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.domain,t.validForm()){e.next=3;break}return e.abrupt("return");case 3:if(!t.$store.getters.metaMaskDisabled){e.next=6;break}return t.$metamask(),e.abrupt("return");case 6:if(r=Object(m.l)(a),s=t.$store.getters["dapp/web3State"],n=s.chainId,o=t.subUnitPrice,!(parseFloat(o)<=0)){e.next=14;break}return c=t.$t("p.SaleOnPriceUnitBasValidError",{begin:0,end:Object(b.u)(m.e)}),t.$message(t.$basTip.error(c)),e.abrupt("return");case 14:return e.prev=14,e.next=17,Object(h.d)(a,n,!r);case 17:if(!e.sent){e.next=21;break}return t.$message(t.$basTip.error(t.$t("code.200002",{domaintext:a}))),e.abrupt("return");case 21:e.next=27;break;case 23:return e.prev=23,e.t0=e.catch(14),e.abrupt("return");case 27:if(!r){e.next=35;break}return u=Object(m.g)(a.trim().toLowerCase()),l=u.subtext,p=u.toptext,e.next=33,t.commitSubRegisting(l,p);case 33:e.next=37;break;case 35:return e.next=37,t.commitTopRegisting(a);case 37:case"end":return e.stop()}},e,t,[[14,23]])}))()},commitSubRegisting:function(t,e){var a=this;return c()(i.a.mark(function r(){var n,o,c,u,l,p,d;return i.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n=a.$store.getters["dapp/web3State"],o=n.chainId,c=n.wallet,u={isSubDomain:!0,domainText:t,topText:e,openApplied:!1,isCustomed:!1,customPriceWei:Object(b.e)(a.subUnitPrice+""),costWei:0,years:a.years,chainId:o,wallet:c},r.prev=4,a.ctrl.loading=!0,r.next=8,preCheck4Sub(e,t,a.years,o,c);case 8:l=r.sent,a.ctrl.loading=!1,p=s()({},u,{hash:l.hash,costWei:l.costwei}),a.$router.push({name:"domain.applyresult",params:{commitData:p}}),r.next=34;break;case 15:r.prev=15,r.t0=r.catch(4),a.ctrl.loading=!1,d="",r.t1=r.t0,r.next=r.t1===DOMAIN_HAS_TAKEN?22:r.t1===DOMAIN_FORMAT_ILLEGAL?22:r.t1===ROOT_REGIST_CLOSE?25:r.t1===DOMAIN_TOP_EXPIRED?25:r.t1===LACK_OF_TOKEN?28:r.t1===LACK_OF_ETH?28:r.t1===DOMAIN_FORMAT_ILLEGAL?30:32;break;case 22:return d=a.$t("code."+r.t0,{text:t}),a.$message(a.$basTip.error(d)),r.abrupt("return");case 25:return d=a.$t("code."+r.t0,{text:e}),a.$message(a.$basTip.error(d)),r.abrupt("return");case 28:return a.$message(a.$basTip.error(a.$t("code."+r.t0))),r.abrupt("return");case 30:return r.abrupt("return");case 32:return r.abrupt("break",33);case 33:case 34:case"end":return r.stop()}},r,a,[[4,15]])}))()},commitTopRegisting:function(t){var e=this;return c()(i.a.mark(function a(){var r,n,o,c,u,l,p,d;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return"",r=e.$store.getters["dapp/web3State"],n=r.chainId,o=r.wallet,Object(b.e)(e.getTotal),c=Object(b.e)(e.subUnitPrice),u={isSubDomain:!1,domainText:t,openApplied:e.openApplied,isCustomed:e.isCustomed,customPriceWei:c,years:e.years,chainId:n,wallet:o},l={domaintext:t,isCustomed:e.isCustomed,customWei:c,years:e.years,chainId:n,wallet:o},a.prev=9,e.ctrl.loading=!0,a.next=13,preCheck4Root(l);case 13:p=a.sent,e.ctrl.loading=!1,e.$router.push({name:"domain.applyresult",params:{commitData:s()({},u,{costWei:p.costwei,hash:p.hash})}}),a.next=37;break;case 18:a.prev=18,a.t0=a.catch(9),e.ctrl.loading=!1,d="",a.t1=a.t0,a.next=a.t1===DOMAIN_HAS_TAKEN?25:a.t1===DOMAIN_FORMAT_ILLEGAL?25:a.t1===ROOT_REGIST_CLOSE?28:a.t1===DOMAIN_TOP_EXPIRED?28:a.t1===LACK_OF_TOKEN?31:a.t1===LACK_OF_ETH?31:a.t1===DOMAIN_FORMAT_ILLEGAL?33:35;break;case 25:case 28:return d=e.$t("code."+a.t0,{text:t}),e.$message(e.$basTip.error(d)),a.abrupt("return");case 31:return e.$message(e.$basTip.error(e.$t("code."+a.t0))),a.abrupt("return");case 33:return a.abrupt("return");case 35:return a.abrupt("break",36);case 36:case 37:case"end":return a.stop()}},a,e,[[9,18]])}))()}},created:function(){this.getFavourItems()},mounted:function(){this.domain=this.$route.params.domainText;var t=Object(b.j)(this.domain);t&&this.loadTopasset(t)},watch:{domain:function(t,e){if(t&&t!==e&&Object(m.l)(t)){var a=Object(b.j)(t);a?this.loadTopasset(a):this.resetTopAsset()}}}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{staticClass:"bas-white-bg",attrs:{gutter:20}},[a("el-col",{staticClass:"bas-fav-info",attrs:{span:24}},[a("div",{staticClass:"bas-card__header"},[a("div",{staticClass:"bas-card__header-title"},[t._v("\n          "+t._s(t.$t("l.walletFav"))+"\n        ")])]),t._v(" "),a("div",{staticClass:"bas-gray-split"}),t._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.ctrl.loading,expression:"ctrl.loading"}],staticClass:"bas-card__body bas-border-none"},[a("div",{staticClass:"not-taken"},[a("h5",{staticClass:"not-taken"},[t._v(t._s(t.$t("l.notTaken")))]),t._v(" "),a("el-table",{ref:"multipleTableRef",staticStyle:{width:"100%"},attrs:{data:t.favourTableData},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{"header-align":"left",align:"left","class-name":"column-domains",label:"Domains","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.domains))]}}])}),t._v(" "),a("el-table-column",{attrs:{"header-align":"left",align:"left",property:"type",formatter:t.translateType,label:"Type",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{"header-align":"left",align:"left",property:"price",label:"Price",width:"60"}}),t._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",property:"duration",label:"Duration","show-overflow-tooltip":"","min-width":"240"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v("year")]),t._v(" "),a("el-input-number",{attrs:{precision:2,step:1,"controls-position":"",min:t.minsubBas},on:{change:t.customedPriceChanged},model:{value:e.row.duration,callback:function(a){t.$set(e.row,"duration",a)},expression:"scope.row.duration"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{"header-align":"left",align:"left","class-name":"column-domains",label:"Total"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.price*e.row.duration))]}}])}),t._v(" "),a("el-table-column",{attrs:{"header-align":"left",align:"left",label:"Favourite","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{cursor:"pointer"},attrs:{src:e.row.isFavor?"/static/icons/favour.svg":"/static/icons/unfavour.svg",alt:""},on:{click:function(a){return t.deFavour(e.row)}}})]}}])})],1)],1)])])],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{staticClass:"text-center regist-footer",attrs:{span:24}},[a("div",{staticClass:"total"},[a("span",{staticStyle:{color:"#fff"}},[t._v(t._s(t.$t("l.Total"))+":")]),t._v(" "),a("h2",{staticClass:"d-inline bas-text-green"},[t._v(t._s(t.getTotal))]),t._v(" "),a("span",{staticClass:"bas-text-green"},[t._v("UDID")])]),t._v(" "),a("div",{staticClass:"bas-card__footer"},[a("button",{staticClass:"btn bas-btn-primary",on:{click:t.commitRegist}},[t._v("\n          "+t._s(t.$t("l.RegistBtn"))+"\n        ")])])])],1)],1)},staticRenderFns:[]};var _=a("VU/8")(v,g,!1,function(t){a("CnXM")},null,null);e.default=_.exports}});
//# sourceMappingURL=44.1db103c4fba1877bbc7d.js.map