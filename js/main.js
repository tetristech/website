// Tetristech site script

// ------------------------------------------------------------------
// Contact form setup
// Paste your Formspree form ID between the quotes (the part after
// https://formspree.io/f/). Leave it empty and the form falls back to
// opening the visitor's email app instead.
// ------------------------------------------------------------------
var FORMSPREE_ID = "";
var CONTACT_EMAIL = "hello@tetristech.com";

var I18N = window.TT_I18N;

// ------------------------------------------------------------------
// Workday overlap chart
// ------------------------------------------------------------------
var Chart = (function () {
  var BR_ZONE = "America/Sao_Paulo";
  var DAY_START = 9;
  var DAY_END = 18;

  var usZone = "America/New_York";
  var usCity = "ny";

  var barUS = document.getElementById("bar-us");
  var barBR = document.getElementById("bar-br");
  var band = document.getElementById("band");
  var now = document.getElementById("now");
  var hours = document.getElementById("hours");
  var usName = document.getElementById("us-name");
  var summary = document.getElementById("overlap-summary");

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

  function clock(zone, date, locale) {
    return new Intl.DateTimeFormat(locale, { timeZone: zone, hour: "numeric", minute: "2-digit" }).format(date);
  }

  function pct(h) { return Math.max(0, Math.min(24, h)) / 24; }

  function place(el, start, end) {
    el.style.left = (pct(start) * 100) + "%";
    el.style.width = ((pct(end) - pct(start)) * 100) + "%";
  }

  function placeWide(el, start, end) {
    el.style.left = "calc(var(--label) + (100% - var(--label)) * " + pct(start) + ")";
    if (end !== undefined) {
      el.style.width = "calc((100% - var(--label)) * " + (pct(end) - pct(start)) + ")";
    }
  }

  function render() {
    var T = I18N.t();
    var d = new Date();
    var diff = (offsetMinutes(BR_ZONE, d) - offsetMinutes(usZone, d)) / 60;

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

    var city = T.cities[usCity];
    usName.textContent = city;

    hours.innerHTML = T.hours.map(function (t, i) {
      return '<span style="left:' + (i * 12.5) + '%">' + t + "</span>";
    }).join("");

    var n = Math.abs(diff);
    var first = diff === 0 ? T.same(city) : (diff > 0 ? T.ahead(n, city) : T.behind(n, city));
    summary.innerHTML = first + " " + T.shared(shared) + " " +
      T.nowAt(clock(usZone, d, T.locale), city, clock(BR_ZONE, d, T.locale));
  }

  var buttons = document.querySelectorAll(".zone-picker button");
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) { b.setAttribute("aria-checked", "false"); });
      btn.setAttribute("aria-checked", "true");
      usZone = btn.dataset.zone;
      usCity = btn.dataset.city;
      render();
    });
  });

  return { render: render };
})();

// ------------------------------------------------------------------
// Language selector
// ------------------------------------------------------------------
(function () {
  var btn = document.getElementById("lang-btn");
  var menu = document.getElementById("lang-menu");
  var current = document.getElementById("lang-current");
  var options = menu.querySelectorAll("[role=option]");

  function open() {
    menu.hidden = false;
    btn.setAttribute("aria-expanded", "true");
    var sel = menu.querySelector("[aria-selected=true]") || options[0];
    sel.focus();
  }
  function close(focusBtn) {
    menu.hidden = true;
    btn.setAttribute("aria-expanded", "false");
    if (focusBtn) btn.focus();
  }
  function choose(opt) {
    I18N.set(opt.dataset.lang);
    close(true);
  }

  function sync(lang) {
    options.forEach(function (o) {
      var on = o.dataset.lang === lang;
      o.setAttribute("aria-selected", on ? "true" : "false");
      if (on) {
        current.innerHTML = o.querySelector(".flag").outerHTML + "<span>" + lang.toUpperCase() + "</span>";
      }
    });
  }

  btn.addEventListener("click", function () {
    menu.hidden ? open() : close(false);
  });
  options.forEach(function (o, i) {
    o.addEventListener("click", function () { choose(o); });
    o.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); choose(o); }
      if (e.key === "ArrowDown") { e.preventDefault(); options[(i + 1) % options.length].focus(); }
      if (e.key === "ArrowUp") { e.preventDefault(); options[(i - 1 + options.length) % options.length].focus(); }
      if (e.key === "Escape") { close(true); }
    });
  });
  document.addEventListener("click", function (e) {
    if (!menu.hidden && !e.target.closest(".lang")) close(false);
  });

  I18N.onChange(sync);
})();

// ------------------------------------------------------------------
// Contact form
// ------------------------------------------------------------------
(function () {
  var form = document.getElementById("contact-form");
  var status = document.getElementById("cf-status");
  var submit = document.getElementById("cf-submit");
  var topic = document.getElementById("cf-topic");

  // "Send your résumé" and "Ask about the program" jump here with the right topic picked
  document.querySelectorAll("[data-topic]").forEach(function (a) {
    a.addEventListener("click", function () { topic.value = a.dataset.topic; });
  });

  function say(msg, kind) {
    status.textContent = msg;
    status.className = "form-status" + (kind ? " is-" + kind : "");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var T = I18N.t();
    var data = new FormData(form);

    if (data.get("_gotcha")) return; // bot filled the hidden field

    var name = String(data.get("name") || "").trim();
    var email = String(data.get("email") || "").trim();
    var message = String(data.get("message") || "").trim();
    var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !emailOk || !message) {
      say(T.missing, "error");
      return;
    }

    var topicLabel = topic.options[topic.selectedIndex].text;
    var subject = "Tetristech website: " + topicLabel + " (" + name + ")";

    // No Formspree ID yet: open the visitor's email app instead
    if (!FORMSPREE_ID) {
      var company = String(data.get("company") || "").trim();
      var body = message + "\n\n" + name + (company ? ", " + company : "") + "\n" + email;
      window.location.href = "mailto:" + CONTACT_EMAIL +
        "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      say(T.mailto, "ok");
      return;
    }

    data.append("_subject", subject);
    data.append("language", I18N.get());
    submit.disabled = true;
    say(T.sending);

    fetch("https://formspree.io/f/" + FORMSPREE_ID, {
      method: "POST",
      body: data,
      headers: { "Accept": "application/json" }
    }).then(function (res) {
      if (res.ok) {
        form.reset();
        say(T.sent, "ok");
      } else {
        say(T.failed, "error");
      }
    }).catch(function () {
      say(T.failed, "error");
    }).finally(function () {
      submit.disabled = false;
    });
  });

  // Clear old status text when the language changes
  I18N.onChange(function () { say(""); });
})();

// ------------------------------------------------------------------
// Mobile menu
// ------------------------------------------------------------------
(function () {
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
})();

// ------------------------------------------------------------------
// Hero cube: spins on a randomly chosen axis, switching every 3 seconds
// ------------------------------------------------------------------
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
    setInterval(function () {
      var axes = ["x", "y", "z"];
      activeAxis = axes[Math.floor(Math.random() * axes.length)];
    }, 3000);

    var lastTime = performance.now();
    function tick(t) {
      var dt = (t - lastTime) / 1000;
      lastTime = t;
      angles[activeAxis] += speed * dt;
      apply();
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
})();

// ------------------------------------------------------------------
// Start up
// ------------------------------------------------------------------
document.getElementById("year").textContent = new Date().getFullYear();
I18N.onChange(Chart.render);
I18N.init();
document.documentElement.classList.add("js-ready");
setInterval(Chart.render, 30000);
