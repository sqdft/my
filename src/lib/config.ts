export const siteConfig = {
    title: "我的个人博客",
    name: "我的博客",
    description: "这是一个使用Next.js和Netlify CMS构建的个人博客",
    keywords: ["博客", "技术", "生活"],
    url: "https://sqdft.github.io/homepage",
    baseUrl: "https://sqdft.github.io/homepage",
    image: "https://sqdft.github.io/homepage/og-image.png",
    favicon: {
      ico: "/favicon.ico",
      png: "/favicon.png",
      svg: "/favicon.svg",
      appleTouchIcon: "/favicon.png",
    },
    manifest: "/site.webmanifest",
  }
  
  export const authorConfig = {
    name: "您的名字",
    email: "your.email@example.com",
    bio: "热爱编程和技术的开发者，分享技术心得和生活感悟。",
  }
  
  export const socialConfig = {
    github: "https://github.com/sqdft",
    x: "https://twitter.com/yourusername",
    xiaohongshu: "https://www.xiaohongshu.com/user/profile/yourID",
    wechat: "/images/wechat-qr.png",
  }
  
  export const navigationConfig = {
    main: [
      {
        title: "首页",
        href: "/",
      },
      {
        title: "博客",
        href: "/blog",
      },
      {
        title: "关于",
        href: "/about",
      },
    ],
  }
  
  export const seoConfig = {
    metadataBase: new URL("https://sqdft.github.io/homepage"),
    alternates: {
      canonical: './',
    },
    openGraph: {
      type: "website" as const,
      locale: "zh_CN",
    },
    twitter: {
      card: "summary_large_image" as const,
      creator: "@yourusername",
    },
  }