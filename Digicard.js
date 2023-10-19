import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  `;

const CardImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const CardTitle = styled.h3`
  font-size: 18px;
`;

const CardLevel = styled.p`
  font-size: 16px;
`;

const DigimonCard = ({ name, level, img }) => {
  return (
    <CardContainer>
      <CardImage src={img} alt={name} />
      <CardTitle>Nome: {name}</CardTitle>
      <CardLevel>Level: {level}</CardLevel>
    </CardContainer>
  );
};

export default DigimonCard;