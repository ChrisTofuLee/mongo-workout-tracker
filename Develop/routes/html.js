const express = require("express");

const router = express.Router();

const homePage = (req, res) => {
  res.sendFile("public/index.html");
};

const exercisePage = (req, res) => {
  res.sendFile("public/exercise.html");
};

const statsPage = (req, res) => {
    res.sendFile("public/stats.html");
  };

router.get("/", homePage);
router.get("/stats", statsPage);
router.get("/exercise", exercisePage);

module.exports = router;
