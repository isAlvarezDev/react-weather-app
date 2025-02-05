import { useContext } from "react";
import { WeatherIcon } from "../../WeatherIcon/WeatherIcon";
import { WeatherContext } from "../../../../context";

export const HourlyForecastWidget = ({ data }) => {
  const { date, icon, summary, temperature, precipitation, wind } = data;
  const { units } = useContext(WeatherContext);
  //date format
  const local = navigator.language;
  const nowDate = {
    day: new Intl.DateTimeFormat(local, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date()),
    time: new Intl.DateTimeFormat(local, {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date().setMinutes(0)),
  };

  const weatherDate = {
    day: new Intl.DateTimeFormat(local, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date(date)),
    time: new Intl.DateTimeFormat(local, {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(date).setMinutes(0)),
  };

  const midnightTime = new Intl.DateTimeFormat(local, {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date().setHours(0,0,0,0))

  weatherDate.day =
    weatherDate.day === nowDate.day && weatherDate.time === nowDate.time
      ? "Now"
      : weatherDate.time === midnightTime
      ? weatherDate.day
      : "";

  return (
    <div className="widget">
      <p className="day">{weatherDate.day}</p>
      <div className="time">{weatherDate.time}</div>
      <div className="icon-temp">
        <div className="icon">
          <WeatherIcon iconNumber={icon} summary={summary} />
        </div>
        <p className="temperature">
          {Math.round(temperature)} {units.temperature}
        </p>
      </div>
      <p className="precipitation">
        {Math.round(precipitation.total)} {units.precipitation}
      </p>
      <div className="wind">
        <p className="speed">
          {Math.round(wind.speed)} {units.wind_speed}
        </p>
        <div
          className="direction"
          style={{ transform: `rotate(${-45 + wind.angle}deg)` }}
        >
          <i className="bi bi-send-fill"></i>
        </div>
      </div>
    </div>
  );
};
