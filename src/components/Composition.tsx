import styled from "styled-components";
import img from "../static/img/cards.png";

const Composition = styled.img.attrs(props => ({src: img}))`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 300px;
  margin: auto 0;
  width: 450px;
`;

export default Composition;