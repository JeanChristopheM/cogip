import { useNavigate } from "react-router-dom";

function MobileMenu({ onLogout }) {
    let navigate = useNavigate();
    return (
        <div id="mobileMenu">
            <ul className={"mobileMenu__list card"}>
                <li
                    className={"mobileMenu__list__item"}
                    onClick={() => navigate("/home")}
                >
                    Home
                </li>
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
                <li style={{ cursor: "initial", pointerEvents: "none" }}>
                    ___
                </li>
                <li className={"mobileMenu__list__item"} onClick={onLogout}>
                    Log out
                </li>
                <li id="menuCross">
                    <i className="fas fa-times"></i>
                </li>
            </ul>
        </div>
    );
}

export default MobileMenu;
