import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
`;

export const StyledCalendarColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const StyledCalendarRow = styled.div<{ isPaintableConditions: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ isPaintableConditions, theme }) =>
    isPaintableConditions ? theme.colours.intent.success.lighter : theme.colours.intent.error.lighter};
  height: ${({ theme }) => theme.sizing.tableRowLarge};
  padding: ${({ theme }) => theme.spacing.md};
  border: ${({ theme }) => theme.border.thin};
  border-color: ${({ theme }) => theme.colours.neutrals[5]};
  border-radius: ${({ theme }) => theme.radius.sm};
`;
