import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
const vitepressOptions = {
  title: "wrp's blog",
  description: "wrp's blog",
  themeConfig: {
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '开发日常', link: '/dev/index' },
      { text: '部署日常', link: '/ops/index' },
      { text: '项目日常', link: '/project/index' },
      { text: '算法日常', link: '/alg/index' },
      { text: '学习日常', link: '/study/index' },
      { text: '生活日常', link: '/life/index' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wrp1234' }
    ],
  },
  srcDir: './docs'
}

const sidebarOptions = [
  {
    documentRootPath: 'docs',
    scanStartPath: 'dev',
    basePath: '/dev/',
    resolvePath: '/dev/',
    useTitleFromFileHeading: true,
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'ops',
    basePath: '/ops/',
    resolvePath: '/ops/',
    useTitleFromFileHeading: true,
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'project',
    basePath: '/project/',
    resolvePath: '/project/',
    useTitleFromFileHeading: true,
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'alg',
    basePath: '/alg/',
    resolvePath: '/alg/',
    useTitleFromFileHeading: true,
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'study',
    basePath: '/study/',
    resolvePath: '/study/',
    useTitleFromFileHeading: true,
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'life',
    basePath: '/life/',
    resolvePath: '/life/',
    useTitleFromFileHeading: true,
  },
]

export default defineConfig(withSidebar(vitepressOptions, sidebarOptions))
