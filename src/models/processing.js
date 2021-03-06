const PubSub = require('../helpers/pub_sub.js');
const DisplayResults = require('../views/display_results.js')
const MapAdd = require('../views/map_add.js');

const Processing = function(element) {
  this.element = element;
};

Processing.prototype.rawDataPacket = function(y) {
  PubSub.subscribe('get_data_pass_to_processing:raw_data', (x) => {
    const m = x.detail;
    //console.log('this should be the target for the info ',this.element);
    PubSub.publish('processing_to_app:decoded_data', m);
    PubSub.subscribe('SelectView:change', (z) => {
      const selectedView = z.detail;
      const found = m.find(function(mzoom) {
        return mzoom.name === selectedView;
      });
      const postProcessData = new DisplayResults(found);
      postProcessData.sendToDisplay(this.element);
      PubSub.publish('processing_to_app:selectedData', found);
      // const postProcessData2 = new MapAdd();
      // postProcessData2.passSelectedRegion(found);
    })
  })
};









module.exports = Processing;
