'use strict';

var firstPikeArray = [];
var seaTacArray = [];
var seattleCenterArray = [];
var capitolHillArray = [];
var alkiArray = [];

var firstPike = {
 min: 23,
 max: 65,
 average: 6.3,
};

function generateRandom() {
 for (var i = 6; i < 12; i++) {
   var customerOne = Math.floor(Math.random() * (firstPike.max - firstPike.min) + firstPike.min);
   firstPikeArray.push(i + 'AM: ' + Math.round((customerOne * firstPike.average)) + ' cookies');
 }

 firstPikeArray.push('12PM: ' + Math.round(customerOne * firstPike.average) + ' cookies');

 for (var j = 1; j < 9; j++) {
   var customerTwo = Math.floor(Math.random() * (firstPike.max - firstPike.min) + firstPike.min);
   firstPikeArray.push(j + 'pm: ' + Math.round(customerTwo * firstPike.average) + ' cookies');
 }
 var sumOfBoth = customerOne + customerTwo;
 generateRandom(sumOfBoth, firstPikeArray);
 return[firstPikeArray];

}
var seaTac = {
 min: 3,
 max: 24,
 average: 1.2,
};

function generateRandomOne() {
 for (var i = 6; i < 12; i++) {
   var customerThree = Math.floor(Math.random() * (seaTac.max - seaTac.min) + seaTac.min);
   seaTacArray.push(i + 'AM: ' + Math.round((customerThree * seaTac.average)) + ' cookies');
 }

 seaTacArray.push('12PM: ' + Math.round(customerThree * seaTac.average) + ' cookies');


 for (var j = 1; j < 9; j++) {
   var customerFour = Math.floor(Math.random() * (seaTac.max - seaTac.min) + seaTac.min);
   seaTacArray.push(j + 'pm: ' + Math.round(customerFour * seaTac.average) + ' cookies');
 }
 generateRandomOne(seaTac, seaTacArray);
 return[seaTacArray];
}

var seattleCenter = {
 min: 23,
 max: 65,
 average: 6.3,
};

function generateRandomTwo() {
 for (var i = 6; i < 12; i++) {
   var customerFive = Math.floor(Math.random() * (seattleCenter.max - seattleCenter.min) + seattleCenter.min);
   seattleCenterArray.push(i + 'AM: ' + Math.round((customerFive * seattleCenter.average)) + ' cookies');
 }

 seattleCenterArray.push('12PM: ' + Math.round(customerFive * seattleCenter.average) + ' cookies');


 for (var j = 1; j < 9; j++) {
   var customerSix = Math.floor(Math.random() * (seattleCenter.max - seattleCenter.min) + seattleCenter.min);
   seattleCenterArray.push(j + 'pm: ' + Math.round(customerSix * seattleCenter.average) + ' cookies');
 }
 generateRandomTwo(seattleCenter, seattleCenterArray);
 return[seattleCenterArray];

 var capitolHill = {
  min: 23,
  max: 65,
  average: 6.3,
 };

 function generateRandomThree() {
  for (var i = 6; i < 12; i++) {
    var customerSeven = Math.floor(Math.random() * (capitolHill.max - capitolHill.min) + capitolHill.min);
    capitolHillArray.push(i + 'AM: ' + Math.round((customerSeven * capitolHill.average)) + ' cookies');
  }

capitolHillArray.push('12PM: ' + Math.round(customerSeven * capitolHill.average) + ' cookies');


  for (var j = 1; j < 9; j++) {
    var customerEight = Math.floor(Math.random() * (capitolHill.max - capitolHill.min) + capitolHill.min);
    capitolHillArray.push(j + 'pm: ' + Math.round(customerEight * capitolHill.average) + ' cookies');
  }
  generateRandomThree(firstPike, firstPikeArray);
  return[capitolHillArray];

  var alki = {
   min: 23,
   max: 65,
   average: 6.3,
  };

  function generateRandomFour() {
   for (var i = 6; i < 12; i++) {
     var customerNine = Math.floor(Math.random() * (alki.max - alki.min) + alki.min);
     alkiArray.push(i + 'AM: ' + Math.round((customerNine * alki.average)) + ' cookies');
   }

   alkiArray.push('12PM: ' + Math.round(customerNine * alki.average) + ' cookies');


   for (var j = 1; j < 9; j++) {
     var customerTen = Math.floor(Math.random() * (alki.max - alki.min) + alki.min);
     alkiArray.push(j + 'pm: ' + Math.round(customerTen * alki.average) + ' cookies');
   }
   generateRandomFour(alki, alkiArray);
   return[alkiArray];





   var me = new Person('Nicholas Hunt-Walker', 71, 185);
   var mySon = new Person('Nathaniel Hunt-Walker', 22.44, 9.7);

   var names = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'.split(' ');

   for (var i = 0; i < names.length; i++) {
     // people.push(new Person(names[i], Math.random() * (72-60) + 60), Math.random() * (200 - 100) + 100);
     // this does the same as below
     var person = new Person();
     person.name = names[i];
     person.height = Math.random() * (72 - 60) + 60;
     person.weight = Math.random() * (200 - 100) + 100;
     // people.push(person);
