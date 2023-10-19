import  styled  from "styled-components";


export const Button = styled.button`
  border-radius: 20px;
  padding: 10px 20px;
  background: linear-gradient(
    135deg,
    #ff3399,
    #ff33cc,
    #ff33ff,
    #cc33ff,
    #9933ff,
    #6633ff,
    #3333ff,
    #0033ff,
    #0033cc,
    #003399
  );
  background-size: 200% 200%;
  color: #fff;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-position: right bottom;
  }

  &:active,
  &:focus {
    background-position: right bottom;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;


export const FilterContainer = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;
