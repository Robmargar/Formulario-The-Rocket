import styled from "styled-components";

export const Div1 = styled.div`
  display: grid;
  grid-template-columns: 0.75fr 3fr;
  grid-gap: 3rem;
  width: 600px;
  background-color: #efefef;
`;

export const DivNom = styled.div`
  margin-top: 1rem;
  display: grid;
  justify-items: center;
  align-content: space-around;
  height: 520px;
  width: 400px;
  grid-template-rows: repeat(6, 6fr);
  border-radius: 5px;
  background-color: #f0f0f0;
`;

export const DivFecha = styled.div`
  margin-top: 2rem;
  display: grid;
  justify-items: center;
  align-content: space-around;
  height: 420px;
  width: 400px;
  grid-template-rows: repeat(5, 6fr);
  border-radius: 5px;
  background-color: #f0f0f0;
`;
export const DivDat = styled.div`
  margin-top: 2rem;
  
  display: grid;
  justify-items: center;
  height: 400px;
  width: 400px;
  grid-template-rows: repeat(4, 6fr);
  border-radius: 5px;
  background-color: #f0f0f0;
`;

export const DivResp = styled.div`
  display: grid;
  justify-items:end;
  background-color: #f174dc;
  justify-items: center;
  align-content: space-around;
  height: 80px;
  width: 250px;
  border-radius: 5px;
  color: #272727;
  font-size: 1.25rem;
`;
export const DivResp2 = styled.div`
  display: grid;
  margin-top:1rem;
  justify-items:end;
  background-color: #f174dc;
  justify-items: center;
  align-content: space-around;
  height: 200px;
  width: 400px;
  border-radius: 5px;
  color: #272727;
  font-size: 1.25rem;
`;

export const Div3 = styled.div`
  display: grid;
  font-size: 1.5rem;
  align-items: center;
`;

export const Div4 = styled.div`
  display: grid;
  margin: 2rem;
  justify-items: center;
  background-color: white;
`;

export const DivGen = styled.div`
  font-family:constantia;
`;