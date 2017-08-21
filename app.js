'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var pikeFirst = {
  name: 'First and Pike',
  minCust: 25,
  maxCust: 65,
  avgCookies: 6.3,
  simCookies: [],
  totalCookieSales: 0,

eachHourSales = function(){
 simCookies = [];
 totalCookieSales = 0;
 for (var i = 0; i < storeHours.length; i++) {
   var hourlyCookieSales = Math.ceil(avgCookies * this.randomCustomersPerHour());
   simCookies.push(hourlyCookieSales);
   totalCookieSales += hourlyCookieSales;
   eachHourSales();
 };
 generateRandomFirstAndPike: function() {
  var totalsales = 0;
  var body = document.getElementsByTagName('body')[0];
  var ul = document.createElement('ul');
  var h2 = document.createElement('h2');
  body.appendChild(h2);
  h2.innerText = this.name;
  body.appendChild(ul);
