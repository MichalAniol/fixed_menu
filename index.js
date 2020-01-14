
window.onload = () => {
    const imgH = document.querySelector('.image').getBoundingClientRect().height,
        menu = document.querySelectorAll('.menu')[0],
        guy = document.querySelectorAll('.guy')[0],
        text = document.querySelectorAll('.image .text')[0];

    var menuFixed = false;

    text.style.fontSize = (window.innerWidth / 24) + 'px';
    window.addEventListener("resize", () => {
        text.style.fontSize = (window.innerWidth / 24) + 'px';
    });

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
            guy.style.top = (window.scrollY / 1.8) + 'px';
            text.style.top = ((imgH + window.scrollY) / 2) + 'px';
        }
    })
}