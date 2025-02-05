import "../../../styles/components/Forecast.scss";
import { DailyForecastWidget, HorizontallyScrollable, HourlyForecastWidget } from "./";

export const Forecast = ({ title, type, data }) => {
  return (
    <section className="Forecast">
      <div className="forecast-container">
        <h3>{title}</h3>
        <HorizontallyScrollable className="widget-container">
          {data.map((singleData, index) => (
              <div key={index}>
                {type === "hourly" ? (
                  <HourlyForecastWidget data={singleData} />
                ) : (
                  <DailyForecastWidget data={singleData} />
                )}
              </div>
          ))}
        </HorizontallyScrollable>
      </div>
    </section>
  );
};
