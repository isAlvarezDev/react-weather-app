import "../../styles/components/Main.scss";
import { CurrentWeather, Forecast, Loader } from "./";
import { useContext } from "react";
import { WeatherContext } from "../../context";
export const Main = () => {

    const { loading, currentWeather, hourlyForecast, dailyForecast } = useContext(WeatherContext)
  return (
    <main className="Main">
      {loading ? (
        <Loader />
      ) : (
        <>
          <CurrentWeather data={currentWeather}/>
          <Forecast
            type="hourly"
            title="HOURLY FORECAST"
            data={hourlyForecast}
          />
          <Forecast
            type="daily"
            title="21 DAYS FORECAST"
            data={dailyForecast}
          />
        </>
      )}
    </main>
  );
};
