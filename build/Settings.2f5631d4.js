function e(e,s,a,i){Object.defineProperty(e,s,{get:a,set:i,enumerable:!0,configurable:!0})}var s=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire30d9;s.register("4t8z0",(function(a,i){var t;t=a.exports,Object.defineProperty(t,"__esModule",{value:!0,configurable:!0}),e(a.exports,"default",(()=>h));var l=s("7C6UD"),r=s("eCRxs"),n=s("fH21S"),c=s("9TyyI"),d=s("9Gf2w"),o=s("i0lCb");var h=({isAuth:e})=>{const[s,a]=r.useState(0),i=[l.jsx(c.default,{isAuth:e}),l.jsx(d.default,{isAuth:e}),l.jsx(o.default,{})];return l.jsxs("main",{children:[l.jsx(n.default,{setSelectedPage:a,isAuth:e}),i[s]]})}})),s.register("fH21S",(function(a,i){e(a.exports,"default",(()=>r));var t=s("7C6UD"),l=s("eCRxs");var r=({setSelectedPage:e,isAuth:s})=>{const[a,i]=l.useState((()=>"Admin"===s.role?0:1)),[r,n]=l.useState({width:"0px",transform:"translate(0px, 0px)"}),c=l.useRef(),d=l.useRef();l.useLayoutEffect((()=>{n({width:document.getElementById(a).getBoundingClientRect().width,transform:`translate(${document.getElementById(a).getBoundingClientRect().x-c.current.getBoundingClientRect().x}px, 0px)`}),e(a)}),[a]);const o=e=>{const s=e.target.id;i(s)};return t.jsx("nav",{className:"settingsSubmenu",children:"Admin"===s.role?t.jsxs("ul",{children:[t.jsx("li",{className:0==a?"active":null,ref:c,id:"0",onClick:o,children:"Users"}),t.jsx("li",{className:1==a?"active":null,id:"1",onClick:o,children:"Account"}),t.jsx("li",{className:2==a?"active":null,id:"2",onClick:o,children:"Theme"}),t.jsx("li",{className:"background",ref:d,style:r})]}):t.jsxs("ul",{children:[t.jsx("li",{ref:c,className:1==a?"active":null,id:"1",onClick:o,children:"Account"}),t.jsx("li",{className:2==a?"active":null,id:"2",onClick:o,children:"Theme"}),t.jsx("li",{className:"background",ref:d,style:r})]})})}})),s.register("9TyyI",(function(a,i){e(a.exports,"default",(()=>d));var t=s("7C6UD"),l=s("9aCo1"),r=s("eCRxs"),n=s("kYfAi");const c=()=>t.jsxs("div",{className:"userCard placeholder",children:[t.jsx("span",{className:"imageContainer",children:t.jsx("span",{className:"img"})}),t.jsx("span",{className:"name",children:"a"}),t.jsx("span",{className:"username",children:"a"}),t.jsx("span",{className:"email",children:"a"}),t.jsx("span",{className:"userType",children:"a"}),t.jsx("span",{className:"options"})]});var d=({isAuth:e})=>{const s=n.useNavigate(),[a,i]=r.useState([]);r.useEffect((()=>{d()}),[]);const d=async()=>{const s=await l.default("GET","https://csharpproject.somee.com/api/Auth/users",e.jwt);i(s.dataPackage)},o=e=>{console.log(e.target.parentNode.id)};return t.jsx("div",{className:"settings__users",children:t.jsxs("div",{className:"users card",children:[t.jsxs("h2",{className:"settings__users--title",children:["Users",t.jsx("button",{type:"button",id:"userAdd",onClick:()=>{s("/userAdd")},style:{padding:"0 .5rem"},children:"+"})]}),t.jsx("div",{className:"usersContainer",children:0===a.length?[1,2,3,4,5].map((e=>t.jsx(c,{},e))):a.map(((e,s)=>{return t.jsxs("div",{id:e.id,className:"userCard",children:[t.jsx("figure",{className:"imageContainer",children:t.jsx("div",{className:"img",style:{backgroundColor:(a=s,["#61C9A8","#ED9B40","#BA3B46","#508991"][a%4])},children:t.jsxs("span",{className:"img--text",children:["F","L"]})})}),t.jsxs("span",{className:"name",children:["Firstname"," ","Lastname"]}),t.jsxs("span",{className:"username",children:["@",e.userName]}),t.jsx("span",{className:"email",children:e.email}),t.jsx("span",{className:"userType",children:e.userType}),t.jsx("i",{className:"fas fa-ellipsis-v options",onClick:o})]},e.id);var a}))})]})})}})),s.register("9Gf2w",(function(a,i){e(a.exports,"default",(()=>l));var t=s("7C6UD");var l=({isAuth:e})=>t.jsxs("div",{className:"card",children:[t.jsx("h2",{children:"You : "}),t.jsx("br",{}),t.jsxs("p",{children:["Username : ",e.name]}),t.jsxs("p",{children:["Role : ",e.role]})]})})),s.register("i0lCb",(function(a,i){e(a.exports,"default",(()=>c));var t=s("7C6UD"),l=s("eCRxs"),r=s("g9PIs"),n=s("34kEx");var c=()=>{const[e,s]=r.useLocalState("cogipTheme",n.themes.original),a=e=>{const a=e.target;s(n.themes[a.id])};return l.useEffect((()=>{n.switchTheme(e)}),[e]),t.jsxs("div",{className:"settings__themes card",children:[t.jsx("h2",{className:"settings__themes--title",children:"Theme settings"}),t.jsxs("div",{className:"themeContainer",children:[t.jsxs("div",{className:"themeCard",id:"original",onClick:a,style:{cursor:"pointer"},children:["Original :",t.jsx("div",{className:"themeCard__colors",children:t.jsxs("div",{className:"primary",children:[t.jsx("h3",{children:"Title"}),t.jsx("p",{children:"Text"}),t.jsx("p",{id:"lighterText",children:"Lighter Text"})]})})]}),t.jsxs("div",{className:"themeCard",id:"dark",onClick:a,style:{cursor:"pointer"},children:["Dark :",t.jsx("div",{className:"themeCard__colors",children:t.jsxs("div",{className:"primary",children:[t.jsx("h3",{children:"Title"}),t.jsx("p",{children:"Text"}),t.jsx("p",{id:"lighterText",children:"Lighter Text"})]})})]}),t.jsxs("div",{className:"themeCard",id:"salmon",onClick:a,style:{cursor:"pointer"},children:["Salmon :",t.jsx("div",{className:"themeCard__colors",children:t.jsxs("div",{className:"primary",children:[t.jsx("h3",{children:"Title"}),t.jsx("p",{children:"Text"}),t.jsx("p",{id:"lighterText",children:"Lighter Text"})]})})]}),t.jsxs("div",{className:"themeCard",id:"forest",onClick:a,style:{cursor:"pointer"},children:["Forest :",t.jsx("div",{className:"themeCard__colors",children:t.jsxs("div",{className:"primary",children:[t.jsx("h3",{children:"Title"}),t.jsx("p",{children:"Text"}),t.jsx("p",{id:"lighterText",children:"Lighter Text"})]})})]})]})]})}})),s.register("g9PIs",(function(a,i){e(a.exports,"useLocalState",(()=>l));var t=s("eCRxs");const l=(e,s)=>{const a=localStorage.getItem(e),i=a?JSON.parse(a):null,[l,r]=t.useState(i||s);return t.useEffect((()=>{localStorage.setItem(e,JSON.stringify(l))}),[e,l]),[l,r]}}));
//# sourceMappingURL=Settings.2f5631d4.js.map
