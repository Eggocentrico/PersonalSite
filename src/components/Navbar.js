import React from "react";
import Links, { SLink } from "./Links";
import styled from "styled-components";

const Div = styled.div`
  margin: 0;
  padding: 0 1em 0 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
`;

export default function Navbar({ title, themeIndex, setThemeIndex }) {
  return (
    <Div>
      <SLink to="/">
        <h1>{title}</h1>
      </SLink>
      <Links themeIndex={themeIndex} setThemeIndex={setThemeIndex}></Links>
    </Div>
  );
}
