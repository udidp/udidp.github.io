webpackJsonp([56],{ENLN:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("Ruar"),n=s("QioY"),i=s("g1m8"),o=(s("1rPB"),s("XS7b"),s("4s8G"),{name:"MarketBoughtResult",components:{LoadingDot:i.a},computed:{getTips:function(){var t=this.buyingState;return"approving"===t?this.$t("p.DomainRegistApprove"):"confirming"===t?this.$t("p.DomainRegistConfirm"):"success"===t?this.$t("g.OperateTipSuccess"):"fail"===t?this.$t("g.OperateTipFail"):""},btnDisabled:function(){return!this.ctrl.completed}},data:function(){return{ctrl:{completed:!1},buyingState:"approving",data:{},transactions:[]}},methods:{addTxHashItem:function(t,a){this.transactions.push({hash:t,state:a})},updateTxHashItem:function(t,a){var s=this.transactions.findIndex(function(a){return a.hash===t});s>=0&&this.transactions.splice(s,1,{hash:t,state:a})},commitApprove:function(){var t=this.data;if(!t.owner||!t.nameHash||!t.costWei)throw new Error("illegal arguments.");var a=this.$store.getters.web3State,s=a.chainId,i=a.wallet,o=Object(n.g)(s),r=this;Object(e.a)(o,t.costWei,s,i).on("transactionHash",function(t){r.buyingState="approving",r.addTxHashItem(t,"loading")}).on("receipt",function(t){r.buyingState="confirming",r.updateTxHashItem(t.transactionHash,"success")}).on("error",function(t,a){r.buyingState="fail",a&&r.updateTxHashItem(a.transactionHash,"fail")})},buySendTransaction:function(){var t=this.data,a=this.$store.getters.web3State,s=a.chainId,e=a.wallet,i=this;try{Object(n.b)(t.nameHash,t.owner,t.costWei,s,e).on("transactionHash",function(t){i.buyingState="confirming",i.addTxHashItem(t,"loading")}).on("receipt",function(t){i.updateTxHashItem(t.transactionHash,"success"),i.buyingState="success",i.ctrl.completed=!0}).on("error",function(t,a){i.buyingState="fail",a&&i.updateTxHashItem(a.transactionHash,"fail")})}catch(t){}},gotoUpdateDNS:function(){var t=this.data.domaintext;t&&this.$router.push({path:"/domain/dnsupdate/"+t})},gotoWallet:function(){this.$store.getters.metaMaskDisabled?this.$metamask():this.$router.push({name:"wallet.layout"})},gotoMarket:function(){this.$router.push({name:"market.index"})}},mounted:function(){this.data=this.$route.params.commitData,this.commitApprove()},watch:{buyingState:function(t,a){"approving"===a&&"confirming"===t&&this.buySendTransaction()}}}),r={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"bas-gray-bg w-100"},[s("div",{staticClass:"container bas-market-result"},[s("div",{staticClass:"row justify-content-center align-items-center pt-5"},[s("el-card",{staticClass:"col-md-8 col-sm-10 box-card",staticStyle:{padding:"10px 20px"},attrs:{shadow:"never"}},[s("h3",{staticClass:"text-center market-domain-title"},[t._v("\n            "+t._s(this.data.domaintext)+"\n          ")]),t._v(" "),s("p",{staticClass:"market-tips text-center bas-text-green"},[t._v("\n            "+t._s(t.getTips)+"\n          ")])])],1),t._v(" "),s("div",{staticClass:"row justify-content-center align-items-center"},[s("el-card",{staticClass:"col-md-8 col-sm-10 box-card",attrs:{shadow:"never"}},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("h4",[t._v("Transaction Hash")])]),t._v(" "),t._l(t.transactions,function(a,e){return s("div",{key:e,staticClass:"text item bas-inline-between"},[s("div",{},[t._v(t._s(a.hash))]),t._v(" "),"loading"===a.state?s("div",[s("loading-dot")],1):"success"===a.state?s("div",[s("i",{staticClass:"fa fa-check bas-text-green"})]):"fail"===a.state?s("div",[s("i",{staticClass:"fa fa-close text-danger"})]):t._e()])})],2)],1),t._v(" "),s("div",{staticClass:"row justify-content-center align-items-center pb-5"},[s("el-card",{staticClass:"col-md-8 col-sm-10 box-card",attrs:{shadow:"never"}},[s("div",{staticClass:"w-100 bas-btn-group text-center"},[s("button",{staticClass:"w-25 mx-2 btn bas-btn-green-border",attrs:{disabled:t.btnDisabled},on:{click:t.gotoUpdateDNS}},[t.btnDisabled&&this.buyingState?s("i",{staticClass:"fa fa-ban"}):t._e(),t._v("\n            "+t._s(t.$t("p.MarketBoughtConfigurationBtn"))+"\n          ")]),t._v(" "),s("button",{staticClass:"w-25 mx-2 btn bas-btn-green-border",attrs:{disabled:t.btnDisabled},on:{click:t.gotoWallet}},[t.btnDisabled?s("i",{staticClass:"fa fa-ban"}):t._e(),t._v("\n            "+t._s(t.$t("p.GotoMyWalletBtn"))+"\n          ")]),t._v(" "),s("button",{staticClass:"w-25 mx-2 btn",class:t.btnDisabled?"":"bas-btn-primary",attrs:{disabled:t.btnDisabled},on:{click:t.gotoMarket}},[t.btnDisabled?s("i",{staticClass:"fa fa-ban"}):t._e(),t._v("\n            "+t._s(t.$t("p.GobackMarketBtn"))+"\n          ")])])])],1)])])},staticRenderFns:[]};var c=s("VU/8")(o,r,!1,function(t){s("q03/")},"data-v-16df8a3f",null);a.default=c.exports},"q03/":function(t,a){}});
//# sourceMappingURL=56.8c8a3c2ca64329acf317.js.map