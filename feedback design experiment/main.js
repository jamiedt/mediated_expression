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
function playNote() {
  synth.triggerAttackRelease("C4, 8n");
}

// playButton.addEventListener("click", playNote);

function startNote() {
  synth.triggerAttackRelease("C4");
}

function endNote() {
  synth.triggerRelease();
}

playButton.addEventListener("mousedown", startNote);
playButton.addEventListener("mouseup", endNote);
playButton.addEventListener("mouseleave", endNote);
