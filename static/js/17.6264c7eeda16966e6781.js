webpackJsonp([17],{QHZO:function(t,s){},"h/b+":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("woOf"),i=a.n(e),n=(a("pFYg"),a("g1m8")),o=a("x6sZ"),c=a("sGRa"),r={name:"CybersquattingResult",components:{LoadingDot:n.a},computed:{btnDisabled:function(){return!this.completed}},data:function(){return{completed:!1,domaintext:"",registState:"approving",commitData:{hash:"",isRoot:!0},transactions:[]}},methods:{addTxHashItem:function(t,s){this.transactions.push({hash:t,state:s})},updateTxHashItem:function(t,s){var a=this.transactions.findIndex(function(s){return s.hash===t});a>=0&&this.transactions.splice(a,1,{hash:t,state:s})},goback:function(){this.$router.go(-1)},commitApprove:function(){var t=this,s=this.$store.getters["dapp/web3State"],a=s.chainId,e=s.wallet,i=(this.commitData.spender,this.commitData.costwei);if(i&&a)Object(o.a)(i,a,e).on("transactionHash",function(s){t.registState="approving",t.addTxHashItem(s,"loading")}).on("receipt",function(s){s.status;t.updateTxHashItem(s.transactionHash,"success"),t.registState="confirming"}).on("error",function(s,a){t.registState="fail",a&&t.updateTxHashItem(a.transactionHash,"fail")}).catch(function(s){if(t.registState="fail",4001===s.code){var a=t.$t("code."+s.code);t.$message(t.$basTip.error(a))}else-32601===s.code&&s.message&&t.$message(t.$basTip.error(s.message))});else{this.$t("g.RefreshPageNotCommitAgain");this.$message(this.$basTip.error())}},domainSendTransaction:function(){var t=this.commitData,s=this,a=this.$store.getters.web3State,e=(a.chainId,t.wallet||a.wallet);if(t.isRoot){var n=i()({},t,{namebytes:t.name,wallet:e});Object(c.c)(n).on("transactionHash",function(t){s.addTxHashItem(t,"loading")}).on("receipt",function(t){t.status?(s.registState="success",s.updateTxHashItem(t.transactionHash,"success"),setTimeout(function(){s.$store.dispatch("ewallet/syncEWalletAssets",a)},1e3)):(s.registState="fail",s.updateTxHashItem(t.transactionHash,"fail")),s.completed=!0}).on("error",function(t,a){s.registState="fail",a&&s.updateTxHashItem(a.transactionHash,"fail")}).catch(function(t){if(s.registState="fail",4001===t.code){var a=s.$t("code."+t.code);s.$message(s.$basTip.error(a))}else-32601===t.code&&t.message&&s.$message(s.$basTip.error(t.message))})}else{var o=i()({},t,{wallet:e});Object(c.d)(o).on("transactionHash",function(t){s.addTxHashItem(t,"loading")}).on("receipt",function(t){t.status?(s.registState="success",s.updateTxHashItem(t.transactionHash,"success"),s.$store.dispatch("ewallet/syncEWalletAssets",a)):(s.registState="fail",s.updateTxHashItem(t.transactionHash,"fail")),s.completed=!0}).on("error",function(t,a){s.registState="fail",a&&s.updateTxHashItem(a.transactionHash,"fail")}).catch(function(t){if(s.registState="fail",4001===t.code){var a=s.$t("code."+t.code);s.$message(s.$basTip.error(a))}else-32601===t.code&&t.message&&s.$message(s.$basTip.error(t.message))})}},gotoWallet:function(){if(this.$store.getters.metaMaskDisabled)this.$metamask();else{var t=this.commitData.isRoot?"topasset":"subasset";this.$router.push({name:"wallet.layout",query:{activeName:t}})}},gotoUpdateDNS:function(){if(this.$store.getters.metaMaskDisabled)this.$metamask();else{var t=this.commitData,s=this.domaintext;this.$router.push({path:"/domain/updaterefdata/"+s,name:"domain.updaterefdata",params:{domaintext:s,hash:t.hash,expire:t.expire,owner:t.wallet,isRoot:t.isRoot,openApplied:!!t.isRoot&&t.openApplied,isCustomed:!!t.isRoot&&t.isCustomed,customedPrice:t.customedPrice}})}},continueRegist:function(){this.$router.go(-2)}},mounted:function(){var t=this.$route.query.domaintext;this.domaintext=t;var s=this.$route.params.commitData;s&&(this.commitData=i()(s),this.commitData.hash&&this.commitData.costwei&&this.commitApprove())},watch:{registState:function(t,s){"approving"===s&&"confirming"===t&&this.domainSendTransaction()}}},l={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"background-fill-wrapper bas-gray-bg"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center align-items-center"},[a("div",{staticClass:"col-md-8 col-sm-10 pb-2",staticStyle:{"padding-left":"0"}},[a("button",{staticClass:"bas-btn-goback",on:{click:t.goback}},[a("span",{staticClass:"text"},[t._v("\n            "+t._s(t.$t("l.GoBackPrevPage"))+"\n          ")])])])]),t._v(" "),a("div",{staticClass:"row justify-content-center align-items-center"},[a("el-card",{staticClass:"col-md-8 col-sm-10 box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("h4",[t._v("\n            Transaction Hash\n          ")])]),t._v(" "),t._l(t.transactions,function(s,e){return a("div",{key:e,staticClass:"text item bas-inline-between"},[a("div",{},[t._v(t._s(s.hash))]),t._v(" "),"loading"===s.state?a("div",[a("loading-dot")],1):"success"===s.state?a("div",[a("i",{staticClass:"fa fa-check bas-text-green"})]):"fail"===s.state?a("div",[a("i",{staticClass:"fa fa-close text-danger"})]):t._e()])})],2)],1),t._v(" "),a("div",{staticClass:"row justify-content-center align-items-center mt-3"},[a("el-card",{staticClass:"col-md-8 col-sm-10 box-card"},[a("div",{staticClass:"domain-regist--result-container text-center"},[a("img",{staticClass:"bas-bingo",attrs:{src:"/static/icons/bingo.png"}}),t._v(" "),"approving"==t.registState?a("h6",{staticClass:"bas-text-green mt-2"},[t._v("\n            "+t._s(t.$t("p.DomainRegistApprove"))+"\n          ")]):t._e(),t._v(" "),"confirming"==t.registState?a("h6",{staticClass:"bas-text-green mt-2"},[t._v("\n            "+t._s(t.$t("p.DomainRegistConfirm"))+"\n          ")]):t._e(),t._v(" "),"fail"==t.registState?a("h6",{staticClass:"text-danger mt-2"},[t._v("\n            "+t._s(t.$t("p.DomainRegistFail"))+"\n          ")]):t._e(),t._v(" "),"success"==t.registState?a("h6",{staticClass:"bas-text-green mt-2"},[t._v("\n            "+t._s(t.$t("p.DomainRegistSuccess"))+"\n          ")]):t._e(),t._v(" "),a("h2",{staticStyle:{"margin-top":".75rem"}},[t._v("\n            "+t._s(t.domaintext)+"\n          ")]),t._v(" "),"success"==t.registState?a("h6",{staticStyle:{color:"rgba(212,216,216,1)"}},[t._v("\n            "+t._s(t.$t("p.DomainRegistSuccessTip"))+"\n          ")]):t._e()]),t._v(" "),a("div",{staticClass:"w-100 bas-btn-group text-center"},[a("button",{staticClass:"w-25 mx-2 btn bas-btn-green-border",attrs:{disabled:t.btnDisabled},on:{click:t.gotoUpdateDNS}},[t.btnDisabled?a("i",{staticClass:"fa fa-ban"}):t._e(),t._v("\n            "+t._s(t.$t("l.ConfigurationDNS"))+"\n          ")]),t._v(" "),a("button",{staticClass:"w-25 mx-2 btn bas-btn-green-border",attrs:{disabled:t.btnDisabled},on:{click:t.gotoWallet}},[t.completed?t._e():a("i",{staticClass:"fa fa-ban"}),t._v("\n            "+t._s(t.$t("l.GtotoMyWallet"))+"\n          ")]),t._v(" "),a("button",{staticClass:"w-25 mx-2 btn",class:t.btnDisabled?"":"bas-btn-primary",attrs:{disabled:t.btnDisabled},on:{click:t.continueRegist}},[t.completed?t._e():a("i",{staticClass:"fa fa-ban"}),t._v("\n            "+t._s(t.$t("l.ApplyAgain"))+"\n          ")])])])],1)])])},staticRenderFns:[]};var d=a("VU/8")(r,l,!1,function(t){a("oF98"),a("QHZO")},null,null);s.default=d.exports},oF98:function(t,s){}});
//# sourceMappingURL=17.6264c7eeda16966e6781.js.map