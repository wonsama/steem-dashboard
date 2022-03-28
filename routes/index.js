var express = require("express");
var router = express.Router();
const i18next = require("i18next");

/* GET home page. */
router.get("/", function (req, res, next) {
  var lng = req.language;
  console.log("🚀 ~ file: index.js ~ line 8 ~ lng", lng);
  var lngs = req.languages;
  console.log("🚀 ~ file: index.js ~ line 10 ~ lngs", lngs);

  res.render("index", { logined: false });
});

module.exports = router;
