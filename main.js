// Get container div into a variiable
const container = document.querySelector(".container");
// Check container properties and methods
console.dir(container);

// // You can change width and height of the container to be filled with pixels (grids)
// container.style.cssText = "width: 500px; height: 500px";

// Store dimension in square pixels in a variable
const squaereDimensionsPixels = (container.offsetWidth * container.offsetHeight);

// Try storing dimensions of container with
// Element.getBoundingClientRect();
console.log(container.getBoundingClientRect());

// With this variable you can access easyli to height and width of the container (check the console)
const containerDimensions = container.getBoundingClientRect();
console.log(containerDimensions);

// Store button in variable
const newGridButton = document.querySelector("button");
console.log(newGridButton);

// Generate automatic grid
generateAutomaticGrid();

// Generate automatic grid of 16x16
function generateAutomaticGrid () {

    // Create 16x16 divs
    for(let i = 0; i < 16*16; i++) {

        // Create div
        const divGrid = document.createElement("div");
        divGrid.className = "grid";

        // Set dimensions of grids of containerDimension/16 (16x16 grids)
        divGrid.style.cssText = "width: "+containerDimensions.width/16+"px; height: "+containerDimensions.height/16+"px;";

        // Add divs to container
        container.appendChild(divGrid);
    };
};

let gridSize = "";

// Create New Grid event
newGridButton.addEventListener("click", createNewGrid);

// Create grid function 
function createNewGrid () {
    
    removeActualGrid();
    createGrid();

    function removeActualGrid () {

        container.innerHTML = "";

    };

    function createGrid () {

        

        do {
            // Ask user for grid size 
            gridSize = parseInt(prompt("Write the number of squares per size that you desire(No more than 100): ", 50));
            // Repeat until grid size is bigger than 100 or less than 0
        } while (gridSize <= 0 || gridSize > 100 || isNaN(gridSize) );

        // Create correct number of divs square divs [(gridSize x gridSize) because is a square]
        for(let i = 0; i < (gridSize*gridSize); i++) {

            // Create div
            const divGrid = document.createElement("div");
            divGrid.className = "grid";

            // Set dimensions of grids to fit inside the container
            divGrid.style.cssText = "width: "+containerDimensions.width/gridSize+"px; height: "+containerDimensions.height/gridSize+"px;";

            // Add divs to container
            container.appendChild(divGrid);
        };
    };

    
};

// Draw event form container
container.addEventListener("mouseover", draw);
container.addEventListener("mousedown", draw);

// Draw function
function draw(e) {
    console.log(e.buttons);

    // Change color only if button is pressed
    if(e.buttons === 1) {
        
        if (e.target.className === "grid-darked") {
            // Erase 
            e.target.className = "grid"
        } else {
            e.target.className = "grid-darked";
        };          
    };
};

// // Draw event from each div
// Array.from(container.children).forEach (div => {
//     div.addEventListener("mouseover", draw);
//     div.addEventListener("mousedown", draw);
// });

// // Draw function
// function draw(e) {
//     console.log(e.buttons);

//     // Change color only if button is pressed
//     if(e.buttons === 1) {
        
//         if (e.target.className === "grid-darked") {
//             // Erase 
//             e.target.className = "grid"
//         } else {
//             e.target.className = "grid-darked";
//         };          
//     };
// };