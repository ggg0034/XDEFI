!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ee0405d8-45db-4061-91fb-300918a9e2f9",e._sentryDebugIdIdentifier="sentry-dbid-ee0405d8-45db-4061-91fb-300918a9e2f9")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"28.2.2"},(self.webpackChunkxdefi_extension=self.webpackChunkxdefi_extension||[]).push([[2391],{33961:(e,t,n)=>{n.a(e,(async(e,t)=>{try{n(785893);var i=n(818117),r=n(308787),o=(n(363119),n(876777)),a=(n(814302),n(230811),e([r]));r=(a.then?(await a)():a)[0];(0,i.ZP)(r.FlexBox).attrs({alignItems:"center",justifyContent:"center"})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${o.wL.solidBlack};
  opacity: 0.9;
  z-index: 9999;
  padding: 16px;
  text-align: center;
`;t()}catch(e){t(e)}}))},343634:(e,t,n)=>{n.a(e,(async(e,t)=>{try{n(785893);var i=n(308787),r=n(818117),o=n(281672),a=(n(25022),n(346539),n(561277),n(165852),n(230811),n(204147),e([i,o]));[i,o]=a.then?(await a)():a;const s=r.iv`
  max-width: 352px;
  max-height: 198px;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  margin: 0 16px;
`;r.ZP.img`
  ${s}
`,r.ZP.video.attrs({controlsList:"nodownload",autoPlay:!1,controls:!0,playsInline:!0})`
  ${s}
`,(0,r.ZP)(i.FlexBox).attrs({alignItems:"center",justifyContent:"center",flexDirection:"row"})`
  margin-bottom: 16px;
`,(0,r.ZP)(i.FlexBox).attrs({alignItems:"flex-start",justifyContent:"center"})`
  padding: 16px;
`,(0,r.ZP)(i.FlexBox)`
  width: 100%;
`,(0,r.ZP)(i.FlexBox).attrs({justifyContent:"flex-start"})`
  width: 100%;
`,r.ZP.div`
  max-width: 355px;
  div {
    text-decoration: underline;
    :hover {
      cursor: pointer;
    }
  }
