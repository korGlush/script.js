let btn = document.querySelector('#btn')
let text = document.querySelector('#text')
let range = document.querySelector('#range')
let circle = document.querySelector('#circle')
let rangeSpan = document.querySelector('#range-span')
let e_btn = document.querySelector('#e_btn')

function start() {
    rangeSpan.textContent = 50
    circle.style.height = range.value + '%'
    circle.style.width = range.value + '%'
    e_btn.style.display = 'none'
}


const color = function() {
    btn.style.backgroundColor = text.value
}


const position = function(){
    circle.style.height = range.value + '%'
    circle.style.width = range.value + '%'
    rangeSpan.textContent = event.target.value
}

start()
btn.addEventListener('click', color)
range.addEventListener('input', position)