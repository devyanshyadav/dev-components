import React from "react";

interface DevTableProps {
  data: Record<string, React.ReactNode>[]; // Allow any ReactNode type in data
  itemsPerPage?: number;
  initialPage?: number;
  columns?: string[]; // Predefined columns in case of no data
  stickyColumns?: string[]; // Columns to be sticky
}

const DevTable = ({
  data,
  itemsPerPage = 1,
  initialPage = 1,
  columns = [],
  stickyColumns = [],
}: DevTableProps) => {
  // Determine headers based on columns prop or data keys
  const headers = columns.length
    ? columns
    : data.length
    ? Object.keys(data[0])
    : [];

  // Validate data against predefined columns
  if (columns.length) {
    data.forEach((row, index) => {
      const rowKeys = Object.keys(row);
      const invalidKeys = rowKeys.filter((key) => !columns.includes(key));

      if (invalidKeys.length > 0) {
        throw new Error(
          `Data at index ${index} contains invalid columns: ${invalidKeys.join(
            ", "
          )}. Allowed columns are: ${columns.join(", ")}.`
        );
      }
    });
  }

  // Show message if no data and no predefined columns
  if (!data.length && !columns.length) {
    return (
      <div className="text-center p-4 text-ACCENT/80">No data available</div>
    );
  }

  // Calculate pagination
  const startIndex = (initialPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  // Format cell value based on type, allowing React elements
  const formatCellValue = (value: any) => {
    if (React.isValidElement(value)) return value;
    if (value === null || value === undefined) return "-";
    if (typeof value === "boolean") return value.toString();
    if (typeof value === "object") return JSON.stringify(value);
    return value;
  };

  return (
    <div className="w-full">
      <div className="overflow-x-auto shadow-sm rounded-lg border border-ACCENT/30">
        <table className={`min-w-full divide-y divide-ACCENT/30`}>
          <thead className="bg-ACCENT border-b border-ACCENT text-white">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className={`px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider 
                    ${
                      stickyColumns.includes(header) && "sticky z-10 bg-ACCENT "
                    } 
                    ${
                      stickyColumns.includes(header) &&
                      headers.indexOf(header) === headers.length - 1
                        ? "right-0"
                        : "left-0"
                    }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-ACCENT/30">
            {data.length ? (
              currentData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className=" hover:!bg-LIGHT hover:dark:!bg-DARK transition-colors"
                >
                  {headers.map((header) => (
                    <td
                      key={`${rowIndex}-${header}`}
                      className={`px-6 py-4  whitespace-nowrap text-sm  
                      ${
                        stickyColumns.includes(header) &&
                        "sticky z-10 bg-LIGHT dark:bg-DARK "
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
