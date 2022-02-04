function e(e,s,a,n){Object.defineProperty(e,s,{get:a,set:n,enumerable:!0,configurable:!0})}var s=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire30d9;s.register("8082t",(function(a,n){var t;t=a.exports,Object.defineProperty(t,"__esModule",{value:!0,configurable:!0}),e(a.exports,"default",(()=>v));var i=s("7C6UD"),l=s("eCRxs"),c=s("kYfAi"),r=s("enOpT"),o=s("4yknE"),d=s("eltSV"),u=s("9aCo1"),m=s("5H5kc"),p=s("gXTmb"),h=s("lb0XH"),x=s("dv2Dk");var v=function({invoices:e,companies:s,contacts:a,setIsLoaded:n,isAuth:t}){let v=c.useParams();const j=c.useNavigate(),f=e.length>0,y=e.find((e=>e.id==v.invoiceId)),g=y?s.find((e=>e.id==y.company)):null,b=y?a.find((e=>e.id==y.contact)):null;let C=y?y.received.slice(0,4):null,N=y?y.received.slice(5,7):null,T=y?y.received.slice(8,10):null;const[P,I]=l.useState(!1),[S,k]=l.useState(!1),[_,O]=l.useState(g),[D,$]=l.useState(b),[R,w]=l.useState(!1),[M,G]=l.useState(null);l.useEffect((()=>{y||j("/invoices")}),[e]);const V=l.useRef(),E=l.useRef(),H=l.useRef(),q=l.useRef(),B=l.useRef(),A=l.useRef();return l.useEffect((()=>{G(null)}),[S,P]),i.jsxs("main",{children:[!R&&f&&y?i.jsxs("div",{className:"card",children:[i.jsxs("h2",{children:["Supplier"===g.status?"Incoming bill ":"Outgoing bill ","details"]}),i.jsx("div",{className:"invoiceGrid",children:P?i.jsxs(i.Fragment,{children:[i.jsxs("section",{className:"invoiceGrid__section--ref",children:[i.jsxs("div",{children:[i.jsx("label",{className:"labels",children:"Reference : "}),i.jsx("input",{type:"text",name:"reference",ref:V,defaultValue:y.reference,required:!0})]}),i.jsxs("div",{children:[i.jsx("label",{className:"labels",children:"Date : "}),i.jsx("input",{type:"date",name:"date",ref:H,defaultValue:`${C}-${N}-${T}`,required:!0})]}),i.jsxs("div",{children:[i.jsx("label",{className:"labels",children:"Due date : "}),i.jsx("input",{type:"date",name:"dueDate",ref:A,defaultValue:`${y.dueDate.slice(0,4)}-${y.dueDate.slice(5,7)}-${y.dueDate.slice(8,10)}`,required:!0})]})]}),i.jsxs("div",{className:"lowerBlock",children:[i.jsxs("section",{className:"invoiceGrid__section--relations",children:[i.jsx("h3",{children:"Company : "}),i.jsx("div",{className:"company",children:i.jsx(o.default,{companies:s,handleCompanyChange:e=>{O(e)},currentCompany:g,className:"company__value"})}),i.jsxs("div",{children:[i.jsx("span",{className:"labels",children:"Contact : "}),i.jsx(d.default,{contacts:a,currentContact:b,currentCompany:g,selectedCompany:_,handleContactChange:e=>{$(e)}})]})]}),i.jsxs("section",{className:"invoiceGrid__section--payment",children:[i.jsx("h3",{children:"Total : "}),i.jsx("div",{className:"total",children:i.jsx("input",{type:"number",name:"amount",ref:E,defaultValue:y.amount,className:"total__value",onChange:e=>{e.target.value<q.current.value&&(q.current.value=e.target.value),G(parseInt(e.target.value)-parseInt(q.current.value))},required:!0})}),i.jsxs("div",{children:[i.jsx("label",{className:"labels",children:"Paid : "}),i.jsx("input",{type:"text",name:"paid",defaultValue:y.paid,ref:q,onChange:e=>{parseInt(E.current.value)<parseInt(e.target.value)&&(e.target.value=E.current.value),G(parseInt(E.current.value)-parseInt(e.target.value))}})]}),i.jsxs("div",{children:[i.jsx("span",{className:"labels",children:"Due : "}),i.jsxs("span",{ref:B,children:[null!==M?M:y.due,"€"]})]}),i.jsxs("div",{children:[i.jsx("span",{className:"labels",children:"Paid status : "}),i.jsx("span",{children:y.paidStatus?"Paid":"To be paid"})]})]}),i.jsx("section",{className:"decoration",children:i.jsx(h.default,{})})]})]}):i.jsxs(i.Fragment,{children:[i.jsxs("section",{className:"invoiceGrid__section--ref",children:[i.jsxs("div",{children:[i.jsx("span",{className:"labels",children:"Reference : "}),i.jsx("span",{id:"invoiceReference",children:y.reference})]}),i.jsxs("div",{children:[i.jsx("span",{className:"labels",children:"Date : "}),i.jsx("span",{id:"invoiceReceived",children:`${T}-${N}-${C}`})]}),i.jsxs("div",{children:[i.jsx("span",{className:"labels",children:"Due date : "}),i.jsx("span",{children:p.dateFormatter(y.dueDate)})]})]}),i.jsxs("div",{className:"lowerBlock",children:[i.jsxs("section",{className:"invoiceGrid__section--relations",children:[i.jsx("h3",{children:"Company : "}),i.jsx("div",{className:"company",children:i.jsx("span",{id:"invoiceCompany",onClick:()=>{j(`/company/${g.id}`)},style:{cursor:"pointer"},className:"company__value",children:g.name})}),i.jsxs("div",{children:[i.jsx("span",{className:"labels",children:"Contact : "}),b?i.jsx("span",{id:"invoiceContact",onClick:()=>{j(`/contact/${b.id}`)},style:{cursor:"pointer"},children:`${b.firstname} ${b.lastname}`}):i.jsx("span",{children:"None"})]})]}),i.jsxs("section",{className:"invoiceGrid__section--payment",children:[i.jsx("h3",{children:"Total : "}),i.jsx("div",{className:"total",children:i.jsxs("span",{id:"invoiceAmout",className:"total__value",children:[y.amount," €"]})}),i.jsxs("div",{children:[i.jsx("span",{className:"labels",children:"Paid : "}),i.jsxs("span",{children:[y.paid,"€"]})]}),i.jsxs("div",{children:[i.jsx("span",{className:"labels",children:"Due : "}),i.jsxs("span",{children:[y.due,"€"]})]}),i.jsxs("div",{children:[i.jsx("span",{className:"labels",children:"Paid status : "}),i.jsx("span",{children:y.paidStatus?"Paid":"To be paid"})]})]}),i.jsx("section",{className:"decoration",children:i.jsx(h.default,{})})]})]})}),"Admin"==t.role?i.jsx(r.default,{invoice:y.id,isModifying:P,setIsModifying:I,isDeleting:S,setIsDeleting:k,originalCompany:g,setSelectedCompany:O,originalContact:b,setSelectedContact:$,handleModif:async()=>{const e={reference:V.current.value,amount:E.current.value,company:_.id.toString(),contact:D.id.toString(),received:H.current.value,paidStatus:E.current.value-q.current.value==0,paid:q.current.value,due:B.current.textContent.slice(0,-1),dueDate:A.current.value};console.log(e);let s=m.invoiceVerify(e);if(w(!0),s.ok){const{status:s,message:a,dataPackage:i}=await u.default("PUT",`https://csharpproject.somee.com/api/invoice/${v.invoiceId}`,t.jwt,e);n(!1),w(!1),200===s?setTimeout((()=>{x.toast.success(a,{position:x.toast.POSITION.BOTTOM_RIGHT})}),250):setTimeout((()=>{x.toast.error(a,{position:x.toast.POSITION.BOTTOM_RIGHT})}),250)}else{w(!1);const e=Object.keys(s);setTimeout((()=>{for(let a of e)"ok"!==a&&x.toast.error(s[a],{position:x.toast.POSITION.BOTTOM_RIGHT})}),250)}},handleDelete:async()=>{w(!0);const{status:e,message:s}=await u.default("DELETE",`https://csharpproject.somee.com/api/Invoice/${y.id}`,t.jwt);w(!1),200!==e&&x.toast.error("There was an error deleting this invoice",{position:x.toast.POSITION.BOTTOM_RIGHT}),sessionStorage.setItem("cogipToast","Success !"),k(!1),n(!1)}}):""]}):i.jsx("div",{className:"fetching",children:i.jsx("div",{className:"lds-dual-ring"})}),i.jsx(x.ToastContainer,{})]})}})),s.register("enOpT",(function(a,n){e(a.exports,"default",(()=>i));var t=s("7C6UD");var i=function({isModifying:e,setIsModifying:s,setSelectedCompany:a,originalCompany:n,isDeleting:i,setIsDeleting:l,originalContact:c,setSelectedContact:r,handleModif:o,handleDelete:d}){return e?t.jsxs("div",{className:"invoiceControls",children:[t.jsx("button",{type:"button",onClick:o,children:"Submit"}),t.jsx("button",{type:"button",onClick:()=>{s(!1),a(n),r(c)},children:"Cancel"})]}):i?t.jsxs("div",{className:"invoiceControls",children:[t.jsx("button",{type:"button",onClick:d,children:"Confirm"}),t.jsx("button",{type:"button",onClick:()=>{l(!1)},children:"Cancel"})]}):t.jsxs("div",{className:"invoiceControls",children:[t.jsx("button",{type:"button",onClick:()=>{s(!0)},children:"Modify"}),t.jsx("button",{type:"button",onClick:()=>{l(!0)},children:"Delete"})]})}})),s.register("4yknE",(function(a,n){e(a.exports,"default",(()=>i));var t=s("7C6UD");var i=function({companies:e,handleCompanyChange:s,currentCompany:a,name:n}){return t.jsxs("select",{onChange:a=>{let n=e.find((e=>e.name==a.target.value))?e.find((e=>e.name==a.target.value)):"";s(n)},defaultValue:a.name,name:n,required:!0,children:[t.jsx("option",{value:"",children:"Select a company"}),e.map((e=>t.jsx("option",{value:e.name,children:e.name},e.id)))]})}})),s.register("5H5kc",(function(s,a){e(s.exports,"invoiceVerify",(()=>n)),e(s.exports,"contactVerify",(()=>t)),e(s.exports,"companyVerify",(()=>i));const n=e=>{let s={};return e.reference||(s.reference="Please enter a reference"),e.company||(s.company="Please select a company"),e.amount||(s.amount="Please enter an amount"),e.received||(s.received="Please select a date"),!1!==e.paidStatus&&!0!==e.paidStatus&&(s.paid="Please select a paid status"),s.ok=!(Object.keys(s).length>0),s},t=e=>{let s={};return e.firstname||(s.firstname="Please enter a firstname"),e.lastname||(s.lastname="Please enter a lastname"),e.companies||(s.companies="Please select a contact"),e.email||(s.email="Please enter an email"),e.phonenumber||(s.phonenumber="Please enter a phone number"),s.ok=!(Object.keys(s).length>0),s},i=e=>{let s={};return e.name||(s.name="Please enter a name"),e.vat||(s.vat="Please enter a vat number"),e.town||(s.town="Please enter a town"),e.street||(s.street="Please enter a street"),e.streetnumber||(s.streetnumber="Please enter a street number"),e.country||(s.country="Please enter a country"),e.status||(s.status="Please select a status"),s.ok=!(Object.keys(s).length>0),s}})),s.register("gXTmb",(function(s,a){e(s.exports,"dateFormatter",(()=>n));const n=e=>`${e.slice(8,10)}-${e.slice(5,7)}-${e.slice(0,4)}`}));
//# sourceMappingURL=Invoice.be6e707f.js.map
