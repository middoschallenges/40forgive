(function () {
  var D = window.ChallengesData;
  var DAYS = D.DAYS;
  var esc = D.esc;

  var ARROW_LEFT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>';
  var ARROW_RIGHT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';

  // The day number comes from the URL PATH (/challenges/3). Vercel rewrites
  // that to challenges.html?day=3 on the server only, so location.search is
  // empty in the browser while location.pathname still shows the real path.
  // ?day=N is kept as a fallback (handy for local testing).
  function pathStyle() { return /\/challenges\/\d+\/?$/.test(location.pathname); }

  function currentDay() {
    var m = location.pathname.match(/\/challenges\/(\d+)\/?$/);
    var raw = m ? m[1] : new URLSearchParams(location.search).get("day");
    if (raw === null) return 1;
    var n = parseInt(raw, 10);
    return n >= 1 && n <= DAYS.length ? n : null;
  }

  function cardHTML(c) {
    return '' +
      '<article class="ch-card" id="day-' + c.day + '">' +
        '<div class="ch-meta"><span class="ch-badge">Day ' + c.day + '</span></div>' +
        '<h3 class="ch-title">' + esc(c.title) + '</h3>' +
        '<div class="ch-text">' + D.blocks(c.intro, { p: "", ul: "ch-bullets" }) + '</div>' +
        '<div class="ch-task-box">' +
          '<p class="ch-task-label">Your Challenge for Today:</p>' +
          D.blocks(c.challenge, { p: "ch-task", ul: "ch-examples", label: "ch-ex-label" }) +
        '</div>' +
        '<p class="ch-complete-q">Did you complete this challenge?</p>' +
        '<a class="btn btn-orange ch-btn" href="' + D.raffleLink(c.day) + '">Get your raffle ticket →</a>' +
      '</article>';
  }

  function navHTML(n) {
    return '' +
      '<div class="ch-nav">' +
        '<button class="btn btn-ghost ch-nav-btn" id="ch-prev"' + (n > 1 ? "" : " disabled") + '>' + ARROW_LEFT + 'Previous challenge</button>' +
        '<button class="btn btn-ghost ch-nav-btn" id="ch-next"' + (n < DAYS.length ? "" : " disabled") + '>Next challenge' + ARROW_RIGHT + '</button>' +
      '</div>';
  }

  function goTo(n) {
    if (n < 1 || n > DAYS.length) return;
    if (pathStyle()) location.href = "/challenges/" + n;
    else location.search = "?day=" + n;
  }

  var n = currentDay();
  var list = document.getElementById("ch-list");
  if (n === null) {
    list.innerHTML = '<p class="ch-prelaunch">We couldn’t find that day. <a href="/challenges">See all 40 challenges</a>.</p>';
    return;
  }
  var c = DAYS[n - 1];
  document.title = "Day " + n + ": " + c.title + " — 40 Days to Forgiveness";
  list.innerHTML = cardHTML(c) + navHTML(n);
  document.getElementById("ch-prev").addEventListener("click", function () { goTo(n - 1); });
  document.getElementById("ch-next").addEventListener("click", function () { goTo(n + 1); });
})();
