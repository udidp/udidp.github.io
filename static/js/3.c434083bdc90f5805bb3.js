webpackJsonp([3],{DkYo:function(t,e){},XLLr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("Dd8w"),a=s.n(o),n=s("ao7l"),i=s("rppN"),r=s("zmqR"),l=s("qCo/"),c=s("mjc8"),d={name:"Products",components:{VLayout:n.a,PageContainer:i.a,FootContainer:r.a},computed:a()({isChrome:function(){return"chrome"===BasRuntime.browser},getBrowserLogo:function(){return"firefox"===BasRuntime.browser?"firefox_logo":"chrome_logo"},getBrowserStore:function(){return"firefox"===BasRuntime.browser?"Firefox ADD-ONS":"Chrome web store"}},Vuex.mapState({isCN:function(t){return"zh-CN"===t.lang}})),data:function(){return{browser:"",extension:{slogan:"Blockchain Addresss Alias Refferer",subtilte:"Blockchain Addresss Alias Refferer"},wallet:{},explorer:{os:"mac",title:"BAS Explorer",about:"浏览器介绍....",osText:"Get BAS Explorer For MAC"}}},methods:{openChromeExtension:function(){var t=c.a;window.open(t,"Chrowe Extension")},openFirefoxExt:function(){var t=c.b;window.open(t,"Firfox Extension")},OfflineExtDownload:function(){var t=Object(c.g)(BasRuntime.browser);window.open(t)},openExtfansDownloadPage:function(t){var e=Object(c.f)(t);window.open(e,t)},downloadApp:function(t){this.$message(this.$basTip.warn(t+" Come soon..."))},downloadExplorerHandle:function(){var t=Object(c.d)(c.c);window.open(t)},selectOsCmd:function(t){switch(t){case"mac":default:this.explorer.osText="Get BAS Explorer For MAC",this.explorer.os="mac"}},gotoStore4DownloadMetaMask:function(){var t=Object(l.a)(BasRuntime.browser);t&&window.open(t,"MetaMask Extension")}},mounted:function(){var t=this.$route.params.anchor;if(t)var e=setInterval(function(){var s=document.querySelector("#"+t);s&&s.scrollIntoView(),clearInterval(e)},100)}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",[s("page-container",[s("div",{staticClass:"download-product--header",attrs:{slot:"header"},slot:"header"},[s("div",{staticClass:"container",attrs:{id:"dlExtension"}},[s("div",{staticClass:"row justify-content-center align-items-center"},[s("h1",{staticClass:"header-slogan"},[t._v("\n            Blockchain Addresss Alias Refferer\n          ")])]),t._v(" "),s("div",{staticClass:"row justify-content-center align-items-center"},[s("p",{staticStyle:{"font-size":"30px","font-weight":"200","margin-top":"1rem"}},[t._v("The Blockchain Address Service Extension")])]),t._v(" "),s("div",{staticClass:"row justify-content-center align-items-center pt-lg-5"},[s("div",{staticClass:"col-9 products-download-wrapper"},[s("div",{staticClass:"dl-w-box--left"},[s("div",{staticClass:"extension-box chrome-bg",on:{click:t.openChromeExtension}},[s("div",{staticClass:"bottom-text-box text-center"},[s("span",[t._v("\n                     "+t._s(t.$t("p.ProductsChromeWebstoreBottomTips"))+"\n                  ")])])]),t._v(" "),s("div",{staticClass:"extension-box firefox-bg",on:{click:t.openFirefoxExt}},[s("div",{staticClass:"bottom-text-box text-center"},[s("span",[t._v("\n                    "+t._s(t.$t("p.ProductsFirefoxAddOnsBottomTips"))+"\n                  ")])])])]),t._v(" "),s("div",{staticClass:"dl-w-box--right"},[s("div",{staticClass:"extension-box offline-bg",class:t.isCN?"offline-bg":"offline-bg-en",on:{click:t.OfflineExtDownload}}),t._v(" "),s("div",{staticClass:"extension-box",class:t.isCN?"external-bg":"external-bg-en",on:{click:function(e){return t.openExtfansDownloadPage("BAS")}}}),t._v(" "),s("div",{staticClass:"wenzi-float"},[s("h6",[t._v("\n                  "+t._s(t.$t("p.ProductsOfflineDownloadBottomTips"))+"\n                ")])])])])])])]),t._v(" "),s("div",{staticClass:"products-body",attrs:{slot:"body"},slot:"body"},[s("div",{class:t.isCN?"wallet-bg-wrapper":"wallet-bg-wrapper-en"},[s("div",{staticClass:"bas-wallet-left"},[s("div",{staticClass:"bas-wallet--inner"},[s("h1",[t._v(t._s(t.$t("p.ProductsBASWalletTitle")))]),t._v(" "),s("div",{staticClass:"mt-4",attrs:{id:"dlWallet"}},[s("a",{on:{click:function(e){return t.downloadApp("ios")}}},[t._v("\n                "+t._s(t.$t("p.WalletDownloadIphone"))+"\n              ")])]),t._v(" "),s("div",{staticClass:"mb-4"},[s("a",{on:{click:function(e){return t.downloadApp("ios")}}},[t._v("\n                "+t._s(t.$t("p.WalletDownloadAndroid"))+"\n              ")])]),t._v(" "),s("div",{staticClass:"bas-qrcode-wrapper"},[s("div",{staticClass:"qrcode-wallet"})]),t._v(" "),s("div",{staticClass:"mt-2"},[s("p",[t._v("\n                "+t._s(t.$t("p.ProductsQRCodeDesc"))+"\n              ")])])])])]),t._v(" "),s("div",{class:t.isCN?"explorer-bg-wrapper":"explorer-bg-wrapper-en"},[s("div",{staticClass:"bas-explorer-left"},[s("div",{staticClass:"bas-explorer-inner"},[s("h1",{staticClass:"text-center mb-4"},[t._v("\n              "+t._s(t.explorer.title)+"\n            ")]),t._v(" "),s("div",{staticClass:"bas-extension--left"},[s("div",{staticClass:"mb-2",attrs:{id:"dlExplorer"}},[s("el-button",{staticClass:"explorer-download-btn",attrs:{type:"primary"},on:{click:t.downloadExplorerHandle}},[s("i",{staticClass:"fa fa-download"}),t._v("\n                   "+t._s(t.explorer.osText)+"\n                ")])],1)]),t._v(" "),s("div",{staticClass:"bas-explorer-content pt-2"},[s("p",{staticClass:"d-block"},[t._v("\n                "+t._s(t.$t("p.ProductsExplorerAboutContents"))+"\n              ")])])])])]),t._v(" "),s("div",{staticClass:"metamask-guide-wrapper"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center align-items-center"},[s("div",{staticClass:"col-6 text-right"},[s("div",{staticClass:"mt-5 bt-5"},[s("img",{staticClass:"img-fluid",attrs:{src:t.isCN?"/static/icons/dl_metamask.png":"/static/icons/dl_metamask_en.png"}})])]),t._v(" "),s("div",{staticClass:"col-6 text-left"},[s("div",{staticClass:"d-block ml-5"},[s("div",[s("h3",[t._v("MetaMask")])]),t._v(" "),s("div",{staticClass:"metamask-store pt-2"},[s("span",[t._v("\n                   "+t._s(t.$t("p.MetaMaskCanVisitWebsitePrfix"))+" "+t._s(t.getBrowserStore)+","+t._s(t.$t("p.ClickDownload"))+"\n                  ")]),t._v(" "),t.isChrome?s("div",{staticClass:"dl-metamask-link chrome-logo",on:{click:t.gotoStore4DownloadMetaMask}}):t._e(),t._v(" "),t.isChrome?t._e():s("div",{staticClass:"dl-metamask-link firefox-logo",on:{click:t.gotoStore4DownloadMetaMask}})]),t._v(" "),s("div",{staticClass:"metamask-store pt-2"},[s("span",[t._v("\n                    "+t._s(t.$t("p.MetaMaskCannotVisitWebsitePrfix"))+t._s(t.getBrowserStore)+","+t._s(t.$t("p.SelcetedOfflineInstallAppend"))+",\n                  ")]),t._v(" "),s("a",{staticClass:"bas-link",on:{click:function(e){return t.openExtfansDownloadPage("MetaMask")}}},[t._v("\n                     "+t._s(t.$t("p.ClickHereDownload"))+"\n                  ")])])])])])])])]),t._v(" "),s("foot-container",{attrs:{slot:"footer"},slot:"footer"})],1)],1)},staticRenderFns:[]};var v=s("VU/8")(d,p,!1,function(t){s("nrkf"),s("DkYo")},null,null);e.default=v.exports},nrkf:function(t,e){}});
//# sourceMappingURL=3.c434083bdc90f5805bb3.js.map