<div align="center">

# 📘 BEd Docs

### Last Minute Study Materials for B.Ed 4th Semester, BSAEU
*(Baba Saheb Ambedkar Education University)*

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fbips-git.codeberg.page%2Fbed-docs%2F&label=site&up_message=online&down_message=offline)](https://bips-git.codeberg.page/bed-docs/)
[![Build](https://img.shields.io/github/actions/workflow/status/bips-git/bed-docs/deploy.yml?branch=main&label=build)](https://github.com/bips-git/bed-docs/actions)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/license-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[![Built with VitePress](https://img.shields.io/badge/built%20with-VitePress-5c6ac4)](https://vitepress.dev)
[![Origin](https://img.shields.io/badge/origin-Codeberg-2185D0)](https://codeberg.org/bips-git/bed-docs)
[![Last Commit](https://img.shields.io/github/last-commit/bips-git/bed-docs)](https://github.com/bips-git/bed-docs/commits/main)

[**📖 Read the Docs**](https://bips-git.codeberg.page/bed-docs/) · [Report an Issue](https://github.com/bips-git/bed-docs/issues) · [Contributing](#-contributing)

</div>

---

## 📌 About

Quick-reference, exam-ready study notes for the **B.Ed 4th Semester** curriculum at **BSAEU**. Content is researched and drafted with AI assistance from established, widely-used B.Ed textbooks and academic sources, then organized into clean, searchable VitePress pages — built for last-minute revision, not as a replacement for your actual coursebooks.

> These notes are a study aid. For exam-authoritative detail, always cross-check with your official BSAEU syllabus and prescribed textbooks.

## 📚 What's Inside

<details>
<summary><strong>Click to expand syllabus coverage</strong></summary>

- Gender, School and Society
- Knowledge and Curriculum
- Creating an Inclusive School
- Guidance and Counselling
- Critical Understanding of ICT
- Yoga Education

</details>

## ✨ Features

- 🔍 Full-text search across all units
- 📱 Mobile-friendly, fast-loading static pages
- 🎨 Switchable themes — Default, Teal, and Catppuccin (Mocha/Mauve) — with a persistent accent-color picker (indigo, emerald, rose, amber)
- 🌓 Light/dark support built into every theme
- 🧭 Clean sidebar navigation by course and unit
- ♻️ Auto-deployed on every push — always up to date

## 🛠️ Tech Stack

| Layer | Tool |
|---|---|
| Site generator | [VitePress](https://vitepress.dev) |
| Package manager | pnpm |
| Hosting | GitHub Pages + [Codeberg Pages](https://codeberg.page) |
| CI/CD | GitHub Actions (dual deploy) |
| Source control | Codeberg (origin, source of truth) + GitHub (mirror) |

## 🚀 Getting Started

Clone from either remote:

```bash
git clone https://codeberg.org/bips-git/bed-docs.git
# or
git clone https://github.com/bips-git/bed-docs.git
```

Install and run locally:

```fish
pnpm install
pnpm docs:dev
```

Build for production:

```fish
pnpm docs:build
```

## 📦 Deployment

**Codeberg is the source of truth** — all development happens there first. **GitHub Actions** handles CI/CD and deploys the compiled static output to **both GitHub Pages and Codeberg Pages** on every push to `main`, so the two hosted copies stay in sync automatically.

## 🤝 Contributing

Corrections, clearer explanations, and missing topics are welcome.

1. Fork the repo (Codeberg or GitHub)
2. Create a branch: `git checkout -b fix/unit-name`
3. Commit your changes
4. Open a PR against `main`

## 📄 License

Licensed under **[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)** — Attribution-NonCommercial-ShareAlike.

Free to share and adapt for study purposes, with credit, not for commercial resale, and any derivative notes stay open under the same terms.

## 🙏 Acknowledgments

Compiled with reference to standard B.Ed textbooks and academic resources for BSAEU's 4th semester syllabus.

---

<div align="center">
Made with ☕ for B.Ed students who left it till the last minute.
</div>
