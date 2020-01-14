const imgH = document.querySelector('.image').getBoundingClientRect().height;

const menu = document.querySelectorAll('.menu')[0];

var menuFixed = false;

window.addEventListener('scroll', (e) => {
    if (window.scrollY > imgH) {
        if (!menuFixed) {
            menu.style.position = 'fixed';
            menu.style.top = '0';
            menuFixed = true;
            console.log('%c menuFixed:', 'background: #ffcc00; color: #003300', menuFixed)
        }
    } else {
        if (menuFixed) {
            menu.style.position = 'relative'
            menu.style.top = 'auto'
            menuFixed = false;
            console.log('%c menuFixed:', 'background: #ffcc00; color: #003300', menuFixed)
        }
    }
})