!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="74f5992c-d0e5-45a4-97ee-8ba73656525f",e._sentryDebugIdIdentifier="sentry-dbid-74f5992c-d0e5-45a4-97ee-8ba73656525f")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"28.2.2"},(self.webpackChunkxdefi_extension=self.webpackChunkxdefi_extension||[]).push([[7098],{944362:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(785893),r=n(363119),i=n(764079),o=n(556138),l=n(771341);const s=({walletId:e,scale:t=1})=>{var n,s;const{wallets:d}=(0,r.v9)((e=>e.wallets));switch(null==(s=null==(n=d[e])?void 0:n.walletInfo)?void 0:s.type){case o.WalletType.Ledger:return(0,a.jsx)(l.pN,{width:11*t,height:17*t,color:"white"});case o.WalletType.Trezor:return(0,a.jsx)("img",{src:i.sv.toString(),style:{width:14*t,height:14*t},alt:"Wallet Icon"});case o.WalletType.Keystore:default:{const e=i.m.toString();return(0,a.jsx)("img",{src:e,style:{width:11*t,height:16*t},alt:"Wallet Icon"})}}}},996176:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{Z:()=>h});var r=n(785893),i=n(363119),o=n(475799),l=n(308787),s=n(818117),d=n(944362),c=e([l]);l=(c.then?(await c)():c)[0];const h=({walletId:e,scale:t=1,dotSize:n=8})=>{const{wallets:a}=(0,i.v9)((e=>e.wallets));return(0,r.jsxs)(l.FlexBox,{position:"relative",pl:3,children:[(0,r.jsx)(u,{width:n,height:n,"data-testid":"walletDot",bg:(0,o.AI)(a,e)}),(0,r.jsx)(d.Z,{walletId:e,scale:t})]})},u=(0,s.ZP)(l.FlexBox)`
  left: 0;
  position: absolute;
  border-radius: 50%;
`;a()}catch(e){a(e)}}))},992782:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{Z:()=>w});var r=n(785893),i=n(996176),o=n(626423),l=n(561277),s=n(458038),d=n(667294),c=n(308787),h=n(818117),u=n(281672),x=n(463193),p=e([i,c,u,x]);[i,c,u,x]=p.then?(await p)():p;const g=({account:e,chainId:t,onClick:n})=>{var a,h;const p=(0,u.fU)(),g=(0,d.useMemo)((()=>{var n;return null==(n=e.chainData[t])?void 0:n.address}),[e.chainData,t]),w=(0,o.WG)(p.getChainControllerById(t),Object.keys(null!=(h=(null==(a=e.chainData[t])?void 0:a.nft)||{})?h:{})),v=(0,d.useMemo)((()=>w?`${w} NFT${w>1?"s":""}`:null),[w]);return(0,r.jsxs)(m,{onClick:()=>n({toAddress:g,accountId:e.id}),"data-testid":"accountRow",children:[(0,r.jsx)(i.Z,{walletId:e.id,scale:1.5,dotSize:9}),(0,r.jsx)(f,{"data-testid":"accountName",children:(0,r.jsx)(l.Z,{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",children:e.label})}),(0,r.jsxs)(c.FlexBox,{alignItems:"flex-end",ml:3,children:[(0,r.jsx)(l.Z,{children:(0,r.jsx)(x.p,{chainId:t,walletId:e.id,withCurrencyName:!1})}),v&&(0,r.jsx)(s.Z,{children:v})]})]})},m=(0,h.ZP)(c.FlexBox).attrs({justifyContent:"space-between",flexDirection:"row",alignItems:"center"})`
  cursor: pointer;
  height: 48px;
  padding: 0 8px;
  border-bottom: 1px dashed ${({theme:e})=>e.palette.container.divider};
`,f=(0,h.ZP)(c.FlexBox).attrs({ml:12,flex:1})`
  overflow: hidden;
  text-align: left;
`,w=(0,d.memo)(g);a()}catch(e){a(e)}}))},386032:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{Z:()=>h});var r=n(785893),i=n(667294),o=n(281672),l=n(818117),s=e([o]);o=(s.then?(await s)():s)[0];const d=({chainId:e})=>{const t=(0,o.fU)(),n=(0,i.useMemo)((()=>t.getChainControllerById(e)),[t,e]);return(0,r.jsx)(c,{src:n.getConfig().image,"data-testid":"chainIcon"})},c=l.ZP.img`
  width: ${({$small:e})=>e?12:22}px;
  height: ${({$small:e})=>e?12:22}px;
`,h=d;a()}catch(e){a(e)}}))},98875:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{U:()=>k});var r=n(785893),i=n(496486),o=n(308787),l=n(667294),s=n(287536),d=n(230811),c=n(646284),h=n(771341),u=n(818117),x=n(304904),p=e([o,c]);[o,c]=p.then?(await p)():p;var g=Object.defineProperty,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&v(e,n,t[n]);if(m)for(var n of m(t))w.call(t,n)&&v(e,n,t[n]);return e};const y=(0,u.ZP)(o.FlexBox).attrs({flexDirection:"row",gridGap:8})`
  margin-top: 8px;
`,j=(0,u.ZP)(o.SmallInputField)`
  width: 96px;
`,I=(0,u.ZP)(o.SmallInputField)`
  flex: 1;
  overflow: hidden;
`,C=(0,u.ZP)(c.AddressInput)`
  flex: 1;
  overflow: hidden;
`,Z=u.ZP.div`
  margin-top: 24px;
`,P=(0,u.ZP)(o.FlexBox).attrs({flexDirection:"row",alignItems:"end",gridGap:8})`
  margin-top: 8px;
  margin-left: 104px;
`,k=({index:e,defaultValue:t,chainFieldIndex:n,errors:a,onDelete:c,supportsMemo:u,chainId:p})=>{var g,m;const{register:f,setValue:w,control:v}=(0,s.Gc)(),{t:k}=(0,d.$G)("app"),{checkAddress:_}=(0,x.n)(),[B,F]=(0,l.useState)(),[L,S]=(0,l.useState)(!!t.memo),$=`chainList[${n}].addressList[${e}]`,A=(0,l.useCallback)((0,i.debounce)((e=>{F(_(e.target.value,p))}),500),[_,p]),D=(0,l.useCallback)((()=>{S(!0)}),[]),O=(0,l.useCallback)((()=>{c(e)}),[e,c]),M=(0,l.useCallback)((()=>{w(`${$}.memo`,void 0,{shouldDirty:!0}),S(!1)}),[$,w]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(y,{"data-testid":"addressRow",children:[(0,r.jsx)(j,b({type:"text",label:k("contact_address_item.label"),errorMsg:null==(g=null==a?void 0:a.label)?void 0:g.message,dataTestId:"labelFld"},f(`${$}.label`))),(0,r.jsx)(s.Qr,{name:`${$}.address`,control:v,render:({field:{onChange:e,onBlur:t,value:n,name:i,ref:o}})=>{var l;return(0,r.jsx)(C,{type:"text",name:i,label:k("contact_address_item.address_label"),inputRef:o,autoFocus:!0,errorMsg:null==(l=null==a?void 0:a.address)?void 0:l.message,warningMsg:B,value:n,onChange:t=>{e(t),A(t)},onBlur:t,dataTestId:"addressFld",chainId:p,variant:"sm"})}}),(0,r.jsx)(Z,{children:(0,r.jsx)(o.HoverButton,{onClick:O,Icon:(0,r.jsx)(h.XH,{}),dataTestId:"deleteBtn",label:k("general.delete")})})]}),u&&(0,r.jsx)(P,{children:L?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(I,b({type:"text",autoFocus:!0,errorMsg:null==(m=null==a?void 0:a.memo)?void 0:m.message,defaultValue:t.memo},f(`${$}.memo`))),(0,r.jsx)(o.HoverButton,{onClick:M,Icon:(0,r.jsx)(h.XH,{}),label:k("general.delete_memo")})]}):(0,r.jsx)(o.SecondaryButton,{onClick:D,StartIcon:h.pO,children:k("contact_address_item.add_memo")})})]})};a()}catch(e){a(e)}}))},646817:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{o:()=>p});var r=n(785893),i=n(876777),o=n(308787),l=n(818117),s=n(771341),d=n(399922),c=n(667294),h=e([o]);o=(h.then?(await h)():h)[0];const u=(0,l.ZP)(o.FlexBox).attrs({alignItems:"center",justifyContent:"center"})`
  border-radius: 100%;
  height: 38px;
  width: 38px;
  background: ${i.wL.charcoal};
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  position: relative;
  margin-top: 22px;
  margin-right: 2px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${({$imageUrl:e})=>e});

  :hover {
    background-color: ${i.wL.solidBlack};
  }
`,x=(0,l.ZP)(o.FlexBox).attrs({alignItems:"center",justifyContent:"center"})`
  border-radius: 100%;
  height: 16px;
  width: 16px;
  background: ${i.wL.darkSteel};
  box-shadow: 0 4px 8px 3px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.3);
  position: absolute;
  top: -2px;
  right: -2px;
`,p=({value:e,onChange:t})=>{const[n,a]=(0,c.useState)(!1);return(0,r.jsxs)(u,{onClick:()=>{return e=void 0,n=null,a=function*(){try{const e=yield(0,d.nL)(),n=yield(0,d.Mb)(256,256,e);t(n)}catch(e){}},new Promise(((t,r)=>{var i=e=>{try{l(a.next(e))}catch(e){r(e)}},o=e=>{try{l(a.throw(e))}catch(e){r(e)}},l=e=>e.done?t(e.value):Promise.resolve(e.value).then(i,o);l((a=a.apply(e,n)).next())}));var e,n,a},$imageUrl:n?"":e,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[!n&&(0,r.jsx)(x,{children:(0,r.jsx)(s.dY,{color:i.wL.white,width:12,height:12})}),n?(0,r.jsx)(s.dY,{color:i.wL.white}):e?null:(0,r.jsx)(s.Kq,{color:i.wL.white})]})};a()}catch(e){a(e)}}))},451605:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{Z:()=>C});var r=n(785893),i=n(458233),o=n(108363),l=n(308787),s=n(667294),d=n(287536),c=n(230811),h=n(281672),u=n(771341),x=n(818117),p=n(244586),g=n(691438),m=n(764079),f=n(522933),w=n(697211),v=e([l,h,w]);[l,h,w]=v.then?(await v)():v;const b=x.ZP.div`
  margin-top: 32px;
`,y=(0,x.ZP)(l.FlexBox).attrs({flexDirection:"row",alignItems:"center",justifyContent:"space-between"})``,j=x.ZP.img`
  height: 20px;
  width: 20px;
  margin-right: 8px;
`,I=(0,x.ZP)(l.FlexBox).attrs({flexDirection:"row"})``,C=({chainFieldIndex:e,chainId:t,onDelete:n})=>{const{t:a}=(0,c.$G)("app"),x=(0,h.fU)().getChainControllerById(t),v=x.getType()===g.J.Evm,{control:C,formState:{errors:Z}}=(0,d.Gc)(),{fields:P,append:k,remove:_}=(0,d.Dq)({control:C,name:`chainList[${e}].addressList`,shouldUnregister:!0}),B=(0,i.I)(P),F=(0,s.useCallback)((()=>{k({uuid:(0,p.Z)(),label:`${v?"EVM":x.getConfig().chainSymbol} ${B.current.length+1}`,address:"",chainId:t},{shouldFocus:!1})}),[k,v,x,B,t]),L=(0,s.useCallback)((t=>{_(t),1===B.current.length&&n(e)}),[_,B,n,e]);return(0,r.jsxs)(b,{"data-testid":"chainBlock",children:[(0,r.jsxs)(y,{children:[(0,r.jsxs)(I,{children:[(0,r.jsx)(j,{src:v?m.yF.toString():x.getConfig().image,alt:x.getConfig().shortName}),(0,r.jsx)(o.Z,{dataTestId:"chainName",children:v?a("select_chains.ethereum_and_evms"):(0,f.fm)(x.getConfig().longName)})]}),(0,r.jsx)(l.HoverButton,{onClick:F,Icon:(0,r.jsx)(u.pO,{}),label:a("general.add"),dataTestId:"addBtn"})]}),P.map(((n,a)=>{var i,o,l;return(0,r.jsx)(w.U,{index:a,chainFieldIndex:e,defaultValue:n,errors:null==(l=null==(o=null==(i=Z.chainList)?void 0:i[e])?void 0:o.addressList)?void 0:l[a],onDelete:L,supportsMemo:x.support(g.B.Memo),chainId:t},n.id)}))]})};a()}catch(e){a(e)}}))},49563:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{o:()=>g});var r=n(785893),i=n(831352),o=n(667294),l=n(783150),s=n(230811),d=n(764079),c=n(691438),h=n(281672),u=n(626423),x=n(24854),p=e([l,h]);[l,h]=p.then?(await p)():p;const g=({onChange:e,chainList:t,combineEVM:n=!0})=>{const a=(0,h.fU)(),{t:p}=(0,s.$G)("app"),g=(0,o.useMemo)((()=>{if(t&&t.length>0)return t.map((e=>{const t=a.getChainControllerById(e);return{key:t.getId(),label:t.getConfig().longName,logo:t.getConfig().image}}));let e=[];if(n){e=[{key:a.getChainControllerById((0,u.Bw)(i.yp.Ethereum)).getId(),label:p("select_chains.ethereum_and_evms"),logo:d.XV.toString()},...a.getAllChainControllers().filter((e=>e.getType()!==c.J.Evm)).map((e=>({key:e.getId(),label:e.getConfig().longName,logo:e.getConfig().image})))]}else e=a.getAllChainControllers().map((e=>({key:e.getId(),label:e.getConfig().longName,logo:e.getConfig().image})));return e}),[t,a,n,p]);return(0,r.jsx)(l.Z,{items:g,onSelect:t=>e(t.key),placeholder:p("contact_form.choose_network"),openFromModal:!0,dataTestId:"chainFilter",triggerBgColor:x.A.Black})};a()}catch(e){a(e)}}))},531520:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{t:()=>A});var r=n(785893),i=n(616310),o=n(287536),l=n(818117),s=n(308787),d=n(108363),c=n(304904),h=n(894900),u=n(591757),x=n(230811),p=n(878612),g=n(501605),m=n(417455),f=e([s,u,p,g,m]);[s,u,p,g,m]=f.then?(await f)():f;var w=Object.defineProperty,v=Object.defineProperties,b=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,C=(e,t,n)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Z=(e,t)=>{for(var n in t||(t={}))j.call(t,n)&&C(e,n,t[n]);if(y)for(var n of y(t))I.call(t,n)&&C(e,n,t[n]);return e};i.kM(i.IX,"unique",(function(e,t){return this.test("unique",t,(function(n){if(!n||!n.length)return!0;const a=Array.from(new Set(n.map((t=>{var n;return null==(n=t[e])?void 0:n.toLowerCase()}))));if(n.length===a.length)return!0;const r=n.findIndex(((t,n)=>{var r;return(null==(r=t[e])?void 0:r.toLowerCase())!==a[n]}));return""===n[r][e]||this.createError({path:`${this.path}.${r}.${e}`,message:t})}))}));const P=(0,l.ZP)(h.Z)`
  padding: 8px 8px 0 8px;
  margin-bottom: 8px;
  flex: 1;
  min-height: 462px;
  max-height: 462px;
`,k=l.ZP.div`
  padding-bottom: 8px;

  :last-child {
    padding-bottom: 16px;
  }
`,_=l.ZP.form`
  display: flex;
  flex-direction: column;
  height: 100%;
`,B=(0,l.ZP)(s.FlexBox).attrs({alignItems:"start",flexDirection:"row",justifyContent:"space-between",gridGap:16,p:"12.5px 10px 30px 0px"})``,F=(0,l.ZP)(s.InputField)`
  flex: 1;
`,L=l.ZP.div`
  margin-left: 8px;
`,S=l.ZP.div`
  margin-top: 6px;
`,$=(0,l.ZP)(s.FlexBox).attrs({alignItems:"center",flexDirection:"row",justifyContent:"space-between",gridGap:8})`
  width: 100%;
  padding: 16px 8px;
  box-shadow: 0px -1px 3px 1px rgba(0, 0, 0, 0.15),
    0px -1px 2px rgba(0, 0, 0, 0.3);
`,A=({onClose:e,onSubmit:t,defaultValues:n})=>{const{t:a}=(0,x.$G)("app"),{formMethods:i,processedContactList:l,handleChainSelect:h,fields:f,handleDeleteChainItem:w}=(0,u.u)(n);return(0,r.jsx)(o.RV,(y=Z({},i),j={children:(0,r.jsx)(c.G,{contactList:l,children:(0,r.jsxs)(_,{onSubmit:i.handleSubmit(t),children:[(0,r.jsxs)(P,{children:[(0,r.jsxs)(B,{children:[(0,r.jsx)(o.Qr,{name:"name",control:i.control,render:({field:e,fieldState:t})=>{var n;return(0,r.jsx)(F,Z({type:"text",label:a("contact_form.name"),autoFocus:!0,errorMsg:null==(n=t.error)?void 0:n.message,dataTestId:"nameFld"},e))}}),(0,r.jsx)(o.Qr,{name:"profileImage",control:i.control,render:({field:e})=>(0,r.jsx)(m.o,{onChange:e.onChange,value:e.value})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(L,{children:(0,r.jsx)(d.Z,{children:a("contact_form.title")})}),(0,r.jsx)(S,{children:(0,r.jsx)(p.o,{placeholder:a("contact_form.choose_network"),onChange:h})})]}),(0,r.jsx)(k,{children:f.map(((e,t)=>(0,r.jsx)(g.Z,{chainFieldIndex:t,chainId:e.chainId,onDelete:w},e.id)))})]}),(0,r.jsxs)($,{children:[(0,r.jsx)(s.SecondaryButton,{onClick:e,disabled:i.formState.isSubmitting,dataTestId:"cancelBtn",fullWidth:!0,children:a("general.cancel")}),(0,r.jsx)(s.PrimaryButton,{disabled:!i.formState.isValid||i.formState.isSubmitting,type:"submit",dataTestId:"saveBtn",fullWidth:!0,children:a("general.save")})]})]})})},v(y,b(j))));var y,j};a()}catch(e){a(e)}}))},847384:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{Z:()=>j});var r=n(785893),i=n(834392),o=n(789529),l=n(299246),s=n(667294),d=n(230811),c=n(363119),h=n(308787),u=n(674990),x=n(412252),p=n(650511),g=n(561277),m=n(646284),f=n(605930),w=n(281672),v=n(883660),b=e([o,h,m,w,v]);[o,h,m,w,v]=b.then?(await b)():b;const y=({currentAsset:e,getBalance:t,disabled:n,onChangeAmount:a,amount:b,amountError:y,onMaxClicked:j,chainId:I,detrimentalUTXORemove:C})=>{const{fiatValue:Z}=(0,o.Z)(I,e,b),P=(0,c.v9)((t=>{const n=t.wallets.activeWalletId;return t.balances[n].chains[e.chainId]})),k=(0,w.fU)(),{t:_}=(0,d.$G)("app"),[B,F]=(0,s.useState)(0),L=(0,s.useMemo)((()=>k.getChainControllerById(e.chainId)),[k,e.chainId]);return(0,s.useEffect)((()=>{let n=Number(t(e));(null==e?void 0:e.isToken)||(n=(0,f.Ug)(Number(n),L.getType())),n<0&&(n=0),F(n)}),[t,e,P]),(0,r.jsxs)(h.FlexBox,{pb:8,pt:8,children:[(0,r.jsxs)(h.FlexBox,{pl:16,pr:8,height:32,flexDirection:"row",alignItems:"center",justifyContent:"space-between",children:[(0,r.jsxs)(h.FlexBox,{flexDirection:"row",alignItems:"center",children:[(0,r.jsx)(x.Z,{children:_("amount_input.amount")}),C&&(0,r.jsx)(m.InfoHelper,{message:_("amount_input.detrimental_utxo")})]}),(0,r.jsx)(v.E,{disabled:n,onClick:j,dataTestId:"maxBtn",children:(0,r.jsx)(g.Z,{children:_("amount_input.max_amount",{amount:(0,l.pF)(B,i.j5,{trimTrailingZero:!0})})})})]}),(0,r.jsx)(v._,{autoFocus:!0,textAlign:u.P.Right,value:b,onChange:a,disabled:n,tipError:y,placeholder:"0.0",dataTestId:"amountFld"}),(0,r.jsx)(h.FlexBox,{mt:4,ml:16,"data-testid":"fiatAmount",children:(0,r.jsx)(p.Z,{children:Z})})]})},j=(0,s.memo)(y);a()}catch(e){a(e)}}))},694441:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{Z:()=>P});var r=n(785893),i=n(667294),o=n(996176),l=n(386032),s=n(103821),d=n(356308),c=n(561277),h=n(458038),u=n(650511),x=n(412252),p=n(230811),g=n(615735),m=n(281672),f=n(771341),w=n(308787),v=n(876777),b=n(930319),y=e([o,l,m,w,b]);[o,l,m,w,b]=y.then?(await y)():y;const j=({toAddress:e,accountId:t,contactName:n,chainId:a})=>{const{accountLabel:i}=(0,s.Z)(t);return t?(0,r.jsxs)(b.Uo,{children:[(0,r.jsx)(o.Z,{walletId:t,scale:1.5,dotSize:9}),(0,r.jsx)(w.FlexBox,{ml:16,maxWidth:260,children:(0,r.jsx)(h.Z,{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",children:i})})]}):n?(0,r.jsx)(b.Uo,{children:(0,r.jsxs)(w.FlexBox,{ml:16,flexDirection:"row",gridGap:8,alignItems:"center",maxWidth:280,children:[(0,r.jsx)(h.Z,{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",children:n}),(0,r.jsx)(d.ZP,{title:e,placement:"bottom",wordBreak:!0,arrow:!1,children:(0,r.jsx)(f.sz,{color:v.wL.darkGrey})}),(0,r.jsx)(l.Z,{chainId:a})]})}):(0,r.jsx)(w.FlexBox,{ml:16,maxWidth:320,children:(0,r.jsx)(h.Z,{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",children:e})})},I=({currentAsset:e})=>{const t=(0,i.useMemo)((()=>e.image),[e.image,e.symbol]);return(0,r.jsx)(b.Y_,{dataTestId:"tokenIcon",icons:t?[t]:[],symbol:e.symbol})},C=({currentAsset:e})=>{const t=(0,m.JB)().getNFTIcons(e.chainId,e.collectible.nftItem),{icon:n}=(0,g.K)(t);return n?(0,r.jsx)(b.Ee,{src:n,alt:"image"}):(0,r.jsx)(f.Lo,{height:16,width:16})},Z=({chainId:e,toAddress:t,currentAsset:n,accountId:a,contactName:o})=>{var l;const{t:s}=(0,p.$G)("app"),d=(0,m.fU)(),h=(0,i.useMemo)((()=>d.getChainControllerById(e)),[d,e]);return(0,r.jsxs)(w.FlexBox,{children:[(0,r.jsxs)(b.MA,{children:[(0,r.jsxs)(x.Z,{children:[" ",s("asset_info.to")]}),(0,r.jsx)(j,{toAddress:t,accountId:a,contactName:o,chainId:e})]}),(0,r.jsxs)(b.MA,{children:[(0,r.jsx)(x.Z,{children:s("asset_info.asset")}),(0,r.jsxs)(w.FlexBox,{flexDirection:"row",children:[n.collectible?(0,r.jsx)(C,{currentAsset:n}):(0,r.jsx)(I,{currentAsset:n}),(0,r.jsxs)(w.FlexBox,{ml:12,children:[(0,r.jsx)(c.Z,{children:n.symbol}),(0,r.jsx)(u.Z,{children:null==(l=h.getConfig().longName||h.getConfig().shortName)?void 0:l.toUpperCase()})]})]})]})]})},P=(0,i.memo)(Z);a()}catch(e){a(e)}}))},639923:(e,t,n)=>{n.a(e,(async(e,t)=>{try{n(785893);var a=n(308787),r=n(818117),i=(n(230811),n(556071)),o=e([a,i]);[a,i]=o.then?(await o)():o;r.ZP.div`
  padding-top: 10px;
  width: 100%;
  ${({shorter:e})=>e&&r.iv`
      height: 49px;
    `}
`,r.ZP.div`
  margin: 0 10px;
`;t()}catch(e){t(e)}}))},162318:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{Z:()=>P});var r=n(785893),i=n(225071),o=n(244431),l=n(177011),s=n(834392),d=n(299246),c=n(522933),h=n(281672),u=n(458038),x=n(650511),p=n(394294),g=n(421753),m=n(667294),f=n(230811),w=n(363119),v=n(308787),b=n(729154),y=n(111897),j=n(505403),I=n(446527),C=e([l,h,v,j,I]);[l,h,v,j,I]=C.then?(await C)():C;const Z=({action:e,displayAmount:t,from:n,to:a,defaultIcon:C,isTokenTransfer:Z,chainId:P,assetSymbol:k="ETH",children:_,height:B="fit-content",hasExplorer:F=!1,txId:L,footer:S,fee:$,url:A,visibleTransactionAmount:D=!0,withPaddings:O})=>{var M,T,E,N;const{t:U}=(0,f.$G)("app"),R=(0,h.fU)(),G=(0,m.useMemo)((()=>R.getChainControllerById(P)),[P]),{getFiat:W}=(0,j.Z)(),{activeWalletId:V,wallets:q}=(0,w.v9)((e=>e.wallets)),z=n||(null==(T=null==(M=q[V])?void 0:M.chainData[P])?void 0:T.address),H=(null==(N=null==(E=q[V])?void 0:E.chainData[P])?void 0:N.tokens)||{},X=Z&&H[null==k?void 0:k.toUpperCase()]||{},J=(0,m.useCallback)((e=>{const t=(0,y.Kw)(G,e);t&&window.open(t,"_blank")}),[G]);return(0,r.jsxs)(I.W2,{withPaddings:O,children:[(0,r.jsxs)(I.rg,{noShadow:!0,withPaddings:O,variant:"default",children:[(0,r.jsxs)(I.X2,{children:[(0,r.jsxs)(v.FlexBox,{justifyContent:"center",flexDirection:"row",alignItems:"center",gridGap:8,children:[Z||C?(0,r.jsx)(I.Y_,{"data-testid":"chainImg",src:Z?i.toString():C}):(0,r.jsx)(v.Avatar,{text:G.getConfig().longName,size:"xs"}),(0,r.jsxs)(u.Z,{children:[(0,c.eP)(X.name||G.getConfig().longName)," "]})]}),(0,r.jsx)(I.aU,{children:(0,r.jsx)(g.Z,{children:e})})]}),(0,r.jsxs)(I.kI,{children:[(0,r.jsxs)(I.Rd,{children:[(0,r.jsx)(I.Dx,{children:(0,r.jsx)(p.Z,{children:U("tx_layout.from")})}),(0,r.jsx)(I.mR,{"data-testid":"fromAccount",children:(0,r.jsx)(u.Z,{dataTestId:"fromAccount",children:(0,c.fL)(l.Z.getLabel(z,P),4,4)})}),z&&(0,r.jsx)(I.kb,{"data-testid":"fromAddress",onClick:()=>J(z),children:(0,r.jsx)(x.Z,{children:(0,c.fL)(z,4,4)})})]}),(0,r.jsxs)(I.xN,{children:[(0,r.jsx)(I.Dx,{children:(0,r.jsx)(p.Z,{children:U("tx_layout.with")})}),a&&(0,r.jsx)(I.kL,{"data-testid":"withAddress",onClick:()=>J(a),children:(0,r.jsx)(u.Z,{children:(0,c.fL)(a||"",4,4)})}),(0,r.jsx)(I.Jx,{onClick:()=>window.open(A,"_blank"),children:(0,r.jsx)(I.rU,{dataTestId:"withUrl",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",children:A})})]}),(0,r.jsxs)(I.jp,{visible:D,children:[(0,r.jsx)(I.Dx,{children:(0,r.jsx)(p.Z,{children:U("tx_layout.tx_amount")})}),(0,r.jsx)(I.xR,{children:(0,r.jsx)(u.Z,{dataTestId:"txAmountCrypto",children:`${(0,d.pF)(""!==t?Number(t):$,s.DF,{trimTrailingZero:!0})} ${k}`})}),(0,r.jsx)(x.Z,{dataTestId:"txAmountFiat",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",children:W(P,new o.BigNumber(""!==t?Number(t):$),k)})]})]}),F&&(0,r.jsx)(I.fN,{onClick:()=>{const e=`${G.getConfig("network.transaction")}${L}`;window.open(e,"_blank")},dataTestId:"viewOnExplorerBtn",children:(0,r.jsx)(b.Z,{children:U("tx_layout.view_on_explorer")})})]}),_&&(0,r.jsx)(I.rg,{variant:"content",cardHeight:B,children:_}),S&&(0,r.jsx)(I.rg,{variant:"content",children:S})]})},P=(0,m.memo)(Z);a()}catch(e){a(e)}}))},557109:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{B:()=>v});var r=n(785893),i=n(818117),o=n(667294),l=n(308787),s=e([l]);l=(s.then?(await s)():s)[0];var d=Object.defineProperty,c=Object.defineProperties,h=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const m=(0,i.ZP)(l.FlexBox).attrs({flexDirection:"row"})``,f=i.ZP.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  // ellipsis add extra space at end
  margin-right: -2px;
`,w=i.ZP.div`
  white-space: nowrap;
`,v=({end:e,value:t,className:n,alignItems:a,dataTestId:i})=>{const[l,s]=(0,o.useMemo)((()=>t?t.length<=e?[t,""]:[t.slice(0,-e),t.slice(-e)]:["",""]),[e,t]);return(0,r.jsxs)(m,(d=((e,t)=>{for(var n in t||(t={}))x.call(t,n)&&g(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&g(e,n,t[n]);return e})({className:n,"data-testid":i},{alignItems:a}),c(d,h({children:[(0,r.jsx)(f,{"data-testid":"left-part",children:l}),(0,r.jsx)(w,{"data-testid":"right-part",children:s})]}))));var d};a()}catch(e){a(e)}}))},994396:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{Cd:()=>c,Mj:()=>d,QZ:()=>s});var r=n(818117),i=n(308787),o=n(876777),l=e([i]);i=(l.then?(await l)():l)[0];const s=r.ZP.div`
  overflow: overlay;
`,d=(0,r.ZP)(i.SearchInput)`
  padding: 8px 0;
  width: 100%;
  border-radius: 8px;
  font-size: 14px;
`,c=((0,r.ZP)(i.FlexBox).attrs({px:16})`
  transition: ${o.uT.A4};
  &:hover {
    background-color: ${({theme:{palette:e}})=>e.container.hover};
  }
`,r.ZP.div`
  padding-bottom: 8px;
  border-bottom: 1px solid ${o.wL.black};
`);a()}catch(e){a(e)}}))},811601:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{x:()=>u});var r=n(75224),i=n(252746),o=n(664837),l=n(239216),s=n(246858),d=n(667294),c=n(230811),h=e([o,l]);[o,l]=h.then?(await h)():h;const u=e=>{const{t}=(0,c.$G)("app"),n=(0,l.h)(e),a=(0,o.Z)(),[h,u]=(0,d.useState)(""),[x,p]=(0,d.useState)(s.n.Off),[g,m]=(0,d.useState)(s.n.Off),[f,w]=(0,d.useState)(n),v=(0,d.useMemo)((()=>{switch(x){case s.n.Off:return()=>0;case s.n.Up:return(e,t)=>{var n,a;return(null==(n=e.label)?void 0:n.toLowerCase())>(null==(a=t.label)?void 0:a.toLowerCase())?1:-1};case s.n.Down:return(e,t)=>{var n,a;return(null==(n=e.label)?void 0:n.toLowerCase())<(null==(a=t.label)?void 0:a.toLowerCase())?1:-1}}}),[x]),b=(0,d.useMemo)((()=>{switch(g){case s.n.Off:return()=>0;case s.n.Up:return(t,n)=>a.calcFiat(e,t.id)>a.calcFiat(e,n.id)?1:-1;case s.n.Down:return(t,n)=>a.calcFiat(e,t.id)<a.calcFiat(e,n.id)?1:-1}}),[a,e,g]),y=(0,d.useCallback)((t=>{let a=n.filter((e=>{var n;return null==(n=e.label)?void 0:n.toLowerCase().includes(null==t?void 0:t.toLowerCase())}));a=a.filter((t=>!!Object.keys(t.chainData).find((t=>t===e)))),w(a)}),[n,e]);(0,i.b)((()=>{y(h)}),r.l,[h]);const j=(0,d.useMemo)((()=>[{value:"account name",label:t("account.account_name")},{value:"balance",label:t("account.balance")}]),[t]),I=(0,d.useRef)(null);return{accountSortingOptions:j,accounts:f.sort(v).sort(b),keyword:h,handleChangeKeyword:({target:{value:e}})=>{u(e)},onSortChange:(e,t)=>{j[0].label===t?p(e):m(e)},sortAccountNameStatus:x,sortBalanceStatus:g,inputRef:I}};a()}catch(e){a(e)}}))},697211:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{U:()=>r.U});var r=n(98875),i=e([r]);r=(i.then?(await i)():i)[0],a()}catch(e){a(e)}}))},417455:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{o:()=>r.o});var r=n(646817),i=e([r]);r=(i.then?(await i)():i)[0],a()}catch(e){a(e)}}))},501605:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{Z:()=>r.Z});var r=n(451605),i=e([r]);r=(i.then?(await i)():i)[0],a()}catch(e){a(e)}}))},878612:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{o:()=>r.o});var r=n(49563),i=e([r]);r=(i.then?(await i)():i)[0],a()}catch(e){a(e)}}))},304904:(e,t,n)=>{n.d(t,{G:()=>o,n:()=>l});var a=n(785893),r=n(667294);const i=(0,r.createContext)({checkAddress:()=>{}}),o=({contactList:e,children:t})=>{const n=(0,r.useCallback)(((t,n)=>{const a=null==t?void 0:t.trim().toLowerCase(),r=e.find((e=>e.chainList.some((e=>e.addressList.some((e=>{var t;return(null==(t=e.address)?void 0:t.toLowerCase())===a&&n===e.chainId}))))));if(r)return`This address is already saved in your contacts under ${r.name}.`}),[e]),o=(0,r.useMemo)((()=>({checkAddress:n})),[n]);return(0,a.jsx)(i.Provider,{value:o,children:t})},l=()=>(0,r.useContext)(i)},58987:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{t:()=>r.t});var r=n(531520),i=e([r]);r=(i.then?(await i)():i)[0],a()}catch(e){a(e)}}))},591757:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{u:()=>m});var r=n(281672),i=n(287536),o=n(363119),l=n(667294),s=n(616310),d=n(802305),c=n(244586),h=n(670852),u=n(230811),x=n(691438),p=e([r]);r=(p.then?(await p)():p)[0];const g={name:"",profileImage:"",chainList:[]},m=e=>{const{t}=(0,u.$G)("app"),n=(0,h.I)(),a=(0,o.v9)((e=>e.wallets.contacts)),p=(0,l.useMemo)((()=>a.filter((t=>t.uuid!==(null==e?void 0:e.uuid)))),[a,null==e?void 0:e.uuid]),m=(0,r.fU)(),f=(0,l.useMemo)((()=>s.Ry({name:n.stringRequired("Name").test({test:e=>!p.some((t=>t.name===e)),message:t("validation.name_already_exists")}),profileImage:s.Z_(),chainList:s.IX(s.Ry({chainId:s.nK().oneOf(m.getAllChainControllerIds()).required(),addressList:s.IX(s.Ry({uuid:s.Z_().required(),chainId:s.nK().oneOf(m.getAllChainControllerIds()).required(),label:n.stringRequired("Label"),memo:s.Z_(),ENSName:s.Z_().nullable(),address:n.stringRequired("Address").test(((e,n)=>{if(!e)return!0;const a=m.getChainControllerById(n.parent.chainId);return!!a.validateAddress(e)||n.createError({message:t("validation.not_correct_chain_address",{chain:a.getConfig().shortName})})}))})).unique("label",t("validation.provide_a_unique_label")).unique("address",t("validation.provide_a_unique_address"))})).min(1,t("validation.add_at_least_1_network"))})),[m,p]),w=(0,i.cI)({mode:"onChange",resolver:(0,d.X)(f),defaultValues:e||g,shouldUnregister:!1}),{append:v,fields:b,remove:y}=(0,i.Dq)({control:w.control,name:"chainList",shouldUnregister:!0}),j=(0,l.useCallback)((e=>{const t=m.getChainControllerById(e),n=w.getValues("chainList"),a=n.findIndex((t=>t.chainId===e));if(-1===a)v({chainId:e,addressList:[{uuid:(0,c.Z)(),label:`${t.getType()===x.J.Evm?"EVM":t.getConfig().chainSymbol} 1`,address:"",chainId:e}]},{shouldFocus:!1});else{const r=n[a],i=`chainList[${a}].addressList`;w.setValue(i,[...r.addressList,{uuid:(0,c.Z)(),label:`${t.getType()===x.J.Evm?"EVM":t.getConfig().chainSymbol} ${r.addressList.length+1}`,address:"",chainId:e}])}}),[v,w.setValue]);return{formMethods:w,processedContactList:p,handleChainSelect:j,fields:b,handleDeleteChainItem:y}};a()}catch(e){a(e)}}))},864195:(e,t,n)=>{n.d(t,{l:()=>r});var a=n(244586);const r=(e,t)=>{return n=void 0,r=null,i=function*(){const n=Date.now();return{uuid:(null==t?void 0:t.uuid)||(0,a.Z)(),name:e.name.trim(),profileImage:e.profileImage,chainList:e.chainList,createdAt:(null==t?void 0:t.createdAt)||n,updatedAt:n}},new Promise(((e,t)=>{var a=e=>{try{l(i.next(e))}catch(e){t(e)}},o=e=>{try{l(i.throw(e))}catch(e){t(e)}},l=t=>t.done?e(t.value):Promise.resolve(t.value).then(a,o);l((i=i.apply(n,r)).next())}));var n,r,i}},883660:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{E:()=>s,_:()=>d});var r=n(818117),i=n(308787),o=n(876777),l=e([i]);i=(l.then?(await l)():l)[0];const s=(0,r.ZP)(i.BaseButton)`
  border-radius: 8px;
  height: 100%;
  background: unset;
  transition: ${o.uT.A4};
`,d=(0,r.ZP)(i.InputField)`
  border-radius: 8px;
  text-align: right;
  height: 48px;
  padding-left: 8px;
  padding-right: 8px;
`;a()}catch(e){a(e)}}))},789529:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{Z:()=>l});var r=n(667294),i=n(505403),o=e([i]);i=(o.then?(await o)():o)[0];const l=(e,t,n)=>{const{getFiat:a}=(0,i.Z)();return{fiatValue:(0,r.useMemo)((()=>a(e,n,t.symbol,t.address,t.id)),[n,t,e,a])}};a()}catch(e){a(e)}}))},930319:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{Ee:()=>c,MA:()=>d,Uo:()=>u,Y_:()=>h});var r=n(818117),i=n(646284),o=n(308787),l=n(876777),s=e([i,o]);[i,o]=s.then?(await s)():s;const d=(0,r.ZP)(o.FlexBox).attrs({flexDirection:"row",alignItems:"center",justifyContent:"space-between",height:50,px:8})`
  border-bottom: 1px dashed ${l.wL.black};
`,c=r.ZP.img`
  width: 24px;
  height: 24px;
`,h=(0,r.ZP)(i.AssetIcon)`
  width: 24px;
  height: 24px;
`,u=(0,r.ZP)(o.FlexBox).attrs({flexDirection:"row",alignItems:"center",justifyContent:"flex-end",flex:1,minWidth:0})``;(0,r.ZP)(o.FlexBox)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;a()}catch(e){a(e)}}))},103821:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(363119);const r=e=>{var t;const{wallets:n}=(0,a.v9)((e=>e.wallets));return{accountLabel:e&&(null==(t=n[e])?void 0:t.label)}}},303108:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{W:()=>l});var r=n(818117),i=n(308787),o=e([i]);i=(o.then?(await o)():o)[0];const l=(0,r.ZP)(i.FlexBox)`
  padding: 8px;
  width: 100%;
`;a()}catch(e){a(e)}}))},556071:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{n:()=>l});var r=n(818117),i=n(308787),o=e([i]);i=(o.then?(await o)():o)[0];const l=(0,r.ZP)(i.InputField)`
  flex: 1;
  margin-left: ${({noIndents:e})=>e?0:"15px"};
  input[type='number'] {
    width: 60px;
  }
`;a()}catch(e){a(e)}}))},446527:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{Dx:()=>s,Jx:()=>x,Rd:()=>w,W2:()=>Z,X2:()=>g,Y_:()=>y,aU:()=>b,fN:()=>P,jp:()=>v,kI:()=>m,kL:()=>h,kb:()=>d,mR:()=>u,rU:()=>p,rg:()=>C,xN:()=>f,xR:()=>c});var r=n(818117),i=n(308787),o=n(458038),l=e([i]);i=(l.then?(await l)():l)[0];const s=r.ZP.div`
  text-transform: uppercase;
`,d=r.ZP.div`
  cursor: pointer;
`,c=r.ZP.div`
  width: max-content;
`,h=((0,r.ZP)(d)`
  white-space: nowrap;
`,r.ZP.div`
  cursor: pointer;
`),u=r.ZP.div`
  white-space: nowrap;
  width: calc(33vw - 44%);
  text-overflow: ellipsis;
  overflow: hidden;
`,x=r.ZP.div`
  width: calc(33vw - 9%);
`,p=(0,r.ZP)(o.Z)`
  text-decoration-line: underline;
  cursor: pointer;
`,g=(0,r.ZP)(i.FlexBox).attrs({justifyContent:"space-between",alignItems:"center",flexDirection:"row"})`
  width: 100%;
  height: 49px;
  border-bottom: 1px solid
    ${({theme:{palette:e}})=>e.container.divider};
`,m=(0,r.ZP)(g)`
  height: 72px;
`,f=(0,r.ZP)(i.FlexBox).attrs({justifyContent:"space-between",alignItems:"flex-start"})`
  padding-left: 10px;
  width: calc(80px + 10vw);
`,w=(0,r.ZP)(f)`
  width: calc(60px + 9vw);
  padding: 0;
`,v=(0,r.ZP)(f)`
  padding: 0;
  align-items: flex-end;
  flex: 2;
  display: ${({visible:e})=>e?"inherit":"none"};
`,b=r.ZP.div`
  text-transform: uppercase;
`,y=r.ZP.img.attrs({width:"17px",height:"17px",alt:"AssetIcon"})``,j=r.iv`
  margin-top: 10px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  height: fit-content;
  position: relative;
`,I={content:j,default:r.iv`
  width: 100%;
  margin-top: 1px;
  box-sizing: border-box;
`},C=(0,r.ZP)(i.Card)`
  ${({variant:e})=>I[e]}

  ${({cardHeight:e})=>e&&"string"==typeof e?`height: ${e};`:`height: ${e}px;`}
  ${({withPaddings:e})=>e&&"padding: 0 10px;"}
`,Z=r.ZP.div`
  ${({withPaddings:e})=>e&&"padding: 0 10px 10px;"}
`,P=(0,r.ZP)(i.SecondaryButton)`
  margin: 25px 0;
  align-self: stretch;
`;a()}catch(e){a(e)}}))},239216:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{h:()=>d});var r=n(281672),i=n(354061),o=n.n(i),l=n(363119),s=e([r]);r=(s.then?(await s)():s)[0];const d=e=>{const t=(0,l.v9)((e=>e.wallets.wallets)),n=(0,r.i_)();if(!e)return Object.values(t);const a=n.getRootWallets();return o()(a,((e,a)=>{const r=n.getAccountsWalletsIdByWallet(a.id);return e.concat(r.map((({walletId:e})=>t[e])))}),[])};a()}catch(e){a(e)}}))},399922:(e,t,n)=>{n.d(t,{Mb:()=>i,nL:()=>r});const a=["png","jpg","jpeg","gif"],r=(new RegExp(a.join("|"),"gi"),(...e)=>{return t=void 0,n=[...e],r=function*(e=a){const t=document.createElement("input");return t.type="file",t.accept=e.map((e=>`.${e}`)).join(","),new Promise(((e,n)=>{t.onchange=t=>{const a=t.target.files;if(!a)return void n();const r=Array.from(a);if(!r.length)return void n();const i=r[0];e(i)},t.click()}))},new Promise(((e,a)=>{var i=e=>{try{l(r.next(e))}catch(e){a(e)}},o=e=>{try{l(r.throw(e))}catch(e){a(e)}},l=t=>t.done?e(t.value):Promise.resolve(t.value).then(i,o);l((r=r.apply(t,n)).next())}));var t,n,r}),i=(e,t,n)=>new Promise(((r,i)=>{if(a.includes(n.type))return void i("unsupported type");const o=new Image;o.src=URL.createObjectURL(n);const l=document.createElement("canvas"),s=l.getContext("2d");o.addEventListener("load",(()=>{const n=o.naturalWidth/o.naturalHeight;let a,d;if(n>1?(a=t,d=t/n):(d=e,a=e*n),l.width=a,l.height=d,!s)return void i("no context");s.drawImage(o,0,0,a,d);const c=l.toDataURL("image/jpeg");r(c)}))}))}}]);
//# sourceMappingURL=7098.bundle.js.map