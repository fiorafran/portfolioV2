import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Proyects from "./components/Projects";
import schema from "./schema";
import styled from "./styles";

function App() {
  const { projects, sections, redes } = schema || {};
  return (
    <styled.App>
      <styled.Container>
        <Header {...schema} />
        <Home id={sections[0]} />
        <Proyects id={sections[1]} projects={projects} />
        <Contact id={sections[2]} networks={redes} />
      </styled.Container>
    </styled.App>
  );
}

export default App;
