function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire30d9;t.register("eT0U9",(function(n,a){var s;s=n.exports,Object.defineProperty(s,"__esModule",{value:!0,configurable:!0}),e(n.exports,"default",(()=>u));var r=t("7C6UD"),o=t("eCRxs"),l=t("5H5kc"),i=t("9aCo1"),c=t("4yknE"),m=t("dv2Dk"),d=t("3Ui4D");var u=function({companies:e,setIsLoaded:t,isAuth:n}){const[a,s]=o.useState(1),[u,p]=o.useState(!1);o.useEffect((()=>{const e=sessionStorage.getItem("cogipToast");if(!e)return;const t=e.split(",");m.toast[t[0]](t[1],{position:m.toast.POSITION.BOTTOM_RIGHT}),sessionStorage.removeItem("cogipToast")}),[u]);const h=e=>{};return r.jsxs("main",{children:[r.jsxs("div",{className:"contactAdd card",children:[r.jsx("h2",{children:"Fill up the form"}),r.jsxs("form",{className:"contactForm",onSubmit:async a=>{a.preventDefault(),p(!0);const s={firstname:a.target.firstname.value,lastname:a.target.lastname.value,companies:(t=>{let n=[];for(let a of t)n.push(e.find((e=>e.name==a.value)).id);return[...new Set([...n])]})(a.target.company),email:a.target.email.value,phonenumber:a.target.phonenumber.value};console.log(s);let r=l.contactVerify(s);if(r.ok){const{status:e,message:a,dataPackage:r}=await i.default("POST","https://csharpproject.somee.com/api/Contact",n.jwt,s);p(!1),t(!1),200===e?sessionStorage.setItem("cogipToast","success,Success !"):sessionStorage.setItem("cogipToast",`error,${a}`)}else{p(!1);const e=Object.keys(r);setTimeout((()=>{for(let t of e)"ok"!==t&&m.toast.error(r[t],{position:m.toast.POSITION.BOTTOM_RIGHT})}),500)}},children:[r.jsxs("div",{className:"formContent",children:[r.jsxs("fieldset",{children:[r.jsx("legend",{children:"Contact"}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"firstname",children:"Firstname : "}),r.jsx("input",{name:"firstname",id:"firstname",type:"text",placeholder:"Ex : Johnny",required:!0})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"lastname",children:"Lastname : "}),r.jsx("input",{name:"lastname",id:"lastname",type:"text",placeholder:"Ex : Begood",required:!0})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"email",children:"Email : "}),r.jsx("input",{name:"email",id:"email",type:"text",placeholder:"Ex : johnny.begood@yahoo.fr",required:!0})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"phonenumber",children:"Phone number : "}),r.jsx("input",{name:"phonenumber",id:"phonenumber",type:"text",placeholder:"Ex : 0487272320",required:!0})]})]}),r.jsxs("fieldset",{children:[r.jsxs("legend",{children:["From",r.jsx("button",{type:"button",id:"addCompanySelector",onClick:()=>{s((e=>e+1))},style:{padding:"0 .5rem"},children:"+"}),r.jsx("button",{type:"button",id:"removeCompanySelector",onClick:()=>{s((e=>e>1?e-1:e))},style:{padding:"0 .5rem"},children:"-"})]}),(t=>{let n=[];for(let a=0;a<t;a++)n.push(r.jsxs("div",{children:[r.jsx("label",{children:"Company Selector : "}),r.jsx(c.default,{companies:e,currentCompany:"",handleCompanyChange:h,name:"company"},a)]}));return n})(a)]})]}),r.jsx("button",{children:"Submit"})]}),r.jsx("div",{className:"formIllu",children:r.jsx(d.default,{})}),r.jsx(m.ToastContainer,{})]}),u?r.jsx("div",{className:"fetching dark",children:r.jsx("div",{className:"lds-dual-ring"})}):null]})}})),t.register("5H5kc",(function(t,n){e(t.exports,"invoiceVerify",(()=>a)),e(t.exports,"contactVerify",(()=>s)),e(t.exports,"companyVerify",(()=>r));const a=e=>{let t={};return e.reference||(t.reference="Please enter a reference"),e.company||(t.company="Please select a company"),e.amount||(t.amount="Please enter an amount"),e.received||(t.received="Please select a date"),!1!==e.paidStatus&&!0!==e.paidStatus&&(t.paid="Please select a paid status"),t.ok=!(Object.keys(t).length>0),t},s=e=>{let t={};return e.firstname||(t.firstname="Please enter a firstname"),e.lastname||(t.lastname="Please enter a lastname"),e.companies||(t.companies="Please select a contact"),e.email||(t.email="Please enter an email"),e.phonenumber||(t.phonenumber="Please enter a phone number"),t.ok=!(Object.keys(t).length>0),t},r=e=>{let t={};return e.name||(t.name="Please enter a name"),e.vat||(t.vat="Please enter a vat number"),e.town||(t.town="Please enter a town"),e.street||(t.street="Please enter a street"),e.streetnumber||(t.streetnumber="Please enter a street number"),e.country||(t.country="Please enter a country"),e.status||(t.status="Please select a status"),t.ok=!(Object.keys(t).length>0),t}})),t.register("4yknE",(function(n,a){e(n.exports,"default",(()=>r));var s=t("7C6UD");var r=function({companies:e,handleCompanyChange:t,currentCompany:n,name:a}){return s.jsxs("select",{onChange:n=>{let a=e.find((e=>e.name==n.target.value))?e.find((e=>e.name==n.target.value)):"";t(a)},defaultValue:n.name,name:a,required:!0,children:[s.jsx("option",{value:"",children:"Select a company"}),e.map((e=>s.jsx("option",{value:e.name,children:e.name},e.id)))]})}}));
//# sourceMappingURL=ContactAdd.eda409fd.js.map
