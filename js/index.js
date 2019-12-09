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

// Adding keydown event on input to validate form
let errorStatus = true;
const validator = {
    validateName(strToValidate) {
        return /^[a-zA-Z ]{5,30}/.test(strToValidate);  
    },

    validateEmail(emailToValidate) {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(emailToValidate);
    },
    validatePhoneNumber(phoneToValidate) {
        let re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        return re.test(phoneToValidate);
    },
    validate(type, value) {
        switch(type) {
            case 'fullname':
                return this.validateName(value);
            case 'email':
                return this.validateEmail(value);
            case 'phone':
                return this.validatePhoneNumber(value);
            default:
        }
    }
}

formContainer.querySelectorAll('form input')
.forEach(item => {
    item.addEventListener('keydown', e => {
        if (validator.validate(e.target.name, e.target.value)) {
            errorStatus = false;
            item.classList.remove('error');
        } else {
            errorStatus = true;
            item.classList.add('error');
        }
    })
})


// Gsap

gsap.from('.logo-heading', {opacity: 0, duration: 1, y: 20})
gsap.from('nav', {
    opacity: 0, 
    duration: 1, 
    y: -20,
    delay: 0.8
});
gsap.from('.intro-img', {
    opacity: 0,
    duration: 1,
    x: 30,
    delay: 0.9
});
gsap.from('.anime2', {
    opacity: 0,
    duration: 1,
    delay: 0.9,
    x: -30,
})
gsap.from('.destination', {
    opacity: 0, 
    duration: 1, 
    y: 20
})