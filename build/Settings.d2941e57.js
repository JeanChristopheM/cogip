function e(e,s,a,i){Object.defineProperty(e,s,{get:a,set:i,enumerable:!0,configurable:!0})}var s=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire30d9;s.register("4t8z0",(function(a,i){var t;t=a.exports,Object.defineProperty(t,"__esModule",{value:!0,configurable:!0}),e(a.exports,"default",(()=>m));var r=s("7C6UD"),l=s("eCRxs"),n=s("fH21S"),c=s("9TyyI"),d=s("9Gf2w"),o=s("i0lCb");var m=({isAuth:e})=>{const[s,a]=l.useState(0),i=[r.jsx(c.default,{isAuth:e}),r.jsx(d.default,{}),r.jsx(o.default,{})];return r.jsxs("main",{children:[r.jsx(n.default,{setSelectedPage:a,isAuth:e}),i[s]]})}})),s.register("fH21S",(function(a,i){e(a.exports,"default",(()=>l));var t=s("7C6UD"),r=s("eCRxs");var l=({setSelectedPage:e,isAuth:s})=>{const[a,i]=r.useState((()=>"Admin"===s.role?0:1)),[l,n]=r.useState({width:"0px",transform:"translate(0px, 0px)"}),c=r.useRef(),d=r.useRef();r.useLayoutEffect((()=>{n({width:document.getElementById(a).getBoundingClientRect().width,transform:`translate(${document.getElementById(a).getBoundingClientRect().x-c.current.getBoundingClientRect().x}px, 0px)`}),e(a)}),[a]);const o=e=>{const s=e.target.id;i(s)};return t.jsx("nav",{className:"settingsSubmenu",children:"Admin"===s.role?t.jsxs("ul",{children:[t.jsx("li",{className:0==a?"active":null,ref:c,id:"0",onClick:o,children:"Users"}),t.jsx("li",{className:1==a?"active":null,id:"1",onClick:o,children:"Account"}),t.jsx("li",{className:2==a?"active":null,id:"2",onClick:o,children:"Theme"}),t.jsx("li",{className:"background",ref:d,style:l})]}):t.jsxs("ul",{children:[t.jsx("li",{ref:c,className:1==a?"active":null,id:"1",onClick:o,children:"Account"}),t.jsx("li",{className:2==a?"active":null,id:"2",onClick:o,children:"Theme"}),t.jsx("li",{className:"background",ref:d,style:l})]})})}})),s.register("9TyyI",(function(a,i){e(a.exports,"default",(()=>n));var t=s("7C6UD");s("9aCo1");var r=s("eCRxs");const l=()=>t.jsxs("div",{className:"userCard placeholder",children:[t.jsx("span",{className:"imageContainer",children:t.jsx("span",{className:"img"})}),t.jsx("span",{className:"name",children:"a"}),t.jsx("span",{className:"username",children:"a"}),t.jsx("span",{className:"email",children:"a"}),t.jsx("span",{className:"userType",children:"a"}),t.jsx("span",{className:"options"})]});var n=({isAuth:e})=>{const[s,a]=r.useState([]);r.useEffect((()=>{i()}),[]);const i=async()=>{const s=await((e,s,a,i=null)=>{let t=[{id:1,firstname:"JC",lastname:"Molhant",username:"JeanCM",email:"jc@jc.com",role:"Admin"},{id:2,firstname:"Baptiste",lastname:"Geron",username:"BapG",email:"bap@baptiste.com",role:"Admin"},{id:3,firstname:"Nicolas",lastname:"Jamar",username:"MrJamar",email:"n.jamar@becode.org",role:"User"},{id:4,firstname:"Tanya",lastname:"Leenders",username:"TanyaL",email:"t.leenders@becode.org",role:"User"}];return new Promise(((e,s)=>{setTimeout((()=>{e({status:200,message:"Success",dataPackage:t}),s("Bad request ?")}),2e3)}))})(0,0,e.jwt);a(s.dataPackage)},n=e=>{console.log(e.target.parentNode.id)};return t.jsx("div",{className:"settings__users",children:t.jsxs("div",{className:"users card",children:[t.jsx("h2",{className:"settings__users--title",children:"Users"}),t.jsx("div",{className:"usersContainer",children:0===s.length?[1,2,3,4,5].map((e=>t.jsx(l,{},e))):s.map(((e,s)=>{return t.jsxs("div",{id:e.id,className:"userCard",children:[t.jsx("figure",{className:"imageContainer",children:t.jsx("div",{className:"img",style:{backgroundColor:(a=s,["#61C9A8","#ED9B40","#BA3B46","#508991"][a%4])},children:t.jsxs("span",{className:"img--text",children:[e.firstname.slice(0,1).toUpperCase(),e.lastname.slice(0,1).toUpperCase()]})})}),t.jsxs("span",{className:"name",children:[e.firstname," ",e.lastname]}),t.jsxs("span",{className:"username",children:["@",e.username]}),t.jsx("span",{className:"email",children:e.email}),t.jsx("span",{className:"userType",children:e.role}),t.jsx("i",{className:"fas fa-ellipsis-v options",onClick:n})]},e.id);var a}))})]})})}})),s.register("9Gf2w",(function(a,i){e(a.exports,"default",(()=>r));var t=s("7C6UD");var r=()=>t.jsx("div",{children:"This is the account settings"})})),s.register("i0lCb",(function(a,i){e(a.exports,"default",(()=>c));var t=s("7C6UD"),r=s("eCRxs"),l=s("g9PIs"),n=s("34kEx");var c=()=>{const[e,s]=l.useLocalState("cogipTheme",n.themes.original),a=e=>{const a=e.target;s(n.themes[a.id])};return r.useEffect((()=>{n.switchTheme(e)}),[e]),t.jsxs("div",{className:"settings__themes card",children:[t.jsx("h2",{className:"settings__themes--title",children:"Theme settings"}),t.jsxs("div",{className:"themeContainer",children:[t.jsxs("div",{className:"themeCard",id:"original",onClick:a,style:{cursor:"pointer"},children:["Original :",t.jsx("div",{className:"themeCard__colors",children:t.jsxs("div",{className:"primary",children:[t.jsx("h3",{children:"Title"}),t.jsx("p",{children:"Text"}),t.jsx("p",{id:"lighterText",children:"Lighter Text"})]})})]}),t.jsxs("div",{className:"themeCard",id:"dark",onClick:a,style:{cursor:"pointer"},children:["Dark :",t.jsx("div",{className:"themeCard__colors",children:t.jsxs("div",{className:"primary",children:[t.jsx("h3",{children:"Title"}),t.jsx("p",{children:"Text"}),t.jsx("p",{id:"lighterText",children:"Lighter Text"})]})})]}),t.jsxs("div",{className:"themeCard",id:"salmon",onClick:a,style:{cursor:"pointer"},children:["Salmon :",t.jsx("div",{className:"themeCard__colors",children:t.jsxs("div",{className:"primary",children:[t.jsx("h3",{children:"Title"}),t.jsx("p",{children:"Text"}),t.jsx("p",{id:"lighterText",children:"Lighter Text"})]})})]}),t.jsxs("div",{className:"themeCard",id:"forest",onClick:a,style:{cursor:"pointer"},children:["Forest :",t.jsx("div",{className:"themeCard__colors",children:t.jsxs("div",{className:"primary",children:[t.jsx("h3",{children:"Title"}),t.jsx("p",{children:"Text"}),t.jsx("p",{id:"lighterText",children:"Lighter Text"})]})})]})]})]})}})),s.register("g9PIs",(function(a,i){e(a.exports,"useLocalState",(()=>r));var t=s("eCRxs");const r=(e,s)=>{const a=localStorage.getItem(e),i=a?JSON.parse(a):null,[r,l]=t.useState(i||s);return t.useEffect((()=>{localStorage.setItem(e,JSON.stringify(r))}),[e,r]),[r,l]}}));
//# sourceMappingURL=Settings.d2941e57.js.map
