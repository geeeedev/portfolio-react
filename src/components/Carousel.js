import React from "react";
import { Img } from "./StyledHeader";
import Carousel from "react-bootstrap/Carousel";
/* Import bottstrap css - can be included here or in src/index.js or App.js INSTEAD OF index.html <link> */
// import 'bootstrap/dist/css/bootstrap.min.css';

const headerImages = {};
const importAllImgs = (r) => {
  // console.log(r);
  r.keys().forEach(
    (filename) => (headerImages[filename.replace("./", "")] = r(filename))
    //(filename) => (headerImages[filename] = r(filename)) // ./HeaderImg##.png: Module {}
  );
};
importAllImgs(require.context("../img/", false, /^\.\/HeaderImg\d\d\.png$/));
//importAllImgs(require.context("../img/", false, /\.png$/));

// console.log(`headerImages`, headerImages);
// console.log(`imgKeys`, Object.keys(headerImages));
/** expected obj
 * headerImages = {
 *  "HeaderImg00.png": Module { default:"...imgPath" },
 *  "HeaderImg01.png": Module { default:"...imgPath" },
 *  "HeaderImg02.png": Module { default:"...imgPath" },
 *  "HeaderImg03.png": Module { default:"...imgPath" },
 * }
 */

const ImgCarousel = () => {
  return (
    <Carousel indicators={false} fade interval={5000}>
      {Object.keys(headerImages).map((img) => (
        <Carousel.Item>
          <Img src={headerImages[img].default} alt="Header Carousel" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImgCarousel;
