!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="21d5ae52-fdc5-401e-a570-9537e4a0f467",e._sentryDebugIdIdentifier="sentry-dbid-21d5ae52-fdc5-401e-a570-9537e4a0f467")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"28.2.2"},(self.webpackChunkxdefi_extension=self.webpackChunkxdefi_extension||[]).push([[865],{778286:(e,t,a)=>{"use strict";a.a(e,(async(e,t)=>{try{a(785893),a(667294);var n=a(308787),r=a(771341),s=(a(230811),a(378241)),i=a(980486),o=a(426307),l=a(158053),c=e([n,s,i,o,l]);[n,s,i,o,l]=c.then?(await c)():c;r._g,r.o,r.xC;t()}catch(e){t(e)}}))},158053:(e,t,a)=>{"use strict";a.a(e,(async(e,t)=>{try{var n=a(785893),r=a(667294),s=a(308787),i=a(646284),o=a(818117),l=a(230811),c=a(992782),d=a(811601),h=a(994396),x=e([s,i,c,d,h]);[s,i,c,d,h]=x.then?(await x)():x;const u=(0,o.ZP)(s.FlexBox).attrs({px:8})`
  transition: background-color 300ms;

  &:hover {
    background-color: ${({theme:{palette:e}})=>e.container.hover};
  }
`,p=({chainId:e,onSelectAddress:t})=>{const{t:a}=(0,l.$G)("app"),{accounts:r,keyword:o,handleChangeKeyword:x,onSortChange:p,accountSortingOptions:g,sortAccountNameStatus:m,sortBalanceStatus:y,inputRef:f}=(0,d.x)(e);return(0,n.jsxs)(s.FlexBox,{pb:24,children:[(0,n.jsxs)(s.FlexBox,{pl:8,pr:12,py:8,gridGap:8,children:[(0,n.jsx)(h.Mj,{value:o,onChange:x,placeholder:a("general.search"),inputRef:f}),(0,n.jsx)(h.Cd,{children:(0,n.jsx)(i.SortingHeader,{options:g,onSortChange:p,sortStatus:[m,y]})})]}),(0,n.jsx)(s.FlexBox,{maxHeight:"300px",children:(0,n.jsx)(h.QZ,{children:r.map((a=>(0,n.jsx)(u,{children:(0,n.jsx)(c.Z,{chainId:e,account:a,onClick:t})},a.id)))})})]})};(0,r.memo)(p);t()}catch(e){t(e)}}))},980486:(e,t,a)=>{"use strict";a.a(e,(async(e,t)=>{try{var n=a(785893),r=a(646284),s=a(522933),i=a(561277),o=a(650511),l=a(308787),c=a(667294),d=a(230811),h=a(818117),x=a(728071),u=a(994396),p=e([r,l,u]);[r,l,u]=p.then?(await p)():p;const g=({address:e,onClick:t})=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y,{onClick:t,children:(0,n.jsx)(i.Z,{"data-testid":"recentyEnteredAddressRow",children:(0,s.fL)(e,32,4)})}),(0,n.jsx)(l.DashLine,{})]}),m=({chainId:e,toAddress:t,onChangeAddress:a,error:s,onSelectAddress:i,recentSentAddresses:h})=>{const{t:p}=(0,d.$G)("app"),m=(0,c.useCallback)((e=>{a(e.target.value)}),[a]),y=(0,c.useRef)(null);return(0,c.useEffect)((()=>{y.current&&y.current.focus()}),[]),(0,x.E)((()=>{y.current&&y.current.focus()})),(0,n.jsxs)(l.FlexBox,{children:[(0,n.jsx)(l.FlexBox,{my:24,mx:8,children:(0,n.jsx)(r.AddressInput,{chainId:e,value:t,onChange:m,tipError:s,label:"TO",placeholder:"Recipient address",dataTestId:"recipientAddressFld",inputRef:y})}),h.length>0&&(0,n.jsx)(l.FlexBox,{ml:16,mb:8,children:(0,n.jsx)(o.Z,{children:p("address_tab.recently_entered_addresses")})}),(0,n.jsx)(l.FlexBox,{maxHeight:s?"240px":"260px",children:(0,n.jsx)(u.QZ,{children:h.map((e=>(0,n.jsx)(g,{address:e,onClick:()=>i({toAddress:e})},e)))})})]})},y=(0,h.ZP)(l.FlexBox).attrs({justifyContent:"center",p:16})`
  cursor: pointer;
  height: 48px;
  transition: background-color 300ms;

  &:hover {
    background-color: ${({theme:{palette:e}})=>e.container.hover};
  }
`;(0,c.memo)(m);t()}catch(e){t(e)}}))},512948:(e,t,a)=>{"use strict";a.a(e,(async(e,t)=>{try{var n=a(785893),r=a(818117),s=a(308787),i=a(876777),o=a(561277),l=a(665710),c=a(650511),d=a(667294),h=a(522933),x=e([s]);s=(x.then?(await x)():x)[0];const u=r.ZP.div`
  cursor: pointer;

  :hover {
    background: ${i.wL.nightOcean};
  }

  &:not(:last-of-type) > * {
    border-bottom: 1px dashed ${i.wL.cynicalBlack};
  }
`,p=(0,r.ZP)(s.FlexBox).attrs({flexDirection:"row",alignItems:"center",gridGap:8})`
  height: 56px;
  padding: 0 16px;
`,g=r.ZP.div``,m=r.ZP.div`
  flex: 1;
  overflow: hidden;
`,y=r.ZP.div`
  width: 110px;
  text-align: right;
`,f=(0,r.ZP)(s.FlexBox).attrs({flexDirection:"row",alignItems:"center"})`
  white-space: nowrap;
`,v=({item:e,onClick:t})=>(0,n.jsx)(u,{onClick:()=>t(e),"data-testid":"contactRow",children:(0,n.jsxs)(p,{children:[(0,n.jsx)(g,{children:(0,n.jsx)(s.Avatar,{text:e.name,image:e.profileImage,size:"md"})}),(0,n.jsxs)(m,{children:[(0,n.jsx)(o.Z,{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",dataTestId:"contactName",children:e.name}),(0,n.jsxs)(f,{children:[(0,n.jsx)(c.Z,{textOverflow:"ellipsis",overflow:"hidden",dataTestId:"addressLabel",children:e.addressItem.label}),(0,n.jsx)(s.FlexBox,{flex:1,"data-testid":"address","data-chain":e.addressItem.chainId,children:(0,n.jsx)(c.Z,{children:`: ${(0,h.fL)(e.addressItem.address,5,6)}`})})]})]}),(0,n.jsx)(y,{children:(0,n.jsx)(c.Z,{dataTestId:"updatedAt",children:(0,l.Z)(e.updatedAt,"yyyy/MM/dd HH:mm")})})]})});(0,d.memo)(v);t()}catch(e){t(e)}}))},796441:(e,t,a)=>{"use strict";a.a(e,(async(e,t)=>{try{a(785893);var n=a(308787),r=a(646284),s=(a(667294),a(246858),a(169937),a(876777)),i=a(818117),o=a(130201),l=(a(230811),a(723140)),c=e([n,r,o,l]);[n,r,o,l]=c.then?(await c)():c;i.ZP.div`
  padding-bottom: 8px;
  border-bottom: 1px solid ${s.wL.black};
`;t()}catch(e){t(e)}}))},479611:(e,t,a)=>{"use strict";a.a(e,(async(e,t)=>{try{a(785893);var n=a(471955),r=a(41947),s=(a(667294),a(363119),a(691438),a(281672)),i=a(568847),o=e([n,r,s,i]);[n,r,s,i]=o.then?(await o)():o;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;t()}catch(e){t(e)}}))},24261:(e,t,a)=>{"use strict";a.a(e,(async(e,t)=>{try{var n=a(785893),r=a(308787),s=a(667294),i=a(58987),o=a(864195),l=a(281672),c=a(972819),d=a(230811),h=e([r,i,l,c]);[r,i,l,c]=h.then?(await h)():h;const x=({onClose:e,defaultValues:t})=>{const{t:a}=(0,d.$G)("app"),{addNotification:h}=(0,c.Z)(),x=(0,l.i_)(),u=(0,s.useCallback)((t=>{return n=void 0,r=null,s=function*(){const n=yield(0,o.l)(t);x.createContact(n),h({title:a("alert.general.contact.added.title"),message:a("alert.general.contact.added.message",{name:n.name})}),e()},new Promise(((e,t)=>{var a=e=>{try{o(s.next(e))}catch(e){t(e)}},i=e=>{try{o(s.throw(e))}catch(e){t(e)}},o=t=>t.done?e(t.value):Promise.resolve(t.value).then(a,i);o((s=s.apply(n,r)).next())}));var n,r,s}),[x,h,a,e]);return(0,n.jsx)(r.Dialog,{title:a("general.add_new_contact"),open:!0,onClose:e,showFooter:!1,dataTestId:"addNewContactPopup",noPaddingInBody:!0,highOpacityBackground:!1,children:(0,n.jsx)(i.t,{defaultValues:t,onSubmit:u,onClose:e,type:"create"})})};(0,s.memo)(x);t()}catch(e){t(e)}}))},623188:(e,t,a)=>{"use strict";a.a(e,(async(e,t)=>{try{a(785893),a(230811),a(771341);var n=a(308787),r=(a(814302),a(995928),e([n]));n=(r.then?(await r)():r)[0];t()}catch(e){t(e)}}))},983144:(e,t,a)=>{"use strict";a.a(e,(async(e,t)=>{try{a(785893),a(771341);var n=a(308787),r=(a(814302),a(346539),a(230811),e([n]));n=(r.then?(await r)():r)[0];t()}catch(e){t(e)}}))},106964:(e,t,a)=>{"use strict";a.a(e,(async(e,n)=>{try{a.d(t,{Z:()=>g});var r=a(785893),s=a(667294),i=a(308787),o=a(818117),l=a(650511),c=a(230811),d=e([i]);i=(d.then?(await d)():d)[0];const h=({functionType:e,dashedLine:t=!1})=>{const{t:a}=(0,c.$G)("app");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(u,{shorter:t,children:[(0,r.jsx)(l.Z,{children:a("function_type.transaction_type")}),(0,r.jsx)(x,{children:(0,r.jsx)(l.Z,{children:e})})]}),t&&(0,r.jsx)(p,{children:(0,r.jsx)(i.DashLine,{})})]})},x=o.ZP.div`
  text-align: right;
`,u=(0,o.ZP)(i.FlexBox).attrs({flexDirection:"row",justifyContent:"space-between",alignItems:"center"})`
  padding: 0 20px;
  height: 50px;

  ${({shorter:e})=>e&&o.iv`
      height: 49px;
    `}
`,p=o.ZP.div`
  margin: 0 10px;
`,g=(0,s.memo)(h);n()}catch(e){n(e)}}))},293709:(e,t,a)=>{"use strict";a.a(e,(async(e,n)=>{try{a.d(t,{Z:()=>d});var r=a(785893),s=a(667294),i=a(230811),o=a(556071),l=e([o]);o=(l.then?(await l)():l)[0];const c=e=>{var t,a;const n=e.toString(),r=n.indexOf(".");let s=0;if(-1!==r){s=null!=(a=null==(t=n.slice(r+1).match(/^0*/))?void 0:t[0].length)?a:0}return s>0?parseFloat("0."+"0".repeat(s-1)+"1"):1},d=({gasPrice:e,gasLimit:t,handleGasLimitChange:a,setGasPrice:n,gasLimitError:l=!1,error:d,disabled:h,gasEstimateError:x,minGasPrice:u,maxGasPrice:p})=>{const g=(0,s.useMemo)((()=>c(p/100)),[p]),{t:m}=(0,i.$G)("app");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.n,{type:"number",label:m("gas_input.gwei_unit"),noIndents:!0,value:e,onChange:e=>{n(Number(e.target.value))},placeholder:"37",disabled:h,tipError:e<.01&&m("gas_input.gwei_tip_error")||d,min:u,step:g}),(0,r.jsx)(o.n,{type:"number",label:m("gas_input.gas_limit"),value:t,onChange:e=>a(e.target.value),placeholder:"21000",disabled:h,tipError:l&&m("gas_input.gas_limit_tip_error_1")||x&&m("gas_input.gas_limit_tip_error_2")||"",min:0,noIndents:!0,step:1})]})};n()}catch(e){n(e)}}))},545455:(e,t,a)=>{"use strict";a.a(e,(async(e,t)=>{try{var n=a(785893),r=a(667294),s=a(694441),i=a(847384),o=a(308787),l=a(303108),c=e([s,i,o,l]);[s,i,o,l]=c.then?(await c)():c;const d=({currentAsset:e,getBalance:t,disabled:a,onChangeAmount:r,amount:c,amountError:d,onMaxClicked:h,contactName:x,chainId:u,toAddress:p,accountId:g,detrimentalUTXORemove:m})=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.W,{children:(0,n.jsx)(s.Z,{contactName:x,accountId:g,chainId:u,currentAsset:e,toAddress:p})}),(null==e?void 0:e.collectible)?(0,n.jsx)(o.FlexBox,{height:"100px",py:"8px"}):(0,n.jsx)(i.Z,{detrimentalUTXORemove:m,currentAsset:e,getBalance:t,disabled:a,onChangeAmount:r,amount:c,amountError:d,onMaxClicked:h,chainId:u})]});(0,r.memo)(d);t()}catch(e){t(e)}}))},817795:(e,t,a)=>{"use strict";a.a(e,(async(e,n)=>{try{a.d(t,{Z:()=>m});var r=a(785893),s=a(667294),i=a(308787),o=a(818117),l=a(300286),c=a(230811),d=a(556071),h=e([i,d]);[i,d]=h.then?(await h)():h;const x=({memo:e,setMemo:t,dashedLine:a=!1,errors:n,disabled:s})=>{const{t:o}=(0,c.$G)("app");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{shorter:a,children:(0,r.jsx)(d.n,{type:"text",label:o("general.memo"),value:e,onChange:e=>t&&t(e.target.value),disabled:s})}),n.memo&&(0,r.jsx)(p,{children:(0,r.jsx)(l.Z,{children:n.memo})}),a&&(0,r.jsx)(g,{children:(0,r.jsx)(i.DashLine,{})})]})},u=o.ZP.div`
  padding-top: 10px;
  width: 100%;

  ${({shorter:e})=>e&&o.iv`
      height: 49px;
    `}
`,p=o.ZP.div`
  display: block;
  align-self: flex-start;
  margin-top: -20px;
  margin-bottom: 20px;
`,g=o.ZP.div`
  margin: 0 10px;
`,m=(0,s.memo)(x);n()}catch(e){n(e)}}))},726546:(e,t,a)=>{"use strict";a.a(e,(async(e,n)=>{try{a.d(t,{Z:()=>l});var r=a(785893),s=a(230811),i=a(556071),o=e([i]);i=(o.then?(await o)():o)[0];const l=({setNonce:e,nonce:t,disabled:a})=>{const{t:n}=(0,s.$G)("app");return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i.n,{type:"number",label:n("general.nonce"),value:t,onChange:t=>e(t.target.value),placeholder:"42",disabled:a,min:0,noIndents:!0})})};n()}catch(e){n(e)}}))},845565:(e,t,a)=>{"use strict";a.a(e,(async(e,n)=>{try{a.d(t,{Z:()=>Z});var r=a(785893),s=a(667294),i=a(308787),o=a(218006),l=a(646284),c=a(59854),d=a.n(c),h=a(252746),x=a(230811),u=a(650511),p=a(421753),g=a(561277),m=a(412252),y=a(814401),f=a(729154),v=a(834392),w=a(257525),b=a(769364),j=e([i,l,b]);[i,l,b]=j.then?(await j)():j;const Z=({dashedLine:e=!1,slider:t=!1,setSpeedValue:a,speedValue:n,min:c=0,max:j=99999999,gasPrice:Z=0,setGasPrice:I,timeValue:P,disabled:C})=>{const{t:F}=(0,x.$G)("app"),[k,B]=(0,s.useState)(Z),S=(0,s.useCallback)((e=>{e!==k&&B(e)}),[k,B]);(0,h.b)((()=>{I&&I(k)}),500,[k]);const $=(0,s.useMemo)((()=>c&&j?d()((c+j)/2,4):0),[c,j]);(0,s.useEffect)((()=>{B(Z)}),[Z]);const T=P?(0,o.jP)(P):void 0;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(b.X2,{shorter:e,children:[(0,r.jsxs)(b.h4,{children:[(0,r.jsxs)(i.FlexBox,{flexDirection:"row",alignItems:"center",children:[(0,r.jsx)(i.FlexBox,{ml:8,children:(0,r.jsx)(m.Z,{children:F("processing_time.title")})}),t&&(0,r.jsx)(l.InfoHelper,{message:F("processing_time.message"),dataTestId:"processingTimeInfoIcon"})]}),t&&T&&(0,r.jsxs)(i.FlexBox,{flexDirection:"row",justifyContent:"center",alignItems:"center",children:[(0,r.jsx)(b.pb,{children:(0,r.jsx)(p.Z,{children:F("processing_time.estimate")})}),(0,r.jsx)(i.FlexBox,{px:4,mr:0,children:(0,r.jsx)(g.Z,{children:T.value})}),(0,r.jsx)(b.pb,{children:(0,r.jsx)(p.Z,{children:T.text})})]})]}),t?(0,r.jsxs)(b.XX,{children:[(0,r.jsx)("input",{type:"range",value:k,min:c,max:j,onInput:e=>{var t,a,n;!isNaN(Number(null==(t=null==e?void 0:e.target)?void 0:t.value))&&Number(null==(a=null==e?void 0:e.target)?void 0:a.value)>0&&S(Number(null==(n=null==e?void 0:e.target)?void 0:n.value))},step:.001}),(0,r.jsxs)(i.FlexBox,{flexDirection:"row",mt:5,justifyContent:"space-between",children:[(0,r.jsx)(b.DN,{textAlign:"start",flex:1,children:(0,r.jsx)(u.Z,{children:`${c.toLocaleString(navigator.language,{maximumFractionDigits:v.uO})} Gwei`})}),(0,r.jsx)(b.DN,{textAlign:"center",flex:1,children:(0,r.jsx)(u.Z,{children:`${$.toLocaleString(navigator.language,{maximumFractionDigits:v.uO})} Gwei`})}),(0,r.jsx)(b.DN,{textAlign:"end",flex:1,children:(0,r.jsx)(u.Z,{children:`${j.toLocaleString(navigator.language,{maximumFractionDigits:v.uO})} Gwei`})})]})]}):(0,r.jsx)(b.tu,{disabled:!!C,children:w.M.map((e=>{return(0,r.jsx)(i.FlexBox,{flex:1,children:(0,r.jsx)(b.zx,{type:"button",onClick:(e.value,t=e.key,()=>{t!==n&&a&&a(t)}),active:e.key===n,children:e.key===n?(0,r.jsx)(f.Z,{children:F(e.title)}):(0,r.jsx)(y.Z,{children:F(e.title)})})},e.title);var t}))})]}),e&&(0,r.jsx)(b.pk,{children:(0,r.jsx)(i.DashLine,{})})]})};n()}catch(e){n(e)}}))},900009:(e,t,a)=>{"use strict";a.a(e,(async(e,t)=>{try{a(785893),a(667294);var n=a(308787),r=(a(771341),a(889159),a(458038),a(561277),a(230811),a(857109)),s=a(848799),i=e([n,r,s]);[n,r,s]=i.then?(await i)():i;t()}catch(e){t(e)}}))},1412:(e,t,a)=>{"use strict";a.a(e,(async(e,n)=>{try{a.d(t,{Z:()=>B});var r=a(785893),s=a(646284),i=a(691438),o=a(835534),l=a(831352),c=a(177616),d=a(327194),h=a(739989),x=a(281672),u=a(308787),p=a(230811),g=a(667294),m=a(363119),y=a(972819),f=a(25022),v=a(162318),w=a(184698),b=a(284755),j=a(519416),Z=a(851892),I=a(682541),P=a(901176),C=a(24296),F=a(123226),k=e([s,o,x,u,y,v,w,b,I,P,C]);[s,o,x,u,y,v,w,b,I,P,C]=k.then?(await k)():k;const B=({transactionMsg:e})=>{var t;const{t:a}=(0,p.$G)("app"),{onRequestPermission:n}=(0,w.gI)(),[k,B]=(0,g.useState)(!1),S=(0,x.UW)(),{addNotification:$}=(0,y.Z)(),T=(0,x.nl)(),_=(0,x.Ni)(),{requireTxPassword:A}=(0,m.v9)((e=>e.settings)),M=(0,m.v9)((e=>e.wallets.wallets[e.wallets.activeWalletId])),D=(0,g.useMemo)((()=>e.raw.params.length?e.raw.params[0]:e.raw.params),[e]),L=(0,g.useMemo)((()=>{var t;return(null==(t=e.origin)?void 0:t.url)||""}),[null==(t=e.origin)?void 0:t.url]),O=(0,g.useMemo)((()=>{var e,t;if(!(null==D?void 0:D.amount))return"0";if((null==D?void 0:D.amount)||(null==D?void 0:D.value)||"0"){if((0,l.ym)(D.amount))return c.formatUnits(null==(e=null==D?void 0:D.amount)?void 0:e.amount,null==(t=null==D?void 0:D.amount)?void 0:t.decimals).toString()}return c.formatUnits(d.O$.from(null==D?void 0:D.amount).toString()).toString()}),[D.amount,D.value]),E=S.chains.getFirstChainControllerByType(i.J.Solana),{fee:N}=(0,P.g)({chain:E,params:D}),G=(0,C.z)({chain:E,params:D}),J=()=>{h.Z.info("handleReject ",e),j.browser.runtime.sendMessage(null,{xdefiId:e.xdefiId,raw:{id:e.xdefiId,error:a("transaction.errors.user_rejected_the_message_signing")}}),T.removeMessageById(e.xdefiId),window.close()},{openDialog:R,onCloseDialog:z,handleConfirm:W}=(0,s.useConfirmDialog)((t=>{return r=void 0,s=null,l=function*(){if(h.Z.debug({method:"handleApprove"}),h.Z.debug({msg:"preMP",requireTxPassword:A}),A&&!t)return;const r=t||_.masterPassword;if(r){B(!0);try{const t=o.Z.getWalletIdWithMessage(e);yield S.approveDappsTransaction(e,t,f.GG.Transaction,{walletPassword:r},{}),T.removeMessageById(e.xdefiId),window.close()}catch(t){if("TransportOpenUserCancelled"===(null==t?void 0:t.name))return $({title:a("alert.transaction.hardware.error.main.title"),type:"error",message:a("alert.transaction.hardware.error.main.message")}),n();if(null==t?void 0:t.message.includes("Invalid password"))return $({title:a("alert.wallet.password.error.incorrect.title"),type:"error",message:a("alert.wallet.password.error.incorrect.messages.try_again")});const r=(0,Z.sJ)(t);h.Z.error("Transfer error",{error:r}),$({title:a("alert.transaction.errors.transfer.title"),type:"error",message:a((0,Z.ZP)(r,i.J.Solana))}),h.Z.error({transactionMsg:"Error in message approval",e:t}),j.browser.runtime.sendMessage(void 0,{xdefiId:e.xdefiId,raw:{id:e.xdefiId,error:JSON.stringify(t)}})}finally{B(!1)}h.Z.info("end handleApprove")}},new Promise(((e,t)=>{var a=e=>{try{i(l.next(e))}catch(e){t(e)}},n=e=>{try{i(l.throw(e))}catch(e){t(e)}},i=t=>t.done?e(t.value):Promise.resolve(t.value).then(a,n);i((l=l.apply(r,s)).next())}));var r,s,l}));return(0,r.jsx)(F.k,{body:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.ConfirmDialog,{open:R,onClose:z,onSubmit:W}),(0,r.jsxs)(u.FlexBox,{height:"100%",children:[(0,r.jsx)(v.Z,{url:L,displayAmount:O,action:"approve",from:D.from,to:D.to||D.recipient,assetSymbol:G,defaultIcon:null!=(U=E.getConfig().image)?U:E.getConfig().fallbackImage,isTokenTransfer:!1,chainId:E.getId(),fee:Number(N),visibleTransactionAmount:E.getConfig("dappVisibleTxAmount")}),(0,r.jsx)(I.Z,{params:D,method:e.raw.method}),(0,r.jsx)(b.Z,{handleConfirm:()=>W(),fee:Number(N),chainId:E.getId(),assetSymbol:G,errors:{},handleReject:J,loading:k,selectedWallet:M})]})]})});var U};n()}catch(e){n(e)}}))},233903:(e,t,a)=>{"use strict";a.a(e,(async(e,n)=>{try{a.r(t),a.d(t,{default:()=>j});var r=a(785893),s=a(179826),i=a(667294),o=a(363119),l=a(996974),c=a(691438),d=a(1412),h=a(281672),x=a(488049),u=a(519416),p=e([d,h,x]);[d,h,x]=p.then?(await p)():p;const g=(0,i.lazy)((()=>Promise.all([a.e(5171),a.e(3522)]).then(a.bind(a,43522)))),m=(0,i.lazy)((()=>Promise.all([a.e(5902),a.e(1466)]).then(a.bind(a,461466)))),y=(0,i.lazy)((()=>a.e(811).then(a.bind(a,630811)))),f=(0,i.lazy)((()=>a.e(6736).then(a.bind(a,186736)))),v=(0,i.lazy)((()=>a.e(4963).then(a.bind(a,154963)))),w=(0,i.lazy)((()=>a.e(794).then(a.bind(a,400794)))),b=(0,i.lazy)((()=>a.e(6092).then(a.bind(a,666092)))),j=()=>{(0,x.C)();const{xdefiId:e}=(0,l.UO)(),t=(0,h.fU)(),a=(0,h.nl)(),{messages:n}=(0,o.v9)((e=>e.dappsMessages)),p=(0,i.useMemo)((()=>n.find((t=>{var a;return(null==(a=t.xdefiId)?void 0:a.toString())===e}))||n[0]),[n,e]),j=(0,i.useMemo)((()=>t.getChainControllerById(p.chainId)),[p]);(0,i.useEffect)((()=>(window.addEventListener("unload",Z),()=>{window.removeEventListener("unload",Z)})));const Z=()=>{p.xdefiId&&(a.removeMessageById(p.xdefiId),u.browser.runtime.sendMessage(void 0,{xdefiId:p.xdefiId,raw:{id:p.xdefiId,error:j.getType()===c.J.Evm?s.ethErrors.provider.userRejectedRequest():"XDEFI: user rejected the message signing"}}))},I=()=>{switch(j.getType()){case c.J.Cosmos:return(0,r.jsx)(g,{transactionMsg:p});case c.J.Thorchain:return(0,r.jsx)(y,{transactionMsg:p});case c.J.Terra:return(0,r.jsx)(f,{transactionMsg:p});case c.J.Bitcoin:case c.J.BitcoinCash:case c.J.Litecoin:case c.J.Dogecoin:return(0,r.jsx)(v,{transactionMsg:p});case c.J.Binance:return(0,r.jsx)(w,{transactionMsg:p});case c.J.Solana:return(0,r.jsx)(d.Z,{transactionMsg:p});case c.J.Evm:return(0,r.jsx)(m,{transactionMsg:p});case c.J.Near:return(0,r.jsx)(b,{transactionMsg:p});default:throw"DappTransaction.tsx: Body is not defined"}};return(0,r.jsx)(I,{})};n()}catch(e){n(e)}}))},284755:(e,t,a)=>{"use strict";a.a(e,(async(e,n)=>{try{a.d(t,{Z:()=>I});var r=a(785893),s=a(244431),i=a.n(s),o=a(379372),l=a(281672),c=a(300286),d=a(667294),h=a(230811),x=a(996974),u=a(427504),p=a(308787),g=a(952480),m=a(729154),y=a(412252),f=a(556138),v=a(505403),w=a(691438),b=a(565420),j=e([o,l,p,v,b]);[o,l,p,v,b]=j.then?(await j)():j;const Z=({chainId:e,handleConfirm:t,fee:a,feeSymbol:n,errors:s,handleReject:j,selectedWallet:Z,loading:I,baseFee:P=0,maxPriorityFeePerGas:C=0,gasLimit:F=21e3})=>{const k=(0,l.fU)().getChainControllerById(e),B=(0,x.s0)(),{getFiat:S,getFiatStr:$}=(0,v.Z)(),T=k.getConfig().tokenSymbol,{t:_}=(0,h.$G)("app"),A=(0,d.useMemo)((()=>(P+C)*F/o.uR),[P,F,C]),M=(0,d.useCallback)((()=>$(e,A,k.getConfig().tokenSymbol)),[$,e,A]),D=(0,d.useCallback)((()=>(0,u.zr)(new(i())(A),T)),[A,T]),L=(0,d.useMemo)((()=>k.support(w.B.Eip1559)?M():S(e,a,n||T).toString()),[k,M,S,e,a,n,T]),O=(0,d.useMemo)((()=>k.support(w.B.Eip1559)?D():(0,u.zr)(new(i())(a),n||T)),[D,k,T,a,n]),[E,N]=(0,d.useState)(!1);return(0,r.jsxs)(b.e$,{noShadow:!0,"data-testid":"screenFooter",children:[(0,r.jsx)(b.qP,{}),(0,r.jsxs)(b.X2,{$error:!!s.fee,children:[(0,r.jsx)(b.hB,{children:s.fee?(0,r.jsx)(g.Z,{children:_("send_footer.network_fee")}):(0,r.jsx)(y.Z,{children:_("send_footer.network_fee")})}),(0,r.jsx)(b.$d,{children:(0,r.jsx)(p.FiatAssetPair,{alignItems:"flex-end",justifyContent:"center",minWidth:0,fiat:L,asset:O})})]}),(0,r.jsx)(b.CV,{$animateIn:!!(null==s?void 0:s.fee),children:(0,r.jsx)(c.Z,{children:null==s?void 0:s.fee})}),(0,r.jsx)("div",{children:(0,r.jsxs)(b.VY,{children:[(0,r.jsx)(p.SecondaryButton,{dataTestId:"rejectBtn",fullWidth:!0,onClick:()=>{j?j():B(-1)},disabled:I,children:(0,r.jsx)(m.Z,{children:_("general.reject")})}),(0,r.jsx)(p.PrimaryButton,{fullWidth:!0,dataTestId:"confirmBtn",onClick:()=>{N(!0),t(!0)},loading:I,children:(0,r.jsx)(m.Z,{children:_("general.confirm")})})]})}),I&&E&&(null==Z?void 0:Z.walletInfo.type)===f.WalletType.Ledger&&(0,r.jsx)(p.FlexBox,{height:35,mt:-10,children:(0,r.jsx)(p.ConfirmLedger,{show:I,wallet:Z})})]})},I=(0,d.memo)(Z);n()}catch(e){n(e)}}))},682541:(e,t,a)=>{"use strict";a.a(e,(async(e,n)=>{try{a.d(t,{Z:()=>f});var r=a(785893),s=a(59917),i=a(777191),o=a.n(i),l=a(206508),c=a(308787),d=a(561277),h=a(876777),x=a(818117),u=e([l,c]);[l,c]=u.then?(await u)():u;const p=x.ZP.div`
  width: 100%;
  border-top: 1px solid ${h.wL.black};
  padding-bottom: 20px;
  border-bottom: 1px solid ${h.wL.black};
`,g=(0,x.ZP)(c.FlexBox)`
  width: 100%;
  height: 162px;
  overflow: overlay;
`,m=(0,x.ZP)(c.FlexBox).attrs({alignItems:"center",flexDirection:"row",justifyContent:"space-between"})`
  padding: 0px 10px;
  box-sizing: border-box;
`,y=(0,x.ZP)(c.FlexBox).attrs({alignItems:"flex-start"})`
  box-sizing: border-box;
  padding: 20px 10px;
  line-break: anywhere;
`,f=({params:e,method:t})=>{var a,n;const i=null!=(n=null!=(a=e.messages)?a:[e.message])?n:[];return(0,r.jsxs)(p,{children:[(0,r.jsx)(l.xZ,{dashedLine:!0,functionType:t}),(0,r.jsx)(m,{children:(0,r.jsx)(g,{children:i.map(((e,a)=>{if(["signAllTransactions","signTransaction","signAndSendTransaction"].includes(t))try{const t=s.YW.populate(s.v0.from(o().decode(e)));e=JSON.stringify(t)}catch(e){}else if("signMessage"===t)try{const t=s.v0.from(o().decode(e));e=JSON.stringify(t)}catch(e){}return(0,r.jsx)(y,{children:(0,r.jsx)(d.Z,{children:e})},a)}))})}),e.memo&&(0,r.jsx)(l.ot,{errors:{},memo:e.memo,disabled:!0})]})};n()}catch(e){n(e)}}))},875472:(e,t,a)=>{var n=a(882689),r=a(701469);e.exports=function(e,t,a,s){return null==e?[]:(r(t)||(t=null==t?[]:[t]),r(a=s?void 0:a)||(a=null==a?[]:[a]),n(e,t,a))}},723140:(e,t,a)=>{"use strict";a.a(e,(async(e,t)=>{try{var n=a(512948),r=e([n]);n=(r.then?(await r)():r)[0],t()}catch(e){t(e)}}))},568847:(e,t,a)=>{"use strict";a.a(e,(async(e,t)=>{try{var n=a(796441),r=e([n]);n=(r.then?(await r)():r)[0],t()}catch(e){t(e)}}))},426307:(e,t,a)=>{"use strict";a.a(e,(async(e,t)=>{try{var n=a(479611),r=e([n]);n=(r.then?(await r)():r)[0],t()}catch(e){t(e)}}))},378241:(e,t,a)=>{"use strict";a.a(e,(async(e,t)=>{try{var n=a(281672),r=(a(667294),a(363119),a(230811),e([n]));n=(r.then?(await r)():r)[0];t()}catch(e){t(e)}}))},857109:(e,t,a)=>{"use strict";a.a(e,(async(e,t)=>{try{var n=a(778286),r=e([n]);n=(r.then?(await r)():r)[0],t()}catch(e){t(e)}}))},471955:(e,t,a)=>{"use strict";a.a(e,(async(e,t)=>{try{var n=a(24261),r=e([n]);n=(r.then?(await r)():r)[0],t()}catch(e){t(e)}}))},41947:(e,t,a)=>{"use strict";a.a(e,(async(e,t)=>{try{var n=a(623188),r=e([n]);n=(r.then?(await r)():r)[0],t()}catch(e){t(e)}}))},130201:(e,t,a)=>{"use strict";a.a(e,(async(e,t)=>{try{var n=a(983144),r=e([n]);n=(r.then?(await r)():r)[0],t()}catch(e){t(e)}}))},75224:(e,t,a)=>{"use strict";a.d(t,{l:()=>n});const n=300},769364:(e,t,a)=>{"use strict";a.a(e,(async(e,n)=>{try{a.d(t,{DN:()=>g,X2:()=>x,XX:()=>p,h4:()=>u,pb:()=>h,pk:()=>d,tu:()=>l,zx:()=>c});var r=a(818117),s=a(308787),i=a(884967),o=e([s]);s=(o.then?(await o)():o)[0];const l=(0,r.ZP)(s.FlexBox).attrs({mt:4,flexDirection:"row",alignItems:"center",p:2})`
  background-color: ${({theme:e})=>e.colors.black};
  ${({theme:{palette:e}})=>(0,i.m4)(e.base.contrary,.2)};
  border-radius: 8px;
  ${e=>e.disabled&&"pointer-events: none;"}
`,c=(0,r.ZP)(s.BaseButton)`
  border-radius: 8px;
  padding: 0;
  height: 32px;
  background-color: transparent;
  background: ${e=>e.active?e.theme.colors.darkSteel:"transparent"};

  &:hover {
    box-shadow: none;
  }
`,d=r.ZP.div`
  margin: 0 10px;
`,h=r.ZP.div`
  text-align: right;
  margin: 2.5px 0 2px 0;
  mix-blend-mode: normal;
`,x=(0,r.ZP)(s.FlexBox).attrs({justifyContent:"space-around"})`
  ${({shorter:e})=>e&&r.iv`
      height: 74px;
    `}
`,u=(0,r.ZP)(s.FlexBox).attrs({flexDirection:"row",justifyContent:"space-between",alignItems:"center"})`
  width: 100%;
`,p=r.ZP.div`
  width: 100%;
  height: 32px;
`,g=(0,r.ZP)(s.FlexBox)`
  ${({textAlign:e})=>e&&r.iv`
      text-align: ${e};
    `}
`;n()}catch(e){n(e)}}))},848799:(e,t,a)=>{"use strict";a.a(e,(async(e,t)=>{try{var n=a(818117),r=a(308787),s=a(557109),i=a(876777),o=e([r,s]);[r,s]=o.then?(await o)():o;(0,n.ZP)(r.Card).attrs({round:!0})`
  z-index: 2;
  padding: 8px 8px 8px 16px;
  height: 60px;
  width: 376px;
`,n.ZP.div`
  position: relative;

  &:after {
    content: '${e=>e.descritpiton}';
    position: absolute;
    display: none;
    align-items: center;
    width: 0;
    height: 0;
    right: 0px;
    top: 35px;
    background: ${i.wL.nightOcean};

    z-index: 3;

    box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15),
      0px 4px 4px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    color: ${i.wL.white};

    white-space: nowrap;
    padding: 2px 8px;
  }
  transition: background-color 300ms;
  &:hover {
    &:after {
      display: flex;
      width: fit-content;
      height: 20px;
    }
  }
`,(0,n.ZP)(r.FlexBox).attrs({allignItems:"center"})`
  position: absolute;
  right: 0px;
  top: 40px;
  background: ${i.wL.nightOcean};
  width: fit-content;
  height: 20px;
  z-index: 3;

  box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15),
    0px 4px 4px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  color: ${i.wL.white};

  white-space: nowrap;
  padding: 2px 8px;
`,(0,n.ZP)(r.FlexBox).attrs({justifyContent:"center",alignItems:"center"})`
  border-radius: 8px;
  height: 32px;
  width: 32px;
  padding: 10px;
  box-shadow: none;
  transition: background-color 300ms;
  &:hover div button {
    background-color: ${i.wL.nightOcean};
    box-shadow: none;
  }
`,n.ZP.div`
  position: ${e=>e.hasAddress?"absolute":"static"};
  top: ${e=>e.hasAddress?"-2px":"0"};

  letter-spacing: 0.25px;
  color: ${i.wL.darkGrey};
`,(0,n.ZP)(s.B)`
  display: flex;
  height: 100%;
  width: 304px;
  margin-right: auto;

  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,(0,n.ZP)(r.FlexBox).attrs({justifyContent:"end"})`
  width: 230px;
  height: 32px;
  margin-left: auto;
`;t()}catch(e){t(e)}}))},257525:(e,t,a)=>{"use strict";a.d(t,{M:()=>r});var n=a(942274);const r=[{title:"general.average",value:0,key:n.FeeOption.Average},{title:"general.fast",value:1,key:n.FeeOption.Fast},{title:"general.fastest",value:2,key:n.FeeOption.Fastest}]},206508:(e,t,a)=>{"use strict";a.a(e,(async(e,n)=>{try{a.d(t,{J8:()=>c.Z,jh:()=>l.Z,ot:()=>s.Z,pX:()=>i.Z,xZ:()=>d.Z});var r=a(545455),s=a(817795),i=a(726546),o=a(639923),l=a(845565),c=a(293709),d=a(106964),h=a(900009),x=e([r,s,i,o,l,c,d,h]);[r,s,i,o,l,c,d,h]=x.then?(await x)():x,n()}catch(e){n(e)}}))},708943:(e,t,a)=>{"use strict"},184698:(e,t,a)=>{"use strict";a.a(e,(async(e,n)=>{try{a.d(t,{gI:()=>s.g});var r=a(989424),s=(a(733246),a(114829)),i=e([r]);r=(i.then?(await i)():i)[0],n()}catch(e){n(e)}}))},989424:(e,t,a)=>{"use strict";a.a(e,(async(e,t)=>{try{a(522933);var n=a(281672),r=(a(667294),a(230811),a(363119),a(693246),a(505403)),s=a(972819),i=(a(977710),a(691438),a(721892),a(473821),a(739989),a(427504),a(518949)),o=(a(605930),a(626423),e([n,r,s,i]));[n,r,s,i]=o.then?(await o)():o;t()}catch(e){t(e)}}))},114829:(e,t,a)=>{"use strict";a.d(t,{g:()=>i});var n=a(667294),r=a(721892),s=a(556138);const i=e=>{const[t,a]=(0,n.useState)(!1),[i,o]=(0,n.useState)(!1);return{loading:t,hasPermission:i,onRequestPermission:()=>{return t=void 0,n=null,i=function*(){if(e===s.WalletType.Ledger){let e=yield(new r.Z).hasPermission();e?o(e):(a(!0),e=yield(new r.Z).requestPermission(),o(e),e&&window.location.reload(),a(!1))}else o(!0)},new Promise(((e,a)=>{var r=e=>{try{o(i.next(e))}catch(e){a(e)}},s=e=>{try{o(i.throw(e))}catch(e){a(e)}},o=t=>t.done?e(t.value):Promise.resolve(t.value).then(r,s);o((i=i.apply(t,n)).next())}));var t,n,i}}}},733246:(e,t,a)=>{"use strict";a(667294),a(458233),a(708943)},123226:(e,t,a)=>{"use strict";a.d(t,{k:()=>i});var n=a(785893),r=a(818117);const s={Wrapper:r.ZP.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({theme:{palette:e}})=>e.container.section};
`,Header:r.ZP.div`
  margin: 0;
`,Body:r.ZP.div`
  height: 100%;
  padding: 10px;
`,Actions:r.ZP.div`
  padding: 10px;
`},i=({header:e,body:t,actions:a})=>(0,n.jsxs)(s.Wrapper,{children:[e&&(0,n.jsx)(s.Header,{children:e}),t&&(0,n.jsx)(s.Body,{children:t}),a&&(0,n.jsx)(s.Actions,{children:a})]})},565420:(e,t,a)=>{"use strict";a.a(e,(async(e,n)=>{try{a.d(t,{$d:()=>x,CV:()=>p,VY:()=>u,X2:()=>c,e$:()=>l,hB:()=>h,qP:()=>d});var r=a(308787),s=a(876777),i=a(818117),o=e([r]);r=(o.then?(await o)():o)[0];const l=(0,i.ZP)(r.Card)`
  margin: 5px 0;
  box-shadow: none;
  justify-content: flex-end;
  height: 100%;

  :first-child {
    margin-top: 0;
  }
  :last-child {
    margin-bottom: 0;
  }
`,c=(0,i.ZP)(r.FlexBox).attrs({justifyContent:"space-between",alignItems:"flex-start",flexDirection:"row"})`
  height: 50px;
  margin: 0 10px;
  padding: 0 10px;
  ${({$error:e})=>e&&"padding-bottom: 10px;"}
`,d=i.ZP.div`
  border-top: 1px solid ${s.wL.black};
  margin-bottom: 10px;
`,h=(0,i.ZP)(r.FlexBox).attrs({alignSelf:"flex-start",flexDirection:"row",alignItems:"center"})``,x=(0,i.ZP)(r.FlexBox)`
  text-align: right;
`,u=(0,i.ZP)(r.FlexBox).attrs({justifyContent:"space-between",alignItems:"center",flexDirection:"row",gridGap:10})``,p=i.ZP.div.attrs({"data-testid":"validationErr"})`
  position: absolute;
  bottom: -16px;
  opacity: 0;
  transition-property: margin-top, margin-bottom, opacity;
  transition-duration: 300ms;
  ${({$animateIn:e})=>e&&"opacity: 1;"}
`;n()}catch(e){n(e)}}))},901176:(e,t,a)=>{"use strict";a.a(e,(async(e,n)=>{try{a.d(t,{g:()=>x});var r=a(942274),s=a(244431),i=a.n(s),o=a(667294),l=a(379372),c=a(691438),d=a(281672),h=e([l,d]);[l,d]=h.then?(await h)():h;const x=({chain:e,params:t,gasPrice:a,gasLimit:n})=>{const s=(0,d.UW)(),[h,x]=(0,o.useState)(new(i())(0)),[u,p]=(0,o.useState)(!0),[g,m]=(0,o.useState)(e.getConfig().tokenSymbol),[y,f]=(0,o.useState)(null==t?void 0:t.feeRate);return(0,o.useEffect)((()=>{var o,d,h;(o=void 0,d=null,h=function*(){switch(e.getType()){case c.J.Terra:{const a=e.selfCast(),{msgs:n,fee:r}=a.parseCreateTxOptions(t);let s=r;s||(s=yield a.getFee({address:"",amount:"",toAddress:"",msgs:n,fromAddress:t.from,gasAdjustment:t.gasAdjustment,gasPrice:t.gasPrices}));const o=s.toData(),l=new(i())(o.amount[o.amount.length-1].amount).dividedBy(1e6);x(l),m(a.denomToSymbol(o.amount[o.amount.length-1].denom))}break;case c.J.Solana:{const a=yield s.getFee(e.getId(),r.FeeOption.Fastest,t);x(new(i())(+a.fee))}break;case c.J.Thorchain:{const a=yield s.getFee(e.getId(),r.FeeOption.Fastest,t);x(new(i())(+a.fee))}break;default:if(a&&n){const e=Number(a)*Number(n)/l.uR;x(new(i())(e))}}},new Promise(((e,t)=>{var a=e=>{try{r(h.next(e))}catch(e){t(e)}},n=e=>{try{r(h.throw(e))}catch(e){t(e)}},r=t=>t.done?e(t.value):Promise.resolve(t.value).then(a,n);r((h=h.apply(o,d)).next())}))).then((()=>p(!1)))}),[e,s,n,a,t]),{fee:h,setFee:x,feeRate:y,setFeeRate:f,feeSymbol:g,calculatingFee:u}};n()}catch(e){n(e)}}))},24296:(e,t,a)=>{"use strict";a.a(e,(async(e,n)=>{try{a.d(t,{z:()=>d});var r=a(739989),s=a(667294),i=a(691438),o=a(626423),l=a(281672),c=e([l]);l=(c.then?(await c)():c)[0];const d=({chain:e,params:t})=>{const a=(0,l.UW)();return(0,s.useMemo)((()=>{var a,n,s;try{switch(e.getType()){case i.J.Binance:return null==(a=null==t?void 0:t.asset)?void 0:a.symbol;case i.J.Terra:{const a=e.selfCast(),{msgs:n}=a.selfCast().parseCreateTxOptions(t);return a.getSymbolFromMsg(n[0])}case i.J.Thorchain:return null!=(s=(null==(n=null==t?void 0:t.asset)?void 0:n.symbol)&&(0,o.Sy)(String(t.asset.symbol)))?s:e.getConfig().tokenSymbol;default:return e.getConfig().tokenSymbol}}catch(t){return r.Z.warn(" Error retrieving symbol, using chain symbol instead"),e.getConfig().tokenSymbol}}),[e,a.chains,t])};n()}catch(e){n(e)}}))},252746:(e,t,a)=>{"use strict";a.d(t,{b:()=>r});var n=a(667294);const r=(e,t=100,a)=>{const r=(0,n.useCallback)(e,a);(0,n.useEffect)((()=>{const e=setTimeout((()=>{r(a[0])}),t);return()=>{clearTimeout(e)}}),[r,t])}},458233:(e,t,a)=>{"use strict";a.d(t,{I:()=>r});var n=a(667294);const r=e=>{const t=(0,n.useRef)(e);return t.current!==e&&(t.current=e),t}},169937:(e,t,a)=>{"use strict";var n=a(246858);a(875472),a(496486);n.n.Up,n.n.Down}}]);
//# sourceMappingURL=865.bundle.js.map