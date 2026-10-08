# 🍇 BlueBerry OS

> 遵循 Material Design 3 和 Chrome OS 设计风格的浏览器起始页扩展

**当前版本**：v0.2.1 · *Blue blue berry*

---

## ✨ 特性

- 🎨 **MD3 / Chrome OS 风格界面** — 底部 Dock 栏 + 应用抽屉设计
- 🖼️ **多种壁纸来源**
  - 默认壁纸（8 张精选 Unsplash 壁纸）
  - 流体动态壁纸（6 种配色方案 + 彩虹渐变）
  - 纯色壁纸（12 种预设色 + 自定义取色器）
  - 自定义壁纸（本地上传，支持拖拽）
- 🌫️ **壁纸模糊** — 5 级模糊可调，流体壁纸时自动禁用
- 🔍 **多搜索引擎** — Bing / Google / 百度 / DuckDuckGo / Wikipedia
- 🌓 **深色/浅色主题**
- 🌍 **双语支持** — 简体中文 / English
- 📁 **文件夹管理** — 新建、重命名、删除、拖拽排序
- ⌨️ **快捷键** — `Ctrl+K` 聚焦搜索，`Esc` 关闭弹窗
- 🖱️ **右键菜单** — 快速切换壁纸、打开设置

## 📦 安装

### 方式一：加载已解压的扩展程序（推荐开发用）

1. 打开 Chrome，访问 `chrome://extensions/`
2. 右上角开启「开发者模式」
3. 点击「加载已解压的扩展程序」
4. 选择本仓库的 `chrome-newtab` 文件夹

### 方式二：直接安装 .zip

1. 下载 Releases 中的 `.zip` 包
2. 打开 Chrome，访问 `chrome://extensions/`
3. 右上角开启「开发者模式」
4. 将 zip 文件直接拖入页面

## 🎯 使用说明

- 点击底部 Dock 栏最左侧按钮打开应用抽屉
- 在应用抽屉中可搜索应用、管理文件夹
- 右键点击主界面可快速切换壁纸
- 点击左上角齿轮图标打开设置面板
- 点击右上角九宫格图标打开 Chrome 工具菜单
- 
## 🛠️ 技术栈

- 原生 HTML / CSS / JavaScript
- Manifest V3
- Material Design 3 设计规范
- Chrome Storage API（设置同步）
## 📁 项目结构
```
BlueBerry-OS/
├── README.md
├── chrome-newtab/
│   ├── manifest.json
│   ├── newtab.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── app.js
│   └── icons/
│       └── icon128.svg
└── BlueBerry-OS-v0.2.1.zip   # 插件安装包
```

## 📄 License

MIT License
