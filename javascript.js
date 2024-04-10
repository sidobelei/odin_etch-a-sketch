const container = document.querySelector(".container");
const defaultDimension = 16;
let isNumber = false;

addGrid(defaultDimension);


function addGrid(dimension) {
    let rowCount = dimension;
    while (rowCount > 0) {
        const row = document.createElement("div")
        row.setAttribute("class", "row");
        for (let i = 0; i < dimension; i++) {
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            square.addEventListener("mouseover", changeColor);
            row.appendChild(square);
        } 
        container.appendChild(row);
        rowCount--;
    }
}

function changeColor(event) {
    event.target.style.backgroundColor = "black";
}

function changeGrid() {
    let gridSize = window.prompt("Select a new grid size (1-100):");
    gridSize = Number(gridSize);
    if (Number.isInteger(gridSize) === true){
        console.log('is number');
        if (gridSize >= 1 && gridSize <=100) {
            let rows = document.querySelectorAll(".row");
            for (let i = 0; i < rows.length; i++) {
                rows[i].remove();
            }
            addGrid(gridSize);
        }
    }
}