var eventEl = $('.event');
var saveBtnEl = $('.save-btn');
var timeBoxEl = $('.time-box');
var timeEl = document.querySelector('#currentTime');

function init() {

    var timeInterval = setInterval(function() {
        var currentTime = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
        timeEl.textContent = currentTime;
    }, 1000)
}

init();


//var timeDisplay =$('#time-display')
//var timeDisplay = moment().format("MMMM Do, YYYY");
//$('#timeDisplay').text(timeDisplay);

// var timeEl = document.querySelectorAll("#currentTime");
//function init(){
// var timeInterval = setInterval (function){
// moment().format('MMMM Do YYYY, h:mm:ss a');
// January 6th 2022, 2:56:22 pm
// moment().format('dddd');     
// }
// }

var textArr;
var now = moment().format('HH');

updateTime();
loadText();

saveBtnEl.on('click', saveText);

function saveText(event) {
    event.preventDefault();
    textArr[event.target.dataset.time] = $(event.target).siblings().eq(1).val();
    localStorage.setItem('textArr', JSON.stringify(textArr));
}

function loadText() {
    textArr = JSON.parse(localStorage.getItem('textArr')) || ["", "", "", "", "", "", "", "", ""];
    for (let i = 0; i < 9; i++) {
        timeBoxEl.children().eq(i).children().eq(1).text(textArr[i]);
    }
}

function updateTime() {
    for (let i = 0; i < 9; i++) {
        let time = timeBoxEl.children().eq(i).children().eq(2).data('time') + 9;
        if (time < now) {
            timeBoxEl.children().eq(i).children().eq(1).addClass('past');
        } else if (time == now) {
            timeBoxEl.children().eq(i).children().eq(1).addClass('present');
        } else {
            timeBoxEl.children().eq(i).children().eq(1).addClass('future');
        }
    }
}