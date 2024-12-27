"use client";

import { Cart } from "@/types/cart";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Cart>[] = [
  {
    accessorKey: "userId",
    header: "User ID",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"));

      const formatDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      return <div>{formatDate}</div>;
    },
  },
  {
    accessorKey: "products",
    header: "Products",
    cell: ({ row }) => {
      const products = (row.getValue("products") as []) || [];
      return (
        <div className="flex flex-wrap items-center gap-4">
          {products.map(({ productId, quantity }) => {
            return (
              <div key={productId} className="flex gap-2 bg-muted p-2 rounded">
                <div>
                  PID: <span className="font-bold">{productId}</span>
                </div>
                <div>
                  QTY: <span className="font-bold">{quantity}</span>
                </div>
              </div>
            );
          })}
        </div>
      );
    },
  },
];
