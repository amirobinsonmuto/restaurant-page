

export function displayHeader() {
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
            home.setAttribute('id', 'home');
            const menu = document.createElement('li');
            menu.setAttribute('id', 'menu');
            const contact = document.createElement('li');
            contact.setAttribute('id', 'contact');

            home.textContent = "Home";
            menu.textContent = "Menu";
            contact.textContent = "Contact";

            navUl.append(home, menu, contact);
            nav.appendChild(navUl);

        content.appendChild(nav);
};

export function displayHomeMain () {
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

export function displayFooter() {
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
    