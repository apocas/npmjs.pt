require('colors');

var request = require('request');

exports.stats = function (req, res) {

  request('http://npm.nodechecker.com:5984/_stats/couchdb/database_reads', function (error, response, body) {
    res.json(body);
  });
};
