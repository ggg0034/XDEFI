!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="105d9cd1-ec3a-40be-9898-f58f4a0234d4",e._sentryDebugIdIdentifier="sentry-dbid-105d9cd1-ec3a-40be-9898-f58f4a0234d4")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"28.2.2"},(self.webpackChunkxdefi_extension=self.webpackChunkxdefi_extension||[]).push([[5298],{641124:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Z:()=>D});var n=r(785893),o=r(667294),i=r(771341),s=r(308787),l=r(556138),c=r(876777),d=r(218006),p=r(729154),x=r(108363),h=r(586686),g=r(230811),u=r(348849),m=r(598331),f=r(918988),w=r(316708),b=r(319685),j=r(50727),v=r(104183),y=r(113863),C=r(55108),P=r(338231),k=r(627172),_=r(313226),F=r(31665),O=r(447782),Z=r(596199),I=e([s,h,u,m,f,w,b,j,v,y,C,P,_,F,O,Z]);[s,h,u,m,f,w,b,j,v,y,C,P,_,F,O,Z]=I.then?(await I)():I;const B=[{label:"account_select.hot_wallets",dataTestId:"hotWallets"},{label:"account_select.hardware_wallets",dataTestId:"hardwareWallets"}],S=[l.WalletType.Keystore,l.WalletType.PkKeystore],$=({handleSelect:e,handleRowClick:t,isClosing:r})=>{var a;const{handleBackup:l,handleCloseGenericDialog:I,toggleManageAccount:$,handleSubmitDialogAction:D,handleCloseShowDappConnectionModal:A,seed:T,tabValue:G,setTabValue:W,handleAccountOption:V,manageAccount:L,walletList:M,activeDialog:H,showDappConnectionModal:N,dappConnectModalWalletId:z,errors:E,register:K,handleSubmit:q,submitHandler:R,toggledWalletId:U,handleToggle:X,walletNames:J,navigateToOnboarding:Q,hasAccounts:Y,toggleSearchActive:ee,handleViewSeedPhrase:te,handleDeleteWallet:re,moreThanOneHWWallet:ae,handlePFPChange:ne,hasImageNft:oe,walletsManager:ie,activeNewAccountRoot:se,handleNewAccountClose:le,handleNewAccountClick:ce,handleNewAccountSubmit:de,selectedRootWalletID:pe}=(0,_.Z)(),{t:xe}=(0,g.$G)("app"),he=(0,o.useRef)(null);return(0,o.useEffect)((()=>{he.current&&he.current.resetScroll()}),[G]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.TopSheet,{isClosing:r,children:[(!Y||!L)&&(0,n.jsx)(s.FlexBox,{margin:"16px 8px 0",children:(0,n.jsx)(s.SegmentedPicker,{activeTab:G,onChangeTab:W,tabsData:B})}),Y?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.FlexBox,{flexDirection:"row",justifyContent:"space-between",children:L?(0,n.jsx)(s.FlexBox,{mx:8,mt:16,width:380,flexDirection:"column",alignItems:"flex-start",children:(0,n.jsxs)(s.FlexBox,{width:"100%",flexDirection:"row",alignItems:"center",children:[(0,n.jsx)(C.Z,{tabValue:G}),(0,n.jsx)(s.FlexBox,{flexDirection:"row",children:(0,n.jsxs)(P.o,{gridGap:8,children:[0===G&&M.length>1&&k.bF.map((({Icon:e,title:t,actionType:r})=>(0,n.jsx)(s.HoverButton,{dataTestId:`${(0,d.lk)(t)}Btn`,onClick:V(r),Icon:(0,n.jsx)(e,{}),label:`${xe(t)}`,disabled:r===k._O.NftChangePfp&&!oe},r))),1===G&&!ae&&k.rm.map((({Icon:e,title:t,actionType:r})=>(0,n.jsx)(s.HoverButton,{dataTestId:`${(0,d.lk)(t)}Btn`,onClick:V(r),Icon:(0,n.jsx)(e,{}),label:`${xe(t)}`},r))),(0,n.jsx)(s.PrimaryButton,{type:"submit",form:"account-form",children:xe("general.done")})]})})]})}):(0,n.jsx)(s.FlexBox,{width:380,height:40,mx:8,mt:16,mb:8,flexDirection:"column",alignItems:"flex-start",children:(0,n.jsx)(s.FlexBox,{width:"100%",flexDirection:"row",alignItems:"center",children:(0,n.jsx)(y.Q,{searchValue:ie.walletSearch,handleSearchChange:ie.handleWalletSearchChange,toggleSearchCallback:ee,hideHoverButton:!1,children:(0,n.jsxs)(s.FlexBox,{width:"100%",flexDirection:"row",justifyContent:"space-between",alignItems:"center",children:[(0,n.jsx)(C.Z,{tabValue:G}),(0,n.jsxs)(s.FlexBox,{flexDirection:"row",justifyContent:"space-between",gridGap:8,alignItems:"center",children:[(0,n.jsx)(s.SecondaryButton,{onClick:$,px:8,dataTestId:"manageBtn",children:(0,n.jsxs)(s.FlexBox,{flexDirection:"row",gridGap:4,alignItems:"center",children:[(0,n.jsx)(i.o,{width:14,height:10}),(0,n.jsx)(p.Z,{children:xe("account_select.manage_label")})]})}),0===G&&(0,n.jsx)(s.HoverButton,{onClick:V(k._O.ImportWallet),Icon:(0,n.jsx)(i._8,{}),label:xe("import_wallet.import_wallet")}),1===G&&(0,n.jsx)(s.HoverButton,{dataTestId:"Connect wallet Btn",onClick:V(k._O.ConnectWallet),Icon:(0,n.jsx)(i.E4,{}),label:xe("account_select.connect_wallet")})]})]})})})})}),L&&1===ie.walletNodesByVariant.length&&0===G&&(0,n.jsx)(P.o,{ml:8,gridGap:8,children:k.nC.map((({Icon:e,title:t,actionType:r})=>(0,n.jsx)(s.HoverButton,{dataTestId:`${(0,d.lk)(t)}Btn`,onClick:V(r),Icon:(0,n.jsx)(e,{}),label:`${xe(t)}`,disabled:r===k._O.NftChangePfp&&!oe},r)))}),(0,n.jsx)(s.FlexBox,{"data-testid":"divider",mx:8,zIndex:Z.VB+1,height:"1px",bg:c.wL.black}),(0,n.jsx)(P.J,{ref:he,children:ie.walletNodesByVariant.length?L?ie.walletNodesByVariant.length>1?(0===G?S.map((e=>ie.walletNodesByType[e])).flat():ie.walletNodesByVariant).map((e=>(0,n.jsx)(f.T,{rootWallet:e,onSubmit:R,handleSubmit:q,register:K,onNewAccountClick:ce,errors:E,onDelete:re,onViewSeedPhrase:te},e.parent.id))):ie.walletNodesByVariant.map((e=>(0,n.jsx)(O.d,{walletNode:e,errors:E,register:K,handleSubmit:q,onSubmit:R},e.parent.id))):ie.visibleWalletNodes.map((r=>(0,n.jsx)(Z.qK,{rootWallet:r,children:(0,n.jsx)(m.L,{walletNode:r,onNonConnectedDappRowClick:t,manageAccount:L,onSelect:e,toggledWalletId:U,onToggle:X,top:Z.be},r.parent.id)},r.parent.id))):(0,n.jsx)(s.FlexBox,{alignItems:"center",justifyContent:"center",p:16,children:(0,n.jsx)(x.Z,{children:xe("account_select.not_found")})})})]}):(0,n.jsx)(F.F,{navigate:Q,type:G?"hardware":"hot"})]}),!!se&&(0,n.jsx)(u.c,{rootWallet:se,existedNames:J,onClose:le,onSubmit:de}),H===k._O.NftChangePfp&&(0,n.jsx)(h.z,{onSelect:ne,onClose:I}),H===k._O.BackupAccounts&&(0,n.jsx)(j.Z,{open:!0,onSubmit:l,onClose:I,description:xe("account_select.backup_description"),labelPassword:xe("account_select.label_password")}),H===k._O.DeleteWallet&&(0,n.jsx)(w.QH,{open:!0,onClose:I,onSubmit:D,dialogTitle:xe("account_select.delete_wallet_title")}),!!z&&(0,n.jsx)(b.J,{open:N,onClose:A,walletId:z}),H===k._O.SecretPhrase&&(T?(0,n.jsx)(v.g,{seed:T,onClose:I}):(0,n.jsx)(w.QH,{open:!0,onClose:I,onSubmit:D,title:xe("account_select.secret_phrase.confirm_password.title",{value:null==(a=ie.walletsRec[pe])?void 0:a.label}),dialogType:w.KO.Secret}))]})},D=(0,o.memo)($);a()}catch(e){a(e)}}))},780555:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Z:()=>j});var n=r(785893),o=r(878559),i=r(281672),s=r(327754),l=r(561277),c=r(458038),d=r(230811),p=r(363119),x=r(739989),h=r(771341),g=r(308787),u=r(729154),m=r(876777),f=r(234130),w=r(594390),b=e([i,g,w]);[i,g,w]=b.then?(await b)():b;const j=()=>{var e;const t=(0,i.nl)(),r=(0,i.i_)(),{wallets:a,activeWalletId:b}=(0,p.v9)((e=>e.wallets)),{connected:j,currentTab:v}=(0,p.v9)((e=>e.dapps)),{t:y}=(0,d.$G)("app"),C=null==(e=null==j?void 0:j[null==v?void 0:v.id])?void 0:e.walletIds,P=()=>[a[b]].concat(Object.values(a).filter((e=>C.includes(e.id)&&e.id!==b))),k=()=>C&&C.length?C.includes(b)?(0,n.jsxs)("span",{children:[(0,n.jsx)(w.xv,{children:(0,n.jsx)(c.Z,{children:(0,n.jsx)(d.cC,{t:y,i18nKey:"acc_permission_module.accounts_connected_other",components:f._,count:C.length})})}),(0,n.jsx)(w.gN,{children:(0,n.jsx)(g.DashLine,{})})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(w.xv,{children:(0,n.jsx)(c.Z,{children:y("acc_permission_module.your_current_account_is_not_connected")})}),(0,n.jsx)(w.gN,{children:(0,n.jsx)(g.DashLine,{})})]}):(0,n.jsx)(w.IS,{children:(0,n.jsx)(c.Z,{children:y("acc_permission_module.dapp_description")})}),_=(0,s.F)({[m.$T.Dark]:"lime"}),F=()=>(0,n.jsx)(w.W2,{children:P().map((e=>(0,n.jsxs)("div",{children:[(0,n.jsxs)(w.X2,{children:[(0,n.jsxs)(g.FlexBox,{width:150,children:[(0,n.jsx)(w.$G,{children:(0,n.jsx)(l.Z,{children:e.label})}),e.id!==b&&(0,n.jsx)(w.U3,{onClick:()=>{return a=e.id,r.selectWallet(a),void t.updateActiveAddressesForDApp(a);var a},children:(0,n.jsx)(c.Z,{children:y("acc_permission_module.switch_to_this_account")})})]}),(0,n.jsx)(w.Tw,{children:C.includes(e.id)?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(g.FlexBox,{mr:20,flexDirection:"row",alignItems:"center",children:[(0,n.jsx)(w.Y8,{children:(0,n.jsx)(g.FlexBox,{backgroundColor:_,width:7,height:7})}),(0,n.jsx)(g.FlexBox,{ml:4,children:(0,n.jsx)(c.Z,{children:y("acc_permission_module.connected")})})]}),(0,n.jsx)(h.XH,{width:"12",onClick:()=>(e=>{const a=P();if(e===b){const t=a.find((t=>t.id!==e));t&&r.selectWallet(t.id)}t.removeWalletFromDApp(e)})(e.id)})]}):(0,n.jsx)(g.SecondaryButton,{onClick:()=>(e=>{x.Z.debug({msg:"handleAddAcc",currentTab:v,walletId:e});const r=a[e].selectedChainId;t.addRequstedDApp(v.id,r,[...C,e],v.favicon,v.title),t.updateActiveAddressesForDApp(e)})(e.id),children:(0,n.jsx)(u.Z,{children:y("general.connect")})})})]}),(0,n.jsx)(g.DashLine,{})]},e.id)))}),O=()=>(null==v?void 0:v.domain)?(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"unset"},children:[(0,n.jsx)("img",{src:v.favicon||o.toString(),style:{marginRight:"10px"},alt:"site-logo",crossOrigin:"anonymous",width:"20"}),(0,n.jsx)(l.Z,{children:null==v?void 0:v.domain})]}):(0,n.jsx)(g.FlexBox,{justifyContent:"center",children:(0,n.jsx)(l.Z,{"data-testid":"visitWeb3Msg",children:y("acc_permission_module.title")})});return(0,n.jsx)(w.A9,{title:(0,n.jsx)(O,{}),children:(null==v?void 0:v.domain)&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(k,{}),C&&!!P().length&&(0,n.jsx)(F,{})]})})};a()}catch(e){a(e)}}))},239605:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{ZP:()=>m});var n=r(785893),o=r(818117),i=r(308787),s=r(814401),l=r(876777),c=e([i]);i=(c.then?(await c)():c)[0];const d=({size:e,children:t,title:r,style:a,dataTestId:o})=>(0,n.jsx)(p,{noContent:!t,$size:e,style:a,"data-testid":o||void 0,children:(0,n.jsxs)(x,{children:[(0,n.jsx)(h,{border:!!t,children:(0,n.jsx)(g,{children:(0,n.jsx)(s.Z,{children:r})})}),t&&(0,n.jsx)(u,{children:t})]})}),p=(0,o.ZP)(i.FlexBox).attrs({flexDirection:"row",alignContent:"start",flexWrap:"wrap"})`
  background: ${({theme:e})=>e.colors.white};
  z-index: 100;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
  border-radius: 7px;
  box-sizing: border-box;
  transition: ${l.uT.A3};
  pointer-events: initial;

  width: 366px;
  transform: translateY(0);
  opacity: 1;
  height: fit-content;
  margin: 10px 5px 0;
  ${({noContent:e})=>e&&o.iv`
      padding-bottom: 0;
    `}
  ${({$size:e})=>"small"===e?o.iv`
          width: 134px;
        `:o.iv`
          width: 380px;
        `}
`,x=o.ZP.div`
  width: 100%;
`,h=(0,o.ZP)(i.FlexBox)`
  height: 40px;
  ${({border:e})=>e&&o.iv`
      height: 40px;
      margin-right: 12px;
      margin-left: 12px;
      border-bottom: 1px solid ${({theme:e})=>e.colors.black};
    `}
`,g=(0,o.ZP)(i.FlexBox).attrs({alignItems:"center",flexDirection:"row",justifyContent:"space-between"})`
  width: 100%;
  margin-left: 4.5px;
`,u=o.ZP.div`
  padding: 0;
`,m=d;a()}catch(e){a(e)}}))},227617:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Z:()=>j});var n=r(785893),o=r(239605),i=r(281672),s=r(667294),l=r(230811),c=r(363119),d=r(646284),p=r(691438),x=r(771341),h=r(308787),g=r(818117),u=e([o,i,d,h]);[o,i,d,h]=u.then?(await u)():u;const m=()=>{const e=(0,i.Iq)(),t=(0,c.v9)((e=>e.dappsProviders)),{settings:r}=t,{t:a}=(0,l.$G)("app"),g=(0,s.useCallback)((t=>{e.setWindowEthereumChain(t)}),[e,t]),u=(0,i.fU)().getChainControllersByType(p.J.Evm).map((e=>e.getId()));return(0,n.jsx)(o.ZP,{style:{zIndex:101,flex:1,minHeight:90,margin:"0 10px 0 0"},title:(0,n.jsxs)(f,{children:[(0,n.jsx)(w,{children:a("injected_module.network_label")}),(0,n.jsx)(b,{arrow:!0,title:(0,n.jsx)("span",{"data-testid":"networkTooltip",children:a("injected_module.tooltip")}),fitContent:!0,placement:"bottom",children:(0,n.jsx)(x.sz,{width:13,height:13,"data-testid":"networkTooltipIcon"})})]}),dataTestId:"networkComponent",children:(0,n.jsx)(h.FlexBox,{pl:7,pb:3,minWidth:350,mt:12,children:(0,n.jsx)(d.FullWidthSelectChain,{value:r.ethereumProvider.windowEthereumChain,onSelect:g,includeAll:!1,chains:u})})})},f=g.ZP.div`
  justify-content: flex-start !important;
  margin-left: 0 !important;

  > div > div {
    margin-left: 0 !important;
  }
`,w=g.ZP.div`
  width: unset !important;
  margin-right: 9px !important;
  margin-left: 0 !important;
`,b=(0,g.ZP)(h.Tooltip)`
  & > div:nth-child(2) {
    left: calc(100% - 110px);
  }

  z-index: 1012;
`,j=m;a()}catch(e){a(e)}}))},147735:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Z:()=>p});var n=r(785893),o=r(780555),i=r(227617),s=r(308787),l=r(221379),c=r(222340),d=e([o,i,s,c]);[o,i,s,c]=d.then?(await d)():d;const p=({open:e,close:t})=>e?(0,n.jsx)(l.Z,{onClickOutside:t,children:(0,n.jsxs)(c.W,{children:[(0,n.jsx)(c.a,{onClick:t}),(0,n.jsx)(s.FlexBox,{children:(0,n.jsx)(i.Z,{})}),(0,n.jsx)(o.Z,{})]})}):null;a()}catch(e){a(e)}}))},911058:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{J:()=>u});var n=r(785893),o=r(667294),i=r(308787),s=r(363119),l=r(483875),c=r(474906),d=r(256539),p=e([i,l,c,d]);[i,l,c,d]=p.then?(await p)():p;const x=[{label:"dapp_pick_tabs.dapps"},{label:"dapp_pick_tabs.connections"}],h=()=>{const[e,t]=(0,o.useState)(0),[r,a]=(0,o.useState)(null),{connected:p}=(0,s.v9)((e=>e.dapps));return r&&p[r]?(0,n.jsx)(l.D,{dappID:r,dapp:p[r],onClose:()=>a(null)}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.FlexBox,{mt:16,mx:8,children:(0,n.jsx)(i.SegmentedPicker,{activeTab:e,onChangeTab:t,tabsData:x})}),0===e&&(0,n.jsx)(c.l,{}),1===e&&(0,n.jsx)(d.T,{onManageDapp:a})]})},g=({isClosing:e})=>(0,n.jsx)(i.TopSheet,{isClosing:e,children:(0,n.jsx)(h,{})}),u=(0,o.memo)(g);a()}catch(e){a(e)}}))},204255:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{ph:()=>b});var n=r(785893),o=r(662507),i=r(561277),s=r(308787),l=e([o,s]);[o,s]=l.then?(await l)():l;var c=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&u(e,r,t[r]);if(x)for(var r of x(t))g.call(t,r)&&u(e,r,t[r]);return e},f=(e,t)=>d(e,p(t)),w=(e,t)=>{var r={};for(var a in e)h.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&x)for(var a of x(e))t.indexOf(a)<0&&g.call(e,a)&&(r[a]=e[a]);return r};const b=e=>{var t=e,{children:r}=t,a=w(t,["children"]);return(0,n.jsx)(o.gM,f(m({},a),{children:(0,n.jsx)(i.Z,{children:r})}))};a()}catch(e){a(e)}}))},662507:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{gM:()=>s});var n=r(818117),o=r(308787),i=e([o]);o=(i.then?(await i)():i)[0];(0,n.ZP)(o.FlexBox).attrs({flex:1})`
  padding: 0 10px;
  margin: 0 10px 10px;
  background: ${({theme:e})=>e.colors.mineShaft};
  box-shadow: ${({theme:e})=>e.shadows[400]};
  overflow: auto;
`;const s=(0,n.ZP)(o.FlexBox).attrs({alignItems:"center",justifyContent:"start",flexDirection:"row"})`
  height: 40px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.black};
`;(0,n.ZP)(o.FlexBox).attrs({flex:1})`
  padding: 0 10px;
  margin: 0 10px 10px;
  background: ${({theme:e})=>e.colors.mineShaft};
  box-shadow: ${({theme:e})=>e.shadows[400]};

  overflow: auto;
`;a()}catch(e){a(e)}}))},921693:(e,t,r)=>{r.a(e,(async(e,t)=>{try{r(785893);var a=r(876777),n=(r(277877),r(308787)),o=(r(771341),r(818117)),i=(r(230811),e([n]));n=(i.then?(await i)():i)[0];o.ZP.ul`
  padding-left: 16px !important;
  color: ${a.wL.white};
`;t()}catch(e){t(e)}}))},431892:(e,t,r)=>{r.a(e,(async(e,t)=>{try{r(785893);var a=r(308787),n=(r(277877),r(230811),r(11964)),o=r(107268),i=e([a,n,o]);[a,n,o]=i.then?(await i)():i;t()}catch(e){t(e)}}))},715413:(e,t,r)=>{r.a(e,(async(e,t)=>{try{var a=r(431892),n=e([a]);a=(n.then?(await n)():n)[0],t()}catch(e){t(e)}}))},710378:(e,t,r)=>{r.a(e,(async(e,t)=>{try{r(785893);var a=r(308787),n=r(818117),o=(r(814302),r(213415)),i=r(936352),s=e([a,o]);[a,o]=s.then?(await s)():s;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;(0,n.ZP)(o.Z)`
  margin: 0 !important;
  background-color: ${({theme:e})=>e.colors.black} !important;
  overflow-y: hidden !important;
  position: relative;
`,(0,n.ZP)(i.Z)`
  position: relative;
  height: 100%;
`,(0,n.ZP)(a.FlexBox)`
  width: fit-content;
`,(0,n.ZP)(a.FlexBox).attrs({alignItems:"center"})`
  position: absolute;
  width: 100%;
  ${({height:e})=>e&&`height: ${e}px;`}
  background-size: cover;
  background: ${({theme:e})=>e.colors.black};
  margin-top: 20px;
`;t()}catch(e){t(e)}}))},213415:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Z:()=>m});var n=r(785893),o=r(667294),i=r(996974),s=r(646284),l=r(308787),c=r(281672),d=r(680528),p=r(686133),x=r(814302),h=r(561277),g=r(371006),u=e([s,l,c,p,g]);[s,l,c,p,g]=u.then?(await u)():u;const m=({children:e,hasCustomContent:t=!1,hasCustomHeader:r,footer:a,hasHeaderControls:u=!0,header:m,hasBackAction:f=!0,onBack:w,loading:b=!1,isPopup:j=!1,isAlternativeVariant:v,disableBackButton:y,title:C,className:P})=>{const k=(0,i.s0)(),_=(0,c.i_)(),F=(0,o.useCallback)((()=>{if(!w)return _.isCreating?(k(d.ft),void _.init(!1)):void k(-1);w()}),[k,w,_]),O=(0,o.useMemo)((()=>(f||C)&&(0,n.jsxs)(l.FlexBox,{flexDirection:"row",alignItems:"center",height:48,justifyContent:"center",children:[f&&(0,n.jsx)(g.OQ,{children:(0,n.jsx)(l.BackButton,{onClick:F,disabled:y})}),C&&(0,n.jsx)(x.Z,{children:C})]})),[f,C,F,y]),Z=(0,o.useMemo)((()=>t?e:(0,n.jsxs)(g.VY,{className:P,contentVariant:v,children:[m&&(0,n.jsx)(g.uN,{children:(0,n.jsx)(s.FormHeader,{children:(0,n.jsx)(g._j,{children:(0,n.jsx)(h.Z,{children:m})})})}),e]})),[t,e,P,v,m]),I=(0,o.useMemo)((()=>r||(0,n.jsx)(p.Z,{hasControls:u})),[r,u]);return(0,n.jsx)(g.im,{children:(0,n.jsxs)(g.we,{$isPopup:j,id:"main",children:[(0,n.jsxs)(g.Pz,{children:[I,b&&(0,n.jsx)(g.ly,{children:(0,n.jsx)(l.LinearProgress,{})})]}),O,Z,a]})})};a()}catch(e){a(e)}}))},728847:(e,t,r)=>{r.a(e,(async(e,t)=>{try{r(785893);var a=r(646284),n=r(213415),o=e([a,n]);[a,n]=o.then?(await o)():o;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;t()}catch(e){t(e)}}))},753420:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(785893),n=r(667294),o=r(327754),i=r(876777),s=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const g=n.forwardRef((function(e,t){const r=(0,o.F)({[i.$T.Dark]:"#FFC400"}),n=e.color||r;return(0,a.jsxs)("svg",(s=((e,t)=>{for(var r in t||(t={}))p.call(t,r)&&h(e,r,t[r]);if(d)for(var r of d(t))x.call(t,r)&&h(e,r,t[r]);return e})({width:40,height:38,fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),l(s,c({children:[(0,a.jsx)("circle",{cx:20,cy:31,r:1,fill:n||"url(#alert_svg__paint0_linear)"}),(0,a.jsx)("path",{d:"M17.345 7.191c1.125-2.137 4.185-2.137 5.31 0l13.374 25.412C37.081 34.6 35.632 37 33.374 37H6.625c-2.257 0-3.706-2.4-2.654-4.397L17.345 7.19z",stroke:n||"url(#alert_svg__paint1_linear)",strokeWidth:2}),(0,a.jsx)("rect",{x:19,y:13,width:2,height:15,rx:1,fill:n||"url(#alert_svg__paint2_linear)"}),(0,a.jsxs)("defs",{children:[(0,a.jsxs)("linearGradient",{id:"alert_svg__paint0_linear",x1:19.861,y1:29.759,x2:18.276,y2:31.207,gradientUnits:"userSpaceOnUse",children:[(0,a.jsx)("stop",{stopColor:"#4476F2"}),(0,a.jsx)("stop",{offset:1,stopColor:"#2041E0"})]}),(0,a.jsxs)("linearGradient",{id:"alert_svg__paint1_linear",x1:17.22,y1:-4.58,x2:-12.999,y2:24.485,gradientUnits:"userSpaceOnUse",children:[(0,a.jsx)("stop",{stopColor:"#4476F2"}),(0,a.jsx)("stop",{offset:1,stopColor:"#2041E0"})]}),(0,a.jsxs)("linearGradient",{id:"alert_svg__paint2_linear",x1:19.861,y1:11.192,x2:16.995,y2:11.541,gradientUnits:"userSpaceOnUse",children:[(0,a.jsx)("stop",{stopColor:"#4476F2"}),(0,a.jsx)("stop",{offset:1,stopColor:"#2041E0"})]})]})]}))));var s})),u=n.memo(g)},77411:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(785893),n=r(667294),o=r(327754),i=r(876777),s=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const g=n.forwardRef((function(e,t){const r=(0,o.F)({[i.$T.Dark]:"white"}),n=e.color||r;return(0,a.jsx)("svg",(s=((e,t)=>{for(var r in t||(t={}))p.call(t,r)&&h(e,r,t[r]);if(d)for(var r of d(t))x.call(t,r)&&h(e,r,t[r]);return e})({width:16,height:16,fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),l(s,c({children:(0,a.jsx)("path",{d:"M2 5.99902L7.72265 9.81412C7.8906 9.92609 8.1094 9.92609 8.27735 9.81412L14 5.99902",stroke:n||"white",strokeLinecap:"round"})}))));var s})),u=n.memo(g)},153780:(e,t,r)=>{r.d(t,{Z:()=>g});var a=r(785893),n=r(667294),o=r(876777),i=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,x=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const h=n.forwardRef((function(e,t){const r=e.color||o.wL.white;return(0,a.jsxs)("svg",(n=((e,t)=>{for(var r in t||(t={}))d.call(t,r)&&x(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&x(e,r,t[r]);return e})({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),s(n,l({children:[(0,a.jsx)("path",{d:"M3.22917 11.5C3.63187 11.5 3.95833 11.8134 3.95833 12.2V13.6H12.7083V12.2C12.7083 11.8134 13.0348 11.5 13.4375 11.5C13.8402 11.5 14.1667 11.8134 14.1667 12.2V13.6C14.1667 14.3732 13.5137 15 12.7083 15H3.95833C3.15292 15 2.5 14.3732 2.5 13.6V12.2C2.5 11.8134 2.82646 11.5 3.22917 11.5Z",fill:r}),(0,a.jsx)("path",{d:"M8.96974 11.295C8.68498 11.5683 8.2233 11.5683 7.93854 11.295L5.02188 8.49497C4.73712 8.22161 4.73712 7.77839 5.02188 7.50503C5.30663 7.23166 5.76832 7.23166 6.05307 7.50503L7.72498 9.11005V1.7C7.72498 1.3134 8.05143 1 8.45414 1C8.85685 1 9.18331 1.3134 9.18331 1.7V9.11005L10.8552 7.50503C11.14 7.23166 11.6017 7.23166 11.8864 7.50503C12.1712 7.77839 12.1712 8.22161 11.8864 8.49497L8.96974 11.295Z",fill:r})]}))));var n})),g=n.memo(h)},540186:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(785893),n=r(667294),o=r(327754),i=r(876777),s=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const g=n.forwardRef((function(e,t){const r=(0,o.F)({[i.$T.Dark]:"white"}),n=e.color||r;return(0,a.jsxs)("svg",(s=((e,t)=>{for(var r in t||(t={}))p.call(t,r)&&h(e,r,t[r]);if(d)for(var r of d(t))x.call(t,r)&&h(e,r,t[r]);return e})({width:"18",height:"22",viewBox:"0 0 18 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),l(s,c({children:[(0,a.jsx)("path",{d:"M17 6.995H15C14.45 6.995 14 7.445 14 7.995V9.985C14 10.535 14.45 10.985 15 10.985V12.985H10V3.405L11.88 5.285C12.27 5.675 12.9 5.675 13.29 5.285C13.68 4.895 13.68 4.265 13.29 3.875L9.71 0.285C9.61 0.195 9.5 0.125 9.38 0.075C9.14 -0.025 8.86 -0.025 8.62 0.075C8.5 0.125 8.39 0.195 8.29 0.285L4.71 3.875C4.32 4.265 4.32 4.895 4.71 5.285C5.1 5.675 5.73 5.675 6.12 5.285L8 3.405V12.995H3V10.715C3.6 10.365 4 9.735 4 8.995C4 7.895 3.1 6.995 2 6.995C0.9 6.995 0 7.895 0 8.995C0 9.735 0.4 10.375 1 10.715V13.995C1 14.545 1.45 14.995 2 14.995H8V18.275C7.4 18.615 7 19.255 7 19.995C7 21.095 7.9 21.995 9 21.995C10.1 21.995 11 21.095 11 19.995C11 19.255 10.6 18.615 10 18.275V14.995H16C16.55 14.995 17 14.545 17 13.995V10.995C17.55 10.995 18 10.545 18 9.995V7.995C18 7.445 17.55 6.995 17 6.995Z",fill:n||"url(#paint0_linear)"}),(0,a.jsx)("defs",{children:(0,a.jsxs)("linearGradient",{id:"paint0_linear",x1:"3.31579",y1:"19.1009",x2:"17.8241",y2:"5.80299",gradientUnits:"userSpaceOnUse",children:[(0,a.jsx)("stop",{offset:"0.407986",stopColor:"#2041E0"}),(0,a.jsx)("stop",{offset:"1",stopColor:"#4476F2"})]})})]}))));var s})),u=n.memo(g)},388899:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(785893),n=r(667294),o=r(327754),i=r(876777),s=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const g=n.forwardRef((function(e,t){const r=(0,o.F)({[i.$T.Dark]:"white"}),n=e.color||r;return(0,a.jsxs)("svg",(s=((e,t)=>{for(var r in t||(t={}))p.call(t,r)&&h(e,r,t[r]);if(d)for(var r of d(t))x.call(t,r)&&h(e,r,t[r]);return e})({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",ref:t},e),l(s,c({children:[(0,a.jsx)("path",{d:"M11.6667 6.03332V4.33332C11.6667 2.31332 10.02 0.666656 8.00002 0.666656C5.98002 0.666656 4.33335 2.31332 4.33335 4.33332V6.03332C3.38669 6.19332 2.66669 7.00666 2.66669 7.99999V13.3333C2.66669 14.4333 3.56002 15.3333 4.66669 15.3333H11.3334C12.4334 15.3333 13.3334 14.44 13.3334 13.3333V7.99999C13.3334 7.00666 12.6134 6.19332 11.6667 6.03332ZM8.00002 1.99999C9.28669 1.99999 10.3334 3.04666 10.3334 4.33332V5.99999H5.66669V4.33332C5.66669 3.04666 6.71335 1.99999 8.00002 1.99999ZM12 13.3333C12 13.7 11.7 14 11.3334 14H4.66669C4.30002 14 4.00002 13.7 4.00002 13.3333V7.99999C4.00002 7.63332 4.30002 7.33332 4.66669 7.33332H11.3334C11.7 7.33332 12 7.63332 12 7.99999V13.3333Z",fill:n}),(0,a.jsx)("path",{d:"M8.00002 8.66666C7.26669 8.66666 6.66669 9.26666 6.66669 9.99999C6.66669 10.4933 6.94002 10.92 7.33335 11.1467V12C7.33335 12.3667 7.63335 12.6667 8.00002 12.6667C8.36669 12.6667 8.66669 12.3667 8.66669 12V11.1467C9.06002 10.9133 9.33335 10.4933 9.33335 9.99999C9.33335 9.26666 8.73335 8.66666 8.00002 8.66666Z",fill:n})]}))));var s})),u=n.memo(g)},799719:(e,t,r)=>{r.d(t,{Z:()=>f});var a=r(785893),n=r(667294),o=r(247412),i=r(327754),s=r(876777),l=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))x.call(t,r)&&g(e,r,t[r]);if(p)for(var r of p(t))h.call(t,r)&&g(e,r,t[r]);return e};const m=n.forwardRef((function(e,t){const r=(0,i.F)({[s.$T.Dark]:"white"}),n=e.color||r;return(0,a.jsx)(o.YJ,{children:(0,a.jsxs)("svg",(l=u({width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),p={"data-testid":"WalletIcon",children:[(0,a.jsx)("g",{clipPath:"url(#Frame_svg__clip0)",children:(0,a.jsx)("path",{d:"M19 4.1V2.8C19 1.2 17.8 0 16.2 0H2.8C1.2 0 0 1.2 0 2.8v10.5C0 14.8 1.2 16 2.7 16h14.5c1.5 0 2.7-1.2 2.7-2.7v-7c.1-.9-.3-1.7-.9-2.2zM2.8 2h13.5c.4 0 .7.3.7.8v.8H2.8c-.5-.1-.8-.4-.8-.8 0-.5.3-.8.8-.8zm14.5 12H2.7c-.4 0-.7-.3-.7-.7V5.4c.2.1.5.1.7.1h14.5c.4 0 .7.3.7.7V7h-1.6c-1.5 0-2.8 1.2-2.8 2.8 0 1.5 1.2 2.8 2.8 2.8H18v.8c0 .3-.3.6-.7.6zm.7-5v1.5h-1.6c-.4 0-.8-.3-.8-.8 0-.4.4-.7.8-.7H18z",fill:"url(#Frame_svg__paint0_linear)"})}),(0,a.jsxs)("defs",{children:[(0,a.jsxs)("linearGradient",{id:"Frame_svg__paint0_linear",x1:3.669,y1:13.895,x2:13.704,y2:-.095,gradientUnits:"userSpaceOnUse",children:[(0,a.jsx)("stop",{offset:.408,stopColor:n||"#2041E0"}),(0,a.jsx)("stop",{offset:1,stopColor:n||"#4476F2"})]}),(0,a.jsx)("clipPath",{id:"Frame_svg__clip0",children:(0,a.jsx)("path",{fill:"#fff",d:"M0 0h20v16H0z"})})]})]},c(l,d(p))))});var l,p})),f=n.memo(m)},604275:(e,t,r)=>{r.d(t,{Z:()=>j});var a=r(785893);const n=r.p+"9b28ad52c56be27dfd7a.svg";var o=r(771341),i=r(876777),s=r(818117),l=r(458038),c=r(585331),d=r(79295),p=r(976829);const x=(0,s.ZP)(p.zx)`
  padding: 0px 8px;
  max-width: 170px;
  height: 32px;
  background: ${({$open:e})=>e?`${i.wL.black}`:`${i.wL.darkSteel}`};
  border-radius: 8px;
  cursor: pointer;
  transition: max-width ${i.uT.A5};

  &:hover {
    background-color: ${i.wL.solidBlack};
  }

  &:focus {
    border: 1px solid transparent;
  }

  ${({$open:e})=>e&&"max-width: 255px;"}
`,h=(0,s.ZP)(d.h).attrs({flexDirection:"row",justifyContent:"space-between"})`
  gap: 8px;
`,g=(0,s.ZP)(d.h).attrs({justifyContent:"center"})`
  position: relative;
`,u=s.ZP.img`
  width: 16px;
  height: 16px;
`,m=s.ZP.img`
  width: 12px;
  height: 12px;
`,f=(0,s.ZP)(d.h).attrs({flex:"none"})`
  max-width: 120px;
`,w=(0,s.ZP)(o.Tw)`
  width: 12px;
  height: 12px;
`,b=(0,s.ZP)(d.h)`
  position: absolute;
  top: -2px;
  right: -5px;
`,j=({open:e,label:t,onClick:r,image:o,onMouseDown:i,dataTestId:s,chainIcon:d,walletIcon:p})=>(0,a.jsx)(x,{$open:e,onClick:r,onMouseDown:i,dataTestId:s,children:(0,a.jsxs)(h,{children:[(0,a.jsxs)(g,{children:[o?(0,a.jsx)(c.qE,{image:o,size:"sm",dataTestId:"buttonAvatarImage"}):p||(0,a.jsx)(u,{src:n.toString(),"data-testid":"buttonAvatarImage"}),d&&(0,a.jsx)(b,{children:(0,a.jsx)(m,{src:d,"data-testid":"buttonAvatarChainIcon"})})]}),(0,a.jsx)(g,{children:(0,a.jsx)(f,{children:(0,a.jsx)(l.Z,{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",children:t})})}),e&&(0,a.jsx)(g,{"data-testid":"avatarButtonClose",children:(0,a.jsx)(w,{})})]})})},802615:(e,t,r)=>{r.d(t,{Z:()=>b});var a=r(785893),n=r(561277),o=r(667294),i=r(230811),s=r(363119),l=r(216558),c=r(556138),d=r(38187),p=r(712354),x=Object.defineProperty,h=Object.defineProperties,g=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,w=(e,t,r)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const b=(0,o.memo)((e=>{var t,r=e,{wallet:o,show:x}=r,b=((e,t)=>{var r={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&f.call(e,a)&&(r[a]=e[a]);return r})(r,["wallet","show"]);const{t:j}=(0,i.$G)("app"),v=(0,s.v9)((e=>e.wallets.wallets[e.wallets.activeWalletId])),y=o||v;return(0,l.C)(null==(t=null==y?void 0:y.walletInfo)?void 0:t.type)?(0,a.jsx)(p.Z,(C=((e,t)=>{for(var r in t||(t={}))m.call(t,r)&&w(e,r,t[r]);if(u)for(var r of u(t))f.call(t,r)&&w(e,r,t[r]);return e})({show:x},b),P={children:(0,a.jsx)(d.Z,{flexDirection:"row",alignItems:"center",justifyContent:"center",minHeight:35,gridGap:4,children:(0,a.jsx)(n.Z,{textAlign:"center",children:j("confirm_ledger.please_confirm",{device:y.walletInfo.type===c.WalletType.Ledger?"Ledger":"Trezor"})})})},h(C,g(P)))):null;var C,P}))},102964:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(785893),n=r(818117),o=r(618884);const i=(0,n.ZP)(o.Z)`
  text-decoration: underline;
  cursor: pointer;
`,s=({to:e,children:t,dataTestId:r})=>(0,a.jsx)("div",{onClick:()=>{window.open(e,"_blank")},children:(0,a.jsx)(i,{"data-testid":r,children:t})})},316284:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(785893),n=r(876777),o=r(233884),i=r(818117);const s=i.ZP.div`
  width: ${({$containerWidth:e})=>e}px;
  background-color: rgb(170, 182, 243);
`,l=i.ZP.div`
  animation: ${o.PB} 1s linear infinite;
  height: 4px !important;
  width: 50%;
  background: ${({color:e})=>e};
`,c=({className:e,color:t=n.wL.blue,dataTestId:r="linearLoader",containerWidth:o=380})=>(0,a.jsx)(s,{$containerWidth:o,"data-testid":"linearProgressContainer",children:(0,a.jsx)(l,{className:e,color:t,"data-testid":r})})},533448:()=>{},18544:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Z:()=>d});var n=r(667294),o=r(230811),i=r(363119),s=r(972819),l=r(281672),c=e([s,l]);[s,l]=c.then?(await c)():c;const d=(e,t)=>{const{t:r}=(0,o.$G)(),[a,c]=(0,n.useState)(!1),d=(0,n.useCallback)((()=>c(!1)),[c]),p=(0,n.useCallback)((()=>c(!0)),[c]),x=(0,l.UW)(),{addNotification:h}=(0,s.Z)(),g=(0,l.Ni)(),{requireTxPassword:u}=(0,i.v9)((e=>e.settings));return{handleConfirm:(0,n.useCallback)((a=>{return n=void 0,o=null,i=function*(){const n=a||x.masterKeys.masterPassword;if(!n||!a&&u)p();else if(n)try{(yield g.validateMasterPassword(n))?(d(),e&&(yield e(n))):h({title:r("alert.wallet.password.error.incorrect.title"),type:"error",message:r("alert.wallet.password.error.incorrect.messages.enter_password")})}catch(e){h({title:r("alert.transaction.errors.transaction.title"),type:"error"})}finally{t&&t()}else p()},new Promise(((e,t)=>{var r=e=>{try{s(i.next(e))}catch(e){t(e)}},a=e=>{try{s(i.throw(e))}catch(e){t(e)}},s=t=>t.done?e(t.value):Promise.resolve(t.value).then(r,a);s((i=i.apply(n,o)).next())}));var n,o,i}),[g,e,x,x.masterKeys.masterPassword,u]),openDialog:a,onCloseDialog:d,onOpenDialog:p}};a()}catch(e){a(e)}}))},594390:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{$G:()=>g,A9:()=>l,IS:()=>h,Tw:()=>f,U3:()=>c,W2:()=>p,X2:()=>m,Y8:()=>d,gN:()=>u,xv:()=>x});var n=r(818117),o=r(308787),i=r(239605),s=e([o,i]);[o,i]=s.then?(await s)():s;const l=(0,n.ZP)(i.ZP)`
  margin: 8px 0 0 !important;
`,c=n.ZP.div`
  cursor: pointer;
  text-decoration: underline;
  opacity: 0.6;
`,d=((0,n.ZP)(o.FlexBox)`
  cursor: pointer;
`,(0,n.ZP)(o.FlexBox).attrs({width:9,height:9,alignItems:"center",justifyContent:"center"})`
  background-color: ${({theme:{palette:e}})=>e.container.background};

  &,
  div {
    border-radius: 50%;
  }

  div {
    border: 1px solid ${({theme:{palette:e}})=>e.container.section};
  }
`),p=n.ZP.div`
  max-height: 255px;
  overflow-y: auto;
  padding-left: 10px;
  padding-right: 10px;
`,x=(0,n.ZP)(o.FlexBox).attrs({textAlign:"center",flexDirection:"row",justifyContent:"center",alignItems:"center",py:20})`
  width: 100%;
  height: 50px;
`,h=(0,n.ZP)(o.FlexBox).attrs({flexDirection:"row",justifyContent:"center",alignItems:"center"})`
  padding: 20px;
`,g=n.ZP.div`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
  white-space: nowrap;
`,u=n.ZP.div`
  margin-left: 10px;
  margin-right: 10px;
`,m=(0,n.ZP)(o.FlexBox).attrs({alignItems:"center",justifyContent:"space-between",flexDirection:"row"})`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding-left: 10px;
`,f=(0,n.ZP)(o.FlexBox).attrs({alignItems:"center",flexDirection:"row"})`
  margin-right: 10px;
  margin-left: 5px;
`;a()}catch(e){a(e)}}))},222340:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{W:()=>c,a:()=>d});var n=r(818117),o=r(884967),i=r(308787),s=r(876777),l=e([i]);i=(l.then?(await l)():l)[0];const c=(0,n.ZP)(i.FlexBox)`
  position: fixed;
  z-index: 1102;
  padding: 12px 17px 0;
  transition: ${s.uT.A3};
  width: 400px;
  height: 550px;
  background: ${({theme:{colors:e}})=>(0,o.m4)(e.solidBlack,.8)};
`,d=(0,n.ZP)(i.FlexBox)`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;a()}catch(e){a(e)}}))},230679:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{J:()=>n.J});var n=r(911058),o=e([n]);n=(o.then?(await o)():o)[0],a()}catch(e){a(e)}}))},366013:(e,t,r)=>{r.a(e,(async(e,t)=>{try{var a=r(921693),n=e([a]);a=(n.then?(await n)():n)[0],t()}catch(e){t(e)}}))},632649:()=>{},11964:(e,t,r)=>{r.a(e,(async(e,t)=>{try{var a=r(972819),n=(r(548203),r(230811),e([a]));a=(n.then?(await n)():n)[0];t()}catch(e){t(e)}}))},107268:(e,t,r)=>{r.a(e,(async(e,t)=>{try{var a=r(308787),n=r(876777),o=r(818117),i=e([a]);a=(i.then?(await i)():i)[0];(0,o.ZP)(a.FlexBox).attrs({justifyContent:"center",alignItems:"center"})`
  position: relative;
`,o.ZP.div`
  display: grid;
  padding: 8px;
  grid: repeat(3, 52px) / repeat(3, 160px);

  border-radius: 8px;
  max-width: 480px;
  flex-wrap: wrap;
  box-sizing: content-box;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.14), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 1px 3px rgba(0, 0, 0, 0.2);
  background-color: ${n.wL.black};
  margin-bottom: 24px;
  @media screen and (max-width: 1440px) and (max-height: 900px) {
    margin-bottom: 8px;
  }
`,(0,o.ZP)(a.FlexBox).attrs({flexDirection:"row",alignItems:"center",justifyContent:"flex-end",gridGap:8})`
  border-left: 1px dashed ${n.wL.solidBlack};

  > div:nth-child(1) {
    padding: 16px;
  }

  > div:nth-child(2) {
    flex-basis: 66%;
  }

  &:first-child,
  &:nth-child(3n + 1) {
    border-left: none;
    border-top: 1px dashed ${n.wL.solidBlack};
  }

  &:nth-child(3n + 2) {
    border-top: 1px dashed ${n.wL.solidBlack};
  }

  &:nth-child(3n) {
    border-top: 1px dashed ${n.wL.solidBlack};
  }

  &:nth-child(-n + 3) {
    border-top: none;
  }
`,(0,o.ZP)(a.FlexBox).attrs({flexDirection:"row",justifyContent:"center",alignItems:"center",gridGap:8})`
  background-color: ${n.wL.charcoal};
  border-radius: 8px;
  width: 132px;
  height: 48px;
  cursor: pointer;

  &:hover {
    background-color: ${n.wL.solidBlack};
  }

  margin-bottom: 32px;
  @media screen and (max-width: 1440px) and (max-height: 900px) {
    margin-bottom: 8px;
  }
`;t()}catch(e){t(e)}}))},623638:(e,t,r)=>{r.d(t,{O:()=>o});const a=r(357786).Ps`
  query Fee {
    polygon {
      fee {
        high {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
        medium {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
        low {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
      }
    }
    avalanche {
      fee {
        high {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
        medium {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
        low {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
      }
    }
    ethereum {
      fee {
        high {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
        medium {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
        low {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
      }
    }
    optimism {
      fee {
        high {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
        medium {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
        low {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
      }
    }
  }
`;var n=r(459457);const o=e=>n.Lp.query({query:a,fetchPolicy:e})},189556:(e,t,r)=>{r.d(t,{m:()=>a});var a=(e=>(e.High="high",e.Medium="medium",e.Low="low",e))(a||{})},465142:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Z:()=>g});var n=r(680528),o=r(667294),i=r(363119),s=r(996974),l=r(281672),c=r(575019),d=r(308787),p=r(311428),x=r(25022),h=e([l,c,d]);[l,c,d]=h.then?(await h)():h;const g=({hasControls:e=!0})=>{const[t,r]=(0,o.useState)(!1),a=(0,l.i_)(),h=(0,p.Z)(),g=(0,l.nl)(),u=(0,l.Ni)(),m=(0,l.fU)(),[f,w]=(0,o.useState)(!1),[b,j]=(0,o.useState)(!1),{isClosing:v,setIsClosing:y}=(0,d.useDelayClose)({onClose:()=>j(!1)}),[C,P]=(0,o.useState)(!1),{isClosing:k,setIsClosing:_}=(0,d.useDelayClose)({onClose:()=>P(!1)}),[F,O]=(0,o.useState)(null),{activeWalletId:Z,wallets:I,pfp:B}=(0,i.v9)((e=>e.wallets)),S=(0,s.s0)(),$=(0,s.TH)(),{connected:D,currentTab:A}=(0,i.v9)((e=>e.dapps)),T=(0,o.useMemo)((()=>A&&Object.keys(D).includes(A.id)?A:null),[A,D]),G=Z&&Object.keys(I).length&&!u.isLocked&&!a.isCreating,W=(0,o.useCallback)((e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()}),[]),V=(0,o.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),f&&w(!1),_(!0),b?y(!0):j(!0)}),[f,b,y]),L=(0,o.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),y(!0),C?_(!0):P(!0)}),[C]),M=(0,o.useMemo)((()=>e&&G),[e,G]),H=(0,o.useMemo)((()=>{var e;return null==(e=null==D?void 0:D[null==A?void 0:A.id])?void 0:e.walletIds}),[D,null==A?void 0:A.id]),N=(0,o.useCallback)((e=>{$.pathname.indexOf(n.hX)>-1&&S(n.ft),a.selectWallet(e);const t=!!(null==H?void 0:H.includes(e));g.updateActiveAddressesForDApp(e,!t),y(!0)}),[H,g,a,S,$.pathname]),z=(0,o.useCallback)((e=>{r(!0),O(e),a.selectWallet(e);const t=!!(null==H?void 0:H.includes(e));g.updateActiveAddressesForDApp(e,!t),y(!0)}),[r,O,H,g,a,j]),E=(0,o.useCallback)((()=>{r(!1),O(null)}),[r]),K=(0,o.useCallback)((()=>{S(n.ft),a.init(!0),u.lockMasterKey(),(0,c.qC)([],!0),h.track(x.uT.Locked,{})}),[h,S,a,u]),q=(0,o.useMemo)((()=>{var e,t;const r=null==(e=null==D?void 0:D[null==A?void 0:A.id])?void 0:e.chains;return(null==r?void 0:r.length)?null!=(t=m.getChainControllerById(r[0]).getConfig().image)?t:m.getChainControllerById(r[0]).getConfig().fallbackImage:void 0}),[D,null==A?void 0:A.id,m]);return{handleCloseShowDappConnectionModal:E,dappConnectModalWalletId:F,showDappConnectionModal:t,handleSelect:N,handleRowClick:z,hasControlAndIsAuthenticated:M,activeWalletId:Z,wallets:I,showAccountSelect:b,handleClickShowDappsScreen:L,handleClickAccountSelect:V,handleStopPropagation:W,currentDapp:T,showDappsScreen:C,showControlPanel:f,setShowControlPanel:w,setShowAccountSelect:j,handleLockIconClick:K,chainIcon:q,profilePic:B,isAccountSelectClosing:v,isDappsScreenClosing:k,activeWallet:I[Z]}};a()}catch(e){a(e)}}))},379134:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{LI:()=>p,Pz:()=>l,Qc:()=>d,gM:()=>c});var n=r(818117),o=r(308787),i=r(876777),s=e([o]);o=(s.then?(await s)():s)[0];const l=(0,n.ZP)(o.FlexBox)`
  padding: 8px;
  height: 48px;
  background-color: ${i.wL.mineShaft};
  box-shadow: inset 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
    0px 1px 2px rgba(0, 0, 0, 0.3);
  position: absolute;
  z-index: ${i.ki.topBar};
  width: 100%;
`,c=(0,n.ZP)(o.FlexBox).attrs({flexDirection:"row"})`
  position: relative;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
`,d=(0,n.ZP)(o.FlexBox).attrs({flexDirection:"row"})`
  pointer-events: all;
  z-index: 1;
`,p=(0,n.ZP)(o.FlexBox).attrs({justifyContent:"center",flexDirection:"row",alignItems:"center"})`
  gap: 8px;
  z-index: 1;
`;(0,n.ZP)(o.FlexBox)`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin-right: 4px;
`,n.ZP.img.attrs({alt:"Chain-Icon"})`
  width: 24px;
`,(0,n.ZP)(o.FlexBox).attrs({mx:4,my:2,width:"1px",alignSelf:"stretch"})`
  background-color: ${({theme:e})=>e.palette.container.background};
`,n.ZP.div`
  text-transform: uppercase;
  margin-left: 2px;
`;a()}catch(e){a(e)}}))},670852:(e,t,r)=>{r.d(t,{I:()=>i});var a=r(616310),n=r(680528),o=r(230811);const i=()=>{const{t:e}=(0,o.$G)("app");return{stringRequired:(t="This field")=>a.Z_().required(e("validation.field_required",{field:t})).matches(/\S/,e("validation.cant_contain_only_blank_spaces",{field:t})),passwordRequired:()=>a.Z_().required(e("validation.password_is_required")),newPassword:t=>a.Z_().required(t||e("validation.password_is_required")).min(n.lo,e("validation.password_min_length",{value:n.lo})).test({name:"strength",message:e("validation.sequence_condition"),test:e=>/^(?!.*(.)\1{2})/.test(e)}),confirmPassword:(t="password")=>a.Z_().required(e("create_wallet_password.confirm_password")).oneOf([a.iH(t),""],e("validation.password_match"))}}},42763:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{D:()=>b,Z:()=>j});var n=r(346307),o=r(581106),i=r(548264),s=r(751865),l=r(102998),c=r(676734),d=r(501937),p=r(204147),x=r(843655),h=r(556138),g=e([s]);s=(g.then?(await g)():g)[0];const u={key:"primary",version:Number(p.gj),storage:c.Z,whitelist:[h.StoreKeys.Settings,h.StoreKeys.Balances,h.StoreKeys.Wallets,h.StoreKeys.Swaps,h.StoreKeys.MasterKeystore,h.StoreKeys.Dapps,h.StoreKeys.Dappsproviders,h.StoreKeys.Campaigns,h.StoreKeys.Fiat,h.StoreKeys.Notifications,h.StoreKeys.Chains],migrate:s.e},m=!1,f=(0,l.OJ)(u,(0,n.UY)(x.Z)),w=(0,o.xC)({reducer:f,middleware:[...(0,o.Bx)({thunk:!0,serializableCheck:!1}),i.k],devTools:m,enhancers:m?[(0,d.ZP)({realtime:!0,port:8e3,hostname:"localhost"})]:[]}),b=(0,l.p5)(w),j=w;a()}catch(e){a(e)}}))},233884:(e,t,r)=>{r.d(t,{Ji:()=>o,O2:()=>s,OK:()=>g,P2:()=>d,PB:()=>p,U6:()=>i,xX:()=>c});var a=r(818117),n=r(744736);const o=(e=1)=>a.F4` 
  from {
    opacity: 0;
  }

  to {
    opacity: ${e};
  }
`,i=(e=1)=>a.F4`
from {
    opacity: ${e};
  }

  to {
    opacity: 0;
  }
`,s=(a.F4`
  0%, 80%, 100% { 
    transform: scale(0);
  } 40% { 
    transform: scale(1.0);
  }
`,a.F4`
    100%{
        transform: rotate(360deg);
    }
`),l=a.F4`
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
`,c=a.F4`
  from {
      margin-top: 100%;
    }
    to {
      margin-top: 8px;
    }
  `,d=a.F4`
  0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
`,p=a.F4`
    0% {
      transform: translateX(0%);
    }

    60% {
      transform: translateX(60%);
    }

    100% {
      transform: translateX(100%);
    }
`,x=a.F4`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  50% {
    opacity: 0.5;
    transform: translateX(-50%);
  }
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
`,h=a.F4`
  0% {

    padding: 16px 0;
   
  }
  
  100% {
    height: 0;
    padding: 0;
    visibility: hidden;
  }
`,g={A1:e=>a.iv`
    ${((e=-1e3)=>a.F4`
  from {
    bottom: ${e}px;
  }
  to {
    bottom: 0px;
  }
`)(e)} 0.4s ${n.k.A2}
  `,A2:e=>a.iv`
    ${((e=-1e3)=>a.F4`
  from {
    bottom: 0px;
  }
  to {
    bottom: ${e}px;
  }
`)(e)} 0.2s ${n.k.A3}
  `,A3:a.iv`
    ${l} ${n.u.A3}
  `,A4:e=>a.iv`
    ${o(e)} 0.4s ${n.k.A2}
  `,A5:e=>a.iv`
    ${i(e)} 0.2s ${n.k.A3}
  `,A6:(e=-1e3)=>a.iv`
    ${(e=>a.F4`
  from {
    top: ${e}px;
  }
  to {
    top: 0;
  }
`)(e)} 0.4s ${n.k.A2}
  `,A7:(e=-1e3)=>a.iv`
    ${(e=>a.F4`
  from {
    top: 0px;
  }
  to {
    top: ${e}px;
  }
`)(e)} 0.2s ${n.k.A3}
  `,A8:a.iv`
    ${x} 0.3s  ${n.k.A3} 0s forwards
  `,A9:a.iv`
    ${h} 0.3s ${n.k.A3} 0.3s forwards
  `}},876777:(e,t,r)=>{r.d(t,{$T:()=>s.$,MI:()=>l.M,O2:()=>d.O2,OK:()=>d.OK,Q2:()=>n.Q,fo:()=>o.f,kV:()=>i.k,ki:()=>c.k,uT:()=>i.u,wL:()=>a.w});var a=r(137720),n=r(296588),o=r(398709),i=r(744736),s=r(660439),l=r(634047),c=r(791572),d=r(233884)},945192:(e,t,r)=>{e.exports=r.p+"d325d1f81485894ab506.svg"},278155:(e,t,r)=>{e.exports=r.p+"7526221f74d746f7a00f.svg"},305381:(e,t,r)=>{e.exports=r.p+"427afbd94375db050fda.svg"},878559:(e,t,r)=>{e.exports=r.p+"6b9d2a1a64abe0e40b5e.png"}}]);
//# sourceMappingURL=5298.bundle.js.map