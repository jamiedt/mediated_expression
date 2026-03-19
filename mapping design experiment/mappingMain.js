// find our element
let stageContainer = document.getElementById("stage-container");
const circleButton = document.getElementById("circle-button");
let dateColor = document.getElementById("date-color");

// find stage container size
let stageContainerWidth = stageContainer.offsetWidth;
const stageContainerHeight = stageContainer.offsetHeight;
let circleColor = "black";

dateColor.addEventListener("change", () => {
  // when date is changed change the circle colour
  circleColor =
    // changes circle colour to an hsl
    `hsl(${(dateColor.value.slice(5, 7) - 1) * 30}, 
  ${dateColor.value.slice(0, 4) - 1925}%, 
  ${(parseInt(dateColor.value.slice(8, 10)) + 9) * 2}%)`;
});

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

  // add the circle dragging mechanism
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
