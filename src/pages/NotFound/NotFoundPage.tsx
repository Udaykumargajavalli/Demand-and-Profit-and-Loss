import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-white px-6 text-slate-900 dark:bg-navy-950 dark:text-slate-100">
      <div className="max-w-md text-center">
        <div className="text-7xl font-bold text-slate-200 dark:text-slate-800">404</div>
        <h1 className="mt-3 text-2xl font-bold">Page not found</h1>
        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
          This documentation route is not available. It may be pending or the link may be outdated.
        </p>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
          <ArrowLeft size={16} /> Back to overview
        </Link>
      </div>
    </main>
  );
}
