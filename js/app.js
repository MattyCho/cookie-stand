'use strict';

// proof of life
console.log('hello js');

// Store hours of operation
const storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

//------------Global Variable------------//
const salesDivElem = document.getElementById('salesList');
const newLocationFormElem = document.getElementById('newLocationForm');
let dailyTotal = 0;

//----------Constructor Function -------------//
function City(name, minCustomer, maxCustomer, avgCookies) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookies = avgCookies;
  this.salesArray = [];
  this.cityArray.push(this);
}

City.prototype.cityArray = [];

//---------Prototype Methods, only usable by City-----------//
City.prototype.getHourlySales = function() {
  for (let i = 0; i < storeHours.length; i++) {
    this.avgCustomer = Math.floor(Math.random() * (this.maxCustomer-this.minCustomer)) + this.minCustomer;
    this.salesArray[i] = (Math.floor(this.avgCookies * this.avgCustomer));
  }
}

//----------Global Function------------//
function renderCity() {
  const articleElem = document.createElement('article');
  salesDivElem.appendChild(articleElem);
  const h2Elem = document.createElement('h2');
  h2Elem.textContent = 'Chart of Hourly Sales by Location';
  articleElem.appendChild(h2Elem);
  const pElem = document.createElement('p');
  articleElem.appendChild(pElem);
  const tableElem = document.createElement('table');
  pElem.appendChild(tableElem);
  const row1Elem = document.createElement('tr');
  tableElem.appendChild(row1Elem);
  let thElem = document.createElement('th');
  row1Elem.appendChild(thElem);
    // Prints first row of table as store hours of operation.
  for (let i = 0; i < storeHours.length; i++){
    let thElem = document.createElement('th');
    thElem.textContent = storeHours[i];
    row1Elem.appendChild(thElem);
  }
  let thTotalElem = document.createElement('th')
  thTotalElem.textContent = 'Daily Location Total';
  row1Elem.appendChild(thTotalElem);
  // First loop goes through each city, makes a row, prints city name in the first column.
  for (let i = 0; i < City.prototype.cityArray.length; i++) {
    let currentCity = City.prototype.cityArray[i];
    console.log(currentCity);
    let tableRowsElem = document.createElement('tr');
    tableRowsElem.textContent = currentCity.name;
    tableElem.appendChild(tableRowsElem);
    City.prototype.cityArray[i].getHourlySales();
    // Second loop goes through each cities salesArray and puts it in the table.
    for (let n = 0; n < currentCity.salesArray.length; n++ ) {
      dailyTotal += currentCity.salesArray[i];
      let dataElem = document.createElement('td');
      dataElem.textContent = currentCity.salesArray[n];
      tableRowsElem.appendChild(dataElem);
      console.log(dailyTotal);
      // if the loop reaches the last index number, place the total in the last column.
      if (n === currentCity.salesArray.length - 1) {
        const tdTotalElem = document.createElement('td');
        tdTotalElem.textContent = dailyTotal;
        tableRowsElem.appendChild(tdTotalElem);
      }
    }
    dailyTotal = 0;
  }
  const lastRowElem = document.createElement('tr');
  tableElem.appendChild(lastRowElem);
  const hourlyTotalElem = document.createElement('th');
  hourlyTotalElem.textContent = 'Total';
  lastRowElem.appendChild(hourlyTotalElem);
  let hourlyTotal = 0;
  let grandTotal = 0;
  for (let i = 0; i < storeHours.length; i++) {
    for (let j = 0; j < City.prototype.cityArray.length; j++) {
      let currentHourSales = City.prototype.cityArray[j].salesArray[i];
      hourlyTotal += currentHourSales;
    }
    const thHourlyTotalElem = document.createElement('th');
    thHourlyTotalElem.textContent = hourlyTotal;
    lastRowElem.appendChild(thHourlyTotalElem);
    grandTotal += hourlyTotal;
    console.log(grandTotal);
    hourlyTotal = 0;
  }
  const thGrandTotalElem = document.createElement('th');
  thGrandTotalElem.textContent = grandTotal;
  lastRowElem.appendChild(thGrandTotalElem);
}

//creates new City object from the submitted form
function handleSubmit(event) {
  event.preventDefault();
  let name = event.target.name.value
  let minCustomer = parseInt(event.target.minCustomer.value);
  let maxCustomer = parseInt(event.target.maxCustomer.value);
  let avgCookies = parseInt(event.target.avgCookies.value);

  const newLocation = new City(name, minCustomer, maxCustomer, avgCookies);
  console.log(newLocation);
  newLocation.getHourlySales();
  salesDivElem.innerHTML = "";
  renderCity();
}

//----------Declare Cities----------//
const seattle = new City('Seattle', 23, 65, 6.3);
const tokyo = new City('Tokyo', 3, 24, 1.2);
const dubai = new City('Dubai', 11, 38, 3.7);
const paris = new City('Paris', 20, 38, 2.3);
const lima = new City('Lima', 2, 16, 4.6);

newLocationFormElem.addEventListener('submit', handleSubmit);

//---Call Function---//
renderCity();