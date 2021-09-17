import React, { Component } from 'react'
import Cartas from '../components/Cartas';
import { Manos, Contenedor, Enlace, But, Voto, Imperro, Luz, NextP } from '../style/StyledAll'
import { Link } from 'react-router-dom'
import Carrosel from '../components/Carrosel';

let urlbase = 'https://pelis-blockmaster.herokuapp.com/peliculas?_page=1&_limit=10&title_like='
let valoracion = 'https://pelis-blockmaster.herokuapp.com/peliculas?title_like='
let nextt = 1;


let pedirLocal = JSON.parse(localStorage.getItem("usuario"))
export default class AppBlock extends Component {

    constructor() {
        super();
        this.state = {
            peli: [],
            searchTerm: '',
            sesion: 'true'
        }
    }

    async componentDidMount() {
        const rest = await fetch(urlbase)
        const data = await rest.json()
        this.setState({ peli: data })
    }

    paginacion = async (e) => {
        nextt++
        let newP = `https://pelis-blockmaster.herokuapp.com/peliculas?_page=${nextt}&_limit=10&title_like=`
        let rest = await fetch(newP)
        let nuevaPa = await rest.json()
        if(this.state.peli.length >=  80){
            nextt = ((nextt - nextt.length) +1)
        }
        this.setState({ peli:[...this.state.peli.concat(nuevaPa) ] })
        console.log(nextt);
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

        const res = await fetch(valoracion)
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
        const res = await fetch(valoracion)
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
                                <But placeholder="Busca tu pelicula favorita" type="text" name="searchTerm" value={this.state.searchTerm} onChange={(e) => this.setState({ searchTerm: e.target.value })} />
                                <Voto><i className="material-icons" onClick={handleOnsubmit} id="car">search</i></Voto>
                                <Link to={pedirLocal !== null ? "/editar" : "/login"}><Voto><i className="material-icons" id="car">person_outline</i></Voto></Link>
                                
                            </form>
                        </Imperro>
                    </Contenedor>
                </Contenedor>
                <Carrosel/>
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
               <div className="container d-flex justify-content-center mb-5">
                    <NextP className="btn btn-outline-primary" onClick={this.paginacion}><i className="material-icons" id="car">arrow_right</i></NextP>
                </div>
            </Manos>
        )
    }
}
