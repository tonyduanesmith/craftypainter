import styled, { css } from "styled-components";
import { ColoursPathType } from "@xeno/theme/theme";
import { getColorFromTheme } from "@xeno/theme/utils";
import { CSSProperties } from "react";

import { TypographyVariants } from "./types";

type StyledTypographyProps = {
  variant: TypographyVariants;
  bold: boolean;
  colour?: ColoursPathType;
  gutterBottom: boolean;
  textAlign: CSSProperties["textAlign"];
};

const boldStyle = css`
  font-weight: bold;
`;

const gutterBottomStyle = css`
  margin-bottom: 0.35em;
`;

export const StyledTypography = styled.p<StyledTypographyProps>`
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${({ theme, variant }) => theme.font.size[variant]};
  color: ${({ colour, theme }) =>
    colour && getColorFromTheme(colour, theme.colours)};
  margin: 0;
  text-align: ${({ textAlign }) => textAlign};

  ${({ bold }) => bold && boldStyle}
  ${({ gutterBottom }) => gutterBottom && gutterBottomStyle}
`;
