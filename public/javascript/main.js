let mainDiv = document.querySelector("#carre") 
// What is div list ?  Why is it never used ?
// If it is dead code, remove it
let divList = []
// How did you get this 1254 ?
// Put it in a constant
for(let i = 0 ; i < 1254 ; i ++) {
    let iets = document.createElement("div");  
    iets.classList.add("row")
    iets.draggable == "false"
    mainDiv.append(iets)
}

// No console log in final code, only use it for debugging
console.log(divList)


// current what ?
// explicitly says if it is current color
let current ; 

// instead of colors, I would name it color picker
// if you put colors, it means this maybe an array of colors
let colors = document.querySelector("#colorPicker");

// you are declaring color above but assigning it only there
// also, if you dont override its value later, better put it in a constant
current = colors.value 
colors.addEventListener("change", function(e) {
        current = this.value
        console.log('current color is ' + current) 
    
}) 

// better to name it isDragging
let isClicking = false 
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