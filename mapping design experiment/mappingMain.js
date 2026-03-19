// find our element
const stageContainer = document.getElementById("stage-container");
const circleButton = document.getElementById("circle-button");

// find stage container dimensions dynamically when window is loaded and resized
let stageContainerWidth = stageContainer.offsetWidth;
let stageContainerHeight = stageContainer.offsetHeight;
let circleColor = "red";

// create a stage
const stage = new Konva.Stage({
  container: "konva-stage",
  width: stageContainerWidth,
  height: stageContainerHeight,
});

const firstLayer = new Konva.Layer();

stage.add(firstLayer);

// add interaction
function drawNewCircle() {
  const circle = new Konva.Circle({
    x: stage.width() * Math.random(),
    y: stage.height() * Math.random(),
    radius: 50 * Math.random(),
    fill: circleColor,
  });
  // add the circle every time
  firstLayer.add(circle);
  circle.draggable("true");

  circle.on("mouseenter", function () {
    stage.container().style.cursor = "pointer";
  });
  circle.on("mouseleave", function () {
    stage.container().style.cursor = "default";
  });
  circle.on("mousedown", function () {
    stage.container().style.cursor = "grab";
  });
  circle.on("mouseup", function () {
    stage.container().style.cursor = "pointer";
  });
}

circleButton.addEventListener("click", drawNewCircle);

circle.draggable("true");

// circle.on("mouseenter", function () {
//   stage.container().style.cursor = "pointer";
// });
// circle.on("mouseleave", function () {
//   stage.container().style.cursor = "default";
// });
// circle.on("mousedown", function () {
//   stage.container().style.cursor = "grab";
// });
// circle.on("mouseup", function () {
//   stage.container().style.cursor = "pointer";
// });
