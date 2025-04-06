import { useContext } from "react";
import { WeatherIcon } from "../../WeatherIcon/WeatherIcon";
import { WeatherContext } from "../../../../context";

export const DailyForecastWidget = ({ data }) => {
  const {units} = useContext(WeatherContext)
  const {
    day,
    icon,
    summary,
    temperature_max,
    temperature_min,
    precipitation,
  } = data;

  const nowDate = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date())
  };

  const weatherDate = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date(day))
  };

  weatherDate.day = weatherDate.day === nowDate.day ? 'Today' : weatherDate.day

  return (
    <div className="widget">
      <p className="day">{weatherDate.day}</p>
      <div className="icon-temp">
        <div className="icon">
          <WeatherIcon iconNumber={icon} summary={summary} />
        </div>
        <div className="temperature">
          <p className="max">{Math.round(temperature_max)} {units.temperature}</p>
          <p className="min">{Math.round(temperature_min)} {units.temperature}</p>
        </div>
      </div>
      <p className="precipitation">
        {Math.round(precipitation.total)} {units.precipitation}
      </p>
    </div>
  );
};
