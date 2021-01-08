import React from "react";
import { AnimatedSocialIcon } from "react-animated-social-icons";

const defaultColor="#b6c3d9";
const duration=1;
const iconWidth = "calc(7px + 3vmin)";   //"2em"/"2vw"/"calc(12px + 2vmin)"
const SocialMediaIcons = ({ padSize }) => {
  return (
    <>
      <AnimatedSocialIcon
        brandName="github"
        url="https://github.com/geeeedev"
        defaultColor={defaultColor} 
        // hoverColor="#15202B"
        // hoverColor="#223344"
        hoverColor="Chocolate"
        animation="grow"
        animationDuration={duration}
        width={iconWidth}
        style={{ paddingRight: `${padSize}`}}
        newPage={true}
      />
      <AnimatedSocialIcon
        brandName="twitter"
        url="https://twitter.com/geeeedev"
        defaultColor={defaultColor}
        hoverColor="#1DA1F2"
        animation="bounce"
        animationDuration={duration}
        width={iconWidth}
        style={{ padding: `${padSize}`}}
        newPage={true}
      />
      {/* <AnimatedSocialIcon
          brandName="linkedin"
          url="https://www.linkedin.com/in/gwennielau/"
          defaultColor={defaultColor}
          hoverColor="#0A66C2"
          animation="float"
          animationDuration={duration}
          width={iconWidth}
          // style={{ padding: "3em", margin: '5%', outline: "1px dashed green" }}
          style={{ padding: `${padSize}` }}
          newPage={true}
        /> */}
    </>
  );
};

export default SocialMediaIcons;
