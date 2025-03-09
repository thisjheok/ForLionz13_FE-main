import "@emotion/react";
import type { theme } from "./theme";

type MyTheme = typeof theme;

declare module "@emotion/react" {
  export interface Theme extends MyTheme {}
}
