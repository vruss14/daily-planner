let today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

let currentTime = parseInt(moment().format("H"));
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

let rowArray = [
    { div: beginWorkDay, hour: 9 },
    { div: tenMorning, hour: 10 },
    { div: eleven, hour: 11 },
    { div: noon, hour: 12 },
    { div: oneAfternoon, hour: 13 },
    { div: twoAfternoon, hour: 14 },
    { div: threeAfternoon, hour: 15 },
    { div: fourAfternoon, hour: 16 },
    { div: endWorkDay, hour: 17 }]

    $(".saveBtn").click((event)=>{
        const hour = parseInt(event.target.id.replace("btn-",""))
        const text = document.getElementById(`text-${hour}`).value;
        localStorage.setItem(`savedevent${hour}`, text);
    })

function setColor() {
    rowArray.forEach((obj) => {
        const className = (currentTime === obj.hour) ? 
            "present" : obj.hour < currentTime ? 
            "past" : "future";

            obj.div.setAttribute("class", `row ${className}`);
    });
    
    retrieveEvents();
}

function retrieveEvents () {
    rowArray.forEach(({hour}) => {
        const eventName = localStorage.getItem(`savedevent${hour}`)
        document.getElementById(`text-${hour}`).textContent = eventName;
    })
}

setColor();