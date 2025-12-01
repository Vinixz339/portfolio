/* ========================================================================
   Traduções / Dicionário
   ======================================================================== */
const defaultContent = {};
const cacheDefaultTranslations = () => {
  document.querySelectorAll('[data-l18n]').forEach((el) => {
    const key = el.dataset.l18n;
    if (!key || defaultContent[key] !== undefined) return;
    const target = el.dataset.l18nTarget || 'textContent';
    let value;
    if (target === 'textContent') value = el.textContent;
    else if (target === 'innerHTML') value = el.innerHTML;
    else value = el.getAttribute(target) || '';
    defaultContent[key] = value;
  });
};

const translations = {
  pt: {},
  en: {
    "page-title": "Vinícius Franco Rocha - Portfolio",
    "page-title-projects": "Projects - Vinícius Franco Rocha",
    "page-title-contact": "Contact - Vinícius Franco Rocha",
    "nav-about": "About",
    "nav-projects": "Projects",
    "nav-contact": "Contact",
    "language-aria": "Choose language",
    "hero-title": "Vinícius Franco Rocha",
    "hero-badge": "ITSM · Automation · Chatbots · Data",
    "hero-eyebrow": "ITSM · Automation · Conversations",
    "hero-subtitle": "ITSM and chatbot analyst who designs strategic automations, integrations and metric-driven digital journeys.",
    "hero-description": "I structure end-to-end processes: catalogs, SLAs/OLAs, conditional flows and bots in GLPI/Service Aide powered by Power Automate, n8n and conversational AI. My work blends governance, user experience and data to keep operations predictable and scalable.",
    "hero-btn-cv": "Download CV",
    "hero-btn-projects": "See projects",
    "hero-btn-contact": "Reach out",
    "hero-metric-1": "years linking ITSM, automation and chatbots",
    "hero-metric-2": "technology courses and certifications",
    "hero-metric-3": "solutions and integrations delivered",
    "hero-media-role": "Analyst - Tecnocomp",
    "hero-media-stack": "GLPI · Service Aide · Power Automate · n8n",
    "hero-panel-1-title": "Methods",
    "hero-panel-1-text": "ITIL · Lean · OKRs",
    "hero-panel-2-title": "Tech",
    "hero-panel-2-text": "GLPI · Service Aide · Power BI",
    "hero-panel-3-title": "Automation",
    "hero-panel-3-text": "Power Automate · n8n · APIs",
    "hero-panel-4-title": "Security & Resilience",
    "hero-panel-4-text": "Playbooks, IAM, observability and zero-trust posture across flows and bots.",
    "innovation-eyebrow": "Core fronts",
    "innovation-title": "Specialties I lead",
    "innovation-description": "Strategic layers that connect governance, automations and digital conversations—always with indicators and a clear handoff.",
    "innovation-card-1": `
      <h3>ITSM architecture</h3>
      <p>Design of GLPI/Service Aide catalogs, SLAs/OLAs, conditional fields, REST integrations and governance rituals.</p>
      <span>Processes · Audits · Roadmap</span>
    `,
    "innovation-card-2": `
      <h3>Intelligent automations</h3>
      <p>Power Automate and n8n acting as the orchestration layer—monitored, versioned and documented for squads.</p>
      <span>APIs · Observability · Security</span>
    `,
    "innovation-card-3": `
      <h3>Chatbots & voicebots</h3>
      <p>Experiences with Botpress, Typebot and Genesys Cloud, combining persona, contextual handoff and adoption metrics.</p>
      <span>Human-digital · Multichannel · KPIs</span>
    `,
    "about-title": "About me",
    "about-description": "I connect data, processes and people to deliver governed digital experiences.",
    "about-text": `
      <p>I currently work as an analyst at Tecnocomp (since 04/2024), delivering value in ITSM, automation and corporate chatbots.</p>
      <p>I previously worked with support, networking and infrastructure at General Motors (01/2023-04/2024).</p>
      <p>I am studying Systems Analysis and Development at Cruzeiro do Sul (expected graduation 2025).</p>
      <ul class="about-list">
        <li>ITSM: GLPI, Service Aide (basic Jira Service Management)</li>
        <li>Automation & Integrations: Power Automate, n8n, webhooks and APIs</li>
        <li>Chatbots & AI: Botpress, Typebot, Genesys Cloud</li>
        <li>Data: Power BI, SQL (MySQL)</li>
        <li>Development: HTML/CSS, WordPress</li>
        <li>Infrastructure: basic Linux (Ubuntu)</li>
      </ul>
      <div class="about-highlights">
        <article class="highlight-card" data-aos="fade-up" data-aos-delay="50">
          <h4>Practical governance</h4>
          <p>Catalogs, SLAs and playbooks aligned with audits and goals.</p>
        </article>
        <article class="highlight-card" data-aos="fade-up" data-aos-delay="120">
          <h4>Automation with traceability</h4>
          <p>Logs, alerts and KPIs to keep the process evolving.</p>
        </article>
        <article class="highlight-card" data-aos="fade-up" data-aos-delay="190">
          <h4>Data-driven conversations</h4>
          <p>Bots with personality, contextual handoff and insight capture.</p>
        </article>
      </div>
    `,
    "about-skills": `
      <h3>Technical profile</h3>
      <div class="skills-grid">
        <div class="skill-item"><h4>ITSM</h4><p>GLPI · Service Aide · Jira (basic)</p></div>
        <div class="skill-item"><h4>Automation</h4><p>Power Automate · n8n · APIs</p></div>
        <div class="skill-item"><h4>Chatbots</h4><p>Botpress · Typebot · Genesys</p></div>
        <div class="skill-item"><h4>Data</h4><p>Power BI · SQL/MySQL</p></div>
        <div class="skill-item"><h4>Dev</h4><p>HTML/CSS · WordPress</p></div>
        <div class="skill-item"><h4>Infra</h4><p>Linux (Ubuntu - basic)</p></div>
      </div>
      <p class="skill-note">Focus on measurable value with governance and user experience.</p>
    `,
    "experience-title": "Experience",
    "experience-description": "Hands-on work in critical operations.",
    "experience-item-1": `
      <span class="experience-year-wrap">
        <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>
        <span class="experience-year">04/2024 - Present</span>
      </span>
      <h3 class="experience-company">Tecnocomp Tecnologia e Serviços</h3>
      <p class="experience-title">Analyst</p>
      <p class="experience-desc">
        ITSM rollouts (GLPI/Service Aide), automations with Power Automate and n8n,
        corporate bots (Botpress/Typebot/Genesys Cloud) and Power BI dashboards.
      </p>
      <button type="button" class="details-btn" onclick="openModal('exp1-modal')" data-l18n="experience-btn-more">See more</button>
    `,
    "experience-item-2": `
      <span class="experience-year-wrap">
        <ion-icon name="calendar-outline" aria-hidden="true"></ionicon>
        <span class="experience-year">01/2023 - 04/2024</span>
      </span>
      <h3 class="experience-company">General Motors Brazil</h3>
      <p class="experience-title">Mechatronics apprentice (IT)</p>
      <p class="experience-desc">
        Technical support, hardware refresh, networking (addressing/masks) and production continuity.
      </p>
      <button type="button" class="details-btn" onclick="openModal('exp2-modal')" data-l18n="experience-btn-more">See more</button>
    `,
    "experience-btn-more": "See more",
    "experience-modal-1": `
      <button class="close" data-close-modal onclick="closeModal('exp1-modal')" aria-label="Close">&times;</button>
      <h3 class="modal-title" id="exp1-title">Tecnocomp - details</h3>
      <p>
        ITSM implementations and sustainment (GLPI/Service Aide), automations (Power Automate, n8n),
        chatbots (Genesys Cloud, Botpress, Typebot) and Power BI dashboards with governance and measurable value.
      </p>
      <ul class="modal-topic-list">
        <li>ITSM: catalog, SLAs/OLAs, queues, fields and rules;</li>
        <li>Automations: orchestrations, observability and alerts;</li>
        <li>Chatbots: multichannel, escalation paths and metrics;</li>
        <li>Data: KPIs and executive storytelling.</li>
      </ul>
    `,
    "experience-modal-2": `
      <button class="close" data-close-modal onclick="closeModal('exp2-modal')" aria-label="Close">&times;</button>
      <h3 class="modal-title" id="exp2-title">General Motors - details</h3>
      <p>
        IT support, driver updates, hardware maintenance, network configuration and production continuity.
      </p>
      <ul class="modal-topic-list">
        <li>Hardware lifecycle (desktops, notebooks, printers);</li>
        <li>Network configuration and troubleshooting;</li>
        <li>Process organization and documentation.</li>
      </ul>
    `,
    "education-title": "Education",
    "education-description": "Formal education and fundamentals that sustain the practice.",
    "education-item-1": `
      <h3 class="education-title">Systems Analysis and Development</h3>
      <h4 class="education-subtitle">Universidade Cruzeiro do Sul</h4>
      <div class="edu-meta">
        <span class="meta"><ion-icon name="calendar-outline"></ionicon> 2024 - 2025</span>
        <span class="edu-badge">In progress</span>
      </div>
      <p class="edu-desc">Software engineering · Databases · Web development.</p>
    `,
    "education-item-2": `
      <h3 class="education-title">High school</h3>
      <h4 class="education-subtitle">Professor José Carlos Antunes</h4>
      <div class="edu-meta">
        <span class="meta"><ion-icon name="calendar-outline"></ionicon> Graduated in 2023</span>
        <span class="edu-badge">Completed</span>
      </div>
      <p class="edu-desc">Technology focus, computer labs and hands-on projects.</p>
    `,
    "projects-eyebrow": "Portfolio",
    "projects-hero-title": "Selected projects",
    "projects-hero-description": "Real cases in ITSM, automations and chatbots. Governance, metrics and user experience.",
    "proj-techs-label": "Technologies",
    "projects-card-1": `
      <div class="project-text">
        <h3 class="project-title">SABIN - ITSM sustainment (GLPI)</h3>
        <div class="project-meta">
          <span class="chip">Area: ITSM</span>
          <span class="chip">Platform: GLPI</span>
          <span class="chip">Year: 2025-Present</span>
          <a class="chip link-chip" href="https://sabin.com.br/" target="_blank" rel="noopener" aria-label="Open SABIN website">sabin.com.br</a>
        </div>
        <p class="project-lead">
          Continuous evolution of the GLPI environment focused on stability, predictability and experience.
          Tier-2 support, catalog governance and recurring optimizations.
        </p>
        <ul class="project-scope">
          <li>Business rules, conditional fields and queue routing;</li>
          <li>Standardized forms, templates and checklists;</li>
          <li>SLAs/OLAs, notifications and operational alerts;</li>
          <li>Power BI reports to support decisions.</li>
        </ul>
        <div class="project-techstack">
          <div class="tech-label" data-l18n="proj-techs-label">Technologies</div>
          <div class="tech-chips">
            <span class="chip">GLPI</span>
            <span class="chip">MySQL</span>
            <span class="chip">Automation</span>
            <span class="chip">Power BI</span>
            <span class="chip">APIs</span>
          </div>
        </div>
      </div>
    `,
    "projects-card-2": `
      <div class="project-text">
        <h3 class="project-title">GERA - ITSM implementation and sustainment (GLPI)</h3>
        <div class="project-meta">
          <span class="chip">Area: ITSM</span>
          <span class="chip">Platform: GLPI</span>
          <span class="chip">Year: 2025-Present</span>
          <a class="chip link-chip" href="https://gera.com.br/" target="_blank" rel="noopener" aria-label="Open GERA website">gera.com.br</a>
        </div>
        <p class="project-lead">
          End-to-end rollout with catalog, SLAs and approval flows.
          Assisted operation after go-live, triage automations and recurring reports.
        </p>
        <ul class="project-scope">
          <li>Process design (Incident, Request, Change);</li>
          <li>Conditional fields, forms and validations;</li>
          <li>Essential integrations (email/Teams) and automations;</li>
          <li>Operational KPIs and change governance.</li>
        </ul>
        <div class="project-techstack">
          <div class="tech-label" data-l18n="proj-techs-label">Technologies</div>
          <div class="tech-chips">
            <span class="chip">GLPI</span>
            <span class="chip">n8n</span>
            <span class="chip">Power Automate</span>
            <span class="chip">MySQL</span>
            <span class="chip">Power BI</span>
          </div>
        </div>
      </div>
    `,
    "projects-card-3": `
      <div class="project-text">
        <h3 class="project-title">STOLLER / CORTEVA - ITSM sustainment (Service Aide)</h3>
        <div class="project-meta">
          <span class="chip">Area: ITSM</span>
          <span class="chip">Platform: Service Aide</span>
          <span class="chip">Year: 2025-Present</span>
          <a class="chip link-chip" href="https://www.stoller.com.br/" target="_blank" rel="noopener" aria-label="Open Stoller website">stoller.com.br</a>
        </div>
        <p class="project-lead">
          Sustainment with standardized queues, profiles and automatic rules.
          Focus on service flow, catalog governance and operational reliability.
        </p>
        <ul class="project-scope">
          <li>Queue structure, roles and routing matrices;</li>
          <li>Form adjustments and routine automations;</li>
          <li>SLAs, notifications and severity-based alerts;</li>
          <li>Data hygiene (categories, services, CIs).</li>
        </ul>
        <div class="project-techstack">
          <div class="tech-label" data-l18n="proj-techs-label">Technologies</div>
          <div class="tech-chips">
            <span class="chip">Service Aide</span>
            <span class="chip">Automation</span>
            <span class="chip">APIs</span>
            <span class="chip">Reporting</span>
          </div>
        </div>
      </div>
    `,
    "projects-card-4": `
      <div class="project-text">
        <h3 class="project-title">AGROLINE - ITSM sustainment (Service Aide)</h3>
        <div class="project-meta">
          <span class="chip">Area: ITSM</span>
          <span class="chip">Platform: Service Aide</span>
          <span class="chip">Year: 2024-2025</span>
          <a class="chip link-chip" href="https://axiaagro.com/" target="_blank" rel="noopener" aria-label="Open AxiaAgro website">axiaagro.com</a>
        </div>
        <p class="project-lead">
          Sustainment with process evolution, platform administration and ticket handling.
          Rules and integrations to reduce cycle time and increase predictability.
        </p>
        <ul class="project-scope">
          <li>Service catalog and standardized forms;</li>
          <li>Automatic rules and queue routing;</li>
          <li>Consistent SLAs/OLAs and notifications;</li>
          <li>Operational and executive reports.</li>
        </ul>
        <div class="project-techstack">
          <div class="tech-label" data-l18n="proj-techs-label">Technologies</div>
          <div class="tech-chips">
            <span class="chip">Service Aide</span>
            <span class="chip">Automation</span>
            <span class="chip">APIs</span>
            <span class="chip">Reporting</span>
          </div>
        </div>
      </div>
    `,
    "projects-card-5": `
      <div class="project-text">
        <h3 class="project-title">IRANI - Chatbot implementation (Genesys Cloud)</h3>
        <div class="project-meta">
          <span class="chip">Area: Chatbots</span>
          <span class="chip">Platform: Genesys Cloud</span>
          <span class="chip">Channels: Teams/WhatsApp</span>
          <span class="chip">Year: 2025-Present</span>
          <a class="chip link-chip" href="https://irani.com.br/" target="_blank" rel="noopener" aria-label="Open IRANI website">irani.com.br</a>
        </div>
        <p class="project-lead">
          Conversational assistant with dispatch to Genesys queues, integrated with Teams and WhatsApp.
          Data-driven flow, human handoff and integrations with internal systems.
        </p>
        <ul class="project-scope">
          <li>Mapping intents, entities and support journeys;</li>
          <li>Routing and escalation with context to the right queues;</li>
          <li>Standard messaging, consistent tone and feedback capture;</li>
          <li>Logs and metrics for tuning and continuous improvement.</li>
        </ul>
        <div class="project-techstack">
          <div class="tech-label" data-l18n="proj-techs-label">Technologies</div>
          <div class="tech-chips">
            <span class="chip">Genesys Cloud</span>
            <span class="chip">Teams</span>
            <span class="chip">WhatsApp</span>
            <span class="chip">APIs</span>
            <span class="chip">Conversational UX</span>
          </div>
        </div>
      </div>
    `,
    "contact-eyebrow": "Contact",
    "contact-hero-title": "Let's talk",
    "contact-hero-description": "Share the context of your operation and I'll reply with clear next steps.",
    "contact-info-title": "Direct info",
    "contact-info-location": "Santo André/SP",
    "contact-info-email": "vinfranrocha@gmail.com",
    "contact-info-phone": "(11) 99780-6037",
    "contact-info-linkedin": "LinkedIn",
    "contact-cta-email": "Send email",
    "contact-form-title": "Form",
    "contact-form-name-label": "Name",
    "contact-form-name-placeholder": "Your full name",
    "contact-form-email-label": "Email",
    "contact-form-email-placeholder": "your@email.com",
    "contact-form-phone-label": "Phone (optional)",
    "contact-form-phone-placeholder": "(11) 99999-9999",
    "contact-form-message-label": "Message",
    "contact-form-message-placeholder": "Briefly explain the context and the goal.",
    "contact-form-submit": "Send",
    "footer-logo": "Vinícius Franco Rocha",
    "footer-rights": "© 2025 Vinícius Franco Rocha. All rights reserved."
  }
};

