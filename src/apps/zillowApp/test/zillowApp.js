// Unit Test
var request = require('request');

// Check entity path
module.exports.getListings = function (test) {
  // Test API call to Retsly
  request.get('https://rets.io/api/v1/test/listings?access_token=6baca547742c6f96a6ff71b138424f21&limit=6', function(err, res) {
    test.ok(!err);
    test.equal(res.statusCode, 200);

    var data = JSON.parse(res.body);

    // Check the limit of returned results is 6
    test.equal(data.bundle.length, 6);
    // Check some of the returned values are what is expected
    test.equal(data.bundle[1].address, "5604 Sunfish Court, Discovery Bay, CA");
    test.equal(data.bundle[5].address, "1880 Enterprise Boulevard, West Sacramento, CA");
    test.equal(data.bundle[1].price, 285632);
    test.equal(data.bundle[5].price, 686522);
    test.done();
  });
};