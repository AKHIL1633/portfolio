# P Akhil — Portfolio

A fast, responsive single-page portfolio for **P Akhil** — Full Stack Developer (MERN, Python & AI),
M.Tech CS, IIIT Naya Raipur.

🔗 **Live:** https://akhil1633.github.io/portfolio/

## Highlights

- Pure static site — **no build step, no dependencies** (HTML + CSS + vanilla JS)
- Dark, modern design with a subtle animated grid and glow
- Typing role animation, animated stat counters, and scroll-reveal sections
- Data-driven: skills, experience, projects, publications and achievements render from arrays in [`script.js`](script.js)
- Fully responsive with a mobile nav, and respects `prefers-reduced-motion`

## Structure

```
portfolio/
├── index.html    # Markup and section layout
├── styles.css    # Theme tokens, layout, animations
└── script.js     # Content data + interactions
```

## Run locally

Just open `index.html`, or serve the folder:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

Hosted on **GitHub Pages** from the `main` branch root. Editing the content
arrays in `script.js` and pushing is enough to update the live site.

---

Built by [P Akhil](https://github.com/AKHIL1633) · [LinkedIn](https://linkedin.com/in/p-akhil-a68421177)
