import styled from "styled-components";

export const StyleW = styled.button`
  background-color: transparent;
  border: none;

  padding: 5px;
  outline: ${(props) => {
    if (props.tt === true) {
      return "Dashed";
    } else if (props.t2 === true) {
      return "solid";
    } else if (props.t4 === true) {
      return "none";
    } else if (props.t5 === true) {
      return "none";
    }
  }};
  text-align: center;
  background: ${(props) => {
    if (props.dOne === true) {
      return "#A85CF9";
    } else if (props.t2 === false) {
      return "#A85CF9";
    } else if (props.tt === false) {
      return "#A85CF9";
    } else if (props.t4 === false) {
      return "#A85CF9";
    } else if (props.t5 === false) {
      return "#A85CF9";
    }
  }};
  margin: 5px;
  color: ${(props) => {
    if (props.t5 === true) {
      return "blue";
    } else {
      return "black";
    }
  }};
`;
