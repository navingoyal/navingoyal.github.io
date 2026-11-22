// Turns the "name [at] domain [dot] com" text into a mailto link. The address never appears
// in the HTML in one piece, which stops simple scrapers; without JavaScript the text stays readable.
(function () {
  document.querySelectorAll(".email[data-u][data-d]").forEach(function (el) {
    var addr = el.dataset.u + "@" + el.dataset.d;
    var a = document.createElement("a");
    a.href = "mailto:" + addr;
    a.textContent = addr;
    el.textContent = "";
    el.appendChild(a);
  });
})();
