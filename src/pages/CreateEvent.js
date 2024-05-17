import { useState } from 'react';
import { Link } from "react-router-dom";
  

function MyForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Event Created!")
    }
  
    return (
        <form onSubmit={handleSubmit} action="/event_form" method="POST">
            
            <div className="view_left">
            <label for="eventName" className = "event_label">Event Name</label><br />
            <input type="text" id="eventName" name="eventName" placeholder ="Event Name" minlength = "1" maxlength = "20" class = "cEvent_inputTxt" required /><br />

            <label for="eventDate" class = "event_label">Date:</label><br />
            <input type="date" id="eventDate" className = "cEvent_input" name="eventDate" required /><br />

            <label for="startTime" class = "event_label">Time:</label><br />
            <input type = "time" id="startTime" className = "cEvent_input"  name="startTime" />
            <label for="eventTime">to </label>
            <input type = "time" id="endTime" className = "cEvent_input"  name="startTime" /><br />

            <label for="eventDescription" className = "event_label">Description/Notes:</label><br />
            <textarea id = "eventDescription" className = "cEvent_inputTxt"  rows = "4" cols = "26" name ="eventDescription" ></textarea><br />
        
            <label for="Where" className = "event_label">Where:</label><br />
            <input type="text" id = "eventLoc" className = "cEvent_inputTxt"  name = "eventLoc" placeholder = "123 Apple Street" /><br />
            </div>
            
            
            <div class="view_right">
                <label for="eventToDo" class = "event_label">To Do Beforehand:</label><br />
                <span>
                    <fieldset>
                        <input type = "text" id = "tdOne" name = "tdOne" className = "cEvent_inputTxt"  maxlength = "120" placeholder = "to do" /><br />
                        <input type = "text" id = "tdTwo" name = "tdTwo" className = "cEvent_inputTxt" maxlength = "120" placeholder = "to do" /><br />
                        <input type = "text" id = "tdThree" name = "tdThree" className = "cEvent_inputTxt"  maxlength = "120" placeholder = "to do" /><br />
                    </fieldset>
                </span>

                <label for="eventAttendees" class = "event_label">Attendees:</label><br />
                <textarea id = "eventAttendees" name = "eventAttendees" class = "cEvent_inputTxt" rows = "4" cols = "26"></textarea><br />
                
                <label for="eventTransport" class = "event_label">Method of Transportation:</label><br />
                <input type="text" id = "eventTransport" name = "eventTransport" class = "cEvent_inputTxt" placeholder = "transportation" /><br />
            </div>
            
            <input type="submit" value="send" id="createEvent_submitBtn" />
        </form>
    )
}


function CreateEvent() {
    return (
        <>
            <h2>Create Event</h2>
            <MyForm />
        </>
    )
};

export default CreateEvent;