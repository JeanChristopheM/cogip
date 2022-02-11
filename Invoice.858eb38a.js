function e(e,a,s,t){Object.defineProperty(e,a,{get:s,set:t,enumerable:!0,configurable:!0})}var a=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire30d9;a.register("8082t",(function(s,t){var n;n=s.exports,Object.defineProperty(n,"__esModule",{value:!0,configurable:!0}),e(s.exports,"default",(()=>v));var i=a("7C6UD"),l=a("eCRxs"),c=a("kYfAi"),r=a("enOpT"),o=a("4yknE"),d=a("eltSV"),u=a("9aCo1"),m=a("5H5kc"),p=a("gXTmb"),h=a("lb0XH"),f=a("dv2Dk");var v=function({invoices:e,companies:a,contacts:s,setIsLoaded:t,isAuth:n}){let v=c.useParams();const x=c.useNavigate(),j=e.length>0,g=e.find((e=>e.id==v.invoiceId)),y=g?a.find((e=>e.id==g.company)):null,b=g&&""!==g.contact?s.find((e=>e.id==g.contact)):"";let C=g?g.received.slice(0,4):null,N=g?g.received.slice(5,7):null,T=g?g.received.slice(8,10):null;const[P,I]=l.useState(!1),[D,S]=l.useState(!1),[k,_]=l.useState(y),[O,$]=l.useState(b),[M,R]=l.useState(!1),[w,G]=l.useState(null);l.useEffect((()=>{g||x("/invoices")}),[e]);const V=l.useRef(),E=l.useRef(),H=l.useRef(),q=l.useRef(),B=l.useRef(),F=async()=>{},A=async()=>{R(!0);const{status:e,message:a}=await u.default("DELETE",`https://csharpproject.somee.com/api/Invoice/${g.id}`,n.jwt);R(!1),200!==e&&f.toast.error("There was an error deleting this invoice",{position:f.toast.POSITION.BOTTOM_RIGHT}),sessionStorage.setItem("cogipToast","Success !"),S(!1),t(!1)};return l.useEffect((()=>{G(null)}),[D,P]),i.jsxs("main",{children:[!M&&j&&g?i.jsxs("div",{className:"card",children:[i.jsxs("h2",{children:["Supplier"===y.status?"Incoming bill ":"Outgoing bill ","details"]}),P?i.jsxs("form",{className:"invoiceGrid",onSubmit:async e=>{const a={reference:e.target.reference.value,amount:e.target.amount.value,company:k.id.toString(),contact:""===e.target.contact.value?0:s.find((a=>`${a.firstname} ${a.lastname}`==e.target.contact.value)),received:E.current.value,paidStatus:V.current.value-H.current.value==0,paid:H.current.value,due:q.current.textContent.slice(0,-1),dueDate:B.current.value};console.log(a);let i=m.invoiceVerify(a);if(R(!0),i.ok){const{status:e,message:s,dataPackage:i}=await u.default("PUT",`https://csharpproject.somee.com/api/invoice/${v.invoiceId}`,n.jwt,a);t(!1),R(!1),200===e?setTimeout((()=>{f.toast.success(s,{position:f.toast.POSITION.BOTTOM_RIGHT})}),250):setTimeout((()=>{f.toast.error(s,{position:f.toast.POSITION.BOTTOM_RIGHT})}),250)}else{R(!1);const e=Object.keys(i);setTimeout((()=>{for(let a of e)"ok"!==a&&f.toast.error(i[a],{position:f.toast.POSITION.BOTTOM_RIGHT})}),250)}},children:[i.jsxs("fieldset",{className:"invoiceGrid__section--ref",children:[i.jsxs("div",{children:[i.jsxs("label",{htmlFor:"reference",className:"labels",children:["Reference :"," "]}),i.jsx("input",{type:"text",name:"reference",id:"reference",defaultValue:g.reference,required:!0})]}),i.jsxs("div",{children:[i.jsxs("label",{htmlFor:"date",className:"labels",children:["Date :"," "]}),i.jsx("input",{type:"date",name:"date",id:"date",ref:E,defaultValue:`${C}-${N}-${T}`,required:!0})]}),i.jsxs("div",{children:[i.jsxs("label",{htmlFor:"dueDate",className:"labels",children:["Due date :"," "]}),i.jsx("input",{type:"date",name:"dueDate",id:"dueDate",ref:B,defaultValue:`${g.dueDate.slice(0,4)}-${g.dueDate.slice(5,7)}-${g.dueDate.slice(8,10)}`,required:!0})]})]}),i.jsxs("div",{className:"lowerBlock",children:[i.jsxs("fieldset",{className:"invoiceGrid__section--relations",children:[i.jsx("legend",{children:"Company : "}),i.jsx("div",{className:"company",children:i.jsx(o.default,{companies:a,handleCompanyChange:e=>{_(e)},currentCompany:y,className:"company__value"})}),i.jsxs("div",{children:[i.jsx("span",{className:"labels",children:"Contact : "}),i.jsx(d.default,{contacts:s,currentContact:b,currentCompany:y,selectedCompany:k,handleContactChange:e=>{$(e)}})]})]}),i.jsxs("fieldset",{className:"invoiceGrid__section--payment",children:[i.jsx("legend",{children:"Total : "}),i.jsx("div",{className:"total",children:i.jsx("input",{type:"number",name:"amount",ref:V,id:"amount",defaultValue:g.amount,className:"total__value",onChange:e=>{e.target.value<H.current.value&&(H.current.value=e.target.value),G(parseInt(e.target.value)-parseInt(H.current.value))},required:!0})}),i.jsxs("div",{children:[i.jsxs("label",{htmlFor:"paid",className:"labels",children:["Paid :"," "]}),i.jsx("input",{type:"text",name:"paid",id:"paid",defaultValue:g.paid,ref:H,onChange:e=>{parseInt(V.current.value)<parseInt(e.target.value)&&(e.target.value=V.current.value),G(parseInt(V.current.value)-parseInt(e.target.value))}})]}),i.jsxs("div",{children:[i.jsx("span",{className:"labels",children:"Due : "}),i.jsxs("span",{ref:q,children:[null!==w?w:g.due,"€"]})]}),i.jsxs("div",{children:[i.jsx("span",{className:"labels",children:"Paid status : "}),i.jsx("span",{children:g.paidStatus?"Paid":"To be paid"})]})]}),i.jsx("section",{className:"decoration",children:i.jsx(h.default,{})})]}),i.jsx(r.default,{invoice:g.id,isModifying:P,setIsModifying:I,isDeleting:D,setIsDeleting:S,originalCompany:y,setSelectedCompany:_,originalContact:b,setSelectedContact:$,handleModif:F,handleDelete:A})]}):i.jsxs("div",{className:"invoiceGrid",children:[i.jsxs("section",{className:"invoiceGrid__section--ref",children:[i.jsxs("div",{children:[i.jsx("span",{className:"labels",children:"Reference : "}),i.jsx("span",{id:"invoiceReference",children:g.reference})]}),i.jsxs("div",{children:[i.jsx("span",{className:"labels",children:"Date : "}),i.jsx("span",{id:"invoiceReceived",children:`${T}-${N}-${C}`})]}),i.jsxs("div",{children:[i.jsx("span",{className:"labels",children:"Due date : "}),i.jsx("span",{children:p.dateFormatter(g.dueDate)})]})]}),i.jsxs("div",{className:"lowerBlock",children:[i.jsxs("section",{className:"invoiceGrid__section--relations",children:[i.jsx("h3",{children:"Company : "}),i.jsx("div",{className:"company",children:i.jsx("span",{id:"invoiceCompany",onClick:()=>{x(`/company/${y.id}`)},style:{cursor:"pointer"},className:"company__value",children:y.name})}),i.jsxs("div",{children:[i.jsx("span",{className:"labels",children:"Contact : "}),b?i.jsx("span",{id:"invoiceContact",onClick:()=>{x(`/contact/${b.id}`)},style:{cursor:"pointer"},children:`${b.firstname} ${b.lastname}`}):i.jsx("span",{children:"None"})]})]}),i.jsxs("section",{className:"invoiceGrid__section--payment",children:[i.jsx("h3",{children:"Total : "}),i.jsx("div",{className:"total",children:i.jsxs("span",{id:"invoiceAmout",className:"total__value",children:[g.amount," €"]})}),i.jsxs("div",{children:[i.jsx("span",{className:"labels",children:"Paid : "}),i.jsxs("span",{children:[g.paid,"€"]})]}),i.jsxs("div",{children:[i.jsx("span",{className:"labels",children:"Due : "}),i.jsxs("span",{children:[g.due,"€"]})]}),i.jsxs("div",{children:[i.jsx("span",{className:"labels",children:"Paid status : "}),i.jsx("span",{children:g.paidStatus?"Paid":"To be paid"})]})]}),i.jsx("section",{className:"decoration",children:i.jsx(h.default,{})})]}),"Admin"==n.role?i.jsx(r.default,{invoice:g.id,isModifying:P,setIsModifying:I,isDeleting:D,setIsDeleting:S,originalCompany:y,setSelectedCompany:_,originalContact:b,setSelectedContact:$,handleModif:F,handleDelete:A}):""]})]}):i.jsx("div",{className:"fetching",children:i.jsx("div",{className:"lds-dual-ring"})}),i.jsx(f.ToastContainer,{})]})}})),a.register("enOpT",(function(s,t){e(s.exports,"default",(()=>i));var n=a("7C6UD");var i=function({isModifying:e,setIsModifying:a,setSelectedCompany:s,originalCompany:t,isDeleting:i,setIsDeleting:l,originalContact:c,setSelectedContact:r,handleModif:o,handleDelete:d}){return e?n.jsxs("div",{className:"invoiceControls",children:[n.jsx("button",{onClick:o,children:"Submit"}),n.jsx("button",{type:"button",onClick:()=>{a(!1),s(t),r(c)},children:"Cancel"})]}):i?n.jsxs("div",{className:"invoiceControls",children:[n.jsx("button",{type:"button",onClick:d,children:"Confirm"}),n.jsx("button",{type:"button",onClick:()=>{l(!1)},children:"Cancel"})]}):n.jsxs("div",{className:"invoiceControls",children:[n.jsx("button",{type:"button",onClick:()=>{a(!0)},children:"Modify"}),n.jsx("button",{type:"button",onClick:()=>{l(!0)},children:"Delete"})]})}})),a.register("4yknE",(function(s,t){e(s.exports,"default",(()=>i));var n=a("7C6UD");var i=function({companies:e,handleCompanyChange:a,currentCompany:s,name:t}){return n.jsxs("select",{onChange:s=>{let t=e.find((e=>e.name==s.target.value))?e.find((e=>e.name==s.target.value)):"";a(t)},defaultValue:s.name,name:t,required:!0,children:[n.jsx("option",{value:"",children:"Select a company"}),e.map((e=>n.jsx("option",{value:e.name,children:e.name},e.id)))]})}})),a.register("5H5kc",(function(a,s){e(a.exports,"invoiceVerify",(()=>t)),e(a.exports,"contactVerify",(()=>n)),e(a.exports,"companyVerify",(()=>i));const t=e=>{let a={};return e.reference||(a.reference="Please enter a reference"),e.company||(a.company="Please select a company"),e.amount||(a.amount="Please enter an amount"),e.received||(a.received="Please select a date"),!1!==e.paidStatus&&!0!==e.paidStatus&&(a.paid="Please select a paid status"),a.ok=!(Object.keys(a).length>0),a},n=e=>{let a={};return e.firstname||(a.firstname="Please enter a firstname"),e.lastname||(a.lastname="Please enter a lastname"),e.companies||(a.companies="Please select a contact"),e.email||(a.email="Please enter an email"),e.phonenumber||(a.phonenumber="Please enter a phone number"),a.ok=!(Object.keys(a).length>0),a},i=e=>{let a={};return e.name||(a.name="Please enter a name"),e.vat||(a.vat="Please enter a vat number"),e.town||(a.town="Please enter a town"),e.street||(a.street="Please enter a street"),e.streetnumber||(a.streetnumber="Please enter a street number"),e.country||(a.country="Please enter a country"),e.status||(a.status="Please select a status"),a.ok=!(Object.keys(a).length>0),a}})),a.register("gXTmb",(function(a,s){e(a.exports,"dateFormatter",(()=>t));const t=e=>`${e.slice(8,10)}-${e.slice(5,7)}-${e.slice(0,4)}`}));
//# sourceMappingURL=Invoice.858eb38a.js.map
