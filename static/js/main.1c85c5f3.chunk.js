(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{246:function(n,t){},255:function(n,t){},273:function(n,t){},275:function(n,t){},294:function(n,t){},295:function(n,t){},358:function(n,t){},360:function(n,t){},393:function(n,t){},395:function(n,t){},396:function(n,t){},401:function(n,t){},403:function(n,t){},409:function(n,t){},411:function(n,t){},424:function(n,t){},436:function(n,t){},439:function(n,t){},444:function(n,t){},452:function(n,t){},461:function(n,t){},463:function(n,t){},533:function(n,t,e){},534:function(n,t,e){"use strict";e.r(t);var c,r,o,a,i,s,l,d,u,p,x,j,b,h,O,f,g,y,m,v=e(1),C=e(85),w=e.n(C),E=e(16),A=e.n(E),N=e(43),T=e(69),S=e(13),_=e(58),k=e(68),M=e.n(k),I=e(220),D=e.n(I),L=e(70),F=e(221),R=e(19),K={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},P=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(R.a)(Object(R.a)({},K),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(R.a)(Object(R.a)({},n),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(R.a)(Object(R.a)({},K),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(R.a)(Object(R.a)({},n),{},{account:t.payload.account});default:return n}},U={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},W=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(R.a)(Object(R.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(R.a)(Object(R.a)({},n),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(R.a)(Object(R.a)({},U),{},{loading:!1,error:!0,errorMsg:t.payload});default:return n}},z=Object(L.b)({blockchain:P,data:W}),G=[F.a],H=Object(L.c)(L.a.apply(void 0,G)),Y=Object(L.d)(z,H),B=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},Q=function(){return function(){var n=Object(N.a)(A.a.mark((function n(t){var e;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,Y.getState().blockchain.smartContract.methods.totalSupply().call();case 4:e=n.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:e}}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),t(B("Could not load data from contract."));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}()},V=function(n){return{type:"CONNECTION_FAILED",payload:n}},q=function(n){return function(){var t=Object(N.a)(A.a.mark((function t(e){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:"UPDATE_ACCOUNT",payload:{account:n}}),e(Q());case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},X=e(14),J=X.a.div(c||(c=Object(S.a)(["\n  background-color: white;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"})),Z=X.a.div(r||(r=Object(S.a)(["\n  height: 8px;\n  width: 8px;\n"]))),$=X.a.div(o||(o=Object(S.a)(["\n  height: 16px;\n  width: 16px;\n"]))),nn=X.a.div(a||(a=Object(S.a)(["\n  height: 24px;\n  width: 24px;\n"]))),tn=X.a.div(i||(i=Object(S.a)(["\n  height: 32px;\n  width: 32px;\n"]))),en=X.a.div(s||(s=Object(S.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: row;\n  overflow: hidden;  \n"]))),cn=X.a.div(l||(l=Object(S.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  align-items: ",";\n  background-color: ",";\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  height: 100%;\n  overflow: hidden;\n"])),(function(n){var t=n.flex;return t||1}),(function(n){var t=n.fd;return t||"column"}),(function(n){var t=n.ai;return t||"flex-start"}),(function(n){return n.test?"pink":"none"}),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"})),rn=X.a.div(d||(d=Object(S.a)(["\n  width: 0.22em;\n  background-color: #000000;\n"]))),on=X.a.p(u||(u=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),an=(X.a.p(p||(p=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),X.a.p(x||(x=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),sn=(X.a.div(j||(j=Object(S.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),e(2)),ln=X.a.div(b||(b=Object(S.a)(["\n  background-color: var(--accent);\n  min-height: 150px;\n  display: flex;\n  flex-direction: column;\n  color: var(--accent-text);\n  justify-content: center;\n  text-align: center;\n\n  h1 {\n    font-size: 48px;\n    font-style: bold;\n  }\n\n  h2 {\n    font-size: 24px;\n    padding-top: 10px;\n  }\n"]))),dn=function(n){return Object(sn.jsxs)(ln,{children:[Object(sn.jsx)("h1",{children:n.nftName}),Object(sn.jsx)("h2",{children:n.nftCaption})]})},un=X.a.button(h||(h=Object(S.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 180px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),pn=X.a.button(O||(O=Object(S.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--secondary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),xn=(X.a.div(f||(f=Object(S.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),X.a.img(g||(g=Object(S.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),X.a.img(y||(y=Object(S.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 320px;\n  }\n  @media (min-width: 1000px) {\n    width: 420px;\n  }\n  transition: width 0.5s;\n"])))),jn=X.a.a(m||(m=Object(S.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var bn=function(){var n=Object(_.b)(),t=Object(_.c)((function(n){return n.blockchain})),e=Object(_.c)((function(n){return n.data})),c=Object(v.useState)(!1),r=Object(T.a)(c,2),o=r[0],a=r[1],i=Object(v.useState)("Multiple NFTs can be minted at once."),s=Object(T.a)(i,2),l=s[0],d=s[1],u=Object(v.useState)(1),p=Object(T.a)(u,2),x=p[0],j=p[1],b=Object(v.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),h=Object(T.a)(b,2),O=h[0],f=h[1],g=Object(sn.jsxs)("p",{children:["Congrats!!! The ",O.NFT_NAME," is yours!"]}),y=function(){""!==t.account&&null!==t.smartContract&&n(Q(t.account))},m=function(){var n=Object(N.a)(A.a.mark((function n(){var t,e;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=n.sent,n.next=5,t.json();case 5:e=n.sent,f(e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(v.useEffect)((function(){m()}),[]),Object(v.useEffect)((function(){y()}),[t.account]),Object(sn.jsx)(sn.Fragment,{children:Object(sn.jsxs)(J,{children:[Object(sn.jsx)(dn,{nftName:O.NFT_NAME,nftCaption:O.NFT_CAPTION}),Object(sn.jsxs)(en,{children:[Object(sn.jsxs)(cn,{style:{overflowY:"auto",padding:"30px"},children:[Object(sn.jsxs)(en,{style:{justifyContent:"space-between"},children:[Object(sn.jsx)(an,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(sn.jsxs)(jn,{target:"_blank",href:O.MARKETPLACE_LINK,children:["View on "," ",O.MARKETPLACE]})}),Object(sn.jsx)(an,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(sn.jsxs)(jn,{target:"_blank",href:O.SCAN_LINK,children:["View on "," ",O.NETWORK.NAME]})})]}),Object(sn.jsx)(tn,{}),Object(sn.jsx)(on,{children:O.NFT_NAME}),Object(sn.jsx)(Z,{}),Object(sn.jsx)(an,{children:O.NFT_OVERVIEW}),Object(sn.jsx)(tn,{}),Object(sn.jsx)(on,{children:"Please Note"}),Object(sn.jsxs)(an,{children:["Make sure you are connected to the right network (",O.NETWORK.NAME,") and the correct address."]}),Object(sn.jsx)(Z,{}),Object(sn.jsx)(an,{children:"Once you make the purchase, you cannot undo this action."}),Object(sn.jsx)(Z,{}),Object(sn.jsxs)(an,{children:["We have set the gas limit to ",O.GAS_LIMIT," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]}),Object(sn.jsx)(Z,{}),Object(sn.jsx)(an,{children:"The Mint price mentioned doesn't include Gas Fee."}),Object(sn.jsx)(Z,{})]}),Object(sn.jsx)(rn,{}),Object(sn.jsxs)(cn,{ai:"center",style:{background:"var(--primary)",minHeight:"calc(100vh - 150px)"},children:[Object(sn.jsxs)(on,{style:{fontSize:50,fontWeight:"bold",color:"var(--primary-text)"},children:[e.totalSupply," / ",O.MAX_SUPPLY]}),Object(sn.jsx)(Z,{}),Object(sn.jsx)(xn,{alt:"God's Eye",src:"/logo512.png"}),Object(sn.jsx)(Z,{}),Object(sn.jsxs)(on,{style:{textAlign:"center",color:"var(--primary-text)"},children:["1 ",O.NFT_NAME," costs ",O.DISPLAY_COST," ",O.NETWORK.SYMBOL]}),Object(sn.jsx)($,{}),Number(e.totalSupply)>=O.MAX_SUPPLY?Object(sn.jsx)(on,{style:{textAlign:"center",color:"var(--primary-text)"},children:"The sale has ended."}):Object(sn.jsx)(sn.Fragment,{children:""===t.account||null===t.smartContract?Object(sn.jsxs)(cn,{ai:"center",jc:"center",children:[Object(sn.jsxs)(an,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Connect to the ",O.NETWORK.NAME," network"]}),Object(sn.jsx)(tn,{}),Object(sn.jsx)(un,{onClick:function(t){t.preventDefault(),n(function(){var n=Object(N.a)(A.a.mark((function n(t){var e,c,r,o,a,i,s,l,d;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CONNECTION_REQUEST"}),n.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return e=n.sent,n.next=6,e.json();case 6:return c=n.sent,n.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=n.sent,n.next=12,r.json();case 12:if(o=n.sent,a=window,!(i=a.ethereum)||!i.isMetaMask){n.next=33;break}return M.a.setProvider(i),s=new D.a(i),n.prev=18,n.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=n.sent,n.next=24,i.request({method:"net_version"});case 24:n.sent==o.NETWORK.ID?(d=new M.a(c,o.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),i.on("accountsChanged",(function(n){t(q(n[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):t(V("Change network to ".concat(o.NETWORK.NAME,"."))),n.next=31;break;case 28:n.prev=28,n.t0=n.catch(18),t(V("Something went wrong."));case 31:n.next=34;break;case 33:t(V("Install Metamask."));case 34:case"end":return n.stop()}}),n,null,[[18,28]])})));return function(t){return n.apply(this,arguments)}}()),y()},children:"CONNECT"}),""!==t.errorMsg?Object(sn.jsx)(sn.Fragment,{children:Object(sn.jsx)(an,{style:{textAlign:"center",color:"var(--primary-text)"},children:t.errorMsg})}):null]}):Object(sn.jsxs)(sn.Fragment,{children:[Object(sn.jsx)(an,{style:{textAlign:"center",color:"var(--primary-text)"},children:l}),Object(sn.jsxs)(cn,{ai:"center",jc:"center",fd:"row",children:[Object(sn.jsx)(pn,{style:{lineHeight:.4},disabled:o?1:0,onClick:function(n){n.preventDefault(),function(){var n=x-1;n<1&&(n=1),j(n)}()},children:"-"}),Object(sn.jsx)(nn,{}),Object(sn.jsx)(an,{style:{textAlign:"center",color:"var(--primary-text)"},children:x}),Object(sn.jsx)(nn,{}),Object(sn.jsx)(pn,{disabled:o?1:0,onClick:function(n){n.preventDefault(),function(){var n=x+1;n>5&&(n=5),j(n)}()},children:"+"})]}),Object(sn.jsx)($,{}),Object(sn.jsx)(cn,{ai:"center",jc:"center",fd:"row",children:Object(sn.jsx)(un,{disabled:o?1:0,onClick:function(e){e.preventDefault(),function(){var e=O.WEI_COST,c=O.GAS_LIMIT,r=String(e*x),o=String(c*x);console.log("Cost: ",r),console.log("Gas limit: ",o),d("Minting your ".concat(O.NFT_NAME,"...")),a(!0),t.smartContract.methods.mint(x).send({gasLimit:String(o),to:O.CONTRACT_ADDRESS,from:t.account,value:r}).once("error",(function(n){console.log(n),d("Sorry, something went wrong please try again later."),a(!1)})).then((function(e){console.log(e),d(g),a(!1),n(Q(t.account))}))}(),y()},children:o?"MINTING ".concat(x," God's Eye"):"MINT ".concat(x," God's Eye")})})]})}),Object(sn.jsx)(tn,{}),Object(sn.jsx)(tn,{}),Object(sn.jsx)(tn,{})]})]})]})})},hn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,538)).then((function(t){var e=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;e(n),c(n),r(n),o(n),a(n)}))};e(533);w.a.render(Object(sn.jsx)(_.a,{store:Y,children:Object(sn.jsx)(bn,{})}),document.getElementById("root")),hn(console.log)}},[[534,1,2]]]);
//# sourceMappingURL=main.1c85c5f3.chunk.js.map