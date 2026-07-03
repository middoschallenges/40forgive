// 40 Days to Forgiveness — small progressive enhancements.
// The signup forms work fine without this file; it only adds
// a couple of nice-to-haves and one extra layer of spam protection.

document.addEventListener('DOMContentLoaded', function () {
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Extra bot filter: real people take at least a second or two to read
  // the form and type an email. Bots that auto-submit instantly get
  // quietly blocked here. This is on top of Mailchimp's own honeypot
  // field and double opt-in — do not remove either of those.
  var pageLoadedAt = Date.now();
  var MIN_FILL_TIME_MS = 1200;

  document.querySelectorAll('form.signup-form').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      var elapsed = Date.now() - pageLoadedAt;
      if (elapsed < MIN_FILL_TIME_MS) {
        event.preventDefault();
      }
    });
  });
});
