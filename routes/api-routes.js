const router = require("express").Router();
const Workout = require("../models/workout.js");

// api.js is the front end requests for what this file, api-routes.js, must do in the backend
// I need to:
// 1. answer getLastWorkout() - DONE
// 2. answer addExercise() - DONE
// 3. answer createWorkout() - DONE
// 4. answer getWorkoutsInRange() - DONE

// 1. answer getLastWorkout() - DONE
router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// 2. answer addExercise() - DONE
// This is a PUT, because we're updating a workout with a new exercise
// We push the new exercise to the exercises array
router.put("/api/workouts/:id", (req, res) => {
  console.log(req.body);
  Workout.findByIdAndUpdate(req.params.id, {
      $push: {
        exercises: req.body
      }
    })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// 3. answer createWorkout() - DONE
// This is a POST, because we're creating a new workout
router.post("/api/workouts", (req, res) => {
  Workout.create(req.body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// 4. answer getWorkoutsInRange() - DONE
// Responds to stats.js fetch & api.js getWorkoutsInRange()
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .sort("-day")
    .limit(7)
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;