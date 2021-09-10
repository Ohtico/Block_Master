import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Tasa, Tetera, Nachos, But, Voto, Boligrafo, Enlace } from '../style/StyledAll'
import uuid from 'react-uuid'
import axios from 'axios'
import md5 from 'md5'
import Swal from 'sweetalert2'

const urlBase = 'https://api-sprint-dos.herokuapp.com/usuario'

export default class Registro extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            form: {
                id: '',
                apellido_paterno: '',
                nombre: '',
                username: '',
                password: ''
            }

        }
    }
    handleChange = async (e) => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    RegistroUsuario = async () => {
        await axios.post(urlBase, {
            id: uuid,
            apellido_paterno: this.state.form.apellido_paterno,
            nombre: this.state.form.nombre,
            username: this.state.form.username,
            password: md5(this.state.form.password)
        }).then(response => {
            Swal.fire({
                background: '#0E3FA9',
                title: `Bienvenido`,
                showConfirmButton: true,
                confirmButtonText: 'Continuar'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location = "/";
                }
            })
        }).catch(error => {
            console.log(error.message);
        })
    }

    render() {
        return (

            <Tasa>
                <div className="Registro py-5 container text-center">
                    <form className="form-signin" onSubmit={this.handleSubmit}>
                        <Nachos>
                            <img src="https://res.cloudinary.com/ohtico/image/upload/v1630879096/Block-Master-React/logo-blockBuster_qgkt4h.png" alt="Logo" />
                        </Nachos>
                        <Boligrafo>¡Registrate en nuestro sistema!</Boligrafo>
                        <div className="fadeIn first ">
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
                                name="username"
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
                            <Voto type="submit" onClick={() => this.RegistroUsuario()}>Register</Voto><br />
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
