//Global variables

var quiz = 3,
    answers = ["red", "tan", "yellow"],
    input = $("input"),
    correct = 0,
    incorrect = 0,
    unanswered = 0,
    counter = 30;

    //hides questions, results, and counter from start of game
    $("#question-page").hide();
    $("#results").hide();
    $("#counter").hide();

    function score(){
        for (i=0; i<input.length; i++){
            if (input[i].checked){
                //i puts in whichever choice was selected by user
                //.value extracts choice, transforms it into a string
                //indexOf checks if result is in answers array at all, returns -1 if not
                //drawback is you can't have a wrong answer on one question be a correct answer on another question
                if (answers.indexOf(input[i].value) !== -1){
                    correct++;
                } else {
                    incorrect++;
                }
            }
        }

        
    

        //making variable for total answered questions
        var total = correct + incorrect;
        console.log(total);

        //setting number for unanswered to replace or keep 0
        if (total !== quiz){
            unanswered = quiz - total; 
        }

        //displaying correct, incorrect, and unanswered questions on html
        $("#correct").html(" " + correct);
        $("#incorrect").html(" " + incorrect);
        $("#unanswered").html(" " + unanswered);
    }
    //end function

    //start function when button is clicked to display questions and start timer
    $("#start-button").click(function(){
        $("#question-page").show();
        $("#counter").show();
        $("#start").hide();
        $("#results").hide();

        
    
    });
    //end function

    //setting up timer to count down by linking html div to counter variable
    var countDown = setInterval(function(){
        counter--;
        $("#countDown").html(counter)
    

        if (counter === 0){
            clearInterval(counter);
            $("#quiz").hide();
            $("#counter").hide();
            $("#results").show();
            score();
        }
    }, 1000);

    //click done button to get same results if counter runs out
    $("#done").click(function(){
        clearInterval(counter);
        $("#quiz").hide();
        $("#counter").hide();
        $("#question-page").hide();
        $("#results").show();
        score();
        clearTimeout(countDown)
        })
    







