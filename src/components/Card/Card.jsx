import React from "react";
import Link from "../Link";
import styled from "./styles";

const Card = ({
  imageURL = "",
  name = "",
  description = "",
  url = "",
  pageURL = "",
  isAPI = false,
}) => {
  return (
    <styled.Wrapper>
      {imageURL && (
        <styled.Container isAPI={isAPI}>
          <styled.ProjectImg src={imageURL} alt={name} isAPI={isAPI} />
        </styled.Container>
      )}
      <styled.Title>{name}</styled.Title>
      <styled.Description>{description}</styled.Description>
      <styled.LinkWrapper>
        <Link href={url}>github</Link>
        <Link href={pageURL}>demo</Link>
      </styled.LinkWrapper>
    </styled.Wrapper>
  );
};

export default Card;
