// Smooth scroll for internal links
document.addEventListener("click", function (e) {
  const target = e.target.closest('a[href^="#"]');
  if (!target) return;
  const id = target.getAttribute("href");
  const el = document.querySelector(id);
  if (!el) return;
  e.preventDefault();
  const y = el.getBoundingClientRect().top + window.pageYOffset - 64;
  window.scrollTo({ top: y, behavior: "smooth" });
});

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("nav-menu");
if (navToggle && navMenu) {
  navToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Active link highlighting on scroll (intersection observer)
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");
const byHash = {};
navLinks.forEach((a) => (byHash[a.getAttribute("href")] = a));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const hash = "#" + entry.target.id;
      const link = byHash[hash];
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach((a) => a.removeAttribute("aria-current"));
        link.setAttribute("aria-current", "page");
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.2, 0.6, 1] }
);

sections.forEach((s) => observer.observe(s));

// Lightweight scroll reveal: mark elements and observe once
const revealTargets = document.querySelectorAll(
  ".about-card, .card, .contact-form, .section-head, .hero-title, .hero-subtitle, .hero-cta"
);
const revealObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        obs.unobserve(entry.target);
      }
    });
  },
  { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
);
revealTargets.forEach((el) => {
  el.classList.add("will-reveal");
  revealObserver.observe(el);
});

// Year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Subtle 3D tilt effect
const tiltElements = document.querySelectorAll("[data-tilt]");
tiltElements.forEach((el) => {
  const strength = 10; // deg
  let rafId = 0;
  function onMove(e) {
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const rx = (+py * strength).toFixed(2);
    const ry = (-px * strength).toFixed(2);
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      el.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    });
  }
  function reset() {
    if (rafId) cancelAnimationFrame(rafId);
    el.style.transform =
      "perspective(700px) rotateX(0) rotateY(0) translateZ(0)";
  }
  el.addEventListener("mousemove", onMove);
  el.addEventListener("mouseleave", reset);
});

// Subtle hero parallax based on mouse position
const heroGlow = document.querySelector(".hero-glow");
if (heroGlow) {
  let raf = 0;
  window.addEventListener("mousemove", (e) => {
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const px = (e.clientX / window.innerWidth - 0.5) * 2; // -1..1
      const py = (e.clientY / window.innerHeight - 0.5) * 2; // -1..1
      heroGlow.style.setProperty("--px", px.toFixed(3));
      heroGlow.style.setProperty("--py", py.toFixed(3));
    });
  });
}
