// (238,0,220)
// (21,185,255)
// (255,168,21)
document.body.style.animationPlayState = "paused";
let audio = null;
let anim = null;
let audio_state = false;
let audioFirstTime = true;
let gifFirstTime = true;
console.log(anim);

window.onload = function(){
  audio = document.getElementById("caramelaudio");
  anim = document.getElementById("duckanim");
  document.getElementById("caramelaudio").volume = 0.15;
}

// function handleFirstPlay(event) {
//   if(audioFirstTime === true) {
//     audioFirstTime = false;
    
//     let aud = event.target;

//     aud.onplay = null;

//   }
function handleAudioState() {
  if (gifFirstTime === true) {
    gifFirstTime = false;
    anim.src = "duck.gif";
  }
  if (audio_state === false) {
    audio_state = true;
    audio.play();
    anim.src = "duck.gif";
    document.body.style.animationPlayState = "running";
  } else {
    audio_state = false;
    audio.pause();
    anim.src = "duck.png";
    document.body.style.animationPlayState = "paused";
  }
}
