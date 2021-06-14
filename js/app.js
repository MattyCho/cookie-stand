'use strict';

// proof of life
console.log('hello js');

function hourlyCustomers(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}

const seattle = {
  name: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookies: 6.3,
  avgCustomer: 0,
  salesArray: [],
  getAvgCustomer: function() {
    for (let i = 0; i < 14; i++) {
      // console.log(this.avgCustomer);
      this.avgCustomer = hourlyCustomers(this.minCustomer, this.maxCustomer);
      // console.log(this.avgCustomer);
      this.salesArray[i] = (Math.floor(this.avgCookies * this.avgCustomer));
      // console.log(Math.floor(this.avgCookies * this.avgCustomer));
    }
    return [this.salesArray];
  }
}

console.log(seattle.getAvgCustomer());

const tokyo = {
  name: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookies: 1.2,
  avgCustomer: 0,
  salesArray: [],
  getAvgCustomer: function() {
    for (let i = 0; i < 14; i++) {
      // console.log(this.avgCustomer);
      this.avgCustomer = hourlyCustomers(this.minCustomer, this.maxCustomer);
      // console.log(this.avgCustomer);
      this.salesArray[i] = (Math.floor(this.avgCookies * this.avgCustomer));
      // console.log(Math.floor(this.avgCookies * this.avgCustomer));
    }
    return [this.salesArray];
  }
}

console.log(tokyo.getAvgCustomer());


const dubai = {
  name: 'Dubai',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookies: 6.3,
  avgCustomer: 0,
  salesArray: [],
  getAvgCustomer: function() {
    for (let i = 0; i < 14; i++) {
      // console.log(this.avgCustomer);
      this.avgCustomer = hourlyCustomers(this.minCustomer, this.maxCustomer);
      // console.log(this.avgCustomer);
      this.salesArray[i] = (Math.floor(this.avgCookies * this.avgCustomer));
      // console.log(Math.floor(this.avgCookies * this.avgCustomer));
    }
    return [this.salesArray];
  }
}

console.log(dubai.getAvgCustomer());


const paris = {
  name: 'Paris',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookies: 6.3,
  avgCustomer: 0,
  salesArray: [],
  getAvgCustomer: function() {
    for (let i = 0; i < 14; i++) {
      // console.log(this.avgCustomer);
      this.avgCustomer = hourlyCustomers(this.minCustomer, this.maxCustomer);
      // console.log(this.avgCustomer);
      this.salesArray[i] = (Math.floor(this.avgCookies * this.avgCustomer));
      // console.log(Math.floor(this.avgCookies * this.avgCustomer));
    }
    return [this.salesArray];
  }
}

console.log(paris.getAvgCustomer());


const lima = {
  name: 'Lima',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookies: 6.3,
  avgCustomer: 0,
  salesArray: [],
  getAvgCustomer: function() {
    for (let i = 0; i < 14; i++) {
      // console.log(this.avgCustomer);
      this.avgCustomer = hourlyCustomers(this.minCustomer, this.maxCustomer);
      // console.log(this.avgCustomer);
      this.salesArray[i] = (Math.floor(this.avgCookies * this.avgCustomer));
      // console.log(Math.floor(this.avgCookies * this.avgCustomer));
    }
    return [this.salesArray];
  }
}

console.log(lima.getAvgCustomer());


let cityArray = [seattle, tokyo, dubai, paris, lima];

const salesDivElem = document.getElementById('salesList');

function renderCity(city) {
  const articleElem = document.createElement('article');
  salesDivElem.appendChild(articleElem);
  const h2Elem = document.createElement('h2');
  h2Elem.textContent = city.name;
  articleElem.appendChild(h2Elem);
  const pElem = document.createElement('p');
  articleElem.appendChild(pElem);
  const ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);
  for (let i = 0; i < city.salesArray.length; i++) {
    const liElem = document.createElement('li');
    if ( i < 6) {
       console.log(i);
       liElem.textContent = `${i+6}am: ${city.salesArray[i]} cookies`;
    } else if (i == 6) {
      console.log(i);
      liElem.textContent = `${i+6}pm: ${city.salesArray[i]} cookies`;
    } else {
      console.log(i);
      liElem.textContent = `${i-6}pm: ${city.salesArray[i]} cookies`;
    }
    ulElem.appendChild(liElem);
  }
}

for (let i = 0; i < cityArray.length; i++) {
  renderCity(cityArray[i])
}