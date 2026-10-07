(function () {
  "use strict";

  var data = window.ELECTION_DATA || {};
  var districtSelect = document.getElementById("district-select");
  var status = document.getElementById("selection-status");

  function setText(id, value) {
    document.getElementById(id).textContent = value;
  }

  function makeElement(tag, className, text) {
    var element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  }

  function renderLocations(locations) {
    var list = document.getElementById("locations-list");
    list.replaceChildren();
    locations.forEach(function (location) {
      var item = makeElement("li", "location");
      var heading = makeElement("h3", "location-name", location.name);
      var address = makeElement("p", "location-address", location.address);
      var hours = makeElement("p", "location-hours", location.hours);
      item.append(heading, address, hours);
      list.append(item);
    });
  }

  function renderBallot(contests) {
    var list = document.getElementById("ballot-list");
    list.replaceChildren();
    contests.forEach(function (contest) {
      var section = makeElement("section", "contest");
      var heading = makeElement("h3", "contest-name", contest.contest);
      var candidates = makeElement("ul", "candidate-list");
      contest.candidates.forEach(function (candidate) {
        candidates.append(makeElement("li", "", candidate));
      });
      section.append(heading, candidates);
      list.append(section);
    });
  }

  function renderList(id, values, className) {
    var list = document.getElementById(id);
    list.replaceChildren();
    values.forEach(function (value) {
      var item = makeElement("li", className);
      if (typeof value === "string") {
        item.textContent = value;
      } else {
        var link = makeElement("a", "resource-link", value.label);
        link.href = value.url;
        link.rel = "noreferrer";
        item.append(link);
      }
      list.append(item);
    });
  }

  function selectDistrict(id, moveFocus) {
    if (!Object.prototype.hasOwnProperty.call(data, id)) return;
    var district = data[id];
    districtSelect.value = id;
    window.location.hash = id;

    document.querySelectorAll(".district").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.dataset.district === id));
    });

    setText("district-name", district.name);
    setText("district-description", district.description);
    setText("election-name", district.election);
    setText("election-date", district.date);
    setText("registration-date", district.earlyVoting);
    setText("polling-note", district.pollingNote);
    setText("ballot-note", district.ballotNote);
    renderLocations(district.locations);
    renderBallot(district.ballot);
    renderList("issues-list", district.issues, "issue");
    renderList("resources-list", district.resources, "resource");
    status.textContent = district.name + " information is now displayed.";
    if (moveFocus) document.getElementById("district-name").focus();
  }

  districtSelect.addEventListener("change", function () { selectDistrict(districtSelect.value, true); });
  document.querySelectorAll(".district").forEach(function (button) {
    button.addEventListener("click", function () { selectDistrict(button.dataset.district, true); });
  });
  window.addEventListener("hashchange", function () {
    var id = window.location.hash.slice(1);
    if (Object.prototype.hasOwnProperty.call(data, id) && districtSelect.value !== id) selectDistrict(id, false);
  });

  var initialId = window.location.hash.slice(1);
  selectDistrict(Object.prototype.hasOwnProperty.call(data, initialId) ? initialId : districtSelect.value, false);
}());