/* ========================================================================
   Tokens / Estado
   ======================================================================== */
const VFR = {
  storage: {
    lang: 'vfr_portfolio_lang',
    firstVisit: 'vfr_first_visit',
  },
  langs: ['pt', 'en'],
  defaultLang: 'pt',
  selectors: {
    header: 'header',
    nav: '.nav-links',
    navLinks: '.nav-links a, .nav-link',
    tilt: '.tilt, .project-item.tilt, .project-card.tilt',
    reveal: '.card, .timeline-card, .project-item, .contact-card, .skills-card, .highlight-card',
    languageButton: '#languageButton',
    languageDropdown: '#languageDropdown',
    menuToggle: '.menu-toggle',
    canvas: '#sparkCanvas',
  },
  cssVars: {
    headerHeight: '--header-height',
  },
  aos: {
    enabled: true,
    duration: 900,
    easing: 'ease-out-cubic',
  },
};

/* ========================================================================
   Utilitários
   ======================================================================== */
const clamp = (n, min, max) => Math.min(Math.max(n, min), max);
const lerp = (a, b, t) => a + (b - a) * t;

const throttle = (fn, wait = 100) => {
  let last = 0;
  let pending;
  return (...args) => {
    const now = Date.now();
    const remaining = wait - (now - last);
    if (remaining <= 0) {
      last = now;
      fn(...args);
    } else {
      clearTimeout(pending);
      pending = setTimeout(() => {
        last = Date.now();
        fn(...args);
      }, remaining);
    }
  };
};

