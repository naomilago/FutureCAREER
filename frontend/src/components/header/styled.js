import styled from "styled-components";
import { Button as Btn } from "reactstrap";


export const Button = styled(Btn)`
  background-color: #fff;
  border: 1px solid #0981EF;
  color: #3166ff;
  font-weight: bold;
  border-radius: 75px;
  &:hover, &:active, &:visited {
    background-color: #0981EF;
    color: #fff;
  }
`;