`;t()}catch(e){t(e)}}))},919020:(e,t,n)=>{n.a(e,(async(e,t)=>{try{var i=n(785893),r=n(667294),o=n(308787),a=n(561277),s=n(458038),l=n(412252),d=n(650511),c=n(230811),x=n(518949),h=n(299246),p=n(834392),f=n(703945),u=n(324426),b=e([o,x,f,u]);[o,x,f,u]=b.then?(await b)():b;const m=({secondary:e=!1,fiat:t,label:n,selectedToken:r,onClickSelection:b,setAmount:m,amount:y,disabled:j=!1,balance:w,chainLabel:v,handleMax:g,autoFocus:C})=>{const{t:I}=(0,c.$G)("app"),{currency:P}=(0,x.j)();return(0,i.jsx)(u.W2,{secondary:e,children:(0,i.jsxs)(o.FlexBox,{justifyContent:"flex-start",alignItems:"flex-start",height:"100%",width:"100%",children:[(0,i.jsxs)(o.FlexBox,{justifyContent:"space-between",alignItems:"center",flexDirection:"row",width:"100%",pb:4,children:[(0,i.jsx)(u.qu,{children:(0,i.jsx)(l.Z,{children:n})}),(null==w?void 0:w.value)&&g&&(0,i.jsx)("div",{onClick:g,"data-testid":"maxBtn",children:(0,i.jsx)(u.xR,{secondary:e,children:(0,i.jsx)(s.Z,{children:`${(0,h.pF)(w.value,p.DF,{trimTrailingZero:!0})} ${w.symbol}`})})})]}),(0,i.jsxs)(o.FlexBox,{justifyContent:"space-between",alignItems:"center",flexDirection:"row",width:"100%",children:[(0,i.jsx)("div",{onClick:b,"data-testid":`${n}ChooseTokenDropdown`,children:(0,i.jsxs)(u.Y1,{children:[(null==r?void 0:r.symbol)?(0,i.jsxs)(u.sY,{children:[(0,i.jsx)(u.Y_,{symbol:null==r?void 0:r.symbol,icons:[r.image]}),(0,i.jsxs)(u.ex,{children:[(0,i.jsx)(u.A$,{children:(0,i.jsx)(a.Z,{"data-testid":"tokenCode",children:r.symbol})}),(0,i.jsx)(d.Z,{"data-testid":"tokenChain",children:v||""})]})]}):(0,i.jsx)(u.hP,{children:(0,i.jsx)(a.Z,{children:I("swap.choose_token")})}),(0,i.jsx)(u.Tt,{})]})}),(0,i.jsx)(f.Z,{secondary:e,autoFocus:C,amount:y,setAmount:m,disabled:j,max:null==w?void 0:w.value,dataTestId:`${n}Input`})]}),(0,i.jsx)(o.FlexBox,{flexDirection:"row",justifyContent:"flex-end",alignItems:"center",width:"100%",children:t?(0,i.jsx)(u.MI,{children:(0,i.jsx)(d.Z,{children:t})}):(0,i.jsx)(u.MI,{children:(0,i.jsxs)(d.Z,{children:[P.symbol,"--"]})})})]})})};(0,r.memo)(m);t()}catch(e){t(e)}}))},124207:(e,t,n)=>{n.a(e,(async(e,t)=>{try{var i=n(785893),r=n(561277),o=n(650511),a=n(412252),s=n(667294),l=n(308787),d=n(281672),c=n(772633),x=e([l,d,c]);[l,d,c]=x.then?(await x)():x;const h=({secondary:e=!1,label:t="",symbol:n,image:x,amount:h,chainId:p,fiat:f,dataTestId:u,round:b=!1})=>{const m=(0,d.fU)(),y=(0,s.useMemo)((()=>{if(p)return m.getChainControllerById(p)}),[m,p]);return(0,i.jsx)(c.W2,{secondary:e,$round:b,"data-testid":u,children:(0,i.jsxs)(l.FlexBox,{justifyContent:"flex-start",alignItems:"flex-start",height:"100%",width:"100%",children:[(0,i.jsx)(l.FlexBox,{justifyContent:"space-between",alignItems:"center",flexDirection:"row",width:"100%",children:(0,i.jsx)(a.Z,{dataTestId:"tokenLabel",children:t})}),(0,i.jsxs)(l.FlexBox,{justifyContent:"space-between",alignItems:"center",flexDirection:"row",width:"100%",children:[(0,i.jsx)(c.Y1,{children:(0,i.jsxs)(c.sY,{children:[(0,i.jsx)(c.Y_,{symbol:n,icons:[x]}),(0,i.jsxs)(c.ex,{children:[(0,i.jsx)(c.A$,{children:(0,i.jsx)(r.Z,{dataTestId:"tokenCode",children:n})}),y&&(0,i.jsx)(o.Z,{dataTestId:"tokenChain",children:y.getConfig().shortName})]})]})}),(0,i.jsxs)(l.FlexBox,{alignItems:"flex-end",children:[(0,i.jsx)(r.Z,{dataTestId:"tokenAmount",children:h}),f&&(0,i.jsx)(o.Z,{dataTestId:"fiatAmount",children:`~ ${f}`})]})]})]})})};(0,s.memo)(h);t()}catch(e){t(e)}}))},623449:(e,t,n)=>{n.a(e,(async(e,t)=>{try{n(785893),n(847001);var i=n(308787),r=(n(561277),n(12127),n(876777),n(108363),n(973949),n(165852),n(638946),n(346539),n(230811),n(43701)),o=e([i,r]);[i,r]=o.then?(await o)():o;t()}catch(e){t(e)}}))},179060:(e,t,n)=>{n.a(e,(async(e,t)=>{try{var i=n(623449),r=e([i]);i=(r.then?(await r)():r)[0],t()}catch(e){t(e)}}))},677914:(e,t,n)=>{var i=n(785893),r=n(667294),o=n(876777),a=n(327754),s=Object.defineProperty,l=Object.defineProperties,d=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const f=r.forwardRef((function(e,t){const n=(0,a.F)({[o.$T.Dark]:o.wL.darkGrey}),r=e.color||n;return(0,i.jsx)("svg",(s=((e,t)=>{for(var n in t||(t={}))x.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))h.call(t,n)&&p(e,n,t[n]);return e})({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),l(s,d({children:(0,i.jsx)("path",{d:"M6.00098 13.9991L9.81608 8.27647C9.92804 8.10852 9.92804 7.88971 9.81608 7.72176L6.00098 1.99911",stroke:r,strokeLinecap:"round"})}))));var s}));r.memo(f)},973949:(e,t,n)=>{var i=n(785893),r=n(667294),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,x=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const h=r.forwardRef((function(e,t){const n=e.color;return(0,i.jsx)("svg",(r=((e,t)=>{for(var n in t||(t={}))d.call(t,n)&&x(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&x(e,n,t[n]);return e})({width:"17",height:"18",viewBox:"0 0 17 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),a(r,s({children:(0,i.jsx)("path",{fill:n||"#9ECAFF",fillRule:"evenodd",clipRule:"evenodd",d:"M13.625 5.50002C15.0748 5.50002 16.2501 4.32476 16.2501 2.87501C16.2501 1.42526 15.0748 0.25 13.625 0.25C12.1753 0.25 11 1.42526 11 2.87501C11 3.13614 11.0382 3.38837 11.1092 3.62643L5.07734 7.24553C4.59682 6.71126 3.90015 6.37529 3.12501 6.37529C1.67526 6.37529 0.5 7.55054 0.5 9.0003C0.5 10.45 1.67526 11.6253 3.12501 11.6253C3.90032 11.6253 4.59713 11.2892 5.07766 10.7547L11.1092 14.3736C11.0382 14.6117 11 14.8639 11 15.125C11 16.5748 12.1753 17.75 13.625 17.75C15.0748 17.75 16.2501 16.5748 16.2501 15.125C16.2501 13.6753 15.0748 12.5 13.625 12.5C12.7951 12.5 12.0552 12.8851 11.5742 13.4864L5.59268 9.89752C5.69449 9.61759 5.75002 9.31542 5.75002 9.0003C5.75002 8.685 5.69443 8.38268 5.59252 8.10261L11.5742 4.51362C12.0552 5.1149 12.7951 5.50002 13.625 5.50002Z"})}))));var r}));r.memo(h)},976829:(e,t,n)=>{n.d(t,{BM:()=>w,KM:()=>y,kq:()=>j,zx:()=>m});var i=n(785893),r=n(818117),o=n(818005),a=n(671702),s=Object.defineProperty,l=Object.defineProperties,d=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))x.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))h.call(t,n)&&p(e,n,t[n]);return e},u=(e,t)=>l(e,d(t));const b=r.ZP.button`
  ${({theme:e})=>e.components.button.initial.initial}
  ${({variant:e,theme:t})=>t.components.button[e].initial}
  ${({fullWidth:e})=>e&&r.iv`
      width: 100%;
    `}
  :hover {
    ${({theme:e})=>e.components.button.initial.hovered}
    ${({variant:e,theme:t})=>t.components.button[e].hovered}
  }

  :focus {
    ${({theme:e})=>e.components.button.initial.focused}
    ${({variant:e,theme:t})=>t.components.button[e].focused}
  }

  :active {
    ${({theme:e})=>e.components.button.initial.active}
    ${({variant:e,theme:t})=>t.components.button[e].active}
  }

  :disabled {
    ${({theme:e})=>e.components.button.initial.disabled}
    ${({variant:e,theme:t})=>t.components.button[e].disabled}
    pointer-events: none;
  }

  ${o.Dh}
