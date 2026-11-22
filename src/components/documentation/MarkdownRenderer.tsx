import ReactMarkdown from "react-markdown";
import type { ReactElement, ReactNode } from "react";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import { CodeBlock } from "./CodeBlock";
import { MermaidDiagram } from "../diagrams/MermaidDiagram";
import { ImageViewer } from "./ImageViewer";
import { Callout } from "./Callout";

interface MarkdownRendererProps {
  content: string;
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

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <article className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug, rehypeHighlight]}
        components={{
          code({ className, children, ...props }) {
            const language = /language-(\w+)/.exec(className ?? "")?.[1];
            if (language === "mermaid") {
              return <MermaidDiagram chart={extractText(children).replace(/\n$/, "")} />;
            }
            const isInline = !String(children).includes("\n") && !className;
            if (isInline) {
              return <code className="inline-code" {...props}>{children}</code>;
            }
            return <CodeBlock language={language}>{children}</CodeBlock>;
          },
          img({ src, alt }) {
            return <ImageViewer src={typeof src === "string" ? src : undefined} alt={alt} />;
          },
          blockquote({ children }) {
            const text = String(children);
            if (/warning/i.test(text)) {
              return <Callout warning title="Warning">{children}</Callout>;
            }
            return <Callout title="Note">{children}</Callout>;
          },
          table({ children }) {
            return (
              <div className="my-6 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
                <table>{children}</table>
              </div>
            );
          },
          a({ href, children }) {
            const external = href?.startsWith("http");
            return (
              <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
                {children}
              </a>
            );
          },
          details({ children }) {
            return <details className="documentation-details">{children}</details>;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
