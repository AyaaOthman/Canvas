const canvas = document.getElementById('canvas')
const btnDecrease = document.getElementById('decrease')
const btnIncrease = document.getElementById('increase')
const fontNr = document.getElementById('value')
const colorEl = document.getElementById('color')
const btnDel = document.getElementById('del')
const ctx = canvas.getContext('2d');


let size = 10
let color = 'black'
let x
let y
let isPressed = false

canvas.addEventListener('mousedown', (e) =>{
isPressed = true
x = e.offsetX
y = e.offsetY
})
canvas.addEventListener('mouseup', (e) =>{
isPressed = false
x = undefined
y = undefined
})
canvas.addEventListener('mousemove', (e) =>{
if(isPressed){
const x1 = e.offsetX
const y1 = e.offsetY
drawCircle(x1,y1)
drawLine(x,y,x1,y1)
x = x1
y = y1
}})


function drawCircle (x, y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color
    ctx.fill()
}
function drawLine (x1, y1, x2, y2){
ctx.beginPath()
ctx.moveTo(x2,y2) 
ctx.lineTo(x1,y1)
ctx.strokeStyle = color
ctx.lineWidth = size * 2.25
ctx.stroke()
}
function updateSizeNr(){
    fontNr.innerText = size
}

colorEl.addEventListener('change', (e) =>{
   color =  e.target.value
})
btnIncrease.addEventListener('click', ()=>{
    size += 5
    if(size > 30){
        size = 30
    }
    updateSizeNr()
})
btnDecrease.addEventListener('click', ()=>{
    size -= 5
    if(size < 5){
        size = 5
    }
    updateSizeNr()
})
btnDel.addEventListener('click', () => ctx.clearRect(0,0,canvas.width, canvas.height))
