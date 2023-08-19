import React from "react";
import styled from "./styles";
import Title from "../Title/Title";
import { AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import Link from "../Link/Link";

const Contact = ({ id, networks }) => {
  return (
    <styled.Wrapper id={id}>
      <Title>{id}</Title>
      <styled.Socials>

      <Link variant="social" href="https://www.linkedin.com/in/franco-fioravanti/">
        <AiFillLinkedin />
      </Link>
      <Link variant="social" href="mailto:francofioravanti21@gmail.com">
        <HiOutlineMail />
      </Link>
      <Link variant="social" href="https://github.com/fiorafran">
        <FaGithubSquare />
      </Link>
      </styled.Socials>

    </styled.Wrapper>
  );
};

export default Contact;
