//js import
import { displayHeader } from './home.js';
import { displayHomeMain } from './home.js';
import { displayContactMain} from './contact.js';
import { displayMenuMain } from './menu.js';
import { displayFooter } from './home.js';
import { wipe } from './home.js';
import { setActiveButton } from './home.js';

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
    setActiveButton(homeTab);
    displayHomeMain();
    displayFooter();
});

menuTab.addEventListener('click', ()=>{
    wipe();
    setActiveButton(menuTab);
    displayMenuMain();
    displayFooter();
});

contactTab.addEventListener('click', ()=>{
    wipe();
    setActiveButton(contactTab);
    displayContactMain();
    displayFooter();
});









