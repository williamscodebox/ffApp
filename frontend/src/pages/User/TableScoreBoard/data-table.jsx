import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useReducer, useState } from "react";

export function DataTable({ columns, data }) {
  const [tableColumns] = useState(() => [...columns]);
  const [columnVisibility, setColumnVisibility] = useState({});

  const columnsPerGroup = 5;
  const columnGroups = [];

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

  const allColumns = table.getAllLeafColumns();
  const toggleableColumns = allColumns.slice(1); // skip column 0

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
                group.forEach((col) => col.toggleVisibility(!allVisible));
              }}
              className="m-1 px-2 py-1 border rounded shadow text-sm"
            >
              Toggle Group {groupIndex + 1}
            </button>
          );
        })}
      </div>

      {/* // Table starts here */}
      <div className="h-4" />
      <Table>
        <TableHeader>
          {/*  /// This is the header of the table */}
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} colSpan={header.colSpan}>
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
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="h-4" />
      {/* This will show which columns are visible */}
      {/* <div className="h-4" />
      <pre>{JSON.stringify(table.getState().columnVisibility, null, 2)}</pre> */}
    </div>
  );
}
