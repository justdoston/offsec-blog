/*
  This file is your "database."
  Every post gets ONE entry here, plus its own HTML file in /posts/.

  HOW TO ADD A NEW POST:
  1. Copy posts/kerberoasting-attack-theory.html to posts/your-new-slug.html
     and edit the title/content inside it.
  2. Add a new object below with the same info (title, excerpt, slug, date).
  3. Commit + push. That's it - homepage list and search update automatically.

  "slug" must exactly match the filename (without .html) in /posts/.
  "date" format: YYYY-MM-DD
*/

const POSTS = [
  {
    title: "Kerberoasting Attack & Theory",
    excerpt: "Theory behind Kerberoasting - how Kerberos authentication works, and how disabled Pre-Authentication can be abused via AS-REP Roasting.",
    slug: "kerberoasting-attack-theory",
    date: "2026-08-08"
  },
  {
    title: "Web enumeration cheat sheet",
    excerpt: "Cheat sheet for web",
    slug: "web-enumeration-cheat-sheet",
    date: "2026-08-18"
  }
];
