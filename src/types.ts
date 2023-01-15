export interface TechnologyItem {
  icon: string;
  title: string;
  url: string;
}

export interface FeatureItem {
  description: string;
  title: string;
}

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
}

export interface Project {
  title: string;
  image: ImageMetadata;
  url: string;
  technologies: string;
}
