import styled, { css } from "styled-components";
import { color } from "../../utils/themes";
import { onlyMobile } from "../../utils/devices";

const Wrapper = styled.div`
  color: ${color.black};
  max-width: 350px;
  box-shadow: 0px 0px 6px 4px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  text-align: center;
  margin: 10px 20px;
  padding: 5px;
  ${onlyMobile`
    padding: 0;
    margin: 10px auto;
    max-width: 335px;
  `}
`;

const ProjectImg = styled.img`
  ${({ isAPI }) =>
    isAPI
      ? css`
          width: 50px;
          height: 50px;
        `
      : css`
          width: 100%;
          min-height: 200px;
          border-radius: 15px 15px 0 0;
        `};
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${color.blackAlpha};
`;

const Description = styled.div`
  width: 100%;
  max-width: 280px;
  max-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px auto;
  overflow-y: auto;
  padding: 5px 0;
`;
const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 10px;
`;

const Container = styled.div`
  position: relative;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const Zoom = styled.button`
  position: absolute;
`;

export default {
  Wrapper,
  ProjectImg,
  Title,
  Description,
  LinkWrapper,
  Container,
  Zoom,
};
