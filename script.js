//arrays for questions, answer options, and answer key
var question = [
    "What surrounds a string?",
    "What expresses a true false statement?",
    "What goes at the end of a line of code?",
    "Who was the first computer programmer?"];

var a = [
    "Parenthesis",
    "Variable",
    "Semi-colon",
    "Mark Zuckerberg"];

var b = [
    "Curly Brackets",
    "Boolean",
    "Colon",
    "Charles Babbage"];

var c = [
    "Quotation Marks",
    "String",
    "Period",
    "Lady Ada Agusta"];

var d = [
    "Square Brackets",
    "Float",
    "Comma",
    "Bill Gates"];

var answerKey = ["c", "b", "a", "c"];

var qIndex = 0;

//Create function to flip through questions
function quizStart() {
        $("section").append(`<h2>${question[qIndex]}`);
        $("section").append(`<button id="a">${a[qIndex]}`);
        $("section").append(`<button id="b">${b[qIndex]}`);
        $("section").append(`<button id="c">${c[qIndex]}`);
        $("section").append(`<button id="d">${d[qIndex]}`);

        $("button").on("click", function(event) {
            let clicked = event.target;
            
                if(clicked.id === answerKey[qIndex]) {
                    console.log("Correct!");
                    $("section").empty();
                    qIndex++;
                    quizStart();
                }
                else {
                    console.log("Wrong!");
                    $("section").empty();
                    qIndex++;
                    seconds = seconds - 10;
                    quizStart();
                }
        }
    );
}




//Create timer
var seconds = 300;
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

//Welcome Screen
$("section").append(`<h1>Welcome to the Javascript Pop Quiz!`);
$("section").append(`<h3>Try your best to answer as many questions right in 5 minutes.<br>Each wrong answer will dock you 30 seconds!<br>Good Luck!`);


    //Button to clear welcome page, start the timer, and show the first question
    $("section").append("<button id='play-button'>Play");

        $("#play-button").on("click",function(){
            $("section").empty();
            quizStart();
            playTimer();
        });



//Highscore Section
$("body").append("<aside>");