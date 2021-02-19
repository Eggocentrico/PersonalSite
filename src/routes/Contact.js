import React from "react";
import styled from "styled-components";
import Social, { SocialMedia } from "../components/Social";

const Div = styled.div`
  height: 90%;
  display: flex;
  background: ${(props) => props.theme.colors.backgroundFocus};
  flex-direction: column;
`;

const Iframe = styled.iframe`
  height: 100%;
  border: none;
  border-radius: ${(props) => props.theme.measures.cardRadius};
  padding: 1em;
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

export default function Contact() {
  return (
    <Div>
      <Iframe src="https://forms.gle/BaiaSBCdARt8WBJG8"></Iframe>
      <SocialMedia>
        <H1>Social media</H1>
        <P>There you can get more detailed info about me</P>
        <Social></Social>
      </SocialMedia>
    </Div>
  );
}
