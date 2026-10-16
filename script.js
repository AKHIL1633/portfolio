// ---------- Data ----------
const SKILLS = [
  { cat: 'Frontend & Mobile', items: ['Next.js', 'React', 'React Native', 'TypeScript', 'Tailwind CSS'] },
  { cat: 'Backend & APIs', items: ['FastAPI', 'Node.js', 'Express', 'Python', 'REST'] },
  { cat: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'] },
  { cat: 'DevOps & Cloud', items: ['Docker', 'GitHub Actions', 'Vercel', 'Railway', 'AWS'] },
  { cat: 'AI, ML & CV', items: ['PyTorch', 'Hugging Face', 'LangChain', 'OpenCV', 'Gemini', 'GPT-4o'] },
];

const PROJECTS = [
  {
    name: 'Homeward Paws', badge: 'MERN',
    desc: 'Story-led pet-adoption platform — full MERN build with JWT cookie auth, role & ownership guards, image uploads, and a GSAP scroll narrative.',
    stack: ['React 19', 'Vite', 'Express', 'MongoDB', 'Docker'],
    repo: 'https://github.com/AKHIL1633/homeward-paws', live: null,
  },
  {
    name: 'PulseDesk', badge: 'AI Agent',
    desc: 'AI ticket-triage agent — mobile app + web dashboard + API, with an LLM classifying and drafting responses under human review.',
    stack: ['Express', 'Next.js', 'React Native', 'Gemini', 'Zod'],
    repo: 'https://github.com/AKHIL1633/pulsedesk', live: null,
  },
  {
    name: 'ZeroxAI Planner', badge: '~14K LOC',
    desc: 'Multi-LLM vision platform with two-pass extraction, LLM-as-corrector, and Domain-Driven Design for reliability at scale.',
    stack: ['Python', 'FastAPI', 'React 19', 'Gemini', 'GPT-4o', 'Groq'],
    repo: 'https://github.com/AKHIL1633/ZeroxAI-Planner', live: null,
  },
  {
    name: 'GrowEasy CSV Importer', badge: 'Live',
    desc: 'AI app that maps any CSV layout onto a fixed CRM schema, with production-grade retry and validation.',
    stack: ['Next.js', 'Express', 'TypeScript', 'Gemini'],
    repo: 'https://github.com/AKHIL1633/groweasy-csv-importer',
    live: 'https://groweasy-csv-importer-web-ten.vercel.app',
  },
  {
    name: 'License Plate Detection', badge: 'CV',
    desc: 'Custom-trained YOLOv8 + OCR pipeline with live WebRTC video detection of vehicle number plates.',
    stack: ['Python', 'YOLOv8', 'EasyOCR', 'Streamlit'],
    repo: 'https://github.com/AKHIL1633/Automatic_License_Plate_Detection', live: null,
  },
  {
    name: 'ResumeIQ', badge: 'SaaS',
    desc: 'Full-stack resume screening SaaS with JWT auth, a weighted scoring engine, and 36 passing tests.',
    stack: ['FastAPI', 'React', 'SQLAlchemy', 'Docker'],
    repo: 'https://github.com/AKHIL1633/resume-screener', live: null,
  },
  {
    name: 'TaskFlow', badge: 'Live',
    desc: 'Full-stack Kanban board with drag-and-drop, a REST API, and CI/CD on every push.',
    stack: ['Next.js 14', 'TypeScript', 'Jest', 'GitHub Actions'],
    repo: 'https://github.com/AKHIL1633/taskflow',
    live: 'https://taskflow-lake-nu.vercel.app',
  },
  {
    name: 'SpendWise', badge: 'Full-stack',
    desc: 'Personal finance tracker with JWT auth, a real database, and interactive spending charts.',
    stack: ['Next.js', 'NextAuth', 'Prisma', 'PostgreSQL', 'Recharts'],
    repo: 'https://github.com/AKHIL1633/spendwise', live: null,
  },
];

const PUBLICATIONS = [
  { title: 'IrregMamba: A Bidirectional Irregular-Time State Space Model for Explainable Alzheimer’s Disease Progression Prediction', venue: 'Elsevier — Biomedical Signal Processing & Control (Under Review)' },
  { title: 'Synthetic-Text Detection Using Deep Learning: An Ensemble Comparative Analysis', venue: 'IEEE INDICON 2025, Bangalore' },
  { title: 'Clinical-Guided Region-Level Graph Transformer for Alzheimer’s Disease Stage Classification', venue: 'ICTIS 2026, Springer, Thailand (Accepted)' },
  { title: 'A Novel Deep Learning Model for Brain Tumor Classification with Comparative Performance Evaluation', venue: 'ICA2S 2025, UAE (Accepted)' },
];

const ACHIEVEMENTS = [
  { icon: '🥇', title: 'Adobe India Hackathon 2025', note: 'Finalist' },
  { icon: '🎓', title: 'GATE (CS) 2024', note: 'Qualified' },
  { icon: '📊', title: 'Amazon ML Challenge 2024', note: 'Top 10%' },
  { icon: '🏅', title: 'TCS Star Performer', note: 'Award' },
];

const ROLES = ['Full-Stack Engineer', 'AI / LLM Engineer', 'Deep Learning Researcher', 'Problem Solver'];

// ---------- Render ----------
const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };

