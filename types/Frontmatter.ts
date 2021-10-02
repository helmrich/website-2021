export default interface Frontmatter {
  title: string;
  description: string;
  tags: string[];
  year: number;
  linkUrl?: string;
  githubLinkUrl?: string;
  imagePath: string;
  detailImagePaths?: string[];
  colorHexcode?: string;
}
