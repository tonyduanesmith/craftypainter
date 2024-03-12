import { useWeatherData } from "../../hooks";
import { getIsPaintableConditions } from "./utils";

export const Main = () => {
  const { weatherData, isLoading } = useWeatherData(null);

  if (weatherData) {
    weatherData.data.list.forEach(item => {
      const weather = item.weather[0].main;
      const temp = item.main.temp_min;
      const humidity = item.main.humidity;
      const rain = !!item.rain;

      const isPaintableConditions = getIsPaintableConditions(weather, temp, humidity, rain);
      console.log(isPaintableConditions);
    });
  }

  console.log({ weatherData, isLoading });

  return <div>Main</div>;
};
