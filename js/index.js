// Add mouseover effect on nav items
// and stop nav items from refreshing the page
document.querySelectorAll('nav a')
    .forEach((item, index) => {
        let navLinkSpan = document.createElement('span');
        const id = `navLinkSpan${index}`;
        navLinkSpan.setAttribute('id', id);
        item.appendChild(navLinkSpan);

        item.addEventListener('mouseover', () => {
            navLinkSpan = document.getElementById(id);
            navLinkSpan.className = 'nav-link-hover-show';
        });
        item.addEventListener('mouseout', () => {
            navLinkSpan = document.getElementById(id);
            navLinkSpan.className = 'nav-link-hover-hide';
        });
        item.addEventListener('click', e => e.preventDefault());
    });

// Added from to the dom
const formTemplate = document.getElementById('formTemplate');
const formTemplateContent = formTemplate.content;
document.body.appendChild(formTemplateContent);