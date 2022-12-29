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

    // Colors
    --white: #fff;
    --black: #000;
    --gray: #3e3e3e;
    --blue: #057dcd;
    --yellow: #ffde17;
    --darkFont: #3c3c3c;
    --green: #7fe6a4;
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

export default Variables;
