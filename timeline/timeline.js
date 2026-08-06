const milestoneData = [
  {
    year: 2024,
    date: "Jan 14, 2024",
    side: "left",
    category: "Systems",
    status: "Complete",
    scene: { bg: "https://images6.alphacoders.com/559/thumb-1920-559687.jpg", mid: "https://images6.alphacoders.com/559/thumb-1920-559687.jpg", tint: "rgba(4, 6, 8, 0.20)" },
    progress: { design: 100, implementation: 100, docs: 90, polish: 70 },
    title: "Bootstrap Entry Point",
    summary: "Stable loading path for core services and menu flow.",
    description: "Created the startup sequence so foundational systems initialize first, then the menu and gameplay layers can load without fragile scene-order hacks.",
    stats: [["1", "Entry flow"], ["3", "Core managers"], ["0", "Extra scenes"], ["Stable", "Runtime path"]],
    dependencies: ["Scene Order", "Shared Services", "Runtime Init"],
    lessons: ["Keep startup logic explicit.", "Fast menu access matters.", "The bootstrap should stay boring."],
    media: [
      { label: "Background pass", image: "https://images6.alphacoders.com/559/thumb-1920-559687.jpg" },
      { label: "Startup screen", image: "https://images6.alphacoders.com/559/thumb-1920-559687.jpg" }
    ],
    tags: ["Systems", "Bootstrap", "Startup", "Architecture"]
  },
  {
    year: 2024,
    date: "May 08, 2024",
    side: "right",
    category: "Systems",
    status: "Complete",
    scene: { bg: "https://images6.alphacoders.com/559/thumb-1920-559687.jpg", mid: "https://images6.alphacoders.com/559/thumb-1920-559687.jpg", tint: "rgba(4, 6, 8, 0.18)" },
    progress: { design: 100, implementation: 95, docs: 80, polish: 75 },
    title: "Registry Architecture",
    summary: "Interface-based asset discovery without hardwired references.",
    description: "Separated registry concerns from bootstrap loading so game content can find what it needs through clean interfaces instead of brittle manual links.",
    stats: [["Interfaces", "Access model"], ["1", "Registry family"], ["Async", "Loading"], ["Mod-ready", "Long-term goal"]],
    dependencies: ["Bootstrap", "Interfaces", "Asset Data"],
    lessons: ["Registries are for discovery.", "Keep APIs small.", "Structure now saves pain later."],
    media: [
      { label: "Registry map", image: "https://images6.alphacoders.com/559/thumb-1920-559687.jpg" },
      { label: "Inspector capture", image: "https://images6.alphacoders.com/559/thumb-1920-559687.jpg" }
    ],
    tags: ["Systems", "Registry", "Assets", "Architecture"]
  },
  {
    year: 2025,
    date: "Feb 21, 2025",
    side: "left",
    category: "Animation",
    status: "In Progress",
    scene: { bg: "https://images6.alphacoders.com/559/thumb-1920-559687.jpg", mid: "https://images6.alphacoders.com/559/thumb-1920-559687.jpg", tint: "rgba(4, 6, 8, 0.22)" },
    progress: { blocking: 65, graph: 58, events: 48, polish: 32 },
    title: "Animation Pipeline",
    summary: "Animator graphs and gameplay hooks in a single flow.",
    description: "Animation state changes drive gameplay-facing moments like audio, camera feedback, and combat timing without turning the animator into the entire system.",
    stats: [["Blend Trees", "Locomotion"], ["Events", "Runtime hooks"], ["50+", "States"], ["WIP", "Expanding"]],
    dependencies: ["Character Controller", "Combat", "Audio", "Camera"],
    lessons: ["Animation should inform systems.", "Events are for key moments.", "Readable graphs are easier to debug."],
    media: [
      { label: "Animator graph", image: "https://images6.alphacoders.com/559/thumb-1920-559687.jpg" },
      { label: "Attack preview", image: "https://images6.alphacoders.com/559/thumb-1920-559687.jpg" }
    ],
    tags: ["Animation", "Combat", "Events", "Characters"]
  },
  {
    year: 2026,
    date: "Jul 11, 2026",
    side: "right",
    category: "Systems",
    status: "Complete",
    scene: { bg: "https://images6.alphacoders.com/559/thumb-1920-559687.jpg", mid: "https://images6.alphacoders.com/559/thumb-1920-559687.jpg", tint: "rgba(4, 6, 8, 0.16)" },
    progress: { design: 100, implementation: 100, docs: 88, polish: 78 },
    title: "Weather Framework",
    summary: "Weighted weather selection with biome support and overrides.",
    description: "A weather service that handles manual overrides, biome-driven changes, and safe fallback transitions while keeping the experience stable and readable.",
    stats: [["Biomes", "Manual control"], ["Weights", "Selection"], ["HDRP", "Visual pass"], ["Fallback", "Safe transitions"]],
    dependencies: ["Bootstrap", "Weather Biome", "Visual State", "Audio", "Particles"],
    lessons: ["Fallback rules matter.", "One owner for weather state.", "Overrides must survive missing links."],
    media: [
      { label: "Weather card", image: "https://images6.alphacoders.com/559/thumb-1920-559687.jpg" },
      { label: "Storm frame", image: "https://images6.alphacoders.com/559/thumb-1920-559687.jpg" }
    ],
    tags: ["Systems", "Weather", "HDRP", "Biomes"]
  },
  {
    year: 2026,
    date: "Jul 20, 2026",
    side: "left",
    category: "Art",
    status: "Complete",
    scene: { bg: "https://images6.alphacoders.com/559/thumb-1920-559687.jpg", mid: "https://images6.alphacoders.com/559/thumb-1920-559687.jpg", tint: "rgba(4, 6, 8, 0.16)" },
    progress: { concept: 100, modeling: 92, materials: 88, integration: 80 },
    title: "Art + Systems Showcase",
    summary: "Asset pages that describe technical context, not only visuals.",
    description: "Structured the presentation so art and animation can sit beside systems documentation without feeling like an unrelated gallery section.",
    stats: [["Pipeline", "Asset story"], ["Viewer", "Interactive"], ["Linked", "To systems"], ["Portfolio", "Presentation layer"]],
    dependencies: ["Asset Explorer", "3D Viewer", "Timeline", "Docs"],
    lessons: ["Context makes art stronger.", "A single asset page can tell a story.", "Structure affects perception."],
    media: [
      { label: "Model viewer", image: "https://images6.alphacoders.com/559/thumb-1920-559687.jpg" },
      { label: "Texture breakdown", image: "https://images6.alphacoders.com/559/thumb-1920-559687.jpg" }
    ],
    tags: ["Art", "Models", "Materials", "Presentation"]
  },
  {
    year: 2026,
    date: "Jul 29, 2026",
    side: "right",
    category: "Portfolio",
    status: "Planned",
    scene: { bg: "https://images6.alphacoders.com/559/thumb-1920-559687.jpg", mid: "https://images6.alphacoders.com/559/thumb-1920-559687.jpg", tint: "rgba(4, 6, 8, 0.14)" },
    progress: { layout: 72, interactions: 64, polish: 40, content: 28 },
    title: "Timeline Prototype",
    summary: "The page you are looking at now.",
    description: "A compact timeline designed to grow into a full development archive with layered scenes, technical notes, and a stronger visual identity.",
    stats: [["Drag", "Enabled"], ["Expand", "Milestones"], ["Years", "Auto-nav"], ["Data", "Reusable"]],
    dependencies: ["HTML", "CSS", "JavaScript", "Milestone Array"],
    lessons: ["One data structure scales better.", "The page should feel like a tool.", "Keep version one clean."],
    media: [
      { label: "Prototype layout", image: "https://images6.alphacoders.com/559/thumb-1920-559687.jpg" },
      { label: "Future mockup", image: "https://images6.alphacoders.com/559/thumb-1920-559687.jpg" }
    ],
    tags: ["Portfolio", "Timeline", "UI", "Prototype"]
  }
];

