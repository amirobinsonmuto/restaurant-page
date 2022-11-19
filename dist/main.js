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
    console.log('displayContactMain is invoked');
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

    console.log('displayMenuMain is invoked');

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

    console.log(menuItemArr);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0dPOztBQUVQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUN4RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDMEM7QUFDRTtBQUNLO0FBQ0w7QUFDRjtBQUNUO0FBQ1c7O0FBRTVDO0FBQ0E7QUFDQSx1REFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQWU7QUFDZix1REFBYTs7QUFFYjtBQUNBLElBQUksOENBQUk7QUFDUixJQUFJLHlEQUFlO0FBQ25CLElBQUkseURBQWU7QUFDbkIsSUFBSSx1REFBYTtBQUNqQixDQUFDOztBQUVEO0FBQ0EsSUFBSSw4Q0FBSTtBQUNSLElBQUkseURBQWU7QUFDbkIsSUFBSSx5REFBZTtBQUNuQixJQUFJLHVEQUFhO0FBQ2pCLENBQUM7O0FBRUQ7QUFDQSxJQUFJLDhDQUFJO0FBQ1IsSUFBSSx5REFBZTtBQUNuQixJQUFJLCtEQUFrQjtBQUN0QixJQUFJLHVEQUFhO0FBQ2pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWN0LmpzIiwid2VicGFjazovLy8uL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbWVudS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZGlzcGxheUNvbnRhY3RNYWluICgpIHtcbiAgICBjb25zb2xlLmxvZygnZGlzcGxheUNvbnRhY3RNYWluIGlzIGludm9rZWQnKTtcbiAgICAvL21haW5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBjb250YWN0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGNvbnRhY3RIZWFkaW5nLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgdXMnO1xuXG4gICAgICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwaG9uZS50ZXh0Q29udGVudCA9ICdQaG9uZTogMjUwLTExMS0xMTExJztcblxuICAgICAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gJzExMTEgRmlmdGggYXZlbnVlLCBOYW5haW1vLCBCQyc7XG5cbiAgICAgICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGhvdXJzLnRleHRDb250ZW50ID0gJ1R1ZXNkYXkgLSBTdW5kYXkgMTE6MDAgLSAyMTowMCc7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChjb250YWN0SGVhZGluZywgcGhvbmUsIGFkZHJlc3MsIGhvdXJzKTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gZGlzcGxheUhlYWRlcigpIHtcbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obG9nb0ltZywge1xuICAgICAgICAgICAgICAgIGFsdDogJ3N1c2hpbWUgbG9nbycsXG4gICAgICAgICAgICAgICAgc3JjOiAnaW1nL2xvZ28ucG5nJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCwgLy8gcGl4ZWxzXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCwgLy8gcGl4ZWxzXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbmF2LmFwcGVuZENoaWxkKGxvZ29JbWcpO1xuXG4gICAgICAgICAgICBjb25zdCBuYXZVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnbWVudVRhYicpXG4gICAgICAgICAgICBob21lLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZScpO1xuICAgICAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnVUYWInKVxuICAgICAgICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUnKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdtZW51VGFiJylcbiAgICAgICAgICAgIGNvbnRhY3Quc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0Jyk7XG5cbiAgICAgICAgICAgIGhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICAgICAgICAgIG1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICAgICAgICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcblxuICAgICAgICAgICAgbmF2VWwuYXBwZW5kKGhvbWUsIG1lbnUsIGNvbnRhY3QpO1xuICAgICAgICAgICAgbmF2LmFwcGVuZENoaWxkKG5hdlVsKTtcblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdik7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUhvbWVNYWluICgpIHtcbiAgICAvL21haW5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBoZXJvSGVhZGluZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBoZXJvSGVhZGluZzEudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byBTdXNoaW1lJztcblxuICAgICAgICBjb25zdCBoZXJvSGVhZGluZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBoZXJvSGVhZGluZzIudGV4dENvbnRlbnQgPSAnSmFwYW5lc2UgUmVzdGF1cmFudCBpbiBOYW5haW1vJztcblxuICAgICAgICBjb25zdCBoZXJvUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaGVyb1BhcmEudGV4dENvbnRlbnQgPSBgXG4gICAgICAgIElmIHlvdSBhcmUgbG9va2luZyBmb3IgYXV0aGVudGljIGFuZCBkZWxpY2lvdXMgSmFwYW5lc2UgZm9vZCBpbiBOYW5haW1vLCBcbiAgICAgICAgd2UgaG9wZSB5b3UnbGwgdmlzaXQgU3VzaGltZSAtIEphcGFuZXNlIFJlc3RhdXJhbnQgTmFuYWltby4gXG4gICAgICAgIFdlIG9mZmVyIGEgbGFyZ2UgdmFyaWV0eSBvZiBkZWxpY2lvdXMgbW91dGgtd2F0ZXJpbmcgZGlzaGVzIGFuZCBcbiAgICAgICAgYXBwZXRpemVycyB3aXRoIHRoZSBoaWdoZXN0IHF1YWxpdHkgaW5ncmVkaWVudHMgdG8gbWFrZSB5b3UgZmVlbCBcbiAgICAgICAgaGVhbHRoeSBhbmQgYnJpbmcgeW91IGEgbWVtb3JhYmxlIGRpbmluZyBleHBlcmllbmNlLiAgICAgICAgXG4gICAgICAgIGA7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChoZXJvSGVhZGluZzEsIGhlcm9IZWFkaW5nMiwgaGVyb1BhcmEpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUZvb3RlcigpIHtcbiAgICAvL2Zvb3RlclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvb3RlcicpO1xuXG4gICAgICAgIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gJ0NvcHlyaWdodCDCqSAyMDIyIGFtaXJvYmluc29ubXV0bydcblxuICAgICAgICBjb25zdCBnaXRodWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZ2l0aHViLCB7XG4gICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hbWlyb2JpbnNvbm11dG9cIixcbiAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBnaXRodWJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihnaXRodWJJbWcsIHtcbiAgICAgICAgICAgIGFsdDogJ2dpdGh1YiBsb2dvJyxcbiAgICAgICAgICAgIHNyYzogJ2ltZy9naXRodWIucG5nJyxcbiAgICAgICAgICAgIGhlaWdodDogMzAsIC8vIHBpeGVsc1xuICAgICAgICAgICAgd2lkdGg6IDMwLCAvLyBwaXhlbHNcbiAgICAgICAgfSlcbiAgICAgICAgZ2l0aHViLmFwcGVuZENoaWxkKGdpdGh1YkltZyk7XG5cbiAgICAgICAgZm9vdGVyLmFwcGVuZChjb3B5cmlnaHQsIGdpdGh1Yik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbi8vIGZ1bmN0aW9uIHRvIGFsbCBjb250ZW50XG5leHBvcnQgZnVuY3Rpb24gd2lwZSgpIHtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgY29uc3QgZm9vdGVyQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXInKTtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKG1haW5Db250ZW50KTtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGZvb3RlckNvbnRlbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0QWN0aXZlQnV0dG9uKGJ1dHRvbikge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnVUYWJcIik7XG4gIFxuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBpZiAoYnV0dG9uICE9PSB0aGlzKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudFRhYlwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50VGFiXCIpO1xuICB9XG4gICAgIiwiXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU1lbnVNYWluKCkge1xuXG4gICAgY29uc29sZS5sb2coJ2Rpc3BsYXlNZW51TWFpbiBpcyBpbnZva2VkJyk7XG5cbiAgICAvLyBjcmVhdGUgYSBmYWN0b3J5IGZ1bmN0aW9uXG4gICAgY29uc3QgbWVudUZhY3RvcnkgPSAoaW1nU3JjLCBoZGcsIGRlc2NyKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbWdTcmMsXG4gICAgICAgICAgICBoZGcsXG4gICAgICAgICAgICBkZXNjclxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9jcmVhdGUgbWVudSBpdGVtIG9iamVjdHNcbiAgICBjb25zdCBzdXNoaTAgPSBtZW51RmFjdG9yeSAoJ2ltZy8xLnBuZycsICdTdXNoaTAnLCAnU3VzaGkgMCBkZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHN1c2hpMSA9IG1lbnVGYWN0b3J5ICgnaW1nLzIucG5nJywgJ1N1c2hpMScsICdTdXNoaSAxIGRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3Qgc3VzaGkyID0gbWVudUZhY3RvcnkgKCdpbWcvMy5wbmcnLCAnU3VzaGkyJywgJ1N1c2hpIDIgZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBzdXNoaTMgPSBtZW51RmFjdG9yeSAoJ2ltZy80LnBuZycsICdTdXNoaTMnLCAnU3VzaGkgMyBkZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHN1c2hpNCA9IG1lbnVGYWN0b3J5ICgnaW1nLzUucG5nJywgJ1N1c2hpNCcsICdTdXNoaSA0IGRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3Qgc3VzaGk1ID0gbWVudUZhY3RvcnkgKCdpbWcvNi5wbmcnLCAnU3VzaGk1JywgJ1N1c2hpIDUgZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBzdXNoaTYgPSBtZW51RmFjdG9yeSAoJ2ltZy83LnBuZycsICdTdXNoaTYnLCAnU3VzaGkgNiBkZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHN1c2hpNyA9IG1lbnVGYWN0b3J5ICgnaW1nLzgucG5nJywgJ1N1c2hpNycsICdTdXNoaSA3IGRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3Qgc3VzaGk4ID0gbWVudUZhY3RvcnkgKCdpbWcvOS5wbmcnLCAnU3VzaGk4JywgJ1N1c2hpIDggZGVzY3JpcHRpb24nKTtcblxuICAgIC8vY3JlYXRlIGFuIGFycmF5IHdpdGggdGhlIG1lbnUgaXRlbSBvYmplY3RzIFxuICAgIGNvbnN0IG1lbnVJdGVtQXJyID0gW3N1c2hpMCwgc3VzaGkxLCBzdXNoaTIsIHN1c2hpMywgc3VzaGk0LCBzdXNoaTUsIHN1c2hpNixcbiAgICAgICAgICAgICAgICAgICAgICBzdXNoaTcsIHN1c2hpOF07XG5cbiAgICBjb25zb2xlLmxvZyhtZW51SXRlbUFycik7XG5cbiAgICAvL2NyZWF0ZSBkaXYgbWVudUNvbnRhaW5lclxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnVDb250YWluZXInKTtcblxuICAgIC8vZnVuY3Rpb24gdG8gY3JlYXRlIGEgbWVudSBjYXJkXG4gICAgZnVuY3Rpb24gY3JlYXRlTWVudUNhcmQob2JqKSB7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtJyk7XG5cbiAgICAgICAgY29uc3QgbWVudUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBPYmplY3QuYXNzaWduKG1lbnVJbWcsIHtcbiAgICAgICAgICAgIGFsdDogb2JqLmhkZyArICcgaW1hZ2UnLFxuICAgICAgICAgICAgc3JjOiBvYmouaW1nU3JjLFxuICAgICAgICAgICAgaGVpZ2h0OiAxMjAsXG4gICAgICAgICAgICB3aWR0aDogMTIwLFxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBtZW51SGRnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgbWVudUhkZy50ZXh0Q29udGVudCA9IG9iai5oZGc7XG4gICAgICAgIGNvbnN0IG1lbnVEZXNjciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbWVudURlc2NyLnRleHRDb250ZW50ID0gb2JqLmRlc2NyO1xuXG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZChtZW51SW1nLCBtZW51SGRnLCBtZW51RGVzY3IpO1xuXG4gICAgICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICAgIH1cblxuICAgIC8vY3JlYXRlIG1lbnUgY2FyZCBmb3IgYWxsIGVsZW1lbnRzIGluIHRoZSBtZW51SXRlbUFyclxuICAgIG1lbnVJdGVtQXJyLmZvckVhY2goZWwgPT4gY3JlYXRlTWVudUNhcmQoZWwpKTtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcblxuICAgIGNvbnN0IG1lbnVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBtZW51SGVhZGluZy50ZXh0Q29udGVudCA9ICdNZW51JztcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmQobWVudUhlYWRpbmcsIG1lbnVDb250YWluZXIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9qcyBpbXBvcnRcbmltcG9ydCB7IGRpc3BsYXlIZWFkZXIgfSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IHsgZGlzcGxheUhvbWVNYWluIH0gZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCB7IGRpc3BsYXlDb250YWN0TWFpbn0gZnJvbSAnLi9jb250YWN0LmpzJztcbmltcG9ydCB7IGRpc3BsYXlNZW51TWFpbiB9IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5Rm9vdGVyIH0gZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCB7IHdpcGUgfSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IHsgc2V0QWN0aXZlQnV0dG9uIH0gZnJvbSAnLi9ob21lLmpzJztcblxuLy9pbnZva2UgZnVuY3Rpb25zIG9uIHBhZ2UgbG9hZFxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5kaXNwbGF5SGVhZGVyKCk7XG5jb25zdCBob21lVGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbmhvbWVUYWIuY2xhc3NMaXN0LmFkZCgnY3VycmVudFRhYicpO1xuY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG5jb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKTtcbmRpc3BsYXlIb21lTWFpbigpO1xuZGlzcGxheUZvb3RlcigpO1xuXG5ob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICB3aXBlKCk7IFxuICAgIHNldEFjdGl2ZUJ1dHRvbihob21lVGFiKTtcbiAgICBkaXNwbGF5SG9tZU1haW4oKTtcbiAgICBkaXNwbGF5Rm9vdGVyKCk7XG59KTtcblxubWVudVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgd2lwZSgpO1xuICAgIHNldEFjdGl2ZUJ1dHRvbihtZW51VGFiKTtcbiAgICBkaXNwbGF5TWVudU1haW4oKTtcbiAgICBkaXNwbGF5Rm9vdGVyKCk7XG59KTtcblxuY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgd2lwZSgpO1xuICAgIHNldEFjdGl2ZUJ1dHRvbihjb250YWN0VGFiKTtcbiAgICBkaXNwbGF5Q29udGFjdE1haW4oKTtcbiAgICBkaXNwbGF5Rm9vdGVyKCk7XG59KTtcblxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==