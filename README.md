# AICHIS — Website

Official website of **AICHIS** — *Asociación de Investigadores Chilenos en Suecia*
(Association of Chilean Researchers in Sweden).

Trilingual static site: **Español · English · Svenska**.

---

## 🌐 Live site

**https://aichis-org.github.io/** — deploys automatically on every push to `main`.

---

## ✏️ How to edit the content (the easy part)

**You only need to edit one file:** [`assets/js/content.js`](assets/js/content.js).

It is organised in plain language and contains everything you'll normally change:

| I want to…                    | Do this in `content.js`                                            |
| ----------------------------- | ------------------------------------------------------------------ |
| Change any text on the page   | Find the text and edit it — for **all three** languages (`es`, `en`, `sv`). |
| Add / edit a **member**       | Copy a `{ ... }` block in the `MEMBERS` list and change the values. |
| Add a **Chilean researcher in Sweden** | Copy a `{ ... }` block in the `RESEARCHERS` list and change the values. |
| Add an **Explora Nobel edition** | Copy a `{ ... }` block in the `EXPLORA_EDITIONS` list (`state: "done"` or `"upcoming"`). |
| Add / edit a **resource**     | Copy a `{ ... }` block in the `RESOURCES` list and change the values. |

Keep the quotes `" "` and commas `,` exactly as shown. That's it.

### Changing the Explora Nobel documentary
The embedded video is in [`index.html`](index.html) — search for `youtube-nocookie`.
Replace the video id (`5yug9GZ8PjY`) with the new one from its YouTube URL.

### Adding a member photo
Put the image in `assets/img/members/` and point to it, e.g.
`photo: "assets/img/members/jane.jpg"`. Leave `photo: ""` to show the person's
initials instead.

---

## 🎨 Branding

- **Logo:** the header uses `assets/img/logo.png` (colour, on white). The footer
  uses `assets/img/logo-white.png`, a reversed white version for the dark
  background. If you replace the logo, update `logo.png` and regenerate the white
  version (any image editor: remove the background and make the wordmark white),
  keeping the file name `logo-white.png`.
- **Favicon:** `assets/img/favicon.svg` (the "A" monogram). Edit it and re-export
  `favicon-32.png` and `apple-touch-icon.png` if you change it.
- **Colours:** the palette (Chilean blue/red/white + Swedish yellow) is defined
  once at the top of [`assets/css/styles.css`](assets/css/styles.css) under
  `:root`. Change those variables to retheme the whole site.
- **Social links:** the YouTube / X / LinkedIn URLs live in the `<footer>` of
  [`index.html`](index.html) (search for `class="social"`).

---

## 📁 Project structure

```
index.html              Page structure (rarely needs editing)
assets/
  css/styles.css        Styles + colour palette
  js/content.js         ← ALL text, members and resources live here
  js/main.js            Rendering + language switching (no need to edit)
  img/logo.svg          Logo (placeholder — replace with official logo)
  img/favicon.svg       Browser-tab icon
.nojekyll               Tells GitHub Pages to serve files as-is
```

No build step, no dependencies — plain HTML/CSS/JS.

---

## 👀 Preview locally

Just open `index.html` in a browser. To avoid any browser file restrictions you
can instead run a tiny local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## 🚀 Publishing (GitHub Pages)

The site is live at **https://aichis-org.github.io/** and deploys **automatically**
on every push to `main` via GitHub Actions (see
[`.github/workflows/pages.yml`](.github/workflows/pages.yml)). You don't need to
do anything to publish — just push (or merge a PR).

The repo is named `AICHIS-org.github.io` (matching the organisation), which is
what makes the clean root URL work. Pages source is set to **GitHub Actions**
under Settings → Pages.

---

## 📌 Roadmap / TODO

- [ ] Add real members to the `MEMBERS` list.
- [ ] Add real people to the `RESEARCHERS` list (Chileans in Sweden).
- [ ] Add real resources to the `RESOURCES` list.
- [ ] Expand the About Us content as needed.
