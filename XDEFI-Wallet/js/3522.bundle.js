!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e814059f-5077-4ec5-9908-8705009ba20a",e._sentryDebugIdIdentifier="sentry-dbid-e814059f-5077-4ec5-9908-8705009ba20a")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"28.2.2"},(self.webpackChunkxdefi_extension=self.webpackChunkxdefi_extension||[]).push([[3522],{43522:(e,n,i)=>{i.a(e,(async(e,t)=>{try{i.r(n),i.d(n,{default:()=>B});var o=i(785893),a=i(474087),r=i(646284),l=i(835534),s=i(691438),d=i(739989),u=i(281672),c=i(667294),p=i(230811),f=i(363119),g=i(63081),x=i(977710),v=i(25022),m=i(162318),h=i(184698),w=i(284755),b=i(851892),y=i(626423),I=i(308787),Z=i(972819),P=i(519416),k=i(919376),j=i(921705),C=i(123226),S=e([r,l,u,g,m,h,w,I,Z,k,j]);[r,l,u,g,m,h,w,I,Z,k,j]=S.then?(await S)():S;var F=Math.pow;const B=({transactionMsg:e})=>{var n,i,t,S;const{t:B}=(0,p.$G)("app"),{onRequestPermission:L}=(0,h.gI)(),[D,T]=(0,c.useState)(!1),{addNotification:M}=(0,Z.Z)(),_=(0,u.UW)(),$=(0,u.fU)(),E=(0,u.JB)(),N=(0,u.nl)(),R=(0,u.Ni)(),{requireTxPassword:A}=(0,f.v9)((e=>e.settings)),[q,G]=(0,c.useState)(0),[O,z]=(0,c.useState)(0),[W,U]=(0,c.useState)(void 0),J=(0,f.v9)((e=>e.wallets.wallets[e.wallets.activeWalletId])),[V,Y]=(0,c.useState)(void 0),H=(0,c.useMemo)((()=>{var n;return(null==(n=e.origin)?void 0:n.url)||""}),[null==(n=e.origin)?void 0:n.url]),K=(0,c.useMemo)((()=>{var n,i,t,o;return null!=(o=null==(t=null==(i=null==(n=e.raw)?void 0:n.params)?void 0:i.signOptions)?void 0:t.preferNoSetFee)&&o}),[e]),Q=(0,c.useMemo)((()=>$.getChainControllerById(e.chainId)),[e.chainId,$]),X=(0,c.useCallback)((e=>{var n,i,t,o,a,r,l,d,u,c,p,f,g,v,m,h,w,b,I,Z,P,k,j;const C=((null==e?void 0:e.msgs)&&(null==(n=null==e?void 0:e.msgs)?void 0:n.length)>0?null==(t=null==(i=null==e?void 0:e.msgs[0].value)?void 0:i.token_in)?void 0:t.denom:void 0)||(null==(l=null==(r=null==(a=null==(o=null==e?void 0:e.authInfo)?void 0:o.fee)?void 0:a.amount)?void 0:r[0])?void 0:l.denom)||(null==(c=null==(u=null==(d=null==e?void 0:e.fee)?void 0:d.amount)?void 0:u[0])?void 0:c.denom),S=(null==(p=null==e?void 0:e.fee)?void 0:p.gas)||(null==(v=null==(g=null==(f=null==e?void 0:e.authInfo)?void 0:f.fee)?void 0:g.gasLimit)?void 0:v.low);if(Q.support(s.B.NativeSupport)&&C){const e=y.hv[Q.getConfig().network.chainId];if(C!==x.G8[e]){const n=null==(m=E.topTokens[e])?void 0:m.find((e=>(null==e?void 0:e.address)===C));U(null!=(w=null==n?void 0:n.symbol)?w:null==(h=Q.getConfig().tokenSymbol)?void 0:h.toUpperCase())}else U(C)}S&&z(S),K&&Y((null==(Z=null==(I=null==(b=e.authInfo)?void 0:b.fee)?void 0:I.amount)?void 0:Z[0].amount)||(null==(k=null==(P=null==e?void 0:e.fee)?void 0:P.amount)?void 0:k[0].amount)||(null==(j=null==e?void 0:e.fee)?void 0:j.gas))}),[E.topTokens,e.chainId]);(0,c.useEffect)((()=>{var n,i,t,o,r;let l;switch(null==(n=null==e?void 0:e.raw)?void 0:n.type){case"request-sign-direct":if(l=null==(t=null==(i=null==e?void 0:e.raw)?void 0:i.params)?void 0:t.signDoc,l){const e=g.ZP.parseRawSignDoc(l),n=(0,a.decodeTxRaw)((0,a.makeSignBytes)(e));X(n)}break;case"request-sign-amino":l=null==(r=null==(o=null==e?void 0:e.raw)?void 0:o.params)?void 0:r.signDoc,l&&X(l)}}),[e,null==(i=null==e?void 0:e.raw)?void 0:i.type,null==(t=null==e?void 0:e.raw)?void 0:t.params,X]);const{openDialog:ee,onCloseDialog:ne,handleConfirm:ie}=(0,r.useConfirmDialog)((n=>{return i=void 0,t=null,o=function*(){if(d.Z.debug({method:"handleApprove"}),d.Z.debug({msg:"preMP",requireTxPassword:A}),A&&!n)return;const i=n||R.masterPassword;if(i){T(!0);try{const n=l.Z.getWalletIdWithMessage(e);yield _.approveDappsTransaction(e,n,v.GG.Transaction,{walletPassword:i},{feeAmount:q}),N.removeMessageById(e.xdefiId),window.close()}catch(n){if("TransportOpenUserCancelled"===(null==n?void 0:n.name))return M({title:B("alert.transaction.hardware.error.main.title"),type:"error",message:B("alert.transaction.hardware.error.main.message")}),L();if(null==n?void 0:n.message.includes("Invalid password"))return M({title:B("alert.wallet.password.error.incorrect.title"),type:"error",message:B("alert.wallet.password.error.incorrect.messages.try_again")});const i=(0,b.sJ)(n);d.Z.error("Transfer error",{error:i}),M({title:B("alert.transaction.errors.transfer.title"),type:"error",message:B((0,b.ZP)(i,s.J.Cosmos))}),d.Z.error({transactionMsg:"Error in message approval",e:n}),P.browser.runtime.sendMessage(void 0,{xdefiId:e.xdefiId,raw:{id:e.xdefiId,error:JSON.stringify(n)}})}finally{T(!1)}d.Z.info("end handleApprove")}},new Promise(((e,n)=>{var a=e=>{try{l(o.next(e))}catch(e){n(e)}},r=e=>{try{l(o.throw(e))}catch(e){n(e)}},l=n=>n.done?e(n.value):Promise.resolve(n.value).then(a,r);l((o=o.apply(i,t)).next())}));var i,t,o}));return(0,c.useEffect)((()=>{V&&G(Number(V))}),[O,V]),(0,o.jsx)(C.k,{body:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.ConfirmDialog,{open:ee,onClose:ne,onSubmit:ie}),(0,o.jsxs)(I.FlexBox,{height:"100%",children:[(0,o.jsx)(m.Z,{url:H,displayAmount:"0",action:"",defaultIcon:null!=(S=Q.getConfig().image)?S:Q.getConfig().fallbackImage,isTokenTransfer:!1,chainId:Q.getId(),fee:0,hasHeader:!1,visibleTransactionAmount:!1}),(0,o.jsx)(j.Z,{params:e.raw.params,method:e.raw.type}),!V&&(0,o.jsx)(k.R,{chainId:e.chainId,setFee:G,gasLimit:O}),(0,o.jsx)(w.Z,{handleConfirm:()=>ie(),fee:Number(q)/F(10,Q.getConfig().decimals),chainId:Q.getId(),assetSymbol:"",feeSymbol:W,errors:{},handleReject:()=>{d.Z.info("handleReject ",e),P.browser.runtime.sendMessage(null,{xdefiId:e.xdefiId,raw:{id:e.xdefiId,error:B("alert.transaction.errors.user_rejected_message_signing.message")}}),N.removeMessageById(e.xdefiId),window.close()},loading:D,selectedWallet:J})]})]})})};t()}catch(e){t(e)}}))},919376:(e,n,i)=>{i.a(e,(async(e,t)=>{try{i.d(n,{R:()=>g});var o=i(785893),a=i(942274),r=i(206508),l=i(667294),s=i(809739),d=i(281672),u=i(818117),c=i(691438),p=i(626423),f=e([r,d]);[r,d]=f.then?(await f)():f;const g=({chainId:e,setFee:n,gasLimit:i})=>{const[t,u]=(0,l.useState)(a.FeeOption.Fast),[f,g]=(0,l.useState)(),v=(0,d.fU)().getCosmosChainController(e);return(0,l.useEffect)((()=>{var e,n,t;e=void 0,n=null,t=function*(){const e=v.getConfig(),n=Number(e.defaultGasPrice);let t=i*n,o=1.3*t,r=1.3*o;try{if(v.support(c.B.NativeSupport)){const n=p.hv[e.network.chainId],{data:a}=yield(0,s.D)(n);if(a&&n in a){const e=a[n].fee;t=e.low*i,o=e.medium*i,r=e.high*i}}}finally{g({[a.FeeOption.Average]:Math.ceil(t),[a.FeeOption.Fast]:Math.ceil(o),[a.FeeOption.Fastest]:Math.ceil(r)})}},new Promise(((i,o)=>{var a=e=>{try{l(t.next(e))}catch(e){o(e)}},r=e=>{try{l(t.throw(e))}catch(e){o(e)}},l=e=>e.done?i(e.value):Promise.resolve(e.value).then(a,r);l((t=t.apply(e,n)).next())}))}),[v,e,i]),(0,l.useEffect)((()=>{f&&n(f[t])}),[t,i,f,n,v]),(0,o.jsx)(x,{children:(0,o.jsx)(r.jh,{slider:!1,setSpeedValue:u,speedValue:t})})},x=u.ZP.div`
  padding: 16px 0;
