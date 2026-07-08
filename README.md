# AICHIS — Website

Official website of **AICHIS** — *Asociación de Investigadores Chilenos en Suecia*
(Association of Chilean Researchers in Sweden).

Trilingual static site: **Español · English · Svenska**.

---

## 🌐 Live site

Once GitHub Pages is enabled, the site is served from this repository.
See **Publishing** below.

---

## ✏️ How to edit the content (the easy part)

**You only need to edit one file:** [`assets/js/content.js`](assets/js/content.js).

It is organised in plain language and contains everything you'll normally change:

| I want to…                    | Do this in `content.js`                                            |
| ----------------------------- | ------------------------------------------------------------------ |
| Change any text on the page   | Find the text and edit it — for **all three** languages (`es`, `en`, `sv`). |
| Add / edit a **member**       | Copy a `{ ... }` block in the `MEMBERS` list and change the values. |
| Add / edit a **resource**     | Copy a `{ ... }` block in the `RESOURCES` list and change the values. |

Keep the quotes `" "` and commas `,` exactly as shown. That's it.

### Adding a member photo
Put the image in `assets/img/members/` and point to it, e.g.
`photo: "assets/img/members/jane.jpg"`. Leave `photo: ""` to show the person's
initials instead.

---

## 🎨 Branding

- **Logo:** replace `assets/img/logo.svg` (and `assets/img/favicon.svg`) with the
  official AICHIS logo. Keep the same file names and no other change is needed.
- **Colours:** the palette (Chilean blue/red/white + Swedish yellow) is defined
  once at the top of [`assets/css/styles.css`](assets/css/styles.css) under
  `:root`. Change those variables to retheme the whole site.

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

1. Go to the repository **Settings → Pages**.
2. Under **Build and deployment**, set **Source: Deploy from a branch**.
3. Choose branch **`main`** and folder **`/ (root)`**, then **Save**.
4. Wait ~1 minute; GitHub shows the published URL.

> **Note on the URL:** this repo is named `AICHIS.org.github.io`. GitHub only
> treats a repo as the organisation's root site when it is named exactly
> `AICHIS-org.github.io`. As-is, the site publishes as a *project page* at
> `https://aichis-org.github.io/AICHIS.org.github.io/`. All links in this project
> are relative, so it works either way. To get the clean root URL
> `https://aichis-org.github.io/`, rename the repo to `AICHIS-org.github.io`.

---

## 📌 Roadmap / TODO

- [ ] Replace placeholder logo with the official AICHIS logo.
- [ ] Add real members to the `MEMBERS` list.
- [ ] Add real resources to the `RESOURCES` list.
- [ ] Expand the About Us content as needed.
