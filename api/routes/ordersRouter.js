const express = require('express');

const router = express.Router();

// create Router to save the orders

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    console.log('No limit or offset');
  }
});

module.exports = router;
