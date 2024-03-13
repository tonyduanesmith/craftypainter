import { ColoursPathType, ColoursType } from "./theme";

export const getColorFromTheme = (
  path: ColoursPathType,
  theme: ColoursType,
) => {
  const levels = path.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let currentPart: any = theme;

  for (const level of levels) {
    if (currentPart[level] !== undefined) {
      currentPart = currentPart[level];
    } else {
      console.warn("No colour match");
      return null;
    }
  }

  return currentPart;
};
