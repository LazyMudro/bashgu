const docs = document.querySelectorAll('.document');
const login =  document.querySelector('.login');
const register =  document.querySelector('.register');
const back = document.querySelector('.back');
const info =  document.querySelector('.info');
const newsBlock = document.querySelector('.news-block');
const polls = document.querySelector('.polls');
const ar = document.querySelector('.ar');
const footer = document.querySelector('.footer');
const blank = document.querySelector('.blank');
const reg = document.querySelector('.reg');
const reg2 = document.querySelector('.reg-2');
const timest = document.querySelector('.time');
const regf = document.querySelector('.registration-form')
const regForm = document.querySelector('.registration-form');
const rating = document.querySelector('.rating');
const perfomance = document.querySelector('.perfomance');
const backUsp = document.querySelector('.back-usp');


let isNon = true;
let isLog = false;

[].forEach.call(docs,function(el){
    el.addEventListener('click', function () {
    // if (isNon){
        info.classList.add('non');
        newsBlock.classList.add('non');
        polls.classList.add('non');
        ar.classList.add('non');
        footer.classList.add('non');
        blank.classList.remove('non');

        isNon = false;
    // }
})
});

rating.addEventListener('click', () => {
    perfomance.classList.remove('non')
    newsBlock.classList.add('non')
    polls.classList.add('non')
    ar.classList.add('non')
    info.classList.add('non')
    footer.classList.add('non')
    regf.classList.add('non')
    reg.classList.add('non')
})
backUsp.addEventListener('click', () => {
    perfomance.classList.add('non')
    newsBlock.classList.remove('non')
    polls.classList.remove('non')
    ar.classList.remove('non')
    info.classList.remove('non')
    footer.classList.remove('non')
})

reg2.addEventListener('click', () => {
    regf.classList.add('non')
    reg.classList.add('non')
    timest.classList.remove('non')
})
back.addEventListener('click', () => {
    // if (isNon == false){

    info.classList.remove('non');
    newsBlock.classList.remove('non');
    polls.classList.remove('non');
    ar.classList.remove('non');
    footer.classList.remove('non');
    blank.classList.add('non');
    isNon = true;
    // }
})
register.addEventListener('click', () => {
    regForm.classList.remove('non')
    reg.classList.add('non')
})

ar.addEventListener('click', () => {
    alert('Эта функция пока недоступна')
})
login.addEventListener('click', () => {
    reg.classList.add('non')
    timest.classList.remove('non')
})
// info
// news-block
// polls
// ar
// footer