(function () {
  /* =========================================================================
     40 DAYS TO FORGIVENESS — daily challenges page

     PLACEHOLDER DATA — do not treat SCHEDULE below as final. Waiting on the
     authoritative send-date calendar + real challenge text before this goes
     live. Dates here are my best-effort reconstruction and may be off.

     Model: each SCHEDULE entry = ONE challenge = ONE raffle ticket, even
     when it spans multiple calendar days (e.g. a Friday challenge that
     covers Friday+Shabbos, or Friday+Shabbos+Sunday before Rosh Hashanah).
     `days` is display-only (drives the "Day N" / "Days N–M" badge) — it
     does NOT create multiple raffle buttons. `ticket` is the single
     challenge_id used for that entry's raffle link.

     Unlocks at MIDNIGHT US-EASTERN on `release`. Preview any date with
     ?date=YYYY-MM-DD.
     ========================================================================= */

  // ---- Release schedule: one entry per challenge/ticket ----
  // The raffle's challenge_id is day-01..day-40, matching the FIRST day
  // number in `days` (i.e. the existing Mailchimp link scheme) — NOT a
  // separate sequential ticket count. A Friday entry like days:[2,3] only
  // ever links to day-02; day-03 has no ticket of its own.
  var SCHEDULE = [
    { release: "2026-08-13", days: [1] },
    { release: "2026-08-14", days: [2, 3] },
    { release: "2026-08-16", days: [4] },
    { release: "2026-08-17", days: [5] },
    { release: "2026-08-18", days: [6] },
    { release: "2026-08-19", days: [7] },
    { release: "2026-08-20", days: [8] },
    { release: "2026-08-21", days: [9, 10] }
  ];

  // ---- Challenge content. SAMPLE placeholders — real 40 to be dropped in later.
  //      Keyed by the entry's first day number (i.e. entry.days[0], same
  //      number used in the raffle challenge_id). Each entry:
  //        title    — challenge title
  //        insight  — array of paragraph strings (~2 paragraphs, ~3 sentences each)
  //        task     — the one-sentence "your challenge for today" line
  //        examples — array of example strings (rendered as bullets)
  //      Missing = shows a "coming soon" placeholder.
  var CONTENT = {
    1: {
      title: "Decide to begin",
      insight: [
        "Forgiveness rarely starts with a feeling — it starts with a decision. Long before your heart catches up, your will can lead the way. That's not dishonest; it's how real change begins.",
        "Today isn't about resolving anything. It's about opening the door a crack, and being willing to let a little light in."
      ],
      task: "Choose one person you're holding something against, and simply say to yourself, \"I am willing to forgive them.\"",
      examples: [
        "Write their name down and read that sentence out loud.",
        "Say it quietly to yourself before you go to sleep tonight."
      ]
    },
    2: {
      title: "Name the hurt, and give the benefit of the doubt",
      insight: [
        "It's hard to release something you haven't clearly named. Vague resentment lingers longer than a hurt you've actually looked in the eye. So today we name it — plainly, without excusing it and without exaggerating it.",
        "Then comes the harder part: searching for a reason, any reason, that the person may not have meant the harm the way it landed on you. This doesn't undo what happened. It just loosens its grip."
      ],
      task: "Identify one specific hurt, then write down one possible reason the other person didn't intend it the way you experienced it.",
      examples: [
        "\"Maybe they were overwhelmed and didn't realize how it sounded.\"",
        "\"Maybe they were repeating a pattern they never learned to break.\""
      ]
    },
    4: {
      title: "Separate the person from the act",
      insight: [
        "One of the quiet traps of resentment is letting a single moment define an entire person. Someone can do something hurtful and still be more than that moment — carrying their own struggles, history, and growth we may never fully see.",
        "Separating the person from the act doesn't excuse what happened. It just makes room for the fact that people are usually more complicated than the worst thing they've done."
      ],
      task: "Bring the person to mind and try to see them as a whole person — not just through the lens of what they did to you.",
      examples: [
        "Think of one good quality they have, even a small one.",
        "Picture them as a child, before they'd learned any of their harder edges."
      ]
    },
    5: {
      title: "Remember being forgiven",
      insight: [
        "It's easier to extend forgiveness when we remember how it felt to receive it. Almost all of us have been on the other side — held onto grace we didn't quite earn, given a second chance we needed.",
        "That memory isn't just comforting. It's instructive. It reminds us that people can be more than their mistakes, and that forgiveness given to us didn't cost the giver nothing."
      ],
      task: "Recall one specific time someone forgave you, and let that memory shape how you see the person you're working on today.",
      examples: [
        "A parent, friend, or spouse who let something go without holding it over you.",
        "A time Hashem forgave you for something you didn't think you deserved forgiveness for."
      ]
    },
    6: {
      title: "One small kindness",
      insight: [
        "Forgiveness isn't only internal work — sometimes it needs a small outward gesture to become real. Not a grand reconciliation, just one quiet act that says, \"I'm not holding this against you in this moment.\"",
        "The kindness doesn't have to be seen or acknowledged. Its purpose is to shift something in you, not to settle the score."
      ],
      task: "Do one small, quiet act of goodwill toward the person you're working on forgiving today.",
      examples: [
        "Say a silent bracha or tefillah on their behalf.",
        "Send a warm, low-key text — even just \"thinking of you\" — with no agenda attached."
      ]
    },
    7: {
      title: "Let go of being right",
      insight: [
        "Resentment often clings to a scorecard — who was right, who was wrong, who owes whom an apology. As long as we're keeping score, we're still in the argument, even if it happened years ago.",
        "Letting go of being right doesn't mean deciding you were wrong. It means deciding the scorecard itself isn't worth carrying anymore."
      ],
      task: "Notice one place you're still keeping score with this person, and consciously set it down for today.",
      examples: [
        "Catch yourself mentally rehearsing \"what I should have said\" — and stop mid-thought.",
        "Silently say, \"I don't need to win this one anymore.\""
      ]
    },
    8: {
      title: "Speak well",
      insight: [
        "What we say about someone shapes what we feel about them. Every time we retell the hurtful story, we relive it and reinforce it. Speaking well, even in small ways, quietly rewires that pattern.",
        "This isn't about pretending everything is fine. It's about refusing to let one relationship be defined only by its worst moment."
      ],
      task: "Find one genuinely positive thing you can say — or simply think — about this person today.",
      examples: [
        "Mention something they're good at, the next time their name comes up in conversation.",
        "Silently acknowledge one thing you appreciate about them, even if you never say it aloud."
      ]
    }
  };

  var RAFFLE_BASE = "https://raffle.40forgive.com/claim.html?challenge=day-";
  // Same Mailchimp endpoint + honeypot field used by the homepage forms.
  var MC_ACTION = "https://middoschallenges.us12.list-manage.com/subscribe/post?u=3898a245ce153bd465b8b3594&id=5bd32e5a8d&f_id=008056e1f0";
  var MC_HONEYPOT_NAME = "b_3898a245ce153bd465b8b3594_5bd32e5a8d";

  // ---- Date helpers ----------------------------------------------------------
  function easternToday() {
    var override = new URLSearchParams(location.search).get("date");
    if (override) return override;
    // en-CA renders as YYYY-MM-DD; timeZone pins it to Eastern for every visitor.
    return new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York" }).format(new Date());
  }
  function pad2(n) { return n < 10 ? "0" + n : "" + n; }
  function prettyDate(iso) {
    var p = iso.split("-");
    var d = new Date(Date.UTC(+p[0], +p[1] - 1, +p[2]));
    return d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", timeZone: "UTC" });
  }
  function dayLabel(days) {
    return days.length > 1 ? "Days " + days[0] + "–" + days[days.length - 1] : "Day " + days[0];
  }
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
    var examples = c.examples.map(function (ex) { return "<li>" + ex + "</li>"; }).join("");

    return '' +
      '<article class="ch-card" id="' + anchor + '">' +
        '<div class="ch-meta">' +
          '<span class="ch-badge">' + dayLabel(entry.days) + '</span>' +
          '<span class="ch-date">' + prettyDate(entry.release) + '</span>' +
        '</div>' +
        '<h3 class="ch-title">' + esc(c.title) + '</h3>' +
        '<div class="ch-text">' + insight + '</div>' +
        '<div class="ch-task-box">' +
          '<p class="ch-task-label">Your challenge for today is:</p>' +
          '<p class="ch-task">' + esc(c.task) + '</p>' +
          '<p class="ch-ex-label">For example:</p>' +
          '<ul class="ch-examples">' + examples + '</ul>' +
        '</div>' +
        '<p class="ch-complete-q">Did you complete this challenge?</p>' +
        '<a class="btn btn-orange ch-btn" href="' + RAFFLE_BASE + pad2(ticket) + '">' +
          'Get your raffle ticket →' +
        '</a>' +
      '</article>';
  }

  // Small, greyed-out "locked" strip — used both pre-launch and for the
  // next-day teaser. Real WhatsApp button (wired by script.js via data-wa)
  // and a real inline Mailchimp signup field (wired by script.js's
  // form.mc-signup handler), matching the homepage forms exactly.
  function gateHTML(badgeText, titleText) {
    return '' +
      '<div class="ch-gate">' +
        '<span class="ch-gate-badge">🔒 ' + badgeText + '</span>' +
        '<div class="ch-gate-title">' + titleText + '</div>' +
        '<p class="ch-gate-sub">Get it the moment it drops — join by WhatsApp or email.</p>' +
        '<div class="ch-gate-cta">' +
          '<a class="btn btn-wa js-wa" href="#" data-wa>' +
            '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.03c-.24.68-1.42 1.32-1.95 1.36-.5.05-.5.41-3.15-.66-2.65-1.07-4.3-3.77-4.43-3.95-.13-.18-1.06-1.41-1.06-2.69s.67-1.91.91-2.17c.24-.26.53-.33.7-.33.18 0 .35 0 .5.01.16.01.38-.06.59.45.24.56.79 1.94.86 2.08.07.14.12.31.02.49-.09.18-.14.29-.28.45-.14.16-.29.36-.42.48-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.18-.21.7-.81.89-1.09.18-.28.37-.23.61-.14.25.09 1.58.75 1.85.89.28.14.46.21.53.32.07.12.07.65-.17 1.33z"/></svg>' +
            'Join on WhatsApp' +
          '</a>' +
          '<form id="mc-form-gate" class="signup mc-signup ch-gate-form" action="' + MC_ACTION + '" method="post" target="_blank">' +
            '<input type="email" name="EMAIL" required placeholder="Enter your email address" aria-label="Email address">' +
            '<button class="btn btn-orange" type="submit"><span class="btxt">Subscribe</span></button>' +
            '<div class="visually-hidden-block" aria-hidden="true"><input type="text" name="' + MC_HONEYPOT_NAME + '" tabindex="-1" value=""><input type="hidden" name="tags" value="3605477"></div>' +
          '</form>' +
          '<div class="mc-success ch-gate-success" hidden>' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>' +
            '<span>You’re in!</span>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function lockedHTML(nextEntry) {
    return gateHTML("Coming next", dayLabel(nextEntry.days) + " unlocks " + prettyDate(nextEntry.release));
  }

  function prelaunchHTML(firstEntry) {
    return gateHTML("Starting soon", "The 40 Days begin " + prettyDate(firstEntry.release));
  }

  // ---- Build the page --------------------------------------------------------
  function render() {
    var today = easternToday();
    var released = SCHEDULE.filter(function (e) { return e.release <= today; });
    var upcoming = SCHEDULE.filter(function (e) { return e.release > today; });
    var next = upcoming[0];

    var out = "";

    if (released.length === 0) {
      // Before the program starts.
      out += next ? prelaunchHTML(next) : "";
    } else {
      // Locked teaser for the next day (if any remain).
      if (next) out += lockedHTML(next);
      // Released challenges, newest first.
      released.slice().reverse().forEach(function (e) { out += cardHTML(e); });
    }

    document.getElementById("ch-list").innerHTML = out;

    // If linked with a #day-N anchor, scroll to it.
    if (location.hash) {
      var el = document.querySelector(location.hash);
      if (el) el.scrollIntoView();
    }
  }

  render();
})();
