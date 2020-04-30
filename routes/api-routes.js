// THERE IS ALREADY AN API.JS IN THE SUPPLIED STARTER FILES
// HOWEVER, it doesn't have a router, and doesn't export anything

// const router = require("express").Router();
// const Workout = require("../models/workout.js");

// // Need post: only posting one, so use .create()
// // Need to get -- needs to be a get all, 
// // Swithc out transaction for workout

// router.post("/api/transaction", ({
//   body
// }, res) => {
//   Workout.create(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(404).json(err);
//     });
// });

// router.get("/api/transaction", (req, res) => {
//   Workout.find({})
//     //.sort({date: -1}) // might be sorted for me on the front end
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.status(404).json(err);
//     });
// });

// // code from stats.js 
// // I need to answer this with a router.get
// //   fetch("/api/workouts/range")
// //   .then(response => {
// //     return response.json();
// //   })
// //   .then(data => {
// //     populateChart(data);
// //   });

// router.get("/api/transaction", (req, res) => {
//   Workout.find({})
//     //.sort({date: -1}) // might be sorted for me on the front end
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.status(404).json(err);
//     });
// });