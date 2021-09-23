export interface Project {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    tags: string[];
    year: number;
    linkUrl?: string;
    githubLinkUrl?: string;
    imagePath: string;
    detailImagePaths?: string[];
  };
}
