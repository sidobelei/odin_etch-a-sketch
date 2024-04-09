const container = document.querySelector(".container");
const defaultDimension = 16;

addGrid(defaultDimension);

function addGrid(dimension) {
    let rowCount = dimension;
    while (rowCount > 0) {
        const row = document.createElement("div")
        row.setAttribute("class", "row");
        for (let i = 0; i < dimension; i++) {
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            row.appendChild(square);
        } 
        container.appendChild(row);
        rowCount--;
    }
}