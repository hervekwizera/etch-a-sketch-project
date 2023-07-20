let colorBtns = document.querySelectorAll(".colors .option")
let click = false
let board = document.querySelector(".board")
let sizeSlider = document.querySelector('#size-slider'),
colorPicker = document.querySelector("#color-picker"),
clear = document.querySelector("#clear-board")
let size = sizeSlider.value;
let selectedColor = "#000"
let squares = board.querySelectorAll('div')




function populateBoard(){
    let board = document.querySelector(".board");
    let square = board.querySelectorAll('div')
    square.forEach(div => div.remove())
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    let amount = size * size 
    for (let i = 0 ;i < amount; i++)
    { 
        let square = document.createElement("div");
        square.addEventListener('mouseover',colorSquare)
        square.style.background = 'white';
        board.insertAdjacentElement("beforeend",square);         
    }
            
}

function colorSquare(){   
    this.style.backgroundColor = selectedColor
}

function resetBoard(){
    let board = document.querySelector('.board')
    let squares = board.querySelectorAll('div')
    squares.forEach((div) => (div.style.backgroundColor = 'white'))
    sizeSlider.value = '12';
    document.querySelector('.mode').textContent =''
    clear.style.backgroundColor =window.getComputedStyle(clear).getPropertyValue('backgroun-color')
}

sizeSlider.addEventListener('change',() =>
    size = (sizeSlider.value),
    board.addEventListener('click',((e) =>{
        if(e.target.tagName != 'BUTTON'){
            if (!click) {
                document.querySelector('.mode').textContent ='sketching'
                populateBoard(size)
            }
        }
    })))

    colorBtns.forEach(btn => {
        btn.addEventListener('click',() => {
            document.querySelector(".options .selected").classList.remove("selected")
            btn.classList.add("selected")
            selectedColor = window.getComputedStyle(btn).getPropertyValue("background-color")
        })
    })

    colorPicker.addEventListener("change", () => {
        colorPicker.parentElement.style.backgroundColor = colorPicker.value
        colorPicker.parentElement.click()
        
    })
    
    function clearBoard(){
        selectedColor = clear.style.backgroundColor ="white"
        console.log(clear)
        console.log(selectedColor)
    
    }
    
    window.addEventListener('load',() => sizeSlider.value = '12')
    