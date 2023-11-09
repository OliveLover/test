// 퀴즈 정보를 가져와서 퀴즈를 생성하는 함수
var answerFlag = true;
var solutionFlag = true;
function createQuiz(questionNumber) {
  answerFlag = true;
  solutionFlag = true;
  // 퀴즈를 생성할 요소를 선택합니다.
  var quizElement = document.querySelector(".quiz");
  console.log(quizInfo[questionNumber][0].explain);
  console.log(questionNumber);

  var quiz_txt = "";
  quiz_txt += '<div class="quizQuestion" >';
  quiz_txt += "<h2>" + quizInfo[questionNumber][0].question + "</h2>";
  quiz_txt += "</div>";
  quiz_txt += '<div class="quizChoice">';
  quiz_txt += '<div class="choice">';
  quiz_txt += '<img src="./image/playBtn.png"  onmouseover="changeImage(this, \'./image/check.png\')" onmouseout="changeImage(this, \'./image/playBtn.png\')" onclick="checkAnswer(1)">';
  quiz_txt += '<p onclick="checkAnswer(1)">' + quizInfo[questionNumber][1].select + "</p>";
  quiz_txt += "</div>";
  quiz_txt += '<div class="choice">';
  quiz_txt += '<img src="./image/playBtn.png"  onmouseover="changeImage(this, \'./image/check.png\')" onmouseout="changeImage(this, \'./image/playBtn.png\')" onclick="checkAnswer(2)">';
  quiz_txt += '<p onclick="checkAnswer(2)">' + quizInfo[questionNumber][2].select + "</p>";
  quiz_txt += "</div>";
  quiz_txt += '<div class="choice">';
  quiz_txt += '<img src="./image/playBtn.png" onmouseover="changeImage(this, \'./image/check.png\')" onmouseout="changeImage(this, \'./image/playBtn.png\')" onclick="checkAnswer(3)">';
  quiz_txt += '<p onclick="checkAnswer(3)" >' + quizInfo[questionNumber][3].select + "</p>";
  quiz_txt += "</div>";
  quiz_txt += '<div class="choice">';
  quiz_txt += '<img src="./image/playBtn.png" onmouseover="changeImage(this, \'./image/check.png\')" onmouseout="changeImage(this, \'./image/playBtn.png\')" onclick="checkAnswer(4)">';
  quiz_txt += '<p onclick="checkAnswer(4)">' + quizInfo[questionNumber][4].select + "</p>";
  quiz_txt += "</div>";
  quiz_txt += "</div>";
  document.getElementById("quizWrap").innerHTML = quiz_txt;
}


function checkAnswer(userAnswer) {
  if (Number(quizInfo[questionNumber][0].correct) === Number(userAnswer)) {
    console.log("선택지 : " + userAnswer);
    console.log("퀴즈 정답 : " + quizInfo[questionNumber][0].correct);
    console.log("정답");
    solutionQUiz();
    showCorrectAnswer();
  } else {
    solutionQUiz();
    showWrongAnswer();
  }
}


function solutionQUiz() {

  var solution_txt = "";
  solution_txt += '<div>' + quizInfo[questionNumber][0].explain + '</div>';

  var quizWrapElement = document.getElementById("quizWrap");
  var existingSolutionElement = document.getElementById("quizSolution");
  var existingNextButton = document.getElementById("nextButton");

  // 풀이 내용이 없는 경우에만 추가
  if (solutionFlag) {
    var solutionElement = document.createElement("div");
    solutionElement.id = "quizSolution";
    solutionElement.innerHTML = solution_txt;
    quizWrapElement.appendChild(solutionElement);



    // 다음 퀴즈로 넘어가는 버튼 생성
    var nextButton = document.createElement("button");
    nextButton.id = "nextButton";
    nextButton.innerText = "다음 퀴즈로 이동";
    nextButton.onclick = function () {
      questionNumber++;
      if (questionNumber > 3) {
        window.location.href = "08.html";
      } else {
        createQuiz(questionNumber);
        solutionFlag = true;
      }
    };

    // 버튼을 표시할 위치 선택
    var buttonContainer = document.getElementById("quizWrap");
    // 버튼을 위치에 추가
    buttonContainer.appendChild(nextButton);
    solutionFlag = false;
  }
}

function changeImage(element, newImage) {
  element.src = newImage;
}

function showCorrectAnswer() {
  if (answerFlag) {
    var quizQuestionElement = document.querySelector(".quizQuestion");
    var correctAnswerImage = document.createElement("img");
    correctAnswerImage.src = "./image/redCircle.png";
    quizQuestionElement.appendChild(correctAnswerImage);
  }
  answerFlag = false;
}

function showWrongAnswer() {
  if (answerFlag) {
    var quizQuestionElement = document.querySelector(".quizQuestion");
    var wrongAnswerImage = document.createElement("img");
    wrongAnswerImage.src = "./image/redX.png";
    quizQuestionElement.appendChild(wrongAnswerImage);
  }
  answerFlag = false;
}