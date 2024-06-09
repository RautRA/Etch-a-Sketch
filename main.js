const gridContainer = document.querySelector(".grid-container");

for(let i = 0; i < 16; i++) {
    const squareRow = document.createElement("div");
    squareRow.classList.add("row");
    gridContainer.appendChild(squareRow);

    for(let j = 0; j < 16; j++) {
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