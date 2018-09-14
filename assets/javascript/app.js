// the jquery doc ready thing
$(document).ready(function() {
	var index = 0; 
	var countdownTimer = {
		time : 30,
		reset: function() {  // reset
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {  // start
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {  // stop
			clearInterval(counter);
		},
		count: function() {  // count backwards
				countdownTimer.time--;
				console.log(countdownTimer.time);
//	countdown timer
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++; // go to the next question in the array
				answerWrong();
				countdownTimer.reset(); // reset time
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

var correct = 0; // display score
var wrong = 0;
var q1 = {  // the questions and answers
	question : 'What actor played Russian roulette in “The Deer Hunter”, demanded “More Cowbell” on “Saturday Night Live”, and danced solo in Fatboy Slim’s “Weapon of Choice” video?',
	possibleAnswers : ['A. Harrison Ford',
				 'B. Samuel Jackson',
				 'C. Christopher Walken',
				 'D. Ulysses Grant'],
	flags : [false, false, true, false],
	answer : 'C. Christopher Walken'
};

var q2 = {
	question: 'Who starred in the title role of Condorman?',
	possibleAnswers: ['A. Zac Efron',
				 'B. Michael Crawford',
				 'C. Billy Crystal',
				 'D. Michael Keaton'],
	flags : [false, true, false, false],
	answer : 'B. Michael Crawford'
};

var q3 = {
	question : 'The live action superhero television series “Mighty Morphin Power Rangers” premiered in what year?',
	possibleAnswers : ['A. 2014',
				 'B. 1993',
				 'C. 1998',
				 'D. 2002'],
	flags : [false, true, false, false],
	answer : 'B. 1993'
};

var q4 = {
	question : 'How many members were in the American rock band The White Stripes?',
	possibleAnswers : ['A. Two',
				 'B. Three',
				 'C. Seven',
				 'D. Just one'],
	flags : [true, false, false, false],
	answer : 'A. Two (Jack & Meg White)'
};

var q5 = {
	question : 'Who wrote the American realist novel “The Grapes of Wrath”?',
	possibleAnswers : ['A. Harvey Kellerman',
				 'B. John Steinbeck',
				 'C. Sammy Hagar',
				 'D. Doris Reichmann'],
	flags : [false, true, false, false],
	answer : 'B. John Steinbeck'
};

var q6 = {
	question : 'What group of lakes located in upstate New York are named after a part of the human anatomy?',
	possibleAnswers : ['A. The Finger Lakes',
				 'B. Kidney Ponds',
				 'C. Doris\'s Eyes',
				 'D. Footloose Reservoir'],
	flags : [true, false, false, false],
	answer : 'A. The Finger Lakes'
};

var q7 = {
	question : 'Bogota is the high altitude capital of which country?',
	possibleAnswers : ['A. Argentina',
				 'B. Chile',
				 'C. Colombia',
				 'D. El Salvador'],
	flags : [false, false, true, false],
	answer : 'C. Colombia'
};

var q8 = {
	question : 'What Marvel character’s real name is Carol Danvers?',
	possibleAnswers : ['A. Super Girl',
				 'B. Captain Marvel',
				 'C. Wonder Woman',
				 'D. Cynthia Cyclone'],
	flags : [false, true, false, false],
	answer : 'B. Captain Marvel (or Ms. Marvel)'
};

var q9 = {
	question : 'The Trout Memo was an espionage guidebook written by what British author during WWII?',
	possibleAnswers : ['A. Johnathan Joly',
				 'B. Horace Greeley',
				 'C. Sir William Page',
				 'D. Ian Fleming'],
	flags : [false, false, false, true],
	answer : 'D. Ian Fleming'
};

var q10 = {
	question : 'In the game of pool, what is the standard color for the one ball?',
	possibleAnswers : ['A. Blue',
				  'B. Yellow',
				  'C. Red',
				  'D. Green'],
	flags : [false, true, false, false],
	answer : 'B. Yellow'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
}

function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text(''); // the button text
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});

});