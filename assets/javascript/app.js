  $("#Start").on("click", run);
  $("#Done").on("click", stop);

  var number = 15;
  var intervalId;
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;

  var arrayAnswers = [1963,1953,1978,1973,1974,1983,"BlueFlame",6759,7,265]

  function run() {
      intervalId = setInterval(decrement, 1000);
      myFunction();
  }

  function decrement() {
      number--;
      $("#timeLeft").html("<h3>" + "Time left: " + number + "s</h3>");
      if (number === 0) {
        stop();
      }
  }

 function stop() {
      clearInterval(intervalId);
      //***************************************************************************
      //Total up User answers
      //1) outer loop to go through all 10 questions
      //2) inner loop to go through the 4 answers in each question
      //3) determine if selected if it is correct
      //4) determine if no answer selected out of the four for the unanswered total
      //***************************************************************************
      for (i=1;i<=10;i++) {
        var name = "";
        var localUnanswered = 0;
        var correctAnswer = arrayAnswers[i-1];
        //*******************************************************************************************
        //Need to loop around the 4 radio buttons to figure out what, if any, selection has been made
        //*******************************************************************************************
        for (x=1;x<=4;x++) {
          name = "q" + i + x;
          //************************
          //if radio button selected
          //************************
          if ($('input[id=' + name + ']:checked').length > 0) {
            //*********************************************
            //radio button selected...check if right answer
            //*********************************************
            var userAnswer = $('input[id=' + name + ']:checked').val();
            if (userAnswer=correctAnswer) {
              correct++;
              x=5;
            } else {
              incorrect++;
              x=5;
            } 
          } else {
            //*******************************************************************************
            //radio button not selected...add to local counter to check if all 4 not answered
            //*******************************************************************************
            localUnanswered++;
          } 
        } 
        if (localUnanswered == 4) {
          unanswered++;
        } 
      } 

      $("#correct").html(correct);
      $("#incorrect").html(incorrect);
      $("#unanswered").html(unanswered);
      var y = document.getElementById("questions");
      var z = document.getElementById("Done");
      var e = document.getElementById("timeLeft");
      var i = document.getElementById("allDone");
      var f = document.getElementById("correct2");
      var g = document.getElementById("incorrect2");
      var h = document.getElementById("unanswered2");
      y.style.display = 'none';
      z.style.display = 'none';
      e.style.display = 'none';
      i.style.display = 'block';
      f.style.display = 'block';
      g.style.display = 'block';
      h.style.display = 'block';
  }

  function myFunction() {
    var x = document.getElementById("Start");
    var y = document.getElementById("questions");
    var z = document.getElementById("Done");
    x.style.display = 'none';
    y.style.display = 'block';
    z.style.display = 'block';
  }