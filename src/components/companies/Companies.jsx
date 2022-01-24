import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTable, useSortBy, useFilters } from "react-table";
import SelectFilter from "../reusables/SelectFilter";
import { dateFormatter } from "../../logic/dateFormatter";

function Companies({ companies }) {
  const navigate = useNavigate();
  const handleAdd = (e) => {
    navigate(`/${e.target.id}`);
  };

  /* SETTING UP TABLE */
  const data = useMemo(() => {
    let results = [];
    for (let company of companies) {
      let obj = {
        icon:
          company.status == "Supplier" ? (
            <i className="fas fa-parachute-box"></i>
          ) : (
            <i className="fas fa-shopping-basket"></i>
          ),
        col1: company.name,
        col2: company.status,
        col3: company.vat,
        col4: dateFormatter(company.added),
        id: company.id,
      };
      results.push(obj);
    }
    return results;
  }, [companies]);
  const columns = useMemo(
    () => [
      {
        Header: "",
        accessor: "icon",
        className: "companyIcon",
        disableSortBy: true,
        disableFilters: true,
      },
      {
        Header: "Name",
        accessor: "col1",
        className: "companyName",
        disableFilters: true,
      },
      {
        Header: "Status",
        accessor: "col2",
        className: "companyType",
        Filter: SelectFilter,
        filter: "includes",
      },
      {
        Header: "VAT",
        accessor: "col3",
        className: "companyVat",
        disableFilters: true,
      },
      {
        Header: "Added",
        accessor: "col4",
        className: "companyAdded",
        disableFilters: true,
      },
      {
        Header: "ID",
        accessor: "id",
        className: "companyId",
        disableFilters: true,
      },
    ],
    [companies]
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
      useFilters,
      useSortBy
    );

  return (
    <main>
      <section className="companies card">
        <h2>
          Companies
          <button
            type="button"
            id="companyAdd"
            onClick={handleAdd}
            style={{ padding: "0 .5rem" }}
          >
            +
          </button>
        </h2>

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
                  >
                    <div className="thContainer">
                      {column.render("Header")}
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <i className="fas fa-arrow-alt-circle-up sorted"></i>
                          ) : (
                            <i className="fas fa-arrow-alt-circle-down sorted"></i>
                          )
                        ) : (
                          <i className="fas fa-arrow-alt-circle-down unSorted"></i>
                        )}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className={"filtersRow"}
              >
                {headerGroup.headers.map((column) => (
                  <th
                    key={column.id}
                    {...column.getHeaderProps({
                      className: column.className,
                    })}
                  >
                    <div className="filterContainer">
                      {column.canFilter ? column.render("Filter") : null}
                    </div>
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