const toggle = document.getElementById('toggle');
const navbarx = document.getElementById('navbarx');

const nav__menu1 = document.getElementById('nav__menu1');
const nav__menu2 = document.getElementById('nav__menu2');
const nav__menu3 = document.getElementById('nav__menu3');
const nav__menu4 = document.getElementById('nav__menu4');
//======MODO ISCURO
const btnSwitch = document.querySelector('#switch')

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



//======MODO ISCURO
// const btnSwitch = document.querySelector('#switch')

// btnSwitch.addEventListener('click',()=>{
btnSwitch.onclick = function () {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

    //guardarmos el modo oscuro en localstorage.
    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');

    }else{
        localStorage.setItem('dark-mode', 'false');
    }

};

//obtenemos el modo actualizar
if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
}else{
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}

// // ANIMACION ============
const sr = ScrollReveal();

const animar = (clase, duracion, origen, distancia) => {
    sr.reveal(clase, {
        duration: duracion,
        origin: origen,
        distance: distancia,
        reset:true
    });
}

animar('.portada__title',2500,'top','20px');
animar('.portada__paragraph',2500,'top','20px');
animar('.portada__image',2500,'bottom','20px');

animar('.presentacion__title',2500,'top','20px');
animar('.presentacion__paragraph',2500,'top','20px');
animar('.presentacion__image',2500,'bottom','20px');

animar('.services__grandtitle',2500,'top','20px');
animar('.services__box',2500,'left','40px');

animar('.technology__title',2500,'top','20px');
animar('.technology__paragraph',2500,'top','20px');
animar('.technology__box',2500,'left','40px');



