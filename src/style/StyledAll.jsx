import styled from 'styled-components'

export const Contenedor = styled.div`
    width: 90vw;
    margin-left: 3%;
    margin-top: 2%;
    display: flex;
    justify-content: space-between;
    list-style:none;
    align-items: center;
`;
export const Enlace = styled.a`
    color: #fff;
    text-decoration: none;
    margin: 1vw;
    font-size: 25px;
    &:hover{
    color: #FF8906;
  }
`;
export const But = styled.input`
    padding: 16px;
    border-radius: 2px;
    border: none;
    width: 25vw;
`;
export const Voto = styled.button`
    background-color: #FF8906;
    padding: 10px;
    border-radius: 2px;
    border: none;
`;
export const Imperro = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`;
export const ContenedorP = styled.div`
   
    display: flex;
    flex-direction: row;
`;
export const Cartica = styled.div`
    width: 220px;
    height: 330px;
    margin: 20px;
    margin-top: 9%;
`;
export const Manos = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 1%;
`;
