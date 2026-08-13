import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://cnskarin.github.io/valaxy-blog/',
  lang: 'zh-CN',
  title: '嘉林的博客',
  subtitle: 'Vue 3 驱动的下一代静态博客',
  author: {
    name: '孙嘉林',
    avatar: '/favicon.svg',
  },
  description: '基于 Valaxy 框架的静态博客，探索 Vue 3 + Vite 的新一代写作体验。',
  timezone: 'Asia/Shanghai',
  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/CNskarin',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
  ],

  search: {
    enable: true,
    provider: 'fuse',
  },

  comment: {
    enable: false,
  },
})
