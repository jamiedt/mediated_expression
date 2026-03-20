// find elements to use
const introDialog = document.getElementById("intro-dialog");
const dialogClose = document.getElementById("dialog-close");
const playButton = document.getElementById("play-button");

// starts the webpage when the intro dialog is acknowledged
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

// plays a sound and starts the animation
function startNote() {
  synth.triggerAttackRelease("C4");
  document.body.classList.add("animation");
}

// ends the sound and gets rid of the animation
function endNote() {
  synth.triggerRelease();
  document.body.classList.remove("animation");
}

// runs the respective functions when the button is clicked
playButton.addEventListener("mousedown", startNote);
playButton.addEventListener("mouseup", endNote);
playButton.addEventListener("mouseleave", endNote);

// my goal here was to create a smooth and simplistic feel to my site but one that feels
// satisfying and intuitive to use. by using transitions and relaxing colours i have achieved
// this while still giving the user the feedback they need when using the site
