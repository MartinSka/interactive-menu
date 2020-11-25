(this["webpackJsonpinteractive-menu"]=this["webpackJsonpinteractive-menu"]||[]).push([[0],{65:function(e,n,t){},97:function(e,n,t){"use strict";t.r(n);var i=t(1),c=t(0),r=t.n(c),a=t(34),s=t.n(a),d=(t(65),t(31)),o=t(12),u=t(113),j=t(9),l=t(4),b=t(30),O=t(105),h=t(110),v=t(112);var g=t(104),f=t(108),x=t(13),p=t(23),m=t(106),C=t(109),k=t(103),I=t(107),w=t(8),S=function(e){var n=e.ingredients,t=e.next,r=e.onChange,a=Object(c.useState)([]),s=Object(j.a)(a,2),d=s[0],o=s[1],u=null===t||void 0===t?void 0:t.filter((function(e){var n=e.prev;return null===n||void 0===n?void 0:n.filter((function(e){return d.includes(e)})).length})),l=function(e){var t=Object(w.xor)(d,[e.target.value]);o(t);var i=Object(w.compact)(t.map((function(e){return n.find((function(n){return n.id===e}))})));r(i)},b=n.filter((function(e){var n=e.id;return!d.length||d.includes(n)||(null===u||void 0===u?void 0:u.find((function(e){var t=e.prev;return!!Object(w.intersection)(t,[n]).length})))}));return Object(i.jsx)(i.Fragment,{children:b.map((function(e){var n=e.id,t=e.name;return Object(i.jsx)(I.a,{onChange:l,value:n,isChecked:d.includes(n),children:t},"check-".concat(n))}))})},q=[{name:"Pork",id:"1"},{name:"Eggs",id:"2"},{name:"Water",id:"7"},{name:"Flour",id:"8"},{name:"Milk",id:"10"},{name:"Mushroom",id:"12"}],E=[{name:"Meat",id:"3",prev:["1"]},{name:"Ham Eggs",id:"5",prev:["2"]},{name:"Bread",id:"6",prev:["7","8"]},{name:"Cheese",id:"9",prev:["10"]},{name:"Fried Eggs",id:"11",prev:["2"]}],F=[{name:"Bacon",id:"4",prev:["3"]},{name:"Sausages",id:"13",prev:["3"]}],D=[{id:Object(w.uniqueId)(),name:"Bacon and Eggs",ingredients:[{id:Object(w.uniqueId)(),ingredients:[{name:"Pork"}],prev:[{id:Object(w.uniqueId)(),ingredients:[{name:"Meat"}],prev:[{id:Object(w.uniqueId)(),ingredients:[{name:"Bacon"}]}]}]},{id:Object(w.uniqueId)(),ingredients:[{name:"Eggs"}],prev:[{id:Object(w.uniqueId)(),ingredients:[{name:"Ham Eggs"}]}]}]},{id:Object(w.uniqueId)(),name:"Bread",ingredients:[{id:Object(w.uniqueId)(),ingredients:[{name:"Water"},{name:"Flour"}],prev:[{id:Object(w.uniqueId)(),ingredients:[{name:"Bread"}]}]}]}],P=Object(c.createContext)(null),y=function(e){var n=Object(c.useState)(q),t=Object(j.a)(n,2),r=t[0],a=t[1],s=Object(c.useState)(E),d=Object(j.a)(s,2),o=d[0],u=d[1],l=Object(c.useState)(F),b=Object(j.a)(l,2),O=b[0],h=b[1],v=Object(c.useState)(D),g=Object(j.a)(v,2),f=g[0],p=g[1],m=Object(c.useMemo)((function(){return{raw:r,processed:o,cooked:O,dishes:f,setRaw:a,setProcessed:u,setCooked:h,setDishes:p}}),[r,o,O,f,a,u,h,p]);return Object(i.jsx)(P.Provider,Object(x.a)({value:m},e))},B=function(){var e=Object(c.useContext)(P);if(!e)throw new Error("useDishes must be used within a DishesProvider");return e},A=function(e,n){return null===e||void 0===e?void 0:e.filter((function(e){var t=e.prev;return(null===t||void 0===t?void 0:t.filter((function(e){return null===n||void 0===n?void 0:n.find((function(n){return n.id===e}))})).length)===(null===t||void 0===t?void 0:t.length)}))},M=function(e){var n,t,r=e.onChange,a=e.index,s=e.id,d=B(),o=d.raw,u=d.processed,l=d.cooked,b=Object(c.useState)({id:s}),O=Object(j.a)(b,2),h=O[0],v=O[1];Object(c.useEffect)((function(){r(h,a)}),[h,r,a]);var g=A(u,null===h||void 0===h?void 0:h.raw),f=A(l,null===h||void 0===h?void 0:h.processed);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(C.a,{isInline:!0,spacing:4,children:[Object(i.jsx)(C.a,{spacing:1,children:Object(i.jsx)(S,{type:"raw",next:u,ingredients:o,onChange:function(e){v((function(n){return{id:n.id,raw:e}}))}})}),!!(null===h||void 0===h||null===(n=h.raw)||void 0===n?void 0:n.length)&&Object(i.jsx)(C.a,{spacing:1,children:Object(i.jsx)(S,{type:"processed",onChange:function(e){v((function(n){var t=n.raw;return{id:n.id,raw:t,processed:e}}))},ingredients:g})}),!!(null===h||void 0===h||null===(t=h.processed)||void 0===t?void 0:t.length)&&Object(i.jsx)(C.a,{spacing:1,children:Object(i.jsx)(S,{type:"cooked",onChange:function(e){v((function(n){return Object(x.a)(Object(x.a)({},n),{},{cooked:e})}))},ingredients:f})})]}),Object(i.jsx)(k.a,{})]})},T=function(e){var n=e.isOpen,t=e.onClose,r=B().setDishes,a=Object(c.useState)(""),s=Object(j.a)(a,2),d=s[0],o=s[1],u=Object(c.useState)([]),l=Object(j.a)(u,2),b=l[0],O=l[1],v=!d.length||!b.length||!!b.reduce((function(e,n){var t=n.raw;return e||!(null===t||void 0===t?void 0:t.length)}),!1),g=Object(c.useCallback)((function(e,n){return O((function(t){return[].concat(Object(p.a)(t.slice(0,n)),[Object(x.a)(Object(x.a)({},t[n]),e)],Object(p.a)(t.slice(n+1,t.length)))}))}),[]);return Object(i.jsxs)(m.a,{isOpen:n,children:[Object(i.jsx)(m.g,{}),Object(i.jsxs)(m.d,{children:[Object(i.jsx)(m.f,{children:"Create a new dish"}),Object(i.jsx)(m.c,{onClick:t}),Object(i.jsxs)(m.b,{children:[Object(i.jsx)(h.a,{mb:"4",value:d,placeholder:"Dish name",onChange:function(e){var n=e.target;return o(n.value)}}),b.map((function(e,n){return Object(i.jsx)(M,{id:e.id,index:n,onChange:g},"list_".concat(e.id))})),Object(i.jsx)(f.a,{mt:"2",onClick:function(){var e={id:Object(w.uniqueId)()};O((function(n){return[].concat(Object(p.a)(n),[e])}))},children:"Add ingredient"})]}),Object(i.jsxs)(m.e,{children:[Object(i.jsx)(f.a,{mr:3,onClick:t,variant:"ghost",children:"Cancel"}),Object(i.jsx)(f.a,{variantColor:"teal",isDisabled:v,onClick:function(){var e=function(e,n){return{id:Object(w.uniqueId)(),name:e,ingredients:n.map((function(e){var n=e.cooked,t=e.processed,i=e.raw;return{id:Object(w.uniqueId)(),ingredients:i,prev:(null===t||void 0===t?void 0:t.length)?[{id:Object(w.uniqueId)(),ingredients:t,prev:(null===n||void 0===n?void 0:n.length)?[{id:Object(w.uniqueId)(),ingredients:n}]:void 0}]:void 0}}))}}(d,b);r((function(n){return[].concat(Object(p.a)(n),[e])})),t()},children:"Create"})]})]})]})},W=function(){var e=Object(g.a)(),n=e.isOpen,t=e.onOpen,c=e.onClose;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(f.a,{variantColor:"teal",size:"sm",mr:"2",onClick:t,children:"Create dish"}),n&&Object(i.jsx)(T,{isOpen:n,onClose:c})]})},_=function(e){var n=e.isOpen,t=e.onClose,r=B(),a=r.setRaw,s=r.setProcessed,d=r.setCooked,o=Object(c.useState)(""),u=Object(j.a)(o,2),l=u[0],b=u[1],O=Object(c.useState)(""),v=Object(j.a)(O,2),g=v[0],x=v[1],k=Object(c.useState)(""),I=Object(j.a)(k,2),S=I[0],q=I[1],E=function(){q(""),x(""),b("")},F=function(){E(),t()};return Object(i.jsxs)(m.a,{isOpen:n,children:[Object(i.jsx)(m.g,{}),Object(i.jsxs)(m.d,{children:[Object(i.jsx)(m.f,{children:"Create a new dish"}),Object(i.jsx)(m.c,{onClick:F}),Object(i.jsx)(m.b,{children:Object(i.jsxs)(C.a,{spacing:"4",children:[Object(i.jsx)(h.a,{value:l,placeholder:"Add a raw ingredient",onChange:function(e){var n=e.target;b(n.value)}}),Object(i.jsx)(h.a,{value:g,isDisabled:!l.length,placeholder:"Add a processed ingredient",onChange:function(e){var n=e.target;x(n.value)}}),Object(i.jsx)(h.a,{value:S,isDisabled:!g.length,placeholder:"Add a cooked ingredient",onChange:function(e){var n=e.target;q(n.value)}})]})}),Object(i.jsxs)(m.e,{children:[Object(i.jsx)(f.a,{mr:3,onClick:F,variant:"ghost",children:"Cancel"}),Object(i.jsx)(f.a,{variantColor:"teal",isDisabled:!l.length,onClick:function(){var e={name:l,id:Object(w.uniqueId)("raw_")},n={name:g,id:Object(w.uniqueId)("processed_"),prev:[e.id]},i={name:S,id:Object(w.uniqueId)("cooked_"),prev:[n.id]};l&&a((function(n){return[].concat(Object(p.a)(n),[e])})),g&&s((function(e){return[].concat(Object(p.a)(e),[n])})),S&&d((function(e){return[].concat(Object(p.a)(e),[i])})),E(),t()},children:"Add"})]})]})]})},H=function(){var e=Object(g.a)(),n=e.isOpen,t=e.onOpen,c=e.onClose;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(f.a,{onClick:t,variantColor:"teal",size:"sm",children:"Add ingredient"}),Object(i.jsx)(_,{isOpen:n,onClose:c})]})},L=t(111),R=t(25),z=t(58),J=t.n(z),N=function(e){var n=e.children,t=e.setIsOpen;return Object(c.useEffect)((function(){t(!0)}),[t]),Object(i.jsx)("span",{className:"highlight",children:n})},G=Object(c.memo)((function(e){var n=e.setIsOpen,t=e.search,r=e.prev,a=e.ingredients,s=(null===a||void 0===a?void 0:a.map((function(e){return e.name})).join(" & "))||"";return Object(c.useEffect)((function(){t||n(!1)}),[t,n]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(J.a,{autoEscape:!0,searchWords:[t],textToHighlight:s,highlightTag:function(e){return Object(i.jsx)(N,Object(x.a)({setIsOpen:n},e))}}),null===r||void 0===r?void 0:r.map((function(e){return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(R.a,{color:"gray.300",name:"chevron-right"}),Object(i.jsx)(G,Object(x.a)(Object(x.a)({},e),{},{search:t,setIsOpen:n}))]},e.id)}))]})})),K=G,Q=function(e){var n=e.name,t=e.ingredients,r=e.search,a=Object(c.useState)(!1),s=Object(j.a)(a,2),d=s[0],o=s[1];return Object(i.jsxs)(L.d,{isOpen:d,children:[Object(i.jsxs)(L.b,{onClick:function(){return o((function(e){return!e}))},_expanded:{bg:"rgba(255,255,255,0.06)"},children:[Object(i.jsx)(l.a,{flex:"1",textAlign:"left",children:n}),Object(i.jsx)(L.c,{})]}),Object(i.jsx)(L.e,{pb:"1",pl:"8",children:null===t||void 0===t?void 0:t.map((function(e,n){return Object(i.jsxs)(l.a,{mb:"2",children:[Object(i.jsx)(K,Object(x.a)({setIsOpen:o,search:r},e)),n!==t.length-1&&Object(i.jsx)(k.a,{})]},e.id)}))})]})},U=function(e){var n=e.search,t=B().dishes;return Object(i.jsx)(L.a,{mt:"4",borderRightWidth:1,borderLeftWidth:1,children:t.map((function(e){return Object(i.jsx)(Q,Object(x.a)({search:n},e),e.id)}))})},V=function(){var e=Object(c.useState)(""),n=Object(j.a)(e,2),t=n[0],r=n[1],a=function(e,n){var t=Object(c.useState)(e),i=Object(j.a)(t,2),r=i[0],a=i[1];return Object(c.useEffect)((function(){var t=setTimeout((function(){a(e)}),n);return function(){clearTimeout(t)}}),[e,n]),r}(t,100);return Object(i.jsxs)(l.a,{maxW:"xl",mx:"auto",px:"4",py:"8",children:[Object(i.jsxs)(b.a,{children:[Object(i.jsx)(O.a,{htmlFor:"search",children:"Search an allergen"}),Object(i.jsx)(h.a,{id:"search",type:"text",value:t,onChange:function(e){var n=e.target;return r(n.value)}}),Object(i.jsx)(v.a,{id:"email-helper-text",children:"E.g. Pork"})]}),Object(i.jsx)(U,{search:a}),Object(i.jsxs)(l.a,{mt:"4",d:"flex",justifyContent:"flex-end",children:[Object(i.jsx)(W,{}),Object(i.jsx)(H,{})]})]})};var X=function(){return Object(i.jsx)(d.a,{children:Object(i.jsxs)(o.a,{children:[Object(i.jsx)(u.a,{}),Object(i.jsx)(y,{children:Object(i.jsx)(V,{})})]})})},Y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,114)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),i(e),c(e),r(e),a(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(X,{})}),document.getElementById("root")),Y()}},[[97,1,2]]]);
//# sourceMappingURL=main.5fc2193f.chunk.js.map