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
    const rollBtn = document.getElementById("diceRoll")

    myButton.addEventListener("click", function () {
        console.log("I've been clicked")
        new Die()


    })
    rollBtn.addEventListener("click", function () {
        console.log("Still works")
        Die.roll()
    })
    class Die {
        constructor() {
            let Dice = document.createElement("div")
            this.value = Math.floor(Math.random() * 7)
            Dice.textContent = this.value
            Dice.style.border = "5px solid black"
            Dice.style.height = "60px"
            Dice.style.width = "60px"
            Dice.style.float = "left"
            Dice.style.margin = "15px"
            Dice.style.textAlign = "center"
            Dice.style.fontSize = "50px"
            Dice.style.fontWeight = "Bold"
            dieContainer.appendChild(Dice)
            Dice.addEventListener("click", function () {
                this.value = Math.floor(Math.random() * 7);
                this.textContent = this.value;
                Dice.addEventListener("dblclick", function () {
                    Dice.remove()
                })
            })
        }
        static roll() {
            this.newValue = Math.floor(Math.random() * 7);
            this.value = this.newValue

        }
    }

})
    //     rollBtn.addEventListener("click", function () {
    //         console.log("Roll Click!")
    //         let dieNum2 = document.createTextNode(Math.floor(Math.random() * 7))
    //         Dice.append(dieNum2)
    //     })
    // })






// const myButton = document.getElementById("dieGen")
// myButton.addEventListener(() => new Die())