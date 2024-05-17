import { Link } from "react-router-dom";

function MonthCalendar() {
    return (
        <div className="calendar_inner">
            <div className="calendar_controls">
                <div className="calenda_headings">
                    <i className="left_arrow" id="prev">&larr;</i>
                    <h2 className ="month_year">May 2024</h2>
                    <i className ="right_arrow" id ="next">&rarr;</i>
                </div>
                <div className = "current_datetime">
                    <p className ="daytxt">Today</p>
                    <p className = "datetxt">Fri, 3, May 2024</p>
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
                            <li>10</li>
                            <li>11</li>
                            <li>12</li>
                            <li>13</li>
                            <li>14</li>
                            <li>15</li>
                            <li>16</li>
                            <li class = "active">17</li>
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
            <Link to="/ViewEvent">{props.title}</Link>
            {/* <h4 className="calendarEvent_title">{props.title}</h4> */}
            {/* maybe add start and end time ? */}
        </div>
    )
}
function DateTop(props) {
    return(
        <>
            <p>{props.day}</p>
            <p>{props.date}</p>
        </>
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
    return (
        <>
        <div className="Sunday">
            <Day day = "Sunday" date="19" title="Book Club" />
        </div>
        <div className="Monday">
        <Day day = "Monday" date="20" />
        </div>
        <div className="Tuesday">
            <Day day = "Tuesday" date="21" />
        </div>
        <div className="Wednesday">
            <Day day = "Wednesday" date="22" />
        </div>
        <div className="Thursday">
            <Day day = "Thursday" date="23" title="Dentist Appt" />
        </div>
        <div className="Friday">
            <Day day = "Friday" date="24" />
        </div>
        <div className="Saturday">
            <Day day = "Saturday" date="25" />
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
            <h3 id="upcoming_txt">Upcoming:</h3>
            <UpcomingItem item="Charlie's bday party" />
            <UpcomingItem item="Lunch with Mom" />
        </>
    )
}

function Calendar() {
    return (
        <>
        <h2>Calendar</h2>
        <MonthCalendar />
        <Week />
        <button type="button" id="createEvent_btn"><Link to="/CreateEvent">Create Event</Link></button>
        <Upcoming />
        </>
    )
};

export default Calendar;