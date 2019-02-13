var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var protocol = req.secure ? "https" : "http";
  res.render('index', { title: 'Orders', captureOrderService: protocol+"://"+process.env.CAPTUREORDERSERVICEIP+"/v1/order" });
});

module.exports = router;
