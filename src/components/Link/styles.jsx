import styled, { css, keyframes } from "styled-components";
import { color } from "../../utils/themes";

const Link = styled.a`
  text-decoration: none;
`;
const Children = styled.div`
  ${({ variant }) =>
    variant === "social"
      ? css`
          border: 1px solid #ccc;
          width: 70px;
          height: 70px;
          font-size: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px 20px;
          color: ${color.primary};
          border: 2px solid ${color.primary};
          border-radius: 10px;
          position: relative;
          overflow: hidden;
          & > svg {
            z-index: 2;
            transition: all 0.4s ease-in-out;
          }

          &:hover {
            svg {
              color: ${color.white};
            }
          }

          &::before,
          &::after {
            content: "";
            position: absolute;
            top: 0;
            width: 50%;
            height: 100%;
            background-color: ${color.primary};
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.3s ease-in-out;
            z-index: 1;
          }

          &::before {
            left: 0;
          }

          &::after {
            right: 0;
            transform-origin: right;
          }

          &:hover::before,
          &:hover::after {
            transform: scaleX(1);
          }
        `
      : css`
          display: flex;
          justify-content: center;
          align-items: center;
          width: 150px;
          padding: 5px 0;
          border: 2px solid ${color.primary};
          border-radius: 2px;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-weight: 600;
          font-size: 15px;
          color: ${color.primary};
          transition: all 0.3s ease-in-out;
          :hover {
            ${({ disabled }) =>
              !disabled &&
              css`
                background-color: ${color.primary};
                color: ${color.white};
              `}
          }
        `}
  ${({ disabled }) =>
    disabled &&
    css`
      border: 2px solid ${color.grey};
      color: ${color.grey};
      pointer-events: none;
    `}
`;

export default { Link, Children };
