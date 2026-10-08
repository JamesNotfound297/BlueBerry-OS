/* ============================================
   BlueBerry OS v0.3.0 - Berry Bliss
   ============================================ */

// ==================== 国际化 ====================

const i18n = {
  'zh-CN': {
    pageTitle: 'BlueBerry OS',
    settings: '设置',
    chromeTools: 'Chrome 工具',
    searchPlaceholder: '搜索或输入网址',
    switchEngine: '切换搜索引擎',
    engineBing: '必应',
    engineGoogle: 'Google',
    engineBaidu: '百度',
    engineWiki: '维基百科',
    allApps: '所有应用',
    searchApps: '搜索应用',
    systemApps: '系统软件',
    folders: '文件夹',
    chromeSettings: 'Chrome 设置',
    bookmarks: '书签',
    history: '历史记录',
    downloads: '下载',
    extensions: '扩展',
    flags: '实验性',
    nextWallpaper: '下一张壁纸',
    prevWallpaper: '上一张壁纸',
    customComponents: '自定义组件',
    customizeHint: '拖动搜索栏调整位置，点击图标切换显示/隐藏',
    resetLayout: '重置布局',
    done: '完成',
    rename: '重命名',
    delete: '删除',
    appearance: '外观',
    searchEngine: '搜索引擎',
    animation: '动画效果',
    wallpaper: '壁纸',
    language: '语言',
    about: '关于',
    appearanceDesc: '自定义起始页的外观和风格',
    themeMode: '主题模式',
    lightMode: '浅色',
    darkMode: '深色',
    colorTheme: '颜色主题',
    colorThemeDesc: '选择全局颜色主题，影响图标和文字',
    fluidWallpaper: '流体动态壁纸',
    enableFluid: '启用流体壁纸',
    fluidDesc: '动态流体粒子效果',
    fluidColor: '流体颜色',
    dockBar: 'Dock 栏',
    showDock: '显示 Dock 栏',
    showDockDesc: '在底部显示应用 Dock',
    blurEffect: '毛玻璃效果',
    blurDesc: 'Dock 栏背景模糊效果',
    searchEngineDesc: '选择默认的搜索引擎',
    defaultEngine: '默认搜索引擎',
    bingDesc: '微软的搜索引擎',
    googleDesc: '全球最大搜索引擎',
    baidu: '百度',
    baiduDesc: '最大的中文搜索引擎',
    ddgDesc: '注重隐私的搜索引擎',
    wiki: '维基百科',
    wikiDesc: '搜索百科词条',
    animationDesc: '控制界面动画和过渡效果',
    animationToggle: '动画开关',
    enableAnimation: '启用动画',
    enableAnimDesc: '界面过渡和交互动画',
    reduceMotion: '减少动画',
    reduceMotionDesc: '减少动画效果',
    animationSpeed: '动画速度',
    animDuration: '动画时长',
    animSpeedDesc: '调整过渡动画的快慢',
    fast: '快速',
    normal: '正常',
    slow: '慢速',
    wallpaperDesc: '自定义您的桌面壁纸',
    wallpaperSource: '壁纸来源',
    presetWallpaper: '默认壁纸',
    presetWallpaperDesc: '从精选壁纸中选择',
    fluidWallpaperDesc: '动态流体粒子效果',
    solidColor: '纯色壁纸',
    solidColorDesc: '选择一种纯色作为壁纸',
    uploadWallpaper: '自定义壁纸',
    uploadWallpaperDesc: '从本地文件上传壁纸',
    wallpaperBlur: '壁纸模糊',
    enableBlur: '启用壁纸模糊',
    blurWallpaperDesc: '对壁纸进行模糊处理',
    blurLevel: '模糊等级',
    selectWallpaper: '选择壁纸',
    customColor: '自定义颜色',
    customColorDesc: '选择任意颜色',
    uploadHint: '点击或拖拽图片到此处上传',
    languageDesc: '选择界面显示语言',
    displayLanguage: '显示语言',
    aboutDesc: '遵循 Material Design 3 和 Chrome OS 设计风格的浏览器起始页扩展。',
    version: '版本',
    author: '作者',
    checkUpdate: '检查更新',
    newFolder: '新建文件夹',
    folderName: '文件夹名称',
    folderNamePlaceholder: '例如：工作',
    cancel: '取消',
    create: '创建',
    newName: '新名称',
    confirm: '确认',
    close: '关闭',
    confirmDelete: '确认删除',
    deleteConfirmMsg: '确定要删除这个文件夹吗？',
    updateAvailable: '发现新版本！',
    latestVersion: '当前已是最新版本',
    checkingUpdate: '正在检查更新...',
    renameSuccess: '重命名成功',
    deleteSuccess: '删除成功',
    movedToFolder: '已移动到 {folder}',
    uploadSuccess: '壁纸上传成功！',
    uploadError: '上传失败，请重试',
    pixelLiveWallpaper: 'Pixel Live Wallpaper',
    loadingWallpaper: '加载中...',
    customSource: '自定义源',
    videoWallpaper: '视频壁纸',
    applyWallpaper: '应用为壁纸',
    customUrlPlaceholder: '输入图片 URL',
    load: '加载',
    videoUploadHint: '点击或拖拽视频文件到此处',
    applyVideoWallpaper: '应用为视频壁纸',
    dragImageHint: '拖拽图片到此软件图标可直接设置壁纸',
    confirmWallpaper: '确认替换壁纸',
    dragConfirmMsg: '确定要将此图片设置为壁纸吗？',
    videoTooLarge: '视频文件过大，建议小于 50MB',
    customUrlError: '请输入有效的图片 URL',
    wallpaperApplied: '壁纸已应用！',
    videoWallpaperApplied: '视频壁纸已应用！',
    customWallpaperLoaded: '自定义壁纸已加载',
    backupRestore: '备份与恢复',
    backupDesc: '将您的设置、书签和组件信息保存为文件',
    exportBackup: '导出备份',
    exportDesc: '将当前所有设置保存为 .json 备份文件',
    exportBtn: '导出备份文件',
    importBackup: '导入备份',
    importDesc: '从备份文件恢复设置',
    importBtn: '选择备份文件',
    backupExportSuccess: '备份导出成功',
    backupImportSuccess: '备份导入成功，即将刷新',
    backupImportError: '备份文件无效',
    system: '系统',
    systemDesc: '系统应用管理和恢复选项',
    restoreSystemApps: '恢复系统应用',
    restoreAppsDesc: '将系统应用恢复到默认状态',
    restoreAppsBtn: '恢复系统应用',
    restoreAppsSuccess: '系统应用已恢复',
    factoryReset: '恢复出厂设置',
    factoryResetDesc: '清除所有设置并恢复到初始状态。此操作不可撤销！',
    factoryResetBtn: '恢复出厂设置',
    factoryResetWarning: '警告：恢复出厂设置',
    factoryResetWarningMsg: '此操作将清除所有设置，包括：',
    resetItem1: '壁纸和主题设置',
    resetItem2: '文件夹和快捷方式',
    resetItem3: '搜索引擎偏好',
    resetItem4: '自定义组件布局',
    resetItem5: '所有本地数据',
    factoryResetFinal: '此操作不可撤销，请确认！',
    confirmReset: '确认恢复',
    factoryResetSuccess: '已恢复出厂设置，即将刷新',
    uninstallApp: '卸载应用',
    uninstallConfirmMsg: '确定要移除此应用吗？',
    uninstall: '卸载',
    uninstallSuccess: '应用已卸载',
    searchPositionSaved: '搜索栏位置已保存',
    iconVisibilitySaved: '图标显示设置已保存',
    layoutReset: '布局已重置'
  },
  'en': {
    pageTitle: 'BlueBerry OS',
    settings: 'Settings',
    chromeTools: 'Chrome Tools',
    searchPlaceholder: 'Search or type a URL',
    switchEngine: 'Switch search engine',
    engineBing: 'Bing',
    engineGoogle: 'Google',
    engineBaidu: 'Baidu',
    engineWiki: 'Wikipedia',
    allApps: 'All Apps',
    searchApps: 'Search apps',
    systemApps: 'System Apps',
    folders: 'Folders',
    chromeSettings: 'Chrome Settings',
    bookmarks: 'Bookmarks',
    history: 'History',
    downloads: 'Downloads',
    extensions: 'Extensions',
    flags: 'Flags',
    nextWallpaper: 'Next Wallpaper',
    prevWallpaper: 'Previous Wallpaper',
    customComponents: 'Custom Components',
    customizeHint: 'Drag search bar to reposition, click icons to toggle visibility',
    resetLayout: 'Reset Layout',
    done: 'Done',
    rename: 'Rename',
    delete: 'Delete',
    appearance: 'Appearance',
    searchEngine: 'Search Engine',
    animation: 'Animation',
    wallpaper: 'Wallpaper',
    language: 'Language',
    about: 'About',
    appearanceDesc: 'Customize the appearance of your new tab page',
    themeMode: 'Theme Mode',
    lightMode: 'Light',
    darkMode: 'Dark',
    colorTheme: 'Color Theme',
    colorThemeDesc: 'Choose global color theme, affects icons and text',
    fluidWallpaper: 'Fluid Wallpaper',
    enableFluid: 'Enable Fluid Wallpaper',
    fluidDesc: 'Dynamic fluid particle effect',
    fluidColor: 'Fluid Color',
    dockBar: 'Dock Bar',
    showDock: 'Show Dock Bar',
    showDockDesc: 'Show app dock at the bottom',
    blurEffect: 'Glass Effect',
    blurDesc: 'Dock bar background blur effect',
    searchEngineDesc: 'Choose your default search engine',
    defaultEngine: 'Default Search Engine',
    bingDesc: 'Microsoft search engine',
    googleDesc: 'The worlds largest search engine',
    baidu: 'Baidu',
    baiduDesc: 'Largest Chinese search engine',
    ddgDesc: 'Privacy-focused search engine',
    wiki: 'Wikipedia',
    wikiDesc: 'Search encyclopedia entries',
    animationDesc: 'Control interface animations and transitions',
    animationToggle: 'Animation Toggle',
    enableAnimation: 'Enable Animation',
    enableAnimDesc: 'Interface transitions and interactions',
    reduceMotion: 'Reduce Motion',
    reduceMotionDesc: 'Reduce animation effects',
    animationSpeed: 'Animation Speed',
    animDuration: 'Duration',
    animSpeedDesc: 'Adjust transition animation speed',
    fast: 'Fast',
    normal: 'Normal',
    slow: 'Slow',
    wallpaperDesc: 'Customize your desktop wallpaper',
    wallpaperSource: 'Wallpaper Source',
    presetWallpaper: 'Default Wallpaper',
    presetWallpaperDesc: 'Choose from preset wallpapers',
    fluidWallpaperDesc: 'Dynamic fluid particle effect',
    solidColor: 'Solid Color',
    solidColorDesc: 'Choose a solid color wallpaper',
    uploadWallpaper: 'Custom Wallpaper',
    uploadWallpaperDesc: 'Upload from local files',
    wallpaperBlur: 'Wallpaper Blur',
    enableBlur: 'Enable Wallpaper Blur',
    blurWallpaperDesc: 'Blur the wallpaper image',
    blurLevel: 'Blur Level',
    selectWallpaper: 'Select Wallpaper',
    customColor: 'Custom Color',
    customColorDesc: 'Pick any color',
    uploadHint: 'Click or drag image here to upload',
    languageDesc: 'Choose your display language',
    displayLanguage: 'Display Language',
    aboutDesc: 'A new tab page extension following Material Design 3 and Chrome OS design.',
    version: 'Version',
    author: 'Author',
    checkUpdate: 'Check for Updates',
    newFolder: 'New Folder',
    folderName: 'Folder Name',
    folderNamePlaceholder: 'e.g., Work',
    cancel: 'Cancel',
    create: 'Create',
    newName: 'New Name',
    confirm: 'Confirm',
    close: 'Close',
    confirmDelete: 'Confirm Delete',
    deleteConfirmMsg: 'Are you sure you want to delete this folder?',
    updateAvailable: 'Update available!',
    latestVersion: 'You are up to date',
    checkingUpdate: 'Checking for updates...',
    renameSuccess: 'Renamed successfully',
    deleteSuccess: 'Deleted successfully',
    movedToFolder: 'Moved to {folder}',
    uploadSuccess: 'Wallpaper uploaded successfully!',
    uploadError: 'Upload failed, please try again',
    pixelLiveWallpaper: 'Pixel Live Wallpaper',
    loadingWallpaper: 'Loading...',
    customSource: 'Custom Source',
    videoWallpaper: 'Video Wallpaper',
    applyWallpaper: 'Apply as Wallpaper',
    customUrlPlaceholder: 'Enter image URL',
    load: 'Load',
    videoUploadHint: 'Click or drag video file here',
    applyVideoWallpaper: 'Apply as Video Wallpaper',
    dragImageHint: 'Drag an image to the app icon to set as wallpaper',
    confirmWallpaper: 'Confirm Wallpaper',
    dragConfirmMsg: 'Set this image as wallpaper?',
    videoTooLarge: 'Video file too large, recommended under 50MB',
    customUrlError: 'Please enter a valid image URL',
    wallpaperApplied: 'Wallpaper applied!',
    videoWallpaperApplied: 'Video wallpaper applied!',
    customWallpaperLoaded: 'Custom wallpaper loaded',
    backupRestore: 'Backup & Restore',
    backupDesc: 'Save your settings, bookmarks and component info as a file',
    exportBackup: 'Export Backup',
    exportDesc: 'Save all current settings as .json backup file',
    exportBtn: 'Export Backup File',
    importBackup: 'Import Backup',
    importDesc: 'Restore settings from backup file',
    importBtn: 'Select Backup File',
    backupExportSuccess: 'Backup exported successfully',
    backupImportSuccess: 'Backup imported successfully, refreshing',
    backupImportError: 'Invalid backup file',
    system: 'System',
    systemDesc: 'System app management and recovery options',
    restoreSystemApps: 'Restore System Apps',
    restoreAppsDesc: 'Restore system apps to default state',
    restoreAppsBtn: 'Restore System Apps',
    restoreAppsSuccess: 'System apps restored',
    factoryReset: 'Factory Reset',
    factoryResetDesc: 'Clear all settings and restore to initial state. This cannot be undone!',
    factoryResetBtn: 'Factory Reset',
    factoryResetWarning: 'Warning: Factory Reset',
    factoryResetWarningMsg: 'This will clear all settings, including:',
    resetItem1: 'Wallpaper and theme settings',
    resetItem2: 'Folders and shortcuts',
    resetItem3: 'Search engine preferences',
    resetItem4: 'Custom component layout',
    resetItem5: 'All local data',
    factoryResetFinal: 'This action cannot be undone, please confirm!',
    confirmReset: 'Confirm Reset',
    factoryResetSuccess: 'Factory reset complete, refreshing',
    uninstallApp: 'Uninstall App',
    uninstallConfirmMsg: 'Are you sure you want to remove this app?',
    uninstall: 'Uninstall',
    uninstallSuccess: 'App uninstalled',
    searchPositionSaved: 'Search bar position saved',
    iconVisibilitySaved: 'Icon visibility settings saved',
    layoutReset: 'Layout reset'
  }
};

