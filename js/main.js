// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll reveal: fades and lifts sections into view as they're scrolled to.
// Respects prefers-reduced-motion through the CSS rule that flattens
// transition durations, so this still works, it just happens instantly.
const revealTargets = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealTargets.length) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  revealTargets.forEach((el) => revealObserver.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add("is-visible"));
}

// Contact form: opens the visitor's email client with the message pre filled.
// This works with zero backend. Swap it out later for a form service or
// your own endpoint if you want submissions to land somewhere other than email.
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = encodeURIComponent(`New project inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);

    window.location.href = `mailto:hello@tetristech.com?subject=${subject}&body=${body}`;
  });
}
