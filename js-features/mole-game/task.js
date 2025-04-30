let inaim = document.getElementById('dead');
let notinaim = document.getElementById('lost');
let count_inaim = 0;
let count_notinaim = 0;
function do_zero() {
  count_inaim = 0;
  count_notinaim = 0;
  inaim.textContent = 0;
  notinaim.textContent = 0;
}

setInterval(() => {
  for (var i=1; i<9; i=i+1) {
    let getclass = document.getElementById("hole"+i);
    let nameclass = getclass.className;
    if (nameclass === 'hole hole_has-mole') {
      break;
      }
  }
  for (let j=1; j<9; j=j+1) {
    let hole = document.getElementById('hole'+j);
    hole.onclick = function() {
      if (j ===i) {
        count_inaim = count_inaim +1
        inaim.textContent = count_inaim;
      } else {
        count_notinaim = count_notinaim +1;
        notinaim.textContent = count_notinaim;
      }
    }
  }
  if (count_inaim === 10) {
    alert('Вы выиграли))');
    do_zero();
  }
  if (count_notinaim === 5) {
    alert('Вы проиграли(((');
    do_zero();
  }

}, 100);