const scrollArea = document.getElementById('scrollArea');
const yearNav = document.getElementById('yearNav');
const minimap = document.getElementById('minimap');
const timeline = document.getElementById('timeline');
const canvas = document.getElementById('ashCanvas');
const ctx = canvas.getContext('2d');
const sceneBg = document.getElementById('sceneBg');
const sceneMid = document.getElementById('sceneMid');
const sceneFog = document.getElementById('sceneFog');
const activeYearStats = document.getElementById('activeYearStats');
const activeYearBars = document.getElementById('activeYearBars');
const categoryChips = document.getElementById('categoryChips');
const searchBox = document.getElementById('searchBox');
const toggleProgress = document.getElementById('toggleProgress');
const expandAllBtn = document.getElementById('expandAll');
const collapseAllBtn = document.getElementById('collapseAll');
const matchCounter = document.getElementById('matchCounter');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileBackdrop = document.getElementById('mobileBackdrop');

const years = [...new Set(milestoneData.map(m => m.year))];
const categories = [...new Set(milestoneData.map(m => m.category))];

const state = {
  activeYear: years[years.length - 1],
  activeTags: new Set(categories),
  search: '',
  progressMode: false,
  expandedAll: false,
  openMilestoneId: null,
  drawerOpen: false
};

function countByYear(year) {
  return milestoneData.filter(m => m.year === year).length;
}

