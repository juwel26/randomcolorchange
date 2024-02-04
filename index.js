let suru = document.querySelector("#start")
let off  = document.querySelector("#stop")

let randomcolor = function(){
    let hexa = "0123456789ABCDEF"
    let color = "#"

    for(let i = 0; i<6; i++){
        color += hexa[Math.floor(Math.random() * 16)]
    }
    return color
}

console.log(randomcolor())
let interval
suru.addEventListener("click", function(){
     interval =  setInterval(changecolor,1000)
    function changecolor(){
        document.body.style.backgroundColor = randomcolor()
    }
    console.log(randomcolor())
})

off.addEventListener("click",()=>{
    clearInterval(interval)
    interval = null
})