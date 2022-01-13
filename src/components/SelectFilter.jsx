import { useMemo } from "react";
const SelectFilter = ({
  column: { filterValue, setFilter, preFilteredRows, id },
}) => {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <select
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      className="selectFilter"
    >
      <option value="" className="selectFiler__option">
        All
      </option>
      {options.map((option, i) => (
        <option key={i} value={option} className="selectFiler__option">
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectFilter;
