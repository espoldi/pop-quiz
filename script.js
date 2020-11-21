//arrays for questions, answer options, and answer key
var question = ["Example Q"];

var a = ["A"];

var b = ["B"];

var c = ["C"];

var d = ["D"];

var answerKey = ["C"];


//Create function to flip through questions
function quizStart() {
    for(var i; i<question.length; i++) {
        $("section").append(`<h2>${question[i]}`);
        $("section").append(`<button>${a[i]}`);
        $("section").append(`<button>${b[i]}`);
        $("section").append(`<button>${c[i]}`);
        $("section").append(`<button>${d[i]}`);

        $("button").on("click", function() {
            if(this === answerKey[i]) {
                
            }
        });
    }
}




//Create timer
var seconds = 10;
function playTimer() {
    var timerInterval = setInterval(function() {
        seconds--;
        $("p")[0].textContent = `Time: ${seconds}`;
    
    if(seconds === 0) {clearInterval(timerInterval);}
    }, 1000);
}

//Nav Bar
$("body").append("<nav>");

    //Write timer in nav
    $("nav").append(`<p>Time: ${seconds}`);


//Quiz Section
$("body").append("<section>");

    //Button to start the timer and show the first question
    $("section").append("<button id='play-button'>Play");

        $("#play-button").on("click",function(){
            quizStart();
            playTimer();
        });



//Highscore Section
$("body").append("<aside>");