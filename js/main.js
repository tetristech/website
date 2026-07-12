// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Hero cube: spins on a randomly chosen axis, switching every 3 seconds.
// Pure CSS animations can't do randomness, so this runs on a small
// requestAnimationFrame loop instead.
(function () {
  var cube = document.querySelector(".lc-cube");
  if (!cube) return;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var angles = { x: -25, y: -35, z: 0 };
  var activeAxis = "y";
  var speed = 45;

  function apply() {
    cube.style.transform =
      "rotateX(" + angles.x + "deg) rotateY(" + angles.y + "deg) rotateZ(" + angles.z + "deg)";
  }
  apply();

  if (!reduceMotion) {
    function pickAxis() {
      var axes = ["x", "y", "z"];
      activeAxis = axes[Math.floor(Math.random() * axes.length)];
    }
    pickAxis();
    setInterval(pickAxis, 3000);

    var lastTime = performance.now();
    function tick(now) {
      var dt = (now - lastTime) / 1000;
      lastTime = now;
      angles[activeAxis] += speed * dt;
      apply();
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
})();

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

const TYPE_LABELS = { news: "News", article: "Article", product: "Product", tldr: "TL;DR" };

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
  const thumb = item.image
    ? `<div class="card-thumb"><img src="${item.image}" alt="" loading="lazy"></div>`
    : "";
  return `
    <a class="content-card" href="${item.url}" target="_blank" rel="noopener noreferrer">
      ${thumb}
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
