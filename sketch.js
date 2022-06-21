const container = document.querySelector(".container");


function createGrid() {
    for(let i = 0; i < 16; i++){
        const sketchpadRow = createRow();
        for(let j = 0; j < 16; j++) {
            const sketchpad = createSketchpad (sketchpadRow);
            if(j === 15){
                sketchpadRow.appendChild(sketchpad);
            }
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
    return sketchpad;
}