'use strict';

var firstPikeArray = [];
var firstPike = {
  name = '1st and Pike',
  min = 23,
  max = 65,
  average = 6.3
};
function generateRandom(obj, array) {
 for (var i = 6; i < 12; i++) {
   var randomCust = Math.floor(Math.random() * (obj.max - obj.min) + obj.min);
   array.push(i + 'am: ' + (randomCust * obj.avgCust) + ' cookies');
 }

 array.push('12pm: ' + (randomCust * obj.avgCust) + ' cookies');

 var i = 1;

 for (var i = 1; i < 9; i++) {
   var randomCust = Math.floor(Math.random() * (obj.max - obj.min) + obj.min);
   array.push(i + 'pm: ' + (randomCust * obj.avgCust) + ' cookies');
 }
 return[array];
}

generateRandom(firstAndPike, salesFirstAndPike);
