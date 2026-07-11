// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

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
