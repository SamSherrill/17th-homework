const router = require("express").Router();
const Workout = require("../models/workout.js");

// Need post: only posting one, so use .create()
// Need to get -- needs to be a get all, 
// Swithc out transaction for workout

router.post("/api/transaction", ({body}, res) => {
    Transaction.create(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });

router.get("/api/transaction", (req, res) => {
    Transaction.find({})
    //.sort({date: -1}) // might be sorted for me on the front end
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });

  // code from stats.js 
  // I need to answer this with a router.get
//   fetch("/api/workouts/range")
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     populateChart(data);
//   });

router.get("/api/transaction", (req, res) => {
    Transaction.find({})
    //.sort({date: -1}) // might be sorted for me on the front end
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });