!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},i=(new Error).stack;i&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[i]="5320e5c9-25f6-4c0c-838f-c9abd5b78980",e._sentryDebugIdIdentifier="sentry-dbid-5320e5c9-25f6-4c0c-838f-c9abd5b78980")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"28.2.2"},(self.webpackChunkxdefi_extension=self.webpackChunkxdefi_extension||[]).push([[1833],{716792:(e,i,n)=>{"use strict";n.a(e,(async(e,t)=>{try{n.d(i,{Z:()=>S,l:()=>M});var r=n(785893),a=n(739989),s=n(814401),l=n(561277),d=n(458038),o=n(667294),c=n(230811),u=n(363119),p=n(996974),g=n(646284),x=n(18544),h=n(972819),f=n(835534),m=n(522933),v=n(281672),w=n(771341),b=n(308787),y=n(729154),j=n(876777),_=n(519416),Z=n(851892),k=n(935527),P=e([g,x,h,f,v,b,k]);[g,x,h,f,v,b,k]=P.then?(await P)():P;const I=["https://dashboard.xdefi.io","https://staking.xdefi.io","https://app.xdefi.io","https://app-beta.xdefi.io"],M=()=>{var e;const i=(0,p.TH)(),n=(0,v.UW)(),t=(0,u.v9)((e=>e.dappsMessages.messages)),r=(0,o.useMemo)((()=>{if(!i.search)return t[0];const e=new URLSearchParams(i.search).get("xdefiId");return t.find((i=>i.xdefiId.toString()===e))||t[0]}),[t,i]),a=(0,o.useMemo)((()=>{var e,i;return!(null==(i=null==(e=null==r?void 0:r.origin)?void 0:e.tab)?void 0:i.url)||!I.some((e=>{var i,n,t;return null==(t=null==(n=null==(i=null==r?void 0:r.origin)?void 0:i.tab)?void 0:n.url)?void 0:t.startsWith(e)}))}),[r]),s=r&&(null==(e=n.chains.getChainControllerById(null==r?void 0:r.chainId))?void 0:e.isSignMessage(r))&&a&&["eth_sign","signMessage"].includes(r.raw.method);return{dappMessage:r,messages:t,isDangerousSignMessage:s}},S=({children:e,onSubmit:i,confirmLabel:n,checkFromAddress:t=!0,closeOnEnd:P=!0})=>{var I,S,L,C,q,B,$,D;const[W,T]=(0,o.useState)(!1),{addNotification:F}=(0,h.Z)(),E=(0,v.nl)(),{dappMessage:A,messages:G,isDangerousSignMessage:N}=M(),R=(0,p.s0)(),{t:z}=(0,c.$G)("app"),O=(0,v.fU)(),U=(0,o.useMemo)((()=>{if(null==A?void 0:A.chainId)return O.getChainControllerById(null==A?void 0:A.chainId)}),[O]),J=(0,o.useCallback)((()=>{P?window.close():G.length>1?R(-1):window.close()}),[R,G,P]);(0,o.useEffect)((()=>{0===G.length&&P&&window.close()}),[P,G]);const Y=(null==(S=null==(I=null==A?void 0:A.origin)?void 0:I.tab)?void 0:S.url)||"",H=(null==(C=null==(L=null==A?void 0:A.origin)?void 0:L.tab)?void 0:C.favIconUrl)||"",V=(null==(B=null==(q=null==A?void 0:A.origin)?void 0:q.tab)?void 0:B.title)||"",X=Y?new URL(Y).hostname:"",K=(0,u.v9)((e=>e.wallets.activeWalletId)),Q=(0,u.v9)((e=>e.wallets.wallets)),[ee,ie]=(0,o.useState)(void 0),ne=(0,o.useCallback)(((e=z("dapp_requested_template.errors.reject_message"))=>{a.Z.info("handleReject",A),_.browser.runtime.sendMessage(null,{xdefiId:null==A?void 0:A.xdefiId,raw:{id:null==A?void 0:A.xdefiId,error:e}}).finally((()=>{J()})),E.removeMessageById(null==A?void 0:A.xdefiId)}),[J,A,E,z]);(0,o.useEffect)((()=>{const e=Q[t?f.Z.getWalletIdWithMessage(A):K];e?ie(e):(F({title:z("dapp_requested_template.errors.wallet_required"),type:"warning",message:z("dapp_requested_template.errors.wallet_required_description")}),ne(z("dapp_requested_template.errors.wallet_not_found")))}),[ne,ie,K,A,Q,t,z]);const te=(null==(D=null==($=null==ee?void 0:ee.chainData)?void 0:$[null==A?void 0:A.chainId])?void 0:D.address)||"",re=(0,v.Ni)(),{requireTxPassword:ae}=(0,u.v9)((e=>e.settings)),se=(0,o.useCallback)((e=>{return n=void 0,t=null,r=function*(){if(A&&e){T(!0);try{yield i(e),E.removeMessageById(A.xdefiId),J()}catch(e){const i=e;if(i.message.includes("Invalid password"))return F({title:z("dapp_requested_template.errors.invalid_password"),type:"error",message:z("alert.wallet.password.error.incorrect.messages.try_again")});a.Z.error({e:i}),F({title:z("dapp_requested_template.errors.tx_error"),type:"error",message:z("dapp_requested_template.errors.tx_error_short_description",{message:z((0,Z.ZP)(i,null==U?void 0:U.getType()))})})}finally{T(!1)}}},new Promise(((e,i)=>{var a=e=>{try{l(r.next(e))}catch(e){i(e)}},s=e=>{try{l(r.throw(e))}catch(e){i(e)}},l=i=>i.done?e(i.value):Promise.resolve(i.value).then(a,s);l((r=r.apply(n,t)).next())}));var n,t,r}),[J,i,T,ne,ae,E,re,A,Q,t,z]),{openDialog:le,onCloseDialog:de,handleConfirm:oe}=(0,x.Z)(se);return 0===G.length?(0,r.jsx)(k.im,{children:(0,r.jsx)("div",{children:z("dapp_requested_template.no_signature_request")})}):(0,r.jsxs)(k.im,{children:[(0,r.jsx)(g.ConfirmDialog,{open:le,onClose:de,onSubmit:oe}),(0,r.jsxs)(k.h4,{children:[H?(0,r.jsx)("img",{src:H,height:"44",alt:"dapp"}):(0,r.jsx)(k.TR,{children:(0,r.jsx)("h2",{children:X[0]})}),(0,r.jsxs)(k.Gh,{children:[(0,r.jsx)(k.Dx,{"data-testid":"dappName",children:(0,r.jsx)(s.Z,{children:V})}),(0,r.jsx)(b.Link,{to:Y,dataTestId:"dappDomain",children:X})]})]}),(0,r.jsxs)(k.W2,{children:[(0,r.jsxs)(k.$0,{children:[(0,r.jsxs)(k.qo,{children:[(0,r.jsx)(k.fq,{src:null==U?void 0:U.getConfig().image,alt:"chain"}),(0,r.jsx)(s.Z,{children:(0,m.fL)(te,7)})]}),(0,r.jsx)(k.nB,{children:(0,r.jsx)(d.Z,{children:null==ee?void 0:ee.label})})]}),(0,r.jsxs)(k.VY,{children:[(0,r.jsxs)(d.Z,{children:[e," "]}),N&&(0,r.jsxs)(k.to,{children:[(0,r.jsx)(w.zM,{color:j.wL.yellow}),(0,r.jsx)(l.Z,{children:z("dapp_requested_template.warning_message")})]})]}),(0,r.jsxs)(k.dk,{children:[(0,r.jsx)(w.sz,{}),(0,r.jsx)(d.Z,{children:z("dapp_requested_template.additional_warning")})]}),(0,r.jsxs)(k.$_,{children:[(0,r.jsx)(k.Sj,{disabled:W,dataTestId:"rejectBtn",fullWidth:!0,onClick:()=>ne(),children:(0,r.jsx)(y.Z,{children:z("general.reject")})}),(0,r.jsx)(k.pu,{dataTestId:"signBtn",disabled:W,onClick:()=>oe(),fullWidth:!0,children:(0,r.jsx)(y.Z,{children:n||z("dapp_requested_template.default_confirm_label")})})]})]}),W&&(0,r.jsx)(b.FlexBox,{pb:30,children:(0,r.jsx)(b.ConfirmLedger,{show:W})})]})};t()}catch(e){t(e)}}))},278947:(e,i,n)=>{"use strict";n.a(e,(async(e,t)=>{try{n.r(i),n.d(i,{default:()=>_});var r=n(785893),a=n(739989),s=n(667294),l=n(230811),d=n(255171),o=n.n(d),c=n(363119),u=n(996974),p=n(835534),g=n(25022),x=n(716792),h=n(935527),f=n(281672),m=n(488049),v=n(308787),w=n(691438),b=n(672289),Buffer=n(348764).Buffer,y=e([p,x,h,f,m,v,b]);[p,x,h,f,m,v,b]=y.then?(await y)():y;const j=e=>{try{const i=e.startsWith("0x")?e.substring(2):e,n=Buffer.from(i,"hex");return 32===n.length?e:n.toString("utf8")}catch(i){return e}},_=()=>{var e,i,n,t;const{t:d}=(0,l.$G)("app"),y=(0,u.s0)(),_=(0,u.TH)(),Z=null!=(i=null==(e=null==_?void 0:_.state)?void 0:e.singleElement)&&i,k=(0,f.UW)(),P=(0,f.Ni)(),{messages:I}=(0,c.v9)((e=>e.dappsMessages)),{wallets:M}=(0,c.v9)((e=>e.wallets));(0,m.C)();const{dappMessage:S}=(0,x.l)(),L=(0,s.useMemo)((()=>{var e,i,n,t,r;return(null==(i=null==(e=null==S?void 0:S.raw)?void 0:e.params[0])?void 0:i.data)||(null==(t=null==(n=null==S?void 0:S.raw)?void 0:n.params)?void 0:t.data)||(null==(r=null==S?void 0:S.raw)?void 0:r.params)||[]}),[null==(n=null==S?void 0:S.raw)?void 0:n.params]),C=(0,s.useMemo)((()=>{var e,i,n;if("personal_sign"===S.raw.method)return[{name:"Message",value:j(L)||L}];if("eth_sign"===S.raw.method)return[{name:"Message",value:L}];if(null==(i=null==(e=S.raw.method)?void 0:e.startsWith)?void 0:i.call(e,"eth_signTypedData"))return L;if("sign"===S.raw.method)return Object.keys(null==(n=null==S?void 0:S.raw)?void 0:n.params).reduce(((e,i)=>{var n;return-1===["msgs","fee"].indexOf(i)?e:[...e,{name:i,value:null==(n=null==S?void 0:S.raw)?void 0:n.params[i]}]}),[]);if(S.chainId===w.J.Solana){if(L.message)return[{value:L.message}];if(L.messages)return L.messages.map((e=>({value:e})))}return Array.isArray(L)?L:[{value:JSON.stringify(L)}]}),[S,L]),q=(0,s.useMemo)((()=>{a.Z.debug(`orgMessage: ${L}`);try{return JSON.parse(L)}catch(e){a.Z.debug("orgMessage is not object")}finally{a.Z.debug(`orgMessage: ${L}`)}}),[L]);(0,s.useEffect)((()=>{I.length>1&&Z&&y(-1)}),[I,Z,y]);const B=(0,s.useCallback)((e=>{return i=void 0,n=null,t=function*(){const i=M[p.Z.getWalletIdWithMessage(S)];yield k.approveDappsTransaction(S,i.id,g.GG.Approve,{walletPassword:e||P.masterPassword})},new Promise(((e,r)=>{var a=e=>{try{l(t.next(e))}catch(e){r(e)}},s=e=>{try{l(t.throw(e))}catch(e){r(e)}},l=i=>i.done?e(i.value):Promise.resolve(i.value).then(a,s);l((t=t.apply(i,n)).next())}));var i,n,t}),[M,S,k,P]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(x.Z,{onSubmit:B,confirmLabel:d("general.confirm"),checkFromAddress:!0,closeOnEnd:!1,children:(0,r.jsx)(r.Fragment,{children:q&&q.message&&q.domain?(0,r.jsx)("div",{"data-testid":"message",children:(q.message||q.domain)&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v.DashLine,{}),(0,r.jsx)(h.t2,{children:(0,r.jsx)(o(),{src:q,enableClipboard:!1,collapseStringsAfterLength:20,displayDataTypes:!1,name:null,theme:"railscasts"})})]})}):(0,r.jsx)(b.v0,{"data-testid":"message",children:null==(t=null==C?void 0:C.map)?void 0:t.call(C,(({value:e},i)=>(0,r.jsx)(b.X2,{children:(0,r.jsx)("div",{children:e})},i)))})})})})};t()}catch(e){t(e)}}))},875472:(e,i,n)=>{var t=n(882689),r=n(701469);e.exports=function(e,i,n,a){return null==e?[]:(r(i)||(i=null==i?[]:[i]),r(n=a?void 0:n)||(n=null==n?[]:[n]),t(e,i,n))}},935527:(e,i,n)=>{"use strict";n.a(e,(async(e,t)=>{try{n.d(i,{$0:()=>h,$_:()=>b,Dx:()=>p,Gh:()=>u,Sj:()=>y,TR:()=>g,VY:()=>o,W2:()=>x,dk:()=>w,fq:()=>v,h4:()=>c,im:()=>d,nB:()=>f,pu:()=>j,qo:()=>m,t2:()=>_,to:()=>Z});var r=n(818117),a=n(308787),s=n(876777),l=e([a]);a=(l.then?(await l)():l)[0];const d=r.ZP.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: ${s.wL.black};
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`,o=(0,r.ZP)(a.FlexBox)`
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
`,c=r.ZP.div`
  display: flex;
  align-items: center;
  margin-bottom: 13px;
  padding: 20px;
  position: relative;
  overflow: hidden;
`,u=r.ZP.div`
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  padding-left: 12px;
  width: calc(100% - 15vw);
`,p=r.ZP.span`
  margin-top: 9px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
`,g=((0,r.ZP)(a.Link)`
  text-align: unset;
`,r.ZP.i`
  width: 44px;
  height: 44px;
  background: ${s.wL.deepSea};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`),x=r.ZP.div`
  background: ${s.wL.black};
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  overflow: auto;
`,h=r.ZP.section`
  letter-spacing: 0.35px;
  padding: 10px;
  border-bottom: 1px solid ${s.wL.black};
  border-top: 1px solid ${s.wL.black};
  display: flex;
  flex-direction: row-reverse;
`,f=(0,r.ZP)(a.FlexBox)`
  min-width: 72px;
  height: 21px;
  background-color: ${s.wL.darkGrey};
  border-radius: 54px;
  align-items: center;
  justify-content: center;
`,m=(0,r.ZP)(a.FlexBox)`
  flex: 1;
  text-align: right;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`,v=r.ZP.img`
  width: 17px;
  height: 17px;
  margin-right: 3px;
`,w=r.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 15px;

  svg {
    margin-right: 5px;
  }
`,b=r.ZP.div`
  display: flex;
  flex-direction: row;
  z-index: 3;
`,y=(0,r.ZP)(a.SecondaryButton)`
  margin-right: 10px;
`,j=(0,r.ZP)(a.PrimaryButton)``,_=r.ZP.div`
  margin-left: 10px;
  overflow-x: auto;

  > .react-json-view {
    word-break: break-all;
  }
`,Z=(0,r.ZP)(a.FlexBox).attrs({padding:"22px 8px 8px 8px",alignItems:"center"})`
  background: ${s.wL.mineShaft};
  border-radius: 8px;
  row-gap: 16px;
`;(0,r.ZP)(a.ConfirmLedger)`
  position: fixed;
  height: 90px;
`;t()}catch(e){t(e)}}))},672289:(e,i,n)=>{"use strict";n.a(e,(async(e,t)=>{try{n.d(i,{X2:()=>o,v0:()=>d});var r=n(876777),a=n(818117),s=n(308787),l=e([s]);s=(l.then?(await l)():l)[0];(0,a.ZP)(s.FlexBox)`
  background: ${r.wL.mineShaft};
  border-radius: 8px;
  padding: 8px;
  width: 150px;
  margin-top: 8px;
`,(0,a.ZP)(s.FlexBox)`
  background: ${r.wL.scorpion};
  border-radius: 8px;
`;const d=a.ZP.div`
  word-break: break-all;
  background: ${r.wL.mineShaft};
  border-radius: 14px;
  padding: 8px;
  min-height: 100px;
`,o=a.ZP.div`
  margin-bottom: 10px;
`;t()}catch(e){t(e)}}))}}]);
//# sourceMappingURL=1833.bundle.js.map