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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_assay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/assay */ \"./src/modules/assay.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('26 april 2022 14:55:00:000')\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_assay__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(['.portfolio-content', '.portfolio-item', '.dot'])\r\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\r\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])()\n\n//# sourceURL=webpack://lesson18/./src/index.js?");

/***/ }),

/***/ "./src/modules/assay.js":
/*!******************************!*\
  !*** ./src/modules/assay.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst assay = () => {\r\n    const formPhone = document.querySelectorAll('.form-phone')\r\n    const formEmail = document.querySelectorAll('.form-email')\r\n    const formName = document.querySelectorAll('.form-name')\r\n    const formMessage = document.querySelector('#form2-message')\r\n    const calcItem = document.querySelectorAll('.calc-item')\r\n\r\n    formPhone.forEach(btn => {\r\n        btn.addEventListener('blur', function () {\r\n            phone(event)\r\n        })\r\n    })\r\n\r\n    formEmail.forEach(btn => {\r\n        btn.addEventListener('blur', function () {\r\n            email(event)\r\n        })\r\n    })\r\n\r\n    formName.forEach(btn => {\r\n        btn.addEventListener('blur', function () {\r\n            text(event)\r\n        })\r\n    })\r\n\r\n    calcItem.forEach(btn => {\r\n        btn.addEventListener('blur', function () {\r\n            if (!btn[0] ){\r\n                calc(event)\r\n            }else {\r\n                return\r\n            }\r\n        })\r\n    })\r\n\r\n    formMessage.addEventListener('blur', function () {\r\n        text(e)\r\n    })\r\n\r\n    const phone = function (event) {\r\n        event.target.value = event.target.value.replace(/[^0-9\\(\\)\\-]/g, \"\").replace(/^[\\-]+/g, '').replace(/[\\-]+$/g, '').replace(/\\-+/g, \"-\")\r\n    }\r\n\r\n    const email = function (event) {\r\n        event.target.value = event.target.value.replace(/[^a-zA-Z\\@\\-\\.\\!\\~\\*\\']/g, '').replace(/^[\\-]+/g, '').replace(/[\\-]+$/g, '').replace(/\\-+/g, \"-\")\r\n    }\r\n\r\n    const text = function (event) {\r\n        event.target.value = event.target.value.replace(/[^а-яА-Я\\-\\ ]/g, '').replace(/^[\\s\\-]+/g, '').replace(/[\\s\\-]+$/g, '').replace(/\\-+/g, \"-\").replace(/\\ +/g, \" \").replace(/(^|\\s)\\S/g, function (e) {return e.toUpperCase()})\r\n    }\r\n\r\n    const calc = function (event) {\r\n        event.target.value = event.target.value.replace(/[^0-9]/g, '')\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assay);\n\n//# sourceURL=webpack://lesson18/./src/modules/assay.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/modules/helper.js\");\n\r\nconst calc = (price = 100) => {\r\n    const calcBlock = document.querySelector('.calc-block'),\r\n        calcSquare = document.querySelector('.calc-square'),\r\n        calcCount = document.querySelector('.calc-count'),\r\n        calcDay = document.querySelector('.calc-day'),\r\n        totalValue = document.getElementById('total'),\r\n        calcType = document.querySelector('.calc-type');\r\n\r\n    const countSum = () => {\r\n        let total = 0,\r\n            countValue = 1,\r\n            dayValue = 1;\r\n        const typeValue = calcType.options[calcType.selectedIndex].value,\r\n            squareValue = +calcSquare.value;\r\n\r\n        if (calcCount.value > 1) {\r\n            countValue += (calcCount.value - 1) / 10;\r\n        }\r\n        if (calcDay.value && calcDay.value < 5) {\r\n            dayValue *= 2;\r\n        } else if (calcDay.value && calcDay.value < 10) {\r\n            dayValue *= 1.5;\r\n        }\r\n        if (typeValue && squareValue) {\r\n            total = Math.round(price * typeValue * squareValue * dayValue * countValue);\r\n        }\r\n        const totalAnim = () => {\r\n            (0,_helper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n                duration: 2000,\r\n                timing: (timeFraction) => {\r\n                    return timeFraction;\r\n                },\r\n                draw: (progress) => {\r\n                    totalValue.textContent = Math.round(total * progress);\r\n                },\r\n            });\r\n        };\r\n        totalAnim(total);\r\n        if(total === 0) {\r\n            calcSquare.value = '';\r\n            calcCount.value = '';\r\n            calcDay.value = '';\r\n        }\r\n    };\r\n    calcBlock.addEventListener('input', e => {\r\n        if (e.target.matches('select') || e.target.matches('input')) {\r\n            countSum();\r\n        }\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://lesson18/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/helper.js":
/*!*******************************!*\
  !*** ./src/modules/helper.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst animate = ({ duration, draw, timing }) => {\r\n    const start = performance.now();\r\n    requestAnimationFrame(function animate(time) {\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) {\r\n            timeFraction = 1;\r\n        }\r\n        const progress = timing(timeFraction);\r\n        draw(progress);\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animate);\n\n//# sourceURL=webpack://lesson18/./src/modules/helper.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuBtn = document.querySelector('.menu')\r\n    const menu = document.querySelector('menu')\r\n    const closeBtn = document.querySelector('.close-btn')\r\n    const menuItems = menu.querySelectorAll('ul>li>a')\r\n\r\n    \r\n\r\n    const handleMenu = () => {\r\n        menu.classList.toggle('active-menu')\r\n    }\r\n\r\n    menuBtn.addEventListener('click', handleMenu)\r\n    closeBtn.addEventListener('click', handleMenu)\r\n    menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu))\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://lesson18/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const modal = document.querySelector('.popup')\r\n    const modalContent = document.querySelector('.popup-content')\r\n    let count = -100 \r\n    let intervalId\r\n    let open = false\r\n    modalContent.style.transform = `translateX(${count}%)`\r\n\r\n    const counter = (open) => {\r\n        if (open) {\r\n            count += 5\r\n        } else {\r\n            count -= 5\r\n        }\r\n    }\r\n    \r\n    const modalOpen = (open) => {\r\n        counter(open)\r\n        modalContent.style.transform = `translateX(${count}%)`\r\n        if(count >= 0){\r\n            clearInterval(intervalId)\r\n            open = false\r\n        } else if(count <= -100){\r\n            clearInterval(intervalId)\r\n            open = false\r\n            modal.style.display = ''\r\n        }\r\n    \r\n    }\r\n    \r\n    \r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('.popup-close') || e.target.classList.contains('popup')) {\r\n            open = !open\r\n            intervalId = setInterval(() => {\r\n                modalOpen(open)\r\n            }, 20)\r\n            \r\n        } else if (e.target.closest('.popup-btn')) {\r\n            open = !open\r\n            modal.style.display = 'block'\r\n            intervalId = setInterval(() => {\r\n                modalOpen(open)\r\n            }, 20)\r\n        }\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal); \r\n\r\n// import { animate } from \"./helper\";\r\n\r\n// const modal = () => {\r\n//     const modal = document.querySelector('.popup')\r\n//     const buttons = document.querySelectorAll('.popup-btn')\r\n//     const closeBtn = modal.querySelector('.popup-close')\r\n//     const popupContent = document.querySelector(\".popup-content\");\r\n\r\n//     buttons.forEach(btn => {\r\n//         btn.addEventListener('click', () => {\r\n//             modal.style.display = 'block';\r\n//             animate({\r\n//                 duration: 500,\r\n//                 timing(timeFraction) {\r\n//                     return timeFraction;\r\n//                 },\r\n//                 draw(progress) {\r\n//                     popupContent.style.opacity = progress;\r\n//                     popupContent.style.top = 20 * progress + \"%\";\r\n//                 },\r\n//             });\r\n//         })\r\n//     })\r\n\r\n//     closeBtn.addEventListener('click', () => {\r\n//         modal.style.display = 'none'\r\n//     })\r\n//     modal.addEventListener('click', (e) => {\r\n//         if (\r\n//             !e.target.closest(\".popup-content\") ||\r\n//             e.target.classList.contains(\"popup-close\")\r\n//         ) {\r\n//             modal.style.display = \"none\";\r\n//         }\r\n//     })\r\n// };\r\n\r\n// export default modal\r\n\n\n//# sourceURL=webpack://lesson18/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = function () {\r\n    const menu = document.querySelector('menu')\r\n    const ul = menu.querySelector('ul')\r\n    const anchors = ul.querySelectorAll('a')\r\n    const main = document.querySelector('main')\r\n    const a = main.querySelector('a')\r\n\r\n    a.addEventListener('click', function (e) {\r\n        e.preventDefault()\r\n\r\n        const blockID = a.getAttribute('href')\r\n\r\n        document.querySelector(blockID).scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n        })\r\n    })\r\n\r\n    for (let anchor of anchors) {\r\n        anchor.addEventListener('click', function (e) {\r\n            e.preventDefault()\r\n\r\n            const blockID = anchor.getAttribute('href')\r\n\r\n            document.querySelector(blockID).scrollIntoView({\r\n      behavior: 'smooth',\r\n      block: 'start'\r\n            })\r\n        })\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://lesson18/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = () => {\r\n  const errorMessage = 'Что-то пошло не так...',\r\n        loadMessage = 'Загрузка...',\r\n        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';\r\n\r\n  const form = document.querySelectorAll('form[name=\"user_form\"]');\r\n  const statusMessage = document.createElement('div');\r\n  statusMessage.className = 'status-message';\r\n  statusMessage.style.cssText = 'color: #c3c3c3; border-top: 1px solid #fff; border-bottom: 1px solid #fff; border-radius: 5px; display: inline-block; padding: 5px 10px; background-color: rgba(255, 255, 255, .1); margin: 10px;';\r\n\r\n  let message = (textContent, item) => {\r\n    statusMessage.textContent = textContent;\r\n    let clearD = item.querySelectorAll('input');\r\n          clearD.forEach((item) => {\r\n            item.value = '';\r\n          });\r\n    setTimeout(() => {\r\n      statusMessage.remove();\r\n    }, 5000);\r\n  };\r\n\r\n  form.forEach((item) => {\r\n    item.addEventListener('submit', (event) => {\r\n      event.preventDefault();\r\n      item.appendChild(statusMessage);\r\n      statusMessage.textContent = loadMessage;\r\n      const formData = new FormData(item);\r\n      \r\n      postData(formData)\r\n        .then ((response) => {\r\n          if (response.status !== 200) {\r\n            throw new Error ('Status network not 200');\r\n          }\r\n          message(successMessage, item);\r\n        })\r\n        .catch((error) => {\r\n          message(errorMessage, item);\r\n          console.error(error);\r\n        });\r\n    });\r\n  });\r\n\r\n  const postData = (formData) => {\r\n    return fetch('https://jsonplaceholder.typicode.com/posts', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: formData});\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://lesson18/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = ([blockSlider, sliderClass, dotsClass]) => {\r\n    const sliderBlock = document.querySelector(blockSlider)\r\n    const slides = document.querySelectorAll(sliderClass)\r\n    const dots = document.querySelectorAll(dotsClass) \r\n\r\n    if(sliderBlock == null || slides == null || dots == null){\r\n        return\r\n    }\r\n    \r\n    const timeInterval = 2000\r\n\r\n    let currentSlide = 0  \r\n    let interval          \r\n\r\n    const prevSlide = (elems, index, strClass) => {\r\n        elems[index].classList.remove(strClass)\r\n    }\r\n    const nextSlide = (elems, index, strClass) => {\r\n        elems[index].classList.add(strClass)\r\n    }\r\n\r\n    const autoSlide = () => {\r\n        prevSlide(slides, currentSlide, 'portfolio-item-active')\r\n        prevSlide(dots, currentSlide, 'dot-active')\r\n        currentSlide++\r\n\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0\r\n        }\r\n        nextSlide(slides, currentSlide, 'portfolio-item-active')\r\n        nextSlide(dots, currentSlide, 'dot-active')\r\n    }\r\n\r\n    const startSlide = (timer = 1500) => {\r\n        interval = setInterval(autoSlide, timer)\r\n    }\r\n    const stopSlide = () => {\r\n        clearInterval(interval)\r\n    }\r\n\r\n    sliderBlock.addEventListener('click', (e) => {\r\n        e.preventDefault() \r\n\r\n        if (!e.target.matches('.dot, .portfolio-btn')) {\r\n            return\r\n        }\r\n\r\n        prevSlide(slides, currentSlide, 'portfolio-item-active')\r\n        prevSlide(dots, currentSlide, 'dot-active')\r\n     \r\n        if (e.target.matches('#arrow-right')) {\r\n            currentSlide++\r\n        } else if (e.target.matches('#arrow-left')) {\r\n            currentSlide--\r\n        } else if (e.target.classList.contains('dot')) {\r\n            dots.forEach((dot, index) => {\r\n                if (e.target === dot) {\r\n                    currentSlide = index\r\n                }\r\n            })\r\n        }\r\n\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0\r\n        }\r\n        \r\n        if (currentSlide < 0) {\r\n            currentSlide = slides.length - 1\r\n        }\r\n\r\n        nextSlide(slides, currentSlide, 'portfolio-item-active')\r\n        nextSlide(dots, currentSlide, 'dot-active')\r\n    })\r\n\r\n    sliderBlock.addEventListener('mouseenter', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            stopSlide()\r\n        }\r\n    }, true)\r\n\r\n    sliderBlock.addEventListener('mouseleave', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            startSlide(timeInterval)\r\n        }\r\n    }, true)\r\n\r\n    startSlide(timeInterval)\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://lesson18/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n    const tabPanel = document.querySelector(\".service-header\");\r\n    const tabs = document.querySelectorAll(\".service-header-tab\");\r\n    const tabContent = document.querySelectorAll(\".service-tab\");\r\n\r\n    tabPanel.addEventListener(\"click\", (e) => {\r\n        if (e.target.closest(\".service-header-tab\")) {\r\n            const tabBtn = e.target.closest(\".service-header-tab\");\r\n            tabs.forEach((tab, index) => {\r\n                if (tab === tabBtn) {\r\n                    tab.classList.add(\"active\");\r\n                    tabContent[index].classList.remove(\"d-none\");\r\n                } else {\r\n                    tab.classList.remove(\"active\");\r\n                    tabContent[index].classList.add(\"d-none\");\r\n                }\r\n            });\r\n        }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://lesson18/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    let timerHours = document.getElementById('timer-hours')\r\n    let timerMinutes = document.getElementById('timer-minutes')\r\n    let timerSeconds = document.getElementById('timer-seconds')\r\n    \r\n    const getTimeRemaining = () => {\r\n        \r\n        let dateStop = new Date(deadline).getTime()\r\n        let dateNow = new Date().getTime()\r\n        let timeRemaining = (dateStop - dateNow) / 1000\r\n        let hours = Math.floor(timeRemaining / 60 / 60)\r\n        let minutes = Math.floor((timeRemaining / 60) % 60)\r\n        let seconds = Math.floor(timeRemaining % 60)\r\n\r\n        return { timeRemaining, hours, minutes, seconds }\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n        timerHours.textContent = (\"0\" + getTime.hours).slice(-2);\r\n        timerMinutes.textContent = (\"0\" + getTime.minutes).slice(-2);\r\n        timerSeconds.textContent = (\"0\" + getTime.seconds).slice(-2);\r\n    };\r\n    if (getTimeRemaining > 0) {\r\n        updateClock();\r\n    }\r\n    setInterval(() => {\r\n        let getTime = getTimeRemaining();\r\n        if (getTime.timeRemaining > 0) {\r\n            updateClock();\r\n        } else if (getTime.timeRemaining === 0) {\r\n            clearInterval(updateClock);\r\n        }\r\n    }, 1000);\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://lesson18/./src/modules/timer.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;