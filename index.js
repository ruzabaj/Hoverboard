const container= document.getElementById('container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71' ]
const numberSquare = 505;


const pen =document.querySelector('.pen');
const eraser =document.querySelector('.eraser');

for(let i=0; i<=numberSquare; i++){
    const square = document.createElement('div')
    square.classList.add('square');
    console.log(getRandomColor());

    //set color on mouse hover
    square.addEventListener('mouseover', () => setColor(square));
    pen.addEventListener('click', () =>{
        square.addEventListener('mouseover', () => setColor(square))
    })
    
    //remove color on using eraser
    eraser.addEventListener('click', () =>{
        square.addEventListener('mouseover', () => removeColor(square))
    })
    container.appendChild(square);
}


function setColor(square){
    const randomColor = getRandomColor();
    square.style.background = randomColor;
    square.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`
}

function removeColor(square){
    square.style.background = '#1d1d1d';
    square.style.boxShadow = 'none';
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}