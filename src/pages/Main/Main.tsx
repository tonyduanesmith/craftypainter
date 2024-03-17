import Typography from "@xeno/Typography";
import { useWeatherData } from "../../hooks";
import { StyledCalendarColumn, StyledCalendarRow, StyledContainer } from "./styled";
import { getCalendarWeatherData } from "./utils";

export const Main = () => {
  const { weatherData, isLoading } = useWeatherData(null, { shouldRefetch: true });
  const calendarWeatherData = getCalendarWeatherData(weatherData?.data.list);

  if (isLoading) return <Typography>Loading...</Typography>;

  return (
    <StyledContainer>
      {calendarWeatherData.map((column, columnIndex) => {
        const dateTime = column[0].dateTime;
        return (
          <StyledCalendarColumn key={columnIndex}>
            <Typography variant="h4">{dateTime.format("D")}</Typography>
            <Typography variant="body1">{dateTime.format("dddd")}</Typography>
            <>
              {column.map(({ paintableConditions, dateTime, isDisabled }, rowIndex) => {
                return (
                  <StyledCalendarRow
                    key={`${rowIndex}_${columnIndex}`}
                    $isPaintableConditions={paintableConditions.isPaintableConditions}
                    $isDisabled={isDisabled}
                  >
                    <Typography variant="caption">{dateTime.format("h A")}</Typography>
                    {paintableConditions.reasons.map((reason: string) => (
                      <Typography key={`${rowIndex}_${columnIndex}_${reason}`}>{reason}</Typography>
                    ))}
                  </StyledCalendarRow>
                );
              })}
            </>
          </StyledCalendarColumn>
        );
      })}
    </StyledContainer>
  );
};
