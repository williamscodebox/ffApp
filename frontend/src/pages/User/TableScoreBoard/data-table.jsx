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

// interface DataTableProps<TData, TValue> {
//   columns: ColumnDef<TData, TValue>[]
//   data: TData[]
// }

export function DataTable({ columns, data }) {
  const [tableColumns] = useState(() => [...columns]);
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

  return (
    // <div className="rounded-md border">
    //   <Table>
    //     <TableHeader>
    //       {table.getHeaderGroups().map((headerGroup) => (
    //         <TableRow key={headerGroup.id}>
    //           {headerGroup.headers.map((header) => {
    //             return (
    //               <TableHead key={header.id}>
    //                 {header.isPlaceholder
    //                   ? null
    //                   : flexRender(
    //                       header.column.columnDef.header,
    //                       header.getContext()
    //                     )}
    //               </TableHead>
    //             );
    //           })}
    //         </TableRow>
    //       ))}
    //     </TableHeader>
    //     <TableBody>
    //       {table.getRowModel().rows?.length ? (
    //         table.getRowModel().rows.map((row) => (
    //           <TableRow
    //             key={row.id}
    //             data-state={row.getIsSelected() && "selected"}
    //           >
    //             {row.getVisibleCells().map((cell) => (
    //               <TableCell key={cell.id}>
    //                 {flexRender(cell.column.columnDef.cell, cell.getContext())}
    //               </TableCell>
    //             ))}
    //           </TableRow>
    //         ))
    //       ) : (
    //         <TableRow>
    //           <TableCell
    //             colSpan={tableColumns.length}
    //             className="h-24 text-center"
    //           >
    //             No results.
    //           </TableCell>
    //         </TableRow>
    //       )}
    //     </TableBody>
    //   </Table>
    // </div>
    <div className="p-2">
      {/* This is a simple table with column visibility toggle. */}
      <div className="inline-block border border-black shadow rounded">
        <div className="px-1 border-b border-black">
          <label>
            <input
              {...{
                type: "checkbox",
                checked: table.getIsAllColumnsVisible(),
                onChange: table.getToggleAllColumnsVisibilityHandler(),
              }}
            />{" "}
            Toggle All
          </label>
        </div>
        {table.getAllLeafColumns().map((column) => {
          return (
            <div key={column.id} className="px-1">
              <label>
                <input
                  {...{
                    type: "checkbox",
                    checked: column.getIsVisible(),
                    onChange: column.getToggleVisibilityHandler(),
                  }}
                />{" "}
                {column.id}
              </label>
            </div>
          );
        })}
      </div>
      {/* // Table starts here */}
      <div className="h-4" />
      <Table>
        <TableHeader>
          {" "}
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
      <div className="h-4" />
      <pre>{JSON.stringify(table.getState().columnVisibility, null, 2)}</pre>
    </div>
  );
}
