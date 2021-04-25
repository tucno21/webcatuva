const toggle = document.getElementById('toggle');
const navbarx = document.getElementById('navbarx');

const nav__menu1 = document.getElementById('nav__menu1');
const nav__menu2 = document.getElementById('nav__menu2');
const nav__menu3 = document.getElementById('nav__menu3');
const nav__menu4 = document.getElementById('nav__menu4');

toggle.onclick = function () {
    toggle.classList.toggle('activador');
    navbarx.classList.toggle('activador');
}

nav__menu1.onclick = function () {
    toggle.classList.remove('activador');
    navbarx.classList.remove('activador');
}
nav__menu2.onclick = function () {
    toggle.classList.remove('activador');
    navbarx.classList.remove('activador');
}
nav__menu3.onclick = function () {
    toggle.classList.remove('activador');
    navbarx.classList.remove('activador');
}
nav__menu4.onclick = function () {
    toggle.classList.remove('activador');
    navbarx.classList.remove('activador');
}