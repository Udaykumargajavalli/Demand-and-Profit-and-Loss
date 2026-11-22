import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 py-5 text-xs text-slate-500 dark:border-slate-800">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center gap-1.5 font-medium text-slate-600 hover:text-blue-600 dark:text-slate-400"
      >
        Back to top <ArrowUp size={13} />
      </button>
    </footer>
  );
}
