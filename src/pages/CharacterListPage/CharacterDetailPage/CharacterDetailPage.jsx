import React, { useState } from "react";
import App from "../../../App";
import CharacterListPage from "../CharacterListPage"; 
import styled from "styled-components";
import axios from "axios";

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


function CharacterDetailPage() {
  const [currentPage, setCurrentPage] = useState("detail");

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === "detail") {
      return (
        <div>
          <h1>Personagens</h1>
          <Button onClick={() => handleButtonClick("characterList")}>VOLTAR</Button>
          <Button onClick={() => handleButtonClick("list")}>LEVEL</Button>
        </div>
      );
    } else if (currentPage === "list") {
      return <CharacterListPage />;
    } else if (currentPage === "characterList") {
      return <App />;
    }
    return null;
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default CharacterDetailPage;
