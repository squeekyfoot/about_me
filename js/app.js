'use strict';

// Variables needed for this page
var userName = '';
var userPoints = 0;
var response = '';
var remainingAttempts = 4;
var incorrect = true;
var favoriteShows = ['lost','dexter','sons of anarchy','breaking bad','the office','arrested development','narcos','family guy','spartacus','the league'];

// Prompt user with 5 different questions about me

// Initial prompt message
userName = prompt('It\'s time to play a knowledge game about me! I\'ll keep track of your points as we go along. Let\'s start by entering your name...','Enter name here');
console.log('User\'s name: ' + userName);


// Question #1
function question1() {
  response = prompt('Alright, ' + userName + ', let\'s begin! Question 1: Do I have a lisp?','Yes or No?').toLowerCase();
  console.log('User Response #1: ' + response);

  if(response === 'yes' || response === 'y') {
    alert('Very good! Of courth I have a lithp! +1 POINT');
    userPoints ++;
  } else if(response === 'no' || response === 'n') {
    alert('WRONG! I\'m the lithpiest perthon around!');
  } else {
    alert('You didn\'t follow the directions, no point for you...');
  }
  console.log('Current Points: ' + userPoints);
}

// Question #2
function question2() {
  response = prompt('Question 2: Do I have a brain?','Yes or No?').toLowerCase();
  console.log('User Response #2: ' + response);

  if(response === 'yes' || response === 'y') {
    alert('Right! Or else I couldn\'t have written this site! +1 POINT');
    userPoints ++;
  } else if(response === 'no' || response === 'n') {
    alert('No brain? Well that\'s a little rude... No point for you');
  } else {
    alert('You didn\'t follow the directions, no point for you...');
  }
  console.log('Current Points: ' + userPoints);
}

// Question #3
function question3(){
  response = prompt('Question 3: Do I wear short shorts?','Yes or No?').toLowerCase();
  console.log('User Response #3: ' + response);

  if(response === 'yes' || response === 'y') {
    alert('Only the shortest!! +1 POINT');
    userPoints ++;
  } else if(response === 'no' || response === 'n') {
    alert('C\'MON. Of course I do, doesn\'t everyone??');
  } else {
    alert('You didn\'t follow the directions, no point for you...');
  }
  console.log('Current Points: ' + userPoints);
}

// Question #4
function question4() {
  response = prompt('Question 4: Do I own a unicorn?','Yes or No?').toLowerCase();
  console.log('User Response #4: ' + response);

  if(response === 'yes' || response === 'y') {
    alert('NOPE. I own two unicorns...');
  } else if(response === 'no' || response === 'n') {
    alert('You\'re right! I own TWO unicorns. +1 POINT');
    userPoints ++;
  } else {
    alert('You didn\'t follow the directions, no point for you...');
  }
  console.log('Current Points: ' + userPoints);
}

// Question #5
function question5() {
  response = prompt('Question 5: Do I sleep in class?','Yes or No?').toLowerCase();
  console.log('User Response #5: ' + response);

  if(response === 'yes' || response === 'y') {
    alert('That\'s just wrong....of course I don\'t. Do you?');
  } else if(response === 'no' || response === 'n') {
    alert('Correct! I knew you had faith in me! +1 POINT');
    userPoints ++;
  } else {
    alert('You didn\'t follow the directions, no point for you...');
  }
  console.log('Current Points: ' + userPoints);
}
//Calling functions 1 - 5
question1();
question2();
question3();
question4();
question5();

// Question #6 - With 4 attempts at guessing correctly
//Four attempts to guess correctly
//While not correct and have more guesses:
function question6() {
  while (incorrect && remainingAttempts > 0) {
    response = prompt('Question 6: How many cards do I carry in my back pocket? You have ' + remainingAttempts + ' attempt(s) remaining.','Enter a number');
    console.log('Question 6 - User response: ' + response);
    console.log('Remaining attempts: ' + remainingAttempts);
    if (response == 4) {
      alert('Correct! I usually carry 4 cards on me at all times.');
      incorrect = false;
      userPoints++;
    } else if (response > 4) {
      remainingAttempts--;
      alert('Sorry, it\'s less than that. You have ' + remainingAttempts + ' attempts left.');
    } else if (response < 4) {
      remainingAttempts--;
      alert('Sorry, it\'s more than that. You have ' + remainingAttempts + ' attempts left.');
    } else {
      remainingAttempts--;
      alert('Sorry, you need to enter a number... You have ' + remainingAttempts + ' attempts left.');
    }
  }
}
question6();

//Reset variables that I can reuse in Question #7

incorrect = true;
remainingAttempts = 6;

//Question #7 - multiple answers with six attempts given
//while user hasn't guessed a correct item from array
function question7() {
  while (incorrect && remainingAttempts > 0) {
    response = prompt('Question 7: Can you guess one of my several favorite TV shows on Netflix? You have ' + remainingAttempts + ' attempt(s) remaining.','Enter show title').toLowerCase();
    console.log('Question 7 - User Response:' + response);
    console.log('Remaining Attempts: ' + remainingAttempts);
    if (favoriteShows.indexOf(response) > -1) {
      alert('Wow! Great job, you guessed correctly.');
      incorrect = false;
      userPoints++;
    } else {
      remainingAttempts--;
      alert('Sorry, that isn\'t one of them. You have ' + remainingAttempts + ' attempts left.');
    }
  }

  //Display message to the user with all possible answers to Question 7

  if (incorrect) {
    alert('Better luck next time. Possible answers were: ' + favoriteShows.join(', '));
  } else {
    alert('All possible answers were: ' + favoriteShows.join(', '));
  }
}

question7();

//Final prompt for total score
if(userPoints > 4) {
  alert('Great work, ' + userName + '! You earned ' + userPoints + ' out of 7 points! You seem to know quite a bit about me.');
} else {
  alert('It\'s time for you to get to know me, ' + userName + '. You only scored ' + userPoints + ' out of 7 points. Try again.');
}
