import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, FileText, Search, X } from "lucide-react";
import { getDocumentationPages } from "../../utils/documentation";

interface GlobalSearchProps {
  open: boolean;
  onClose: () => void;
}

export function GlobalSearch({ open, onClose }: GlobalSearchProps) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const pages = useMemo(() => getDocumentationPages(), []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      window.setTimeout(() => inputRef.current?.focus(), 40);
    }
  }, [open]);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return pages.slice(0, 8);
    return pages
      .filter((page) =>
        [page.title, page.description, page.category, page.content, ...page.tags]
          .join(" ")
          .toLowerCase()
          .includes(normalized)
      )
      .slice(0, 12);
  }, [pages, query]);

  const openResult = (index: number) => {
    const page = results[index];
    if (!page) return;
    navigate(`/docs/${page.groupSlug}/${page.slug}`);
    onClose();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") onClose();
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, results.length - 1));
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
    }
    if (event.key === "Enter") openResult(activeIndex);
  };

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/45 p-4 pt-[10vh] backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Search documentation">
      <button type="button" className="absolute inset-0" onClick={onClose} aria-label="Close search" />
      <div className="relative mx-auto max-w-2xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-navy-900">
        <div className="flex items-center border-b border-slate-200 px-4 dark:border-slate-700">
          <Search size={18} className="shrink-0 text-slate-400" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search documentation..."
            className="h-14 min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-slate-400"
            aria-label="Search documentation"
          />
          <button type="button" onClick={onClose} className="icon-button" aria-label="Close search">
            <X size={17} />
          </button>
        </div>
        <div className="max-h-[420px] overflow-y-auto p-2">
          {results.length ? (
            results.map((page, index) => (
              <button
                type="button"
                key={`${page.groupSlug}-${page.slug}`}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => openResult(index)}
                className={`flex w-full items-start gap-3 rounded-lg px-3 py-3 text-left transition ${
                  index === activeIndex
                    ? "bg-blue-50 dark:bg-blue-500/10"
                    : "hover:bg-slate-50 dark:hover:bg-slate-900"
                }`}
              >
                <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md border border-slate-200 bg-white text-slate-500 dark:border-slate-700 dark:bg-slate-950">
                  <FileText size={16} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="truncate text-sm font-semibold">{page.title}</span>
                    <span className="hidden shrink-0 rounded border border-slate-200 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-slate-400 sm:inline dark:border-slate-700">
                      {page.status}
                    </span>
                  </div>
                  <p className="mt-0.5 line-clamp-1 text-xs text-slate-500 dark:text-slate-400">
                    {page.description}
                  </p>
                  <p className="mt-1 text-[11px] text-blue-600 dark:text-blue-400">{page.category}</p>
                </div>
                <ArrowRight size={15} className="mt-2 shrink-0 text-slate-400" />
              </button>
            ))
          ) : (
            <div className="px-4 py-12 text-center">
              <Search size={24} className="mx-auto text-slate-300" />
              <p className="mt-3 text-sm font-medium">No documentation found</p>
              <p className="mt-1 text-xs text-slate-500">Try a page title, category, or topic.</p>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between border-t border-slate-200 px-4 py-2 text-[11px] text-slate-400 dark:border-slate-700">
          <span>Local search</span>
          <span>↑↓ Navigate · Enter Open · Esc Close</span>
        </div>
      </div>
    </div>
  );
}
