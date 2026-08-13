import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'

// 添加需要使用的图标
const safelist = [
  'i-ri-home-line',
]

/**
 * 用户配置
 */
export default defineValaxyConfig<UserThemeConfig>({
  // 站点配置见 site.config.ts

  theme: 'yun',

  // GitHub Pages 子路径部署（测试期）
  // 切到自定义域名后改为 '/'
  vite: {
    base: '/valaxy-blog/',
  },

  themeConfig: {
    banner: {
      enable: true,
      title: 'Skarin Blog',
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
  },

  unocss: { safelist },
})
