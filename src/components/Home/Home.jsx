import React from "react";
import styled from "./styles";
import Technologies from "../Technologies";

const Home = ({ id }) => {
  return (
    <styled.Home id={id}>
      <styled.MiniProfile>
        <styled.ProfileImage src="assets/me.jpeg" alt="" />
        <styled.Description>
          <styled.NameProfile>Franco Fioravanti</styled.NameProfile>
          <styled.Profile>
            Desarrollador Frontend especializado en React.js.
          </styled.Profile>
        </styled.Description>
      </styled.MiniProfile>
      <styled.MeDescription>
        Soy un desarrollador JavaScript con experiencia en programación
        fullstack. Me apasiona la programación y siempre
        estoy buscando nuevos desafíos y oportunidades para aprender y crecer
        tanto en lo profesional como personal. Mi habilidad para trabajar en
        equipo y colaborar eficazmente con mis colegas ha sido una de mis
        fortalezas en el desarrollo de proyectos. Soy una persona comprometida
        en mis tareas y con facilidad de adaptación, dispuesto a capacitarme
        para cumplir con los objetivos. Constantemente actualizando mis
        habilidades y conocimientos para estar al día con las últimas tendencias
        y tecnologías en el campo del desarrollo de software
      </styled.MeDescription>
      <Technologies />
    </styled.Home>
  );
};

export default Home;
