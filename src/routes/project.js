const express = require("express");
const router = express.Router();

router.post("/generate", (req, res) => {
  console.log(req.body);
  res.json({ requestBody: req.body });
});

module.exports = router;