const debounce = (fn, wait = 200) => {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
};

const prefersReducedMotion = () =>
  window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ========================================================================
   I18n
   - data-l18n e data-l18n-target (ex.: placeholder, aria-label, title)
   - atualiza <title> com base no body[data-page]
   ======================================================================== */
const supportedLangs = Object.keys(translations);
const defaultLang = VFR.defaultLang;
const storageKey = VFR.storage.lang;

const getTitleKey = () => {
  const page = document.body?.dataset?.page;
  if (page === 'projects') return 'page-title-projects';
  if (page === 'contact') return 'page-title-contact';
  return 'page-title';
};

const translatePage = (lang, buttonEl) => {
  const dict = translations[lang] || {};
  const fallback = translations[defaultLang] || {};
  const propertyTargets = new Set(['textContent', 'innerHTML', 'value']);

  document.querySelectorAll('[data-l18n]').forEach((el) => {
    const key = el.dataset.l18n;
    const target = el.dataset.l18nTarget || 'textContent';
    const defaultValue = defaultContent[key];
    let value = dict[key];
    if (value == null) value = fallback[key];
    if (value == null) value = defaultValue;
    if (value == null) return;

    if (propertyTargets.has(target)) {
      el[target] = value;
    } else {
      el.setAttribute(target, value);
    }
  });

  const titleValue = dict[getTitleKey()] || fallback[getTitleKey()] || defaultContent[getTitleKey()];
  if (titleValue) document.title = titleValue;
  if (buttonEl) {
    const label = buttonEl.querySelector('.language-label');
    if (label) {
      label.textContent = (lang || defaultLang).toUpperCase();
    }
  }
};

