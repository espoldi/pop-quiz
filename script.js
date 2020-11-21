//Nav Bar
$("body").append("<nav>");

    //Timer
    var seconds = 10;
    $("nav").append(`<p>Time: ${seconds}`);

    function playTimer() {
        var timerInterval = setInterval(function() {
            seconds--;
            $("p")[0].textContent = `Time: ${seconds}`;
        
        if(seconds === 0) {clearInterval(timerInterval);}
        }, 1000);
    }
    
//Quiz Section
$("body").append("<section>");

    //Button to start the timer and show the first question
    $("section").append("<button id='play-button'>Play");

        $("#play-button").on("click",function(){
            playTimer();
        });

//arrays for questions, answer options, and answer key
var question = [""];
var a = [""];
var b = [""];
var c = [""];
var d = [""];
var answerKey = [""];


//Highscore Section
$("body").append("<aside>");