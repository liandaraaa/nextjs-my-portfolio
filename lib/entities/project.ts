export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl: string;
  linkUrl?: string;
  playStoreUrl?: string;
  appStatistics?:AppStatistic[];
  appScreenshots?: AppScreenshot[];
  keyFeatures?: KeyFeature[];
  stacks?:AppStacks[];
  architecture?: string[];
  challenges?: ChalengeSolution[];
};

export type AppStacks = {
  title: string;
  stacks: string[];
}

export type AppScreenshot = {
  src: string
  alt: string
  title: string
  aspectRatio?: "square" | "video" | "mobile" | "desktop"
}

export type AppStatistic = {
  title: string;
  value: number | string;
  icon: React.ReactNode;
}

export type KeyFeature = {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export type ChalengeSolution = {
  title: string;
  chalenge: string;
  solution: string;
}