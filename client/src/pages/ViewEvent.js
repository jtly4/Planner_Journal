
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
        <div className="event_label">
            <label for="eventName"><b>Event Name:</b></label><br />
            <p>{props.name}</p>
            </div>
        </>
    )
}

function EventDate(props) {
    return (
        <>
        <div className="event_label">
            <label for="eventDate"><b>Event Date:</b></label><br />
            <p>{props.date}</p>
            </div>
        </>
    )
}

function EventTime(props) {
    return (
        <>
        <div className="event_label">
            <label for="eventTime"><b>Event Time:</b></label><br />
            <p>{props.name}</p>
            <p>{props.start}</p>
            <p> to </p>
            <p>{props.end}</p>
            </div>
        </>
    )
}

function EventDescription(props) {
    return (
        <>
        <div className="event_label">
            <label for="eventDescription"><b>Event Description:</b></label><br />
            <textarea rows="10" cols = "90" className='view-description'>{props.description}</textarea> <br />
            </div>
        </>
    )
}

function EventLocation(props) {
    return (
        <>
        <div className="event_label">
            <label for="eventLocation"><b>Event Location:</b></label><br />
            <p>{props.location}</p> <br />
            </div>
        </>
    )
}

function EventToDo(props) {
    return (
        <>
        <div className="event_label">
            <label for="eventToDo"><b>To Do Beforehand:</b></label><br />
            <MyForm tdOne = {props.tdOne} tdTwo = {props.tdTwo} tdThree = {props.tdThree} />
            </div>
        </>
    )
}

function EventAttendees(props) {
    return (
        <>
        <div className="event_label">
            <label for="eventAttendees"><b>Event Attendees:</b></label><br />
            <p>{props.attendees}</p> <br />
            </div>
        </>
    )
}

function EventTransport(props) {
    return (
        <>
        <div className="event_label">
            <label for="eventTransport"><b>Event Transport:</b></label><br />
            <p>{props.transport}</p> <br />
            </div>
        </>
    )
}



function ViewEvent() {
    return (
        <>
        <h2 className="page-title">View Event</h2>
        <div className='event_container'>
            
            <div className='view_left'>
                <EventName name="Book Club" />
                <EventDate date="May 19, 2024" />
                <EventTime start="2:00 PM" end="4:00 PM"/>
                <EventDescription description="Book club meeting! We will be going over ch 8 of The Cat in the Hat" />
            </div>
            <div className='view_right'>
            <EventLocation location="Stacy's house: 222 Cherry Lane" />
                <EventToDo tdOne="Finish ch 8" tdTwo="Bake cookies" tdThree="" />
                <EventAttendees attendees="Amy A, Bob B, Charlie C" />
                <EventTransport transport="Driving" />
                <button type="button" id="exit_view" className='view-event-btn'><Link to="/Calendar">Exit</Link></button>
                <button type="button" id="close_event" className='view-event-btn'><Link to="/CloseEvent">Close Event</Link></button>
                <button type="button" id="view_closed_event" className='view-event-btn'><Link to="/ViewClosedEvent">View Closed Event</Link></button>            </div>
        </div>
        </>
    )
};

export default ViewEvent;
