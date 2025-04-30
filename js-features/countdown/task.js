let timer = document.getElementById("timer");
let time = parseInt(timer.textContent);
console.log(time);
let intervalId = setInterval(function() {
    console.log('2', time);
    time = time - 1;
    timer.textContent = time;
    if (time === 0) {
        clearInterval(intervalId);
        alert('Вы победили в конкурсе!'); 
    }
}, 1000)

