let elements = document.querySelectorAll('.reveal');
let plase;
letShow();
function letShow() {
    for (var i = 0; i < elements.length; i = i + 1) {
        plase = elements[i].getBoundingClientRect();
            if (plase.top < window.innerHeight && plase.bottom > 0) {
                elements[i].classList.add('reveal_active');
            } else {
                elements[i].classList.remove('reveal_active');
            }
    }
}
window.addEventListener('scroll', letShow);
