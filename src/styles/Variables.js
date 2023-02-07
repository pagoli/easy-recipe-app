import { css } from "styled-components";

const Variables = css`
  :root {
    // Font
    --font-main: "Josefin Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;

    // Font size
    --fz-xxs: 10px;
    --fz-xs: 12px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-2xl: 24px;
    --fz-3xl: 28px;
    --fz-4xl: 32px;
    --fz-5xl: 36px;
    --fz-6xl: 50px;
    --fz-7xl: 64px;
    --fz-8xl: 72px;
    --fz-9xl: 92px;

    // Line height

    // Colors
    --white: #fff;
    --black: #000;
    --gray: #3e3e3e;
    --light-gray: rgba(0, 0, 0, 0.2);
    --light-red: rgba(255, 56, 115, 0.8);
    --blue: #057dcd;
    --yellow: #ffde17;
    --light-yellow: rgba(255, 222, 23, 0.4);
    --darkFont: #3c3c3c;
    --green: #7fe6a4;
    --light-green: rgba(110, 231, 183, 0.2);

    --gradient-radial-green-yellow: radial-gradient(
      circle,
      rgba(255, 222, 23, 1) 0%,
      rgba(110, 231, 183, 1) 100%
    );
    --gradient-linear-green-yellow: linear-gradient(
      90deg,
      rgba(110, 231, 183, 1) 0%,
      rgba(255, 222, 23, 1) 100%
    );
    --gradient-images: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));

    // Other
    --max-width: 1500px;
    --transition: all 0.25s ease-in-out;
    --duration-page: 0.4;
    --opacity-full: 1;
  }
`;

export { Variables };
