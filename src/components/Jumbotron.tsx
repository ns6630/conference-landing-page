import React from "react";
import styled from "styled-components";
import Button from "./Button";

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
      <Button href="#registration">register now</Button>
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
  font-size: 6vw;
  line-height: 1.2;
  margin: 30px 0 20px 0;
  font-weight: 800;
  word-spacing: 99999rem;
  text-transform: uppercase;
  background: linear-gradient(90deg, #9884f7 0%, #f9af7d 20%, #f9af7d 40%, #e948a0 60%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export default Jumbotron;
