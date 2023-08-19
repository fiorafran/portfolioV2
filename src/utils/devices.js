import styled, { css } from "styled-components";

const mobileBreakpoint = "800px";

export const onlyMobile = (styles) => css`
  @media (max-width: ${mobileBreakpoint}) {
    ${styles}
  }
`;
