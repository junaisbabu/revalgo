"use client";

import { Address, Name, User } from "@/types/user";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<User, unknown>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const { firstname, lastname } = row.getValue("name") as Name;
      return <div>{firstname + " " + lastname}</div>;
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "address",
    header: "City",
    cell: ({ row }) => {
      const { city } = row.getValue("address") as Address;
      return <div>{city}</div>;
    },
  },
];
