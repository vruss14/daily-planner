let today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

let currentTime = moment().format("H");
console.log(currentTime);

let beginWorkDay = document.getElementById("9");
let tenMorning = document.getElementById("10");
let eleven = document.getElementById("11");
let noon = document.getElementById("12");
let oneAfternoon = document.getElementById("13");
let twoAfternoon = document.getElementById("14");
let threeAfternoon = document.getElementById("15");
let fourAfternoon = document.getElementById("16");
let endWorkDay = document.getElementById("17");

let rowArray = [beginWorkDay, tenMorning, eleven, noon, oneAfternoon, twoAfternoon, threeAfternoon, fourAfternoon, endWorkDay];


// Conditional logic for the background color of each time block depending on time of day

if (currentTime < 9) {
    for (let i = 0; i < rowArray.length; i++) {
        rowArray[i].setAttribute("class", "row future");
    }
} else if (currentTime >= 9 && currentTime < 10) {
    for (let i = 0; i < rowArray.length; i++) {
        rowArray[0].setAttribute("class", "row present");
        rowArray[i].setAttribute("class", "row future");
    }
} else if (currentTime >= 10 && currentTime < 11) {
    for (let i = 0; i < rowArray.length; i++) {
        rowArray[0].setAttribute("class", "row past");
        rowArray[1].setAttribute("class", "row present");
        rowArray[i].setAttribute("class", "row future");
    }
    console.log("10 to 11 block");
} else if (currentTime >= 11 && currentTime < 12) {
    for (let i = 0; i < rowArray.length; i++) {
        rowArray[0].setAttribute("class", "row past");
        rowArray[1].setAttribute("class", "row past");
        rowArray[2].setAttribute("class", "row present");
        rowArray[i].setAttribute("class", "row future");
    }
    console.log("11 to 12 block");
} else if (currentTime >= 12 && currentTime < 13) {
    for (let i = 0; i < rowArray.length; i++) {
        rowArray[0].setAttribute("class", "row past");
        rowArray[1].setAttribute("class", "row past");
        rowArray[2].setAttribute("class", "row past");
        rowArray[3].setAttribute("class", "row present");
        rowArray[i].setAttribute("class", "row future");
    }
    console.log("12 to 1 block");
} else if (currentTime >= 13 && currentTime < 14) {
    for (let i = 0; i < rowArray.length; i++) {
        rowArray[0].setAttribute("class", "row past");
        rowArray[1].setAttribute("class", "row past");
        rowArray[2].setAttribute("class", "row past");
        rowArray[3].setAttribute("class", "row past");
        rowArray[4].setAttribute("class", "row present");
        rowArray[i].setAttribute("class", "row future");
    }
    console.log("1 to 2 block")
} else if (currentTime >= 14 && currentTime < 15) {
    for (let i = 0; i < rowArray.length; i++) {
        rowArray[0].setAttribute("class", "row past");
        rowArray[1].setAttribute("class", "row past");
        rowArray[2].setAttribute("class", "row past");
        rowArray[3].setAttribute("class", "row past");
        rowArray[4].setAttribute("class", "row past");
        rowArray[5].setAttribute("class", "row present");
        rowArray[i].setAttribute("class", "row future");
    }
    console.log("2 to 3 block");
} else if (currentTime >= 15 && currentTime < 16) {
    for (let i = 0; i < rowArray.length; i++) {
        rowArray[0].setAttribute("class", "row past");
        rowArray[1].setAttribute("class", "row past");
        rowArray[2].setAttribute("class", "row past");
        rowArray[3].setAttribute("class", "row past");
        rowArray[4].setAttribute("class", "row past");
        rowArray[5].setAttribute("class", "row past");
        rowArray[6].setAttribute("class", "row present");
        rowArray[i].setAttribute("class", "row future");
    }
    console.log("3 to 4 block");
} else if (currentTime >= 16 && currentTime < 17) {
    for (let i = 0; i < rowArray.length; i++) {
        rowArray[0].setAttribute("class", "row past");
        rowArray[1].setAttribute("class", "row past");
        rowArray[2].setAttribute("class", "row past");
        rowArray[3].setAttribute("class", "row past");
        rowArray[4].setAttribute("class", "row past");
        rowArray[5].setAttribute("class", "row past");
        rowArray[6].setAttribute("class", "row past");
        rowArray[7].setAttribute("class", "row present");
        rowArray[i].setAttribute("class", "row future");
    }
    console.log("4 to 5 block");
} else if (currentTime >= 17 && currentTime < 18) {
    for (let i = 0; i < rowArray.length; i++) {
        rowArray[0].setAttribute("class", "row past");
        rowArray[1].setAttribute("class", "row past");
        rowArray[2].setAttribute("class", "row past");
        rowArray[3].setAttribute("class", "row past");
        rowArray[4].setAttribute("class", "row past");
        rowArray[5].setAttribute("class", "row past");
        rowArray[6].setAttribute("class", "row past");
        rowArray[7].setAttribute("class", "row past");
        rowArray[8].setAttribute("class", "row present");
    }
} else {
    for (let i = 0; i < rowArray.length; i++) {
        rowArray[i].setAttribute("class", "row past");
    }
    console.log("After work day :)")

}

// Local storage

let saveNine = document.getElementById("btn-9");
saveNine.addEventListener("click", storeResponse);

let saveTen = document.getElementById("btn-10");
saveTen.addEventListener("click", storeResponse);

let saveEleven = document.getElementById("btn-11");
saveEleven.addEventListener("click", storeResponse);

let saveNoon = document.getElementById("btn-12");
saveNoon.addEventListener("click", storeResponse);

let saveOne = document.getElementById("btn-13");
saveOne.addEventListener("click", storeResponse);

let saveTwo = document.getElementById("btn-14");
saveTwo.addEventListener("click", storeResponse);

let saveThree = document.getElementById("btn-15");
saveThree.addEventListener("click", storeResponse);

let saveFour = document.getElementById("btn-16");
saveFour.addEventListener("click", storeResponse);

let saveFive = document.getElementById("btn-17");
saveFive.addEventListener("click", storeResponse);


function storeResponse () {
    console.log("It works!");
}
