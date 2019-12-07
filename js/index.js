// Add mouseover effect on nav items
document.querySelectorAll('nav a')
    .forEach((item, index) => {
        let navLinkSpan = document.createElement('span');
        const id = `navLinkSpan${index}`;
        navLinkSpan.setAttribute('id', id);
        item.appendChild(navLinkSpan);

        item.addEventListener('mouseover', () => {
            navLinkSpan = document.getElementById(id);
            navLinkSpan.className = 'nav-link-hover-show';
        })
        item.addEventListener('mouseout', () => {
            navLinkSpan = document.getElementById(id);
            navLinkSpan.className = 'nav-link-hover-hide';
        })
    });

