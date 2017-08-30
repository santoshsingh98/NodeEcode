var express = require('express');
var router = express.Router();
var request = require('request');
var jsdom = require('jsdom'),
  cheerio = require('cheerio'),
  request = require('request'),
  url = require('url');


router.get('/scrape', function (req, res) {

  request('req.query.url', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      $('span.comhead').each(function(i, element){
      var a = $(this).prev();
      console.log(a.text());
    });
    }
  });

});

module.exports = router;