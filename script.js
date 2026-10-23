// ---------- Data ----------
const SKILLS = [
  { cat: 'Async & Task Queues', items: ['Celery', 'Redis', 'Background workers', 'Task chaining', 'BullMQ'] },
  { cat: 'Backend & APIs', items: ['Python', 'FastAPI', 'Django REST', 'Node.js', 'Express', '.NET Core', 'REST', 'JWT'] },
  { cat: 'Databases', items: ['PostgreSQL', 'SQL Server', 'MongoDB', 'Redis', 'SQLAlchemy', 'Alembic', 'Prisma'] },
  { cat: 'DevOps & Cloud', items: ['Docker', 'Kubernetes', 'AWS (EC2, EKS)', 'Terraform', 'GitHub Actions'] },
  { cat: 'AI & LLM', items: ['LangChain', 'LangGraph', 'PyTorch', 'Hugging Face', 'OpenAI', 'Gemini'] },
  { cat: 'Frontend & Mobile', items: ['Next.js', 'React', 'React Native', 'TypeScript', 'Tailwind CSS'] },
];

const EXPERIENCE = [
  {
    company: 'Siemens Technology', role: 'Software Development Intern · Industry 4.0', dates: 'Sep 2025 – Feb 2026',
    points: [
      'Developed Python backend services and REST APIs for Industry 4.0 applications in the R&D team.',
      'Built asynchronous and scheduled background jobs that run long-running processing outside the API request cycle.',
    ],
  },
  {
    company: 'Tata Consultancy Services', role: 'Associate Software Engineer · Hyderabad', dates: 'Jan 2021 – 2022 · 1.5 yrs',
    points: [
      'Developed REST APIs and data access layers with .NET Core Web API, Entity Framework and SQL Server.',
      'Built the backend of a self-service Talent Acquisition portal (Node.js, MongoDB).',
      'Built dashboards monitoring backup and storage jobs across servers; received the TCS Star Performer Award.',
    ],
  },
];

const PROJECTS = [
  {
    name: 'Order Processing Platform', badge: 'Celery',
    desc: 'Async order API that responds immediately while Celery workers validate stock, process payment, update status and send notifications outside the request cycle.',
    stack: ['Python', 'Celery', 'Redis', 'Docker'],
    repo: 'https://github.com/AKHIL1633/order-processing-platform', live: null,
  },
  {
    name: 'GitHub PR AI Reviewer', badge: 'Celery + AI',
    desc: 'Webhook service that queues each pull request as Celery jobs; four LangGraph agents review it in parallel and post inline comments. Deployed on AWS EKS.',
    stack: ['Python', 'Celery', 'Redis', 'LangGraph', 'AWS EKS', 'Terraform'],
    repo: 'https://github.com/AKHIL1633/github-pr-ai-reviewer', live: null,
  },
  {
    name: 'JobBoard Pro', badge: 'Django',
    desc: 'Recruitment platform with role-based auth and application tracking; Celery workers send notifications asynchronously so API responses stay fast.',
    stack: ['Django REST', 'Celery', 'Redis', 'PostgreSQL', 'React', 'Docker'],
    repo: 'https://github.com/AKHIL1633/jobboard-pro', live: null,
  },
  {
    name: 'ResumeIQ', badge: 'API',
    desc: 'Resume screening and ranking API with JWT auth, a weighted scoring engine, Alembic migrations and 36 passing tests in CI.',
    stack: ['FastAPI', 'SQLAlchemy', 'Alembic', 'Docker'],
    repo: 'https://github.com/AKHIL1633/resume-screener', live: null,
  },
  {
    name: 'PulseDesk', badge: 'AI Agent',
    desc: 'AI ticket-triage agent — mobile app + web dashboard + API, with an LLM classifying and drafting responses under human review.',
    stack: ['Express', 'Next.js', 'React Native', 'Gemini', 'Zod'],
    repo: 'https://github.com/AKHIL1633/pulsedesk', live: null,
  },
  {
    name: 'GrowEasy CSV Importer', badge: 'Live',
    desc: 'AI app that maps any CSV layout onto a fixed CRM schema, with production-grade retry and validation.',
    stack: ['Next.js', 'Express', 'TypeScript', 'Gemini'],
    repo: 'https://github.com/AKHIL1633/groweasy-csv-importer',
    live: 'https://groweasy-csv-importer-web-ten.vercel.app',
  },
  {
    name: 'Homeward Paws', badge: 'MERN',
    desc: 'Story-led pet-adoption platform — full MERN build with JWT cookie auth, role & ownership guards, image uploads, and a GSAP scroll narrative.',
    stack: ['React 19', 'Vite', 'Express', 'MongoDB', 'Docker'],
    repo: 'https://github.com/AKHIL1633/homeward-paws', live: null,
  },
  {
    name: 'TaskFlow', badge: 'Live',
    desc: 'Full-stack Kanban board with drag-and-drop, a REST API, and CI/CD on every push.',
    stack: ['Next.js 14', 'TypeScript', 'Jest', 'GitHub Actions'],
    repo: 'https://github.com/AKHIL1633/taskflow',
    live: 'https://taskflow-lake-nu.vercel.app',
  },
  {
    name: 'License Plate Detection', badge: 'CV',
    desc: 'Custom-trained YOLOv8 + OCR pipeline with live WebRTC video detection of vehicle number plates.',
    stack: ['Python', 'YOLOv8', 'EasyOCR', 'Streamlit'],
    repo: 'https://github.com/AKHIL1633/Automatic_License_Plate_Detection', live: null,
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

const ROLES = ['Python Back End Developer', 'Celery & Async Systems', 'AI / LLM Engineer', 'Problem Solver'];

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

function renderExperience() {
  const list = document.getElementById('expList');
  EXPERIENCE.forEach((x) => {
    const li = el('li', 'reveal');
    li.appendChild(el('span', 'pub-title', `${x.company} — ${x.role}`));
    li.appendChild(el('span', 'pub-venue', x.dates));
    const ul = el('ul', 'exp-points');
    x.points.forEach((p) => ul.appendChild(el('li', null, p)));
    li.appendChild(ul);
    list.appendChild(li);
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
  renderSkills(); renderExperience(); renderProjects(); renderPublications(); renderAchievements();
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
