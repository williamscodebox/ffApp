// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
//   id: string
//   amount: number
//   status: "pending" | "processing" | "success" | "failed"
//   email: string
// }

export const columns = [
  {
    accessorKey: "Name",
    cell: (info) => info.getValue(),
  },
  {
    accessorFn: (row) => row.Week_1,
    id: "Week 1",
    cell: (info) => info.getValue(),
    // header: () => <span>Last Name</span>,
  },
  {
    accessorFn: (row) => row.Week_2,
    id: "Week 2",
    cell: (info) => info.getValue(),
    // header: () => <span>Last Name</span>,
  },

  {
    accessorFn: (row) => row.Week_3,
    id: "Week 3",
    cell: (info) => info.getValue(),
    // header: () => <span>Last Name</span>,
  },
  {
    accessorFn: (row) => row.Week_4,
    id: "Week 4",
    cell: (info) => info.getValue(),
    // header: () => <span>Last Name</span>,
  },
  {
    accessorFn: (row) => row.Week_5,
    id: "Week 5",
    cell: (info) => info.getValue(),
    // header: () => <span>Last Name</span>,
  },
  {
    accessorFn: (row) => row.Week_6,
    id: "Week 6",
    cell: (info) => info.getValue(),
    // header: () => <span>Last Name</span>,
  },
  {
    accessorFn: (row) => row.Week_7,
    id: "Week 7",
    cell: (info) => info.getValue(),
    // header: () => <span>Last Name</span>,
  },
  {
    accessorFn: (row) => row.Week_8,
    id: "Week 8",
    cell: (info) => info.getValue(),
    // header: () => <span>Last Name</span>,
  },
  {
    accessorFn: (row) => row.Week_9,
    id: "Week 9",
    cell: (info) => info.getValue(),
    // header: () => <span>Last Name</span>,
  },
  {
    accessorFn: (row) => row.Week_10,
    id: "Week 10",
    cell: (info) => info.getValue(),
    // header: () => <span>Last Name</span>,
  },
  {
    accessorFn: (row) => row.Week_11,
    id: "Week 11",
    cell: (info) => info.getValue(),
    // header: () => <span>Last Name</span>,
  },
  {
    accessorFn: (row) => row.Week_12,
    id: "Week 12",
    cell: (info) => info.getValue(),
    // header: () => <span>Last Name</span>,
  },
  {
    accessorFn: (row) => row.Week_13,
    id: "Week 13",
    cell: (info) => info.getValue(),
    // header: () => <span>Last Name</span>,
  },
  {
    accessorFn: (row) => row.Week_14,
    id: "Week 14",
    cell: (info) => info.getValue(),
    // header: () => <span>Last Name</span>,
  },
  {
    accessorFn: (row) => row.Week_15,
    id: "Week 15",
    cell: (info) => info.getValue(),
    // header: () => <span>Last Name</span>,
  },
  {
    accessorFn: (row) => row.Week_16,
    id: "Week 16",
    cell: (info) => info.getValue(),
    // header: () => <span>Last Name</span>,
  },
  {
    accessorFn: (row) => row.Week_17,
    id: "Week 17",
    cell: (info) => info.getValue(),
    // header: () => <span>Last Name</span>,
  },
  {
    accessorFn: (row) => row.Week_18,
    id: "Week 18",
    cell: (info) => info.getValue(),
    // header: () => <span>Last Name</span>,
  },
  {
    accessorFn: (row) => row.Total,
    id: "Total Points",
    cell: (info) => info.getValue(),
    // header: () => <span>Last Name</span>,
  },

  // {
  //   accessorKey: "progress",
  //   header: "Profile Progress",
  //   footer: (props) => props.column.id,
  // },
];
