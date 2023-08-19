import React, { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import styled from "./styles";

const Header = ({ me, sections }) => {
  const [changeNav, setChange] = useState(false);

  const handleScroll = () => {
    const scroll = window.scrollY;
    if (scroll >= 120) return setChange(true);
    setChange(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <styled.NavBar changeNav={changeNav}>
      <styled.Container>
        <styled.Me>{me}</styled.Me>
        <NavLinks sections={sections} />
      </styled.Container>
    </styled.NavBar>
  );
};

export default Header;
