import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { GlobalSearch } from "../search/GlobalSearch";

interface MainLayoutProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export function MainLayout({ theme, toggleTheme }: MainLayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-navy-950 dark:text-slate-100">
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        onMenu={() => setMobileOpen(true)}
        onSearch={() => setSearchOpen(true)}
      />
      <Sidebar
        collapsed={collapsed}
        onCollapse={() => setCollapsed((value) => !value)}
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />
      <main
        className={`min-h-[calc(100vh-64px)] pt-16 transition-[margin] duration-200 ${
          collapsed ? "lg:ml-[72px]" : "lg:ml-[280px]"
        }`}
      >
        <Outlet />
      </main>
      <GlobalSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
