/******/ (() => { // webpackBootstrap
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
function setTheme(theme) {
  document.documentElement.setAttribute("data-bs-theme", theme);
  localStorage.setItem("theme", theme);
  themeIcon.className = theme === "dark" ? "bi bi-moon-fill" : "bi bi-sun-fill";
}
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-bs-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
}
themeToggle.addEventListener("click", toggleTheme);
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "auto";
  if (savedTheme === "auto") {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  } else {
    setTheme(savedTheme);
  }
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map