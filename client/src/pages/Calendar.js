import { Link } from "react-router-dom";
import { useEventsContext } from "../hooks/useEventsContext"
import { useState, useEffect } from 'react';

function MonthCalendar() {
    return (
        <div className="calendar_inner">
            <div className="calendar_controls">
                <div className="calendar_headings">
                    <i className="left_arrow" id="prev">&larr;</i>
                    <h2 className ="month_year">June 2024</h2>
                    <i className ="right_arrow" id ="next">&rarr;</i>
                </div>
                <div className = "current_datetime">
                    <p className ="daytxt">Today</p>
                    <p className = "datetxt">Mon, 10, June 2024</p>
                </div>
                <div className ="days_date">
                        <ul className ="days">
                            <li>Sun</li>
                            <li>Mon</li>
                            <li>Tue</li>
                            <li>Wed</li>
                            <li>Thu</li>
                            <li>Fri</li>
                            <li>Sat</li>
                        </ul>
                        <ul className ="dates">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                            <li>7</li>
                            <li>8</li>
                            <li>9</li>
                            <li className = "active">10</li>
                            <li>11</li>
                            <li>12</li>
                            <li>13</li>
                            <li>14</li>
                            <li>15</li>
                            <li>16</li>
                            <li>17</li>
                            <li>18</li>
                            <li>19</li>
                            <li>20</li>
                            <li>21</li>
                            <li>22</li>
                            <li>23</li>
                            <li>24</li>
                            <li>25</li>
                            <li>26</li>
                            <li>27</li>
                            <li>28</li>
                            <li>29</li>
                            <li>30</li>
                            <li>31</li>
                        </ul>
                    </div>
            </div>
        </div>
    )
}

function CalendarEvent(props) {
    return (
        <div className="calendarEvent">
            <Link to="/ViewEvent/${props.dateID}">{props.title}</Link>
            {/* <h4 className="calendarEvent_title">{props.title}</h4> */}
            {/* maybe add start and end time ? */}
        </div>
    )
}
function DateTop(props) {
    return(
        <div className="date-top">
            <p>{props.day}</p>
            <p>{props.date}</p>
        </div>
    )
}

function DateContent(props) {
    return (
        <div className="dateContent">
            <CalendarEvent title={props.title} />
        </div>
    )
}

function Day(props) {
    return (
        <>
            <DateTop day = {props.day} date = {props.date} />
            <DateContent title={props.title}/>
        </>
    )
}

function Week(props) {
    const {events, dispatch} = useEventsContext()
    const [dateEvents, setEvents] = useState([]);
    const [sun, setSun] = useState([])
    const [mon, setMon] = useState([])
    const [tue, setTue] = useState([])
    const [wed, setWed] = useState([])
    const [thu, setThu] = useState([])
    const [fri, setFri] = useState([])
    const [sat, setSat] = useState([])

//   const {user} = useAuthContext()

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('/api/events/date?date=2024-06-09')
      const json = await response.json()
      if (response.ok) {
        setSun(JSON.stringify(json))
      }
    //   response = await fetch('/api/events/date?date=2024-06-10')
    //   json = await response.json()
    //   if (response.ok) {
    //     setMon(JSON.stringify(json))
    //   }
      response = await fetch('/api/events/6667ec75693d07202f700561')
      json = await response.json()
      if (response.ok) {
        setMon(json)
      }
      response = await fetch('/api/events/date?date=2024-06-11')
      json = await response.json()
      if (response.ok) {
        setTue(JSON.stringify(json))
      }
      response = await fetch('/api/events/date?date=2024-06-12')
      json = await response.json()
      if (response.ok) {
        setWed(JSON.stringify(json))
      }
      response = await fetch('/api/events/date?date=2024-06-13')
      json = await response.json()
      if (response.ok) {
        setThu(JSON.stringify(json))
      }
      response = await fetch('/api/events/date?date=2024-06-14')
      json = await response.json()
      if (response.ok) {
        setFri(JSON.stringify(json))
      }
      response = await fetch('/api/events/date?date=2024-06-15')
      json = await response.json()
      if (response.ok) {
        setSat(JSON.stringify(json))
      }
    }
    fetchEvents()
  })

  // Fetch events for each day and store them in a dictionary
//   Promise.all(weekDays.map(fetchEventsForDay)).then((results) => {
//     const eventsByDayObject = {};
//     results.forEach((result) => {
//         const [date, events] = Object.entries(result)[0];
//         eventsByDayObject[date] = events;
//     });
//     setEventsByDay(eventsByDayObject);
//     });
    // fetchAll(() => {
    //     const fetchEvents = async (date) => {
    //     const response = await fetch('/api/events/date?date=${date}')
    //     const json = await response.json()
    //     if (response.ok) {
    //         dispatch({type: 'SET_EVENTS', payload: json})
    //         setEvents(json)
    //         return(json)
    //     }
    // }})
  
    return (
        <>
        <div className="curWeek">
        <div className="dayOfWeek">
        {/* {fetchEvents('2024-06-09')} */}
            <Day day = "Sunday" date="9" title={sun.title} dateID={sun._id}/>
        </div>
        <div className="dayOfWeek">
        {/* {fetchEvents('2024-06-19')} */}
            <Day day = "Monday" date="10" title={mon.title} dateID={mon._id}/>
            {console.log(mon.title, mon._id)}
        </div>
        <div className="dayOfWeek">
        {/* {fetchEvents('2024-06-11')} */}
            <Day day = "Tuesday" date="11" title={tue.title} dateID={tue._id}/>
        </div>
        <div className="dayOfWeek">
        {/* {fetchEvents('2024-06-12')} */}
            <Day day = "Wednesday" date="12" title={wed.title} dateID={wed._id}/>
        </div>
        <div className="dayOfWeek">
        {/* {fetchEvents('2024-06-13')} */}
            <Day day = "Thursday" date="13" title={thu.title} dateID={thu._id}/>
        </div>
        <div className="dayOfWeek">
        {/* {fetchEvents('2024-06-14')} */}
            <Day day = "Friday" date="14" title={fri.title} dateID={fri._id}/>
        </div>
        <div className="dayOfWeek">
        {/* {fetchEvents('2024-06-15')} */}
            <Day day = "Saturday" date="15" title={sat.title} dateID={sat._id}/>
        </div>
        </div>
        </>
    )
}

function UpcomingItem(props) {
    return (
        <p>{props.item}</p>
    )
}

function Upcoming(props) {
    return (
        <>
        <div className="upcoming_events">
            <h3 id="upcoming_txt">Upcoming:</h3>
            <UpcomingItem item="Charlie's bday party" />
            <UpcomingItem item="Lunch with Mom" />
            </div>
        </>
    )
}

function Calendar() {
    return (
        <>
        <h2 className="page-title">Calendar</h2>
        <MonthCalendar />
        <Week />
        <button type="button" id="createEvent_btn"><Link to="/CreateEvent">Create Event</Link></button>
        <Upcoming />
        </>
    )
};

export default Calendar;