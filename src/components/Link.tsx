import styled from "styled-components";

const Link = styled.a.attrs(props => ({ href: props.href ? props.href : ""}))`
  display: inline-block;
  text-decoration: none;
  color: #dcdcdc;
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

export default Link;