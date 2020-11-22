//arrays for questions, answer options, and answer key
var question = [
    "What surrounds a string?",
    "What expresses a true false statement?",
    "What goes at the end of a line of code?",
    "Who was the first computer programmer?",
    "What tags are used to suround Javascript?"];

var a = [
    "Parenthesis",
    "Variable",
    "Semi-colon",
    "Mark Zuckerberg",
    "&lt;html&gt;"];

var b = [
    "Curly Brackets",
    "Boolean",
    "Colon",
    "Charles Babbage",
    "&lt;script&gt;"];

var c = [
    "Quotation Marks",
    "String",
    "Period",
    "Lady Ada Agusta",
    "&lt;form&gt;"];

var d = [
    "Square Brackets",
    "Float",
    "Comma",
    "Bill Gates",
    "&lt;src&gt;"];

var answerKey = ["c", "b", "a", "c", "b"];

var qIndex = 0;  //Question Number

var userPoints = 0;  //User Points

var scoreTable = [];  //High Score Array

//Create function to flip through questions
function quizStart() {
        $("section").append(`<h2>${question[qIndex]}`);
        $("section").append(`<button id="a">${a[qIndex]}`);
        $("section").append(`<button id="b">${b[qIndex]}`);
        $("section").append(`<button id="c">${c[qIndex]}`);
        $("section").append(`<button id="d">${d[qIndex]}`);

        //When button clicked, check for correct answer and move to next question
        $("button").on("click", function(event) {
            let clicked = event.target;
            
                if(clicked.id === answerKey[qIndex]) {
                    $("section").empty();
                    qIndex++;
                    userPoints++;
                    quizStart();
                    $("section").append("<footer><hr>Correct!");
                    setTimeout(function() {$("footer").fadeOut().empty()}, 1000);
                }
                else {
                    $("section").empty();
                    qIndex++;
                    seconds = seconds - 10;
                    quizStart();
                    $("section").append("<footer><hr>Wrong!");
                    setTimeout(function() {$("footer").fadeOut().empty()}, 1000);
                    
                }
        });

        //End of Quiz
        if(qIndex >= question.length || seconds < 0) {
            $("section").empty();
            $("section").append("<h1>FINISHED!");
            $("section").append(`<h3>Score: ${userPoints}`);
            
            scoreTable.push(userPoints);
        }

        
}




//Create timer
var seconds = 300;
function playTimer() {
    var timerInterval = setInterval(function() {
        seconds--;
        $("p")[0].textContent = `Time: ${seconds}`;
    
    if(seconds === 0 || qIndex >= question.length) {clearInterval(timerInterval);}
    }, 1000);
}

//Nav Bar
$("body").append("<nav>");

    //High Score Button
    $("nav").append("<button id=scoreButton>High Scores");
        $("#scoreButton").on("click", highScore());

    //Write timer in nav
    $("nav").append(`<p>Time: ${seconds}`);
    
//Main Screen Section
$("body").append("<section>");

//Welcome Screen
function welcome() {
    $("section").append(`<h1>Welcome to the Javascript Pop Quiz!`);
    $("section").append(`<h3>Try your best to answer as many questions right in 5 minutes.<br>Each wrong answer will dock you 30 seconds!<br>Good Luck!`);


    //Button to clear welcome page, start the timer, and show the first question
    $("section").append("<button id='play-button'>Play");

        $("#play-button").on("click",function(){
            $("section").empty();
            quizStart();
            playTimer();
        });
        
};


//Highscore Section
function highScore() {
    $("section").empty();
    $("section").append("<h1>High Scores");
    $("section").append(scoreTable);
    
    //Back Button to play again
    $("section").append("<button id='backButton'>Back").on("click", function() {
            $("section").empty();
            welcome();
        })
}

welcome();