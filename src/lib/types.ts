export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    updated?: string;
    keywords: string[];
    featured: boolean;
    summary: string;
    content: string;
  }
  
  export interface SiteConfig {
    title: string;
    name: string;
    description: string;
    keywords: string[];
    url: string;
    baseUrl: string;
    image: string;
    favicon: {
      ico: string;
      png: string;
      svg: string;
      appleTouchIcon: string;
    };
    manifest: string;
  }
  
  export interface AuthorConfig {
    name: string;
    email: string;
    bio: string;
  }
  
  export interface SocialConfig {
    github: string;
    x: string;
    xiaohongshu: string;
    wechat: string;
  }
  
  export interface NavigationConfig {
    main: Array<{
      title: string;
      href: string;
    }>;
  }