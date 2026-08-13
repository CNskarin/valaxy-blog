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
  // 主题配置见 theme.config.ts

  theme: 'yun',

  // 自定义域名部署，根路径
  vite: {
    base: '/',
  },

  unocss: { safelist },
})
