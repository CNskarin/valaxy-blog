import { defineThemeConfig } from 'valaxy-theme-yun/client'

export default defineThemeConfig({
  banner: {
    enable: true,
    title: 'Skarin Blog',
  },

  colors: {
    primary: '#0078E7',
  },

  pages: [
    {
      name: '关于',
      url: '/about/',
      icon: 'i-ri-user-line',
      color: 'dodgerblue',
    },
  ],

  footer: {
    since: 2026,
  },
})
