const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav__menu');

nav.addEventListener('click',(e) =>{
    if(e.target.classList.contains('nav__btnMenu') || e.target.classList.contains('fa-bars') || e.target.classList.contains('nav__menu-link')){
        navMenu.classList.toggle('activadorShow')
    }
})


//======MODO ISCURO
const btnSwitch = document.querySelector('#switch')

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



