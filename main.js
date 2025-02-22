// Get container div into a variiable
const container = document.querySelector(".container");

// Set specific width and heigth to be filled with pixels (grids)
container.style.cssText = "width: 500px; height: 500px";

// Store dimension in square pixels in a variable
const squaereDimensionsPixels = (container.offsetWidth * container.offsetHeight);


console.dir(container);

// Create Grid
createGrid();

// Create grid function 
function createGrid () {

    // Create squareDimensionsPixels/100 divs of 10 x 10 px
    for(let i = 0; i < squaereDimensionsPixels/100; i++) {

        // Create div
        const divGrid = document.createElement("div");
        divGrid.className = "grid";

        // Set dimensions of grids
        divGrid.style.cssText = "width: 10px; height: 10px; background-color: #ccc";

        // Add divs to container
        container.appendChild(divGrid);
    };
};

// Draw event
container.addEventListener("mouseover", draw);

// Draw function
function draw(e) {
    console.log(e.buttons);

    // Change color to black if a button is pressed
    if(e.buttons === 1)
    e.target.style.backgroundColor = "black";
}