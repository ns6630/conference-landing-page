import styled from "styled-components";

const Button = styled.a.attrs(props => ({ href: props.href ? props.href : ""}))`
  display: inline-block;
  padding: 1em 2.5em;
  text-decoration: none;
  color: #fbf7f9;
  border: 2px solid #fbf7f9;
  text-transform: lowercase;
  outline: none;

  &:hover {
    background: linear-gradient(90deg, #9884f7 0%, #f9af7d 30%, #f9af7d 70%, #e948a0 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    border-image: linear-gradient(90deg, #9884f7 0%, #f9af7d 30%, #f9af7d 70%, #e948a0 100%);
    border-image-slice: 1;
  }

  &:active {
    background: linear-gradient(90deg, #e948a0 0%, #f9af7d 30%, #f9af7d 70%, #9884f7 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    border-image: linear-gradient(90deg, #e948a0 0%, #f9af7d 30%, #f9af7d 70%, #9884f7 100%);
    border-image-slice: 1;
  }
`;

export default Button;