var express = require('express');
var router = express.Router();

router.get('/api', function(req, res) {
  res.status(200).json({ message: 'All courses route' });
});

module.exports = router;
