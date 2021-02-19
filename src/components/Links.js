import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const links = [
  { path: "/contact", name: "Contact" },
  // { path: "/about", name: "About" },
];

const Ul = styled.ul`
  display: flex;
  align-items: center;
`;

const Li = styled.li`
  padding: 1em;
  list-style: none;
`;

const Button = styled.button`
  background: ${(props) => props.theme.colors.background};
  border: ${(props) => "1px solid " + props.theme.colors.text};
  padding: 0.3em;
  color: ${(props) => props.theme.colors.text};
  border-radius: 0.3em;
`;

export const SLink = styled(Link)`
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.textFocus};
  }
`;

export default function Links({ themeIndex, setThemeIndex }) {
  return (
    <Ul>
      <Li>
        <Button onClick={(e) => setThemeIndex(themeIndex === 0 ? 1 : 0)}>
          {themeIndex === 0 ? "Light mode" : "Dark mode"}
        </Button>
      </Li>
      {links.map((link) => (
        <Li>
          <SLink to={link.path}>{link.name}</SLink>
        </Li>
      ))}
    </Ul>
  );
}
