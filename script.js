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

  // Mailchimp signup forms — submit to our own backend (/api/subscribe)
  // instead of straight to Mailchimp's public endpoint, so the honeypot,
  // disposable-domain blocklist, and rate limit actually mean something: a
  // bot that skips this page and POSTs directly to Mailchimp's URL can't
  // reach any of those checks, since they never ran. Routing through our
  // own server first closes that gap. Falls back to the original direct
  // Mailchimp submission (via the hidden iframe) if our backend is
  // unreachable, so a real signup never gets stuck.
  var SUBSCRIBE_ENDPOINT = "https://raffle.40forgive.com/api/subscribe";
  var mcFrame = document.getElementById("mc-embed-frame");
  var pendingFallbackForm = null;

  function showSuccess(form){
    var success = form.nextElementSibling;
    if(success && success.classList.contains("mc-success")){
      form.style.display = "none";
      success.hidden = false;
    }
  }
  function fallbackToDirectMailchimp(form){
    pendingFallbackForm = form;
    form.submit();
  }
  if(mcFrame){
    mcFrame.addEventListener("load", function(){
      if(!pendingFallbackForm) return;
      var form = pendingFallbackForm; pendingFallbackForm = null;
      form.classList.remove("is-loading");
      showSuccess(form);
    });
  }

  document.querySelectorAll("form.mc-signup").forEach(function(form){
    form.target = "mc-embed-frame";
    form.addEventListener("submit", function(event){
      event.preventDefault();
      if(looksLikeBot(form)) return; // silently drop — no spinner, no fallback
      if(!form.checkValidity()) return;

      var emailInput = form.querySelector("input[type=email]");
      var hp = form.querySelector(".js-hp");
      form.classList.add("is-loading");

      fetch(SUBSCRIBE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailInput.value.trim(), website: hp ? hp.value : "" })
      })
        .then(function(res){ return res.json(); })
        .then(function(data){
          if(data.ok){
            form.classList.remove("is-loading");
            showSuccess(form);
          } else {
            fallbackToDirectMailchimp(form); // our backend rejected it for a real reason
          }
        })
        .catch(function(){
          fallbackToDirectMailchimp(form); // network/backend failure
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
