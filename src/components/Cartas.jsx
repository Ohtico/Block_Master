import React, { useState } from 'react'
import { ContImg, Calificacion } from '../style/StyledAll';
import '../style/main.css';
import Detalle from './Detalle';

const Cartas = ({ movies }) => {

    const { poster_path, vote_average, id, title, overview } = movies
    const [descipcion, setDescipcion] = useState([])

    const modalDescripcion = (e) => {
        const array = []
        array.push(e.target)
        setDescipcion(array)
    }

    return (
        <ContImg>
            <Calificacion className={vote_average >= 7 ? "colorPre" : "cell"}><img src="https://res.cloudinary.com/ohtico/image/upload/v1631319950/Block-Master-React/Vector_njcwdy.png" alt="" />{vote_average}</Calificacion>
            <img id={id} className={overview} src={"https://image.tmdb.org/t/p/w500" + poster_path} width="200px" alt={title} onClick={modalDescripcion} />
            {
                descipcion.map((todo, index) => {
                    return (
                        <Detalle
                            key={`${todo}-${index}`}
                            lapiz={todo}
                        />
                    )
                })
            }
        </ContImg>
    )
}

export default Cartas
