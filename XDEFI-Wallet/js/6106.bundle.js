!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="e3f3894b-e2ac-4dd0-bc32-1414e2b20351",e._sentryDebugIdIdentifier="sentry-dbid-e3f3894b-e2ac-4dd0-bc32-1414e2b20351")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"28.2.2"},(self.webpackChunkxdefi_extension=self.webpackChunkxdefi_extension||[]).push([[6106],{620531:(e,t,s)=>{s.a(e,(async(e,a)=>{try{s.d(t,{Z:()=>W});var l=s(57892),i=s(264487),o=s(25022),r=s(739989),n=s(446010),d=s(42763),c=s(244586),h=s(847001),y=e([d]);d=(y.then?(await y)():y)[0];var p=Object.defineProperty,u=Object.defineProperties,w=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,m=(e,t,s)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,b=(e,t,s)=>(m(e,"symbol"!=typeof t?t+"":t,s),s);const v=e=>new Proxy(e,{get(e,t){const{anonymousMetrics:s}=d.Z.getState().settings;return s||r.Z.debug("get: No metrics sent"),e[t]},set(e,t,s){const{anonymousMetrics:a}=d.Z.getState().settings;return a?(e[t]=s,!0):(r.Z.debug("set: No metrics sent"),!1)},apply(e,t,s){const{anonymousMetrics:a}=d.Z.getState().settings;if(a)return e(...s);r.Z.debug("apply: No metrics sent")}});class k{constructor(){b(this,"analytics"),b(this,"setUserId",(e=>{if(!d.Z.getState().settings.userId){const t=e||(0,c.Z)();d.Z.dispatch((0,n.Iv)(t))}}));const e=h.Z.get("SEGMENT_WRITEKEY");e?l.b.load({writeKey:e}).then((e=>{try{r.Z.info("Analytics loaded",e),this.analytics=v(e[0])}catch(e){(0,i.Tb)({title:"Analytics failed to hookAnalytics",err:e}),r.Z.error({title:"Analytics failed to hookAnalytics",err:e})}})).catch((e=>{(0,i.Tb)({title:"Analytics Controller failed to initialize",err:e}),r.Z.error({title:"Analytics Controller failed to initialize",err:e})})):r.Z.warn("Analytics: segmentWriteKey is empty - stopping initialization of AnalyticsController")}page(e){const{anonymousMetrics:t,userId:s}=d.Z.getState().settings;if(t&&this.analytics&&this.analytics.page&&s)return this.analytics.identify(s).then((()=>this.analytics.page(void 0,e,{userId:s},{context:{ip:"0.0.0.0"}})))}track(e,t){const{anonymousMetrics:s,userId:a}=d.Z.getState().settings;if(!s&&e!==o.uT.ToggledAnonMetrcs)return;const l=(i=((e,t)=>{for(var s in t||(t={}))g.call(t,s)&&m(e,s,t[s]);if(f)for(var s of f(t))I.call(t,s)&&m(e,s,t[s]);return e})({},t),u(i,w({userId:a})));var i;return this.analytics&&this.analytics.page&&a?this.analytics.identify(a).then((()=>this.analytics.track({type:"track",event:e,properties:l},{context:{ip:"0.0.0.0"}}))):void 0}}const W=k;a()}catch(e){a(e)}}))},177011:(e,t,s)=>{s.a(e,(async(e,a)=>{try{s.d(t,{Z:()=>ce});var l=s(276749),i=s(620531),o=s(691438),r=s(831352),n=s(680528),d=s(626423),c=s(46461),h=s(496486),y=s(763105),p=s.n(y),u=s(435161),w=s.n(u),f=s(875472),g=s.n(f),I=s(189734),m=s.n(I),b=s(363119),v=s(42763),k=s(556138),W=s(628790),K=s(603874),T=s(25022),Z=s(739989),C=s(640610),S=s(905479),_=s(446010),A=s(316683),P=s(250415),O=s(204147),x=s(133156),N=s(630292),D=s(99127),j=s(730876),L=s(803418),Buffer=s(348764).Buffer,B=e([i,v,x,N]);[i,v,x,N]=B.then?(await B)():B;var E,R,F,M,$,J,H,U=Object.defineProperty,z=Object.defineProperties,V=Object.getOwnPropertyDescriptors,X=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,G=(e,t,s)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Q=(e,t)=>{for(var s in t||(t={}))Y.call(t,s)&&G(e,s,t[s]);if(X)for(var s of X(t))q.call(t,s)&&G(e,s,t[s]);return e},ee=(e,t)=>z(e,V(t)),te=(e,t,s)=>(G(e,"symbol"!=typeof t?t+"":t,s),s),se=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},ae=(e,t,s)=>(se(e,t,"read from private field"),s?s.call(e):t.get(e)),le=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},ie=(e,t,s,a)=>(se(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s),oe=(e,t,s)=>new Promise(((a,l)=>{var i=e=>{try{r(s.next(e))}catch(e){l(e)}},o=e=>{try{r(s.throw(e))}catch(e){l(e)}},r=e=>e.done?a(e.value):Promise.resolve(e.value).then(i,o);r((s=s.apply(e,t)).next())}));const re={address:"",chainId:"",nft:{},viewedNftIds:[],hiddenNftIds:[],pinnedNftIds:[],isNativeTokenPinned:!1,tokens:{},nativeTokenVisible:!0,recentSentAddresses:[]},ne={nftLoading:!1,nftIdOrders:[],sentNFTIDs:{},hiddenNFTIDs:[]};class de{constructor(e){le(this,E,void 0),le(this,R,void 0),le(this,F,void 0),le(this,M,void 0),le(this,$,void 0),le(this,J,void 0),le(this,H,void 0),te(this,"analytics"),te(this,"restoreAccountHandler",((e,t,s,a,l)=>oe(this,null,(function*(){var i;const{wallets:o}=null==(i=v.Z.getState())?void 0:i.wallets;if(w()(Object.keys(o),(e=>o[e])).find((e=>{const t=e.walletInfo.data;return t.rootWalletId===l&&t.walletIndex===s}))||ae(this,H).masterKeys.checkDuplicateAccount(e,s))return;const r=Q({chainData:{},id:"",rootLabel:a,label:`Account ${s+1}`,selectedChainId:ae(this,H).chains.getAllChainControllers()[0].getId(),imported:!0,walletInfo:{type:k.WalletType.Keystore,data:{rootWalletId:l||"",walletIndex:0}}},ne),n=yield(0,W.sB)(e,t,s),d={rootWalletId:l||n.id,walletIndex:s,keystore:n,publickeys:n.publickeys};r.walletInfo.data=d,r.id=n.id;const c=ae(this,H).chains.getAllAddresses({seed:{seed:e,walletIndex:s}});return r.chainData=Q(Q({},r.chainData),c),r.selectedChainId=ae(this,H).chains.getAllChainControllers()[0].getId(),(0,b.dC)((()=>{v.Z.dispatch((0,A.ry)({active:!0,wallet:r})),v.Z.dispatch((0,C.T8)({walletId:r.id})),ae(this,H).masterKeys.addAccountKey(n)})),n.id})))),te(this,"getChainAddress",((e,t)=>{const{wallets:s,activeWalletId:a}=v.Z.getState().wallets||{},l=s[t||a],i=null==l?void 0:l.chainData[e];if(null==i?void 0:i.address)return i.address;throw(0,c.t)("app:controller_errors.no_chainid_address_in_this_wallet",{chainId:e})})),te(this,"getPrivateKeys",(e=>oe(this,null,(function*(){const{wallets:t}=v.Z.getState().wallets||{},s=t[e];if(s.walletInfo.type!==k.WalletType.PkKeystore)throw(0,c.t)("app:controller_errors.wallet_id_is_not_a_pk",{walletId:e});const a=s.walletInfo.data,l=yield ae(this,H).generatePasswordFromKeystore(e);if(!l)throw"getPrivateKeys failed: walletPwd null";const i=yield(0,W.Jy)(a.keystore,l),o=W.Si.fromString(i);return[o,ae(this,H).chains.getAddress(o.nspk.chain,{pk:o.nspk.value.pk})]})))),te(this,"isHDWallet",(e=>e.walletInfo.type===k.WalletType.Ledger||e.walletInfo.type===k.WalletType.Trezor)),ie(this,H,e),this.analytics=new i.Z,this.init()}initTempWallet(e=k.WalletType.Keystore,t=K.y2){if(e===k.WalletType.Keystore){ie(this,$,Q({imported:!1,chainData:{},id:"",rootLabel:"",label:"",selectedChainId:t,walletInfo:{type:e,data:{rootWalletId:"",walletIndex:0}}},ne))}else{if(e!==k.WalletType.PkKeystore)throw`Unsupported initTempWallet parameter ${e}`;ie(this,$,Q({imported:!0,chainData:{},id:"",rootLabel:"",label:"",selectedChainId:t,walletInfo:{type:e,data:{chain:t,keystore:{},rootWalletId:"",walletIndex:0}}},ne))}}init(e=!0){e&&ie(this,E,""),ie(this,J,n.ZN.None),ie(this,M,-1),this.initTempWallet();const t=this.activeWallet;t&&ie(this,$,t)}get activeWallet(){var e;const{wallets:t,activeWalletId:s}=(null==(e=v.Z.getState())?void 0:e.wallets)||{};return t&&Object.keys(t).length&&s?t[s]:null}get isCreating(){return ae(this,J)===n.ZN.SubAccount}toggleAutoLockFeature(){v.Z.dispatch((0,_.ml)())}toggleAnonymousMetricsFeature(){const{anonymousMetrics:e}=v.Z.getState().settings;this.analytics.track(T.uT.ToggledAnonMetrcs,{value:!e}),v.Z.dispatch((0,_.C)())}updateNFTSettings(e){v.Z.dispatch((0,_.Pc)(e))}updateNetworkSettings(e){v.Z.dispatch((0,S.GZ)(e))}getNextWalletIndexForWalletId(e){var t;const{wallets:s}=null==(t=v.Z.getState())?void 0:t.wallets;let a=0;try{Object.keys(s).map((t=>{const{walletInfo:l}=s[t],i=l.data;i.rootWalletId===e&&(a=Math.max(a,i.walletIndex+1))}))}catch(e){return 0}return a}createKeystore(e){return oe(this,arguments,(function*({password:e,seedOrPK:t,keystoreId:s,imported:a}){const i=t&&(j.H.isSeed(t)&&k.WalletType.Keystore||W.Si.isNetworkSpecificPrivateKeys(t)&&k.WalletType.PkKeystore)||k.WalletType.Keystore;Z.Z.debug(`createKeystore walletType ${i}`);let o=t;if(i==k.WalletType.Keystore){this.initTempWallet(i);const e=t||new j.H((0,l.generatePhrase)());if(!j.H.isSeed(e))throw"Exception createKeystore";ie(this,R,e),o=e,ie(this,F,void 0)}else{if(!W.Si.isNetworkSpecificPrivateKeys(t))throw"Bad instance else";{const e=W.Si.isNetworkSpecificPrivateKeys(t)&&t.nspk.chain||void 0;this.initTempWallet(i,e),ie(this,F,t),o=t}}if(ae(this,H).masterKeys.isLocked){if(!(yield ae(this,H).masterKeys.unlock(e)))return!1}ie(this,E,yield ae(this,H).masterKeys.generatePassword(o,e,0)),ie(this,J,n.ZN.Create),ae(this,$).walletInfo.type=i;const r=yield(0,W.sB)(o,ae(this,E),0);if(s&&(r.id=s),i===k.WalletType.Keystore){const e={rootWalletId:r.id,walletIndex:0,keystore:r,publickeys:r.publickeys};ae(this,$).walletInfo.data=e}else if(i===k.WalletType.PkKeystore&&W.Si.isNetworkSpecificPrivateKeys(t)){const e={keystore:yield(0,W.sB)(t,ae(this,E),0),chain:t.nspk.chain,walletIndex:0,rootWalletId:r.id};ae(this,$).walletInfo.data=e}return void 0!==a&&(ae(this,$).imported=a),r}))}addAccountToWallet(e,t,s,a){return oe(this,null,(function*(){var l;if(ae(this,H).masterKeys.isLocked){if(!(yield ae(this,H).masterKeys.unlock(t)))return null}const{wallets:i}=null==(l=v.Z.getState())?void 0:l.wallets;let o=i[e];if(!o){const t=Object.values(i).find((t=>t.walletInfo.data.rootWalletId===e));if(!t)throw(0,c.t)("app:controller_errors.specified_root_wallet_not_exist");o=(0,P.a)(t)}const r=o.walletInfo.data,{masterKeys:d}=ae(this,H),h=null!=a?a:this.getNextWalletIndexForWalletId(r.rootWalletId),y=o.walletInfo.type;switch(y){case k.WalletType.Ledger:case k.WalletType.Trezor:const a=o.walletInfo.data,l=ae(this,H).chains.getChainControllerById(o.selectedChainId),i=yield(0,L.D)(y).getAddress(l,h,a.derivationPath);if(r.rootWalletId!==i.rootWalletId)throw(0,c.t)("app:controller_errors.account_cant_be_added");this.addHardwareWallet(o.walletInfo.type,l.getType(),i,s);break;case k.WalletType.PkKeystore:throw(0,c.t)("app:controller_errors.not_supported_for_pkkeysore");case k.WalletType.Keystore:{const a=o.walletInfo.data;if(!a.keystore)return null;ae(this,F)&&ie(this,F,void 0);const l=yield d.generatePasswordFromKeystore(a.keystore,d.masterPassword);this.initTempWallet(),ie(this,R,yield(0,W.WR)(a.keystore,l)),ie(this,J,n.ZN.Create),ae(this,$).walletInfo.type=y,ie(this,E,yield ae(this,H).masterKeys.generatePassword(ae(this,R),t,h));const i=yield(0,W.sB)(ae(this,R),ae(this,E),h),r={rootWalletId:e,keystore:i,walletIndex:h,publickeys:i.publickeys};ae(this,$).walletInfo.data=r,ae(this,$).id=i.id,yield ae(this,H).populateWalletData(h,ae(this,H).chains.getAllChainNetworkIds()),this.addKeystoreWallet(s)}}return ae(this,$)}))}getSortedWallets(){var e;const{wallets:t}=null==(e=v.Z.getState())?void 0:e.wallets,s=Object.keys(t).map((e=>ee(Q({},t[e]),{rootLabel:this.getRootWallet(e).rootLabel})));return g()(s,["rootLabel","label"],"asc")}getWallet(e){var t;const{wallets:s}=null==(t=v.Z.getState())?void 0:t.wallets;return s[e]}getRootWallet(e){var t;const{wallets:s}=null==(t=v.Z.getState())?void 0:t.wallets,a=s[e].walletInfo.data.rootWalletId;return Object.keys(s).reduce(((e,t)=>{const l=s[t],i=l.walletInfo.data;return i.rootWalletId!==a?e:e.walletInfo.data.walletIndex>i.walletIndex?l:e}),s[e])}getRootWallets(e){var t;const s=e||(null==(t=v.Z.getState())?void 0:t.wallets.wallets),a=(0,h.groupBy)(s,"walletInfo.data.rootWalletId");return Object.keys(a).reduce(((e,t)=>[...e,g()(a[t],"walletInfo.data.walletIndex")[0]]),[])}getAccountsWalletsIdByWallet(e){var t;const{wallets:s}=null==(t=v.Z.getState())?void 0:t.wallets;if(!s[e])return[];const a=s[e].walletInfo.data.rootWalletId,l=[];return Object.keys(s).map((e=>{const t=s[e].walletInfo.data;t.rootWalletId===a&&l.push({walletId:e,walletIndex:t.walletIndex,label:s[e].label})})),g()(l,"walletIndex","asc")}getWalletsByRootID(e){var t;const{wallets:s}=null==(t=v.Z.getState())?void 0:t.wallets;return Object.values(s).filter((t=>t.walletInfo.data.rootWalletId===e))}decryptKeystoreByPassword(e,t,s){return oe(this,null,(function*(){this.initTempWallet();const{masterKeys:a}=ae(this,H);if(!(yield a.unlock(e)))throw(0,c.t)("app:controller_errors.invalid_master_password");const l=(0,x.YY)(s),{rootKeystore:i,accountIndices:o,rootLabel:r}=l,d=yield(0,W.WR)(i,t);if(ae(this,H).masterKeys.checkDuplicateAccount(d))throw(0,c.t)("app:controller_errors.account_allready_exists");const h=yield a.generatePasswordFromKeystore(i,e);ie(this,R,d),ie(this,E,h),ie(this,J,n.ZN.None);const y=yield this.restoreAccountHandler(d,h,0,r);if(y){const e=w()(p()(o,(e=>e>0)),(e=>this.restoreAccountHandler(d,h,e,r,y)));yield Promise.all(e)}}))}downloadKeystoreAsJson(e,t,s){return oe(this,null,(function*(){var a;const{wallets:l}=null==(a=v.Z.getState())?void 0:a.wallets,i=this.getAccountsWalletsIdByWallet(s),o=l[s],r=o.walletInfo.data;if(o.walletInfo.type!==k.WalletType.Keystore||0!==r.walletIndex)throw"This wallet can not be exported as JSON";const c=yield ae(this,H).masterKeys.getAccountSeedPhrase(s,e);if(!c)throw"This wallet can not be exported as JSON";const h=o?o.rootLabel:`xdefi-${(0,d.YO)(24)}`,y=yield(0,W.sB)(c,t,0),p={version:O.Wf,rootKeystore:y,accountIndices:m()(w()(i,(e=>e.walletIndex))),type:n.ys.Single,rootLabel:o.rootLabel};(0,d.Hy)(p,h)}))}initWalletData(e){return oe(this,null,(function*(){var t;const s=yield e({seed:ae(this,R)?{seed:ae(this,R),walletIndex:0}:void 0,pk:null==(t=ae(this,F))?void 0:t.nspk.value.pk});ae(this,$).chainData=Q(Q({},ae(this,$).chainData),s)}))}addKeystoreWallet(e){var t;const{wallets:s}=(null==(t=v.Z.getState())?void 0:t.wallets)||0,a=ae(this,$).walletInfo.data,l=a.rootWalletId?this.getAccountsWalletsIdByWallet(a.rootWalletId):[];if(!a.keystore||ae(this,$).walletInfo.type!==k.WalletType.Keystore)throw(0,c.t)("app:controller_errors.temporary_wallet_is_not_keystore");ae(this,$).selectedChainId=ae(this,H).chains.getAllChainControllers()[0].getId(),ae(this,$).rootLabel=e||`Wallet ${(0,d.C6)(s)}`,ae(this,$).label=e||`Account ${(0,d.hz)(l)}`,ae(this,$).id=a.keystore.id,ae(this,H).masterKeys.addAccountKey(a.keystore),v.Z.dispatch((0,A.ry)({active:!0,wallet:ae(this,$)})),v.Z.dispatch((0,C.T8)({walletId:ae(this,$).id})),ie(this,J,n.ZN.None),this.init()}addHardwareWallet(e,t,s,a){var l;this.initTempWallet(),ae(this,$).walletInfo.type=e;const{wallets:i}=(null==(l=v.Z.getState())?void 0:l.wallets)||{};if(void 0!==i[s.address])throw(0,c.t)("app:controller_errors.wallet_with_specified_address_alredy_exsits");ae(this,$).id=(0,D.Zy)(t,s.derivation,s.address);const h={type:t,derivationPath:s.derivation,address:s.address,testnetDerivationPath:s.testnetDerivation,testnetAddress:s.testnetAddress,publicKey:s.publicKey,testnetPublicKey:s.testnetPublicKey,walletIndex:s.walletIndex,rootWalletId:s.rootWalletId||ae(this,$).id};ae(this,$).walletInfo.data=h,ae(this,$).selectedChainId=s.chainId;const y=ae(this,H).chains.getChainControllerById(s.chainId),p=y.getType()===o.J.Evm,u=y.getType()===o.J.Cosmos,w=y.getType()===o.J.Bitcoin,f=Object.values(i).filter((e=>(0,d.qN)(e))),g=f.filter((t=>t.walletInfo.type===e)).filter((e=>Object.keys(e.chainData).includes(s.chainId)));if(!ae(this,$).label)if(a)ae(this,$).label=a;else if(p){const e=f.filter((e=>o.J.Evm===e.walletInfo.data.type));ae(this,$).label=`EVM ${e.length+1}`}else if(u){const e=f.filter((e=>o.J.Cosmos===e.walletInfo.data.type));ae(this,$).label=`Cosmos ${e.length+1}`}else if(w){const e=y.selfCast().getConfig().network.activeNetwork===r.g5.Testnet?"Bitcoin Testnet":"Bitcoin";ae(this,$).label=`${e} ${g.length+1}`}else{const e=f.filter((e=>e.walletInfo.data.type===t)),s=y.getConfig().longName;ae(this,$).label=`${s} ${e.length+1}`}const I=new Set(g.map((e=>e.walletInfo.data.rootWalletId))).size,m=y.getConfig().shortName,b=e===k.WalletType.Ledger?"LEDGER":"TREZOR";ae(this,$).rootLabel=`${b} ${m} ${I+1}`;const W=w?[y]:ae(this,H).chains.getChainControllersByType(y.getType()).filter((e=>!u||e.selfCast().getConfig().slip44coinType===ae(this,H).chains.getCosmosChainController(K.Re).getConfig().slip44coinType));ae(this,$).chainData=Q(Q({},ae(this,$).chainData),(e=>W.reduce(((t,s)=>{const a=ee(Q({},re),{chainId:s.getConfig().id,address:u?s.generateIBCChainAddress(e.publicKey):e.address,pubKey:e.publicKey,tokens:s.getType()==o.J.Evm&&s.getConfig().network.chainId===N.m1.Ethereum?ae(this,H).chains.getDefaultTokens(s.getConfig().id,["XDEFI"]):re.tokens});return ee(Q({},t),{[s.getConfig().id]:a})}),{}))(s)),ae(this,$).imported=!0,v.Z.dispatch((0,A.ry)({active:!0,wallet:ae(this,$)})),v.Z.dispatch((0,C.T8)({walletId:ae(this,$).id})),ie(this,J,n.ZN.None),this.init()}renameWallet(e,t){v.Z.dispatch((0,A.N0)({walletId:e,label:t.trim()}))}setWalletPFP(e){v.Z.dispatch((0,A.ok)(e))}renameRootWallet(e,t){v.Z.dispatch((0,A._T)({walletId:e,label:t.trim()}))}createContact(e){v.Z.dispatch((0,A.SF)(e))}updateContact(e){v.Z.dispatch((0,A.HV)(e))}deleteContact(e){v.Z.dispatch((0,A.nt)(e))}isNewAddress(e,t){const s=ae(this,H).chains.getChainControllerById(t).getType()===o.J.Evm,a=v.Z.getState().wallets.contacts,l=null==e?void 0:e.toLowerCase();return!a.some((e=>e.chainList.filter((e=>e.chainId===t||s&&e.chainId===r.yp.Ethereum)).some((e=>e.addressList.some((e=>{var t;return(null==(t=e.address)?void 0:t.toLowerCase())===l}))))))}addInitialWallet(e){return oe(this,null,(function*(){try{if(v.Z.dispatch((0,_.Xt)({loading:!0})),ae(this,H).removeRootWallets(),!ae(this,H).masterKeys.masterSeed)throw(0,c.t)("app:controller_errors.seed_phrase_not_found");yield this.createKeystore({password:ae(this,H).masterKeys.masterPassword,seedOrPK:ae(this,H).masterKeys.masterSeed}),ae(this,H).masterKeys.clearTemporaryPhrase(),yield ae(this,H).populateWalletData(0,ae(this,H).chains.getAllChainNetworkIds()),yield ae(this,H).setOnBoarding(!1)}catch(e){throw e}finally{v.Z.dispatch((0,_.Xt)({loading:!1}))}this.addKeystoreWallet(e)}))}addPkWallet(e,t){return oe(this,null,(function*(){try{v.Z.dispatch((0,_.Xt)({loading:!0}));const{wallets:s}=v.Z.getState().wallets,a=ae(this,H).chains.getChainControllerById(t.nspk.chain),l=a.getAddress({pk:t.nspk.value.pk});if(Object.keys(s).some((e=>{var a;return(null==(a=s[e].chainData[t.nspk.chain])?void 0:a.address)===l.address})))throw Z.Z.info({msg:"PK address has been already imported!",address:l.address}),(0,c.t)("app:controller_errors.pk_already_imported");this.initTempWallet(k.WalletType.PkKeystore,t.nspk.chain),yield this.createKeystore({password:ae(this,H).masterKeys.masterPassword,seedOrPK:t});const i=ae(this,$).walletInfo.data;let r;if(ae(this,$).id=i.keystore.id,i.rootWalletId=ae(this,$).id,ae(this,$).rootLabel=e,Z.Z.info({msg:"addresses from nspk",addresses:l}),ae(this,$).label||(ae(this,$).label=e),a.getType()===o.J.Evm){const e=ae(this,H).chains.getChainControllersByType(o.J.Evm);r=e.reduce(((e,t)=>(e[t.getId()]=ee(Q({},re),{address:l.address,chainId:t.getId()}),e)),{})}else if(a.getType()===o.J.Cosmos)if(a.support(o.B.NativeSupport)){const e=ae(this,H).chains.getChainControllersByType(o.J.Cosmos).filter((e=>e.support(o.B.NativeSupport))),t=Buffer.from(l.pubKey.buffer).toString("hex");r=e.reduce(((e,s)=>(e[s.getId()]=ee(Q({},re),{address:s.selfCast().generateIBCChainAddress(t),pubKey:t,chainId:s.getId()}),e)),{})}else r={[t.nspk.chain]:ee(Q({},re),{address:l.address,pubKey:l.pubKey&&Buffer.from(l.pubKey.buffer).toString("hex"),chainId:t.nspk.chain})};else r={[t.nspk.chain]:ee(Q({},re),{address:l.address,pubKey:l.pubKey&&Buffer.from(l.pubKey.buffer).toString("hex"),chainId:t.nspk.chain})};ae(this,$).chainData=Q(Q({},ae(this,$).chainData),r),ae(this,$).imported=!0,v.Z.dispatch((0,A.ry)({active:!0,wallet:ae(this,$)})),v.Z.dispatch((0,C.T8)({walletId:ae(this,$).id})),ie(this,J,n.ZN.None),Object.keys(ae(this,$).chainData).forEach((e=>{const t=ae(this,H).chains.getChainControllerById(e).getConfig().defaultTokens;t&&t.forEach((t=>{const s=ae(this,H).assets.getAssetToken(e,t.symbol,t.address);s&&ae(this,H).assets.addTokenToWallet(e,s,ae(this,$).id)}))}))}catch(e){throw Z.Z.error(e),(0,c.t)("app:swap.errors.failed_to_add_private_key",{error:e})}finally{v.Z.dispatch((0,_.Xt)({loading:!1}))}}))}addSubAccountByPhraseOrPK(e){return oe(this,arguments,(function*({seedOrPK:e,password:t,keystoreId:s,imported:a}){const{masterKeys:l}=ae(this,H);return!l.checkDuplicateAccount(e)&&(yield this.createKeystore({seedOrPK:e,password:t,keystoreId:s,imported:a}),ie(this,J,n.ZN.SubAccount),!0)}))}selectWallet(e){v.Z.dispatch((0,A.sm)({walletId:e})),ae(this,H).assets.subscribePriceUpdates(),ae(this,H).assets.fetchUserLPTokens()}removeWallet(e){const{wallets:t}=v.Z.getState().wallets;if(ae(this,H).masterKeys.removeAccountKey(e),ae(this,H).dapps.removeWallet(e),v.Z.dispatch((0,A.h1)({walletId:e})),1===Object.keys(t).length)this.init(!0);else{const e=Object.keys(v.Z.getState().wallets)[0];ie(this,$,t[e]),(0,A.sm)({walletId:e})}}getSubAccounts(e){const{wallets:t}=v.Z.getState().wallets;return Object.values(t).filter((t=>t.walletInfo.data.rootWalletId===e))}removeRootWallet(e){if(e===ae(this,H).masterKeys.masterKeystore.masterKey.id)throw(0,c.t)("app:controller_errors.cant_delete_this_wallet");const t=this.getWalletsByRootID(e).map((e=>e.id));ae(this,H).masterKeys.removeAccountKeys(t),ae(this,H).dapps.removeWallets(t),(0,b.dC)((()=>{w()(t,(e=>{v.Z.dispatch((0,A.h1)({walletId:e}))}))}));const{wallets:s}=v.Z.getState().wallets;if(1===Object.keys(s).length)this.init(!0);else{const e=Object.keys(s)[0];ie(this,$,s[e]),(0,A.sm)({walletId:e})}}selectChain(e,t=!1){v.Z.dispatch((0,A.Ib)({chainId:e,applyToAllAccounts:t}))}copyAssetsToWallet(e,t,s){v.Z.dispatch((0,A.L$)({walletIds:e,network:t,assets:s}))}autoTimeOutLock(){const{autoLock:e}=v.Z.getState().settings;-1!==ae(this,M)&&clearTimeout(ae(this,M)),ae(this,H).masterKeys.masterPassword&&e&&ie(this,M,setTimeout((()=>{ae(this,H).masterKeys.lockMasterKey()}),3e5))}killAutoTimerLock(){-1!==ae(this,M)&&(clearTimeout(ae(this,M)),ie(this,M,-1))}setFilterOptions(e){v.Z.dispatch((0,A.OM)({filterOptions:e}))}getAllNonHDAccounts(){var e;const{wallets:t}=null==(e=v.Z.getState())?void 0:e.wallets,s=Object.keys(t).map((e=>t[e])).filter((e=>!this.isHDWallet(e))),a=[];return s.map((e=>{const s=t[e.id].walletInfo.data;a.push({walletId:e.id,walletIndex:s.walletIndex,label:t[e.id].label})})),g()(a,"walletIndex","asc")}getAllWalletAccounts(){var e;const{wallets:t}=null==(e=v.Z.getState())?void 0:e.wallets;return Object.values(t)}doesWalletHaveChainType(e,t){var s;const{wallets:a}=null==(s=v.Z.getState())?void 0:s.wallets,l=a[t],i=l.chainData,o=Object.keys(i).some((t=>ae(this,H).chains.getChainControllerById(t).getType()===e));return l.walletInfo.type===k.WalletType.Keystore||o}}E=new WeakMap,R=new WeakMap,F=new WeakMap,M=new WeakMap,$=new WeakMap,J=new WeakMap,H=new WeakMap,te(de,"getLabel",((e,t)=>{var s,a;const{wallets:l}=(null==(s=v.Z.getState())?void 0:s.wallets)||{};return(null==(a=Object.values(l).find((s=>{var a;return!!s.chainData[t]&&(null==(a=s.chainData[t].address)?void 0:a.toUpperCase())===(null==e?void 0:e.toUpperCase())})))?void 0:a.label)||""}));const ce=de;a()}catch(e){a(e)}}))},972335:(e,t,s)=>{s.d(t,{J:()=>i});const a=s(357786).Ps`
  query Routing($routeId: String!) {
    routingV2 {
      tradesV2(routeId: $routeId) {
        transaction {
          unsignedStdTx
          txType
          tradeId
          signerId
          routeId
          recipient
          receiverId
          memo
          gasPrice
          gasLimit
          feeRate
          data
          chain
          amount
          actions
        }
        tradeRoute {
          tradeType
          priceRateUsdAssetIn
          priceRateUsdAssetOut
          fee {
            feeRateTransaction
            swapFee
            inboundFeeAsset
            inboundFeeDollar
            networkFeeAsset
            networkFeeDollar
          }
          reward {
            amount
            amountUsd
            asset {
              id
              listProviders
              asset {
                chain
                contract
                decimals
                symbol
                image
                id
              }
            }
          }
          assetOut {
            listProviders
            asset {
              symbol
              contract
              id
              name
              image
              chain
              price {
                amount
                scalingFactor
              }
            }
          }
          minAmountReceived
          amountOut
          amountIn
          provider {
            id
            name
            time
            icon
          }
          assetIn {
            listProviders
            asset {
              contract
              symbol
              id
              name
              image
              chain
              price {
                amount
                scalingFactor
              }
            }
          }
        }
        status {
          txHash
          status
        }
      }
    }
  }
`;var l=s(459457);const i=e=>l.Lp.query({query:a,fetchPolicy:"no-cache",variables:{routeId:e}})}}]);
//# sourceMappingURL=6106.bundle.js.map