const setLanguage = (lang, buttonEl) => {
  const normalized = supportedLangs.includes(lang) ? lang : defaultLang;
  localStorage.setItem(storageKey, normalized);
  translatePage(normalized, buttonEl);
  document.documentElement.setAttribute('lang', normalized);
  document.body.setAttribute('lang', normalized);
  // Conteúdos mudam -> se AOS presente, refresca dimensões
  if (window.AOS && typeof AOS.refreshHard === 'function') AOS.refreshHard();
  return normalized;
};

/* ========================================================================
   Navegação / Header
   ======================================================================== */
const updateNavState = () => {
  const page = document.body?.dataset?.page;
  document.querySelectorAll(VFR.selectors.navLinks).forEach((link) => {
    const target = link.getAttribute('data-page-target') || '';
    const href = (link.getAttribute('href') || '').toLowerCase();
    const isActive =
      (target && target === page) ||
      (page === 'home' &&
        (href.includes('#about') || href.endsWith('index.html') || href.endsWith('/'))) ||
      (page === 'projects' && href.includes('projeto')) ||
      (page === 'contact' && href.includes('contato'));
    link.classList.toggle('active', !!isActive);
  });
};

const initHeaderSticky = () => {
  const header = document.querySelector(VFR.selectors.header);
  if (!header) return;

  // altura padrão caso não exista var CSS
  const fallbackHeaderHeight = 78;

  const getHeaderHeight = () => {
    const css = getComputedStyle(document.documentElement);
    const varVal = css.getPropertyValue(VFR.cssVars.headerHeight).trim();
    const px = parseInt(varVal || '', 10);
    return Number.isFinite(px) && px > 0 ? px : fallbackHeaderHeight;
  };

  const setScrolledClass = throttle(() => {
    if (window.scrollY > 1) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }, 50);

  setScrolledClass();
  window.addEventListener('scroll', setScrolledClass, { passive: true });

  // rolagem com compensação do header
  const scrollToWithOffset = (targetEl, smooth = true) => {
    if (!targetEl) return;
    const headerHeight = getHeaderHeight();
    const top = targetEl.getBoundingClientRect().top + window.pageYOffset - (headerHeight + 16);
    window.scrollTo({ top, behavior: smooth ? 'smooth' : 'auto' });
  };

  // links âncora locais
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    const href = a.getAttribute('href');
    if (!href || href === '#') return;
    a.addEventListener('click', (e) => {
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        scrollToWithOffset(el, true);
        history.pushState(null, '', `#${id}`);
      }
    });
  });

  // corrige hash em navegação pelo histórico
  window.addEventListener('hashchange', () => {
    const id = location.hash.replace('#', '');
    const el = id ? document.getElementById(id) : null;
    if (el) setTimeout(() => scrollToWithOffset(el, false), 0);
  });

  // Primeira visita na home: não descer por hash
  try {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  } catch {}
  const path = location.pathname.toLowerCase();
  const isHome =
    document.body?.dataset?.page === 'home' ||
    path.endsWith('/') ||
    path.endsWith('/index.html') ||
    path === '/';
  if (isHome) {
    const firstVisit = !sessionStorage.getItem(VFR.storage.firstVisit);
    if (firstVisit) {
      sessionStorage.setItem(VFR.storage.firstVisit, '1');
      if (location.hash) history.replaceState(null, '', location.pathname);
      // sobe instantaneamente
      const root = document.documentElement;
      const prev = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      root.style.scrollBehavior = prev;
    } else if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) setTimeout(() => scrollToWithOffset(el, false), 0);
    }
  } else if (location.hash) {
    const el = document.getElementById(location.hash.slice(1));
    if (el) setTimeout(() => scrollToWithOffset(el, false), 0);
  }
};

