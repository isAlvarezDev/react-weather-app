import "../../../styles/components/Search.scss";
import { searchPlaces } from "../../../api";
import { useState, useContext } from "react";
import { WeatherContext } from "../../../context";

export const Search = () => {
  const { setPlace } = useContext(WeatherContext);
  const [text, setText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isOpenSearchResults, setIsOpenSearchResults] = useState(false);

  const onChange = async (event) => {
    setText(event.target.value);
    const data = await searchPlaces(event.target.value);
    setSearchResults(data);
    setIsOpenSearchResults(data.length)
  };

  const changePlace = (place) => {
    setPlace(place);
    setText("");
    setIsOpenSearchResults(false)
  };
  return (
    <>
      <div className="search-container">
        <div className="search-icon">
          <i className="bi bi-search"></i>
        </div>
        <div className="search-input">
          <input
            type="text"
            name="search-city"
            placeholder="Search city ..."
            value={text}
            onChange={onChange}
          />
        </div>
        {isOpenSearchResults && (
          <div className="search-results">
            <div className="results-container">
              {searchResults.map((place) => {
                return (
                  <div
                    className="result"
                    key={place.place_id}
                    onClick={() => changePlace(place)}
                  >
                    {place.name}, {place.adm_area1}, {place.country}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
