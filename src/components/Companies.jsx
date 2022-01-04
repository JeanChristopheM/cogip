import CompanyLi from "./CompanyLi.jsx";

function Companies({ data }) {
    return (
        <main>
            <section className="companies card">
                <h2>Companies</h2>
                <ul>
                    {data.map((entry) => {
                        return <CompanyLi data={entry} key={entry.id} />;
                    })}
                </ul>
            </section>
        </main>
    );
}

export default Companies;
