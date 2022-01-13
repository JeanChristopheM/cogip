import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTable, useSortBy } from "react-table";

function Companies({ companies }) {
  const navigate = useNavigate();
  const handleAdd = (e) => {
    navigate(`/${e.target.id}`);
  };

  /* SETTING UP TABLE */
  const data = useMemo(() => {
    let results = [];
    for (let entry of companies) {
      let obj = {
        icon:
          entry.status == "Supplier" ? (
            <i className="fas fa-parachute-box"></i>
          ) : (
            <i className="fas fa-shopping-basket"></i>
          ),
        col1: entry.name,
        col2: entry.status,
        col3: entry.vat,
        col4: `${entry.added.slice(8, 10)}-${entry.added.slice(
          5,
          7
        )}-${entry.added.slice(0, 4)}`,
        id: entry.id,
      };
      results.push(obj);
    }
    return results;
  }, []);
  const columns = useMemo(
    () => [
      {
        Header: "",
        accessor: "icon",
        className: "companyIcon",
        disableSortBy: true,
      },
      {
        Header: "Name",
        accessor: "col1",
        className: "companyName",
      },
      { Header: "Status", accessor: "col2", className: "companyType" },
      { Header: "VAT", accessor: "col3", className: "companyVat" },
      { Header: "Added", accessor: "col4", className: "companyAdded" },
      { Header: "ID", accessor: "id", className: "companyId" },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
        initialState: {
          sortBy: [{ id: "col1", desc: false }],
          hiddenColumns: ["id"],
        },
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
        {/* <ul>
          {companies.map((entry) => {
            return <CompanyLi company={entry} key={entry.id} />;
          })}
        </ul> */}

        <table {...getTableProps()} className="table">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(
                      column.getSortByToggleProps({
                        className: column.className,
                      })
                    )}
                    style={{
                      color: "rgb(39, 76, 119)",
                      fontWeight: "bold",
                      cursor: "pointer",
                      fontSize: "1.2rem",
                      padding: "1rem",
                    }}
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <i
                            style={{
                              color: "rgb(39, 76, 119)",
                              fontSize: ".9rem",
                              paddingLeft: ".2rem",
                            }}
                            class="fas fa-arrow-alt-circle-up"
                          ></i>
                        ) : (
                          <i
                            style={{
                              color: "rgb(39, 76, 119)",
                              fontSize: ".9rem",
                              paddingLeft: ".2rem",
                            }}
                            class="fas fa-arrow-alt-circle-down"
                          ></i>
                        )
                      ) : (
                        <i
                          style={{
                            color: "rgb(135, 156, 179)",
                            fontSize: ".9rem",
                            paddingLeft: ".2rem",
                            opacity: ".3",
                          }}
                          class="fas fa-arrow-alt-circle-down"
                        ></i>
                      )}
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
                        style={
                          cell.column.Header == "Name"
                            ? {
                                padding: "1rem",
                                //border: "solid 1px rgb(135, 156, 179)",
                                cursor: "pointer",
                              }
                            : {
                                padding: "1rem",
                                //border: "solid 1px rgb(135, 156, 179)",
                              }
                        }
                        onClick={
                          cell.column.Header == "Name"
                            ? () => {
                                navigate(
                                  `/company/${cell.row.allCells[5].value}`
                                );
                              }
                            : () => {}
                        }
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
