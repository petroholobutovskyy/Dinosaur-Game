const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const gameOverText = document.querySelector(".gameOverWarning");

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
    let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if(cactusLeft < 60 && cactusLeft > 0 && dinoBottom <= 60) {
        cactus.style.animation ="none";
        cactus.style.display ="none";
        gameOverText.classList.remove("hidden");
        gameOverText.classList.add("active")
        // alert("Przegraes:(");
    }
}, 100);