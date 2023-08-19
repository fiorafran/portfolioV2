import styled from "styled-components";
import { color } from "../../utils/themes";
import { onlyMobile } from "../../utils/devices";

const Home = styled.div`
  width: 100%;
  color: ${color.black};
`;

const MiniProfile = styled.div`
  padding: 100px 10px 30px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${onlyMobile`
    flex-direction: column;
    padding: 80px 0 30px 0;
  `}
`;

const NameProfile = styled.h1`
  margin: 0;
  color: ${color.primary};
`;

const Description = styled.div`
  margin-left: 120px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${onlyMobile`
    justify-content: center;
    align-items: center;
    margin-left: 0;
  `}
`;

const MeDescription = styled.div`
  text-align: center;
  padding: 20px;
  position: relative;
  ${onlyMobile`
    width: 90%;
    margin: auto;
  `}
  &:before,
  &:after {
    content: "";
    position: absolute;
    background-color: transparent;
    width: 6%;
    height: 50%;
    border: 3px solid ${color.primary};
    transition: all 0.5s ease-in-out;
  }

  &:before {
    top: 0;
    right: 0;
    border-left: none;
    border-bottom: none;
  }

  &:after {
    bottom: 0;
    left: 0;
    border-right: none;
    border-top: none;
  }

  &:hover {
    &:before,
    &:after {
      width: 30%;
      height: 96%;
    }
  }
`;

const Profile = styled.div`
  font-size: 20px;
  font-weight: 400;
`;

const ProfileImage = styled.img`
  width: 40%;
  max-width: 250px;
  border-radius: 50%;
`;

export default {
  Home,
  MiniProfile,
  ProfileImage,
  NameProfile,
  Description,
  MeDescription,
  Profile,
};
