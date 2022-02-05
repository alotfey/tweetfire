const router = require('express').Router();
const userRoutes = require('./user-routes');
const ThoughtRoutes = require('./thought-routes');

router.use('/users', userRoutes);
router.use('/thoughts', ThoughtRoutes);

module.exports = router;
