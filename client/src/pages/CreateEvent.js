import { useState, useEffect } from 'react';
import axios from "axios"
  

function MyForm() {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState(null)
    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState(null)
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [toDoOne, setToDoOne] = useState('')
    const [toDoTwo, setToDoTwo] = useState('')
    const [toDoThree, setToDoThree] = useState('')
    const [who, setWho] = useState('')
    const [transportation, setTransportation] = useState('')
    const [isClosed, setIsClosed] = useState(false)
    const [rating, setRating] = useState('')
    const [image, setImage] = useState('')
    const [reflection, setReflection] = useState('')
    const [expenses, setExpenses] = useState('')
    const [split, setSplit] = useState('')
    const [error, setError] = useState(null)

    
    // const [input, setInput] = useState({
    //     title: '',
    //     date:'',
    //     startTime:'',
    //     endTime:'',
    //     description:'',
    //     location:'',
    //     toDoOne:'',
    //     toDoTwo:'',
    //     toDoThree:'',
    //     who:'',
    //     transportation:''
    // })

    // function handleChange(event) {
    //     const {name, value} = event.target
        
    //     setInput( prevInput => {
    //         return {
    //             ...prevInput,  ///// ???????????
    //             [name]: value
    //         }
    //     })
    // }

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(
            title, date, startTime, endTime, description, location, who, toDoOne, toDoTwo, toDoThree, transportation, 
            isClosed, rating, image, reflection, expenses, split
        )
        const newEvent = {
            title, date, startTime, endTime, description, location, who, toDoOne, toDoTwo, toDoThree, transportation, 
            isClosed, rating, image, reflection, expenses, split
        }
        const response = await fetch('http://localhost:5000/api/events', {
            method: 'POST',
            body: JSON.stringify(newEvent),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        if(!response.ok) {
            setError(json.error)
        }
        if(response.ook) {
            setTitle('')
            setDate(null)
            setStartTime(null)
            setEndTime(null)
            setDescription('')
            setLocation('')
            setToDoOne('')
            setToDoTwo('')
            setToDoThree('')
            setWho('')
            setTransportation('')
            setError(null)
            console.log('New event added', json)
        }
        // event.preventDefualt()
        // console.log(input)
        // const newEvent = {
        //     title: input.title,
        //     date: input.date,
        //     startTime: input.startTime,
        //     endTime: input.endTime,
        //     description: input.description,
        //     location: input.location,
        //     toDoOne: input.toDoOne,
        //     toDoTwo: input.toDoTwo,
        //     toDoThree: input.toDoThree,
        //     who: input.who,
        //     transportation: input.transportation
        // }
        // axios.post("http://localhost:5000/create", newEvent)
    }
  
    return (
        // <form onSubmit={handleClick} action="/event_form" method="POST" className ='create-event-form'>
        <form>    
            <div className ='create-event'>
                <div className ="create-view-left">
                <label className  = "event_label">Event Name</label><br />
                <input 
                    onChange = {(e) => setTitle(e.target.value)}
                    value={title} 
                    autoComplete="off" 
                    type="text" 
                    id="eventName" 
                    name="title" 
                    placeholder ="Event Name" 
                    minLength = "1" 
                    maxLength = "20" 
                    className  = "cEvent_inputTxt" 
                required /><br />

                <label className = "event_label">Date:</label><br />
                <input 
                    onChange = {(e) => setDate(e.target.value)}
                    value={date} 
                    autoComplete="off" 
                    type="date" 
                    id="eventDate" 
                    className  = "cEvent_input" 
                    name="date" 
                required /><br />

                <label className = "event_label">Time:</label><br />
                <input 
                    onChange = {(e) => setStartTime(e.target.value)} 
                    value={startTime} 
                    autoComplete="off" 
                    type = "time" 
                    id="startTime" 
                    className  = "create-time"  
                    name="startTime" 
                />
                <label className ='event_label'>to </label>
                <input 
                    onChange = {(e) => setEndTime(e.target.value)}
                    value={endTime} 
                    autoComplete="off" 
                    type = "time" 
                    id="endTime" 
                    className  = "create-time"  
                    name="endTime" 
                /><br />

                <label className  = "event_label">Description/Notes:</label><br />
                <textarea 
                    onChange = {(e) => setDescription(e.target.value)}
                    value={description} 
                    autoComplete="off" 
                    id = "eventDescription" 
                    className  = "cEvent_inputTxt"  
                    rows = "14" 
                    cols = "26" 
                    name ="description" 
                ></textarea><br />
            
                <label className  = "event_label">Where:</label><br />
                <input 
                    onChange = {(e) => setLocation(e.target.value)}
                    value={location} 
                    autoComplete="off" 
                    type="text" 
                    id = "eventLoc" 
                    className  = "cEvent_inputTxt"  
                    name = "location" 
                    placeholder = "123 Apple Street" 
                /><br />
                </div>
                
                
                <div class="create-view-right">
                    <label className = "event_label">To Do Beforehand:</label><br />
                    <span>
                        <fieldset className ="create-todo">
                            <input 
                                onChange = {(e) => setToDoOne(e.target.value)}
                                value={toDoOne} 
                                autoComplete="off" 
                                type = "text" 
                                id = "tdOne" 
                                name = "toDoOne" 
                                className  = "create-todo" 
                                maxLength = "120" 
                                placeholder = "to do" 
                            /><br />
                            <input 
                                onChange = {(e) => setToDoTwo(e.target.value)}
                                value={toDoTwo} 
                                autoComplete="off" 
                                type = "text" 
                                id = "tdTwo" 
                                name = "toDoTwo" 
                                className  = "create-todo" 
                                maxLength = "120" 
                                placeholder = "to do" 
                            /><br />
                            <input 
                                onChange = {(e) => setToDoThree(e.target.value)}
                                value={toDoThree} 
                                autoComplete="off" 
                                type = "text" 
                                id = "tdThree" 
                                name = "toDoThree" 
                                className  = "create-todo"  
                                maxLength = "120" 
                                placeholder = "to do" 
                            /><br />
                        </fieldset>
                    </span>

                    <label className = "event_label">Attendees:</label><br />
                    <textarea 
                        onChange = {(e) => setWho(e.target.value)}
                        value={who} 
                        autoComplete="off" 
                        id = "eventAttendees" 
                        name = "who" 
                        className = "cEvent_inputTxt" 
                        rows = "9" 
                        cols = "26"
                    ></textarea><br />
                    
                    <label className = "event_label">Method of Transportation:</label><br />
                    <input 
                        onChange = {(e) => setTransportation(e.target.value)}
                        value={transportation} 
                        autoComplete="off" 
                        type="text" 
                        id = "eventTransport" 
                        name = "transportation" 
                        className = "cEvent_inputTxt" 
                        placeholder = "transportation" 
                    /><br />
                </div>
            </div>
            {/* <input type="submit" value="Send" id="createEvent_submitBtn" /> */}
            <input type="submit" id="createEvent_submitBtn" onClick={handleSubmit}/>
            {error && <div className='error'>{error}</div>}
            {/* <button type="button" onClick={handleClick} id="createEvent_submitBtn" className = "btn btn-lg btn-info">Create</button> */}
            {/* having the page refresh might be for the best, if so -> remove the type=button from button ^ */}
        </form>
    )
}


function CreateEvent() {
    return (
        <>
            <h2 className ="page-title">Create Event</h2>
            <MyForm />
        </>
    )
};

export default CreateEvent;