`;t()}catch(e){t(e)}}))},921705:(e,n,i)=>{i.a(e,(async(e,t)=>{try{i.d(n,{Z:()=>w});var o=i(785893),a=i(206508),r=i(308787),l=i(876777),s=i(818117),d=i(561277),u=i(255171),c=i.n(u),p=i(935527),f=e([a,r,p]);[a,r,p]=f.then?(await f)():f;const g=s.ZP.div`
  width: 100%;
  border-top: 1px solid ${l.wL.black};
  padding-bottom: 20px;
  border-bottom: 1px solid ${l.wL.black};
`,x=(0,s.ZP)(r.FlexBox)`
  width: 100%;
  max-height: 200px;
  overflow: overlay;
`,v=(0,s.ZP)(r.FlexBox).attrs({alignItems:"center",flexDirection:"row",justifyContent:"space-between"})`
  padding: 0px 10px;
  box-sizing: border-box;
`,m=(0,s.ZP)(r.FlexBox).attrs({alignItems:"flex-start"})`
  box-sizing: border-box;
  padding: 20px 10px;
  line-break: anywhere;
`,h=({params:e})=>"string"==typeof e?(0,o.jsx)(m,{children:(0,o.jsx)(d.Z,{children:e})}):(0,o.jsx)(c(),{src:e,enableClipboard:!1,collapseStringsAfterLength:20,displayDataTypes:!1,name:null,theme:"railscasts"}),w=({params:e,method:n})=>(0,o.jsxs)(g,{children:[(0,o.jsx)(a.xZ,{dashedLine:!0,functionType:n}),(0,o.jsx)(v,{children:(0,o.jsx)(x,{children:(0,o.jsx)(p.t2,{children:(0,o.jsx)(h,{params:e})})})})]});t()}catch(e){t(e)}}))},935527:(e,n,i)=>{i.a(e,(async(e,t)=>{try{i.d(n,{$0:()=>x,$_:()=>b,Dx:()=>p,Gh:()=>c,Sj:()=>y,TR:()=>f,VY:()=>d,W2:()=>g,dk:()=>w,fq:()=>h,h4:()=>u,im:()=>s,nB:()=>v,pu:()=>I,qo:()=>m,t2:()=>Z,to:()=>P});var o=i(818117),a=i(308787),r=i(876777),l=e([a]);a=(l.then?(await l)():l)[0];const s=o.ZP.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: ${r.wL.black};
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`,d=(0,o.ZP)(a.FlexBox)`
  flex-direction: column;
  width: 100%;
  padding-top: 10px;
  list-style: none;
  margin: 0;
  box-sizing: border-box;
  flex: 1 1 auto;
  overflow: auto;
  row-gap: 24px;

  li {
    margin-left: 0;

    &:first-child {
      margin-top: 10px;
    }
  }
`,u=o.ZP.div`
  display: flex;
  align-items: center;
  margin-bottom: 13px;
  padding: 20px;
  position: relative;
  overflow: hidden;
`,c=o.ZP.div`
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  padding-left: 12px;
  width: calc(100% - 15vw);
`,p=o.ZP.span`
  margin-top: 9px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
`,f=((0,o.ZP)(a.Link)`
  text-align: unset;
`,o.ZP.i`
  width: 44px;
  height: 44px;
  background: ${r.wL.deepSea};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`),g=o.ZP.div`
  background: ${r.wL.black};
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  overflow: auto;
`,x=o.ZP.section`
  letter-spacing: 0.35px;
  padding: 10px;
  border-bottom: 1px solid ${r.wL.black};
  border-top: 1px solid ${r.wL.black};
  display: flex;
  flex-direction: row-reverse;
`,v=(0,o.ZP)(a.FlexBox)`
  min-width: 72px;
  height: 21px;
  background-color: ${r.wL.darkGrey};
  border-radius: 54px;
  align-items: center;
  justify-content: center;
`,m=(0,o.ZP)(a.FlexBox)`
  flex: 1;
  text-align: right;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`,h=o.ZP.img`
  width: 17px;
  height: 17px;
  margin-right: 3px;
`,w=o.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 15px;

  svg {
    margin-right: 5px;
  }
`,b=o.ZP.div`
  display: flex;
  flex-direction: row;
  z-index: 3;
`,y=(0,o.ZP)(a.SecondaryButton)`
  margin-right: 10px;
`,I=(0,o.ZP)(a.PrimaryButton)``,Z=o.ZP.div`
  margin-left: 10px;
  overflow-x: auto;

  > .react-json-view {
    word-break: break-all;
  }
`,P=(0,o.ZP)(a.FlexBox).attrs({padding:"22px 8px 8px 8px",alignItems:"center"})`
  background: ${r.wL.mineShaft};
  border-radius: 8px;
  row-gap: 16px;
`;(0,o.ZP)(a.ConfirmLedger)`
  position: fixed;
  height: 90px;
`;t()}catch(e){t(e)}}))}}]);
//# sourceMappingURL=3522.bundle.js.map