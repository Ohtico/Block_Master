import React, { Component } from 'react'
import { ModalDiv, ContentDiv, ContDetalles, Descripcion } from '../style/StyledAll';
import { Link } from 'react-router-dom'

export default class Detalle extends Component {


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
                            <Link to="/"><button>close</button></Link>
                        </Descripcion>
                    </ContDetalles>
                </ContentDiv>
            </ModalDiv>
        )
    }
}
