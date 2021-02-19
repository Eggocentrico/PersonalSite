import React from "react";
import styled from "styled-components";
import Projects from "../components/Projects";

const Div = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundFocus};
  margin: 0;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  padding-top: 0.3em;
  margin: 0;
`;

export default function Home() {
  return (
    <Div>
      <H1>Projects</H1>
      <Projects></Projects>
    </Div>
  );
}
