const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const gameOverText = document.querySelector(".gameOverWarning");
const game = document.querySelector(".game");
const text = document.querySelector(".text")
const resultInfo = document.querySelector(".resultInfo")
let singleJump = 0;

document.addEventListener("keydown", function(event) {
    jump();
    
    singleJump++;
    console.log(singleJump);
    // const numberOfJumps = document.createElement("p").innerText= `Number of jumps: ${singleJump}`;
    // game.appendChild(numberOfJumps)
    text.innerHTML =`Number of jumps: ${singleJump}`

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
        gameOverText.classList.add("active");
        resultInfo.innerHTML =  `Your result: ${singleJump}`;
       
        text.classList.add("hidden")
        
    }
}, 100);