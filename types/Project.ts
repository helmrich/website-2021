export interface Project {
  title: string;
  description: string;
  tags: string[];
  year: number;
  linkUrl?: string;
  githubLinkUrl?: string;
  imagePath: string;
  detailImagePaths?: string[];
}
