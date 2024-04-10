const container = document.querySelector(".container");
const defaultDimension = 16;
let mode = "default";
const changeModeBtns = document.querySelectorAll(".changeMode");
for (let i = 0; i < changeModeBtns.length; i++) {
    changeModeBtns[i].addEventListener("click", function(event){
        let newMode = event.target.id;
        mode = newMode;
    })
}

addGrid(defaultDimension);


function addGrid(dimension) {
    let rowCount = dimension;
    while (rowCount > 0) {
        const row = document.createElement("div")
        row.setAttribute("class", "row");
        for (let i = 0; i < dimension; i++) {
            const square = document.createElement("div");
            square.classList.add("square", "off");
            square.addEventListener("mouseover", changeColor);
            row.appendChild(square);
        } 
        container.appendChild(row);
        rowCount--;
    }
}

function changeColor(event) {
    let classes = event.target.classList;
    for (let i = 0; i < classes.length; i++) {
        if (classes[i] === "off") {
            classes.remove("off");
            switch(mode) {
                case "default":
                    event.target.style.backgroundColor = "black";
                    classes.add("on");
                    break;
                case "randomizeColor":
                    let red = Math.floor(Math.random() * 256);
                    let green = Math.floor(Math.random() * 256);
                    let blue = Math.floor(Math.random() * 256);
                    event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
                    classes.add("on");
                    break;
                }
        }
    }

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