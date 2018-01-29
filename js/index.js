let colors = generateRandomColors(6);

let squares = document.querySelectorAll('.square');
let colorDisplay = document.getElementById('colorDisplay');
let pickContent = pickColor();
let message = document.getElementById('message');
let resetButton = document.querySelector('#reset');
let h1 = document.querySelector('h1');

console.log(resetButton);

resetButton.addEventListener('click', function() {
    colors = generateRandomColors(6);
    pickContent = pickColor();
    colorDisplay.textContent = pickContent;
    for (let index = 0; index < squares.length; index++) {
        squares[index].style.backgroundColor = colors[index]
    }
    h1.style.backgroundColor = 'steelblue';
    resetButton.textContent = 'New Colors';
})

colorDisplay.textContent = pickContent;

for(let i = 0; i < squares.length; i++) {
    // add initial colors
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener('click', function() {
        //grab color of click color and compare with picked color
        let clickedColor = this.style.backgroundColor;
        console.log(pickContent);
        if (clickedColor === pickContent) {
            message.textContent = 'Correct!';
            changeColors(clickedColor);
            resetButton.textContent = 'Play again?'
            h1.style.backgroundColor = clickedColor;
        } else {
            message.textContent = 'Try Again'
            this.style.backgroundColor = '#232323';
        }
    })
}

function changeColors(color) {
    // loop all colors
    for (let index = 0; index < squares.length; index++) {
        // change each color
        squares[index].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make an array
    let arr = [];

    // add num random colors to array
    for (let index = 0; index < num; index++) {
        //get random color and push into array
        arr.push(randomColor());
    }

    return arr;
}

function randomColor() {
    // r color
    let r = Math.floor(Math.random() * 256);

    // g color
    let g = Math.floor(Math.random() * 256);

    // b color 
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

console.log(squares);