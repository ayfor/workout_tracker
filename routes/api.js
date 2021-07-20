const router = require("express").Router();
const path = require("path");
const Workout = require('../models/workout.js')

//-----HOME ROUTES-----

router.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
router.get('/exercise', (req, res) => res.sendFile(path.join(__dirname, '../public/exercise.html')));
router.get('/stats', (req, res) => res.sendFile(path.join(__dirname, '../public/stats.html')));

//-----API ROUTES-----

//GET WORKOUTS
//Should return aggregate of workouts
router.get('/api/workouts', (req, res) => {
    Workout.find({})
        .sort({day:-1})
        .then(dbTransaction => {
            res.json(dbTransaction);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

//CREATE WORKOUT
router.post('/api/workouts', ({body},res) => {
    Workout.create(body)
        .then(dbTransaction => {
            res.json(dbTransaction);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

//ADD EXERCISE
router.put('/api/workouts/:id', (req, res) => {
    Workout.findOneAndUpdate(
        {_id: req.params.id},
        {$push: { exercises: req.body } },
        {new: true}
    )
    .then(dbTransaction => {
        res.json(dbTransaction);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

module.exports = router;
