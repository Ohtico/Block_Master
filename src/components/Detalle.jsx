import React, { Component } from 'react'
import { ModalDiv, ContentDiv, ContDetalles, Descripcion, VerAhora } from '../style/StyledAll';
import Video from './Video';
import axios from 'axios'
import EditPeli from './EditPeli';


export default class Detalle extends Component {

    constructor() {
        super();
        this.state = {
            video: [],
            editar: []
        }
    }

    verAhora = (e) => {
        const arrayDos = []
        arrayDos.push(e.target)
        this.setState({ video: arrayDos })
    }

    handleDelete = async (e) => {
        let id = e.target.id
        const url = `https://pelis-blockmaster.herokuapp.com/peliculas/${id}`;
        await axios.delete(url);
        window.location.assign("/")
    }

    editarPeliculas = (e) => {
        const modificarPe = []
        modificarPe.push(e.target)
        this.setState({ editar: modificarPe })
    }

    render() {
        const { id, className, src, alt } = this.props.lapiz

        return (

            <ModalDiv>
                <ContentDiv>
                    <ContDetalles>
                        <img id={id} src={src} width="200px" alt="" />
                        <Descripcion>
                            <h1>{alt} </h1>
                            <p>{className}</p>
                            <div className="d-grid gap-2 mx-auto mt-2">
                                <VerAhora className="d-flex justify-content-center" onClick={this.verAhora} id={id} ><i className="material-icons" id="car">arrow_right</i>VER AHORA</VerAhora>
                                <VerAhora className="d-flex justify-content-center" onClick={this.handleDelete} id={id} ><i className="material-icons" id="car">arrow_right</i>REMOVER</VerAhora>
                                <VerAhora className="d-flex justify-content-center" onClick={this.editarPeliculas} id={id} ><i className="material-icons" id="car">arrow_right</i>EDITAR</VerAhora>
                            </div>
                            {
                                this.state.video.map((pendiente, index) => {
                                    return (
                                        <Video
                                            key={`${pendiente}-${index}`}
                                            iframe={pendiente}
                                        />
                                    )
                                })
                            }
                            {
                                this.state.editar.map((modificar, index) => {
                                    return (
                                        <EditPeli
                                            key={`${modificar}-${index}`}
                                            editarVi={modificar}
                                        />
                                    )
                                })
                            }
                        </Descripcion>
                        <span className="float-right" onClick={() => window.location.assign("/")}><i className="material-icons" id="car">cancel</i></span>
                    </ContDetalles>
                </ContentDiv>
            </ModalDiv>
        )
    }
}
