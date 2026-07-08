/* =========================================================================
   AICHIS — SITE LOGIC
   -------------------------------------------------------------------------
   You normally do NOT need to edit this file. It reads the text and data
   from content.js and renders the page, handles language switching, and
   runs the mobile menu.
   ========================================================================= */

(function () {
  "use strict";

  const SUPPORTED = ["es", "en", "sv"];
  const DEFAULT_LANG = "es";

  /* --- pick initial language: saved choice > browser > default --------- */
  function initialLang() {
    const saved = localStorage.getItem("aichis-lang");
    if (saved && SUPPORTED.includes(saved)) return saved;
    const browser = (navigator.language || "").slice(0, 2);
    if (SUPPORTED.includes(browser)) return browser;
    return DEFAULT_LANG;
  }

  /* --- read a dotted path like "hero.title" from an object ------------- */
  function get(obj, path) {
    return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), obj);
  }

  /* --- render the About cards ------------------------------------------ */
  function renderAbout(lang) {
    const el = document.getElementById("about-cards");
    const cards = CONTENT[lang].about.cards || [];
    el.innerHTML = cards
      .map(
        (c) => `
        <article class="card">
          <h3>${c.title}</h3>
          <p>${c.text}</p>
        </article>`
      )
      .join("");
  }

  /* --- render the Members grid ----------------------------------------- */
  function renderMembers(lang) {
    const el = document.getElementById("members-grid");
    if (!MEMBERS.length) {
      el.innerHTML = `<p class="empty-note">—</p>`;
      return;
    }
    el.innerHTML = MEMBERS.map((m) => {
      const role = typeof m.role === "object" ? m.role[lang] : m.role;
      const initials = m.name
        .split(" ")
        .map((w) => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();
      const avatar = m.photo
        ? `<img class="member-photo" src="${m.photo}" alt="${m.name}" />`
        : `<div class="member-avatar" aria-hidden="true">${initials}</div>`;
      const name = m.link
        ? `<a href="${m.link}" target="_blank" rel="noopener">${m.name}</a>`
        : m.name;
      return `
        <article class="member-card">
          ${avatar}
          <h3 class="member-name">${name}</h3>
          <p class="member-role">${role || ""}</p>
          <p class="member-aff">${m.affiliation || ""}</p>
        </article>`;
    }).join("");
  }

  /* --- render the Chileans-in-Sweden directory ------------------------- */
  function renderResearchers(lang) {
    const el = document.getElementById("researchers-grid");
    if (!el) return;
    if (!RESEARCHERS.length) {
      el.innerHTML = `<p class="empty-note">—</p>`;
      return;
    }
    el.innerHTML = RESEARCHERS.map((r) => {
      const field = typeof r.field === "object" ? r.field[lang] : r.field;
      const name = r.link
        ? `<a href="${r.link}" target="_blank" rel="noopener">${r.name}</a>`
        : r.name;
      return `
        <article class="researcher-card">
          <h3 class="researcher-name">${name}</h3>
          <p class="researcher-field">${field || ""}</p>
          <p class="researcher-aff">${r.affiliation || ""}</p>
        </article>`;
    }).join("");
  }

  /* --- render the Resources list --------------------------------------- */
  function renderResources(lang) {
    const el = document.getElementById("resources-list");
    if (!RESOURCES.length) {
      el.innerHTML = `<p class="empty-note">—</p>`;
      return;
    }
    el.innerHTML = RESOURCES.map((r) => {
      const title = typeof r.title === "object" ? r.title[lang] : r.title;
      const desc =
        typeof r.description === "object" ? r.description[lang] : r.description;
      return `
        <a class="resource-card" href="${r.link}" target="_blank" rel="noopener">
          <h3>${title}</h3>
          <p>${desc || ""}</p>
          <span class="resource-arrow" aria-hidden="true">&rarr;</span>
        </a>`;
    }).join("");
  }

  /* --- apply a language across the whole page -------------------------- */
  function setLanguage(lang) {
    if (!SUPPORTED.includes(lang)) lang = DEFAULT_LANG;

    // static text nodes marked with data-i18n
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const value = get(CONTENT[lang], node.getAttribute("data-i18n"));
      if (value !== undefined) node.textContent = value;
    });

    // dynamic sections
    renderAbout(lang);
    renderMembers(lang);
    renderResearchers(lang);
    renderResources(lang);

    // reflect state
    document.documentElement.lang = lang;
    localStorage.setItem("aichis-lang", lang);
    document.querySelectorAll(".lang-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });
  }

  /* --- wire up controls ------------------------------------------------- */
  function init() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
    });

    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".nav-links");
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      nav.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => {
          nav.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        })
      );
    }

    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    setLanguage(initialLang());
  }

  document.addEventListener("DOMContentLoaded", init);
})();
