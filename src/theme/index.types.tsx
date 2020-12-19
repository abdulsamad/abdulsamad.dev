import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      light: string;
      dark: string;
      font: string;
    };
    fontFamily: {
      primary: string;
      secondary: string;
    };
  }
}