let counter = document.getElementById('clicker__counter');
let count = parseInt(counter.textContent);
console.log(count);
let picture = document.getElementById('cookie')
let pictureNorm = picture.width;
picture.onclick = function(){
    count = count + 1;
    counter.textContent = count;
    if (count % 2 === 0) {
        picture.width = '400';
    } else {
        picture.width = pictureNorm;
    }
}
