// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// ------------------------------------------------------------------
// Render + filter + search
// ------------------------------------------------------------------
const grid = document.getElementById("contentGrid");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const filterBtns = document.querySelectorAll(".filter-btn");

let activeFilter = "all";
let searchTerm = "";

const TYPE_LABELS = { news: "News", article: "Article", product: "Product" };

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function sourceHostname(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch (e) {
    return "";
  }
}

function cardHTML(item) {
  return `
    <a class="content-card" href="${item.url}" target="_blank" rel="noopener noreferrer">
      <div class="card-top">
        <span class="card-type ${item.type}">${TYPE_LABELS[item.type] || item.type}</span>
        <span class="card-date">${formatDate(item.date)}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="card-source">
        <span>${item.source}</span>
        <span class="go">Read &rarr;</span>
      </div>
    </a>
  `;
}

function render() {
  const sorted = [...window.AI_CONTENT].sort((a, b) => (a.date < b.date ? 1 : -1));

  const filtered = sorted.filter((item) => {
    const matchesFilter = activeFilter === "all" || item.type === activeFilter;
    const haystack = (item.title + " " + item.description + " " + item.source).toLowerCase();
    const matchesSearch = searchTerm === "" || haystack.includes(searchTerm);
    return matchesFilter && matchesSearch;
  });

  resultCount.textContent = `${filtered.length} item${filtered.length === 1 ? "" : "s"}`;
  emptyState.style.display = filtered.length === 0 ? "block" : "none";
  grid.innerHTML = filtered.map(cardHTML).join("");

  // Reveal cards on render, staggered slightly
  const cards = grid.querySelectorAll(".content-card");
  cards.forEach((card, i) => {
    setTimeout(() => card.classList.add("is-visible"), i * 40);
  });
}

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    render();
  });
});

searchInput.addEventListener("input", (e) => {
  searchTerm = e.target.value.trim().toLowerCase();
  render();
});

render();
