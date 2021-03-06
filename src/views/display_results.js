const PubSub = require('../helpers/pub_sub.js');
const Processing = require('../models/processing')
const DisplayResults = function(found) {
  this.found = found;
};

DisplayResults.prototype.sendToDisplay = function(target) {
  target.innerHTML = '';
  info = this.found;

  const name = this.createElement('h2', info.name);
  target.appendChild(name);

  const mass = this.createElement('h2', info.mass);
  target.appendChild(mass);

  const lat = this.createElement('h2', info.reclat);
  target.appendChild(lat);

  const long = this.createElement('h2', info.reclong);
  target.appendChild(long);

  const recclass = this.createElement('h2', info.recclass);
  target.appendChild(recclass);

  const year = this.createElement('h2', info.year);
  target.appendChild(year);

  // const target2 = document.createElement('h2')
  // target.appendChild(target2);

  // for (x of info['stop-and-search']) {
  //   const stopAndSearchData = this.createElement('li', x);
  //   target2.appendChild(stopAndSearchData);
  // }

  // const stopAndSearchDataNum = this.createElement2('h2', info['stop-and-search'].length);
  // target.appendChild(stopAndSearchDataNum);
 };

DisplayResults.prototype.createElement = function(elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  element.id = text;
  element.name = text;

  return element;
};

module.exports = DisplayResults;
