//home site//
const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');
const Home = document.querySelector('.home-nuts');
const imgNuts = document.querySelector('.img-nuts');

menu.addEventListener('click', () =>{
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
    Home.classList.toggle('ativo');
    imgNuts.classList.toggle('ativo');
})

//quem somos site//
document.getElementById('next').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scrollLeft += widthItem;
}
document.getElementById('prev').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scrollLeft -= widthItem;
}


//Botão Voltar ao Topo//
const scrollAnima = document.querySelector('[data-anima="scroll"]')

const threshold = window.innerHeight * 0.8;

function animarScroll(){
    const topoItem = scrollAnima.getBoundingClientRect().top;

    const itemVisivel = topoItem < threshold;

    if(itemVisivel){
        scrollAnima.classList.add('show-button');
    }else{
        scrollAnima.classList.remove('show-button');
    };
};

window.addEventListener('scroll' , animarScroll);