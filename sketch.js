const container = document.querySelector(".container");


function createGrid(gridSize = 16) {
    for(let i = 0; i < gridSize; i++){
        const sketchpadRow = createRow();
        for(let j = 0; j < gridSize; j++) {
            const sketchpad = createSketchpad (sketchpadRow);
            sketchpadRow.appendChild(sketchpad);
        }
    }
    
    
}
function createRow () {
    const sketchpadRow = document.createElement("div");
    sketchpadRow.className = "sketchpadRow"
    container.appendChild(sketchpadRow);
    return sketchpadRow;
}

function createSketchpad (sketchpadRow) {
    const sketchpad = document.createElement("div")
    sketchpad.className = "sketchpad";
    sketchpadRow.appendChild(sketchpad);
    sketchpad.addEventListener("mouseover", sketch);
    return sketchpad;
}

function sketch (e) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    randomColor = "#" + randomColor;
    e.target.style.backgroundColor = randomColor
}



function newGrid() {
    const container = document.getElementsByClassName("container")[0]; 
    console.log(container)
    container.innerHTML = ""
    gridSize = prompt("How big do you want the grid to be? MAX OF 100");
    if(gridSize > 100) {
        return;
    }
    createGrid(gridSize);
};

createGrid ()