function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  SKILLS.forEach((s, i) => {
    const card = el('div', 'skill-cat reveal');
    card.style.transitionDelay = `${i * 60}ms`;
    card.appendChild(el('h3', null, s.cat));
    const tags = el('div', 'skill-tags');
    s.items.forEach((t) => tags.appendChild(el('span', null, t)));
    card.appendChild(tags);
    grid.appendChild(card);
  });
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  PROJECTS.forEach((p, i) => {
    const card = el('article', 'project reveal');
    card.style.transitionDelay = `${(i % 3) * 70}ms`;
    const top = el('div', 'project-top');
    top.appendChild(el('h3', null, p.name));
    top.appendChild(el('span', 'project-badge', p.badge));
    card.appendChild(top);
    card.appendChild(el('p', null, p.desc));
    const stack = el('div', 'project-stack');
    p.stack.forEach((t) => stack.appendChild(el('span', null, t)));
    card.appendChild(stack);
    const links = el('div', 'project-links');
    if (p.live) { const a = el('a', null, 'Live ↗'); a.href = p.live; a.target = '_blank'; a.rel = 'noopener'; links.appendChild(a); }
    const r = el('a', null, 'Code →'); r.href = p.repo; r.target = '_blank'; r.rel = 'noopener'; links.appendChild(r);
    card.appendChild(links);
    grid.appendChild(card);
  });
}

function renderPublications() {
  const list = document.getElementById('pubList');
  PUBLICATIONS.forEach((pub) => {
    const li = el('li', 'reveal');
    li.appendChild(el('span', 'pub-title', pub.title));
    li.appendChild(el('span', 'pub-venue', pub.venue));
    list.appendChild(li);
  });
}

function renderAchievements() {
  const grid = document.getElementById('achGrid');
  ACHIEVEMENTS.forEach((a, i) => {
    const card = el('div', 'ach reveal');
    card.style.transitionDelay = `${i * 60}ms`;
    card.appendChild(el('div', 'ach-icon', a.icon));
    card.appendChild(el('h3', null, a.title));
    card.appendChild(el('p', null, a.note));
    grid.appendChild(card);
  });
}

// ---------- Effects ----------
function typeRoles() {
  const target = document.getElementById('roleType');
  if (!target) return;
  let ri = 0, ci = 0, deleting = false;
  const tick = () => {
    const word = ROLES[ri];
    ci += deleting ? -1 : 1;
    target.innerHTML = word.slice(0, ci) + '<span class="cursor">|</span>';
    let delay = deleting ? 45 : 90;
    if (!deleting && ci === word.length) { delay = 1600; deleting = true; }
    else if (deleting && ci === 0) { deleting = false; ri = (ri + 1) % ROLES.length; delay = 350; }
    setTimeout(tick, delay);
  };
  tick();
}

function animateCounters() {
  document.querySelectorAll('.stat-num').forEach((n) => {
    const target = parseFloat(n.dataset.count);
    const decimals = parseInt(n.dataset.decimals || '0', 10);
    const suffix = n.dataset.suffix || '';
    const dur = 1400; const start = performance.now();
    const step = (t) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      n.textContent = (target * eased).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

function setupReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((n) => obs.observe(n));
}

function setupNav() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll); onScroll();
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('.nav-links a').forEach((a) =>
    a.addEventListener('click', () => nav.classList.remove('open')));
}

// ---------- Init ----------
document.addEventListener('DOMContentLoaded', () => {
  renderSkills(); renderProjects(); renderPublications(); renderAchievements();
  typeRoles(); setupNav();
  // counters run once the hero stats are visible
  const statWrap = document.querySelector('.hero-stats');
  const statObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { animateCounters(); statObs.disconnect(); } });
  }, { threshold: 0.4 });
  if (statWrap) statObs.observe(statWrap);
  setupReveal();
  document.getElementById('year').textContent = new Date().getFullYear();
});
