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
    color: #FED941;
  }
`;
export const But = styled.input`
    padding: 16px;
    border-radius: 2px;
    border: none;
    width: 25vw;
`;
export const Voto = styled.button`
    background-color: #FED941;
    padding: 10px;
    border-radius: 2px;
    border: none;
    cursor:pointer;
    overflow: hidden;
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

export const Manos = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
export const Boligrafo = styled.h2`
    color: #FED941;
    display: flex;
    justify-content:center;
`;
export const Tasa = styled.div`
    display: flex;
    justify-content:center;
    color: #fff;
    padding: 30px;
`;
export const Tetera = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Nachos = styled.div`
    align-items: center;
    display: flex;
    margin-left: 9vw;
    margin-bottom: 6vh;
    margin-top: 6vh;
`;
export const Luz = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    width: 95%;
    margin-left: 2vw;
`;
export const ContImg = styled.div`
    margin-top: 25px;
    padding: 20px;
`;

export const Calificacion = styled.span`
    background: #0000009b;
    color: #fff;
    border-bottom-right-radius: 30px;
    border-top-right-radius: 30px;
    padding: 20px;
    position: absolute;
    align-items: center;
    margin-top: 4vh;
    font-size: 20px;
`;

export const ModalDiv = styled.div`
    display: ${ p => p.block && p.block};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 1000;
`
export const ContentDiv = styled.div`
    position: fixed;
    width: 70%;
    height: auto;
    top: 50%;
    left: 50%;
    padding: 2rem;
    transform: translate(-50%, -50%);
    color:#fff;
`
export const ContDetalles = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const Descripcion = styled.div`
   margin: 20px;
`;
export const VerAhora = styled.button`
    background-color: #FED941;
    padding: 6px;
    padding-top: 10px;
    border-radius: 2px;
    border: none;
    display: flex;
    cursor:pointer;
    overflow: hidden;
`;
export const Correo = styled.p`
    display: flex;
    justify-content: center;
`;
export const NextP = styled.button`
    display: flex;
    justify-content: center;
`