`,m=e=>{var t=e,{variant:n="primary",children:r,loading:o,StartIcon:s,dataTestId:l}=t,d=((e,t)=>{var n={};for(var i in e)x.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&c)for(var i of c(e))t.indexOf(i)<0&&h.call(e,i)&&(n[i]=e[i]);return n})(t,["variant","children","loading","StartIcon","dataTestId"]);return(0,i.jsxs)(b,u(f({},d),{variant:n,"data-testid":l,children:[s&&(0,i.jsx)(s,{width:16,height:16,color:"currentColor"}),o?(0,i.jsx)(a.aN,{}):r]}))},y=e=>(0,i.jsx)(m,u(f({},e),{variant:"primary"})),j=e=>(0,i.jsx)(m,u(f({},e),{variant:"secondary"})),w=e=>(0,i.jsx)(m,u(f({},e),{variant:"warning"}))},537896:(e,t,n)=>{n.a(e,(async(e,t)=>{try{var i=n(124207),r=e([i]);i=(r.then?(await r)():r)[0],t()}catch(e){t(e)}}))},43701:(e,t,n)=>{n.a(e,(async(e,t)=>{try{var i=n(818117),r=n(308787),o=e([r]);r=(o.then?(await o)():o)[0];(0,i.ZP)(r.FlexBox)`
  color: ${({theme:{palette:e}})=>e.label.default};
  padding: 16px 16px 24px 16px;
`,i.ZP.a`
  text-decoration: none;

  div {
    display: inline !important;
    margin-left: 5px;
  }
`,i.ZP.p`
  margin: 0;
  padding: 0;
`,(0,i.ZP)(r.FlexBox)`
  margin-bottom: 4px;
`,i.ZP.div`
  padding-bottom: 24px;
`,(0,i.ZP)(r.FlexBox)`
  margin-right: 5px;
`,i.ZP.div`
  display: inline;
`;t()}catch(e){t(e)}}))}}]);
//# sourceMappingURL=2391.bundle.js.map