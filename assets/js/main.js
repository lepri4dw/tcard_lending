/* ================================================================
   TalentCard Landing — JavaScript
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

  /* ──── 3. Navbar scroll effect ──── */
  const nav = document.getElementById('mainNav');
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ──── 4. Active nav-link highlighting ──── */
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

  /* ──── 5. Close mobile menu on link click ──── */
  const navCollapse = document.getElementById('navMenu');
  if (navCollapse) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse) bsCollapse.hide();
      });
    });
  }

  /* ──── 6. "How it works" tabs ──── */
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

  /* ──── 7. Animated number counters ──── */
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

  /* ──── 8. Smooth scroll (fallback for older browsers) ──── */
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

  /* ──── 9. Parallax-lite for hero shapes ──── */
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

  /* ──── 10. Kartoteka cards stagger on scroll ──── */
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
