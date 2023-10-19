import React, { useState, useEffect, useCallback } from "react";
import App from "../../App";
import { Button, Container, FilterContainer} from "../../Styles";
import axios from "axios";
import DigimonCard from "../../Digicard";

function CharacterDetailPage() {
  const [currentPage, setCurrentPage] = useState("detail");
  const [digimonData, setDigimonData] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchLevel, setSearchLevel] = useState("");
  const [filteredDigimons, setFilteredDigimons] = useState([]);

  const handleFilter = useCallback(() => {
    const filtered = digimonData.filter((digimon) => {
      const nameMatch = digimon.name.toLowerCase().includes(searchName.toLowerCase());
      const levelMatch = searchLevel === "" || digimon.level === searchLevel;
      return nameMatch && levelMatch;
    });

    setFilteredDigimons(filtered);
  }, [digimonData, searchName, searchLevel]);


  useEffect(() => {
    if (currentPage === "list") {
      handleFilter();
    }
  }, [currentPage, handleFilter]);
  
  useEffect(() => {
    if (currentPage === "list" && digimonData.length === 0) {
      fetchDigimonData();
    }
  }, [currentPage, digimonData]);

  const fetchDigimonData = async () => {
    try {
      const response = await axios.get("https://digimon-api.vercel.app/api/digimon");
      setDigimonData(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados da API", error);
    }
  };

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === "detail") {
      return (
        <div>
          <h1>Um pouco da história dos Digimons</h1>
          <p>
          Digimon Adventure é a primeira série anime de Digimon, emitida aos Domingos na Fuji TV, para substituir a nova versão de Himitsu no Akko-chan.<br/>
          Começou dia 7 de Março de 1999 e terminou dia 26 de Março de 2000. Foi substituído por Digimon Adventure 02.<br/>
          Foi uma das séries de anime mais exportadas e reuniu uma grande audiência. Em 2001, <br/>
          foi publicada uma novelização que aprofunda os eventos da série, o que leva a certos desvios da narrativa. <br/>
          Em 2013, foi lançado um jogo que reconta a sua história, como parte da celebração do seu décimo quinto aniversário. <br/>
          Em 2015, foi lançada uma coleção em Blu-ray com todos os episódios remasterizados. Na semana de lançamento, vendeu 12094 cópias.<br/>
          Na edição de Março de 2020 da V-Jump,foi anunciada uma nova versão do anime, que decorre no ano de 2020.<br/>
          </p>
          <h1>Sinopse</h1>
          <p>
          Um grupo de sete crianças é levado para outro mundo - o Digital World<br/>
          que descobrem ser uma realidade paralela habitada por criaturas chamadas Digimon.<br/>
          Lá, descobrem que foram escolhidas para salvar o Digital World das forças do mal que ameaçam destruí-lo.<br/>
          Para este fim, cada criança é agrupada com um parceiro Digimon que tem de ajudar a evoluir para níveis mais poderosos e poder,<br/>
          assim, derrotar os inimigos. Enquanto sobrevivem neste novo mundo selvagem, vão descobrindo coisas sobre ele e sobre si próprios.
          </p>
          <p></p>
          <Button onClick={() => handleButtonClick("characterList")}>VOLTAR</Button>
          <Button onClick={() => handleButtonClick("list")}>DIGIMONS</Button>
        </div>
      );
    } else if (currentPage === "list") {
      return (
        <div>
          <Container>
            <FilterContainer>
              <h2>Filtrar Digimons</h2>
              <div>
                <input
                  type="text"
                  placeholder="Nome do Digimon"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                />
                <select
                  value={searchLevel}
                  onChange={(e) => setSearchLevel(e.target.value)}
                >
                  <option value="">Todos os leveis</option>
                  <option value="Rookie">Rookie</option>
                  <option value="Champion">Champion</option>
                  <option value="Ultimate">Ultimate</option>
                  <option value="Mega">Mega</option>
                </select>
              </div>
            </FilterContainer>
            <ul>
            <div className="card-container">
              {filteredDigimons.map((digimon, index) => (
                 <DigimonCard
                 key={index}
                 name={digimon.name}
                 level={digimon.level}
                 img={digimon.img}
               />
              ))}
              </div>
            </ul>
          </Container>
        </div>
      );
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