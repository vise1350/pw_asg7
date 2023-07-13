function submitAnswers() {
    var questions = document.querySelectorAll("input[type='radio']");
    var answers = [];
    for (var i = 0; i < questions.length; i++) {
      if (questions[i].checked) {
        answers.push(questions[i].value);
      }
    }
  
    var url = "/api/quiz/submit";
    var data = {
      answers: answers
    };
  
    $.ajax({
      url: url,
      data: data,
      type: "POST",
      success: function(response) {
        var results = document.getElementById("results");
        results.innerHTML = response.data;
        results.style.display = "block";
      }
    });
  }
  
  document.getElementById("submit").addEventListener("click", submitAnswers);
  