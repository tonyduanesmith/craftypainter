import { Dayjs } from "dayjs";

export type PaintableConditionsType = {
  isPaintableConditions: boolean;
  reasons: Array<string>;
};

export type CalendarWeatherData = {
  dateTime: Dayjs;
  paintableConditions: PaintableConditionsType;
  isDisabled?: boolean;
};
