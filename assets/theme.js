// Background toggle (dark chalkboard <-> light). Optional: without JavaScript the page stays dark.
// The saved choice is applied by a one-line script in each page's <head>, before the page is drawn.
// The button's sun/moon icons are switched by CSS; here we keep its accessible label in step.
(function () {
  var root = document.documentElement, btn = document.querySelector(".theme-toggle");
  if (!btn) return;
  function render() {
    var label = root.dataset.theme === "light" ? "Switch to dark background" : "Switch to light background";
    btn.setAttribute("aria-label", label);
    btn.title = label;
  }
  btn.addEventListener("click", function () {
    var light = root.dataset.theme !== "light";
    if (light) root.dataset.theme = "light"; else delete root.dataset.theme;
    try { localStorage.setItem("theme", light ? "light" : "dark"); } catch (e) {}
    render();
  });
  render();
})();
