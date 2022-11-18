export function displayContactMain () {
    //main
    const main = document.createElement('main');

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