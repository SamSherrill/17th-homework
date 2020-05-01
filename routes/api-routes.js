// THERE IS ALREADY AN API.JS IN THE SUPPLIED STARTER FILES
// HOWEVER, it doesn't have a router, and doesn't export anything

const router = require("express").Router();
const Workout = require("../models/workout.js");

// Need post: only posting one, so use .create()
// Need to get -- needs to be a get all

router.post("/api/workouts/", ({
  body
}, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    //.sort({date: -1}) // might be sorted for me on the front end
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

// THIS ROUTE WORKS NOW: Responds to stats.js fetch & api.js getWorkoutsInRange()
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .limit(7)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

module.exports = router;