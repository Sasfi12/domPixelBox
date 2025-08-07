let mainDiv = document.querySelector("#carre") 

const pixelAmmount = 1254 ;
for(let i = 0 ; i < pixelAmmount ; i ++) {
    let pixel = document.createElement("div"); 
    pixel.classList.add("row")
    pixel.draggable == "false"
    mainDiv.append(pixel)
}



let currentColor ; 

const chosenColor = document.querySelector("#colorPicker");

currentColor = chosenColor.value 
chosenColor.addEventListener("change", function(e) {
        currentColor = this.value
    
}) 

let isDragging = false 
mainDiv.addEventListener("mousedown", function(e) {
    console.log(e.target.classList)
    if(currentColor != undefined && e.target.classList.contains("row")) {
        e.target.style.backgroundColor = currentColor
        isDragging = true ; 
    }
    else {
        console.log('clicked on blanck') 
    }
})
mainDiv.addEventListener("mouseup", function() {
    isDragging = false ; 
})


mainDiv.addEventListener("mousemove", function(e){
    if(isDragging) {
        if(currentColor != undefined && e.target.classList.contains("row")) {
            e.target.style.backgroundColor = currentColor
        }
        else {
            console.log('clicked on blanck') 
        }
    }
})