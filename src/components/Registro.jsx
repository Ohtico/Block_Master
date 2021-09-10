import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Tasa, Tetera, Nachos, But, Voto, Boligrafo, Enlace } from '../style/StyledAll'
import uuid from 'react-uuid'
import axios from 'axios'

const urlBase = 'https://api-sprint-dos.herokuapp.com/usuario'

export default class Registro extends Component {

    constructor(){
        super();
        this.state = {
            data: [],
            form:{
                id:'',
                apellido_paterno: '',
                nombre: '',
                username: '',
                password: ''
            }

        }
    }
    handleChange = async (e) =>{
            await this.setState({ 
               form: {
                   ...this.state.form,
                   [e.targe.name]: e.targe.value
               } 
            });
            console.log(this.state.form);
    }

    handleSutmit = (e) => {
        e.preventDefault();
    }

    RegistroUsuario = async () => {
        await axios.post
    }

    render() {
        return (

            <Tasa>
                <div className="Registro py-5 container text-center">
                    <form className="form-signin" onSubmit={this.handleSutmit}>
                        <Boligrafo>¡Registrate en nuestro sistema!</Boligrafo>
                        <div className="fadeIn first ">
                            <Nachos>
                                <img src="https://res.cloudinary.com/ohtico/image/upload/v1630879096/Block-Master-React/logo-blockBuster_qgkt4h.png" alt="Logo" />
                            </Nachos>
                            <Boligrafo>Crea una cuenta</Boligrafo>
                        </div>
                        <Tetera>
                            <But
                                type="text"
                                placeholder="Last Name"
                                name="apellido_paterno"
                                className="form-control"
                                autoComplete="off"
                                onChange={this.handleChange}
                            />
                            <But
                                type="text"
                                name="nombre"
                                className="form-control"
                                placeholder="Name"
                                required=""
                                onChange={this.handleChange}
                            />
                            <But
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Email"
                                required=""
                                onChange={this.handleChange}
                            />

                            <But
                                type="Password"
                                name="password"
                                className="form-control"
                                placeholder="Password"
                                required=""
                                onChange={this.handleChange}
                            />
                            <br />
                            <Voto type="submit">Register</Voto><br />
                        </Tetera>
                        <Tasa>
                            <Link to="/login" ><Enlace>Already registered?</Enlace></Link>
                        </Tasa>

                    </form>
                </div>
            </Tasa>

        )
    }
}
