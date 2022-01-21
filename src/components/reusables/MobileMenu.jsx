import { useNavigate } from "react-router-dom";

function MobileMenu({ onLogout, displayStatus }) {
  let navigate = useNavigate();
  return (
    <div id="mobileMenu" className={displayStatus}>
      <ul className={"mobileMenu__list"}>
        <li className={"mobileMenu__list__item"} onClick={() => navigate("")}>
          Dashboard
        </li>
        <li style={{ cursor: "initial", pointerEvents: "none" }}>___</li>
        <li
          className={"mobileMenu__list__item"}
          onClick={() => navigate("/invoices")}
        >
          Invoices
        </li>
        <li
          className={"mobileMenu__list__item"}
          onClick={() => navigate("/contacts")}
        >
          Contacts
        </li>
        <li
          className={"mobileMenu__list__item"}
          onClick={() => navigate("/companies")}
        >
          Companies
        </li>
        <li
          className={"mobileMenu__list__item"}
          onClick={() => navigate("/reports")}
        >
          Reports
        </li>
        <li style={{ cursor: "initial", pointerEvents: "none" }}>___</li>
        <li
          className="mobileMenu__list__item"
          onClick={() => {
            navigate("/settings");
          }}
        >
          Settings
        </li>
        <li className={"mobileMenu__list__item"} onClick={onLogout}>
          Log out
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
