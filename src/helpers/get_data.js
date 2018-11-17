const PubSub = require('./pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const GetData = function() {

};

GetData.prototype.getData = function() {
  const request = new RequestHelper('https://data.nasa.gov/resource/y77d-th95.json')
  request.get((data) => {
    this.text = data;
    //console.log('no1',this.text);
    PubSub.publish('get_data_pass_to_processing:raw_data', this.text);
  });
}









module.exports = GetData;
