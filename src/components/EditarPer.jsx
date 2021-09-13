import React, { Component } from 'react'
import { Tasa, Enlace, Voto} from '../style/StyledAll'
import {Link} from 'react-router-dom'



export default class EditarPer extends Component {

    actualizarLocal  = () => {
        localStorage.setItem('usuario', null)
        window.location.assign("/")
    }

    render() {
        return (
            <div>
                <Tasa>
                    
                 <Link to="/" >  <Voto onClick={this.actualizarLocal} ><Enlace>Back home</Enlace></Voto> </Link>
                </Tasa>
            </div>
        )
    }
}
