const express = require('express')
const router = express.Router()
const {
    getEvents,
    getEvent,
    createEvent,
    deleteEvent,
    updateEvent
} = require('../controllers/eventController')

// const requireAuth = require('../middleware/requireAuth')
// require authentication 
// router.use(requireAuth)

 // GET all events
router.get('/', getEvents);

// GET a single events
router.get('/:id', getEvent);

// POST a new event
router.post('/', createEvent);

// PATCH a event 
router.patch('/:id', updateEvent);

// DELETE a event
router.delete('/:id', deleteEvent);

module.exports = router