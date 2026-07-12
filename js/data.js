// TetrisTech content hub — data file
//
// This is the whole "database." No CMS, no backend, just an array.
// To add a new item, copy one of the objects below, paste it in, and edit
// the fields. Keep commas between entries. Order doesn't matter, the page
// sorts by date automatically.
//
// Fields:
//   title        — the headline, your own words are fine even if you're
//                   summarizing someone else's piece
//   type         — one of: "article", "news", "product"
//   source       — where it's from, shown as a small label (e.g. "MIT Tech Review")
//   url          — the external link, this is where the card sends people
//   date         — "YYYY-MM-DD", used for sorting, newest first
//   description  — 1-2 sentences in your own words on why it's worth a look.
//                   Don't paste text from the source, summarize it.

window.AI_CONTENT = [
  {
    title: "UN opens a global dialogue on AI governance in Geneva",
    type: "news",
    source: "UN News",
    url: "https://news.un.org/en/story/2026/07/1167862",
    date: "2026-07-07",
    description: "A new international scientific panel and a UN led dialogue are trying to get ahead of AI risk before the gap between fast moving labs and slow moving regulation gets any wider."
  },
  {
    title: "Meituan's LongCat-2.0 lands as an open-weight coding model",
    type: "product",
    source: "Build Fast with AI",
    url: "https://www.buildfastwithai.com/blogs/ai-news-today-july-4-2026",
    date: "2026-07-04",
    description: "Released under an MIT license with no usage restrictions, this is the model that was quietly topping developer usage charts under a different name before anyone knew who built it."
  },
  {
    title: "Grok 4.5 enters private beta at SpaceX and Tesla",
    type: "news",
    source: "Build Fast with AI",
    url: "https://www.buildfastwithai.com/blogs/ai-news-today-july-4-2026",
    date: "2026-07-04",
    description: "A 1.5 trillion parameter jump in about a month, xAI is scaling fast and testing internally before any public release."
  },
  {
    title: "Why July 2026 is the month AI stopped chasing size",
    type: "article",
    source: "ZoneTechify",
    url: "https://www.zonetechify.com/blog/ai-news-july-2026-latest-ai-developments",
    date: "2026-07-08",
    description: "A good plain language rundown of the shift from bigger models to cheaper, more reliable ones, and what falling inference costs actually mean for teams shipping AI features."
  },
  {
    title: "Google launches an AI lab for African researchers and entrepreneurs",
    type: "news",
    source: "Medium — David Akpovi",
    url: "https://medium.com/@davidakpovi/ai-news-week-of-july-6-to-july-12-2026-f81a26c49c55",
    date: "2026-07-12",
    description: "The Google Africa Applied AI Lab, based in Accra, gives early access and direct technical support to founders and researchers building AI tools for the continent's specific problems."
  },
  {
    title: "Mistral's Leanstral 1.5 proves code does what it claims to do",
    type: "product",
    source: "Medium — David Akpovi",
    url: "https://medium.com/@davidakpovi/ai-news-week-of-july-6-to-july-12-2026-f81a26c49c55",
    date: "2026-07-12",
    description: "Instead of just generating code, this model produces a mathematical proof of correctness using Lean 4, aimed at software where being right actually matters."
  }
];
