import React, { useEffect, useState } from "react";

export default function MoodTrackingCalendar(surveyList) {
  let date = new Date();
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());

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
    "December",
  ];

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  const lastDateDay = new Date(year, month, lastDate).getDay();
  const prevMonthLastDate = new Date(year, month, 0).getDate();

  let prevMonth = [];

  //returns list items for the last few days of the previous month
  for (let i = firstDay; i > 0; i--) {
    prevMonth.push(
      <li className="inactive bg-turqoise py-2">{prevMonthLastDate - i + 1}</li>
    );
  }

  let currentMonth = [];

  //returns list items for days of the current month
  for (let i = 1; i <= lastDate; i++) {
    let today =
      i === date.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? "active bg-pale-yellow"
        : "";
    currentMonth.push(
      <li className={`${today} border border-gray bg-off-white py-2`}>{i}</li>
    );
  }
  let nextMonth = [];

  //returns list items for days of the next month
  for (let i = lastDateDay; i < 6; i++) {
    nextMonth.push(
      <li className="inactive bg-turqoise py-2">{i - lastDateDay + 1}</li>
    );
  }

  //sets the current Month & Date in the header
  const currDate = `${months[month]} ${year}`;

  const prevClick = (e) => {
    e.preventDefault();
    if (month - 1 < 0) {
      let newMonth = 11;
      let newYear = year - 1;
      // Set the date to the first day of the
      // month with the new year
      date = new Date(newYear, newMonth, new Date().getDate());
      // Set the year to the new year
      setYear(date.getFullYear());
      // Set the month to the new month
      setMonth(date.getMonth());
    } else {
      setMonth(month - 1);
      date = new Date();
    }
  };

  const nextClick = (e) => {
    e.preventDefault();
    if (month + 1 > 11) {
      let newMonth = 0;
      let newYear = year + 1;
      // Set the date to the first day of the
      // month with the new year
      date = new Date(newYear, newMonth, new Date().getDate());

      // Set the year to the new year
      setYear(date.getFullYear());

      // Set the month to the new month
      setMonth(date.getMonth());
    } else {
      setMonth(month + 1);
      date = new Date();
    }
  };

  //re-renders the calendar if the month or year have changed
  useEffect(() => {}, [month, year]);

  return (
    <>
      <div className="mood-calendar-container w-4/12 my-20 mx-10 border-4 border-turqoise rounded">
        <header className="calendar-header flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none bg-off-white">
          <h1 className="current-date text-base font-semibold leading-6 text-gray-900">
            {currDate}
          </h1>
          <div className="calendar-navigation flex items-center">
            <span
              id="previous"
              className="navigation-buttons px-1"
              onClick={prevClick}
            >
              Previous
            </span>
            <span
              id="next"
              className="navigation-buttons px-1"
              onClick={nextClick}
            >
              Next
            </span>
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
  );
}
