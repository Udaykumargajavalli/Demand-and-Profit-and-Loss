import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Boxes,
  ChevronLeft,
  ChevronRight,
  Database,
  GitBranch,
  Layers3,
  Library,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { navigationCategories } from "../../config/navigation";
import { projectConfig } from "../../config/project";

interface SidebarProps {
  collapsed: boolean;
  onCollapse: () => void;
  mobileOpen: boolean;
  onMobileClose: () => void;
}

const icons = {
  overview: Library,
  architecture: Layers3,
  data: Database,
  engineering: Boxes,
  deployment: GitBranch,
  challenges: Settings2,
  results: Sparkles,
  resources: ShieldCheck,
};

export function Sidebar({
  collapsed,
  onCollapse,
  mobileOpen,
  onMobileClose,
}: SidebarProps) {
  const location = useLocation();
  const currentGroup = location.pathname.match(/^\/docs\/([^/]+)/)?.[1];
  const [openGroups, setOpenGroups] = useState<string[]>(() =>
    currentGroup ? [currentGroup] : ["overview"]
  );
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (currentGroup) {
      setOpenGroups((groups) =>
        groups.includes(currentGroup) ? groups : [...groups, currentGroup]
      );
    }
  }, [currentGroup]);

  const toggleGroup = (slug: string) => {
    setOpenGroups((groups) =>
      groups.includes(slug) ? groups.filter((group) => group !== slug) : [...groups, slug]
    );
  };

  const filteredCategories = navigationCategories
    .map((category) => ({
      ...category,
      pages: category.pages.filter((page) =>
        page.title.toLowerCase().includes(query.trim().toLowerCase())
      ),
    }))
    .filter(
      (category) =>
        !query.trim() ||
        category.title.toLowerCase().includes(query.trim().toLowerCase()) ||
        category.pages.length > 0
    );

  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          className="fixed inset-0 z-50 bg-slate-950/40 lg:hidden"
          aria-label="Close navigation"
          onClick={onMobileClose}
        />
      )}
      <aside
        className={`fixed bottom-0 left-0 top-0 z-[60] flex border-r border-slate-200 bg-white transition-[width,transform] duration-200 dark:border-slate-800 dark:bg-navy-950 lg:top-16 lg:z-30 ${
          collapsed ? "lg:w-[72px]" : "lg:w-[280px]"
        } ${
          mobileOpen ? "translate-x-0 w-[288px]" : "-translate-x-full w-[288px] lg:translate-x-0"
        }`}
      >
        <div className="flex w-full flex-col">
          <div className="hidden h-16 items-center border-b border-slate-200 px-4 lg:flex dark:border-slate-800">
            {!collapsed ? (
              <>
                <Link to="/" className="flex min-w-0 items-center gap-2.5">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-600 text-xs font-bold text-white shadow-sm">
                    DP
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold">{projectConfig.name}</div>
                  </div>
                </Link>
                <button type="button" onClick={onCollapse} className="icon-button ml-auto" aria-label="Collapse sidebar">
                  <ChevronLeft size={17} />
                </button>
              </>
            ) : (
              <button type="button" onClick={onCollapse} className="icon-button mx-auto" aria-label="Expand sidebar">
                <ChevronRight size={17} />
              </button>
            )}
          </div>

          <div className="flex h-16 items-center justify-between border-b border-slate-200 px-4 lg:hidden dark:border-slate-800">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-blue-600 text-xs font-bold text-white">DP</div>
              <span className="text-sm font-semibold">{projectConfig.name}</span>
            </Link>
            <button type="button" onClick={onMobileClose} className="icon-button" aria-label="Close navigation">
              <X size={20} />
            </button>
          </div>

          {!collapsed && (
            <div className="px-3 py-3">
              <label className="relative block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Filter navigation..."
                  className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-900"
                  aria-label="Filter navigation"
                />
              </label>
            </div>
          )}

          <nav className="sidebar-scroll flex-1 overflow-y-auto px-2 pb-6" aria-label="Documentation navigation">
            {filteredCategories.map((category) => {
              const Icon = icons[category.icon];
              const isOpen = query.trim() ? true : openGroups.includes(category.slug);
              const categoryActive = currentGroup === category.slug;
              return (
                <div key={category.slug} className="mb-1">
                  <button
                    type="button"
                    onClick={() => !collapsed && toggleGroup(category.slug)}
                    className={`flex h-10 w-full items-center rounded-lg px-2 text-left text-sm transition ${
                      categoryActive
                        ? "font-medium text-slate-900 dark:text-slate-100"
                        : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900"
                    } ${collapsed ? "justify-center" : "gap-2"}`}
                    title={collapsed ? category.title : undefined}
                    aria-expanded={isOpen}
                  >
                    <Icon size={17} className={categoryActive ? "text-blue-600" : "text-slate-400"} />
                    {!collapsed && (
                      <>
                        <span className="min-w-0 flex-1 truncate">{category.title}</span>
                        <ChevronRight
                          size={14}
                          className={`text-slate-400 transition-transform ${isOpen ? "rotate-90" : ""}`}
                        />
                      </>
                    )}
                  </button>
                  {!collapsed && isOpen && (
                    <div className="mb-2 ml-4 border-l border-slate-200 pl-2 dark:border-slate-800">
                      {category.pages.map((page) => {
                        const href = `/docs/${category.slug}/${page.slug}`;
                        const active = location.pathname === href;
                        return (
                          <Link
                            key={page.slug}
                            to={href}
                            className={`block rounded-md px-3 py-1.5 text-[13px] leading-5 transition ${
                              active
                                ? "border-l-2 border-blue-600 bg-blue-50 font-medium text-blue-700 -ml-px dark:bg-blue-500/10 dark:text-blue-300"
                                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-100"
                            }`}
                          >
                            {page.title}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
            {filteredCategories.length === 0 && !collapsed && (
              <p className="px-3 py-6 text-center text-sm text-slate-500">No navigation matches.</p>
            )}
          </nav>
        </div>
      </aside>
    </>
  );
}
