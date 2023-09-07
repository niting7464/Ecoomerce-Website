// toggling theme

var toggle_sun = document.getElementById("toggle_sun");

toggle_sun.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(  document.body.classList.contains("dark-theme")){
         toggle_sun.src = "./images/home/moon.png";
    }else{
        toggle_sun.src = "./images/home/sun.png";
    }
}

// navbar

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('nav-bar');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
 

// sliding bar (category)

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})













