"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export function DashboardHeader() {
  const pathname = usePathname();

  const title = pathname.split("/").filter(Boolean)[0];

  return (
    <header className="w-full py-2 px-6 h-16 flex items-center justify-between shadow-sm border border-b">
      <h1 className="capitalize text-lg font-medium">{title || "Home"}</h1>
      <div>
        <Image
          className="rounded-full"
          src="https://github.com/shadcn.png"
          alt="User"
          width={36}
          height={36}
        />
      </div>
    </header>
  );
}
