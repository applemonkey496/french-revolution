
const nav = document.querySelector('.nav');

document.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight * 0.75) {
        nav.style.opacity = 1;
    } else {
        nav.style.opacity = 0;
    }
})
