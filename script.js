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

// Conditional logic for the background color of each time block

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
} else if (currentTime >= 11 && currentTime < 12) {
    for (let i = 0; i < rowArray.length; i++) {
        rowArray[0].setAttribute("class", "row past");
        rowArray[1].setAttribute("class", "row past");
        rowArray[2].setAttribute("class", "row present");
        rowArray[i].setAttribute("class", "row future");
    }
} else if (currentTime >= 12 && currentTime < 13) {
    for (let i = 0; i < rowArray.length; i++) {
        rowArray[0].setAttribute("class", "row past");
        rowArray[1].setAttribute("class", "row past");
        rowArray[2].setAttribute("class", "row past");
        rowArray[3].setAttribute("class", "row present");
        rowArray[i].setAttribute("class", "row future");
    }
} else if (currentTime >= 13 && currentTime < 14) {
    for (let i = 0; i < rowArray.length; i++) {
        rowArray[0].setAttribute("class", "row past");
        rowArray[1].setAttribute("class", "row past");
        rowArray[2].setAttribute("class", "row past");
        rowArray[3].setAttribute("class", "row past");
        rowArray[4].setAttribute("class", "row present");
        rowArray[i].setAttribute("class", "row future");
    }
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
}

// Local storage

// Storing events at 9 AM

let saveNine = document.getElementById("btn-9");

saveNine.addEventListener("click", function () {
    let textNine = document.getElementById("text-9").value;
    localStorage.setItem("savedevent9", textNine);
});

function retrieveEventNine () {
    let preserveNine = localStorage.getItem("savedevent9");
    let writtenEvent9 = document.getElementById("text-9");
    writtenEvent9.textContent = preserveNine;
}

retrieveEventNine();

// Storing events at 10 AM

let saveTen = document.getElementById("btn-10");

saveTen.addEventListener("click", function () {
    let textTen = document.getElementById("text-10").value;
    localStorage.setItem("savedevent10", textTen);
});

function retrieveEventTen () {
    let preserveTen = localStorage.getItem("savedevent10");
    let writtenEvent10 = document.getElementById("text-10");
    writtenEvent10.textContent = preserveTen;
}

retrieveEventTen();

// Storing events at 11 AM

let saveEleven = document.getElementById("btn-11");

saveEleven.addEventListener("click", function () {
    let textEleven = document.getElementById("text-11").value;
    localStorage.setItem("savedevent11", textEleven);
});

function retrieveEventEleven () {
    let preserveEleven = localStorage.getItem("savedevent11");
    let writtenEvent11 = document.getElementById("text-11");
    writtenEvent11.textContent = preserveEleven;
}

retrieveEventEleven();

//Storing events at noon

let saveTwelve = document.getElementById("btn-12");

saveTwelve.addEventListener("click", function () {
    let textTwelve = document.getElementById("text-12").value;
    localStorage.setItem("savedevent12", textTwelve);
});

function retrieveEventTwelve () {
    let preserveTwelve = localStorage.getItem("savedevent12");
    let writtenEvent12 = document.getElementById("text-12");
    writtenEvent12.textContent = preserveTwelve;
}

retrieveEventTwelve();

// Storing events at 1 PM

let saveThirteen = document.getElementById("btn-13");

saveThirteen.addEventListener("click", function () {
    let textThirteen = document.getElementById("text-13").value;
    localStorage.setItem("savedevent13", textThirteen);
});

function retrieveEventThirteen () {
    let preserveThirteen = localStorage.getItem("savedevent13");
    let writtenEvent13 = document.getElementById("text-13");
    writtenEvent13.textContent = preserveThirteen;
}

retrieveEventThirteen();

// Storing events at 2 PM

let saveFourteen = document.getElementById("btn-14");

saveFourteen.addEventListener("click", function () {
    let textFourteen = document.getElementById("text-14").value;
    localStorage.setItem("savedevent14", textFourteen);
});

function retrieveEventFourteen () {
    let preserveFourteen = localStorage.getItem("savedevent14");
    let writtenEvent14 = document.getElementById("text-14");
    writtenEvent14.textContent = preserveFourteen;
}

retrieveEventFourteen();

// Storing events at 3 PM

let saveFifteen = document.getElementById("btn-15");

saveFifteen.addEventListener("click", function () {
    let textFifteen = document.getElementById("text-15").value;
    localStorage.setItem("savedevent15", textFifteen);
});

function retrieveEventFifteen () {
    let preserveFifteen = localStorage.getItem("savedevent15");
    let writtenEvent15 = document.getElementById("text-15");
    writtenEvent15.textContent = preserveFifteen;
}

retrieveEventFifteen();

// Storing events at 4 PM

let saveSixteen = document.getElementById("btn-16");

saveSixteen.addEventListener("click", function () {
    let textSixteen = document.getElementById("text-16").value;
    localStorage.setItem("savedevent16", textSixteen);
});

function retrieveEventSixteen () {
    let preserveSixteen = localStorage.getItem("savedevent16");
    let writtenEvent16 = document.getElementById("text-16");
    writtenEvent16.textContent = preserveSixteen;
}

retrieveEventSixteen();

// Storing events at 5 PM

let saveSeventeen = document.getElementById("btn-17");

saveSeventeen.addEventListener("click", function () {
    let textSeventeen = document.getElementById("text-17").value;
    localStorage.setItem("savedevent17", textSeventeen);
});

function retrieveEventSeventeen () {
    let preserveSeventeen = localStorage.getItem("savedevent17");
    let writtenEvent17 = document.getElementById("text-17");
    writtenEvent17.textContent = preserveSeventeen;
}

retrieveEventSeventeen();