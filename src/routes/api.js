const router = require("express").Router();
const db = require("../models");
const mongoose = require("mongoose");

router.post("/workouts", (req, res) => {
  db.Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
router.put("/workouts/:id", ({ body, params }, res) => {
  db.Workout.findByIdAndUpdate(params.id, {$push: {exercises: body}})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/workouts", (req, res) => {
  db.Workout.find()
  .then(dbWorkout => {
    res.json(dbWorkout);
  }).catch(err => {
    res.status(400).json(err);
  });
});

router.get("/workouts/range", (req, res) => {
  db.Workout.find({}).limit(7).then((dbWorkout) => {
    res.json(dbWorkout);
  }).catch(err => {
    res.status(400).json(err);
  });
});

router.delete("/workouts", ({ body }, res) => {
  db.Workout.findByIdAndDelete(body.id)
  .then(() => {
    res.json(true);
  }).catch(err => {
    res.status(400).json(err);
  });
});

// const createWorkout = async (req, res) => {
//     const input = req.body;
//     //db.Station.collection.insertOne({ ...data });
//     try {
//       const response = await db.Workout.collection.insertOne({
//         type: input.type,
//         name: input.name,
//         weight: input.weight,
//         sets: input.sets,
//         rep: input.reps,
//         duration: input.resistance-duration,
//         day: Date.now(),
//       });
//       console.log(response);
//       res.status(201).send({
//         message: "exercise adding successful",
//       });
//     } catch (error) {
//       console.log(`Something happened on the server: ${error.message}`);
//       res.status(500).send(error.message);
//     }
//   };

//   router.post("/exercise", createWorkout);

// router.post("/api/transaction/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.get("/api/transaction", (req, res) => {
//   Transaction.find({})
//     .sort({ date: -1 })
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

module.exports = router;
