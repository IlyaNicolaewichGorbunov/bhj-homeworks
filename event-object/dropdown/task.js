let dropdown__value = document.getElementsByClassName('dropdown__value');
let dropdown__list = document.getElementsByClassName('dropdown__list');
let dropdown__link = document.getElementsByClassName('dropdown__link');
let lang = dropdown__value[0].textContent;

function menu_close() {
    dropdown__list[0].classList.remove('dropdown__list_active');
    dropdown__value[0].textContent = lang;
}
function menu_open() {
    dropdown__list[0].classList.add('dropdown__list_active');
}

dropdown__value[0].addEventListener('click', menu_open);
for (let i = 0; i < dropdown__link.length; i = i + 1) {
    dropdown__link[i].addEventListener('click', (event) => {
        lang = dropdown__link[i].textContent;
        event.preventDefault();
        menu_close();
    });
}

