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