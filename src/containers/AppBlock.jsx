import React, { Component } from 'react'
import Cartas from '../components/Cartas';
import {Manos} from '../style/StyledAll'
import Cabecera from '../components/Cabecera'  

const url = 'https://api-sprint-dos.herokuapp.com/album'

export default class AppBlock extends Component {
    constructor() {
        super();
        this.state = {
            peli : [],
            searchTerm : ''
        }
    }
    async componentDidMount (){
        const res = await fetch(url)
        const data = await res.json()
        this.setState({peli: data})
        console.log(data);
    }
    render() {
        return (
            <Manos>
                <Cabecera/> 
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
              
            </Manos>
        )
    }
}
