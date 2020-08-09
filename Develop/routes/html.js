const express = require("express");

const router = express.Router();

const homePage = (req, res) => {
  res.sendFile("index.html");
};

const exercisePage = (req, res) => {
  res.sendFile("exercise.html");
};

const statsPage = (req, res) => {
  res.sendFile("stats.html");
};

router.get("/", homePage);
router.get("/stats", statsPage);
router.get("/exercise", exercisePage);

module.exports = router;
