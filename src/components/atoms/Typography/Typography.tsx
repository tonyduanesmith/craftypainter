import { CSSProperties, ReactNode } from "react";
import { ColoursPathType } from "@xeno/theme/theme";

import { TypographyVariants } from "./types";
import { StyledTypography } from "./styled";

type TypographyProps = {
  children: ReactNode;
  variant?: TypographyVariants;
  bold?: boolean;
  className?: string;
  colour?: ColoursPathType;
  gutterBottom?: boolean;
  textAlign?: CSSProperties["textAlign"];
};

const Typography = ({
  children,
  className,
  colour,
  variant = "body1",
  bold = false,
  gutterBottom = false,
  textAlign = "left",
}: TypographyProps) => {
  return (
    <StyledTypography
      variant={variant}
      bold={bold}
      className={className}
      colour={colour}
      $gutterBottom={gutterBottom}
      $textAlign={textAlign}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
