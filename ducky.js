// (238,0,220)
// (21,185,255)
// (255,168,21)
let hasPlayed = false;
document.body.style.animationPlayState = "paused";
function handleFirstPlay(event) {
  if(hasPlayed === false) {
    hasPlayed = true;
    
    let aud = event.target;

    aud.onplay = null;

    document.getElementById("caramelaudio").volume = 0.15
    document.getElementById("duckpng").src = "duck.gif";
    document.body.style.animationPlayState = "running";
  }
}
// function colorfulBackground() {
//     let colors = ["#ee00dc", "#15b9ff", "#ffa915"];
//     for (color=0; color<3; color++) {
//             curr_color = colors[color];
//             for (trans=0; trans<60; trans++) {
//                 document.body.style.backgroundColor = curr_color;
//             }
//         }
// }