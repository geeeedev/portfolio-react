import React from "react";
import { AnimatedSocialIcon } from "react-animated-social-icons";
// import { SocialMediaIconList } from "./StyledSocialMediaIconList";

const SocialMediaIcons = ({ padSize }) => {
  return (
    <>
      <AnimatedSocialIcon
        brandName="github"
        url="https://github.com/geeeedev"
        defaultColor="#b6c3d9" //orig
        // hoverColor="#15202B"
        hoverColor="#223344"
        hoverColor="darkred"
        animation="grow"
        animationDuration={1}
        width="2vw"
        style={{ paddingRight: `${padSize}`}}
        newPage={true}
      />
      <AnimatedSocialIcon
        brandName="twitter"
        url="https://twitter.com/geeeedev"
        defaultColor="#b6c3d9"
        hoverColor="#1DA1F2"
        animation="bounce"
        animationDuration={1}
        width= "2vw"
        // style={{ padding: "3em", margin: '5%', outline: "1px dashed green" }}
        style={{ padding: `${padSize}`}}
        newPage={true}
      />
      {/* <AnimatedSocialIcon
          brandName="linkedin"
          url="https://www.linkedin.com/in/gwennielau/"
          defaultColor="#b6c3d9"
          hoverColor="#0A66C2"
          animation="float"
          animationDuration={1}
          width="2em"
          // style={{ padding: "3em" }}
          style={{ padding: `${padSize}` }}
          newPage={true}
        /> */}
    </>
  );
};

export default SocialMediaIcons;
