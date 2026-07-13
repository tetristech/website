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
//   type         — one of: "news", "article", "report", "tldr", "tool", "learn"
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
    type: "tool",
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
    type: "tool",
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
    title: "12 Claude Code features every engineer should know",
    type: "tldr",
    source: "GenAI.works",
    url: "https://www.linkedin.com/company/genai-works",
    date: "2026-07-13",
    description: "A single-page rundown of Claude Code features beyond basic prompting, covering CLAUDE.md, permissions, plan mode, checkpoints, skills, hooks, MCP, plugins, context management, slash commands, compaction, and subagents.",
    image: "assets/tldr/claude-code-12-features.jpg"
  },
  {
    title: "The layers of AI, from classic machine learning to agentic systems",
    type: "tldr",
    source: "GenAI.works",
    url: "https://www.linkedin.com/company/genai-works",
    date: "2026-07-13",
    description: "A six-layer stack running from foundational AI and machine learning up through neural networks, deep learning, and generative AI, to agentic AI at the top, with the key techniques and components sitting at each level.",
    image: "assets/tldr/layers-of-ai.jpg"
  },
  {
    title: "Most people are using Copilot wrong",
    type: "tldr",
    source: "GenAI.works",
    url: "https://www.linkedin.com/company/genai-works",
    date: "2026-07-13",
    description: "A per-app breakdown of what Copilot is actually good for in Word, Excel, PowerPoint, and Microsoft 365 chat, paired with example prompts for each, rather than a generic list of features.",
    image: "assets/tldr/copilot-ms365-tips.jpg"
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
    type: "tool",
    source: "Yahoo Tech",
    url: "https://tech.yahoo.com/ai/",
    date: "2026-07-12",
    description: "Meta previewed a detection tool meant to flag images made with its new Muse Image generator, but a Reuters analysis found it failed to verify 55% of AI-generated images once they'd been cropped to a third or half their original size."
  },
  {
    title: "WEF's new framework judges whether schools are actually ready for AI",
    type: "report",
    source: "World Economic Forum",
    url: "https://www.weforum.org/publications/shaping-the-future-of-learning-education-readiness-for-the-age-of-ai/",
    date: "2026-06-04",
    description: "Rather than treating AI adoption in classrooms as automatically good, this report argues the real risk is curricula, assessment, and governance moving far slower than students and teachers already are, and offers a readiness framework for closing that gap."
  },
  {
    title: "Stanford's 2026 AI Index charts a year of faster adoption, falling costs",
    type: "report",
    source: "Stanford HAI",
    url: "https://hai.stanford.edu/ai-index/2026-ai-index-report",
    date: "2026-04-13",
    description: "The ninth edition of this annual benchmark spans over 400 pages on model performance, spending, and public opinion, and finds generative AI reached over half of the population faster than the PC or the internet did."
  },
  {
    title: "Deloitte's enterprise AI survey finds a gap between ambition and results",
    type: "report",
    source: "Deloitte",
    url: "https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html",
    date: "2026-01-21",
    description: "Based on a survey of over 3,200 senior leaders, this eighth annual edition looks at how far companies have actually gotten past pilots and into production AI, and where the value is failing to show up."
  },
  {
    title: "Anthropic's free course teaches AI fluency as a skill, not a prompt trick",
    type: "learn",
    source: "Anthropic Academy",
    url: "https://anthropic.skilljar.com/ai-fluency-framework-foundations",
    date: "2026-07-12",
    description: "Built around four competencies, delegation, description, discernment, and diligence, this free course aims at judgment that carries over across any AI tool, rather than a list of prompt templates that stop working the moment a model updates."
  },
  {
    title: "Andrew Ng's \"AI for Everyone\" is still the fastest primer for non-technical teams",
    type: "learn",
    source: "DeepLearning.AI",
    url: "https://www.deeplearning.ai/courses/ai-for-everyone/",
    date: "2026-07-12",
    description: "A short, no-code course aimed at people who need to make decisions about AI at work, managers, founders, anyone who has to weigh in on AI projects without building one themselves."
  },
  {
    title: "Learn Prompting keeps a free, living reference for every prompting technique",
    type: "learn",
    source: "Learn Prompting",
    url: "https://learnprompting.org/",
    date: "2026-07-12",
    description: "Less a course than a constantly updated field guide, covering everything from basic instruction writing through chain-of-thought and multi-agent prompting, useful to search when you hit a wall rather than to read start to finish."
  },
  {
    title: "Anthropic details new cyber safeguards after redeploying Claude Fable 5",
    type: "news",
    source: "Anthropic",
    url: "https://www.anthropic.com/news/fable-safeguards-jailbreak-framework",
    date: "2026-07-01",
    description: "Working with Amazon, Microsoft, and Google under a joint initiative called Project Glasswing, Anthropic published how it grades cybersecurity requests by risk and how it scores jailbreak severity, an attempt at an industry-wide standard rather than one company's internal policy."
  },
  {
    title: "AI data centers are about to push US electricity demand to record highs",
    type: "news",
    source: "WebProNews",
    url: "https://www.webpronews.com/ai-data-centers-push-u-s-power-demand-to-fresh-records-through-2027/",
    date: "2026-07-08",
    description: "New federal energy projections show data center power draw roughly doubling by 2027, with AI workloads named as the main driver, a reminder that model progress is now also a grid capacity problem."
  },
  {
    title: "White House orders a voluntary early-review lane for frontier AI models",
    type: "news",
    source: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2026/06/promoting-advanced-artificial-intelligence-innovation-and-security/",
    date: "2026-06-02",
    description: "The executive order lets AI labs opt into sharing frontier models with the federal government for up to 30 days before release, explicitly stopping short of a mandatory licensing regime, a middle path between hands-off and heavy regulation."
  },
  {
    title: "Stanford's own data shows AI experts and the public don't agree on much",
    type: "article",
    source: "KQED",
    url: "https://www.kqed.org/news/12079472/stanford-study-ai-experts-are-optimistic-about-ai-the-rest-of-us-not-so-much",
    date: "2026-04-14",
    description: "73% of AI experts think the technology's effect on jobs is positive, versus 23% of the general public, a 50 point gap that this piece argues says as much about trust and communication as it does about the technology itself."
  },
  {
    title: "2026 is the year vertical AI started outearning chatbots",
    type: "article",
    source: "mean.ceo",
    url: "https://blog.mean.ceo/ai-industry-trends-july-2026/",
    date: "2026-07-01",
    description: "A monthly industry roundup argues that budgets are moving toward narrow, industry-specific tools that finish one bounded task well, support routing, bug triage, compliance drafting, over general purpose chatbots that demo well but don't finish anything on their own."
  },
  {
    title: "MIT data shows AI coding agents write more code but ship barely more software",
    type: "article",
    source: "Forbes",
    url: "https://www.forbes.com/sites/josipamajic/2026/06/10/ai-coding-agents-write-180-more-code-but-ship-only-30-more-software/",
    date: "2026-06-10",
    description: "Across more than 100,000 developers, AI agents increased code volume by about 180%, but the amount that actually reached production rose only 30%, a gap the piece pins on verification, not typing speed, being the real bottleneck."
  },
  {
    title: "The UN's first global science panel on AI publishes its opening assessment",
    type: "report",
    source: "United Nations",
    url: "https://www.un.org/independent-international-scientific-panel-ai/sites/default/files/2026-07/en_Preliminary%20Report_.pdf",
    date: "2026-07-07",
    description: "The newly formed Independent International Scientific Panel on AI released its first preliminary report, an attempt to give governments a shared, non-partisan scientific reference point before national AI rules diverge too far from each other."
  },
  {
    title: "ChatGPT sends more AI traffic to publishers than every other assistant combined",
    type: "report",
    source: "Previsible",
    url: "https://previsible.com/seo-strategy/ai-traffic-report-july-2026/",
    date: "2026-07-06",
    description: "A study of 6.77 million LLM-driven sessions across 166 sites puts ChatGPT at 92.4% of standalone AI referral traffic, and finds nearly a third of that traffic lands on a site's internal search page rather than the right content directly."
  },
  {
    title: "NVIDIA's enterprise survey finds AI is finally paying for itself",
    type: "report",
    source: "NVIDIA",
    url: "https://blogs.nvidia.com/blog/state-of-ai-report-2026/",
    date: "2026-03-19",
    description: "Based on responses across industries, the report finds AI has moved from pilot projects to full deployments touching code, legal, and finance work, with efficiency, productivity, and new revenue cited as the top three reasons companies are investing further."
  },
  {
    title: "Claude Sonnet 5 narrows the gap with Anthropic's biggest model, at a third of the price",
    type: "tool",
    source: "Anthropic",
    url: "https://www.anthropic.com/news/claude-sonnet-5",
    date: "2026-06-30",
    description: "Anthropic's latest Sonnet is built to plan, use tools like browsers and terminals, and run autonomously at a level that used to require the larger Opus model, while testing safer in agentic use than its predecessor."
  },
  {
    title: "Bono AI turns a ten minute phone call into a week of content",
    type: "tool",
    source: "Product Hunt",
    url: "https://www.producthunt.com/products/bono-ai",
    date: "2026-07-09",
    description: "Instead of a blank page, Bono interviews you by voice, asking follow-up questions to draw out the actual point, then turns the transcript into a blog post, newsletter, and social posts written in your own voice."
  },
  {
    title: "Gemini 3.1 Pro doubles down on reasoning over raw scale",
    type: "tool",
    source: "Google",
    url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/",
    date: "2026-02-19",
    description: "Google's mid-cycle Gemini update more than doubles the previous model's score on the ARC-AGI-2 reasoning benchmark, and ships straight into the Gemini app, NotebookLM, and developer tools rather than staying in preview."
  },
  {
    title: "OpenAI Academy adds a three-course path from AI basics to running agents",
    type: "learn",
    source: "OpenAI",
    url: "https://openai.com/index/academy-courses-applying-ai-at-work/",
    date: "2026-06-12",
    description: "AI Foundations, Applied AI Foundations, and Agents and Workflows are built to be taken in order, going from prompting basics to building repeatable workflows to directing agents with defined boundaries and checkpoints."
  },
  {
    title: "DataCamp's newest course treats AI literacy as a work skill, not a technical one",
    type: "learn",
    source: "DataCamp",
    url: "https://www.datacamp.com/courses/introduction-to-ai-for-work",
    date: "2026-07-13",
    description: "No coding, no math, just what AI actually is, how to write a prompt that gets a useful answer, and a safety checklist for catching hallucinations before they end up in something you send to a client."
  },
  {
    title: "Harvard's CS50 AI course is still the free option for people who want the real fundamentals",
    type: "learn",
    source: "Harvard (CS50)",
    url: "https://cs50.harvard.edu/ai/",
    date: "2026-07-13",
    description: "Seven weeks of lectures, source code, and problem sets covering search, machine learning, and neural networks, aimed at people who want to understand how AI systems actually work rather than just how to prompt one."
  }
];