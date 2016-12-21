'use strict';
document.getElementById("question-submit").addEventListener("click", function() {
  var question = document.getElementById("question-input").value;
  // console.log(question);
  document.getElementById("question-input").value = '';

  var answers = ['maybe', 'my sources say no', 'yes'];

  function pickAnswer() {
    var answer = answers[Math.floor(Math.random() * 3)];
    return answer;
  }
  pickAnswer();

  // document.getElementById("question-history")
  var newRow = document.createElement('tr');
  var questionTd = document.createElement('td');
  var questionText = document.createTextNode(question);
  var answerText = document.createTextNode(pickAnswer());

  // console.log(questionTd)
  // questionTd.(question);
  var answerTd = document.createElement('td');
  // answerTd.innerHTML(pickAnswer());


  questionTd.appendChild(questionText);
  answerTd.appendChild(answerText);

  newRow.appendChild(questionTd);
  newRow.appendChild(answerTd);
  document.getElementById('question-history').appendChild(newRow);
  // document.getElementById('question-history').insertBefore(newRow, document.getElementById('question-history-foot'));

  // var answerText = document.createElement('')
  // document.getElementById('td1').innerHTML = "Some text to enter";

});
