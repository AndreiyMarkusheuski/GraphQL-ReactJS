import styled from "styled-components";
import { Link } from "react-router-dom";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 100px 40px;
  grid-auto-flow: row;
  margin: 80px 100px 0;
`;

export const StyledLink = styled(Link)`
  position: relative;
  color: #000;
  text-decoration: none;

  &.disable {
    opacity: 0.6;
    pointer-events: none;
  }
`;

export const StyledDisableCard = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 160%;
    color: #414248;
  }
`;
