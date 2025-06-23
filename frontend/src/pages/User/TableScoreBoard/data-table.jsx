import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useReducer, useState } from "react";

export function DataTable({ columns, data }) {
  const [tableColumns] = useState(() => [...columns]);

  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  const columnsPerGroup = 9;
  const columnGroups = [];

  const [columnVisibility, setColumnVisibility] = useState({});

  const rerender = useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    state: {
      columnVisibility,
    },
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
    getPaginationRowModel: getPaginationRowModel(),
  });

  useEffect(() => {
    const allCols = table.getAllLeafColumns();
    const visibility = {};

    // Always show the first and last
    visibility[allCols[0].id] = true;
    visibility[allCols[allCols.length - 1].id] = true;

    const toggleable = allCols.slice(1, -1);
    const visibleGroup = toggleable.slice(0, columnsPerGroup);

    allCols.forEach((col) => {
      visibility[col.id] =
        col.id === allCols[0].id ||
        col.id === allCols[allCols.length - 1].id ||
        visibleGroup.includes(col);
    });

    setColumnVisibility(visibility);
    setActiveGroupIndex(0);
  }, [table]);

  const allColumns = table.getAllLeafColumns();
  const toggleableColumns = allColumns.slice(1, -1); // skip column 0

  for (let i = 0; i < toggleableColumns.length; i += columnsPerGroup) {
    columnGroups.push(toggleableColumns.slice(i, i + columnsPerGroup));
  }

  return (
    <div className="p-2">
      {/* This is a simple table with column visibility toggle. */}

      <div className="mb-4">
        {columnGroups.map((group, groupIndex) => {
          const allVisible = group.every((col) => col.getIsVisible());
          return (
            <button
              key={groupIndex}
              onClick={() => {
                const newVisibility = {};

                // Always show first and last columns
                newVisibility[allColumns[0].id] = true;
                newVisibility[allColumns[allColumns.length - 1].id] = true;

                // Show selected group
                toggleableColumns.forEach((col) => {
                  newVisibility[col.id] = group.includes(col);
                });

                setColumnVisibility(newVisibility);

                setActiveGroupIndex(groupIndex); // ← track active group
              }}
              className={`m-1 px-2 py-1 border rounded shadow text-sm ${
                activeGroupIndex === groupIndex ? "bg-blue-500 text-white" : ""
              }`}
            >
              Toggle Group {groupIndex + 1} {/*/ / Shows the group number */}
            </button>
          );
        })}
      </div>

      {/* // Table starts here */}
      <div className="overflow-x-auto">
        <div className="h-4" />
        <Table className="table-fixed w-full border-2 border-shadow-lg">
          <TableHeader>
            {/*  /// This is the header of the table */}
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    colSpan={header.colSpan}
                    className={
                      header.column.id === allColumns[0].id
                        ? "sticky left-0 w-25 z-10 bg-gray-900 text-white"
                        : header.column.id ===
                          allColumns[allColumns.length - 1].id
                        ? "sticky right-0 w-25 z-10 bg-gray-900 text-white"
                        : "w-15 z-10 bg-gray-800 text-white"
                    }
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className={
                      cell.column.id === allColumns[0].id
                        ? "sticky left-0 z-10 bg-gray-500"
                        : cell.column.id ===
                          allColumns[allColumns.length - 1].id
                        ? "sticky right-0 z-10 bg-gray-500"
                        : ""
                    }
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="h-5" />
      <p className="text-sm flex justify-center text-gray-400">
        Current player standings.
      </p>
      {/* This will show which columns are visible */}
      {/* <div className="h-4" />
      <pre>{JSON.stringify(table.getState().columnVisibility, null, 2)}</pre> */}
    </div>
  );
}
