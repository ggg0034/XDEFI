!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ff1c09b4-acf4-49d4-8211-a79ecd41fe20",e._sentryDebugIdIdentifier="sentry-dbid-ff1c09b4-acf4-49d4-8211-a79ecd41fe20")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"28.2.2"},(self.webpackChunkxdefi_extension=self.webpackChunkxdefi_extension||[]).push([[3096],{353694:(e,n,r)=>{function a(e,n){return Object.keys(n).reduce((function(r,a){a.startsWith(e)&&(r[a.substr(e.length)]=n[a]);return r}),{})}r.r(n),r.d(n,{queryString:()=>t});var i=r(667475),s=r(555469);function t(e,n){var r=document.createElement("a");r.href=n;var t=r.search.slice(1).split("&").reduce((function(e,n){var r=n.split("="),a=r[0],s=r[1];return e[a]=(0,i.a)(s),e}),{}),d=[],f=t.ajs_uid,u=t.ajs_event,o=t.ajs_aid,l=(0,s.PO)(e.options.useQueryString)?e.options.useQueryString:{},_=l.aid,c=void 0===_?/.+/:_,y=l.uid,b=void 0===y?/.+/:y;if(o){var p=Array.isArray(t.ajs_aid)?t.ajs_aid[0]:t.ajs_aid;c.test(p)&&e.setAnonymousId(p)}if(f){var v=Array.isArray(t.ajs_uid)?t.ajs_uid[0]:t.ajs_uid;if(b.test(v)){var j=a("ajs_trait_",t);d.push(e.identify(v,j))}}if(u){var g=Array.isArray(t.ajs_event)?t.ajs_event[0]:t.ajs_event,w=a("ajs_prop_",t);d.push(e.track(g,w))}return Promise.all(d)}}}]);
//# sourceMappingURL=queryString.bundle.js.map