import React from "react";
import { Img } from "./StyledHeader";
import Carousel from "react-bootstrap/Carousel";
/* Import bottstrap css - can be included here or in src/index.js or App.js INSTEAD OF index.html <link> */
// import 'bootstrap/dist/css/bootstrap.min.css';

//Gathering my collection of Carousel Images
const carouselImages = {};
const importAllImgs = (r) => {
  // console.log(r);
  r.keys().forEach(
    (filename) => (carouselImages[filename.replace("./", "")] = r(filename))
    //(filename) => (carouselImages[filename] = r(filename)) // ./HeaderImg##.jpg: Module {}
  );
};
importAllImgs(require.context("../img/", false, /^\.\/HeaderImg\d\d\.jpg$/));
//importAllImgs(require.context("../img/", false, /\.png$/));

// console.log(`carouselImages`, carouselImages);
// console.log(`imgKeys`, Object.keys(carouselImages));
/** expected obj
 * carouselImages = {
 *  "HeaderImg00.jpg": Module { default:"...imgPath" },
 *  "HeaderImg01.jpg": Module { default:"...imgPath" },
 *  "HeaderImg02.jpg": Module { default:"...imgPath" },
 *  "HeaderImg03.jpg": Module { default:"...imgPath" },
 * }
 */

const ImgCarousel = () => {
  return (
    <Carousel indicators={false} fade interval={5000}>
      {Object.keys(carouselImages).map((imgName, i) => (
        <Carousel.Item key={i}>
          <Img
            src={carouselImages[imgName].default}
            alt="Header Carousel Photo"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImgCarousel;
