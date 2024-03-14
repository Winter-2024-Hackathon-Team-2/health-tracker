import React from "react";

export default function MoodTrackingCalendar(surveyList){

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];


        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();
        const lastDateDay = new Date(year, month, lastDate).getDay();
        const prevMonthLastDate = new Date(year, month, 0).getDate();

        let prevMonth = [];

            for (let i = firstDay; i > 0; i--){
            prevMonth.push(
            <li className="inactive bg-turqoise">{prevMonthLastDate - i + 1}</li>)
            
        }

        let currentMonth = [];
        for (let i = 1; i <= lastDate; i++){
            let today = i === date.getDate() && month === new Date().getMonth() && year === new Date().getFullYear() ? "active bg-pale-yellow" : "";
            currentMonth.push(<li className={`${today} border border-gray bg-off-white`}>{i}</li>)
    }
    let nextMonth = [];
         for (let i = lastDateDay; i < 6; i++){
           nextMonth.push(<li className="inactive bg-turqoise">{i - lastDateDay + 1}</li>)
        }
       const currDate = `${months[month]} ${year}`


    return (
        <>
        <div className="mood-calendar-container w-6/12">
        <header className="calendar-header flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none bg-off-white">
            <h1 className="current-date text-base font-semibold leading-6 text-gray-900">{currDate}</h1>
            <div className="calendar-navigation flex items-center">
                <span id="previous" className="navigation-buttons">Previous</span>
                <span id="next" className="navigation-buttons">Next</span>
            </div>
        </header>
        <div className="calendar-body">
            <ul className="weekdays grid grid-cols-7 bg-dark-purple">
                <li>Mon</li>
                <li>Tues</li>
                <li>Weds</li>
                <li>Thurs</li>
                <li>Fri</li>
                <li>Sat</li>
                <li>Sun</li>
            </ul>
            <ul className="calendar-dates grid grid-cols-7">
            {prevMonth}
            {currentMonth}
            {nextMonth}
            </ul>
        </div>
        </div>
        </>
    )
}