import styled from "styled-components";

const ConferenceImg = styled.img.attrs(props => ({src: props.src}))`
  display: block;
  width: 100%;
  margin-bottom: 20px;
`;

export default ConferenceImg;