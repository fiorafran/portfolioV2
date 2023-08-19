import React from "react";
import Card from "../Card";
import styled from "./styles";
import Title from "../Title";
import Link from "../Link/Link";

const Projects = ({ id, projects = [] }) => {
  return (
    <>
      <Title>Últimos lanzamientos</Title>
      <styled.Projects id={id}>
        {projects.map((project) => (
          <Card key={project.id} {...project} />
        ))}
      </styled.Projects>
      <styled.LinkWrapper>
        <Link
          href="https://github.com/fiorafran?tab=repositories&q=&type=public&language=&sort="
          children="ver más"
        />
      </styled.LinkWrapper>
    </>
  );
};

export default Projects;
