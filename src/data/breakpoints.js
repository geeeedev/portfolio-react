const size = {
  Xs: "375px",
  Sm: "600px",
  Md: "760px",
  Lg: "1000px",
  Xl: "1400px",
};

export const screen = {
  Xs: `(max-width: ${size.Xs})`,
  Sm: `(max-width: ${size.Sm})`,
  Md: `(max-width: ${size.Md})`,
  Lg: `(max-width: ${size.Lg})`,
  Xl: `(max-width: ${size.Xl})`,
};

//missing default export using `import screen from '../data/breakpoints';`
// export default screen;  
