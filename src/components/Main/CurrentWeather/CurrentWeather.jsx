import { useContext } from "react";
import "../../../styles/components/CurrentWeather.scss";
import { WeatherIcon } from "../WeatherIcon/WeatherIcon";
import { WeatherContext } from "../../../context";

export const CurrentWeather = ({ data }) => {
  const {
    cloud_cover,
    feels_like,
    humidity,
    icon_num,
    precipitation,
    summary,
    temperature,
    uv_index,
    visibility,
    wind,
  } = data;

  const {units} = useContext(WeatherContext)

  const otherInfoWidgets = [
    {
        id: 0,
        icon: 'droplet',
        name: 'Precipitation',
        value: Math.round(precipitation.total),
        unit: units.precipitation
    },
    {
        id: 1,
        icon: 'wind',
        name: 'Wind',
        value: Math.round(wind.speed),
        unit: units.wind_speed
    },
    {
        id: 2,
        icon: 'moisture',
        name: 'Humidity',
        value: Math.round(humidity),
        unit: units.humidity
    },
    {
        id: 3,
        icon: 'sunglasses',
        name: 'UV index',
        value: Math.round(uv_index),
        unit: units.uv_index
    },
    {
        id: 4,
        icon: 'clouds-fill',
        name: 'Clouds cover',
        value: Math.round(cloud_cover),
        unit: units.cloud_cover
    },
    {
        id: 5,
        icon: 'eye',
        name: 'Visibility',
        value: Math.round(visibility),
        unit: units.visibility
    },
  ]
  return (
    <section className="CurrentWeather">
      <article className="temperature">
        <div className="weather-icon">
          <WeatherIcon iconNumber={icon_num} summary={summary}/>
        </div>
        <div className="value">
            <p className="real">{Math.round(temperature)} {units.temperature}</p>
            <p className="feels_like">{feels_like} {units.temperature}</p>
        </div>
        <p className="summary">{summary}</p>
      </article>
      <article className="other-infos">
        {otherInfoWidgets.map(({id, icon, name, value, unit}) => {
            return <div className="widget" key={id}>
                <div className="widget-container">
                    <div className="info">
                        <div className="icon">
                            <i className={`bi bi-${icon}`}></i>
                        </div>
                        <div className="value">{value} {unit}</div>
                    </div>
                </div>
                <p className="name">{name}</p>
            </div>
        })}
      </article>
    </section>
  );
};
