/* ============================================
   BlueBerry OS v0.2.1 - Blue blue berry
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
    confirmDelete: '确认删除',
    deleteConfirmMsg: '确定要删除这个文件夹吗？',
    updateAvailable: '发现新版本！',
    latestVersion: '当前已是最新版本',
    checkingUpdate: '正在检查更新...',
    renameSuccess: '重命名成功',
    deleteSuccess: '删除成功',
    movedToFolder: '已移动到 {folder}',
    uploadSuccess: '壁纸上传成功！',
    uploadError: '上传失败，请重试'
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
    confirmDelete: 'Confirm Delete',
    deleteConfirmMsg: 'Are you sure you want to delete this folder?',
    updateAvailable: 'Update available!',
    latestVersion: 'You are up to date',
    checkingUpdate: 'Checking for updates...',
    renameSuccess: 'Renamed successfully',
    deleteSuccess: 'Deleted successfully',
    movedToFolder: 'Moved to {folder}',
    uploadSuccess: 'Wallpaper uploaded successfully!',
    uploadError: 'Upload failed, please try again'
  }
};

let currentLang = 'zh-CN';

function t(key) {
  return i18n[currentLang]?.[key] || i18n['zh-CN'][key] || key;
}

function applyI18n() {
  document.documentElement.lang = currentLang;
  
  const titleEl = document.querySelector('title');
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

const VERSION = '0.2.1';
const CODENAME = 'Blue blue berry';
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

const systemApps = [
  { id: 'webstore', name: '应用商店', url: 'https://chrome.google.com/webstore', icon: '★', type: 'system' },
  { id: 'wallpaper', name: '壁纸', action: 'openWallpaperSettings', icon: '◐', type: 'system' },
  { id: 'settings', name: '设置', action: 'openSettings', icon: '⚙', type: 'system' },
  { id: 'chrome-settings', name: 'Chrome设置', url: 'chrome://settings/', icon: 'C', type: 'system' },
  { id: 'bookmarks', name: '书签', url: 'chrome://bookmarks/', icon: '♡', type: 'system' },
  { id: 'history', name: '历史记录', url: 'chrome://history/', icon: '⟲', type: 'system' }
];

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
  '#d63031', '#fdcb6e', '#e84393', '#00cec9'
];

// ==================== 状态 ====================

let state = {
  language: 'zh-CN',
  searchEngine: 'bing',
  folders: JSON.parse(JSON.stringify(defaultFolders)),
  dockShortcuts: [],
  themeMode: 'dark',
  wallpaperSource: 'preset', // preset, fluid, solid, upload
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
  animationSpeed: 1
};

// ==================== DOM 元素 ====================

const els = {};

function cacheEls() {
  els.clock = document.getElementById('clock');
  els.date = document.getElementById('date');
  els.wallpaper = document.getElementById('wallpaper');
  els.fluidCanvas = document.getElementById('fluidWallpaper');
  els.searchLogo = document.getElementById('searchLogo');
  els.searchForm = document.getElementById('searchForm');
  els.searchInput = document.getElementById('searchInput');
  els.searchEngineBtn = document.getElementById('searchEngineBtn');
  els.engineSelector = document.getElementById('engineSelector');
  els.dockBar = document.querySelector('.dock-bar');
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
      // 合并设置，但跳过 folders（避免老数据结构问题）
      const { folders, ...rest } = result;
      Object.assign(state, rest);
      if (folders && Array.isArray(folders) && folders.length > 0) {
        state.folders = folders;
      }
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
    chrome.storage.sync.set({ ...state });
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

// ==================== 壁纸应用 ====================

function applyWallpaper() {
  const wallpaperEl = els.wallpaper;
  const fluidEl = els.fluidCanvas;
  if (!wallpaperEl || !fluidEl) return;
  
  // 重置类
  wallpaperEl.classList.remove('solid-bg', 'uploaded');
  
  if (state.wallpaperSource === 'fluid' || state.fluidWallpaper) {
    wallpaperEl.style.display = 'none';
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
      wallpaperEl.classList.add('solid-bg');
      wallpaperEl.style.setProperty('--solid-color', state.solidColor);
      wallpaperEl.style.backgroundImage = 'none';
    } else if (state.wallpaperSource === 'upload' && state.uploadedWallpaper) {
      wallpaperEl.classList.add('uploaded');
      wallpaperEl.style.backgroundImage = `url(${state.uploadedWallpaper})`;
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
  
  if (state.wallpaperBlur && state.wallpaperSource !== 'fluid') {
    wallpaperEl.classList.add(`blur-level-${state.blurLevel}`);
  }
}

function updateBlurSwitchState() {
  const isFluid = state.wallpaperSource === 'fluid' || state.fluidWallpaper;
  if (els.wallpaperBlurSwitch) {
    els.wallpaperBlurSwitch.classList.toggle('disabled', isFluid);
  }
  if (els.blurSliderSection) {
    els.blurSliderSection.style.opacity = isFluid ? '0.4' : '1';
    els.blurSliderSection.style.pointerEvents = isFluid ? 'none' : 'auto';
  }
}

function nextWallpaper() {
  if (state.wallpaperSource === 'preset') {
    const idx = presetWallpapers.findIndex(w => w.id === state.presetWallpaper);
    const nextIdx = (idx + 1) % presetWallpapers.length;
    state.presetWallpaper = presetWallpapers[nextIdx].id;
    applyWallpaper();
    saveSettings();
    showToast(t('nextWallpaper'));
  } else if (state.wallpaperSource === 'solid') {
    const idx = solidColors.indexOf(state.solidColor);
    const nextIdx = (idx + 1) % solidColors.length;
    state.solidColor = solidColors[nextIdx];
    applyWallpaper();
    saveSettings();
    showToast(t('nextWallpaper'));
  } else {
    state.wallpaperSource = 'preset';
    state.presetWallpaper = presetWallpapers[0].id;
    state.fluidWallpaper = false;
    applyWallpaper();
    saveSettings();
    updateWallpaperSourceRadio();
    showToast(t('nextWallpaper'));
  }
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

function createDrawerAppItem(item, isSystem, draggable = false) {
  const el = document.createElement(item.url ? 'a' : 'div');
  el.className = 'drawer-app-item';
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
  
  if (isSystem) {
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
  
  if (item.action) {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      handleSystemAction(item.action);
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

// ==================== 文件夹功能 ====================

let currentFolder = null;

function openFolder(folder) {
  currentFolder = folder;
  els.folderTitle.textContent = folder.name;
  els.folderGrid.innerHTML = '';
  
  folder.items.forEach(item => {
    const el = createDrawerAppItem(item, false, true);
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
    return; // 同一文件夹不移动
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
  }
  closeDrawer();
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
  
  updateSettingsEngineRadio();
  updateWallpaperSourceRadio();
  updateFluidColorDots();
  updateLanguageRadio();
  
  els.blurSliderSection.style.display = state.wallpaperBlur ? 'block' : 'none';
  
  updateBlurSwitchState();
}

function updateWallpaperSourceRadio() {
  const radios = document.querySelectorAll('input[name="wallpaperSource"]');
  radios.forEach(r => { r.checked = r.value === state.wallpaperSource; });
  
  els.presetWallpaperCard.style.display = state.wallpaperSource === 'preset' ? 'block' : 'none';
  els.solidColorCard.style.display = state.wallpaperSource === 'solid' ? 'block' : 'none';
  els.uploadWallpaperCard.style.display = state.wallpaperSource === 'upload' ? 'block' : 'none';
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

// ==================== 应用所有设置 ====================

function applyAllSettings() {
  currentLang = state.language || 'zh-CN';
  applyTheme();
  
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
  
  // 流体壁纸开关
  els.fluidToggle.addEventListener('change', (e) => {
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
    state.solidColor = e.target.value;
    state.wallpaperSource = 'solid';
    applyWallpaper();
    saveSettings();
    updateSolidColorDots();
    updateWallpaperSourceRadio();
  });
  
  // 上传壁纸
  els.uploadArea.addEventListener('click', () => {
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
  
  // 快捷键
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeFolder();
      closeDrawer();
      closeSettings();
      els.engineSelector.classList.remove('open');
      els.chromeMenu.classList.remove('open');
      els.newFolderDialog.classList.remove('open');
      els.renameDialog.classList.remove('open');
      els.confirmDialog.classList.remove('open');
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
