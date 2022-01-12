import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTable, useSortBy } from "react-table";
import CompanyLi from "./CompanyLi.jsx";

function Companies({ companies }) {
  const navigate = useNavigate();
  const handleAdd = (e) => {
    navigate(`/${e.target.id}`);
  };

  /* SETTING UP TABLE */
  console.log(companies);
  const data = useMemo(() => {
    let results = [];
    for (let entry of companies) {
      let obj = {
        icon:
          entry.status == "Supplier" ? (
            <i class="fas fa-parachute-box"></i>
          ) : (
            <i class="fas fa-shopping-basket"></i>
          ),
        col1: entry.name,
        col2: entry.status,
        col3: entry.vat,
        col4: `${entry.added.slice(8, 10)}-${entry.added.slice(
          5,
          7
        )}-${entry.added.slice(0, 4)}`,
      };
      results.push(obj);
    }
    return results;
  }, []);
  const columns = useMemo(
    () => [
      { Header: "", accessor: "icon", className: "companyIcon" },
      {
        Header: "Name",
        accessor: "col1",
        className: "companyName",
      },
      { Header: "Status", accessor: "col2", className: "companyType" },
      { Header: "VAT", accessor: "col3", className: "companyVat" },
      { Header: "Added", accessor: "col4", className: "companyAdded" },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
        initialState: { sortBy: [{ id: "col2", desc: false }] },
      },
      useSortBy
    );

  return (
    <main>
      <section className="companies card">
        <h2>
          Companies
          <i
            className="fas fa-plus-square plusButton"
            id="companyAdd"
            onClick={handleAdd}
          ></i>
        </h2>
        <ul>
          {companies.map((entry) => {
            return <CompanyLi company={entry} key={entry.id} />;
          })}
        </ul>

        <table {...getTableProps()} style={{ width: "100%" }}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(
                      {
                        className: column.className,
                      },
                      column.getSortByToggleProps()
                    )}
                    style={{
                      color: "rgb(39, 76, 119)",
                      fontWeight: "bold",
                      cursor: "pointer",
                      fontSize: "1.2rem",
                    }}
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔼"
                          : " 🔽"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps({
                          className: cell.column.className,
                        })}
                        style={{
                          padding: "10px",
                          //border: "solid 1px rgb(135, 156, 179)",
                        }}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default Companies;
