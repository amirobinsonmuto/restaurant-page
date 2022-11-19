
export function displayMenuMain() {

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