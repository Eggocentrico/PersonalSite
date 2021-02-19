import styled from "styled-components";

const Div = styled.div`
  width: 90%;
  display: flex;
  margin: 1%;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.backgroundCard};
  border-radius: ${(props) => props.theme.measures.cardRadius};
`;

const TextDiv = styled.div`
  padding: 1em;
`;

const Img = styled.img`
  border-radius: ${(props) => props.theme.measures.cardRadius}
    ${(props) => props.theme.measures.cardRadius} 0 0;
  height: 100%;
  width: 100%;
`;

const A = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 0;
  padding-bottom: 0;
`;

const H2 = styled.h2`
  margin-top: 0.5em;
  margin-bottom: 0.2em;
`;

const P = styled.p`
  color: ${(props) => props.theme.colors.textParagraph};
  margin-top: 0;
`;

export default function Project({ name, url, img, desc }) {
  return (
    <Div>
      <Img src={img} alt={name}></Img>
      <TextDiv>
        <A href={url}>
          <H2>{name}</H2>
        </A>
        <P>{desc}</P>
      </TextDiv>
    </Div>
  );
}
