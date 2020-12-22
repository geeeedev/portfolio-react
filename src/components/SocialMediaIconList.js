import React from "react";
import { AnimatedSocialIcon } from "react-animated-social-icons";
import { SocialMediaIcons, CopyRight } from "./StyledSocialMediaIcon";

const SocialMediaIconList = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <SocialMediaIcons>
        <AnimatedSocialIcon
          brandName="github"
          url="https://github.com/geeeedev"
          defaultColor="#b6c3d9" //orig
          // hoverColor="#15202B"
          hoverColor="#223344"
          animation="grow"
          animationDuration={1}
          width="2em"
          style={{ padding: "3em" }}
          newPage={true}
        />
        <AnimatedSocialIcon
          brandName="twitter"
          url="https://twitter.com/geeeedev"
          defaultColor="#b6c3d9"
          hoverColor="#1DA1F2"
          animation="bounce"
          animationDuration={1}
          width="2em"
          // style={{ padding: "2em", margin: '5%', outline: "1px dashed green" }}
          style={{ padding: "3em" }}
          newPage={true}
        />
        <AnimatedSocialIcon
          brandName="linkedin"
          url="https://www.linkedin.com/in/gwennielau/"
          defaultColor="#b6c3d9"
          hoverColor="#0A66C2"
          animation="float"
          animationDuration={1}
          width="2em"
          style={{ padding: "3em" }}
          newPage={true}
        />
      </SocialMediaIcons>
      <CopyRight>&copy; {year} Gwennie Lau</CopyRight>
    </>
  );
};

export default SocialMediaIconList;
