const size = {
  Sm: "600px",
  Md: "800px",
  Lg: "1000px",
  Xl: "1400px",
};

export const screen = {
  Sm: `(max-width: ${size.Sm})`,
  Md: `(max-width: ${size.Md})`,
  Lg: `(max-width: ${size.Lg})`,
  Xl: `(max-width: ${size.Xl})`,
};

//missing default export using `import screen from '../data/breakpoints';`
// export default screen;  
