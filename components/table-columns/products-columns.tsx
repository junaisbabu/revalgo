"use client";

import { Product } from "@/types/product";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "image",
    header: () => <div className="text-center">Product</div>,
    cell: ({ row }) => {
      return (
        <div className="relative w-12 h-12 overflow-hidden mx-auto">
          <Image
            className="object-contain"
            src={row.getValue("image")}
            alt={row.getValue("title")}
            fill
          />
        </div>
      );
    },
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      return <div>&#36;{row.getValue("price")}</div>;
    },
  },
];
