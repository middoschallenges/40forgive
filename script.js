/* ============================================================
   40 DAYS TO FORGIVENESS — Middos Challenges
   • WHATSAPP_NUMBER / WHATSAPP_TEXT — matches the link you gave:
     api.whatsapp.com/send?phone=12018700229&text=Forgive
   • PROGRAM_START — countdown target: Rosh Chodesh Elul, Aug 13 2026.
   ============================================================ */
var CONFIG = {
  WHATSAPP_NUMBER: "12018700229",
  WHATSAPP_TEXT:   "Forgive",
  PROGRAM_START:   "2026-08-13T00:00:00-04:00"
};

(function(){
  // Wire every WhatsApp button/link
  var waHref = "https://wa.me/" + CONFIG.WHATSAPP_NUMBER + "?text=" + encodeURIComponent(CONFIG.WHATSAPP_TEXT);
  document.querySelectorAll("[data-wa]").forEach(function(a){
    a.setAttribute("href", waHref);
    a.setAttribute("target","_blank");
    a.setAttribute("rel","noopener");
  });

  // Year
  var y = document.getElementById("yr"); if(y) y.textContent = new Date().getFullYear();

  // Countdown
  (function(){
    var clock = document.getElementById("clock");
    if(!clock) return;
    var target = new Date(CONFIG.PROGRAM_START).getTime();
    var elD=document.getElementById("cd-d"),elH=document.getElementById("cd-h"),
        elM=document.getElementById("cd-m"),elS=document.getElementById("cd-s");
    function pad(n){return (n<10?"0":"")+n;}
    function tick(){
      var diff = target - Date.now();
      if(isNaN(target)){ return; }
      if(diff<=0){
        clock.innerHTML = '<div class="cd-live">The journey has begun — you can still join and catch up.</div>';
        clearInterval(iv); return;
      }
      var s=Math.floor(diff/1000);
      elD.textContent = Math.floor(s/86400);
      elH.textContent = pad(Math.floor(s%86400/3600));
      elM.textContent = pad(Math.floor(s%3600/60));
      elS.textContent = pad(s%60);
    }
    tick(); var iv=setInterval(tick,1000);
  })();

  // Extra bot filter: real people take at least a second or two to read
  // the form and type an email. Bots that auto-submit instantly get
  // quietly blocked here. This is on top of Mailchimp's own honeypot
  // field and double opt-in — do not remove either of those.
  var pageLoadedAt = Date.now();
  var MIN_FILL_TIME_MS = 1200;
  document.querySelectorAll("form.mc-signup").forEach(function(form){
    form.addEventListener("submit", function(event){
      if(Date.now() - pageLoadedAt < MIN_FILL_TIME_MS){
        event.preventDefault();
      }
    });
  });

  // Mailchimp signup forms — submit invisibly via hidden iframe so visitors
  // stay on this page; falls back to opening a new tab if JS doesn't run.
  (function(){
    var frame = document.getElementById("mc-embed-frame");
    if(!frame) return;
    var pendingForm = null;

    document.querySelectorAll("form.mc-signup").forEach(function(form){
      form.target = "mc-embed-frame";
      form.addEventListener("submit", function(){
        if(!form.checkValidity()) return;
        pendingForm = form;
        form.classList.add("is-loading");
      });
    });

    frame.addEventListener("load", function(){
      if(!pendingForm) return;
      var form = pendingForm; pendingForm = null;
      form.classList.remove("is-loading");
      var success = form.nextElementSibling;
      if(success && success.classList.contains("mc-success")){
        form.style.display = "none";
        success.hidden = false;
      }
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
