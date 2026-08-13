import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://cnskarin.github.io/valaxy-blog/',
  lang: 'zh-CN',
  title: 'Skarin Blog',
  subtitle: '茫茫人海，相遇即是缘分',
  author: {
    name: 'Skarin',
    avatar: '/favicon.svg',
  },
  description: '迷えば、敗れる。',
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
