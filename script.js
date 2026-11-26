/* ============================================================
   40 DAYS TO FORGIVENESS — Middos Challenges
   • WHATSAPP_GROUP_LINK — every WhatsApp button/link on the page opens
     a chat to this number with a pre-filled signup message. Visible
     on-page text that literally says 'Message FORGIVE to...' is a
     separate, manual instruction and is left as-is on purpose.
   • PROGRAM_START — Rosh Chodesh Elul, Aug 13 2026. Used to auto-reveal the
     "Today's Challenge" nav link once the program actually starts.
   ============================================================ */
var CONFIG = {
  WHATSAPP_GROUP_LINK: "https://wa.me/12018700229?text=" + encodeURIComponent("Hi, I'd like to sign up for 40 Days to Forgiveness"),
  PROGRAM_START:       "2026-08-13T00:00:00-04:00"
};

(function(){
  // Wire every WhatsApp button/link
  var waHref = CONFIG.WHATSAPP_GROUP_LINK;
  document.querySelectorAll("[data-wa]").forEach(function(a){
    a.setAttribute("href", waHref);
    a.setAttribute("target","_blank");
    a.setAttribute("rel","noopener");
  });

  // Build the support email link at runtime instead of leaving it as plain
  // text/mailto in the page source, so basic HTML-scraping bots don't
  // harvest it. Real visitors see/click it exactly as before.
  document.querySelectorAll(".js-email").forEach(function(a){
    var addr = "info" + "@" + "middoschallenges.com";
    var subject = a.getAttribute("data-subject");
    a.href = "mailto:" + addr + (subject ? "?subject=" + encodeURIComponent(subject) : "");
    a.textContent = addr;
  });

  // Year
  var y = document.getElementById("yr"); if(y) y.textContent = new Date().getFullYear();

  // Mobile/tablet hamburger menu — slides in as a full-height side drawer
  // with a dimmed overlay behind it; background scroll is locked while open.
  (function(){
    var burger = document.getElementById("navBurger");
    var links = document.getElementById("nav-links");
    var overlay = document.getElementById("navOverlay");
    var closeBtn = document.getElementById("navLinksClose");
    if(!burger || !links) return;

    function closeMenu(){
      links.classList.remove("is-open");
      if(overlay) overlay.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
    function toggleMenu(){
      var open = links.classList.toggle("is-open");
      if(overlay) overlay.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    }

    burger.addEventListener("click", function(e){
      e.stopPropagation();
      toggleMenu();
    });
    if(closeBtn) closeBtn.addEventListener("click", closeMenu);
    links.querySelectorAll("a").forEach(function(a){
      a.addEventListener("click", closeMenu);
    });
    document.addEventListener("click", function(e){
      if(links.classList.contains("is-open") && !links.contains(e.target)){
        closeMenu();
      }
    });
    document.addEventListener("keydown", function(e){
      if(e.key === "Escape") closeMenu();
    });
  })();

  // Challenges nav link — hidden until the program actually starts, so we
  // can deploy the (unfinished/unlinked) /challenges page early without
  // publicizing it. Reveals itself automatically at PROGRAM_START, no
  // redeploy needed.
  (function(){
    var navChallenges = document.getElementById("nav-challenges");
    if(!navChallenges) return;
    if(Date.now() >= new Date(CONFIG.PROGRAM_START).getTime()){
      navChallenges.hidden = false;
    }
  })();

  // Extra bot filter used alongside server-side checks below:
  //   Timing — real people take a second or two to read the form and type
  //   an email; bots that auto-submit instantly are blocked client-side so
  //   they never even reach the network request.
  var pageLoadedAt = Date.now();
  var MIN_FILL_TIME_MS = 1200;
  function looksLikeBot(form){
    if(Date.now() - pageLoadedAt < MIN_FILL_TIME_MS) return true;
    var hp = form.querySelector(".js-hp");
    if(hp && hp.value.trim() !== "") return true;
    return false;
  }

  // Signup forms — always submit through our own backend (/api/subscribe),
  // which runs the honeypot, disposable-domain blocklist, Tor check and rate
  // limit before anything reaches Mailchimp. The form's own action points
  // there too, so a visitor without JavaScript still gets filtered instead of
  // handed a direct line to Mailchimp. Nothing here may fall back to
  // Mailchimp's public subscribe URL: that path skips every check above, and
  // it is exactly how junk addresses were getting onto the list.
  var SUBSCRIBE_ENDPOINT = "https://raffle.40forgive.com/api/subscribe";

  // Where this visitor came from: a ?src= tag on the link they clicked, else
  // the site that referred them. Remembered for the session so it survives
  // moving between pages; the backend turns it into a "src: ..." Mailchimp tag.
  function trafficSource(){
    var src = "";
    try{
      src = new URLSearchParams(location.search).get("src") || "";
      if(!src && document.referrer){
        var host = new URL(document.referrer).hostname.replace(/^www\./, "");
        if(host !== location.hostname.replace(/^www\./, "") && !/(^|\.)(40forgive\.com|bitachonchallenge\.com)$/.test(host)) src = host;
      }
      if(src) sessionStorage.setItem("signupSource", src);
      else src = sessionStorage.getItem("signupSource") || "";
    }catch(e){}
    return src;
  }
  var SIGNUP_SOURCE = trafficSource();

  function successFor(form){
    var el = form.nextElementSibling;
    while(el && !el.classList.contains("mc-success")) el = el.nextElementSibling;
    return el;
  }
  // A small, quick confetti burst from the success check (site colors; the canvas covers the window and removes itself).
  function signupConfetti(origin){
    if(!origin) return;
    var COLORS = ["#FF9E45", "#F26E1E", "#FFB066", "#E9D5FF", "#FFE2A8", "#3C1454"];
    var cv = document.createElement("canvas");
    cv.setAttribute("aria-hidden", "true");
    cv.style.cssText = "position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:9999";
    document.body.appendChild(cv);
    var dpr = Math.min(window.devicePixelRatio || 1, 2), W = window.innerWidth, H = window.innerHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    var ctx = cv.getContext("2d"); ctx.scale(dpr, dpr);
    var r = origin.getBoundingClientRect(), ox = r.left + r.width / 2, oy = r.top + r.height / 2, parts = [];
    for(var i = 0; i < 46; i++){
      var a = -Math.PI / 2 + (Math.random() - .5) * Math.PI * 1.5, v = 4 + Math.random() * 6;
      parts.push({ x: ox, y: oy, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 2, w: 5 + Math.random() * 4, h: 7 + Math.random() * 5,
        rot: Math.random() * 6.3, vr: (Math.random() - .5) * .3, c: COLORS[i % COLORS.length], round: Math.random() < .3, flip: Math.random() * 6.3 });
    }
    var t0 = performance.now(), DUR = 1900;
    function frame(now){
      var t = now - t0, fade = t > DUR - 600 ? Math.max(0, (DUR - t) / 600) : 1;
      ctx.clearRect(0, 0, W, H);
      parts.forEach(function(p){
        p.vx *= .97; p.vy = p.vy * .97 + .22; p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.flip += .14;
        ctx.save(); ctx.globalAlpha = fade; ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.scale(1, Math.cos(p.flip));
        ctx.fillStyle = p.c;
        if(p.round){ ctx.beginPath(); ctx.arc(0, 0, p.w / 2, 0, 6.3); ctx.fill(); } else ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      if(t < DUR) requestAnimationFrame(frame); else cv.remove();
    }
    requestAnimationFrame(frame);
  }

  // So it doesn't feel jarring: the button shows "joining" dots for a moment, the form fades away, then the
  // confirmation rises in line by line with the check popping and a small confetti burst.
  // Returns an undo function (used if the signup fails).
  function showSuccess(form){
    var success = successFor(form);
    var btn = form.querySelector("button[type=submit]");
    var btnHTML = btn ? btn.innerHTML : "";
    var calm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var timers = [], failed = false;
    if(btn){
      btn.style.minWidth = btn.offsetWidth + "px";
      btn.innerHTML = '<span class="mc-dots" aria-label="Signing you up"><i></i><i></i><i></i></span>';
      btn.disabled = true;
    }
    form.classList.add("is-sending");
    timers.push(setTimeout(function(){
      form.classList.add("is-leaving");
      timers.push(setTimeout(function(){
        if(failed) return;
        form.style.display = "none";
        form.classList.remove("is-sending", "is-leaving");
        if(success){
          success.classList.remove("mc-enter"); void success.offsetWidth;
          success.classList.add("mc-enter");
          success.hidden = false;
          if(!calm) timers.push(setTimeout(function(){ signupConfetti(success.querySelector("svg")); }, 250));
        }
      }, calm ? 0 : 240));
    }, calm ? 250 : 750));
    return function(){
      failed = true;
      timers.forEach(clearTimeout);
      if(success){ success.hidden = true; success.classList.remove("mc-enter"); }
      form.style.display = "";
      form.classList.remove("is-sending", "is-leaving");
      if(btn){ btn.innerHTML = btnHTML; btn.disabled = false; btn.style.minWidth = ""; }
    };
  }
  function showError(form, message){
    var err = form.nextElementSibling;
    if(!err || !err.classList.contains("mc-error")){
      err = document.createElement("div");
      err.className = "mc-error";
      form.parentNode.insertBefore(err, form.nextSibling);
    }
    err.textContent = message;
    err.hidden = false;
  }
  function clearError(form){
    var err = form.nextElementSibling;
    if(err && err.classList.contains("mc-error")) err.hidden = true;
  }

  document.querySelectorAll("form.mc-signup").forEach(function(form){
    form.addEventListener("submit", function(event){
      event.preventDefault();
      if(looksLikeBot(form)) return; // silently drop — no spinner, no retry hint
      if(!form.checkValidity()) return;

      var emailInput = form.querySelector("input[type=email]");
      var hp = form.querySelector(".js-hp");
      clearError(form);

      // Optimistic: the backend (spam checks + Mailchimp) takes a few seconds,
      // so confirm right away and finish the request in the background.
      // keepalive lets it complete even if the visitor closes the tab. If it
      // fails, undo the confirmation and show the error.
      var undoSuccess = showSuccess(form);
      function undo(message){
        undoSuccess();
        showError(form, message);
      }

      if(window.va) window.va("event", { name: "signup", data: { program: form.getAttribute("data-program") || "seasonal", source: SIGNUP_SOURCE || "direct" } });

      fetch(SUBSCRIBE_ENDPOINT, {
        method: "POST",
        keepalive: true,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailInput.value.trim(),
          website: hp ? hp.value : "",
          program: form.getAttribute("data-program") || "seasonal",
          source: SIGNUP_SOURCE
        })
      })
        .then(function(res){ return res.json(); })
        .then(function(data){
          if(!data.ok) undo(data.error || "Something went wrong. Please try again.");
        })
        .catch(function(){
          undo("We couldn’t reach the signup server. Please try again in a moment.");
        });
    });
  });

  // Testimonials slider — pages through 2-at-a-time on wider screens,
  // 1-at-a-time on narrow screens, sliding the track by whole viewport widths.
  (function(){
    var viewport = document.querySelector(".tst-viewport");
    var track = document.querySelector(".tst-track");
    var cards = track ? track.querySelectorAll(".tcard") : [];
    if(!viewport || !track || !cards.length) return;

    var prevBtn = document.querySelector(".tst-prev");
    var nextBtn = document.querySelector(".tst-next");
    var dotsWrap = document.querySelector(".tst-dots");
    var index = 0;

    function perPage(){
      return window.matchMedia("(max-width:620px)").matches ? 1 : 3;
    }
    function pageCount(){
      return Math.ceil(cards.length / perPage());
    }
    function buildDots(){
      if(!dotsWrap) return;
      dotsWrap.innerHTML = "";
      var pages = pageCount();
      for(var i=0;i<pages;i++){
        var dot = document.createElement("button");
        dot.type = "button";
        dot.className = "tst-dot";
        dot.setAttribute("aria-label", "Go to testimonials page " + (i+1));
        dot.addEventListener("click", (function(pageIndex){
          return function(){ index = pageIndex; update(); };
        })(i));
        dotsWrap.appendChild(dot);
      }
    }
    function update(){
      var max = pageCount() - 1;
      if(index > max) index = max;
      if(index < 0) index = 0;
      var targetCard = cards[index * perPage()];
      var offset = targetCard ? targetCard.offsetLeft : 0;
      track.style.transform = "translateX(-" + offset + "px)";
      if(prevBtn) prevBtn.disabled = index === 0;
      if(nextBtn) nextBtn.disabled = index === max;
      if(dotsWrap){
        Array.prototype.forEach.call(dotsWrap.children, function(dot, i){
          dot.classList.toggle("is-active", i === index);
        });
      }
    }
    if(prevBtn) prevBtn.addEventListener("click", function(){ index--; update(); });
    if(nextBtn) nextBtn.addEventListener("click", function(){ index++; update(); });

    var resizeTimer;
    window.addEventListener("resize", function(){
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function(){ buildDots(); update(); }, 150);
    });

    buildDots();
    update();
  })();

  // Share your story modal — anonymous, no name/email collected. Posts to
  // the raffle site's standalone /api/story endpoint.
  (function(){
    var openBtn = document.getElementById("shareStoryBtn");
    var modal = document.getElementById("storyModal");
    if(!openBtn || !modal) return;

    var form = document.getElementById("storyForm");
    var textarea = document.getElementById("storyText");
    var errorEl = document.getElementById("storyError");
    var successEl = document.getElementById("storySuccess");
    var STORY_ENDPOINT = "https://raffle.40forgive.com/api/story";

    function openModal(){
      modal.hidden = false;
      form.hidden = false;
      successEl.hidden = true;
      errorEl.hidden = true;
      textarea.value = "";
      setTimeout(function(){ textarea.focus(); }, 50);
    }
    function closeModal(){ modal.hidden = true; }

    openBtn.addEventListener("click", openModal);
    modal.querySelectorAll("[data-story-close]").forEach(function(el){
      el.addEventListener("click", closeModal);
    });
    document.addEventListener("keydown", function(e){
      if(e.key === "Escape" && !modal.hidden) closeModal();
    });

    form.addEventListener("submit", function(e){
      e.preventDefault();
      errorEl.hidden = true;
      var story = textarea.value.trim();
      if(!story){
        errorEl.textContent = "Please write something before submitting.";
        errorEl.hidden = false;
        return;
      }
      var btn = form.querySelector("button[type=submit]");
      btn.disabled = true;
      fetch(STORY_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ story: story })
      })
        .then(function(res){ return res.json().then(function(d){ return { status: res.status, data: d }; }); })
        .then(function(r){
          btn.disabled = false;
          if(!r.data.ok){
            errorEl.textContent = r.data.error || "Something went wrong. Please try again.";
            errorEl.hidden = false;
            return;
          }
          form.hidden = true;
          successEl.hidden = false;
          setTimeout(closeModal, 2200);
        })
        .catch(function(){
          btn.disabled = false;
          errorEl.textContent = "Something went wrong. Please try again.";
          errorEl.hidden = false;
        });
    });
  })();

  // Contact form — posts to the raffle site's standalone /api/contact endpoint.
  (function(){
    var form = document.getElementById("contactForm");
    if(!form) return;

    var nameInput = document.getElementById("contactName");
    var emailInput = document.getElementById("contactEmail");
    var messageInput = document.getElementById("contactMessage");
    var websiteInput = document.getElementById("contactWebsite");
    var errorEl = document.getElementById("contactError");
    var successEl = document.getElementById("contactSuccess");
    var CONTACT_ENDPOINT = "https://raffle.40forgive.com/api/contact";

    form.addEventListener("submit", function(e){
      e.preventDefault();
      errorEl.hidden = true;
      // Same instant-submit bot filter as the Mailchimp forms above.
      if(Date.now() - pageLoadedAt < MIN_FILL_TIME_MS) return;
      var email = emailInput.value.trim();
      var message = messageInput.value.trim();
      if(!email || !message){
        errorEl.textContent = "Please fill in your email and message.";
        errorEl.hidden = false;
        return;
      }
      var btn = form.querySelector("button[type=submit]");
      btn.disabled = true;
      fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: nameInput.value.trim(), email: email, message: message, website: websiteInput.value })
      })
        .then(function(res){ return res.json().then(function(d){ return { status: res.status, data: d }; }); })
        .then(function(r){
          btn.disabled = false;
          if(!r.data.ok){
            errorEl.textContent = r.data.error || "Something went wrong. Please try again.";
            errorEl.hidden = false;
            return;
          }
          form.hidden = true;
          successEl.hidden = false;
        })
        .catch(function(){
          btn.disabled = false;
          errorEl.textContent = "Something went wrong. Please try again.";
          errorEl.hidden = false;
        });
    });
  })();

  // Scroll reveal
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var els = document.querySelectorAll(".reveal");
  if(reduce || !("IntersectionObserver" in window)){
    els.forEach(function(e){ e.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold:.12, rootMargin:"0px 0px -8% 0px" });
    els.forEach(function(e){ io.observe(e); });
  }
})();
