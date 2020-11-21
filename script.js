//Nav Bar
$("body").append("<nav>");

    //Timer
    var seconds = 10;
    $("nav").append(`<p>Time: ${seconds}`);

    function setTime() {
        var timerInterval = setInterval(function() {
            seconds--;
            $("p")[0].textContent = `Time: ${seconds}`;
        
        if(seconds === 0) {
            clearInterval(timerInterval);
        }
        }, 1000);
    }
    
    setTime();


//Quiz Section
$("body").append("<section>");

//Highscore Section
$("body").append("<aside>");