const initMobileMenu = () => {
  const header = document.querySelector(VFR.selectors.header);
  const toggle = document.querySelector(VFR.selectors.menuToggle);
  const nav = document.querySelector(VFR.selectors.nav);
  if (!header || !toggle || !nav) return;

  const mq = window.matchMedia('(min-width: 769px)');

  const setAria = (isOpen) => {
    if (mq.matches) nav.removeAttribute('aria-hidden');
    else nav.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  };

  const closeMenu = () => {
    header.classList.remove('nav-open');
    document.body.classList.remove('menu-open');
    setAria(false);
  };

  const openMenu = () => {
    header.classList.add('nav-open');
    document.body.classList.add('menu-open');
    setAria(true);
  };

  toggle.addEventListener('click', () => {
    if (header.classList.contains('nav-open')) closeMenu();
    else openMenu();
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (!mq.matches) closeMenu();
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && header.classList.contains('nav-open')) {
      closeMenu();
    }
  });

  const handleBreakpoint = (event) => {
    if (event.matches) {
      nav.removeAttribute('aria-hidden');
      closeMenu();
    } else {
      setAria(header.classList.contains('nav-open'));
    }
  };

  if (typeof mq.addEventListener === 'function') mq.addEventListener('change', handleBreakpoint);
  else if (typeof mq.addListener === 'function') mq.addListener(handleBreakpoint);
  handleBreakpoint(mq);
};

