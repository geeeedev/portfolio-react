import styled from "styled-components";
import { screen } from "../data/breakpoints";

export const DescProj = styled.div`
  padding: 5%;
  width: 100%;
  height: 100%;
  text-align: ${({ idx }) => (idx % 2 === 0 ? "right" : "left")};
  @media ${screen.Lg} {
    text-align: center;
  }

  // outline: 1px dotted pink;
`;

export const DescSkill = styled(DescProj)`
  padding: 8% 8% 2%;
  text-align: center;

  // outline: 1px dotted PaleVioletRed;
`;

export const Hr = styled.hr`
  border-top: 3px ridge ${({ theme }) => theme.hrColor};
  opacity: 0.5;
`;

export const Tech = styled.div`
  display: flex;
  justify-content: ${({ idx }) => (idx % 2 === 0 ? "flex-end" : "flex-start")};
  @media ${screen.Lg} {
    justify-content: center;
  }

  // outline: 1px dotted yellow;
`;

export const TechSkill = styled(Tech)`
  @media ${screen.Lg} {
    flex-direction: column;  // row was default
  }

  // outline: 1px dotted yellow;
`;

export const Github = styled(Tech)`
  padding: 5%;
  justify-content: center;

  // outline: 1px dotted lime;
`;

export const TechHeader = styled.h4`
  font-weight: bold;

  // font-style: italic;
`;

export const TechHeaderSub = styled.h5`
  margin-top: 1%;
  font-weight: bolder;
`;

// li with list-style: url('icon.svg')
export const TechDtlProj = styled.div`
  padding: 20px 10px;
  margin: 10px;

  // margin-bottom: 30px;
  // outline: 1px dotted orange;
`;

export const TechDtlSkill = styled(TechDtlProj)`
  flex-grow: 1;
  // text-align: left;

  // outline: 1px dotted orange;
`;
