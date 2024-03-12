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

export const getIsPaintableConditions = (weather: string, temp: number, humidity: number, isRain: boolean): boolean => {
  const isTempAboveDewPoint = getIsTempAboveDewPointThreshold(temp, humidity, 2);
  const isTempBelowThreshold = getIsTempBelowThreshold(temp, 20);
  const isNotDirectSunlight = getIsDirectSunlight(weather);

  return isTempAboveDewPoint && isTempBelowThreshold && isNotDirectSunlight && !isRain;
};
