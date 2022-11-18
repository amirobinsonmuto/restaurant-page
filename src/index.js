import './style.css';

//images
import Hero from './hero.jpg';
import Logo from './logo.png';
import GitHub from './github.png';
import Sushi0 from './2.png';
import Sushi1 from './2.png';
import Sushi2 from './3.png';
import Sushi3 from './4.png';
import Sushi4 from './5.png';
import Sushi5 from './6.png';
import Sushi6 from './7.png';
import Sushi7 from './8.png';
import Sushi8 from './9.png';
import Sushi9 from './10.png';

const myHero = new Image();
myHero.src = Hero;
const myLogo = new Image();
myLogo.src = Logo;
const myGitHub = new Image();
myGitHub.src = GitHub;
const mySushi0 = new Image();
mySushi0.src = Sushi0;
const mySushi1 = new Image();
mySushi1.src = Sushi1;
const mySushi2 = new Image();
mySushi2.src = Sushi2;
const mySushi3 = new Image();
mySushi3.src = Sushi3;
const mySushi4 = new Image();
mySushi4.src = Sushi4;
const mySushi5 = new Image();
mySushi5.src = Sushi5;
const mySushi6 = new Image();
mySushi6.src = Sushi6;
const mySushi7 = new Image();
mySushi7.src = Sushi7;
const mySushi8 = new Image();
mySushi8.src = Sushi8;
const mySushi9 = new Image();
mySushi9.src = Sushi9;

//js
import { displayHeader } from './home.js';
import { displayHomeMain } from './home.js';
import { displayContactMain} from './contact.js';
import { displayMenuMain } from './menu.js';
import { displayFooter } from './home.js';

const content = document.getElementById('content');

//function to wipe out main and footer
function wipe() {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
      }
}

//invoke functions
displayHeader();
displayHomeMain();
displayFooter();

const homeTab = document.getElementById('home');
const menuTab = document.getElementById('menu');
const contactTab = document.getElementById('contact');

homeTab.addEventListener('click', () => { 
    wipe(),
    displayHeader(),
    displayHomeMain(),
    displayFooter()
});

menuTab.addEventListener('click', () => { 
    wipe(),
    displayHeader(),
    displayMenuMain(),
    displayFooter()
});

contactTab.addEventListener('click', () => { 
    wipe(),
    displayHeader(),
    displayContactMain(),
    displayFooter()
});





