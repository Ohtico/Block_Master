import React, { Component } from 'react'
import { ContImg, Calificacion } from '../style/StyledAll';
import '../style/main.css';

// let color = document.getElementById('predeterminado')


export default class Cartas extends Component {


    render() {
        const { poster_path, vote_average } = this.props.movies

        return (
            <ContImg>
                <Calificacion className={vote_average >= 7 ? "colorPre" : "cell"}><img src="https://res.cloudinary.com/ohtico/image/upload/v1631319950/Block-Master-React/Vector_njcwdy.png" alt="" />{vote_average}</Calificacion>
                <img src={"https://image.tmdb.org/t/p/w500" + poster_path} width="200px" alt="" />
            </ContImg>
        )
    }
}
