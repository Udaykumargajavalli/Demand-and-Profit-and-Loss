export type DocumentationStatus = "draft" | "in-progress" | "completed";

export interface DocumentationMeta {
  title: string;
  description: string;
  category: string;
  order: number;
  status: DocumentationStatus;
  lastUpdated: string | null;
  tags: string[];
  slug: string;
  groupSlug: string;
  content: string;
}

export interface NavigationPage {
  title: string;
  slug: string;
  status?: DocumentationStatus;
}

export interface NavigationCategory {
  title: string;
  slug: string;
  icon: "overview" | "architecture" | "data" | "engineering" | "deployment" | "challenges" | "results" | "resources";
  pages: NavigationPage[];
}

export interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
}
