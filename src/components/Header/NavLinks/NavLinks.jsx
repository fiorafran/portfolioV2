import React from "react";
import styled from "./styles";

const NavLinks = ({ sections = [] }) => {
  if (!sections.length) return;
  return sections.map((section) => (
    <styled.Link key={section} href={`#${section}`}>
      {section}
    </styled.Link>
  ));
};

export default NavLinks;
