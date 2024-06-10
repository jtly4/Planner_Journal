const mongoose = require("mongoose")
const Schema = mongoose.Schema

const eventSchema = new Schema({
    userID: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    startTime: {
        type: String
    },
    endTime: {
        type: String
    },
    description: {
        type: String
    },
    loaction: {
        type: String
    },
    toDoOne: {
        type: String
    },
    toDoTwo: {
        type: String
    },
    toDoThree: {
        type: String
    },
    who: {
        type: String
    },
    transportaion: {
        type: String
    },
    isClosed: {
        type: Boolean
    },
    rating: {
        type: String
    },
    image: {
        type: String
    },
    refelction: {
        type: String
    },
    expenses: {
        type: String
    },
    split: {
        type: String
    }
})

const Event = mongoose.model("Event", eventSchema)

module.exports = Event