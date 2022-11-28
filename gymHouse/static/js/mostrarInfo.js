const wellness = document.getElementById('sobrenosotros__info--wellness');
const wellnessMin = document.getElementById('sobrenosotros__info--wellness-min');
const wellnessMax = document.getElementById('sobrenosotros__info--wellness-max');
const buttonCerrarWellnes = document.getElementById('close_wellness');

const webpage = document.getElementById('sobrenosotros__info--webpage');
const webpageMin = document.getElementById('sobrenosotros__info--webpage-min');
const webpageMax = document.getElementById('sobrenosotros__info--webpage-max');
const buttonCerrarWebpage = document.getElementById('close_webpage');

const container = document.getElementById('sobrenosotros__info--container');

wellnessMin.addEventListener('click', (e) =>{
    wellnessMin.classList.add('desactive');
    if (webpage.classList.contains('active')) {
        wellness.classList.add('active');
        wellnessMax.classList.add('active');
    } else {
        container.style.flexWrap = 'wrap';
        wellness.classList.add('active');
        wellnessMax.classList.add('active');
    }
});

buttonCerrarWellnes.addEventListener('click', (e) =>{
    wellness.classList.remove('active');
    wellnessMax.classList.remove('active');
    wellnessMin.classList.remove('desactive');
});

webpageMin.addEventListener('click', (e) =>{
    webpageMin.classList.add('desactive');
    if (wellness.classList.contains('active')) {
        webpage.classList.add('active');
        webpageMax.classList.add('active');
    } else {
        container.style.flexWrap = 'wrap-reverse';
        webpage.classList.add('active');
        webpageMax.classList.add('active');
    }
});

buttonCerrarWebpage.addEventListener('click', (e) =>{
    webpage.classList.remove('active');
    webpageMax.classList.remove('active');
    webpageMin.classList.remove('desactive');
});
