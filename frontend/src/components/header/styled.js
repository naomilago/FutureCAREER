import styled from "styled-components";
import { Button as Btn } from "reactstrap";


export const Button = styled(Btn)`
  background-color: #fff;
  border: 1px solid #0981EF !important;
  color: #3166ff !important;
  font-weight: bold;
  border-radius: 75px;
  &:hover, &:active, &:visited {
    color: #fff !important;
    background-color: #0981EF !important;
  }
`;
