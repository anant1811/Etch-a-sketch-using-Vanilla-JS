//select elements on the page

const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shake = document.querySelector('.shake');

//set up the canvas for drawing
const { width, height } = canvas;

console.log(width, height);

const MOVE_AMOUNT = 20;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

//create random x and y starting point in canvas

let x = Math.floor(Math.random() * width);
console.log(x);

let y = Math.floor(Math.random() * height);
console.log(y);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

ctx.beginPath(); //start the drawing

ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

//write a draw function

function draw ({ key }){

    //increment the hue

    hue = hue + 10;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    console.log(key);
    ctx.beginPath();
    ctx.moveTo(x, y);
    switch (key){
        case 'ArrowUp':
        y = y - MOVE_AMOUNT;
        break;   
        
            case 'ArrowRight':
                x = x + MOVE_AMOUNT;
                break;     

                    case 'ArrowDown':
                        y = y + MOVE_AMOUNT;
                        break;     
                            case 'ArrowLeft':
                                x = x - MOVE_AMOUNT;
                                break;   
                                default:
                                    break;    

    }
        y = y
    // x = x - MOVE_AMOUNT;
    // y = y - MOVE_AMOUNT;
    ctx.lineTo(x, y);
    ctx.stroke();

}

//write a handler for the keys

function handleKey(e){
   // e.preventDefault();

   if (e.key.includes('Arrow')){
     e.preventDefault();
     draw ({key: e.key}); 
    // console.log(e.key);
    // console.log(`Handling key`);
   }
}

// clear/shake function

function clearCanvas(){
    canvas.classList.add ('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener('animationend', function(){
    canvas.classList.remove('shake');
    }, {once:true});
}

//listen for arrow keys

window.addEventListener('keydown', handleKey);
shake.addEventListener('click', clearCanvas);