function statusClass(status) {
  return status === 'Complete' ? 'complete' : status === 'In Progress' ? 'progress' : 'planned';
}

function yearStats(year) {
  const items = milestoneData.filter(m => m.year === year);
  const categoryCounts = categories.reduce((acc, c) => {
    acc[c] = items.filter(m => m.category === c).length;
    return acc;
  }, {});
  return { items, categoryCounts };
}

function renderYears() {
  yearNav.innerHTML = years.map(year => `
    <button class="year-btn" data-year="${year}">
      <span class="year">${year}</span>
      <span class="count">${countByYear(year)} milestone${countByYear(year) === 1 ? '' : 's'}</span>
    </button>
  `).join('');

  yearNav.addEventListener('click', (e) => {
    const btn = e.target.closest('.year-btn');
    if (!btn) return;
    state.activeYear = Number(btn.dataset.year);
    syncYearUI();
    const target = document.querySelector(`[data-year-group="${btn.dataset.year}"]`);
    if (target) scrollArea.scrollTo({ top: target.offsetTop - 8, behavior: 'smooth' });
    closeDrawerIfMobile();
  });
}

function renderCategoryChips() {
  categoryChips.innerHTML = categories.map(category => `
    <button class="chip active" data-category="${category}" type="button">
      <span class="dot"></span> ${category}
    </button>
  `).join('');

  categoryChips.addEventListener('click', (e) => {
    const chip = e.target.closest('[data-category]');
    if (!chip) return;
    const category = chip.dataset.category;
    if (state.activeTags.has(category)) state.activeTags.delete(category);
    else state.activeTags.add(category);
    chip.classList.toggle('active');
    applyFilters();
  });
}

function renderMinimap() {
  minimap.innerHTML = years.map(year => `
    <div class="mini-year" data-mini-year="${year}">
      <div class="label">${year}</div>
      <div class="track" title="Jump to ${year}">
        ${Array.from({ length: Math.max(1, countByYear(year)) }).map((_, i) => {
          const left = ((i + 1) / (Math.max(1, countByYear(year)) + 1)) * 100;
          return `<span class="tick" data-year-jump="${year}" style="left:${left}%"></span>`;
        }).join('')}
      </div>
    </div>
  `).join('');

  minimap.addEventListener('click', (e) => {
    const target = e.target.closest('[data-year-jump]');
    if (!target) return;
    state.activeYear = Number(target.dataset.yearJump);
    syncYearUI();
    const section = document.querySelector(`[data-year-group="${target.dataset.yearJump}"]`);
    if (section) scrollArea.scrollTo({ top: section.offsetTop - 8, behavior: 'smooth' });
    closeDrawerIfMobile();
  });
}

function progressHtml(progress) {
  return Object.entries(progress).map(([name, value]) => `
    <div class="progress-item">
      <div class="row"><span>${name}</span><span>${value}%</span></div>
      <div class="bar"><span style="--value:${value}%"></span></div>
    </div>
  `).join('');
}

