/**
 * ====================================================================
 * APPLICATION CONTROLLER - IBRAHIM WAZNI PORTFOLIO & BLOG
 * ====================================================================
 * Modular Vanilla JavaScript: State management, Bilingual AR/EN toggle,
 * Dark/Light theme, interactive roadmap & blog filters, modal reader,
 * and toast notification engine.
 */

// Global SVG Icons dictionary for zero-dependency, ultra-fast rendering
const SVG_ICONS = {
  code: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
  cpu: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`,
  terminal: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
  database: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
  globe: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  layers: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  'git-commit': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><line x1="1.05" y1="12" x2="7" y2="12"/><line x1="17.01" y1="12" x2="22.96" y2="12"/></svg>`,
  layout: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
  sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,
  activity: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  'git-branch': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>`,
  'file-text': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  repeat: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  flame: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5z"/></svg>`,
  'graduation-cap': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
  keyboard: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"/><line x1="6" y1="8" x2="6.01" y2="8"/><line x1="10" y1="8" x2="10.01" y2="8"/><line x1="14" y1="8" x2="14.01" y2="8"/><line x1="18" y1="8" x2="18.01" y2="8"/><line x1="6" y1="12" x2="6.01" y2="12"/><line x1="18" y1="12" x2="18.01" y2="12"/><line x1="10" y1="12" x2="14" y2="12"/><line x1="6" y1="16" x2="6.01" y2="16"/><line x1="18" y1="16" x2="18.01" y2="16"/><line x1="10" y1="16" x2="14" y2="16"/></svg>`,
  target: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  zap: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  send: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  'message-circle': `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  'share-2': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
  moon: `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  sun: `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  'book-open': `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  'check-circle-2': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
  x: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  'arrow-right': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  'arrow-left': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  copy: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`
};

function getIcon(name, customClass = '') {
  const iconSvg = SVG_ICONS[name] || SVG_ICONS['code'];
  if (!customClass) return iconSvg;
  return iconSvg.replace('<svg ', `<svg class="${customClass}" `);
}

// Application State
const AppState = {
  lang: localStorage.getItem('wazni_lang') || 'ar',
  theme: localStorage.getItem('wazni_theme') || 'dark',
  activeRoadmapFilter: 'all',
  activeBlogFilter: 'all',
  currentModalPostId: null
};

// Main App Controller
class PortfolioApp {
  constructor() {
    this.data = window.portfolioData;
    this.init();
  }

  init() {
    this.applyTheme(AppState.theme, false);
    this.applyLanguage(AppState.lang);
    this.bindGlobalEvents();
    this.renderAll();
  }

  // --------------------------------------------------------------------------
  // Theme Management
  // --------------------------------------------------------------------------
  applyTheme(theme, showToastNotification = true) {
    AppState.theme = theme;
    localStorage.setItem('wazni_theme', theme);
    const root = document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = theme === 'dark' ? getIcon('sun') : getIcon('moon');
      themeToggleBtn.setAttribute('title', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    }

    if (showToastNotification) {
      const msg = this.data.ui.toasts.themeChanged[theme][AppState.lang];
      this.showToast(msg);
    }
  }

  toggleTheme() {
    const nextTheme = AppState.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme(nextTheme, true);
  }

  // --------------------------------------------------------------------------
  // Language Management (AR / EN)
  // --------------------------------------------------------------------------
  applyLanguage(lang) {
    AppState.lang = lang;
    localStorage.setItem('wazni_lang', lang);

    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update lang toggle button text
    const langToggleBtn = document.getElementById('lang-toggle-btn');
    if (langToggleBtn) {
      langToggleBtn.innerHTML = `
        <span class="flex items-center gap-1.5 font-semibold text-sm">
          ${getIcon('globe', 'w-4 h-4')}
          <span>${lang === 'ar' ? 'English' : 'العربية'}</span>
        </span>
      `;
      langToggleBtn.setAttribute('title', lang === 'ar' ? 'Switch to English' : 'التحويل للغة العربية');
    }

    // Update mobile lang toggle button
    const mobileLangToggleBtn = document.getElementById('mobile-lang-toggle-btn');
    if (mobileLangToggleBtn) {
      mobileLangToggleBtn.innerHTML = `
        <span class="flex items-center gap-2 font-semibold">
          ${getIcon('globe', 'w-4 h-4')}
          <span>${lang === 'ar' ? 'English' : 'العربية'}</span>
        </span>
      `;
    }

    this.renderAll();

    // If modal is currently open, re-render its active post
    if (AppState.currentModalPostId) {
      this.openBlogModal(AppState.currentModalPostId);
    }
  }

  toggleLanguage() {
    const nextLang = AppState.lang === 'ar' ? 'en' : 'ar';
    this.applyLanguage(nextLang);
  }

  // --------------------------------------------------------------------------
  // Global Event Bindings
  // --------------------------------------------------------------------------
  bindGlobalEvents() {
    // Theme toggle button
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => this.toggleTheme());
    }

    // Language toggle buttons
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
      langBtn.addEventListener('click', () => this.toggleLanguage());
    }

    const mobileLangBtn = document.getElementById('mobile-lang-toggle-btn');
    if (mobileLangBtn) {
      mobileLangBtn.addEventListener('click', () => {
        this.toggleLanguage();
        this.closeMobileMenu();
      });
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');

    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      });
    }

    if (mobileMenuClose && mobileMenu) {
      mobileMenuClose.addEventListener('click', () => this.closeMobileMenu());
    }

    // Close mobile menu when clicking nav links
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => this.closeMobileMenu());
    });

    // Share / Copy Profile Link buttons
    document.querySelectorAll('[data-action="copy-link"]').forEach(btn => {
      btn.addEventListener('click', () => this.copyProfileLink());
    });

    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeBlogModal();
      }
    });

    // Contact form submit listener
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => this.handleContactSubmit(e));
    }
  }

  closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      mobileMenu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  }

  // --------------------------------------------------------------------------
  // Render Everything
  // --------------------------------------------------------------------------
  renderAll() {
    this.renderNavbar();
    this.renderHero();
    this.renderAbout();
    this.renderRoadmap();
    this.renderTechStack();
    this.renderBlog();
    this.renderContact();
    this.renderFooter();
  }

  // --------------------------------------------------------------------------
  // Navbar
  // --------------------------------------------------------------------------
  renderNavbar() {
    const navData = this.data.ui.nav;
    const l = AppState.lang;

    const brandName = document.getElementById('nav-brand-name');
    if (brandName) {
      brandName.textContent = this.data.profile.shortName[l];
    }

    const linksContainer = document.getElementById('nav-links');
    if (linksContainer) {
      linksContainer.innerHTML = `
        <a href="#about" class="hover:text-cyan-400 transition-colors font-medium text-sm text-slate-300 dark:text-slate-200">${navData.about[l]}</a>
        <a href="#roadmap" class="hover:text-cyan-400 transition-colors font-medium text-sm text-slate-300 dark:text-slate-200">${navData.roadmap[l]}</a>
        <a href="#stack" class="hover:text-cyan-400 transition-colors font-medium text-sm text-slate-300 dark:text-slate-200">${navData.stack[l]}</a>
        <a href="#blog" class="hover:text-cyan-400 transition-colors font-medium text-sm text-slate-300 dark:text-slate-200">${navData.blog[l]}</a>
        <a href="#contact" class="hover:text-cyan-400 transition-colors font-medium text-sm text-slate-300 dark:text-slate-200">${navData.contact[l]}</a>
      `;
    }

    const mobileLinksContainer = document.getElementById('mobile-nav-links');
    if (mobileLinksContainer) {
      mobileLinksContainer.innerHTML = `
        <a href="#about" class="mobile-nav-link text-lg font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800">${navData.about[l]}</a>
        <a href="#roadmap" class="mobile-nav-link text-lg font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800">${navData.roadmap[l]}</a>
        <a href="#stack" class="mobile-nav-link text-lg font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800">${navData.stack[l]}</a>
        <a href="#blog" class="mobile-nav-link text-lg font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800">${navData.blog[l]}</a>
        <a href="#contact" class="mobile-nav-link text-lg font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800">${navData.contact[l]}</a>
      `;
      // Re-bind click event to newly created links
      mobileLinksContainer.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => this.closeMobileMenu());
      });
    }
  }

  // --------------------------------------------------------------------------
  // Hero Section
  // --------------------------------------------------------------------------
  renderHero() {
    const p = this.data.profile;
    const ui = this.data.ui.hero;
    const l = AppState.lang;

    // Badge
    const heroStatusBadge = document.getElementById('hero-status-badge');
    if (heroStatusBadge) {
      heroStatusBadge.innerHTML = `
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute start-3"></span>
        <span class="text-xs font-semibold tracking-wide text-emerald-300 ms-3">${ui.badgeStatus[l]}</span>
      `;
    }

    // Name
    const heroName = document.getElementById('hero-name');
    if (heroName) {
      heroName.textContent = p.name[l];
    }

    // Headline
    const heroHeadline = document.getElementById('hero-headline');
    if (heroHeadline) {
      heroHeadline.textContent = p.headline[l];
    }

    // Bio
    const heroBio = document.getElementById('hero-bio');
    if (heroBio) {
      heroBio.textContent = p.bio[l];
    }

    // CTAs
    const heroCtaContainer = document.getElementById('hero-cta-container');
    if (heroCtaContainer) {
      const isRtl = l === 'ar';
      heroCtaContainer.innerHTML = `
        <a href="#roadmap" class="btn-glow-cyan inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500 transition-all">
          <span>${ui.exploreBtn[l]}</span>
          ${isRtl ? getIcon('arrow-left', 'w-4 h-4') : getIcon('arrow-right', 'w-4 h-4')}
        </a>
        <a href="#blog" class="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-cyan-500/50 transition-all">
          ${getIcon('book-open', 'w-4 h-4 text-cyan-400')}
          <span>${ui.readBlogBtn[l]}</span>
        </a>
        <button id="hero-copy-btn" class="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-300 bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 transition-all">
          ${getIcon('share-2', 'w-4 h-4 text-emerald-400')}
          <span>${ui.shareBtn[l]}</span>
        </button>
      `;

      const heroCopyBtn = document.getElementById('hero-copy-btn');
      if (heroCopyBtn) {
        heroCopyBtn.addEventListener('click', () => this.copyProfileLink());
      }
    }

    // Profile Card Floating Badge
    const heroFloatBadge = document.getElementById('hero-float-badge');
    if (heroFloatBadge) {
      heroFloatBadge.innerHTML = `
        <div class="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-cyan-500/40 backdrop-blur-md shadow-xl text-cyan-300 text-xs sm:text-sm font-bold">
          <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>${p.roleBadge[l]}</span>
        </div>
      `;
    }

    // Stats Grid
    const statsContainer = document.getElementById('hero-stats-grid');
    if (statsContainer) {
      statsContainer.innerHTML = p.stats.map(s => `
        <div class="glass-card p-3 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 border border-slate-800/80 hover:border-cyan-500/40 min-w-0">
          <div class="p-2 sm:p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
            ${getIcon(s.icon, 'w-5 h-5 sm:w-6 sm:h-6')}
          </div>
          <div class="min-w-0 w-full">
            <div class="flex items-baseline gap-1">
              <span class="text-lg sm:text-2xl font-black text-white dark:text-white font-mono tracking-tight">${s.number}</span>
              <span class="text-[11px] sm:text-xs font-semibold text-cyan-400">${s.unit[l]}</span>
            </div>
            <p class="text-[11px] sm:text-sm text-slate-400 mt-0.5 leading-tight">${s.label[l]}</p>
          </div>
        </div>
      `).join('');
    }
  }

  // --------------------------------------------------------------------------
  // About & Mindset Section
  // --------------------------------------------------------------------------
  renderAbout() {
    const am = this.data.aboutMindset;
    const l = AppState.lang;

    const aboutTitle = document.getElementById('about-section-title');
    if (aboutTitle) {
      aboutTitle.textContent = this.data.ui.sections.aboutTitle[l];
    }

    const aboutSubtitle = document.getElementById('about-section-subtitle');
    if (aboutSubtitle) {
      aboutSubtitle.textContent = this.data.ui.sections.aboutSubtitle[l];
    }

    const philosophyTitle = document.getElementById('about-philosophy-title');
    if (philosophyTitle) {
      philosophyTitle.textContent = am.philosophy[l];
    }

    const paragraphsContainer = document.getElementById('about-paragraphs');
    if (paragraphsContainer) {
      paragraphsContainer.innerHTML = am.paragraphs.map(p => `
        <p class="text-base sm:text-lg text-slate-300 dark:text-slate-300 leading-relaxed">${p[l]}</p>
      `).join('');
    }

    // Touch Typing Card
    const touchTypingContainer = document.getElementById('touch-typing-card');
    if (touchTypingContainer) {
      touchTypingContainer.innerHTML = `
        <div class="glass-card p-6 rounded-2xl border-l-4 border-l-cyan-400 relative overflow-hidden">
          <div class="flex items-start gap-4">
            <div class="p-3.5 rounded-xl bg-cyan-500/15 text-cyan-400 shrink-0">
              ${getIcon('keyboard', 'w-7 h-7')}
            </div>
            <div>
              <div class="flex flex-wrap items-center gap-2 mb-1">
                <h4 class="text-lg font-bold text-white">${am.touchTyping.title[l]}</h4>
                <span class="badge-code px-2 py-0.5 text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 rounded border border-cyan-500/30">60+ WPM</span>
              </div>
              <p class="text-sm text-slate-300 leading-relaxed">${am.touchTyping.desc[l]}</p>
            </div>
          </div>
        </div>
      `;
    }

    // Discipline Pillars Card
    const pillarsContainer = document.getElementById('discipline-pillars-card');
    if (pillarsContainer && am.disciplinePillars) {
      const dp = am.disciplinePillars;
      pillarsContainer.innerHTML = `
        <h4 class="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2 text-cyan-400">
          <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          <span>${dp.title[l]}</span>
        </h4>
        <ul class="space-y-3.5 text-xs sm:text-sm text-slate-300">
          ${dp.items.map(item => `
            <li class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">${item.num}</span>
              <div>
                <strong class="text-white block font-semibold mb-0.5">${item.title[l]}</strong>
                <span>${item.desc[l]}</span>
              </div>
            </li>
          `).join('')}
        </ul>
      `;
    }

    // Books Shelf
    const booksTitle = document.getElementById('books-shelf-title');
    if (booksTitle) {
      booksTitle.textContent = this.data.ui.sections.booksTitle[l];
    }

    const booksContainer = document.getElementById('books-shelf-grid');
    if (booksContainer) {
      booksContainer.innerHTML = am.booksShelf.map(b => `
        <div class="book-card glass-card p-5 sm:p-6 rounded-2xl flex flex-col justify-between border border-slate-800 hover:border-emerald-500/50">
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                ${b.tag[l]}
              </span>
              <div class="text-emerald-400">
                ${getIcon(b.icon, 'w-5 h-5')}
              </div>
            </div>
            <h4 class="text-lg font-bold text-white mb-1">${b.title[l]}</h4>
            <p class="text-xs text-slate-400 mb-3">${b.author}</p>
            <p class="text-sm text-slate-300 leading-relaxed mb-4">${b.desc[l]}</p>
          </div>
          <div class="pt-3 border-t border-slate-800/80 text-xs font-medium text-emerald-400/90 italic">
            ${b.impact[l]}
          </div>
        </div>
      `).join('');
    }
  }

  // --------------------------------------------------------------------------
  // Academic Roadmap & Courses Section
  // --------------------------------------------------------------------------
  renderRoadmap() {
    const rm = this.data.roadmap;
    const l = AppState.lang;

    const roadmapTitle = document.getElementById('roadmap-section-title');
    if (roadmapTitle) {
      roadmapTitle.textContent = this.data.ui.sections.roadmapTitle[l];
    }

    const roadmapSubtitle = document.getElementById('roadmap-section-subtitle');
    if (roadmapSubtitle) {
      roadmapSubtitle.textContent = this.data.ui.sections.roadmapSubtitle[l];
    }

    // Filter Buttons
    const filterContainer = document.getElementById('roadmap-filters');
    if (filterContainer) {
      filterContainer.innerHTML = rm.categories.map(cat => {
        const isActive = cat.id === AppState.activeRoadmapFilter;
        return `
          <button data-roadmap-filter="${cat.id}" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            isActive
              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
              : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60'
          }">
            ${cat.label[l]}
          </button>
        `;
      }).join('');

      filterContainer.querySelectorAll('[data-roadmap-filter]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const filterId = e.currentTarget.getAttribute('data-roadmap-filter');
          AppState.activeRoadmapFilter = filterId;
          this.renderRoadmap();
        });
      });
    }

    // Courses List
    const coursesContainer = document.getElementById('courses-timeline-grid');
    if (coursesContainer) {
      const filteredCourses = rm.items.filter(item => {
        if (AppState.activeRoadmapFilter === 'all') return true;
        return item.status === AppState.activeRoadmapFilter;
      });

      const common = this.data.ui.common;

      coursesContainer.innerHTML = filteredCourses.map(c => {
        const isCurrent = c.status === 'current';
        const badgeBg = isCurrent ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' : 'bg-purple-500/15 text-purple-400 border-purple-500/30';
        const barColor = isCurrent ? 'from-cyan-500 to-emerald-500' : 'from-purple-500 to-indigo-500';

        return `
          <div class="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span class="text-xs font-bold px-3 py-1 rounded-full border ${badgeBg} flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full ${isCurrent ? 'bg-emerald-400 animate-pulse' : 'bg-purple-400'}"></span>
                  ${c.statusBadge[l]}
                </span>
                <span class="text-xs text-slate-400 font-medium">${c.institution[l]}</span>
              </div>

              <div class="flex items-start gap-3.5 mb-4">
                <div class="p-3 rounded-xl bg-slate-800/90 text-cyan-400 border border-slate-700/70 shrink-0">
                  ${getIcon(c.icon, 'w-6 h-6')}
                </div>
                <div>
                  <h4 class="text-lg sm:text-xl font-bold text-white leading-snug">${c.title[l]}</h4>
                </div>
              </div>

              <!-- Topics -->
              <div class="mb-5">
                <h5 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">${common.topicsCovered[l]}</h5>
                <ul class="space-y-1.5">
                  ${c.topics.map(t => `
                    <li class="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <span class="text-cyan-400 mt-1 shrink-0">${getIcon('check-circle-2', 'w-3.5 h-3.5')}</span>
                      <span>${t[l]}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>

            <!-- Bottom Tools & Progress -->
            <div class="pt-4 border-t border-slate-800/80">
              <div class="flex flex-wrap items-center gap-1.5 mb-3.5">
                ${c.tools.map(tool => `
                  <span class="badge-code px-2 py-0.5 text-xs font-mono font-medium bg-slate-900/80 text-cyan-300 rounded border border-slate-700/70">
                    ${tool}
                  </span>
                `).join('')}
              </div>

              <div>
                <div class="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                  <span>${common.progressLabel[l]}</span>
                  <span class="font-mono font-bold text-cyan-400">${c.progress}%</span>
                </div>
                <div class="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div class="progress-bar-fill h-full rounded-full bg-gradient-to-r ${barColor}" style="width: ${c.progress}%;"></div>
                </div>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // --------------------------------------------------------------------------
  // Daily Tech Stack & Productivity Arsenal
  // --------------------------------------------------------------------------
  renderTechStack() {
    const ts = this.data.techStack;
    const l = AppState.lang;

    const stackTitle = document.getElementById('stack-section-title');
    if (stackTitle) {
      stackTitle.textContent = this.data.ui.sections.stackTitle[l];
    }

    const stackSubtitle = document.getElementById('stack-section-subtitle');
    if (stackSubtitle) {
      stackSubtitle.textContent = this.data.ui.sections.stackSubtitle[l];
    }

    const stackContainer = document.getElementById('stack-groups-container');
    if (stackContainer) {
      stackContainer.innerHTML = ts.categories.map(cat => `
        <div class="mb-10 last:mb-0">
          <div class="mb-5">
            <h4 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
              <span class="w-2.5 h-6 rounded-full bg-cyan-400"></span>
              <span>${cat.title[l]}</span>
            </h4>
            <p class="text-sm text-slate-400 mt-1">${cat.desc[l]}</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            ${cat.tools.map(tool => `
              <div class="glass-card p-5 rounded-2xl border border-slate-800/80 hover:border-cyan-500/50 flex flex-col justify-between group">
                <div>
                  <div class="flex items-center justify-between mb-3">
                    <div class="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                      ${getIcon(tool.icon, 'w-6 h-6')}
                    </div>
                    <span class="badge-code text-xs px-2 py-0.5 rounded font-mono font-bold bg-slate-900/90 text-cyan-300 border border-slate-800">
                      ${tool.badge}
                    </span>
                  </div>
                  <h5 class="text-base font-bold text-white mb-0.5">${tool.name}</h5>
                  <p class="text-xs font-semibold text-cyan-400/90 mb-2">${tool.category[l]}</p>
                  <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${tool.desc[l]}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('');
    }
  }

  // --------------------------------------------------------------------------
  // Blog & Study Notes Section
  // --------------------------------------------------------------------------
  renderBlog() {
    const b = this.data.blog;
    const l = AppState.lang;

    const blogTitle = document.getElementById('blog-section-title');
    if (blogTitle) {
      blogTitle.textContent = this.data.ui.sections.blogTitle[l];
    }

    const blogSubtitle = document.getElementById('blog-section-subtitle');
    if (blogSubtitle) {
      blogSubtitle.textContent = this.data.ui.sections.blogSubtitle[l];
    }

    // Category Filter Buttons
    const blogFilters = document.getElementById('blog-filters');
    if (blogFilters) {
      blogFilters.innerHTML = b.categories.map(cat => {
        const isActive = cat.id === AppState.activeBlogFilter;
        return `
          <button data-blog-filter="${cat.id}" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            isActive
              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
              : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60'
          }">
            ${cat.label[l]}
          </button>
        `;
      }).join('');

      blogFilters.querySelectorAll('[data-blog-filter]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const filterId = e.currentTarget.getAttribute('data-blog-filter');
          AppState.activeBlogFilter = filterId;
          this.renderBlog();
        });
      });
    }

    // Articles Grid
    const postsContainer = document.getElementById('blog-posts-grid');
    if (postsContainer) {
      const filteredPosts = b.posts.filter(p => {
        if (AppState.activeBlogFilter === 'all') return true;
        return p.category === AppState.activeBlogFilter;
      });

      const common = this.data.ui.common;

      postsContainer.innerHTML = filteredPosts.map(post => `
        <article class="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800/80 hover:border-cyan-500/50 flex flex-col justify-between group cursor-pointer" data-post-id="${post.id}">
          <div>
            <div class="flex items-center justify-between text-xs text-slate-400 mb-3">
              <span class="px-2.5 py-1 rounded-full bg-cyan-500/15 text-cyan-300 font-bold border border-cyan-500/30">
                ${post.categoryLabel[l]}
              </span>
              <div class="flex items-center gap-3">
                <span class="font-mono">${post.date}</span>
                <span>•</span>
                <span class="flex items-center gap-1 text-slate-400">
                  ${getIcon('clock', 'w-3.5 h-3.5')}
                  ${post.readTime[l]}
                </span>
              </div>
            </div>

            <h4 class="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3 leading-snug">
              ${post.title[l]}
            </h4>

            <p class="text-sm text-slate-300 leading-relaxed mb-6">
              ${post.excerpt[l]}
            </p>
          </div>

          <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between text-cyan-400 font-semibold text-sm">
            <span>${common.readArticle[l]}</span>
            <span class="transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
              ${AppState.lang === 'ar' ? getIcon('arrow-left', 'w-4 h-4') : getIcon('arrow-right', 'w-4 h-4')}
            </span>
          </div>
        </article>
      `).join('');

      // Add click listener to open modal reader
      postsContainer.querySelectorAll('[data-post-id]').forEach(card => {
        card.addEventListener('click', (e) => {
          const postId = card.getAttribute('data-post-id');
          this.openBlogModal(postId);
        });
      });
    }
  }

  // --------------------------------------------------------------------------
  // Blog Reader Modal
  // --------------------------------------------------------------------------
  openBlogModal(postId) {
    const post = this.data.blog.posts.find(p => p.id === postId);
    if (!post) return;

    AppState.currentModalPostId = postId;
    const l = AppState.lang;
    const modal = document.getElementById('blog-modal');
    const modalContent = document.getElementById('blog-modal-content');
    const common = this.data.ui.common;

    if (!modal || !modalContent) return;

    modalContent.innerHTML = `
      <!-- Modal Header -->
      <div class="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6">
        <div class="flex items-center gap-3">
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
            ${post.categoryLabel[l]}
          </span>
          <span class="text-xs text-slate-400 font-mono">${post.date}</span>
          <span class="text-xs text-slate-400 flex items-center gap-1">
            ${getIcon('clock', 'w-3.5 h-3.5')}
            ${post.readTime[l]}
          </span>
        </div>
        <button id="modal-close-btn" class="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors" title="${common.close[l]}">
          ${getIcon('x', 'w-6 h-6')}
        </button>
      </div>

      <!-- Article Title -->
      <h2 class="text-2xl sm:text-3xl font-black text-white leading-tight mb-4">
        ${post.title[l]}
      </h2>

      <!-- Author Card inside Modal -->
      <div class="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 mb-6">
        <img src="${this.data.profile.avatar}" alt="Ibrahim Wazni" class="w-11 h-11 rounded-full object-cover border border-cyan-500/40" onerror="this.src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'">
        <div>
          <h5 class="text-sm font-bold text-white">${this.data.profile.name[l]}</h5>
          <p class="text-xs text-slate-400">${this.data.profile.university[l]}</p>
        </div>
      </div>

      <!-- Article Body -->
      <div class="article-body text-slate-200">
        ${post.content[l]}
      </div>

      <!-- Modal Footer -->
      <div class="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
        <button id="modal-share-btn" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-cyan-500/15 text-cyan-300 hover:bg-cyan-500/25 border border-cyan-500/30 transition-all">
          ${getIcon('share-2', 'w-4 h-4')}
          <span>${common.shareArticle[l]}</span>
        </button>
        <button id="modal-bottom-close-btn" class="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all">
          ${common.close[l]}
        </button>
      </div>
    `;

    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');

    // Attach listeners
    document.getElementById('modal-close-btn')?.addEventListener('click', () => this.closeBlogModal());
    document.getElementById('modal-bottom-close-btn')?.addEventListener('click', () => this.closeBlogModal());
    document.getElementById('modal-share-btn')?.addEventListener('click', () => this.shareArticle(post));

    // Backdrop click listener
    modal.onclick = (e) => {
      if (e.target === modal) {
        this.closeBlogModal();
      }
    };
  }

  closeBlogModal() {
    const modal = document.getElementById('blog-modal');
    if (modal) {
      modal.classList.add('hidden');
      document.body.classList.remove('modal-open');
      AppState.currentModalPostId = null;
    }
  }

  shareArticle(post) {
    const l = AppState.lang;
    const url = window.location.href;
    const title = post.title[l];

    if (navigator.share) {
      navigator.share({ title, url }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${title} - ${url}`).then(() => {
        this.showToast(this.data.ui.toasts.linkCopied[l]);
      });
    }
  }

  // --------------------------------------------------------------------------
  // Contact & Social Section
  // --------------------------------------------------------------------------
  renderContact() {
    const c = this.data.contact;
    const l = AppState.lang;
    const common = this.data.ui.common;

    const contactTitle = document.getElementById('contact-section-title');
    if (contactTitle) {
      contactTitle.textContent = c.title[l];
    }

    const contactSubtitle = document.getElementById('contact-section-subtitle');
    if (contactSubtitle) {
      contactSubtitle.textContent = c.subtitle[l];
    }

    const channelsTitle = document.getElementById('contact-channels-title');
    if (channelsTitle && c.channelsTitle) {
      channelsTitle.textContent = c.channelsTitle[l];
    }

    // Channels Grid
    const channelsContainer = document.getElementById('contact-channels-grid');
    if (channelsContainer) {
      channelsContainer.innerHTML = c.channels.map(chan => `
        <a href="${chan.href}" target="_blank" rel="noopener noreferrer" class="glass-card p-4 rounded-xl border border-slate-800/80 hover:border-cyan-500/50 flex items-center justify-between group transition-all">
          <div class="flex items-center gap-3">
            <div class="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
              ${getIcon(chan.icon, 'w-5 h-5')}
            </div>
            <div>
              <div class="text-xs text-slate-400">${chan.name}</div>
              <div class="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors font-mono">${chan.value}</div>
            </div>
          </div>
          <span class="text-slate-500 group-hover:text-cyan-400 transition-colors">
            ${AppState.lang === 'ar' ? getIcon('arrow-left', 'w-4 h-4') : getIcon('arrow-right', 'w-4 h-4')}
          </span>
        </a>
      `).join('');
    }

    // Form placeholders and labels
    const f = c.form;
    const nameLabel = document.getElementById('form-name-label');
    const nameInput = document.getElementById('form-name-input');
    if (nameLabel) nameLabel.textContent = f.nameLabel[l];
    if (nameInput) nameInput.placeholder = f.namePlaceholder[l];

    const emailLabel = document.getElementById('form-email-label');
    const emailInput = document.getElementById('form-email-input');
    if (emailLabel) emailLabel.textContent = f.emailLabel[l];
    if (emailInput) emailInput.placeholder = f.emailPlaceholder[l];

    const subjectLabel = document.getElementById('form-subject-label');
    const subjectInput = document.getElementById('form-subject-input');
    if (subjectLabel) subjectLabel.textContent = f.subjectLabel[l];
    if (subjectInput) subjectInput.placeholder = f.subjectPlaceholder[l];

    const msgLabel = document.getElementById('form-message-label');
    const msgInput = document.getElementById('form-message-input');
    if (msgLabel) msgLabel.textContent = f.messageLabel[l];
    if (msgInput) msgInput.placeholder = f.messagePlaceholder[l];

    const submitBtn = document.getElementById('form-submit-btn');
    if (submitBtn) {
      submitBtn.innerHTML = `<span>${f.submitBtn[l]}</span>`;
    }
  }

  handleContactSubmit(e) {
    e.preventDefault();
    const l = AppState.lang;
    const form = e.target;
    const submitBtn = document.getElementById('form-submit-btn');

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>...</span>`;
    }

    setTimeout(() => {
      this.showToast(this.data.ui.toasts.msgSent[l]);
      form.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>${this.data.contact.form.submitBtn[l]}</span>`;
      }
    }, 600);
  }

  // --------------------------------------------------------------------------
  // Footer
  // --------------------------------------------------------------------------
  renderFooter() {
    const l = AppState.lang;
    const common = this.data.ui.common;

    const footerText = document.getElementById('footer-copyright-text');
    if (footerText) {
      footerText.textContent = common.allRightsReserved[l];
    }

    const backToTopBtn = document.getElementById('back-to-top-btn');
    if (backToTopBtn) {
      backToTopBtn.setAttribute('title', common.backToTop[l]);
    }
  }

  // --------------------------------------------------------------------------
  // Toast Engine
  // --------------------------------------------------------------------------
  showToast(message, duration = 3600) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.innerHTML = `
      <span class="text-cyan-400 shrink-0">${getIcon('check-circle-2', 'w-5 h-5')}</span>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    // Trigger enter transition
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 400);
    }, duration);
  }

  copyProfileLink() {
    const l = AppState.lang;
    const url = window.location.href;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        this.showToast(this.data.ui.toasts.linkCopied[l]);
      }).catch(() => {
        this.fallbackCopyText(url);
      });
    } else {
      this.fallbackCopyText(url);
    }
  }

  fallbackCopyText(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.top = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      this.showToast(this.data.ui.toasts.linkCopied[AppState.lang]);
    } catch (err) {}
    document.body.removeChild(textArea);
  }
}

// Initialize Application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new PortfolioApp();
});
