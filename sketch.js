const container = document.querySelector(".container");


function createGrid() {
    for(let i = 0; i < 16; i++){
        const sketchpadRow = createRow();
        for(let j = 0; j < 16; j++) {
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


createGrid()