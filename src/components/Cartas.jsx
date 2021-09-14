import React, { Component } from 'react'
import { ContImg, Calificacion } from '../style/StyledAll';
import '../style/main.css';
import Detalle from './Detalle';


export default class Cartas extends Component {

    constructor() {
        super();
        this.state = {
            descipcion: []
        }
    }

    modalDescripcion = (e) => {
        const array = []
        array.push(e.target)
        this.setState({ descipcion: array })
    }

    render() {

        const { poster_path, vote_average, id, title, overview } = this.props.movies

        return (
            <ContImg>
                <Calificacion className={vote_average >= 7 ? "colorPre" : "cell"}><img src="https://res.cloudinary.com/ohtico/image/upload/v1631319950/Block-Master-React/Vector_njcwdy.png" alt="" />{vote_average}</Calificacion>
                <img id={id} className={overview} src={"https://image.tmdb.org/t/p/w500" + poster_path} width="200px" alt={title} onClick={this.modalDescripcion} />
                {
                    this.state.descipcion.map((todo, index) => {
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
}
