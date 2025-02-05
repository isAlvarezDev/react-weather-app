export const WeatherIcon = ({ iconNumber, summary }) => {
  return (
    <img src={`./assets/weather-icons/big/${iconNumber}.png`} alt={summary} draggable={false} />
  );
};
