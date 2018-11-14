$(document).ready(function(){
    // Variables
    var win = 0;
    var loss = 0;
    var currentScore;
    
    var cryst1 = Math.floor(Math.random() * (11) + 1)
    var cryst2 = Math.floor(Math.random() * (11) + 1)
    var cryst3 = Math.floor(Math.random() * (11) + 1)
    var cryst4 = Math.floor(Math.random() * (11) + 1)
    
    // Reset Game function
    function gameRestart() {
        randomNumber = Math.floor(Math.random() * (101) + 19);
        var cryst1 = Math.floor(Math.random() * (11) + 1)
        var cryst2 = Math.floor(Math.random() * (11) + 1)
        var cryst3 = Math.floor(Math.random() * (11) + 1)
        var cryst4 = Math.floor(Math.random() * (11) + 1)
        currentScore = 0;
    
        // Write to DOM
        $('#randomNum').html(randomNumber);
        $('.current').html(currentScore);
        init();
    }
    
    function init() {
        randomNumber = Math.floor(Math.random() * (101) + 19);
        var cryst1 = Math.floor(Math.random() * (11) + 1)
        var cryst2 = Math.floor(Math.random() * (11) + 1)
        var cryst3 = Math.floor(Math.random() * (11) + 1)
        var cryst4 = Math.floor(Math.random() * (11) + 1)
        currentScore = 0;
    
        // Write to DOM
        $('#randomNum').html(randomNumber);
        $('.current').html(currentScore);
        //Give the crystal DOM elements a random number
        $(".crystal1").attr("value", cryst1);
        $(".crystal2").attr("value", cryst2);
        $(".crystal3").attr("value", cryst3);
        $(".crystal4").attr("value", cryst4);
    
        $(".elem").on("click", function(){
            var grab = $(this).attr("value");
    
            currentScore = parseInt(currentScore) + parseInt(grab);
            $(".current").html(currentScore);
    
            if(randomNumber === currentScore){
                win++
                $("#wins").html(win);
                $(".current").html(0);
                gameRestart();
            } 
            else if (currentScore > randomNumber){
                loss++
                $("#losses").html(loss);
                $(".current").html(0);
                gameRestart();
            }
        });
        
        
    
    }
    gameRestart();
    
    
    
    
    
    
    });
    