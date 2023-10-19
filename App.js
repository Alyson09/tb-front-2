import React, { useState } from "react";
import styled from 'styled-components';
import CharacterDetailPage from "./pages/CharacterDetailPage/CharacterDetailPage";

const Container = styled.div`
  background-color: #00cccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Image = styled.img`
  max-width: 100%;
`;

const Button = styled.button`
  border-radius: 20px;
  padding: 10px 20px;
  background: linear-gradient(135deg, 
    #ff3399, #ff33cc, #ff33ff, #cc33ff, #9933ff, #6633ff, #3333ff, #0033ff, #0033cc, #003399);
  background-size: 200% 200%; 
  color: #fff;
  cursor: pointer;
  transition: background 0.3s ease; 

  &:hover {
    background-position: right bottom; 
  }

  &:active, &:focus {
    background-position: right bottom; 
  }
`;

function App() {
  const [currentPage, setCurrentPage] = useState("list");

  const handleButtonClick = () => {
    if (currentPage === "list") {
      setCurrentPage("details");
    } else {
      setCurrentPage("list");
    }
  };

  return (
    <Container>
      {currentPage === "list" && (
        <Image
          src="https://i.pinimg.com/originals/44/e2/20/44e22097ce17a8ce8c728acb47e5a9c1.gif"
          alt="LOGO DO DIGIMON"
        />
      )}
      {currentPage === "list" ? (
        <Button onClick={handleButtonClick}>START</Button>
      ) : (
        <CharacterDetailPage />
      )}
    </Container>
  );
}

export default App;