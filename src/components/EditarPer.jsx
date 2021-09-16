import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Tasa, Voto, Enlace } from '../style/StyledAll'
let mirarLocal = JSON.parse(localStorage.getItem("usuario"))

export default class EditarPer extends Component {

    actualizarLocal = () => {
        localStorage.setItem('usuario', null)
        window.location.assign("/")

    }

    render() {
        console.log(mirarLocal[0]);
        return (
            <div className="d-flex justify-content-center">

                <div>
                    <img src="https://res.cloudinary.com/ohtico/image/upload/v1630879096/Block-Master-React/logo-blockBuster_qgkt4h.png" alt="Logo" />
                </div>
                <hr/>
                <div>
                    <h1>Bienvenido</h1>
                    <h1>{mirarLocal[0].nombre} {mirarLocal[0].apellido}</h1>
                    <p>{mirarLocal[0].username}</p>

                </div>

                <Tasa>
                    <Link to="/" >  <Voto onClick={this.actualizarLocal} ><Enlace>Cerrar Sesion</Enlace></Voto> </Link>
                </Tasa>

            </div>
        )
    }
}
