import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import { FooterSMIconList, CopyRight } from "./StyledFooter";

const year = new Date().getFullYear(); //(reusable outside of comp)

const Footer = () => {
  // const year = new Date().getFullYear();
  return (
    <>
      <FooterSMIconList id="contact">
        <SocialMediaIcons padSize="3em" />
      </FooterSMIconList>
      <CopyRight>&copy; {year} Gwennie Lau</CopyRight>
    </>
  );
};

export default Footer;