/* ========================================================================
   Dropdown de Idiomas (mouse/teclado)
   ======================================================================== */
const setupLanguageDropdown = (button, dropdown) => {
  if (!button || !dropdown) return;

  const close = () => {
    dropdown.classList.remove('show');
    button.setAttribute('aria-expanded', 'false');
  };
  const open = () => {
    dropdown.classList.add('show');
    button.setAttribute('aria-expanded', 'true');
  };
  const toggle = () => {
    dropdown.classList.contains('show') ? close() : open();
  };

  // Clique do botão
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    toggle();
  });

  // Clique fora
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && e.target !== button) close();
  });

  // Teclado: Escape fecha; setas navegam; Enter seleciona
  dropdown.addEventListener('keydown', (e) => {
    const items = Array.from(dropdown.querySelectorAll('[data-lang]'));
    if (!items.length) return;

    const current = document.activeElement;
    const idx = items.indexOf(current);

    switch (e.key) {
      case 'Escape':
        close();
        button.focus();
        break;
      case 'ArrowDown': {
        e.preventDefault();
        const next = items[clamp(idx + 1, 0, items.length - 1)] || items[0];
        next.focus();
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        const prev = items[clamp(idx - 1, 0, items.length - 1)] || items[items.length - 1];
        prev.focus();
        break;
      }
      case 'Enter':
      case ' ':
        if (current && current.hasAttribute('data-lang')) {
          const lang = current.getAttribute('data-lang');
          setLanguage(lang, button);
          close();
        }
        break;
    }
  });

  // Clique em opção
  dropdown.querySelectorAll('[data-lang]').forEach((option) => {
    option.addEventListener('click', () => {
      const lang = option.getAttribute('data-lang');
      setLanguage(lang, button);
      close();
    });
  });
};

