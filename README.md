# TetrisTech — AI content hub

A hand curated feed of AI news, articles, and product launches. Plain HTML, CSS, and JavaScript, no build tools, no CMS, no monthly fees. You own every line and it runs on your own Hetzner server behind Apache.

## What's in here

```
index.html          the whole page structure
css/style.css        all styling
js/data.js            the content itself, this is what you edit to add links
js/main.js            rendering, filtering, and search logic
assets/logo.png       your cube logo
```

## Adding a new item

This is the only file you need to touch day to day: **`js/data.js`**.

Open it, copy one of the existing entries, and edit the fields:

```js
{
  title: "A short, clear headline",
  type: "news",              // "news", "article", "product", or "tldr"
  source: "Where it's from",
  url: "https://example.com/the-actual-link",
  date: "2026-07-12",         // YYYY-MM-DD, controls sort order
  description: "One or two sentences in your own words on why it matters.",
  image: "assets/tldr/some-image.png"   // optional, shows a thumbnail on the card
}
```

Paste it into the `window.AI_CONTENT` array, keep a comma between entries, save, commit, and push. The site sorts newest first automatically, no need to worry about where in the list you paste it.

A couple of things worth keeping in mind when writing the description: keep it in your own words rather than copying text from the source, both for copyright reasons and because your own short take is more useful to a reader deciding whether to click through anyway.

### TL;DR entries (infographics)

The `tldr` type is meant for image first posts, infographics, one image summaries, the kind of thing you'd screenshot rather than read. Give it an `image` field and the card shows the image up top.

For the image itself, save a copy into `assets/tldr/` and point to it locally (e.g. `assets/tldr/some-name.png`), rather than linking directly to the image URL on LinkedIn, Twitter, or wherever you found it. Those platforms often block hotlinking or require you to be logged in to view the image, which means it just won't load for visitors. Right click, save the image, drop it in that folder, and reference it locally instead.

## Deploying

Same flow as before:

```
cd ~/projects/tetristech
git add .
git commit -m "Add new links"
git push
```

GitHub Actions picks it up and deploys automatically. Check the Actions tab on GitHub if you want to confirm it went through.

## Editing the design

Colors, fonts, and spacing all live in `css/style.css` under the `:root` block at the top. The three content types (news, article, product) each get a color, controlled by `.card-type.news`, `.card-type.article`, and `.card-type.product` further down that same file.
