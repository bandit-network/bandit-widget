"use strict";(self.webpackChunkbandit_core_cra=self.webpackChunkbandit_core_cra||[]).push([[489],{30972:function(e,n,t){t.d(n,{U:function(){return p}});var r=t(1413),i=t(45987),a=t(76662),o=t(83039),s=t(17872),c=t(69084),u=t(19477),l=t(66923),d=t(36992),f=t(72791),m=t(80184),v=["children","reduceMotion"],h=["htmlProps","descendants"],p=(0,s.G)((function(e,n){var t=e.children,s=e.reduceMotion,p=(0,i.Z)(e,v),g=(0,c.jC)("Accordion",p),x=(0,u.Lr)(p),b=(0,a.As)(x),y=b.htmlProps,Z=b.descendants,N=(0,i.Z)(b,h),I=(0,f.useMemo)((function(){return(0,r.Z)((0,r.Z)({},N),{},{reduceMotion:!!s})}),[N,s]);return(0,m.jsx)(o.di,{value:Z,children:(0,m.jsx)(a.a2,{value:I,children:(0,m.jsx)(o.lh,{value:g,children:(0,m.jsx)(l.m.div,(0,r.Z)((0,r.Z)({ref:n},y),{},{className:(0,d.cx)("chakra-accordion",p.className),__css:g.root,children:t}))})})})}));p.displayName="Accordion"},91352:function(e,n,t){t.d(n,{K:function(){return u}});var r=t(1413),i=t(83039),a=t(17872),o=t(66923),s=t(36992),c=t(80184),u=(0,a.G)((function(e,n){var t=(0,(0,i.bB)().getButtonProps)(e,n),a=(0,i.YO)(),u=(0,r.Z)({display:"flex",alignItems:"center",width:"100%",outline:0},a.button);return(0,c.jsx)(o.m.button,(0,r.Z)((0,r.Z)({},t),{},{className:(0,s.cx)("chakra-accordion__button",e.className),__css:u}))}));u.displayName="AccordionButton"},41016:function(e,n,t){t.d(n,{Q:function(){return m}});var r=t(1413),i=t(45987),a=t(76662),o=t(83039),s=t(17872),c=t(66923),u=t(36992),l=t(72791),d=t(80184),f=["htmlProps"],m=(0,s.G)((function(e,n){var t=e.children,s=e.className,m=(0,a.Zl)(e),v=m.htmlProps,h=(0,i.Z)(m,f),p=(0,o.YO)(),g=(0,r.Z)((0,r.Z)({},p.container),{},{overflowAnchor:"none"}),x=(0,l.useMemo)((function(){return h}),[h]);return(0,d.jsx)(o.ec,{value:x,children:(0,d.jsx)(c.m.div,(0,r.Z)((0,r.Z)({ref:n},v),{},{className:(0,u.cx)("chakra-accordion__item",s),__css:g,children:"function"===typeof t?t({isExpanded:!!h.isOpen,isDisabled:!!h.isDisabled}):t}))})}));m.displayName="AccordionItem"},76662:function(e,n,t){t.d(n,{a2:function(){return g},As:function(){return v},EF:function(){return x},Zl:function(){return b}});var r=t(1413),i=t(29439),a=t(45987),o=t(83039),s=t(9886),c=t(72791),u=t(86367);var l=t(14591),d=t(36992),f=["onChange","defaultIndex","index","allowMultiple","allowToggle"],m=["isDisabled","isFocusable","id"];function v(e){var n=e.onChange,t=e.defaultIndex,r=e.index,s=e.allowMultiple,l=e.allowToggle,m=(0,a.Z)(e,f);!function(e){var n=e.index||e.defaultIndex,t=null!=n&&!Array.isArray(n)&&e.allowMultiple;(0,d.ZK)({condition:!!t,message:"If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ".concat(typeof n,",")})}(e),function(e){(0,d.ZK)({condition:!(!e.allowMultiple||!e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}(e);var v=(0,o._v)(),h=(0,c.useState)(-1),p=(0,i.Z)(h,2),g=p[0],x=p[1];(0,c.useEffect)((function(){return function(){x(-1)}}),[]);var b=function(e){var n=e.value,t=e.defaultValue,r=e.onChange,a=e.shouldUpdate,o=void 0===a?function(e,n){return e!==n}:a,s=(0,u.W)(r),l=(0,u.W)(o),d=(0,c.useState)(t),f=(0,i.Z)(d,2),m=f[0],v=f[1],h=void 0!==n,p=h?n:m,g=(0,u.W)((function(e){var n="function"===typeof e?e(p):e;l(p,n)&&(h||v(n),s(n))}),[h,s,p,l]);return[p,g]}({value:r,defaultValue:function(){return s?null!=t?t:[]:null!=t?t:-1},onChange:n}),y=(0,i.Z)(b,2),Z=y[0],N=y[1];return{index:Z,setIndex:N,htmlProps:m,getAccordionItemProps:function(e){var n=!1;null!==e&&(n=Array.isArray(Z)?Z.includes(e):Z===e);return{isOpen:n,onChange:function(n){if(null!==e)if(s&&Array.isArray(Z)){var t=n?Z.concat(e):Z.filter((function(n){return n!==e}));N(t)}else n?N(e):l&&N(-1)}}},focusedIndex:g,setFocusedIndex:x,descendants:v}}var h=(0,s.k)({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"}),p=(0,i.Z)(h,2),g=p[0],x=p[1];function b(e){var n=e.isDisabled,t=e.isFocusable,i=e.id,s=(0,a.Z)(e,m),u=x(),f=u.getAccordionItemProps,v=u.setFocusedIndex,h=(0,c.useRef)(null),p=(0,c.useId)(),g=null!=i?i:p,b="accordion-button-".concat(g),y="accordion-panel-".concat(g);!function(e){(0,d.ZK)({condition:!(!e.isFocusable||e.isDisabled),message:"Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.\n    "})}(e);var Z=(0,o.mc)({disabled:n&&!t}),N=Z.register,I=Z.index,k=Z.descendants,_=f(-1===I?null:I),j=_.isOpen,C=_.onChange;!function(e){(0,d.ZK)({condition:e.isOpen&&!!e.isDisabled,message:"Cannot open a disabled accordion item"})}({isOpen:j,isDisabled:n});var E=(0,c.useCallback)((function(){null==C||C(!j),v(I)}),[I,v,j,C]),w=(0,c.useCallback)((function(e){var n={ArrowDown:function(){var e=k.nextEnabled(I);null==e||e.node.focus()},ArrowUp:function(){var e=k.prevEnabled(I);null==e||e.node.focus()},Home:function(){var e=k.firstEnabled();null==e||e.node.focus()},End:function(){var e=k.lastEnabled();null==e||e.node.focus()}}[e.key];n&&(e.preventDefault(),n(e))}),[k,I]),O=(0,c.useCallback)((function(){v(I)}),[v,I]),S=(0,c.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},e),{},{type:"button",ref:(0,l.lq)(N,h,t),id:b,disabled:!!n,"aria-expanded":!!j,"aria-controls":y,onClick:(0,d.v0)(e.onClick,E),onFocus:(0,d.v0)(e.onFocus,O),onKeyDown:(0,d.v0)(e.onKeyDown,w)})}),[b,n,j,E,O,w,y,N]),T=(0,c.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},e),{},{ref:n,role:"region",id:y,"aria-labelledby":b,hidden:!j})}),[b,j,y]);return{isOpen:j,isDisabled:n,isFocusable:t,onOpen:function(){null==C||C(!0)},onClose:function(){null==C||C(!1)},getButtonProps:S,getPanelProps:T,htmlProps:s}}},83039:function(e,n,t){t.d(n,{di:function(){return S},ec:function(){return C},lh:function(){return I},mc:function(){return A},_v:function(){return T},bB:function(){return E},YO:function(){return k}});var r=t(29439),i=t(1413),a=t(43144),o=t(15671),s=t(72791),c=Object.defineProperty,u=function(e,n,t){return function(e,n,t){n in e?c(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t}(e,"symbol"!==typeof n?n+"":n,t),t};function l(e){return e.sort((function(e,n){var t=e.compareDocumentPosition(n);if(t&Node.DOCUMENT_POSITION_FOLLOWING||t&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(t&Node.DOCUMENT_POSITION_PRECEDING||t&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0}))}function d(e,n,t){var r=e+1;return t&&r>=n&&(r=0),r}function f(e,n,t){var r=e-1;return t&&r<0&&(r=n),r}var m="undefined"!==typeof window?s.useLayoutEffect:s.useEffect,v=(0,a.Z)((function e(){var n=this;(0,o.Z)(this,e),u(this,"descendants",new Map),u(this,"register",(function(e){var t;if(null!=e)return"object"==typeof(t=e)&&"nodeType"in t&&t.nodeType===Node.ELEMENT_NODE?n.registerNode(e):function(t){n.registerNode(t,e)}})),u(this,"unregister",(function(e){n.descendants.delete(e);var t=l(Array.from(n.descendants.keys()));n.assignIndex(t)})),u(this,"destroy",(function(){n.descendants.clear()})),u(this,"assignIndex",(function(e){n.descendants.forEach((function(n){var t=e.indexOf(n.node);n.index=t,n.node.dataset.index=n.index.toString()}))})),u(this,"count",(function(){return n.descendants.size})),u(this,"enabledCount",(function(){return n.enabledValues().length})),u(this,"values",(function(){return Array.from(n.descendants.values()).sort((function(e,n){return e.index-n.index}))})),u(this,"enabledValues",(function(){return n.values().filter((function(e){return!e.disabled}))})),u(this,"item",(function(e){if(0!==n.count())return n.values()[e]})),u(this,"enabledItem",(function(e){if(0!==n.enabledCount())return n.enabledValues()[e]})),u(this,"first",(function(){return n.item(0)})),u(this,"firstEnabled",(function(){return n.enabledItem(0)})),u(this,"last",(function(){return n.item(n.descendants.size-1)})),u(this,"lastEnabled",(function(){var e=n.enabledValues().length-1;return n.enabledItem(e)})),u(this,"indexOf",(function(e){var t,r;return e&&null!=(r=null==(t=n.descendants.get(e))?void 0:t.index)?r:-1})),u(this,"enabledIndexOf",(function(e){return null==e?-1:n.enabledValues().findIndex((function(n){return n.node.isSameNode(e)}))})),u(this,"next",(function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=d(e,n.count(),t);return n.item(r)})),u(this,"nextEnabled",(function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=n.item(e);if(r){var i=n.enabledIndexOf(r.node),a=d(i,n.enabledCount(),t);return n.enabledItem(a)}})),u(this,"prev",(function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=f(e,n.count()-1,t);return n.item(r)})),u(this,"prevEnabled",(function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=n.item(e);if(r){var i=n.enabledIndexOf(r.node),a=f(i,n.enabledCount()-1,t);return n.enabledItem(a)}})),u(this,"registerNode",(function(e,t){if(e&&!n.descendants.has(e)){var r=l(Array.from(n.descendants.keys()).concat(e));(null==t?void 0:t.disabled)&&(t.disabled=!!t.disabled);var a=(0,i.Z)({node:e,index:-1},t);n.descendants.set(e,a),n.assignIndex(r)}}))})),h=t(9886),p=t(14591);var g=(0,h.k)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),x=(0,r.Z)(g,2),b=x[0],y=x[1];var Z=(0,h.k)({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),N=(0,r.Z)(Z,2),I=N[0],k=N[1],_=(0,h.k)({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),j=(0,r.Z)(_,2),C=j[0],E=j[1],w=[b,function(){return y()},function(){return function(){var e=(0,s.useRef)(new v);return m((function(){return function(){return e.current.destroy()}})),e.current}()},function(e){return function(e){var n=y(),t=(0,s.useState)(-1),i=(0,r.Z)(t,2),a=i[0],o=i[1],c=(0,s.useRef)(null);m((function(){return function(){c.current&&n.unregister(c.current)}}),[]),m((function(){if(c.current){var e=Number(c.current.dataset.index);a==e||Number.isNaN(e)||o(e)}}));var u=e?n.register(e):n.register;return{descendants:n,index:a,enabledIndex:n.enabledIndexOf(c.current),register:(0,p.lq)(u,c)}}(e)}],O=(0,r.Z)(w,4),S=O[0],T=(O[1],O[2]),A=O[3]},26431:function(e,n,t){t.d(n,{H:function(){return Z}});var r=t(1413),i=t(45987),a=t(76662),o=t(83039),s=t(17872),c=t(66923),u=t(29439),l=t(33367),d=t(36992),f=t(34549),m=t(88663),v=t(72791),h=t(80184),p=["in","unmountOnExit","animateOpacity","startingHeight","endingHeight","style","className","transition","transitionEnd"],g={exit:{height:{duration:.2,ease:l.Lj.ease},opacity:{duration:.3,ease:l.Lj.ease}},enter:{height:{duration:.3,ease:l.Lj.ease},opacity:{duration:.4,ease:l.Lj.ease}}},x={exit:function(e){var n,t,i=e.animateOpacity,a=e.startingHeight,o=e.transition,s=e.transitionEnd,c=e.delay;return(0,r.Z)((0,r.Z)({},i&&{opacity:(t=a,null!=t&&parseInt(t.toString(),10)>0?1:0)}),{},{height:a,transitionEnd:null==s?void 0:s.exit,transition:null!=(n=null==o?void 0:o.exit)?n:l.p$.exit(g.exit,c)})},enter:function(e){var n,t=e.animateOpacity,i=e.endingHeight,a=e.transition,o=e.transitionEnd,s=e.delay;return(0,r.Z)((0,r.Z)({},t&&{opacity:1}),{},{height:i,transitionEnd:null==o?void 0:o.enter,transition:null!=(n=null==a?void 0:a.enter)?n:l.p$.enter(g.enter,s)})}},b=(0,v.forwardRef)((function(e,n){var t=e.in,a=e.unmountOnExit,o=e.animateOpacity,s=void 0===o||o,c=e.startingHeight,l=void 0===c?0:c,g=e.endingHeight,b=void 0===g?"auto":g,y=e.style,Z=e.className,N=e.transition,I=e.transitionEnd,k=(0,i.Z)(e,p),_=(0,v.useState)(!1),j=(0,u.Z)(_,2),C=j[0],E=j[1];(0,v.useEffect)((function(){var e=setTimeout((function(){E(!0)}));return function(){return clearTimeout(e)}}),[]),(0,d.ZK)({condition:Boolean(l>0&&a),message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});var w=parseFloat(l.toString())>0,O={startingHeight:l,endingHeight:b,animateOpacity:s,transition:C?N:{enter:{duration:0}},transitionEnd:{enter:null==I?void 0:I.enter,exit:a?null==I?void 0:I.exit:(0,r.Z)((0,r.Z)({},null==I?void 0:I.exit),{},{display:w?"block":"none"})}},S=!a||t,T=t||a?"enter":"exit";return(0,h.jsx)(f.M,{initial:!1,custom:O,children:S&&(0,h.jsx)(m.E.div,(0,r.Z)((0,r.Z)({ref:n},k),{},{className:(0,d.cx)("chakra-collapse",Z),style:(0,r.Z)({overflow:"hidden",display:"block"},y),custom:O,variants:x,initial:!!a&&"exit",animate:T,exit:"exit"}))})}));b.displayName="Collapse";var y=["className","motionProps"],Z=(0,s.G)((function(e,n){var t=e.className,s=e.motionProps,u=(0,i.Z)(e,y),l=(0,a.EF)().reduceMotion,f=(0,o.bB)(),m=f.getPanelProps,v=f.isOpen,p=m(u,n),g=(0,d.cx)("chakra-accordion__panel",t),x=(0,o.YO)();l||delete p.hidden;var Z=(0,h.jsx)(c.m.div,(0,r.Z)((0,r.Z)({},p),{},{__css:x.panel,className:g}));return l?Z:(0,h.jsx)(b,(0,r.Z)((0,r.Z)({in:v},s),{},{children:Z}))}));Z.displayName="AccordionPanel"},54224:function(e,n,t){t.d(n,{z:function(){return k}});var r=t(45987),i=t(1413),a=t(29439),o=t(72791);var s=(0,t(9886).k)({strict:!1,name:"ButtonGroupContext"}),c=(0,a.Z)(s,2),u=(c[0],c[1]),l=t(66923),d=t(36992),f=t(80184),m=["children","className"];function v(e){var n=e.children,t=e.className,a=(0,r.Z)(e,m),s=(0,o.isValidElement)(n)?(0,o.cloneElement)(n,{"aria-hidden":!0,focusable:!1}):n,c=(0,d.cx)("chakra-button__icon",t);return(0,f.jsx)(l.m.span,(0,i.Z)((0,i.Z)({display:"inline-flex",alignSelf:"center",flexShrink:0},a),{},{className:c,children:s}))}v.displayName="ButtonIcon";var h=t(4942),p=t(73204),g=["label","placement","spacing","children","className","__css"];function x(e){var n=e.label,t=e.placement,a=e.spacing,s=void 0===a?"0.5rem":a,c=e.children,u=void 0===c?(0,f.jsx)(p.$,{color:"currentColor",width:"1em",height:"1em"}):c,m=e.className,v=e.__css,x=(0,r.Z)(e,g),b=(0,d.cx)("chakra-button__spinner",m),y="start"===t?"marginEnd":"marginStart",Z=(0,o.useMemo)((function(){var e;return(0,i.Z)((e={display:"flex",alignItems:"center",position:n?"relative":"absolute"},(0,h.Z)(e,y,n?s:0),(0,h.Z)(e,"fontSize","1em"),(0,h.Z)(e,"lineHeight","normal"),e),v)}),[v,n,y,s]);return(0,f.jsx)(l.m.div,(0,i.Z)((0,i.Z)({className:b},x),{},{__css:Z,children:u}))}x.displayName="ButtonSpinner";var b=t(14591),y=t(17872),Z=t(69084),N=t(19477),I=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],k=(0,y.G)((function(e,n){var t=u(),s=(0,Z.mq)("Button",(0,i.Z)((0,i.Z)({},t),e)),c=(0,N.Lr)(e),m=c.isDisabled,v=void 0===m?null==t?void 0:t.isDisabled:m,h=c.isLoading,p=c.isActive,g=c.children,y=c.leftIcon,k=c.rightIcon,j=c.loadingText,C=c.iconSpacing,E=void 0===C?"0.5rem":C,w=c.type,O=c.spinner,S=c.spinnerPlacement,T=void 0===S?"start":S,A=c.className,D=c.as,P=(0,r.Z)(c,I),L=(0,o.useMemo)((function(){var e=(0,i.Z)((0,i.Z)({},null==s?void 0:s._focus),{},{zIndex:1});return(0,i.Z)((0,i.Z)({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},s),!!t&&{_focus:e})}),[s,t]),M=function(e){var n=(0,o.useState)(!e),t=(0,a.Z)(n,2),r=t[0],i=t[1];return{ref:(0,o.useCallback)((function(e){e&&i("BUTTON"===e.tagName)}),[]),type:r?"button":void 0}}(D),W=M.ref,B=M.type,G={rightIcon:k,leftIcon:y,iconSpacing:E,children:g};return(0,f.jsxs)(l.m.button,(0,i.Z)((0,i.Z)({ref:(0,b.qq)(n,W),as:D,type:null!=w?w:B,"data-active":(0,d.PB)(p),"data-loading":(0,d.PB)(h),__css:L,className:(0,d.cx)("chakra-button",A)},P),{},{disabled:v||h,children:[h&&"start"===T&&(0,f.jsx)(x,{className:"chakra-button__spinner--start",label:j,placement:"start",spacing:E,children:O}),h?j||(0,f.jsx)(l.m.span,{opacity:0,children:(0,f.jsx)(_,(0,i.Z)({},G))}):(0,f.jsx)(_,(0,i.Z)({},G)),h&&"end"===T&&(0,f.jsx)(x,{className:"chakra-button__spinner--end",label:j,placement:"end",spacing:E,children:O})]}))}));function _(e){var n=e.leftIcon,t=e.rightIcon,r=e.children,i=e.iconSpacing;return(0,f.jsxs)(f.Fragment,{children:[n&&(0,f.jsx)(v,{marginEnd:i,children:n}),r,t&&(0,f.jsx)(v,{marginStart:i,children:t})]})}k.displayName="Button"},75903:function(e,n,t){t.d(n,{I:function(){return c}});var r=t(1413),i=t(34363),a=t(17872),o=t(72791),s=t(80184);function c(e){var n=e.viewBox,t=void 0===n?"0 0 24 24":n,c=e.d,u=e.displayName,l=e.defaultProps,d=void 0===l?{}:l,f=o.Children.toArray(e.path),m=(0,a.G)((function(e,n){return(0,s.jsx)(i.J,(0,r.Z)((0,r.Z)((0,r.Z)({ref:n,viewBox:t},d),e),{},{children:f.length?f:(0,s.jsx)("path",{fill:"currentColor",d:c})}))}));return m.displayName=u,m}},29780:function(e,n,t){t.d(n,{h:function(){return a}});var r=t(75903),i=t(80184),a=(0,r.I)({displayName:"ExternalLinkIcon",path:(0,i.jsxs)("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",children:[(0,i.jsx)("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),(0,i.jsx)("path",{d:"M15 3h6v6"}),(0,i.jsx)("path",{d:"M10 14L21 3"})]})})},41822:function(e,n,t){t.d(n,{X:function(){return r}});var r=(0,t(75903).I)({d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",displayName:"ChevronRightIcon"})},80987:function(e,n,t){t.d(n,{w:function(){return r}});var r=(0,t(75903).I)({d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z",displayName:"ChevronLeftIcon"})},53790:function(e,n,t){t.d(n,{E:function(){return h}});var r=t(1413),i=t(45987),a=t(37762),o=t(17872),s=t(80184),c=["htmlWidth","htmlHeight","alt"],u=(0,o.G)((function(e,n){var t=e.htmlWidth,a=e.htmlHeight,o=e.alt,u=(0,i.Z)(e,c);return(0,s.jsx)("img",(0,r.Z)({width:t,height:a,ref:n,alt:o},u))}));u.displayName="NativeImage";var l=t(29439),d=t(29205),f=t(72791);var m=t(66923),v=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"];var h=(0,o.G)((function(e,n){var t=e.fallbackSrc,o=e.fallback,c=e.src,h=e.srcSet,p=e.align,g=e.fit,x=e.loading,b=e.ignoreFallback,y=e.crossOrigin,Z=e.fallbackStrategy,N=void 0===Z?"beforeLoadOrError":Z,I=e.referrerPolicy,k=(0,i.Z)(e,v),_=null!=x||b||!(void 0!==t||void 0!==o),j=function(e){var n=e.loading,t=e.src,r=e.srcSet,i=e.onLoad,a=e.onError,o=e.crossOrigin,s=e.sizes,c=e.ignoreFallback,u=(0,f.useState)("pending"),m=(0,l.Z)(u,2),v=m[0],h=m[1];(0,f.useEffect)((function(){h(t?"loading":"pending")}),[t]);var p=(0,f.useRef)(),g=(0,f.useCallback)((function(){if(t){x();var e=new Image;e.src=t,o&&(e.crossOrigin=o),r&&(e.srcset=r),s&&(e.sizes=s),n&&(e.loading=n),e.onload=function(e){x(),h("loaded"),null==i||i(e)},e.onerror=function(e){x(),h("failed"),null==a||a(e)},p.current=e}}),[t,o,r,s,i,a,n]),x=function(){p.current&&(p.current.onload=null,p.current.onerror=null,p.current=null)};return(0,d.G)((function(){if(!c)return"loading"===v&&g(),function(){x()}}),[v,g,c]),c?"loaded":v}((0,r.Z)((0,r.Z)({},e),{},{ignoreFallback:_})),C=function(e,n){return"loaded"!==e&&"beforeLoadOrError"===n||"failed"===e&&"onError"===n}(j,N),E=(0,r.Z)({ref:n,objectFit:g,objectPosition:p},_?k:function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Object.assign({},e),i=(0,a.Z)(t);try{for(i.s();!(n=i.n()).done;){var o=n.value;o in r&&delete r[o]}}catch(s){i.e(s)}finally{i.f()}return r}(k,["onError","onLoad"]));return C?o||(0,s.jsx)(m.m.img,(0,r.Z)({as:u,className:"chakra-image__placeholder",src:t},E)):(0,s.jsx)(m.m.img,(0,r.Z)({as:u,src:c,srcSet:h,crossOrigin:y,loading:x,referrerPolicy:I,className:"chakra-image"},E))}));h.displayName="Image"},44087:function(e,n,t){t.d(n,{xu:function(){return l}});var r=t(1413),i=t(45987),a=t(66923),o=t(17872),s=t(80184),c=["size","centerContent"],u=["size"],l=(0,a.m)("div");l.displayName="Box";var d=(0,o.G)((function(e,n){var t=e.size,a=e.centerContent,o=void 0===a||a,u=(0,i.Z)(e,c),d=o?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,s.jsx)(l,(0,r.Z)({ref:n,boxSize:t,__css:(0,r.Z)((0,r.Z)({},d),{},{flexShrink:0,flexGrow:0})},u))}));d.displayName="Square",(0,o.G)((function(e,n){var t=e.size,a=(0,i.Z)(e,u);return(0,s.jsx)(d,(0,r.Z)({size:t,ref:n,borderRadius:"9999px"},a))})).displayName="Circle"},71554:function(e,n,t){t.d(n,{U:function(){return p}});var r=t(1413),i=t(4942),a=t(45987),o=t(66923),s=t(80184),c=function(e){return(0,s.jsx)(o.m.div,(0,r.Z)((0,r.Z)({className:"chakra-stack__item"},e),{},{__css:(0,r.Z)({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))};c.displayName="StackItem";var u=t(36992);Object.freeze(["base","sm","md","lg","xl","2xl"]);function l(e,n){return Array.isArray(e)?e.map((function(e){return null===e?null:n(e)})):(0,u.Kn)(e)?Object.keys(e).reduce((function(t,r){return t[r]=n(e[r]),t}),{}):null!=e?n(e):null}var d="& > *:not(style) ~ *:not(style)";var f=t(17872),m=t(72791);var v=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],h=(0,f.G)((function(e,n){var t=e.isInline,f=e.direction,h=e.align,p=e.justify,g=e.spacing,x=void 0===g?"0.5rem":g,b=e.wrap,y=e.children,Z=e.divider,N=e.className,I=e.shouldWrapChildren,k=(0,a.Z)(e,v),_=t?"row":null!=f?f:"column",j=(0,m.useMemo)((function(){return function(e){var n=e.spacing,t=e.direction,r={column:{marginTop:n,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:n},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:n,marginStart:0},"row-reverse":{marginTop:0,marginEnd:n,marginBottom:0,marginStart:0}};return(0,i.Z)({flexDirection:t},d,l(t,(function(e){return r[e]})))}({direction:_,spacing:x})}),[_,x]),C=(0,m.useMemo)((function(){return function(e){var n=e.spacing,t=e.direction,r={column:{my:n,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:n,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:n,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:n,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":l(t,(function(e){return r[e]}))}}({spacing:x,direction:_})}),[x,_]),E=!!Z,w=!I&&!E,O=(0,m.useMemo)((function(){var e=function(e){return m.Children.toArray(e).filter((function(e){return(0,m.isValidElement)(e)}))}(y);return w?e:e.map((function(n,t){var r="undefined"!==typeof n.key?n.key:t,i=t+1===e.length,a=I?(0,s.jsx)(c,{children:n},r):n;if(!E)return a;var o=(0,m.cloneElement)(Z,{__css:C}),u=i?null:o;return(0,s.jsxs)(m.Fragment,{children:[a,u]},r)}))}),[Z,C,E,w,I,y]),S=(0,u.cx)("chakra-stack",N);return(0,s.jsx)(o.m.div,(0,r.Z)((0,r.Z)({ref:n,display:"flex",alignItems:h,justifyContent:p,flexDirection:j.flexDirection,flexWrap:b,className:S,__css:E?{}:(0,i.Z)({},d,j[d])},k),{},{children:O}))}));h.displayName="Stack";var p=(0,f.G)((function(e,n){return(0,s.jsx)(h,(0,r.Z)((0,r.Z)({align:"center"},e),{},{direction:"row",ref:n}))}));p.displayName="HStack"},18206:function(e,n,t){t.d(n,{W:function(){return f}});var r=t(1413),i=t(45987),a=t(17872),o=t(19477),s=t(69084),c=t(66923),u=t(36992),l=t(80184),d=["className","centerContent"],f=(0,a.G)((function(e,n){var t=(0,o.Lr)(e),a=t.className,f=t.centerContent,m=(0,i.Z)(t,d),v=(0,s.mq)("Container",e);return(0,l.jsx)(c.m.div,(0,r.Z)((0,r.Z)({ref:n,className:(0,u.cx)("chakra-container",a)},m),{},{__css:(0,r.Z)((0,r.Z)({},v),f&&{display:"flex",flexDirection:"column",alignItems:"center"})}))}));f.displayName="Container"},12491:function(e,n,t){t.d(n,{a:function(){return s}});var r=t(1413),i=t(29439),a=t(99216),o=t(72791);function s(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.ssr,s=void 0===t||t,c=n.fallback,u=(0,a.O)(),l=u.getWindow,d=Array.isArray(e)?e:[e],f=Array.isArray(c)?c:[c];f=f.filter((function(e){return null!=e}));var m=(0,o.useState)((function(){return d.map((function(e,n){return{media:e,matches:s?!!f[n]:l().matchMedia(e).matches}}))})),v=(0,i.Z)(m,2),h=v[0],p=v[1];return(0,o.useEffect)((function(){var e=l();p(d.map((function(n){return{media:n,matches:e.matchMedia(n).matches}})));var n=d.map((function(n){return e.matchMedia(n)})),t=function(e){p((function(n){return n.slice().map((function(n){return n.media===e.media?(0,r.Z)((0,r.Z)({},n),{},{matches:e.matches}):n}))}))};return n.forEach((function(e){"function"===typeof e.addListener?e.addListener(t):e.addEventListener("change",t)})),function(){n.forEach((function(e){"function"===typeof e.removeListener?e.removeListener(t):e.removeEventListener("change",t)}))}}),[l]),h.map((function(e){return e.matches}))}},27506:function(e,n,t){t.d(n,{Ag:function(){return s},O2:function(){return i},U1:function(){return a},Wt:function(){return c},YD:function(){return o}});var r=t(52554);var i=(0,r.F4)({"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}}),a=(0,r.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),o=(0,r.F4)({"0%":{left:"-40%"},"100%":{left:"100%"}}),s=(0,r.F4)({from:{backgroundPosition:"1rem 0"},to:{backgroundPosition:"0 0"}});function c(e){var n=e.value,t=void 0===n?0:n,r=e.min,i=e.max,a=e.valueText,o=e.getValueText,s=e.isIndeterminate,c=e.role,u=void 0===c?"progressbar":c,l=function(e,n,t){return 100*(e-n)/(t-n)}(t,r,i);return{bind:{"data-indeterminate":s?"":void 0,"aria-valuemax":i,"aria-valuemin":r,"aria-valuenow":s?void 0:t,"aria-valuetext":function(){if(null!=t)return"function"===typeof o?o(t,l):a}(),role:u},percent:l,value:t}}},9177:function(e,n,t){t.d(n,{D:function(){return m}});var r=t(1413),i=t(45987),a=t(66923),o=t(80184),s=function(e){return(0,o.jsx)(a.m.circle,(0,r.Z)({cx:50,cy:50,r:42,fill:"transparent"},e))};s.displayName="Circle";var c=t(27506),u=["size","isIndeterminate"],l=function(e){var n=e.size,t=e.isIndeterminate,s=(0,i.Z)(e,u);return(0,o.jsx)(a.m.svg,(0,r.Z)({viewBox:"0 0 100 100",__css:{width:n,height:n,animation:t?"".concat(c.U1," 2s linear infinite"):void 0}},s))};l.displayName="Shape";var d=t(17872),f=["size","max","min","valueText","getValueText","value","capIsRound","children","thickness","color","trackColor","isIndeterminate"],m=(0,d.G)((function(e,n){var t,u=e.size,d=void 0===u?"48px":u,m=e.max,v=void 0===m?100:m,h=e.min,p=void 0===h?0:h,g=e.valueText,x=e.getValueText,b=e.value,y=e.capIsRound,Z=e.children,N=e.thickness,I=void 0===N?"10px":N,k=e.color,_=void 0===k?"#0078d4":k,j=e.trackColor,C=void 0===j?"#edebe9":j,E=e.isIndeterminate,w=(0,i.Z)(e,f),O=(0,c.Wt)({min:p,max:v,value:b,valueText:g,getValueText:x,isIndeterminate:E}),S=E?void 0:2.64*(null!=(t=O.percent)?t:0),T=null==S?void 0:"".concat(S," ").concat(264-S),A=E?{css:{animation:"".concat(c.O2," 1.5s linear infinite")}}:{strokeDashoffset:66,strokeDasharray:T,transitionProperty:"stroke-dasharray, stroke",transitionDuration:"0.6s",transitionTimingFunction:"ease"},D={display:"inline-block",position:"relative",verticalAlign:"middle",fontSize:d};return(0,o.jsxs)(a.m.div,(0,r.Z)((0,r.Z)((0,r.Z)({ref:n,className:"chakra-progress"},O.bind),w),{},{__css:D,children:[(0,o.jsxs)(l,{size:d,isIndeterminate:E,children:[(0,o.jsx)(s,{stroke:C,strokeWidth:I,className:"chakra-progress__track"}),(0,o.jsx)(s,(0,r.Z)({stroke:_,strokeWidth:I,className:"chakra-progress__indicator",strokeLinecap:y?"round":void 0,opacity:0!==O.value||E?void 0:0},A))]}),Z]}))}));m.displayName="CircularProgress"},48876:function(e,n,t){t.d(n,{E:function(){return y}});var r=t(1413),i=t(45987),a=t(29439),o=t(27506),s=t(17872),c=t(66923),u=t(19477),l=t(69084),d=t(9886),f=t(80184),m=["min","max","value","isIndeterminate","role"],v=["value","min","max","hasStripe","isAnimated","children","borderRadius","isIndeterminate","aria-label","aria-labelledby","aria-valuetext","title","role"],h=(0,d.k)({name:"ProgressStylesContext",errorMessage:"useProgressStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Progress />\" "}),p=(0,a.Z)(h,2),g=p[0],x=p[1],b=(0,s.G)((function(e,n){var t=e.min,a=e.max,s=e.value,u=e.isIndeterminate,l=e.role,d=(0,i.Z)(e,m),v=(0,o.Wt)({value:s,min:t,max:a,isIndeterminate:u,role:l}),h=x(),p=(0,r.Z)({height:"100%"},h.filledTrack);return(0,f.jsx)(c.m.div,(0,r.Z)((0,r.Z)((0,r.Z)({ref:n,style:(0,r.Z)({width:"".concat(v.percent,"%")},d.style)},v.bind),d),{},{__css:p}))})),y=(0,s.G)((function(e,n){var t,a=(0,u.Lr)(e),s=a.value,d=a.min,m=void 0===d?0:d,h=a.max,p=void 0===h?100:h,x=a.hasStripe,y=a.isAnimated,Z=a.children,N=a.borderRadius,I=a.isIndeterminate,k=a["aria-label"],_=a["aria-labelledby"],j=a["aria-valuetext"],C=a.title,E=a.role,w=(0,i.Z)(a,v),O=(0,l.jC)("Progress",e),S=null!=N?N:null==(t=O.track)?void 0:t.borderRadius,T={animation:"".concat(o.Ag," 1s linear infinite")},A=!I&&x&&y,D=(0,r.Z)((0,r.Z)({},A&&T),I&&{position:"absolute",willChange:"left",minWidth:"50%",animation:"".concat(o.YD," 1s ease infinite normal none running")}),P=(0,r.Z)({overflow:"hidden",position:"relative"},O.track);return(0,f.jsx)(c.m.div,(0,r.Z)((0,r.Z)({ref:n,borderRadius:S,__css:P},w),{},{children:(0,f.jsxs)(g,{value:O,children:[(0,f.jsx)(b,{"aria-label":k,"aria-labelledby":_,"aria-valuetext":j,min:m,max:p,value:s,isIndeterminate:I,css:D,borderRadius:S,title:C,role:E}),Z]})}))}));y.displayName="Progress"},14591:function(e,n,t){t.d(n,{lq:function(){return a},qq:function(){return o}});var r=t(72791);function i(e,n){if(null!=e)if("function"!==typeof e)try{e.current=n}catch(t){throw new Error("Cannot assign value '".concat(n,"' to ref '").concat(e,"'"))}else e(n)}function a(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){n.forEach((function(n){i(n,e)}))}}function o(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,r.useMemo)((function(){return a.apply(void 0,n)}),n)}},72732:function(e,n,t){t.d(n,{i:function(){return x},p:function(){return g}});var r=t(1413),i=t(45987),a=t(29439),o=t(17872),s=t(69084),c=t(19477),u=t(66923),l=t(36992),d=t(9886),f=t(80184),m=["className","layout"],v=(0,d.k)({name:"TableStylesContext",errorMessage:"useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Table />\" "}),h=(0,a.Z)(v,2),p=h[0],g=h[1],x=(0,o.G)((function(e,n){var t=(0,s.jC)("Table",e),a=(0,c.Lr)(e),o=a.className,d=a.layout,v=(0,i.Z)(a,m);return(0,f.jsx)(p,{value:t,children:(0,f.jsx)(u.m.table,(0,r.Z)({ref:n,__css:(0,r.Z)({tableLayout:d},t.table),className:(0,l.cx)("chakra-table",o)},v))})}));x.displayName="Table"},44004:function(e,n,t){t.d(n,{Td:function(){return l}});var r=t(1413),i=t(45987),a=t(72732),o=t(17872),s=t(66923),c=t(80184),u=["isNumeric"],l=(0,o.G)((function(e,n){var t=e.isNumeric,o=(0,i.Z)(e,u),l=(0,a.p)();return(0,c.jsx)(s.m.td,(0,r.Z)((0,r.Z)({},o),{},{ref:n,__css:l.td,"data-is-numeric":t}))}))},58500:function(e,n,t){t.d(n,{p:function(){return c}});var r=t(1413),i=t(72732),a=t(17872),o=t(66923),s=t(80184),c=(0,a.G)((function(e,n){var t=(0,i.p)();return(0,s.jsx)(o.m.tbody,(0,r.Z)((0,r.Z)({},e),{},{ref:n,__css:t.tbody}))}))},10553:function(e,n,t){t.d(n,{h:function(){return c}});var r=t(1413),i=t(72732),a=t(17872),o=t(66923),s=t(80184),c=(0,a.G)((function(e,n){var t=(0,i.p)();return(0,s.jsx)(o.m.thead,(0,r.Z)((0,r.Z)({},e),{},{ref:n,__css:t.thead}))}))},13129:function(e,n,t){t.d(n,{Tr:function(){return c}});var r=t(1413),i=t(72732),a=t(17872),o=t(66923),s=t(80184),c=(0,a.G)((function(e,n){var t=(0,i.p)();return(0,s.jsx)(o.m.tr,(0,r.Z)((0,r.Z)({},e),{},{ref:n,__css:t.tr}))}))},55237:function(e,n,t){t.d(n,{Th:function(){return l}});var r=t(1413),i=t(45987),a=t(72732),o=t(17872),s=t(66923),c=t(80184),u=["isNumeric"],l=(0,o.G)((function(e,n){var t=e.isNumeric,o=(0,i.Z)(e,u),l=(0,a.p)();return(0,c.jsx)(s.m.th,(0,r.Z)((0,r.Z)({},o),{},{ref:n,__css:l.th,"data-is-numeric":t}))}))},33367:function(e,n,t){t.d(n,{Lj:function(){return i},Sh:function(){return l},js:function(){return u},p$:function(){return d}});var r=t(1413),i={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},a={position:{left:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"-100%",y:0}},o={position:{right:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"100%",y:0}},s={position:{top:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"-100%"}},c={position:{bottom:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"100%"}};function u(e){var n;switch(null!=(n=null==e?void 0:e.direction)?n:"right"){case"right":default:return o;case"left":return a;case"bottom":return c;case"top":return s}}var l={enter:{duration:.2,ease:i.easeOut},exit:{duration:.1,ease:i.easeIn}},d={enter:function(e,n){return(0,r.Z)((0,r.Z)({},e),{},{delay:"number"===typeof n?n:null==n?void 0:n.enter})},exit:function(e,n){return(0,r.Z)((0,r.Z)({},e),{},{delay:"number"===typeof n?n:null==n?void 0:n.exit})}}}}]);
//# sourceMappingURL=489.3c33464e.chunk.js.map