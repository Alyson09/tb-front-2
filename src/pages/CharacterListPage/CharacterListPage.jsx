import React, { useState } from "react";
import App from "../../App";
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
  position: fixed;
  bottom: 20px;
  right: 20px;

  &:hover {
    background-position: right bottom; 
  }

  &:active, &:focus {
    background-position: right bottom; 
  }
`;



function CharacterListPage() {
  const [currentPage, setCurrentPage] = useState("detail");

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  }

  const renderPage = () => {
    if (currentPage === "detail") {
      return (
        <div>
          <h1>Level dos Digimons</h1>
          <Button onClick={() => handleButtonClick("list")}>VOLTAR</Button>
        </div>
      );
    } else if (currentPage === "list") {
      return <App />;
    }
    return null;
  }

  return (
    <div>
      {renderPage()}
    </div>
  )
}

export default CharacterListPage;
