// find our elements
let stageContainer = document.getElementById("stage-container");
const circleButton = document.getElementById("circle-button");
let dateColor = document.getElementById("date-color");

// find stage container size
let stageContainerWidth = stageContainer.offsetWidth;
const stageContainerHeight = stageContainer.offsetHeight;
// circle starts off as black so that no circles show on the background at the star (probably could add a *required code rather than drawing black circles but hey it works)
let circleColor = "black";

dateColor.addEventListener("change", () => {
  // when date is changed change the circle colour
  circleColor =
    // changes circle colour to an hsl based off the date values given by the user
    // uses slices to break up the date value into their respective day month and year values
    // maths has been used to conver the numbers into their respectiv hsl values
    // the date has been converted to a number between 20 and 80 for lightness (0-100 was just making some dates black and white)
    // the month has been converted into a number between 0-360 for the hue
    // the year has been converted to a number between 0-100 for saturation
    // i decided on these design concepts because i feel like people grouped in the same month should be of the same colour
    // as it feels like a common ground and a shared value
    // the lightness of the date means that towards the end of the month the colours are lighter signifying the month is almost over
    // the year being saturation makes it so that the older you are the more dull the colour is which connotates
    // to having progressed further in life and also reflects on how we think of the olden days as "black and wbite"
    `hsl(${(dateColor.value.slice(5, 7) - 1) * 30}, 
  ${dateColor.value.slice(0, 4) - 1925}%, 
  ${(parseInt(dateColor.value.slice(8, 10)) + 9) * 2}%)`;
});

// create a stage the size of the container
const stage = new Konva.Stage({
  container: "konva-stage",
  width: stageContainerWidth,
  height: stageContainerHeight,
});

// add a layer
const firstLayer = new Konva.Layer();

stage.add(firstLayer);

// add circle interaction that creates a circle of a random size at a random place on the stage
function drawNewCircle() {
  const circle = new Konva.Circle({
    x: stage.width() * Math.random(),
    y: stage.height() * Math.random(),
    radius: 50 * Math.random(),
    fill: circleColor,
  });

  // add the circle every time the function is run and make it draggable
  firstLayer.add(circle);
  circle.draggable("true");

  // add the circle dragging cursors
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

// listens for when the create new circle button is clicked and runs the above function
circleButton.addEventListener("click", drawNewCircle);

// i decided to try and create colour from date because it seemed like a fun challenge that isnt typically ever thought about
// in coding or in the world really. it also gave me opportunities to express my creative design, deciding what values change
// which attributes about the colour. i also like maths so it gave me an excuse to do some lol :)
