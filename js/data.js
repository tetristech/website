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
//   type         — one of: "article", "news", "product", "tldr"
//   source       — where it's from, shown as a small label (e.g. "MIT Tech Review")
//   url          — the external link, this is where the card sends people
//   date         — "YYYY-MM-DD", used for sorting, newest first
//   description  — 1-2 sentences in your own words on why it's worth a look.
//                   Don't paste text from the source, summarize it.
//   image        — OPTIONAL. A URL to a thumbnail image, shown at the top of
//                   the card. Mainly meant for "tldr" entries (infographics,
//                   one image summaries), but works on any entry. Can point
//                   to an image hosted elsewhere (like the original LinkedIn
//                   or Twitter post) or one you've saved into assets/ and
//                   reference locally, e.g. "assets/tldr/some-image.png".
//                   Leave it off entirely for a plain text card.

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
  },
  {
    title: "How to build an AI agent, in eight steps",
    type: "tldr",
    source: "GenAI.works",
    url: "https://www.linkedin.com/feed/?highlightedUpdateUrn=urn%3Ali%3Aactivity%3A7482119705026273280",
    date: "2026-07-12",
    description: "A one page map from defining scope through system prompts, tool integrations, memory, orchestration, and testing, plus a comparison table of the current agent building platforms and frameworks.",
    image: "assets/tldr/how-to-build-an-ai-agent.jpg"
  },
  {
    title: "Apple sues OpenAI over alleged AI device trade secret theft",
    type: "news",
    source: "CNN Business",
    url: "https://www.cnn.com/2026/07/10/tech/apple-openai-devices-lawsuit",
    date: "2026-07-10",
    description: "Apple filed suit alleging OpenAI used stolen trade secrets while developing its own AI hardware, a rare direct legal clash between two companies both racing to define what a screenless AI device looks like."
  },
  {
    title: "Cloudflare sets a September deadline for AI crawlers to pay or get blocked",
    type: "news",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/01/cloudflares-new-policy-pushes-ai-companies-to-pay-for-publishers-content/",
    date: "2026-07-01",
    description: "Starting September 15, Cloudflare will block crawlers that mix search indexing with AI training on any page carrying ads, unless the site owner opts back in, pressuring Google and others to start paying publishers for the content their models train on."
  },
  {
    title: "Three humanoid robot makers moved toward public markets in the same week",
    type: "news",
    source: "AI Weekly",
    url: "https://aiweekly.co/",
    date: "2026-07-09",
    description: "Agility Robotics filed for a SPAC listing at a $2.5 billion valuation, Unitree cleared its Shanghai IPO, and Tesla began converting a former Model S line into an Optimus factory, three separate signals that humanoid robotics is moving from lab demos toward public capital."
  },
  {
    title: "MIT's Murakkab optimizes the AI workflows behind agentic apps",
    type: "article",
    source: "MIT News",
    url: "https://news.mit.edu/topic/artificial-intelligence2",
    date: "2026-07-07",
    description: "A new MIT system automatically tunes how multistep AI workflows are designed and deployed, aimed at the gap between how agentic apps get built by hand today and how efficiently they could actually run."
  },
  {
    title: "Meta's new AI image watermark missed most cropped fakes in testing",
    type: "product",
    source: "Yahoo Tech",
    url: "https://tech.yahoo.com/ai/",
    date: "2026-07-12",
    description: "Meta previewed a detection tool meant to flag images made with its new Muse Image generator, but a Reuters analysis found it failed to verify 55% of AI-generated images once they'd been cropped to a third or half their original size."
  }
];