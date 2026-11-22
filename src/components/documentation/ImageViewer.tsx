import { useState } from "react";
import { X } from "lucide-react";

interface ImageViewerProps {
  src?: string;
  alt?: string;
}

export function ImageViewer({ src, alt }: ImageViewerProps) {
  const [open, setOpen] = useState(false);
  if (!src) return null;
  const resolved = src.startsWith("/") ? import.meta.env.BASE_URL + src.slice(1) : src;
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="my-6 block w-full cursor-zoom-in" aria-label={`Zoom image: ${alt ?? "documentation image"}`}>
        <img src={resolved} alt={alt} className="max-h-[520px] w-full rounded-lg border border-slate-200 object-contain dark:border-slate-800" />
      </button>
      {open && (
        <div className="fixed inset-0 z-[110] grid place-items-center bg-slate-950/80 p-6" role="dialog" aria-modal="true" aria-label="Image zoom">
          <button type="button" className="absolute inset-0" onClick={() => setOpen(false)} aria-label="Close image" />
          <img src={resolved} alt={alt} className="relative max-h-[90vh] max-w-[92vw] rounded-lg object-contain shadow-2xl" />
          <button type="button" onClick={() => setOpen(false)} className="icon-button absolute right-5 top-5 bg-white text-slate-900 dark:bg-slate-900 dark:text-white" aria-label="Close image">
            <X size={20} />
          </button>
        </div>
      )}
    </>
  );
}
