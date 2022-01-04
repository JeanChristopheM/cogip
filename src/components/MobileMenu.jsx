import React from "react";

function MobileMenu({ onLogout, changePage }) {
    return (
        <div id="mobileMenu">
            <ul className={"mobileMenu__list card"}>
                <li
                    className={"mobileMenu__list__item"}
                    onClick={() => changePage("HOMEPAGE")}
                >
                    Home
                </li>
                <li
                    className={"mobileMenu__list__item"}
                    onClick={() => changePage("INVOICES")}
                >
                    Invoices
                </li>
                <li
                    className={"mobileMenu__list__item"}
                    onClick={() => changePage("CONTACTS")}
                >
                    Contacts
                </li>
                <li
                    className={"mobileMenu__list__item"}
                    onClick={() => changePage("COMPANIES")}
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
                    <i class="fas fa-times"></i>
                </li>
            </ul>
        </div>
    );
}

export default MobileMenu;
