import type { DocumentationMeta, DocumentationStatus, TableOfContentsItem } from "../types/documentation";
import { allNavigationPages } from "../config/navigation";

const markdownModules = import.meta.glob("../content/**/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

function parseScalar(raw: string | undefined, fallback: string) {
  if (!raw) return fallback;
  const value = raw.trim().replace(/^["']|["']$/g, "");
  return value.toLowerCase() === "null" ? fallback : value;
}

function parseFrontmatter(raw: string) {
  const normalized = raw.replace(/\r\n/g, "\n");
  const match = normalized.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) return { attributes: {} as Record<string, string>, content: raw };

  const attributes: Record<string, string> = {};
  let activeArray: string | null = null;

  match[1].split("\n").forEach((line) => {
    const arrayMatch = line.match(/^  -\s*(.+)$/);
    if (arrayMatch && activeArray) {
      attributes[activeArray] = `${attributes[activeArray] ? `${attributes[activeArray]},` : ""}${arrayMatch[1].trim()}`;
      return;
    }

    const keyMatch = line.match(/^([A-Za-z][A-Za-z0-9]*):\s*(.*)$/);
    if (!keyMatch) return;
    const [, key, value] = keyMatch;
    if (!value) {
      activeArray = key;
      attributes[key] = "";
    } else {
      activeArray = null;
      attributes[key] = value.trim();
    }
  });

  return { attributes, content: normalized.slice(match[0].length) };
}

export function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function getDocumentationPages(): DocumentationMeta[] {
  return allNavigationPages.map(({ title, slug, category }, index) => {
    const modulePath = `../content/${category.slug}/${slug}.md`;
    const raw = markdownModules[modulePath];
    const fallbackContent = `## Overview\n\nDocumentation for ${title} is pending. Use this page to record the relevant implementation, decisions, and operational details.\n\n## Purpose\n\nDescribe why ${title.toLowerCase()} belongs to this project and which stakeholders use this information.\n\n## Implementation Details\n\n> Documentation pending: replace this placeholder with project-specific, synthetic, or approved information.`;
    const { attributes, content } = raw
      ? parseFrontmatter(raw)
      : { attributes: {}, content: fallbackContent };

    const statusValue = parseScalar(attributes.status, "draft").toLowerCase();
    const status: DocumentationStatus =
      statusValue === "completed"
        ? "completed"
        : statusValue === "in-progress"
          ? "in-progress"
          : "draft";

    const tags = attributes.tags
      ? attributes.tags.split(",").map((tag) => tag.trim()).filter(Boolean)
      : [category.slug];

    return {
      title: parseScalar(attributes.title, title),
      description: parseScalar(
        attributes.description,
        `Documentation template for ${title.toLowerCase()}`
      ),
      category: parseScalar(attributes.category, category.title),
      order: Number.parseInt(parseScalar(attributes.order, String(index + 1)), 10),
      status,
      lastUpdated: parseScalar(attributes.lastUpdated, "") || null,
      tags,
      slug,
      groupSlug: category.slug,
      content,
    };
  });
}

export function getDocumentationPage(groupSlug: string, slug: string) {
  return getDocumentationPages().find(
    (page) => page.groupSlug === groupSlug && page.slug === slug
  );
}

export function getTableOfContents(content: string): TableOfContentsItem[] {
  return Array.from(content.matchAll(/^(#{2,3})\s+(.+)$/gm)).map((match) => ({
    level: match[1].length,
    text: match[2].replace(/[*_`]/g, "").trim(),
    id: slugifyHeading(match[2].replace(/[*_`]/g, "").trim()),
  }));
}

export function getDocumentationStats(pages: DocumentationMeta[]) {
  return {
    total: pages.length,
    completed: pages.filter((page) => page.status === "completed").length,
    inProgress: pages.filter((page) => page.status === "in-progress").length,
    draft: pages.filter((page) => page.status === "draft").length,
  };
}

