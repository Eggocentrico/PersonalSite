import React from "react";
import styled from "styled-components";
import Projects from "../components/Projects";
import Social, { SocialMedia } from "../components/Social";

const Div = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundFocus};
  margin: 0;
  padding: 0;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PaddingDiv = styled.div`
  padding: 1em;
  height: 100%;
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  padding-top: 1em;
  margin: 0;
`;

const P = styled.p`
  color: ${(props) => props.theme.colors.text};
  margin-top: 0.3em;
  padding-top: 0;
`;

export default function Home() {
  return (
    <Div>
      <H1>Projects</H1>
      <PaddingDiv>
        <Projects></Projects>
      </PaddingDiv>
      <SocialMedia>
        <H1>Social media</H1>
        <P>There you can get more detailed info about me</P>
        <Social></Social>
      </SocialMedia>
    </Div>
  );
}
