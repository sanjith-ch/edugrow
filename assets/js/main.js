/* =========================================================
   Edugrow — shared layout + interactions
   One file builds the header and footer for every page, so
   navigation only ever needs to be edited here.
   ========================================================= */

const EMAIL = "edugrow21@gmail.com";
const VOLUNTEER_FORM = "https://docs.google.com/forms/d/e/1FAIpQLSeEwciduMMt5BvsYQgYSz2iMeVA7BlMciXFRIfT5jGstYa61w/viewform";
const SOCIAL = {
  instagram: "https://www.instagram.com/ngo.edugrow/",
  facebook: "https://www.facebook.com/Edugrow-102833015880539",
  x: "https://x.com/ngo_edugrow",
  youtube: "https://www.youtube.com/channel/UCZoPUSep8qcUH_hLInYplRA",
};

/* ---------- Icons (stroke icons, 24px grid) ---------- */
const ICON_PATHS = {
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  "arrow-up": '<path d="M12 19V5M6 11l6-6 6 6"/>',
  chev: '<path d="m6 9 6 6 6-6"/>',
  left: '<path d="m15 18-6-6 6-6"/>',
  right: '<path d="m9 18 6-6-6-6"/>',
  close: '<path d="M18 6 6 18M6 6l12 12"/>',
  book: '<path d="M4 19.5V5a2 2 0 0 1 2-2h14v16H6.5A2.5 2.5 0 0 0 4 21.5v-2z"/><path d="M8 7h8M8 11h6"/>',
  brush: '<path d="M9.06 11.9 17.5 3.5a2.12 2.12 0 0 1 3 3l-8.44 8.44"/><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  school: '<path d="m4 6 8-4 8 4"/><path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"/><path d="M14 22v-4a2 2 0 0 0-4 0v4"/><path d="M18 5v17M6 5v17"/><circle cx="12" cy="9" r="2"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  grad: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  lang: '<path d="m5 8 6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/>',
  laptop: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/>',
  pencil: '<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/>',
  star: '<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  ball: '<circle cx="12" cy="12" r="10"/><path d="M4.93 4.93c4.08 2.38 8.16 2.38 14.14 0M4.93 19.07c4.08-2.38 8.16-2.38 14.14 0M12 2v20"/>',
  sparkles: '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>',
  form: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 7h8M8 12h8M8 17h5"/>',
  chair: '<path d="M7 18v3M17 18v3M5 11h14v4H5zM7 11V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v7"/>',
  bag: '<path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M8 14h8"/>',
  printer: '<path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
  puzzle: '<path d="M19.44 7.85c-.47.47-1.12.85-1.82.85-1.38 0-2.5-1.12-2.5-2.5 0-.7.38-1.35.85-1.82L14.12 2.53a1.8 1.8 0 0 0-2.55 0L9.85 4.25c.47.47.85 1.12.85 1.82 0 1.38-1.12 2.5-2.5 2.5-.7 0-1.35-.38-1.82-.85L4.66 9.44a1.8 1.8 0 0 0 0 2.55l1.72 1.72c-.47.47-.85 1.12-.85 1.82 0 1.38 1.12 2.5 2.5 2.5.7 0 1.35-.38 1.82-.85l1.72 1.72a1.8 1.8 0 0 0 2.55 0l1.72-1.72c.47.47 1.12.85 1.82.85 1.38 0 2.5-1.12 2.5-2.5 0-.7-.38-1.35-.85-1.82l1.72-1.72a1.8 1.8 0 0 0 0-2.55z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
  copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  question: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21"/>',
  external: '<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  recycle: '<path d="M7 19H4.8a1.8 1.8 0 0 1-1.6-2.7L7.1 9.6M11 19h8.2a1.8 1.8 0 0 0 1.6-2.7l-1.2-2.1M14 16l-3 3 3 3M8.3 13.6 7.1 9.6 3 10.7M9.3 5.9l1.1-1.9a1.8 1.8 0 0 1 3.1 0l3.9 6.6M13.4 10.4l3.9 1.1 1.2-4"/>',
  instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  x: '<path d="M4 4l16 16M20 4 4 20"/>',
  youtube: '<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>',
};
function icon(name, size = 20) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON_PATHS[name] || ""}</svg>`;
}
function renderIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((el) => {
    const svg = icon(el.dataset.icon, +(el.dataset.size || 20));
    // A bare <span data-icon> becomes the icon; a styled element (tile, bubble, button) keeps its box
    if (el.tagName === "SPAN" && !el.className) el.outerHTML = svg;
    else { el.innerHTML = svg; el.removeAttribute("data-icon"); }
  });
}

/* ---------- Header / footer ---------- */
const NAV = [
  { label: "Home", href: "index.html", page: "home" },
  { label: "About Us", href: "about.html", page: "about" },
  { label: "Schools", href: "schools.html", page: "schools" },
  {
    label: "Support", page: "support", children: [
      { label: "School Needs", href: "school-needs.html", page: "school-needs", icon: "school", sub: "What each school needs right now" },
      { label: "Volunteer", href: "volunteer.html", page: "volunteer", icon: "users", sub: "Teach, run events, start a project" },
      { label: "Donate", href: "donate.html", page: "donate", icon: "heart", sub: "Books, supplies and devices" },
    ],
  },
  {
    label: "Explore", page: "explore", children: [
      { label: "Gallery", href: "gallery.html", page: "gallery", icon: "image", sub: "Moments from our sessions" },
      { label: "Success Stories", href: "success-stories.html", page: "success-stories", icon: "star", sub: "Events and projects so far" },
      { label: "Edugrow Talent Show", href: "talent-show.html", page: "talent-show", icon: "music", sub: "150+ students on stage" },
      { label: "FAQs", href: "faqs.html", page: "faqs", icon: "question", sub: "Answers for volunteers" },
    ],
  },
  { label: "Upcoming", href: "upcoming.html", page: "upcoming" },
];

function buildHeader(current) {
  const parentOf = (p) => NAV.find((n) => n.children && n.children.some((c) => c.page === p));
  const parent = parentOf(current);
  const desktop = NAV.map((item) => {
    if (!item.children) {
      const cur = item.page === current ? ' aria-current="page"' : "";
      return `<li><a class="nav-link" href="${item.href}"${cur}>${item.label}</a></li>`;
    }
    const isCur = parent && parent.page === item.page ? " is-current" : "";
    const links = item.children.map((c) => `<li><a href="${c.href}"${c.page === current ? ' aria-current="page"' : ""}><span class="ico">${icon(c.icon, 18)}</span><span>${c.label}<small>${c.sub}</small></span></a></li>`).join("");
    return `<li class="has-dd${isCur}"><button class="nav-link" aria-haspopup="true">${item.label} ${icon("chev", 14).replace("<svg", '<svg class="chev"')}</button><ul class="dropdown">${links}</ul></li>`;
  }).join("");

  const mobile = NAV.map((item, i) => {
    const d = `style="transition-delay:${0.15 + i * 0.05}s"`;
    if (!item.children) return `<li ${d}><a href="${item.href}">${item.label}</a></li>`;
    const links = item.children.map((c) => `<li><a href="${c.href}">${c.label}</a></li>`).join("");
    return `<li ${d}><details${parent && parent.page === item.page ? " open" : ""}><summary>${item.label}</summary><ul>${links}</ul></details></li>`;
  }).join("");

  return `
  <div class="progress" aria-hidden="true"><span></span></div>
  <a class="sr-only" href="#main" style="position:absolute;left:-999px">Skip to content</a>
  <header class="site-header">
    <div class="container">
      <a class="brand" href="index.html" aria-label="Edugrow home"><img src="assets/img/logo.png" alt=""><span>Edugrow</span></a>
      <nav class="nav" aria-label="Main"><ul>${desktop}</ul></nav>
      <a class="btn btn--sm nav-cta" href="volunteer.html">Volunteer now <span class="arrow">${icon("arrow", 16)}</span></a>
      <button class="burger" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
    </div>
  </header>
  <div class="mobile-menu" aria-hidden="true">
    <ul>${mobile}</ul>
    <a class="btn" href="volunteer.html">Volunteer now <span class="arrow">${icon("arrow", 16)}</span></a>
    <div class="socials">${socialLinks()}</div>
  </div>`;
}

function socialLinks() {
  return [["instagram", "Instagram"], ["facebook", "Facebook"], ["x", "X (Twitter)"], ["youtube", "YouTube"]]
    .map(([k, l]) => `<a href="${SOCIAL[k]}" target="_blank" rel="noopener" aria-label="${l}">${icon(k, 19)}</a>`).join("");
}

function buildFooter() {
  return `
  <section class="pre-footer">
    <div class="container">
      <h2>Every student deserves opportunities beyond textbooks.</h2>
      <div class="btn-row">
        <a class="btn btn--navy" href="volunteer.html">Volunteer <span class="arrow">${icon("arrow", 16)}</span></a>
        <a class="btn btn--outline" href="donate.html">Donate</a>
      </div>
    </div>
  </section>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <a class="brand" href="index.html"><img src="assets/img/logo.png" alt=""><span>Edugrow</span></a>
          <p style="margin-top:18px;max-width:34ch">A registered, student-led NGO connecting people who want to help with government school children in Hyderabad.</p>
          <div class="socials">${socialLinks()}</div>
        </div>
        <div><h4>Organisation</h4><ul>
          <li><a href="index.html">Home</a></li><li><a href="about.html">About Us</a></li>
          <li><a href="schools.html">Schools</a></li><li><a href="upcoming.html">Upcoming</a></li></ul></div>
        <div><h4>Support</h4><ul>
          <li><a href="school-needs.html">School Needs</a></li><li><a href="volunteer.html">Volunteer</a></li>
          <li><a href="donate.html">Donate</a></li></ul></div>
        <div><h4>Explore</h4><ul>
          <li><a href="gallery.html">Gallery</a></li><li><a href="success-stories.html">Success Stories</a></li>
          <li><a href="talent-show.html">Talent Show</a></li><li><a href="faqs.html">FAQs</a></li>
          <li><a href="mailto:${EMAIL}">${EMAIL}</a></li></ul></div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Edugrow. Made with care in Hyderabad.</span>
        <span>Volunteers receive certificates for their time.</span>
      </div>
    </div>
  </footer>
  <button class="to-top" aria-label="Back to top"><svg class="ring" viewBox="0 0 60 60"><circle cx="30" cy="30" r="27"/></svg>${icon("arrow-up", 20)}</button>
  <div class="toast" role="status" aria-live="polite"></div>`;
}

/* ---------- Behaviours ---------- */
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initHeader() {
  const header = document.querySelector(".site-header");
  const bar = document.querySelector(".progress span");
  const topBtn = document.querySelector(".to-top");
  const ring = topBtn && topBtn.querySelector("circle");
  let lastY = 0;
  const onScroll = () => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - innerHeight;
    const p = max > 0 ? y / max : 0;
    header.classList.toggle("is-solid", y > 40);
    header.classList.toggle("is-hidden", y > 400 && y > lastY && !document.body.classList.contains("menu-open"));
    lastY = y;
    if (bar) bar.style.transform = `scaleX(${p})`;
    if (topBtn) { topBtn.classList.toggle("is-shown", y > 700); ring.style.strokeDashoffset = 170 - 170 * p; }
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  topBtn && topBtn.addEventListener("click", () => scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));

  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".mobile-menu");
  const setMenu = (open) => {
    document.body.classList.toggle("menu-open", open);
    burger.setAttribute("aria-expanded", open);
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.setAttribute("aria-hidden", !open);
  };
  burger.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
  addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
}

function initReveal() {
  const els = document.querySelectorAll(".reveal, [data-split], .scribble, .need-card, .stagger");
  if (!("IntersectionObserver" in window) || reduceMotion) { els.forEach((e) => e.classList.add("is-in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  els.forEach((e) => io.observe(e));
  // auto-stagger children of .stagger
  document.querySelectorAll(".stagger").forEach((g) => [...g.children].forEach((c, i) => { c.classList.add("reveal"); c.style.setProperty("--d", `${i * 0.09}s`); io.observe(c); }));
}

// Split a heading into words that slide up one after another
function initSplit() {
  document.querySelectorAll("[data-split]").forEach((el) => {
    let i = 0;
    const walk = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach((w) => {
            if (!w) return;
            if (/^\s+$/.test(w)) { frag.appendChild(document.createTextNode(" ")); return; }
            const o = document.createElement("span"); o.className = "split-word";
            const s = document.createElement("span"); s.textContent = w; s.style.transitionDelay = `${0.1 + i++ * 0.06}s`;
            o.appendChild(s); frag.appendChild(o);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && !n.matches("svg")) {
          if (n.classList.contains("scribble")) {
            const wrap = document.createElement("span"); wrap.className = "split-word";
            const s = document.createElement("span"); s.style.transitionDelay = `${0.1 + i++ * 0.06}s`;
            n.replaceWith(wrap); s.appendChild(n); wrap.appendChild(s); wrap.style.overflow = "visible";
          } else walk(n);
        }
      });
    };
    walk(el);
  });
}

// Pencil underline under a highlighted word
function initScribbles() {
  document.querySelectorAll(".scribble").forEach((el) => {
    el.insertAdjacentHTML("beforeend", '<svg viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden="true"><path d="M3 14 C 40 6, 90 4, 130 8 S 185 12, 197 6"/></svg>');
  });
}

function initCounters() {
  const els = document.querySelectorAll("[data-count]");
  const fmt = (n, el) => (el.dataset.format === "plain" ? String(Math.round(n)) : Math.round(n).toLocaleString("en-IN"));
  const run = (el) => {
    const target = +el.dataset.count; const suffix = el.dataset.suffix || ""; const prefix = el.dataset.prefix || "";
    if (reduceMotion) { el.textContent = prefix + fmt(target, el) + suffix; return; }
    const t0 = performance.now(), dur = 1800;
    const step = (t) => {
      const k = Math.min(1, (t - t0) / dur); const e = 1 - Math.pow(1 - k, 4);
      el.textContent = prefix + fmt(Math.round(target * e), el) + suffix;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver((en) => en.forEach((x) => { if (x.isIntersecting) { run(x.target); io.unobserve(x.target); } }), { threshold: 0.5 });
  els.forEach((e) => io.observe(e));
}

function initHeroSlides() {
  const wrap = document.querySelector(".hero-slides");
  if (!wrap) return;
  const imgs = [...wrap.querySelectorAll("img")];
  const dots = document.querySelector(".hero-dots");
  let i = 0, timer;
  imgs.forEach((_, k) => { const b = document.createElement("button"); b.setAttribute("aria-label", `Show photo ${k + 1}`); b.addEventListener("click", () => go(k)); dots && dots.appendChild(b); });
  const go = (k) => {
    imgs[i].classList.remove("is-active"); dots && dots.children[i].classList.remove("is-active");
    i = (k + imgs.length) % imgs.length;
    imgs[i].classList.add("is-active");
    if (dots) { const d = dots.children[i]; d.classList.remove("is-active"); void d.offsetWidth; d.classList.add("is-active"); }
    clearTimeout(timer); timer = setTimeout(() => go(i + 1), 6000);
  };
  go(0);
  requestAnimationFrame(() => document.querySelector(".hero").classList.add("is-in"));
}

function initParallax() {
  const els = document.querySelectorAll("[data-parallax]");
  if (!els.length || reduceMotion) return;
  const tick = () => {
    els.forEach((el) => { const r = el.parentElement.getBoundingClientRect(); const s = +el.dataset.parallax || 0.2; el.style.transform = `translate3d(0, ${-r.top * s}px, 0) scale(1.1)`; });
  };
  addEventListener("scroll", () => requestAnimationFrame(tick), { passive: true });
  tick();
}

// 3D tilt on cards that follow the pointer
function initTilt() {
  if (reduceMotion || matchMedia("(hover: none)").matches) return;
  document.querySelectorAll("[data-tilt]").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - 0.5; const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`;
    });
    el.addEventListener("pointerleave", () => { el.style.transform = ""; });
  });
}

