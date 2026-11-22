import { useEffect, useState } from "react";
import type { TableOfContentsItem } from "../../types/documentation";

interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (!items.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0.1 }
    );
    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [items]);

  if (!items.length) return null;

  return (
    <aside className="sticky top-24 hidden w-[220px] shrink-0 xl:block">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        On this page
      </h2>
      <nav className="mt-3 border-l border-slate-200 dark:border-slate-800" aria-label="On this page">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(event) => {
              event.preventDefault();
              document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
              setActiveId(item.id);
            }}
            className={`block border-l-2 py-1.5 text-xs leading-5 transition ${
              item.level === 3 ? "pl-5" : "pl-3"
            } ${
              activeId === item.id
                ? "-ml-px border-blue-600 font-medium text-blue-700 dark:text-blue-400"
                : "border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            }`}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </aside>
  );
}
