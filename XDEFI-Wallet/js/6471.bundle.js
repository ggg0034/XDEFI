!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="10b5068b-7024-45fe-a212-61e85ab5a4a7",e._sentryDebugIdIdentifier="sentry-dbid-10b5068b-7024-45fe-a212-61e85ab5a4a7")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"28.2.2"},(self.webpackChunkxdefi_extension=self.webpackChunkxdefi_extension||[]).push([[6471],{878020:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(924262),i=n(619013),o=n(13882);function a(e){return function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t=t||{})Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}({},e)}var s=n(504958),l=6e4,d=1440,c=30*d,u=365*d;function p(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,o.Z)(2,arguments);var p=n.locale||s.Z;if(!p.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var h=function(e,t){(0,o.Z)(2,arguments);var n=(0,i.Z)(e),r=(0,i.Z)(t),a=n.getTime()-r.getTime();return a<0?-1:a>0?1:a}(e,t);if(isNaN(h))throw new RangeError("Invalid time value");var x,g,f=a(n);f.addSuffix=Boolean(n.addSuffix),f.comparison=h,h>0?(x=(0,i.Z)(t),g=(0,i.Z)(e)):(x=(0,i.Z)(e),g=(0,i.Z)(t));var m,v=null==n.roundingMethod?"round":String(n.roundingMethod);if("floor"===v)m=Math.floor;else if("ceil"===v)m=Math.ceil;else{if("round"!==v)throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");m=Math.round}var w,b=g.getTime()-x.getTime(),y=b/l,j=(b-((0,r.Z)(g)-(0,r.Z)(x)))/l;if("second"===(w=null==n.unit?y<1?"second":y<60?"minute":y<d?"hour":j<c?"day":j<u?"month":"year":String(n.unit))){var Z=m(b/1e3);return p.formatDistance("xSeconds",Z,f)}if("minute"===w){var I=m(y);return p.formatDistance("xMinutes",I,f)}if("hour"===w){var k=m(y/60);return p.formatDistance("xHours",k,f)}if("day"===w){var P=m(j/d);return p.formatDistance("xDays",P,f)}if("month"===w){var S=m(j/c);return 12===S&&"month"!==n.unit?p.formatDistance("xYears",1,f):p.formatDistance("xMonths",S,f)}if("year"===w){var _=m(j/u);return p.formatDistance("xYears",_,f)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}function h(e,t){return(0,o.Z)(1,arguments),p(e,Date.now(),t)}},993071:(e,t,n)=>{"use strict";n.d(t,{Z:()=>F});var r=n(785893),i=n(667294),o=n(818117),a=n(230811),s=n(876777),l=n(139082),d=Object.defineProperty,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const x=e=>(0,r.jsx)(l.Z,((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&h(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&h(e,n,t[n]);return e})({color:s.wL.lime},e));var g=Object.defineProperty,f=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,w=(e,t,n)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const b=e=>(0,r.jsx)(l.Z,((e,t)=>{for(var n in t||(t={}))m.call(t,n)&&w(e,n,t[n]);if(f)for(var n of f(t))v.call(t,n)&&w(e,n,t[n]);return e})({color:s.wL.yellow},e));var y=Object.defineProperty,j=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const P=e=>(0,r.jsx)(l.Z,((e,t)=>{for(var n in t||(t={}))Z.call(t,n)&&k(e,n,t[n]);if(j)for(var n of j(t))I.call(t,n)&&k(e,n,t[n]);return e})({color:s.wL.midRed},e));var S=n(156790);const _={[S.E.Uncongested]:x,[S.E.Average]:b,[S.E.Congested]:P},B=o.ZP.div`
  background: linear-gradient(90deg, #25cd86 0%, #ddac46 52.08%, #fa511c 100%);
  position: relative;
  width: 80px;
  height: 8px;
  border-radius: 8px;
  margin-top: 1px;
`,C=o.iv`
  top: -2px;
  left: 4px;
`,O=o.iv`
  top: -2px;
  left: 50%;
  transform: translateX(-50%);
`,D=o.iv`
  top: -2px;
  right: 4px;
`,$={[S.E.Uncongested]:C,[S.E.Average]:O,[S.E.Congested]:D},T=o.ZP.div`
  position: absolute;
  ${({type:e})=>$[e]}
  z-index: 2;
  height: 12px;
  width: 4px;
  border-radius: 20px;
  background-color: ${({theme:e})=>`${e.colors.white}`};
`,F=(0,i.memo)((({type:e})=>{const{t}=(0,a.$G)("app"),n=_[e],i=(e=>({[S.E.Uncongested]:e("network_status.uncongested"),[S.E.Average]:e("network_status.average"),[S.E.Congested]:e("network_status.congested")}))(t)[e];return(0,r.jsxs)("div",{children:[(0,r.jsx)(n,{textAlign:"center",children:i}),(0,r.jsx)(B,{children:(0,r.jsx)(T,{type:e})})]})}))},886597:(e,t,n)=>{"use strict";n.a(e,(async(e,r)=>{try{n.d(t,{Z:()=>s});var i=n(785893),o=n(954237),a=e([o]);o=(a.then?(await a)():a)[0];const s=({img:e,chain:t,variant:n,withoutChain:r,inlineWithToken:a,dataTestId:s})=>(0,i.jsxs)(o.W2,{variant:n,"data-testid":s,children:[(0,i.jsx)(o.Oi,{"data-testid":"tokenImage",src:e,variant:n}),!r&&(0,i.jsx)(o.k_,{"data-testid":"chainContainer",inlineWithToken:a,variant:n,children:(0,i.jsx)(o.Mj,{src:t,variant:n,"data-testid":"chainIcon"})})]});r()}catch(e){r(e)}}))},954237:(e,t,n)=>{"use strict";n.a(e,(async(e,r)=>{try{n.d(t,{Mj:()=>p,Oi:()=>c,W2:()=>l,k_:()=>u});var i=n(818117),o=n(308787),a=n(506559),s=e([o]);o=(s.then?(await s)():s)[0];const l=i.ZP.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  padding: 5px;
  border-radius: 50%;
  ${({variant:e})=>e===a.e.Xs&&"padding: 1px;"}
`,d={[a.e.Xxl]:{token:{height:66,width:66},chain:{height:27,width:27},padding:4.5,position:{bottom:2,left:2},inlinePosition:{bottom:9,left:5}},[a.e.Xl]:{token:{height:58,width:58},chain:{height:24,width:24},padding:3,position:{bottom:2,left:2},inlinePosition:{bottom:9,left:5}},[a.e.Large]:{token:{height:48,width:48},chain:{height:24,width:24},padding:3,position:{bottom:2,left:2},inlinePosition:{bottom:9,left:5}},[a.e.Medium]:{token:{height:44,width:44},chain:{height:18,width:18},padding:3,position:{bottom:2,left:2},inlinePosition:{bottom:9,left:5}},[a.e.Small]:{token:{height:28,width:28},chain:{height:12,width:12},padding:2,position:{bottom:4,left:2},inlinePosition:{bottom:9,left:5}},[a.e.Xs]:{token:{height:16,width:16},chain:{height:6,width:6},padding:1,position:{bottom:4,left:1},inlinePosition:{bottom:5,left:1}}},c=i.ZP.img`
  ${({variant:e})=>i.iv`
    width: ${d[e].token.width}px;
    height: ${d[e].token.height}px;
  `}
`,u=(0,i.ZP)(o.FlexBox).attrs({alignItems:"center",justifyContent:"center"})`
  position: absolute;
  width: fit-content;
  height: fit-content;
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.charcoal};

  ${({inlineWithToken:e,variant:t})=>i.iv`
      padding: ${d[t].padding}px;
      bottom: ${e?d[t].inlinePosition.bottom:d[t].position.bottom}px;
      left: ${e?d[t].inlinePosition.left:d[t].position.left}px;
    `}
`,p=i.ZP.img.attrs({alt:"Icon"})`
  ${({variant:e})=>i.iv`
    width: ${d[e].chain.width}px;
    height: ${d[e].chain.height}px;
  `}
`;r()}catch(e){r(e)}}))},824670:(e,t,n)=>{"use strict";n.a(e,(async(e,r)=>{try{n.d(t,{Z:()=>S});var i=n(785893),o=n(230811),a=n(667294),s=n(818117),l=n(412252),d=n(308787),c=n(783150),u=n(21723),p=n(892269),h=n(561277),x=n(725317),g=n(771341),f=n(876777),m=n(202134),v=n(18544),w=n(241164),b=n(590434),y=n(316708),j=n(487329),Z=n(335420),I=e([d,c,u,p,v,y,Z]);[d,c,u,p,v,y,Z]=I.then?(await I)():I;const k=({primaryTitle:e,secondaryTitle:t,notEditableFeeData:n,onPrimaryClick:r,onSecondaryClick:a,disablePrimaryOnClick:s=!1,memoData:I,editableFeeData:k,currentNetworkStatus:S,withoutNetworkStatus:_,warningMessage:B,noOptions:C,feeTokenBalance:O})=>{const{t:D}=(0,o.$G)("app"),{selected:$,handleSelect:T,items:F}=(0,j.o)(null==k?void 0:k.selectItems),M="custom"===(null==$?void 0:$.key)&&S?S:m.I[null==$?void 0:$.key],{openDialog:E,onCloseDialog:L,handleConfirm:W}=(0,v.Z)(r);return(0,i.jsxs)(P,{children:[(0,i.jsx)(y.QH,{open:E,onClose:L,onSubmit:W}),!k&&n?(0,i.jsxs)(d.FlexBox,{flexDirection:"row",mb:8,justifyContent:"space-between","data-testid":"networkFeeRow",children:[(0,i.jsxs)(d.FlexBox,{flexDirection:"row",alignItems:"center",children:[(0,i.jsx)(l.Z,{children:D("tx_signing_footer.network_fee")}),(0,i.jsx)(d.FlexBox,{height:20,width:20,children:(0,i.jsx)(u.Z,{message:D("tx_signing_footer.network_fee_tooltip"),placement:"bottom-start",iconColor:f.wL.darkGrey,noIndents:!0})})]}),(0,i.jsxs)(d.FlexBox,{flexDirection:"column",children:[(0,i.jsx)(h.Z,{textAlign:"end",children:n.price}),(0,i.jsx)(l.Z,{textAlign:"end",children:n.originalPrice})]})]}):(0,i.jsxs)(i.Fragment,{children:[I&&(0,i.jsxs)(d.FlexBox,{mb:16,"data-testid":"withMemoRow",children:[(0,i.jsx)(d.FlexBox,{ml:6,mb:8,children:(0,i.jsx)(l.Z,{children:D("tx_signing_footer.memo")})}),(0,i.jsx)(x.Z,{dataTestId:"memoInput",placeholder:D("general.optional"),value:I.memoValue,onChange:e=>{var t;return I.onMemoChange(null==(t=null==e?void 0:e.target)?void 0:t.value)}})]}),(0,i.jsxs)(d.FlexBox,{flexDirection:"row",mb:8,alignItems:"center",children:[(0,i.jsx)(d.FlexBox,{ml:6,children:(0,i.jsx)(l.Z,{children:D("transaction.processing_time")})}),(0,i.jsx)(u.Z,{message:(0,i.jsx)(Z.Z,{price:(null==$?void 0:$.price)||"",fiatPrice:(null==$?void 0:$.fiatPrice)||""}),placement:"bottom",iconColor:f.wL.darkGrey,containerSize:b.T.Large,noIndents:!0})]}),(0,i.jsxs)(d.FlexBox,{flexDirection:"row",mb:24,"data-testid":"bottomSheetRow",children:[(0,i.jsx)(c.Z,{selected:null==$?void 0:$.key,items:F,onSelect:T,FooterComponent:_?void 0:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(p.Z,{networkType:M,feeTokenBalance:O})}),isRightLabelWarning:Boolean(B),withItemSeparator:!0}),!C&&(0,i.jsx)(d.FlexBox,{width:32,height:32,ml:8,children:(0,i.jsx)(d.IconButton,{icon:(0,i.jsx)(g.wz,{}),variant:d.IconButtonVariant.Rounded,onClick:null==k?void 0:k.onOptionClick,dataTestId:"optionsButton",fullWidth:!0})})]})]}),B&&(0,i.jsx)(d.FlexBox,{flexDirection:"row",mb:8,alignItems:"center",children:(0,i.jsx)(d.FlexBox,{px:8,children:(0,i.jsx)(w.Z,{children:B})})}),(0,i.jsxs)(d.FlexBox,{flexDirection:"row",gridGap:"16px",mt:16,width:"100%",children:[(0,i.jsx)(d.FlexBox,{flexDirection:"row",width:"100%",children:(0,i.jsx)(d.SecondaryButton,{onClick:a,fullWidth:!0,children:D(t)})}),(0,i.jsx)(d.FlexBox,{flexDirection:"row",width:"100%",children:(0,i.jsx)(d.PrimaryButton,{onClick:()=>W(),fullWidth:!0,disabled:s,children:D(e)})})]})]})},P=s.ZP.div`
  width: 100%;
  padding: 16px;
  background-color: ${f.wL.mineShaft};
  box-shadow: ${f.fo[500]};
`,S=(0,a.memo)(k);r()}catch(e){r(e)}}))},335420:(e,t,n)=>{"use strict";n.a(e,(async(e,r)=>{try{n.d(t,{Z:()=>p});var i=n(785893),o=n(667294),a=n(230811),s=n(308787),l=n(458038),d=n(421753),c=e([s]);s=(c.then?(await c)():c)[0];const u=({fiatPrice:e,price:t})=>{const{t:n}=(0,a.$G)("app");return(0,i.jsxs)(s.FlexBox,{children:[(0,i.jsx)(l.Z,{children:n("transaction.we_calculate_msg")}),(0,i.jsxs)(s.FlexBox,{mt:16,justifyContent:"space-between",flexDirection:"row",alignItems:"top",children:[(0,i.jsx)(l.Z,{children:n("tx_signing_footer.the_max_fee_is")}),(0,i.jsxs)(s.FlexBox,{children:[(0,i.jsx)(l.Z,{children:e}),(0,i.jsx)(d.Z,{children:t})]})]})]})},p=(0,o.memo)(u);r()}catch(e){r(e)}}))},892269:(e,t,n)=>{"use strict";n.a(e,(async(e,r)=>{try{n.d(t,{Z:()=>g});var i=n(785893),o=n(667294),a=n(308787),s=n(818117),l=n(230811),d=n(412252),c=n(993071),u=n(458038),p=e([a]);a=(p.then?(await p)():p)[0];const h=({networkType:e,feeTokenBalance:t})=>{const{t:n}=(0,l.$G)("app");return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(x,{children:[(0,i.jsx)(d.Z,{children:n("network_status.title")}),(0,i.jsx)(c.Z,{type:e})]}),t&&(0,i.jsxs)(x,{children:[(0,i.jsx)(d.Z,{children:n("network_status.fee_token_balance")}),(0,i.jsxs)(a.FlexBox,{children:[(0,i.jsx)(u.Z,{children:t.fiat}),(0,i.jsx)(d.Z,{children:t.price})]})]})]})},x=(0,s.ZP)(a.FlexBox).attrs({flexDirection:"row",alignItems:"center",justifyContent:"space-between"})`
  background-color: ${({theme:e})=>e.colors.mineShaft};
  padding: 16px 16px 12px;
`,g=(0,o.memo)(h);r()}catch(e){r(e)}}))},202134:(e,t,n)=>{"use strict";n.d(t,{I:()=>p,T:()=>u});var r=n(156790),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const u=(e,t)=>t.map((t=>{return n=((e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))d.call(t,n)&&c(e,n,t[n]);return e})({},t),r={label:e(t.label)},o(n,a(r));var n,r})),p={fast:r.E.Uncongested,average:r.E.Average,slow:r.E.Congested}},487329:(e,t,n)=>{"use strict";n.d(t,{o:()=>a});var r=n(667294),i=n(230811),o=n(202134);const a=e=>{const{t}=(0,i.$G)("app"),n=e?(0,o.T)(t,e):[],[a,s]=(0,r.useState)(e?e[0]:null);return{selected:a,handleSelect:e=>{s(e)},items:n}}},716792:(e,t,n)=>{"use strict";n.a(e,(async(e,r)=>{try{n.d(t,{Z:()=>B,l:()=>_});var i=n(785893),o=n(739989),a=n(814401),s=n(561277),l=n(458038),d=n(667294),c=n(230811),u=n(363119),p=n(996974),h=n(646284),x=n(18544),g=n(972819),f=n(835534),m=n(522933),v=n(281672),w=n(771341),b=n(308787),y=n(729154),j=n(876777),Z=n(519416),I=n(851892),k=n(935527),P=e([h,x,g,f,v,b,k]);[h,x,g,f,v,b,k]=P.then?(await P)():P;const S=["https://dashboard.xdefi.io","https://staking.xdefi.io","https://app.xdefi.io","https://app-beta.xdefi.io"],_=()=>{var e;const t=(0,p.TH)(),n=(0,v.UW)(),r=(0,u.v9)((e=>e.dappsMessages.messages)),i=(0,d.useMemo)((()=>{if(!t.search)return r[0];const e=new URLSearchParams(t.search).get("xdefiId");return r.find((t=>t.xdefiId.toString()===e))||r[0]}),[r,t]),o=(0,d.useMemo)((()=>{var e,t;return!(null==(t=null==(e=null==i?void 0:i.origin)?void 0:e.tab)?void 0:t.url)||!S.some((e=>{var t,n,r;return null==(r=null==(n=null==(t=null==i?void 0:i.origin)?void 0:t.tab)?void 0:n.url)?void 0:r.startsWith(e)}))}),[i]),a=i&&(null==(e=n.chains.getChainControllerById(null==i?void 0:i.chainId))?void 0:e.isSignMessage(i))&&o&&["eth_sign","signMessage"].includes(i.raw.method);return{dappMessage:i,messages:r,isDangerousSignMessage:a}},B=({children:e,onSubmit:t,confirmLabel:n,checkFromAddress:r=!0,closeOnEnd:P=!0})=>{var S,B,C,O,D,$,T,F;const[M,E]=(0,d.useState)(!1),{addNotification:L}=(0,g.Z)(),W=(0,v.nl)(),{dappMessage:X,messages:z,isDangerousSignMessage:A}=_(),R=(0,p.s0)(),{t:q}=(0,c.$G)("app"),U=(0,v.fU)(),G=(0,d.useMemo)((()=>{if(null==X?void 0:X.chainId)return U.getChainControllerById(null==X?void 0:X.chainId)}),[U]),N=(0,d.useCallback)((()=>{P?window.close():z.length>1?R(-1):window.close()}),[R,z,P]);(0,d.useEffect)((()=>{0===z.length&&P&&window.close()}),[P,z]);const Y=(null==(B=null==(S=null==X?void 0:X.origin)?void 0:S.tab)?void 0:B.url)||"",H=(null==(O=null==(C=null==X?void 0:X.origin)?void 0:C.tab)?void 0:O.favIconUrl)||"",Q=(null==($=null==(D=null==X?void 0:X.origin)?void 0:D.tab)?void 0:$.title)||"",V=Y?new URL(Y).hostname:"",J=(0,u.v9)((e=>e.wallets.activeWalletId)),K=(0,u.v9)((e=>e.wallets.wallets)),[ee,te]=(0,d.useState)(void 0),ne=(0,d.useCallback)(((e=q("dapp_requested_template.errors.reject_message"))=>{o.Z.info("handleReject",X),Z.browser.runtime.sendMessage(null,{xdefiId:null==X?void 0:X.xdefiId,raw:{id:null==X?void 0:X.xdefiId,error:e}}).finally((()=>{N()})),W.removeMessageById(null==X?void 0:X.xdefiId)}),[N,X,W,q]);(0,d.useEffect)((()=>{const e=K[r?f.Z.getWalletIdWithMessage(X):J];e?te(e):(L({title:q("dapp_requested_template.errors.wallet_required"),type:"warning",message:q("dapp_requested_template.errors.wallet_required_description")}),ne(q("dapp_requested_template.errors.wallet_not_found")))}),[ne,te,J,X,K,r,q]);const re=(null==(F=null==(T=null==ee?void 0:ee.chainData)?void 0:T[null==X?void 0:X.chainId])?void 0:F.address)||"",ie=(0,v.Ni)(),{requireTxPassword:oe}=(0,u.v9)((e=>e.settings)),ae=(0,d.useCallback)((e=>{return n=void 0,r=null,i=function*(){if(X&&e){E(!0);try{yield t(e),W.removeMessageById(X.xdefiId),N()}catch(e){const t=e;if(t.message.includes("Invalid password"))return L({title:q("dapp_requested_template.errors.invalid_password"),type:"error",message:q("alert.wallet.password.error.incorrect.messages.try_again")});o.Z.error({e:t}),L({title:q("dapp_requested_template.errors.tx_error"),type:"error",message:q("dapp_requested_template.errors.tx_error_short_description",{message:q((0,I.ZP)(t,null==G?void 0:G.getType()))})})}finally{E(!1)}}},new Promise(((e,t)=>{var o=e=>{try{s(i.next(e))}catch(e){t(e)}},a=e=>{try{s(i.throw(e))}catch(e){t(e)}},s=t=>t.done?e(t.value):Promise.resolve(t.value).then(o,a);s((i=i.apply(n,r)).next())}));var n,r,i}),[N,t,E,ne,oe,W,ie,X,K,r,q]),{openDialog:se,onCloseDialog:le,handleConfirm:de}=(0,x.Z)(ae);return 0===z.length?(0,i.jsx)(k.im,{children:(0,i.jsx)("div",{children:q("dapp_requested_template.no_signature_request")})}):(0,i.jsxs)(k.im,{children:[(0,i.jsx)(h.ConfirmDialog,{open:se,onClose:le,onSubmit:de}),(0,i.jsxs)(k.h4,{children:[H?(0,i.jsx)("img",{src:H,height:"44",alt:"dapp"}):(0,i.jsx)(k.TR,{children:(0,i.jsx)("h2",{children:V[0]})}),(0,i.jsxs)(k.Gh,{children:[(0,i.jsx)(k.Dx,{"data-testid":"dappName",children:(0,i.jsx)(a.Z,{children:Q})}),(0,i.jsx)(b.Link,{to:Y,dataTestId:"dappDomain",children:V})]})]}),(0,i.jsxs)(k.W2,{children:[(0,i.jsxs)(k.$0,{children:[(0,i.jsxs)(k.qo,{children:[(0,i.jsx)(k.fq,{src:null==G?void 0:G.getConfig().image,alt:"chain"}),(0,i.jsx)(a.Z,{children:(0,m.fL)(re,7)})]}),(0,i.jsx)(k.nB,{children:(0,i.jsx)(l.Z,{children:null==ee?void 0:ee.label})})]}),(0,i.jsxs)(k.VY,{children:[(0,i.jsxs)(l.Z,{children:[e," "]}),A&&(0,i.jsxs)(k.to,{children:[(0,i.jsx)(w.zM,{color:j.wL.yellow}),(0,i.jsx)(s.Z,{children:q("dapp_requested_template.warning_message")})]})]}),(0,i.jsxs)(k.dk,{children:[(0,i.jsx)(w.sz,{}),(0,i.jsx)(l.Z,{children:q("dapp_requested_template.additional_warning")})]}),(0,i.jsxs)(k.$_,{children:[(0,i.jsx)(k.Sj,{disabled:M,dataTestId:"rejectBtn",fullWidth:!0,onClick:()=>ne(),children:(0,i.jsx)(y.Z,{children:q("general.reject")})}),(0,i.jsx)(k.pu,{dataTestId:"signBtn",disabled:M,onClick:()=>de(),fullWidth:!0,children:(0,i.jsx)(y.Z,{children:n||q("dapp_requested_template.default_confirm_label")})})]})]}),M&&(0,i.jsx)(b.FlexBox,{pb:30,children:(0,i.jsx)(b.ConfirmLedger,{show:M})})]})};r()}catch(e){r(e)}}))},258067:(e,t,n)=>{"use strict";n.a(e,(async(e,r)=>{try{n.d(t,{Z:()=>x});var i=n(785893),o=n(667294),a=n(749675),s=n(308787),l=n(108363),d=n(412252),c=n(458038),u=n(88512),p=e([s,u]);[s,u]=p.then?(await p)():p;const h=({message:e})=>{const{url:t,domain:n,logo:r,title:o,timeStamp:p}=(0,a.Z)(e);return(0,i.jsxs)(u.VY,{children:[(0,i.jsxs)(s.FlexBox,{flexDirection:"row",width:"100%",children:[r?(0,i.jsx)(u.TR,{src:r,height:"40",alt:"dapp"}):(0,i.jsx)(s.Avatar,{text:n[0],size:"lg"}),(0,i.jsxs)(s.FlexBox,{ml:8,width:230,children:[(0,i.jsx)(l.Z,{"data-testid":"dappName",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",children:o}),(0,i.jsx)(u.zU,{to:t,dataTestId:"dappDomain",children:n})]})]}),(0,i.jsxs)(s.FlexBox,{alignItems:"flex-end",gridGap:4,children:[(0,i.jsx)(d.Z,{children:"TIMESTAMP"}),(0,i.jsx)(c.Z,{children:p})]})]})},x=(0,o.memo)(h);r()}catch(e){r(e)}}))},720300:(e,t,n)=>{"use strict";n.a(e,(async(e,r)=>{try{n.d(t,{Z:()=>h});var i=n(785893),o=n(667294),a=n(258067),s=n(308787),l=n(818117),d=n(978410),c=e([a,s,d]);[a,s,d]=c.then?(await c)():c;const u=(0,l.ZP)(s.FlexBox).attrs({flex:1})`
  overflow: overlay;
`,p=({children:e,footer:t,message:n})=>(0,i.jsxs)(d.W,{children:[(0,i.jsx)(a.Z,{message:n}),(0,i.jsx)(u,{children:e}),t&&t]}),h=(0,o.memo)(p);r()}catch(e){r(e)}}))},577332:(e,t,n)=>{"use strict";n.a(e,(async(e,r)=>{try{n.r(t),n.d(t,{default:()=>O});var i=n(785893),o=n(308787),a=n(522933),s=n(561277),l=n(108363),d=n(995928),c=n(132077),u=n(453251),p=n(667294),h=n(824670),x=n(646284),g=n(818117),f=n(230811),m=n(281672),v=n(720300),w=n(726372),b=e([o,c,h,x,m,v,w]);[o,c,h,x,m,v,w]=b.then?(await b)():b;var y=Object.defineProperty,j=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,P=(e,t)=>{for(var n in t||(t={}))Z.call(t,n)&&k(e,n,t[n]);if(j)for(var n of j(t))I.call(t,n)&&k(e,n,t[n]);return e};const S=(0,g.ZP)(o.FlexBox).attrs({my:40,width:"100%"})`
  min-height: 120px;
`,_=({title:e,data:t,getAssetStr:n,chainId:r})=>{const a=(0,m.JB)(),d=(0,m.fU)(),h=(0,p.useMemo)((()=>{const e=[];return t.ordinals.forEach((t=>{e.push({src:a.getNFTIcons(r,t)[0]||""})})),t.value>0&&e.push({src:d.getChainControllerById(r).getConfig().image}),e}),[r,t]),x=(0,p.useMemo)((()=>{const e=[];return t.ordinals.forEach((t=>{var n;return e.push((null==(n=t.nftData.externalData)?void 0:n.name)||t.contractName||t.id)})),t.value>0&&e.push(n(t.value)),e}),[t,n]);return(0,i.jsxs)(o.FlexBox,{width:144,flexDirection:"column",justifyContent:"flex-start",alignItems:"center",children:[(0,i.jsx)(o.FlexBox,{mb:8,children:(0,i.jsx)(l.Z,{children:e})}),(0,i.jsx)(o.FlexBox,{height:48,width:48,m:8,children:(0,i.jsx)(c.Z,{items:h,size:u.X.Small})}),(0,i.jsx)(o.FlexBox,{mt:8,children:x.map((e=>(0,i.jsxs)(s.Z,{children:[" ",e]},e)))})]})},B=e=>{const{t}=(0,f.$G)("app");return(0,i.jsx)(_,P({title:t("general.send")},e))},C=e=>{const{t}=(0,f.$G)("app");return(0,i.jsx)(_,P({title:t("general.receive")},e))},O=()=>{const{signInMsg:e,accountData:t,inputs:n,outputs:r,handleApprove:s,handleReject:c,signerMessage:u,txData:p,rawPBST:g,getAssetStr:f}=(0,w.i)();return(0,i.jsx)(v.Z,{message:e,footer:(0,i.jsx)(h.Z,{primaryTitle:"general.approve",onPrimaryClick:s,secondaryTitle:"general.reject",onSecondaryClick:c}),children:(0,i.jsxs)(o.FlexBox,{alignItems:"center",children:[(0,i.jsxs)(o.FlexBox,{mt:32,alignItems:"center",children:[(0,i.jsx)(l.Z,{children:t.label}),(0,i.jsx)(d.Z,{children:(0,a.fL)(t.address)})]}),(0,i.jsx)(S,{children:n&&r?(0,i.jsxs)(o.FlexBox,{px:8,justifyContent:"space-between",flexDirection:"row",children:[(0,i.jsx)(B,{data:n,chainId:e.chainId,getAssetStr:f}),(0,i.jsx)(C,{data:r,chainId:e.chainId,getAssetStr:f})]}):(0,i.jsx)(o.FlexBox,{justifyContent:"center",alignItems:"center",children:(0,i.jsx)(x.Loader,{})})}),(0,i.jsx)(o.FlexBox,{children:(0,i.jsx)(d.Z,{children:u})}),(0,i.jsx)(o.FlexBox,{m:16,mb:40,children:(0,i.jsx)(o.TxData,{data:p,footerLabel:g})})]})})};r()}catch(e){r(e)}}))},132077:(e,t,n)=>{"use strict";n.a(e,(async(e,r)=>{try{n.d(t,{Z:()=>_});var i=n(785893),o=n(886597),a=n(506559),s=n(38187),l=n(458038),d=n(667294),c=n(771341),u=n(818117),p=n(950367),h=n(453251),x=n(150787),g=e([o]);o=(g.then?(await g)():g)[0];const f=({items:e,size:t,chainSrc:n,tokenImgSize:r,inlineChainWithToken:s=!0})=>{const{data:d,_size:c,restAmount:u,type:h}=(0,x.Y)(e,t,n);return(0,i.jsxs)(m,{$size:c,$length:d.length,children:[d.map(((t,l)=>(0,i.jsx)(j,{$step:l*p.Ss[c],$z_index:e.length-l,$size:c,"data-testid":"assetItem",children:n?(0,i.jsx)(o.Z,{img:t.src,chain:n,variant:r||a.e.Medium,withoutChain:0!==l,inlineWithToken:s,dataTestId:"tokenItem"}):(0,i.jsx)(P,{src:t.src,dataTestid:"nftItem"})},l))),u>0&&(0,i.jsx)(I,{id:"rest",$size:c,children:(0,i.jsx)(l.Z,{children:`+${u} ${p.Cg[h]}`})})]})},m=u.ZP.div`
  height: ${({$size:e})=>e===h.X.Small?"48px":"72px"};
  position: relative;
  width: ${({$size:e,$length:t})=>e===h.X.Small?48+15*(t-1)+"px":72+30*(t-1)+"px"};
`,v=u.iv`
  width: 48px;
  height: 48px;
`,w=u.iv`
  width: 72px;
  height: 72px;
`,b=u.iv`
  bottom: -10px;
  left: 68px;
`,y=u.iv`
  bottom: -7px;
  left: 80px;
`,j=(0,u.ZP)(s.Z).attrs({flexDirections:"row",alignItems:"center",justifyContent:"center"})`
  position: absolute;
  ${({$size:e})=>e===h.X.Small?v:w}

  border-radius: 8px;
  top: 0;
  left: ${({$step:e})=>e}px;

  ${({$z_index:e})=>u.iv`
      z-index: ${e};
    `}
`,Z=u.ZP.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`,I=(0,u.ZP)(s.Z).attrs({flexDirections:"row",flexWrap:"nowrap",justifyContent:"center",alignItems:"center"})`
  position: absolute;
  ${({$size:e})=>e===h.X.Small?b:y}

  padding: 8px;
  min-width: 74px;
  width: fit-content;
  border-radius: 8px;
  z-index: 10;
  background: ${({theme:e})=>e.colors.steel};
`,k=(0,u.ZP)(s.Z).attrs({alignItems:"center",justifyContent:"center"})``,P=({src:e,dataTestid:t})=>{const n=(0,d.useCallback)((()=>{return t=void 0,n=null,r=function*(){return new Promise((t=>{const n=new Image;n.onload=()=>t(!0),n.onerror=()=>t(!1),n.src=e}))},new Promise(((e,i)=>{var o=e=>{try{s(r.next(e))}catch(e){i(e)}},a=e=>{try{s(r.throw(e))}catch(e){i(e)}},s=t=>t.done?e(t.value):Promise.resolve(t.value).then(o,a);s((r=r.apply(t,n)).next())}));var t,n,r}),[e]),[r,o]=(0,d.useState)(!0);return(0,d.useEffect)((()=>{e&&n().then(o)}),[e,n]),r?(0,i.jsx)(Z,{src:e,"data-testId":t}):(0,i.jsx)(S,{})},S=()=>(0,i.jsx)(k,{children:(0,i.jsx)(c.Lo,{})}),_=f;r()}catch(e){r(e)}}))},139082:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(785893),i=n(15145),o=Object.defineProperty,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const c=e=>{var t=e,{dataTestId:n,color:o}=t,c=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&a)for(var r of a(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n})(t,["dataTestId","color"]);return(0,r.jsx)(i.Z,((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(a)for(var n of a(t))l.call(t,n)&&d(e,n,t[n]);return e})({fontSize:10,lineHeight:"16px",color:o,fontWeight:500,"data-testid":n},c))}},875472:(e,t,n)=>{var r=n(882689),i=n(701469);e.exports=function(e,t,n,o){return null==e?[]:(i(t)||(t=null==t?[]:[t]),i(n=o?void 0:n)||(n=null==n?[]:[n]),r(e,t,n))}},156790:(e,t,n)=>{"use strict";n.d(t,{E:()=>r});var r=(e=>(e.Uncongested="Uncongested",e.Congested="Congested",e.Average="Average",e))(r||{})},506559:(e,t,n)=>{"use strict";n.d(t,{e:()=>r});var r=(e=>(e.Xxl="XXL",e.Xl="XL",e.Large="Large",e.Medium="Medium",e.Small="Small",e.Xs="Xs",e))(r||{})},935527:(e,t,n)=>{"use strict";n.a(e,(async(e,r)=>{try{n.d(t,{$0:()=>g,$_:()=>b,Dx:()=>p,Gh:()=>u,Sj:()=>y,TR:()=>h,VY:()=>d,W2:()=>x,dk:()=>w,fq:()=>v,h4:()=>c,im:()=>l,nB:()=>f,pu:()=>j,qo:()=>m,t2:()=>Z,to:()=>I});var i=n(818117),o=n(308787),a=n(876777),s=e([o]);o=(s.then?(await s)():s)[0];const l=i.ZP.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: ${a.wL.black};
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`,d=(0,i.ZP)(o.FlexBox)`
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
`,c=i.ZP.div`
  display: flex;
  align-items: center;
  margin-bottom: 13px;
  padding: 20px;
  position: relative;
  overflow: hidden;
`,u=i.ZP.div`
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  padding-left: 12px;
  width: calc(100% - 15vw);
`,p=i.ZP.span`
  margin-top: 9px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
`,h=((0,i.ZP)(o.Link)`
  text-align: unset;
`,i.ZP.i`
  width: 44px;
  height: 44px;
  background: ${a.wL.deepSea};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`),x=i.ZP.div`
  background: ${a.wL.black};
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  overflow: auto;
`,g=i.ZP.section`
  letter-spacing: 0.35px;
  padding: 10px;
  border-bottom: 1px solid ${a.wL.black};
  border-top: 1px solid ${a.wL.black};
  display: flex;
  flex-direction: row-reverse;
`,f=(0,i.ZP)(o.FlexBox)`
  min-width: 72px;
  height: 21px;
  background-color: ${a.wL.darkGrey};
  border-radius: 54px;
  align-items: center;
  justify-content: center;
`,m=(0,i.ZP)(o.FlexBox)`
  flex: 1;
  text-align: right;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`,v=i.ZP.img`
  width: 17px;
  height: 17px;
  margin-right: 3px;
`,w=i.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 15px;

  svg {
    margin-right: 5px;
  }
`,b=i.ZP.div`
  display: flex;
  flex-direction: row;
  z-index: 3;
`,y=(0,i.ZP)(o.SecondaryButton)`
  margin-right: 10px;
`,j=(0,i.ZP)(o.PrimaryButton)``,Z=i.ZP.div`
  margin-left: 10px;
  overflow-x: auto;

  > .react-json-view {
    word-break: break-all;
  }
`,I=(0,i.ZP)(o.FlexBox).attrs({padding:"22px 8px 8px 8px",alignItems:"center"})`
  background: ${a.wL.mineShaft};
  border-radius: 8px;
  row-gap: 16px;
`;(0,i.ZP)(o.ConfirmLedger)`
  position: fixed;
  height: 90px;
`;r()}catch(e){r(e)}}))},749675:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(667294),i=n(504958),o=n(878020),a=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(d)for(var n of d(t))u.call(t,n)&&p(e,n,t[n]);return e};const x={lessThanXSeconds:{one:"less than a sec",other:"less than {{count}} secs"},xSeconds:{one:"1 sec",other:"{{count}} secs"},halfAMinute:"30 secs",lessThanXMinutes:{one:"less than a min",other:"less than {{count}} mins"},xMinutes:{one:"1 min",other:"{{count}} mins"},aboutXHours:{one:"about 1 hr",other:"about {{count}} hrs"},xHours:{one:"1 hr",other:"{{count}} hrs"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},g=(e,t,n={})=>{let r;const i=x[e];return r="string"==typeof i?i:1===t?i.one:i.other.replace("{{count}}",t.toString()),(null==n?void 0:n.addSuffix)?r+" ago":r},f=e=>{return(0,o.Z)(e,{addSuffix:!0,locale:(t=h({},i.Z),n={formatDistance:g},s(t,l(n)))});var t,n},m=e=>{var t,n,i,o,a,s;const l=(null==(n=null==(t=null==e?void 0:e.origin)?void 0:t.tab)?void 0:n.url)||"http://localhost",d=new URL(l).hostname,c=(null==(o=null==(i=null==e?void 0:e.origin)?void 0:i.tab)?void 0:o.favIconUrl)||"",u=(null==(s=null==(a=null==e?void 0:e.origin)?void 0:a.tab)?void 0:s.title)||"",[p,h]=(0,r.useState)(f(new Date(e.time)));return(0,r.useEffect)((()=>{const t=setInterval((()=>{h(f(new Date(e.time)))}),1e3);return()=>clearInterval(t)}),[e.time]),{timeStamp:p,url:l,domain:d,logo:c,title:u}}},88512:(e,t,n)=>{"use strict";n.a(e,(async(e,r)=>{try{n.d(t,{TR:()=>c,VY:()=>d,zU:()=>u});var i=n(818117),o=n(308787),a=n(884967),s=n(876777),l=e([o]);o=(l.then?(await l)():l)[0];const d=(0,i.ZP)(o.FlexBox).attrs({flexDirection:"row",alignItems:"space-between",backgroundColor:s.wL.mineShaft,p:16})``,c=i.ZP.img`
  border-radius: 4px;
`,u=(0,i.ZP)(o.Link)`
  text-align: left;
  ${(0,a.LH)()}
`;r()}catch(e){r(e)}}))},978410:(e,t,n)=>{"use strict";n.a(e,(async(e,r)=>{try{n.d(t,{W:()=>l});var i=n(818117),o=n(308787),a=n(876777),s=e([o]);o=(s.then?(await s)():s)[0];const l=(0,i.ZP)(o.FlexBox)`
  height: 100%;
  width: 100%;
  background: ${a.wL.black};
`;r()}catch(e){r(e)}}))},726372:(e,t,n)=>{"use strict";n.a(e,(async(e,r)=>{try{n.d(t,{i:()=>$});var i=n(244431),o=n.n(i),a=n(617656),s=n(23064),l=n(831352),d=n(522933),c=n(281672),u=n(488049),p=n(667294),h=n(230811),x=n(363119),g=n(996974),f=n(691438),m=n(716792),v=n(427504),w=n(604690),b=n(519416),y=e([c,u,m,w]);[c,u,m,w]=y.then?(await y)():y;var j=Object.defineProperty,Z=Object.defineProperties,I=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,_=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,B=(e,t)=>{for(var n in t||(t={}))P.call(t,n)&&_(e,n,t[n]);if(k)for(var n of k(t))S.call(t,n)&&_(e,n,t[n]);return e},C=(e,t)=>Z(e,I(t)),O=(e,t,n)=>new Promise(((r,i)=>{var o=e=>{try{s(n.next(e))}catch(e){i(e)}},a=e=>{try{s(n.throw(e))}catch(e){i(e)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(o,a);s((n=n.apply(e,t)).next())}));const D=e=>{const t=(0,c.fU)(),n=t.getChainControllerById(l.yp.Bitcoin),{t:r}=(0,h.$G)("app"),[i,o]=(0,p.useState)({inputs:{},outputs:{}}),{activeWalletId:d,wallets:u}=(0,x.v9)((e=>e.wallets)),g=(0,x.v9)((e=>e.wallets.wallets[d].chainData[n.getId()].address)),f=(0,p.useCallback)((e=>O(void 0,null,(function*(){const r=u[d].chainData[n.getId()];r.address=e;return t.getNFTBalanceRequests({[n.getId()]:r})[0].then((e=>Object.values(e[n.getId()]))).catch((()=>[]))}))),[]),m=(0,p.useCallback)((()=>O(void 0,null,(function*(){a.Wi(w);let t=new a._B;try{t=a._B.fromBase64(e,{network:a.QW.bitcoin})}catch(e){}try{t=a._B.fromHex(e,{network:a.QW.bitcoin})}catch(e){}if(0===t.txInputs.length)throw r("controller_errors.no_valid_inputs");const n=[],i=[],o={inputs:{},outputs:{}};yield t.txInputs.reduce(((e,r,i)=>O(void 0,null,(function*(){var l,d,c;yield e;let u="",p=0;const{witnessUtxo:h,nonWitnessUtxo:x,finalScriptWitness:m,partialSig:v,tapInternalKey:w}=t.data.inputs[i];if(h)u=w&&(0,s.isTaprootInput)(t.data.inputs[i])?a.PP.p2tr({internalPubkey:w,network:a.QW.bitcoin}).address||"":a.Lk.fromOutputScript(h.script,a.QW.bitcoin),p=h.value;else if(x){const e=a.YW.fromBuffer(x).outs[t.txInputs[i].index];u=a.Lk.fromOutputScript(e.script,a.QW.bitcoin),p=e.value}const b=yield f(u),y=r.hash.reverse().toString("hex"),j=b.find((e=>{if(!e.nftData.location)return!1;const[t,n,i]=e.nftData.location.split(":");return t===y&&r.index===Number(n)})),Z=!!m||!!v,I=u==g;j?o.inputs[u]=C(B({},o.inputs[u]),{ordinals:(null==(l=o.inputs[u])?void 0:l.ordinals)?[...o.inputs[u].ordinals,j]:[j]}):o.inputs[u]?o.inputs[u]={ordinals:(null==(d=o.inputs[u||""])?void 0:d.ordinals)||[],value:o.inputs[u].value+p}:o.inputs[u]={ordinals:(null==(c=o.inputs[u||""])?void 0:c.ordinals)||[],value:p},n.push({address:u,ordinal:j,isSigned:Z,myInput:I,value:p})}))),Promise.resolve());let l=n.slice();const d=n.reduce(((e,t)=>e+t.value),0);t.txOutputs.forEach((e=>{let t=e.value;const n=[];l.find((e=>t-e.value>=0?(n.push(e),t-=e.value,l=l.slice(1),0===t):!(t-e.value<0)||(n.push(C(B({},e),{value:t})),e.value-=t,!0)),[]);const r=n.find((e=>e.ordinal)),o=null==r?void 0:r.ordinal;i.push({address:e.address||"",value:e.value,ordinal:o})}));const c=i.reduce(((e,t)=>e+t.value),0),u=i.some((e=>e.address!==i[0].address));return i.forEach((e=>{var t,n,r,i,a;const s=null==e?void 0:e.ordinal;o.outputs=C(B({},o.outputs),u&&s&&d>c?{[e.address||""]:C(B({},o.outputs[e.address||""]),{ordinals:(null==(t=o.outputs[e.address||""])?void 0:t.ordinals)?[...o.outputs[e.address||""].ordinals,s]:[s]})}:{[e.address||""]:{ordinals:(null==(n=o.outputs[e.address||""])?void 0:n.ordinals)||[],value:(null!=(a=null==(i=null==(r=o.outputs)?void 0:r[e.address||""])?void 0:i.value)?a:0)+e.value}})})),o}))),[e,a.QW.bitcoin,f,g]);return(0,p.useEffect)((()=>{m().then((e=>{o(e)}))}),[m]),{pSBTData:i}},$=()=>{var e,t,n;const{t:r}=(0,h.$G)("app"),i=(0,g.s0)(),a=(0,g.TH)(),s=null!=(t=null==(e=null==a?void 0:a.state)?void 0:e.singleElement)&&t,l=(0,c.UW)(),w=(0,c.Ni)(),{messages:y}=(0,x.v9)((e=>e.dappsMessages)),{wallets:j,activeWalletId:Z}=(0,x.v9)((e=>e.wallets));(0,u.C)();const{dappMessage:I}=(0,m.l)(),k=(0,p.useMemo)((()=>{var e;return{address:null==(e=j[Z].chainData)?void 0:e[I.chainId].address,label:j[Z].label}}),[j,Z,I]),P=null==(n=null==I?void 0:I.raw)?void 0:n.params[0],S=(null==P?void 0:P.psbtBase64)||(null==P?void 0:P.psbtHex),{pSBTData:_}=D(S);(0,p.useEffect)((()=>{y.length>1&&s&&i(-1)}),[y,s,i]);const $=(0,p.useCallback)((e=>{const t=l.chains.getChainControllersByType(f.J.Bitcoin)[0];return(0,v.zr)(new(o())((0,v.R6)(t,e,t.getConfig().tokenSymbol,t.getConfig().decimals)),t.getConfig().tokenSymbol)}),[l]),T=(0,p.useCallback)(((e="XDEFI: user rejected the transaction")=>{b.browser.runtime.sendMessage(null,{xdefiId:null==I?void 0:I.xdefiId,raw:{id:null==I?void 0:I.xdefiId,error:e}}).finally((()=>{window.close()})),l.dapps.removeMessageById(null==I?void 0:I.xdefiId)}),[I,l.dapps]),F=(0,p.useCallback)((e=>O(void 0,null,(function*(){const t=j[Z],n=yield l.signPsbt(P,I.chainId,t.id,{walletPassword:e||w.masterPassword});b.browser.runtime.sendMessage(void 0,{xdefiId:I.xdefiId,raw:{id:I.xdefiId,result:n}}).finally((()=>{window.close()}))}))),[j,Z,l,P,w.masterPassword,I.xdefiId]),M=(0,p.useCallback)((e=>{const t="FROM"===e?_.inputs:_.outputs;return Object.keys(t).reduce(((n,r)=>{const i=[];return t[r].value>0&&i.push($(t[r].value)),t[r].ordinals.forEach((e=>{var t;const n=(null==(t=e.nftData.externalData)?void 0:t.name)||e.contractName||e.id;i.push(n)})),n=C(B({},n),{[`${e}: ${(0,d.fL)(r)}`]:i})}),{})}),[$,_]),E=M("FROM"),L=M("TO"),W=(0,p.useMemo)((()=>{const e=Object.keys(_.inputs).length;return e<=1?r("utxo_popup.creating_tx"):r("utxo_popup.multiple_tx",{participantCount:e})}),[r,_]);return{signInMsg:I,rawPBST:S,pSBTData:_,handleReject:T,handleApprove:F,getAssetStr:$,signerMessage:W,inputs:_.inputs[k.address],outputs:_.outputs[k.address],txData:{"function type":"PSBT",inputs:E,outputs:L,"data format":(null==P?void 0:P.psbtBase64)?"Base 64":(null==P?void 0:P.psbtHex)?"Hex":"Unknown"},accountData:k}};r()}catch(e){r(e)}}))},950367:(e,t,n)=>{"use strict";n.d(t,{Cg:()=>i,Ss:()=>o,aA:()=>a});var r=n(453251);const i={nft:"NFTs",asset:"Assets"},o={[r.X.Small]:16,[r.X.Large]:24},a={[r.X.Small]:6,[r.X.Large]:4}},453251:(e,t,n)=>{"use strict";n.d(t,{X:()=>r});var r=(e=>(e.Small="Small",e.Large="Large",e))(r||{})},150787:(e,t,n)=>{"use strict";n.d(t,{Y:()=>o});var r=n(453251),i=n(950367);const o=(e,t,n)=>{const o=t||(n||e.length>4?r.X.Small:r.X.Large),a=i.aA[o],s=n?"asset":"nft",{data:l,restAmount:d}=e.length>a?{data:e.slice(0,a),restAmount:e.length-a}:{data:e,restAmount:0};return{_size:o,type:s,data:l,restAmount:d,maxItems:a}}}}]);
//# sourceMappingURL=6471.bundle.js.map