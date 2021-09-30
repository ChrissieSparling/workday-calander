// display time when page loads
$("#currentDay").text(moment().format("Do MMMM YYYY, h:mm:ss a"));

//displays the current date and time
setInterval(function () {
    $("#currentDay").text(moment().format("Do MMMM YYYY, h:mm:ss a"));
}, 1000)

//Array time and numbers
const createContainer = $(".container");
const saveButton = document.querySelectorAll("button");
const timeList = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
const timeId = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

//for loop: timeList, timeId,and appends the data 
for (let i = 0; i < timeList.length; i++) {
    let createRow = $("<div class='row time-block'>").attr("id", timeId[i]);
    let createTime = $("<div class='hour col-1'>")


    // textarea
    let createTextarea = $("<textarea class='col-10'>");
    createTextarea.attr("id", timeList[i]);

    //buttons
    let createButton = $("<button type='button' class='saveBtn col-1 far fa-save'>");

    //appends the created row to the container
    createContainer.append(createRow);
    
    createTime.text(timeList[i]);
    createRow.append(createTime);

    // createTextarea.text();
    createRow.append(createTextarea);

    // buttons from 9am to 5pm (tumble out of bed and I stumble to the kitchen...)
    createButton.text();
    createRow.append(createButton);
}

    //calls localStorage Function
    localStorageFunction();

function localStorageFunction() {

    for (let index = 0; index < numbers.length; index++) {
        $("textarea")[index].value = localStorage.getItem("textarea" + String(index + 1));
    }
}

//save stored data 
$("button").on("click", function (event) {
    event.preventDefault();

    for (let index = 0; index < numbers.length; index++) {
        localStorage.setItem('textarea' + String(index + 1), $("textarea")[index].value)
    }
});

// 1. past hour = whitish pink
// 2. current hour = salmon 
// 3. future = green
function updateByTheHour() {
    var currentHour = moment().hours();
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("")[0]);

        if (blockHour < currentHour) {
            $(this).addClass("past");
        } else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}
//updateByTheHour: 
updateByTheHour();
//AND WE OUT....(DROP THE MIC)