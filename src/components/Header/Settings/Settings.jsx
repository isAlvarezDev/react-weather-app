import "../../../styles/components/Settings.scss";
import { useState, useContext } from "react";
import { ThemeContext, WeatherContext } from "../../../context/";
import { MEASUREMENT_SYSTEMS } from "../../../constants";

export const Settings = () => {
  const [openSettings, setOpenSettings] = useState(false);
  const { isDark, setIsDark, saveThemeToLocalStorage } =
    useContext(ThemeContext);
  const { measurementSystem, setMeasurementSystem } =
    useContext(WeatherContext);

  const changeMeasurementSystem = (system) => {
    setMeasurementSystem(system)
    setOpenSettings(false)
  };

  const toggleTheme = () => {
    setIsDark((prevIsDark) => !prevIsDark);
    saveThemeToLocalStorage(!isDark);
  };
  return (
    <div className="Settings">
      <div className="theme-toggler">
        <div className="theme-buttons" onClick={toggleTheme}>
          <div className={`light-theme-btn ${isDark && "active"}`}>
            <i className="bi bi-sun"></i>
          </div>
          <div className={`dark-theme-btn ${isDark === false && "active"}`}>
            <i className="bi bi-moon"></i>
          </div>
        </div>
      </div>
      <div
        className="settings-btn"
        onClick={() => setOpenSettings(!openSettings)}
      >
        <i className={`bi bi-gear${openSettings ? "-fill" : ""}`}></i>
      </div>
      <div className={`settings-menu ${openSettings && "open"}`}>
        <div className="measurement-systems">
          <h4>Measurement systems: </h4>
          <div className="systems">
            {Object.values(MEASUREMENT_SYSTEMS).map((system) => {
              return (
                <div
                  className={`system ${
                    system === measurementSystem && "active"
                  }`}
                  key={system}
                  onClick={() => changeMeasurementSystem(system)}
                >
                  {system}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
