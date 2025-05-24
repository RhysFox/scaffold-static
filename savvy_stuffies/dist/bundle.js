/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (() => {

eval("// Bootstrap 5 Theme Switcher\ndocument.addEventListener('DOMContentLoaded', function () {\n  // Apply saved theme\n  const savedTheme = localStorage.getItem('theme');\n  if (savedTheme === 'dark') {\n    document.body.classList.add('dark-theme');\n    updateThemeIcon(true);\n  }\n\n  // Theme toggle functionality\n  const themeToggle = document.getElementById('theme-toggle');\n  if (themeToggle) {\n    themeToggle.addEventListener('click', function () {\n      document.body.classList.toggle('dark-theme');\n      const isDarkTheme = document.body.classList.contains('dark-theme');\n      localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');\n      updateThemeIcon(isDarkTheme);\n    });\n  }\n\n  // Custom amount field toggle for donation form\n  const amountCustom = document.getElementById('amountCustom');\n  const customAmountField = document.getElementById('customAmountField');\n  if (amountCustom && customAmountField) {\n    amountCustom.addEventListener('change', function () {\n      if (this.checked) {\n        customAmountField.style.display = 'block';\n      } else {\n        customAmountField.style.display = 'none';\n      }\n    });\n\n    // Hide custom amount field when other amounts are selected\n    const otherAmounts = document.querySelectorAll('input[name=\"donationAmount\"]:not(#amountCustom)');\n    otherAmounts.forEach(function (radio) {\n      radio.addEventListener('change', function () {\n        customAmountField.style.display = 'none';\n      });\n    });\n  }\n});\n\n// Function to update theme icon\nfunction updateThemeIcon(isDarkTheme) {\n  const themeIcon = document.getElementById('theme-icon');\n  if (themeIcon) {\n    if (isDarkTheme) {\n      themeIcon.classList.remove('bi-moon');\n      themeIcon.classList.add('bi-sun');\n    } else {\n      themeIcon.classList.remove('bi-sun');\n      themeIcon.classList.add('bi-moon');\n    }\n  }\n}\n;\n\n//# sourceURL=webpack://savvy_stuffies/./js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.js"]();
/******/ 	
/******/ })()
;