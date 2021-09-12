const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump() {
  if(dino.classList != 'jump') {
      dino.classList.add('jump');
  }
  setTimeout (function() {
      dino.classList.remove('jump')
  }, 500)
}

let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if(cactusLeft < 30 && cactusLeft > 0 && dinoTop >= 150) {
        // cactus.style.animation ="none";
        // cactus.style.display ="none";
        // alert("Przegraes:(");
    }
}, 100);