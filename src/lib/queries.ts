import { ReactNode } from "react";

export interface ServiceItem {
  _id: string;
  id: string;
  image: string;
  title: string;
  content: string;
  category: string;
  slug: string;
  createdAt: string;
}

export interface ProjectItem {
  title: ReactNode;
  _id: string;
  id: string;
  image: string;
  description: string;
  link: string;
  createdAt: string;
}

export interface BlogItem {
  _id: string;
  id: string;
  title: string;
  image: string;
  description: string;
  slug: string;
  content: string;
  createdAt: string;
}

async function fetchApiData<T>(url: string): Promise<T[]> {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}`);
  }

  const data = await res.json();
  return Array.isArray(data.data) ? data.data : [];
}

export const queryKeys = {
  services: ["services"] as const,
  projects: ["projects"] as const,
  blogs: ["blogs"] as const,
};

export const fetchServices = () => fetchApiData<ServiceItem>("/api/service");
export const fetchProjects = () => fetchApiData<ProjectItem>("/api/project");
export const fetchBlogs = () => fetchApiData<BlogItem>("/api/blog");