/* ========================================================================
   Canvas Partículas — elegante e leve (respeita prefers-reduced-motion)
   ======================================================================== */
const initSparkCanvas = () => {
  const canvas = document.querySelector(VFR.selectors.canvas);
  if (!canvas) return;
  if (prefersReducedMotion()) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const DPR = clamp(window.devicePixelRatio || 1, 1, 2);
  let width = 0, height = 0, running = true, raf = null;

  // Partículas (poucas e grandes para elegância + blur leve)
  const COUNT = 140;
  let sizeMult = 12;
  const GRADIENT_RATIO = 1.67; // mantém proporção do glow

  const setSizeMultiplier = () => {
    sizeMult = window.innerWidth <= 768 ? 7 : 12;
  };
  setSizeMultiplier();

  const SPARKS = Array.from({ length: COUNT }, () => ({
    x: Math.random(),
    y: Math.random(),
    vx: (Math.random() - 0.5) * 0.00008,
    vy: - (0.00005 + Math.random() * 0.0001),
    size: 0.8 + Math.random() * 1.9,
    alpha: 0.35 + Math.random() * 0.5
  }));

  const resize = () => {
    setSizeMultiplier();
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * DPR);
    canvas.height = Math.floor(height * DPR);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  };
  resize();
  window.addEventListener('resize', debounce(resize, 120), { passive: true });

  const step = () => {
    if (!running) return;
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < COUNT; i++) {
      const p = SPARKS[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.y < -0.05 || p.x < -0.05 || p.x > 1.05) {
        p.x = Math.random();
        p.y = 1.05 + Math.random() * 0.05;
        p.vx = (Math.random() - 0.5) * 0.00008;
        p.vy = - (0.00005 + Math.random() * 0.0001);
        p.size = 0.8 + Math.random() * 1.9;
        p.alpha = 0.35 + Math.random() * 0.5;
      }

      const x = p.x * width;
      const y = p.y * height;

      const grd = ctx.createRadialGradient(x, y, 0, x, y, p.size * sizeMult * GRADIENT_RATIO);
      grd.addColorStop(0, `rgba(255, 214, 0, ${p.alpha})`);
      grd.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grd;

      ctx.beginPath();
      ctx.arc(x, y, p.size * sizeMult, 0, Math.PI * 2);
      ctx.fill();
    }
    raf = requestAnimationFrame(step);
  };
  step();

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      raf = null;
    } else if (!prefersReducedMotion()) {
      running = true;
      step();
    }
  });
};

/* ========================================================================
   Intersection Reveal + AOS (opcional)
   ======================================================================== */
const initReveal = () => {
  // AOS (se estiver incluído via CDN)
  if (VFR.aos.enabled && window.AOS) {
    AOS.init({
      duration: VFR.aos.duration,
      easing: VFR.aos.easing,
      once: true,
      offset: 80,
    });
    // alguns conteúdos traduzidos mudam altura
    window.addEventListener('load', () => {
      if (typeof AOS.refreshHard === 'function') AOS.refreshHard();
    });
  }

  // Reveal adicional via IntersectionObserver (sem depender de AOS)
  const elList = document.querySelectorAll(VFR.selectors.reveal);
  if (!elList.length) return;

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elList.forEach((el) => obs.observe(el));
};

/* ========================================================================
   Tilt 3D com glare — UX sutil (inspirado em cartões de produto modernos)
   ======================================================================== */
