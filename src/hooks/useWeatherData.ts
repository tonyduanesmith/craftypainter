import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useLocalStorage } from "./useLocalStorage";

type CloudsType = {
  all: number;
};

type MainType = {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
};

export type RainType = {
  "3h": number;
};

type SysType = {
  pod: string;
};

type WeatherType = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

type WindType = {
  speed: number;
  gust: number;
  deg: number;
};

export type ThreeHourlyForecastType = {
  clouds: CloudsType;
  dt: number;
  dt_txt: string;
  main: MainType;
  pop: number;
  rain?: RainType;
  sys: SysType;
  visibility: number;
  weather: Array<WeatherType>;
  wind: WindType;
};

type DataType = {
  list: Array<ThreeHourlyForecastType>;
};

type WeatherDataType = {
  data: DataType;
  fetchedDate: string;
};

type WeatherDataOptionsType = {
  shouldRefetch?: boolean;
};

const getIsDifferentDay = (compareDate: Dayjs, currentDate: Dayjs) =>
  !compareDate.startOf("day").isSame(currentDate.startOf("day"));

const shouldFetchWeather = (fetchedDate?: string) => {
  if (!fetchedDate) return true;

  const lastFetchedDate = dayjs(fetchedDate);
  const currentDate = dayjs();

  return getIsDifferentDay(lastFetchedDate, currentDate);
};

export const useWeatherData = (initialValue: WeatherDataType | null, options?: WeatherDataOptionsType) => {
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useLocalStorage<WeatherDataType | null>({
    initialValue,
    key: "weather",
  });

  useEffect(() => {
    const fetchWeather = async (latitude: number, longitude: number) => {
      const weatherApi = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${import.meta.env.VITE_OPEN_WEATHER_KEY}`;
      const response = await fetch(weatherApi);
      const data = await response.json();

      setWeatherData({ data, fetchedDate: dayjs().format() });
      setIsLoading(false);
    };

    if (shouldFetchWeather(weatherData?.fetchedDate) || options?.shouldRefetch) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
        const { latitude, longitude } = position.coords;
        fetchWeather(latitude, longitude);
      });
    }
  }, []);

  return { weatherData, isLoading };
};
