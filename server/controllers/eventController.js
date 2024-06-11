const EventModel = require('../models/eventModel')
const mongoose = require("mongoose")

// get all events
const getEvents = async (req, res) => {
    const user_id = req.user._id
    const events = await EventModel.find({ user_id }) // .sort({createdAt: -1}) sorts newest first
    res.status(200).json(events)
}

// get a single event
const getEvent = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such event"})
    }
    const event = await EventModel.findById(id)
    if(!event) {
        return res.status(404).json({error: "No such event"})
    }
    res.status(200).json(event)
}

// create a new event
const createEvent = async (req, res) => {
    const {
        title, date, startTime, endTime, description, location, who, toDoOne, toDoTwo, toDoThree, transportation, 
        isClosed, rating, image, reflection, expenses, split
    } = req.body
    // add document to db
    try {
        const user_id = req.user._id
        const event = await EventModel.create({
            user_id, title, date, startTime, endTime, description, location, who, toDoOne, toDoTwo, toDoThree, transportation, 
            isClosed, rating, image, reflection, expenses, split
        })
        await event.save()
        res.status(200).json(event)
    }
    catch (error){
        res.status(400).json({error: error.message})
    }
}

// delete a event
const deleteEvent = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no such event"})
    }
    const event = await EventModel.findOneAndDelete({_id: id})
    if(!event) {
        return res.status(404).json({error: "No such event"})
    }
    res.status(200).json(event)
}

// update a event
const updateEvent = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no such event"})
    }
    const event = await EventModel.findByIdAndUpdate({_id: id}, {
        ...req.body
    })
    if(!event) {
        return res.status(404).json({error: "No such event"})
    }
    res.status(200).json(event)
}

module.exports = {
    getEvents,
    getEvent,
    createEvent,
    deleteEvent,
    updateEvent
}