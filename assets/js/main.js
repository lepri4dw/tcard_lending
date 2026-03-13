/* ================================================================
  ZealOn Landing — JavaScript
  ================================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ──── 1. Initialise AOS (Animate On Scroll) ──── */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,          // animate only once on scroll
      offset: 80,
      disable: 'mobile'    // lighter experience on mobile
    });
  }

  /* ──── 2. Initialise Lucide icons ──── */
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  /* ──── 3. Language switcher (RU default) ──── */
  const translations = {
    ru: {
      htmlLang: 'ru',
      documentTitle: 'ZealOn — Картотека талантов нового поколения',
      metaDescription: 'ZealOn — мобильное приложение для видеопрофилей и свайп-поиска кандидатов. Найм за минуты, а не за недели.',
      navTogglerAria: 'Меню',
      langSwitcherAria: 'Переключение языка',
      navLinks: ['Главная', 'Возможности', 'Как это работает', 'Для кого', 'Приложение'],
      navCta: 'Скачать',
      heroBadge: 'Картотека соискателей и вакансий',
      heroTitle: 'Раскройте потенциал с&nbsp;<span class="text-gradient">ZealOn</span>',
      heroSubtitle: 'Управляйте талантами по-новому',
      heroDesc: 'Мобильная платформа для видеопрофилей и подтверждённых навыков. Свайп-поиск с геолокацией, видео-питч за 30 секунд и тысячи анкет специалистов — найм за минуты, а не за недели.',
      storeSmallDownload: 'Загрузите в',
      storeSmallAvailable: 'Доступно в',
      appStoreAria: 'Скачать в App Store',
      playStoreAria: 'Скачать в Google Play',
      heroImageAlt: 'Главный экран ZealOn',
      problemImageAlt: 'Рекрутер за работой',
      problemEyebrow: 'Поиск талантов не эффективен?',
      problemTitle: 'Проблема <span class="text-accent">устаревшего</span> подхода',
      problemItemTitles: ['Резюме больше не работают', 'Десятки пустых собеседований', 'Сложно выделиться'],
      problemItemTexts: [
        'Копипаст, шаблоны, недостоверная информация — невозможно оценить реального кандидата по бумаге.',
        'Работодатели тратят время и бюджет на встречи с кандидатами, которые не подходят.',
        'Соискателям, особенно без опыта, нечем подтвердить свои навыки и мотивацию.'
      ],
      featuresEyebrow: 'Возможности',
      featuresTitle: 'Новый взгляд на управление <span class="text-gradient">талантами</span>',
      featuresLead: 'Картотека тысяч специалистов с видеопрофилями, подтверждёнными навыками и мгновенным свайп-поиском',
      featureTitles: [
        'Структурированные анкеты',
        'Подтверждённые навыки',
        'Видео-питч 30 сек',
        'Свайп-фильтр',
        'Геопоиск рядом',
        'Anti-bias подход'
      ],
      featureTexts: [
        'Не просто резюме — полная карточка: навыки, опыт, языки, график, геолокация и доступность. Всё структурировано для быстрого поиска.',
        'Сертификаты, грамоты, примеры работ — кандидаты загружают доказательства. Верификация через видео-селфи и документы.',
        'Каждый кандидат записывает короткое видео: кто он, почему подойдёт, когда готов начать. Живое впечатление вместо сухого текста.',
        'Мгновенное решение «Да»/«Нет» по каждому кандидату. Работает как Tinder для найма — быстро, удобно, одной рукой.',
        'Ищите кандидатов в радиусе от 5 до 15 км. Идеально для подработок, доставки, ритейла и HoReCa.',
        'Сначала работодатель видит навыки и данные без лица. Видео раскрывается только после позитивного свайпа. Честный отбор.'
      ],
      aiBadge: 'Встроенный ИИ',
      aiTitles: ['ИИ-анализ видео-питча', 'ИИ-подбор навыков'],
      aiTexts: [
        'Искусственный интеллект анализирует записанное видео кандидата: оценивает уверенность речи, темп, чёткость подачи — и формирует AI review для работодателя: сильные стороны, зоны риска и общий уровень презентации кандидата.',
        'При создании вакансии ИИ автоматически подбирает и предлагает релевантные навыки на основе описания должности. Не нужно вручную перебирать списки — умная подсказка экономит время и повышает точность поиска.'
      ],
      aiScore: 'AI review: 78%',
      aiTips: ['✓ Сильная структура речи', '△ Недостаточно уверенная подача', '△ Мало конкретных рабочих кейсов'],
      aiRoleLabel: 'Должность: Официант',
      aiRoleSubLabel: 'ИИ рекомендует навыки:',
      aiTags: ['✓ Работа с клиентами', '✓ Касса', '✓ HoReCa', '+ Коммуникация', '+ Стрессоустойчивость'],
      howEyebrow: 'Как это работает',
      howTitle: 'Начните за <span class="text-accent">5 минут</span>',
      howLead: 'Интуитивный интерфейс: регистрация и создание профиля — быстрее, чем заварить кофе',
      howTabs: ['Я ищу работу', 'Я ищу сотрудников'],
      seekerTitles: ['Регистрация', 'Заполните профиль', 'Запишите видео', 'Получайте приглашения'],
      seekerTexts: [
        'Номер телефона -> SMS-код. Готово за 2 минуты.',
        'Навыки, опыт, график, желаемая оплата, геолокация.',
        '30-секундный питч по подсказкам. Покажите себя живьём.',
        'Работодатели найдут вас и пригласят — отслеживайте статус.'
      ],
      employerTitles: ['Профиль компании', 'Создайте вакансию', 'Свайпайте кандидатов', 'Нанимайте'],
      employerTexts: [
        'Название, отрасль, локации для геопоиска ваших точек.',
        'Тип, график, оплата, навыки — мастер за пару минут.',
        'Анонимные карточки -> свайп -> видео-питч после «Да».',
        'Откройте контакты, пригласите и оцените после работы.'
      ],
      audienceEyebrow: 'Для кого ZealOn',
      audienceTitle: 'Находим подход к каждому',
      audienceTitles: ['Работодатели (B2B)', 'Студенты и молодёжь', 'Фрилансеры и специалисты'],
      audienceTexts: [
        'Компании, которым нужен быстрый и честный найм на массовые позиции. Свайп вместо стопки резюме, видео вместо первого собеседования.',
        'Нет опыта — не проблема. Видео-питч покажет мотивацию, а навыки и сертификаты подтвердят потенциал. Быстрый старт карьеры и подработки.',
        'Покажите навыки и личный бренд. Структурированный профиль выделит вас среди тысяч однотипных анкет на классических площадках.'
      ],
      audienceTags: ['Ритейл', 'HoReCa', 'Логистика', 'Производство', 'Подработки', 'Стажировки', 'Первая работа', 'Разовые задачи', 'Проектная работа', 'Портфолио'],
      screensEyebrow: 'Приложение',
      screensTitle: 'Мобильность: работа и кандидаты <span class="text-accent">«на ладони»</span>',
      screensLead: 'Все ключевые сценарии оптимизированы под одну руку, свайпы, большие CTA',
      screenImageAlts: ['Лента вакансий', 'Поиск кандидатов', 'Профиль кандидата'],
      screenPills: ['Свайп-фильтр', 'Видео-питч', 'Геопоиск', 'ИИ-анализ', 'Шорт-лист'],
      kartotekaEyebrow: 'Картотека специалистов',
      kartotekaTitle: 'Тысячи анкет —<br/>один <span class="text-gradient">свайп</span>',
      kartotekaLead: 'ZealOn — это растущая база данных кандидатов с подтверждёнными навыками и видеопрофилями. Полный цикл: от подработки на день до постоянной позиции и фриланса.',
      statSuffixes: ['сек', 'мин', 'мин', ''],
      statLabels: ['Видео-питч', 'Регистрация', 'Создание профиля', 'Формата: подработка, постоянная, фриланс'],
      cardTitles: ['Касса · Продажи', 'Доставка · Курьер', 'Официант · HoReCa', 'Склад · Погрузка', 'Мерчендайзинг'],
      cardSubtitles: ['1.2 км · Доступен сегодня', '3.7 км · Видео-питч', '0.8 км · Доступен сегодня', '5.1 км · Видео-питч', '2.4 км · Доступен завтра'],
      ctaTitle: 'Скачайте ZealOn сегодня',
      ctaText: 'Присоединяйтесь к картотеке нового поколения.<br/>Видеопрофили, свайп-поиск и подтверждённые навыки — бесплатно на старте.',
      footerDesc: 'Картотека соискателей и вакансий нового поколения. Видеопрофили, подтверждённые навыки и мгновенный свайп-поиск.',
      footerHeadings: ['Навигация', 'Приложение', 'Контакты'],
      footerNavLinks: ['Главная', 'Возможности', 'Как это работает', 'Для кого'],
      footerAppLinks: ['Экраны', 'Скачать', 'App Store', 'Google Play'],
      footerCopyright: '© 2025–2026 ZealOn. Все права защищены.'
    },
    en: {
      htmlLang: 'en',
      documentTitle: 'ZealOn — Next-Generation Talent Database',
      metaDescription: 'ZealOn is a mobile app with video profiles and swipe-based candidate search. Hire in minutes, not weeks.',
      navTogglerAria: 'Menu',
      langSwitcherAria: 'Language switcher',
      navLinks: ['Home', 'Features', 'How it works', 'Who it is for', 'App'],
      navCta: 'Download',
      heroBadge: 'Candidate and Vacancy Database',
      heroTitle: 'Unlock Potential with&nbsp;<span class="text-gradient">ZealOn</span>',
      heroSubtitle: 'Manage talent in a new way',
      heroDesc: 'A mobile platform for video profiles and verified skills. Swipe search with geolocation, a 30-second video pitch, and thousands of specialist profiles — hiring in minutes, not weeks.',
      storeSmallDownload: 'Download on the',
      storeSmallAvailable: 'Available on',
      appStoreAria: 'Download on the App Store',
      playStoreAria: 'Get it on Google Play',
      heroImageAlt: 'ZealOn main screen',
      problemImageAlt: 'Recruiter at work',
      problemEyebrow: 'Is talent search inefficient?',
      problemTitle: 'The Problem of an <span class="text-accent">Outdated</span> Approach',
      problemItemTitles: ['Resumes no longer work', 'Dozens of wasted interviews', 'Hard to stand out'],
      problemItemTexts: [
        'Copy-paste templates and unreliable information make it impossible to evaluate a real candidate from paper alone.',
        'Employers spend time and budget on meetings with candidates who are not a fit.',
        'Job seekers, especially without experience, struggle to prove their skills and motivation.'
      ],
      featuresEyebrow: 'Features',
      featuresTitle: 'A New Perspective on <span class="text-gradient">Talent Management</span>',
      featuresLead: 'A database of thousands of specialists with video profiles, verified skills, and instant swipe search',
      featureTitles: [
        'Structured profiles',
        'Verified skills',
        '30-sec video pitch',
        'Swipe filter',
        'Nearby geo search',
        'Anti-bias approach'
      ],
      featureTexts: [
        'More than a resume — a complete profile with skills, experience, languages, schedule, geolocation, and availability. Everything is structured for fast search.',
        'Certificates, awards, and work samples — candidates upload proof. Verification is done via video selfie and documents.',
        'Each candidate records a short video: who they are, why they are a fit, and when they can start. A real impression instead of dry text.',
        'Instant Yes/No decisions for each candidate. Works like Tinder for hiring — fast, convenient, and one-handed.',
        'Search for candidates within a 5 to 15 km radius. Perfect for part-time roles, delivery, retail, and HoReCa.',
        'The employer first sees skills and data without a face. Video is revealed only after a positive swipe. Fair selection.'
      ],
      aiBadge: 'Built-in AI',
      aiTitles: ['AI video pitch analysis', 'AI skill matching'],
      aiTexts: [
        'Artificial intelligence analyzes the candidate\'s recorded video: confidence, pace, and clarity of delivery — and generates an AI review for the employer with key strengths, risk areas, and an overall presentation assessment.',
        'When creating a vacancy, AI automatically selects and suggests relevant skills based on the job description. No need to manually sift through long lists — smart hints save time and improve search accuracy.'
      ],
      aiScore: 'AI review: 78%',
      aiTips: ['✓ Strong speech structure', '△ Delivery lacks confidence', '△ Too few specific work cases'],
      aiRoleLabel: 'Role: Waiter',
      aiRoleSubLabel: 'AI recommends these skills:',
      aiTags: ['✓ Customer service', '✓ Cash handling', '✓ HoReCa', '+ Communication', '+ Stress tolerance'],
      howEyebrow: 'How it works',
      howTitle: 'Get started in <span class="text-accent">5 minutes</span>',
      howLead: 'An intuitive interface: registration and profile setup are faster than brewing coffee',
      howTabs: ['I am looking for a job', 'I am hiring'],
      seekerTitles: ['Sign up', 'Complete your profile', 'Record a video', 'Receive invitations'],
      seekerTexts: [
        'Phone number -> SMS code. Done in 2 minutes.',
        'Skills, experience, schedule, expected pay, and geolocation.',
        'A 30-second guided pitch. Show who you really are.',
        'Employers will find you and invite you — track your status.'
      ],
      employerTitles: ['Company profile', 'Create a vacancy', 'Swipe candidates', 'Hire'],
      employerTexts: [
        'Company name, industry, and locations for geo search of your sites.',
        'Type, schedule, pay, and skills — complete the setup in just a couple of minutes.',
        'Anonymous cards -> swipe -> video pitch after “Yes”.',
        'Open contacts, invite candidates, and rate after work is done.'
      ],
      audienceEyebrow: 'Who ZealOn is for',
      audienceTitle: 'A tailored fit for everyone',
      audienceTitles: ['Employers (B2B)', 'Students and youth', 'Freelancers and specialists'],
      audienceTexts: [
        'Companies that need fast and fair hiring for high-volume roles. Swipe instead of resume stacks, video instead of a first interview.',
        'No experience is not a problem. A video pitch shows motivation, while skills and certificates prove potential. Fast career starts and part-time jobs.',
        'Showcase your skills and personal brand. A structured profile helps you stand out among thousands of similar profiles on traditional platforms.'
      ],
      audienceTags: ['Retail', 'HoReCa', 'Logistics', 'Manufacturing', 'Part-time jobs', 'Internships', 'First job', 'One-time tasks', 'Project work', 'Portfolio'],
      screensEyebrow: 'App',
      screensTitle: 'Mobile-first: jobs and candidates <span class="text-accent">in your hand</span>',
      screensLead: 'All key scenarios are optimized for one-hand use, swipes, and large CTAs',
      screenImageAlts: ['Job feed', 'Candidate search', 'Candidate profile'],
      screenPills: ['Swipe filter', 'Video pitch', 'Geo search', 'AI analysis', 'Shortlist'],
      kartotekaEyebrow: 'Specialist Database',
      kartotekaTitle: 'Thousands of profiles —<br/>one <span class="text-gradient">swipe</span>',
      kartotekaLead: 'ZealOn is a growing candidate database with verified skills and video profiles. A full cycle: from one-day part-time jobs to permanent roles and freelance work.',
      statSuffixes: ['sec', 'min', 'min', ''],
      statLabels: ['Video pitch', 'Registration', 'Profile creation', 'Formats: part-time, permanent, freelance'],
      cardTitles: ['Cashier · Sales', 'Delivery · Courier', 'Waiter · HoReCa', 'Warehouse · Loading', 'Merchandising'],
      cardSubtitles: ['1.2 km · Available today', '3.7 km · Video pitch', '0.8 km · Available today', '5.1 km · Video pitch', '2.4 km · Available tomorrow'],
      ctaTitle: 'Download ZealOn today',
      ctaText: 'Join the next-generation talent database.<br/>Video profiles, swipe search, and verified skills — free at launch.',
      footerDesc: 'A next-generation database of candidates and vacancies. Video profiles, verified skills, and instant swipe search.',
      footerHeadings: ['Navigation', 'App', 'Contacts'],
      footerNavLinks: ['Home', 'Features', 'How it works', 'Who it is for'],
      footerAppLinks: ['Screens', 'Download', 'App Store', 'Google Play'],
      footerCopyright: '© 2025–2026 ZealOn. All rights reserved.'
    }
  };

  const setText = (selector, value) => {
    const el = document.querySelector(selector);
    if (el && typeof value === 'string') el.textContent = value;
  };

  const setHTML = (selector, value) => {
    const el = document.querySelector(selector);
    if (el && typeof value === 'string') el.innerHTML = value;
  };

  const setAllText = (selector, values) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, index) => {
      if (values[index] !== undefined) el.textContent = values[index];
    });
  };

  const setAllHTML = (selector, values) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, index) => {
      if (values[index] !== undefined) el.innerHTML = values[index];
    });
  };

  const setAllAttr = (selector, attr, values) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, index) => {
      if (values[index] !== undefined) {
        el.setAttribute(attr, values[index]);
      }
    });
  };

  const applyLanguage = (lang, persist = false) => {
    const dict = translations[lang] || translations.ru;

    document.documentElement.setAttribute('lang', dict.htmlLang);
    document.title = dict.documentTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', dict.metaDescription);
    }

    const navToggler = document.querySelector('.navbar-toggler');
    if (navToggler) {
      navToggler.setAttribute('aria-label', dict.navTogglerAria);
    }

    const langSwitcher = document.querySelector('.lang-switch');
    if (langSwitcher) {
      langSwitcher.setAttribute('aria-label', dict.langSwitcherAria);
    }

    setAllText('#mainNav .nav-link', dict.navLinks);
    setText('.btn-nav-cta', dict.navCta);

    setHTML('.hero-badge', `<span class="badge-dot"></span>${dict.heroBadge}`);
    setHTML('.hero-title', dict.heroTitle);
    setText('.hero-subtitle', dict.heroSubtitle);
    setText('.hero-desc', dict.heroDesc);

    setAllText('.hero-buttons .store-text small', [dict.storeSmallDownload, dict.storeSmallAvailable]);
    setAllText('.section--cta .store-text small', [dict.storeSmallDownload, dict.storeSmallAvailable]);

    setAllAttr('.hero-buttons .store-btn', 'aria-label', [dict.appStoreAria, dict.playStoreAria]);
    setAllAttr('.section--cta .store-btn', 'aria-label', [dict.appStoreAria, dict.playStoreAria]);

    setAllAttr('.hero-visual .phone-screen-img', 'alt', [dict.heroImageAlt]);
    setAllAttr('.problem-img', 'alt', [dict.problemImageAlt]);
    setAllAttr('.screens-showcase .phone-screen-img', 'alt', dict.screenImageAlts);

    setText('#problem .section-eyebrow', dict.problemEyebrow);
    setHTML('#problem .section-title', dict.problemTitle);
    setAllText('#problem .problem-list li strong', dict.problemItemTitles);
    setAllText('#problem .problem-list li p', dict.problemItemTexts);

    setText('#features .section-eyebrow', dict.featuresEyebrow);
    setHTML('#features .section-title', dict.featuresTitle);
    setText('#features .section-lead', dict.featuresLead);
    setAllText('#features .feature-card__title', dict.featureTitles);
    setAllText('#features .feature-card__text', dict.featureTexts);
    setText('.ai-highlight__badge span', dict.aiBadge);
    setAllText('.ai-card__title', dict.aiTitles);
    setAllText('.ai-card__text', dict.aiTexts);
    setText('.ai-mock-score', dict.aiScore);
    setAllText('.ai-mock-tips li', dict.aiTips);
    setText('.ai-mock-label', dict.aiRoleLabel);
    setText('.ai-mock-sublabel', dict.aiRoleSubLabel);
    setAllText('.ai-mock-tags .ai-tag', dict.aiTags);

    setText('#how-it-works .section-eyebrow', dict.howEyebrow);
    setHTML('#how-it-works .section-title', dict.howTitle);
    setText('#how-it-works .section-lead', dict.howLead);
    setAllText('#how-it-works .hiw-tab', dict.howTabs);
    setAllText('#tab-seeker .step-card__title', dict.seekerTitles);
    setAllText('#tab-seeker .step-card__text', dict.seekerTexts);
    setAllText('#tab-employer .step-card__title', dict.employerTitles);
    setAllText('#tab-employer .step-card__text', dict.employerTexts);

    setText('#audience .section-eyebrow', dict.audienceEyebrow);
    setText('#audience .section-title', dict.audienceTitle);
    setAllText('#audience .audience-card__title', dict.audienceTitles);
    setAllText('#audience .audience-card__text', dict.audienceTexts);
    setAllText('#audience .audience-card__tags li', dict.audienceTags);

    setText('#screens .section-eyebrow', dict.screensEyebrow);
    setHTML('#screens .section-title', dict.screensTitle);
    setText('#screens .section-lead', dict.screensLead);
    setAllText('#screens .screen-pills .pill', dict.screenPills);

    setText('#kartoteka .section-eyebrow', dict.kartotekaEyebrow);
    setHTML('#kartoteka .section-title', dict.kartotekaTitle);
    setText('#kartoteka .section-lead', dict.kartotekaLead);
    setAllText('.stats-grid .stat-suffix', dict.statSuffixes);
    setAllText('.stats-grid .stat-label', dict.statLabels);
    setAllText('.kartoteka-cards .k-info strong', dict.cardTitles);
    setAllText('.kartoteka-cards .k-info small', dict.cardSubtitles);

    setText('.cta-title', dict.ctaTitle);
    setHTML('.cta-text', dict.ctaText);

    setText('.footer-desc', dict.footerDesc);
    setAllText('.footer-heading', dict.footerHeadings);
    setAllText('.footer-links a[href^="#hero"], .footer-links a[href^="#features"], .footer-links a[href^="#how-it-works"], .footer-links a[href^="#audience"]', dict.footerNavLinks);
    setAllText('.footer-links a[href^="#screens"], .footer-links a[href^="#download"], .footer-links a[href="#"]', dict.footerAppLinks);
    setText('.footer-bottom p', dict.footerCopyright);

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    if (persist) {
      localStorage.setItem('zealon-lang', lang);
    }
  };

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyLanguage(btn.dataset.lang, true);
    });
  });

  const savedLanguage = localStorage.getItem('zealon-lang');
  applyLanguage(savedLanguage === 'en' ? 'en' : 'ru');

  /* ──── 4. Navbar scroll effect ──── */
  const nav = document.getElementById('mainNav');
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ──── 5. Active nav-link highlighting ──── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('#mainNav .nav-link[href^="#"]');

  const highlightNav = () => {
    const scrollY = window.scrollY + 120;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const bottom = top + sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollY >= top && scrollY < bottom) {
        navLinks.forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === `#${id}`);
        });
      }
    });
  };
  window.addEventListener('scroll', highlightNav, { passive: true });
  highlightNav();

  /* ──── 6. Close mobile menu on link click ──── */
  const navCollapse = document.getElementById('navMenu');
  if (navCollapse) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse) bsCollapse.hide();
      });
    });
  }

  /* ──── 7. "How it works" tabs ──── */
  const tabs = document.querySelectorAll('.hiw-tab');
  const contents = document.querySelectorAll('.hiw-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      contents.forEach(c => {
        c.classList.toggle('active', c.id === `tab-${target}`);
      });

      // Re-trigger AOS for newly visible cards
      if (typeof AOS !== 'undefined') AOS.refresh();
    });
  });

  /* ──── 8. Animated number counters ──── */
  const counters = document.querySelectorAll('.stat-number[data-count]');

  const animateCounter = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1500; // ms
    const start = performance.now();

    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
        el.classList.add('counted');
      }
    };
    requestAnimationFrame(step);
  };

  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));
  } else {
    // fallback
    counters.forEach(c => { c.textContent = c.dataset.count; });
  }

  /* ──── 9. Smooth scroll (fallback for older browsers) ──── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Update URL hash without jump
        history.pushState(null, '', href);
      }
    });
  });

  /* ──── 10. Parallax-lite for hero shapes ──── */
  const shapes = document.querySelectorAll('.hero-shapes .shape');
  if (shapes.length && window.innerWidth > 768) {
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      shapes.forEach((shape, i) => {
        const speed = (i + 1) * 8;
        shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    }, { passive: true });
  }

  /* ──── 11. Kartoteka cards stagger on scroll ──── */
  const kCards = document.querySelectorAll('.k-card');
  if ('IntersectionObserver' in window && kCards.length) {
    const kObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 120);
          kObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    kCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity .6s ease, transform .6s ease';
      kObserver.observe(card);
    });
  }

});
