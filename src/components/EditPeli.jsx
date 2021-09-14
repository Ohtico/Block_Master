import React, { Component } from 'react'
import { ModalDiv, ContentDiv } from '../style/StyledAll';
import axios from 'axios'
let control = ''

export default class EditPeli extends Component {


    constructor() {
        super();
        this.state = {
            edicion: [],
            echo: {
                poster_path: '',
                vote_average: '',
                title: '',
                overview: ''
            }
        }
    }

    componentDidMount = async () => {
        const { id } = this.props.editarVi
        // props que vienen desde la carta para mostrar el video
        let url2 = 'https://pelis-blockmaster.herokuapp.com/peliculas?title_like='
        let rest = await fetch(url2)
        let data = await rest.json()
        control = data.find(botella => botella.id === Number(id))
        const array = []
        array.push(control)
        this.setState({ edicion: array })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        //const url = `https://pelis-blockmaster.herokuapp.com/peliculas/${id}`;

    }

    handleInputChange = async (e) => {
        this.setState({
            echo:
            {
                ...this.state.echo,
                [e.target.name]: e.target.value
            }
        })
    }

    empujar = () => {
        const { id } = this.props.editarVi
        axios.put(`https://pelis-blockmaster.herokuapp.com/peliculas/${id}`, this.state.echo)
            .then(() => alert('actualizado'))

    }

    render() {
        return (

            <ModalDiv>
                <ContentDiv>
                    <form className="form-group" onSubmit={this.handleSubmit}>
                        <input

                            type="text"
                            className="form-control "
                            placeholder={control.poster_path}
                            name="poster_path"
                            onChange={this.handleInputChange}
                        />

                        <input
                            type="text"
                            className="form-control mt-2"
                            name="title"
                            autoComplete="off"
                            placeholder={control.title}
                            onChange={this.handleInputChange}
                        />
                        <input
                            type="number"
                            className="form-control mt-2"
                            name="vote_average"
                            autoComplete="off"
                            placeholder={control.vote_average}
                            onChange={this.handleInputChange}
                        />
                        <input
                            readOnly
                            type="number"
                            className="form-control mt-2"
                            name="id"
                            autoComplete="off"
                            value={control.id}
                            onChange={this.handleInputChange}
                        />

                        <textarea
                            className="form-control mt-2"
                            autoComplete="off"
                            name="overview"
                            placeholder={control.overview}
                            onChange={this.handleInputChange}
                        >
                        </textarea>

                        <div className="d-grid gap-2 mx-auto mt-2">
                            <button
                                type="submit"
                                className="btn btn-dark"
                                onClick={this.empujar}
                            >
                                Actualizar
                            </button>
                        </div>

                    </form>
                </ContentDiv>
            </ModalDiv>
        )
    }
}
