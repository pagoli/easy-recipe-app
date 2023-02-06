const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const device = {
  mobileS: `screen and (max-width: ${sizes.mobileS})`,
  mobileM: `screen and (max-width: ${sizes.mobileM})`,
  mobileL: `screen and (max-width: ${sizes.mobileL})`,
  tablet: `screen and (max-width: ${sizes.tablet})`,
  laptop: `screen and (max-width: ${sizes.laptop})`,
  laptopL: `screen and (max-width: ${sizes.laptopL})`,
  desktop: `screen and (max-width: ${sizes.desktop})`,
};

export { device };
