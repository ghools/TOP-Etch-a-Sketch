const container = document.querySelector(".container");


function createGrid(gridSize = 16) { //herre we are defining grideSize even though it doesn't HAVE to be called that (we use it again later), just makes most sense. but 16 is essentially "defualt" on first load.
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
    return sketchpadRow; //need to return this value since we are using this in other functions later and we need to return something.
}

function createSketchpad (sketchpadRow) {
    const sketchpad = document.createElement("div")
    sketchpad.className = "sketchpad";
    sketchpadRow.appendChild(sketchpad);
    sketchpad.addEventListener("mouseover", sketch, {once: true}); // because we are calling sketch, a function we will define later, we don't use () or pass anything inside.
    return sketchpad;
}

function sketch (e) { //important here to put e or EVENT as the arguement, we are passing the mouseover event, essentially.
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

createGrid () //how to call a function and have it autorun on a page.
