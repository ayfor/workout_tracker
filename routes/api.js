const router = require("express").Router();
const path = require("path");
const Workout = require('../models/workout.js')

//-----HOME ROUTES-----

router.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
router.get('/exercise', (req, res) => res.sendFile(path.join(__dirname, '../public/exercise.html')));
router.get('/stats', (req, res) => res.sendFile(path.join(__dirname, '../public/stats.html')));

//-----API ROUTES-----

router.get('/api/workouts', (req, res) => {
    Workout.find({})
        .then(dbTransaction => {
            res.json(dbTransaction);
        })
        .catch(err => {
            res.status(400).json(err);
        })
})

router.post('/api/workouts', ({body},res) => {
    Workout.create(body)
        .then(dbTransaction => {
            res.json(dbTransaction);
        })
        .catch(err => {
            res.status(400).json(err);
        })
})

module.exports = router;
