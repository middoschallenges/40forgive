(function () {
  var D = window.ChallengesData;
  var SCHEDULE = D.SCHEDULE;
  var CONTENT = D.CONTENT;
  var RAFFLE_BASE = D.RAFFLE_BASE;
  var easternToday = D.easternToday;
  var pad2 = D.pad2;
  var prettyDate = D.prettyDate;
  var dayLabel = D.dayLabel;

  function esc(s) { return s; } // content is authored trusted HTML

  // ---- Rendering -------------------------------------------------------------
  function cardHTML(entry) {
    var ticket = entry.days[0]; // raffle challenge_id = day-<first day number>
    var c = CONTENT[ticket];
    var anchor = "day-" + ticket;

    if (!c) {
      return '' +
        '<article class="ch-card" id="' + anchor + '">' +
          '<div class="ch-meta">' +
            '<span class="ch-badge">' + dayLabel(entry.days) + '</span>' +
            '<span class="ch-date">' + prettyDate(entry.release) + '</span>' +
          '</div>' +
          '<h3 class="ch-title">Challenge coming soon</h3>' +
          '<div class="ch-text"><p><em>Check back soon for this challenge.</em></p></div>' +
        '</article>';
    }

    var insight = c.insight.map(function (p) { return "<p>" + p + "</p>"; }).join("");
    var task = c.task.map(function (p) { return '<p class="ch-task">' + p + "</p>"; }).join("");
    var hasExamples = c.examples && c.examples.length > 0;
    var examplesBlock = "";
    if (hasExamples) {
      var exampleItems = c.examples.map(function (ex) { return "<li>" + ex + "</li>"; }).join("");
      examplesBlock =
        '<p class="ch-ex-label">For example:</p>' +
        '<ul class="ch-examples">' + exampleItems + '</ul>';
    }

    return '' +
      '<article class="ch-card" id="' + anchor + '">' +
        '<div class="ch-meta">' +
          '<span class="ch-badge">' + dayLabel(entry.days) + '</span>' +
          '<span class="ch-date">' + prettyDate(entry.release) + '</span>' +
        '</div>' +
        '<h3 class="ch-title">' + esc(c.title) + '</h3>' +
        '<div class="ch-text">' + insight + '</div>' +
        '<div class="ch-task-box">' +
          '<p class="ch-task-label">Your Challenge for Today</p>' +
          task +
          examplesBlock +
        '</div>' +
        '<p class="ch-complete-q">Did you complete this challenge?</p>' +
        '<a class="btn btn-orange ch-btn" href="' + RAFFLE_BASE + pad2(ticket) + '">' +
          'Get your raffle ticket →' +
        '</a>' +
      '</article>';
  }

  function prelaunchHTML(firstEntry) {
    return '<p class="ch-prelaunch">This program begins on Rosh Chodesh Elul (' + prettyDate(firstEntry.release) + '). Check back then to see the first challenge!</p>';
  }

  function navHTML(prevEntry, nextEntry) {
    return '' +
      '<div class="ch-nav">' +
        '<button class="btn btn-ghost ch-nav-btn" id="ch-prev"' + (prevEntry ? "" : " disabled") + '>← Previous challenge</button>' +
        '<button class="btn btn-ghost ch-nav-btn" id="ch-next"' + (nextEntry ? "" : " disabled") + '>Next challenge →</button>' +
      '</div>';
  }

  // ---- Build the page --------------------------------------------------------
  // One challenge is shown at a time; Previous/Next page chronologically
  // through everything released so far. `chronological` is oldest-first.
  var chronological = [];
  var currentIndex = 0;

  function renderCurrent() {
    var entry = chronological[currentIndex];
    var prevEntry = currentIndex > 0 ? chronological[currentIndex - 1] : null;
    var nextEntry = currentIndex < chronological.length - 1 ? chronological[currentIndex + 1] : null;
    document.getElementById("ch-list").innerHTML =
      cardHTML(entry) + navHTML(prevEntry, nextEntry);

    document.getElementById("ch-prev").addEventListener("click", function () { goTo(currentIndex - 1); });
    document.getElementById("ch-next").addEventListener("click", function () { goTo(currentIndex + 1); });

    var url = new URL(location.href);
    url.searchParams.set("day", pad2(entry.days[0]));
    history.replaceState(null, "", url);
  }

  function goTo(index) {
    if (index < 0 || index >= chronological.length) return;
    currentIndex = index;
    renderCurrent();
    document.getElementById("ch-list").scrollIntoView({ block: "start" });
  }

  function render() {
    var today = easternToday();

    // A /challenges/NN link (rewritten to ?day=NN) pins the page to how it
    // looked on that day — later challenges stay hidden, even if more have
    // been released by the time someone opens the link.
    var dayParam = new URLSearchParams(location.search).get("day");
    var cutoff = today;
    if (dayParam) {
      var dayNum = parseInt(dayParam, 10);
      var linkedEntry = SCHEDULE.filter(function (e) { return e.days[0] === dayNum; })[0];
      if (linkedEntry && linkedEntry.release < cutoff) cutoff = linkedEntry.release;
    }

    var released = SCHEDULE.filter(function (e) { return e.release <= cutoff; });
    var upcoming = SCHEDULE.filter(function (e) { return e.release > cutoff; });
    var next = upcoming[0];

    if (released.length === 0) {
      // Before the program starts.
      document.getElementById("ch-list").innerHTML = next ? prelaunchHTML(next) : "";
      return;
    }

    chronological = released;
    currentIndex = chronological.length - 1; // newest (or the pinned day)
    renderCurrent();
  }

  render();
})();
