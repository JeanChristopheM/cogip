function e(e,t,a,n){Object.defineProperty(e,t,{get:a,set:n,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire30d9;t.register("eT0U9",(function(a,n){var s;s=a.exports,Object.defineProperty(s,"__esModule",{value:!0,configurable:!0}),e(a.exports,"default",(()=>u));var r=t("7C6UD"),o=t("eCRxs"),l=t("5H5kc"),i=t("9aCo1"),c=t("4yknE"),m=t("dv2Dk");var u=function({companies:e,setIsLoaded:t,isAuth:a}){const[n,s]=o.useState(""),[u,d]=o.useState(!1);return o.useEffect((()=>{const e=sessionStorage.getItem("cogipToast");if(!e)return;const t=e.split(",");m.toast[t[0]](t[1],{position:m.toast.POSITION.BOTTOM_RIGHT}),sessionStorage.removeItem("cogipToast")}),[u]),r.jsxs("main",{children:[r.jsxs("div",{className:"card",children:[r.jsx("h2",{children:"Fill up the form"}),r.jsxs("form",{className:"contactForm",onSubmit:async e=>{e.preventDefault(),d(!0);const s={firstname:e.target.firstname.value,lastname:e.target.lastname.value,contactcompany:n.id.toString(),email:e.target.email.value,phonenumber:e.target.phonenumber.value};let r=l.contactVerify(s);if(r.ok){const{status:e,message:n,dataPackage:r}=await i.default("POST","https://csharpproject.somee.com/api/Contact",a.jwt,s);d(!1),t(!1),200===e?sessionStorage.setItem("cogipToast","success,Success !"):sessionStorage.setItem("cogipToast",`error,${n}`)}else{d(!1);const e=Object.keys(r);setTimeout((()=>{for(let t of e)"ok"!==t&&m.toast.error(r[t],{position:m.toast.POSITION.BOTTOM_RIGHT})}),500)}},children:[r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("span",{children:"Firstname : "}),r.jsx("input",{name:"firstname",type:"text",placeholder:"Ex : Johnny",required:!0})]}),r.jsxs("li",{children:[r.jsx("span",{children:"Lastname : "}),r.jsx("input",{name:"lastname",type:"text",placeholder:"Ex : Begood",required:!0})]}),r.jsxs("li",{children:[r.jsx("span",{children:"Company : "}),r.jsx(c.default,{companies:e,currentCompany:"",handleCompanyChange:e=>{s(e)},name:"company"})]}),r.jsxs("li",{children:[r.jsx("span",{children:"Email : "}),r.jsx("input",{name:"email",type:"text",placeholder:"Ex : johnny.begood@yahoo.fr",required:!0})]}),r.jsxs("li",{children:[r.jsx("span",{children:"Phone number : "}),r.jsx("input",{name:"phonenumber",type:"text",placeholder:"Ex : 0487272320",required:!0})]})]}),r.jsx("button",{children:"Submit"})]}),r.jsx(m.ToastContainer,{})]}),u?r.jsx("div",{className:"fetching dark",children:r.jsx("div",{className:"lds-dual-ring"})}):null]})}})),t.register("5H5kc",(function(t,a){e(t.exports,"invoiceVerify",(()=>n)),e(t.exports,"contactVerify",(()=>s)),e(t.exports,"companyVerify",(()=>r));const n=e=>{let t={};return e.reference||(t.reference="Please enter a reference"),e.company||(t.company="Please select a company"),e.amount||(t.amount="Please enter an amount"),e.contact||(t.contact="Please select a contact"),e.received||(t.received="Please select a date"),!1!==e.paid&&!0!==e.paid&&(t.paid="Please select a paid status"),t.ok=!(Object.keys(t).length>0),t},s=e=>{let t={};return e.firstname||(t.firstname="Please enter a firstname"),e.lastname||(t.lastname="Please enter a lastname"),e.contactcompany||(t.contactcompany="Please select a contact"),e.email||(t.email="Please enter an email"),e.phonenumber||(t.phonenumber="Please enter a phone number"),t.ok=!(Object.keys(t).length>0),t},r=e=>{let t={};return e.name||(t.name="Please enter a name"),e.vat||(t.vat="Please enter a vat number"),e.status||(t.status="Please select a status"),t.ok=!(Object.keys(t).length>0),t}})),t.register("4yknE",(function(a,n){e(a.exports,"default",(()=>r));var s=t("7C6UD");var r=function({companies:e,handleCompanyChange:t,currentCompany:a,name:n}){return s.jsxs("select",{onChange:a=>{let n=e.find((e=>e.name==a.target.value))?e.find((e=>e.name==a.target.value)):"";t(n)},defaultValue:a.name,name:n,required:!0,children:[s.jsx("option",{value:"",children:"Select a company"}),e.map((e=>s.jsx("option",{value:e.name,children:e.name},e.id)))]})}}));
//# sourceMappingURL=ContactAdd.4f7c6b79.js.map