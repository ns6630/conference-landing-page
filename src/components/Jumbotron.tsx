import React from "react";
import styled from "styled-components";

interface JumbotronProps {
  date: string;
  title: string;
}

const Jumbotron: React.FC<JumbotronProps> = ({
  date,
  title,
}: JumbotronProps) => {
  return (
    <StyledJumbotron>
      <JumbotronDate>{date}</JumbotronDate>
      <JumbotronTitle>{title}</JumbotronTitle>
    </StyledJumbotron>
  );
};

const StyledJumbotron = styled.section`
  margin: 1em 0;
`;

const JumbotronDate = styled.p`
  text-transform: uppercase;
`;

const JumbotronTitle = styled.h1`
  font-size: 7vw;
  line-height: 1.2;
  margin-top: 30px;
  font-weight: 800;
  word-spacing: 99999rem;
  text-transform: uppercase;
  background: linear-gradient(90deg, #9884f7 0%, #f9af7d 20%, #f9af7d 40%, #e948a0 60%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export default Jumbotron;
