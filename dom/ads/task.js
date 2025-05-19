let elements = document.querySelectorAll('.rotator__case');
let namberOfTegWithClassRotatorCase;
if (elements.length > 0) {
    namberOfTegWithClassRotatorCase = 0;
}

setInterval(() => {
    elements[namberOfTegWithClassRotatorCase].classList.toggle('rotator__case_active');
    if (namberOfTegWithClassRotatorCase < elements.length - 1) {
        namberOfTegWithClassRotatorCase = namberOfTegWithClassRotatorCase + 1;
    } else {
        namberOfTegWithClassRotatorCase = 0;
    }
    elements[namberOfTegWithClassRotatorCase].classList.toggle('rotator__case_active');
}, 1000)