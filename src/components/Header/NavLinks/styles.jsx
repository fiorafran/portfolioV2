import styled from "styled-components";
import { color } from "../../../utils/themes";

const Link = styled.a`
  position: relative;
  text-decoration: none;
  color: ${color.primary};
  padding-bottom: 3px;
  margin: 8px 13px;
  text-transform: capitalize;
  font-weight: 600;

  &::after {
    content: "";
    display: block;
    position: absolute; 
    bottom: 0; 
    left: 0;
    width: 0; 
    height: 2px; 
    background-color: ${color.primary}; 
    transition: width 0.3s ease-out; 
  }
  &:hover::after {
    width: 100%; 
  }
`;

export default { Link };
