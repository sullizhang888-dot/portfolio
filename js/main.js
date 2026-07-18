(function() {
  'use strict';

  // ===== LANGUAGE DATA =====
  const translations = {
    en: {
      nav_home: 'Home',
      nav_about: 'About',
      nav_journey: 'Journey',
      nav_projects: 'Projects',
      nav_certificates: 'Certificates',
      nav_talents: 'Talents',
      nav_contact: 'Contact',
      hero_greeting: 'International Chinese Teacher',
      hero_name: 'Zhang Guoxue',
      hero_english: 'Sulli Zhang',
      hero_title_text: "Master's in Teaching Chinese to Speakers of Other Languages · Confucius Institute Volunteer",
      hero_tag1: '🎓 M.A. Sichuan University',
      hero_tag2: '🌏 Outstanding Volunteer, Suriname Confucius Institute',
      hero_tag3: '🏆 Chinese Bridge Competition Coach',
      hero_slogan: 'Teach Chinese · Cross Culture · Travel the World',
      hero_sub: 'Connecting the world through language, bridging people through culture.',
      hero_cta1: 'Explore My Journey',
      hero_cta2: 'Contact Me',
      hero_play_label: 'Watch Self-Introduction',
      stat_hours_label: 'Teaching Hours',
      stat_countries_label: 'Countries & Regions',
      stat_students_label: 'Students Taught',
      stat_events_label: 'Cultural Events',
      about_title: 'About Me',
      about_subtitle: 'About Me',
      about_heading: 'Language as Bridge, Culture as Boat',
      about_p1: "I'm Zhang Guoxue (Sulli Zhang), an international Chinese teacher passionate about cross-cultural exchange. I graduated from Sichuan University with a Master's degree in Teaching Chinese as a Second Language.",
      about_p2: "From Thailand to Suriname, from online to offline, I truly believe that language is not just a tool for communication—it's a bridge to understanding each other's cultures. I am committed to helping learners around the world fall in love with Chinese through engaging and creative teaching.",
      about_p3: "Beyond teaching, I love photography, hanfu (traditional Chinese clothing) culture, and short-video creation—all of which enrich my classroom experiences.",
      about_card_edu: 'Education',
      about_card_edu_val: "M.A. Teaching Chinese",
      about_card_overseas: 'Overseas Experience',
      about_card_overseas_val: 'Suriname CI Volunteer',
      about_card_style: 'Teaching Style',
      about_card_style_val: 'Immersive · Gamified',
      about_card_philosophy: 'Philosophy',
      about_card_philosophy_val: 'Culture Shapes Hearts',
      about_video_label: 'Watch Self-Introduction',
      journey_title: 'Teaching Journey',
      journey_subtitle: 'Teaching Journey',
      projects_title: 'Key Projects',
      projects_subtitle: 'Key Projects',
      certificates_title: 'Certificates & Honors',
      certificates_subtitle: 'Certificates & Honors',
      talents_title: 'Languages & Talents',
      talents_subtitle: 'Languages & Talents',
      talents_lang: 'Language Skills',
      talents_native: 'Native',
      talents_proficient: 'Proficient',
      talents_basic: 'Basic',
      talents_hobby: 'Hobbies & Skills',
      talent_photo: 'Photography',
      talent_photo_desc: 'Humanities documentary & landscape',
      talent_hanfu: 'Hanfu Culture',
      talent_hanfu_desc: 'Original hanfu show on CCTV',
      talent_video: 'Short Video Creation',
      talent_video_desc: 'Shooting, editing & content planning',
      talent_calligraphy: 'Calligraphy',
      talent_calligraphy_desc: 'Hard & soft pen enthusiast',
      contact_title: 'Contact Me',
      contact_subtitle: 'Contact',
      contact_phone: 'Phone',
      contact_email: 'Email',
      contact_wechat: 'WeChat',
      contact_instagram: 'Instagram',
      contact_tiktok: 'TikTok',
      qr_wechat: 'Scan to add WeChat',
      qr_instagram: 'Follow on Instagram',
      footer_tagline: 'Language as Bridge, Culture as Boat',
      video_tab_zh: '中文自我介绍',
      video_tab_en: 'English Introduction',
      detail_role: 'Role',
      detail_media: 'Related Materials',
      detail_placeholder: 'Related Materials'
    }
  };

  let currentLang = 'zh';

  function switchLang(lang) {
    currentLang = lang;
    const t = translations[lang];
    if (!t) return;

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) el.textContent = t[key];
    });

    // Update section titles manually (they have both h2 and span)
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(st => {
      const enSpan = st.querySelector('.title-en');
      if (enSpan) {
        // title-en already has English, swap visibility
        enSpan.style.display = lang === 'en' ? 'none' : 'block';
      }
    });

    // Update lang button
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) langBtn.textContent = lang === 'en' ? '中文' : 'EN';

    // Update body font
    if (lang === 'en') {
      document.documentElement.lang = 'en';
      document.body.style.fontFamily = "'Inter', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif";
    } else {
      document.documentElement.lang = 'zh-CN';
      document.body.style.fontFamily = '';
    }
  }

  // Lang toggle
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      switchLang(currentLang === 'zh' ? 'en' : 'zh');
    });
  }

  // Header scroll effect
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Mobile nav
  const mobileBtn = document.getElementById('nav-mobile-btn');
  const mobileNav = document.getElementById('nav-mobile');
  if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener('click', () => mobileNav.classList.toggle('active'));
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileNav.classList.remove('active'));
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active-link');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active-link');
      }
    });
  }
  window.addEventListener('scroll', updateActiveNav);

  // Scroll reveal animation
  function revealOnScroll() {
    document.querySelectorAll('.ink-fade, .ink-slide-left, .ink-slide-right, .ink-project, .ink-contact, .ink-lang-item').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 60) {
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);

  // ===== VIDEO MODAL =====
  const videoModal = document.getElementById('video-modal');
  const modalClose = document.getElementById('modal-close');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalVideo = document.getElementById('modal-video');
  const playBtn = document.getElementById('play-intro-btn');
  const aboutVideoPlaceholder = document.getElementById('about-video-placeholder');

  function openVideoModal(src) {
    if (modalVideo) { modalVideo.src = src; modalVideo.load(); }
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeVideoModal() {
    videoModal.classList.remove('active');
    if (modalVideo) { modalVideo.pause(); modalVideo.currentTime = 0; }
    document.body.style.overflow = '';
  }

  if (playBtn) playBtn.addEventListener('click', () => openVideoModal('assets/videos/intro-zh.mp4'));
  if (aboutVideoPlaceholder) aboutVideoPlaceholder.addEventListener('click', () => openVideoModal('assets/videos/intro-zh.mp4'));
  if (modalClose) modalClose.addEventListener('click', closeVideoModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeVideoModal);

  const tabs = document.querySelectorAll('.modal-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      openVideoModal(tab.getAttribute('data-video'));
    });
  });

  // ===== DETAIL MODAL =====
  const detailModal = document.getElementById('detail-modal');
  const detailBackdrop = document.getElementById('detail-backdrop');
  const detailClose = document.getElementById('detail-close');
  const detailBody = document.getElementById('detail-body');

  const detailData = {
    exp1: {
      category: 'teaching', period: '2026.03 — Present', location: 'Sichuan',
      title: 'Sichuan University of Arts and Culture | Full-time Chinese Teacher',
      org: '24 teaching hours/week',
      desc: 'Delivering weekly Chinese classes with a 100% positive evaluation rate. Built a systematic HSK exam prep curriculum combining AI tools with gamified classroom design. Guided students in creating Chinese cultural short videos.',
      role: '',
      achievement: 'Successfully guided students to win China Daily overseas content creation awards.',
      media: ['classroom photos', 'student short videos', 'HSK prep framework']
    },
    exp2: {
      category: 'teaching', period: '2024.08 — 2026.03', location: 'Online',
      title: 'LingoAce | Online Children\'s Chinese Instructor',
      org: 'For overseas Chinese children aged 3-16',
      desc: 'Delivered immersive and fun Chinese classes for overseas Chinese children aged 3-16. Independently designed courseware, classroom interactions, and post-class progress tracking.',
      role: '',
      achievement: 'Achieved 98% student retention rate with highly interactive classroom model.',
      media: ['LingoAce class screenshots', 'courseware samples', 'interactive games']
    },
    exp3: {
      category: 'teaching', period: '2023.08 — 2025.08', location: 'Suriname',
      title: 'Confucius Institute, University of Suriname | International Chinese Teacher',
      org: 'XXth Confucius Institute Volunteer',
      desc: 'Taught regular Chinese courses and HSK exam preparation at local secondary schools. Coordinated the Chinese Bridge competition, planned and executed cross-cultural exchange events. Participated in localized Chinese teaching resource development.',
      role: '',
      achievement: '1000+ teaching hours; coached 5 students to Chinese Bridge championship; organized 15+ cultural events; featured on CCTV for hanfu performance; awarded Outstanding Volunteer Teacher.',
      media: ['CI photos', 'Chinese Bridge competition', 'hanfu performance CCTV', 'cultural events']
    },
    exp4: {
      category: 'teaching', period: '2019.05 — 2019.10', location: 'Thailand',
      title: 'Thai-Chinese Exchange Program | Volunteer Teacher',
      org: 'Basic Chinese for Thai primary & secondary students',
      desc: 'Taught basic Chinese at Thai schools and designed traditional culture experience classes to enrich overseas Chinese teaching formats.',
      role: '',
      achievement: '500+ teaching hours, awarded Outstanding Individual.',
      media: ['Thailand classroom photos', 'culture classes', 'volunteer records']
    },
    exp5: {
      category: 'teaching', period: '2020.07 — 2020.08', location: 'Chengdu',
      title: 'Wuhou District Dream Summer Camp | Volunteer Teaching Lead',
      org: 'Children\'s public welfare Chinese program',
      desc: 'Managed volunteer team daily operations, delivered children\'s Chinese enlightenment classes, and handled activity photo/video shooting, editing and promotion.',
      role: '',
      achievement: 'Completed full camp teaching and promotional material production.',
      media: ['camp photos', 'promotional materials', 'video clips']
    },
    proj1: {
      category: 'project', title: 'Chinese Bridge Championship Coordination',
      subtitle: 'Chinese Bridge Championship',
      desc: 'Fully managed the Suriname regional Chinese Bridge competition, including candidate selection, intensive training, venue setup, and cultural performance coordination.',
      role: 'Project Lead, Competition Coach',
      achievement: 'Coached 5 students to champion and runner-up; original hanfu performance featured on CCTV.',
      media: ['competition photos', 'training behind-the-scenes', 'CCTV hanfu report']
    },
    proj2: {
      category: 'project', title: 'HSK Short Video Creation Guidance',
      subtitle: 'HSK Short Video Creation',
      desc: 'Guided overseas students from multiple countries in HSK-themed short video creation, standardizing content, filming, and editing standards.',
      role: 'Guidance Teacher',
      achievement: 'Produced multiple high-quality entries, awarded Excellent Guidance Teacher.',
      media: ['student video screenshots', 'creation guide', 'excellent works']
    },
    proj3: {
      category: 'project', title: 'Online Chinese Course R&D for Overseas Youth',
      subtitle: 'Online Course R&D',
      desc: 'Developed layered, gamified online Chinese courseware tailored for overseas Chinese youth aged 3-16.',
      role: 'Core Developer',
      achievement: 'Independently completed full sets of interactive teaching materials.',
      media: ['courseware samples', 'interactive materials', 'gamified classroom']
    },
    proj4: {
      category: 'project', title: 'Sino-Foreign Cultural Media Overseas Communication',
      subtitle: '#ChineseDream Campaign',
      desc: 'Participated in the #ChineseDream international Chinese overseas communication campaign, producing short videos and graphics to share Chinese culture globally.',
      role: 'Content Creator, Visual Lead',
      achievement: 'Produced multiple award-winning media works.',
      media: ['#ChineseDream screenshots', 'communication data', 'awarded works']
    },
    cert1: {
      category: 'certificate', title: 'Suriname Confucius Institute<br>Outstanding Volunteer Teacher',
      subtitle: 'Outstanding Volunteer Teacher',
      desc: 'Awarded for outstanding teaching performance and significant cross-cultural exchange contributions during tenure as an international Chinese volunteer teacher at the Suriname Confucius Institute.',
      role: '',
      achievement: '1000+ teaching hours, coached students to Chinese Bridge championships.',
      media: ['certificate scan']
    },
    cert2: {
      category: 'certificate', title: 'Chinese Bridge Regional<br>Champion & Runner-Up Coach',
      subtitle: 'Chinese Bridge Competition Coach',
      desc: 'As project lead and competition coach for the Suriname regional Chinese Bridge competition, fully managed candidate selection, training, and stage choreography.',
      role: '',
      achievement: 'Coached 5 students to regional championships.',
      media: ['competition photos', 'winner group photo']
    },
    cert3: {
      category: 'certificate', title: 'International Chinese Teacher<br>Certificate (CTCSOL)',
      subtitle: 'CTCSOL Certificate',
      desc: 'Holds the CTCSOL certificate issued by Hanban/CCFLS, demonstrating professional qualification for international Chinese teaching.',
      role: '',
      achievement: "Master's degree in Teaching Chinese to Speakers of Other Languages.",
      media: ['certificate scan']
    },
    cert4: {
      category: 'certificate', title: 'Thai-Chinese Exchange Program<br>Outstanding Individual',
      subtitle: 'Outstanding Individual Award',
      desc: 'Recognized for outstanding teaching performance and cross-cultural exchange contributions during the Thai-Chinese exchange volunteer program.',
      role: '',
      achievement: '500+ teaching hours.',
      media: ['Thailand photos', 'certificate']
    },
    cert5: {
      category: 'certificate', title: 'China Daily Overseas<br>Quality Content Creation Award',
      subtitle: 'China Daily Content Award',
      desc: 'Guided students to create Chinese cultural short videos that won the China Daily overseas quality content creation award.',
      role: '',
      achievement: 'Successfully guided students to win the award.',
      media: ['student award screenshots', 'China Daily report']
    },
    cert6: {
      category: 'certificate', title: 'HSK/iHSK<br>Teacher Certificate',
      subtitle: 'HSK Teacher Certificate',
      desc: 'Certified HSK/iHSK teacher qualified to conduct independent HSK exam preparation courses.',
      role: '',
      achievement: 'Capable of independent HSK exam preparation teaching.',
      media: ['certificate scan']
    }
  };

  function openDetailModal(key) {
    const data = detailData[key];
    if (!data) return;

    let html = '';
    if (data.category === 'teaching') {
      html += `<div class="detail-category">Teaching Experience</div>`;
    } else if (data.category === 'project') {
      html += `<div class="detail-category">Key Project</div>`;
    } else if (data.category === 'certificate') {
      html += `<div class="detail-category">Certificate</div>`;
    }
    html += `<h3 class="detail-title">${data.title}</h3>`;
    if (data.subtitle) {
      html += `<div class="detail-subtitle">${data.subtitle}</div>`;
    }
    html += `<div class="detail-line"></div>`;
    html += `<p class="detail-desc">${data.desc}</p>`;
    if (data.role) {
      html += `<p style="font-size:0.82rem;color:var(--text-dim);margin-bottom:1rem;"><strong>Role:</strong> ${data.role}</p>`;
    }
    if (data.achievement) {
      html += `<div class="detail-achievement"><span class="achieve-icon">✦</span><span>${data.achievement}</span></div>`;
    }
    if (data.media && data.media.length) {
      html += `<div class="detail-media"><div class="detail-media-title">Related Materials</div>`;
      data.media.forEach(m => {
        html += `<div class="detail-media-placeholder">${m}</div>`;
      });
      html += `</div>`;
    }

    detailBody.innerHTML = html;
    detailModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDetailModal() {
    detailModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Timeline card clicks
  document.querySelectorAll('.timeline-card[data-exp]').forEach(card => {
    card.addEventListener('click', () => openDetailModal(card.dataset.exp));
  });

  // Project card clicks
  document.querySelectorAll('.project-card[data-detail]').forEach(card => {
    card.addEventListener('click', () => openDetailModal(card.dataset.detail));
  });

  // Certificate card clicks
  document.querySelectorAll('.cert-card[data-cert]').forEach(card => {
    card.addEventListener('click', () => openDetailModal(card.dataset.cert));
  });

  // Close modals
  if (detailClose) detailClose.addEventListener('click', closeDetailModal);
  if (detailBackdrop) detailBackdrop.addEventListener('click', closeDetailModal);

  // ESC key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeVideoModal();
      closeDetailModal();
    }
  });

})();
