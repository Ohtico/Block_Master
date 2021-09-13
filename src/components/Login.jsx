import React, { Component } from 'react'
import axios from 'axios'
import md5 from 'md5'
import {Tasa, Tetera, But, Boligrafo, Voto, Enlace, Nachos} from '../style/StyledAll'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
const url = 'https://api-sprint-dos.herokuapp.com/usuario'
let usuarioLog = []

export default class Login extends Component {

    constructor(){
        super();
        this.state = {
            form:{
                username: '',
                password: ''
            }
        }
    }

    iniciarSesion = async () => {
        await axios.get(url, { params: { username: this.state.form.username, password: md5(this.state.form.password) } })
            .then(response => {
                return response.data;
            })
            .then(response => {
                if (response.length > 0) {
                    let respuesta = response[0];
                    
                    Swal.fire({
                        background: '#0E3FA9',
                        title: `Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`,
                        showConfirmButton: true,
                        confirmButtonText: 'Continuar'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location= "/";
                            const activo = {
                                nombre: respuesta.nombre,
                                apellido: respuesta.apellido_paterno,
                                username: respuesta.username,
                                id: respuesta.id,
                            }
                            usuarioLog.push(activo);
                            localStorage.setItem('usuario', JSON.stringify(usuarioLog))
                        }
                      })

                } else {
                    //alert(' El usuario o la contraseña no son correctos');
                    Swal.fire({
                        title: `El usuario o la contraseña no son correctos`,
                        background: '#0E3FA9',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value 
            }
        });
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.iniciarSesion();
    }

    render() {
        return (
            <Tasa>  
            <form onSubmit={this.handleSubmit} className="form-signin">
            <Nachos>
                     <img src="https://res.cloudinary.com/ohtico/image/upload/v1630879096/Block-Master-React/logo-blockBuster_qgkt4h.png" alt="Logo" />
                </Nachos>
                <Boligrafo>Login</Boligrafo>
                    <Tetera>
                        <But
                            type="email"
                            id="inputEmail"
                            className="form-control mt-1"
                            placeholder="Email"
                            required=""
                            name="username"
                            onChange={this.handleChange}/>
                        <But
                            type="Password"
                            id="inputPassword"
                            className="form-control mt-1"
                            placeholder="Password"
                            required=""
                            name="password"
                            onChange={this.handleChange}/><br />
                            
                        <Voto type="submit">Login</Voto>
                    </Tetera>
                    <Tasa>
                        <Link to="/registro" ><Enlace>Create new account </Enlace></Link>
                    </Tasa>
                    <Tasa>
                        <Link to="/" ><Enlace>Back home</Enlace></Link>
                    </Tasa>
                    
                  
            </form>
        </Tasa>
        )
    }
}
