let mainDiv = document.querySelector("#carre") 

// put the ammount of pixels in a pixelAmmount value
const pixelAmmount = 1254 ;
for(let i = 0 ; i < 1254 ; i ++) {
    let pixel = document.createElement("div"); // renamed values that had a... "iets" as name before as "pixel" 
    pixel.classList.add("row")
    pixel.draggable == "false"
    mainDiv.append(pixel)
}



//  Renamed current to currentColor. 
let currentColor ; 

//  Renamed to chosenColor. 
const chosenColor = document.querySelector("#colorPicker");

// Renamed to currentColor and put the value as a const, 
currentColor = chosenColor.value 
chosenColor.addEventListener("change", function(e) {
        currentColor = this.value
    
}) 

//  renamed it to isDragging. 
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