const express = require("express");
const path = require('path');

const router = express.Router();

const homePage = (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../public/index.html'));
};

const exercisePage = (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../public/exercise.html'))
};

const statsPage = (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../public/stats.html'))
  };

router.get("/", homePage);
router.get("/stats", statsPage);
router.get("/exercise", exercisePage);

module.exports = router;
