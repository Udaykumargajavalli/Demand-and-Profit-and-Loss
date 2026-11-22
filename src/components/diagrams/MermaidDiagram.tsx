import { useEffect, useId, useState } from "react";
import { AlertCircle, ZoomIn } from "lucide-react";

interface MermaidDiagramProps {
  chart: string;
}

export function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const id = `mermaid-${useId().replace(/:/g, "")}`;
  const [svg, setSvg] = useState("");
  const [error, setError] = useState("");
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    let active = true;
    async function renderDiagram() {
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
          theme: document.documentElement.classList.contains("dark") ? "dark" : "default",
        });
        const { svg: rendered } = await mermaid.render(id, chart);
        if (active) setSvg(rendered);
      } catch (reason) {
        if (active) {
          setError(reason instanceof Error ? reason.message : "Unable to render diagram.");
        }
      }
    }
    renderDiagram();
    return () => {
      active = false;
    };
  }, [chart, id]);

  if (error) {
    return (
      <div className="my-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-300">
        <div className="flex items-center gap-2 font-semibold">
          <AlertCircle size={16} /> Diagram could not be rendered
        </div>
        <pre className="mt-3 overflow-x-auto whitespace-pre-wrap text-xs">{error}</pre>
      </div>
    );
  }

  return (
    <>
      <div className="group relative my-6 overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/40">
        <button
          type="button"
          onClick={() => setZoomed(true)}
          className="icon-button absolute right-3 top-3 z-10 opacity-0 transition group-hover:opacity-100 focus:opacity-100"
          aria-label="Zoom diagram"
        >
          <ZoomIn size={16} />
        </button>
        <div className="mermaid-diagram min-w-[480px]" dangerouslySetInnerHTML={{ __html: svg }} />
      </div>
      {zoomed && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/70 p-6" role="dialog" aria-modal="true" aria-label="Diagram zoom">
          <button type="button" className="absolute inset-0" onClick={() => setZoomed(false)} aria-label="Close diagram zoom" />
          <div className="relative max-h-[85vh] max-w-[95vw] overflow-auto rounded-xl bg-white p-6 shadow-2xl dark:bg-navy-900">
            <div className="min-w-[640px]" dangerouslySetInnerHTML={{ __html: svg }} />
          </div>
        </div>
      )}
    </>
  );
}
