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



//Highscore Section
$("body").append("<aside>");