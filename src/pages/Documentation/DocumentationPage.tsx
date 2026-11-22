import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight, Circle } from "lucide-react";
import { MarkdownRenderer } from "../../components/documentation/MarkdownRenderer";
import { Footer } from "../../components/layout/Footer";
import { PreviousNextNavigation } from "../../components/navigation/PreviousNextNavigation";
import { TableOfContents } from "../../components/navigation/TableOfContents";
import {
  getDocumentationPage,
  getDocumentationPages,
  getTableOfContents,
} from "../../utils/documentation";
import { NotFoundPage } from "../NotFound/NotFoundPage";

export function DocumentationPage() {
  const { group = "", slug = "" } = useParams();
  const page = getDocumentationPage(group, slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [group, slug]);

  const pages = useMemo(() => getDocumentationPages(), []);
  if (!page) return <NotFoundPage />;

  const index = pages.findIndex(
    (item) => item.groupSlug === page.groupSlug && item.slug === page.slug
  );
  const previous = index > 0 ? pages[index - 1] : null;
  const next = index < pages.length - 1 ? pages[index + 1] : null;
  const toc = getTableOfContents(page.content);
  const progress = Math.round(((index + 1) / pages.length) * 100);
  const statusClass =
    page.status === "completed"
      ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-300"
      : page.status === "in-progress"
        ? "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900/50 dark:bg-blue-950/30 dark:text-blue-300"
        : "border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400";

  return (
    <>
      <div className="fixed left-0 right-0 top-16 z-30 h-[3px] bg-slate-100 dark:bg-slate-900">
        <div className="h-full bg-blue-600 transition-[width] duration-300" style={{ width: `${progress}%` }} />
      </div>
      <div className="mx-auto flex max-w-[1180px] gap-10 px-5 py-10 sm:px-8 lg:px-10">
        <article className="min-w-0 max-w-[760px] flex-1">
          <div className="mb-5 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Link to="/" className="hover:text-blue-600">Overview</Link>
            <ChevronRight size={12} />
            <span>{page.category}</span>
          </div>

          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-7 dark:border-slate-800">
            <div className="max-w-[620px]">
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-[40px] sm:leading-[1.15] dark:text-white">
                {page.title}
              </h1>
              <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                {page.description}
              </p>
            </div>
            <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium capitalize ${statusClass}`}>
              <Circle size={7} fill="currentColor" />
              {page.status.replace("-", " ")}
            </span>
          </div>

          {toc.length > 0 && (
            <details className="documentation-details mt-6 xl:hidden">
              <summary>On this page</summary>
              <nav className="mt-2 grid gap-1">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block rounded px-2 py-1.5 text-sm text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900 ${
                      item.level === 3 ? "pl-5" : ""
                    }`}
                  >
                    {item.text}
                  </a>
                ))}
              </nav>
            </details>
          )}

          <div className="mt-8">
            <MarkdownRenderer content={page.content} />
          </div>

          <PreviousNextNavigation previous={previous} next={next} />
          <Footer />
        </article>
        <TableOfContents items={toc} />
      </div>
    </>
  );
}
