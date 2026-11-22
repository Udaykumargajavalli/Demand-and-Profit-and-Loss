import { Info, TriangleAlert } from "lucide-react";
import type { ReactNode } from "react";

interface CalloutProps {
  children: ReactNode;
  warning?: boolean;
  title?: string;
}

export function Callout({ children, warning = false, title }: CalloutProps) {
  return (
    <div
      className={`my-5 flex gap-3 rounded-lg border px-4 py-3 ${
        warning
          ? "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/20 dark:text-amber-200"
          : "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-900/50 dark:bg-blue-950/20 dark:text-blue-200"
      }`}
      role="note"
    >
      {warning ? <TriangleAlert size={18} className="mt-0.5 shrink-0" /> : <Info size={18} className="mt-0.5 shrink-0" />}
      <div className="min-w-0 text-sm leading-6">
        {title && <p className="mb-1 font-semibold">{title}</p>}
        {children}
      </div>
    </div>
  );
}
