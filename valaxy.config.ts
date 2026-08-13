import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'
import { addonGiscus } from 'valaxy-addon-giscus'
import { addonVercount } from 'valaxy-addon-vercount'

// 添加需要使用的图标
const safelist = [
  'i-ri-home-line',
  'i-ri-archive-line',
  'i-ri-folder-line',
  'i-ri-price-tag-line',
  'i-ri-link',
  'i-ri-user-line',
]

/**
 * 用户配置
 * 注意：数组字段（nav/pages）必须放在 valaxy.config.ts 的 themeConfig 里，
 * 独立的 theme.config.ts 中数组会被主题默认值覆盖（框架限制）
 */
export default defineValaxyConfig<UserThemeConfig>({
  // 站点配置见 site.config.ts
  theme: 'yun',

  // 自定义域名部署，根路径
  vite: {
    base: '/',
  },

  addons: [
    addonGiscus({
      repo: 'CNskarin/valaxy-blog',
      repoId: 'R_kgDOT3Y1xw',
      category: 'General',
      categoryId: 'DIC_kwDOT3Y1x84DDS7B',
      lang: 'zh-CN',
    }),
    addonVercount({ api: 'cn' }),
  ],

  /**
   * Yun 主题配置
   * 完整字段见：https://github.com/YunYouJun/valaxy/blob/main/packages/valaxy-theme-yun/types/index.d.ts
   */
  themeConfig: {
    /** 布局类型：'nimbo'（雨云，默认）| 'strato'（层云，经典侧边栏） */
    type: 'nimbo',

    /** 文章页右侧目录标题 */
    outlineTitle: '本页目录',

    /** 配色 */
    colors: {
      primary: '#0078E7',
    },

    /** 首页标语动画 */
    banner: {
      enable: true,
      title: 'Skarin Blog',
      // 手动分割文字：title: ['茫茫人海', '相遇即是缘分']
      cloud: {
        enable: true,
      },
    },

    /** 背景图 */
    bg_image: {
      enable: false,
      // url: 'https://...',
      // dark: 'https://...', // 暗色模式图片
      // opacity: 0.6,
    },

    /** 说点什么 / 一言 */
    say: {
      enable: false,
      api: 'https://el-bot-api.elpsy.cn/api/words/young',
      hitokoto: {
        enable: false,
        api: 'https://v1.hitokoto.cn/',
      },
    },

    /** 公告 */
    notice: {
      enable: false,
      content: '欢迎来到我的博客！',
    },

    /** 点击烟花效果 */
    fireworks: {
      enable: false,
      // colors: ['#66A7DD', '#3E83E1', '#214EC2'],
    },

    /** 顶部导航栏 */
    nav: [
      {
        text: '首页',
        link: '/',
        icon: 'i-ri-home-line',
      },
      {
        text: '归档',
        link: '/archives/',
        icon: 'i-ri-archive-line',
      },
      {
        text: '分类',
        link: '/categories/',
        icon: 'i-ri-folder-line',
      },
      {
        text: '标签',
        link: '/tags/',
        icon: 'i-ri-price-tag-line',
      },
      {
        text: '友链',
        link: '/links/',
        icon: 'i-ri-link',
      },
      {
        text: '关于',
        link: '/about/',
        icon: 'i-ri-user-line',
      },
    ],

    /** 社交导航栏下方的页面入口 */
    pages: [
      {
        name: '关于',
        url: '/about/',
        icon: 'i-ri-user-line',
        color: 'dodgerblue',
      },
    ],

    /** 侧边栏（仅 docs 布局使用） */
    sidebar: null,

    /** 页脚 */
    footer: {
      cloud: {
        enable: true,
      },
      since: 2026,
      // icon: {
      //   enable: true,
      //   name: 'i-ri-cloud-line',
      //   animated: true,
      //   color: '#0078E7',
      //   url: 'https://valaxy.site',
      //   title: 'Powered by Valaxy',
      // },
      powered: true,
      // 国内备案（需要时开启）
      // beian: {
      //   enable: true,
      //   icp: '苏ICP备xxxxxxxx号',
      //   police: '苏公网安备xxxxxxxx号',
      // },
    },

    /** 文章卡片类型（分类显示颜色/图标） */
    // types: {
    //   tech: { color: '#0078E7', icon: 'i-ri-code-line' },
    //   life: { color: '#2DC100', icon: 'i-ri-heart-line' },
    // },

    /** 菜单栏最右侧自定义图标 */
    // menu: {
    //   custom: {
    //     title: 'GitHub',
    //     url: 'https://github.com/CNskarin',
    //     icon: 'i-ri-github-line',
    //   },
    // },

    /** 文章页「在 GitHub 编辑」链接 */
    editLink: {
      pattern: 'https://github.com/CNskarin/valaxy-blog/edit/main/:path',
    },
  },

  unocss: { safelist },
})
