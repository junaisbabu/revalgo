import { menuItems } from "@/constants/menu-items";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="h-[calc(100dvh-112px)] flex items-center justify-center flex-wrap gap-6">
        {menuItems.map(({ title, icon: Icon, url }) => {
          if (url === "/") return null;
          return (
            <div
              key={title}
              className="w-40 h-40 rounded bg-secondary hover:text-primary-foreground hover:bg-secondary-foreground transition-all"
            >
              <Link
                className="w-full h-full flex flex-col items-center justify-center gap-2"
                href={url}
              >
                <Icon size={32} /> <span className="font-medium">{title}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
