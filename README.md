# offsec1337 blog

I write blogs about cyber security and IT in my free time ;


## How to contribute

### 1. Fork and clone

```bash
git clone https://github.com/YOUR-USERNAME/offsec1337.git
cd offsec1337
```

### 2. Preview locally

Just open `index.html` in your browser, or run a local server for full
functionality (search/homepage list use `fetch`, which some browsers block
on `file://`):

```bash
python3 -m http.server 8080
```
Then visit `http://localhost:8080`.

### 3. Add a new post

1. Copy `posts/_TEMPLATE.html` to `posts/your-post-slug.html`
   (lowercase, dashes instead of spaces).
2. Edit the title, date, and content inside it. You are free to add your name as Author and social media links. It's plain HTML — normal
   tags like `<p>`, `<h2>`, `<ul>`, `<pre><code>` for code blocks, and
   `<img>` for images. The template has comments showing what's available.
3. Add a matching entry to `js/posts.json`:
```json
   {
     "title": "Your Post Title",
     "excerpt": "One sentence summary shown on the homepage.",
     "slug": "your-post-slug",
     "date": "2026-08-20"
   }
```
   (don't forget a comma after the previous entry's `}`)
4. If you're adding images, put them in `img/posts/`.

### 4. Submit your change

```bash
git checkout -b add-your-post-slug
git add .
git commit -m "Add post: Your Post Title"
git push origin add-your-post-slug
```
Then open a Pull Request on GitHub.

## Content guidelines

- Keep posts focused on offensive security, pentesting, CTFs, or related
  tooling/theory.
- No content facilitating illegal access to systems you don't own or lack
  authorization to test.
- Cite sources where relevant, and avoid pasting large chunks of text
  copied verbatim from elsewhere.
- Double-check your post renders correctly (headings, code blocks, images)
  before opening a PR.

## Questions / issues

Open a GitHub Issue on this repo.
