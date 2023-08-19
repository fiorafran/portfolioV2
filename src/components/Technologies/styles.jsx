import styled from "styled-components";
import { color } from "../../utils/themes";
import { onlyMobile } from "../../utils/devices";

const Container = styled.div`
  height: 130px;
  width: 700px;
  margin: 10px auto 50px auto;
  border-radius: 10px;
  text-align: center;
  padding: 20px 0;
  box-shadow: 0px 0px 6px 4px rgba(0, 0, 0, 0.1);
  ${onlyMobile`
    width: 90%;
  `}
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  margin: 15px auto;
`;

export default { Container, Image };
