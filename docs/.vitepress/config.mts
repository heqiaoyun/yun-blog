import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "何巧云博客",
  description: "关注前端技术",
  base: './',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '知识总结', link: '/knowledge/index' }
    ],

    sidebar: {
      '/knowledge/': [
        {
          text: '前端知识体系',
          items: [
            { text: 'React', link: '/knowledge/react-knowledge' },
            { text: 'Vue', link: '/knowledge/api-examples' }
          ]
        },
      ],
      '/blog/':[{
        text: '前端博客',
        items: [
          { text: '低代码技术', link: '/blog/index' },
        ]
      }]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
