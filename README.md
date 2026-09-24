# 1-01-8.github.io

Xie Xuemai 的个人主页，托管在 GitHub Pages 上，域名是 [xiexuemaiproj.me](https://xiexuemaiproj.me)。

这是一个纯静态网站（HTML + CSS + 一点 JavaScript），不需要安装任何工具，也没有构建步骤：改好文件推送到 `main` 分支，GitHub 就会自动发布。

## 文件说明

| 文件 | 作用 |
| --- | --- |
| `index.html` | 主页内容：自我介绍、项目、经历、联系方式 |
| `404.html` | 访问不存在的地址时显示的页面 |
| `assets/css/style.css` | 样式：颜色、字体、布局，会跟随系统切换深色模式 |
| `assets/js/main.js` | 右上角的中 / 英切换按钮 |
| `favicon.svg` | 浏览器标签页上的小图标 |
| `CNAME` | 自定义域名 `xiexuemaiproj.me`，**不要删**，删了域名就失效了 |
| `.nojekyll` | 让 GitHub Pages 直接发布这些文件，跳过 Jekyll 构建 |

## 修改内容

打开 `index.html`，要换成你自己内容的地方都标了 `TODO`。

- **中英双语**：每段文字都写了两份，`lang="zh-CN"` 是中文，`lang="en"` 是英文。浏览器语言是中文的访客默认看到中文，其他人默认看到英文，右上角按钮可以切换。只想保留一种语言的话，删掉另一种语言的那些行，再删掉切换按钮即可。
- **添加项目**：复制一整段 `<li class="project"> … </li>`，改掉标题、描述、标签和链接。
- **头像**：默认显示你的 GitHub 头像（加载不出来时显示字母 X）。想换成照片，把图片放进 `assets/img/`，再把 `index.html` 里头像的 `src` 改成这个路径。
- **主题色**：改 `assets/css/style.css` 开头的 `--accent`，深色模式那一段里也有一个。

不想在电脑上操作的话，也可以直接在 GitHub 网页上打开文件，点右上角的铅笔图标在线编辑。

## 本地预览

在仓库目录里运行：

```bash
python3 -m http.server 8000
```

然后在浏览器打开 <http://localhost:8000>。

## 发布

1. 把改动合并到 `main` 分支。
2. 打开仓库的 **Settings → Pages**，Source 选 **Deploy from a branch**，分支选 `main`，目录选 `/ (root)`。
3. 同一页的 **Custom domain** 应该显示 `xiexuemaiproj.me`；DNS 检查通过后，勾选 **Enforce HTTPS**。

之后每次推送到 `main`，网站通常一两分钟内就会更新。
