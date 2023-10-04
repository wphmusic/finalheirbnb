
const express = require('express');
const router = express.Router();
const apiRouter = require('./api');

router.get("/api/csrf/restore", (req, res) => {
  console.log("got token")
    const csrfToken = req.csrfToken();
    res.cookie("XSRF-TOKEN", csrfToken);
    res.status(200).json({
      'XSRF-Token': csrfToken
    });
  });
  // ...


router.use('/api', apiRouter);

module.exports = router;
