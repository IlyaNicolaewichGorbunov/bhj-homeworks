let tab_name = document.getElementsByClassName('tab');
let tab_text = document.getElementsByClassName('tab__content');
let index

function switching() {
    let arr = Array.from(tab_name);
    for (let j = 0; j < tab_name.length; j = j+1) {
        tab_name[j].classList.remove('tab_active');
        tab_text[j].classList.remove('tab__content_active');
        if (arr[j].textContent === this.textContent) {
            index = j;
        }
    }
    this.classList.add('tab_active');
    tab_text[index].classList.add('tab__content_active')
 }

for (let i = 0; i < tab_name.length; i = i+1) {
    tab_name[i].addEventListener('click', switching);
}