function renderTimeline() {
  const grouped = years.map(year => ({ year, items: milestoneData.filter(m => m.year === year) }));

  timeline.innerHTML = grouped.map(group => `
    <section class="year-group" data-year-group="${group.year}">
      <div class="year-marker">${group.year}</div>
      ${group.items.map((m, idx) => `
        <article class="milestone ${m.side}" data-id="${m.year}-${idx}-${m.title.replace(/\s+/g, '-').toLowerCase()}" data-year="${m.year}" data-category="${m.category}" data-tags="${m.tags.join(',').toLowerCase()}" data-search="${[m.title, m.summary, m.description, m.dependencies.join(' '), m.lessons.join(' '), m.tags.join(' ')].join(' ').toLowerCase()}" data-bg="${m.scene.bg}" data-mid="${m.scene.mid}" data-tint="${m.scene.tint}">
          <div class="spacer"></div>
          <div class="card">
            <button class="card-head" aria-expanded="false">
              <div class="meta-row">
                <span class="date">${m.date}</span>
                <span class="status ${statusClass(m.status)}">${m.status}</span>
              </div>
              <div class="title">
                <h3>${m.title}</h3>
                <span class="chev">⌄</span>
              </div>
              <p class="summary">${m.summary}</p>
              <div class="tag-row">
                <span class="tag data-tag" data-filter-tag="${m.category}">${m.category}</span>
                <span class="tag data-tag">${Object.keys(m.progress).length} metrics</span>
                ${m.tags.slice(0, 2).map(t => `<span class="tag data-tag" data-filter-tag="${t}">${t}</span>`).join('')}
              </div>
            </button>

            <div class="expand">
              <div class="expand-inner">
                <div class="panel">
                  <h4>Overview</h4>
                  <p>${m.description}</p>
                </div>

                <div class="mini-stat">
                  ${m.stats.map(([value, label]) => `
                    <div class="stat">
                      <strong>${value}</strong>
                      <span>${label}</span>
                    </div>
                  `).join('')}
                </div>

                <div class="grid-2">
                  <div class="panel">
                    <h4>Progress</h4>
                    <div class="progress-list">${progressHtml(m.progress)}</div>
                  </div>
                  <div class="panel">
                    <h4>Dependencies</h4>
                    <div class="tag-row">${m.dependencies.map(d => `<span class="tag data-tag" data-filter-tag="${d}">${d}</span>`).join('')}</div>
                  </div>
                </div>

                <div class="grid-2">
                  <div class="panel">
                    <h4>Lessons learned</h4>
                    <ul>${m.lessons.map(x => `<li>${x}</li>`).join('')}</ul>
                  </div>
                  <div class="panel">
                    <h4>Layered media</h4>
                    <div class="media-grid">
                      ${m.media.map(item => `<div class="media" data-image="${item.image}" data-caption="${m.title} — ${item.label}">${item.label}<br><small>click to open</small></div>`).join('')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="spacer"></div>
        </article>
      `).join('')}
    </section>
  `).join('');
}

function setSceneFromMilestone(node) {
  if (!node) return;
  sceneBg.style.backgroundImage = `linear-gradient(180deg, rgba(4, 5, 7, 0.06), rgba(4, 5, 7, 0.64) 52%, rgba(4, 5, 7, 0.90)), url('${node.dataset.bg}')`;
  sceneMid.style.backgroundImage = `linear-gradient(180deg, rgba(4, 5, 7, 0.0), rgba(4, 5, 7, 0.18) 40%, rgba(4, 5, 7, 0.82)), url('${node.dataset.mid}')`;
  document.documentElement.style.setProperty('--scene-tint', node.dataset.tint || 'rgba(4, 6, 8, 0.22)');
}

function openMilestone(milestone) {
  document.querySelectorAll('.milestone.open').forEach(node => {
    node.classList.remove('open');
    node.querySelector('.card-head').setAttribute('aria-expanded', 'false');
  });
  milestone.classList.add('open');
  milestone.querySelector('.card-head').setAttribute('aria-expanded', 'true');
  state.openMilestoneId = milestone.dataset.id;
  setSceneFromMilestone(milestone);
}

function setupAccordion() {
  document.addEventListener('click', (e) => {
    const head = e.target.closest('.card-head');
    if (head) {
      const milestone = head.closest('.milestone');
      const isOpen = milestone.classList.contains('open');
      if (isOpen) {
        milestone.classList.remove('open');
        head.setAttribute('aria-expanded', 'false');
        state.openMilestoneId = null;
      } else {
        openMilestone(milestone);
      }
      closeDrawerIfMobile();
      return;
    }

    const filterTag = e.target.closest('[data-filter-tag]');
    if (filterTag) {
      const tag = filterTag.dataset.filterTag;
      if (state.activeTags.has(tag)) state.activeTags.delete(tag);
      else state.activeTags.add(tag);
      syncCategoryChips();
      applyFilters();
      closeDrawerIfMobile();
      return;
    }

    const media = e.target.closest('[data-image]');
    if (media) {
      openLightbox(media.dataset.image, media.dataset.caption);
      closeDrawerIfMobile();
    }
  });
}

function setupDragScroll() {
  let down = false;
  let startY = 0;
  let startScroll = 0;

  const begin = (y) => {
    down = true;
    startY = y;
    startScroll = scrollArea.scrollTop;
    scrollArea.classList.add('dragging');
  };
  const move = (y) => {
    if (!down) return;
    scrollArea.scrollTop = startScroll - (y - startY);
  };
  const end = () => {
    down = false;
    scrollArea.classList.remove('dragging');
  };

  scrollArea.addEventListener('mousedown', e => {
    if (e.target.closest('button, a, input, textarea, select, .media')) return;
    begin(e.clientY);
  });
  window.addEventListener('mousemove', e => move(e.clientY));
  window.addEventListener('mouseup', end);
  scrollArea.addEventListener('mouseleave', end);
  scrollArea.addEventListener('touchstart', e => begin(e.touches[0].clientY), { passive: true });
  scrollArea.addEventListener('touchmove', e => move(e.touches[0].clientY), { passive: true });
  window.addEventListener('touchend', end, { passive: true });
}

function syncYearUI() {
  document.querySelectorAll('.year-btn').forEach(btn => btn.classList.toggle('active', Number(btn.dataset.year) === state.activeYear));
  document.querySelectorAll('.mini-year').forEach(m => m.classList.toggle('active', Number(m.dataset.miniYear) === state.activeYear));
  const stats = yearStats(state.activeYear);
  const total = stats.items.length;
  const totalLabel = total === 1 ? 'milestone' : 'milestones';
  activeYearStats.innerHTML = `
    <strong>${state.activeYear}</strong>
    <div>${total} ${totalLabel}</div>
  `;
  activeYearBars.innerHTML = categories.map(category => {
    const value = total ? Math.round((stats.categoryCounts[category] / total) * 100) : 0;
    return `
      <div class="mini-bar">
        <div class="row"><span>${category}</span><span>${value}%</span></div>
        <div class="mini-track"><div class="mini-fill" style="--value:${value}%"></div></div>
      </div>
    `;
  }).join('');
}

function syncCategoryChips() {
  document.querySelectorAll('[data-category]').forEach(chip => {
    chip.classList.toggle('active', state.activeTags.has(chip.dataset.category));
  });
  document.querySelectorAll('[data-filter-tag]').forEach(tag => {
    tag.classList.toggle('active', state.activeTags.has(tag.dataset.filterTag));
  });
}

function applyFilters() {
  const q = state.search.trim().toLowerCase();
  let visibleCount = 0;

  document.querySelectorAll('.milestone').forEach(m => {
    const category = m.dataset.category;
    const tags = (m.dataset.tags || '').split(',').map(x => x.trim()).filter(Boolean);
    const haystack = m.dataset.search || '';
    const matchesTag = state.activeTags.size === 0 ? true : (state.activeTags.has(category) || tags.some(t => state.activeTags.has(t)));
    const matchesSearch = !q || haystack.includes(q);
    const visible = matchesTag && matchesSearch;

    m.classList.toggle('hidden', !visible);
    m.classList.toggle('filtered-out', !visible);
    if (visible) visibleCount += 1;
  });

  matchCounter.innerHTML = `<span class="dot"></span> ${visibleCount} milestone${visibleCount === 1 ? '' : 's'} visible`;
  syncCategoryChips();
  syncYearUI();
  if (!visibleCount) {
    matchCounter.innerHTML = `<span class="dot"></span> no milestones matched`;
  }
}

function setupSearch() {
  searchBox.addEventListener('input', () => {
    state.search = searchBox.value;
    applyFilters();
  });
}

function setupButtons() {
  toggleProgress.addEventListener('click', () => {
    state.progressMode = !state.progressMode;
    toggleProgress.classList.toggle('active', state.progressMode);
  });

  expandAllBtn.addEventListener('click', () => {
    state.expandedAll = true;
    document.querySelectorAll('.milestone:not(.hidden)').forEach(m => {
      m.classList.add('open');
      m.querySelector('.card-head').setAttribute('aria-expanded', 'true');
    });
    const firstVisible = document.querySelector('.milestone:not(.hidden)');
    if (firstVisible) setSceneFromMilestone(firstVisible);
  });

  collapseAllBtn.addEventListener('click', () => {
    state.expandedAll = false;
    document.querySelectorAll('.milestone.open').forEach(m => {
      m.classList.remove('open');
      m.querySelector('.card-head').setAttribute('aria-expanded', 'false');
    });
    state.openMilestoneId = null;
  });
}

function setupActiveYearObserver() {
  const buttons = [...document.querySelectorAll('.year-btn')];
  const groups = [...document.querySelectorAll('.year-group')];

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    const year = Number(visible.target.dataset.yearGroup);
    state.activeYear = year;
    syncYearUI();

    const firstMilestone = visible.target.querySelector('.milestone:not(.hidden)');
    if (firstMilestone) setSceneFromMilestone(firstMilestone);
  }, { root: scrollArea, threshold: [0.12, 0.24, 0.40, 0.58], rootMargin: '-18% 0px -50% 0px' });

  groups.forEach(g => observer.observe(g));
  buttons.forEach(btn => btn.classList.toggle('active', Number(btn.dataset.year) === state.activeYear));
}

