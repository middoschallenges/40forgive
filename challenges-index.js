(function () {
  var D = window.ChallengesData;
  var SCHEDULE = D.SCHEDULE;
  var CONTENT = D.CONTENT;
  var pad2 = D.pad2;
  var dayLabel = D.dayLabel;
  var easternToday = D.easternToday;

  function rowHTML(entry, released) {
    var ticket = entry.days[0];
    var label = dayLabel(entry.days);

    if (released) {
      var title = (CONTENT[ticket] && CONTENT[ticket].title) || "";
      return '' +
        '<a class="ch-idx-row" href="/challenges/' + pad2(ticket) + '">' +
          '<span class="ch-idx-day">' + label + '</span>' +
          '<span class="ch-idx-title">' + title + '</span>' +
          '<span class="ch-idx-arrow">→</span>' +
        '</a>';
    }

    return '' +
      '<div class="ch-idx-row ch-idx-locked">' +
        '<span class="ch-idx-day">' + label + '</span>' +
        '<span class="ch-idx-title">Coming soon</span>' +
      '</div>';
  }

  function render() {
    var today = easternToday();
    var rows = SCHEDULE.map(function (entry) {
      return rowHTML(entry, entry.release <= today);
    }).join("");
    document.getElementById("ch-idx-list").innerHTML = '<div class="ch-idx-wrap">' + rows + '</div>';
  }

  render();
})();
