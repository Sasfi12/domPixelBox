let mainDiv = document.querySelector("#carre") 
let divList = []
// Create rows 
for(let i = 0 ; i < 234 ; i ++) {
    let iets = document.createElement("div");  
    iets.classList.add("row")
    iets.draggable == "false"
    mainDiv.append(iets)
}

console.log(divList)


// pickcolors 
let colorsList = [
    "red",
    "green",
    "yellow",
    "blue",
    "purple",
    "blueviolet",
    "lime",
    "chocolate",
    "aquamarine",
    "white"
]
let current ; 
// select the div containing the color-boxes 
let colors = document.querySelector(".carrés");

colors.addEventListener("click", function(e) {
    if(colorsList.includes(e.target.classList[1])) {
        current = e.target.classList[1]
        console.log('current color is ' + current) 
    }
    
}) 
let bool = false 
// send the color to the one of the divs above. 
mainDiv.addEventListener("mousedown", function(e) {
    console.log(e.target.classList)
    if(current != undefined && e.target.classList.contains("row")) {
        e.target.classList = "row " + current
        bool = true ; 
    }
    else if ((current == undefined && e.target.classList.contains("row"))) {
        e.target.classList = "row white"
    }
    
})
mainDiv.addEventListener("mouseup", function() {
    bool = false ; 
})

mainDiv.addEventListener("mousemove", function(e){
    if(bool) {
        e.target.classList = "row " + current
    }
})