function openLightbox(image, caption) {
  lightboxImage.style.backgroundImage = `url('${image}')`;
  lightboxCaption.textContent = caption;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
}

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox || e.target === lightboxClose) closeLightbox();
});
lightboxClose.addEventListener('click', closeLightbox);
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
    closeDrawer();
  }
});

function resizeCanvas() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.floor(window.innerWidth * dpr);
  canvas.height = Math.floor(window.innerHeight * dpr);
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

const particles = Array.from({ length: 140 }, () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  r: Math.random() * 1.6 + 0.25,
  v: Math.random() * 0.34 + 0.08,
  drift: (Math.random() - 0.5) * 0.28,
  alpha: Math.random() * 0.42 + 0.08,
  phase: Math.random() * Math.PI * 2
}));

function drawAsh() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  const t = performance.now() * 0.0005;
  for (const p of particles) {
    p.y += p.v;
    p.x += p.drift + Math.sin(t + p.phase) * 0.18;
    if (p.y > window.innerHeight + 10) {
      p.y = -10;
      p.x = Math.random() * window.innerWidth;
    }
    if (p.x > window.innerWidth + 10) p.x = -10;
    if (p.x < -10) p.x = window.innerWidth + 10;
    ctx.beginPath();
    ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  }
  requestAnimationFrame(drawAsh);
}

