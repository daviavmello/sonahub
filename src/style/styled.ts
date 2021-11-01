import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    tertiary: string;
    divider: string;
    medium: string;
    card: string;
    success: string;
    danger: string;
  }
}
