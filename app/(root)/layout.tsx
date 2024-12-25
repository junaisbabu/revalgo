import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { BreadcrumbHeader } from "@/components/breadcrumb-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <header className="w-full py-2 px-6 h-16 flex items-center">
          <BreadcrumbHeader />
        </header>
        <div className="p-6">{children}</div>
      </div>
    </SidebarProvider>
  );
}
