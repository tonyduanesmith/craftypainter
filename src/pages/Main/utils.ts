import dayjs from "dayjs";
import { ThreeHourlyForecastType } from "../../hooks/useWeatherData";
import { CalendarWeatherData, PaintableConditionsType } from "./types";

export const getDewPoint = (temp: number, humidity: number): number => {
  const saturationVaporPressureCoefficientA = 17.27;
  const saturationVaporPressureCoefficientB = 237.7;

  const gamma =
    (saturationVaporPressureCoefficientA * temp) / (saturationVaporPressureCoefficientB + temp) +
    Math.log(humidity / 100);
  return (saturationVaporPressureCoefficientB * gamma) / (saturationVaporPressureCoefficientA - gamma);
};

export const getIsTempAboveDewPointThreshold = (temp: number, humidity: number, threshold: number): boolean => {
  const dewPoint = getDewPoint(temp, humidity);
  return temp > dewPoint + threshold;
};

export const getIsTempBelowThreshold = (temp: number, tempThreshold: number): boolean => {
  return temp < tempThreshold;
};

export const getIsDirectSunlight = (weather: string): boolean => {
  return weather !== "Clear";
};

export const getIsPaintableConditions = (
  weather: string,
  temp: number,
  humidity: number,
  isRain: boolean,
): PaintableConditionsType => {
  const reasons = [];
  const isTempAboveDewPoint = getIsTempAboveDewPointThreshold(temp, humidity, 2);
  const isTempBelowThreshold = getIsTempBelowThreshold(temp, 20);
  const isNotDirectSunlight = getIsDirectSunlight(weather);

  if (!isTempAboveDewPoint) reasons.push("Too much dew");
  if (!isTempBelowThreshold) reasons.push("Too hot");
  if (!isNotDirectSunlight) reasons.push("Direct sunlight");
  if (isRain) reasons.push("Rainy");

  return {
    isPaintableConditions: isTempAboveDewPoint && isTempBelowThreshold && isNotDirectSunlight && !isRain,
    reasons,
  };
};

export const getChunkedArray = <T>(data: Array<T>, chunkSize: number): Array<Array<T>> => {
  const result = [];
  for (let index = 0; index < data.length; index += chunkSize) {
    result.push(data.slice(index, index + chunkSize));
  }

  return result;
};

export const getNormalisedByDayData = (
  weatherData: Array<CalendarWeatherData>,
  timesPerDay: number,
): Array<CalendarWeatherData> => {
  const today = dayjs();
  const numberOfDatesToday = weatherData.filter(data => data.dateTime.isSame(today, "day")).length;

  const disabledData: Array<CalendarWeatherData> = Array.from({ length: timesPerDay - numberOfDatesToday }).map(
    (_, index) => {
      return {
        dateTime: dayjs().hour(index * 3),
        paintableConditions: {
          isPaintableConditions: false,
          reasons: [],
        },
        isDisabled: true,
      };
    },
  );

  return [...disabledData, ...weatherData];
};

export const getCalendarWeatherData = (
  weatherData?: Array<ThreeHourlyForecastType>,
): Array<Array<CalendarWeatherData>> => {
  const mappedCalendarWeatherData = (weatherData ?? []).map(item => {
    const weather = item.weather[0].main;
    const temp = item.main.temp_min;
    const humidity = item.main.humidity;
    const rain = !!item.rain;
    const dateTime = dayjs(item.dt_txt);

    const paintableConditions = getIsPaintableConditions(weather, temp, humidity, rain);

    return {
      dateTime,
      paintableConditions,
    };
  });

  const normalisedByDayData = getNormalisedByDayData(mappedCalendarWeatherData, 8);

  console.log(normalisedByDayData);

  const chunkedCalenderWeatherData = getChunkedArray<CalendarWeatherData>(normalisedByDayData, 8);

  return chunkedCalenderWeatherData;
};
