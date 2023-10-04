//document.getElementById("count").innerText = 5;

// let count = 5 / 6;
// console.log(count);

// let myAge = 30;
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge);

// let bonusPoints = 50
// bonusPoints = bonusPoints + 100
// console.log(bonusPoints)

// let bonusPoints = 50
// bonusPoints = bonusPoints + 70
// console.log(bonusPoints)

// function increment(){
//     console.log("clicked the button")
// }

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment(){
    count += 1
    countEl.textContent=count
}

function save(){
    let countStr = " " + count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0


}






