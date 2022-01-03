import React from "react";

function Homepage({ userdata }) {
    return (
        <main className="homepage">
            <section className="invoices card">
                <h2>Invoices</h2>
                <ul>
                    <li>
                        <span className="svg">
                            <i class="fas fa-arrow-down"></i>
                        </span>
                        <span className="invoiceName">Becode</span>
                        <span className="invoiceNumber">INV_012</span>
                        <span className="invoiceType">Client</span>
                        <span className="invoiceDate">12-02-1998</span>
                    </li>
                    <li>
                        <span className="svg">
                            <i class="fas fa-arrow-up"></i>
                        </span>
                        <span className="invoiceName">Mestdagh</span>
                        <span className="invoiceNumber">INV_011</span>
                        <span className="invoiceType">Provider</span>
                        <span className="invoiceDate">08-02-1998</span>
                    </li>
                    <li>
                        <span className="svg">
                            <i class="fas fa-arrow-up"></i>
                        </span>
                        <span className="invoiceName">Castro&Co</span>
                        <span className="invoiceNumber">INV_010</span>
                        <span className="invoiceType">Provider</span>
                        <span className="invoiceDate">01-02-1998</span>
                    </li>
                    <li>
                        <span className="svg">
                            <i class="fas fa-arrow-up"></i>
                        </span>
                        <span className="invoiceName">Castro&Co</span>
                        <span className="invoiceNumber">INV_010</span>
                        <span className="invoiceType">Provider</span>
                        <span className="invoiceDate">01-02-1998</span>
                    </li>
                    <li>
                        <span className="svg">
                            <i class="fas fa-arrow-up"></i>
                        </span>
                        <span className="invoiceName">Castro&Co</span>
                        <span className="invoiceNumber">INV_010</span>
                        <span className="invoiceType">Provider</span>
                        <span className="invoiceDate">01-02-1998</span>
                    </li>
                </ul>
            </section>
            <section className="contacts card">
                <h2>Contacts</h2>
                <ul>
                    <li>
                        <span className="svg">
                            <i class="fas fa-user"></i>
                        </span>
                        <span className="contactName">Baptiste Geron</span>
                        <span className="contactMail">bap@bap.com</span>
                        <span className="contactCompany">@Becode</span>
                    </li>
                    <li>
                        <span className="svg">
                            <i class="fas fa-user"></i>
                        </span>
                        <span className="contactName">Nicolas Jamar</span>
                        <span className="contactMail">n.jamar@becode.org</span>
                        <span className="contactCompany">@Becode</span>
                    </li>
                    <li>
                        <span className="svg">
                            <i class="fas fa-user"></i>
                        </span>
                        <span className="contactName">Caroline Coumanne</span>
                        <span className="contactMail">caroline@wingsgo.be</span>
                        <span className="contactCompany">@Wingsgo</span>
                    </li>
                    <li>
                        <span className="svg">
                            <i class="fas fa-user"></i>
                        </span>
                        <span className="contactName">Caroline Coumanne</span>
                        <span className="contactMail">caroline@wingsgo.be</span>
                        <span className="contactCompany">@Wingsgo</span>
                    </li>
                    <li>
                        <span className="svg">
                            <i class="fas fa-user"></i>
                        </span>
                        <span className="contactName">Caroline Coumanne</span>
                        <span className="contactMail">caroline@wingsgo.be</span>
                        <span className="contactCompany">@Wingsgo</span>
                    </li>
                </ul>
            </section>
            <section className="companies card">
                <h2>Companies</h2>
                <ul>
                    <li>
                        <span className="svg">
                            <i class="fas fa-building"></i>
                        </span>
                        <span className="companyName">Logala Enterprise</span>
                        <span className="companyType">Client</span>
                    </li>
                    <li>
                        <span className="svg">
                            <i class="fas fa-building"></i>
                        </span>
                        <span className="companyName">Wingsgo</span>
                        <span className="companyType">Client</span>
                    </li>
                    <li>
                        <span className="svg">
                            <i class="fas fa-building"></i>
                        </span>
                        <span className="companyName">Unilever</span>
                        <span className="companyType">Provider</span>
                    </li>
                    <li>
                        <span className="svg">
                            <i class="fas fa-building"></i>
                        </span>
                        <span className="companyName">Unilever</span>
                        <span className="companyType">Provider</span>
                    </li>
                    <li>
                        <span className="svg">
                            <i class="fas fa-building"></i>
                        </span>
                        <span className="companyName">Unilever</span>
                        <span className="companyType">Provider</span>
                    </li>
                </ul>
            </section>
        </main>
    );
}

export default Homepage;
