export const WeatherIcon = ({ iconNumber, summary }) => {
  return (
    <img src={`src/assets/weather_icons/big/${iconNumber}.png`} alt={summary} draggable={false} />
  );
};
