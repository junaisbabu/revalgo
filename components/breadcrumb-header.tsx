"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export function BreadcrumbHeader() {
  const pathname = usePathname();

  const urls = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {urls.length ? (
          urls.map((url) => (
            <>
              <BreadcrumbItem key={url}>
                <BreadcrumbLink className="capitalize" href={url}>
                  {url}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="last:hidden" />
            </>
          ))
        ) : (
          <BreadcrumbItem key="/">
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
