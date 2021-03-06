const GetData = require('./helpers/get_data.js');
const PubSub = require('./helpers/pub_sub.js');
const Processing = require('./models/processing.js');
const Display_Results = require('./views/display_results.js');
const SelectedView = require('./views/selected_view.js');
const MapAdd = require('./views/map_add.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('Lets go!!');

  const selectElement = document.querySelector('#meteorites');
  const selectElement2 = document.querySelector('#meteorites2');
  const selectElement3 = document.querySelector('#meteorites3');
  const selectElement4 = document.querySelector('#meteorites4');
  const selectElementList = document.querySelector('#meteorite-data');
  const mapPackTarget = document.querySelector('#mappack');

  const mapAdd = new MapAdd(mapPackTarget);
  mapAdd.addMap(mapPackTarget);

  const dropdown = new SelectedView(selectElement);
  dropdown.dropdowned(selectElement);
  const dropdown2 = new SelectedView(selectElement2);
  dropdown2.dropdowned(selectElement2);
  const dropdown3 = new SelectedView(selectElement3);
  dropdown3.dropdowned(selectElement3);
  const dropdown4 = new SelectedView(selectElement4);
  dropdown4.dropdowned(selectElement4);


  const getData = new GetData();
  getData.getData();

  const processing = new Processing(selectElementList);
  processing.rawDataPacket(selectElement);
  const processing2 = new Processing(selectElementList);
  processing.rawDataPacket(selectElement);
  const processing3 = new Processing(selectElementList);
  processing.rawDataPacket(selectElement);
  const processing4 = new Processing(selectElementList);
  processing.rawDataPacket(selectElement);

  PubSub.subscribe('processing_to_app:decoded_data', (data) => {

    const meteorite = data.detail;

    let counter = 1000;
    let target;
    let option;
    for (m of meteorite) {

      if (counter > 0 && counter < 251) {
        target = document.querySelector('#meteorites4');
        option = document.createElement('option');
        counter -= 1;
        option.id = m.name;
        option.textContent = m.name;
        target.appendChild(option);
      }
      if (counter > 250 && counter < 501) {
        target = document.querySelector('#meteorites3');
        option = document.createElement('option');
        counter -= 1;
        option.id = m.name;
        option.textContent = m.name;
        target.appendChild(option);
      };
      if (counter > 500 && counter < 751) {
        target = document.querySelector('#meteorites2');
        option = document.createElement('option');
        counter -= 1;
        option.id = m.name;
        option.textContent = m.name;
        target.appendChild(option);
      };
      if (counter > 750 && counter < 1001) {
        target = document.querySelector('#meteorites');
        option = document.createElement('option');
        counter -= 1;
        option.id = m.name;
        option.textContent = m.name;
        target.appendChild(option);
      };
    };
  });
});
