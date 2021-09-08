import React, { Component } from 'react'

import {Cartica} from '../style/StyledAll';

export default class Cartas extends Component {
    render() {
        const {Poster} = this.props.movies
        return (
            
            <div>
                
               <Cartica> <img src={Poster} alt=""/>  </Cartica>
            </div>
        )
    }
}
