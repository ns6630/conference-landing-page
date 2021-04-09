import styled from "styled-components";

const Headline = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-transform: lowercase;
  &::after {
    content: ".";
    font-size: 150px;
    line-height: 10px;
    background: linear-gradient(45deg, #9884f7 25%, #f9af7d 27%, #e948a0 35%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    margin-left: -1rem;
  }
`;

export default Headline;