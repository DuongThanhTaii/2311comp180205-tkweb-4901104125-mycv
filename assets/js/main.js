// cuon cuon 
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset &&  top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');

        }
    })

    // dinh dinh
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scroll > 100);
}


// hide nav 
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

const   navToggle = document.querySelector('.ti-menu'),
        navClose = document.querySelector('.ti-close');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('ti-menu')
    menuIcon.classList.toggle('ti-close')
    navBar.classList.toggle('hidden')
}


// hiddden cv 