let currentLang = 'zh-CN';

function t(key) {
  return i18n[currentLang]?.[key] || i18n['zh-CN'][key] || key;
}

function applyI18n() {
  document.documentElement.lang = currentLang;

  const titleKey = document.querySelector('title')?.getAttribute('data-i18n');
  if (titleKey) document.title = t(titleKey);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    el.title = t(key);
  });

  updateClock();
}

// ==================== 配置数据 ====================

const VERSION = '0.3.0';
const CODENAME = 'Berry Bliss';
const BUILD_TIME = new Date().toISOString().replace('T', ' ').substring(0, 19);

const searchEngines = {
  bing: { name: '必应', url: 'https://www.bing.com/search?q=' },
  google: { name: 'Google', url: 'https://www.google.com/search?q=' },
  baidu: { name: '百度', url: 'https://www.baidu.com/s?wd=' },
  duckduckgo: { name: 'DuckDuckGo', url: 'https://duckduckgo.com/?q=' },
  wiki: { name: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=' }
};

const fluidColorSchemes = {
  blue: ['rgba(25, 113, 194, 0.4)', 'rgba(59, 130, 246, 0.3)', 'rgba(14, 165, 233, 0.3)'],
  purple: ['rgba(124, 58, 237, 0.4)', 'rgba(139, 92, 246, 0.3)', 'rgba(168, 85, 247, 0.3)'],
  green: ['rgba(16, 185, 129, 0.4)', 'rgba(34, 197, 94, 0.3)', 'rgba(52, 211, 153, 0.3)'],
  orange: ['rgba(245, 158, 11, 0.4)', 'rgba(249, 115, 22, 0.3)', 'rgba(251, 146, 60, 0.3)'],
  pink: ['rgba(236, 72, 153, 0.4)', 'rgba(244, 63, 94, 0.3)', 'rgba(251, 113, 133, 0.3)'],
  rainbow: [
    'rgba(25, 113, 194, 0.35)',
    'rgba(124, 58, 237, 0.3)',
    'rgba(236, 72, 153, 0.3)',
    'rgba(245, 158, 11, 0.3)',
    'rgba(16, 185, 129, 0.3)'
  ]
};

const defaultSystemApps = [
  { id: 'pixel-wallpaper', name: '壁纸', action: 'openPixelWallpaper', type: 'pixel-wallpaper' }
];

let systemApps = JSON.parse(JSON.stringify(defaultSystemApps));

const defaultFolders = [
  {
    id: 'f1',
    name: '工作',
    items: [
      { id: 'sf1', name: 'Google Docs', url: 'https://docs.google.com', icon: 'D' },
      { id: 'sf2', name: 'Google Sheets', url: 'https://sheets.google.com', icon: 'S' },
      { id: 'sf3', name: 'Notion', url: 'https://www.notion.so', icon: 'N' }
    ]
  },
  {
    id: 'f2',
    name: '娱乐',
    items: [
      { id: 'sf4', name: 'YouTube', url: 'https://www.youtube.com', icon: 'Y' },
      { id: 'sf5', name: 'B站', url: 'https://www.bilibili.com', icon: 'B' }
    ]
  }
];

const presetWallpapers = [
  { id: 'mountain', name: '山脉', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80' },
  { id: 'forest', name: '森林', url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80' },
  { id: 'ocean', name: '海洋', url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80' },
  { id: 'sunset', name: '日落', url: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=1920&q=80' },
  { id: 'city', name: '城市夜景', url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1920&q=80' },
  { id: 'space', name: '星空', url: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80' },
  { id: 'desert', name: '沙漠', url: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920&q=80' },
  { id: 'aurora', name: '极光', url: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=1920&q=80' }
];

const solidColors = [
  '#1a1a2e', '#16213e', '#0f3460', '#2d3436',
  '#6c5ce7', '#0984e3', '#00b894', '#e17055',
  '#d63031', '#fdcb6e', '#e84393', '#00cec9',
  '#2d3436', '#636e72', '#0984e3', '#6c5ce7'
];

// Pixel Live Wallpaper SVG 图标
const pixelWallpaperIconSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="18" rx="3"/>
  <path d="M3 16l5-5 4 4 3-3 6 6"/>
  <circle cx="8.5" cy="8.5" r="1.5"/>
</svg>`;

// ==================== 状态 ====================

let state = {
  language: 'zh-CN',
  searchEngine: 'bing',
  folders: JSON.parse(JSON.stringify(defaultFolders)),
  dockShortcuts: [],
  themeMode: 'dark',
  themeColor: 'default',
  wallpaperSource: 'preset',
  presetWallpaper: 'mountain',
  solidColor: '#1a1a2e',
  uploadedWallpaper: '',
  wallpaperBlur: true,
  blurLevel: 3,
  fluidWallpaper: false,
  fluidColor: 'rainbow',
  dockEnabled: true,
  dockBlur: true,
  animationEnabled: true,
  reduceMotion: false,
  animationSpeed: 1,
  videoWallpaper: '',
  pixelWallpaperSource: 'custom',
  pixelCustomUrl: '',
  wallpaperHistory: [],
  searchPos: { x: null, y: null },
  hiddenIcons: []
};

// ==================== DOM 元素 ====================

const els = {};

function cacheEls() {
  els.clock = document.getElementById('clock');
  els.date = document.getElementById('date');
  els.wallpaper = document.getElementById('wallpaper');
  els.fluidCanvas = document.getElementById('fluidWallpaper');
  els.videoWallpaper = document.getElementById('videoWallpaper');
  els.searchLogo = document.getElementById('searchLogo');
  els.searchForm = document.getElementById('searchForm');
  els.searchInput = document.getElementById('searchInput');
  els.searchContainer = document.getElementById('searchContainer');
  els.searchEngineBtn = document.getElementById('searchEngineBtn');
  els.engineSelector = document.getElementById('engineSelector');
  els.statusBar = document.getElementById('statusBar');
  els.dockBar = document.getElementById('dockBar');
  els.dockItems = document.getElementById('dockItems');
  els.drawerBtn = document.getElementById('drawerBtn');
  els.appDrawer = document.getElementById('appDrawer');
  els.drawerHandle = document.getElementById('drawerHandle');
  els.drawerSearch = document.getElementById('drawerSearch');
  els.systemAppsGrid = document.getElementById('systemAppsGrid');
  els.foldersGrid = document.getElementById('foldersGrid');
  els.folderViewer = document.getElementById('folderViewer');
  els.folderTitle = document.getElementById('folderTitle');
  els.folderGrid = document.getElementById('folderGrid');
  els.folderBackBtn = document.getElementById('folderBackBtn');
  els.chromeToolsBtn = document.getElementById('chromeToolsBtn');
  els.chromeMenu = document.getElementById('chromeMenu');
  els.settingsBtn = document.getElementById('settingsBtn');
  els.settingsPanel = document.getElementById('settingsPanel');
  els.closeSettingsBtn = document.getElementById('closeSettingsBtn');
  els.settingsNavItems = document.querySelectorAll('.settings-nav-item');
  els.settingsSections = document.querySelectorAll('.settings-section');
  els.newFolderDialog = document.getElementById('newFolderDialog');
  els.renameDialog = document.getElementById('renameDialog');
  els.confirmDialog = document.getElementById('confirmDialog');
  els.cancelFolder = document.getElementById('cancelFolder');
  els.saveFolder = document.getElementById('saveFolder');
  els.folderName = document.getElementById('folderName');
  els.cancelRename = document.getElementById('cancelRename');
  els.confirmRename = document.getElementById('confirmRename');
  els.renameInput = document.getElementById('renameInput');
  els.cancelConfirm = document.getElementById('cancelConfirm');
  els.okConfirm = document.getElementById('okConfirm');
  els.confirmTitle = document.getElementById('confirmTitle');
  els.confirmMessage = document.getElementById('confirmMessage');
  els.contextMenu = document.getElementById('contextMenu');
  els.folderContextMenu = document.getElementById('folderContextMenu');
  els.wallpaperBlurToggle = document.getElementById('wallpaperBlurToggle');
  els.wallpaperBlurSwitch = document.getElementById('wallpaperBlurSwitch');
  els.blurLevelSlider = document.getElementById('blurLevelSlider');
  els.blurLevelValue = document.getElementById('blurLevelValue');
  els.blurSliderSection = document.getElementById('blurSliderSection');
  els.fluidToggle = document.getElementById('fluidToggle');
  els.fluidColorSection = document.getElementById('fluidColorSection');
  els.presetWallpaperCard = document.getElementById('presetWallpaperCard');
  els.solidColorCard = document.getElementById('solidColorCard');
  els.uploadWallpaperCard = document.getElementById('uploadWallpaperCard');
  els.settingsWallpaperGrid = document.getElementById('settingsWallpaperGrid');
  els.dockEnabledToggle = document.getElementById('dockEnabledToggle');
  els.dockBlurToggle = document.getElementById('dockBlurToggle');
  els.animationToggle = document.getElementById('animationToggle');
  els.reduceMotionToggle = document.getElementById('reduceMotionToggle');
  els.animationSpeed = document.getElementById('animationSpeed');
  els.checkUpdateBtn = document.getElementById('checkUpdateBtn');
  els.versionText = document.getElementById('versionText');
  els.buildTime = document.getElementById('buildTime');
  els.toast = document.getElementById('toast');
  els.mainContent = document.getElementById('mainContent');
  els.solidColorPicker = document.getElementById('solidColorPicker');
  els.customColorPicker = document.getElementById('customColorPicker');
  els.uploadArea = document.getElementById('uploadArea');
  els.uploadInput = document.getElementById('uploadInput');
  els.uploadPreview = document.getElementById('uploadPreview');
  els.uploadPreviewImg = document.getElementById('uploadPreviewImg');
  // Color theme
  els.colorThemePicker = document.getElementById('colorThemePicker');
  // Pixel Live Wallpaper
  els.pixelWallpaperDialog = document.getElementById('pixelWallpaperDialog');
  els.closePixelDialog = document.getElementById('closePixelDialog');
  els.closePixelDialogBtn = document.getElementById('closePixelDialogBtn');
  els.pixelSourceTabs = document.querySelectorAll('.pixel-source-tab');
  els.pixelSourceContents = document.querySelectorAll('.pixel-source-content');
  els.pixelCustomUrl = document.getElementById('pixelCustomUrl');
  els.pixelLoadCustomBtn = document.getElementById('pixelLoadCustomBtn');
  els.pixelCustomPreview = document.getElementById('pixelCustomPreview');
  els.pixelCustomPreviewImg = document.getElementById('pixelCustomPreviewImg');
  els.pixelApplyCustomBtn = document.getElementById('pixelApplyCustomBtn');
  els.pixelVideoUpload = document.getElementById('pixelVideoUpload');
  els.pixelVideoInput = document.getElementById('pixelVideoInput');
  els.pixelVideoPreview = document.getElementById('pixelVideoPreview');
  els.pixelVideoPreviewEl = document.getElementById('pixelVideoPreviewEl');
  els.pixelApplyVideoBtn = document.getElementById('pixelApplyVideoBtn');
  // Customize overlay
  els.customizeOverlay = document.getElementById('customizeOverlay');
  els.resetLayoutBtn = document.getElementById('resetLayoutBtn');
  els.finishCustomizeBtn = document.getElementById('finishCustomizeBtn');
  // Backup & restore
  els.exportBackupBtn = document.getElementById('exportBackupBtn');
  els.importBackupBtn = document.getElementById('importBackupBtn');
  els.importBackupInput = document.getElementById('importBackupInput');
  // System
  els.restoreSystemAppsBtn = document.getElementById('restoreSystemAppsBtn');
  els.factoryResetBtn = document.getElementById('factoryResetBtn');
  els.factoryResetDialog = document.getElementById('factoryResetDialog');
  els.cancelFactoryReset = document.getElementById('cancelFactoryReset');
  els.confirmFactoryReset = document.getElementById('confirmFactoryReset');
  // Uninstall
  els.uninstallDialog = document.getElementById('uninstallDialog');
  els.cancelUninstall = document.getElementById('cancelUninstall');
  els.confirmUninstall = document.getElementById('confirmUninstall');
  // Drag confirm
  els.dragConfirmDialog = document.getElementById('dragConfirmDialog');
  els.dragConfirmImg = document.getElementById('dragConfirmImg');
  els.cancelDragConfirm = document.getElementById('cancelDragConfirm');
  els.confirmDragConfirm = document.getElementById('confirmDragConfirm');
}

// ==================== 初始化 ====================

function init() {
  cacheEls();
  loadSettings();
  updateClock();
  setInterval(updateClock, 1000);
  setupEventListeners();

  if (els.versionText) {
    els.versionText.textContent = VERSION;
  }
  if (els.buildTime) {
    els.buildTime.textContent = `Build: ${BUILD_TIME}`;
  }
}

// ==================== 设置存储 ====================

function loadSettings() {
  try {
    chrome.storage.sync.get(null, (result) => {
      const { folders, ...rest } = result;
      Object.assign(state, rest);
      if (folders && Array.isArray(folders) && folders.length > 0) {
        state.folders = folders;
      }
      // Ensure new fields exist
      if (!state.wallpaperHistory) state.wallpaperHistory = [];
      if (!state.themeColor) state.themeColor = 'default';
      if (!state.searchPos) state.searchPos = { x: null, y: null };
      if (!state.hiddenIcons) state.hiddenIcons = [];
      if (!state.pixelWallpaperSource) state.pixelWallpaperSource = 'custom';
      applyAllSettings();
      renderAll();
      applyI18n();
    });
  } catch (e) {
    applyAllSettings();
    renderAll();
    applyI18n();
  }
}

function saveSettings() {
  try {
    const toSave = { ...state };
    // Don't save potentially huge video data in sync storage
    if (toSave.videoWallpaper && toSave.videoWallpaper.length > 500000) {
      delete toSave.videoWallpaper;
    }
    chrome.storage.sync.set(toSave);
  } catch (e) {}
}

// ==================== 时钟 ====================

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  if (els.clock) els.clock.textContent = `${hours}:${minutes}`;

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const weekDays = currentLang === 'zh-CN'
    ? ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const weekDay = weekDays[now.getDay()];

  if (els.date) {
    els.date.textContent = currentLang === 'zh-CN'
      ? `${year}年${month}月${day}日 ${weekDay}`
      : `${weekDay}, ${month}/${day}/${year}`;
  }
}

// ==================== 流体动态壁纸 ====================

let fluidAnimId = null;
let fluidParticles = [];

function initFluidWallpaper() {
  if (!state.fluidWallpaper || state.wallpaperSource !== 'fluid') return;

  const canvas = els.fluidCanvas;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const colors = fluidColorSchemes[state.fluidColor] || fluidColorSchemes.rainbow;
  fluidParticles = [];
  const count = 25;

  for (let i = 0; i < count; i++) {
    fluidParticles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 180 + 120,
      color: colors[i % colors.length]
    });
  }

  startFluidAnimation();
}

function startFluidAnimation() {
  if (fluidAnimId) cancelAnimationFrame(fluidAnimId);
  const canvas = els.fluidCanvas;
  const ctx = canvas.getContext('2d');

  function animate() {
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    fluidParticles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -p.radius) p.x = canvas.width + p.radius;
      if (p.x > canvas.width + p.radius) p.x = -p.radius;
      if (p.y < -p.radius) p.y = canvas.height + p.radius;
      if (p.y > canvas.height + p.radius) p.y = -p.radius;

      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
      gradient.addColorStop(0, p.color);
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    fluidAnimId = requestAnimationFrame(animate);
  }
  animate();
}

function stopFluidAnimation() {
  if (fluidAnimId) {
    cancelAnimationFrame(fluidAnimId);
    fluidAnimId = null;
  }
}

// ==================== 壁纸历史 ====================

function snapshotWallpaper() {
  return {
    wallpaperSource: state.wallpaperSource,
    presetWallpaper: state.presetWallpaper,
    solidColor: state.solidColor,
    uploadedWallpaper: state.uploadedWallpaper,
    fluidWallpaper: state.fluidWallpaper,
    fluidColor: state.fluidColor,
    videoWallpaper: state.videoWallpaper,
    pixelCustomUrl: state.pixelCustomUrl
  };
}

function pushWallpaperHistory() {
  state.wallpaperHistory.push(snapshotWallpaper());
  if (state.wallpaperHistory.length > 20) state.wallpaperHistory.shift();
}

function restoreWallpaperFromSnapshot(snap) {
  state.wallpaperSource = snap.wallpaperSource;
  state.presetWallpaper = snap.presetWallpaper;
  state.solidColor = snap.solidColor;
  state.uploadedWallpaper = snap.uploadedWallpaper;
  state.fluidWallpaper = snap.fluidWallpaper;
  state.fluidColor = snap.fluidColor;
  state.videoWallpaper = snap.videoWallpaper;
  state.pixelCustomUrl = snap.pixelCustomUrl;
}

function prevWallpaper() {
  if (!state.wallpaperHistory || state.wallpaperHistory.length === 0) {
    showToast(t('prevWallpaper'));
    return;
  }
  const snap = state.wallpaperHistory.pop();
  restoreWallpaperFromSnapshot(snap);
  applyWallpaper();
  saveSettings();
  updateWallpaperSourceRadio();
  renderWallpaperGrid();
  updateSolidColorDots();
  if (els.fluidToggle) els.fluidToggle.checked = state.fluidWallpaper;
  showToast(t('prevWallpaper'));
}

// ==================== 壁纸应用 ====================

function applyWallpaper() {
  const wallpaperEl = els.wallpaper;
  const fluidEl = els.fluidCanvas;
  const videoEl = els.videoWallpaper;
  if (!wallpaperEl || !fluidEl || !videoEl) return;

  wallpaperEl.classList.remove('solid-bg', 'uploaded');
  videoEl.classList.remove('active');
  videoEl.pause();
  videoEl.src = '';

  if (state.videoWallpaper && state.wallpaperSource === 'video') {
    wallpaperEl.style.display = 'none';
    fluidEl.classList.remove('active');
    stopFluidAnimation();
    videoEl.src = state.videoWallpaper;
    videoEl.classList.add('active');
    videoEl.play().catch(() => {});
    applyWallpaperBlur();
    updateBlurSwitchState();
    return;
  }

  if (state.wallpaperSource === 'fluid' || state.fluidWallpaper) {
    wallpaperEl.style.display = 'none';
    videoEl.classList.remove('active');
    fluidEl.classList.add('active');
    initFluidWallpaper();
  } else {
    fluidEl.classList.remove('active');
    stopFluidAnimation();
    wallpaperEl.style.display = '';

    if (state.wallpaperSource === 'preset') {
      const wp = presetWallpapers.find(w => w.id === state.presetWallpaper);
      if (wp) {
        wallpaperEl.style.backgroundImage = `url(${wp.url})`;
        wallpaperEl.style.backgroundColor = '';
      }
    } else if (state.wallpaperSource === 'solid') {
      wallpaperEl.style.backgroundColor = state.solidColor;
      wallpaperEl.style.backgroundImage = 'none';
    } else if (state.wallpaperSource === 'upload' && state.uploadedWallpaper) {
      wallpaperEl.classList.add('uploaded');
      wallpaperEl.style.backgroundImage = `url(${state.uploadedWallpaper})`;
      wallpaperEl.style.backgroundColor = '';
    } else if (state.wallpaperSource === 'custom' && state.pixelCustomUrl) {
      wallpaperEl.style.backgroundImage = `url(${state.pixelCustomUrl})`;
      wallpaperEl.style.backgroundColor = '';
    } else {
      const wp = presetWallpapers.find(w => w.id === state.presetWallpaper);
      if (wp) {
        wallpaperEl.style.backgroundImage = `url(${wp.url})`;
        wallpaperEl.style.backgroundColor = '';
      }
    }
  }

  applyWallpaperBlur();
  updateBlurSwitchState();
}

function applyWallpaperBlur() {
  const wallpaperEl = els.wallpaper;
  if (!wallpaperEl) return;

  for (let i = 1; i <= 5; i++) {
    wallpaperEl.classList.remove(`blur-level-${i}`);
  }

  const noBlur = state.wallpaperSource === 'fluid' || state.fluidWallpaper || state.wallpaperSource === 'video';
  if (state.wallpaperBlur && !noBlur) {
    wallpaperEl.classList.add(`blur-level-${state.blurLevel}`);
  }
}

function updateBlurSwitchState() {
  const noBlur = state.wallpaperSource === 'fluid' || state.fluidWallpaper || state.wallpaperSource === 'video';
  if (els.wallpaperBlurSwitch) {
    els.wallpaperBlurSwitch.classList.toggle('disabled', noBlur);
  }
  if (els.blurSliderSection) {
    els.blurSliderSection.style.opacity = noBlur ? '0.4' : '1';
    els.blurSliderSection.style.pointerEvents = noBlur ? 'none' : 'auto';
  }
}

function nextWallpaper() {
  if (state.wallpaperSource === 'preset') {
    pushWallpaperHistory();
    const idx = presetWallpapers.findIndex(w => w.id === state.presetWallpaper);
    const nextIdx = (idx + 1) % presetWallpapers.length;
    state.presetWallpaper = presetWallpapers[nextIdx].id;
    applyWallpaper();
    saveSettings();
    showToast(t('nextWallpaper'));
  } else if (state.wallpaperSource === 'solid') {
    pushWallpaperHistory();
    const idx = solidColors.indexOf(state.solidColor);
    const nextIdx = (idx + 1) % solidColors.length;
    state.solidColor = solidColors[nextIdx];
    applyWallpaper();
    saveSettings();
    showToast(t('nextWallpaper'));
  } else {
    pushWallpaperHistory();
    state.wallpaperSource = 'preset';
    state.presetWallpaper = presetWallpapers[0].id;
    state.fluidWallpaper = false;
    applyWallpaper();
    saveSettings();
    updateWallpaperSourceRadio();
    showToast(t('nextWallpaper'));
  }
}

// ==================== Pixel Live Wallpaper ====================

function openPixelWallpaper() {
  closeDrawer();
  els.pixelWallpaperDialog.classList.add('open');

  const savedSource = state.pixelWallpaperSource || 'custom';
  switchPixelSourceTab(savedSource);

  if (savedSource === 'custom' && state.pixelCustomUrl) {
    els.pixelCustomUrl.value = state.pixelCustomUrl;
    showCustomPreview(state.pixelCustomUrl);
  } else if (savedSource === 'video' && state.videoWallpaper) {
    showVideoPreview(state.videoWallpaper);
  }
}

function closePixelWallpaper() {
  els.pixelWallpaperDialog.classList.remove('open');
}

function switchPixelSourceTab(source) {
  state.pixelWallpaperSource = source;
  els.pixelSourceTabs.forEach(tab => {
    tab.classList.toggle('active', tab.dataset.pixelSource === source);
  });
  const contentMap = { custom: 'pixelCustomContent', video: 'pixelVideoContent' };
  els.pixelSourceContents.forEach(content => {
    content.classList.toggle('active', content.id === contentMap[source]);
  });
  saveSettings();
}

function showCustomPreview(url) {
  if (!url) {
    showToast(t('customUrlError'));
    return;
  }
  els.pixelCustomPreviewImg.src = url;
  els.pixelCustomPreviewImg.onload = () => {
    els.pixelCustomPreview.style.display = 'block';
    els.pixelApplyCustomBtn.style.display = 'inline-flex';
  };
  els.pixelCustomPreviewImg.onerror = () => {
    showToast(t('customUrlError'));
  };
}

function applyCustomWallpaper() {
  const url = state.pixelCustomUrl;
  if (!url) {
    showToast(t('customUrlError'));
    return;
  }
  pushWallpaperHistory();
  state.wallpaperSource = 'custom';
  state.fluidWallpaper = false;
  state.videoWallpaper = '';
  applyWallpaper();
  saveSettings();
  updateWallpaperSourceRadio();
  showToast(t('customWallpaperLoaded'));
  closePixelWallpaper();
}

function handleVideoUpload(file) {
  if (!file || !file.type.startsWith('video/')) {
    showToast(t('uploadError'));
    return;
  }

  if (file.size > 50 * 1024 * 1024) {
    showToast(t('videoTooLarge'));
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target.result;
    showVideoPreview(dataUrl);
  };
  reader.onerror = () => {
    showToast(t('uploadError'));
  };
  reader.readAsDataURL(file);
}

function showVideoPreview(dataUrl) {
  els.pixelVideoPreviewEl.src = dataUrl;
  els.pixelVideoPreview.style.display = 'block';
  els.pixelApplyVideoBtn.style.display = 'inline-flex';
  els.pixelVideoPreviewEl.play().catch(() => {});
}

function applyVideoWallpaper(dataUrl) {
  pushWallpaperHistory();
  state.videoWallpaper = dataUrl;
  state.wallpaperSource = 'video';
  state.fluidWallpaper = false;
  applyWallpaper();
  saveSettings();
  showToast(t('videoWallpaperApplied'));
  closePixelWallpaper();
}

// 拖拽图片到 Pixel 应用图标
let pendingDragImage = null;

function handlePixelDragDrop(dataUrl) {
  pendingDragImage = dataUrl;
  els.dragConfirmImg.src = dataUrl;
  els.dragConfirmDialog.classList.add('open');
}

function confirmDragWallpaper() {
  if (pendingDragImage) {
    pushWallpaperHistory();
    state.uploadedWallpaper = pendingDragImage;
    state.wallpaperSource = 'upload';
    state.fluidWallpaper = false;
    state.videoWallpaper = '';
    applyWallpaper();
    saveSettings();
    updateWallpaperSourceRadio();
    showToast(t('wallpaperApplied'));
  }
  pendingDragImage = null;
  els.dragConfirmDialog.classList.remove('open');
}

// ==================== 搜索功能 ====================

function handleSearch(e) {
  e.preventDefault();
  const query = els.searchInput.value.trim();
  if (!query) return;

  if (isUrl(query)) {
    let url = query;
    if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
    window.location.href = url;
  } else {
    const engine = searchEngines[state.searchEngine];
    window.location.href = engine.url + encodeURIComponent(query);
  }
}

function isUrl(str) {
  const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i;
  return urlPattern.test(str) && str.includes('.');
}

function updateSearchLogo() {
  const logo = els.searchLogo;
  if (!logo) return;

  let html = '';
  if (state.searchEngine === 'bing') {
    html = '<span class="logo-b">B</span><span class="logo-i">i</span><span class="logo-n">n</span><span class="logo-g2">g</span>';
  } else if (state.searchEngine === 'google') {
    html = '<span class="logo-g" style="color:#4285f4">G</span><span class="logo-o1" style="color:#ea4335">o</span><span class="logo-o2" style="color:#fbbc05">o</span><span class="logo-g2" style="color:#4285f4">g</span><span class="logo-l" style="color:#34a853">l</span><span class="logo-e" style="color:#ea4335">e</span>';
  } else if (state.searchEngine === 'baidu') {
    html = '<span style="color:#2932e1;font-size:56px">百度</span>';
  } else if (state.searchEngine === 'duckduckgo') {
    html = '<span style="color:#de5833">DuckDuckGo</span>';
  } else if (state.searchEngine === 'wiki') {
    html = '<span style="color:#666;font-size:48px">Wikipedia</span>';
  }

  logo.innerHTML = html;
}

function setSearchEngine(engine) {
  state.searchEngine = engine;
  updateSearchLogo();
  saveSettings();
  updateSettingsEngineRadio();
}

function updateSettingsEngineRadio() {
  const radios = document.querySelectorAll('input[name="engine"]');
  radios.forEach(r => { r.checked = r.value === state.searchEngine; });
}

// ==================== 渲染函数 ====================

function renderAll() {
  updateSearchLogo();
  renderSystemApps();
  renderFolders();
  renderWallpaperGrid();
  updateSettingsUI();
  updateSolidColorDots();
  updateColorThemeDots();
  applyHiddenIcons();
  applySearchPos();
}

function renderSystemApps() {
  if (!els.systemAppsGrid) return;
  els.systemAppsGrid.innerHTML = '';
  systemApps.forEach(app => {
    els.systemAppsGrid.appendChild(createDrawerAppItem(app, true));
  });
}

function renderFolders() {
  if (!els.foldersGrid) return;
  els.foldersGrid.innerHTML = '';
  state.folders.forEach(folder => {
    els.foldersGrid.appendChild(createFolderItem(folder));
  });
}

function createFolderItem(folder) {
  const div = document.createElement('div');
  div.className = 'drawer-app-item folder-item';
  div.dataset.folderId = folder.id;

  const icon = document.createElement('div');
  icon.className = 'drawer-app-icon';

  const preview = document.createElement('div');
  preview.className = 'folder-icon-preview';

  folder.items.slice(0, 4).forEach(item => {
    const span = document.createElement('span');
    span.textContent = item.icon || item.name.charAt(0);
    preview.appendChild(span);
  });

  icon.appendChild(preview);

  const name = document.createElement('span');
  name.className = 'drawer-app-name';
  name.textContent = folder.name;

  div.appendChild(icon);
  div.appendChild(name);

  div.addEventListener('click', () => { openFolder(folder); });

  div.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    e.stopPropagation();
    showFolderContextMenu(e.clientX, e.clientY, folder.id);
  });

  div.addEventListener('dragover', (e) => {
    e.preventDefault();
    div.classList.add('drag-over');
  });

  div.addEventListener('dragleave', () => {
    div.classList.remove('drag-over');
  });

  div.addEventListener('drop', (e) => {
    e.preventDefault();
    div.classList.remove('drag-over');
    const shortcutId = e.dataTransfer.getData('shortcutId');
    const fromFolderId = e.dataTransfer.getData('fromFolderId');
    moveShortcutToFolder(shortcutId, folder.id, fromFolderId);
  });

  return div;
}

function createDrawerAppItem(item, isSystem, draggable = false, uninstallCtx = null) {
  const el = document.createElement(item.url ? 'a' : 'div');
  el.className = 'drawer-app-item';
  if (isSystem && item.type === 'pixel-wallpaper') {
    el.classList.add('pixel-app-item');
  }
  if (item.url) { el.href = item.url; el.target = '_blank'; }
  if (draggable && !isSystem) {
    el.draggable = true;
    el.dataset.shortcutId = item.id;

    el.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('shortcutId', item.id);
      e.dataTransfer.setData('fromFolderId', '');
      el.classList.add('dragging');
    });

    el.addEventListener('dragend', () => {
      el.classList.remove('dragging');
    });
  }

  const icon = document.createElement('div');
  icon.className = 'drawer-app-icon' + (isSystem ? ' system' : '');

  if (isSystem && item.type === 'pixel-wallpaper') {
    icon.classList.add('pixel-wallpaper');
    icon.innerHTML = pixelWallpaperIconSVG;
  } else if (isSystem) {
    icon.textContent = item.icon ? item.icon : '?';
  } else {
    const favicon = getFaviconUrl(item.url);
    const img = document.createElement('img');
    img.src = favicon;
    img.alt = item.name;
    img.onerror = function() { this.remove(); icon.textContent = item.icon || item.name.charAt(0); };
    icon.appendChild(img);
  }

  const name = document.createElement('span');
  name.className = 'drawer-app-name';
  name.textContent = item.name;

  el.appendChild(icon);
  el.appendChild(name);

  // Uninstall button for non-system items
  if (!isSystem && uninstallCtx) {
    const uninstallBtn = document.createElement('button');
    uninstallBtn.className = 'uninstall-btn';
    uninstallBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';
    uninstallBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      showUninstallDialog(uninstallCtx);
    });
    el.appendChild(uninstallBtn);
  }

  if (item.action) {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      handleSystemAction(item.action);
    });
  }

  // Pixel Live Wallpaper 拖拽支持
  if (isSystem && item.type === 'pixel-wallpaper') {
    el.addEventListener('dragover', (e) => {
      if (e.dataTransfer.types.includes('Files') || e.dataTransfer.types.includes('text/uri-list')) {
        e.preventDefault();
        el.classList.add('drag-over');
      }
    });

    el.addEventListener('dragleave', () => {
      el.classList.remove('drag-over');
    });

    el.addEventListener('drop', (e) => {
      e.preventDefault();
      e.stopPropagation();
      el.classList.remove('drag-over');

      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        const file = e.dataTransfer.files[0];
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (ev) => {
            handlePixelDragDrop(ev.target.result);
          };
          reader.readAsDataURL(file);
        } else if (file.type.startsWith('video/')) {
          if (file.size > 50 * 1024 * 1024) {
            showToast(t('videoTooLarge'));
            return;
          }
          const reader = new FileReader();
          reader.onload = (ev) => {
            applyVideoWallpaper(ev.target.result);
          };
          reader.readAsDataURL(file);
        }
      }
    });
  }

  return el;
}

function renderWallpaperGrid() {
  if (!els.settingsWallpaperGrid) return;
  els.settingsWallpaperGrid.innerHTML = '';
  presetWallpapers.forEach(wp => {
    const item = document.createElement('div');
    item.className = 'wallpaper-item';
    item.style.backgroundImage = `url(${wp.url})`;
    if (state.presetWallpaper === wp.id) item.classList.add('selected');
    item.addEventListener('click', () => {
      pushWallpaperHistory();
      state.presetWallpaper = wp.id;
      state.wallpaperSource = 'preset';
      applyWallpaper();
      saveSettings();
      renderWallpaperGrid();
      updateWallpaperSourceRadio();
    });
    els.settingsWallpaperGrid.appendChild(item);
  });
}

function updateSolidColorDots() {
  if (!els.solidColorPicker) return;
  document.querySelectorAll('.solid-color-dot').forEach(dot => {
    dot.classList.toggle('active', dot.dataset.color === state.solidColor);
  });
}

function updateColorThemeDots() {
  document.querySelectorAll('.color-theme-dot').forEach(dot => {
    dot.classList.toggle('active', dot.dataset.themeColor === state.themeColor);
  });
}

// ==================== 文件夹功能 ====================

let currentFolder = null;

function openFolder(folder) {
  currentFolder = folder;
  els.folderTitle.textContent = folder.name;
  els.folderGrid.innerHTML = '';

  folder.items.forEach(item => {
    const el = createDrawerAppItem(item, false, true, { type: 'folder-item', folderId: folder.id, itemId: item.id });
    el.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('shortcutId', item.id);
      e.dataTransfer.setData('fromFolderId', folder.id);
    });
    els.folderGrid.appendChild(el);
  });

  els.folderViewer.classList.add('open');
}

function closeFolder() {
  els.folderViewer.classList.remove('open');
  currentFolder = null;
}

function moveShortcutToFolder(shortcutId, targetFolderId, fromFolderId) {
  let shortcut = null;

  if (fromFolderId) {
    const fromFolder = state.folders.find(f => f.id === fromFolderId);
    if (fromFolder) {
      const idx = fromFolder.items.findIndex(i => i.id === shortcutId);
      if (idx > -1) {
        shortcut = fromFolder.items.splice(idx, 1)[0];
      }
    }
  }

  if (!shortcut) return;

  const targetFolder = state.folders.find(f => f.id === targetFolderId);
  if (targetFolder && fromFolderId !== targetFolderId) {
    targetFolder.items.push(shortcut);
  } else if (fromFolderId === targetFolderId) {
    return;
  }

  saveSettings();
  renderFolders();

  if (currentFolder) {
    if (currentFolder.id === fromFolderId) {
      openFolder(currentFolder);
    }
  }

  showToast(t('movedToFolder').replace('{folder}', targetFolder?.name || ''));
}

// ==================== 系统应用动作 ====================

function handleSystemAction(action) {
  switch (action) {
    case 'openSettings': openSettings(); break;
    case 'openWallpaperSettings': openSettings('wallpaper'); break;
    case 'openPixelWallpaper': openPixelWallpaper(); break;
  }
  if (action !== 'openPixelWallpaper') closeDrawer();
}

// ==================== 抽屉功能 ====================

function openDrawer() {
  els.appDrawer.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  els.appDrawer.classList.remove('open');
  document.body.style.overflow = '';
}

// ==================== 设置面板 ====================

function openSettings(section = 'appearance') {
  els.settingsPanel.classList.add('open');
  switchSettingsSection(section);
}

function closeSettings() {
  els.settingsPanel.classList.remove('open');
}

function switchSettingsSection(sectionId) {
  els.settingsNavItems.forEach(item => {
    item.classList.toggle('active', item.dataset.section === sectionId);
  });
  els.settingsSections.forEach(sec => {
    sec.classList.toggle('active', sec.id === 'section-' + sectionId);
  });
}

function updateSettingsUI() {
  const themeRadios = document.querySelectorAll('input[name="themeMode"]');
  themeRadios.forEach(r => { r.checked = r.value === state.themeMode; });

  els.fluidToggle.checked = state.fluidWallpaper;
  els.dockEnabledToggle.checked = state.dockEnabled;
  els.dockBlurToggle.checked = state.dockBlur;
  els.animationToggle.checked = state.animationEnabled;
  els.reduceMotionToggle.checked = state.reduceMotion;
  els.animationSpeed.value = state.animationSpeed;
  els.wallpaperBlurToggle.checked = state.wallpaperBlur;
  els.blurLevelSlider.value = state.blurLevel;
  els.blurLevelValue.textContent = state.blurLevel;
  els.customColorPicker.value = state.solidColor;

  updateSettingsEngineRadio();
  updateWallpaperSourceRadio();
  updateFluidColorDots();
  updateLanguageRadio();
  updateColorThemeDots();

  els.blurSliderSection.style.display = state.wallpaperBlur ? 'block' : 'none';

  updateBlurSwitchState();
}

function updateWallpaperSourceRadio() {
  const radios = document.querySelectorAll('input[name="wallpaperSource"]');
  radios.forEach(r => { r.checked = r.value === state.wallpaperSource; });

  const showPreset = state.wallpaperSource === 'preset';
  const showSolid = state.wallpaperSource === 'solid';
  const showUpload = state.wallpaperSource === 'upload';

  if (els.presetWallpaperCard) {
    els.presetWallpaperCard.style.display = showPreset ? 'block' : 'none';
    els.presetWallpaperCard.classList.toggle('disabled-card', !showPreset);
  }
  if (els.solidColorCard) {
    els.solidColorCard.style.display = showSolid ? 'block' : 'none';
    els.solidColorCard.classList.toggle('disabled-card', !showSolid);
  }
  if (els.uploadWallpaperCard) {
    els.uploadWallpaperCard.style.display = showUpload ? 'block' : 'none';
    els.uploadWallpaperCard.classList.toggle('disabled-card', !showUpload);
  }
}

function updateFluidColorDots() {
  document.querySelectorAll('.color-dot').forEach(dot => {
    if (dot.classList.contains('solid-color-dot')) return;
    dot.classList.toggle('active', dot.dataset.color === state.fluidColor);
  });
}

function updateLanguageRadio() {
  const radios = document.querySelectorAll('input[name="language"]');
  radios.forEach(r => { r.checked = r.value === state.language; });
}

// ==================== 颜色主题 ====================

function setColorTheme(color) {
  state.themeColor = color;
  applyColorTheme();
  saveSettings();
  updateColorThemeDots();
}

function applyColorTheme() {
  if (state.themeColor && state.themeColor !== 'default') {
    document.body.dataset.themeColor = state.themeColor;
  } else {
    delete document.body.dataset.themeColor;
  }
}

// ==================== 搜索栏位置 ====================

function applySearchPos() {
  if (!els.searchContainer) return;
  if (state.searchPos && state.searchPos.x !== null && state.searchPos.y !== null) {
    els.searchContainer.style.position = 'fixed';
    els.searchContainer.style.left = state.searchPos.x + 'px';
    els.searchContainer.style.top = state.searchPos.y + 'px';
  } else {
    els.searchContainer.style.position = '';
    els.searchContainer.style.left = '';
    els.searchContainer.style.top = '';
  }
}

function saveSearchPos() {
  if (!els.searchContainer) return;
  if (els.searchContainer.style.position === 'fixed') {
    const left = parseInt(els.searchContainer.style.left);
    const top = parseInt(els.searchContainer.style.top);
    if (!isNaN(left) && !isNaN(top)) {
      state.searchPos = { x: left, y: top };
    }
  } else {
    state.searchPos = { x: null, y: null };
  }
}

// ==================== 隐藏图标 ====================

function applyHiddenIcons() {
  if (!state.hiddenIcons || !Array.isArray(state.hiddenIcons)) return;
  const iconBtns = document.querySelectorAll('.icon-btn');
  iconBtns.forEach(btn => {
    if (state.hiddenIcons.includes(btn.id)) {
      btn.classList.add('hidden-icon');
      if (!document.body.classList.contains('customizing')) {
        btn.style.display = 'none';
      } else {
        btn.style.display = '';
      }
    } else {
      btn.classList.remove('hidden-icon');
      btn.style.display = '';
    }
  });
}

// ==================== 自定义组件模式 ====================

let isDragging = false;
let dragOffsetX = 0;
let dragOffsetY = 0;

function enterCustomizing() {
  closeDrawer();
  document.body.classList.add('customizing');
  els.customizeOverlay.classList.add('active');
  // Remove inline display:none so CSS opacity takes effect during customizing
  document.querySelectorAll('.icon-btn.hidden-icon').forEach(btn => {
    btn.style.display = '';
  });
}

function exitCustomizing() {
  document.body.classList.remove('customizing');
  els.customizeOverlay.classList.remove('active');
  // Re-apply display:none for hidden icons outside customizing
  document.querySelectorAll('.icon-btn.hidden-icon').forEach(btn => {
    btn.style.display = 'none';
  });
  saveSearchPos();
  saveSettings();
  showToast(t('searchPositionSaved'));
}

function resetLayout() {
  state.searchPos = { x: null, y: null };
  state.hiddenIcons = [];
  if (els.searchContainer) {
    els.searchContainer.style.position = '';
    els.searchContainer.style.left = '';
    els.searchContainer.style.top = '';
  }
  document.querySelectorAll('.icon-btn').forEach(btn => {
    btn.classList.remove('hidden-icon');
    btn.style.display = '';
  });
  saveSettings();
  showToast(t('layoutReset'));
}

function handleIconToggle(iconId) {
  if (!document.body.classList.contains('customizing')) return;
  const icon = document.getElementById(iconId);
  if (!icon || !icon.classList.contains('icon-btn')) return;
  icon.classList.toggle('hidden-icon');
  if (icon.classList.contains('hidden-icon')) {
    if (!state.hiddenIcons.includes(iconId)) {
      state.hiddenIcons.push(iconId);
    }
  } else {
    state.hiddenIcons = state.hiddenIcons.filter(id => id !== iconId);
  }
  saveSettings();
  showToast(t('iconVisibilitySaved'));
}

// ==================== 卸载应用 ====================

let uninstallTarget = null;

function showUninstallDialog(ctx) {
  uninstallTarget = ctx;
  els.uninstallDialog.classList.add('open');
}

function confirmUninstall() {
  if (!uninstallTarget) return;

  if (uninstallTarget.type === 'folder-item') {
    const folder = state.folders.find(f => f.id === uninstallTarget.folderId);
    if (folder) {
      folder.items = folder.items.filter(i => i.id !== uninstallTarget.itemId);
    }
    if (currentFolder && currentFolder.id === uninstallTarget.folderId) {
      openFolder(currentFolder);
    }
  } else if (uninstallTarget.type === 'dock-shortcut') {
    state.dockShortcuts = state.dockShortcuts.filter(s => s.id !== uninstallTarget.itemId);
  }

  saveSettings();
  renderFolders();
  showToast(t('uninstallSuccess'));
  uninstallTarget = null;
  els.uninstallDialog.classList.remove('open');
}

// ==================== 备份与恢复 ====================

function exportBackup() {
  const backup = { ...state };
  // Don't export video wallpaper data URL (too large)
  delete backup.videoWallpaper;
  backup.__backupVersion = VERSION;
  backup.__backupTime = new Date().toISOString();

  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `blueberry-os-backup-${Date.now()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(t('backupExportSuccess'));
}

function importBackup(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data || typeof data !== 'object') throw new Error('Invalid backup');

      // Merge into state
      Object.assign(state, data);
      delete state.__backupVersion;
      delete state.__backupTime;

      // Ensure required fields
      if (!state.folders || !Array.isArray(state.folders)) {
        state.folders = JSON.parse(JSON.stringify(defaultFolders));
      }
      if (!state.wallpaperHistory) state.wallpaperHistory = [];
      if (!state.themeColor) state.themeColor = 'default';
      if (!state.searchPos) state.searchPos = { x: null, y: null };
      if (!state.hiddenIcons) state.hiddenIcons = [];

      saveSettings();
      showToast(t('backupImportSuccess'));
      setTimeout(() => location.reload(), 1000);
    } catch (err) {
      showToast(t('backupImportError'));
    }
  };
  reader.onerror = () => {
    showToast(t('backupImportError'));
  };
  reader.readAsText(file);
}

// ==================== 恢复系统应用 ====================

function restoreSystemApps() {
  systemApps = JSON.parse(JSON.stringify(defaultSystemApps));
  renderSystemApps();
  saveSettings();
  showToast(t('restoreAppsSuccess'));
}

// ==================== 恢复出厂设置 ====================

function showFactoryResetDialog() {
  els.factoryResetDialog.classList.add('open');
}

function confirmFactoryReset() {
  try {
    chrome.storage.sync.clear(() => {
      // Reset state to defaults
      state = {
        language: 'zh-CN',
        searchEngine: 'bing',
        folders: JSON.parse(JSON.stringify(defaultFolders)),
        dockShortcuts: [],
        themeMode: 'dark',
        themeColor: 'default',
        wallpaperSource: 'preset',
        presetWallpaper: 'mountain',
        solidColor: '#1a1a2e',
        uploadedWallpaper: '',
        wallpaperBlur: true,
        blurLevel: 3,
        fluidWallpaper: false,
        fluidColor: 'rainbow',
        dockEnabled: true,
        dockBlur: true,
        animationEnabled: true,
        reduceMotion: false,
        animationSpeed: 1,
        videoWallpaper: '',
        pixelWallpaperSource: 'custom',
        pixelCustomUrl: '',
        wallpaperHistory: [],
        searchPos: { x: null, y: null },
        hiddenIcons: []
      };
      systemApps = JSON.parse(JSON.stringify(defaultSystemApps));
      els.factoryResetDialog.classList.remove('open');
      showToast(t('factoryResetSuccess'));
      setTimeout(() => location.reload(), 1000);
    });
  } catch (e) {
    showToast(t('factoryResetSuccess'));
    setTimeout(() => location.reload(), 1000);
  }
}

// ==================== 应用所有设置 ====================

function applyAllSettings() {
  currentLang = state.language || 'zh-CN';
  applyTheme();
  applyColorTheme();

  if (!state.animationEnabled) {
    document.body.classList.add('no-animation');
  } else {
    document.body.classList.remove('no-animation');
  }

  if (state.dockEnabled) {
    els.dockBar.classList.remove('hidden');
  } else {
    els.dockBar.classList.add('hidden');
  }

  if (state.dockBlur) {
    els.dockBar.classList.remove('no-blur');
  } else {
    els.dockBar.classList.add('no-blur');
  }

  applyWallpaper();
  applySearchPos();
  applyHiddenIcons();

  if (state.animationSpeed) {
    document.documentElement.style.setProperty('--anim-speed', state.animationSpeed);
  }
}

function applyTheme() {
  document.body.classList.remove('dark-mode', 'light-mode');

  if (state.themeMode === 'dark') {
    document.body.classList.add('dark-mode');
  } else if (state.themeMode === 'light') {
    document.body.classList.add('light-mode');
  }
}

// ==================== 右键菜单 ====================

function showContextMenu(x, y) {
  const menu = els.contextMenu;
  menu.style.left = x + 'px';
  menu.style.top = y + 'px';
  menu.classList.add('open');

  requestAnimationFrame(() => {
    const rect = menu.getBoundingClientRect();
    if (rect.right > window.innerWidth) {
      menu.style.left = (window.innerWidth - rect.width - 10) + 'px';
    }
    if (rect.bottom > window.innerHeight) {
      menu.style.top = (window.innerHeight - rect.height - 10) + 'px';
    }
  });
}

function hideContextMenu() {
  els.contextMenu.classList.remove('open');
  els.folderContextMenu.classList.remove('open');
}

let contextMenuFolderId = null;

function showFolderContextMenu(x, y, folderId) {
  contextMenuFolderId = folderId;
  const menu = els.folderContextMenu;
  menu.style.left = x + 'px';
  menu.style.top = y + 'px';
  menu.classList.add('open');

  requestAnimationFrame(() => {
    const rect = menu.getBoundingClientRect();
    if (rect.right > window.innerWidth) {
      menu.style.left = (window.innerWidth - rect.width - 10) + 'px';
    }
    if (rect.bottom > window.innerHeight) {
      menu.style.top = (window.innerHeight - rect.height - 10) + 'px';
    }
  });
}

// ==================== 重命名 / 删除 ====================

let renameTargetId = null;
let renameTargetType = null;

function openRenameDialog(folderId) {
  const folder = state.folders.find(f => f.id === folderId);
  if (!folder) return;

  renameTargetId = folderId;
  renameTargetType = 'folder';
  els.renameInput.value = folder.name;
  els.renameDialog.classList.add('open');
  els.renameInput.focus();
  els.renameInput.select();
}

function confirmRename() {
  const newName = els.renameInput.value.trim();
  if (!newName) return;

  if (renameTargetType === 'folder') {
    const folder = state.folders.find(f => f.id === renameTargetId);
    if (folder) {
      folder.name = newName;
      saveSettings();
      renderFolders();
      showToast(t('renameSuccess'));
    }
  }

  els.renameDialog.classList.remove('open');
}

let confirmCallback = null;

function openConfirmDialog(title, message, callback) {
  els.confirmTitle.textContent = title;
  els.confirmMessage.textContent = message;
  confirmCallback = callback;
  els.confirmDialog.classList.add('open');
}

function handleConfirm() {
  if (confirmCallback) confirmCallback();
  els.confirmDialog.classList.remove('open');
  confirmCallback = null;
}

function deleteFolder(folderId) {
  openConfirmDialog(
    t('confirmDelete'),
    t('deleteConfirmMsg'),
    () => {
      state.folders = state.folders.filter(f => f.id !== folderId);
      saveSettings();
      renderFolders();
      showToast(t('deleteSuccess'));
    }
  );
}

// ==================== 上传壁纸 ====================

function handleWallpaperUpload(file) {
  if (!file || !file.type.startsWith('image/')) {
    showToast(t('uploadError'));
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target.result;
    pushWallpaperHistory();
    state.uploadedWallpaper = dataUrl;
    state.wallpaperSource = 'upload';

    if (els.uploadPreviewImg) {
      els.uploadPreviewImg.src = dataUrl;
      els.uploadPreview.style.display = 'block';
    }

    applyWallpaper();
    saveSettings();
    updateWallpaperSourceRadio();
    showToast(t('uploadSuccess'));
  };
  reader.onerror = () => {
    showToast(t('uploadError'));
  };
  reader.readAsDataURL(file);
}

// ==================== Toast ====================

let toastTimer = null;

function showToast(message) {
  const toast = els.toast;
  toast.textContent = message;
  toast.classList.add('show');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

// ==================== 检查更新 ====================

function checkUpdate() {
  showToast(t('checkingUpdate'));
  setTimeout(() => {
    showToast(t('latestVersion'));
  }, 1500);
}

// ==================== 工具函数 ====================

function getFaviconUrl(url) {
  try {
    const hostname = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`;
  } catch (e) { return ''; }
}

function generateId() {
  return 'id_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// ==================== 事件监听 ====================

function setupEventListeners() {
  // 搜索
  els.searchForm.addEventListener('submit', handleSearch);

  // 搜索引擎切换
  els.searchEngineBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    els.engineSelector.classList.toggle('open');
  });

  document.querySelectorAll('.engine-option').forEach(opt => {
    opt.addEventListener('click', () => {
      setSearchEngine(opt.dataset.engine);
      els.engineSelector.classList.remove('open');
    });
  });

  // 点击外部
  document.addEventListener('click', (e) => {
    if (!els.engineSelector.contains(e.target) && !els.searchEngineBtn.contains(e.target)) {
      els.engineSelector.classList.remove('open');
    }
    if (!els.chromeMenu.contains(e.target) && !els.chromeToolsBtn.contains(e.target)) {
      els.chromeMenu.classList.remove('open');
    }
    hideContextMenu();
  });

  // 主界面右键
  els.mainContent.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    showContextMenu(e.clientX, e.clientY);
  });

  // 右键菜单项
  els.contextMenu.querySelectorAll('.context-menu-item').forEach(item => {
    item.addEventListener('click', () => {
      const action = item.dataset.action;
      if (action === 'nextWallpaper') nextWallpaper();
      if (action === 'prevWallpaper') prevWallpaper();
      if (action === 'customComponents') enterCustomizing();
      if (action === 'openSettings') openSettings();
      hideContextMenu();
    });
  });

  // 文件夹右键菜单项
  els.folderContextMenu.querySelectorAll('.context-menu-item').forEach(item => {
    item.addEventListener('click', () => {
      const action = item.dataset.action;
      if (action === 'renameFolder') openRenameDialog(contextMenuFolderId);
      if (action === 'deleteFolder') deleteFolder(contextMenuFolderId);
      hideContextMenu();
    });
  });

  // 抽屉
  els.drawerBtn.addEventListener('click', openDrawer);
  els.appDrawer.addEventListener('click', (e) => {
    if (e.target === els.appDrawer) closeDrawer();
  });
  els.drawerHandle.addEventListener('click', closeDrawer);

  els.drawerSearch.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    filterDrawerItems(query);
  });

  // 文件夹返回
  els.folderBackBtn.addEventListener('click', closeFolder);

  // Chrome 工具
  els.chromeToolsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    els.chromeMenu.classList.toggle('open');
  });

  document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
      const url = item.dataset.url;
      try { chrome.tabs.update({ url }); }
      catch (e) { window.open(url, '_blank'); }
      els.chromeMenu.classList.remove('open');
    });
  });

  // 设置
  els.settingsBtn.addEventListener('click', () => openSettings('appearance'));
  els.closeSettingsBtn.addEventListener('click', closeSettings);

  els.settingsNavItems.forEach(item => {
    item.addEventListener('click', () => switchSettingsSection(item.dataset.section));
  });

  // 主题模式
  document.querySelectorAll('input[name="themeMode"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      state.themeMode = e.target.value;
      applyTheme();
      saveSettings();
    });
  });

  // 颜色主题
  document.querySelectorAll('.color-theme-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      setColorTheme(dot.dataset.themeColor);
    });
  });

  // 流体壁纸开关
  els.fluidToggle.addEventListener('change', (e) => {
    pushWallpaperHistory();
    state.fluidWallpaper = e.target.checked;
    if (state.fluidWallpaper) {
      state.wallpaperSource = 'fluid';
      updateWallpaperSourceRadio();
    }
    applyWallpaper();
    saveSettings();
  });

  // 流体颜色
  document.querySelectorAll('.color-dot:not(.solid-color-dot)').forEach(dot => {
    dot.addEventListener('click', () => {
      pushWallpaperHistory();
      state.fluidColor = dot.dataset.color;
      updateFluidColorDots();
      saveSettings();
      if (state.fluidWallpaper || state.wallpaperSource === 'fluid') {
        stopFluidAnimation();
        initFluidWallpaper();
      }
    });
  });

  // Dock
  els.dockEnabledToggle.addEventListener('change', (e) => {
    state.dockEnabled = e.target.checked;
    applyAllSettings();
    saveSettings();
  });

  els.dockBlurToggle.addEventListener('change', (e) => {
    state.dockBlur = e.target.checked;
    applyAllSettings();
    saveSettings();
  });

  // 搜索引擎设置
  document.querySelectorAll('input[name="engine"]').forEach(radio => {
    radio.addEventListener('change', (e) => setSearchEngine(e.target.value));
  });

  // 动画
  els.animationToggle.addEventListener('change', (e) => {
    state.animationEnabled = e.target.checked;
    applyAllSettings();
    saveSettings();
  });

  els.reduceMotionToggle.addEventListener('change', (e) => {
    state.reduceMotion = e.target.checked;
    saveSettings();
  });

  els.animationSpeed.addEventListener('change', (e) => {
    state.animationSpeed = parseFloat(e.target.value);
    document.documentElement.style.setProperty('--anim-speed', state.animationSpeed);
    saveSettings();
  });

  // 壁纸来源
  document.querySelectorAll('input[name="wallpaperSource"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      pushWallpaperHistory();
      state.wallpaperSource = e.target.value;
      if (e.target.value === 'fluid') {
        state.fluidWallpaper = true;
        els.fluidToggle.checked = true;
      } else {
        state.fluidWallpaper = false;
        els.fluidToggle.checked = false;
      }
      applyWallpaper();
      saveSettings();
      renderWallpaperGrid();
      updateWallpaperSourceRadio();
    });
  });

  // 壁纸模糊
  els.wallpaperBlurToggle.addEventListener('change', (e) => {
    state.wallpaperBlur = e.target.checked;
    applyWallpaperBlur();
    els.blurSliderSection.style.display = state.wallpaperBlur ? 'block' : 'none';
    saveSettings();
  });

  els.blurLevelSlider.addEventListener('input', (e) => {
    state.blurLevel = parseInt(e.target.value);
    els.blurLevelValue.textContent = state.blurLevel;
    applyWallpaperBlur();
  });

  els.blurLevelSlider.addEventListener('change', () => {
    saveSettings();
  });

  // 纯色壁纸
  document.querySelectorAll('.solid-color-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      pushWallpaperHistory();
      state.solidColor = dot.dataset.color;
      state.wallpaperSource = 'solid';
      els.customColorPicker.value = state.solidColor;
      applyWallpaper();
      saveSettings();
      updateSolidColorDots();
      updateWallpaperSourceRadio();
    });
  });

  els.customColorPicker.addEventListener('input', (e) => {
    pushWallpaperHistory();
    state.solidColor = e.target.value;
    state.wallpaperSource = 'solid';
    applyWallpaper();
    saveSettings();
    updateSolidColorDots();
    updateWallpaperSourceRadio();
  });

  // 上传壁纸
  els.uploadArea.addEventListener('click', (e) => {
    e.stopPropagation();
    els.uploadInput.click();
  });

  els.uploadInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      handleWallpaperUpload(e.target.files[0]);
    }
  });

  els.uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    els.uploadArea.classList.add('dragover');
  });

  els.uploadArea.addEventListener('dragleave', () => {
    els.uploadArea.classList.remove('dragover');
  });

  els.uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    els.uploadArea.classList.remove('dragover');
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleWallpaperUpload(e.dataTransfer.files[0]);
    }
  });

  // 语言
  document.querySelectorAll('input[name="language"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      state.language = e.target.value;
      currentLang = e.target.value;
      applyI18n();
      saveSettings();
      renderAll();
      updateClock();
    });
  });

  // 新建文件夹按钮
  const newFolderBtn = document.createElement('button');
  newFolderBtn.className = 'import-btn';
  newFolderBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-1 8h-4v4h-2v-4H9v-2h4V8h2v4h4v2z"/></svg><span id="newFolderBtnText">' + (currentLang === 'zh-CN' ? '新建文件夹' : 'New Folder') + '</span>';
  newFolderBtn.addEventListener('click', () => {
    els.folderName.value = '';
    els.newFolderDialog.classList.add('open');
    els.folderName.focus();
  });
  els.foldersGrid.parentElement.appendChild(newFolderBtn);

  // 新建文件夹对话框
  els.cancelFolder.addEventListener('click', () => els.newFolderDialog.classList.remove('open'));
  els.saveFolder.addEventListener('click', () => {
    const name = els.folderName.value.trim();
    if (!name) return;
    state.folders.push({ id: generateId(), name, items: [] });
    saveSettings();
    renderFolders();
    els.newFolderDialog.classList.remove('open');
  });

  els.newFolderDialog.addEventListener('click', (e) => {
    if (e.target === els.newFolderDialog) els.newFolderDialog.classList.remove('open');
  });

  // 重命名对话框
  els.cancelRename.addEventListener('click', () => els.renameDialog.classList.remove('open'));
  els.confirmRename.addEventListener('click', confirmRename);
  els.renameDialog.addEventListener('click', (e) => {
    if (e.target === els.renameDialog) els.renameDialog.classList.remove('open');
  });

  // 确认对话框
  els.cancelConfirm.addEventListener('click', () => els.confirmDialog.classList.remove('open'));
  els.okConfirm.addEventListener('click', handleConfirm);
  els.confirmDialog.addEventListener('click', (e) => {
    if (e.target === els.confirmDialog) els.confirmDialog.classList.remove('open');
  });

  // 检查更新
  els.checkUpdateBtn.addEventListener('click', checkUpdate);

  // Pixel Live Wallpaper 事件
  els.closePixelDialog.addEventListener('click', closePixelWallpaper);
  els.closePixelDialogBtn.addEventListener('click', closePixelWallpaper);
  els.pixelWallpaperDialog.addEventListener('click', (e) => {
    if (e.target === els.pixelWallpaperDialog) closePixelWallpaper();
  });

  els.pixelSourceTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      switchPixelSourceTab(tab.dataset.pixelSource);
    });
  });

  els.pixelLoadCustomBtn.addEventListener('click', () => {
    const url = els.pixelCustomUrl.value.trim();
    if (!url) {
      showToast(t('customUrlError'));
      return;
    }
    state.pixelCustomUrl = url;
    showCustomPreview(url);
    saveSettings();
  });

  els.pixelCustomUrl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      els.pixelLoadCustomBtn.click();
    }
  });

  els.pixelApplyCustomBtn.addEventListener('click', applyCustomWallpaper);

  // Pixel 视频上传
  els.pixelVideoUpload.addEventListener('click', (e) => {
    e.stopPropagation();
    els.pixelVideoInput.click();
  });

  els.pixelVideoInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      handleVideoUpload(e.target.files[0]);
    }
  });

  els.pixelVideoUpload.addEventListener('dragover', (e) => {
    e.preventDefault();
    els.pixelVideoUpload.classList.add('dragover');
  });

  els.pixelVideoUpload.addEventListener('dragleave', () => {
    els.pixelVideoUpload.classList.remove('dragover');
  });

  els.pixelVideoUpload.addEventListener('drop', (e) => {
    e.preventDefault();
    els.pixelVideoUpload.classList.remove('dragover');
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleVideoUpload(e.dataTransfer.files[0]);
    }
  });

  els.pixelApplyVideoBtn.addEventListener('click', () => {
    if (els.pixelVideoPreviewEl.src) {
      applyVideoWallpaper(els.pixelVideoPreviewEl.src);
    }
  });

  // 拖拽确认对话框
  els.cancelDragConfirm.addEventListener('click', () => {
    pendingDragImage = null;
    els.dragConfirmDialog.classList.remove('open');
  });
  els.confirmDragConfirm.addEventListener('click', confirmDragWallpaper);
  els.dragConfirmDialog.addEventListener('click', (e) => {
    if (e.target === els.dragConfirmDialog) {
      pendingDragImage = null;
      els.dragConfirmDialog.classList.remove('open');
    }
  });

  // 自定义组件模式
  els.finishCustomizeBtn.addEventListener('click', exitCustomizing);
  els.resetLayoutBtn.addEventListener('click', resetLayout);

  // 搜索栏拖拽（自定义组件模式）
  els.searchContainer.addEventListener('mousedown', (e) => {
    if (!document.body.classList.contains('customizing')) return;
    // Don't start drag when clicking inside the search input
    if (e.target === els.searchInput) return;
    isDragging = true;
    const rect = els.searchContainer.getBoundingClientRect();
    dragOffsetX = e.clientX - rect.left;
    dragOffsetY = e.clientY - rect.top;
    els.searchContainer.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    let x = e.clientX - dragOffsetX;
    let y = e.clientY - dragOffsetY;
    const rect = els.searchContainer.getBoundingClientRect();
    x = Math.max(0, Math.min(x, window.innerWidth - rect.width));
    y = Math.max(0, Math.min(y, window.innerHeight - rect.height));
    els.searchContainer.style.position = 'fixed';
    els.searchContainer.style.left = x + 'px';
    els.searchContainer.style.top = y + 'px';
  });

  document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    els.searchContainer.style.cursor = '';
  });

  // 图标点击切换（自定义组件模式）
  document.querySelectorAll('.icon-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (!document.body.classList.contains('customizing')) return;
      e.preventDefault();
      e.stopPropagation();
      handleIconToggle(btn.id);
    });
  });

  // 备份与恢复
  els.exportBackupBtn.addEventListener('click', exportBackup);
  els.importBackupBtn.addEventListener('click', () => {
    els.importBackupInput.click();
  });
  els.importBackupInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      importBackup(e.target.files[0]);
    }
  });

  // 系统恢复
  els.restoreSystemAppsBtn.addEventListener('click', restoreSystemApps);

  // 恢复出厂设置
  els.factoryResetBtn.addEventListener('click', showFactoryResetDialog);
  els.cancelFactoryReset.addEventListener('click', () => els.factoryResetDialog.classList.remove('open'));
  els.confirmFactoryReset.addEventListener('click', confirmFactoryReset);
  els.factoryResetDialog.addEventListener('click', (e) => {
    if (e.target === els.factoryResetDialog) els.factoryResetDialog.classList.remove('open');
  });

  // 卸载确认
  els.cancelUninstall.addEventListener('click', () => {
    uninstallTarget = null;
    els.uninstallDialog.classList.remove('open');
  });
  els.confirmUninstall.addEventListener('click', confirmUninstall);
  els.uninstallDialog.addEventListener('click', (e) => {
    if (e.target === els.uninstallDialog) {
      uninstallTarget = null;
      els.uninstallDialog.classList.remove('open');
    }
  });

  // 快捷键
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeFolder();
      closeDrawer();
      closeSettings();
      closePixelWallpaper();
      if (document.body.classList.contains('customizing')) exitCustomizing();
      els.engineSelector.classList.remove('open');
      els.chromeMenu.classList.remove('open');
      els.newFolderDialog.classList.remove('open');
      els.renameDialog.classList.remove('open');
      els.confirmDialog.classList.remove('open');
      els.dragConfirmDialog.classList.remove('open');
      els.uninstallDialog.classList.remove('open');
      els.factoryResetDialog.classList.remove('open');
      hideContextMenu();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      els.searchInput.focus();
    }
  });
}

function filterDrawerItems(query) {
  document.querySelectorAll('.drawer-app-item').forEach(item => {
    const name = item.querySelector('.drawer-app-name')?.textContent?.toLowerCase();
    item.style.display = name?.includes(query) ? '' : 'none';
  });
}

// ==================== 启动 ====================

document.addEventListener('DOMContentLoaded', init);
