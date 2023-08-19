import React from "react";
import styled from "./styles";

const Link = ({ href = "", children, variant }) => {
  return href ? (
    <styled.Link href={href} target="_blank">
      <styled.Children variant={variant}>{children}</styled.Children>
    </styled.Link>
  ) : (
    <styled.Children disabled>{children}</styled.Children>
  );
};

export default Link;