// Magnetic buttons
function initMagnetic() {
  if (reduceMotion || matchMedia("(hover: none)").matches) return;
  document.querySelectorAll("[data-magnetic]").forEach((el) => {
    el.addEventListener("pointermove", (e) => { const r = el.getBoundingClientRect(); el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`; });
    el.addEventListener("pointerleave", () => { el.style.transform = ""; });
  });
}

function initAccordions() {
  document.querySelectorAll(".acc").forEach((acc) => {
    const btn = acc.querySelector("button");
    btn.setAttribute("aria-expanded", acc.classList.contains("is-open"));
    btn.addEventListener("click", () => {
      const open = !acc.classList.contains("is-open");
      acc.parentElement.querySelectorAll(".acc.is-open").forEach((o) => { o.classList.remove("is-open"); o.querySelector("button").setAttribute("aria-expanded", false); });
      acc.classList.toggle("is-open", open); btn.setAttribute("aria-expanded", open);
    });
  });
}

function initTabs() {
  document.querySelectorAll("[data-tabs]").forEach((wrap) => {
    const btns = wrap.querySelectorAll(".tabs button");
    btns.forEach((b) => b.addEventListener("click", () => {
      btns.forEach((x) => { x.classList.toggle("is-active", x === b); x.setAttribute("aria-selected", x === b); });
      wrap.querySelectorAll(".tab-panel").forEach((p) => p.classList.toggle("is-active", p.id === b.dataset.target));
    }));
  });
}

function toast(msg) {
  const t = document.querySelector(".toast"); if (!t) return;
  t.textContent = msg; t.classList.add("is-shown");
  clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("is-shown"), 2400);
}

function initCopy() {
  document.querySelectorAll("[data-copy]").forEach((b) => b.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(b.dataset.copy); } catch (e) { /* clipboard blocked; the mailto link still works */ }
    b.classList.add("is-done"); const old = b.textContent; b.textContent = "Copied!"; toast(`${b.dataset.copy} copied to clipboard`);
    setTimeout(() => { b.classList.remove("is-done"); b.textContent = old; }, 2000);
  }));
}

// Filter chips + search over a set of cards
function initFilters() {
  document.querySelectorAll("[data-filter-group]").forEach((group) => {
    const target = document.querySelector(group.dataset.filterGroup);
    const items = [...target.querySelectorAll("[data-tags]")];
    const search = document.querySelector(group.dataset.search || "#__none");
    const empty = target.parentElement.querySelector(".empty");
    let active = "all";
    const apply = () => {
      const q = search ? search.value.trim().toLowerCase() : "";
      let shown = 0;
      items.forEach((it) => {
        const okTag = active === "all" || it.dataset.tags.split(" ").includes(active);
        const okQ = !q || it.textContent.toLowerCase().includes(q);
        const ok = okTag && okQ; it.classList.toggle("is-hidden", !ok); if (ok) shown++;
      });
      if (empty) empty.classList.toggle("is-shown", shown === 0);
    };
    group.querySelectorAll(".chip").forEach((c) => {
      const n = c.dataset.filter === "all" ? items.length : items.filter((it) => it.dataset.tags.split(" ").includes(c.dataset.filter)).length;
      if (group.hasAttribute("data-counts")) c.insertAdjacentHTML("beforeend", `<span class="count">${n}</span>`);
      c.addEventListener("click", () => {
        active = c.dataset.filter;
        group.querySelectorAll(".chip").forEach((x) => { x.classList.toggle("is-active", x === c); x.setAttribute("aria-pressed", x === c); });
        apply();
      });
    });
    search && search.addEventListener("input", apply);
  });
}

function initLightbox() {
  const figs = [...document.querySelectorAll("[data-lightbox] figure")];
  if (!figs.length) return;
  const lb = document.createElement("div");
  lb.className = "lightbox"; lb.setAttribute("role", "dialog"); lb.setAttribute("aria-modal", "true");
  lb.innerHTML = `<button class="lb-btn lb-close" aria-label="Close">${icon("close")}</button><button class="lb-btn lb-prev" aria-label="Previous">${icon("left")}</button><button class="lb-btn lb-next" aria-label="Next">${icon("right")}</button><div><img alt=""><div class="cap"></div></div>`;
  document.body.appendChild(lb);
  const img = lb.querySelector("img"), cap = lb.querySelector(".cap");
  let list = [], i = 0, lastFocus;
  const show = (k) => {
    i = (k + list.length) % list.length; const f = list[i]; const im = f.querySelector("img");
    img.style.opacity = 0;
    setTimeout(() => { img.src = im.currentSrc || im.src; img.alt = im.alt; img.onload = () => (img.style.opacity = 1); }, 120);
    const c = f.querySelector("figcaption");
    cap.innerHTML = `${c ? c.innerHTML : ""}<small>${i + 1} / ${list.length}</small>`;
  };
  const open = (f) => { list = figs.filter((x) => !x.classList.contains("is-hidden")); lastFocus = document.activeElement; show(list.indexOf(f)); lb.classList.add("is-open"); document.body.style.overflow = "hidden"; lb.querySelector(".lb-close").focus(); };
  const close = () => { lb.classList.remove("is-open"); document.body.style.overflow = ""; lastFocus && lastFocus.focus(); };
  figs.forEach((f) => { f.tabIndex = 0; f.addEventListener("click", () => open(f)); f.addEventListener("keydown", (e) => { if (e.key === "Enter") open(f); }); });
  lb.querySelector(".lb-close").addEventListener("click", close);
  lb.querySelector(".lb-prev").addEventListener("click", () => show(i - 1));
  lb.querySelector(".lb-next").addEventListener("click", () => show(i + 1));
  lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
  addEventListener("keydown", (e) => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") close(); if (e.key === "ArrowLeft") show(i - 1); if (e.key === "ArrowRight") show(i + 1);
  });
  let sx = 0; lb.addEventListener("touchstart", (e) => (sx = e.touches[0].clientX), { passive: true });
  lb.addEventListener("touchend", (e) => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) show(i + (dx < 0 ? 1 : -1)); });
}

function initCarousels() {
  document.querySelectorAll(".carousel").forEach((c) => {
    const track = c.querySelector(".slides"); const n = track.children.length; let i = 0;
    if (n < 2) { const ctrl = c.querySelector(".ctrl"); ctrl && ctrl.remove(); const cnt = c.querySelector(".count"); cnt && cnt.remove(); return; }
    const count = c.querySelector(".count");
    const go = (k) => { i = (k + n) % n; track.style.transform = `translateX(${-i * 100}%)`; if (count) count.textContent = `${i + 1} / ${n}`; };
    c.querySelector(".prev").addEventListener("click", () => go(i - 1));
    c.querySelector(".next").addEventListener("click", () => go(i + 1));
    let sx = 0; c.addEventListener("touchstart", (e) => (sx = e.touches[0].clientX), { passive: true });
    c.addEventListener("touchend", (e) => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1)); });
    go(0);
  });
}

// Highlights the story pill for the section in view
function initScrollSpy() {
  const nav = document.querySelector("[data-spy]");
  if (!nav) return;
  const links = [...nav.querySelectorAll("a")];
  const io = new IntersectionObserver((en) => en.forEach((x) => {
    if (x.isIntersecting) {
      links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === `#${x.target.id}`));
      const a = links.find((l) => l.classList.contains("is-active"));
      a && nav.scrollTo({ left: a.offsetLeft - nav.clientWidth / 2 + a.clientWidth / 2, behavior: "smooth" });
    }
  }), { rootMargin: "-45% 0px -50% 0px" });
  links.forEach((l) => { const s = document.querySelector(l.getAttribute("href")); s && io.observe(s); });
}

