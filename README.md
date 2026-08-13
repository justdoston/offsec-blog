# offsec1337 (static version)

Pure HTML/CSS/JS blog. No server, no database, no login — publishing just
means committing a file to this repo and pushing. GitHub Pages serves
whatever is in the repo.

## Preview it right now (before connecting a domain)

1. Push this whole folder to a new GitHub repo (see steps below).
2. In the repo: **Settings → Pages → Source → Deploy from a branch → main → / (root)** → Save.
3. GitHub gives you a URL like `https://yourusername.github.io/offsec1337-static/`
   within a minute or two. That's your live preview, no domain needed.
4. Later, when ready, point your real domain at it the same way (Settings → Pages → Custom domain).

## How to add a new blog post (no server, no admin panel)

1. Copy `posts/_TEMPLATE.html` to `posts/your-post-slug.html`
   (slug = lowercase, dashes instead of spaces, e.g. `sql-injection-basics.html`)
2. Open it and:
   - Change the `<title>` tag and the `<h1>` inside `.post-full`
   - Change the date
   - Write your content inside `<div class="post-body">...</div>` using the
     tags listed in the comment at the top of that section (`<p>`, `<h2>`,
     `<ul>`, `<pre><code>`, `<blockquote>`, `<img>`, etc.)
3. Open `js/posts-data.js` and add one entry to the `POSTS` array:
   ```js
   {
     title: "Your Post Title",
     excerpt: "One or two sentence summary shown on the homepage card.",
     slug: "your-post-slug",
     date: "2026-08-20"
   }
   ```
4. If your post has images, put the image files in `img/posts/` and reference
   them like `<img src="../img/posts/screenshot.png" alt="...">`
5. `git add . && git commit -m "add new post" && git push`

That's it — the homepage list and live search both read from
`js/posts-data.js` automatically, so this one array entry is the only
"database" update you ever need to make.

## Live search

Works exactly like before — click the magnifying glass icon in the nav,
type, and results filter instantly with no Enter key needed. It's powered
entirely by `js/search.js` reading the same `POSTS` array — no server call.

## Portfolio / about page

`about.html` — same as before:
- Circular avatar top-left. Replace the placeholder icon: drop your photo at
  `img/avatar.jpg`, then in `about.html` uncomment the `<img>` line and
  delete the placeholder `<svg>` line (both marked with a comment).
- Lorem ipsum bio text — edit freely.
- Social icons at the bottom (Instagram, Telegram, GitHub, LinkedIn) —
  replace each `href="#"` with your real profile URL.

## What's different from the Node/Fly version

- No login page, no password. Whoever can push to this GitHub repo can
  publish — that's the new "access control," and it's tied to your real
  GitHub account.
- No database or JSON file on a server — `js/posts-data.js` + the individual
  post HTML files *are* the data, version-controlled in git. Nothing can
  get wiped by a redeploy ever again.
- Writing a post means editing HTML tags directly instead of using a rich
  text editor toolbar. The template file keeps this about as simple as
  possible — mostly `<p>` and `<h2>` and `<pre><code>`.
- 100% free forever on GitHub Pages, no server to babysit.

## About the Kerberoasting post already included

`posts/kerberoasting-attack-theory.html` is your original post, reconstructed
from what I had. Two images from the original couldn't be recovered (one
external image link had already expired) — they're marked with a dashed
red placeholder box (`.image-note`) showing exactly where to drop your own
screenshot back in. Once you add the real image, just replace that
placeholder `<div>` with a normal `<img>` tag as shown in the comment.
