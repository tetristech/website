// Tetristech site script: live workday overlap chart + mobile menu

(function () {
  var BR_ZONE = "America/Sao_Paulo";
  var DAY_START = 9;  // workday start, local time
  var DAY_END = 18;   // workday end, local time

  var usZone = "America/New_York";
  var usLabel = "New York";

  var barUS = document.getElementById("bar-us");
  var barBR = document.getElementById("bar-br");
  var band = document.getElementById("band");
  var now = document.getElementById("now");
  var hours = document.getElementById("hours");
  var usName = document.getElementById("us-name");
  var summary = document.getElementById("overlap-summary");

  // Minutes a time zone is ahead of UTC at a given moment (handles daylight saving)
  function offsetMinutes(zone, date) {
    var parts = new Intl.DateTimeFormat("en-US", {
      timeZone: zone, hourCycle: "h23",
      year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", second: "2-digit"
    }).formatToParts(date);
    var get = function (type) {
      return Number(parts.find(function (p) { return p.type === type; }).value);
    };
    var asUTC = Date.UTC(get("year"), get("month") - 1, get("day"), get("hour"), get("minute"), get("second"));
    return Math.round((asUTC - date.getTime()) / 60000);
  }

  function localHour(zone, date) {
    var mins = date.getUTCHours() * 60 + date.getUTCMinutes() + offsetMinutes(zone, date);
    return (((mins % 1440) + 1440) % 1440) / 60;
  }

  function clock(zone, date) {
    return new Intl.DateTimeFormat("en-US", { timeZone: zone, hour: "numeric", minute: "2-digit" }).format(date);
  }

  function pct(h) { return Math.max(0, Math.min(24, h)) / 24; }

  function place(el, start, end) {
    el.style.left = (pct(start) * 100) + "%";
    el.style.width = ((pct(end) - pct(start)) * 100) + "%";
  }

  // Positions inside the timeline, offset by the label column
  function placeWide(el, start, end) {
    el.style.left = "calc(var(--label) + (100% - var(--label)) * " + pct(start) + ")";
    if (end !== undefined) {
      el.style.width = "calc((100% - var(--label)) * " + (pct(end) - pct(start)) + ")";
    }
  }

  function drawHours() {
    var labels = ["12a", "3a", "6a", "9a", "12p", "3p", "6p", "9p", "12a"];
    hours.innerHTML = labels.map(function (t, i) {
      return '<span style="left:' + (i * 12.5) + '%">' + t + "</span>";
    }).join("");
  }

  function render() {
    var d = new Date();
    var diff = (offsetMinutes(BR_ZONE, d) - offsetMinutes(usZone, d)) / 60; // hours São Paulo is ahead

    var brStart = DAY_START - diff;
    var brEnd = DAY_END - diff;
    var ovStart = Math.max(DAY_START, brStart);
    var ovEnd = Math.min(DAY_END, brEnd);
    var shared = Math.max(0, ovEnd - ovStart);

    place(barUS, DAY_START, DAY_END);
    place(barBR, brStart, brEnd);

    if (shared > 0) {
      band.style.display = "";
      placeWide(band, ovStart, ovEnd);
    } else {
      band.style.display = "none";
    }

    placeWide(now, localHour(usZone, d));
    usName.textContent = usLabel;

    var ahead;
    if (diff === 0) {
      ahead = "São Paulo is on the same time as " + usLabel + " today.";
    } else {
      var n = Math.abs(diff);
      ahead = "São Paulo is " + n + " hour" + (n === 1 ? "" : "s") + (diff > 0 ? " ahead of " : " behind ") + usLabel + " today.";
    }
    summary.innerHTML = ahead + " That's <strong>" + shared + " shared working hours</strong>. Right now it's " +
      clock(usZone, d) + " in " + usLabel + " and " + clock(BR_ZONE, d) + " in São Paulo.";
  }

  // Zone picker
  var buttons = document.querySelectorAll(".zone-picker button");
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) { b.setAttribute("aria-checked", "false"); });
      btn.setAttribute("aria-checked", "true");
      usZone = btn.dataset.zone;
      usLabel = btn.dataset.label;
      render();
    });
  });

  // Mobile menu
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("site-nav");
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  drawHours();
  render();
  document.documentElement.classList.add("js-ready");
  setInterval(render, 30000);
})();

// Hero cube: spins on a randomly chosen axis, switching every 3 seconds.
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
