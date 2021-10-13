// See https://styled-components.com/docs/api#typescript
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    maxWidth: string;
    navHeight: string;
    normalContinuousTextSize: string;
    normalContinuousTextLineHeight: string;

    shadows: {
      primary: string;
      primaryHover: string;
    };

    colors: {
      primaryBg: string;
      secondaryBg: string;
      primaryFg: string;
      secondaryFg: string;
    };

    fonts: {
      primary: string;
      monospace: string;
    };
  }
}
