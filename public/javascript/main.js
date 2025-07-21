let mainDiv = document.querySelector("#carre") 
let divList = []
// Create rows 
for(let i = 0 ; i < 1254 ; i ++) {
    let iets = document.createElement("div");  
    iets.classList.add("row")
    iets.draggable == "false"
    mainDiv.append(iets)
}

console.log(divList)


// pickcolors 

let current ; 
// select the div containing the color-boxes 
let colors = document.querySelector("#colorPicker");
current = colors.value 
colors.addEventListener("change", function(e) {
        current = this.value
        console.log('current color is ' + current) 
    
}) 
let isClicking = false 
// send the color to the one of the divs above. 
mainDiv.addEventListener("mousedown", function(e) {
    console.log(e.target.classList)
    if(current != undefined && e.target.classList.contains("row")) {
        e.target.style.backgroundColor = current
        isClicking = true ; 
    }
    else {
        console.log('clicked on blanck') 
    }
})
mainDiv.addEventListener("mouseup", function() {
    isClicking = false ; 
})

mainDiv.addEventListener("mousemove", function(e){
    if(isClicking) {
        if(current != undefined && e.target.classList.contains("row")) {
            e.target.style.backgroundColor = current
        }
        else {
            console.log('clicked on blanck') 
        }
    }
})
