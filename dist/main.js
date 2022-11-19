/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./contact.js":
/*!********************!*\
  !*** ./contact.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayContactMain": () => (/* binding */ displayContactMain)
/* harmony export */ });
function displayContactMain () {
    //main
    const main = document.createElement('main');
    main.setAttribute('id', 'main');

        const container = document.createElement('div');
        container.classList.add('container');

        const contactHeading = document.createElement('h1');
        contactHeading.textContent = 'Contact us';

        const phone = document.createElement('p');
        phone.textContent = 'Phone: 250-111-1111';

        const address = document.createElement('p');
        address.textContent = '1111 Fifth avenue, Nanaimo, BC';

        const hours = document.createElement('p');
        hours.textContent = 'Tuesday - Sunday 11:00 - 21:00';

        container.append(contactHeading, phone, address, hours);
        main.appendChild(container);

    content.appendChild(main);
}

/***/ }),

/***/ "./home.js":
/*!*****************!*\
  !*** ./home.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayFooter": () => (/* binding */ displayFooter),
/* harmony export */   "displayHeader": () => (/* binding */ displayHeader),
/* harmony export */   "displayHomeMain": () => (/* binding */ displayHomeMain),
/* harmony export */   "setActiveButton": () => (/* binding */ setActiveButton),
/* harmony export */   "wipe": () => (/* binding */ wipe)
/* harmony export */ });
function displayHeader() {
        const nav = document.createElement('nav');

            const logoImg = document.createElement('img');
            Object.assign(logoImg, {
                alt: 'sushime logo',
                src: 'img/logo.png',
                height: 100, // pixels
                width: 100, // pixels
            })
            nav.appendChild(logoImg);

            const navUl = document.createElement('ul');
            const home = document.createElement('li');
            home.classList.add('menuTab')
            home.setAttribute('id', 'home');
            const menu = document.createElement('li');
            menu.classList.add('menuTab')
            menu.setAttribute('id', 'menu');
            const contact = document.createElement('li');
            contact.classList.add('menuTab')
            contact.setAttribute('id', 'contact');

            home.textContent = "Home";
            menu.textContent = "Menu";
            contact.textContent = "Contact";

            navUl.append(home, menu, contact);
            nav.appendChild(navUl);

        content.appendChild(nav);
};

function displayHomeMain () {
    //main
    const main = document.createElement('main');
    main.setAttribute('id', 'main');

        const container = document.createElement('div');
        container.classList.add('container');

        const heroHeading1 = document.createElement('h1');
        heroHeading1.textContent = 'Welcome to Sushime';

        const heroHeading2 = document.createElement('h2');
        heroHeading2.textContent = 'Japanese Restaurant in Nanaimo';

        const heroPara = document.createElement('p');
        heroPara.textContent = `
        If you are looking for authentic and delicious Japanese food in Nanaimo, 
        we hope you'll visit Sushime - Japanese Restaurant Nanaimo. 
        We offer a large variety of delicious mouth-watering dishes and 
        appetizers with the highest quality ingredients to make you feel 
        healthy and bring you a memorable dining experience.        
        `;

        container.append(heroHeading1, heroHeading2, heroPara);
        main.appendChild(container);

    content.appendChild(main);
}

function displayFooter() {
    //footer
    const footer = document.createElement('footer');
    footer.setAttribute('id', 'footer');

        const copyright = document.createElement('p');
        copyright.textContent = 'Copyright © 2022 amirobinsonmuto'

        const github = document.createElement('a');
        Object.assign(github, {
            href: "https://github.com/amirobinsonmuto",
            target: "_blank"
        })
        const githubImg = document.createElement('img');
        Object.assign(githubImg, {
            alt: 'github logo',
            src: 'img/github.png',
            height: 30, // pixels
            width: 30, // pixels
        })
        github.appendChild(githubImg);

        footer.append(copyright, github);

    content.appendChild(footer);
}

// function to all content
function wipe() {
    const mainContent = document.getElementById('main');
    const footerContent = document.getElementById('footer');
    content.removeChild(mainContent);
    content.removeChild(footerContent);
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".menuTab");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("currentTab");
      }
    });
  
    button.classList.add("currentTab");
  }
    

/***/ }),

/***/ "./menu.js":
/*!*****************!*\
  !*** ./menu.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayMenuMain": () => (/* binding */ displayMenuMain)
/* harmony export */ });

