// find elements to use
const introDialog = document.getElementById("intro-dialog");
const dialogClose = document.getElementById("dialog-close");
const playButton = document.getElementById("play-button");

introDialog.showModal();
dialogClose.addEventListener("click", () => {
  introDialog.close();
  Tone.start();
});

// synth init
const synth = new Tone.Synth().toDestination();

// play sound with tone
// function playNote() {
//   synth.triggerAttackRelease("C4, 8n");
// }

// playButton.addEventListener("click", playNote);

function startNote() {
  synth.triggerAttackRelease("C4");
  document.body.classList.add("animation");
  // synth.triggerAttackRelease("E4", now + 1);
  // synth.triggerAttackRelease("G4", now + 2);

  // document.body.style.backgroundColor = "blue";
}

function endNote() {
  synth.triggerRelease();
  document.body.classList.remove("animation");
}

playButton.addEventListener("mousedown", startNote);
playButton.addEventListener("mouseup", endNote);
playButton.addEventListener("mouseleave", endNote);
