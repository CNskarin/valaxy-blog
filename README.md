# valaxy-blog

🌌 基于 [Valaxy](https://valaxy.site/) 的静态博客 —— Vue 3 + Vite 驱动的下一代博客框架。

## 本地开发

```bash
npm i
npm run dev      # http://localhost:4859
npm run build    # SSG 构建到 dist/
```

## 部署

push 到 `main` 分支后，GitHub Actions 自动构建并部署到 GitHub Pages。

## 文章写作

文章放在 `pages/posts/*.md`，支持 frontmatter（title/date/tags/categories/draft/password 等）。