function displayMenuMain() {

    // create a factory function
    const menuFactory = (imgSrc, hdg, descr) => {
        return {
            imgSrc,
            hdg,
            descr
        }
    }

    //create menu item objects
    const sushi0 = menuFactory ('img/1.png', 'Sushi0', 'Sushi 0 description');
    const sushi1 = menuFactory ('img/2.png', 'Sushi1', 'Sushi 1 description');
    const sushi2 = menuFactory ('img/3.png', 'Sushi2', 'Sushi 2 description');
    const sushi3 = menuFactory ('img/4.png', 'Sushi3', 'Sushi 3 description');
    const sushi4 = menuFactory ('img/5.png', 'Sushi4', 'Sushi 4 description');
    const sushi5 = menuFactory ('img/6.png', 'Sushi5', 'Sushi 5 description');
    const sushi6 = menuFactory ('img/7.png', 'Sushi6', 'Sushi 6 description');
    const sushi7 = menuFactory ('img/8.png', 'Sushi7', 'Sushi 7 description');
    const sushi8 = menuFactory ('img/9.png', 'Sushi8', 'Sushi 8 description');

    //create an array with the menu item objects 
    const menuItemArr = [sushi0, sushi1, sushi2, sushi3, sushi4, sushi5, sushi6,
                      sushi7, sushi8];

    //create div menuContainer
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');

    //function to create a menu card
    function createMenuCard(obj) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menuItem');

        const menuImg = document.createElement('img');
        Object.assign(menuImg, {
            alt: obj.hdg + ' image',
            src: obj.imgSrc,
            height: 120,
            width: 120,
        })
        const menuHdg = document.createElement('h3');
        menuHdg.textContent = obj.hdg;
        const menuDescr = document.createElement('p');
        menuDescr.textContent = obj.descr;

        menuItem.append(menuImg, menuHdg, menuDescr);

        menuContainer.appendChild(menuItem);
    }

    //create menu card for all elements in the menuItemArr
    menuItemArr.forEach(el => createMenuCard(el));

    const main = document.createElement('main');
    main.setAttribute('id', 'main');

    const menuHeading = document.createElement('h1');
    menuHeading.textContent = 'Menu';

    const container = document.createElement('div');
    container.classList.add('container');

    container.append(menuHeading, menuContainer);
    main.appendChild(container);
    content.appendChild(main);
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./home.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./contact.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./menu.js");
//js import








//invoke functions on page load
const content = document.getElementById('content');
(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.displayHeader)();
const homeTab = document.getElementById('home');
homeTab.classList.add('currentTab');
const menuTab = document.getElementById('menu');
const contactTab = document.getElementById('contact');
(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.displayHomeMain)();
(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.displayFooter)();

homeTab.addEventListener('click', ()=>{
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.wipe)(); 
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.setActiveButton)(homeTab);
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.displayHomeMain)();
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.displayFooter)();
});

menuTab.addEventListener('click', ()=>{
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.wipe)();
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.setActiveButton)(menuTab);
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.displayMenuMain)();
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.displayFooter)();
});

