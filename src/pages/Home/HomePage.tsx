import { Link } from "react-router-dom";
import {
  ArrowRight,
  Boxes,
  Building2,
  CalendarCheck,
  Database,
  GitBranch,
  Layers3,
  LineChart,
  SearchCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { navigationCategories } from "../../config/navigation";
import { projectConfig } from "../../config/project";
import { getDocumentationPages, getDocumentationStats } from "../../utils/documentation";

const overviewCards = [
  {
    title: "Business Problem",
    description: "Independent, data-driven forecasting aligned to monthly demand and financial planning.",
    href: "/docs/overview/problem-statement",
    icon: Building2,
  },
  {
    title: "Architecture",
    description: "Azure Databricks, PySpark, MLflow, SQL Server, and Azure Storage pipelines.",
    href: "/docs/architecture/high-level-architecture",
    icon: Layers3,
  },
  {
    title: "Data & Machine Learning",
    description: "Beer and NAB demand across Argentina, Chile, Peru, and Uruguay with CPI, inflation, seasonality, pricing, and temperature features.",
    href: "/docs/data-ml/data-sources",
    icon: Database,
  },
  {
    title: "Engineering",
    description: "Configuration-driven training, scoring, retraining, and forecast publication.",
    href: "/docs/engineering/repository-structure",
    icon: Boxes,
  },
  {
    title: "Deployment",
    description: "Automated monthly refresh and recurring forecast delivery through Azure Databricks.",
    href: "/docs/deployment/infrastructure-architecture",
    icon: GitBranch,
  },
  {
    title: "Results",
    description: "Forecast accuracy, deviation reporting, business impact, and lessons learned.",
    href: "/docs/results/project-outcomes",
    icon: LineChart,
  },
];

export function HomePage() {
  const pages = getDocumentationPages();
  const stats = getDocumentationStats(pages);

  return (
    <div className="mx-auto max-w-[1180px] px-5 pb-16 pt-10 sm:px-8 lg:px-10">
      <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/70 px-6 py-10 sm:px-10 sm:py-14 dark:border-slate-800 dark:bg-navy-900">
        <div className="relative max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:border-blue-900/50 dark:bg-blue-950/30 dark:text-blue-300">
              {projectConfig.category}
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300">
              {projectConfig.status}
            </span>
          </div>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            {projectConfig.name}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
            {projectConfig.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {projectConfig.technologyStack.map((technology) => (
              <span key={technology} className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300">
                {technology}
              </span>
            ))}
          </div>
          <Link
            to="/docs/overview/introduction"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Explore documentation <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">Knowledge areas</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight">Project overview</h2>
          </div>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {overviewCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                to={card.href}
                className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-soft dark:border-slate-800 dark:bg-navy-900"
              >
                <div className="flex items-start justify-between">
                  <div className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-blue-600 dark:border-slate-700 dark:bg-slate-950">
                    <Icon size={18} />
                  </div>
                  <ArrowRight size={16} className="mt-1 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-blue-600" />
                </div>
                <h3 className="mt-4 font-semibold">{card.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">{card.description}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="rounded-xl border border-slate-200 p-6 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-blue-600" />
            <h2 className="text-lg font-semibold">Project highlights</h2>
          </div>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Public-safe portfolio summary
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {[
              { title: "Key features", text: "Monthly demand and P&L forecasts for aggregated and detailed business hierarchies.", icon: SearchCheck },
              { title: "Technical components", text: "Databricks pipelines, MLflow tracking, PySpark processing, and Azure Storage outputs.", icon: Workflow },
              { title: "Major milestones", text: "Forecasting, model evaluation, automated retraining, accuracy reporting, and publication.", icon: CalendarCheck },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-lg bg-slate-50 p-4 dark:bg-slate-900/60">
                  <Icon size={17} className="text-blue-600" />
                  <h3 className="mt-3 text-sm font-semibold">{item.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 p-6 dark:border-slate-800">
          <h2 className="text-lg font-semibold">Content status</h2>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {[
              ["Total pages", stats.total],
              ["Completed", stats.completed],
              ["In progress", stats.inProgress],
              ["Draft", stats.draft],
            ].map(([label, value]) => (
              <div key={String(label)} className="rounded-lg border border-slate-100 p-3 dark:border-slate-800">
                <p className="text-xs text-slate-500 dark:text-slate-400">{label}</p>
                <p className="mt-1 text-2xl font-bold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-xl border border-slate-200 p-6 dark:border-slate-800">
          <h2 className="text-lg font-semibold">Quick links</h2>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {[
              ["Architecture documentation", "/docs/architecture/high-level-architecture"],
              ["Data pipelines", "/docs/data-ml/data-ingestion"],
              ["Model development", "/docs/data-ml/model-training"],
              ["Deployment guide", "/docs/deployment/deployment-process"],
              ["Troubleshooting", "/docs/challenges/troubleshooting-guide"],
            ].map(([title, href]) => (
              <Link key={title} to={href} className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-3 text-sm font-medium transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-800 dark:hover:text-blue-400">
                {title} <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 p-6 dark:border-slate-800">
          <h2 className="text-lg font-semibold">Project categories</h2>
          <div className="mt-4 space-y-2">
            {navigationCategories.map((category) => (
              <Link
                key={category.slug}
                to={`/docs/${category.slug}/${category.pages[0].slug}`}
                className="flex items-center justify-between rounded-md px-2 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-900"
              >
                <span>{category.title}</span>
                <span className="text-xs text-slate-400">{category.pages.length} pages</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
