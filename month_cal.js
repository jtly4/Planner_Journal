
const dateTxtEl = document.querySelector('.datetxt');
const datesEl = document.querySelector('.dates');
const btnEl = document.querySelectorAll('.calendar_headings');
const monthYearEl = document.querySelector('.month_year')
let dmObj = {
    days: [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    
    months: [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]
};

// date object
let dateObj = new Date();

let dayName = dmObject.days[dateObj.getDay()]; // day
let month = dateObj.getMonth(); // month
let year = dateObj.getFullYear(); // year
let date = dateObj.getDate(); // date

// today's date
dateTxtEl.innerHTML = '${dayName}, ${dmObj.months[month]}, ${date}, ${year}'

const displayCalendar = ()=>{
    // let firstDayOfMonth = new Date(year, month, 1).getDay(); // first day of month
    let lastDateofMonth = new Date(year, month + 1,0).getDate(); // last day of month
    let days ="";
    
    for(let i=1; i<lastDateofMonth;i++){
        days ='<li>${i}</li>';
    }
    // display all days inside html file
    datesEl.innerHTML = days;

    // display current month and year
    monthYearEl.innerHTML = '${dmObj.months[month]}, ${year}';
};

displayCalendar();

// previous and next month
btnEl.forEach((btns) => {
    btns.addEventListener("click", () => {
        month = btns.id === "prev" ? month - 1: month + 1;

        if(month < 0 || month > 11){
            date = new Date(year, month, new Date().getDate());
            year = date.getFullYear();
            month = date.getMonth();
        } else {
            date = new Date();
        }
        displayCalendar();
    });
});
