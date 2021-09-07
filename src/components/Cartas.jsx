import React, { Component } from 'react'

import {Cartica} from '../style/StyledAll';

export default class Cartas extends Component {
    render() {
        const {portada, puntuacion} = this.props.movies
        return (
            <div>
               <Cartica> <img src={portada} alt="" srcset="" />  </Cartica>
            </div>
        )
    }
}
