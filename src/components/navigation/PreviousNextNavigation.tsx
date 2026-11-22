import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { DocumentationMeta } from "../../types/documentation";

interface PreviousNextProps {
  previous: DocumentationMeta | null;
  next: DocumentationMeta | null;
}

export function PreviousNextNavigation({ previous, next }: PreviousNextProps) {
  return (
    <nav className="mt-12 grid gap-3 border-t border-slate-200 pt-6 sm:grid-cols-2 dark:border-slate-800" aria-label="Documentation pagination">
      {previous ? (
        <Link
          to={`/docs/${previous.groupSlug}/${previous.slug}`}
          className="group flex min-h-[74px] flex-col justify-center rounded-lg border border-slate-200 px-4 py-3 transition hover:border-blue-300 hover:bg-blue-50/40 dark:border-slate-800 dark:hover:border-blue-700 dark:hover:bg-blue-500/5"
        >
          <span className="flex items-center gap-1 text-xs text-slate-500">
            <ArrowLeft size={13} /> Previous
          </span>
          <span className="mt-1 text-sm font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-400">{previous.title}</span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          to={`/docs/${next.groupSlug}/${next.slug}`}
          className="group flex min-h-[74px] flex-col justify-center rounded-lg border border-slate-200 px-4 py-3 text-right transition hover:border-blue-300 hover:bg-blue-50/40 sm:ml-auto sm:w-full dark:border-slate-800 dark:hover:border-blue-700 dark:hover:bg-blue-500/5"
        >
          <span className="flex items-center justify-end gap-1 text-xs text-slate-500">
            Next <ArrowRight size={13} />
          </span>
          <span className="mt-1 text-sm font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-400">{next.title}</span>
        </Link>
      ) : null}
    </nav>
  );
}
