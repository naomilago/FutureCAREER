import styled from 'styled-components';
import { Button as Btn } from "reactstrap";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  position: absolute;
  top: -15%;
  left: 25%;
  width: 50%;
  padding: 15px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0px 2px 3px #566;
`;

export const Button = styled(Btn)`
  background-color: #0981EF !important;
  &:hover, &:active, &:visited {
    background-color: #0981EF !important;
  }
`;
