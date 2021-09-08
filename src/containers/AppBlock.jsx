import React, { Component } from 'react'
import Cartas from '../components/Cartas';
import { Manos, Contenedor, Enlace, But, Voto, Imperro } from '../style/StyledAll'
import {Link} from 'react-router-dom'

// import Cabecera from '../components/Cabecera'  
const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=e224d4a8'


export default class AppBlock extends Component {
    constructor() {
        super();
        this.state = {
            peli: [],
            searchTerm: 'Batman'
        }
    }
    async componentDidMount() {
        const res = await fetch(`${url}&s=${this.state.searchTerm}`)
        const { Search } = await res.json()
        this.setState({ peli: Search })
        console.log(Search);
    }
    render() {
        const handleOnsubmit = async (e) => {
            e.preventDefault()
            const res = await fetch(`${url}&s=${this.state.searchTerm}`)
            const { Search } = await res.json()
            this.setState({ peli: Search })
            console.log(Search);
        }
        return (
            <Manos>
                <Contenedor>
                    <Contenedor>
                        <li><Link to="/detalle"><img src="https://res.cloudinary.com/ohtico/image/upload/v1630879096/Block-Master-React/logo-blockBuster_qgkt4h.png" alt="Logo" /></Link></li>
                        <li> <Link to="/" > <Enlace >Todas</Enlace></Link></li>
                        <li><Enlace >Mas valoradas</Enlace></li>
                        <li><Enlace >Menos Valoradas</Enlace></li>
                        <Imperro>
                            <form onSubmit={handleOnsubmit}>
                                <But placeholder="Busca tu pelicula favorita" type="text" name="searchTerm" value={this.state.searchTerm} onChange={(e) => this.setState({ searchTerm: e.target.value })}/><Voto><i class="material-icons" onClick={handleOnsubmit} id="car">search</i></Voto>
                                <Link to="/login" ><Voto><i class="material-icons"  id="car">person_outline</i></Voto></Link>
                            </form>

                        </Imperro>
                    </Contenedor>
                </Contenedor>
                {/* <Boligrafo>Todas las peliculas</Boligrafo> */}
                {
                    this.state.peli.map((movie, index) => {
                        return (

                            <Cartas
                                key={`${movie}-${index}`}
                                movies={movie}
                            />


                        )
                    })
                }

            </Manos>
        )
    }
}