function setupParallax() {
  let ticking = false;
  const update = () => {
    const scrollTop = scrollArea.scrollTop;
    const max = Math.max(1, scrollArea.scrollHeight - scrollArea.clientHeight);
    const progress = scrollTop / max;
    const y1 = progress * -28;
    const y2 = progress * -52;
    const y3 = progress * -16;
    sceneBg.style.transform = `scale(1.06) translate3d(0, ${y1}px, 0)`;
    sceneMid.style.transform = `scale(1.03) translate3d(0, ${y2}px, 0)`;
    sceneFog.style.transform = `scale(1.02) translate3d(0, ${y3}px, 0)`;
    ticking = false;
  };
  scrollArea.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
  update();
}

function openDrawer() {
  state.drawerOpen = true;
  document.body.classList.add('drawer-open');
  mobileMenuToggle.setAttribute('aria-expanded', 'true');
}

function closeDrawer() {
  state.drawerOpen = false;
  document.body.classList.remove('drawer-open');
  mobileMenuToggle.setAttribute('aria-expanded', 'false');
}

function toggleDrawer() {
  if (state.drawerOpen) closeDrawer();
  else openDrawer();
}

function closeDrawerIfMobile() {
  if (window.matchMedia('(max-width: 900px)').matches) closeDrawer();
}

mobileMenuToggle.addEventListener('click', toggleDrawer);
mobileBackdrop.addEventListener('click', closeDrawer);

window.addEventListener('resize', () => {
  resizeCanvas();
  if (!window.matchMedia('(max-width: 900px)').matches) closeDrawer();
});

renderYears();
renderMinimap();
renderCategoryChips();
renderTimeline();
setupAccordion();
setupDragScroll();
setupSearch();
setupButtons();
setupActiveYearObserver();
setupParallax();
resizeCanvas();
drawAsh();

syncYearUI();
syncCategoryChips();
applyFilters();

const firstVisible = document.querySelector('.milestone:not(.hidden) .card-head');
if (firstVisible) firstVisible.click();

function closeDrawer() {
  state.drawerOpen = false;
  document.body.classList.remove('drawer-open');
  mobileMenuToggle.setAttribute('aria-expanded', 'false');
}
