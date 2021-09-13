import React, { Component } from 'react'

import { ModalDiv, ContentDiv, Descripcion } from '../style/StyledAll';

export default class Video extends Component {

    constructor() {
        super();
        this.state = {
            codigo: []
        }
    }
    componentDidMount = async () => {
        const { id } = this.props.iframe
        const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=0ca79cfff3d14ef15bb56bac5dad90f8&language=us-US`;
        let rest = await fetch(url)
        let data = await rest.json()
        console.log(data.results[0].key);
        this.setState({codigo: data.results[0].key})
    }
    render() {

        return (
            <ModalDiv>
                <ContentDiv>
                    <Descripcion>
                    <span className="float-right" onClick={() => window.location.assign("/")}><i className="material-icons" id="car">cancel</i></span>
                    </Descripcion> 
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.state.codigo}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>           
                </ContentDiv>
            </ModalDiv>
        )
    }
}
