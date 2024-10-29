"use client";
import React, { useState, useMemo } from "react";
import DevTable from "../(dev-table)/dev-table";
import DevCheckboxV2 from "../../checkboxes/(dev-checkbox-v2)/dev-checkbox-v2";
import DevSelectV3 from "../../selects/(dev-select-v3)/dev-select-v3";
import DevPopoverV1 from "../../popovers/(dev-popover-v1)/dev-popover-v1";
import DevInputV1 from "../../inputs/(dev-input-v1)/dev-input-v1";
import DevPaginationV2 from "../../pagination/(dev-pagination-v2)/dev-pagination-v2";

const DataTable = ({
  allColumns,
  data,
  itemsPerPage,
  currentPage,
  onPageChange,
  totalData,
  loading = false,
  stickyColumns = [],
}) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("");
  const [visibleColumns, setVisibleColumns] = useState([
    "select",
    ...allColumns,
  ]);
  const totalPages = Math.ceil(totalData / itemsPerPage);

  // Filter data based on search criteria
  const filteredData = useMemo(() => {
    if (!searchTerm.trim() || !searchBy) return data;

    return data.filter((row) => {
      const value = row[searchBy];
      return value?.toString().toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [data, searchTerm, searchBy]);

  const handleRowSelection = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(filteredData.map((item) => item.id));
    }
    setSelectAll(!selectAll);
  };

  const isRowSelected = (id) => selectedRows.includes(id);

  const toggleColumnVisibility = (column) => {
    setVisibleColumns((prev) =>
      prev.includes(column)
        ? prev.filter((col) => col !== column)
        : [...prev, column]
    );
  };

  // Handle search field change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (currentPage !== 1) {
      onPageChange(1); // Reset to first page when search changes
    }
  };

  // Handle search field category change
  const handleSearchByChange = (value) => {
    setSearchBy(value);
    if (currentPage !== 1) {
      onPageChange(1); // Reset to first page when search category changes
    }
  };

  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-between gap-2">
        <div className="flex gap-2">
          <DevInputV1
            reverseIcon
            icon={
              <div className="text-sm *:!ring-0 *:!border-0">
                <DevSelectV3
                  placeholder="Search By"
                  onValueChange={handleSearchByChange}
                  options={allColumns.map((column) => ({
                    value: column,
                    label: column,
                  }))}
                />
              </div>
            }
            type="text"
            placeholder="Search..."
            rounded="md"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <DevPopoverV1
          button={
            <button className="bg-ACCENT p-1.5 px-4 rounded-md text-white">
              Columns
            </button>
          }
        >
          <div className="grid grid-cols-1 p-2">
            {allColumns.map((column) => (
              <label
                key={column}
                className="flex *:scale-75 items-center cursor-pointer space-x-2"
              >
                <DevCheckboxV2
                  disabled={column === "select"}
                  type="checkbox"
                  checked={visibleColumns.includes(column)}
                  onChange={() => toggleColumnVisibility(column)}
                />
                <span>{column}</span>
              </label>
            ))}
          </div>
        </DevPopoverV1>
      </div>

      {loading ? (
        <div className="w-full h-32 grid place-items-center">Loading...</div>
      ) : (
        <DevTable
          data={filteredData.map((row) => {
            const filteredRow = {
              select: (
                <div className="bg-LIGHT w-fit dark:bg-DARK p-0.5 rounded-lg text-lg">
                  <DevCheckboxV2
                    id={`select-${row.id}`}
                    checked={isRowSelected(row.id)}
                    onChange={() => handleRowSelection(row.id)}
                  />
                </div>
              ),
            };
            visibleColumns.forEach((col) => {
              if (col !== "select") {
                filteredRow[col] = row[col];
              }
            });
            return filteredRow;
          })}
          initialPage={1}
          stickyColumns={["select", ...stickyColumns]}
          itemsPerPage={itemsPerPage}
          styleRows={filteredData.map((row, index) => ({
            position: index,
            style: isRowSelected(row.id)
              ? "hover:!bg-LIGHT hover:dark:!bg-DARK bg-LIGHT dark:bg-DARK"
              : "",
          }))}
          columns={visibleColumns.map((col) =>
            col === "select"
              ? {
                  head: "select",
                  element: (
                    <div className="bg-LIGHT w-fit dark:bg-DARK p-0.5 rounded-lg text-lg">
                      <DevCheckboxV2
                        id="select-all"
                        checked={selectAll}
                        onChange={handleSelectAll}
                      />
                    </div>
                  ),
                }
              : col
          )}
        />
      )}

      <div className="grid place-items-center *:!p-0.5">
        <DevPaginationV2
          onPageChange={onPageChange}
          totalPages={totalPages}
          initialPage={currentPage}
        />
      </div>
    </div>
  );
};

export default DataTable;
