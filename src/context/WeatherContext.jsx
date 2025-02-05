import { useState, createContext, useEffect } from "react";
import { DEFAULT_PLACE, MEASUREMENT_SYSTEMS, UNITS } from "../constants";
import { getWeatherData } from "../api";
export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [place, setPlace] = useState(DEFAULT_PLACE);
  const [loading, setLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState({});
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [measurementSystem, setMeasurementSystem] = useState(
    MEASUREMENT_SYSTEMS.AUTO
  );
  const [units, setUnits] = useState({});

  useEffect(() => {
    const _getWeatherData = async () => {
      setLoading(true);
      const cw = await getWeatherData(
        "current",
        place.place_id,
        measurementSystem
      );
      setCurrentWeather(cw.current);
      setUnits(UNITS[cw.units]);
      const hf = await getWeatherData(
        "hourly",
        place.place_id,
        measurementSystem
      );
      setHourlyForecast(hf.hourly.data);
      const df = await getWeatherData(
        "daily",
        place.place_id,
        measurementSystem
      );
      setDailyForecast(df.daily.data);
      setLoading(false);
    };
    _getWeatherData();
  }, [place, measurementSystem]);
  return (
    <WeatherContext.Provider
      value={{
        place,
        loading,
        currentWeather,
        hourlyForecast,
        dailyForecast,
        measurementSystem,
        setMeasurementSystem,
        units,
        setPlace,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
