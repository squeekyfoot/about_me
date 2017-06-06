'use strict';

// Variables needed
var userPoints = 0;
var response = '';

// Prompt user with 5 different questions about me

// Initial prompt message
confirm('It\'s time to play a knowledge game about me! I\'ll keep track of your points as we go along...');


// Question #1
response = prompt('Question 1: Do I have a lisp?','Yes or No?').toLowerCase();
console.log(response);

if(response === 'yes' || response === 'y') {
  alert('Very good! Of courth I have a lithp! +1 POINT');
  userPoints ++;
} else if(response === 'no' || response === 'n') {
  alert('WRONG! I\'m the lithpiest perthon around!');
} else {
  alert('You didn\'t follow the directions, no point for you...');
}
console.log(userPoints);


// Question #2
response = prompt('Question 2: Do I have a brain?','Yes or No?').toLowerCase();
console.log(response);

if(response === 'yes' || response === 'y') {
  alert('Right! Or else I couldn\'t have written this site! +1 POINT');
  userPoints ++;
} else if(response === 'no' || response === 'n') {
  alert('No brain? Well that\'s a little rude... No point for you');
} else {
  alert('You didn\'t follow the directions, no point for you...');
}
console.log(userPoints);


// Question #3
response = prompt('Question 3: Do I wear short shorts?','Yes or No?').toLowerCase();
console.log(response);

if(response === 'yes' || response === 'y') {
  alert('Only the shortest!! +1 POINT');
  userPoints ++;
} else if(response === 'no' || response === 'n') {
  alert('C\'MON. Of course I do, doesn\'t everyone??');
} else {
  alert('You didn\'t follow the directions, no point for you...');
}
console.log(userPoints);


// Question #4
response = prompt('Question 4: Do I own a unicorn?','Yes or No?').toLowerCase();
console.log(response);

if(response === 'yes' || response === 'y') {
  alert('NOPE. I own two unicorns...');
} else if(response === 'no' || response === 'n') {
  alert('You\'re right! I own TWO unicorns. +1 POINT');
  userPoints ++;
} else {
  alert('You didn\'t follow the directions, no point for you...');
}
console.log(userPoints);


// Question #5
response = prompt('Question 5: Do I sleep in class?','Yes or No?').toLowerCase();
console.log(response);

if(response === 'yes' || response === 'y') {
  alert('That\'s just wrong....of course I don\'t. Do you?');
} else if(response === 'no' || response === 'n') {
  alert('Correct! I knew you had faith in me! +1 POINT');
  userPoints ++;
} else {
  alert('You didn\'t follow the directions, no point for you...');
}
console.log(userPoints);


//Final prompt for total score
if(userPoints > 3) {
  alert('Great work! You earned ' + userPoints + ' points! You seem to know quite a bit about me.');
} else {
  alert('It\'s time for you to get to know me. You only scored ' + userPoints + ' points. Try again.');
}
