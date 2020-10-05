$(document).ready(function () {
  const magic8Ball = {};
  magic8Ball.answers = [
    "It is certain",
    "Without a doubt",
    "Definitely",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Very doubtful",
  ];

  magic8Ball.askQuestion = function (question) {
    const randomNumber = Math.random();
    const randomNumberAnswers = randomNumber * this.answers.length;
    const randomIndex = Math.floor(randomNumberAnswers);
    const randomAnswer = this.answers[randomIndex];

    $("#answer").text(randomAnswer);

    console.log(question);
    console.log(randomAnswer);
  };
  const onClick = function () {
    $("#answer").hide();
    const question = prompt("ASK A QUESTION!");
    $("#answer").fadeIn(4000);
    magic8Ball.askQuestion(question);
    $("#8ball").effect("shake");
    $("#8ball").attr(
      "src",
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png"
    );
  };
  $("#answer").hide();
  $("#questionButton").click(onClick);
});
