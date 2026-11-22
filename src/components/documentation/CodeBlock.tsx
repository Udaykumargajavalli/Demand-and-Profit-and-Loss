import { useState } from "react";
import type { ReactNode, ReactElement } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  children: ReactNode;
  language?: string;
}

export function CodeBlock({ children, language = "text" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const code = extractText(children).replace(/\n$/, "");

  const copy = async () => {
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(code);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = code;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
      }
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = code;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
  };

  return (
    <div className="code-block group my-5 overflow-hidden rounded-lg border border-slate-800 bg-slate-950">
      <div className="flex h-9 items-center justify-between border-b border-slate-800 px-3">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">{language}</span>
        <button type="button" onClick={copy} className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white" aria-label="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-[13px] leading-6"><code>{children}</code></pre>
    </div>
  );
}

function extractText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (typeof node === "object" && node !== null && "props" in node) {
    const element = node as ReactElement<{ children?: ReactNode }>;
    return extractText(element.props.children);
  }
  return "";
}
