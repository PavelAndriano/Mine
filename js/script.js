// let number = Number(prompt('Напишите код'))

const textElement = document.querySelector('.main__text');
const buttonElement = document.querySelector('.main__btn');
const inputElement = document.querySelector('.main__input');

buttonElement.addEventListener("click", clicked);

let suppliers = [
    [3072, "8 нан оптипро (800г), 1 симилак голд (800г)", "заработок 1400",]
    [7368, "Авент бутылка стекл большая 5шт, Авент бутылка пластик",]
]


function clicked() {
    if (inputElement.value == 1234) {
        textElement.innerHTML = `24 авент; 12 lovi`;
    }
    else if (inputElement.value == 1234) {
    }

}


