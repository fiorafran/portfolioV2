import styled from "styled-components";
import { color } from "./utils/themes";

const App = styled.div`
  background-color: ${color.white};
`;
const Container = styled.div`
  max-width: 1280px;
  margin: auto;
  color: ${color.whiteAlpha};
`;

export default { App, Container };
