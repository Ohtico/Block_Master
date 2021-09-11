import React, { Component } from 'react'
import Cartas from '../components/Cartas';
import { Manos, Contenedor, Enlace, But, Voto, Imperro, Luz } from '../style/StyledAll'
import { Link } from 'react-router-dom'

// import Cabecera from '../components/Cabecera'  

let urlbase = 'https://pelis-blockmaster.herokuapp.com/peliculas?title_like='
//?titulo_like=lok

export default class AppBlock extends Component {

    constructor() {
        super();
        this.state = {
            peli: [],
            searchTerm: ''
        }
    }

    async componentDidMount() {
        const rest = await fetch(urlbase)
        const data = await rest.json()
        this.setState({ peli: data })
        console.log(data);
    }
    trello = async (e) => {
        e.preventDefault()
        const res = await fetch(urlbase)
        const data = await res.json()
        const array = []
        data.map(votadora => {
            if (votadora) {
                array.push(votadora)
                this.setState({ peli: array })
            }
        })

    }

    masValoradas = async () => {
        
        const res = await fetch(urlbase)
        const data = await res.json()
        const array = []
        data.map(votadora => {
            if (votadora.vote_average > 7) {
                array.push(votadora)
                this.setState({ peli: array })
            }
        })
    }

    menosValoradas = async () => {
        const res = await fetch(urlbase)
        const data = await res.json()
        const array = []
        data.map(votadora => {
            if (votadora.vote_average < 7) {
                array.push(votadora)
                this.setState({ peli: array })
            }
        })
    }

    render() {
        const handleOnsubmit = async (e) => {
            e.preventDefault()
            const res = await fetch(`${urlbase}${this.state.searchTerm}`)
            const data = await res.json()
            this.setState({ peli: data })
        }
        return (
            <Manos>
                <Contenedor>
                    <Contenedor>
                        <li><Link to="/"><img src="https://res.cloudinary.com/ohtico/image/upload/v1630879096/Block-Master-React/logo-blockBuster_qgkt4h.png" alt="Logo" /></Link></li>
                        <li> <Link onClick={this.trello} ><Enlace >Todas</Enlace></Link></li>
                        <li><Enlace onClick={this.masValoradas} >Mas valoradas</Enlace></li>
                        <li><Enlace onClick={this.menosValoradas} >Menos Valoradas</Enlace></li>
                        <Imperro>
                            <form onSubmit={handleOnsubmit}>
                                <But placeholder="Busca tu pelicula favorita" type="text" name="searchTerm" value={this.state.searchTerm} onChange={(e) => this.setState({ searchTerm: e.target.value })} /><Voto><i className="material-icons" onClick={handleOnsubmit} id="car">search</i></Voto>
                                <Link to="/login"><Voto><i className="material-icons" id="car">person_outline</i></Voto></Link>
                            </form>

                        </Imperro>
                    </Contenedor>
                </Contenedor>

                <Luz>
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
                </Luz>



            </Manos>
        )
    }
}
