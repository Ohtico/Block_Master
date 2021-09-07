import React, { Component } from 'react'
import {Link} from "react-router-dom";

import { Contenedor, Enlace, But, Voto, Imperro} from '../style/StyledAll';

export default class Cabecera extends Component {
    render() {
        return (
            <div>
                <Contenedor>
                    <Contenedor>
                        <li><Enlace ><img src="https://res.cloudinary.com/ohtico/image/upload/v1630879096/Block-Master-React/logo-blockBuster_qgkt4h.png" alt="Logo" /></Enlace></li>
                        <li><Enlace >Todas</Enlace></li>
                        <li><Enlace >Mas valoradas</Enlace></li>
                        <li><Enlace >Menos Valoradas</Enlace></li>
                        <Imperro>
                            <But placeholder="Busca tu pelicula favorita"/><Voto><i class="material-icons" id="car">search</i></Voto>
                        </Imperro>
                    </Contenedor>
                </Contenedor>
            </div>

        )
    }
}
