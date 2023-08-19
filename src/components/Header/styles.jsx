import styled, { css } from "styled-components";
import { color } from "../../utils/themes";
import { onlyMobile } from "../../utils/devices";

const NavBar = styled.nav`
  width: 100%;
  background-color: transparent;
  position: relative;
  ${({ changeNav }) =>
    changeNav &&
    css`
      background-color: rgb(237 237 237 / 27%);
      backdrop-filter: blur(3px);
    `}
  ${onlyMobile`
    position: sticky;
    top: 0;
    z-index: 10;
  `}
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Me = styled.h1`
  position: absolute;
  left: 0;
  margin: 3px 0 0 0;
  font-size: 20px;
  color: #ccc;
  ::after {
    color: ${color.primary};
    content: "();";
  }
  ${onlyMobile`
    padding-left: 13px;
  `}
`;

export default { NavBar, Container, Me };
