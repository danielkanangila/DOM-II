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

// Added, handling click event on signup btn
// and scrolling to top
let targetEl = null;
const formContainer = document.getElementById('vacationFormContainer');
document.querySelectorAll('.destination .btn')
.forEach(item => {
    const formTitle = item.parentElement.querySelector('h4').textContent;
    targetEl = item.parentElement;
    item.addEventListener('click', () => {
        document.body.className = 'overflow-hidden';
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        formContainer.querySelector('h4').textContent = formTitle;
        formContainer.className = 'vacation-form';
    });
});

// Close form cotainer and scroll to last element position
document.querySelector('#close').addEventListener('click', () => {
    formContainer.classList = 'display-none';
    targetEl.scrollIntoView({ behavior: 'smooth', block: 'end' });
    document.body.classList.remove('overflow-hidden');
});

