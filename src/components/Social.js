import styled from "styled-components";
import { FaDiscord, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Div = styled.div`
  padding: 1em;
  padding-top: 0;
  color: ${(props) => props.theme.colors.text};
  & > * {
    font-size: 1.5em;
    padding: 0.3em;
  }
`;

export const SocialMedia = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Social() {
  return (
    <Div>
      <FaGithub></FaGithub>
      <FaDiscord></FaDiscord>
      <FaLinkedin></FaLinkedin>
      <FaEnvelope></FaEnvelope>
    </Div>
  );
}