const initTilt = () => {
  const els = document.querySelectorAll(VFR.selectors.tilt);
  if (!els.length) return;

  els.forEach((el) => {
    if (el.__tiltBound) return;
    el.__tiltBound = true;

    const maxRot = 10;
    const damp = 14;
    const glareStrength = 0.35;
    let targetRX = 0, targetRY = 0, curRX = 0, curRY = 0, gX = 50, gY = 50;
    let raf = null;

    el.style.transformStyle = 'preserve-3d';
    el.style.willChange = 'transform';
    el.style.transform = 'translateZ(0) perspective(900px) rotateX(0deg) rotateY(0deg)';

    let glare = el.querySelector('.tilt-glare');
    if (!glare) {
      glare = document.createElement('div');
      glare.className = 'tilt-glare';
      Object.assign(glare.style, {
        position: 'absolute',
        inset: '0',
        pointerEvents: 'none',
        background: `radial-gradient(circle at ${gX}% ${gY}%, rgba(255,255,255,${glareStrength}) 0%, rgba(255,255,255,0) 60%)`,
        opacity: '0',
        transition: 'opacity .25s ease',
        borderRadius: 'inherit',
      });
      el.style.position = el.style.position || 'relative';
      el.appendChild(glare);
    }

    const step = () => {
      curRX = lerp(curRX, targetRX, 0.14);
      curRY = lerp(curRY, targetRY, 0.14);
      el.style.transform = `translateZ(0) perspective(900px) rotateX(${curRX}deg) rotateY(${curRY}deg)`;
      glare.style.background = `radial-gradient(circle at ${gX}% ${gY}%, rgba(255,255,255,${glareStrength}) 0%, rgba(255,255,255,0) 60%)`;
      glare.style.opacity = (Math.abs(curRX) + Math.abs(curRY) > 0.25) ? '0.75' : '0';
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    const onMove = (ev) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (ev.clientX - cx) / damp;
      const dy = (ev.clientY - cy) / damp;
      targetRY = clamp(dx, -maxRot, maxRot);
      targetRX = clamp(-dy, -maxRot, maxRot);
      gX = clamp(((ev.clientX - r.left) / r.width) * 100, 0, 100);
      gY = clamp(((ev.clientY - r.top) / r.height) * 100, 0, 100);
    };

    const onLeave = () => {
      targetRX = 0;
      targetRY = 0;
    };

    el.addEventListener('pointermove', onMove, { passive: true });
    el.addEventListener('pointerenter', onMove);
    el.addEventListener('pointerleave', onLeave);
    el.addEventListener('pointercancel', onLeave);
    el.addEventListener('mousemove', onMove, { passive: true });
    el.addEventListener('mouseenter', onMove);
    el.addEventListener('mouseleave', onLeave);
  });
};

/* ========================================================================
   Form: mensagem de sucesso (quando ?sent=1)
   ======================================================================== */
const initFormStatus = () => {
  const statusEl = document.getElementById('form-status');
  if (!statusEl) return;
  const url = new URL(window.location.href);
  if (url.searchParams.get('sent') === '1') {
    statusEl.textContent = 'Mensagem enviada com sucesso! Em breve retorno o contato.';
  } else {
    statusEl.textContent = '';
  }
};

/* ========================================================================
   Modais de experiência
   ======================================================================== */
const focusableSelector = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
let lastFocusedElement = null;

const setBodyModalState = (isOpen) => {
  document.body.classList.toggle('modal-open', isOpen);
};

const openExperienceModal = (modalId) => {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  if (!modal.hasAttribute('tabindex')) {
    modal.setAttribute('tabindex', '-1');
  }
  lastFocusedElement = document.activeElement;
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  setBodyModalState(true);

  const focusables = modal.querySelectorAll(focusableSelector);
  if (focusables.length) {
    focusables[0].focus();
  } else {
    modal.focus();
  }
};

const closeExperienceModal = (modalId) => {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');

  const stillOpen = document.querySelector('.exp-modal.show');
  if (!stillOpen) {
    setBodyModalState(false);
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }
};

const initExperienceModals = () => {
  const modals = document.querySelectorAll('.exp-modal');
  if (!modals.length) return;

  modals.forEach((modal) => {
    modal.setAttribute('aria-hidden', 'true');
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeExperienceModal(modal.id);
      }
    });
  });

  document.querySelectorAll('[data-close-modal]').forEach((button) => {
    button.addEventListener('click', () => {
      const modal = button.closest('.exp-modal');
      if (modal) {
        closeExperienceModal(modal.id);
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const opened = document.querySelector('.exp-modal.show');
      if (opened) {
        closeExperienceModal(opened.id);
      }
    }
  });
};

window.openModal = openExperienceModal;
window.closeModal = closeExperienceModal;

/* ========================================================================
   Boot
   ======================================================================== */
window.addEventListener('DOMContentLoaded', () => {
  // Idioma
  const langButton = document.querySelector(VFR.selectors.languageButton);
  const langDropdown = document.querySelector(VFR.selectors.languageDropdown);
  cacheDefaultTranslations();
  const stored = localStorage.getItem(storageKey) || defaultLang;
  setLanguage(stored, langButton);
  setupLanguageDropdown(langButton, langDropdown);

  // Header / Navegação
  updateNavState();
  initHeaderSticky();
  initMobileMenu();

  // Canvas
  initSparkCanvas();

  // Reveal + AOS
  initReveal();

  // Tilt
  initTilt();

  // Form feedback (contato.html)
  initFormStatus();

  // Modais de experiência
  initExperienceModals();
});

// Refaz tilt após carregamento completo (caso algo entre depois do DOMContentLoaded)
window.addEventListener('load', () => {
  initTilt();
});