function initModals() {
  const modal = document.querySelector(".modal");
  if (!modal) return;
  const body = modal.querySelector(".modal-body");
  let last;
  const close = () => { modal.classList.remove("is-open"); document.body.style.overflow = ""; last && last.focus(); };
  document.querySelectorAll("[data-bio]").forEach((b) => b.addEventListener("click", () => {
    last = b;
    const tpl = document.getElementById(b.dataset.bio);
    body.innerHTML = tpl.innerHTML;
    modal.classList.add("is-open"); document.body.style.overflow = "hidden"; modal.querySelector(".modal-close").focus();
  }));
  modal.querySelector(".modal-close").addEventListener("click", close);
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  addEventListener("keydown", (e) => { if (e.key === "Escape" && modal.classList.contains("is-open")) close(); });
}

function initMarquee() {
  // Duplicate the strip once so the CSS loop is seamless
  document.querySelectorAll(".marquee-track").forEach((t) => { t.innerHTML += t.innerHTML; t.querySelectorAll("img").forEach((im, k) => { if (k >= t.children.length / 2) im.alt = ""; }); });
}

function initBubbles() {
  const b = document.querySelector(".bubbles");
  if (!b) return;
  for (let k = 0; k < 18; k++) {
    const s = document.createElement("span"); const size = 10 + Math.random() * 60;
    Object.assign(s.style, { width: `${size}px`, height: `${size}px`, left: `${Math.random() * 100}%`, animationDuration: `${10 + Math.random() * 14}s`, animationDelay: `${-Math.random() * 20}s` });
    if (k % 4 === 0) s.style.background = "var(--sun)";
    b.appendChild(s);
  }
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  const h = document.getElementById("site-header"); if (h) h.outerHTML = buildHeader(page);
  const f = document.getElementById("site-footer"); if (f) f.outerHTML = buildFooter();
  document.querySelectorAll("[data-email]").forEach((a) => { a.href = `mailto:${EMAIL}`; if (!a.textContent.trim()) a.textContent = EMAIL; });
  document.querySelectorAll("[data-form-link]").forEach((a) => (a.href = VOLUNTEER_FORM));
  renderIcons();
  initScribbles();
  initSplit();
  initMarquee();
  initHeader();
  initHeroSlides();
  initReveal();
  initCounters();
  initParallax();
  initTilt();
  initMagnetic();
  initAccordions();
  initTabs();
  initCopy();
  initFilters();
  initLightbox();
  initCarousels();
  initScrollSpy();
  initModals();
  initBubbles();
});
