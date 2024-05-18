import { useState } from 'react';
import { Link } from "react-router-dom";

function MyForm(props) {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(inputs);
        alert("Submitted!")
    }
  
    return (
        <form onSubmit={handleSubmit} action="/event_form" method="POST">
            <fieldset>
                <input type="checkbox" id="tdOneCheck" name="tdOneCheck" value="done" />
                <span className ="todo" id="toDoOne">
                    <span className = "v_event" id ="v_tdOne">
                    <p>{props.tdOne}</p>
                    </span>
                </span><br />
                <input type="checkbox" id="tdTwoCheck" name="tdTwoCheck" value="done" />
                <span className ="todo" id="toDoTwo">
                    <span className = "v_event" id ="v_tdTwo">
                        <p>{props.tdTwo}</p>
                    </span>
                </span><br />
                <input type="checkbox" id="tdThreeCheck" name="tdThreeCheck" value="done" />
                <span className ="todo" id="toDoThree">
                    <span className = "v_event" id ="v_tdThree">
                        <p>{props.tdThree}</p>
                    </span>
                </span><br />
                <input type="submit" value="Save" />
            </fieldset>
        </form>
    )
  }

function EventName(props) {
    return (
        <>
            <label for="eventName" className = "event_label"><b>Event Name:</b></label><br />
            <p>{props.name}</p> <br />
        </>
    )
}

function EventDate(props) {
    return (
        <>
            <label for="eventDate" className = "event_label"><b>Event Date:</b></label><br />
            <p>{props.date}</p> <br />
        </>
    )
}

function EventTime(props) {
    return (
        <>
            <label for="eventTime" className = "event_label"><b>Event Time:</b></label><br />
            <p>{props.name}</p> <br />
            <p>{props.start}</p>
            <p>to</p>
            <p>{props.end}</p>
        </>
    )
}

function EventDescription(props) {
    return (
        <>
            <label for="eventDescription" className = "event_label"><b>Event Description:</b></label><br />
            <textarea>{props.description}</textarea> <br />
        </>
    )
}

function EventLocation(props) {
    return (
        <>
            <label for="eventLocation" className = "event_label"><b>Event Location:</b></label><br />
            <p>{props.location}</p> <br />
        </>
    )
}

function EventToDo(props) {
    return (
        <>
            <label for="eventToDo" className = "event_label"><b>To Do Beforehand:</b></label><br />
            <MyForm tdOne = {props.tdOne} tdTwo = {props.tdTwo} tdThree = {props.tdThree} />
        </>
    )
}

function EventAttendees(props) {
    return (
        <>
            <label for="eventAttendees" className = "event_label"><b>Event Attendees:</b></label><br />
            <p>{props.attendees}</p> <br />
        </>
    )
}

function EventTransport(props) {
    return (
        <>
            <label for="eventTransport" className = "event_label"><b>Event Transport:</b></label><br />
            <p>{props.transport}</p> <br />
        </>
    )
}



function ViewEvent() {
    return (
        <>
        <h2>View Event</h2>
        <div className='event_container'>
            
            <div className='view_left'>
                <EventName name="Book Club" />
                <EventDate date="May 19, 2024" />
                <EventTime start="2:00 PM" end="4:00 PM"/>
                <EventDescription description="Book club meeting! We will be going over ch 8 of The Cat in the Hat" />
                <EventLocation location="Stacy's house: 222 Cherry Lane" />
            </div>
            <div className='view_right'>
                <EventToDo tdOne="Finish ch 8" tdTwo="Bake cookies" tdThree="" />
                <EventAttendees attendees="Amy A, Bob B, Charlie C" />
                <EventTransport transport="Driving" />
                <button type="button" id="exit_view"><Link to="/Calendar">Exit</Link></button>
                <button type="button" id="close_event"><Link to="/CloseEvent">Close Event</Link></button>
                <button type="button" id="view_closed_event"><Link to="/ViewClosedEvent">View Closed Event</Link></button>            </div>
        </div>
        </>
    )
};

export default ViewEvent;
