import React from "react";

interface Column {
  head: string;
  element?: React.ReactNode;
}

interface StyleRow {
  position: number;
  style: string; // Tailwind CSS classes
}

interface DevTableProps {
  data: Record<string, React.ReactNode>[];
  itemsPerPage?: number;
  initialPage?: number;
  columns?: (string | Column)[];
  stickyColumns?: string[];
  styleRows?: StyleRow[]; // New prop for row styles
}

const DevTable = ({
  data,
  itemsPerPage = 1,
  initialPage = 1,
  columns = [],
  stickyColumns = [],
  styleRows = [], // Default empty array
}: DevTableProps) => {
  const headers = columns.length
    ? columns.map((col) => (typeof col === "string" ? col : col.head))
    : data.length
    ? Object.keys(data[0])
    : [];

  if (columns.length) {
    data.forEach((row, index) => {
      const rowKeys = Object.keys(row);
      const invalidKeys = rowKeys.filter((key) => !headers.includes(key));
      if (invalidKeys.length > 0) {
        throw new Error(
          `Data at index ${index} contains invalid columns: ${invalidKeys.join(
            ", "
          )}. Allowed columns are: ${headers.join(", ")}.`
        );
      }
    });
  }

  if (!data.length && !columns.length) {
    return (
      <div className="text-center p-4 text-ACCENT/80">No data available</div>
    );
  }

  const startIndex = (initialPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const formatCellValue = (value: any) => {
    if (React.isValidElement(value)) return value;
    if (value === null || value === undefined) return "-";
    if (typeof value === "boolean") return value.toString();
    if (typeof value === "object") return JSON.stringify(value);
    return value;
  };

  const getRowStyle = (rowIndex: number) => {
    const rowStyle = styleRows.find((style) => style.position === rowIndex);
    return rowStyle ? rowStyle.style : "";
  };

  return (
    <div className="w-full">
      <div className="overflow-x-auto shadow-sm rounded-lg border border-ACCENT/30">
        <table className="min-w-full divide-y divide-ACCENT/30">
          <thead className="bg-ACCENT border-b border-ACCENT text-white">
            <tr>
              {columns.map((col, index) => {
                const header = typeof col === "string" ? col : col.head;
                const headerElement =
                  typeof col === "string" ? header : col.element || header;

                return (
                  <th
                    key={header}
                    className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider 
                      ${
                        stickyColumns.includes(header) &&
                        "sticky z-10 bg-ACCENT"
                      } 
                      ${
                        stickyColumns.includes(header) &&
                        headers.indexOf(header) === headers.length - 1
                          ? "right-0"
                          : "left-0"
                      }`}
                  >
                    {headerElement}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="divide-y divide-ACCENT/30">
            {data.length ? (
              currentData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`hover:bg-LIGHT/50 hover:dark:bg-DARK/50  ${getRowStyle(
                    rowIndex
                  )}`}
                >
                  {headers.map((header) => (
                    <td
                      key={`${rowIndex}-${header}`}
                      className={`px-6 py-4 whitespace-nowrap text-sm  
                        ${
                          stickyColumns.includes(header) &&
                          "sticky z-10 bg-LIGHT dark:bg-DARK"
                        } 
                        ${
                          stickyColumns.includes(header) &&
                          headers.indexOf(header) === headers.length - 1
                            ? "right-0"
                            : "left-0"
                        }`}
                    >
                      {formatCellValue(row[header])}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={headers.length}
                  className="px-6 py-4 text-center text-ACCENT/80"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DevTable;
