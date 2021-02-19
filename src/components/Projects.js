import styled from "styled-components";
import Project from "./Project";

const projects = [
  {
    name: "Latin locutions",
    url: "https://latinlocutions.vercel.app/",
    img: "https://imgur.com/pT4N6TN.png",
    desc:
      "A little app that parses latin locutions from wikipedia and allows you to download your saved ones",
  },
  {
    name: "Jokes app",
    url: "https://jokesapp.vercel.app/",
    img: "https://imgur.com/QFLquSU.png",
    desc: "A little app that fetchs jokes on an api and displays them",
  },
  {
    name: "Combos apps",
    url: "/",
    img: "https://imgur.com/88A0SOK.png",
    desc: "Some apps i made to make my work easier at Combos",
  },
];

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  width: 100%;
  max-width: 1000px;
`;

export default function Projects() {
  return (
    <Div>
      {projects.map((project) => (
        <Project
          name={project.name}
          url={project.url}
          img={project.img}
          desc={project.desc}
        ></Project>
      ))}
    </Div>
  );
}
