// side menu functionality
const sideMenu = document.querySelector('.hamburger-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');


sideMenu.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

// smooth close side menu on link click
const menuLinks = document.querySelectorAll('.off-screen-menu .menu-items a');
menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        sideMenu.classList.remove('active');
        offScreenMenu.classList.remove('active');
        charInfo.classList.remove('menu-open');

        setTimeout(() => {
            window.location.href = link.href;
        }, 500);
    });
});

// top nav functionality
// hide top nav on scroll down
// show on scroll up or near top
let prevScrollpos = window.pageYOffset;
const nav = document.querySelector('.top-nav');

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (currentScrollPos < 100) {
        nav.classList.remove('hidden');
    } else if (prevScrollpos > currentScrollPos) {
        nav.classList.remove('hidden');
    } else {
        nav.classList.add('hidden');
    }
    prevScrollpos = currentScrollPos;
}

// side nav functionality
const sideNav = document.querySelector('.off-screen-menu');