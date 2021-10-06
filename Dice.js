//make container for dice
//Make dice border
// rearrange the buttons

//make the numbers for the dice
//Pray lol
document.addEventListener('DOMContentLoaded', function () {
    let dieContainer = document.createElement('div')
    document.body.appendChild(dieContainer)

    dieContainer.style.border = "10px solid black"
    dieContainer.style.height = "30em"
    const myButton = document.getElementById("dieGen")

    myButton.addEventListener("click", function(){
        console.log("I've been clicked")
        let Dice = document.createElement("div")
        dieContainer.appendChild(Dice)
        Dice.style.border = "5px solid black"
        Dice.style.height = "60px"
        Dice.style.width = "60px"
        Dice.style.float = "left"
        Dice.style.margin = "15px"
    })

    

})



// class Die {
//    constructor() {
//        this.value = value

//  }
//      roll() {

//}
//}
// const myButton = document.getElementById("dieGen")
// myButton.addEventListener(() => new Die())