'use strict';

  function Store (name, minCust, maxCust, avgCookies) {
    this.storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookies = avgCookies;
    this.simCookies = [];
    this.totalCookieSales = 0;

    this.randomCustomersPerHour = function(){
      return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
     },

   this.eachHourSales = function(){
    this.simCookies = [];
    this.totalCookieSales = 0;
    for (var i = 0; i < this.storeHours.length; i++) {
      var hourlyCookieSales = Math.ceil(this.avgCookies * this.randomCustomersPerHour());
      this.simCookies.push(hourlyCookieSales);
      this.totalCookieSales += hourlyCookieSales;
      }
   };
   this.eachHourSales();
  }

  var firstAndPikeFirst = new Store('Pike and First', 23, 65, 6.3);
  var seaTac = new Store('SeaTac', 3, 24, 1.2);
  var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
  var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
  var alki = new Store('Alki', 2, 16, 4.6);

for (var i = 0; i < seaTac.storeHours.length; i++) {
  console.log(seaTac.simCookies[i]);
}
