import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Tasa, Voto, Enlace, Nachos, Tetera, Boligrafo, Correo } from '../style/StyledAll'
let mirarLocal = JSON.parse(localStorage.getItem("usuario"))

export default class EditarPer extends Component {

    actualizarLocal = () => {
        localStorage.setItem('usuario', null)
        window.location.assign("/")

    }

    render() {
        console.log(mirarLocal[0]);
        return (
            <Tasa>
                <div>
                    <Nachos>
                        <img src="https://res.cloudinary.com/ohtico/image/upload/v1630879096/Block-Master-React/logo-blockBuster_qgkt4h.png" alt="Logo" />
                    </Nachos>
                    <hr />
                    <Tetera>
                        <Boligrafo>Bienvenido</Boligrafo>
                        <Boligrafo>{mirarLocal[0].nombre} {mirarLocal[0].apellido}</Boligrafo>
                        <Correo>{mirarLocal[0].username}</Correo>
                    <Tasa>
                        <Link to="/" >  <Voto onClick={this.actualizarLocal} ><Enlace>Cerrar Sesion</Enlace></Voto> </Link>
                        <Link to="/" ><Enlace><Voto><Enlace> Back home</Enlace></Voto></Enlace></Link>
                    </Tasa>
                    </Tetera>
                </div>
            </Tasa>
        )
    }
}
