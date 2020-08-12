const express = require("express");
const mongoose = require("mongoose");
const htmlRoutes = require("./routes/html");
const apiRoutes = require("./routes/api");
const path = require("path")

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDb", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

app.use(express.static(path.join(__dirname, "./public")));
// routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT} !`);

});
