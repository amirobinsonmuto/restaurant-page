//css import
import './style.css';

//js import
import { displayHeader } from './home.js';
import { displayHomeMain } from './home.js';
import { displayContactMain} from './contact.js';
import { displayMenuMain } from './menu.js';
import { displayFooter } from './home.js';

// function to all content
function wipe() {
    const mainContent = document.getElementById('main');
    const footerContent = document.getElementById('footer');
    content.removeChild(mainContent);
    content.removeChild(footerContent);
}

//invoke functions on page load
const content = document.getElementById('content');
displayHeader();
const homeTab = document.getElementById('home');
homeTab.classList.add('currentTab');
const menuTab = document.getElementById('menu');
const contactTab = document.getElementById('contact');
displayHomeMain();
displayFooter();

homeTab.addEventListener('click', ()=>{
    wipe(); 
    displayHomeMain();
    homeTab.classList.add('currentTab');
    menuTab.classList.remove('currentTab');
    contactTab.classList.remove('currentTab');
    displayFooter();
});

menuTab.addEventListener('click', ()=>{
    wipe();
    displayMenuMain();
    homeTab.classList.remove('currentTab');
    menuTab.classList.add('currentTab');
    contactTab.classList.remove('currentTab');
    displayFooter();
});

contactTab.addEventListener('click', ()=>{
    wipe();
    displayContactMain();
    homeTab.classList.remove('currentTab');
    menuTab.classList.remove('currentTab');
    contactTab.classList.add('currentTab');
    displayFooter();
});









