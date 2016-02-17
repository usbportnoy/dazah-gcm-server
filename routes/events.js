var express = require('express');
var router = express.Router();
var gcm = require('node-gcm');

/* GET users listing. */
router.post('/', function(req, res, next) {
  var message = new gcm.Message();
  message.addData('webhook', req.param('webhook'));
  message.addData('user_id',req.param('user_id'));
  message.addData('event',req.param('event'));
  message.addData('object_type',req.param('object_type'));
  message.addData('object_id',req.param('object_id'));
  message.addData('timestamp',req.param('timestamp'));
  var regTokens = [req.query.token];
  var sender = new gcm.Sender('TOKEN');
  sender.send(message, { registrationTokens: regTokens }, function (err, response) {
      if(err) console.error(err);
      else    console.log(response);
  });
  sender.sendNoRetry(message, { topic: '/topics/global' }, function (err, response) {
      if(err) console.error(err);
      else    console.log(response);
  });
  res.send('respond with a token ' + req.query.token);
});

module.exports = router;
