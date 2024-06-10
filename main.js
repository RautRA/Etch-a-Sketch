const gridContainer = document.querySelector(".grid-container");
const gridSizeBtn = document.querySelector(".grid-size-btn");

function generateGrid(gridSize) {
    gridContainer.innerHTML = "";
    
    for(let i = 0; i < gridSize; i++) {
        const squareRow = document.createElement("div");
        squareRow.classList.add("row");
        gridContainer.appendChild(squareRow);
        
        for(let j = 0; j < gridSize; j++) {
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("square");
            squareRow.appendChild(squareDiv);
        }
    }

    const squareDivs = document.querySelectorAll(".square");
    
    squareDivs.forEach(squareDiv => {
        squareDiv.addEventListener("mouseover", () => {
            squareDiv.style.backgroundColor = "black";
        });
    });
}

gridSizeBtn.addEventListener("click", () => {
    const gridSize = Number(prompt("Enter the dimension for the new grid between 2 to 100: ", 16));
    if (!gridSize) {
        alert("Please specity a number between 2 to 100")
    } else if (gridSize > 100 || gridSize < 2) {
        alert("Sorry you can only specity a number between 2 to 100")
    } else {
        generateGrid(gridSize);
    }
});

generateGrid(16);