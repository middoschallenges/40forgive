(function () {
  var D = window.ChallengesData;

  var rows = D.DAYS.map(function (c) {
    return '' +
      '<a class="ch-idx-row" href="/challenges/' + c.day + '">' +
        '<span class="ch-idx-day">Day ' + c.day + '</span>' +
        '<span class="ch-idx-title">' + D.esc(c.title) + '</span>' +
        '<span class="ch-idx-arrow">→</span>' +
      '</a>';
  }).join("");

  document.getElementById("ch-idx-list").innerHTML = '<div class="ch-idx-wrap">' + rows + '</div>';
})();
