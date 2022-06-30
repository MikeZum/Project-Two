/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calculator */ \"./modules/calculator.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n\n\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('28 june 2022');\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('.portfolio-content', '.portfolio-item', '.portfolio-dots');\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price) => {\r\n\r\n    const clacBlock = document.querySelector('.calc-block');\r\n    const calcType = document.querySelector('.calc-type');\r\n    const calcSquare = document.querySelector('.calc-square');\r\n    const calcCount = document.querySelector('.calc-count');\r\n    const calcDay = document.querySelector('.calc-day');\r\n    const total = document.getElementById('total');\r\n\r\n    const countCalc = () => {\r\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n        const calcSquareValue = calcSquare.value;\r\n\r\n        let totalValue = 0;\r\n        let calcCountValue = 1;\r\n        let calcDayValue = 1;\r\n\r\n        if (calcCount.value > 1) {\r\n            calcCountValue += +calcCount.value / 10;\r\n        }\r\n\r\n        if (calcDay.value && calcDay.value < 5) {\r\n            calcDayValue = 2;\r\n        } else if (calcDay.value && calcDay.value < 10) {\r\n            calcDayValue = 1.5;\r\n        }\r\n\r\n        if (calcType.value && calcSquare.value) {\r\n            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n        } else {\r\n            totalValue = 0;\r\n        }\r\n\r\n        total.textContent = totalValue;\r\n\r\n    };\r\n\r\n    clacBlock.addEventListener('input', (e) => {\r\n\r\n        if (e.target === calcType || e.target === calcSquare ||\r\n            e.target === calcCount || e.target === calcDay) {\r\n            countCalc();\r\n        }\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/calculator.js":
/*!*******************************!*\
  !*** ./modules/calculator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculator = () => {\n    const calcSquare = document.querySelector(\".calc-square\");\n    const calcCount = document.querySelector(\".calc-count\");\n    const calcDay = document.querySelector(\".calc-day\");\n    const mainInput = document.querySelectorAll(\".form-name\")[0];\n    const modalInput = document.querySelectorAll(\".form-name\")[1];\n    const footerInput = document.getElementById(\"form2-name\");\n    const messageInput = document.getElementById(\"form2-message\");\n    const emailInputs = document.querySelectorAll(\".form-email\");\n    const phoneInputs = document.querySelectorAll(\".form-phone\");\n  \n    const numberCheck = (input) => {\n      input.addEventListener(\"input\", (e) => {\n        e.target.value = e.target.value.replace(/\\D+/, \"\");\n      });\n    };\n  \n    const textCheck = (input) => {\n      input.addEventListener(\"input\", (e) => {\n        e.target.value = e.target.value.replace(/[^а-яё\\-\\s]/i, \"\");\n      });\n    };\n  \n    const mailCheck = (input) => {\n      input.forEach((item) => {\n        item.addEventListener(\"input\", () => {\n          item.value = item.value.replace(/[^a-z\\^0-9\\@\\-\\_\\.\\!\\~\\*\\']/i, \"\");\n        });\n      });\n    };\n  \n    const phoneCheck = (input) => {\n      input.forEach((item) => {\n        item.addEventListener(\"input\", () => {\n          item.value = item.value.replace(/[^0-9\\-\\(\\)]/i, \"\");\n        });\n      });\n    };\n  \n    numberCheck(calcSquare);\n    numberCheck(calcCount);\n    numberCheck(calcDay);\n    textCheck(mainInput);\n    textCheck(modalInput);\n    textCheck(footerInput);\n    textCheck(messageInput);\n    mailCheck(emailInputs);\n    phoneCheck(phoneInputs);\n  };\n  \n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack:///./modules/calculator.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n    const menu = document.querySelector('menu');\n    const body = document.querySelector('body');\n\n    body.addEventListener('click', (e) => {\n        if (e.target.closest('.menu')) {\n            menu.classList.add('active-menu');\n        } else if (!e.target.closest('menu') || e.target.classList.contains('close-btn') || e.target.closest('a')) {\n            menu.classList.remove('active-menu');\n        }\n    });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\n    const modal = document.querySelector('.popup');\n    const buttons = document.querySelectorAll('.popup-btn');\n    const modalWindow = modal.querySelector('.popup-content');\n    let count = 0;\n    let idInterval;\n\n    const modalAnimation = () => {\n        count++;\n        idInterval = requestAnimationFrame(modalAnimation);\n        if (count < 47) {\n            modalWindow.style.left = count * 15 + 'px';\n        }\n    };\n\n    buttons.forEach(btn => {\n        btn.addEventListener('click', () => {\n            if (document.body.clientWidth > 768) {\n                modalWindow.style.left = '0px';\n                modal.style.display = 'block';\n                idInterval = requestAnimationFrame(modalAnimation);\n            } else {\n                modal.style.display = 'block';\n            }\n        });\n    });\n\n    modal.addEventListener('click', (e) => {\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\n            count = 0;\n            cancelAnimationFrame(idInterval);\n            modal.style.display = 'none';\n        }\n    });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = (slider, sliderItem, dotsParent) => {\n\n    const sliderWrap = () => {\n        const sliderBlock = document.querySelector(slider);\n        const slides = document.querySelectorAll(sliderItem);\n        const dotsBlock = document.querySelector(dotsParent);\n        const timeInterval = 2000;\n\n        let dots;\n        let currentSlide = 0;\n        let interval;\n\n        const addDots = () => {\n            slides.forEach(() => {\n                dotsBlock.insertAdjacentHTML('beforeend',\n                    `<li class='dot'></li>`);\n            });\n            dots = document.querySelectorAll('.dot');\n            dots[0].classList.add('dot-active');\n        };\n\n        const prevSlide = (elems, index, strClass) => {\n            elems[index].classList.remove(strClass);\n        };\n\n        const nextSlide = (elems, index, strClass) => {\n            elems[index].classList.add(strClass);\n        };\n\n        const autoSlide = () => {\n            prevSlide(slides, currentSlide, 'portfolio-item-active');\n            prevSlide(dots, currentSlide, 'dot-active');\n            currentSlide++;\n\n            if (currentSlide >= slides.length) {\n                currentSlide = 0;\n            }\n\n            nextSlide(slides, currentSlide, 'portfolio-item-active');\n            nextSlide(dots, currentSlide, 'dot-active');\n        };\n\n        const startSlide = (timer = 1500) => {\n            interval = setInterval(autoSlide, timer);\n        };\n\n        const stopSlide = () => {\n            clearInterval(interval);\n        };\n\n        sliderBlock.addEventListener('click', (e) => {\n            e.preventDefault();\n\n            if (!e.target.matches('.dot, .portfolio-btn')) {\n                return;\n            }\n\n            prevSlide(slides, currentSlide, 'portfolio-item-active');\n            prevSlide(dots, currentSlide, 'dot-active');\n\n            if (e.target.matches('#arrow-right')) {\n                currentSlide++;\n            } else if (e.target.matches('#arrow-left')) {\n                currentSlide--;\n            } else if (e.target.classList.contains('dot')) {\n                dots.forEach((dot, index) => {\n                    if (e.target === dot) {\n                        currentSlide = index;\n                    }\n                });\n            }\n\n            if (currentSlide >= slides.length) {\n                currentSlide = 0;\n            }\n\n            if (currentSlide < 0) {\n                currentSlide = slides.length - 1;\n            }\n\n            nextSlide(slides, currentSlide, 'portfolio-item-active');\n            nextSlide(dots, currentSlide, 'dot-active');\n        });\n\n        sliderBlock.addEventListener('mouseenter', (e) => {\n            if (e.target.matches('.dot, .portfolio-btn')) {\n                stopSlide();\n            }\n        }, true);\n\n        sliderBlock.addEventListener('mouseleave', (e) => {\n            if (e.target.matches('.dot, .portfolio-btn')) {\n                startSlide(timeInterval);\n            }\n        }, true);\n\n        addDots();\n        startSlide(timeInterval);\n    };\n\n    const sliderElems = [slider, sliderItem, dotsParent];\n\n    const sliderCheck = () => {\n        let count = 0;\n        sliderElems.forEach((item) => {\n            if (!document.querySelector(item)) {\n                return;\n            } else if (document.querySelector(item)) {\n                count++;\n            }\n            if (count == 3) {\n                sliderWrap();\n            }\n        });\n    };\n\n    sliderCheck();\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\n\n    const tabPanel = document.querySelector('.service-header');\n    const tabs = document.querySelectorAll('.service-header-tab');\n    const tabContent = document.querySelectorAll('.service-tab');\n\n    tabPanel.addEventListener('click', (e) => {\n        if (e.target.closest('.service-header-tab')) {\n            const tabBtn = e.target.closest('.service-header-tab');\n\n            tabs.forEach((tab, index) => {\n                if (tab === tabBtn) {\n                    tab.classList.add('active');\n                    tabContent[index].classList.remove('d-none');\n                } else {\n                    tab.classList.remove('active');\n                    tabContent[index].classList.add('d-none');\n                }\n            });\n        }\n    });\n\n\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n    const timerHours = document.getElementById('timer-hours');\n    const timerMinutes = document.getElementById('timer-minutes');\n    const timerSeconds = document.getElementById('timer-seconds');\n    let interval;\n\n    const getTimeRemaining = () => {\n        let dateStop = new Date(deadline).getTime();\n        let dateNow = new Date().getTime();\n        let timeRemaining = (dateStop - dateNow) / 1000;\n        let hours = Math.floor(timeRemaining / 60 / 60);\n        let minutes = Math.floor((timeRemaining / 60) % 60);\n        let seconds = Math.floor(timeRemaining % 60);\n\n        return { timeRemaining, hours, minutes, seconds };\n    };\n\n    function zeroPlus(item) {\n        let num = item < 10 ? '0' + item : item;\n        return num;\n    }\n\n    const updateClock = () => {\n        let getTime = getTimeRemaining();\n\n        if (getTime.timeRemaining > 0) {\n            timerHours.textContent = zeroPlus(getTime.hours);\n            timerMinutes.textContent = zeroPlus(getTime.minutes);\n            timerSeconds.textContent = zeroPlus(getTime.seconds);\n        } else {\n            timerHours.textContent = '00';\n            timerMinutes.textContent = '00';\n            timerSeconds.textContent = '00';\n            clearInterval(interval);\n        }\n    };\n    interval = setInterval(updateClock, 1000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;