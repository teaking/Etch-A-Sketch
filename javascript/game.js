
/** check window resize to tell user to not resize below certain width */
window.addEventListener('resize', () =>{
    if(window.innerWidth < 900){
        alert("Screen size below preferred value!");
    }
});

const grid=document.querySelector('#grid');
let gridDimension=2;
createGame(grid, gridDimension);

function onMouseOver(){
    //change the color of boxes 
    let grids=document.querySelectorAll('.grid');
    grids.forEach(g => g.addEventListener('mouseover', e => {
	let alpha=parseFloat(e.target.style.opacity);
	alpha += 0.1;	// gradually change the transparency
	e.target.style.opacity= alpha;
    }));
    
}

function promptUser(){
    gridDimension=prompt("please enter the dimension value between 1 to 90!", "16");
    if(gridDimension <= 90 && gridDimension > 0){
        createGame(grid, gridDimension);
    }else{
        promptUser();
    }
}
let dim = document.querySelector('#setDimension');
dim.addEventListener('click', () => {
    promptUser();
});

let clr=document.querySelector('#clearBox');
clr.addEventListener('click', () => {
    createGame(grid, gridDimension);
   
});
/**
 * html2canvas function is used to save the image
 * https://html2canvas.hertzen.com/
 */
let save=document.querySelector('#save');
save.addEventListener('click', () =>{
    html2canvas(document.querySelector('#grid'),{
        onrendered: canvas =>{
            let image_ = new Image();
            image_.src = canvas.toDataURL("image/png");
            let newWindow = window.open("");
            newWindow.document.write(image_.outerHTML);

        }
    });
});


function createGame(grid, gridDimension){
    grid.innerHTML=''; 		// remove previous dom objects
    createBoxes( grid, gridDimension);
    boxSize(gridDimension);
    onMouseOver();
}


function createBoxes(g,gd){
    for(let i=0;i<gd;i++){
	let row=document.createElement('div');
	row.classList.add('gridRow');
	row.classList.add('row' + i);
	for(let j=0;j<gd;j++){
	    let box= document.createElement('div');
	    box.classList.add('grid');
	    box.style.opacity=0;	// initially transparent
	    box.style.backgroundColor='black';
	    row.appendChild(box);	
	}
	g.appendChild(row);

    }    
}

// set the size of the boxes
function boxSize(dimension){
    let d= Math.floor(600/dimension);
    let boxes=document.querySelectorAll('.grid');
    boxes.forEach(box => {
        box.style.height = `${d}px`;
        box.style.width = `${d}px`;
    });
}







