import styled from "styled-components";

interface CardProps {
  photo: string;
  name: string;
  position: string;
}

const Card: React.FC<CardProps> = ({ photo, name, position }: CardProps) => {
  return (
    <div>
      <CardPhoto src={photo} />
      <CardName>{name}</CardName>
      <CardPosition>{position}</CardPosition>
    </div>
  );
};

const CardPhoto = styled.img.attrs((props) => ({
  src: props.src
}))`
  display: block;
  width: 100%;
`;

const CardName = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem 0;
`;

const CardPosition = styled.p`
  font-weight: 1rem;
`;

export default Card;
