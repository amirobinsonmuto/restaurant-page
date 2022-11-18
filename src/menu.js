
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
    const sushi0 = menuFactory ('1dbd4dec2233146c0b3f.png', 'Sushi0', 'Sushi 0 description');
    const sushi1 = menuFactory ('4af02a575fa5353f4722.png', 'Sushi1', 'Sushi 1 description');
    const sushi2 = menuFactory ('6a9330833932fa3591e7.png', 'Sushi2', 'Sushi 2 description');
    const sushi3 = menuFactory ('27fadbe4a042e9e8371d.png', 'Sushi3', 'Sushi 3 description');
    const sushi4 = menuFactory ('29a2b21cc50e25da5ed9.png', 'Sushi4', 'Sushi 4 description');
    const sushi5 = menuFactory ('5866e2aa3eea46c7bff8.png', 'Sushi5', 'Sushi 5 description');
    const sushi6 = menuFactory ('d2897d617d1d5ec9ac53.png', 'Sushi6', 'Sushi 6 description');
    const sushi7 = menuFactory ('f70bdc88f1c3a4c1f1ed.png', 'Sushi7', 'Sushi 7 description');
    const sushi8 = menuFactory ('ff9b18a3a8b2090dd0ed.png', 'Sushi8', 'Sushi 8 description');

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




//<div class="menuContainer">
    //         <div class="menuItem">
    //           <img src="1dbd4dec2233146c0b3f.png" width="120" height="120" alt="sushi1">
    //           <h3>Menu name</h3>
    //           <p>Menu description</p>
    //         </div>
    //         <div class="menu-item">
    //           <img src="1dbd4dec2233146c0b3f.png" width="120" height="120" alt="sushi1">
    //           <h3>Menu name</h3>
    //           <p>Menu description</p>
    //         </div>
    //         <div class="menu-item">
    //           <img src="1dbd4dec2233146c0b3f.png" width="120" height="120" alt="sushi1">
    //           <h3>Menu name</h3>
    //           <p>Menu description</p>
    //         </div>
    //         <div class="menu-item">
    //           <img src="1dbd4dec2233146c0b3f.png" width="120" height="120" alt="sushi1">
    //           <h3>Menu name</h3>
    //           <p>Menu description</p>
    //         </div>
    //         <div class="menu-item">
    //           <img src="1dbd4dec2233146c0b3f.png" width="120" height="120" alt="sushi1">
    //           <h3>Menu name</h3>
    //           <p>Menu description</p>
    //         </div>
    //         <div class="menu-item">
    //           <img src="1dbd4dec2233146c0b3f.png" width="120" height="120" alt="sushi1">
    //           <h3>Menu name</h3>
    //           <p>Menu description</p>
    //         </div>
    //         <div class="menu-item">
    //           <img src="1dbd4dec2233146c0b3f.png" width="120" height="120" alt="sushi1">
    //           <h3>Menu name</h3>
    //           <p>Menu description</p>
    //         </div>
    //         <div class="menu-item">
    //           <img src="1dbd4dec2233146c0b3f.png" width="120" height="120" alt="sushi1">
    //           <h3>Menu name</h3>
    //           <p>Menu description</p>
    //         </div>
    //       </div>

    //     </div>
    //   </main> 