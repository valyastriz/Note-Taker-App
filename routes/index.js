const router = require('express').Router();

const notesRouter = require('./notes');

const deleteRouter = require('./delete');

router.use('/notes', notesRouter);
router.use('/notes', deleteRouter);

module.exports = router;