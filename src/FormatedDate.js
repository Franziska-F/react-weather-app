import React from "react";

export default function FormatedDate(props) {
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thuesday",
    "Friday",
    "Saturday",
  ];
  let day = weekdays[props.date.getDay()];
  let hour = props.date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let min = props.date.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }
  return (
    <div>
      {day} {hour}:{min}
    </div>
  );
}
