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

let dim = document.querySelector('#setDimension');
dim.addEventListener('click', function(){
    gridDimension=prompt("please enter the dimension", "16");
    createGame(grid, gridDimension);
});

let clr=document.querySelector('#clearBox');
clr.addEventListener('click', function(){
    createGame(grid, gridDimension);
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
	    // box.classList.add('grid'+j);
	    box.style.opacity=0;	// initially transparent
	    // cols.textContent= j;
	    box.style.backgroundColor='black';
	    row.appendChild(box);	
	}
	g.appendChild(row);

    }    
}

// set the size of the boxes
function boxSize(dimension){
    console.log('Setting box size');
    let d= Math.floor(600/dimension);
    let box=document.querySelectorAll('.grid');
    box.forEach(g => {
	g.style.height = `${d}px`;
	g.style.width = `${d}px`;
    });
}






