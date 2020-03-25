// const Workout = require("../models/workout.js");
// const Exercises = require("../models/exercises.js");
const db = require("../models");

module.exports = function (app) {
        app.get("/api/workouts", (req,res) => {
            db.Workout.find()
            .then(data => res.json(data))
            .catch(err => {
                console.log("err", err)
                res.json(err);
            })
        });

        app.post("/api/workouts", (req,res) => {
            db.Workout.create({})
            .then(data => res.json(data))
            .catch(err => {
                console.log("err", err);
                res.json(err);
            })
        });

        app.put("/api/workouts/:id", ({body, params}, res) => {
            db.Workout.findByIdAndUpdate(
                params.id,
                {$push: {exercises: body}},
                {new: true, runValidators: true}
            )
            .then(data => res.json(data))
            .catch(err => {
                console.log("err", err)
                res.json(err);
            })
        });
}



// db.Workout.create({
    //     day: "Tuesday",
    //     name: "First Workout",
    // })
    //     .then(dbWorkout => {
    //         console.log(dbWorkout);
    //     })
    //     .catch(({ message }) => {
    //         console.log(message);
    //     });

    //     db.Exercises.create({
    //     type: "resistance",
    //     name: "Bicep Curl",
    //     duration: 20,
    //     weight: 100,
    //     reps: 10,
    //     sets: 4
    //   })
    
    // app.get("/api/workouts", (req, res) => {
    //     db.Workout.find({})
    //         .then(dbBook => {
    //             res.json(dbBook);
    //         })
    //         .catch(err => {
    //             res.json(err);
    //         });
    // });

    // app.get("/api/workouts/:id", (req, res) => {
    //     db.Workout.find({})
    //         .then(dbBook => {
    //             res.json(dbBook);
    //         })
    //         .catch(err => {
    //             res.json(err);
    //         });
    // });

    // app.get("/api/exercises", (req, res) => {
    //     db.Exercises.find({})
    //         .then(dbLibrary => {
    //             res.json(dbLibrary);
    //         })
    //         .catch(err => {
    //             res.json(err);
    //         });
    // });

    // app.get("/api/populatedworkouts", (req, res) => {
    //     db.Workout.find({})
    //       .populate("exercises")
    //       .then(dbWorkout => {
    //         res.json(dbWorkout);
    //       })
    //       .catch(err => {
    //         res.json(err);
    //       });
    //   });

    //   app.post("/api/exercises/", ({ body }, res) => {
    //     db.Exercises.create(body)
    //       .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
    //       .then(dbexercises => {
    //         res.json(dbexercises);
    //       })
    //       .catch(err => {
    //         res.json(err);
    //       });
    //   });

    // app.post("/api/workouts"), (req, res) => {
    //     console.log(req.body);
    //     db.Workout.create(req.body, (error, data) => {
    //         if (error) {
    //             res.send(error);
    //         } else {
    //             res.json(data);
    //         }
    //     })
    // }

    // app.put("/api/workouts/:id"), ({ body, params }, res) => {
    //     db.Workout.findByIdAndUpdate(
    //         { _id: mongojs.ObjectId(req.params.id) },
    //         { $push: { exercises: body } },
    //         { new: true })
    //         .then(data => res.json(data))
    //         .catch(err => {
    //             console.log("err", err)
    //             res.json(err);
    //         })
    // }