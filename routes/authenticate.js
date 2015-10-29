var express = require('express');
var router = express.Router();
var utils = require('../utils');

var Extension = require('../db/Extension');
var Developer = require('../db/Developer');

router.get('/:extensionToAuth', function(req, res, next) {
  var extension = req.params.extensionToAuth;
  utils.runAuthenticationSequence(extension, req, res, next, function(err) {
    if (err) {
      console.log('Error in authenticating extension', err);
    }
    res.send(200);
  });
});

module.exports = router;