contactTab.addEventListener('click', ()=>{
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.wipe)();
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.setActiveButton)(contactTab);
    (0,_contact_js__WEBPACK_IMPORTED_MODULE_1__.displayContactMain)();
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.displayFooter)();
});










})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNHTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDcEVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQzBDO0FBQ0U7QUFDSztBQUNMO0FBQ0Y7QUFDVDtBQUNXOztBQUU1QztBQUNBO0FBQ0EsdURBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUFlO0FBQ2YsdURBQWE7O0FBRWI7QUFDQSxJQUFJLDhDQUFJO0FBQ1IsSUFBSSx5REFBZTtBQUNuQixJQUFJLHlEQUFlO0FBQ25CLElBQUksdURBQWE7QUFDakIsQ0FBQzs7QUFFRDtBQUNBLElBQUksOENBQUk7QUFDUixJQUFJLHlEQUFlO0FBQ25CLElBQUkseURBQWU7QUFDbkIsSUFBSSx1REFBYTtBQUNqQixDQUFDOztBQUVEO0FBQ0EsSUFBSSw4Q0FBSTtBQUNSLElBQUkseURBQWU7QUFDbkIsSUFBSSwrREFBa0I7QUFDdEIsSUFBSSx1REFBYTtBQUNqQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ob21lLmpzIiwid2VicGFjazovLy8uL21lbnUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDb250YWN0TWFpbiAoKSB7XG4gICAgLy9tYWluXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbicpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgY29udGFjdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBjb250YWN0SGVhZGluZy50ZXh0Q29udGVudCA9ICdDb250YWN0IHVzJztcblxuICAgICAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcGhvbmUudGV4dENvbnRlbnQgPSAnUGhvbmU6IDI1MC0xMTEtMTExMSc7XG5cbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICcxMTExIEZpZnRoIGF2ZW51ZSwgTmFuYWltbywgQkMnO1xuXG4gICAgICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBob3Vycy50ZXh0Q29udGVudCA9ICdUdWVzZGF5IC0gU3VuZGF5IDExOjAwIC0gMjE6MDAnO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoY29udGFjdEhlYWRpbmcsIHBob25lLCBhZGRyZXNzLCBob3Vycyk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlIZWFkZXIoKSB7XG4gICAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuXG4gICAgICAgICAgICBjb25zdCBsb2dvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGxvZ29JbWcsIHtcbiAgICAgICAgICAgICAgICBhbHQ6ICdzdXNoaW1lIGxvZ28nLFxuICAgICAgICAgICAgICAgIHNyYzogJ2ltZy9sb2dvLnBuZycsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAsIC8vIHBpeGVsc1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsIC8vIHBpeGVsc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIG5hdi5hcHBlbmRDaGlsZChsb2dvSW1nKTtcblxuICAgICAgICAgICAgY29uc3QgbmF2VWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBob21lLmNsYXNzTGlzdC5hZGQoJ21lbnVUYWInKVxuICAgICAgICAgICAgaG9tZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUnKTtcbiAgICAgICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51VGFiJylcbiAgICAgICAgICAgIG1lbnUuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51Jyk7XG4gICAgICAgICAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnbWVudVRhYicpXG4gICAgICAgICAgICBjb250YWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdCcpO1xuXG4gICAgICAgICAgICBob21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgICAgICAgICBtZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgICAgICAgICBjb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG5cbiAgICAgICAgICAgIG5hdlVsLmFwcGVuZChob21lLCBtZW51LCBjb250YWN0KTtcbiAgICAgICAgICAgIG5hdi5hcHBlbmRDaGlsZChuYXZVbCk7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChuYXYpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlIb21lTWFpbiAoKSB7XG4gICAgLy9tYWluXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbicpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgaGVyb0hlYWRpbmcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgaGVyb0hlYWRpbmcxLnRleHRDb250ZW50ID0gJ1dlbGNvbWUgdG8gU3VzaGltZSc7XG5cbiAgICAgICAgY29uc3QgaGVyb0hlYWRpbmcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgaGVyb0hlYWRpbmcyLnRleHRDb250ZW50ID0gJ0phcGFuZXNlIFJlc3RhdXJhbnQgaW4gTmFuYWltbyc7XG5cbiAgICAgICAgY29uc3QgaGVyb1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGhlcm9QYXJhLnRleHRDb250ZW50ID0gYFxuICAgICAgICBJZiB5b3UgYXJlIGxvb2tpbmcgZm9yIGF1dGhlbnRpYyBhbmQgZGVsaWNpb3VzIEphcGFuZXNlIGZvb2QgaW4gTmFuYWltbywgXG4gICAgICAgIHdlIGhvcGUgeW91J2xsIHZpc2l0IFN1c2hpbWUgLSBKYXBhbmVzZSBSZXN0YXVyYW50IE5hbmFpbW8uIFxuICAgICAgICBXZSBvZmZlciBhIGxhcmdlIHZhcmlldHkgb2YgZGVsaWNpb3VzIG1vdXRoLXdhdGVyaW5nIGRpc2hlcyBhbmQgXG4gICAgICAgIGFwcGV0aXplcnMgd2l0aCB0aGUgaGlnaGVzdCBxdWFsaXR5IGluZ3JlZGllbnRzIHRvIG1ha2UgeW91IGZlZWwgXG4gICAgICAgIGhlYWx0aHkgYW5kIGJyaW5nIHlvdSBhIG1lbW9yYWJsZSBkaW5pbmcgZXhwZXJpZW5jZS4gICAgICAgIFxuICAgICAgICBgO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoaGVyb0hlYWRpbmcxLCBoZXJvSGVhZGluZzIsIGhlcm9QYXJhKTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlGb290ZXIoKSB7XG4gICAgLy9mb290ZXJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXInKTtcblxuICAgICAgICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvcHlyaWdodC50ZXh0Q29udGVudCA9ICdDb3B5cmlnaHQgwqkgMjAyMiBhbWlyb2JpbnNvbm11dG8nXG5cbiAgICAgICAgY29uc3QgZ2l0aHViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBPYmplY3QuYXNzaWduKGdpdGh1Yiwge1xuICAgICAgICAgICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vYW1pcm9iaW5zb25tdXRvXCIsXG4gICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgZ2l0aHViSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZ2l0aHViSW1nLCB7XG4gICAgICAgICAgICBhbHQ6ICdnaXRodWIgbG9nbycsXG4gICAgICAgICAgICBzcmM6ICdpbWcvZ2l0aHViLnBuZycsXG4gICAgICAgICAgICBoZWlnaHQ6IDMwLCAvLyBwaXhlbHNcbiAgICAgICAgICAgIHdpZHRoOiAzMCwgLy8gcGl4ZWxzXG4gICAgICAgIH0pXG4gICAgICAgIGdpdGh1Yi5hcHBlbmRDaGlsZChnaXRodWJJbWcpO1xuXG4gICAgICAgIGZvb3Rlci5hcHBlbmQoY29weXJpZ2h0LCBnaXRodWIpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG4vLyBmdW5jdGlvbiB0byBhbGwgY29udGVudFxuZXhwb3J0IGZ1bmN0aW9uIHdpcGUoKSB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIGNvbnN0IGZvb3RlckNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyJyk7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChtYWluQ29udGVudCk7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChmb290ZXJDb250ZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEFjdGl2ZUJ1dHRvbihidXR0b24pIHtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51VGFiXCIpO1xuICBcbiAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgaWYgKGJ1dHRvbiAhPT0gdGhpcykge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnRUYWJcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIFxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY3VycmVudFRhYlwiKTtcbiAgfVxuICAgICIsIlxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNZW51TWFpbigpIHtcblxuICAgIC8vIGNyZWF0ZSBhIGZhY3RvcnkgZnVuY3Rpb25cbiAgICBjb25zdCBtZW51RmFjdG9yeSA9IChpbWdTcmMsIGhkZywgZGVzY3IpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGltZ1NyYyxcbiAgICAgICAgICAgIGhkZyxcbiAgICAgICAgICAgIGRlc2NyXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL2NyZWF0ZSBtZW51IGl0ZW0gb2JqZWN0c1xuICAgIGNvbnN0IHN1c2hpMCA9IG1lbnVGYWN0b3J5ICgnaW1nLzEucG5nJywgJ1N1c2hpMCcsICdTdXNoaSAwIGRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3Qgc3VzaGkxID0gbWVudUZhY3RvcnkgKCdpbWcvMi5wbmcnLCAnU3VzaGkxJywgJ1N1c2hpIDEgZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBzdXNoaTIgPSBtZW51RmFjdG9yeSAoJ2ltZy8zLnBuZycsICdTdXNoaTInLCAnU3VzaGkgMiBkZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHN1c2hpMyA9IG1lbnVGYWN0b3J5ICgnaW1nLzQucG5nJywgJ1N1c2hpMycsICdTdXNoaSAzIGRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3Qgc3VzaGk0ID0gbWVudUZhY3RvcnkgKCdpbWcvNS5wbmcnLCAnU3VzaGk0JywgJ1N1c2hpIDQgZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBzdXNoaTUgPSBtZW51RmFjdG9yeSAoJ2ltZy82LnBuZycsICdTdXNoaTUnLCAnU3VzaGkgNSBkZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHN1c2hpNiA9IG1lbnVGYWN0b3J5ICgnaW1nLzcucG5nJywgJ1N1c2hpNicsICdTdXNoaSA2IGRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3Qgc3VzaGk3ID0gbWVudUZhY3RvcnkgKCdpbWcvOC5wbmcnLCAnU3VzaGk3JywgJ1N1c2hpIDcgZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBzdXNoaTggPSBtZW51RmFjdG9yeSAoJ2ltZy85LnBuZycsICdTdXNoaTgnLCAnU3VzaGkgOCBkZXNjcmlwdGlvbicpO1xuXG4gICAgLy9jcmVhdGUgYW4gYXJyYXkgd2l0aCB0aGUgbWVudSBpdGVtIG9iamVjdHMgXG4gICAgY29uc3QgbWVudUl0ZW1BcnIgPSBbc3VzaGkwLCBzdXNoaTEsIHN1c2hpMiwgc3VzaGkzLCBzdXNoaTQsIHN1c2hpNSwgc3VzaGk2LFxuICAgICAgICAgICAgICAgICAgICAgIHN1c2hpNywgc3VzaGk4XTtcblxuICAgIC8vY3JlYXRlIGRpdiBtZW51Q29udGFpbmVyXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudUNvbnRhaW5lcicpO1xuXG4gICAgLy9mdW5jdGlvbiB0byBjcmVhdGUgYSBtZW51IGNhcmRcbiAgICBmdW5jdGlvbiBjcmVhdGVNZW51Q2FyZChvYmopIHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW0nKTtcblxuICAgICAgICBjb25zdCBtZW51SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24obWVudUltZywge1xuICAgICAgICAgICAgYWx0OiBvYmouaGRnICsgJyBpbWFnZScsXG4gICAgICAgICAgICBzcmM6IG9iai5pbWdTcmMsXG4gICAgICAgICAgICBoZWlnaHQ6IDEyMCxcbiAgICAgICAgICAgIHdpZHRoOiAxMjAsXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IG1lbnVIZGcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBtZW51SGRnLnRleHRDb250ZW50ID0gb2JqLmhkZztcbiAgICAgICAgY29uc3QgbWVudURlc2NyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBtZW51RGVzY3IudGV4dENvbnRlbnQgPSBvYmouZGVzY3I7XG5cbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kKG1lbnVJbWcsIG1lbnVIZGcsIG1lbnVEZXNjcik7XG5cbiAgICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG4gICAgfVxuXG4gICAgLy9jcmVhdGUgbWVudSBjYXJkIGZvciBhbGwgZWxlbWVudHMgaW4gdGhlIG1lbnVJdGVtQXJyXG4gICAgbWVudUl0ZW1BcnIuZm9yRWFjaChlbCA9PiBjcmVhdGVNZW51Q2FyZChlbCkpO1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbicpO1xuXG4gICAgY29uc3QgbWVudUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIG1lbnVIZWFkaW5nLnRleHRDb250ZW50ID0gJ01lbnUnO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZChtZW51SGVhZGluZywgbWVudUNvbnRhaW5lcik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL2pzIGltcG9ydFxuaW1wb3J0IHsgZGlzcGxheUhlYWRlciB9IGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5SG9tZU1haW4gfSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IHsgZGlzcGxheUNvbnRhY3RNYWlufSBmcm9tICcuL2NvbnRhY3QuanMnO1xuaW1wb3J0IHsgZGlzcGxheU1lbnVNYWluIH0gZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCB7IGRpc3BsYXlGb290ZXIgfSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IHsgd2lwZSB9IGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgeyBzZXRBY3RpdmVCdXR0b24gfSBmcm9tICcuL2hvbWUuanMnO1xuXG4vL2ludm9rZSBmdW5jdGlvbnMgb24gcGFnZSBsb2FkXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmRpc3BsYXlIZWFkZXIoKTtcbmNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xuaG9tZVRhYi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50VGFiJyk7XG5jb25zdCBtZW51VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbmNvbnN0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpO1xuZGlzcGxheUhvbWVNYWluKCk7XG5kaXNwbGF5Rm9vdGVyKCk7XG5cbmhvbWVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIHdpcGUoKTsgXG4gICAgc2V0QWN0aXZlQnV0dG9uKGhvbWVUYWIpO1xuICAgIGRpc3BsYXlIb21lTWFpbigpO1xuICAgIGRpc3BsYXlGb290ZXIoKTtcbn0pO1xuXG5tZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICB3aXBlKCk7XG4gICAgc2V0QWN0aXZlQnV0dG9uKG1lbnVUYWIpO1xuICAgIGRpc3BsYXlNZW51TWFpbigpO1xuICAgIGRpc3BsYXlGb290ZXIoKTtcbn0pO1xuXG5jb250YWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICB3aXBlKCk7XG4gICAgc2V0QWN0aXZlQnV0dG9uKGNvbnRhY3RUYWIpO1xuICAgIGRpc3BsYXlDb250YWN0TWFpbigpO1xuICAgIGRpc3BsYXlGb290ZXIoKTtcbn0pO1xuXG5cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9