!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r=(new Error).stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="27e2ab8c-f265-4c4a-9ebf-7b88903d79bd",e._sentryDebugIdIdentifier="sentry-dbid-27e2ab8c-f265-4c4a-9ebf-7b88903d79bd")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"28.2.2"},(self.webpackChunkxdefi_extension=self.webpackChunkxdefi_extension||[]).push([[4963],{154963:(e,r,t)=>{t.a(e,(async(e,a)=>{try{t.r(r),t.d(r,{default:()=>F});var n=t(785893),s=t(646284),o=t(691438),i=t(835534),l=t(831352),d=t(177616),c=t(327194),u=t(739989),g=t(281672),m=t(230811),f=t(667294),p=t(363119),h=t(25022),v=t(162318),w=t(184698),y=t(284755),x=t(851892),b=t(308787),I=t(519416),C=t(972819),_=t(731694),j=t(901176),Z=t(24296),P=t(123226),S=e([s,i,g,v,w,y,b,C,_,j,Z]);[s,i,g,v,w,y,b,C,_,j,Z]=S.then?(await S)():S;const F=({transactionMsg:e})=>{var r;const{t}=(0,m.$G)("app"),{onRequestPermission:a}=(0,w.gI)(),[S,F]=(0,f.useState)(!1),{addNotification:M}=(0,C.Z)(),R=(0,g.UW)(),k=(0,g.fU)(),T=(0,g.nl)(),B=(0,g.Ni)(),{requireTxPassword:D,activeWallet:W}=(0,p.v9)((e=>({requireTxPassword:e.settings.requireTxPassword,activeWallet:e.wallets.wallets[e.wallets.activeWalletId]}))),E=(0,f.useMemo)((()=>k.getChainControllerById(e.chainId)),[e]),N=(0,f.useMemo)((()=>e.raw.params.length?e.raw.params[0]:e.raw.params),[e]),U=(0,f.useMemo)((()=>{var r;return(null==(r=e.origin)?void 0:r.url)||""}),[null==(r=e.origin)?void 0:r.url]),q=(0,f.useMemo)((()=>{var e,r;if(N.amount||N.value||"0"){return(0,l.ym)(N.amount)?d.formatUnits(null==(e=null==N?void 0:N.amount)?void 0:e.amount,null==(r=null==N?void 0:N.amount)?void 0:r.decimals).toString():d.formatUnits(c.O$.from(null==N?void 0:N.amount).toString()).toString()}return"0"}),[N.amount,N.value]),{fee:$,setFee:A,feeRate:G,setFeeRate:O}=(0,j.g)({chain:E,params:N}),J=(0,Z.z)({chain:E,params:N}),L=()=>{u.Z.info("handleReject ",e),I.browser.runtime.sendMessage(null,{xdefiId:e.xdefiId,raw:{id:e.xdefiId,error:t("alert.transaction.errors.user_rejected_message_signing.message")}}),T.removeMessageById(e.xdefiId),window.close()},{openDialog:V,onCloseDialog:z,handleConfirm:H}=(0,s.useConfirmDialog)((r=>{return n=void 0,s=null,l=function*(){var n;if(u.Z.debug({method:"handleApprove"}),u.Z.debug({msg:"preMP",requireTxPassword:D}),D&&!r)return;const s=r||B.masterPassword;if(s){F(!0);try{const r=i.Z.getWalletIdWithMessage(e),t={};G&&(t.feeRate=G),yield R.approveDappsTransaction(e,r,h.GG.Transaction,{walletPassword:s},t),T.removeMessageById(e.xdefiId),window.close()}catch(r){if("TransportOpenUserCancelled"===(null==r?void 0:r.name))return M({title:t("alert.transaction.hardware.error.main.title"),type:"error",message:t("alert.transaction.hardware.error.main.message")}),a();if(null==(n=null==r?void 0:r.message)?void 0:n.includes("Invalid password"))return M({title:t("alert.wallet.password.error.incorrect.title"),type:"error",message:t("alert.wallet.password.error.incorrect.messages.try_again")});const s=(0,x.sJ)(r);u.Z.error("Transfer error",{error:s}),M({title:t("alert.transaction.errors.transfer.title"),type:"error",message:t((0,x.ZP)(s,o.J.Bitcoin))}),u.Z.error({transactionMsg:"Error in message approval",e:r}),I.browser.runtime.sendMessage(void 0,{xdefiId:e.xdefiId,raw:{id:e.xdefiId,error:JSON.stringify(r)}})}finally{F(!1)}u.Z.info("end handleApprove")}},new Promise(((e,r)=>{var t=e=>{try{o(l.next(e))}catch(e){r(e)}},a=e=>{try{o(l.throw(e))}catch(e){r(e)}},o=r=>r.done?e(r.value):Promise.resolve(r.value).then(t,a);o((l=l.apply(n,s)).next())}));var n,s,l}));return(0,n.jsx)(P.k,{body:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.ConfirmDialog,{open:V,onClose:z,onSubmit:H}),(0,n.jsx)(b.ScrollBars,{autoHide:!0,children:(0,n.jsxs)(b.FlexBox,{height:"100%",children:[(0,n.jsx)(v.Z,{url:U,displayAmount:q,action:"approve",from:N.from,to:N.to||N.recipient,assetSymbol:J,defaultIcon:E.getConfig().image,isTokenTransfer:!1,chainId:E.getId(),fee:Number($),hideBack:!0}),(0,n.jsx)(_.Z,{chainId:E.getId(),params:N,feeRate:G,setFee:A,setFeeRate:O}),(0,n.jsx)(y.Z,{handleConfirm:()=>H(),fee:Number($),chainId:E.getId(),assetSymbol:J,errors:{},handleReject:L,loading:S,selectedWallet:W})]})})]})})};a()}catch(e){a(e)}}))},731694:(e,r,t)=>{t.a(e,(async(e,a)=>{try{t.d(r,{Z:()=>y});var n=t(785893),s=t(942274),o=t(206508),i=t(281672),l=t(667294),d=t(972819),c=t(230811),u=t(308787),g=t(561277),m=t(876777),f=t(818117),p=e([o,i,d,u]);[o,i,d,u]=p.then?(await p)():p;const h=(0,f.ZP)(u.Card)`
  padding-bottom: 20px;
  border-bottom: 1px solid ${m.wL.black};
`,v=f.ZP.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 8px;
`,w=(0,f.ZP)(u.FlexBox).attrs({alignItems:"center"})`
  height: 40px;
  border-bottom: 1px solid ${m.wL.black};
`,y=({params:e,chainId:r,setFeeRate:t,setFee:a})=>{const u=(0,i.fU)(),{addNotification:m}=(0,d.Z)(),{t:f}=(0,c.$G)("app"),[p,y]=(0,l.useState)(s.FeeOption.Fast),x=(0,l.useCallback)((()=>{return t=void 0,a=null,n=function*(){try{const t=yield u.getChainControllerById(r).selfCast().getFee(p,e.memo);return{rates:(yield u.getChainControllerById(r).selfCast().getFeesWithRates(e.memo)).rates[p],fee:t}}catch(e){return m({title:f("bitcoin_signing.errors.gas_error"),type:"error",message:f("bitcoin_signing.errors.gas_error_short_description",{message:e.message})}),{}}},new Promise(((e,r)=>{var s=e=>{try{i(n.next(e))}catch(e){r(e)}},o=e=>{try{i(n.throw(e))}catch(e){r(e)}},i=r=>r.done?e(r.value):Promise.resolve(r.value).then(s,o);i((n=n.apply(t,a)).next())}));var t,a,n}),[u,r,p,e.memo,f]);return(0,l.useEffect)((()=>{x().then((e=>{(null==e?void 0:e.fee)&&a(e.fee),(null==e?void 0:e.rates)&&t(null==e?void 0:e.rates)}))}),[t,x,a]),(0,n.jsxs)(h,{noShadow:!0,children:[(0,n.jsx)(w,{children:(0,n.jsx)(g.Z,{children:f("bitcoin_signing.details")})}),(0,n.jsx)(v,{children:(0,n.jsx)(o.ot,{errors:{},memo:e.memo||""})}),(0,n.jsx)(o.jh,{slider:!1,setSpeedValue:y,speedValue:p})]})};a()}catch(e){a(e)}}))}}]);
//# sourceMappingURL=4963.bundle.js.map