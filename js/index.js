let numOfSquares = 6;
let colors = generateRandomColors(numOfSquares);
let squares = document.querySelectorAll('.square');
let colorDisplay = document.getElementById('colorDisplay');
let pickedColor = pickColor();
let message = document.getElementById('message');
let resetButton = document.querySelector('#reset');
let h1 = document.querySelector('h1');
let modeButtons = document.querySelectorAll('.mode');

reset();
setupMode();
setupSquare();

function setupMode() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function() {
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            this.classList.add('selected');
            this.textContent === 'Easy' ? numOfSquares = 3 : numOfSquares = 6;
            reset();
        })
    }
}

function reset() {
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i]
        } else {
            squares[i].style.display = 'none';
            // squares[i].style.backgroundColor = colors[i]
        }
    }
    h1.style.backgroundColor = 'steelblue';
    resetButton.textContent = 'New Colors';
    message.textContent = '';
}

resetButton.addEventListener('click', function() {
    reset();
})

function setupSquare() {
    for(let i = 0; i < squares.length; i++) {
        // add initial colors
        squares[i].style.backgroundColor = colors[i];
    
        //add click listeners to squares
        squares[i].addEventListener('click', function() {
            //grab color of click color and compare with picked color
            let clickedColor = this.style.backgroundColor;
            console.log(pickedColor);
            if (clickedColor === pickedColor) {
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
}

function changeColors(color) {
    // loop all colors
    for (let i = 0; i < squares.length; i++) {
        // change each color
        squares[i].style.backgroundColor = color;
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
    for (let i = 0; i < num; i++) {
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