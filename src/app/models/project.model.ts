export interface Project {
  name: string;
  image: string;
  description: string;
  tags: string[];
  repoLink?: string;  // Optional: not all projects have a public repo
  demoLink?: string;  // Optional: not all projects have a live demo deployment
}
