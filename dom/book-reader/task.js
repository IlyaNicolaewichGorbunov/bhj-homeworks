let fontSize = document.getElementsByClassName('font-size');
let textSize = document.getElementsByClassName('book');

function changeSize(name) {
    for (let i = 0; i < fontSize.length; i = i + 1) {
        fontSize[i].classList.remove('font-size_active');
    }
    name.classList.toggle('font-size_active');
    textSize[0].classList.remove('book_fs-big');
    textSize[0].classList.remove('book_fs-small');
    if (Array.from(name.classList).includes('font-size_small')) {
        textSize[0].classList.add('book_fs-small');
    } else if (Array.from(name.classList).includes('font-size_big')) {
        textSize[0].classList.add('book_fs-big');
    } 
}

for (let i = 0; i < fontSize.length; i = i + 1) {
    fontSize[i].addEventListener('click', (event) => {
        event.preventDefault();
        changeSize(fontSize[i]);
    });
}

