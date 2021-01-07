import React from "react";
import { Img } from "./StyledProject";

/**
 * This module helps retrieve project 
 * images and bypass the need to 
 * upload project screenshot images 
 * to AWS S3 Storage to be called.
 */

const projectImages = {};
const importAllImgs = (r) => {
  // console.log(r);
  r.keys().forEach(
    (filename, idx) => (projectImages[idx] = r(filename))
    // (filename) => (projectImages[filename.replace("./", "")] = r(filename))
  );
};
importAllImgs(require.context("../img/", false, /^\.\/ProjectImg\d\.png$/));
//importAllImgs(require.context("../img/", false, /\.png$/));

// console.log(`projectImages`, projectImages);
// console.log(`imgKeys`, Object.keys(projectImages));
/** expected obj
 * projectImages = {
 *  "0"/"projectImg0.png": Module { default:"...imgPath" },
 *  "1"/"projectImg1.png": Module { default:"...imgPath" },
 *  "2"/"projectImg2.png": Module { default:"...imgPath" },
 *  "3"/"projectImg3.png": Module { default:"...imgPath" },
 * }
 */

const ImgProject = ({ idx }) => {
  // console.log(`idx`, idx);
  return (
    <Img src={projectImages[idx].default} alt="Project Screenshot" key={idx} />
  );
};

export default ImgProject;
