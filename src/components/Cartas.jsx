import React, { Component } from 'react'
import { ContImg, Calificacion } from '../style/StyledAll';
import '../style/main.css';

// let color = document.getElementById('predeterminado')

let urlbase = 'https://pelis-blockmaster.herokuapp.com/peliculas?title_like='

export default class Cartas extends Component {


    constructor() {
        super();
        this.state = {
            descipcion: []
        }
    }
    

    peticones = (e) =>{
        // console.log(e.target.id);
        const array = []
        array.unShift(e.target.id)
        this.setState({ descipcion:  array})
        console.log(this.descipcion);
    }
    

    render() {
        
        const { poster_path, vote_average, id } = this.props.movies

        return (
            <ContImg>
                <Calificacion className={vote_average >= 7 ? "colorPre" : "cell"}><img src="https://res.cloudinary.com/ohtico/image/upload/v1631319950/Block-Master-React/Vector_njcwdy.png" alt="" />{vote_average}</Calificacion>
                <img id={id} src={"https://image.tmdb.org/t/p/w500" + poster_path} width="200px" alt="" onClick={this.peticones} />
            </ContImg>
        )
    }
}
