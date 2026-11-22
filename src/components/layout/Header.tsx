import { ChevronRight, Github, Menu, Moon, Search, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { allNavigationPages } from "../../config/navigation";
import { projectConfig } from "../../config/project";

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
  onMenu: () => void;
  onSearch: () => void;
}

export function Header({ theme, toggleTheme, onMenu, onSearch }: HeaderProps) {
  const location = useLocation();
  const match = location.pathname.match(/^\/docs\/([^/]+)\/([^/]+)$/);
  const current = match
    ? allNavigationPages.find(
        (page) => page.category.slug === match[1] && page.slug === match[2]
      )
    : undefined;

  return (
    <header className="fixed inset-x-0 top-0 z-40 h-16 border-b border-slate-200/80 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-navy-950/95">
      <div className="flex h-full items-center gap-3 px-4 lg:px-6">
        <button
          type="button"
          onClick={onMenu}
          className="icon-button lg:hidden"
          aria-label="Open navigation"
        >
          <Menu size={20} />
        </button>

        <Link to="/" className="flex min-w-0 items-center gap-2 lg:hidden">
          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-blue-600 text-sm font-bold text-white">
            DP
          </div>
          <span className="truncate text-sm font-semibold">{projectConfig.name}</span>
        </Link>

        <nav className="hidden min-w-0 items-center gap-1 text-sm lg:flex" aria-label="Breadcrumb">
          <Link to="/" className="breadcrumb-link">
            {projectConfig.name}
          </Link>
          {current ? (
            <>
              <ChevronRight size={14} className="shrink-0 text-slate-400" />
              <Link
                to={`/docs/${current.category.slug}/${current.slug}`}
                className="truncate font-medium text-slate-700 dark:text-slate-200"
              >
                {current.title}
              </Link>
            </>
          ) : (
            <>
              <ChevronRight size={14} className="text-slate-400" />
              <span className="font-medium text-slate-700 dark:text-slate-200">Overview</span>
            </>
          )}
        </nav>

        <div className="ml-auto flex items-center gap-1.5">
          <button
            type="button"
            onClick={onSearch}
            className="hidden h-9 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-500 transition hover:border-slate-300 hover:bg-white md:flex dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
            aria-label="Open global search"
          >
            <Search size={16} />
            <span className="hidden xl:inline">Search</span>
            <kbd className="ml-4 hidden rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-slate-400 xl:inline dark:border-slate-700 dark:bg-slate-950">
              Ctrl K
            </kbd>
          </button>
          <button type="button" onClick={onSearch} className="icon-button md:hidden" aria-label="Search">
            <Search size={18} />
          </button>
          <a
            href={projectConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="icon-button"
            aria-label="Open example GitHub repository"
          >
            <Github size={18} />
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            className="icon-button"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
